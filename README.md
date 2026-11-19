<!-- Current tracking checkpoint supersedes historical deferred-analytics notes below. -->
## OpenAI measurement — November 19, 2026

Josh supplied Web Pixel `6t4ZMHXfpzY86EcD2TpKiS` and explicitly authorized publication in the
conversion-setup chat. The Excel landing page now includes an optional ad-measurement choice:
no SDK load before acceptance; acceptance sends `page_viewed` and the custom event
`excel_reporting_booking_click`. Decline/withdrawal disables measurement; the SDK removes
its attribution cookies on withdrawal. Settings can be reopened at the bottom of the page.
Debug is off. No manual customer identifiers or invented revenue are sent.
Booking clicks are secondary funnel actions, never completed appointments or submitted leads.
Google appointment completion/attribution remains unconnected. UTMs alone cannot provide it.

After deployment, Josh should run Ads Manager → Conversions → Data Source → pixel menu → Test
against the Excel URL, accept measurement, and click a booking link. Expect `page_viewed`
and custom `excel_reporting_booking_click`. Configure a custom conversion with that exact
name if desired, labelled “Excel reporting — booking link click”. Receipt and account-side
conversion configuration remain unverified until checked in Ads Manager. Do not recreate the
campaign or alter budgets/optimization just to add tracking. Notion currently requires reauthentication;
canonical website/ad records need this checkpoint after reconnection. Deployment status is recorded
in this chat until verified.

# Trellis Works site

A minimal Astro static site for Cloudflare Pages.

**Maintainers:** start with [docs/MAINTENANCE.md](docs/MAINTENANCE.md).
Next session: [GitHub deployment repair brief](docs/CONTINUATION.md).
For the ad-account agent: [ad setup brief](campaigns/AD-SETUP-BRIEF.md).
The [Excel reporting campaign](https://trellisworks.ca/excel-reporting/) is configured in
`src/config/excel-reporting.ts`. Ready-to-use ad copy and launch instructions are in
[campaigns/excel-reporting.md](campaigns/excel-reporting.md).

**Deployment verified, November 17:** campaign source is synchronized to GitHub `main`, and
Cloudflare successfully deployed commit `77d71d8` through the normal `github:push` integration.
Future changes must follow GitHub → Cloudflare; do not bypass a failed push with a direct upload.

**Published and verified November 19:** `/partners/` is the shareable adviser
overview; homepage `/#solutions` under Services links to the existing Excel page and new `/internal-knowledge/`,
`/email-workflows/` and `/onboarding/` pages. Each solution has one permanent URL for organic
visitors and future ads. See the [current publication checkpoint](docs/CONTINUATION.md).
The shared original-style header includes Home, Services, Solutions, Approach, About, Contact
and For advisers. On the homepage its underline advances to each section as visitors scroll,
keeping Solutions active until Approach rather than returning to Services.
Ways to work together describes Project delivery and Embedded support. The older `/solutions/`
index remains available for existing links.

## Local use

1. Install dependencies: `npm ci`
2. Start a preview: `npm run dev`
3. Build: `npm run build`
4. Validate the built site and campaign: `npm run test:campaign`

Cloudflare Pages should use `npm run build` and publish `dist`.

## Brand assets

The supplied Trellis Works logo assets are stored in `public/brand/`. The public page uses the
transparent wordmark and trellis mark; the white-background wordmark is retained for use on light
surfaces. The source brand guide is intentionally kept outside this public repository.

**November 19 launch:** Excel ad/group/campaign are active at CA$60 total, CA$1 average CPC target. Short daily #founders reporting is scheduled at 09:00 Edmonton in a fresh local chat. Track requests and remaining verification in https://app.notion.com/p/41d07c44d1ea817382ebfed81ea1f5e0 and the current Notion ad brief.
