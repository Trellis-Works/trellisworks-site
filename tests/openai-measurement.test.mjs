import test from 'node:test';
import assert from 'node:assert/strict';
import { initOpenAIMeasurement, CONSENT_KEY } from '../src/scripts/openai-measurement.ts';

function fixture(choice, brokenStorage = false) {
  const calls = [], loaded = [], listeners = new Map();
  const button = value => ({ dataset: { measurementChoice: value }, addEventListener: (_, fn) => listeners.set(value, fn), focus() {} });
  const allow = button('allow'), decline = button('decline');
  const panel = { hidden: true, querySelector: () => allow };
  globalThis.window = {};
  globalThis.localStorage = { getItem: () => { if (brokenStorage) throw Error(); return choice; }, setItem: (k, v) => { assert.equal(k, CONSENT_KEY); if (brokenStorage) throw Error(); choice = v; } };
  globalThis.document = {
    querySelector: selector => selector === '[data-measurement-panel]' ? panel : { addEventListener: (_, fn) => listeners.set('settings', fn) },
    querySelectorAll: selector => selector === '[data-measurement-choice]' ? [allow, decline] : [{ addEventListener: (_, fn) => listeners.set('booking', fn) }],
    createElement: () => ({}), head: { appendChild: script => loaded.push(script) },
  };
  initOpenAIMeasurement();
  return { panel, loaded, listeners, queue: () => window.oaiq?.q || calls };
}

test('no SDK or events before consent; decline preserves booking navigation', () => {
  const f = fixture(null);
  assert.equal(f.panel.hidden, false);
  f.listeners.get('booking')();
  f.listeners.get('decline')();
  assert.equal(f.loaded.length, 0);
  assert.deepEqual(f.queue(), []);
});

test('acceptance queues page view and honest booking click; withdrawal blocks future events', () => {
  const f = fixture(null);
  f.listeners.get('allow')();
  assert.equal(f.loaded.length, 1);
  assert.equal(f.queue()[0][0], 'consent');
  assert.equal(f.queue()[1][1].debug, false);
  assert.equal(f.queue()[2][1], 'page_viewed');
  f.listeners.get('booking')();
  assert.equal(f.queue().at(-1)[1], 'custom');
  assert.equal(f.queue().at(-1)[3].custom_event_name, 'excel_reporting_booking_click');
  assert.doesNotMatch(JSON.stringify(f.queue()), /appointment_scheduled|lead_created/);
  f.listeners.get('settings')();
  assert.equal(f.panel.hidden, false);
  f.listeners.get('decline')();
  assert.deepEqual(f.queue().at(-1), ['consent', false]);
  const count = f.queue().length;
  f.listeners.get('booking')();
  assert.equal(f.queue().length, count);
});

test('saved choices and inaccessible storage remain functional', () => {
  assert.equal(fixture('decline').loaded.length, 0);
  const saved = fixture('allow');
  assert.equal(saved.loaded.length, 1);
  assert.equal(saved.panel.hidden, true);
  const blocked = fixture(null, true);
  blocked.listeners.get('allow')();
  assert.equal(blocked.loaded.length, 1);
});
