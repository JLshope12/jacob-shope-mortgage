# Newsletter delivery connection

Status: **disabled, awaiting review and secure setup**. This is an isolated Kit V4 delivery connection, not a change to the website. There is no new cron, public API route, database, LLM key, or service.

The existing content-producing automation remains responsible for fresh research and rendering on Sundays. Once separately approved and activated, adding one issue on `main` triggers this workflow; Kit receives an explicit Sunday **7:00 p.m. America/New_York** schedule. `zoneinfo` handles EST/EDT. A draft is the default. The checked-in policy disables even live draft creation, scheduling, and subscriber-tag sync.

## Public repository boundary

**This repository is public. Committing issue JSON publishes the entire HTML, plain text, subject, and sources to GitHub. The user must explicitly approve that public newsletter archive before any real issue is committed. Approval to configure an encrypted API key does not establish that consent.** There are deliberately no real issue files in this PR.

If public archival is not approved, stop and choose an explicitly authorized private destination before adapting this connection. `public_news_only: true` is an attestation by the trusted content producer, not an automatic privacy classifier. Review before committing: no subscribers, private customer stories, borrower data, account responses, credentials, or internal research notes. The sender's already-public business contact details and educational public news are the only intended content.

## Secure setup after code review

1. Review this draft PR. Do not merge/activate production sends until the account, audience, template and private-scheduling contract are verified.
2. The user creates a V4 key in [Kit Developer settings](https://app.kit.com/account_settings/developer_settings) and personally enters it as the repository Actions secret `KIT_API_KEY` in [GitHub Actions secrets](https://github.com/JLshope12/jacob-shope-mortgage/settings/secrets/actions). Never put the key in chat, source, an issue, an artifact, a command argument, or Vercel. Kit's key has wider account/subscriber access; it is not a send-only key.
3. Set these non-secret Actions repository variables using verified account data. Do not guess IDs:
   - `KIT_ACCOUNT_ID`, `KIT_ACCOUNT_NAME`: exact `/v4/account` identity
   - `KIT_NEWSLETTER_TAG_ID`, `KIT_NEWSLETTER_TAG_NAME`: one reserved, explicitly approved newsletter tag
   - `KIT_TEMPLATE_ID`, `KIT_TEMPLATE_NAME`: one inspected content-only HTML template
   - `KIT_EXCLUDED_EMAIL_SHA256`: SHA-256 of the known mistyped address after stripping surrounding whitespace and case-folding; keep the actual address out of this public repository. Check the digest privately against the intended mistyped address, not the valid corrected address. Exclusion is exact, never fuzzy/domain-wide.
4. Verify `/v4/account` lists `jacob@jacobshopemortgage.com` in `sending_addresses` with `is_verified: true`. The primary email alone is insufficient. Verify the saved account ID/name.
5. Verify the tag contains only the authorized newsletter audience, including the separately approved initial contacts. Keep the typo out of the tag, even as an inactive member. Kit sends only active subscribers; unsubscribe/bounce/complaint state must remain respected. The script never imports or reactivates subscribers.
6. Inspect the template HTML in Kit. It must be an intentionally neutral content-only wrapper with no old issue copy and no stale images. The script explicitly rejects dated templates `5500011` and `5592568`, and rejects `Starting point` category. The API only lists template metadata, so matching ID/name/category alone does not establish neutrality. Perform a private draft render review for mobile/desktop and original images, footer, address and unsubscribe before marking `neutral_template_verified` true.
7. After those checks, a reviewed policy change can enable `drafts_enabled`, `audience_verified`, and `neutral_template_verified`. A real issue still needs separate public-archive consent and fresh Sunday content.
8. Verify a private draft end-to-end using its returned Kit record and rendered preview. **No live API draft was created while developing this PR.** Unit tests use fake API responses only.
9. Resolve the private scheduling contradiction below with Kit or an explicitly authorized controlled non-public test. Only then set `private_scheduling_verified` and `scheduling_enabled` true. Switching `default_mode` to `schedule` is the separate activation step. Never set `public: true` to make scheduling work.

### Future website signups

The website already uses Kit form **9614062**. Delivery compares active form members to the reserved newsletter tag. Without verified sync, any missing genuine member blocks delivery rather than silently leaving that subscriber out. The known bad address is excluded from this comparison.

Optional existing-subscriber tag sync is implemented but disabled. To enable it, first audit a new reserved newsletter tag for **no other Rules, Visual Automations, sequence triggers, or other unapproved side effects**. Record its exact ID and review timestamp in `signup_sync_audit`, set `no_other_automation_use: true`, then enable `signup_sync_enabled` in a reviewed policy change. Re-audit before repurposing that tag or attaching any automation to it.

The sync only reads active members of form 9614062, re-reads each exact subscriber ID immediately before assignment, requires the same email and active state, and POSTs an empty body to `/tags/{tag_id}/subscribers/{id}`. It never creates a subscriber, adds someone to a form/sequence, changes a state, or resubscribes anyone. At most 100 new tag assignments are attempted per run. An uncertain assignment is not retried. Subsequent membership checks poll read-only for up to five minutes because Kit's list indexes lag. Tag responses and subscriber data remain only in memory.

Form membership includes both signups and administrative additions; the form must remain reserved for this approved website newsletter purpose. Consent/audience approval cannot be inferred solely from possession of an address. Membership can change between preflight and send time; this is not an atomic recipient snapshot. Reserve and administer the tag accordingly.

## Issue contract

Path: `newsletter/issues/YYYY-MM-DD.json`. See `issue.schema.json`. A trusted commit may add exactly one previously unused issue path; edits, deletion/re-addition, forced pushes and multiple issue additions fail closed. Manual dispatch also loads only the committed main-branch issue.

Required fields:
- `schema_version: 1`, Sunday `issue_date`, timezone-aware `generated_at`
- `subject`, `preview_text`, complete `html`, reviewable `plain_text`
- `public_news_only: true`, `approved_for_delivery: true`
- `sources`: public HTTPS `url`, `published_on`, timezone-aware `checked_at`

Runtime requirements exceed JSON Schema: content must have been generated on the issue's Eastern date and be at most six hours old; source checks must also be fresh. Every source URL must appear in the HTML. Include the visible long date (for example, “October 11, 2026”) in HTML and plain text, plus exactly one `data-newsletter-issue="YYYY-MM-DD"` attribute. Preserve the four configured image URLs, business postal address, NMLS# 2090979 and one real `{{ unsubscribe_url }}` link. Never include the old template's `{{ message_content }}` placeholder in full issue HTML. Only unsubscribe/address Liquid is allowed.

Unchanged previous issue HTML with only its dates replaced is rejected. This is a mechanical guard, not a substitute for fresh research, source verification, fact checking, compliance review or visual QA. Plain text is validated for review; Kit derives its email plain-text alternative from HTML. No undocumented plain-text API field is sent.

Neither recipient selectors, template IDs, sender, `public`, nor `send_at` can be supplied by the issue. The code constructs exactly one positive `all` tag filter; missing targeting can never silently become “everyone.” Segments and speculative form filters are unsupported.

At least 15 minutes must remain before 7 p.m. at validation and again immediately before a create or scheduling write. A late or stale job stops; it never falls back to “send now.” Draft-only connection tests need a fresh Sunday payload under this deliberately narrow contract.

## Duplicate protection and recovery

- All runs share one `concurrency` group with `cancel-in-progress: false`. This serializes execution; GitHub does not guarantee run order and can replace pending runs, so inspect the exact run result rather than assuming every push ran.
- A unique `jsm-newsletter/YYYY-MM-DD` description and content/config digest identify the issue in Kit. Fully paginate all statuses, then fetch the matching record and lifecycle stats. Existing drafts/scheduled/sending/completed broadcasts are reconciled; multiple matches or changed content stop the run.
- Before any Kit mutation, upload a write-ahead **intent** artifact. It contains only issue date, content hash, intended operations, source commit and run/attempt IDs. No API key, subscriber data or content bodies. The script must see that artifact through GitHub's API before writing.
- Artifact retention is 90 days, longer than the six-hour issue acceptance window. Never delete intent artifacts to “fix” a retry. Missing/expired artifacts or unavailable history fail closed. An older rerun still inspects newer completed attempts.
- API writes are attempted once. A lost POST response may already have created the draft; reconcile before doing anything else. If found, stop before scheduling and require review. Scheduling always updates the verified existing broadcast ID, never creates another broadcast. PUT recovery performs at most seven read-only broadcast/stats checks, with five-second waits between checks. HTTP timeouts/retries add to elapsed time; the whole workflow has a 20-minute timeout.
- Broadcast creation and schedule intent are separate operations. A clean draft-only attempt can later schedule the same verified draft after gates are reviewed. An earlier scheduling intent with no confirmed schedule blocks another PUT.
- **Any earlier same-day run without a retained intent artifact blocks later needed mutations**, including a run that failed early or a no-write duplicate check. This is intentionally conservative. It is not safe to promise that correcting configuration and clicking rerun will resume.

On an uncertain result or `PRIOR_RUN_WITHOUT_JOURNAL`, stop automation for that issue and have an authorized reviewer inspect Kit broadcasts/stats, the exact GitHub run/attempt and artifact history. Do not clear markers, change the date/hash, or duplicate an issue to bypass the guard. This initial connection has no unattended recovery override; a narrowly reviewed recovery procedure/code change is required when the evidence establishes what did or did not happen. The next new weekly issue has its own date, but unresolved evidence should be reviewed first. An old issue cannot be recreated after artifact expiration because freshness/date gates reject it.

## Permissions and verification

Workflow permissions are `contents: read` and `actions: read`; the latter is required for durable attempt-history checks. Artifact upload uses GitHub's job-scoped artifact facility. No repository write token, PAT, or secondary trigger secret is introduced. Only trusted-main `push` and `workflow_dispatch` events can reach the secret. Actions are pinned to verified commit SHAs, checkout does not persist credentials, and no dependency installation is needed.

Run offline checks:

    python3 -m unittest discover -s scripts/newsletter -p 'test_*.py' -v
    python3 -m py_compile scripts/newsletter/deliver.py scripts/newsletter/test_delivery.py

These tests do not contact Kit or GitHub. They cover duplicate/timeout cases, retained intent, expired/missing journal, out-of-order runs, broad/invalid audience filters, typo versus valid address, inactive signup protection, audited sync, stale content, private draft/schedule payloads, DST, HTML guardrails, pagination, and secret-safe errors.

Not yet verified: real account API responses, encrypted key setup, neutral-template rendering, actual audience/tag, private `send_at` behavior, GitHub Actions execution, or live sending. Website build/lint were not run because this change adds only isolated Python/YAML/JSON/docs and does not modify website source or dependencies. No live send, subscriber mutation, merge, or production deployment was performed.

## Official contracts and unresolved detail

- [Account and verified sending addresses](https://developers.kit.com/api-reference/accounts/get-current-account)
- [Create broadcast](https://developers.kit.com/api-reference/broadcasts/create-a-broadcast): documents draft via `send_at: null`, separate web publication via `public: true`, and scheduled send via `send_at`.
- [Update broadcast](https://developers.kit.com/api-reference/broadcasts/update-a-broadcast): its introductory prose also says `public: true` is needed to schedule, conflicting with the field's web-publication meaning. The connection does not resolve that contradiction by exposing a newsletter publicly.
- [Email templates](https://developers.kit.com/api-reference/email-templates/list-email-templates): metadata only. Starting-point support statements conflict with newer full-HTML/`allow_starting_point` content notes; no speculative mode is enabled here.
- [Broadcast record](https://developers.kit.com/api-reference/broadcasts/get-a-broadcast), [lifecycle stats](https://developers.kit.com/api-reference/broadcasts/get-stats-for-a-broadcast)
- [Tag members](https://developers.kit.com/api-reference/tags/list-subscribers-for-a-tag), [form members](https://developers.kit.com/api-reference/forms/list-subscribers-for-a-form), [existing-ID tag assignment](https://developers.kit.com/api-reference/tags/tag-a-subscriber)
- [Kit eventual consistency](https://developers.kit.com/api-reference/eventual-consistency), [GitHub concurrency behavior](https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/control-workflow-concurrency)
