import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import { errors, warnings, window } from './dom.mjs';
import { refreshLiveData, liveApplied, READINGS } from '../../src/js/live.ts';
import { isoDay } from '../../src/js/format.ts';
import { createRequire } from 'module';
const fetchLive = createRequire(import.meta.url)('../../tools/fetch-live.js');

const feed = JSON.parse(fs.readFileSync(new URL('../../data/live.json', import.meta.url), 'utf8'));
const docs = Object.fromEntries(Object.entries(feed).filter(([k]) => k !== '_meta'));

test('every document the Data bot wrote is accepted by the app, unless the file holds a newer figure', async () => {
  window.claude = { use: () => Promise.resolve({ doc: p => ({ get: () => docs[p.slice(5)] ? Promise.resolve({ data: docs[p.slice(5)] }) : Promise.reject(new Error('none')) }) }) };
  refreshLiveData();
  for (let i = 0; i < 5; i++) await new Promise(r => setTimeout(r, 0));
  delete window.claude;
  const refused = Object.keys(docs).filter(n => {
    const r = READINGS[n], file = r && r.fileAsOf ? isoDay(r.fileAsOf()) : '', got = isoDay(docs[n].asOf);
    return liveApplied[n] !== JSON.stringify(docs[n]) && !(got && got < file);
  });
  assert.deepEqual(refused, []);
  assert.deepEqual(errors.concat(warnings.filter(w => /repaint|registry/.test(w))), []);
});

test('every scalar band is inclusive and refuses anything outside it', () => {
  const A = window.__GYN.applyLive, scalars = Object.keys(READINGS).filter(n => READINGS[n].kind === 'scalar');
  assert.ok(scalars.length > 0);
  for (const n of scalars) {
    const [lo, hi] = READINGS[n].band;
    assert.deepEqual([A(n, lo), A(n, hi), A(n, lo - 0.01), A(n, hi + 0.01), A(n, NaN), A(n, String(lo)), A(n, [lo])],
      [true, true, false, false, false, false, false], n);
  }
});

test('the Data bot refuses a scalar exactly where the app does', () => {
  const app = Object.fromEntries(Object.keys(READINGS).filter(n => READINGS[n].kind === 'scalar').map(n => [n, READINGS[n].band]));
  assert.deepEqual(fetchLive.BANDS, app);
});
