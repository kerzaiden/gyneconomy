import test from 'node:test';
import assert from 'node:assert/strict';
import { coincident } from '../../src/js/readings.ts';
import { now, capeAsOf } from '../../src/js/data.ts';

const plain = o => JSON.parse(JSON.stringify(o));
const rows = plain(coincident), val = plain(now.valuation.rows).sort((a, b) => (a.key === 'cape' ? 0 : 1) - (b.key === 'cape' ? 0 : 1));
globalThis.gynCache = {
  coincident: { kind: 'series', rows, asOf: '2026-09-01' },
  valuation: { kind: 'object', rows: val },
  vix3mClose: { kind: 'scalar', value: 22.2, asOf: '2020-01-02' },
  capeValue: { kind: 'scalar', value: 30.1, asOf: '2027-01-15' }
};
const { errors, window } = await import('./dom.mjs');
const { coincident: after } = await import('../../src/js/readings.ts');
const { liveApplied, refreshLiveData } = await import('../../src/js/live.ts');
const { capeHistory, syncCapeHistory, fileRow } = await import('../../src/js/data.ts');
const { isoDay } = await import('../../src/js/format.ts');

test('a cached coincident document keeps the page each row draws', () => {
  assert.equal(liveApplied.coincident, JSON.stringify(globalThis.gynCache.coincident));
  after.forEach(r => assert.equal(typeof r.page.chart, 'function', r.bodyTerm));
});

test('cached valuation rows in the order the app keeps them are accepted on the next visit', () => {
  assert.equal(liveApplied.valuation, JSON.stringify(globalThis.gynCache.valuation));
});

test('every live scalar knows its file date, so an older cached one is refused', () => {
  assert.equal(liveApplied.vix3mClose, undefined);
  assert.equal(now.vix3mClose === 22.2, false);
});

test('a CAPE figure from a new year adds that year instead of overwriting the last', () => {
  assert.equal(fileRow('cape').meter.value, 30.1, 'the cached figure is applied at load');
  syncCapeHistory();
  assert.equal(capeAsOf(), '2027-01-15');
  assert.deepEqual(capeHistory.slice(-2), [{ y: 2026, v: 39.65 }, { y: 2027, v: 30.1 }]);
  assert.deepEqual(errors, []);
});

test('a Fed move without its own decision keeps its date, so an older move cannot follow it', async () => {
  const deliver = async docs => {
    window.claude = { use: () => Promise.resolve({ doc: p => ({ get: () => docs[p.slice(5)] ? Promise.resolve({ data: docs[p.slice(5)] }) : Promise.reject(new Error('none')) }) }) };
    refreshLiveData();
    for (let i = 0; i < 5; i++) await new Promise(r => setTimeout(r, 0));
    delete window.claude;
  };
  await deliver({ fedFunds: { kind: 'object', lo: 3.5, hi: 3.75, asOf: 'Oct 28, 2026' } });
  assert.deepEqual([now.fedFunds.lo, now.fedFunds.hi, now.fedFunds.asOf, now.fedFunds.lastMove], [3.5, 3.75, 'Oct 28, 2026', '']);
  await deliver({ fedFunds: { kind: 'object', lo: 5.25, hi: 5.5, asOf: 'Jul 26, 2023' } });
  assert.deepEqual([now.fedFunds.lo, now.fedFunds.hi], [3.5, 3.75]);
});

const send = async docs => {
  window.claude = { use: () => Promise.resolve({ doc: p => ({ get: () => docs[p.slice(5)] ? Promise.resolve({ data: docs[p.slice(5)] }) : Promise.reject(new Error('none')) }) }) };
  refreshLiveData();
  for (let i = 0; i < 5; i++) await new Promise(r => setTimeout(r, 0));
  delete window.claude;
};

test('a same-day figure lands in every time zone', async () => {
  const tz = process.env.TZ, day = isoDay(now.sentiment.rows[0].sub);
  assert.match(day, /^\d{4}-\d{2}-\d{2}$/);
  process.env.TZ = 'America/New_York';
  try { await send({ vixClose: { kind: 'scalar', value: 33.3, asOf: day } }); } finally { process.env.TZ = tz; }
  assert.equal(now.sentiment.rows[0].meter.value, 33.3);
});

test('a date that is not on the calendar is refused', async () => {
  await send({ vixClose: { kind: 'scalar', value: 34.4, asOf: '2026-13-05' } });
  await send({ vixClose: { kind: 'scalar', value: 35.5, asOf: '2026-02-30' } });
  assert.equal(now.sentiment.rows[0].meter.value, 33.3);
  assert.doesNotMatch(document.body.textContent, /undefined \d/);
});

test('an undated Fed range does not let an older decision follow it', async () => {
  await send({ fedFunds: { kind: 'object', lo: 3, hi: 3.25 } });
  assert.deepEqual([now.fedFunds.lo, now.fedFunds.asOf], [3, '']);
  await send({ fedFunds: { kind: 'object', lo: 5.25, hi: 5.5, asOf: 'Jul 26, 2023' } });
  await send({ fedFunds: { kind: 'object', lo: 4.5, hi: 4.75, asOf: 'Aug 1, 2026' } });
  assert.equal(now.fedFunds.lo, 3);
});

test('an object document cannot change a field into another type', async () => {
  await send({ fedFunds: { kind: 'object', lo: 2.75, hi: 3, asOf: 'Dec 9, 2026', next: { when: 'soon' } } });
  assert.equal(now.fedFunds.lo, 3);
  const bad = { kind: 'object', hint: 7, rows: JSON.parse(JSON.stringify(now.valuation.rows)) };
  await send({ valuation: bad });
  assert.notEqual(liveApplied.valuation, JSON.stringify(bad));
  assert.equal(typeof now.valuation.hint, 'string');
  await send({ fedFunds: { kind: 'object', lo: 2.75, hi: 3, asOf: 'Dec 9, 2026', next: 'Jan 27, 2027' } });
  assert.deepEqual([now.fedFunds.lo, now.fedFunds.next], [2.75, 'Jan 27, 2027']);
});
