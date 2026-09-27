  // ---------------- RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it ----------------
  function renderCycleList(){
    var list = document.getElementById("cycle-list");
    // Version 517: the two-pass scale is gone with it. It existed to find the longest cycle on the board and
    // draw every other row against that; the scale is a typical cycle now, which every row can work out for
    // itself, so one pass does what two did.
    var strips = {};
    marketCycles.forEach(function(c){ strips[c.from] = seasonStripHtml(c); });
    list.innerHTML = marketCycles.slice().reverse().map(function(cyc){
      var total = eraMarketTotal(cyc), strip = strips[cyc.from];
      return '<div class="era-row" role="button" tabindex="0" data-era="' + cyc.from + '">' +
            '<div class="era-head"><span class="era-name">' + cyc.name + '</span>' +
              /* V523: the span reads off `cycLabel`, which the picker and its menu already use. It was a
                 hand-written copy here, and the copy is how "2023–Today" in the control ended up beside
                 "2023–today" two taps away. */
              '<span class="era-years">' + cycLabel(cyc).years +
                ' <b>(' + strip.years + 'Y)</b></span>' +
              CHEV + '</div>' +
            // the seasons of this cycle, the picture the old Analysis tab showed on its own (Version 259)
            '<div class="era-bands">' + strip.strip + marketStripHtml(cyc, strip.span, strip.done) + '</div>' +
            // What the cycle did to output and to prices, side by side (Keren, Sep 20, 2026, on seeing the pair:
            // "this is so interesting — put it in the analysis tab per cycle"). Two totals computed the same way
            // over the same closed years, so the comparison is real: the Big Tech decade ran dead even, and the
            // Dot-Com Cycle is the only one of the five where output beat prices (Version 276; renamed in Version
            // 413, so those two are 2008–2017 and 1990–1999, the same years as before).
            // one line, not three: what the cycle was, then what it did. They wrap together at phone width
            // rather than each taking a row of its own.
            '<div class="era-foot">' +
              '<span class="era-econ">' +
                '<span class="chip"><i>Growth</i>' + fmtSigned(eraGrowth(cyc).total, 0) + '%</span>' +
                '<span class="chip"><i>Prices</i>' + fmtSigned(eraInflation(cyc).total, 0) + '%</span>' +
                (total != null ? '<span class="chip"><i>S&amp;P 500</i>' + fmtSigned(total, 0) + '%' + (cyc.ongoing ? '<span class="unit"> so far</span>' : '') + '</span>' : '') +
              '</span>' +
            '</div>' +
      '</div>';
    }).join('');
    // Version 354: two cycles show, the rest wait. PREVIEW_CYCLES is the only number here \u2014 the rows are
    // already built, so this hides the tail rather than rendering a different list, which means an expanded
    // container and the old five-row one are the same DOM and nothing can drift between them.
    /* Version 505: every cycle shows. Two was right while the season reading sat under this list and the tab
       had to hold both; with that gone the tab IS the cycle history, and a history that hides three of its five
       entries behind a button is a preview of itself \u2014 the fault Version 354's own comment named. */
    var PREVIEW_CYCLES = 99;
    (function(){
      var rows = [].slice.call(list.querySelectorAll(".era-row"));
      var btn = document.getElementById("cycle-more"), label = document.getElementById("cycle-more-label");
      if (!btn || rows.length <= PREVIEW_CYCLES){ if (btn) btn.hidden = true; return; }
      var extra = rows.slice(PREVIEW_CYCLES), open = false;
      function apply(){
        extra.forEach(function(r){ r.hidden = !open; });
        btn.setAttribute("aria-expanded", open ? "true" : "false");
        label.textContent = open ? "View less" : "View more";
      }
      apply();
      btn.addEventListener("click", function(){ open = !open; apply(); });
    })();

    var listWrap = document.getElementById("calendar-list"), detail = document.getElementById("calendar-cycle"), slot = document.getElementById("calendar-cycle-slot");
    function open(from){
      var era = marketCycles.filter(function(c){ return c.from === from; })[0];
      if (!era) return;
      showCycle(era);
      placeCharts("view");
      slot.appendChild(cycleViewEl);
      listWrap.hidden = true; detail.hidden = false;
      // the top bar becomes the cycle's: its name as the title, the back arrow on the left (Keren, Sep 19, 2026: in the
      // top menu, not a link under it)
      setTopbar(era.ongoing ? "Current Cycle" : era.name, back);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    function back(){
      detail.hidden = true; listWrap.hidden = false;
      setTopbar("Analysis", null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    list.addEventListener("click", function(e){ var row = e.target.closest && e.target.closest(".era-row"); if (row) open(parseInt(row.getAttribute("data-era"), 10)); });
    list.addEventListener("keydown", function(e){ if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("era-row")){ e.preventDefault(); open(parseInt(e.target.getAttribute("data-era"), 10)); } });
    // Leaving for another tab and coming back always lands on the list; the Cycle tab always takes the view back
    // for the current cycle (see the tab wiring below).
    calendarReset = function(){ detail.hidden = true; listWrap.hidden = false; topbarBack = null; document.getElementById("topbar-back").hidden = true; };
    addSources(sp500AnnualReturnSource); addSources(typicalCycleSrc);
  }
  GYN.step("renderCycleList", renderCycleList, "wire"); renderCycleList();

  // First paint: the current cycle on the Cycle tab.
  renderCycleView(nowModel);


  // The five signs as subjects of their own (Version 247). Each row's face is the card's face — mark, name, figure,
  // one sentence — and its body is the card's full detail, so nothing is lost and nothing is nested. The Temperature
  // Temperature chart is not in here — since Version 249 it sits open on the page, under the dial.
  function renderSignsList(){
    var host = document.getElementById("signs-list");
    var PEEKED = { Temperature:1, Pulse:1, Volume:1 };   // signs whose card in the peek row stands in for their row
    // Version 306, Keren: "put Effort inside the Activity page \u2014 it belongs next to the labour market, it's not
    // that important a metric to preview." She is right on both counts: industrial output and employment are the
    // same question asked of two parts of the body, and reading them on one page is the point. A folded sign has
    // no card, no row and no page of its own \u2014 it renders inside its host's \u2014 but it still registers with its
    // own timing class, pointing at the page it now lives in, so the taxonomy does not quietly lose it.
    var FOLDED = { "Industrial output":"Activity" }, foldedInto = {};
    // Version 395: Productivity growth is not a sign in the taxonomy — it has no row, no mark and no page — but
    // on this page it is a peer of Industrial output, so it is seeded into the same list and drawn by the same
    // builder. Seeded HERE, before the signs are built, because Activity renders its folded blocks as it is made.
    foldedInto["Activity"] = [productivityReading];
    /* Version 497, Keren: "make the activity page more like the power page, where you have an aggregate of
       indicators below the main chart \u2014 the main chart should be the labor market." Three readings that had
       been in two different components on one page: the labour market as a panel row, Productivity and
       Industrial output as `.folded-sign` blocks still wearing `meterHtml`'s `.rbar` track, which every other
       page gave up between V479 and V492. One stack, in the order she named. */
    function activityStackHtml(ind){
      var folded = foldedInto["Activity"] || [];
      var byTerm = function(t){ return folded.filter(function(f){ return f.econTerm === t; })[0]; };
      var prod = byTerm("Productivity growth"), out = byTerm("Industrial output");
      var rows = panelRow({ name:ind.econTerm, info:activityInfoHtml(ind), head:"sheet-sign-activity",
                            metric:ind.metric,
                            flagged:meterFlagged(ind.meter), bar:panelFromMeter(ind.meter) });
      if (prod) rows += panelRow({ name:prod.econTerm, info:productivityInfoHtml(prod), metric:prod.metric,
                                   flagged:meterFlagged(prod.meter), bar:panelFromMeter(prod.meter) });
      if (out) rows += panelRow({ name:out.econTerm, info:outputInfoHtml(out), metric:out.metric,
                                  flagged:meterFlagged(out.meter), bar:panelFromMeter(out.meter) });
      /* Version 498: the aggregate now sits under a chart, which is what Keren asked for in V497 and what the
         page could not have until the series existed. Power's own order, part for part: the control, the
         readout the hover fills, the picture, the trend across the window, then the readings. */
      return '<div class="hist-bar" id="act-rangebar"></div>' +
        '<div class="page-chart">' +
          histHead("sheet-sign-activity") +
          '<div id="act-history" class="vh-host"></div>' +
          '<div class="gdp-tooltip mono hist-tip" id="act-hist-tooltip" hidden></div>' +
          '<div id="act-trend"></div>' +
          '<div class="panel-stack in-hist">' + rows + '</div>' +
        '</div>';
    }
    function foldedBlock(f){
      var rest = dropWhatIsShown(f.caption, f.lead || f.shortCaption || "");
      var facts = [].concat(f.facts || [], f.aux || []);
      // Version 352, Keren: "drop the cogwheel icon and Effort and leave only industrial output as the title."
      // The mark and the body term both went for the same reason the flame left Desire's page in Version 340 —
      // a mark identifies a sign in a LIST, and this block is not in one. It is the only thing on the page that
      // is not the labour market, under a top bar that already says Activity, so "Industrial output" is the
      // whole of what its head has to say. The popup drops the name too, or the (i) would hand back the word
      // the head just stopped using.
      return '<section class="folded-sign">' +
        '<div class="spread-history-head">' +
          '<h4>' + f.econTerm + (rest ? expandBtn('<h4>' + f.econTerm + '</h4>' + factsFrom(rest)) : '') + '</h4>' +
          '<span class="tag ' + f.tag.state + '">' + f.tag.text + '</span></div>' +
        '<div class="metric-row"><span class="metric mono">' + f.metric + '</span>' +
          '<span class="metric-sub">' + f.metricSub + '</span></div>' +
        meterHtml(f.meter) +
        '<p class="caption">' + (f.lead || f.shortCaption || f.caption) + '</p>' +
        facts.map(function(a){ return '<div class="aux-stat"><span>' + a.label + '</span><b>' + a.value + '</b></div>'; }).join("") +
      '</section>';
    }
    // A sign is a ROW that opens a PAGE (Version 269, Keren: "I want the other indicators to have an inner page as
    // well — of course, aligning to our inner pages format"). It used to be a drawer that expanded where it stood.
    // The row keeps the face it always had; the body it used to unfold is the page it now opens.
    /* Where a sign's page actually lives. Two of them do not have one of their own: Temperature's detail sits
       under the Temperature chart (Version 288). Any
       row pointing at a sign \u2014 the roster's, and a folded sign's \u2014 asks here, so a link can never open a sheet
       that was moved out from under it. One answer, one place; the stray was found by counting the links. */
    function pageFor(term){
      return term === "Temperature" ? "sheet-metric-temp"
           : "sheet-sign-" + term.toLowerCase();
    }
    function signSubject(ind, timing){
      var key = ind.bodyTerm.toLowerCase(), id = "sheet-sign-" + key;
      var svg = signMarks[ind.bodyTerm] ? signMarks[ind.bodyTerm]() : "";
      var row = document.createElement("div");
      row.className = "subject sign-row";
      row.setAttribute("data-subject", "sign-" + key);
      row.setAttribute("role", "button"); row.tabIndex = 0;
      row.setAttribute("data-open", id); row.setAttribute("data-title", ind.bodyTerm);
      row.innerHTML =
        '<div class="subject-summary">' +
          '<div class="subject-ring"><div class="subject-icon"><span class="' + ind.tag.state + '">' + svg + '</span></div></div>' +
          '<div class="subject-text">' +
            '<div class="subject-label">' + ind.bodyTerm + ' \u00b7 ' + ind.econTerm + '</div>' +
            '<div class="subject-value">' + ind.metric + '<span class="unit">' + ind.metricSub + '</span></div>' +
            '<div class="subject-verdict"><span class="tag ' + ind.tag.state + '">' + ind.tag.text + '</span></div>' +
            // Version 475: an optional miniature, so a sign row can carry one the way a peek card does. Desire
            // was the only member of Mood without one, which the category list showed as a hole on its right.
            (ind.peek || "") +
          '</div>' +
          '<div class="subject-more"><span class="subject-chev" aria-hidden="true"></span></div>' +
        '</div>';
      if (FOLDED[ind.bodyTerm]){                 // it lives inside another page; it gets no row and no sheet
        // NB: not `var host` \u2014 `host` is already the list container this function appends into, and a var
        // declared in here hoists over it for the WHOLE function, leaving every other sign with no container.
        var hostName = FOLDED[ind.bodyTerm];
        (foldedInto[hostName] = foldedInto[hostName] || []).push(ind);
        registerTiming(timing, { title:ind.bodyTerm, sub:ind.econTerm, metric:ind.metric, metricSub:ind.metricSub,
          tag:ind.tag, icon:'<div class="subject-icon"><span class="' + ind.tag.state + '">' + svg + '</span></div>',
          target:pageFor(hostName) });
        return null;
      }
      var d = document.createElement("div");
      d.className = "metric-sheet"; d.id = id; d.hidden = true;
      d.innerHTML = (timing ? timingPill(timing) : "") + '<div class="sign-detail"></div>';
      // Temperature's page opens with its own chart, and that chart already carries the name, the figure and the
      // verdict — so the detail below it drops its head, its figure and its reference bar rather than saying all
      // three a second time (Keren: "I see duplications — temperature, inflation and monetary policy; 3.4%; and we
      // don't need the low/optimal/high bar, because we already see the graph, which I think is more informative").
      d.querySelector(".sign-detail").innerHTML =
        // Version 477: Desire has no read-card at all. Its figure, its verdict and its title all live in the
        // history container now, and a wrapper round nothing is still a box on the page.
        // Version 487: Activity joins Desire in having no read-card — its panel row carries all three things
        // the card was carrying, on one line instead of three.
        "" +
        cardDetailHtml(ind, { bare: ind.bodyTerm === "Temperature" || ind.bodyTerm === "Desire" ||
                                    ind.bodyTerm === "Volume" || ind.bodyTerm === "Pulse" ||
                                    ind.bodyTerm === "Activity",
                              noHead: ind.bodyTerm === "Pulse" || ind.bodyTerm === "Volume",
                              noMark: ind.bodyTerm === "Desire" || ind.bodyTerm === "Activity",
                              noMeter: ind.bodyTerm === "Desire",
                              chartFirst: ind.bodyTerm === "Pulse" || ind.bodyTerm === "Volume",
                              // Pulse is here on the same argument, not as a bonus: its spectrum was bare in
                              // exactly the same way, and the blood test is one named component that should not
                              // look like two things on two pages (Keren's own consistency rule, V374).
                              // Version 485: Volume and Pulse carry the reading as a panel row inside their
                              // own history container now, so the builder emits no blood card for them.
                              bloodCard: false,
                              // Version 391, Keren, of Activity: "put the highlights at the bottom of the page,
                              // above More details." Its Highlights were INSIDE the read-card and therefore above
                              // the folded Industrial output block — commentary sitting in the middle of the
                              // measurements it comments on. This is the same fault Desire had in Version 385 and
                              // the same fix: the builder hands its Highlights back and the caller places them.
                              deferHighlights: ind.bodyTerm === "Desire" || ind.bodyTerm === "Activity",
                              chart: ind.bodyTerm === "Pulse" ? pulseBlock(ind.meter.value, PULSE_PRE2008, ind)
                                   : ind.bodyTerm === "Volume" ? volumeBlock(ind) : "" }) +
        (ind.bodyTerm === "Desire" ? desireBlock(ind) + riskMatrixBlock(ind.meter.value, valRow("cape").meter.value)
         : ind.bodyTerm === "Activity" ? activityStackHtml(ind)
           : "") +
        // V497: Activity consumes its folded readings as rows of its own stack, so it emits none here.
        (ind.bodyTerm === "Activity" ? "" : (foldedInto[ind.bodyTerm] || []).map(foldedBlock).join("")) +
        // … and they go LAST, after the folded signs, not merely outside the card. Version 385 flushed them
        // before this line, which was invisible on Desire because Desire has no folded sign; Activity has one,
        // so the order only becomes a rule here: **Highlights are the last container on the page, whatever a
        // page appends after its read-card.** Left-to-right evaluation guarantees cardDetailHtml has already
        // run and set the variable by the time this reads it; the flush also clears it for the next sign, so a
        // page that defers nothing cannot inherit the previous page's block.
        (function(){ var h = heldHighlights; heldHighlights = ""; return h; })();
      registerTiming(timing || (ind.bodyTerm === "Temperature" ? "lagging" : null), {
        title:ind.bodyTerm, sub:ind.econTerm, metric:ind.metric, metricSub:ind.metricSub,
        tag:ind.tag, icon:'<div class="subject-icon"><span class="' + ind.tag.state + '">' + svg + '</span></div>',
        target:pageFor(ind.bodyTerm)
      });
      // A sign with a peek card has no row in the list: the card IS its row (Version 254 for Temperature, and
      // Version 291 for Effort and Pulse, which Keren asked to sit side by side "like temperature GDP growth").
      // Temperature is the one that also gives up its page wrapper, because its detail goes under a chart that
      // already exists; the other two keep their own pages exactly as they were.
      if (PEEKED[ind.bodyTerm] && ind.bodyTerm !== "Temperature"){ host.appendChild(d); return d; }
      if (ind.bodyTerm === "Temperature"){
        // V490: the panel row, rendered once from the indicator — the figure does not move with the window,
        // so it does not belong in the per-draw code above.
        /* V582, Keren: "I don't need the test result component in temperature because I already have the
           average. I have the Fed target. I don't need to see it again as in another form." The row drew
           3.4% against a 1\u20133% track \u2014 and the chart two inches above already carries 3.4% in its readout,
           the cycle's average as a line and the Fed's 2% as a dashed one, with Highlights saying in words
           where today sits. Four statements of one number.
           The row went; its NOTE did not. panelRow filed o.info into HIST_NOTE so the \u22ef menu could open it
           (the V518 rule, one string read from one place), and that note is the only place the app explains
           why 1\u20133% is a target band rather than a normal range, and that the Fed's 2% is PCE while this
           reading is CPI. It is filed directly now, the way the yield, horizon and deficit notes already are. */
        HIST_NOTE["sheet-metric-temp"] = temperatureInfoHtml(ind);
        tempCaptionFull = ind.caption;                      // its long form joins the page's own, in one row (V287)
        tempLeadShown = ind.lead || ind.shortCaption || "";  // \u2026 minus whatever the page is already showing (V288)
        /* V532: REPLACE, never append. A second render would otherwise leave two `.sign-detail`
           blocks in the sheet, and the page-foot seater reads `:scope > .sign-detail`, so it would
           then find the stale one. Idempotent by construction rather than by being called once. */
        (function(){
          var sheet = document.getElementById("sheet-metric-temp");
          var fresh = d.querySelector(".sign-detail");
          var prev = sheet.querySelector(":scope > .sign-detail");
          if (prev) sheet.replaceChild(fresh, prev); else sheet.appendChild(fresh);
        })();
      } else { host.appendChild(row); host.appendChild(d); }
      return d;
    }
    // The section headings are gone (Keren, Sep 20, 2026: "get rid of the Leading, Coincident and Lagging titles on
    // the main page and make the spaces align"). Three headings over six rows spent a third of the list's height
    // saying something each row can say for itself — and said it only while the reader was scrolling past, which
    // is the wrong moment for it. It matters when you are reading the sign, so it travels onto the sign's page.
    coincident.forEach(function(ind){ signSubject(ind, ind.bodyTerm === "Temperature" ? null : (ind.timing || "coincident")); });
    lagging.forEach(function(ind){ signSubject(ind, "lagging"); });

    // Yield curve and Sentiment were written straight into the markup, so they are converted where they stand rather
    // than rebuilt (the Version 255 move): the summary becomes the row, the drawer's body becomes the page, and every
    // id inside either one keeps working. These two are why this was needed — between them they ran longer than
    // everything else on the tab put together, so anything below them was effectively unreachable (Version 269).
    [{ key:"yield", title:"Pressure", timing:"leading" },
     // Version 473: Horizon converts the same way, which is the whole reason it was written into the markup as a
     // <details> rather than built from an indicator object — its page is a chart with two controls and a
     // verdict, not a row with a table, and this path gives it a page without inventing a second idiom for one.
     { key:"horizon", title:"Horizon", timing:"leading" },
     // NB a real "&": cfg.title is written with setAttribute and read back with textContent, so an entity
     // here would render literally in the row (it did, once).
     { key:"sentiment", title:"Fear", timing:"leading" }].forEach(function(cfg){
      var det = document.querySelector('.subject[data-subject="' + cfg.key + '"]'); if (!det) return;
      var sum = det.querySelector(".subject-summary"), body = det.querySelector(".subject-body");
      var id = "sheet-sign-" + cfg.key;
      var row = document.createElement("div");
      row.className = "subject sign-row" + (cfg.key === "yield" ? " card-row press-row" : "");
      row.setAttribute("data-subject", cfg.key);
      row.setAttribute("role", "button"); row.tabIndex = 0;
      row.setAttribute("data-open", id); row.setAttribute("data-title", cfg.title);
      var face = document.createElement("div"); face.className = "subject-summary";
      while (sum.firstChild) face.appendChild(sum.firstChild);   // moved, so every id inside it survives
      /* V587, Keren: "make sure that in the all indicators list, all items are updated with the icons that we
         talked about." Twelve of thirteen already were; Fear was blank. Its umbrella is written onto the label
         by renderFearCurve, the way Horizon's sunrise is \u2014 but that runs against the markup row, and by the
         time the ROSTER is built this converter has moved those children once already, so whichever list is
         built second gets a row whose label was never touched. Which one that is depends on build order, which
         is why Horizon looked fine and Fear did not.
         The mark is applied HERE instead, where the row is made, once, and only if it has none: the row cannot
         reach any list without it, and a label that already carries its glyph is left exactly as it is. */
      (function(){
        var MARK = { yield:gaugeSvg, horizon:sunriseSvg, sentiment:umbrellaSvg };
        var lab = face.querySelector(".subject-label");
        if (lab && MARK[cfg.key] && !lab.querySelector("svg"))
          lab.innerHTML = '<span class="peek-mark">' + MARK[cfg.key]() + '</span>' + lab.innerHTML;
      })();
      row.appendChild(face);
      var sheet = document.createElement("div");
      sheet.className = "metric-sheet"; sheet.id = id; sheet.hidden = true;
      sheet.innerHTML = timingPill(cfg.timing);
      while (body.firstChild) sheet.appendChild(body.firstChild);
      det.parentNode.insertBefore(row, det);
      det.parentNode.insertBefore(sheet, det);
      det.parentNode.removeChild(det);
    });

    // the four metric pages say where they sit too, in the same chip and the same place
    [["temp-timing", "lagging"], ["gdp-timing", "coincident"],
     ["power-timing", "structural"], ["valuation-timing", "structural"],
     ["households-timing", "structural"]].forEach(function(p){
      var el = document.getElementById(p[0]); if (el) el.innerHTML = timingPill(p[1]);
    });


    // One shape for all four inner pages (Version 266): the head, then the chart in its white box, then Highlights,
    // then the detail drawer. The pages were assembled from four different directions — two wrapped around a drawer
    // that was already in the markup, two built fresh — and had drifted into four different orders. This sorts the
    // DOM itself rather than painting over it with flex order, so the reading order a screen reader gets is the
    // reading order the eye gets.
    ["sheet-metric-temp", "sheet-metric-gdp", "sheet-metric-power", "sheet-metric-valuation",
     "sheet-metric-households"].forEach(function(id){
      var sheet = document.getElementById(id); if (!sheet) return;
      function rank(el){
        var k = el.id || "";
        if (/-timing$/.test(k)) return 0;            // where this sign sits in the cycle, said once, at the top
        if (/-head$/.test(k)) return 1;
        if (/-chart$/.test(k) || /^slot-/.test(k)) return 2;
        if (/-highlights$/.test(k)) return 4;        // Highlights LAST, because it ends in More details, and
        return 3;                                    // nothing belongs below the offer to read more (Version 288)
      }
      Array.prototype.slice.call(sheet.children)
        .map(function(el, i){ return { el:el, r:rank(el), i:i }; })
        .sort(function(a, b){ return a.r - b.r || a.i - b.i; })
        .forEach(function(x){ sheet.appendChild(x.el); });
    });
    Array.prototype.forEach.call(document.querySelectorAll(".metric-sheet"), seatPageFoot);
  }
  GYN.step("renderSignsList", renderSignsList, "build"); renderSignsList();

  // The peek pair (Version 253). Today's readings only — it lives in #today-analysis, not in the cycle view, so a past
  // cycle opened from the Calendar never borrows it. Both figures are taken from the same place the row below takes
  // them, so the peek and its drawer can never disagree: Temperature from its own indicator, Growth from the season
  // model's latest quarter, which is also what the Growth chart reads at its end line.
  function renderPagesAndNav(){
    var host = document.getElementById("peek-row"); if (!host) return;
    var tempInd = lagging.concat(coincident).filter(function(c){ return c.bodyTerm === "Temperature"; })[0];
    var r = nowModel.reading, era = nowModel.era;
    var cpiWord = r.cpiHot ? "Hot" : r.cpiCold ? "Cold" : "Warm";
    var cpiDir = r.cpiDirection === "rising" ? "heating" : r.cpiDirection === "falling" ? "cooling" : "steady";
    var gq = gdpQuarterlyYoY.filter(function(d){ return parseInt(d.q.slice(0, 4), 10) >= era.from; });
    var capeNow = valRow("cape").meter.value, buffNow = valRow("buffett").meter.value;
    // Both long series are carried to TODAY before anything draws them, so every page's line finishes on the number
    // printed above it (Version 255). Neither point is invented: the power composite for this year is stressScoreFor()
    // run on this year's three markers — the same call the row makes — and CAPE's is the published Sep 17 reading
    // replacing a January one the year has already left behind. Everything earlier keeps its own convention.
    if (powerHistory[powerHistory.length - 1].y < calendarTodayY) powerHistory.push({ y:calendarTodayY, v:powerScore });
    var capeLast = capeHistory[capeHistory.length - 1];
    if (capeLast.y === calendarTodayY) capeLast.v = capeNow; else capeHistory.push({ y:calendarTodayY, v:capeNow });
    host.innerHTML =
      peekCard({ kicker:"Temperature", mark:thermoSvg(), value:r.cpiNow.toFixed(1) + "%", unit:"CPI, YoY",
                 word:cpiWord + " \u00b7 " + cpiDir, state:heatStep(r.cpiNow),
                 target:"sheet-metric-temp", cols:nowModel.cpi.map(function(d){ return d.v; }),
                 colClass:function(v){ return "temp-col " + heatStep(v); } }) +
      peekCard({ kicker:"Growth", mark:sproutSvg(), value:(r.gdpLatest.v >= 0 ? "+" : "") + r.gdpLatest.v.toFixed(1) + "%", unit:"YoY",
                 word:growthShownCap(r.regime), state:phaseClass(r.regime),
                 // a true miniature of its own page (Version 261): the same quarterRegime() the chart reads, so the
                 // two cannot show different pictures of one cycle
                 target:"sheet-metric-gdp", cols:gq.map(function(d){ return d.v; }),
                 colClass:function(v, i){
                   return "gdp-col " + (v < 0 ? "below" : quarterRegime(gq[i]) === "contraction" ? "neg" : "pos");
                 } }) +
      // Economic power and Valuation can carry a line as of Version 255, because the series behind them now exists.
      // The power line is keyed by year (xs) rather than by position. That was originally because Gallup skipped
      // 1980, 1982 and 1992 and the composite could not be formed for them; since Version 392 the series has no
      // gaps at all, and the keying stays because a year-keyed series cannot silently close one if a gap returns.
      // Version 353, Keren: "in the power page, change the title to economic power." The card keeps the short
      // noun Version 304 gave it \u2014 four tiles in a grid, and "Economic power" wraps where "Power" does not \u2014
      // while the page it opens takes the full name back.
      peekCard({ kicker:"Power", title:"Economic power", mark:boltSvg(), value:powerScore + "%",
                 unit:"reserve", word:powerWord.word,
                 state:powerWord.state, target:"sheet-metric-power", ring:powerScore }) +
      // a miniature of its own diverging page (Version 262): bars out of the 17\u00d7 fair line, both ways
      peekCard({ kicker:"Valuations",
                 mark:diamondSvg(),
                 value:capeNow.toFixed(1) + "\u00d7", unit:"CAPE", word:valuation.tag.text,
                 state:valuation.tag.state, target:"sheet-metric-valuation",
                 cols:capeHistory.map(function(d){ return d.v; }), colBase:CAPE_FAIR,
                 colClass:function(v){ return "dv-bar " + (v > CAPE_FAIR ? "over" : "under"); } }) +
      // Households (Version 460). Two numbers in one row, the way Pressure carries 10Y and 3M: the bill and
      // what is left, on the same denominator, so the reader gets the pair at a glance and the page explains it.
      // Version 463, Keren: "debt service is too general — there is government debt service and household debt
      // service." Right, and the name was under-describing it twice over: the row carries what is PAID and what is
      // KEPT, and only saving answers to nobody. Households is what the page is about.
      peekCard({ kicker:"Households",
                 mark:houseSvg(),
                 value:dsrNow.toFixed(1) + "/" + savNow.toFixed(1), unit:"% paid / kept",
                 word:householdsNow.word, state:householdsNow.state, target:"sheet-metric-households",
                 cols:savHistory.slice(SAV_OFFSET), colBase:0,
                 colClass:function(){ return "hh-col"; } }) +
      "";

    // Effort and Pulse are cards, but not headline cards (Version 292, Keren: "put Effort and Pulse under
    // Sentiment"). The top grid is the four readings the whole board is about; these two are coincident signs, so
    // they belong down among the signs — as a pair of cards rather than two full-width rows, which is what makes
    // them comparable with each other at a glance. Same component, same grid, a different place in the page.
    // The unit is named short (ISM PMI, M2 velocity) so nothing wraps: a row of cards has one height.
    (function(){
      var pair = [["Pulse", "M2 velocity"], ["Volume", "M2, YoY"]].map(function(p){
        var ind = coincident.filter(function(x){ return x.bodyTerm === p[0]; })[0];
        if (!ind) return "";
        var art = p[0] === "Pulse"
          ? { pulse:{ rate:ind.meter.value, ref:PULSE_PRE2008 } }   // the one reading whose unit is a frequency
          : p[0] === "Volume"
          ? { cols:m2Yoy.filter(function(x){ return x != null; }), colBase:0, colRule:true,
              colClass:function(v){ return "m2-col " + m2Step(v); } }
          : { meter:ind.meter };
        var card = { kicker:ind.bodyTerm, value:ind.metric, unit:p[1],
                     mark: signMarks[ind.bodyTerm] ? signMarks[ind.bodyTerm]() : "",
                     word:ind.tag.text, state:ind.tag.state,
                     target:"sheet-sign-" + p[0].toLowerCase() };
        for (var k in art) card[k] = art[k];
        return peekCard(card);
      }).join("");
      if (!pair) return;
      var after = document.getElementById("sheet-sign-sentiment");
      if (!after || !after.parentNode) return;
      var row = document.createElement("div");
      row.className = "peek-row"; row.id = "peek-row-signs";
      row.innerHTML = pair;
      after.parentNode.insertBefore(row, after.nextSibling);

      // Pressure sits with this pair: all three read the circulation, so they are read together. Version 317 put
      // it under them; Version 348 puts it above (Keren: "put pressure above the pulse and volume row") \u2014 the
      // full-width cuff reading first, then the two cards saying what the circulation is doing inside it. Moving
      // the node keeps everything inside it alive \u2014 the curve drawn into #subj-spark-yield, the ids the data
      // block writes to, the row's own open handler \u2014 and its hidden sheet follows it, so every row on this
      // page is still immediately followed by its own page.
      var press = document.querySelector(".sign-row.press-row");
      var pressSheet = document.getElementById("sheet-sign-yield");
      if (press && pressSheet && press.parentNode === row.parentNode){
        row.parentNode.insertBefore(press, row);
        press.parentNode.insertBefore(pressSheet, press.nextSibling);
      }
    })();

    // Version 353, Keren: "in the cycle page, switch positions between sentiment and activity." The two rows
    // live in different containers \u2014 Sentiment among today's readings, Activity in the signs list \u2014 so this is
    // a swap of nodes between parents rather than a reorder inside one. Two comment markers hold the outgoing
    // slots, because the second move would otherwise have nothing left to aim at once the first row has left.
    // Each row's hidden sheet travels with it, so every row on the page is still immediately followed by its
    // own page \u2014 and moving the nodes keeps everything inside them alive (the Version 314 lesson): the mood
    // face on Sentiment's label, the ids the data blocks write to, and both rows' open handlers.
    (function(){
      var sent = document.querySelector('.sign-row[data-open="sheet-sign-sentiment"]');
      var act  = document.querySelector('.sign-row[data-open="sheet-sign-activity"]');
      var sentSheet = document.getElementById("sheet-sign-sentiment");
      var actSheet  = document.getElementById("sheet-sign-activity");
      if (!sent || !act || !sentSheet || !actSheet) return;
      var mSent = document.createComment("sentiment slot"), mAct = document.createComment("activity slot");
      sent.parentNode.insertBefore(mSent, sent);
      act.parentNode.insertBefore(mAct, act);
      mSent.parentNode.insertBefore(act, mSent);
      act.parentNode.insertBefore(actSheet, act.nextSibling);
      mAct.parentNode.insertBefore(sent, mAct);
      sent.parentNode.insertBefore(sentSheet, sent.nextSibling);
      mSent.parentNode.removeChild(mSent);
      mAct.parentNode.removeChild(mAct);
    })();

    /* ================= Version 446: the homepage is Summary + Browse =================
       Keren, copying Apple Health's homepage: "I want to segmentize the KPIs." Her grouping, with two changes she
       took: the box holding temperature and growth is WEATHER rather than Season, because computeSeason() takes
       those two and returns the season — so a box named for the season would make the conclusion a peer of the
       systems that produce it, and the dial above already IS the season; and Power joins Blood rather than
       standing alone, because bank reserves are how much blood the system is holding, and pressure, pulse, volume
       and supply are one circulation measured four ways. Apple Health has no categories of one.
       Then: "for now, drop the pinned components", so the Summary is the dial alone and every reading lives in
       its category. Ten readings, four systems, nothing orphaned.
       The members are MOVED, not rebuilt — the Version 314 lesson, applied here for the fourth time: moving a
       node keeps everything inside it alive, the sparklines already drawn, the ids the data blocks write to, and
       each row's own open handler. Their hidden pages stay exactly where they are, because openMetricPage finds
       a page by id and does not care who its parent is; what makes this work at all is that the app has opened a
       page FROM a page since Version 271, so the back stack already handles two levels. */
    (function(){
      var host = document.getElementById("today-analysis"); if (!host) return;
      var CATS = [
        { key:"weather", title:"Weather", mark:weatherSvg(), sub:"Temperature \u00b7 Growth",
          picks:['.peek[data-open="sheet-metric-temp"]', '.peek[data-open="sheet-metric-gdp"]'] },
        { key:"circulation", title:"Circulation", mark:circulationSvg(), sub:"Pressure \u00b7 Pulse \u00b7 Volume",
          picks:['.sign-row.press-row', '.peek[data-open="sheet-sign-pulse"]',
                 '.peek[data-open="sheet-sign-volume"]'] },
        /* Version 473, Keren: "calling it Horizon and judging if it\u2019s optimistic or pessimistic, which
           correlates with ovulation and menstruation \u2014 so it belongs to Mood." The fourth member, and the one
           that makes this page an argument rather than a list: Valuations is what the market will pay for a
           dollar of earnings, Fear & Greed how frightened it is today, Desire how much risk it craves \u2014 all
           three about NOW \u2014 and Horizon what it expects of the future. Today they disagree, which is the point:
           36 and Fear beside a curve reading optimistic. */
        { key:"mood", title:"Mood", mark:moodSvg(), sub:"Valuations \u00b7 Fear \u00b7 Desire \u00b7 Horizon",
          /* Version 466, Keren: "the VIX is called the fear index \u2014 we don't need two fear meters on the Mood
             page, so put the VIX inside Fear & Greed." Right, and the stronger form of it is that the VIX is one
             of the index's SEVEN COMPONENTS: a part cannot be the peer of its own composite, which is the rule
             that moved Power's markers off this kind of list twice already. Version 464 promoted it out of that
             page; this puts it back, as a reading under the gauge rather than the ring it used to be. */
          picks:['.peek[data-open="sheet-metric-valuation"]', '.sign-row[data-open="sheet-sign-sentiment"]',
                 '.sign-row[data-open="sheet-sign-desire"]', '.sign-row[data-open="sheet-sign-horizon"]'] },
        /* Version 457, Keren: "economic power should move from circulation to activity, and activity should be
           renamed to energy." It settles what Version 446 left uneasy, where Power joined Circulation on the
           argument that reserves are how much blood the system is holding \u2014 true of the metaphor, and the wrong
           cut of the economics. Energy is the honest pair: Power is the reserve she has, Activity is what she is
           spending it on, and the app has read them as one thing since Version 228, where Power's own word comes
           off an energy scale (Energetic, Steady, Tired, Exhausted). It also gives Activity what it lacked as a
           category of one \u2014 a second member, so Energy is a list like the other three rather than a shortcut. */
        /* Version 462, Keren: "we don't need a new category named Load \u2014 stress is connected to energy, so put
           a debt service page inside Energy." Version 460 had split them, and she is right that it was a split of
           one idea: `energyFromReserve()` takes the fiscal STRESS score and inverts it, so Power's word is
           computed FROM the debt markers. A Load category would have shown a verdict in one box and its own
           inputs in another \u2014 the fault Version 446 named when it refused to call this box "Season", because
           the dial already is the season.
           So Energy holds the whole reading: how much is left (Power), what is owed (Debt service), and what
           the energy is going into (Activity's page, absorbed whole as in Version 458). The federal three stay
           on Power's page, where they are computed into its word; Debt service carries the household side,
           which is a balance sheet nothing in the app had measured. */
        { key:"energy", title:"Energy", mark:boltSvg(), sub:"Power \u00b7 Households \u00b7 Activity",
          picks:['.peek[data-open="sheet-metric-power"]', '.peek[data-open="sheet-metric-households"]',
                 '.sign-row[data-open="sheet-sign-activity"]'] }
      ];
      /* Each reading's PERIOD, not a timestamp. Apple Health shows 13:56 because a heart rate is an instant;
         these are periods — CPI is FOR August, M2 velocity for Q2, the curve for Sep 24 — and a clock time in
         the corner would be the compile date on all nine, claiming August's CPI was updated today. Every value
         here is read off the series it labels, so none of them can go stale by being forgotten. */
      function fmtDay(d){ return MONTHS_SHORT[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear(); }
      function qPretty(q){ var p = String(q).split(" "); return p.length > 1 ? p[1] + " " + p[0] : String(q); }
      // where a member already STATES its date, it states it inside the unit — "high-yield OAS, Sep 23 2026" —
      // which is why that line reads as clutter rather than as a timestamp. The corner takes the date and the
      // unit keeps the unit. Taken from what the app already says, never computed for it.
      var DATED_UNIT = /^(.*?),\s*((?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[^,]*|Q[1-4]\s+\d{4})$/;
      var PERIOD = {
        "sheet-metric-temp":      atMonth(cpiYoYHistory[cpiYoYHistory.length - 1]),
        "sheet-metric-gdp":       qPretty(gdpQuarterlyYoY[gdpQuarterlyYoY.length - 1].q),
        "sheet-sign-yield":       fmtDay(DATA_COMPILED),
        "sheet-sign-horizon":     fmtDay(DATA_COMPILED),   // a spot spread, like the pair it is taken from
        "sheet-sign-pulse":       qPretty(qAtIndex(M2V_FROM_YEAR, m2vHistory.length - 1)),
        "sheet-sign-volume":      indPeriod("Volume") || qPretty(qAtIndex(M2_FROM_YEAR, m2Yoy.length - 1)),
        "sheet-metric-power":     String(powerHistory[powerHistory.length - 1].y),
        "sheet-sign-sentiment":   fmtDay(DATA_COMPILED),
        "sheet-metric-valuation": String(capeHistory[capeHistory.length - 1].y),
        "sheet-metric-households": qPretty(qAtIndex(DSR_FROM_YEAR, dsrHistory.length - 1))
      };
      var MINI = {
        "sheet-sign-yield":     ".subject-text svg.vital-ring",       // its curve ring (V469)
        "sheet-sign-sentiment": ".subject-ring > svg"                 // its Fear & Greed ring
      };
      /* Version 448: every peek art carries `.peek-chart` now, so this asks for the thing by name rather than
         by where it happens to sit. The Version 447 version walked from the kicker to its next sibling, which
         worked but would have broken the moment a card gained anything else between the two. */
      function peekArt(src){ return src.querySelector(".peek-chart"); }
      /* Volume's row shows a MONTHLY figure (+5.7%, M2 year over year, Aug 2026) above a QUARTERLY chart, so the
         period has to come from the figure rather than from the series under it — reading the chart's last
         index gave "Q3 2026", which is true of the chart and wrong for the number printed beside it. Taken from
         the indicator's own sub-line, which is where the app already states it. */
      function indPeriod(term){
        var all = coincident.concat(lagging);
        for (var i = 0; i < all.length; i++){
          if (all[i].bodyTerm !== term) continue;
          var m = DATED_UNIT.exec(String(all[i].metricSub || "").trim());
          return m ? m[2] : "";
        }
        return "";
      }
      function catItem(src){
        var open = src.getAttribute("data-open");
        /* Version 473: a snapshot of the source AS AUTHORED, taken before anything moves out of it. This function
           MOVES the figure and the verdict into the new item and then removes the source from the document, so
           anything that reads a row or a card after the categories are built finds nothing there. The roster did
           exactly that — Pressure, Fear & Greed, Growth, Power, Valuations and Households all register from their
           own markup, which by then was gone — and it had been quietly listing six of eleven readings since
           Version 446 without erroring, because a `if (!row) return` reads a missing row as a row to skip. The
           clone is deliberately taken FIRST: one line later the figure has already left. */
        (window.__CAT_SNAP = window.__CAT_SNAP || {})[open] = src.cloneNode(true);
        var item = document.createElement("button");
        item.type = "button"; item.className = "cat-item";
        item.setAttribute("data-open", open);
        item.setAttribute("data-title", src.getAttribute("data-title") || "");
        var head = document.createElement("div"); head.className = "ci-head";
        /* Version 449, Keren, of Desire on the Mood page: "the fire icon is just floating around — it needs
           the same styling as the icon in valuations, grey and refined, without a green background." A peek
           carries its mark as a bare 15px glyph; a sign row carries it as a BADGE — a disc tinted with the
           reading's state — and Version 447 moved whichever it found. Out of its row that badge had no size at
           all (it measured 390×900, the viewport) and it brought its state colour with it, which is the green
           disc. The glyph is what a head wants; it is lifted out and given the peek treatment, so a member
           built from a row and a member built from a card are finally the same object. */
        var markSrc = src.querySelector(".peek-mark, .subject-icon");
        if (markSrc){
          var glyph = markSrc.querySelector("svg");
          var holder = document.createElement("span");
          holder.className = "peek-mark";
          if (glyph) holder.appendChild(glyph);
          head.appendChild(holder);
        }
        var nm = document.createElement("span"); nm.className = "ci-name";
        // Version 353's rule still holds: a card's kicker and its page's title are allowed to differ, and the
        // row is the card's size, not the page's — "Power", not "Economic power".
        var kick = src.querySelector(".peek-kicker");
        nm.textContent = kick ? kick.textContent.replace(/\s+/g, " ").trim()
                              : (src.getAttribute("data-title") || "");
        head.appendChild(nm);
        var body = document.createElement("div"); body.className = "ci-body";
        var read = document.createElement("div"); read.className = "ci-read";
        var val = src.querySelector(".peek-value, .subject-value");
        // the unit gives up its date to the corner, where one is glued on
        var when = PERIOD[open] || "";
        if (val){
          var unit = val.querySelector(".peek-unit, .unit");
          if (unit){
            var m = DATED_UNIT.exec(unit.textContent.trim());
            if (m){ unit.textContent = m[1]; if (!when) when = m[2]; }
          }
          /* Version 504, Keren: "in Mood there are different sizes of fonts \u2014 make sure everything is aligned
             to the same component." The seam was here. This function MOVES the source's own figure element in,
             so a member built from a peek CARD arrived as `.peek-value` (21px figure, 11px unit) and one built
             from a sign ROW as `.subject-value` (20px, 14px). Weather looked right to her because both its
             members are cards; Mood has two of each. The class is normalised on the way in, so what a row looks
             like stops depending on which markup it was lifted out of. Anything else inside it \u2014 a tag, a
             second figure \u2014 keeps its own classes. */
          val.className = "ci-value";
          if (unit) unit.className = "ci-unit";
          read.appendChild(val);
        }
        /* The verdict, wherever the row keeps it. Most members say it in a word element under the figure;
           Sentiment says it INSIDE the value, as a tag after the unit, and its own word element is empty \u2014 so
           without this it took the figure's 28px type on the figure's line, reading "34% \u00b7 Fear & Greed Fear",
           while every other member had a 12.5px word on a line of its own. One shape for all ten. */
        var word = src.querySelector(".peek-word, .subject-say, .subject-verdict");
        if (!word || !word.textContent.trim()){
          var inline = val ? val.querySelector(".tag") : null;
          if (inline) word = inline;
        }
        if (word && word.textContent.trim()){ word.classList.add("ci-word"); read.appendChild(word); }
        body.appendChild(read);
        var mini = MINI[open] ? src.querySelector(MINI[open]) : peekArt(src);
        if (mini){ var slot = document.createElement("div"); slot.className = "ci-mini";
                   slot.appendChild(mini); body.appendChild(slot); }
        var wh = document.createElement("span"); wh.className = "ci-when"; wh.textContent = when;
        head.appendChild(wh);
        var chev = document.createElement("span");
        chev.innerHTML = CHEV;
        head.appendChild(chev.firstChild);
        item.appendChild(head); item.appendChild(body);
        // the card it was built from is empty now, and an empty card is still a card: it stayed on the
        // homepage with its border and its padding, which is what "strays remain" was reporting
        if (src.parentNode) src.parentNode.removeChild(src);
        return item;
      }
      /* ================= Version 452: Volume × Pulse =================
         Keren: "check how the combined insights work — when we talk about blood we can see the correlations."
         Her example was clinical (low pressure with a high pulse suggests low volume), and the reasoning is
         right while that particular mapping is not: our Pressure is the yield curve, a FORECAST, and "flat curve
         plus fast velocity implies a small money stock" is not a relationship anyone could defend. The rule this
         is built on instead: a combination must hold in economics, not only in anatomy — the body is how an
         insight is EXPLAINED, never how it is derived.
         This one is an identity, so it cannot be wrong: M×V = P×Y. Volume IS M, Pulse IS V, and their product
         is nominal demand — which the Pulse page's own caption has said all along. Every figure below is read
         off the series it describes; nothing is asserted that the app cannot check. There is deliberately NO
         state colour: whether money growing and circulating faster is good or bad is a judgement about
         inflation, and this card's job is to say what the two readings are doing together, not to grade it. */
      function insightCirculation(){
        var vel = m2vHistory, n = vel.length;
        if (!vel || n < 5) return "";
        var velChg = (vel[n - 1] / vel[n - 5] - 1) * 100;
        var run = 0;
        for (var i = n - 1; i >= 4; i--){ if (vel[i] / vel[i - 4] > 1) run++; else break; }
        var runFromY = M2V_FROM_YEAR + Math.floor((n - run) / 4);
        var lo = Math.min.apply(null, vel), loI = vel.indexOf(lo);
        var offLow = (vel[n - 1] / lo - 1) * 100;
        var volInd = coincident.concat(lagging).filter(function(x){ return x.bodyTerm === "Volume"; })[0];
        if (!volInd || !volInd.meter) return "";
        var volPct = volInd.meter.value;
        var up = volPct > 0, vup = velChg > 0;
        var name = up && vup  ? "Growing and moving faster"
                 : up && !vup ? "Added faster than it is used"
                 : !up && vup ? "Circulating faster on a smaller stock"
                              : "Draining and slowing";
        var f1 = function(v){ return (v >= 0 ? "+" : "\u2212") + Math.abs(v).toFixed(1) + "%"; };
        var txt = "M2 is " + f1(volPct) + " over the year and each dollar is turning over " +
          f1(velChg).replace("+", "") + " " + (vup ? "more" : "less") + " often than a year ago. " +
          "The two multiply \u2014 Volume \u00d7 Pulse is nominal demand, the money there is times how hard it works \u2014 so " +
          (up === vup ? "both are pushing the same way." : "they are pulling against each other.");
        // the run is only worth saying when it is a run; and the cycle clause only when it is actually true
        if (run >= 8){
          var oc = openCycle();
          txt += " Velocity has risen for " + run + " straight quarters" +
            (oc && runFromY === oc.from ? ", every quarter of this cycle," : ",") +
            " and sits " + offLow.toFixed(0) + "% above its " + (M2V_FROM_YEAR + Math.floor(loI / 4)) + " low.";
        }
        return '<section class="highlights insights"><div class="hi-head">Insights</div>' +
               hiCard(name, "", txt) + '</section>';
      }
      /* ================= Version 468: the barometer =================
         Keren, reading the app's own record: "total growth and total change in prices are equal at the end of each
         cycle, more or less \u2014 I think it can be a good barometer in the weather page." Checked against the five
         cycles before building anything, which changed the shape of it: they do finish close (Big Tech 17.0%
         against 17.2%), but the equality is not the reading \u2014 the GAP is, and it has widened in each of the last
         two cycles. So this card measures the distance between them and says which way it leans.
         Her word, kept: a barometer reads pressure to say which way the weather is going, which is exactly what
         two totals pulling apart do. The card is named for the instrument rather than for its verdict, unlike
         Circulation's, because the instrument is the point she asked for.
         Nothing here is typed. Both totals use the page's OWN methods \u2014 totalGrowthYears compounds the annual
         real-GDP rates, totalRiseIn compounds the Decembers \u2014 so the figures are the same ones the Growth and
         Temperature pages print, over the same closed years, and the ranking across cycles is computed from them.
         It carries no state colour, for the reason Version 452 gave: whether prices outrunning output is good is a
         judgement about what comes next, and this card's job is to say what the two are doing together. */
      function insightWeather(){
        var rows = marketCycles.map(function(c){
          var to = c.to || calendarTodayY;
          var g = totalGrowthYears(c.from, to);
          var sp = cycleSlice(cpiYoYHistory, c);
          var p = sp ? totalRiseIn(cpiYoYHistory.slice(sp[0], sp[1])) : null;
          if (!g || !p) return null;
          return { name:c.name, from:c.from, closed:!c.ongoing, g:g.total, p:p.total, gap:p.total - g.total };
        }).filter(Boolean);
        if (rows.length < 3) return "";
        var now = rows[rows.length - 1];
        var past = rows.slice(0, -1);
        if (!past.length) return "";
        var f1 = function(v){ return v.toFixed(1) + "%"; };
        var absGap = function(r){ return Math.abs(r.gap); };
        var tightest = past.reduce(function(a, b){ return absGap(b) < absGap(a) ? b : a; });
        var widest = rows.reduce(function(a, b){ return absGap(b) > absGap(a) ? b : a; });
        /* One band decides both the word and the run, so they can never disagree. It matters: counted at gap > 0
           the Big Tech cycle's 0.2 points reads as "prices ahead" and the run comes out at four, which dresses up
           noise as a trend. A gap inside the band is the two keeping pace, and that is where a run ends. */
        var GAP_BAND = 1.5;
        var run = 0;
        for (var i = rows.length - 1; i >= 0; i--){ if (rows[i].gap > GAP_BAND) run++; else break; }
        var ORD = ["", "", "second", "third", "fourth", "fifth", "sixth"];
        var NUM = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
        var spell = function(n){ return NUM[n] || String(n); };
        var lead = now.gap > GAP_BAND ? "Prices are running ahead of output"
                 : now.gap < -GAP_BAND ? "The economy is growing into its prices"
                                       : "Prices and output are keeping pace";
        var txt = lead + ". Since " + now.from + " prices are up " + f1(now.p) + " and the economy is up " +
          f1(now.g) + " \u2014 " + absGap(now).toFixed(1) + " points apart. Over a whole cycle these two normally " +
          "finish close together: the " + spell(past.length) + " closed cycles since " + rows[0].from + " came in " +
          past.map(function(r){ return absGap(r).toFixed(1); }).join(", ") + " points apart, the " + tightest.name +
          " almost exactly level at " + f1(tightest.g) + " against " + f1(tightest.p) + ".";
        if (widest === now)
          txt += " This is the widest gap in the record, and " +
            (run > 1 ? "the " + (ORD[run] || run + "th") + " cycle running with prices ahead" : "prices are ahead") +
            " \u2014 the economy costing more faster than it is growing bigger.";
        else
          txt += " Today's " + absGap(now).toFixed(1) + " points sits inside that range.";
        return '<section class="highlights insights"><div class="hi-head">Insights</div>' +
               hiCard("The barometer", "", txt) + '</section>';
      }
      var list = document.createElement("div"); list.className = "browse-list";
      CATS.forEach(function(c){
        if (c.picks){
          var sheet = document.createElement("div");
          sheet.className = "metric-sheet"; sheet.id = "sheet-cat-" + c.key; sheet.hidden = true;
          var items = document.createElement("div"); items.className = "cat-list";
          c.picks.forEach(function(sel){
            var el = document.querySelector(sel); if (!el) return;
            items.appendChild(catItem(el));
          });
          sheet.appendChild(items);
          if (c.key === "circulation" || c.key === "weather"){
            var tog = c.key === "weather" ? insightWeather() : insightCirculation();
            if (tog) sheet.insertAdjacentHTML("beforeend", tog);
          }
          host.appendChild(sheet);
        }
        if (c.drop){ var old = document.querySelector(c.drop); if (old && old.parentNode) old.parentNode.removeChild(old); }
        var row = document.createElement("div");
        row.className = "subject sign-row cat-row";
        row.setAttribute("role", "button"); row.tabIndex = 0;
        row.setAttribute("data-open", c.open || ("sheet-cat-" + c.key));
        row.setAttribute("data-title", c.title);
        row.innerHTML =
          '<div class="subject-summary">' +
            '<div class="subject-ring"><div class="subject-icon"><span class="norm">' + c.mark + '</span></div></div>' +
            '<div class="subject-text">' +
              '<div class="subject-label">' + c.title + '</div>' +
              '<div class="cat-sub">' + c.sub + '</div>' +
            '</div>' +
            '<div class="subject-more"><span class="subject-chev" aria-hidden="true"></span></div>' +
          '</div>';
        list.appendChild(row);
      });
      var allRow = document.createElement("div");
      // V501: not `cat-row` — this is not a category, and the class it wore was the reason it looked like one
      allRow.className = "subject sign-row all-row";
      allRow.setAttribute("role", "button"); allRow.tabIndex = 0;
      allRow.setAttribute("data-open", "sheet-indicators");
      allRow.setAttribute("data-title", "All indicators");
      allRow.innerHTML =
        '<div class="subject-summary">' +
          '<div class="subject-ring"><div class="subject-icon"><span class="norm">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" ' +
            'stroke-linecap="round" aria-hidden="true"><path d="M4 6.5h0.6"/><path d="M9 6.5h11"/>' +
            '<path d="M4 12h0.6"/><path d="M9 12h11"/><path d="M4 17.5h0.6"/><path d="M9 17.5h11"/></svg>' +
          '</span></div></div>' +
          '<div class="subject-text">' +
            // V501, Keren: the members line went. It was what made this read as a fifth category \u2014 the four
            // above it list their members because a member is a place you can go; these four words are a
            // taxonomy, and the page behind this row explains it better than a subtitle can.
            '<div class="subject-label">All indicators</div>' +
          '</div>' +
          '<div class="subject-more"><span class="subject-chev" aria-hidden="true"></span></div>' +
        '</div>';
      list.appendChild(allRow);
      host.insertBefore(list, host.firstChild);
      // whatever the moves emptied gives up its place rather than its gap
      ["peek-row", "peek-row-signs", "signs-list"].forEach(function(id){
        var el = document.getElementById(id);
        if (el && !el.querySelector("*") && el.parentNode) el.parentNode.removeChild(el);
      });
    })();

    // ---------------- The inner pages: a chart where there is one to draw, then Highlights ----------------
    var pct0 = function(v){ return Math.round(v) + "%"; }, pct1 = function(v){ return v.toFixed(1) + "%"; };
    var capeFmt1 = function(v){ return v.toFixed(1) + "\u00d7"; };

    // The subtitle went with the title: "three structural markers, each against its own record" is exactly what the
    // Power supply bar below already shows, marker by marker, against each one's own range (Keren: "this is basically
    // the power supply bar, so we can remove it from the top of the page").
    // Version 360, Keren: "drop the battery indicator." It was the last page head left in the app and the only
    // unboxed block on this page — but boxing it was never the fix, because almost everything it said was said
    // again below it. Measured before the cut: **25% appeared four times** on one screen (here, the chart’s own
    // corner label, the markers table’s lead row, and that row’s meter) and **Exhausted twice**. The gauge was
    // the one thing here that was not a duplicate, and it duplicated the CHART instead: 20 segments of "now"
    // sitting directly above 48 bars of the same reading year by year. Nothing is lost — the figure is on the
    // chart and in the table, the word is on the trend row and in the table, and "4 flagged" is in the context
    // line under the table. The same cut Valuations took in Version 274 and Temperature in Version 298; this
    // page was the last one still carrying a head.
    document.getElementById("power-head").innerHTML = "";
    // Valuations has no gauge, so its figure sat alone above a chart whose own end label already states it \u2014 the
    // duplication Keren reported. The page opens on the chart; the verdict moved to the trend row (Version 274).
    document.getElementById("valuation-head").innerHTML = "";

    // the bands energyFromReserve() already uses, so a bar's colour and the word beside the figure cannot disagree
    function reserveState(v){ return v >= 70 ? "good" : v >= 50 ? "warning" : v >= 30 ? "serious" : "critical"; }
    // What each page offers the ruler (Version 363). This is the whole of the per-page configuration: the stop
    // ORDER, the labels, which stops are answerable and what a window means all live in the timeline component itself.
    //
    // Temperature and Growth stop at "This cycle" and "Cycles" on purpose. Their charts are drawn by
    // drawTemperature()/drawGrowth(), which are cycle-scoped and SHARED WITH THE CALENDAR's cycle view; giving them
    // a 10Y or 25Y window means rewriting that shared machinery, which the app's own rule forbids doing casually.
    // The control is the same component on all five pages; only the stops differ, which is the point of a component.
    // "cycles" left every one of these in Version 366: the timeline is now windows on one series and nothing else,
    // which is why Temperature's timeline disappears entirely \u2014 one stop is not a choice. The cross-cycle comparison
    // lives in the cycle average component under each page's Highlights.
    // Version 373: Temperature's history joins, with the same four windows Growth and Economic power carry.
    // 50Y is not answerable on a series that starts in 1989, and the timeline drops it without being told.
    // Version 418: "This cycle" leaves the ruler. The two submenus now divide cleanly \u2014 Years answers "how much
    // calendar time", Cycles answers "which cycles" \u2014 and a stop that meant a cycle sitting inside the years ruler
    // was the last of the category confusion Version 366 was worried about. 5Y returns on its own, because
    // timelineFor only withholds it from a page that offers "This cycle", and this page no longer does.
    var TEMP_STOPS  = ["5y", "10y", "25y", "max"];
    // Version 372, Keren: "drop the this cycle and year on year, add 5Y". Growth's timeline is now four windows
    // and nothing else \u2014 the same four Economic power carries, one row at every width, one kind of thing.
    // 5Y returns because the timeline only withholds it where "This cycle" is offered, and that stop is gone.
    // The cycle card it used to show still exists and is still the Calendar's; it is simply no longer on this page,
    // which also takes the country selector with it \u2014 that selector drives the CYCLE chart, and the peer series
    // are per-cycle, so it has nothing to drive beside a 39-year history. It keeps working on the Cycle tab.
    // "Year on year" is gone as a stop, but yoyPairs()/pairChart() and the branch below are deliberately left
    // standing: re-adding "yoy" to this array is all it takes to bring it back.
    var GDP_STOPS   = ["5y", "10y", "25y", "max"];   // V431: "Current cycle" moves to the Cycles tab, as on Temperature
    var POWER_STOPS = ["5y", "10y", "25y", "max"];   // V433: "Current cycle" moves to the Cycles tab     // 1948 \u2014 deep enough for 50Y since Version 393
    var VAL_STOPS   = ["5y", "10y", "25y", "max"];   // V433: likewise     // 1970 \u2014 all five answerable
    var DEF_STOPS   = ["5y", "10y", "25y", "max"];   // V435: "Current cycle" moves to the Cycles tab             // 1946

    function qShort(q){ return q.slice(5) + " \u2019" + q.slice(2, 4); }   // "2026 Q2" -> "Q2 ’26"
    // the last four quarters, each with the quarter a year before it and the rate that falls out of the division
    function yoyPairs(levels, count){
      var out = [];
      for (var i = levels.length - count; i < levels.length; i++){
        if (i < 4) continue;
        var now = levels[i], was = levels[i - 4];
        out.push({ label:qShort(now.q), wasLabel:qShort(was.q), was:was.v, now:now.v,
                   pct:(now.v / was.v - 1) * 100 });
      }
      return out;
    }

    sheetRenderers["sheet-metric-temp"] = function(W){
      var r = pageRange["sheet-metric-temp"], cyclesOn = pageMode["sheet-metric-temp"] === "cycles";
      // the ruler is absent in Cycles mode rather than disabled: there is no window to choose when the x-axis is
      // the cycle's own age, and a dead control is worse than no control (the Version 366 rule, applied here)
      // the mode bar on top, its own submenu under it: Cycles picks cycles, Years picks a window
      document.getElementById("temp-rangebar").innerHTML =
        histControls("sheet-metric-temp", { series:cpiYoYHistory, stops:TEMP_STOPS });
      document.getElementById("temp-head").innerHTML = histHead("sheet-metric-temp");   // V519
      document.getElementById("slot-temp").hidden = true;   // the cycle card lives on the Cycle tab now (V373)
      var hist = document.getElementById("temp-history"); hist.hidden = false;
      var win, cyc = null;
      if (cyclesOn){
        cyc = cycleByName(pageCycles["sheet-metric-temp"]) || openCycle();
        var span = cycleMonths(cyc);
        win = span ? cpiYoYHistory.slice(span[0], span[1]) : [];
        hist.innerHTML = cpiHistoryChart(hist.clientWidth || W, span ? span[0] : 0,
                                         { to:span ? span[1] : undefined, cycle:true });
        hist.__geom = lastHistGeom;          // same chart, so the same crosshair works unchanged
        wireHistHover(hist, "temp-hist-tooltip");
        document.getElementById("temp-trend").innerHTML =
          trendPill(trendOf(win.map(function(d){ return d.v; }), "points", "month"), null, true,
                    { rising:"heating", falling:"cooling" });
      } else {
        var from = mWindowFrom(cpiYoYHistory.length, r); win = cpiYoYHistory.slice(from);
        hist.innerHTML = cpiHistoryChart(hist.clientWidth || W, from);
        hist.__geom = lastHistGeom;
        wireHistHover(hist, "temp-hist-tooltip");
        // the fit is over the months IN VIEW, so the pill and the picture can never describe different stretches
        document.getElementById("temp-trend").innerHTML =
          trendPill(trendOf(win.map(function(d){ return d.v; }), "points", "month"), null, true,
                    { rising:"heating", falling:"cooling" });
      }
      // Version 423, Keren: "make all the data be relevant to the chosen timeline \u2014 the data should be updated
      // below the chart." This reverses the Version 359 rule on THIS page, and reverses it deliberately: that rule
      // said the chart is the view and the rows are the record, which is right when the rows are the only place a
      // record is stated. Here the reader is choosing a window on a control two lines above, and a row that ignored
      // the choice read as a bug rather than as a principle. So hottest, coldest, latest and the total all describe
      // the months on screen \u2014 which is also why "on record" left the labels: it would be a small untruth in every
      // window but Max. The average row went entirely, because the average is now ON the chart in every window.
      var tri = totalRiseIn(win);
        // Version 494, Keren: "total price change 16% — in the Highlights component." The NAME is the
        // considered part and travels with the figure: the BLS's own primary descriptor for what the CPI
        // measures is "price change", direction-neutral by design, because inflation and deflation are the
        // directional pair and neither can label a figure that may be either — quite apart from Inflation
        // being a season here. ("Cost of living" is warmer but the BLS cautions the CPI "differs in important
        // ways" from one; "change in the price level" is the textbook phrase and is jargon here.) Version 429
        // cut it to "Total" because the page was named Temperature two lines above; in Highlights it is a row
        // among sentences, so the full name comes back — which is what Keren asked for.
        totalStat("temp-total", "Total price change", tri ? fmtSigned(tri.total, 0) + "%" : null);
    };
    sheetRenderers["sheet-metric-gdp"] = function(W){
      var r = pageRange["sheet-metric-gdp"], yoy = r === "yoy";
      var cyclesOn = pageMode["sheet-metric-gdp"] === "cycles";
      document.getElementById("gdp-rangebar").innerHTML =
        histControls("sheet-metric-gdp", { series:gdpQuarterlyYoY, stops:GDP_STOPS });
      document.getElementById("gdp-head").innerHTML = histHead("sheet-metric-gdp");   // V519
      document.getElementById("slot-growth").hidden = true;   // the cycle card lives on the Cycle tab now (V372)
      // V492: the reading is the latest quarter, not the window's, so it is set once and every branch below
      // leaves it alone — including the one that returns early.
      var gp = document.getElementById("gdp-panel");
      if (gp && !gp.firstChild) gp.innerHTML = growthPanelHtml();
      var hist = document.getElementById("gdp-history"); hist.hidden = yoy;
      var box = document.getElementById("gdp-yoy"); box.hidden = !yoy;
      if (!yoy){
        var gCyc = cyclesOn ? (cycleByName(pageCycles["sheet-metric-gdp"]) || openCycle()) : null;
        var gSpan = gCyc ? cycleSlice(gdpQuarterlyYoY, gCyc) : null;
        var gFrom = gSpan ? gSpan[0] : qWindowFrom(gdpQuarterlyYoY.length, r);
        var gTo = gSpan ? gSpan[1] : undefined;
        var win = gdpQuarterlyYoY.slice(gFrom, gTo);
        hist.innerHTML = gdpHistoryChart(hist.clientWidth || W, gFrom, { to:gTo, cycle:!!gSpan });
        hist.__geom = lastHistGeom;
        wireHistHover(hist, "gdp-hist-tooltip");
        // Version 431: the rows describe the window, exactly as Temperature's do since Version 423
        var gy0 = yearOf(win[0]), gy1 = yearOf(win[win.length - 1]), gt = totalGrowthYears(gy0, gy1);
        // Version 494, Keren: "total growth 11% — in the Highlights component." The one figure this page's
        // register had been reduced to, said as a fact row where the words around it are.
        totalStat("gdp-total", "Total growth", gt ? fmtSigned(gt.total, 0) + "%" : null);
        document.getElementById("gdp-trend").innerHTML =
          trendPill(trendOf(win.map(function(d){ return d.v; }), "points", "quarter"), null, true,
                    { rising:"quickening", falling:"slowing" });
        return;
      }
      if (yoy){
        var pairs = yoyPairs(gdpLevels, 4), last = pairs[pairs.length - 1];
        box.innerHTML = pairChart({
          pairs:pairs, unit:"real GDP, chained 2017 dollars",
          alt:"The four latest quarters of real GDP, each joined to the same quarter a year earlier; the gap between the two is that quarter\u2019s year-over-year growth"
        }, W);
        document.getElementById("gdp-trend").innerHTML =
          trendPill({ word:fmtSigned(last.pct, 1) + "% this quarter",
                      detail:last.label.replace("\u2019", "20") + " measured against " + last.wasLabel.replace("\u2019", "20") }, "Year on year");
      } else {
        var eraQ = gdpQuarterlyYoY.filter(function(d){ return parseInt(d.q.slice(0, 4), 10) >= currentEra.from; });
        document.getElementById("gdp-trend").innerHTML =
          trendPill(trendOf(eraQ.map(function(d){ return d.v; }), "points", "quarter"), null, false,
                    { rising:"quickening", falling:"slowing" });
      }
    };

    /* Version 498: Activity's history. The window helpers here are generic rather than borrowed \u2014 `cycleMonths`
       is written against cpiYoYHistory, which starts in 1989, and this series starts in 1948, so a cycle's month
       indices have to be computed from THIS series' own first month. */
    var ACT_STOPS = ["5y", "10y", "25y", "max"];
    function actCycleMonths(c){
      var to = c.to || calendarTodayY, a = -1, b = -1;
      unempHistory.forEach(function(d, i){
        var y = parseInt(d.m.slice(0, 4), 10);
        if (y >= c.from && y <= to){ if (a === -1) a = i; b = i + 1; }
      });
      return a === -1 ? null : [a, b];
    }
    sheetRenderers["sheet-sign-activity"] = function(W){
      var id = "sheet-sign-activity", bar = document.getElementById("act-rangebar");
      if (!bar) return;
      bar.innerHTML = histControls(id, { series:unempHistory, stops:ACT_STOPS });
      var hist = document.getElementById("act-history"); if (!hist) return;
      var cyc = pageMode[id] === "cycles" ? (cycleByName(pageCycles[id]) || openCycle()) : null;
      var span = cyc ? actCycleMonths(cyc) : null;
      var from = span ? span[0] : mWindowFrom(unempHistory.length, pageRange[id]);
      var to = span ? span[1] : undefined;
      hist.innerHTML = unempHistoryChart(hist.clientWidth || W, from, { to:to, cycle:!!span });
      hist.__geom = lastHistGeom;
      wireHistHover(hist, "act-hist-tooltip");
      var win = unempHistory.slice(from, to).filter(function(d){ return d.v != null; });
      var tr = document.getElementById("act-trend");
      // the pair of words is the labour market's own, not a chart's: unemployment RISES as the market loosens
      if (tr) tr.innerHTML = trendPill(trendOf(win.map(function(d){ return d.v; }), "points", "month"), null, true,
                                       { rising:"loosening", falling:"tightening" });
    };
    sheetRenderers["sheet-metric-power"] = function(W){
      var r = pageRange["sheet-metric-power"], pwCycles = pageMode["sheet-metric-power"] === "cycles";
      var pwCyc = pwCycles ? (cycleByName(pageCycles["sheet-metric-power"]) || openCycle()) : null;
      var pwSpan = pwCyc ? cycleSlice(powerHistory, pwCyc) : null;
      var vals = pwSpan ? powerHistory.slice(pwSpan[0], pwSpan[1]) : timelineWindow(powerHistory, r);
      var powerTrend = trendOf(vals.map(function(d){ return d.v; }), "points", "year");
      document.getElementById("power-chart").innerHTML =
        '<div class="hist-bar">' + histControls("sheet-metric-power", { series:powerHistory, stops:POWER_STOPS }) + '</div>' +
        '<div class="page-chart">' + histHead("sheet-metric-power") +
        reserveChart({
          vals:vals, stateOf:reserveState, fmt:pct0, ref:70, refLabel:"ample reserve, 70%",
          fit:powerTrend.fit,
          alt:"Power, the three-marker composite, one charge per year" +
              (r === "max" ? " since " + powerHistory[0].y : " over the last " + timelineSpan(r) + " years") +
              ", with the fitted trend across the readings in view"
        }, W) +
        // Version 439, Keren: the caption goes — the Power supply explanation below the chart already says this,
        // and a line repeating it above the figures is the page telling the reader twice.
        // (Version 396's colour legend retired in Version 397 — the y axis now says what the bands are.)
        // V436, Keren: "the exhausted is in a bubble \u2014 it's not consistent, in temperature you just write Trend."
        // The tag was this page saying its verdict twice, since the battery above already carries that word.
        trendPill(powerTrend, null, true) +
        // V491, Keren: the readings come inside, below the trend. Four of them, so hairlines rather than four
        // boxes (the V488 rule); one reading in a history container still gets the box, as Temperature has.
        '<div class="panel-stack in-hist">' + powerPanelHtml + '</div>' +
        '<div class="gdp-tooltip mono hist-tip" id="power-hist-tooltip" hidden></div></div>';
      var pBox = document.querySelector("#power-chart .page-chart");
      refitHistory(pBox, function(w){
        return reserveChart({ vals:vals, stateOf:reserveState, fmt:pct0, ref:70, refLabel:"ample reserve, 70%",
                              fit:powerTrend.fit, alt:"Power supply, one charge per year" }, w);
      });
      if (pBox){ pBox.__geom = lastHistGeom; wireHistHover(pBox, "power-hist-tooltip"); }
    };
    // The deficit's page (Version 360, Keren: "the federal budget deficit needs to be expandable from the
    // deficit rate in the power supply component"). As a second container on the Economic power page it took
    // 27% of that page’s height for one of three markers, and it sat between the composite’s chart and the three
    // markers that make it — interrupting the one argument the page exists to carry.
    sheetRenderers["sheet-marker-deficit"] = function(W){
      var sheet = document.getElementById("sheet-marker-deficit"); if (!sheet) return;
      if (!sheet.firstChild) sheet.innerHTML = deficitBlock();
      sheetRenderers["deficit-range"](W);
    };
    // The deficit block's zoom. It measures its OWN host rather than trusting the width the shared range
    // handler passes (that one is the page's width, and this chart sits inside a padded card).
    sheetRenderers["deficit-range"] = function(W){
      var host = document.getElementById("deficit-record"); if (!host) return;
      var key = pageRange["deficit-range"], defCycles = pageMode["deficit-range"] === "cycles";
      var defCyc = defCycles ? (cycleByName(pageCycles["deficit-range"]) || openCycle()) : null;
      // FY figures are one per year from DEF_FROM_YEAR, so a cycle is a plain index range
      var defIdx = defCyc ? [Math.max(0, defCyc.from - DEF_FROM_YEAR),
                             Math.min(deficitHistory.length, (defCyc.to || calendarTodayY) - DEF_FROM_YEAR + 1)] : null;
      var from = defIdx ? defIdx[0] : defFrom(key), defTo = defIdx ? defIdx[1] : undefined;
      var bar = document.getElementById("deficit-rangebar");
      if (bar) bar.innerHTML = histControls("deficit-range",
        { depth:deficitHistory.length, stops:DEF_STOPS });
      host.innerHTML = deficitChart(host.clientWidth || W, from, defTo);
      var defRows = document.getElementById("deficit-records");
      if (defRows) defRows.innerHTML = "";   // V489: the register went; the readout carries the average
      host.__geom = lastHistGeom;
      wireHistHover(host, "deficit-hist-tooltip");
      var dTrend = document.getElementById("deficit-trend");
      if (dTrend) dTrend.innerHTML = trendPill(
        trendOf(deficitHistory.slice(from, defTo), "points", "year"), null, true,
        { rising:"improving", falling:"widening" });
    };
    /* Households (Version 460). The same six pieces every history on this app has \u2014 the controls, the chart,
       the unit line, the record rows, the trend pill, the tooltip \u2014 so a reader arriving from any other page
       already knows how to read it. The rows follow the BILL, because that is the reading the row is named
       for; the pill follows what is KEPT, because that is the line that is moving, and it says so in its own
       words rather than borrowing "rising" and "falling" from a chart that has two directions in it. */
    var HH_STOPS = ["5y", "10y", "max"];   // the series is 21 years deep, so 25Y is unanswerable (the V263 rule)
    sheetRenderers["sheet-metric-households"] = function(W){
      var id = "sheet-metric-households";
      var hhCyc = pageMode[id] === "cycles" ? (cycleByName(pageCycles[id]) || openCycle()) : null;
      if (hhCyc && hhCyc.from < DSR_FROM_YEAR) hhCyc = openCycle();   // the V435 rule: never offer a window the data cannot fill
      var idx = hhCyc ? cycleQtrIdx(DSR_FROM_YEAR, hhCyc, dsrHistory.length) : null;
      var from = idx ? idx[0] : qWindowFrom(dsrHistory.length, pageRange[id]);
      var to = idx ? idx[1] : dsrHistory.length;
      var host = document.getElementById("households-chart"); if (!host) return;
      host.innerHTML =
        '<div class="hist-bar">' + histControls(id, { depth:Math.floor(dsrHistory.length / 4), stops:HH_STOPS }, DSR_FROM_YEAR) + '</div>' +
        '<div class="page-chart">' + histHead(id) +
        householdsChart(W, from, to) +
        trendPill(trendOf(savHistory.slice(SAV_OFFSET + from, SAV_OFFSET + to), "points", "quarter"),
                  "Saving", true, { rising:"keeping more", falling:"keeping less" }) +
        // V492: two readings, so hairlines rather than two boxes (the V488 rule). The bill first because the
        // chart draws it first, and the cushion second because it is the one that sets the page's word.
        '<div class="panel-stack in-hist">' + householdsPanelHtml() + '</div>' +
        '<div class="gdp-tooltip mono hist-tip" id="households-hist-tooltip" hidden></div></div>';
      var box = host.querySelector(".page-chart");
      refitHistory(box, function(w){ return householdsChart(w, from, to); });
      if (box){ box.__geom = lastHistGeom; wireHistHover(box, "households-hist-tooltip"); }
      var hl = document.getElementById("households-highlights");
      if (hl) hl.innerHTML = householdsHighlights();
    };
    /* Two cards, one for each line, and every figure in them is read off the series it describes \u2014 including
       the count, which is the whole point of carrying the saving rate back to 1947. */
    function householdsHighlights(){
      var peak = Math.max.apply(null, dsrHistory), peakAt = qAtIndex(DSR_FROM_YEAR, dsrHistory.indexOf(peak));
      var offPeak = (1 - dsrNow / peak) * 100;
      var lower = savHistory.map(function(v, i){ return { v:v, i:i }; })
                            .filter(function(d){ return d.v <= savNow && d.i < savHistory.length - 1; });
      var run = lower.filter(function(d){ var y = SAV_FROM_YEAR + Math.floor(d.i / 4); return y >= 2005 && y <= 2008; });
      var years = SAV_FROM_YEAR + Math.floor((savHistory.length - 1) / 4) - SAV_FROM_YEAR;
      var billTxt = "Households pay " + dsrNow.toFixed(1) + "% of what they take home to service debt, against " +
        DSR_MEAN.toFixed(1) + "% on average since " + DSR_FROM_YEAR + " and a peak of " + peak.toFixed(1) +
        "% in " + peakAt + " \u2014 " + offPeak.toFixed(0) + "% below it, and flat for two years. By the bill alone " +
        "this is the lighter half of the story.";
      var keptTxt = "What is left over is " + savNow.toFixed(1) + "% of income. Only " + lower.length +
        " quarters in the " + years + " years since " + SAV_FROM_YEAR + " have been lower, and " + run.length +
        " of them ran from 2005 to early 2008. The bill is not the strain here; the cushion is.";
      return highlightsHtml([hiCard("The bill", "", billTxt), hiCard("The cushion", householdsNow.state, keptTxt)]);
    }
    sheetRenderers["sheet-metric-valuation"] = function(W){
      var r = pageRange["sheet-metric-valuation"], vlCycles = pageMode["sheet-metric-valuation"] === "cycles";
      var vlCyc = vlCycles ? (cycleByName(pageCycles["sheet-metric-valuation"]) || openCycle()) : null;
      var vlSpan = vlCyc ? cycleSlice(capeHistory, vlCyc) : null;
      var vals = vlSpan ? capeHistory.slice(vlSpan[0], vlSpan[1]) : timelineWindow(capeHistory, r);
      var capeTrend = trendOf(vals.map(function(d){ return d.v; }), "\u00d7", "year");
      document.getElementById("valuation-chart").innerHTML =
        '<div class="hist-bar">' + histControls("sheet-metric-valuation", { series:capeHistory, stops:VAL_STOPS }) + '</div>' +
        '<div class="page-chart">' + histHead("sheet-metric-valuation") +
        divergeChart({
          vals:vals, mid:CAPE_FAIR, midLabel:"fair value, " + CAPE_FAIR + "\u00d7", fmt:capeFmt1,
          // the axis ticks are round by construction, so "40\u00d7" rather than the reading's "40.0\u00d7"
          tickFmt:function(v){ return v + "\u00d7"; },
          fit:capeTrend.fit,
          alt:"Shiller CAPE against its long-run fair value, each January" +
              (r === "max" ? " since " + capeHistory[0].y : " of the last " + timelineSpan(r) + " years") +
              ", with the fitted trend across the readings in view"
        }, W) +
        // V433: the rows follow the window. The Version 416 worry \u2014 that a short average makes a near-record
        // valuation look ordinary \u2014 is answered by the CHART rather than by this row: the fair-value midline is
        // drawn beside the window's average, so the long reference stays in the picture next to the short one.
        trendPill(capeTrend, null, true) +   // V436: likewise \u2014 the reading's own tag is already on the page
        // V491, Keren: Buffett and CAPE come inside, below the trend (see Power's renderer for the note)
        '<div class="panel-stack in-hist">' + valuationPanelHtml + '</div>' +
        '<div class="gdp-tooltip mono hist-tip" id="valuation-hist-tooltip" hidden></div></div>';
      var vBox = document.querySelector("#valuation-chart .page-chart");
      refitHistory(vBox, function(w){
        return divergeChart({ vals:vals, mid:CAPE_FAIR, midLabel:"fair value, " + CAPE_FAIR + "\u00d7",
                              fmt:capeFmt1, tickFmt:function(v){ return v + "\u00d7"; }, fit:capeTrend.fit,
                              alt:"Shiller CAPE against its long-run fair value, each January" }, w);
      });
      if (vBox){ vBox.__geom = lastHistGeom; wireHistHover(vBox, "valuation-hist-tooltip"); }
    };
    function redrawSheet(id){
      var h = document.getElementById("metric-page"), d = sheetRenderers[id];
      if (d) d(h && h.clientWidth ? h.clientWidth : 340);
    }
    // Version 419: the cycle picker. One listener covers opening, ticking and closing, and the order of the three
    // tests is what makes a click on the menu not also count as a click outside it.
    document.addEventListener("click", function(e){
      if (!e.target.closest) return;
      var sel = e.target.closest(".cycsel"), id = sel && sel.getAttribute("data-cycles-for");
      if (id && e.target.closest("[data-picker-toggle]")){ pickerOpen[id] = !pickerOpen[id]; redrawSheet(id); return; }
      var opt = e.target.closest(".cycsel-opt");
      if (id && opt && (id in pageCycles)){
        pageCycles[id] = opt.getAttribute("data-cycle");
        pickerOpen[id] = false;   // one choice, so the menu closes on it and the chart is visible again at once
        redrawSheet(id); return;
      }
      for (var k in pickerOpen) if (pickerOpen[k] && k !== id){ pickerOpen[k] = false; redrawSheet(k); }
    });
    // switching a range redraws that page at the width it currently occupies
    document.addEventListener("click", function(e){
      var seg = e.target.closest && e.target.closest(".range-seg"); if (!seg) return;
      var mid = seg.parentNode.getAttribute("data-mode-for");   // Version 417: the same segmented control, other axis
      if (mid && (mid in pageMode)){
        pageMode[mid] = seg.getAttribute("data-mode");
        var mHost = document.getElementById("metric-page"), mDraw = sheetRenderers[mid];
        if (mDraw) mDraw(mHost && mHost.clientWidth ? mHost.clientWidth : 340);
        return;
      }
      var sid = seg.parentNode.getAttribute("data-series-for");
      if (sid === "hzn-spread" && window.__pickSpread){
        window.__pickSpread(seg.getAttribute("data-series")); return; }
      if (sid === "ylm-series" && window.__pickSeries){
        window.__pickSeries(sid, seg.getAttribute("data-series")); return; }
      var id = seg.parentNode.getAttribute("data-range-for");
      if (!(id in pageRange)) return;
      pageRange[id] = seg.getAttribute("data-range");
      var host = document.getElementById("metric-page");
      var draw = sheetRenderers[id]; if (draw) draw(host && host.clientWidth ? host.clientWidth : 340);
    });

    // ---- Economic power
    (function(){
      var vs = powerHistory.map(function(d){ return d.v; });
      var lowest = Math.min.apply(null, vs), first = powerHistory[0], last = powerHistory[powerHistory.length - 1];
      var below = vs.filter(function(v){ return v < powerScore; }).length;
      var eraStart = powerHistory.filter(function(d){ return d.y >= currentEra.from; })[0];
      var cards = [];
      cards.unshift('<p class="hi-lede">Economic power is how much room the country has to act: a composite of what ' +
        'it owes, what the debt costs to service and what it produces \u2014 a full charge is a state with reserves to ' +
        'spend, a flat one is a state that has already spent them.</p>');
      cards.push(hiCard("Power", powerWord.state, powerScore <= lowest
        ? "Today\u2019s " + powerScore + "% is the lowest reading in the whole series \u2014 " + (last.y - first.y + 1) + " years, back to " + first.y + ", when it stood at " + first.v + "%."
        : "Today\u2019s " + powerScore + "% is above only " + below + " of the " + vs.length + " years on record, back to " + first.y + "."));
      cards.push(hiCard("Against the last two shocks", "warning",
        "The same three markers, scored the same way, leave " + powerOf(stressHistory[0].score) + "% at the " + stressHistory[0].label.replace("'07 ", "2007 ") +
        " and " + powerOf(stressHistory[1].score) + "% at the " + stressHistory[1].label.replace("'20 ", "2020 ") + " reading. Both were higher than now."));
      if (eraStart) cards.push(hiCard("Since this cycle opened", "serious",
        "The " + currentEra.name + " began in " + currentEra.from + " with " + eraStart.v + "% in reserve. It has fallen " +
        (eraStart.v - powerScore) + " points since."));
      document.getElementById("power-highlights").innerHTML =
        highlightsHtml(cards, "", moreRow(powerPageNote));
    })();

    // ---- Valuation
    (function(){
      var vs = capeHistory.map(function(d){ return d.v; });
      var richer = capeHistory.filter(function(d){ return d.v > capeNow; });
      var bv = buffettHistory.map(function(d){ return d.v; });
      var bPrev = maxIn(buffettHistory, 1970, currentEra.from - 1);   // the record BEFORE this cycle
      var bDot = maxIn(buffettHistory, 2000, 2007);                    // the dot-com peak, by name
      var bRicher = bv.filter(function(v){ return v > buffNow; }).length;
      var cards = [];
      cards.unshift('<p class="hi-lede">Valuations are what the market pays for a dollar of earnings, smoothed over ' +
        'ten years \u2014 rich when buyers pay well above the long-run price for the same profits, cheap when they pay ' +
        'below it.</p>');
      cards.push(hiCard("Shiller CAPE", valuation.tag.state, richer.length === 0
        ? "At " + capeFmt1(capeNow) + ", richer than every January reading since " + capeHistory[0].y + "."
        : "At " + capeFmt1(capeNow) + ", the " + ordinal(richer.length + 1) + " richest reading since " + capeHistory[0].y +
          " \u2014 only " + richer.map(function(d){ return d.y + " (" + capeFmt1(d.v) + ")"; }).join(" and ") + " ran higher."));
      cards.push(hiCard("Buffett indicator", valRow("buffett").flagState || "serious", bRicher === 0
        ? "At " + Math.round(buffNow) + "% of GDP it is the highest of the " + bv.length + " quarters since " + yearOf(buffettHistory[0]) +
          " \u2014 above the previous record of " + Math.round(bPrev.v) + "% (" + bPrev.q + ") and far above the dot-com peak of " +
          Math.round(bDot.v) + "% (" + bDot.q + ")."
        : "At " + Math.round(buffNow) + "% of GDP, " + bRicher + " of the " + bv.length + " quarters since " + yearOf(buffettHistory[0]) + " ran higher."));
      // Both of the page's closing cards removed at Keren's instruction (Version 365): "The number you hear quoted"
      // (added the same day in Version 364) and "What it is and is not", which had stood since the page was built.
      // The page now ends on its own evidence \u2014 CAPE against its own record, the Buffett indicator against its \u2014
      // and says nothing about what those readings do or do not predict. The long form behind "More details" is
      // untouched, so a reader who wants the caveat still finds it one tap away.
      document.getElementById("valuation-highlights").innerHTML =
        highlightsHtml(cards, "", moreRow('<h4>Valuations</h4>' + factsFrom(valuation.impression)));
    })();

    // ---- Temperature
    (function(){
      var cyc = nowModel.cpi, hot = cyc.filter(function(d){ return d.v > 3; }).length;
      var peak = cyc.reduce(function(a, b){ return b.v > a.v ? b : a; });
      var cards = ['<p class="hi-lede">Temperature is the pace of prices: how much the cost of living has changed ' +
        'over the year before, measured by the Consumer Price Index \u2014 the economy runs hot when prices rise faster ' +
        'and cold when they rise slowly or fall.</p>'];
      // V494, Keren: the window's total comes here from under the chart. The host is written by the sheet
      // renderer (totalStat), because the figure follows the window while this section is built once.
      cards.push('<div id="temp-total"></div>');
      cards.push(hiCard("Temperature", tempInd ? tempInd.tag.state : "warning",
        "Across the " + cyc.length + " months of the " + currentEra.name + ", CPI has run above 3% in " + hot +
        " of them, and peaked at " + peak.v.toFixed(1) + "% in " + monthLabel(peak.m) + "."));
      cards.push(hiCard("Where it sits now", tempInd ? tempInd.tag.state : "warning",
        "The current cycle\u2019s average is " + mean(cyc.map(function(d){ return d.v; })).toFixed(1) + "%, against a 2% target. Today\u2019s " +
        r.cpiNow.toFixed(1) + "% is " + (r.cpiNow > 3 ? "above" : r.cpiNow < 1 ? "below" : "inside") + " the 1\u20133% range."));
      document.getElementById("temp-highlights").innerHTML =
        highlightsHtml(cards, "", moreRow(tempInfo + (function(){
          var rest = dropWhatIsShown(tempCaptionFull, tempLeadShown);
          return rest ? factsFrom(rest) : "";
        })()));
    })();

    // ---- GDP growth
    (function(){
      var cycAvg = mean(gq.map(function(d){ return d.v; }));
      var contractions = gq.filter(function(d){ return d.v < 0; }).length;
      var cards = ['<p class="hi-lede">Growth is how much the economy produced compared with a year earlier, ' +
        'measured by real GDP \u2014 it expands when the country makes more than it did and contracts when it makes less.</p>'];
      cards.push('<div id="gdp-total"></div>');   // V494 — see Temperature's
      cards.push(hiCard("Growth", phaseClass(r.regime),
        "Across the " + gq.length + " quarters of the " + currentEra.name + ", growth has averaged " + cycAvg.toFixed(1) +
        "% a year" + (contractions ? " and turned negative in " + contractions + " of them." : ", and has not turned negative in any of them.")));
      cards.push(hiCard("The latest quarter", phaseClass(r.regime),
        qLabel(r.gdpLatest.q) + " came in at " + r.gdpLatest.v.toFixed(1) + "%, " +
        (r.gdpLatest.v >= cycAvg ? "above" : "below") + " this cycle\u2019s own average, and the season model reads the trend as " +
        r.regime + "."));
      document.getElementById("gdp-highlights").innerHTML =
        highlightsHtml(cards, "", moreRow(growthDetail));   // the strip moved to the ruler's Cycles stop (Version 363)
    })();
    // The cycle average component, on every page whose series can fill it (Version 366; placed to the page order
    // in Version 369). It is positioned against a LIVE NODE rather than dropped into a slot in the markup: a static
    // div written after #<page>-highlights still parsed ahead of it, so markup order cannot be trusted here.
    // Rendered once, here, rather than inside a sheet renderer — the strip is flex HTML, not SVG, so it costs
    // nothing to leave standing and needs no width. Each page passes its own stateOf, so the block and that page's
    // chart colour the same number alike; Growth passes none, which leaves its bars neutral with the open cycle marked.
    (function(){
      var blocks = [
        // Version 423, Keren: "drop the average CPI by cycle in the temperature page because we are already seeing
        // it in the history component." Proved rather than assumed before removing it \u2014 the chart's average line
        // reads 4.3% on the open cycle, 1.7% on Big Tech, 3.0% on Dot-Com and 2.5% on COVID-19, which are exactly
        // the four figures this strip drew. The other three pages keep theirs until they get the cycle mode.
        // Version 431: gone with Temperature's, for the same reason \u2014 the chart's average line reads the same
        // number for whichever cycle the picker is on, so the strip was a second answer to a question already answered.
        // Version 433: both gone with Temperature's and Growth's \u2014 the chart's average line reads the same number
        // for whichever cycle the picker is on, so the strip was a second answer to a question already answered.
      ];
      blocks.forEach(function(b){
        var hl = document.getElementById(b[0]); if (!hl) return;
        var html = cycleAverageBlock(b[2], b[3], b[4]); if (!html) return;
        var host = document.createElement("div");
        host.id = b[1];
        host.innerHTML = html;
        // THE PAGE ORDER (Version 369, Keren): history, then cycle average, then the blood test, then Highlights,
        // then More details. So the block goes immediately BEFORE the blood-test block \u2014 the markers table with
        // each reading against its reference range \u2014 which is `.subject` on three pages and `.sign-detail` on
        // Temperature. It is found by CLASS on the sheet rather than by id, so a page that renames its table keeps
        // the order, and the whole thing still anchors to a live node rather than to markup (the Version 366 rule).
        var sheet = hl.parentElement;
        var blood = sheet && sheet.querySelector(":scope > .subject, :scope > .sign-detail");
        if (blood) blood.insertAdjacentElement("beforebegin", host);
        else hl.insertAdjacentElement("beforebegin", host);   // no table on this page: still ahead of Highlights
      });
    })();

    // ---------------- The metric page (Version 256) ----------------
    // The Cycle tab's own content steps aside and the metric takes the screen, with its name in the top bar and the
    // back arrow beside it — the same move the Calendar makes when it opens a cycle. Where the reader was on the
    // Cycle tab is remembered and restored, because being returned to the top of a long page is its own small loss.
    var cyclePanel = document.querySelector('.tab-panel[data-tab="cycle"]');
    var analysisPanel = document.querySelector('.tab-panel[data-tab="analysis"]');
    var metricPage = document.createElement("div");
    metricPage.id = "metric-page"; metricPage.hidden = true;
    cyclePanel.appendChild(metricPage);
    // Version 319: pages open from the Analysis tab now too, so "where a page goes home to" stops being the
    // Cycle tab by assumption and becomes something the opener states. The host element travels to whichever
    // panel the page was opened from — the tab you were on is the tab you come back to, with its own name in
    // the top bar. The context is read fresh each time because these children are moved around at runtime.
    var PAGE_HOME = {
      cycle:    { panel:cyclePanel,    title:"Current Cycle",
                  hide:function(){ return [cycleViewEl, document.getElementById("today-analysis")]; } },
      analysis: { panel:analysisPanel, title:"Analysis",
                  hide:function(){ return [document.getElementById("calendar-list")]; } }
    };
    var homeCtx = PAGE_HOME.cycle;
    var openSheet = null, openHome = null, returnScroll = 0;
    // One page can now open another — a class page opens a sign's page (Version 271) — so back has to mean "the page
    // I came from" rather than always "the tab". The stack is the smallest thing that does it: a page remembers
    // where it was pushed from and how far down it had been read.
    var pageStack = [];

    function homeFromPage(keepScroll){
      if (!openSheet) return;
      openHome.appendChild(openSheet); openSheet.hidden = true;
      openSheet = null; openHome = null;
      metricPage.hidden = true;
      homeCtx.hide().forEach(function(n){ if (n) n.hidden = false; });
      setTopbar(homeCtx.title, null);
      if (keepScroll) return;
      var y = returnScroll;
      window.requestAnimationFrame(function(){ window.scrollTo({ top:y, behavior:"auto" }); });
    }
    function closeMetricPage(){ pageStack.length = 0; homeFromPage(); }
    function backFromPage(){
      var prev = pageStack.pop();
      if (!prev){ closeMetricPage(); return; }
      var el = document.getElementById(prev.id);
      homeFromPage(true);
      openMetricPage(el, prev.title, true);
      window.requestAnimationFrame(function(){ window.scrollTo({ top:prev.scroll, behavior:"auto" }); });
    }
    metricPageReset = closeMetricPage;

    function openMetricPage(el, title, returning, homeKey){
      if (!el) return;
      seatPageFoot(el);        // Version 298: late-built pages seat their chip on the way in
      if (!returning && openSheet && openSheet !== el)
        pageStack.push({ id:openSheet.id, title:document.getElementById("topbar-title").textContent, scroll:window.scrollY || 0 });
      var wasOpen = !!openSheet;
      homeFromPage(true);
      if (!wasOpen) returnScroll = window.scrollY || 0;
      // Only a page opened from a tab sets the home — a page opened FROM a page inherits it, and so does a
      // step back, which arrives here with nothing open but must not be read as a fresh start from the Cycle tab.
      if (!wasOpen && !returning){
        homeCtx = PAGE_HOME[homeKey] || PAGE_HOME.cycle;
        homeCtx.panel.appendChild(metricPage);
      }
      openSheet = el; openHome = el.parentNode;
      homeCtx.hide().forEach(function(n){ if (n) n.hidden = true; });
      el.hidden = false; metricPage.appendChild(el); metricPage.hidden = false;
      setTopbar(title, backFromPage);
      if (!returning) window.scrollTo({ top:0, behavior:"auto" });
      // a hidden element has no width, so a page that draws its own chart draws it now, at the real one
      var draw = sheetRenderers[el.id]; if (draw) draw(metricPage.clientWidth);
      collapseEmptyBlocks(el);   // now that it is on screen and drawn, anything showing nothing gives up its gap
    }
    // Every peek card and every sign row opens a page the same way, so the listener sits on the tab rather than on
    // the row of peeks, and matches the attribute rather than the class (Version 269).
    cyclePanel.addEventListener("click", function(e){
      var btn = e.target.closest && e.target.closest("[data-open]"); if (!btn) return;
      openMetricPage(document.getElementById(btn.getAttribute("data-open")), btn.getAttribute("data-title"));
    });
    analysisPanel.addEventListener("click", function(e){
      var btn = e.target.closest && e.target.closest("[data-open]"); if (!btn) return;
      openMetricPage(document.getElementById(btn.getAttribute("data-open")), btn.getAttribute("data-title"), false, "analysis");
    });
    analysisPanel.addEventListener("keydown", function(e){
      if (e.key !== "Enter" && e.key !== " ") return;
      var row = e.target.closest && e.target.closest("[data-open]"); if (!row) return;
      e.preventDefault();
      openMetricPage(document.getElementById(row.getAttribute("data-open")), row.getAttribute("data-title"), false, "analysis");
    });
    // pressing the trend row shows the fit on the chart above it and steps the readings back (Version 276)
    cyclePanel.addEventListener("click", function(e){
      var btn = e.target.closest && e.target.closest(".trendpill.can-toggle"); if (!btn) return;
      var box = btn.closest(".page-chart, .spread-history"); if (!box) return;
      var on = btn.getAttribute("aria-pressed") !== "true";
      btn.setAttribute("aria-pressed", on ? "true" : "false");
      box.classList.toggle("trend-on", on);
    });
    cyclePanel.addEventListener("keydown", function(e){
      if (e.key !== "Enter" && e.key !== " ") return;
      // `tr[data-open]` and not `[data-open]`: the peek cards are real buttons and already fire a click on
      // Enter, so matching them here would open the same page twice (Version 360).
      var row = e.target.closest && e.target.closest(".sign-row, tr[data-open]"); if (!row) return;
      e.preventDefault();
      openMetricPage(document.getElementById(row.getAttribute("data-open")), row.getAttribute("data-title"));
    });
    // A figure and its unit are two things. Cloning is what lets them be separated without disturbing the card
    // the reading is lifted from, and it takes the tag out of the figure at the same time, where one sits inside it.
    function partsOf(el, unitSel){
      if (!el) return { v:"", u:"", w:"", s:"" };
      var c = el.cloneNode(true), u = c.querySelector(unitSel), t = c.querySelector(".tag");
      var unit = u ? u.textContent.trim() : "", word = t ? t.textContent.trim() : "";
      var st = t ? (t.className.match(/good|warning|serious|critical/) || [""])[0] : "";
      if (u) u.parentNode.removeChild(u);
      if (t) t.parentNode.removeChild(t);
      return { v:c.textContent.trim(), u:unit, w:word, s:st };
    }
    function discOf(mark, state){
      return mark ? '<div class="subject-icon"><span class="' + (state || "norm") + '">' + mark.innerHTML + '</span></div>' : "";
    }
    // the three that have no indicator object behind them register from what their own peek card says
    /* Version 473: the live document first, the Version 473 snapshot second. Everything in a category has been
       lifted out of the page by now (see `catItem`), so for most of these the snapshot IS the answer — but the
       live lookup stays first, because a reading that never joined a category is still there to be read. */
    function authored(sel, key){ return document.querySelector(sel) || (window.__CAT_SNAP || {})[key] || null; }
    [["gdp", "coincident"], ["power", "structural"], ["valuation", "structural"],
     ["households", "structural"]].forEach(function(p){
      var card = authored('.peek[data-open="sheet-metric-' + p[0] + '"]', "sheet-metric-" + p[0]); if (!card) return;
      var pv = partsOf(card.querySelector(".peek-value"), ".peek-unit");
      var st = (card.className.match(/good|warning|serious|critical/) || [""])[0];
      registerTiming(p[1], {
        title:card.getAttribute("data-title"),
        metric:pv.v, unit:pv.u,
        word:(card.querySelector(".peek-word") || {}).textContent || "",
        state:st, icon:discOf(card.querySelector(".peek-mark"), st),
        target:"sheet-metric-" + p[0]
      });
    });
    ["yield", "horizon", "sentiment"].forEach(function(key){
      var row = authored('.sign-row[data-subject="' + key + '"]', "sheet-sign-" + key); if (!row) return;
      var rv = partsOf(row.querySelector(".subject-value"), ".unit");
      var say = ((row.querySelector(".subject-say") || {}).textContent || "").trim();
      registerTiming("leading", {
        title:row.getAttribute("data-title"),
        sub:(row.querySelector(".subject-label") || {}).textContent || "",
        metric:rv.v, unit:rv.u,
        word:rv.w || say, state:rv.s,
        icon:(function(){
          /* V587, Keren: "make sure that in the all indicators list, all items are updated with the icons that
             we talked about." Twelve of thirteen rows wore their reading's glyph in a tinted disc; Fear wore
             its curve gauge instead, because this preferred a .subject-ring with anything in it over the mark
             on the label \u2014 and Fear is the only row that owns a ring. So the one reading with a picture was
             the one reading without an icon, in a list whose whole job is to be scannable by icon.
             The MARK comes first now and the ring is the fallback, which is the order every other list in the
             app uses. Fear keeps its ring where a ring belongs: on the Mood page, as that row's preview. */
          var mk = row.querySelector(".subject-label .peek-mark");
          if (mk) return discOf(mk, rv.s);
          var rg = row.querySelector(".subject-ring");
          return rg && rg.firstElementChild ? rg.innerHTML : "";
        })(),
        target:row.getAttribute("data-open")
      });
    });

    // One page per class (Version 271). A row here is the same row the list uses, and opens the same page.
    function memberRow(e){
      var tag = e.tag ? '<span class="tag ' + e.tag.state + '">' + e.tag.text + '</span>'
              : e.word ? '<span class="' + (e.state ? "tag " + e.state : "member-word") + '">' + e.word + '</span>' : '';
      var unit = e.unit ? '<span class="member-unit">' + e.unit + '</span>' : '';
      return '<div class="subject sign-row" role="button" tabindex="0" data-open="' + e.target +
        '" data-title="' + e.title + '"><div class="subject-summary">' +
        '<div class="subject-ring">' + (e.icon || "") + '</div>' +
        '<div class="subject-text">' +
          '<div class="subject-label">' + (e.sub && e.sub.indexOf(e.title) === 0 ? e.sub : e.title + (e.sub ? " \u00b7 " + e.sub : "")) + '</div>' +
          '<div class="subject-value">' + e.metric + unit + tag + '</div>' +
          (e.metricSub ? '<p class="subject-say">' + e.metricSub + '</p>' : '') +
        '</div>' +
        '<div class="subject-more"><span class="subject-chev" aria-hidden="true"></span></div>' +
      '</div></div>';
    }
    // Version 319: every reading on the board, on one page, grouped by when it speaks. It is built from
    // `timingMembers`, so it cannot drift out of step with the rows anywhere else — they are the SAME rows,
    // one component, one destination per reading.
    // Version 350: the four per-class pages this builder used to make alongside it are gone. Version 329 pointed
    // every timing chip at a TAB of this page instead of at its own sheet, which left four sheets built into the
    // DOM on every load — 222 nodes, 8% of the page — that nothing could open. The roster answers "what does
    // leading mean" perfectly well by grouping under that heading; a second page saying it again was the thing
    // Version 329 replaced, not something it left standing.
    var indSheet = document.createElement("div");
    indSheet.className = "metric-sheet ind-sheet"; indSheet.id = "sheet-indicators"; indSheet.hidden = true;
    var IND_ORDER = ["structural", "leading", "coincident", "lagging"];
    var IND_TABS = [{ key:"all", label:"All" }, { key:"leading", label:"Leading" },
                    { key:"coincident", label:"Coincident" }, { key:"lagging", label:"Lagging" }];
    indSheet.innerHTML =
      // no head: `.metric-sheet .body-term` is display:none (the top bar names the page), so with the subtitle
      // gone the head rendered a zero-height wrapper and nothing else
      '<div class="rangebar ind-tabs" role="tablist" aria-label="Which readings to show">' +
        IND_TABS.map(function(t, i){
          return '<button type="button" class="range-seg' + (i ? "" : " on") + '" role="tab" ' +
            'aria-selected="' + (i ? "false" : "true") + '" data-ind-tab="' + t.key + '">' + t.label + '</button>';
        }).join("") +
      '</div>' +
      IND_ORDER.map(function(kind){
        var t = TIMING[kind], list = timingMembers[kind];
        if (!list.length) return "";
        return '<div class="ind-group" data-kind="' + kind + '"><div class="ind-group-head">' + timingMark(kind) +
          '<b>' + t.label + '</b><span>' + t.hint + '</span></div>' +
          list.map(memberRow).join("") + '</div>';
      }).join("");
    // Version 447: the roster is reached from the Cycle tab's Browse list now, so it lives among that tab's
    // content — PAGE_HOME.cycle hides #today-analysis, and a page that is not inside what its home hides
    // stays on screen underneath whatever opens over it.
    (document.getElementById("today-analysis") || analysisPanel).appendChild(indSheet);

    // Structural has no tab of its own — it is not a moment in the cycle, so it belongs under All and nowhere else.
    function setIndTab(kind){
      kind = kind || "all";
      Array.prototype.forEach.call(indSheet.querySelectorAll(".ind-tabs .range-seg"), function(b){
        var on = b.getAttribute("data-ind-tab") === kind;
        b.classList.toggle("on", on);
        b.setAttribute("aria-selected", on ? "true" : "false");
      });
      Array.prototype.forEach.call(indSheet.querySelectorAll(".ind-group"), function(g){
        g.hidden = !(kind === "all" || g.getAttribute("data-kind") === kind);
      });
    }
    indSheet.addEventListener("click", function(e){
      var b = e.target.closest && e.target.closest(".ind-tabs .range-seg"); if (!b) return;
      setIndTab(b.getAttribute("data-ind-tab"));
    });
    // Version 329: a reading's timing chip opens THIS page on the matching tab rather than a page of its own.
    openIndicatorsPage = function(tab){
      var btn = document.querySelector('.tab-btn[data-tab="cycle"]');
      if (btn && !btn.classList.contains("active")) btn.click();
      setIndTab(tab && tab !== "structural" ? tab : "all");
      openMetricPage(indSheet, "All indicators", false, "cycle");
    };

    // The preview: name, picture, figures, word — the card anatomy, with the four classes as the picture and
    // their counts as the figure, because the shape of the roster is what this card has to say.
    var indPeek = document.getElementById("indicators-peek");
    if (indPeek) indPeek.remove();   // V447: its door is the Browse list's last row now
    if (false && indPeek){
      indPeek.innerHTML =
        '<div class="subject sign-row card-row ind-row" role="button" tabindex="0" ' +
          'data-open="sheet-indicators" data-title="Indicators"><div class="subject-summary">' +
          '<div class="subject-text">' +
            '<div class="subject-label"><span class="peek-mark"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" aria-hidden="true"><path d="M4 6.5h0.6"/><path d="M9 6.5h11"/><path d="M4 12h0.6"/><path d="M9 12h11"/><path d="M4 17.5h0.6"/><path d="M9 17.5h11"/></svg></span>Indicators' + CHEV + '</div>' +
            '<div class="ind-classes">' +
              Object.keys(timingMembers).map(function(kind){
                return '<span class="ind-class">' + timingMark(kind) +
                  '<b>' + timingMembers[kind].length + '</b><i>' + TIMING[kind].label + '</i></span>';
              }).join("") +
            '</div>' +
          '</div>' +
        '</div></div>';
    }

    // Escape comes back, the way it closes every other layer in this app
    document.addEventListener("keydown", function(e){
      if (e.key === "Escape" && openSheet && !document.getElementById("detail-backdrop").classList.contains("show")) backFromPage();
    });
  }
  GYN.step("renderPagesAndNav", renderPagesAndNav, "render"); renderPagesAndNav();

  // allSources is the single source of truth for sources.html (the footer links to it). Regenerate that page
  // whenever this list changes: build-sources.js in the project scratchpad reads window.__sources below.
  window.__sources = { all: allSources, cards: coincident.concat(lagging).map(function(c){ return {name:c.bodyTerm, src:c.src}; }), annual: sp500AnnualReturnSource, gdp: gdpSrc };
