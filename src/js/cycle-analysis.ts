import { auxStat, facts, srcBlock } from "./format.ts";
import { moreRow } from "./dom.ts";
import { marketCycles, sp500AnnualReturns, TEMP_BAND_HI } from "./data.ts";
import { cycleModel } from "./model.ts";
import type { CycleModel } from "./model.ts";

// ---- Her chart: every cycle's length, bull years, bleed and temperature, against her own normal ranges ----
type Chart = { c: Cycle; years: number; bull: number; bleed: number; hot: number; cpi: number };
type Norm = { lo: number; hi: number; fence: number; floor: number };
type Norms = { years: Norm; bleed: Norm; cpi: Norm };

var NUM = ["no", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
var FENCE_SRC: Src = { t:"NIST/SEMATECH e-Handbook of Statistical Methods — What are outliers in the data? (Tukey’s fences)", u:"https://www.itl.nist.gov/div898/handbook/prc/section1/prc16.htm" };

function chartOf(m: CycleModel): Chart {
  var c = m.era, signs: boolean[] = [], bleed = 0;
  for (var y = c.from; y <= m.endYear; y++) if (sp500AnnualReturns[y] != null) signs.push(sp500AnnualReturns[y] >= 0);
  while (bleed < signs.length && !signs[signs.length - 1 - bleed]) bleed++;
  var n = m.cpi.length || 1;
  return { c:c, years:m.elapsedYears, bull:signs.filter(Boolean).length, bleed:bleed,
    hot:m.cpi.filter(function(d){ return d.v > TEMP_BAND_HI; }).length / n, cpi:m.cpi.reduce(function(a, d){ return a + d.v; }, 0) / n };
}
var chartCache: Chart[] | null = null;
function charts(){ return chartCache || (chartCache = marketCycles.map(function(c){ return chartOf(cycleModel(c)); })); }
function quartile(vs: number[], p: number){
  var s = vs.slice().sort(function(a, b){ return a - b; }), i = (s.length - 1) * p, lo = Math.floor(i);
  return s[lo] + (s[Math.ceil(i)] - s[lo]) * (i - lo);
}
function normOf(vs: number[]): Norm {
  var lo = quartile(vs, 0.25), hi = quartile(vs, 0.75);
  return { lo:lo, hi:hi, fence:hi + 1.5 * (hi - lo), floor:lo - 1.5 * (hi - lo) };
}
function norms(): Norms {
  var closed = charts().filter(function(r){ return !r.c.ongoing; });
  var of = function(f: (r: Chart) => number){ return normOf(closed.map(f)); };
  return { years:of(function(r){ return r.years; }), bleed:of(function(r){ return r.bleed; }),
    cpi:of(function(r){ return r.cpi; }) };
}
function flags(r: Chart, n: Norms){
  var out: string[] = [];
  if (r.years > n.years.fence) out.push("Long");
  if (r.bleed > n.bleed.fence) out.push("Heavy bleed");
  if (r.cpi > n.cpi.fence) out.push("Fever");
  if (r.cpi < n.cpi.floor) out.push("Chill");
  return out;
}
function fmtYears(v: number){
  var q = Math.round(v * 4), whole = Math.floor(q / 4), frac = ["", "¼", "½", "¾"][q % 4];
  return q ? (whole || !frac ? String(whole) : "") + frac : "0";
}
function pc(v: number){ return Math.round(v * 100) + "%"; }
function word(n: number){ return NUM[n] || String(n); }
function shortName(c: Cycle){ return c.name.replace(/ Cycle$/, ""); }

function visitNote(r: Chart, n: Norms){
  var f = flags(r, n), open = !!r.c.ongoing;
  var age = open ? "The " + r.c.name + " is " + fmtYears(r.years) + " years old: " : "The " + r.c.name + " ran " + fmtYears(r.years) + " years: ";
  var bleed = r.bleed ? (open ? "a bleed of " : "and a bleed of ") + word(r.bleed) + " year" + (r.bleed === 1 ? "" : "s") : open ? "no bleed yet" : "no bleed";
  var body = age + word(r.bull) + " bull year" + (r.bull === 1 ? "" : "s") + (open && !r.bleed ? ", " : " ") + bleed + ", hot in " + pc(r.hot) + " of its months. ";
  var normal = "Her normal cycle runs " + fmtYears(n.years.lo) + " to " + fmtYears(n.years.hi) + " years; past " + fmtYears(n.years.fence) + " is long for her. ";
  var verdict = f.length ? "Outside her normal: " + f.join(", ").toLowerCase() + "." : open ? "Nothing outside her normal so far." : "Nothing outside her normal.";
  return body + normal + verdict;
}
function chartTable(viewed: Cycle, n: Norms){
  var cell = function(v: string, flag: boolean){ return '<td class="sc-cell' + (flag ? " flag" : "") + '">' + v + '</td>'; };
  return '<table class="sc-grid"><thead><tr><th></th><th>Length</th><th>Bull</th><th>Bleed</th><th>CPI</th></tr></thead><tbody>' +
    charts().map(function(r){
      return '<tr' + (r.c === viewed ? ' class="now"' : '') + '><th>' + shortName(r.c) + ' <small>' + r.c.from + '</small></th>' +
        cell(fmtYears(r.years) + (r.c.ongoing ? "+" : ""), r.years > n.years.fence) + cell(String(r.bull), false) +
        cell(r.c.ongoing && !r.bleed ? "–" : String(r.bleed), r.bleed > n.bleed.fence) + cell(r.cpi.toFixed(1).replace("-", "−") + "%", r.cpi > n.cpi.fence || r.cpi < n.cpi.floor) + '</tr>';
    }).join("") + '</tbody></table>';
}
function normRows(n: Norms){
  return [
    auxStat({ label:"Normal length", value:fmtYears(n.years.lo) + "–" + fmtYears(n.years.hi) + " years · long past " + fmtYears(n.years.fence) }),
    auxStat({ label:"Normal bleed", value:fmtYears(n.bleed.hi) + " year · heavy past " + fmtYears(n.bleed.fence) }),
    auxStat({ label:"Normal inflation", value:n.cpi.lo.toFixed(1) + "–" + n.cpi.hi.toFixed(1) + "% · fever past " + n.cpi.fence.toFixed(1) + "%" })
  ].join("");
}
function chartDetail(n: Norms){
  var closed = charts().filter(function(r){ return !r.c.ongoing; });
  var era = function(f: (r: Chart) => boolean){ var z = closed.filter(f).map(function(r){ return r.years; }); return { n:z.length, mean:z.reduce(function(a, b){ return a + b; }, 0) / z.length }; };
  var early = era(function(r){ return r.c.from < 1982; }), late = era(function(r){ return r.c.from >= 1982; });
  return '<h4>How the chart reads</h4>' + facts([
    "Each row is one cycle, from its first bull year to its last bear year. Bull years are the calendar years the S&amp;P&nbsp;500’s total return closed up; the bleed is the run of bear years that closes the cycle. CPI is her average inflation over the cycle’s months; hot in the visit note is the share of months above " + TEMP_BAND_HI + "%. The year in progress counts at its return so far.",
    "Her normal ranges are her own: the middle half of her " + closed.length + " closed cycles. A cycle is flagged when it falls past Tukey’s fence, one and a half times that middle span beyond it, the standard rule for an outlier: long, a heavy bleed, a fever above her normal inflation, or a chill below it.",
    "Her " + early.n + " cycles before 1982 averaged " + fmtYears(early.mean) + " years; her " + late.n + " since have averaged " + fmtYears(late.mean) + ".",
    "The chart describes her history, not what comes next."
  ]) + srcBlock([FENCE_SRC]);
}
export function cycleAnalysisHtml(m: CycleModel){
  var n = norms(), r = charts().filter(function(x){ return x.c === m.era; })[0] || chartOf(m);
  return '<div class="cat-analysis cat-mood"><div class="ca-name">Her chart</div>' +
    '<p class="ca-say">' + visitNote(r, n) + '</p>' + normRows(n) + chartTable(m.era, n) + moreRow(chartDetail(n)) + '</div>';
}
