

  function convertLeadingSigns(){
    [{ key:"hormones", title:"Hormones", timing:"leading" },
     { key:"pressure", title:"Pressure", timing:"leading" },
     { key:"horizon", title:"Horizon", timing:"leading" },
     { key:"sentiment", title:"Fear", timing:"leading" }].forEach(function(cfg){
      var det = document.querySelector('.subject[data-subject="' + cfg.key + '"]'); if (!det) return;
      var sum = det.querySelector(".subject-summary"), body = det.querySelector(".subject-body");
      var id = "sheet-sign-" + cfg.key;
      var row = document.createElement("div");
      row.className = "subject sign-row";
      row.setAttribute("data-subject", cfg.key);
      row.setAttribute("role", "button"); row.tabIndex = 0;
      row.setAttribute("data-open", id); row.setAttribute("data-title", cfg.title);
      var face = document.createElement("div"); face.className = "subject-summary";
      while (sum.firstChild) face.appendChild(sum.firstChild);
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
  }
  function orderMetricSheets(){
    [["temp-timing", "lagging"], ["gdp-timing", "coincident"],
     ["power-timing", "structural"], ["valuation-timing", "structural"],
     ["households-timing", "structural"]].forEach(function(p){
      put(p[0], timingPill(p[1]));
    });

    ["sheet-metric-temp", "sheet-metric-gdp", "sheet-metric-power", "sheet-metric-valuation",
     "sheet-metric-households"].forEach(function(id){
      var sheet = byId(id); if (!sheet) return;
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
  function renderSignsList(){
    var host = byId("signs-list");
    var PEEKED = { Temperature:1, Pulse:1, Volume:1 };
    var FOLDED = { "Industrial output":"Activity" }, foldedInto = {};
    foldedInto["Activity"] = [productivityReading];
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
              (ind.peek || "")
      }));
      if (FOLDED[ind.bodyTerm]){
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
      d.querySelector(".sign-detail").innerHTML =
        "" +
        cardDetailHtml(ind, { bare: ind.bodyTerm === "Temperature" || ind.bodyTerm === "Desire" ||
                                    ind.bodyTerm === "Volume" || ind.bodyTerm === "Pulse" ||
                                    ind.bodyTerm === "Activity",
                              noHead: ind.bodyTerm === "Pulse" || ind.bodyTerm === "Volume",
                              noMark: ind.bodyTerm === "Desire" || ind.bodyTerm === "Activity",
                              noMeter: ind.bodyTerm === "Desire",
                              chartFirst: ind.bodyTerm === "Pulse" || ind.bodyTerm === "Volume",
                              bloodCard: false,
                              deferHighlights: ind.bodyTerm === "Desire" || ind.bodyTerm === "Activity",
                              chart: ind.bodyTerm === "Pulse" ? pulseBlock(ind.meter.value, PULSE_PRE2008, ind)
                                   : ind.bodyTerm === "Volume" ? volumeBlock(ind) : "" }) +
        (ind.bodyTerm === "Desire" ? desireBlock(ind) + riskMatrixBlock(ind.meter.value, valRow("cape").meter.value)
         : ind.bodyTerm === "Activity" ? activityStackHtml(ind)
           : "") +
        (ind.bodyTerm === "Activity" ? "" : (foldedInto[ind.bodyTerm] || []).map(foldedBlock).join("")) +
        (function(){ var h = heldHighlights; heldHighlights = ""; return h; })();
      registerTiming(timing || (ind.bodyTerm === "Temperature" ? "lagging" : null), {
        title:ind.bodyTerm, sub:ind.econTerm, metric:ind.metric, metricSub:ind.metricSub,
        tag:ind.tag, icon:'<div class="subject-icon"><span class="' + ind.tag.state + '">' + svg + '</span></div>',
        target:pageFor(ind.bodyTerm)
      });
      if (PEEKED[ind.bodyTerm] && ind.bodyTerm !== "Temperature"){ host.appendChild(d); return d; }
      if (ind.bodyTerm === "Temperature"){
        HIST_NOTE["sheet-metric-temp"] = temperatureInfoHtml(ind);
        tempCaptionFull = ind.caption;
        tempLeadShown = ind.lead || ind.shortCaption || "";
        (function(){
          var sheet = byId("sheet-metric-temp");
          var fresh = d.querySelector(".sign-detail");
          var prev = sheet.querySelector(":scope > .sign-detail");
          if (prev) sheet.replaceChild(fresh, prev); else sheet.appendChild(fresh);
        })();
      } else { host.appendChild(row); host.appendChild(d); }
      return d;
    }
    coincident.forEach(function(ind){ signSubject(ind, ind.bodyTerm === "Temperature" ? null : (ind.timing || "coincident")); });
    lagging.forEach(function(ind){ signSubject(ind, "lagging"); });

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
  function discOf(mark, state){
    return mark ? '<div class="subject-icon"><span class="' + (state || "norm") + '">' + mark.innerHTML + '</span></div>' : "";
  }
  function authored(sel, key){ return document.querySelector(sel) || (window.__CAT_SNAP || {})[key] || null; }
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
          var mk = row.querySelector(".subject-label .peek-mark");
          if (mk) return discOf(mk, rv.s);
          var rg = row.querySelector(".subject-ring");
          return rg && rg.firstElementChild ? rg.innerHTML : "";
        })(),
        target:row.getAttribute("data-open")
      });
    });
  }

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
                  hide:function(){ return [byId("calendar-list")]; } }
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
  function buildIndicatorSheet(){
    var indSheet = document.createElement("div");
    indSheet.className = "metric-sheet ind-sheet"; indSheet.id = "sheet-indicators"; indSheet.hidden = true;
    var IND_ORDER = ["structural", "leading", "coincident", "lagging"];
    var IND_TABS = [{ key:"all", label:"All" }, { key:"leading", label:"Leading" },
                    { key:"coincident", label:"Coincident" }, { key:"lagging", label:"Lagging" }];
    indSheet.innerHTML =
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
    (byId("today-analysis") || NAV.panel).appendChild(indSheet);

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
    openIndicatorsPage = function(tab){
      var btn = document.querySelector('.tab-btn[data-tab="cycle"]');
      if (btn && !btn.classList.contains("active")) btn.click();
      setIndTab(tab && tab !== "structural" ? tab : "all");
      NAV.open(indSheet, "All indicators", false, "cycle");
    };
  }

  /* ---- THE CYCLE TAB: cards and categories ---- */
  function fmtDay(d){ return MONTHS_SHORT[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear(); }
  function qPretty(q){ var p = String(q).split(" "); return p.length > 1 ? p[1] + " " + p[0] : String(q); }
  var DATED_UNIT = /^(.*?),\s*((?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[^,]*|Q[1-4]\s+\d{4})$/;
  function peekArt(src){ return src.querySelector(".peek-chart"); }
  function indPeriod(term){
    var all = coincident.concat(lagging);
    for (var i = 0; i < all.length; i++){
      if (all[i].bodyTerm !== term) continue;
      var m = DATED_UNIT.exec(String(all[i].metricSub || "").trim());
      return m ? m[2] : "";
    }
    return "";
  }
  function catItem(src, PERIOD){
    var open = src.getAttribute("data-open");
    (window.__CAT_SNAP = window.__CAT_SNAP || {})[open] = src.cloneNode(true);
    var item = document.createElement("button");
    item.type = "button"; item.className = "cat-item";
    item.setAttribute("data-open", open);
    item.setAttribute("data-title", src.getAttribute("data-title") || "");
    var head = document.createElement("div"); head.className = "ci-head";
    var markSrc = src.querySelector(".peek-mark, .subject-icon");
    if (markSrc){
      var glyph = markSrc.querySelector("svg");
      var holder = document.createElement("span");
      holder.className = "peek-mark";
      if (glyph) holder.appendChild(glyph);
      head.appendChild(holder);
    }
    var nm = document.createElement("span"); nm.className = "ci-name";
    var kick = src.querySelector(".peek-kicker");
    nm.textContent = kick ? kick.textContent.replace(/\s+/g, " ").trim()
                          : (src.getAttribute("data-title") || "");
    head.appendChild(nm);
    var body = document.createElement("div"); body.className = "ci-body";
    var read = document.createElement("div"); read.className = "ci-read";
    var val = src.querySelector(".peek-value, .subject-value");
    var when = PERIOD[open] || "";
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
    var mini = CAT_MINI[open] ? src.querySelector(CAT_MINI[open]) : peekArt(src);
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
  var CAT_MINI = {
    "sheet-sign-sentiment": ".subject-ring > svg"
  };
  function placeSignPair(){
    var pair = [["Pulse", "M2 velocity"], ["Volume", "M2, YoY"]].map(function(p){
      var ind = coincident.filter(function(x){ return x.bodyTerm === p[0]; })[0];
      if (!ind) return "";
      var art = p[0] === "Pulse"
        ? { pulse:{ rate:ind.meter.value, ref:PULSE_PRE2008 } }
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
    var CATS = [
      { key:"weather", title:"Weather", mark:weatherSvg(), sub:"Temperature \u00b7 Growth",
        picks:['.peek[data-open="sheet-metric-temp"]', '.peek[data-open="sheet-metric-gdp"]'] },
      { key:"circulation", title:"Circulation", mark:circulationSvg(), sub:"Hormones · Pressure · Pulse · Volume",
        picks:['.sign-row[data-subject="hormones"]', '.sign-row[data-subject="pressure"]',
               '.peek[data-open="sheet-sign-pulse"]', '.peek[data-open="sheet-sign-volume"]'] },
      { key:"mood", title:"Mood", mark:moodSvg(), sub:"Valuations · Fear · Desire · Horizon",
        picks:['.peek[data-open="sheet-metric-valuation"]', '.sign-row[data-open="sheet-sign-sentiment"]',
               '.sign-row[data-open="sheet-sign-desire"]', '.sign-row[data-open="sheet-sign-horizon"]'] },
      { key:"energy", title:"Energy", mark:boltSvg(), sub:"Power · Households · Activity",
        picks:['.peek[data-open="sheet-metric-power"]', '.peek[data-open="sheet-metric-households"]',
               '.sign-row[data-open="sheet-sign-activity"]'] }
    ];
    var PERIOD = {
      "sheet-metric-temp":      atMonth(cpiYoYHistory[cpiYoYHistory.length - 1]),
      "sheet-metric-gdp":       qPretty(gdpQuarterlyYoY[gdpQuarterlyYoY.length - 1].q),
      "sheet-sign-horizon":     fmtDay(DATA_COMPILED),
      "sheet-sign-pulse":       qPretty(qAtIndex(M2V_FROM_YEAR, m2vHistory.length - 1)),
      "sheet-sign-volume":      indPeriod("Volume") || qPretty(qAtIndex(M2_FROM_YEAR, m2Yoy.length - 1)),
      "sheet-metric-power":     String(powerHistory[powerHistory.length - 1].y),
      "sheet-sign-sentiment":   fmtDay(DATA_COMPILED),
      "sheet-sign-hormones":    fedFunds.asOf,
      "sheet-sign-pressure":    fmtDay(DATA_COMPILED),
      "sheet-metric-valuation": String(capeHistory[capeHistory.length - 1].y),
      "sheet-metric-households": qPretty(qAtIndex(DSR_FROM_YEAR, dsrHistory.length - 1))
    };
    var list = document.createElement("div"); list.className = "browse-list";
    CATS.forEach(function(c){
      if (c.picks){
        var sheet = document.createElement("div");
        sheet.className = "metric-sheet"; sheet.id = "sheet-cat-" + c.key; sheet.hidden = true;
        var items = document.createElement("div"); items.className = "cat-list";
        c.picks.forEach(function(sel){
          var el = document.querySelector(sel); if (!el) return;
          items.appendChild(catItem(el, PERIOD));
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
    list.appendChild(elFrom(subjectRow({
      cls:"all-row", open:"sheet-indicators", title:"All indicators",
      icon: subjectIcon("norm",
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" ' +
        'stroke-linecap="round" aria-hidden="true"><path d="M4 6.5h0.6"/><path d="M9 6.5h11"/>' +
        '<path d="M4 12h0.6"/><path d="M9 12h11"/><path d="M4 17.5h0.6"/><path d="M9 17.5h11"/></svg>'),
      text: '<div class="subject-label">All indicators</div>'
    })));
    host.insertBefore(list, host.firstChild);
    ["peek-row", "peek-row-signs", "signs-list"].forEach(function(id){
      var el = byId(id);
      if (el && !el.querySelector("*") && el.parentNode) el.parentNode.removeChild(el);
    });
  }
  function renderPeekAndCategories(){
    var host = byId("peek-row"); if (!host) return null;
    var tempInd = lagging.concat(coincident).filter(function(c){ return c.bodyTerm === "Temperature"; })[0];
    var r = nowModel.reading, era = nowModel.era;
    var cpiWord = r.cpiHot ? "Hot" : r.cpiCold ? "Cold" : "Warm";
    var cpiDir = r.cpiDirection === "rising" ? "heating" : r.cpiDirection === "falling" ? "cooling" : "steady";
    var gq = gdpQuarterlyYoY.filter(function(d){ return parseInt(d.q.slice(0, 4), 10) >= era.from; });
    var capeNow = valRow("cape").meter.value, buffNow = valRow("buffett").meter.value;
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
                 target:"sheet-metric-gdp", cols:gq.map(function(d){ return d.v; }),
                 colClass:function(v, i){
                   return "gdp-col " + (v < 0 ? "below" : quarterRegime(gq[i]) === "contraction" ? "neg" : "pos");
                 } }) +
      peekCard({ kicker:"Power", title:"Economic power", mark:boltSvg(), value:powerScore + "%",
                 unit:"reserve", word:powerWord.word,
                 state:powerWord.state, target:"sheet-metric-power", ring:powerScore }) +
      peekCard({ kicker:"Valuations",
                 mark:diamondSvg(),
                 value:capeNow.toFixed(1) + "\u00d7", unit:"CAPE", word:valuation.tag.text,
                 state:valuation.tag.state, target:"sheet-metric-valuation",
                 cols:capeHistory.map(function(d){ return d.v; }), colBase:CAPE_FAIR,
                 colClass:function(v){ return "dv-bar " + (v > CAPE_FAIR ? "over" : "under"); } }) +
      peekCard({ kicker:"Households",
                 mark:houseSvg(),
                 value:dsrNow.toFixed(1) + "/" + savNow.toFixed(1), unit:"% paid / kept",
                 word:householdsNow.word, state:householdsNow.state, target:"sheet-metric-households",
                 cols:savHistory.slice(SAV_OFFSET), colBase:0,
                 colClass:function(){ return "hh-col"; } }) +
      "";

    placeSignPair();
    swapSentimentActivity();
    buildCategories();

    return { host:host, tempInd:tempInd, r:r, gq:gq, capeNow:capeNow, buffNow:buffNow };
  }

  /* ---- THE INNER PAGES ---- */
  function pct0(v){ return Math.round(v) + "%"; }
  function capeFmt1(v){ return v.toFixed(1) + "\u00d7"; }
  function reserveState(v){ return v >= 70 ? "good" : v >= 50 ? "warning" : v >= 30 ? "serious" : "critical"; }
  var TEMP_STOPS  = ["5y", "10y", "25y", "max"];
  var GDP_STOPS   = ["5y", "10y", "25y", "max"];
  var POWER_STOPS = ["5y", "10y", "25y", "max"];
  var VAL_STOPS   = ["5y", "10y", "25y", "max"];
  var DEF_STOPS   = ["5y", "10y", "25y", "max"];
  function qShort(q){ return q.slice(5) + " \u2019" + q.slice(2, 4); }
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
      var r = pageRange["sheet-metric-temp"], cyclesOn = pageMode["sheet-metric-temp"] === "cycles";
      put("temp-rangebar", histControls("sheet-metric-temp", { series:cpiYoYHistory, stops:TEMP_STOPS }));
      put("temp-head", histHead("sheet-metric-temp"));
      byId("slot-temp").hidden = true;
      var hist = byId("temp-history"); hist.hidden = false;
      var win, cyc = null;
      if (cyclesOn){
        cyc = cycleByName(pageCycles["sheet-metric-temp"]) || openCycle();
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
      var r = pageRange["sheet-metric-gdp"], yoy = r === "yoy";
      var cyclesOn = pageMode["sheet-metric-gdp"] === "cycles";
      put("gdp-rangebar", histControls("sheet-metric-gdp", { series:gdpQuarterlyYoY, stops:GDP_STOPS }));
      put("gdp-head", histHead("sheet-metric-gdp"));
      byId("slot-growth").hidden = true;
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
        var gy0 = yearOf(win[0]), gy1 = yearOf(win[win.length - 1]), gt = totalGrowthYears(gy0, gy1);
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

  }
  function registerActivityPowerDeficitPages(){
    var ACT_STOPS = ["5y", "10y", "25y", "max"];
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
        trendPill(powerTrend, null, true) +
        '<div class="panel-stack in-hist">' + powerPanelHtml + '</div>' +
        histTip("power-hist-tooltip") + '</div>');
      var pBox = document.querySelector("#power-chart .page-chart");
      refitHistory(pBox, function(w){
        return reserveChart({ vals:vals, stateOf:reserveState, fmt:pct0, ref:70, refLabel:"ample reserve, 70%",
                              fit:powerTrend.fit, alt:"Power supply, one charge per year" }, w);
      });
      attachHistory(pBox, "power-hist-tooltip", "reserveChart");
    };
    sheetRenderers["sheet-marker-deficit"] = function(W){
      var sheet = byId("sheet-marker-deficit"); if (!sheet) return;
      if (!sheet.firstChild) sheet.innerHTML = deficitBlock();
      sheetRenderers["deficit-range"](W);
    };
    sheetRenderers["deficit-range"] = function(W){
      var host = byId("deficit-record"); if (!host) return;
      var key = pageRange["deficit-range"], defCycles = pageMode["deficit-range"] === "cycles";
      var defCyc = defCycles ? (cycleByName(pageCycles["deficit-range"]) || openCycle()) : null;
      var defIdx = defCyc ? [Math.max(0, defCyc.from - DEF_FROM_YEAR),
                             Math.min(deficitHistory.length, (defCyc.to || calendarTodayY) - DEF_FROM_YEAR + 1)] : null;
      var from = defIdx ? defIdx[0] : defFrom(key), defTo = defIdx ? defIdx[1] : undefined;
      var bar = put("deficit-rangebar", histControls("deficit-range",
        { depth:deficitHistory.length, stops:DEF_STOPS }));
      host.innerHTML = deficitChart(host.clientWidth || W, from, defTo);
      var defRows = put("deficit-records", "");
      attachHistory(host, "deficit-hist-tooltip", "deficitChart");
      var dTrend = put("deficit-trend", trendPill(
        trendOf(deficitHistory.slice(from, defTo), "points", "year"), null, true,
        { rising:"improving", falling:"widening" }));
    };
  }
  function registerHouseholdsValuationPages(){
    var HH_STOPS = ["5y", "10y", "max"];
    sheetRenderers["sheet-metric-households"] = function(W){
      var id = "sheet-metric-households";
      var hhCyc = pageMode[id] === "cycles" ? (cycleByName(pageCycles[id]) || openCycle()) : null;
      if (hhCyc && hhCyc.from < DSR_FROM_YEAR) hhCyc = openCycle();
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
        '<div class="panel-stack in-hist">' + householdsPanelHtml() + '</div>' +
        histTip("households-hist-tooltip") + '</div>';
      var box = host.querySelector(".page-chart");
      refitHistory(box, function(w){ return householdsChart(w, from, to); });
      attachHistory(box, "households-hist-tooltip", "householdsChart");
      var hl = put("households-highlights", householdsHighlights());
    };
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
          tickFmt:function(v){ return v + "\u00d7"; },
          fit:capeTrend.fit,
          alt:"Shiller CAPE against its long-run fair value, each January" +
              (r === "max" ? " since " + capeHistory[0].y : " of the last " + timelineSpan(r) + " years") +
              ", with the fitted trend across the readings in view"
        }, W) +
        trendPill(capeTrend, null, true) +
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
  function powerHighlights(){
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
  }
  function valuationHighlights(capeNow, buffNow){
    var vs = capeHistory.map(function(d){ return d.v; });
    var richer = capeHistory.filter(function(d){ return d.v > capeNow; });
    var bv = buffettHistory.map(function(d){ return d.v; });
    var bPrev = maxIn(buffettHistory, 1970, currentEra.from - 1);
    var bDot = maxIn(buffettHistory, 2000, 2007);
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
    put("power-head", "");
    put("valuation-head", "");
    registerTempGdpPages();
    registerActivityPowerDeficitPages();
    registerHouseholdsValuationPages();
    wireMetricPageControls();
    powerHighlights();
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
    buildIndicatorSheet();
  }
  GYN.step("renderPagesAndNav", renderPagesAndNav, "render"); renderPagesAndNav();

  window.__sources = { all: allSources, cards: coincident.concat(lagging).map(function(c){ return {name:c.bodyTerm, src:c.src}; }), annual: sp500AnnualReturnSource, gdp: gdpSrc };
