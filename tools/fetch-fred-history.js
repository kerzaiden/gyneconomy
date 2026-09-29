#!/usr/bin/env node
/* Backfill the two HISTORIES the app was missing, and write src/js/03b-history-fred.js.

   Run by .github/workflows/backfill.yml (workflow_dispatch). Needs FRED_API_KEY, the same secret
   tools/fetch-live.js uses. It obeys that script's rules, which are the app's rules:

   1. PRIMARY SOURCES ONLY. FRED redistributes both of these from Cboe and from the Board of
      Governors, with permission, and the app already cites FRED for series of exactly this kind.
   2. NEVER INVENT A NUMBER. A month with no usable observation is LEFT OUT. A gap is a gap, and a
      straight line drawn through one is a lie about a month nobody measured.
   3. SANITY BANDS, not correctness checks — wide enough to pass any market and narrow enough to
      catch a decimal slip or an error page parsed as data.

   WHY A BACKFILL AND NOT THE NIGHTLY JOB. data.yml keeps today's figures current; these are the
   RECORD, tens of years of it, and it changes only when FRED revises. So this runs on demand,
   writes a generated source part, and the diff is the whole audit trail — the same reason the
   nightly job commits data/live.json rather than hiding it in a store.

   THE TWO SERIES

   fedFundsHistory — FEDFUNDS, the effective federal funds rate, monthly from July 1954. This is
   the POLICY rate: what the Fed sets, as opposed to what the market charges, which is what the
   Treasury histories already in 03-data.js measure.

   fearCurveHistory — VIXCLS divided by VXVCLS, monthly from December 2007, which is when VXVCLS
   begins and therefore when this ratio can first be computed at all. The ratio is taken per DAY
   and then sampled at each month's last complete day, never as a ratio of two monthly averages:
   the curve is a same-day relationship between two prices, and averaging the legs separately
   would report a shape that never traded. The app's fearCurve() rounds to three decimals; so does
   this, so the live reading and the last point of the history are computed identically.

   lendingStandardsHistory (DRTSCILM, the loan survey) was fetched here from V597 to V638 as Pressure's
   reading; V639 returned Pressure to the Treasury yields and the series went. Its reasoning — why a
   survey and not a rate, and which priced readings are licence-blocked for a commercial app (Freddie
   Mac, Moody's) — is at tag v638-fewer-words.

   Usage: FRED_API_KEY=... node tools/fetch-fred-history.js */

const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'src', 'js', '03b-history-fred.js');
const KEY = process.env.FRED_API_KEY;

const say = m => console.log(m);

async function getJson(url, label) {
  const r = await fetch(url, { headers: { accept: 'application/json' } });
  if (!r.ok) throw new Error(label + ': HTTP ' + r.status);
  return r.json();
}

/* Every observation of a series from `start`, oldest first, with FRED's "." no-print days dropped. */
async function fredSeries(series, start) {
  if (!KEY) throw new Error('FRED_API_KEY not set');
  const url = 'https://api.stlouisfed.org/fred/series/observations'
    + '?series_id=' + encodeURIComponent(series)
    + '&api_key=' + encodeURIComponent(KEY)
    + '&file_type=json&sort_order=asc&observation_start=' + start;
  const j = await getJson(url, series);
  const obs = (j.observations || [])
    .filter(o => o.value && o.value !== '.' && isFinite(Number(o.value)))
    .map(o => ({ date: o.date, v: Number(o.value) }));
  if (!obs.length) throw new Error(series + ': no usable observations');
  return obs;
}

/* ---------------- the pure parts, which the unit tests pin ---------------- */

const band = (v, lo, hi) => typeof v === 'number' && isFinite(v) && v >= lo && v <= hi;

/* The last observation of each month, keyed YYYY-MM. Input must be oldest-first. A month with no
   usable day simply does not appear — see rule 2. */
function monthEnd(rows) {
  const out = new Map();
  for (const r of rows) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(r.date)) throw new Error('unparsable date: ' + r.date);
    out.set(r.date.slice(0, 7), r);        // later days overwrite earlier ones within a month
  }
  return out;
}

