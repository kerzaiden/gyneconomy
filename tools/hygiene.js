#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const PAD_OWNERS = ['colPeek', 'meterPeek', 'pairChart'];
const DYNAMIC_CLASS = /^(cat-(weather|circulation|mood|energy)|mkt-(up|down)|f[0-9])$/;

function enclosing(src, at) {
  const i = src.lastIndexOf('\n  function ', at);
  if (i < 0) return null;
  const m = /^\n {2}function\s+([\w$]+)/.exec(src.slice(i));
  return m ? m[1] : null;
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

function pageScoped(css) {
  const out = [];
  css.split('\n').forEach((line, i) => {
    if (/(^|[\s,{}>+~(])#sheet-[\w-]+/.test(line.split('{')[0])) out.push('styles.css:' + (i + 1) + ' styles one page by id');
  });
  return out;
}

function nameBranches(file, src) {
  const out = [];
  const re = /\bind\.bodyTerm\s*[!=]==/g;
  let m;
  while ((m = re.exec(src))) out.push(file + ':' + lineOf(src, m.index) + ' branches on a reading’s name');
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

function unused(js, html, css) {
  const all = js + '\n' + html;
  const count = n => (all.match(new RegExp('\\b' + n.replace(/\$/g, '\\$') + '\\b', 'g')) || []).length;
  const out = [];
  new Set([...js.matchAll(/function\s+([A-Za-z_$][\w$]*)\s*\(/g)].map(m => m[1])).forEach(n => {
    if (count(n) <= 1) out.push('function ' + n + ' is never used');
  });
  new Set([...js.matchAll(/\bvar\s+([A-Za-z_$][\w$]*)\s*=/g)].map(m => m[1])).forEach(n => {
    if (count(n) <= 1) out.push('var ' + n + ' is never used');
  });
  new Set([...css.replace(/\/\*[\s\S]*?\*\//g, '').matchAll(/\.([a-zA-Z][\w-]*)/g)].map(m => m[1])).forEach(c => {
    if (!DYNAMIC_CLASS.test(c) && !all.includes(c)) out.push('style .' + c + ' matches nothing in the app');
  });
  return out;
}

function audit(files, html, css) {
  let out = fontSizes(css).concat(pageScoped(css));
  Object.keys(files).forEach(f => { out = out.concat(nameBranches(f, files[f]), chartFrames(f, files[f])); });
  return out.concat(unused(Object.values(files).join('\n'), html, css));
}

if (require.main === module) {
  const dir = path.join(ROOT, 'src', 'js');
  const files = {};
  fs.readdirSync(dir).filter(f => f.endsWith('.js') && f !== '03b-history-fred.js')
    .forEach(f => { files[f] = fs.readFileSync(path.join(dir, f), 'utf8'); });
  const out = audit(files, fs.readFileSync(path.join(ROOT, 'src', 'page-body.html'), 'utf8'),
                    fs.readFileSync(path.join(ROOT, 'src', 'styles.css'), 'utf8'));
  if (out.length) {
    console.log('HYGIENE — a child holds what its parent owns, or something is unused:\n\n  ' + out.join('\n  ') + '\n');
    process.exit(1);
  }
  console.log('ok: hygiene — one frame, one type scale, no page-scoped styles, no name branches, nothing unused');
} else {
  module.exports = { fontSizes, pageScoped, nameBranches, chartFrames, unused, enclosing, audit };
}
