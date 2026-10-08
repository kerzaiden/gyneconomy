import { qAtIndex } from "./format.ts";
import { topTenQuarterly } from "./data.ts";
import { topTenRecent } from "./history-fred.ts";

// ---- Concentration: the ten largest S&P 500 holdings' share of the index ----
export var CONCENTRATION_TO = 2025;
export var CONCENTRATION_MEAN: number;
export var CONCENTRATION_SRC: Src[] = [
  { t:"SEC EDGAR — SPDR S&P 500 ETF Trust (SPY), annual and semi-annual reports (Form N-30D), the full schedule of investments since December 1995", u:"https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000884394&type=N-30D" },
  { t:"SEC EDGAR — SPDR S&P 500 ETF Trust (SPY), Form N-PORT, the full portfolio at each quarter end since September 2019", u:"https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000884394&type=NPORT-P" },
  { t:"State Street Global Advisors — SPY daily holdings, the latest figure", u:"https://www.ssga.com/us/en/intermediary/etfs/spdr-sp-500-etf-trust-spy" }
];
export var topTenReadings: CreditPoint[] = [];
export var topTenHistory: { q: string; v: number | null }[] = [];

function concentrationSpan(){ return topTenQuarterly[0].q.slice(0, 4) + "–" + CONCENTRATION_TO; }
function concentrationWord(v: number): CreditWord {
  var avg = CONCENTRATION_MEAN.toFixed(1) + "%";
  if (v >= CONCENTRATION_MEAN) return { state:"warning", text:"Concentrated",
    says:"above its " + concentrationSpan() + " average of " + avg + ": more of the index rests on its ten largest stocks than usual" };
  return { state:"good", text:"Broad", says:"below its " + concentrationSpan() + " average of " + avg + ": the index is spread wider than usual" };
}
function concentrationRecord(){
  var years: Record<string, number[]> = {};
  topTenQuarterly.forEach(function(d){ var y = d.q.slice(0, 4); if (+y <= CONCENTRATION_TO) (years[y] = years[y] || []).push(d.v); });
  var means = Object.keys(years).map(function(y){ return years[y].reduce(function(a, v){ return a + v; }, 0) / years[y].length; });
  CONCENTRATION_MEAN = Math.round(means.reduce(function(a, v){ return a + v; }, 0) / means.length * 10) / 10;
  var last = topTenQuarterly[topTenQuarterly.length - 1].q, recent = topTenRecent.filter(function(d){ return d.q > last; });
  topTenReadings.length = 0;
  (topTenQuarterly as CreditPoint[]).concat(recent).forEach(function(d){ topTenReadings.push(d); });
  var ends = recent.length ? topTenReadings.slice(0, -1) : topTenReadings, at: Record<string, number> = {};
  ends.forEach(function(d){ at[d.q as string] = d.v; });
  topTenHistory.length = 0;
  var y0 = +(ends[0].q as string).slice(0, 4), end = ends[ends.length - 1].q as string;
  for (var i = 0, q = qAtIndex(y0, 0); q <= end; q = qAtIndex(y0, ++i)) if (q >= (ends[0].q as string)) topTenHistory.push({ q:q, v:q in at ? at[q] : null });
}
export function concentrationSpecs(): CreditSpec[] {
  concentrationRecord();
  return [{ id:"sheet-sign-concentration", term:"Concentration risk", econ:"Concentration risk", unit:"top ten of the S&P 500", series:topTenReadings,
    mid:CONCENTRATION_MEAN, line:concentrationSpan() + " average", optimal:{ lte:CONCENTRATION_MEAN, label:"≤ " + CONCENTRATION_MEAN.toFixed(1) + "%" },
    ends:{ high:"Concentrated" }, fmt:function(v){ return v.toFixed(1) + "%"; }, word:concentrationWord, src:CONCENTRATION_SRC,
    about:"The ten largest companies' share of the S&P 500's market cap, read from SPY, the oldest fund that tracks the index, which holds each company by its weight in the index. " +
      "A company with two share classes counts once, so Alphabet’s A and C shares are added together. The record comes from SPY’s filings with the SEC: its annual reports from 1995, " +
      "twice a year from 2010 and every quarter from 2019. Every point in the history is a quarter’s end: the SEC’s filings, then State Street’s own daily holdings file on the quarter’s last trading day. Today’s figure is that file’s latest. When a few giants carry the index, its fortunes ride on theirs: the concentration risk.",
    band:"<b>The line is the record’s own average</b> over " + concentrationSpan() + ", each year counted once, since the early years have one or two readings and the recent ones four. " +
      "No convention sets a band for concentration, so the line is derived from that record and no other is drawn.",
    lede:"How much of the S&P 500 rests on its ten biggest stocks. The higher it runs, the more the whole market leans on a few names." }];
}
