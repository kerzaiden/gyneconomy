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
const TOKENS = {
  '--pad':'10px', '--gap':'10px', '--gap-top':'20px', '--radius':'16px', '--radius-inner':'13px',
};

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
  Promise.all(document.getAnimations().map(a => a.finished.catch(() => null))).then(() => done())))));
const ready = pg => pg.waitForFunction(() => window.__GYN && document.getElementById('diagnosis')).then(() => settle(pg));

async function openPage(p, url, sheet) {
  await p.goto('file://' + url); await ready(p);
  const home = s => p.evaluate(s => { const c = document.querySelector('.cat-sheet .cat-item[data-open="' + s + '"]');
    return c ? c.closest('.cat-sheet').id : null; }, s);
  const cat = await home(sheet), up = cat && cat.indexOf('sheet-grp-') === 0 ? await home(cat) : null;
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

  const leak = (src.match(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g) || []);
  leak.length === 0 ? ok('no email in markup')
                    : bad('no email in markup', leak.length + ' address(es) — DO NOT PUBLISH');

  const SRC_DIR = path.join(__dirname, '..', 'src');
  const code = fs.existsSync(path.join(SRC_DIR, 'manifest.json'))
    ? fs.readdirSync(path.join(SRC_DIR, 'js')).filter(n => n.endsWith('.js') && n !== '03b-history-fred.js')
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
      const tok = await p.evaluate(ts => { const cs = getComputedStyle(document.documentElement);
        const o = {}; for (const t of ts) o[t] = cs.getPropertyValue(t).trim(); return o; }, Object.keys(TOKENS));
      for (const [k, v] of Object.entries(TOKENS))
        tok[k] === v ? ok('token ' + k, v) : bad('token ' + k, 'expected ' + v + ', got ' + (tok[k] || 'unset'));
    }
    await p.close();
  }

  const p = await b.newPage({ viewport: { width: 414, height: 1000 } });
  watch(p, 'navigating');
  await p.goto('file://' + url); await ready(p);
  const READINGS_ON_SCREEN = await p.evaluate(() => [...document.querySelectorAll('.cat-sheet .cat-item[data-open]:not([data-preview])')]
    .map(c => [c.dataset.open, c.querySelector('.ci-name').textContent.trim()]));
  const tall = {}, notes = {}, gaps = {};
  const searchFigs = await p.evaluate(() => [...document.querySelectorAll('#search-list .ind-row[data-open]')].map(r => {
    const fig = ((r.querySelector('.ind-fig') || {}).textContent || '').trim();
    const card = document.querySelector('.cat-item[data-open="' + r.dataset.open + '"] .ci-value');
    return fig ? { name: r.dataset.title, fig, card: card ? card.firstChild.nodeValue.trim() : null } : null;
  }).filter(Boolean));
  const searchOff = searchFigs.filter(f => f.fig !== f.card);
  (searchFigs.length > 0 && !searchOff.length)
    ? ok('every Search row prints its card\u2019s figure', searchFigs.length + ' rows')
    : bad('every Search row prints its card\u2019s figure', JSON.stringify(searchOff.length ? searchOff : searchFigs.length));
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
    (/Buffett indicator/.test(notes['Buffett indicator'] || '') && !Object.values(notes).some(n => /Buffett Indicator/.test(n)))
      ? ok('the Buffett indicator is named so in its notes', 'Keren, V670')
      : bad('the Buffett indicator is named so in its notes', (notes['Buffett indicator'] || '').slice(0, 80));
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
      const d = document.getElementById('diagnosis');
      return d ? { visible: !!d.offsetParent, title: (d.querySelector('.trend-head') || {}).textContent.trim(), lead: d.querySelectorAll('.trend-text').length,
                   story: [...d.querySelectorAll('.trend-card .trend-text')].map(x => /^[A-Z][^.]+\. Mrs\. Market .+\.$/.test(x.textContent)).join() === 'true',
                   told: [...document.querySelectorAll('#sheet-cat-mood > .insights')].map(b => b.querySelectorAll('.hi-card').length + ':' +
                     (/([A-Z][\w\-]*(?: [A-Z][\w\-]*)* Cycle), \d{4}\u2013/.exec((b.querySelector('.hi-card p') || {}).textContent || '') || [])[1]).pop(),
                   heads: [...d.querySelectorAll('.dx-sys-head')].map(h => [...h.childNodes].filter(n => !(n.classList && n.classList.contains('expand-btn'))).map(n => n.textContent).join('').trim()),
                   grid: d.querySelectorAll('.fs-feel').length + ':' + d.querySelectorAll('.fs-cell.now').length + ':' + [...d.querySelectorAll('.dx-k')].some(k => k.textContent === 'The test'),
                   doors: [...d.querySelectorAll('button.dx-sys-head')].map(h => h.getAttribute('data-open')),
                   symptoms: [...d.querySelectorAll('.dx-k')].filter(k => /Symptoms/.test(k.textContent)).length,
                   analyses: [...d.querySelectorAll('.dx-cat')].map(s => s.querySelectorAll('.dx-k').length + ':' + !!s.querySelector('.dx-v')),
                   frame: (() => { const c = d.querySelector('.dx-cat'), s = c && c.closest('.dx-sys');
                     return s ? s.querySelector('.dx-sys-head').textContent.trim() + ':' + !!s.querySelector('.dx-sys-head .dx-mark svg') : ''; })(),
                   cards: document.querySelectorAll('.cat-row').length,
                   boxes: [...d.children].map(c => c.classList.contains('trend-card') ? 'trend' : c.classList.contains('dx-sys') ? 'sys' : c.className).join(),
                   across: [...d.querySelectorAll('.dx-k')].some(k => k.textContent.trim() === 'Across the cycle') } : null;
    });
    const today = await read();
    const onlyAnalysis = d => d && d.symptoms === 0 && d.frame === 'Circulation and Energy:true' && d.analyses.length === 2 && d.analyses.every(a => a === '0:true');
    await sweep(p);
    const FEEL = /^(Optimism|Excitement|Thrill|Euphoria|Anxiety|Denial|Fear|Desperation|Panic|Despair|Depression|Hope) in (Spring|Summer|Autumn|Winter)$/;
    (today && today.visible && FEEL.test(today.title) && today.lead === 1 && today.story && today.told === '1:AI Cycle' && today.cards === 0 &&
     today.heads.join() === 'Circulation and Energy,Circulation,Energy' && today.boxes === 'trend,sys' && today.across && today.grid === '0:0:false' &&
     today.doors.join() === 'sheet-cat-circulation,sheet-cat-energy')
      ? ok('the Diagnosis sits under the dial, in place of the category cards', today.title)
      : bad('the Diagnosis sits under the dial, in place of the category cards', JSON.stringify(today));
    await p.evaluate(() => document.querySelector('.tab-btn[data-tab="analysis"]').click()); await settle(p);
    const mkt = await p.evaluate(() => [...document.querySelectorAll('.era-row .strip-run.mkt-up, .era-row .strip-run.mkt-down')]
      .map(e => getComputedStyle(e).backgroundColor));
    (mkt.length >= 10 && mkt.every(c => c !== 'rgba(0, 0, 0, 0)' && c !== 'transparent'))
      ? ok('every cycle row draws its bull and bear years in colour', mkt.length + ' runs')
      : bad('every cycle row draws its bull and bear years in colour', JSON.stringify(mkt.slice(0, 4)));
    await p.evaluate(() => [...document.querySelectorAll('.era-row')].find(r => /Big Tech/.test(r.textContent)).click());
    await settle(p);
    const past = await read();
    (onlyAnalysis(today) && onlyAnalysis(past) && past.boxes === 'trend,sys' && !past.across && past.grid === '0:0:false')
      ? ok('the Diagnosis reads its systems in two cards, unlabelled, today and at a close', 'Keren, V682, V686')
      : bad('the Diagnosis reads its systems in two cards, unlabelled, today and at a close', JSON.stringify([today, past]));
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
    (past && past.visible && past.title === 'Cycle story' && past.lead === 1 && past.story && past.told === '1:Big Tech Cycle' && past.heads.length === 3)
      ? ok('a closed cycle tells its whole story, not its close', past.title)
      : bad('a closed cycle tells its whole story, not its close', JSON.stringify(past));
    await p.evaluate(() => document.querySelector('.tab-btn[data-tab="cycle"]').click()); await settle(p);
  }

  {
    const doors = sheet => p.evaluate(s => [...document.querySelectorAll('[data-open="' + s + '"]')].map(d => {
      const v = d.querySelector('.ci-value, .subject-value');
      const w = d.querySelector('.tag');
      return (v ? v.firstChild.nodeValue.trim() : '-') + '|' + (w ? w.textContent.trim() : '');
    }), sheet);
    const says = re => p.evaluate(s => ([...document.querySelectorAll('#diagnosis .dx-v')].map(v => v.textContent).find(t => new RegExp(s).test(t)) || ''), re);
    const capeBefore = await doors('sheet-metric-valuation');
    await p.evaluate(() => window.__GYN.applyLive('capeValue', 50.5));
    await settle(p);
    const capeAfter = await doors('sheet-metric-valuation');
    (capeBefore.length >= 1 && capeAfter.every(t => /^50\.5/.test(t)) && capeBefore.some(t => !/^50\.5/.test(t)))
      ? ok('a fresh CAPE reaches every door', capeBefore.length + ' doors')
      : bad('a fresh CAPE reaches every door', JSON.stringify({ capeBefore, capeAfter }));

    const ffBefore = await doors('sheet-sign-hormones');
    await p.evaluate(() => window.__GYN.applyLive('fedFunds', { lo: 1.25, hi: 1.50, lastMove: '-0.25' }));
    await settle(p);
    const ffAfter = await doors('sheet-sign-hormones'), ffDx = await says('Hormones are');
    (ffBefore.length >= 2 && ffAfter.every(t => /^1\.25/.test(t)) &&
     ffAfter.every(t => !/Tightening/.test(t)) && ffAfter.some(t => /Easing/.test(t)) && /Hormones are easing/.test(ffDx))
      ? ok('a rate cut reaches every door, word and all', ffAfter.concat(ffDx).join(' \u00b7 '))
      : bad('a rate cut reaches every door, word and all', JSON.stringify({ ffBefore, ffAfter, ffDx }));

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
    const off = await p.evaluate(() => ({
      checked: document.getElementById('cycle-data').getAttribute('aria-checked'),
      tracks: document.querySelectorAll('.cyc-track').length,
      doors: document.querySelectorAll('.era-row[role="button"]').length,
      legend: document.getElementById('cycle-legend').hidden
    }));
    const nCycles = off.doors;
    (off.checked === 'false' && !off.tracks && nCycles > 1 && off.legend)
      ? ok('cycle data starts hidden', off.doors + ' cycles, no grid')
      : bad('cycle data starts hidden', JSON.stringify(off));
    await p.click('#cycle-data'); await settle(p); await sweep(p);
    const on = await p.evaluate(() => {
      const dot = [...document.querySelectorAll('.era-row.data')].find(r => /Dot-Com/.test(r.textContent));
      const scale = dot.querySelector('.cyc-scale > div').getBoundingClientRect();
      const yrs = [...dot.querySelectorAll('.sx-yrs span')].filter(x => x.textContent);
      const first = yrs[0].getBoundingClientRect(), last = yrs[yrs.length - 1].getBoundingClientRect();
      const val = [...dot.querySelectorAll('.sx-row')].find(r => /Shiller CAPE/.test(r.textContent));
      const cells = val ? [...val.querySelectorAll('i')] : [];
      return {
        tracks: document.querySelectorAll('.era-row.data .cyc-track').length,
        legend: !document.getElementById('cycle-legend').hidden,
        span: Math.round(scale.width), cols: Math.round(last.right - first.left), left: Math.round(scale.left - first.left),
        label: val && val.getAttribute('aria-label'),
        colored: cells.filter(i => i.classList.contains('on') && getComputedStyle(i).backgroundColor !== getComputedStyle(cells.find(c => c.classList.contains('off'))).backgroundColor).length
      };
    });
    (on.tracks === nCycles && on.legend && on.span === on.cols && Math.abs(on.left) <= 1)
      ? ok('show data draws every cycle on one year scale', on.span + 'px strip = ' + on.cols + 'px of years')
      : bad('show data draws every cycle on one year scale', JSON.stringify(on));
    const alike = ((/^Shiller CAPE: alike in (.+)$/.exec(on.label || '') || [])[1] || '').split(', ').filter(Boolean);
    (alike.length && alike.length === on.colored && alike.every(y => /^(199\d|200\d)$/.test(y)))
      ? ok('the CAPE marks the years of the Dot-Com cycle it resembles', on.label)
      : bad('the CAPE marks the years of the Dot-Com cycle it resembles', JSON.stringify(on));
    await p.evaluate(() => [...document.querySelectorAll('.era-row.data')].find(r => /Dot-Com/.test(r.textContent))
      .querySelector('.sx-row[aria-label^="Shiller CAPE"]').click());
    await settle(p);
    const note = await p.evaluate(() => ({
      text: document.getElementById('detail-modal-body').innerText,
      opened: !document.getElementById('calendar-cycle').hidden
    }));
    await p.evaluate(() => document.getElementById('detail-modal-close').click());
    (alike.length && alike.every(y => new RegExp('Jan ' + y + ': \\d').test(note.text)) && /^Now /m.test(note.text) && !note.opened)
      ? ok('a row shows both numbers behind every dot', alike.map(y => 'Jan ' + y).join(', ') + ' and now')
      : bad('a row shows both numbers behind every dot', JSON.stringify(note));
    await p.reload(); await ready(p);
    await p.evaluate(() => document.querySelector('.tab-btn[data-tab="analysis"]').click()); await settle(p);
    const kept = nCycles === await p.evaluate(() => document.getElementById('cycle-data').getAttribute('aria-checked') === 'true' &&
      document.querySelectorAll('.cyc-track').length);
    await p.click('#cycle-data'); await settle(p);
    const back = nCycles === await p.evaluate(() => !document.querySelectorAll('.cyc-track').length &&
      document.querySelectorAll('.era-row[role="button"]').length);
    (kept && back) ? ok('show data is remembered and turns off cleanly') : bad('show data is remembered and turns off cleanly', JSON.stringify({ kept, back }));
  }

  {
    await p.goto('file://' + url); await ready(p);
    const tabs = await p.evaluate(() => [...document.querySelectorAll('.tab-btn')].map(b => b.dataset.tab).join(' '));
    const gone = await p.evaluate(() => !document.querySelector('.all-row') && !document.getElementById('sheet-indicators'));
    (tabs === 'cycle search analysis portfolio' && gone)
      ? ok('the tab bar reads Cycle, Search, Analysis, Portfolio', 'no All indicators row or page')
      : bad('the tab bar reads Cycle, Search, Analysis, Portfolio', JSON.stringify({ tabs, gone }));
    await p.click('.tab-btn[data-tab="search"]'); await settle(p); await sweep(p);
    const list = await p.evaluate(() => {
      const host = document.getElementById('search-list');
      const rows = [...host.querySelectorAll('.ind-row')];
      return {
        title: document.getElementById('topbar-title').textContent,
        cats: [...host.querySelectorAll('.ind-cat-name')].map(n => n.textContent),
        rows: rows.length, titles: new Set(rows.map(r => r.dataset.title)).size,
        cards: document.querySelectorAll('.cat-sheet .cat-item[data-open]:not([data-preview])').length,
        grouped: rows.filter(r => r.classList.contains('ind-grp')).length,
        doors: rows.every(r => document.getElementById(r.dataset.open)),
        figs: rows.every(r => r.classList.contains('ind-grp') ? !r.querySelector('.subject-value').textContent : r.querySelector('.subject-value').firstChild.nodeType === 3),
        grps: rows.filter(r => r.classList.contains('ind-grp')).map(r => r.dataset.title + '>' + r.dataset.open).join(),
        tabs: [...host.querySelectorAll('.ind-tabs .range-seg')].map(b => b.textContent).join(' ')
      };
    });
    (list.title === 'Search' && list.cats.join(' ') === 'Weather Mood Circulation Energy' && list.rows === list.titles &&
     list.doors && list.figs && list.grps === 'Valuations>sheet-grp-valuations,Stress>sheet-grp-stress' && list.tabs === 'All Structural Leading Coincident Lagging')
      ? ok('search lists every reading by category', list.rows + ' readings in ' + list.cats.join(', '))
      : bad('search lists every reading by category', JSON.stringify(list));
    const shown = async (kind, q) => {
      if (kind) { await p.click('#search-list .ind-tabs [data-ind-tab="' + kind + '"]'); }
      await p.fill('#search-input', q || ''); await settle(p);
      return p.evaluate(() => ({
        rows: [...document.querySelectorAll('#search-list .ind-row:not([hidden])')].map(r => r.dataset.title),
        cats: [...document.querySelectorAll('#search-list .ind-cat:not([hidden]) .ind-cat-name')].map(n => n.textContent),
        none: !document.querySelector('#search-list .search-none').hidden
      }));
    };
    const st = await shown('structural'), le = await shown('leading'), al = await shown('all');
    (st.rows.sort().join() === 'Productivity growth,Stress,Valuations' &&
     st.cats.join() === 'Mood,Energy' && le.rows.length > 0 && le.cats.join() === 'Weather,Mood,Circulation' && al.rows.length === list.rows && al.cats.length === 4)
      ? ok('the timing filter narrows the categories', 'structural ' + st.rows.length + ', leading ' + le.rows.length + ', all ' + al.rows.length)
      : bad('the timing filter narrows the categories', JSON.stringify({ st, le, al }));
    const infl = await shown(null, 'inflation'), mood = await shown(null, 'mood'), nil = await shown(null, 'zzzz'), back = await shown(null, '');
    const moodRows = await p.evaluate(() => document.querySelectorAll('#search-list .ind-cat.cat-mood .ind-row').length);
    (infl.rows.join() === 'Temperature' && mood.rows.length === moodRows && mood.cats.join() === 'Mood' && nil.none && !nil.rows.length &&
     back.rows.length === list.rows && !back.none)
      ? ok('the search box finds readings by name, meaning and category', 'inflation → Temperature, mood → its ' + moodRows + ' readings, none → a message')
      : bad('the search box finds readings by name, meaning and category', JSON.stringify({ infl, mood, nil, back }));
    await p.click('#search-list .cat-mood .ind-cat-head'); await settle(p);
    const head = await p.evaluate(() => ({ title: document.getElementById('topbar-title').textContent,
      open: !document.getElementById('sheet-cat-mood').hidden,
      home: document.querySelector('.tab-panel[data-tab="search"]').contains(document.getElementById('metric-page')) }));
    await p.click('#topbar-back'); await settle(p);
    const after = await p.evaluate(() => ({ title: document.getElementById('topbar-title').textContent,
      list: !document.getElementById('search-home').hidden }));
    (head.title === 'Mood' && head.open && head.home && after.title === 'Search' && after.list)
      ? ok('a category heading opens its page and back returns to Search')
      : bad('a category heading opens its page and back returns to Search', JSON.stringify({ head, after }));
    await p.click('#search-list .ind-row[data-open="sheet-sign-desire"]'); await settle(p);
    const fromSearch = await p.evaluate(() => {
      const b = document.querySelector('#metric-page .trendpill.can-toggle'); if (!b) return null;
      b.click(); const box = b.closest('.page-chart, .spread-history'), fit = box.querySelector('.fit');
      return { bar: document.getElementById('topbar-title').textContent, on: box.classList.contains('trend-on') && !!fit && getComputedStyle(fit).display !== 'none' };
    });
    (fromSearch && fromSearch.on)
      ? ok('a trend button works on a page opened from Search', fromSearch.bar)
      : bad('a trend button works on a page opened from Search', JSON.stringify(fromSearch));
    await p.goto('file://' + url); await ready(p);
    const lists = {};
    for (const cat of ['circulation', 'mood', 'energy']) {
      await click(p, '[data-open="sheet-cat-' + cat + '"]'); await settle(p);
      lists[cat] = await p.evaluate(c => ({ heads: document.querySelectorAll('#sheet-cat-' + c + ' h3, #sheet-cat-' + c + ' .cat-group-head').length,
        tall: [...document.querySelectorAll('#sheet-cat-' + c + ' .cat-item')].map(i => Math.round(i.getBoundingClientRect().height)),
        lead: (i => i && i.dataset.open + '<' + i.dataset.preview + ':' + (i.querySelector('.ci-value').textContent ===
          (document.querySelector('.cat-group .cat-item[data-open="' + i.dataset.preview + '"] .ci-value') || {}).textContent))(document.querySelector('#sheet-cat-' + c + ' .cat-item')),
        names: [...document.querySelectorAll('#sheet-cat-' + c + ' .cat-item')].map(i => i.querySelector('.ci-name').textContent).join('+') }), cat);
      await p.hover('#sheet-cat-' + cat + ' .cat-item');
      lists[cat].white = await p.evaluate(c => { const i = document.querySelector('#sheet-cat-' + c + ' .cat-item'), st = getComputedStyle(i);
        return st.backgroundColor === getComputedStyle(document.querySelector('.cat-sheet:not([hidden]) .cat-item:last-child')).backgroundColor &&
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
    const feel = await p.evaluate(() => {
      const card = document.querySelector('#diagnosis .trend-card');
      return { stage: document.querySelector('#diagnosis .trend-head').textContent.trim().split(' ')[0],
        head: card && card.querySelector('.trend-head').textContent.trim(), opens: card && card.dataset.open };
    });
    await click(p, '#diagnosis .trend-card'); await settle(p);
    const cyc = await p.evaluate(() => {
      const s = document.querySelector('#sheet-cat-mood:not([hidden]) .mood-curve'), card = document.querySelector('#sheet-cat-mood:not([hidden]) .hi-card .hi-name');
      return s && { labels: [...s.querySelectorAll('.mood-lab')].map(t => t.textContent).join('+'), calls: s.querySelectorAll('.mood-call').length,
        now: [...s.querySelectorAll('.mood-lab.now')].map(t => t.textContent), card: card && card.textContent,
        es: [...document.querySelectorAll('#sheet-cat-mood:not([hidden]) .hi-head')].map(h => h.textContent).join('+') + ':' +
          [...document.querySelectorAll('#sheet-cat-mood:not([hidden]) .highlights')].pop().querySelectorAll('.hi-card').length };
    });
    await p.click('#topbar-back'); await settle(p);
    (feel.head && feel.head.indexOf(feel.stage + ' in ') === 0 && feel.opens === 'sheet-cat-mood' && cyc && cyc.calls === 4 &&
     cyc.labels === 'OPTIMISM+EXCITEMENT+THRILL+EUPHORIA+ANXIETY+DENIAL+FEAR+DESPERATION+PANIC+DESPAIR+DEPRESSION+HOPE+OPTIMISM' &&
     cyc.now.length >= 1 && cyc.now.every(w => w === cyc.now[0]) && cyc.card.toUpperCase() === 'SHE\u2019S IN ' + cyc.now[0] &&
     cyc.es === 'Insights:1' && feel.stage.toUpperCase() === cyc.now[0])
      ? ok('the trend card opens the cycle of market emotions and her story this cycle, one emotion everywhere', feel.head + ' \u00b7 ' + cyc.now[0])
      : bad('the trend card opens the cycle of market emotions and her story this cycle, one emotion everywhere', JSON.stringify({ feel, cyc }));
    await click(p, '.season-wheel-hub-detail .who'); await settle(p);
    const wx = await p.evaluate(() => {
      const page = document.querySelector('#sheet-cat-weather:not([hidden])');
      return page && { bar: document.getElementById('topbar-title').textContent.trim(),
        names: [...page.querySelectorAll('.cat-item .ci-name')].map(n => n.textContent.trim()).join('+'),
        cards: [...page.querySelectorAll('.insights .hi-name')].map(n => n.textContent.trim()),
        modal: !document.getElementById('detail-modal') || document.getElementById('detail-modal').hidden !== false ? false : true };
    });
    await p.click('#topbar-back'); await settle(p);
    (wx && wx.bar === 'Weather' && wx.names === 'Temperature+Growth+S&P 500' && !wx.modal &&
     wx.cards.indexOf('In the body') > 0 && wx.cards.indexOf('The market this cycle') > 0 && wx.cards.indexOf('The barometer') > 0)
      ? ok('the season in the dial opens Weather, with the market and what the season means', wx.names + ' · ' + wx.cards.join(', '))
      : bad('the season in the dial opens Weather, with the market and what the season means', JSON.stringify(wx));
    await p.click('.tab-btn[data-tab="search"]'); await settle(p);
    await p.click('#search-list [data-open="sheet-grp-stress"]'); await settle(p);
    const grp = await p.evaluate(() => ({ bar: document.getElementById('topbar-title').textContent,
      names: [...document.querySelectorAll('#metric-page .cat-item')].map(i => i.querySelector('.ci-name').textContent).join('+') }));
    await p.click('#metric-page .cat-item[data-open="sheet-metric-debt"]'); await settle(p);
    const deep = await p.evaluate(() => document.getElementById('topbar-title').textContent);
    await p.click('#topbar-back'); await settle(p);
    const again = await p.evaluate(() => document.querySelectorAll('#metric-page .cat-item').length);
    await p.click('.tab-btn[data-tab="cycle"]'); await settle(p);
    await click(p, '[data-open="sheet-cat-energy"]'); await settle(p);
    const home = await p.evaluate(() => [...document.querySelectorAll('#metric-page .cat-item')].map(i => i.querySelector('.ci-name').textContent).join('+'));
    await p.click('#topbar-back'); await settle(p);
    (grp.bar === 'Stress' && grp.names === 'Federal debt+Interest payments+Federal budget+Households' && deep === 'Federal debt' &&
     again === grp.names.split('+').length && home === lists.energy.names)
      ? ok('a group in Search opens its cards, and they return home', grp.names)
      : bad('a group in Search opens its cards, and they return home', JSON.stringify({ grp, deep, again, home }));
    await p.goto('file://' + url); await ready(p);
    const icons = await p.evaluate(() => ['weather', 'circulation', 'mood', 'energy'].map(k => {
      const col = el => el ? getComputedStyle(el).color : null;
      const cat = col(document.querySelector('#sheet-cat-' + k + ' .ci-name'));
      const cards = [...document.querySelectorAll('#sheet-cat-' + k + ' .cat-item .ci-head .peek-mark')];
      const rows = [...document.querySelectorAll('#search-list .ind-cat.cat-' + k + ' .ind-row .subject-icon span')];
      return { k, cards: cards.length, rows: rows.length, shapes: new Set(cards.map(m => (m.querySelector('svg') || {}).innerHTML)).size,
        same: !!cat && cards.concat(rows).every(m => col(m) === cat) };
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
    (view && view.dial && view.today && view.tiles === 2 && view.closed && view.bar === 'Housing Cycle' &&
     got.length === 18 && live.length >= 16 && live.every(i => /over the cycle|Flat all cycle/.test(i.word)) &&
     live.every(i => /200[3-8]/.test(i.when)))
      ? ok('a closed cycle opens on the Cycle page itself', view.tiles + ' tiles \u00b7 ' + live.length + ' of ' + got.length + ' cards read 2003\u20132008')
      : bad('a closed cycle opens on the Cycle page itself', JSON.stringify({ view, got }));

    const eraSig = await sig();
    const drift = Object.keys(todaySig).filter(k => eraSig[k].val !== '\u2014' &&
      (eraSig[k].art !== todaySig[k].art || eraSig[k].unit !== todaySig[k].unit || eraSig[k].val === todaySig[k].val));
    (Object.keys(todaySig).length === 18 && !drift.length && eraSig['sheet-metric-valuation'].art === 'heat' && eraSig['sheet-sign-sentiment'].art === 'vital-ring')
      ? ok('past-cycle cards keep today\u2019s design', 'same mini and unit on every measured card, a different figure')
      : bad('past-cycle cards keep today\u2019s design', JSON.stringify(drift.map(k => [k, todaySig[k], eraSig[k]])));
    const blank = got ? got.filter(i => i.val === '\u2014') : [];
    const noHistory = got ? got.filter(i => i.word === 'No history in the app').map(i => i.open) : [];
    (blank.length && noHistory.every(o => NO_HISTORY.includes(o)) &&
     blank.every(i => /^Not measured before |^No history in the app$/.test(i.word)))
      ? ok('cycle categories leave a short record blank', blank.map(i => i.name + ': ' + i.word).join(' · '))
      : bad('cycle categories leave a short record blank', JSON.stringify(blank));

    await click(p, '#sheet-cat-mood .cat-item[data-open="sheet-grp-valuations"]');
    await settle(p);
    await click(p, '#sheet-grp-valuations .cat-item[data-open="sheet-metric-valuation"]');
    await settle(p);
    const picked = await p.evaluate(() => (document.querySelector('#metric-page .hist-controls') || {}).textContent || '');
    const bar = () => p.evaluate(() => (document.getElementById('topbar-back').hidden ? '' : '← ') + document.getElementById('topbar-title').textContent);
    const trail = [];
    for (let i = 0; i < 4; i++) { await p.evaluate(() => document.getElementById('topbar-back').click()); await settle(p); trail.push(await bar()); }
    (trail.join(' | ') === '← Valuations | ← Mood | ← Housing Cycle | Analysis')
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
  const INVERTED = [
    {m:'1M',y:5.60},{m:'2M',y:5.58},{m:'3M',y:5.55},{m:'4M',y:5.50},{m:'6M',y:5.40},
    {m:'1Y',y:5.10},{m:'2Y',y:4.60},{m:'3Y',y:4.40},{m:'5Y',y:4.20},{m:'7Y',y:4.10},
    {m:'10Y',y:4.05},{m:'20Y',y:4.30},{m:'30Y',y:4.25}
  ];
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

  const plain = await loadWith(null);
  (plain.r.fgNum && plain.r.yld && !plain.errs.length)
    ? ok('live cache absent', plain.r.fgNum + '% / ' + plain.r.yld)
    : bad('live cache absent', JSON.stringify(plain.r) + ' ' + plain.errs.join(' | '));

  const FF_SEED = JSON.stringify({ fedFunds: { kind: 'object', lo: 2.5, hi: 2.75 } });
  const objSeed = await loadWith(FF_SEED);
  const dates = t => (t.match(/[A-Z][a-z]{2} \d{1,2}, \d{4}/g) || []);
  const lost = dates(plain.text).filter(d => objSeed.text.indexOf(d) === -1);
  (/2\.50/.test(objSeed.text) && !lost.length && !/undefined/.test(objSeed.text) && !objSeed.errs.length)
    ? ok('live cache object doc', 'lo/hi applied, ' + dates(plain.text).length + ' editorial dates survive')
    : bad('live cache object doc', 'rate ' + /2\.50/.test(objSeed.text) + ' lost ' + lost.join(', ') +
        ' undefined ' + /undefined/.test(objSeed.text) + ' ' + objSeed.errs.join(' | '));

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
    watch(g, 'repaint');
    await g.goto('file://' + url); await ready(g);

    const read = () => g.evaluate(() => {
      const t = s => { const e = document.querySelector(s); return e ? e.textContent.trim().replace(/\s+/g, ' ') : null; };
      const k = s => { const e = document.querySelector(s); return e ? e.className : null; };
      return { sentiment: t('#subj-value-sentiment'),
               mood: t('[data-open="sheet-sign-sentiment"] .tag'),
               moodClass: k('[data-open="sheet-sign-sentiment"] .tag'),
               pressureFigs: [...document.querySelectorAll('[data-open="sheet-sign-pressure"] .ci-value, [data-open="sheet-sign-pressure"] .subject-value')]
                              .map(e => e.textContent.trim()),
               valuation: t('#subj-value-valuation') };
    });

    const seam = await g.evaluate(() => !!(window.__GYN && window.__GYN.applyLive));
    if (!seam) bad('repaint seam present', 'window.__GYN.applyLive missing');

    if (seam) {
      const before = await read();
      const rv = await g.evaluate(() => {
        const G = window.__GYN;
        return {
          fg: G.applyLive('vixClose', 31),
          yc: G.applyLive('yieldCurve', [{m:'3M',y:5.55},{m:'2Y',y:4.60},{m:'10Y',y:4.05}]),
          nul: G.applyLive('vix3mClose', null),
          bad: G.applyLive('vix3mClose', { nope: 1 }),
          unk: G.applyLive('notADocument', { a: 1 })
        };
      });
      await settle(g);
      const after = await read();

      (rv.fg && /^31\.0/.test(after.sentiment || '') && before.sentiment !== after.sentiment)
        ? ok('repaint volatility figure', (before.sentiment || '').slice(0, 12) + ' -> ' + (after.sentiment || '').slice(0, 12))
        : bad('repaint volatility figure', JSON.stringify(after.sentiment));

      (after.moodClass && after.moodClass !== before.moodClass && after.mood === 'Fearful')
        ? ok('repaint derived verdict', before.moodClass + ' -> ' + after.moodClass)
        : bad('repaint derived verdict', before.moodClass + ' -> ' + after.moodClass + ' / ' + after.mood);

      (rv.yc && after.pressureFigs.length > 0 && after.pressureFigs.every(f => /^4\.05%/.test(f)))
        ? ok('repaint the 10-year yield on Pressure', before.pressureFigs.join('/') + ' -> ' + after.pressureFigs.join('/'))
        : bad('repaint the 10-year yield on Pressure', JSON.stringify(after.pressureFigs));

      (rv.nul === false && rv.bad === false && rv.unk === false)
        ? ok('repaint refuses bad input', 'null, wrong shape, unknown doc')
        : bad('repaint refuses bad input', JSON.stringify(rv));


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
      const bandOk = bn.length > 0 && bn.every(n => {
        const b = bands[n];
        return b.lo === true && b.hi === true && b.under === false && b.over === false
            && b.nan === false && b.str === false && b.arr === false;
      });
      bandOk ? ok('every scalar band is inclusive and refuses outside it', bn.join(', '))
             : bad('every scalar band is inclusive and refuses outside it', JSON.stringify(bands));

    }
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
      ((k.mixed || 0) <= 2)
        ? ok('no more than two mixed steps', JSON.stringify(k))
        : bad('no more than two mixed steps', JSON.stringify(k) + ' \u2014 split a mixed step into a derive and a render');
    }

    const roster = await g.evaluate(() => {
      const G = window.__GYN, R = G.ROSTER, step = G.steps.filter(s => s.name === 'checkRoster')[0];
      if (!R || !step) return null;
      const cards = [...document.querySelectorAll('.cat-sheet .cat-item[data-open]:not([data-preview])')].map(c => c.dataset.open);
      const warned = [], warn = console.warn;
      console.warn = m => warned.push(String(m));
      R.push(Object.assign({}, R[0], { group: R.filter(r => r.group)[0].group, live: ['nowhere'] }));
      try { step.fn(); } finally { R.pop(); console.warn = warn; }
      const lazy = R.flatMap(r => [r.hist, r.peek]).filter(f => typeof f === 'function');
      const keyed = lazy.every(f => { const s = f(); return s.length > 0 && s.every(d => d && d.k != null && typeof d.v === 'number'); });
      return { ids: R.map(r => r.id), cards, warned: warned.join(' '), keyed, lazy: lazy.length };
    });
    if (!roster) bad('the roster is every card, in card order', 'no GYN.ROSTER or no checkRoster step');
    else {
      JSON.stringify(roster.ids) === JSON.stringify(roster.cards)
        ? ok('the roster is every card, in card order', roster.ids.length + ' readings')
        : bad('the roster is every card, in card order', 'roster ' + roster.ids.join(',') + ' / cards ' + roster.cards.join(','));
      (roster.lazy > 0 && roster.keyed)
        ? ok('every series the past cycles read is keyed points', roster.lazy + ' computed series')
        : bad('every series the past cycles read is keyed points', 'a computed series returns bare numbers');
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
      null, { timeout: 5000 }).catch(() => null);
    await settle(g);

    const doors = sheet => g.evaluate(s => [...document.querySelectorAll('[data-open="' + s + '"]')].map(d => {
      const v = d.querySelector('.ci-value, .subject-value');
      const w = d.querySelector('.tag');
      return (v ? v.firstChild.nodeValue.trim() : '-') + '|' + (w ? w.textContent.trim() : '');
    }), sheet);
    const cape = await doors('sheet-metric-valuation');
    const dxDrift = await g.evaluate(() => {
      const word = id => ((document.querySelector('.cat-item[data-open="' + id + '"] .ci-word') || {}).textContent || '').trim().toLowerCase();
      const line = [...document.querySelectorAll('#diagnosis .dx-v')].map(v => v.textContent).find(t => /Hormones are/.test(t)) || '';
      const want = 'Hormones are ' + word('sheet-sign-hormones') + '; money is ' + word('sheet-sign-volume') + '.';
      return line === want ? [] : ['diagnosis "' + line + '", cards "' + want + '"'];
    });
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
    (ff.length >= 2 && ff.every(t => /^1\.25/.test(t)) && ff.some(t => /Easing/.test(t)) && ff.every(t => !/Tightening/.test(t)))
      ? ok('site feed moves an object doc, word and all', ff.join(' · '))
      : bad('site feed moves an object doc, word and all', JSON.stringify(ff));
    !dxDrift.length ? ok('after the site feed the Diagnosis reads what every card reads')
                    : bad('after the site feed the Diagnosis reads what every card reads', dxDrift.join(' | '));
    (cache.capeValue && cache.capeValue.value === 50.5 && cache.fedFunds && cache.fedFunds.lo === 1.25 && !('_meta' in cache))
      ? ok('site feed writes the cache, without _meta')
      : bad('site feed writes the cache, without _meta', JSON.stringify(cache).slice(0, 200));
  }

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
