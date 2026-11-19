# Continuation: campaign setup

## November 19 publication and ad checkpoint

Published: `/partners/`, `/solutions/`, `/internal-knowledge/`, `/email-workflows/`,
`/onboarding/`, homepage navigation and sitemap. Josh explicitly approved publication of these
exact pages and navigation links on November 19. GitHub → Cloudflare production succeeded:
application commit `328d547c04adaac7afa878b7144c990ee37cfd31`, deployment
`58b2b7b6-7ae9-471e-bb57-6bc2887da35a`, trigger `github:push`.
The adviser page preserves the reviewed broad capabilities positioning, adds email organization
and drafting, and links to solutions. Public content contains no medical-client case studies.
New solution pages use email enquiries; do not silently send those visitors to the report-specific
Google schedule. The existing Excel page and its booking configuration are unchanged.

The production build, four campaign tests and eight-page artifact crawl pass. No visual browser
QA was performed in this chat. All six relevant live pages returned HTTP 200 with a standard
user agent; partner headline and both unchanged Excel booking destinations were verified.

Josh approved raising the saved Excel campaign lifetime cap to CA$60 and keeping it paused.
The update and paused state were read back. CA$1 average CPC target and Canada targeting remain.
Josh reports CA$60 available credit; the promotion API returns no active promotion. Do not treat
that API response as independent credit verification. Credit-only spending remains the boundary.
Launch only after Josh personally verifies the live pages and booking and instructs activation.

Megin's existing Gmail draft was updated after publication to link to `/partners/` instead of
the long capabilities overview. Read-back verified recipients/thread, reply metadata, quoted
history, one current-message signature and matching inline logo. It remains unsent.
Reuse the approved existing workstream time entry; human hours remain unconfirmed.

Updated November 17, 2026. **GitHub deployment repair is complete.** Both refreshed credentials
authenticated; all seven preserved local commits were pushed normally to `main`. Cloudflare
successfully deployed `77d71d866545382f6682905b42d28f4d1984f80e` through `github:push`, deployment
`cbd0c1c1-09d3-4c09-afb8-a98686fcece8`. Subsequent documentation-only commits follow the same workflow.
No force-push or additional direct upload was used. Future deployments must use GitHub → Cloudflare.

## Remaining work

- Ad-account setup is already moving with the other agent. Use the
  [ad setup brief](https://app.notion.com/p/41b07c44d1ea81a2b7d6e0736f56cf9c).
- Josh will manage personal/work calendar busy-time synchronization later.
- Google booking → Notion CRM ingestion remains unbuilt; follow the proposal in the website runbook.
- Additional analytics remain explicitly deferred. No ad launch/spend was performed in this chat.
- Maintain the existing approved time entry; actual human hours remain unset while work continues.

## Verified product

The offer is implementation of one recurring Excel report workflow: source exports, preparation,
checks, staff review and team handoff. No assessment/sample lead magnet, promised savings, fee or
fixed delivery time. Primary ad and tagged URL are in the separate handoff.

Page, responsive layout, FAQs, metadata, email fallback and Google booking path were tested.
No test appointment was submitted. Google form was subsequently updated in Chrome: Company and
“What would you like to discuss? Briefly describe your current reporting process, the tools or data involved, and what you’d like to improve.” are optional, and a 15-minute meeting
description is saved and publicly verified. Same booking URL; no website redeploy. Final windows: Mon 11:30–13:30, Wed 14:00–16:00, Fri
08:00–10:00 in the existing Edmonton timezone. Seven-day horizon, 12-hour rolling notice,
15-minute buffer and four-per-day cap. Josh owns syncing personal busy time into the work calendar;
additional Google conflict calendars require an upgrade that was not approved or purchased. Additional analytics setup was explicitly deferred: event hooks
are browser-only, with no collected counts. Ad launch/spend has not been authorized in this chat.

Use browser work last, after code/API/build work; Josh said it consumes too many tokens.
Browser testing was authorized, but do not repeat broad browser exploration. No immediate need to
redo visual QA for a source-only authentication/sync repair.

Maintain the same approved time entry; hours are unset. Josh wants time requested only when the
workstream is actually finished, not after each turn. No new time row.

Canonical operating record: https://app.notion.com/p/3d507c44d1ea810cb4fced80b9675afc
Campaign record: https://app.notion.com/p/3fe07c44d1ea8153ae10de3d92885cb6
Time entry: https://app.notion.com/p/41b07c44d1ea815c94fae904acf3c8f1

