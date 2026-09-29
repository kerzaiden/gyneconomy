  // ---------------- DATA (single source of truth — edit here on refresh) ----------------
  var yieldCurve = [
    {m:"1M",  y:4.01}, {m:"2M",  y:4.18}, {m:"3M",  y:4.24}, {m:"4M",  y:4.33}, {m:"6M",  y:4.34},
    {m:"1Y",  y:4.51}, {m:"2Y",  y:4.87}, {m:"3Y",  y:4.99}, {m:"5Y",  y:5.03}, {m:"7Y",  y:5.10},
    {m:"10Y", y:5.18}, {m:"20Y", y:5.53}, {m:"30Y", y:5.47}
  ];
  yieldCurve = LIVE("yieldCurve", yieldCurve);
  /* V644: the curve's own date, so a reading drawn from it can say which day it is. The literal above is the
     Sep 24 2026 close (the VIX note records the 10-year at 5.18% that day); a live document carries its own
     asOf, used only when its rows are the ones LIVE() actually took. */
  var YIELD_CURVE_ASOF = "2026-09-24";
  function curveAsOf(){
    var d = LIVE_CACHE && LIVE_CACHE.yieldCurve;
    return (d && Array.isArray(d.rows) && d.rows.length && d.asOf) || YIELD_CURVE_ASOF;
  }


  /* V648: the seven Treasury histories below were compiled by hand until this version; they are now READ from
     treasuryQuarterly, which the backfill (tools/fetch-fred-history.js) writes into 03b-history-fred.js from FRED's
     monthly GS2/GS5/GS10/GS30/TB3MS, by the same method the notes below describe — so one vintage, rerunnable,
     instead of a literal that goes stale. Before the swap every hand value was checked against the generated one;
     the notes on method and on the 30-year's gap still describe what is shipped. The running quarter is an
     average of the months printed so far and carries partial:true. */
  // 10Y-3M spread, quarterly from Q1 2005 — a compact stand-in for the FRED T10Y3M chart. Quarterly averages
  // (not daily): GS10's quarterly mean less TB3MS's, the method the hand-compiled series used and checked against
  // Multpl and ycharts; the running quarter is partial. A quarterly average smooths away very short inversions (e.g. the single-day
  // Mar 22, 2019 dip) — the point is each cycle's shape, not every daily wiggle.
  var t10y3mHistory = treasuryQuarterly.s3m;
  var t10y3mRecessions = [
    {from:"2007 Q4", to:"2009 Q2", label:"2007–09"},
    {from:"2020 Q1", to:"2020 Q2", label:"2020"}
  ];
  // The curve inverted Oct 2022 (not July 2022 — that's the 2Y-10Y spread's inversion date, a common mix-up)
  // and un-inverted in a choppy transition: quarterly averages turn positive in Q4 2024, but daily data dipped
  // negative again briefly in late Feb 2025 before settling durably positive by Q2–Q3 2025.

  // 10Y-2Y spread, quarterly from Q1 2005 — same methodology as the 3-month series above: GS10's quarterly mean
  // less GS2's (which reproduce FRED's T10Y2YM to 2 decimals); the running quarter is partial.
  var t10y2yHistory = treasuryQuarterly.s2y;
  // Inverted Jul 6, 2022 (about 3 months before the 3-month spread did) and un-inverted Sep 6, 2024 —
  // its first sustained positive reading in over two years. Both dates are directly readable off this series
  // crossing zero, not a separately-sourced news claim.

  // ---- Yield LEVELS by maturity, quarterly from Q1 2005 — not spreads, the actual yields themselves,
  // for the "how has each part of the curve moved" comparison chart. FRED's own series (TB3MS, GS2, GS5, GS10,
  // GS30), which the hand-compiled arrays were cross-checked against along with Treasury.gov's daily par curve.
  // 3-month uses TB3MS (a discount-basis rate, so it reads a touch below the investment/CMT-basis short yield
  // shown on the curve snapshot above — a real definitional gap, not an inconsistency between the two charts).
  var t3mYieldHistory = treasuryQuarterly.m3;
  var t2yYieldHistory = treasuryQuarterly.y2;
  var t5yYieldHistory = treasuryQuarterly.y5;
  var t10yYieldHistory = treasuryQuarterly.y10;
  // The 30-year has a real gap: Treasury stopped issuing 30-year bonds Oct 2001–Feb 2006, so there is no real
  // traded 30-year yield for all of 2005 — shown as a genuine break in the line (null) rather than a guessed
  // or extrapolated figure. FRED's GS30 carries values in the gap; the backfill writes null there (GS30_GAP). Q1 2006
  // blends 2 real trading months with 1 pre-resumption month.
  var t30yYieldHistory = treasuryQuarterly.y30;

  // ---- Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey) ----
  // Scoped to the 10Y-3M spread specifically, since it has the longer, more rigorously cross-sourced track
  // record. Only the 4 modern cycles (1989-91 onward) are averaged: the 4 cycles before that (1969-70 through
  // 1981-82) show the OPPOSITE timing — the recession started before the curve's final un-inversion — a
  // genuinely different regime, so mixing them in would misrepresent both eras rather than clarify either.
  // Sources and full reasoning: see the "claude/t10y3m-uninversion-recession-lag-research.md" project doc.
  // Dates re-derived (Sep 2026) from FRED's own T10Y3M daily and T10Y3MM monthly-average series: the first
  // month the monthly average turned positive, through the month of the last negative daily close. Recession
  // starts are NBER's official peak months.
  var uninvLagCycles = [
    {cycle:"1989–91", uninv:"Sep 1989 – Jan 1990", recession:"Jul 1990", lag:"6–10 mo"},
    {cycle:"2001", uninv:"Jan–Feb 2001", recession:"Mar 2001", lag:"1–2 mo"},
    {cycle:"2007–09", uninv:"Jun–Aug 2007", recession:"Dec 2007", lag:"4–6 mo"},
    {cycle:"2020", uninv:"Oct 2019", recession:"Feb 2020", lag:"4 mo"}
  ];
  // "Today" is counted from December 2024, the first month FRED's monthly-average spread reached zero (21 months,
  // as of this Sep 2026 update); an alternate count from September 2025, the first month of the unbroken positive
  // run (the last negative daily close was Oct 16, 2025), gives 12 months. Both exceed every modern precedent
  // (max 10 months, 1989–90) — that gap is itself the finding.
  var uninvLagToday = {
    months: 21, altMonths: 12, altFrom: "September 2025",
    meter: { value: 21, min: 0, max: 26, optimal: {from: 1, to: 10, label: "1–10 mo (past cycles)"} }
  };

  // GDP growth, peer comparison: real GDP growth (annual %), World Bank WDI (NY.GDP.MKTP.KD.ZG), 2010–2025.
  // "on" sets which peers are drawn (the United States is the Growth chart's own line and is always on; its row here also
  // feeds the drawer's summary). Since Version 211 no peer is on by default — the chart opens on the US alone and the
  // dropdown adds the others. The country's colour is the .peer-<code> class's --peer (Version 209).
  // US real GDP growth back to 1990 (same World Bank series) — the Calendar tab's per-era growth figures and
  // charts read this; the GDP comparison chart's United States row is derived from it below, so there is one copy.
  // REFRESH: add the newly-closed year once the World Bank publishes it (usually mid-year for the prior year).
  var usRealGdpGrowth = {
    1990:1.89, 1991:-0.11, 1992:3.52, 1993:2.75, 1994:4.03, 1995:2.68, 1996:3.77, 1997:4.45, 1998:4.48, 1999:4.79,
    2000:4.08, 2001:0.96, 2002:1.70, 2003:2.80, 2004:3.85, 2005:3.48, 2006:2.78, 2007:2.00, 2008:0.11, 2009:-2.58,
    2010:2.70, 2011:1.56, 2012:2.29, 2013:2.12, 2014:2.52, 2015:2.95, 2016:1.82, 2017:2.46, 2018:2.97, 2019:2.58,
    2020:-2.08, 2021:6.15, 2022:2.52, 2023:2.93, 2024:2.79, 2025:2.16
  };
  // The peers on the Growth chart: real GDP, YEAR OVER YEAR, BY QUARTER, seasonally adjusted — the same measure as
  // gdpQuarterlyYoY above, so the chart reads on one basis throughout (Version 212; the World Bank's annual series, six
  // countries, one figure a year, from Version 16 to 211). Israel and Japan: OECD Quarterly National Accounts
  // (DSD_NAMAIN1@DF_QNA_EXPENDITURE_GROWTH_OECD, Q.Y.<area>.S1..B1GQ......GY.). European Union (EU27 from 2020):
  // Eurostat namq_10_gdp, chain-linked volumes, percentage change on the same quarter a year earlier, calendar and
  // seasonally adjusted. "on" is which peers are drawn; none is, so the chart opens on the United States alone.
  // REFRESH each quarter, a few weeks after the US release: append the new quarter for each and revise what was revised.
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

  var longCycleImpressionShort = "Interest costs are at their historical record and debt is near its own, moving together mid-expansion, with no recession present.";

  /* ================= Version 488: the fiscal panel reads against CBO's own 50-year averages =================
     The Version 485 audit found all three of these bands hand-drawn: debt "< 60% of GDP", interest "1.5–2%",
     the deficit "2–4%". Plausible, conventional, and attributable to nobody. CBO publishes the figure each of
     them was reaching for, in one document — the February 2026 Budget and Economic Outlook and its companion
     primer on net interest — so all three now read against the same benchmark: **what the last fifty years
     averaged.** Debt held by the public 51% of GDP, net interest 2.0%, the deficit 3.8%.
     They also became ONE-SIDED, which is the bigger correction. A two-sided band called a 1%-of-GDP deficit
     abnormal, and nobody thinks a small deficit is a problem worth flagging — the reading on all three is how
     far ABOVE the long-run average they sit, so the band runs from the floor up to it and the grey above is
     what unusual looks like. `stressScoreFor` normalises on `meter.min`/`meter.max` and never reads `optimal`,
     so Economic power is untouched by this; checked before changing anything. */
  var labPanel = [
    {
      // V643, Keren: "switch the bar to gross debt." The headline 122% everyone quotes is GROSS federal debt; the
      // app read debt held by the public (101%) and explained the gap in the (i) from V641. She chose the bar to
      // show what readers meet. Every number below is the gross series, checked on load against fiscalHistory
      // (03b, OMB via FRED) by checkGrossDebt in 04-components — so this row, its record and Power move together.
      marker:"Debt burden", sub:"gross federal debt ÷ GDP",
      meter:{min:0, max:125.9, value:122.6, optimal:{lte:70, label:"\u2264 70%"},
             ends:{ zone:"50-year average", high:"Elevated" }},
      shortNote:"Q1 2026 — above the WWII peak, and within reach of the 2020 record.",
      note:"Q1 2026, gross federal debt as a share of GDP (Treasury and BEA via FRED, GFDEGDQ188S) — the figure the headlines quote. Gross debt is everything the government owes: debt held by the public, which CBO puts at about 101% of GDP for FY2026, plus roughly a fifth of GDP it owes to its own accounts, mostly the Social Security trust funds. On this measure the WWII record is already broken: gross debt peaked at 119.1% in FY1946 and went higher in the pandemic, to 125.9% in FY2020 — the top of this bar (OMB via FRED, GFDGDPA188S, by fiscal year). The bar starts at zero, the one time the debt was effectively retired (1835, under Andrew Jackson — Treasury's own ledger shows just $33,733 outstanding). The green band ends at 70% of GDP: the average of this same series over the last fifty fiscal years, FY1976–FY2025. CBO publishes a 50-year average only for debt held by the public (51%), so this one is computed here, by CBO's rule — the same computation on the held series gives 50.5%, which is how the rule was checked. Today's 122.6% is about 1.75 times it.",
      direction:"up", flagValue:"122.6%", flagState:"serious"
    },
    {
      marker:"Interest burden", sub:"net interest costs ÷ GDP",
      meter:{min:0.63, max:3.3, value:3.3, optimal:{lte:2, label:"\u2264 2.0%"},
             ends:{ zone:"50-year average", high:"High" }},
      shortNote:"FY2026, $1.0T — already the highest interest burden on record.",
      note:"FY2026, $1.0T, CBO's February 2026 projection. Already the highest on record — the previous peak was 3.2% in FY1991, and WWII's debt was bigger but financed near-zero, so this is uncharted territory (CBO: 4.6% by 2036). Bar runs from the FY1942 low (0.6%) to today. This is the one marker sitting right at the historic edge of its own range. The green band ends at 2.0% of GDP, CBO's 50-year average for net interest, which over that half-century ran between 1.2% and 3.2% — the 3.2% high was 1991.",
      direction:"up", flagValue:"3.3%", flagState:"critical"
    },
    {
      // Version 397, Keren: "you write deficit rate, and it's not always deficit — it can be a surplus, so
      // maybe we should call it federal budget instead." She is right, and the row's own bar proves it: its
      // range starts at −2.3%, the FY2000 SURPLUS, and the budget was in surplus for four straight years to
      // FY2001. A row named for one sign of a two-signed reading is wrong four years in eighty. The new name
      // also matches the page it opens and the top bar of that page, which have both said "Federal budget"
      // since Version 361 — so the row, the door and the room finally agree.
      marker:"Federal budget", sub:"federal deficit or surplus ÷ GDP",
      meter:{min:-2.3, max:26.9, value:5.8, optimal:{lte:3.8, label:"\u2264 3.8%"},
             ends:{ zone:"50-year average", high:"Large" }},
      shortNote:"FY2026, ~$1.9T — this size deficit once required a recession or a war. Neither is present.",
      note:"FY2026, ~$1.9T, CBO's February 2026 projection (FY2025 actual: 5.8%). Below emergency-level spikes, but deficits this size used to require a recession or a war — neither is present now. Range spans the largest surplus of the modern era (FY2000, +2.3% of GDP; the last one was FY2001, +1.2%) to the WWII deficit peak (FY1943, 26.9%), both from the OMB series on FRED. The green band ends at 3.8% of GDP, CBO's stated average deficit over the last fifty years; this year's 5.8% is half again as large.",
      direction:"up", flagValue:"5.8%", flagState:"serious",
      // the only one of the three with a series behind it, so the only one with a page (Version 360). When
      // another marker gets a history, it gets an `opens` too — this is a rule, not a favourite.
      // The TOP BAR name is short (Version 361, Keren). The container inside keeps the full
      // "Federal budget deficit or surplus": the bar names the page, the card names the reading, which is the
      // same split Pulse uses — bar "Pulse", container "Velocity of money (M2)".
      opens:{ id:"sheet-marker-deficit", title:"Federal budget" }
    }
  ];
  /* ---- Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —
     I think it belongs to activity"). She is right on subject matter: output per hour is a measure of what the body
     is DOING, and it sits beside the labour market and industrial output rather than beside three claims on the
     sovereign balance sheet. The tell was in the code all along — it was the one row needing `invert:true`,
     because it is not a pressure at all.

     What the move costs, stated plainly: Power loses its only offsetting term, so it is now a gauge that can only
     fall, and today's reading drops from 30% to 26%. What it gains: the composite is one question asked three
     ways — the stock she owes, what carrying it costs, and what she is adding this year — instead of three of
     those plus something else.

     And it fixed a flaw neither of us was looking for. Productivity was normalised against −11.7% to +20.9%,
     the QUARTERLY annualised extremes, while the figure actually read was the ANNUAL year-over-year one, which
     has never left −1.7% to +6.7%. Every realistic annual reading therefore landed near the middle of that
     range and scored about 50 whatever it was — so through the 1950s–70s, when productivity was genuinely
     strong, it was the single biggest DRAG on the composite. That is why the history lifts so much here: 1969
     goes from 72% to 81%. The marker's own note had disclosed the mismatch since it was written; nothing had
     drawn the conclusion. Its range on the Activity page is the annual one, because that is what it plots. ---- */

  // Productivity growth, as a reading of its own on Activity (Version 395). It keeps its note and its sourcing;
  // the range is rebuilt on the series actually shown — annual output per hour against the year before, whose
  // true extremes across 1948–2025 are −1.68% (1974) and +6.65% (1950).
  var productivityReading = {
    econTerm:"Productivity growth", metricSub:"nonfarm business output per hour, YoY",
    metric:"2.2%", tag:{ state:"good", text:"Above trend" },
    // V497: the low end of this track is 1974, when output per hour FELL — "Low" said nothing
    meter:{ min:-1.7, max:6.7, value:2.2, optimal:{gte:1.3, label:"\u2265 1.3% YoY"},
            ends:{ low:"Falling" } },
    shortCaption:"Q2 2026 — running above the post-2010 slowdown average and roughly at the 70-year trend.",
    caption:"Q2 2026, BLS output per hour vs. a year earlier. Running above the post-2010 slowdown average and roughly at the 70-year trend — the reading that says whether capacity is being rebuilt rather than just borrowed against. Range is the true annual span since 1948: −1.7% in 1974 to +6.7% in 1950."
  };

  /* ---- Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —
     we don't need it, because the trust is embodied in the bond market. So the power supply indicator should only be
     comprised of debt burden, interest burden, deficit rate and productivity growth"). It was the Gallup confidence
     reading, 27% against a 26–48 range. The argument for cutting it is that it was measuring the same thing twice
     and worse: what a nation's creditors actually think of it is priced, continuously, in what they charge her to
     borrow — which is the interest burden already sitting two rows above, and the yield curve on Pressure. A survey
     of how people say they feel about banks is a slower, noisier proxy for a number the market publishes daily.
     Dropping it also removed the panel's one non-fiscal series and its only gap: Gallup did not poll in 1980, 1982
     or 1992, which is why the power history had three years missing. It now has none.
     What went with it: the row, its meter, its two historical comparison values, and the three-year hole. ---- */

  // Overall stress score: composite of the three labPanel markers, each normalized to its own reference range
  // (all three now point the same way: more is worse, so none is inverted). Feeds both the
  // "Financial resilience" summary pill above and the stress bar inside the panel itself, so the two always agree.
  // stressScoreFor() is the single formula — reused below to score real 2007 and 2020 readings the same way,
  // so "today vs. history" is the same math applied to different inputs, never two different models.
  function stressScoreFor(values){
    return Math.round(labPanel.reduce(function(sum, row, i){
      var pct = clampPct(values[i], row.meter.min, row.meter.max);
      return sum + (row.invert ? (100 - pct) : pct);
    }, 0) / labPanel.length);
  }
  var stressScore = stressScoreFor(labPanel.map(function(row){ return row.meter.value; }));
  // Economic power is that composite read from the other end (Version 229, Keren: "instead of financial stress, let's call
  // it economic power, because we are talking on a nation level"): what is left in the battery once the three structural
  // pressures have taken their share. One number, two ways of saying it — powerScore is what the page shows, stressScore
  // stays the maths underneath so nothing silently changes meaning. The word and its state come from energyFromReserve(),
  // whose bands are the stress bands mirrored, so the panel and the word can never disagree.
  var powerOf = function(stress){ return 100 - stress; };
  var powerScore = powerOf(stressScore), powerWord = energyFromReserve(powerScore);

  // Historical comparison points: actual 2007 (pre-crisis) and 2020 (COVID) readings for the same three markers,
  // in labPanel order [debt burden, interest burden, deficit rate],
  // run through stressScoreFor() above. Fixed/editorial — do not recompute or drift these on a data refresh;
  // update only if better-sourced historical figures turn up. Sources (re-verified Sep 2026 against the primary
  // series): OMB via FRED — FYPUGDA188S (debt 34.8 / 98.3), FYOIGDA188S (interest 1.6 / 1.6), FYFSGDA188S (deficit
  // 1.1 / 14.5); BLS nonfarm output per hour, annual average vs. prior year (1.6 / 5.3, current vintage).
  // The Gallup correction recorded here from Version 255 to Version 391 — 2007's trust reading moved from the 2006
  // figure to the real 33, which took the '07 power reading from 63% to 58% — is kept in the version history rather
  // than here, now that the marker it corrected is gone.
  // Version 392: the trust value drops off each row with the marker. The four that remain are unchanged and were
  // re-verified against the primary series in the same pass — FRED FYPUGDA188S 2007 34.79 / 2020 98.32,
  // FYOIGDA188S 1.638 / 1.616, FYFSGDA188S −1.110 / −14.482 (sign flipped, this marker reads deficit-positive),
  // and BLS output per hour annual-average year over year 1.59 / 5.31. The '07 reading moves from 58% to 65% and
  // '20 from 42% to 41%: losing trust lifts 2007 markedly, because 2007's fiscal position was strong and its
  // Gallup number was already weak, and barely moves 2020, whose fiscal shock dominated everything.
  var stressHistory = [
    // V643: gross debt, to two decimals, straight from fiscalHistory — at one decimal the '07 reading would
    // print 68% beside a chart point of 67%. Same numbers checkGrossDebt compares.
    { label:"'07 pre-crisis", values:[61.84, 1.64, 1.11] },
    { label:"'20 COVID",      values:[125.86, 1.62, 14.48] }
  ];
  stressHistory.forEach(function(h){ h.score = stressScoreFor(h.values); });

  // Same "lab result" bar as the 12 individual meters below, read as charge (Version 229, Keren: "the meter of exhausted
  // to energetic would give us the whole range of depletion and energetics"): the bar runs empty to full, the green zone
  // is the charged end (70 and up, roughly where the composite has historically sat outside a downturn), and a
  // dot short of it reads as flagged, exactly like every other meter on the page. `ends` renames the bar's two end words,
  // which are "Low" and "Optimal" everywhere else.
  var powerMeter = { min:0, max:100, value:powerScore, optimal:{gte:70, label:"\u2265 70%"},   // V488: "(ample reserve)" moved to the (i); the label row is a column, not a sentence
    ends:{ low:"Exhausted", zone:"Energetic" } };
  var stressNoteFull = "Each of the three markers is normalized 0–100 against its own actual historical U.S. high and low — a real benchmark, not a padded scale — then averaged equally, and the average subtracted from 100: what the three pressures leave in reserve. It is a quick read on total power, not a substitute for reading each marker. A full charge — 100% — is every one of the three at the best value the United States has actually recorded, so this is a percentage of her own best, not a share of anything measured out in the economy. For comparison, the same formula leaves the actual 2007 pre-crisis reading " + powerOf(stressHistory[0].score) + "% and the actual 2020 COVID reading " + powerOf(stressHistory[1].score) + "% — today's " + powerScore + "% sits below both.";

  // Economic power, year by year (Version 255; recomputed on four markers in Version 392). The SAME stressScoreFor()
  // maths as today's reading, applied to each year's actual markers — so a point on this line means exactly what the
  // number on the row means. That identity is the reason this series could not simply keep its old values when
  // Institutional trust was dropped: the chart would have gone on measuring five things while the figure above it
  // measured four, and the line would have quietly stopped being the same reading.
  //
  // Rebuilt from the primary annual series rather than adjusted: FRED FYPUGDA188S (debt held by the public ÷ GDP),
  // FYOIGDA188S (net interest ÷ GDP), FYFSGDA188S (surplus/deficit ÷ GDP, sign flipped) and BLS nonfarm output per
  // hour (OPHNFB, annual average against the prior year). The method was validated before it was trusted: run on the
  // five-marker inputs it reproduces the app's own stored 2007 and 2020 figures exactly, so the only thing that
  // changed here is the marker count.
  //
  // 1980, 1982 and 1992 now EXIST. They were absent because Gallup did not poll in those years and the composite
  // could not be formed; with trust gone the four fiscal and productivity series are complete and so is the line.
  //
  // Version 393 opens the window to 1948, which is the series' true limit rather than a choice (Keren, asked
  // whether to take it back: "yes"). 1979 was never a judgement about what was worth showing — it was where
  // Gallup's poll began, and it outlived the marker that needed it by one version. The binding constraint now is
  // productivity: BLS output per hour starts in 1947 Q1, so the first year that HAS a year behind it is 1948.
  // Debt runs from FY1939, interest from FY1940 and the deficit from FY1929, so three of the four could go
  // further still; the composite cannot, and a composite of three markers where the chart says four would be the
  // exact fault Version 392 was fixing.
  //
  // This is an EXTENSION, not a recomputation: the 1979-onward values are identical, value for value, to the ones
  // Version 392 shipped — checked by comparing the two strings, not by eye. Only the earlier years are new.
  // What they add is the post-war deleveraging, and it changes the headline: the strongest reading on record is
  // no longer 2002 but 1966 at 72%, and today's 30% is now the weakest in seventy-eight years rather than
  // forty-eight. The 50Y stop appears on its own — the timeline offers a window only when the series is that
  // deep (Version 366), so nothing had to be told about it.
  // REFRESH: append one year when the CBO/OMB actuals for it are out.
  // V643: recomputed on GROSS debt (GFDGDPA188S) with the same stressScoreFor maths, after the method was proved by
  // reproducing all 78 shipped values exactly from FYPUGDA188S. checkGrossDebt recomputes it on every load and
  // warns if a single year differs, so the chart cannot drift from the row it explains.
  var powerHistory = [{y:1948,v:64},{y:1949,v:60},{y:1950,v:61},{y:1951,v:71},{y:1952,v:70},{y:1953,v:69},{y:1954,v:71},{y:1955,v:73},{y:1956,v:76},{y:1957,v:77},{y:1958,v:75},{y:1959,v:74},{y:1960,v:75},{y:1961,v:76},{y:1962,v:76},{y:1963,v:76},{y:1964,v:77},{y:1965,v:79},{y:1966,v:80},{y:1967,v:79},{y:1968,v:77},{y:1969,v:81},{y:1970,v:79},{y:1971,v:78},{y:1972,v:79},{y:1973,v:80},{y:1974,v:79},{y:1975,v:76},{y:1976,v:74},{y:1977,v:75},{y:1978,v:75},{y:1979,v:75},{y:1980,v:71},{y:1981,v:67},{y:1982,v:60},{y:1983,v:58},{y:1984,v:55},{y:1985,v:51},{y:1986,v:50},{y:1987,v:53},{y:1988,v:53},{y:1989,v:51},{y:1990,v:48},{y:1991,v:45},{y:1992,v:46},{y:1993,v:48},{y:1994,v:50},{y:1995,v:48},{y:1996,v:49},{y:1997,v:53},{y:1998,v:57},{y:1999,v:62},{y:2000,v:66},{y:2001,v:68},{y:2002,v:69},{y:2003,v:69},{y:2004,v:69},{y:2005,v:69},{y:2006,v:67},{y:2007,v:67},{y:2008,v:62},{y:2009,v:56},{y:2010,v:55},{y:2011,v:52},{y:2012,v:55},{y:2013,v:58},{y:2014,v:59},{y:2015,v:61},{y:2016,v:58},{y:2017,v:57},{y:2018,v:54},{y:2019,v:50},{y:2020,v:35},{y:2021,v:42},{y:2022,v:45},{y:2023,v:37},{y:2024,v:29},{y:2025,v:27}];

  /* ---------------- The deficit, year by year (Version 358) ----------------
     Keren, Sep 23, 2026, with ARK's chart of the federal deficit as a share of GDP: "where do you think this fits
     in the app? I think when I look at debt burden, that's what we were trying to achieve, but we are saying 101%,
     which is a completely different number." The app already had the reading and was drawing it badly.

     Debt burden is the STOCK — everything she has ever borrowed and not repaid. The Deficit rate is the FLOW — how
     much she is adding this year. Both are true at once and neither is the other, which is why 101% and 5.8% sit on
     one page without contradicting each other; and the interest burden beside them is what carrying the stock costs
     her each year. Three markers, three questions.

     What the app lacked was the PICTURE. The Deficit rate's range bar runs from a modern surplus to the FY1943
     wartime peak, and on that scale today's 5.8% lands a quarter of the way along and reads as mild — so the row's
     own picture was quietly contradicting the sentence underneath it, which says a deficit this size used to require
     a recession or a war. That claim is comparative and it is about WHEN, so it needs a series, not a bar.

     Two choices, both Keren's. It starts at 1946, because peacetime is the only frame in which 1983 and today are
     comparable at all, and the wartime record is STATED in the rows beneath rather than drawn — kept honest without
     being allowed to flatten eighty years into a band. And it lives here, as a second container on this page,
     rather than taking an inner page of its own: one of three markers outranking the other two would invite the
     same claim from Debt burden the next day.

     80 fiscal years of FRED FYFSGDA188S (OMB), the series this marker already cites, checked on load against the
     two records it sets inside this window. Positive is a surplus. */
  var DEF_FROM_YEAR = 1946;
  var deficitHistory = (
    "-7.00 1.61 4.30 0.21 -1.04 1.76 -0.41 -1.67 -0.30 -0.70 0.88 0.72 -0.58 -2.46 0.06 -0.59 -1.18 -0.75 -0.86 -0.19 -0.45 -1.01 -2.67 0.32 -0.26 -1.98 -1.83 -1.05 -0.40 -3.16 -3.94 -2.58 -2.52 -1.55 -2.58 -2.46 -3.83 -5.72 -4.59 -4.89 -4.83 -3.08 -2.96 -2.71 -3.71 -4.37 -4.45 -3.72 -2.79 -2.15 -1.33 -0.26 0.76 1.30 2.30 1.21 -1.44 -3.30 -3.38 -2.44 -1.80 -1.11 -3.10 -9.76 -8.60 -8.33 -6.62 -4.03 -2.75 -2.42 -3.11 -3.39 -3.77 -4.57 -14.48 -11.69 -5.27 -6.07 -6.20 -5.77"
  ).split(" ").map(Number);
  var DEF_MEAN = deficitHistory.reduce(function(a, b){ return a + b; }, 0) / deficitHistory.length;
  /* The fiscal years containing at least one month of an NBER-dated recession. The convention is stated in the
     caption, because a fiscal year is not a calendar year and a mapping has to be declared rather than assumed:
     the federal year ran July–June through FY1976 and October–September from FY1977, and each recession is mapped
     on the calendar in force at the time. FY1983 is shaded for two months — the 1981–82 recession ended in
     November 1982, which falls inside it. That is not a quibble, it is the comparison: 1983's deficit came out of
     a recession and today's has none. */
  var DEF_RECESSION_FY = {1949:1,1950:1,1954:1,1958:1,1960:1,1961:1,1970:1,1971:1,1974:1,1975:1,
                          1980:1,1981:1,1982:1,1983:1,1990:1,1991:1,2001:1,2002:1,2008:1,2009:1,2020:1};
  function checkDeficitHistory(){
    var hi = Math.max.apply(null, deficitHistory), lo = Math.min.apply(null, deficitHistory);
    if (deficitHistory.length !== 80 || Math.abs(hi - 4.30) > 0.005 || Math.abs(lo + 14.48) > 0.005)
      console.warn("deficitHistory failed its check", deficitHistory.length, hi, lo);
  }
  GYN.step("checkDeficitHistory", checkDeficitHistory, "check"); checkDeficitHistory();

  /* Version 359, Keren, with ARK's own chart beside it: "I want the title to be federal budget deficit or
     surplus. All the text can be in an info icon next to the title. Also I want a timeline menu — year to
     date, one year, five year, and max."

     The title and the (i) are done as asked. The menu is done at the spans this series can actually answer.
     ARK can offer year-to-date and one-year windows because their chart is a ROLLING 12-MONTH deficit plotted
     monthly; ours is one bar per fiscal year, so a one-year window is a single bar and a year-to-date window
     is a single bar that is still a projection. The menu therefore zooms by decade — 10Y / 25Y / 50Y / Max —
     which is the same move their range control makes and the one this data supports. Keren's call once the
     alternatives were laid out: keeping the annual series also keeps the 1946 start and all twelve surplus
     years, which the monthly source (Treasury's MTS, October 1980 onward) would have cost.

     The one thing taken from their design unchanged is the dashed 1983 reference line. It is what makes their
     picture land, it is the comparison Keren arrived with, and it is drawn at EVERY range — the level is the
     point, so it stays on screen even when 1983 itself is off the left edge. It replaces the average line
     rather than joining it: two dashed plum lines on one plot is two references and no reading, and the
     average is stated in the rows below. */
  // Version 362, Keren: "add five year to the ruler, because that’s the standard visual most economists use."
  // It also earns its place mechanically: five years is the FIRST window that clears FY2020’s −14.5%, so it is
  // the only one where the scale actually rescales and the recent plateau can be read against the 1983 line.
  // Every longer window contains 2020 and is dominated by it.