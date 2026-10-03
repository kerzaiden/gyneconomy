import { MONTHS_SHORT } from "./format.js";
import { GYN, LIVE, liveInto, liveIsoOf, merge } from "./live.js";
import { fedFundsHistory, fiscalHistory, gdpGrowthBefore, grossDebtQuarterly, sp500ReturnsBefore, treasuryQuarterly } from "./history-fred.js";

// ---- DATA (single source of truth — edit here on refresh) ----
export var yieldCurve = [
  {m:"1M",  y:4.01}, {m:"2M",  y:4.18}, {m:"3M",  y:4.24}, {m:"4M",  y:4.33}, {m:"6M",  y:4.34},
  {m:"1Y",  y:4.51}, {m:"2Y",  y:4.87}, {m:"3Y",  y:4.99}, {m:"5Y",  y:5.03}, {m:"7Y",  y:5.10},
  {m:"10Y", y:5.18}, {m:"20Y", y:5.53}, {m:"30Y", y:5.47}
];
var YIELD_CURVE_ASOF = "2026-09-24";
export function curveAsOf(){
  return liveIsoOf("yieldCurve") || YIELD_CURVE_ASOF;
}
export var t10y3mRecessions = [
  {from:"2007 Q4", to:"2009 Q2", label:"2007–09"},
  {from:"2020 Q1", to:"2020 Q2", label:"2020"}
];
// ---- Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey) ----
export var uninvLagCycles = [
  {cycle:"1989–91", uninv:"Sep 1989 – Jan 1990", recession:"Jul 1990", lag:"6–10 mo"},
  {cycle:"2001", uninv:"Jan–Feb 2001", recession:"Mar 2001", lag:"1–2 mo"},
  {cycle:"2007–09", uninv:"Jun–Aug 2007", recession:"Dec 2007", lag:"4–6 mo"},
  {cycle:"2020", uninv:"Oct 2019", recession:"Feb 2020", lag:"4 mo"}
];
export var uninvLagToday = {
  months: 21, altMonths: 12, altFrom: "September 2025",
  meter: { value: 21, min: 0, max: 26, optimal: {from: 1, to: 10, label: "1–10 mo (past cycles)"} }
};
export var gdpSrc = [{t:"World Bank — GDP growth, annual % (NY.GDP.MKTP.KD.ZG)", u:"https://data.worldbank.org/indicator/NY.GDP.MKTP.KD.ZG"},
  {t:"BEA via FRED — Real GDP, percent change from preceding period, annual, before 1990 (A191RL1A225NBEA)", u:"https://fred.stlouisfed.org/series/A191RL1A225NBEA"}];
var labPanel = [
  {
    sub:"gross federal debt ÷ GDP",
    meter:{min:0, max:125.9, value:122.6, optimal:{lte:70, label:"\u2264 70%"},
           ends:{ zone:"50-year average", high:"Elevated" }},
    shortNote:"Q1 2026 — above the WWII peak, and within reach of the 2020 record.",
    note:"Q1 2026, gross federal debt as a share of GDP (Treasury and BEA via FRED, GFDEGDQ188S) — the figure the headlines quote. Gross debt is everything the government owes: debt held by the public, which CBO puts at about 101% of GDP for FY2026, plus roughly a fifth of GDP it owes to its own accounts, mostly the Social Security trust funds. On this measure the WWII record is already broken: gross debt peaked at 119.1% in FY1946 and went higher in the pandemic, to 125.9% in FY2020 — the top of this bar (OMB via FRED, GFDGDPA188S, by fiscal year). The bar starts at zero, the one time the debt was effectively retired (1835, under Andrew Jackson — Treasury's own ledger shows just $33,733 outstanding). The green band ends at 70% of GDP: the average of this same series over the last fifty fiscal years, FY1976–FY2025. CBO publishes a 50-year average only for debt held by the public (51%), so this one is computed here, by CBO's rule — the same computation on the held series gives 50.5%, which is how the rule was checked. Today's 122.6% is about 1.75 times it.",
    direction:"up", flagValue:"122.6%", flagState:"serious",
    id:"sheet-metric-debt"
  },
  {
    sub:"net interest costs ÷ GDP",
    meter:{min:0.63, max:3.3, value:3.3, optimal:{lte:2, label:"\u2264 2.0%"},
           ends:{ zone:"50-year average", high:"High" }},
    shortNote:"FY2026, $1.0T — already the highest interest burden on record.",
    note:"FY2026, $1.0T, CBO's February 2026 projection. Already the highest on record — the previous peak was 3.2% in FY1991, and WWII's debt was bigger but financed near-zero, so this is uncharted territory (CBO: 4.6% by 2036). Bar runs from the FY1942 low (0.6%) to today. This is the one marker sitting right at the historic edge of its own range. The green band ends at 2.0% of GDP, CBO's 50-year average for net interest, which over that half-century ran between 1.2% and 3.2% — the 3.2% high was 1991.",
    direction:"up", flagValue:"3.3%", flagState:"critical",
    id:"sheet-metric-interest"
  },
  {
    sub:"federal deficit or surplus ÷ GDP",
    meter:{min:-2.3, max:26.9, value:5.8, optimal:{lte:3.8, label:"\u2264 3.8%"},
           ends:{ zone:"50-year average", high:"Large" }},
    shortNote:"FY2026, ~$1.9T — this size deficit once required a recession or a war. Neither is present.",
    note:"FY2026, ~$1.9T, CBO's February 2026 projection (FY2025 actual: 5.8%). Below emergency-level spikes, but deficits this size used to require a recession or a war — neither is present now. Range spans the largest surplus of the modern era (FY2000, +2.3% of GDP; the last one was FY2001, +1.2%) to the WWII deficit peak (FY1943, 26.9%), both from the OMB series on FRED. The green band ends at 3.8% of GDP, CBO's stated average deficit over the last fifty years; this year's 5.8% is half again as large.",
    direction:"up", flagValue:"5.8%", flagState:"serious",
    id:"sheet-marker-deficit"
  }
];
export function labRow(id){ return labPanel.filter(function(r){ return r.id === id; })[0]; }
export var PRODUCTIVITY_TREND = 2.1, PRODUCTIVITY_SLOWDOWN = 1.3;
// ---- Consumer confidence ----
export var CONFIDENCE_LINE = 100;
/* ---- Institutional trust is not in this panel ---- */
/* ---- The deficit, year by year ---- */
export var DEF_FROM_YEAR = 1946;
export var deficitHistory = (
  "-7.00 1.61 4.30 0.21 -1.04 1.76 -0.41 -1.67 -0.30 -0.70 0.88 0.72 -0.58 -2.46 0.06 -0.59 -1.18 -0.75 -0.86 -0.19 -0.45 -1.01 -2.67 0.32 -0.26 -1.98 -1.83 -1.05 -0.40 -3.16 -3.94 -2.58 -2.52 -1.55 -2.58 -2.46 -3.83 -5.72 -4.59 -4.89 -4.83 -3.08 -2.96 -2.71 -3.71 -4.37 -4.45 -3.72 -2.79 -2.15 -1.33 -0.26 0.76 1.30 2.30 1.21 -1.44 -3.30 -3.38 -2.44 -1.80 -1.11 -3.10 -9.76 -8.60 -8.33 -6.62 -4.03 -2.75 -2.42 -3.11 -3.39 -3.77 -4.57 -14.48 -11.69 -5.27 -6.07 -6.20 -5.77"
).split(" ").map(Number);
export var DEF_MEAN = deficitHistory.reduce(function(a, b){ return a + b; }, 0) / deficitHistory.length;
export var DEF_RECESSION_FY = {1949:1,1950:1,1954:1,1958:1,1960:1,1961:1,1970:1,1971:1,1974:1,1975:1,
                        1980:1,1981:1,1982:1,1983:1,1990:1,1991:1,2001:1,2002:1,2008:1,2009:1,2020:1};
function checkDeficitHistory(){
  var hi = Math.max.apply(null, deficitHistory), lo = Math.min.apply(null, deficitHistory);
  if (deficitHistory.length !== 80 || Math.abs(hi - 4.30) > 0.005 || Math.abs(lo + 14.48) > 0.005)
    console.warn("deficitHistory failed its check", deficitHistory.length, hi, lo);
}
export var fedFunds = { lo:3.75, hi:4.00, lastMove:"+0.25", lastMoveLabel:"raised a quarter point",
                 asOf:"Sep 16, 2026", vote:"12\u20130", next:"Oct 28, 2026" };
