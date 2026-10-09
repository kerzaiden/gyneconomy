#!/usr/bin/env node
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');

const FILE = process.argv[2];
const { DYNAMIC_CLASS } = require('../tools/hygiene.js');
const CHROME = (function () {
  if (process.env.GYN_CHROME) return process.env.GYN_CHROME;
  const sandbox = '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';
  if (fs.existsSync(sandbox)) return sandbox;
  try { return chromium.executablePath(); } catch (e) { return undefined; }
})();

if (!FILE) { console.error('usage: node gyn-test.js <file.html>'); process.exit(2); }

if (!CHROME || !fs.existsSync(CHROME)) {
  console.error('Chromium not found' + (CHROME ? ' at ' + CHROME : '') + '.');
  console.error('Run:  npm run setup      (i.e. playwright install chromium)');
  console.error('Or point GYN_CHROME at an existing Chromium binary.');
  process.exit(2);
}

const NO_HISTORY = [];
const CARD_ON_PAGE = ['sheet-metric-debt', 'sheet-sign-productivity-growth'];
const TREND_WORD_ONLY = ['Pulse'];
const FITS_ITS_ROWS = ['Pulse'];


const results = [];
const ok  = (n, d) => results.push([true,  n, d || '']);
const bad = (n, d) => results.push([false, n, d || '']);

const click = (p, sel) => p.evaluate(s => {
  const e = [...document.querySelectorAll(s)].filter(x => x.offsetParent !== null)[0];
  if (!e) return false; e.scrollIntoView(); e.click(); return true;
}, sel);

const noise = [];
const watch = (pg, tag) => {
  const mine = [], note = t => noise.push(tag + ': ' + t);
  pg.on('pageerror', e => { const t = String(e).slice(0, 140); mine.push(t); note(t); });
  pg.on('console', m => {
    if ((m.type() === 'warning' || m.type() === 'error') && !/^Failed to load resource/.test(m.text())) note(m.type() + ' ' + m.text().slice(0, 140));
  });
  return mine;
};
const openFind = async p => { await p.click('#chart-home button.dx-sys-head[data-open="sheet-find"]'); await settle(p); };
const filt = async (p, sel) => {
  if (!await p.evaluate(() => !!document.querySelector('#detail-modal-body .ind-filter'))) await click(p, '#sheet-find .lab-filter');
  await click(p, '#detail-modal-body ' + sel); await settle(p);
};
const shut = async p => { await p.keyboard.press('Escape'); await settle(p); };
const toInd = async (p, c) => { await openFind(p); await filt(p, '[data-pick-cat="' + c + '"]'); await shut(p); };
const settle = pg => pg.evaluate(() => new Promise(done => requestAnimationFrame(() => requestAnimationFrame(() =>
  Promise.all(document.getAnimations().filter(a => a.effect && isFinite(a.effect.getComputedTiming().endTime)).map(a => a.finished.catch(() => null))).then(() => done())))));
const ready = pg => pg.waitForFunction(() => window.__GYN && document.getElementById('diagnosis')).then(() => settle(pg));

