import SERIES from "../data/series.json" with { type: "json" };
import { bandEnds, mean, metered, pctl, round1 } from "./format.ts";
import { GYN, liveInto, liveIsoOf, merge } from "./live.ts";
import { fedFundsHistory, fiscalHistory, gdpGrowthBefore, dsrQuarterly, grossDebtQuarterly, sp500ReturnsBefore, treasuryQuarterly } from "./history-fred.ts";

export var BUFFETT_LINE = 80, DEBT_LINE = 70, DEFICIT_LINE = 3.8;
type NowStore = { fedFunds: FedFunds; yieldCurve: CurvePoint[]; sentiment: Panel; valuation: Panel; vixRow: Row; vix3mClose: number };
type SeasonReading = { body: string; economy: string };
type UninvLagCycle = { cycle: string; uninv: string; recession: string; lag: string };
type FrameworkRow = { indicator: string; body: string; economy: string; category: string };

export var CAPE_FAIR = 17;
export var VIX_CALM = 20, VIX_FEAR = 30;

export var now: NowStore = {
  fedFunds: { lo:3.75, hi:4.00, lastMove:"+0.25", lastMoveLabel:"raised a quarter point",
    asOf:"Sep 16, 2026", vote:"12\u20130", next:"Oct 28, 2026", turnLabel:"First hike since", turnValue:"2023" },
  yieldCurve: [
  {m:"1M",  y:4.01}, {m:"2M",  y:4.18}, {m:"3M",  y:4.24}, {m:"4M",  y:4.33}, {m:"6M",  y:4.34},
  {m:"1Y",  y:4.51}, {m:"2Y",  y:4.87}, {m:"3Y",  y:4.99}, {m:"5Y",  y:5.03}, {m:"7Y",  y:5.10},
  {m:"10Y", y:5.18}, {m:"20Y", y:5.53}, {m:"30Y", y:5.47}
],
  sentiment: {
  kicker:"How she feels right now",
  hint:"Her mood, fast and contrarian: what the option market is paying for protection, what lenders demand to take risk, and how much she is borrowing to bet on herself.",
  tag:{text:"Greedy", state:"serious"},
  rows:[
    { marker:"CBOE VIX", sub:"Sep 22 2026",
      meter:{min:9.14,max:82.69,value:14.21,optimal:{lte:VIX_CALM, label:"below " + VIX_CALM}, ends:{zone:"Calm", high:"Elevated"}},
      shortNote:"Eased to a fresh multi-week low while stocks stayed calm — complacency compounding on complacency.",
      note:"The price of protection, and so the cleanest read on fear in the equity market: it is what options traders are paying to insure against a fall over the next 30 days. It fell through the week after the FOMC's surprise quarter-point hike \u2014 17.71 on Sep 16, 15.44 on Sep 17, 14.81 on Sep 18 (Cboe closes) — held essentially flat into the new week at 14.87 on Sep 21, then eased further to 14.21 on Sep 22 \u2014 still well below the ~19\u201320 long-run average. A calm options market alongside a quiet one is the more ordinary pairing — but calm bought this cheap, this close to fresh highs, is still calm. Read it contrarian: a low VIX is not good news, it is the absence of worry, and the extremes at both ends are the signal. Range: the index's record closing low (9.14, Nov 3 2017) and high (82.69, Mar 16 2020), both published by Cboe.",
      direction:"up", flagValue:"14.2", flagState:"warning" }
  ],
  shortImpression:"The published gauge says fear; the two markets it is built on say almost none is priced.",
  impression:"Two things are true at once and the panel shows both. The headline index reads Fear, because it is built mostly of momentum and breadth and the market has been sliding for a month. The two markets underneath it read the opposite: the option market is paying almost nothing for protection and lenders are asking almost nothing to take credit risk, which is the same sentence said twice. Sentiment has turned while almost no fear is priced in against forty years of history. None of this forecasts a fall \u2014 a contrarian read is not a timer, and complacency can last for years \u2014 but it is the condition in which a shock is expensive.",
  src:[{t:"Cboe via FRED \u2014 CBOE Volatility Index, daily closes since 1990 (VIXCLS)", u:"https://fred.stlouisfed.org/series/VIXCLS"},{t:"Cboe via FRED \u2014 CBOE S&P 100 Volatility Index (VXO), the original VIX, daily closes 1986\u20132021 (VXOCLS)", u:"https://fred.stlouisfed.org/series/VXOCLS"},{t:"Cboe via FRED \u2014 CBOE S&P 500 3-Month Volatility Index, daily closes (VXVCLS)", u:"https://fred.stlouisfed.org/series/VXVCLS"},{t:"Cboe \u2014 Inside Volatility Trading: the VIX record low (9.14, Nov 3 2017) and high (82.69, Mar 16 2020)", u:"https://www.cboe.com/insights/posts/inside-volatility-trading-nothing-remains-unchanged/"},{t:"Federal Reserve \u2014 FOMC statement, Sep 16 2026", u:"https://www.federalreserve.gov/newsevents/pressreleases/monetary20260916a.htm"},{t:"S&P DJI via FRED \u2014 S&P 500 daily closes (SP500)", u:"https://fred.stlouisfed.org/series/SP500"},{t:"S&P DJI via FRED \u2014 Dow Jones Industrial Average daily closes (DJIA)", u:"https://fred.stlouisfed.org/series/DJIA"},{t:"Federal Reserve via FRED \u2014 10-year Treasury constant-maturity yield, daily (DGS10)", u:"https://fred.stlouisfed.org/series/DGS10"}]
},
  valuation: {
  kicker:"What she is priced at",
  hint:"Slow and structural: what the market is willing to pay for her. A ten-year return predictor, not a read on the next twelve months \u2014 CAPE passed 30 in 2017 and the market rose for four more years.",
  tag:null,
  rows:[
    { key:"buffett", marker:"Buffett indicator", sub:"market cap \u00f7 GDP, Q2 2026",
      meter:{min:32,max:256,value:256,optimal:{lte:BUFFETT_LINE, label:"\u2264 " + BUFFETT_LINE + "%"}, ends:{zone:"Buffett\u2019s zone", high:"Rich"}},
      shortNote:"The highest reading in the 80-year record \u2014 above the 2021 and dot-com peaks.",
      note:"Warren Buffett's own gauge of capital relative to the real economy. Computed here straight from the Federal Reserve's Financial Accounts (Z.1): the market value of nonfinancial corporate equities ($83.1T at end-Q2 2026) divided by nominal GDP ($32.5T annualized, Q2 2026) \u2014 the same definition the widely quoted charts use. At \u2248256% this is the highest reading in the 80-year record, clear of the 2021 peak (\u2248219%) and the dot-com peak (\u2248163%); the record low is \u224832% (Q2 1982).",
      direction:"up", flagValue:"\u2248256%", flagState:"serious" },
    { key:"cape", marker:"Shiller CAPE", sub:"cyclically-adjusted P/E ratio",
      meter:{min:4.78,max:44.19,value:40.58,optimal:{lte:CAPE_FAIR, label:"\u2264 " + CAPE_FAIR + "\u00d7"}, ends:{zone:"Long-run mean", high:"Rich"}},
      shortNote:"Among the richest readings on record, just shy of the dot-com peak.",
      note:"Cyclically-adjusted P/E (Shiller's own series, September 2026) vs. its ~17\u00d7 long-run average \u2014 among the richest readings on record, just shy of the all-time dot-com peak. Range: Robert Shiller's monthly series since 1871, from 4.78 (Dec 1920) to 44.19 (Dec 1999). The band ends at 17\u00d7, which is that series' own long-run mean (17.42) rather than a target \u2014 there is no level a market ought to trade at.",
      direction:"up", flagValue:"40.6\u00d7", flagState:"serious" }
  ],
  shortImpression:"Both gauges are at or near their record \u2014 she is priced for everything to keep going right.",
  impression:"Two independent measures of the same thing, both at or near the richest readings ever recorded: capital is worth 2.5 times the economy that produces it, and prices are 41 times a decade of earnings. Valuations are close to useless as a timing signal \u2014 they have been stretched for years and the market kept rising. What it reliably says is what the next decade's returns are likely to look like from here, and that a shock arriving at this price has further to fall before anything looks cheap.",
  src:[{t:"Federal Reserve Z.1 via FRED \u2014 Nonfinancial corporate equities, market value (NCBEILQ027S)", u:"https://fred.stlouisfed.org/series/NCBEILQ027S"},{t:"BEA via FRED \u2014 Gross Domestic Product, nominal (GDP)", u:"https://fred.stlouisfed.org/series/GDP"},{t:"Robert Shiller \u2014 U.S. stock market data and CAPE ratio since 1871 (Yale)", u:"https://shillerdata.com/"}]
},
  vixRow: undefined as unknown as Row,
  vix3mClose: 17.61
};
// ---- DATA (single source of truth — edit here on refresh) ----
var YIELD_CURVE_ASOF = "2026-09-24", CAPE_ASOF = "2026-09-01";
export function curveAsOf(){
  return liveIsoOf("yieldCurve") || YIELD_CURVE_ASOF;
}
function monthsToCurve(ym: string){
  var a = curveAsOf();
  return (+a.slice(0, 4) - +ym.slice(0, 4)) * 12 + (+a.slice(5, 7) - +ym.slice(5, 7));
}
export function deriveUninvLag(){
  var m = monthsToCurve(UNINV_FROM);
  uninvLagToday.months = m;
  uninvLagToday.altMonths = monthsToCurve(UNINV_DURABLE);
  uninvLagToday.meter.value = m;
  uninvLagToday.meter.max = Math.max(26, m);
}
export var NBER_RECESSIONS: [string, string][] = [
  ["1953 Q2", "1954 Q2"], ["1957 Q3", "1958 Q2"], ["1960 Q2", "1961 Q1"], ["1969 Q4", "1970 Q4"], ["1973 Q4", "1975 Q1"], ["1980 Q1", "1980 Q3"],
  ["1981 Q3", "1982 Q4"], ["1990 Q3", "1991 Q1"], ["2001 Q1", "2001 Q4"], ["2007 Q4", "2009 Q2"], ["2019 Q4", "2020 Q2"]
];
export var t10y3mRecessions = [
  {from:"2007 Q4", to:"2009 Q2", label:"2007–09"},
  {from:"2020 Q1", to:"2020 Q2", label:"2020"}
];
// ---- Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey) ----
export var uninvLagCycles: UninvLagCycle[] = [
  {cycle:"1989–91", uninv:"Sep 1989 – Jan 1990", recession:"Jul 1990", lag:"6–10 mo"},
  {cycle:"2001", uninv:"Jan–Feb 2001", recession:"Mar 2001", lag:"1–2 mo"},
  {cycle:"2007–09", uninv:"Jun–Aug 2007", recession:"Dec 2007", lag:"4–6 mo"},
  {cycle:"2020", uninv:"Oct 2019", recession:"Feb 2020", lag:"4 mo"}
];
var UNINV_FROM = "2024-12", UNINV_DURABLE = "2025-09";
export var uninvLagToday = {
  months: 0, altMonths: 0, altFrom: "September 2025",
  meter: { value: 0, min: 0, max: 26, optimal: {from: 1, to: 10, label: "1–10 mo (past cycles)"} }
};
export var HOLD_BAND = 0.47;
export var gdpSrc: Src[] = [{t:"World Bank — GDP growth, annual % (NY.GDP.MKTP.KD.ZG)", u:"https://data.worldbank.org/indicator/NY.GDP.MKTP.KD.ZG"},
  {t:"BEA via FRED — Real GDP, percent change from preceding period, annual, before 1990 (A191RL1A225NBEA)", u:"https://fred.stlouisfed.org/series/A191RL1A225NBEA"},
  {t:"MeasuringWorth (Johnston and Williamson) — What Was the U.S. GDP Then?, real GDP before 1930", u:"https://www.measuringworth.com/datasets/usgdp/"},
  {t:"CBO via FRED — Real Potential Gross Domestic Product (GDPPOT), the potential growth the season reads from 1950", u:"https://fred.stlouisfed.org/series/GDPPOT"},
  {t:"Fixler, Greenaway-McGrevy, Grimm — Revisions to GDP, GDI, and Their Major Components, Survey of Current Business, January 2018 (Table 9, the 0.47-point margin)", u:"https://apps.bea.gov/scb/pdf/2018/01-January/0118-revisions-to-gdp-gdi-and-their-major-components.pdf"},
  {t:"NBER — US Business Cycle Expansions and Contractions, the 1929 and 1948 peaks behind potential before 1950", u:"https://www.nber.org/research/data/us-business-cycle-expansions-and-contractions"}];
