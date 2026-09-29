  // ---------------- RENDER: range bars + card helpers ----------------
  function clampPct(v, lo, hi){ return Math.max(0, Math.min(100, ((v - lo) / (hi - lo)) * 100)); }

  // Progressive disclosure: a card shows its short, load-bearing sentence; the fuller explanation sits behind
  // an (i). Keren, V142: "make the info icons open in the new popup format as well" — the expand buttons' modal,
  // not a popover. Plain text gets a heading (the icon's label) and a facts list, like the other notes.
  function infoIcon(fullHtml, title){
    var html = /^\s*<h4/.test(fullHtml) ? fullHtml : '<h4>' + (title || "About this reading") + '</h4>' + factsFrom(fullHtml);
    return expandBtn(html).replace('class="expand-btn"', 'class="info-btn expand-btn"').replace('aria-label="Expand details"', 'aria-label="More detail"');
  }

  // Every indicator defaults to a minimal view (name, headline metric, at most one short line); detailTexts
  // holds each one's full markup, opened in one shared modal.
  var detailTexts = [];
  /* A CONTENT-ADDRESSED slot table: the key is the note's own HTML, so re-rendering a block neither grows
     `detailTexts` nor changes `data-detail-idx` — rendering twice gives the same DOM. Key and entry are one
     shared string, so no note is stored twice. A note whose text changes takes a new slot, so growth is bounded
     by distinct content. `headNoteIdx` and `hubDetailIdx` key their slots by hand (page id; allocated once). */
  var detailSlots = Object.create(null);
  function detailSlot(html){
    var key = String(html == null ? "" : html);
    var idx = detailSlots[key];
    if (idx === undefined){
      idx = detailTexts.length;
      detailTexts.push(key);
      detailSlots[key] = idx;
    }
    return idx;
  }
  // The two multi-reading panels, built once at init and placed by their page's renderer.
  var powerPanelHtml = "", valuationPanelHtml = "";
  /* Growth's and Households' rows, built on first use and kept, for the same reason. Functions rather than
     vars because they call `panelRow`, which is declared after their meters. */
  var _growthPanel = null, _householdsPanel = null;
  function growthPanelHtml(){
    return _growthPanel || (_growthPanel = panelRow({
      name:"Real GDP growth", info:growthInfoHtml(), head:"sheet-metric-gdp",
      metric:gdpMeter.value.toFixed(1) + "%",
      flagged:meterFlagged(gdpMeter), bar:panelFromMeter(gdpMeter) }));
  }
  function householdsPanelHtml(){
    return _householdsPanel || (_householdsPanel =
      panelRow({ name:"Debt service", info:dsrInfoHtml(), head:"sheet-metric-households",
                 metric:dsrNow.toFixed(1) + "%",
                 flagged:meterFlagged(dsrMeter), bar:panelFromMeter(dsrMeter) }) +
      panelRow({ name:"Saving rate", info:savInfoHtml(), metric:savNow.toFixed(1) + "%",
                 flagged:meterFlagged(savMeter), bar:panelFromMeter(savMeter) }));
  }
  // Every (i) reads the same way — Keren, V227: "bullet points, only the central information, one clean swoop":
  // a lede line, then facts, one per line. facts() takes them written; factsFrom() splits a written note into its own
  // sentences, for the marker notes, whose figures and dates are better left in their own words than paraphrased.
  function facts(list){ return '<ul class="facts">' + list.map(function(f){ return "<li>" + f + "</li>"; }).join("") + '</ul>'; }
  function factsFrom(text){
    var parts = String(text).replace(/\s+/g, " ").trim().split(/(?<=[.!?])\s+(?=[A-Z(“"'"'"'])/);
    return facts(parts.filter(function(x){ return x.trim(); }));
  }
  function expandBtn(fullHtml){
    return '<button type="button" class="expand-btn" data-detail-idx="' + detailSlot(fullHtml) +
           '" aria-label="Expand details">i</button>';
  }
  // The modal holds one note, opened by an (i), closed and forgotten. Metric pages are not in it — see openMetricPage.
  var sheetRenderers = {};
  // Which mode each page's history is in. Cycles is the default, as Keren asked: every history opens on the
  // cycle the front page is showing, because a reading opened from Current cycle should be about that cycle.
  // "*-range" keys are not sheets — they are a block's own zoom (see pageRange).
  var pageMode = { "sheet-metric-temp":"cycles", "sheet-metric-gdp":"cycles",
                   "sheet-metric-power":"cycles", "sheet-metric-valuation":"cycles",
                   "volume-range":"cycles", "pulse-range":"cycles",
                   "deficit-range":"cycles", "hzn-range":"cycles", "fear-range":"cycles", "hormones-range":"cycles", "pressure-range":"cycles",
                   "sheet-metric-households":"cycles", "sheet-sign-activity":"cycles" };
  // Which cycle each history shows in Cycles mode, by name, as the cycle picker sets it.
  var pageCycles = { "sheet-metric-temp":null, "sheet-metric-gdp":null,
                     "sheet-metric-power":null, "sheet-metric-valuation":null,
                     "volume-range":null, "pulse-range":null,
                     "deficit-range":null, "hzn-range":null, "fear-range":null, "hormones-range":null, "pressure-range":null,
                     "sheet-metric-households":null, "sheet-sign-activity":null };   // null = the open cycle
  // Which stop each page's Years mode is showing. A key here and in sheetRenderers is all the delegated
  // .range-seg handler needs, so no page needs its own control idiom or listener. Keren, V368: "make the
  // default marker 10 years" — the same start on every page; ten holds a cycle and a shock, and Max is one tap
  // away. Desire opens on Max: its series is three years deep (see drawDesireRecord).
  var pageRange = { "sheet-metric-power":"10y", "sheet-metric-valuation":"10y",
                    "sheet-metric-gdp":"10y", "sheet-metric-temp":"10y",
                    "deficit-range":"10y", "volume-range":"10y", "pulse-range":"10y",
                    "hzn-range":"10y", "desire-range":"max", "fear-range":"10y", "hormones-range":"10y", "pressure-range":"10y",
                    "sheet-metric-households":"10y",
                    "sheet-sign-activity":"10y" };
  function wireDetailModal(){
    var backdrop = byId('detail-backdrop');
    var body = byId('detail-modal-body');
    function openFrom(idx, btn){
      body.innerHTML = detailTexts[idx];
      // The reading's timing chip comes with the note — a copy, so the page keeps the original and a second
      // opening finds it again.
      var sheet = btn && btn.closest && btn.closest(".metric-sheet");
      var chip = sheet && sheet.querySelector(".timing-row");
      if (chip) body.appendChild(chip.cloneNode(true));
      backdrop.classList.add('show');
    }

    function close(){ backdrop.classList.remove('show'); body.innerHTML = ""; }
    document.addEventListener('click', function(e){
      // .bh-opt is the head's ⋯ menu row. It opens exactly what an (i) opens, by the same index, so a note is
      // never written a second time for the menu.
      var btn = e.target.closest && e.target.closest('.expand-btn, .details-link, .more-row, .bh-opt');
      if (btn){ if (btn.closest('summary')) e.preventDefault(); // an (i) on a drawer's own row opens the modal, not the drawer
        openFrom(btn.getAttribute('data-detail-idx'), btn); e.stopPropagation(); return; }
      if (e.target === backdrop) close();
    });
    byId('detail-modal-close').addEventListener('click', close);
    document.addEventListener('click', function(e){
      var chip = e.target.closest && e.target.closest('.timing[data-ind-tab]'); if (!chip) return;
      e.preventDefault(); e.stopPropagation();
      close();
      if (openIndicatorsPage) openIndicatorsPage(chip.getAttribute('data-ind-tab'));
    });
    document.addEventListener('keydown', function(e){ if (e.key === 'Escape') close(); });
  }
  GYN.step("wireDetailModal", wireDetailModal, "wire"); wireDetailModal();


  // ---------------- RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab) ----------------
  byId("asof-text").textContent = "Data compiled " + dataCompiledLabel; // the disclaimer beside it says it is a snapshot, not a feed


  // A "lab result" bar: plain track, a solid "optimal" zone, one dot at today's value (flagged outside the
  // band). Historical low/high set the bar's min/max, so the dot is honest against real extremes; no ticks or
  // pointer labels, because the value is already printed big above it.
  // m.optimal is one of: {from, to, label} | {gte, label} | {lte, label} — from/to/gte/lte are plain numbers
  // used for positioning + the flagged check; label is the pre-formatted display string (units vary by metric).
  function meterHtml(m){
    var pct = clampPct(m.value, m.min, m.max);
    var o = m.optimal, ends = m.ends || {}, flagged = false, zoneHtml = '', labelsHtml = ''; // `ends` renames a bar's end words, in every branch
    if (o){
      if (o.from != null && o.to != null){
        var l = clampPct(o.from, m.min, m.max), r = clampPct(o.to, m.min, m.max);
        zoneHtml = '<div class="rbar-optimal" style="left:' + l.toFixed(1) + '%; width:' + (r - l).toFixed(1) + '%"></div>';
        flagged = m.value < o.from || m.value > o.to;
        labelsHtml = '<div class="rbar-labels three"><span>' + (ends.low || "Low") + '</span><span class="mid">' + (ends.zone || "Optimal") + ' ' + o.label + '</span><span>' + (ends.high || "High") + '</span></div>';
      } else if (o.gte != null){
        var l2 = clampPct(o.gte, m.min, m.max);
        zoneHtml = '<div class="rbar-optimal" style="left:' + l2.toFixed(1) + '%; width:' + (100 - l2).toFixed(1) + '%"></div>';
        flagged = m.value < o.gte;
        labelsHtml = '<div class="rbar-labels two"><span>' + (ends.low || "Low") + '</span><span>' + (ends.zone || "Optimal") + ' ' + o.label + '</span></div>';
      } else if (o.lte != null){
        var r2 = clampPct(o.lte, m.min, m.max);
        zoneHtml = '<div class="rbar-optimal" style="left:0%; width:' + r2.toFixed(1) + '%"></div>';
        flagged = m.value > o.lte;
        labelsHtml = '<div class="rbar-labels two"><span>' + (ends.zone || "Optimal") + ' ' + o.label + '</span><span>' + (ends.high || "High") + '</span></div>';
      }
    }
    var dotHtml = '<div class="rbar-dot' + (flagged ? ' flagged' : '') + '" style="left:' + pct.toFixed(1) + '%"></div>';
    return labelsHtml + '<div class="rbar-track">' + zoneHtml + dotHtml + '</div>';
  }
  /* The source-list block: the wrapper is the component and srcHtml is its inside, so no caller types out
     `<div class="src">` itself. */
  function srcBlock(list){ return '<div class="src">' + srcHtml(list) + '</div>'; }
  /* ---------------- THE SUBJECT ROW ----------------
     Keren, V631: "make it a 10." The one row the app opens pages from (category list, roster, Browse, the
     All-indicators door), built here once. The caller passes what differs (ring, text); the door, role, title
     and chevron are nobody's to respell. Attribute order is the order the element sites used to set them in,
     so the serialized DOM is unchanged. */
  function subjectRow(o){
    return '<div class="subject sign-row' + (o.cls ? ' ' + o.cls : '') + '"' +
      (o.subject ? ' data-subject="' + o.subject + '"' : '') +
      ' role="button" tabindex="0" data-open="' + o.open + '" data-title="' + o.title + '">' +
      '<div class="subject-summary">' +
        '<div class="subject-ring">' + (o.icon || '') + '</div>' +
        '<div class="subject-text">' + o.text + '</div>' +
        '<div class="subject-more"><span class="subject-chev" aria-hidden="true"></span></div>' +
      '</div></div>';
  }
  /* The disc a row's ring holds when it is drawn from a mark and a state. The roster hands `subjectRow` a disc
     it already lifted off the page (`discOf`), so this is only for rows built from data. */
  function subjectIcon(state, svg){ return '<div class="subject-icon"><span class="' + state + '">' + svg + '</span></div>'; }
  function srcHtml(list){ return list.map(function(s){ return '<a href="' + s.u + '" target="_blank" rel="noopener">' + s.t + '</a>'; }).join(" · "); }
  // A READING ON A RING — Keren, V280: "I want the VIX and the high-yield spread to have a ring representation …".
  // Both scales are skewed (records five and eight times their usual home), so a ring FILLED from zero would say
  // nothing; the disc's POSITION on the track, with the usual band behind it, carries the reading.
  // Where a sign sits relative to the turn of the cycle. Kept beside the signs rather than in a section heading,
  // because it is a property of the sign and travels with it onto its page.
  var TIMING = {
    leading:    { label:"Leading",    hint:"moves before the cycle turns" },
    coincident: { label:"Coincident", hint:"turns with the cycle" },
    lagging:    { label:"Lagging",    hint:"confirms a turn after it has happened" },
    structural: { label:"Structural", hint:"the slow ground a cycle moves on" }
  };
  function timingMark(kind){
    var cx = kind === "lagging" ? 4.4 : kind === "leading" ? 15.6 : 10;
    return '<svg viewBox="0 0 20 12" aria-hidden="true">' +
      '<path class="tm-line" d="M2.6,6 H17.4"/><path class="tm-now" d="M10,2 V10"/>' +
      (kind === "structural" ? '<path class="tm-span" d="M4.4,6 H15.6"/>'
                             : '<circle class="tm-dot" cx="' + cx + '" cy="6" r="2.7"/>') +
      '</svg>';
  }
  // Keren, V271: "I don't need the text beside it — but what I would want is to click on it and see all the
  // metrics by indicator type." The chip is a door, not a caption: it opens the page grouping the readings by
  // timing, which is where the word is explained.
  function timingPill(kind){
    var t = TIMING[kind]; if (!t) return "";
    return '<div class="timing-row">' +
      '<button type="button" class="timing ' + kind + '" data-ind-tab="' + kind + '" ' +
        'aria-label="Show the ' + t.label.toLowerCase() + ' readings">' +
        timingMark(kind) + '<b>' + t.label + '</b>' + CHEV +
      '</button></div>';
  }

  // A container with nothing to show takes no room — Keren, V383: "between average growth and highlights I think
  // there's 20 pixels, even more, maybe 30". Measure, because a CLOSED <details> with a display:none summary has
  // text but zero height and no :empty selector sees it. Run AFTER the sheet is on screen: hidden, every child
  // reports zero (which is why seatPageFoot, at the top of openMetricPage, cannot do it).
  // seatPageFoot — Keren, V298: "make it so the timing indicator would be at the bottom, next to More details."
  // Every inner page has exactly one chip and at most one More details row, which makes a blind move safe; pages
  // with no chip (the timing class pages) are skipped. Idempotent: it runs at build time AND on open.
  function collapseEmptyBlocks(sheet){
    if (!sheet || sheet.hidden || !sheet.offsetHeight) return;
    [].forEach.call(sheet.children, function(kid){
      if (kid.classList.contains("page-foot")) return;
      if (!kid.offsetHeight) kid.style.display = "none";
      else if (kid.style.display === "none") kid.style.display = "";
    });
  }
  function seatPageFoot(sheet){
    if (!sheet) return;
    var chip = sheet.querySelector(".timing-row"); if (!chip) return;
    var foot = sheet.querySelector(".page-foot");
    if (!foot){ foot = document.createElement("div"); foot.className = "page-foot"; sheet.appendChild(foot); }
    // not "already done?" but "is each piece where it belongs?" — the metric pages build their Highlights (and
    // More details row) AFTER the first pass, so the second pass must collect a latecomer.
    if (chip.parentNode !== foot) foot.appendChild(chip);
    // Keren, V426: "put the More details button inside the highlights container." The foot is only the
    // fallback for a page with no Highlights box.
    var more = sheet.querySelector(".more-row"), hl = sheet.querySelector(".highlights");
    var home = hl || foot;
    if (more && more.parentNode !== home) home.appendChild(more);
    if (sheet.lastElementChild !== foot) sheet.appendChild(foot);
  }

  // Each page registers itself with its class as it is built, so the class pages are assembled from the same
  // objects the signs are, and cannot drift out of step with them.
  var timingMembers = { leading:[], coincident:[], lagging:[], structural:[] };
  function registerTiming(kind, entry){ if (timingMembers[kind]) timingMembers[kind].push(entry); }

  // The head's mark is an icon beside the name, as Keren asked, not a button: the record is on the page, so the
  // mark has nothing to open. Every sign page that has a mark shows it.
  function headHtml(ind, noMark){
    var mk = "";
    if (signMarks[ind.bodyTerm] && !noMark){
      mk = '<span class="head-mark" aria-hidden="true"><span class="head-mark-disc">' +
        signMarks[ind.bodyTerm]() + '</span></span>';
    }
    return '<div class="card-head">' + mk + '<div class="card-titles"><span class="body-term">' + ind.bodyTerm + '</span><span class="econ-term">' + ind.econTerm + '</span></div><span class="tag ' + ind.tag.state + '">' + ind.tag.text + '</span></div>';
  }
  // Full detail for a card indicator — what the minimal card leaves out. A page carries the things only it can say. `lead` is the note cut to what prose is FOR here — the metaphor,
  // which is the book — with every figure lifted out into `facts`, where it can be found at a glance (Keren, V270:
  // "either you put it in bullet points or make it minimal as much as possible, because nobody will read so much
  // text"). An indicator without a `lead` still reads its caption, so they can be converted one at a time. No
  // source list on the page: the Sources screen lists every figure's primary source by section (Keren, V270: "we
  // can put this in sources, we don't need it for every page"). `opts` lets a page drop what it says for itself.
  var heldHighlights = "";   // a deferred Highlights block, claimed by the caller that places it
  function cardDetailHtml(ind, opts){
    opts = opts || {};
    var facts = [].concat(ind.facts || [], ind.aux || []);
    // `bare` drops the whole top (Temperature, whose chart says all three things); `noHead` drops only the name
    // row and the figure and keeps the spectrum — for a page whose FIRST CONTAINER carries the title and states
    // the figure itself, as Pulse does (Keren, V305: "put the title inside the first container as a title,
    // remove 1.42× and the heart icon"), so the figure is not on screen twice.
    // `chartFirst`: history, then the blood test (Keren, V384, on Pulse: "I want the history container to be
    // first — and the blood test component needs to be below the history container.").
    var chartHtml = opts.chart || '';
    // `noMeter` drops the bar alone and keeps the head and the figure, for a page whose history container has
    // taken the bar in — where leaving it here would be one reading twice, on two scales.
    var bloodTest = opts.bare ? '' :
      ((opts.noHead ? '' : headHtml(ind, opts.noMark) +
        '<div class="metric-row"><span class="metric mono">' + ind.metric + '</span><span class="metric-sub">' + ind.metricSub + '</span></div>') +
      (opts.noMeter ? '' : meterHtml(ind.meter)));
    // Keren, V390, of Volume: "the blood test component should be below the history chart, and it should have a
    // white container just like in the power page." An OPTION, not part of the component: on the metric pages the
    // spectrum is already inside a card (the markers table) and would otherwise sit in two boxes.
    if (bloodTest && opts.bloodCard) bloodTest = '<div class="page-chart blood-card">' + bloodTest + '</div>';
    return (opts.chartFirst ? chartHtml + bloodTest : bloodTest + chartHtml) +
      // An indicator may say NOTHING here by setting shortCaption to "": the chain tests for null, not falsy,
    // so an empty short line does not promote the long caption onto the page.
    // Keren, V384, of Pulse's line and its COVID-era-low row: "no, no, no — I think this belongs to insights."
    // For every sign, a short verdict and its figures are commentary, so they go in Highlights: history, blood
    // test, Highlights, More details.
    (function(){
      var lede = ind.lead != null ? ind.lead : (ind.shortCaption != null ? ind.shortCaption : (ind.caption || ""));
      var figs = facts.map(function(a){
        return '<div class="aux-stat' + (a.wordy ? " wordy" : "") + '"><span>' + a.label + '</span><b>' + a.value + '</b></div>';
      }).join("");
      if (!lede && !figs) return "";
      var block = '<section class="highlights"><div class="hi-head">Highlights</div>' +
        (lede ? '<div class="hi-card"><p>' + lede + '</p></div>' : "") + figs + '</section>';
      // A page whose last container is appended AFTER this card (Desire's risk matrix) holds its Highlights back,
      // so the page order still ends history → blood test → Highlights → More details.
      if (opts.deferHighlights){ heldHighlights = block; return ""; }
      return block;
    })() +
      // the long form, offered rather than asserted — and only where there IS a longer form than the line above
      (function(){
        if (opts.bare) return "";
        var rest = dropWhatIsShown(ind.caption, ind.lead || ind.shortCaption || "");
        return rest ? moreRow('<h4>' + ind.bodyTerm + '</h4><div class="marker-sub">' + ind.econTerm + '</div>' + factsFrom(rest)) : "";
      })();
  }


  // ---------------- RENDER: Pressure — U.S. Treasury yields, one maturity at a time ----------------
  /* The Treasury levels belong to Pressure, where Keren put them: the 10-year is the risk-free loan the whole
     economy prices off, and its level is the pressure the borrower is under. See the PRESSURE comment in
     page-body.html for her words. */
  /* Keren, V644: "… I want to see the latest data and not the quarterly data." The column for the quarter still
     running is the LATEST CLOSE from the par curve the row prints, labelled with its date (a new last column if
     the history has not reached that quarter). The quarterly arrays are not touched: Horizon and the rhymes table
     read them as averages. */
  var CURVE_KEY = { "3m":"3M", "2y":"2Y", "5y":"5Y", "10y":"10Y", "30y":"30Y" };
  function latestYieldPoint(){
    var iso = curveAsOf(), mm = /^(\d{4})-(\d{2})-\d{2}$/.exec(iso);
    var at = function(k){ var h = yieldCurve.filter(function(d){ return d.m === k; })[0]; return h && h.y != null ? h.y : null; };
    var v = {}, all = !!mm;
    Object.keys(CURVE_KEY).forEach(function(c){ v[c] = at(CURVE_KEY[c]); if (v[c] == null) all = false; });
    if (!all) return null;   // all five or none, so the maturities' columns stay aligned
    return { q:mm[1] + " Q" + Math.ceil(Number(mm[2]) / 3), label:fmtAsOf(iso), v:v, spread:at("10Y") - at("3M") };
  }
  function withLatestPoint(base, pt){
    var data = base.slice(), last = data[data.length - 1];
    if (pt && last.q === pt.q) data[data.length - 1] = pt; else if (pt && pt.q > last.q) data.push(pt);
    return data;
  }
  function renderPressurePage(){
    var svg = byId("ylm-svg");
    // A seed only: render recomputes these from the host's own width, so the chart is drawn at its real size.
    var W = 780, H = 260, padL = AXIS.L, padR = AXIS.R, padT = AXIS.T + AXIS.LEG + AXIS.READ, padB = 30;   // +LEG: the legend strip at the head of the frame, as every other history has
    var innerW = W - padL - padR, innerH = H - padT - padB;
    var el = svgEl;

    var quarters = t3mYieldHistory.map(function(d){ return d.q; });

    var maturities = [
      {code:"3m", name:"3-Month", data: t3mYieldHistory, on:true,
        detail: '<h4>3-Month Treasury</h4>' +
          '<p class="caption">This tracks the Federal Reserve\'s own overnight policy rate almost directly — when the Fed raises or cuts, this yield moves within days. It\'s the reference rate behind savings accounts, CDs, money-market funds, and most variable-rate consumer debt like credit cards and many lines of credit. Quarterly average of the discount-basis TB3MS series, which reads a touch below the investment-basis short yield shown on the curve above — a real definitional gap, not an inconsistency.</p>' +
          srcBlock([{t:"FRED — 3-Month Treasury Bill Rate (TB3MS)", u:"https://fred.stlouisfed.org/series/TB3MS"}])},
      {code:"2y", name:"2-Year", data: t2yYieldHistory, on:true,
        detail: '<h4>2-Year Treasury</h4>' +
          '<p class="caption">Reflects the market\'s own forecast of where the Fed\'s policy rate will average over the next couple of years — it often moves before the Fed actually acts, on rate-cut or rate-hike expectations. It\'s the closest single number to "what markets think the Fed will do next." Auto loans and shorter-duration corporate borrowing tend to price off this end of the curve.</p>' +
          srcBlock([{t:"FRED — 2-Year Treasury Rate (GS2)", u:"https://fred.stlouisfed.org/series/GS2"}])},
      {code:"5y", name:"5-Year", data: t5yYieldHistory, on:true,
        detail: '<h4>5-Year Treasury</h4>' +
          '<p class="caption">Sits in the middle of the curve, blending near-term Fed-policy expectations with a longer view on growth and inflation. It\'s the benchmark for medium-duration borrowing — 5-year adjustable-rate mortgages, mid-length corporate bonds, and many business loans.</p>' +
          srcBlock([{t:"FRED — 5-Year Treasury Rate (GS5)", u:"https://fred.stlouisfed.org/series/GS5"}])},
      {code:"10y", name:"10-Year", data: t10yYieldHistory, on:true,
        detail: '<h4>10-Year Treasury</h4>' +
          '<p class="caption">The single most-referenced benchmark in the credit market. A 30-year fixed mortgage sounds like a 30-year commitment, but between moves and refinances its real average lifespan runs closer to 7–10 years — which is why mortgage rates track this maturity rather than the 30-year bond. Most investment-grade corporate bonds are also quoted as this yield plus a spread, and it\'s the standard discount-rate proxy used in stock valuation.</p>' +
          srcBlock([{t:"FRED — 10-Year Treasury Rate (GS10)", u:"https://fred.stlouisfed.org/series/GS10"}])},
      {code:"30y", name:"30-Year", data: t30yYieldHistory, on:true,
        detail: '<h4>30-Year Treasury</h4>' +
          '<p class="caption">Reflects the compensation investors demand for the genuine uncertainty of the longest possible horizon — economists call this the term premium. It anchors the longest corporate and government bonds. The line has a real gap in 2005: the Treasury stopped issuing 30-year bonds between October 2001 and February 2006, so there is no actual traded yield for that stretch — shown here as a break rather than a guessed figure.</p>' +
          srcBlock([{t:"FRED — 30-Year Treasury Rate (GS30)", u:"https://fred.stlouisfed.org/series/GS30"}])}
    ];
    var latestLabel = "", latestSpread = null;   // see latestYieldPoint above
    maturities.forEach(function(m){ m.base = m.data; });
    function withLatest(){
      var L = latestYieldPoint();
      latestLabel = L ? L.label : ""; latestSpread = L ? L.spread : null;
      maturities.forEach(function(m){ m.data = withLatestPoint(m.base, L && { q:L.q, v:L.v[m.code], latest:true }); });
      quarters = maturities[0].data.map(function(d){ return d.q; });
    }
    function colLabel(i){ var d = maturities[0].data[i]; return d && d.latest ? latestLabel : quarters[i]; }

    addSources([
      {t:"FRED — 5-Year Treasury Rate (GS5)", u:"https://fred.stlouisfed.org/series/GS5"},
      {t:"FRED — 30-Year Treasury Rate (GS30)", u:"https://fred.stlouisfed.org/series/GS30"}
    ]);

    // The chart carries a window, like every other inner-page history (Keren, V394: "have the configuration of
    // all the rest of the inner pages history — so a year bar at the top"). `ylmFrom` is the first visible
    // quarter and every geometry function reads it, so nothing below needs to know a window exists.
    var ylmFrom = 0, ylmTo = quarters.length;   // half-open, so a cycle can close it
    function ylmCount(){ return ylmTo - ylmFrom; }
    function x(i){
      var half = innerW / (2 * Math.max(1, ylmCount()));   // keep the end columns inside the plot
      return padL + half + ((innerW - 2 * half) * (i - ylmFrom)) / ((ylmCount() - 1) || 1);
    }
    var minV, maxV;
    function computeScale(){
      var vals = [];
      maturities.forEach(function(m){
        if (!m.on) return;
        m.data.forEach(function(d, i){ if (i >= ylmFrom && i < ylmTo && d.v != null) vals.push(d.v); });
      });
      if (!vals.length) vals = [0, 6];
      // columns rise from a baseline, so the baseline has to BE zero — a scale that starts at 3% would draw a
      // 3.1% yield as a stub and a 4% yield as a tower, which is a five-fold lie about a thirty-per-cent gap.
      minV = 0;
      maxV = Math.ceil(Math.max.apply(null, vals) / 1) * 1;
      if (maxV <= minV) maxV = minV + 1;
    }
    function y(v){ return padT + innerH - ((v - minV) / (maxV - minV)) * innerH; }

    var tooltip = byId("ylm-tooltip");
    var onMaturities; // the toggle-invariant part of showAt()'s filter, recomputed once per render() not per hover frame

    function render(){
      /* Measure first: a fixed viewBox scaled to a phone would shrink the chart and its labels, and a chart is
         drawn at its box's real width. The height formula is the one the other histories share. */
      var shell = svg.parentNode;
      W = Math.max(270, Math.round((shell && shell.clientWidth) || 360));
      H = W < 430 ? 268 : 300;
      innerW = W - padL - padR; innerH = H - padT - padB;
      svg.setAttribute("viewBox", "0 0 " + W + " " + H);
      computeScale();
      onMaturities = maturities.filter(function(m){ return m.on; });
      svg.innerHTML = "";

      // The shared axis emitter, via insertAdjacentHTML (this chart builds nodes). Steps divide the span evenly:
      // the scale runs 0 to whatever the maturity reached, and round stops would leave the top unlabelled.
      var steps = maxV - minV <= 6 ? (maxV - minV) : 6, ylmTicks = [];
      for (var s = 0; s <= steps; s++) ylmTicks.push(minV + ((maxV - minV) * s) / steps);
      svg.insertAdjacentHTML("beforeend", chartAxes({ ticks:ylmTicks, y:y, x0:padL, x1:(W - padR), top:(padT - AXIS.LEG - AXIS.READ), bot:(H - padB),
        base:y(0), noGridAt:0, fmt:function(v){ return v.toFixed(0) + "%"; } }));
      // The shared hover (attachHistory); the geometry published is the first and last VISIBLE column.
      svg.classList.add("hist-svg");
      svg.insertAdjacentHTML("beforeend",
        crossLine(padT, (H - padB)));
      var picked = matOf(matPick);
      publishGeom("ylm", { L:x(ylmFrom), R:x(ylmTo - 1), T:padT, B:(H - padB), W:W,
                       /* the last column is the latest close, and its plate says the day (see withLatest) */
                       n:ylmCount(), at:function(d, i){ return colLabel(ylmFrom + i); },
                       fmt:function(v){ return v.toFixed(2) + "%"; },
                       /* the zone key, in the legend where every history keeps its key */
                       refs:[{ label:"Inverted", swatch:"var(--critical)" },
                             { label:"Normal",   swatch:"var(--season-autumn)" },
                             { label:"Steep",    swatch:"var(--good)" }],
                       vals:(picked ? picked.data.slice(ylmFrom, ylmTo).map(function(d){
                              return d.v == null ? null : { v:d.v }; }) : []) });

      // Year labels are derived from the window: about four evenly spaced Q1s inside whatever is on screen.
      var firstYear = parseInt(quarters[ylmFrom].slice(0, 4), 10);
      var lastYear = parseInt(quarters[ylmTo - 1].slice(0, 4), 10);
      var step = Math.max(1, Math.round((lastYear - firstYear) / 4));
      var xLabelYears = [];
      for (var yv = firstYear + (ylmFrom ? step : 0); yv <= lastYear; yv += step) xLabelYears.push(yv);
      quarters.forEach(function(q, i){
        if (i < ylmFrom || i >= ylmTo) return;
        var m = q.match(/^(\d{4}) Q1$/);
        if (m && xLabelYears.indexOf(parseInt(m[1],10)) !== -1){
          svg.insertBefore(el("path", { class:"bt-vgrid",
            d:"M" + x(i).toFixed(1) + "," + padT + "L" + x(i).toFixed(1) + "," + (H - padB) }), svg.firstChild);
          var xl = el("text", {x:x(i), y:H - AXIS.FOOT, class:"bt-xl", "text-anchor":"middle"});
          xl.textContent = m[1];
          svg.appendChild(xl);
        }
      });

      // ---- The picked maturity is drawn as COLUMNS (Keren, V394 — see ylmFrom), shaded by the 10-year-minus-
      // 3-month spread through `pressureZone()`, the SAME function the preview card's zone bar calls, so the
      // inversions of 2006–07, 2019 and 2022–24 show red without a word of explanation.
      var spreadAt = {};
      t10y3mHistory.forEach(function(d){ spreadAt[d.q] = d.v; });
      var lastCol = maturities[0].data[quarters.length - 1];
      if (lastCol && lastCol.latest && latestSpread != null) spreadAt[lastCol.q] = latestSpread;   // that day's curve
      var colW = colWidth(innerW / Math.max(1, ylmCount()));
      maturities.forEach(function(mat){
        if (!mat.on) return;
        var y0 = y(0);
        mat.data.forEach(function(d, i){
          if (i < ylmFrom || i >= ylmTo || d.v == null) return;
          var sp = spreadAt[quarters[i]];
          // a quarter with no spread behind it gets the neutral middle rather than a guessed verdict
          var zone = sp == null ? "normal" : pressureZone(sp).key;
          svg.appendChild(el("path", {
            class:"yl-col hcol " + zone, "stroke-width":colW.toFixed(2), "stroke-linecap":"butt",
            d:"M" + x(i).toFixed(2) + "," + y0.toFixed(2) + "V" + y(d.v).toFixed(2)
          }));
        });
      });

      // The fit across the quarters in view, for the maturity on screen; the string goes in as the axes did.
      var fitVals = [];
      maturities.forEach(function(m){
        if (!m.on) return;
        m.data.forEach(function(d, i){ if (i >= ylmFrom && i < ylmTo && d.v != null) fitVals.push(d.v); });
      });
      var ylmFit = trendOf(fitVals, "points", "quarter").fit;
      if (ylmFit && ylmFit.n > 1)
        svg.insertAdjacentHTML("beforeend", fitGroup(
          { fit:ylmFit, fmt:function(v){ return v.toFixed(2) + "%"; } },
          x(ylmFrom), x(ylmTo - 1), y, W, padL, padR));

      var crosshair = el("line", {x1:0, x2:0, y1:padT, y2:H - padB, class:"crosshair"});
      svg.appendChild(crosshair);
      var hit = el("rect", {x:padL, y:0, width:innerW, height:H, class:"hero-hit"});
      svg.appendChild(hit);

      function showAt(k){
        var i = k + ylmFrom;                 // the hit test counts VISIBLE columns; the data does not
        if (i >= quarters.length) return;
        var q = quarters[i];
        var px = x(i);
        crosshair.setAttribute("x1", px); crosshair.setAttribute("x2", px); crosshair.setAttribute("opacity", 1);
        var onMats = onMaturities.filter(function(m){ return m.data[i].v != null; });
        if (!onMats.length){ tooltip.style.opacity = 0; return; }
        var rows = onMats.map(function(m){
          var v = m.data[i].v;
          return '<div class="row"><span><span class="sw" style="background:var(--ylm-' + m.code + ')"></span>' + m.name + '</span><b>' + v.toFixed(2) + '%</b></div>';
        }).join("");
        var sp = spreadAt[q];
        var zn = sp == null ? null : pressureZone(sp);
        tooltip.innerHTML = "<b>" + colLabel(i) + "</b>" + rows +
          (zn ? '<div class="row"><span><span class="sw" style="background:var(--' +
                (zn.key === "inverted" ? "-critical" : zn.key === "normal" ? "-season-autumn" : "-good").slice(1) +
                ')"></span>Curve</span><b>' + zn.label + '</b></div>' : "");
        tooltip.style.left = (px / W * 100) + "%";
        var avgY = onMats.reduce(function(s, m){ return s + y(m.data[i].v); }, 0) / onMats.length;
        tooltip.style.top = (avgY / H * 100) + "%";
        tooltip.style.opacity = 1;
      }
      function hide(){ crosshair.setAttribute("opacity", 0); tooltip.style.opacity = 0; }
      var shell = byId("ylm-shell");
      attachHistory(shell, "ylm-tooltip", "ylm");
    }

    // ONE MATURITY AT A TIME (Keren, V293: "I don't understand anything from the chart and it's kind of distorted
    // … if I click on it I see the appropriate graph"): what has THIS maturity done.
    var matPick = "10y";   // the most-referenced benchmark opens the page
    // Today's reading comes from the live curve, NOT the quarterly history's last point, a three-month AVERAGE
    // that reads 0.2–0.9 points different. Keren, V294: "you write 10-year 4.94 and I see inside the container
    // 10-year 4.70" — a page cannot print two numbers for one thing.
    /* Keren, V470: "the maturity ladder needs to become a control." Choosing the line is one job, so it is one
       control, not five cards; the rates are what the chart plots. */
    var SERIES = maturities.map(function(m){ return { key:m.code, label:m.name.replace("-Month", "M").replace("-Year", "Y") }; });
    /* Keren, V588: "it would be very informative to see interest rates by cycles and years, similar to other
       history components in the app." A window ruler labelled 5Y beside a maturity labelled 5Y is a collision —
       loan length and look-back are both years — so, as for Horizon (Keren, V522: "… shouldn't be a new ruler —
       you can put it in the three dots"), the choice of SERIES lives in the head's ⋯ menu and the control ROW is
       the window, the Cycles / Years bar every history carries. */
    GYN.on("pickSeries", function(bar, code){
      matPick = code; maturities.forEach(function(m){ m.on = (m.code === matPick); });
      drawPressure();
    });
    // A record is drawn at its box's own width; a hidden element has none, so it happens on open.
    // Each measures its OWN host: these charts sit in a padded card and the handler passes the page's width.
    function drawVelocityRecord(){
      var host = byId("pulse-record");
      if (!host || !host.clientWidth) return;
      var key = pageRange["pulse-range"];
      var pulCycles = pageMode["pulse-range"] === "cycles";
      var pulCyc = pulCycles ? (cycleByName(pageCycles["pulse-range"]) || openCycle()) : null;
      var pulIdx = pulCyc ? cycleQtrIdx(M2V_FROM_YEAR, pulCyc, m2vHistory.length) : null;
      var bar = put("pulse-timeline", histControls("pulse-range",
        { depth:Math.floor(m2vHistory.length / 4), stops:PULSE_STOPS }));
      var vFrom = pulIdx ? pulIdx[0] : qWindowFrom(m2vHistory.length, key), vTo = pulIdx ? pulIdx[1] : undefined;
      host.innerHTML = velocityHistoryChart(host.clientWidth, vFrom, vTo);
      attachHistory(host, "pulse-hist-tooltip", "velocityHistoryChart");
      var vTrend = put("pulse-trend", trendPill(
        trendOf(m2vHistory.slice(vFrom, vTo), "points", "quarter"),
        // Keren, V431: "in the pulse page you write quickening — the correct word is accelerating, and the
        // opposite is decelerating." Pulse IS a velocity (M2 turned over per year), so acceleration is literal.
        null, true, { rising:"accelerating", falling:"decelerating" }));
    }
    sheetRenderers["sheet-sign-pulse"] = drawVelocityRecord;
    sheetRenderers["pulse-range"] = drawVelocityRecord;
    function drawM2Record(){
      var host = byId("m2-record");
      if (!host || !host.clientWidth) return;
      var len = m2Yoy.length - 4, key = pageRange["volume-range"];
      var volCycles = pageMode["volume-range"] === "cycles";
      var volCyc = volCycles ? (cycleByName(pageCycles["volume-range"]) || openCycle()) : null;
      var volIdx = volCyc ? cycleQtrIdx(M2_FROM_YEAR + 1, volCyc, len) : null;
      var bar = put("volume-timeline", histControls("volume-range",
        { depth:Math.floor(len / 4), stops:VOL_STOPS }));
      var mFrom = volIdx ? volIdx[0] : qWindowFrom(len, key), mTo = volIdx ? volIdx[1] : undefined;
      host.innerHTML = m2GrowthChart(host.clientWidth, mFrom, mTo);
      attachHistory(host, "m2-hist-tooltip", "m2GrowthChart");
      // the fit is over the quarters IN VIEW, so the pill and the picture can never describe different stretches
      var mTrend = put("volume-trend", trendPill(
        trendOf(m2Yoy.slice(4).slice(mFrom, mTo).filter(function(v){ return v != null; }), "points", "quarter"),
        // the same pair as Pulse (Keren, V431, in drawVelocityRecord)
        null, true, { rising:"accelerating", falling:"decelerating" }));
    }
    sheetRenderers["sheet-sign-volume"] = drawM2Record;
    sheetRenderers["volume-range"] = drawM2Record;
    /* Desire's record. The series is three years deep, so only the stops it can answer are offered (a stop needs
       that many years of data): 1Y and Max, from the one vocabulary in `TIMELINE_STOPS` — no page invents its
       own. Three years is short enough to read whole. */
    function drawDesireRecord(){
      var host = byId("desire-record");
      if (!host || !host.clientWidth) return;
      var from = hyWindowFrom(pageRange["desire-range"]);
      var win = hyOas.slice(from);
      var bar = byId("desire-timeline");
      // no mode bar: at three years "Current cycle" and "Max" are the same window, and two stops that mean the
      // same thing are worse than one. A bare range bar wears the same chrome.
      // the head is inside the band; this is the page's own bare range bar, on the ground
      if (bar) bar.innerHTML = '<div class="hist-controls">' +
        rangeBar("desire-range", timelineFor({ depth:3, stops:DESIRE_STOPS }),
                 pageRange["desire-range"]) + '</div>';
      host.innerHTML = desireHistoryChart(host.clientWidth, from);
      attachHistory(host, "desire-hist-tooltip", "desireHistoryChart");
      // widening and tightening are the credit market's own pair, and the only pair for a spread
      put("desire-trend", trendPill(trendOf(win, "points", "day"), null, true,
        { rising:"widening", falling:"tightening" }));
    }
    sheetRenderers["desire-range"] = drawDesireRecord;
    sheetRenderers["sheet-sign-desire"] = drawDesireRecord;
    (function(){
      var t; window.addEventListener("resize", function(){
        clearTimeout(t); t = setTimeout(function(){ drawVelocityRecord(); drawM2Record(); drawDesireRecord(); }, 150);
      });
    })();

    function matOf(code){ return maturities.filter(function(m){ return m.code === code; })[0]; }
    // No "since 2005" in the title: the bar states the window, and a heading that contradicts the control
    // directly beneath it is worse than one that says less.
    function matTitle(){ var m = matOf(matPick); return (m ? m.name : "") + " U.S. Treasury"; }
    function matDetail(){ var m = matOf(matPick); return m ? m.detail : ""; }

    // The year bar rides the pageRange + sheetRenderers mechanism (see pageRange). `timelineFor` decides which
    // stops the data can answer, so a chart offers 25Y the day its series is that deep with no edit.
    function drawYlm(){
      /* The window. Every maturity shares one index space — `quarters` is t3mYieldHistory's own quarters — so
         the slice is computed once here and every series is drawn through it. The stops are Horizon's for
         Horizon's reason: the series starts in 2005, and 25Y needs 25 years of data. */
      withLatest();
      var ylmY0 = parseInt(quarters[0].slice(0, 4), 10);
      var ylmCyc = pageMode["pressure-range"] === "cycles"
                 ? (cycleByName(pageCycles["pressure-range"]) || openCycle()) : null;
      if (ylmCyc && ylmCyc.from < ylmY0) ylmCyc = openCycle();
      var ylmSpan = ylmCyc ? cycleSlice(maturities[0].data, ylmCyc) : null;
      ylmFrom = ylmSpan ? ylmSpan[0] : qWindowFrom(quarters.length, pageRange["pressure-range"]);
      ylmTo   = ylmSpan ? ylmSpan[1] : quarters.length;
      put("pressure-timeline", histControls("pressure-range",
        { depth:Math.floor(quarters.length / 4), stops:["5y", "10y", "max"] }, ylmY0));
      render();
      var yTrend = byId("ylm-trend");
      if (yTrend){
        /* the fit is over the quarters IN VIEW, so the pill and the picture can never describe
           different stretches */
        var w = [], mt = matOf(matPick);
        if (mt) mt.data.slice(ylmFrom, ylmTo).forEach(function(d){ if (d.v != null) w.push(d.v); });
        yTrend.innerHTML = trendPill(trendOf(w, "points", "quarter"), null, true,
          { rising:"climbing", falling:"easing" });
      }
      drawPressureHead();
    }
    /* Pressure's head, for first paint and every redraw; its note opens from the ⋯ (HIST_NOTE). Built HERE, not
       in the HIST_HEAD literal, because `maturities` and `matPick` are this block's state. One group, the five
       maturities (the spreads are Horizon's); rows drop "Treasury" because the group has said it. */
    function drawPressureHead(){
      var H = HIST_HEAD["pressure-range"];
      H.mark  = gaugeSvg;
      H.title = matTitle();
      H.menu = function(){
        return [
          { key:"levels", label:"Treasury yields", on:true, value:(matOf(matPick) || {}).name || "",
            rows:maturities.map(function(m){
              return headPickRow(matPick === m.code, "data-ylm-mat", m.code, m.name);
            }).join("") }
        ];
      };
      HIST_NOTE["pressure-range"] = '<h4>' + matTitle() + '</h4>' + factsFrom(matDetail());
      put("pressure-head", histHead("pressure-range"));
    }
    /* The page's one renderer: the window, the picked maturity, the trend pill and the head, in that order.
       `sheet-sign-pressure` opens it, which is what makes the chart draw at its box's real width. */
    function drawPressure(){ drawYlm(); renderPressureInsights(); }   // the insights follow the live figure
    sheetRenderers["pressure-range"] = drawPressure;
    sheetRenderers["sheet-sign-pressure"] = drawPressure;

    maturities.forEach(function(m){ m.on = (m.code === matPick); });

    /* The row. Today's 10-year from the live par curve — the same object Horizon's spread is computed from, and
       NOT the quarterly history's last point (see matPick). No verdict word: there is no sourced band for a
       rate, and a figure without a band gets no word (CLAUDE.md, band provenance). The live layer
       repaints the figure when the curve lands — `repaintPressureRow` in 02-live.js — so it is written here
       once in the row's own shape and edited in place after that. */
    var y10 = (yieldCurve.filter(function(d){ return d.m === "10Y"; })[0] || {}).y;
    put("subj-value-pressure", (y10 == null ? "—" : y10.toFixed(2) + "%") +
      '<span class="unit">10-year Treasury</span>');
    var rowSay = byId("subj-say-pressure");
    if (rowSay) rowSay.outerHTML = colPeek(t10yYieldHistory.map(function(d){ return d.v; }),
                                           function(){ return "yl-col normal"; }, 0, true);
  }
  GYN.step("renderPressurePage", renderPressurePage, "mixed"); renderPressurePage();

  /* ---------------- Pressure's Insights ----------------
     Keren, V640: "add an insights component to the pressure page saying what is the 10-year US Treasury yield,
     why it's important, and in accordance to the rules we based about biology, economy, and gyneconomy."
     Lede: the body; cards: the economy, the reading in this app's terms, the division of labour with Horizon.
     Every figure is computed (the live curve, `fedFunds`, the quarterly series the chart draws), so nothing
     typed in can go stale. A separate step so renderPressurePage does not grow (functions may only shrink);
     re-run on every open so the figures follow the live curve. */
  function renderPressureInsights(){
    var ins = byId("pressure-insights"); if (!ins || !t10yYieldHistory.length) return;
    var y10 = (yieldCurve.filter(function(d){ return d.m === "10Y"; })[0] || {}).y;
    var seen = t10yYieldHistory.filter(function(d){ return d.v != null; });
    var hi = seen.reduce(function(a, d){ return d.v > a.v ? d : a; });
    var lo = seen.reduce(function(a, d){ return d.v < a.v ? d : a; });
    var cyc = openCycle(), span = cycleSlice(t10yYieldHistory, cyc);
    var inCycle = span ? t10yYieldHistory.slice(span[0], span[1]).filter(function(d){ return d.v != null; }) : [];
    var cycAvg = inCycle.length ? mean(inCycle.map(function(d){ return d.v; })) : null;
    var pct = function(v){ return v.toFixed(2) + "%"; };
    var cards = [];
    cards.push('<p class="hi-lede">Blood pressure is what the flow meets in the vessels — the force every organ ' +
      'downstream lives under. Here it is the yield on the ten-year Treasury: the price the economy’s one ' +
      'risk-free borrower pays for a decade of money, and the level everything else is priced off.</p>');
    cards.push(hiCard("The risk-free loan", "",
      "A thirty-year mortgage prices off this yield, because between moves and refinances a mortgage lives " +
      "seven to ten years; investment-grade companies borrow at it plus a spread; and it is the discount rate " +
      "a stock’s future earnings are measured against. Hormones is the overnight rate the Fed sets" +
      (fedFunds && fedFunds.lo != null ? " (" + fedFundsRange() + ")" : "") +
      "; this is that rate as the market re-prices it ten years out" +
      (y10 != null ? " — " + pct(y10) + " today" : "") + "."));
    cards.push(hiCard("Pressure on the borrower", "",
      "When it rises, every borrower feels it, and the Treasury first: this is the rate the government rolls " +
      "its debt over at, so a higher ten-year today is a higher interest burden a year from now — the marker " +
      "on Power. " +
      (cycAvg != null ? "This cycle has averaged " + pct(cycAvg) + (y10 != null ? " against " + pct(y10) + " today" : "") + ". " : "") +
      "Since " + t10yYieldHistory[0].q.slice(0, 4) + " the quarterly record runs from " + pct(lo.v) + " in " + lo.q +
      " to " + pct(hi.v) + " in " + hi.q + "."));
    cards.push(hiCard("Level, not slope", "",
      "This page reads the LEVEL. The gap between this yield and the three-month bill is Horizon, in Mood, " +
      "because that gap is the market’s forecast of the next few years rather than a pressure it is under " +
      "now. Read them together: a high level with a flat or inverted curve is a body under strain that expects " +
      "relief; a low level with a steep curve is one at rest that expects to work."));
    ins.innerHTML = '<section class="highlights insights"><div class="hi-head">Insights</div>' + cards.join("") + '</section>';
  }
  GYN.step("renderPressureInsights", renderPressureInsights, "render"); renderPressureInsights();