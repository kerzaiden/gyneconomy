import { byIdMaybe, learnMore, moreDoor, need, put, trendBox, trendDoor, trendHead, trendText } from "./dom.ts";
import { dxHead, dxSys, metricSheet, sheetRenderers } from "./render-core.ts";
import { bookSvg, diceSvg, weatherSvg } from "./marks.ts";
import { marketCycles, now } from "./data.ts";
import { cycLabel, cycleByName, openCycle } from "./model.ts";
import type { CycleModel } from "./model.ts";
import { categoriesShown, keyed, ROSTER_BY } from "./roster.ts";
import { CAT_MARK, IND, labs, riskLabs } from "./cycle-analysis.ts";
import type { Lab } from "./cycle-analysis.ts";
import { todayValue } from "./era.ts";
import { readingFor } from "./reading.ts";

// ---- The Weather Report: today's edition on the open cycle; a closed cycle's story and its risk factors against their own record ----
export var REPORT_ID = "sheet-report";
var MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var EVERY: Record<string, string> = { q:"quarterly", qi:"quarterly", m:"monthly", y:"yearly", yi:"yearly" };
var shown = { cycle:"" };
type Pt = { k: string; v: number };
type Stand = { h: Pt[]; at: Pt; last?: Pt; rec: Pt; up: boolean; l: Lab; k: string };
function labOf(id: string){ return labs().filter(function(l){ return l.id === id; })[0]; }
function dateWords(iso: string){ var d = iso.split("-").map(Number); return (d[2] ? d[2] + " " : "") + MONTH_NAMES[d[1] - 1] + " " + d[0]; }
function keyWords(k: string){ var m = /^(\d{4})-(\d{2})/.exec(k); return m ? MONTH_NAMES[+m[2] - 1] + " " + m[1] : /^\d{4} Q\d$/.test(k) ? k.slice(5) + " " + k.slice(0, 4) : k; }
function keyYear(k: string){ return +k.slice(0, 4); }
function freshAt(R: RosterRow, l: Lab, h: Pt[]): Pt | null {
  var r = readingFor(R.id), last = h[h.length - 1], v = todayValue(R), day = r.asOf ? r.asOf() : "";
  return day && last && l.print(v) !== l.print(last.v) ? { k:day, v:v } : null;
}
function recordWords(s: Stand){
  var most = s.up ? "Highest" : "Lowest", side = s.up ? "high" : "low";
  return !s.last ? most + " on record, which starts in " + keyWords(s.h[0].k)
    : (keyYear(s.last.k) <= keyYear(s.at.k) - 2 ? most + " since " + keyWords(s.last.k) + "; its" : "Its") + " " + side + " since " + keyWords(s.h[0].k) + " is " + s.l.print(s.rec.v) + ", in " + keyWords(s.rec.k);
}
function freshWords(s: Stand){
  var side = s.up ? "high" : "low", every = EVERY[s.k] + " reading", rec = s.l.print(s.rec.v) + ", in " + keyWords(s.rec.k);
  return !s.last ? (s.up ? "Above" : "Below") + " every " + every + " since " + keyWords(s.h[0].k) + "; the " + (s.up ? "highest" : "lowest") + " was " + rec
    : "No " + every + " has been this " + side + " since " + keyWords(s.last.k) + "; its " + side + " since " + keyWords(s.h[0].k) + " is " + rec;
}
function standing(R: RosterRow, i: number){
  var c = marketCycles[i], l = labOf(R.id), end = c.ongoing ? Infinity : c.to, up = (l.per[i] as number) > (l.norm as { hi: number }).hi;
  var past = function(a: number, b: number){ return up ? a >= b : a <= b; };
  var h = keyed(R.hist).filter(function(d){ return d.v != null && keyYear(d.k) <= end; }) as Pt[];
  var mine = h.filter(function(d){ return keyYear(d.k) >= c.from; }), fresh = c.ongoing ? freshAt(R, l, h) : null;
  var at = fresh || (c.ongoing ? mine[mine.length - 1] : mine.reduce(function(a, d){ return a && past(a.v, d.v) ? a : d; }, mine[0]));
  var prior = fresh ? h : at ? h.slice(0, h.indexOf(at)) : [];
  if (!at || prior.length < 12) return null;
  var beyond = prior.filter(function(d){ return past(d.v, at.v); }), last = beyond[beyond.length - 1];
  var s: Stand = { h:h, at:at, last:last, rec:prior.reduce(function(a, d){ return past(a.v, d.v) ? a : d; }), up:up, l:l, k:R.hist.k };
  return { R:R, v:l.print(at.v), when:fresh ? dateWords(at.k) : keyWords(at.k), words:fresh ? freshWords(s) : recordWords(s), record:!last, to:up ? "to-up" : "to-down" };
}
function riskDoor(t: string, c: Cycle){ return ' data-open="' + IND + '" data-title="Elements" data-ind-cat="" data-ind-tier="' + t + '" data-ind-cycle="' + c.name + '"'; }
function riskRows(i: number, t: string){
  return riskLabs(i, t).map(function(l){ return ROSTER_BY[l.id]; }).filter(Boolean).map(function(R){ return standing(R, i); })
    .filter(function(x): x is NonNullable<ReturnType<typeof standing>> { return x != null; }).sort(function(a, b){ return Number(b.record) - Number(a.record); })
    .map(function(x){
      return '<button type="button" class="ai-rank ' + x.to + ' t-' + t + '"' + riskDoor(t, marketCycles[i]) + '><span>' + x.R.name + ' <small class="ai-when">' + x.when + '</small></span><b>' + x.v + '<i class="lab-to" aria-hidden="true"></i></b><small>' + x.words + '.</small></button>';
    }).join("");
}
function riskFactors(c: Cycle){
  var i = marketCycles.indexOf(c), rows = riskRows(i, "abnormal"), n = riskLabs(i, "borderline").length;
  return dxSys("", dxHead(diceSvg(), "Risk Factors", riskDoor("abnormal", c)) + '<div class="ai-pic">' +
    (rows || '<small class="ai-cap">Nothing reads as Risk ' + (c.ongoing ? "today" : "in this cycle") + '.</small>') +
    (n ? moreDoor(riskDoor("borderline", c), n + (n > 1 ? " readings need" : " reading needs") + " attention") : "") + '</div>');
}
function plain(t: string){ return t.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1"); }
function prose(t: string){
  return t.replace(/\[([^\]]+)\]\((sheet-[a-z0-9-]+)\)/g, function(_, label: string, id: string){
    var R = ROSTER_BY[id];
    return R ? '<button type="button" class="wr-link" data-open="' + id + '" data-title="' + R.name + '">' + label + '</button>' : label;
  });
}
function edition(){ return dateWords(now.report.asOf); }
function shortDate(iso: string){ var d = iso.split("-").map(Number); return MONTH_NAMES[d[1] - 1].slice(0, 3) + " " + d[2] + (d[0] === new Date().getFullYear() ? "" : ", " + d[0]); }
export function reportCard(m: CycleModel){
  var r = now.report, open = !!m.ongoing;
  return trendDoor(REPORT_ID, "Weather Report", weatherSvg(), "Weather Report",
    '<span class="wr-head">' + (open ? r.headline : m.era.name) + '</span><span class="wr-by">' + (open ? shortDate(r.asOf) : cycLabel(m.era).years) + '</span>' +
    trendText(plain(open ? r.lede : m.era.blurb), "ai-clamp") + learnMore(undefined, "Read the report"), ' data-report-cycle="' + m.era.name + '"');
}
function elements(){
  return dxSys(" wr-els", categoriesShown().map(function(c){
    var t = now.report.elements[c.key];
    return t ? '<div class="wr-el">' + trendHead(CAT_MARK[c.key](), c.title, "") + trendText(prose(t)) + '</div>' : "";
  }).join(""));
}
function reportHtml(c: Cycle){
  var r = now.report, story = trendBox(bookSvg(), "Cycle Story", trendText(c.ongoing ? r.story : c.blurb));
  var head = '<h2 class="wr-title">' + (c.ongoing ? r.headline : c.name) + '</h2><p class="wr-date">' + (c.ongoing ? c.name + " \u00b7 " + edition() : cycLabel(c).years) + '</p>';
  return c.ongoing ? dxSys(" wr-top", head + trendText(r.lede)) + riskFactors(c) + story + elements() : dxSys(" wr-top", head) + riskFactors(c) + story;
}
function drawReport(){ put(REPORT_ID + "-body", reportHtml(cycleByName(shown.cycle) || openCycle())); }
export function redrawReport(){ var s = byIdMaybe(REPORT_ID); if (s && !s.hidden) drawReport(); }
export function mountReport(){
  var sheet = metricSheet(REPORT_ID);
  sheet.innerHTML = '<div class="wr-page" id="' + REPORT_ID + '-body"></div>';
  need("panel-cycle").appendChild(sheet);
  sheetRenderers[REPORT_ID] = drawReport;
  document.addEventListener("click", function(e){
    var b = (e.target as Element).closest && (e.target as Element).closest("[data-report-cycle]");
    if (b) shown.cycle = b.getAttribute("data-report-cycle") || "";
  }, true);
}