var labPanel: Row[] = [
  {
    sub:"gross federal debt ÷ GDP",
    meter:{min:0, max:125.9, value:null, optimal:{lte:DEBT_LINE, label:"\u2264 " + DEBT_LINE + "%"},
           ends:{ zone:"50-year average", high:"Elevated" }},
    shortNote:"",
    note:"{q}, gross federal debt as a share of GDP (Treasury and BEA via FRED, GFDEGDQ188S) — the figure the headlines quote. Gross debt is everything the government owes: debt held by the public, which CBO puts at about 101% of GDP for FY2026, plus roughly a fifth of GDP it owes to its own accounts, mostly the Social Security trust funds. On this measure the WWII record is already broken: gross debt peaked at {ww2}% in FY1946 and went higher in the pandemic, to 125.9% in FY2020 — the top of this bar (OMB via FRED, GFDGDPA188S, by fiscal year). The bar starts at zero, the one time the debt was effectively retired (1835, under Andrew Jackson — Treasury's own ledger shows just $33,733 outstanding). The green band ends at 70% of GDP: the average of this same series over the last fifty fiscal years, FY1976–FY2025. CBO publishes a 50-year average only for debt held by the public (51%), so this one is computed here, by CBO's rule — the same computation on the held series gives 50.5%, which is how the rule was checked. Today's {v}% is about {x} times it.",
    direction:"up", flagValue:"", flagState:"na",
    id:"sheet-metric-debt"
  },
  {
    sub:"federal deficit or surplus ÷ GDP",
    meter:{min:-2.3, max:26.9, value:5.8, optimal:{lte:DEFICIT_LINE, label:"\u2264 " + DEFICIT_LINE + "%"},
           ends:{ zone:"50-year average", high:"Large deficit", negative:"Surplus" }},
    shortNote:"FY2026, ~$1.9T — this size deficit once required a recession or a war. Neither is present.",
    note:"FY2026, ~$1.9T, CBO's February 2026 projection (FY2025 actual: 5.8%). Below emergency-level spikes, but deficits this size used to require a recession or a war — neither is present now. Range spans the largest surplus of the modern era (FY2000, +2.3% of GDP; the last one was FY2001, +1.2%) to the WWII deficit peak (FY1943, 26.9%), both from the OMB series on FRED. The green band ends at 3.8% of GDP, CBO's stated average deficit over the last fifty years; this year's 5.8% is half again as large.",
    direction:"up", flagValue:"5.8%", flagState:"na",
    id:"sheet-marker-deficit"
  }
];
export function labRow(id: string): Row { return labPanel.filter(function(r){ return r.id === id; })[0]; }
export var PRODUCTIVITY_TREND = 2.1, PRODUCTIVITY_SLOWDOWN = 1.3;
// ---- Consumer confidence ----
export var CONFIDENCE_LINE = 100;
// ---- Desire: real spending on durable goods ----
export var DESIRE_LINE = 0;
// ---- Desire: the equity risk premium ----
export var PREMIUM_LINE = 0;
// ---- The deficit, year by year ----
export var DEF_FROM_YEAR = 1946;
export var deficitHistory = SERIES.deficitHistory;
export var DEF_MEAN = deficitHistory.reduce(function(a, b){ return a + b; }, 0) / deficitHistory.length;
export var DEF_RECESSION_FY: Record<number, number> = {1949:1,1950:1,1954:1,1958:1,1960:1,1961:1,1970:1,1971:1,1974:1,1975:1,
                        1980:1,1981:1,1982:1,1983:1,1990:1,1991:1,2001:1,2002:1,2008:1,2009:1,2020:1};
