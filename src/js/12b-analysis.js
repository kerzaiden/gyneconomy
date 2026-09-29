
  // ---- RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it ----
  function renderCycleList(){
    var list = byId("cycle-list");
    var strips = {};
    marketCycles.forEach(function(c){ strips[c.from] = seasonStripHtml(c); });
    list.innerHTML = marketCycles.slice().reverse().map(function(cyc){
      var total = eraMarketTotal(cyc), strip = strips[cyc.from];
      return '<div class="era-row" role="button" tabindex="0" data-era="' + cyc.from + '">' +
            '<div class="era-head"><span class="era-name">' + cyc.name + '</span>' +
              '<span class="era-years">' + cycLabel(cyc).years +
                ' <b>(' + strip.years + 'Y)</b></span>' +
              CHEV + '</div>' +
            '<div class="era-bands">' + strip.strip + marketStripHtml(cyc, strip.span, strip.done) + '</div>' +
            '<div class="era-foot">' +
              '<span class="era-econ">' +
                '<span class="chip"><i>Growth</i>' + fmtSigned(eraGrowth(cyc).total, 0) + '%</span>' +
                '<span class="chip"><i>Prices</i>' + fmtSigned(eraInflation(cyc).total, 0) + '%</span>' +
                (total != null ? '<span class="chip"><i>S&amp;P 500</i>' + fmtSigned(total, 0) + '%' + (cyc.ongoing ? '<span class="unit"> so far</span>' : '') + '</span>' : '') +
              '</span>' +
            '</div>' +
      '</div>';
    }).join('');
    var PREVIEW_CYCLES = 99;
    (function(){
      var rows = [].slice.call(list.querySelectorAll(".era-row"));
      var btn = byId("cycle-more"), label = byId("cycle-more-label");
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

    var listWrap = byId("calendar-list"), detail = byId("calendar-cycle"), slot = byId("calendar-cycle-slot");
    function open(from){
      var era = marketCycles.filter(function(c){ return c.from === from; })[0];
      if (!era) return;
      if (era.ongoing){
        var tab = document.querySelector('.tab-btn[data-tab="cycle"]');
        if (tab){ tab.click(); window.scrollTo({ top: 0, behavior: "smooth" }); return; }
      }
      showCycle(era, true);
      slot.appendChild(cycleViewEl);
      renderCycleCats(era);
      listWrap.hidden = true; detail.hidden = false;
      setTopbar(era.name, back);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    function back(){
      detail.hidden = true; listWrap.hidden = false;
      setTopbar("Analysis", null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    list.addEventListener("click", function(e){ var row = e.target.closest && e.target.closest(".era-row"); if (row) open(parseInt(row.getAttribute("data-era"), 10)); });
    list.addEventListener("keydown", function(e){ if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("era-row")){ e.preventDefault(); open(parseInt(e.target.getAttribute("data-era"), 10)); } });
    calendarReset = function(){ detail.hidden = true; listWrap.hidden = false; topbarBack = null; byId("topbar-back").hidden = true; };
    addSources(sp500AnnualReturnSource); addSources(typicalCycleSrc);
  }
  GYN.step("renderCycleList", renderCycleList, "wire"); renderCycleList();

  renderCycleView(nowModel);

  /* ---- RENDER: a closed cycle's four categories ---- */
  function renderCycleCats(era){
    var host = byId("cycle-cats"); if (!host) return;
    var from = era.from, to = era.to || calendarTodayY;
    host.innerHTML = readingRoster().map(function(g){
      var rows = g.rows.map(function(r){
        var span = r.seen.filter(function(d){
          var y = +d.k.slice(0, 4); return y >= from && y <= to;
        });
        var mark = '<span class="peek-mark" aria-hidden="true">' + r.mark() + '</span>';
        if (!span.length){
          return '<div class="cat-item flat"><div class="ci-head">' + mark +
            '<span class="ci-name">' + r.name + '</span></div>' +
            '<div class="ci-body"><div class="ci-read"><div class="ci-value cc-none">\u2014</div>' +
            '<div class="ci-word">Not measured before ' + prettyK(r, r.first.k) + '</div></div></div></div>';
        }
        var end = span[span.length - 1];
        var vs = span.map(function(d){ return d.v; });
        var lo = Math.min.apply(null, vs), hi = Math.max.apply(null, vs);
        var art = span.length >= 3
          ? '<div class="ci-mini">' + sparkHtml(vs, "") + '</div>' : "";
        var travel = lo === hi ? "Flat all cycle"
          : readFig(r, lo) + " to " + readFig(r, hi) + " over the cycle";
        return '<div class="cat-item flat"><div class="ci-head">' + mark +
          '<span class="ci-name">' + r.name + '</span>' +
          '<span class="ci-when">' + prettyK(r, end.k) + '</span></div>' +
          '<div class="ci-body"><div class="ci-read"><div class="ci-value">' + readFig(r, end.v) + '</div>' +
          '<div class="ci-word">' + travel + '</div></div>' + art + '</div></div>';
      }).join("");
      return '<div class="cc-grp"><div class="cyc-title"><span class="peek-mark" aria-hidden="true">' +
        g.mark() + '</span>' + g.label + '</div><div class="cat-list">' + rows + '</div></div>';
    }).join("");
  }

  /* ---- THE ROSTER AS SERIES ---- */
  var __roster = null;
  function readingRoster(){
    if (__roster) return __roster;
    var byM = function(a){ return a.map(function(d){ return { k:d.m, v:d.v }; }); };
    var byQ = function(a){ return a.map(function(d){ return { k:d.q, v:d.v }; }); };
    var byY = function(a){ return a.map(function(d){ return { k:String(d.y), v:d.v }; }); };
    var qFrom = function(a, y0){ return a.map(function(v, i){
      return { k:(y0 + Math.floor(i / 4)) + " Q" + (i % 4 + 1), v:v }; }); };
    var hyList = hyOas.map(function(v, i){ var a = hyAt(i);
      return { k:a.y + "-" + ("0" + a.m).slice(-2), v:v }; });
    var GRPS = [
      { key:"weather", label:"Weather", mark:weatherSvg, rows:[
        { name:"Temperature", on:"m", mark:thermoSvg,   list:byM(cpiYoYHistory),           dp:1, unit:"%" },
        { name:"Growth",      on:"q", mark:sproutSvg,   list:byQ(gdpQuarterlyYoY),         dp:1, unit:"%" }
      ]},
      { key:"circulation", label:"Circulation", mark:circulationSvg, rows:[
        { name:"Hormones",    on:"m", mark:hormoneSvg,  list:byM(fedFundsHistory),         dp:2, unit:"%" },
        { name:"Pressure",    on:"q", mark:gaugeSvg,    list:byQ(t10yYieldHistory),        dp:2, unit:"%" },
        { name:"Pulse",       on:"q", mark:ecgSvg,      list:qFrom(m2vHistory, M2V_FROM_YEAR),   dp:2 },
        { name:"Volume",      on:"q", mark:volumeSvg,   list:qFrom(m2Yoy, M2_FROM_YEAR),         dp:1, unit:"%" }
      ]},
      { key:"mood", label:"Mood", mark:moodSvg, rows:[
        { name:"Valuations",  on:"y", mark:diamondSvg,  list:byY(capeHistory),  dp:1, pre:"Jan ", last:"today" },
        { name:"Fear",        on:"m", mark:umbrellaSvg, list:byM(fearCurveHistory),        dp:2 },
        { name:"Desire",      on:"m", mark:flameSvg,    list:hyList,                       dp:2, unit:"%" },
        { name:"Horizon",     on:"q", mark:sunriseSvg,  list:byQ(t10y3mHistory),           dp:2, signed:true }
      ]},
      { key:"energy", label:"Energy", mark:boltSvg, rows:[
        { name:"Power",       on:"y", mark:boltSvg,     list:byY(powerHistory),            dp:0 },
        { name:"Activity",    on:"m", mark:trendUpSvg,  list:byM(unempHistory),            dp:1, unit:"%" },
        { name:"Households",  on:"q", mark:houseSvg,    list:qFrom(dsrHistory, DSR_FROM_YEAR),   dp:1, unit:"%" }
      ]}
    ];
    GRPS.forEach(function(g){ g.rows.forEach(function(r){
      var seen = r.list.filter(function(d){ return d.v != null; });
      var sorted = seen.map(function(d){ return d.v; }).sort(function(a, b){ return a - b; });
      r.place = function(v){
        var lo = 0; sorted.forEach(function(x){ if (x < v) lo++; });
        return sorted.length > 1 ? 100 * lo / (sorted.length - 1) : 50;
      };
      r.first = seen[0]; r.now = seen[seen.length - 1]; r.seen = seen;
    }); });
    return (__roster = GRPS);
  }
  function readFig(r, v){
    var a = Math.abs(v).toFixed(r.dp);
    var sign = +a === 0 ? "" : v < 0 ? "\u2212" : r.signed ? "+" : "";
    return sign + a + (r.unit ? '<span class="unit">' + r.unit + '</span>' : "");
  }
  function prettyK(r, k){
    if (r.pre) return r.pre + k;
    if (/^\d{4}-\d{2}$/.test(k)) return MONTHS_SHORT[+k.slice(5) - 1] + " " + k.slice(0, 4);
    if (/^\d{4} Q[1-4]$/.test(k)) return k.slice(5) + " " + k.slice(0, 4);
    return k;
  }

  /* ---- RENDER: Rhymes — today beside a past top ---- */
  function renderRhymes(){
    var pick = byId("rhy-pick"), body = byId("rhy-body");
    if (!pick || !body) return;
    var ALIKE = 5;
    var GRPS = readingRoster();
    function stamp(r, k){ return (r.pre || "") + k; }
    function cell(r, v, when, na){
      return '<span class="rhy-cell' + (v == null ? " na" : "") + '">' +
        '<b>' + (v == null ? "\u2014" : readFig(r, v)) + '</b><i>' + (v == null ? na : when) + '</i></span>';
    }
    function dstr(iso){
      return +iso.slice(8) + " " + MONTHS_SHORT[+iso.slice(5, 7) - 1] + " " + iso.slice(0, 4);
    }
    function draw(key){
      var top = marketTops.filter(function(t){ return t.key === key; })[0] || marketTops[0];
      var days = Math.round((Date.parse(top.trough) - Date.parse(top.peak)) / 86400000);
      Array.prototype.forEach.call(pick.querySelectorAll(".range-seg"), function(b){
        var on = b.getAttribute("data-rhyme") === top.key;
        b.classList.toggle("on", on); b.setAttribute("aria-selected", on ? "true" : "false");
      });
      body.innerHTML =
        '<p class="rhy-say">The ' + top.cycle + ' peaked <b>' + dstr(top.peak) + '</b>, then fell <b>' +
          top.fall.toFixed(1) + '%</b> over <b>' + days + ' days</b>.</p>' +
        GRPS.map(function(g){
          return '<div class="rhy-grp">' +
            '<div class="rhy-cols"><span class="rhy-gname">' + g.label + '</span>' +
              '<span class="rhy-col">At the peak</span><span class="rhy-col">Now</span></div>' +
            g.rows.map(function(r){
              var hit = r.list.filter(function(d){ return d.k === top[r.on] && d.v != null; })[0];
              var alike = hit && Math.abs(r.place(hit.v) - r.place(r.now.v)) <= ALIKE;
              return '<div class="rhy-row' + (alike ? " alike" : "") + '">' +
                '<span class="rhy-name">' + r.name +
                  (alike ? '<i class="rhy-mark" title="Both readings sit about as high in this record">' +
                           '\u25cf</i>' : "") + '</span>' +
                cell(r, hit ? hit.v : null, stamp(r, top[r.on]), "from " + stamp(r, r.first.k)) +
                cell(r, r.now.v, r.last || stamp(r, r.now.k)) + '</div>';
            }).join("") +
          '</div>';
        }).join("");
    }
    pick.innerHTML = '<div class="rangebar" role="tablist" aria-label="Which past peak to stand beside">' +
      marketTops.slice().reverse().map(function(t, i){
        return '<button type="button" class="range-seg' + (i ? "" : " on") + '" role="tab" aria-selected="' +
          (i ? "false" : "true") + '" data-rhyme="' + t.key + '">' + t.key + '</button>';
      }).join("") + '</div>';
    pick.addEventListener("click", function(e){
      var b = e.target.closest && e.target.closest(".range-seg"); if (b) draw(b.getAttribute("data-rhyme"));
    });
    draw(marketTops[marketTops.length - 1].key);
    addSources(marketTopsSrc);
  }
  GYN.step("renderRhymes", renderRhymes, "wire"); renderRhymes();
