# Trellis Works website maintenance

Production: <https://trellisworks.ca/> · Reporting campaign: <https://trellisworks.ca/excel-reporting/>

Source: `Trellis-Works/trellisworks-site`, branch `main`. Local checkout:
`/Users/josh/Documents/New project/trellisworks-site`.
Cloudflare Pages project: `trellisworks-site-git`. A push to `main` builds and deploys production.
Keep this guide and the campaign handoff synchronized with material changes.

## Shared navigation and homepage hierarchy — approved November 19

Josh explicitly approved publication of the current preview with a scroll-following active link.
`src/components/SiteHeader.astro` is mounted by `Layout.astro` on all routes, preserving the original
logo/header style. Home is explicit; Solutions links to `/#solutions` under homepage Services;
For advisers links to the separate `/partners/` page. Original section links remain in the nav.
The homepage underline follows the reading position below the sticky header, including nested
Solutions, reverse scrolling, hash navigation and short Contact at the document bottom.
Separate pages retain page-based highlighting. No history/hash entries are added while scrolling.

`SolutionExamples.astro` provides the four homepage solution examples before
`EngagementOptions.astro`, titled Ways to work together with Project delivery and Embedded support.
Individual detail/ad URLs and booking buttons remain unchanged; `/solutions/` is retained for old links.
Production build, campaign checks, all-route link crawl and a compiled-script scroll-state check pass.
No visual browser test was performed in this update. Publish through GitHub → Cloudflare only.

## Partner and solution pages published November 19

`src/pages/partners.astro` contains the public adviser overview. `src/pages/solutions.astro`
is the solution index. `src/pages/[solution].astro` generates internal knowledge, email workflows
and onboarding from `src/config/solutions.ts`; `src/layouts/SolutionShell.astro` shares navigation
and the existing campaign visual style. Each page has a canonical URL and a sitemap entry.
Use the same permanent solution URL for ads, with campaign tags, rather than duplicate pages.
No analytics collector was added. New solution enquiries use Gmail/mailto to info@trellisworks.ca;
the reporting booking link remains specific to the Excel offer. Partner enquiries go to founders.

Public partner examples describe generic capabilities, not medical-client case studies. Knowledge
answers include sources and checks without an accuracy guarantee; email drafts require review.
Scope and quotes follow discussion; no new prices or delivery guarantees are published.

Josh explicitly approved these pages and navigation links for publication on November 19.
Production application commit `328d547` deployed successfully through `github:push`, deployment
`58b2b7b6-7ae9-471e-bb57-6bc2887da35a`. All six relevant live pages returned HTTP 200 and
both Excel booking links remain correct. No visual browser review was performed in this chat.
Josh subsequently verified the live pages/booking and authorized launch: ad, group and campaign are active at CA$60 total cap and CA$1 average CPC target. The short founder update was sent; daily 09:00 Edmonton reports use one local standalone cron with fresh chats. First unattended report remains pending November 20. Read the live Notion ad brief and Founder work checklist before follow-up; historical paused notes are superseded.

### GitHub deployment workflow restored

On November 17, Josh refreshed the existing GitHub credentials. All seven preserved campaign and
handoff commits were pushed normally to `main`, without force-pushing. Cloudflare production
successfully deployed commit `77d71d866545382f6682905b42d28f4d1984f80e` through `github:push`:
`cbd0c1c1-09d3-4c09-afb8-a98686fcece8`.

Future site changes must be committed and pushed through GitHub. If authentication fails, resolve
it before deployment; do not upload directly. Never paste tokens into chat, source, remote URLs or
command arguments. The earlier direct deployment was an incident, now superseded by the verified
normal workflow. Historical details remain in the Notion website operating notes.

## What changed on November 17, 2026

Josh selected the Excel reporting implementation offer and explicitly authorized the landing-page
build, website edits, testing and deployment. He will configure and launch the ads himself.
The offer is a scoped build of one recurring reporting workflow, with agreed sources, reporting rules,
checks and team handoff. The 15-minute call establishes fit and scope. Assessment/sample downloads
are superseded for this campaign. No fee, savings guarantee or fixed project timeline is promised.

