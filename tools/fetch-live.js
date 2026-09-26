#!/usr/bin/env node
/* Fetch the figures that move every trading day and write data/live.json.

   Run by .github/workflows/data.yml. Needs FRED_API_KEY in the environment; the Treasury
   curve needs no key.

   THE RULES THIS SCRIPT OBEYS, which are the app's rules and not negotiable here:

   1. PRIMARY SOURCES ONLY. Treasury for the curve, FRED for the series FRED originates or
      redistributes from the originator. No aggregators, no scrapes of a site that is itself
      quoting someone else.
   2. NEVER INVENT A NUMBER. If a fetch fails or a value fails its sanity band, that document is
      LEFT OUT of the output and the previous committed value stands. A gap is a gap.
   3. SANITY BANDS, not correctness checks. They catch a decimal slip or a feed returning an error
      page, not a market that moved. They are deliberately wide.
   4. The shapes match what the page already decodes — {kind:"series"|"object"|"scalar"} — so
      nothing downstream has to learn a second format.

   What is NOT here, and why: Shiller CAPE has no FRED series and would mean scraping multpl.com;
   CNN's Fear & Greed cannot be fetched at all. Both stay with the nightly human-in-the-loop task.
   Writing a scraped or guessed value here would be worse than leaving them alone. */

const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'data', 'live.json');
const KEY = process.env.FRED_API_KEY;

const notes = [];
const say = m => { notes.push(m); console.log(m); };

async function getJson(url, label) {
  const r = await fetch(url, { headers: { 'accept': 'application/json' } });
  if (!r.ok) throw new Error(label + ': HTTP ' + r.status);
  return r.json();
}
async function getText(url, label) {
  const r = await fetch(url, { headers: { 'accept': 'text/csv,text/plain' } });
  if (!r.ok) throw new Error(label + ': HTTP ' + r.status);
  return r.text();
}

/* FRED: the most recent observation that is not the "." placeholder FRED uses for no-print days. */
async function fredLatest(series) {
  if (!KEY) throw new Error('FRED_API_KEY not set');
  const url = 'https://api.stlouisfed.org/fred/series/observations'
    + '?series_id=' + encodeURIComponent(series)
    + '&api_key=' + encodeURIComponent(KEY)
    + '&file_type=json&sort_order=desc&limit=10';
  const j = await getJson(url, series);
  const obs = (j.observations || []).find(o => o.value && o.value !== '.');
  if (!obs) throw new Error(series + ': no usable observation');
  return { value: Number(obs.value), date: obs.date };
}

const MATURITIES = [
  ['1 Mo', '1M'], ['2 Mo', '2M'], ['3 Mo', '3M'], ['4 Mo', '4M'], ['6 Mo', '6M'],
  ['1 Yr', '1Y'], ['2 Yr', '2Y'], ['3 Yr', '3Y'], ['5 Yr', '5Y'], ['7 Yr', '7Y'],
  ['10 Yr', '10Y'], ['20 Yr', '20Y'], ['30 Yr', '30Y']
];

