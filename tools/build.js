#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { strip } = require('./strip');

const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'src');
const OUT = path.join(ROOT, 'index.html');
const CHECK = process.argv.includes('--check');

const manifest = JSON.parse(fs.readFileSync(path.join(SRC, 'manifest.json'), 'utf8'));
if (!Array.isArray(manifest) || !manifest.length) {
  console.error('src/manifest.json is empty or not a list'); process.exit(2);
}

const { bundle, modules } = require('./bundle');

const parts = manifest.map(name => {
  const p = path.join(SRC, name);
  if (!fs.existsSync(p)) { console.error('missing part: src/' + name); process.exit(2); }
  return /\.ts$/.test(name) ? bundle(p) : fs.readFileSync(p, 'utf8');
});

const joined = parts.join('\n');
const sources = manifest.filter(n => !/\.ts$/.test(n)).map(n => ({ name: n, text: fs.readFileSync(path.join(SRC, n), 'utf8') }))
  .concat(modules().map(f => ({ name: 'js/' + path.basename(f), text: fs.readFileSync(f, 'utf8') })));

const leak = joined.match(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g);
if (leak) {
  console.error('REFUSING to write: ' + leak.length + ' email address(es) in the build — ' + leak[0]);
  process.exit(1);
}

const escapes = [];
sources.forEach(({ name, text }) => {
  const css = /\.css$/.test(name), html = /\.html$/.test(name);
  let inblk = false, inscript = false;
  text.split('\n').forEach((line, n) => {
    const st = line.trimStart();
    const bare = css || (html && !inscript);
    const watch = bare || inblk || st.startsWith('//') || st.startsWith('/*') || st.startsWith('<!--');
    if (watch && /\\u[0-9a-fA-F]{4}/.test(line)) escapes.push(name + ':' + (n + 1));
    if (html) {
      if (/<script/i.test(line)) inscript = true;
      if (/<\/script/i.test(line)) inscript = false;
    }
    for (let j = 0; j < line.length - 1; j++) {
      const two = line.slice(j, j + 2);
      if (!inblk && two === '/*') { inblk = true; j++; }
      else if (!inblk && !css && two === '//') break;
      else if (inblk && two === '*/') { inblk = false; j++; }
    }
  });
});
if (escapes.length) {
  console.error('REFUSING to write: ' + escapes.length + ' literal \\u escape(s) where a real character belongs — ' + escapes[0]);
  process.exit(1);
}

const V = require('./version');
function versionCheck() {
  const want = V.major(), have = V.swMajor();
  if (have !== want) {
    console.error('sw.js is OUT OF DATE — its VERSION is gyn-' + have + ', package.json says ' + want + '. Run: npm run build');
    return false;
  }
  const tag = V.newestTag();
  if (tag !== null && want <= tag)
    console.warn('note: package.json is at ' + want + ' and v' + tag + ' is already tagged — run `npm run bump` before committing the next version');
  return true;
}

strip(joined).then(built => {
  const current = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf8') : null;

  if (CHECK) {
    const swOk = versionCheck();
    if (current === built && swOk) { console.log('index.html matches src/ (' + manifest.length + ' parts), sw.js is stamped gyn-' + V.major()); process.exit(0); }
    if (current === built) process.exit(1);
    if (current === null) { console.error('index.html does not exist — run: npm run build'); process.exit(1); }
    const at = [...current].findIndex((c, i) => c !== built[i]);
    console.error('index.html is OUT OF DATE — run: npm run build');
    console.error('  first difference at byte ' + at + ' (built ' + built.length + ', committed ' + current.length + ')');
    console.error('  committed: …' + current.slice(Math.max(0, at - 60), at + 80).replace(/\n/g, '\\n'));
    console.error('  built:     …' + built.slice(Math.max(0, at - 60), at + 80).replace(/\n/g, '\\n'));
    process.exit(1);
  }

  const stamped = V.stamp();
  if (stamped) console.log('stamped sw.js at gyn-' + V.major());
  if (current === built) { console.log('index.html already current (' + manifest.length + ' parts)'); process.exit(0); }
  fs.writeFileSync(OUT, built);
  const lines = built.split('\n').length;
  console.log('wrote index.html — ' + manifest.length + ' parts, ' + lines.toLocaleString('en-US') + ' lines, '
              + Math.round(built.length / 1024) + ' KB'
              + '  (' + Math.round(joined.length / 1024) + ' KB before the comment strip)');
}).catch(e => { console.error('BUILD FAILED: ' + e.message); process.exit(1); });