The existing homepage design and contact behavior remain the baseline. Two homepage links expose
the reporting page. Shared metadata now uses the correct canonical URL for each page. The campaign
has its own stylesheet, social card, privacy page and static sitemap.

## Important files

| File | Purpose |
| --- | --- |
| `src/pages/excel-reporting.astro` | Campaign content, workflow illustration, FAQs and booking section |
| `src/styles/excel-reporting.css` | Campaign styling, responsive layouts, focus and reduced-motion rules |
| `src/config/excel-reporting.ts` | Public booking URL, call duration and email destination/template |
| `src/scripts/campaign-events.ts` | Browser-only event hooks and allowlisted UTM labels |
| `src/pages/privacy.astro` | Actual campaign booking/contact and analytics handling |
| `src/layouts/Layout.astro` | Shared metadata and page-specific canonical/social URLs |
| `public/sitemap.xml`, `public/robots.txt` | Static discovery metadata; update when adding routes |
| `public/brand/excel-reporting-social.png` | Campaign social image; generated by `scripts/build-social-card.py` |
| `campaigns/excel-reporting.md` | Primary ad, later-use alternatives, tagged URLs and launch instructions |
| `tests/campaign.test.mjs` | Attribution privacy boundaries and public destination checks |
| `scripts/check-built-site.py` | Crawl built local URLs, assets, anchors, canonical URLs and booking links |

## Booking and contact

All primary campaign CTAs use Josh's supplied Google Appointment Schedule:
<https://calendar.app.google/uV1Mua1VdEaYQ73i7>.
The public page identifies it as **Trellis: Report Automation Scoping Call**, 15 minutes, Google Meet,
and shows appointment availability. Keep appointment duration consistent with website/ad copy.
Change the booking URL once in `src/config/excel-reporting.ts`, build, test and deploy.

Google form updated and publicly verified in Chrome on November 17, 2026 after Josh’s explicit
request. First name, last name and email remain required. Both added fields are optional:

- Company
- What would you like to discuss? Briefly describe your current reporting process, the tools or data involved, and what you’d like to improve.

Saved meeting description:

> A 15-minute conversation about one report your team prepares regularly. We’ll discuss where the
> data comes from, the steps you do by hand and whether we can help automate the process. No
> spreadsheet upload or preparation needed.

The same booking URL and 15-minute duration are retained. Final weekly windows in the schedule’s
existing Edmonton timezone: Monday 11:30–13:30, Wednesday 14:00–16:00, Friday 08:00–10:00.
Tuesday/Thursday/weekends are unavailable. Book up to seven days ahead with 12 hours’ rolling notice,
a 15-minute buffer and the existing four-bookings-per-day cap. Twelve hours is not a strict
previous-calendar-day cutoff: afternoon slots can still be booked overnight. Payment and reminders
were not changed. Work-calendar conflict checking remains enabled. This plan gates extra conflict
calendars behind an upgrade; none was purchased. Josh said he will handle synchronizing personal
busy time to the work calendar. Public verification showed four half-hour-spaced starts per window. Public verification opened an available slot, confirmed both
added fields display Optional, and cancelled without submitting an appointment. Screenshot:
`output/google-booking-intake.jpg`. These Google-side changes required no website deployment.
Desktop and 390px mobile website layouts, FAQ behavior and the no-error landing console were
verified during the original site build; the production build, four campaign tests and the three-page
link crawl passed then.

The secondary email actions open an unsent Gmail draft or the visitor's email client to
`info@trellisworks.ca`, including concise workflow prompts. No email is sent by the website.
Fallback text displays the address so it can be copied. No website database, upload or lead form
is present. Google manages appointment details/notifications under its own service.

## Analytics: explicit deferred setup

Josh explicitly chose **“Leave additional analytics setup for later”** on November 17.
Do not describe instrumentation as recorded conversion reporting.

The page currently prepares these in-memory `window.dataLayer` events and also dispatches
`trellis:campaign` CustomEvents:

| Event | Meaning |
| --- | --- |
| `trellis_landing_view` | Page script initialized; not a unique visitor count |
| `trellis_booking_click` | Visitor clicked a link to Google booking; not a confirmed booking |
| `trellis_enquiry_click` | Visitor clicked an email/Gmail link; not a sent enquiry |

There is **no network tracking endpoint, connected analytics provider, durable event store,
analytics cookie, identity, session identifier or ad-account conversion integration**.
These hooks are ready for a later separately configured analytics listener. Until that happens,
use the ad account for impressions/clicks and actual Google appointments/sales records for outcomes.
Do not promise a historical event backfill; browser memory is transient.

Dimensions are the fixed campaign name, placement and allowlisted `utm_*` values. Arbitrary URL
values are normalized; no email, report content, full URL or referrer enters these hooks.
There is no completed-booking event: a cross-domain outbound click cannot establish completion.
Google may not retain the page UTMs in appointment records. Do not claim individual appointment
attribution unless a future supported integration is verified.

Initial ad URL:

```text
https://trellisworks.ca/excel-reporting/?utm_source=chatgpt&utm_medium=paid&utm_campaign=excel_reporting&utm_content=recurring_report
```

If adding a collector later: preserve this privacy boundary; inspect the actual site's existing
configuration first, document consent/handling and retention as applicable, update the privacy page,
and test collection/readback before reporting it operational. The saved Pages bootstrap credential
supports deployment but its D1/analytics API access was insufficient. No database was created and
no Cloudflare login/terms were accepted during this build.

## Run, verify and deploy

Requirements: Node (validated with v24), npm, Python 3. Dependencies are pinned by `package-lock.json`.
The optional social-card renderer uses Pillow and Avenir Next on macOS (DejaVuSans fallback).

```sh
npm ci
npm run dev -- --host 127.0.0.1
npm run build
npm run test:campaign
```

The test command expects a current build. It checks real built routes/assets/anchors, one H1 per page,
canonical URLs, booking destinations and bounded attribution values. Check the browser last: desktop
and mobile layout, FAQ interaction, primary CTA, booking duration/availability and form. Inspect the
booking form without reserving an appointment or sending test invitations unless specifically needed
and authorized. Do not collect real client files for website testing.

Deployment procedure:

1. `git status --short`; inspect the diff and preserve unrelated changes.
2. Run the build and campaign checks.
3. Commit the reviewed source and push `main` to `origin`.
4. Check Cloudflare Pages for a successful **production** deployment matching the exact commit SHA.
5. Confirm the custom-domain page, generated assets, canonical URL and Google booking link.
6. Update the Notion website runbook and approved active time entry with results and material limits.

`git` uses the existing macOS credential helper; never embed tokens in remotes or command arguments.
Cloudflare deployment API access is in `/Users/josh/FI-Solutions/trellisworks.env`; load only into the
process needing it and never print, commit or copy values. No secrets belong in website source,
browser JavaScript, campaign documents or screenshots.

## Rollback and likely changes

Previous production baseline before this campaign: `30f09ebd27989764199389872f4cc7aacda44854`.
Use a revert commit for a normal source rollback; avoid a force-push. Cloudflare's deployment rollback
is available for urgent recovery; follow with a source reconciliation so a later push does not undo it.

- Copy changes: edit the Astro page and corresponding campaign promise, then build/test/deploy.
- Appointment settings: edit Google Appointment Schedules; preserve Josh's availability and check the
  public form. Changing the website URL does not change the Google schedule.
- New source/ERP promises: validate before adding them; a generic export workflow does not establish
  support for every platform or report rule.
- Broken Google link: update the single configuration value. The email fallback remains available.
- Unavailable appointments: review the schedule's date range, availability and conflict calendars;
  never silently broaden Josh's calendar availability.
- Missing tracking counts: expected until a real collector is configured. Browser event hooks are
  not a dashboard and do not establish booked meetings.

No background jobs, database migrations, runtime secrets, new paid services or customer-data backups
are required by the current campaign. Static files are recoverable from Git and Cloudflare deployments.
Company source of truth: the existing Notion website runbook and marketing review, linked from
`campaigns/excel-reporting.md`. Ads remain Josh's separate launch step.
