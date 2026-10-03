const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'src');
const JS = path.join(SRC, 'js');
const ENTRY = 'main.ts';

function plainJs(text) {
  const { stripTypeScriptTypes } = require('node:module'), emit = process.emitWarning;
  process.emitWarning = function (w) { if (!/stripTypeScriptTypes/.test(String(w))) return emit.apply(process, arguments); };
  try { return stripTypeScriptTypes(text, { mode: 'strip' }); } finally { process.emitWarning = emit; }
}

function manifest() {
  return JSON.parse(fs.readFileSync(path.join(SRC, 'manifest.json'), 'utf8'));
}

function pageParts() {
  return manifest().filter(n => !/\.ts$/.test(n)).map(name => ({ name, text: fs.readFileSync(path.join(SRC, name), 'utf8') }));
}

function bootOrder() {
  const main = fs.readFileSync(path.join(JS, ENTRY), 'utf8');
  return [...main.matchAll(/from "\.\/([\w-]+\.ts)"/g)].map(m => m[1]);
}

function moduleNames() {
  const all = fs.readdirSync(JS).filter(f => /\.ts$/.test(f) && f !== ENTRY);
  const booted = bootOrder().filter(f => all.includes(f));
  return booted.concat(all.filter(f => !booted.includes(f)).sort(), [ENTRY]);
}

function scriptModules() {
  return moduleNames().map(f => { const text = fs.readFileSync(path.join(JS, f), 'utf8'); return { name: 'js/' + f, file: path.join(JS, f), text, plain: plainJs(text) }; });
}

module.exports = { plainJs, ROOT, SRC, JS, ENTRY, manifest, pageParts, bootOrder, moduleNames, scriptModules };
