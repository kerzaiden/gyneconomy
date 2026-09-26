#!/usr/bin/env node
/* Gyneconomy test suite. Usage:
     node gyn-test.js <file.html> [--full] [--bless]
   --full   also runs the slow class-coverage walk (2-4 min)
   --bless  rewrites baseline.json from this run instead of asserting against it
   Exit code 0 = every check passed. Anything else = a failure was printed. */
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');

const FILE = process.argv[2];
const FULL = process.argv.includes('--full');
const BLESS = process.argv.includes('--bless');
const BASE = path.join(__dirname, 'baseline.json');
/* Chromium: GYN_CHROME wins, then the cloud sandbox's preinstalled build, then whatever
   Playwright resolves on this machine (a local `npm i` puts one there). */
const CHROME = (function () {
  if (process.env.GYN_CHROME) return process.env.GYN_CHROME;
  const sandbox = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
  if (fs.existsSync(sandbox)) return sandbox;
  try { return chromium.executablePath(); } catch (e) { return undefined; }
})();

if (!FILE) { console.error('usage: node gyn-test.js <file.html> [--full] [--bless]'); process.exit(2); }

/* `npm i` installs Playwright but NOT its browser, so a fresh clone lands here. Say the fix
   rather than failing inside launch() with a stack trace. */
if (!CHROME || !fs.existsSync(CHROME)) {
  console.error('Chromium not found' + (CHROME ? ' at ' + CHROME : '') + '.');
  console.error('Run:  npm run setup      (i.e. playwright install chromium)');
  console.error('Or point GYN_CHROME at an existing Chromium binary.');
  process.exit(2);
}

const CATS = ['sheet-cat-weather','sheet-cat-circulation','sheet-cat-mood','sheet-cat-energy'];
const PAGES = [
  ['sheet-metric-temp','sheet-metric-temp','Temperature'],
  ['sheet-metric-gdp','sheet-metric-gdp','Growth'],
  ['sheet-sign-activity','sheet-sign-activity','Activity'],
  ['sheet-metric-power','sheet-metric-power','Power'],
  ['sheet-metric-valuation','sheet-metric-valuation','Valuations'],
  ['sheet-metric-households','sheet-metric-households','Households'],
  ['sheet-sign-volume','volume-range','Volume'],
  ['sheet-sign-pulse','pulse-range','Pulse'],
  ['sheet-sign-horizon','hzn-range','Horizon'],
  ['sheet-sign-yield','ylm-range','Pressure'],
  ['sheet-sign-desire','desire-range','Desire'],
];
/* Values CLAUDE-CODE.md states as live. A change here must be a deliberate edit of both. */
const TOKENS = {
  '--pad':'10px', '--gap':'10px', '--gap-top':'15px', '--radius':'16px', '--radius-inner':'13px',
};
const SRC_MUST = [
  ['COL_FILL', /var COL_FILL = 0\.68;/],
  ['AXIS',     /var AXIS = \{ L:34, R:6, T:14 \};/],
  ['no .vh-line', /`\.vh-line` is gone/],
];

const results = [];
const ok  = (n, d) => results.push([true,  n, d || '']);
const bad = (n, d) => results.push([false, n, d || '']);

const click = (p, sel) => p.evaluate(s => {
  const e = [...document.querySelectorAll(s)].filter(x => x.offsetParent !== null)[0];
  if (!e) return false; e.scrollIntoView(); e.click(); return true;
}, sel);

async function openPage(p, url, sheet) {
  await p.goto('file://' + url); await p.waitForTimeout(1200);
  for (const c of CATS) {
    if (!await click(p, '[data-open="' + c + '"]')) continue;
    await p.waitForTimeout(380);
    if (await click(p, '.cat-item[data-open="' + sheet + '"]')) { await p.waitForTimeout(800); return true; }
    await p.goto('file://' + url); await p.waitForTimeout(1000);
  }
  return false;
}

