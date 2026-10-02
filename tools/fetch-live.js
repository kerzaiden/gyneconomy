#!/usr/bin/env node
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
async function getHtml(url, label) {
  const r = await fetch(url, { headers: { 'accept': 'text/html' }, signal: AbortSignal.timeout(30000) });
  if (!r.ok) throw new Error(label + ': HTTP ' + r.status);
  return r.text();
}

const FOMC_URL = 'https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm';
const FOMC_DECISIONS = [
  '2025-01-29', '2025-03-19', '2025-05-07', '2025-06-18', '2025-07-30', '2025-09-17', '2025-10-29', '2025-12-10',
  '2026-01-28', '2026-03-18', '2026-04-29', '2026-06-17', '2026-07-29', '2026-09-16', '2026-10-28', '2026-12-09'
];
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const dayLabel = iso => MONTHS[Number(iso.slice(5, 7)) - 1] + ' ' + Number(iso.slice(8, 10)) + ', ' + iso.slice(0, 4);
const dayBefore = iso => new Date(Date.parse(iso + 'T00:00:00Z') - 86400000).toISOString().slice(0, 10);
const MOVE_WORDS = { 25: 'a quarter point', 50: 'half a point', 75: 'three quarters of a point', 100: 'a full point' };

function fedMove(obs, today, calendar) {
  const days = obs.filter(o => o.value !== '.' && isFinite(Number(o.value)))
    .map(o => ({ date: o.date, v: Number(o.value) })).sort((a, b) => a.date < b.date ? -1 : 1);
  if (!days.length) throw new Error('DFEDTARU: no usable observations');
  const now = days[days.length - 1];
  let i = days.length - 1;
  while (i > 0 && days[i - 1].v === now.v) i--;
  if (i === 0) throw new Error('DFEDTARU: no change in the ' + days.length + ' days fetched');
  const bp = Math.round((now.v - days[i - 1].v) * 100);
  const effective = days[i].date;
  const decided = calendar.filter(d => d < effective && d >= dayBefore(dayBefore(dayBefore(effective)))).pop() || dayBefore(effective);
  const size = MOVE_WORDS[Math.abs(bp)] || (Math.abs(bp) / 100).toFixed(2) + ' points';
  const next = calendar.filter(d => d > today)[0];
  return {
    lastMove: (bp > 0 ? '+' : '-') + (Math.abs(bp) / 100).toFixed(2),
    lastMoveLabel: (bp > 0 ? 'raised ' : 'cut ') + size,
    asOf: dayLabel(decided),
    next: next ? dayLabel(next) : ''
  };
}

const MONTH_INDEX = m => MONTHS.findIndex(x => x.toLowerCase() === String(m).trim().slice(0, 3).toLowerCase());
const plainText = h => h.replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&ndash;|&#8211;|\u2013/g, '-')
  .replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
const isoDay = (y, m, d) => y + '-' + String(m + 1).padStart(2, '0') + '-' + String(d).padStart(2, '0');

function fomcMeetingEnd(year, monthText, dateText) {
  if (/unscheduled|notation|conference call/i.test(monthText + ' ' + dateText)) return null;
  const days = dateText.match(/^(\d{1,2})(?:\s*-\s*(\d{1,2}))?\s*\*?$/);
  if (!days) return null;
  const months = monthText.split('/').map(MONTH_INDEX);
  if (!months.length || months.some(i => i < 0)) return null;
  const first = Number(days[1]), last = Number(days[2] || days[1]);
  let m = months[months.length - 1], y = year;
  if (months.length === 1 && last < first) m++;
  if (m > 11) { m = 0; y++; }
  if (last < 1 || last > 31) return null;
  return isoDay(y, m, last);
}

function fomcFromHtml(html) {
  const text = String(html || '');
  const heads = [...text.matchAll(/(\d{4})\s+FOMC\s+Meetings/g)];
  const out = new Set();
  heads.forEach((h, k) => {
    const part = text.slice(h.index, k + 1 < heads.length ? heads[k + 1].index : text.length);
    const rows = part.matchAll(/fomc-meeting__month[^>]*>([\s\S]*?)<\/div>\s*<div[^>]*fomc-meeting__date[^>]*>([\s\S]*?)<\/div>/g);
    for (const r of rows) {
      const d = fomcMeetingEnd(Number(h[1]), plainText(r[1]), plainText(r[2]));
      if (d) out.add(d);
    }
  });
  return [...out].sort();
}

function fomcCalendar(fetched, fallback, year, log) {
  const warn = log || say;
  const got = (fetched || []).filter(d => /^\d{4}-\d{2}-\d{2}$/.test(d));
  const thisYear = got.filter(d => d.slice(0, 4) === String(year)).length;
  if (thisYear < 4) {
    warn('WARNING: FOMC calendar from federalreserve.gov gave ' + thisYear + ' decision dates for ' + year
      + ' (fewer than 4), using the hand list FOMC_DECISIONS instead');
    return [...new Set(fallback)].sort();
  }
  const years = new Set(got.map(d => d.slice(0, 4)));
  return [...new Set(got.concat(fallback.filter(d => !years.has(d.slice(0, 4)))))].sort();
}

