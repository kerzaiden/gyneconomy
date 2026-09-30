#!/usr/bin/env node
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');

const FILE = process.argv[2];
const FULL = process.argv.includes('--full');
const BLESS = process.argv.includes('--bless');
const BASE = path.join(__dirname, 'baseline.json');
const CHROME = (function () {
  if (process.env.GYN_CHROME) return process.env.GYN_CHROME;
  const sandbox = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
  if (fs.existsSync(sandbox)) return sandbox;
  try { return chromium.executablePath(); } catch (e) { return undefined; }
})();

if (!FILE) { console.error('usage: node gyn-test.js <file.html> [--full] [--bless]'); process.exit(2); }

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
  ['sheet-sign-hormones','hormones-range','Hormones'],
  ['sheet-sign-pressure','pressure-range','Pressure'],
  ['sheet-sign-desire','desire-range','Desire'],
];
const TOKENS = {
  '--pad':'10px', '--gap':'10px', '--gap-top':'20px', '--radius':'16px', '--radius-inner':'13px',
};
const SRC_MUST = [
  ['COL_FILL', /var COL_FILL = 0\.68;/],
  ['AXIS',     /var AXIS = \{ L:37, R:6, T:10, LEG:20, RAIL:5, FOOT:8, READ:61 \};/],
  ['no .vh-line', /^(?![\s\S]*\.vh-line\b)/],
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

  const blocks = [...src.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(x => x[1]);
  if (!blocks.length) bad('parses', 'no <script> block found');
  else {
    const fails = [];
    blocks.forEach((b, i) => { try { new Function(b); } catch (e) { fails.push('#' + i + ': ' + e.message); } });
    fails.length ? bad('parses', fails.join(' | '))
                 : ok('parses', blocks.length + ' script block' + (blocks.length === 1 ? '' : 's'));
  }

  const leak = (src.match(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g) || []);
  leak.length === 0 ? ok('no email in markup')
                    : bad('no email in markup', leak.length + ' address(es) — DO NOT PUBLISH');

  const SRC_DIR = path.join(__dirname, '..', 'src');
  const MANIFEST = path.join(SRC_DIR, 'manifest.json');
  if (!fs.existsSync(MANIFEST)) {
    SRC_MUST.forEach(([name]) => ok('source: ' + name, 'skipped — no src/ here'));
  } else {
    const source = JSON.parse(fs.readFileSync(MANIFEST, 'utf8'))
      .map(n => fs.readFileSync(path.join(SRC_DIR, n), 'utf8')).join('\n');
    for (const [name, re] of SRC_MUST)
      re.test(source) ? ok('source: ' + name)
        : bad('source: ' + name, 'src/ no longer matches ' + re.source + ' \u2014 update the pin or the source; '
                                 + 'until this passes CI skips deploy and the SITE does not update');
  }

  const b = await chromium.launch({ executablePath: CHROME });
  const base = (!BLESS && fs.existsSync(BASE)) ? JSON.parse(fs.readFileSync(BASE, 'utf8')) : null;
  const fresh = {};

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
      fresh.cssLast = css.last;
      css.last === 'a:hover' ? ok('stylesheet intact', css.total + ' rules')
        : bad('stylesheet intact', 'last selector is ' + css.last + ' — an unclosed brace killed the rest');
      const tok = await p.evaluate(ts => { const cs = getComputedStyle(document.documentElement);
        const o = {}; for (const t of ts) o[t] = cs.getPropertyValue(t).trim(); return o; }, Object.keys(TOKENS));
      for (const [k, v] of Object.entries(TOKENS))
        tok[k] === v ? ok('token ' + k, v) : bad('token ' + k, 'expected ' + v + ', got ' + (tok[k] || 'unset'));
    }
    await p.close();
  }

  const p = await b.newPage({ viewport: { width: 414, height: 1000 } });
  const perr = []; p.on('pageerror', e => perr.push(String(e)));
  for (const [sheet, hid, label] of PAGES) {
    if (!await openPage(p, url, sheet)) { bad('page ' + label, 'no door'); continue; }
    const r = await p.evaluate(h => {
      const mp = document.getElementById('metric-page');
      const hb = document.querySelector('.bh-more[data-head-more="' + h + '"]');
      const band = (hb && hb.closest('.page-chart, .spread-history')) || mp.querySelector('.page-chart, .spread-history');
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
  {
    const gp = await b.newPage({ viewport: { width: 414, height: 1000 } });
    const gerr = []; gp.on('pageerror', e => gerr.push(String(e).slice(0, 140)));
    await gp.goto('file://' + url); await gp.waitForTimeout(1400);
    if (await openPage(gp, url, 'sheet-sign-horizon')) {
      await gp.evaluate(() => document.querySelector('.bh-more[data-head-more="hzn-range"]').click());
      await gp.waitForTimeout(280);
      const root = await gp.evaluate(() => [...document.querySelectorAll('.bh-grp-row')].map(n => n.getAttribute('data-head-grp')));
      let drilled = null, back = null;
      if (root.length) {
        await gp.hover('[data-head-grp="' + root[0] + '"]'); await gp.waitForTimeout(250);
        const onHover = await gp.evaluate(() => document.querySelectorAll('.bh-grp-row').length);
        await gp.click('[data-head-grp="' + root[0] + '"]'); await gp.waitForTimeout(250);
        drilled = await gp.evaluate(() => ({ picks: document.querySelectorAll('.bh-pick').length,
                                             back: !!document.querySelector('.bh-back') }));
        await gp.click('.bh-back'); await gp.waitForTimeout(350);
        back = await gp.evaluate(() => ({ groups: document.querySelectorAll('.bh-grp-row').length,
                                          picks: document.querySelectorAll('.bh-pick').length }));
        (onHover === root.length) ? ok('head menu ignores hover', root.length + ' groups')
          : bad('head menu ignores hover', 'hover changed the menu: ' + root.length + ' -> ' + onHover);
      }
      (root.length >= 1 && drilled && drilled.picks > 1 && drilled.back && back && back.groups === root.length && back.picks === 0)
        ? ok('head menu drills and returns', root.join(', '))
        : bad('head menu drills and returns', JSON.stringify({ root, drilled, back }));
    } else bad('head menu drills and returns', 'no door to Horizon');
    gerr.length ? bad('no errors in the head menu', gerr.join(' | ')) : ok('no errors in the head menu');
    await gp.close();
  }

  {
    const pp = await b.newPage({ viewport: { width: 414, height: 1000 } });
    const pperr = []; pp.on('pageerror', e => pperr.push(String(e).slice(0, 140)));
    await pp.goto('file://' + url); await pp.waitForTimeout(1400);
    const gone = await pp.evaluate(() => !document.getElementById('growth-peers') &&
                                         !document.querySelector('.peer-picker'));
    let root = [], picks = [], after = [];
    if (await openPage(pp, url, 'sheet-metric-gdp')) {
      await pp.evaluate(() => document.querySelector('.bh-more[data-head-more="sheet-metric-gdp"]').click());
      await pp.waitForTimeout(280);
      root = await pp.evaluate(() => [...document.querySelectorAll('.bh-grp-row')].map(n => n.textContent.trim()));
      if (root.length) {
        await pp.click('[data-head-grp="economy"]'); await pp.waitForTimeout(250);
        picks = await pp.evaluate(() => [...document.querySelectorAll('.bh-pick')].map(n => n.textContent.trim()));
        await pp.evaluate(() => document.querySelectorAll('.bh-pick')[1].click());
        await pp.waitForTimeout(400);
        after = await pp.evaluate(() => {
          document.querySelector('.bh-more[data-head-more="sheet-metric-gdp"]').click();
          return [...document.querySelectorAll('.bh-grp-row')].map(n => n.textContent.trim());
        });
      }
    }
    (gone && root.length === 1 && /^Economy/.test(root[0]) && picks.length > 2 &&
     picks[0] === 'United States' && after.length === 1 && after[0] !== root[0])
      ? ok('growth economy sits in the head menu', root[0] + ' -> ' + after[0])
      : bad('growth economy sits in the head menu', JSON.stringify({ gone, root, picks, after }));
    pperr.length ? bad('no errors in the economy menu', pperr.join(' | ')) : ok('no errors in the economy menu');
    await pp.close();
  }

  {
    const misses = await p.evaluate(() => (window.__geomMiss || []).slice(0, 6));
    misses.length ? bad('every history wears its own geometry', misses.join(' | '))
                  : ok('every history wears its own geometry');
  }

  {
    const doors = sheet => p.evaluate(s => [...document.querySelectorAll('[data-open="' + s + '"]')].map(d => {
      const v = d.querySelector('.ci-value, .subject-value');
      const w = d.querySelector('.tag, .member-word');
      return (v ? v.firstChild.nodeValue.trim() : '-') + '|' + (w ? w.textContent.trim() : '');
    }), sheet);
    const capeBefore = await doors('sheet-metric-valuation');
    await p.evaluate(() => window.__GYN.applyLive('capeValue', 50.5));
    await p.waitForTimeout(200);
    const capeAfter = await doors('sheet-metric-valuation');
    (capeBefore.length >= 2 && capeAfter.every(t => /^50\.5/.test(t)) && capeBefore.some(t => !/^50\.5/.test(t)))
      ? ok('a fresh CAPE reaches every door', capeBefore.length + ' doors')
      : bad('a fresh CAPE reaches every door', JSON.stringify({ capeBefore, capeAfter }));

    const ffBefore = await doors('sheet-sign-hormones');
    await p.evaluate(() => window.__GYN.applyLive('fedFunds', { lo: 1.25, hi: 1.50, lastMove: '-0.25' }));
    await p.waitForTimeout(200);
    const ffAfter = await doors('sheet-sign-hormones');
    (ffBefore.length >= 2 && ffAfter.every(t => /^1\.25/.test(t)) &&
     ffAfter.every(t => !/Tightening/.test(t)) && ffAfter.some(t => /Easing/.test(t)))
      ? ok('a rate cut reaches every door, word and all', ffAfter.join(' \u00b7 '))
      : bad('a rate cut reaches every door, word and all', JSON.stringify({ ffBefore, ffAfter }));

    const pm = await p.evaluate(() => (window.__paintMiss || []).slice(0, 6));
    pm.length ? bad('every reading prints where it is painted', pm.join(' | '))
              : ok('every reading prints where it is painted');
  }

  {
    const dups = await p.evaluate(() => {
      const seen = {}, out = [];
      document.querySelectorAll('[id]').forEach(e => { seen[e.id] = (seen[e.id] || 0) + 1; });
      Object.keys(seen).forEach(k => { if (seen[k] > 1) out.push('#' + k + ' \u00d7' + seen[k]); });
      return out;
    });
    dups.length ? bad('every id is one element', dups.join(', ')) : ok('every id is one element');
  }

  {
    const acts = await p.evaluate(() => Object.keys((window.__GYN || {}).acts || {}).sort());
    acts.length === 3 ? ok('every action is registered once', acts.join(', '))
                      : bad('every action is registered once', acts.join(', ') || 'none');
    const am = await p.evaluate(() => Array.from(new Set(window.__actMiss || [])));
    am.length ? bad('every action has an answer', am.join(', '))
              : ok('every action has an answer');
  }

  {
    const miss = await p.evaluate(() => Object.keys(window.__elMiss || {}));
    miss.length ? bad('every reach finds something', miss.map(i => '#' + i).join(', '))
                : ok('every reach finds something');
  }

  perr.length ? bad('no errors while navigating', perr.join(' | ')) : ok('no errors while navigating');

  await p.goto('file://' + url); await p.waitForTimeout(1300);
  await p.evaluate(() => document.querySelector('.tab-btn[data-tab="analysis"]').click());
  await p.waitForTimeout(600);
  const spans = await p.evaluate(() => [...document.querySelectorAll('.era-years')].map(e => e.textContent.trim()));
  spans.some(s => /–Today/.test(s)) ? ok('cycle span says Today') : bad('cycle span says Today', spans.join(' | '));

  {
    const off = await p.evaluate(() => ({
      checked: document.getElementById('cycle-data').getAttribute('aria-checked'),
      tracks: document.querySelectorAll('.cyc-track').length,
      doors: document.querySelectorAll('.era-row[role="button"]').length,
      legend: document.getElementById('cycle-legend').hidden
    }));
    (off.checked === 'false' && !off.tracks && off.doors === 5 && off.legend)
      ? ok('cycle data starts hidden', off.doors + ' cycles, no grid')
      : bad('cycle data starts hidden', JSON.stringify(off));
    await p.click('#cycle-data'); await p.waitForTimeout(300);
    const on = await p.evaluate(() => {
      const dot = [...document.querySelectorAll('.era-row.data')].find(r => /Dot-Com/.test(r.textContent));
      const scale = dot.querySelector('.cyc-scale > div').getBoundingClientRect();
      const yrs = [...dot.querySelectorAll('.sx-yrs span')].filter(x => x.textContent);
      const first = yrs[0].getBoundingClientRect(), last = yrs[yrs.length - 1].getBoundingClientRect();
      const val = [...dot.querySelectorAll('.sx-row')].find(r => /Valuations/.test(r.textContent));
      const cells = val ? [...val.querySelectorAll('i')] : [];
      return {
        tracks: document.querySelectorAll('.era-row.data .cyc-track').length,
        legend: !document.getElementById('cycle-legend').hidden,
        span: Math.round(scale.width), cols: Math.round(last.right - first.left), left: Math.round(scale.left - first.left),
        label: val && val.getAttribute('aria-label'),
        colored: cells.filter(i => i.classList.contains('on') && getComputedStyle(i).backgroundColor !== getComputedStyle(cells.find(c => c.classList.contains('off'))).backgroundColor).length
      };
    });
    (on.tracks === 5 && on.legend && on.span === on.cols && Math.abs(on.left) <= 1)
      ? ok('show data draws every cycle on one year scale', on.span + 'px strip = ' + on.cols + 'px of years')
      : bad('show data draws every cycle on one year scale', JSON.stringify(on));
    (on.label === 'Valuations: alike in 1999, 2000' && on.colored === 2)
      ? ok('the CAPE marks the Dot-Com top', on.label)
      : bad('the CAPE marks the Dot-Com top', JSON.stringify(on));
    await p.evaluate(() => [...document.querySelectorAll('.era-row.data')].find(r => /Dot-Com/.test(r.textContent))
      .querySelector('.sx-row[aria-label^="Valuations"]').click());
    await p.waitForTimeout(250);
    const note = await p.evaluate(() => ({
      text: document.getElementById('detail-modal-body').innerText,
      opened: !document.getElementById('calendar-cycle').hidden
    }));
    await p.evaluate(() => document.getElementById('detail-modal-close').click());
    (/Jan 2000: 43\.8/.test(note.text) && /Jan 1999: 40\.6/.test(note.text) && /^Now /m.test(note.text) && !note.opened)
      ? ok('a row shows both numbers behind every dot', 'Jan 1999, Jan 2000 and now')
      : bad('a row shows both numbers behind every dot', JSON.stringify(note));
    await p.reload(); await p.waitForTimeout(1300);
    await p.evaluate(() => document.querySelector('.tab-btn[data-tab="analysis"]').click()); await p.waitForTimeout(400);
    const kept = await p.evaluate(() => document.getElementById('cycle-data').getAttribute('aria-checked') === 'true' &&
      document.querySelectorAll('.cyc-track').length === 5);
    await p.click('#cycle-data'); await p.waitForTimeout(250);
    const back = await p.evaluate(() => !document.querySelectorAll('.cyc-track').length &&
      document.querySelectorAll('.era-row[role="button"]').length === 5);
    (kept && back) ? ok('show data is remembered and turns off cleanly') : bad('show data is remembered and turns off cleanly', JSON.stringify({ kept, back }));
  }

  {
    const cc = await p.evaluate(() => {
      const row = [...document.querySelectorAll('.era-row')].find(x => /Housing/.test(x.textContent));
      if (!row) return null; row.click(); return true;
    });
    await p.waitForTimeout(800);
    const got = cc && await p.evaluate(() => ({
      grps: [...document.querySelectorAll('.cc-grp .cyc-title')].map(n => n.textContent.trim()),
      items: [...document.querySelectorAll('#cycle-cats .cat-item')].map(n => ({
        name: n.querySelector('.ci-name').textContent.trim(),
        val: n.querySelector('.ci-value').textContent.trim(),
        word: n.querySelector('.ci-word').textContent.trim(),
        none: !!n.querySelector('.cc-none')
      })),
      doors: document.querySelectorAll('#cycle-cats [data-open]').length
    }));
    const live = got && got.items.filter(i => !i.none);
    (got && got.grps.join('/') === 'Weather/Circulation/Mood/Energy' && got.items.length === 13 &&
     !got.doors && live.length >= 11 && live.every(i => /over the cycle|Flat all cycle/.test(i.word)) &&
     live.every(i => i.val && i.val !== '\u2014'))
      ? ok('cycle categories show the data', got.grps.join(', ') + ' \u00b7 ' + got.items.length + ' readings')
      : bad('cycle categories show the data', JSON.stringify(got));

    const blank = got ? got.items.filter(i => i.none) : [];
    (blank.length === 1 && blank[0].name === 'Desire' && /^Not measured before /.test(blank[0].word))
      ? ok('cycle categories leave a short record blank', blank[0].name + ': ' + blank[0].word)
      : bad('cycle categories leave a short record blank', JSON.stringify(blank));

    const shape = await p.evaluate(() => ({
      dragged: !!document.querySelector('#calendar-cycle #temp-card, #calendar-cycle #growth-card'),
      home: !!document.querySelector('#slot-temp #temp-card') && !!document.querySelector('#slot-growth #growth-card'),
      sparks: document.querySelectorAll('#cycle-cats .ci-mini .spark').length,
      stale: /Current cycle/i.test((document.getElementById('calendar-cycle') || {}).innerText || '')
    }));
    (!shape.dragged && shape.home && shape.sparks >= 10 && !shape.stale)
      ? ok('closed cycle drops the live cards', shape.sparks + ' rows carry their own shape')
      : bad('closed cycle drops the live cards', JSON.stringify(shape));

    await p.evaluate(() => { const b = document.querySelector('.tab-btn[data-tab="analysis"]'); if (b) b.click(); });
    await p.waitForTimeout(500);
    const noRow = await p.evaluate(() => {
      const row = [...document.querySelectorAll('.era-row')].find(x => /Today/.test(x.textContent));
      if (!row) return 'no ongoing row';
      row.click(); return null;
    });
    await p.waitForTimeout(700);
    const landed = await p.evaluate(() => ({
      tab: (document.querySelector('.tab-btn.active') || {}).getAttribute
             ? document.querySelector('.tab-btn.active').getAttribute('data-tab') : null,
      frozen: !document.getElementById('calendar-cycle').hidden,
      dial: !!document.querySelector('#cycle-view .season-card'),
      bar: document.getElementById('topbar-title').textContent.trim()
    }));
    (!noRow && landed.tab === 'cycle' && !landed.frozen && landed.dial && /Current Cycle/i.test(landed.bar))
      ? ok('the open cycle opens the live page', 'landed on the Cycle tab')
      : bad('the open cycle opens the live page', JSON.stringify({ noRow, landed }));
  }
  await p.close();

  const readLive = () => {
    const fg  = document.getElementById('subj-value-sentiment');
    const yld = document.getElementById('subj-value-horizon');
    const ink = document.querySelector('.curve-w');
    return {
      fgNum: fg ? fg.textContent.trim().split('VIX')[0] : null,
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

  const FF_SEED = JSON.stringify({ fedFunds: { kind: 'object', lo: 2.5, hi: 2.75 } });
  const objSeed = await loadWith(FF_SEED);
  const objText = await (async () => {
    const c = await b.newContext({ viewport: { width: 414, height: 1000 } });
    const g = await c.newPage();
    await g.addInitScript(x => { try { localStorage.setItem('gyn.live', x); } catch (e) {} }, FF_SEED);
    await g.goto('file://' + url); await g.waitForTimeout(1300);
    const t = await g.evaluate(() => {
      const c2 = document.body.cloneNode(true);
      c2.querySelectorAll('script, style').forEach(n => n.remove());
      return c2.textContent;
    });
    await c.close();
    return t;
  })();
  (/2\.50/.test(objText) && /Oct 28, 2026/.test(objText) && !/undefined/.test(objText) && !objSeed.errs.length)
    ? ok('live cache object doc', 'lo/hi applied, editorial fields survive')
    : bad('live cache object doc', 'rate ' + /2\.50/.test(objText) + ' next ' + /Oct 28, 2026/.test(objText) +
        ' undefined ' + /undefined/.test(objText) + ' ' + objSeed.errs.join(' | '));

  const serSeed = await loadWith(JSON.stringify({ yieldCurve: { kind: 'series', rows: INVERTED } }));
  (serSeed.r.yld && serSeed.r.yld !== plain.r.yld && !serSeed.errs.length)
    ? ok('live cache series doc', plain.r.yld + '  ->  ' + serSeed.r.yld)
    : bad('live cache series doc', JSON.stringify(serSeed.r) + ' was ' + plain.r.yld + ' ' + serSeed.errs.join(' | '));

  for (const [label, seed] of [
    ['garbage',      'this is not json'],
    ['empty',        '{}'],
    ['shapeless',    '{"vix3mClose":{"kind":"scalar"}}'],
    ['null doc',     '{"vix3mClose":null}'],
    ['wrong kind',   '{"vix3mClose":{"kind":"series","rows":[]}}']
  ]) {
    const g = await loadWith(seed);
    (g.r.fgNum === plain.r.fgNum && g.r.yld === plain.r.yld && !g.errs.length)
      ? ok('live cache falls back: ' + label)
      : bad('live cache falls back: ' + label, JSON.stringify(g.r) + ' ' + g.errs.join(' | '));
  }

  {
    const c = await b.newContext({ viewport: { width: 414, height: 1000 } });
    const g = await c.newPage();
    const perr = [];
    g.on('pageerror', e => perr.push(String(e).slice(0, 140)));
    await g.goto('file://' + url); await g.waitForTimeout(1400);

    const read = () => g.evaluate(() => {
      const t = s => { const e = document.querySelector(s); return e ? e.textContent.trim().replace(/\s+/g, ' ') : null; };
      const k = s => { const e = document.querySelector(s); return e ? e.className : null; };
      return { sentiment: t('#subj-value-sentiment'),
               mood: t('[data-open="sheet-sign-sentiment"] .tag'),
               moodClass: k('[data-open="sheet-sign-sentiment"] .tag'),
               horizon: t('#subj-value-horizon'),
               horizonTag: t('[data-open="sheet-sign-horizon"] .tag'),
               horizonFigs: [...document.querySelectorAll('[data-open="sheet-sign-horizon"] .ci-value, [data-open="sheet-sign-horizon"] .subject-value')]
                              .map(e => e.textContent.trim().split('pts')[0]),
               valuation: t('#subj-value-valuation') };
    });

    const seam = await g.evaluate(() => !!(window.__GYN && window.__GYN.applyLive));
    seam ? ok('repaint seam present') : bad('repaint seam present', 'window.__GYN.applyLive missing');

    if (seam) {
      const before = await read();
      const rv = await g.evaluate(() => {
        const G = window.__GYN;
        return {
          fg: G.applyLive('vix3mClose', 12),
          yc: G.applyLive('yieldCurve', [{m:'3M',y:5.55},{m:'2Y',y:4.60},{m:'10Y',y:4.05}]),
          nul: G.applyLive('vix3mClose', null),
          bad: G.applyLive('vix3mClose', { nope: 1 }),
          unk: G.applyLive('notADocument', { a: 1 })
        };
      });
      await g.waitForTimeout(250);
      const after = await read();

      (rv.fg && /^1\.18/.test(after.sentiment || '') && before.sentiment !== after.sentiment)
        ? ok('repaint fear curve figure', (before.sentiment || '').slice(0, 12) + ' -> ' + (after.sentiment || '').slice(0, 12))
        : bad('repaint fear curve figure', JSON.stringify(after.sentiment));

      (after.moodClass && after.moodClass !== before.moodClass && after.mood === 'Inverted')
        ? ok('repaint derived verdict', before.moodClass + ' -> ' + after.moodClass)
        : bad('repaint derived verdict', before.moodClass + ' -> ' + after.moodClass + ' / ' + after.mood);

      (rv.yc && after.horizonFigs.length > 1 && after.horizonFigs.every(f => /1\.50/.test(f)) &&
       after.horizonTag === 'Pessimistic')
        ? ok('repaint horizon spread and verdict', before.horizonFigs.join('/') + ' -> ' + after.horizonFigs.join('/') + ' ' + after.horizonTag)
        : bad('repaint horizon spread and verdict', JSON.stringify(after.horizonFigs) + ' / ' + after.horizonTag);

      (rv.nul === false && rv.bad === false && rv.unk === false)
        ? ok('repaint refuses bad input', 'null, wrong shape, unknown doc')
        : bad('repaint refuses bad input', JSON.stringify(rv));

      perr.length ? bad('no errors while repainting', perr.join(' | ')) : ok('no errors while repainting');

      const bands = await g.evaluate(() => {
        const R = window.__GYN.READINGS, out = {};
        Object.keys(R).forEach(n => {
          if (R[n].kind !== 'scalar') return;
          const [lo, hi] = R[n].band, A = window.__GYN.applyLive;
          out[n] = {
            lo: A(n, lo), hi: A(n, hi),
            under: A(n, lo - 0.01), over: A(n, hi + 0.01),
            nan: A(n, NaN), str: A(n, String(lo)), arr: A(n, [lo])
          };
        });
        return out;
      });
      const bn = Object.keys(bands);
      const bandOk = bn.length === 4 && bn.every(n => {
        const b = bands[n];
        return b.lo === true && b.hi === true && b.under === false && b.over === false
            && b.nan === false && b.str === false && b.arr === false;
      });
      bandOk ? ok('every scalar band is inclusive and refuses outside it', bn.join(', '))
             : bad('every scalar band is inclusive and refuses outside it', JSON.stringify(bands));

      const rows = await g.evaluate(() => {
        const R = window.__GYN.READINGS;
        return Object.keys(R).map(n => {
          const r = R[n];
          return { n, kind: r.kind, set: typeof r.set, paints: (r.paint || []).length, open: !!r.onOpen,
                   band: r.kind === 'scalar' ? (r.band || []).length : 2 };
        });
      });
      const rowOk = rows.length === 9 && rows.every(r =>
        ['object', 'series', 'scalar'].indexOf(r.kind) >= 0 && r.set === 'function' &&
        r.band === 2 && ((r.paints > 0) !== r.open));
      rowOk ? ok('every reading declares shape, landing and display', rows.length + ' rows')
            : bad('every reading declares shape, landing and display',
                  JSON.stringify(rows.filter(r => !(r.set === 'function' && ((r.paints > 0) !== r.open)))));
    }
    await c.close();
  }

  {
    const c = await b.newContext({ viewport: { width: 414, height: 1000 } });
    const g = await c.newPage();
    const perr = [];
    g.on('pageerror', e => perr.push(String(e).slice(0, 140)));
    await g.goto('file://' + url); await g.waitForTimeout(1400);

    const inv = await g.evaluate(() => {
      const G = window.__GYN;
      if (!G || !G.repeatable) return null;
      const norm = h => h.replace(/viewBox="0 0 \d+ /g, 'viewBox="0 0 W ');
      const failed = [];
      for (const s of G.repeatable()) {
        let err = '';
        try { s.fn(); } catch (e) { err = String(e).slice(0, 70); }
        const settled = norm(document.body.innerHTML);
        try { if (!err) s.fn(); } catch (e) { err = String(e).slice(0, 70); }
        const again = norm(document.body.innerHTML);
        if (err) failed.push(s.name + ' threw ' + err);
        else if (settled !== again) failed.push(s.name + ' delta ' + (again.length - settled.length));
      }
      const before = norm(document.body.innerHTML);
      G.render();
      return { n: G.repeatable().length, failed,
               whole: norm(document.body.innerHTML) === before,
               kinds: G.steps.reduce((a, s) => (a[s.kind] = (a[s.kind] || 0) + 1, a), {}) };
    });

    if (!inv) bad('registry invariant', 'no registry');
    else {
      inv.failed.length === 0
        ? ok('every repeatable step converges', inv.n + ' steps')
        : bad('every repeatable step converges', inv.failed.join(' | '));
      inv.whole ? ok('GYN.render() leaves the DOM unchanged')
                : bad('GYN.render() leaves the DOM unchanged', 'the DOM moved');
      const k = inv.kinds;
      (k.build === 4 && k.mixed === 2 && k.wire === 7)
        ? ok('step kinds', JSON.stringify(k))
        : bad('step kinds', JSON.stringify(k) + ' — expected build 4, mixed 2, wire 7');
      perr.length ? bad('no errors while re-running steps', perr.join(' | '))
                  : ok('no errors while re-running steps');
    }
    await c.close();
  }

  {
    const http = require('http');
    const FIXTURE = {
      capeValue: { kind: 'scalar', value: 50.5, asOf: '2026-09-28' },
      fedFunds:  { kind: 'object', lo: 1.25, hi: 1.50, lastMove: '-0.25' },
      _meta: { ok: ['capeValue', 'fedFunds'], failed: [], fetchedAt: '2026-09-28T22:40:00Z' }
    };
    const asked = [];
    const srv = http.createServer((req, res) => {
      asked.push(req.url);
      if (req.url === '/' || req.url === '/index.html') {
        res.setHeader('content-type', 'text/html; charset=utf-8'); res.end(src); return;
      }
      if (req.url === '/data/live.json') {
        res.setHeader('content-type', 'application/json'); res.end(JSON.stringify(FIXTURE)); return;
      }
      res.statusCode = 404; res.end();
    });
    await new Promise(r => srv.listen(0, '127.0.0.1', r));
    const origin = 'http://127.0.0.1:' + srv.address().port;
    const c = await b.newContext({ viewport: { width: 414, height: 1000 }, serviceWorkers: 'block' });
    const g = await c.newPage();
    const perr = [];
    g.on('pageerror', e => perr.push(String(e).slice(0, 140)));
    await g.goto(origin + '/'); await g.waitForTimeout(1600);

    const doors = sheet => g.evaluate(s => [...document.querySelectorAll('[data-open="' + s + '"]')].map(d => {
      const v = d.querySelector('.ci-value, .subject-value');
      const w = d.querySelector('.tag, .member-word');
      return (v ? v.firstChild.nodeValue.trim() : '-') + '|' + (w ? w.textContent.trim() : '');
    }), sheet);
    const cape = await doors('sheet-metric-valuation');
    const ff = await doors('sheet-sign-hormones');
    const cache = await g.evaluate(() => {
      try { return JSON.parse(localStorage.getItem('gyn.live') || '{}') || {}; } catch (e) { return {}; }
    });
    await c.close();
    await new Promise(r => srv.close(r));

    asked.includes('/data/live.json')
      ? ok('site feed is asked for over http')
      : bad('site feed is asked for over http', 'requests: ' + asked.join(' '));
    (cape.length >= 2 && cape.every(t => /^50\.5/.test(t)))
      ? ok('site feed moves a scalar on every door', cape.length + ' doors')
      : bad('site feed moves a scalar on every door', JSON.stringify(cape));
    (ff.length >= 2 && ff.every(t => /^1\.25/.test(t)) && ff.some(t => /Easing/.test(t)) && ff.every(t => !/Tightening/.test(t)))
      ? ok('site feed moves an object doc, word and all', ff.join(' · '))
      : bad('site feed moves an object doc, word and all', JSON.stringify(ff));
    (cache.capeValue && cache.capeValue.value === 50.5 && cache.fedFunds && cache.fedFunds.lo === 1.25 && !('_meta' in cache))
      ? ok('site feed writes the cache, without _meta')
      : bad('site feed writes the cache, without _meta', JSON.stringify(cache).slice(0, 200));
    perr.length ? bad('no errors on the site path', perr.join(' | ')) : ok('no errors on the site path');
  }

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
