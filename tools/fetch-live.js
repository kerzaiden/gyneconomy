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

   CAPE comes from Robert Shiller's OWN published dataset (Version 541), not from multpl, which is a
   site quoting him. That is a provenance upgrade, not merely an automation: the originator rather
   than a compilation. It costs freshness — he updates monthly, where multpl interpolates daily —
   and that is the right trade for a ratio whose whole claim is about the next decade.

   CNN's Fear & Greed is gone from the app entirely (V546). CNN publishes no dataset and no public
   API, and their edge answers HTTP 418 to an automated client — so the figure could never be kept
   current honestly. It is replaced by the VIX term structure, which this script can fetch. */

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

/* Shiller publishes his stock-market dataset as a spreadsheet on shillerdata.com and has done for
   decades — it is the source every CAPE figure ultimately comes from. The download link has moved
   more than once, so the landing page is read first and the .xls found on it, rather than a URL
   pinned here going quietly stale.

   NOTHING here is found by position. The page carries MORE THAN ONE spreadsheet — the stock-market
   dataset (ie_data.xls) and a housing-price one — so taking "the first .xls link" was picking the
   right file by luck; and inside the workbook the sheet has grown columns over the years, so a
   hard-coded column index would one day return the wrong number while looking perfectly fine. Every
   link on the page is therefore a CANDIDATE: the one named like the dataset is tried first, and a
   candidate only counts if its own header row names both a Date and a CAPE column. A file that does
   not is skipped, not guessed at. */
/* The sheet -> reading step, as a pure function of the rows, so it can be tested without the
   network. Everything it needs it finds by READING, never by position:

     * the header row is the LOWEST of the first 30 rows that names BOTH a date and a CAPE column,
     * the reading is the last row below it that carries a number,
     * and the date is parsed from Shiller's own YYYY.MM notation.

   It throws rather than guessing. A caller with several candidate workbooks can treat a throw as
   "not this file" and move on. */
function capeFromRows(rows) {
  /* Shiller's headings are STACKED, one word per row, and two of those rows qualify: the one above
     the real header reads "Date" over "Fraction" and "CAPE" over "Excess … Yield". Taking the first
     match read the Excess CAPE Yield (0.0101) as CAPE, and every run from V541 on failed the band.
     The line a stacked heading ends on is the one sitting on the data, so the LAST match wins. */
  let hdr = -1, dateCol = -1, capeCol = -1;
  for (let i = 0; i < Math.min(rows.length, 30); i++) {
    const r = (rows[i] || []).map(c => String(c == null ? '' : c).trim());
    const d = r.findIndex(c => /^date$/i.test(c));
    const c = r.findIndex(x => /^(cape|cape ratio|p\/e10|pe10)$/i.test(x));
    if (d >= 0 && c >= 0) { hdr = i; dateCol = d; capeCol = c; }
  }
  if (hdr < 0) throw new Error('no header row naming Date and CAPE');

  // the last row that actually carries a reading — the file trails blank and footnote rows
  let val = null, when = null;
  for (let i = rows.length - 1; i > hdr; i--) {
    const v = Number((rows[i] || [])[capeCol]);
    if (!isFinite(v) || v <= 0) continue;
    val = v; when = (rows[i] || [])[dateCol]; break;
  }
  if (val == null) throw new Error('no CAPE reading below the header');
  if (val < 4 || val > 60) throw new Error('CAPE ' + val + ' out of band');

  /* Shiller dates a month as YYYY.MM, and 2026.1 means OCTOBER, not January — the decimal is a
     month NUMBER, so a single digit is that digit times ten. Reading it as a fraction is the
     mistake this comment exists for, and the one the test below pins. */
  const str = String(when).trim();
  const md = /^(\d{4})\.(\d{1,2})$/.exec(str);
  if (!md) throw new Error('unparsable Shiller date ' + JSON.stringify(str));
  const mm = md[2].length === 1 ? Number(md[2]) * 10 : Number(md[2]);
  if (!(mm >= 1 && mm <= 12)) throw new Error('impossible month in ' + JSON.stringify(str));

  return {
    value: Math.round(val * 100) / 100,
    date: md[1] + '-' + String(mm).padStart(2, '0') + '-01',
    headerRow: hdr + 1
  };
}

async function shillerCape() {
  let XLSX;
  // an OPTIONAL dependency (see package.json's //xlsx note), so say what is missing rather than
  // throwing a module-not-found stack at whoever reads the run log
  try { XLSX = require('xlsx'); }
  catch (e) { throw new Error('xlsx is not installed — run npm i; CAPE needs it to read Shiller\'s .xls'); }
  const page = await getText('https://shillerdata.com/', 'shiller page');

  // the whole href, query string included — wsimg serves these with a ?ver= cache key
  const hrefs = [];
  for (const m of page.matchAll(/href="([^"]*\.xls[x]?(?:\?[^"]*)?)"/gi)) {
    const u = new URL(m[1], 'https://shillerdata.com/').href;
    if (!hrefs.includes(u)) hrefs.push(u);
  }
  if (!hrefs.length) throw new Error('no .xls link found on shillerdata.com');
  // the stock-market dataset first, BY NAME; the rest only as fallbacks
  hrefs.sort((a, b) => (/ie_data/i.test(b) ? 1 : 0) - (/ie_data/i.test(a) ? 1 : 0));

  const why = [];
  for (const url of hrefs) {
    const name = decodeURIComponent(url.split('/').pop().split('?')[0]);
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const wb = XLSX.read(Buffer.from(await res.arrayBuffer()), { type: 'buffer' });
      const sheet = wb.SheetNames.find(n => /^data$/i.test(n)) || wb.SheetNames[1] || wb.SheetNames[0];
      const rows = XLSX.utils.sheet_to_json(wb.Sheets[sheet], { header: 1, blankrows: false });
      const got = capeFromRows(rows);
      say('  CAPE from ' + name + ', sheet "' + sheet + '", header row ' + got.headerRow);
      return { value: got.value, date: got.date };
    } catch (e) { why.push(name + ': ' + e.message); }
  }
  throw new Error('no workbook on shillerdata.com yielded a CAPE reading — ' + why.join('; '));
}

