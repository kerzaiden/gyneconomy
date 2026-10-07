import test from 'node:test';
import assert from 'node:assert/strict';
import { window } from './dom.mjs';
import { detailTexts } from '../../src/js/dom.ts';
import { refreshLiveData } from '../../src/js/live.ts';
import { marketCycles, sp500AnnualReturns } from '../../src/js/data.ts';
import { calendarTodayY } from '../../src/js/refresh-season.ts';
import { ROSTER, ROSTER_BY } from '../../src/js/roster.ts';
import { todayFace } from '../../src/js/era.ts';
import { sheetRenderers } from '../../src/js/render-core.ts';
import { labs, yearsWord } from '../../src/js/cycle-analysis.ts';

const open = marketCycles.findIndex(c => c.ongoing);
const lab = id => labs().find(l => l.id === id);
const cardText = id => todayFace(ROSTER_BY[id]).text.trim().replace('≈', '');
const row = id => document.querySelector('#sheet-find .lab-row[data-open="' + id + '"]');

test('the open cycle’s results are today’s figures, printed as the model prints them', () => {
  ROSTER.filter(R => !R.flip && !R.pair).forEach(R => {
    const l = lab(R.id);
    if (l.per[open] != null && !/–/.test(cardText(R.id))) assert.equal(l.print(l.per[open]), cardText(R.id), R.name);
  });
  assert.match(lab('sheet-marker-deficit').print(-5.77), /^5\.8% deficit$/);
  assert.doesNotMatch(row('sheet-sign-market').querySelector('.lab-res b').textContent, /so far/);
});

test('a cycle counts only its closed years as bull years', () => {
  const closed = Object.keys(sp500AnnualReturns).map(Number).filter(y => y >= marketCycles[open].from && y < calendarTodayY && sp500AnnualReturns[y] >= 0).length;
  assert.equal(lab('bull').per[open], closed);
});

test('the (i) says how many closed cycles each short range rests on', () => {
  const all = detailTexts.join(' ').replace(/<[^>]+>/g, '');
  assert.match(all, /Depth: a range rests[^.]*\. US 10-year Treasury[^;]* on two/);
});

test('a live reading moves Cycle Statistics and AI Insights with its figure', async () => {
  const docs = { capeValue: { kind: 'scalar', value: 33.3, asOf: '2026-10-03' } };
  window.claude = { use: () => Promise.resolve({ doc: path => ({ get: () => docs[path.slice(5)] ? Promise.resolve({ data: docs[path.slice(5)] }) : Promise.reject(new Error('none')) }) }) };
  refreshLiveData();
  for (let i = 0; i < 5; i++) await new Promise(r => setTimeout(r, 0));
  delete window.claude;
  assert.equal(cardText('sheet-metric-valuation'), '33.3×');
  sheetRenderers['sheet-find']();
  assert.equal(row('sheet-metric-valuation').querySelector('.lab-res b').textContent, '33.3×');
  sheetRenderers['sheet-ai-insights']();
  assert.match(document.getElementById('sheet-ai-insights').textContent, /CAPE stands at 33\.3×/);
});

test('Temperature’s Normal is the Season Model’s 1–3% band, its Risk the fence of its own record', () => {
  const l = lab('sheet-metric-temp'), v = l.per[open];
  [l.now, l.norm].forEach(n => { assert.equal(n.lo, 1); assert.equal(n.hi, 3); assert.ok(n.fence > 3); });
  const tier = row('sheet-metric-temp').closest('.lab-item').className.match(/t-(\w+)/)[1];
  assert.equal(tier, v >= 1 && v <= 3 ? 'optimal' : v > l.now.fence || v < l.now.floor ? 'abnormal' : 'borderline');
});

test('Cycle Statistics reads the cycle it shows: its own length, variation and period flow', () => {
  const shown = name => {
    const d = document.createElement('button'); d.setAttribute('data-chart-cycle', name); document.body.appendChild(d); d.click(); d.remove();
    return [...document.querySelectorAll('#chart-home .stat-row:not(.insight-row) b')].map(b => b.textContent);
  };
  const dotCom = marketCycles.find(c => /Dot-Com/.test(c.name)), k = marketCycles.indexOf(dotCom);
  assert.deepEqual(shown(dotCom.name), [lab('length').per[k], lab('regularity').per[k], lab('bleed').per[k]].map(v => yearsWord(v) + ' years'));
  assert.equal(shown(marketCycles[0].name).length, 2);
  assert.equal(shown(marketCycles[open].name)[0], yearsWord(lab('length').per[open]) + ' years');
  assert.match(document.querySelector('#chart-home button.stat-row .stat-side').textContent, /^(Typical|Atypical)$/);
});