function checkDeficitHistory(){
  var hi = Math.max.apply(null, deficitHistory), lo = Math.min.apply(null, deficitHistory);
  if (deficitHistory.length !== 80 || Math.abs(hi - 4.30) > 0.005 || Math.abs(lo + 14.48) > 0.005)
    console.warn("deficitHistory failed its check", deficitHistory.length, hi, lo);
}
export function fedFundsRange(){
  return (now.fedFunds.lo === now.fedFunds.hi ? now.fedFunds.lo.toFixed(2)
          : now.fedFunds.lo.toFixed(2) + "\u2013" + now.fedFunds.hi.toFixed(2)) + "%";
}
export var buffettHistory = SERIES.buffettHistory;
export var capeHistory: { y: number; v: number | null }[] = SERIES.capeHistory;
export var longCycleSrc: Src[] = [
  {t:"CBO — The Budget and Economic Outlook: 2026 to 2036 (Feb 2026)", u:"https://www.cbo.gov/publication/62105"},
  {t:"Treasury and BEA via FRED — Total public debt, % of GDP, quarterly, 1966– (GFDEGDQ188S; today's reading)", u:"https://fred.stlouisfed.org/series/GFDEGDQ188S"},
  {t:"OMB via FRED — Gross federal debt, % of GDP, FY1939– (GFDGDPA188S; the record and the band)", u:"https://fred.stlouisfed.org/series/GFDGDPA188S"},
  {t:"OMB via FRED — Federal debt held by the public, % of GDP, FY1939– (FYPUGDA188S)", u:"https://fred.stlouisfed.org/series/FYPUGDA188S"},
  {t:"OMB via FRED — Federal surplus or deficit, % of GDP, FY1929– (FYFSGDA188S)", u:"https://fred.stlouisfed.org/series/FYFSGDA188S"},
  {t:"OMB Historical Tables (Tables 1.2 and 7.1 — the source series behind the OMB lines above)", u:"https://www.whitehouse.gov/omb/information-resources/budget/historical-tables/"},
  {t:"U.S. Treasury Fiscal Data — Historical Debt Outstanding, 1790– (the 1835 low point)", u:"https://fiscaldata.treasury.gov/datasets/historical-debt-outstanding/historical-debt-outstanding"},
  {t:"U.S. Treasury Fiscal Data — Debt to the Penny (today's total)", u:"https://fiscaldata.treasury.gov/datasets/debt-to-the-penny/debt-to-the-penny"},
  {t:"BLS via FRED — Nonfarm business output per hour, quarterly index (OPHNFB); the annual averages behind the productivity line", u:"https://fred.stlouisfed.org/series/OPHNFB"},
  {t:"BLS — Productivity and Costs, Second Quarter 2026 (revised)", u:"https://www.bls.gov/news.release/archives/prod2_09032026.htm"},
  {t:"BLS via FRED — Nonfarm business output per hour, index (OPHNFB) and quarterly % change (PRS85006092), 1947–", u:"https://fred.stlouisfed.org/series/PRS85006092"}
];
export var DEBT_DOLLAR_SRC: Src[] = [
  {t:"U.S. Treasury Fiscal Data \u2014 Debt to the Penny, total public debt outstanding (the dollars owed today)", u:"https://fiscaldata.treasury.gov/datasets/debt-to-the-penny/debt-to-the-penny"},
  {t:"Treasury via FRED \u2014 Federal Debt: Total Public Debt, quarterly, 1966\u2013 (GFDEBTN; the dollars in the readout)", u:"https://fred.stlouisfed.org/series/GFDEBTN"}
];
function syncGrossDebt(){
  var row = labRow("sheet-metric-debt"), last = grossDebtQuarterly[grossDebtQuarterly.length - 1];
  var ww2 = fiscalHistory.gross.filter(function(d){ return d.y === 1946; })[0].v, v = Math.round(last.v * 10) / 10;
  var q = last.q.replace(/^(\d{4}) (Q[1-4])$/, "$2 $1"), fill: Record<string, string> = { q:q, v:v.toFixed(1), ww2:ww2.toFixed(1), x:(v / bandEnds(row.meter.optimal, NaN, NaN)[1]).toFixed(2) };
  row.meter.value = v;
  row.flagValue = fill.v + "%";
  row.shortNote = q + " — " + (v > ww2 ? "above the WWII peak, and within reach of the 2020 record." : "below the WWII peak of " + fill.ww2 + "%.");
  row.noteTpl = row.noteTpl || row.note;
  row.note = row.noteTpl.replace(/\{(\w+)\}/g, function(m: string, k: string){ return fill[k] != null ? fill[k] : m; });
}
function syncFederal(){ syncGrossDebt(); }
function checkFederal(){ checkGrossDebt(); }
function stressOf(m: Meter): State {
  var v = metered(m), hi = bandEnds(m.optimal, -Infinity, Infinity)[1];
  return v <= hi ? "good" : v >= m.max ? "critical" : "serious";
}
function deriveStress(){ labPanel.forEach(function(r){ r.flagState = stressOf(r.meter); }); }
function checkGrossDebt(){
  if (typeof fiscalHistory === "undefined" || !fiscalHistory.gross) return console.warn("checkGrossDebt: no fiscalHistory");
  var row = labRow("sheet-metric-debt"), by = function(a: { y: number; v: number }[]){ var o: Record<number, number> = {}; a.forEach(function(d){ o[d.y] = d.v; }); return o; };
  var g = by(fiscalHistory.gross), bad: string[] = [];
  var top = fiscalHistory.gross.reduce(function(a, d){ return d.v > a.v ? d : a; });
  if (Math.abs(row.meter.max - top.v) > 0.05) bad.push("max " + row.meter.max + " vs FY" + top.y + " " + top.v);
  var sum = 0, n = 0, cap = bandEnds(row.meter.optimal, NaN, NaN)[1]; for (var y = 1976; y <= 2025; y++) if (g[y] != null){ sum += g[y]; n++; }
  if (n !== 50 || Math.round(sum / n) !== cap) bad.push("band " + cap + " vs " + (sum / n).toFixed(2) + " over " + n);
  if (bad.length) console.warn("checkGrossDebt: " + bad.join("; "));
}
export function curveAt(m: string): number | null {
  var h = now.yieldCurve.filter(function(d){ return d.m === m; })[0];
  return h && h.y != null ? h.y : null;
}
function curveNeed(m: string): number { var y = curveAt(m); if (y == null) throw new Error("the yield curve has no " + m + " point"); return y; }
export function curveSpread(){ return curveNeed("10Y") - curveNeed("3M"); }
export function policyDirection(){
  return /^\+/.test(now.fedFunds.lastMove) ? "Tightening" : /^[-\u2212]/.test(now.fedFunds.lastMove) ? "Easing" : "On hold";
}
export function capeAsOf(){ return liveIsoOf("capeValue") || CAPE_ASOF; }
export function syncCapeHistory(){
  var last = capeHistory[capeHistory.length - 1], v = fileRow("cape").meter.value, y = Number(capeAsOf().slice(0, 4));
  if (last.y === y) last.v = v; else if (y > last.y) capeHistory.push({ y:y, v:v });
}
export function valRow(k: string): Row | null {
  for (var i = 0; i < now.valuation.rows.length; i++) if (now.valuation.rows[i].key === k) return now.valuation.rows[i];
  return null;
}
export function fileRow(key: string): Row { var r = valRow(key); if (!r) throw new Error("the valuation panel has no " + key + " row"); return r; }
export var M2V_FROM_YEAR = 1959;
export var m2vHistory = SERIES.m2vHistory.map(function(n){ return n / 1000; });
var m2vPre = m2vHistory.slice(0, (2008 - M2V_FROM_YEAR) * 4);
export var PULSE_PRE2008 = mean(m2vPre);
export var PULSE_STEADY_LO = pctl(m2vPre, 0.1) / PULSE_PRE2008, PULSE_STEADY_HI = pctl(m2vPre, 0.9) / PULSE_PRE2008;
export var PULSE_FLOOR = Math.min.apply(null, m2vPre) / PULSE_PRE2008, PULSE_CEIL = Math.max.apply(null, m2vPre) / PULSE_PRE2008;
export var PRODUCTIVITY_SRC: Src[] = [
  {t:"BLS \u2014 Productivity and Costs", u:"https://www.bls.gov/productivity/"},
  {t:"BLS Monthly Labor Review \u2014 The U.S. productivity slowdown (2021)", u:"https://www.bls.gov/opub/mlr/2021/article/the-us-productivity-slowdown-the-economy-wide-and-industry-level-analysis.htm"},
  {t:"BLS via FRED \u2014 Nonfarm Business Sector: Labor Productivity (OPHNFB)", u:"https://fred.stlouisfed.org/series/OPHNFB"}
];
export var DESIRE_SRC: Src[] = [
  {t:"BEA via FRED \u2014 Real personal consumption expenditures: durable goods, chain-type quantity index, monthly since 1959 (DDURRA3M086SBEA)", u:"https://fred.stlouisfed.org/series/DDURRA3M086SBEA"},
  {t:"BEA \u2014 Personal income and outlays, the monthly release behind the series", u:"https://www.bea.gov/data/income-saving/personal-income"}
];
export var PREMIUM_SRC: Src[] = [
  {t:"Robert Shiller \u2014 Online data, U.S. stock markets since 1871: the Excess CAPE Yield, monthly (ie_data.xls)", u:"https://shillerdata.com/#premium"}
];
export var CONFIDENCE_SRC: Src[] = [
  {t:"OECD \u2014 Consumer confidence index (CCI): amplitude adjusted, long-term average 100", u:"https://www.oecd.org/en/data/indicators/consumer-confidence-index-cci.html"},
  {t:"OECD Data Explorer \u2014 Composite leading indicators: consumer confidence (CCICP), United States, monthly", u:"https://data-explorer.oecd.org/vis?df[ds]=DisseminateFinalDMZ&df[id]=DSD_STES%40DF_CLI&df[ag]=OECD.SDD.STES"}
];
function checkVelocityHistory(){
  var hi = Math.max.apply(null, m2vHistory), lo = Math.min.apply(null, m2vHistory);
  if (m2vHistory.length !== 270 || Math.abs(hi - 2.192) > 1e-9 || Math.abs(lo - 1.126) > 1e-9)
    console.warn("m2vHistory failed its check", m2vHistory.length, hi, lo);
}
export var M2_FROM_YEAR = 1959;
var m2Level = SERIES.m2Level;
export var m2Yoy = m2Level.map(function(v, i){ return i < 4 ? null : (v / m2Level[i - 4] - 1) * 100; });
var m2Ref = m2Yoy.slice(4, 4 + (2020 - 1960) * 4) as number[];
export var M2_PACE_LO = round1(pctl(m2Ref, 0.1)), M2_PACE_HI = round1(pctl(m2Ref, 0.9)), M2_FLOOD = round1(Math.max.apply(null, m2Ref));
export var M2_NORM = 6.80;
var UNEMP_FROM_YEAR = 1948;
export var unempHistory = SERIES.unempHistory.map(function(t, i){
  var y = UNEMP_FROM_YEAR + ((i / 12) | 0), mo = (i % 12) + 1;
  return { m:y + "-" + ("0" + mo).slice(-2), v:t };
});
function checkUnemploymentHistory(){
  var vs = unempHistory.filter(function(d): d is { m: string; v: number } { return d.v != null; }).map(function(d){ return d.v; });
  var hi = Math.max.apply(null, vs), lo = Math.min.apply(null, vs);
  if (unempHistory.length !== 944 || Math.abs(hi - 14.8) > 1e-9 || Math.abs(lo - 2.5) > 1e-9 ||
      unempHistory[0].m !== "1948-01" || unempHistory[unempHistory.length - 1].m !== "2026-08")
    console.warn("unempHistory failed its check", unempHistory.length, lo, hi,
                 unempHistory[0].m, unempHistory[unempHistory.length - 1].m);
}
export var SAHM_TRIGGER = 0.5;
export var unempSahm = unempHistory.map(function(d, i){ return sahmAt(i); });
function avg3(i: number){
  var a = unempHistory.slice(i - 2, i + 1).map(function(d){ return d.v; });
  return i < 2 || a.some(function(v){ return v == null; }) ? null : mean(a as number[]);
}
function sahmAt(i: number){
  var now3 = avg3(i), low = Infinity;
  for (var j = i - 12; j < i; j++){ var a = j >= 0 ? avg3(j) : null; if (a == null) return null; low = Math.min(low, a); }
  return now3 == null ? null : now3 - low;
}
export function sahmOf(m: string){
  var i = (Number(m.slice(0, 4)) - UNEMP_FROM_YEAR) * 12 + Number(m.slice(5, 7)) - 1;
  return unempSahm[i] == null ? null : unempSahm[i];
}
export var NROU_NOW = 4.2;
function checkFedFundsHistory(){
  var vs = fedFundsHistory.map(function(d){ return d.v; });
  var hi = Math.max.apply(null, vs), lo = Math.min.apply(null, vs);
  if (!fedFundsHistory.length || fedFundsHistory[0].m !== "1954-07" || lo < 0 || hi < 19 || hi > 20)
    console.warn("fedFundsHistory failed its check", fedFundsHistory.length, lo, hi,
                 fedFundsHistory[0] && fedFundsHistory[0].m);
}
export var ACT_BAND_LO = 3.5, ACT_BAND_HI = 5;
export var CPI_TARGET = 2;
export var CLOCK_SRC: Src[] = [
  {t:"Merrill Lynch — The Investment Clock: Making Money from Macro (T. Greetham and M. Hartnett, 10 November 2004), as summarised in Introduction and Applications of the Investment Clock Theory (2024); the original report is not public", u:"https://www.researchgate.net/publication/377733341_Introduction_and_Applications_of_the_Investment_Clock_Theory"}
];
export var FED_TARGET_SRC = {t:"Federal Reserve — 2025 Statement on Longer-Run Goals and Monetary Policy Strategy", u:"https://www.federalreserve.gov/monetarypolicy/monetary-policy-strategy-tools-and-communications-statement-on-longer-run-goals-monetary-policy-strategy-2025.htm"};
export var TEMP_BAND_LO = 1, TEMP_BAND_HI = 3;
export var PCE_SWITCH_SRC = {t:"Federal Reserve — Monetary Policy Report to the Congress, February 17, 2000: the FOMC frames its inflation projections on the PCE chain-type price index rather than the CPI", u:"https://www.federalreserve.gov/boarddocs/hh/2000/february/ReportSection1.htm"};
export var PCE_SRC = {t:"BEA via FRED — Personal Consumption Expenditures: Chain-type Price Index (PCEPI), monthly", u:"https://fred.stlouisfed.org/series/PCEPI"};
export var GDP_NORM = 2.6;
function checkMoneyStock(){
  var g = m2Yoy.filter(function(x){ return x != null; });
  var hi = Math.max.apply(null, g), lo = Math.min.apply(null, g);
  if (m2Level.length !== 271 || Math.abs(hi - 25.61) > 0.02 || Math.abs(lo + 4.64) > 0.02)
    console.warn("m2Level failed its check", m2Level.length, hi.toFixed(2), lo.toFixed(2));
}
export var seasonReading: Record<Season, SeasonReading> = {
  summer: {
    body: "Peak fertility. Estrogen has crested and the LH surge has done its work; energy and desire are at their highest and everything in the body is built for going out and taking chances. Temperature dips briefly at ovulation and only then begins to climb.",
    economy: "Overheat. The economy is still growing at or above its potential but inflation sits above target, so the central bank is leaning against it."
  },
  autumn: {
    body: "Early luteal. Progesterone takes over from estrogen; temperature is up and stays up, energy is steady but turns inward, and the body settles into consolidation rather than display.",
    economy: "Disinflation. Growth has slipped below the economy’s potential and prices are cooling, though still at or above target. Rates stop rising and eventually fall, and the curve steepens."
  },
  lateautumn: {
    body: "Late luteal. Energy is falling, mood tightens, temperature is still elevated, and the body is preparing to shed — the premenstrual stretch, uncomfortable and unmistakable.",
    economy: "Stagflation. Growth runs below the economy’s potential while inflation heats up, so policy is boxed in: easing feeds the heat, tightening deepens the slowdown."
  },
  winter: {
    body: "Menstruation — groundation. Shedding, rest and the lowest energy of the cycle. The lining that was built up releases; the body is not failing, it is clearing the way.",
    economy: "Deflation, or close to it. Growth runs below its potential, prices and rates fall, and the bleed shows up on the Calendar as a down year for the market."
  },
  springdeflation: {
    body: "",
    economy: ""
  },
  spring: {
    body: "Follicular. Estrogen rises, the lining rebuilds, and energy returns day by day. Nothing is at its peak yet, but the direction is unmistakable.",
    economy: "Reflation. The economy is growing at or above its potential and prices are rising with it, still below or within target — the comfortable stretch before anything overheats."
  }
};
export var frameworkRows: FrameworkRow[] = [
  {indicator:"Hormones", body:"Rising estrogen / LH surge", economy:"Credit — money supply, lending growth", category:"Leading"},
  {indicator:"Cervical fluid", body:"Cervical mucus change", economy:"Credit spreads / yield curve", category:"Leading"},
  {indicator:"Psychology", body:"Emotional state", economy:"Investor sentiment, asset valuations", category:"Leading"},
  {indicator:"Effort", body:"Energy", economy:"Capital — GDP, profits", category:"Coincident"},
  {indicator:"Desire", body:"Desire / libido", economy:"Discretionary spending", category:"Coincident"},
  {indicator:"Activity", body:"Physical activity", economy:"Labor / employment", category:"Lagging"},
  {indicator:"Temperature", body:"Basal body temperature", economy:"Inflation", category:"Lagging"}
];
export var VIX_CONVENTION: Src[] = [
  {t:"Chase \u2014 What Is the VIX and How To Use It (below 20 stability, above 30 fear and uncertainty)", u:"https://www.chase.com/personal/investments/learning-and-insights/article/what-is-the-vix"},
  {t:"TD Direct Investing \u2014 Understanding VIX or Volatility Index (the same lines at 20 and 30)", u:"https://www.td.com/ca/en/investing/direct-investing/articles/understanding-vix"}
];
export var DSR_FROM_YEAR = 2005;
export var dsrHistory: number[] = dsrQuarterly.map(function(d){ return d.v; });
export var SAV_FROM_YEAR = 1947;
export var savHistory = SERIES.savHistory;
export var topTenQuarterly: QuarterPoint[] = SERIES.topTenQuarterly;
export var SAV_THIN = pctl(savHistory, 0.05), SAV_LOW = pctl(savHistory, 0.1), SAV_MID = pctl(savHistory, 0.5), SAV_HIGH = pctl(savHistory, 0.9);
function checkHouseholdHistories(){
  if (dsrQuarterly[0].q !== DSR_FROM_YEAR + " Q1") console.warn("dsrQuarterly failed its check", dsrQuarterly[0].q);
  var sHi = Math.max.apply(null, savHistory), sLo = Math.min.apply(null, savHistory);
  if (savHistory.length !== 318 || Math.abs(sHi - 24.4) > 1e-9 || Math.abs(sLo - 1.8) > 1e-9)
    console.warn("savHistory failed its check", savHistory.length, sHi, sLo);
}
export var DSR_MEAN = dsrHistory.reduce(function(a, b){ return a + b; }, 0) / dsrHistory.length;
export var curveNoteFull = "The 30-day VIX divided by the 3-month VIX \u2014 the SHAPE of expected volatility rather " +
  "than its level. Below 1.00 the curve slopes up, which is its ordinary state: insuring three months costs " +
  "more than insuring one, as it should. At 1.00 it is flat. Above 1.00 it is inverted, and near-term fear " +
  "costs more than three-month fear \u2014 the options market pricing something immediate. That threshold is the " +
  "definition of the shape rather than a level anyone chose, which is why this reading carries no band of " +
  "ours. It says what the VIX beside it cannot: the VIX is how MUCH fear is priced, this is WHERE IN TIME it " +
  "sits. A calm VIX on a steep curve is ordinary quiet; the same calm VIX on an inverted curve is a market " +
  "braced for something close. Read contrarian, like the rest of this panel \u2014 an inversion is uncomfortable " +
  "and inversions cluster near bottoms, while a very steep curve is the market paying almost nothing to be " +
  "wrong. Both legs are Cboe indices carried by FRED and published daily; the ratio is computed here from " +
  "the same VIX this page prints.";
