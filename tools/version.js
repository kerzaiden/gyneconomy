const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const PKG = path.join(ROOT, 'package.json');
const SW = path.join(ROOT, 'sw.js');
const BODY = path.join(ROOT, 'src', 'page-body.html');
const SW_LINE = /var VERSION = '[^']*';/;
const BODY_LINE = /<span id="app-version">[^<]*<\/span>/;
const SEMVER = /^(\d+)\.(\d+)\.(\d+)$/;

function read() {
  const p = JSON.parse(fs.readFileSync(PKG, 'utf8'));
  if (!SEMVER.test(String(p.version))) throw new Error('package.json version is not MAJOR.MINOR.PATCH: ' + p.version);
  if (!Number.isInteger(p.build) || p.build <= 0) throw new Error('package.json has no build number: ' + p.build);
  return { version: p.version, build: p.build };
}

function parts(v) { return SEMVER.exec(v).slice(1).map(Number); }

function compare(a, b) {
  const x = parts(a), y = parts(b);
  for (let i = 0; i < 3; i++) if (x[i] !== y[i]) return x[i] - y[i];
  return 0;
}

function next(version, kind) {
  if (SEMVER.test(kind)) return kind;
  const [M, m, p] = parts(version);
  if (kind === 'major') return (M + 1) + '.0.0';
  if (kind === 'minor') return M + '.' + (m + 1) + '.0';
  if (kind === 'patch') return M + '.' + m + '.' + (p + 1);
  return null;
}

function label(v) { return v.version + ' (' + v.build + ')'; }

function fromTags(lines) {
  let build = null, version = null;
  for (const l of lines) {
    const [name, subject = ''] = l.split('\t');
    const legacy = /^v(\d+)-/.exec(name);
    const semver = /^v(\d+\.\d+\.\d+)$/.exec(name);
    const b = legacy ? Number(legacy[1]) : semver && /\(build (\d+)\)/.exec(subject) ? Number(/\(build (\d+)\)/.exec(subject)[1]) : null;
    if (b !== null && (build === null || b > build)) build = b;
    if (semver && (version === null || compare(semver[1], version) > 0)) version = semver[1];
  }
  return { build, version };
}

function newestTags() {
  try {
    const out = execSync('git tag --list "v[0-9]*" --format="%(refname:short)%09%(contents:subject)"',
      { cwd: ROOT, stdio: ['ignore', 'pipe', 'ignore'] }).toString();
    return fromTags(out.split('\n').filter(Boolean));
  } catch (e) { return { build: null, version: null }; }
}

function stampSw(text, v) { return text.replace(SW_LINE, "var VERSION = 'gyn-" + v.build + "';"); }
function stampBody(text, v) { return text.replace(BODY_LINE, '<span id="app-version">Version ' + label(v) + '</span>'); }

function swBuild() {
  const m = /var VERSION = 'gyn-(\d+)';/.exec(fs.readFileSync(SW, 'utf8'));
  return m ? Number(m[1]) : null;
}

function bodyLabel() {
  const m = /<span id="app-version">Version ([^<]*)<\/span>/.exec(fs.readFileSync(BODY, 'utf8'));
  return m ? m[1] : null;
}

function stamp() {
  const v = read();
  let changed = false;
  for (const [file, line, fn] of [[SW, SW_LINE, stampSw], [BODY, BODY_LINE, stampBody]]) {
    const cur = fs.readFileSync(file, 'utf8');
    if (!line.test(cur)) throw new Error(path.relative(ROOT, file) + ' has no version line to stamp');
    const out = fn(cur, v);
    if (out !== cur) { fs.writeFileSync(file, out); changed = true; }
  }
  return changed;
}

function setPackage(v) {
  const cur = fs.readFileSync(PKG, 'utf8');
  const out = cur.replace(/"version": "[^"]*"/, '"version": "' + v.version + '"').replace(/"build": \d+/, '"build": ' + v.build);
  if (out === cur) return false;
  fs.writeFileSync(PKG, out);
  return true;
}

module.exports = { read, next, compare, label, fromTags, newestTags, swBuild, bodyLabel, stamp, setPackage };
