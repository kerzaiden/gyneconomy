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

strip(joined).then(built => {
  const current = fs.existsSync(OUT) ? fs.readFileSync(OUT, 'utf8') : null;

  if (CHECK) {
    if (current === built) { console.log('index.html matches src/ (' + manifest.length + ' parts)'); process.exit(0); }
    if (current === null) { console.error('index.html does not exist — run: npm run build'); process.exit(1); }
    const at = [...current].findIndex((c, i) => c !== built[i]);
    console.error('index.html is OUT OF DATE — run: npm run build');
    console.error('  first difference at byte ' + at + ' (built ' + built.length + ', committed ' + current.length + ')');
    console.error('  committed: …' + current.slice(Math.max(0, at - 60), at + 80).replace(/\n/g, '\\n'));
    console.error('  built:     …' + built.slice(Math.max(0, at - 60), at + 80).replace(/\n/g, '\\n'));
    process.exit(1);
  }

  if (current === built) { console.log('index.html already current (' + manifest.length + ' parts)'); process.exit(0); }
  fs.writeFileSync(OUT, built);
  const lines = built.split('\n').length;
  console.log('wrote index.html — ' + manifest.length + ' parts, ' + lines.toLocaleString('en-US') + ' lines, '
              + Math.round(built.length / 1024) + ' KB'
              + '  (' + Math.round(joined.length / 1024) + ' KB before the comment strip)');
}).catch(e => { console.error('BUILD FAILED: ' + e.message); process.exit(1); });