/* The curve, month by month: the ratio is computed per day and then sampled at the month's last day
   on which BOTH legs printed. A day where one leg is missing is not a day the ratio existed. */
function curveMonthly(near, far, lo, hi) {
  const farByDate = new Map(far.map(r => [r.date, r.v]));
  const daily = [];
  for (const n of near) {
    const f = farByDate.get(n.date);
    if (f == null || !(f > 0)) continue;
    if (!band(n.v, 1, 200) || !band(f, 1, 200)) continue;
    const ratio = Math.round((n.v / f) * 1000) / 1000;   // as fearCurve() rounds, so the two agree
    if (!band(ratio, lo, hi)) continue;
    daily.push({ date: n.date, v: ratio });
  }
  return [...monthEnd(daily).entries()].map(([m, r]) => ({ m, v: r.v }));
}

/* A monthly FRED series straight through, with its band applied. */
function monthlyLevels(rows, lo, hi) {
  return rows.filter(r => band(r.v, lo, hi)).map(r => ({ m: r.date.slice(0, 7), v: r.v }));
}

/* A quarterly FRED series, labelled the way the app labels quarters. FRED dates a quarter at its
   FIRST month (01, 04, 07, 10), so the month is what names the quarter; anything else is a series
   that is not quarterly and this refuses it rather than guessing which quarter it meant. */
const QMONTH = { '01': 1, '04': 2, '07': 3, '10': 4 };
function quarterly(rows, lo, hi) {
  return rows.filter(r => band(r.v, lo, hi)).map(r => {
    const q = QMONTH[r.date.slice(5, 7)];
    if (!q) throw new Error('not a quarter start: ' + r.date);
    return { q: r.date.slice(0, 4) + ' Q' + q, v: r.v };
  });
}

/* An annual FISCAL-YEAR series from OMB, as FRED carries it. FRED dates fiscal year N at N-01-01, so the
   year of the date IS the fiscal year; anything not dated on 1 January is not this kind of series and is
   refused rather than guessed at. The run checks the alignment against two figures the app already cites
   (debt held by the public, FY1946 and FY2007) before it trusts a single year. */
function fiscalYears(rows, lo, hi) {
  return rows.filter(r => band(r.v, lo, hi)).map(r => {
    if (!/^\d{4}-01-01$/.test(r.date)) throw new Error('not a fiscal-year date: ' + r.date);
    return { y: Number(r.date.slice(0, 4)), v: r.v };
  });
}

function emit(fedFunds, fearCurve, stamp, fiscal) {
  const rows = a => a.map(d => '{m:"' + d.m + '",v:' + d.v + '}').join(',');
  const qrows = a => a.map(d => '{q:"' + d.q + '",v:' + d.v + '}').join(',');
  return `/* GENERATED by tools/fetch-fred-history.js — do not hand-edit.

   Two histories the app could not compute from what it held. Both are monthly, oldest first, and
   both leave a month OUT rather than interpolate it.

   fedFundsHistory   FEDFUNDS, the effective federal funds rate — the POLICY rate, as opposed to
                     the Treasury yields 03-data.js already carries, which are what the market
                     charges. ${fedFunds.length} months from ${fedFunds.length ? fedFunds[0].m : '—'}.
   fearCurveHistory  VIXCLS / VXVCLS, sampled at each month's last day on which both legs printed.
                     1.00 is a flat curve; above it the curve is inverted. ${fearCurve.length} months
                     from ${fearCurve.length ? fearCurve[0].m : '—'} — VXVCLS begins in Dec 2007, so the
                     ratio cannot be computed before then and this history does not pretend it can.

   Source: Federal Reserve Bank of St. Louis (FRED), redistributing Cboe and the Board of Governors.
   Fetched ${stamp}. */
  var fedFundsHistory = [${rows(fedFunds)}];
  var fearCurveHistory = [${rows(fearCurve)}];
` + (fiscal ? fiscalBlock(fiscal) : '');
}

/* V643 (Keren: "switch the bar to gross debt"). The four OMB fiscal-year series behind the Power panel, fetched
   together so the debt marker, its record and the Power history are read from ONE vintage, plus the quarterly
   gross-debt ratio that says where the debt stands between fiscal years. Year-keyed, oldest first. */
