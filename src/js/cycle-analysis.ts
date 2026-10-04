import { auxStat, facts, srcBlock } from "./format.ts";
import { moreRow } from "./dom.ts";
import { marketCycles, sp500AnnualReturns } from "./data.ts";
import { cycleModel } from "./model.ts";
import { categoriesShown, keyed, ROSTER } from "./roster.ts";
import type { CycleModel } from "./model.ts";

// ---- Her chart: every reading, cycle by cycle, against her own normal ranges ----
type Norm = { lo: number; hi: number; fence: number; floor: number };
type Lab = { id: string; name: string; cat: string; unit: string; per: (number | null)[]; norm: Norm | null };
type Visit = { years: number; bull: number; bleed: number };

var JUDGED_FROM = 8;
var NUM = ["no", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
var FENCE_SRC: Src = { t:"NIST/SEMATECH e-Handbook of Statistical Methods — What are outliers in the data? (Tukey’s fences)", u:"https://www.itl.nist.gov/div898/handbook/prc/section1/prc16.htm" };

function quartile(vs: number[], p: number){
  var s = vs.slice().sort(function(a, b){ return a - b; }), i = (s.length - 1) * p, lo = Math.floor(i);
  return s[lo] + (s[Math.ceil(i)] - s[lo]) * (i - lo);
}
function normOf(vs: number[]): Norm | null {
  if (vs.length < JUDGED_FROM) return null;
  var lo = quartile(vs, 0.25), hi = quartile(vs, 0.75);
  return { lo:lo, hi:hi, fence:hi + 1.5 * (hi - lo), floor:lo - 1.5 * (hi - lo) };
}
function closedCount(){ return marketCycles.filter(function(c){ return !c.ongoing; }).length; }
function visitOf(m: CycleModel): Visit {
  var c = m.era, signs: boolean[] = [], bleed = 0;
  for (var y = c.from; y <= m.endYear; y++) if (sp500AnnualReturns[y] != null) signs.push(sp500AnnualReturns[y] >= 0);
  while (bleed < signs.length && !signs[signs.length - 1 - bleed]) bleed++;
  return { years:m.elapsedYears, bull:signs.filter(Boolean).length, bleed:bleed };
}
var visitCache: Visit[] | null = null;
function visits(){ return visitCache || (visitCache = marketCycles.map(function(c){ return visitOf(cycleModel(c)); })); }
function cycleLab(id: string, name: string, f: (v: Visit) => number): Lab {
  var per = visits().map(f);
  return { id:id, name:name, cat:"cycle", unit:" yr", per:per, norm:normOf(per.slice(0, closedCount())) };
}
function readingLab(R: RosterRow): Lab {
  var h = keyed(R.hist).filter(function(d){ return d.v != null; }), first = +h[0].k.slice(0, 4);
  var per = marketCycles.map(function(c){
    if (first > c.from) return null;
    var vs = h.filter(function(d){ var y = +d.k.slice(0, 4); return y >= c.from && (c.ongoing || y <= c.to); }).map(function(d){ return d.v as number; });
    return vs.length ? vs.reduce(function(a, b){ return a + b; }, 0) / vs.length : null;
  });
  var unit = /velocity|index|CAPE/.test(R.cardUnit || "") ? "" : "%";
  return { id:R.id, name:R.name, cat:R.cat, unit:unit, per:per, norm:normOf(per.slice(0, closedCount()).filter(function(v): v is number { return v != null; })) };
}
var labCache: Lab[] | null = null;
function labs(){
  return labCache || (labCache = [
    cycleLab("length", "Length", function(v){ return v.years; }),
    cycleLab("bull", "Bull years", function(v){ return v.bull; }),
    cycleLab("bleed", "Bleed", function(v){ return v.bleed; })
  ].concat(ROSTER.map(readingLab)));
}
function state(l: Lab, i: number){
  var v = l.per[i], n = l.norm;
  if (v == null || !n || l.cat === "cycle" && marketCycles[i].ongoing) return "";
  return v > n.fence ? "high" : v < n.floor ? "low" : v > n.hi ? "up" : v < n.lo ? "down" : "";
}
function yearsWord(v: number){ var q = Math.round(v * 4); return (Math.floor(q / 4) || q % 4 === 0 ? String(Math.floor(q / 4)) : "") + ["", "¼", "½", "¾"][q % 4]; }
function fmt(l: Lab, v: number){
  var a = Math.abs(v), dp = a >= 100 ? 0 : !l.unit && a < 3 ? 2 : 1;
  return l.cat === "cycle" ? yearsWord(v) + l.unit : (v < 0 ? "−" : "") + a.toFixed(dp) + l.unit;
}
function flagWord(st: string){ return st === "high" ? " High" : st === "low" ? " Low" : st === "up" ? " ↑" : st === "down" ? " ↓" : ""; }

function labRows(i: number, cat: string){
  return labs().filter(function(l){ return l.cat === cat && l.per[i] != null; }).map(function(l){
    var st = state(l, i), n = l.norm, v = l.per[i] as number;
    var range = !n ? '<small>record too short</small>' : '<small>normal ' + fmt(l, n.lo) + (fmt(l, n.hi) === fmt(l, n.lo) ? "" : '–' + fmt(l, n.hi)) + '</small>';
    return auxStat({ label:l.name, value:'<span class="lab-v' + (st === "high" || st === "low" ? " flag" : "") + '">' + fmt(l, v) + flagWord(st) + '</span> ' + range });
  }).join("");
}
function report(i: number){
  var groups = [{ key:"cycle", title:"Cycle" }].concat(categoriesShown());
  return groups.map(function(g){
    var rows = labRows(i, g.key);
    return rows ? '<div class="lab-group">' + g.title + '</div>' + rows : "";
  }).join("");
}
function outside(i: number){ return labs().filter(function(l){ var st = state(l, i); return st === "high" || st === "low"; }); }
function listWords(xs: string[]){ return xs.length > 1 ? xs.slice(0, -1).join(", ") + " and " + xs[xs.length - 1] : xs[0] || ""; }
function word(n: number){ return NUM[n] || String(n); }
function cap(t: string){ return t.charAt(0).toUpperCase() + t.slice(1); }

function visitNote(i: number){
  var c = marketCycles[i], v = visits()[i], open = !!c.ongoing, len = labs()[0], n = len.norm as Norm;
  var head = "The " + c.name + (open ? " is " + yearsWord(v.years) + " years old: " : " ran " + yearsWord(v.years) + " years: ") + word(v.bull) + " bull year" + (v.bull === 1 ? "" : "s") +
    (v.bleed ? " and a bleed of " + word(v.bleed) : open ? ", no bleed yet" : "") + ". Her normal cycle runs " + yearsWord(n.lo) + " to " + yearsWord(n.hi) + " years. ";
  var named = function(st: string){ return outside(i).filter(function(l){ return state(l, i) === st; }).map(function(l){ return l.name.toLowerCase(); }); };
  var high = named("high"), low = named("low");
  var parts = (high.length ? [listWords(high) + " ran far above her normal"] : []).concat(low.length ? [listWords(low) + " far below it"] : []);
  return head + (parts.length ? cap(parts.join("; ")) + "." : "Nothing ran far outside her normal" + (open ? " so far." : "."));
}
function historyTable(viewed: number){
  var cats = [{ key:"cycle", title:"Cycle" }].concat(categoriesShown());
  return '<table class="sc-grid"><thead><tr><th></th>' + cats.map(function(c){ return '<th>' + c.title + '</th>'; }).join("") + '</tr></thead><tbody>' +
    marketCycles.map(function(c, i){
      var flagged = outside(i);
      return '<tr' + (i === viewed ? ' class="now"' : '') + '><th>' + c.name.replace(/ Cycle$/, "") + ' <small>' + c.from + '</small></th>' +
        cats.map(function(k){ var n = flagged.filter(function(l){ return l.cat === k.key; }).length; return '<td class="sc-cell' + (n ? " flag" : "") + '">' + (n || "·") + '</td>'; }).join("") + '</tr>';
    }).join("") + '</tbody></table>';
}
function chartDetail(){
  var judged = labs().filter(function(l){ return l.norm; }).length;
  return '<h4>How the chart reads</h4>' + facts([
    "Each reading is averaged over the cycle’s years, from its first bull year to its last bear year, to date for the cycle in progress. Bull years are the calendar years the S&amp;P&nbsp;500’s total return closed up; the bleed is the run of bear years that closes the cycle.",
    "Her normal range for a reading is the middle half of her closed cycles. An arrow marks a cycle outside that middle half; High or Low marks one past Tukey’s fence, one and a half times the middle span beyond it, the standard rule for an outlier.",
    "A reading is judged only when its record covers at least " + JUDGED_FROM + " closed cycles, every cycle since 1970 (Claude’s call); " + judged + " of " + labs().length + " do. The others show their value with no range.",
    "The table counts, for every cycle, the readings in each category that ran past the fence. The chart describes her history, not what comes next."
  ]) + srcBlock([FENCE_SRC]);
}
export function cycleAnalysisHtml(m: CycleModel){
  var i = marketCycles.indexOf(m.era);
  if (i < 0) return "";
  return '<div class="cat-analysis cat-mood"><div class="ca-name">Her chart</div>' +
    '<p class="ca-say">' + visitNote(i) + '</p>' + report(i) + historyTable(i) + moreRow(chartDetail()) + '</div>';
}
