

  // The signs as subjects of their own: each row's face is the card's face and its body the card's full detail,
  // so nothing is lost and nothing is nested. The Temperature chart is not here; it sits open under the dial.
  function renderSignsList(){
    var host = byId("signs-list");
    var PEEKED = { Temperature:1, Pulse:1, Volume:1 };   // signs whose card in the peek row stands in for their row
    // Keren, V306: "put Effort inside the Activity page — it belongs next to the labour market, it's not that
    // important a metric to preview." A folded sign has no card, row or page of its own — it renders inside its
    // host's — but still registers its own timing class, pointing at the host's page, so the taxonomy keeps it.
    var FOLDED = { "Industrial output":"Activity" }, foldedInto = {};
    // Productivity growth is not a sign (no row, mark or page), but here it is Industrial output's peer, so it is
    // seeded into the same list, HERE, before the signs are built: Activity renders its folded blocks as it is made.
    foldedInto["Activity"] = [productivityReading];
    /* Keren, V497: "make the activity page more like the power page, where you have an aggregate of indicators
       below the main chart — the main chart should be the labor market." One stack of panel rows, in the order
       she named: the labour market, then Productivity and Industrial output. */
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
      /* Power's order, part for part: the control, the readout the hover fills, the picture, the trend across
         the window, then the readings. */
      return histBar("", "act-rangebar") +
        '<div class="page-chart">' +
          histHead("sheet-sign-activity") +
          '<div id="act-history" class="vh-host"></div>' +
          histTip("act-hist-tooltip") +
          '<div id="act-trend"></div>' +
          '<div class="panel-stack in-hist">' + rows + '</div>' +
        '</div>';
    }
    function foldedBlock(f){
      var rest = dropWhatIsShown(f.caption, f.lead || f.shortCaption || "");
      var facts = [].concat(f.facts || [], f.aux || []);
      // Keren, V352: "drop the cogwheel icon and Effort and leave only industrial output as the title." A mark
      // identifies a sign in a LIST, and this block is not in one. The popup drops the body term too, or the (i)
      // would hand back the word the head stopped using.
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
    // A sign is a ROW that opens a PAGE (Keren, V269: "I want the other indicators to have an inner page as well —
    // of course, aligning to our inner pages format").
    /* Where a sign's page actually lives. One sign has no page of its own: Temperature's detail sits under the
       Temperature chart. Any row pointing at a sign — the roster's, and a folded sign's — asks here, so a link
       can never open a sheet that was moved out from under it. */
    function pageFor(term){
      return term === "Temperature" ? "sheet-metric-temp"
           : "sheet-sign-" + term.toLowerCase();
    }
    function signSubject(ind, timing){
      var key = ind.bodyTerm.toLowerCase(), id = "sheet-sign-" + key;
      var svg = signMarks[ind.bodyTerm] ? signMarks[ind.bodyTerm]() : "";
      var row = elFrom(subjectRow({
        subject:"sign-" + key, open:id, title:ind.bodyTerm,
        icon: subjectIcon(ind.tag.state, svg),
        text: '<div class="subject-label">' + ind.bodyTerm + ' \u00b7 ' + ind.econTerm + '</div>' +
              '<div class="subject-value">' + ind.metric + '<span class="unit">' + ind.metricSub + '</span></div>' +
              '<div class="subject-verdict"><span class="tag ' + ind.tag.state + '">' + ind.tag.text + '</span></div>' +
              // an optional miniature, so a sign row can carry one the way a peek card does
              (ind.peek || "")
      }));
      if (FOLDED[ind.bodyTerm]){                 // it lives inside another page; it gets no row and no sheet
        // NB: not `var host` — `host` is already the list container this function appends into, and a var
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
      // Temperature's page opens with its own chart, which already carries the name, the figure and the verdict, so
      // the detail below drops its head, figure and reference bar (Keren: "I see duplications — temperature,
      // inflation and monetary policy; 3.4%; and we don't need the low/optimal/high bar, because we already see
      // the graph…").
      d.querySelector(".sign-detail").innerHTML =
        // Desire and Activity have no read-card: their figure, verdict and title live in the history container
        // and the panel row, and a wrapper round nothing is still a box on the page.
        "" +
        cardDetailHtml(ind, { bare: ind.bodyTerm === "Temperature" || ind.bodyTerm === "Desire" ||
                                    ind.bodyTerm === "Volume" || ind.bodyTerm === "Pulse" ||
                                    ind.bodyTerm === "Activity",
                              noHead: ind.bodyTerm === "Pulse" || ind.bodyTerm === "Volume",
                              noMark: ind.bodyTerm === "Desire" || ind.bodyTerm === "Activity",
                              noMeter: ind.bodyTerm === "Desire",
                              chartFirst: ind.bodyTerm === "Pulse" || ind.bodyTerm === "Volume",
                              // No blood card on any page: Volume and Pulse carry the reading as a panel row inside
                              // their own history container, and the blood test is one named component that should
                              // not look like two things on two pages (Keren's consistency rule, V374).
                              bloodCard: false,
                              // Keren, V391, of Activity: "put the highlights at the bottom of the page, above
                              // More details." The builder hands its Highlights back and the caller places them, so
                              // commentary never sits in the middle of the measurements it comments on.
                              deferHighlights: ind.bodyTerm === "Desire" || ind.bodyTerm === "Activity",
                              chart: ind.bodyTerm === "Pulse" ? pulseBlock(ind.meter.value, PULSE_PRE2008, ind)
                                   : ind.bodyTerm === "Volume" ? volumeBlock(ind) : "" }) +
        (ind.bodyTerm === "Desire" ? desireBlock(ind) + riskMatrixBlock(ind.meter.value, valRow("cape").meter.value)
         : ind.bodyTerm === "Activity" ? activityStackHtml(ind)
           : "") +
        // Activity consumes its folded readings as rows of its own stack, so it emits none here.
        (ind.bodyTerm === "Activity" ? "" : (foldedInto[ind.bodyTerm] || []).map(foldedBlock).join("")) +
        // … and the deferred Highlights go LAST, after the folded signs: **Highlights are the last container on
        // the page, whatever a page appends after its read-card.** Left-to-right evaluation guarantees
        // cardDetailHtml has already set heldHighlights by the time this reads it; the flush also clears it, so a
        // page that defers nothing cannot inherit the previous page's block.
        (function(){ var h = heldHighlights; heldHighlights = ""; return h; })();
      registerTiming(timing || (ind.bodyTerm === "Temperature" ? "lagging" : null), {
        title:ind.bodyTerm, sub:ind.econTerm, metric:ind.metric, metricSub:ind.metricSub,
        tag:ind.tag, icon:'<div class="subject-icon"><span class="' + ind.tag.state + '">' + svg + '</span></div>',
        target:pageFor(ind.bodyTerm)
      });
      // A sign with a peek card has no row in the list: the card IS its row (Keren, V291: side by side "like
      // temperature GDP growth"). Temperature also gives up its page wrapper, because its detail goes under a chart
      // that already exists; the others keep their own pages.
      if (PEEKED[ind.bodyTerm] && ind.bodyTerm !== "Temperature"){ host.appendChild(d); return d; }
      if (ind.bodyTerm === "Temperature"){
        /* Keren, V582: "I don't need the test result component in temperature because I already have the
           average. I have the Fed target. I don't need to see it again as in another form." No panel row, but
           its NOTE stays — the only place the app explains why 1–3% is a target band rather than a normal range,
           and that the Fed's 2% is PCE while this reading is CPI. Filed straight into HIST_NOTE for the ⋯ menu,
           like the yield, horizon and deficit notes; set once, since it does not move with the window. */
        HIST_NOTE["sheet-metric-temp"] = temperatureInfoHtml(ind);
        tempCaptionFull = ind.caption;                      // its long form joins the page's own, in one row
        tempLeadShown = ind.lead || ind.shortCaption || "";  // … minus whatever the page is already showing
        /* REPLACE, never append. A second render would otherwise leave two `.sign-detail` blocks in the
           sheet, and the page-foot seater reads `:scope > .sign-detail`, so it would find the stale one. */
        (function(){
          var sheet = byId("sheet-metric-temp");
          var fresh = d.querySelector(".sign-detail");
          var prev = sheet.querySelector(":scope > .sign-detail");
          if (prev) sheet.replaceChild(fresh, prev); else sheet.appendChild(fresh);
        })();
      } else { host.appendChild(row); host.appendChild(d); }
      return d;
    }
    // No section headings (Keren, Sep 20, 2026: "get rid of the Leading, Coincident and Lagging titles on the main
    // page and make the spaces align"). The timing travels onto each sign's page, where it matters.
    coincident.forEach(function(ind){ signSubject(ind, ind.bodyTerm === "Temperature" ? null : (ind.timing || "coincident")); });
    lagging.forEach(function(ind){ signSubject(ind, "lagging"); });

    // These rows are written straight into the markup, so they are converted where they stand rather than rebuilt:
    // the summary becomes the row, the drawer's body becomes the page, and every id inside either one keeps working.
    [{ key:"hormones", title:"Hormones", timing:"leading" },
     /* Keren, V639: "pressure should be yields". Leading, because the market's price of money moves before
        the activity it finances shows it. */
     { key:"pressure", title:"Pressure", timing:"leading" },
     // Horizon converts the same way: its page is a chart with two controls and a verdict, not a row with a
     // table, and this path gives it a page without inventing a second idiom for one.
     { key:"horizon", title:"Horizon", timing:"leading" },
     // NB write a real "&" in a title, never an entity: cfg.title is written with setAttribute and read back with
     // textContent, so an entity here would render literally in the row.
     { key:"sentiment", title:"Fear", timing:"leading" }].forEach(function(cfg){
      var det = document.querySelector('.subject[data-subject="' + cfg.key + '"]'); if (!det) return;
      var sum = det.querySelector(".subject-summary"), body = det.querySelector(".subject-body");
      var id = "sheet-sign-" + cfg.key;
      var row = document.createElement("div");
      /* Only `subject sign-row`: catItem rebuilds every member row as a `.cat-item`, so any other row class
         would never reach the DOM. */
      row.className = "subject sign-row";
      row.setAttribute("data-subject", cfg.key);
      row.setAttribute("role", "button"); row.tabIndex = 0;
      row.setAttribute("data-open", id); row.setAttribute("data-title", cfg.title);
      var face = document.createElement("div"); face.className = "subject-summary";
      while (sum.firstChild) face.appendChild(sum.firstChild);   // moved, so every id inside it survives
      /* Keren, V587: "make sure that in the all indicators list, all items are updated with the icons that we
         talked about." The mark is applied HERE, where the row is made, once, and only if the label has none:
         a glyph written onto the markup row later is at the mercy of build order, because this converter moves
         the row's children and whichever list is built second would get a label that was never touched. */
      (function(){
        var MARK = { horizon:sunriseSvg, sentiment:umbrellaSvg, hormones:hormoneSvg, pressure:gaugeSvg };
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

    // the metric pages say where they sit too, in the same chip and the same place
    [["temp-timing", "lagging"], ["gdp-timing", "coincident"],
     ["power-timing", "structural"], ["valuation-timing", "structural"],
     ["households-timing", "structural"]].forEach(function(p){
      put(p[0], timingPill(p[1]));
    });


    // One shape for every inner page: the timing chip, the head, the chart in its white box, the detail, then
    // Highlights. The pages are assembled from different directions, so this sorts the DOM itself rather than
    // painting over it with flex order: the reading order a screen reader gets is the reading order the eye gets.
    ["sheet-metric-temp", "sheet-metric-gdp", "sheet-metric-power", "sheet-metric-valuation",
     "sheet-metric-households"].forEach(function(id){
      var sheet = byId(id); if (!sheet) return;
      function rank(el){
        var k = el.id || "";
        if (/-timing$/.test(k)) return 0;            // where this sign sits in the cycle, said once, at the top
        if (/-head$/.test(k)) return 1;
        if (/-chart$/.test(k) || /^slot-/.test(k)) return 2;
        if (/-highlights$/.test(k)) return 4;        // Highlights LAST, because it ends in More details, and
        return 3;                                    // nothing belongs below the offer to read more
      }
      Array.prototype.slice.call(sheet.children)
        .map(function(el, i){ return { el:el, r:rank(el), i:i }; })
        .sort(function(a, b){ return a.r - b.r || a.i - b.i; })
        .forEach(function(x){ sheet.appendChild(x.el); });
    });
    Array.prototype.forEach.call(document.querySelectorAll(".metric-sheet"), seatPageFoot);
  }
  GYN.step("renderSignsList", renderSignsList, "build"); renderSignsList();

  /* ---------------- THE ROSTER'S OWN PIECES ----------------
     Keren, V630: "a component based app that will be 100% ready for server side integration with controllers
     and services."
     Helpers that read a reading off the page and write it as a roster row. They close over nothing in
     `renderPagesAndNav`, but `registerRoster` reads the drawn page, so it is a step with a place in the
     order (see renderPagesAndNav). */
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
  // readings with no indicator object behind them register from what their own card or row says
  /* The live document first, then the catItem snapshot: most of these have been lifted out of the page by now
     (see `catItem`), but a reading that never joined a category is still there to be read. */
  function authored(sel, key){ return document.querySelector(sel) || (window.__CAT_SNAP || {})[key] || null; }
  /* A STEP, not a helper: each loop reads a card or row off the freshly drawn page and files it with
     `registerTiming`. Run before the cards exist, every `authored()` lookup answers null and the structural
     group vanishes from All indicators. When it runs is decided at the call site. */
  function registerRoster(){
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
    ["hormones", "pressure", "horizon", "sentiment"].forEach(function(key){
      var row = authored('.sign-row[data-subject="' + key + '"]', "sheet-sign-" + key); if (!row) return;
      var rv = partsOf(row.querySelector(".subject-value"), ".unit");
      var say = ((row.querySelector(".subject-say") || {}).textContent || "").trim();
      registerTiming("leading", {
        title:row.getAttribute("data-title"),
        sub:(row.querySelector(".subject-label") || {}).textContent || "",
        metric:rv.v, unit:rv.u,
        word:rv.w || say, state:rv.s,
        icon:(function(){
          /* Keren, V587 (see the converter in renderSignsList): the MARK first and the ring only as a fallback,
             the order every other list uses — a list scanned by icon needs every row's icon. Fear keeps its ring
             on the Mood page, as that row's preview. */
          var mk = row.querySelector(".subject-label .peek-mark");
          if (mk) return discOf(mk, rv.s);
          var rg = row.querySelector(".subject-ring");
          return rg && rg.firstElementChild ? rg.innerHTML : "";
        })(),
        target:row.getAttribute("data-open")
      });
    });
  }

  // A roster row: the same row the list uses, opening the same page.
  function memberRow(e){
    var tag = e.tag ? '<span class="tag ' + e.tag.state + '">' + e.tag.text + '</span>'
            : e.word ? '<span class="' + (e.state ? "tag " + e.state : "member-word") + '">' + e.word + '</span>' : '';
    var unit = e.unit ? '<span class="member-unit">' + e.unit + '</span>' : '';
    return subjectRow({
      open:e.target, title:e.title, icon:e.icon,
      text: '<div class="subject-label">' + (e.sub && e.sub.indexOf(e.title) === 0 ? e.sub : e.title + (e.sub ? " \u00b7 " + e.sub : "")) + '</div>' +
            '<div class="subject-value">' + e.metric + unit + tag + '</div>' +
            (e.metricSub ? '<p class="subject-say">' + e.metricSub + '</p>' : '')
    });
  }

  /* ---------------- THE NAVIGATION CONTROLLER ----------------
     What opens, what closes, what back does, and the page frame it all moves inside. It owns `openSheet`,
     `openHome`, `pageStack` and `returnScroll`, and nothing outside can reach that state: a component calls
     `NAV.open`, or emits `data-open` for the delegate here. `NAV` (two names) is the whole public surface. */
  var NAV = { open: null, panel: null };
  function buildNav(){
    // ---------------- The metric page ----------------
    // The tab's own content steps aside and the metric takes the screen, with its name in the top bar and the back
    // arrow beside it — the same move the Calendar makes when it opens a cycle. Where the reader was on the tab is
    // remembered and restored, because being returned to the top of a long page is its own small loss.
    var cyclePanel = document.querySelector('.tab-panel[data-tab="cycle"]');
    var analysisPanel = document.querySelector('.tab-panel[data-tab="analysis"]');
    var metricPage = document.createElement("div");
    metricPage.id = "metric-page"; metricPage.hidden = true;
    cyclePanel.appendChild(metricPage);
    // Pages open from the Cycle and Analysis tabs, so the opener states where a page goes home to: the host
    // travels to that panel, and back returns to it with its own name in the top bar. Read fresh each time,
    // because these children are moved around at runtime.
    var PAGE_HOME = {
      cycle:    { panel:cyclePanel,    title:"Current Cycle",
                  hide:function(){ return [cycleViewEl, byId("today-analysis")]; } },
      analysis: { panel:analysisPanel, title:"Analysis",
                  hide:function(){ return [byId("calendar-list")]; } }
    };
    var homeCtx = PAGE_HOME.cycle;
    var openSheet = null, openHome = null, returnScroll = 0;
    // One page can open another — a category page opens a reading's page — so back has to mean "the page I came
    // from" rather than always "the tab". The stack is the smallest thing that does it: a page remembers where it
    // was pushed from and how far down it had been read.
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
      var el = byId(prev.id);
      homeFromPage(true);
      openMetricPage(el, prev.title, true);
      window.requestAnimationFrame(function(){ window.scrollTo({ top:prev.scroll, behavior:"auto" }); });
    }
    metricPageReset = closeMetricPage;

    function openMetricPage(el, title, returning, homeKey){
      if (!el) return;
      seatPageFoot(el);        // late-built pages seat their chip on the way in
      if (!returning && openSheet && openSheet !== el)
        pageStack.push({ id:openSheet.id, title:byId("topbar-title").textContent, scroll:window.scrollY || 0 });
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
    // the row of peeks, and matches the attribute rather than the class.
    cyclePanel.addEventListener("click", function(e){
      var btn = e.target.closest && e.target.closest("[data-open]"); if (!btn) return;
      openMetricPage(byId(btn.getAttribute("data-open")), btn.getAttribute("data-title"));
    });
    analysisPanel.addEventListener("click", function(e){
      var btn = e.target.closest && e.target.closest("[data-open]"); if (!btn) return;
      openMetricPage(byId(btn.getAttribute("data-open")), btn.getAttribute("data-title"), false, "analysis");
    });
    analysisPanel.addEventListener("keydown", function(e){
      if (e.key !== "Enter" && e.key !== " ") return;
      var row = e.target.closest && e.target.closest("[data-open]"); if (!row) return;
      e.preventDefault();
      openMetricPage(byId(row.getAttribute("data-open")), row.getAttribute("data-title"), false, "analysis");
    });
    // pressing the trend row shows the fit on the chart above it and steps the readings back
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
      // Enter, so matching them here would open the same page twice.
      var row = e.target.closest && e.target.closest(".sign-row, tr[data-open]"); if (!row) return;
      e.preventDefault();
      openMetricPage(byId(row.getAttribute("data-open")), row.getAttribute("data-title"));
    });

    // Escape comes back, the way it closes every other layer in this app
    document.addEventListener("keydown", function(e){
      if (e.key === "Escape" && openSheet && !byId("detail-backdrop").classList.contains("show")) backFromPage();
    });
    // the two names navigation offers. Assigned last, so the surface cannot be read half-built.
    NAV.open = openMetricPage;
    NAV.panel = analysisPanel;
  }

  /* ---------------- ALL INDICATORS ----------------
     Every reading on the board, on one page, grouped by when it speaks. The two things it needs from
     navigation — where to put itself, and how to open itself — it asks for by name through `NAV`. */
  function buildIndicatorSheet(){
    // Built from `timingMembers`: the SAME rows as everywhere else, one destination per reading. No per-class
    // pages — a timing chip opens a TAB of this page (openIndicatorsPage), and the grouping answers "what does
    // leading mean".
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
    // The roster is reached from the Cycle tab's Browse list, so it lives among that tab's content —
    // PAGE_HOME.cycle hides #today-analysis, and a page that is not inside what its home hides stays on screen
    // underneath whatever opens over it.
    (byId("today-analysis") || NAV.panel).appendChild(indSheet);

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
    // a reading's timing chip opens THIS page on the matching tab rather than a page of its own
    openIndicatorsPage = function(tab){
      var btn = document.querySelector('.tab-btn[data-tab="cycle"]');
      if (btn && !btn.classList.contains("active")) btn.click();
      setIndTab(tab && tab !== "structural" ? tab : "all");
      NAV.open(indSheet, "All indicators", false, "cycle");
    };
  }

  /* ---------------- THE CYCLE TAB: cards and categories ----------------
     The cards at the top, the four category boxes, and the rows physically moved into them. It hands the
     inner pages the readings they share and nothing else.
     The peek cards are today's readings only — they live in #today-analysis, not in the cycle view, so a past
     cycle opened from the Calendar never borrows them. Both headline figures are taken from the same place
     their pages take them, so the two can never disagree: Temperature from its own indicator, Growth from the
     season model's latest quarter, which is also what the Growth chart reads at its end line. */
  function renderPeekAndCategories(){
    var host = byId("peek-row"); if (!host) return null;   // null, so the caller can stop too
    var tempInd = lagging.concat(coincident).filter(function(c){ return c.bodyTerm === "Temperature"; })[0];
    var r = nowModel.reading, era = nowModel.era;
    var cpiWord = r.cpiHot ? "Hot" : r.cpiCold ? "Cold" : "Warm";
    var cpiDir = r.cpiDirection === "rising" ? "heating" : r.cpiDirection === "falling" ? "cooling" : "steady";
    var gq = gdpQuarterlyYoY.filter(function(d){ return parseInt(d.q.slice(0, 4), 10) >= era.from; });
    var capeNow = valRow("cape").meter.value, buffNow = valRow("buffett").meter.value;
    // Both long series are carried to TODAY before anything draws them, so every page's line finishes on the number
    // printed above it. Neither point is invented: the power composite for this year is stressScoreFor() run on
    // this year's three markers — the same call the row makes — and CAPE's is the published Sep 17 reading
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
                 // a true miniature of its own page: the same quarterRegime() the chart reads, so the two cannot
                 // show different pictures of one cycle
                 target:"sheet-metric-gdp", cols:gq.map(function(d){ return d.v; }),
                 colClass:function(v, i){
                   return "gdp-col " + (v < 0 ? "below" : quarterRegime(gq[i]) === "contraction" ? "neg" : "pos");
                 } }) +
      // Keren, V353: "in the power page, change the title to economic power." The card keeps the short kicker —
      // tiles in a grid, and "Economic power" wraps where "Power" does not — while the page it opens takes the
      // full name.
      peekCard({ kicker:"Power", title:"Economic power", mark:boltSvg(), value:powerScore + "%",
                 unit:"reserve", word:powerWord.word,
                 state:powerWord.state, target:"sheet-metric-power", ring:powerScore }) +
      // a miniature of its own diverging page: bars out of the 17× fair line, both ways
      peekCard({ kicker:"Valuations",
                 mark:diamondSvg(),
                 value:capeNow.toFixed(1) + "\u00d7", unit:"CAPE", word:valuation.tag.text,
                 state:valuation.tag.state, target:"sheet-metric-valuation",
                 cols:capeHistory.map(function(d){ return d.v; }), colBase:CAPE_FAIR,
                 colClass:function(v){ return "dv-bar " + (v > CAPE_FAIR ? "over" : "under"); } }) +
      // Households: the bill and what is left, on one denominator, a pair at a glance. Keren, V463: "debt service
      // is too general — there is government debt service and household debt service." The row carries what is
      // PAID and what is KEPT.
      peekCard({ kicker:"Households",
                 mark:houseSvg(),
                 value:dsrNow.toFixed(1) + "/" + savNow.toFixed(1), unit:"% paid / kept",
                 word:householdsNow.word, state:householdsNow.state, target:"sheet-metric-households",
                 cols:savHistory.slice(SAV_OFFSET), colBase:0,
                 colClass:function(){ return "hh-col"; } }) +
      "";

    // Keren, V292: "put Effort and Pulse under Sentiment." Coincident signs, not headline readings, so they sit
    // among the signs as a pair of cards, comparable at a glance. The unit is named short (M2 velocity; M2, YoY)
    // so nothing wraps: a row of cards has one height.
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
      var after = byId("sheet-sign-sentiment");
      if (!after || !after.parentNode) return;
      var row = document.createElement("div");
      row.className = "peek-row"; row.id = "peek-row-signs";
      row.innerHTML = pair;
      after.parentNode.insertBefore(row, after.nextSibling);

      /* Hormones sits above this pair: all three read the circulation (Keren, V348: "put pressure above the
         pulse and volume row"), and the rate is the CAUSE the pulse and the volume answer to. MOVED, never
         rebuilt: moving keeps the row's miniature, data ids and open handler alive, and its hidden sheet
         follows it, so every row here is still immediately followed by its own page. */
      var horm = document.querySelector('.sign-row[data-subject="hormones"]');
      var hormSheet = byId("sheet-sign-hormones");
      if (horm && hormSheet && horm.parentNode === row.parentNode){
        row.parentNode.insertBefore(horm, row);
        horm.parentNode.insertBefore(hormSheet, horm.nextSibling);
      }
    })();

    // Keren, V353: "in the cycle page, switch positions between sentiment and activity." The rows live in
    // different containers, so nodes swap between parents. Two comment markers hold the outgoing slots, or the
    // second move would have nothing left to aim at. Each row's sheet travels with it; moving (never rebuilding)
    // keeps both rows alive, as for Hormones above.
    (function(){
      var sent = document.querySelector('.sign-row[data-open="sheet-sign-sentiment"]');
      var act  = document.querySelector('.sign-row[data-open="sheet-sign-activity"]');
      var sentSheet = byId("sheet-sign-sentiment");
      var actSheet  = byId("sheet-sign-activity");
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

    /* ================= The homepage is Summary + Browse =================
       Keren, V446, copying Apple Health's homepage: "I want to segmentize the KPIs." Temperature and growth are
       WEATHER, not Season: computeSeason() turns those two into the season, so a box named for it would make the
       conclusion a peer of its inputs, and the dial already IS the season. Apple Health has no categories of one.
       Then: "for now, drop the pinned components" — the Summary is the dial alone.
       Members are MOVED, not rebuilt, so what is inside stays alive (sparklines, data ids, open handlers). Their
       hidden pages stay put: openMetricPage finds a page by id, and back already handles a page opened from a
       page. */
    (function(){
      var host = byId("today-analysis"); if (!host) return;
      var CATS = [
        { key:"weather", title:"Weather", mark:weatherSvg(), sub:"Temperature \u00b7 Growth",
          picks:['.peek[data-open="sheet-metric-temp"]', '.peek[data-open="sheet-metric-gdp"]'] },
        { key:"circulation", title:"Circulation", mark:circulationSvg(), sub:"Hormones · Pressure · Pulse · Volume",
          /* The order is the physiology, read in the direction the causation runs: the rate the Fed SETS, the
             rate the market CHARGES (Keren, V639: "pressure should be yields"), how fast the money moves, and
             how much of it there is. */
          picks:['.sign-row[data-subject="hormones"]', '.sign-row[data-subject="pressure"]',
                 '.peek[data-open="sheet-sign-pulse"]', '.peek[data-open="sheet-sign-volume"]'] },
        /* Keren, V473: "calling it Horizon and judging if it’s optimistic or pessimistic, which correlates with
           ovulation and menstruation — so it belongs to Mood." Keren, V598: "if the horizon says if we're
           optimistic or pessimistic, then it should be in mood." Mood holds OPINIONS — what the market will PAY,
           how frightened it is, how much risk it WANTS, what the bond market expects — and Energy measurements.
           (The market's words for the feeling are bullish and bearish; long and short are positions taken.) */
        { key:"mood", title:"Mood", mark:moodSvg(), sub:"Valuations · Fear · Desire · Horizon",
          /* Keren, V466: "the VIX is called the fear index — we don't need two fear meters on the Mood page, so
             put the VIX inside Fear & Greed." The VIX is one of the index's SEVEN COMPONENTS, and a part cannot
             be the peer of its own composite, so it is a reading under the gauge. */
          picks:['.peek[data-open="sheet-metric-valuation"]', '.sign-row[data-open="sheet-sign-sentiment"]',
                 '.sign-row[data-open="sheet-sign-desire"]', '.sign-row[data-open="sheet-sign-horizon"]'] },
        /* Keren, V457: "economic power should move from circulation to activity, and activity should be renamed
           to energy." Power is the reserve she has, Activity what she spends it on; Power's word is on an energy
           scale (Energetic, Steady, Tired, Exhausted). Keren, V462: "we don't need a new category named Load —
           stress is connected to energy, so put a debt service page inside Energy." `energyFromReserve()` inverts
           the fiscal STRESS score, so a separate category would show a verdict in one box and its inputs in
           another. Energy: what is left (Power), what is owed (Households), where it goes (Activity). The federal
           three stay on Power's page, computed into its word. Horizon is an opinion, so it is in Mood. */
        { key:"energy", title:"Energy", mark:boltSvg(), sub:"Power · Households · Activity",
          picks:['.peek[data-open="sheet-metric-power"]', '.peek[data-open="sheet-metric-households"]',
                 '.sign-row[data-open="sheet-sign-activity"]'] }
      ];
      /* Each reading's PERIOD, not a timestamp: CPI is FOR August, M2 velocity for Q2. A clock time would be the
         compile date on every row, claiming August's CPI was updated today. Every value is read off the series it
         labels, so none can go stale by being forgotten. */
      function fmtDay(d){ return MONTHS_SHORT[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear(); }
      function qPretty(q){ var p = String(q).split(" "); return p.length > 1 ? p[1] + " " + p[0] : String(q); }
      // where a member already STATES its date, it states it inside the unit — "high-yield OAS, Sep 23 2026" —
      // which is why that line reads as clutter rather than as a timestamp. The corner takes the date and the
      // unit keeps the unit. Taken from what the app already says, never computed for it.
      var DATED_UNIT = /^(.*?),\s*((?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[^,]*|Q[1-4]\s+\d{4})$/;
      var PERIOD = {
        "sheet-metric-temp":      atMonth(cpiYoYHistory[cpiYoYHistory.length - 1]),
        "sheet-metric-gdp":       qPretty(gdpQuarterlyYoY[gdpQuarterlyYoY.length - 1].q),
        "sheet-sign-horizon":     fmtDay(DATA_COMPILED),   // a spot spread, like the pair it is taken from
        "sheet-sign-pulse":       qPretty(qAtIndex(M2V_FROM_YEAR, m2vHistory.length - 1)),
        "sheet-sign-volume":      indPeriod("Volume") || qPretty(qAtIndex(M2_FROM_YEAR, m2Yoy.length - 1)),
        "sheet-metric-power":     String(powerHistory[powerHistory.length - 1].y),
        "sheet-sign-sentiment":   fmtDay(DATA_COMPILED),
        // the DECISION's date, not the series': the row states the target the FOMC set, and the date that
        // belongs beside it is the day they set it
        "sheet-sign-hormones":    fedFunds.asOf,
        "sheet-sign-pressure":    fmtDay(DATA_COMPILED),   // a spot yield, like Horizon's spread beside it
        "sheet-metric-valuation": String(capeHistory[capeHistory.length - 1].y),
        "sheet-metric-households": qPretty(qAtIndex(DSR_FROM_YEAR, dsrHistory.length - 1))
      };
      var MINI = {
        "sheet-sign-sentiment": ".subject-ring > svg"                 // its Fear & Greed ring
      };
      /* every peek art carries `.peek-chart`, so this asks for the thing by name rather than by where it sits */
      function peekArt(src){ return src.querySelector(".peek-chart"); }
      /* Volume's row shows a MONTHLY figure above a QUARTERLY chart, so its period comes from the figure, not the
         series under it (the chart's last index would be wrong for the number beside it): from the indicator's
         own sub-line, where the app already states it. */
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
        /* A snapshot of the source AS AUTHORED, taken FIRST: this function moves the figure and the verdict into
           the new item and removes the source, so anything reading a row or card afterwards finds nothing — and
           the roster's `if (!row) return` would skip it silently (see `authored`). */
        (window.__CAT_SNAP = window.__CAT_SNAP || {})[open] = src.cloneNode(true);
        var item = document.createElement("button");
        item.type = "button"; item.className = "cat-item";
        item.setAttribute("data-open", open);
        item.setAttribute("data-title", src.getAttribute("data-title") || "");
        var head = document.createElement("div"); head.className = "ci-head";
        /* Keren, V449, of Desire on the Mood page: "the fire icon is just floating around — it needs the same
           styling as the icon in valuations, grey and refined, without a green background." A row's mark is a
           state-tinted BADGE that has no size outside its row; the bare glyph is lifted out and given the peek
           treatment, so members built from rows and from cards are the same object. */
        var markSrc = src.querySelector(".peek-mark, .subject-icon");
        if (markSrc){
          var glyph = markSrc.querySelector("svg");
          var holder = document.createElement("span");
          holder.className = "peek-mark";
          if (glyph) holder.appendChild(glyph);
          head.appendChild(holder);
        }
        var nm = document.createElement("span"); nm.className = "ci-name";
        // a card's kicker and its page's title may differ (Keren, V353, at the Power card), and the row is the
        // card's size, not the page's — "Power", not "Economic power".
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
          /* Keren, V504: "in Mood there are different sizes of fonts — make sure everything is aligned to the
             same component." The figure element is MOVED in as `.peek-value` (card) or `.subject-value` (row),
             each with its own sizes, so the class is normalised here: a row's look must not depend on the markup
             it was lifted from. Anything else inside it — a tag, a second figure — keeps its own classes. */
          val.className = "ci-value";
          if (unit) unit.className = "ci-unit";
          read.appendChild(val);
        }
        /* The verdict, wherever the row keeps it. Most members say it in a word element under the figure;
           Sentiment says it INSIDE the value, as a tag after the unit, and its own word element is empty — so it
           is taken from there, and every member has its word on a line of its own. One shape for all. */
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
        // the card it was built from is empty now, and an empty card is still a card: left on the homepage it
        // would keep its border and its padding
        if (src.parentNode) src.parentNode.removeChild(src);
        return item;
      }
      /* ================= Volume × Pulse =================
         Keren, V452: "check how the combined insights work — when we talk about blood we can see the
         correlations." A combination must hold in economics, not only in anatomy: the body is how an insight is
         EXPLAINED, never how it is derived. This one is an identity, M×V = P×Y — Volume IS M, Pulse IS V, and
         their product is nominal demand — and every figure is read off its series. Deliberately NO state colour:
         whether money growing and circulating faster is good is a judgement about inflation, and this card says
         what the two are doing together, not how to grade it. */
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
        var circLede = '<p class="hi-lede">Volume is the blood and Pulse is the heart rate; multiplied they ' +
          'are cardiac output — how much money there is times how hard each unit works. Pressure is the ' +
          'resistance that flow meets, and Hormones is the signal that sets all three.</p>';
        var txt = "M2 is " + f1(volPct) + " over the year and each dollar turns over " +
          f1(velChg).replace("+", "") + " " + (vup ? "more" : "less") + " often than a year ago, so " +
          (up === vup ? "both are pushing the same way." : "they are pulling against each other.");
        // the run is only worth saying when it is a run; and the cycle clause only when it is actually true
        if (run >= 8){
          var oc = openCycle();
          txt += " Velocity has risen for " + run + " straight quarters" +
            (oc && runFromY === oc.from ? ", every quarter of this cycle," : ",") +
            " and sits " + offLow.toFixed(0) + "% above its " + (M2V_FROM_YEAR + Math.floor(loI / 4)) + " low.";
        }
        return '<section class="highlights insights"><div class="hi-head">Insights</div>' +
               circLede + hiCard(name, "", txt) + '</section>';
      }
      /* ================= The barometer =================
         Keren, V468: "total growth and total change in prices are equal at the end of each cycle, more or less —
         I think it can be a good barometer in the weather page." They finish close, but the GAP is the reading,
         so the card measures it and says which way it leans; named for the instrument, her word. Nothing is
         typed: both totals use the pages' OWN methods (totalGrowthYears compounds annual real-GDP rates,
         totalRiseIn the Decembers), so the figures are the ones Growth and Temperature print, over the same
         closed years. No state colour, for the Circulation card's reason. */
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
        var wxLede = '<p class="hi-lede">Heat and build-up are two readings of one season, and over a whole ' +
          'cycle they finish close together: the economy grows about as much as it costs more. When prices run ' +
          'far ahead, the body is paying more without getting bigger.</p>';
        return '<section class="highlights insights"><div class="hi-head">Insights</div>' +
               wxLede + hiCard("The barometer", "", txt) + '</section>';
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
        list.appendChild(elFrom(subjectRow({
          cls:"cat-row", open:c.open || ("sheet-cat-" + c.key), title:c.title,
          icon: subjectIcon("norm", c.mark),
          text: '<div class="subject-label">' + c.title + '</div><div class="cat-sub">' + c.sub + '</div>'
        })));
      });
      // not `cat-row`: this is not a category. No members line either (Keren, V501): the four above list their
      // members because a member is a place you can go; these four words are a taxonomy, and the page behind this
      // row explains it better than a subtitle can.
      list.appendChild(elFrom(subjectRow({
        cls:"all-row", open:"sheet-indicators", title:"All indicators",
        icon: subjectIcon("norm",
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" ' +
          'stroke-linecap="round" aria-hidden="true"><path d="M4 6.5h0.6"/><path d="M9 6.5h11"/>' +
          '<path d="M4 12h0.6"/><path d="M9 12h11"/><path d="M4 17.5h0.6"/><path d="M9 17.5h11"/></svg>'),
        text: '<div class="subject-label">All indicators</div>'
      })));
      host.insertBefore(list, host.firstChild);
      // whatever the moves emptied gives up its place rather than its gap
      ["peek-row", "peek-row-signs", "signs-list"].forEach(function(id){
        var el = byId(id);
        if (el && !el.querySelector("*") && el.parentNode) el.parentNode.removeChild(el);
      });
    })();

    /* The six values the inner pages read out of this one. Nothing goes the other way, which is what lets the
       two be separate functions. */
    return { host:host, tempInd:tempInd, r:r, gq:gq, capeNow:capeNow, buffNow:buffNow };
  }

  /* ---------------- THE INNER PAGES ----------------
     What each metric draws when it opens: a chart where there is one, then Highlights. Takes the values the
     cards computed rather than reaching into their scope for them. */
  function renderMetricPages(ctx){
    var host = ctx.host, tempInd = ctx.tempInd, r = ctx.r, gq = ctx.gq;
    var capeNow = ctx.capeNow, buffNow = ctx.buffNow;
    // ---------------- The inner pages: a chart where there is one to draw, then Highlights ----------------
    var pct0 = function(v){ return Math.round(v) + "%"; }, pct1 = function(v){ return v.toFixed(1) + "%"; };
    var capeFmt1 = function(v){ return v.toFixed(1) + "\u00d7"; };

    // No page head on Power. Keren: "this is basically the power supply bar, so we can remove it from the top of
    // the page"; Keren, V360: "drop the battery indicator." Everything the head said is said below it — the figure
    // on the chart and in the table, the word on the trend row and in the table, the flagged count in the context
    // line under the table.
    put("power-head", "");
    // Valuations has no head either: its figure duplicated the chart's own end label (the duplication Keren
    // reported). The page opens on the chart; the verdict is on the trend row.
    put("valuation-head", "");

    // the bands energyFromReserve() already uses, so a bar's colour and the word beside the figure cannot disagree
    function reserveState(v){ return v >= 70 ? "good" : v >= 50 ? "warning" : v >= 30 ? "serious" : "critical"; }
    // What each page offers the ruler — the whole per-page configuration; order, labels, answerability and what a
    // window means live in the timeline component. The ruler is windows on one series (Years: how much calendar
    // time; Cycles: which cycles). A 50Y stop on a series from 1989 is dropped unasked; 5Y is offered because
    // timelineFor withholds it only where "This cycle" is offered, and nowhere is.
    var TEMP_STOPS  = ["5y", "10y", "25y", "max"];
    // Keren, V372: "drop the this cycle and year on year, add 5Y". No country selector: it drives the per-cycle
    // CYCLE chart and has nothing to drive beside a long history (it still works on the Cycle tab). yoyPairs(),
    // pairChart() and the yoy branch below are deliberately left standing: re-adding "yoy" here brings it back.
    var GDP_STOPS   = ["5y", "10y", "25y", "max"];   // "Current cycle" is in the Cycles mode, as on every page
    var POWER_STOPS = ["5y", "10y", "25y", "max"];   // series from 1948
    var VAL_STOPS   = ["5y", "10y", "25y", "max"];   // series from 1970
    var DEF_STOPS   = ["5y", "10y", "25y", "max"];   // series from 1946

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
      // the cycle's own age, and a dead control is worse than no control
      // the mode bar on top, its own submenu under it: Cycles picks cycles, Years picks a window
      put("temp-rangebar", histControls("sheet-metric-temp", { series:cpiYoYHistory, stops:TEMP_STOPS }));
      put("temp-head", histHead("sheet-metric-temp"));
      byId("slot-temp").hidden = true;   // the cycle card lives on the Cycle tab
      var hist = byId("temp-history"); hist.hidden = false;
      var win, cyc = null;
      if (cyclesOn){
        cyc = cycleByName(pageCycles["sheet-metric-temp"]) || openCycle();
        var span = cycleMonths(cyc);
        win = span ? cpiYoYHistory.slice(span[0], span[1]) : [];
        hist.innerHTML = cpiHistoryChart(hist.clientWidth || W, span ? span[0] : 0,
                                         { to:span ? span[1] : undefined, cycle:true });
        attachHistory(hist, "temp-hist-tooltip", "cpiHistoryChart");   // same chart, so the same crosshair
        put("temp-trend", trendPill(trendOf(win.map(function(d){ return d.v; }), "points", "month"), null, true,
                    { rising:"heating", falling:"cooling" }));
      } else {
        var from = mWindowFrom(cpiYoYHistory.length, r); win = cpiYoYHistory.slice(from);
        hist.innerHTML = cpiHistoryChart(hist.clientWidth || W, from);
        attachHistory(hist, "temp-hist-tooltip", "cpiHistoryChart");
        // the fit is over the months IN VIEW, so the pill and the picture can never describe different stretches
        put("temp-trend", trendPill(trendOf(win.map(function(d){ return d.v; }), "points", "month"), null, true,
                    { rising:"heating", falling:"cooling" }));
      }
      // Keren, V423: "make all the data be relevant to the chosen timeline — the data should be updated below the
      // chart." Every row describes the months on screen (so no "on record" in the labels), and there is no
      // average row: the average is ON the chart in every window.
      var tri = totalRiseIn(win);
        // Keren, V494: "total price change 16% — in the Highlights component." The NAME is the considered part:
        // "price change" is the BLS's own primary descriptor for what the CPI measures, direction-neutral because
        // inflation and deflation are the directional pair (and Inflation is a season here). "Cost of living" is
        // warmer, but the BLS cautions the CPI "differs in important ways" from one; "change in the price level" is
        // the textbook phrase and jargon here.
        headSigma("sheet-metric-temp", tri ? fmtSigned(tri.total, 0) + "%" : null);
    };
    sheetRenderers["sheet-metric-gdp"] = function(W){
      var r = pageRange["sheet-metric-gdp"], yoy = r === "yoy";
      var cyclesOn = pageMode["sheet-metric-gdp"] === "cycles";
      put("gdp-rangebar", histControls("sheet-metric-gdp", { series:gdpQuarterlyYoY, stops:GDP_STOPS }));
      put("gdp-head", histHead("sheet-metric-gdp"));
      byId("slot-growth").hidden = true;   // the cycle card lives on the Cycle tab
      // the reading is the latest quarter, not the window's, so it is set once and every branch below leaves it
      // alone — including the one that returns early
      var gp = byId("gdp-panel");
      if (gp && !gp.firstChild) gp.innerHTML = growthPanelHtml();
      var hist = byId("gdp-history"); hist.hidden = yoy;
      var box = byId("gdp-yoy"); box.hidden = !yoy;
      if (!yoy){
        var gCyc = cyclesOn ? (cycleByName(pageCycles["sheet-metric-gdp"]) || openCycle()) : null;
        var gSpan = gCyc ? cycleSlice(gdpQuarterlyYoY, gCyc) : null;
        var gFrom = gSpan ? gSpan[0] : qWindowFrom(gdpQuarterlyYoY.length, r);
        var gTo = gSpan ? gSpan[1] : undefined;
        var win = gdpQuarterlyYoY.slice(gFrom, gTo);
        hist.innerHTML = gdpHistoryChart(hist.clientWidth || W, gFrom, { to:gTo, cycle:!!gSpan });
        attachHistory(hist, "gdp-hist-tooltip", "gdpHistoryChart");
        // the rows describe the window, exactly as Temperature's do
        var gy0 = yearOf(win[0]), gy1 = yearOf(win[win.length - 1]), gt = totalGrowthYears(gy0, gy1);
        // Keren, V494: "total growth 11% — in the Highlights component."
        headSigma("sheet-metric-gdp", gt ? fmtSigned(gt.total, 0) + "%" : null);
        put("gdp-trend", trendPill(trendOf(win.map(function(d){ return d.v; }), "points", "quarter"), null, true,
                    { rising:"quickening", falling:"slowing" }));
        return;
      }
      if (yoy){
        var pairs = yoyPairs(gdpLevels, 4), last = pairs[pairs.length - 1];
        box.innerHTML = pairChart({
          pairs:pairs, unit:"real GDP, chained 2017 dollars",
          alt:"The four latest quarters of real GDP, each joined to the same quarter a year earlier; the gap between the two is that quarter\u2019s year-over-year growth"
        }, W);
        put("gdp-trend", trendPill({ word:fmtSigned(last.pct, 1) + "% this quarter",
                      detail:last.label.replace("\u2019", "20") + " measured against " + last.wasLabel.replace("\u2019", "20") }, "Year on year"));
      } else {
        var eraQ = gdpQuarterlyYoY.filter(function(d){ return parseInt(d.q.slice(0, 4), 10) >= currentEra.from; });
        put("gdp-trend", trendPill(trendOf(eraQ.map(function(d){ return d.v; }), "points", "quarter"), null, false,
                    { rising:"quickening", falling:"slowing" }));
      }
    };

    /* Activity's history. The window helpers here are generic rather than borrowed — `cycleMonths` is written
       against cpiYoYHistory, which starts in 1989, and this series starts in 1948, so a cycle's month indices
       have to be computed from THIS series' own first month. */
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
      var id = "sheet-sign-activity", bar = byId("act-rangebar");
      if (!bar) return;
      bar.innerHTML = histControls(id, { series:unempHistory, stops:ACT_STOPS });
      var hist = byId("act-history"); if (!hist) return;
      var cyc = pageMode[id] === "cycles" ? (cycleByName(pageCycles[id]) || openCycle()) : null;
      var span = cyc ? actCycleMonths(cyc) : null;
      var from = span ? span[0] : mWindowFrom(unempHistory.length, pageRange[id]);
      var to = span ? span[1] : undefined;
      hist.innerHTML = unempHistoryChart(hist.clientWidth || W, from, { to:to, cycle:!!span });
      attachHistory(hist, "act-hist-tooltip", "unempHistoryChart");
      var win = unempHistory.slice(from, to).filter(function(d){ return d.v != null; });
      // the pair of words is the labour market's own, not a chart's: unemployment RISES as the market loosens
      put("act-trend", trendPill(trendOf(win.map(function(d){ return d.v; }), "points", "month"), null, true,
                                 { rising:"loosening", falling:"tightening" }));
    };
    sheetRenderers["sheet-metric-power"] = function(W){
      var r = pageRange["sheet-metric-power"], pwCycles = pageMode["sheet-metric-power"] === "cycles";
      var pwCyc = pwCycles ? (cycleByName(pageCycles["sheet-metric-power"]) || openCycle()) : null;
      var pwSpan = pwCyc ? cycleSlice(powerHistory, pwCyc) : null;
      var vals = pwSpan ? powerHistory.slice(pwSpan[0], pwSpan[1]) : timelineWindow(powerHistory, r);
      var powerTrend = trendOf(vals.map(function(d){ return d.v; }), "points", "year");
      put("power-chart", histBar(histControls("sheet-metric-power", { series:powerHistory, stops:POWER_STOPS })) +
        '<div class="page-chart">' + histHead("sheet-metric-power") +
        reserveChart({
          vals:vals, stateOf:reserveState, fmt:pct0, ref:70, refLabel:"ample reserve, 70%",
          fit:powerTrend.fit,
          alt:"Power, the three-marker composite, one charge per year" +
              (r === "max" ? " since " + powerHistory[0].y : " over the last " + timelineSpan(r) + " years") +
              ", with the fitted trend across the readings in view"
        }, W) +
        // No caption (Keren, V439): the Power supply explanation below already says it; the y axis names the bands.
        // Keren, V436: "the exhausted is in a bubble — it's not consistent, in temperature you just write Trend."
        // A tag here was the page saying its verdict twice.
        trendPill(powerTrend, null, true) +
        // Keren, V491: the readings come inside, below the trend. Several readings in one history container are
        // divided by hairlines rather than boxed one by one; a single reading gets the box.
        '<div class="panel-stack in-hist">' + powerPanelHtml + '</div>' +
        histTip("power-hist-tooltip") + '</div>');
      var pBox = document.querySelector("#power-chart .page-chart");
      refitHistory(pBox, function(w){
        return reserveChart({ vals:vals, stateOf:reserveState, fmt:pct0, ref:70, refLabel:"ample reserve, 70%",
                              fit:powerTrend.fit, alt:"Power supply, one charge per year" }, w);
      });
      attachHistory(pBox, "power-hist-tooltip", "reserveChart");
    };
    // The deficit's page (Keren, V360: "the federal budget deficit needs to be expandable from the deficit rate in
    // the power supply component"). As a second container on the Economic power page it sat between the
    // composite's chart and the three markers that make it — interrupting the one argument the page exists to carry.
    sheetRenderers["sheet-marker-deficit"] = function(W){
      var sheet = byId("sheet-marker-deficit"); if (!sheet) return;
      if (!sheet.firstChild) sheet.innerHTML = deficitBlock();
      sheetRenderers["deficit-range"](W);
    };
    // The deficit block's zoom. It measures its OWN host rather than trusting the width the shared range
    // handler passes (that one is the page's width, and this chart sits inside a padded card).
    sheetRenderers["deficit-range"] = function(W){
      var host = byId("deficit-record"); if (!host) return;
      var key = pageRange["deficit-range"], defCycles = pageMode["deficit-range"] === "cycles";
      var defCyc = defCycles ? (cycleByName(pageCycles["deficit-range"]) || openCycle()) : null;
      // FY figures are one per year from DEF_FROM_YEAR, so a cycle is a plain index range
      var defIdx = defCyc ? [Math.max(0, defCyc.from - DEF_FROM_YEAR),
                             Math.min(deficitHistory.length, (defCyc.to || calendarTodayY) - DEF_FROM_YEAR + 1)] : null;
      var from = defIdx ? defIdx[0] : defFrom(key), defTo = defIdx ? defIdx[1] : undefined;
      var bar = put("deficit-rangebar", histControls("deficit-range",
        { depth:deficitHistory.length, stops:DEF_STOPS }));
      host.innerHTML = deficitChart(host.clientWidth || W, from, defTo);
      var defRows = put("deficit-records", "");   // no register: the readout carries the average
      attachHistory(host, "deficit-hist-tooltip", "deficitChart");
      var dTrend = put("deficit-trend", trendPill(
        trendOf(deficitHistory.slice(from, defTo), "points", "year"), null, true,
        { rising:"improving", falling:"widening" }));
    };
    /* Households. The same six pieces every history on this app has — the controls, the chart,
       the unit line, the record rows, the trend pill, the tooltip — so a reader arriving from any other page
       already knows how to read it. The rows follow the BILL, because that is the reading the row is named
       for; the pill follows what is KEPT, because that is the line that is moving, and it says so in its own
       words rather than borrowing "rising" and "falling" from a chart that has two directions in it. */
    var HH_STOPS = ["5y", "10y", "max"];   // the series is 21 years deep, and 25Y needs 25 years of data
    sheetRenderers["sheet-metric-households"] = function(W){
      var id = "sheet-metric-households";
      var hhCyc = pageMode[id] === "cycles" ? (cycleByName(pageCycles[id]) || openCycle()) : null;
      if (hhCyc && hhCyc.from < DSR_FROM_YEAR) hhCyc = openCycle();   // never offer a window the data cannot fill
      var idx = hhCyc ? cycleQtrIdx(DSR_FROM_YEAR, hhCyc, dsrHistory.length) : null;
      var from = idx ? idx[0] : qWindowFrom(dsrHistory.length, pageRange[id]);
      var to = idx ? idx[1] : dsrHistory.length;
      var host = byId("households-chart"); if (!host) return;
      host.innerHTML =
        histBar(histControls(id, { depth:Math.floor(dsrHistory.length / 4), stops:HH_STOPS }, DSR_FROM_YEAR)) +
        '<div class="page-chart">' + histHead(id) +
        householdsChart(W, from, to) +
        trendPill(trendOf(savHistory.slice(SAV_OFFSET + from, SAV_OFFSET + to), "points", "quarter"),
                  "Saving", true, { rising:"keeping more", falling:"keeping less" }) +
        // two readings, so hairlines (see Power's renderer). The bill first because the chart draws it first,
        // and the cushion second because it is the one that sets the page's word.
        '<div class="panel-stack in-hist">' + householdsPanelHtml() + '</div>' +
        histTip("households-hist-tooltip") + '</div>';
      var box = host.querySelector(".page-chart");
      refitHistory(box, function(w){ return householdsChart(w, from, to); });
      attachHistory(box, "households-hist-tooltip", "householdsChart");
      var hl = put("households-highlights", householdsHighlights());
    };
    /* Two cards, one for each line, and every figure in them is read off the series it describes — including
       the count, which is the whole point of carrying the saving rate back to 1947. */
    function householdsHighlights(){
      var peak = Math.max.apply(null, dsrHistory), peakAt = qAtIndex(DSR_FROM_YEAR, dsrHistory.indexOf(peak));
      var offPeak = (1 - dsrNow / peak) * 100;
      var lower = savHistory.map(function(v, i){ return { v:v, i:i }; })
                            .filter(function(d){ return d.v <= savNow && d.i < savHistory.length - 1; });
      var run = lower.filter(function(d){ var y = SAV_FROM_YEAR + Math.floor(d.i / 4); return y >= 2005 && y <= 2008; });
      var years = SAV_FROM_YEAR + Math.floor((savHistory.length - 1) / 4) - SAV_FROM_YEAR;
      var hhLede = '<p class="hi-lede">Two halves of one household: what it owes every month, and what is left ' +
        'after. The bill is the load the body carries; the cushion is what it has stored against a month that ' +
        'goes wrong.</p>';
      var billTxt = "Households pay " + dsrNow.toFixed(1) + "% of what they take home to service debt, against " +
        DSR_MEAN.toFixed(1) + "% on average since " + DSR_FROM_YEAR + " and a peak of " + peak.toFixed(1) + "% in " +
        peakAt + ". That is " + offPeak.toFixed(0) + "% below the peak, and flat for two years.";
      var keptTxt = "What is left over is " + savNow.toFixed(1) + "% of income — only " + lower.length +
        " quarters in the " + years + " years since " + SAV_FROM_YEAR + " have been lower, and " + run.length +
        " of them ran from 2005 to early 2008. The bill is not the strain here; the cushion is.";
      return highlightsHtml([hhLede, hiCard("The bill", "", billTxt),
                             hiCard("The cushion", householdsNow.state, keptTxt)]);
    }
    sheetRenderers["sheet-metric-valuation"] = function(W){
      var r = pageRange["sheet-metric-valuation"], vlCycles = pageMode["sheet-metric-valuation"] === "cycles";
      var vlCyc = vlCycles ? (cycleByName(pageCycles["sheet-metric-valuation"]) || openCycle()) : null;
      var vlSpan = vlCyc ? cycleSlice(capeHistory, vlCyc) : null;
      var vals = vlSpan ? capeHistory.slice(vlSpan[0], vlSpan[1]) : timelineWindow(capeHistory, r);
      var capeTrend = trendOf(vals.map(function(d){ return d.v; }), "\u00d7", "year");
      put("valuation-chart", histBar(histControls("sheet-metric-valuation", { series:capeHistory, stops:VAL_STOPS })) +
        '<div class="page-chart">' + histHead("sheet-metric-valuation") +
        divergeChart({
          vals:vals, mid:CAPE_FAIR, midLabel:"fair value, " + CAPE_FAIR + "\u00d7", fmt:capeFmt1,
          // the axis ticks are round by construction, so "40×" rather than the reading's "40.0×"
          tickFmt:function(v){ return v + "\u00d7"; },
          fit:capeTrend.fit,
          alt:"Shiller CAPE against its long-run fair value, each January" +
              (r === "max" ? " since " + capeHistory[0].y : " of the last " + timelineSpan(r) + " years") +
              ", with the fitted trend across the readings in view"
        }, W) +
        // the rows follow the window; the long reference stays in the picture because the fair-value midline is
        // drawn beside the window's average, so a short average cannot make a near-record valuation look ordinary
        trendPill(capeTrend, null, true) +   // no tag, as on Power: the reading's own tag is already on the page
        // Keren, V491: Buffett and CAPE come inside, below the trend (see Power's renderer)
        '<div class="panel-stack in-hist">' + valuationPanelHtml + '</div>' +
        histTip("valuation-hist-tooltip") + '</div>');
      var vBox = document.querySelector("#valuation-chart .page-chart");
      refitHistory(vBox, function(w){
        return divergeChart({ vals:vals, mid:CAPE_FAIR, midLabel:"fair value, " + CAPE_FAIR + "\u00d7",
                              fmt:capeFmt1, tickFmt:function(v){ return v + "\u00d7"; }, fit:capeTrend.fit,
                              alt:"Shiller CAPE against its long-run fair value, each January" }, w);
      });
      attachHistory(vBox, "valuation-hist-tooltip", "divergeChart");
    };
    function redrawSheet(id){
      var h = byId("metric-page"), d = sheetRenderers[id];
      if (d) d(h && h.clientWidth ? h.clientWidth : 340);
    }
    // The cycle picker. One listener covers opening, ticking and closing, and the order of the three tests is
    // what makes a click on the menu not also count as a click outside it.
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
      var mid = seg.parentNode.getAttribute("data-mode-for");   // the same segmented control, other axis
      if (mid && (mid in pageMode)){
        pageMode[mid] = seg.getAttribute("data-mode");
        var mHost = byId("metric-page"), mDraw = sheetRenderers[mid];
        if (mDraw) mDraw(mHost && mHost.clientWidth ? mHost.clientWidth : 340);
        return;
      }
      /* series choices (Horizon's spread, Pressure's maturity) arrive through the head's ⋯ menu (.bh-pick),
         not through a bar here */
      var id = seg.parentNode.getAttribute("data-range-for");
      if (!(id in pageRange)) return;
      pageRange[id] = seg.getAttribute("data-range");
      var host = byId("metric-page");
      var draw = sheetRenderers[id]; if (draw) draw(host && host.clientWidth ? host.clientWidth : 340);
    });

    // ---- Economic power
    (function(){
      var vs = powerHistory.map(function(d){ return d.v; });
      var lowest = Math.min.apply(null, vs), first = powerHistory[0], last = powerHistory[powerHistory.length - 1];
      var below = vs.filter(function(v){ return v < powerScore; }).length;
      var eraStart = powerHistory.filter(function(d){ return d.y >= currentEra.from; })[0];
      var cards = [];
      cards.unshift('<p class="hi-lede">Power is what the state has left to spend when something goes wrong ' +
        '— what it owes, what the debt costs to carry and what it produces, read as one charge. A body with ' +
        'reserves can afford a shock; one that has already spent them has to borrow the energy.</p>');
      cards.push(hiCard("Power", powerWord.state, powerScore <= lowest
        ? "Today\u2019s " + powerScore + "% is the lowest reading in the whole series \u2014 " + (last.y - first.y + 1) + " years, back to " + first.y + ", when it stood at " + first.v + "%."
        : "Today\u2019s " + powerScore + "% is above only " + below + " of the " + vs.length + " years on record, back to " + first.y + "."));
      cards.push(hiCard("Against the last two shocks", "warning",
        "The same three markers, scored the same way, leave " + powerOf(stressHistory[0].score) + "% at the " + stressHistory[0].label.replace("'07 ", "2007 ") +
        " and " + powerOf(stressHistory[1].score) + "% at the " + stressHistory[1].label.replace("'20 ", "2020 ") + " reading. Both were higher than now."));
      if (eraStart) cards.push(hiCard("Since this cycle opened", "serious",
        "The " + currentEra.name + " began in " + currentEra.from + " with " + eraStart.v + "% in reserve. It has fallen " +
        (eraStart.v - powerScore) + " points since."));
      put("power-highlights", highlightsHtml(cards, "", moreRow(powerPageNote)));
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
      cards.unshift('<p class="hi-lede">Valuations are what buyers pay for a dollar of earnings, smoothed over ' +
        'ten years. Paying far above the long-run price is appetite running ahead of what the body is actually ' +
        'producing.</p>');
      cards.push(hiCard("Shiller CAPE", valuation.tag.state, richer.length === 0
        ? "At " + capeFmt1(capeNow) + ", richer than every January reading since " + capeHistory[0].y + "."
        : "At " + capeFmt1(capeNow) + ", the " + ordinal(richer.length + 1) + " richest reading since " + capeHistory[0].y +
          " \u2014 only " + richer.map(function(d){ return d.y + " (" + capeFmt1(d.v) + ")"; }).join(" and ") + " ran higher."));
      cards.push(hiCard("Buffett indicator", valRow("buffett").flagState || "serious", bRicher === 0
        ? "At " + Math.round(buffNow) + "% of GDP it is the highest of the " + bv.length + " quarters since " + yearOf(buffettHistory[0]) +
          " \u2014 above the previous record of " + Math.round(bPrev.v) + "% (" + bPrev.q + ") and far above the dot-com peak of " +
          Math.round(bDot.v) + "% (" + bDot.q + ")."
        : "At " + Math.round(buffNow) + "% of GDP, " + bRicher + " of the " + bv.length + " quarters since " + yearOf(buffettHistory[0]) + " ran higher."));
      // No closing cards (Keren, V365): the page ends on its own evidence — CAPE against its own record, the
      // Buffett indicator against its — and says nothing about what those readings do or do not predict. The
      // long form behind "More details" keeps the caveat one tap away.
      put("valuation-highlights", highlightsHtml(cards, "", moreRow('<h4>Valuations</h4>' + factsFrom(valuation.impression))));
    })();

    // ---- Temperature
    (function(){
      var cyc = nowModel.cpi, hot = cyc.filter(function(d){ return d.v > 3; }).length;
      var peak = cyc.reduce(function(a, b){ return b.v > a.v ? b : a; });
      var cards = ['<p class="hi-lede">A temperature is the one number that says whether something inside is ' +
        'running too hot, and in an economy that number is prices. 2% is its 37°C — the reading only ' +
        'means anything measured against the level the system is meant to hold.</p>'];
      /* the total is in the head, where the ruler that moves it can be seen moving it */
      cards.push(hiCard("Temperature", tempInd ? tempInd.tag.state : "warning",
        "Across the " + cyc.length + " months of the " + currentEra.name + ", CPI has run above 3% in " + hot +
        " of them, and peaked at " + peak.v.toFixed(1) + "% in " + monthLabel(peak.m) + "."));
      cards.push(hiCard("Where it sits now", tempInd ? tempInd.tag.state : "warning",
        "The current cycle\u2019s average is " + mean(cyc.map(function(d){ return d.v; })).toFixed(1) + "%, against a 2% target. Today\u2019s " +
        r.cpiNow.toFixed(1) + "% is " + (r.cpiNow > 3 ? "above" : r.cpiNow < 1 ? "below" : "inside") + " the 1\u20133% range."));
      put("temp-highlights", highlightsHtml(cards, "", moreRow(tempInfo + (function(){
          var rest = dropWhatIsShown(tempCaptionFull, tempLeadShown);
          return rest ? factsFrom(rest) : "";
        })())));
    })();

    // ---- GDP growth
    (function(){
      var cycAvg = mean(gq.map(function(d){ return d.v; }));
      var contractions = gq.filter(function(d){ return d.v < 0; }).length;
      var cards = ['<p class="hi-lede">Growth is the build-up: how much more the economy made this year than ' +
        'last. A body spends the first half of its cycle building something it has not used yet, and an ' +
        'economy does the same with output.</p>'];
      cards.push(hiCard("Growth", phaseClass(r.regime),
        "Across the " + gq.length + " quarters of the " + currentEra.name + ", growth has averaged " + cycAvg.toFixed(1) +
        "% a year" + (contractions ? " and turned negative in " + contractions + " of them." : ", and has not turned negative in any of them.")));
      cards.push(hiCard("The latest quarter", phaseClass(r.regime),
        qLabel(r.gdpLatest.q) + " came in at " + r.gdpLatest.v.toFixed(1) + "%, " +
        (r.gdpLatest.v >= cycAvg ? "above" : "below") + " this cycle\u2019s own average, and the season model reads the trend as " +
        r.regime + "."));
      put("gdp-highlights", highlightsHtml(cards, "", moreRow(growthDetail)));   // the strip lives on the ruler's Cycles stop
    })();
    // The cycle average component. No page carries it now (the list below is empty), but the placement stands:
    // it anchors to a LIVE NODE, because a static div written after #<page>-highlights still parses ahead of it.
    // Rendered once, here: the strip is flex HTML, not SVG, so it needs no width. Each page passes its own
    // stateOf, so the block and that page's chart colour the same number alike.
    (function(){
      var blocks = [
        // Keren, V423: "drop the average CPI by cycle in the temperature page because we are already seeing it in
        // the history component." The other pages' strips went for the same reason: the chart's average line
        // answers the same question for whichever cycle the picker is on.
      ];
      blocks.forEach(function(b){
        var hl = byId(b[0]); if (!hl) return;
        var html = cycleAverageBlock(b[2], b[3], b[4]); if (!html) return;
        var host = document.createElement("div");
        host.id = b[1];
        host.innerHTML = html;
        // THE PAGE ORDER (Keren, V369): history, cycle average, blood test, Highlights, More details. So the block
        // goes just BEFORE the blood-test block (the markers table: `.subject` on three pages, `.sign-detail` on
        // Temperature), found by CLASS on the sheet rather than by id, so a page that renames its table keeps the
        // order, and anchored to a live node rather than to markup.
        var sheet = hl.parentElement;
        var blood = sheet && sheet.querySelector(":scope > .subject, :scope > .sign-detail");
        if (blood) blood.insertAdjacentElement("beforebegin", host);
        else hl.insertAdjacentElement("beforebegin", host);   // no table on this page: still ahead of Highlights
      });
    })();
  }

  /* The Cycle tab, in order. Every line here is a call to a named function, and the only thing this function
     decides is the order. */
  function renderPagesAndNav(){
    var ctx = renderPeekAndCategories();
    if (!ctx) return;       // no peek row, no Cycle tab: nothing draws on missing ground
    renderMetricPages(ctx);
    buildNav();             // the frame and its delegates
    registerRoster();       // reads the cards above off the page, so it runs after they are drawn
    buildIndicatorSheet();  // and after the roster is filed, because it lists what was filed
  }
  GYN.step("renderPagesAndNav", renderPagesAndNav, "render"); renderPagesAndNav();



  // allSources is the single source of truth for sources.html (the footer links to it). The Sources screen is
  // built from window.__sources below, and `npm run sources` (tools/gen-sources.js) regenerates sources.html from
  // that screen: run it whenever this list changes.
  window.__sources = { all: allSources, cards: coincident.concat(lagging).map(function(c){ return {name:c.bodyTerm, src:c.src}; }), annual: sp500AnnualReturnSource, gdp: gdpSrc };
