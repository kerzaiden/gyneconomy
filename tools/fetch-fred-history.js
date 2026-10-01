#!/usr/bin/env node
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

const VOL_JOIN = '1990-01';
const SP500_FROM = '1950-01';
const { shillerSheet, priceFromRows } = require('./fetch-live.js');
const band = (v, lo, hi) => typeof v === 'number' && isFinite(v) && v >= lo && v <= hi;

function monthlyMean(rows, lo, hi, before) {
  const acc = new Map();
  for (const r of rows) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(r.date)) throw new Error('unparsable date: ' + r.date);
    const m = r.date.slice(0, 7);
    if (before && m >= before) continue;
    if (!band(r.v, lo, hi)) continue;
    const a = acc.get(m) || { sum: 0, n: 0 };
    a.sum += r.v; a.n++; acc.set(m, a);
  }
  return [...acc.entries()].map(([m, a]) => ({ m, v: Math.round(a.sum / a.n * 100) / 100 }));
}

function volatilityMonthly(vxo, vix, join, running) {
  const early = monthlyMean(vxo, 1, 200, join).filter(d => d.m < join);
  const late = monthlyMean(vix, 1, 200, running).filter(d => d.m >= join);
  return early.concat(late);
}

function monthlyLevels(rows, lo, hi) {
  return rows.filter(r => band(r.v, lo, hi)).map(r => ({ m: r.date.slice(0, 7), v: r.v }));
}

const QMONTH = { '01': 1, '04': 2, '07': 3, '10': 4 };
function quarterly(rows, lo, hi) {
  return rows.filter(r => band(r.v, lo, hi)).map(r => {
    const q = QMONTH[r.date.slice(5, 7)];
    if (!q) throw new Error('not a quarter start: ' + r.date);
    return { q: r.date.slice(0, 4) + ' Q' + q, v: r.v };
  });
}

function yoyQuarterly(qs, lo, hi) {
  const at = new Map(qs.map(d => [d.q, d.v]));
  return qs.map(d => {
    const prev = at.get((Number(d.q.slice(0, 4)) - 1) + d.q.slice(4));
    return prev > 0 ? { q: d.q, v: Math.round((d.v / prev - 1) * 1000) / 10 } : null;
  }).filter(d => d && band(d.v, lo, hi));
}

function quarterlyMean(rows, lo, hi) {
  const acc = new Map();
  for (const r of rows) {
    if (!band(r.v, lo, hi)) continue;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(r.date)) throw new Error('unparsable date: ' + r.date);
    const q = r.date.slice(0, 4) + ' Q' + Math.ceil(Number(r.date.slice(5, 7)) / 3);
    const a = acc.get(q) || { sum: 0, n: 0, last: r.date };
    a.sum += r.v; a.n++; a.last = r.date; acc.set(q, a);
  }
  return [...acc.entries()].map(([q, a]) => ({ q, v: Math.round(a.sum / a.n * 100) / 100, raw: a.sum / a.n, n: a.n, last: a.last }));
}

function spreadQuarterly(long, short) {
  const s = new Map(short.map(d => [d.q, d]));
  return long.filter(d => s.has(d.q) && d.v != null && s.get(d.q).v != null).map(d => {
    const o = s.get(d.q);
    return { q: d.q, v: Math.round((d.raw - o.raw) * 100) / 100, partial: !!(d.partial || o.partial) };
  });
}

const GS30_GAP = ['2002-03', '2006-01'];
function withoutGap(qs, rows, gap) {
  const traded = new Set(rows.filter(r => r.date.slice(0, 7) < gap[0] || r.date.slice(0, 7) > gap[1])
    .map(r => r.date.slice(0, 4) + ' Q' + Math.ceil(Number(r.date.slice(5, 7)) / 3)));
  return qs.map(d => traded.has(d.q) ? d : Object.assign({}, d, { v: null, raw: null }));
}

function fiscalYears(rows, lo, hi) {
  return rows.filter(r => band(r.v, lo, hi)).map(r => {
    if (!/^\d{4}-01-01$/.test(r.date)) throw new Error('not a fiscal-year date: ' + r.date);
    return { y: Number(r.date.slice(0, 4)), v: r.v };
  });
}

function emit(fedFunds, volatility, stamp, fiscal, treasury, productivity, sp500) {
  const rows = a => a.map(d => '{m:"' + d.m + '",v:' + d.v + '}').join(',');
  const qrows = a => a.map(d => '{q:"' + d.q + '",v:' + d.v + '}').join(',');
  return `  var fedFundsHistory = [${rows(fedFunds)}];
  var volatilityHistory = [${rows(volatility)}];
` + (fiscal ? fiscalBlock(fiscal) : '') + (treasury ? treasuryBlock(treasury) : '') +
    (productivity ? '\n  var productivityHistory = [' + qrows(productivity) + '];\n' : '') +
    (sp500 ? '\n  var sp500MonthlyHistory = [' + rows(sp500) + '];\n' : '');
}

function treasuryBlock(t) {
  const rows = a => a.map(d => '{q:"' + d.q + '",v:' + d.v + (d.partial ? ',partial:true' : '') + '}').join(',');
  return `
  var treasuryQuarterly = {
${Object.keys(t).map(k => '    ' + k + ':[' + rows(t[k]) + ']').join(',\n')}
  };
`;
}

function fiscalBlock(f) {
  const yrows = a => a.map(d => '{y:' + d.y + ',v:' + d.v + '}').join(',');
  const qrows = a => a.map(d => '{q:"' + d.q + '",v:' + d.v + '}').join(',');
  return `
  var fiscalHistory = {
    gross:[${yrows(f.gross)}],
    held:[${yrows(f.held)}],
    interest:[${yrows(f.interest)}],
    budget:[${yrows(f.budget)}]
  };
  var grossDebtQuarterly = [${qrows(f.grossQ)}];
`;
}

