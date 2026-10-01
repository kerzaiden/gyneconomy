

  function convertLeadingSigns(){
    ROSTER.filter(function(R){ return R.door === "subject"; }).forEach(function(R){
      var key = R.id.replace("sheet-sign-", ""), det = document.querySelector('.subject[data-subject="' + key + '"]'); if (!det) return;
      var sum = det.querySelector(".subject-summary"), body = det.querySelector(".subject-body");
      var id = R.id;
      var row = document.createElement("div");
      row.className = "subject sign-row";
      row.setAttribute("data-subject", key);
      row.setAttribute("role", "button"); row.tabIndex = 0;
      row.setAttribute("data-open", id); row.setAttribute("data-title", R.name);
      var face = document.createElement("div"); face.className = "subject-summary";
      while (sum.firstChild) face.appendChild(sum.firstChild);
      var lab = face.querySelector(".subject-label");
      if (lab) lab.innerHTML = '<span class="peek-mark">' + R.mark() + '</span>' + lab.innerHTML;
      row.appendChild(face);
      var sheet = metricSheet(id);
      sheet.innerHTML = timingPill(R.timing);
      while (body.firstChild) sheet.appendChild(body.firstChild);
      det.parentNode.insertBefore(row, det);
      det.parentNode.insertBefore(sheet, det);
      det.parentNode.removeChild(det);
    });
  }
  function orderMetricSheets(){
    var slotted = ROSTER.filter(function(R){ return R.slot; });
    slotted.forEach(function(R){ put(R.slot + "-timing", timingPill(R.timing)); });
    slotted.forEach(function(R){
      var sheet = byId(R.id); if (!sheet) return;
      function rank(el){
        var k = el.id || "";
        if (/-timing$/.test(k)) return 0;
        if (/-head$/.test(k)) return 1;
        if (/-chart$/.test(k) || /^slot-/.test(k)) return 2;
        if (/-highlights$/.test(k)) return 4;
        return 3;
      }
      Array.prototype.slice.call(sheet.children)
        .map(function(el, i){ return { el:el, r:rank(el), i:i }; })
        .sort(function(a, b){ return a.r - b.r || a.i - b.i; })
        .forEach(function(x){ sheet.appendChild(x.el); });
    });
    Array.prototype.forEach.call(document.querySelectorAll(".metric-sheet"), seatPageFoot);
  }
  function activityStackHtml(ind){
    histNote("sheet-sign-activity", activityInfoHtml(ind));
    return histBar("", "act-rangebar") +
      '<div class="page-chart">' +
        histHead("sheet-sign-activity") +
        '<div id="act-history" class="vh-host"></div>' +
        histTip("act-hist-tooltip") +
        '<div id="act-trend"></div>' +
      '</div>';
  }
  function seatTemperature(ind, d){
    HIST_NOTE["sheet-metric-temp"] = temperatureInfoHtml(ind);
    tempCaptionFull = ind.caption;
    tempLeadShown = ind.lead || ind.shortCaption || "";
    var sheet = byId("sheet-metric-temp"), fresh = d.querySelector(".sign-detail");
    var prev = sheet.querySelector(":scope > .sign-detail");
    if (prev) sheet.replaceChild(fresh, prev); else sheet.appendChild(fresh);
  }
  function renderSignsList(){
    var host = byId("signs-list");
    function signSubject(ind){
      var R = rosterFor(ind), id = R.id, key = id.replace("sheet-sign-", ""), pg = ind.page || {}, timing = R.timing;
      var svg = R.mark();
      var row = elFrom(subjectRow({
        subject:"sign-" + key, open:id, title:R.name,
        icon: subjectIcon(ind.tag.state, svg),
        text: '<div class="subject-label">' + ind.bodyTerm + ' \u00b7 ' + ind.econTerm + '</div>' +
              '<div class="subject-value">' + ind.metric + '<span class="unit">' + ind.metricSub + '</span></div>' +
              '<div class="subject-verdict"><span class="tag ' + ind.tag.state + '">' + ind.tag.text + '</span></div>' +
              (ind.peek || "")
      }));
      var d = metricSheet(id);
      d.innerHTML = (timing ? timingPill(timing) : "") + '<div class="sign-detail"></div>';
      d.querySelector(".sign-detail").innerHTML = cardDetailHtml(ind, pg) + (pg.after ? pg.after(ind) : "") +
        (function(){ var h = heldHighlights; heldHighlights = ""; return h; })();
      registerTiming(timing, {
        title:R.name, sub:ind.econTerm, metric:ind.metric, metricSub:ind.metricSub,
        tag:ind.tag, icon:subjectIcon(ind.tag.state, svg),
        target:id
      });
      if (pg.peeked){ host.appendChild(d); return d; }
      if (pg.seat) pg.seat(ind, d); else { host.appendChild(row); host.appendChild(d); }
      return d;
    }
    coincident.concat(lagging, [productivityReading]).forEach(function(ind){ signSubject(ind); });

    convertLeadingSigns();
    orderMetricSheets();
  }
  GYN.step("renderSignsList", renderSignsList, "build"); renderSignsList();

  /* ---- THE ROSTER'S OWN PIECES ---- */
  function partsOf(el, unitSel){
    if (!el) return { v:"", u:"", w:"", s:"" };
    var c = el.cloneNode(true), u = c.querySelector(unitSel), t = c.querySelector(".tag");
    var unit = u ? u.textContent.trim() : "", word = t ? t.textContent.trim() : "";
    var st = t ? (t.className.match(/good|warning|serious|critical/) || [""])[0] : "";
    if (u) u.parentNode.removeChild(u);
    if (t) t.parentNode.removeChild(t);
    return { v:c.textContent.trim(), u:unit, w:word, s:st };
  }
  function authored(sel, key){ return document.querySelector(sel) || (window.__CAT_SNAP || {})[key] || null; }
  function registerRoster(){
    ROSTER.filter(function(R){ return R.door === "peek" && !R.term; }).forEach(function(R){
      var card = authored('.peek[data-open="' + R.id + '"]', R.id); if (!card) return;
      var pv = partsOf(card.querySelector(".peek-value"), ".peek-unit");
      var st = (card.className.match(/good|warning|serious|critical/) || [""])[0];
      registerTiming(R.timing, {
        title:R.name, metric:pv.v, unit:pv.u,
        word:(card.querySelector(".peek-word") || {}).textContent || "",
        state:st, icon:subjectIcon(st || "norm", R.mark()), target:R.id
      });
    });
    ROSTER.filter(function(R){ return R.door === "subject"; }).forEach(function(R){
      var row = authored('.sign-row[data-open="' + R.id + '"]', R.id); if (!row) return;
      var rv = partsOf(row.querySelector(".subject-value"), ".unit");
      var say = ((row.querySelector(".subject-say") || {}).textContent || "").trim();
      registerTiming(R.timing, {
        title:R.name, sub:R.name, metric:rv.v, unit:rv.u,
        word:rv.w || say, state:rv.s, icon:subjectIcon(rv.s || "norm", R.mark()), target:R.id
      });
    });
  }

  function indRow(e, kind){
    return subjectRow({ cls:"ind-row kind-" + kind, open:e.target, title:e.title, icon:e.icon,
      text:'<div class="ind-line"><span class="ind-name">' + e.title + '</span><span class="subject-value ind-fig">' + e.metric + '</span></div>' });
  }
  var IND_ORDER = Object.keys(TIMING);
  function indGroupRow(groups, rows, item, e, kind, find){
    var grp = item.parentNode.getAttribute("data-group"), gm = item.parentNode.__mark;
    if (!groups[grp]){ groups[grp] = { title:grp, icon:gm ? subjectIcon("norm", gm()) : e.icon, kinds:{}, terms:[grp] }; rows.push(groups[grp]); }
    groups[grp].kinds[kind] = 1; groups[grp].terms.push(find[e.title]);
  }
  function indRows(sheet, find){
    var rows = [], groups = {};
    Array.prototype.forEach.call(sheet.querySelectorAll(".cat-item[data-open]"), function(item){
      var target = item.getAttribute("data-open"), inGroup = item.parentNode.hasAttribute("data-group");
      IND_ORDER.forEach(function(kind){ timingMembers[kind].forEach(function(e){
        if (e.target === target) inGroup ? indGroupRow(groups, rows, item, e, kind, find) : rows.push(indRow(e, kind));
      }); });
    });
    return rows.map(function(r){
      if (typeof r === "string") return r;
      find[r.title] = r.terms.join(" ").toLowerCase();
      return indRow({ target:groupId(r.title), title:r.title, icon:r.icon, metric:"" }, Object.keys(r.kinds).join(" kind-") + " ind-grp");
    });
  }
  function indCategoryHtml(c, find){
    var key = c.key, sheet = byId("sheet-cat-" + key);
    if (!sheet) return "";
    var rows = indRows(sheet, find);
    return '<section class="ind-cat cat-' + key + '"><button type="button" class="ind-cat-head" data-open="sheet-cat-' + key +
      '" data-title="' + c.title + '"><span class="ind-cat-mark" aria-hidden="true">' + c.mark() + '</span>' +
      '<span class="ind-cat-name">' + c.title + '</span>' + CHEV + '</button><div class="ind-card">' + rows.join("") + '</div></section>';
  }
  function categoriesShown(){ return CATEGORIES.slice().sort(function(a, b){ return a.shown - b.shown; }); }

  /* ---- THE NAVIGATION CONTROLLER ---- */
  var NAV = { open: null, panel: null };
  function buildNav(){
    // ---- The metric page ----
    var cyclePanel = document.querySelector('.tab-panel[data-tab="cycle"]');
    var analysisPanel = document.querySelector('.tab-panel[data-tab="analysis"]');
    var metricPage = document.createElement("div");
    metricPage.id = "metric-page"; metricPage.hidden = true;
    cyclePanel.appendChild(metricPage);
    var PAGE_HOME = {
      cycle:    { panel:cyclePanel,    title:"Current Cycle",
                  hide:function(){ return [cycleViewEl, byId("today-analysis")]; } },
      analysis: { panel:analysisPanel, title:"Analysis",
                  hide:function(){ return [byId(eraOpen ? "calendar-cycle" : "calendar-list")]; } },
      search:   { panel:document.querySelector('.tab-panel[data-tab="search"]'), title:"Search",
                  hide:function(){ return [byId("search-home")]; } }
    };
    var homeCtx = PAGE_HOME.cycle;
    var openSheet = null, openHome = null, returnScroll = 0;
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
      seatPageFoot(el);
      if (!returning && openSheet && openSheet !== el)
        pageStack.push({ id:openSheet.id, title:byId("topbar-title").textContent, scroll:window.scrollY || 0 });
      var wasOpen = !!openSheet;
      homeFromPage(true);
      if (!wasOpen) returnScroll = window.scrollY || 0;
      if (!wasOpen && !returning){
        homeCtx = PAGE_HOME[homeKey] || PAGE_HOME.cycle;
        homeCtx.panel.appendChild(metricPage);
      }
      openSheet = el; openHome = el.parentNode;
      homeCtx.hide().forEach(function(n){ if (n) n.hidden = true; });
      el.hidden = false; metricPage.appendChild(el); metricPage.hidden = false;
      setTopbar(title, backFromPage);
      if (!returning) window.scrollTo({ top:0, behavior:"auto" });
      var draw = sheetRenderers[el.id]; if (draw) draw(metricPage.clientWidth);
      collapseEmptyBlocks(el);
    }
    cyclePanel.addEventListener("click", function(e){
      var btn = e.target.closest && e.target.closest("[data-open]"); if (!btn) return;
      openMetricPage(byId(btn.getAttribute("data-open")), btn.getAttribute("data-title"));
    });
    ["analysis", "search"].forEach(function(key){
      var panel = PAGE_HOME[key].panel, go = function(el){ openMetricPage(byId(el.getAttribute("data-open")), el.getAttribute("data-title"), false, key); };
      panel.addEventListener("click", function(e){ var btn = e.target.closest && e.target.closest("[data-open]"); if (btn) go(btn); });
      panel.addEventListener("keydown", function(e){
        var row = (e.key === "Enter" || e.key === " ") && e.target.closest && e.target.closest("[data-open]");
        if (row){ e.preventDefault(); go(row); }
      });
    });
    cyclePanel.addEventListener("click", function(e){
      var btn = e.target.closest && e.target.closest(".trendpill.can-toggle"); if (!btn) return;
      var box = btn.closest(".page-chart, .spread-history"); if (!box) return;
      var on = btn.getAttribute("aria-pressed") !== "true";
      btn.setAttribute("aria-pressed", on ? "true" : "false");
      box.classList.toggle("trend-on", on);
    });
    cyclePanel.addEventListener("keydown", function(e){
      if (e.key !== "Enter" && e.key !== " ") return;
      var row = e.target.closest && e.target.closest(".sign-row, tr[data-open]"); if (!row) return;
      e.preventDefault();
      openMetricPage(byId(row.getAttribute("data-open")), row.getAttribute("data-title"));
    });

    document.addEventListener("keydown", function(e){
      if (e.key === "Escape" && openSheet && !byId("detail-backdrop").classList.contains("show")) backFromPage();
    });
    NAV.open = openMetricPage;
    NAV.panel = analysisPanel;
  }

  /* ---- ALL INDICATORS ---- */
  function buildSearch(){
    var host = byId("search-list"), input = byId("search-input"); if (!host || !input) return;
    var IND_TABS = [{ key:"all", label:"All" }].concat(IND_ORDER.map(function(k){ return { key:k, label:TIMING[k].label }; }));
    var find = {}, state = { kind:"all", q:"" };
    IND_ORDER.forEach(function(kind){ timingMembers[kind].forEach(function(e){
      find[e.title] = [e.title, e.sub, e.metricSub, ROSTER_BY[e.target].group].join(" ").toLowerCase();
    }); });
    host.innerHTML =
      '<div class="rangebar ind-tabs" role="tablist" aria-label="Filter by timing">' +
        IND_TABS.map(function(t, i){
          return '<button type="button" class="range-seg' + (i ? "" : " on") + '" role="tab" ' +
            'aria-selected="' + (i ? "false" : "true") + '" data-ind-tab="' + t.key + '">' + t.label + '</button>';
        }).join("") +
      '</div><p class="ind-hint" hidden></p>' + categoriesShown().map(function(c){ return indCategoryHtml(c, find); }).join("") +
      '<p class="search-none" hidden>No reading matches.</p>';
    function apply(){
      var kind = state.kind, q = state.q, hint = host.querySelector(".ind-hint");
      Array.prototype.forEach.call(host.querySelectorAll(".ind-tabs .range-seg"), function(b){
        var on = b.getAttribute("data-ind-tab") === kind;
        b.classList.toggle("on", on);
        b.setAttribute("aria-selected", on ? "true" : "false");
      });
      hint.hidden = !TIMING[kind];
      hint.textContent = TIMING[kind] ? TIMING[kind].label + ": " + TIMING[kind].hint + "." : "";
      Array.prototype.forEach.call(host.querySelectorAll(".ind-cat"), function(c){
        var cat = c.querySelector(".ind-cat-name").textContent.toLowerCase().indexOf(q) === 0;
        Array.prototype.forEach.call(c.querySelectorAll(".ind-row"), function(r){
          r.hidden = !((kind === "all" || r.classList.contains("kind-" + kind)) &&
                       (!q || cat || (find[r.getAttribute("data-title")] || "").indexOf(q) !== -1));
        });
        c.hidden = !c.querySelector(".ind-row:not([hidden])");
      });
      host.querySelector(".search-none").hidden = !!host.querySelector(".ind-row:not([hidden])");
    }
    host.addEventListener("click", function(e){
      var b = e.target.closest && e.target.closest(".ind-tabs .range-seg"); if (!b) return;
      state.kind = b.getAttribute("data-ind-tab"); apply();
    });
    input.addEventListener("input", function(){ state.q = input.value.trim().toLowerCase(); apply(); });
    openIndicatorsPage = function(tab){
      var btn = document.querySelector('.tab-btn[data-tab="search"]');
      if (btn && !btn.classList.contains("active")) btn.click();
      input.value = ""; state.q = ""; state.kind = tab || "all"; apply();
    };
    apply();
  }

  /* ---- THE CYCLE TAB: cards and categories ---- */
  function qPretty(q){ var p = String(q).split(" "); return p.length > 1 ? p[1] + " " + p[0] : String(q); }
  var DATED_UNIT = /^(.*?),\s*((?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[^,]*|Q[1-4]\s+\d{4})$/;
  function peekArt(src){ return src.querySelector(".peek-chart"); }
  function indPeriod(R){
    var ind = indOf(R), m = ind && DATED_UNIT.exec(String(ind.metricSub || "").trim());
    return m ? m[2] : "";
  }
  function catItem(src, key){
    var open = src.getAttribute("data-open");
    var page = document.getElementById(open); if (page) page.classList.add("cat-" + key);
    (window.__CAT_SNAP = window.__CAT_SNAP || {})[open] = src.cloneNode(true);
    var item = document.createElement("button");
    item.type = "button"; item.className = "cat-item";
    item.setAttribute("data-open", open);
    item.setAttribute("data-title", src.getAttribute("data-title") || "");
    var head = document.createElement("div"); head.className = "ci-head";
    var glyph = src.querySelector(".peek-mark svg, .subject-icon svg"), holder = document.createElement("span");
    holder.className = "peek-mark"; if (glyph) holder.appendChild(glyph);
    head.appendChild(holder);
    var nm = document.createElement("span"); nm.className = "ci-name";
    var kick = src.querySelector(".peek-kicker");
    nm.textContent = kick ? kick.textContent.replace(/\s+/g, " ").trim()
                          : (src.getAttribute("data-title") || "");
    head.appendChild(nm);
    var body = document.createElement("div"); body.className = "ci-body";
    var read = document.createElement("div"); read.className = "ci-read";
    var val = src.querySelector(".peek-value, .subject-value");
    var when = cardDate(ROSTER_BY[open]);
    if (val){
      var unit = val.querySelector(".peek-unit, .unit");
      if (unit){
        var m = DATED_UNIT.exec(unit.textContent.trim());
        if (m){ unit.textContent = m[1]; if (!when) when = m[2]; }
      }
      val.className = "ci-value";
      if (unit) unit.className = "ci-unit";
      read.appendChild(val);
    }
    var word = src.querySelector(".peek-word, .subject-say, .subject-verdict");
    if (!word || !word.textContent.trim()){
      var inline = val ? val.querySelector(".tag") : null;
      if (inline) word = inline;
    }
    if (word && word.textContent.trim()){ word.classList.add("ci-word"); read.appendChild(word); }
    body.appendChild(read);
    var R = ROSTER_BY[open], mini = R && R.miniSel ? src.querySelector(R.miniSel) : peekArt(src);
    if (mini){ var slot = document.createElement("div"); slot.className = "ci-mini";
               slot.appendChild(mini); body.appendChild(slot); }
    var wh = document.createElement("span"); wh.className = "ci-when"; wh.textContent = when;
    head.appendChild(wh);
    var chev = document.createElement("span");
    chev.innerHTML = CHEV;
    head.appendChild(chev.firstChild);
    item.appendChild(head); item.appendChild(body);
    if (src.parentNode) src.parentNode.removeChild(src);
    return item;
  }
  function insightCirculation(){
    var vel = m2vHistory, n = vel.length;
    if (!vel || n < 5) return "";
    var velChg = (vel[n - 1] / vel[n - 5] - 1) * 100;
    var run = 0;
    for (var i = n - 1; i >= 4; i--){ if (vel[i] / vel[i - 4] > 1) run++; else break; }
    var runFromY = M2V_FROM_YEAR + Math.floor((n - run) / 4);
    var lo = Math.min.apply(null, vel), loI = vel.indexOf(lo);
    var offLow = (vel[n - 1] / lo - 1) * 100;
    var volInd = indOf(ROSTER_BY["sheet-sign-volume"]);
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
    if (run >= 8){
      var oc = openCycle();
      txt += " Velocity has risen for " + run + " straight quarters" +
        (oc && runFromY === oc.from ? ", every quarter of this cycle," : ",") +
        " and sits " + offLow.toFixed(0) + "% above its " + (M2V_FROM_YEAR + Math.floor(loI / 4)) + " low.";
    }
    return '<section class="highlights insights"><div class="hi-head">Insights</div>' +
           circLede + hiCard(name, "", txt) + '</section>';
  }
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
  var PAIR_ART = {
    "sheet-sign-pulse": function(ind){ return { pulse:{ rate:ind.meter.value, ref:PULSE_PRE2008 } }; },
    "sheet-sign-volume": function(){
      return { cols:m2Yoy.filter(function(x){ return x != null; }), colBase:0, colRule:true, colClass:function(v){ return "m2-col " + m2Step(v); } };
    }
  };
  function placeSignPair(){
    var pair = ROSTER.filter(function(R){ return R.door === "pair"; }).map(function(R){
      var ind = indOf(R);
      if (!ind) return "";
      var card = PAIR_ART[R.id](ind);
      card.value = ind.metric; card.word = ind.tag.text; card.state = ind.tag.state;
      return peekOf(R.id, card);
    }).join("");
    if (!pair) return;
    var after = byId("sheet-sign-sentiment");
    if (!after || !after.parentNode) return;
    var row = document.createElement("div");
    row.className = "peek-row"; row.id = "peek-row-signs";
    row.innerHTML = pair;
    after.parentNode.insertBefore(row, after.nextSibling);

    var horm = document.querySelector('.sign-row[data-subject="hormones"]');
    var hormSheet = byId("sheet-sign-hormones");
    if (horm && hormSheet && horm.parentNode === row.parentNode){
      row.parentNode.insertBefore(horm, row);
      horm.parentNode.insertBefore(hormSheet, horm.nextSibling);
    }
  }
  function swapSentimentActivity(){
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
  }
  function buildCategories(){
    var host = byId("today-analysis"); if (!host) return;
    CATEGORIES.forEach(function(c){
      var sheet = catSheet("sheet-cat-" + c.key, c.key);
      var items = document.createElement("div"); items.className = "cat-list";
      appendPicks(items, catPicks(c), c.key);
      sheet.appendChild(items);
      var tog = c.insight ? c.insight() : "";
      if (tog) sheet.insertAdjacentHTML("beforeend", tog);
      host.appendChild(sheet);
    });
    ["peek-row", "peek-row-signs", "signs-list"].forEach(function(id){
      var el = byId(id);
      if (el && !el.querySelector("*") && el.parentNode) el.parentNode.removeChild(el);
    });
  }
  function renderPeekAndCategories(){
    var host = byId("peek-row"); if (!host) return null;
    var tempInd = indOf(ROSTER_BY["sheet-metric-temp"]);
    var r = nowModel.reading, era = nowModel.era;
    var cpiWord = r.cpiHot ? "Hot" : r.cpiCold ? "Cold" : "Warm";
    var cpiDir = r.cpiDirection === "rising" ? "heating" : r.cpiDirection === "falling" ? "cooling" : "steady";
    var gq = gdpQuarterlyYoY.filter(function(d){ return parseInt(d.q.slice(0, 4), 10) >= era.from; });
    var capeNow = valRow("cape").meter.value, buffNow = valRow("buffett").meter.value;
    var capeLast = capeHistory[capeHistory.length - 1];
    if (capeLast.y === calendarTodayY) capeLast.v = capeNow; else capeHistory.push({ y:calendarTodayY, v:capeNow });
    host.innerHTML =
      peekOf("sheet-metric-temp", { value:r.cpiNow.toFixed(1) + "%",
                 word:cpiWord + " \u00b7 " + cpiDir, state:heatStep(r.cpiNow),
                 cols:nowModel.cpi.map(function(d){ return d.v; }),
                 colClass:function(v){ return "temp-col " + heatStep(v); } }) +
      peekOf("sheet-metric-gdp", { value:(r.gdpLatest.v >= 0 ? "+" : "") + r.gdpLatest.v.toFixed(1) + "%",
                 word:growthShownCap(r.regime), state:phaseClass(r.regime),
                 cols:gq.map(function(d){ return d.v; }),
                 colClass:function(v, i){
                   return "gdp-col " + (v < 0 ? "below" : quarterRegime(gq[i]) === "contraction" ? "neg" : "pos");
                 } }) +
      peekOf("sheet-metric-valuation", { value:capeNow.toFixed(1) + "\u00d7", word:valuation.tag.text,
                 state:valuation.tag.state,
                 cols:capeHistory.map(function(d){ return d.v; }), colBase:CAPE_FAIR,
                 colClass:function(v){ return "dv-bar " + (v > CAPE_FAIR ? "over" : "under"); } }) +
      peekOf("sheet-metric-households", { value:dsrNow.toFixed(1) + "/" + savNow.toFixed(1),
                 word:householdsNow.word, state:householdsNow.state,
                 cols:savHistory.slice(SAV_OFFSET), colBase:0,
                 colClass:function(){ return "hh-col"; } }) +
      indicatorPeeks();

    placeSignPair();
    swapSentimentActivity();
    buildCategories();

    return { host:host, tempInd:tempInd, r:r, gq:gq, capeNow:capeNow, buffNow:buffNow };
  }

  /* ---- THE INNER PAGES ---- */
  function capeFmt1(v){ return v.toFixed(1) + "\u00d7"; }
  function actCycleMonths(c){
    var to = c.to || calendarTodayY, a = -1, b = -1;
    unempHistory.forEach(function(d, i){
      var y = parseInt(d.m.slice(0, 4), 10);
      if (y >= c.from && y <= to){ if (a === -1) a = i; b = i + 1; }
    });
    return a === -1 ? null : [a, b];
  }
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
  function redrawSheet(id){
    var h = byId("metric-page"), d = sheetRenderers[id];
    if (d) d(h && h.clientWidth ? h.clientWidth : 340);
  }
  function registerTempGdpPages(){
    sheetRenderers["sheet-metric-temp"] = function(W){
      var r = pageRange["sheet-metric-temp"], cyc = pageCycle("sheet-metric-temp");
      put("temp-rangebar", histControls("sheet-metric-temp", { series:cpiYoYHistory }));
      put("temp-head", histHead("sheet-metric-temp"));
      var hist = byId("temp-history"); hist.hidden = false;
      var win;
      if (cyc){
        var span = cycleMonths(cyc);
        win = span ? cpiYoYHistory.slice(span[0], span[1]) : [];
        hist.innerHTML = cpiHistoryChart(hist.clientWidth || W, span ? span[0] : 0,
                                         { to:span ? span[1] : undefined, cycle:true });
        attachHistory(hist, "temp-hist-tooltip", "cpiHistoryChart");
        put("temp-trend", trendPill(trendOf(win.map(function(d){ return d.v; }), "points", "month"), null, true,
                    { rising:"heating", falling:"cooling" }));
      } else {
        var from = mWindowFrom(cpiYoYHistory.length, r); win = cpiYoYHistory.slice(from);
        hist.innerHTML = cpiHistoryChart(hist.clientWidth || W, from);
        attachHistory(hist, "temp-hist-tooltip", "cpiHistoryChart");
        put("temp-trend", trendPill(trendOf(win.map(function(d){ return d.v; }), "points", "month"), null, true,
                    { rising:"heating", falling:"cooling" }));
      }
      var tri = totalRiseIn(win);
        headSigma("sheet-metric-temp", tri ? fmtSigned(tri.total, 0) + "%" : null);
    };
    sheetRenderers["sheet-metric-gdp"] = function(W){
      var r = pageRange["sheet-metric-gdp"];
      put("gdp-rangebar", histControls("sheet-metric-gdp", { series:gdpQuarterlyYoY }));
      put("gdp-head", histHead("sheet-metric-gdp"));
      histNote("sheet-metric-gdp", growthInfoHtml());
      var hist = byId("gdp-history"); hist.hidden = false;
      var gCyc = pageCycle("sheet-metric-gdp");
      var gSpan = gCyc ? cycleSlice(gdpQuarterlyYoY, gCyc) : null;
      var gFrom = gSpan ? gSpan[0] : qWindowFrom(gdpQuarterlyYoY.length, r);
      var gTo = gSpan ? gSpan[1] : undefined;
      var win = gdpQuarterlyYoY.slice(gFrom, gTo);
      hist.innerHTML = gdpHistoryChart(hist.clientWidth || W, gFrom, { to:gTo, cycle:!!gSpan });
      attachHistory(hist, "gdp-hist-tooltip", "gdpHistoryChart");
      var gy0 = yearOf(win[0]), gy1 = yearOf(win[win.length - 1]), gt = totalGrowthYears(gy0, gy1);
      headSigma("sheet-metric-gdp", gt ? fmtSigned(gt.total, 0) + "%" : null);
      put("gdp-trend", trendPill(trendOf(win.map(function(d){ return d.v; }), "points", "quarter"), null, true,
                  { rising:"quickening", falling:"slowing" }));
    };

  }
  function registerActivityPowerDeficitPages(){
    sheetRenderers["sheet-sign-activity"] = function(W){
      var id = "sheet-sign-activity", bar = byId("act-rangebar");
      if (!bar) return;
      bar.innerHTML = histControls(id, { series:unempHistory });
      var hist = byId("act-history"); if (!hist) return;
      var cyc = pageCycle(id);
      var span = cyc ? actCycleMonths(cyc) : null;
      var from = span ? span[0] : mWindowFrom(unempHistory.length, pageRange[id]);
      var to = span ? span[1] : undefined;
      hist.innerHTML = unempHistoryChart(hist.clientWidth || W, from, { to:to, cycle:!!span });
      attachHistory(hist, "act-hist-tooltip", "unempHistoryChart");
      var win = unempHistory.slice(from, to).filter(function(d){ return d.v != null; });
      put("act-trend", trendPill(trendOf(win.map(function(d){ return d.v; }), "points", "month"), null, true,
                                 { rising:"loosening", falling:"tightening" }));
    };
    sheetRenderers["sheet-marker-deficit"] = function(W){
      var sheet = byId("sheet-marker-deficit"); if (!sheet) return;
      if (!sheet.firstChild) sheet.innerHTML = deficitBlock();
      sheetRenderers["deficit-range"](W);
    };
    sheetRenderers["deficit-range"] = function(W){
      var host = byId("deficit-record"); if (!host) return;
      var key = pageRange["deficit-range"], defCyc = pageCycle("deficit-range");
      var defIdx = defCyc ? [Math.max(0, defCyc.from - DEF_FROM_YEAR),
                             Math.min(deficitHistory.length, (defCyc.to || calendarTodayY) - DEF_FROM_YEAR + 1)] : null;
      var from = defIdx ? defIdx[0] : defFrom(key), defTo = defIdx ? defIdx[1] : undefined;
      var bar = put("deficit-rangebar", histControls("deficit-range",
        { depth:deficitHistory.length }));
      host.innerHTML = deficitChart(host.clientWidth || W, from, defTo);
      put("deficit-records", "");
      attachHistory(host, "deficit-hist-tooltip", "deficitChart");
      put("deficit-trend", trendPill(
        trendOf(deficitHistory.slice(from, defTo), "points", "year"), null, true,
        { rising:"improving", falling:"widening" }));
    };
  }
  function registerHouseholdsValuationPages(){
    sheetRenderers["sheet-metric-households"] = function(W){
      var id = "sheet-metric-households";
      var hhCyc = pageCycle(id, DSR_FROM_YEAR);
      var idx = hhCyc ? cycleQtrIdx(DSR_FROM_YEAR, hhCyc, dsrHistory.length) : null;
      var from = idx ? idx[0] : qWindowFrom(dsrHistory.length, pageRange[id]);
      var to = idx ? idx[1] : dsrHistory.length;
      var host = byId("households-chart"); if (!host) return;
      histNote(id, dsrInfoHtml() + savInfoHtml());
      host.innerHTML =
        histBar(histControls(id, { depth:Math.floor(dsrHistory.length / 4) }, DSR_FROM_YEAR)) +
        '<div class="page-chart">' + histHead(id) +
        householdsChart(W, from, to) +
        trendPill(trendOf(savHistory.slice(SAV_OFFSET + from, SAV_OFFSET + to), "points", "quarter"),
                  "Saving", true, { rising:"keeping more", falling:"keeping less" }) +
        histTip("households-hist-tooltip") + '</div>';
      var box = host.querySelector(".page-chart");
      refitHistory(box, function(w){ return householdsChart(w, from, to); });
      attachHistory(box, "households-hist-tooltip", "householdsChart");
      var hl = put("households-highlights", householdsHighlights());
    };
    sheetRenderers["sheet-metric-valuation"] = function(W){
      var r = pageRange["sheet-metric-valuation"], vlCyc = pageCycle("sheet-metric-valuation");
      var vlSpan = vlCyc ? cycleSlice(capeHistory, vlCyc) : null;
      var vals = vlSpan ? capeHistory.slice(vlSpan[0], vlSpan[1]) : timelineWindow(capeHistory, r);
      var capeTrend = trendOf(vals.map(function(d){ return d.v; }), "\u00d7", "year");
      put("valuation-chart", histBar(histControls("sheet-metric-valuation", { series:capeHistory })) +
        '<div class="page-chart">' + histHead("sheet-metric-valuation") +
        divergeChart({
          vals:vals, mid:CAPE_FAIR, midLabel:"fair value, " + CAPE_FAIR + "\u00d7", fmt:capeFmt1,
          tickFmt:function(v){ return v + "\u00d7"; },
          fit:capeTrend.fit,
          alt:"Shiller CAPE against its long-run fair value, each January" +
              (r === "max" ? " since " + capeHistory[0].y : " of the last " + timelineSpan(r) + " years") +
              ", with the fitted trend across the readings in view"
        }, W) +
        trendPill(capeTrend, null, true) +
        histTip("valuation-hist-tooltip") + '</div>');
      var vBox = document.querySelector("#valuation-chart .page-chart");
      refitHistory(vBox, function(w){
        return divergeChart({ vals:vals, mid:CAPE_FAIR, midLabel:"fair value, " + CAPE_FAIR + "\u00d7",
                              fmt:capeFmt1, tickFmt:function(v){ return v + "\u00d7"; }, fit:capeTrend.fit,
                              alt:"Shiller CAPE against its long-run fair value, each January" }, w);
      });
      attachHistory(vBox, "valuation-hist-tooltip", "divergeChart");
    };
  }
  function wireMetricPageControls(){
    document.addEventListener("click", function(e){
      if (!e.target.closest) return;
      var sel = e.target.closest(".cycsel"), id = sel && sel.getAttribute("data-cycles-for");
      if (id && e.target.closest("[data-picker-toggle]")){ pickerOpen[id] = !pickerOpen[id]; redrawSheet(id); return; }
      var opt = e.target.closest(".cycsel-opt");
      if (id && opt && (id in pageCycles)){
        pageCycles[id] = opt.getAttribute("data-cycle");
        pickerOpen[id] = false;
        redrawSheet(id); return;
      }
      for (var k in pickerOpen) if (pickerOpen[k] && k !== id){ pickerOpen[k] = false; redrawSheet(k); }
    });
    document.addEventListener("click", function(e){
      var seg = e.target.closest && e.target.closest(".range-seg"); if (!seg) return;
      var mid = seg.parentNode.getAttribute("data-mode-for");
      if (mid && (mid in pageMode)){
        pageMode[mid] = seg.getAttribute("data-mode");
        var mHost = byId("metric-page"), mDraw = sheetRenderers[mid];
        if (mDraw) mDraw(mHost && mHost.clientWidth ? mHost.clientWidth : 340);
        return;
      }
      var id = seg.parentNode.getAttribute("data-range-for");
      if (!(id in pageRange)) return;
      pageRange[id] = seg.getAttribute("data-range");
      var host = byId("metric-page");
      var draw = sheetRenderers[id]; if (draw) draw(host && host.clientWidth ? host.clientWidth : 340);
    });

  }
  function valuationHighlights(capeNow, buffNow){
    var vs = capeHistory.map(function(d){ return d.v; });
    var richer = capeHistory.filter(function(d){ return d.v > capeNow; });
    var cards = [];
    cards.unshift('<p class="hi-lede">Valuations are what buyers pay for a dollar of earnings, smoothed over ' +
      'ten years. Paying far above the long-run price is appetite running ahead of what the body is actually ' +
      'producing.</p>');
    cards.push(hiCard("Shiller CAPE", valuation.tag.state, richer.length === 0
      ? "At " + capeFmt1(capeNow) + ", richer than every January reading since " + capeHistory[0].y + "."
      : "At " + capeFmt1(capeNow) + ", the " + ordinal(richer.length + 1) + " richest reading since " + capeHistory[0].y +
        " \u2014 only " + richer.map(function(d){ return d.y + " (" + capeFmt1(d.v) + ")"; }).join(" and ") + " ran higher."));
    put("valuation-highlights", highlightsHtml(cards, "", moreRow('<h4>Valuations</h4>' + factsFrom(valuation.impression))));
  }
  function tempHighlights(tempInd, r){
    var cyc = nowModel.cpi, hot = cyc.filter(function(d){ return d.v > 3; }).length;
    var peak = cyc.reduce(function(a, b){ return b.v > a.v ? b : a; });
    var cards = ['<p class="hi-lede">A temperature is the one number that says whether something inside is ' +
      'running too hot, and in an economy that number is prices. 2% is its 37°C — the reading only ' +
      'means anything measured against the level the system is meant to hold.</p>'];
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
  }
  function gdpHighlights(r, gq){
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
    put("gdp-highlights", highlightsHtml(cards, "", moreRow(growthDetail)));
  }
  function renderMetricPages(ctx){
    registerTempGdpPages();
    registerActivityPowerDeficitPages();
    registerHouseholdsValuationPages();
    wireMetricPageControls();
    valuationHighlights(ctx.capeNow, ctx.buffNow);
    tempHighlights(ctx.tempInd, ctx.r);
    gdpHighlights(ctx.r, ctx.gq);
  }

  function renderPagesAndNav(){
    var ctx = renderPeekAndCategories();
    if (!ctx) return;
    renderMetricPages(ctx);
    buildNav();
    registerRoster();
    buildSearch();
  }
  GYN.step("renderPagesAndNav", renderPagesAndNav, "render"); renderPagesAndNav();

  // ---- The Diagnosis: under the dial, today or at a cycle's close ----
  var FEELING_RULES = {
    Hope:"momentum has just turned positive after being negative",
    Optimism:"rising, within 5% of the high, momentum at 65% or more of this bull\u2019s best or fear not calm",
    Euphoria:"within 5% of the high, momentum under 65% of this bull\u2019s best, fear calm",
    Anxiety:"fear up 20 points from calm in three months, within 10% of the high",
    Fear:"momentum negative, fear in its top 40%",
    Capitulation:"fear in its top tenth, price 15% or more off its high",
    Despondency:"fear 20 points down from a frightened peak, price still 10% down"
  };
  var FEELING_STATE = { Hope:"good", Optimism:"good", Euphoria:"warning", Anxiety:"warning", Fear:"serious", Capitulation:"critical", Despondency:"serious" };
  var POSTURE_STATE = { Offense:"good", Patience:"warning", Prepare:"warning", Defense:"serious", Neutral:"norm" };
  var POSTURE_SAYS = {
    Offense:"Fear has arrived after the body cooled.",
    Patience:"Fear in a warm body, where the falls have gone furthest: wait for her to cool.",
    Prepare:"Near her high, stretched and still warm: slow down before the body asks.",
    Defense:"Momentum has turned negative while the body is still warm.",
    Neutral:"No posture the record singles out."
  };
  var BODY_SAYS = {
    summer:"\u201cSuperwoman\u2026 for about 10 days\u201d; then, at the crossover, \u201ccrucially, you\u2019re asked to slow down.\u201d",
    autumn:"The inner critic \u201chas a missive to deliver from your deep self.\u201d",
    lateautumn:"The inner critic \u201chas a missive to deliver from your deep self.\u201d",
    winter:"The task is to let go and rest.",
    spring:"The critic can be \u201cyour wilful power of agency taking over too soon.\u201d",
    springdeflation:"The critic can be \u201cyour wilful power of agency taking over too soon.\u201d"
  };
  var DIAG_SRC = [
    {t:"Cboe via FRED \u2014 CBOE Volatility Index, daily closes since 1990 (VIXCLS), and the VXO for 1986\u20131989 (VXOCLS)", u:"https://fred.stlouisfed.org/series/VIXCLS"},
    {t:"Robert Shiller \u2014 U.S. stock market data: the S&P 500\u2019s monthly average and the CAPE ratio", u:"https://shillerdata.com/"},
    {t:"Alexandra Pope & Sjanie Hugo Wurlitzer \u2014 Wild Power (Hay House, 2017); Red School", u:"https://www.redschool.net/"}
  ];
  function readDoor(open){
    var item = document.querySelector('.cat-item[data-open="' + open + '"]'); if (!item) return null;
    var val = item.querySelector(".ci-value"), unit = item.querySelector(".ci-unit"), word = item.querySelector(".ci-word");
    var figure = val ? val.cloneNode(true) : null;
    if (figure) [].slice.call(figure.querySelectorAll(".ci-unit, .tag")).forEach(function(n){ n.parentNode.removeChild(n); });
    return { name:item.getAttribute("data-title"), figure:figure ? figure.textContent.trim() : "",
             unit:unit ? unit.textContent.trim() : "", word:word ? word.textContent.trim() : "" };
  }
  function pct(v){ return (v >= 0 ? "+" : "\u2212") + Math.abs(v * 100).toFixed(0) + "%"; }
  function symptom(name, figure, word){ return "<li><b>" + name + "</b> " + figure + (word ? " \u00b7 " + word : "") + "</li>"; }
  function momentumSymptom(d){
    var f = d.facts;
    return symptom("Momentum", pct(f.mom) + " over the year", f.mom > 0 ? Math.round(f.share * 100) + "% of this bull\u2019s best" : "falling");
  }
  function dxDoors(c){
    return ROSTER.filter(function(R){ return R.cat === c.key; })
      .map(function(R, i){ return { id:R.id, at:R.dx != null ? R.dx : i }; })
      .sort(function(a, b){ return a.at - b.at; }).map(function(x){ return x.id; });
  }
  function symptomsFor(c, era){
    var rows = era ? rosterRows() : null;
    return dxDoors(c).map(function(id){
      if (era){ var r = rows[id], e = r && eraReading(r, era); return e && !e.none ? symptom(r.name, closeFigure(r, e), e.when) : ""; }
      var t = readDoor(id);
      return t ? symptom(t.name, t.figure + (t.unit && !/[%\u00d7]/.test(t.figure) ? " " + t.unit : ""), t.word) : "";
    }).join("");
  }
  function rosterRows(){ return readingRoster().byId; }
  function closeFigure(r, e){
    if (r.flip) return Math.abs(e.v).toFixed(r.dp) + "% " + (e.v >= 0 ? "deficit" : "surplus");
    return readFig(r, e.v).replace(/<[^>]+>/g, "") + (r.pair && e.second != null ? " / " + e.second.toFixed(r.dp) + "% kept" : "");
  }
  function eraMove(id, era){
    var r = rosterRows()[id]; if (!r) return "";
    var span = r.seen.filter(function(d){ var y = +d.k.slice(0, 4); return y >= era.from && y <= era.to; });
    if (span.length < 2) return "";
    var a = span[0], b = span[span.length - 1];
    return (r.eraUnit || r.name) + " went from " + readFig(r, a.v).replace(/<[^>]+>/g, "") + " (" + prettyK(r, a.k) + ") to " +
      readFig(r, b.v).replace(/<[^>]+>/g, "") + " (" + prettyK(r, b.k) + ") across the cycle.";
  }
  function analysisFor(key, d, era){
    var w = function(id){ var r = readDoor(id); return r && r.word ? r.word.toLowerCase() : ""; };
    if (key === "weather") return seasonRuleSentence[d.season];
    if (key === "mood") return "<b>" + d.stage + "</b>: " + FEELING_RULES[d.stage] + ".";
    if (era) return eraMove(key === "circulation" ? "sheet-sign-hormones" : "sheet-sign-activity", era);
    if (key === "circulation") return "The regulator is " + w("sheet-sign-hormones") + "; money is " + w("sheet-sign-volume") + ".";
    return "Labour is " + w("sheet-sign-activity") + "; the household reserve is " + w("sheet-metric-households") + ".";
  }
  function dxRow(label, html, asList){
    return '<div class="dx-row"><span class="dx-k">' + label + '</span>' +
      (asList ? '<ul class="dx-list">' + html + '</ul>' : '<p class="dx-v">' + html + '</p>') + '</div>';
  }
  function dxSection(head, body, cls){ return '<section class="dx-sys' + (cls ? " " + cls : "") + '">' + head + body + '</section>'; }
  function systemHtml(c, analysis, symptoms){
    return dxSection(dxHead(c.title, c), dxRow("Analysis", analysis) + dxRow("Symptoms", symptoms, true), "cat-" + c.key);
  }
  function dxHead(title, c){
    var tag = c ? 'button type="button"' : "div";
    return '<' + tag + ' class="dx-sys-head"' + (c ? ' data-open="sheet-cat-' + c.key + '" data-title="' + title + '"' : "") + '>' +
      (c ? '<span class="dx-mark" aria-hidden="true">' + c.mark() + '</span>' : "") + title + (c ? CHEV : "") + '</' + (c ? "button" : "div") + '>';
  }
  function postureLine(d, more){
    return dxRow("Posture", '<b class="dx-word ' + POSTURE_STATE[d.posture] + '">' + d.posture + '</b>' + expandBtn(diagnosisInfo(d)) +
      " " + POSTURE_SAYS[d.posture] + (more ? " " + more : ""));
  }
  function diagnosisInfo(d){
    return '<h4>Diagnosis</h4>' + ledeHtml("How Mrs. Market feels, read from facts knowable that month, and what has followed that feeling in her season.") +
      facts(FEELINGS.map(function(w){ return "<b>" + w + "</b>: " + FEELING_RULES[w]; }).concat([
        "Calm is fear in the bottom 20% of its own history to date, frightened the top 20%, rising 20 points in three months; slowing is under 65% of the bull\u2019s best; near the high is within 5%. These lines are Keren\u2019s, from the research, not a published standard.",
        "Warm is Summer and both Autumns; cool is Winter and both Springs. Fear is the VIX from 1990 and the VXO before it, ranked against every month since 1986.",
        "The record counts every month since " + monthLabel(whatFollowed().from) + " with the same feeling in the same half, and the S&amp;P 500 a year later. It is a count of what followed, not a forecast."])) +
      srcBlock(DIAG_SRC);
  }
  function assessmentFor(d, era){
    if (era) return postureLine(d) + (d.after == null ? "" : dxRow("Followed", "The S&amp;P 500 a year after the close: <b>" + pct(d.after) + "</b>."));
    var r = d.record, watch = [];
    var rec = r ? "Since " + monthLabel(whatFollowed().from) + ": higher a year later in " + Math.round(r.higher / r.months * 100) + "% of " +
      r.months + " months, median " + pct(r.median) + ", worst " + pct(r.worst) + "." : "";
    if (d.facts.fear < FRIGHTENED) watch.push("Fear up 20 points from calm reads Anxiety");
    if (d.half === "warm") watch.push("Momentum turning negative reads Defense", "Fear after the body cools to Winter or Spring reads Offense");
    else watch.push("Fear arriving now, with the body cool, reads Offense");
    return postureLine(d, rec) + dxRow("Watch", watch.map(function(x){ return "<li>" + x + "</li>"; }).join(""), true);
  }
  function diagnosisHtml(m){
    var open = m.ongoing, d = open ? diagnoseToday() : diagnoseClose(m), era = m.era, closed = open ? null : era;
    if (!d) return "";
    var prev = marketCycles.filter(function(c){ return c.to != null && c.to < era.from; }).pop();
    var history = open ? "The " + era.name + ", year " + m.yearIndex + " of a typical " + typicalCycleYears + "." +
        (prev ? " Last bleed: the " + prev.name + ", " + prev.to + "." : "")
      : "The " + era.name + ", closed in " + era.to + " after " + m.yearIndex + " years; a typical cycle runs " + typicalCycleYears + ".";
    return '<header class="dx-top"><h2 class="dx-title">' + (open ? "She\u2019s in " : "She closed in ") +
        '<span class="' + FEELING_STATE[d.stage] + '">' + d.stage + '</span></h2>' +
        '<p class="dx-sub">' + seasonTitle(wheelMeta[d.season]) + " \u00b7 the " + d.half + " half \u00b7 " + d.posture + '</p>' +
        '<p class="dx-body">' + BODY_SAYS[d.season] + '</p></header>' +
      dxSection(dxHead("History"), dxRow("Record", history)) +
      categoriesShown().map(function(c){
        var symptoms = (c.key === "mood" ? momentumSymptom(d) : "") + symptomsFor(c, closed);
        return systemHtml(c, analysisFor(c.key, d, closed), symptoms);
      }).join("") +
      dxSection(dxHead("Assessment"), assessmentFor(d, closed));
  }
  function renderDiagnosis(m){
    var host = document.getElementById("diagnosis");
    if (host && m) host.innerHTML = diagnosisHtml(m);
  }
  function repaintDiagnosis(){ if (!eraOpen) renderDiagnosis(nowModel); }
  function buildDiagnosis(){
    var home = byId("today-analysis");
    if (!home || document.getElementById("diagnosis")) return;
    var host = document.createElement("article"); host.className = "dx"; host.id = "diagnosis";
    home.insertBefore(host, home.firstChild);
    renderDiagnosis(nowModel);
    addSources(DIAG_SRC);
  }
  GYN.step("buildDiagnosis", buildDiagnosis, "build"); buildDiagnosis();

  window.__sources = { all: allSources, cards: coincident.concat(lagging).map(function(c){ return {name:c.bodyTerm, src:c.src}; }), annual: sp500AnnualReturnSource, gdp: gdpSrc };