(async () => {
  const url = path.resolve(FILE);
  const src = fs.readFileSync(url, 'utf8');

  // ---- 1. static checks, no browser needed
  /* Every inline <script>, each on its own. A GREEDY match across the whole file would run from
     the first <script> to the LAST </script> and swallow the `</script><script>` boundary between
     them, failing with "Unexpected token '<'" on a file that is perfectly valid — which is exactly
     what happened when Version 530 added the service-worker registration as a second block. */
  const blocks = [...src.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(x => x[1]);
  if (!blocks.length) bad('parses', 'no <script> block found');
  else {
    const fails = [];
    blocks.forEach((b, i) => { try { new Function(b); } catch (e) { fails.push('#' + i + ': ' + e.message); } });
    fails.length ? bad('parses', fails.join(' | '))
                 : ok('parses', blocks.length + ' script block' + (blocks.length === 1 ? '' : 's'));
  }

  const leak = (src.match(/kerzaiden@/g) || []).length;
  leak === 0 ? ok('no email in markup') : bad('no email in markup', leak + ' occurrence(s) — DO NOT PUBLISH');

  for (const [name, re] of SRC_MUST)
    re.test(src) ? ok('source: ' + name) : bad('source: ' + name, 'not found');

  // ---- 2. browser checks
  const b = await chromium.launch({ executablePath: CHROME });
  const base = (!BLESS && fs.existsSync(BASE)) ? JSON.parse(fs.readFileSync(BASE, 'utf8')) : null;
  const fresh = {};

  // 2a. six viewport/scheme combos: zero page errors, stylesheet intact
  for (const w of [390, 414, 1280]) for (const scheme of ['light', 'dark']) {
    const p = await b.newPage({ viewport: { width: w, height: 900 }, colorScheme: scheme });
    const errs = []; p.on('pageerror', e => errs.push(String(e)));
    await p.goto('file://' + url); await p.waitForTimeout(1400);
    const css = await p.evaluate(() => {
      let total = 0, last = null;
      for (const sh of document.styleSheets) { let r; try { r = sh.cssRules; } catch (e) { continue; }
        if (!r) continue; for (const x of r) { total++; if (x.selectorText) last = x.selectorText; } }
      return { total, last };
    });
    const tag = w + 'px/' + scheme;
    errs.length ? bad('no page errors ' + tag, errs.join(' | ')) : ok('no page errors ' + tag);
    if (w === 390 && scheme === 'light') {
      fresh.cssRules = css.total; fresh.cssLast = css.last;
      css.last === 'a:hover' ? ok('stylesheet intact', css.total + ' rules')
        : bad('stylesheet intact', 'last selector is ' + css.last + ' — an unclosed brace killed the rest');
      if (base && base.cssRules !== css.total)
        bad('CSS rule count', 'baseline ' + base.cssRules + ', now ' + css.total + ' — bless if intended');
      else if (base) ok('CSS rule count', css.total);
      // design tokens
      const tok = await p.evaluate(ts => { const cs = getComputedStyle(document.documentElement);
        const o = {}; for (const t of ts) o[t] = cs.getPropertyValue(t).trim(); return o; }, Object.keys(TOKENS));
      for (const [k, v] of Object.entries(TOKENS))
        tok[k] === v ? ok('token ' + k, v) : bad('token ' + k, 'expected ' + v + ', got ' + (tok[k] || 'unset'));
    }
    await p.close();
  }

  // 2b. every history page wears the component
  const p = await b.newPage({ viewport: { width: 414, height: 1000 } });
  const perr = []; p.on('pageerror', e => perr.push(String(e)));
  for (const [sheet, hid, label] of PAGES) {
    if (!await openPage(p, url, sheet)) { bad('page ' + label, 'no door'); continue; }
    const r = await p.evaluate(h => {
      const mp = document.getElementById('metric-page');
      const band = mp.querySelector('.page-chart, .spread-history');
      const svg = band && [...band.querySelectorAll('svg')]
        .sort((a, b) => b.getBoundingClientRect().height - a.getBoundingClientRect().height)[0];
      const q = s => svg ? svg.querySelectorAll(s).length : 0;
      const btn = document.querySelector('.bh-more[data-head-more="' + h + '"]');
      return {
        head: !!mp.querySelector('.band-head'), ctl: !!mp.querySelector('.hist-bar'),
        trend: !!mp.querySelector('.trendpill'), reading: !!mp.querySelector('.reading-box'),
        headBtn: !!btn, title: btn ? btn.closest('.band-head').querySelector('.bh-title').textContent : '',
        ctlOutside: (() => { const bar = mp.querySelector('.hist-bar');
          return !!bar && !bar.closest('.page-chart, .spread-history'); })(),
        frame: q('.bt-frame'), grid: q('.bt-grid'), vgrid: q('.bt-vgrid'), yl: q('.bt-yl'), xl: q('.bt-xl'),
      };
    }, hid);
    const miss = [];
    if (!r.head) miss.push('head'); if (!r.ctl) miss.push('control'); if (!r.trend) miss.push('trend');
    if (!r.headBtn) miss.push('⋯'); if (!r.ctlOutside) miss.push('control outside the band');
    if (!r.frame) miss.push('frame'); if (!r.grid) miss.push('gridlines');
    if (!r.vgrid) miss.push('vertical rules'); if (!r.yl) miss.push('y labels'); if (!r.xl) miss.push('x labels');
    miss.length ? bad('page ' + label, 'missing ' + miss.join(', ')) : ok('page ' + label, r.title);

    // the ⋯ opens a real note
    if (r.headBtn) {
      await p.evaluate(h => document.querySelector('.bh-more[data-head-more="' + h + '"]').click(), hid);
      await p.waitForTimeout(280);
      const note = await p.evaluate(h => {
        const wrap = document.querySelector('.bh-more[data-head-more="' + h + '"]').closest('.bh-more-wrap');
        const optn = wrap.querySelector('.bh-opt'); if (!optn) return { rows: 0 };
        optn.click(); return { rows: wrap.querySelectorAll('.bh-opt').length };
      }, hid);
      await p.waitForTimeout(300);
      const body = await p.evaluate(() => {
        const bd = document.getElementById('detail-modal-body');
        return { shown: document.getElementById('detail-backdrop').classList.contains('show'),
                 len: bd.innerText.trim().length };
      });
      (note.rows && body.shown && body.len > 100)
        ? ok('note ' + label, body.len + ' chars')
        : bad('note ' + label, 'menu rows ' + note.rows + ', modal ' + body.shown + ', ' + body.len + ' chars');
      await p.keyboard.press('Escape'); await p.waitForTimeout(150);
    }
  }
  perr.length ? bad('no errors while navigating', perr.join(' | ')) : ok('no errors while navigating');

  // 2c. the cycle picker says Today, capital T
  await p.goto('file://' + url); await p.waitForTimeout(1300);
  await p.evaluate(() => document.querySelector('.tab-btn[data-tab="analysis"]').click());
  await p.waitForTimeout(600);
  const spans = await p.evaluate(() => [...document.querySelectorAll('.era-years')].map(e => e.textContent.trim()));
  spans.some(s => /–Today/.test(s)) ? ok('cycle span says Today') : bad('cycle span says Today', spans.join(' | '));
  await p.close();

  // ---- 2d. the live-data cache (Version 528)
  // The claim of the cache layer is that a cached answer lands BEFORE any derived value is computed, so a
  // seeded figure moves the readings that are computed from it, not just the number that is printed. Both
  // shapes are proved — an object doc through Fear & Greed's mood class, a series doc through the 10Y/3M
  // pair — and every malformed cache must fall back to the literals in silence.
  const readLive = () => {
    const fg  = document.getElementById('subj-value-sentiment');
    const yld = document.getElementById('subj-value-yield');
    const ink = document.querySelector('.fg-w');
    return {
      fgNum: fg ? fg.textContent.trim().split('%')[0] : null,
      fgInk: ink ? ink.className : null,
      yld:   yld ? yld.textContent.trim().replace(/\s+/g, ' ') : null
    };
  };
  const INVERTED = [
    {m:'1M',y:5.60},{m:'2M',y:5.58},{m:'3M',y:5.55},{m:'4M',y:5.50},{m:'6M',y:5.40},
    {m:'1Y',y:5.10},{m:'2Y',y:4.60},{m:'3Y',y:4.40},{m:'5Y',y:4.20},{m:'7Y',y:4.10},
    {m:'10Y',y:4.05},{m:'20Y',y:4.30},{m:'30Y',y:4.25}
  ];
  const loadWith = async (seed) => {
    const c = await b.newContext({ viewport: { width: 414, height: 1000 } });
    const g = await c.newPage();
    const errs = [];
    g.on('pageerror', e => errs.push(String(e).slice(0, 140)));
    if (seed !== null) await g.addInitScript(x => { try { localStorage.setItem('gyn.live', x); } catch (e) {} }, seed);
    await g.goto('file://' + url); await g.waitForTimeout(1300);
    const r = await g.evaluate(readLive);
    await c.close();
    return { r, errs };
  };

  const plain = await loadWith(null);
  (plain.r.fgNum && plain.r.yld && !plain.errs.length)
    ? ok('live cache absent', plain.r.fgNum + '% / ' + plain.r.yld)
    : bad('live cache absent', JSON.stringify(plain.r) + ' ' + plain.errs.join(' | '));

  const objSeed = await loadWith(JSON.stringify({
    fearGreed: { kind: 'object', value: 82, label: 'Greed', asOf: 'x', weekAgo: 79, monthAgo: 71 }
  }));
  (objSeed.r.fgNum === '82' && objSeed.r.fgInk && objSeed.r.fgInk !== plain.r.fgInk && !objSeed.errs.length)
    ? ok('live cache object doc', '36 ' + plain.r.fgInk + '  ->  82 ' + objSeed.r.fgInk)
    : bad('live cache object doc', JSON.stringify(objSeed.r) + ' was ' + plain.r.fgInk + ' ' + objSeed.errs.join(' | '));

  const serSeed = await loadWith(JSON.stringify({ yieldCurve: { kind: 'series', rows: INVERTED } }));
  (serSeed.r.yld && serSeed.r.yld !== plain.r.yld && !serSeed.errs.length)
    ? ok('live cache series doc', plain.r.yld + '  ->  ' + serSeed.r.yld)
    : bad('live cache series doc', JSON.stringify(serSeed.r) + ' was ' + plain.r.yld + ' ' + serSeed.errs.join(' | '));

  for (const [label, seed] of [
    ['garbage',      'this is not json'],
    ['empty',        '{}'],
    ['shapeless',    '{"fearGreed":{"kind":"object"}}'],
    ['null doc',     '{"fearGreed":null}'],
    ['wrong kind',   '{"fearGreed":{"kind":"series","rows":[]}}']
  ]) {
    const g = await loadWith(seed);
    (g.r.fgNum === plain.r.fgNum && g.r.yld === plain.r.yld && !g.errs.length)
      ? ok('live cache falls back: ' + label)
      : bad('live cache falls back: ' + label, JSON.stringify(g.r) + ' ' + g.errs.join(' | '));
  }

  // ---- 2e. the repaint layer (Version 533)
  // Live data arriving MID-SESSION must move the derived readings, not only the printed numbers,
  // and must refuse anything malformed rather than paint nonsense. applyLive is a test seam.
  {
    const c = await b.newContext({ viewport: { width: 414, height: 1000 } });
    const g = await c.newPage();
    const perr = [];
    g.on('pageerror', e => perr.push(String(e).slice(0, 140)));
    await g.goto('file://' + url); await g.waitForTimeout(1400);

    const read = () => g.evaluate(() => {
      const t = s => { const e = document.querySelector(s); return e ? e.textContent.trim().replace(/\s+/g, ' ') : null; };
      const k = s => { const e = document.querySelector(s); return e ? e.className : null; };
      return { sentiment: t('#subj-value-sentiment'), mood: t('.fg-w'), moodClass: k('.fg-w'),
               yield: t('#subj-value-yield'), valuation: t('#subj-value-valuation') };
    });

    const seam = await g.evaluate(() => !!(window.__GYN && window.__GYN.applyLive));
    seam ? ok('repaint seam present') : bad('repaint seam present', 'window.__GYN.applyLive missing');

    if (seam) {
      const before = await read();
      const rv = await g.evaluate(() => {
        const G = window.__GYN;
        return {
          fg: G.applyLive('fearGreed', { value: 82, label: 'Greed', asOf: 'x', weekAgo: 79, monthAgo: 71 }),
          yc: G.applyLive('yieldCurve', [{m:'3M',y:5.55},{m:'2Y',y:4.60},{m:'10Y',y:4.05}]),
          nul: G.applyLive('fearGreed', null),
          bad: G.applyLive('fearGreed', { nope: 1 }),
          unk: G.applyLive('notADocument', { a: 1 })
        };
      });
      await g.waitForTimeout(250);
      const after = await read();

      (rv.fg && /^82/.test(after.sentiment || '') && before.sentiment !== after.sentiment)
        ? ok('repaint fearGreed figure', (before.sentiment || '').slice(0, 12) + ' -> ' + (after.sentiment || '').slice(0, 12))
        : bad('repaint fearGreed figure', JSON.stringify(after.sentiment));

      // the DERIVED class is the real claim: a number can be printed, a verdict must be recomputed
      (after.moodClass && after.moodClass !== before.moodClass && after.mood === 'Greed')
        ? ok('repaint derived mood', before.moodClass + ' -> ' + after.moodClass)
        : bad('repaint derived mood', before.moodClass + ' -> ' + after.moodClass + ' / ' + after.mood);

      (rv.yc && /4\.05\/5\.55/.test(after.yield || ''))
        ? ok('repaint yieldCurve pair', (before.yield || '').slice(0, 12) + ' -> ' + (after.yield || '').slice(0, 12))
        : bad('repaint yieldCurve pair', JSON.stringify(after.yield));

      (rv.nul === false && rv.bad === false && rv.unk === false)
        ? ok('repaint refuses bad input', 'null, wrong shape, unknown doc')
        : bad('repaint refuses bad input', JSON.stringify(rv));

      perr.length ? bad('no errors while repainting', perr.join(' | ')) : ok('no errors while repainting');
    }
    await c.close();
  }

  // ---- 3. the slow one
  if (FULL) {
    const q = await b.newPage({ viewport: { width: 414, height: 1000 } });
    const seen = new Set();
    const sweep = async () => { const cs = await q.evaluate(() =>
      [...document.querySelectorAll('*')].flatMap(e => [...e.classList])); cs.forEach(c => seen.add(c)); };
    for (const w of [390, 1280]) {
      await q.setViewportSize({ width: w, height: 1000 });
      await q.goto('file://' + url); await q.waitForTimeout(1400); await sweep();
      for (const t of ['cycle','analysis','portfolio','content']) {
        await q.evaluate(x => { const b = document.querySelector('.tab-btn[data-tab="'+x+'"]'); if (b) b.click(); }, t);
        await q.waitForTimeout(450); await sweep();
      }
      for (const [sheet] of PAGES) { if (await openPage(q, url, sheet)) await sweep(); }
    }
    fresh.classes = [...seen].sort();
    if (base && base.classes) {
      const lost = base.classes.filter(c => !seen.has(c));
      lost.length ? bad('class coverage', 'lost: ' + lost.join(', ')) : ok('class coverage', seen.size + ' classes');
    } else ok('class coverage', seen.size + ' classes (no baseline)');
    await q.close();
  }

  await b.close();

  if (BLESS) { fs.writeFileSync(BASE, JSON.stringify(fresh, null, 1)); console.log('baseline written to ' + BASE); }

  const fail = results.filter(r => !r[0]);
  const w = Math.max(...results.map(r => r[1].length));
  for (const [good, name, detail] of results)
    console.log((good ? '  ok   ' : '  FAIL ') + name.padEnd(w + 2) + detail);
  console.log('\n' + (results.length - fail.length) + '/' + results.length + ' passed' +
              (FULL ? '' : '   (run with --full for class coverage)'));
  process.exit(fail.length ? 1 : 0);
})();
