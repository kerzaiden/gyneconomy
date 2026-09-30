  // ---- The split indicators: one card and one page each ----
  var BUFFETT_2001 = [
    { t:"Warren Buffett — Warren Buffett on the Stock Market, Fortune, Dec 10 2001 (the 70–80% line)",
      u:"https://fortune.com/2001/12/10/warren-buffett-stock-market/" },
    { t:"Berkshire Hathaway — the same Fortune article, Dec 10 2001 (PDF)",
      u:"https://www.berkshirehathaway.com/2001ar/FortuneMagazine%20DEC%2010%202001.pdf" }
  ];
  var INDICATOR_GROUP = {
    "sheet-metric-valuation":"Valuations", "sheet-metric-buffett":"Valuations",
    "sheet-metric-power":"Economic power", "sheet-metric-debt":"Economic power",
    "sheet-metric-interest":"Economic power", "sheet-marker-deficit":"Economic power"
  };
  var SPLIT_PERIOD = {}, SPLIT_STOPS = ["5y", "10y", "25y", "max"];
  function debtSvg(){ return markSvg('<path d="M4 20h16M6.5 16h11M9 12h6M11 8h2" stroke-width="1.9"/>'); }
  function interestSvg(){ return markSvg('<path d="M18.5 5.5 5.5 18.5" stroke-width="1.9"/>' +
    '<circle cx="7.2" cy="7.2" r="2.3" stroke-width="1.7"/><circle cx="16.8" cy="16.8" r="2.3" stroke-width="1.7"/>'); }
  function budgetSvg(){ return markSvg('<path d="M12 4v16M8 20h8M4.5 8h15" stroke-width="1.8"/>' +
    '<path d="M4.5 8 2.5 13.5h4zM19.5 8l-2 5.5h4z" stroke-width="1.6"/>'); }
  function lede(text){ return '<p class="hi-lede">' + text + '</p>'; }
  function periodOf(row){ return (/^(FY\d{4}|Q[1-4] \d{4})/.exec(row.shortNote || "") || [])[1] || ""; }
  function qLast(series){ return qPretty(series[series.length - 1].q); }
  function meterWord(m){ return meterFlagged(m) ? (m.ends && m.ends.high) || "High" : (m.ends && m.ends.zone) || "In range"; }
  function splitSpecs(){
    var buff = valRow("buffett");
    return [
      { id:"sheet-metric-buffett", after:"sheet-metric-valuation", title:"Buffett indicator", mark:diamondSvg,
        head:"Buffett Indicator, Market Value ÷ GDP", row:buff, series:buffettHistory, when:qLast(buffettHistory),
        mid:80, midLabel:"Buffett’s line, 80%", unit:"of GDP",
        fmt:function(v){ return Math.round(v) + "%"; }, src:BUFFETT_2001.concat(valuation.src.slice(0, 2)),
        band:"The line at 80% is Buffett’s own: “If the percentage relationship falls to the 70% or 80% area, " +
             "buying stocks is likely to work very well for you” (Fortune, Dec 10 2001).",
        insight:buffettInsight },
      { id:"sheet-metric-debt", after:"sheet-metric-power", title:"Debt burden", mark:debtSvg,
        head:"Gross Federal Debt, Share of GDP", row:labPanel[0], series:grossDebtQuarterly, when:periodOf(labPanel[0]),
        mid:70, midLabel:"50-year average, 70%", unit:"of GDP",
        fmt:function(v){ return v.toFixed(1) + "%"; }, tick:function(v){ return Math.round(v) + "%"; }, src:longCycleSrc.slice(0, 3), insight:debtInsight },
      { id:"sheet-metric-interest", after:"sheet-metric-debt", title:"Interest burden", mark:interestSvg,
        head:"Net Interest, Share of GDP", row:labPanel[1], series:fiscalHistory.interest, when:periodOf(labPanel[1]),
        mid:2, midLabel:"50-year average, 2.0%", unit:"of GDP",
        fmt:function(v){ return v.toFixed(1) + "%"; }, src:[longCycleSrc[0], longCycleSrc[4]], insight:interestInsight }
    ];
  }
  function splitInfo(s){
    return '<h4>' + s.row.marker + '</h4><div class="marker-sub">' + s.row.sub + '</div>' + factsFrom(s.row.note) +
      (s.band ? '<p>' + s.band + '</p>' : "") + srcBlock(s.src);
  }
  function quarterTicks(vals){
    if (!vals.length || !vals[0].q) return null;
    var ys = windowYears(yearOf(vals[0]), yearOf(vals[vals.length - 1]), 5);
    return function(d){ return /Q1$/.test(d.q) && ys.indexOf(yearOf(d)) !== -1 ? "’" + d.q.slice(2, 4) : ""; };
  }
  function drawSplit(s, W){
    var id = s.id, cyc = pageMode[id] === "cycles" ? (cycleByName(pageCycles[id]) || openCycle()) : null;
    var span = cyc ? cycleSlice(s.series, cyc) : null;
    var vals = span ? s.series.slice(span[0], span[1]) : timelineWindow(s.series, pageRange[id]);
    var tr = trendOf(vals.map(function(d){ return d.v; }), "points", s.series[0].q ? "quarter" : "year");
    var chart = function(w){
      return divergeChart({ vals:vals, mid:s.mid, midLabel:s.midLabel, fmt:s.fmt, tickFmt:s.tick || s.fmt, fit:tr.fit,
        xLabel:quarterTicks(vals), at:function(d){ return d.q ? qPretty(d.q) : "FY" + d.y; },
        alt:s.row.marker + " against " + s.midLabel + ", with the fitted trend across the readings in view" }, w);
    };
    put(id + "-chart", histBar(histControls(id, { series:s.series, stops:SPLIT_STOPS })) +
      '<div class="page-chart">' + histHead(id) + chart(W) + trendPill(tr, null, true) +
      '<div class="panel-stack in-hist">' + panelRow({ name:s.row.marker, head:id, info:splitInfo(s),
        metric:s.row.flagValue, flagged:meterFlagged(s.row.meter), bar:panelFromMeter(s.row.meter) }) + '</div>' +
      histTip(id + "-tip") + '</div>');
    var box = document.querySelector("#" + id + "-chart .page-chart");
    refitHistory(box, chart);
    attachHistory(box, id + "-tip", "divergeChart");
  }
  function mountSplit(s){
    if (!document.getElementById(s.id)){
      var sheet = document.createElement("div");
      sheet.className = "metric-sheet"; sheet.id = s.id; sheet.hidden = true;
      sheet.innerHTML = '<div id="' + s.id + '-timing">' + timingPill("structural") + '</div>' +
        '<div id="' + s.id + '-chart"></div><div id="' + s.id + '-highlights"></div>';
      var after = byId(s.after);
      if (after && after.parentNode) after.parentNode.insertBefore(sheet, after.nextSibling);
    }
    HIST_HEAD[s.id] = { mark:s.mark, title:s.head };
    pageMode[s.id] = "cycles"; pageCycles[s.id] = null; pageRange[s.id] = "10y";
    sheetRenderers[s.id] = function(W){ drawSplit(s, W); };
    put(s.id + "-highlights", highlightsHtml(s.insight(s), "", ""));
    addSources(s.src);
    SPLIT_PERIOD[s.id] = s.when;
  }
  function splitPeek(o){
    registerTiming("structural", { title:o.title, sub:INDICATOR_GROUP[o.target], metric:o.row.flagValue, unit:o.unit,
      word:meterWord(o.row.meter), state:o.row.flagState || "norm", icon:discOf({ innerHTML:o.mark() }, o.row.flagState),
      target:o.target });
    return peekCard({ kicker:o.title, title:o.title, mark:o.mark(), value:o.row.flagValue, unit:o.unit,
      word:meterWord(o.row.meter), state:o.row.flagState || "norm", target:o.target,
      cols:o.cols, colBase:o.base, colClass:function(v){ return "dv-bar " + (v > o.base ? "over" : "under"); } });
  }
  function indicatorPeeks(){
    var html = splitSpecs().map(function(s){
      mountSplit(s);
      return splitPeek({ title:s.title, mark:s.mark, row:s.row, unit:s.unit, target:s.id,
                         cols:s.series.map(function(d){ return d.v; }), base:s.mid });
    }).join("");
    SPLIT_PERIOD["sheet-marker-deficit"] = periodOf(labPanel[2]);
    return html + splitPeek({ title:"Federal budget", mark:budgetSvg, row:labPanel[2], unit:"deficit, of GDP",
      target:"sheet-marker-deficit", cols:deficitHistory.map(function(v){ return -v; }), base:3.8 });
  }
  function appendPicks(items, picks, PERIOD){
    picks.forEach(function(p){
      if (typeof p === "string"){ var el = document.querySelector(p); if (el) items.appendChild(catItem(el, PERIOD)); return; }
      var grp = document.createElement("div"); grp.className = "cat-group";
      grp.innerHTML = '<h3 class="cat-group-head">' + p.group + '</h3>';
      p.picks.forEach(function(sel){ var el = document.querySelector(sel); if (el) grp.appendChild(catItem(el, PERIOD)); });
      if (grp.children.length > 1) items.appendChild(grp);
    });
  }
  function categoryCats(){
    return [
      { key:"weather", title:"Weather", mark:weatherSvg(), sub:"Temperature · Growth",
        picks:['.peek[data-open="sheet-metric-temp"]', '.peek[data-open="sheet-metric-gdp"]'] },
      { key:"circulation", title:"Circulation", mark:circulationSvg(), sub:"Hormones · Pressure · Pulse · Volume",
        picks:['.sign-row[data-subject="hormones"]', '.sign-row[data-subject="pressure"]',
               '.peek[data-open="sheet-sign-pulse"]', '.peek[data-open="sheet-sign-volume"]'] },
      { key:"mood", title:"Mood", mark:moodSvg(), sub:"Valuations · Fear · Desire · Horizon",
        picks:[{ group:"Valuations", picks:['.peek[data-open="sheet-metric-valuation"]', '.peek[data-open="sheet-metric-buffett"]'] },
               '.sign-row[data-open="sheet-sign-sentiment"]', '.sign-row[data-open="sheet-sign-desire"]',
               '.sign-row[data-open="sheet-sign-horizon"]'] },
      { key:"energy", title:"Energy", mark:boltSvg(), sub:"Power · Households · Activity",
        picks:[{ group:"Economic power", picks:['.peek[data-open="sheet-metric-power"]', '.peek[data-open="sheet-metric-debt"]',
                                                '.peek[data-open="sheet-metric-interest"]', '.peek[data-open="sheet-marker-deficit"]'] },
               '.peek[data-open="sheet-metric-households"]', '.sign-row[data-open="sheet-sign-activity"]'] }
    ];
  }

  // ---- The split indicators' insights ----
  function buffettInsight(s){
    var now = s.row.meter.value, bv = buffettHistory.map(function(d){ return d.v; });
    var bPrev = maxIn(buffettHistory, 1970, currentEra.from - 1), bDot = maxIn(buffettHistory, 2000, 2007);
    var richer = bv.filter(function(v){ return v > now; }).length;
    var above = buffettHistory.filter(function(d){ return d.v > s.mid; });
    return [lede('The price of the whole stock market set against the size of the economy that has to ' +
        'earn it. A reading far above the line is a body valued for more than it produces.'),
      hiCard("Where it sits", s.row.flagState || "serious", richer === 0
        ? "At " + Math.round(now) + "% of GDP it is the highest of the " + bv.length + " quarters since " + yearOf(buffettHistory[0]) +
          " — above the previous record of " + Math.round(bPrev.v) + "% (" + bPrev.q + ") and far above the dot-com peak of " +
          Math.round(bDot.v) + "% (" + bDot.q + ")."
        : "At " + Math.round(now) + "% of GDP, " + richer + " of the " + bv.length + " quarters since " + yearOf(buffettHistory[0]) + " ran higher."),
      hiCard("Against Buffett’s line", "warning", "It has sat above " + s.mid + "% in " + above.length + " of the " + bv.length +
        " quarters, the last time below it in " + (buffettHistory.filter(function(d){ return d.v <= s.mid; }).pop() || {}).q + ".")];
  }
  function debtInsight(s){
    var now = s.row.meter.value, rec = maxIn(grossDebtQuarterly, 1966, calendarTodayY);
    var under = grossDebtQuarterly.filter(function(d){ return d.v <= s.mid; }).pop();
    var era = grossDebtQuarterly.filter(function(d){ return yearOf(d) === currentEra.from; })[0];
    var cards = [lede('What the government owes, measured against what the whole economy makes in a ' +
      'year. The larger the debt, the less room the body has to borrow when something goes wrong.'),
      hiCard("Against the record", s.row.flagState || "serious", "At " + now.toFixed(1) + "% of GDP, " +
        (now >= rec.v ? "the highest reading since the quarterly series began in 1966." :
          (rec.v - now).toFixed(1) + " points below the record of " + rec.v.toFixed(1) + "% in " + rec.q + ".")),
      hiCard("Against the 70% line", "warning", under
        ? "Last at or under " + s.mid + "% in " + under.q + "; every quarter since has run above it." : "Above " + s.mid + "% throughout.")];
    if (era) cards.push(hiCard("Since this cycle opened", "serious", "The " + currentEra.name + " began at " + era.v.toFixed(1) +
      "% (" + era.q + "); the change since is " + fmtSigned(now - era.v, 1) + " points."));
    return cards;
  }
  function interestInsight(s){
    var now = s.row.meter.value, hist = fiscalHistory.interest, last = hist[hist.length - 1];
    var rec = hist.reduce(function(a, d){ return d.v > a.v ? d : a; });
    var above = hist.filter(function(d){ return d.v > s.mid; }).length;
    return [lede('The yearly cost of carrying the debt. Money spent on interest is energy the body has ' +
        'already used, paid again every year.'),
      hiCard("Against the record", s.row.flagState || "critical", "The " + (periodOf(s.row) || "latest") + " reading of " +
        now.toFixed(1) + "% " + (now > rec.v ? "is above every fiscal year since FY" + hist[0].y + "; the previous peak was " +
          rec.v.toFixed(1) + "% in FY" + rec.y + "." : "compares with a record of " + rec.v.toFixed(1) + "% in FY" + rec.y + ".")),
      hiCard("The last actual year", "warning", "FY" + last.y + " closed at " + last.v.toFixed(1) + "% of GDP. Of the " +
        hist.length + " fiscal years on record, " + above + " ran above the " + s.mid.toFixed(1) + "% line.")];
  }
