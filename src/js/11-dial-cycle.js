  // ---- the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead ----
  function drawDial(m){
    var era = m.era;
    function polar(r, deg){ var a = (deg - 90) * Math.PI / 180; return [(r * Math.cos(a)).toFixed(2), (r * Math.sin(a)).toFixed(2)]; }
    function arcPath(r, a0, a1){
      if (a1 - a0 >= 359.9) a1 = a0 + 359.9;
      var p0 = polar(r, a0), p1 = polar(r, a1), large = (a1 - a0) > 180 ? 1 : 0;
      return "M" + p0[0] + " " + p0[1] + " A" + r + " " + r + " 0 " + large + " 1 " + p1[0] + " " + p1[1];
    }
    var R = 90; // the seasons ring's radius
    // The ring closes on itself but for a small seam at 12 o'clock (Version 200, Keren: "close the cycle — a small gap between
    // the start and the end"; 48° of open track before). GAP is the visible gap between the track's two rounded ends; the
    // years run from ORIGIN — set so the first run's rounded cap starts exactly at the seam's edge — round to the other edge.
    // Version 202: START is where the first season shape's rounded cap begins; the grey track starts LEAD° before it (its own
    // cap peeking out ahead of the shape) and runs round to SEAM_END, GAP° short of START — about five pixels on a phone — so
    // an open cycle's grey closes on its coloured start. (12° seam in 200, 8° in 201, both with the track ending at the seam.)
    /* Version 513, Keren, reading the Dot-Com ring: "year three is overlapping — there's no gap between Q1 93
       and Q2 93. I want even spacing between the rings. Also at the end of the cycle there's no grey overlap
       like at the beginning. Make sure every ring on the outer ring has equal spacing with the grey background
       and between one another."

       Both were real and measured before anything moved. The gaps between season shapes ran 6.84° to 9.41° —
       the short ones wherever a ONE-QUARTER season sat, because the inset was squeezed to leave the run a 0.6°
       core, and squeezing the inset is squeezing the gap. Two single-quarter seasons side by side (1993 Q1 and
       Q2, exactly where she looked) came out with a visible gap of about minus a tenth of a degree: touching.
       And the grey: 3.0° of track showed before the first shape and 0.00° after the last, because the arc was
       budgeted so the last cap landed exactly on the track's end.

       The end is easy: the cycle's arc gives LEAD° back, so the grey leads and trails by the same amount.

       The gaps are geometry, and the geometry is why this could not be fixed by tuning a number. A quarter of a
       twelve-year cycle is 7.45° of arc; a round cap on an 11-unit stroke is 7.0° across on its own. The mark
       was wider than its slot minus any gap at all, so equal gaps were IMPOSSIBLE at that width — the only
       reason they looked equal on shorter cycles is that there the slots are two and three times wider. So the
       ring thinned to whatever its own crowding allowed, which on the twelve-year cycle is 7.

       Version 514, Keren, seeing that ring: "I actually like the thinner look, because it matches the inner
       ring. Apply it to all the cycles." So 7 is the ring's width now, on every cycle, and the adaptive part
       only survives as a FLOOR: if a cycle ever runs long enough that 7 will not hold a quarter plus its two
       gaps, the mark thins further rather than the gaps closing. Today every cycle computes above 7 and takes
       7. Her reason is the better one and worth recording: at 11 the seasons ring was nearly twice the market
       band inside it and the two read as two instruments; at 7 against the band's 6 they read as one. */
    var START = 2.5, LEAD = 3, GAP = 5, ORIGIN = START - 1.2, SEAM_END = 360 + START - GAP;
    var MARGIN = 1.2, MIN_CORE = 0.6;   // the visible gap between two shapes is 2 × MARGIN, on every ring
    var ARC = SEAM_END - ORIGIN + MARGIN - LEAD, degPerYear = ARC / m.dialYears;   // LEAD° of grey at BOTH ends
    var quarterDeg = degPerYear / 4;
    var MOON_W = 7;   // V514: the ring's width, on every cycle — Keren, of the thinned Dot-Com ring
    var moonW = Math.max(5.5, Math.min(MOON_W, R * (quarterDeg - 2 * MARGIN - MIN_CORE) * Math.PI / 180));
    // the track stays 5 units wider than the mark it holds, which is the relationship the dial has always had
    // (16 around 11) — otherwise a thinned ring reads as a wire lying in a groove rather than as the ring
    var trackW = moonW + 5, capDegT = (trackW / 2) / R * 180 / Math.PI;
    var capDegM = (moonW / 2) / R * 180 / Math.PI;
    var parts = ['<path class="dial-track" d="' + arcPath(R, START - LEAD + capDegT, SEAM_END - capDegT) + '"></path>']; // caps reach START−LEAD and SEAM_END
    var quarters = []; // one entry per moon, in ring order — what the hub reads out and what the badge scrubs across
    // (the coral drop that sat in the seam, Clue's day-1 mark, left in Version 199 — Keren, with the DSM's dial: "a lot going on")

    // One round-ended shape per season (Version 177, Keren: "divide the outer wheel by season, not by year"; the two Springs
    // and the two Autumns each one season since Version 180): consecutive quarters in one season form a run, inset at both
    // ends by the stroke's cap and the gap the market band uses, so a hair of track shows where the season changed. Inside a
    // run the quarters are butt-joined (a hair of overlap hides the anti-aliased seam) in the season's colour, and a short
    // round-capped stub under the first and last quarter rounds the run's ends. A one-quarter season on a long cycle has
    // no room for two caps, so a short run keeps a 0.6° core and lets its caps reach toward the neighbours instead.
    var segs = m.track.filter(function(seg){ return !seg.isNow && seg.to > seg.from; });
    var insetDeg = capDegM + MARGIN, runs = [];   // V513: derived from the ring's own width, never squeezed
    segs.forEach(function(seg){
      var last = runs[runs.length - 1];
      if (!last || seasonGroup(last[last.length - 1].seg.season) !== seasonGroup(seg.season)) runs.push(last = []);
      last.push({ seg:seg, a0:ORIGIN + seg.from * degPerYear, a1:ORIGIN + seg.to * degPerYear });
    });
    runs.forEach(function(run){
      /* Version 513: the inset is the SAME on every run, so the gap between any two shapes is 2 × MARGIN and
         nothing else. A run still cannot be shorter than MIN_CORE — that core is the hover target as well as
         the mark — so a run with no room left after its two insets keeps the core and takes it from its own
         middle, symmetrically, rather than from the gap beside it. `moonW` above is chosen so that even a
         one-quarter run clears this, which is what makes the case exact rather than nearly exact. */
      var r0 = run[0].a0, r1 = run[run.length - 1].a1;
      var v0 = r0 + insetDeg, v1 = r1 - insetDeg;
      if (v1 - v0 < MIN_CORE){ var mid = (r0 + r1) / 2; v0 = mid - MIN_CORE / 2; v1 = mid + MIN_CORE / 2; }
      run.forEach(function(q, k){
        var s0 = v0 + (v1 - v0) * k / run.length, s1 = v0 + (v1 - v0) * (k + 1) / run.length;
        var step = seasonGroup(q.seg.season), i = quarters.length, last = k === run.length - 1;
        quarters.push({ seg:q.seg, a0:q.a0, a1:q.a1, mid:(q.a0 + q.a1) / 2 });
        if (k === 0) parts.push('<path class="dial-moon cap ' + step + '" data-cap="' + i + '" d="' + arcPath(R, v0, v0 + 0.5) + '"></path>');
        if (last) parts.push('<path class="dial-moon cap ' + step + '" data-cap="' + i + '" d="' + arcPath(R, v1 - 0.5, v1) + '"></path>');
        parts.push('<path class="dial-moon ' + step + '" data-q="' + i + '" d="' + arcPath(R, s0, last ? s1 : s1 + 0.35) + '"></path>'); // one flat colour per run (Version 196; edge fades in 191–195)
      });
    });
    // The market band, just inside the seasons: one segment per calendar year, teal if the S&P 500's total return
    // closed up, coral if down (the Calendar's colors), the current year year-to-date and lighter.
    var RM = 75, peakMark = "";
    for (var y = era.from; y <= m.endYear; y++){
      var isYtd = m.ongoing && y === calendarTodayY, ret = sp500AnnualReturns[y];
      if (ret == null) continue;
      var capDeg = 3 / RM * 180 / Math.PI + 1.2;
      var a0 = ORIGIN + (y - era.from) * degPerYear + capDeg;
      var a1 = ORIGIN + (isYtd ? m.elapsedYears : (y - era.from + 1)) * degPerYear - capDeg;
      if (a1 <= a0) continue;
      parts.push('<path class="dial-mkt ' + (ret >= 0 ? "up" : "down") + (isYtd ? " ytd" : "") + '" data-year="' + y + '" d="' + arcPath(RM, a0, a1) + '"></path>');
      // the cycle's peak: a pale disc with a white dot on the band, Clue's ovulation mark — in the middle of the most
      // profitable year's segment, since the whole year is the peak (Version 158; at the year's end before)
      if (y === m.peakYear){
        var pk = polar(RM, (a0 + a1) / 2);
        peakMark = '<g class="dial-peak ' + (ret >= 0 ? "up" : "down") + '" data-year="' + y + '" transform="translate(' + pk[0] + ' ' + pk[1] + ')"><circle class="disc" r="5.2"></circle><circle class="dot" r="1.9"></circle></g>';
      }
    }
    if (peakMark) parts.push(peakMark); // after the band, so it sits on top of it
    // The badge says "Year N" — today's position for the open cycle, the cycle's length for a closed one — and sits
    // flush after the last quarter (or at the present, whichever is later), so the ring reads as one continuous run.
    // When the cycle fills the ring there is no room for it before the seam, so it sits on the seam itself, a clasp
    // where the cycle closed (Version 200).
    var endDeg = ORIGIN + m.elapsedYears * degPerYear;
    var lastMoonEnd = ORIGIN + m.track.filter(function(x){ return !x.isNow; }).reduce(function(mx, x){ return Math.max(mx, x.to); }, 0) * degPerYear;
    var BADGE_R = 13, BADGE_AT = R + 3, badgeHalf = BADGE_R / BADGE_AT * 180 / Math.PI;
    var badgeDeg = Math.max(endDeg, lastMoonEnd + (BADGE_R + 3.5) / R * 180 / Math.PI);
    if (badgeDeg + badgeHalf > SEAM_END) badgeDeg = 360;
    var bp = polar(BADGE_AT, badgeDeg);
    // ---- horizontal centring (Version 414, Keren: "make sure the padding from the left and the right of the
    // cycle inside the container are equal — that is the only math we need to look at") ----
    // Version 413 nudged the wheel left to balance the INK, because the coloured arc sits on the right through
    // the first half of a cycle. That was the wrong trade and she called it: it bought optical balance with real
    // asymmetry, 9.8px of padding on the left against 26.2px on the right at phone width. The rule here is the
    // simple one — the ring is a circle and a circle is centred when its two margins match — so there is no
    // offset, derived or otherwise, and nothing for `drawDial` to set. The centring is the layout's job, and
    // .season-wheel-wrap does it; see the rule there.
    parts.push('<g class="dial-today-badge" transform="translate(' + bp[0] + ' ' + bp[1] + ')" style="pointer-events:auto">' +
      '<circle r="' + BADGE_R + '"></circle><text class="lbl" y="-3.6">YEAR</text><text class="num" y="7.4">' + m.yearIndex + '</text></g>');
    // Quarter dots ahead on the inner ring — the rest of a typical cycle, as Clue dots the days ahead (open cycle only).
    // They run to the track's rounded end at the seam (Keren, Sep 19, 2026: the dots stopped short of it), not just to the
    // end of the years' arc, so the ring reads as one continuous run up to the seam.
    if (m.ongoing){
      var degPerQ = degPerYear / 4, dotFrom = badgeDeg + (BADGE_R + 4) / R * 180 / Math.PI, dotTo = SEAM_END - 1; // to the track's end at the seam
      for (var q = 0; q < (m.dialYears + 2) * 4; q++){
        var qa = ORIGIN + (q + 0.5) * degPerQ;
        if (qa <= dotFrom || qa >= dotTo) continue;
        var qp = polar(RM, qa);
        parts.push('<circle class="dial-dot" cx="' + qp[0] + '" cy="' + qp[1] + '" r="1.7"></circle>'); // the band only (Version 202; the seasons ring too in 201)
      }
    }
    var dialEl = document.getElementById("cycle-dial");
    // V513: the ring's own width, decided above from how crowded this cycle's ring is, handed to the stylesheet
    dialEl.style.setProperty("--moon-w", moonW.toFixed(2));
    dialEl.style.setProperty("--track-w", trackW.toFixed(2));
    dialEl.style.setProperty("--moon-w-active", (moonW + 5).toFixed(2));
    dialEl.innerHTML = parts.join("");
    // What the scrubber and the hover need after the ring is drawn: the quarters in ring order, the badge's resting
    // place, and the polar helper at this ring's radius.
    dialState = { m:m, quarters:quarters, badgeDeg:badgeDeg, badgeAt:BADGE_AT, polar:polar, parked:null }; // parked: the quarter the badge was left on, or null at home
    hubShowDefault();
  }
  // ---- the Appearance row (Version 198): System · Light · Dark, kept in localStorage; System clears the choice ----
  function wireThemeChoice(){
    var group = document.getElementById("theme-toggle"), current = document.getElementById("appearance-current"); if (!group) return;
    var names = { system:"Use system setting", light:"Light mode", dark:"Dark mode" };
    function paint(){
      var cur = document.documentElement.getAttribute("data-theme") || "system";
      group.querySelectorAll("[data-theme-choice]").forEach(function(b){ b.setAttribute("aria-checked", b.getAttribute("data-theme-choice") === cur ? "true" : "false"); });
      if (current) current.textContent = names[cur];
    }
    group.addEventListener("click", function(e){
      var b = e.target.closest("[data-theme-choice]"); if (!b) return;
      var v = b.getAttribute("data-theme-choice");
      if (v === "system") document.documentElement.removeAttribute("data-theme"); else document.documentElement.setAttribute("data-theme", v);
      try{ if (v === "system") localStorage.removeItem("gyneconomy-theme"); else localStorage.setItem("gyneconomy-theme", v); }catch(err){}
      paint();
    });
    paint();
  }
  GYN.step("wireThemeChoice", wireThemeChoice, "wire"); wireThemeChoice();
  // ---- the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours
  // before), the market band's colors, one line on the badge. Built once — nothing in it changes per cycle — and opened by
  // the legend button in the card's corner.
  function renderCycleKicker(){
    var html = '<h4>Legend</h4><span class="marker-sub">The outer ring is the cycle season by season — one shape per season, from the quarter it began to the quarter it ended, in its colour; the band inside is the stock market, one segment per year.</span>' +
      '<div class="legend-head">Seasons</div><div class="legend-rows">' +
      [["winter","Winter","below the range"],["spring","Spring","below or within the range"],["summer","Summer","above the range"],["autumn","Autumn","within or above the range"]].map(function(r){ // Winter first (Version 193)
        return '<div class="legend-row"><span class="season-sw ' + r[0] + '"></span>' + r[1] + '<small>' + r[2] + '</small></div>';
      }).join("") + '</div>' +
      '<p class="caption">The seasons wear the temperature\u2019s colours: periwinkle below the 1–3% range, orange above it — deep where a season sits wholly outside the range (Winter, Summer), light where it straddles it (Spring, Autumn). Tap a quarter to read which season it was in, and why, in the centre.</p>' +
      '<div class="legend-head">S&amp;P 500</div><div class="legend-rows">' +
      '<div class="legend-row"><span class="bar" style="background:var(--ovulate)"></span>Bull year<small>positive return</small></div>' +
      '<div class="legend-row"><span class="bar" style="background:var(--bleed-mid)"></span>Bear year<small>negative return</small></div>' +
      '<div class="legend-row"><span class="bar ytd" style="background:var(--ovulate)"></span>Year in progress<small>in progress</small></div>' +
      '<div class="legend-row"><svg viewBox="-7 -7 14 14" aria-hidden="true"><circle r="5.2" fill="var(--surface)" stroke="var(--ovulate)" stroke-width="2"></circle><circle r="1.9" fill="var(--ovulate)"></circle></svg>Peak year<small>highest return</small></div>' +
      '</div>' +
      '<div class="legend-head">The ring\u2019s span</div>' +
      '<p class="caption">An open cycle\u2019s ring is scaled to <b>' + typicalCycleYears + ' years</b>, and the pale dots are what is left of one: a typical full cycle \u2014 one bull market and the bear market that ends it \u2014 has run about five to six and a half years across the long record. A cycle that outlasts it extends the ring instead of overflowing it, which is why the Dot-Com ring spans twelve. It is a typical length, not a forecast.</p>' +
      '<div class="src">' + srcHtml(typicalCycleSrc) + '</div>' +
      '<p class="caption">Press and hold the year badge and drag round the ring to move between quarters; it stays where you leave it, and dragging it back past the last quarter — or tapping anywhere outside the dial — returns it to today. Hover or tap any quarter on the ring to read it in the centre.</p>';
    var idx = detailSlot(html);
    document.getElementById("cycle-kicker").innerHTML = "Gyneconomy" + '<button type="button" class="info-btn expand-btn" data-detail-idx="' + idx + '" aria-label="Legend" title="Legend">i</button>';
  }
  GYN.step("renderCycleKicker", renderCycleKicker, "render"); renderCycleKicker();
  // ---- the hub: the reading inside the circle ----
  // The default is the cycle's own reading (today's for the open cycle, the closing quarter's for a closed one); hovering
  // or tapping a moon, or scrubbing the badge round the ring, swaps in that quarter until the pointer leaves.
  var dialState; // set by drawDial; declared without an initializer so this line can't reset it if a render has already run
  // The hub's popup: one slot in detailTexts, rewritten whenever the hub changes, so the link always opens the quarter
  // on show (Keren, Sep 19, 2026: "a link below Autumn that will open a pop up with all of this quarter's information").
  var hubDetailIdx = detailTexts.length; detailTexts.push("");
  // The big word is the season, the small rose line under it the theme (Version 181, Keren: "switch them"; the other way round
  // before). The element ids kept their names.
  function hubSet(dateHtml, theme, meta, popupHtml){
    document.getElementById("season-wheel-hub-date").innerHTML = dateHtml;
    var themeEl = document.getElementById("season-wheel-hub-theme");
    themeEl.textContent = meta.name; themeEl.classList.remove("bull", "bear");
    // the theme IS the link (Version 248): "Inflation ›" rather than the theme and then a "This season ›" line under it
    var who = theme && theme !== meta.name ? theme : "";
    document.getElementById("season-wheel-hub-detail").innerHTML = !who ? "" :
      (popupHtml
        ? '<button type="button" class="details-link who" data-detail-idx="' + hubDetailIdx + '">' + who + '<span class="who-chev" aria-hidden="true">\u203a</span></button>'
        : '<div class="who">' + who + '</div>');
    detailTexts[hubDetailIdx] = popupHtml || "";
  }
  // The hub's popup for one quarter of a cycle — prose, not figures (see inside).
  function quarterPopup(m, seg, i, isPresent){
    var meta = wheelMeta[seg.season], era = m.era;
    var yearN = Math.floor(seg.from) + 1;
    var when = isPresent ? (m.ongoing ? asOfLabel() : "The cycle's close, " + monthLabel(m.endMonth)) : qLabel(seg.q);
    /* Version 505, Keren: "Summer, Inflation, Inflation — it repeats." It did: the title carries the THEME
       and the line under it carried `seasonTitle`, which is the name AND the theme again. The sub-line takes
       the season's name and its body term instead, so the two lines say two things. */
    var head = '<h4>' + when + ' · ' + (meta.theme || meta.name) + '</h4>' +
      '<span class="marker-sub">' + meta.name + (meta.altName ? ' · ' + meta.altName : '') +
      ' · year ' + yearN + ' of the ' + era.name + (m.ongoing ? ", since " + era.from : ", " + era.from + "–" + era.to) + '</span>';
    // every quarter reads as prose (Version 165 for the present, 167 for any quarter the badge is parked on — Keren:
    // "the data already exists in the app"): the cycle's note for the present, then the season explained the way the
    // Content tab does — in the economy, in the body, what usually comes next — with none of the figures, which the
    // cards carry (the data popup of Versions 116–166 is gone)
    var reading = seasonReading[seg.season] || {};
    return head +
      (isPresent ? '<p class="caption" style="font-family:\'Cormorant Garamond\',Georgia,serif;font-style:italic;font-size:20px;line-height:1.4;color:var(--text-primary)">' + (m.ongoing ? cycleNowNote : era.blurb) + '</p>' : '') +
      (reading.economy ? '<div class="reading-block"><h5>In the economy</h5><p>' + reading.economy + '</p></div>' : '') +
      (reading.body ? '<div class="reading-block"><h5>In the body</h5><p>' + reading.body + '</p></div>' : '') +
      (reading.next ? '<div class="reading-block"><h5>What usually comes next</h5><p>' + reading.next + '</p></div>' : '') +
      /* Version 505: the two blocks the Analysis tab's "Reading for this season" had that this popup did not.
         The other three were the same text from the same `seasonReading` entry, drawn twice \u2014 so the section
         went and these came here, where a reader is already asking about this season. */
      (reading.watch && reading.watch.length
        ? '<div class="reading-block"><h5>What to watch for the turn</h5><ul class="reading-watch">' +
            reading.watch.map(function(w){ return '<li>' + w + '</li>'; }).join("") + '</ul></div>' : '') +
      (reading.fromTheBook && reading.fromTheBook.length
        ? '<div class="reading-book"><h5>From the book</h5>' +
            reading.fromTheBook.map(function(x){
              return '<blockquote>' + x.text +
                (x.title ? '<br><span class="marker-sub">\u2014 ' + x.title + '</span>' : '') + '</blockquote>';
            }).join("") + '</div>' : '');
  }
  function hubShowDefault(){
    if (dialState.parked != null){ hubShowQuarter(dialState.parked); return; }
    var m = dialState.m, meta = wheelMeta[m.season], qs = dialState.quarters, last = qs[qs.length - 1];
    // the present is the reading after the last moon: the badge's own quarter
    var presentSeg = { q:last ? last.seg.q : m.reading.gdpLatest.q, from:last ? last.seg.from : 0, season:m.season, reading:m.reading };
    document.querySelector(".season-wheel-hub").classList.remove("away");
    hubSet(m.ongoing ? hubTodayHtml() : "<b>Closed,</b> " + monthLabel(m.endMonth),
           meta.theme || meta.name, meta, quarterPopup(m, presentSeg, qs.length, true));
  }
  function hubShowQuarter(i){
    var q = dialState.quarters[i]; if (!q) return;
    var meta = wheelMeta[q.seg.season];
    document.querySelector(".season-wheel-hub").classList.add("away");
    hubSet("<b>" + qLabel(q.seg.q) + "</b>", meta.theme || meta.name, meta, quarterPopup(dialState.m, q.seg, i, false));
  }
  function hubShowYear(y){
    var m = dialState.m, ret = sp500AnnualReturns[y], isYtd = m.ongoing && y === calendarTodayY;
    var cum = m.cumByYear[y];
    document.getElementById("season-wheel-hub-date").innerHTML = "<b>" + y + "</b>" + (isYtd ? " · Today" : "");
    var themeEl = document.getElementById("season-wheel-hub-theme");
    themeEl.textContent = ret >= 0 ? "Bull year" : "Bear year";
    themeEl.classList.toggle("bull", ret >= 0); themeEl.classList.toggle("bear", ret < 0);
    document.getElementById("season-wheel-hub-detail").innerHTML = '<div>S&amp;P 500 total return <b>' + (ret >= 0 ? "+" : "") + ret.toFixed(1) + '%</b></div>' +
      // the compounded return since the cycle's first year; on the most profitable year, the peak is named (Version 158)
      (cum != null ? '<div><b>' + (cum >= 0 ? "+" : "") + cum.toFixed(1) + '%</b> since ' + m.era.from + (y === m.peakYear ? ' · <b>Peak year</b>' : '') + '</div>' : "");
  }
  // The dial's interaction is wired once — the SVG element stays, only its contents change per cycle. Everything reads
  // out in the hub (Keren, Sep 19, 2026): hover or tap a moon for that quarter, hover or tap a band segment for that
  // year, and press and hold the year badge, then drag round the ring, to scrub quarter by quarter — the badge rides
  // along and snaps home on release.
  function renderCycleDial(){
    var dial = document.getElementById("cycle-dial"), hub = document.querySelector(".season-wheel-hub");
    var active = null; // the quarter's path and, at a year's end, the stub that rounds it
    function mark(i){
      if (active) active.forEach(function(el){ el.classList.remove("active"); });
      active = i == null ? null : Array.prototype.slice.call(dial.querySelectorAll('.dial-moon[data-q="' + i + '"], .dial-moon.cap[data-cap="' + i + '"]'));
      if (active) active.forEach(function(el){ el.classList.add("active"); });
    }
    var shown = false; // a hovered/tapped moon or year is in the hub (so a reset has something to undo)
    function readTarget(el){
      var t = el.closest && el.closest("[data-q], [data-year]");
      if (!t) return false;
      if (t.hasAttribute("data-q")){ var i = +t.getAttribute("data-q"); mark(i); hubShowQuarter(i); }
      else { mark(null); hubShowYear(+t.getAttribute("data-year")); }
      shown = true;
      return true;
    }
    // Back to the parked quarter, or home. Does nothing unless a hover/tap is showing: iOS Safari suppresses a tap's
    // click when the handlers that run before it (touchstart, the synthesized mousemove) change the page, so a reset
    // that rewrote the hub on every touch anywhere was silently killing every button on the phone (Keren, Sep 19,
    // 2026: "the buttons don't work on mobile"). Now an ordinary tap touches nothing.
    function reset(){ if (scrubbing || !dialState || !shown) return; shown = false; mark(dialState.parked); hubShowDefault(); }
    dial.addEventListener("mousemove", function(e){ if (scrubbing) return; if (!readTarget(e.target)) reset(); });
    dial.addEventListener("mouseleave", reset);
    dial.addEventListener("touchstart", function(e){ if (scrubbing) return; if (readTarget(e.target)) e.stopPropagation(); }, {passive:true});
    // a tap or click anywhere else clears a tapped moon — on click, after the tap has completed, never on touchstart
    document.addEventListener("click", function(e){
      if (dial.contains(e.target)) return;
      if (!scrubbing && dialState && dialState.parked != null){ shown = false; goTo(-1); return; } // a parked badge goes home (Version 203)
      reset();
    });

    // Press and hold the badge, drag round the ring: the angle under the pointer picks the quarter.
    var scrubbing = false;
    function angleAt(clientX, clientY){
      var box = dial.getBoundingClientRect(), cx = box.left + box.width / 2, cy = box.top + box.height / 2;
      var deg = Math.atan2(clientX - cx, -(clientY - cy)) * 180 / Math.PI; // 0 at 12 o'clock, clockwise
      return (deg + 360) % 360;
    }
    // -1 = home (the badge's own resting place, past the last moon — where it started), -2 = nowhere useful
    function quarterAt(deg){
      var qs = dialState.quarters, best = -1, bestDist = 1e9;
      var homeDist = Math.min(Math.abs(deg - dialState.badgeDeg), 360 - Math.abs(deg - dialState.badgeDeg));
      for (var i = 0; i < qs.length; i++){
        if (deg >= qs[i].a0 && deg <= qs[i].a1) return i;
        var d = Math.min(Math.abs(deg - qs[i].mid), 360 - Math.abs(deg - qs[i].mid));
        if (d < bestDist){ bestDist = d; best = i; }
      }
      if (homeDist <= bestDist && homeDist <= 30) return -1;
      return bestDist <= 30 ? best : -2; // off the moons (the empty rest of the ring, the seam): keep what is shown
    }
    function badgeTo(deg, yearNum){
      var b = dial.querySelector(".dial-today-badge"), p = dialState.polar(dialState.badgeAt, deg);
      if (!b) return;
      b.setAttribute("transform", "translate(" + p[0] + " " + p[1] + ")");
      // the number in the badge follows the quarter under the pointer — its year of the cycle — and the resting
      // number comes back on release (Keren, Sep 19, 2026)
      var n = b.querySelector(".num"); if (n) n.textContent = yearNum != null ? yearNum : dialState.m.yearIndex;
    }
    dial.addEventListener("pointerdown", function(e){
      var b = e.target.closest && e.target.closest(".dial-today-badge");
      if (!b || !dialState) return;
      scrubbing = true; b.classList.add("scrubbing"); hub.classList.add("scrubbing");
      try { b.setPointerCapture(e.pointerId); } catch(_){}
      e.preventDefault();
    });
    function goTo(i){ // i: a quarter index, or -1 for home
      dialState.parked = i >= 0 ? i : null;
      if (i >= 0){ mark(i); hubShowQuarter(i); badgeTo(dialState.quarters[i].mid, Math.floor(dialState.quarters[i].seg.from) + 1); }
      else { mark(null); hubShowDefault(); badgeTo(dialState.badgeDeg); }
    }
    dial.addEventListener("pointermove", function(e){
      if (!scrubbing) return;
      var i = quarterAt(angleAt(e.clientX, e.clientY));
      if (i === -2) return;
      goTo(i);
    });
    // The badge stays where it is let go (Keren, Sep 19, 2026) — the hub keeps that quarter, and the moon stays ringed;
    // dragging it back past the last moon, to where it started, brings today (or the close) back.
    function endScrub(e){
      if (!scrubbing) return;
      scrubbing = false;
      var b = dial.querySelector(".dial-today-badge");
      if (b) b.classList.remove("scrubbing");
      hub.classList.remove("scrubbing");
      if (dialState.parked != null) mark(dialState.parked);
    }
    dial.addEventListener("pointerup", endScrub);
    dial.addEventListener("pointercancel", endScrub);
  }
  GYN.step("renderCycleDial", renderCycleDial, "wire"); renderCycleDial();

  // ---- the temperature chart: a line through the cycle's months, against the 2% target (a line chart since Version 156) ----
  // Drawn at one of two widths so the phone gets a chart as tall as the reference's rather than a shrunken copy
  // of the desktop one; redrawn when the width crosses the breakpoint or the cycle changes.
  var tempState = { model:null, key:null, trend:null };
  // The two charts share one crosshair (Version 157): each registers its own show/hide here as it is drawn, and either
  // chart's pointer drives both. drawTemperature resets the list before it draws the pair.
  var chartLink = { show:[], hide:[] }; // no longer used to link the two charts (Version 206); kept so drawTemperature's reset is harmless
  // The heat ramp's five steps (Version 257, shared in Version 260 so the peek and the page cannot drift apart).
  // Binned by the reading itself rather than by rank, so the same CPI is always the same colour.
  // Volume's step, the ramp's counterpart to heatStep (Version 389; direction corrected in Version 390).
  // Thresholds are the reading's own landmarks: below zero (the stock shrinking), then up through the 1960–2019
  // pace of 6.8%, to the 2020–21 flood. The CLASS NUMBER IS FLOW, NOT SIZE — v5 is the deepest shade and it
  // belongs to the contraction, not to the flood.
  //
  // Version 390, Keren: "when you lose a lot of blood it's dark red. So if you have a lot of blood in the system
  // — the money volume is really big — then it's a faint pink, because it's abundant. But if you're losing
  // money, then it's dark red, like heavy flow." Version 389 had it the other way round, mapping darkness onto
  // the SIZE of the reading the way a heat ramp maps it onto temperature. That is the wrong physiology: in a body
  // the deep colour is the blood LEAVING, and an abundant supply is the diffuse, pale state. So the ramp now runs
  // dark at the drain and pale at the flood.
  //
  // It also puts the ramp back in agreement with the app's severity convention, which Version 389 had quietly
  // crossed: the money stock contracting is the alarming state — five quarters in sixty-seven years — and it
  // is now the darkest thing on the chart, as it is on every other page. Magnitude is not lost with it, because
  // the columns keep their height: the 2021 spike is still the tallest bar by a distance, it simply reads as
  // flood rather than as haemorrhage. Height says how much, colour says which way the body is going.
  function m2Step(v){
    return v < 0 ? "v5" : v < 3 ? "v4" : v < M2_NORM ? "v3" : v < 12 ? "v2" : v < 20 ? "v1" : "v0";
  }
  function heatStep(v){
    if (v < 1) return "s0";                              // below the range: periwinkle, the app's cold
    return v < 2 ? "s1" : v < 3 ? "s2" : v < 4.5 ? "s3" : v < 6.5 ? "s4" : "s5";
  }
  function drawTemperature(m){
    var svg = document.getElementById("temp-svg"), el = svgEl;
    var TARGET = 2.0, RANGE_LO = 1.0, RANGE_HI = 3.0;
    var FUTURE = m.ongoing ? 8 : 3;    // the axis runs a few months past the last column, as the reference does
    var compact = window.innerWidth <= 640, key = m.era.from + "|" + compact;
    tempState.model = m;
    if (key === tempState.key) return;
    tempState.key = key;

    var startYear = m.era.from, data = m.cpi, last = data[data.length - 1], r = m.reading;
    function slotOf(mo){ return (parseInt(mo.slice(0, 4), 10) - startYear) * 12 + parseInt(mo.slice(5, 7), 10) - 1; }
    var lastSlot = slotOf(last.m), slots = lastSlot + 1 + FUTURE;
    var bySlot = {};
    data.forEach(function(d){ bySlot[slotOf(d.m)] = d; });
    var vals = data.map(function(d){ return d.v; });
    var minV = Math.min(0, Math.floor(Math.min.apply(null, vals)));
    var maxV = Math.max(RANGE_HI + 1, Math.ceil(Math.max.apply(null, vals)));
    var step = (maxV - minV) > 6 ? 2 : 1;
    minV = Math.floor(minV / step) * step; maxV = Math.ceil(maxV / step) * step;
    function stateOf(v){ return v > RANGE_HI ? "hot" : v < RANGE_LO ? "cold" : "within"; }
    // the ramp's five steps, by the reading itself rather than by rank, so the same CPI is always the same colour
    // whichever cycle is on screen
    function pct(v){ return v.toFixed(1) + "%"; }
    var tooltip = document.getElementById("temp-tooltip");

    var W = compact ? 400 : 780, H = compact ? 270 : 250, padL = AXIS.L, padR = AXIS.R, padB = 26;
    var tx0 = padL + ((W - padL - padR) / slots) * (lastSlot + 0.5);
    var valueRight = (W - padR - tx0) >= 84;          // room for the reading to the right of the end line?
    var padT = valueRight ? 46 : 62;                 // when not, it stacks under the date on the left, so the label needs more headroom
    var innerW = W - padL - padR, innerH = H - padT - padB;
    var slotW = innerW / slots;
    function xc(i){ return padL + slotW * (i + 0.5); }
    function y(v){ return padT + innerH - ((v - minV) / (maxV - minV)) * innerH; }
    svg.setAttribute("viewBox", "0 0 " + W + " " + H);
    svg.innerHTML = "";
    chartLink.show = []; chartLink.hide = [];

    // The fitted trend across the cycle's months, drawn but hidden until the row below is pressed (Version 279).
    // Version 274 left Temperature out of this because its chart already carries a bold plum AVERAGE line and two
    // plum lines meaning different things on one picture is a fault, not a feature. The toggle is what resolves it:
    // when the trend is asked for, the average steps back with the columns, so only one plum line is ever on screen.
    var tFit = (function(){
      var t = trendOf(vals, "points", "month");
      return t && t.fit && t.fit.n > 1 ? t : null;
    })();

    // the 1–3% band as a rounded track (the dial's own track, laid flat), the axis labels without gridlines, the 2% target dotted
    var bandH = y(RANGE_LO) - y(RANGE_HI);
    svg.appendChild(el("rect", {x:padL, y:y(RANGE_HI), width:innerW, height:bandH, rx:Math.min(10, bandH / 2), class:"temp-range"}));
    for (var g = minV; g <= maxV; g += step){
      /* V523: the app had TWO grid vocabularies — `.bt-grid`/`.bt-yl` on the eleven histories and
         `.grid-line fine`/`.axis-label` on these two Cycle-tab charts, which meant "change how a gridline
         looks" was two edits and only one of them was obvious. One now. The rows go from dashed to the
         histories' solid hairline, which is the visible half of the change. */
      if (g !== TARGET) svg.appendChild(el("line", {x1:padL, x2:W - padR, y1:y(g), y2:y(g), class:"bt-grid"})); // the 2% row is the target line
      var gl = el("text", {x:padL - 6, y:y(g) + 3, class:"bt-yl", "text-anchor":"end"});
      gl.textContent = g + "%";
      svg.appendChild(gl);
    }
    svg.appendChild(el("line", {x1:padL, x2:W - padR, y1:y(TARGET), y2:y(TARGET), class:"temp-target"}));
    if (W - padR - tx0 >= 70){ // the tag needs clear track to the right of the end line; otherwise the 2% tick says it
      var tl = el("text", {x:W - padR, y:y(TARGET) - 4, class:"temp-target-label", "text-anchor":"end"});
      tl.textContent = "2% target";
      svg.appendChild(tl);
    }

    // One column per month (Version 257), on the yellow-to-orange ramp: a magnitude gets a sequential encoding, and
    // for a temperature that ramp is also simply what heat looks like. Five steps, ordered by lightness so the picture
    // still reads as a ramp with the colour taken out; below the range they go periwinkle, which is what cold has
    // meant in this app since Version 197.
    var yT = y(TARGET), yBase = Math.min(padT + innerH, y(0));
    var colW = Math.max(2.2, Math.min(9, slotW * COL_FILL));
    data.forEach(function(d){
      var i = slotOf(d.m), cx = xc(i);
      svg.appendChild(el("path", {
        d:"M" + cx.toFixed(1) + "," + yBase.toFixed(1) + "L" + cx.toFixed(1) + "," + y(d.v).toFixed(1),
        "stroke-width":colW.toFixed(1), class:"temp-col " + heatStep(d.v)
      }));
    });
    // The average, the one saturated line in the picture, carrying its own value at the end — the move that makes the
    // reference chart work: every column is then read as above it or below it.
    var avgV = data.reduce(function(a, d){ return a + d.v; }, 0) / data.length;
    svg.appendChild(el("line", {x1:padL, x2:W - padR, y1:y(avgV), y2:y(avgV), class:"temp-avg"}));
    // Where to put its value: at the top left it lands on the tall 2022 columns and cannot be read. So the label is
    // placed in the clearest stretch of the line — the run of months whose columns stay furthest below it — and sits
    // on a --surface plate, the app's own treatment for a label floating over a plot.
    var avgText = "average " + avgV.toFixed(1) + "%", avgW = avgText.length * 5.6 + 8, avgY = y(avgV);
    var bestX = padL + 4, bestClear = -Infinity;
    for (var cx0 = padL + 2; cx0 + avgW <= W - padR - 2; cx0 += 6){
      var clear = Infinity;
      data.forEach(function(d){
        var px = xc(slotOf(d.m));
        if (px < cx0 - 3 || px > cx0 + avgW + 3) return;
        clear = Math.min(clear, y(d.v) - avgY);          // how far this column's top sits BELOW the line
      });
      if (clear === Infinity) clear = 1e6;               // no column under the label at all
      if (clear > bestClear){ bestClear = clear; bestX = cx0; }
    }
    // above the line when the columns beneath it are clear, below it when they are not
    var avgAbove = bestClear > 13;
    var plateY = avgAbove ? avgY - 15 : avgY + 3;
    svg.appendChild(el("rect", {x:bestX.toFixed(1), y:plateY.toFixed(1), width:avgW.toFixed(1), height:13, rx:3, class:"chart-label-plate"}));
    var avgL = el("text", {x:(bestX + 4).toFixed(1), y:(plateY + 9.6).toFixed(1), class:"temp-avg-label mono"});
    avgL.textContent = avgText;
    svg.appendChild(avgL);

    // the fit itself, in a group the CSS shows only while the trend is pressed (Version 279). Its ends carry the
    // fit's own values, so it needs no legend — the same contract the battery and diverging charts use.
    if (tFit){
      var fg = el("g", {class:"fit"});
      var fx0 = xc(slotOf(data[0].m)), fx1 = xc(slotOf(last.m));
      var fv0 = tFit.fit.intercept, fv1 = tFit.fit.intercept + tFit.fit.slope * (tFit.fit.n - 1);
      var fy0 = y(fv0), fy1 = y(fv1), fDown = fy1 > fy0;
      fg.appendChild(el("line", {x1:fx0.toFixed(1), y1:fy0.toFixed(1), x2:fx1.toFixed(1), y2:fy1.toFixed(1), class:"fit-line"}));
      [[fx0, fy0, fv0, !fDown, "start"], [fx1, fy1, fv1, fDown, "end"]].forEach(function(L){
        var txt = L[2].toFixed(1) + "%", w = txt.length * 7.4 + 8;
        var lx = L[4] === "end" ? L[0] - w : L[0], ly = L[3] ? L[1] - 19 : L[1] + 5;
        fg.appendChild(el("rect", {x:lx.toFixed(1), y:ly.toFixed(1), width:w.toFixed(1), height:15, rx:3, class:"chart-label-plate"}));
        var t = el("text", {x:(lx + w / 2).toFixed(1), y:(ly + 11.4).toFixed(1), class:"fit-lab mono", "text-anchor":"middle"});
        t.textContent = txt; fg.appendChild(t);
      });
      svg.appendChild(fg);
    }
    tempState.trend = tFit;   // the row below reads the same fit, so the picture and the sentence are one thing

    // year labels under the middle of each year's twelve columns — the growth chart below puts its bars and labels on
    // the same axis, so the two read as one timeline (every other year when the cycle is long enough to crowd them)
    var everyOther = (m.endYear - startYear + 1) > 6;
    for (var ly = startYear; ly <= m.endYear; ly++){
      var ls = (ly - startYear) * 12 + 5.5;
      if (ls >= slots) break;
      if (everyOther && (ly - startYear) % 2) continue;
      var yl = el("text", {x:xc(ls), y:H - 8, class:"bt-xl", "text-anchor":"middle"});
      yl.textContent = "'" + String(ly).slice(2);
      svg.appendChild(yl);
    }

    // the end line: today for the open cycle, the last month for a closed one — the date and the cycle year to its
    // left, the reading to its right (or stacked left when the axis leaves too little room on the right)
    var tx = xc(lastSlot);
    svg.appendChild(el("line", {x1:tx, x2:tx, y1:padT - 8, y2:padT + innerH, class:"temp-today-line"}));
    // today's badge on the tip of the last column — the dial's peak marker, a dark disc with a white dot
    var lastY = y(last.v) + (last.v >= TARGET ? 0 : 0);
    var badge = el("g", {class:"temp-badge", transform:"translate(" + tx.toFixed(1) + " " + lastY.toFixed(1) + ")"});
    badge.appendChild(el("circle", {r:5, class:"disc"})); badge.appendChild(el("circle", {r:1.75, class:"dot"}));
    svg.appendChild(badge);
    var readText = (r.cpiHot ? "hot" : r.cpiCold ? "cold" : "warm") + " · " + r.cpiDirection;
    var dateEl = el("text", {x:tx - 7, y:12, class:"temp-today-date", "text-anchor":"end"});
    dateEl.textContent = monthLabel(last.m);
    svg.appendChild(dateEl);
    var yearEl = el("text", {x:tx - 7, y:26, class:"temp-today-date", "text-anchor":"end"});
    yearEl.textContent = (m.ongoing ? "Cycle year " : "Closed · year ") + m.yearIndex;
    svg.appendChild(yearEl);
    var valueEl = el("text", {x:valueRight ? tx + 7 : tx - 7, y:valueRight ? 18 : 44, class:"temp-today-value", "text-anchor":valueRight ? "start" : "end"});
    valueEl.textContent = pct(r.cpiNow);
    svg.appendChild(valueEl);
    var readEl = el("text", {x:valueRight ? tx + 7 : tx - 7, y:valueRight ? 32 : 57, class:"temp-today-read", "text-anchor":valueRight ? "start" : "end"});
    readEl.textContent = readText;
    svg.appendChild(readEl);

    // hover: crosshair + a filled dot on the reading + tooltip on the nearest month (slots past the end read as the end;
    // a month with no reading says so)
    var crosshair = el("line", {x1:0, x2:0, y1:padT, y2:padT + innerH, class:"crosshair"});
    svg.appendChild(crosshair);
    var hoverDot = el("circle", {r:4, class:"chart-hover-dot"});
    svg.appendChild(hoverDot);
    var hit = el("rect", {x:padL, y:0, width:innerW, height:H, class:"hero-hit"});
    svg.appendChild(hit);
    function showAt(i){
      if (i > lastSlot) i = lastSlot;
      var d = bySlot[i], px = xc(i);
      crosshair.setAttribute("x1", px); crosshair.setAttribute("x2", px); crosshair.setAttribute("opacity", 1);
      if (d){ hoverDot.setAttribute("cx", px); hoverDot.setAttribute("cy", y(d.v)); hoverDot.setAttribute("class", "chart-hover-dot " + stateOf(d.v)); hoverDot.style.opacity = 1; }
      else hoverDot.style.opacity = 0;
      var mo = startYear + Math.floor(i / 12) + "-" + ("0" + ((i % 12) + 1)).slice(-2);
      tooltip.innerHTML = d
        ? "<b>" + monthLabel(d.m) + "</b>CPI " + pct(d.v) + " · " + (stateOf(d.v) === "within" ? "warm" : stateOf(d.v))
        : "<b>" + monthLabel(mo) + "</b>no reading";
      tooltip.style.left = (px / W * 100) + "%";
      tooltip.style.top = ((d ? Math.min(y(d.v), yT) : yT) / H * 100) + "%";
      tooltip.style.opacity = 1;
    }
    function hide(){ crosshair.setAttribute("opacity", 0); hoverDot.style.opacity = 0; tooltip.style.opacity = 0; }
    // the shared helper divides innerW into (count − 1) steps from padL; offsetting by half a slot makes step i land on month i's center
    attachHoverTracking(hit, svg, W, padL + slotW / 2, innerW - slotW, slots, showAt, hide); // its own crosshair (Version 206; shared with Growth in 157–205)
    drawGrowth(m, { W:W, padL:padL, padR:padR, slots:slots, slotW:slotW, xc:xc, startYear:startYear, compact:compact, everyOther:everyOther });
  }
  // ---- the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align) ----
  // A line through the cycle's quarters (real GDP, year over year, each on its middle month), the cycle's average as a
  // dashed line; the growth trend is read out in words at the end (its pink line left in Version 161).
  function drawGrowth(m, sc){
    var svg = document.getElementById("growth-svg"), el = svgEl, era = m.era, g = m.growth, r = m.reading;
    var startYear = sc.startYear, endM = m.endMonth; // the last month on the Temperature axis bounds the quarters shown
    var endKey = parseInt(endM.slice(0, 4), 10) * 12 + parseInt(endM.slice(5, 7), 10);
    // whichever economy is chosen (Version 225): the United States by default, otherwise one of the peers, read exactly
    // the same way — its own year-over-year quarters, its own regime, its own average over what is shown
    var shown = gdpPeers.filter(function(c){ return c.on; })[0] || null;
    function inCycle(q){
      var yy = parseInt(q.slice(0, 4), 10), qn = parseInt(q.slice(6), 10);
      return yy >= era.from && (yy * 12 + qn * 3) <= endKey;
    }
    var qs = shown
      ? Object.keys(shown.q).sort().filter(inCycle).map(function(q){ return { q:q, v:shown.q[q] }; })
      : gdpQuarterlyYoY.filter(function(d){ return inCycle(d.q); });
    function regimeOf(d){ return shown ? (shown.regime[d.q] || (d.v >= 0 ? "expansion" : "contraction")) : quarterRegime(d); }
    var W = sc.W, H = sc.compact ? 270 : 250, padL = sc.padL, padR = sc.padR, padB = 26;
    var last = qs[qs.length - 1];
    function slotOfQ(q){ var yy = parseInt(q.slice(0, 4), 10), qn = parseInt(q.slice(6), 10); return (yy - startYear) * 12 + (qn - 1) * 3 + 1; } // the quarter's middle month
    var lastSlot = last ? slotOfQ(last.q) : 0;
    var tx = sc.xc(lastSlot), valueRight = (W - padR - tx) >= 46, padT = 28; // just the reading above the line now (Version 214)
    var innerW = W - padL - padR, innerH = H - padT - padB;
    var vals = qs.map(function(d){ return d.v; });
    var lo = Math.min(-1, Math.floor(Math.min.apply(null, vals.concat([0])))), hi = Math.max(2, Math.ceil(Math.max.apply(null, vals.concat([1])))) + 1;
    var step = (hi - lo) > 8 ? 2 : 1; lo = Math.floor(lo / step) * step; hi = Math.ceil(hi / step) * step;
    function y(v){ return padT + innerH - ((v - lo) / (hi - lo)) * innerH; }
    var tooltip = document.getElementById("growth-tooltip");
    tooltip.style.opacity = 0; // a redraw (a new cycle, a new economy) leaves no stale reading hanging over the plot
    svg.setAttribute("viewBox", "0 0 " + W + " " + H);
    svg.innerHTML = "";

    // axis labels (no gridlines, as on the Temperature chart), the zero line dotted
    for (var t = lo; t <= hi; t += step){
      if (t !== 0) svg.appendChild(el("line", {x1:padL, x2:W - padR, y1:y(t), y2:y(t), class:"bt-grid"})); // the zero row is the zero line
      var gl = el("text", {x:padL - 6, y:y(t) + 3, class:"bt-yl", "text-anchor":"end"});
      gl.textContent = t + "%";
      svg.appendChild(gl);
    }
    var y0 = y(0);
    svg.appendChild(el("line", {x1:padL, x2:W - padR, y1:y0, y2:y0, class:"temp-target"}));
    // the cycle's average (closed years, dashed) behind the line
    var firstSlot = qs.length ? slotOfQ(qs[0].q) : 0;
    // the cycle's own average for the United States (its closed years); for another economy, the mean of what is drawn
    var shownAvg = shown ? vals.reduce(function(a, b){ return a + b; }, 0) / (vals.length || 1) : g.avg;
    var avgX2 = sc.xc(lastSlot) + sc.slotW, avgY = y(shownAvg);
    svg.appendChild(el("line", {x1:sc.xc(firstSlot) - sc.slotW, x2:avgX2, y1:avgY, y2:avgY, class:"gdp-era-avg"})); // behind the line
    // its label in the graph (Keren, Sep 19, 2026: "next to the dashed line") — after the line's end when there is room,
    // otherwise above its right end, flush with the axis
    var avgText = "average " + fmtSigned(shownAvg, 1) + "%", avgW = avgText.length * 6.1, avgH = 10;
    // candidate spots in order of preference — after the line's end on the line, else at either end above or below it —
    // the first whose box clears every reading (and the badge) wins; the phone's crowded end makes this necessary
    var avgPts = [];
    qs.forEach(function(d, i){ // the readings, plus points along the straight run to the next one so the line itself counts
      var px = sc.xc(slotOfQ(d.q)), py = y(d.v); avgPts.push({x:px, y:py});
      if (i < qs.length - 1){ var nx = sc.xc(slotOfQ(qs[i + 1].q)), ny = y(qs[i + 1].v); for (var k = 1; k < 4; k++) avgPts.push({x:px + (nx - px) * k / 4, y:py + (ny - py) * k / 4}); }
    });
    if (last) avgPts.push({x:tx, y:y(last.v)}); // the badge
    function hits(x1, y1){ // how many points the box (left/top x1,y1) covers; off the plot counts as many
      if (x1 < padL || x1 + avgW > W - padR) return 99;
      return avgPts.filter(function(pt){ return pt.x > x1 - 5 && pt.x < x1 + avgW + 5 && pt.y > y1 - 5 && pt.y < y1 + avgH + 5; }).length;
    }
    var x0 = sc.xc(firstSlot) - sc.slotW, cands = [
      {x:avgX2 + 6, y:avgY - avgH / 2 + 1}, {x:x0, y:avgY - avgH - 3}, {x:x0, y:avgY + 3},
      {x:W - padR - avgW, y:avgY - avgH - 3}, {x:W - padR - avgW, y:avgY + 3}, {x:avgX2 - avgW, y:avgY - avgH - 3}, {x:avgX2 - avgW, y:avgY + 3}
    ];
    var spot = null, best = Infinity;
    cands.forEach(function(c){ var h = hits(c.x, c.y); if (h < best){ best = h; spot = c; } }); // the first clear spot, else the least crowded
    // on a small surface chip (the DSM's treatment, Version 217): the label reads even where it crosses a line or a grid row
    svg.appendChild(el("rect", {x:(spot.x - 3).toFixed(1), y:(spot.y - 1.5).toFixed(1), width:(avgW + 6).toFixed(1), height:(avgH + 4).toFixed(1), rx:3, class:"chart-label-plate"}));
    var avgLbl = el("text", {x:spot.x.toFixed(1), y:(spot.y + avgH - 1.5).toFixed(1), class:"temp-target-label avg-label", "text-anchor":"start"});
    avgLbl.textContent = avgText;
    svg.appendChild(avgLbl);

    // the line (Version 156), on the Temperature chart's monthly axis (Keren, Sep 19, 2026: "align with inflation"): GDP is
    // published by quarter, so each quarter's figure sits on its middle month and the line runs smoothly between them —
    // green through the quarters the season model calls expansion, red through the ones it calls contraction (Version 219;
    // green above zero and red below it from Version 156 to 218 — but that is the level of growth, not its direction, so it
    // contradicted the word on the panel). The colour steps at the midpoint between the last quarter of one regime and the
    // first of the next. A wash to the zero line fading toward it, a hollow dot on each quarter (every other when the cycle
    // is long enough to crowd them).
    var bySlot = {}, pts = qs.map(function(d){ bySlot[slotOfQ(d.q)] = d; return {x:sc.xc(slotOfQ(d.q)), y:y(d.v)}; });
    var colW = Math.max(2.4, Math.min(10, sc.slotW * 3 * COL_FILL));
    qs.forEach(function(d, qi){
      var cx = sc.xc(slotOfQ(d.q));
      svg.appendChild(el("path", {
        d:"M" + cx.toFixed(1) + "," + y0.toFixed(1) + "L" + cx.toFixed(1) + "," + y(d.v).toFixed(1),
        "stroke-width":colW.toFixed(1),
        // two levels, because they are two different facts: the season model's falling trend, and a quarter that
        // actually shrank. A quarter can be both, and then the harder one wins.
        class:"gdp-col " + (d.v < 0 ? "below" : regimeOf(d) === "contraction" ? "neg" : "pos")
      }));
    });

    // (the pink trend line drawn here from Version 131 to 160 is gone — Keren, Sep 19, 2026: the end
    // read-out's "trend rising/falling" and the chip's tag already say it; the fit itself, r.growthSlopeQ, is unchanged)

    // year labels under mid-year, exactly where the Temperature chart puts them
    for (var ly = startYear; ly <= m.endYear; ly++){
      var ls = (ly - startYear) * 12 + 5.5;
      if (ls >= sc.slots) break;
      if (sc.everyOther && (ly - startYear) % 2) continue;
      var yl = el("text", {x:sc.xc(ls), y:H - 8, class:"bt-xl", "text-anchor":"middle"});
      yl.textContent = "'" + String(ly).slice(2);
      svg.appendChild(yl);
    }

    // the end: the reading alone on the end line, and the badge on it (Version 214, Keren: the quarter is on the axis, the
    // series and the trend are already said above and in the hover — "only leave the +2.1%")
    if (last){
      svg.appendChild(el("line", {x1:tx, x2:tx, y1:padT - 8, y2:padT + innerH, class:"temp-today-line"}));
      var valueEl = el("text", {x:valueRight ? tx + 7 : tx - 7, y:18, class:"temp-today-value", "text-anchor":valueRight ? "start" : "end"});
      valueEl.textContent = fmtSigned(last.v, 1) + "%";
      svg.appendChild(valueEl);
      var badge = el("g", {class:"temp-badge", transform:"translate(" + tx.toFixed(1) + " " + y(last.v).toFixed(1) + ")"});
      badge.appendChild(el("circle", {r:5, class:"disc"})); badge.appendChild(el("circle", {r:1.75, class:"dot"}));
      svg.appendChild(badge);
    }

    // hover / tap: the nearest quarter (any month-slot resolves to its quarter's point on the line)
    var crosshair = el("line", {x1:0, x2:0, y1:padT, y2:padT + innerH, class:"crosshair"});
    svg.appendChild(crosshair);
    var hoverDot = el("circle", {r:4, class:"chart-hover-dot"});
    svg.appendChild(hoverDot);
    var hit = el("rect", {x:padL, y:0, width:innerW, height:H, class:"hero-hit"});
    svg.appendChild(hit);
    function showAt(i){
      if (i > lastSlot + 1) i = lastSlot;
      var qi = Math.floor(i / 3) * 3 + 1, d = bySlot[qi]; if (!d){ hide(); return; } // this chart only; the Temperature chart keeps its reading
      var px = sc.xc(Math.min(i, lastSlot + 1)), qx = sc.xc(qi); // the crosshair on the hovered month (one line through both panels), the dot on the quarter's point
      crosshair.setAttribute("x1", px); crosshair.setAttribute("x2", px); crosshair.setAttribute("opacity", 1);
      hoverDot.setAttribute("cx", qx); hoverDot.setAttribute("cy", y(d.v)); hoverDot.setAttribute("class", "chart-hover-dot " + (regimeOf(d) === "contraction" ? "neg" : "pos")); hoverDot.style.opacity = 1;
      tooltip.innerHTML = "<b>" + qLabel(d.q) + " \u00b7 " + regimeOf(d) + "</b>" +
        (shown ? shown.name + " " : "real GDP ") + fmtSigned(d.v, 1) + "% YoY"; // the initials in the hover, where room is short (Version 223)
      tooltip.style.left = (px / W * 100) + "%";
      tooltip.style.top = (Math.min(y(d.v), y0) / H * 100) + "%";
      tooltip.style.opacity = 1;
    }
    function hide(){ crosshair.setAttribute("opacity", 0); hoverDot.style.opacity = 0; tooltip.style.opacity = 0; }
    attachHoverTracking(hit, svg, W, padL + sc.slotW / 2, innerW - sc.slotW, sc.slots, showAt, hide); // its own crosshair (Version 206)
  }
  function wireResize(){
    var resizeTimer = null;
    window.addEventListener("resize", function(){ clearTimeout(resizeTimer); resizeTimer = setTimeout(function(){ if (tempState.model) drawTemperature(tempState.model); }, 150); });
  }
  GYN.step("wireResize", wireResize, "wire"); wireResize();

  var growthDetail = '<h4>Growth per cycle</h4>' +
    '<p class="lede">Real GDP across this cycle, quarter by quarter, on the Temperature chart\u2019s axis so the years line up.</p>' +
    facts([
      'Each point is a quarter against <b>the same quarter a year earlier</b> \u2014 the reading the OECD, Eurostat and the World Bank headline, so any economy here can be read the same way.',
      'US news usually quotes a different figure for \u201cgrowth this quarter\u201d: that quarter against the one before it, compounded to a year. The two can differ without either being wrong.',
      '<b>Green is expansion, red is contraction</b> \u2014 the season model\u2019s own reading, the direction of the trend through the last six quarters.',
      'That trend turns about nine months after the line does, so the colour can stay red while a quarter or two rise. A season is a phase, not a print.',
      'The dashed line is the average over what is drawn; the badge is the latest quarter. Hover any quarter for its reading and its phase.',
      'The dropdown at the top right switches the economy \u2014 the United States, Israel, Japan or the European Union, one at a time.'
    ]) +
    '<div class="src">' + srcHtml(gdpSrc.concat([{t:"BEA via FRED — Real Gross Domestic Product, chained 2017 dollars (GDPC1)", u:"https://fred.stlouisfed.org/series/GDPC1"}]).concat(gdpPeerSrc)) + '</div>';

  // ---- the whole view, for one cycle ----
  function renderCycleView(m){
    var era = m.era, meta = wheelMeta[m.season], r = m.reading;
    drawDial(m);

    // temperature
    drawTemperature(m);
    // the (i) went in Version 287: this note is now the Temperature page's "More details" row, under Highlights
    document.getElementById("temp-kicker").textContent = "Temperature";
    document.getElementById("temp-sub").textContent = "CPI, year over year · the " + era.name + (m.ongoing ? ", since " + era.from : ", " + era.from + "–" + era.to);
    // the cycle's total price change, in the same box the Growth card gives its total expansion (Version 275;
    // renamed from "price rise" in Version 424, because the figure can be negative \u2014 see the note on the row)
    var infl = eraInflation(era), iy = infl.years;
    var tempStats = document.getElementById("temp-stats");
    tempStats.className = iy.length ? "cv-stats cycle-stats" : "cv-stats";
    var tempStatsHtml = iy.length
      ? '<div class="cv-kicker">Current cycle</div><div class="cv-stat"><div class="cv-stat-v">' + fmtSigned(infl.total, 0) +
        '%</div><div class="cv-stat-l"><span>total price change, ' +
        (iy.length === 1 ? String(iy[0]) : iy[0] + "–" + iy[iy.length - 1]) + '</span></div></div>'
      : "";
    // Core CPI went entirely in Version 378 (Keren: "drop the core CPI year over year, we don't need it \u2014 we are
    // only looking at the formal inflation rate, which is 3.4"). Version 376 had moved it into the container; the
    // right answer was that the page has one temperature, and a second one beside it invites a comparison the page
    // is not making.
    tempStats.innerHTML = tempStatsHtml;
    // the Temperature page's own copy, under its history chart (Version 373) \u2014 same figure, written here, so
    // the card and the page can never disagree about what this cycle cost



    // growth, year by year, and the market's year cards
    var g = m.growth;
    document.getElementById("growth-kicker").textContent = "Growth";   // likewise (Version 287)
    var gdpLabel = document.getElementById("subj-label-gdp"); // the drawer's row carries the title and its (i) (Version 213)
    if (gdpLabel) gdpLabel.textContent = "Growth";   // the note is the page's More details row (Version 287)
    document.getElementById("growth-sub").textContent = ""; // the chart's end read-out already names the series
    // the total expansion over the closed years as the card's big number (Keren, Sep 19, 2026: "put the number at a
    // prominent place"), its years beneath it with the trend word — the per-year rate is the "average" line in the graph
    var yrs = g.years, span = yrs.length ? (yrs.length === 1 ? String(yrs[0]) : yrs[0] + "–" + yrs[yrs.length - 1]) : "";
    var statsHtml = yrs.length
      ? '<div class="cv-kicker">Current cycle</div><div class="cv-stat"><div class="cv-stat-v">' + fmtSigned(g.total, 0) + '%</div><div class="cv-stat-l"><span>total growth, ' + span + '</span></div></div>'
      : "";
    var statsEl = document.getElementById("growth-stats");
    statsEl.className = yrs.length ? "cv-stats cycle-stats" : "cv-stats";
    statsEl.innerHTML = statsHtml;
    // the Growth page's own copy, under its history chart (Version 372) \u2014 written from the same figure, here,
    // so the two can never disagree about what this cycle is worth
    renderGrowthPhase(m);
    renderPeerPills(m);
    shownEraModel = m;
    shownEra = era;
  }
  // the tag says the phase of whatever the chart is drawing — the cycle's own reading for the United States, and for
  // another economy its latest regime by the same rule (Version 225)
  function renderGrowthPhase(m){
    var shown = gdpPeers.filter(function(c){ return c.on; })[0], reg = m.reading.regime;
    if (shown){ // the dropdown opposite already names the economy (Version 226)
      var qs = Object.keys(shown.regime).sort().filter(function(q){ return parseInt(q, 10) <= m.endYear; });
      reg = qs.length ? shown.regime[qs[qs.length - 1]] : reg;
    }
    document.getElementById("growth-phase").innerHTML = '<span class="tag ' + phaseClass(reg) + '">' + regimeArrow(reg) + growthShown(reg) + '</span>';
  }
  // The country picker under the Growth chart (Version 210, Keren: "a multiselect dropdown"; five pills in 209): a trigger
  // naming what is on, a panel of checkboxes grouped as the data groups them. Toggling a country redraws both charts.
  // Hidden for a cycle the World Bank series (2010–) does not reach.
  var PEER_CARET = '<svg class="peer-caret" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 3.5 L5 6.5 L8 3.5"/></svg>';
  function peerList(){ return gdpPeers; }
  function peerChosen(){ return peerList().filter(function(c){ return c.on; })[0] || null; }
  function peerTriggerHtml(){
    var on = peerChosen();
    return '<span id="peer-trigger-label">' + (on ? on.name : "United States") + '</span>' + PEER_CARET;
  }
  function renderPeerPills(m){
    var host = document.getElementById("growth-peers");
    // no other economy reaches this cycle, so there is nothing to switch to
    if (!peerList().some(function(c){ return Object.keys(c.q).some(function(k){ var yr = parseInt(k, 10); return yr >= m.era.from && yr <= m.endYear; }); })){
      host.innerHTML = ""; host.hidden = true; return;
    }
    host.hidden = false;
    // one economy at a time (Version 225): the chart shows whichever is chosen, the United States by default
    var rows = '<div class="peer-group">Show</div>' +
      '<label class="peer-row' + (peerChosen() ? "" : " on") + '"><input type="radio" name="peer-choice" data-code=""' + (peerChosen() ? "" : " checked") + '>' +
        '<span>United States</span><span class="code">US</span></label>' +
      peerList().map(function(c){
        return '<label class="peer-row' + (c.on ? " on" : "") + '"><input type="radio" name="peer-choice" data-code="' + c.code + '"' + (c.on ? " checked" : "") + '>' +
          '<span>' + c.name + '</span><span class="code">' + c.code.toUpperCase() + '</span></label>';
      }).join("");
    host.innerHTML = '<div class="peer-picker">' +
        '<button type="button" class="peer-trigger" id="peer-trigger" aria-haspopup="true" aria-expanded="false">' + peerTriggerHtml() + '</button>' +
        '<div class="peer-panel" id="peer-panel" hidden>' + rows + '</div>' +
      '</div>';
    var trigger = document.getElementById("peer-trigger"), panel = document.getElementById("peer-panel");
    function close(){ panel.hidden = true; trigger.setAttribute("aria-expanded", "false"); }
    trigger.addEventListener("click", function(evt){
      evt.stopPropagation();
      if (panel.hidden){ panel.hidden = false; trigger.setAttribute("aria-expanded", "true"); } else close();
    });
    panel.querySelectorAll("input[type=radio]").forEach(function(box){
      box.addEventListener("change", function(){
        var code = box.getAttribute("data-code");
        gdpPeers.forEach(function(c){ c.on = c.code === code; });
        panel.querySelectorAll(".peer-row").forEach(function(row){ row.classList.remove("on"); });
        box.parentElement.classList.add("on");
        trigger.innerHTML = peerTriggerHtml();
        close();
        if (shownEraModel) renderGrowthPhase(shownEraModel);
            if (tempState.model){ tempState.key = null; drawTemperature(tempState.model); } // redraws both charts (the key would otherwise skip the redraw)
      });
    });
    // one pair of document listeners for the life of the page, whichever panel is open (the picker is rebuilt per cycle)
    if (!renderPeerPills.bound){
      renderPeerPills.bound = true;
      document.addEventListener("click", function(evt){
        var pnl = document.getElementById("peer-panel"), trg = document.getElementById("peer-trigger");
        if (pnl && !pnl.hidden && !pnl.contains(evt.target) && !trg.contains(evt.target)){ pnl.hidden = true; trg.setAttribute("aria-expanded", "false"); }
      });
      document.addEventListener("keydown", function(evt){
        var pnl = document.getElementById("peer-panel"), trg = document.getElementById("peer-trigger");
        if (evt.key === "Escape" && pnl && !pnl.hidden){ pnl.hidden = true; trg.setAttribute("aria-expanded", "false"); trg.focus(); }
      });
    }
  }
  var shownEraModel = null;
  function showCycle(era){ if (shownEra !== era) renderCycleView(cycleModel(era)); }

  // ---------------- A cycle's season strip (Version 205, lifted out of the old Analysis tab in Version 259 so the
  // one cycle row can carry it) ----------------
  var stripGroupName = { winter:"Winter", spring:"Spring", summer:"Summer", autumn:"Autumn" };
  function seasonStripHtml(cyc, spanOverride){
    var groupName = stripGroupName;
    return (function(){
      var m = cycleModel(cyc), segs = m.track.filter(function(seg){ return !seg.isNow && seg.to > seg.from; }), runs = [];
      segs.forEach(function(seg){
        var g = seasonGroup(seg.season), last = runs[runs.length - 1];
        if (!last || last.g !== g) runs.push(last = { g:g, n:0, from:seg.q, to:seg.q, seasons:{} });
        last.n++; last.to = seg.q; last.seasons[seg.season] = true;
      });
      var done = segs.length;
      /* Version 517, Keren: "make the grey dots match the average cycle length — and when you have longer
         cycles, just make them full width. The dots can represent the average that is left, not compared to
         the longest cycle."
         Until now a CLOSED cycle was drawn against the LONGEST cycle on the board (48 quarters, the Dot-Com
         Cycle), so the COVID row read two-thirds grey and the dots meant "shorter than the dot-com cycle" —
         a comparison nobody asked the board for, and one that changes every time a long cycle is added. The
         scale is a typical cycle now, which is what the DIAL has always used and what the open cycle was
         already drawn against: the two halves of the app finally measure the same thing. So a cycle shorter
         than typical shows what is missing from one, a cycle at or past it fills the row, and inside any row
         the seasons keep their true proportions — flex does that on its own once the total is the row's own
         length. `spanOverride` stays in the signature for the market strip, which must share whatever number
         the seasons landed on. */
      var span = Math.max(spanOverride || 0, typicalCycleYears * 4,
                          cyc.ongoing ? Math.ceil(m.elapsedYears * 4) : done);
      var ahead = Math.max(0, span - done);
      var pills = runs.map(function(r){
        var names = Object.keys(r.seasons).map(function(k){ return seasonTitle(wheelMeta[k]); }).join(" · ");
        // the geometry goes inline, not in a class: the flex on this same element is inline, and a class cannot
        // out-weigh it — which is why .strip-run.one had never actually taken effect (Version 268)
        return '<span class="strip-run ' + r.g + (r.n === 1 ? ' one' : '') + '" style="' +
          (r.n === 1 ? 'flex:none;width:12px' : 'flex:' + r.n + ' 1 0') + '" title="' + groupName[r.g] + ' · ' + (r.n === 1 ? qLabel(r.from) : qLabel(r.from) + ' – ' + qLabel(r.to)) + ' · ' + names + '"></span>';
      }).join("");
      if (ahead) pills += '<span class="strip-dots" style="flex:' + ahead + ' 1 0" title="' + (cyc.ongoing ? "not yet run" : "shorter than a typical cycle") + '">' + new Array(ahead + 1).join("<i></i>") + '</span>';
      var lastSeg = segs[segs.length - 1];
      // one line, not a card's two-column footer — and without the S&P total, which the row's own chip carries
      var foot = cyc.ongoing
        ? 'Year <b>' + m.yearIndex + '</b> · now <b>' + wheelMeta[m.season].name + '</b>'
        : '<b>' + Math.round(m.elapsedYears) + ' years</b> · ended in <b>' + wheelMeta[lastSeg.season].name + '</b>';
      return { span:span, years:(cyc.ongoing ? m.yearIndex : Math.round(m.elapsedYears)),
               strip:'<div class="strip" role="img" aria-label="' + runs.map(function(r){ return groupName[r.g] + ' ' + r.n + (r.n === 1 ? ' quarter' : ' quarters'); }).join(', ') + '">' + pills + '</div>',
               foot:foot };
    })();
  }
  // The market over the same span, in the same clothes (Version 321). Measured in QUARTERS like the seasons above
  // it — a closed year is four, the year in progress is as far as today — so the two strips describe the same axis
  // and can be read against each other: where the market turned, and which season it turned in.
  function marketStripHtml(cyc, spanQ){
    var endY = cyc.ongoing ? calendarTodayY : cyc.to, years = [];
    for (var y = cyc.from; y <= endY; y++) if (sp500AnnualReturns[y] != null) years.push(y);
    if (!years.length) return "";
    var runs = [];
    years.forEach(function(yy){
      var ytd = cyc.ongoing && yy === calendarTodayY;
      var q = ytd ? Math.max(1, Math.round(cycleYtdFraction * 4)) : 4;
      var dir = sp500AnnualReturns[yy] >= 0 ? "up" : "down";
      var last = runs[runs.length - 1];
      if (!last || last.dir !== dir || last.ytd !== ytd) runs.push(last = { dir:dir, ytd:ytd, q:0, from:yy, to:yy });
      last.q += q; last.to = yy;
    });
    var done = runs.reduce(function(a, r){ return a + r.q; }, 0);
    // the seasons' span, not one of its own: two strips over one cycle must agree about how long the cycle is
    var span = Math.max(spanQ || 0, done);
    var ahead = Math.max(0, span - done);
    var pills = runs.map(function(r){
      var when = r.from === r.to ? String(r.from) : r.from + "–" + r.to;
      // the geometry goes inline for the same reason the seasons' does (Version 268): the flex is inline and a
      // class cannot out-weigh it
      return '<span class="strip-run mkt-' + r.dir + (r.ytd ? " ytd" : "") + (r.q <= 1 ? " one" : "") + '" style="' +
        (r.q <= 1 ? "flex:none;width:12px" : "flex:" + r.q + " 1 0") + '" title="' + when + " · S&P 500 " +
        (r.dir === "up" ? "up" : "down") + (r.ytd ? " so far" : "") + '"></span>';
    }).join("");
    if (ahead) pills += '<span class="strip-dots" style="flex:' + ahead + ' 1 0" title="' + (cyc.ongoing ? "not yet run" : "shorter than a typical cycle") + '">' +
      new Array(ahead + 1).join("<i></i>") + "</span>";
    return '<div class="strip mkt-strip" role="img" aria-label="S&P 500 by year: ' +
      runs.map(function(r){ return (r.from === r.to ? r.from : r.from + " to " + r.to) + " " + r.dir; }).join(", ") +
      '">' + pills + "</div>";
  }

  // A run is a capsule or a dot, and never the shape in between (Keren, Sep 20, 2026, on the COVID-19 cycle: "there is
  // an ellipse in the blue colour — I want it aligned, or if it's too short, make it a dot"). V267 stopped runs being
  // squeezed narrower than they are tall, which left a second awkward shape: a run 15px long against a 12px height,
  // too short to read as a stretch of time and too long to read as a moment. The rule is now stated in one number —
  // **a run must be at least half as long again as it is tall, or it becomes the dot the ring draws** — and the length
  // it gives up goes back to the runs that can use it, so the capsules that remain read more clearly than before.
  // It has to be measured rather than computed, because a run's length depends on the strip's width and on how many
  // of its neighbours have already settled; the pass takes the narrowest offender each time round and stops when
  // none is left. A strip with no width has not been shown yet, and settles when its tab opens.
  var STRIP_MIN_RATIO = 1.5;
  function settleStrips(){
    Array.prototype.forEach.call(document.querySelectorAll(".strip"), function(strip){
      if (!strip.clientWidth) return;
      var runs = Array.prototype.slice.call(strip.querySelectorAll(".strip-run"));
      // start from the flexible state every time, so a strip that gets wider can give a run its length back
      runs.forEach(function(r){
        if (r.classList.contains("one")) return;
        r.classList.remove("settled");
        r.style.flex = r.getAttribute("data-flex") || r.style.flex;
        r.style.width = "";
      });
      for (var pass = 0; pass < runs.length; pass++){
        var worst = null;
        runs.forEach(function(r){
          if (r.classList.contains("one") || r.classList.contains("settled")) return;
          var b = r.getBoundingClientRect();
          if (b.width < b.height * STRIP_MIN_RATIO && (!worst || b.width < worst.w)) worst = { el:r, w:b.width };
        });
        if (!worst) break;
        if (!worst.el.getAttribute("data-flex")) worst.el.setAttribute("data-flex", worst.el.style.flex);
        worst.el.classList.add("settled");
        worst.el.style.flex = "none";
        worst.el.style.width = "12px";
      }
    });
  }
  window.addEventListener("resize", (function(){
    var t = null;
    return function(){ clearTimeout(t); t = setTimeout(settleStrips, 120); };
  })());
