#!/usr/bin/env node
const { minify } = require('terser');

function stripCss(css) {
  let out = '', i = 0;
  while (i < css.length) {
    const c = css[i], d = css[i + 1];
    if (c === '/' && d === '*') {
      const end = css.indexOf('*/', i + 2);
      i = end < 0 ? css.length : end + 2;
      continue;
    }
    if (c === '"' || c === "'") {
      let j = i + 1;
      while (j < css.length && css[j] !== c) j += css[j] === '\\' ? 2 : 1;
      out += css.slice(i, j + 1); i = j + 1; continue;
    }
    if (css.startsWith('url(', i)) {
      const end = css.indexOf(')', i);
      if (end > 0) { out += css.slice(i, end + 1); i = end + 1; continue; }
    }
    out += c; i++;
  }
  return out.replace(/[ \t]+$/gm, '').replace(/\n{3,}/g, '\n\n');
}

async function stripJs(js) {
  const r = await minify(js, {
    compress: false,
    mangle: false,
    format: { comments: false, beautify: true, indent_level: 2, preserve_annotations: false },
    sourceMap: false
  });
  if (r.error) throw r.error;
  if (typeof r.code !== 'string') throw new Error('terser returned no code');
  return r.code;
}

async function strip(html) {
  const regions = [];
  const re = /(<(script|style)\b[^>]*>)([\s\S]*?)(<\/\2>)/gi;
  let m;
  while ((m = re.exec(html))) regions.push({ start: m.index, end: re.lastIndex, open: m[1], kind: m[2].toLowerCase(), body: m[3], close: m[4] });

  let out = '', at = 0;
  for (const r of regions) {
    const between = html.slice(at, r.start);
    out += between.replace(/<!--[\s\S]*?-->/g, '');
    out += r.open + (r.kind === 'script' ? await stripJs(r.body) : stripCss(r.body)) + r.close;
    at = r.end;
  }
  out += html.slice(at).replace(/<!--[\s\S]*?-->/g, '');
  return out;
}

module.exports = { strip };

if (require.main === module) {
  const fs = require('fs');
  const file = process.argv[2];
  if (!file) { console.error('usage: node tools/strip.js <file.html>'); process.exit(2); }
  const src = fs.readFileSync(file, 'utf8');
  strip(src).then(o => {
    process.stdout.write(o);
    console.error('stripped ' + Math.round(src.length / 1024) + ' KB -> ' + Math.round(o.length / 1024) + ' KB');
  }).catch(e => { console.error('FAILED: ' + e.message); process.exit(1); });
}
