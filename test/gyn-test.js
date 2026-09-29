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
  /* V598: one page, two readings of one series — the spread and the levels — swapped by the ⋯ menu, so
     the page is checked once. The second entry the merged Hormones page carried is gone with the chart. */
  ['sheet-sign-horizon','hzn-range','Horizon'],
  /* V596: Pressure merged into Hormones, and that page carries TWO histories — the rate the Fed sets and
     the yields the market charges — so it is listed twice, once per history. Each entry is checked against
     its OWN chart (see the band lookup below), so the second is a real assertion and not a duplicate of the
     first: it proves the maturity chart still wears the head, the ⋯ and a note of its own on the merged page. */
  ['sheet-sign-hormones','hormones-range','Hormones'],
  ['sheet-sign-pressure','pressure-range','Pressure'],
  ['sheet-sign-desire','desire-range','Desire'],
];
/* Values CLAUDE-CODE.md states as live. A change here must be a deliberate edit of both. */
const TOKENS = {
  '--pad':'10px', '--gap':'10px', '--gap-top':'20px', '--radius':'16px', '--radius-inner':'13px',
};
const SRC_MUST = [
  ['COL_FILL', /var COL_FILL = 0\.68;/],
  /* V581: this pinned the three keys AXIS had in V551. The history work grew it to seven, and because
     nothing updated the pin, `npm test` failed on every commit from V552 on \u2014 and deploy `needs: test`,
     so the SITE stopped at V551 while twenty-nine versions were committed, tagged and published to the
     artifact. A pin that must be edited deliberately is the point; not noticing for a month is not. */
  ['AXIS',     /var AXIS = \{ L:37, R:6, T:10, LEG:20, RAIL:5, FOOT:8, READ:61 \};/],
  ['no .vh-line', /`\.vh-line` is gone/],
  /* V602, Keren: "this behaviour should apply to all history menus \u2014 make it a rule for the future", and
     "it should also behave like a component." The rule is kept by there being ONE menu shape: `menu` returns
     groups and headMenuHtml drills them. This pins the sentence that says so, because the way a component
     quietly becomes two is somebody adding back a shorter path for one page. */
  ['one menu shape', /THE HEAD MENU IS ONE COMPONENT/],
    ['one chart frame', /THE HISTORY FRAME IS ONE COMPONENT/],
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

  /* ANY address, not one particular one — the whole point of the generic form is that Keren's own
     address is not written down in a public repo in order to be looked for. */
  const leak = (src.match(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g) || []);
  leak.length === 0 ? ok('no email in markup')
                    : bad('no email in markup', leak.length + ' address(es) — DO NOT PUBLISH');

  /* These are claims about the SOURCE, so they read src/ — since V548 the built file has had its
     comments stripped and its JS reprinted by terser, and one of these looks for a comment. */
  const SRC_DIR = path.join(__dirname, '..', 'src');
  const MANIFEST = path.join(SRC_DIR, 'manifest.json');
  if (!fs.existsSync(MANIFEST)) {
    // the suite takes any html file; only a repo checkout has src/ beside it
    SRC_MUST.forEach(([name]) => ok('source: ' + name, 'skipped — no src/ here'));
  } else {
    const source = JSON.parse(fs.readFileSync(MANIFEST, 'utf8'))
      .map(n => fs.readFileSync(path.join(SRC_DIR, n), 'utf8')).join('\n');
    for (const [name, re] of SRC_MUST)
      re.test(source) ? ok('source: ' + name)
        : bad('source: ' + name, 'src/ no longer matches ' + re.source + ' \u2014 update the pin or the source; '
                                 + 'until this passes CI skips deploy and the SITE does not update');
  }

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
      /* V596: the band is the one holding THIS history's head, not simply the first on the page — a page may
         now hold two, and measuring the wrong chart would pass while proving nothing about the right one. */
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
  /* ---- 2b2. the head menu's two levels (V602) ----
     Every head whose \u22ef offers a which-series choice must behave the same way: the root lists GROUPS, a
     click opens one, and a click on the way back returns to the root and STAYS there. That last clause is
     the V601 bug written as a test \u2014 opening on hover meant Back put the root rows under a pointer that
     had not moved, which walked straight back in, so this asserts with a real mouse over the row it clicks. */
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
      (root.length >= 2 && drilled && drilled.picks > 1 && drilled.back && back && back.groups === root.length && back.picks === 0)
        ? ok('head menu drills and returns', root.join(', '))
        : bad('head menu drills and returns', JSON.stringify({ root, drilled, back }));
    } else bad('head menu drills and returns', 'no door to Horizon');
    gerr.length ? bad('no errors in the head menu', gerr.join(' | ')) : ok('no errors in the head menu');
    await gp.close();
  }

  /* ---- 2b3. Growth's economy lives in the head menu (V613) ----
     Keren: "put the country picker in the growth page under the three dots in history." So the choice has to
     be IN that menu, obeying the component's contract \u2014 a group at the root that names what is on, rows one
     level in, and a pick that changes the root's reading \u2014 and the old dropdown has to be gone rather than
     hidden, or the app would carry two controls for one choice. */
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

  /* ---- 2b4. no history wears another chart's geometry (V618) ----
     The crosshair reads a geometry \u2014 where the columns start and end, how many, how to turn an index back
     into a date \u2014 and until V618 that travelled on a module variable thirteen charts wrote and fifteen
     callers read on the following line. One caller does not redraw at all (refitHistory returns early when
     the width already matches), so it attached whatever the last page left behind: a crosshair reading
     another chart's scale, which is invisible, because the numbers it shows are plausible and simply wrong.
     Geometry now carries the name of the chart that made it, attachHistory is the only reader, and a page
     asking for one nobody drew is recorded. This asserts the record is empty after walking every page \u2014 so
     the day this breaks is the day it is seen, rather than a year later. */
  {
    const misses = await p.evaluate(() => (window.__geomMiss || []).slice(0, 6));
    misses.length ? bad('every history wears its own geometry', misses.join(' | '))
                  : ok('every history wears its own geometry');
  }

  /* ---- 2b5. one reading, one paint (V619) ----
     A reading is printed on every list offering a door to its page, and before V619 two of them were painted
     by ELEMENT ID, which reaches one door of two. Both were wrong in the shipped app: a fresh CAPE moved an
     element no reader sees and left both visible copies stale, and an FOMC cut moved the Hormones figure on
     its category item while the roster row kept the old rate AND the word Tightening. A stale figure looks
     exactly like a fresh one, so nothing short of this could have caught it.
     The two readings are asserted on EVERY door, figure and word together, and the third \u2014 the record of a
     reading whose doors printed nothing \u2014 is what will catch the next door shape nobody thought of. */
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

  /* ---- 2b6. every reach finds something (V620) ----
     Renderers reach into the document by NAME, and a guard hides three different failures behind one shape:
     a name that does not exist (V617 fails the build on those), a name that is not on the page being rendered
     so the renderer silently does nothing, and a name that is there but was skipped, leaving yesterday's
     content. `byId` records every reach that came up empty and `byIdMaybe` is how a reach DECLARES it expects
     nothing sometimes, so optional and broken stop looking alike. Walking every page today: two reaches found
     nothing, both already known and both now declared. This asserts the record stays empty. */
  {
    const miss = await p.evaluate(() => Object.keys(window.__elMiss || {}));
    miss.length ? bad('every reach finds something', miss.map(i => '#' + i).join(', '))
                : ok('every reach finds something');
  }

  perr.length ? bad('no errors while navigating', perr.join(' | ')) : ok('no errors while navigating');

  // 2c. the cycle picker says Today, capital T
  await p.goto('file://' + url); await p.waitForTimeout(1300);
  await p.evaluate(() => document.querySelector('.tab-btn[data-tab="analysis"]').click());
  await p.waitForTimeout(600);
  const spans = await p.evaluate(() => [...document.querySelectorAll('.era-years')].map(e => e.textContent.trim()));
  spans.some(s => /–Today/.test(s)) ? ok('cycle span says Today') : bad('cycle span says Today', spans.join(' | '));

  /* ---- 2c2. Rhymes (V610, rebuilt V612) ----
     Three claims, and they are the ones the card lives or dies on. The picker must actually REPLACE the
     comparison \u2014 a control that repaints the heading and leaves the figures behind would be worse than no
     control. Where the record does not reach the chosen peak the cell must be EMPTY and say from when it IS
     measured: the fear curve starts 2007-12 and the yield curve 2005 Q1, so standing beside March 2000 must
     leave dashes and no interpolated number. And the dot must never land on a row with a dash in it \u2014 that is
     the whole of why Version 612 replaced the Echoes grid: a mark is only worth anything on a row whose two
     figures are on the screen to check it against. */
  {
    const read = () => p.evaluate(() => ({
      say: document.querySelector('.rhy-say').innerText.replace(/\s+/g, ' ').trim(),
      first: document.querySelector('.rhy-row .rhy-cell b').textContent.trim(),
      subs: [...document.querySelectorAll('.rhy-cell')].map(c => c.querySelector('i').textContent.trim()),
      na: document.querySelectorAll('.rhy-cell.na').length,
      rows: document.querySelectorAll('.rhy-row').length,
      grps: document.querySelectorAll('.rhy-grp').length,
      marks: document.querySelectorAll('.rhy-mark').length,
      markOnBlank: [...document.querySelectorAll('.rhy-row.alike')].filter(r => r.querySelector('.rhy-cell.na')).length
    }));
    await p.click('[data-rhyme="2000"]'); await p.waitForTimeout(250);
    const y2000 = await read();
    await p.click('[data-rhyme="2007"]'); await p.waitForTimeout(250);
    const y2007 = await read();
    (/Dot-Com Cycle/.test(y2000.say) && /49\.1%/.test(y2000.say) && /929 days/.test(y2000.say) &&
     /Housing Cycle/.test(y2007.say) && /56\.8%/.test(y2007.say) && /517 days/.test(y2007.say) &&
     y2000.first !== y2007.first && y2000.rows === 13 && y2000.grps === 4)
      ? ok('rhymes picker swaps the comparison', y2000.first + ' -> ' + y2007.first)
      : bad('rhymes picker swaps the comparison', JSON.stringify({ y2000, y2007 }));

    // Four at 2000 \u2014 Fear (2007-12), Desire (2023-09), Horizon and Households (both 2005 Q1); two at 2007,
    // because the fear curve begins two months AFTER that October peak and Desire is a three-year licence.
    (y2000.na === 4 && y2007.na === 2 && y2000.subs.some(t => /^from 2005 Q1$/.test(t)) &&
     y2000.subs.some(t => /^Jan 2000$/.test(t)))
      ? ok('rhymes leaves the record blank', y2000.na + ' at 2000, ' + y2007.na + ' at 2007')
      : bad('rhymes leaves the record blank', JSON.stringify({ na2000: y2000.na, na2007: y2007.na, subs: y2000.subs }));

    (y2000.marks > 0 && !y2000.markOnBlank && !y2007.markOnBlank)
      ? ok('rhymes marks only what it shows', y2000.marks + ' at 2000, ' + y2007.marks + ' at 2007')
      : bad('rhymes marks only what it shows',
            JSON.stringify({ marks: y2000.marks, onBlank: [y2000.markOnBlank, y2007.markOnBlank] }));
  }

  /* ---- 2c3. a closed cycle's four categories (V613) ----
     Opening a cycle from Analysis must give the Cycle tab's four categories with the readings SHOWN, not
     doored. Three claims: all four categories and all thirteen readings are there; every row that has data
     inside those years states the range it travelled; and a reading whose record does not reach the cycle says
     so instead of borrowing a figure from outside the years \u2014 the rule Rhymes keeps, kept here too. */
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

    /* V615: the two cards that used to be dragged in here are gone, and each row carries the cycle's shape
       instead. Both halves are asserted, because the first without the second is a view that lost a picture
       and the second without the first is the duplication that made her ask. The cards must still EXIST \u2014 in
       their drawers, showing the cycle that is actually current \u2014 so this checks where they are, not whether
       they are. */
    const shape = await p.evaluate(() => ({
      dragged: !!document.querySelector('#calendar-cycle #temp-card, #calendar-cycle #growth-card'),
      home: !!document.querySelector('#slot-temp #temp-card') && !!document.querySelector('#slot-growth #growth-card'),
      sparks: document.querySelectorAll('#cycle-cats .ci-mini .spark').length,
      stale: /Current cycle/i.test((document.getElementById('calendar-cycle') || {}).innerText || '')
    }));
    (!shape.dragged && shape.home && shape.sparks >= 10 && !shape.stale)
      ? ok('closed cycle drops the live cards', shape.sparks + ' rows carry their own shape')
      : bad('closed cycle drops the live cards', JSON.stringify(shape));

    /* V616: the open cycle is not a closed one. Its row still opens \u2014 onto the Cycle tab, which IS this view
       still moving \u2014 rather than building a frozen copy of a cycle that has not ended. The two halves matter
       separately: landing on the Cycle tab is the feature, and NOT having built the closed-cycle view is what
       says the app is not quietly calling the AI Cycle over. */
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

  // ---- 2d. the live-data cache (Version 528)
  // The claim of the cache layer is that a cached answer lands BEFORE any derived value is computed, so a
  // seeded figure moves the readings that are computed from it, not just the number that is printed. Both
  // shapes are proved — an object doc through Fear & Greed's mood class, a series doc through the spread
  // Horizon computes from the curve — and every malformed cache must fall back to the literals in silence.
  /* V596: the series doc was read off Pressure's 10Y/3M pair, which merged into Hormones and stopped being a
     figure. Horizon's spread is the stronger target anyway: it is DERIVED from the two legs the seed moves,
     so a cached curve that failed to land before the derivation would show up here and could not there. */
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

  /* V546: the object doc under test is `fedFunds`, since `fearGreed` left with CNN. It also pins the
     V544 rule the harder way: the seed carries lo and hi ONLY, and the editorial fields around them
     (the FOMC date, the vote, the next meeting) must survive, because a live document merges over
     the file rather than replacing it. Before V544 this seed blanked all three. */
  const FF_SEED = JSON.stringify({ fedFunds: { kind: 'object', lo: 2.5, hi: 2.75 } });
  const objSeed = await loadWith(FF_SEED);
  const objText = await (async () => {
    const c = await b.newContext({ viewport: { width: 414, height: 1000 } });
    const g = await c.newPage();
    await g.addInitScript(x => { try { localStorage.setItem('gyn.live', x); } catch (e) {} }, FF_SEED);
    await g.goto('file://' + url); await g.waitForTimeout(1300);
    // the page's TEXT, not its source: body.textContent includes every <script>, where the word
    // "undefined" legitimately appears, and innerText skips the drawers these rows live in
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
      /* V593: the verdict moved off the half-dial when that went. It is read where it now lives \u2014 the tag on
         the row that opens this page \u2014 which is the same claim, not a softened one: this assertion is the
         reason the dead repaint was caught at all. */
      return { sentiment: t('#subj-value-sentiment'),
               mood: t('[data-open="sheet-sign-sentiment"] .tag'),
               moodClass: k('[data-open="sheet-sign-sentiment"] .tag'),
               /* V596: the verdict is read where it LIVES, not where it is written — catItem lifts this
                  reading's inline tag out of the figure into a sibling .ci-word, the same V593 shape Fear
                  has. Both figures are read too, because a reading wears one on each door onto its page and
                  only walking both catches a repaint that reached one of them. */
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

      /* The curve is DERIVED from two legs, so this moves the far one and the ratio must follow:
         14.21 / 12 = 1.18. A stored copy of the ratio would not move; a recomputed one does. */
      (rv.fg && /^1\.18/.test(after.sentiment || '') && before.sentiment !== after.sentiment)
        ? ok('repaint fear curve figure', (before.sentiment || '').slice(0, 12) + ' -> ' + (after.sentiment || '').slice(0, 12))
        : bad('repaint fear curve figure', JSON.stringify(after.sentiment));

      // the DERIVED verdict is the real claim: a number can be printed, a verdict must be recomputed
      (after.moodClass && after.moodClass !== before.moodClass && after.mood === 'Inverted')
        ? ok('repaint derived verdict', before.moodClass + ' -> ' + after.moodClass)
        : bad('repaint derived verdict', before.moodClass + ' -> ' + after.moodClass + ' / ' + after.mood);

      /* V596: a stronger claim than the pair this replaces. 4.05 − 5.55 = −1.50, and a spread that deep is
         Pessimistic — so the figure AND the verdict computed from it must both move, through the same
         `horizonWord` the load-time read uses. Printing the pair proved only that a number was copied. */
      (rv.yc && after.horizonFigs.length > 1 && after.horizonFigs.every(f => /1\.50/.test(f)) &&
       after.horizonTag === 'Pessimistic')
        ? ok('repaint horizon spread and verdict', before.horizonFigs.join('/') + ' -> ' + after.horizonFigs.join('/') + ' ' + after.horizonTag)
        : bad('repaint horizon spread and verdict', JSON.stringify(after.horizonFigs) + ' / ' + after.horizonTag);

      (rv.nul === false && rv.bad === false && rv.unk === false)
        ? ok('repaint refuses bad input', 'null, wrong shape, unknown doc')
        : bad('repaint refuses bad input', JSON.stringify(rv));

      perr.length ? bad('no errors while repainting', perr.join(' | ')) : ok('no errors while repainting');
    }
    await c.close();
  }

  // ---- 2f. the registry invariant (Version 535)
  // EVERY step GYN.render() runs must converge: run it to settle, then running it again changes
  // nothing. Convergence rather than first-run equality, because a width-aware chart re-measures
  // its host and legitimately redraws once at the new width. A step that APPENDS keeps growing and
  // still fails, which is what this exists to catch. This is what makes the kinds trustworthy: a
  // step that stops being repeatable fails the build instead of rotting quietly.
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
      // the kinds are a measured fact about the file; a change here is a real change
      const k = inv.kinds;
      // V592: build 3 -> 4 and check 6 -> 7, both from Hormones — renderHormones is a build step and
      // checkFedFundsHistory is the V305 data check its chart is not allowed to draw without.
      // V610: wire 7 -> 8, renderRhymes. V611 added renderEchoes; V612 folded it back in and took it away.
      (k.build === 5 && k.mixed === 2 && k.wire === 8)
        ? ok('step kinds', JSON.stringify(k))
        : bad('step kinds', JSON.stringify(k) + ' — expected build 5, mixed 2, wire 8');
      perr.length ? bad('no errors while re-running steps', perr.join(' | '))
                  : ok('no errors while re-running steps');
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