function fiscalBlock(f) {
  const yrows = a => a.map(d => '{y:' + d.y + ',v:' + d.v + '}').join(',');
  const qrows = a => a.map(d => '{q:"' + d.q + '",v:' + d.v + '}').join(',');
  return `
  /* fiscalHistory — OMB Historical Tables via FRED, % of GDP, by fiscal year:
       gross     FYGFGDA188S  gross federal debt (held by the public + held by government accounts)
       held      FYPUGDA188S  debt held by the public
       interest  FYOIGDA188S  federal outlays: interest
       budget    FYFSGDA188S  surplus (+) or deficit (−)
     grossDebtQuarterly — GFDEGDQ188S, total public debt as a % of GDP, quarterly (Treasury and BEA via FRED). */
  var fiscalHistory = {
    gross:[${yrows(f.gross)}],
    held:[${yrows(f.held)}],
    interest:[${yrows(f.interest)}],
    budget:[${yrows(f.budget)}]
  };
  var grossDebtQuarterly = [${qrows(f.grossQ)}];
`;
}

/* ---------------- the run ---------------- */

async function main() {
  const ff = await fredSeries('FEDFUNDS', '1954-07-01');
  const fedFunds = monthlyLevels(ff, 0, 25);
  say('FEDFUNDS      ' + fedFunds.length + ' months, ' + fedFunds[0].m + ' → ' + fedFunds[fedFunds.length - 1].m);

  const near = await fredSeries('VIXCLS', '2007-12-01');
  const far = await fredSeries('VXVCLS', '2007-12-01');
  const fearCurve = curveMonthly(near, far, 0.3, 2.5);
  if (!fearCurve.length) throw new Error('fear curve: no month had both legs');
  say('VIX ÷ VIX3M   ' + fearCurve.length + ' months, ' + fearCurve[0].m + ' → ' + fearCurve[fearCurve.length - 1].m);

  /* V639: DRTSCILM (the loan survey, V597) is no longer fetched — Pressure reads the Treasury yields again.
     `quarterly` stays: it is tested, and the next quarterly series will want it. */
  const fiscal = {
    gross:    fiscalYears(await fredSeries('FYGFGDA188S', '1929-01-01'), 0, 300),
    held:     fiscalYears(await fredSeries('FYPUGDA188S', '1929-01-01'), 0, 300),
    interest: fiscalYears(await fredSeries('FYOIGDA188S', '1929-01-01'), 0, 30),
    budget:   fiscalYears(await fredSeries('FYFSGDA188S', '1929-01-01'), -50, 50),
    grossQ:   quarterly(await fredSeries('GFDEGDQ188S', '1966-01-01'), 0, 300)
  };
  /* The alignment check: the app already prints debt held by the public at 106.3% for FY1946 and 34.79% for
     FY2007 (V392, re-verified). If this series does not say the same for those years, the year labels are off
     and nothing fetched here is written. */
  const heldAt = y => (fiscal.held.find(d => d.y === y) || {}).v;
  if (!(Math.abs(heldAt(1946) - 106.3) < 0.6 && Math.abs(heldAt(2007) - 34.79) < 0.05))
    throw new Error('fiscal years misaligned: held FY1946 ' + heldAt(1946) + ', FY2007 ' + heldAt(2007));
  for (const k of ['gross', 'held', 'interest', 'budget']) {
    const a = fiscal[k];
    say(k.padEnd(13) + ' ' + a.length + ' fiscal years, FY' + a[0].y + ' → FY' + a[a.length - 1].y);
  }
  say('grossQ        ' + fiscal.grossQ.length + ' quarters, ' + fiscal.grossQ[0].q + ' → ' + fiscal.grossQ[fiscal.grossQ.length - 1].q);

  fs.writeFileSync(OUT, emit(fedFunds, fearCurve, new Date().toISOString().slice(0, 10), fiscal));
  say('wrote ' + path.relative(path.join(__dirname, '..'), OUT));
}

if (require.main === module) {
  main().catch(e => { console.error('::error::' + e.message); process.exit(1); });
} else {
  module.exports = { monthEnd, curveMonthly, monthlyLevels, quarterly, fiscalYears, band, emit };
}
