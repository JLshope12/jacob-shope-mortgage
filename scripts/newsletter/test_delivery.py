"""Offline safety tests. Synthetic subscribers only; no network or credentials."""
from copy import deepcopy
from datetime import datetime, timedelta, timezone
import io
import json
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch
from urllib.error import HTTPError, URLError

import deliver as d

ROOT = Path(__file__).resolve().parents[2]
NOW = datetime(2026, 10, 11, 21, 30, tzinfo=timezone.utc)


def fixtures(day="2026-10-11", now=NOW):
    policy = json.loads((ROOT / "newsletter/delivery-policy.json").read_text())
    policy.update(drafts_enabled=True, audience_verified=True, neutral_template_verified=True,
                  scheduling_enabled=False, private_scheduling_verified=False,
                  signup_sync_enabled=False, max_content_age_hours=6, audience_min=1, audience_max=10000,
                  signup_sync_audit={"tag_id": None, "reviewed_at": None, "no_other_automation_use": False})
    images = "".join(f'<img src="{url}" alt="Original brand image">' for url in policy["required_image_urls"])
    when = datetime.fromisoformat(day)
    label = f"{when:%B} {when.day}, {when.year}"
    issue = {
        "schema_version": 1, "issue_date": day, "generated_at": now.isoformat(),
        "subject": "Synthetic newsletter safety test", "preview_text": "Public educational content, synthetic test only.",
        "html": f'<!doctype html><html><body data-newsletter-issue="{day}"><h1>{label}</h1><p>Current public housing news with a clearly dated source and sufficient educational context.</p><a href="https://example.com/public-news">Source</a>{images}<p>NMLS# 2090979</p><p>{policy["postal_address"]}</p><a href="{{{{ unsubscribe_url }}}}">Unsubscribe</a></body></html>',
        "plain_text": f'{label}\nCurrent public housing news, with educational context and source attribution. NMLS# 2090979\n{policy["postal_address"]}\nUnsubscribe using the link in the email.',
        "public_news_only": True, "approved_for_delivery": True,
        "sources": [{"url": "https://example.com/public-news", "published_on": day, "checked_at": now.isoformat()}],
    }
    config = {"account_id": 11, "account_name": "Synthetic account", "newsletter_tag_id": 22,
              "newsletter_tag_name": "Reserved newsletter", "template_id": 33, "template_name": "Content only",
              "excluded_hash": d.email_digest("mistyped@example.invalid")}
    return policy, issue, config


def broadcast(payload, ident=44, status="draft", send_at=None):
    result = deepcopy(payload)
    result.pop("email_template_id")
    result.update(id=ident, status=status, send_at=send_at, public_url=None,
                  email_template={"id": payload["email_template_id"], "name": "Content only"})
    return result


