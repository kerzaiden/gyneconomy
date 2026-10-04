import { CHEV, fmtSigned, seasonName } from "./format.ts";
import { addSources, byId, detailSlot, trendDoor } from "./dom.ts";
import { GYN } from "./live.ts";
import { bookSvg, calendarSvg } from "./marks.ts";
import { calendarTodayY, wheelMeta } from "./refresh-season.ts";
import { sp500AnnualReturns } from "./data.ts";
import { quarterSheet } from "./quarter-sheet.ts";
import { diagnoseToday, moodToday, moodTrack, nowModel, seasonGroup, yearAfter } from "./model.ts";
import { CATEGORIES } from "./roster.ts";
import { buildCycleChart, chartDoor } from "./cycle-analysis.ts";
import type { CycleModel } from "./model.ts";

type DxView = { stage?: string; season?: Season; after?: number | null };

var DIAG_SRC = [
  {t:"Cboe via FRED \u2014 CBOE Volatility Index, daily closes since 1990 (VIXCLS), and the VXO for 1986\u20131989 (VXOCLS)", u:"https://fred.stlouisfed.org/series/VIXCLS"},
  {t:"Robert Shiller \u2014 U.S. stock market data: the S&P 500\u2019s monthly average and the CAPE ratio", u:"https://shillerdata.com/"}
];
function diagnosisHtml(m: CycleModel){
  var open = m.ongoing, d: DxView | null = open ? diagnoseToday() : { after:yearAfter(m.endYear) };
  if (!d) return "";
  return moodDoor(open && d.season ? d.stage + " in " + seasonName(seasonGroup(d.season)) : "Cycle story", trendText(m.era.story)) +
    chartDoor() + yearByYear(m, d.after != null ? yearRow("After", "The S&amp;P&nbsp;500 the year after the close", "<b>" + fmtSigned(d.after, 1) + "%</b>") : "");
}
function yearByYear(m: CycleModel, after: string){
  var segs = m.track.filter(function(seg){ return !seg.isNow && seg.to > seg.from; }), rows: string[] = [];
  for (var y = m.era.from; y <= m.endYear; y++){
    var inYear = segs.filter(function(seg){ return parseInt(seg.q, 10) === y; }), ytd = m.ongoing && y === calendarTodayY;
    rows.push(yearRow(String(y), seasonsIn(inYear), [moodIn(y, ytd), marketIn(y, ytd)].filter(function(p){ return p; }).join(" \u00b7 "),
      inYear.length ? quarterSheet(m, inYear[inYear.length - 1], false) : undefined));
  }
  return '<section class="dx-sys dx-years"><div class="dx-sys-head"><span class="dx-mark" aria-hidden="true">' + calendarSvg() + '</span>Year by year</div>' +
    rows.join("") + after + '</section>';
}
function yearRow(year: string, lead: string, line: string, sheet?: string){
  var tag = sheet != null ? "button" : "div";
  return '<' + tag + ' class="dx-year' + (sheet != null ? ' details-link" type="button" data-detail-idx="' + detailSlot(sheet) : "") + '">' +
    '<span class="dx-year-n">' + year + '</span><span class="dx-year-v">' + (lead ? '<span class="dx-year-lead">' + lead + '</span>' : "") +
    (line ? '<span class="dx-year-line">' + line + '</span>' : "") + '</span>' + (sheet != null ? CHEV : "") + '</' + tag + '>';
}
function seasonsIn(inYear: CycleModel["track"]){
  var seasons: string[] = [];
  inYear.forEach(function(seg){ var n = wheelMeta[seg.season].name; if (seasons[seasons.length - 1] !== n) seasons.push(n); });
  return seasons.join(", then ");
}
function moodIn(y: number, ytd: boolean){
  var moods = moodTrack().filter(function(x){ return !!x.word && +x.m.slice(0, 4) === y; }).map(function(x){ return x.word as string; });
  var today = ytd ? moodToday() : null;
  if (today && today.word) moods.push(today.word);
  return moods.length ? (moods[0] === moods[moods.length - 1] ? moods[0] : moods[0] + " to " + moods[moods.length - 1]) : "";
}
function marketIn(y: number, ytd: boolean){
  var ret = sp500AnnualReturns[y];
  return ret != null ? "S&amp;P&nbsp;500 <b>" + fmtSigned(ret, 1) + "%</b>" + (ytd ? " so far" : "") : "";
}
function moodDoor(head: string, body: string){
  var mood = CATEGORIES.filter(function(c){ return c.key === "mood"; })[0];
  return trendDoor("sheet-cat-mood", mood.title, bookSvg(), head || mood.title, body);
}
function trendText(t: string){ return '<span class="trend-text">' + t + '</span>'; }
export function renderDiagnosis(m: CycleModel){
  var host = document.getElementById("diagnosis");
  if (host && m) host.innerHTML = diagnosisHtml(m);
}
function diagnosisHost(home: HTMLElement){
  var host = document.createElement("article"); host.className = "dx"; host.id = "diagnosis";
  home.insertBefore(host, home.firstChild);
  buildCycleChart(home);
}
function buildDiagnosis(){
  var home = byId("today-analysis");
  if (!home || document.getElementById("diagnosis")) return;
  diagnosisHost(home);
  renderDiagnosis(nowModel);
  addSources(DIAG_SRC);
}

export function bootDiagnosis(){
  GYN.step("buildDiagnosis", buildDiagnosis, "build");
  buildDiagnosis();
}
