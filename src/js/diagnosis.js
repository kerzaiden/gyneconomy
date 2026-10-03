import { CHEV, seasonName } from "./format.js";
import { addSources, byId } from "./dom.js";
import { GYN } from "./live.js";
import { bookSvg, stethoscopeSvg } from "./marks.js";
import { calendarTodayY } from "./refresh-season.js";
import { diagnoseToday, marketMonths, nowModel, seasonGroup, yearAfter } from "./model.js";
import { CATEGORIES, categoriesShown } from "./roster.js";
import { pairAt, pastFigure, prettyK, readDoor, rosterRows } from "./era.js";

var DIAG_SRC = [
  {t:"Cboe via FRED \u2014 CBOE Volatility Index, daily closes since 1990 (VIXCLS), and the VXO for 1986\u20131989 (VXOCLS)", u:"https://fred.stlouisfed.org/series/VIXCLS"},
  {t:"Robert Shiller \u2014 U.S. stock market data: the S&P 500\u2019s monthly average and the CAPE ratio", u:"https://shillerdata.com/"}
];
function pct(v){ return (v >= 0 ? "+" : "\u2212") + Math.abs(v * 100).toFixed(0) + "%"; }
function eraEnds(id, era){
  var r = rosterRows()[id]; if (!r) return null;
  var span = r.seen.filter(function(d){ var y = +d.k.slice(0, 4); return y >= era.from && y <= era.to; });
  if (span.length < 2) return null;
  var a = span[0], b = span[span.length - 1];
  return { r:r, from:prettyK(r, a.k), to:prettyK(r, b.k), a:pastFigure(r, a.v, pairAt(r, a.k)), b:pastFigure(r, b.v, pairAt(r, b.k)) };
}
function eraMove(id, era, label){
  var e = eraEnds(id, era); if (!e) return "";
  return (label || e.r.eraUnit || e.r.name) + " went from " + e.a + " (" + e.from + ") to " + e.b + " (" + e.to + ") across the cycle.";
}
var HORMONES = "Hormones (the Fed funds rate)";
function analysisFor(key, d, era){
  var w = function(id){ var r = readDoor(id); return r && r.word ? r.word.toLowerCase() : ""; };
  if (era) return key === "circulation" ? eraMove("sheet-sign-hormones", era, HORMONES) : eraMove("sheet-sign-activity", era);
  if (key === "circulation") return "Hormones are " + w("sheet-sign-hormones") + "; money is " + w("sheet-sign-volume") + ".";
  return "Labour is " + w("sheet-sign-activity") + "; the household reserve is " + w("sheet-metric-households") + ".";
}
function dxRow(label, html){ return '<div class="dx-row"><span class="dx-k">' + label + '</span>' + dxText(html) + '</div>'; }
function dxText(html){ return '<p class="dx-v">' + html + '</p>'; }
function dxSection(head, body, cls){ return '<section class="dx-sys' + (cls ? " " + cls : "") + '">' + head + body + '</section>'; }
function systemHtml(c, analysis){
  return '<div class="dx-cat cat-' + c.key + '">' + dxHead(c.title, c) + dxText(analysis) + '</div>';
}
function dxHead(title, c, mark){
  var tag = c ? 'button type="button"' : "div";
  return '<' + tag + ' class="dx-sys-head"' + (c ? ' data-open="sheet-cat-' + c.key + '" data-title="' + title + '"' : "") + '>' +
    (mark ? '<span class="dx-mark" aria-hidden="true">' + mark + '</span>' : "") + title + (c ? CHEV : "") + '</' + (c ? "button" : "div") + '>';
}
function diagnosisHtml(m){
  var open = m.ongoing, d = open ? diagnoseToday() : { after:yearAfter(marketMonths(), m.endMonth) }, closed = open ? null : m.era;
  if (!d) return "";
  var systems = categoriesShown().filter(function(c){ return !c.onDial && !c.inTrend; });
  return moodDoor(open ? d.stage + " in " + seasonName(seasonGroup(d.season)) : "Cycle story", trendText(m.era.story)) +
    dxSection(dxHead(systems.map(function(c){ return c.title; }).join(" and "), null, stethoscopeSvg()),
      systems.map(function(c){ return systemHtml(c, analysisFor(c.key, d, closed)); }).join("") + (open ? acrossCycle(m.era) :
      d.after != null ? dxRow("Followed", "The S&amp;P 500 a year after the close: <b>" + pct(d.after) + "</b>.") : ""));
}
function acrossCycle(era){
  var span = { from:era.from, to:calendarTodayY };
  var fed = eraEnds("sheet-sign-hormones", span), job = eraEnds("sheet-sign-activity", span);
  if (!fed || !job) return "";
  return dxRow("Across the cycle", "Since " + fed.from + " h" + HORMONES.slice(1) + " went from " + fed.a + " to " + fed.b + " (" + fed.to +
    ") and the " + job.r.name.toLowerCase() + " from " + job.a + " to " + job.b + " (" + job.to + ").");
}
function moodDoor(head, body){
  var mood = CATEGORIES.filter(function(c){ return c.key === "mood"; })[0];
  return '<button type="button" class="trend-card cat-mood" data-open="sheet-cat-mood" data-title="' + mood.title + '">' +
    '<span class="trend-head"><span class="dx-mark" aria-hidden="true">' + bookSvg() + '</span>' + (head || mood.title) + CHEV + '</span>' + body + '</button>';
}
function trendText(t){ return '<span class="trend-text">' + t + '</span>'; }
export function renderDiagnosis(m){
  var host = document.getElementById("diagnosis");
  if (host && m) host.innerHTML = diagnosisHtml(m);
}
function buildDiagnosis(){
  var home = byId("today-analysis");
  if (!home || document.getElementById("diagnosis")) return;
  var host = document.createElement("article"); host.className = "dx"; host.id = "diagnosis";
  home.insertBefore(host, home.firstChild);
  renderDiagnosis(nowModel);
  addSources(DIAG_SRC);
}

export function bootDiagnosis(){
  GYN.step("buildDiagnosis", buildDiagnosis, "build");
  buildDiagnosis();
}
