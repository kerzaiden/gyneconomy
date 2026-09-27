  /* ---------------- Version 518: the history card's head ----------------
     Keyed by the id `histControls` already receives, so a page's head costs it nothing: no call site passes a
     title, a mark or a note. `title` is a string or a function, because Pressure's names the maturity chosen on
     the control below it and Horizon's names the spread. `mark` is null on exactly one page \u2014 the federal
     deficit, which is a marker inside Economic power and has never had a glyph of its own; a blank badge is
     worse than none (the Version 510 lesson), so the head simply renders without one until Keren picks one. */
  var HIST_NOTE = {};   // filed by panelRow(o.head) \u2014 the page's note, never a second copy of it
  var DOTS = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
    '<circle cx="5.4" cy="12" r="1.75"/><circle cx="12" cy="12" r="1.75"/><circle cx="18.6" cy="12" r="1.75"/></svg>';
  var HIST_HEAD = {
    "sheet-metric-temp":       { mark:thermoSvg,  title:"CPI, YoY" },
    "sheet-metric-gdp":        { mark:sproutSvg,  title:"Real GDP, YoY" },
    "sheet-sign-activity":     { mark:ecgSvg,     title:"Unemployment rate" },
    "sheet-metric-power":      { mark:function(){ return batteryIconSvg(powerWord.bars); },
                                 title:"Power supply, one charge per year" },
    "sheet-metric-valuation":  { mark:diamondSvg, title:"Shiller CAPE, against fair value" },
    "sheet-metric-households": { mark:houseSvg,   title:"Debt service, share of income" },
    "deficit-range":           { mark:null,       title:"Federal deficit or surplus, share of GDP" },
    "volume-range":            { mark:speakerSvg, title:"M2 money stock, YoY" },
    "pulse-range":             { mark:pulseSvg,   title:"Velocity of money (M2)" },
    "hzn-range":               { mark:sunriseSvg,
                                 title:function(){ return "10-year minus " +
                                   (spreadPick === "2y" ? "2-year" : "3-month") + " Treasury spread"; },
                                 menu:function(){ return HZN_SPREADS.map(function(r){
                                   var on = spreadPick === r.key;
                                   return '<button type="button" class="cycsel-opt bh-pick' + (on ? " on" : "") +
                                     '" role="menuitemradio" aria-checked="' + (on ? "true" : "false") +
                                     '" data-hzn-spread="' + r.key + '">' +
                                     '<span class="cycsel-tick" aria-hidden="true"></span>' +
                                     '<span class="cycsel-nm">' + r.label + '</span></button>';
                                 }).join("") + '<div class="bh-sep" role="separator"></div>'; } },
    "ylm-range":               { mark:gaugeSvg,   title:"" },   // drawYlm sets it: the maturity the control picks
    "desire-range":            { mark:flameSvg,   title:"High-yield spread over Treasuries" }
  };
  function histHead(id){
    var H = HIST_HEAD[id];
    if (!H) return "";
    var t = typeof H.title === "function" ? H.title() : H.title;
    return '<div class="band-head">' +
      (H.mark ? '<span class="bh-mark" aria-hidden="true">' + H.mark() + '</span>' : "") +
      // V539: h2, not h4. On an inner page the only heading above this is the top bar's h1, so an
      // h4 skips two levels and a screen reader's heading list reads as if content is missing.
      // The style is class-based (.bh-title), so the level changes and nothing moves.
      '<h2 class="bh-title">' + t + '</h2>' +
      '<div class="bh-more-wrap"><button type="button" class="bh-more" data-head-more="' + id + '" ' +
        'aria-haspopup="menu" aria-expanded="' + (headMenuFor === id ? "true" : "false") +
        '" aria-label="More about this chart">' + DOTS + '</button>' +
      '<div class="cycsel-menu bh-menu" role="menu"' + (headMenuFor === id ? "" : " hidden") + '>' +
        (headMenuFor === id ? headMenuHtml(id) : "") + '</div></div>' +
    '</div>';
  }
  /* One slot in detailTexts per page, allocated on the first open and REWRITTEN on every open \u2014 the same
     pattern the hub's popup uses (see hubDetailIdx). A slot per open would grow the array every time a reader
     tapped the dots, and a slot cached with its first contents would freeze Pressure's note on whichever
     maturity happened to be showing then. */
  var headNoteIdx = {};
  function headMenuHtml(id){
    var H = HIST_HEAD[id] || {};
    /* V522, Keren, of Horizon's spread bar: "10Y minus 3 months, 10Y minus 2 years shouldn't be a new ruler —
       you can put it in the three dots on the history container, that would be a good place for it." A page
       whose control chooses WHICH SERIES the chart draws (rather than which window) puts that choice here, so
       the control row stays one ruler on every page. `menu` returns the rows; the note is always last. */
    var extra = H.menu ? H.menu() : "";
    var note = HIST_NOTE[id];
    if (!note) return extra;
    if (headNoteIdx[id] == null){ headNoteIdx[id] = detailTexts.length; detailTexts.push(""); }
    detailTexts[headNoteIdx[id]] = note;
    return extra +
      '<button type="button" class="cycsel-opt bh-opt" role="menuitem" data-detail-idx="' +
      headNoteIdx[id] + '"><span class="cycsel-nm">About this reading</span></button>';
  }
  /* Which page's ⋯ menu is showing, kept in STATE rather than in the DOM — the Version 419 rule, learned on the
     cycle picker: "one listener covers opening, ticking and closing", and the open flag lives outside the markup
     so a re-render cannot close it. It matters here for a reason that is easy to miss: a click anywhere closes an
     open cycle picker, and closing it redraws the sheet, which rebuilds this head. With the flag in the DOM the
     menu would vanish the instant it appeared on any page whose picker happened to be open. */
  var headMenuFor = null;
  function paintHeadMenus(){
    var heads = document.querySelectorAll(".band-head");
    for (var i = 0; i < heads.length; i++){
      var btn = heads[i].querySelector(".bh-more"), menu = heads[i].querySelector(".bh-menu");
      if (!btn || !menu) continue;
      var on = btn.getAttribute("data-head-more") === headMenuFor;
      if (on && menu.hidden) menu.innerHTML = headMenuHtml(headMenuFor);
      menu.hidden = !on;
      btn.setAttribute("aria-expanded", on ? "true" : "false");
    }
  }
  document.addEventListener("click", function(e){
    // V522: a choice inside the menu closes it and redraws the page, which rebuilds the head with the new title
    var pick = e.target.closest && e.target.closest(".bh-pick");
    if (pick){
      headMenuFor = null; paintHeadMenus();
      if (window.__pickSpread) window.__pickSpread(pick.getAttribute("data-hzn-spread"));
      return;
    }
    var btn = e.target.closest && e.target.closest("[data-head-more]");
    if (!btn){ if (headMenuFor !== null){ headMenuFor = null; paintHeadMenus(); } return; }
    var id = btn.getAttribute("data-head-more");
    // nothing to open is not a menu (the V366 rule): the dots simply do not respond until the page has its note
    headMenuFor = (headMenuFor === id || !HIST_NOTE[id]) ? null : id;
    paintHeadMenus();
  });
  function nameWithMark(name, mark){
    if (!mark) return name;
    var i = String(name).lastIndexOf(" ");
    return (i < 0 ? "" : name.slice(0, i + 1)) +
           '<span class="pbr-last">' + (i < 0 ? name : name.slice(i + 1)) + mark + '</span>';
  }
  function panelRow(o){
    /* Version 488: a row with somewhere to go is a door, exactly as a sign row is (the V269 rule) — and it
       carries ONE affordance, the chevron, never a chevron AND an (i): its note travels to the page it opens
       and becomes that page's own lede (the V362 rule, which is why the deficit row has no (i) here). */
    var door = o.open ? ' class="panel-row lab-door" role="button" tabindex="0" data-open="' + o.open.id +
      '" data-title="' + o.open.title + '"' : ' class="panel-row"';
    /* Version 518: `head` names the history page whose CHART draws this reading. The note then belongs to that
       page's head \u2014 the first row of its \u22ef menu \u2014 and the row keeps no (i), because two doors onto one note is
       the Version 477 fault. It is filed rather than copied: one string, read from one place. */
    if (o.head && o.info) HIST_NOTE[o.head] = o.info;
    var mark = o.open ? CHEV : (o.info && !o.head ? infoIcon(o.info) : "");
    /* V520: the id travels onto the row, because `seatBandReading` needs to know which row the head above
       already named — see the .solo rule there. */
    return '<div' + door.replace('class="', (o.head ? 'data-head="' + o.head + '" class="' : 'class="')) + '>' +
      '<div class="pbr-name">' +
        // V539: h3. It sits under the card head's h2 (.bh-title), so h4 skipped a level. The style
        // rules are keyed on .pbr-name, and they now name h3 as well, so nothing about it moves.
        '<h3>' + nameWithMark(o.name, mark) + '</h3>' +
        '<div class="wb-read' + (o.flagged ? " flagged" : "") + '">' + o.metric + '</div>' +
      '</div>' +
      '<div class="pbr-scale">' + panelBar(o.bar) + '</div>' +
    '</div>';
  }
  /* The bar's geometry, read off a meter the app already carries. `optimal` comes in three shapes — a two-sided
     band, `gte` and `lte` — and the ends of the TRACK are the meter's own min and max, which every reading has
     sourced because they are its record. Nothing here is invented for the drawing. */
  function panelFromMeter(m, ends){
    var o = m.optimal || {}, e = ends || m.ends || {};
    var from = o.from != null ? o.from : (o.gte != null ? o.gte : m.min);
    var to   = o.to   != null ? o.to   : (o.lte != null ? o.lte : m.max);
    return { value:m.value, from:from, to:to, floor:m.min, ceil:m.max,
             lowLabel:e.low || "Low", highLabel:e.high || "High",
             /* Version 486, Keren: "I don't need the words 'her pace' — and maybe not even 'normal', because it
                is implicit from the structure that green is normal." Right: a three-segment spectrum with the
                band lit says what the band is without naming it, and the word was competing with the figures
                for the narrowest column on the row. The word does NOT disappear from the app — it carried each
                band's KIND (Pre-2008 rather than normal, a target rather than an observation) and that
                distinction now lives in the (i), which is where the provenance went in Version 480. */
             zoneLabel:o.label || e.zone || "" };
  }
  function meterFlagged(m){
    var o = m.optimal || {};
    if (o.from != null) return m.value < o.from || m.value > o.to;
    if (o.gte != null) return m.value < o.gte;
    if (o.lte != null) return m.value > o.lte;
    return false;
  }
  /* Version 479, Keren: "put an (i) next to Risk tolerance, drop the credit in parentheses — we can put it in
     the (i), and High appetite can be in the (i), and the high-yield OAS line can be in the (i)." Everything the
     head was carrying except the name of the reading. What is left on the page is what the panel she sent shows:
     a title, a figure, a spectrum. */
  function desireInfoHtml(ind){
    return '<h4>Risk tolerance (credit)</h4>' +
      '<p class="caption">The reading is <b>' + ind.tag.text + '</b>. The figure is the ICE BofA US High Yield ' +
        'Index option-adjusted spread \u2014 the extra yield investors demand to lend to companies rated below ' +
        'investment grade, over Treasuries of the same maturity, with the value of any embedded options ' +
        'stripped out (' + ind.metricSub + ').</p>' +
      '<p class="caption" style="margin-top:10px;"><b>Normal here is ' + HY_NORM_LO + '\u2013' + HY_NORM_HI +
        '%</b>, and both edges are the credit market\u2019s own breaks rather than a target: below about 3.5% is ' +
        'read as complacency, above about 6% as stress, and above 8% as distress. The long-run median since the ' +
        'index began in 1996 is roughly 4.5%, which sits inside the band. An economy has no level it ought to be ' +
        'at, so none of this is an optimum \u2014 it is where this spread has actually sat.</p>' +
      '<p class="caption" style="margin-top:10px;"><b>Tight</b> means lenders are asking little to take credit ' +
        'risk, so appetite is high; <b>wide</b> means they are asking a lot. That is why the figure flags amber ' +
        'while the reading stays good: abnormally tight spreads are bullish risk appetite AND a historically ' +
        'unusual place for compensation to sit. Both are true of the one number. The ends of the scale are the ' +
        'index\u2019s own record: 2.41% in June 2007 and 21.82% in December 2008.</p>' +
      '<p class="caption" style="margin-top:10px;">Version 480 replaced an unsourced 4\u20135% band, which had ' +
        'entered the app as a rough long-run average and been printed as a normal range.</p>' +
      '<div class="src">' + srcHtml([
        {t:"ICE Data Indices via FRED \u2014 ICE BofA US High Yield Index OAS (BAMLH0A0HYM2)", u:"https://fred.stlouisfed.org/series/BAMLH0A0HYM2"},
        {t:"Trading Economics \u2014 the index\u2019s record high and low since 1996", u:"https://tradingeconomics.com/united-states/bofa-merrill-lynch-us-high-yield-option-adjusted-spread-fed-data.html"},
        {t:"Convex \u2014 high-yield spread regimes and the long-run median", u:"https://convextrade.com/glossary/hy-spreads"},
        {t:"CME Group \u2014 how Fed policy moves corporate bond spreads", u:"https://www.cmegroup.com/openmarkets/interest-rates/2025/How-Fed-Policy-Can-Impact-Corporate-Bond-Spreads.html"}
      ]) + '</div>';
  }
  /* Version 485. Both of these state where the BAND came from, which is the thing an (i) on a reading with a
     range is for — the lesson of Version 480, where a number nobody could source had been printed as a normal
     range for two versions. Neither band moved; both simply say what they are now. */
  function volumeInfoHtml(ind){
    return '<h4>' + ind.econTerm + '</h4>' +
      '<p class="caption">The reading is <b>' + (ind.tag ? ind.tag.text : "") + '</b>. M2 is the money stock \u2014 ' +
        'cash, chequing and savings deposits, and retail money-market funds \u2014 read as the year-over-year change ' +
        '(' + ind.metricSub + ').</p>' +
      '<p class="caption" style="margin-top:10px;"><b>Her pace is 3.5\u201310%</b>, and that is a band computed from ' +
        'this page\u2019s own series rather than chosen: across the 240 quarters from 1960 to 2019, M2 grew 6.80% a ' +
        'year on average (median 6.70%), and the tenth to ninetieth percentile runs 3.3% to 10.3%. So roughly four ' +
        'quarters in five sat inside this band, and the two ends are what unusual looks like in each direction \u2014 ' +
        '<b>draining</b> below it, <b>flooding</b> above. The ends of the track are the record itself: \u22124.6% in ' +
        '2023 Q2, the only contraction in the series, and +25.6% in 2021 Q1.</p>' +
      '<p class="caption" style="margin-top:10px;">Volume and Pulse are two halves of one number \u2014 nominal output ' +
        'is the money stock times its velocity \u2014 so neither means much read alone.</p>';
  }
  function pulseInfoHtml(ind){
    return '<h4>' + ind.econTerm + '</h4>' +
      '<p class="caption">The reading is <b>' + (ind.tag ? ind.tag.text : "") + '</b>. Velocity is how many times ' +
        'the same dollar changes hands in a year, nominal GDP divided by M2 (' + ind.metricSub + '). The track\u2019s ' +
        'ends are the record: 1.126\u00d7 in 2020 Q2 and 2.192\u00d7 in 1997 Q3.</p>' +
      '<p class="caption" style="margin-top:10px;"><b>The 1.7\u20132.2\u00d7 band is the pre-2008 era\u2019s own range</b>, not a ' +
        'target \u2014 across the 196 quarters from 1959 Q1 to 2007 Q4 velocity averaged 1.857\u00d7 (median 1.808\u00d7) and ' +
        'ran between 1.652\u00d7 and 2.192\u00d7. It is labelled <b>Pre-2008</b> rather than normal for that reason: the ' +
        'collapse after 2008 may be the new ordinary, and calling the old range normal would beg that question.</p>' +
      '<p class="caption" style="margin-top:10px;">The ends mean direction as well as level: <b>slow</b> is money ' +
        'sitting still, the signature of a stalled economy, and <b>fast</b> is money changing hands quickly, which ' +
        'is a busy economy and, past a point, an inflationary one.</p>';
  }
  /* Version 487. Activity's 3.5–5% was one of the four bands the Version 485 audit found hand-drawn. It is
     not arbitrary — it brackets the CBO's own published estimate — but the app had never said so, and the
     rule since Version 480 is that a band ships with its provenance or it does not ship. */
  /* Version 497. Both of these readings spent their life in a `.folded-sign` whose (i) held only the leftover
     of its own caption. As rows in Activity's stack they get proper notes — and Productivity's band turns out
     to have been sourced all along without saying so. */
  function productivityInfoHtml(f){
    return '<h4>' + f.econTerm + '</h4>' +
      '<p class="caption">The reading is <b>' + f.tag.text + '</b>. Output per hour worked in the nonfarm ' +
        'business sector, against the same quarter a year earlier (' + f.metricSub + '). The ends of the track ' +
        'are the record for that series: \u22121.7% in 1974 and +6.7% in 1950.</p>' +
      '<p class="caption" style="margin-top:10px;"><b>The 1.3% line is the BLS\u2019s own figure for the slowdown ' +
        'era</b> \u2014 since 2005 productivity has grown at an average of just 1.3% a year, against 2.1% a year ' +
        'across 1947\u20132018. So the band says something narrower than it looks: above the line is <i>better than ' +
        'the slowdown</i>, not <i>at trend</i>. Today\u2019s ' + f.metric + ' clears both, which is why the word is ' +
        'above trend rather than merely adequate.</p>' +
      '<p class="caption" style="margin-top:10px;">This is the reading that says whether capacity is being ' +
        'rebuilt or only borrowed against: an economy can grow by working more hours or by getting more from ' +
        'each one, and only the second kind compounds.</p>' +
      '<div class="src">' + srcHtml([
        {t:"BLS \u2014 Productivity and Costs", u:"https://www.bls.gov/productivity/"},
        {t:"BLS Monthly Labor Review \u2014 The U.S. productivity slowdown (2021)", u:"https://www.bls.gov/opub/mlr/2021/article/the-us-productivity-slowdown-the-economy-wide-and-industry-level-analysis.htm"},
        {t:"BLS via FRED \u2014 Nonfarm Business Sector: Labor Productivity (OPHNFB)", u:"https://fred.stlouisfed.org/series/OPHNFB"}
      ]) + '</div>';
  }
  function outputInfoHtml(f){
    return '<h4>' + f.econTerm + '</h4>' +
      '<p class="caption">The reading is <b>' + f.tag.text + '</b>. The ISM Manufacturing PMI ' +
        '(' + f.metricSub + ') is a diffusion index, not a quantity: it asks purchasing managers whether ' +
        'activity is up, down or flat against last month, so it reports DIRECTION rather than level.</p>' +
      '<p class="caption" style="margin-top:10px;"><b>50 is definitional, not drawn</b> \u2014 it is the point at ' +
        'which as many firms report improvement as report decline, so above it manufacturing is expanding and ' +
        'below it contracting. That is why this band is one-sided: there is no level a PMI ought to sit at, only ' +
        'a line it is on one side of. The ends of the track are the record, 29.4 in May 1980 and 77.5 in July ' +
        '1950; ISM\u2019s full history is members-only, so those two come from a compilation of it.</p>' +
      '<p class="caption" style="margin-top:10px;">Read it as the fast reading on this page. The labour market ' +
        'above lags a turn by two to three quarters; this one is a survey of what is happening now.</p>' +
      '<div class="src">' + srcHtml(f.src || []) + '</div>';
  }
  function activityInfoHtml(ind){
    return '<h4>' + ind.econTerm + '</h4>' +
      '<p class="caption">The reading is <b>' + (ind.tag ? ind.tag.text : "") + '</b>. The figure is the ' +
        'headline unemployment rate (' + ind.metricSub + '). The ends of the track are the record: 2.5% in ' +
        'mid-1953 and, at the far end, the Census Bureau\u2019s 24.9% estimate for 1933.</p>' +
      '<p class="caption" style="margin-top:10px;"><b>The 3.5\u20135% band brackets the CBO\u2019s noncyclical rate of ' +
        'unemployment</b> \u2014 its estimate of the rate that remains once demand is neither too hot nor too cold, ' +
        'currently around 4.2%. Be clear about what is sourced and what is not: the CBO\u2019s number is published, ' +
        'the two edges are round figures set either side of it rather than a computed interval. There is no ' +
        'official normal range for unemployment, and this is the honest way to draw one.</p>' +
      '<p class="caption" style="margin-top:10px;">The ends read the opposite way to most bars here: <b>tight</b> ' +
        'is a hot labour market with few people looking, <b>slack</b> is a cold one. And this reading confirms a ' +
        'phase rather than calling it \u2014 unemployment is the textbook lagging indicator, usually trailing a turn ' +
        'by two to three quarters.</p>' +
      '<div class="src">' + srcHtml([
        {t:"CBO via FRED \u2014 Noncyclical Rate of Unemployment (NROU)", u:"https://fred.stlouisfed.org/series/NROU"},
        {t:"BLS via FRED \u2014 Unemployment rate, monthly since 1948 (UNRATE)", u:"https://fred.stlouisfed.org/series/UNRATE"}
      ]) + '</div>';
  }
  /* Version 490. The last band in the app to get its provenance, and the only one that is not an observation
     of where a series has sat. Every other (i) here can point at a computed percentile or a published
     estimate; this one has to say the harder thing — that the band is a TARGET, that its width is an
     editorial choice rather than a published interval, and that the needle and the target are not even
     measured on the same index. NEVER relabel this one "normal": that would turn a policy objective into a
     historical claim, and the historical claim would be false. */
  function temperatureInfoHtml(ind){
    return '<h4>' + ind.econTerm + '</h4>' +
      '<p class="caption">The reading is <b>' + (ind.tag ? ind.tag.text : "") + '</b>. The figure is headline ' +
        'consumer prices, year over year (' + ind.metricSub + '). The ends of the track are the record, and they ' +
        'are further apart than a modern reader expects: −15.8% in 1921 and +23.7% in 1920, two years apart.</p>' +
      '<p class="caption" style="margin-top:10px;"><b>1–3% is a target band, not a normal range</b> — the one ' +
        'band in this app that describes where prices <i>ought</i> to be rather than where they have been. The ' +
        'Fed publishes a point target of 2%, reaffirmed in the August 2025 revision of its Statement on ' +
        'Longer-Run Goals, and has done since January 2012. It does not publish a band. The point is the ' +
        'Fed’s; the two edges are set a point either side of it for this page, and that width is a choice, ' +
        'not a source. And the months inside it are not evidence that the band is normal — 258 of the 451 ' +
        'months this page can draw, since 1989, have sat inside 1–3%, which is a fact about how often the Fed ' +
        'has hit its target rather than about where prices naturally sit. Widen the window and the band stops ' +
        'describing anything: the ends of this same track are −15.8% and +23.7%.</p>' +
      '<p class="caption" style="margin-top:10px;">And the needle is not measured on the same index as the ' +
        'target. The Fed’s 2% is the <b>PCE</b> price index; this reading is the <b>CPI</b>, which since 2000 ' +
        'has run 0.39 points higher on average — it covers only urban out-of-pocket spending, leans harder on ' +
        'shelter, and reweights annually rather than monthly, so it catches less of the substitution people do ' +
        'when a price rises. So the gap this bar draws is a little wider than the one the Fed is acting on: ' +
        '3.4% here is nearer 3% on the Fed’s own gauge.</p>' +
      '<p class="caption" style="margin-top:10px;">The two ends are not mirror images. <b>Hot</b> erodes what ' +
        'money buys. <b>Cold</b> sounds like relief and is not: falling prices raise the real weight of every ' +
        'debt already owed and give every buyer a reason to wait, which is why a central bank aims above zero ' +
        'rather than at it.</p>' +
      '<div class="src">' + srcHtml([
        {t:"Federal Reserve — 2025 Statement on Longer-Run Goals and Monetary Policy Strategy", u:"https://www.federalreserve.gov/monetarypolicy/monetary-policy-strategy-tools-and-communications-statement-on-longer-run-goals-monetary-policy-strategy-2025.htm"},
        {t:"Cleveland Fed — The CPI versus the PCE price index", u:"https://www.clevelandfed.org/collections/infographics/2024/infogr-20241205-cpi-versus-pce-price-index"},
        {t:"BLS — Consumer Price Index, August 2026", u:"https://www.bls.gov/news.release/PDF/cpi.PDF"},
        {t:"BLS Monthly Labor Review — One hundred years of price change", u:"https://www.bls.gov/opub/mlr/2014/article/one-hundred-years-of-price-change-the-consumer-price-index-and-the-american-inflation-experience.htm"}
      ]) + '</div>';
  }
  function desireBlock(ind){
    /* Version 479, Keren: "the entire test result component in a grey stroke container like we used to have."
       TWO containers again, and the split is finally the honest one: the first is the RECORD (a control and a
       picture of a window), the second is the READING (a figure against its normal range). Version 477 folded
       them together because the bar was window-scaled and belonged to the window; now that the bar's geometry is
       fixed, it belongs to the reading, and a control sitting above something it does not govern would be a lie
       about what the control does. It restores the V384/V390 order Keren set on Pulse — history first, blood
       test below it in its own box — which this page had been the exception to for two versions.
       The chart container carries NO head: the control names the window, the trend pill names the movement, and
       the reading below names the number. The head it had was the third statement of a thing already twice said. */
    return '<div class="hist-bar" id="desire-timeline"></div>' +
      '<div class="page-chart pulsebox">' +
      histHead("desire-range") +
      '<div id="desire-record" class="vh-host"></div>' +
      '<div class="gdp-tooltip mono hist-tip" id="desire-hist-tooltip" hidden></div>' +
      /* Version 482, Keren: "the trend button above the blood test result, and both inside the history
         container." One box, read top to bottom: what window you are in, the picture, how it has moved, and
         where it stands now. The reading gives up its own border and takes a hairline instead — which is how
         the panel Keren sent separates its markers, and the right weight for a divider INSIDE a card rather
         than a second card butted against the first. */
      '<div id="desire-trend"></div>' +
      panelRow({ name:"Risk tolerance", info:desireInfoHtml(ind), head:"desire-range", metric:ind.metric,
                 flagged:meterFlagged(ind.meter), bar:panelFromMeter(ind.meter) }) +
    '</div>';
  }

  // Volume's page, the same shape Pulse's has: the container names itself and holds the reading's own record.
  function volumeBlock(ind){
    var g = m2Yoy.filter(function(x){ return x != null; });
    var hi = Math.max.apply(null, g), lo = Math.min.apply(null, g);
    // Version 388, Keren: remove the paragraph, "and put the title Money stock (M2) Steady above the metrics,
    // instead of the deleted text." So the head leaves the top of the box and lands where the prose was \u2014
    // heading the figures rather than the picture. The chart already names itself: its caption states the units
    // and the dashed line, the timeline states the window, and the red columns are visible without being counted
    // out in a sentence. What the paragraph said that the picture cannot \u2014 that those are the only
    // contractions in sixty-seven years \u2014 is in the long form behind More details.
    return '<div class="hist-bar" id="volume-timeline"></div>' +
      '<div class="page-chart pulsebox">' +
      histHead("volume-range") +
      '<div id="m2-record" class="vh-host"></div>' +
      '<div class="gdp-tooltip mono hist-tip" id="m2-hist-tooltip" hidden></div>' +
      // Version 434: these four rows were built ONCE, from the whole series, and could not follow a window.
      // They are recordRows now, rendered per draw — which also retires the last hand-written copy of that
      // component. The M2_NORM "Pace" row became a LINE on the chart, where a reading can be compared with it.
      '<div id="volume-trend"></div>' +
      // Version 485: the blood test comes inside, as the row Desire wears. The head goes with it — the row
      // carries the name now, and a container heading above a row that names itself is the third statement
      // of one thing (the V477 lesson, applied where it came from).
      panelRow({ name:ind.econTerm, info:volumeInfoHtml(ind), head:"volume-range", metric:ind.metric,
                 flagged:meterFlagged(ind.meter), bar:panelFromMeter(ind.meter) }) +
      '</div>';
  }
  function velocityRecordBlock(pulseInd){
    var hi = Math.max.apply(null, m2vHistory), lo = Math.min.apply(null, m2vHistory);
    // The head went in Version 384 (Keren: "I don't need the title 'every reading, 40 quarters from 2016',
    // because I can see it already"). She is right twice over: the timeline directly below states the window,
    // and the record rows beneath state the span. A heading that repeats its own contents is furniture.
    return '<div class="hist-bar" id="pulse-timeline"></div>' +
      '<div class="page-chart pulsebox">' +
      histHead("pulse-range") +
      '<div id="pulse-record" class="vh-host"></div>' +
      '<div class="gdp-tooltip mono hist-tip" id="pulse-hist-tooltip" hidden></div>' +
      '<div id="pulse-trend"></div>' +
      // Version 485: the blood test joins the history container, on Desire's pattern. Its end words are cut to
      // one syllable for the row — "Slow · hoarding" and "Fast · spending" are the meter's own and too long
      // for a track this narrow — and the full pair stays in the (i), where there is room to mean something.
      panelRow({ head:"pulse-range", name:pulseInd ? pulseInd.econTerm : "Velocity of money (M2)",
                 info:pulseInd ? pulseInfoHtml(pulseInd) : "", metric:pulseInd ? pulseInd.metric : "",
                 flagged:pulseInd ? meterFlagged(pulseInd.meter) : false,
                 bar:panelFromMeter(pulseInd ? pulseInd.meter : { min:0, max:1, value:0 },
                                    { low:"Slow", zone:"Pre-2008", high:"Fast" }) }) +
      '</div>';
  }

  // the data has to be right before anything draws it: FRED states both records, so assert them
  function checkVelocityHistory(){
    var hi = Math.max.apply(null, m2vHistory), lo = Math.min.apply(null, m2vHistory);
    if (m2vHistory.length !== 270 || Math.abs(hi - 2.192) > 1e-9 || Math.abs(lo - 1.126) > 1e-9)
      console.warn("m2vHistory failed its check", m2vHistory.length, hi, lo);
  }
  GYN.step("checkVelocityHistory", checkVelocityHistory, "check"); checkVelocityHistory();


  /* ---------------- Volume: how much blood there is (Version 306) ----------------
     Keren, after the haemorrhage physiology: the pulse cannot be read without the volume. A racing pulse on
     full volume is exercise; the same pulse on falling volume is shock, and the body cools even as the heart
     speeds up. The identity is the one already on the Pulse page — nominal output is the money stock times
     its velocity — so this is the other half of it, and the two sit side by side so they are never read apart.

     What the card reads is the CHANGE, not the level: a money stock of $23.2 trillion means nothing on its own,
     and grows with the economy anyway. Year over year is the reading that maps onto the metaphor — transfusion,
     steady, haemorrhage — and it is the one with a history worth drawing.

     271 quarters of FRED M2SL, 1959 Q1 to 2026 Q3, in billions. Checked on load against the two records the
     series itself sets. The most striking fact in it: in 67 years the money stock had NEVER contracted year
     over year until 2023 — five quarters, 2023 Q1 to 2024 Q1, and nothing before them. */
  var M2_FROM_YEAR = 1959;
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
  // year over year, in per cent; the first four quarters have no year behind them
  var m2Yoy = m2Level.map(function(v, i){ return i < 4 ? null : (v / m2Level[i - 4] - 1) * 100; });
  var M2_NORM = 6.80;   // mean year-over-year growth 1960–2019, 240 quarters (median 6.70)

  // Five bands on one axis, measured against that long-run pace — the same shape as valuationVerdict and
  // velocityVerdict, and vessel words, because the mark is a vessel with a level in it. Both ends are flagged:
  // a drained body and a flooded one are both emergencies, in opposite directions.
  function volumeVerdict(g){
    return g < 0     ? { text:"Draining", state:"serious" }
         : g < 3.5   ? { text:"Thin",     state:"warning" }
         : g < 10    ? { text:"Steady",   state:"good" }
         : g < 16    ? { text:"Filling",  state:"warning" }
                     : { text:"Flooding", state:"serious" };
  }

  // the record, drawn at the width it will occupy (the Version 303 rule). Columns out of zero rather than a
  // line, because the reading's whole meaning is which side of zero it is on.
  /* Growth's own history (Version 371, Keren: "change the main container to be yearly history like the rest of
     the app"). The app's rule has been that drawGrowth() must not be rewritten because the Calendar's cycle view
     shares it \u2014 so this does not rewrite it. It is a SECOND chart, on the inner page only; the cycle card stays
     exactly as it is, still reachable from the timeline's "This cycle" stop and still borrowed by the Calendar.
     Build alongside, never mutate what is shared.
     Quarterly year-over-year from 1988 \u2014 39 years, so 10Y, 25Y and Max all answer. Columns out of zero rather
     than a line, because expanding or contracting is the reading; `.m2-col`/`.drain` because Volume's columns
     already mean exactly this (a quantity in the brand plum, a contraction in the one red) and a second class
     saying the same thing is how two charts start disagreeing. */
  /* Temperature's own history (Version 373, Keren: "add a year bar to the temperature history"). Built the way
     Growth's was in Version 371 and for the same reason: drawTemperature() is cycle-scoped and shared with the
     Calendar's cycle view, so it is not rewritten \u2014 this is a SECOND chart, on the inner page only, and the
     cycle card stays exactly as it is. Build alongside, never mutate what is shared.
     Monthly year-over-year from 1989 \u2014 38 years, so 5Y, 10Y, 25Y and Max all answer and 50Y does not.
     Columns out of zero with the 2% target as the dashed reference, because on this page the reading is distance
     from target. Version 373 drew them in the plum Volume and Growth use, on the argument that one shape should
     wear one colour; Version 378 reverses that at Keren's word ("you dropped the orange-yellow spectrum \u2014 it
     needs to look like a heat map"), and she is right. Consistency of SHAPE does not outrank the identity of the
     reading: this page is Temperature, its ramp is what makes it legible at a glance, and a sequential ramp is the
     correct encoding for a magnitude anyway. It uses `heatStep()` and `.temp-col.s0\u2013s5` \u2014 the same function and
     the same classes as the cycle chart, so the two views of the same series can never disagree about a colour. */
  /* Version 498, Keren (downloading the series herself): the unemployment rate, monthly, seasonally adjusted,
     from January 1948 — 944 months, the deepest record any chart in this app draws. It confirms rather than
     changes what this page already said: 2.5% in May 1953, 14.8% in April 2020, 4.1% in August 2026.
     ONE GAP, kept as a gap. October 2025 has no reading — not a transcription slip, the month BLS did not
     publish — so it is encoded "x", drawn as nothing and left out of every average. Joining the picture across
     it would be the app inventing a figure for a month the government did not measure. */
  var UNEMP_FROM_YEAR = 1948;
  var unempHistory = (
    "3.4 3.8 4.0 3.9 3.5 3.6 3.6 3.9 3.8 3.7 3.8 4.0 4.3 4.7 5.0 5.3 6.1 6.2 6.7 6.8 6.6 7.9 6.4 6.6 6.5 6.4 6.3 5.8 5.5 5.4 5.0 4.5 4.4 4.2 4.2 4.3 3.7 3.4 3.4 3.1 3.0 3.2 3.1 3.1 3.3 3.5 3.5 3.1 3.2 3.1 2.9 2.9 3.0 3.0 3.2 3.4 3.1 3.0 2.8 2.7 2.9 2.6 2.6 2.7 2.5 2.5 2.6 2.7 2.9 3.1 3.5 4.5 4.9 5.2 5.7 5.9 5.9 5.6 5.8 6.0 6.1 5.7 5.3 5.0 4.9 4.7 4.6 4.7 4.3 4.2 4.0 4.2 4.1 4.3 4.2 4.2 4.0 3.9 4.2 4.0 4.3 4.3 4.4 4.1 3.9 3.9 4.3 4.2 4.2 3.9 3.7 3.9 4.1 4.3 4.2 4.1 4.4 4.5 5.1 5.2 5.8 6.4 6.7 7.4 7.4 7.3 7.5 7.4 7.1 6.7 6.2 6.2 6.0 5.9 5.6 5.2 5.1 5.0 5.1 5.2 5.5 5.7 5.8 5.3 5.2 4.8 5.4 5.2 5.1 5.4 5.5 5.6 5.5 6.1 6.1 6.6 6.6 6.9 6.9 7.0 7.1 6.9 7.0 6.6 6.7 6.5 6.1 6.0 5.8 5.5 5.6 5.6 5.5 5.5 5.4 5.7 5.6 5.4 5.7 5.5 5.7 5.9 5.7 5.7 5.9 5.6 5.6 5.4 5.5 5.5 5.7 5.5 5.6 5.4 5.4 5.3 5.1 5.2 4.9 5.0 5.1 5.1 4.8 5.0 4.9 5.1 4.7 4.8 4.6 4.6 4.4 4.4 4.3 4.2 4.1 4.0 4.0 3.8 3.8 3.8 3.9 3.8 3.8 3.8 3.7 3.7 3.6 3.8 3.9 3.8 3.8 3.8 3.8 3.9 3.8 3.8 3.8 4.0 3.9 3.8 3.7 3.8 3.7 3.5 3.5 3.7 3.7 3.5 3.4 3.4 3.4 3.4 3.4 3.4 3.4 3.4 3.4 3.5 3.5 3.5 3.7 3.7 3.5 3.5 3.9 4.2 4.4 4.6 4.8 4.9 5.0 5.1 5.4 5.5 5.9 6.1 5.9 5.9 6.0 5.9 5.9 5.9 6.0 6.1 6.0 5.8 6.0 6.0 5.8 5.7 5.8 5.7 5.7 5.7 5.6 5.6 5.5 5.6 5.3 5.2 4.9 5.0 4.9 5.0 4.9 4.9 4.8 4.8 4.8 4.6 4.8 4.9 5.1 5.2 5.1 5.1 5.1 5.4 5.5 5.5 5.9 6.0 6.6 7.2 8.1 8.1 8.6 8.8 9.0 8.8 8.6 8.4 8.4 8.4 8.3 8.2 7.9 7.7 7.6 7.7 7.4 7.6 7.8 7.8 7.6 7.7 7.8 7.8 7.5 7.6 7.4 7.2 7.0 7.2 6.9 7.0 6.8 6.8 6.8 6.4 6.4 6.3 6.3 6.1 6.0 5.9 6.2 5.9 6.0 5.8 5.9 6.0 5.9 5.9 5.8 5.8 5.6 5.7 5.7 6.0 5.9 6.0 5.9 6.0 6.3 6.3 6.3 6.9 7.5 7.6 7.8 7.7 7.5 7.5 7.5 7.2 7.5 7.4 7.4 7.2 7.5 7.5 7.2 7.4 7.6 7.9 8.3 8.5 8.6 8.9 9.0 9.3 9.4 9.6 9.8 9.8 10.1 10.4 10.8 10.8 10.4 10.4 10.3 10.2 10.1 10.1 9.4 9.5 9.2 8.8 8.5 8.3 8.0 7.8 7.8 7.7 7.4 7.2 7.5 7.5 7.3 7.4 7.2 7.3 7.3 7.2 7.2 7.3 7.2 7.4 7.4 7.1 7.1 7.1 7.0 7.0 6.7 7.2 7.2 7.1 7.2 7.2 7.0 6.9 7.0 7.0 6.9 6.6 6.6 6.6 6.6 6.3 6.3 6.2 6.1 6.0 5.9 6.0 5.8 5.7 5.7 5.7 5.7 5.4 5.6 5.4 5.4 5.6 5.4 5.4 5.3 5.3 5.4 5.2 5.0 5.2 5.2 5.3 5.2 5.2 5.3 5.3 5.4 5.4 5.4 5.3 5.2 5.4 5.4 5.2 5.5 5.7 5.9 5.9 6.2 6.3 6.4 6.6 6.8 6.7 6.9 6.9 6.8 6.9 6.9 7.0 7.0 7.3 7.3 7.4 7.4 7.4 7.6 7.8 7.7 7.6 7.6 7.3 7.4 7.4 7.3 7.1 7.0 7.1 7.1 7.0 6.9 6.8 6.7 6.8 6.6 6.5 6.6 6.6 6.5 6.4 6.1 6.1 6.1 6.0 5.9 5.8 5.6 5.5 5.6 5.4 5.4 5.8 5.6 5.6 5.7 5.7 5.6 5.5 5.6 5.6 5.6 5.5 5.5 5.6 5.6 5.3 5.5 5.1 5.2 5.2 5.4 5.4 5.3 5.2 5.2 5.1 4.9 5.0 4.9 4.8 4.9 4.7 4.6 4.7 4.6 4.6 4.7 4.3 4.4 4.5 4.5 4.5 4.6 4.5 4.4 4.4 4.3 4.4 4.2 4.3 4.2 4.3 4.3 4.2 4.2 4.1 4.1 4.0 4.0 4.1 4.0 3.8 4.0 4.0 4.0 4.1 3.9 3.9 3.9 3.9 4.2 4.2 4.3 4.4 4.3 4.5 4.6 4.9 5.0 5.3 5.5 5.7 5.7 5.7 5.7 5.9 5.8 5.8 5.8 5.7 5.7 5.7 5.9 6.0 5.8 5.9 5.9 6.0 6.1 6.3 6.2 6.1 6.1 6.0 5.8 5.7 5.7 5.6 5.8 5.6 5.6 5.6 5.5 5.4 5.4 5.5 5.4 5.4 5.3 5.4 5.2 5.2 5.1 5.0 5.0 4.9 5.0 5.0 5.0 4.9 4.7 4.8 4.7 4.7 4.6 4.6 4.7 4.7 4.5 4.4 4.5 4.4 4.6 4.5 4.4 4.5 4.4 4.6 4.7 4.6 4.7 4.7 4.7 5.0 5.0 4.9 5.1 5.0 5.4 5.6 5.8 6.1 6.1 6.5 6.8 7.3 7.8 8.3 8.7 9.0 9.4 9.5 9.5 9.6 9.8 10.0 9.9 9.9 9.8 9.8 9.9 9.9 9.6 9.4 9.4 9.5 9.5 9.4 9.8 9.3 9.1 9.0 9.0 9.1 9.0 9.1 9.0 9.0 9.0 8.8 8.6 8.5 8.3 8.3 8.2 8.2 8.2 8.2 8.2 8.1 7.8 7.8 7.7 7.9 8.0 7.7 7.5 7.6 7.5 7.5 7.3 7.2 7.2 7.2 6.9 6.7 6.6 6.7 6.7 6.2 6.3 6.1 6.2 6.1 5.9 5.7 5.8 5.6 5.7 5.5 5.4 5.4 5.6 5.3 5.2 5.1 5.0 5.0 5.1 5.0 4.8 4.9 5.0 5.1 4.8 4.9 4.8 4.9 5.0 4.9 4.7 4.7 4.7 4.6 4.4 4.4 4.4 4.3 4.3 4.4 4.3 4.2 4.2 4.1 4.0 4.1 4.0 4.0 3.8 4.0 3.8 3.8 3.7 3.8 3.8 3.9 4.0 3.8 3.8 3.7 3.6 3.6 3.7 3.6 3.5 3.6 3.6 3.6 3.6 3.5 4.4 14.8 13.2 11.0 10.2 8.4 7.8 6.9 6.7 6.7 6.4 6.2 6.1 6.1 5.8 5.9 5.4 5.1 4.7 4.5 4.1 3.9 4.0 3.9 3.7 3.7 3.6 3.6 3.5 3.6 3.5 3.6 3.6 3.5 3.5 3.6 3.5 3.4 3.6 3.6 3.5 3.7 3.7 3.9 3.7 3.8 3.7 3.9 3.9 3.9 3.9 4.1 4.2 4.2 4.1 4.1 4.2 4.1 4.0 4.2 4.2 4.2 4.3 4.1 4.3 4.3 4.4 x 4.5 4.4 4.3 4.4 4.3 4.3 4.3 4.2 4.1 4.1"
  ).split(" ").map(function(t, i){
    var y = UNEMP_FROM_YEAR + ((i / 12) | 0), mo = (i % 12) + 1;
    return { m:y + "-" + ("0" + mo).slice(-2), v:(t === "x" ? null : Number(t)) };
  });
  function checkUnemploymentHistory(){   // the data has to be right before anything draws it (the V305 rule)
    var vs = unempHistory.filter(function(d){ return d.v != null; }).map(function(d){ return d.v; });
    var hi = Math.max.apply(null, vs), lo = Math.min.apply(null, vs);
    if (unempHistory.length !== 944 || Math.abs(hi - 14.8) > 1e-9 || Math.abs(lo - 2.5) > 1e-9 ||
        unempHistory[0].m !== "1948-01" || unempHistory[unempHistory.length - 1].m !== "2026-08")
      console.warn("unempHistory failed its check", unempHistory.length, lo, hi,
                   unempHistory[0].m, unempHistory[unempHistory.length - 1].m);
  }
  GYN.step("checkUnemploymentHistory", checkUnemploymentHistory, "check"); checkUnemploymentHistory();
  /* Version 498: Activity's history. Modelled on cpiHistoryChart part for part — same window handling, same
     axis emitter, same fit group, same geometry object — because they draw the same PICTURE: a monthly series
     in columns out of zero, with the window's average and one reference line. They are not the same READING,
     which is why this is its own function rather than a flag on that one: prices are read against a target,
     people against a band, and the scale, the colours and the references all differ. Folding two subjects into
     one function behind flags is how a component stops being readable. */
  var NROU_NOW = 4.2;   // CBO's noncyclical rate of unemployment — the figure Activity's band is bracketed around
  function unempState(v){
    return v < ACT_BAND_LO ? "tight"
         : v <= ACT_BAND_HI ? "good"
         : v < 6.5 ? "warning"
         : v < 8.5 ? "serious" : "critical";
  }
  function unempHistoryChart(Wpx, from, o){
    o = o || {}; lastChartAvg = null;
    var W = Math.max(270, Math.round(Wpx || 360));
    var narrow = W < 430;
    var H = narrow ? 268 : 300, L = AXIS.L, R = W - AXIS.R, T = AXIS.T + AXIS.LEG + AXIS.READ, B = H - 17 - AXIS.FOOT;   // LEG: the legend strip at the frame's head (V556/V557); 17 is the x label's drop, FOOT what follows it (V573)
    from = from || 0;
    var vals = unempHistory.slice(from, o.to == null ? undefined : o.to), n = vals.length;
    if (!n) return "";
    var seen = vals.filter(function(d){ return d.v != null; });
    if (!seen.length) return "";
    var y0 = parseInt(vals[0].m.slice(0, 4), 10), y1 = parseInt(vals[n - 1].m.slice(0, 4), 10);
    // zero and CBO's estimate are always in view: the columns stand on zero and the band is drawn around 4.2
    var sc = windowScale(seen.map(function(d){ return d.v; }), [0, NROU_NOW]);
    var LO = sc.lo, HI = sc.hi;
    var halfCol = (R - L) / (2 * Math.max(1, n));
    var X = function(i){ return L + halfCol + (R - L - 2 * halfCol) * i / Math.max(1, n - 1); };
    var Y = function(v){ return B - (B - T) * (v - LO) / (HI - LO); };
    var f = function(v){ return v.toFixed(1); };
    var out = [], zero = Y(0);
    out.push(chartAxes({ ticks:sc.ticks, y:Y, x0:L, x1:R, base:(LO <= 0 && HI >= 0 ? Y(0) : B), noGridAt:0, top:(T - AXIS.LEG - AXIS.READ), bot:B,
      fmt:function(g){ return (Math.round(g) === g ? g : g.toFixed(1)) + "%"; } }));
    if (o.cycle){
      var spanY = y1 - y0 + 1, stepY = Math.max(1, Math.ceil(spanY / (narrow ? 4 : 6)));
      for (var cyr = y0; cyr <= y1; cyr += stepY){
        var cix = (cyr - y0) * 12; if (cix >= n) break;
        out.unshift(vGrid(X(cix), T, B));
        out.push('<text class="bt-xl" x="' + f(X(cix)) + '" y="' + (B + 17) + '" text-anchor="middle">' + cyr + '</text>');
      }
    } else windowYears(y0, y1, narrow ? 4 : 5).forEach(function(yr){
      var i = (yr - y0) * 12; if (i < 0 || i >= n) return;
      out.unshift(vGrid(X(i), T, B));
      out.push('<text class="bt-xl" x="' + f(X(i)) + '" y="' + (B + 17) + '" text-anchor="middle">' + yr + '</text>');
    });
    var sw = colWidth((R - L) / n);
    vals.forEach(function(d, i){
      // October 2025 gets no column. A gap is the honest drawing of a month nobody measured; the alternative is
      // a bar standing for a number that does not exist.
      if (d.v == null) return;
      out.push('<path class="unemp-col hcol ' + unempState(d.v) + '" stroke-width="' + sw.toFixed(2) +
        '" d="M' + f(X(i)) + ',' + f(zero) + 'L' + f(X(i)) + ',' + f(Y(d.v)) + '"/>');
    });
    var avgV = seen.reduce(function(a, d){ return a + d.v; }, 0) / seen.length;
    out.push('<path class="temp-avg" d="M' + L + ',' + f(Y(avgV)) + 'L' + R + ',' + f(Y(avgV)) + '"/>');
    lastChartAvg = avgV;
    var tfit = trendOf(seen.map(function(d){ return d.v; }), "points", "month").fit;
    if (tfit && tfit.n > 1)
      out.push(fitGroup({ fit:tfit, fmt:function(v){ return v.toFixed(1) + "%"; } }, X(0), X(n - 1), Y, R, L, 0));
    /* V571: the zero rule spans the FRAME, not just the plot. Keren: "there's no line below 0% — I understand
       there's a dashed line at the same level, so maybe just continue the dashed line, but don't leave the
       zero without a line similar to the other numbers." Every other number in the rail has its gridline
       running past it; zero's did not, because zero's rule is drawn by the chart rather than by chartAxes and
       it was drawn to the plot's own width. */
    out.push('<path class="m2-zero" d="M' + (L - AXIS.L) + ',' + f(zero) + 'H' + (R + AXIS.R) + '"/>');
    out.push('<path class="vh-mean" d="M' + L + ',' + f(Y(NROU_NOW)) + 'H' + R + '"/>');
    out.push('<line class="hist-cross" x1="0" x2="0" y1="' + T + '" y2="' + B + '"/>');
    out.push('<rect class="temp-hist-hit" x="' + L + '" y="' + T + '" width="' + (R - L) + '" height="' + (B - T) + '" fill="transparent"/>');
    lastHistGeom = { L:X(0), R:X(n - 1), T:T, B:B, W:W, n:n, vals:vals, at:atMonth,
                     refs:[{ label:"Average", v:avgV },
                           { label:"CBO estimate", v:NROU_NOW, dash:true }],
                     fmt:function(v){ return v.toFixed(1) + "%"; } };
    return '<svg class="vh-svg" viewBox="0 0 ' + W + ' ' + H + '" role="img" ' +
      'aria-label="The unemployment rate, every month from ' + y0 + ' to ' + y1 +
      ', against the 3.5 to 5 per cent band and CBO\u2019s estimate of the noncyclical rate">' + out.join("") + '</svg>';
  }
  // V498: the band's edges, named once — the meter, the chart's colouring and the (i) all read these
  var ACT_BAND_LO = 3.5, ACT_BAND_HI = 5;
  var CPI_TARGET = 2;
  // A quarter's name from its position in a series that starts at `y0` — the three histories holding bare
  // numbers rather than {q,v} objects need this to label what the pointer is on (Version 407).
  function qAtIndex(y0, i){ return (y0 + Math.floor(i / 4)) + " Q" + (i % 4 + 1); }
  var lastHistGeom = null;   // the geometry of whichever history just drew; the renderer hands it to its host
  /* Version 417's five-cycle overlay lived here and was removed in Version 420 (Keren: "not multiple select,
     because I want the same visuals as the years \u2014 the bars with the colouring the same"). She is right that two
     drawings of one metric on one page is a worse problem than the comparison was a gain: the overlay had to be
     grey lines precisely BECAUSE it drew five cycles at once, so it could not carry the heat ramp that is how this
     page says hot and cold everywhere else. One cycle at a time keeps the ramp, and the cycle picker becomes what
     the ruler is in Years mode \u2014 a way of choosing the window, drawn identically either way. The overlay is in
     Version 417's source if it is ever wanted back. ---- */
  /* ---- Version 431: the reference key, shared (the rollout, stage one) ----
     Temperature grew an average line and a two-line key set in whitespace over Versions 421\u2013428. Seven other
     histories need the same thing, so it is ONE function before it is seven copies \u2014 the Version 399 rule, which
     this app has paid for twice. The caller passes its own scales and its own reference line; everything about
     WHERE the key goes is decided here.
     Whitespace is found rather than chosen: for every candidate x the scan takes the tallest column in that
     stretch, which is the floor of the empty band above it, and keeps the candidate whose box can sit nearest the
     average while staying inside that band. A --surface plate goes behind it regardless, so a window with no clear
     stretch is still legible rather than lost in the bars. ---- */

  /* Load's history (Version 460). Two series, ONE axis, because both are shares of disposable personal
     income \u2014 which is what makes this a legitimate two-line chart rather than the dual-axis picture that is
     never allowed: the reader compares them directly, on the same ruler, with no arithmetic to do.
     Zero is forced into the scale. What is kept runs close to it, and a window cropped to the data would
     make 2.8% look like a middling reading instead of a floor. */
  function householdsChart(Wpx, from, to){
    var W = Math.max(270, Math.round(Wpx || 360));
    var narrow = W < 430;
    var H = narrow ? 268 : 300, L = AXIS.L, R = W - AXIS.R, T = AXIS.T + AXIS.LEG + AXIS.READ, B = H - 17 - AXIS.FOOT;   // LEG: the legend strip at the frame's head (V556/V557); 17 is the x label's drop, FOOT what follows it (V573)
    from = from || 0;
    var hi = to == null ? dsrHistory.length : to;
    var bill = dsrHistory.slice(from, hi);
    var kept = savHistory.slice(SAV_OFFSET + from, SAV_OFFSET + hi);
    var n = bill.length;
    var sc = windowScale(bill.concat(kept), [0]);
    // V574: the 22% this chart borrowed in V566 goes back — AXIS.READ reserves the plate's band on every
    // history now, so no chart has to buy its own headroom
    var LO = sc.lo, HI = sc.hi;
    var X = function(i){ var h = (R - L) / (2 * Math.max(1, n));   // V567: half a slot in at each end, so a
      return L + h + (R - L - 2 * h) * i / Math.max(1, n - 1); };  // mark can never cross the rail or the frame
    var Y = function(v){ return B - (B - T) * (v - LO) / (HI - LO); };
    var f = function(v){ return v.toFixed(1); };
    var out = [];
    var y0 = DSR_FROM_YEAR + Math.floor(from / 4);
    var y1 = DSR_FROM_YEAR + Math.floor((hi - 1) / 4);
    out.push(chartAxes({ ticks:sc.ticks, y:Y, x0:L, x1:R, base:B, top:(T - AXIS.LEG - AXIS.READ), bot:B,
      fmt:function(g){ return g.toFixed(0) + "%"; } }));
    windowYears(y0, y1, narrow ? 4 : 5).forEach(function(yr){
      var i = (yr - DSR_FROM_YEAR) * 4 - from; if (i < 0 || i >= n) return;
      out.unshift(vGrid(X(i), T, B));
      out.push('<text class="bt-xl" x="' + f(X(i)) + '" y="' + (B + 17) + '" text-anchor="middle">' + yr + '</text>');
    });
    out.push('<line class="hist-cross" x1="0" x2="0" y1="' + T + '" y2="' + B + '"/>');
    function line(ser, cls){
      return '<path class="' + cls + '" d="' + ser.map(function(v, i){
        return (i ? "L" : "M") + f(X(i)) + "," + f(Y(v)); }).join("") + '"/>';
    }
    /* Version 500: paired columns, one pair per quarter. They share a scale and a zero because they are two
       shares of the SAME income \u2014 what is paid out and what is kept \u2014 which is the condition that makes two
       series on one bar chart honest rather than a collision. The pair is wrapped in a single `<g class="hcol">`
       so the shared hover still lights exactly one thing per index; the readout already names both figures. */
    var hhSlot = (R - L) / Math.max(1, n);
    // V523: a PAIR per slot, so each bar takes half the app's column fill rather than a literal of its own
    var hhSw = colWidth(hhSlot / 2), hhOff = Math.max(0.7, hhSw * 0.62);   // a PAIR per slot, so each takes half a slot
    bill.forEach(function(v, i){
      var cx = X(i);
      out.push('<g class="hcol">' +
        '<path class="hh-col bill" stroke-width="' + hhSw.toFixed(2) + '" d="M' + f(cx - hhOff) + ',' + f(Y(0)) +
          'L' + f(cx - hhOff) + ',' + f(Y(v)) + '"/>' +
        '<path class="hh-col kept" stroke-width="' + hhSw.toFixed(2) + '" d="M' + f(cx + hhOff) + ',' + f(Y(0)) +
          'L' + f(cx + hhOff) + ',' + f(Y(kept[i])) + '"/>' +
      '</g>');
    });
    /* Version 567: the two series are named by the shared legend at the head of the grid, like every other
       history's references. This was the last chart still carrying the old floating inline key — the plate
       that hunted for a clear band inside the plot — which is exactly what the legend replaced in Version 556,
       and Keren caught it: "in the household history chart the legend is not in the location that we agreed
       on." One legend, one place, every page. The key's own function went with it. */
    // V500: the two "now" dots went with the lines \u2014 they marked where a line ended, and a column ends at
    // its own tip. The last pair is the rightmost pair, which is as findable as a dot was.
    /* The readout names both lines. `at` is evaluated before `fmt` in the tooltip's single expression, so it
       hands the index across \u2014 the same left-to-right guarantee the deferred Highlights rely on. A tooltip
       that named one of two lines would be answering half the question the chart asks. */
    var hovAt = 0;
    lastHistGeom = { L:L, R:R, T:T, B:B, W:W, n:n,
      // neither carries a value: these name the two SERIES, not a line the reader measures against
      refs:[{ label:"Paid out on debt", cls:"hh-bill" }, { label:"Kept as saving", cls:"hh-kept" }],
      at:function(d, i){ hovAt = i; return qAtIndex(DSR_FROM_YEAR, from + i); },
      fmt:function(v){ return v.toFixed(1) + "% out \u00b7 " + kept[hovAt].toFixed(1) + "% kept"; },
      vals:bill.map(function(v){ return { v:v }; }) };
    return '<svg class="hist-svg vh-svg" viewBox="0 0 ' + W + ' ' + H + '" role="img" ' +
      'aria-label="Household debt service and the personal saving rate, both as a share of disposable ' +
      'income, every quarter from ' + y0 + ' to ' + y1 + '">' + out.join("") + '</svg>';
  }

  var lastChartAvg = null;   // Version 427: what the key under the chart prints, set by the drawing that owns it
  function cpiHistoryChart(Wpx, from, o){
    o = o || {}; lastChartAvg = null;
    var W = Math.max(270, Math.round(Wpx || 360));
    var narrow = W < 430;
    var H = narrow ? 268 : 300, L = AXIS.L, R = W - AXIS.R, T = AXIS.T + AXIS.LEG + AXIS.READ, B = H - 17 - AXIS.FOOT;   // LEG: the legend strip at the frame's head (V556/V557); 17 is the x label's drop, FOOT what follows it (V573)
    from = from || 0;
    var vals = cpiYoYHistory.slice(from, o.to == null ? undefined : o.to), n = vals.length;
    if (!n) return "";
    var y0 = parseInt(vals[0].m.slice(0, 4), 10), y1 = parseInt(vals[n - 1].m.slice(0, 4), 10);
    // zero and the 2% target are always in view: above or below target is the reading, and a month below zero is
    // a different animal again (the Version 358 rule).
    var sc = windowScale(vals.map(function(d){ return d.v; }), [0, CPI_TARGET]);
    var LO = sc.lo, HI = sc.hi;
    /* Version 443, Keren: "in the growth chart the bars are hiding the numbers of the rows." An x-scale
       running L→R puts the first and last columns' CENTRES on the plot edges, so half of each hangs outside
       the box — over the y-axis labels on the left and past the plot on the right. It survived unnoticed while
       the chart was 280px wide and the columns were thin; at 335px (Version 441) each column is wider and the
       overhang sits squarely on the "%" of every label. Half a column of inset at each end puts every mark
       inside the plot, which is also what lets a frame close around it. The LINE charts keep the old scale,
       because a line has no width to hang over anything and should reach both edges. */
    var halfCol = (R - L) / (2 * Math.max(1, n));
    var X = function(i){ return L + halfCol + (R - L - 2 * halfCol) * i / Math.max(1, n - 1); };
    var Y = function(v){ return B - (B - T) * (v - LO) / (HI - LO); };
    var f = function(v){ return v.toFixed(1); };
    var out = [], zero = Y(0), avgShown = null;   // V427: the average's value, reported to the key under the chart
    out.push(chartAxes({ ticks:sc.ticks, y:Y, x0:L, x1:R, base:(LO <= 0 && HI >= 0 ? Y(0) : B), noGridAt:0, top:(T - AXIS.LEG - AXIS.READ), bot:B,
      fmt:function(g){ return (Math.round(g) === g ? g : g.toFixed(1)) + "%"; } }));
    // Version 423: a cycle picks its own years rather than borrowing windowYears(), which chooses ROUND ones and
    // gave the ten-year Big Tech cycle exactly two labels, 2010 and 2015, with neither end of the cycle shown. Here
    // the span IS a cycle, so the axis starts on the year it started and steps evenly to the year it ended.
    if (o.cycle){
      var spanY = y1 - y0 + 1, stepY = Math.max(1, Math.ceil(spanY / (narrow ? 4 : 6)));
      for (var cyr = y0; cyr <= y1; cyr += stepY){
        var cix = (cyr - y0) * 12; if (cix >= n) break;
        out.unshift(vGrid(X(cix), T, B));
        out.push('<text class="bt-xl" x="' + f(X(cix)) + '" y="' + (B + 17) + '" text-anchor="middle">' + cyr + '</text>');
      }
    } else windowYears(y0, y1, narrow ? 4 : 5).forEach(function(yr){
      var i = (yr - y0) * 12; if (i < 0 || i >= n) return;
      out.unshift(vGrid(X(i), T, B));
      out.push('<text class="bt-xl" x="' + f(X(i)) + '" y="' + (B + 17) + '" text-anchor="middle">' + yr + '</text>');
    });
    var sw = colWidth((R - L) / n);
    vals.forEach(function(d, i){
      out.push('<path class="temp-col hcol ' + heatStep(d.v) + '" stroke-width="' + sw.toFixed(2) +
        '" d="M' + f(X(i)) + ',' + f(zero) + 'L' + f(X(i)) + ',' + f(Y(d.v)) + '"/>');
    });
    // Version 421, Keren: "now that we have a cycle-based viewpoint we can take the average CPI by cycle and put it
    // as a line \u2014 and make it so I can also view the number." The convention is the app's OWN and is reused down to
    // the class names rather than reinvented: drawTemperature has drawn exactly this since Version 260 \u2014 one
    // saturated accent line, its value on a --surface plate set in the clearest stretch of the run, so that every
    // column is read as above it or below it. Reusing .temp-avg / .temp-avg-label also means the trend toggle dims
    // it for free, because `.trend-on .temp-avg` was written for the other chart and does not care which drew it.
    // Cycle mode only: in Years mode "the average" would be the window's, which is a different claim and would sit
    // on the page arguing with the ten-year average in the record rows.
    // Version 423, Keren: "make all the data relevant to the chosen timeline." The average is the window's, in
    // every window \u2014 which is also what let the ten-year average row go: the number lives on the chart now, where
    // it can never describe a stretch the picture does not show.
    if (n){
      var avgV = vals.reduce(function(a, d){ return a + d.v; }, 0) / n, avgY = Y(avgV);
      out.push('<path class="temp-avg" d="M' + L + ',' + f(avgY) + 'L' + R + ',' + f(avgY) + '"/>');
      lastChartAvg = avgV;
      avgShown = avgV;   // Version 427: the value moved to the key under the chart, so no plate is drawn here
    }
    // Version 402: the fit across the months in view, drawn always and shown only while the pill is pressed —
    // the Version 276 arrangement, now reaching the pages that had a trend they could read but not see.
    var tfit = trendOf(vals.map(function(d){ return d.v; }), "points", "month").fit;
    if (tfit && tfit.n > 1)
      out.push(fitGroup({ fit:tfit, fmt:function(v){ return v.toFixed(1) + "%"; } }, X(0), X(n - 1), Y, R, L, 0));
    out.push('<path class="m2-zero" d="M' + (L - AXIS.L) + ',' + f(zero) + 'H' + (R + AXIS.R) + '"/>');
    out.push('<path class="vh-mean" d="M' + L + ',' + f(Y(CPI_TARGET)) + 'H' + R + '"/>');
    // Version 427: the target's own label moved to the key under the chart with the average's.
    // one transparent plate over the plot rather than 451 hit targets: at Max a column is 1.4px wide, which is
    // not a thing anyone can point at, so the nearest column is computed from the pointer instead
    out.push('<line class="hist-cross" x1="0" x2="0" y1="' + T + '" y2="' + B + '"/>');
    out.push('<rect class="temp-hist-hit" x="' + L + '" y="' + T + '" width="' + (R - L) + '" height="' + (B - T) + '" fill="transparent"/>');
    lastHistGeom = { L:X(0), R:X(n - 1), T:T, B:B, W:W, n:n, vals:vals, at:atMonth,
                     refs:[{ label:"Average", v:lastChartAvg },
                           { label:"Fed target", v:CPI_TARGET, dash:true }],
                     fmt:function(v){ return v.toFixed(1) + "%"; } };
    return '<svg class="vh-svg" viewBox="0 0 ' + W + ' ' + H + '" role="img" ' +
      'aria-label="Consumer prices year over year, every month from ' + y0 + ' to ' + y1 +
      ', against the 2 per cent target, shaded from cool to hot">' + out.join("") + '</svg>';
  }

  var GDP_NORM = 2.6;   // the mean of every quarter 1988\u20132026, stated to one place
  /* Version 492, Keren: "the growth history doesn't have a blood test component." It had none because there is
     no published normal range for how fast an economy grows \u2014 so the band is COMPUTED from this page's own
     series, which is Volume's construction (V485) and the only honest one available: the 10th to 90th
     percentile of the 154 quarters from 1988 Q1, 0.96% and 4.34%, rounded to a tenth. The ends of the track
     are the record itself, and both ends are one event: \u22127.4% in 2020 Q2 and +12.4% in 2021 Q2. */
  var GDP_BAND_LO = 1.0, GDP_BAND_HI = 4.3;
  var gdpNowQ = gdpQuarterlyYoY[gdpQuarterlyYoY.length - 1];
  var gdpMeter = { min:-7.4, max:12.4, value:gdpNowQ.v,
                   optimal:{ from:GDP_BAND_LO, to:GDP_BAND_HI, label:GDP_BAND_LO.toFixed(1) + "\u2013" + GDP_BAND_HI.toFixed(1) + "%" },
                   ends:{ low:"Contracting", high:"Booming" } };
  function growthInfoHtml(){
    return '<h4>Real GDP growth</h4>' +
      '<p class="caption">The figure is real gross domestic product against the same quarter a year earlier ' +
        '(' + gdpNowQ.q + '), so it is already adjusted for inflation \u2014 this is output, not prices. The ends of ' +
        'the track are the record and they are the same event twice: \u22127.4% in 2020 Q2, the deepest quarter of ' +
        'the pandemic shutdown, and +12.4% a year later, which is that collapse being measured against itself.</p>' +
      '<p class="caption" style="margin-top:10px;"><b>The 1.0\u20134.3% band is computed from this page\u2019s own ' +
        'series, not chosen</b>: across the 154 quarters since 1988 the tenth and ninetieth percentiles fall at ' +
        '0.96% and 4.34%. So roughly four quarters in five have sat inside it, and each end is what unusual looks ' +
        'like in that direction. There is no official normal rate of growth to point at instead, which is why it ' +
        'is drawn this way and said so.</p>' +
      '<p class="caption" style="margin-top:10px;">Two other lines matter more than the edges. The dashed line on ' +
        'the chart is this series\u2019 own long-run average, <b>' + GDP_NORM + '%</b> \u2014 the middle of the record ' +
        'rather than the edge of it, and the honest answer to "is this quick or slow". And the CBO puts the ' +
        'economy\u2019s <b>potential</b> growth \u2014 what it can sustain without overheating \u2014 at 2.1% a year through ' +
        '2030, easing to 1.8% after that as the population ages. Today\u2019s reading sits inside the band, below the ' +
        'long-run average, and almost exactly at potential: the economy is growing about as fast as it can.</p>' +
      '<div class="src">' + srcHtml([
        {t:"BEA \u2014 Gross Domestic Product", u:"https://www.bea.gov/data/gdp/gross-domestic-product"},
        {t:"CBO \u2014 The Budget and Economic Outlook: 2026 to 2036", u:"https://www.cbo.gov/publication/62105"}
      ]) + '</div>';
  }
  function gdpHistoryChart(Wpx, from, o){
    o = o || {}; lastChartAvg = null;
    var W = Math.max(270, Math.round(Wpx || 360));
    var narrow = W < 430;
    var H = narrow ? 268 : 300, L = AXIS.L, R = W - AXIS.R, T = AXIS.T + AXIS.LEG + AXIS.READ, B = H - 17 - AXIS.FOOT;   // LEG: the legend strip at the frame's head (V556/V557); 17 is the x label's drop, FOOT what follows it (V573)
    from = from || 0;
    var vals = gdpQuarterlyYoY.slice(from, o.to == null ? undefined : o.to), n = vals.length;
    if (!n) return "";
    var y0 = parseInt(vals[0].q.slice(0, 4), 10), y1 = parseInt(vals[n - 1].q.slice(0, 4), 10);
    // zero and the long-run norm are always in view: which side of zero a quarter falls on is the reading, and the
    // norm is what "quick" and "slow" are measured against (the Version 358 rule).
    var sc = windowScale(vals.map(function(d){ return d.v; }), [0, GDP_NORM]);
    var LO = sc.lo, HI = sc.hi;
    /* Version 443, Keren: "in the growth chart the bars are hiding the numbers of the rows." An x-scale
       running L→R puts the first and last columns' CENTRES on the plot edges, so half of each hangs outside
       the box — over the y-axis labels on the left and past the plot on the right. It survived unnoticed while
       the chart was 280px wide and the columns were thin; at 335px (Version 441) each column is wider and the
       overhang sits squarely on the "%" of every label. Half a column of inset at each end puts every mark
       inside the plot, which is also what lets a frame close around it. The LINE charts keep the old scale,
       because a line has no width to hang over anything and should reach both edges. */
    var halfCol = (R - L) / (2 * Math.max(1, n));
    var X = function(i){ return L + halfCol + (R - L - 2 * halfCol) * i / Math.max(1, n - 1); };
    var Y = function(v){ return B - (B - T) * (v - LO) / (HI - LO); };
    var f = function(v){ return v.toFixed(1); };
    var out = [], zero = Y(0);
    out.push(chartAxes({ ticks:sc.ticks, y:Y, x0:L, x1:R, base:(LO <= 0 && HI >= 0 ? Y(0) : B), noGridAt:0, top:(T - AXIS.LEG - AXIS.READ), bot:B,
      fmt:function(g){ return (Math.round(g) === g ? g : g.toFixed(1)) + "%"; } }));
    // Version 431: a cycle names its own first and last year rather than the round ones windowYears picks
    if (o.cycle){
      var spanY = y1 - y0 + 1, stepY = Math.max(1, Math.ceil(spanY / (narrow ? 4 : 6)));
      for (var cyr = y0; cyr <= y1; cyr += stepY){
        var cix = (cyr - y0) * 4; if (cix >= n) break;
        out.unshift(vGrid(X(cix), T, B));
        out.push('<text class="bt-xl" x="' + f(X(cix)) + '" y="' + (B + 17) + '" text-anchor="middle">' + cyr + '</text>');
      }
    } else windowYears(y0, y1, narrow ? 4 : 5).forEach(function(yr){
      var i = (yr - y0) * 4; if (i < 0 || i >= n) return;
      out.unshift(vGrid(X(i), T, B));
      out.push('<text class="bt-xl" x="' + f(X(i)) + '" y="' + (B + 17) + '" text-anchor="middle">' + yr + '</text>');
    });
    var sw = colWidth((R - L) / n);
    vals.forEach(function(d, i){
      out.push('<path class="growth-col hcol' + (d.v < 0 ? " down" : "") + '" stroke-width="' + sw.toFixed(2) +
        '" d="M' + f(X(i)) + ',' + f(zero) + 'L' + f(X(i)) + ',' + f(Y(d.v)) + '"/>');
    });
    // Version 431: the window's own average, the same line Temperature draws
    var gAvg = vals.reduce(function(a, d){ return a + d.v; }, 0) / n;
    out.push('<path class="temp-avg" d="M' + L + ',' + f(Y(gAvg)) + 'L' + R + ',' + f(Y(gAvg)) + '"/>');
    lastChartAvg = gAvg;
    var tfit = trendOf(vals.map(function(d){ return d.v; }), "points", "quarter").fit;
    if (tfit && tfit.n > 1)
      out.push(fitGroup({ fit:tfit, fmt:function(v){ return v.toFixed(1) + "%"; } }, X(0), X(n - 1), Y, R, L, 0));
    out.push('<path class="m2-zero" d="M' + (L - AXIS.L) + ',' + f(zero) + 'H' + (R + AXIS.R) + '"/>');
    out.push('<path class="vh-mean" d="M' + L + ',' + f(Y(GDP_NORM)) + 'H' + R + '"/>');
    out.push('<line class="hist-cross" x1="0" x2="0" y1="' + T + '" y2="' + B + '"/>');
    out.push('<rect class="temp-hist-hit" x="' + L + '" y="' + T + '" width="' + (R - L) + '" height="' + (B - T) + '" fill="transparent"/>');
    lastHistGeom = { L:X(0), R:X(n - 1), T:T, B:B, W:W, n:n, vals:vals, at:atQuarter,
                     refs:[{ label:"Average", v:gAvg },
                           { label:"Long-run", v:GDP_NORM, dash:true }],
                     fmt:function(v){ return v.toFixed(1) + "%"; } };
    return '<svg class="vh-svg" viewBox="0 0 ' + W + ' ' + H + '" role="img" ' +
      'aria-label="Real GDP growth year over year, every quarter from ' + y0 + ' to ' + y1 +
      ', against the long-run average of ' + GDP_NORM + ' per cent; expansion in teal, contraction in orange">' +
      out.join("") + '</svg>';
  }

  function m2GrowthChart(Wpx, from, to){
    var W = Math.max(270, Math.round(Wpx || 360));
    var narrow = W < 430;
    var H = narrow ? 268 : 300, L = AXIS.L, R = W - AXIS.R, T = AXIS.T + AXIS.LEG + AXIS.READ, B = H - 17 - AXIS.FOOT;   // LEG: the legend strip at the frame's head (V556/V557); 17 is the x label's drop, FOOT what follows it (V573)
    from = from || 0;
    var all = m2Yoy.slice(4), vals = all.slice(from, to == null ? undefined : to), n = vals.length;
    var y0 = M2_FROM_YEAR + 1 + Math.floor(from / 4);
    var y1 = M2_FROM_YEAR + 1 + Math.floor(((to == null ? all.length : to) - 1) / 4);
    // zero and the long-run norm are always in view: which side of zero the bar falls on is the whole reading,
    // and the norm is what "fast" and "slow" are measured against (the Version 358 rule).
    var sc = windowScale(vals, [0, M2_NORM]);
    var LO = sc.lo, HI = sc.hi;
    /* Version 443, Keren: "in the growth chart the bars are hiding the numbers of the rows." An x-scale
       running L→R puts the first and last columns' CENTRES on the plot edges, so half of each hangs outside
       the box — over the y-axis labels on the left and past the plot on the right. It survived unnoticed while
       the chart was 280px wide and the columns were thin; at 335px (Version 441) each column is wider and the
       overhang sits squarely on the "%" of every label. Half a column of inset at each end puts every mark
       inside the plot, which is also what lets a frame close around it. The LINE charts keep the old scale,
       because a line has no width to hang over anything and should reach both edges. */
    var halfCol = (R - L) / (2 * Math.max(1, n));
    var X = function(i){ return L + halfCol + (R - L - 2 * halfCol) * i / Math.max(1, n - 1); };
    var Y = function(v){ return B - (B - T) * (v - LO) / (HI - LO); };
    var f = function(v){ return v.toFixed(1); };
    var out = [], zero = Y(0);
    out.push(chartAxes({ ticks:sc.ticks, y:Y, x0:L, x1:R, base:(LO <= 0 && HI >= 0 ? Y(0) : B), noGridAt:0, top:(T - AXIS.LEG - AXIS.READ), bot:B,
      fmt:function(g){ return (Math.round(g) === g ? g : g.toFixed(1)) + "%"; } }));
    windowYears(y0, y1, narrow ? 4 : 5).forEach(function(yr){
      var i = (yr - y0) * 4; if (i < 0 || i >= n) return;
      out.unshift(vGrid(X(i), T, B));
      out.push('<text class="bt-xl" x="' + f(X(i)) + '" y="' + (B + 17) + '" text-anchor="middle">' + yr + '</text>');
    });
    var sw = colWidth((R - L) / n);
    vals.forEach(function(v, i){
      if (v == null) return;
      out.push('<path class="m2-col hcol ' + m2Step(v) + '" stroke-width="' + sw.toFixed(2) +
        '" d="M' + f(X(i)) + ',' + f(zero) + 'L' + f(X(i)) + ',' + f(Y(v)) + '"/>');
    });
    // Version 434: Volume's long-run pace existed only as a record row, so the chart had nothing to read a
    // column AGAINST. windowScale already forces M2_NORM into the scale, so the line has always fitted \u2014 it was
    // simply never drawn. Now it is, with the window's own average beside it and the key naming both.
    var vAvg = vals.filter(function(v){ return v != null; }).reduce(function(a, v){ return a + v; }, 0) /
               (vals.filter(function(v){ return v != null; }).length || 1);
    out.push('<path class="vh-mean" d="M' + L + ',' + f(Y(M2_NORM)) + 'H' + R + '"/>');
    out.push('<path class="temp-avg" d="M' + L + ',' + f(Y(vAvg)) + 'H' + R + '"/>');
    out.push('<path class="m2-zero" d="M' + (L - AXIS.L) + ',' + f(zero) + 'H' + (R + AXIS.R) + '"/>');
    out.push('<line class="hist-cross" x1="0" x2="0" y1="' + T + '" y2="' + B + '"/>');
    lastHistGeom = { L:X(0), R:X(n - 1), T:T, B:B, W:W, n:n, at:function(d, i){ return qAtIndex(M2_FROM_YEAR + 1, from + i); },
                     fmt:function(v){ return (v > 0 ? "+" : "") + v.toFixed(1) + "%"; },
                     // the window's average and the long-run pace, in the order they are drawn
                     refs:[{ label:"Average", v:vAvg }, { label:"Long-run pace", v:M2_NORM, dash:true }],
                     vals:vals.map(function(v){ return v == null ? null : { v:v }; }) };
    // Version 403: the fit across the quarters in view. Nulls are filtered for the regression — they only occur
    // at the head of the series, which a window can include — but the line still spans the plot, because the
    // reader is being shown the slope of what is on screen, not of a subset of it.
    var m2Fit = trendOf(vals.filter(function(v){ return v != null; }), "points", "quarter").fit;
    if (m2Fit && m2Fit.n > 1)
      out.push(fitGroup({ fit:m2Fit, fmt:function(v){ return v.toFixed(1) + "%"; } }, X(0), X(n - 1), Y, R, L, 0));
    out.push('<path class="vh-mean" d="M' + L + ',' + f(Y(M2_NORM)) + 'H' + R + '"/>');
    return '<svg class="vh-svg" viewBox="0 0 ' + W + ' ' + H + '" role="img" ' +
      'aria-label="Money stock growth year over year, every quarter from ' + y0 + ' to ' + y1 +
      ', against the long-run norm of ' + M2_NORM + ' per cent">' +
      out.join("") + '</svg>';
  }

  function checkMoneyStock(){
    var g = m2Yoy.filter(function(x){ return x != null; });
    var hi = Math.max.apply(null, g), lo = Math.min.apply(null, g);
    if (m2Level.length !== 271 || Math.abs(hi - 25.61) > 0.02 || Math.abs(lo + 4.64) > 0.02)
      console.warn("m2Level failed its check", m2Level.length, hi.toFixed(2), lo.toFixed(2));
  }
  GYN.step("checkMoneyStock", checkMoneyStock, "check"); checkMoneyStock();

  function velocityVerdict(v){
    var r = v / PULSE_PRE2008;
    return r < 0.75 ? { text:"Very slow", state:"serious" }
         : r < 0.95 ? { text:"Slow",      state:"warning" }
         : r < 1.10 ? { text:"Steady",    state:"good" }
         : r < 1.25 ? { text:"Fast",      state:"warning" }
                    : { text:"Very fast", state:"serious" };
  }
  function derivePulseTag(){
    var pulse = coincident.filter(function(c){ return c.bodyTerm === "Pulse"; })[0];
    if (pulse) pulse.tag = velocityVerdict(pulse.meter.value);
  }
  GYN.step("derivePulseTag", derivePulseTag, "derive"); derivePulseTag();

  var lagging = [
    {
      bodyTerm:"Activity", econTerm:"Labor market",
      tag:{text:"Solid", state:"good"},
      metric:"4.1%", metricSub:"unemployment rate, Aug 2026",
      meter:{min:2.5,max:24.9,value:4.1,optimal:{from:ACT_BAND_LO,to:ACT_BAND_HI, label:"3.5–5%"},
             // the track runs from the lowest unemployment on record to the highest, so the LEFT end is a hot
             // labour market and the right end a cold one — the opposite of the usual "low is bad" reading
             ends:{ low:"Tight", zone:"Normal", high:"Slack" }},
      shortCaption:"Ticked up slightly but still low against the full sweep of U.S. history.",
      caption:"Physical activity confirms a phase only after it's underway — unemployment is the textbook lagging indicator, typically trailing a turn by two to three quarters. Ticked up slightly but still low against the full sweep of U.S. history; the modern BLS series (since 1948) set its own record at 14.8% in April 2020 (14.7% as first reported), against a low of 2.5% in mid-1953; the 24.9% at the far end of the bar is the Census Bureau's historical estimate for 1933. August payrolls rose 162,000, beating forecasts.",
      aux:{label:"Initial jobless claims (wk of Sep 12)", value:"196K"},
      /* Version 499: the last sign row without a miniature, and until Version 498 that was unavoidable — a
         miniature is a small picture of a series and this page had none. The colouring is the CHART's, so the
         thumbnail and the page behind it read one number the same way (the V261 rule). October 2025 is filtered
         out rather than drawn as a gap: twelve bars is a glance, and the chart is where a missing month is a
         fact worth showing. */
      get peek(){
        var seen = unempHistory.filter(function(d){ return d.v != null; }).map(function(d){ return d.v; });
        return colPeek(seen, function(v){ return "unemp-col " + unempState(v); });
      },
      src:[{t:"BLS — The Employment Situation, August 2026", u:"https://www.bls.gov/news.release/empsit.nr0.htm"},{t:"DOL — Unemployment Insurance Weekly Claims", u:"https://www.dol.gov/ui/data.pdf"},{t:"BLS via FRED — Unemployment rate, monthly since 1948 (UNRATE)", u:"https://fred.stlouisfed.org/series/UNRATE"},{t:"Census Bureau — Historical Statistics of the United States, Colonial Times to 1970 (Series D 85–86, unemployment 1890–1970)", u:"https://www.census.gov/library/publications/1975/compendia/hist_stats_colonial-1970.html"}]
    },
    {
      bodyTerm:"Temperature", econTerm:"Inflation",   // "& monetary policy" went with the rows (Version 375)
      tag:{text:"Running hot", state:"warning"},
      metric:"3.4%", metricSub:"CPI, YoY, Aug 2026",
      meter:{min:-15.8,max:23.7,value:3.4,optimal:{from:1,to:3, label:"1–3%"},
             // V490: the two ends of the record, not a pair of judgements — −15.8% in 1921 and +23.7%
             // in 1920. The middle label is the range itself (V486), which is what keeps a POLICY TARGET
             // from being labelled "normal"; the (i) below says which of the two it is.
             ends:{ low:"Cold", high:"Hot" }},
      shortCaption:"",   // removed in Version 378 (Keren); the reading speaks for itself and the note explains it
      caption:"Basal body temperature rises only after ovulation has already happened — CPI works the same way, confirming heat that built up earlier rather than predicting it. A touch above target; tame next to the full sweep of U.S. price history, which has run from outright deflation to the 1920 postwar spike and a 14.8% peak in 1980. The Fed's response — the lever pulled after her temperature, not ahead of it — raised the funds rate a quarter point to 3.75–4.00% at the Sep 16 meeting (12–0, unanimous) — its first hike in three years, with the dot plot signaling one more before year-end. Next decision Oct 28, 2026.",
      // the note, kept to the two metaphors, which are the only part of it the page cannot draw (Version 270)
      // The body metaphor was this page's visible lead until Version 376 (Keren: "put this in the more
      // details pop up"). It is an explanation of HOW to read the reading, which is what the long form is
      // for; the page now opens on what the reading SAYS. Deleting `lead` is the whole change: the visible
      // line falls through to `shortCaption`, and the full caption \u2014 which still opens with the metaphor \u2014
      // is what More details shows, because dropWhatIsShown no longer finds that sentence on the page.
      // "U.S. range since 1913" went in Version 376 (Keren: "I don't understand what is the US range since 1913").
      // Neither did the page. It read as the range of the whole official CPI record, but quoted the MODERN peak
      // (14.8%, 1980) while the meter behind it is scaled to the true extremes (\u221215.8% in 1921, +23.7% in 1920)
      // \u2014 so the row and its own meter disagreed. And since Version 374 the record rows state the range again,
      // for the series the chart actually draws (9.0% Jun 2022 to \u22122.0% Jul 2009). Three ranges, one page.
      // The meter draws the full sweep, the record rows state the drawn series, and the deep history is in the
      // long form, which already tells it properly \u2014 including the 1920 spike this row left out.
      facts:[],
      // Version 240 put the Fed funds rate on this card (Keren: "put Rates in the appropriate container"), and
      // Version 375 takes it off again at her request — a considered decision reopened, not an oversight.
      // Four of this card's six rows were policy-calendar facts, which answer "what is the Fed doing?", not
      // "how hot are prices?". They now live on Pressure, whose short end IS the policy rate. What stays here
      // is what a temperature reading answers: the historical range, and core CPI.
      // The prose keeps the Fed, because the RELATIONSHIP is real and is this page's point — the lever is
      // pulled after her temperature, not ahead of it. It is the filed FACTS that were in the wrong drawer.
      aux:[],   // core CPI moved into the chart container (Version 376, Keren); that card became a record row in V422
      src:[{t:"BLS — Consumer Price Index, August 2026", u:"https://www.bls.gov/news.release/PDF/cpi.PDF"},{t:"Federal Reserve — FOMC statement, Sep 16 2026", u:"https://www.federalreserve.gov/newsevents/pressreleases/monetary20260916a.htm"},{t:"Federal Reserve — FOMC meeting calendars", u:"https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm"},{t:"BLS Monthly Labor Review — One hundred years of price change (CPI history since 1913)", u:"https://www.bls.gov/opub/mlr/2014/article/one-hundred-years-of-price-change-the-consumer-price-index-and-the-american-inflation-experience.htm"}]
    }
  ];
