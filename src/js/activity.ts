import { fmtSigned } from "./format.ts";
import { payrollsHistory, retailHistory } from "./history-fred.ts";

// ---- Activity: nonfarm payrolls and retail sales, each against a year earlier ----
export var PAYROLLS_LINE = 0, RETAIL_LINE = 0;
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
export function activitySpecs(): CreditSpec[] {
  var pct = function(v: number){ return fmtSigned(v, 1) + "%"; };
  return [
    { id:"sheet-sign-payrolls", goodAbove:true, term:"Nonfarm payrolls", econ:"Nonfarm payrolls", unit:"YoY", series:payrollsHistory, mid:PAYROLLS_LINE, line:"No change",
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
