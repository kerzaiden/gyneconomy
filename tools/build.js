#!/usr/bin/env node
/* Build index.html from src/.

     node tools/build.js            # write index.html
     node tools/build.js --check    # exit 1 if index.html does not match src/

   WHY A BUILD STEP AT ALL, given the app had proudly gone without one: the Artifact and the service
   worker need ONE self-contained file, and a 13,000-line file is not something a person can hold.
   Both are true, so the source is split and the deliverable is assembled. index.html stays
   committed — it is what gets published, and its diff is worth reading.

   WHY CONCATENATION, and nothing cleverer: the script is a single IIFE sharing one closure scope.
   Joining the pieces back in order reproduces that scope EXACTLY — no module wrapper, no bundler
   semantics, no import order to reason about. The build is parts.join("\n"), which is why the split
   could be proved byte-identical to the file it replaced rather than merely equivalent to it.

   THE ORDER IS THE SEMANTICS. src/manifest.json lists the parts in concatenation order, and
   module-level vars are assigned between them, so moving a part can change behaviour even when
   nothing inside it changed. Add a part by adding it to the manifest, in position.

   WHY THE BUILD IS NO LONGER JUST A JOIN (Version 548). It was, and that was the point: the split
   could be proved byte-identical to the file it replaced. Then the measurement arrived — 44% of
   the 1,074 KB deliverable was COMMENT, which every reader of the site downloaded and none of them
   could use. The reasoning is load-bearing and none of it is deleted; it stays in src/, on GitHub,
   where the next person reads it. So the join stands and a strip follows it, and what is lost is
   the byte-identity proof. What replaces that proof is stronger, because it tests the thing that
   actually matters: `npm run snap` captures 32 DOM states, and the strip is correct only if those
   32 render identically before and after. They did, with zero page errors.

   npm run build:check runs in CI, so index.html cannot drift from src/. */

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

const parts = manifest.map(name => {
  const p = path.join(SRC, name);
  if (!fs.existsSync(p)) { console.error('missing part: src/' + name); process.exit(2); }
  return fs.readFileSync(p, 'utf8');
});

const joined = parts.join('\n');

/* The email gate runs here too, not only in the suite: this is the last point at which the
   deliverable is assembled, and a build that CAN emit an address is a build that one day will.
   It runs on the JOINED text, before the strip, so a comment carrying an address is caught too. */
const leak = joined.match(/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/g);
if (leak) {
  console.error('REFUSING to write: ' + leak.length + ' email address(es) in the build — ' + leak[0]);
  process.exit(1);
}

/* V627: the escape gate. A literal `\u2014` typed into a COMMENT is invisible in the deliverable, because
   the strip removes comments — so 294 of them accumulated across two hundred versions without one failing
   run. They are not harmless: they make the source read wrong, and they are why a search-and-replace over a
   comment fails to match what the eye plainly sees there. Real characters from here on, in comments and in page text alike. Strings
   are untouched — an escape in code is how a build stays ASCII-safe, and that is the correct spelling. */
const escapes = [];
parts.forEach((text, i) => {
  const name = manifest[i], css = /\.css$/.test(name), html = /\.html$/.test(name);
  let inblk = false, inscript = false;
  text.split('\n').forEach((line, n) => {
    const st = line.trimStart();
    /* A `.css` part has no use for this spelling at all — CSS writes a character as `\2014`, no `u` — and in
       a `.html` part outside its <script> it is PAGE TEXT, which is how one reached a reader: the Energy
       insight read "Industrial output \\u2014 folded into". In a script, a comment only. */
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

/* V636: the build stamps sw.js too. The worker's VERSION names its cache, and it had stood at 609 for
   twenty-five versions because it was a number to remember. Now it is read from package.json, written
   here, and checked here — the same discipline index.html has. `npm run bump` is how the number moves. */
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
