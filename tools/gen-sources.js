#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const ROOT = path.join(__dirname, '..');
const APP = path.join(ROOT, 'index.html');
const OUT = path.join(ROOT, 'sources.html');
const CHECK = process.argv.includes('--check');
const CHROME = process.env.GYN_CHROME
  || (fs.existsSync('/opt/pw-browsers/chromium-1194/chrome-linux/chrome')
      ? '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' : chromium.executablePath());

const ARROW = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M9 7h8v8"/></svg>';

const esc = s => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#x27;');

(async () => {
  const b = await chromium.launch({ executablePath: CHROME });
  const ctx = await b.newContext({ viewport: { width: 900, height: 1000 } });
  const p = await ctx.newPage();
  await p.route('**/*', r => { const u = r.request().url();
    (u.startsWith('file://') || u.startsWith('data:') || u.startsWith('blob:')) ? r.continue() : r.abort(); });
  const errs = [];
  p.on('pageerror', e => errs.push(String(e).slice(0, 140)));
  await p.goto('file://' + APP);
  await p.waitForFunction(() => window.__GYN && document.getElementById('diagnosis'));

  await p.evaluate(() => { const m = document.querySelector('.menu-btn'); if (m) m.click(); });
  await p.waitForSelector('.menu-row[data-sheet="sources"]', { state: 'attached' });
  await p.evaluate(() => {
    const r = document.querySelector('.menu-row[data-sheet="sources"]');
    if (r) r.click();
  });
  await p.waitForFunction(() => { const h = document.getElementById('sources-groups'); return h && h.children.length > 0; }, null, { timeout: 10000 }).catch(() => null);

  const read = await p.evaluate(() => {
    const host = document.getElementById('sources-groups');
    if (!host || !host.children.length) return { error: 'the Sources screen did not build' };
    const groups = [];
    let cur = null;
    for (const el of host.children) {
      if (/menu-section/.test(el.className)) { cur = { name: el.textContent.trim(), items: [] }; groups.push(cur); }
      else if (/menu-card/.test(el.className) && cur) {
        for (const a of el.querySelectorAll('a.menu-row')) {
          const label = a.querySelector('.menu-label');
          cur.items.push({ t: (label ? label.textContent : a.textContent).trim(), u: a.getAttribute('href') });
        }
      }
    }
    const compiled = (document.getElementById('asof-text') || {}).textContent || '';
    return { groups, compiled: compiled.trim() };
  });
  await b.close();

  if (read.error) { console.error(read.error); process.exit(2); }
  if (errs.length) { console.error('page errors while building: ' + errs.join(' | ')); process.exit(2); }

  const other = read.groups.find(g => /^other$/i.test(g.name));
  if (other) {
    console.error('REFUSING to write: the app put ' + other.items.length + ' source(s) in an "Other" group.');
    other.items.forEach(i => console.error('  ' + i.u));
    console.error('A source matched none of the patterns in index.html. Add a pattern there, not a bucket here.');
    process.exit(1);
  }

  const total = read.groups.reduce((n, g) => n + g.items.length, 0);
  if (total < 40) { console.error('only ' + total + ' sources — that is too few, refusing'); process.exit(2); }

  const body = read.groups.filter(g => g.items.length).map(g =>
    '  <div class="menu-section">' + esc(g.name) + '</div>\n' +
    '  <div class="menu-card">\n' +
    g.items.map(i =>
      '    <a class="menu-row" href="' + esc(i.u) + '" target="_blank" rel="noopener">' +
      '<span class="menu-label">' + esc(i.t) + '</span>' + ARROW + '</a>'
    ).join('\n') + '\n  </div>'
  ).join('\n\n');

  const shell = fs.readFileSync(OUT, 'utf8');
  const startAt = shell.indexOf('</p>\n\n', shell.indexOf('class="lede"'));
  const endAt = shell.indexOf('  <footer>');
  if (startAt < 0 || endAt < 0 || endAt <= startAt) {
    console.error('could not find the splice points in sources.html — has its shell changed?');
    process.exit(2);
  }
  const next = shell.slice(0, startAt + 6) + body + '\n' + shell.slice(endAt);

  if (CHECK) {
    if (next === shell) { console.log('sources.html is current (' + total + ' sources)'); process.exit(0); }
    console.error('sources.html is OUT OF DATE — run: npm run sources');
    process.exit(1);
  }
  if (next === shell) { console.log('sources.html already current (' + total + ' sources)'); return; }
  fs.writeFileSync(OUT, next);
  console.log('wrote sources.html — ' + read.groups.length + ' groups, ' + total + ' sources');
  read.groups.forEach(g => console.log('  ' + String(g.items.length).padStart(3) + '  ' + g.name));
})();
