  // ---- DATA (single source of truth — edit here on refresh) ----
  var yieldCurve = [
    {m:"1M",  y:4.01}, {m:"2M",  y:4.18}, {m:"3M",  y:4.24}, {m:"4M",  y:4.33}, {m:"6M",  y:4.34},
    {m:"1Y",  y:4.51}, {m:"2Y",  y:4.87}, {m:"3Y",  y:4.99}, {m:"5Y",  y:5.03}, {m:"7Y",  y:5.10},
    {m:"10Y", y:5.18}, {m:"20Y", y:5.53}, {m:"30Y", y:5.47}
  ];
  yieldCurve = LIVE("yieldCurve", yieldCurve);
  var YIELD_CURVE_ASOF = "2026-09-24";
  function curveAsOf(){
    var d = LIVE_CACHE && LIVE_CACHE.yieldCurve;
    return (d && Array.isArray(d.rows) && d.rows.length && d.asOf) || YIELD_CURVE_ASOF;
  }

  var t10y3mHistory = treasuryQuarterly.s3m;
  var t10y3mRecessions = [
    {from:"2007 Q4", to:"2009 Q2", label:"2007–09"},
    {from:"2020 Q1", to:"2020 Q2", label:"2020"}
  ];

  var t10y2yHistory = treasuryQuarterly.s2y;

  // ---- Yield LEVELS by maturity, quarterly from Q1 2005 — not spreads, the actual yields themselves, ----
  var t3mYieldHistory = treasuryQuarterly.m3;
  var t2yYieldHistory = treasuryQuarterly.y2;
  var t5yYieldHistory = treasuryQuarterly.y5;
  var t10yYieldHistory = treasuryQuarterly.y10;
  var t30yYieldHistory = treasuryQuarterly.y30;

  // ---- Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey) ----
  var uninvLagCycles = [
    {cycle:"1989–91", uninv:"Sep 1989 – Jan 1990", recession:"Jul 1990", lag:"6–10 mo"},
    {cycle:"2001", uninv:"Jan–Feb 2001", recession:"Mar 2001", lag:"1–2 mo"},
    {cycle:"2007–09", uninv:"Jun–Aug 2007", recession:"Dec 2007", lag:"4–6 mo"},
    {cycle:"2020", uninv:"Oct 2019", recession:"Feb 2020", lag:"4 mo"}
  ];
  var uninvLagToday = {
    months: 21, altMonths: 12, altFrom: "September 2025",
    meter: { value: 21, min: 0, max: 26, optimal: {from: 1, to: 10, label: "1–10 mo (past cycles)"} }
  };

  var usRealGdpGrowth = {
    1990:1.89, 1991:-0.11, 1992:3.52, 1993:2.75, 1994:4.03, 1995:2.68, 1996:3.77, 1997:4.45, 1998:4.48, 1999:4.79,
    2000:4.08, 2001:0.96, 2002:1.70, 2003:2.80, 2004:3.85, 2005:3.48, 2006:2.78, 2007:2.00, 2008:0.11, 2009:-2.58,
    2010:2.70, 2011:1.56, 2012:2.29, 2013:2.12, 2014:2.52, 2015:2.95, 2016:1.82, 2017:2.46, 2018:2.97, 2019:2.58,
    2020:-2.08, 2021:6.15, 2022:2.52, 2023:2.93, 2024:2.79, 2025:2.16
  };
  var gdpPeers = [
    { code:"isr", name:"Israel", on:false, q:{
      "2005 Q1":5.18, "2005 Q2":4.83, "2005 Q3":4.57, "2005 Q4":5.28, "2006 Q1":5.48, "2006 Q2":6.54, "2006 Q3":4.73, "2006 Q4":4.6,
      "2007 Q1":5.26, "2007 Q2":4.67, "2007 Q3":7.43, "2007 Q4":7.34, "2008 Q1":5.5, "2008 Q2":4.3, "2008 Q3":2.54, "2008 Q4":0.13,
      "2009 Q1":0.28, "2009 Q2":0.97, "2009 Q3":1.37, "2009 Q4":3.24, "2010 Q1":4.49, "2010 Q2":5.18, "2010 Q3":5.47, "2010 Q4":6.07,
      "2011 Q1":6.18, "2011 Q2":5.44, "2011 Q3":6.52, "2011 Q4":5.39, "2012 Q1":2.8, "2012 Q2":2.78, "2012 Q3":1.89, "2012 Q4":1.34,
      "2013 Q1":3.56, "2013 Q2":4.4, "2013 Q3":4.11, "2013 Q4":5.07, "2014 Q1":5.04, "2014 Q2":3.76, "2014 Q3":3.56, "2014 Q4":4.03,
      "2015 Q1":2.45, "2015 Q2":2.46, "2015 Q3":1.81, "2015 Q4":1.05, "2016 Q1":1.33, "2016 Q2":3.99, "2016 Q3":4.79, "2016 Q4":5.55,
      "2017 Q1":5.76, "2017 Q2":3.73, "2017 Q3":4.63, "2017 Q4":4.56, "2018 Q1":5.28, "2018 Q2":4.71, "2018 Q3":3.88, "2018 Q4":3.46,
      "2019 Q1":4.3, "2019 Q2":3.35, "2019 Q3":3.38, "2019 Q4":3.22, "2020 Q1":-0.73, "2020 Q2":-8.08, "2020 Q3":-0.95, "2020 Q4":1.04,
      "2021 Q1":3.52, "2021 Q2":16.06, "2021 Q3":8.23, "2021 Q4":9.96, "2022 Q1":8.94, "2022 Q2":7.19, "2022 Q3":5.25, "2022 Q4":3.25,
      "2023 Q1":4.71, "2023 Q2":3.5, "2023 Q3":4.02, "2023 Q4":-3.99, "2024 Q1":-0.72, "2024 Q2":-1.42, "2024 Q3":0.26, "2024 Q4":6.19,
      "2025 Q1":3.49, "2025 Q2":2.56, "2025 Q3":4.11, "2025 Q4":4.73, "2026 Q1":2.63, "2026 Q2":7.34
    } },
    { code:"jpn", name:"Japan", on:false, q:{
      "2005 Q1":0.72, "2005 Q2":1.76, "2005 Q3":2.11, "2005 Q4":2.79, "2006 Q1":2.24, "2006 Q2":1.54, "2006 Q3":0.62, "2006 Q4":1.69,
      "2007 Q1":2.34, "2007 Q2":2.22, "2007 Q3":1.56, "2007 Q4":0.78, "2008 Q1":0.27, "2008 Q2":-0.36, "2008 Q3":-0.82, "2008 Q4":-3.72,
      "2009 Q1":-8.18, "2009 Q2":-6.71, "2009 Q3":-6.27, "2009 Q4":-2.45, "2010 Q1":3.34, "2010 Q2":3.61, "2010 Q3":6.08, "2010 Q4":3.51,
      "2011 Q1":0.77, "2011 Q2":-1.23, "2011 Q3":-0.58, "2011 Q4":0.32, "2012 Q1":3.31, "2012 Q2":3.03, "2012 Q3":0.22, "2012 Q4":0.13,
      "2013 Q1":-0.12, "2013 Q2":1.86, "2013 Q3":3.23, "2013 Q4":3.15, "2014 Q1":2.9, "2014 Q2":0.4, "2014 Q3":-0.35, "2014 Q4":0.36,
      "2015 Q1":0.93, "2015 Q2":2.46, "2015 Q3":2.41, "2015 Q4":1.62, "2016 Q1":0.89, "2016 Q2":0.47, "2016 Q3":0.55, "2016 Q4":0.76,
      "2017 Q1":0.63, "2017 Q2":1.29, "2017 Q3":2.22, "2017 Q4":2.37, "2018 Q1":1.46, "2018 Q2":1.77, "2018 Q3":0.14, "2018 Q4":0.06,
      "2019 Q1":0.32, "2019 Q2":0.1, "2019 Q3":0.65, "2019 Q4":-2.32, "2020 Q1":-2.08, "2020 Q2":-9.51, "2020 Q3":-5.03, "2020 Q4":-0.6,
      "2021 Q1":0.25, "2021 Q2":8.69, "2021 Q3":3.29, "2021 Q4":2.81, "2022 Q1":1.15, "2022 Q2":1.5, "2022 Q3":1.42, "2022 Q4":0.74,
      "2023 Q1":2.07, "2023 Q2":1.17, "2023 Q3":0.17, "2023 Q4":0.15, "2024 Q1":-0.81, "2024 Q2":-0.99, "2024 Q3":1.1, "2024 Q4":1.02,
      "2025 Q1":1.63, "2025 Q2":1.87, "2025 Q3":0.65, "2025 Q4":0.51, "2026 Q1":0.49, "2026 Q2":0.73
    } },
    { code:"eu", name:"European Union", on:false, q:{
      "2005 Q1":1.7, "2005 Q2":1.7, "2005 Q3":2.3, "2005 Q4":2.5, "2006 Q1":3.3, "2006 Q2":3.8, "2006 Q3":3.6, "2006 Q4":3.9,
      "2007 Q1":3.7, "2007 Q2":3.1, "2007 Q3":3, "2007 Q4":2.6, "2008 Q1":2.4, "2008 Q2":1.3, "2008 Q3":0.4, "2008 Q4":-2,
      "2009 Q1":-5.5, "2009 Q2":-5.1, "2009 Q3":-4.2, "2009 Q4":-2.1, "2010 Q1":1.2, "2010 Q2":2.2, "2010 Q3":2.3, "2010 Q4":2.4,
      "2011 Q1":3.1, "2011 Q2":2.2, "2011 Q3":1.8, "2011 Q4":0.8, "2012 Q1":-0.3, "2012 Q2":-0.7, "2012 Q3":-0.9, "2012 Q4":-1,
      "2013 Q1":-1.1, "2013 Q2":-0.1, "2013 Q3":0.3, "2013 Q4":1, "2014 Q1":1.8, "2014 Q2":1.4, "2014 Q3":1.6, "2014 Q4":1.8,
      "2015 Q1":2.1, "2015 Q2":2.4, "2015 Q3":2.3, "2015 Q4":2.4, "2016 Q1":2, "2016 Q2":1.7, "2016 Q3":1.8, "2016 Q4":2.1,
      "2017 Q1":2.5, "2017 Q2":3, "2017 Q3":3.2, "2017 Q4":3.2, "2018 Q1":2.5, "2018 Q2":2.3, "2018 Q3":1.8, "2018 Q4":1.5,
      "2019 Q1":2.1, "2019 Q2":2, "2019 Q3":2, "2019 Q4":1.5, "2020 Q1":-2.1, "2020 Q2":-13.1, "2020 Q3":-3.9, "2020 Q4":-3.6,
      "2021 Q1":0.2, "2021 Q2":14.7, "2021 Q3":5.3, "2021 Q4":5.8, "2022 Q1":5.5, "2022 Q2":4.2, "2022 Q3":3, "2022 Q4":1.9,
      "2023 Q1":1.1, "2023 Q2":0.4, "2023 Q3":0.2, "2023 Q4":0.4, "2024 Q1":1, "2024 Q2":1.1, "2024 Q3":1.3, "2024 Q4":1.8,
      "2025 Q1":1.7, "2025 Q2":1.6, "2025 Q3":1.4, "2025 Q4":1.3, "2026 Q1":0.9, "2026 Q2":1.4
    } }
  ];
  var gdpSrc = [{t:"World Bank — GDP growth, annual % (NY.GDP.MKTP.KD.ZG)", u:"https://data.worldbank.org/indicator/NY.GDP.MKTP.KD.ZG"}];
  var gdpPeerSrc = [
    {t:"OECD — Quarterly National Accounts, real GDP, growth on the same quarter a year earlier (Israel, Japan)", u:"https://data-explorer.oecd.org/vis?df[ds]=dsDisseminateFinalDMZ&df[id]=DSD_NAMAIN1%40DF_QNA_EXPENDITURE_GROWTH_OECD"},
    {t:"Eurostat — GDP and main aggregates, quarterly (namq_10_gdp), European Union", u:"https://ec.europa.eu/eurostat/databrowser/view/namq_10_gdp/default/table"}
  ];


  var labPanel = [
    {
      marker:"Federal debt", sub:"gross federal debt ÷ GDP",
      meter:{min:0, max:125.9, value:122.6, optimal:{lte:70, label:"\u2264 70%"},
             ends:{ zone:"50-year average", high:"Elevated" }},
      shortNote:"Q1 2026 — above the WWII peak, and within reach of the 2020 record.",
      note:"Q1 2026, gross federal debt as a share of GDP (Treasury and BEA via FRED, GFDEGDQ188S) — the figure the headlines quote. Gross debt is everything the government owes: debt held by the public, which CBO puts at about 101% of GDP for FY2026, plus roughly a fifth of GDP it owes to its own accounts, mostly the Social Security trust funds. On this measure the WWII record is already broken: gross debt peaked at 119.1% in FY1946 and went higher in the pandemic, to 125.9% in FY2020 — the top of this bar (OMB via FRED, GFDGDPA188S, by fiscal year). The bar starts at zero, the one time the debt was effectively retired (1835, under Andrew Jackson — Treasury's own ledger shows just $33,733 outstanding). The green band ends at 70% of GDP: the average of this same series over the last fifty fiscal years, FY1976–FY2025. CBO publishes a 50-year average only for debt held by the public (51%), so this one is computed here, by CBO's rule — the same computation on the held series gives 50.5%, which is how the rule was checked. Today's 122.6% is about 1.75 times it.",
      direction:"up", flagValue:"122.6%", flagState:"serious",
      opens:{ id:"sheet-metric-debt", title:"Federal debt" }
    },
    {
      marker:"Interest payments", sub:"net interest costs ÷ GDP",
      meter:{min:0.63, max:3.3, value:3.3, optimal:{lte:2, label:"\u2264 2.0%"},
             ends:{ zone:"50-year average", high:"High" }},
      shortNote:"FY2026, $1.0T — already the highest interest burden on record.",
      note:"FY2026, $1.0T, CBO's February 2026 projection. Already the highest on record — the previous peak was 3.2% in FY1991, and WWII's debt was bigger but financed near-zero, so this is uncharted territory (CBO: 4.6% by 2036). Bar runs from the FY1942 low (0.6%) to today. This is the one marker sitting right at the historic edge of its own range. The green band ends at 2.0% of GDP, CBO's 50-year average for net interest, which over that half-century ran between 1.2% and 3.2% — the 3.2% high was 1991.",
      direction:"up", flagValue:"3.3%", flagState:"critical",
      opens:{ id:"sheet-metric-interest", title:"Interest payments" }
    },
    {
      marker:"Federal budget", sub:"federal deficit or surplus ÷ GDP",
      meter:{min:-2.3, max:26.9, value:5.8, optimal:{lte:3.8, label:"\u2264 3.8%"},
             ends:{ zone:"50-year average", high:"Large" }},
      shortNote:"FY2026, ~$1.9T — this size deficit once required a recession or a war. Neither is present.",
      note:"FY2026, ~$1.9T, CBO's February 2026 projection (FY2025 actual: 5.8%). Below emergency-level spikes, but deficits this size used to require a recession or a war — neither is present now. Range spans the largest surplus of the modern era (FY2000, +2.3% of GDP; the last one was FY2001, +1.2%) to the WWII deficit peak (FY1943, 26.9%), both from the OMB series on FRED. The green band ends at 3.8% of GDP, CBO's stated average deficit over the last fifty years; this year's 5.8% is half again as large.",
      direction:"up", flagValue:"5.8%", flagState:"serious",
      opens:{ id:"sheet-marker-deficit", title:"Federal budget" }
    }
  ];
  /* ---- Productivity growth is not in this panel ---- */

  var productivityRecord = (function(){
    var h = typeof productivityHistory !== "undefined" && productivityHistory.length ? productivityHistory : null;
    if (!h) return { now:{ q:"2026 Q2", v:2.2 }, lo:{ q:"1974 Q3", v:-2.2 }, hi:{ q:"1950 Q4", v:7.2 } };
    return { now:h[h.length - 1], lo:h.reduce(function(a, d){ return d.v < a.v ? d : a; }),
             hi:h.reduce(function(a, d){ return d.v > a.v ? d : a; }) };
  })();
  var PRODUCTIVITY_TREND = 2.1, PRODUCTIVITY_SLOWDOWN = 1.3;
  function productivityWord(v){
    if (v >= PRODUCTIVITY_TREND) return { state:"good", text:"Above trend",
      says:"running above the slowdown-era average and at or above the long-run trend",
      why:"clears both lines, so the word is above trend" };
    if (v >= PRODUCTIVITY_SLOWDOWN) return { state:"good", text:"Above the slowdown",
      says:"running above the slowdown-era average but below the long-run trend",
      why:"clears the slowdown line but not the long-run one, so the word is above the slowdown, not above trend" };
    return { state:"warning", text:"Below the slowdown",
      says:"running below even the slowdown-era average",
      why:"is below both lines, so the word is below the slowdown" };
  }
  var productivityReading = (function(R){
    var word = productivityWord(R.now.v);
    var at = qPretty(R.now.q), span = fmtSigned(R.lo.v, 1) + "% (" + qPretty(R.lo.q) + ") to " + fmtSigned(R.hi.v, 1) + "% (" + qPretty(R.hi.q) + ")";
    return {
      bodyTerm:"Productivity growth", info:function(){ return productivityInfoHtml(productivityReading); },
      page:{ chart:function(){ return typeof productivityHistory === "undefined" ? "" : '<div id="sheet-sign-productivity-growth-chart"></div><div id="sheet-sign-productivity-growth-highlights"></div>'; } },
      econTerm:"Productivity growth", metricSub:"nonfarm business output per hour, YoY, " + at,
      metric:R.now.v.toFixed(1) + "%", tag:{ state:word.state, text:word.text }, wordWhy:word.why,
      meter:{ min:R.lo.v, max:R.hi.v, value:R.now.v, optimal:{gte:PRODUCTIVITY_SLOWDOWN, label:"\u2265 " + PRODUCTIVITY_SLOWDOWN + "% YoY"},
              ends:{ low:"Falling" } },
      span:span,
      shortCaption:at + " — " + word.says + ".",
      caption:at + ", BLS output per hour vs. a year earlier, " + word.says + " — the reading that says whether capacity is being rebuilt rather than just borrowed against. The track runs over the quarterly record since 1948: " + span + "."
    };
  })(productivityRecord);

  /* ---- Institutional trust is not in this panel ---- */

  /* ---- The deficit, year by year ---- */
  var DEF_FROM_YEAR = 1946;
  var deficitHistory = (
    "-7.00 1.61 4.30 0.21 -1.04 1.76 -0.41 -1.67 -0.30 -0.70 0.88 0.72 -0.58 -2.46 0.06 -0.59 -1.18 -0.75 -0.86 -0.19 -0.45 -1.01 -2.67 0.32 -0.26 -1.98 -1.83 -1.05 -0.40 -3.16 -3.94 -2.58 -2.52 -1.55 -2.58 -2.46 -3.83 -5.72 -4.59 -4.89 -4.83 -3.08 -2.96 -2.71 -3.71 -4.37 -4.45 -3.72 -2.79 -2.15 -1.33 -0.26 0.76 1.30 2.30 1.21 -1.44 -3.30 -3.38 -2.44 -1.80 -1.11 -3.10 -9.76 -8.60 -8.33 -6.62 -4.03 -2.75 -2.42 -3.11 -3.39 -3.77 -4.57 -14.48 -11.69 -5.27 -6.07 -6.20 -5.77"
  ).split(" ").map(Number);
  var DEF_MEAN = deficitHistory.reduce(function(a, b){ return a + b; }, 0) / deficitHistory.length;
  var DEF_RECESSION_FY = {1949:1,1950:1,1954:1,1958:1,1960:1,1961:1,1970:1,1971:1,1974:1,1975:1,
                          1980:1,1981:1,1982:1,1983:1,1990:1,1991:1,2001:1,2002:1,2008:1,2009:1,2020:1};
  function checkDeficitHistory(){
    var hi = Math.max.apply(null, deficitHistory), lo = Math.min.apply(null, deficitHistory);
    if (deficitHistory.length !== 80 || Math.abs(hi - 4.30) > 0.005 || Math.abs(lo + 14.48) > 0.005)
      console.warn("deficitHistory failed its check", deficitHistory.length, hi, lo);
  }
  GYN.step("checkDeficitHistory", checkDeficitHistory, "check"); checkDeficitHistory();