async function goHome(p, url) {
  const open = () => p.evaluate(() => !!document.querySelector('#metric-page:not([hidden]), #detail-backdrop.show, .more-menu.in'));
  if (await p.evaluate(() => !!window.__GYN).catch(() => false))
    for (let i = 0; i < 6 && await open(); i++) { await p.keyboard.press('Escape'); await settle(p); }
  if (!await p.evaluate(() => !!window.__GYN).catch(() => false) || await open()) { await p.goto('file://' + url); await ready(p); }
}
async function openPage(p, url, sheet) {
  await goHome(p, url);
  await p.click('.tab-btn[data-tab="chart"]'); await settle(p); await openFind(p);
  if (!await click(p, '#sheet-find .lab-row[data-open="' + sheet + '"]')) return false;
  await settle(p); return true;
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

  const SRC_DIR = path.join(__dirname, '..', 'src');
  const code = fs.existsSync(path.join(SRC_DIR, 'manifest.json'))
    ? fs.readdirSync(path.join(SRC_DIR, 'js')).filter(n => n.endsWith('.ts') && n !== 'history-fred.ts')
        .map(n => fs.readFileSync(path.join(SRC_DIR, 'js', n), 'utf8')).join('\n') + fs.readFileSync(path.join(SRC_DIR, 'page-body.html'), 'utf8')
    : null;
  const lastRule = (() => { const css = [...src.matchAll(/<style>([\s\S]*?)<\/style>/g)].map(m => m[1]).pop() || '';
    const all = [...css.replace(/\/\*[\s\S]*?\*\//g, '').matchAll(/([^{}]+)\{[^{}]*\}/g)];
    return all.length ? all[all.length - 1][1].trim().replace(/\s+/g, ' ') : null; })();
  const seen = new Set();
  const sweep = async pg => (await pg.evaluate(() => [...document.querySelectorAll('*')].flatMap(e => [...e.classList])))
    .forEach(c => seen.add(c));

  const b = await chromium.launch({ executablePath: CHROME });

  for (const w of [390, 414, 1280]) {
    const p = await b.newPage({ viewport: { width: w, height: 900 } });
    watch(p, w + 'px');
    await p.goto('file://' + url); await ready(p);
    const css = await p.evaluate(() => {
      let total = 0, last = null;
      const walk = rs => { for (const x of rs) { total++; if (x.selectorText) last = x.selectorText; if (x.cssRules) walk(x.cssRules); } };
      for (const sh of document.styleSheets) { let r; try { r = sh.cssRules; } catch (e) { continue; } if (r) walk(r); }
      return { total, last: last && last.replace(/\s+/g, ' ') };
    });
    if (w === 390) {
      css.last === lastRule ? ok('stylesheet intact', css.total + ' rules, the last one ' + css.last)
        : bad('stylesheet intact', 'the browser\u2019s last rule is ' + css.last + ', the source\u2019s ' + lastRule + ' \u2014 an unclosed brace swallowed the rest');
    }
    await p.close();
  }

  const p = await b.newPage({ viewport: { width: 414, height: 1000 } });
  watch(p, 'navigating');
  await p.goto('file://' + url); await ready(p);
  await p.click('.tab-btn[data-tab="chart"]'); await settle(p); await openFind(p);
  const READINGS_ON_SCREEN = await p.evaluate(() => [...document.querySelectorAll('#sheet-find .lab-row[data-open]')]
    .map(c => [c.dataset.open, c.dataset.title]));
  const tall = {}, notes = {}, gaps = {};
  const onPage = {}, pills = {};
  for (const [sheet, label] of READINGS_ON_SCREEN) {
    if (!await openPage(p, url, sheet)) { bad('page ' + label, 'no door'); continue; }
    await sweep(p);
    if (NO_HISTORY.includes(sheet)) continue;
    const hid = await p.evaluate(() => { const b = document.querySelector('#metric-page .bh-more[data-head-more]'); return b ? b.dataset.headMore : ''; });
    if (CARD_ON_PAGE.includes(sheet)) onPage[label] = await p.evaluate(s => {
      const card = document.querySelector('#sheet-find .lab-row[data-open="' + s + '"] .lab-res b').textContent.trim();
      return document.getElementById('metric-page').textContent.indexOf(card) !== -1 ? null : card; }, sheet);
    const r = await p.evaluate(h => {
      const mp = document.getElementById('metric-page');
      const hb = document.querySelector('.bh-more[data-head-more="' + h + '"]');
      const band = (hb && hb.closest('.page-chart')) || mp.querySelector('.page-chart');
      const svg = band && [...band.querySelectorAll('svg')]
        .sort((a, b) => b.getBoundingClientRect().height - a.getBoundingClientRect().height)[0];
      const q = s => svg ? svg.querySelectorAll(s).length : 0;
      const btn = document.querySelector('.bh-more[data-head-more="' + h + '"]') || mp.querySelector('.band-head .bh-info');
      return {
        head: !!mp.querySelector('.band-head'), ctl: !!mp.querySelector('.hist-bar'),
        trend: !!mp.querySelector('.trendpill'), headBtn: !!btn,
        tall: svg ? Math.round(svg.getBoundingClientRect().height) : 0, title: btn ? btn.closest('.band-head').querySelector('.bh-title').textContent : '',
        ctlOutside: (() => { const bar = mp.querySelector('.hist-bar');
          return !!bar && !bar.closest('.page-chart'); })(),
        frame: q('.bt-frame'), grid: q('.bt-grid'), vgrid: q('.bt-vgrid'), yl: q('.bt-yl'), xl: q('.bt-xl'),
        mark: !!(btn && btn.closest('.band-head').querySelector('.bh-mark svg')), chip: !!mp.querySelector('.timing-row'),
        boxes: mp.querySelectorAll('.highlights').length,
        gap: (() => { const bar = mp.querySelector('.hist-bar'), top = document.querySelector('.wrap > .topbar');
          return bar && top ? Math.round(bar.getBoundingClientRect().top - top.getBoundingClientRect().bottom) : null; })(),
      };
    }, hid);
    const miss = [];
    if (!r.head) miss.push('head'); if (!r.ctl) miss.push('control'); if (!r.trend) miss.push('trend');
    if (!r.headBtn) miss.push('⋯ or (i)'); if (!r.ctlOutside) miss.push('control outside the band');
    if (!r.frame) miss.push('frame'); if (!r.grid) miss.push('gridlines');
    if (!r.vgrid) miss.push('vertical rules'); if (!r.yl) miss.push('y labels'); if (!r.xl) miss.push('x labels');
    if (!r.mark) miss.push('the head\u2019s mark'); if (!r.chip) miss.push('the timing chip');
    if (r.boxes > 1) miss.push('a single Insights box (' + r.boxes + ')');
    miss.length ? bad('page ' + label, 'missing ' + miss.join(', ')) : ok('page ' + label, r.title);
    tall[label] = r.tall; gaps[label] = r.gap;
    pills[label] = await p.evaluate(() => {
      const b = document.querySelector('#metric-page .trendpill.can-toggle');
      if (!b) return document.querySelector('#metric-page .trendpill.none') ? 'unavailable' : document.querySelector('#metric-page .trendpill') ? 'word' : 'no button';
      b.click();
      const box = b.closest('.page-chart'), fit = box && box.querySelector('.fit');
      const on = b.getAttribute('aria-pressed') === 'true' && box.classList.contains('trend-on') && !!fit && getComputedStyle(fit).display !== 'none';
      b.click(); return on ? 'line' : 'dead';
    });
    notes[label] = await p.evaluate(() => {
      const body = document.getElementById('detail-modal-body'), shut = document.getElementById('detail-modal-close'), out = [];
      document.querySelectorAll('#metric-page [data-detail-idx]').forEach(b => { b.click(); out.push(body.innerText); shut.click(); });
      return out.join('\n');
    });

    if (r.headBtn) {
      if (hid) { await p.evaluate(h => document.querySelector('.bh-more[data-head-more="' + h + '"]').click(), hid); await settle(p); }
      const note = await p.evaluate(h => {
        const info = h ? null : document.querySelector('#metric-page .band-head .bh-info');
        if (info) { info.click(); return { rows: 1 }; }
        const wrap = document.querySelector('.bh-more[data-head-more="' + h + '"]').closest('.bh-more-wrap');
        const optn = wrap.querySelector('.bh-opt'); if (!optn) return { rows: 0 };
        optn.click(); return { rows: wrap.querySelectorAll('.bh-opt').length };
      }, hid);
      await settle(p);
      const body = await p.evaluate(() => {
        const bd = document.getElementById('detail-modal-body');
        return { shown: document.getElementById('detail-backdrop').classList.contains('show'),
                 len: bd.innerText.trim().length, text: bd.innerText };
      });
      notes[label] += '\n' + body.text;
      (note.rows && body.shown && body.len > 100)
        ? ok('note ' + label, body.len + ' chars')
        : bad('note ' + label, 'menu rows ' + note.rows + ', modal ' + body.shown + ', ' + body.len + ' chars');
      await p.keyboard.press('Escape'); await settle(p);
    }
  }
  {
    const lines = Object.keys(pills).filter(k => pills[k] === 'line'), dead = Object.keys(pills).filter(k => !/^(line|unavailable)$/.test(pills[k]) && !(pills[k] === 'word' && TREND_WORD_ONLY.includes(k)));
    (lines.length >= 12 && !dead.length)
      ? ok('every trend button draws its line', lines.length + ' lines · unavailable under eight points: ' + Object.keys(pills).filter(k => pills[k] === 'unavailable').join(', '))
      : bad('every trend button draws its line', JSON.stringify(pills));
    const gs = [...new Set(Object.values(gaps))];
    (gs.length === 1 && gs[0] > 0)
      ? ok('every page opens with its bar at one distance under the top bar', gs[0] + 'px on ' + Object.keys(gaps).length + ' pages (Keren, V674)')
      : bad('every page opens with its bar at one distance under the top bar', JSON.stringify(gaps));
    const hs = Object.keys(tall).filter(k => !FITS_ITS_ROWS.includes(k)).map(k => tall[k]), fit = FITS_ITS_ROWS.filter(k => k in tall && !(tall[k] > 0 && tall[k] <= Math.max(...hs)));
    (hs.length === READINGS_ON_SCREEN.length - NO_HISTORY.length - FITS_ITS_ROWS.length && Math.min(...hs) >= 330 && Math.max(...hs) - Math.min(...hs) <= 5 && !fit.length)
      ? ok('every history draws at one height', hs.length + ' pages, ' + Math.min(...hs) + '\u2013' + Math.max(...hs) + 'px')
      : bad('every history draws at one height', JSON.stringify(tall));
    const relabelled = Object.keys(notes).flatMap(k => [...notes[k].matchAll(/(.{0,16})\bnormal range/gi)]
      .filter(m => !/\b(not a|no official|no)\s*$/i.test(m[1])).map(m => k + ': \u2026' + m[0]));
    !relabelled.length ? ok('no note calls a band a normal range', Object.keys(notes).length + ' notes read')
                       : bad('no note calls a band a normal range', relabelled.join(' | ') + ' \u2014 a target is never relabelled normal; say whose band it is');
    const off = Object.keys(onPage).filter(k => onPage[k] !== null);
    (Object.keys(onPage).length === CARD_ON_PAGE.length && !off.length)
      ? ok('the card\u2019s figure is the page\u2019s figure', Object.keys(onPage).join(', '))
      : bad('the card\u2019s figure is the page\u2019s figure', JSON.stringify(onPage));
  }
  {
    const gp = await b.newPage({ viewport: { width: 414, height: 1000 } });
    watch(gp, 'head menu');
    await gp.goto('file://' + url); await ready(gp);
    if (await openPage(gp, url, 'sheet-sign-pressure')) {
      await gp.evaluate(() => document.querySelector('.bh-more[data-head-more="pressure-range"]').click());
      await settle(gp);
      const root = await gp.evaluate(() => [...document.querySelectorAll('.bh-grp-row')].map(n => n.getAttribute('data-head-grp')));
      let drilled = null, back = null;
      if (root.length) {
        await gp.hover('[data-head-grp="' + root[0] + '"]'); await settle(gp);
        const onHover = await gp.evaluate(() => document.querySelectorAll('.bh-grp-row').length);
        await gp.click('[data-head-grp="' + root[0] + '"]'); await settle(gp);
        drilled = await gp.evaluate(() => ({ picks: document.querySelectorAll('.bh-pick').length,
                                             back: !!document.querySelector('.bh-back') }));
        await gp.click('.bh-back'); await settle(gp);
        back = await gp.evaluate(() => ({ groups: document.querySelectorAll('.bh-grp-row').length,
                                          picks: document.querySelectorAll('.bh-pick').length }));
        (onHover === root.length) ? ok('head menu ignores hover', root.length + ' groups')
          : bad('head menu ignores hover', 'hover changed the menu: ' + root.length + ' -> ' + onHover);
      }
      (root.length >= 1 && drilled && drilled.picks > 1 && drilled.back && back && back.groups === root.length && back.picks === 0)
        ? ok('head menu drills and returns', root.join(', '))
        : bad('head menu drills and returns', JSON.stringify({ root, drilled, back }));
      const view = (sheet, ins) => gp.evaluate(([sheet, ins]) => {
        const vis = id => { const e = document.getElementById(id); return !!e && !e.hidden && !!e.offsetParent; };
        const txt = (document.getElementById(ins) || {}).textContent || '';
        return { title: (document.querySelector('#' + sheet + ' .bh-title') || {}).textContent, ylm: vis('ylm-shell'), spread: vis('spread-history-shell'),
                 level: /risk-free loan/i.test(txt), slope: /un-inversion/i.test(txt),
                 boxes: document.querySelectorAll('#' + sheet + ' .insights').length, cols: document.querySelectorAll('#spread-history-svg .hzn-col').length };
      }, [sheet, ins]);
      if (!(await gp.evaluate(() => !!document.querySelector('.bh-grp-row'))))
        await gp.evaluate(() => document.querySelector('.bh-more[data-head-more="pressure-range"]').click());
      await gp.click('[data-head-grp="levels"]'); await settle(gp);
      await gp.click('[data-ylm-mat="10y"]'); await settle(gp);
      const lv = await view('sheet-sign-pressure', 'sheet-sign-pressure-highlights');
      let sp = {};
      if (await openPage(gp, url, 'sheet-sign-spreads')) {
        await gp.evaluate(() => document.querySelector('.bh-more[data-head-more="spreads-range"]').click()); await settle(gp);
        await gp.click('[data-head-grp="spreads"]'); await settle(gp);
        await gp.click('[data-hzn-spread="2y"]'); await settle(gp);
        sp = await view('sheet-sign-spreads', 'sheet-sign-spreads-highlights');
      }
      (root.join() === 'levels' && /10-Year/.test(lv.title || '') && lv.ylm && lv.level && !lv.slope && lv.boxes === 1 &&
       /10Y − 2Y Treasury Spread/.test(sp.title || '') && sp.spread && sp.slope && !sp.level && sp.cols > 10 && sp.boxes === 1)
        ? ok('Pressure and Treasury spreads are two readings', lv.title + ' · ' + sp.title)
        : bad('Pressure and Treasury spreads are two readings', JSON.stringify({ root, lv, sp }));
    } else bad('head menu drills and returns', 'no door to Pressure');
    await gp.close();
  }


  {
    const misses = await p.evaluate(() => (window.__geomMiss || []).slice(0, 6));
    misses.length ? bad('every history wears its own geometry', misses.join(' | '))
                  : ok('every history wears its own geometry');
  }

  {
    await p.goto('file://' + url); await ready(p);
    const read = () => p.evaluate(() => {
      const d = document.getElementById('diagnosis'), yrs = d && d.querySelector('.dx-years');
      return d ? { kicker: (document.getElementById('cycle-kicker-name') || {}).textContent, visible: !!d.offsetParent, title: (d.querySelector('.trend-head') || {}).textContent.trim(), lead: d.querySelectorAll('[data-chart-cycle] .trend-text').length,
                   story: [...d.querySelectorAll('[data-chart-cycle] .trend-text')].map(x => /^[A-Z][^.]+\. Mrs\. Market .+\.$/.test(x.textContent)).join() === 'true',
                   doors: d.querySelectorAll('[data-open]:not([data-ind-when]), [data-chart-cycle]').length,
                   cards: document.querySelectorAll('.cat-row').length,
                   years: yrs ? [...yrs.querySelectorAll('.dx-year-n')].map(n => n.textContent.trim()).filter(t => /^\d{4}$/.test(t)).map(Number) : [],
                   opens: yrs ? yrs.querySelectorAll('button.dx-year[data-open="sheet-find"][data-ind-when]').length : 0,
                   score: !d.querySelector('[data-open="sheet-ai-insights"] .lab-score') && d.querySelectorAll('[data-chart-cycle] .lab-score').length === 1,
                   after: yrs ? [...yrs.querySelectorAll('.dx-year-n')].some(n => n.textContent.trim() === 'After') : false,
                   boxes: [...d.children].map(c => c.matches('[data-open="sheet-ai-insights"]') ? 'ai' : c.classList.contains('trend-card') ? 'trend' : c.classList.contains('fp') && c.querySelector('.fp-plot') ? 'fed' : c.classList.contains('dx-sys') ? 'sys' : c.querySelector('.labs') ? 'chart' : c.className).join() } : null;
    });
    const today = await read();
    await sweep(p);
    (today && today.visible && today.title === 'AI Insights' && today.lead === 1 && today.story && today.cards === 0 &&
     today.boxes === 'ai,trend,sys' && today.doors === 2 && today.score && today.kicker === 'AI Cycle')
      ? ok('the dial reads its cycle, and under it AI Insights, Cycle Analysis with the health score, then the cycle year by year', today.title)
      : bad('the dial reads its cycle, and under it AI Insights, Cycle Analysis with the health score, then the cycle year by year', JSON.stringify(today));
    await p.evaluate(() => document.querySelector('.tab-btn[data-tab="analysis"]').click()); await settle(p);
    const mkt = await p.evaluate(() => [...document.querySelectorAll('.era-row .strip-run.mkt-up, .era-row .strip-run.mkt-down')]
      .map(e => getComputedStyle(e).backgroundColor));
    (mkt.length >= 10 && mkt.every(c => c !== 'rgba(0, 0, 0, 0)' && c !== 'transparent'))
      ? ok('every cycle row draws its bull and bear years in colour', mkt.length + ' runs')
      : bad('every cycle row draws its bull and bear years in colour', JSON.stringify(mkt.slice(0, 4)));
    await p.evaluate(() => [...document.querySelectorAll('.era-row')].find(r => /Big Tech/.test(r.textContent)).click());
    await settle(p);
    const past = await read();
    const yearRun = ys => ys.length > 1 && ys.every((y, i) => !i || y === ys[i - 1] - 1);
    (yearRun(today.years) && today.opens === today.years.length && past.boxes === 'ai,trend,sys' && past.doors === 2 && !past.after &&
     yearRun(past.years) && past.opens === past.years.length)
      ? ok('the cycle reads year by year, newest first, each year opening Elements, today and at a close', today.years.join() + ' · ' + past.years.join())
      : bad('the cycle reads year by year, newest first, each year opening Elements, today and at a close', JSON.stringify([today, past]));
    const preview = await p.evaluate(async () => {
      const yrs = document.querySelector('#diagnosis .dx-years'), btn = yrs.querySelector('.dx-years-more');
      const shown = () => [...yrs.querySelectorAll('.dx-year')].filter(r => !r.hidden).length;
      const before = shown(); btn.click(); const after = shown(), label = btn.textContent.trim(); btn.click();
      return { before, after, all: yrs.querySelectorAll('.dx-year').length, label, back: shown() };
    });
    (preview.before === 3 && preview.after === preview.all && preview.all > 3 && preview.label === 'View less' && preview.back === 3)
      ? ok('Year by Year shows the newest three years, and View more the rest', preview.before + ' of ' + preview.all)
      : bad('Year by Year shows the newest three years, and View more the rest', JSON.stringify(preview));
    await p.evaluate(() => [...document.querySelectorAll('#diagnosis .dx-year')].find(b => b.dataset.indWhen === '2010').click()); await settle(p);
    const yearInd = await p.evaluate(() => { const h = document.getElementById('sheet-find');
      return { title: document.getElementById('topbar-title').textContent, shown: !!h.offsetParent,
        year: h.querySelector('.period-now b').textContent, cycle: h.querySelector('.period-now small').textContent, items: h.querySelectorAll('.lab-item').length,
        popup: document.getElementById('detail-backdrop').classList.contains('show') }; });
    (yearInd.title === 'Elements' && yearInd.shown && yearInd.year === '2010' && yearInd.cycle === 'Year 2 of the Big Tech Cycle' && yearInd.items > 10 && !yearInd.popup)
      ? ok('a year in Year by Year opens Elements on that year', yearInd.items + ' readings in 2010')
      : bad('a year in Year by Year opens Elements on that year', JSON.stringify(yearInd));
    await filt(p, '[data-pick-period="AI Cycle"]'); await shut(p);
    await p.evaluate(() => document.querySelector('.tab-btn[data-tab="analysis"]').click()); await settle(p);
    await p.evaluate(() => [...document.querySelectorAll('.era-row')].find(r => /Big Tech/.test(r.textContent)).click()); await settle(p);
    (past && past.visible && past.title === 'AI Insights' && past.lead === 1 && past.story && past.kicker === 'Big Tech Cycle')
      ? ok('a closed cycle tells its whole story, not its close', past.title)
      : bad('a closed cycle tells its whole story, not its close', JSON.stringify(past));
    await p.evaluate(() => document.querySelector('.tab-btn[data-tab="cycle"]').click()); await settle(p);
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
    const named = code ? [...code.matchAll(/GYN\.on\("([^"]+)"/g)].map(m => m[1]) : acts;
    (acts.length && named.length === new Set(named).size && named.slice().sort().join() === acts.join())
      ? ok('every action is registered once', acts.join(', '))
      : bad('every action is registered once', JSON.stringify({ acts, named }));
    const am = await p.evaluate(() => Array.from(new Set(window.__actMiss || [])));
    am.length ? bad('every action has an answer', am.join(', '))
              : ok('every action has an answer');
  }

  {
    const miss = await p.evaluate(() => Object.keys(window.__elMiss || {}));
    miss.length ? bad('every reach finds something', miss.map(i => '#' + i).join(', '))
                : ok('every reach finds something');
  }

  await p.goto('file://' + url); await ready(p);
  await p.evaluate(() => document.querySelector('.tab-btn[data-tab="analysis"]').click());
  await settle(p);
  const spans = await p.evaluate(() => [...document.querySelectorAll('.era-years')].map(e => e.textContent.trim()));
  spans.some(s => /–Today/.test(s)) ? ok('cycle span says Today') : bad('cycle span says Today', spans.join(' | '));

  {
    await p.evaluate(() => [...document.querySelectorAll('#cycle-list .era-row')].find(r => /Dot-Com/.test(r.textContent)).click());
    await settle(p);
    await p.evaluate(() => document.querySelector('#calendar-cycle [data-chart-cycle]').click());
    await settle(p); await openFind(p);
    const chartOf = () => p.evaluate(() => {
      const s = document.getElementById('sheet-find'), c = s && s.querySelector('.labs');
      return c ? { open: !document.getElementById('panel-chart').hidden, picked: s.querySelector('.period-now b').textContent,
        items: c.querySelectorAll('.lab-item').length, risk: c.querySelectorAll('.lab-item.t-abnormal').length,
        seen: [...c.querySelectorAll('.lab-item')].filter(e => e.offsetParent).length } : null;
    });
    const chart = await chartOf();
    await filt(p, '[data-pick-tier="abnormal"]');
    const risky = await chartOf();
    await filt(p, '[data-pick-tier="all"]'); await filt(p, '[data-pick-period="Nifty Fifty Cycle"]'); await shut(p);
    const picked = await chartOf();
    (chart && chart.open && chart.picked === 'Dot-Com Cycle' && chart.items > 10 && chart.risk > 0 && chart.seen === chart.items &&
     risky.seen === chart.risk && picked && picked.picked === 'Nifty Fifty Cycle')
      ? ok('Cycle Analysis on a past cycle opens the Analysis tab on that cycle', chart.items + ' readings, ' + chart.risk + ' at risk')
      : bad('Cycle Analysis on a past cycle opens the Analysis tab on that cycle', JSON.stringify(chart));
  }

  {
    await p.goto('file://' + url); await ready(p);
    const bar = () => p.evaluate(() => ({ title: document.getElementById('topbar-title').textContent, back: !document.getElementById('topbar-back').hidden,
      tabs: getComputedStyle(document.querySelector('.tabnav')).display === 'none', chart: !document.getElementById('panel-chart').hidden,
      era: !document.getElementById('calendar-cycle').hidden, y: Math.round(window.scrollY) }));
    await p.evaluate(() => document.querySelector('.tab-btn[data-tab="analysis"]').click()); await settle(p);
    await p.evaluate(() => [...document.querySelectorAll('#cycle-list .era-row')].find(r => /Dot-Com/.test(r.textContent)).click()); await settle(p);
    await p.evaluate(() => { const d = document.querySelector('#calendar-cycle [data-chart-cycle]'); window.scrollTo(0, d.getBoundingClientRect().top + window.scrollY - 200); });
    await p.waitForTimeout(400); const from = await bar();
    await p.evaluate(() => document.querySelector('#calendar-cycle [data-chart-cycle]').click()); await settle(p);
    const crossed = await bar();
    await p.evaluate(() => document.querySelector('#chart-home .fp [data-open]').click()); await settle(p);
    const rates = await bar();
    await p.evaluate(() => document.getElementById('topbar-back').click()); await settle(p);
    const home = await bar();
    await p.evaluate(() => document.getElementById('topbar-back').click()); await settle(p); await p.waitForTimeout(400);
    const back = await bar();
    const inner = b => b.back && b.tabs;
    (inner(crossed) && crossed.chart && inner(rates) && rates.title !== 'Analysis' && inner(home) && home.title === 'Analysis' &&
     inner(back) && !back.chart && back.era && back.title === 'Dot-Com Cycle' && Math.abs(back.y - from.y) < 4)
      ? ok('a crossover from a past cycle stays an inner page, and Back retraces each step to the cycle', 'returned at ' + back.y + 'px')
      : bad('a crossover from a past cycle stays an inner page, and Back retraces each step to the cycle', JSON.stringify({ from, crossed, rates, home, back }));
  }

  {
    const rateFrom = async (past) => {
      await p.goto('file://' + url); await ready(p);
      return p.evaluate(async (past) => {
        const frame = () => new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
        if (past){
          document.querySelector('.tab-btn[data-tab="analysis"]').click(); await frame();
          [...document.querySelectorAll('#cycle-list .era-row')].find(r => /Dot-Com/.test(r.textContent)).click(); await frame();
        }
        if (document.querySelector('#diagnosis .fp')) return 'rates card on a cycle page';
        if (past) document.querySelector('#diagnosis [data-chart-cycle]').click(); else document.querySelector('.tab-btn[data-tab="chart"]').click();
        await frame();
        const head = [...document.querySelectorAll('.fp-note .fp-more[data-open="sheet-sign-hormones"]')].find(e => e.offsetParent);
        if (!head || !head.querySelector('.peek-chev') || head.textContent.trim() !== 'Learn more') return 'no Learn more';
        head.click(); await frame();
        const sh = document.getElementById('sheet-sign-hormones');
        return sh && sh.offsetParent ? document.getElementById('topbar-title').textContent : 'no page';
      }, past);
    };
    const got = [await rateFrom(false), await rateFrom(true)];
    got.every(t => t === 'Federal funds rate')
      ? ok('the rates card stands on Analysis alone, and Learn more opens the Federal funds rate, today and for a past cycle')
      : bad('the rates card stands on Analysis alone, and Learn more opens the Federal funds rate, today and for a past cycle', JSON.stringify(got));
  }

  {
    await p.goto('file://' + url); await ready(p);
    const gaps = await p.evaluate(async () => {
      const frame = () => new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));
      const gapNow = () => {
        const bar = document.querySelector('.topbar').getBoundingClientRect().bottom, mp = document.getElementById('metric-page');
        const root = mp && !mp.hidden ? mp : [...document.querySelectorAll('.tab-panel')].find(x => !x.hidden);
        let top = Infinity;
        root.querySelectorAll('*').forEach(e => {
          const r = e.getBoundingClientRect(), cs = getComputedStyle(e); if (!r.height || !r.width || cs.visibility === 'hidden') return;
          const ink = [...e.childNodes].some(n => n.nodeType === 3 && n.textContent.trim()) || /^(svg|img|canvas)$/i.test(e.tagName) ||
            cs.backgroundColor !== 'rgba(0, 0, 0, 0)' || parseFloat(cs.borderTopWidth) > 0;
          if (ink) top = Math.min(top, r.top);
        });
        return Math.round(top - bar);
      };
      const tab = t => document.querySelector('.tab-btn[data-tab="' + t + '"]').click();
      const out = {};
      for (const t of ['cycle', 'chart', 'analysis', 'portfolio']) { tab(t); window.scrollTo(0, 0); await frame(); out['tab ' + t] = gapNow(); }
      tab('analysis'); await frame(); document.querySelector('#cycle-list .era-row').click(); await frame(); window.scrollTo(0, 0); await frame();
      out['a past cycle'] = gapNow();
      const opener = (id, shown) => [...document.querySelectorAll('[data-open="' + id + '"]')].find(x => x.closest('.tab-panel') && !x.dataset.indCat && (!shown || x.offsetParent));
      for (const id of [...new Set([...document.querySelectorAll('.metric-sheet')].map(s => s.id))]) {
        window.__GYN.fire('metricPageReset');
        const chain = []; let cur = id;
        while (cur && chain.length < 5) { const o = opener(cur); if (!o) { chain.length = 0; break; } chain.unshift(cur); const host = o.closest('.metric-sheet'); cur = host ? host.id : null; }
        if (!chain.length) { out[id] = 'no way in'; continue; }
        tab(opener(chain[0]).closest('.tab-panel').dataset.tab); await frame();
        for (const c of chain) { const o = opener(c, true); if (o) o.click(); await frame(); }
        window.scrollTo(0, 0); await frame();
        const on = document.querySelector('#metric-page > .metric-sheet');
        out[id] = on && on.id === id ? gapNow() : 'not reached';
      }
      return out;
    });
    const off = Object.keys(gaps).filter(k => gaps[k] !== 20);
    (Object.keys(gaps).length > 25 && !off.length)
      ? ok('every tab and page opens 20px under the top bar', Object.keys(gaps).length + ' screens, whatever their first element (Keren, 0.5.0)')
      : bad('every tab and page opens 20px under the top bar', JSON.stringify(off.reduce((o, k) => (o[k] = gaps[k], o), {})));
  }

  {
    await p.goto('file://' + url); await ready(p);
    await p.click('.tab-btn[data-tab="portfolio"]'); await settle(p);
    const home = await p.evaluate(() => [...document.querySelectorAll('#portfolio-home .trend-head')].map(h => h.textContent.trim()).join(' | '));
    await p.click('#portfolio-home [data-open="sheet-investment-clock"]'); await settle(p);
    const clock = await p.evaluate(() => {
      const s = document.querySelector('#metric-page #sheet-investment-clock');
      return s && !s.hidden ? { title: document.getElementById('topbar-title').textContent, now: s.querySelectorAll('.clock-q.now').length,
        today: [...s.querySelectorAll('.aux-stat')].filter(r => /today/.test(r.textContent)).length } : null;
    });
    await p.click('#topbar-back'); await settle(p);
    await p.click('#portfolio-home [data-open="sheet-all-weather"]'); await settle(p);
    const weights = await p.evaluate(() => [...document.querySelectorAll('#metric-page #sheet-all-weather .aux-stat b')].slice(0, 5).map(b => parseFloat(b.textContent)).reduce((a, b) => a + b, 0));
    (home === 'All Weather | Investment Clock | CustomComing soon' && clock && clock.title === 'Investment Clock' && clock.now === 1 && clock.today === 1 && weights === 100)
      ? ok('the Portfolio tab offers All Weather, the Investment Clock and Custom', 'the clock marks one phase, the weights sum to 100%')
      : bad('the Portfolio tab offers All Weather, the Investment Clock and Custom', JSON.stringify({ home, clock, weights }));
  }

  {
    await p.goto('file://' + url); await ready(p);
    const tabs = await p.evaluate(() => [...document.querySelectorAll('.tab-btn')].map(b => b.dataset.tab + ':' + b.textContent.trim()).join(' '));
    const gone = await p.evaluate(() => !document.querySelector('.all-row, #search-list, .cat-analysis, .timing[data-ind-tab]') && !document.getElementById('sheet-indicators'));
    (tabs === 'cycle:Cycle chart:Analysis analysis:Herstory portfolio:Portfolio' && gone)
      ? ok('the tab bar reads Cycle, Analysis, Herstory, Portfolio', 'no Search page, timing filter or category analysis')
      : bad('the tab bar reads Cycle, Analysis, Herstory, Portfolio', JSON.stringify({ tabs, gone }));
    await p.click('.tab-btn[data-tab="chart"]'); await settle(p); await sweep(p);
    const door = await p.evaluate(() => ({ first: document.getElementById('chart-home').firstElementChild.className,
      rows: [...document.querySelectorAll('#chart-home .insight-row')].map(b => b.dataset.indCat).join() }));
    await p.click('#chart-home button.dx-sys-head[data-open="sheet-find"]'); await settle(p);
    const all = await p.evaluate(() => ({ title: document.getElementById('topbar-title').textContent,
      shown: [...new Set([...document.querySelectorAll('#sheet-find .lab-sec:not([hidden])')].map(c => c.className.match(/cat-(\w+)/)[1]))].join() }));
    (all.title === 'Elements' && all.shown === 'weather,activity,mood,desire,circulation,stress')
      ? ok('the Elements head opens the Elements page on All', all.shown)
      : bad('the Elements head opens the Elements page on All', JSON.stringify(all));
    await p.goto('file://' + url); await ready(p); await p.click('.tab-btn[data-tab="chart"]'); await settle(p);
    await p.click('#chart-home .insight-row[data-ind-cat="weather"]'); await settle(p);
    const weather = await p.evaluate(() => ({ title: document.getElementById('topbar-title').textContent,
      shown: [...new Set([...document.querySelectorAll('#sheet-find .lab-sec:not([hidden])')].map(c => c.className.match(/cat-(\w+)/)[1]))].join(),
      subs: [...document.querySelectorAll('#sheet-find .lab-sec:not([hidden]) .lab-head')].map(h => h.querySelector('.ind-cat-name').textContent + ' ' + h.querySelector('.lab-n').textContent).join() }));
    (door.first === 'home-secs' && door.rows === 'weather,activity,mood,desire,circulation,stress' && weather.title === 'Elements' && weather.shown === 'weather' &&
     weather.subs === 'Economic Season 3,Market 1')
      ? ok('Elements lists the categories, each opening Elements on its own, grouped by subcategory', door.rows + '; ' + weather.subs)
      : bad('Elements lists the categories, each opening Elements on its own, grouped by subcategory', JSON.stringify({ door, weather }));
    await filt(p, '[data-pick-cat=""]'); await shut(p);
    const tab = await p.evaluate(() => {
      const h = document.getElementById('sheet-find'), rows = [...h.querySelectorAll('.lab-row[data-open]')];
      return { title: document.getElementById('topbar-title').textContent, first: h.firstElementChild.className,
        under: h.querySelector('.period-now b').textContent === 'AI Cycle' && !!h.querySelector('.lab-find .lab-filter.details-link'),
        chips: h.querySelectorAll('.rangebar, .lab-menu, .hist-bar').length, menu: !document.getElementById('detail-backdrop').classList.contains('show'),
        rows: rows.length, doors: rows.every(r => document.getElementById(r.dataset.open)),
        cats: [...h.querySelectorAll('.lab-cat')].map(b => b.dataset.indCat).join(), regularity: !!h.querySelector('.cat-cycle, [data-ind-cat="cycle"]') };
    });
    (tab.title === 'Elements' && tab.first === 'period-step' && tab.under && tab.chips === 0 && tab.menu && tab.rows > 15 && tab.doors &&
     tab.cats === 'weather,activity,mood,desire,circulation,stress' && !tab.regularity)
      ? ok('Elements opens on its period stepper, then its search box with the one filter, every reading and category a door', tab.rows + ' readings')
      : bad('Elements opens on its period stepper, then its search box with the one filter, every reading and category a door', JSON.stringify(tab));
    const shown = async q => {
      await p.fill('#sheet-find .lab-q', q); await settle(p);
      return p.evaluate(() => ({
        rows: [...document.querySelectorAll('#sheet-find .lab-item:not([hidden]) .lab-row > div:first-child > b')].map(b => b.textContent),
        cats: [...document.querySelectorAll('#sheet-find .lab-sec:not([hidden])')].map(c => c.className.match(/cat-(\w+)/)[1]),
        none: !document.querySelector('#sheet-find .search-none').hidden
      }));
    };
    const cpi = await shown('cpi'), mood = await shown('mood'), nil = await shown('zzzz'), back = await shown('');
    (cpi.rows.join() === 'Temperature' && mood.cats.join() === 'mood' && mood.rows.length === 4 && nil.none && !nil.rows.length && !back.none && back.cats.length >= 3)
      ? ok('the search box finds readings by name, measure and category', 'cpi → Temperature, mood → its ' + mood.rows.length + ' readings, none → a message')
      : bad('the search box finds readings by name, measure and category', JSON.stringify({ cpi, mood, nil, back }));
    await click(p, '#sheet-find .lab-filter'); await settle(p);
    const sheet = await p.evaluate(() => ({ open: document.getElementById('detail-backdrop').classList.contains('show'),
      heads: [...document.querySelectorAll('#detail-modal-body .ind-sec h5')].map(h => h.firstChild.textContent).join() }));
    await filt(p, '[data-pick-tier="abnormal"]');
    const risk = await p.evaluate(() => ({ label: document.querySelector('#sheet-find .lab-filter').textContent, on: (document.querySelector('#detail-modal-body [data-pick-tier].on') || {}).textContent,
      rows: [...document.querySelectorAll('#sheet-find .lab-item:not([hidden])')].map(r => r.classList.contains('t-abnormal')) }));
    await filt(p, '[data-pick-tier="all"]');
    (sheet.open && sheet.heads === 'Period,Category,Result' && risk.label === 'Risk' && /^Risk/.test(risk.on || '') && risk.rows.length > 0 && risk.rows.every(Boolean))
      ? ok('one filter sheet holds Period, Category and Result, and Result narrows the results to a tier', risk.rows.length + ' at risk')
      : bad('one filter sheet holds Period, Category and Result, and Result narrows the results to a tier', JSON.stringify({ sheet, risk }));
    const now = () => p.evaluate(() => ({ label: document.querySelector('#sheet-find .period-now b').textContent, cap: document.querySelector('#sheet-find .period-now small').textContent,
      cal: ['band', 'y', 'q'].map(c => document.querySelectorAll('#detail-modal-body button.cal-' + c).length),
      on: (document.querySelector('#detail-modal-body .period-cal [aria-pressed="true"]') || {}).textContent, items: document.querySelectorAll('#sheet-find .lab-item').length,
      sp: (document.querySelector('#sheet-find .lab-row[data-open="sheet-sign-market"] .lab-res b') || {}).textContent }));
    const sub = await now();
    await filt(p, '[data-pick-period="Dot-Com Cycle"]');
    const dot = await now();
    await filt(p, '[data-pick-period="1999"]');
    const y99 = await now();
    await filt(p, '[data-pick-period="1999 Q4"]');
    const q99 = await now();
    await shut(p);
    await click(p, '#sheet-find .period-arrow.back'); await settle(p);
    const stepBack = await now();
    await filt(p, '[data-pick-tier="borderline"]'); await filt(p, '[data-pick-reset]');
    const reset = await p.evaluate(() => ({ tier: document.querySelector('#detail-modal-body [data-pick-tier].on').dataset.pickTier, label: document.querySelector('#sheet-find .period-now b').textContent,
      show: document.querySelector('#detail-modal-body .ind-show').textContent, items: document.querySelectorAll('#sheet-find .lab-item:not([hidden])').length }));
    await click(p, '#detail-modal-body .ind-show'); await settle(p);
    const closed = await p.evaluate(() => !document.getElementById('detail-backdrop').classList.contains('show'));
    (sub.cal[0] > 15 && sub.cal[1] > 90 && sub.cal[2] > 350 && dot.label === 'Dot-Com Cycle' && dot.on === 'Dot-Com Cycle1991\u20132002' && dot.items > 10 &&
     y99.label === '1999' && y99.on === '1999' && y99.cap === 'Year 9 of the Dot-Com Cycle' && /^\+21\.0%/.test(y99.sp || '') && q99.label === 'Q4 1999' && q99.on === 'Q4' &&
     stepBack.label === 'Q3 1999' && reset.tier === 'all' && reset.label === 'AI Cycle' && reset.show === 'Show ' + reset.items + ' readings' && closed)
      ? ok('Elements moves by cycle, year or quarter on one season calendar or the stepper\u2019s arrows, and Reset brings it home', sub.cal[0] + ' cycles, ' + sub.cal[1] + ' years, ' + sub.cal[2] + ' quarters; 1999 S&P 500 ' + y99.sp)
      : bad('Elements moves by cycle, year or quarter on one season calendar or the stepper\u2019s arrows, and Reset brings it home', JSON.stringify({ sub, dot, y99, q99, stepBack, reset, closed }));
    await p.click('#sheet-find .cat-mood .lab-fold'); await settle(p);
    const folded = await p.evaluate(() => ({ title: document.getElementById('topbar-title').textContent,
      hid: !document.querySelector('#sheet-find .cat-mood .lab-item').offsetParent }));
    await p.click('#sheet-find .cat-mood .lab-fold'); await settle(p);
    await p.click('#sheet-find .lab-cat[data-ind-cat="mood"]'); await settle(p);
    const head = await p.evaluate(() => ({ title: document.getElementById('topbar-title').textContent,
      shown: [...new Set([...document.querySelectorAll('#sheet-find .lab-sec:not([hidden])')].map(c => c.className.match(/cat-(\w+)/)[1]))].join(),
      words: [...document.querySelectorAll('#sheet-find .lab-sec:not([hidden]) .lab-where')].map(w => w.textContent).join('|') }));
    await filt(p, '[data-pick-cat=""]'); await shut(p);
    const after = await p.evaluate(() => ({ title: document.getElementById('topbar-title').textContent,
      list: !document.getElementById('sheet-find').hidden }));
    (folded.title === 'Elements' && folded.hid && head.title === 'Elements' && head.shown === 'mood' && / \u00b7 /.test(head.words) && after.title === 'Elements' && after.list)
      ? ok('a category name narrows Elements to it, its verdict words beside each tier; its chevron only folds it')
      : bad('a category name narrows Elements to it, its verdict words beside each tier; its chevron only folds it', JSON.stringify({ folded, head, after }));
    await p.click('#sheet-find .lab-row[data-open="sheet-sign-confidence"]'); await settle(p);
    const fromChart = await p.evaluate(() => {
      const b = document.querySelector('#metric-page .trendpill.can-toggle'); if (!b) return null;
      b.click(); const box = b.closest('.page-chart'), fit = box.querySelector('.fit');
      return { bar: document.getElementById('topbar-title').textContent, on: box.classList.contains('trend-on') && !!fit && getComputedStyle(fit).display !== 'none' };
    });
    (fromChart && fromChart.bar === 'Confidence' && fromChart.on)
      ? ok('a reading in Cycle Statistics opens its page, and its trend button works', fromChart.bar)
      : bad('a reading in Cycle Statistics opens its page, and its trend button works', JSON.stringify(fromChart));
    await p.goto('file://' + url); await ready(p);
    await p.click('.tab-btn[data-tab="cycle"]'); await settle(p);
    await click(p, '#diagnosis [data-open="sheet-ai-insights"]'); await settle(p);
    const feel = await p.evaluate(() => {
      const card = document.querySelector('#sheet-ai-insights:not([hidden]) .trend-card');
      return { head: card && card.querySelector('.trend-head').textContent.trim(), opens: card && card.dataset.open };
    });
    await p.click('#topbar-back'); await settle(p);
    await p.click('.tab-btn[data-tab="chart"]'); await settle(p);
    await toInd(p, 'mood');
    await click(p, '#sheet-find .labs > .more-row'); await settle(p);
    const cyc = await p.evaluate(() => {
      const s = document.querySelector('#detail-modal-body .mood-curve'), card = document.querySelector('#detail-modal-body .hi-card .hi-name');
      return s && { labels: [...s.querySelectorAll('.mood-lab')].map(t => t.textContent).join('+'), calls: s.querySelectorAll('.mood-call').length,
        now: [...s.querySelectorAll('.mood-lab.now')].map(t => t.textContent), card: card && card.textContent,
        es: document.querySelectorAll('#sheet-find .hi-head, #detail-modal-body .hi-head').length + ':' +
          document.querySelectorAll('#detail-modal-body .hi-card').length };
    });
    await p.keyboard.press('Escape'); await settle(p);
    await p.click('#topbar-back'); await settle(p);
    await p.click('.tab-btn[data-tab="cycle"]'); await settle(p);
    (feel.head === 'AI Cycle' && !feel.opens && cyc && cyc.calls === 4 &&
     cyc.labels === 'OPTIMISM+EXCITEMENT+THRILL+EUPHORIA+ANXIETY+DENIAL+FEAR+DESPERATION+PANIC+DESPAIR+DEPRESSION+HOPE+OPTIMISM' &&
     cyc.now.length >= 1 && cyc.now.every(w => w === cyc.now[0]) && cyc.card.toUpperCase() === 'SHE\u2019S IN ' + cyc.now[0] &&
     cyc.es === '0:1')
      ? ok('AI Insights opens on the cycle\u2019s name, and Mood opens the cycle of market emotions, one emotion everywhere', feel.head + ' \u00b7 ' + cyc.now[0])
      : bad('AI Insights opens on the cycle\u2019s name, and Mood opens the cycle of market emotions, one emotion everywhere', JSON.stringify({ feel, cyc }));
    await click(p, '#season-wheel-hub-open'); await settle(p);
    const wx = await p.evaluate(() => {
      const page = document.querySelector('#sheet-find:not([hidden])');
      return page && { bar: document.getElementById('topbar-title').textContent.trim(),
        names: [...page.querySelectorAll('.lab-sec:not([hidden]) .lab-row > div:first-child > b')].map(n => n.textContent.trim()).sort().join('+'),
        modal: !document.getElementById('detail-modal') || document.getElementById('detail-modal').hidden !== false ? false : true };
    });
    await click(p, '#sheet-find:not([hidden]) .labs > .more-row'); await settle(p);
    if (wx) wx.cards = await p.evaluate(() => [...document.querySelectorAll('#detail-modal-body .hi-name')].map(n => n.textContent.trim()));
    await p.keyboard.press('Escape'); await settle(p);
    await p.click('#topbar-back'); await settle(p);
    (wx && wx.bar === 'Elements' && wx.names === 'Federal funds rate+Growth gap+S&P 500+Temperature' && !wx.modal &&
     wx.cards.indexOf('In the Body') > 0 && wx.cards.indexOf('The market this cycle') > 0 && wx.cards.indexOf('The Balance') > 0)
      ? ok('the season in the dial opens Elements on Weather, with the market and what the season means', wx.names + ' · ' + wx.cards.join(', '))
      : bad('the season in the dial opens Elements on Weather, with the market and what the season means', JSON.stringify(wx));
    await p.evaluate(() => document.querySelector('.dial-moon[data-q="0"]').dispatchEvent(new MouseEvent('click', { bubbles: true }))); await settle(p);
    const qhub = await p.evaluate(() => ({ date: document.getElementById('season-wheel-hub-date').textContent.trim(),
      ret: (document.querySelector('#season-wheel-hub-detail .hub-line b') || {}).textContent }));
    await click(p, '#season-wheel-hub-open'); await settle(p);
    const qs = await p.evaluate(() => { const h = document.getElementById('sheet-find');
      return { bar: document.getElementById('topbar-title').textContent.trim(), shown: !!h.offsetParent,
        label: h.querySelector('.period-now b').textContent,
        market: (h.querySelector('.lab-row[data-open="sheet-sign-market"] .lab-res b') || {}).textContent || '',
        where: (h.querySelector('.lab-row[data-open="sheet-sign-market"] .lab-where') || {}).textContent || '',
        modal: document.getElementById('detail-backdrop').classList.contains('show') }; });
    await p.click('#topbar-back'); await settle(p);
    (qs.bar === 'Elements' && qs.shown && qs.label === qhub.date && qhub.ret && qs.market.indexOf(qhub.ret) === 0 &&
     qs.where.endsWith(qhub.date.slice(-4)) && !qs.modal)
      ? ok('a tapped quarter opens Elements on that quarter, the year\u2019s S&P 500 one number with the dial', qhub.date + ' \u00b7 ' + qhub.ret)
      : bad('a tapped quarter opens Elements on that quarter, the year\u2019s S&P 500 one number with the dial', JSON.stringify({ qhub, qs }));
    await p.goto('file://' + url); await ready(p);
    await openPage(p, url, 'sheet-metric-valuation');
    const headCol = await p.evaluate(() => {
      const box = document.createElement('div'), dot = document.createElement('span');
      box.className = 'cat-mood'; dot.style.color = 'var(--text-secondary)'; box.appendChild(dot); document.body.appendChild(box);
      const want = getComputedStyle(dot).color; box.remove();
      const mark = document.querySelector('#metric-page .bh-mark');
      return { got: mark && getComputedStyle(mark).color, want, worn: !!document.querySelector('#metric-page .metric-sheet.cat-mood') };
    });
    headCol.got === headCol.want && headCol.worn
      ? ok('a reading\u2019s page wears its category, its head\u2019s mark grey', headCol.got)
      : bad('a reading\u2019s page wears its category, its head\u2019s mark grey', JSON.stringify(headCol));
    const square = () => p.evaluate(() => [...document.querySelectorAll('.rangebar, .range-seg.on, .search-field, .cycsel-btn, .more-row, .contact-send, .trendpill, .lab-filter')]
      .filter(e => e.offsetParent && e.getBoundingClientRect().height).map(e => ({ c: e.className.split(' ')[0], ok: parseFloat(getComputedStyle(e).borderTopLeftRadius) >= e.getBoundingClientRect().height / 2 - 0.5 })));
    const seen = [...await square()];
    await goHome(p, url); await p.click('.tab-btn[data-tab="chart"]'); await settle(p); seen.push(...await square());
    await openFind(p); seen.push(...await square());
    await goHome(p, url);
    const kinds = [...new Set(seen.map(s => s.c))], sharp = [...new Set(seen.filter(s => !s.ok).map(s => s.c))];
    (kinds.length >= 5 && !sharp.length)
      ? ok('every selection bar, search field and button is fully rounded', kinds.join(', ') + ' (Keren, 0.8.5)')
      : bad('every selection bar, search field and button is fully rounded', JSON.stringify({ kinds, sharp }));
    const about = await p.evaluate(() => {
      const sheet = document.getElementById('sheet-book');
      return { title: sheet.querySelector('.topbar-title').textContent, seasons: sheet.querySelectorAll('#seasons-rows .lag-row').length,
        framework: sheet.querySelectorAll('#framework-rows .lag-row').length, cycle: /The Cycle Model/.test(sheet.textContent),
        row: /About Gyneconomy/.test(document.querySelector('[data-sheet="book"]').textContent),
        line: /completed \d+ cycles, \d+\.\d years long on average/.test(document.getElementById('cycle-model-line').textContent),
        titles: [...sheet.querySelectorAll('.menu-section')].every(h => h.parentElement.classList.contains('model-card')),
        idea: (() => { const shown = () => [...document.querySelectorAll('#idea-prose p')].filter(x => !x.hidden).length, a = shown();
          document.getElementById('idea-more').click(); const b = shown(); document.getElementById('idea-more').click(); return a + '/' + b + '/' + shown(); })() };
    });
    (about.title === 'About Gyneconomy' && about.seasons === 6 && about.framework > 1 && about.cycle && about.row && about.titles && about.line && about.idea === '1/4/1')
      ? ok('About Gyneconomy carries the models the Content tab held', about.seasons + ' seasons, ' + (about.framework - 1) + ' signs')
      : bad('About Gyneconomy carries the models the Content tab held', JSON.stringify(about));
    const splash = await p.evaluate(() => {
      const solid = c => { const m = c.match(/[\d.]+/g); return !!m && (m.length < 4 || +m[3] > 0.9); };
      const body = /radial-gradient/.test(getComputedStyle(document.body, '::before').backgroundImage);
      const covers = [...document.querySelectorAll('body *')].filter(el => { const cs = getComputedStyle(el);
        return cs.position === 'fixed' && ['top', 'right', 'bottom', 'left'].every(k => cs[k] === '0px') && solid(cs.backgroundColor) && !/radial-gradient/.test(cs.backgroundImage); });
      return { body, bare: covers.map(el => el.id || el.className) };
    });
    splash.body && !splash.bare.length
      ? ok('the apricot splash shows behind every page and sheet')
      : bad('the apricot splash shows behind every page and sheet', JSON.stringify(splash));
  }

  {
    const frame = () => p.evaluate(() => {
      const cv = document.getElementById('cycle-view'), page = cv.parentElement, cs = getComputedStyle(page), r = cv.getBoundingClientRect();
      return { kids: [...page.children].filter(e => e.offsetParent).map(e => e.id).join(), flow: cs.display + ' ' + cs.flexDirection + ' ' + cs.rowGap,
        gap: Math.round(document.getElementById('diagnosis').getBoundingClientRect().top - r.bottom), x: Math.round(r.left), w: Math.round(r.width) };
    });
    await p.evaluate(() => document.querySelector('.tab-btn[data-tab="cycle"]').click());
    await settle(p);
    const nowFrame = await frame();
    await p.evaluate(() => { const b = document.querySelector('.tab-btn[data-tab="analysis"]'); if (b) b.click(); });
    await settle(p);
    const cc = await p.evaluate(() => {
      const row = [...document.querySelectorAll('.era-row')].find(x => /Housing/.test(x.textContent));
      if (!row) return null; row.click(); return true;
    });
    await settle(p);
    const view = cc && await p.evaluate(() => {
      const cal = document.getElementById('calendar-cycle');
      return { dial: !!cal.querySelector('#cycle-view .season-card'), today: !!cal.querySelector('#today-analysis'),
        tiles: [...cal.querySelectorAll('#today-analysis [data-open]:not(.trend-card):not(.lab-row)')].filter(x => x.offsetParent && !x.closest('#diagnosis')).length,
        closed: /Closed/.test(cal.querySelector('#cycle-view').innerText),
        bar: document.getElementById('topbar-title').textContent.trim() };
    });
    const pastFrame = cc && await frame();
    await sweep(p);
    (pastFrame && JSON.stringify(pastFrame) === JSON.stringify(nowFrame) && nowFrame.kids === 'cycle-view,today-analysis' && nowFrame.gap > 0)
      ? ok('a past cycle stacks like the current one', nowFrame.kids + ' · ' + nowFrame.flow + ' · dial to diagnosis ' + nowFrame.gap + 'px')
      : bad('a past cycle stacks like the current one', JSON.stringify({ nowFrame, pastFrame }));
    (view && view.dial && view.today && view.tiles === 0 && view.closed && view.bar === 'Housing Cycle')
      ? ok('a closed cycle opens on the Cycle page itself', view.bar)
      : bad('a closed cycle opens on the Cycle page itself', JSON.stringify(view));

    await p.evaluate(() => { const d = document.createElement('button'); d.dataset.open = 'sheet-metric-valuation'; d.dataset.title = 'Shiller CAPE'; document.getElementById('today-analysis').appendChild(d); d.click(); d.remove(); });
    await settle(p);
    const picked = await p.evaluate(() => (document.querySelector('#metric-page .hist-controls') || {}).textContent || '');
    const bar = () => p.evaluate(() => (document.getElementById('topbar-back').hidden ? '' : '← ') + document.getElementById('topbar-title').textContent);
    const trail = [];
    for (let i = 0; i < 2; i++) { await p.evaluate(() => document.getElementById('topbar-back').click()); await settle(p); trail.push(await bar()); }
    (trail.join(' | ') === '← Housing Cycle | Herstory')
      ? ok('back walks out of a past cycle one page at a time', trail.join(' | '))
      : bad('back walks out of a past cycle one page at a time', trail.join(' | '));
    await p.evaluate(() => document.querySelector('.tab-btn[data-tab="cycle"]').click());
    await settle(p);
    const back = await p.evaluate(() => ({
      home: document.querySelector('.tab-panel[data-tab="cycle"] #today-analysis') !== null &&
            document.querySelector('.tab-panel[data-tab="cycle"] #cycle-view') !== null,
      stale: /Closed/.test(document.getElementById('cycle-view').innerText)
    }));
    (/Housing/.test(picked) && back.home && !back.stale)
      ? ok('the pages follow the cycle, and today comes back', 'picker: Housing')
      : bad('the pages follow the cycle, and today comes back', JSON.stringify({ picked, back }));

    await p.evaluate(() => { const b = document.querySelector('.tab-btn[data-tab="analysis"]'); if (b) b.click(); });
    await settle(p);
    const noRow = await p.evaluate(() => {
      const row = [...document.querySelectorAll('.era-row')].find(x => /Today/.test(x.textContent));
      if (!row) return 'no ongoing row';
      row.click(); return null;
    });
    await settle(p);
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
    document.querySelector('.tab-btn[data-tab="chart"]').click(); document.querySelector('#chart-home button.dx-sys-head[data-open="sheet-find"]').click();
    const fig = id => { const b = document.querySelector('#sheet-find .lab-row[data-open="' + id + '"] .lab-res b'); return b ? b.textContent.trim() : null; };
    return { fgNum: fig('sheet-sign-sentiment'), yld: fig('sheet-sign-pressure') };
  };
  const loadWith = async (seed) => {
    const c = await b.newContext({ viewport: { width: 414, height: 1000 } });
    const g = await c.newPage();
    const errs = watch(g, 'live cache');
    if (seed !== null) await g.addInitScript(x => { try { localStorage.setItem('gyn.live', x); } catch (e) {} }, seed);
    await g.goto('file://' + url); await ready(g);
    const r = await g.evaluate(readLive);
    await c.close();
    return { r, errs };
  };

  const BAD_SEED = JSON.stringify({ fedFunds: { kind: 'object', lo: '3.75', hi: 4 }, yieldCurve: { kind: 'series', rows: [{ m: '10Y', y: 'x' }] },
                                     vixClose: { kind: 'scalar', value: 33.3, asOf: '<b>2026-09-30</b>' } });
  const badSeed = await loadWith(BAD_SEED);
  (badSeed.r.yld && badSeed.r.fgNum && !badSeed.errs.length && badSeed.r.fgNum !== '33.3')
    ? ok('a malformed cache falls back to the literals and the app still builds')
    : bad('a malformed cache falls back to the literals and the app still builds', JSON.stringify(badSeed.r) + ' ' + badSeed.errs.join(' | '));


  {
    const c = await b.newContext({ viewport: { width: 414, height: 1000 } });
    const g = await c.newPage();
    watch(g, 'repaint');
    await g.goto('file://' + url); await ready(g);

    const seam = await g.evaluate(() => !!(window.__GYN && window.__GYN.applyLive));
    if (!seam) bad('repaint seam present', 'window.__GYN.applyLive missing');
    await c.close();
  }

  {
    const c = await b.newContext({ viewport: { width: 414, height: 1000 } });
    const g = await c.newPage();
    watch(g, 'steps');
    await g.goto('file://' + url); await ready(g);

    const inv = await g.evaluate(() => {
      const G = window.__GYN;
      if (!G || !G.repeatable) return null;
      return { kinds: G.steps.reduce((a, s) => (a[s.kind] = (a[s.kind] || 0) + 1, a), {}) };
    });

    if (!inv) bad('registry invariant', 'no registry');
    else {
      const k = inv.kinds;
      ((k.mixed || 0) <= 2)
        ? ok('no more than two mixed steps', JSON.stringify(k))
        : bad('no more than two mixed steps', JSON.stringify(k) + ' \u2014 split a mixed step into a derive and a render');
    }

    const roster = await g.evaluate(() => {
      const G = window.__GYN, R = G.ROSTER, step = G.steps.filter(s => s.name === 'checkRoster')[0];
      if (!R || !step) return null;
      document.querySelector('.tab-btn[data-tab="chart"]').click(); document.querySelector('#chart-home button.dx-sys-head[data-open="sheet-find"]').click();
      const cards = [...document.querySelectorAll('#sheet-find .lab-row[data-open]')].map(c => c.dataset.open).sort();
      const warned = [], warn = console.warn;
      console.warn = m => warned.push(String(m));
      R.push(Object.assign({}, R[0], { group: R.filter(r => r.group)[0].group, live: ['nowhere'] }));
      try { step.fn(); } finally { R.pop(); console.warn = warn; }
      return { ids: R.map(r => r.id), cards, warned: warned.join(' ') };
    });
    if (!roster) bad('the roster is every reading on Elements', 'no GYN.ROSTER or no checkRoster step');
    else {
      JSON.stringify(roster.ids.slice().sort()) === JSON.stringify(roster.cards)
        ? ok('the roster is every reading on Elements', roster.ids.length + ' readings')
        : bad('the roster is every reading on Elements', 'roster ' + roster.ids.join(',') + ' / cards ' + roster.cards.join(','));
      ['declared twice', 'is split', 'no live reading nowhere'].every(w => roster.warned.indexOf(w) !== -1)
        ? ok('checkRoster refuses a reading declared twice, a split group and an unknown live name')
        : bad('checkRoster refuses a reading declared twice, a split group and an unknown live name', roster.warned || 'no warning');
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
    watch(g, 'site');
    await g.goto(origin + '/'); await ready(g);
    await g.waitForFunction(() => { try { return !!JSON.parse(localStorage.getItem('gyn.live') || 'null'); } catch (e) { return false; } },
      null, { timeout: 5000 }).catch(() => bad('the site feed reaches storage', 'gyn.live was never written'));
    await settle(g);

    await g.click('.tab-btn[data-tab="chart"]'); await settle(g); await openFind(g);
    const doors = sheet => g.evaluate(s => [...document.querySelectorAll('#sheet-find .lab-row[data-open="' + s + '"]')].map(d =>
      d.querySelector('.lab-res b').textContent.trim() + '|' + d.querySelector('.lab-where').textContent.trim()), sheet);
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
    (cape.length >= 1 && cape.every(t => /^50\.5/.test(t)))
      ? ok('site feed moves a scalar on Elements', cape.join(' · '))
      : bad('site feed moves a scalar on Elements', JSON.stringify(cape));
    (ff.length >= 1 && ff.every(t => /^1\.25/.test(t)) && ff.some(t => /Easing/.test(t)) && ff.every(t => !/Tightening/.test(t)))
      ? ok('site feed moves an object doc, word and all', ff.join(' · '))
      : bad('site feed moves an object doc, word and all', JSON.stringify(ff));
    (cache.capeValue && cache.capeValue.value === 50.5 && cache.fedFunds && cache.fedFunds.lo === 1.25 && !('_meta' in cache))
      ? ok('site feed writes the cache, without _meta')
      : bad('site feed writes the cache, without _meta', JSON.stringify(cache).slice(0, 200));
  }

  await keyboardAndLayers(b, url);

  if (code) {
    const undeclared = [...seen].filter(c => !code.includes(c) && !DYNAMIC_CLASS.test(c));
    undeclared.length ? bad('every class built at run time is declared', undeclared.slice(0, 12).join(', ') + ' \u2014 add to DYNAMIC_CLASS in tools/hygiene.js')
                      : ok('every class built at run time is declared', seen.size + ' classes on the pages the suite opened');
  }

  noise.length ? bad('no errors or warnings anywhere', [...new Set(noise)].slice(0, 8).join(' | '))
               : ok('no errors or warnings anywhere', 'page errors and console warnings on every page the suite opened');
  await b.close();

  const fail = results.filter(r => !r[0]);
  const w = Math.max(...results.map(r => r[1].length));
  for (const [good, name, detail] of results)
    console.log((good ? '  ok   ' : '  FAIL ') + name.padEnd(w + 2) + detail);
  console.log('\n' + (results.length - fail.length) + '/' + results.length + ' passed');
  process.exit(fail.length ? 1 : 0);
})();

async function keyboardAndLayers(b, url) {
  const g = await b.newPage({ viewport: { width: 414, height: 1000 } });
  watch(g, 'keyboard');
  const at = () => g.evaluate(() => {
    const a = document.activeElement;
    return { id: a.id, open: a.getAttribute('data-open'), head: a.getAttribute('data-head-more'),
             inMenu: !!a.closest('.bh-menu'), inModal: !!a.closest('.detail-modal') };
  });
  const state = () => g.evaluate(() => ({ page: !document.getElementById('metric-page').hidden,
    modal: document.getElementById('detail-backdrop').classList.contains('show'),
    menu: [...document.querySelectorAll('.bh-menu')].some(m => !m.hidden) }));

  if (await openPage(g, url, 'sheet-sign-pressure')) {
    await g.focus('#metric-page .bh-more[data-head-more]'); await g.keyboard.press('Enter'); await settle(g);
    const first = await at();
    await g.keyboard.press('Escape'); await settle(g);
    const s1 = await state(), back = await at();
    (first.inMenu && !s1.menu && s1.page && back.head)
      ? ok('Escape closes the head menu alone and returns focus to its ⋯', back.head)
      : bad('Escape closes the head menu alone and returns focus to its ⋯', JSON.stringify({ first, s1, back }));

    await g.keyboard.press('Enter'); await settle(g);
    await g.evaluate(() => [...document.querySelectorAll('#metric-page .bh-opt')].filter(x => x.offsetParent)[0].click());
    await settle(g);
    const m1 = await state(), onClose = await at();
    for (let i = 0; i < 6; i++) await g.keyboard.press('Tab');
    const trapped = await at();
    await g.keyboard.press('Escape'); await settle(g);
    const m2 = await state(), after = await at();
    (m1.modal && onClose.id === 'detail-modal-close' && trapped.inModal && !m2.modal && m2.page && after.head)
      ? ok('Escape closes the (i) over a page and leaves the page open; Tab stays in the (i)')
      : bad('Escape closes the (i) over a page and leaves the page open; Tab stays in the (i)', JSON.stringify({ m1, onClose, trapped, m2, after }));
    const reach = await g.evaluate(() => { const c = document.getElementById('detail-modal-close'); c.focus(); return document.activeElement === c; });
    !reach ? ok('the closed (i) is out of the tab order')
           : bad('the closed (i) is out of the tab order', 'its Close button still takes focus');
  } else bad('Escape closes the head menu alone and returns focus to its ⋯', 'no door to Pressure');

  if (await openPage(g, url, 'sheet-metric-temp')) {
    const host = await g.evaluate(() => { const h = [...document.querySelectorAll('#metric-page [role="group"][tabindex="0"]')].filter(x => x.offsetParent)[0];
      if (!h) return null; h.focus(); return h.id || h.className; });
    await g.keyboard.press('End'); await g.keyboard.press('ArrowLeft'); await settle(g);
    const said = await g.evaluate(() => { const a = document.activeElement, l = a.querySelector('[aria-live]');
      return { on: a.getAttribute('role') === 'group', text: l ? l.textContent.trim() : '', col: !!a.querySelector('.hcol.on') }; });
    (host && said.on && said.text.length > 3)
      ? ok('a history chart reads its values from the arrow keys', said.text.slice(0, 40))
      : bad('a history chart reads its values from the arrow keys', JSON.stringify({ host, said }));
  } else bad('a history chart reads its values from the arrow keys', 'no door to Temperature');

  await g.goto('file://' + url); await ready(g);
  const card = await g.evaluate(() => {
    const c = [...document.querySelectorAll('.tab-panel[data-tab="cycle"] [data-open="sheet-find"]')].filter(x => x.offsetParent)[0];
    if (!c) return null; c.focus(); return c.getAttribute('data-open');
  });
  await g.keyboard.press('Enter'); await settle(g);
  const onOpen = await at();
  await g.keyboard.press('Escape'); await settle(g);
  const onBack = await at();
  (card && onOpen.id === 'topbar-title' && onBack.open === card)
    ? ok('a page takes focus to its title and gives it back to its card', card)
    : bad('a page takes focus to its title and gives it back to its card', JSON.stringify({ card, onOpen, onBack }));

  if (await openPage(g, url, 'sheet-metric-temp')) {
    const title = () => g.evaluate(() => ({ t: document.getElementById('topbar-title').textContent, page: !document.getElementById('metric-page').hidden }));
    const steps = [await title()];
    for (let i = 0; i < 3 && steps[steps.length - 1].page; i++) { await g.goBack(); await settle(g); steps.push(await title()); }
    const last = steps[steps.length - 1], app = await g.evaluate(() => !!window.__GYN);
    (steps.length > 2 && !last.page && app && steps[1].t !== steps[0].t)
      ? ok('the browser Back steps out of a page, one page at a time, and stays in the app', steps.map(x => x.t).join(' \u2192 '))
      : bad('the browser Back steps out of a page, one page at a time, and stays in the app', JSON.stringify({ steps, app }));
  } else bad('the browser Back steps out of a page, one page at a time, and stays in the app', 'no door to Temperature');
  await g.goto('file://' + url); await ready(g);

  const hub = () => g.evaluate(() => ({ date: document.getElementById('season-wheel-hub-date').textContent,
    said: document.getElementById('season-wheel-live').textContent }));
  const today = await hub();
  await g.focus('#season-wheel-hub-open'); await g.keyboard.press('ArrowLeft'); await settle(g);
  const parked = await hub();
  await g.keyboard.press('End'); await settle(g);
  const home = await hub();
  (/Q\d/.test(parked.date) && parked.date !== today.date && /Q\d/.test(parked.said) && home.date === today.date)
    ? ok('ArrowLeft on the hub parks a quarter and says it', parked.said)
    : bad('ArrowLeft on the hub parks a quarter and says it', JSON.stringify({ today, parked, home }));

  await g.focus('.tab-btn.active'); await g.keyboard.press('ArrowRight'); await settle(g);
  const tab = await g.evaluate(() => { const a = document.activeElement;
    return { tab: a.getAttribute('data-tab'), sel: a.getAttribute('aria-selected'), stops: [...document.querySelectorAll('.tab-btn')].filter(t => t.tabIndex === 0).length }; });
  (tab.sel === 'true' && tab.tab !== 'cycle' && tab.stops === 1)
    ? ok('the tabs move with the arrow keys, one tab stop', tab.tab)
    : bad('the tabs move with the arrow keys, one tab stop', JSON.stringify(tab));
  await g.close();

  const n = await b.newPage({ viewport: { width: 320, height: 800 } });
  watch(n, 'narrow');
  const wide = await openPage(n, url, 'sheet-sign-desire') ? await n.evaluate(() => document.documentElement.scrollWidth) : -1;
  (wide > 0 && wide <= 320)
    ? ok('the Desire page fits a 320px screen', wide + 'px')
    : bad('the Desire page fits a 320px screen', wide + 'px');
  await n.close();

  const ph = await b.newPage({ viewport: { width: 393, height: 852 }, isMobile: true, hasTouch: true });
  watch(ph, 'iphone');
  await ph.goto('file://' + url); await ready(ph);
  await ph.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight)); await settle(ph);
  const end = await ph.evaluate(() => {
    const bar = document.querySelector('.tabbar').getBoundingClientRect(), panel = document.querySelector('.tab-panel:not([hidden])');
    const last = Math.max(...[...panel.children].filter(e => e.getClientRects().length).map(e => e.getBoundingClientRect().bottom));
    return { gap: bar.top - last, want: parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--gap-top')) };
  });
  (Math.abs(end.gap - end.want) < 1)
    ? ok('on a phone the page ends one top gap above the tab bar', end.gap + 'px')
    : bad('on a phone the page ends one top gap above the tab bar', JSON.stringify(end));
  await ph.close();
}