function fomcRunsOut(calendar, today, days) {
  const until = new Date(Date.parse(today + 'T00:00:00Z') + (days || 60) * 86400000).toISOString().slice(0, 10);
  return !calendar.some(d => d > today && d <= until);
}

async function fomcLive(today, log) {
  const warn = log || say;
  let fetched = [];
  try { fetched = fomcFromHtml(await getHtml(FOMC_URL, 'FOMC calendar')); }
  catch (e) { warn('WARNING: FOMC calendar fetch failed (' + e.message + ')'); }
  const calendar = fomcCalendar(fetched, FOMC_DECISIONS, Number(today.slice(0, 4)), warn);
  if (fomcRunsOut(calendar, today, 60)) {
    warn('WARNING: the FOMC calendar has run out, no decision date in the 60 days after ' + today
      + '; it needs the next year\'s dates (add them to FOMC_DECISIONS in tools/fetch-live.js)');
  }
  return calendar;
}

function assemble(prev, fresh) {
  const out = {};
  for (const k of Object.keys(prev || {})) if (k !== '_meta') out[k] = prev[k];
  for (const k of Object.keys(fresh)) out[k] = fresh[k];
  return out;
}

async function fredRecent(series, limit) {
  if (!KEY) throw new Error('FRED_API_KEY not set');
  const url = 'https://api.stlouisfed.org/fred/series/observations'
    + '?series_id=' + encodeURIComponent(series)
    + '&api_key=' + encodeURIComponent(KEY)
    + '&file_type=json&sort_order=desc&limit=' + limit;
  const j = await getJson(url, series);
  return j.observations || [];
}

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
  const now = new Date().getUTCFullYear();
  try { return await treasuryCurveFor(now); }
  catch (e) {
    if (!/no rows/.test(e.message)) throw e;
    return treasuryCurveFor(now - 1);
  }
}

async function treasuryCurveFor(year) {
  const url = 'https://home.treasury.gov/resource-center/data-chart-center/interest-rates/'
    + 'daily-treasury-rates.csv/' + year + '/all?type=daily_treasury_yield_curve'
    + '&field_tdr_date_value=' + year + '&page&_format=csv';
  const csv = await getText(url, 'treasury');
  const lines = csv.trim().split(/\r?\n/);
  if (lines.length < 2) throw new Error('treasury: no rows');
  const head = lines[0].split(',').map(h => h.replace(/^"|"$/g, '').trim());
  const cells = lines[1].split(',').map(c => c.replace(/^"|"$/g, '').trim());
  const at = name => { const i = head.indexOf(name); return i < 0 ? null : Number(cells[i]); };
  const rows = [];
  for (const [col, key] of MATURITIES) {
    const v = at(col);
    if (v != null && isFinite(v)) rows.push({ m: key, y: v });
  }
  if (rows.length < 10) throw new Error('treasury: only ' + rows.length + ' maturities parsed');
  for (const r of rows) if (r.y < 0 || r.y > 20) throw new Error('treasury: ' + r.m + ' = ' + r.y + ' out of band');
  const raw = cells[head.indexOf('Date')] || '';
  const us = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(raw.trim());
  const date = us ? us[3] + '-' + us[1] + '-' + us[2] : raw.trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) throw new Error('treasury: unparsable date ' + JSON.stringify(raw));
  return { rows, date };
}

function capeFromRows(rows) {
  let hdr = -1, dateCol = -1, capeCol = -1;
  for (let i = 0; i < Math.min(rows.length, 30); i++) {
    const r = (rows[i] || []).map(c => String(c == null ? '' : c).trim());
    const d = r.findIndex(c => /^date$/i.test(c));
    const c = r.findIndex(x => /^(cape|cape ratio|p\/e10|pe10)$/i.test(x));
    if (d >= 0 && c >= 0) { hdr = i; dateCol = d; capeCol = c; }
  }
  if (hdr < 0) throw new Error('no header row naming Date and CAPE');

  let val = null, when = null;
  for (let i = rows.length - 1; i > hdr; i--) {
    const v = Number((rows[i] || [])[capeCol]);
    if (!isFinite(v) || v <= 0) continue;
    val = v; when = (rows[i] || [])[dateCol]; break;
  }
  if (val == null) throw new Error('no CAPE reading below the header');
  if (val < 4 || val > 60) throw new Error('CAPE ' + val + ' out of band');

  return {
    value: Math.round(val * 100) / 100,
    date: shillerMonth(when) + '-01',
    headerRow: hdr + 1
  };
}

function shillerMonth(when) {
  const str = String(when).trim();
  const md = /^(\d{4})\.(\d{1,2})$/.exec(str);
  if (!md) throw new Error('unparsable Shiller date ' + JSON.stringify(str));
  const mm = md[2].length === 1 ? Number(md[2]) * 10 : Number(md[2]);
  if (!(mm >= 1 && mm <= 12)) throw new Error('impossible month in ' + JSON.stringify(str));
  return md[1] + '-' + String(mm).padStart(2, '0');
}

