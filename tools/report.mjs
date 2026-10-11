#!/usr/bin/env node
import fs from 'fs';

const ROOT = new URL('../', import.meta.url);
const json = p => JSON.parse(fs.readFileSync(new URL(p, ROOT), 'utf8'));
const MONTHS = 'January|February|March|April|May|June|July|August|September|October|November|December';
const DATES = [new RegExp('\\b\\d{1,2} (' + MONTHS + ')( \\d{4})?\\b', 'g'), new RegExp('\\b(' + MONTHS + ') \\d{4}\\b', 'g'), /\bQ[1-4] \d{4}\b/g, /\b(18|19|20)\d{2}s?\b/g, /S&P 500/g, /\b\d+-(year|month|week|day)\b/g];
const FORECAST = /\b(will|won['’]t|expect\w*|forecast\w*|predict\w*|outlook|likely|unlikely|going to|poised|bound to|next (week|month|quarter|year))\b/i;
const LIMITS = { headline: 80, lede: 420, story: 900, element: 620 };
const LINK = /\[([^\]]+)\]\(([^)]*)\)/g;

const MONTH_NAMES = MONTHS.split('|'), EVERY = { q: 'quarterly', qi: 'quarterly', m: 'monthly', y: 'yearly', yi: 'yearly' };
const dateWords = iso => { const d = iso.split('-').map(Number); return (d[2] ? d[2] + ' ' : '') + MONTH_NAMES[d[1] - 1] + ' ' + d[0]; };
const keyWords = k => { const m = /^(\d{4})-(\d{2})/.exec(k); return m ? MONTH_NAMES[+m[2] - 1] + ' ' + m[1] : /^\d{4} Q\d$/.test(k) ? k.slice(5) + ' ' + k.slice(0, 4) : k; };
const keyYear = k => +k.slice(0, 4);
function recordWords(s) {
  const most = s.up ? 'Highest' : 'Lowest', side = s.up ? 'high' : 'low';
  return !s.last ? most + ' on record, which starts in ' + keyWords(s.h[0].k)
    : (keyYear(s.last.k) <= keyYear(s.at.k) - 2 ? most + ' since ' + keyWords(s.last.k) + '; its' : 'Its') + ' ' + side + ' since ' + keyWords(s.h[0].k) + ' is ' + s.l.print(s.rec.v) + ', in ' + keyWords(s.rec.k);
}
function freshWords(s) {
  const side = s.up ? 'high' : 'low', every = EVERY[s.k] + ' reading', rec = s.l.print(s.rec.v) + ', in ' + keyWords(s.rec.k);
  return !s.last ? (s.up ? 'Above' : 'Below') + ' every ' + every + ' since ' + keyWords(s.h[0].k) + '; the ' + (s.up ? 'highest' : 'lowest') + ' was ' + rec
    : 'No ' + every + ' has been this ' + side + ' since ' + keyWords(s.last.k) + '; its ' + side + ' since ' + keyWords(s.h[0].k) + ' is ' + rec;
}
export function standing(R, c, i, l, M) {
  const end = c.ongoing ? Infinity : c.to, up = l.per[i] > l.norm.hi;
  const past = (a, b) => up ? a >= b : a <= b;
  const h = M.keyed(R.hist).filter(d => d.v != null && keyYear(d.k) <= end);
  const r = M.readingFor(R.id), v = M.todayValue(R), day = r.asOf ? r.asOf() : '', tail = h[h.length - 1];
  const fresh = c.ongoing && day && tail && l.print(v) !== l.print(tail.v) ? { k: day, v } : null;
  const mine = h.filter(d => keyYear(d.k) >= c.from);
  const at = fresh || (c.ongoing ? mine[mine.length - 1] : mine.reduce((a, d) => a && past(a.v, d.v) ? a : d, mine[0]));
  const prior = fresh ? h : at ? h.slice(0, h.indexOf(at)) : [];
  if (!at || prior.length < 12) return null;
  const beyond = prior.filter(d => past(d.v, at.v)), last = beyond[beyond.length - 1];
  const s = { h, at, last, rec: prior.reduce((a, d) => past(a.v, d.v) ? a : d), up, l, k: R.hist.k };
  return { R, v: l.print(at.v), when: fresh ? dateWords(at.k) : keyWords(at.k), words: fresh ? freshWords(s) : recordWords(s), record: !last };
}

