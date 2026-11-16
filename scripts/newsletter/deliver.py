#!/usr/bin/env python3
"""Fail-closed Kit newsletter delivery. Python 3.12+, standard library only.

No production capability is enabled by the checked-in policy. Never log HTTP
bodies, headers, subscriber records, inputs, or exception strings.
"""
from __future__ import annotations

import argparse
from datetime import date, datetime, time, timedelta, timezone
import hashlib
from html.parser import HTMLParser
import ipaddress
import json
import os
from pathlib import Path
import re
import subprocess
import sys
import time as clock
from urllib.error import HTTPError, URLError
from urllib.parse import urlencode, urlsplit
from urllib.request import HTTPRedirectHandler, Request, build_opener
from zoneinfo import ZoneInfo

ET = ZoneInfo("America/New_York")
REPO = "JLshope12/jacob-shope-mortgage"
WORKFLOW = "newsletter-delivery.yml"
SENDER = "jacob@jacobshopemortgage.com"
PUBLIC_EMAILS = {SENDER, "shope@mpirefi.com"}
DATED_TEMPLATES = {5500011, 5592568}
MAX_BYTES = 250_000
MAX_PAGES = 100
EMAIL_RE = re.compile(r"[A-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}", re.I)
MARKER_RE = re.compile(r"^jsm-intent-(\d{4}-\d{2}-\d{2})--(sync(?:\.create)?(?:\.schedule)?|create(?:\.schedule)?|schedule)--(\d+)-(\d+)$")


class Blocked(Exception):
    """Message is an application-owned error code, never remote/user text."""


def require(condition, code):
    if not condition:
        raise Blocked(code)


def object_keys(value, keys, code):
    require(isinstance(value, dict) and set(value) == set(keys), code)


def integer(value, code):
    require(type(value) is int and value > 0, code)
    return value


def digest(value):
    return hashlib.sha256(value.encode("utf-8")).hexdigest()


def email_digest(value):
    return digest(value.strip().casefold())


def timestamp(value):
    require(isinstance(value, str), "INVALID_TIMESTAMP")
    try:
        result = datetime.fromisoformat(value.replace("Z", "+00:00"))
    except ValueError:
        raise Blocked("INVALID_TIMESTAMP") from None
    require(result.tzinfo is not None, "TIMESTAMP_NEEDS_TIMEZONE")
    return result


def load_json(path):
    try:
        raw = Path(path).read_bytes()
        require(len(raw) <= MAX_BYTES, "JSON_TOO_LARGE")
        def unique(pairs):
            result = {}
            for key, value in pairs:
                require(key not in result, "DUPLICATE_JSON_KEY")
                result[key] = value
            return result
        return json.loads(raw, object_pairs_hook=unique,
                          parse_constant=lambda _: (_ for _ in ()).throw(Blocked("INVALID_JSON_NUMBER")))
    except (ValueError, OSError, UnicodeError):
        raise Blocked("INVALID_JSON_FILE") from None


def public_url(value):
    require(isinstance(value, str) and len(value) <= 2048, "INVALID_PUBLIC_URL")
    try:
        parsed = urlsplit(value)
        require(parsed.scheme == "https" and parsed.hostname and not parsed.username
                and not parsed.password and parsed.port in (None, 443), "INVALID_PUBLIC_URL")
        require("." in parsed.hostname and not parsed.hostname.endswith((".local", ".internal")), "INVALID_PUBLIC_URL")
        try:
            require(ipaddress.ip_address(parsed.hostname).is_global, "INVALID_PUBLIC_URL")
        except ValueError:
            pass
        require(not re.search(r"(?:token|password|secret|api_key|email|subscriber)=", parsed.query, re.I), "PRIVATE_URL_DATA")
    except ValueError:
        raise Blocked("INVALID_PUBLIC_URL") from None


