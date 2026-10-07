#!/usr/bin/env node
const fs = require('fs'), path = require('path');

function literal(file, name) {
  const [base, member] = name.split('.');
  const v = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'src/data', file), 'utf8'))[base];
  if (v === undefined) throw new Error('not found: ' + name + ' in ' + file);
  return member ? v[member] : v;
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
  ['series.json', 'cpiYoYHistory',           'm', 440, [-5, 20]],
  ['series.json', 'gdpQuarterlyYoY',         'q', 150, [-15, 20]],
  ...['m3', 'y2', 'y5', 'y10', 'y30'].map(k => ['fred.json',   'treasuryQuarterly.' + k, 'q', 86, [0, 20], 3]),
  ...['s3m', 's2y'].map(k => ['fred.json',   'treasuryQuarterly.' + k, 'q', 86, [-5, 6], 3]),
  ['fred.json',   'fedFundsHistory',         'm', 860, [0, 25], 6],
  ['fred.json',   'volatilityHistory',       'm', 480, [5, 100], 6],
  ['fred.json',   'productivityHistory',     'q', 300, [-15, 15], 3],
  ['fred.json',   'sp500MonthlyHistory',     'm', 900, [5, 50000], 6],
  ['fred.json',   'confidenceHistory',       'm', 790, [50, 150], 6],
  ['fred.json',   'durablesHistory',         'm', 790, [-60, 80], 6],
  ['fred.json',   'premiumHistory',          'm', 1180, [-5, 20], 6],
  ['fred.json',   'grossDebtQuarterly',      'q', 235, [10, 200], 4],
  ['fred.json',   'creditGapHistory',        'q', 270, [-40, 40], 4],
  ['fred.json',   'delinquencyHistory',      'q', 165, [0, 20], 3],
  ['fred.json',   'marginHistory',           'm', 340, [-80, 200], 6],
  ['fred.json',   'fiscalHistory.gross',     'y',  85, [10, 200], 2],
  ['fred.json',   'fiscalHistory.held',      'y',  85, [10, 200], 2],
  ['fred.json',   'fiscalHistory.interest',  'y',  84, [0, 10], 2],
  ['fred.json',   'fiscalHistory.budget',    'y',  95, [-40, 10], 2],
  ['fred.json',   'gdpYoYBefore',            'q', 160, [-15, 20]],
  ['fred.json',   'cpiYoYBefore',            'm', 730, [-15, 25]],
  ['fred.json',   'sp500ReturnsBefore',      'y',  62, [-60, 70]],
  ['fred.json',   'gdpGrowthBefore',         'y',  60, [-20, 25]],
  ['series.json', 'buffettHistory',          'q', 220, [10, 400]],
  ['series.json', 'capeHistory',             'y',  55, [4, 60]],
];
const COMPILED = /DATA_COMPILED = new Date\((\d+), (\d+), (\d+)\)/.exec(fs.readFileSync(path.join(__dirname, '..', 'src', 'js', 'refresh-season.ts'), 'utf8'));
const TODAY = new Date(Date.UTC(+COMPILED[1], +COMPILED[2], +COMPILED[3]));
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
  if (lag) ok(name + ': no more than ' + lag + ' periods behind the data date', NOW[key] - n[n.length - 1] <= lag, true);
}

const BARE = [
  ['series.json', 'm2Level',        260, [200,   40000]],
  ['series.json', 'm2vHistory',     260, [900,    2600]],
  ['series.json', 'dsrHistory',      80, [7,        18]],
  ['series.json', 'deficitHistory',  78, [-20,      8]],
  ['series.json', 'unempHistory',   930, [2,        16]]
];
for (const [file, name, floor, [lo, hi]] of BARE) {
  const vals = literal(file, name);
  atLeast(name + ': length', vals.length, floor);
  const nums = vals.filter(v => v != null);
  ok(name + ': every value is a number', nums.every(Number.isFinite), true);
  const min = Math.min.apply(null, nums), max = Math.max.apply(null, nums);
  ok(name + ': stays in band', min >= lo && max <= hi, true);
}

const JS = fs.readdirSync(path.join(__dirname, '..', 'src/js')).filter(f => f.endsWith('.ts')).map(f => fs.readFileSync(path.join(__dirname, '..', 'src/js', f), 'utf8')).join('\n');
for (const [file, alias] of [['series.json', 'SERIES'], ['fred.json', 'FRED']]) {
  const keys = Object.keys(JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'src/data', file), 'utf8'))).sort();
  const read = [...new Set([...JS.matchAll(new RegExp('\\b' + alias + '\\.(\\w+)', 'g'))].map(m => m[1]))].sort();
  ok(file + ': the code reads every figure in it, and no other', read.join(' '), keys.join(' '));
}

console.log('\n' + pass + '/' + (pass + fail) + ' passed');
process.exit(fail ? 1 : 0);