async function treasuryCurve() {
  const year = new Date().getUTCFullYear();
  const url = 'https://home.treasury.gov/resource-center/data-chart-center/interest-rates/'
    + 'daily-treasury-rates.csv/' + year + '/all?type=daily_treasury_yield_curve'
    + '&field_tdr_date_value=' + year + '&page&_format=csv';
  const csv = await getText(url, 'treasury');
  const lines = csv.trim().split(/\r?\n/);
  if (lines.length < 2) throw new Error('treasury: no rows');
  const head = lines[0].split(',').map(h => h.replace(/^"|"$/g, '').trim());
  // the file is newest-first; take the first row that parses
  const cells = lines[1].split(',').map(c => c.replace(/^"|"$/g, '').trim());
  const at = name => { const i = head.indexOf(name); return i < 0 ? null : Number(cells[i]); };
  const rows = [];
  for (const [col, key] of MATURITIES) {
    const v = at(col);
    if (v != null && isFinite(v)) rows.push({ m: key, y: v });
  }
  if (rows.length < 10) throw new Error('treasury: only ' + rows.length + ' maturities parsed');
  for (const r of rows) if (r.y < 0 || r.y > 20) throw new Error('treasury: ' + r.m + ' = ' + r.y + ' out of band');
  /* Treasury dates the file MM/DD/YYYY; FRED uses ISO. Every asOf this script writes is ISO, because
     the page parses them with one function — the first run shipped 09/25/2026 and would have failed
     that parse silently the day the curve started printing its own date. */
  const raw = cells[head.indexOf('Date')] || '';
  const us = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(raw.trim());
  const date = us ? us[3] + '-' + us[1] + '-' + us[2] : raw.trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new Error('treasury: unparsable date ' + JSON.stringify(raw));
  return { rows, date };
}

(async () => {
  const out = {};
  const failed = [];

  try {
    const { rows, date } = await treasuryCurve();
    out.yieldCurve = { kind: 'series', n: rows.length, rows: rows, asOf: date };
    say('yieldCurve  ' + rows.length + ' maturities, ' + date
        + '  10Y=' + (rows.find(r => r.m === '10Y') || {}).y);
  } catch (e) { failed.push('yieldCurve: ' + e.message); }

  try {
    const [hi, lo] = await Promise.all([fredLatest('DFEDTARU'), fredLatest('DFEDTARL')]);
    if (hi.value < 0 || hi.value > 25 || lo.value > hi.value) throw new Error('target range out of band');
    out.fedFunds = { kind: 'object', lo: lo.value, hi: hi.value, asOf: hi.date };
    say('fedFunds    ' + lo.value + '-' + hi.value + '%  ' + hi.date);
  } catch (e) { failed.push('fedFunds: ' + e.message); }

  let vix = null;
  try {
    vix = await fredLatest('VIXCLS');
    if (vix.value < 5 || vix.value > 100) throw new Error('VIX ' + vix.value + ' out of band');
    say('vix         ' + vix.value + '  ' + vix.date);
  } catch (e) { failed.push('vix: ' + e.message); vix = null; }

  let oas = null;
  try {
    oas = await fredLatest('BAMLH0A0HYM2');
    if (oas.value < 1 || oas.value > 30) throw new Error('OAS ' + oas.value + ' out of band');
    say('hyOas       ' + oas.value + '%  ' + oas.date);
  } catch (e) { failed.push('hyOas: ' + e.message); oas = null; }

  /* The VIX and the spread are single readings inside larger objects the page owns (`sentiment`
     and `coincident`). Writing whole objects from here would mean this script carrying the app's
     editorial content — the notes, the bands, the words — and drifting from it. So they are
     published as plain scalars under their own names, and applying them into those objects stays
     the app's job, where the surrounding text lives. */
  if (vix) out.vixClose = { kind: 'scalar', value: vix.value, asOf: vix.date };
  if (oas) out.hyOas   = { kind: 'scalar', value: oas.value, asOf: oas.date };

  if (!Object.keys(out).length) {
    console.error('\nNOTHING FETCHED — writing nothing, previous data stands.');
    failed.forEach(f => console.error('  ' + f));
    process.exit(1);
  }

  out._meta = {
    fetchedAt: new Date().toISOString().replace(/\.\d+Z$/, 'Z'),
    ok: Object.keys(out).filter(k => k !== '_meta'),
    failed: failed,
    note: 'Shiller CAPE and CNN Fear & Greed are not fetchable and stay with the nightly task.'
  };

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(out, null, 1) + '\n');
  console.log('\nwrote ' + path.relative(path.join(__dirname, '..'), OUT)
              + '  (' + out._meta.ok.length + ' ok, ' + failed.length + ' failed)');
  failed.forEach(f => console.log('  left alone — ' + f));
})();
