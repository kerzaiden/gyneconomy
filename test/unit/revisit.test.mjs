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
const { capeHistory, syncCapeHistory } = await import('../../src/js/data.ts');

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
