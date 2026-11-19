import test from 'node:test';
import assert from 'node:assert/strict';
import { campaignAttribution } from '../src/scripts/campaign-events.ts';
import { excelReporting, reportingEmail } from '../src/config/excel-reporting.ts';

test('paid campaign labels survive the exact launch URL', () => {
  assert.deepEqual(campaignAttribution('?utm_source=chatgpt&utm_medium=paid&utm_campaign=excel_reporting&utm_content=recurring_report'), {
    utm_source: 'chatgpt', utm_medium: 'paid', utm_campaign: 'excel_reporting', utm_content: 'recurring_report',
  });
});

test('unknown labels and personal information cannot enter event dimensions', () => {
  const result = campaignAttribution('?utm_source=someone%40example.com&utm_medium=%3Cscript%3E&utm_campaign=private-client&utm_content=report-secret&email=person%40example.com');
  assert.equal(result.utm_source, 'other');
  assert.equal(result.utm_medium, 'other');
  assert.equal(result.utm_campaign, 'excel_reporting');
  assert.equal(result.utm_content, 'other');
  assert.doesNotMatch(JSON.stringify(result), /@|secret|script|private-client/);
});

test('direct and alternate creative traffic have bounded dimensions', () => {
  assert.equal(campaignAttribution('').utm_source, 'direct');
  assert.equal(campaignAttribution('?utm_content=combine_files').utm_content, 'combine_files');
  assert.equal(campaignAttribution('?utm_content=reliable_handoff').utm_content, 'reliable_handoff');
});

test('booking and email fallback destinations use the agreed campaign', () => {
  assert.equal(excelReporting.durationMinutes, 15);
  assert.equal(excelReporting.bookingUrl, 'https://calendar.app.google/uV1Mua1VdEaYQ73i7');
  const gmail = new URL(reportingEmail.gmail);
  assert.equal(gmail.hostname, 'mail.google.com');
  assert.equal(gmail.searchParams.get('to'), 'founders@trellisworks.ca');
  assert.equal(new URL(reportingEmail.mailto).pathname, 'founders@trellisworks.ca');
  assert.match(gmail.searchParams.get('body'), /steps we do by hand/);
  assert.equal(new URL(reportingEmail.mailto).protocol, 'mailto:');
});
