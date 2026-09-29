(function(){
  /* ================= EVERY REACH IS ACCOUNTED FOR (Version 620) =================
     Keren asked where the UI architecture stands, and this was the third of the three things holding it down:
     renderers reach into the global document by NAME, 158 times, and almost every reach is guarded with
     `if (!el) return`. The guard is right — a page renders only some of these — and it is also a blanket over
     three different failures that look identical from outside:
       • the name does not exist at all. V617's wiring check fails the build on that one now.
       • the name exists, but not on the page being rendered, so the renderer silently does nothing.
       • the name is on the page and the renderer skipped it, so yesterday's content stays.
     `byId` is the one way to reach an element, and it RECORDS every reach that came up empty. `byIdMaybe` is how a
     reach says it expects nothing sometimes — a control that only some pages carry, an element built later —
     so the difference between "optional" and "broken" is written down in the code instead of being guessed
     from a guard. The suite walks every page and asserts the record is empty: a `byId` that found nothing is a
     renderer reaching for something that is not there, which is a bug with no symptom. */
  function byId(id){
    var n = document.getElementById(id);
    if (!n){
      var m = (window.__elMiss = window.__elMiss || {});
      m[id] = (m[id] || 0) + 1;
    }
    return n;
  }
  function byIdMaybe(id){ return document.getElementById(id); }
  // The theme (Version 198): the page follows the phone's setting unless a choice was saved from the menu's Appearance row;
  // the stylesheet keys off data-theme on <html>, so the choice is applied here, before anything paints.
  try{ var savedTheme = localStorage.getItem("gyneconomy-theme"); if (savedTheme === "light" || savedTheme === "dark") document.documentElement.setAttribute("data-theme", savedTheme); }catch(e){}
  // ---------------- REFRESH: the one date to edit ----------------
  // Every figure on this page is embedded by hand. When refreshing, set DATA_COMPILED to the compile date and
  // it flows to the footer's compile line, the yearly Calendar's year-to-date label, and the
  // era lookup — nothing else needs a date edit. (Month is 0-based: 8 = September.)
  var DATA_COMPILED = new Date(2026, 8, 25);
  var MONTHS_SHORT = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  var dataCompiledLabel = MONTHS_SHORT[DATA_COMPILED.getMonth()] + " " + DATA_COMPILED.getDate() + ", " + DATA_COMPILED.getFullYear();
  // The dial's date line, Version 356, Keren \u2014 overruling Version 355's second branch: "just write today,
  // September 22nd. The data will show the date that it derives from in each metric. And the cycle is the
  // single point of truth. I want it to be updated for today."
  //
  // Version 355 had the hub print "As of <DATA_COMPILED>" whenever a closed US session was missing from the
  // page, so that a stalled refresh would show on the dial. Keren's argument against it is the stronger one
  // and it is about what this object IS. The dial answers "where are we now", and now is today \u2014 a reader
  // opening the app on the 22nd is not asking what was true on the 18th. Provenance does not live here and
  // never did: EVERY figure on the board already names the day it derives from, on its own card ("high-yield
  // OAS, Sep 17 2026", "CPI, YoY, Aug 2026", the VIX's close date), and the Sources screen states the compile
  // date verbatim. So the hub was doing a job three other places already do better, and doing it by making
  // the one thing that should always read "now" read like a date stamp.
  //
  // What that trades away, recorded so nobody re-derives it by surprise: the dial will no longer betray a
  // frozen refresh. That surveillance moves entirely to the scheduled task \u2014 its WHEN TO PUBLISH rule (a
  // trading-day run that publishes nothing is a failed run) and its per-figure date labels. If the page ever
  // looks current while the figures are old, look at the task, not at the dial.
  function hubTodayHtml(){
    var d = new Date();
    return "<b>Today,</b> " + MONTHS_SHORT[d.getMonth()] + " " + d.getDate();
  }
  function asOfLabel(){
    var d = new Date();
    return "Today, " + MONTHS_SHORT[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
  }

  // ---------------- SEASON ----------------
  // Six seasons (Keren's table, Sep 16, 2026) in their canonical order — the sequence a textbook cycle runs
  // through. The dial no longer draws this order as a ring (dropped Sep 17, 2026 as redundant); it paints each
  // quarter of the current cycle in the season the rule computed for it, and the Content tab's table is the legend.
  // Each season carries the book's own ACTION for it — the four quadrants of the manuscript's cycle figure
  // with Spring–Deflation sharing Growing too (Keren, Sep 18, 2026: replaces the retired Goldilocks Zone) — and a
  // small line icon for it. There is no asset-class lead anymore: the
  // Investment Clock tilt was dropped on Sep 17, 2026 at Keren's instruction. Two seasons carry the book's
  // fertility name (Ovulation = Summer, Groundation = Winter); leave altName null elsewhere until the manuscript
  // supplies one — don't invent one here.
  var wheelMeta = {
    summer:{name:"Summer", theme:"Inflation", altName:"Ovulation"},
    autumn:{name:"Autumn", theme:"Disinflation", altName:null},
    lateautumn:{name:"Autumn", theme:"Stagflation", altName:null}, // the second Autumn — "Late" dropped (Keren, Sep 19, 2026); the key stays lateautumn so nothing downstream moves
    winter:{name:"Winter", theme:"Deflation", altName:"Groundation"},
    springdeflation:{name:"Spring", theme:"Deflation", altName:null}, // expansion + cooling, within or below the range — replaces the Goldilocks Zone (Keren, Sep 18, 2026)
    spring:{name:"Spring", theme:"Reflation", altName:null}
  };
  // currentSeason is COMPUTED (computeSeason(), further down, from the direction of growth and the level and
  // direction of inflation — Keren's rule: inflation rising while growth falls is stagflation). Set
  // seasonOverride to a wheelOrder key only to pin the season by hand; leave null to let the data decide.
  var seasonOverride = null;
  // The Cycle tab's one line on where we are now — deliberately short; editorial, refreshed by hand. (The
  // Calendar tab carries each cycle's fuller blurb; this is not a copy of it.)
  var cycleNowNote = "Four years into an AI-driven bull run, growth has slowed each year since 2023 while inflation has climbed back above 3% — the stagflation stretch of the cycle, with the Fed now raising rates into it.";

  // CPI-U inflation, year over year, monthly. The series opens well before the current cycle does, so every
  // quarter of it has a twelve-month window behind it. The season reads the DIRECTION of inflation from a
  // fitted trend over the last twelve readings (not one month against the next) and its level from the latest.
  // The dial re-runs the same reading at the end of every quarter of a cycle, and the cycle view draws any cycle's
  // months, so the series runs from Jan 1989 — comfortably before the first cycle opens (1991 since Version 511),
  // so its opening quarter already has its twelve months behind it. Oct 2025 has no BLS reading (the government shutdown) and is simply absent.
  // REFRESH: append the newest month; never drop earlier ones. Source: FRED CPIAUCSL (index), YoY computed from it.
  var cpiYoYHistory = [
    {m:"1989-01", v:4.48}, {m:"1989-02", v:4.65}, {m:"1989-03", v:4.89}, {m:"1989-04", v:5.03}, {m:"1989-05", v:5.28}, {m:"1989-06", v:5.17},
    {m:"1989-07", v:5.06}, {m:"1989-08", v:4.62}, {m:"1989-09", v:4.44}, {m:"1989-10", v:4.59}, {m:"1989-11", v:4.66}, {m:"1989-12", v:4.64},
    {m:"1990-01", v:5.20}, {m:"1990-02", v:5.26}, {m:"1990-03", v:5.24}, {m:"1990-04", v:4.71}, {m:"1990-05", v:4.37}, {m:"1990-06", v:4.67},
    {m:"1990-07", v:4.82}, {m:"1990-08", v:5.70}, {m:"1990-09", v:6.17}, {m:"1990-10", v:6.38}, {m:"1990-11", v:6.20}, {m:"1990-12", v:6.25},
    {m:"1991-01", v:5.65}, {m:"1991-02", v:5.31}, {m:"1991-03", v:4.82}, {m:"1991-04", v:4.81}, {m:"1991-05", v:5.03}, {m:"1991-06", v:4.70},
    {m:"1991-07", v:4.37}, {m:"1991-08", v:3.80}, {m:"1991-09", v:3.40}, {m:"1991-10", v:2.85}, {m:"1991-11", v:3.07}, {m:"1991-12", v:2.98},
    {m:"1992-01", v:2.67}, {m:"1992-02", v:2.82}, {m:"1992-03", v:3.19}, {m:"1992-04", v:3.18}, {m:"1992-05", v:3.02}, {m:"1992-06", v:3.01},
    {m:"1992-07", v:3.16}, {m:"1992-08", v:3.07}, {m:"1992-09", v:2.99}, {m:"1992-10", v:3.28}, {m:"1992-11", v:3.12}, {m:"1992-12", v:2.97},
    {m:"1993-01", v:3.25}, {m:"1993-02", v:3.25}, {m:"1993-03", v:3.02}, {m:"1993-04", v:3.16}, {m:"1993-05", v:3.22}, {m:"1993-06", v:3.00},
    {m:"1993-07", v:2.85}, {m:"1993-08", v:2.84}, {m:"1993-09", v:2.76}, {m:"1993-10", v:2.75}, {m:"1993-11", v:2.74}, {m:"1993-12", v:2.81},
    {m:"1994-01", v:2.45}, {m:"1994-02", v:2.52}, {m:"1994-03", v:2.65}, {m:"1994-04", v:2.36}, {m:"1994-05", v:2.29}, {m:"1994-06", v:2.49},
    {m:"1994-07", v:2.70}, {m:"1994-08", v:2.90}, {m:"1994-09", v:2.97}, {m:"1994-10", v:2.61}, {m:"1994-11", v:2.60}, {m:"1994-12", v:2.60},
    {m:"1995-01", v:2.87}, {m:"1995-02", v:2.86}, {m:"1995-03", v:2.79}, {m:"1995-04", v:3.13}, {m:"1995-05", v:3.12}, {m:"1995-06", v:3.04},
    {m:"1995-07", v:2.83}, {m:"1995-08", v:2.62}, {m:"1995-09", v:2.55}, {m:"1995-10", v:2.74}, {m:"1995-11", v:2.60}, {m:"1995-12", v:2.53},
    {m:"1996-01", v:2.79}, {m:"1996-02", v:2.72}, {m:"1996-03", v:2.84}, {m:"1996-04", v:2.83}, {m:"1996-05", v:2.83}, {m:"1996-06", v:2.82},
    {m:"1996-07", v:2.88}, {m:"1996-08", v:2.81}, {m:"1996-09", v:3.00}, {m:"1996-10", v:3.06}, {m:"1996-11", v:3.25}, {m:"1996-12", v:3.38},
    {m:"1997-01", v:3.04}, {m:"1997-02", v:3.03}, {m:"1997-03", v:2.77}, {m:"1997-04", v:2.43}, {m:"1997-05", v:2.24}, {m:"1997-06", v:2.23},
    {m:"1997-07", v:2.17}, {m:"1997-08", v:2.29}, {m:"1997-09", v:2.22}, {m:"1997-10", v:2.09}, {m:"1997-11", v:1.89}, {m:"1997-12", v:1.70},
    {m:"1998-01", v:1.63}, {m:"1998-02", v:1.44}, {m:"1998-03", v:1.38}, {m:"1998-04", v:1.44}, {m:"1998-05", v:1.69}, {m:"1998-06", v:1.62},
    {m:"1998-07", v:1.75}, {m:"1998-08", v:1.62}, {m:"1998-09", v:1.43}, {m:"1998-10", v:1.49}, {m:"1998-11", v:1.48}, {m:"1998-12", v:1.61},
    {m:"1999-01", v:1.67}, {m:"1999-02", v:1.67}, {m:"1999-03", v:1.73}, {m:"1999-04", v:2.28}, {m:"1999-05", v:2.09}, {m:"1999-06", v:1.97},
    {m:"1999-07", v:2.14}, {m:"1999-08", v:2.26}, {m:"1999-09", v:2.63}, {m:"1999-10", v:2.56}, {m:"1999-11", v:2.62}, {m:"1999-12", v:2.68},
    {m:"2000-01", v:2.79}, {m:"2000-02", v:3.22}, {m:"2000-03", v:3.76}, {m:"2000-04", v:3.01}, {m:"2000-05", v:3.13}, {m:"2000-06", v:3.73},
    {m:"2000-07", v:3.60}, {m:"2000-08", v:3.35}, {m:"2000-09", v:3.46}, {m:"2000-10", v:3.45}, {m:"2000-11", v:3.44}, {m:"2000-12", v:3.44},
    {m:"2001-01", v:3.72}, {m:"2001-02", v:3.53}, {m:"2001-03", v:2.98}, {m:"2001-04", v:3.22}, {m:"2001-05", v:3.56}, {m:"2001-06", v:3.19},
    {m:"2001-07", v:2.72}, {m:"2001-08", v:2.72}, {m:"2001-09", v:2.59}, {m:"2001-10", v:2.13}, {m:"2001-11", v:1.89}, {m:"2001-12", v:1.60},
    {m:"2002-01", v:1.20}, {m:"2002-02", v:1.14}, {m:"2002-03", v:1.36}, {m:"2002-04", v:1.64}, {m:"2002-05", v:1.24}, {m:"2002-06", v:1.07},
    {m:"2002-07", v:1.47}, {m:"2002-08", v:1.75}, {m:"2002-09", v:1.52}, {m:"2002-10", v:2.03}, {m:"2002-11", v:2.25}, {m:"2002-12", v:2.48},
    {m:"2003-01", v:2.76}, {m:"2003-02", v:3.15}, {m:"2003-03", v:3.03}, {m:"2003-04", v:2.18}, {m:"2003-05", v:1.89}, {m:"2003-06", v:1.95},
    {m:"2003-07", v:2.06}, {m:"2003-08", v:2.22}, {m:"2003-09", v:2.38}, {m:"2003-10", v:2.04}, {m:"2003-11", v:1.93}, {m:"2003-12", v:2.04},
    {m:"2004-01", v:2.03}, {m:"2004-02", v:1.69}, {m:"2004-03", v:1.74}, {m:"2004-04", v:2.29}, {m:"2004-05", v:2.90}, {m:"2004-06", v:3.17},
    {m:"2004-07", v:2.94}, {m:"2004-08", v:2.55}, {m:"2004-09", v:2.54}, {m:"2004-10", v:3.19}, {m:"2004-11", v:3.62}, {m:"2004-12", v:3.34},
    {m:"2005-01", v:2.84}, {m:"2005-02", v:3.05}, {m:"2005-03", v:3.21}, {m:"2005-04", v:3.36}, {m:"2005-05", v:2.87}, {m:"2005-06", v:2.54},
    {m:"2005-07", v:3.07}, {m:"2005-08", v:3.65}, {m:"2005-09", v:4.74}, {m:"2005-10", v:4.35}, {m:"2005-11", v:3.34}, {m:"2005-12", v:3.34},
    {m:"2006-01", v:4.02}, {m:"2006-02", v:3.64}, {m:"2006-03", v:3.42}, {m:"2006-04", v:3.61}, {m:"2006-05", v:3.98}, {m:"2006-06", v:4.18},
    {m:"2006-07", v:4.10}, {m:"2006-08", v:3.93}, {m:"2006-09", v:2.01}, {m:"2006-10", v:1.41}, {m:"2006-11", v:1.97}, {m:"2006-12", v:2.52},
    {m:"2007-01", v:2.08}, {m:"2007-02", v:2.42}, {m:"2007-03", v:2.80}, {m:"2007-04", v:2.59}, {m:"2007-05", v:2.71}, {m:"2007-06", v:2.69},
    {m:"2007-07", v:2.32}, {m:"2007-08", v:1.90}, {m:"2007-09", v:2.83}, {m:"2007-10", v:3.61}, {m:"2007-11", v:4.37}, {m:"2007-12", v:4.11},
    {m:"2008-01", v:4.29}, {m:"2008-02", v:4.14}, {m:"2008-03", v:3.97}, {m:"2008-04", v:3.90}, {m:"2008-05", v:4.09}, {m:"2008-06", v:4.94},
    {m:"2008-07", v:5.50}, {m:"2008-08", v:5.31}, {m:"2008-09", v:4.95}, {m:"2008-10", v:3.73}, {m:"2008-11", v:1.10}, {m:"2008-12", v:-0.02},
    {m:"2009-01", v:-0.11}, {m:"2009-02", v:0.01}, {m:"2009-03", v:-0.45}, {m:"2009-04", v:-0.58}, {m:"2009-05", v:-1.02}, {m:"2009-06", v:-1.23},
    {m:"2009-07", v:-1.96}, {m:"2009-08", v:-1.48}, {m:"2009-09", v:-1.38}, {m:"2009-10", v:-0.22}, {m:"2009-11", v:1.91}, {m:"2009-12", v:2.81},
    {m:"2010-01", v:2.62}, {m:"2010-02", v:2.15}, {m:"2010-03", v:2.29}, {m:"2010-04", v:2.21}, {m:"2010-05", v:2.00}, {m:"2010-06", v:1.12},
    {m:"2010-07", v:1.34}, {m:"2010-08", v:1.15}, {m:"2010-09", v:1.12}, {m:"2010-10", v:1.17}, {m:"2010-11", v:1.08}, {m:"2010-12", v:1.44},
    {m:"2011-01", v:1.70}, {m:"2011-02", v:2.12}, {m:"2011-03", v:2.62}, {m:"2011-04", v:3.08}, {m:"2011-05", v:3.46}, {m:"2011-06", v:3.50},
    {m:"2011-07", v:3.58}, {m:"2011-08", v:3.75}, {m:"2011-09", v:3.81}, {m:"2011-10", v:3.52}, {m:"2011-11", v:3.45}, {m:"2011-12", v:3.06},
    {m:"2012-01", v:3.01}, {m:"2012-02", v:2.90}, {m:"2012-03", v:2.58}, {m:"2012-04", v:2.27}, {m:"2012-05", v:1.74}, {m:"2012-06", v:1.65},
    {m:"2012-07", v:1.42}, {m:"2012-08", v:1.69}, {m:"2012-09", v:1.95}, {m:"2012-10", v:2.16}, {m:"2012-11", v:1.80}, {m:"2012-12", v:1.76},
    {m:"2013-01", v:1.68}, {m:"2013-02", v:2.02}, {m:"2013-03", v:1.52}, {m:"2013-04", v:1.14}, {m:"2013-05", v:1.39}, {m:"2013-06", v:1.72},
    {m:"2013-07", v:1.89}, {m:"2013-08", v:1.54}, {m:"2013-09", v:1.09}, {m:"2013-10", v:0.88}, {m:"2013-11", v:1.23}, {m:"2013-12", v:1.51},
    {m:"2014-01", v:1.56}, {m:"2014-02", v:1.12}, {m:"2014-03", v:1.61}, {m:"2014-04", v:2.02}, {m:"2014-05", v:2.17}, {m:"2014-06", v:2.06},
    {m:"2014-07", v:1.97}, {m:"2014-08", v:1.72}, {m:"2014-09", v:1.68}, {m:"2014-10", v:1.61}, {m:"2014-11", v:1.23}, {m:"2014-12", v:0.65},
    {m:"2015-01", v:-0.23}, {m:"2015-02", v:-0.09}, {m:"2015-03", v:-0.02}, {m:"2015-04", v:-0.10}, {m:"2015-05", v:0.04}, {m:"2015-06", v:0.18},
    {m:"2015-07", v:0.23}, {m:"2015-08", v:0.24}, {m:"2015-09", v:0.01}, {m:"2015-10", v:0.13}, {m:"2015-11", v:0.44}, {m:"2015-12", v:0.64},
    {m:"2016-01", v:1.24}, {m:"2016-02", v:0.85}, {m:"2016-03", v:0.89}, {m:"2016-04", v:1.17}, {m:"2016-05", v:1.08}, {m:"2016-06", v:1.08},
    {m:"2016-07", v:0.87}, {m:"2016-08", v:1.06}, {m:"2016-09", v:1.55}, {m:"2016-10", v:1.69}, {m:"2016-11", v:1.68}, {m:"2016-12", v:2.05},
    {m:"2017-01", v:2.51}, {m:"2017-02", v:2.81}, {m:"2017-03", v:2.44}, {m:"2017-04", v:2.18}, {m:"2017-05", v:1.86}, {m:"2017-06", v:1.64},
    {m:"2017-07", v:1.73}, {m:"2017-08", v:1.93}, {m:"2017-09", v:2.18}, {m:"2017-10", v:2.02}, {m:"2017-11", v:2.17}, {m:"2017-12", v:2.13},
    {m:"2018-01", v:2.15}, {m:"2018-02", v:2.26}, {m:"2018-03", v:2.33}, {m:"2018-04", v:2.47}, {m:"2018-05", v:2.78}, {m:"2018-06", v:2.81},
    {m:"2018-07", v:2.85}, {m:"2018-08", v:2.64}, {m:"2018-09", v:2.33}, {m:"2018-10", v:2.49}, {m:"2018-11", v:2.15}, {m:"2018-12", v:2.00},
    {m:"2019-01", v:1.49}, {m:"2019-02", v:1.52}, {m:"2019-03", v:1.88}, {m:"2019-04", v:2.00}, {m:"2019-05", v:1.80}, {m:"2019-06", v:1.67},
    {m:"2019-07", v:1.83}, {m:"2019-08", v:1.74}, {m:"2019-09", v:1.68}, {m:"2019-10", v:1.73}, {m:"2019-11", v:2.09}, {m:"2019-12", v:2.32},
    {m:"2020-01", v:2.60}, {m:"2020-02", v:2.34}, {m:"2020-03", v:1.49}, {m:"2020-04", v:0.31}, {m:"2020-05", v:0.20}, {m:"2020-06", v:0.72},
    {m:"2020-07", v:1.00}, {m:"2020-08", v:1.28}, {m:"2020-09", v:1.39}, {m:"2020-10", v:1.23}, {m:"2020-11", v:1.18}, {m:"2020-12", v:1.32},
    {m:"2021-01", v:1.37}, {m:"2021-02", v:1.67}, {m:"2021-03", v:2.67}, {m:"2021-04", v:4.13}, {m:"2021-05", v:4.92}, {m:"2021-06", v:5.30},
    {m:"2021-07", v:5.25}, {m:"2021-08", v:5.15}, {m:"2021-09", v:5.35}, {m:"2021-10", v:6.24}, {m:"2021-11", v:6.90}, {m:"2021-12", v:7.17},
    {m:"2022-01", v:7.56}, {m:"2022-02", v:7.94}, {m:"2022-03", v:8.57}, {m:"2022-04", v:8.23}, {m:"2022-05", v:8.54}, {m:"2022-06", v:8.98},
    {m:"2022-07", v:8.46}, {m:"2022-08", v:8.22}, {m:"2022-09", v:8.19}, {m:"2022-10", v:7.76}, {m:"2022-11", v:7.12}, {m:"2022-12", v:6.40},
    {m:"2023-01", v:6.33}, {m:"2023-02", v:5.96}, {m:"2023-03", v:4.92}, {m:"2023-04", v:4.95}, {m:"2023-05", v:4.13}, {m:"2023-06", v:3.07},
    {m:"2023-07", v:3.29}, {m:"2023-08", v:3.72}, {m:"2023-09", v:3.69}, {m:"2023-10", v:3.25}, {m:"2023-11", v:3.13}, {m:"2023-12", v:3.32},
    {m:"2024-01", v:3.09}, {m:"2024-02", v:3.16}, {m:"2024-03", v:3.49}, {m:"2024-04", v:3.36}, {m:"2024-05", v:3.24}, {m:"2024-06", v:2.97},
    {m:"2024-07", v:2.94}, {m:"2024-08", v:2.61}, {m:"2024-09", v:2.43}, {m:"2024-10", v:2.58}, {m:"2024-11", v:2.72}, {m:"2024-12", v:2.87},
    {m:"2025-01", v:2.99}, {m:"2025-02", v:2.80}, {m:"2025-03", v:2.38}, {m:"2025-04", v:2.33}, {m:"2025-05", v:2.38}, {m:"2025-06", v:2.68},
    {m:"2025-07", v:2.74}, {m:"2025-08", v:2.94}, {m:"2025-09", v:3.02}, {m:"2025-11", v:2.70}, {m:"2025-12", v:2.65},
    {m:"2026-01", v:2.39}, {m:"2026-02", v:2.43}, {m:"2026-03", v:3.29}, {m:"2026-04", v:3.78}, {m:"2026-05", v:4.17}, {m:"2026-06", v:3.46},
    {m:"2026-07", v:3.30}, {m:"2026-08", v:3.35}
  ];
  // Real GDP growth, YEAR OVER YEAR, by quarter, from 1988 Q1 — two years before the first cycle opened, so
  // every quarter of every cycle has its growth window behind it. This is the season's growth-direction
  // input (the annual series above still measures each cycle as a whole). Computed from FRED GDPC1 levels
  // (chained 2017 dollars, SAAR): each quarter against the same quarter a year earlier, the standard growth
  // rate and far steadier than the quarter-on-quarter annualized print. Note the 2020 collapse and 2021 rebound
  // sit inside the windows for 2022, which is why early 2022 reads as rising growth.
  // REFRESH after each BEA release (late Jan/Apr/Jul/Oct, revised twice after): append the new quarter and
  // revise the ones BEA revised; never drop earlier quarters.
  var gdpQuarterlyYoY = [
    {q:"1988 Q1", v:4.24}, {q:"1988 Q2", v:4.48}, {q:"1988 Q3", v:4.19}, {q:"1988 Q4", v:3.80},
    {q:"1989 Q1", v:4.32}, {q:"1989 Q2", v:3.75}, {q:"1989 Q3", v:3.91}, {q:"1989 Q4", v:2.74},
    {q:"1990 Q1", v:2.82}, {q:"1990 Q2", v:2.41}, {q:"1990 Q3", v:1.73}, {q:"1990 Q4", v:0.60},
    {q:"1991 Q1", v:-0.95}, {q:"1991 Q2", v:-0.54}, {q:"1991 Q3", v:-0.10}, {q:"1991 Q4", v:1.17},
    {q:"1992 Q1", v:2.86}, {q:"1992 Q2", v:3.17}, {q:"1992 Q3", v:3.67}, {q:"1992 Q4", v:4.38},
    {q:"1993 Q1", v:3.32}, {q:"1993 Q2", v:2.81}, {q:"1993 Q3", v:2.29}, {q:"1993 Q4", v:2.61},
    {q:"1994 Q1", v:3.43}, {q:"1994 Q2", v:4.23}, {q:"1994 Q3", v:4.34}, {q:"1994 Q4", v:4.12},
    {q:"1995 Q1", v:3.48}, {q:"1995 Q2", v:2.40}, {q:"1995 Q3", v:2.67}, {q:"1995 Q4", v:2.20},
    {q:"1996 Q1", v:2.60}, {q:"1996 Q2", v:4.00}, {q:"1996 Q3", v:4.05}, {q:"1996 Q4", v:4.42},
    {q:"1997 Q1", v:4.31}, {q:"1997 Q2", v:4.31}, {q:"1997 Q3", v:4.67}, {q:"1997 Q4", v:4.48},
    {q:"1998 Q1", v:4.86}, {q:"1998 Q2", v:4.09}, {q:"1998 Q3", v:4.10}, {q:"1998 Q4", v:4.88},
    {q:"1999 Q1", v:4.82}, {q:"1999 Q2", v:4.72}, {q:"1999 Q3", v:4.79}, {q:"1999 Q4", v:4.82},
    {q:"2000 Q1", v:4.22}, {q:"2000 Q2", v:5.24}, {q:"2000 Q3", v:3.97}, {q:"2000 Q4", v:2.91},
    {q:"2001 Q1", v:2.20}, {q:"2001 Q2", v:1.00}, {q:"2001 Q3", v:0.49}, {q:"2001 Q4", v:0.17},
    {q:"2002 Q1", v:1.34}, {q:"2002 Q2", v:1.33}, {q:"2002 Q3", v:2.15}, {q:"2002 Q4", v:1.99},
    {q:"2003 Q1", v:1.68}, {q:"2003 Q2", v:1.96}, {q:"2003 Q3", v:3.23}, {q:"2003 Q4", v:4.30},
    {q:"2004 Q1", v:4.34}, {q:"2004 Q2", v:4.23}, {q:"2004 Q3", v:3.49}, {q:"2004 Q4", v:3.35},
    {q:"2005 Q1", v:3.91}, {q:"2005 Q2", v:3.62}, {q:"2005 Q3", v:3.45}, {q:"2005 Q4", v:2.97},
    {q:"2006 Q1", v:3.21}, {q:"2006 Q2", v:2.97}, {q:"2006 Q3", v:2.33}, {q:"2006 Q4", v:2.63},
    {q:"2007 Q1", v:1.58}, {q:"2007 Q2", v:1.93}, {q:"2007 Q3", v:2.37}, {q:"2007 Q4", v:2.13},
    {q:"2008 Q1", v:1.39}, {q:"2008 Q2", v:1.38}, {q:"2008 Q3", v:0.27}, {q:"2008 Q4", v:-2.54},
    {q:"2009 Q1", v:-3.23}, {q:"2009 Q2", v:-3.98}, {q:"2009 Q3", v:-3.13}, {q:"2009 Q4", v:0.11},
    {q:"2010 Q1", v:1.75}, {q:"2010 Q2", v:2.91}, {q:"2010 Q3", v:3.34}, {q:"2010 Q4", v:2.78},
    {q:"2011 Q1", v:2.04}, {q:"2011 Q2", v:1.74}, {q:"2011 Q3", v:0.94}, {q:"2011 Q4", v:1.54},
    {q:"2012 Q1", v:2.64}, {q:"2012 Q2", v:2.40}, {q:"2012 Q3", v:2.57}, {q:"2012 Q4", v:1.55},
    {q:"2013 Q1", v:1.70}, {q:"2013 Q2", v:1.52}, {q:"2013 Q3", v:2.24}, {q:"2013 Q4", v:3.01},
    {q:"2014 Q1", v:1.65}, {q:"2014 Q2", v:2.69}, {q:"2014 Q3", v:3.06}, {q:"2014 Q4", v:2.69},
    {q:"2015 Q1", v:3.97}, {q:"2015 Q2", v:3.28}, {q:"2015 Q3", v:2.45}, {q:"2015 Q4", v:2.12},
    {q:"2016 Q1", v:1.80}, {q:"2016 Q2", v:1.49}, {q:"2016 Q3", v:1.81}, {q:"2016 Q4", v:2.18},
    {q:"2017 Q1", v:2.09}, {q:"2017 Q2", v:2.33}, {q:"2017 Q3", v:2.41}, {q:"2017 Q4", v:2.99},
    {q:"2018 Q1", v:3.33}, {q:"2018 Q2", v:3.30}, {q:"2018 Q3", v:3.13}, {q:"2018 Q4", v:2.13},
    {q:"2019 Q1", v:1.93}, {q:"2019 Q2", v:2.24}, {q:"2019 Q3", v:2.80}, {q:"2019 Q4", v:3.35},
    {q:"2020 Q1", v:1.36}, {q:"2020 Q2", v:-7.40}, {q:"2020 Q3", v:-1.36}, {q:"2020 Q4", v:-0.92},
    {q:"2021 Q1", v:1.80}, {q:"2021 Q2", v:12.39}, {q:"2021 Q3", v:5.15}, {q:"2021 Q4", v:5.76},
    {q:"2022 Q1", v:4.03}, {q:"2022 Q2", v:2.45}, {q:"2022 Q3", v:2.35}, {q:"2022 Q4", v:1.32},
    {q:"2023 Q1", v:2.31}, {q:"2023 Q2", v:2.79}, {q:"2023 Q3", v:3.23}, {q:"2023 Q4", v:3.39},
    {q:"2024 Q1", v:2.86}, {q:"2024 Q2", v:3.13}, {q:"2024 Q3", v:2.79}, {q:"2024 Q4", v:2.40},
    {q:"2025 Q1", v:2.02}, {q:"2025 Q2", v:2.08}, {q:"2025 Q3", v:2.34}, {q:"2025 Q4", v:1.99},
    {q:"2026 Q1", v:2.68}, {q:"2026 Q2", v:2.10}
  ];
  // Real GDP in billions of chained 2017 dollars (FRED GDPC1, last updated Aug 26, 2026) — the LEVELS the rates above
  // are made from. Stored rather than derived, because a rate cannot be un-divided back into the two numbers it came
  // from, and the Year-on-year view has to show both. Reconciled against gdpQuarterlyYoY: every quarter from 2022 Q1
  // to 2026 Q2 divides out to the stored rate at two decimals (Version 267). REFRESH with each BEA release.
  var gdpLevels = [
    {q:"2021 Q1", v:21082.134}, {q:"2021 Q2", v:21440.929}, {q:"2021 Q3", v:21617.828}, {q:"2021 Q4", v:21988.737},
    {q:"2022 Q1", v:21932.710}, {q:"2022 Q2", v:21967.045}, {q:"2022 Q3", v:22125.625}, {q:"2022 Q4", v:22278.345},
    {q:"2023 Q1", v:22439.607}, {q:"2023 Q2", v:22580.499}, {q:"2023 Q3", v:22840.989}, {q:"2023 Q4", v:23033.780},
    {q:"2024 Q1", v:23082.119}, {q:"2024 Q2", v:23286.508}, {q:"2024 Q3", v:23478.570}, {q:"2024 Q4", v:23586.542},
    {q:"2025 Q1", v:23548.210}, {q:"2025 Q2", v:23770.976}, {q:"2025 Q3", v:24026.834}, {q:"2025 Q4", v:24055.749},
    {q:"2026 Q1", v:24180.419}, {q:"2026 Q2", v:24269.613}
  ];
  /* The Fed funds target range and its last move. REFRESH after each FOMC decision — and since Version 517 that
     refresh actually reaches the screen: Pressure's `policyFacts` rows read THIS object rather than the three
     hand-typed strings they used to carry. `vote` joined it in V517 for the same reason; it was the one fact on
     that row with nowhere to live. A single target rather than a range (the Fed published one before Dec 2008)
     is written by setting lo and hi to the same number, which `fedFundsRange()` renders as one figure. */