class FakeHTTP:
    def __init__(self, config):
        self.config = config
        self.broadcasts = []
        self.calls = []
        self.members = [{"id": 100, "email_address": "correct@example.invalid", "state": "active"}]
        self.form_members = deepcopy(self.members)
        self.accounts = {"account": {"id": config["account_id"], "name": config["account_name"], "sending_addresses": [{"email_address": d.SENDER, "is_verified": True}]}}
        self.create_timeout = False
        self.persist_on_timeout = False
        self.schedule_timeout = False
        self.schedule_persist_on_timeout = False
        self.tag_timeout = False
        self.get_subscriber_state = "active"
        self.force_public = False

    def request(self, method, path, data=None):
        self.calls.append((method, path, deepcopy(data)))
        base = path.split("?")[0]
        if method == "GET":
            if base == "/account":
                return deepcopy(self.accounts)
            if base == "/email_templates":
                return self.page("email_templates", [{"id": 33, "name": "Content only", "category": "HTML"}])
            if base == "/tags":
                return self.page("tags", [{"id": 22, "name": "Reserved newsletter"}])
            if base == "/tags/22/subscribers":
                return self.page("subscribers", self.members)
            if base == "/forms/9614062/subscribers":
                return self.page("subscribers", self.form_members)
            if base.startswith("/subscribers/"):
                member = next(x for x in self.form_members if x["id"] == int(base.split("/")[-1]))
                return {"subscriber": dict(member, state=self.get_subscriber_state)}
            if base == "/broadcasts":
                return self.page("broadcasts", self.broadcasts)
            if base.startswith("/broadcasts/") and base.endswith("/stats"):
                row = next(x for x in self.broadcasts if x["id"] == int(base.split("/")[-2]))
                return {"broadcast": {"id": row["id"], "stats": {"status": row["status"]}}}
            if base.startswith("/broadcasts/"):
                return {"broadcast": deepcopy(next(x for x in self.broadcasts if x["id"] == int(base.split("/")[-1])))}
        if method == "POST" and base.startswith("/tags/22/subscribers/"):
            if self.tag_timeout:
                raise d.Blocked("MUTATION_UNCERTAIN")
            member = next(x for x in self.form_members if x["id"] == int(base.split("/")[-1]))
            self.members.append(deepcopy(member))
            return {"subscriber": deepcopy(member)}
        if method == "POST" and base == "/broadcasts":
            result = broadcast(data)
            if self.force_public:
                result["public"] = True
            if not self.create_timeout or self.persist_on_timeout:
                self.broadcasts.append(result)
            if self.create_timeout:
                raise d.Blocked("MUTATION_UNCERTAIN")
            return {"broadcast": deepcopy(result)}
        if method == "PUT" and base == "/broadcasts/44":
            if not self.schedule_timeout or self.schedule_persist_on_timeout:
                self.broadcasts[0].update(send_at=data["send_at"], status="scheduled")
            if self.schedule_timeout:
                raise d.Blocked("MUTATION_UNCERTAIN")
            return {"broadcast": deepcopy(self.broadcasts[0])}
        raise AssertionError(f"Unexpected fake request: {method} {base}")

    @staticmethod
    def page(key, rows):
        return {key: deepcopy(rows), "pagination": {"has_next_page": False, "end_cursor": None}}


class FakeJournal:
    def __init__(self, blocked=False):
        self.blocked = blocked
        self.checks = []

    def check(self, operations, own_marker=None):
        self.checks.append((operations, own_marker))
        if self.blocked:
            raise d.Blocked("PRIOR_MUTATION_INTENT_REQUIRES_REVIEW")


