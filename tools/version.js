/* One version, stamped by the build (V636).

   `package.json` said 609 and `sw.js` said gyn-609 at V634, because each was a number somebody had to
   remember to change and nobody did for twenty-five versions. The service worker's VERSION is the name of
   its cache, and a cache that keeps its name across a release keeps its old shell too — so a reader who
   installed the app was served a stale sources.html and icons for as long as the number stood still.

   Now there is ONE number, the major of `package.json`'s version, and the build writes it into sw.js
   the way it writes index.html: `npm run build` stamps it, `npm run build:check` fails if it drifted.
   `npm run bump` moves the number — to the next version after the newest tag, or to the one you name. */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const PKG = path.join(ROOT, 'package.json');
const SW = path.join(ROOT, 'sw.js');
const LINE = /var VERSION = '[^']*';/;

function major() {
  const v = JSON.parse(fs.readFileSync(PKG, 'utf8')).version;
  const m = /^(\d+)\./.exec(String(v));
  if (!m) throw new Error('package.json version is not N.x.y: ' + v);
  return Number(m[1]);
}

/* The newest `v6NN-name` tag, or null where there are none — a fresh CI checkout fetches no tags. */
function newestTag() {
  try {
    const tags = execSync('git tag --list "v[0-9]*"', { cwd: ROOT, stdio: ['ignore', 'pipe', 'ignore'] })
      .toString().split('\n').map(t => /^v(\d+)-/.exec(t)).filter(Boolean).map(m => Number(m[1]));
    return tags.length ? Math.max(...tags) : null;
  } catch (e) { return null; }
}

function stampSw(text, n) { return text.replace(LINE, "var VERSION = 'gyn-" + n + "';"); }

function swMajor() {
  const m = /var VERSION = 'gyn-(\d+)';/.exec(fs.readFileSync(SW, 'utf8'));
  return m ? Number(m[1]) : null;
}

/* Write sw.js at the package's version. Returns true if it changed. */
function stamp() {
  const n = major(), cur = fs.readFileSync(SW, 'utf8'), next = stampSw(cur, n);
  if (!LINE.test(cur)) throw new Error('sw.js has no `var VERSION = ...` line to stamp');
  if (next === cur) return false;
  fs.writeFileSync(SW, next);
  return true;
}

function setPackage(n) {
  const cur = fs.readFileSync(PKG, 'utf8');
  const next = cur.replace(/"version": "[^"]*"/, '"version": "' + n + '.0.0"');
  if (next === cur) return false;
  fs.writeFileSync(PKG, next);
  return true;
}

module.exports = { major, newestTag, swMajor, stamp, setPackage };
