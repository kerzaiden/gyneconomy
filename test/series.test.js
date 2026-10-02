#!/usr/bin/env node
const fs = require('fs'), path = require('path');

function source(file) { return fs.readFileSync(path.join(__dirname, '..', 'src/js', file), 'utf8'); }
function literal(file, name) {
  const [base, member] = name.split('.');
  if (member) return literal(file, base)[member];
  const s = source(file), at = s.indexOf('var ' + name + ' = ');
  if (at < 0) throw new Error('not found: ' + name + ' in ' + file);
  const c = s[s.indexOf('=', at) + 2];
  const open = s.indexOf(c === '(' || c === '{' ? c : '[', at);
  const shut = { '(': ')', '{': '}', '[': ']' }[s[open]];
  let depth = 0, i = open;
  for (; i < s.length; i++) {
    if (s[i] === s[open]) depth++;
    else if (s[i] === shut) { depth--; if (!depth) break; }
  }
  return new Function('return ' + s.slice(open, i + 1))();
}

let pass = 0, fail = 0;
function ok(label, got, want) {
  if (got === want) { pass++; console.log('  ok   ' + label.padEnd(50) + String(got).slice(0, 34)); }
  else { fail++; console.log('  FAIL ' + label + '\n       got  ' + got + '\n       want ' + want); }
}
function atLeast(label, got, floor) {
  if (got >= floor) { pass++; console.log('  ok   ' + label.padEnd(50) + got); }
  else { fail++; console.log('  FAIL ' + label + '\n       got  ' + got + '\n       want at least ' + floor); }
}

const step = {
  m: k => { const [y, mo] = k.split('-').map(Number); return y * 12 + mo; },
  q: k => { const [y, qu] = k.split(' Q').map(Number); return y * 4 + qu; },
  y: k => Number(k)
};

const KNOWN_GAPS = { cpiYoYHistory: '2025-09 -> 2025-11' };

const KEYED = [
  ['01-refresh-season.js', 'cpiYoYHistory',           'm', 440, [-5, 20]],
  ['01-refresh-season.js', 'gdpQuarterlyYoY',         'q', 150, [-15, 20]],
  ...['m3', 'y2', 'y5', 'y10', 'y30'].map(k => ['03b-history-fred.js', 'treasuryQuarterly.' + k, 'q', 86, [0, 20], 3]),
  ...['s3m', 's2y'].map(k => ['03b-history-fred.js', 'treasuryQuarterly.' + k, 'q', 86, [-5, 6], 3]),
  ['03b-history-fred.js',  'fedFundsHistory',         'm', 860, [0, 25], 6],
  ['03b-history-fred.js',  'volatilityHistory',       'm', 480, [5, 100], 6],
  ['03b-history-fred.js',  'productivityHistory',     'q', 300, [-15, 15], 3],
  ['03b-history-fred.js',  'sp500MonthlyHistory',     'm', 900, [5, 50000], 6],
  ['03b-history-fred.js',  'confidenceHistory',       'm', 790, [50, 150], 6],
  ['03b-history-fred.js',  'grossDebtQuarterly',      'q', 235, [10, 200], 4],
  ['03b-history-fred.js',  'fiscalHistory.gross',     'y',  85, [10, 200], 2],
  ['03b-history-fred.js',  'fiscalHistory.held',      'y',  85, [10, 200], 2],
  ['03b-history-fred.js',  'fiscalHistory.interest',  'y',  84, [0, 10], 2],
  ['03b-history-fred.js',  'fiscalHistory.budget',    'y',  95, [-40, 10], 2],
  ['03b-history-fred.js',  'gdpYoYBefore',            'q', 160, [-15, 20]],
  ['03b-history-fred.js',  'cpiYoYBefore',            'm', 730, [-15, 25]],
  ['03b-history-fred.js',  'sp500ReturnsBefore',      'y',  62, [-60, 70]],
  ['03b-history-fred.js',  'gdpGrowthBefore',         'y',  60, [-20, 25]],
  ['04-components.js',     'buffettHistory',          'q', 220, [10, 400]],
  ['04-components.js',     'capeHistory',             'y',  55, [4, 60]],
];
const TODAY = new Date();
const NOW = { m: TODAY.getUTCFullYear() * 12 + TODAY.getUTCMonth() + 1,
              q: TODAY.getUTCFullYear() * 4 + Math.floor(TODAY.getUTCMonth() / 3) + 1,
              y: TODAY.getUTCFullYear() };

for (const [file, name, key, floor, [lo, hi], lag] of KEYED) {
  let rows = literal(file, name);
  if (!Array.isArray(rows)) rows = Object.keys(rows).map(y => ({ y: Number(y), v: rows[y] }));
  atLeast(name + ': length', rows.length, floor);
  ok(name + ': every row has a value', rows.every(r => r.v == null || Number.isFinite(r.v)), true);
  const out = rows.filter(r => r.v != null && (r.v < lo || r.v > hi)).map(r => (r.m || r.q || r.y) + '=' + r.v);
  ok(name + ': stays in band', out.join(', ') || 'none', 'none');
  const keys = rows.map(r => String(r[key] != null ? r[key] : r.m || r.q || r.y));
  const n = keys.map(step[key]);
  const breaks = [];
  for (let i = 1; i < n.length; i++) if (n[i] - n[i - 1] !== 1) breaks.push(keys[i - 1] + ' -> ' + keys[i]);
  ok(name + ': periods are consecutive', breaks.join(', ') || 'none', KNOWN_GAPS[name] || 'none');
  if (lag) ok(name + ': no more than ' + lag + ' periods behind today', NOW[key] - n[n.length - 1] <= lag, true);
}

const BARE = [
  ['05-history.js',   'm2Level',        260, [200,   40000]],
  ['04-components.js','m2vHistory',     260, [900,    2600]],
  ['07-forms.js',     'dsrHistory',      80, [7,        18]],
  ['03-data.js',      'deficitHistory',  78, [-20,      8]],
  ['05-history.js',   'unempHistory',   930, [2,        16]]
];
for (const [file, name, floor, [lo, hi]] of BARE) {
  const vals = literal(file, name);
  const raw = Array.isArray(vals) && typeof vals[0] === 'number' ? vals
            : String(vals).trim().split(/\s+/);
  atLeast(name + ': length', raw.length, floor);
  const nums = raw.filter(t => t !== 'x').map(Number);
  ok(name + ': every value is a number', nums.every(Number.isFinite), true);
  const min = Math.min.apply(null, nums), max = Math.max.apply(null, nums);
  ok(name + ': stays in band', min >= lo && max <= hi, true);
}

console.log('\n' + pass + '/' + (pass + fail) + ' passed');
process.exit(fail ? 1 : 0);
