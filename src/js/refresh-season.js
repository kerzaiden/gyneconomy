import SERIES from "../data/series.json" with { type: "json" };
import { MONTHS_SHORT } from "./format.js";
import { cpiYoYBefore, gdpYoYBefore } from "./history-fred.js";

// ---- Layers: Escape closes only the topmost open layer; Tab stays inside a dialog ----
export function hubTodayHtml(){
  var d = new Date();
  return "<b>Today,</b> " + MONTHS_SHORT[d.getMonth()] + " " + d.getDate();
}
export function asOfLabel(){
  var d = new Date();
  return "Today, " + MONTHS_SHORT[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
}
// ---- SEASON ----
export var wheelMeta = {
  summer:{name:"Summer", theme:"Inflation", altName:"Ovulation"},
  autumn:{name:"Autumn", theme:"Disinflation", altName:null},
  lateautumn:{name:"Autumn", theme:"Stagflation", altName:null},
  winter:{name:"Winter", theme:"Deflation", altName:"Groundation"},
  springdeflation:{name:"Spring", theme:"Deflation", altName:null},
  spring:{name:"Spring", theme:"Reflation", altName:null}
};
export var seasonOverride = null;
export var cycleNowNote = "Four years into an AI-driven bull run, growth is still expanding and prices are running hot.";
export var cpiYoYHistory = SERIES.cpiYoYHistory;
export var gdpQuarterlyYoY = SERIES.gdpQuarterlyYoY;

export var DATA_COMPILED, dataCompiledLabel, calendarTodayY;

export function bootRefreshSeason(){
  // ---- REFRESH: the one date to edit ----
  DATA_COMPILED = new Date(2026, 8, 25);
  dataCompiledLabel = MONTHS_SHORT[DATA_COMPILED.getMonth()] + " " + DATA_COMPILED.getDate() + ", " + DATA_COMPILED.getFullYear();
  /* ---- Live data without a render refactor ---- */
  cpiYoYHistory = cpiYoYBefore.concat(cpiYoYHistory);
  gdpQuarterlyYoY = gdpYoYBefore.concat(gdpQuarterlyYoY);
  // ---- Daily Feeling/Energy readout (Cycle tab) ----
  calendarTodayY = DATA_COMPILED.getFullYear();
}
