import test from 'node:test';
import assert from 'node:assert/strict';
import { errors, window } from './dom.mjs';
import { ui } from '../../src/js/dom.js';
import { refreshLiveData, liveApplied, forgetLive } from '../../src/js/live.js';
import { now, fedFundsRange, labRow } from '../../src/js/data.js';
import { grossDebtQuarterly } from '../../src/js/history-fred.js';
import { HIST_NOTE } from '../../src/js/history.js';
import { nowModel, seasonGroup, growthWord, cycleNowNote } from '../../src/js/model.js';
import { seasonName } from '../../src/js/format.js';

const card = sheet => document.querySelector('[data-open="' + sheet + '"]');
const value = sheet => card(sheet).querySelector('.ci-value').firstChild.nodeValue;
const tag = sheet => card(sheet).querySelector('.tag').textContent;
const when = sheet => card(sheet).querySelector('.ci-when').textContent;
const word = sheet => card(sheet).querySelector('.ci-word').textContent;

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

test('the debt card reads the last backfilled quarter', () => {
  const last = grossDebtQuarterly[grossDebtQuarterly.length - 1], row = labRow('sheet-metric-debt');
  assert.equal(row.meter.value, Math.round(last.v * 10) / 10);
  assert.equal(row.flagValue, row.meter.value.toFixed(1) + '%');
  assert.match(row.shortNote, new RegExp('^' + last.q.replace(/(\d{4}) (Q\d)/, '$2 $1')));
  assert.match(row.note, new RegExp("Today's " + row.meter.value.toFixed(1) + '%'));
  assert.ok(!/\{\w+\}/.test(row.note));
});

test('a newer live document dates its card with its own day', async () => {
  await deliver({ yieldCurve: { kind: 'series', rows: now.yieldCurve, asOf: '2026-10-05' }, hyOasNow: { kind: 'scalar', value: 3.3, asOf: '2026-10-05' } });
  assert.equal(when('sheet-sign-pressure'), 'Oct 5, 2026');
  assert.equal(when('sheet-sign-desire'), 'Oct 5, 2026');
});

test('a live document that would break the page is refused and not kept', async () => {
  const before = value('sheet-sign-sentiment');
  await deliver({ sentiment: { kind: 'object', rows: [{ marker: 'CBOE VIX' }] } });
  await deliver({ yieldCurve: { kind: 'series', rows: now.yieldCurve.filter(r => r.m !== '10Y') } });
  await deliver({ yieldCurve: { kind: 'series', rows: now.yieldCurve.map(r => r.m === '10Y' ? { ...r, y: 52.8 } : r) } });
  assert.equal(value('sheet-sign-sentiment'), before);
  assert.notEqual(value('sheet-sign-pressure'), '52.80%');
  assert.ok(!/CBOE VIX"\}\]/.test(localStorage.getItem('gyn.live') || ''));
});

test('a live CAPE repaints the Valuations verdict word', async () => {
  await deliver({ capeValue: { kind: 'scalar', value: 18, asOf: '2026-10-05' } });
  assert.equal(word('sheet-metric-valuation'), 'Fairly valued');
  await deliver({ capeValue: { kind: 'scalar', value: 35.2, asOf: '2026-10-06' } });
  assert.equal(word('sheet-metric-valuation'), 'Highly overvalued');
});

test('a new Fed range without its move clears the old move and the next date, and the note follows', async () => {
  await deliver({ fedFunds: { kind: 'object', lo: 3.25, hi: 3.5 } });
  assert.equal(now.fedFunds.lastMove, '');
  assert.equal(now.fedFunds.next, '');
  assert.match(HIST_NOTE['hormones-range'](), /Target 3\.25–3\.50%;/);
});

test('the policy facts say how the latest move sits in the run of moves', async () => {
  await deliver({ fedFunds: { ...FED, lo: 3.5, hi: 3.75, lastMove: '-0.25', asOf: 'Oct 28, 2026', turnLabel: 'First cut since', turnValue: '2024' } });
  assert.match(document.getElementById('policy-facts').textContent, /First cut since2024/);
  await deliver({ fedFunds: { ...FED, lo: 3.25, hi: 3.5, lastMove: '-0.25', asOf: 'Dec 9, 2026' } });
  assert.doesNotMatch(document.getElementById('policy-facts').textContent, /since/);
});

test('Growth’s word and Weather’s opening line follow the model', () => {
  const w = growthWord(nowModel.reading);
  assert.equal(word('sheet-metric-gdp').toLowerCase(), w);
  assert.ok(nowModel.reading.gdpLatest.v < 0 || w !== 'contracting');
  assert.match(cycleNowNote(nowModel), new RegExp({ contracting: 'shrinking', slowing: 'slowing', quickening: 'picking up', steady: 'steady' }[w]));
});

test('a boot failure with no stored documents is not swallowed', () => {
  localStorage.removeItem('gyn.live');
  assert.throws(() => forgetLive(new Error('boot')), /boot/);
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
