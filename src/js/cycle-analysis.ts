import { auxStat, facts } from "./format.ts";
import { moreRow } from "./dom.ts";
import { marketCycles, sp500AnnualReturns, TEMP_BAND_HI, TEMP_BAND_LO } from "./data.ts";
import { cycleModel, seasonGroup } from "./model.ts";
import type { CycleModel } from "./model.ts";

// ---- Cycle analysis: length, bull years against the bleed, the seasons and the temperature ----
type Temp = "hot" | "warm" | "cold";
type Stats = { c: Cycle; years: number; bull: number; bleed: number; seasons: Record<string, number>; temp: Record<Temp, number>; months: number };

var GROUPS = ["spring", "summer", "autumn", "winter"];
var GROUP_NAME: Record<string, string> = { spring:"Spring", summer:"Summer", autumn:"Autumn", winter:"Winter" };
var TEMPS: Temp[] = ["hot", "warm", "cold"];
var TEMP_NAME: Record<Temp, string> = { hot:"Hot", warm:"Warm", cold:"Cold" };
var NUM = ["no", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];

function cycleStats(m: CycleModel): Stats {
  var c = m.era, signs: boolean[] = [], seasons: Record<string, number> = {}, temp: Record<Temp, number> = { hot:0, warm:0, cold:0 };
  for (var y = c.from; y <= m.endYear; y++) if (sp500AnnualReturns[y] != null) signs.push(sp500AnnualReturns[y] >= 0);
  var bleed = 0;
  while (bleed < signs.length && !signs[signs.length - 1 - bleed]) bleed++;
  GROUPS.forEach(function(g){ seasons[g] = 0; });
  m.track.forEach(function(seg){ seasons[seasonGroup(seg.season)] += seg.to - seg.from; });
  m.cpi.forEach(function(d){ temp[d.v > TEMP_BAND_HI ? "hot" : d.v < TEMP_BAND_LO ? "cold" : "warm"]++; });
  return { c:c, years:m.elapsedYears, bull:signs.filter(Boolean).length, bleed:bleed, seasons:seasons, temp:temp, months:m.cpi.length };
}
var recordCache: Stats[] | null = null;
function record(){
  return recordCache || (recordCache = marketCycles.filter(function(c){ return !c.ongoing; }).map(function(c){ return cycleStats(cycleModel(c)); }));
}
function median(vs: number[]){
  var s = vs.slice().sort(function(a, b){ return a - b; }), n = s.length;
  return n ? (n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2) : 0;
}
function fmtYears(v: number){
  var q = Math.round(v * 4), whole = Math.floor(q / 4), frac = ["", "¼", "½", "¾"][q % 4];
  if (!q) return "none";
  return (whole || !frac ? String(whole) : "") + frac + (q === 4 ? " year" : q < 4 ? " year" : " years");
}
function share(part: number, whole: number){ return whole ? Math.round(100 * part / whole) : 0; }
function topTemp(s: Stats){ return TEMPS.slice().sort(function(a, b){ return s.temp[b] - s.temp[a]; })[0]; }
function topSeason(s: Stats){ return GROUPS.slice().sort(function(a, b){ return s.seasons[b] - s.seasons[a]; })[0]; }
function word(n: number){ return NUM[n] || String(n); }
function cap(t: string){ return t.charAt(0).toUpperCase() + t.slice(1); }

