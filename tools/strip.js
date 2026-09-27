#!/usr/bin/env node
/* Strip comments from the BUILT file. The source keeps every one of them.

   Version 548, Keren: "I want everything that can sit in the cloud on GitHub to sit there and the
   artifact to be as lean as possible. So we don't have to perform the same work twice."

   Measured before writing this: index.html was 1,074 KB and 472 KB of that — 44% — was comment.
   Those comments are the reasoning, and the reasoning is load-bearing: `CLAUDE.md` makes a comment
   that names a Version and quotes Keren a DECISION, not a note. So none of them are deleted. They
   live in `src/`, on GitHub, where the next person reads them. They simply stop being downloaded
   by every reader of a page that cannot act on them.

   WHY NOT A REGEX. The app is full of `https://` inside string literals, and a line-comment regex
   shreds every one. It also holds regex literals containing `/*`. Comments cannot be found by
   pattern in a language whose lexer decides what a slash means — so the JS goes through Terser,
   a real parser, with compress and mangle OFF: it is asked to reprint the same program without
   comments, and nothing else. CSS gets a hand-written scanner that tracks strings and url(), which
   is the whole of CSS's lexical subtlety here. HTML comments are found only OUTSIDE script and
   style, because inside them `<!--` is not a comment at all.

   THE PROOF IS THE SNAPSHOT, not this file. `npm run snap` captures 32 DOM states; the strip is
   correct if those 32 are byte-identical before and after. That is the same standard V536 and V538
   used, and it is why this could be added to a build whose whole virtue was being provable. */

const { minify } = require('terser');

/* CSS: a scanner, because `content: "/*"` is legal and so is an unquoted url(). */
function stripCss(css) {
  let out = '', i = 0;
  while (i < css.length) {
    const c = css[i], d = css[i + 1];
    if (c === '/' && d === '*') {                       // a comment: skip to its end
      const end = css.indexOf('*/', i + 2);
      i = end < 0 ? css.length : end + 2;
      continue;
    }
    if (c === '"' || c === "'") {                        // a string: copy it whole
      let j = i + 1;
      while (j < css.length && css[j] !== c) j += css[j] === '\\' ? 2 : 1;
      out += css.slice(i, j + 1); i = j + 1; continue;
    }
    if (css.startsWith('url(', i)) {                     // url(...) may be unquoted
      const end = css.indexOf(')', i);
      if (end > 0) { out += css.slice(i, end + 1); i = end + 1; continue; }
    }
    out += c; i++;
  }
  // a comment gone from its own line leaves the line behind; collapse the blanks it left
  return out.replace(/[ \t]+$/gm, '').replace(/\n{3,}/g, '\n\n');
}

async function stripJs(js) {
  const r = await minify(js, {
    compress: false,          // change nothing about the program
    mangle: false,            // keep every name, so a stack trace still means something
    format: { comments: false, beautify: true, indent_level: 2, preserve_annotations: false },
    sourceMap: false
  });
  if (r.error) throw r.error;
  if (typeof r.code !== 'string') throw new Error('terser returned no code');
  return r.code;
}

/* Replace each <script>/<style> body via an async-aware pass, leaving everything between them
   untouched, then take the HTML comments that are left — which are now only in markup. */
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
