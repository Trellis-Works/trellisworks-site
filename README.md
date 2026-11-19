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

**Approved for publication November 19:** `/partners/` is the shareable adviser
overview; `/solutions/` links to the existing Excel page and new `/internal-knowledge/`,
`/email-workflows/` and `/onboarding/` pages. Each solution has one permanent URL for organic
visitors and future ads. See the [current publication checkpoint](docs/CONTINUATION.md).

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
