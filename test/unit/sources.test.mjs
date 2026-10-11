import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import { window } from './dom.mjs';
import { categoriesShown, ROSTER } from '../../src/js/roster.ts';

const doc = window.document;
const SRC = new URL('../../src/js/', import.meta.url);

function citedInSource() {
  const urls = new Set();
  for (const f of fs.readdirSync(SRC)) {
    if (!f.endsWith('.ts')) continue;
    for (const m of fs.readFileSync(new URL(f, SRC), 'utf8').matchAll(/\bu: ?"(https?:\/\/[^"]+)"/g)) urls.add(m[1]);
  }
  return urls;
}
function sourcesScreen() {
  doc.getElementById('sources-open').click();
  const groups = [];
  for (const el of doc.getElementById('sources-groups').children) {
    if (el.classList.contains('menu-section')) groups.push({ title: el.textContent, urls: [] });
    else for (const a of el.querySelectorAll('a.menu-row')) groups[groups.length - 1].urls.push(a.getAttribute('href'));
  }
  return groups;
}

test('every source the code cites is on the Sources screen, once', () => {
  const groups = sourcesScreen(), shown = groups.flatMap(g => g.urls);
  const missing = [...citedInSource()].filter(u => !shown.includes(u));
  assert.deepEqual(missing, []);
  assert.equal(new Set(shown).size, shown.length, 'a source is listed twice');
  assert.ok(!groups.some(g => /^other$/i.test(g.title)), 'a source fell into Other');
});

test('the Sources screen is grouped by element and subcategory, in the order Analysis files them', () => {
  const want = [];
  for (const c of categoriesShown()) for (const R of ROSTER.filter(R => R.cat === c.key)) {
    const t = c.title + ' · ' + R.sub;
    if (want[want.length - 1] !== t) want.push(t);
  }
  const got = sourcesScreen().map(g => g.title).filter(t => t.includes(' · '));
  assert.deepEqual(got, want);
});

test('How to Read places every reading where the roster declares it', () => {
  const lines = [...doc.querySelectorAll('#howto-places p')].map(p => p.textContent);
  for (const c of categoriesShown()) {
    const line = lines.find(l => l.startsWith(c.title + ':'));
    assert.ok(line, 'no line for ' + c.title);
    for (const R of ROSTER.filter(R => R.cat === c.key)) {
      assert.ok(line.includes(R.sub + ' holds'), c.title + ' lacks ' + R.sub);
      assert.ok(line.includes(R.name + ' ('), c.title + ' lacks ' + R.name);
    }
  }
  const prose = doc.getElementById('sheet-howto').textContent;
  for (const stale of ['Feeling', 'fear curve', 'Content tab', 'under Debt'])
    assert.ok(!prose.includes(stale), 'How to Read still says ' + stale);
});
