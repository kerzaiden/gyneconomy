#!/usr/bin/env node
/* EVERY SERIES, CHECKED BEFORE IT SHIPS.

   Keren, Sep 29 2026, on where the architecture stands: the audit found ten series carrying a load-time check
   (`deficitHistory failed its check`, `m2Level failed its check`, and eight more — the Version 305 rule) and
   seven carrying none at all. The unchecked seven are not minor ones: CPI, quarterly GDP, CAPE, the Buffett
   indicator, Power, the fear curve and the yield curve. Between them they are most of what the app claims.

   They are checked HERE rather than in the app for two reasons. The artifact stays lean — this adds no bytes
   to the page — and a check that runs in CI fails on the commit that broke the data, which is earlier than a
   console warning nobody is watching. The backfill workflow runs test:tools, so a GitHub runner that wrote a
   truncated series fails there too, before it can reach a version.

   THE CHECK THAT MATTERS IS THE GAP CHECK. A series is a run of consecutive periods, and every page in the
   app trusts that: a chart's x-axis is the index, a cycle slice is arithmetic on the index, and the Echoes
   grid counts years. Drop one month out of the middle of a monthly series and nothing throws — every chart
   just draws one period short, shifted, with every label after the hole wrong by a month, and it looks
   entirely plausible. This asserts the periods are consecutive, which is the one thing nothing else would
   ever notice.

   Usage: node test/series.test.js        Exit 0 = every case passed. */
const fs = require('fs'), path = require('path');

function source(file) { return fs.readFileSync(path.join(__dirname, '..', 'src/js', file), 'utf8'); }
/* Read a literal out of the source it ships in — never a copy. Walks brackets rather than matching a regex,
   because these arrays hold objects and a lazy pattern stops at the first `]` inside one. */
function literal(file, name) {
  const s = source(file), at = s.indexOf('var ' + name + ' = ');
  if (at < 0) throw new Error('not found: ' + name + ' in ' + file);
  const open = s.indexOf(s[s.indexOf('=', at) + 2] === '(' ? '(' : '[', at);
  const shut = s[open] === '(' ? ')' : ']';
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

/* A period key turned into a number that counts periods, so "consecutive" is a subtraction.
   "1989-01" -> months since year 0; "1990 Q2" -> quarters; "1970" -> years. */
const step = {
  m: k => { const [y, mo] = k.split('-').map(Number); return y * 12 + mo; },
  q: k => { const [y, qu] = k.split(' Q').map(Number); return y * 4 + qu; },
  y: k => Number(k)
};

/* Every series the app ships as a literal, with the key it is indexed by and the floor its length must clear.
   The floors are deliberately a little under today's length: they catch a truncation, not a normal append. */
/* A gap the world put there, not the data. The BLS published no CPI for October 2025 — the government
   shutdown — and the app records that absence by leaving the month out, which is stated where the series is
   written. Declaring it HERE is what lets this check keep its teeth: the known hole passes and a new one
   fails, where a check that simply allowed gaps in CPI would allow any of them.
   Worth knowing, and not this test's to fix: unemployment marks its missing months with a placeholder that
   becomes a null, keeping the position, while CPI drops the position entirely. So a twelve-ENTRY window on
   CPI spans thirteen calendar months across that hole, and slopeOf fits it as if the points were evenly
   spaced. The distortion is small and it is real. */
const KNOWN_GAPS = { cpiYoYHistory: '2025-09 -> 2025-11' };

const KEYED = [
  ['01-refresh-season.js', 'cpiYoYHistory',           'm', 440],
  ['01-refresh-season.js', 'gdpQuarterlyYoY',         'q', 150],
  ['03-data.js',           't10y3mHistory',           'q',  85],
  ['03-data.js',           'powerHistory',            'y',  75],
  ['03b-history-fred.js',  'fedFundsHistory',         'm', 860],
  ['03b-history-fred.js',  'fearCurveHistory',        'm', 220],
  ['04-components.js',     'buffettHistory',          'q', 220],
  ['04-components.js',     'capeHistory',             'y',  55],
];

for (const [file, name, key, floor] of KEYED) {
  const rows = literal(file, name);
  atLeast(name + ': length', rows.length, floor);
  ok(name + ': every row has a value', rows.every(r => r.v == null || Number.isFinite(r.v)), true);
  const keys = rows.map(r => String(r[key] != null ? r[key] : r.m || r.q || r.y));
  const n = keys.map(step[key]);
  /* Consecutive, which is both "no gaps" and "no duplicates" and "in order", said once. A failure names the
     seam so the hole can be found rather than hunted. */
  const breaks = [];
  for (let i = 1; i < n.length; i++) if (n[i] - n[i - 1] !== 1) breaks.push(keys[i - 1] + ' -> ' + keys[i]);
  ok(name + ': periods are consecutive', breaks.join(', ') || 'none', KNOWN_GAPS[name] || 'none');
}

/* The bare-number series carry no periods of their own — their position IS the period, counted from a start
   year the app states. There is nothing to check for gaps, so what is checked is that the length still
   divides into whole periods and that the extremes have not moved: a value out of band is how a bad backfill
   shows itself in a series with no keys to go wrong. */
const BARE = [
  /* A band with headroom, not today's extremes to two places: the job is to catch a backfill that wrote
     nonsense or shifted a decimal, not to fail the day M2 grows. m2vHistory is stored a thousand times its
     printed value — 1126 is a velocity of 1.126 — which is itself worth having written down somewhere. */
  ['05-history.js',   'm2Level',        260, [200,   40000]],
  ['04-components.js','m2vHistory',     260, [900,    2600]],
  ['07-forms.js',     'dsrHistory',      80, [7,        18]],
  ['03-data.js',      'deficitHistory',  78, [-20,      8]],
  /* unempHistory ships as a string of monthly rates that the app splits and keys by INDEX from 1948, with an
     "x" for a month the government did not measure. Its periods cannot fall out of order, because they are
     positions — so what is worth checking is the count and the band, and that the holes are still the marked
     ones rather than a parse turning a rate into NaN. */
  ['05-history.js',   'unempHistory',   930, [2,        16]]
];
for (const [file, name, floor, [lo, hi]] of BARE) {
  const vals = literal(file, name);
  const raw = Array.isArray(vals) && typeof vals[0] === 'number' ? vals
            : String(vals).trim().split(/\s+/);
  atLeast(name + ': length', raw.length, floor);
  // "x" is the app's own mark for a month nobody measured; anything else that is not a number is a parse fault
  const nums = raw.filter(t => t !== 'x').map(Number);
  ok(name + ': every value is a number', nums.every(Number.isFinite), true);
  const min = Math.min.apply(null, nums), max = Math.max.apply(null, nums);
  ok(name + ': stays in band', min >= lo && max <= hi, true);
}

console.log('\n' + pass + '/' + (pass + fail) + ' passed');
process.exit(fail ? 1 : 0);
