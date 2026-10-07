#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const PAD_OWNERS = ['colPeek', 'meterPeek'];
const DYNAMIC_CLASS = /^(cat-(weather|circulation|mood|stress)|mkt-(up|down)|f[0-9])$/;
const GONE = ['vh-line', 'subject-chev', 'gdpPeers', 'pickPeer', 'data-gdp-peer', 'panel-row', 'pbar', 'rbar-track', 'reading-box', 'all-row', 'sheet-indicators', 'growth-peers', 'peer-picker'];
const PINNED = [['COL_FILL', /var COL_FILL = 0\.68;/], ['AXIS', /var AXIS = \{ L:37, R:6, T:10, LEG:20, RAIL:5, FOOT:8, READ:61 \};/]];

function enclosing(src, at) {
  const re = /\n(?:export )?function\s+([\w$]+)/g;
  let m, name = null;
  while ((m = re.exec(src)) && m.index < at) name = m[1];
  return name;
}

function lineOf(src, at) { return src.slice(0, at).split('\n').length; }

function fontSizes(css) {
  const out = [];
  css.split('\n').forEach((line, i) => {
    if (/--type-|\.cycle-dial/.test(line)) return;
    const re = /font-size:\s*([^;}]+)/g;
    let m;
    while ((m = re.exec(line))) {
      const v = m[1].trim();
      if (/^var\(--type-[a-z-]+\)$/.test(v) || /^calc\(/.test(v) || /^[0-9.]+em$/.test(v)) continue;
      out.push('styles.css:' + (i + 1) + ' font-size ' + v + ' is not a --type token');
    }
  });
  return out;
}

