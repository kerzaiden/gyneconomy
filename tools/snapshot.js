const { chromium } = require('playwright');
const fs = require('fs');

const CHROME = process.env.GYN_CHROME || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';

const CATS = ['sheet-cat-weather', 'sheet-cat-circulation', 'sheet-cat-mood', 'sheet-cat-energy'];
const SHEETS = ['sheet-metric-temp','sheet-metric-gdp','sheet-sign-activity',
  'sheet-metric-valuation','sheet-metric-households','sheet-sign-volume','sheet-sign-pulse',
  'sheet-sign-horizon','sheet-sign-hormones','sheet-sign-desire','sheet-sign-sentiment','sheet-sign-pressure',
  'sheet-marker-deficit', 'sheet-metric-buffett', 'sheet-metric-debt', 'sheet-metric-interest',
  'sheet-sign-productivity-growth', 'sheet-sign-industrial-output'];
const TABS = ['cycle','analysis','search','portfolio'];

const NORMALISERS = [
  [/\b(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s+/g, ''],
  [/\b(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{1,2},?\s+\d{4}\b/g, '<DATE>'],
  [/\bToday,\s*[^<·]{0,24}/g, 'Today,<DATE>'],
  [/id="[^"]*-\d{4,}"/g, 'id="<GEN>"'],
  [/url\(#[^)]*\d{4,}\)/g, 'url(#<GEN>)'],
  [/\s+/g, ' ']
];
const norm = s => NORMALISERS.reduce((acc, [re, to]) => acc.replace(re, to), s || '').trim();

const click = (p, sel) => p.evaluate(s => {
  const e = [...document.querySelectorAll(s)].filter(x => x.offsetParent !== null)[0];
  if (!e) return false; e.scrollIntoView(); e.click(); return true;
}, sel);

const notes = (p, where) => p.evaluate(where => {
  const body = document.getElementById('detail-modal-body'), shut = document.getElementById('detail-modal-close');
  if (!body || !shut) return '';
  const seen = new Set(), out = [];
  const scope = where || '#metric-page, .metric-sheet:not([hidden])';
  document.querySelectorAll('#metric-page .bh-more, .metric-sheet:not([hidden]) .bh-more').forEach(m => {
    m.click();
    const head = m.closest('.band-head'), opt = head && head.querySelector('.bh-opt');
    if (opt) { const i = opt.getAttribute('data-detail-idx'); if (!seen.has(i)) { seen.add(i); opt.click(); out.push(body.innerHTML); shut.click(); } }
    if (m.getAttribute('aria-expanded') === 'true') m.click();
  });
  document.querySelectorAll(scope.split(', ').map(x => x + ' [data-detail-idx]').join(', ')).forEach(b => {
    const i = b.getAttribute('data-detail-idx');
    if (seen.has(i)) return; seen.add(i);
    b.click(); out.push(body.innerHTML); shut.click();
  });
  return out.join('\n----\n');
}, where);

const grab = (p, label) => p.evaluate(() => {
  const pick = sel => [...document.querySelectorAll(sel)].map(e => e.outerHTML).join('\n');
  return {
    body: document.body.innerHTML.length,
    main: pick('#metric-page, #cycle-view, #today-analysis, .tab-panel:not([hidden])'),
    values: [...document.querySelectorAll('[id^="subj-value-"], .trendpill, .hist-read')]
              .map(e => e.id + '|' + e.textContent).join('\n')
  };
}).then(r => ({ label, body: r.body, main: r.main, values: r.values }));

async function capture(file, out) {
  const b = await chromium.launch({ executablePath: CHROME });
  const snaps = [];
  const errs = [];
  for (const w of [414, 1280]) {
    const ctx = await b.newContext({ viewport: { width: w, height: 1000 } });
    const p = await ctx.newPage();
    await p.route('**/*', r => {
      const u = r.request().url();
      (u.startsWith('file://') || u.startsWith('data:') || u.startsWith('blob:')) ? r.continue() : r.abort();
    });
    p.on('pageerror', e => errs.push(w + ': ' + String(e).slice(0, 140)));
    await p.goto('file://' + file); await p.waitForTimeout(1500);
    snaps.push(await grab(p, w + '/home'));
    for (const t of TABS) {
      await p.evaluate(x => { const el = document.querySelector('.tab-btn[data-tab="' + x + '"]'); if (el) el.click(); }, t);
      await p.waitForTimeout(500);
      const g = await grab(p, w + '/tab:' + t);
      g.notes = await notes(p, '.tab-panel:not([hidden])');
      snaps.push(g);
      if (t === 'analysis' && await click(p, '#cycle-data')) {
        await p.waitForTimeout(400);
        const d = await grab(p, w + '/tab:analysis+data');
        d.notes = await notes(p, '.tab-panel:not([hidden])');
        snaps.push(d);
        await click(p, '#cycle-data'); await p.waitForTimeout(200);
      }
    }
    for (const entry of SHEETS) {
      const [sheet, via] = entry.split('>');
      await p.goto('file://' + file); await p.waitForTimeout(1100);
      let opened = false;
      for (const c of CATS) {
        if (!await click(p, '[data-open="' + c + '"]')) continue;
        await p.waitForTimeout(380);
        if (await click(p, '.cat-item[data-open="' + sheet + '"]')) { opened = true; break; }
        await p.goto('file://' + file); await p.waitForTimeout(900);
      }
      if (opened && via) {
        await p.waitForTimeout(600);
        opened = await click(p, '[data-open="' + via + '"]');
      }
      if (opened) {
        await p.waitForTimeout(800);
        const g = await grab(p, w + '/page:' + (via || sheet));
        g.notes = await notes(p);
        snaps.push(g);
      }
      else snaps.push({ label: w + '/page:' + (via || sheet), body: 0, main: 'NOT REACHED', values: '', notes: '' });
    }
    await ctx.close();
  }
  await b.close();
  const clean = snaps.map(s => ({ label: s.label, body: s.body, main: norm(s.main), values: norm(s.values), notes: norm(s.notes || '') }));
  fs.writeFileSync(out, JSON.stringify({ file, errs, snaps: clean }, null, 1));
  console.log('captured ' + clean.length + ' states -> ' + out + (errs.length ? '  PAGE ERRORS: ' + errs.length : '  no page errors'));
}

function diff(af, bf) {
  const a = JSON.parse(fs.readFileSync(af)), b = JSON.parse(fs.readFileSync(bf));
  let bad = 0;
  const byLabel = new Map(b.snaps.map(s => [s.label, s]));
  b.snaps.filter(s => !a.snaps.some(x => x.label === s.label)).forEach(s => console.log('  NEW ' + s.label));
  for (const x of a.snaps) {
    const y = byLabel.get(x.label);
    if (!y) { console.log('  GONE ' + x.label); bad++; continue; }
    for (const k of ['main', 'values', 'notes']) {
      if ((x[k] || '') !== (y[k] || '')) {
        bad++;
        const at = [...(x[k] || '')].findIndex((c, j) => c !== (y[k] || '')[j]);
        console.log('  DIFF ' + x.label + ' .' + k + ' at char ' + at);
        console.log('    a: …' + (x[k] || '').slice(Math.max(0, at - 60), at + 90));
        console.log('    b: …' + (y[k] || '').slice(Math.max(0, at - 60), at + 90));
      }
    }
  }
  console.log(bad ? '\n' + bad + ' difference(s)' : '\n' + a.snaps.length + ' states identical');
  process.exit(bad ? 1 : 0);
}

const args = process.argv.slice(2);
if (args.includes('--diff')) diff(args[0], args[1]);
else capture(args[0], args[1] || 'snap.json');
