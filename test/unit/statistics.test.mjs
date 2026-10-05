import test from 'node:test';
import assert from 'node:assert/strict';
import { window } from './dom.mjs';
import { detailTexts } from '../../src/js/dom.ts';
import { refreshLiveData } from '../../src/js/live.ts';
import { marketCycles, sp500AnnualReturns } from '../../src/js/data.ts';
import { calendarTodayY } from '../../src/js/refresh-season.ts';
import { ROSTER } from '../../src/js/roster.ts';
import { sheetRenderers } from '../../src/js/render-core.ts';
import { labs } from '../../src/js/cycle-analysis.ts';

const open = marketCycles.findIndex(c => c.ongoing);
const lab = id => labs().find(l => l.id === id);
const cardText = id => document.querySelector('#today-analysis .cat-item[data-open="' + id + '"] .ci-value').firstChild.nodeValue.trim().replace('≈', '');
const row = id => document.querySelector('#chart-home .lab-row[data-open="' + id + '"]');

test('the open cycle’s results are its cards’ figures, printed as the cards print them', () => {
  ROSTER.filter(R => !R.flip && !R.pair).forEach(R => {
    const l = lab(R.id);
    if (l.per[open] != null && !/–/.test(cardText(R.id))) assert.equal(l.print(l.per[open]), cardText(R.id), R.name);
  });
  assert.match(lab('sheet-marker-deficit').print(-5.77), /^5\.8% deficit$/);
  assert.match(row('sheet-sign-market').querySelector('.lab-res b').textContent, / so far$/);
});

test('a cycle counts only its closed years as bull years', () => {
  const closed = Object.keys(sp500AnnualReturns).map(Number).filter(y => y >= marketCycles[open].from && y < calendarTodayY && sp500AnnualReturns[y] >= 0).length;
  assert.equal(lab('bull').per[open], closed);
});

test('the (i) says how many closed cycles each short range rests on', () => {
  const all = detailTexts.join(' ').replace(/<[^>]+>/g, '');
  assert.match(all, /Depth: a range rests[^.]*\. Pressure[^;]* on two/);
});

test('a live reading moves Cycle Statistics and AI Insights with its card', async () => {
  const docs = { capeValue: { kind: 'scalar', value: 33.3, asOf: '2026-10-03' } };
  window.claude = { use: () => Promise.resolve({ doc: path => ({ get: () => docs[path.slice(5)] ? Promise.resolve({ data: docs[path.slice(5)] }) : Promise.reject(new Error('none')) }) }) };
  refreshLiveData();
  for (let i = 0; i < 5; i++) await new Promise(r => setTimeout(r, 0));
  delete window.claude;
  assert.equal(cardText('sheet-metric-valuation'), '33.3×');
  assert.equal(row('sheet-metric-valuation').querySelector('.lab-res b').textContent, '33.3×');
  sheetRenderers['sheet-ai-insights']();
  assert.match(document.getElementById('sheet-ai-insights').textContent, /CAPE stands at 33\.3×/);
});