class DeliveryTests(unittest.TestCase):
    def setUp(self):
        self.policy, self.issue, self.config = fixtures()
        self.http = FakeHTTP(self.config)
        self.kit = d.Kit(self.http)
        self.send_at = d.validate_issue(self.issue, self.policy, NOW)
        self.payload, self.fingerprint = d.payload_for(self.issue, self.config)

    def run_delivery(self, mode="draft", journal=None):
        return d.perform(self.kit, self.issue, self.payload, self.send_at, mode, journal or FakeJournal(), "marker", now_fn=lambda: NOW, sleep=lambda _: None)

    def writes(self, method="POST", path="/broadcasts"):
        return [x for x in self.http.calls if x[0] == method and x[1] == path]

    def test_valid_fresh_issue_dst(self):
        self.assertEqual(self.send_at.isoformat(), "2026-10-11T19:00:00-04:00")

    def test_winter_timezone(self):
        now = datetime(2026, 11, 1, 22, 30, tzinfo=timezone.utc)
        policy, issue, _ = fixtures("2026-11-01", now)
        self.assertEqual(d.validate_issue(issue, policy, now).isoformat(), "2026-11-01T19:00:00-05:00")

    def test_draft_never_schedules_or_publishes(self):
        self.assertEqual(self.run_delivery(), "draft_verified")
        self.assertEqual(len(self.writes()), 1)
        data = self.writes()[0][2]
        self.assertIs(data["public"], False)
        self.assertIsNone(data["published_at"])
        self.assertIsNone(data["send_at"])
        self.assertFalse(self.writes("PUT", "/broadcasts/44"))

    def test_duplicate_draft_no_new_write(self):
        self.http.broadcasts = [broadcast(self.payload)]
        self.assertEqual(self.run_delivery(), "already_draft")
        self.assertFalse(self.writes())

    def test_duplicate_completed_no_new_write(self):
        self.http.broadcasts = [broadcast(self.payload, status="completed", send_at=self.send_at.isoformat())]
        self.assertEqual(self.run_delivery("schedule"), "already_completed")
        self.assertFalse(self.writes())
        self.assertFalse(self.writes("PUT", "/broadcasts/44"))

    def test_multiple_matching_broadcasts_stop(self):
        self.http.broadcasts = [broadcast(self.payload), broadcast(self.payload, ident=45)]
        with self.assertRaisesRegex(d.Blocked, "DUPLICATE_ISSUE"):
            self.run_delivery()
        self.assertFalse(self.writes())

    def test_changed_issue_hash_stops(self):
        changed = broadcast(self.payload)
        changed["description"] = "jsm-newsletter/2026-10-11 sha256:wrong"
        self.http.broadcasts = [changed]
        with self.assertRaisesRegex(d.Blocked, "CONTENT_MISMATCH"):
            self.run_delivery()

    def test_prior_intent_without_broadcast_blocks_create(self):
        with self.assertRaisesRegex(d.Blocked, "PRIOR_MUTATION"):
            self.run_delivery(journal=FakeJournal(True))
        self.assertFalse(self.writes())

    def test_timeout_is_not_retried(self):
        self.http.create_timeout = True
        with self.assertRaisesRegex(d.Blocked, "CREATE_UNCERTAIN"):
            self.run_delivery()
        self.assertEqual(len(self.writes()), 1)

    def test_timeout_persisted_draft_does_not_schedule(self):
        self.http.create_timeout = self.http.persist_on_timeout = True
        self.assertEqual(self.run_delivery("schedule"), "draft_reconciled_review_required")
        self.assertEqual(len(self.writes()), 1)
        self.assertFalse(self.writes("PUT", "/broadcasts/44"))

    def test_private_schedule_retains_all_guards(self):
        self.assertEqual(self.run_delivery("schedule"), "scheduled_verified")
        update = self.writes("PUT", "/broadcasts/44")[0][2]
        self.assertIs(update["public"], False)
        self.assertEqual(update["send_at"], "2026-10-11T19:00:00-04:00")
        self.assertEqual(update["subscriber_filter"], self.payload["subscriber_filter"])
        self.assertEqual(len(self.writes()), 1)

    def test_schedule_timeout_reconciles_without_retry(self):
        self.http.schedule_timeout = self.http.schedule_persist_on_timeout = True
        self.assertEqual(self.run_delivery("schedule"), "schedule_reconciled")
        self.assertEqual(len(self.writes("PUT", "/broadcasts/44")), 1)

    def test_slow_preflight_cannot_schedule_after_cutoff(self):
        times = iter([NOW, NOW + timedelta(hours=2)])
        with self.assertRaisesRegex(d.Blocked, "SEND_WINDOW_CLOSED"):
            d.perform(self.kit, self.issue, self.payload, self.send_at, "schedule", FakeJournal(), "marker", now_fn=lambda: next(times), sleep=lambda _: None)
        self.assertEqual(len(self.writes()), 1)  # A private unscheduled draft only.
        self.assertFalse(self.writes("PUT", "/broadcasts/44"))

    def test_source_freshness_rechecked_before_mutation(self):
        self.issue["sources"][0]["checked_at"] = (NOW - timedelta(hours=5, minutes=59)).isoformat()
        d.validate_issue(self.issue, self.policy, NOW)
        with self.assertRaisesRegex(d.Blocked, "STALE_SOURCE_CHECK"):
            d.check_write_window(self.issue, self.send_at, NOW + timedelta(minutes=2), 6)

    def test_ambiguous_schedule_stops(self):
        self.http.schedule_timeout = True
        with self.assertRaisesRegex(d.Blocked, "SCHEDULE_UNCERTAIN"):
            self.run_delivery("schedule")
        self.assertEqual(len(self.writes("PUT", "/broadcasts/44")), 1)

    def test_provider_public_true_response_stops(self):
        self.http.force_public = True
        with self.assertRaises(d.Blocked):
            self.run_delivery("schedule")
        self.assertFalse(self.writes("PUT", "/broadcasts/44"))
        self.assertTrue(all(call[2]["public"] is False for call in self.writes()))

    def test_empty_or_broad_filter_rejected(self):
        for value in (None, [], [{}], [{"all": []}], [{"none": [{"type": "tag", "ids": [22]}]}], [{"all": [{"type": "segment", "ids": [22]}]}]):
            with self.subTest(value=value), self.assertRaises(d.Blocked):
                item = broadcast(self.payload)
                item["subscriber_filter"] = value
                d.verify_broadcast(item, self.payload, self.send_at)

    def test_api_null_empty_group_fields_are_accepted(self):
        item = broadcast(self.payload)
        item["subscriber_filter"][0].update(any=None, none=None)
        self.assertEqual(d.verify_broadcast(item, self.payload, self.send_at), "draft")

    def test_correct_address_not_suppressed(self):
        self.assertEqual(d.verify_account(self.kit, self.config, self.policy), [])
        self.assertFalse([x for x in self.http.calls if x[0] != "GET"])

    def test_typo_inside_tag_blocks_even_when_inactive(self):
        for state in ("active", "inactive", "cancelled"):
            self.http.members = [{"id": 100, "email_address": "Mistyped@example.invalid", "state": state}]
            with self.subTest(state=state), self.assertRaisesRegex(d.Blocked, "EXCLUDED_ADDRESS"):
                d.verify_account(self.kit, self.config, self.policy)

    def test_typo_only_in_form_is_excluded_from_sync(self):
        self.http.form_members.append({"id": 101, "email_address": "mistyped@example.invalid", "state": "active"})
        self.assertEqual(d.verify_account(self.kit, self.config, self.policy), [])

    def test_missing_genuine_signup_blocks_when_sync_disabled(self):
        self.http.form_members.append({"id": 101, "email_address": "new@example.invalid", "state": "active"})
        with self.assertRaisesRegex(d.Blocked, "ACTIVE_SIGNUP_MISSING"):
            d.verify_account(self.kit, self.config, self.policy)
        self.assertFalse([x for x in self.http.calls if x[0] != "GET"])

    def enable_sync(self):
        self.policy["signup_sync_enabled"] = True
        self.policy["signup_sync_audit"] = {"tag_id": 22, "reviewed_at": "2026-10-09T12:00:00Z", "no_other_automation_use": True}
        self.http.form_members.append({"id": 101, "email_address": "new@example.invalid", "state": "active"})
        return d.verify_account(self.kit, self.config, self.policy)

    def test_audited_sync_only_tags_existing_active_subscriber(self):
        missing = self.enable_sync()
        d.sync_signups(self.kit, missing, self.config, self.policy, sleep=lambda _: None)
        writes = [x for x in self.http.calls if x[0] != "GET"]
        self.assertEqual(writes, [("POST", "/tags/22/subscribers/101", {})])
        self.assertEqual(d.verify_account(self.kit, self.config, self.policy), [])

    def test_sync_does_not_reactivate_changed_subscriber(self):
        missing = self.enable_sync()
        self.http.get_subscriber_state = "cancelled"
        with self.assertRaisesRegex(d.Blocked, "SIGNUP_CHANGED"):
            d.sync_signups(self.kit, missing, self.config, self.policy)
        self.assertFalse([x for x in self.http.calls if x[0] != "GET"])

    def test_sync_timeout_does_not_retry(self):
        missing = self.enable_sync()
        self.http.tag_timeout = True
        with self.assertRaisesRegex(d.Blocked, "SIGNUP_SYNC_UNCERTAIN"):
            d.sync_signups(self.kit, missing, self.config, self.policy)
        self.assertEqual(len([x for x in self.http.calls if x[0] == "POST"]), 1)

    def test_sync_audit_must_match_tag(self):
        missing = self.enable_sync()
        self.policy["signup_sync_audit"]["tag_id"] = 999
        with self.assertRaisesRegex(d.Blocked, "NOT_AUDITED"):
            d.sync_signups(self.kit, missing, self.config, self.policy)

    def test_wrong_account_blocked(self):
        self.http.accounts["account"]["id"] = 999
        with self.assertRaisesRegex(d.Blocked, "WRONG_KIT_ACCOUNT"):
            d.verify_account(self.kit, self.config, self.policy)

    def test_unverified_sender_blocked(self):
        self.http.accounts["account"]["sending_addresses"][0]["is_verified"] = False
        with self.assertRaisesRegex(d.Blocked, "SENDER_NOT_VERIFIED"):
            d.verify_account(self.kit, self.config, self.policy)

    def test_stale_generated_copy_blocked(self):
        self.issue["generated_at"] = (NOW - timedelta(hours=7)).isoformat()
        with self.assertRaisesRegex(d.Blocked, "STALE_CONTENT"):
            d.validate_issue(self.issue, self.policy, NOW)

    def test_stale_source_verification_blocked(self):
        self.issue["sources"][0]["checked_at"] = (NOW - timedelta(hours=7)).isoformat()
        with self.assertRaisesRegex(d.Blocked, "STALE_SOURCE"):
            d.validate_issue(self.issue, self.policy, NOW)

    def test_old_issue_relabelled_is_blocked(self):
        old = deepcopy(self.issue)
        old["issue_date"] = "2026-10-04"
        old["html"] = old["html"].replace("2026-10-11", "2026-10-04").replace("October 11, 2026", "October 4, 2026")
        with self.assertRaisesRegex(d.Blocked, "REUSED_OLD_COPY"):
            d.validate_issue(self.issue, self.policy, NOW, [old])

    def test_stale_template_placeholder_blocked(self):
        self.issue["html"] += "{{ message_content }}"
        with self.assertRaisesRegex(d.Blocked, "UNAPPROVED_LIQUID"):
            d.validate_issue(self.issue, self.policy, NOW)

    def test_missing_footer_image_and_issue_date_blocked(self):
        for old, new in (("NMLS# 2090979", "NMLS"), (self.policy["postal_address"], "No address"), (self.policy["required_image_urls"][0], "https://example.com/new.png"), ("October 11, 2026", "October 9, 2026")):
            issue = deepcopy(self.issue)
            issue["html"] = issue["html"].replace(old, new)
            with self.subTest(old=old), self.assertRaises(d.Blocked):
                d.validate_issue(issue, self.policy, NOW)

    def test_private_subscriber_email_rejected(self):
        self.issue["plain_text"] += " subscriber@example.invalid"
        with self.assertRaisesRegex(d.Blocked, "PRIVATE_EMAIL"):
            d.validate_issue(self.issue, self.policy, NOW)

    def test_publication_and_audience_fields_not_in_issue_schema(self):
        for key in ("public", "send_at", "subscriber_filter", "subscribers", "api_key"):
            issue = dict(self.issue, **{key: True})
            with self.subTest(key=key), self.assertRaisesRegex(d.Blocked, "INVALID_ISSUE_SCHEMA"):
                d.validate_issue(issue, self.policy, NOW)

    def test_offset_required(self):
        self.issue["generated_at"] = "2026-10-11T17:30:00"
        with self.assertRaisesRegex(d.Blocked, "TIMEZONE"):
            d.validate_issue(self.issue, self.policy, NOW)

    def test_friday_example_cannot_be_reused(self):
        _, issue, _ = fixtures("2026-10-09")
        with self.assertRaisesRegex(d.Blocked, "SUNDAY"):
            d.validate_issue(issue, self.policy, NOW)

    def test_missed_send_window_never_sends_immediately(self):
        with self.assertRaisesRegex(d.Blocked, "SEND_WINDOW_CLOSED"):
            d.validate_issue(self.issue, self.policy, NOW + timedelta(hours=2))

    def test_html_active_content_is_rejected(self):
        for html in ('<script>alert(1)</script>', '<img src="https://example.com/a" onerror="bad()">', '<iframe src="https://example.com"></iframe>'):
            issue = dict(self.issue, html=self.issue["html"] + html)
            with self.subTest(html=html), self.assertRaises(d.Blocked):
                d.validate_issue(issue, self.policy, NOW)

    def test_duplicate_html_attributes_cannot_hide_unsafe_first_value(self):
        self.issue["html"] = self.issue["html"].replace('href="{{ unsubscribe_url }}"', 'href="javascript:bad()" href="{{ unsubscribe_url }}"')
        with self.assertRaisesRegex(d.Blocked, "DUPLICATE_HTML_ATTRIBUTE"):
            d.validate_issue(self.issue, self.policy, NOW)

    def test_incomplete_broadcast_index_cannot_mean_no_duplicate(self):
        self.http.broadcasts = [{"id": 44}]
        with self.assertRaisesRegex(d.Blocked, "INCOMPLETE_BROADCAST_INDEX"):
            self.run_delivery()
        self.assertFalse(self.writes())

    def test_production_gate_cannot_be_bypassed_by_mode(self):
        with self.assertRaisesRegex(d.Blocked, "PRIVATE_SCHEDULING"):
            d.check_capabilities(self.policy, "schedule")
        d.check_capabilities(self.policy, "draft")
        checked_in = dict(self.policy, drafts_enabled=False)
        with self.assertRaisesRegex(d.Blocked, "DRAFT_CONNECTION_DISABLED"):
            d.check_capabilities(checked_in, "draft")