export var VOL_JOIN = "1990-01";
export var sp500AnnualReturnSource: Src[] = [
  {t:"S&P Dow Jones Indices — S&P 500 (index originator; total-return figures)", u:"https://www.spglobal.com/spdji/en/indices/equity/sp-500/"},
  {t:"S&P 500 total returns by year (Slickcharts' compilation of S&P DJI's figures)", u:"https://www.slickcharts.com/sp500/returns"},
  {t:"NYU Stern (Damodaran) — Historical returns on stocks, bonds and bills, 1928– (the record before 1990, and an independent cross-check after)", u:"https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/histretSP.html"}
];
export var marketCycles: Cycle[] = [
  {
    from:1928, to:1932,
    name:"Great Depression Cycle",
    story:"The Roaring Twenties ended in the crash of October 1929, and bank failures, tight money and a tariff war turned it into the Great Depression. Mrs. Market fell from Euphoria into the deepest Despair in the record, four bear years in a row.",
    blurb:"The last boom year of the Twenties, then the crash of 1929 and three more years of falling prices, failing banks and lost jobs. It ends in 1932, at the bottom of the Great Depression.",
    rates:"The Fed tightened into the 1929 bubble, then again in 1931 to defend gold, turning a crash into deflation. Prices peaked in {month}."
  },
  {
    from:1933, to:1934,
    name:"New Deal Cycle",
    story:"Roosevelt closed the banks, took the dollar off gold and launched the New Deal, and 1933 became one of the best years in the record. Mrs. Market leapt from Depression to Hope in a few months, then lost her nerve in 1934 as the recovery came slowly.",
    blurb:"The New Deal: the bank holiday, the dollar off gold and the first relief programmes. It ends in 1934, a flat year after the leap of 1933.",
    rates:"Off gold, with the banks reopened, money was cheap again, and falling prices turned to rising, peaking in {month}."
  },
  {
    from:1935, to:1937,
    name:"Second New Deal Cycle",
    story:"Output climbed back toward its 1929 level, until the Fed raised reserve requirements and Washington cut spending in 1937. Mrs. Market grew Optimistic too soon and fell back into Fear in the recession of 1937–38.",
    blurb:"Two strong years of recovery, then the policy turn of 1937 and a sharp recession inside the Depression. It ends in 1937, one of the worst years in the record.",
    rates:"With rates at the floor, the Fed tightened by doubling bank reserves, and the recovery broke into the 1937 recession. Prices peaked in {month}."
  },
  {
    from:1938, to:1941,
    name:"Keynesian Cycle",
    story:"The market bounced in 1938, but war in Europe, the fall of France and then Pearl Harbor kept it falling for three years. Mrs. Market lived in Anxiety and Fear, even as war orders put the factories back to work.",
    blurb:"A rebound year, then three bear years as the war in Europe spreads and America is drawn in. It ends in 1941, the year of Pearl Harbor.",
    rates:"Gold fleeing a Europe at war kept money cheap; only the war orders woke prices, peaking in {month}."
  },
  {
    from:1942, to:1946,
    name:"WWII Cycle",
    story:"After Midway the tide of WWII turned, and war production with price controls carried four rising years to victory in 1945. Mrs. Market went from Hope to Euphoria, until controls ended in 1946, prices jumped and she fell back into Anxiety.",
    blurb:"The WWII economy at full stretch, from the turn of 1942 to victory in 1945. It ends in 1946, when price controls lift and inflation surges.",
    rates:"Rates were pinned low to fund the war and controls held prices, until the controls came off and prices surged to {peak} in {month}."
  },
  {
    from:1947, to:1953,
    name:"Baby Boom Cycle",
    story:"Soldiers came home and started families in record numbers, while Marshall Plan exports and then the Korean War kept the factories busy. Mrs. Market climbed out of the postwar slump into a steady Optimism that held for six years, until the war’s end and the 1953 recession brought her first Anxiety.",
    blurb:"The baby boom begins: new households, years of pent-up demand, Marshall Plan exports and then the Korean War. It ends in 1953, the year the war ended and military spending was cut.",
    rates:"Inflation hit {peak} in {month} while the Fed still held rates down for the Treasury, until the 1951 Accord set it free."
  },
  {
    from:1954, to:1957,
    name:"Suburban Cycle",
    story:"Cars, highways and new suburbs carried the economy, and 1954 became the best year in the record. Mrs. Market went from Hope to Euphoria in a single year, then slid into Anxiety as rates rose and the 1957 recession arrived.",
    blurb:"Out of the 1953–54 recession comes the best year in the record, 1954, and a boom in cars, highways and new suburbs. It ends with the recession of 1957.",
    rates:"The Fed leaned against the boom from 1955, and prices peaked in {month}, just before the 1957 recession."
  },
  {
    from:1958, to:1962,
    name:"Space Race Cycle",
    story:"Sputnik set off a race in rockets and electronics, and almost any company with “tronics” in its name found buyers. Mrs. Market rode that Excitement into Thrill, until the slide of 1962 turned it to Fear.",
    blurb:"Sputnik sets off a race in rockets and electronics, and the market chases the new technology stocks of the day. It ends in the slide of 1962.",
    rates:"A cut into the 1958 recession, a hike in 1959, and calm prices that peaked early, in {month}."
  },
  {
    from:1963, to:1966,
    name:"Great Society Cycle",
    story:"The 1964 tax cut and Johnson’s Great Society spending, then the build-up in Vietnam, stretched the long 1960s expansion. Mrs. Market was Thrilled and sure of herself, until inflation, rising rates and the credit crunch of 1966 left her Anxious.",
    blurb:"The 1964 tax cut, the Great Society programmes and a long expansion running hot. It ends in 1966 as rates climb and credit tightens.",
    rates:"War and welfare spending warmed prices to a peak in {month}, and the Fed's 1966 tightening brought a credit crunch."
  },
  {
    from:1967, to:1969,
    name:"Go-Stop Cycle",
    story:"Go-go fund managers traded growth stocks at speed, and conglomerates grew by buying everything in sight, their earnings flattered by the deals themselves. Mrs. Market was in Euphoria about them, and in Denial as inflation and the credit crunch of 1969 took them apart.",
    blurb:"The go-go funds and the conglomerates peak in 1968, with speculation running alongside. It ends in 1969 as inflation and rising rates catch up.",
    rates:"Easy money after the 1966 crunch, then hard tightening as inflation built. Prices peaked at the close, in {month}."
  },
  {
    from:1970, to:1974,
    name:"Nifty Fifty Cycle",
    story:"Investors crowded into fifty blue chips they believed could be bought at any price and held forever. Mrs. Market’s Euphoria turned to Fear with the oil embargo of 1973, and to Panic and Despair in 1974, her worst year since 1937.",
    blurb:"Investors crowd into fifty blue-chip growth stocks they believe can be bought at any price. It ends in the bear market of 1973–74, with the oil embargo and a deep recession.",
    rates:"The end of gold, the oil shock and lifted price controls sent inflation to {peak} in {month}, even with rates in double digits."
  },
  {
    from:1975, to:1977,
    name:"Bicentennial Cycle",
    story:"Out of the 1974 collapse came one of the sharpest rebounds in the record, +37% in 1975, and the rally ran into the Bicentennial year before topping out late in 1976. Mrs. Market moved from Despair back to Hope and Optimism, but inflation never left, and by 1977 she was Anxious again.",
    blurb:"A sharp recovery out of the 1973–74 collapse that tops out in the Bicentennial year, with inflation never far behind. It ends in 1977 as prices start to run again.",
    rates:"The Fed cut through the 1975 recession, but inflation never settled and climbed again, peaking in {month}."
  },
  {
    from:1978, to:1981,
    name:"Volcker Cycle",
    story:"Prices ran into double digits, and money fled into oil, gold and anything real. Mrs. Market was Excited but uneasy throughout, and fell into Fear in 1981 when Volcker raised rates high enough to break inflation.",
    blurb:"Inflation runs into double digits and hard assets like oil and gold lead, until Paul Volcker takes the Fed in 1979. It ends in 1981, when his rates, near 20%, break it.",
    rates:"Inflation peaked at {peak} in {month} as Volcker drove rates toward 20% to break it. It broke, at the cost of two recessions."
  },
  {
    from:1982, to:1990,
    name:"Buyout Cycle",
    story:"With inflation beaten and rates falling, a long bull market ran on junk bonds and leveraged buyouts. Mrs. Market’s Euphoria broke in the one-day Panic of October 1987, came back, and ended in Fear in 1990 with the savings-and-loan collapse and the Gulf War.",
    blurb:"The defeat of inflation opens a long bull market, fuelled by falling rates, junk bonds and leveraged buyouts, through the crash of 1987. It ends in 1990 with the savings-and-loan collapse, the Gulf War oil shock and recession.",
    rates:"Small, steady moves after 1982 kept inflation low until the Gulf War oil spike lifted it to a peak in {month}."
  },
  {
    from:1991, to:2002,
    name:"Dot-Com Cycle",
    story:"The internet promised a new economy, and the market believed it for nine straight years. Mrs. Market climbed from Hope to full Euphoria in 1999, then spent three years in Denial, Fear and finally Despair as the bubble burst.",
    blurb:"Nine years of uninterrupted growth out of the 1990–91 recession — confidence building all decade and cresting into the internet mania that gives the cycle its name — then three straight losing years to unwind it, a run of consecutive declines the market had not seen since the 1930s. The mania and its undoing are one story, and the cycle holds both.",
    rates:"Prices stayed calm, peaking modestly in {month}; the Fed hiked into the bubble in 1999–2000, then cut hard when it burst."
  },
  {
    from:2003, to:2008,
    name:"Housing Cycle",
    story:"Cheap money and easy mortgages made houses the boom, and the banks built a tower of debt on top of them. Mrs. Market was Optimistic and then Thrilled, until Lehman’s collapse in 2008 sent her into Panic and Despair.",
    blurb:"A rebuild out of the dot-com wreckage, carried by a housing boom that was quietly becoming the next crisis the whole way up. It ends where the boom had been heading all along: the subprime collapse, and the worst year the market had seen since 1931.",
    rates:"Cheap money fed the housing boom, seventeen hikes followed, and prices peaked with oil in {month}, just before the crash."
  },
  {
    from:2009, to:2018,
    name:"Big Tech Cycle",
    story:"Out of the crisis, near-zero rates and a handful of technology giants carried one of the longest bull markets on record. Mrs. Market crept from Despair to Hope and stayed Optimistic for a decade, until the trade war and rising rates left her Anxious at the end of 2018.",
    blurb:"One of the longest, steadiest bull markets on record — a decade of rebuilding led by a handful of technology giants that ended it carrying more of the index than any five companies before them. It closes on the trade-war scare of late 2018, the mildest ending of any cycle here: a stumble rather than a bust.",
    rates:"Seven years near zero, and prices barely stirred, peaking modestly in {month}."
  },
  {
    from:2019, to:2022,
    name:"COVID-19 Cycle",
    story:"A strong 2019, then the pandemic brought the fastest crash on record and the largest rescue ever attempted. Mrs. Market went from Panic to Euphoria inside a year, and into Fear in 2022 as inflation returned and the Fed raised rates at its fastest pace in decades.",
    blurb:"A strong year, then the fastest bear market in history as COVID-19 arrives — and one of the fastest recoveries on record, bought with the largest fiscal and monetary transfusion ever attempted. The bill arrives at the end: inflation at a four-decade high, and a sharp correction to close the cycle. Worth knowing that the pandemic crash itself never appears as a losing year — it fell and recovered inside 2020 — so this cycle's bleed is the inflation bear, not the virus.",
    rates:"Rates went to zero, then reopening and stimulus brought the highest inflation in forty years, peaking in {month}, and the fastest hikes since the 1980s."
  },
  {
    from:2023, to:null, ongoing:true,
    name:"AI Cycle",
    story:"Out of the 2022 correction, the build-out of artificial intelligence became the story everyone wanted to own. Mrs. Market has moved from Hope into Optimism and Excitement, and the cycle is still being written.",
    blurb:"Out of the 2022 correction, a bull run carried by the build-out of artificial intelligence. Three full years so far and the fourth under way, with no losing year in it yet. Still being written.",
    rates:"The Fed cut through 2024 and 2025, then tariffs and the oil shock of the Iran war turned prices up again, peaking so far in {month}. In September it raised rates for the first time since 2023."
  }
];
export var typicalCycleYears = 6;
export var typicalCycleSrc: Src[] = [
  {t:"First Trust — History of U.S. Bear & Bull Markets since 1942 (bull 51.0 months, bear 11.1, 1962–2022)", u:"https://www.ftportfolios.com/Commentary/MarketCommentary/2019/6/4/history-of-us-bear--bull-markets"},
  {t:"Fisher Investments — Stock Market Cycles (bull about 61 months, bear about 16, 1946–2018)", u:"https://www.fisherinvestments.com/en-us/resource-library/market-cycles"}
];