export function numbersIn(t) {
  let s = String(t).replace(LINK, '$1');
  DATES.forEach(re => { s = s.replace(re, ' '); });
  return (s.match(/\d[\d,]*(?:\.\d+)?/g) || []).map(n => n.replace(/,/g, ''));
}
export function yearsIn(t) {
  return String(t).replace(LINK, '$1').replace(/S&P 500/g, ' ').match(/\b(18|19|20)\d{2}(?=s?\b)/g) || [];
}
const TIER = /\b(Normal|Attention|Risk)\b(?! Factors)/g;
const sentences = t => String(t).split(/(?<=[.!?])\s+/);
const phrases = w => String(w || '').split(' \u00b7 ').filter(p => p.includes(' '));
const said = (w, t) => new RegExp('\\b' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i').test(t);
function wordsSaid(name, t, F) {
  const bad = [], by = Object.fromEntries(F.readings.map(r => [r.id, r]));
  for (const st of sentences(t)) {
    const linked = [...st.matchAll(LINK)].map(m => by[m[2]]).filter(Boolean), bare = st.replace(LINK, ' ');
    const named = F.readings.filter(r => linked.includes(r) || said(r.name, bare));
    for (const m of bare.matchAll(TIER)) if (!named.some(r => r.tier === m[1])) bad.push(name + ' says ' + m[1] + ' beside ' + (named.map(r => r.name + ' (' + r.tier + ')').join(', ') || 'no reading'));
    const words = [...new Set(F.readings.flatMap(r => phrases(r.word)))].filter(w => said(w, bare));
    for (const w of words) if (!named.some(r => phrases(r.word).includes(w))) bad.push(name + ' says ' + w.toLowerCase() + ', the word of ' + F.readings.filter(r => phrases(r.word).includes(w)).map(r => r.name).join(' and ') + ', in a sentence that names none of them');
  }
  return bad;
}
function unlinked(doc, F) {
  return F.readings.filter(r => r.tier !== 'Normal' && typeof (doc.elements || {})[r.element] === 'string' && ![...doc.elements[r.element].matchAll(LINK)].some(m => m[2] === r.id))
    .map(r => 'element ' + r.element + ' never links ' + r.name + ', which reads ' + r.tier);
}
function texts(doc) { return [['headline', doc.headline], ['lede', doc.lede], ['story', doc.story]].concat(Object.entries(doc.elements || {}).map(([k, v]) => ['element ' + k, v])); }

export function check(doc, F) {
  const bad = [];
  if (!doc || typeof doc !== 'object') return ['not a document'];
  if (doc.kind !== 'object') bad.push('kind must be "object"');
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(doc.asOf))) bad.push('asOf must be a day, YYYY-MM-DD');
  const keys = Object.keys(doc.elements || {}).sort().join(), want = F.categories.slice().sort().join();
  if (keys !== want) bad.push('elements must be exactly ' + want + ', got ' + keys);
  texts(doc).forEach(([name, t]) => {
    if (typeof t !== 'string' || !t.trim()) { bad.push(name + ' is empty'); return; }
    const cap = LIMITS[name.split(' ')[0]];
    if (t.length > cap) bad.push(name + ' runs ' + t.length + ' characters, over ' + cap);
    if (/[<>"]/.test(t)) bad.push(name + ' carries < > or a straight double quote');
    const f = FORECAST.exec(t.replace(LINK, '$1'));
    if (f) bad.push(name + ' forecasts: "' + f[0] + '"');
    for (const m of t.matchAll(LINK)) if (!F.ids.includes(m[2])) bad.push(name + ' links to ' + m[2] + ', which is no reading');
    if (F.numbers) numbersIn(t).forEach(n => { if (!F.numbers.includes(n)) bad.push(name + ' says ' + n + ', which no figure in the app shows'); });
    if (F.years) yearsIn(t).forEach(y => { if (!F.years.includes(y)) bad.push(name + ' says ' + y + ', which is no year the facts hold'); });
    if (F.readings) bad.push(...wordsSaid(name, t, F));
  });
  return F.readings ? bad.concat(unlinked(doc, F)) : bad;
}

function yearsOf(R, M) {
  const h = R.hist ? M.keyed(R.hist).filter(d => d.v != null) : [], prior = h.slice(0, -1);
  if (!h.length) return [];
  let v = h[h.length - 1].v;
  try { v = M.todayValue(R); } catch (e) {}
  const most = up => h.reduce((a, d) => (up ? d.v > a.v : d.v < a.v) ? d : a);
  const since = up => prior.filter(d => up ? d.v >= v : d.v <= v).pop();
  return [h[0], h[h.length - 1], most(true), most(false), since(true), since(false)].filter(Boolean).map(d => String(keyYear(d.k)));
}

export async function facts() {
  const live = json('data/live.json'); delete live._meta;
  if (fs.existsSync(new URL('data/report.json', ROOT))) live.weatherReport = json('data/report.json');
  globalThis.gynCache = live;
  await import('../test/unit/dom.mjs');
  return readFacts();
}

export async function readFacts() {
  const { ROSTER, categoriesShown } = await import('../src/js/roster.ts');
  const { todayFace, readingFor } = await import('../src/js/reading.ts');
  const { labs, riskLabs } = await import('../src/js/cycle-analysis.ts');
  const { marketCycles, now } = await import('../src/js/data.ts');
  const { nowModel } = await import('../src/js/model.ts');
  const { keyed, ROSTER_BY } = await import('../src/js/roster.ts');
  const { todayValue } = await import('../src/js/era.ts');
  const i = marketCycles.indexOf(nowModel.era), tierOf = {};
  riskLabs(i, 'borderline').forEach(l => { tierOf[l.id] = 'Attention'; });
  riskLabs(i, 'abnormal').forEach(l => { tierOf[l.id] = 'Risk'; });
  const readings = ROSTER.map(R => {
    const f = todayFace(R), r = readingFor(R.id);
    return { id: R.id, name: R.name, element: R.cat, figure: f.text, word: f.word, tier: tierOf[R.id] || 'Normal', asOf: r.asOf ? r.asOf() : '' };
  });
  const risks = riskLabs(i).map(l => standing(ROSTER_BY[l.id], marketCycles[i], i, labs().find(x => x.id === l.id), { keyed, readingFor, todayValue }))
    .filter(Boolean).sort((a, b) => Number(b.record) - Number(a.record)).map(x => [x.R.name + ' ' + x.when, x.v, x.words + '.'].join(' \u00b7 '));
  const fed = now.fedFunds, season = nowModel.reading;
  const shown = readings.map(r => r.figure).concat(risks, [fed.lo, fed.hi, fed.lastMove].map(String), [fed.lo.toFixed(2), fed.hi.toFixed(2)]);
  const { calendarTodayY } = await import('../src/js/refresh-season.ts');
  const years = ROSTER.flatMap(R => yearsOf(R, { keyed, todayValue })).concat(String(nowModel.era.from), yearsIn(nowModel.era.blurb + ' ' + nowModel.era.rates),
    [calendarTodayY, fed.turnValue].map(String), [fed.asOf, fed.next, now.report.asOf, ...risks, ...readings.map(r => r.asOf)].flatMap(t => String(t || '').match(/\b(18|19|20)\d{2}\b/g) || []));
  return {
    cycle: nowModel.era.name, season: season.season, regime: season.regime, prices: season.heading,
    fed: { range: fed.lo.toFixed(2) + '–' + fed.hi.toFixed(2) + '%', lastMove: fed.lastMoveLabel, on: fed.asOf, next: fed.next },
    categories: categoriesShown().map(c => c.key), ids: ROSTER.map(R => R.id), readings, risks,
    attention: readings.filter(r => r.tier === 'Attention').map(r => r.name),
    numbers: [...new Set(shown.flatMap(numbersIn))],
    years: [...new Set(years)].sort(),
    lastEdition: { asOf: now.report.asOf, headline: now.report.headline }
  };
}

async function main() {
  const [cmd, file] = process.argv.slice(2);
  if (cmd === 'facts') { const F = await facts(); process.stdout.write(JSON.stringify(F, null, 2) + '\n'); process.exit(0); }
  if (cmd === 'check' && file) {
    const F = await facts(), bad = check(JSON.parse(fs.readFileSync(file, 'utf8')), F);
    bad.forEach(b => console.log('FAIL ' + b));
    console.log(bad.length ? bad.length + ' problem(s)' : 'ok: the edition reads only the app’s own figures and forecasts nothing');
    process.exit(bad.length ? 1 : 0);
  }
  console.log('usage: node tools/report.mjs facts | check <edition.json>');
  process.exit(2);
}
if (import.meta.url === new URL(process.argv[1], 'file://' + process.cwd() + '/').href) main();
