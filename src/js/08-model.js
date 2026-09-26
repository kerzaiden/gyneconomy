  // ---------------- The season, computed ----------------
  // Two inputs, both shown as rings on the Cycle tab so the reader can check the call:
  //   growth    — the direction of quarterly real GDP (year over year) across the last six quarters of the
  //               current cycle (growthTrendNow: rising / flat / falling; ±0.025 pp per quarter is flat)
  //   inflation — CPI YoY: HOT if the latest reading is above 3% (the top of the app's 1–3% band), and its
  //               direction from a fitted trend over the last twelve monthly readings (±0.02 pp/month is flat)
  // Mapping — Keren's season table (Sep 18, 2026: Goldilocks retired — expansion now splits by direction alone,
  // the way contraction already did, rather than by where prices sit in the band): growth direction × the
  // direction of prices and, on the contraction side, where they sit against the app's 1–3% CPI band (the Fed's
  // 2% with a point either side). "Expansion" is growth rising; "contraction" is growth falling. Flat growth is
  // neither on its own — it continues whichever regime the economy was already in (Keren, Sep 18, 2026: flat
  // growth with prices still falling from a contraction should keep reading as contraction, not flip to a fresh
  // expansion), read off the continuous quarter-by-quarter sequence in seasonTrackAll below, which reaches back
  // before the current cycle when needed. Temperature: heating / cooling from the trend, hot above the band, cold
  // below it.
  //   EXPANSION:    above the band (hot)          → Summer          · inflation      (any direction)
  //                 not hot, heating              → Spring          · reflation      (within or below the band)
  //                 not hot, cooling              → Spring          · deflation      (within or below the band — Keren, Sep 18, 2026: replaces the Goldilocks Zone)
  //   CONTRACTION:  below the band (cold)         → Winter          · deflation
  //                 not cold, cooling             → Autumn          · disinflation   (within or above the band)
  //                 not cold, heating or steady   → Autumn          · stagflation    (within or above the band — Keren, Sep 19, 2026: made symmetric with expansion, even though heating-within-range is empirically rare; "Late" dropped from the name the same day — key stays lateautumn)
  function slopeOf(vals){
    var n = vals.length, mx = (n - 1) / 2, my = vals.reduce(function(a, b){ return a + b; }, 0) / n, num = 0, den = 0;
    vals.forEach(function(v, i){ num += (i - mx) * (v - my); den += (i - mx) * (i - mx); });
    return den ? num / den : 0;
  }
  // How far back the season's growth direction is fitted (Version 221, Keren's choice of six after seeing what each window
  // does to the seasons; eight from Version 106). The series is already year over year, so six points is a year and a half
  // of an already-annualised trend: long enough that a season stays a phase — five quarters at the median since 1988, six
  // spells under a year in all that time — and short enough to turn roughly when the line turns, about nine months after a
  // true turn rather than a year. Four quarters would track the line closer still, but the economy would change season 34
  // times in 37 years, 14 of those spells under a year.
  var GROWTH_WINDOW = 6;
  // One reading, used twice: for today (the card) and, on the dial, at the end of every quarter of the cycle.
  // cpi12 = the last twelve monthly CPI YoY readings up to that point; gdp8 = the last GROWTH_WINDOW quarters of YoY real
  // GDP growth up to that point (the argument keeps its old name). The flat band is the annual rule's ±0.1 pp per year
  // expressed per quarter, so it does not change with the window. Prices: level from the latest reading, direction from a
  // trend over the twelve months.
  function readSeason(cpi12, gdp8, prevRegime){
    var cpiNow = cpi12[cpi12.length - 1].v;
    var cpiSlope = slopeOf(cpi12.map(function(d){ return d.v; }));
    var cpiDirection = cpiSlope > 0.02 ? "rising" : cpiSlope < -0.02 ? "falling" : "steady";
    var cpiHot = cpiNow > 3.0, cpiCold = cpiNow < 1.0;
    var growthSlopeQ = slopeOf(gdp8.map(function(d){ return d.v; }));
    var growthTrend = growthSlopeQ > 0.025 ? "rising" : growthSlopeQ < -0.025 ? "falling" : "flat";
    // Regime: rising growth is expansion, falling is contraction; flat growth continues whichever regime the
    // economy was already in rather than defaulting to expansion (Keren, Sep 18, 2026 — flat growth with prices
    // still falling from a contraction should keep reading as contraction, not flip to a fresh expansion). The
    // "previous quarter" is always available from the continuous data series (seasonTrackAll, below), even when
    // it falls before the cycle on screen; only at the very start of the series (no previous quarter at all)
    // does flat fall back to expansion.
    var regime = growthTrend === "falling" ? "contraction" : growthTrend === "rising" ? "expansion" : (prevRegime || "expansion");
    var cooling = cpiDirection === "falling", season;
    if (regime === "expansion"){                          // hot is Summer; otherwise direction alone decides — heating is Spring–Reflation, cooling is Spring–Deflation (Keren, Sep 18, 2026: replaces the Goldilocks Zone)
      if (cpiHot) season = "summer";
      else season = cooling ? "springdeflation" : "spring";
    } else {                                              // cold is Winter; otherwise direction alone decides, mirroring expansion — cooling is Autumn–Disinflation, heating/steady is Autumn–Stagflation
      if (cpiCold) season = "winter";
      else season = cooling ? "autumn" : "lateautumn";    // within or above the range, either way (Keren, Sep 19, 2026: symmetric with expansion — stagflation no longer requires being above the range)
    }
    return { season:season, regime:regime, cpiNow:cpiNow, cpiSlope:cpiSlope, cpiDirection:cpiDirection, cpiHot:cpiHot, cpiCold:cpiCold,
             growthSlopeQ:growthSlopeQ, growthTrend:growthTrend, gdpLatest:gdp8[gdp8.length - 1] };
  }
  var QUARTER_END_MONTH = {Q1:"03", Q2:"06", Q3:"09", Q4:"12"};
  // The data keys quarters as "2023 Q3" (sorts as text); people read them as "Q3 2023" (Keren, Sep 19, 2026).
  function qLabel(q){ var m = /^(\d{4}) (Q[1-4])$/.exec(q); return m ? m[2] + " " + m[1] : q; }
  // One continuous season sequence across ALL of history — not reset at each market-cycle era's own start year —
  // so "the previous quarter" always resolves for the flat-growth regime rule above, even reaching back before
  // the cycle currently on screen. cycleModel(era) below only slices this for display; it never recomputes a
  // season itself (Keren, Sep 18, 2026: this is also why the bleed years already carried the prior cycle's
  // season across the boundary before this change — the underlying data was always continuous; now the flat-growth
  // rule is too).
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
  // The book's growth rule, applied to any quarterly year-over-year series (Version 224): the trend through the last
  // GROWTH_WINDOW readings, the same flat band, and a flat stretch continuing whichever regime came before — the rule the
  // season model runs on American data, so a comparison country is read exactly as Mrs. Market reads herself.
  function regimeTrack(series){
    var qs = Object.keys(series).sort(), out = {}, prev;
    qs.forEach(function(q, i){
      if (i < GROWTH_WINDOW - 1) return;
      var w = qs.slice(i - GROWTH_WINDOW + 1, i + 1).map(function(k){ return series[k]; });
      var n = w.length, mx = (n - 1) / 2, my = w.reduce(function(a, b){ return a + b; }, 0) / n, num = 0, den = 0;
      w.forEach(function(v, k){ num += (k - mx) * (v - my); den += (k - mx) * (k - mx); });
      var slope = den ? num / den : 0;
      out[q] = slope < -0.025 ? "contraction" : slope > 0.025 ? "expansion" : (prev || "expansion");
      prev = out[q];
    });
    return out;
  }
  gdpPeers.forEach(function(c){ c.regime = regimeTrack(c.q); });

  // The regime the season model computed for each quarter — expansion while growth is rising, contraction while it is
  // falling, a flat quarter continuing whichever came before (Version 219). The Growth chart paints itself from this, so
  // the colour on the line and the word on the panel can never disagree.
  var regimeByQ = (function(){
    var out = {};
    seasonTrackAll.forEach(function(e){ if (e) out[e.q] = e.reading.regime; });
    return out;
  })();
  function quarterRegime(d){ return regimeByQ[d.q] || (d.v >= 0 ? "expansion" : "contraction"); } // before the model's history begins, the sign stands in

  // ---------------- One cycle, as the cycle view reads it ----------------
  // cycleModel(era) computes everything the cycle view shows for ONE market cycle — the season it is in (or
  // ended in), the quarter-by-quarter track the dial paints, the ring numbers, the months of CPI the temperature
  // chart draws — so one view can show the current cycle on the Cycle tab and any past cycle from the Calendar
  // (Keren, Sep 17, 2026: one component, so there are not two dashboards to maintain). It used to carry a
  // fourth thing, `end`: the Rates ring and the Feeling/Energy words as they stood at a closed cycle's last
  // month. Those tiles left the view and the field outlived them by many versions; both are gone in V512.
  var cycleYtdFraction = (DATA_COMPILED - new Date(calendarTodayY, 0, 1)) / (new Date(calendarTodayY + 1, 0, 1) - new Date(calendarTodayY, 0, 1));
  function seasonTitle(meta){ return meta.theme ? meta.name + " · " + meta.theme.toLowerCase() : meta.name; } // every season carries a theme now that Goldilocks (the one that didn't) is retired; the no-theme branch is just a defensive fallback
  function monthLabel(m){ return MONTHS_SHORT[parseInt(m.slice(5, 7), 10) - 1] + " " + m.slice(0, 4); }
  function cycleModel(era){
    var ongoing = !!era.ongoing;
    var endYear = ongoing ? calendarTodayY : era.to;
    // Elapsed time: from Jan 1 of the first year to DATA_COMPILED for the open cycle, whole years for a closed one.
    var elapsedYears = ongoing ? (calendarTodayY - era.from) + cycleYtdFraction : (era.to - era.from + 1);
    var yearIndex = ongoing ? Math.floor(elapsedYears) + 1 : (era.to - era.from + 1);   // "Year 5" / "ran 8 years"
    var dialYears = Math.max(typicalCycleYears, Math.ceil(elapsedYears));              // a longer cycle extends the ring rather than overflowing it
    var endMonth = ongoing ? cpiYoYHistory[cpiYoYHistory.length - 1].m : era.to + "-12";
    var cpi = cpiYoYHistory.filter(function(c){ return c.m >= era.from + "-01" && c.m <= endMonth; });
    var cpi12 = cpiYoYHistory.filter(function(c){ return c.m <= endMonth; }).slice(-12);
    var gdpEnd = -1;
    gdpQuarterlyYoY.forEach(function(d, i){ if (parseInt(d.q.slice(0, 4), 10) <= endYear) gdpEnd = i; });
    // "Reading" is today's card (ongoing) or the cycle's closing quarter (closed). A flat growth trend inherits
    // the regime of the quarter immediately before it from the continuous seasonTrackAll sequence, which reaches
    // back before era.from when needed — the previous quarter always exists in the full data series, even when
    // it falls outside the cycle on screen (Keren, Sep 18, 2026).
    var prevEntry = seasonTrackAll[gdpEnd - 1];
    var reading = ongoing
      ? readSeason(cpi12, gdpQuarterlyYoY.slice(gdpEnd - GROWTH_WINDOW + 1, gdpEnd + 1), prevEntry && prevEntry.reading.regime)
      : (seasonTrackAll[gdpEnd] ? seasonTrackAll[gdpEnd].reading : readSeason(cpi12, gdpQuarterlyYoY.slice(gdpEnd - GROWTH_WINDOW + 1, gdpEnd + 1), prevEntry && prevEntry.reading.regime));
    var season = (ongoing && seasonOverride) || reading.season;
    // The cycle's seasons quarter by quarter (the dial's moons): sliced straight from the one continuous season
    // sequence computed once across all of history (seasonTrackAll), so a flat quarter's inherited regime is
    // never reset at a market-cycle boundary. For the open cycle the stretch after the last GDP print carries
    // today's reading, so the ring's end always matches the card.
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
    // The cycle's peak (Keren, Sep 19, 2026): its most profitable YEAR — the calendar year with the highest S&P 500
    // total return, the year in progress counted at its return to date (in the subprime cycle, 2013). Not the
    // compounded high, which in a rising market is always the last year and says nothing. cumByYear (the compounded
    // return since the cycle's first year) is still computed for the hub's "since <year>" line.
    var level = 1, peakRet = -Infinity, peakYear = null, cumByYear = {};
    for (var py = era.from; py <= endYear; py++){
      var pr = sp500AnnualReturns[py]; if (pr == null) continue;
      level *= 1 + pr / 100;
      cumByYear[py] = (level - 1) * 100; // the compounded total return since the cycle's first year, at this year's end
      if (pr > peakRet){ peakRet = pr; peakYear = py; }
    }
    return { era:era, ongoing:ongoing, endYear:endYear, elapsedYears:elapsedYears, yearIndex:yearIndex, dialYears:dialYears, peakYear:peakYear, cumByYear:cumByYear,
             endMonth:endMonth, cpi:cpi, reading:reading, season:season, track:track, growth:eraGrowth(era) };
  }
  // Why the season is what it is, in the card's (i) — for the open cycle today's reading, for a closed one the
  // reading at its last month.
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
  // Today: the current cycle's model feeds the Cycle tab first and the Analysis/Content tabs' "now" figures.
  var nowModel = cycleModel(currentEra);
  var readingNow = nowModel.reading;
  var cpiNow = readingNow.cpiNow, cpiDirection = readingNow.cpiDirection, cpiHot = readingNow.cpiHot, cpiCold = readingNow.cpiCold;
  var growthSlopeQ = readingNow.growthSlopeQ, growthTrendNow = readingNow.growthTrend, gdpLatest = readingNow.gdpLatest;
  var currentSeason = nowModel.season;
  var seasonWhy = seasonWhyFor(nowModel);


  // The moon for a season: Winter is the new moon, Summer the full, and the four between are phases between —
  // waxing through the two Springs (crescent, gibbous), waning through the two Autumns (gibbous, crescent) (Keren's reference: the 4s4w
  // cycle wheel, a ring of moons). f is the lunar phase, 0 new → 0.5 full → 1 new; the lit face is the lit-side
  // half-disc plus a terminator ellipse whose width follows cos(2πf). Used by the dial and the legend.
  // Phases as seen from the northern hemisphere (timeanddate's chart, Keren's reference, Sep 19, 2026): new = dark, waxing
  // lit on the RIGHT, waning lit on the LEFT. Keren's assignment (the same day): Winter the new moon, Spring–Deflation the
  // waxing crescent, Spring–Reflation the waxing gibbous, Summer the full moon, Autumn–Disinflation the waning gibbous,
  // Autumn–Stagflation the waning crescent — symmetric about the full moon. The crescents sit at 0.16 / 0.84 rather than
  // the textbook 0.125 / 0.875 so the lit sliver is about half a radius wide instead of a third — at moon size on the
  // ring the thinner one read as a new moon.
  // The dial's outer ring is the four seasons (Version 180, Keren: both Springs as one season, both Autumns as one): seasonGroup
  // folds the six model keys to the four. Their colours (Version 187, Keren) are the temperature's own: --cold periwinkle below
  // the range (Winter deep, Spring a tint), orange above it (Summer deep, Autumn a yellow-orange tint) — see the :root tokens.
  // (176–179 coloured by temperature reading; 180 a weather ramp; 182–186 rose/plum for expansion, periwinkle for contraction.)
  function seasonGroup(key){ return key === "springdeflation" ? "spring" : key === "lateautumn" ? "autumn" : key; }


  // THE FEAR & GREED GAUGE (Version 277, Keren: "put the conventional infographics in our design system language").
  // The published gauge is a half-dial with a needle and five filled wedges. The convention worth keeping is the
  // SHAPE — a reader knows what a half-dial of fear and greed means without being told — and everything else is
  // redrawn in the dial's own grammar: a track carrying the whole of what is possible, the healthy band marked
  // inside it, direct labels and few, and a disc for "here" with a --surface fill and a coloured core. No needle,
  // no wedges, no gradient. The band is the same 45–55 the linear meter used, so the two cannot disagree.
  /* The half-dial. It was `fearGauge`, hard-wired to Fear & Greed's 0-100 scale and its three words;
     V546 made it take them, because the reading it draws is no longer that one. Everything else is
     unchanged, including the 0-100 GEOMETRY — a caller with another scale maps onto it and says so.
     `band` is the healthy stretch, `labels` the three that sit on the arc (the dial's rule: direct,
     and few), `aria` the sentence a screen reader gets instead of the picture. */
  function arcGauge(value, state, o){
    o = o || {};
    // drawn close to the size it renders at: an SVG scaled up magnifies its own type, and a 10px label in a
    // 160-unit box arrives on screen at 18px (Version 277)
    var mini = !!o.mini, R = o.r || 112, SW = o.sw || 22;
    var band = o.band || [45, 55], lab = o.labels || {};
    var pad = mini ? 4 : 30;                       // room above the arc for the one label that sits there
    var cx = R + SW / 2 + 2, cy = R + SW / 2 + pad;
    var W = cx * 2, H = cy + (mini ? 6 : 20);
    function pt(v, rad){
      var a = Math.PI * (1 - Math.max(0, Math.min(100, v)) / 100);
      return [(cx + rad * Math.cos(a)).toFixed(2), (cy - rad * Math.sin(a)).toFixed(2)];
    }
    function arc(v0, v1, rad){
      var p0 = pt(v0, rad), p1 = pt(v1, rad);
      return "M" + p0[0] + "," + p0[1] + "A" + rad + "," + rad + " 0 0 1 " + p1[0] + "," + p1[1];
    }
    var out = ['<path class="gauge-track" stroke-width="' + SW + '" d="' + arc(0, 100, R) + '"/>',
               '<path class="gauge-band" stroke-width="' + SW + '" d="' + arc(band[0], band[1], R) + '"/>'];
    if (!mini){
      // the band's own edges, cut out of the track rather than drawn on top of it; an edge sitting on
      // the end of the scale is not drawn, because there is no track beyond it to cut
      band.forEach(function(v){
        if (v <= 0 || v >= 100) return;
        var a = pt(v, R - SW / 2), b = pt(v, R + SW / 2);
        out.push('<path class="gauge-tick" d="M' + a[0] + ',' + a[1] + 'L' + b[0] + ',' + b[1] + '"/>');
      });
      // three labels, no more: the two ends of the scale and the healthy middle (the dial's rule)
      if (lab.top)   out.push('<text class="gauge-lab" x="' + cx + '" y="' + (cy - R - SW / 2 - 9).toFixed(1) + '" text-anchor="middle">' + lab.top + '</text>');
      if (lab.left)  out.push('<text class="gauge-lab" x="' + (cx - R - SW / 2 + 1).toFixed(1) + '" y="' + (cy + 17) + '" text-anchor="start">' + lab.left + '</text>');
      if (lab.right) out.push('<text class="gauge-lab" x="' + (cx + R + SW / 2 - 1).toFixed(1) + '" y="' + (cy + 17) + '" text-anchor="end">' + lab.right + '</text>');
    }
    var here = pt(value, R);
    out.push('<circle class="gauge-here ' + state + '" cx="' + here[0] + '" cy="' + here[1] + '" r="' + (mini ? 8 : 12) + '"/>');
    out.push('<circle class="gauge-core ' + state + '" cx="' + here[0] + '" cy="' + here[1] + '" r="' + (mini ? 3.2 : 4.8) + '"/>');
    return '<svg class="gauge-arc' + (mini ? " mini" : "") + '" viewBox="0 0 ' + W.toFixed(1) + ' ' + H.toFixed(1) + '" role="img" ' +
      'aria-label="' + (o.aria || "") + '">' + out.join("") + '</svg>';
  }

  function vitalRingSvg(pct, state, label){
    var r = 46, c = 2 * Math.PI * r;
    var offset = c * (1 - clampPct(pct, 0, 100) / 100);
    return '<svg class="vital-ring" viewBox="0 0 120 120"' +
      (label ? ' role="img" aria-label="' + label + '"' : ' aria-hidden="true"') + '>' +
      '<circle class="vital-ring-track" cx="60" cy="60" r="' + r + '"></circle>' +
      '<circle class="vital-ring-fill ' + state + '" cx="60" cy="60" r="' + r + '" ' +
        'stroke-dasharray="' + c.toFixed(1) + '" stroke-dashoffset="' + offset.toFixed(1) + '"></circle>' +
    '</svg>';
  }


  // the spread chart's long form, handed up so the band's title can offer it on the Spread segment (V470)
  var SPREAD_DETAIL = "", UNINV_DETAIL = "", drawSpreadWindow = null, spreadPick = "3m";
  // V522: the two spreads, named once. The head's ⋯ menu draws them and the chart reads the pick.
  var HZN_SPREADS = [{ key:"3m", label:"10Y − 3M" }, { key:"2y", label:"10Y − 2Y" }];
  // Pressure's policy facts (V375, moved out of the markup in V470 so Highlights can render them as the aux-stats
  // they are \u2014 four label/value facts, which is the shape Activity's jobless-claims row already uses).
  // REFRESH: the target after each FOMC decision, the move and its vote, and the next meeting date.
  function policyFacts(){ return [
    // `wordy` is the Version 270 rule: mono is for numbers, and a sentence in mono reads as code. A rate and a
    // date are figures; a move with its vote and a year with a clause are phrases.
    // V517: three of these four were hand-typed copies of `fedFunds`, which is why that object read as dead
    // code in the V515 audit. They read it now, so an FOMC decision is one edit and reaches the page. "First
    // hike since" stays a literal because it is editorial rather than data — a clause, not a figure.
    { label:"Fed funds target",  value:fedFundsRange() },
    { label:"Last Fed move",     value:fedFunds.lastMove + " on " + fedFunds.asOf.replace(/,\s*\d{4}$/, "") +
                                        (fedFunds.vote ? " \u00b7 " + fedFunds.vote : ""), wordy:true },
    { label:"First hike since",  value:"2023 \u00b7 one more signalled",  wordy:true },
    { label:"Next decision",     value:fedFunds.next }
  ]; }
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

  /* ADDING A SOURCE IS IDEMPOTENT (Version 535).

     Eight places concatenated onto this list, and six of them sit inside render steps. Running one
     of those twice appended the same citations again, so the Sources screen would list a source
     two, three, four times — a real bug the moment anything re-rendered, and the reason two steps
     had to be excluded from the repeatable set by name.

     De-duplicating by URL fixes all eight at once, and is the correct rule anyway: a source is the
     same source whoever cites it, and several pages legitimately cite the same series. Order of
     first appearance is kept, because the Sources screen groups by it. */
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

  // ================================================================================================
  // RENDER — everything above this line is data (embedded series, computed indicators, source lists);
  // everything below turns that data into DOM, in the order each panel appears in the tabs:
  //   season wheel + action pill · Feeling/Energy tags (mood icons) · era headline · compile date
  //   (header pill + per-tab as-of lines) · insights grid · GDP comparison chart ·
  //   [shared SVG chart helpers: svgEl, attachHoverTracking] · range-bar/card helpers (clampPct, infoIcon,
  //   expandBtn, meterHtml, srcHtml, labRowHtml, headHtml) · card renders · yield-by-maturity chart ·
  //   spread-history chart · un-inversion lag panel · lab panel (Economic power) · sentiment & valuation tables ·
  //   vitals strip · calendar tab · prospective returns ·
  //   content tab reading companion (seasonReading/frameworkRows + the live indicator arrays) ·
  //   tab-nav wiring.
  // Each block is a self-contained IIFE reading the data above and writing its own element(s) via
  // getElementById — there's no shared render/state framework, so a block can be read, tested, or moved on
  // its own without touching the others (the only cross-block dependencies are allSources, a running list
  // every block appends its own citations to, and the helpers listed above).
  // ================================================================================================


  // (No snapshot yield-curve chart here by design — "Key maturities, over time" covers it. `yieldCurve` is still the
  // source of today's 10Y and 3M points for the Analysis tab's yield-curve summary.)

  // ---------------- Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts
  // below — all three are hand-rolled line charts with a hover crosshair+tooltip, so the DOM-element builder
  // and the pointer→data-index hover wiring live here once instead of three near-identical copies). ----------
  var SVG_NS = "http://www.w3.org/2000/svg";
  function svgEl(tag, attrs){
    var e = document.createElementNS(SVG_NS, tag);
    for (var k in attrs) e.setAttribute(k, attrs[k]);
    return e;
  }
  // Wires a transparent hit-rect to mouse/touch hover: onIndex(i) fires with the nearest data index as the
  // pointer moves, onHide() fires on mouseleave. The hit-rect's bounding rect is cached per hover session
  // (refreshed on mouseenter/touchstart) rather than re-measured on every mousemove, since getBoundingClientRect
  // forces a layout read and mousemove can fire dozens of times a second.
  // Mouse: the reading follows the pointer and goes when it leaves. Touch (Version 144 — Keren: on the phone a tap
  // opened the reading and nothing closed it): a tap shows the reading, a drag scrubs along the chart, tapping the
  // same bar again, tapping anywhere else on the page, or scrolling closes it. The synthetic mouse events a tap
  // fires afterwards are ignored so they can't re-open it.
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

  // (the standalone GDP comparison chart of Versions 16–208 — six countries, 2010–2025, a dropdown picker — is folded into the
  // cycle's Growth chart since Version 209: see the peers in drawGrowth and renderPeerPills)
  addSources(gdpSrc); addSources(gdpPeerSrc);
