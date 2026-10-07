#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { topTen } = require('./fetch-fred-history.js');

const OUT = path.join(__dirname, '..', 'src', 'data', 'series.json');
const KEY = 'topTenQuarterly';

function nportQuarter(xml) {
  const d = (xml.match(/<repPdDate>(\d{4})-(03|06|09|12)-\d{2}<\/repPdDate>/) || []);
  if (!d.length) throw new Error('N-PORT: no quarter-end <repPdDate>');
  const w = [...xml.matchAll(/<invstOrSec>([\s\S]*?)<\/invstOrSec>/g)].map(m => ({
    cusip: (m[1].match(/<cusip>([^<]*)<\/cusip>/) || [])[1], v: Number((m[1].match(/<pctVal>(-?[\d.Ee+-]+)<\/pctVal>/) || [])[1]) }));
  return { q: d[1] + ' Q' + Number(d[2]) / 3, v: topTen(w) };
}

const MONTHS = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'];

function reportLines(txt) {
  if (!/<TR/i.test(txt)) return txt.split('\n');
  return txt.split(/<\/TR>/i).map(r => r.split(/<\/TD>/i).map(c => c.replace(/<[^>]*>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&')
    .replace(/&#(146|39|8217);/g, "'").replace(/&#\d+;/g, ' ').replace(/\s+/g, ' ').trim()).filter(Boolean).join(' '));
}

function issuer(name) {
  return name.toLowerCase().replace(/\((the|a|b|c)\)|\(class [a-z]\)|class [a-z]\b|\b(inc|corp|co)\b|[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
}

function reportQuarter(txt) {
  let date = null, net = null, prev = '', done = false, open = false;
  const seen = new Set(), by = {};
  reportLines(txt).forEach(raw => {
    const t = raw.replace(/\s+/g, ' ').trim();
    if (!date && /SC?H?E?DULE OF INVESTMENTS/i.test(t)) open = true;
    if (open && !date) date = (t.match(new RegExp('(' + MONTHS.join('|') + ') \\d{1,2}, (\\d{4})', 'i')) || [])[0] || null;
    if (Object.keys(by).length && /^TOTAL (COMMON STOCKS|INVESTMENTS)/i.test(t)) done = true;
    const n = t.match(/^NET ASSETS[ .]*\$ ?([\d,]{9,})/i);
    if (n && net === null) net = Number(n[1].replace(/,/g, ''));
    const h = t.match(/^([A-Za-z0-9(][^$]*?)[\s.*]*\s([\d,]{3,})\s+\$?\s*(\d{1,3}(?:,\d{3})+)$/);
    if (h && date && !done) {
      let name = h[1].replace(/[.*\s]+$/, '');
      if (/^[(a-z]/.test(name) || /^\s/.test(raw)) name = prev + ' ' + name;
      if (seen.has(name + '|' + h[3])) return;
      seen.add(name + '|' + h[3]);
      const k = issuer(name);
      by[k] = (by[k] || 0) + Number(h[3].replace(/,/g, ''));
    } else if (t && !/\d{3}/.test(t)) prev = t.replace(/[.*\s]+$/, '');
  });
  if (!date) throw new Error('report: no schedule of investments date');
  if (!net) throw new Error('report: no net assets for ' + date);
  const [m, , y] = date.toUpperCase().replace(',', '').split(' ');
  const q = MONTHS.indexOf(m) + 1;
  if (q % 3) throw new Error('report: ' + date + ' is not a quarter end');
  return { q: y + ' Q' + q / 3, v: topTen(Object.values(by).map(v => ({ v: v / net * 100 }))) };
}

function quarters(xmls, reports) {
  const at = {};
  (reports || []).forEach(x => { const r = reportQuarter(x); at[r.q] = r; });
  xmls.forEach(x => { const r = nportQuarter(x); at[r.q] = r; });
  return Object.values(at).sort((a, b) => (a.q < b.q ? -1 : 1));
}

function withKey(json, rows) {
  const line = '  ' + JSON.stringify(KEY) + ': ' + JSON.stringify(rows);
  const lines = json.trimEnd().split('\n'), at = lines.findIndex(l => l.startsWith('  ' + JSON.stringify(KEY) + ':'));
  if (at >= 0) lines[at] = line + (lines[at].endsWith(',') ? ',' : '');
  else { lines[lines.length - 2] += ','; lines.splice(lines.length - 1, 0, line); }
  return lines.join('\n') + '\n';
}

if (require.main === module) {
  const dirs = process.argv.slice(2);
  if (!dirs.length) { console.error('usage: node tools/import-nport.js <folder>... (SPY N-PORT primary_doc.xml files and SPY report .txt submissions)'); process.exit(1); }
  const read = ext => dirs.flatMap(d => fs.readdirSync(d).filter(f => new RegExp('^\\d{10}-\\d{2}-\\d{6}\\' + ext + '$').test(f)).map(f => fs.readFileSync(path.join(d, f), 'latin1')));
  const reports = read('.txt').filter(t => /CONFORMED SUBMISSION TYPE:\s*N-30D/.test(t));
  const rows = quarters(read('.xml'), reports);
  rows.forEach(r => console.log(r.q + '  ' + r.v + '%'));
  fs.writeFileSync(OUT, withKey(fs.readFileSync(OUT, 'utf8'), rows));
  console.log('wrote ' + rows.length + ' quarters to ' + path.relative(path.join(__dirname, '..'), OUT) + ' as ' + KEY);
} else {
  module.exports = { nportQuarter, reportQuarter, quarters, withKey };
}
