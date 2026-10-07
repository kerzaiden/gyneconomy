import { topTenQuarterly } from "./data.ts";
import { topTenRecent } from "./history-fred.ts";

// ---- Concentration: the ten largest S&P 500 holdings' share of the index ----
export var CONCENTRATION_TO = 2025;
export var CONCENTRATION_MEAN: number;
export var CONCENTRATION_SRC: Src[] = [
  { t:"SEC EDGAR — SPDR S&P 500 ETF Trust (SPY), Form N-PORT, the full portfolio at each quarter end since September 2019", u:"https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0000884394&type=NPORT-P" },
  { t:"State Street Global Advisors — SPY daily holdings, the latest figure", u:"https://www.ssga.com/us/en/intermediary/etfs/spdr-sp-500-etf-trust-spy" }
];
export var topTenHistory: CreditPoint[] = [];

function concentrationSpan(){ return topTenQuarterly[0].q.slice(0, 4) + "–" + CONCENTRATION_TO; }
function concentrationWord(v: number): CreditWord {
  var avg = CONCENTRATION_MEAN.toFixed(1) + "%";
  if (v >= CONCENTRATION_MEAN) return { state:"warning", text:"Concentrated",
    says:"above its " + concentrationSpan() + " average of " + avg + ": more of the index rests on its ten largest stocks than usual" };
  return { state:"good", text:"Broad", says:"below its " + concentrationSpan() + " average of " + avg + ": the index is spread wider than usual" };
}
export function concentrationSpecs(): CreditSpec[] {
  var closed = topTenQuarterly.filter(function(d){ return +d.q.slice(0, 4) <= CONCENTRATION_TO; });
  CONCENTRATION_MEAN = Math.round(closed.reduce(function(a, d){ return a + d.v; }, 0) / closed.length * 10) / 10;
  var last = topTenQuarterly[topTenQuarterly.length - 1].q;
  topTenHistory.length = 0;
  (topTenQuarterly as CreditPoint[]).concat(topTenRecent.filter(function(d){ return d.q > last; })).forEach(function(d){ topTenHistory.push(d); });
  return [{ id:"sheet-sign-concentration", term:"Concentration", econ:"Concentration", unit:"top ten of the S&P 500", series:topTenHistory,
    mid:CONCENTRATION_MEAN, line:concentrationSpan() + " average", optimal:{ lte:CONCENTRATION_MEAN, label:"≤ " + CONCENTRATION_MEAN.toFixed(1) + "%" },
    ends:{ high:"Concentrated" }, fmt:function(v){ return v.toFixed(1) + "%"; }, word:concentrationWord, src:CONCENTRATION_SRC,
    about:"The weight of the ten largest holdings in the S&P 500, read from SPY, the oldest fund that tracks the index: their share of its net assets. " +
      "Each share class counts on its own, so Alphabet’s two can both appear, as the index lists them. Quarter ends come from SPY’s filings with the SEC; " +
      "the latest figure is State Street’s own daily holdings file. When a few giants carry the index, its fortunes ride on theirs: the concentration risk.",
    band:"<b>The line is the record’s own average</b>, every quarter from " + concentrationSpan() + ". The SEC publishes the full holdings only since 2019, " +
      "and no convention sets a band for concentration, so the line is derived from that record and no other is drawn.",
    lede:"How much of the S&P 500 rests on its ten biggest stocks. The higher it runs, the more the whole market leans on a few names." }];
}
