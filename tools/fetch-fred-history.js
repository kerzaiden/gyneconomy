#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const OUT = path.join(__dirname, '..', 'src', 'data', 'fred.json');
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

const OECD_CCI = 'https://sdmx.oecd.org/public/rest/data/OECD.SDD.STES,DSD_STES@DF_CLI,4.1/USA.M.CCICP......?format=genericdata&startPeriod=';

function oecdRows(xml) {
  const series = xml.split(/<generic:Series>/).slice(1);
  if (!series.length) throw new Error('OECD CCI: no series in the reply: ' + xml.replace(/\s+/g, ' ').slice(0, 200));
  if (series.length > 1) throw new Error('OECD CCI: more than one series came back: ' + series.map(x =>
    [...x.split(/<\/generic:SeriesKey>/)[0].matchAll(/id="([^"]+)" value="([^"]*)"/g)].map(m => m[1] + '=' + m[2]).join(' ')).join(' | '));
  const obs = [...series[0].matchAll(/<generic:Obs>[\s\S]*?<generic:ObsDimension[^>]*value="([^"]+)"[\s\S]*?<generic:ObsValue[^>]*value="([^"]+)"/g)];
  return obs.map(m => ({ m: m[1], v: Number(m[2]) })).filter(d => /^\d{4}-\d{2}$/.test(d.m) && band(d.v, 50, 150))
    .sort((x, y) => (x.m < y.m ? -1 : 1)).map(d => ({ m: d.m, v: Math.round(d.v * 100) / 100 }));
}

async function oecdConfidence(start) {
  const r = await fetch(OECD_CCI + start, { headers: { 'user-agent': 'gyneconomy-backfill (github.com/kerzaiden/gyneconomy)' } });
  if (!r.ok) throw new Error('OECD CCI: HTTP ' + r.status + ' ' + (await r.text()).replace(/\s+/g, ' ').slice(0, 200));
  return oecdRows(await r.text());
}

const VOL_JOIN = '1990-01';
const SP500_FROM = '1948-01';
const PREMIUM_FROM = '1928-01';
const GDP_JOIN = '1988 Q1';
const CPI_JOIN = '1989-01';
const RETURNS_FROM = 1928, RETURNS_JOIN = 1990, GROWTH_FROM = 1930, CPI_EARLY = '1927-01';
const DAMODARAN = 'https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/histretSP.html';
const WORTH_FROM = 1926;
const MEASURINGWORTH = 'https://www.measuringworth.com/datasets/usgdp/result.php?year_source=' + WORTH_FROM + '&year_result=' + GROWTH_FROM + '&use%5B%5D=REALGDP';
const BALKE_GORDON = 'https://data.nber.org/data/abc/abcq.csv', GNP_FROM = 1927, GNP_TO = 1948;
const { shillerSheet, shillerMonth, priceFromRows } = require('./fetch-live.js');
const band = (v, lo, hi) => typeof v === 'number' && isFinite(v) && v >= lo && v <= hi;

function premiumFromRows(rows, from) {
  const cell = c => String(c == null ? '' : c).replace(/\s+/g, ' ').trim();
  let hdr = -1, dateCol = -1;
  for (let i = 0; i < Math.min(rows.length, 30); i++) {
    const r = (rows[i] || []).map(cell);
    const d = r.findIndex(c => /^date$/i.test(c));
    if (d >= 0 && r.some(c => /^p$/i.test(c))) { hdr = i; dateCol = d; }
  }
  if (hdr < 0) throw new Error('no header row naming Date and P');
  let col = -1;
  const width = Math.max(...rows.slice(0, hdr + 1).map(r => (r || []).length));
  for (let j = 0; j < width && col < 0; j++) {
    const label = rows.slice(0, hdr + 1).map(r => cell((r || [])[j])).join(' ').replace(/\s+/g, ' ');
    if (/excess cape yield/i.test(label)) col = j;
  }
  if (col < 0) throw new Error('no column naming the Excess CAPE Yield');
  const out = [];
  for (let i = hdr + 1; i < rows.length; i++) {
    const r = rows[i] || [], raw = r[col];
    if (r[dateCol] == null || r[dateCol] === '' || raw == null || raw === '' || !isFinite(Number(raw))) continue;
    const m = shillerMonth(r[dateCol]), v = Number(raw);
    if (m < from) continue;
    if (Math.abs(v) >= 0.25) throw new Error('Excess CAPE Yield ' + v + ' in ' + m + ' is not a fraction');
    if (out.length && m <= out[out.length - 1].m) throw new Error('months out of order at ' + m);
    out.push({ m, v: Math.round(v * 10000) / 100 });
  }
  if (!out.length) throw new Error('no Excess CAPE Yield below the header');
  return out;
}

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

