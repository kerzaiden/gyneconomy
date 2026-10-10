import { fmtSigned } from "./format.ts";
import { payrollsHistory, potentialYoYHistory, retailHistory } from "./history-fred.ts";
import { gdpQuarterlyYoY } from "./refresh-season.ts";
import { gdpSrc, HOLD_BAND } from "./data.ts";

// ---- Activity: job growth and retail sales, each against a year earlier ----
export var PAYROLLS_LINE = 0, RETAIL_LINE = 0, GAP_LINE = 0;
export var growthGapHistory: QuarterPoint[] = [];
export var PAYROLLS_SRC: Src[] = [
  { t:"Bureau of Labor Statistics — Current Employment Statistics, the monthly survey of employers", u:"https://www.bls.gov/ces/" },
  { t:"FRED — All Employees, Total Nonfarm, seasonally adjusted, monthly since 1939 (PAYEMS)", u:"https://fred.stlouisfed.org/series/PAYEMS" }
];
export var RETAIL_SRC: Src[] = [
  { t:"US Census Bureau — Monthly Retail Trade: advance retail and food services sales", u:"https://www.census.gov/retail/index.html" },
  { t:"FRED — Advance Retail Sales: Retail Trade and Food Services, seasonally adjusted, monthly since 1992 (RSAFS)", u:"https://fred.stlouisfed.org/series/RSAFS" }
];

function sideWord(up: string, down: string, more: string, less: string){
  return function(v: number): CreditWord {
    if (v >= 0) return { state:"good", text:up, says:"above zero: " + more + " than a year earlier" };
    return { state:"warning", text:down, says:"below zero: " + less + " than a year earlier" };
  };
}
function gapOf(): QuarterPoint[] {
  var pot: Record<string, number> = {};
  potentialYoYHistory.forEach(function(d){ pot[d.q] = d.v; });
  return gdpQuarterlyYoY.filter(function(d){ return pot[d.q] != null; }).map(function(d){ return { q:d.q, v:Math.round((d.v - pot[d.q]) * 100) / 100 }; });
}
function gapSpec(): CreditSpec {
  var pt = function(v: number){ return fmtSigned(v, 1) + " pt"; };
  growthGapHistory = gapOf();
  return { id:"sheet-sign-growth-gap", goodAbove:true, term:"Growth gap", econ:"Growth gap", unit:"vs potential", series:growthGapHistory, mid:GAP_LINE, line:"Potential",
      optimal:{ gte:GAP_LINE, label:"≥ 0 pt" }, ends:{ low:"Below potential" }, fmt:pt, src:gdpSrc.filter(function(s){ return /GDPPOT|Fixler/.test(s.t); }),
      word:sideWord("Above potential", "Below potential", "real GDP is growing faster than the economy’s potential", "real GDP is growing more slowly than the economy’s potential"),
      about:"Real GDP growth against the same quarter a year earlier, less the growth the Congressional Budget Office estimates the economy can sustain, its potential. " +
        "This is the figure the Season Model reads for growth, after the Investment Clock (Merrill Lynch, 2004): above potential is expansion, below it contraction. " +
        "Real GDP growth itself is under Activity.",
      band:"<b>Zero is the line: growth equal to potential.</b> The Season Model changes a quarter’s regime only once the gap passes " + HOLD_BAND +
        " points either side, the typical revision to GDP growth (Fixler and others, BEA, 2018), so a small gap is not yet a turn.",
      lede:"Real GDP growth less its potential: the growth half of the Economic Season." };
}
export function activitySpecs(): CreditSpec[] {
  var pct = function(v: number){ return fmtSigned(v, 1) + "%"; };
  return [gapSpec(),
    { id:"sheet-sign-payrolls", goodAbove:true, term:"Job growth", econ:"Nonfarm payrolls", unit:"YoY", series:payrollsHistory, mid:PAYROLLS_LINE, line:"No change",
      optimal:{ gte:PAYROLLS_LINE, label:"≥ 0%" }, ends:{ low:"Losing jobs" }, fmt:pct, src:PAYROLLS_SRC,
      word:sideWord("Adding jobs", "Losing jobs", "more people are on payrolls", "fewer people are on payrolls"),
      about:"The number of jobs at US employers outside farms, private and government, as the Bureau of Labor Statistics counts them each month " +
        "from its survey of employers, against the same month a year earlier.",
      band:"<b>Zero is the only line.</b> Above it the economy holds more jobs than a year ago; below it, fewer. No convention sets a band.",
      lede:"Jobs, against the same month a year earlier: whether the body is taking on work or shedding it." },
    { id:"sheet-sign-retail", goodAbove:true, term:"Retail sales", econ:"Retail sales", unit:"YoY", series:retailHistory, mid:RETAIL_LINE, line:"No change",
      optimal:{ gte:RETAIL_LINE, label:"≥ 0%" }, ends:{ low:"Spending less" }, fmt:pct, src:RETAIL_SRC,
      word:sideWord("Spending more", "Spending less", "shoppers are spending more dollars at stores and restaurants", "shoppers are spending fewer dollars at stores and restaurants"),
      about:"What Americans spend at stores, online retailers, gas stations and restaurants each month, as the Census Bureau reports it, against the same " +
        "month a year earlier: the figure the news quotes. It is in dollars before inflation, so it rises when prices rise, and part of a gain can be " +
        "gas and groceries costing more rather than more being bought. Discretionary spending, under Desire, is measured after prices.",
      band:"<b>Zero is the only line.</b> Above it shoppers are spending more dollars than a year ago; below it, fewer. No convention sets a band.",
      lede:"Spending at stores and restaurants in dollars, against the same month a year earlier. Prices are in it: when gas and groceries cost more, it reads higher." }
  ];
}