class PaginationTests(unittest.TestCase):
    def test_reads_every_page(self):
        class Pages:
            def request(self, method, path):
                if "after=" in path:
                    return {"tags": [{"id": 2}], "pagination": {"has_next_page": False}}
                return {"tags": [{"id": 1}], "pagination": {"has_next_page": True, "end_cursor": "next"}}
        self.assertEqual([x["id"] for x in d.Kit(Pages()).rows("/tags", "tags")], [1, 2])

    def test_bad_pagination_is_never_treated_as_empty(self):
        for result in ({"tags": []}, {"tags": [], "pagination": {"has_next_page": True, "end_cursor": "x"}}, {"tags": [], "pagination": {"has_next_page": "false"}}):
            class Bad:
                def request(self, *args): return result
            with self.subTest(result=result), self.assertRaisesRegex(d.Blocked, "PAGINATION"):
                d.Kit(Bad()).rows("/tags", "tags")

    def test_repeating_cursor_stops(self):
        class Repeats:
            def request(self, *args):
                return {"tags": [{"id": 1}], "pagination": {"has_next_page": True, "end_cursor": "same"}}
        with self.assertRaisesRegex(d.Blocked, "PAGINATION"):
            d.Kit(Repeats()).rows("/tags", "tags")


class HTTPTests(unittest.TestCase):
    def test_post_timeout_never_retried_and_error_redacted(self):
        client = d.HTTPClient("https://api.kit.com/v4", {"X-Kit-Api-Key": "synthetic-secret"}, sleep=lambda _: None)
        with patch.object(client.opener, "open", side_effect=URLError("subscriber@example.invalid synthetic-secret")) as opened:
            with self.assertRaisesRegex(d.Blocked, "^MUTATION_UNCERTAIN$"):
                client.request("POST", "/broadcasts", {})
            self.assertEqual(opened.call_count, 1)

    def test_get_has_bounded_safe_retries(self):
        client = d.HTTPClient("https://api.kit.com/v4", {}, sleep=lambda _: None)
        with patch.object(client.opener, "open", side_effect=TimeoutError("sensitive")) as opened:
            with self.assertRaisesRegex(d.Blocked, "^API_READ_FAILED$"):
                client.request("GET", "/account")
            self.assertEqual(opened.call_count, 3)

    def test_error_body_is_not_read(self):
        body = io.BytesIO(b"private remote details")
        error = HTTPError("https://api.kit.com/v4/account", 401, "private", {}, body)
        client = d.HTTPClient("https://api.kit.com/v4", {}, sleep=lambda _: None)
        with patch.object(client.opener, "open", side_effect=error):
            with self.assertRaisesRegex(d.Blocked, "^API_READ_FAILED$"):
                client.request("GET", "/account")
        self.assertTrue(body.closed)

    def test_redirects_cannot_forward_key(self):
        with self.assertRaisesRegex(d.Blocked, "REDIRECT"):
            d.NoRedirect().redirect_request(None, None, 302, None, None, "https://example.com")

    def test_duplicate_json_keys_rejected(self):
        with tempfile.TemporaryDirectory() as temporary:
            path = Path(temporary) / "bad.json"
            path.write_text('{"public":false,"public":true}')
            with self.assertRaisesRegex(d.Blocked, "DUPLICATE_JSON_KEY"):
                d.load_json(path)


