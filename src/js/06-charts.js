  // ---------------- Content tab: reading companion ----------------
  // Clue's Content screen surfaces articles matched to where you are in your cycle. The market version does the
  // same with the book's own material, in three parts: a reading for the CURRENT season (what this phase is in
  // the body, what it is in the economy, what usually follows, what to watch for the turn); the season table
  // ("The Season Model" — the rule the Cycle tab runs, with today's row marked); and the manuscript's
  // Seasonal Behaviour framework table. Body-side text follows the
  // book's settled terms ("peak fertility" rather than clinical ovulation; temperature rises AFTER ovulation, in
  // the luteal phase). Manuscript excerpts, when the author supplies them, go in seasonReading[season].fromTheBook
  // (an array of {title, text}) and render automatically; nothing is shown for a season until then.
  var seasonReading = {
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
    // springdeflation (expansion + cooling, within or below the range) has no narrative yet, by Keren's choice
    // (Sep 18, 2026): wiring only, no drafted body/economy/next/watch copy, so the Content tab shows this card
    // blank until she writes it.
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
  // The manuscript's Seasonal Behaviour table (project doc: seasonal-behaviour-indicator-table.md).
  var frameworkRows = [
    {indicator:"Hormones", body:"Rising estrogen / LH surge", economy:"Credit — money supply, lending growth", category:"Leading"},
    {indicator:"Cervical fluid", body:"Cervical mucus change", economy:"Credit spreads / yield curve", category:"Leading"},
    {indicator:"Psychology", body:"Emotional state", economy:"Investor sentiment, asset valuations", category:"Leading"},
    {indicator:"Effort", body:"Energy", economy:"Capital — GDP, profits", category:"Coincident"}, // the MANUSCRIPT's word, left as the book has it: this row is the book's table, not the app's, so it is not renamed with the app's sign (Industrial output). Ask Keren before touching it.
    {indicator:"Desire", body:"Desire / libido", economy:"Risk tolerance", category:"Coincident"},
    {indicator:"Activity", body:"Physical activity", economy:"Labor / employment", category:"Lagging"},
    {indicator:"Temperature", body:"Basal body temperature", economy:"Inflation", category:"Lagging"}
  ];

  var vixRow = sentiment.rows[0]; // CBOE VIX — kept separate, feeds the "Market fear" benchmark below
  /* Keren, V464: "sentiment is mood — I don't need another subcategory named sentiment. I want to see fear
     and greed, and I want to see the VIX." No Sentiment subcategory inside Mood: the VIX sits on Mood with a
     page of its own, like every other reading.
     The reading is shaped like an indicator so it can use the page builder every sign uses; the word comes off the
     meter's OWN band ends, so the word and the bar under it can never disagree. */
  var vixWordOf = function(v, m){
    var e = m.ends || {}, o = m.optimal || {};
    return v < o.from ? (e.low || "Low") : v > o.to ? (e.high || "High") : (e.zone || "Usual");
  };
  var vixInd = {
    // Keren, V467: "the VIX is called the fear index — I think it's more appropriate than the price of
    // protection." A reading wears the name its readers use.
    bodyTerm:"VIX", econTerm:"The fear index",
    // The state comes off the same band as the word, so the tag reports where the reading sits and never argues
    // with the bar under it. The complacency argument belongs in the note, which makes it.
    tag:{ text:vixWordOf(vixRow.meter.value, vixRow.meter),
          state:(function(v, m){ var o = m.optimal || {};
            return v < o.from ? "warning" : v > o.to ? "critical" : "good"; })(vixRow.meter.value, vixRow.meter) },
    metric:vixRow.flagValue, metricSub:"Cboe VIX, " + vixRow.sub,
    meter:vixRow.meter, shortCaption:vixRow.shortNote, caption:vixRow.note,
    src:sentiment.src.filter(function(x){ return /cboe|vix/i.test(x.t); })
  };

  // ---------------- Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring ----------------
  // Temperature is a chart rather than a ring (Keren, Sep 17, 2026, from Natural Cycles' temperature view): every
  // month of the current cycle as a column rising or falling from the 2% target, the 1–3% range as a pale band,
  // and a "today" line carrying the current reading. It renders from cpiYoYHistory — nothing here to refresh by hand.
  var tempInfo = '<h4>Temperature</h4>' +
    '<p class="lede">Her basal temperature: CPI against the 2% the Fed aims at, month by month through this cycle.</p>' +
    facts([
      '<b>Hot above the band, warm inside it, cold below</b> \u2014 red, teal, blue.',
      'The Fed\u2019s goal is a single point, 2% on the PCE index. The <b>1\u20133% band</b> is this board\u2019s own tolerance around it, drawn on CPI because that is the series most readers know.',
      'One of the two readings a season is computed from: the level, and the direction of the last twelve months.',
      'It confirms heat that has already built rather than predicting it.'
    ]);

  // ---------------- Daily Feeling/Energy readout (Cycle tab) ----------------
  var calendarTodayY = DATA_COMPILED.getFullYear(); // the page's own compile year, not the visitor's clock


  /* THE FEAR CURVE. It stands where CNN's Fear & Greed index stood until CNN's edge began refusing automated
     clients (HTTP 418) and no honest route to keeping it current was left — see docs/ARCHITECTURE.md,
     "Sources that were refused".

     Do not rebuild a COMPUTED sentiment composite: one that scores many components against record extremes
     has to be explained to anyone who checks it. This is not that. It is one ratio of two published Cboe
     indices, and its only threshold is definitional: the 30-day VIX over the 3-month VIX. Below 1.00 the
     volatility curve slopes up, which is its ordinary shape — the market pays more to insure a longer window,
     as it should. At 1.00 the curve is flat. Above it the curve is INVERTED: near-term fear costs more than
     three-month fear, which is what panic looks like priced rather than described.

     It says something the VIX level beside it cannot. The VIX says how much fear is priced; this
     says WHERE in time it sits. A calm VIX with an inverted curve is a market braced for something
     immediate; a calm VIX on a steep curve is ordinary quiet.

     Read contrarian, like everything on this panel: inversions cluster near bottoms.
     Both readings come from FRED, both originate at Cboe, and the ratio is derived HERE and nowhere
     else. Sep 22 2026 is the newest close the published series carry. */
  /* The 30-day leg is NOT read again here. It already lives in `vixRow.meter.value`, which is where
     the VIX row keeps it and where applyLive updates it — so the ratio derives from the same number
     the row prints, and the two can never disagree. ONE FIGURE, ONE NUMBER. Only the 3-month leg is
     new, and its date rides with the VIX's, since both are the same exchange's close. */
  var vix3mClose = LIVE("vix3mClose", 17.61);
  function fearCurve(){
    var near = vixRow && vixRow.meter && vixRow.meter.value;
    if (typeof near !== "number" || typeof vix3mClose !== "number" || !(vix3mClose > 0)) return null;
    return Math.round((near / vix3mClose) * 1000) / 1000;
  }
  /* One threshold, and it is the definition of the thing rather than a level anyone chose.
     BAND PROVENANCE: nothing here is editorial, so there is nothing to attribute. */
  function curveVerdict(r){
    return r == null   ? { text:"No reading", state:"norm" }
         : r >= 1      ? { text:"Inverted",   state:"serious" }
                       : { text:"Normal",     state:"good" };
  }
  // CAPE's long-run fair value, in one place: the Valuations chart draws its midline here and the verdict is
  // measured from it, so the picture and the word cannot drift apart.
  var CAPE_FAIR = 17;
  // One axis, five bands, by how far CAPE sits from that fair value. It runs the moment the object exists, because
  // the tag is read by the panel, the peek, the trend row, the Structural page and a Highlights card, and a verdict
  // computed late (in the peek block, say) reaches some of them and not others: the panel's own tag renders empty.
  function valuationVerdict(v){
    var r = v / CAPE_FAIR;
    return r < 0.75 ? { text:"Highly undervalued", state:"warning" }
         : r < 0.95 ? { text:"Undervalued",        state:"good" }
         : r < 1.15 ? { text:"Fairly valued",      state:"good" }
         : r < 1.60 ? { text:"Overvalued",         state:"warning" }
                    : { text:"Highly overvalued",  state:"serious" };
  }
  // One sparkline builder for the whole app. Takes plain numbers, normalises to its own min/max — a sparkline shows
  // SHAPE, not level, so a fixed scale would flatten most of them — and marks the latest point. It draws nothing at
  // all for fewer than three points: two points is a slope, not a trend, and would mislead.
  function sparkHtml(values, window, state){
    if (!values || values.length < 3) return "";
    var W = 108, H = 26, pad = 2.5;
    var lo = Math.min.apply(null, values), hi = Math.max.apply(null, values), span = (hi - lo) || 1;
    var pts = values.map(function(v, i){
      return [ (i / (values.length - 1)) * (W - pad * 2) + pad,
               H - pad - ((v - lo) / span) * (H - pad * 2) ];
    });
    var d = "M" + pts.map(function(pt){ return pt[0].toFixed(1) + "," + pt[1].toFixed(1); }).join("L");
    var last = pts[pts.length - 1];
    return '<div class="spark ' + (state || "good") + '">' +
      '<svg viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="none" aria-hidden="true">' +
        '<path class="spark-fill" d="' + d + 'L' + last[0].toFixed(1) + ',' + H + 'L' + pts[0][0].toFixed(1) + ',' + H + 'Z"/>' +
        '<path class="spark-line" d="' + d + '"/>' +
        '<circle class="spark-end" cx="' + last[0].toFixed(1) + '" cy="' + last[1].toFixed(1) + '" r="2.6"/>' +
      '</svg>' +
      '<span class="spark-win">' + window + '</span>' +
    '</div>';
  }
  function lastN(arr, n, key){ return arr.slice(-n).map(function(d){ return d[key]; }); }

  // ---------------- The range bar ----------------
  // A segmented control over the chart. It renders only the ranges the caller gives it, and the caller gives it only
  // the ranges its data can answer.
  /* The chart's MODE, beside but not inside the ruler. A timeline's stops are windows on one series and nothing
     else, so the comparison gets a control of its own rather than making one segment of the ruler mean something
     categorically different from its neighbours. The ruler works inside Calendar mode, where a window means
     something, and is absent in Cycles mode, where it would have nothing to window. */
  /* Keren, V472: "cycles | years | yields". Only one ruler is ever on screen: a window ruler and a maturity
     ruler together both read as durations, "5Y" and "10Y" meaning two different things a centimetre apart. Two
     tabs choose a WINDOW on the spread; the third chooses the yield levels and brings the maturities with it.
     `extra` is how a page adds a tab without every other page growing one. */
  function modeBar(id, active, extra){
    return '<div class="rangebar" role="tablist" data-mode-for="' + id + '">' +
      // Keren, V418: "make cycles the default tab, cycles on the left and years on the right." The order is the
      // claim: this is a cycle-tracking app, so the cycle view is the subject and calendar time is the alternative.
      [["cycles", "Cycles"], ["calendar", "Years"]].concat(extra || []).map(function(m){
        return '<button type="button" class="range-seg' + (m[0] === active ? " on" : "") + '" role="tab" ' +
          'aria-selected="' + (m[0] === active ? "true" : "false") + '" data-mode="' + m[0] + '">' + m[1] + '</button>';
      }).join("") + '</div>';
  }
  var pickerOpen = {};   // which page's picker is showing its menu; kept in state so a re-render cannot close it
  // The cycle picker is SINGLE-select (Keren, V420). It chooses a window, exactly as the years ruler does, and the
  // chart is drawn the same way in both modes: several cycles at once would force grey lines, and grey lines
  // cannot carry the heat ramp.
  function cycleByName(nm){
    for (var i = 0; i < marketCycles.length; i++) if (marketCycles[i].name === nm) return marketCycles[i];
    return null;
  }
  function openCycle(){
    for (var i = 0; i < marketCycles.length; i++) if (marketCycles[i].ongoing) return marketCycles[i];
    return marketCycles[marketCycles.length - 1];
  }
  // a cycle's window as [from, to) indices, for any series that knows its own year — the one windowing rule
  function cycleSlice(series, c){
    var to = c.to || calendarTodayY, a = -1, b = -1;
    series.forEach(function(d, i){
      var y = yearOf(d);
      if (y >= c.from && y <= to){ if (a === -1) a = i; b = i + 1; }
    });
    return a === -1 ? null : [a, b];
  }
  // total real growth over a year range, compounded from the annual rates (the method eraGrowth uses)
  function totalGrowthYears(y0, y1){
    var years = [], rates = [];
    for (var y = y0; y <= y1; y++)
      if (y !== calendarTodayY && usRealGdpGrowth[y] !== undefined){ years.push(y); rates.push(usRealGdpGrowth[y]); }
    if (!years.length) return null;
    var factor = rates.reduce(function(fa, g){ return fa * (1 + g / 100); }, 1);
    return { years:years, total:(factor - 1) * 100 };
  }
  // the month range of a cycle inside cpiYoYHistory, as [from, to) indices
  function cycleMonths(c){
    var to = c.to || calendarTodayY, a = -1, b = -1;
    cpiYoYHistory.forEach(function(d, i){
      var y = parseInt(d.m.slice(0, 4), 10);
      if (y >= c.from && y <= to){ if (a === -1) a = i; b = i + 1; }
    });
    return a === -1 ? null : [a, b];
  }
  /* Keren, V440: "there isn't spacing between the two top menus in the history component, which is
     inconsistent with our component design …" The controls row is one component: it emits its own root and
     sets its own spacing there, so no page writes the gap between the mode bar and its submenu and no per-page
     rule can override it. A page keeps only what is genuinely its business: where the component sits
     (#deficit-rangebar's lead, below its title). */
  function histControls(id, tl, minYear, extra){
    var mode = pageMode[id], on = mode === "cycles";
    /* A page may add its own tab (`extra`); while that tab is showing, neither the cycle picker nor the years
       ruler belongs beside it — the tab brings its own control. */
    var known = mode === "cycles" || mode === "calendar";
    /* The controls are their own row on the page ground; the head stays inside the white band, placed by
       whoever builds that band. */
    return '<div class="hist-controls">' +
      modeBar(id, mode, extra) +
      (!known ? "" : on ? cyclePicker(id, pageCycles[id], minYear)
                        : rangeBar(id, timelineFor(tl), pageRange[id])) +
    '</div>';
  }
  function cycLabel(c){
    return { name:c.ongoing ? "Current cycle" : c.name.replace(" Cycle", ""),
             /* Keren, V522: "when I select Current cycle I want the year to be year–Today, with a capital T."
                It is the second half of a RANGE whose first half is a year, so it stands for a date and takes a
                date's capital. One place, so the button and every row in the menu change together. */
             years:c.from + "\u2013" + (c.to || "Today") };
  }
  // What to call the last reading in view: "Latest" is true of the open cycle and of every calendar window, and
  // false of a closed one — Dot-Com's last CAPE is 40.6x in 1999, which is where that cycle ENDED and is not the
  // latest anything. A label that is safe for the whole series stops being safe once the rows follow the window.
  // Volume and Pulse hold BARE NUMBERS, one per quarter from a known first year, so cycleSlice (which asks each
  // reading for its own year) cannot window them. Index arithmetic does the same job: the same cycle, the same
  // half-open range, expressed in the only terms these two series have.
  function cycleQtrIdx(y0, cyc, len){
    var to = cyc.to || calendarTodayY;
    var a = Math.max(0, (cyc.from - y0) * 4), b = Math.min(len, (to - y0 + 1) * 4);
    return b > a ? [a, b] : null;
  }
  // `minYear` drops the cycles a series cannot answer. Pressure's yields begin in 2005, so it can show Big Tech,
  // COVID-19 and the current cycle and nothing older — and the test is the cycle's START year, not any overlap:
  // three years of the Housing cycle labelled "Housing 2000–2007" would be a picker that lies. Never offer a stop
  // the data cannot fill.
  function cyclePicker(id, picked, minYear){
    var rows = marketCycles.slice().reverse()
      .filter(function(c){ return minYear == null || c.from >= minYear; });   // newest first, as the Cycle history reads
    var cur = cycleByName(picked) || openCycle();
    if (rows.indexOf(cur) === -1) cur = rows[0] || cur;      // a picked cycle this series cannot answer falls back
    var CL = cycLabel(cur), open = !!pickerOpen[id];
    return '<div class="cycsel' + (open ? " open" : "") + '" data-cycles-for="' + id + '">' +
      '<button type="button" class="cycsel-btn" data-picker-toggle="1" aria-haspopup="listbox" aria-expanded="' +
        (open ? "true" : "false") + '"><span class="cycsel-nm">' + CL.name + '</span>' +
        '<span class="cycsel-yr">' + CL.years + '</span>' + CHEV + '</button>' +
      '<div class="cycsel-menu" role="listbox"' + (open ? "" : " hidden") + '>' +
      rows.map(function(c){
        var sel = c.name === cur.name, L = cycLabel(c);
        return '<button type="button" class="cycsel-opt' + (sel ? " on" : "") + '" role="option" aria-selected="' +
          (sel ? "true" : "false") + '" data-cycle="' + c.name + '">' +
          '<span class="cycsel-tick" aria-hidden="true"></span><span class="cycsel-nm">' + L.name +
          '</span><span class="cycsel-yr">' + L.years + '</span></button>';
      }).join("") + '</div></div>';
  }
  function rangeBar(id, ranges, active){
    // One stop is not a choice, so it is not a control: a lone segment reading "This cycle" would be furniture.
    if (!ranges || ranges.length < 2) return "";
    return '<div class="rangebar" role="tablist" data-range-for="' + id + '">' + ranges.map(function(r){
      return '<button type="button" class="range-seg' + (r.key === active ? " on" : "") + '" role="tab" ' +
        'aria-selected="' + (r.key === active ? "true" : "false") + '" data-range="' + r.key + '">' + r.label + '</button>';
    }).join("") + '</div>';
  }
  // The trend, from a least-squares fit over the series in view, said in the reader's words and in its own units per
  // year. Under eight points there is no honest fit, and the pill says so rather than drawing a conclusion from four
  // numbers.
  function trendOf(vals, unit, period){
    period = period || "period";
    // Keren, V436: just "not available", with no reason clause. Under eight readings is ordinary now that the rows
    // follow the window (a cycle gives Power, Valuations and the Federal budget four annual readings), and a pill
    // that explains itself every time is noise.
    if (!vals || vals.length < 8) return { word:"unavailable", span:"", flat:true };   // the word is Keren's (Keren, V437)
    var n = vals.length, sx = 0, sy = 0, sxy = 0, sxx = 0;
    vals.forEach(function(v, i){ sx += i; sy += v; sxy += i * v; sxx += i * i; });
    var slope = (n * sxy - sx * sy) / ((n * sxx - sx * sx) || 1);
    var dir = slope > 0 ? "rising" : "falling";
    // What the pill reports is how far the fitted line MOVES across the window, not its slope per period. A slope
    // is the right arithmetic and the wrong sentence: GDP's fit falls 0.04 points a quarter, which reads as a
    // rounding error beside the word "falling" — the same fit stated as 0.7 points across 18 quarters is the same
    // fact, legible. And whether a move is material depends on how far the series itself travels, so the flat test
    // is relative: under a tenth of the spread the line has not gone anywhere worth a word.
    var total = Math.abs(slope) * (n - 1);
    var lo = Math.min.apply(null, vals), hi = Math.max.apply(null, vals), spread = (hi - lo) || 1;
    // the fit travels with the sentence, so the chart DRAWS the line the pill describes rather than the two being
    // computed separately and quietly disagreeing (Keren, V274: "when you say 24× across 57 years, just put a
    // trend line, a purple trend line")
    var fit = { slope:slope, intercept:(sy - slope * sx) / n, n:n };
    // One line, because the row is a BUTTON and a button says one thing (Keren, Sep 20, 2026: "the trend button needs
    // to look like a button — make it so it's only one line; I want to read trend falling across fifty-five months").
    // The magnitude is not on the pill: pressing the button labels BOTH ends of the fit on the chart, which is where
    // a distance belongs — shown, not asserted.
    // Keren, V425: "48 months divided by 12 is four years — say across four years, or even 4Y so it's shorter."
    // The span is in years whatever the series' unit, because a reader thinks in years. nY is the app's existing
    // notation for a span of years (the ruler's 5Y/10Y/25Y, a cycle row's "(10Y)"), so it adds no new token.
    // A DAILY series divides by 252, the trading days in a year — the market's own convention, not a rounding:
    // 787 closes over three years and a quarter come back as 3Y, which is what the chart shows.
    var perYear = period === "month" ? 12 : period === "quarter" ? 4 : period === "day" ? 252 : 1;
    var span = "across " + Math.max(1, Math.round(n / perYear)) + "Y";
    if (total < spread * 0.1) return { word:"flat", span:span, flat:true, fit:fit };
    return { word:dir, span:span, flat:false, fit:fit };
  }
  // The left of the row is "Trend" by default, or the page's own verdict where it has one — which is where Keren
  // asked the tag to live, and it reads as a sentence: "Highly overvalued — rising, 24× across 57 years" (Keren, V274).
  // A row where there is nothing to show, a BUTTON where there is. Apple's trend row is pressable and that is the
  // whole point: the chart does not have to carry the trend all the time, so the line never has to compete with
  // the bars, and neither has to be compromised for the other.
  // An arrow beside the word, so the direction is legible before the word is read (Keren, V289). Drawn at
  // the weight every icon in this app is drawn at, and it inherits the row's own colour.
  var TREND_ARROW = {
    rising:  '<svg class="tp-arrow" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 11.5L7 7l3 3 3.2-4.2"/><path d="M13.2 9V5.8H10"/></svg>',
    falling: '<svg class="tp-arrow" viewBox="0 0 16 16" aria-hidden="true"><path d="M3 4.5L7 9l3-3 3.2 4.2"/><path d="M13.2 7v3.2H10"/></svg>'
  };
  // Each page says its trend in its own vocabulary (Keren: "I want the trend button to show expanding or
  // contracting rather than falling or rising — I want to keep the vocabulary consistent"). One correction to that,
  // and the data forces it: GDP's fit runs 2.89% to 2.25% and **no quarter of this cycle is negative**, so what is
  // falling is the PACE of growth, not output. Calling that "contracting" would say the opposite of what happened.
  // The word that keeps her vocabulary and stays true is "slowing" — the same axis as expansion and contraction,
  // describing the rate rather than the level. Temperature follows the same rule with its own words.
  function trendPill(t, key, toggles, words){
    var word = (words && words[t.word]) || t.word;
    var inner = '<span class="tp-k">' + (key || "Trend") + '</span>' +
      '<span class="tp-v' + (t.flat ? " quiet" : "") + '">' + (TREND_ARROW[t.word] || "") + word +
        (t.span ? ' <em>' + t.span + '</em>' : '') + '</span>';
    // A toggle exists only when there is a line to toggle. Under eight readings trendOf returns no fit, and a pill
    // that still rendered as a button would dim the chart when pressed and reveal nothing.
    /* Keren, V572, with Apple Health's own empty trend row beside it: "when the trend is unavailable I want it
       to be like empty — a light stroke with grey text, so it looks disabled." A filled pill promises something
       to read; this one has nothing. So it drops the wash for an outline and goes grey, at the same height, so
       the container keeps its shape and the reader can see that the row exists and has nothing in it. */
    var none = t.word === "unavailable";
    if (!toggles || !t.fit) return '<div class="trendpill' + (none ? " none" : "") + '">' + inner + '</div>';
    return '<button type="button" class="trendpill can-toggle" aria-pressed="false" ' +
      'aria-label="Show the trend on the chart">' + inner + '</button>';
  }

  // ---------------- Highlights: what the series says about today, computed ----------------
  function yearOf(d){ return d.y != null ? d.y : parseInt((d.q || d.m).slice(0, 4), 10); }
  function mean(a){ return a.reduce(function(x, y){ return x + y; }, 0) / a.length; }
  /* ---------------- The record rows ----------------
     Keren, V605: "total price change 9% is fixed for the current cycle — it should be dynamic on the history
     component. The place I would put it is next to the title: CPI year over year, and in parentheses, sigma
     plus 9% — sigma, the Greek letter for summary. And if I turn the bar to 10 years, I will see the sigma
     for the 10 years."
     So the total across the window is part of the HEAD: a figure that answers the ruler belongs beside the
     title the ruler is changing. Σ is the right mark and not decoration: the figure is the sum of every bar in
     view, so it changes when the window changes because the window is exactly what it sums. */
  function headSigma(id, text){
    var el = byId("bh-sigma-" + id); if (!el) return;
    // Keren, V606: "drop the space between the sigma and the number" — the Σ is the figure’s operator, not
    // a word before it, so it binds tight the way a minus sign does.
    el.textContent = text == null ? "" : "(Σ" + text + ")";
    el.hidden = text == null;
  }
  // how each kind of reading names its moment
  function atQuarter(d){ return d.q; }
  function atMonth(d){ return MONTHS_SHORT[parseInt(d.m.slice(5, 7), 10) - 1] + " " + d.m.slice(0, 4); }
  function cycleAverages(series){
    return marketCycles.map(function(c){
      var vs = series.filter(function(d){ var y = yearOf(d); return y >= c.from && y <= (c.to || 9999); })
                     .map(function(d){ return d.v; });
      return vs.length ? { name:c.name, avg:mean(vs), n:vs.length, ongoing:!!c.ongoing } : null;
    }).filter(Boolean);
  }
  function ordinal(n){ var t = n % 100, o = ["th","st","nd","rd"][(t - 20) % 10] || ["th","st","nd","rd"][t] || "th"; return n + o; }
  function hiCard(name, state, text){
    return '<div class="hi-card"><span class="hi-name ' + state + '">' + name + '</span><p>' + text + '</p></div>';
  }
  // The cycle strip: the metric's average in each of the app's cycles, the open one marked. It is the app's ONE
  // answer to "by cycle" — the same picture on Growth, Temperature, Economic power and Valuations.
  // It returns the strip only. Its caller puts it inside a .page-chart, which is where Keren's white container
  // comes from ("I want it to have a white container so it stands in a prominent view") and why the strip is
  // boxed alike on every page.
  // o.head     a label above the rows
  // o.stateOf  the page's OWN state function, so the strip and that page's chart colour the same number alike
  function cycleStrip(series, fmt, o){
    o = o || {};
    var rows = cycleAverages(series);
    if (rows.length < 2) return '<p class="chart-unit">too few cycles to compare</p>';
    var top = Math.max.apply(null, rows.map(function(r){ return Math.abs(r.avg); })) || 1;
    return '<div class="hi-cycles">' + (o.head ? '<div class="hi-cycles-head">' + o.head + '</div>' : "") +
      rows.map(function(r){
        var cls = "hi-cycle" + (r.ongoing ? " now" : "") + (o.stateOf ? " " + o.stateOf(r.avg) : "");
        return '<div class="' + cls + '">' +
          '<span class="hi-cycle-name">' + r.name.replace(/ Cycle$/, "") + '</span>' +
          '<span class="hi-cycle-bar"><i style="width:' + (Math.abs(r.avg) / top * 100).toFixed(1) + '%"></i></span>' +
          '<b>' + fmt(r.avg) + '</b></div>';
      }).join("") + '</div>';
  }
  // ---------------- The cycle average component ----------------
  // Keren, Sep 23 2026: "make this a separate component under highlights — let's call it cycle average component."
  // The ruler is time windows on one series; "by cycle" is a different question, so it is its own block rather
  // than a stop on the ruler. It is always on screen, under Highlights, on every page whose series reaches back
  // far enough to fill it.
  function cycleAverageBlock(series, fmt, o){
    o = o || {};
    if (cycleAverages(series).length < 2) return "";
    return '<div class="page-chart cyclebox cycle-average">' + cycleStrip(series, fmt, o) +
      (o.unit ? '<p class="chart-unit">' + o.unit + '</p>' : "") + '</div>';
  }
  // A ROW, not an icon (Keren, V287: "set the eye icon next to each title … and make it More details under
  // Highlights … compact everything, just leave the most important information, one or two lines outside, and then
  // the rest is more details"). An (i) beside a title asks to be read before the thing it annotates; the same note
  // at the END of the page is offered to a reader who has finished and wants more. So a page now carries its short
  // form in the open and its long form one tap away, and the icon stops competing with the name.
  // What the page already shows does not go in the modal (Keren, V288: "check that when you add the More
  // details, it's not already there"). A page's visible line is usually the opening of its own long form, so the
  // long form starts after it: split into sentences, drop the leading ones the page is already showing, keep the
  // rest. Sentences are compared with their whitespace collapsed, so a line break in the source does not hide a
  // match. If nothing is shared — the usual case, where the short line was written separately — nothing is removed.
  function dropWhatIsShown(full, shown){
    if (!full || !shown) return full || "";
    var norm = function(x){ return x.replace(/\s+/g, " ").trim(); }, seen = norm(shown);
    var parts = full.split(/(?<=[.!?])\s+/), i = 0;
    while (i < parts.length && parts[i] && seen.indexOf(norm(parts[i])) !== -1) i++;
    return i ? parts.slice(i).join(" ").replace(/^\s+/, "") : full;
  }
  function moreRow(fullHtml, label){
    if (!fullHtml) return "";
    var idx = detailSlot(fullHtml);
    return '<button type="button" class="more-row" data-detail-idx="' + idx + '">' +
      '<span>' + (label || "More details") + '</span>' + CHEV + '</button>';
  }
  var powerPageNote = "", tempCaptionFull = "", tempLeadShown = "";
  function highlightsHtml(cards, cyclesHtml, moreHtml){
    if (!cards.length && !cyclesHtml && !moreHtml) return "";
    /* Keren, V604: "I want the insights to be economy, biology, so I would understand the comparison." One name
       for this section on every page, and it is hers: a page's commentary is its insight into what the reading
       means. (The bare `.highlights` fact lists on Hormones and Pressure carry no head, because a list of four
       published settings is not a reading of anything.) */
    return '<section class="highlights insights"><div class="hi-head">Insights</div>' + cards.join("") +
      (cyclesHtml || "") + (moreHtml || "") + '</section>';
  }

  // ---------------- The inner pages' charts ----------------
  // Which bars get a label: a year series names every tenth year, a cycle series names every bar, and a caller can
  // say otherwise (so one chart can serve both ranges).
  function xLabelOf(o, d, i, all){
    if (o.xLabel) return o.xLabel(d, i);
    if (d.y == null) return "";
    // Chosen from the window in view, not from the calendar: ten years of annual readings named "every tenth year"
    // is one label, and five years is none.
    if (all && all.length){
      var ys = o._years || (o._years = windowYears(all[0].y, all[all.length - 1].y, 5));
      return ys.indexOf(d.y) === -1 ? "" : "\u2019" + String(d.y).slice(2);
    }
    return d.y % 10 ? "" : "\u2019" + String(d.y).slice(2);
  }

  // The fitted line, drawn where the chart is but shown only while the trend is asked for (from Apple Health, which
  // Keren sent: the trend is a BUTTON, and pressing it steps the readings back and puts the trend forward), so the
  // line never has to survive a field of full-strength bars. Its two ends carry the fit's own values, so the line
  // needs no legend: it says where the series started and where the fit has it now.
  // It takes the pixel x of its first and last reading, so it serves any layout — slots, or a chart's own X(i).
  function fitGroup(o, x0, x1, y, W, padL, padR){
    var f = o.fit, v0 = f.intercept, v1 = f.intercept + f.slope * (f.n - 1);
    var y0 = parseFloat(y(v0)), y1 = parseFloat(y(v1));
    var down = y1 > y0;   // the line travels downward on screen
    // each end's label goes on the OUTSIDE of the wedge the line cuts, so the two never crowd the line or each
    // other; each sits on a --surface plate, the app's answer to a label floating over a plot.
    function lab(v, x, yy, above, anchor){
      var txt = o.fmt(v), w = txt.length * 7.4 + 8, ly = above ? yy - 17 : yy + 5;
      var lx = anchor === "end" ? x - w : x;
      return '<rect class="chart-label-plate" x="' + lx.toFixed(1) + '" y="' + ly.toFixed(1) + '" width="' + w.toFixed(1) + '" height="15" rx="3"/>' +
        '<text class="fit-lab mono" x="' + (lx + w / 2).toFixed(1) + '" y="' + (ly + 11.4).toFixed(1) + '" text-anchor="middle">' + txt + '</text>';
    }
    return '<g class="fit">' +
      '<path class="fit-line" d="M' + x0.toFixed(1) + ',' + y0.toFixed(1) + 'L' + x1.toFixed(1) + ',' + y1.toFixed(1) + '"/>' +
      lab(v0, padL + 1, y0, !down, "start") +
      lab(v1, W - padR - 1, y1, down, "end") +
    '</g>';
  }

  // A. A RESERVE THAT DEPLETES -> the battery. One charge per year, each sitting in its own empty track, so the gap
  // above a bar reads as what was already spent. This is the dial's own move, stood upright.
  function reserveChart(o, W){
    W = Math.max(280, W || 340);
    var H = Math.round(Math.max(170, Math.min(260, W * (W < 520 ? 0.58 : 0.30))));
    // Keren, V397: "instead of putting a legend below the battery chart, just put the percentage on the left side
    // like any other chart — and there needs to be a line beneath it with the years, so it looks like a chart …"
    // A chart states its own scale. With the height readable against a labelled scale, the charge colours
    // reinforce the bands rather than carrying them alone, so there is no colour legend.
    var padL = AXIS.L, padR = AXIS.R, padT = AXIS.T + AXIS.LEG + AXIS.READ, padB = 22, iw = W - padL - padR, ih = H - padT - padB;   // +LEG is the legend strip, +READ the reading plate's band (see AXIS)
    var n = o.vals.length, slot = iw / n;
    var sw = colWidth(slot), tw = sw + 3.4;
    function y(v){ return (padT + ih - (v / 100) * ih).toFixed(1); }
    var out = [];
    // The scale is a fixed 0–100 (it is a percentage of her own best), so `step` is stated rather than derived:
    // three labels, not the five a 0–100 span would otherwise pick, because the 70% reference line already names
    // the threshold that matters and a gridline at 75 sitting a hair under it would be noise pretending to be
    // information. The baseline is the zero these columns stand on.
    out.push(chartAxes({ lo:0, hi:100, step:50, y:y, x0:padL, x1:(W - padR), base:y(0), top:(padT - AXIS.LEG - AXIS.READ), bot:(padT + ih),
                         fmt:function(v){ return v + "%"; } }));
    o.vals.forEach(function(d, i){
      var cx = (padL + slot * (i + 0.5)).toFixed(1);
      out.push('<path class="bt-track" stroke-width="' + tw.toFixed(1) + '" d="' + colPath(cx, padT + ih, padT, tw) + '"/>');
      out.push('<path class="bt-bar hcol ' + o.stateOf(d.v) + '" stroke-width="' + sw.toFixed(1) + '" d="' + colPath(cx, padT + ih, y(d.v), sw) + '"/>');
    });
    if (o.ref != null){
      out.push('<path class="bt-ref" d="M' + padL + ',' + y(o.ref) + 'L' + (W - padR) + ',' + y(o.ref) + '"/>');
      // no inline label: the key below names the reference, and two labels for one line make a chart too busy to read
    }
    // the window's own average, and the key that names it and the reference together
    var rAvg = o.vals.reduce(function(a, d){ return a + d.v; }, 0) / (n || 1);
    out.push(avgRule(padL, W - padR, y(rAvg)));
    if (o.fit && o.fit.n > 1) out.push(fitGroup(o, padL + slot * 0.5, padL + slot * (n - 0.5), y, W, padL, padR));
    // Keren, V494: the latest reading is not in the chart's corner — the panel row below states it, in bigger type,
    // beside the band it is read against. A figure is said once, where it can be compared.
    o.vals.forEach(function(d, i){
      var lab = xLabelOf(o, d, i, o.vals); if (!lab) return;
      out.unshift(vGrid(padL + slot * (i + 0.5), padT, padT + ih));
      out.push(xLabel((padL + slot * (i + 0.5)).toFixed(1), lab, (H - AXIS.FOOT)));
    });
    // Readings sit in SLOTS rather than at X(i), so the geometry published here names the centre of the first slot
    // and the centre of the last — what the hover's index maths reads. The chart that knows its own layout does
    // the translating; the hover stays one function.
    out.push(crossLine(padT, (padT + ih)));
    publishGeom("reserveChart", { L:(padL + slot * 0.5), R:(padL + slot * (n - 0.5)), T:padT, B:(padT + ih), W:W, n:n,
                     refs:(o.ref != null ? [{ label:"Average", v:rAvg }, { label:refName(o.refLabel), v:o.ref, dash:true, cls:"bt-ref" }]
                                        : [{ label:"Average", v:rAvg }]),
                     vals:o.vals, at:function(d){ return String(d.y); }, fmt:o.fmt });
    return '<div class="dchart"><svg class="hist-svg" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + (o.alt || "") + '">' + out.join("") + '</svg></div>';
  }

  /* ---- The history component's axes ----
     Keren, V399: "the history component should be the same on all inner pages — it's a component with variants,
     so we don't need to work on each page separately."
     What legitimately differs between the histories is the PLOT — Temperature's heat ramp, Volume's blood ramp,
     Valuations' diverging bars, Pulse's line, all asked for by name. The chrome around the plot should not
     differ at all, and this emitter is the part of it that draws the scale.

     Give it the y() a chart already has and the span it is plotting. `base` is where the rule beneath goes: the
     zero a column stands on, or the bottom of the frame where the marks hang off a midline instead — those mean
     different things and the caller is the only one that knows which it has. `skipNear` keeps a tick from
     landing on a reference line that already carries its own label. `step` is an override for a chart whose
     scale has meaningful stops of its own; left out, it picks a round one that lands three or four labels. ---- */
  /* One vertical rule, drawn wherever a chart writes an x label. Each history keeps its own x logic — the deficit
     steps in years, Temperature in months, Pulse in quarters, Power and Valuations in slots — because those
     genuinely differ; what they share is the MARK, and the mark is here. Every caller unshifts it rather than
     pushing it, so the rules land at the front of the drawing list and the data is painted over them: a
     gridline that crosses in front of a bar is not a gridline, it is a defect. */
  /* The chart helpers emit MARKUP, because the histories build their svg as one string. Horizon builds its own
     node by node; this parses a fragment so that chart can call `chartAxes` and `vGrid` like everyone else —
     DOMParser rather than svg.innerHTML, which is not reliable on an <svg> element. */
  function appendSvgMarkup(svg, markup){
    if (!markup) return;
    var doc = new DOMParser().parseFromString(
      '<svg xmlns="http://www.w3.org/2000/svg">' + markup + '</svg>', "image/svg+xml");
    var root = doc.documentElement;
    // importNode COPIES, so draining by `root.firstChild` never empties the source — it loops forever. The
    // list is taken once and walked.
    var kids = Array.prototype.slice.call(root.childNodes);
    for (var i = 0; i < kids.length; i++) svg.appendChild(document.importNode(kids[i], true));
  }
  function vGrid(x, top, bot){
    return '<path class="bt-vgrid" d="M' + (+x).toFixed(1) + ',' + (+top).toFixed(1) +
           'L' + (+x).toFixed(1) + ',' + (+bot).toFixed(1) + '"/>';
  }
  /* Keren, V451, holding an Apple Health chart beside ours: "why does our app look so cramped?"; and V523:
     "consolidate as much as you can." Every COLUMN CHART in the app reads this one fill: the histories,
     Economic power, Valuations, Horizon, the Cycle-tab charts and the preview miniatures. 0.68 is Apple's
     measured 69%, and it leaves air between marks, so eighteen readings read as eighteen readings rather than
     one mass with notches cut out of it. Households draws a PAIR per slot, so each of its bars takes half the
     fill. */
  var COL_FILL = 0.68;   // a column's share of its slot; the rest is the gap that makes them readable as marks
  /* ONE function decides how wide a column is. Keren, V577, on Valuations: "the bars look very thin … and on
     Temperature at Max it looks very, very tight. Is there a point to widen the bars where there are only a
     few and tighten them where there are too many?"
     Proportional in the middle, bounded at both ends, and the bounds are about what a MARK can be rather than
     about how many there are. A fixed small cap made for a crowded chart leaves an empty one's slots mostly
     blank (a 9px cap in a four-column chart's 80px slot is 89% empty, and the bars read as needles); a fixed
     floor wider than a dense chart's slot makes the bars overlap and the picture smear.
       · Below 1.5px a gap cannot be drawn at all, so the column takes its whole slot. The columns tile, the
         field renders at its true density, and nothing overlaps. This is what a dense series honestly looks
         like — Desire's daily closes, Temperature at Max — and it is a band, not a failed bar chart.
       · Above 20px a round-capped stroke stops reading as a capsule and starts reading as a dome: the cap's
         radius is half the width, and past 20 the cap is bigger than anything else the app draws. 20 is where
         the mark stays the mark: this app's shape rather than a dashboard's block.
     Between those, slot × COL_FILL. */
  /* A column's PATH, inset by its own cap. These columns are round-capped strokes, and a round cap reaches half
     the stroke's width past each end of the line it caps: at 20px, a bar hangs into the year row underneath and
     a full-height track pokes up into the reading's band above (Keren, V578: "the bars are crossing over and
     covering the years, and the tooltip is covering what's hovering above 100%"). So the line is drawn half a
     width short at each end and the CAPSULE spans exactly the interval it stands for — which is also what makes
     a bar's length honest, since a cap that overshoots is length the number never claimed. A span shorter than
     the width collapses to a dot, centred: the smallest a round-capped mark can honestly be. */
  function colPath(cx, y0, y1, sw){
    var lo = Math.min(y0, y1), hi = Math.max(y0, y1), r = sw / 2, x = (+cx).toFixed(1);
    if (hi - lo <= sw){ var mid = ((lo + hi) / 2).toFixed(1); return "M" + x + "," + mid + "L" + x + "," + mid; }
    return "M" + x + "," + (hi - r).toFixed(1) + "L" + x + "," + (lo + r).toFixed(1);
  }
  function colWidth(slot){
    if (!(slot > 0)) return 1;
    if (slot < 1.5) return slot;                     // no room for a gap: tile, do not overlap
    return Math.min(20, slot * COL_FILL);
  }
  /* The plot's own margins, one set for every chart.
     L, R: the gutter where the y labels live is the same row of labels on every chart, so it is one number. The
     FRAME is drawn AXIS.L out on one side and AXIS.R out on the other, flush with the card's own text on both
     (Keren, V562: "make the outer frame of the grid align both in the left side and the right side … I want
     symmetry"). The numbers stay on the LEFT (Keren, V562: "the numbers should be on the left because it's a
     left-to-right app"), inside the frame, in the rail the gutter opens, above their own line where no column
     ever reaches. L is 37 because the rail itself is 32 — enough for "100%" — and the last five are the gap
     asked for between the rail's edge (RAIL) and the first column (Keren, V564), so no bar leans on it.
     Every caller pads with these two numbers, which is what lets the frame be derived from them here rather
     than passed in by each chart.
     `B` is deliberately NOT in here: what sits under a plot differs by chart (a year row, a legend, a marker
     label), so the bottom margin answers to the furniture rather than to the frame.
     T: the distance between the readout's plate and the grid's ceiling is T and nothing else — the 10px she
     asked for (Keren, V559) — so the plot hosts carry no top margin of their own.
     LEG: a strip INSIDE the frame, clear of the plot, where the reference legend sits; taken out of the plot's
     height, not added to the chart's, so no chart changes size. It is at the frame's HEAD (Keren, V557: "it's
     confusing because the bottom bar already has numbers — switch the legend to the top right side of the
     grid"): the year row sits just under the frame, so a legend on the floor would put two rows of small grey
     type a few pixels apart. The ceiling is empty.
     FOOT: what is left under the x-axis labels before the picture ends, one number so every page measures the
     same (Keren, V573: "I want 25 pixels between the title and the chart, and the same to the trend button, so
     it's symmetrical").
     READ: the band under the legend's strip where the reading plate sits, reserved out of the PLOT so no column
     can take it (Keren, V574: "I don't want the height of the tooltip to change. Have enough space above the
     highest bar so the tooltip will be visible at the same height throughout the grid …"). 61 = 10 above the
     plate, the plate, and 10 below it — her two tens — and every chart's scale maps into what is left. */
  var AXIS = { L:37, R:6, T:10, LEG:20, RAIL:5, FOOT:8, READ:61 };
  /* ================= THE HISTORY FRAME IS ONE COMPONENT =================
     Keren, V614: "can we stay consistent in terms of components — name all the components in the app and
     then we use it and reuse it, because it seems that we are writing all over again every time we make a
     change."
     These five functions are the frame every history draws on: the width floor, the narrow breakpoint, the
     height and the four edges, the year label, the crosshair, the zero rule, the mean rule and the svg that
     wraps them. One copy, so moving the plot is one edit that reaches every chart. They are deliberately
     thin: this is not a chart engine, it is the parts that are identical across charts. What a chart draws
     INSIDE the frame stays its own business, because that is the part that genuinely differs.
     Every class here belongs to this frame and to nothing else, which the component ledger enforces:
     .bt-xl, .hist-cross, .m2-zero, .vh-mean and .vh-svg. */
  function histFrame(Wpx){
    var W = Math.max(270, Math.round(Wpx || 360));
    var narrow = W < 430;
    // LEG: the legend strip at the frame's head; 17 is the x label's drop, FOOT what follows it (see AXIS)
    var H = narrow ? 268 : 300;
    return { W:W, narrow:narrow, H:H, L:AXIS.L, R:W - AXIS.R,
             T:AXIS.T + AXIS.LEG + AXIS.READ, B:H - 17 - AXIS.FOOT };
  }
  /* A year under the plot. Both coordinates arrive READY — x already rounded the way its own chart rounds
     it, y as the baseline that chart puts its labels on. The frame charts pass B + 17; the two small ones
     measure up from the bottom instead, and a helper that insisted on one of those would have left the other
     hand-written, which is the duplication this exists to end. */
  function xLabel(x, text, y){
    return '<text class="bt-xl" x="' + x + '" y="' + y + '" text-anchor="middle">' + text + '</text>';
  }
  // The crosshair, parked off-plot until a pointer moves it (wireHistHover drives every one of them).
  function crossLine(top, bot){
    return '<line class="hist-cross" x1="0" x2="0" y1="' + top + '" y2="' + bot + '"/>';
  }
  // Nought, drawn the full width of the frame including the label gutter, so it reads as the floor of the box
  // rather than of the plot; and the reference the reading is measured against, drawn inside the plot only.
  function zeroRule(L, R, y){
    return '<path class="m2-zero" d="M' + (L - AXIS.L) + ',' + y.toFixed(1) + 'H' + (R + AXIS.R) + '"/>';
  }
  function meanRule(L, R, y){ return '<path class="vh-mean" d="M' + L + ',' + y.toFixed(1) + 'H' + R + '"/>'; }
  /* ================= A HISTORY WEARS ONLY ITS OWN GEOMETRY =================
     Every history chart computes the frame it drew on — where the columns start and end, how many there are,
     how to turn an index back into a date — and the crosshair needs it. The geometry carries the NAME of the
     chart that made it, and attachHistory is the only thing that reads it. Do not pass it on a bare module
     variable: correctness would hang on the order of two statements, and one path does not redraw at all
     (refitHistory returns early when the width already matches), so a crosshair would read whatever the last
     page left behind — invisible, because the numbers are plausible and simply wrong.
     When a page asks for a geometry that no one drew for it, that is recorded rather than attached quietly —
     the suite asserts the record is empty, so the day this breaks is the day it is seen. */
  var pendingGeom = null;
  function publishGeom(name, g){ g.src = name; pendingGeom = g; return g; }
  function attachHistory(host, tipId, expect){
    if (!host) return null;
    var g = pendingGeom;
    if (expect && (!g || g.src !== expect))
      (window.__geomMiss = window.__geomMiss || []).push(expect + " wanted, " + (g ? g.src : "none") + " pending");
    host.__geom = g;
    if (tipId) wireHistHover(host, tipId);
    return g;
  }
  /* The frame's SURROUNDINGS, one layer out from histFrame: the box a history sits in, the row of controls
     above it, the tooltip beneath it and the average line across it. One definition each, so the class names
     that have to agree (`gdp-tooltip mono hist-tip`) are written once.
     `histBar` takes an id because five of the eleven carry one: those rows are filled later by their page
     rather than at build, which is a real difference and so it is an argument rather than a second function. */
  function histBar(inner, id){
    return '<div class="hist-bar"' + (id ? ' id="' + id + '"' : '') + '>' + (inner || '') + '</div>';
  }
  function histTip(id){ return '<div class="gdp-tooltip mono hist-tip" id="' + id + '" hidden></div>'; }
  // The window's average, drawn across the plot. Not the same line as meanRule: that one is the series' own
  // long-run reference, this one is what the months IN VIEW come to.
  function avgRule(x0, x1, y){
    return '<path class="temp-avg" d="M' + x0 + ',' + y + 'H' + x1 + '"/>';
  }
  function vhOpen(W, H){ return '<svg class="vh-svg" viewBox="0 0 ' + W + ' ' + H + '" role="img" '; }
  function chartAxes(o){
    var out = [], ticks = o.ticks;
    // A caller may hand in its own ticks instead of a span. Histories that compute theirs through windowScale()
    // FORCE the values that matter into view — zero, the long-run norm, the CPI target — and a generic
    // round-number step would quietly drop them. The emitter's job is the drawing, not the choosing.
    if (!ticks){
      /* 0.1 is on the ladder for a RATIO, whose entire story happens between 0.7 and 1.3: at 0.25 such an axis
         offers one tick that is not its own midline. The ladder picks per window, so the fear curve reads at 0.1
         over a cycle and 0.25 over the record; the rule only reaches a span under 0.45. */
      var step = o.step || [0.1, 0.25, 0.5, 1, 2, 5, 10, 20, 25, 50, 100].filter(function(k){
        return (o.hi - o.lo) / k <= 4.5; })[0] || 200;
      ticks = [];
      for (var v = Math.ceil(o.lo / step) * step; v <= o.hi + 1e-9; v += step) ticks.push(v);
    }
    // the frame runs to the card's own edges on both sides; the PLOT is inset inside it
    var fx0 = o.x0 - AXIS.L, fx1 = o.x1 + AXIS.R;
    // the frame first, so every gridline and every mark is drawn over it
    if (o.top != null && o.bot != null){
      out.push('<rect class="bt-frame" x="' + fx0.toFixed(1) + '" y="' + (+o.top).toFixed(1) + '" width="' +
               (fx1 - fx0).toFixed(1) + '" height="' + (o.bot - o.top).toFixed(1) + '"/>');
      /* The rail's edge (Keren, V563: "I want a dividing line between the numbers and the graph — maybe a solid
         grey line, just like the horizontal one"): the same rule as a gridline, turned upright — one token, one
         weight — so the rail reads as a column of the grid rather than as a margin. */
      out.push('<path class="bt-grid" d="M' + (o.x0 - AXIS.RAIL) + ',' + (+o.top).toFixed(1) +
               'L' + (o.x0 - AXIS.RAIL) + ',' + (+o.bot).toFixed(1) + '"/>');
    }
    ticks.forEach(function(v){
      var ty = parseFloat(o.y(v));
      if (o.skipNear != null && Math.abs(ty - o.skipNear) < 12) return;
      // `noGridAt` is for a value that earns a label but not a line — the deficit chart's zero, where the solid
      // baseline is about to be drawn and a dashed one under it would read as two rules
      /* and never under the base rule either: two 1px lines on one pixel row read as one darker line
         (Keren, V578: "the zero line is still a bit darker than the 50% line"). */
      if ((o.noGridAt == null || Math.abs(v - o.noGridAt) > 1e-9) &&
          (o.base == null || Math.abs(ty - parseFloat(o.base)) > 0.5))
        out.push('<path class="bt-grid" d="M' + fx0.toFixed(1) + ',' + ty.toFixed(1) + 'L' + fx1.toFixed(1) + ',' + ty.toFixed(1) + '"/>');
      /* ABOVE its line, not on it: the gridline runs the frame's full width, and a number sitting on one would
         be struck through by it. The topmost number too: flipped under its line it lands a few pixels from the
         number below and the rail reads as unevenly spaced (Keren, V571: "the gap between 2% and 3% is not like
         3% and 4%; it has to be accurate"). The strip at the head of the frame is the LEGEND's, and the legend
         is right-aligned, so a number in the rail at the far left has the strip to itself. */
      var ly = ty - 5;
      // centred in the rail rather than pushed against the frame (Keren, V564): the rail is a column of the
      // grid now, and a column's contents sit in the middle of it
      out.push('<text class="bt-yl" x="' + ((fx0 + o.x0 - AXIS.RAIL) / 2).toFixed(1) + '" y="' + ly.toFixed(1) +
               '" text-anchor="middle">' + o.fmt(v) + '</text>');
    });
    if (o.base != null)
      out.push('<path class="bt-axis" d="M' + fx0.toFixed(1) + ',' + o.base + 'L' + fx1.toFixed(1) + ',' + o.base + '"/>');
    return out.join("");
  }

  // B. A PRICE AGAINST FAIR VALUE -> diverging. The story is the distance from fair, not the level, so the bars grow
  // out of the fair line in both directions. One scale, but the midline sits where the data puts it: CAPE runs far
  // further above fair than below, and centring the line would spend half the frame on empty space.
  function divergeChart(o, W){
    W = Math.max(280, W || 340);
    var H = Math.round(Math.max(170, Math.min(260, W * (W < 520 ? 0.58 : 0.30))));
    // A chart states its own scale. Here the rule beneath the plot is a FRAME that anchors the years, NOT a zero the
    // reader should measure from: the bars hang off the fair-value midline in both directions, so the thing to
    // measure from is that line, which carries its own label — hence `skipNear`, which drops any tick near it.
    var padL = AXIS.L, padR = AXIS.R, padT = AXIS.T + AXIS.LEG + AXIS.READ, padB = 22, iw = W - padL - padR, ih = H - padT - padB;   // margins: see reserveChart
    var vs = o.vals.map(function(d){ return d.v; });
    var lo = Math.min.apply(null, vs.concat([o.mid])), hi = Math.max.apply(null, vs.concat([o.mid]));
    var above = (hi - o.mid) * 1.06, below = (o.mid - lo) * 1.12, unit = ih / ((above + below) || 1);
    var midY = padT + above * unit;
    function y(v){ return (midY - (v - o.mid) * unit).toFixed(1); }
    var n = o.vals.length, slot = iw / n, sw = colWidth(slot);
    /* `step` goes through: a RATIO in a narrow band gets one tick from the default ladder, and on this chart
       that tick is the midline, skipped by construction — an axis with no numbers on it at all. */
    var out = [chartAxes({ lo:o.mid - below, hi:o.mid + above, y:y, x0:padL, x1:(W - padR), top:(padT - AXIS.LEG - AXIS.READ), bot:(padT + ih),
                           base:(padT + ih), skipNear:midY, step:o.step, fmt:(o.tickFmt || o.fmt) })];
    // the fair line goes UNDER the bars; over them, its dashes read as part of every short bar
    out.push('<path class="dv-mid" d="M' + padL + ',' + midY.toFixed(1) + 'L' + (W - padR) + ',' + midY.toFixed(1) + '"/>');
    o.vals.forEach(function(d, i){
      var cx = (padL + slot * (i + 0.5)).toFixed(1), y1 = parseFloat(y(d.v));
      if (Math.abs(y1 - midY) < 0.6) y1 = midY + (d.v >= o.mid ? -0.6 : 0.6);
      out.push('<path class="dv-bar hcol ' + (d.v > o.mid ? "over" : "under") + '" stroke-width="' + sw.toFixed(1) + '" d="' + colPath(cx, midY, y1, sw) + '"/>');
    });
    // the window's average beside the fair-value midline. BOTH are on the chart, which is what makes a windowed
    // average safe here: a ten-year CAPE average alone reports a near-record valuation as merely rich, and the
    // midline stops that by keeping the long reference in the picture next to it.
    var dAvg = o.vals.reduce(function(a, d){ return a + d.v; }, 0) / (n || 1);
    out.push(avgRule(padL, (W - padR), y(dAvg)));
    if (o.fit && o.fit.n > 1) out.push(fitGroup(o, padL + slot * 0.5, padL + slot * (n - 0.5), y, W, padL, padR));
    // no corner figure: see reserveChart
    o.vals.forEach(function(d, i){
      var lab = xLabelOf(o, d, i, o.vals); if (!lab) return;
      out.unshift(vGrid(padL + slot * (i + 0.5), padT, padT + ih));
      out.push(xLabel((padL + slot * (i + 0.5)).toFixed(1), lab, (H - AXIS.FOOT)));
    });
    // slot geometry for the hover: see reserveChart
    out.push(crossLine(padT, (padT + ih)));
    publishGeom("divergeChart", { L:(padL + slot * 0.5), R:(padL + slot * (n - 0.5)), T:padT, B:(padT + ih), W:W, n:n,
                     refs:(o.mid != null ? [{ label:"Average", v:dAvg }, { label:refName(o.midLabel), v:o.mid, dash:true, cls:"dv-mid" }]
                                        : [{ label:"Average", v:dAvg }]),
                     /* `at` names the reading in the readout plate. The default, d.y, suits annual series
                        and prints "undefined" for a monthly one, so a caller with months passes its own. */
                     vals:o.vals, at:(o.at || function(d){ return String(d.y); }), fmt:o.fmt });
    return '<div class="dchart"><svg class="hist-svg" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + (o.alt || "") + '">' + out.join("") + '</svg></div>';
  }

  // C. TWO MEASUREMENTS OF ONE QUANTITY -> the pair. Keren's reference (Sep 20, 2026) is a before/after chart: a quiet
  // bar and a coloured one per slot, the gap between them the story. Transplanted literally it would have lied here.
  // Two columns rising from zero can only show a difference the eye can measure, and real GDP moves about 2% a year —
  // at a true zero baseline the pair is two columns of identical height, and at a truncated one the picture is a lie
  // about the size of the change. So the pair keeps the reference's grammar — quiet is "before", coloured is "after" —
  // and draws the GAP itself: a connector between the two readings with a disc at each end, which is the app's own
  // "here" mark used twice. Because the mark IS the difference, a scale that starts where the data starts is honest.
  // The percentage above each pair is the number the page quotes, arrived at by division in front of the reader.
  function pairChart(o, W){
    W = Math.max(280, W || 340);
    var H = Math.round(Math.max(196, Math.min(260, W * (W < 520 ? 0.60 : 0.32))));
    var padL = 14, padR = 14, padT = 38, padB = 40, iw = W - padL - padR, ih = H - padT - padB;
    var all = [];
    o.pairs.forEach(function(p){ all.push(p.was, p.now); });
    var lo = Math.min.apply(null, all), hi = Math.max.apply(null, all);
    var span = (hi - lo) || 1; lo -= span * 0.30; hi += span * 0.16;
    function y(v){ return (padT + ih * (1 - (v - lo) / (hi - lo))).toFixed(1); }
    var n = o.pairs.length, slot = iw / n;
    var out = [];
    o.pairs.forEach(function(p, i){
      var cx = (padL + slot * (i + 0.5)).toFixed(1);
      var yw = parseFloat(y(p.was)), yn = parseFloat(y(p.now)), cls = p.pct >= 0 ? "phase-up" : "phase-down";
      // the connector first, so the two discs sit on top of their own line
      out.push('<path class="pc-link ' + cls + '" d="M' + cx + ',' + yw.toFixed(1) + 'L' + cx + ',' + yn.toFixed(1) + '"/>');
      out.push('<circle class="pc-was" cx="' + cx + '" cy="' + yw.toFixed(1) + '" r="4.4"/>');
      out.push('<circle class="pc-now ' + cls + '" cx="' + cx + '" cy="' + yn.toFixed(1) + '" r="4.4"/>');
      out.push('<circle class="pc-core ' + cls + '" cx="' + cx + '" cy="' + yn.toFixed(1) + '" r="1.8"/>');
      out.push('<text class="pc-pct mono ' + cls + '" x="' + cx + '" y="' + (Math.min(yw, yn) - 13).toFixed(1) + '" text-anchor="middle">' + fmtSigned(p.pct, 1) + '%</text>');
      out.push(xLabel(cx, p.label, (H - 21)));
      out.push('<text class="pc-was-lab" x="' + cx + '" y="' + (H - 7) + '" text-anchor="middle">from ' + p.wasLabel + '</text>');
    });
    return '<div class="dchart pairchart"><svg viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="' + (o.alt || "") + '">' + out.join("") + '</svg></div>' +
      '<div class="pc-legend"><span><i class="pc-key-was"></i>a year earlier</span>' +
      '<span><i class="pc-key-now ' + (o.pairs.some(function(p){ return p.pct < 0; }) ? "mixed" : "phase-up") + '"></i>that quarter</span>' +
      '<span class="pc-unit">' + o.unit + '</span></div>';
  }

  // ---------------- The inner pages' chart (kept for nothing — see above) ----------------

  // the highest reading in a window — for "above the previous record" sentences, which must never compare a reading
  // with itself
  function maxIn(series, from, to){
    var vs = series.filter(function(d){ var y = yearOf(d); return y >= from && y <= to; });
    return vs.length ? vs.reduce(function(a, b){ return b.v > a.v ? b : a; }) : null;
  }

  // A peek is the smallest honest picture of a series: the marks, their reference and where the series stands now.
  // No axis, no labels, no hover; the card's figure says the number and the drawer one tap away says everything
  // else.
  // Every peek is one drawing language, so one rule spaces them all (Keren, Sep 20, 2026: "the spacing in the
  // economic power preview … needs to be identical to temperature, growth, and valuations because it's the same
  // language"): a slot per mark, the mark COL_FILL of the slot, capped at 7 — colPeek's rule.
  // The column peek is a miniature of its page: the same columns and the same ramp, at peek size. A peek should
  // be a small picture of what it opens, not a different picture of the same reading.
  // classOf is given the value AND its index, so a caller whose colouring depends on more than the number (growth's
  // regime, which is a six-quarter fit) can look the extra up
  var PEEK_MARKS = 12;   // see the note above
  /* Every peek art is drawn on ONE width, the width of the slot it lands in (`--mini-w`). The builders stretch
     their viewBox with preserveAspectRatio="none", and SVG then takes a stroke's scale as the geometric mean of
     the two axes — so a picture drawn wider than its slot shrinks its spacing more than its marks, and the
     marks close up. */
  var PEEK_W = 80;
  // the height, the same way: one number for every builder, --mini-h in the sheet
  var PEEK_H = 42;
  // `rule` draws a hairline at the base (Keren, V312: "in the Volume preview put a purple line so I can
  // understand what is above the line and what is below"). It is the right answer to a peek whose series crosses
  // its base — better than making the bars taller, which would have meant moving the base off zero and losing
  // what a bar's height means. Only a diverging peek asks for it, so it is opt-in.
  function colPeek(all, classOf, base, rule){
    if (!all || !all.length) return "";
    // the last twelve, keeping their ORIGINAL indices so a colouring rule that looks something up still lines up
    var from = Math.max(0, all.length - PEEK_MARKS), vals = all.slice(from);
    var classAt = function(v, i){ return classOf(v, i + from); };
    var W = PEEK_W, H = PEEK_H, padT = 6, padB = 3, zero = base == null ? 0 : base;
    var hi = Math.max.apply(null, vals.concat([zero])) * 1.06, lo = Math.min(zero, Math.min.apply(null, vals)) * 1.06;
    var slot = W / vals.length, sw = Math.max(1.6, Math.min(7, slot * COL_FILL));
    function y(v){ return (padT + (H - padT - padB) * (1 - (v - lo) / ((hi - lo) || 1))).toFixed(1); }
    var out = [];
    if (rule) out.push('<path class="peek-base" d="M0,' + y(zero) + 'H' + W + '"/>');   // drawn first: the columns stand on it
    vals.forEach(function(v, i){
      var cx = (slot * (i + 0.5)).toFixed(1);
      // every bar but the last is history: it keeps its height and loses its colour
      var last = i === vals.length - 1;
      out.push('<path class="' + classAt(v, i) + (last ? " now" : " past") + '" stroke-width="' + sw.toFixed(1) + '" d="M' + cx + ',' + y(zero) + 'L' + cx + ',' + y(v) + '"/>');
    });
    return '<span class="peek-chart heat"><svg viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="none" aria-hidden="true">' + out.join("") + '</svg></span>';
  }

  // THE FOURTH PEEK FORM. Temperature, GDP and Valuations are histories, so their peeks are columns;
  // Economic power is a level now, so its peek is a gauge. Effort and Pulse are neither: there is no ISM series to
  // draw (the PMI has not been public since 2016) and no M2 velocity history in this app, and both readings are
  // really ONE number against a reference band — a PMI above or below its 50 breakeven, a velocity inside or under
  // its pre-2008 pace. So the honest picture is not a bar chart (Keren: "I don't think it's necessarily a bar
  // chart — pick the best infographic"): it is the app's own track, band and disc, laid flat and given the peek's
  // full width. The same mark the reference bars and the Sentiment rings use, at peek scale.
  function meterPeek(m, state){
    var W = PEEK_W, H = PEEK_H, sw = 13, cy = H / 2, x0 = sw / 2, x1 = W - sw / 2;
    function at(v){ return x0 + (x1 - x0) * Math.max(0, Math.min(1, (v - m.min) / ((m.max - m.min) || 1))); }
    var o = m.optimal || {};
    var lo = o.from != null ? o.from : (o.gte != null ? o.gte : m.min);
    var hi = o.to != null ? o.to : (o.lte != null ? o.lte : m.max);
    var a = at(lo), c = at(hi);
    if (c - a < sw) c = a + sw;                       // a band thinner than the track is a band you cannot see
    var hx = at(m.value);
    return '<span class="peek-chart meterpeek"><svg viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="none" aria-hidden="true">' +
      '<path class="mp-track" stroke-width="' + sw + '" d="M' + x0 + ',' + cy + 'H' + x1 + '"/>' +
      '<path class="mp-band" stroke-width="' + sw + '" d="M' + a.toFixed(1) + ',' + cy + 'H' + c.toFixed(1) + '"/>' +
      '<circle class="mp-here ' + state + '" cx="' + hx.toFixed(1) + '" cy="' + cy + '" r="7.5"/>' +
      '<circle class="mp-core ' + state + '" cx="' + hx.toFixed(1) + '" cy="' + cy + '" r="3"/>' +
    '</svg></span>';
  }

  var PRESSURE_ZONES = [
    { key:"inverted", label:"Inverted", from:-2,  to:0 },
    { key:"normal",   label:"Normal",   from:0,   to:2.5 },
    { key:"steep",    label:"Steep",    from:2.5, to:4 }
  ];
  function pressureZone(v){
    for (var i = 0; i < PRESSURE_ZONES.length; i++){
      if (v < PRESSURE_ZONES[i].to || i === PRESSURE_ZONES.length - 1) return PRESSURE_ZONES[i];
    }
    return PRESSURE_ZONES[PRESSURE_ZONES.length - 1];
  }
  /* ================= Horizon, the curve read as an outlook =================
     The word has to come from the slope AND the direction, because slope alone cannot tell two opposite stories
     apart. A curve steepens two ways: long rates rising, which is the market pricing growth and inflation ahead,
     or short rates falling, which is a central bank cutting into trouble. 2008 and 2021 both show a steep curve
     and they do not mean the same thing — so "steep = optimistic" is the kind of rule that is right most of the
     time and catastrophically wrong at the turn. The test below asks which end moved: `dLong` against `-dShort`
     is the long end's contribution against the short end's, and whichever is larger names the mood.
     The lookback is fixed at four quarters and does NOT follow the chart's window. A verdict that changed when
     you changed the picture would be a verdict about the picture. */
  var HZN_BACK = 4;
  function hznLast(a){ for (var i = a.length - 1; i >= 0; i--) if (a[i].v != null) return { i:i, v:a[i].v }; return null; }
  function hznBack(a, from, back){ for (var i = from - back; i >= 0; i--) if (a[i].v != null) return a[i].v; return null; }
  function horizonWord(sp, dLong, dShort, dSpread){
    if (sp < -0.10) return { word:"Pessimistic", state:"critical" };
    if (sp <  0.25) return { word:"Undecided",   state:"warning" };
    if (dSpread <= 0.05) return { word:"Guarded", state:"warning" };
    return dLong >= -dShort ? { word:"Optimistic", state:"good" } : { word:"Hopeful", state:"good" };
  }
  var horizonRead = (function(){
    var pick = function(m){ var h = yieldCurve.filter(function(d){ return d.m === m; })[0]; return h ? h.y : null; };
    var sp = pick("10Y") - pick("3M");
    var sN = hznLast(t10y3mHistory), lN = hznLast(t10yYieldHistory), tN = hznLast(t3mYieldHistory);
    var tN2 = hznLast(t10y2yHistory);
    var dSpread = sN.v - hznBack(t10y3mHistory, sN.i, HZN_BACK);
    var dLong   = lN.v - hznBack(t10yYieldHistory, lN.i, HZN_BACK);
    var dShort  = tN.v - hznBack(t3mYieldHistory, tN.i, HZN_BACK);
    var w = horizonWord(sp, dLong, dShort, dSpread);
    return { spread:sp, q:sN, q2:tN2, dSpread:dSpread, dLong:dLong, dShort:dShort,
             was:hznBack(t10y3mHistory, sN.i, HZN_BACK), was2:hznBack(t10y2yHistory, tN2.i, HZN_BACK),
             d2:tN2.v - hznBack(t10y2yHistory, tN2.i, HZN_BACK),
             word:w.word, state:w.state };
  })();
  /* Horizon's band is definitional: zero is where an upward-sloping curve becomes an inverted one, not a level
     anyone picked. One-sided, because a steeper curve is not a worse curve — a two-sided band here would flag
     the healthy end as a condition. The track’s ends are the quarterly record the chart itself draws, so the
     band and the picture describe the same series. No meter row shows it (see below); the note reads it to
     explain where the record's ends come from. */
  var HZN_METERS = {
    "3m": { min:-1.48, max:3.61, value:horizonRead.spread,
            optimal:{ gte:0, label:"0 and above" }, ends:{ low:"Inverted" } },
    "2y": { min:-0.77, max:2.80,
            value:(function(){ var p = function(m){ var h = yieldCurve.filter(function(d){ return d.m === m; })[0]; return h ? h.y : 0; };
                               return p("10Y") - p("2Y"); })(),
            optimal:{ gte:0, label:"0 and above" }, ends:{ low:"Inverted" } }
  };
  function horizonInfoHtml(pick){
    var m = HZN_METERS[pick], shortLeg = pick === "2y" ? "2-year" : "3-month";
    return '<h4>10-year minus ' + shortLeg + '</h4>' +
      '<p class="caption">What the long end of the curve pays over the short end, in percentage points. It is a ' +
        'forecast rather than a measurement: the long rate is the market’s own average of where it expects the ' +
        'short rate to be for the next ten years, so a curve that slopes down is a market expecting cuts, and a ' +
        'market expecting cuts is a market expecting trouble. The ends of the track are this series’ quarterly ' +
        'record, ' + m.min.toFixed(2) + ' and +' + m.max.toFixed(2) + ' points; the deepest single DAY of the ' +
        'last inversion was −1.89, in May 2023, below the quarterly low because a quarter is an average.</p>' +
      '<p class="caption" style="margin-top:10px;"><b>The line at zero is definitional, not drawn</b> — it is ' +
        'where an upward-sloping curve becomes an inverted one, and it is the threshold the New York Fed’s own ' +
        'recession model is built on, using this exact pair of maturities. That model’s FAQ states that an ' +
        'inversion has preceded every U.S. recession on record since 1960, with a single false signal in 1967. ' +
        'The band is one-sided because a steeper curve is not a worse one: there is nothing to flag above zero.</p>' +
      '<p class="caption" style="margin-top:10px;">Read the caution with the signal, because it is the same ' +
        'source’s. The New York Fed is explicit that it is the <b>level</b> of the spread that forecasts, not the ' +
        'crossing — in two episodes in the 1990s the spread fell to 42 and then 12 basis points without ever ' +
        'inverting, and nothing followed. A reading just above zero is not the all-clear the colour suggests, ' +
        'which is why the word this page gives a spread under 0.25 is <b>Undecided</b>.</p>' +
      // then the series' own note, its leading <h4> dropped (this note already has one) and its source list kept,
      // being the fuller of the two and already carrying the NY Fed FAQ this reading cites.
      String(SPREAD_DETAIL || "").replace(/^\s*<h4>[\s\S]*?<\/h4>/, "");
  }
  /* Keren, V599, of the lab-result row under this chart: "get rid of the test result component below the
     chart — it's not informative." The columns change colour at zero, so a meter reading "0 and above" would
     be the zero line drawn a second time, in words. */
  // Keren, V343: risk on the side, reward along the bottom, and the pairing named in that order. The title carries
  // her words, "risk/reward ratio"; it is a position on two axes, not a quotient, and the note says so.
  //
  // With risk up the side and reward along the bottom, the corner to be in is bottom-right (little to lose, well
  // paid) and its opposite is top-left. The wash deepens that way.
  var RISK_REWARD = [                                  // index 0 is the LEFT column
    { key:"low",  label:"Low",      at:function(v){ return v < 4; } },
    { key:"mod",  label:"Moderate", at:function(v){ return v >= 4 && v <= 10; } },
    { key:"high", label:"High",     at:function(v){ return v > 10; } }
  ];
  var RISK_RISK = [                                    // index 0 is the BOTTOM row
    { key:"low",  label:"Low",      at:function(v){ return v < 20; } },
    { key:"mod",  label:"Moderate", at:function(v){ return v >= 20 && v <= 30; } },
    { key:"high", label:"High",     at:function(v){ return v > 30; } }
  ];
  function riskCell(bands, v){ var i = 0; bands.forEach(function(b, k){ if (b.at(v)) i = k; }); return i; }
  function riskMatrixBlock(oas, cape){
    var wi = riskCell(RISK_REWARD, oas), ri = riskCell(RISK_RISK, cape);
    var ylabs = [], cells = [];
    for (var r = RISK_RISK.length - 1; r >= 0; r--){
      ylabs.push('<span class="rm-y' + (r === ri ? " on" : "") + '">' + RISK_RISK[r].label + '</span>');
      for (var c = 0; c < RISK_REWARD.length; c++){
        var here = (r === ri && c === wi);
        // 0 at the bottom-right (little to lose, well paid) through 4 at the top-left
        cells.push('<span class="rm-c s' + (r + (RISK_REWARD.length - 1 - c)) + (here ? " here" : "") + '" title="' +
          RISK_RISK[r].label + ' risk · ' + RISK_REWARD[c].label + ' reward">' +
          (here ? '<i class="rm-mark"></i>' : "") + '</span>');
      }
    }
    var xlabs = RISK_REWARD.map(function(b, i){
      return '<span class="rm-x' + (i === wi ? " on" : "") + '">' + b.label + '</span>';
    }).join("");
    return '<div class="page-chart riskmx">' +
      '<div class="spread-history-head"><h4>Risk / Reward Ratio</h4>' + expandBtn(riskMatrixNote) + '</div>' +
      '<div class="rm-frame"><span class="rm-axis rm-axis-y">Risk</span>' +
        '<div class="rm-grid">' +
          '<div class="rm-ylabs">' + ylabs.join("") + '</div>' +
          '<div class="rm-cells">' + cells.join("") + '</div>' +
          '<span></span><div class="rm-xlabs">' + xlabs + '</div>' +
        '</div></div>' +
      '<div class="rm-axis rm-axis-x">Reward</div>' +
      '<p class="pt-note"><b>' + RISK_RISK[ri].label + ' risk</b> (CAPE ' + cape.toFixed(1) + '×) · ' +
        '<b>' + RISK_REWARD[wi].label + ' reward</b> (' + oas.toFixed(2) + '% spread). ' +
        'Risk: CAPE under 20 / 20–30 / over 30. Reward: spread under 4% / 4–10% / over 10%. ' +
        'The grid places the two readings against each other. It does not forecast.</p>' +
    '</div>';
  }
  var riskMatrixNote =
    '<h4>Risk / Reward Ratio</h4>' +
    '<p class="caption">Two readings already on this board, placed against each other because neither answers the ' +
      'other’s question alone. <b>Risk</b> is CAPE, from the Valuations page — how much price sits on a decade of ' +
      'earnings, and so how much there is to give back. <b>Reward</b> is the extra yield demanded to hold junk ' +
      'debt — Desire’s own figure, read forwards: a wide spread is a lot of compensation for the risk, a tight ' +
      'one is very little. This is the same figure the card above tags as high appetite, seen from the other ' +
      'side: <b>high appetite is what a low-reward market looks like from the inside.</b></p>' +
    '<p class="caption" style="margin-top:10px;">How to read it. The two readings are placed against each ' +
      'other rather than divided into a single figure, so what you get is a position on two axes rather than one ' +
      'number. It is also not <b>Value at Risk</b>, which is a different and far more precise measure — the loss ' +
      'not exceeded with a stated probability over a stated horizon. This grid has no distribution, no ' +
      'confidence level and no horizon.</p>' +
    '<p class="caption" style="margin-top:10px;">The bands. A spread under 4% is the euphoric zone (the record ' +
      'low is 2.41%, June 2007), over 10% the distressed one (the record high 21.82%, December 2008), and ' +
      'between them is ordinary. CAPE’s 20 and 30 are round numbers sitting close to the terciles of this ' +
      'app’s own 1970–2026 history (16.9 and 26.5); they split those fifty-seven years twenty-four, ' +
      'twenty-one and twelve.</p>' +
    '<p class="caption" style="margin-top:10px;">No cell carries a rating. The wash deepens toward high risk and ' +
      'low reward because being paid least when there is most to lose is arithmetic about two readings — a ' +
      'description of where you are standing, not a claim about what happens next. The honest way to say more ' +
      'would be to shade each cell by what followed historically, as the un-inversion panel on the Pressure page ' +
      'does; that needs a long spread history, and FRED now serves this series on a rolling three-year window, ' +
      'so the past years cannot be binned.</p>';