function priceFromRows(rows, from, running) {
  let hdr = -1, dateCol = -1, pCol = -1;
  for (let i = 0; i < Math.min(rows.length, 30); i++) {
    const r = (rows[i] || []).map(c => String(c == null ? '' : c).trim());
    const d = r.findIndex(c => /^date$/i.test(c));
    const p = r.findIndex(x => /^p$/i.test(x));
    if (d >= 0 && p >= 0) { hdr = i; dateCol = d; pCol = p; }
  }
  if (hdr < 0) throw new Error('no header row naming Date and P');
  const out = [];
  for (let i = hdr + 1; i < rows.length; i++) {
    const r = rows[i] || [], v = Number(r[pCol]);
    if (r[dateCol] == null || r[dateCol] === '' || !isFinite(v) || v <= 0) continue;
    const m = shillerMonth(r[dateCol]);
    if (m < from || (running && m >= running)) continue;
    if (v < 1 || v > 100000) throw new Error('S&P price ' + v + ' out of band in ' + m);
    if (out.length && m <= out[out.length - 1].m) throw new Error('months out of order at ' + m);
    out.push({ m, v: Math.round(v * 100) / 100 });
  }
  if (!out.length) throw new Error('no S&P price below the header');
  return out;
}

async function shillerCape() {
  const got = await shillerSheet(capeFromRows);
  return { value: got.value, date: got.date };
}

async function shillerSheet(parse) {
  let XLSX;
  try { XLSX = require('xlsx'); }
  catch (e) { throw new Error('xlsx is not installed — run npm i; CAPE needs it to read Shiller\'s .xls'); }
  const page = await getText('https://shillerdata.com/', 'shiller page');

  const hrefs = [];
  for (const m of page.matchAll(/href="([^"]*\.xls[x]?(?:\?[^"]*)?)"/gi)) {
    const u = new URL(m[1], 'https://shillerdata.com/').href;
    if (!hrefs.includes(u)) hrefs.push(u);
  }
  if (!hrefs.length) throw new Error('no .xls link found on shillerdata.com');
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
      const got = parse(rows);
      say('  Shiller from ' + name + ', sheet "' + sheet + '"');
      return got;
    } catch (e) { why.push(name + ': ' + e.message); }
  }
  throw new Error('no workbook on shillerdata.com yielded a reading — ' + why.join('; '));
}

if (require.main !== module) { module.exports = { capeFromRows, priceFromRows, shillerMonth, shillerSheet, shillerCape, fedMove, assemble, FOMC_DECISIONS, fomcFromHtml, fomcCalendar, fomcRunsOut }; }
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
    const [hi, lo, upper] = await Promise.all([fredLatest('DFEDTARU'), fredLatest('DFEDTARL'), fredRecent('DFEDTARU', 1500)]);
    if (hi.value < 0 || hi.value > 25 || lo.value > hi.value) throw new Error('target range out of band');
    let move = {};
    const today = new Date().toISOString().slice(0, 10);
    try { move = fedMove(upper, today, await fomcLive(today)); }
    catch (e) { failed.push('fedFunds last move: ' + e.message); }
    out.fedFunds = Object.assign({ kind: 'object', lo: lo.value, hi: hi.value }, move);
    say('fedFunds    ' + lo.value + '-' + hi.value + '%  ' + hi.date + '  last move ' + (move.lastMove || '?') + ' on ' + (move.asOf || '?')
        + (move.next ? ', next ' + move.next : ', next decision not in the FOMC calendar'));
  } catch (e) { failed.push('fedFunds: ' + e.message); }

  let vix = null;
  try {
    vix = await fredLatest('VIXCLS');
    if (vix.value < 5 || vix.value > 100) throw new Error('VIX ' + vix.value + ' out of band');
    say('vix         ' + vix.value + '  ' + vix.date);
  } catch (e) { failed.push('vix: ' + e.message); vix = null; }

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

  if (vix) out.vixClose = { kind: 'scalar', value: vix.value, asOf: vix.date };
  if (oas) out.hyOasNow = { kind: 'scalar', value: oas.value, asOf: oas.date };
  if (vix3m) out.vix3mClose = { kind: 'scalar', value: vix3m.value, asOf: vix3m.date };

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
    note: "Fetched from primary sources. A reading that failed keeps its previous document and its own asOf. The daily task copies every document into the artifact's database."
  };
  let prev = {};
  try { prev = JSON.parse(fs.readFileSync(OUT, 'utf8')); } catch (e) {}
  const doc = assemble(prev, out);

  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(doc, null, 1) + '\n');
  console.log('\nwrote ' + path.relative(path.join(__dirname, '..'), OUT)
              + '  (' + out._meta.ok.length + ' ok, ' + failed.length + ' failed)');
  failed.forEach(f => console.log('  left alone — ' + f));
})();
