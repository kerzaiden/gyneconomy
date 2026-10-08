import SERIES from "../data/series.json" with { type: "json" };
import { MONTHS_SHORT } from "./format.ts";
import { cpiYoYBefore, gdpYoYBefore, pceYoYHistory } from "./history-fred.ts";

// ---- Today's date ----
export function hubTodayHtml(){
  var d = new Date();
  return "<b>Today,</b> " + MONTHS_SHORT[d.getMonth()] + " " + d.getDate();
}
export function asOfLabel(){
  var d = new Date();
  return "Today, " + MONTHS_SHORT[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
}
// ---- SEASON ----
export var wheelMeta: Record<Season, { name: string; theme: string; altName: string | null }> = {
  summer:{name:"Summer", theme:"Inflation", altName:null},
  autumn:{name:"Autumn", theme:"Disinflation", altName:null},
  lateautumn:{name:"Autumn", theme:"Stagflation", altName:null},
  winter:{name:"Winter", theme:"Deflation", altName:"Groundation"},
  springdeflation:{name:"Spring", theme:"Deflation", altName:null},
  spring:{name:"Spring", theme:"Reflation", altName:null}
};
export var seasonOverride: Season | null = null;
var PCE_FROM = "2000-01";
export var inflationHistory: MonthPoint[] = SERIES.cpiYoYHistory;
export var gdpQuarterlyYoY = SERIES.gdpQuarterlyYoY;

export var DATA_COMPILED: Date, dataCompiledLabel: string, calendarTodayY: number;

function fedGauge(cpi: MonthPoint[]){
  return cpi.filter(function(d){ return d.m < PCE_FROM; }).concat(pceYoYHistory.filter(function(d){ return d.m >= PCE_FROM; }));
}
export function yearDone(){
  return (+DATA_COMPILED - +new Date(calendarTodayY, 0, 1)) / (+new Date(calendarTodayY + 1, 0, 1) - +new Date(calendarTodayY, 0, 1));
}
export function bootRefreshSeason(){
  // ---- REFRESH: the one date to edit ----
  DATA_COMPILED = new Date(2026, 8, 25);
  dataCompiledLabel = MONTHS_SHORT[DATA_COMPILED.getMonth()] + " " + DATA_COMPILED.getDate() + ", " + DATA_COMPILED.getFullYear();
  inflationHistory = fedGauge(cpiYoYBefore.concat(inflationHistory));
  gdpQuarterlyYoY = gdpYoYBefore.concat(gdpQuarterlyYoY);
  calendarTodayY = DATA_COMPILED.getFullYear();
}
