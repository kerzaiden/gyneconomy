import test from 'node:test';
import assert from 'node:assert/strict';
import { errors, window } from './dom.mjs';
import { ui } from '../../src/js/dom.js';
import { refreshLiveData, liveApplied } from '../../src/js/live.js';
import { now, fedFundsRange } from '../../src/js/data.js';
import { nowModel, seasonGroup } from '../../src/js/model.js';
import { seasonName } from '../../src/js/format.js';

const card = sheet => document.querySelector('[data-open="' + sheet + '"]');
const value = sheet => card(sheet).querySelector('.ci-value').firstChild.nodeValue;
const tag = sheet => card(sheet).querySelector('.tag').textContent;

async function deliver(docs) {
  window.claude = { use: () => Promise.resolve({ doc: path => ({ get: () => {
    const d = docs[path.slice(5)];
    return d ? Promise.resolve({ data: d }) : Promise.reject(new Error('none'));
  } }) }) };
  refreshLiveData();
  for (let i = 0; i < 5; i++) await new Promise(r => setTimeout(r, 0));
  delete window.claude;
}

const FED = { kind: 'object', lo: 3.75, hi: 4, lastMove: '+0.25', lastMoveLabel: 'raised a quarter point', asOf: 'Sep 16, 2026', next: 'Oct 28, 2026' };

test('the Fed card prints the one Fed funds range', () => {
  assert.equal(value('sheet-sign-hormones'), fedFundsRange());
  assert.equal(tag('sheet-sign-hormones'), 'Tightening');
});

test('the Diagnosis names the model’s season', () => {
  const head = document.querySelector('#diagnosis .trend-head').textContent;
  assert.match(head, new RegExp(' in ' + seasonName(seasonGroup(nowModel.season)) + '$'));
});

test('a live Fed cut reaches the card, its tag and the policy facts', async () => {
  await deliver({ fedFunds: { ...FED, lo: 3.5, hi: 3.75, lastMove: '-0.25', lastMoveLabel: 'cut a quarter point' } });
  assert.equal(now.fedFunds.lo, 3.5);
  assert.equal(value('sheet-sign-hormones'), '3.50–3.75%');
  assert.equal(tag('sheet-sign-hormones'), 'Easing');
  assert.match(document.getElementById('policy-facts').textContent, /3\.50–3\.75%/);
});

test('a live document carrying markup is refused and changes nothing', async () => {
  const before = value('sheet-sign-hormones');
  await deliver({ fedFunds: { ...FED, lo: 5, hi: 5.25, lastMoveLabel: '<img src=x onerror=alert(1)>' } });
  assert.equal(value('sheet-sign-hormones'), before);
  assert.ok(!/onerror/.test(liveApplied.fedFunds || ''));
});

test('a live VIX close reaches the Volatility card; one outside its band is refused', async () => {
  await deliver({ vixClose: { kind: 'scalar', value: 31.7, asOf: '2026-10-01' } });
  assert.equal(value('sheet-sign-sentiment'), '31.7');
  assert.equal(String(now.vixRow.flagValue), '31.7');
  await deliver({ vixClose: { kind: 'scalar', value: 9999, asOf: '2026-10-02' } });
  assert.equal(value('sheet-sign-sentiment'), '31.7');
});

test('a live yield curve moves the 10-year figure on the Pressure card', async () => {
  const rows = now.yieldCurve.map(r => r.m === '10Y' ? { ...r, y: 4.44 } : r);
  await deliver({ yieldCurve: { kind: 'series', rows } });
  assert.equal(value('sheet-sign-pressure'), '4.44%');
});

test('a live CAPE and high-yield spread reach the Valuations and Desire cards', async () => {
  await deliver({ capeValue: { kind: 'scalar', value: 35.2, asOf: '2026-10-01' }, hyOasNow: { kind: 'scalar', value: 4.1, asOf: '2026-10-01' } });
  assert.equal(value('sheet-metric-valuation'), '35.2×');
  assert.equal(value('sheet-sign-desire'), '4.10%');
  assert.deepEqual(errors, []);
});

test('a past cycle shows its own record on the cards and the Diagnosis, and Back restores today', () => {
  const temp = () => document.querySelector('.cat-sheet .cat-item[data-open="sheet-metric-temp"]').textContent;
  const today = temp(), head = document.querySelector('#diagnosis .trend-head').textContent;
  document.querySelector('#cycle-list .era-row[data-era="2009"]').click();
  assert.equal(ui.eraOpen.name, 'Big Tech Cycle');
  assert.equal(document.querySelector('#diagnosis .trend-head').textContent, 'Cycle story');
  assert.match(temp(), /Dec 2018/);
  ui.eraPageBack();
  assert.equal(ui.eraOpen, null);
  assert.equal(document.querySelector('#diagnosis .trend-head').textContent, head);
  assert.equal(temp(), today);
  assert.deepEqual(errors, []);
});
