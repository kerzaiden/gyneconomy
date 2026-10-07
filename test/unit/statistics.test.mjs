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

test('Cycle Statistics shows the averages of every closed cycle, and the cycle shown beside them', () => {
  const shown = name => {
    const d = document.createElement('button'); d.setAttribute('data-chart-cycle', name); document.body.appendChild(d); d.click(); d.remove();
    return [...document.querySelectorAll('#chart-home .lab-score-box ~ .stat-row')].map(b => [b.querySelector('b').textContent, (b.querySelector('.stat-side') || {}).textContent]);
  };
  const L = lab('length').per.slice(0, marketCycles.length - 1), m = L.reduce((a, b) => a + b, 0) / L.length, sd = () => Math.sqrt(L.reduce((a, v) => a + (v - m) ** 2, 0) / (L.length - 1));
  const closed = marketCycles.filter(c => !c.ongoing), mean = id => lab(id).per.slice(0, closed.length).reduce((a, b) => a + b, 0) / closed.length;
  const dotCom = marketCycles.find(c => /Dot-Com/.test(c.name)), k = marketCycles.indexOf(dotCom), rows = shown(dotCom.name);
  assert.deepEqual(rows.map(r => r[0]), [yearsWord(mean('length')) + ' years', '±' + yearsWord(sd()) + ' years', yearsWord(mean('bleed')) + ' years']);
  assert.equal(rows[0][1], yearsWord(lab('length').per[k]) + ' yrs');
  assert.deepEqual(shown(marketCycles[open].name).map(r => r[0]), rows.map(r => r[0]));
  assert.match(document.querySelector('#chart-home .stat-note').textContent, /^Averages are based on 18 closed market cycles since 1928\.$/);
  assert.match(document.querySelector('#chart-home .lab-score-box .stat-side').textContent, /^(Normal|Attention|Risk)$/);
});
