const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');

const JS = path.join(__dirname, '..', 'src', 'js');
const ENTRY = path.join(JS, 'main.js');

function modules(dir) {
  dir = dir || JS;
  return fs.readdirSync(dir).filter(f => /\.js$/.test(f)).sort().map(f => path.join(dir, f));
}

function bundle(entry) {
  const r = esbuild.buildSync({
    entryPoints: [entry || ENTRY],
    bundle: true,
    format: 'iife',
    platform: 'browser',
    target: 'es2017',
    charset: 'utf8',
    legalComments: 'none',
    write: false,
    logLevel: 'silent',
    metafile: true
  });
  if (r.errors.length) throw new Error(r.errors.map(e => e.text).join('; '));
  const used = Object.keys(r.metafile.inputs).map(p => path.resolve(p));
  const stray = modules(path.dirname(entry || ENTRY)).filter(f => used.indexOf(f) === -1);
  if (stray.length) throw new Error('modules nothing imports: ' + stray.map(f => path.basename(f)).join(', '));
  return r.outputFiles[0].text;
}

function evalOrder() {
  const r = esbuild.buildSync({ entryPoints: [ENTRY], bundle: true, format: 'iife', write: false, logLevel: 'silent', metafile: true });
  const out = Object.values(r.metafile.outputs)[0];
  return Object.keys(out.inputs).map(p => 'js/' + path.basename(p));
}

module.exports = { bundle, modules, evalOrder, ENTRY, JS };
