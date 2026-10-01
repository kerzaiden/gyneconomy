  /* ---- the history card's head ---- */
  var HIST_NOTE = {};
  var DOTS = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' +
    '<circle cx="5.4" cy="12" r="1.75"/><circle cx="12" cy="12" r="1.75"/><circle cx="18.6" cy="12" r="1.75"/></svg>';
  var HIST_HEAD = {
    "sheet-metric-temp":       { mark:thermoSvg,  title:"CPI" },
    "sheet-metric-gdp":        { mark:sproutSvg,  title:"Real GDP" },
    "sheet-sign-activity":     { mark:trendUpSvg, title:"Unemployment Rate" },
    "sheet-metric-valuation":  { mark:diamondSvg, title:"Shiller CAPE, Against Fair Value" },
    "sheet-metric-households": { mark:houseSvg,   title:"Debt Service, Share of Income" },
    "deficit-range":           { mark:null,       title:"Federal Deficit or Surplus, Share of GDP" },
    "volume-range":            { mark:volumeSvg,  title:"M2 Money Stock" },
    "pulse-range":             { mark:ecgSvg,     title:"Velocity of Money (M2)" },
    "hzn-range":               { mark:sunriseSvg, title:"" },
    "desire-range":            { mark:flameSvg,   title:"High-Yield Spread over Treasuries" },
    "fear-range":              { mark:volatilitySvg, title:"Cboe Volatility Index (VIX)" },
    "hormones-range":          { mark:hormoneSvg,  title:"Federal Funds Rate" },
    "pressure-range":          { mark:gaugeSvg,   title:"" }
  };
  function headPickRow(on, attr, key, label){
    return '<button type="button" class="cycsel-opt bh-pick' + (on ? " on" : "") +
      '" role="menuitemradio" aria-checked="' + (on ? "true" : "false") + '" ' + attr + '="' + key + '">' +
      '<span class="cycsel-tick" aria-hidden="true"></span>' +
      '<span class="cycsel-nm">' + label + '</span></button>';
  }
  function histHead(id){
    var H = HIST_HEAD[id];
    if (!H) return "";
    var t = typeof H.title === "function" ? H.title() : H.title;
    return '<div class="band-head">' +
      (H.mark ? '<span class="bh-mark" aria-hidden="true">' + H.mark() + '</span>' : "") +
      '<h2 class="bh-title">' + t + '</h2>' +
      '<span class="bh-sigma" id="bh-sigma-' + id + '" hidden></span>' +
      '<div class="bh-more-wrap"><button type="button" class="bh-more" data-head-more="' + id + '" ' +
        'aria-haspopup="menu" aria-expanded="' + (headMenuFor === id ? "true" : "false") +
        '" aria-label="More about this chart">' + DOTS + '</button>' +
      '<div class="cycsel-menu bh-menu" role="menu"' + (headMenuFor === id ? "" : " hidden") + '>' +
        (headMenuFor === id ? headMenuHtml(id) : "") + '</div></div>' +
    '</div>';
  }
  var headNoteIdx = {};
  function headMenuHtml(id){
    var H = HIST_HEAD[id] || {};
    var groups = H.menu ? H.menu() : [];
    var extra;
    if (!groups.length) extra = "";
    else if (headSubFor){
      var g = groups.filter(function(x){ return x.key === headSubFor; })[0];
      if (!g){ headSubFor = null; return headMenuHtml(id); }
      return '<button type="button" class="cycsel-opt bh-back" role="menuitem" data-head-grp="">' +
        CHEV + '<span class="cycsel-nm">' + g.label + '</span></button>' +
        '<div class="bh-sep" role="separator"></div>' + g.rows;
    }
    else extra = groups.map(function(x){
      return '<button type="button" class="cycsel-opt bh-grp-row" role="menuitem" aria-haspopup="true" ' +
        'data-head-grp="' + x.key + '"><span class="cycsel-nm">' + x.label + '</span>' +
        '<span class="cycsel-yr">' + (x.on ? x.value : "") + '</span>' + CHEV + '</button>';
    }).join("") + '<div class="bh-sep" role="separator"></div>';
    var note = HIST_NOTE[id];
    if (!note) return extra;
    if (headNoteIdx[id] == null){ headNoteIdx[id] = detailTexts.length; detailTexts.push(""); }
    detailTexts[headNoteIdx[id]] = note;
    return extra +
      '<button type="button" class="cycsel-opt bh-opt" role="menuitem" data-detail-idx="' +
      headNoteIdx[id] + '"><span class="cycsel-nm">About this reading</span></button>';
  }
  var headMenuFor = null;
  var headSubFor = null;
  function paintHeadMenus(){
    var heads = document.querySelectorAll(".band-head");
    for (var i = 0; i < heads.length; i++){
      var btn = heads[i].querySelector(".bh-more"), menu = heads[i].querySelector(".bh-menu");
      if (!btn || !menu) continue;
      var on = btn.getAttribute("data-head-more") === headMenuFor;
      if (on) menu.innerHTML = headMenuHtml(headMenuFor);
      menu.hidden = !on;
      btn.setAttribute("aria-expanded", on ? "true" : "false");
    }
  }
  document.addEventListener("click", function(e){
    var pick = e.target.closest && e.target.closest(".bh-pick");
    var grp = e.target.closest && e.target.closest("[data-head-grp]");
    if (grp){ headSubFor = grp.getAttribute("data-head-grp") || null; paintHeadMenus(); return; }
    if (pick){
      headMenuFor = null; headSubFor = null; paintHeadMenus();
      var mat = pick.getAttribute("data-ylm-mat");
      if (mat){ GYN.fire("pickSeries", null, mat); return; }
      var peer = pick.getAttribute("data-gdp-peer");
      if (peer != null){ GYN.fire("pickPeer", peer); return; }
      GYN.fire("pickSpread", pick.getAttribute("data-hzn-spread"));
      return;
    }
    var btn = e.target.closest && e.target.closest("[data-head-more]");
    if (!btn){ if (headMenuFor !== null){ headMenuFor = null; headSubFor = null; paintHeadMenus(); } return; }
    var id = btn.getAttribute("data-head-more");
    headMenuFor = (headMenuFor === id || !HIST_NOTE[id]) ? null : id;
    headSubFor = null;
    paintHeadMenus();
  });
  function histNote(head, info){ if (head && info) HIST_NOTE[head] = info; }
  function meterFlagged(m){
    var o = m.optimal || {};
    if (o.from != null) return m.value < o.from || m.value > o.to;
    if (o.gte != null) return m.value < o.gte;
    if (o.lte != null) return m.value > o.lte;
    return false;
  }
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
      srcBlock([
        {t:"ICE Data Indices via FRED \u2014 ICE BofA US High Yield Index OAS (BAMLH0A0HYM2)", u:"https://fred.stlouisfed.org/series/BAMLH0A0HYM2"},
        {t:"Trading Economics \u2014 the index\u2019s record high and low since 1996", u:"https://tradingeconomics.com/united-states/bofa-merrill-lynch-us-high-yield-option-adjusted-spread-fed-data.html"},
        {t:"Convex \u2014 high-yield spread regimes and the long-run median", u:"https://convextrade.com/glossary/hy-spreads"},
        {t:"CME Group \u2014 how Fed policy moves corporate bond spreads", u:"https://www.cmegroup.com/openmarkets/interest-rates/2025/How-Fed-Policy-Can-Impact-Corporate-Bond-Spreads.html"}
      ]);
  }
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
  var PRODUCTIVITY_SRC = [
    {t:"BLS \u2014 Productivity and Costs", u:"https://www.bls.gov/productivity/"},
    {t:"BLS Monthly Labor Review \u2014 The U.S. productivity slowdown (2021)", u:"https://www.bls.gov/opub/mlr/2021/article/the-us-productivity-slowdown-the-economy-wide-and-industry-level-analysis.htm"},
    {t:"BLS via FRED \u2014 Nonfarm Business Sector: Labor Productivity (OPHNFB)", u:"https://fred.stlouisfed.org/series/OPHNFB"}
  ];
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
      srcBlock(PRODUCTIVITY_SRC);
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
      srcBlock(f.src || []);
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
      srcBlock([
        {t:"CBO via FRED \u2014 Noncyclical Rate of Unemployment (NROU)", u:"https://fred.stlouisfed.org/series/NROU"},
        {t:"BLS via FRED \u2014 Unemployment rate, monthly since 1948 (UNRATE)", u:"https://fred.stlouisfed.org/series/UNRATE"}
      ]);
  }
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
      srcBlock([
        {t:"Federal Reserve — 2025 Statement on Longer-Run Goals and Monetary Policy Strategy", u:"https://www.federalreserve.gov/monetarypolicy/monetary-policy-strategy-tools-and-communications-statement-on-longer-run-goals-monetary-policy-strategy-2025.htm"},
        {t:"Cleveland Fed — The CPI versus the PCE price index", u:"https://www.clevelandfed.org/collections/infographics/2024/infogr-20241205-cpi-versus-pce-price-index"},
        {t:"BLS — Consumer Price Index, August 2026", u:"https://www.bls.gov/news.release/PDF/cpi.PDF"},
        {t:"BLS Monthly Labor Review — One hundred years of price change", u:"https://www.bls.gov/opub/mlr/2014/article/one-hundred-years-of-price-change-the-consumer-price-index-and-the-american-inflation-experience.htm"}
      ]);
  }
  function desireBlock(ind){
    histNote("desire-range", desireInfoHtml(ind));
    return histBar("", "desire-timeline") +
      '<div class="page-chart pulsebox">' +
      histHead("desire-range") +
      '<div id="desire-record" class="vh-host"></div>' +
      histTip("desire-hist-tooltip") +
      '<div id="desire-trend"></div>' +
    '</div>';
  }

  function volumeBlock(ind){
    var g = m2Yoy.filter(function(x){ return x != null; });
    var hi = Math.max.apply(null, g), lo = Math.min.apply(null, g);
    histNote("volume-range", volumeInfoHtml(ind));
    return histBar("", "volume-timeline") +
      '<div class="page-chart pulsebox">' +
      histHead("volume-range") +
      '<div id="m2-record" class="vh-host"></div>' +
      histTip("m2-hist-tooltip") +
      '<div id="volume-trend"></div>' +
      '</div>';
  }
  function velocityRecordBlock(pulseInd){
    var hi = Math.max.apply(null, m2vHistory), lo = Math.min.apply(null, m2vHistory);
    if (pulseInd) histNote("pulse-range", pulseInfoHtml(pulseInd));
    return histBar("", "pulse-timeline") +
      '<div class="page-chart pulsebox">' +
      histHead("pulse-range") +
      '<div id="pulse-record" class="vh-host"></div>' +
      histTip("pulse-hist-tooltip") +
      '<div id="pulse-trend"></div>' +
      '</div>';
  }

  function checkVelocityHistory(){
    var hi = Math.max.apply(null, m2vHistory), lo = Math.min.apply(null, m2vHistory);
    if (m2vHistory.length !== 270 || Math.abs(hi - 2.192) > 1e-9 || Math.abs(lo - 1.126) > 1e-9)
      console.warn("m2vHistory failed its check", m2vHistory.length, hi, lo);
  }
  GYN.step("checkVelocityHistory", checkVelocityHistory, "check"); checkVelocityHistory();

  /* ---- Volume: how much blood there is ---- */
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
  var m2Yoy = m2Level.map(function(v, i){ return i < 4 ? null : (v / m2Level[i - 4] - 1) * 100; });
  var M2_NORM = 6.80;

  function volumeVerdict(g){
    return g < 0     ? { text:"Draining", state:"serious" }
         : g < 3.5   ? { text:"Thin",     state:"warning" }
         : g < 10    ? { text:"Steady",   state:"good" }
         : g < 16    ? { text:"Filling",  state:"warning" }
                     : { text:"Flooding", state:"serious" };
  }

  var UNEMP_FROM_YEAR = 1948;
  var unempHistory = (
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
  GYN.step("checkUnemploymentHistory", checkUnemploymentHistory, "check"); checkUnemploymentHistory();
  var NROU_NOW = 4.2;
  function unempState(v){
    return v < ACT_BAND_LO ? "tight"
         : v <= ACT_BAND_HI ? "good"
         : v < 6.5 ? "warning"
         : v < 8.5 ? "serious" : "critical";
  }
  function unempHistoryChart(Wpx, from, o){
    o = o || {};
    var F = histFrame(Wpx), W = F.W, narrow = F.narrow, H = F.H,
        L = F.L, R = F.R, T = F.T, B = F.B;
    from = from || 0;
    var vals = unempHistory.slice(from, o.to == null ? undefined : o.to), n = vals.length;
    if (!n) return "";
    var seen = vals.filter(function(d){ return d.v != null; });
    if (!seen.length) return "";
    var y0 = parseInt(vals[0].m.slice(0, 4), 10), y1 = parseInt(vals[n - 1].m.slice(0, 4), 10);
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
        out.push(xLabel(f(X(cix)), cyr, B + 17));
      }
    } else windowYears(y0, y1, narrow ? 4 : 5).forEach(function(yr){
      var i = (yr - y0) * 12; if (i < 0 || i >= n) return;
      out.unshift(vGrid(X(i), T, B));
      out.push(xLabel(f(X(i)), yr, B + 17));
    });
    var sw = colWidth((R - L) / n);
    vals.forEach(function(d, i){
      if (d.v == null) return;
      out.push('<path class="unemp-col hcol ' + unempState(d.v) + '" stroke-width="' + sw.toFixed(2) +
        '" d="' + colPath(X(i), zero, Y(d.v), sw) + '"/>');
    });
    var avgV = seen.reduce(function(a, d){ return a + d.v; }, 0) / seen.length;
    out.push(avgRule(L, R, f(Y(avgV))));
    var tfit = trendOf(seen.map(function(d){ return d.v; }), "points", "month").fit;
    if (tfit && tfit.n > 1)
      out.push(fitGroup({ fit:tfit, fmt:function(v){ return v.toFixed(1) + "%"; } }, X(0), X(n - 1), Y, R, L, 0));
    out.push(zeroRule(L, R, zero));
    out.push(meanRule(L, R, Y(NROU_NOW)));
    out.push(crossLine(T, B));
    out.push('<rect class="temp-hist-hit" x="' + L + '" y="' + T + '" width="' + (R - L) + '" height="' + (B - T) + '" fill="transparent"/>');
    publishGeom("unempHistoryChart", { L:X(0), R:X(n - 1), T:T, B:B, W:W, n:n, vals:vals, at:atMonth,
                     refs:[{ label:"Average", v:avgV },
                           { label:"CBO estimate", v:NROU_NOW, dash:true }],
                     fmt:function(v){ return v.toFixed(1) + "%"; } });
    return vhOpen(W, H) +
      'aria-label="The unemployment rate, every month from ' + y0 + ' to ' + y1 +
      ', against the 3.5 to 5 per cent band and CBO\u2019s estimate of the noncyclical rate">' + out.join("") + '</svg>';
  }
  /* ---- Hormones — the policy rate's history ---- */
  function checkFedFundsHistory(){
    var vs = fedFundsHistory.map(function(d){ return d.v; });
    var hi = Math.max.apply(null, vs), lo = Math.min.apply(null, vs);
    if (!fedFundsHistory.length || fedFundsHistory[0].m !== "1954-07" || lo < 0 || hi < 19 || hi > 20)
      console.warn("fedFundsHistory failed its check", fedFundsHistory.length, lo, hi,
                   fedFundsHistory[0] && fedFundsHistory[0].m);
  }
  GYN.step("checkFedFundsHistory", checkFedFundsHistory, "check"); checkFedFundsHistory();

  function fedFundsHistoryChart(Wpx, from, o){
    o = o || {};
    var F = histFrame(Wpx), W = F.W, narrow = F.narrow, H = F.H,
        L = F.L, R = F.R, T = F.T, B = F.B;
    from = from || 0;
    var vals = fedFundsHistory.slice(from, o.to == null ? undefined : o.to), n = vals.length;
    if (!n) return "";
    var seen = vals.filter(function(d){ return d.v != null; });
    if (!seen.length) return "";
    var y0 = parseInt(vals[0].m.slice(0, 4), 10), y1 = parseInt(vals[n - 1].m.slice(0, 4), 10);
    var sc = windowScale(seen.map(function(d){ return d.v; }), [0]);
    var LO = sc.lo, HI = sc.hi;
    var halfCol = (R - L) / (2 * Math.max(1, n));
    var X = function(i){ return L + halfCol + (R - L - 2 * halfCol) * i / Math.max(1, n - 1); };
    var Y = function(v){ return B - (B - T) * (v - LO) / (HI - LO); };
    var f = function(v){ return v.toFixed(1); };
    var out = [], zero = Y(0);
    out.push(chartAxes({ ticks:sc.ticks, y:Y, x0:L, x1:R, base:zero, noGridAt:0,
      top:(T - AXIS.LEG - AXIS.READ), bot:B,
      fmt:function(g){ return (Math.round(g) === g ? g : g.toFixed(1)) + "%"; } }));
    if (o.cycle){
      var spanY = y1 - y0 + 1, stepY = Math.max(1, Math.ceil(spanY / (narrow ? 4 : 6)));
      for (var cyr = y0; cyr <= y1; cyr += stepY){
        var cix = (cyr - y0) * 12; if (cix >= n) break;
        out.unshift(vGrid(X(cix), T, B));
        out.push(xLabel(f(X(cix)), cyr, B + 17));
      }
    } else windowYears(y0, y1, narrow ? 4 : 5).forEach(function(yr){
      var i = (yr - y0) * 12; if (i < 0 || i >= n) return;
      out.unshift(vGrid(X(i), T, B));
      out.push(xLabel(f(X(i)), yr, B + 17));
    });
    var sw = colWidth((R - L) / n);
    var seenV = seen.map(function(d){ return d.v; });
    var vLo = Math.min.apply(null, seenV), vHi = Math.max.apply(null, seenV);
    var step = function(v){
      if (!(vHi > vLo)) return 5;
      return Math.max(0, Math.min(5, Math.floor(6 * (v - vLo) / (vHi - vLo))));
    };
    vals.forEach(function(d, i){
      if (d.v == null) return;
      out.push('<path class="ff-col hcol f' + step(d.v) + '" stroke-width="' + sw.toFixed(2) +
        '" d="' + colPath(X(i), zero, Y(d.v), sw) + '"/>');
    });
    var avgV = seen.reduce(function(a, d){ return a + d.v; }, 0) / seen.length;
    out.push(avgRule(L, R, f(Y(avgV))));
    var tfit = trendOf(seen.map(function(d){ return d.v; }), "points", "month").fit;
    if (tfit && tfit.n > 1)
      out.push(fitGroup({ fit:tfit, fmt:function(v){ return v.toFixed(2) + "%"; } }, X(0), X(n - 1), Y, R, L, 0));
    out.push(zeroRule(L, R, zero));
    out.push(crossLine(T, B));
    out.push('<rect class="temp-hist-hit" x="' + L + '" y="' + T + '" width="' + (R - L) + '" height="' + (B - T) + '" fill="transparent"/>');
    publishGeom("fedFundsHistoryChart", { L:X(0), R:X(n - 1), T:T, B:B, W:W, n:n, vals:vals, at:atMonth,
                     refs:[{ label:"Average", v:avgV }],
                     fmt:function(v){ return v.toFixed(2) + "%"; } });
    return vhOpen(W, H) +
      'aria-label="The effective federal funds rate, every month from ' + y0 + ' to ' + y1 + '">' + out.join("") + '</svg>';
  }
  var ACT_BAND_LO = 3.5, ACT_BAND_HI = 5;
  var CPI_TARGET = 2;
  function qAtIndex(y0, i){ return (y0 + Math.floor(i / 4)) + " Q" + (i % 4 + 1); }
  /* ---- the reference key, shared ---- */

  function householdsChart(Wpx, from, to){
    var F = histFrame(Wpx), W = F.W, narrow = F.narrow, H = F.H,
        L = F.L, R = F.R, T = F.T, B = F.B;
    from = from || 0;
    var hi = to == null ? dsrHistory.length : to;
    var bill = dsrHistory.slice(from, hi);
    var kept = savHistory.slice(SAV_OFFSET + from, SAV_OFFSET + hi);
    var n = bill.length;
    var sc = windowScale(bill.concat(kept), [0]);
    var LO = sc.lo, HI = sc.hi;
    var X = function(i){ var h = (R - L) / (2 * Math.max(1, n));
      return L + h + (R - L - 2 * h) * i / Math.max(1, n - 1); };
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
      out.push(xLabel(f(X(i)), yr, B + 17));
    });
    out.push(crossLine(T, B));
    function line(ser, cls){
      return '<path class="' + cls + '" d="' + ser.map(function(v, i){
        return (i ? "L" : "M") + f(X(i)) + "," + f(Y(v)); }).join("") + '"/>';
    }
    var hhSlot = (R - L) / Math.max(1, n);
    var hhSw = colWidth(hhSlot / 2), hhOff = Math.max(0.7, hhSw * 0.62);
    bill.forEach(function(v, i){
      var cx = X(i);
      out.push('<g class="hcol">' +
        '<path class="hh-col bill" stroke-width="' + hhSw.toFixed(2) + '" d="' + colPath(cx - hhOff, Y(0), Y(v), hhSw) + '"/>' +
        '<path class="hh-col kept" stroke-width="' + hhSw.toFixed(2) + '" d="' + colPath(cx + hhOff, Y(0), Y(kept[i]), hhSw) + '"/>' +
      '</g>');
    });
    var hovAt = 0;
    publishGeom("householdsChart", { L:L, R:R, T:T, B:B, W:W, n:n,
      refs:[{ label:"Paid out on debt", cls:"hh-bill" }, { label:"Kept as saving", cls:"hh-kept" }],
      at:function(d, i){ hovAt = i; return qAtIndex(DSR_FROM_YEAR, from + i); },
      fmt:function(v){ return v.toFixed(1) + "% out \u00b7 " + kept[hovAt].toFixed(1) + "% kept"; },
      vals:bill.map(function(v){ return { v:v }; }) });
    return '<svg class="hist-svg vh-svg" viewBox="0 0 ' + W + ' ' + H + '" role="img" ' +
      'aria-label="Household debt service and the personal saving rate, both as a share of disposable ' +
      'income, every quarter from ' + y0 + ' to ' + y1 + '">' + out.join("") + '</svg>';
  }

  function cpiHistoryChart(Wpx, from, o){
    o = o || {};
    var F = histFrame(Wpx), W = F.W, narrow = F.narrow, H = F.H,
        L = F.L, R = F.R, T = F.T, B = F.B;
    from = from || 0;
    var vals = cpiYoYHistory.slice(from, o.to == null ? undefined : o.to), n = vals.length;
    if (!n) return "";
    var y0 = parseInt(vals[0].m.slice(0, 4), 10), y1 = parseInt(vals[n - 1].m.slice(0, 4), 10);
    var sc = windowScale(vals.map(function(d){ return d.v; }), [0, CPI_TARGET]);
    var LO = sc.lo, HI = sc.hi;
    var halfCol = (R - L) / (2 * Math.max(1, n));
    var X = function(i){ return L + halfCol + (R - L - 2 * halfCol) * i / Math.max(1, n - 1); };
    var Y = function(v){ return B - (B - T) * (v - LO) / (HI - LO); };
    var f = function(v){ return v.toFixed(1); };
    var out = [], zero = Y(0), avgShown = null;
    out.push(chartAxes({ ticks:sc.ticks, y:Y, x0:L, x1:R, base:(LO <= 0 && HI >= 0 ? Y(0) : B), noGridAt:0, top:(T - AXIS.LEG - AXIS.READ), bot:B,
      fmt:function(g){ return (Math.round(g) === g ? g : g.toFixed(1)) + "%"; } }));
    if (o.cycle){
      var spanY = y1 - y0 + 1, stepY = Math.max(1, Math.ceil(spanY / (narrow ? 4 : 6)));
      for (var cyr = y0; cyr <= y1; cyr += stepY){
        var cix = (cyr - y0) * 12; if (cix >= n) break;
        out.unshift(vGrid(X(cix), T, B));
        out.push(xLabel(f(X(cix)), cyr, B + 17));
      }
    } else windowYears(y0, y1, narrow ? 4 : 5).forEach(function(yr){
      var i = (yr - y0) * 12; if (i < 0 || i >= n) return;
      out.unshift(vGrid(X(i), T, B));
      out.push(xLabel(f(X(i)), yr, B + 17));
    });
    var sw = colWidth((R - L) / n);
    vals.forEach(function(d, i){
      out.push('<path class="temp-col hcol ' + heatStep(d.v) + '" stroke-width="' + sw.toFixed(2) +
        '" d="' + colPath(X(i), zero, Y(d.v), sw) + '"/>');
    });
    if (n){
      var avgV = vals.reduce(function(a, d){ return a + d.v; }, 0) / n, avgY = Y(avgV);
      out.push(avgRule(L, R, f(avgY)));
      avgShown = avgV;
    }
    var tfit = trendOf(vals.map(function(d){ return d.v; }), "points", "month").fit;
    if (tfit && tfit.n > 1)
      out.push(fitGroup({ fit:tfit, fmt:function(v){ return v.toFixed(1) + "%"; } }, X(0), X(n - 1), Y, R, L, 0));
    out.push(zeroRule(L, R, zero));
    out.push(meanRule(L, R, Y(CPI_TARGET)));
    out.push(crossLine(T, B));
    out.push('<rect class="temp-hist-hit" x="' + L + '" y="' + T + '" width="' + (R - L) + '" height="' + (B - T) + '" fill="transparent"/>');
    publishGeom("cpiHistoryChart", { L:X(0), R:X(n - 1), T:T, B:B, W:W, n:n, vals:vals, at:atMonth,
                     refs:[{ label:"Average", v:avgShown },
                           { label:"Fed target", v:CPI_TARGET, dash:true }],
                     fmt:function(v){ return v.toFixed(1) + "%"; } });
    return vhOpen(W, H) +
      'aria-label="Consumer prices year over year, every month from ' + y0 + ' to ' + y1 +
      ', against the 2 per cent target, shaded from cool to hot">' + out.join("") + '</svg>';
  }

  var GDP_NORM = 2.6;
  var gdpNowQ = gdpQuarterlyYoY[gdpQuarterlyYoY.length - 1];
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
      srcBlock([
        {t:"BEA \u2014 Gross Domestic Product", u:"https://www.bea.gov/data/gdp/gross-domestic-product"},
        {t:"CBO \u2014 The Budget and Economic Outlook: 2026 to 2036", u:"https://www.cbo.gov/publication/62105"}
      ]);
  }
  function gdpHistoryChart(Wpx, from, o){
    o = o || {};
    var F = histFrame(Wpx), W = F.W, narrow = F.narrow, H = F.H,
        L = F.L, R = F.R, T = F.T, B = F.B;
    from = from || 0;
    var vals = gdpQuarterlyYoY.slice(from, o.to == null ? undefined : o.to), n = vals.length;
    if (!n) return "";
    var y0 = parseInt(vals[0].q.slice(0, 4), 10), y1 = parseInt(vals[n - 1].q.slice(0, 4), 10);
    var sc = windowScale(vals.map(function(d){ return d.v; }), [0, GDP_NORM]);
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
        var cix = (cyr - y0) * 4; if (cix >= n) break;
        out.unshift(vGrid(X(cix), T, B));
        out.push(xLabel(f(X(cix)), cyr, B + 17));
      }
    } else windowYears(y0, y1, narrow ? 4 : 5).forEach(function(yr){
      var i = (yr - y0) * 4; if (i < 0 || i >= n) return;
      out.unshift(vGrid(X(i), T, B));
      out.push(xLabel(f(X(i)), yr, B + 17));
    });
    var sw = colWidth((R - L) / n);
    vals.forEach(function(d, i){
      out.push('<path class="growth-col hcol' + (d.v < 0 ? " down" : "") + '" stroke-width="' + sw.toFixed(2) +
        '" d="' + colPath(X(i), zero, Y(d.v), sw) + '"/>');
    });
    var gAvg = vals.reduce(function(a, d){ return a + d.v; }, 0) / n;
    out.push(avgRule(L, R, f(Y(gAvg))));
    var tfit = trendOf(vals.map(function(d){ return d.v; }), "points", "quarter").fit;
    if (tfit && tfit.n > 1)
      out.push(fitGroup({ fit:tfit, fmt:function(v){ return v.toFixed(1) + "%"; } }, X(0), X(n - 1), Y, R, L, 0));
    out.push(zeroRule(L, R, zero));
    out.push(meanRule(L, R, Y(GDP_NORM)));
    out.push(crossLine(T, B));
    out.push('<rect class="temp-hist-hit" x="' + L + '" y="' + T + '" width="' + (R - L) + '" height="' + (B - T) + '" fill="transparent"/>');
    publishGeom("gdpHistoryChart", { L:X(0), R:X(n - 1), T:T, B:B, W:W, n:n, vals:vals, at:atQuarter,
                     refs:[{ label:"Average", v:gAvg },
                           { label:"Long-run", v:GDP_NORM, dash:true }],
                     fmt:function(v){ return v.toFixed(1) + "%"; } });
    return vhOpen(W, H) +
      'aria-label="Real GDP growth year over year, every quarter from ' + y0 + ' to ' + y1 +
      ', against the long-run average of ' + GDP_NORM + ' per cent; expansion in teal, contraction in orange">' +
      out.join("") + '</svg>';
  }

  function m2GrowthChart(Wpx, from, to){
    var F = histFrame(Wpx), W = F.W, narrow = F.narrow, H = F.H,
        L = F.L, R = F.R, T = F.T, B = F.B;
    from = from || 0;
    var all = m2Yoy.slice(4), vals = all.slice(from, to == null ? undefined : to), n = vals.length;
    var y0 = M2_FROM_YEAR + 1 + Math.floor(from / 4);
    var y1 = M2_FROM_YEAR + 1 + Math.floor(((to == null ? all.length : to) - 1) / 4);
    var sc = windowScale(vals, [0, M2_NORM]);
    var LO = sc.lo, HI = sc.hi;
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
      out.push(xLabel(f(X(i)), yr, B + 17));
    });
    var sw = colWidth((R - L) / n);
    vals.forEach(function(v, i){
      if (v == null) return;
      out.push('<path class="m2-col hcol ' + m2Step(v) + '" stroke-width="' + sw.toFixed(2) +
        '" d="' + colPath(X(i), zero, Y(v), sw) + '"/>');
    });
    var vAvg = vals.filter(function(v){ return v != null; }).reduce(function(a, v){ return a + v; }, 0) /
               (vals.filter(function(v){ return v != null; }).length || 1);
    out.push(meanRule(L, R, Y(M2_NORM)));
    out.push(avgRule(L, R, f(Y(vAvg))));
    out.push(zeroRule(L, R, zero));
    out.push(crossLine(T, B));
    publishGeom("m2GrowthChart", { L:X(0), R:X(n - 1), T:T, B:B, W:W, n:n, at:function(d, i){ return qAtIndex(M2_FROM_YEAR + 1, from + i); },
                     fmt:function(v){ return (v > 0 ? "+" : "") + v.toFixed(1) + "%"; },
                     refs:[{ label:"Average", v:vAvg }, { label:"Long-run pace", v:M2_NORM, dash:true }],
                     vals:vals.map(function(v){ return v == null ? null : { v:v }; }) });
    var m2Fit = trendOf(vals.filter(function(v){ return v != null; }), "points", "quarter").fit;
    if (m2Fit && m2Fit.n > 1)
      out.push(fitGroup({ fit:m2Fit, fmt:function(v){ return v.toFixed(1) + "%"; } }, X(0), X(n - 1), Y, R, L, 0));
    out.push(meanRule(L, R, Y(M2_NORM)));
    return vhOpen(W, H) +
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
      bodyTerm:"Activity", title:"Unemployment rate", econTerm:"Labor market",
      page:{ bare:true, noMark:true, deferHighlights:true, after:activityStackHtml },
      tag:{text:"Solid", state:"good"},
      metric:"4.1%", metricSub:"unemployment rate, Aug 2026",
      meter:{min:2.5,max:24.9,value:4.1,optimal:{from:ACT_BAND_LO,to:ACT_BAND_HI, label:"3.5–5%"},
             ends:{ low:"Tight", zone:"Normal", high:"Slack" }},
      shortCaption:"Ticked up slightly but still low against the full sweep of U.S. history.",
      caption:"Physical activity confirms a phase only after it's underway — unemployment is the textbook lagging indicator, typically trailing a turn by two to three quarters. Ticked up slightly but still low against the full sweep of U.S. history; the modern BLS series (since 1948) set its own record at 14.8% in April 2020 (14.7% as first reported), against a low of 2.5% in mid-1953; the 24.9% at the far end of the bar is the Census Bureau's historical estimate for 1933. August payrolls rose 162,000, beating forecasts.",
      aux:{label:"Initial jobless claims (wk of Sep 12)", value:"196K"},
      get peek(){
        var seen = unempHistory.filter(function(d){ return d.v != null; }).map(function(d){ return d.v; });
        return colPeek(seen, function(v){ return "unemp-col " + unempState(v); });
      },
      src:[{t:"BLS — The Employment Situation, August 2026", u:"https://www.bls.gov/news.release/empsit.nr0.htm"},{t:"DOL — Unemployment Insurance Weekly Claims", u:"https://www.dol.gov/ui/data.pdf"},{t:"BLS via FRED — Unemployment rate, monthly since 1948 (UNRATE)", u:"https://fred.stlouisfed.org/series/UNRATE"},{t:"Census Bureau — Historical Statistics of the United States, Colonial Times to 1970 (Series D 85–86, unemployment 1890–1970)", u:"https://www.census.gov/library/publications/1975/compendia/hist_stats_colonial-1970.html"}]
    },
    {
      bodyTerm:"Temperature", econTerm:"Inflation",
      page:{ bare:true, id:"sheet-metric-temp", seat:seatTemperature },
      tag:{text:"Running hot", state:"warning"},
      metric:"3.4%", metricSub:"CPI, YoY, Aug 2026",
      meter:{min:-15.8,max:23.7,value:3.4,optimal:{from:1,to:3, label:"1–3%"},
             ends:{ low:"Cold", high:"Hot" }},
      shortCaption:"",
      caption:"Basal body temperature rises only after ovulation has already happened — CPI works the same way, confirming heat that built up earlier rather than predicting it. A touch above target; tame next to the full sweep of U.S. price history, which has run from outright deflation to the 1920 postwar spike and a 14.8% peak in 1980. The Fed's response — the lever pulled after her temperature, not ahead of it — raised the funds rate a quarter point to 3.75–4.00% at the Sep 16 meeting (12–0, unanimous) — its first hike in three years, with the dot plot signaling one more before year-end. Next decision Oct 28, 2026.",
      facts:[],
      aux:[],
      src:[{t:"BLS — Consumer Price Index, August 2026", u:"https://www.bls.gov/news.release/PDF/cpi.PDF"},{t:"Federal Reserve — FOMC statement, Sep 16 2026", u:"https://www.federalreserve.gov/newsevents/pressreleases/monetary20260916a.htm"},{t:"Federal Reserve — FOMC meeting calendars", u:"https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm"},{t:"BLS Monthly Labor Review — One hundred years of price change (CPI history since 1913)", u:"https://www.bls.gov/opub/mlr/2014/article/one-hundred-years-of-price-change-the-consumer-price-index-and-the-american-inflation-experience.htm"}]
    }
  ];
