  // ---- The season, computed ----
  function slopeOf(vals){
    var n = vals.length, mx = (n - 1) / 2, my = vals.reduce(function(a, b){ return a + b; }, 0) / n, num = 0, den = 0;
    vals.forEach(function(v, i){ num += (i - mx) * (v - my); den += (i - mx) * (i - mx); });
    return den ? num / den : 0;
  }
  var GROWTH_WINDOW = 6;
  function readSeason(cpi12, gdp8, prevRegime){
    var cpiNow = cpi12[cpi12.length - 1].v;
    var cpiSlope = slopeOf(cpi12.map(function(d){ return d.v; }));
    var cpiDirection = cpiSlope > 0.02 ? "rising" : cpiSlope < -0.02 ? "falling" : "steady";
    var cpiHot = cpiNow > 3.0, cpiCold = cpiNow < 1.0;
    var growthSlopeQ = slopeOf(gdp8.map(function(d){ return d.v; }));
    var growthTrend = growthSlopeQ > 0.025 ? "rising" : growthSlopeQ < -0.025 ? "falling" : "flat";
    var regime = growthTrend === "falling" ? "contraction" : growthTrend === "rising" ? "expansion" : (prevRegime || "expansion");
    var cooling = cpiDirection === "falling", season;
    if (regime === "expansion"){
      if (cpiHot) season = "summer";
      else season = cooling ? "springdeflation" : "spring";
    } else {
      if (cpiCold) season = "winter";
      else season = cooling ? "autumn" : "lateautumn";
    }
    return { season:season, regime:regime, cpiNow:cpiNow, cpiSlope:cpiSlope, cpiDirection:cpiDirection, cpiHot:cpiHot, cpiCold:cpiCold,
             growthSlopeQ:growthSlopeQ, growthTrend:growthTrend, gdpLatest:gdp8[gdp8.length - 1] };
  }
  var QUARTER_END_MONTH = {Q1:"03", Q2:"06", Q3:"09", Q4:"12"};
  function qLabel(q){ var m = /^(\d{4}) (Q[1-4])$/.exec(q); return m ? m[2] + " " + m[1] : q; }
  var seasonTrackAll = (function(){
    var out = [], prevRegime;
    gdpQuarterlyYoY.forEach(function(d, i){
      if (i < 5) return;
      var y = parseInt(d.q.slice(0, 4), 10), qn = d.q.slice(5);
      var qEnd = y + "-" + QUARTER_END_MONTH[qn];
      var c12 = cpiYoYHistory.filter(function(c){ return c.m <= qEnd; }).slice(-12);
      if (c12.length < 12) return;
      var r = readSeason(c12, gdpQuarterlyYoY.slice(i - GROWTH_WINDOW + 1, i + 1), prevRegime);
      prevRegime = r.regime;
      out[i] = { i:i, q:d.q, y:y, qn:qn, reading:r };
    });
    return out;
  })();

  var regimeByQ = (function(){
    var out = {};
    seasonTrackAll.forEach(function(e){ if (e) out[e.q] = e.reading.regime; });
    return out;
  })();
  function quarterRegime(d){ return regimeByQ[d.q] || (d.v >= 0 ? "expansion" : "contraction"); }

  // ---- One cycle, as the cycle view reads it ----
  var cycleYtdFraction = (DATA_COMPILED - new Date(calendarTodayY, 0, 1)) / (new Date(calendarTodayY + 1, 0, 1) - new Date(calendarTodayY, 0, 1));
  function seasonTitle(meta){ return meta.theme ? meta.name + " · " + meta.theme.toLowerCase() : meta.name; }
  function monthLabel(m){ return MONTHS_SHORT[parseInt(m.slice(5, 7), 10) - 1] + " " + m.slice(0, 4); }
  function cycleReturns(from, to){
    var level = 1, peakRet = -Infinity, peakYear = null, cumByYear = {};
    for (var py = from; py <= to; py++){
      var pr = sp500AnnualReturns[py]; if (pr == null) continue;
      level *= 1 + pr / 100;
      cumByYear[py] = (level - 1) * 100;
      if (pr > peakRet){ peakRet = pr; peakYear = py; }
    }
    return { peakYear:peakYear, cumByYear:cumByYear };
  }
  function cycleModel(era){
    var ongoing = !!era.ongoing;
    var endYear = ongoing ? calendarTodayY : era.to;
    var elapsedYears = ongoing ? (calendarTodayY - era.from) + cycleYtdFraction : (era.to - era.from + 1);
    var yearIndex = ongoing ? Math.floor(elapsedYears) + 1 : (era.to - era.from + 1);
    var dialYears = Math.max(typicalCycleYears, Math.ceil(elapsedYears));
    var endMonth = ongoing ? cpiYoYHistory[cpiYoYHistory.length - 1].m : era.to + "-12";
    var cpi = cpiYoYHistory.filter(function(c){ return c.m >= era.from + "-01" && c.m <= endMonth; });
    var cpi12 = cpiYoYHistory.filter(function(c){ return c.m <= endMonth; }).slice(-12);
    var gdpEnd = -1;
    gdpQuarterlyYoY.forEach(function(d, i){ if (parseInt(d.q.slice(0, 4), 10) <= endYear) gdpEnd = i; });
    var prevEntry = seasonTrackAll[gdpEnd - 1];
    var reading = ongoing
      ? readSeason(cpi12, gdpQuarterlyYoY.slice(gdpEnd - GROWTH_WINDOW + 1, gdpEnd + 1), prevEntry && prevEntry.reading.regime)
      : (seasonTrackAll[gdpEnd] ? seasonTrackAll[gdpEnd].reading : readSeason(cpi12, gdpQuarterlyYoY.slice(gdpEnd - GROWTH_WINDOW + 1, gdpEnd + 1), prevEntry && prevEntry.reading.regime));
    var season = (ongoing && seasonOverride) || reading.season;
    var track = [];
    seasonTrackAll.forEach(function(entry){
      if (!entry || entry.y < era.from || entry.y > endYear) return;
      var qi = {Q1:0, Q2:1, Q3:2, Q4:3}[entry.qn];
      track.push({ q:entry.q, season:entry.reading.season, from:(entry.y - era.from) + qi / 4, to:(entry.y - era.from) + (qi + 1) / 4, reading:entry.reading });
    });
    var last = track[track.length - 1];
    if (ongoing && last){
      if (last.to < elapsedYears) track.push({ q:"since " + last.q, season:season, from:last.to, to:elapsedYears, reading:reading, isNow:true });
      else { last.to = Math.min(last.to, elapsedYears); last.season = season; last.isNow = true; }
    }
    var years = cycleReturns(era.from, endYear);
    return { era:era, ongoing:ongoing, endYear:endYear, elapsedYears:elapsedYears, yearIndex:yearIndex, dialYears:dialYears, peakYear:years.peakYear, cumByYear:years.cumByYear,
             endMonth:endMonth, cpi:cpi, reading:reading, season:season, track:track, growth:eraGrowth(era) };
  }
  var seasonRuleSentence = {
    spring:"Expansion with prices heating, within or below the range, is reflation — Spring.",
    springdeflation:"Expansion with prices cooling, within or below the range, is Spring — deflation.",
    summer:"Expansion with prices above the range — hot — is inflation, Summer.",
    autumn:"Contraction with prices cooling, within or above the range, is disinflation — Autumn.",
    lateautumn:"Contraction with prices heating, within or above the range, is Autumn — stagflation.",
    winter:"Contraction with prices below the range — cold — is deflation, Winter."
  };
  function seasonWhyFor(m){
    var r = m.reading, was = m.ongoing ? "is" : "was";
    return (m.ongoing ? "Computed from two readings, both shown below: " : "Read at the cycle's close, " + monthLabel(m.endMonth) + ", the same way today's is: ") +
      "the economy " + was + " in " + r.regime + " (real GDP " +
      r.gdpLatest.v.toFixed(1) + "% year over year in " + qLabel(r.gdpLatest.q) + ", trend " + r.growthTrend + " over the " + (m.ongoing ? "past" : "prior") + " six quarters, " + (r.growthSlopeQ * 4 >= 0 ? "+" : "") + (r.growthSlopeQ * 4).toFixed(1) + " points a year), and prices " + (m.ongoing ? "are" : "were") + " " + (r.cpiDirection === "rising" ? "heating" : r.cpiDirection === "falling" ? "cooling" : "steady") + " and " + (r.cpiHot ? "above" : r.cpiCold ? "below" : "within") + " the target range (CPI " + r.cpiNow.toFixed(1) + "%). " + seasonRuleSentence[m.season] + (m.ongoing && seasonOverride ? " (Season pinned by hand this build.)" : "");
  }
  var nowModel = cycleModel(currentEra);
  var readingNow = nowModel.reading;
  var cpiNow = readingNow.cpiNow, cpiDirection = readingNow.cpiDirection, cpiHot = readingNow.cpiHot, cpiCold = readingNow.cpiCold;
  var growthSlopeQ = readingNow.growthSlopeQ, growthTrendNow = readingNow.growthTrend, gdpLatest = readingNow.gdpLatest;
  var currentSeason = nowModel.season;
  var seasonWhy = seasonWhyFor(nowModel);

  function seasonGroup(key){ return key === "springdeflation" ? "spring" : key === "lateautumn" ? "autumn" : key; }

  // ---- The diagnosis: how she feels, and what has followed ----
  var CALM = 20, FRIGHTENED = 80, RISE = 20, SLOWING = 0.65, NEAR_HIGH = 0.05, STRETCHED = 80;
  var FEELINGS = ["Hope", "Optimism", "Euphoria", "Anxiety", "Fear", "Capitulation", "Despondency"];
  function seasonHalf(season){ return season === "summer" || season === "autumn" || season === "lateautumn" ? "warm" : "cool"; }
  function rankToDate(prior, v){
    if (v == null || prior.length < 12) return null;
    return 100 * prior.filter(function(x){ return x < v; }).length / prior.length;
  }
  function readFeeling(f){
    if (f.fear == null || f.mom == null) return null;
    if (f.fear >= 90 && f.dd <= -0.15) return "Capitulation";
    if (f.mom < 0 && f.fear >= 60) return "Fear";
    if (f.dd <= -0.10 && f.fearPeak >= FRIGHTENED && f.fear <= f.fearPeak - RISE) return "Despondency";
    if (f.fear3 != null && f.fear3 < CALM && f.fear - f.fear3 >= RISE && f.dd >= -0.10) return "Anxiety";
    if (f.mom > 0 && f.wasNegative) return "Hope";
    if (f.mom > 0 && f.dd >= -NEAR_HIGH && f.share < SLOWING && f.fear < CALM) return "Euphoria";
    if (f.mom > 0 && f.dd >= -NEAR_HIGH) return "Optimism";
    return null;
  }
  function readPosture(stage, half, f){
    var afraid = stage === "Fear" || stage === "Capitulation";
    if (half === "cool" && (afraid || stage === "Anxiety")) return "Offense";
    if (half === "warm" && afraid) return "Patience";
    if (half === "warm" && f.mom < 0) return "Defense";
    if (half === "warm" && (stage === "Euphoria" || stage === "Optimism") && f.stretch >= STRETCHED) return "Prepare";
    return "Neutral";
  }
  var marketCache = null;
  function marketMonths(){
    if (marketCache) return marketCache;
    var sp = sp500MonthlyHistory, vol = volatilityHistory, spAt = {}, volAt = {};
    var top = -Infinity, mom = [], best = [], dd = [];
    sp.forEach(function(d, i){
      spAt[d.m] = i; top = Math.max(top, d.v); dd.push(d.v / top - 1);
      mom.push(i >= 12 ? d.v / sp[i - 12].v - 1 : null);
      var prevPos = i > 0 && mom[i - 1] > 0 && best[i - 1] != null;
      best.push(mom[i] > 0 ? Math.max(mom[i], prevPos ? best[i - 1] : -Infinity) : null);
    });
    var fearRank = vol.map(function(d, j){
      volAt[d.m] = j;
      return rankToDate(vol.slice(0, j).map(function(x){ return x.v; }), d.v);
    });
    var quarters = {};
    seasonTrackAll.forEach(function(e){ if (e) quarters[e.y + "-" + QUARTER_END_MONTH[e.qn]] = e.reading.season; });
    marketCache = { sp:sp, vol:vol, spAt:spAt, volAt:volAt, mom:mom, best:best, dd:dd, fearRank:fearRank,
                   quarterKeys:Object.keys(quarters).sort(), quarters:quarters };
    return marketCache;
  }
  function seasonInMonth(S, m){
    var s = null;
    S.quarterKeys.forEach(function(k){ if (k <= m) s = S.quarters[k]; });
    return s;
  }
  function stretchRank(year, value){
    return rankToDate(capeHistory.filter(function(d){ return d.y < year; }).map(function(d){ return d.v; }), value);
  }
  function marketFacts(S, m, fearNow){
    var i = S.spAt[m], j = S.volAt[m];
    if (i == null || j == null || S.mom[i] == null) return null;
    var peak = S.fearRank.slice(Math.max(0, j - 6), j).filter(function(v){ return v != null; });
    var y = parseInt(m.slice(0, 4), 10), cape = capeHistory.filter(function(d){ return d.y === y; })[0];
    return { m:m, dd:S.dd[i], mom:S.mom[i], share:S.mom[i] > 0 ? S.mom[i] / S.best[i] : null,
             wasNegative:S.mom.slice(Math.max(0, i - 3), i).some(function(v){ return v != null && v < 0; }),
             fear:fearNow != null ? fearNow : S.fearRank[j], fear3:S.fearRank[j - 3] != null ? S.fearRank[j - 3] : null,
             fearPeak:peak.length ? Math.max.apply(null, peak) : null,
             stretch:cape ? stretchRank(y, cape.v) : null };
  }
  var followedCache = null;
  function whatFollowed(){
    if (followedCache) return followedCache;
    var S = marketMonths(), cells = {}, last = null, prevKey = null, from = null;
    S.vol.forEach(function(d){
      var f = marketFacts(S, d.m), season = seasonInMonth(S, d.m), i = S.spAt[d.m];
      if (!f || !season || i == null || i + 12 >= S.sp.length) return;
      var stage = readFeeling(f) || last; last = stage;
      if (!stage) return;
      if (!from) from = d.m;
      var key = stage + "|" + seasonHalf(season), c = cells[key] = cells[key] || { months:0, spells:0, higher:0, gains:[] };
      var gain = S.sp[i + 12].v / S.sp[i].v - 1;
      c.months++; if (gain > 0) c.higher++; c.gains.push(gain);
      if (key !== prevKey) c.spells++;
      prevKey = key;
    });
    Object.keys(cells).forEach(function(k){
      var g = cells[k].gains.slice().sort(function(a, b){ return a - b; });
      cells[k].median = g[Math.floor(g.length / 2)]; cells[k].worst = g[0];
    });
    followedCache = { cells:cells, from:from };
    return followedCache;
  }
  function lastFeeling(S, m){
    var stage = null;
    for (var k = S.spAt[m]; k >= 0 && !stage; k--){ var pf = marketFacts(S, S.sp[k].m); stage = pf && readFeeling(pf); }
    return stage;
  }
  function diagnoseClose(m){
    var S = marketMonths(), at = m.endMonth, f = marketFacts(S, at), i = S.spAt[at];
    if (!f) return null;
    var named = readFeeling(f), stage = named || lastFeeling(S, at), half = seasonHalf(m.season);
    return { stage:stage, carried:!named, half:half, season:m.season, facts:f, month:at,
             posture:readPosture(stage, half, f), bestMom:S.best[i],
             after:i + 12 < S.sp.length ? S.sp[i + 12].v / S.sp[i].v - 1 : null };
  }
  function diagnoseToday(){
    var S = marketMonths(), lastM = S.sp[S.sp.length - 1].m;
    var vols = S.vol.map(function(d){ return d.v; });
    var f = marketFacts(S, lastM, rankToDate(vols, vixRow.meter.value));
    if (!f) return null;
    var j = S.vol.length;
    f.fear3 = S.fearRank[j - 3]; f.fearPeak = Math.max.apply(null, S.fearRank.slice(j - 6).filter(function(v){ return v != null; }));
    f.stretch = stretchRank(calendarTodayY, valRow("cape").meter.value);
    var stage = readFeeling(f), carried = !stage;
    if (carried) stage = lastFeeling(S, S.sp[S.sp.length - 2].m);
    var half = seasonHalf(currentSeason), rec = whatFollowed();
    return { stage:stage, carried:carried, half:half, season:currentSeason, facts:f, month:lastM,
             posture:readPosture(stage, half, f), record:rec.cells[stage + "|" + half] || null, recordFrom:rec.from,
             bestMom:S.best[S.sp.length - 1] };
  }


  function vitalRingSvg(pct, state, label, cls){
    var r = 46, c = 2 * Math.PI * r;
    var offset = c * (1 - clampPct(pct, 0, 100) / 100);
    return '<svg class="vital-ring' + (cls ? " " + cls : "") + '" viewBox="0 0 120 120"' +
      (label ? ' role="img" aria-label="' + label + '"' : ' aria-hidden="true"') + '>' +
      '<circle class="vital-ring-track" cx="60" cy="60" r="' + r + '"></circle>' +
      '<circle class="vital-ring-fill ' + state + '" cx="60" cy="60" r="' + r + '" ' +
        'stroke-dasharray="' + c.toFixed(1) + '" stroke-dashoffset="' + offset.toFixed(1) + '"></circle>' +
    '</svg>';
  }

  var SPREAD_DETAIL = "", UNINV_DETAIL = "", drawSpreadWindow = null, spreadPick = "3m";
  var HZN_SPREADS = [{ key:"3m", label:"10Y − 3M" }, { key:"2y", label:"10Y − 2Y" }];
  function spreadLabel(key){
    var r = HZN_SPREADS.filter(function(x){ return x.key === key; })[0];
    return r ? r.label : HZN_SPREADS[0].label;
  }
  function policyFacts(){ return [
    { label:"Fed funds target",  value:fedFundsRange() },
    { label:"Last Fed move",     value:fedFunds.lastMove + " on " + fedFunds.asOf.replace(/,\s*\d{4}$/, "") +
                                        (fedFunds.vote ? " \u00b7 " + fedFunds.vote : ""), wordy:true },
    { label:"First hike since",  value:"2023 \u00b7 one more signalled",  wordy:true },
    { label:"Next decision",     value:fedFunds.next }
  ]; }
  function policyFactRows(){
    return policyFacts().map(function(f){
      return '<div class="aux-stat' + (f.wordy ? " wordy" : "") + '"><span>' + f.label + '</span><b>' +
             f.value + '</b></div>';
    }).join("");
  }
  var allSources = [
    {t:"Treasury daily par yield curve rates", u:"https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?type=daily_treasury_yield_curve&field_tdr_date_value=202609"},
    {t:"FRED — 10Y minus 2Y spread", u:"https://fred.stlouisfed.org/series/T10Y2Y"},
    {t:"FRED — 10Y minus 3M spread", u:"https://fred.stlouisfed.org/series/T10Y3M"},
    {t:"FRED — 10Y minus 3M spread, monthly average (T10Y3MM)", u:"https://fred.stlouisfed.org/series/T10Y3MM"},
    {t:"BLS Employment Situation", u:"https://www.bls.gov/news.release/empsit.nr0.htm"},
    {t:"DOL weekly unemployment claims", u:"https://www.dol.gov/ui/data.pdf"},
    {t:"BLS Consumer Price Index", u:"https://www.bls.gov/news.release/PDF/cpi.PDF"},
    {t:"Federal Reserve FOMC statement", u:"https://www.federalreserve.gov/newsevents/pressreleases/monetary20260916a.htm"},
    {t:"FRED — Consumer Price Index for All Urban Consumers (CPIAUCSL)", u:"https://fred.stlouisfed.org/series/CPIAUCSL"},
    {t:"FRED — Federal Funds Target Range, upper limit (DFEDTARU)", u:"https://fred.stlouisfed.org/series/DFEDTARU"},
    {t:"FRED — Real Gross Domestic Product, chained 2017 dollars (GDPC1)", u:"https://fred.stlouisfed.org/series/GDPC1"}
  ];

  function addSources(list){
    if (!list) return;
    var seen = Object.create(null), i;
    for (i = 0; i < allSources.length; i++) if (allSources[i] && allSources[i].u) seen[allSources[i].u] = 1;
    var add = Array.isArray(list) ? list : [list];
    for (i = 0; i < add.length; i++){
      var s = add[i];
      if (!s || !s.u || seen[s.u]) continue;
      allSources.push(s); seen[s.u] = 1;
    }
  }

  // ---- Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts ----
  var SVG_NS = "http://www.w3.org/2000/svg";
  function svgEl(tag, attrs){
    var e = document.createElementNS(SVG_NS, tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    return e;
  }
  function attachHoverTracking(hit, svg, W, padL, innerW, count, onIndex, onHide){
    var rect = null, lastTouch = 0, shownIdx = -1, viaTouch = false;
    function refresh(){ rect = svg.getBoundingClientRect(); }
    function indexFromClientX(clientX){
      var relX = (clientX - rect.left) / rect.width * W;
      return Math.max(0, Math.min(count - 1, Math.round(((relX - padL) / innerW) * (count - 1))));
    }
    function hide(){ shownIdx = -1; viaTouch = false; onHide(); }
    function recentTouch(){ return Date.now() - lastTouch < 800; }
    hit.addEventListener("mouseenter", function(){ if (!recentTouch()) refresh(); });
    hit.addEventListener("mousemove", function(evt){
      if (recentTouch()) return;
      if (!rect) refresh();
      shownIdx = indexFromClientX(evt.clientX); viaTouch = false; onIndex(shownIdx);
    });
    hit.addEventListener("mouseleave", function(){ if (!viaTouch) hide(); });
    hit.addEventListener("touchstart", function(evt){
      lastTouch = Date.now(); refresh();
      var i = indexFromClientX(evt.touches[0].clientX);
      if (viaTouch && i === shownIdx){ hide(); return; }
      shownIdx = i; viaTouch = true; onIndex(i);
    }, {passive:true});
    hit.addEventListener("touchmove", function(evt){
      lastTouch = Date.now(); if (!rect) refresh();
      var i = indexFromClientX(evt.touches[0].clientX);
      if (i !== shownIdx){ shownIdx = i; viaTouch = true; onIndex(i); }
    }, {passive:true});
    hit.addEventListener("touchend", function(){ lastTouch = Date.now(); }, {passive:true});
    document.addEventListener("touchstart", function(evt){ if (viaTouch && evt.target !== hit && !hit.contains(evt.target)) hide(); }, {passive:true});
    window.addEventListener("scroll", function(){ if (viaTouch) hide(); }, {passive:true});
  }

  addSources(gdpSrc);