class JournalTests(unittest.TestCase):
    def setUp(self):
        self.env = {"GITHUB_RUN_ID": "101", "GITHUB_RUN_ATTEMPT": "1", "GITHUB_REPOSITORY": d.REPO,
                    "GITHUB_REF": "refs/heads/main", "GITHUB_SHA": "a" * 40, "GITHUB_EVENT_NAME": "workflow_dispatch"}
        self.runs = [{"id": 101, "run_number": 11, "head_branch": "main"}]
        self.artifacts = {101: []}
        test = self
        class GitHub:
            def request(self, method, path):
                if "/artifacts?" in path:
                    ident = int(path.split("/runs/")[1].split("/")[0])
                    return {"artifacts": deepcopy(test.artifacts[ident])}
                if "/workflows/" in path:
                    return {"workflow_runs": deepcopy(test.runs)}
                return {"id": 101, "run_number": 11, "head_branch": "main", "head_sha": "a" * 40,
                        "path": ".github/workflows/newsletter-delivery.yml", "event": "workflow_dispatch"}
        self.journal = d.Journal(GitHub(), self.env, "2026-10-11")

    def test_prepare_allows_first_attempt(self):
        self.journal.check(["create"])

    def test_execute_requires_uploaded_marker(self):
        with self.assertRaisesRegex(d.Blocked, "WRITE_AHEAD_JOURNAL"):
            self.journal.check(["create"], self.journal.marker_name(["create"]))

    def test_uploaded_marker_allows_own_operation_only(self):
        marker = self.journal.marker_name(["create"])
        self.artifacts[101] = [{"name": marker, "expired": False}]
        self.journal.check(["create"], marker)

    def test_create_only_marker_cannot_authorize_scheduling(self):
        marker = self.journal.marker_name(["create"])
        self.artifacts[101] = [{"name": marker, "expired": False}]
        with self.assertRaisesRegex(d.Blocked, "JOURNAL_OPERATION_NOT_AUTHORIZED"):
            self.journal.check(["schedule"], marker)

    def test_prior_marker_blocks_new_create(self):
        self.runs.append({"id": 100, "run_number": 10, "head_branch": "main"})
        self.artifacts[100] = [{"name": "jsm-intent-2026-10-11--create--100-1", "expired": False}]
        with self.assertRaisesRegex(d.Blocked, "PRIOR_MUTATION"):
            self.journal.check(["create"])
        self.journal.check(["schedule"])

    def test_missing_or_expired_prior_artifact_fails_closed(self):
        self.runs.append({"id": 100, "run_number": 10, "head_branch": "main"})
        for artifacts in ([], [{"name": "jsm-intent-2026-10-11--create--100-1", "expired": True}]):
            self.artifacts[100] = artifacts
            with self.subTest(artifacts=artifacts), self.assertRaises(d.Blocked):
                self.journal.check(["create"])

    def test_rerun_without_journal_is_ambiguous(self):
        self.journal.attempt = 2
        with self.assertRaisesRegex(d.Blocked, "RETRY_WITHOUT"):
            self.journal.check(["create"])

    def test_later_queued_run_does_not_deadlock_current(self):
        self.runs.append({"id": 102, "run_number": 12, "head_branch": "main", "status": "queued", "run_attempt": 1})
        self.artifacts[102] = []
        self.journal.check(["create"])

    def test_old_rerun_cannot_ignore_newer_completed_intent(self):
        self.runs.append({"id": 102, "run_number": 12, "head_branch": "main", "status": "completed", "run_attempt": 1})
        self.artifacts[102] = [{"name": "jsm-intent-2026-10-11--create--102-1", "expired": False}]
        with self.assertRaisesRegex(d.Blocked, "PRIOR_MUTATION"):
            self.journal.check(["create"])

    def test_untrusted_ref_and_events_denied(self):
        for key, value in (("GITHUB_REF", "refs/pull/1/merge"), ("GITHUB_EVENT_NAME", "pull_request_target"), ("GITHUB_REPOSITORY", "attacker/fork")):
            env = dict(self.env, **{key: value})
            with self.subTest(key=key), self.assertRaisesRegex(d.Blocked, "UNTRUSTED"):
                d.Journal(None, env, "2026-10-11")


if __name__ == "__main__":
    unittest.main()