function sayLength(s: Stats, rec: Stats[]){
  var open = !!s.c.ongoing, others = rec.filter(function(r){ return r.c !== s.c; });
  var shorter = others.filter(function(r){ return r.years < s.years; }).length, longer = others.filter(function(r){ return r.years > s.years; }).length;
  var rank = shorter > longer ? "longer than " + shorter + " of the " + others.length + " closed cycles" :
    longer > shorter ? "shorter than " + longer + " of the " + others.length + " closed cycles" : "as long as the typical closed cycle";
  if (open) return "The " + s.c.name + " has run " + fmtYears(s.years) + " so far; the median closed cycle ran " + fmtYears(median(rec.map(function(r){ return r.years; }))) + ". ";
  return "The " + s.c.name + " ran " + fmtYears(s.years) + ", " + rank + ". ";
}
function sayMarket(s: Stats){
  var bull = cap(word(s.bull)) + " bull year" + (s.bull === 1 ? "" : "s");
  if (s.c.ongoing && !s.bleed) return bull + " and no bleed yet. ";
  return bull + (s.c.ongoing ? " and a bleed of " : " paid for a bleed of ") + word(s.bleed) + " year" + (s.bleed === 1 ? "" : "s") + ". ";
}
function sayClimate(s: Stats){
  var t = topTemp(s), p = share(s.temp[t], s.months), open = !!s.c.ongoing;
  return "Prices " + (open ? "have run " : "ran ") + (p >= 50 ? "mostly " : "most often ") + t + " (" + p + "% of its months), and " +
    GROUP_NAME[topSeason(s)] + (open ? " has held it longest." : " held it longest.");
}
function statRows(s: Stats, rec: Stats[]){
  var med = function(f: (r: Stats) => number){ return median(rec.map(f)); };
  var out = [
    auxStat({ label:"Length", value:fmtYears(s.years) + " · median " + fmtYears(med(function(r){ return r.years; })) }),
    auxStat({ label:"Bull years", value:s.bull + " · median " + med(function(r){ return r.bull; }) }),
    auxStat({ label:"Bleed", value:(s.bleed ? fmtYears(s.bleed) : s.c.ongoing ? "not yet" : "none") + " · median " + fmtYears(med(function(r){ return r.bleed; })) })
  ];
  var span = GROUPS.reduce(function(a, g){ return a + s.seasons[g]; }, 0);
  GROUPS.forEach(function(g){
    out.push(auxStat({ label:GROUP_NAME[g], value:fmtYears(s.seasons[g]) + (s.seasons[g] ? " · " + share(s.seasons[g], span) + "%" : "") }));
  });
  out.push(auxStat({ label:"Temperature", value:TEMPS.filter(function(t){ return s.temp[t]; }).map(function(t){ return TEMP_NAME[t] + " " + share(s.temp[t], s.months) + "%"; }).join(" · ") }));
  return out.join("");
}
function recordFacts(rec: Stats[]){
  var lens = rec.map(function(r){ return r.years; }), oneYear = rec.filter(function(r){ return r.bleed === 1; }).length;
  var spans = rec.map(function(r){ return GROUPS.reduce(function(a, g){ return a + r.seasons[g]; }, 0); });
  var seasonMed = GROUPS.map(function(g){ return Math.round(median(rec.map(function(r, i){ return 100 * r.seasons[g] / (spans[i] || 1); }))) + "% in " + GROUP_NAME[g]; });
  seasonMed[3] = "and " + seasonMed[3];
  var mostly = TEMPS.map(function(t){ return rec.filter(function(r){ return topTemp(r) === t; }).length + " " + t; });
  mostly[2] = "and " + mostly[2];
  return [
    "The " + rec.length + " closed cycles, from " + rec[0].c.from + " to " + rec[rec.length - 1].c.to + ", ran from " + fmtYears(Math.min.apply(null, lens)) + " to " + fmtYears(Math.max.apply(null, lens)) + "; the median is " + fmtYears(median(lens)) + ".",
    "The bleed lasted one year in " + oneYear + " of them; the median cycle had " + median(rec.map(function(r){ return r.bull; })) + " bull years before it.",
    "The median cycle spent " + seasonMed.join(", ") + ".",
    "Counted by the temperature most of their months had, the closed cycles ran " + mostly.join(", ") + "."
  ];
}
function statDetail(s: Stats, rec: Stats[]){
  return '<h4>How the analysis reads</h4>' + facts([
    "A cycle runs from its first bull year to its last bear year. Bull years are the calendar years the S&amp;P&nbsp;500’s total return closed up; the bleed is the run of bear years that closes the cycle." + (s.c.ongoing ? " The year in progress counts at its return so far." : ""),
    "The seasons are the Season Model’s, read each quarter (each year before 1949) and summed by season; the share is of the time the model has read.",
    "Temperature is each month’s CPI against the " + TEMP_BAND_LO + "–" + TEMP_BAND_HI + "% band: hot above it, warm inside it, cold below it.",
    "Each median is taken over the closed cycles, so it is the record’s middle, not a target. This is a description of the record, not a forecast."
  ]) + '<h4>Across the record</h4>' + facts(recordFacts(rec));
}
function bar(runs: { cls: string; n: number; what: string }[]){
  var live = runs.filter(function(r){ return r.n > 0; });
  return '<div class="strip" role="img" aria-label="' + live.map(function(r){ return r.what; }).join(", ") + '">' +
    live.map(function(r){ return '<span class="strip-run ' + r.cls + '" style="flex:' + r.n + ' 1 0" title="' + r.what + '"></span>'; }).join("") + '</div>';
}
function bars(s: Stats){
  return bar(GROUPS.map(function(g){ return { cls:g, n:s.seasons[g], what:GROUP_NAME[g] + " " + fmtYears(s.seasons[g]) }; })) +
    bar([{ cls:"mkt-up", n:s.bull, what:s.bull + " bull years" }, { cls:"mkt-down", n:s.bleed, what:s.bleed + " bear years" }]);
}
export function cycleAnalysisHtml(m: CycleModel){
  var s = cycleStats(m), rec = record();
  return '<div class="cat-analysis cat-mood"><div class="ca-name">Cycle analysis</div>' +
    '<p class="ca-say">' + sayLength(s, rec) + sayMarket(s) + sayClimate(s) + '</p>' +
    '<div class="era-bands">' + bars(s) + '</div>' +
    statRows(s, rec) + moreRow(statDetail(s, rec)) + '</div>';
}
