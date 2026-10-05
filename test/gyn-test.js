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
const settle = pg => pg.evaluate(() => new Promise(done => requestAnimationFrame(() => requestAnimationFrame(() =>
  Promise.all(document.getAnimations().filter(a => a.effect && isFinite(a.effect.getComputedTiming().endTime)).map(a => a.finished.catch(() => null))).then(() => done())))));
const ready = pg => pg.waitForFunction(() => window.__GYN && document.getElementById('diagnosis')).then(() => settle(pg));

async function goHome(p, url) {
  const open = () => p.evaluate(() => !!document.querySelector('#metric-page:not([hidden]), .cat-sheet:not([hidden]), #detail-backdrop.show, .more-menu.in'));
  if (await p.evaluate(() => !!window.__GYN).catch(() => false))
    for (let i = 0; i < 6 && await open(); i++) { await p.keyboard.press('Escape'); await settle(p); }
  if (!await p.evaluate(() => !!window.__GYN).catch(() => false) || await open()) { await p.goto('file://' + url); await ready(p); }
}
async function openPage(p, url, sheet) {
  await goHome(p, url);
  const home = s => p.evaluate(s => { const c = document.querySelector('.cat-sheet .cat-item[data-open="' + s + '"]');
    return c ? c.closest('.cat-sheet').id : null; }, s);
  const cat = await home(sheet), up = cat && cat.indexOf('sheet-grp-') === 0 ? await home(cat) : null;
  const first = up || cat, shown = s => p.evaluate(s => [...document.querySelectorAll('[data-open="' + s + '"]')].some(x => x.offsetParent !== null), s);
  if (first && !await shown(first)) { await p.click('.tab-btn[data-tab="chart"]'); await settle(p); }
  if (up && !await click(p, '[data-open="' + up + '"]')) return false;
  if (up) await settle(p);
  if (!cat || !await click(p, (up ? '.cat-item' : '') + '[data-open="' + cat + '"]')) return false;
  await settle(p);
  if (!await click(p, '.cat-item[data-open="' + sheet + '"]')) return false;
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
  const READINGS_ON_SCREEN = await p.evaluate(() => [...document.querySelectorAll('.cat-sheet .cat-item[data-open]:not([data-preview])')]
    .map(c => [c.dataset.open, c.querySelector('.ci-name').textContent.trim()]));
  const tall = {}, notes = {}, gaps = {};
  const onPage = {}, pills = {};
  for (const [sheet, label] of READINGS_ON_SCREEN) {
    if (!await openPage(p, url, sheet)) { bad('page ' + label, 'no door'); continue; }
    await sweep(p);
    if (NO_HISTORY.includes(sheet)) continue;
    const hid = await p.evaluate(() => { const b = document.querySelector('#metric-page .bh-more[data-head-more]'); return b ? b.dataset.headMore : ''; });
    if (CARD_ON_PAGE.includes(sheet)) onPage[label] = await p.evaluate(s => {
      const card = document.querySelector('.cat-item[data-open="' + s + '"] .ci-value').firstChild.textContent.trim();
      return document.getElementById('metric-page').textContent.indexOf(card) !== -1 ? null : card; }, sheet);
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
        trend: !!mp.querySelector('.trendpill'), headBtn: !!btn,
        tall: svg ? Math.round(svg.getBoundingClientRect().height) : 0, title: btn ? btn.closest('.band-head').querySelector('.bh-title').textContent : '',
        ctlOutside: (() => { const bar = mp.querySelector('.hist-bar');
          return !!bar && !bar.closest('.page-chart, .spread-history'); })(),
        frame: q('.bt-frame'), grid: q('.bt-grid'), vgrid: q('.bt-vgrid'), yl: q('.bt-yl'), xl: q('.bt-xl'),
        mark: !!(btn && btn.closest('.band-head').querySelector('.bh-mark svg')), chip: !!mp.querySelector('.timing-row'),
        above: (() => { const bar = mp.querySelector('.hist-bar');
          return bar ? [...mp.querySelectorAll('.card-head, .metric-row')].filter(e => e.compareDocumentPosition(bar) & 4).length : 0; })(),
        boxes: mp.querySelectorAll('.highlights').length,
        gap: (() => { const bar = mp.querySelector('.hist-bar'), top = document.querySelector('.wrap > .topbar');
          return bar && top ? Math.round(bar.getBoundingClientRect().top - top.getBoundingClientRect().bottom) : null; })(),
      };
    }, hid);
    const miss = [];
    if (!r.head) miss.push('head'); if (!r.ctl) miss.push('control'); if (!r.trend) miss.push('trend');
    if (!r.headBtn) miss.push('⋯'); if (!r.ctlOutside) miss.push('control outside the band');
    if (!r.frame) miss.push('frame'); if (!r.grid) miss.push('gridlines');
    if (!r.vgrid) miss.push('vertical rules'); if (!r.yl) miss.push('y labels'); if (!r.xl) miss.push('x labels');
    if (!r.mark) miss.push('the head\u2019s mark'); if (!r.chip) miss.push('the timing chip');
    if (r.above) miss.push('the bar first (a card head sits above it)'); if (r.boxes > 1) miss.push('a single Insights box (' + r.boxes + ')');
    miss.length ? bad('page ' + label, 'missing ' + miss.join(', ')) : ok('page ' + label, r.title);
    tall[label] = r.tall; gaps[label] = r.gap;
    pills[label] = await p.evaluate(() => {
      const b = document.querySelector('#metric-page .trendpill.can-toggle');
      if (!b) return document.querySelector('#metric-page .trendpill.none') ? 'unavailable' : 'no button';
      b.click();
      const box = b.closest('.page-chart, .spread-history'), fit = box && box.querySelector('.fit');
      const on = b.getAttribute('aria-pressed') === 'true' && box.classList.contains('trend-on') && !!fit && getComputedStyle(fit).display !== 'none';
      b.click(); return on ? 'line' : 'dead';
    });
    notes[label] = await p.evaluate(() => {
      const body = document.getElementById('detail-modal-body'), shut = document.getElementById('detail-modal-close'), out = [];
      document.querySelectorAll('#metric-page [data-detail-idx]').forEach(b => { b.click(); out.push(body.innerText); shut.click(); });
      return out.join('\n');
    });

    if (r.headBtn) {
      await p.evaluate(h => document.querySelector('.bh-more[data-head-more="' + h + '"]').click(), hid);
      await settle(p);
      const note = await p.evaluate(h => {
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
    const lines = Object.keys(pills).filter(k => pills[k] === 'line'), dead = Object.keys(pills).filter(k => !/^(line|unavailable)$/.test(pills[k]));
    (lines.length >= 12 && !dead.length)
      ? ok('every trend button draws its line', lines.length + ' lines · unavailable under eight points: ' + Object.keys(pills).filter(k => pills[k] === 'unavailable').join(', '))
      : bad('every trend button draws its line', JSON.stringify(pills));
    const gs = [...new Set(Object.values(gaps))];
    (gs.length === 1 && gs[0] > 0)
      ? ok('every page opens with its bar at one distance under the top bar', gs[0] + 'px on ' + Object.keys(gaps).length + ' pages (Keren, V674)')
      : bad('every page opens with its bar at one distance under the top bar', JSON.stringify(gaps));
    const hs = Object.values(tall);
    (hs.length === READINGS_ON_SCREEN.length - NO_HISTORY.length && Math.min(...hs) >= 330 && Math.max(...hs) - Math.min(...hs) <= 5)
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
      const view = () => gp.evaluate(() => {
        const vis = id => { const e = document.getElementById(id); return !!e && !e.hidden && !!e.offsetParent; };
        return { title: (document.querySelector('#pressure-head .bh-title') || {}).textContent, ylm: vis('ylm-shell'), spread: vis('spread-history-shell'),
                 level: /risk-free loan/i.test(document.getElementById('pressure-insights').textContent),
                 slope: /un-inversion/i.test(document.getElementById('pressure-insights').textContent),
                 boxes: document.querySelectorAll('#sheet-sign-pressure .insights').length, cols: document.querySelectorAll('#spread-history-svg .hzn-col').length };
      });
      if (!(await gp.evaluate(() => !!document.querySelector('.bh-grp-row'))))
        await gp.evaluate(() => document.querySelector('.bh-more[data-head-more="pressure-range"]').click());
      await gp.click('[data-head-grp="spreads"]'); await settle(gp);
      await gp.click('[data-hzn-spread="2y"]'); await settle(gp);
      const sp = await view();
      await gp.evaluate(() => document.querySelector('.bh-more[data-head-more="pressure-range"]').click()); await settle(gp);
      await gp.click('[data-head-grp="levels"]'); await settle(gp);
      await gp.click('[data-ylm-mat="10y"]'); await settle(gp);
      const lv = await view();
      (root.join() === 'levels,spreads' && /10Y \u2212 2Y Treasury Spread/.test(sp.title || '') && sp.spread && !sp.ylm && sp.slope && !sp.level && sp.cols > 10 && sp.boxes === 1 && lv.boxes === 1 &&
       /10-Year/.test(lv.title || '') && lv.ylm && !lv.spread && lv.level && !lv.slope)
        ? ok('Pressure holds the Treasury spreads under its \u22ef menu', sp.title + ' \u00b7 ' + lv.title)
        : bad('Pressure holds the Treasury spreads under its \u22ef menu', JSON.stringify({ root, sp, lv }));
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
      return d ? { kicker: (document.getElementById('cycle-kicker-name') || {}).textContent, visible: !!d.offsetParent, title: (d.querySelector('.trend-head') || {}).textContent.trim(), lead: d.querySelectorAll('[data-open="sheet-cat-mood"] .trend-text').length,
                   story: [...d.querySelectorAll('[data-open="sheet-cat-mood"] .trend-text')].map(x => /^[A-Z][^.]+\. Mrs\. Market .+\.$/.test(x.textContent)).join() === 'true',
                   told: (() => { document.querySelector('#sheet-cat-mood .cat-more .more-row').click();
                     const b = document.getElementById('detail-modal-body'), t = b.querySelectorAll('.hi-card').length + ':' +
                       (/([A-Z][\w\-]*(?: [A-Z][\w\-]*)* Cycle), \d{4}\u2013/.exec((b.querySelector('.hi-card p') || {}).textContent || '') || [])[1];
                     document.getElementById('detail-modal-close').click(); return t; })(),
                   doors: d.querySelectorAll('[data-open]:not([data-open="sheet-cat-mood"]), [data-chart-cycle]').length,
                   cards: document.querySelectorAll('.cat-row').length,
                   years: yrs ? [...yrs.querySelectorAll('.dx-year-n')].map(n => n.textContent.trim()).filter(t => /^\d{4}$/.test(t)).map(Number) : [],
                   opens: yrs ? yrs.querySelectorAll('button.dx-year[data-detail-idx]').length : 0,
                   after: yrs ? [...yrs.querySelectorAll('.dx-year-n')].some(n => n.textContent.trim() === 'After') : false,
                   boxes: [...d.children].map(c => c.matches('[data-open="sheet-ai-insights"]') ? 'ai' : c.classList.contains('trend-card') ? 'trend' : c.classList.contains('dx-sys') ? 'sys' : c.querySelector('.labs') ? 'chart' : c.className).join() } : null;
    });
    const today = await read();
    await sweep(p);
    (today && today.visible && today.title === 'AI Insights' && today.lead === 0 && today.told === '1:AI Cycle' && today.cards === 0 &&
     today.boxes === 'ai,trend,sys' && today.doors === 2 && !today.after && today.kicker === 'AI Cycle')
      ? ok('the dial reads its cycle, and under it AI Insights, Cycle Statistics, then the cycle year by year', today.title)
      : bad('the dial reads its cycle, and under it AI Insights, Cycle Statistics, then the cycle year by year', JSON.stringify(today));
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
    (yearRun(today.years) && today.opens === today.years.length && past.boxes === 'trend,trend,sys' && past.doors === 1 && past.after &&
     yearRun(past.years) && past.opens >= past.years.length - 1)
      ? ok('the cycle reads year by year, newest first, each year opening its quarter, today and at a close', today.years.join() + ' · ' + past.years.join())
      : bad('the cycle reads year by year, newest first, each year opening its quarter, today and at a close', JSON.stringify([today, past]));
    const pastFigs = await p.evaluate(() => [...document.querySelectorAll('.cat-sheet .cat-item[data-open]:not([data-preview])')].map(item => {
      const v = item.querySelector('.ci-value');
      return v && item.__today ? { name: item.dataset.title, fig: v.firstChild.nodeValue.trim(), today: item.__today.text.trim() } : null;
    }).filter(f => f && f.fig !== '\u2014'));
    const decimals = t => ((/\d+(?:\.(\d+))?/.exec(t) || [])[1] || '').length;
    const KEREN = { 'Federal debt': /^\d+\.\d%$/, 'Shiller CAPE': /\u00d7$/, 'Pulse': /\u00d7$/, 'Growth': /^[+\u2212]/,
                    'Volume': /^[+\u2212]/ };
    const figOff = pastFigs.filter(f => decimals(f.fig) !== decimals(f.today) || (KEREN[f.name] && !KEREN[f.name].test(f.fig)));
    (Object.keys(KEREN).every(n => pastFigs.some(f => f.name === n)) && !figOff.length)
      ? ok('a closed cycle\u2019s figures read like today\u2019s cards', pastFigs.map(f => f.fig).join(' \u00b7 '))
      : bad('a closed cycle\u2019s figures read like today\u2019s cards', JSON.stringify(figOff.length ? figOff : pastFigs));
    const spill = await p.evaluate(() => [...document.querySelectorAll('.peek-chart svg')].map(svg => {
      const H = +svg.getAttribute('viewBox').split(' ')[3];
      const ys = [...svg.querySelectorAll('path')].flatMap(el => [...(el.getAttribute('d') || '').matchAll(/[ML][\d.-]+,([\d.-]+)/g)].map(m => +m[1]));
      return ys.filter(y => y < -0.5 || y > H + 0.5).length;
    }).filter(n => n));
    (!spill.length)
      ? ok('a closed cycle\u2019s preview columns stay inside their card', 'none past the frame')
      : bad('a closed cycle\u2019s preview columns stay inside their card', JSON.stringify(spill));
    (past && past.visible && past.title === 'Big Tech Cycle' && past.lead === 1 && past.story && past.told === '1:Big Tech Cycle' && past.kicker === 'Big Tech Cycle')
      ? ok('a closed cycle tells its whole story, not its close', past.title)
      : bad('a closed cycle tells its whole story, not its close', JSON.stringify(past));
    await p.evaluate(() => document.querySelector('.tab-btn[data-tab="cycle"]').click()); await settle(p);
  }

  {
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
    await settle(p);
    const chartOf = () => p.evaluate(() => {
      const s = document.getElementById('chart-home'), c = s && s.querySelector('.labs');
      return c ? { open: !document.getElementById('panel-chart').hidden, picked: s.querySelector('.lab-menu [data-lab-sub="cycle"] small').textContent,
        items: c.querySelectorAll('.lab-item').length, risk: c.querySelectorAll('.lab-item.t-abnormal').length,
        seen: [...c.querySelectorAll('.lab-item')].filter(e => e.offsetParent).length } : null;
    });
    const chart = await chartOf();
    await p.evaluate(() => document.querySelector('#chart-home [data-lab-tier="abnormal"]').click());
    const risky = await chartOf();
    await p.evaluate(() => document.querySelector('#chart-home [data-lab-tier="all"]').click());
    await p.evaluate(() => document.querySelector('#chart-home [data-lab-sub="cycle"]').click());
    await p.evaluate(() => [...document.querySelectorAll('#chart-home [data-lab-cycle]')].find(o => /Nifty Fifty/.test(o.textContent)).click());
    await settle(p);
    const picked = await chartOf();
    (chart && chart.open && chart.picked === 'Dot-Com' && chart.items > 10 && chart.risk > 0 && chart.seen === chart.items &&
     risky.seen === chart.risk && picked && picked.picked === 'Nifty Fifty')
      ? ok('Cycle Statistics on a past cycle opens the Analysis tab on that cycle', chart.items + ' readings, ' + chart.risk + ' at risk')
      : bad('Cycle Statistics on a past cycle opens the Analysis tab on that cycle', JSON.stringify(chart));
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
      const opener = (id, shown) => [...document.querySelectorAll('[data-open="' + id + '"]')].find(x => x.closest('.tab-panel') && (!shown || x.offsetParent));
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
    (Object.keys(gaps).length > 30 && !off.length)
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
    const tab = await p.evaluate(() => {
      const h = document.getElementById('chart-home'), rows = [...h.querySelectorAll('.lab-row[data-open]')];
      return { title: document.getElementById('topbar-title').textContent, first: h.firstElementChild.className,
        under: !h.querySelector('.cycsel') && !!h.querySelector('.lab-menu [data-lab-sub="cycle"]'),
        chips: h.querySelectorAll('.rangebar').length, menu: h.querySelector('.lab-menu').hidden,
        rows: rows.length, doors: rows.every(r => document.getElementById(r.dataset.open)),
        cats: [...h.querySelectorAll('.lab-cat')].map(b => b.dataset.open).join() };
    });
    (tab.title === 'Analysis' && tab.first === 'lab-find' && tab.under && !tab.chips && tab.menu && tab.rows > 15 && tab.doors &&
     tab.cats === 'sheet-cat-weather,sheet-cat-mood,sheet-cat-circulation,sheet-cat-energy')
      ? ok('Analysis tab opens on its search box, the cycle in its filter, every reading and category a door', tab.rows + ' readings')
      : bad('Analysis tab opens on its search box, the cycle in its filter, every reading and category a door', JSON.stringify(tab));
    const shown = async q => {
      await p.fill('#chart-home .lab-q', q); await settle(p);
      return p.evaluate(() => ({
        rows: [...document.querySelectorAll('#chart-home .lab-item:not([hidden]) .lab-row > div:first-child > b')].map(b => b.textContent),
        cats: [...document.querySelectorAll('#chart-home .lab-sec:not([hidden])')].map(c => c.className.match(/cat-(\w+)/)[1]),
        none: !document.querySelector('#chart-home .search-none').hidden
      }));
    };
    const cpi = await shown('cpi'), mood = await shown('mood'), nil = await shown('zzzz'), back = await shown('');
    (cpi.rows.join() === 'Temperature' && mood.cats.join() === 'mood' && mood.rows.length > 4 && nil.none && !nil.rows.length && !back.none && back.cats.length >= 4)
      ? ok('the search box finds readings by name, measure and category', 'cpi → Temperature, mood → its ' + mood.rows.length + ' readings, none → a message')
      : bad('the search box finds readings by name, measure and category', JSON.stringify({ cpi, mood, nil, back }));
    await p.click('#chart-home .lab-filter');
    const menuOpen = await p.evaluate(() => !document.querySelector('#chart-home .lab-menu').hidden);
    await p.click('#chart-home [data-lab-tier="abnormal"]'); await settle(p);
    const risk = await p.evaluate(() => ({ menu: document.querySelector('#chart-home .lab-menu').hidden, label: document.querySelector('#chart-home .lab-filter').textContent,
      rows: [...document.querySelectorAll('#chart-home .lab-item:not([hidden])')].map(r => r.classList.contains('t-abnormal')) }));
    await p.click('#chart-home .lab-filter'); await p.click('#chart-home [data-lab-tier="all"]'); await settle(p);
    (menuOpen && risk.menu && risk.label === 'Risk' && risk.rows.length > 0 && risk.rows.every(Boolean))
      ? ok('the filter inside the search box narrows the results to a tier', risk.rows.length + ' at risk')
      : bad('the filter inside the search box narrows the results to a tier', JSON.stringify({ menuOpen, risk }));
    await p.click('#chart-home .lab-filter'); await p.click('#chart-home [data-lab-sub="cycle"]');
    const sub = await p.evaluate(() => ({ open: !document.querySelector('#chart-home .lab-menu').hidden, cycles: document.querySelectorAll('#chart-home [data-lab-cycle]').length }));
    await p.click('#chart-home [data-lab-cycle="Dot-Com Cycle"]'); await settle(p);
    const dot = await p.evaluate(() => ({ label: document.querySelector('#chart-home .lab-filter').textContent, cycle: !!document.querySelector('#chart-home .lab-item') }));
    await p.click('#chart-home .lab-filter'); await p.click('#chart-home [data-lab-sub="cycle"]'); await p.click('#chart-home [data-lab-cycle="AI Cycle"]'); await settle(p);
    (sub.open && sub.cycles > 15 && dot.label === 'Dot-Com' && dot.cycle)
      ? ok('the filter picks the cycle from its Cycle menu', sub.cycles + ' cycles')
      : bad('the filter picks the cycle from its Cycle menu', JSON.stringify({ sub, dot }));
    await p.click('#chart-home .cat-mood .lab-fold'); await settle(p);
    const folded = await p.evaluate(() => ({ title: document.getElementById('topbar-title').textContent,
      hid: !document.querySelector('#chart-home .cat-mood .lab-item').offsetParent }));
    await p.click('#chart-home .cat-mood .lab-fold'); await settle(p);
    await p.click('#chart-home .lab-cat[data-open="sheet-cat-mood"]'); await settle(p);
    const head = await p.evaluate(() => ({ title: document.getElementById('topbar-title').textContent,
      open: !document.getElementById('sheet-cat-mood').hidden,
      home: document.querySelector('.tab-panel[data-tab="chart"]').contains(document.getElementById('metric-page')) }));
    await p.click('#topbar-back'); await settle(p);
    const after = await p.evaluate(() => ({ title: document.getElementById('topbar-title').textContent,
      list: !document.getElementById('chart-home').hidden }));
    (folded.title === 'Analysis' && folded.hid && head.title === 'Mood' && head.open && head.home && after.title === 'Analysis' && after.list)
      ? ok('a category name opens its page and back returns to Analysis; its chevron only folds it')
      : bad('a category name opens its page and back returns to Analysis; its chevron only folds it', JSON.stringify({ folded, head, after }));
    await p.click('#chart-home .lab-row[data-open="sheet-sign-confidence"]'); await settle(p);
    const fromChart = await p.evaluate(() => {
      const b = document.querySelector('#metric-page .trendpill.can-toggle'); if (!b) return null;
      b.click(); const box = b.closest('.page-chart, .spread-history'), fit = box.querySelector('.fit');
      return { bar: document.getElementById('topbar-title').textContent, on: box.classList.contains('trend-on') && !!fit && getComputedStyle(fit).display !== 'none' };
    });
    (fromChart && fromChart.bar === 'Confidence' && fromChart.on)
      ? ok('a reading in Cycle Statistics opens its page, and its trend button works', fromChart.bar)
      : bad('a reading in Cycle Statistics opens its page, and its trend button works', JSON.stringify(fromChart));
    await p.goto('file://' + url); await ready(p);
    const lists = {};
    for (const cat of ['circulation', 'mood', 'energy']) {
      await p.click('.tab-btn[data-tab="chart"]'); await settle(p);
      await click(p, '#chart-home [data-open="sheet-cat-' + cat + '"]'); await settle(p);
      lists[cat] = await p.evaluate(c => ({ heads: document.querySelectorAll('#sheet-cat-' + c + ' h3, #sheet-cat-' + c + ' .cat-group-head').length,
        tall: [...document.querySelectorAll('#sheet-cat-' + c + ' .cat-item')].map(i => Math.round(i.getBoundingClientRect().height)),
        lead: (i => i && i.dataset.open + '<' + i.dataset.preview + ':' + (i.querySelector('.ci-value').textContent ===
          (document.querySelector('.cat-group .cat-item[data-open="' + i.dataset.preview + '"] .ci-value') || {}).textContent))(document.querySelector('#sheet-cat-' + c + ' .cat-item')),
        names: [...document.querySelectorAll('#sheet-cat-' + c + ' .cat-item')].map(i => i.querySelector('.ci-name').textContent).join('+') }), cat);
      await p.hover('#sheet-cat-' + cat + ' .cat-item');
      lists[cat].white = await p.evaluate(c => { const i = document.querySelector('#sheet-cat-' + c + ' .cat-item'), st = getComputedStyle(i);
        return st.backgroundColor === getComputedStyle([...document.querySelectorAll('.cat-sheet:not([hidden]) .cat-item')].pop()).backgroundColor &&
          st.webkitTapHighlightColor === 'rgba(0, 0, 0, 0)'; }, cat);
      await p.click('#topbar-back'); await settle(p);
    }
    (!lists.mood.heads && !lists.energy.heads && lists.mood.names === 'Valuations+Volatility+Desire+Confidence' &&
     lists.energy.names === 'Stress+Unemployment rate+Productivity growth' &&
     lists.mood.lead === 'sheet-grp-valuations<sheet-metric-valuation:true' && lists.energy.lead === 'sheet-grp-stress<sheet-metric-debt:true')
      ? ok('a category page lists its cards without headings', lists.mood.names + ' · ' + lists.energy.names)
      : bad('a category page lists its cards without headings', JSON.stringify(lists));
    const uneven = Object.keys(lists).filter(c => Math.max(...lists[c].tall) - Math.min(...lists[c].tall) > 1);
    (!uneven.length)
      ? ok('every card on a category page stands the same height', Object.keys(lists).map(c => c + ' ' + lists[c].tall[0] + 'px').join(', '))
      : bad('every card on a category page stands the same height', JSON.stringify(uneven.map(c => [c, lists[c].tall])));
    (lists.mood.white && lists.energy.white)
      ? ok('a category card stays white when touched or hovered', 'Keren, V678')
      : bad('a category card stays white when touched or hovered', JSON.stringify(lists));
    await p.click('.tab-btn[data-tab="cycle"]'); await settle(p);
    await click(p, '#diagnosis [data-open="sheet-ai-insights"]'); await settle(p);
    const feel = await p.evaluate(() => {
      const card = document.querySelector('#sheet-ai-insights:not([hidden]) .trend-card');
      return { head: card && card.querySelector('.trend-head').textContent.trim(), opens: card && card.dataset.open };
    });
    await click(p, '#sheet-ai-insights:not([hidden]) .trend-card'); await settle(p);
    await click(p, '#sheet-cat-mood:not([hidden]) .cat-more .more-row'); await settle(p);
    const cyc = await p.evaluate(() => {
      const s = document.querySelector('#detail-modal-body .mood-curve'), card = document.querySelector('#detail-modal-body .hi-card .hi-name');
      return s && { labels: [...s.querySelectorAll('.mood-lab')].map(t => t.textContent).join('+'), calls: s.querySelectorAll('.mood-call').length,
        now: [...s.querySelectorAll('.mood-lab.now')].map(t => t.textContent), card: card && card.textContent,
        es: document.querySelectorAll('#sheet-cat-mood:not([hidden]) .hi-head, #detail-modal-body .hi-head').length + ':' +
          document.querySelectorAll('#detail-modal-body .hi-card').length };
    });
    await p.keyboard.press('Escape'); await settle(p);
    await p.click('#topbar-back'); await settle(p);
    await p.click('#topbar-back'); await settle(p);
    (feel.head === 'AI Cycle' && feel.opens === 'sheet-cat-mood' && cyc && cyc.calls === 4 &&
     cyc.labels === 'OPTIMISM+EXCITEMENT+THRILL+EUPHORIA+ANXIETY+DENIAL+FEAR+DESPERATION+PANIC+DESPAIR+DEPRESSION+HOPE+OPTIMISM' &&
     cyc.now.length >= 1 && cyc.now.every(w => w === cyc.now[0]) && cyc.card.toUpperCase() === 'SHE\u2019S IN ' + cyc.now[0] &&
     cyc.es === '0:1')
      ? ok('the story in AI Insights opens the cycle of market emotions and her story this cycle, one emotion everywhere', feel.head + ' \u00b7 ' + cyc.now[0])
      : bad('the story in AI Insights opens the cycle of market emotions and her story this cycle, one emotion everywhere', JSON.stringify({ feel, cyc }));
    await click(p, '#season-wheel-hub-open'); await settle(p);
    const wx = await p.evaluate(() => {
      const page = document.querySelector('#sheet-cat-weather:not([hidden])');
      return page && { bar: document.getElementById('topbar-title').textContent.trim(),
        names: [...page.querySelectorAll('.cat-item .ci-name')].map(n => n.textContent.trim()).join('+'),
        modal: !document.getElementById('detail-modal') || document.getElementById('detail-modal').hidden !== false ? false : true };
    });
    await click(p, '#sheet-cat-weather:not([hidden]) .cat-more .more-row'); await settle(p);
    if (wx) wx.cards = await p.evaluate(() => [...document.querySelectorAll('#detail-modal-body .hi-name')].map(n => n.textContent.trim()));
    await p.keyboard.press('Escape'); await settle(p);
    await p.click('#topbar-back'); await settle(p);
    (wx && wx.bar === 'Weather' && wx.names === 'Temperature+Growth+S&P 500' && !wx.modal &&
     wx.cards.indexOf('In the body') > 0 && wx.cards.indexOf('The market this cycle') > 0 && wx.cards.indexOf('The barometer') > 0)
      ? ok('the season in the dial opens Weather, with the market and what the season means', wx.names + ' · ' + wx.cards.join(', '))
      : bad('the season in the dial opens Weather, with the market and what the season means', JSON.stringify(wx));
    await p.evaluate(() => document.querySelector('.dial-moon[data-q="0"]').dispatchEvent(new MouseEvent('click', { bubbles: true }))); await settle(p);
    const qhub = await p.evaluate(() => ({ date: document.getElementById('season-wheel-hub-date').textContent.trim(),
      ret: (document.querySelector('#season-wheel-hub-detail .hub-line b') || {}).textContent }));
    await click(p, '#season-wheel-hub-open'); await settle(p);
    const qs = await p.evaluate(() => {
      const body = document.getElementById('detail-modal-body');
      return { shown: document.getElementById('detail-backdrop').classList.contains('show'),
        sub: (body.querySelector('.marker-sub') || {}).textContent || '',
        names: [...body.querySelectorAll('.cat-item .ci-name')].map(n => n.textContent.trim()).join('+'),
        market: (body.querySelector('.cat-item[data-open="sheet-sign-market"] .ci-value') || {}).textContent || '',
        about: !!body.querySelector('.more-row') };
    });
    await click(p, '#detail-modal-body .cat-item[data-open="sheet-metric-gdp"]'); await settle(p);
    const qpage = await p.evaluate(() => ({ bar: document.getElementById('topbar-title').textContent.trim(),
      shown: document.getElementById('detail-backdrop').classList.contains('show') }));
    await p.click('#topbar-back'); await settle(p);
    (qs.shown && qs.sub.indexOf(qhub.date) === 0 && qs.names === 'Temperature+Growth+S&P 500' && qhub.ret && qs.market.indexOf(qhub.ret) === 0 &&
     qs.about && qpage.bar === 'Growth' && !qpage.shown)
      ? ok('a tapped quarter opens its sheet: Temperature, Growth and that year\u2019s S&P 500, one number with the dial', qhub.date + ' \u00b7 ' + qhub.ret)
      : bad('a tapped quarter opens its sheet: Temperature, Growth and that year\u2019s S&P 500, one number with the dial', JSON.stringify({ qhub, qs, qpage }));
    await p.click('.tab-btn[data-tab="chart"]'); await settle(p);
    await click(p, '#chart-home [data-open="sheet-cat-energy"]'); await settle(p);
    await p.click('#metric-page [data-open="sheet-grp-stress"]'); await settle(p);
    const grp = await p.evaluate(() => ({ bar: document.getElementById('topbar-title').textContent,
      names: [...document.querySelectorAll('#metric-page .cat-item')].map(i => i.querySelector('.ci-name').textContent).join('+') }));
    await p.click('#metric-page .cat-item[data-open="sheet-metric-debt"]'); await settle(p);
    const deep = await p.evaluate(() => document.getElementById('topbar-title').textContent);
    await p.click('#topbar-back'); await settle(p);
    const again = await p.evaluate(() => document.querySelectorAll('#metric-page .cat-item').length);
    await goHome(p, url); await p.click('.tab-btn[data-tab="chart"]'); await settle(p);
    await click(p, '#chart-home [data-open="sheet-cat-energy"]'); await settle(p);
    const home = await p.evaluate(() => [...document.querySelectorAll('#metric-page .cat-item')].map(i => i.querySelector('.ci-name').textContent).join('+'));
    await p.click('#topbar-back'); await settle(p);
    (grp.bar === 'Stress' && grp.names === 'Federal debt+Interest payments+Federal budget+Households' && deep === 'Federal debt' &&
     again === grp.names.split('+').length && home === lists.energy.names)
      ? ok('a group opens its cards, and they return home', grp.names)
      : bad('a group opens its cards, and they return home', JSON.stringify({ grp, deep, again, home }));
    await p.goto('file://' + url); await ready(p);
    const icons = await p.evaluate(() => ['weather', 'circulation', 'mood', 'energy'].map(k => {
      const col = el => el ? getComputedStyle(el).color : null;
      const cat = col(document.querySelector('#sheet-cat-' + k + ' .ci-name'));
      const cards = [...document.querySelectorAll('#sheet-cat-' + k + ' .cat-item .ci-head .peek-mark')];
      return { k, cards: cards.length, shapes: new Set(cards.map(m => (m.querySelector('svg') || {}).innerHTML)).size,
        same: !!cat && cards.every(m => col(m) === cat) };
    }));
    await openPage(p, url, 'sheet-metric-valuation');
    const headCol = await p.evaluate(() => getComputedStyle(document.querySelector('#metric-page .bh-mark')).color ===
      getComputedStyle(document.querySelector('#sheet-cat-mood .ci-name')).color);
    icons.every(i => i.same && i.shapes > 1) && icons[3].cards === lists.energy.names.split('+').length && headCol
      ? ok('every reading keeps its icon in its category colour', icons.map(i => i.k + ' ' + i.shapes + ' shapes').join(', '))
      : bad('every reading keeps its icon in its category colour', JSON.stringify({ icons, headCol }));
    const about = await p.evaluate(() => {
      const sheet = document.getElementById('sheet-book');
      return { title: sheet.querySelector('.topbar-title').textContent, seasons: sheet.querySelectorAll('#seasons-rows .lag-row').length,
        framework: sheet.querySelectorAll('#framework-rows .lag-row').length, cycle: /The Cycle Model/.test(sheet.textContent),
        row: /About Gyneconomy/.test(document.querySelector('[data-sheet="book"]').textContent) };
    });
    (about.title === 'About Gyneconomy' && about.seasons === 7 && about.framework > 1 && about.cycle && about.row)
      ? ok('About Gyneconomy carries the models the Content tab held', about.seasons - 1 + ' seasons, ' + (about.framework - 1) + ' signs')
      : bad('About Gyneconomy carries the models the Content tab held', JSON.stringify(about));
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
    const sig = () => p.evaluate(() => Object.fromEntries([...document.querySelectorAll('.cat-sheet .cat-item[data-open]:not([data-preview])')].map(n => {
      const m = n.querySelector('.ci-mini > *'), cls = m ? (m.getAttribute('class') || '').split(' ') : [];
      return [n.dataset.open, { art: cls.filter(x => /^(heat|pulsepeek|vital-ring)$/.test(x)).join(), unit: !!n.querySelector('.ci-value .ci-unit'),
        val: n.querySelector('.ci-value').textContent }];
    })));
    const todaySig = await sig();
    const cc = await p.evaluate(() => {
      const row = [...document.querySelectorAll('.era-row')].find(x => /Housing/.test(x.textContent));
      if (!row) return null; row.click(); return true;
    });
    await settle(p);
    const view = cc && await p.evaluate(() => {
      const cal = document.getElementById('calendar-cycle');
      return { dial: !!cal.querySelector('#cycle-view .season-card'), today: !!cal.querySelector('#today-analysis'),
        tiles: [...cal.querySelectorAll('#today-analysis [data-open^="sheet-cat-"]:not(.trend-card)')].filter(x => x.offsetParent).length,
        closed: /Closed/.test(cal.querySelector('#cycle-view').innerText),
        bar: document.getElementById('topbar-title').textContent.trim() };
    });
    const pastFrame = cc && await frame();
    await sweep(p);
    (pastFrame && JSON.stringify(pastFrame) === JSON.stringify(nowFrame) && nowFrame.kids === 'cycle-view,today-analysis' && nowFrame.gap > 0)
      ? ok('a past cycle stacks like the current one', nowFrame.kids + ' · ' + nowFrame.flow + ' · dial to diagnosis ' + nowFrame.gap + 'px')
      : bad('a past cycle stacks like the current one', JSON.stringify({ nowFrame, pastFrame }));
    await click(p, '#calendar-cycle [data-open="sheet-cat-mood"]');
    await settle(p);
    const got = view && await p.evaluate(() => [...document.querySelectorAll('.cat-sheet .cat-item[data-open]:not([data-preview])')].map(n => ({
      open: n.dataset.open, name: n.querySelector('.ci-name').textContent.trim(), val: n.querySelector('.ci-value').textContent.trim(),
      word: (n.querySelector('.ci-word') || {}).textContent || '', when: n.querySelector('.ci-when').textContent.trim() })));
    const live = got ? got.filter(i => i.val !== '\u2014') : [];
    (view && view.dial && view.today && view.tiles === 0 && view.closed && view.bar === 'Housing Cycle' &&
     got.length === 19 && live.length >= 17 && live.every(i => /over the cycle|Flat all cycle/.test(i.word)) &&
     live.every(i => /200[3-8]/.test(i.when)))
      ? ok('a closed cycle opens on the Cycle page itself', view.tiles + ' tiles \u00b7 ' + live.length + ' of ' + got.length + ' cards read 2003\u20132008')
      : bad('a closed cycle opens on the Cycle page itself', JSON.stringify({ view, got }));

    const eraSig = await sig();
    const drift = Object.keys(todaySig).filter(k => eraSig[k].val !== '\u2014' &&
      (eraSig[k].art !== todaySig[k].art || eraSig[k].unit !== todaySig[k].unit || eraSig[k].val === todaySig[k].val));
    (Object.keys(todaySig).length === 19 && !drift.length && eraSig['sheet-metric-valuation'].art === 'heat' && eraSig['sheet-sign-sentiment'].art === 'vital-ring')
      ? ok('past-cycle cards keep today\u2019s design', 'same mini and unit on every measured card, a different figure')
      : bad('past-cycle cards keep today\u2019s design', JSON.stringify(drift.map(k => [k, todaySig[k], eraSig[k]])));

    await click(p, '#sheet-cat-mood .cat-item[data-open="sheet-grp-valuations"]');
    await settle(p);
    await click(p, '#sheet-grp-valuations .cat-item[data-open="sheet-metric-valuation"]');
    await settle(p);
    const picked = await p.evaluate(() => (document.querySelector('#metric-page .hist-controls') || {}).textContent || '');
    const bar = () => p.evaluate(() => (document.getElementById('topbar-back').hidden ? '' : '← ') + document.getElementById('topbar-title').textContent);
    const trail = [];
    for (let i = 0; i < 4; i++) { await p.evaluate(() => document.getElementById('topbar-back').click()); await settle(p); trail.push(await bar()); }
    (trail.join(' | ') === '← Valuations | ← Mood | ← Housing Cycle | Herstory')
      ? ok('back walks out of a past cycle one page at a time', trail.join(' | '))
      : bad('back walks out of a past cycle one page at a time', trail.join(' | '));
    await p.evaluate(() => document.querySelector('.tab-btn[data-tab="cycle"]').click());
    await settle(p);
    const back = await p.evaluate(() => ({
      home: document.querySelector('.tab-panel[data-tab="cycle"] #today-analysis') !== null &&
            document.querySelector('.tab-panel[data-tab="cycle"] #cycle-view') !== null,
      words: [...document.querySelectorAll('.cat-sheet .ci-word')].filter(w => /over the cycle/.test(w.textContent)).length,
      cape: (document.querySelector('.cat-item[data-open="sheet-metric-valuation"] .ci-value') || {}).textContent,
      stale: /Closed/.test(document.getElementById('cycle-view').innerText)
    }));
    (/Housing/.test(picked) && back.home && !back.words && !back.stale && back.cape && !/^24\.0/.test(back.cape.trim()))
      ? ok('the pages follow the cycle, and today comes back', 'picker: Housing \u00b7 CAPE ' + back.cape.trim() + ' again')
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
    const fg  = document.getElementById('subj-value-sentiment');
    const yld = document.getElementById('subj-value-pressure');
    const ink = document.querySelector('.curve-w');
    return {
      fgNum: fg ? fg.textContent.trim().split('VIX')[0] : null,
      fgInk: ink ? ink.className : null,
      yld:   yld ? yld.textContent.trim().replace(/\s+/g, ' ') : null
    };
  };
  const loadWith = async (seed) => {
    const c = await b.newContext({ viewport: { width: 414, height: 1000 } });
    const g = await c.newPage();
    const errs = watch(g, 'live cache');
    if (seed !== null) await g.addInitScript(x => { try { localStorage.setItem('gyn.live', x); } catch (e) {} }, seed);
    await g.goto('file://' + url); await ready(g);
    const r = await g.evaluate(readLive);
    const text = await g.evaluate(() => { const c2 = document.body.cloneNode(true);
      c2.querySelectorAll('script, style').forEach(n => n.remove()); return c2.textContent; });
    await c.close();
    return { r, errs, text };
  };

  const BAD_SEED = JSON.stringify({ fedFunds: { kind: 'object', lo: '3.75', hi: 4 }, yieldCurve: { kind: 'series', rows: [{ m: '10Y', y: 'x' }] },
                                     vixClose: { kind: 'scalar', value: 33.3, asOf: '<b>2026-09-30</b>' } });
  const badSeed = await loadWith(BAD_SEED);
  (badSeed.r.yld && !badSeed.errs.length && !/33\.3VIX/.test(badSeed.text))
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
      const cards = [...document.querySelectorAll('.cat-sheet:not([id^="sheet-grp-"]) .cat-item[data-open]')].flatMap(c => c.hasAttribute('data-preview')
        ? [...document.getElementById(c.dataset.open).querySelectorAll('.cat-item[data-open]')] : [c]).map(c => c.dataset.open);
      const warned = [], warn = console.warn;
      console.warn = m => warned.push(String(m));
      R.push(Object.assign({}, R[0], { group: R.filter(r => r.group)[0].group, live: ['nowhere'] }));
      try { step.fn(); } finally { R.pop(); console.warn = warn; }
      return { ids: R.map(r => r.id), cards, warned: warned.join(' ') };
    });
    if (!roster) bad('the roster is every card, in card order', 'no GYN.ROSTER or no checkRoster step');
    else {
      JSON.stringify(roster.ids) === JSON.stringify(roster.cards)
        ? ok('the roster is every card, in card order', roster.ids.length + ' readings')
        : bad('the roster is every card, in card order', 'roster ' + roster.ids.join(',') + ' / cards ' + roster.cards.join(','));
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

    const doors = sheet => g.evaluate(s => [...document.querySelectorAll('[data-open="' + s + '"]:not(.lab-row)')].map(d => {
      const v = d.querySelector('.ci-value, .subject-value');
      const w = d.querySelector('.tag');
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
    (cape.length >= 1 && cape.every(t => /^50\.5/.test(t)))
      ? ok('site feed moves a scalar on every door', cape.length + ' doors')
      : bad('site feed moves a scalar on every door', JSON.stringify(cape));
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
    const c = [...document.querySelectorAll('.tab-panel[data-tab="cycle"] [data-open^="sheet-cat-"]')].filter(x => x.offsetParent)[0];
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
}
