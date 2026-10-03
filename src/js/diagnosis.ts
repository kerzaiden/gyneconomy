import { CHEV, fmtSigned, seasonName } from "./format.ts";
import { addSources, byId, detailSlot } from "./dom.ts";
import { GYN } from "./live.ts";
import { bookSvg, calendarSvg, stethoscopeSvg } from "./marks.ts";
import { calendarTodayY, wheelMeta } from "./refresh-season.ts";
import { sp500AnnualReturns } from "./data.ts";
import { quarterSheet } from "./quarter-sheet.ts";
import { diagnoseToday, marketMonths, moodToday, moodTrack, nowModel, seasonGroup, yearAfter } from "./model.ts";
import { CATEGORIES, categoriesShown } from "./roster.ts";
import { pairAt, pastFigure, prettyK, readDoor, rosterRows } from "./era.ts";
import type { CycleModel } from "./model.ts";

type Category = (typeof CATEGORIES)[number];
type EraSpan = { from: number; to: number | null };
type DxView = { stage?: string; season?: Season; after?: number | null };

var DIAG_SRC = [
  {t:"Cboe via FRED \u2014 CBOE Volatility Index, daily closes since 1990 (VIXCLS), and the VXO for 1986\u20131989 (VXOCLS)", u:"https://fred.stlouisfed.org/series/VIXCLS"},
  {t:"Robert Shiller \u2014 U.S. stock market data: the S&P 500\u2019s monthly average and the CAPE ratio", u:"https://shillerdata.com/"}
];
function pct(v: number){ return (v >= 0 ? "+" : "\u2212") + Math.abs(v * 100).toFixed(0) + "%"; }
function inYears(from: number, to: number){ return function(d: { k: string }){ var y = +d.k.slice(0, 4); return y >= from && y <= to; }; }
function eraEnds(id: string, era: EraSpan){
  var r = rosterRows()[id], to = era.to; if (!r || to == null) return null;
  var span = r.seen.filter(inYears(era.from, to));
  if (span.length < 2) return null;
  var a = span[0], b = span[span.length - 1];
  return { r:r, from:prettyK(r, a.k), to:prettyK(r, b.k), a:pastFigure(r, a.v, pairAt(r, a.k)), b:pastFigure(r, b.v, pairAt(r, b.k)) };
}
function eraMove(id: string, era: EraSpan, label?: string){
  var e = eraEnds(id, era); if (!e) return "";
  return (label || e.r.eraUnit || e.r.name) + " went from " + e.a + " (" + e.from + ") to " + e.b + " (" + e.to + ") across the cycle.";
}
var HORMONES = "Hormones (the Fed funds rate)";
function analysisFor(key: string, d: DxView | null, era: EraSpan | null){
  var w = function(id: string){ var r = readDoor(id); return r && r.word ? r.word.toLowerCase() : ""; };
  if (era) return key === "circulation" ? eraMove("sheet-sign-hormones", era, HORMONES) : eraMove("sheet-sign-activity", era);
  if (key === "circulation") return "Hormones are " + w("sheet-sign-hormones") + "; money is " + w("sheet-sign-volume") + ".";
  return "Labour is " + w("sheet-sign-activity") + "; the household reserve is " + w("sheet-metric-households") + ".";
}
function dxRow(label: string, html: string){ return '<div class="dx-row"><span class="dx-k">' + label + '</span>' + dxText(html) + '</div>'; }
function dxText(html: string){ return '<p class="dx-v">' + html + '</p>'; }
function dxSection(head: string, body: string, cls?: string){ return '<section class="dx-sys' + (cls ? " " + cls : "") + '">' + head + body + '</section>'; }
function systemHtml(c: Category, analysis: string){ return dxItem(dxHead(c.title, c), analysis, " cat-" + c.key); }
function dxItem(head: string, text: string, cls?: string){ return '<div class="dx-cat' + (cls || "") + '">' + head + dxText(text) + '</div>'; }
function dxHead(title: string | number, c?: Category | null, mark?: string, sheet?: string){
  var link = !!c || sheet != null, tag = link ? "button" : "div", attrs = c ? ' data-open="sheet-cat-' + c.key + '" data-title="' + title + '"' : sheet != null ? ' data-detail-idx="' + detailSlot(sheet) + '"' : "";
  return '<' + tag + (link ? ' type="button"' : "") + ' class="dx-sys-head' + (sheet != null ? " details-link" : "") + '"' + attrs + '>' +
    (mark ? '<span class="dx-mark" aria-hidden="true">' + mark + '</span>' : "") + title + (link ? CHEV : "") + '</' + tag + '>';
}
function diagnosisHtml(m: CycleModel){
  var open = m.ongoing, d: DxView | null = open ? diagnoseToday() : { after:yearAfter(marketMonths(), m.endMonth) }, closed = open ? null : m.era;
  if (!d) return "";
  var systems = categoriesShown().filter(function(c){ return !c.onDial && !c.inTrend; });
  return moodDoor(open && d.season ? d.stage + " in " + seasonName(seasonGroup(d.season)) : "Cycle story", trendText(m.era.story)) + yearByYear(m) +
    dxSection(dxHead(systems.map(function(c){ return c.title; }).join(" and "), null, stethoscopeSvg()),
      systems.map(function(c){ return systemHtml(c, analysisFor(c.key, d, closed)); }).join("") + (open ? acrossCycle(m.era) :
      d.after != null ? dxRow("Followed", "The S&amp;P 500 a year after the close: <b>" + pct(d.after) + "</b>.") : ""));
}
function acrossCycle(era: Cycle){
  var span = { from:era.from, to:calendarTodayY };
  var fed = eraEnds("sheet-sign-hormones", span), job = eraEnds("sheet-sign-activity", span);
  if (!fed || !job) return "";
  return dxRow("Across the cycle", "Since " + fed.from + " h" + HORMONES.slice(1) + " went from " + fed.a + " to " + fed.b + " (" + fed.to +
    ") and the " + job.r.name.toLowerCase() + " from " + job.a + " to " + job.b + " (" + job.to + ").");
}
function yearByYear(m: CycleModel){
  var segs = m.track.filter(function(seg){ return !seg.isNow && seg.to > seg.from; }), rows: string[] = [];
  for (var y = m.era.from; y <= m.endYear; y++){
    var inYear = segs.filter(function(seg){ return parseInt(seg.q, 10) === y; }), line = yearLine(m, y, inYear);
    if (!line) continue;
    rows.push(dxItem(dxHead(y, null, undefined, inYear.length ? quarterSheet(m, inYear[inYear.length - 1], false) : undefined), line));
  }
  return rows.length ? dxSection(dxHead("Year by year", null, calendarSvg()), rows.join("")) : "";
}
function yearLine(m: CycleModel, y: number, inYear: CycleModel["track"]){
  var ytd = m.ongoing && y === calendarTodayY, seasons: string[] = [], ret = sp500AnnualReturns[y];
  inYear.forEach(function(seg){ var n = wheelMeta[seg.season].name; if (seasons[seasons.length - 1] !== n) seasons.push(n); });
  var moods = moodTrack().filter(function(x){ return !!x.word && +x.m.slice(0, 4) === y; }).map(function(x){ return x.word as string; });
  var today = ytd ? moodToday() : null;
  if (today && today.word) moods.push(today.word);
  var parts = [seasons.join(", then "), moods.length ? (moods[0] === moods[moods.length - 1] ? moods[0] : moods[0] + " to " + moods[moods.length - 1]) : "",
    ret != null ? "S&amp;P 500 <b>" + fmtSigned(ret, 1) + "%</b>" + (ytd ? " so far" : "") : ""];
  return parts.filter(function(p){ return p; }).join(" \u00b7 ");
}
function moodDoor(head: string, body: string){
  var mood = CATEGORIES.filter(function(c){ return c.key === "mood"; })[0];
  return '<button type="button" class="trend-card cat-mood" data-open="sheet-cat-mood" data-title="' + mood.title + '">' +
    '<span class="trend-head"><span class="dx-mark" aria-hidden="true">' + bookSvg() + '</span>' + (head || mood.title) + CHEV + '</span>' + body + '</button>';
}
function trendText(t: string){ return '<span class="trend-text">' + t + '</span>'; }
export function renderDiagnosis(m: CycleModel){
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