const TARGET_FROM = '1982-09-27', UPPER_FROM = '2008-12-16', DISCOUNT_FROM = '1950-01-01', FEDFUNDS_FROM = '1954-07';
function fedMoves(discount, target, upper, newYork) {
  const net = new Map();
  const walk = (rows, from, to, prev) => {
    for (const r of rows) {
      if (r.date < from || r.date >= to) continue;
      if (prev != null && r.v !== prev) net.set(r.date.slice(0, 7), (net.get(r.date.slice(0, 7)) || 0) + r.v - prev);
      prev = r.v;
    }
    return prev;
  };
  if (newYork) walk(newYork, '1914-01-01', DISCOUNT_FROM, null);
  walk(discount, DISCOUNT_FROM, TARGET_FROM, null);
  walk(upper, UPPER_FROM, '9999-12-31', walk(target, TARGET_FROM, UPPER_FROM, null));
  return [...net].map(([m, v]) => ({ m, v: Math.round(v * 100) / 100 })).filter(d => d.v !== 0).sort((a, b) => (a.m < b.m ? -1 : 1));
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

function yoyMonthly(rows, lo, hi) {
  const at = new Map(rows.map(r => [r.date.slice(0, 7), r.v]));
  return rows.map(r => {
    const m = r.date.slice(0, 7), prev = at.get((Number(m.slice(0, 4)) - 1) + m.slice(4));
    return prev > 0 ? { m, v: Math.round((r.v / prev - 1) * 10000) / 100 } : null;
  }).filter(d => d && band(d.v, lo, hi));
}

function yoyQuarterly2(qs, lo, hi) {
  const at = new Map(qs.map(d => [d.q, d.v]));
  return qs.map(d => {
    const prev = at.get((Number(d.q.slice(0, 4)) - 1) + d.q.slice(4));
    return prev > 0 ? { q: d.q, v: Math.round((d.v / prev - 1) * 10000) / 100 } : null;
  }).filter(d => d && band(d.v, lo, hi));
}

function damodaranReturns(html, from, to) {
  const out = {};
  for (const row of html.split(/<tr[\s>]/i).slice(1)) {
    const cells = [...row.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').trim());
    if (cells.length < 2 || !/^\d{4}$/.test(cells[0])) continue;
    const y = Number(cells[0]), v = Number(cells[1].replace(/[%,\s]/g, ''));
    if (y >= from && y < to && band(v, -60, 70)) out[y] = Math.round(v * 100) / 100;
  }
  for (let y = from; y < to; y++) if (!(y in out)) throw new Error('S&P returns: no ' + y + ' in the Damodaran table');
  return out;
}

function worthLevels(html, from, to) {
  const out = {};
  for (const row of html.split(/<tr[\s>]/i).slice(1)) {
    const cells = [...row.matchAll(/<td[^>]*>([\s\S]*?)<\/td>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').trim());
    if (cells.length < 2 || !/^\d{4}$/.test(cells[0])) continue;
    const y = Number(cells[0]), v = Number(cells[1].replace(/[$,\s]/g, ''));
    if (y >= from && y <= to && band(v, 1, 1e9)) out[y] = v;
  }
  for (let y = from; y <= to; y++) if (!(y in out)) throw new Error('MeasuringWorth: no ' + y + ' in the real GDP table; the page began: ' + html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').slice(0, 1500));
  return out;
}

function gnpLevels(csv, from, to) {
  const rows = csv.trim().split(/\r?\n/).map(r => r.split(',').map(c => c.replace(/"/g, '').trim()));
  const head = rows[0].map(c => c.toLowerCase()), yc = head.indexOf('year'), qc = head.indexOf('quarter'), vc = head.indexOf('rgnp72');
  if (yc < 0 || qc < 0 || vc < 0) throw new Error('Balke and Gordon: no year, quarter and RGNP72 columns in ' + rows[0].join(','));
  const out = [];
  for (const r of rows.slice(1)) {
    const y = Number(r[yc]), qn = Number(r[qc]), v = Number(r[vc]);
    if (y >= from && y <= to && qn >= 1 && qn <= 4 && r[vc] !== '' && band(v, 1, 1e5)) out.push({ q: y + ' Q' + qn, v });
  }
  out.sort((a, b) => (a.q < b.q ? -1 : 1));
  for (let y = from; y <= to; y++) for (let n = 1; n <= 4; n++)
    if (!out.some(d => d.q === y + ' Q' + n)) throw new Error('Balke and Gordon: no ' + y + ' Q' + n + ' in the real GNP table');
  return out;
}

function worthGrowth(levels, from, to) {
  const out = {};
  for (let y = from; y <= to; y++) out[y] = Math.round((levels[y] / levels[y - 1] - 1) * 1000) / 10;
  return out;
}

function fiscalYears(rows, lo, hi) {
  return rows.filter(r => band(r.v, lo, hi)).map(r => {
    if (!/^\d{4}-01-01$/.test(r.date)) throw new Error('not a fiscal-year date: ' + r.date);
    return { y: Number(r.date.slice(0, 4)), v: r.v };
  });
}

const PENNY = 'https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/debt_to_penny?sort=-record_date&page[size]=1';
function pennyRow(j) {
  const r = ((j && j.data) || [])[0];
  if (!r || !/^\d{4}-\d{2}-\d{2}$/.test(r.record_date) || !band(Number(r.tot_pub_debt_out_amt), 1e12, 1e15)) throw new Error('Debt to the Penny: no usable latest row');
  return { d: r.record_date, v: Math.round(Number(r.tot_pub_debt_out_amt) / 1e9) };
}

async function debtToPenny() {
  const r = await fetch(PENNY, { headers: { 'user-agent': 'gyneconomy-backfill (github.com/kerzaiden/gyneconomy)' } });
  if (!r.ok) throw new Error('Debt to the Penny: HTTP ' + r.status);
  return pennyRow(await r.json());
}

const FINRA_PAGE = 'https://www.finra.org/rules-guidance/key-topics/margin-accounts/margin-statistics';
function marginRows(rows) {
  const hdr = rows.findIndex(r => (r || []).some(c => /debit balances/i.test(String(c))));
  if (hdr < 0) throw new Error('FINRA margin: no column naming the debit balances');
  const col = rows[hdr].findIndex(c => /debit balances/i.test(String(c)));
  const out = rows.slice(hdr + 1).filter(r => r && /^\d{4}-\d{2}$/.test(String(r[0])) && band(Number(r[col]), 1, 1e8))
    .map(r => ({ date: String(r[0]) + '-01', v: Number(r[col]) })).sort((x, y) => (x.date < y.date ? -1 : 1));
  if (!out.length) throw new Error('FINRA margin: no month below the header');
  return out;
}

async function finraMargin() {
  const ua = { headers: { 'user-agent': 'Mozilla/5.0 (gyneconomy-backfill; github.com/kerzaiden/gyneconomy)' } };
  const page = await fetch(FINRA_PAGE, ua);
  if (!page.ok) throw new Error('FINRA margin page: HTTP ' + page.status);
  const link = ((await page.text()).match(/[^"' ]*margin-statistics\.xlsx/) || [])[0];
  if (!link) throw new Error('FINRA margin page: no link to margin-statistics.xlsx');
  const r = await fetch(link.startsWith('/') ? 'https://www.finra.org' + link : link, ua);
  if (!r.ok) throw new Error('FINRA margin sheet: HTTP ' + r.status);
  const XLSX = require('xlsx');
  const wb = XLSX.read(Buffer.from(await r.arrayBuffer()));
  return marginRows(XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], { header: 1 }));
}

const SPY_DAILY = 'https://www.ssga.com/us/en/intermediary/library-content/products/fund-data/etfs/us/holdings-daily-us-en-spy.xlsx';
function topTen(holdings) {
  const kept = holdings.filter(h => band(h.v, 0, 100));
  if (kept.length < 400) throw new Error('top ten: only ' + kept.length + ' holdings, an S&P 500 fund holds about 500');
  const by = {};
  kept.forEach((h, i) => { const k = /^(?!000000)[0-9A-Z]{9}$/.test(h.cusip || '') ? h.cusip.slice(0, 6) : '#' + i; by[k] = (by[k] || 0) + h.v; });
  return Math.round(Object.values(by).sort((x, y) => y - x).slice(0, 10).reduce((a, v) => a + v, 0) * 100) / 100;
}

function spyDailyRows(rows) {
  const hdr = rows.findIndex(r => (r || []).some(c => /^weight$/i.test(String(c).trim())));
  if (hdr < 0) throw new Error('SPY holdings: no Weight column');
  const col = rows[hdr].findIndex(c => /^weight$/i.test(String(c).trim())), id = rows[hdr].findIndex(c => /^identifier$/i.test(String(c).trim()));
  if (id < 0) throw new Error('SPY holdings: no Identifier (CUSIP) column, so share classes cannot be joined into companies');
  const asOf = rows.slice(0, hdr).map(r => String((r || []).join(' '))).map(t => (t.match(/as of (\d{2}-[A-Za-z]{3}-\d{4})/i) || [])[1]).find(Boolean);
  if (!asOf) throw new Error('SPY holdings: no "As of" date above the table');
  const d = new Date(asOf + ' UTC').toISOString().slice(0, 10);
  return { d, v: topTen(rows.slice(hdr + 1).map(r => ({ cusip: String((r || [])[id] || '').trim(), v: Number((r || [])[col]) }))) };
}

function keepQuarter(kept, today) {
  const q = today.d.slice(0, 4) + ' Q' + Math.ceil(Number(today.d.slice(5, 7)) / 3);
  return (kept || []).filter(r => r.q !== q).concat([{ q, d: today.d, v: today.v }]).sort((a, b) => (a.q < b.q ? -1 : 1));
}

async function spyToday() {
  const r = await fetch(SPY_DAILY, { headers: { 'user-agent': 'Mozilla/5.0 (gyneconomy-backfill; github.com/kerzaiden/gyneconomy)' } });
  if (!r.ok) throw new Error('SPY holdings: HTTP ' + r.status);
  const XLSX = require('xlsx');
  const wb = XLSX.read(Buffer.from(await r.arrayBuffer()));
  return spyDailyRows(XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], { header: 1 }));
}

function emit(fedFunds, volatility, fiscal, treasury, productivity, sp500, confidence, early, durables, premium, moves, pce, potential, credit, dollars, activity, heavy, discount) {
  const m = a => a.map(d => ({ m: d.m, v: d.v }));
  const q = a => a.map(d => ({ q: d.q, v: d.v }));
  const y = a => a.map(d => ({ y: d.y, v: d.v }));
  const e = early || { gdp: [], cpi: [], returns: {}, growth: {} };
  const out = { fedFundsHistory: m(fedFunds), volatilityHistory: m(volatility) };
  if (fiscal) {
    out.fiscalHistory = { gross: y(fiscal.gross), held: y(fiscal.held), budget: y(fiscal.budget) };
    out.grossDebtQuarterly = q(fiscal.grossQ);
  }
  if (treasury) {
    out.treasuryQuarterly = {};
    for (const k of Object.keys(treasury)) out.treasuryQuarterly[k] = treasury[k].map(d => d.partial ? { q: d.q, v: d.v, partial: true } : { q: d.q, v: d.v });
  }
  if (productivity) out.productivityHistory = q(productivity);
  if (sp500) out.sp500MonthlyHistory = m(sp500);
  if (confidence) out.confidenceHistory = m(confidence);
  if (durables) out.durablesHistory = m(durables);
  if (premium) out.premiumHistory = m(premium);
  if (moves) out.fedMoves = m(moves);
  if (discount) out.discountHistory = m(discount);
  if (pce) out.pceYoYHistory = m(pce);
  if (potential) out.potentialYoYHistory = q(potential);
  if (credit) Object.assign(out, { delinquencyHistory: q(credit.delinquency), marginHistory: m(credit.margin) });
  if (credit && credit.consumer) out.consumerCreditHistory = m(credit.consumer);
  if (credit && credit.dsr) out.dsrQuarterly = q(credit.dsr);
  if (dollars) Object.assign(out, { debtDollarsQuarterly: q(dollars.debt), debtToday: { d: dollars.today.d, v: dollars.today.v } });
  if (activity) Object.assign(out, { payrollsHistory: m(activity.payrolls), retailHistory: m(activity.retail) });
  if (heavy) out.topTenRecent = heavy.map(r => ({ q: r.q, d: r.d, v: r.v }));
  Object.assign(out, { gdpYoYBefore: q(e.gdp), cpiYoYBefore: m(e.cpi), sp500ReturnsBefore: e.returns, gdpGrowthBefore: e.growth || {}, gnpQuarterlyBefore: q(e.gnp || []) });
  return '{\n' + Object.keys(out).map(k => '  ' + JSON.stringify(k) + ': ' + JSON.stringify(out[k])).join(',\n') + '\n}\n';
}

async function main() {
  const ff = await fredSeries('FEDFUNDS', '1954-07-01');
  const fedFunds = monthlyLevels(ff, 0, 25);
  say('FEDFUNDS      ' + fedFunds.length + ' months, ' + fedFunds[0].m + ' → ' + fedFunds[fedFunds.length - 1].m);

  const newYork = await fredSeries('M13009USM156NNBR', '1914-01-01');
  const discount = monthlyLevels(newYork, 0, 10).filter(d => d.m < FEDFUNDS_FROM);
  if (!discount.length || discount[0].m > '1915-12' || !discount.some(d => d.m === '1953-12')) throw new Error('New York Fed discount rate: expected monthly rates from 1914–15 through 1953');
  say('NY discount   ' + discount.length + ' months, ' + discount[0].m + ' → ' + discount[discount.length - 1].m + ' (the line before Fed funds, ' + FEDFUNDS_FROM + ')');

  const moves = fedMoves(await fredSeries('INTDSRUSM193N', DISCOUNT_FROM), await fredSeries('DFEDTAR', TARGET_FROM), await fredSeries('DFEDTARU', UPPER_FROM), newYork);
  if (!moves.length || moves[0].m > '1916-12' || !moves.some(d => d.m === '1929-08' && d.v > 0) || !moves.some(d => d.m === '2008-12' && d.v < 0)) throw new Error('Fed moves: expected New York discount-rate moves from 1914–16, the August 1929 hike and the December 2008 cut');
  say('Fed moves     ' + moves.length + ' months with a move, ' + moves[0].m + ' → ' + moves[moves.length - 1].m + ' (New York discount rate before ' + DISCOUNT_FROM + ', the discount rate before ' + TARGET_FROM + ', then the target)');

  const vix = await fredSeries('VIXCLS', '1990-01-01');

  const vxo = await fredSeries('VXOCLS', '1986-01-01');
  const volatility = volatilityMonthly(vxo, vix, VOL_JOIN, new Date().toISOString().slice(0, 7));
  if (!volatility.length || volatility[0].m !== '1986-01' || !volatility.some(d => d.m === VOL_JOIN))
    throw new Error('volatility: expected VXO from 1986-01 and VIX from ' + VOL_JOIN);
  say('VXO + VIX     ' + volatility.length + ' months, ' + volatility[0].m + ' → ' + volatility[volatility.length - 1].m + ' (VIX from ' + VOL_JOIN + ')');

  const fiscal = {
    gross:    fiscalYears(await fredSeries('GFDGDPA188S', '1929-01-01'), 0, 300),
    held:     fiscalYears(await fredSeries('FYPUGDA188S', '1929-01-01'), 0, 300),
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
  for (const k of ['gross', 'held', 'budget']) {
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

  const confidence = await oecdConfidence('1960-01');
  if (!confidence.length) throw new Error('OECD CCI: no month inside the band');
  say('OECD CCI (US) ' + confidence.length + ' months, ' + confidence[0].m + ' → ' + confidence[confidence.length - 1].m);

  const early = await earlySeasons();
  const durables = yoyMonthly(await fredSeries('DDURRA3M086SBEA', '1959-01-01'), -60, 80);
  if (!durables.length) throw new Error('DDURRA3M086SBEA: no year-over-year month');
  say('DDURRA3M086SBEA YoY ' + durables.length + ' months, ' + durables[0].m + ' → ' + durables[durables.length - 1].m);

  const premium = await shillerSheet(rows => premiumFromRows(rows, PREMIUM_FROM));
  say('Excess CAPE Yield ' + premium.length + ' months, ' + premium[0].m + ' → ' + premium[premium.length - 1].m + ' (Shiller)');

  const pce = yoyMonthly(await fredSeries('PCEPI', '1999-01-01'), -5, 20);
  if (!pce.length || pce[0].m !== '2000-01') throw new Error('PCEPI: expected year-over-year months from 2000-01');
  say('PCEPI YoY     ' + pce.length + ' months, ' + pce[0].m + ' → ' + pce[pce.length - 1].m);

  const today = new Date(), nowQ = today.getUTCFullYear() + ' Q' + (Math.floor(today.getUTCMonth() / 3) + 1);
  const potential = yoyQuarterly2(quarterly(await fredSeries('GDPPOT', '1949-01-01'), 1, 1e6), 0, 10).filter(d => d.q < nowQ);
  if (!potential.length || potential[0].q !== '1950 Q1') throw new Error('GDPPOT: expected year-over-year quarters from 1950 Q1');
  say('GDPPOT YoY    ' + potential.length + ' quarters, ' + potential[0].q + ' → ' + potential[potential.length - 1].q + ' (CBO, through the last full quarter)');

  const credit = {
    delinquency: quarterly(await fredSeries('DRALACBS', '1985-01-01'), 0, 20),
    margin: yoyMonthly(await finraMargin(), -80, 200),
    consumer: yoyMonthly(await fredSeries('TOTALSL', '1943-01-01'), -40, 80),
    dsr: quarterly(await fredSeries('TDSP', '2005-01-01'), 5, 25)
  };
  if (credit.delinquency[0].q !== '1985 Q1' || credit.margin[0].m !== '1998-01' || credit.consumer[0].m !== '1944-01' || credit.dsr[0].q !== '2005 Q1')
    throw new Error('credit: expected delinquency from 1985 Q1, margin growth from 1998-01, consumer credit growth from 1944-01 and debt service from 2005 Q1');
  for (const k of ['delinquency', 'margin', 'consumer', 'dsr']) {
    const a = credit[k];
    say(('credit ' + k).padEnd(13) + ' ' + a.length + ' periods, ' + (a[0].q || a[0].m) + ' → ' + (a[a.length - 1].q || a[a.length - 1].m));
  }

  const dollars = {
    debt: quarterly(await fredSeries('GFDEBTN', '1966-01-01'), 1e5, 1e9).map(d => ({ q: d.q, v: Math.round(d.v / 1000) })),
    today: await debtToPenny()
  };
  if (dollars.debt[0].q !== '1966 Q1') throw new Error('GFDEBTN: expected quarters from 1966 Q1, as GFDEGDQ188S');
  say('GFDEBTN       ' + dollars.debt.length + ' quarters, ' + dollars.debt[0].q + ' → ' + dollars.debt[dollars.debt.length - 1].q + ' ($ billions)');
  say('Debt to the Penny ' + dollars.today.d + ' $' + dollars.today.v + 'B');

  const activity = {
    payrolls: yoyMonthly(await fredSeries('PAYEMS', '1939-01-01'), -20, 20),
    retail: yoyMonthly(await fredSeries('RSAFS', '1992-01-01'), -30, 60)
  };
  if (activity.payrolls[0].m !== '1940-01' || activity.retail[0].m !== '1993-01')
    throw new Error('activity: expected payroll growth from 1940-01 and retail sales growth from 1993-01');
  say('PAYEMS YoY    ' + activity.payrolls.length + ' months, ' + activity.payrolls[0].m + ' → ' + activity.payrolls[activity.payrolls.length - 1].m);
  say('RSAFS YoY     ' + activity.retail.length + ' months, ' + activity.retail[0].m + ' → ' + activity.retail[activity.retail.length - 1].m);

  const spy = await spyToday();
  let kept = [];
  try { kept = JSON.parse(fs.readFileSync(OUT, 'utf8')).topTenRecent; } catch (e) {}
  const heavy = keepQuarter(kept, spy);
  say('SPY top ten   ' + spy.d + ' ' + spy.v + '% (State Street daily holdings), kept for ' + heavy.length + ' quarter(s) since the SEC import');

  fs.writeFileSync(OUT, emit(fedFunds, volatility, fiscal, treasury, productivity, sp500, confidence, early, durables, premium, moves, pce, potential, credit, dollars, activity, heavy, discount));
  say('wrote ' + path.relative(path.join(__dirname, '..'), OUT));
}

async function earlySeasons() {
  const gdp = yoyQuarterly2(quarterly(await fredSeries('GDPC1', '1947-01-01'), 1, 1e6), -15, 25).filter(d => d.q < GDP_JOIN);
  if (!gdp.length || gdp[0].q !== '1948 Q1' || gdp[gdp.length - 1].q !== '1987 Q4') throw new Error('GDPC1: expected 1948 Q1 → 1987 Q4');
  say('GDPC1 YoY     ' + gdp.length + ' quarters, ' + gdp[0].q + ' → ' + gdp[gdp.length - 1].q + ' (before ' + GDP_JOIN + ')');
  const nsa = yoyMonthly(await fredSeries('CPIAUCNS', '1926-01-01'), -15, 25).filter(d => d.m >= CPI_EARLY && d.m < '1948-01');
  if (!nsa.length || nsa[0].m !== CPI_EARLY || nsa[nsa.length - 1].m !== '1947-12' || nsa.length !== 252) throw new Error('CPIAUCNS: expected ' + CPI_EARLY + ' → 1947-12');
  say('CPIAUCNS YoY  ' + nsa.length + ' months, ' + nsa[0].m + ' → ' + nsa[nsa.length - 1].m + ' (before CPIAUCSL)');
  const sa = yoyMonthly(await fredSeries('CPIAUCSL', '1947-01-01'), -5, 20).filter(d => d.m < CPI_JOIN);
  if (!sa.length || sa[0].m !== '1948-01' || sa[sa.length - 1].m !== '1988-12') throw new Error('CPIAUCSL: expected 1948-01 → 1988-12');
  const cpi = nsa.concat(sa);
  say('CPIAUCSL YoY  ' + sa.length + ' months, ' + sa[0].m + ' → ' + sa[sa.length - 1].m + ' (before ' + CPI_JOIN + ')');
  const r = await fetch(DAMODARAN, { headers: { 'user-agent': 'gyneconomy-backfill (github.com/kerzaiden/gyneconomy)' } });
  if (!r.ok) throw new Error('Damodaran: HTTP ' + r.status);
  const returns = damodaranReturns(await r.text(), RETURNS_FROM, RETURNS_JOIN);
  say('S&P returns   ' + Object.keys(returns).length + ' years, ' + RETURNS_FROM + ' → ' + (RETURNS_JOIN - 1) + ' (Damodaran, dividends included)');
  const growth = {};
  fiscalYears(await fredSeries('A191RL1A225NBEA', GROWTH_FROM + '-01-01'), -15, 25).filter(d => d.y < RETURNS_JOIN).forEach(d => { growth[d.y] = d.v; });
  for (let y = GROWTH_FROM; y < RETURNS_JOIN; y++) if (!(y in growth)) throw new Error('A191RL1A225NBEA: no ' + y);
  say('Real GDP      ' + Object.keys(growth).length + ' years, ' + GROWTH_FROM + ' → ' + (RETURNS_JOIN - 1) + ' (BEA, annual change)');
  const w = await fetch(MEASURINGWORTH, { headers: { 'user-agent': 'gyneconomy-backfill (github.com/kerzaiden/gyneconomy)' } });
  if (!w.ok) throw new Error('MeasuringWorth: HTTP ' + w.status);
  const levels = worthLevels(await w.text(), WORTH_FROM, GROWTH_FROM), worth = worthGrowth(levels, WORTH_FROM + 1, GROWTH_FROM);
  if (Math.abs(worth[GROWTH_FROM] - growth[GROWTH_FROM]) > 0.5) throw new Error('MeasuringWorth ' + GROWTH_FROM + ' growth ' + worth[GROWTH_FROM] + ' does not meet BEA ' + growth[GROWTH_FROM]);
  for (let y = WORTH_FROM + 1; y < GROWTH_FROM; y++) growth[y] = worth[y];
  say('Real GDP      ' + (WORTH_FROM + 1) + ' → ' + (GROWTH_FROM - 1) + ' (MeasuringWorth, ' + JSON.stringify(levels) + '; ' + GROWTH_FROM + ' meets BEA at ' + worth[GROWTH_FROM] + ')');
  const g = await fetch(BALKE_GORDON, { headers: { 'user-agent': 'gyneconomy-backfill (github.com/kerzaiden/gyneconomy)' } });
  if (!g.ok) throw new Error('Balke and Gordon: HTTP ' + g.status);
  const gnp = gnpLevels(await g.text(), GNP_FROM, GNP_TO);
  say('Real GNP      ' + gnp.length + ' quarters, ' + gnp[0].q + ' → ' + gnp[gnp.length - 1].q + ' (Balke and Gordon, NBER)');
  return { gdp, cpi, returns, growth, gnp };
}

if (require.main === module) {
  main().catch(e => { console.error('::error::' + e.message); process.exit(1); });
} else {
  module.exports = { topTen, spyDailyRows, keepQuarter, marginRows, pennyRow, fedMoves, premiumFromRows, damodaranReturns, worthLevels, worthGrowth, gnpLevels, yoyMonthly, yoyQuarterly2, oecdRows, monthlyMean, volatilityMonthly, VOL_JOIN, monthlyLevels, quarterly, yoyQuarterly, quarterlyMean, spreadQuarterly, withoutGap, fiscalYears, band, emit };
}