function pageScoped(css, pages) {
  const out = [], own = (pages || []).length ? new RegExp('#(' + pages.join('|') + ')(?![\\w])|#(' + pages.join('|') + ')-') : null;
  css.split('\n').forEach((line, i) => {
    const sel = line.split('{')[0];
    if (/#sheet-[\w-]+|\[data-page\b/.test(sel) || (own && own.test(sel))) out.push('styles.css:' + (i + 1) + ' styles one page by id');
  });
  return out;
}

function inlineType(file, src) {
  const out = [], re = /style=\\?["'][^"']*?(?<![\w-])(font(?:-[a-z]+)?|line-height|letter-spacing|color)\s*:|\.style\.(font\w*|lineHeight|letterSpacing|color)\s*=/g;
  let m;
  while ((m = re.exec(src))) out.push(file + ':' + lineOf(src, m.index) + ' sets ' + (m[1] || m[2]) + ' inline; type belongs to a class');
  return out;
}

function nameBranches(file, src) {
  const out = [];
  const re = /\bind\.bodyTerm\s*[!=]==|\b\w+\.(?:bodyTerm|econTerm|name|marker)\s*[!=]==\s*["']/g;
  let m;
  while ((m = re.exec(src))) {
    const line = src.split('\n')[lineOf(src, m.index) - 1];
    if (!/^ind\./.test(m[0]) && /\.(filter|find|findIndex|some)\(/.test(line)) continue;
    out.push(file + ':' + lineOf(src, m.index) + ' branches on a reading’s name');
  }
  const px = /font-size:\s*[0-9.]+px/g;
  while ((m = px.exec(src))) out.push(file + ':' + lineOf(src, m.index) + ' font-size in px, not a --type token');
  return out;
}

function chartFrames(file, src) {
  const out = [];
  let m;
  const h = /\bH\s*=\s*(\d|narrow\s*\?)/g;
  while ((m = h.exec(src))) {
    if (enclosing(src, m.index) !== 'histFrame') out.push(file + ':' + lineOf(src, m.index) + ' sets a chart height outside histFrame');
  }
  const pad = /\bpad[TBLR]\s*=\s*\d/g;
  while ((m = pad.exec(src))) {
    const fn = enclosing(src, m.index);
    if (PAD_OWNERS.indexOf(fn) === -1) out.push(file + ':' + lineOf(src, m.index) + ' sets a chart margin outside histFrame (in ' + fn + ')');
  }
  return out;
}

function unused(js, html, css, files) {
  const all = js + '\n' + html;
  const countIn = (n, t) => (t.match(new RegExp('\\b' + n.replace(/\$/g, '\\$') + '\\b', 'g')) || []).length;
  const count = n => countIn(n, all);
  const out = [];
  Object.keys(files || {}).forEach(f => {
    new Set([...files[f].matchAll(/^function\s+([A-Za-z_$][\w$]*)\s*[<(]/gm)].map(m => m[1])).forEach(n => {
      if (countIn(n, files[f]) <= 1 && count(n) > 1) out.push('function ' + n + ' in ' + f + ' is never used there');
    });
  });
  new Set([...js.matchAll(/function\s+([A-Za-z_$][\w$]*)\s*[<(]/g)].map(m => m[1])).forEach(n => {
    if (count(n) <= 1) out.push('function ' + n + ' is never used');
  });
  new Set([...js.matchAll(/\bvar\s+([A-Za-z_$][\w$]*)\s*[:=]/g)].map(m => m[1])).forEach(n => {
    if (count(n) <= 1) out.push('var ' + n + ' is never used');
  });
  new Set([...css.replace(/\/\*[\s\S]*?\*\//g, '').matchAll(/\.([a-zA-Z][\w-]*)/g)].map(m => m[1])).forEach(c => {
    if (!DYNAMIC_CLASS.test(c) && !new RegExp('(^|[^\\w-])' + c + '(?![\\w-])').test(all)) out.push('style .' + c + ' matches nothing in the app');
  });
  return out;
}

function twice(js) {
  const seen = {};
  for (const m of js.matchAll(/^(?:export )?function ([A-Za-z_$][\w$]*)\s*[<(]/gm)) seen[m[1]] = (seen[m[1]] || 0) + 1;
  return Object.keys(seen).filter(n => seen[n] > 1).map(n => 'function ' + n + ' is declared ' + seen[n] + ' times; the last one silently replaces the others');
}

function unusedTokens(css, code) {
  const bare = css.replace(/\/\*[\s\S]*?\*\//g, ''), all = bare + code;
  return [...new Set([...bare.matchAll(/(--[\w-]+)\s*:/g)].map(m => m[1]))]
    .filter(n => !new RegExp('var\\(\\s*' + n + '(?![\\w-])').test(all) && !all.includes('"' + n + '"') && !all.includes("'" + n + "'"))
    .map(n => 'token ' + n + ' is never read');
}

function gone(all) {
  return GONE.filter(n => new RegExp('(^|[^\\w-])' + n + '(?![\\w-])').test(all)).map(n => n + ' is gone on purpose (docs/ARCHITECTURE.md)');
}

function pinned(js) {
  return PINNED.filter(([, re]) => !re.test(js)).map(([n]) => n + ' moved from its pinned value: update the pin with the decision, or put it back');
}

function cycles(files) {
  const deps = {};
  Object.keys(files).forEach(f => { deps[f] = [...files[f].matchAll(/from ["']\.\/([\w-]+\.[jt]s)["']/g)].map(m => m[1]).filter(d => d in files); });
  const state = {}, out = [];
  const visit = (f, trail) => {
    if (state[f] === 2) return;
    if (state[f] === 1) { out.push('modules import in a circle: ' + trail.slice(trail.indexOf(f)).concat(f).join(' \u2192 ')); return; }
    state[f] = 1;
    deps[f].forEach(d => visit(d, trail.concat(f)));
    state[f] = 2;
  };
  Object.keys(deps).sort().forEach(f => visit(f, []));
  return out;
}

function layerOrder(doc) {
  const at = doc.indexOf('**The modules are layers'), from = doc.indexOf('From the bottom:', at), end = doc.indexOf('\n- ', from);
  return at < 0 || from < 0 ? [] : [...doc.slice(from, end).matchAll(/`([\w-]+)`/g)].map(m => m[1]);
}

function layers(files, order) {
  if (!order.length) return ['docs/ARCHITECTURE.md lists no module layers'];
  const rank = f => order.indexOf(f.replace(/\.[jt]s$/, '')), out = [];
  Object.keys(files).sort().forEach(f => {
    if (rank(f) < 0) { out.push(f + ' is not in the layer order in docs/ARCHITECTURE.md'); return; }
    [...files[f].matchAll(/from ["']\.\/([\w-]+\.[jt]s)["']/g)].map(m => m[1]).filter(d => d in files && rank(d) >= rank(f))
      .forEach(d => out.push(f + ' imports ' + d + ', which is not in a layer below it (docs/ARCHITECTURE.md)'));
  });
  return out;
}

function pageWords(roster) {
  return [...new Set([...roster.matchAll(/\bid:"sheet-(?:sign|metric|marker)-([\w-]+)"/g)].map(m => m[1]))];
}

function audit(files, html, css, order) {
  let out = fontSizes(css).concat(pageScoped(css, pageWords(files['roster.ts'] || '')), inlineType('page-body.html', html));
  Object.keys(files).forEach(f => { out = out.concat(nameBranches(f, files[f]), chartFrames(f, files[f]), inlineType(f, files[f])); });
  const js = Object.values(files).join('\n');
  return out.concat(cycles(files), order ? layers(files, order) : [], twice(js), unused(js, html, css, files), unusedTokens(css, js + html), gone(js + html + css), pinned(js));
}

if (require.main === module) {
  const dir = path.join(ROOT, 'src', 'js');
  const files = {};
  fs.readdirSync(dir).filter(f => /\.[jt]s$/.test(f))
    .forEach(f => { files[f] = fs.readFileSync(path.join(dir, f), 'utf8'); });
  const out = audit(files, fs.readFileSync(path.join(ROOT, 'src', 'page-body.html'), 'utf8'),
                    fs.readFileSync(path.join(ROOT, 'src', 'styles.css'), 'utf8'),
                    layerOrder(fs.readFileSync(path.join(ROOT, 'docs', 'ARCHITECTURE.md'), 'utf8')));
  if (out.length) {
    console.log('HYGIENE — a child holds what its parent owns, or something is unused:\n\n  ' + out.join('\n  ') + '\n');
    process.exit(1);
  }
  console.log('ok: hygiene — one frame, one type scale, no page-scoped styles, no name branches, modules in layers, nothing unused, nothing removed come back, pins held');
} else {
  module.exports = { fontSizes, pageScoped, inlineType, nameBranches, chartFrames, unused, twice, cycles, layers, layerOrder, unusedTokens, gone, pinned, enclosing, audit, DYNAMIC_CLASS };
}