/* CNN's Fear & Greed is NOT fetched, and this note is here so nobody tries again (Version 543).

   V542 fetched it from the endpoint CNN's own chart calls. The first run from a GitHub runner got
   HTTP 418 — CNN's edge refusing an automated client. That is their answer, and the only way past
   it is to send a browser's user-agent and pretend not to be a script, which is evading a block
   rather than reading something published.

   AAII's sentiment survey was investigated as a replacement and is also out, by its own terms:
   the workbook's Terms of Service sheet prohibits "automated downloading (bots, scrapers, APIs)"
   without a commercial licence, and prohibits integration into commercial products besides. The
   parser was written and proved against the real file before those terms were read; it was not
   shipped. A person may still download it for their own research, which is how Keren read it.

   The figure therefore stays with the weekly task, which reads a news report QUOTING CNN's score
   and band word. That is journalism citing an index, not an automated fetch from CNN, and it is
   the arrangement that held before V542. */

/* Required as a module (the tests do this), export the pure parts and run nothing. */
/* shillerCape is exported too, so the FETCH can be tried by hand from a machine with real
   internet — which neither the cloud sandbox nor the local VM has:
     node -e "require('./tools/fetch-live.js').shillerCape().then(console.log).catch(e=>console.error('FAILED:',e.message))"
   It prints and writes nothing, so it cannot dirty data/live.json. */
if (require.main !== module) { module.exports = { capeFromRows, shillerCape }; }
else (async () => {
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
    /* lo and hi ONLY — no asOf. The app's `fedFunds.asOf` is the date of the FOMC DECISION, which
       is what the page prints beside "Last Fed move", and this date is the latest observation of
       the target-rate series, which is simply today. Publishing it here overwrote a meaningful date
       with a meaningless one and made the page say the Fed moved today. The decision date, the vote
       and the next meeting are editorial and stay in the file, exactly as they do for the VIX and
       the spread. (V544.) */
    out.fedFunds = { kind: 'object', lo: lo.value, hi: hi.value };
    say('fedFunds    ' + lo.value + '-' + hi.value + '%  ' + hi.date);
  } catch (e) { failed.push('fedFunds: ' + e.message); }

  let vix = null;
  try {
    vix = await fredLatest('VIXCLS');
    if (vix.value < 5 || vix.value > 100) throw new Error('VIX ' + vix.value + ' out of band');
    say('vix         ' + vix.value + '  ' + vix.date);
  } catch (e) { failed.push('vix: ' + e.message); vix = null; }

  /* V546: the 3-month VIX, so the app can read the SHAPE of expected volatility and not only its
     level. Same exchange, same route, same FRED key as VIXCLS — no new source and no new permission
     question. The app divides the two; the ratio is derived in one place, there. */
  let vix3m = null;
  try {
    vix3m = await fredLatest('VXVCLS');
    if (vix3m.value < 5 || vix3m.value > 100) throw new Error('VIX3M ' + vix3m.value + ' out of band');
    say('vix3m       ' + vix3m.value + '  ' + vix3m.date);
  } catch (e) { failed.push('vix3mClose: ' + e.message); vix3m = null; }

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
  if (oas) out.hyOasNow = { kind: 'scalar', value: oas.value, asOf: oas.date };   // NOT `hyOas` — see 02-live.js
  if (vix3m) out.vix3mClose = { kind: 'scalar', value: vix3m.value, asOf: vix3m.date };

  // ---- Shiller CAPE, from Shiller (monthly) ----
  try {
    const c = await shillerCape();
    out.capeValue = { kind: 'scalar', value: c.value, asOf: c.date };
    say('capeValue   ' + c.value + '  ' + c.date + '  (Shiller\'s own dataset)');
  } catch (e) { failed.push('capeValue: ' + e.message); }

  if (!Object.keys(out).length) {
    console.error('\nNOTHING FETCHED — writing nothing, previous data stands.');
    failed.forEach(f => console.error('  ' + f));
    process.exit(1);
  }

  out._meta = {
    fetchedAt: new Date().toISOString().replace(/\.\d+Z$/, 'Z'),
    ok: Object.keys(out).filter(k => k !== '_meta'),
    failed: failed,
    note: "Fetched from primary sources. CNN Fear & Greed is not here and cannot be — see the note in tools/fetch-live.js. The weekly task supplies it and copies everything into the artifact's database."
  };

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(out, null, 1) + '\n');
  console.log('\nwrote ' + path.relative(path.join(__dirname, '..'), OUT)
              + '  (' + out._meta.ok.length + ' ok, ' + failed.length + ' failed)');
  failed.forEach(f => console.log('  left alone — ' + f));
})();
