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
