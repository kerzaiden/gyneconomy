  // ---------------- RENDER: range bars + card helpers ----------------
  function clampPct(v, lo, hi){ return Math.max(0, Math.min(100, ((v - lo) / (hi - lo)) * 100)); }

  // Progressive disclosure: every card/row shows only its short, load-bearing sentence by default; the fuller
  // explanation (sourcing detail, caveats, the body↔economy metaphor) sits behind a small (i) button next to it.
  // Since Version 142 (Keren: "make the info icons open in the new popup format as well") these open in the same
  // sheet/modal as the expand buttons below, not a floating popover: infoIcon() just files the text in detailTexts,
  // wrapping plain text in a heading (the icon's label) and a paragraph so it reads like the other sheets.
  function infoIcon(fullHtml, title){
    var html = /^\s*<h4/.test(fullHtml) ? fullHtml : '<h4>' + (title || "About this reading") + '</h4>' + factsFrom(fullHtml);
    return expandBtn(html).replace('class="expand-btn"', 'class="info-btn expand-btn"').replace('aria-label="Expand details"', 'aria-label="More detail"');
  }

  // Every indicator below (Financial resilience & Psychology table rows, Coincident & Lagging cards) defaults to
  // a minimal view — name/term, headline metric, at most one short line. detailTexts holds the full expanded
  // markup for each (reference-range bar, full note/caption, aux stat, sources), opened in one shared modal
  // rather than a popover, since there's more to show here than a paragraph of text.
  var detailTexts = [];
  /* A CONTENT-ADDRESSED slot table (Version 532).

     `detailTexts` was append-only: every `expandBtn` and `moreRow` pushed a fresh entry and handed
     back its index, so re-rendering a block allocated NEW slots and `data-detail-idx` climbed. That
     made the array grow as a reader browsed, and it made rendering twice impossible — the DOM came
     back 22KB larger with different indices, which is how Version 531's registry found it.

     The key is the note's own HTML, so identical content resolves to the same slot however many
     times it is built, and no call site has to pass anything. Strings are immutable and shared by
     reference in JS, so the map's key and the array's entry are the same string — the table costs
     bookkeeping, not a second copy of every note.

     A note whose text genuinely changes (a figure moved) takes a new slot, which is correct: it is
     a different note. Growth is therefore bounded by DISTINCT content rather than by render count.

     `headNoteIdx` and `hubDetailIdx` already keyed their slots by hand — by page id and by being
     allocated once — and are left exactly as they were. This generalises what they were doing. */
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
  // V491: the two multi-reading panels, built once at init and placed by their page's renderer (see above).
  var powerPanelHtml = "", valuationPanelHtml = "";
  /* V492: Growth's and Households' rows, built on first use and kept. Same reason as V491's two — a renderer
     that rebuilds on every window change would otherwise push a fresh (i) into `detailTexts` each time. These
     are functions rather than vars because they call `panelRow`, which is declared after their meters. */
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
  // Every (i) reads the same way (Version 227, Keren: "bullet points, only the central information, one clean swoop"):
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
  // The modal is back to what it was built for (Version 256): one note, opened by an (i), closed and forgotten.
  // Metric pages left it — see openMetricPage below.
  var sheetRenderers = {};
  // Which stop each page is showing. It sits beside sheetRenderers because the two are one mechanism: a key in
  // both is all the delegated .range-seg handler needs to drive a control, which is how the deficit block, Volume
  // and Pulse get a timeline without a second control idiom or a listener of their own.
  // "deficit-range", "volume-range" and "pulse-range" are not sheets — they are a block's own zoom.
  // Every timeline opens on TEN YEARS (Version 368, Keren: "make the default marker 10 years"). The deficit had
  // opened there since Version 361 and the rest opened on Max, so the same control started in two different places
  // depending on which page you reached it from \u2014 which is the one thing a shared component must never do.
  // Ten is also the better first view: it is the window an economist quotes, it is long enough to hold a cycle and
  // a shock, and Max is one tap away for the reader who wants the whole record.
  // Growth and Temperature are not listed with a window because they do not offer one; their default is unchanged.
  // Version 410: every history opens on the cycle the front page is showing. The 10-year default came in when
  // "This cycle" was not a real window; it is one now, and a reading opened from Current cycle should be about
  // the current cycle.
  // Version 417: which mode each page's history is in. Only Temperature has the cycle overlay so far; the default
  // stays "calendar" until every page has one, so the app is never inconsistent between pages mid-rollout. Keren
  // asked for Cycles as the DEFAULT — that is one word here, and it flips in the last stage of the rollout.
  var pageMode = { "sheet-metric-temp":"cycles", "sheet-metric-gdp":"cycles",
                   "sheet-metric-power":"cycles", "sheet-metric-valuation":"cycles",
                   "volume-range":"cycles", "pulse-range":"cycles",
                   "deficit-range":"cycles", "ylm-range":"cycles", "hzn-range":"cycles",
                   "sheet-metric-households":"cycles", "sheet-sign-activity":"cycles" };   // V498
  // Which cycles the overlay draws. null means all of them, which is the default because the comparison IS the
  // landing view; a toggled-off cycle simply is not drawn. The handler never lets the last one be turned off.
  var pageCycles = { "sheet-metric-temp":null, "sheet-metric-gdp":null,
                     "sheet-metric-power":null, "sheet-metric-valuation":null,
                     "volume-range":null, "pulse-range":null,
                     "deficit-range":null, "ylm-range":null, "hzn-range":null,
                     "sheet-metric-households":null, "sheet-sign-activity":null };   // null = the open cycle (V420)
  var pageRange = { "sheet-metric-power":"10y", "sheet-metric-valuation":"10y",   // V433: "cycle" left both rulers
                    "sheet-metric-gdp":"10y", "sheet-metric-temp":"10y", // V418/V431: "cycle" left both rulers
                    "deficit-range":"10y", "volume-range":"10y", "pulse-range":"10y",   // V434\u2013435: "cycle" left all three
                    "ylm-range":"10y", "hzn-range":"10y", "desire-range":"max",
                    "sheet-metric-households":"10y",
                    "sheet-sign-activity":"10y" };   // V498
  function wireDetailModal(){
    var backdrop = document.getElementById('detail-backdrop');
    var body = document.getElementById('detail-modal-body');
    function openFrom(idx, btn){
      body.innerHTML = detailTexts[idx];
      // Version 329: the reading's timing chip comes with the note — a copy, so the page keeps the original and
      // a second opening finds it again.
      var sheet = btn && btn.closest && btn.closest(".metric-sheet");
      var chip = sheet && sheet.querySelector(".timing-row");
      if (chip) body.appendChild(chip.cloneNode(true));
      backdrop.classList.add('show');
    }

    function close(){ backdrop.classList.remove('show'); body.innerHTML = ""; }
    document.addEventListener('click', function(e){
      // V518: .bh-opt is the head's ⋯ menu row. It opens exactly what an (i) opens, by the same index, which
      // is the whole reason the note could leave the reading row without being written a second time.
      var btn = e.target.closest && e.target.closest('.expand-btn, .details-link, .more-row, .bh-opt');
      if (btn){ if (btn.closest('summary')) e.preventDefault(); // an (i) on a drawer's own row opens the modal, not the drawer
        openFrom(btn.getAttribute('data-detail-idx'), btn); e.stopPropagation(); return; }
      if (e.target === backdrop) close();
    });
    document.getElementById('detail-modal-close').addEventListener('click', close);
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
  document.getElementById("asof-text").textContent = "Data compiled " + dataCompiledLabel; // the disclaimer beside it says it is a snapshot, not a feed


  // Individual indicator meters: a clean "lab result" bar — plain track, a solid green "optimal" zone,
  // and a single dot at today's value (dark if inside the optimal band, orange if outside). Historical
  // low/high still set the bar's own min/max (so the dot's position is still honest against real extremes),
  // but there are no interior tick marks or floating pointer labels cluttering the bar itself — the value
  // is already printed big, above, next to the marker name.
  // m.optimal is one of: {from, to, label} | {gte, label} | {lte, label} — from/to/gte/lte are plain numbers
  // used for positioning + the flagged check; label is the pre-formatted display string (units vary by metric).
  function meterHtml(m){
    var pct = clampPct(m.value, m.min, m.max);
    var o = m.optimal, ends = m.ends || {}, flagged = false, zoneHtml = '', labelsHtml = ''; // `ends` renames a bar's end words (V229, all branches V231)
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
    var stopsHtml = (m.stops || []).map(function(st, i, all){ // named positions along the track (Version 235)
      var w = 100 / all.length;
      return '<div class="rbar-stop" style="left:' + (i * w).toFixed(2) + '%; width:' + w.toFixed(2) + '%" title="' + st + '"></div>';
    }).join("");
    return labelsHtml + '<div class="rbar-track">' + zoneHtml + stopsHtml + dotHtml + '</div>';
  }
  function srcHtml(list){ return list.map(function(s){ return '<a href="' + s.u + '" target="_blank" rel="noopener">' + s.t + '</a>'; }).join(" · "); }
  // A READING ON A RING (Version 280, Keren: "I want the VIX and the high-yield spread to have a ring
  // representation … the ring on the left and the text adjacent to it on the right, and you can drop the current
  // bars"). It is the half-dial of Version 277 closed into a circle, and for the same reason: these two scales are
  // heavily skewed — the VIX's record high is five times its usual home, the spread's eight times — so a ring
  // FILLED from zero would sit at 8% and 2% and say nothing. The reading is carried by the disc's POSITION on the
  // track, with the usual band marked behind it, which is skew-proof and is already this app's grammar.
  // Where a sign sits relative to the turn of the cycle. Kept beside the signs rather than in a section heading,
  // because it is a property of the sign and travels with it onto its page (Version 269).
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
  // Version 271, Keren: "I don't need the text beside it — but what I would want is to click on it and see all the
  // metrics by indicator type." The sentence was explaining the glyph once per page, forever, to a reader who had
  // long since learnt it. It moves to the one place it is actually wanted — the page the chip now opens, which is
  // where a reader who does NOT know the word goes to find out — and the chip becomes a door instead of a caption.
  // The section headings deleted in Version 269 come back here, as pages you can reach rather than titles you must
  // scroll past: the same grouping, asked for rather than imposed.
  function timingPill(kind){
    var t = TIMING[kind]; if (!t) return "";
    return '<div class="timing-row">' +
      '<button type="button" class="timing ' + kind + '" data-ind-tab="' + kind + '" ' +
        'aria-label="Show the ' + t.label.toLowerCase() + ' readings">' +
        timingMark(kind) + '<b>' + t.label + '</b>' + CHEV +
      '</button></div>';
  }

  // Version 298, Keren: "make it so the timing indicator would be at the bottom, next to More details." Where a
  // sign sits in the cycle is a footnote about the reading, not a heading over it, so it leaves the top of the
  // page and shares the last row with the other thing offered at the end. Every inner page carries exactly one
  // chip and at most one More details row — which is what makes a blind move safe — and pages with no chip
  // (the timing class pages themselves) are skipped. Idempotent, so it can run at build time AND on open.
  // A container with nothing to show takes no room (Version 383, Keren: "between average growth and highlights
  // I think there's 20 pixels, even more, maybe 30"). It was 32 on Growth. Version 381 collapsed an :empty block,
  // which caught Temperature's emptied sign card but NOT Growth's, whose markers section is a CLOSED <details>
  // with a display:none summary \u2014 169 characters of text and zero height, so no selector could see it was
  // showing nothing. Measuring is the only honest test. It has to run AFTER the sheet is on screen: seatPageFoot
  // is called at the TOP of openMetricPage, while the sheet is still hidden and every child reports zero, which
  // is exactly why the first attempt did nothing.
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
    // not "already done?" but "is each piece where it belongs?" — the four metric pages build their Highlights,
    // and with it their More details row, AFTER the first pass runs, so the second pass has to be able to
    // collect a latecomer rather than seeing a foot and giving up.
    if (chip.parentNode !== foot) foot.appendChild(chip);
    // Version 426, Keren: "put the More details button inside the highlights container." It was seated in the
    // page foot beside the timing chip, which made sense while Highlights was a bare section; since Version 288
    // gave .metric-sheet .highlights a surface, a border and a radius, a button sitting just below that box reads
    // as belonging to the page rather than to the Highlights it summarises. highlightsHtml has always emitted it
    // inside the section \u2014 this function was moving it out again \u2014 so the fix is to seat it back where it was
    // built, and to keep the foot only as the fallback for a page that has no Highlights box to put it in.
    var more = sheet.querySelector(".more-row"), hl = sheet.querySelector(".highlights");
    var home = hl || foot;
    if (more && more.parentNode !== home) home.appendChild(more);
    if (sheet.lastElementChild !== foot) sheet.appendChild(foot);
  }

  // Each page registers itself with its class as it is built, so the class pages are assembled from the same
  // objects the signs are, and cannot drift out of step with them (Version 271).
  var timingMembers = { leading:[], coincident:[], lagging:[], structural:[] };
  function registerTiming(kind, entry){ if (timingMembers[kind]) timingMembers[kind].push(entry); }

  // Version 299 gave the head a mark and made it the control that opened the whole record; Version 303 puts that
  // record on the page instead, so the mark has nothing left to open and stops being a button. It stays as what
  // Keren asked for in the first place — an icon beside the name — and now every sign page that has a mark shows
  // it, not only the one that had something behind it.
  function headHtml(ind, noMark){
    var mk = "";
    if (signMarks[ind.bodyTerm] && !noMark){
      mk = '<span class="head-mark" aria-hidden="true"><span class="head-mark-disc">' +
        signMarks[ind.bodyTerm]() + '</span></span>';
    }
    return '<div class="card-head">' + mk + '<div class="card-titles"><span class="body-term">' + ind.bodyTerm + '</span><span class="econ-term">' + ind.econTerm + '</span></div><span class="tag ' + ind.tag.state + '">' + ind.tag.text + '</span></div>';
  }
  // Full detail for a card indicator — the reference-range bar, the long-form caption, the aux stat and its
  // sources — all the things the minimal card below leaves out.
  // Version 270, all of it Keren's (Sep 20, 2026), and all of it the same instinct: a page should carry the things
  // only it can say. `lead` is the note cut to what prose is FOR here — the metaphor, which is the book — with every
  // figure that was buried in it lifted out into `facts`, where it can be found at a glance ("either you put it in
  // bullet points or make it minimal as much as possible, because nobody will read so much text"). An indicator
  // without a `lead` still reads its old caption, so the two can be converted one at a time. The source list is
  // gone from every page: the app has a Sources screen listing every figure's primary source by section, and
  // repeating four links under each page was furniture ("we can put this in sources, we don't need it for every
  // page"). `opts` lets a page drop the parts it has already said for itself.
  var heldHighlights = "";   // a deferred Highlights block, claimed by the caller that places it (V385)
  function cardDetailHtml(ind, opts){
    opts = opts || {};
    var facts = [].concat(ind.facts || [], ind.aux || []);
    // `bare` drops the whole top (Temperature, whose chart says all three things); `noHead` drops only the name
    // row and the figure and keeps the spectrum — for a page whose FIRST CONTAINER carries the title and states
    // the figure itself, which is Pulse since Version 305 (Keren: "put the title inside the first container as a
    // title, remove 1.42× and the heart icon"). The figure was on screen three times: the head, the card's NOW
    // row, and the record's Latest row.
    // Version 384, Keren, on Pulse: "I want the history container to be first \u2014 and the blood test component
    // needs to be below the history container." That is the Version 369 page order (history, then the reading
    // against its reference range), which this builder had backwards for the signs: it emitted the meter first
    // because it was written before that order existed. `chartFirst` lets a page take the right one.
    var chartHtml = opts.chart || '';
    // Version 476: `noMeter` drops the bar alone and keeps the head and the figure, for a page whose history
    // container has taken the bar in — where leaving it here would be one reading twice, on two scales.
    var bloodTest = opts.bare ? '' :
      ((opts.noHead ? '' : headHtml(ind, opts.noMark) +
        '<div class="metric-row"><span class="metric mono">' + ind.metric + '</span><span class="metric-sub">' + ind.metricSub + '</span></div>') +
      (opts.noMeter ? '' : meterHtml(ind.meter)));
    // Version 390, Keren, of Volume: "the blood test component should be below the history chart, and it should
    // have a white container just like in the power page." On a page that opens with a chart, the spectrum was
    // the one thing on screen with no box under it — it floated on the page background directly beneath the top
    // bar, which read as unfinished rather than as a second reading. Every other container on an inner page is a
    // .page-chart; the blood test is a reading too, so it takes the same box. The wrapper is an OPTION rather
    // than a change to the component, because on the metric pages the spectrum is already inside a card (it is
    // the top row of the markers table) and would otherwise end up in two boxes.
    if (bloodTest && opts.bloodCard) bloodTest = '<div class="page-chart blood-card">' + bloodTest + '</div>';
    return (opts.chartFirst ? chartHtml + bloodTest : bloodTest + chartHtml) +
      // An indicator may now say NOTHING here, by setting shortCaption to "" (Version 378). Before this the chain
    // fell through on any falsy value, so emptying the short line silently promoted the long caption onto the page
    // \u2014 which on Temperature would have put back the very metaphor Version 376 moved into the note.
    // Version 384, Keren, of Pulse's line and its COVID-era-low row: "no, no, no \u2014 I think this belongs to
    // insights." She is right, and it is true of every sign: a short verdict and the figures that qualify it are
    // commentary, not measurement, so they take the Highlights block and its own ground (Version 379) rather than
    // sitting loose under the chart. It also gives the sign pages the metric pages' shape: history, blood test,
    // Highlights, More details.
    (function(){
      var lede = ind.lead != null ? ind.lead : (ind.shortCaption != null ? ind.shortCaption : (ind.caption || ""));
      var figs = facts.map(function(a){
        return '<div class="aux-stat' + (a.wordy ? " wordy" : "") + '"><span>' + a.label + '</span><b>' + a.value + '</b></div>';
      }).join("");
      if (!lede && !figs) return "";
      var block = '<section class="highlights"><div class="hi-head">Highlights</div>' +
        (lede ? '<div class="hi-card"><p>' + lede + '</p></div>' : "") + figs + '</section>';
      // A page whose last container is appended AFTER this card (Desire's risk matrix) holds its Highlights back,
      // so the page order still ends history \u2192 blood test \u2192 Highlights \u2192 More details (Version 385).
      if (opts.deferHighlights){ heldHighlights = block; return ""; }
      return block;
    })() +
      // the long form, offered rather than asserted \u2014 and only where there IS a longer form than the line above
      (function(){
        if (opts.bare) return "";
        var rest = dropWhatIsShown(ind.caption, ind.lead || ind.shortCaption || "");
        return rest ? moreRow('<h4>' + ind.bodyTerm + '</h4><div class="marker-sub">' + ind.econTerm + '</div>' + factsFrom(rest)) : "";
      })();
  }


  // ---------------- RENDER: yield-by-maturity comparison chart (multiselect by maturity) ----------------
  function renderPressurePage(){
    var svg = document.getElementById("ylm-svg");
    // Version 496: these are recomputed per draw from the host's own width (see render), so the chart is
    // drawn at the size it will occupy rather than scaled down from 780. The values here are only a seed.
    var W = 780, H = 260, padL = AXIS.L, padR = AXIS.R, padT = AXIS.T + AXIS.LEG + AXIS.READ, padB = 30;   // +LEG: the legend strip at the head of the frame, as every other history has (V571)
    var innerW = W - padL - padR, innerH = H - padT - padB;
    var el = svgEl;

    var quarters = t3mYieldHistory.map(function(d){ return d.q; });

    var maturities = [
      {code:"3m", name:"3-Month", data: t3mYieldHistory, on:true,
        detail: '<h4>3-Month Treasury</h4>' +
          '<p class="caption">This tracks the Federal Reserve\'s own overnight policy rate almost directly — when the Fed raises or cuts, this yield moves within days. It\'s the reference rate behind savings accounts, CDs, money-market funds, and most variable-rate consumer debt like credit cards and many lines of credit. Quarterly average of the discount-basis TB3MS series, which reads a touch below the investment-basis short yield shown on the curve above — a real definitional gap, not an inconsistency.</p>' +
          '<div class="src">' + srcHtml([{t:"FRED — 3-Month Treasury Bill Rate (TB3MS)", u:"https://fred.stlouisfed.org/series/TB3MS"}]) + '</div>'},
      {code:"2y", name:"2-Year", data: t2yYieldHistory, on:true,
        detail: '<h4>2-Year Treasury</h4>' +
          '<p class="caption">Reflects the market\'s own forecast of where the Fed\'s policy rate will average over the next couple of years — it often moves before the Fed actually acts, on rate-cut or rate-hike expectations. It\'s the closest single number to "what markets think the Fed will do next." Auto loans and shorter-duration corporate borrowing tend to price off this end of the curve.</p>' +
          '<div class="src">' + srcHtml([{t:"FRED — 2-Year Treasury Rate (GS2)", u:"https://fred.stlouisfed.org/series/GS2"}]) + '</div>'},
      {code:"5y", name:"5-Year", data: t5yYieldHistory, on:true,
        detail: '<h4>5-Year Treasury</h4>' +
          '<p class="caption">Sits in the middle of the curve, blending near-term Fed-policy expectations with a longer view on growth and inflation. It\'s the benchmark for medium-duration borrowing — 5-year adjustable-rate mortgages, mid-length corporate bonds, and many business loans.</p>' +
          '<div class="src">' + srcHtml([{t:"FRED — 5-Year Treasury Rate (GS5)", u:"https://fred.stlouisfed.org/series/GS5"}]) + '</div>'},
      {code:"10y", name:"10-Year", data: t10yYieldHistory, on:true,
        detail: '<h4>10-Year Treasury</h4>' +
          '<p class="caption">The single most-referenced benchmark in the credit market. A 30-year fixed mortgage sounds like a 30-year commitment, but between moves and refinances its real average lifespan runs closer to 7–10 years — which is why mortgage rates track this maturity rather than the 30-year bond. Most investment-grade corporate bonds are also quoted as this yield plus a spread, and it\'s the standard discount-rate proxy used in stock valuation.</p>' +
          '<div class="src">' + srcHtml([{t:"FRED — 10-Year Treasury Rate (GS10)", u:"https://fred.stlouisfed.org/series/GS10"}]) + '</div>'},
      {code:"30y", name:"30-Year", data: t30yYieldHistory, on:true,
        detail: '<h4>30-Year Treasury</h4>' +
          '<p class="caption">Reflects the compensation investors demand for the genuine uncertainty of the longest possible horizon — economists call this the term premium. It anchors the longest corporate and government bonds. The line has a real gap in 2005: the Treasury stopped issuing 30-year bonds between October 2001 and February 2006, so there is no actual traded yield for that stretch — shown here as a break rather than a guessed figure.</p>' +
          '<div class="src">' + srcHtml([{t:"FRED — 30-Year Treasury Rate (GS30)", u:"https://fred.stlouisfed.org/series/GS30"}]) + '</div>'}
    ];
    addSources([
      {t:"FRED — 5-Year Treasury Rate (GS5)", u:"https://fred.stlouisfed.org/series/GS5"},
      {t:"FRED — 30-Year Treasury Rate (GS30)", u:"https://fred.stlouisfed.org/series/GS30"}
    ]);

    // Version 394: the chart carries a window, like every other inner-page history (Keren: "have the
    // configuration of all the rest of the inner pages history — so a year bar at the top"). `ylmFrom` is the
    // first visible quarter and every geometry function reads it, so nothing below needs to know a window exists.
    var ylmFrom = 0, ylmTo = quarters.length;   // V435: the window is now half-open, so a cycle can close it
    function ylmCount(){ return ylmTo - ylmFrom; }
    function x(i){
      var half = innerW / (2 * Math.max(1, ylmCount()));   // V443: keep the end columns inside the plot
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

    var tooltip = document.getElementById("ylm-tooltip");
    var onMaturities; // the toggle-invariant part of showAt()'s filter, recomputed once per render() not per hover frame

    function render(){
      /* Version 496: measure first. A fixed viewBox scaled to a phone made this chart 130px tall against the
         other histories' 288 and shrank its labels by the same factor — the one thing the Version 303 rule
         exists to prevent. The height formula is the one the other seven share, so all nine now agree. */
      var shell = svg.parentNode;
      W = Math.max(270, Math.round((shell && shell.clientWidth) || 360));
      H = W < 430 ? 268 : 300;
      innerW = W - padL - padR; innerH = H - padT - padB;
      svg.setAttribute("viewBox", "0 0 " + W + " " + H);
      computeScale();
      onMaturities = maturities.filter(function(m){ return m.on; });
      svg.innerHTML = "";

      // Version 401: the last history onto the shared emitter. This one builds DOM nodes rather than a string,
      // so the string goes in with insertAdjacentHTML — the only accommodation the consolidation needed. Its own
      // steps are kept (they divide the span evenly rather than landing on round numbers) because the scale here
      // runs 0 to whatever the maturity reached, and round stops would leave the top of the chart unlabelled.
      var steps = maxV - minV <= 6 ? (maxV - minV) : 6, ylmTicks = [];
      for (var s = 0; s <= steps; s++) ylmTicks.push(minV + ((maxV - minV) * s) / steps);
      svg.insertAdjacentHTML("beforeend", chartAxes({ ticks:ylmTicks, y:y, x0:padL, x1:(W - padR), top:(padT - AXIS.LEG - AXIS.READ), bot:(H - padB),
        base:y(0), noGridAt:0, fmt:function(v){ return v.toFixed(0) + "%"; } }));
      // Version 409, the last history onto the shared hover. This chart had one of its OWN — a crosshair and a
      // tooltip through attachHoverTracking, written when it was a five-line comparison and the tooltip had to
      // list every maturity at once. It draws one maturity now (Version 293), so the thing it was built for is
      // gone and what is left is a second way of doing what one function already does. `x()` already maps the
      // window, so the geometry it publishes is the first and last VISIBLE column.
      svg.classList.add("hist-svg");
      svg.insertAdjacentHTML("beforeend",
        '<line class="hist-cross" x1="0" x2="0" y1="' + padT + '" y2="' + (H - padB) + '"/>');
      var picked = matOf(matPick);
      lastHistGeom = { L:x(ylmFrom), R:x(ylmTo - 1), T:padT, B:(H - padB), W:W,
                       n:ylmCount(), at:function(d, i){ return quarters[ylmFrom + i]; },
                       fmt:function(v){ return v.toFixed(2) + "%"; },
                       /* V570: the zone key moves up into the legend at the head of the grid, out of the row
                          it had under the chart. Same three entries, same colours, the place every other
                          history keeps its key — and a row of the page's height given back. */
                       refs:[{ label:"Inverted", swatch:"var(--critical)" },
                             { label:"Normal",   swatch:"var(--season-autumn)" },
                             { label:"Steep",    swatch:"var(--good)" }],
                       vals:(picked ? picked.data.slice(ylmFrom, ylmTo).map(function(d){
                              return d.v == null ? null : { v:d.v }; }) : []) };

      // The year labels were a hand-written list, which only worked while the chart always showed 2005–2026.
      // With a window they are derived: about four evenly spaced Q1s inside whatever is on screen.
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

      // ---- The picked maturity is drawn as COLUMNS, each shaded by what the curve was doing that quarter
      // (Version 394). It replaces a single thin line in one flat purple. Two things changed for one reason:
      // Keren asked for the rest of the inner pages' history configuration, and every one of those draws its
      // reading as columns with colour carrying a second variable (Temperature's heat ramp, Volume's blood ramp).
      // Here the second variable is the page's own headline — the 10-year-minus-3-month spread — read through
      // `pressureZone()`, the SAME function the preview card's zone bar calls. So the inversions of 2006–07,
      // 2019 and 2022–24 appear as red stretches on this chart without a word of explanation, and the reader no
      // longer has to hold the spread chart in their head to see when the yield above was under a warning.
      var spreadAt = {};
      t10y3mHistory.forEach(function(d){ spreadAt[d.q] = d.v; });
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

      // Version 404: the fit across the quarters in view, for the maturity on screen. This chart builds nodes
      // rather than a string, so the string goes in the same way its axes did.
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
        tooltip.innerHTML = "<b>" + q + "</b>" + rows +
          (zn ? '<div class="row"><span><span class="sw" style="background:var(--' +
                (zn.key === "inverted" ? "-critical" : zn.key === "normal" ? "-season-autumn" : "-good").slice(1) +
                ')"></span>Curve</span><b>' + zn.label + '</b></div>' : "");
        tooltip.style.left = (px / W * 100) + "%";
        var avgY = onMats.reduce(function(s, m){ return s + y(m.data[i].v); }, 0) / onMats.length;
        tooltip.style.top = (avgY / H * 100) + "%";
        tooltip.style.opacity = 1;
      }
      function hide(){ crosshair.setAttribute("opacity", 0); tooltip.style.opacity = 0; }
      // attachHoverTracking retired here in Version 409 — see above. It stays in the app for the spread chart,
      // which is a line with two series and genuinely needs a different readout.
      var shell = document.getElementById("ylm-shell");
      if (shell){ shell.__geom = lastHistGeom; wireHistHover(shell, "ylm-tooltip"); }
    }

    // ONE MATURITY AT A TIME, CHOSEN FROM A ROW OF CARDS (Version 293, Keren: "I don't understand anything from the
    // chart and it's kind of distorted, it's coloured in black \u2026 I'd much rather have cards, scrollable, with an
    // icon that says what each maturity means, and if I click on it I see the appropriate graph"). The smear had a
    // cause: five lines plus a dot on every one of 85 quarters is 425 marks in five dark purples, on one small
    // picture. Drawing one line answers the question the page is actually asking \u2014 what has THIS maturity done \u2014
    // and the cards carry what the deleted paragraph was trying to say, one line each, next to an icon for the thing
    // that maturity prices.
    var matPick = "10y";   // the most-referenced benchmark opens the page
    // Today's reading, from the curve the page's own headline is computed from — NOT the last point of the
    // quarterly history, which is a three-month AVERAGE and so reads 0.2–0.9 points different. Keren caught the two
    // side by side ("you write 10-year 4.94 and I see inside the container 10-year 4.70"), and she is right that a
    // page cannot print two numbers for one thing. The history line keeps its quarterly averages, because that is
    // what it plots; the card says today (Version 294).
    /* Version 470, Keren: "the maturity ladder needs to become a control." It was five cards carrying an icon, a
       name, today's rate and a caption apiece \u2014 four pieces of furniture each to do one job, choose the line below.
       As segments it is one row, and the room that frees is what let the SPREAD move into this band as a sixth
       segment instead of standing in a second container with a second chart, a second legend and a second copy of
       the figure. The rates the cards carried are not lost: they are what the chart plots. */
    var SERIES = maturities.map(function(m){ return { key:m.code, label:m.name.replace("-Month", "M").replace("-Year", "Y") }; });
    function renderLegend(){
      var host = document.getElementById("ylm-series"); if (!host) return;
      host.innerHTML = seriesBar("ylm-series", SERIES, matPick);
    }
    // The chosen card is brought into view, so the row never opens showing cards that are not the one drawn below.
    // It has to run when the PAGE opens, not when the cards are built: at build time the sheet is still hidden, so
    // the row has no width and a scroll has nothing to move (Version 293).
    // the chosen segment is brought into view, the way the card scroller used to bring its card
    function centreCard(){
      var host = document.getElementById("ylm-series"); if (!host || !host.clientWidth) return;
      var bar = host.querySelector(".seriesbar"), picked = host.querySelector(".range-seg.on");
      if (!bar || !picked) return;
      bar.scrollLeft = Math.max(0, picked.offsetLeft - bar.clientWidth / 2 + picked.offsetWidth / 2);
    }
    window.__pickSeries = function(bar, code){
      matPick = code; maturities.forEach(function(m){ m.on = (m.code === matPick); });
      renderLegend(); drawYlm(); centreCard();
    };
    sheetRenderers["sheet-sign-yield"] = function(){ centreCard(); drawYlm(); };
    // the record is drawn at the box's own width (Version 303) — a hidden element has no width, so this has to
    // happen on open, the same reason the yield page centres its card there
    // Volume and Pulse on the timeline (Version 367), riding the deficit block's machinery exactly: a key in
    // pageRange and a matching sheetRenderers entry is all the delegated .range-seg handler needs, so neither page
    // gets a second control idiom and neither gets its own listener. Each measures its OWN host, because these
    // charts sit inside a padded card and the width the handler passes is the page's.
    function drawVelocityRecord(){
      var host = document.getElementById("pulse-record");
      if (!host || !host.clientWidth) return;
      var key = pageRange["pulse-range"];
      var pulCycles = pageMode["pulse-range"] === "cycles";
      var pulCyc = pulCycles ? (cycleByName(pageCycles["pulse-range"]) || openCycle()) : null;
      var pulIdx = pulCyc ? cycleQtrIdx(M2V_FROM_YEAR, pulCyc, m2vHistory.length) : null;
      var bar = document.getElementById("pulse-timeline");
      if (bar) bar.innerHTML = histControls("pulse-range",
        { depth:Math.floor(m2vHistory.length / 4), stops:PULSE_STOPS });
      var vFrom = pulIdx ? pulIdx[0] : qWindowFrom(m2vHistory.length, key), vTo = pulIdx ? pulIdx[1] : undefined;
      var span = document.getElementById("pulse-span");
      if (span) span.textContent = (m2vHistory.length - vFrom) + " quarters" +
        (vFrom === 0 ? " since " + M2V_FROM_YEAR : ", from " + (M2V_FROM_YEAR + Math.floor(vFrom / 4)));
      host.innerHTML = velocityHistoryChart(host.clientWidth, vFrom, vTo);
      host.__geom = lastHistGeom;
      wireHistHover(host, "pulse-hist-tooltip");
      var vTrend = document.getElementById("pulse-trend");
      if (vTrend) vTrend.innerHTML = trendPill(
        trendOf(m2vHistory.slice(vFrom, vTo), "points", "quarter"),
        // Version 431, Keren: "in the pulse page you write quickening \u2014 the correct word is accelerating, and the
        // opposite is decelerating." Right on both counts, and the second half is the one that matters: Pulse IS a
        // velocity (M2 turned over per year), so acceleration is the literal reading rather than a metaphor.
        null, true, { rising:"accelerating", falling:"decelerating" });
    }
    sheetRenderers["sheet-sign-pulse"] = drawVelocityRecord;
    sheetRenderers["pulse-range"] = drawVelocityRecord;
    function drawM2Record(){
      var host = document.getElementById("m2-record");
      if (!host || !host.clientWidth) return;
      var len = m2Yoy.length - 4, key = pageRange["volume-range"];
      var volCycles = pageMode["volume-range"] === "cycles";
      var volCyc = volCycles ? (cycleByName(pageCycles["volume-range"]) || openCycle()) : null;
      var volIdx = volCyc ? cycleQtrIdx(M2_FROM_YEAR + 1, volCyc, len) : null;
      var bar = document.getElementById("volume-timeline");
      if (bar) bar.innerHTML = histControls("volume-range",
        { depth:Math.floor(len / 4), stops:VOL_STOPS });
      var mFrom = volIdx ? volIdx[0] : qWindowFrom(len, key), mTo = volIdx ? volIdx[1] : undefined;
      host.innerHTML = m2GrowthChart(host.clientWidth, mFrom, mTo);
      host.__geom = lastHistGeom;
      wireHistHover(host, "m2-hist-tooltip");
      // the fit is over the quarters IN VIEW, so the pill and the picture can never describe different stretches
      var mTrend = document.getElementById("volume-trend");
      if (mTrend) mTrend.innerHTML = trendPill(
        trendOf(m2Yoy.slice(4).slice(mFrom, mTo).filter(function(v){ return v != null; }), "points", "quarter"),
        // Version 431: Volume already used "accelerating" and paired it with "slowing", which is half of one pair
        // and half of another. Keren's rule next door finishes it.
        null, true, { rising:"accelerating", falling:"decelerating" });
    }
    sheetRenderers["sheet-sign-volume"] = drawM2Record;
    sheetRenderers["volume-range"] = drawM2Record;
    /* Version 475: Desire's record. No window control, and that is a decision rather than an omission — the
       series is three years deep, so every stop in `TIMELINE_STOPS` except Max is unanswerable (the Version 263
       rule), and inventing a 3M/1Y/3Y vocabulary for one page is the drift Version 411 closed. Three years is
       short enough to read whole. */
    function drawDesireRecord(){
      var host = document.getElementById("desire-record");
      if (!host || !host.clientWidth) return;
      var from = hyWindowFrom(pageRange["desire-range"]);
      var win = hyOas.slice(from);
      var bar = document.getElementById("desire-timeline");
      // no mode bar: at three years "Current cycle" and "Max" are the same window, and two stops that mean the
      // same thing are worse than one (the V366 rule). A bare range bar wears the same chrome.
      // V519: the head is inside the band; this is the page's own bare range bar, on the ground
      if (bar) bar.innerHTML = '<div class="hist-controls">' +
        rangeBar("desire-range", timelineFor({ depth:3, stops:DESIRE_STOPS }),
                 pageRange["desire-range"]) + '</div>';
      host.innerHTML = desireHistoryChart(host.clientWidth, from);
      host.__geom = lastHistGeom;
      wireHistHover(host, "desire-hist-tooltip");
      var tr = document.getElementById("desire-trend");
      // widening and tightening are the credit market's own pair, and the only pair for a spread
      if (tr) tr.innerHTML = trendPill(trendOf(win, "points", "day"), null, true,
        { rising:"widening", falling:"tightening" });
    }
    sheetRenderers["desire-range"] = drawDesireRecord;
    sheetRenderers["sheet-sign-desire"] = drawDesireRecord;
    (function(){
      var t; window.addEventListener("resize", function(){
        clearTimeout(t); t = setTimeout(function(){ drawVelocityRecord(); drawM2Record(); drawDesireRecord(); }, 150);
      });
    })();

    function matOf(code){ return maturities.filter(function(m){ return m.code === code; })[0]; }
    // "since 2005" came off with Version 394's year bar: the bar states the window, and a heading that
    // contradicts the control directly beneath it is worse than one that says less (the Version 384 lesson).
    function matTitle(){ var m = matOf(matPick); return (m ? m.name : "") + " U.S. Treasury"; }
    function matDetail(){ var m = matOf(matPick); return m ? m.detail : ""; }

    // The year bar rides exactly what Volume and Pulse ride (Version 367): a key in pageRange and a matching
    // sheetRenderers entry, which is all the delegated .range-seg handler needs. No second control idiom, no
    // listener of its own. `timelineFor` decides which stops the data can answer, so this chart offers 25Y the
    // day its series is that deep and nothing has to be edited for it (Version 366).
    function drawYlm(){
      /* Version 473: the spread left this page for Horizon, so the levels no longer share it with anything and
         the whole two-rulers argument of Version 472 dissolves with it. One chart, one control — the maturity
         bar. The levels take the whole record, which is what they took on the Yields tab anyway: a window ruler
         labelled 5Y a centimetre from a maturity labelled 5Y was the collision Version 472 hid behind a third
         tab, and deleting the ruler is the version of that fix that needs no tab at all. */
      ylmFrom = 0; ylmTo = quarters.length;
      renderLegend();
      render();
      var yTrend = document.getElementById("ylm-trend");
      if (yTrend){
        var w = [], mt = matOf(matPick);
        if (mt) mt.data.forEach(function(d){ if (d.v != null) w.push(d.v); });
        yTrend.innerHTML = trendPill(trendOf(w, "points", "quarter"), null, true,
          { rising:"climbing", falling:"easing" });
      }
      drawYlmHead();
    }
    /* V518: one function for both the first paint and every redraw — the old pair of identical `ylm-title`
       writes was the duplication this version is here to end. `expandBtn` is gone from it: the note goes into
       HIST_NOTE and opens from the ⋯, which also stops drawYlm pushing a fresh copy into detailTexts on every
       maturity the reader tries. */
    function drawYlmHead(){
      HIST_HEAD["ylm-range"].title = matTitle();
      HIST_NOTE["ylm-range"] = '<h4>' + matTitle() + '</h4>' + factsFrom(matDetail());
      var hd = document.getElementById("ylm-head");
      if (hd) hd.innerHTML = histHead("ylm-range");
    }
    sheetRenderers["ylm-range"] = drawYlm;

    maturities.forEach(function(m){ m.on = (m.code === matPick); });
    renderLegend();
    drawYlm();   // V518: which paints the head itself, so the second identical write is gone
  }
  GYN.step("renderPressurePage", renderPressurePage, "mixed"); renderPressurePage();