export function fedFundsRange(){
  return (fedFunds.lo === fedFunds.hi ? fedFunds.lo.toFixed(2)
          : fedFunds.lo.toFixed(2) + "\u2013" + fedFunds.hi.toFixed(2)) + "%";
}
export var buffettHistory = [{q:"1970 Q1",v:64.5},{q:"1970 Q2",v:50.8},{q:"1970 Q3",v:58.4},{q:"1970 Q4",v:64.5},{q:"1971 Q1",v:68.3},{q:"1971 Q2",v:67.3},{q:"1971 Q3",v:65.0},{q:"1971 Q4",v:69.2},{q:"1972 Q1",v:70.9},{q:"1972 Q2",v:69.1},{q:"1972 Q3",v:69.2},{q:"1972 Q4",v:77.7},{q:"1973 Q1",v:70.5},{q:"1973 Q2",v:63.9},{q:"1973 Q3",v:66.5},{q:"1973 Q4",v:54.8},{q:"1974 Q1",v:52.6},{q:"1974 Q2",v:47.3},{q:"1974 Q3",v:34.6},{q:"1974 Q4",v:34.9},{q:"1975 Q1",v:42.4},{q:"1975 Q2",v:47.9},{q:"1975 Q3",v:41.0},{q:"1975 Q4",v:42.8},{q:"1976 Q1",v:47.7},{q:"1976 Q2",v:47.9},{q:"1976 Q3",v:47.6},{q:"1976 Q4",v:47.9},{q:"1977 Q1",v:43.1},{q:"1977 Q2",v:42.9},{q:"1977 Q3",v:39.9},{q:"1977 Q4",v:37.8},{q:"1978 Q1",v:35.1},{q:"1978 Q2",v:35.7},{q:"1978 Q3",v:37.4},{q:"1978 Q4",v:34.6},{q:"1979 Q1",v:36.1},{q:"1979 Q2",v:35.5},{q:"1979 Q3",v:36.8},{q:"1979 Q4",v:37.3},{q:"1980 Q1",v:34.3},{q:"1980 Q2",v:38.5},{q:"1980 Q3",v:42.5},{q:"1980 Q4",v:45.1},{q:"1981 Q1",v:43.2},{q:"1981 Q2",v:41.6},{q:"1981 Q3",v:34.8},{q:"1981 Q4",v:37.4},{q:"1982 Q1",v:33.3},{q:"1982 Q2",v:32.2},{q:"1982 Q3",v:34.8},{q:"1982 Q4",v:40.7},{q:"1983 Q1",v:44.2},{q:"1983 Q2",v:48.5},{q:"1983 Q3",v:46.3},{q:"1983 Q4",v:43.0},{q:"1984 Q1",v:39.1},{q:"1984 Q2",v:36.3},{q:"1984 Q3",v:37.8},{q:"1984 Q4",v:37.5},{q:"1985 Q1",v:39.5},{q:"1985 Q2",v:40.6},{q:"1985 Q3",v:37.4},{q:"1985 Q4",v:43.2},{q:"1986 Q1",v:47.4},{q:"1986 Q2",v:49.4},{q:"1986 Q3",v:44.1},{q:"1986 Q4",v:48.1},{q:"1987 Q1",v:57.4},{q:"1987 Q2",v:57.9},{q:"1987 Q3",v:60.3},{q:"1987 Q4",v:45.7},{q:"1988 Q1",v:47.7},{q:"1988 Q2",v:48.5},{q:"1988 Q3",v:46.6},{q:"1988 Q4",v:47.4},{q:"1989 Q1",v:48.5},{q:"1989 Q2",v:50.6},{q:"1989 Q3",v:53.7},{q:"1989 Q4",v:54.6},{q:"1990 Q1",v:51.2},{q:"1990 Q2",v:52.6},{q:"1990 Q3",v:44.1},{q:"1990 Q4",v:49.2},{q:"1991 Q1",v:56.3},{q:"1991 Q2",v:54.8},{q:"1991 Q3",v:57.0},{q:"1991 Q4",v:63.9},{q:"1992 Q1",v:61.5},{q:"1992 Q2",v:59.9},{q:"1992 Q3",v:60.5},{q:"1992 Q4",v:65.4},{q:"1993 Q1",v:66.8},{q:"1993 Q2",v:66.3},{q:"1993 Q3",v:67.5},{q:"1993 Q4",v:69.4},{q:"1994 Q1",v:65.5},{q:"1994 Q2",v:63.1},{q:"1994 Q3",v:65.9},{q:"1994 Q4",v:64.8},{q:"1995 Q1",v:69.2},{q:"1995 Q2",v:74.3},{q:"1995 Q3",v:78.9},{q:"1995 Q4",v:83.0},{q:"1996 Q1",v:85.5},{q:"1996 Q2",v:87.6},{q:"1996 Q3",v:87.3},{q:"1996 Q4",v:89.6},{q:"1997 Q1",v:89.1},{q:"1997 Q2",v:100.9},{q:"1997 Q3",v:107.4},{q:"1997 Q4",v:107.6},{q:"1998 Q1",v:121.7},{q:"1998 Q2",v:122.4},{q:"1998 Q3",v:108.7},{q:"1998 Q4",v:127.8},{q:"1999 Q1",v:129.2},{q:"1999 Q2",v:138.7},{q:"1999 Q3",v:131.1},{q:"1999 Q4",v:155.4},{q:"2000 Q1",v:162.6},{q:"2000 Q2",v:152.4},{q:"2000 Q3",v:147.9},{q:"2000 Q4",v:128.0},{q:"2001 Q1",v:112.7},{q:"2001 Q2",v:119.4},{q:"2001 Q3",v:100.1},{q:"2001 Q4",v:112.0},{q:"2002 Q1",v:111.3},{q:"2002 Q2",v:95.7},{q:"2002 Q3",v:78.9},{q:"2002 Q4",v:83.8},{q:"2003 Q1",v:80.7},{q:"2003 Q2",v:91.6},{q:"2003 Q3",v:93.1},{q:"2003 Q4",v:101.3},{q:"2004 Q1",v:103.5},{q:"2004 Q2",v:104.3},{q:"2004 Q3",v:100.3},{q:"2004 Q4",v:107.9},{q:"2005 Q1",v:105.5},{q:"2005 Q2",v:106.3},{q:"2005 Q3",v:108.2},{q:"2005 Q4",v:106.7},{q:"2006 Q1",v:112.0},{q:"2006 Q2",v:107.2},{q:"2006 Q3",v:109.2},{q:"2006 Q4",v:114.1},{q:"2007 Q1",v:117.2},{q:"2007 Q2",v:120.8},{q:"2007 Q3",v:120.6},{q:"2007 Q4",v:114.9},{q:"2008 Q1",v:106.1},{q:"2008 Q2",v:103.9},{q:"2008 Q3",v:92.8},{q:"2008 Q4",v:75.6},{q:"2009 Q1",v:69.0},{q:"2009 Q2",v:78.9},{q:"2009 Q3",v:89.8},{q:"2009 Q4",v:93.3},{q:"2010 Q1",v:96.3},{q:"2010 Q2",v:85.3},{q:"2010 Q3",v:93.5},{q:"2010 Q4",v:101.7},{q:"2011 Q1",v:107.9},{q:"2011 Q2",v:106.1},{q:"2011 Q3",v:90.7},{q:"2011 Q4",v:98.4},{q:"2012 Q1",v:105.9},{q:"2012 Q2",v:102.1},{q:"2012 Q3",v:108.1},{q:"2012 Q4",v:106.5},{q:"2013 Q1",v:117.9},{q:"2013 Q2",v:119.5},{q:"2013 Q3",v:124.3},{q:"2013 Q4",v:131.9},{q:"2014 Q1",v:136.3},{q:"2014 Q2",v:139.9},{q:"2014 Q3",v:136.6},{q:"2014 Q4",v:141.3},{q:"2015 Q1",v:141.1},{q:"2015 Q2",v:137.8},{q:"2015 Q3",v:126.5},{q:"2015 Q4",v:132.1},{q:"2016 Q1",v:133.6},{q:"2016 Q2",v:134.9},{q:"2016 Q3",v:136.8},{q:"2016 Q4",v:135.4},{q:"2017 Q1",v:141.4},{q:"2017 Q2",v:142.5},{q:"2017 Q3",v:144.5},{q:"2017 Q4",v:149.8},{q:"2018 Q1",v:146.3},{q:"2018 Q2",v:149.9},{q:"2018 Q3",v:156.5},{q:"2018 Q4",v:133.5},{q:"2019 Q1",v:150.8},{q:"2019 Q2",v:152.5},{q:"2019 Q3",v:151.0},{q:"2019 Q4",v:159.9},{q:"2020 Q1",v:128.8},{q:"2020 Q2",v:173.1},{q:"2020 Q3",v:175.6},{q:"2020 Q4",v:198.3},{q:"2021 Q1",v:205.9},{q:"2021 Q2",v:215.7},{q:"2021 Q3",v:210.8},{q:"2021 Q4",v:218.7},{q:"2022 Q1",v:202.9},{q:"2022 Q2",v:163.8},{q:"2022 Q3",v:153.3},{q:"2022 Q4",v:157.1},{q:"2023 Q1",v:166.9},{q:"2023 Q2",v:177.7},{q:"2023 Q3",v:167.2},{q:"2023 Q4",v:182.1},{q:"2024 Q1",v:197.3},{q:"2024 Q2",v:199.7},{q:"2024 Q3",v:208.0},{q:"2024 Q4",v:210.5},{q:"2025 Q1",v:197.8},{q:"2025 Q2",v:214.3},{q:"2025 Q3",v:226.4},{q:"2025 Q4",v:229.1},{q:"2026 Q1",v:219.7},{q:"2026 Q2",v:255.7}];
export var HY_NORM_LO = 3.5, HY_NORM_HI = 6;
export var hyDates = "230925 230926 230927 230928 230929 230930 231002 231003 231004 231005 231006 231009 231010 231011 231012 231013 231016 231017 231018 231019 231020 231023 231024 231025 231026 231027 231030 231031 231101 231102 231103 231106 231107 231108 231109 231110 231113 231114 231115 231116 231117 231120 231121 231122 231123 231124 231127 231128 231129 231130 231201 231204 231205 231206 231207 231208 231211 231212 231213 231214 231215 231218 231219 231220 231221 231222 231226 231227 231228 231229 231231 240102 240103 240104 240105 240108 240109 240110 240111 240112 240115 240116 240117 240118 240119 240122 240123 240124 240125 240126 240129 240130 240131 240201 240202 240205 240206 240207 240208 240209 240212 240213 240214 240215 240216 240219 240220 240221 240222 240223 240226 240227 240228 240229 240301 240304 240305 240306 240307 240308 240311 240312 240313 240314 240315 240318 240319 240320 240321 240322 240325 240326 240327 240328 240331 240401 240402 240403 240404 240405 240408 240409 240410 240411 240412 240415 240416 240417 240418 240419 240422 240423 240424 240425 240426 240429 240430 240501 240502 240503 240506 240507 240508 240509 240510 240513 240514 240515 240516 240517 240520 240521 240522 240523 240524 240527 240528 240529 240530 240531 240603 240604 240605 240606 240607 240610 240611 240612 240613 240614 240617 240618 240619 240620 240621 240624 240625 240626 240627 240628 240630 240701 240702 240703 240704 240705 240708 240709 240710 240711 240712 240715 240716 240717 240718 240719 240722 240723 240724 240725 240726 240729 240730 240731 240801 240802 240805 240806 240807 240808 240809 240812 240813 240814 240815 240816 240819 240820 240821 240822 240823 240826 240827 240828 240829 240830 240831 240902 240903 240904 240905 240906 240909 240910 240911 240912 240913 240916 240917 240918 240919 240920 240923 240924 240925 240926 240927 240930 241001 241002 241003 241004 241007 241008 241009 241010 241011 241014 241015 241016 241017 241018 241021 241022 241023 241024 241025 241028 241029 241030 241031 241101 241104 241105 241106 241107 241108 241111 241112 241113 241114 241115 241118 241119 241120 241121 241122 241125 241126 241127 241128 241129 241130 241202 241203 241204 241205 241206 241209 241210 241211 241212 241213 241216 241217 241218 241219 241220 241223 241224 241226 241227 241230 241231 250102 250103 250106 250107 250108 250109 250110 250113 250114 250115 250116 250117 250120 250121 250122 250123 250124 250127 250128 250129 250130 250131 250203 250204 250205 250206 250207 250210 250211 250212 250213 250214 250217 250218 250219 250220 250221 250224 250225 250226 250227 250228 250303 250304 250305 250306 250307 250310 250311 250312 250313 250314 250317 250318 250319 250320 250321 250324 250325 250326 250327 250328 250331 250401 250402 250403 250404 250407 250408 250409 250410 250411 250414 250415 250416 250417 250421 250422 250423 250424 250425 250428 250429 250430 250501 250502 250505 250506 250507 250508 250509 250512 250513 250514 250515 250516 250519 250520 250521 250522 250523 250526 250527 250528 250529 250530 250531 250602 250603 250604 250605 250606 250609 250610 250611 250612 250613 250616 250617 250618 250619 250620 250623 250624 250625 250626 250627 250630 250701 250702 250703 250704 250707 250708 250709 250710 250711 250714 250715 250716 250717 250718 250721 250722 250723 250724 250725 250728 250729 250730 250731 250801 250804 250805 250806 250807 250808 250811 250812 250813 250814 250815 250818 250819 250820 250821 250822 250825 250826 250827 250828 250829 250831 250901 250902 250903 250904 250905 250908 250909 250910 250911 250912 250915 250916 250917 250918 250919 250922 250923 250924 250925 250926 250929 250930 251001 251002 251003 251006 251007 251008 251009 251010 251013 251014 251015 251016 251017 251020 251021 251022 251023 251024 251027 251028 251029 251030 251031 251103 251104 251105 251106 251107 251110 251111 251112 251113 251114 251117 251118 251119 251120 251121 251124 251125 251126 251127 251128 251130 251201 251202 251203 251204 251205 251208 251209 251210 251211 251212 251215 251216 251217 251218 251219 251222 251223 251224 251226 251229 251230 251231 260102 260105 260106 260107 260108 260109 260112 260113 260114 260115 260116 260119 260120 260121 260122 260123 260126 260127 260128 260129 260130 260131 260202 260203 260204 260205 260206 260209 260210 260211 260212 260213 260216 260217 260218 260219 260220 260223 260224 260225 260226 260227 260228 260302 260303 260304 260305 260306 260309 260310 260311 260312 260313 260316 260317 260318 260319 260320 260323 260324 260325 260326 260327 260330 260331 260401 260402 260403 260406 260407 260408 260409 260410 260413 260414 260415 260416 260417 260420 260421 260422 260423 260424 260427 260428 260429 260430 260501 260504 260505 260506 260507 260508 260511 260512 260513 260514 260515 260518 260519 260520 260521 260522 260525 260526 260527 260528 260529 260531 260601 260602 260603 260604 260605 260608 260609 260610 260611 260612 260615 260616 260617 260618 260619 260622 260623 260624 260625 260626 260629 260630 260701 260702 260703 260706 260707 260708 260709 260710 260713 260714 260715 260716 260717 260720 260721 260722 260723 260724 260727 260728 260729 260730 260731 260803 260804 260805 260806 260807 260810 260811 260812 260813 260814 260817 260818 260819 260820 260821 260824 260825 260826 260827 260828 260831 260901 260902 260903 260904 260907 260908 260909 260910 260911 260914 260915 260916 260917 260918 260921 260922 260923".split(" ");
export var hyOas = "3.97 4.04 4.03 4.09 4.03 4.03 4.11 4.26 4.37 4.38 4.33 4.34 4.26 4.25 4.25 4.3 4.27 4.25 4.32 4.37 4.52 4.51 4.41 4.37 4.5 4.53 4.5 4.42 4.47 4.15 4.04 4 4.08 4.08 4.04 4.03 4.03 3.92 3.89 4.02 3.99 3.92 3.95 3.9 3.9 3.85 3.89 3.9 3.8 3.84 3.87 3.8 3.8 3.79 3.77 3.75 3.79 3.76 3.79 3.47 3.51 3.51 3.46 3.43 3.41 3.39 3.37 3.34 3.32 3.34 3.39 3.54 3.71 3.69 3.68 3.63 3.59 3.5 3.55 3.56 3.54 3.58 3.62 3.58 3.54 3.49 3.51 3.44 3.45 3.39 3.41 3.42 3.59 3.56 3.47 3.5 3.52 3.43 3.38 3.33 3.35 3.36 3.38 3.35 3.34 3.34 3.37 3.34 3.22 3.23 3.23 3.26 3.31 3.29 3.32 3.26 3.31 3.27 3.27 3.26 3.26 3.2 3.15 3.15 3.16 3.13 3.1 3.14 3.05 3.08 3.11 3.15 3.15 3.12 3.15 3.12 3.23 3.23 3.24 3.18 3.15 3.14 3.1 3.16 3.25 3.28 3.36 3.42 3.39 3.37 3.29 3.2 3.19 3.24 3.16 3.12 3.18 3.21 3.16 3.08 3.03 3.06 3.1 3.14 3.12 3.14 3.14 3.13 3.08 3.09 3.07 3.07 3.11 3.1 3.11 3.12 3.09 3.15 3.19 3.2 3.17 3.22 3.2 3.2 3.15 3.15 3.19 3.09 3.2 3.29 3.26 3.24 3.24 3.23 3.21 3.19 3.19 3.18 3.21 3.18 3.21 3.21 3.23 3.25 3.25 3.27 3.2 3.21 3.17 3.18 3.19 3.13 3.08 3.09 3.09 3.09 3.05 3.02 3.1 3.08 3.1 3.13 3.2 3.25 3.35 3.72 3.93 3.67 3.57 3.48 3.49 3.52 3.54 3.46 3.31 3.29 3.21 3.25 3.27 3.21 3.19 3.15 3.17 3.19 3.15 3.13 3.17 3.17 3.31 3.35 3.29 3.39 3.36 3.46 3.44 3.39 3.37 3.32 3.25 3.21 3.1 3.15 3.15 3.21 3.19 3.14 3.14 3.03 3.07 3.06 3.04 2.89 2.95 2.99 2.94 2.99 2.98 2.97 2.93 2.9 2.89 2.88 2.88 2.92 2.95 2.93 2.89 2.82 2.85 2.8 2.88 2.83 2.87 2.86 2.74 2.73 2.63 2.63 2.61 2.64 2.6 2.72 2.72 2.69 2.67 2.61 2.61 2.64 2.68 2.69 2.69 2.72 2.74 2.68 2.66 2.66 2.66 2.67 2.67 2.67 2.64 2.66 2.68 2.69 2.75 2.73 2.91 2.86 2.85 2.86 2.86 2.84 2.94 2.92 2.88 2.81 2.76 2.79 2.84 2.82 2.81 2.85 2.8 2.72 2.73 2.64 2.64 2.61 2.59 2.61 2.6 2.66 2.66 2.68 2.67 2.68 2.73 2.71 2.69 2.66 2.67 2.66 2.66 2.65 2.65 2.62 2.62 2.62 2.68 2.66 2.78 2.78 2.84 2.81 2.81 2.87 2.94 2.99 2.88 2.99 2.97 3.16 3.22 3.2 3.4 3.25 3.18 3.23 3.19 3.17 3.21 3.05 3.09 3.19 3.27 3.47 3.55 3.5 3.42 4.01 4.45 4.61 4.57 4.37 4.42 4.26 4.14 4.09 4.16 4.02 4.16 3.99 3.75 3.73 3.67 3.73 3.74 3.94 3.78 3.6 3.6 3.66 3.67 3.51 3.53 3.15 3.09 3.1 3.2 3.16 3.21 3.2 3.25 3.32 3.4 3.4 3.24 3.23 3.22 3.31 3.32 3.27 3.19 3.23 3.18 3.09 3.12 3.12 3.12 3.17 3.18 3.1 3.17 3.16 3.16 3.13 3.12 3.06 3.04 3.04 3.02 2.96 2.91 2.88 2.8 2.8 2.86 2.92 2.94 2.92 2.97 2.95 2.95 3 2.91 2.93 2.89 2.9 2.83 2.82 2.84 2.82 2.86 2.89 2.86 3.13 3.02 2.98 2.98 2.95 2.94 2.94 2.93 2.9 2.89 2.88 2.88 2.9 2.94 2.95 2.88 2.8 2.78 2.78 2.75 2.82 2.84 2.84 2.92 2.88 2.84 2.83 2.84 2.87 2.84 2.78 2.79 2.75 2.79 2.79 2.71 2.72 2.69 2.71 2.7 2.76 2.75 2.74 2.8 2.81 2.81 2.8 2.76 2.82 2.84 2.95 3.18 3.18 3.11 2.95 3.04 3.04 2.99 2.97 3.01 2.96 2.88 2.8 2.82 2.76 2.85 2.94 3.04 3.13 3.05 3.13 3.15 3.02 3.02 3.02 3.09 3.07 3.13 3.2 3.17 3.17 3.19 3.15 3.1 3 3 2.95 2.92 2.94 2.92 2.89 2.88 2.85 2.89 2.89 2.91 2.88 2.91 2.91 2.98 2.99 2.95 2.9 2.88 2.83 2.84 2.86 2.87 2.84 2.81 2.83 2.81 2.79 2.79 2.76 2.74 2.74 2.75 2.76 2.71 2.65 2.65 2.73 2.69 2.64 2.68 2.69 2.71 2.72 2.77 2.8 2.88 2.81 2.85 2.86 2.97 2.87 2.84 2.86 2.84 2.92 2.95 2.94 2.94 2.86 2.88 2.86 2.95 2.97 2.94 2.98 3.1 3.12 3.03 3.08 2.97 3 3.13 3.19 3.06 3.09 3.17 3.28 3.27 3.22 3.2 3.27 3.24 3.19 3.19 3.17 3.21 3.42 3.46 3.28 3.16 3.17 3.13 3.05 3.12 2.94 2.9 2.94 2.95 2.84 2.85 2.86 2.83 2.87 2.85 2.84 2.86 2.86 2.84 2.85 2.82 2.83 2.77 2.78 2.77 2.75 2.79 2.81 2.79 2.82 2.82 2.76 2.8 2.83 2.86 2.8 2.78 2.74 2.74 2.72 2.71 2.72 2.72 2.74 2.72 2.71 2.75 2.74 2.76 2.75 2.78 2.8 2.78 2.71 2.66 2.71 2.63 2.66 2.66 2.65 2.71 2.76 2.78 2.83 2.8 2.75 2.74 2.75 2.74 2.72 2.67 2.7 2.7 2.69 2.69 2.72 2.71 2.71 2.73 2.69 2.69 2.68 2.77 2.79 2.81 2.84 2.87 2.84 2.85 2.78 2.73 2.75 2.71 2.7 2.7 2.72 2.71 2.71 2.67 2.7 2.75 2.73 2.75 2.7 2.69 2.7 2.67 2.63 2.6 2.63 2.65 2.66 2.65 2.68 2.68 2.67 2.71 2.7 2.65 2.71 2.76 2.7 2.7 2.68 2.66 2.68 2.73".split(" ").map(Number);
function checkDesireWindow(){
  if (hyDates.length !== hyOas.length) console.warn("Desire: dates and values out of step");
  var hi = Math.max.apply(null, hyOas), lo = Math.min.apply(null, hyOas);
  if (hi.toFixed(2) !== "4.61" || lo.toFixed(2) !== "2.59")
    console.warn("Desire: window extremes moved — expected 4.61 / 2.59, got " + hi + " / " + lo);
}
export function hyAt(i){
  var t = hyDates[i];
  return { y:2000 + +t.slice(0, 2), m:+t.slice(2, 4), d:+t.slice(4, 6) };
}
export function hyLabel(i){ var t = hyAt(i); return MONTHS_SHORT[t.m - 1] + " " + t.d + " " + t.y; }
export function hyNum(i){ var a = hyAt(i); return a.y * 10000 + a.m * 100 + a.d; }
export function hyQuarters(){
  var out = [];
  hyDates.forEach(function(t, i){
    var a = hyAt(i), k = a.y + " Q" + Math.ceil(a.m / 3), last = out[out.length - 1];
    if (last && last.k === k) last.v = hyOas[i]; else out.push({ k:k, v:hyOas[i] });
  });
  return out;
}
export function hyQuarterEnds(){ return hyQuarters().map(function(o){ return o.v; }); }
export var capeHistory = [{y:1970,v:17.09},{y:1971,v:16.46},{y:1972,v:17.26},{y:1973,v:18.71},{y:1974,v:13.53},{y:1975,v:8.92},{y:1976,v:11.19},{y:1977,v:11.44},{y:1978,v:9.24},{y:1979,v:9.26},{y:1980,v:8.85},{y:1981,v:9.26},{y:1982,v:7.39},{y:1983,v:8.76},{y:1984,v:9.89},{y:1985,v:10.0},{y:1986,v:11.72},{y:1987,v:14.92},{y:1988,v:13.9},{y:1989,v:15.09},{y:1990,v:17.05},{y:1991,v:15.61},{y:1992,v:19.77},{y:1993,v:20.32},{y:1994,v:21.41},{y:1995,v:20.22},{y:1996,v:24.76},{y:1997,v:28.33},{y:1998,v:32.86},{y:1999,v:40.57},{y:2000,v:43.77},{y:2001,v:36.98},{y:2002,v:30.28},{y:2003,v:22.9},{y:2004,v:27.66},{y:2005,v:26.59},{y:2006,v:26.47},{y:2007,v:27.21},{y:2008,v:24.02},{y:2009,v:15.17},{y:2010,v:20.53},{y:2011,v:22.98},{y:2012,v:21.21},{y:2013,v:21.9},{y:2014,v:24.86},{y:2015,v:26.49},{y:2016,v:24.21},{y:2017,v:28.06},{y:2018,v:33.31},{y:2019,v:28.38},{y:2020,v:30.99},{y:2021,v:34.51},{y:2022,v:36.94},{y:2023,v:28.34},{y:2024,v:31.97},{y:2025,v:37.14},{y:2026,v:39.65}];
export var longCycleSrc = [
  {t:"CBO — The Budget and Economic Outlook: 2026 to 2036 (Feb 2026)", u:"https://www.cbo.gov/publication/62105"},
  {t:"Treasury and BEA via FRED — Total public debt, % of GDP, quarterly, 1966– (GFDEGDQ188S; today's reading)", u:"https://fred.stlouisfed.org/series/GFDEGDQ188S"},
  {t:"OMB via FRED — Gross federal debt, % of GDP, FY1939– (GFDGDPA188S; the record and the band)", u:"https://fred.stlouisfed.org/series/GFDGDPA188S"},
  {t:"OMB via FRED — Federal debt held by the public, % of GDP, FY1939– (FYPUGDA188S)", u:"https://fred.stlouisfed.org/series/FYPUGDA188S"},
  {t:"OMB via FRED — Federal interest outlays, % of GDP, FY1940– (FYOIGDA188S)", u:"https://fred.stlouisfed.org/series/FYOIGDA188S"},
  {t:"OMB via FRED — Federal surplus or deficit, % of GDP, FY1929– (FYFSGDA188S)", u:"https://fred.stlouisfed.org/series/FYFSGDA188S"},
  {t:"OMB Historical Tables (Tables 1.2, 3.1 and 7.1 — the source series behind the three FRED lines above)", u:"https://www.whitehouse.gov/omb/information-resources/budget/historical-tables/"},
  {t:"U.S. Treasury Fiscal Data — Historical Debt Outstanding, 1790– (the 1835 low point)", u:"https://fiscaldata.treasury.gov/datasets/historical-debt-outstanding/historical-debt-outstanding"},
  {t:"U.S. Treasury Fiscal Data — Debt to the Penny (today's total)", u:"https://fiscaldata.treasury.gov/datasets/debt-to-the-penny/debt-to-the-penny"},
  {t:"BLS via FRED — Nonfarm business output per hour, quarterly index (OPHNFB); the annual averages behind the productivity line", u:"https://fred.stlouisfed.org/series/OPHNFB"},
  {t:"CBO — Federal Net Interest Costs: A Primer", u:"https://www.cbo.gov/publication/56910"},
  {t:"BLS — Productivity and Costs, Second Quarter 2026 (revised)", u:"https://www.bls.gov/news.release/archives/prod2_09032026.htm"},
  {t:"BLS via FRED — Nonfarm business output per hour, index (OPHNFB) and quarterly % change (PRS85006092), 1947–", u:"https://fred.stlouisfed.org/series/PRS85006092"}
];
function checkGrossDebt(){
  if (typeof fiscalHistory === "undefined" || !fiscalHistory.gross) return console.warn("checkGrossDebt: no fiscalHistory");
  var row = labRow("sheet-metric-debt"), by = function(a){ var o = {}; a.forEach(function(d){ o[d.y] = d.v; }); return o; };
  var g = by(fiscalHistory.gross), it = by(fiscalHistory.interest), bu = by(fiscalHistory.budget), bad = [];
  var top = fiscalHistory.gross.reduce(function(a, d){ return d.v > a.v ? d : a; });
  if (Math.abs(row.meter.max - top.v) > 0.05) bad.push("max " + row.meter.max + " vs FY" + top.y + " " + top.v);
  var last = grossDebtQuarterly[grossDebtQuarterly.length - 1];
  if (Math.abs(row.meter.value - last.v) > 0.05) bad.push("value " + row.meter.value + " vs " + last.q + " " + last.v);
  var sum = 0, n = 0; for (var y = 1976; y <= 2025; y++) if (g[y] != null){ sum += g[y]; n++; }
  if (n !== 50 || Math.round(sum / n) !== row.meter.optimal.lte) bad.push("band " + row.meter.optimal.lte + " vs " + (sum / n).toFixed(2) + " over " + n);
  if (bad.length) console.warn("checkGrossDebt: " + bad.join("; "));
}
export var sentiment = {
  kicker:"How she feels right now",
  hint:"Her mood, fast and contrarian: what the option market is paying for protection, what lenders demand to take risk, and how much she is borrowing to bet on herself.",
  tag:{text:"Greedy", state:"serious"},
  rows:[
    { marker:"CBOE VIX", sub:"Sep 22 2026",
      meter:{min:9.14,max:82.69,value:14.21,optimal:{lte:20, label:"below 20"}, ends:{zone:"Calm", high:"Elevated"}},
      shortNote:"Eased to a fresh multi-week low while stocks stayed calm — complacency compounding on complacency.",
      note:"The price of protection, and so the cleanest read on fear in the equity market: it is what options traders are paying to insure against a fall over the next 30 days. It fell through the week after the FOMC's surprise quarter-point hike \u2014 17.71 on Sep 16, 15.44 on Sep 17, 14.81 on Sep 18 (Cboe closes) — held essentially flat into the new week at 14.87 on Sep 21, then eased further to 14.21 on Sep 22 \u2014 still well below the ~19\u201320 long-run average. A calm options market alongside a quiet one is the more ordinary pairing — but calm bought this cheap, this close to fresh highs, is still calm. Read it contrarian: a low VIX is not good news, it is the absence of worry, and the extremes at both ends are the signal. It is also the slower of the two fear gauges: credit usually cracks before equity volatility does \u2014 spreads widened through 2007 while the VIX stayed calm \u2014 so Desire, which reads the high-yield spread, is worth checking against this one. Range: the index's record closing low (9.14, Nov 3 2017) and high (82.69, Mar 16 2020), both published by Cboe.",
      direction:"up", flagValue:"14.2", flagState:"warning" }
  ],
  shortImpression:"The published gauge says fear; the two markets it is built on say almost none is priced.",
  impression:"Two things are true at once and the panel shows both. The headline index reads Fear, because it is built mostly of momentum and breadth and the market has been sliding for a month. The two markets underneath it read the opposite: the option market is paying almost nothing for protection and lenders are asking almost nothing to take credit risk, which is the same sentence said twice. Sentiment has turned while almost no fear is priced in against forty years of history. None of this forecasts a fall \u2014 a contrarian read is not a timer, and complacency can last for years \u2014 but it is the condition in which a shock is expensive.",
  src:[{t:"Cboe via FRED \u2014 CBOE Volatility Index, daily closes since 1990 (VIXCLS)", u:"https://fred.stlouisfed.org/series/VIXCLS"},{t:"Cboe via FRED \u2014 CBOE S&P 100 Volatility Index (VXO), the original VIX, daily closes 1986\u20132021 (VXOCLS)", u:"https://fred.stlouisfed.org/series/VXOCLS"},{t:"Cboe via FRED \u2014 CBOE S&P 500 3-Month Volatility Index, daily closes (VXVCLS)", u:"https://fred.stlouisfed.org/series/VXVCLS"},{t:"Cboe \u2014 Inside Volatility Trading: the VIX record low (9.14, Nov 3 2017) and high (82.69, Mar 16 2020)", u:"https://www.cboe.com/insights/posts/inside-volatility-trading-nothing-remains-unchanged/"},{t:"Federal Reserve \u2014 FOMC statement, Sep 16 2026", u:"https://www.federalreserve.gov/newsevents/pressreleases/monetary20260916a.htm"},{t:"S&P DJI via FRED \u2014 S&P 500 daily closes (SP500)", u:"https://fred.stlouisfed.org/series/SP500"},{t:"S&P DJI via FRED \u2014 Dow Jones Industrial Average daily closes (DJIA)", u:"https://fred.stlouisfed.org/series/DJIA"},{t:"Federal Reserve via FRED \u2014 10-year Treasury constant-maturity yield, daily (DGS10)", u:"https://fred.stlouisfed.org/series/DGS10"},{t:"ICE Data Indices via FRED \u2014 ICE BofA US High Yield Index Option-Adjusted Spread (BAMLH0A0HYM2)", u:"https://fred.stlouisfed.org/series/BAMLH0A0HYM2"}]
};
export var valuation = {
  kicker:"What she is priced at",
  hint:"Slow and structural: what the market is willing to pay for her. A ten-year return predictor, not a read on the next twelve months \u2014 CAPE passed 30 in 2017 and the market rose for four more years.",
  tag:null,
  rows:[
    { key:"buffett", marker:"Buffett indicator", sub:"market cap \u00f7 GDP, Q2 2026",
      meter:{min:32,max:256,value:256,optimal:{lte:80, label:"\u2264 80%"}, ends:{zone:"Buffett\u2019s zone", high:"Rich"}},
      shortNote:"The highest reading in the 80-year record \u2014 above the 2021 and dot-com peaks.",
      note:"Warren Buffett's own gauge of capital relative to the real economy. Computed here straight from the Federal Reserve's Financial Accounts (Z.1): the market value of nonfinancial corporate equities ($83.1T at end-Q2 2026) divided by nominal GDP ($32.5T annualized, Q2 2026) \u2014 the same definition the widely quoted charts use. At \u2248256% this is the highest reading in the 80-year record, clear of the 2021 peak (\u2248219%) and the dot-com peak (\u2248163%); the record low is \u224832% (Q2 1982).",
      direction:"up", flagValue:"\u2248256%", flagState:"serious" },
    { key:"cape", marker:"Shiller CAPE", sub:"cyclically-adjusted P/E ratio",
      meter:{min:4.78,max:44.19,value:40.58,optimal:{lte:17, label:"\u2264 17\u00d7"}, ends:{zone:"Long-run mean", high:"Rich"}},
      shortNote:"Among the richest readings on record, just shy of the dot-com peak.",
      note:"Cyclically-adjusted P/E (Shiller's own series, September 2026) vs. its ~17\u00d7 long-run average \u2014 among the richest readings on record, just shy of the all-time dot-com peak. Range: Robert Shiller's monthly series since 1871, from 4.78 (Dec 1920) to 44.19 (Dec 1999). The band ends at 17\u00d7, which is that series' own long-run mean (17.42) rather than a target \u2014 there is no level a market ought to trade at.",
      direction:"up", flagValue:"40.6\u00d7", flagState:"serious" }
  ],
  shortImpression:"Both gauges are at or near their record \u2014 she is priced for everything to keep going right.",
  impression:"Two independent measures of the same thing, both at or near the richest readings ever recorded: capital is worth 2.5 times the economy that produces it, and prices are 41 times a decade of earnings. Valuations are close to useless as a timing signal \u2014 they have been stretched for years and the market kept rising. What it reliably says is what the next decade's returns are likely to look like from here, and that a shock arriving at this price has further to fall before anything looks cheap.",
  src:[{t:"Federal Reserve Z.1 via FRED \u2014 Nonfinancial corporate equities, market value (NCBEILQ027S)", u:"https://fred.stlouisfed.org/series/NCBEILQ027S"},{t:"BEA via FRED \u2014 Gross Domestic Product, nominal (GDP)", u:"https://fred.stlouisfed.org/series/GDP"},{t:"Robert Shiller \u2014 U.S. stock market data and CAPE ratio since 1871 (Yale)", u:"https://shillerdata.com/"}]
};
export function valRow(k){
  for (var i = 0; i < valuation.rows.length; i++) if (valuation.rows[i].key === k) return valuation.rows[i];
  return null;
}
export var CAPE_FAIR = 17;
export var PULSE_PRE2008 = 1.857;
export var M2V_FROM_YEAR = 1959;
export var m2vHistory = (
  "1773 1789 1773 1779 1817 1797 1780 1737 1723 1725 1733 1742 1746 1728 1726 1701 1690 1675 1680 1672 1685 " +
  "1679 1674 1652 1668 1669 1680 1693 1713 1712 1733 1744 1739 1708 1695 1691 1715 1733 1730 1722 1737 1749 " +
  "1774 1773 1789 1804 1795 1752 1770 1736 1717 1690 1696 1703 1679 1673 1694 1711 1711 1739 1725 1748 1764 " +
  "1781 1766 1741 1739 1750 1752 1731 1717 1699 1690 1701 1713 1715 1713 1780 1795 1822 1832 1835 1846 1857 " +
  "1870 1847 1831 1874 1928 1900 1925 1888 1843 1835 1825 1804 1745 1753 1779 1797 1812 1819 1829 1818 1799 " +
  "1795 1795 1793 1792 1760 1741 1722 1718 1734 1751 1776 1768 1774 1789 1813 1841 1861 1853 1834 1848 1859 " +
  "1856 1839 1827 1833 1850 1861 1875 1905 1931 1950 1971 1985 1997 2023 2047 2080 2103 2138 2155 2151 2142 " +
  "2146 2147 2165 2171 2176 2174 2189 2192 2184 2171 2154 2154 2140 2130 2124 2127 2145 2135 2150 2139 2132 " +
  "2085 2057 2011 1978 1967 1969 1950 1924 1913 1899 1903 1938 1948 1938 1947 1956 1983 1993 1998 1999 2015 " +
  "2015 2003 1994 1992 1983 1974 1974 1937 1923 1904 1810 1733 1705 1707 1722 1736 1742 1744 1741 1723 1708 " +
  "1651 1644 1639 1627 1608 1582 1580 1570 1569 1560 1538 1545 1550 1537 1520 1525 1519 1497 1471 1462 1455 " +
  "1447 1440 1434 1438 1447 1457 1461 1463 1461 1455 1456 1451 1435 1390 1126 1176 1165 1155 1150 1152 1163 " +
  "1163 1191 1219 1252 1287 1324 1351 1369 1373 1387 1393 1392 1390 1395 1407 1409 1413 1415"
).split(" ").map(function(n){ return +n / 1000; });
export var PRODUCTIVITY_SRC = [
  {t:"BLS \u2014 Productivity and Costs", u:"https://www.bls.gov/productivity/"},
  {t:"BLS Monthly Labor Review \u2014 The U.S. productivity slowdown (2021)", u:"https://www.bls.gov/opub/mlr/2021/article/the-us-productivity-slowdown-the-economy-wide-and-industry-level-analysis.htm"},
  {t:"BLS via FRED \u2014 Nonfarm Business Sector: Labor Productivity (OPHNFB)", u:"https://fred.stlouisfed.org/series/OPHNFB"}
];
export var CONFIDENCE_SRC = [
  {t:"OECD \u2014 Consumer confidence index (CCI): amplitude adjusted, long-term average 100", u:"https://www.oecd.org/en/data/indicators/consumer-confidence-index-cci.html"},
  {t:"OECD Data Explorer \u2014 Composite leading indicators: consumer confidence (CCICP), United States, monthly", u:"https://data-explorer.oecd.org/vis?df[ds]=DisseminateFinalDMZ&df[id]=DSD_STES%40DF_CLI&df[ag]=OECD.SDD.STES"}
];
function checkVelocityHistory(){
  var hi = Math.max.apply(null, m2vHistory), lo = Math.min.apply(null, m2vHistory);
  if (m2vHistory.length !== 270 || Math.abs(hi - 2.192) > 1e-9 || Math.abs(lo - 1.126) > 1e-9)
    console.warn("m2vHistory failed its check", m2vHistory.length, hi, lo);
}
export var M2_FROM_YEAR = 1959;
var m2Level = (
  "286.6 290.1 295.2 296.5 298.2 300.1 304.1 309.5 314.1 319.9 325.6 331.1 337.5 345.5 350.8 357.2 365.2 " +
  "373.3 381.1 388.3 395.2 401.7 410.1 419.1 427.5 435.5 442.9 452.6 462.0 469.3 470.8 475.7 481.6 492.1 " +
  "506.3 518.2 527.4 535.7 545.6 557.6 569.3 575.7 579.5 583.4 589.6 588.4 599.1 616.4 633.0 658.4 679.6 " +
  "698.4 717.7 738.4 759.5 786.9 810.3 819.7 836.5 842.6 859.7 872.9 881.4 893.3 906.3 935.1 975.1 997.8 " +
  "1026.7 1060.8 1086.3 1125.0 1165.2 1199.6 1226.8 1254.0 1279.7 1300.3 1324.2 1352.4 1371.6 1402.1 1434.8 " +
  "1460.4 1482.7 1502.2 1545.5 1584.7 1607.0 1659.2 1681.9 1721.7 1770.4 1804.0 1831.6 1869.4 1959.4 2028.9 " +
  "2064.9 2098.8 2138.0 2192.1 2223.6 2258.4 2332.1 2375.8 2429.6 2467.6 2501.6 2558.1 2626.6 2687.1 2743.3 " +
  "2767.8 2779.0 2814.7 2846.9 2910.4 2947.2 2965.4 2991.2 3005.5 3052.5 3114.3 3166.3 3201.2 3224.7 3259.2 " +
  "3287.4 3331.9 3356.2 3360.0 3380.9 3399.2 3393.9 3423.9 3418.9 3410.7 3441.9 3456.9 3474.8 3480.5 3488.1 " +
  "3484.8 3492.2 3498.2 3567.5 3614.1 3647.4 3696.4 3737.5 3773.4 3834.0 3875.8 3924.9 3992.7 4055.2 4138.9 " +
  "4205.4 4308.2 4401.7 4459.9 4537.6 4592.9 4666.1 4766.4 4793.4 4871.4 4976.8 5137.9 5212.0 5344.0 5459.6 " +
  "5501.3 5597.6 5707.3 5811.1 5904.9 6050.4 6070.2 6081.3 6198.5 6292.3 6379.9 6429.9 6461.4 6545.1 6644.0 " +
  "6728.4 6806.3 6896.1 7002.1 7115.6 7239.9 7321.8 7429.0 7513.6 7711.4 7794.9 7976.3 8284.2 8390.2 8467.3 " +
  "8489.2 8473.1 8554.3 8642.3 8769.8 8844.5 9033.6 9346.9 9586.2 9753.3 9905.0 10076.0 10294.4 10502.3 " +
  "10608.9 10743.0 10989.2 11127.5 11276.0 11452.5 11596.5 11806.2 11953.4 12063.5 12228.4 12522.2 12741.9 " +
  "12907.3 13124.5 13318.9 13520.3 13638.5 13801.5 13902.4 14034.8 14170.0 14257.6 14460.2 14594.0 14882.7 " +
  "15185.6 15425.0 17064.0 18331.4 18759.9 19375.3 20174.2 20630.0 21164.2 21647.4 21768.4 21649.3 21464.1 " +
  "21274.0 20758.4 20792.2 20737.5 20835.5 20955.5 21098.8 21336.7 21539.3 21770.8 22025.5 22249.8 22413.4 " +
  "22756.7 23218.0"
).split(" ").map(Number);
export var m2Yoy = m2Level.map(function(v, i){ return i < 4 ? null : (v / m2Level[i - 4] - 1) * 100; });
export var M2_NORM = 6.80;
var UNEMP_FROM_YEAR = 1948;
export var unempHistory = (
  "3.4 3.8 4.0 3.9 3.5 3.6 3.6 3.9 3.8 3.7 3.8 4.0 4.3 4.7 5.0 5.3 6.1 6.2 6.7 6.8 6.6 7.9 6.4 6.6 6.5 6.4 6.3 5.8 5.5 5.4 5.0 4.5 4.4 4.2 4.2 4.3 3.7 3.4 3.4 3.1 3.0 3.2 3.1 3.1 3.3 3.5 3.5 3.1 3.2 3.1 2.9 2.9 3.0 3.0 3.2 3.4 3.1 3.0 2.8 2.7 2.9 2.6 2.6 2.7 2.5 2.5 2.6 2.7 2.9 3.1 3.5 4.5 4.9 5.2 5.7 5.9 5.9 5.6 5.8 6.0 6.1 5.7 5.3 5.0 4.9 4.7 4.6 4.7 4.3 4.2 4.0 4.2 4.1 4.3 4.2 4.2 4.0 3.9 4.2 4.0 4.3 4.3 4.4 4.1 3.9 3.9 4.3 4.2 4.2 3.9 3.7 3.9 4.1 4.3 4.2 4.1 4.4 4.5 5.1 5.2 5.8 6.4 6.7 7.4 7.4 7.3 7.5 7.4 7.1 6.7 6.2 6.2 6.0 5.9 5.6 5.2 5.1 5.0 5.1 5.2 5.5 5.7 5.8 5.3 5.2 4.8 5.4 5.2 5.1 5.4 5.5 5.6 5.5 6.1 6.1 6.6 6.6 6.9 6.9 7.0 7.1 6.9 7.0 6.6 6.7 6.5 6.1 6.0 5.8 5.5 5.6 5.6 5.5 5.5 5.4 5.7 5.6 5.4 5.7 5.5 5.7 5.9 5.7 5.7 5.9 5.6 5.6 5.4 5.5 5.5 5.7 5.5 5.6 5.4 5.4 5.3 5.1 5.2 4.9 5.0 5.1 5.1 4.8 5.0 4.9 5.1 4.7 4.8 4.6 4.6 4.4 4.4 4.3 4.2 4.1 4.0 4.0 3.8 3.8 3.8 3.9 3.8 3.8 3.8 3.7 3.7 3.6 3.8 3.9 3.8 3.8 3.8 3.8 3.9 3.8 3.8 3.8 4.0 3.9 3.8 3.7 3.8 3.7 3.5 3.5 3.7 3.7 3.5 3.4 3.4 3.4 3.4 3.4 3.4 3.4 3.4 3.4 3.5 3.5 3.5 3.7 3.7 3.5 3.5 3.9 4.2 4.4 4.6 4.8 4.9 5.0 5.1 5.4 5.5 5.9 6.1 5.9 5.9 6.0 5.9 5.9 5.9 6.0 6.1 6.0 5.8 6.0 6.0 5.8 5.7 5.8 5.7 5.7 5.7 5.6 5.6 5.5 5.6 5.3 5.2 4.9 5.0 4.9 5.0 4.9 4.9 4.8 4.8 4.8 4.6 4.8 4.9 5.1 5.2 5.1 5.1 5.1 5.4 5.5 5.5 5.9 6.0 6.6 7.2 8.1 8.1 8.6 8.8 9.0 8.8 8.6 8.4 8.4 8.4 8.3 8.2 7.9 7.7 7.6 7.7 7.4 7.6 7.8 7.8 7.6 7.7 7.8 7.8 7.5 7.6 7.4 7.2 7.0 7.2 6.9 7.0 6.8 6.8 6.8 6.4 6.4 6.3 6.3 6.1 6.0 5.9 6.2 5.9 6.0 5.8 5.9 6.0 5.9 5.9 5.8 5.8 5.6 5.7 5.7 6.0 5.9 6.0 5.9 6.0 6.3 6.3 6.3 6.9 7.5 7.6 7.8 7.7 7.5 7.5 7.5 7.2 7.5 7.4 7.4 7.2 7.5 7.5 7.2 7.4 7.6 7.9 8.3 8.5 8.6 8.9 9.0 9.3 9.4 9.6 9.8 9.8 10.1 10.4 10.8 10.8 10.4 10.4 10.3 10.2 10.1 10.1 9.4 9.5 9.2 8.8 8.5 8.3 8.0 7.8 7.8 7.7 7.4 7.2 7.5 7.5 7.3 7.4 7.2 7.3 7.3 7.2 7.2 7.3 7.2 7.4 7.4 7.1 7.1 7.1 7.0 7.0 6.7 7.2 7.2 7.1 7.2 7.2 7.0 6.9 7.0 7.0 6.9 6.6 6.6 6.6 6.6 6.3 6.3 6.2 6.1 6.0 5.9 6.0 5.8 5.7 5.7 5.7 5.7 5.4 5.6 5.4 5.4 5.6 5.4 5.4 5.3 5.3 5.4 5.2 5.0 5.2 5.2 5.3 5.2 5.2 5.3 5.3 5.4 5.4 5.4 5.3 5.2 5.4 5.4 5.2 5.5 5.7 5.9 5.9 6.2 6.3 6.4 6.6 6.8 6.7 6.9 6.9 6.8 6.9 6.9 7.0 7.0 7.3 7.3 7.4 7.4 7.4 7.6 7.8 7.7 7.6 7.6 7.3 7.4 7.4 7.3 7.1 7.0 7.1 7.1 7.0 6.9 6.8 6.7 6.8 6.6 6.5 6.6 6.6 6.5 6.4 6.1 6.1 6.1 6.0 5.9 5.8 5.6 5.5 5.6 5.4 5.4 5.8 5.6 5.6 5.7 5.7 5.6 5.5 5.6 5.6 5.6 5.5 5.5 5.6 5.6 5.3 5.5 5.1 5.2 5.2 5.4 5.4 5.3 5.2 5.2 5.1 4.9 5.0 4.9 4.8 4.9 4.7 4.6 4.7 4.6 4.6 4.7 4.3 4.4 4.5 4.5 4.5 4.6 4.5 4.4 4.4 4.3 4.4 4.2 4.3 4.2 4.3 4.3 4.2 4.2 4.1 4.1 4.0 4.0 4.1 4.0 3.8 4.0 4.0 4.0 4.1 3.9 3.9 3.9 3.9 4.2 4.2 4.3 4.4 4.3 4.5 4.6 4.9 5.0 5.3 5.5 5.7 5.7 5.7 5.7 5.9 5.8 5.8 5.8 5.7 5.7 5.7 5.9 6.0 5.8 5.9 5.9 6.0 6.1 6.3 6.2 6.1 6.1 6.0 5.8 5.7 5.7 5.6 5.8 5.6 5.6 5.6 5.5 5.4 5.4 5.5 5.4 5.4 5.3 5.4 5.2 5.2 5.1 5.0 5.0 4.9 5.0 5.0 5.0 4.9 4.7 4.8 4.7 4.7 4.6 4.6 4.7 4.7 4.5 4.4 4.5 4.4 4.6 4.5 4.4 4.5 4.4 4.6 4.7 4.6 4.7 4.7 4.7 5.0 5.0 4.9 5.1 5.0 5.4 5.6 5.8 6.1 6.1 6.5 6.8 7.3 7.8 8.3 8.7 9.0 9.4 9.5 9.5 9.6 9.8 10.0 9.9 9.9 9.8 9.8 9.9 9.9 9.6 9.4 9.4 9.5 9.5 9.4 9.8 9.3 9.1 9.0 9.0 9.1 9.0 9.1 9.0 9.0 9.0 8.8 8.6 8.5 8.3 8.3 8.2 8.2 8.2 8.2 8.2 8.1 7.8 7.8 7.7 7.9 8.0 7.7 7.5 7.6 7.5 7.5 7.3 7.2 7.2 7.2 6.9 6.7 6.6 6.7 6.7 6.2 6.3 6.1 6.2 6.1 5.9 5.7 5.8 5.6 5.7 5.5 5.4 5.4 5.6 5.3 5.2 5.1 5.0 5.0 5.1 5.0 4.8 4.9 5.0 5.1 4.8 4.9 4.8 4.9 5.0 4.9 4.7 4.7 4.7 4.6 4.4 4.4 4.4 4.3 4.3 4.4 4.3 4.2 4.2 4.1 4.0 4.1 4.0 4.0 3.8 4.0 3.8 3.8 3.7 3.8 3.8 3.9 4.0 3.8 3.8 3.7 3.6 3.6 3.7 3.6 3.5 3.6 3.6 3.6 3.6 3.5 4.4 14.8 13.2 11.0 10.2 8.4 7.8 6.9 6.7 6.7 6.4 6.2 6.1 6.1 5.8 5.9 5.4 5.1 4.7 4.5 4.1 3.9 4.0 3.9 3.7 3.7 3.6 3.6 3.5 3.6 3.5 3.6 3.6 3.5 3.5 3.6 3.5 3.4 3.6 3.6 3.5 3.7 3.7 3.9 3.7 3.8 3.7 3.9 3.9 3.9 3.9 4.1 4.2 4.2 4.1 4.1 4.2 4.1 4.0 4.2 4.2 4.2 4.3 4.1 4.3 4.3 4.4 x 4.5 4.4 4.3 4.4 4.3 4.3 4.3 4.2 4.1 4.1"
).split(" ").map(function(t, i){
  var y = UNEMP_FROM_YEAR + ((i / 12) | 0), mo = (i % 12) + 1;
  return { m:y + "-" + ("0" + mo).slice(-2), v:(t === "x" ? null : Number(t)) };
});
function checkUnemploymentHistory(){
  var vs = unempHistory.filter(function(d){ return d.v != null; }).map(function(d){ return d.v; });
  var hi = Math.max.apply(null, vs), lo = Math.min.apply(null, vs);
  if (unempHistory.length !== 944 || Math.abs(hi - 14.8) > 1e-9 || Math.abs(lo - 2.5) > 1e-9 ||
      unempHistory[0].m !== "1948-01" || unempHistory[unempHistory.length - 1].m !== "2026-08")
    console.warn("unempHistory failed its check", unempHistory.length, lo, hi,
                 unempHistory[0].m, unempHistory[unempHistory.length - 1].m);
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
export var GDP_NORM = 2.6;
function checkMoneyStock(){
  var g = m2Yoy.filter(function(x){ return x != null; });
  var hi = Math.max.apply(null, g), lo = Math.min.apply(null, g);
  if (m2Level.length !== 271 || Math.abs(hi - 25.61) > 0.02 || Math.abs(lo + 4.64) > 0.02)
    console.warn("m2Level failed its check", m2Level.length, hi.toFixed(2), lo.toFixed(2));
}
export var seasonReading = {
  summer: {
    body: "Peak fertility. Estrogen has crested and the LH surge has done its work; energy and desire are at their highest and everything in the body is built for going out and taking chances. Temperature dips briefly at ovulation and only then begins to climb.",
    economy: "Overheat. Growth is still running but inflation sits above target, so the central bank is leaning against it.",
    next: "Autumn — disinflation. Temperature (CPI) rolls over and the pressure comes off. The turn shows up first in the leading signs (credit, the curve, sentiment) and is confirmed months later by the lagging ones (temperature, activity).",
    watch: ["Temperature (CPI) and whether the Fed moves at its next meeting", "Cervical fluid — the 10Y–3M curve flattening or re-inverting", "Sentiment and valuation stretched at the same time (VIX calm, CAPE rich)"],
    fromTheBook: []
  },
  autumn: {
    body: "Early luteal. Progesterone takes over from estrogen; temperature is up and stays up, energy is steady but turns inward, and the body settles into consolidation rather than display.",
    economy: "Disinflation. Growth is slowing and prices are cooling, though still at or above target. Rates stop rising and eventually fall, and the curve steepens.",
    next: "Autumn — stagflation, if prices turn back up while growth keeps slowing; or Winter, if prices fall below target first.",
    watch: ["Activity — unemployment starting to drift up", "Hormones — credit growth and lending standards", "Whether temperature keeps falling or gets stuck above target"],
    fromTheBook: []
  },
  lateautumn: {
    body: "Late luteal. Energy is falling, mood tightens, temperature is still elevated, and the body is preparing to shed — the premenstrual stretch, uncomfortable and unmistakable.",
    economy: "Stagflation. Growth is slowing while inflation stays sticky, so policy is boxed in: easing feeds the heat, tightening deepens the slowdown.",
    next: "Winter — the bleed. Historically the leading signs have already turned by now (an inverted or un-inverting curve, widening credit spreads); the bleed itself confirms months later in prices and activity.",
    watch: ["Cervical fluid — the curve un-inverting after an inversion (the Analysis tab's lag panel has the record)", "Desire — high-yield spreads widening", "Sentiment — cracking (VIX spikes)"],
    fromTheBook: []
  },
  winter: {
    body: "Menstruation — groundation. Shedding, rest and the lowest energy of the cycle. The lining that was built up releases; the body is not failing, it is clearing the way.",
    economy: "Deflation, or close to it. Output contracts, prices and rates fall, and the bleed shows up on the Calendar as a down year for the market.",
    next: "Spring, once policy has loosened enough for credit to begin flowing again and growth turns up — reflation if prices have already begun heating back up, or a further stretch of Spring – deflation if they are still cooling as growth turns.",
    watch: ["Hormones — money supply and lending growth turning up", "Cervical fluid — the curve steepening sharply as short rates fall", "The Calendar — the next year closing up after the down year"],
    fromTheBook: []
  },
  springdeflation: {
    body: "",
    economy: "",
    next: "",
    watch: [],
    fromTheBook: []
  },
  spring: {
    body: "Follicular. Estrogen rises, the lining rebuilds, and energy returns day by day. Nothing is at its peak yet, but the direction is unmistakable.",
    economy: "Reflation. Growth is rising and prices have begun to rise with it, still below or within target — the comfortable stretch before anything overheats.",
    next: "Summer — inflation, once prices rise through the top of the target range while growth keeps rising.",
    watch: ["Temperature — inflation approaching the top of its range", "Cervical fluid — the curve steepening as growth is priced in", "Sentiment and valuation starting to stretch"],
    fromTheBook: []
  }
};
export var frameworkRows = [
  {indicator:"Hormones", body:"Rising estrogen / LH surge", economy:"Credit — money supply, lending growth", category:"Leading"},
  {indicator:"Cervical fluid", body:"Cervical mucus change", economy:"Credit spreads / yield curve", category:"Leading"},
  {indicator:"Psychology", body:"Emotional state", economy:"Investor sentiment, asset valuations", category:"Leading"},
  {indicator:"Effort", body:"Energy", economy:"Capital — GDP, profits", category:"Coincident"},
  {indicator:"Desire", body:"Desire / libido", economy:"Risk tolerance", category:"Coincident"},
  {indicator:"Activity", body:"Physical activity", economy:"Labor / employment", category:"Lagging"},
  {indicator:"Temperature", body:"Basal body temperature", economy:"Inflation", category:"Lagging"}
];
export var VIX_CALM = 20, VIX_FEAR = 30;
export var VIX_CONVENTION = [
  {t:"Chase \u2014 What Is the VIX and How To Use It (below 20 stability, above 30 fear and uncertainty)", u:"https://www.chase.com/personal/investments/learning-and-insights/article/what-is-the-vix"},
  {t:"TD Direct Investing \u2014 Understanding VIX or Volatility Index (the same lines at 20 and 30)", u:"https://www.td.com/ca/en/investing/direct-investing/articles/understanding-vix"}
];
export var DSR_FROM_YEAR = 2005;
export var dsrHistory = [14.799802,14.828576,15.139959,15.028550,14.989443,15.044255,15.367228,15.509711,15.526607,15.632510,15.712123,15.846367,15.775857,15.326612,15.546547,15.721360,15.597500,15.251967,15.085880,14.896385,14.514940,14.069775,13.917807,13.580863,13.308460,13.057706,12.944597,12.749684,12.237059,12.034065,12.083107,11.754033,12.006598,11.794391,11.837713,11.985283,11.883758,11.621140,11.646947,11.631993,11.556634,11.485147,11.606488,11.738976,11.763247,11.766109,11.769855,11.865818,11.723758,11.756991,11.818444,11.816704,11.644589,11.598389,11.619573,11.666416,11.499920,11.626991,11.646611,11.727653,11.591164,9.739844,10.058510,10.389381,9.051457,9.841025,10.009597,10.228796,10.472393,10.684739,10.567838,10.736945,10.564109,10.577002,10.747842,11.096141,11.058908,11.019360,11.138762,11.122490,11.105386,11.124247,11.229457,11.322763,11.158929,11.111439];
export var SAV_FROM_YEAR = 1947;
export var savHistory = (
  "7.4 5.0 7.1 5.8 6.9 8.6 10 9.7 7.8 6.8 7.2 6.3 11.5 9.8 6.3 9.7 7.6 12.2 12.2 11.5 11.2 10.6 11.9 10.7 10.6 11.2 10.9 11.2 11.3 10.3 9.9 9.9 9.3 9.5 10 9.9 10.6 11.1 11.3 11.5 11.1 11.6 11.4 10.7 11.2 11.1 11.6 11.8 10.7 10.8 9.7 10.2 10.3 9.7 10.2 10 10.9 10.9 11.7 11.6 11.6 11.4 11.1 10.7 10.8 10.7 10.4 11.1 11.1 11.9 11.4 12.1 11.2 11.2 12.0 11.4 11.0 11.0 11.0 11.7 12.5 11.9 12.4 12.5 11.9 12.0 10.6 10.9 10.1 10.3 11.7 11.6 12.0 12.6 13.3 13.3 13.4 13.8 13.6 13.1 12.4 11.6 12.0 13.4 12.6 13.3 13.4 14.5 14.0 12.9 12.6 13.7 12.8 15.3 12.9 12.7 12.1 11.8 11.6 11.0 10.1 10.5 10.8 11.2 11.3 10.4 10.7 10.5 11.1 10.4 9.9 9.8 10.1 11.4 11.5 11.4 10.8 10.8 12.2 12.8 12.2 12.4 12.2 11.0 11.0 9.8 9.5 10.0 11.0 11.1 11.6 11.1 9.2 10.1 8.2 8.9 9.3 9.5 8.4 7.9 8.5 6.4 7.0 8.2 8.1 8.5 8.6 8.4 8.9 8.1 7.9 8.2 8.2 8.7 8.3 8.2 8.8 8.7 8.7 9.4 9.6 9.9 9.3 8.8 8.7 8.2 7.3 7.2 6.7 6.9 6.7 7.0 7.5 6.8 6.7 6.5 6.5 6.3 6.4 6.1 6.0 6.3 5.8 6.1 7.0 6.7 6.4 5.8 5.9 4.5 4.1 3.9 4.1 4.3 4.5 4.2 4.7 4.4 6.3 3.3 5.5 5.9 5.4 5.5 5.1 5.1 5.5 5.0 4.6 5.0 4.5 4.5 2.5 2.2 1.8 2.4 3.2 3.0 2.4 2.6 2.7 2.8 2.4 2.2 2.8 4.6 3.5 5.6 5.7 6.8 5.1 5.3 5.4 6.2 6.1 6.0 6.6 6.3 6.6 6.6 7.4 7.9 7.0 9.1 4.8 5.3 5.2 4.6 5.3 5.5 5.5 5.7 6.2 5.8 5.6 5.8 5.9 5.2 5.1 5.2 5.5 6.0 6.0 5.5 5.8 6.1 6.6 7.2 8.2 7.3 6.9 6.7 8.9 24.4 15.1 12.2 20.0 10.4 8.6 6.7 3.8 2.5 3.3 3.8 5.5 5.9 5.4 5.5 6.2 5.8 5.1 4.7 5.2 5.0 4.4 3.8 3.9 2.8"
).split(" ").map(Number);
function checkHouseholdHistories(){
  var dHi = Math.max.apply(null, dsrHistory), dLo = Math.min.apply(null, dsrHistory);
  if (dsrHistory.length !== 86 || Math.abs(dHi - 15.846367) > 1e-6 || Math.abs(dLo - 9.051457) > 1e-6)
    console.warn("dsrHistory failed its check", dsrHistory.length, dHi, dLo);
  var sHi = Math.max.apply(null, savHistory), sLo = Math.min.apply(null, savHistory);
  if (savHistory.length !== 318 || Math.abs(sHi - 24.4) > 1e-9 || Math.abs(sLo - 1.8) > 1e-9)
    console.warn("savHistory failed its check", savHistory.length, sHi, sLo);
}
export var SAV_OFFSET = (DSR_FROM_YEAR - SAV_FROM_YEAR) * 4;
export var dsrNow = dsrHistory[dsrHistory.length - 1];
export var savNow = savHistory[savHistory.length - 1];
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
export var sp500AnnualReturnSource = [
  {t:"S&P Dow Jones Indices — S&P 500 (index originator; total-return figures)", u:"https://www.spglobal.com/spdji/en/indices/equity/sp-500/"},
  {t:"S&P 500 total returns by year (Slickcharts' compilation of S&P DJI's figures)", u:"https://www.slickcharts.com/sp500/returns"},
  {t:"NYU Stern (Damodaran) — Historical returns on stocks, bonds and bills, 1928– (the record before 1990, and an independent cross-check after)", u:"https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/histretSP.html"}
];
export var marketCycles = [
  {
    from:1928, to:1932,
    name:"Great Depression Cycle",
    story:"The Roaring Twenties ended in the crash of October 1929, and bank failures, tight money and a tariff war turned it into the Great Depression. Mrs. Market fell from Euphoria into the deepest Despair in the record, four bear years in a row.",
    blurb:"The last boom year of the Twenties, then the crash of 1929 and three more years of falling prices, failing banks and lost jobs. It ends in 1932, at the bottom of the Great Depression."
  },
  {
    from:1933, to:1934,
    name:"New Deal Cycle",
    story:"Roosevelt closed the banks, took the dollar off gold and launched the New Deal, and 1933 became one of the best years in the record. Mrs. Market leapt from Depression to Hope in a few months, then lost her nerve in 1934 as the recovery came slowly.",
    blurb:"The New Deal: the bank holiday, the dollar off gold and the first relief programmes. It ends in 1934, a flat year after the leap of 1933."
  },
  {
    from:1935, to:1937,
    name:"Recovery Cycle",
    story:"Output climbed back toward its 1929 level, until the Fed raised reserve requirements and Washington cut spending in 1937. Mrs. Market grew Optimistic too soon and fell back into Fear in the recession of 1937–38.",
    blurb:"Two strong years of recovery, then the policy turn of 1937 and a sharp recession inside the Depression. It ends in 1937, one of the worst years in the record."
  },
  {
    from:1938, to:1941,
    name:"War Clouds Cycle",
    story:"The market bounced in 1938, but war in Europe, the fall of France and then Pearl Harbor kept it falling for three years. Mrs. Market lived in Anxiety and Fear, even as war orders put the factories back to work.",
    blurb:"A rebound year, then three bear years as the war in Europe spreads and America is drawn in. It ends in 1941, the year of Pearl Harbor."
  },
  {
    from:1942, to:1946,
    name:"Victory Cycle",
    story:"After Midway the tide of the war turned, and war production with price controls carried four rising years to victory in 1945. Mrs. Market went from Hope to Euphoria, until controls ended in 1946, prices jumped and she fell back into Anxiety.",
    blurb:"The war economy at full stretch, from the turn of 1942 to victory in 1945. It ends in 1946, when price controls lift and inflation surges."
  },
  {
    from:1947, to:1953,
    name:"Baby Boom Cycle",
    story:"Soldiers came home and started families in record numbers, while Marshall Plan exports and then the Korean War kept the factories busy. Mrs. Market climbed out of the postwar slump into a steady Optimism that held for six years, until the war’s end and the 1953 recession brought her first Anxiety.",
    blurb:"The baby boom begins: new households, years of pent-up demand, Marshall Plan exports and then the Korean War. It ends in 1953, the year the war ended and military spending was cut."
  },
  {
    from:1954, to:1957,
    name:"Suburban Cycle",
    story:"Cars, highways and new suburbs carried the economy, and 1954 became the best year in the record. Mrs. Market went from Hope to Euphoria in a single year, then slid into Anxiety as rates rose and the 1957 recession arrived.",
    blurb:"Out of the 1953–54 recession comes the best year in the record, 1954, and a boom in cars, highways and new suburbs. It ends with the recession of 1957."
  },
  {
    from:1958, to:1962,
    name:"Space Race Cycle",
    story:"Sputnik set off a race in rockets and electronics, and almost any company with “tronics” in its name found buyers. Mrs. Market rode that Excitement into Thrill, until the slide of 1962 turned it to Fear.",
    blurb:"Sputnik sets off a race in rockets and electronics, and the market chases the new technology stocks of the day. It ends in the slide of 1962."
  },
  {
    from:1963, to:1966,
    name:"Great Society Cycle",
    story:"The 1964 tax cut and Johnson’s Great Society spending, then the build-up in Vietnam, stretched the long 1960s expansion. Mrs. Market was Thrilled and sure of herself, until inflation, rising rates and the credit crunch of 1966 left her Anxious.",
    blurb:"The 1964 tax cut, the Great Society programmes and a long expansion running hot. It ends in 1966 as rates climb and credit tightens."
  },
  {
    from:1967, to:1969,
    name:"Go-Go Cycle",
    story:"Go-go fund managers traded growth stocks at speed, and conglomerates grew by buying everything in sight, their earnings flattered by the deals themselves. Mrs. Market was in Euphoria about them, and in Denial as inflation and the credit crunch of 1969 took them apart.",
    blurb:"The go-go funds and the conglomerates peak in 1968, with speculation running alongside. It ends in 1969 as inflation and rising rates catch up."
  },
  {
    from:1970, to:1974,
    name:"Nifty Fifty Cycle",
    story:"Investors crowded into fifty blue chips they believed could be bought at any price and held forever. Mrs. Market’s Euphoria turned to Fear with the oil embargo of 1973, and to Panic and Despair in 1974, her worst year since 1937.",
    blurb:"Investors crowd into fifty blue-chip growth stocks they believe can be bought at any price. It ends in the bear market of 1973–74, with the oil embargo and a deep recession."
  },
  {
    from:1975, to:1977,
    name:"Bicentennial Cycle",
    story:"Out of the 1974 collapse came one of the sharpest rebounds in the record, +37% in 1975, and the rally ran into the Bicentennial year before topping out late in 1976. Mrs. Market moved from Despair back to Hope and Optimism, but inflation never left, and by 1977 she was Anxious again.",
    blurb:"A sharp recovery out of the 1973–74 collapse that tops out in the Bicentennial year, with inflation never far behind. It ends in 1977 as prices start to run again."
  },
  {
    from:1978, to:1981,
    name:"Volcker Cycle",
    story:"Prices ran into double digits, and money fled into oil, gold and anything real. Mrs. Market was Excited but uneasy throughout, and fell into Fear in 1981 when Volcker raised rates high enough to break inflation.",
    blurb:"Inflation runs into double digits and hard assets like oil and gold lead, until Paul Volcker takes the Fed in 1979. It ends in 1981, when his rates, near 20%, break it."
  },
  {
    from:1982, to:1990,
    name:"Buyout Cycle",
    story:"With inflation beaten and rates falling, a long bull market ran on junk bonds and leveraged buyouts. Mrs. Market’s Euphoria broke in the one-day Panic of October 1987, came back, and ended in Fear in 1990 with the savings-and-loan collapse and the Gulf War.",
    blurb:"The defeat of inflation opens a long bull market, fuelled by falling rates, junk bonds and leveraged buyouts, through the crash of 1987. It ends in 1990 with the savings-and-loan collapse, the Gulf War oil shock and recession."
  },
  {
    from:1991, to:2002,
    name:"Dot-Com Cycle",
    story:"The internet promised a new economy, and the market believed it for nine straight years. Mrs. Market climbed from Hope to full Euphoria in 1999, then spent three years in Denial, Fear and finally Despair as the bubble burst.",
    blurb:"Nine years of uninterrupted growth out of the 1990–91 recession — confidence building all decade and cresting into the internet mania that gives the cycle its name — then three straight losing years to unwind it, a run of consecutive declines the market had not seen since the 1930s. The mania and its undoing are one story, and the cycle holds both."
  },
  {
    from:2003, to:2008,
    name:"Housing Cycle",
    story:"Cheap money and easy mortgages made houses the boom, and the banks built a tower of debt on top of them. Mrs. Market was Optimistic and then Thrilled, until Lehman’s collapse in 2008 sent her into Panic and Despair.",
    blurb:"A rebuild out of the dot-com wreckage, carried by a housing boom that was quietly becoming the next crisis the whole way up. It ends where the boom had been heading all along: the subprime collapse, and the worst year the market had seen since 1931."
  },
  {
    from:2009, to:2018,
    name:"Big Tech Cycle",
    story:"Out of the crisis, near-zero rates and a handful of technology giants carried one of the longest bull markets on record. Mrs. Market crept from Despair to Hope and stayed Optimistic for a decade, until the trade war and rising rates left her Anxious at the end of 2018.",
    blurb:"One of the longest, steadiest bull markets on record — a decade of rebuilding led by a handful of technology giants that ended it carrying more of the index than any five companies before them. It closes on the trade-war scare of late 2018, the mildest ending of any cycle here: a stumble rather than a bust."
  },
  {
    from:2019, to:2022,
    name:"COVID-19 Cycle",
    story:"A strong 2019, then the pandemic brought the fastest crash on record and the largest rescue ever attempted. Mrs. Market went from Panic to Euphoria inside a year, and into Fear in 2022 as inflation returned and the Fed raised rates at its fastest pace in decades.",
    blurb:"A strong year, then the fastest bear market in history as COVID-19 arrives — and one of the fastest recoveries on record, bought with the largest fiscal and monetary transfusion ever attempted. The bill arrives at the end: inflation at a four-decade high, and a sharp correction to close the cycle. Worth knowing that the pandemic crash itself never appears as a losing year — it fell and recovered inside 2020 — so this cycle's bleed is the inflation bear, not the virus."
  },
  {
    from:2023, to:null, ongoing:true,
    name:"AI Cycle",
    story:"Out of the 2022 correction, the build-out of artificial intelligence became the story everyone wanted to own. Mrs. Market has moved from Hope into Optimism and Excitement, and the cycle is still being written.",
    blurb:"Out of the 2022 correction, a bull run carried by the build-out of artificial intelligence. Three full years so far and the fourth under way, with no losing year in it yet. Still being written."
  }
];
export var typicalCycleYears = 6;
export var typicalCycleSrc = [
  {t:"First Trust — History of U.S. Bear & Bull Markets since 1942 (bull 51.0 months, bear 11.1, 1962–2022)", u:"https://www.ftportfolios.com/Commentary/MarketCommentary/2019/6/4/history-of-us-bear--bull-markets"},
  {t:"Fisher Investments — Stock Market Cycles (bull about 61 months, bear about 16, 1946–2018)", u:"https://www.fisherinvestments.com/en-us/resource-library/market-cycles"}
];

export function setYieldCurve(v){ yieldCurve = v; return v; }
export function setSentiment(v){ sentiment = v; return v; }
export function setVixRow(v){ vixRow = v; return v; }
export function setValuation(v){ valuation = v; return v; }
export function setFedFunds(v){ fedFunds = v; return v; }

export var t10y3mHistory, t10y2yHistory, t3mYieldHistory, t2yYieldHistory, t5yYieldHistory, t10yYieldHistory, t30yYieldHistory, usRealGdpGrowth, DEF_1983, vixRow, sp500AnnualReturns, sp500Years;

export function bootData(){
  yieldCurve = LIVE("yieldCurve", yieldCurve);
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
  GYN.step("checkDesireWindow", checkDesireWindow, "check");
  checkDesireWindow();
  GYN.step("checkGrossDebt", checkGrossDebt, "check");
  checkGrossDebt();
  sentiment = LIVE("sentiment", sentiment);
  liveInto("vixClose");
  valuation = LIVE("valuation", valuation);
  valuation.rows.sort(function(a, b){ return (a.key === "cape" ? 0 : 1) - (b.key === "cape" ? 0 : 1); });
  GYN.step("checkVelocityHistory", checkVelocityHistory, "check");
  checkVelocityHistory();
  GYN.step("checkUnemploymentHistory", checkUnemploymentHistory, "check");
  checkUnemploymentHistory();
  GYN.step("checkFedFundsHistory", checkFedFundsHistory, "check");
  checkFedFundsHistory();
  GYN.step("checkMoneyStock", checkMoneyStock, "check");
  checkMoneyStock();
  vixRow = sentiment.rows[0];
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