async function main() {
  const ff = await fredSeries('FEDFUNDS', '1954-07-01');
  const fedFunds = monthlyLevels(ff, 0, 25);
  say('FEDFUNDS      ' + fedFunds.length + ' months, ' + fedFunds[0].m + ' → ' + fedFunds[fedFunds.length - 1].m);

  const vix = await fredSeries('VIXCLS', '1990-01-01');

  const vxo = await fredSeries('VXOCLS', '1986-01-01');
  const volatility = volatilityMonthly(vxo, vix, VOL_JOIN, new Date().toISOString().slice(0, 7));
  if (!volatility.length || volatility[0].m !== '1986-01' || !volatility.some(d => d.m === VOL_JOIN))
    throw new Error('volatility: expected VXO from 1986-01 and VIX from ' + VOL_JOIN);
  say('VXO + VIX     ' + volatility.length + ' months, ' + volatility[0].m + ' → ' + volatility[volatility.length - 1].m + ' (VIX from ' + VOL_JOIN + ')');

  const fiscal = {
    gross:    fiscalYears(await fredSeries('GFDGDPA188S', '1929-01-01'), 0, 300),
    held:     fiscalYears(await fredSeries('FYPUGDA188S', '1929-01-01'), 0, 300),
    interest: fiscalYears(await fredSeries('FYOIGDA188S', '1929-01-01'), 0, 30),
    budget:   fiscalYears(await fredSeries('FYFSGDA188S', '1929-01-01'), -50, 50),
    grossQ:   quarterly(await fredSeries('GFDEGDQ188S', '1966-01-01'), 0, 300)
  };
  const heldAt = y => (fiscal.held.find(d => d.y === y) || {}).v;
  if (!(Math.abs(heldAt(1946) - 106.3) < 0.6 && Math.abs(heldAt(2007) - 34.79) < 0.05))
    throw new Error('fiscal years misaligned: held FY1946 ' + heldAt(1946) + ', FY2007 ' + heldAt(2007));
  const grossAt = new Map(fiscal.gross.map(d => [d.y, d.v]));
  const under = fiscal.held.filter(d => grossAt.has(d.y) && grossAt.get(d.y) < d.v - 0.05);
  if (under.length) throw new Error('gross below held in FY' + under.map(d => d.y).join(', FY'));
  if (!fiscal.gross.some(d => d.y === 1946)) throw new Error('gross series does not reach FY1946');
  for (const k of ['gross', 'held', 'interest', 'budget']) {
    const a = fiscal[k];
    say(k.padEnd(13) + ' ' + a.length + ' fiscal years, FY' + a[0].y + ' → FY' + a[a.length - 1].y);
  }
  say('grossQ        ' + fiscal.grossQ.length + ' quarters, ' + fiscal.grossQ[0].q + ' → ' + fiscal.grossQ[fiscal.grossQ.length - 1].q);

  const T = { m3: 'TB3MS', y2: 'GS2', y5: 'GS5', y10: 'GS10', y30: 'GS30' };
  const treasury = {}, full = {};
  for (const [k, id] of Object.entries(T)) {
    const rows = await fredSeries(id, '2005-01-01');
    let qs = quarterlyMean(rows, 0, 25);
    if (k === 'y30') qs = withoutGap(qs, rows, GS30_GAP);
    const last = qs[qs.length - 1];
    const closed = /-(03|06|09|12)-/.test(last.last);
    full[k] = qs.map(d => Object.assign({}, d, { partial: d === last && !closed }));
    say(id.padEnd(13) + ' ' + qs.length + ' quarters, ' + qs[0].q + ' → ' + last.q + (closed ? '' : ' (partial)'));
  }
  full.s3m = spreadQuarterly(full.y10, full.m3);
  full.s2y = spreadQuarterly(full.y10, full.y2);
  for (const k of Object.keys(full)) treasury[k] = full[k].map(d => ({ q: d.q, v: d.v, partial: d.partial }));
  if (treasury.y30.slice(0, 4).some(d => d.v != null)) throw new Error('GS30: 2005 should be the no-issuance gap');

  const productivity = yoyQuarterly(quarterly(await fredSeries('OPHNFB', '1947-01-01'), 1, 1000), -20, 30);
  if (!productivity.length) throw new Error('OPHNFB: no year-over-year quarter');
  say('OPHNFB YoY    ' + productivity.length + ' quarters, ' + productivity[0].q + ' → ' + productivity[productivity.length - 1].q);

  const sp500 = await shillerSheet(rows => priceFromRows(rows, SP500_FROM, new Date().toISOString().slice(0, 7)));
  say('S&P 500       ' + sp500.length + ' months, ' + sp500[0].m + ' → ' + sp500[sp500.length - 1].m + ' (Shiller, monthly average of daily closes)');

  fs.writeFileSync(OUT, emit(fedFunds, volatility, new Date().toISOString().slice(0, 10), fiscal, treasury, productivity, sp500));
  say('wrote ' + path.relative(path.join(__dirname, '..'), OUT));
}

if (require.main === module) {
  main().catch(e => { console.error('::error::' + e.message); process.exit(1); });
} else {
  module.exports = { monthlyMean, volatilityMonthly, VOL_JOIN, monthlyLevels, quarterly, yoyQuarterly, quarterlyMean, spreadQuarterly, withoutGap, fiscalYears, band, emit };
}
