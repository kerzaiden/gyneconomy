#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { topTen } = require('./fetch-fred-history.js');

const OUT = path.join(__dirname, '..', 'src', 'data', 'series.json');
const KEY = 'topTenQuarterly';

function nportQuarter(xml) {
  const d = (xml.match(/<repPdDate>(\d{4})-(03|06|09|12)-\d{2}<\/repPdDate>/) || []);
  if (!d.length) throw new Error('N-PORT: no quarter-end <repPdDate>');
  const w = [...xml.matchAll(/<invstOrSec>[\s\S]*?<pctVal>(-?[\d.Ee+-]+)<\/pctVal>[\s\S]*?<\/invstOrSec>/g)].map(m => Number(m[1]));
  return { q: d[1] + ' Q' + Number(d[2]) / 3, v: topTen(w) };
}

function quarters(xmls) {
  const at = {};
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
  const dir = process.argv[2];
  if (!dir) { console.error('usage: node tools/import-nport.js <folder of SPY N-PORT primary_doc.xml files>'); process.exit(1); }
  const files = fs.readdirSync(dir).filter(f => /^\d{10}-\d{2}-\d{6}\.xml$/.test(f));
  const rows = quarters(files.map(f => fs.readFileSync(path.join(dir, f), 'utf8')));
  rows.forEach(r => console.log(r.q + '  ' + r.v + '%'));
  fs.writeFileSync(OUT, withKey(fs.readFileSync(OUT, 'utf8'), rows));
  console.log('wrote ' + rows.length + ' quarters to ' + path.relative(path.join(__dirname, '..'), OUT) + ' as ' + KEY);
} else {
  module.exports = { nportQuarter, quarters, withKey };
}
