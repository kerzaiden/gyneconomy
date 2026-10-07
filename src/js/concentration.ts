import { concentrationHistory } from "./history-fred.ts";

// ---- Concentration: the largest tenth of US stocks' share of market cap ----
export var CONCENTRATION_TO = 2025;
export var CONCENTRATION_MEAN: number;
export var CONCENTRATION_SRC: Src[] = [
  { t:"Kenneth R. French — Data Library: Portfolios Formed on Size, monthly from July 1926, NYSE breakpoints (number of firms and average firm size per decile)", u:"https://mba.tuck.dartmouth.edu/pages/faculty/ken.french/Data_Library/det_port_form_sz.html" },
  { t:"Eugene F. Fama and Kenneth R. French — The Cross-Section of Expected Stock Returns, Journal of Finance, 1992 (the size portfolios)", u:"https://doi.org/10.1111/j.1540-6261.1992.tb04398.x" }
];

function concentrationSpan(){ return concentrationHistory[0].m.slice(0, 4) + "–" + CONCENTRATION_TO; }
function concentrationWord(v: number): CreditWord {
  var avg = CONCENTRATION_MEAN.toFixed(1) + "%";
  if (v >= CONCENTRATION_MEAN) return { state:"warning", text:"Concentrated",
    says:"above its " + concentrationSpan() + " average of " + avg + ": more of the market’s value rests on its largest stocks than usual" };
  return { state:"good", text:"Broad", says:"below its " + concentrationSpan() + " average of " + avg + ": the market’s value is spread wider than usual" };
}
export function concentrationSpecs(): CreditSpec[] {
  var closed = concentrationHistory.filter(function(d){ return +d.m.slice(0, 4) <= CONCENTRATION_TO; });
  CONCENTRATION_MEAN = Math.round(closed.reduce(function(a, d){ return a + d.v; }, 0) / closed.length * 10) / 10;
  return [{ id:"sheet-sign-concentration", term:"Concentration", econ:"Concentration", unit:"of market cap", series:concentrationHistory,
    mid:CONCENTRATION_MEAN, line:concentrationSpan() + " average", optimal:{ lte:CONCENTRATION_MEAN, label:"≤ " + CONCENTRATION_MEAN.toFixed(1) + "%" },
    ends:{ high:"Concentrated" }, fmt:function(v){ return v.toFixed(1) + "%"; }, word:concentrationWord, src:CONCENTRATION_SRC,
    about:"The share of the whole US stock market’s capitalization (market cap: shares times price) held by its largest tenth of companies, sized against the New York Stock Exchange, " +
      "from Kenneth French’s size portfolios: each tenth’s number of firms times its average size. When a few giants carry the market, " +
      "its fortunes ride on theirs: the concentration risk.",
    band:"<b>The line is the record’s own average</b>, every month from " + concentrationSpan() + ". No convention sets a band for concentration, " +
      "so the line is derived from the record and no other is drawn.",
    lede:"How much of the market’s value rests on its biggest companies. The higher it runs, the more the whole market leans on a few names." }];
}
