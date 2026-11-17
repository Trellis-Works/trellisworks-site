# Excel reporting campaign

Ready-to-use campaign copy for Trellis Works. Prepared November 17, 2026.

**Offer:** a scoped implementation of one recurring reporting workflow, from agreed source exports to a prepared Excel report, with checks, staff review, operating instructions and handoff. Scope and quote follow the introductory conversation. No assessment or sample download is being sold through this campaign.

**Destination:** `https://trellisworks.ca/excel-reporting/`. Verify the production page before enabling the campaign.

**Booking destination:** https://calendar.app.google/uV1Mua1VdEaYQ73i7 (Josh’s supplied 15-minute Report Automation Scoping Call).

**Page CTA:** Talk through your report. The next step is a 15-minute scoping call, not an implementation session.

## Primary ad

**Headline**

Rebuilding the same Excel report?

**Body**

Turn recurring exports and spreadsheet prep into a repeatable reporting workflow, with checks and a clear handoff. Talk through one report with Trellis Works.

**CTA**

Talk through your report

Use the account's available CTA field or closest permitted option. The wording above does not assert that custom button text is supported.

**Destination with attribution**

```text
https://trellisworks.ca/excel-reporting/?utm_source=chatgpt&utm_medium=paid&utm_campaign=excel_reporting&utm_content=recurring_report
```

The headline and body are separate copy fields, not a claim about the ad platform's required format or character limits. If the account offers a single text field, use:

> Rebuilding the same Excel report? Trellis Works helps turn recurring exports and spreadsheet prep into a repeatable workflow, with checks and a clear handoff. Talk through your report in a 15-minute call.

## Alternatives for a later test

Keep the first small campaign focused on the primary ad. These are distinct alternatives to retain for later use, not three ads to split the initial credit across.

### Combining source files

**Headline:** Still combining exports by hand?

**Body:** We build repeatable workflows that combine agreed source files into the recurring Excel report your team needs. Start with one report and a 15-minute scoping call.

**CTA:** Talk through your report

**UTM content:** `combine_files`

### Moving beyond the prototype

**Headline:** Make that reporting shortcut repeatable

**Body:** Have a spreadsheet process that works only when one person runs it? Trellis Works helps put the preparation, checks and handoff into a workflow your team can operate.

**CTA:** Talk through your report

**UTM content:** `reliable_handoff`

## Conversation and buyer hypotheses

These are plausible ChatGPT prompts, not observed query data, measured search volumes or confirmed targeting options:

- “Every month I export data from our accounting system and rebuild the same Excel report. How can I automate it?”
- “How can I combine several CSV exports into the same monthly Excel workbook without doing it manually each time?”
- “I have a prototype for our reporting process. How do we make it reliable enough for the whole finance team to use?”
- “Can someone set up our recurring spreadsheet reporting and show the team how to run it?”

Likely buyers include finance managers, controllers, operations leads and owners accountable for recurring reporting. An analyst may be a useful champion; a how-to prompt alone does not establish buying authority or implementation demand.

The intended first project has a recurring business report, identifiable source data, an available process owner and a reason to put a repeatable workflow into use. A single formula question is a weaker fit.

## Account setup

Josh will add the campaign to the ad account and launch it. No ads or spend were initiated during the website build.

- Confirm the actual credit amount/currency, expiry, eligibility and billing behavior in the account. The roughly $30 figure is Josh's reported offer, not an independently verified entitlement.
- Use the deployed landing page as the destination. Keep the ad promise aligned with that page: implementation of a recurring report, beginning with a scoping call.
- Use the actual platform's available text, CTA and destination fields. Check preview and limits there; no specific ad format, audience selector, keyword matching or targeting feature is assumed here.
- If geographic controls are available, start with markets Trellis can actually serve. Language is English. Do not present the prompt hypotheses as an uploaded keyword strategy unless the platform explicitly supports that behavior.
- Confirm the total campaign cap and any ongoing charges before enabling. Keep this first campaign focused on one offer and one primary message.

## Attribution and measurement

Use these fixed values for the initial ad:

| Parameter | Value |
| --- | --- |
| `utm_source` | `chatgpt` |
| `utm_medium` | `paid` |
| `utm_campaign` | `excel_reporting` |
| `utm_content` | `recurring_report` |

Use lowercase values and no personal information. Retain the same campaign value when changing the creative; change only `utm_content` for the alternatives above. Do not attach names, emails or report contents to analytics events.

Josh deferred additional analytics setup. The website currently prepares browser-only event hooks; no collector, network tracking endpoint or durable reporting store is connected. Read `docs/MAINTENANCE.md` for the exact status. These hooks are integration points for later analytics:

| Event | Meaning |
| --- | --- |
| `trellis_landing_view` | The landing page was viewed. |
| `trellis_booking_click` | A visitor followed the available booking CTA. |
| `trellis_enquiry_click` | A visitor followed the enquiry/contact option. |

Only record `booking_confirmed` if a real booking completion can be verified. A browser click does not provide that evidence. These in-memory hooks are not collected counts or an ad-account conversion integration. There is no historical backfill. Until a collector is configured, use ad-account clicks, actual Google appointments and the sales record for outcomes.

Measure this sequence where the connected services provide evidence:

1. Ad impressions and clicks, from the ad account.
2. Landing-page visits, with attribution when supported by the deployed analytics.
3. Booking CTA clicks, once the landing-page hooks are connected to a collector (deferred).
4. Actual completed bookings, from the booking tool or a verified completion integration.
5. Attended calls, qualified projects, quotes and wins, from the sales record.

**A booking CTA click is not a completed booking.** Cross-domain booking completion requires booking-provider evidence or a verified integration; do not label an outbound click as a lead. Google may not retain landing-page UTMs in appointment records, so do not claim appointment-level attribution unless tested.

With a small initial credit, use results to check whether the message and path work and whether enquiries fit. A few clicks or no bookings cannot establish demand or conversion performance reliably.

## Fifteen-minute call

Establish what the report is for, how often it is prepared, which source files/systems feed it, what staff currently do by hand and who reviews the result. Confirm who owns the workflow and whether they want implementation help. End with the inputs needed for scope/quote, a clearly explained discovery step if necessary, or a candid no-fit decision.

No client-sensitive files need to be uploaded to the landing page. A description of the workflow is enough to begin.

## Launch check

- Open the exact attributed destination from the account preview on desktop and mobile.
- Confirm the page loads, the main CTA reaches the intended booking/enquiry destination and the destination offers the stated meeting duration.
- Verify the tracking events actually available in the deployed setup. Check completed bookings separately.
- Check the account's ad preview, credit terms and total cap, then enable only the intended campaign.
- Record actual bookings and qualification outcomes. Revise the offer or path when evidence identifies a specific problem.

Internal planning source: [Marketing plan review](https://app.notion.com/p/3fe07c44d1ea8153ae10de3d92885cb6). Customer conversations informed the workflow choice; this campaign makes no client-result, savings, price or delivery-time claim.