class EmailHTML(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.images = []
        self.text = []
        self.unsubscribes = 0
        self.issue_markers = []
        self.has_html = False
        self.has_body = False

    def handle_starttag(self, tag, attrs):
        require(tag not in {"script", "iframe", "object", "embed", "form", "input", "video", "audio", "link", "base"}, "UNSAFE_HTML")
        self.has_html |= tag == "html"
        self.has_body |= tag == "body"
        require(len({key for key, _ in attrs}) == len(attrs), "DUPLICATE_HTML_ATTRIBUTE")
        attrs = dict(attrs)
        for key, value in attrs.items():
            require(not key.startswith("on") and key not in {"srcdoc", "srcset"}, "UNSAFE_HTML")
            if key == "data-newsletter-issue":
                self.issue_markers.append(value)
            if key in {"href", "src", "background"}:
                if tag == "a" and key == "href" and value == "{{ unsubscribe_url }}":
                    self.unsubscribes += 1
                elif value and value.startswith("mailto:"):
                    require(value[7:].casefold() in PUBLIC_EMAILS, "PRIVATE_EMAIL_IN_CONTENT")
                elif value and value.startswith("tel:"):
                    require(value == "tel:+17046145340", "UNAPPROVED_PHONE")
                else:
                    public_url(value)
        if tag == "img":
            require(attrs.get("alt"), "IMAGE_ALT_MISSING")
            self.images.append(attrs.get("src"))

    def handle_data(self, data):
        self.text.append(data)


def normalized_content(html):
    # A new date pasted onto unchanged last week's copy is not a fresh issue.
    html = re.sub(r"\d{4}-\d{2}-\d{2}", "ISSUE_DATE", html)
    html = re.sub(r"(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},?\s+\d{4}", "ISSUE_DATE", html, flags=re.I)
    return re.sub(r"\s+", " ", html).strip()


def validate_issue(issue, policy, now, previous=()):
    object_keys(issue, {"schema_version", "issue_date", "generated_at", "subject", "preview_text", "html", "plain_text", "public_news_only", "approved_for_delivery", "sources"}, "INVALID_ISSUE_SCHEMA")
    require(type(issue["schema_version"]) is int and issue["schema_version"] == 1, "INVALID_SCHEMA_VERSION")
    require(issue["public_news_only"] is True and issue["approved_for_delivery"] is True, "CONTENT_NOT_APPROVED")
    require(isinstance(issue["issue_date"], str) and re.fullmatch(r"\d{4}-\d{2}-\d{2}", issue["issue_date"]), "INVALID_ISSUE_DATE")
    try:
        day = date.fromisoformat(issue["issue_date"])
    except ValueError:
        raise Blocked("INVALID_ISSUE_DATE") from None
    require(day.weekday() == 6, "ISSUE_MUST_BE_SUNDAY")
    generated = timestamp(issue["generated_at"])
    require(timedelta(0) <= now - generated <= timedelta(hours=policy["max_content_age_hours"]), "STALE_CONTENT")
    require(generated.astimezone(ET).date() == day, "ISSUE_NOT_GENERATED_ON_SEND_DAY")
    send_at = datetime.combine(day, time(19), ET)
    require(now + timedelta(minutes=15) < send_at <= now + timedelta(hours=24), "SEND_WINDOW_CLOSED")
    for key, low, high in (("subject", 5, 180), ("preview_text", 5, 250), ("html", 200, 120_000), ("plain_text", 100, 60_000)):
        require(isinstance(issue[key], str) and low <= len(issue[key]) <= high, "INVALID_CONTENT_LENGTH")
    require(not re.search(r"[\r\n\x00-\x1f]", issue["subject"] + issue["preview_text"]), "UNSAFE_SUBJECT")
    text = "\n".join(issue[key] for key in ("subject", "preview_text", "html", "plain_text"))
    require(not re.search(r"\b(?:lorem ipsum|TODO|TBD|INSERT CONTENT|api[_ -]?key|password|social security number)\b", text, re.I), "UNFINISHED_OR_PRIVATE_CONTENT")
    require({x.casefold() for x in EMAIL_RE.findall(text)} <= PUBLIC_EMAILS, "PRIVATE_EMAIL_IN_CONTENT")
    require("{%" not in issue["html"], "UNAPPROVED_LIQUID")
    require(set(re.findall(r"{{\s*(.*?)\s*}}", issue["html"])) <= {"unsubscribe_url", "address"}, "UNAPPROVED_LIQUID")
    parsed = EmailHTML()
    parsed.feed(issue["html"])
    parsed.close()
    require(parsed.has_html and parsed.has_body and parsed.unsubscribes == 1, "INCOMPLETE_HTML")
    require(parsed.issue_markers == [issue["issue_date"]], "ISSUE_MARKER_MISMATCH")
    require(sorted(parsed.images) == sorted(policy["required_image_urls"]), "BRAND_IMAGES_CHANGED")
    visible = " ".join(parsed.text)
    visible_day = f"{day:%B} {day.day}, {day.year}"
    require(visible_day in visible and visible_day in issue["plain_text"], "VISIBLE_ISSUE_DATE_MISSING")
    for content in (visible, issue["plain_text"]):
        require(policy["postal_address"] in content and re.search(r"NMLS\s*#?\s*2090979\b", content), "COMPLIANCE_FOOTER_MISSING")
    require(isinstance(issue["sources"], list) and 1 <= len(issue["sources"]) <= 30, "INVALID_SOURCES")
    for source in issue["sources"]:
        object_keys(source, {"url", "published_on", "checked_at"}, "INVALID_SOURCE_SCHEMA")
        public_url(source["url"])
        require(source["url"] in issue["html"], "SOURCE_NOT_IN_ISSUE")
        checked = timestamp(source["checked_at"])
        require(timedelta(0) <= now - checked <= timedelta(hours=policy["max_content_age_hours"]), "STALE_SOURCE_CHECK")
        try:
            require(date.fromisoformat(source["published_on"]) <= day, "FUTURE_SOURCE_DATE")
        except (ValueError, TypeError):
            raise Blocked("INVALID_SOURCE_DATE") from None
    for old in previous:
        if old.get("issue_date") != issue["issue_date"]:
            require(normalized_content(old.get("html", "")) != normalized_content(issue["html"]), "REUSED_OLD_COPY")
    return send_at


class NoRedirect(HTTPRedirectHandler):
    def redirect_request(self, *args, **kwargs):
        raise Blocked("HTTP_REDIRECT_BLOCKED")


class HTTPClient:
    def __init__(self, base, headers, sleep=clock.sleep):
        self.base, self.headers, self.sleep = base, headers, sleep
        self.opener = build_opener(NoRedirect())
        self.last_request_at = 0.0

    def request(self, method, path, data=None):
        require(path.startswith("/") and not path.startswith("//"), "INVALID_API_PATH")
        body = None if data is None else json.dumps(data, separators=(",", ":")).encode()
        request = Request(self.base + path, data=body, headers=self.headers, method=method)
        for attempt in range(3 if method == "GET" else 1):
            try:
                if self.base == "https://api.kit.com/v4":
                    self.sleep(max(0.0, 0.55 - (clock.monotonic() - self.last_request_at)))
                    self.last_request_at = clock.monotonic()
                with self.opener.open(request, timeout=30) as response:
                    raw = response.read(8_000_001)
                    require(len(raw) <= 8_000_000, "API_RESPONSE_TOO_LARGE")
                    result = json.loads(raw)
                    require(isinstance(result, dict), "INVALID_API_RESPONSE")
                    return result
            except HTTPError as error:
                code = error.code
                error.close()  # Never read/print a remote error body.
                if method == "GET" and code in {429, 500, 502, 503, 504} and attempt < 2:
                    self.sleep(2 ** (attempt + 1))
                    continue
                raise Blocked("API_READ_FAILED" if method == "GET" else "MUTATION_UNCERTAIN") from None
            except (URLError, TimeoutError, OSError, ValueError, UnicodeError):
                if method == "GET" and attempt < 2:
                    self.sleep(2 ** (attempt + 1))
                    continue
                raise Blocked("API_READ_FAILED" if method == "GET" else "MUTATION_UNCERTAIN") from None
        raise Blocked("API_READ_FAILED")


class Kit:
    def __init__(self, http):
        self.http = http

    def get(self, path):
        return self.http.request("GET", path)

    def rows(self, path, key, params=None):
        params = dict(params or {})
        params["per_page"] = 500
        seen, cursors = {}, set()
        for _ in range(MAX_PAGES):
            result = self.get(path + "?" + urlencode(params))
            rows, paging = result.get(key), result.get("pagination")
            require(isinstance(rows, list) and isinstance(paging, dict), "INVALID_PAGINATION")
            require(type(paging.get("has_next_page")) is bool, "INVALID_PAGINATION")
            for row in rows:
                require(isinstance(row, dict), "INVALID_API_ROW")
                row_id = integer(row.get("id"), "INVALID_API_ID")
                require(row_id not in seen or seen[row_id] == row, "CONFLICTING_API_ROWS")
                seen[row_id] = row
            if not paging["has_next_page"]:
                return list(seen.values())
            cursor = paging.get("end_cursor")
            require(rows and isinstance(cursor, str) and cursor and cursor not in cursors, "INVALID_PAGINATION")
            cursors.add(cursor)
            params["after"] = cursor
        raise Blocked("PAGINATION_LIMIT")

    def broadcast(self, ident):
        value = self.get(f"/broadcasts/{integer(ident, 'INVALID_BROADCAST_ID')}").get("broadcast")
        require(isinstance(value, dict), "INVALID_BROADCAST_RESPONSE")
        stats = self.get(f"/broadcasts/{ident}/stats").get("broadcast")
        require(isinstance(stats, dict) and stats.get("id") == ident and isinstance(stats.get("stats"), dict), "INVALID_BROADCAST_STATS")
        status = stats["stats"].get("status")
        require("status" not in value or value["status"] == status, "BROADCAST_STATUS_NOT_CONSISTENT")
        return dict(value, status=status)


def configuration(policy, env):
    expected = {"schema_version", "drafts_enabled", "scheduling_enabled", "default_mode", "neutral_template_verified", "private_scheduling_verified", "audience_verified", "max_content_age_hours", "audience_min", "audience_max", "required_image_urls", "postal_address", "signup_sync_enabled", "signup_sync_audit"}
    object_keys(policy, expected, "INVALID_POLICY")
    require(type(policy["schema_version"]) is int and policy["schema_version"] == 1, "INVALID_POLICY")
    for key in ("drafts_enabled", "scheduling_enabled", "neutral_template_verified", "private_scheduling_verified", "audience_verified", "signup_sync_enabled"):
        require(type(policy[key]) is bool, "INVALID_POLICY")
    require(policy["default_mode"] in {"draft", "schedule"}, "INVALID_POLICY")
    require(type(policy["max_content_age_hours"]) is int and 1 <= policy["max_content_age_hours"] <= 6, "INVALID_POLICY")
    require(type(policy["audience_min"]) is int and type(policy["audience_max"]) is int and 1 <= policy["audience_min"] <= policy["audience_max"] <= 10_000, "INVALID_POLICY")
    config = {}
    for name in ("ACCOUNT_ID", "NEWSLETTER_TAG_ID", "TEMPLATE_ID"):
        value = env.get("KIT_" + name, "")
        require(re.fullmatch(r"[1-9]\d{0,14}", value) is not None, "MISSING_ACCOUNT_CONFIGURATION")
        config[name.lower()] = int(value)
    for name in ("ACCOUNT_NAME", "NEWSLETTER_TAG_NAME", "TEMPLATE_NAME"):
        value = env.get("KIT_" + name, "")
        require(isinstance(value, str) and 1 <= len(value) <= 200, "MISSING_ACCOUNT_CONFIGURATION")
        config[name.lower()] = value
    excluded = env.get("KIT_EXCLUDED_EMAIL_SHA256", "")
    require(re.fullmatch(r"[0-9a-f]{64}", excluded) is not None, "MISSING_EXCLUSION_GUARD")
    require(config["template_id"] not in DATED_TEMPLATES, "DATED_TEMPLATE_FORBIDDEN")
    config["excluded_hash"] = excluded
    object_keys(policy["signup_sync_audit"], {"tag_id", "reviewed_at", "no_other_automation_use"}, "INVALID_SYNC_AUDIT")
    if policy["signup_sync_enabled"]:
        audit = policy["signup_sync_audit"]
        require(type(audit["tag_id"]) is int and audit["tag_id"] == config["newsletter_tag_id"]
                and audit["no_other_automation_use"] is True, "SIGNUP_SYNC_NOT_AUDITED")
        require(timestamp(audit["reviewed_at"]) <= datetime.now(timezone.utc), "INVALID_SYNC_AUDIT")
    return config


def check_capabilities(policy, mode):
    require(mode in {"draft", "schedule"}, "INVALID_MODE")
    require(policy["drafts_enabled"] is True, "DRAFT_CONNECTION_DISABLED")
    require(policy["audience_verified"] is True, "AUDIENCE_NOT_APPROVED")
    require(policy["neutral_template_verified"] is True, "TEMPLATE_NOT_VERIFIED")
    if mode == "schedule":
        require(policy["scheduling_enabled"] is True and policy["private_scheduling_verified"] is True, "PRIVATE_SCHEDULING_NOT_VERIFIED")


def verify_account(kit, config, policy):
    account = kit.get("/account").get("account")
    require(isinstance(account, dict) and account.get("id") == config["account_id"] and account.get("name") == config["account_name"], "WRONG_KIT_ACCOUNT")
    addresses = account.get("sending_addresses")
    require(isinstance(addresses, list), "SENDER_NOT_VERIFIED")
    matches = [a for a in addresses if isinstance(a, dict) and a.get("email_address") == SENDER]
    require(len(matches) == 1 and matches[0].get("is_verified") is True, "SENDER_NOT_VERIFIED")
    templates = kit.rows("/email_templates", "email_templates")
    templates = [t for t in templates if t["id"] == config["template_id"]]
    require(len(templates) == 1 and templates[0].get("name") == config["template_name"] and templates[0].get("category") == "HTML", "WRONG_OR_UNSUPPORTED_TEMPLATE")
    tags = kit.rows("/tags", "tags")
    tags = [t for t in tags if t["id"] == config["newsletter_tag_id"]]
    require(len(tags) == 1 and tags[0].get("name") == config["newsletter_tag_name"], "WRONG_AUDIENCE_TAG")
    members = kit.rows(f"/tags/{config['newsletter_tag_id']}/subscribers", "subscribers", {"status": "all"})
    active = 0
    active_members = {}
    for member in members:
        email = member.get("email_address")
        require(isinstance(email, str) and EMAIL_RE.fullmatch(email), "INVALID_AUDIENCE_ADDRESS")
        require(email_digest(email) != config["excluded_hash"], "EXCLUDED_ADDRESS_IN_AUDIENCE")
        require(member.get("state") in {"active", "inactive", "bounced", "complained", "cancelled"}, "UNKNOWN_SUBSCRIBER_STATE")
        active += member["state"] == "active"
        if member["state"] == "active":
            active_members[member["id"]] = email.strip().casefold()
    # This existing website signup form is the only independently approved
    # new-subscriber source. Never tag/create/activate/resubscribe from here.
    form_members = kit.rows("/forms/9614062/subscribers", "subscribers", {"status": "active"})
    missing = []
    for member in form_members:
        email = member.get("email_address")
        require(isinstance(email, str) and EMAIL_RE.fullmatch(email) and member.get("state") == "active", "INVALID_FORM_MEMBER")
        if email_digest(email) == config["excluded_hash"]:
            continue
        if member["id"] not in active_members:
            missing.append(member)
        else:
            require(active_members[member["id"]] == email.strip().casefold(), "FORM_AND_TAG_IDENTITY_MISMATCH")
    require(policy["audience_min"] <= active <= policy["audience_max"], "AUDIENCE_SIZE_OUT_OF_BOUNDS")
    require(not missing or policy["signup_sync_enabled"] is True, "ACTIVE_SIGNUP_MISSING_NEWSLETTER_TAG")
    require(len(missing) <= 100, "SIGNUP_SYNC_BATCH_REQUIRES_REVIEW")
    # Pending records stay only in process memory, never outputs/artifacts/logs.
    return missing


def sync_signups(kit, members, config, policy, sleep=clock.sleep):
    require(policy["signup_sync_enabled"] is True, "SIGNUP_SYNC_DISABLED")
    audit = policy["signup_sync_audit"]
    require(audit["tag_id"] == config["newsletter_tag_id"] and audit["no_other_automation_use"] is True, "SIGNUP_SYNC_NOT_AUDITED")
    for member in members:
        current = kit.get(f"/subscribers/{member['id']}").get("subscriber")
        require(isinstance(current, dict) and current.get("id") == member["id"]
                and current.get("email_address") == member["email_address"]
                and current.get("state") == "active", "SIGNUP_CHANGED_BEFORE_TAGGING")
        require(email_digest(current["email_address"]) != config["excluded_hash"], "EXCLUDED_ADDRESS_IN_AUDIENCE")
        try:
            result = kit.http.request("POST", f"/tags/{config['newsletter_tag_id']}/subscribers/{member['id']}", {}).get("subscriber")
            require(isinstance(result, dict) and result.get("id") == current["id"]
                    and result.get("email_address") == current["email_address"]
                    and result.get("state") == "active", "SIGNUP_SYNC_UNCERTAIN_REVIEW_REQUIRED")
        except Blocked:
            raise Blocked("SIGNUP_SYNC_UNCERTAIN_REVIEW_REQUIRED") from None
    # List reads can lag up to five minutes. Only poll; never repeat a tag POST.
    for attempt in range(21):
        if not verify_account(kit, config, policy):
            return
        if attempt < 20:
            sleep(15)
    raise Blocked("SIGNUP_SYNC_NOT_YET_VISIBLE_REVIEW_REQUIRED")


def payload_for(issue, config):
    payload = {
        "email_address": SENDER,
        "email_template_id": config["template_id"],
        "subject": issue["subject"],
        "preview_text": issue["preview_text"],
        "content": issue["html"],
        "public": False,
        "published_at": None,
        "send_at": None,
        "subscriber_filter": [{"all": [{"type": "tag", "ids": [config["newsletter_tag_id"]]}]}],
    }
    fingerprint = digest(json.dumps({"issue": issue, "account_id": config["account_id"], "payload": payload}, sort_keys=True, separators=(",", ":")))
    payload["description"] = f"jsm-newsletter/{issue['issue_date']} sha256:{fingerprint}"
    return payload, fingerprint


def canonical_filter(value):
    require(isinstance(value, list) and len(value) == 1 and isinstance(value[0], dict), "BROADCAST_AUDIENCE_MISMATCH")
    group = {key: item for key, item in value[0].items() if item is not None}
    require(set(group) == {"all"}, "BROADCAST_AUDIENCE_MISMATCH")
    require(isinstance(group["all"], list) and len(group["all"]) == 1, "BROADCAST_AUDIENCE_MISMATCH")
    term = group["all"][0]
    require(isinstance(term, dict) and set(term) == {"type", "ids"} and term["type"] == "tag"
            and isinstance(term["ids"], list) and len(term["ids"]) == 1 and type(term["ids"][0]) is int, "BROADCAST_AUDIENCE_MISMATCH")
    return [{"all": [term]}]


def verify_broadcast(broadcast, payload, send_at):
    integer(broadcast.get("id"), "INVALID_BROADCAST_ID")
    require(broadcast.get("public") is False and broadcast.get("published_at") is None and broadcast.get("public_url") is None, "BROADCAST_PRIVACY_MISMATCH")
    for key in ("subject", "preview_text", "content", "description", "email_address"):
        require(broadcast.get(key) == payload[key], "BROADCAST_CONTENT_MISMATCH")
    require(isinstance(broadcast.get("email_template"), dict) and broadcast["email_template"].get("id") == payload["email_template_id"], "BROADCAST_TEMPLATE_MISMATCH")
    require(canonical_filter(broadcast.get("subscriber_filter")) == payload["subscriber_filter"], "BROADCAST_AUDIENCE_MISMATCH")
    status = broadcast.get("status")
    require(status in {"draft", "scheduled", "sending", "completed"}, "UNKNOWN_OR_ABORTED_BROADCAST")
    if status == "draft":
        require(broadcast.get("send_at") is None, "AMBIGUOUS_DRAFT_STATE")
    else:
        require(timestamp(broadcast.get("send_at")) == send_at, "BROADCAST_SCHEDULE_MISMATCH")
    return status


def find_existing(kit, issue, payload, send_at):
    prefix = f"jsm-newsletter/{issue['issue_date']}"
    rows = kit.rows("/broadcasts", "broadcasts")  # All statuses; never slim=true.
    require(all("description" in row for row in rows), "INCOMPLETE_BROADCAST_INDEX")
    candidates = [row for row in rows if isinstance(row.get("description"), str) and row["description"].startswith(prefix)]
    require(len(candidates) <= 1, "DUPLICATE_ISSUE_BROADCASTS")
    if not candidates:
        return None
    broadcast = kit.broadcast(candidates[0]["id"])
    verify_broadcast(broadcast, payload, send_at)
    return broadcast


def needed_operations(broadcast, mode):
    if broadcast is None:
        return ["create", "schedule"] if mode == "schedule" else ["create"]
    if broadcast["status"] == "draft" and mode == "schedule":
        return ["schedule"]
    return []


class Journal:
    """Actions artifacts are a write-ahead journal, NOT a success receipt.

    No artifact downloads are necessary: marker names are negative evidence
    preventing a repeated operation. Missing prior-run artifacts fail closed.
    """
    def __init__(self, http, env, issue_day):
        self.http, self.env, self.issue_day = http, env, issue_day
        for key in ("GITHUB_RUN_ID", "GITHUB_RUN_ATTEMPT"):
            require(re.fullmatch(r"[1-9]\d*", env.get(key, "")) is not None, "UNTRUSTED_RUN_CONTEXT")
        self.run_id, self.attempt = int(env["GITHUB_RUN_ID"]), int(env["GITHUB_RUN_ATTEMPT"])
        require(env.get("GITHUB_REPOSITORY") == REPO and env.get("GITHUB_REF") == "refs/heads/main"
                and env.get("GITHUB_EVENT_NAME") in {"push", "workflow_dispatch"}
                and re.fullmatch(r"[0-9a-f]{40}", env.get("GITHUB_SHA", "")), "UNTRUSTED_RUN_CONTEXT")
        self.base = f"/repos/{REPO}"

    def marker_name(self, operations):
        return f"jsm-intent-{self.issue_day}--{'.'.join(operations)}--{self.run_id}-{self.attempt}"

    def pages(self, path, key, params=None):
        params = dict(params or {})
        params["per_page"] = 100
        result = []
        for page in range(1, MAX_PAGES + 1):
            params["page"] = page
            body = self.http.request("GET", self.base + path + "?" + urlencode(params))
            rows = body.get(key)
            require(isinstance(rows, list), "JOURNAL_LOOKUP_FAILED")
            result.extend(rows)
            if len(rows) < 100:
                return result
        raise Blocked("JOURNAL_PAGINATION_LIMIT")

    def check(self, operations, own_marker=None):
        current = self.http.request("GET", self.base + f"/actions/runs/{self.run_id}")
        require(current.get("id") == self.run_id and current.get("head_sha") == self.env["GITHUB_SHA"]
                and current.get("head_branch") == "main" and current.get("path") == f".github/workflows/{WORKFLOW}"
                and current.get("event") == self.env["GITHUB_EVENT_NAME"], "UNTRUSTED_RUN_CONTEXT")
        # A six-hour content lifetime is much shorter than 90-day retention.
        # Any missing/expired record of a prior run that day stops new writes.
        earliest = datetime.combine(date.fromisoformat(self.issue_day), time.min, ET).astimezone(timezone.utc).isoformat()
        runs = self.pages(f"/actions/workflows/{WORKFLOW}/runs", "workflow_runs", {"created": ">=" + earliest})
        require(any(run.get("id") == self.run_id for run in runs), "JOURNAL_RUN_NOT_VISIBLE")
        own_seen = False
        for run in runs:
            if run.get("head_branch") != "main":
                continue
            run_id = integer(run.get("id"), "JOURNAL_LOOKUP_FAILED")
            artifacts = self.pages(f"/actions/runs/{run_id}/artifacts", "artifacts")
            if run_id != self.run_id and not artifacts:
                # Only a never-started first attempt queued behind this workflow
                # is harmless. Newer COMPLETED runs still count on an old rerun.
                if run.get("status") == "queued" and run.get("run_attempt") == 1:
                    continue
                raise Blocked("PRIOR_RUN_WITHOUT_JOURNAL")
            if run_id == self.run_id and self.attempt > 1:
                require(artifacts, "RETRY_WITHOUT_JOURNAL")
            for artifact in artifacts:
                match = MARKER_RE.fullmatch(artifact.get("name", ""))
                require(match is not None and artifact.get("expired") is False, "JOURNAL_MISSING_OR_EXPIRED")
                require(int(match[3]) == run_id, "INVALID_JOURNAL_MARKER")
                if artifact["name"] == own_marker:
                    require(run_id == self.run_id and int(match[4]) == self.attempt, "INVALID_JOURNAL_MARKER")
                    require(set(operations) <= set(match[2].split(".")), "JOURNAL_OPERATION_NOT_AUTHORIZED")
                    own_seen = True
                    continue
                if match[1] == self.issue_day and set(match[2].split(".")) & set(operations):
                    raise Blocked("PRIOR_MUTATION_INTENT_REQUIRES_REVIEW")
        require(own_marker is None or own_seen, "WRITE_AHEAD_JOURNAL_NOT_VISIBLE")


def check_write_window(issue, send_at, now, max_age_hours):
    require(timedelta(0) <= now - timestamp(issue["generated_at"]) <= timedelta(hours=max_age_hours), "STALE_CONTENT")
    for source in issue["sources"]:
        require(timedelta(0) <= now - timestamp(source["checked_at"]) <= timedelta(hours=max_age_hours), "STALE_SOURCE_CHECK")
    require(now + timedelta(minutes=15) < send_at, "SEND_WINDOW_CLOSED")


def confirm_scheduled(kit, ident, payload, send_at, sleep=clock.sleep):
    # At most seven read-only checks with five seconds between checks. Network
    # timeouts/retries add to elapsed time; the workflow has a 20-minute limit.
    # A timeout
    # is an uncertain result, not permission to repeat PUT or change public.
    for attempt in range(7):
        try:
            current = kit.broadcast(ident)
            if verify_broadcast(current, payload, send_at) in {"scheduled", "sending", "completed"}:
                return
        except Blocked as error:
            if str(error) not in {"BROADCAST_STATUS_NOT_CONSISTENT", "AMBIGUOUS_DRAFT_STATE"}:
                raise
        if attempt < 6:
            sleep(5)
    raise Blocked("SCHEDULE_NOT_CONFIRMED")


def perform(kit, issue, payload, send_at, mode, journal, own_marker,
            now_fn=lambda: datetime.now(timezone.utc), max_age_hours=6, sleep=clock.sleep):
    # Reconcile again after durable intent upload; serialize all runs in YAML.
    broadcast = find_existing(kit, issue, payload, send_at)
    operations = needed_operations(broadcast, mode)
    if not operations:
        return "already_" + broadcast["status"]
    journal.check(operations, own_marker)
    if broadcast is None:
        check_write_window(issue, send_at, now_fn(), max_age_hours)
        try:
            response = kit.http.request("POST", "/broadcasts", payload)
            created = response.get("broadcast")
            require(isinstance(created, dict), "MUTATION_UNCERTAIN")
            broadcast = kit.broadcast(integer(created.get("id"), "MUTATION_UNCERTAIN"))
            require(verify_broadcast(broadcast, payload, send_at) == "draft", "CREATE_DID_NOT_STAY_DRAFT")
        except Blocked:
            # An uncertain POST is NEVER retried. Even when reconciled, stop the
            # current chain before scheduling; a later reviewed run can resume.
            recovered = find_existing(kit, issue, payload, send_at)
            if recovered and recovered["status"] == "draft":
                return "draft_reconciled_review_required"
            raise Blocked("CREATE_UNCERTAIN_REVIEW_REQUIRED") from None
    if mode == "draft":
        return "draft_verified"
    # Target the verified existing ID. Never create a second broadcast to send.
    current = kit.broadcast(broadcast["id"])
    if verify_broadcast(current, payload, send_at) != "draft":
        return "already_" + current["status"]
    journal.check(["schedule"], own_marker)
    check_write_window(issue, send_at, now_fn(), max_age_hours)
    scheduled_payload = dict(payload, send_at=send_at.isoformat())
    try:
        kit.http.request("PUT", f"/broadcasts/{broadcast['id']}", scheduled_payload)
    except Blocked:
        try:
            confirm_scheduled(kit, broadcast["id"], payload, send_at, sleep)
            return "schedule_reconciled"
        except Blocked:
            raise Blocked("SCHEDULE_UNCERTAIN_REVIEW_REQUIRED") from None
    confirm_scheduled(kit, broadcast["id"], payload, send_at, sleep)
    return "scheduled_verified"


def select_issue(env, event):
    require(env.get("GITHUB_REPOSITORY") == REPO and env.get("GITHUB_REF") == "refs/heads/main", "UNTRUSTED_RUN_CONTEXT")
    if env.get("GITHUB_EVENT_NAME") == "workflow_dispatch":
        inputs = event.get("inputs", {})
        day, mode = inputs.get("issue_date", ""), inputs.get("mode", "draft")
        require(isinstance(day, str) and re.fullmatch(r"\d{4}-\d{2}-\d{2}", day), "INVALID_ISSUE_DATE")
        require(mode in {"draft", "schedule"}, "INVALID_MODE")
        return f"newsletter/issues/{day}.json", mode
    require(env.get("GITHUB_EVENT_NAME") == "push" and not event.get("forced") and not event.get("deleted"), "UNTRUSTED_PUSH")
    before, after = event.get("before", ""), env.get("GITHUB_SHA", "")
    require(all(re.fullmatch(r"[0-9a-f]{40}", sha) and sha != "0" * 40 for sha in (before, after)), "UNTRUSTED_PUSH")
    changes = subprocess.run(["git", "diff", "--name-status", before, after, "--", "newsletter/issues/"], check=True, capture_output=True, text=True).stdout.splitlines()
    require(len(changes) == 1 and re.fullmatch(r"A\tnewsletter/issues/\d{4}-\d{2}-\d{2}\.json", changes[0]), "ONLY_ONE_NEW_ISSUE_ALLOWED")
    path = changes[0].split("\t")[1]
    # A deleted/re-added issue date may have a missing old journal. Never accept.
    history = subprocess.run(["git", "log", "--format=%H", before, "--", path], check=True, capture_output=True, text=True).stdout
    require(not history.strip(), "ISSUE_DATE_ALREADY_USED")
    return path, None


def output(values):
    path = os.environ.get("GITHUB_OUTPUT")
    require(path, "GITHUB_OUTPUT_MISSING")
    with open(path, "a", encoding="utf-8") as handle:
        for key, value in values.items():
            require("\n" not in str(value), "UNSAFE_OUTPUT")
            handle.write(f"{key}={value}\n")


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("command", choices=["select", "validate", "prepare", "execute"])
    parser.add_argument("--issue")
    parser.add_argument("--mode", choices=["draft", "schedule"], default="draft")
    parser.add_argument("--policy", default="newsletter/delivery-policy.json")
    parser.add_argument("--journal-dir")
    args = parser.parse_args()
    env = os.environ
    policy = load_json(args.policy)
    if args.command == "select":
        path, mode = select_issue(env, load_json(env["GITHUB_EVENT_PATH"]))
        output({"issue": path, "mode": mode or policy["default_mode"]})
        return
    require(args.issue and re.fullmatch(r"newsletter/issues/\d{4}-\d{2}-\d{2}\.json", args.issue), "INVALID_ISSUE_PATH")
    issue = load_json(args.issue)
    require(Path(args.issue).stem == issue.get("issue_date"), "ISSUE_FILENAME_MISMATCH")
    previous = [load_json(p) for p in Path("newsletter/issues").glob("*.json") if str(p) != args.issue]
    send_at = validate_issue(issue, policy, datetime.now(timezone.utc), previous)
    if args.command == "validate":
        print("Newsletter payload validated. No network requests made.")
        return
    config = configuration(policy, env)
    check_capabilities(policy, args.mode)
    require(env.get("KIT_API_KEY") and env.get("GH_TOKEN"), "CONNECTION_SECRET_MISSING")
    kit = Kit(HTTPClient("https://api.kit.com/v4", {"X-Kit-Api-Key": env["KIT_API_KEY"], "Content-Type": "application/json", "Accept": "application/json"}))
    gh = HTTPClient("https://api.github.com", {"Authorization": "Bearer " + env["GH_TOKEN"], "Accept": "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28"})
    journal = Journal(gh, env, issue["issue_date"])
    missing = verify_account(kit, config, policy)
    payload, fingerprint = payload_for(issue, config)
    broadcast = find_existing(kit, issue, payload, send_at)
    operations = (["sync"] if missing else []) + needed_operations(broadcast, args.mode)
    if args.command == "prepare":
        if not operations:
            output({"write_required": "false"})
            print("Existing matching broadcast verified; no write required.")
            return
        journal.check(operations)
        require(args.journal_dir, "JOURNAL_DIRECTORY_MISSING")
        directory = Path(args.journal_dir)
        directory.mkdir(parents=True, exist_ok=False)
        marker = journal.marker_name(operations)
        (directory / "intent.json").write_text(json.dumps({"schema_version": 1, "issue_date": issue["issue_date"], "payload_sha256": fingerprint, "operations": operations, "run_id": journal.run_id, "run_attempt": journal.attempt, "source_commit": env["GITHUB_SHA"]}, indent=2) + "\n")
        output({"write_required": "true", "marker": marker})
        print("Preflight passed; write-ahead intent must be retained before mutation.")
        return
    require(args.journal_dir, "JOURNAL_DIRECTORY_MISSING")
    intent = load_json(Path(args.journal_dir) / "intent.json")
    require(intent.get("payload_sha256") == fingerprint and intent.get("issue_date") == issue["issue_date"]
            and intent.get("run_id") == journal.run_id and intent.get("run_attempt") == journal.attempt
            and intent.get("source_commit") == env["GITHUB_SHA"], "INTENT_MISMATCH")
    intended = intent.get("operations")
    require(intended in [["sync"], ["create"], ["schedule"], ["create", "schedule"], ["sync", "create"], ["sync", "schedule"], ["sync", "create", "schedule"]]
            and set(operations) <= set(intended), "INTENT_MISMATCH")
    if missing:
        journal.check(["sync"], journal.marker_name(intended))
        sync_signups(kit, missing, config, policy)
    result = perform(kit, issue, payload, send_at, args.mode, journal, journal.marker_name(intended), max_age_hours=policy["max_content_age_hours"])
    print("Newsletter result: " + result)
    require(result != "draft_reconciled_review_required", "CREATE_UNCERTAIN_REVIEW_REQUIRED")


if __name__ == "__main__":
    try:
        main()
    except Blocked as error:
        print("Newsletter stopped: " + str(error), file=sys.stderr)
        sys.exit(1)
    except Exception:
        # No traceback: exceptions may include subscriber payloads or headers.
        print("Newsletter stopped: INTERNAL_ERROR_REVIEW_REQUIRED", file=sys.stderr)
        sys.exit(1)
