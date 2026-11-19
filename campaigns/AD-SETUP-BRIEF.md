<!-- Current tracking checkpoint supersedes historical deferred-analytics notes below. -->
## OpenAI measurement — November 19, 2026

Josh supplied Web Pixel `6t4ZMHXfpzY86EcD2TpKiS` and explicitly authorized publication in the
conversion-setup chat. The Excel landing page now includes an optional ad-measurement choice:
no SDK load before acceptance; acceptance sends `page_viewed` and the custom event
`excel_reporting_booking_click`. Decline/withdrawal disables measurement; the SDK removes
its attribution cookies on withdrawal. Settings can be reopened at the bottom of the page.
Debug is off. No manual customer identifiers or invented revenue are sent.
Josh also requested the Excel page enquiry destination change to founders@trellisworks.ca;
both Gmail and mailto links now use that address.
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

# Excel reporting ads — agent setup brief

## Current state — November 19 launch and reporting

Josh verified the live ad/pages/booking and explicitly authorized launch. The existing Excel ad,
ad group and campaign are ACTIVE; read-back confirmed CA$60 lifetime cap, CA$1 average CPC target,
Canada/all platforms and unchanged creative/destination. Delivery is eligible, not proof of impressions.
Earlier paused/approval-pending notes below are history, not the current instruction.

The short launch update was posted to Slack #founders. One daily 09:00 America/Edmonton local
standalone cron is ACTIVE: `trellis-excel-ad-daily-slack-update`, fresh chat per run. It requires
this Mac and its local Slack credential. First unattended report is due November 20; actual run,
fresh-chat continuation and daily delivery remain pending verification. Do not duplicate this runner.
Use the current reporting protocol/checkpoint in the canonical ad brief:
https://app.notion.com/p/41b07c44d1ea81a2b7d6e0736f56cf9c
All requests and remaining follow-ups:
https://app.notion.com/p/41d07c44d1ea817382ebfed81ea1f5e0

No conversion source or published Business Agent was configured at setup. Report actual ad activity,
verified business outcomes and supported audience/need evidence; never invent conversions, infer
anonymous identities or equate booking clicks with bookings. Read-only reporting does not authorize
ad changes, extra tracking or email sends. Megin's revised signed draft remains unsent.


Canonical Notion brief: https://app.notion.com/p/41b07c44d1ea81a2b7d6e0736f56cf9c

**Purpose:** help Josh set up the first Trellis Works ChatGPT-ad test for recurring Excel reporting. Prepared November 17, 2026. No campaign has been created or launched and no spend authorized in this chat. Follow Josh’s instructions in the new chat for account actions; prepare the exact campaign and budget for review before enabling it.

## Offer and destination

Trellis implements one repeatable reporting workflow: agreed source exports → preparation and reporting rules → Excel output → checks and staff review, with operating instructions and handoff. Scope and quote follow an introductory conversation. The ad sells implementation help. Do not add an assessment, sample download, free custom build, price, guaranteed savings or promised turnaround.

**Landing page:** https://trellisworks.ca/excel-reporting/

**Booking:** https://calendar.app.google/uV1Mua1VdEaYQ73i7

The page CTA opens Josh’s existing “Trellis: Report Automation Scoping Call”: 15 minutes, Google Meet. Name/email remain required. Company and “What would you like to discuss? Briefly describe your current reporting process, the tools or data involved, and what you’d like to improve.” are optional. A clear 15-minute meeting description is saved. The public form and available times were checked without submitting an appointment. The page is live and was tested on desktop/mobile.

## Copy to use

**Headline:** Rebuilding the same Excel report?

**Body:** Turn recurring exports and spreadsheet prep into a repeatable reporting workflow, with checks and a clear handoff. Talk through one report with Trellis Works.

**CTA:** Talk through your report

Use the account’s available CTA field or closest suitable option. Verify actual format and text limits in the account.

**If there is one text field:**

Rebuilding the same Excel report? Trellis Works helps turn recurring exports and spreadsheet prep into a repeatable workflow, with checks and a clear handoff. Talk through your report in a 15-minute call.

**Exact destination with campaign tags:**

```text
https://trellisworks.ca/excel-reporting/?utm_source=chatgpt&utm_medium=paid&utm_campaign=excel_reporting&utm_content=recurring_report
```

## Setup and launch boundary

- Use Josh’s intended existing business ad account. Confirm account identity and actual platform/promotion before making changes.
- Josh reports roughly $30 in credit. Confirm currency, eligibility, expiry, qualifying spend, payment requirements, total cap and billing after the credit. Do not infer authority to spend beyond it.
- Start with one offer and the primary creative. Retain other angles for later; do not split this small test across three campaigns.
- Intended buyer: a finance manager, controller, operations lead or owner responsible for recurring business reporting. Analysts can be champions. If targeting controls exist, use only supported options and markets Trellis can serve.
- Plausible conversation: “Every month we export data and rebuild the same Excel report. How can we automate it?” This is a hypothesis, not query-volume research or proof of keyword targeting.
- Preview the ad and exact tagged URL, check the booking path, then report the saved campaign state, budget/cap and any unresolved requirements. Obtain the actual launch instruction for the specific setup before enabling spend.

## Measurement and handoff

Additional website analytics were explicitly deferred by Josh. Browser event hooks exist, but no collector, stored event counts or ad conversion integration is connected. Do not configure new analytics unless asked. Use actual ad impressions/clicks, Google appointments and sales outcomes; an outbound booking click is not a completed booking. Appointment-level UTM attribution is unverified.

The website source is now synchronized to GitHub main. Cloudflare successfully deployed commit 77d71d8 through its normal GitHub push integration on November 17. Future website changes must use GitHub → Cloudflare.

Return the campaign/account identifier, exact saved copy/URL, review status, budget/credit findings and remaining action for Josh. Keep credentials and payment details out of chat and artifacts.

Background: [Campaign decisions and handoff](https://app.notion.com/p/3fe07c44d1ea8153ae10de3d92885cb6). Website state: [Website operating notes](https://app.notion.com/p/3d507c44d1ea810cb4fced80b9675afc).



## Final booking availability

Monday 11:30 a.m.–1:30 p.m.; Wednesday 2–4 p.m.; Friday 8–10 a.m., in the schedule’s Edmonton timezone. Seven days ahead, 12 hours rolling notice, 15-minute buffer, maximum four bookings per day. Company and the discussion/process question are optional. Work-calendar conflicts are checked; Josh will handle personal/work busy-time synchronization. Do not change these settings during ad setup.