export var t10y3mHistory: QuarterPoint[], t10y2yHistory: QuarterPoint[], t3mYieldHistory: QuarterPoint[], t2yYieldHistory: QuarterPoint[], t5yYieldHistory: QuarterPoint[], t10yYieldHistory: QuarterPoint[], t30yYieldHistory: { q: string; v: number | null }[], usRealGdpGrowth: Record<string, number>, DEF_1983: number, sp500AnnualReturns: Record<string, number>, sp500Years: YearPoint[];

export function bootData(){
  liveInto("yieldCurve");
  t10y3mHistory = treasuryQuarterly.s3m;
  t10y2yHistory = treasuryQuarterly.s2y;
  // ---- Yield LEVELS by maturity, quarterly from Q1 2005 — not spreads, the actual yields themselves, ----
  t3mYieldHistory = treasuryQuarterly.m3;
  t2yYieldHistory = treasuryQuarterly.y2;
  t5yYieldHistory = treasuryQuarterly.y5;
  t10yYieldHistory = treasuryQuarterly.y10;
  t30yYieldHistory = treasuryQuarterly.y30;
  usRealGdpGrowth = merge(gdpGrowthBefore, {
    1990:1.89, 1991:-0.11, 1992:3.52, 1993:2.75, 1994:4.03, 1995:2.68, 1996:3.77, 1997:4.45, 1998:4.48, 1999:4.79,
    2000:4.08, 2001:0.96, 2002:1.70, 2003:2.80, 2004:3.85, 2005:3.48, 2006:2.78, 2007:2.00, 2008:0.11, 2009:-2.58,
    2010:2.70, 2011:1.56, 2012:2.29, 2013:2.12, 2014:2.52, 2015:2.95, 2016:1.82, 2017:2.46, 2018:2.97, 2019:2.58,
    2020:-2.08, 2021:6.15, 2022:2.52, 2023:2.93, 2024:2.79, 2025:2.16
  });
  GYN.step("checkDeficitHistory", checkDeficitHistory, "check");
  checkDeficitHistory();
  DEF_1983 = deficitHistory[1983 - DEF_FROM_YEAR];
  GYN.step("deriveUninvLag", deriveUninvLag, "derive");
  deriveUninvLag();
  GYN.step("syncFederal", syncFederal, "derive");
  syncFederal();
  GYN.step("deriveStress", deriveStress, "derive");
  deriveStress();
  GYN.step("checkFederal", checkFederal, "check");
  checkFederal();
  liveInto("sentiment");
  liveInto("vixClose");
  now.valuation.rows.sort(function(a, b){ return (a.key === "cape" ? 0 : 1) - (b.key === "cape" ? 0 : 1); });
  liveInto("valuation");
  GYN.step("checkVelocityHistory", checkVelocityHistory, "check");
  checkVelocityHistory();
  GYN.step("checkUnemploymentHistory", checkUnemploymentHistory, "check");
  checkUnemploymentHistory();
  GYN.step("checkFedFundsHistory", checkFedFundsHistory, "check");
  checkFedFundsHistory();
  GYN.step("checkMoneyStock", checkMoneyStock, "check");
  checkMoneyStock();
  now.vixRow = now.sentiment.rows[0];
  GYN.step("checkHouseholdHistories", checkHouseholdHistories, "check");
  checkHouseholdHistories();
  sp500AnnualReturns = merge(sp500ReturnsBefore, {
    1990:-3.10, 1991:30.47, 1992:7.62, 1993:10.08, 1994:1.32, 1995:37.58, 1996:22.96, 1997:33.36,
    1998:28.58, 1999:21.04, 2000:-9.10, 2001:-11.89, 2002:-22.10, 2003:28.68, 2004:10.88, 2005:4.91,
    2006:15.79, 2007:5.49, 2008:-37.00, 2009:26.46, 2010:15.06, 2011:2.11, 2012:16.00, 2013:32.39,
    2014:13.69, 2015:1.38, 2016:11.96, 2017:21.83, 2018:-4.38, 2019:31.49, 2020:18.40, 2021:28.71,
    2022:-18.11, 2023:26.29, 2024:25.02, 2025:17.88, 2026:14.40
  });
  // ---- The S&P 500, year by year ----
  sp500Years = Object.keys(sp500AnnualReturns).map(function(y){ return { y:+y, v:sp500AnnualReturns[y] }; });
}
