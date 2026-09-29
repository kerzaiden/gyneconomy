  /* ================= THE ANALYSIS TAB (Version 624) =================
     Keren: "explain to me what the 12 pages nav is — maybe we need to work on it now before we will have to
     refactor the entire app 200 versions from now."
     She is right about the direction, and the measurement says where to cut. 12-pages-nav.js does six jobs;
     four of them are the Cycle tab (the peek row, the signs, the four categories, the pages and the
     navigation between them) and they live inside ONE 1,270-line function that shares a closure. Those cannot
     be pulled apart cheaply and, on today's evidence, are not what grows.
     These four are the Analysis tab, they were all written in the last fortnight, and they reference NOTHING
     inside that function — the only mention crossing the line is in a comment. So this is the cut that costs
     nothing and takes the part that is actually growing: the cycle list, a closed cycle's categories, the
     roster the categories and Rhymes share, and Rhymes itself.
     ONE ORDERING CHANGE, and it is a correction rather than a cost. renderCycleList used to register first,
     ahead of renderPagesAndNav; it now registers after, like everything else in this file, which is the side
     of the V255 CAPE carry the readings belong on. Nothing here reads the roster at load — a cycle's
     categories are built when a cycle is opened — so the move is safe as well as tidier. */

  // ---------------- RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it ----------------
  function renderCycleList(){
    var list = byId("cycle-list");
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
    // Version 354: two cycles show, the rest wait. PREVIEW_CYCLES is the only number here — the rows are
    // already built, so this hides the tail rather than rendering a different list, which means an expanded
    // container and the old five-row one are the same DOM and nothing can drift between them.
    /* Version 505: every cycle shows. Two was right while the season reading sat under this list and the tab
       had to hold both; with that gone the tab IS the cycle history, and a history that hides three of its five
       entries behind a button is a preview of itself — the fault Version 354's own comment named. */
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
      /* Version 616, Keren: "when I click on AI Cycle, which is the current cycle, I just want to go to the
         current cycle page, because the cycle is not ended yet."
         Right, and it settles what Version 615 left half-said. That version gave a CLOSED cycle a view of its
         own — the dial, and every reading as what it finished at and how far it ran — because a cycle that
         ended has no live page. The open cycle has one: the Cycle tab IS this view, still moving, with its
         charts and its doors. Building a second, frozen copy of it would be the app telling a reader that the
         AI Cycle is over, in the one place whose whole subject is whether it is. So the row is still a door;
         it opens the tab rather than a page.
         It leaves through the tab button rather than by assembling the tab here, so the Cycle tab does its own
         setup — placeCharts, the live cycle, the top bar — in the one place that knows how. */
      if (era.ongoing){
        var tab = document.querySelector('.tab-btn[data-tab="cycle"]');
        if (tab){ tab.click(); window.scrollTo({ top: 0, behavior: "smooth" }); return; }
      }
      showCycle(era, true);   // V615: the dial only — the two cards stay in their drawers
      slot.appendChild(cycleViewEl);
      renderCycleCats(era);
      listWrap.hidden = true; detail.hidden = false;
      // the top bar becomes the cycle's: its name as the title, the back arrow on the left (Keren, Sep 19, 2026: in the
      // top menu, not a link under it)
      setTopbar(era.name, back);   // V616: only closed cycles reach here, and each has a name
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
    calendarReset = function(){ detail.hidden = true; listWrap.hidden = false; topbarBack = null; byId("topbar-back").hidden = true; };
    addSources(sp500AnnualReturnSource); addSources(typicalCycleSrc);
  }
  GYN.step("renderCycleList", renderCycleList, "wire"); renderCycleList();

  // First paint: the current cycle on the Cycle tab.
  renderCycleView(nowModel);

  /* ---------------- RENDER: a closed cycle's four categories (Version 613) ----------------
     Keren: "I want the view to be exactly like the current cycle page — four categories of Weather, Mood,
     Circulation, Energy. But instead of going to another inner page, just show the data very briefly."
     Same four categories, same row anatomy, one difference that is the whole point: on the Cycle tab a
     category is a DOOR, because behind it is a live page that keeps moving. A cycle that ended has no live
     page. So the row shows what the reading FINISHED at and how far it travelled getting there, and there is
     nothing to open.
     WHERE IT ENDED AND ITS RANGE — her choice over the peak reading and over first-against-last. It answers
     both questions a closed cycle raises: how did this end, and how far did this reading move. The extreme is
     usually the story and first-against-last would hide it; the peak reading would leave the Big Tech Cycle
     empty, since it never had a bear market to have a peak at.
     A reading with nothing inside the cycle says so. Nothing is carried in from outside the years. */
  function renderCycleCats(era){
    var host = byId("cycle-cats"); if (!host) return;
    var from = era.from, to = era.to || calendarTodayY;
    host.innerHTML = readingRoster().map(function(g){
      var rows = g.rows.map(function(r){
        // the period key always opens with its year, whatever shape it is: "2007-10", "2007 Q4", "2007"
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
        /* Version 615: the SHAPE, in the row. Taking the two charts off this view (see renderCycleView) left
           it able to say where a reading finished and how far it ran, and not how it got there — which is the
           part Keren is still turning over ("I'm still thinking how can we see the past data"). A sparkline
           answers it inside the row she already has, with no page to open and no component to invent:
           `sparkHtml` has drawn exactly this on peek cards since Version 253, and `.ci-mini` is the slot a
           member's small picture has always gone in.
           It is drawn in the accent rather than in a state colour, because `.ci-mini` already neutralises
           every other mini it holds — a closed cycle is not being graded, it is being read. */
        var art = span.length >= 3
          ? '<div class="ci-mini">' + sparkHtml(vs, "") + '</div>' : "";
        // A cycle in which a reading never moved has no range to state, and "5.2 to 5.2" is furniture.
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

  /* ---------------- THE ROSTER AS SERIES (Version 613) ----------------
     The thirteen readings, in the app’s own four categories, each as one {k,v} list keyed by the period it
     was measured in. Version 612 built this inside Rhymes; Version 613 needs the same thirteen rows for a past
     cycle’s categories, and two copies of a list like this is how two components quietly start disagreeing
     about what the roster is. So it is lifted whole — Version 314, move rather than rebuild — and memoised,
     because turning eight hundred months of federal funds into places in a record is work worth doing once.
     Built LAZILY on first call rather than at load, because capeHistory’s last point is carried to today by
     renderPagesAndNav and a roster built before that would hold January where every page shows September. */
  var __roster = null;
  function readingRoster(){
    if (__roster) return __roster;
    // Every series in this app is one of three shapes. Five makers turn all of them into the same list, so a
    // row is a line and nothing downstream has to know which shape it came from.
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
    /* One pass per row. `place` is where a value sits in the whole of its own record, which is the only
       comparison that means the same thing on thirteen rows measured in six different units; `now` is the last
       reading, which every peak is measured against. */
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
  /* A reading printed the way its own page prints it. Lives beside the roster because both components print
     from it, and a figure formatted two ways is a figure that can disagree with itself.
     The sign is decided AFTER rounding, which is the whole of this function’s care. December 2008 CPI is a
     hair under nought, and `(-0.02).toFixed(1)` is "-0.0" — a minus sign in front of a zero, which says the
     reading was negative while the digits say it was not. A value that rounds to nought prints without a sign,
     on a signed row and an unsigned one alike, and a negative one wears the real minus every other figure in
     this app wears. */
  function readFig(r, v){
    var a = Math.abs(v).toFixed(r.dp);
    var sign = +a === 0 ? "" : v < 0 ? "\u2212" : r.signed ? "+" : "";
    return sign + a + (r.unit ? '<span class="unit">' + r.unit + '</span>' : "");
  }
  /* A period key said the way the rest of the app says one. The keys are exact by design — "2008-12",
     "2008 Q4" — and Rhymes prints them raw, in mono, because there they are provenance under a figure. Here
     the slot is `.ci-when`, which on the Cycle tab has always read "Aug 2026", so the key is spelled out. */
  function prettyK(r, k){
    if (r.pre) return r.pre + k;
    if (/^\d{4}-\d{2}$/.test(k)) return MONTHS_SHORT[+k.slice(5) - 1] + " " + k.slice(0, 4);
    if (/^\d{4} Q[1-4]$/.test(k)) return k.slice(5) + " " + k.slice(0, 4);
    return k;
  }

  /* ---------------- RENDER: Rhymes — today beside a past top (Version 610, rebuilt in Version 612) ----------
     Keren, Sep 28, 2026: "history doesn't repeat, but it rhymes. I want the app to help me see how history
     repeats itself." Then, on the first pair of columns: "Schiller Cape peak was 43.8 in the dot com peak, and
     now we are in with 41.3. I think this is the good comparison."

     VERSION 611 SHIPPED THAT COMPARISON TWICE, once as figures here and once as a grid of dots called Echoes,
     and she read the dots and could not check them: a mark saying two readings are alike, with neither reading
     on the screen, asks to be believed. The dots are gone and the idea they carried is now a mark on a row
     that HAS both numbers on it, so "alike" is always something the reader can verify by eye. One card.

     THE PAIR RULE. Both columns come out of the SAME series, so "at the peak" and "now" are one gauge read
     twice (Version 294), and each figure carries the period it was taken in beneath it — which is how the
     reader can see the CAPE column reads January 2000 and not the March the market turned in.
     A series that does not reach the top leaves an em dash and says from when it IS measured. Nothing is
     interpolated: the record either covers the date or it does not.

     WHAT THE MARK MEANS. A reading is turned into its place in its OWN record — today's CAPE sits above 96% of
     that record — and the row is marked when the peak's place and today's are within five points of each
     other. A place carries no units, so one rule works on all thirteen rows: five per cent of the federal
     funds rate and five per cent of a spread that lives near nought are not comparable quantities. A rank also
     survives an outlier, where a share of the range does not — 1981's 19% would otherwise set the width of the
     federal funds band for ever.
     There is no count of marks and no score. Thirteen rows agreeing is not a prediction, and a number claiming
     it was would be invented.

     The rows are the roster in the order the four categories run, and the categories are labelled because
     thirteen rows without them is a list rather than a body. Like everything that reads capeHistory this runs
     after renderPagesAndNav, because Version 255 carries that series' last point to today. */
  function renderRhymes(){
    var pick = byId("rhy-pick"), body = byId("rhy-body");
    if (!pick || !body) return;
    var ALIKE = 5;                       // points of the record, out of a hundred
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
