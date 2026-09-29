  /* ---------------- The timeline component ----------------
     Keren, V363: "I want us to establish a component system so that when I change one component, it changes
     across the board … we should have a bar similar to what we had of five year 10 year 25 50 max."
     ONE ordered list of stops; a page declares only which it offers, and the order on screen is always the
     order below, so a reader who learns the control on one page has learned it on all of them. A page shows
     only the stops its data can answer, computed rather than hand-kept: a window is offered only if the series
     is at least that deep. A page that offers "Current cycle" does not also offer 5Y: the open cycle is about
     five years long, and two stops that mean nearly the same thing are worse than one. */
  /* ---- Keren, V411: "make it consistent across the app — sometimes I see 50 years … we don't want to
     look at different pages and catch inconsistencies all the time." One vocabulary on every history; the
     cost is that on the long series the step from 25Y to Max is a jump of fifty years or more.
     Pressure has no 25Y: its yields start in 2005. That is a DATA limit, not a design inconsistency —
     fixable by carrying the 10-year yield back to 1953. */
  var TIMELINE_STOPS = [
    { key:"cycle",  label:"Current cycle" },   // Keren, V419: the front page's own words
    // 1Y is for Desire, whose series is three years deep and could otherwise answer no stop but Max. It is
    // part of the ONE vocabulary: a page gets it only by naming it in its own `stops`.
    { key:"1y",     label:"1Y",  span:1 },
    { key:"5y",     label:"5Y",  span:5 },
    { key:"10y",    label:"10Y", span:10 },
    { key:"25y",    label:"25Y", span:25 },
    { key:"max",    label:"Max", span:Infinity },
    { key:"cycles", label:"Cycles" },
    { key:"yoy",    label:"Year on year" }
  ];
  /* ---- Keren, V410: "when we look at the current cycle and click any one of the KPIs, I would assume as
     a user that we will see the current cycle data — instead we're seeing the 10-year default." So "cycle" is
     a real window, its span measured from the current cycle's own start. Computed when asked, not at
     declaration, because marketCycles is defined further down the file and a constant here would be
     undefined. Every window helper reads timelineSpan(), so they all follow it. ---- */
  function cycleSpanYears(){
    return (currentEra && currentEra.from) ? (calendarTodayY - currentEra.from + 1) : 5;
  }
  function timelineSpan(key){
    if (key === "cycle") return cycleSpanYears();
    for (var i = 0; i < TIMELINE_STOPS.length; i++) if (TIMELINE_STOPS[i].key === key) return TIMELINE_STOPS[i].span;
    return null;
  }
  // o.series (to measure depth and to anchor the window) or o.depth in years; o.stops is the keys the page offers.
  function timelineFor(o){
    var ser = o.series || [], n = ser.length;
    var depth = o.depth != null ? o.depth : (n ? yearOf(ser[n - 1]) - yearOf(ser[0]) + 1 : 0);
    var hasCycle = o.stops.indexOf("cycle") !== -1;
    return TIMELINE_STOPS.filter(function(r){
      if (o.stops.indexOf(r.key) === -1) return false;
      if (r.span == null || r.span === Infinity) return true;
      if (hasCycle && r.span === 5) return false;
      return depth >= r.span;
    });
  }
  // The window is anchored to the series' own last year, not to today: a series that ends in 2025 should show its
  // last five readings, not four readings and an empty year.
  function timelineWindow(series, key){
    var sp = timelineSpan(key);
    if (sp == null || sp === Infinity || !series.length) return series;
    var first = yearOf(series[series.length - 1]) - sp + 1;
    return series.filter(function(d){ return yearOf(d) >= first; });
  }
  /* ---- What a windowed record chart needs, once ----
     The scale is computed from the WINDOW and always contains the references the picture means, so a zoom
     changes how much you can read and never what it means. Every windowed history takes these two helpers
     rather than a y-scale, gridlines or axis years fixed to the whole series. */
  function windowScale(vals, must){
    var clean = vals.filter(function(v){ return v != null && isFinite(v); });
    if (!clean.length) return { lo:0, hi:1, ticks:[0, 1] };
    var lo = Math.min.apply(null, clean), hi = Math.max.apply(null, clean);
    (must || []).forEach(function(m){ lo = Math.min(lo, m); hi = Math.max(hi, m); });
    if (hi === lo){ hi += 1; lo -= 1; }
    var pad = (hi - lo) * 0.08; lo -= pad; hi += pad;
    var raw = (hi - lo) / 5, mag = Math.pow(10, Math.floor(Math.log(raw) / Math.LN10));
    var step = [1, 2, 2.5, 5, 10].map(function(m){ return m * mag; })
                .filter(function(x){ return x >= raw; })[0] || 10 * mag;
    var ticks = [], t = Math.ceil(lo / step) * step;
    for (var guard = 0; t <= hi + step * 1e-9 && guard < 40; t += step, guard++)
      ticks.push(Math.abs(t) < step * 1e-6 ? 0 : t);
    return { lo:lo, hi:hi, ticks:ticks };
  }
  // Round year labels inside a window, at most `want` of them, so a 5Y view is not labelled every twenty years.
  function windowYears(fromYear, toYear, want){
    if (toYear <= fromYear) return [fromYear];
    var raw = (toYear - fromYear) / Math.max(1, want - 1);
    var step = [1, 2, 5, 10, 15, 20, 25, 50].filter(function(x){ return x >= raw; })[0] || 50;
    var out = [], y = Math.ceil(fromYear / step) * step;
    for (; y <= toYear; y += step) out.push(y);
    return out.length ? out : [toYear];
  }
  // A reference label may carry its figure after a comma ("ample reserve, 70%"). The legend prints the
  // figure itself, so only the name before the comma is kept.
  function refName(t){
    var w = String(t || "Reference").split(",")[0].trim();
    return w.charAt(0).toUpperCase() + w.slice(1);   // the readout's rows all start capitalised
  }
  /* One readout for every history. The readout, the band reading and the legend are built here, not in each
     page's renderer: a component each page has to remember to add is one the pages drift apart on.
     Keren, V489: "… One component, one source of truth: if I change it in one part of the app it changes in the
     others without my asking." Everything the readout shows is on the geometry object. */
  function histReadEnsure(host){
    var cont = host.closest(".page-chart, .spread-history") || host.parentNode || host;
    var el = cont.querySelector(":scope > .hist-read");
    if (!el){
      el = document.createElement("div");
      el.className = "hist-read";
      /* The plate is built ONCE and then only written into. A transition needs the same element on both
         sides of it; markup rebuilt on every move animates from margin-left 0 each time — Keren, V558:
         "whenever I hover over bars it returns to the start and moves to the current location." */
      el.innerHTML = '<div class="hr-plate"><div class="hr-label"></div><div class="hr-value"></div></div>';
      // it goes directly above the picture: find whichever child of the container holds the chart's svg and
      // insert before it, so the order is control · readout · chart whatever the page called its parts
      // One call per selector, in priority order: a comma list returns whatever comes first in the
      // DOCUMENT, and the cycle picker's chevron is an unclassed <svg> above the chart on eight of these.
      var svg = cont.querySelector("svg.vh-svg") || cont.querySelector("svg.hist-svg") ||
                cont.querySelector(".chart-shell > svg") || cont.querySelector(".dchart > svg") ||
                cont.querySelector("svg");
      var anchor = svg;
      while (anchor && anchor.parentNode !== cont) anchor = anchor.parentNode;
      cont.insertBefore(el, anchor || cont.firstChild);
      cont.classList.add("has-hist-read");   // it is the plate's positioning context
    }
    if (!el.firstElementChild || el.firstElementChild.className !== "hr-plate")
      el.innerHTML = '<div class="hr-plate"><div class="hr-label"></div><div class="hr-value"></div></div>';
    host.__readEl = el;
    seatBandReading(cont);
    return el;
  }
  /* Keren, V520: "expand the test results to the entire width of the container it lies in, and put it
     BELOW the history container." The reading measures the LATEST value against its normal band, not the
     window on screen, so it gets a container of its own. Runs on every draw, because four of these pages
     rebuild their whole container each time; idempotent, since appendChild of a node in place is a no-op. */
  function seatBandReading(cont){
    var box = cont.parentNode;
    if (!box) return;
    var kids = cont.querySelectorAll(":scope > .panel-row, :scope > .panel-stack, " +
                                     ":scope > div:has(> .panel-row), :scope > div:has(> .panel-stack)");
    var read = box.querySelector(":scope > .reading-box");
    if (!kids.length && !read) return;
    if (!read){
      read = document.createElement("div");
      read.className = "reading-box";
      box.insertBefore(read, cont.nextSibling);
    }
    for (var i = 0; i < kids.length; i++) read.appendChild(kids[i]);
    /* ONE reading drops its name, since the head two containers up already says it — Keren: "we have Real
       GDP, YoY, and we see it again in Real GDP growth in the test result component, which is redundant."
       SEVERAL keep their names: there the names are what tell the readings apart. */
    read.classList.toggle("solo", read.querySelectorAll(".panel-row").length === 1 &&
                                  !!read.querySelector(".panel-row[data-head]"));
  }
  /* `d.v` can be null — October 2025 has no unemployment reading and the 30-year Treasury has a four-year
     gap where it was not issued. A hover on one of those falls through to the resting reading rather than
     printing "NaN%": there is nothing to report for that month. */
  function histReadFill(host, d, i){
    var g = host.__geom, el = host.__readEl;
    if (!g || !el) return;
    // a real minus sign, not a hyphen — at 29px the difference is the difference between a figure and a typo
    var fmt = function(v){
      return String(g.fmt ? g.fmt(v) : v.toFixed(1) + "%").replace(/^-/, "\u2212");
    };
    /* Keren, V560: "the default tooltip that writes the average is redundant because I can already see it":
       the legend states the average, so the readout never does. The plate floats INSIDE the grid, out of
       the flow, in the band under the legend's strip, sliding to the column it reads.
       Keren, V563: "maybe we should see as the default the latest figure of the CPI." At rest the plate is
       pinned over the LAST column with a value. A resting plate is not a hover: the plot does not dim and
       the crosshair comes in at a sixth of its strength, enough to say which bar and no more. */
    var atRest = !d || d.v == null;
    if (atRest){
      var vv = g.vals || [];
      for (var k = vv.length - 1; k >= 0; k--)
        if (vv[k] && vv[k].v != null && isFinite(vv[k].v)){ d = vv[k]; i = k; break; }
      if (!d || d.v == null){ el.classList.remove("on"); host.classList.remove("resting"); return; }
    }
    host.classList.toggle("resting", atRest);
    var lab = g.at(d, i), val = fmt(d.v);
    /* Keren, V556: "average 3.3%, Fed target 2.0% — that never changes, so we don't need it in the changing
       tooltip." A constant inside a readout that always changes stops the reader trusting it is about the
       column under the pointer; the references belong to the WINDOW, so they sit in the legend. Two lines,
       no third — Keren, V558: "the tooltip is bigger than the numbers that it presents." */
    var plate = el.firstElementChild;
    if (!plate) return;
    plate.children[0].textContent = lab;
    plate.children[1].innerHTML = val;
    /* Keren, V555, from Apple Health's Steps chart: "… that cube is moving with the lines — so on Tuesday the
       data would align with the line of Tuesday." The plate sits centred over the column it reads. It moves by
       MARGIN, not `left`, so the two axes never fight: the stylesheet owns where the band is, this owns where
       along it the plate sits. */
    var svg = host.querySelector("svg.hist-svg") || host.querySelector("svg.vh-svg") || host.querySelector("svg");
    if (!svg){ el.classList.remove("on"); return; }
    var sb = svg.getBoundingClientRect(), eb = el.getBoundingClientRect();
    if (!sb.width || !eb.width){ el.classList.remove("on"); return; }
    el.classList.add("on");
    var scale = sb.width / g.W || 1;
    /* The crosshair is set here rather than in the hover handler, so the resting column and the hovered one
       are marked by one piece of code and cannot disagree about where a column is. */
    var cross = svg.querySelector(".hist-cross");
    if (cross){
      var cx = (g.L + (g.R - g.L) * i / Math.max(1, g.n - 1)).toFixed(1);
      cross.setAttribute("x1", cx); cross.setAttribute("x2", cx);
    }
    /* The band: directly under the legend's strip, so the two never meet however far right the reader
       scrubs. Measured off the frame the chart drew, like the legend's own inset. */
    var fr = svg.querySelector(".bt-frame");
    var frTop = fr ? parseFloat(fr.getAttribute("y")) : g.T - AXIS.LEG;
    var cp = el.offsetParent ? el.offsetParent.getBoundingClientRect() : eb;
    /* ONE height everywhere — Keren, V574: "I don't want the height of the tooltip to change." AXIS.READ
       reserves the plate's band out of the plot, so the plate sits 10px under the legend's strip with 10px
       under it before the data begins. */
    var plateTop = sb.top - cp.top + (frTop + AXIS.LEG + 10) * scale;
    var colX = sb.left - eb.left + (g.L + (g.R - g.L) * i / Math.max(1, g.n - 1)) * scale;
    /* A reading that is two figures rather than one — Households prints what went out AND what was kept —
       runs the plate across most of the picture at 22px, and a plate that wide hides whatever it passes over
       wherever it stands. Past three fifths of the plot it steps down a size. */
    plate.classList.remove("compact");
    var w = plate.offsetWidth;   // measured with .on already set, so the plate's padding is in it
    if (w > (g.R - g.L) * scale * 0.6){ plate.classList.add("compact"); w = plate.offsetWidth; }
    /* Keren, V575: "on the left edge bar I want the tooltip to align to the left, and on the right edge bar to
       align to the right, so it looks symmetrical." Centred on its column until it runs out of room, then
       stopped against the PLOT'S edge, not the frame's, which on the left is the number rail (37 wide, against
       6 on the right) — Keren, V576: "… I want it to align to the bar itself, like you did on the right side." */
    var fx0 = fr ? parseFloat(fr.getAttribute("x")) : g.L;
    var fx1 = fr ? fx0 + parseFloat(fr.getAttribute("width")) : g.R;
    var lo = (sb.left - eb.left) + (fx0 + AXIS.L) * scale, hi = (sb.left - eb.left) + (fx1 - AXIS.R) * scale;
    /* The first column's reading starts where the plot starts and the last one's ends where it ends, so the
       two ends look like a pair; everything between is centred on its own column. */
    var mx = i === 0 ? lo
           : i === g.n - 1 ? hi - w
           : Math.max(lo, Math.min(hi - w, colX - w / 2));
    el.style.top = plateTop.toFixed(1) + "px";
    // the first placement after a draw is a jump, not a slide: there is nowhere for it to have come from
    if (!plate.__placed) plate.style.transition = "none";
    plate.style.marginLeft = mx.toFixed(1) + "px";
    if (!plate.__placed){ void plate.offsetWidth; plate.style.transition = ""; plate.__placed = true; }

  }
  /* An end label on the x axis, centred on a column half a slot inside the frame, can hang out past the
     frame. After drawing, a label that would overrun anchors to the frame's edge instead; only the ends can,
     so nothing between moves. */
  function histAxisEnds(svg, fr){
    if (!fr || !svg.getBBox) return;
    var x0 = parseFloat(fr.getAttribute("x")), x1 = x0 + parseFloat(fr.getAttribute("width"));
    Array.prototype.forEach.call(svg.querySelectorAll(".bt-xl"), function(t){
      var bb;
      try { bb = t.getBBox(); } catch (e) { return; }
      if (!bb.width) return;
      if (bb.x < x0){ t.setAttribute("text-anchor", "start"); t.setAttribute("x", x0.toFixed(1)); }
      else if (bb.x + bb.width > x1){ t.setAttribute("text-anchor", "end"); t.setAttribute("x", x1.toFixed(1)); }
    });
  }
  /* The reference legend, on a plate at the head of the grid in the strip AXIS.LEG reserves, laid out from
     the right. Keren, V556: "a very gentle legend … a line, Average 3.3%, a dashed line, Fed target 2.0%."
     It uses the chart's own formatter, so legend and line are the same number. Measured after insertion:
     only the browser knows how wide "Ample reserve 70%" is in this font. */
  function histLegend(host){
    var g = host.__geom;
    var svg = host.querySelector("svg.hist-svg") || host.querySelector("svg.vh-svg") || host.querySelector("svg");
    if (!svg) return;
    var old = svg.querySelector(".hist-legend");
    if (old) old.parentNode.removeChild(old);
    histAxisEnds(svg, svg.querySelector(".bt-frame"));   // every chart, references or not
    if (!g || g.B == null) return;
    // a ref with no `v` names a SERIES rather than a reference line, and prints its name alone
    var refs = (g.refs || []).filter(function(r){ return r && (r.v == null || isFinite(r.v)); });
    if (!refs.length) return;
    var fmt = function(v){ return String(g.fmt ? g.fmt(v) : v.toFixed(1) + "%").replace(/^-/, "\u2212"); };
    var NS = "http://www.w3.org/2000/svg";
    var grp = document.createElementNS(NS, "g");
    grp.setAttribute("class", "hist-legend");
    grp.setAttribute("aria-hidden", "true");   // every value in it is already in the chart's own aria-label
    /* On a plate in the card's colour, so a full-height column passes behind it. ONE inset on both edges —
       Keren, V558: "three, four pixels from the top … make the padding from the right be equal to the padding
       from the top." Measured off the FRAME the chart drew: `g.R` is the last column's centre, a hair inside
       the frame by a different amount on every chart. */
    var fr = svg.querySelector(".bt-frame");
    var INSET = 6, PLATE_H = 15, PAD_X = 6;   // INSET: the ONE number for top and right
    var frTop = fr ? parseFloat(fr.getAttribute("y")) : g.T - AXIS.LEG;
    var frRight = fr ? parseFloat(fr.getAttribute("x")) + parseFloat(fr.getAttribute("width")) : g.R;
    var y = frTop + INSET + PLATE_H / 2, MARK = 12, PAD = 5, GAP = 13, items = [];
    var plate = document.createElementNS(NS, "rect");
    plate.setAttribute("class", "chart-label-plate");
    plate.setAttribute("rx", "5");
    plate.setAttribute("y", (frTop + INSET).toFixed(1));
    plate.setAttribute("height", String(PLATE_H));
    grp.appendChild(plate);   // first child, so every mark and every word is drawn over it
    refs.forEach(function(r){
      var t = document.createElementNS(NS, "text");
      t.setAttribute("class", "hl-lab");
      t.setAttribute("y", (y + 3.2).toFixed(1));
      t.textContent = r.v == null ? r.label : r.label + " " + fmt(r.v);
      grp.appendChild(t);
      /* Keren, V561: "the line next to Average 3.3% needs to be purple … so it matches the colours." The mark
         wears the chart's OWN class, so one stylesheet rule paints both lines and they cannot drift apart.
         Every history draws .temp-avg and .vh-mean, hence the defaults; a chart whose lines differ says so. A
         SWATCH is for a key that names what a colour means (the zone keys of Horizon and Pressure). */
      var m = document.createElementNS(NS, r.swatch ? "rect" : "line");
      if (r.swatch){
        m.setAttribute("class", "hl-sw"); m.setAttribute("fill", r.swatch);
        m.setAttribute("width", "9"); m.setAttribute("height", "9"); m.setAttribute("rx", "2");
      } else m.setAttribute("class", r.cls || (r.dash ? "vh-mean" : "temp-avg"));
      if (r.swatch) m.setAttribute("y", (y - 4.5).toFixed(1));
      else { m.setAttribute("y1", y.toFixed(1)); m.setAttribute("y2", y.toFixed(1)); }
      grp.appendChild(m);
      items.push({ t:t, m:m });
    });
    svg.appendChild(grp);   // in the document before measuring; a text node has no width until it is
    var total = 0;
    items.forEach(function(it){
      it.w = MARK + PAD + (it.t.getComputedTextLength ? it.t.getComputedTextLength() : it.t.textContent.length * 5);
      total += it.w;
    });
    total += GAP * (items.length - 1);
    var x = Math.max(g.L + PAD_X, frRight - INSET - PAD_X - total);
    plate.setAttribute("x", (x - PAD_X).toFixed(1));
    plate.setAttribute("width", (total + PAD_X * 2).toFixed(1));
    items.forEach(function(it){
      if (it.m.tagName === "rect") it.m.setAttribute("x", (x + 1.5).toFixed(1));
      else { it.m.setAttribute("x1", x.toFixed(1)); it.m.setAttribute("x2", (x + MARK).toFixed(1)); }
      it.t.setAttribute("x", (x + MARK + PAD).toFixed(1));
      x += it.w + GAP;
    });
  }
  // called by a chart that does its own hover tracking (Horizon's), so every history feeds the same block
  window.__histRead = function(host, d, i){ if (host) histReadFill(host, d, i); };
  /* A chart drawn at another width than it occupies (handed the sheet's width, say, which includes padding
     and border) is scaled: type renders small, and the reading's band, in svg units, stops matching the HTML
     plate. Keren, V579: "the padding above and below the tooltip has to be even …" So a viewBox that does not
     match the rendered width is built again at the width it has. */
  function refitHistory(box, build){
    if (!box || !build) return;
    var svg = box.querySelector("svg.vh-svg, svg.hist-svg");
    if (!svg) return;
    // the SVG's own rendered width, not the container's: clientWidth carries the container's padding with it,
    // and these containers pad 14 a side, which is exactly the error this is here to remove
    var w = Math.round(svg.getBoundingClientRect().width);
    if (!w) return;
    var vb = parseFloat((svg.getAttribute("viewBox") || "").split(" ")[2]);
    if (!(vb > 0) || Math.abs(vb - w) <= 1) return;
    svg.outerHTML = build(w);
  }
  // The reading under the pointer, for any history. pointermove, so trackpad, mouse and touch all answer.
  // Bound once per host (the markup is replaced on every stop; a listener per draw stacks); the geometry
  // rides on the host. A probe must assert what a reader can SEE: .gdp-tooltip is opacity:0 by default.
  function wireHistHover(host, tipId){
    if (!host) return;
    // the readout is refreshed on EVERY draw; only the listeners below are wired once
    histReadEnsure(host);
    histReadFill(host, null);
    histLegend(host);   // like the readout, rebuilt on EVERY draw: the window changes and so do its references
    if (host.__hovWired) return;
    host.__hovWired = true;
    var tip = byId(tipId);
    function hide(){
      if (tip){ tip.style.opacity = "0"; tip.hidden = true; }
      host.classList.remove("hovering");
      if (host.__onCol){ host.__onCol.classList.remove("on"); host.__onCol = null; }
      histReadFill(host, null);   // back to the resting reading, in the same reserved space
    }
    /* Keren, V608: "I'm hovering over the chart in hormones and I don't see the marker changing …" A phone has
       no hover, and on touch `pointermove` fires only during a drag. Two halves, neither enough alone: the
       plot's `touch-action: pan-y` (stylesheet) hands horizontal drags to us, and `pointerdown` makes a TAP
       read a bar. */
    function at(e){
      /* A host may hold several svgs (a head's icon, Power's trend arrow), and scaling by the wrong one puts
         every move outside the plot. So the chart is the svg that owns an `.hcol`, the one class every history
         puts on its readings; no chart has to remember to be named correctly. */
      var col0 = host.querySelector(".hcol");
      var g = host.__geom;
      var svg = (col0 && col0.ownerSVGElement) || host.querySelector("svg.hist-svg") || host.querySelector("svg");
      if (!g || !svg || !tip) return;
      var box = svg.getBoundingClientRect();
      var scale = box.width / g.W || 1;
      var x = (e.clientX - box.left) / scale;
      /* A column owns its whole slot, not just the pixel its centre falls on. g.L is the FIRST column's
         centre and g.R the last's, so the hover reaches half a slot past each. */
      var hPad = (g.R - g.L) / Math.max(1, 2 * (g.n - 1));
      if (x < g.L - hPad || x > g.R + hPad){ hide(); return; }
      var i = Math.round((x - g.L) / Math.max(1, g.R - g.L) * (g.n - 1));
      i = Math.max(0, Math.min(g.n - 1, i));
      var d = g.vals[i]; if (!d) return;
      // Keren, V383: "when I hover over a certain bar I want the colour to be slightly changed, so I can
      // understand which tooltip connects to which bar — it's not clear enough where I'm sitting." The plot
      // dims and the bar under the pointer keeps its full colour, with a hairline dropped through it.
      host.classList.add("hovering");
      if (host.__onCol) host.__onCol.classList.remove("on");
      // The mark selector and the value format travel WITH the geometry, so this function never has to know
      // what a chart calls its columns: `.hcol` is the one class every history adds to its readings.
      var col = svg.querySelectorAll(".hcol")[i];
      if (col){ col.classList.add("on"); host.__onCol = col; }
      // The reading goes to the readout; the crosshair and the lit column say WHERE, which a readout cannot.
      histReadFill(host, d, i);
    }
    host.addEventListener("pointermove", at);
    host.addEventListener("pointerdown", at);
    /* Only a real pointer leaving hides it. A finger lifting off is not "done reading" — it is the moment the
       reader starts reading, so the value stays until the next tap moves it. */
    host.addEventListener("pointerleave", function(e){ if (e.pointerType !== "touch") hide(); });
  }
  // A monthly series' window start index — the same rule, in months.
  function mWindowFrom(len, key){
    var sp = timelineSpan(key);
    return (sp == null || sp === Infinity) ? 0 : Math.max(0, len - sp * 12);
  }
  // A quarterly series' window start index — defFrom's sibling, in quarters.
  function qWindowFrom(len, key){
    var sp = timelineSpan(key);
    return (sp == null || sp === Infinity) ? 0 : Math.max(0, len - sp * 4);
  }
  // Volume and Pulse both run quarterly from 1959 — 67 years, so both answer the whole set.
  var VOL_STOPS = ["5y", "10y", "25y", "max"];     // no "cycle": the current cycle is read on the Cycles tab
  var PULSE_STOPS = ["5y", "10y", "25y", "max"];   // likewise

  var DEF_1983 = deficitHistory[1983 - DEF_FROM_YEAR];
  // deficitHistory is a bare array of numbers from DEF_FROM_YEAR, so its window is an index, not a filter.
  function defFrom(key){
    var sp = timelineSpan(key);
    return (sp == null || sp === Infinity) ? 0 : Math.max(0, deficitHistory.length - sp);
  }

  /* Drawn at the width it will occupy (see velocityHistoryChart), as columns out of zero: the meaning is which
     side of the line a year falls and how far. The scale always contains zero and the 1983 level, so a zoom
     never drops "surplus above, deficit below". Bars are slot-centred, or at ten across a desktop the first and
     last would hang half outside the plot. */
  function deficitChart(Wpx, from, to){
    var F = histFrame(Wpx), W = F.W, narrow = F.narrow, H = F.H,
        L = F.L, R = F.R, T = F.T, B = F.B;
    from = from || 0;
    var vals = deficitHistory.slice(from, to == null ? undefined : to), n = vals.length;
    var y0 = DEF_FROM_YEAR + from, y1 = DEF_FROM_YEAR + (to == null ? deficitHistory.length : to) - 1;
    var all = vals.concat([0, DEF_1983]);
    var lo = Math.min.apply(null, all), hi = Math.max.apply(null, all);
    var pad = Math.max(0.6, (hi - lo) * 0.10), LO = lo - pad, HI = hi + pad;
    var slot = (R - L) / Math.max(1, n);
    var X = function(i){ return L + slot * (i + 0.5); };
    var Y = function(v){ return B - (B - T) * (v - LO) / (HI - LO); };
    var f = function(v){ return v.toFixed(1); };
    var out = [], zero = Y(0), sw = Math.max(1.5, Math.min(26, slot * 0.6));
    // This series is surplus-positive, so the fit's own labels carry their sign — a bare "-5.8%" beside a
    // chart whose rows say "Deepest" would read as two different conventions on one picture.
    var defFit = trendOf(vals, "points", "year").fit;

    // the recessions first, behind everything, merged into runs so consecutive years read as one stretch
    var run = null;
    for (var k = 0; k <= n; k++){
      var inRec = k < n && DEF_RECESSION_FY[y0 + k];
      if (inRec && run === null) run = k;
      if (!inRec && run !== null){
        var bx0 = X(run) - slot / 2, bx1 = X(k - 1) + slot / 2;
        out.push('<rect class="spread-history-band" x="' + f(bx0) + '" y="' + f(T) +
          '" width="' + f(Math.max(2, bx1 - bx0)) + '" height="' + f(B - T) + '"/>');
        run = null;
      }
    }
    // a step that puts four to six lines on the plot whatever the window is
    var raw = (HI - LO) / 5, p10 = Math.pow(10, Math.floor(Math.log(raw) / Math.LN10)), nn = raw / p10;
    var step = (nn < 1.5 ? 1 : nn < 3 ? 2 : nn < 7 ? 5 : 10) * p10;
    var defTicks = [];
    for (var g = Math.ceil(LO / step) * step; g <= HI + 1e-9; g += step)
      defTicks.push(Math.abs(g) < 1e-9 ? 0 : g);
    out.push(chartAxes({ ticks:defTicks, y:Y, x0:L, x1:R, base:Y(0), noGridAt:0, top:(T - AXIS.LEG - AXIS.READ), bot:B,
      fmt:function(at){ return (at > 0 ? "+" : "") + (step < 1 ? at.toFixed(1) : Math.round(at)) + "%"; } }));
    // the smallest year step whose labels still fit the width
    var steps = [1, 2, 5, 10, 20, 25], yrStep = 25, si, yy, cnt;
    for (si = 0; si < steps.length; si++){
      cnt = 0;
      for (yy = y0; yy <= y1; yy++) if (yy % steps[si] === 0) cnt++;
      if (cnt <= (narrow ? 5 : 8)){ yrStep = steps[si]; break; }
    }
    for (yy = y0; yy <= y1; yy++){
      if (yy % yrStep) continue;
      out.unshift(vGrid(X(yy - y0), T, B));
      out.push(xLabel(f(X(yy - y0)), yy, B + 17));
    }
    vals.forEach(function(v, i){
      out.push('<path class="def-col hcol' + (v > 0 ? " surplus" : "") + '" stroke-width="' + sw.toFixed(2) +
        '" d="' + colPath(X(i), zero, Y(v), sw) + '"/>');
    });
    out.push(zeroRule(L, R, zero));
    // the 1983 level, on a plate so it reads wherever it lands
    var y83 = Y(DEF_1983);
    out.push(meanRule(L, R, y83));
    out.push(crossLine(T, B));
    // The window's average, assigned ABOVE the geometry that cites it: `refs` captures the value at
    // publishGeom, and below it the hoisted var would still be undefined. References reach the readout and
    // the legend as `refs` on the geometry, like every history (see histReadEnsure).
    var dfAvg = vals.reduce(function(a, v){ return a + v; }, 0) / (n || 1);
    publishGeom("deficitChart", { L:X(0), R:X(n - 1), T:T, B:B, W:W, n:n, at:function(d, i){ return "FY" + (y0 + i); },
                     fmt:function(v){ return (v > 0 ? "+" : "") + v.toFixed(1) + "%"; },
                     refs:[{ label:"Average", v:dfAvg },
                           { label:"1983 level", v:DEF_1983, dash:true }],
                     vals:vals.map(function(v){ return { v:v }; }) });
    out.push(avgRule(L, R, f(Y(dfAvg))));
    if (defFit && defFit.n > 1)
      out.push(fitGroup({ fit:defFit, fmt:function(v){ return (v > 0 ? "+" : "") + v.toFixed(1) + "%"; } },
                        X(0), X(n - 1), Y, R, L, 0));
    return vhOpen(W, H) +
      'aria-label="The federal deficit or surplus as a share of GDP, every fiscal year from ' + y0 + ' to ' + y1 +
      ', with the fiscal years that contained a recession shaded and the 1983 level marked">' + out.join("") + '</svg>';
  }

  /* Keren, V359: "all the text can be in an info icon next to the title" — the caption lives behind a door,
     today the ⋯ menu above the chart. The block is built ONCE; the range bar, the chart, the records and the
     trend are what the renderer rewrites. */
  function deficitBlock(){
    var lo = Math.min.apply(null, deficitHistory), iLo = deficitHistory.indexOf(lo), iSur = -1, i;
    for (i = deficitHistory.length - 1; i >= 0; i--) if (deficitHistory[i] > 0){ iSur = i; break; }
    var lastY = DEF_FROM_YEAR + deficitHistory.length - 1;
    var surCount = deficitHistory.filter(function(v){ return v > 0; }).length;
    function row(name, val){
      return '<div class="legend-row"><span>' + name + '</span><small>' + val + '</small></div>';
    }
    // The marker's own note is the lede, since the Deficit rate row has no (i): it is the door here. Read live
    // off `labPanel`, so the nightly refresh keeps both current from one place.
    var defRow = labPanel.filter(function(r){ return r.opens && r.opens.id === "sheet-marker-deficit"; })[0];
    var note = '<h4>Federal budget deficit or surplus</h4>' +
      (defRow ? '<p class="lede">' + defRow.note + '</p>' : '') +
      facts([
        'Every fiscal year since ' + DEF_FROM_YEAR + ' as a share of GDP \u2014 <b>a surplus above the line, a ' +
          'deficit below</b>.',
        'The <b>shaded stretches</b> are fiscal years that contained at least one month of an NBER-dated recession. ' +
          'A fiscal year is not a calendar year, so the rule is stated rather than assumed: the federal year ran ' +
          'July\u2013June through FY1976 and October\u2013September since FY1977.',
        'They carry the whole of what this picture has to say: <b>a deficit this deep has almost always sat inside ' +
          'a recession, in the few years just after one, or at the end of a war.</b>',
        '<b>FY1983</b> \u2014 the year usually named beside today \u2014 is shaded, because the recession it came out of ' +
          'ended two months into it. The dashed line is its level, drawn at every range so the comparison stays on ' +
          'screen even when 1983 is off the left edge. Today\u2019s is five years past the last recession and has not closed.',
        'There have been <b>' + surCount + ' surplus years</b> since ' + DEF_FROM_YEAR + ', none since FY' +
          (DEF_FROM_YEAR + iSur) + '. The average across the whole series is ' + DEF_MEAN.toFixed(1) + '%.',
        'The wartime record is left off the chart on purpose: at -26.9% (FY1943) it would flatten eighty years into ' +
          'a band, so it is stated in the rows below instead.',
        'The chart ends at FY' + lastY + ', the last actual \u2014 the Deficit rate row this page opens from carries ' +
          'CBO\u2019s projection for the year in progress, which is why the two figures differ.',
        'The rows below read the whole series, not the window on screen.',
        'The chart starts at <b>FY' + DEF_FROM_YEAR + '</b> because peacetime is the only frame in which 1983 and ' +
          'today are comparable at all. The wartime record sits outside it and is stated rather than drawn: ' +
          '<b>\u221226.9% of GDP in FY1943</b>, which inside the plot would flatten eighty years into a band.'
      ]);
    /* The band head is emitted by histControls from HIST_HEAD like every other page's. Its note is FILED here
       rather than opened by an (i) of its own: the ⋯ menu above the chart is the one door onto it.
       Keren, V361: no FY span label — the range bar names the window and the chart's own axis dates it. */
    HIST_NOTE["deficit-range"] = note;
    return histBar("", "deficit-rangebar") +
      '<div class="page-chart pulsebox">' +
      histHead("deficit-range") +
      '<div id="deficit-record" class="vh-host"></div>' +
      histTip("deficit-hist-tooltip") +
      // Keren, V404: four records, like every other history. They are recordRows, rendered per draw, so they
      // follow the window. The wartime low (-26.9%, FY1943) is not one of them: that the window starts in
      // 1946, and what that leaves out, is stated in the note behind the ⋯ menu.
      '<div id="deficit-records"></div>' +
      '<div id="deficit-trend"></div></div>';
  }

  // The Buffett indicator, quarter by quarter since 1970: the Federal Reserve's Z.1 market value of
  // nonfinancial corporate equities (NCBEILQ027S, $M) over nominal GDP ($B) — the same definition as the current
  // reading, computed the same way, so the line ends exactly on the figure the row shows.
  var buffettHistory = [{q:"1970 Q1",v:64.5},{q:"1970 Q2",v:50.8},{q:"1970 Q3",v:58.4},{q:"1970 Q4",v:64.5},{q:"1971 Q1",v:68.3},{q:"1971 Q2",v:67.3},{q:"1971 Q3",v:65.0},{q:"1971 Q4",v:69.2},{q:"1972 Q1",v:70.9},{q:"1972 Q2",v:69.1},{q:"1972 Q3",v:69.2},{q:"1972 Q4",v:77.7},{q:"1973 Q1",v:70.5},{q:"1973 Q2",v:63.9},{q:"1973 Q3",v:66.5},{q:"1973 Q4",v:54.8},{q:"1974 Q1",v:52.6},{q:"1974 Q2",v:47.3},{q:"1974 Q3",v:34.6},{q:"1974 Q4",v:34.9},{q:"1975 Q1",v:42.4},{q:"1975 Q2",v:47.9},{q:"1975 Q3",v:41.0},{q:"1975 Q4",v:42.8},{q:"1976 Q1",v:47.7},{q:"1976 Q2",v:47.9},{q:"1976 Q3",v:47.6},{q:"1976 Q4",v:47.9},{q:"1977 Q1",v:43.1},{q:"1977 Q2",v:42.9},{q:"1977 Q3",v:39.9},{q:"1977 Q4",v:37.8},{q:"1978 Q1",v:35.1},{q:"1978 Q2",v:35.7},{q:"1978 Q3",v:37.4},{q:"1978 Q4",v:34.6},{q:"1979 Q1",v:36.1},{q:"1979 Q2",v:35.5},{q:"1979 Q3",v:36.8},{q:"1979 Q4",v:37.3},{q:"1980 Q1",v:34.3},{q:"1980 Q2",v:38.5},{q:"1980 Q3",v:42.5},{q:"1980 Q4",v:45.1},{q:"1981 Q1",v:43.2},{q:"1981 Q2",v:41.6},{q:"1981 Q3",v:34.8},{q:"1981 Q4",v:37.4},{q:"1982 Q1",v:33.3},{q:"1982 Q2",v:32.2},{q:"1982 Q3",v:34.8},{q:"1982 Q4",v:40.7},{q:"1983 Q1",v:44.2},{q:"1983 Q2",v:48.5},{q:"1983 Q3",v:46.3},{q:"1983 Q4",v:43.0},{q:"1984 Q1",v:39.1},{q:"1984 Q2",v:36.3},{q:"1984 Q3",v:37.8},{q:"1984 Q4",v:37.5},{q:"1985 Q1",v:39.5},{q:"1985 Q2",v:40.6},{q:"1985 Q3",v:37.4},{q:"1985 Q4",v:43.2},{q:"1986 Q1",v:47.4},{q:"1986 Q2",v:49.4},{q:"1986 Q3",v:44.1},{q:"1986 Q4",v:48.1},{q:"1987 Q1",v:57.4},{q:"1987 Q2",v:57.9},{q:"1987 Q3",v:60.3},{q:"1987 Q4",v:45.7},{q:"1988 Q1",v:47.7},{q:"1988 Q2",v:48.5},{q:"1988 Q3",v:46.6},{q:"1988 Q4",v:47.4},{q:"1989 Q1",v:48.5},{q:"1989 Q2",v:50.6},{q:"1989 Q3",v:53.7},{q:"1989 Q4",v:54.6},{q:"1990 Q1",v:51.2},{q:"1990 Q2",v:52.6},{q:"1990 Q3",v:44.1},{q:"1990 Q4",v:49.2},{q:"1991 Q1",v:56.3},{q:"1991 Q2",v:54.8},{q:"1991 Q3",v:57.0},{q:"1991 Q4",v:63.9},{q:"1992 Q1",v:61.5},{q:"1992 Q2",v:59.9},{q:"1992 Q3",v:60.5},{q:"1992 Q4",v:65.4},{q:"1993 Q1",v:66.8},{q:"1993 Q2",v:66.3},{q:"1993 Q3",v:67.5},{q:"1993 Q4",v:69.4},{q:"1994 Q1",v:65.5},{q:"1994 Q2",v:63.1},{q:"1994 Q3",v:65.9},{q:"1994 Q4",v:64.8},{q:"1995 Q1",v:69.2},{q:"1995 Q2",v:74.3},{q:"1995 Q3",v:78.9},{q:"1995 Q4",v:83.0},{q:"1996 Q1",v:85.5},{q:"1996 Q2",v:87.6},{q:"1996 Q3",v:87.3},{q:"1996 Q4",v:89.6},{q:"1997 Q1",v:89.1},{q:"1997 Q2",v:100.9},{q:"1997 Q3",v:107.4},{q:"1997 Q4",v:107.6},{q:"1998 Q1",v:121.7},{q:"1998 Q2",v:122.4},{q:"1998 Q3",v:108.7},{q:"1998 Q4",v:127.8},{q:"1999 Q1",v:129.2},{q:"1999 Q2",v:138.7},{q:"1999 Q3",v:131.1},{q:"1999 Q4",v:155.4},{q:"2000 Q1",v:162.6},{q:"2000 Q2",v:152.4},{q:"2000 Q3",v:147.9},{q:"2000 Q4",v:128.0},{q:"2001 Q1",v:112.7},{q:"2001 Q2",v:119.4},{q:"2001 Q3",v:100.1},{q:"2001 Q4",v:112.0},{q:"2002 Q1",v:111.3},{q:"2002 Q2",v:95.7},{q:"2002 Q3",v:78.9},{q:"2002 Q4",v:83.8},{q:"2003 Q1",v:80.7},{q:"2003 Q2",v:91.6},{q:"2003 Q3",v:93.1},{q:"2003 Q4",v:101.3},{q:"2004 Q1",v:103.5},{q:"2004 Q2",v:104.3},{q:"2004 Q3",v:100.3},{q:"2004 Q4",v:107.9},{q:"2005 Q1",v:105.5},{q:"2005 Q2",v:106.3},{q:"2005 Q3",v:108.2},{q:"2005 Q4",v:106.7},{q:"2006 Q1",v:112.0},{q:"2006 Q2",v:107.2},{q:"2006 Q3",v:109.2},{q:"2006 Q4",v:114.1},{q:"2007 Q1",v:117.2},{q:"2007 Q2",v:120.8},{q:"2007 Q3",v:120.6},{q:"2007 Q4",v:114.9},{q:"2008 Q1",v:106.1},{q:"2008 Q2",v:103.9},{q:"2008 Q3",v:92.8},{q:"2008 Q4",v:75.6},{q:"2009 Q1",v:69.0},{q:"2009 Q2",v:78.9},{q:"2009 Q3",v:89.8},{q:"2009 Q4",v:93.3},{q:"2010 Q1",v:96.3},{q:"2010 Q2",v:85.3},{q:"2010 Q3",v:93.5},{q:"2010 Q4",v:101.7},{q:"2011 Q1",v:107.9},{q:"2011 Q2",v:106.1},{q:"2011 Q3",v:90.7},{q:"2011 Q4",v:98.4},{q:"2012 Q1",v:105.9},{q:"2012 Q2",v:102.1},{q:"2012 Q3",v:108.1},{q:"2012 Q4",v:106.5},{q:"2013 Q1",v:117.9},{q:"2013 Q2",v:119.5},{q:"2013 Q3",v:124.3},{q:"2013 Q4",v:131.9},{q:"2014 Q1",v:136.3},{q:"2014 Q2",v:139.9},{q:"2014 Q3",v:136.6},{q:"2014 Q4",v:141.3},{q:"2015 Q1",v:141.1},{q:"2015 Q2",v:137.8},{q:"2015 Q3",v:126.5},{q:"2015 Q4",v:132.1},{q:"2016 Q1",v:133.6},{q:"2016 Q2",v:134.9},{q:"2016 Q3",v:136.8},{q:"2016 Q4",v:135.4},{q:"2017 Q1",v:141.4},{q:"2017 Q2",v:142.5},{q:"2017 Q3",v:144.5},{q:"2017 Q4",v:149.8},{q:"2018 Q1",v:146.3},{q:"2018 Q2",v:149.9},{q:"2018 Q3",v:156.5},{q:"2018 Q4",v:133.5},{q:"2019 Q1",v:150.8},{q:"2019 Q2",v:152.5},{q:"2019 Q3",v:151.0},{q:"2019 Q4",v:159.9},{q:"2020 Q1",v:128.8},{q:"2020 Q2",v:173.1},{q:"2020 Q3",v:175.6},{q:"2020 Q4",v:198.3},{q:"2021 Q1",v:205.9},{q:"2021 Q2",v:215.7},{q:"2021 Q3",v:210.8},{q:"2021 Q4",v:218.7},{q:"2022 Q1",v:202.9},{q:"2022 Q2",v:163.8},{q:"2022 Q3",v:153.3},{q:"2022 Q4",v:157.1},{q:"2023 Q1",v:166.9},{q:"2023 Q2",v:177.7},{q:"2023 Q3",v:167.2},{q:"2023 Q4",v:182.1},{q:"2024 Q1",v:197.3},{q:"2024 Q2",v:199.7},{q:"2024 Q3",v:208.0},{q:"2024 Q4",v:210.5},{q:"2025 Q1",v:197.8},{q:"2025 Q2",v:214.3},{q:"2025 Q3",v:226.4},{q:"2025 Q4",v:229.1},{q:"2026 Q1",v:219.7},{q:"2026 Q2",v:255.7}];

  /* ================= Desire's own record =================
     The ICE BofA high-yield OAS from FRED (BAMLH0A0HYM2), downloaded by Keren. **Three years is the most
     anyone can get**: ICE licenses it to FRED on a rolling three-year window, so the record low (2.41%, June
     2007) and high (21.82%, December 2008) are CITED FACTS on the meter's scale and cannot be drawn. Do not
     "fix" the gap by inventing the missing years.
     DAILY, deliberately, the one series kept at that grain: Desire is the fast reading, and a quarterly average
     would erase the window's only shock (April 7, 2025 touched 4.61% and was under 3.8% four weeks later;
     the Q2 average of 3.5 hides it).
     REFRESH: do not append nightly (the file would grow without end); the nightly task refreshes the row's
     own figure. Re-download and replace the whole block roughly once a quarter. */
  /* The normal band. Keren, V480: "what makes four to five percent normal?" Nothing did, so the band is the
     market's own documented breaks: **below 3.5% is complacency**, **above 6% is stress**, with the 1996-on
     median (~4.5%) inside. Both ends are citable; Keren chose them over footnoting 4–5.
     CHANGING THESE CHANGES WHAT THE APP ASSERTS: the (i) states them, their sources and the wider regime
     scale, and moves with them. */
  var HY_NORM_LO = 3.5, HY_NORM_HI = 6;
  var hyDates = "230925 230926 230927 230928 230929 230930 231002 231003 231004 231005 231006 231009 231010 231011 231012 231013 231016 231017 231018 231019 231020 231023 231024 231025 231026 231027 231030 231031 231101 231102 231103 231106 231107 231108 231109 231110 231113 231114 231115 231116 231117 231120 231121 231122 231123 231124 231127 231128 231129 231130 231201 231204 231205 231206 231207 231208 231211 231212 231213 231214 231215 231218 231219 231220 231221 231222 231226 231227 231228 231229 231231 240102 240103 240104 240105 240108 240109 240110 240111 240112 240115 240116 240117 240118 240119 240122 240123 240124 240125 240126 240129 240130 240131 240201 240202 240205 240206 240207 240208 240209 240212 240213 240214 240215 240216 240219 240220 240221 240222 240223 240226 240227 240228 240229 240301 240304 240305 240306 240307 240308 240311 240312 240313 240314 240315 240318 240319 240320 240321 240322 240325 240326 240327 240328 240331 240401 240402 240403 240404 240405 240408 240409 240410 240411 240412 240415 240416 240417 240418 240419 240422 240423 240424 240425 240426 240429 240430 240501 240502 240503 240506 240507 240508 240509 240510 240513 240514 240515 240516 240517 240520 240521 240522 240523 240524 240527 240528 240529 240530 240531 240603 240604 240605 240606 240607 240610 240611 240612 240613 240614 240617 240618 240619 240620 240621 240624 240625 240626 240627 240628 240630 240701 240702 240703 240704 240705 240708 240709 240710 240711 240712 240715 240716 240717 240718 240719 240722 240723 240724 240725 240726 240729 240730 240731 240801 240802 240805 240806 240807 240808 240809 240812 240813 240814 240815 240816 240819 240820 240821 240822 240823 240826 240827 240828 240829 240830 240831 240902 240903 240904 240905 240906 240909 240910 240911 240912 240913 240916 240917 240918 240919 240920 240923 240924 240925 240926 240927 240930 241001 241002 241003 241004 241007 241008 241009 241010 241011 241014 241015 241016 241017 241018 241021 241022 241023 241024 241025 241028 241029 241030 241031 241101 241104 241105 241106 241107 241108 241111 241112 241113 241114 241115 241118 241119 241120 241121 241122 241125 241126 241127 241128 241129 241130 241202 241203 241204 241205 241206 241209 241210 241211 241212 241213 241216 241217 241218 241219 241220 241223 241224 241226 241227 241230 241231 250102 250103 250106 250107 250108 250109 250110 250113 250114 250115 250116 250117 250120 250121 250122 250123 250124 250127 250128 250129 250130 250131 250203 250204 250205 250206 250207 250210 250211 250212 250213 250214 250217 250218 250219 250220 250221 250224 250225 250226 250227 250228 250303 250304 250305 250306 250307 250310 250311 250312 250313 250314 250317 250318 250319 250320 250321 250324 250325 250326 250327 250328 250331 250401 250402 250403 250404 250407 250408 250409 250410 250411 250414 250415 250416 250417 250421 250422 250423 250424 250425 250428 250429 250430 250501 250502 250505 250506 250507 250508 250509 250512 250513 250514 250515 250516 250519 250520 250521 250522 250523 250526 250527 250528 250529 250530 250531 250602 250603 250604 250605 250606 250609 250610 250611 250612 250613 250616 250617 250618 250619 250620 250623 250624 250625 250626 250627 250630 250701 250702 250703 250704 250707 250708 250709 250710 250711 250714 250715 250716 250717 250718 250721 250722 250723 250724 250725 250728 250729 250730 250731 250801 250804 250805 250806 250807 250808 250811 250812 250813 250814 250815 250818 250819 250820 250821 250822 250825 250826 250827 250828 250829 250831 250901 250902 250903 250904 250905 250908 250909 250910 250911 250912 250915 250916 250917 250918 250919 250922 250923 250924 250925 250926 250929 250930 251001 251002 251003 251006 251007 251008 251009 251010 251013 251014 251015 251016 251017 251020 251021 251022 251023 251024 251027 251028 251029 251030 251031 251103 251104 251105 251106 251107 251110 251111 251112 251113 251114 251117 251118 251119 251120 251121 251124 251125 251126 251127 251128 251130 251201 251202 251203 251204 251205 251208 251209 251210 251211 251212 251215 251216 251217 251218 251219 251222 251223 251224 251226 251229 251230 251231 260102 260105 260106 260107 260108 260109 260112 260113 260114 260115 260116 260119 260120 260121 260122 260123 260126 260127 260128 260129 260130 260131 260202 260203 260204 260205 260206 260209 260210 260211 260212 260213 260216 260217 260218 260219 260220 260223 260224 260225 260226 260227 260228 260302 260303 260304 260305 260306 260309 260310 260311 260312 260313 260316 260317 260318 260319 260320 260323 260324 260325 260326 260327 260330 260331 260401 260402 260403 260406 260407 260408 260409 260410 260413 260414 260415 260416 260417 260420 260421 260422 260423 260424 260427 260428 260429 260430 260501 260504 260505 260506 260507 260508 260511 260512 260513 260514 260515 260518 260519 260520 260521 260522 260525 260526 260527 260528 260529 260531 260601 260602 260603 260604 260605 260608 260609 260610 260611 260612 260615 260616 260617 260618 260619 260622 260623 260624 260625 260626 260629 260630 260701 260702 260703 260706 260707 260708 260709 260710 260713 260714 260715 260716 260717 260720 260721 260722 260723 260724 260727 260728 260729 260730 260731 260803 260804 260805 260806 260807 260810 260811 260812 260813 260814 260817 260818 260819 260820 260821 260824 260825 260826 260827 260828 260831 260901 260902 260903 260904 260907 260908 260909 260910 260911 260914 260915 260916 260917 260918 260921 260922 260923".split(" ");
  var hyOas = "3.97 4.04 4.03 4.09 4.03 4.03 4.11 4.26 4.37 4.38 4.33 4.34 4.26 4.25 4.25 4.3 4.27 4.25 4.32 4.37 4.52 4.51 4.41 4.37 4.5 4.53 4.5 4.42 4.47 4.15 4.04 4 4.08 4.08 4.04 4.03 4.03 3.92 3.89 4.02 3.99 3.92 3.95 3.9 3.9 3.85 3.89 3.9 3.8 3.84 3.87 3.8 3.8 3.79 3.77 3.75 3.79 3.76 3.79 3.47 3.51 3.51 3.46 3.43 3.41 3.39 3.37 3.34 3.32 3.34 3.39 3.54 3.71 3.69 3.68 3.63 3.59 3.5 3.55 3.56 3.54 3.58 3.62 3.58 3.54 3.49 3.51 3.44 3.45 3.39 3.41 3.42 3.59 3.56 3.47 3.5 3.52 3.43 3.38 3.33 3.35 3.36 3.38 3.35 3.34 3.34 3.37 3.34 3.22 3.23 3.23 3.26 3.31 3.29 3.32 3.26 3.31 3.27 3.27 3.26 3.26 3.2 3.15 3.15 3.16 3.13 3.1 3.14 3.05 3.08 3.11 3.15 3.15 3.12 3.15 3.12 3.23 3.23 3.24 3.18 3.15 3.14 3.1 3.16 3.25 3.28 3.36 3.42 3.39 3.37 3.29 3.2 3.19 3.24 3.16 3.12 3.18 3.21 3.16 3.08 3.03 3.06 3.1 3.14 3.12 3.14 3.14 3.13 3.08 3.09 3.07 3.07 3.11 3.1 3.11 3.12 3.09 3.15 3.19 3.2 3.17 3.22 3.2 3.2 3.15 3.15 3.19 3.09 3.2 3.29 3.26 3.24 3.24 3.23 3.21 3.19 3.19 3.18 3.21 3.18 3.21 3.21 3.23 3.25 3.25 3.27 3.2 3.21 3.17 3.18 3.19 3.13 3.08 3.09 3.09 3.09 3.05 3.02 3.1 3.08 3.1 3.13 3.2 3.25 3.35 3.72 3.93 3.67 3.57 3.48 3.49 3.52 3.54 3.46 3.31 3.29 3.21 3.25 3.27 3.21 3.19 3.15 3.17 3.19 3.15 3.13 3.17 3.17 3.31 3.35 3.29 3.39 3.36 3.46 3.44 3.39 3.37 3.32 3.25 3.21 3.1 3.15 3.15 3.21 3.19 3.14 3.14 3.03 3.07 3.06 3.04 2.89 2.95 2.99 2.94 2.99 2.98 2.97 2.93 2.9 2.89 2.88 2.88 2.92 2.95 2.93 2.89 2.82 2.85 2.8 2.88 2.83 2.87 2.86 2.74 2.73 2.63 2.63 2.61 2.64 2.6 2.72 2.72 2.69 2.67 2.61 2.61 2.64 2.68 2.69 2.69 2.72 2.74 2.68 2.66 2.66 2.66 2.67 2.67 2.67 2.64 2.66 2.68 2.69 2.75 2.73 2.91 2.86 2.85 2.86 2.86 2.84 2.94 2.92 2.88 2.81 2.76 2.79 2.84 2.82 2.81 2.85 2.8 2.72 2.73 2.64 2.64 2.61 2.59 2.61 2.6 2.66 2.66 2.68 2.67 2.68 2.73 2.71 2.69 2.66 2.67 2.66 2.66 2.65 2.65 2.62 2.62 2.62 2.68 2.66 2.78 2.78 2.84 2.81 2.81 2.87 2.94 2.99 2.88 2.99 2.97 3.16 3.22 3.2 3.4 3.25 3.18 3.23 3.19 3.17 3.21 3.05 3.09 3.19 3.27 3.47 3.55 3.5 3.42 4.01 4.45 4.61 4.57 4.37 4.42 4.26 4.14 4.09 4.16 4.02 4.16 3.99 3.75 3.73 3.67 3.73 3.74 3.94 3.78 3.6 3.6 3.66 3.67 3.51 3.53 3.15 3.09 3.1 3.2 3.16 3.21 3.2 3.25 3.32 3.4 3.4 3.24 3.23 3.22 3.31 3.32 3.27 3.19 3.23 3.18 3.09 3.12 3.12 3.12 3.17 3.18 3.1 3.17 3.16 3.16 3.13 3.12 3.06 3.04 3.04 3.02 2.96 2.91 2.88 2.8 2.8 2.86 2.92 2.94 2.92 2.97 2.95 2.95 3 2.91 2.93 2.89 2.9 2.83 2.82 2.84 2.82 2.86 2.89 2.86 3.13 3.02 2.98 2.98 2.95 2.94 2.94 2.93 2.9 2.89 2.88 2.88 2.9 2.94 2.95 2.88 2.8 2.78 2.78 2.75 2.82 2.84 2.84 2.92 2.88 2.84 2.83 2.84 2.87 2.84 2.78 2.79 2.75 2.79 2.79 2.71 2.72 2.69 2.71 2.7 2.76 2.75 2.74 2.8 2.81 2.81 2.8 2.76 2.82 2.84 2.95 3.18 3.18 3.11 2.95 3.04 3.04 2.99 2.97 3.01 2.96 2.88 2.8 2.82 2.76 2.85 2.94 3.04 3.13 3.05 3.13 3.15 3.02 3.02 3.02 3.09 3.07 3.13 3.2 3.17 3.17 3.19 3.15 3.1 3 3 2.95 2.92 2.94 2.92 2.89 2.88 2.85 2.89 2.89 2.91 2.88 2.91 2.91 2.98 2.99 2.95 2.9 2.88 2.83 2.84 2.86 2.87 2.84 2.81 2.83 2.81 2.79 2.79 2.76 2.74 2.74 2.75 2.76 2.71 2.65 2.65 2.73 2.69 2.64 2.68 2.69 2.71 2.72 2.77 2.8 2.88 2.81 2.85 2.86 2.97 2.87 2.84 2.86 2.84 2.92 2.95 2.94 2.94 2.86 2.88 2.86 2.95 2.97 2.94 2.98 3.1 3.12 3.03 3.08 2.97 3 3.13 3.19 3.06 3.09 3.17 3.28 3.27 3.22 3.2 3.27 3.24 3.19 3.19 3.17 3.21 3.42 3.46 3.28 3.16 3.17 3.13 3.05 3.12 2.94 2.9 2.94 2.95 2.84 2.85 2.86 2.83 2.87 2.85 2.84 2.86 2.86 2.84 2.85 2.82 2.83 2.77 2.78 2.77 2.75 2.79 2.81 2.79 2.82 2.82 2.76 2.8 2.83 2.86 2.8 2.78 2.74 2.74 2.72 2.71 2.72 2.72 2.74 2.72 2.71 2.75 2.74 2.76 2.75 2.78 2.8 2.78 2.71 2.66 2.71 2.63 2.66 2.66 2.65 2.71 2.76 2.78 2.83 2.8 2.75 2.74 2.75 2.74 2.72 2.67 2.7 2.7 2.69 2.69 2.72 2.71 2.71 2.73 2.69 2.69 2.68 2.77 2.79 2.81 2.84 2.87 2.84 2.85 2.78 2.73 2.75 2.71 2.7 2.7 2.72 2.71 2.71 2.67 2.7 2.75 2.73 2.75 2.7 2.69 2.7 2.67 2.63 2.6 2.63 2.65 2.66 2.65 2.68 2.68 2.67 2.71 2.7 2.65 2.71 2.76 2.7 2.7 2.68 2.66 2.68 2.73".split(" ").map(Number);
  function checkDesireWindow(){
    if (hyDates.length !== hyOas.length) console.warn("Desire: dates and values out of step");
    var hi = Math.max.apply(null, hyOas), lo = Math.min.apply(null, hyOas);
    if (hi.toFixed(2) !== "4.61" || lo.toFixed(2) !== "2.59")
      console.warn("Desire: window extremes moved — expected 4.61 / 2.59, got " + hi + " / " + lo);
  }
  GYN.step("checkDesireWindow", checkDesireWindow, "check"); checkDesireWindow();
  function hyAt(i){
    var t = hyDates[i];
    return { y:2000 + +t.slice(0, 2), m:+t.slice(2, 4), d:+t.slice(4, 6) };
  }
  function hyLabel(i){ var t = hyAt(i); return MONTHS_SHORT[t.m - 1] + " " + t.d + " " + t.y; }
  var DESIRE_STOPS = ["1y", "max"];
  function hyNum(i){ var a = hyAt(i); return a.y * 10000 + a.m * 100 + a.d; }
  function hyWindowFrom(key){
    var sp = timelineSpan(key);
    if (sp == null || sp === Infinity) return 0;
    var last = hyAt(hyDates.length - 1);
    var cut = (last.y - sp) * 10000 + last.m * 100 + last.d;
    for (var i = 0; i < hyDates.length; i++) if (hyNum(i) >= cut) return i;
    return 0;
  }
  // one reading per quarter for the row's miniature — the last close of each, so the twelve columns are the
  // same twelve-slot shape every other peek uses and the April 2025 spike survives the sampling
  function hyQuarterEnds(){
    var out = [], key = null;
    hyDates.forEach(function(t, i){
      var a = hyAt(i), k = a.y + "Q" + Math.ceil(a.m / 3);
      if (k !== key){ key = k; out.push({ k:k, v:hyOas[i] }); }
      else out[out.length - 1].v = hyOas[i];
    });
    return out.map(function(o){ return o.v; });
  }

  // Shiller CAPE, year by year since 1970, from multpl's annual table of Robert Shiller's series.
  // These are JANUARY readings — one convention, stated, rather than a series that quietly changes what it means at
  // the end. That is why the line finishes at 39.65 (Jan 2026) while the row's figure is 41.3 (Sep 24 2026): the same
  // gauge, eight months apart. The full monthly series runs to 1871 and has been as low as 4.78 (Dec 1920).
  var capeHistory = [{y:1970,v:17.09},{y:1971,v:16.46},{y:1972,v:17.26},{y:1973,v:18.71},{y:1974,v:13.53},{y:1975,v:8.92},{y:1976,v:11.19},{y:1977,v:11.44},{y:1978,v:9.24},{y:1979,v:9.26},{y:1980,v:8.85},{y:1981,v:9.26},{y:1982,v:7.39},{y:1983,v:8.76},{y:1984,v:9.89},{y:1985,v:10.0},{y:1986,v:11.72},{y:1987,v:14.92},{y:1988,v:13.9},{y:1989,v:15.09},{y:1990,v:17.05},{y:1991,v:15.61},{y:1992,v:19.77},{y:1993,v:20.32},{y:1994,v:21.41},{y:1995,v:20.22},{y:1996,v:24.76},{y:1997,v:28.33},{y:1998,v:32.86},{y:1999,v:40.57},{y:2000,v:43.77},{y:2001,v:36.98},{y:2002,v:30.28},{y:2003,v:22.9},{y:2004,v:27.66},{y:2005,v:26.59},{y:2006,v:26.47},{y:2007,v:27.21},{y:2008,v:24.02},{y:2009,v:15.17},{y:2010,v:20.53},{y:2011,v:22.98},{y:2012,v:21.21},{y:2013,v:21.9},{y:2014,v:24.86},{y:2015,v:26.49},{y:2016,v:24.21},{y:2017,v:28.06},{y:2018,v:33.31},{y:2019,v:28.38},{y:2020,v:30.99},{y:2021,v:34.51},{y:2022,v:36.94},{y:2023,v:28.34},{y:2024,v:31.97},{y:2025,v:37.14},{y:2026,v:39.65}];

  var longCycleSrc = [
    {t:"CBO — The Budget and Economic Outlook: 2026 to 2036 (Feb 2026)", u:"https://www.cbo.gov/publication/62105"},
    {t:"Treasury and BEA via FRED — Total public debt, % of GDP, quarterly, 1966– (GFDEGDQ188S; today's reading)", u:"https://fred.stlouisfed.org/series/GFDEGDQ188S"},
    {t:"OMB via FRED — Gross federal debt, % of GDP, FY1939– (GFDGDPA188S; the record and the band)", u:"https://fred.stlouisfed.org/series/GFDGDPA188S"},
    {t:"OMB via FRED — Federal debt held by the public, % of GDP, FY1939– (FYPUGDA188S)", u:"https://fred.stlouisfed.org/series/FYPUGDA188S"},
    {t:"OMB via FRED — Federal interest outlays, % of GDP, FY1940– (FYOIGDA188S)", u:"https://fred.stlouisfed.org/series/FYOIGDA188S"},
    {t:"OMB via FRED — Federal surplus or deficit, % of GDP, FY1929– (FYFSGDA188S)", u:"https://fred.stlouisfed.org/series/FYFSGDA188S"},
    {t:"OMB Historical Tables (Tables 1.2, 3.1 and 7.1 — the source series behind the three FRED lines above)", u:"https://www.whitehouse.gov/omb/information-resources/budget/historical-tables/"},
    {t:"U.S. Treasury Fiscal Data — Historical Debt Outstanding, 1790– (the 1835 low point)", u:"https://fiscaldata.treasury.gov/datasets/historical-debt-outstanding/historical-debt-outstanding"},
    {t:"U.S. Treasury Fiscal Data — Debt to the Penny (today's total)", u:"https://fiscaldata.treasury.gov/datasets/debt-to-the-penny/debt-to-the-penny"},
    {t:"BLS via FRED — Nonfarm business output per hour, quarterly index (OPHNFB); the annual averages behind the productivity line", u:"https://fred.stlouisfed.org/series/OPHNFB"},
    {t:"CBO — Federal Net Interest Costs: A Primer", u:"https://www.cbo.gov/publication/56910"},
    {t:"BLS — Productivity and Costs, Second Quarter 2026 (revised)", u:"https://www.bls.gov/news.release/archives/prod2_09032026.htm"},
    {t:"BLS via FRED — Nonfarm business output per hour, index (OPHNFB) and quarterly % change (PRS85006092), 1947–", u:"https://fred.stlouisfed.org/series/PRS85006092"}
  ];

  /* The Debt burden row, its record, its band and the whole Power history are typed into 03-data (the build
     order puts that part before this data), so each is checked here against the fetched series it came from. A
     backfill that revises FRED, or a hand edit that drifts, warns — and a warning fails the suite. */
  function checkGrossDebt(){
    if (typeof fiscalHistory === "undefined" || !fiscalHistory.gross) return console.warn("checkGrossDebt: no fiscalHistory");
    var row = labPanel[0], by = function(a){ var o = {}; a.forEach(function(d){ o[d.y] = d.v; }); return o; };
    var g = by(fiscalHistory.gross), it = by(fiscalHistory.interest), bu = by(fiscalHistory.budget), bad = [];
    var top = fiscalHistory.gross.reduce(function(a, d){ return d.v > a.v ? d : a; });
    if (Math.abs(row.meter.max - top.v) > 0.05) bad.push("max " + row.meter.max + " vs FY" + top.y + " " + top.v);
    var last = grossDebtQuarterly[grossDebtQuarterly.length - 1];
    if (Math.abs(row.meter.value - last.v) > 0.05) bad.push("value " + row.meter.value + " vs " + last.q + " " + last.v);
    var sum = 0, n = 0; for (var y = 1976; y <= 2025; y++) if (g[y] != null){ sum += g[y]; n++; }
    if (n !== 50 || Math.round(sum / n) !== row.meter.optimal.lte) bad.push("band " + row.meter.optimal.lte + " vs " + (sum / n).toFixed(2) + " over " + n);
    powerHistory.forEach(function(p){
      if (g[p.y] == null || it[p.y] == null || bu[p.y] == null){ bad.push("FY" + p.y + " missing"); return; }
      var v = powerOf(stressScoreFor([g[p.y], it[p.y], -bu[p.y]]));
      if (v !== p.v) bad.push("power FY" + p.y + " " + p.v + " vs " + v);
    });
    if (bad.length) console.warn("checkGrossDebt: " + bad.join("; "));
  }
  GYN.step("checkGrossDebt", checkGrossDebt, "check"); checkGrossDebt();

  // Psychology (leading signs): a lab-report panel like Financial resilience's (labreport/labtable; marker,
  // reference-range and flag columns; one "Impression" line). flagValue/flagState/direction follow labPanel:
  // null when the value sits inside its own optimal band (renders "—" in the Flag column).
  // ---------------- Sentiment (fast) and Valuation (slow) ----------------
  // Does a marker turn over in weeks and get read contrarian (sentiment: the VIX, credit spreads), or predict
  // a decade and say nothing about next year (valuation: CAPE, Buffett)? Shiller calls valuation crystallised
  // sentiment — fine in a book; a dashboard gives a tag and a colour, so they go in separate drawers.
  var sentiment = {
    kicker:"How she feels right now",
    hint:"Her mood, fast and contrarian: what the option market is paying for protection, what lenders demand to take risk, and how much she is borrowing to bet on herself.",
    tag:{text:"Greedy", state:"serious"},
    rows:[
      { marker:"CBOE VIX", sub:"Sep 22 2026",
        // the band is the VIX's own usual home, not a one-sided "optimal": a low VIX is not good news, it is
        // complacency
        meter:{min:9.14,max:82.69,value:14.21,optimal:{from:13,to:20, label:"13–20"}, ends:{low:"Complacent", zone:"Usual", high:"Panicked"}},
        shortNote:"Eased to a fresh multi-week low while stocks stayed calm — complacency compounding on complacency.",
        note:"The price of protection, and so the cleanest read on fear in the equity market: it is what options traders are paying to insure against a fall over the next 30 days. It fell through the week after the FOMC's surprise quarter-point hike \u2014 17.71 on Sep 16, 15.44 on Sep 17, 14.81 on Sep 18 (Cboe closes) — held essentially flat into the new week at 14.87 on Sep 21, then eased further to 14.21 on Sep 22 \u2014 still well below the ~19\u201320 long-run average. That is still the newest close the published series carries — FRED's VIXCLS has posted nothing after Sep 22 — so this reading is dated accordingly, and it is worth reading against the Treasury curve beside it, which has moved a long way since: the 10-year went from 4.96% on Sep 21 to 5.18% on Sep 24, its highest in the app's twenty-one-year record. A calm options market alongside a quiet one is the more ordinary pairing — but calm bought this cheap, this close to fresh highs, is still calm. Read it contrarian: a low VIX is not good news, it is the absence of worry, and the extremes at both ends are the signal. It is also the slower of the two fear gauges: credit usually cracks before equity volatility does \u2014 spreads widened through 2007 while the VIX stayed calm \u2014 so Desire, which reads the high-yield spread, is worth checking against this one. Range: the index's record closing low (9.14, Nov 3 2017) and high (82.69, Mar 16 2020), both published by Cboe.",
        direction:"up", flagValue:"14.2", flagState:"warning" }
    ],
    shortImpression:"The published gauge says fear; the two markets it is built on say almost none is priced.",
    impression:"Two things are true at once and the panel shows both. The headline index reads Fear, because it is built mostly of momentum and breadth and the market has been sliding for a month. The two markets underneath it read the opposite: the option market is paying almost nothing for protection and lenders are asking almost nothing to take credit risk, which is the same sentence said twice. Sentiment has turned while almost no fear is priced in against forty years of history. None of this forecasts a fall \u2014 a contrarian read is not a timer, and complacency can last for years \u2014 but it is the condition in which a shock is expensive.",
    src:[{t:"Cboe via FRED \u2014 CBOE Volatility Index, daily closes since 1990 (VIXCLS)", u:"https://fred.stlouisfed.org/series/VIXCLS"},{t:"Cboe via FRED \u2014 CBOE S&P 500 3-Month Volatility Index, daily closes (VXVCLS)", u:"https://fred.stlouisfed.org/series/VXVCLS"},{t:"Cboe \u2014 Inside Volatility Trading: the VIX record low (9.14, Nov 3 2017) and high (82.69, Mar 16 2020)", u:"https://www.cboe.com/insights/posts/inside-volatility-trading-nothing-remains-unchanged/"},{t:"Federal Reserve \u2014 FOMC statement, Sep 16 2026", u:"https://www.federalreserve.gov/newsevents/pressreleases/monetary20260916a.htm"},{t:"S&P DJI via FRED \u2014 S&P 500 daily closes (SP500)", u:"https://fred.stlouisfed.org/series/SP500"},{t:"S&P DJI via FRED \u2014 Dow Jones Industrial Average daily closes (DJIA)", u:"https://fred.stlouisfed.org/series/DJIA"},{t:"Federal Reserve via FRED \u2014 10-year Treasury constant-maturity yield, daily (DGS10)", u:"https://fred.stlouisfed.org/series/DGS10"},{t:"ICE Data Indices via FRED \u2014 ICE BofA US High Yield Index Option-Adjusted Spread (BAMLH0A0HYM2)", u:"https://fred.stlouisfed.org/series/BAMLH0A0HYM2"}]
  };
  sentiment = LIVE("sentiment", sentiment);
  var valuation = {
    kicker:"What she is priced at",
    hint:"Slow and structural: what the market is willing to pay for her. A ten-year return predictor, not a read on the next twelve months \u2014 CAPE passed 30 in 2017 and the market rose for four more years.",
    // The verdict is COMPUTED from CAPE against fair value, in one family of words — Keren, V290: "… use
    // overvalued or undervalued, and for the range in between choose words from the same family, maybe fairly
    // valued". Five bands on one axis; the word moves on its own when the market does.
    tag:null,   // set immediately below, from the CAPE this object carries
    rows:[
      { key:"buffett", marker:"Buffett Indicator", sub:"market cap \u00f7 GDP, Q2 2026",
        /* The only citable threshold is Buffett's own (Fortune, 2001): at "the 70% or 80% area, buying stocks
           is likely to work very well for you", and approaching 200% "you are playing with fire". So the band
           ends at his 80%; by his standard the market left it in the late 1990s and has scarcely returned. That
           is the reading, not a fault in the band. */
        meter:{min:32,max:256,value:256,optimal:{lte:80, label:"\u2264 80%"}, ends:{zone:"Buffett\u2019s zone", high:"Rich"}},
        shortNote:"The highest reading in the 80-year record \u2014 above the 2021 and dot-com peaks.",
        note:"Warren Buffett's own gauge of capital relative to the real economy. Computed here straight from the Federal Reserve's Financial Accounts (Z.1): the market value of nonfinancial corporate equities ($83.1T at end-Q2 2026) divided by nominal GDP ($32.5T annualized, Q2 2026) \u2014 the same definition the widely quoted charts use. At \u2248256% this is the highest reading in the 80-year record, clear of the 2021 peak (\u2248219%) and the dot-com peak (\u2248163%); the record low is \u224832% (Q2 1982).",
        direction:"up", flagValue:"\u2248256%", flagState:"serious" },
      { key:"cape", marker:"Shiller CAPE", sub:"cyclically-adjusted P/E ratio",
        meter:{min:4.78,max:44.19,value:41.25,optimal:{lte:17, label:"\u2264 17\u00d7"}, ends:{zone:"Long-run mean", high:"Rich"}},
        shortNote:"Among the richest readings on record, just shy of the dot-com peak.",
        note:"Cyclically-adjusted P/E (Sep 24 2026) vs. its ~17\u00d7 long-run average \u2014 among the richest readings on record, just shy of the all-time dot-com peak. Range: Robert Shiller's monthly series since 1871, from 4.78 (Dec 1920) to 44.19 (Dec 1999); the daily reading is multpl's update of the same data. The band ends at 17\u00d7, which is that series' own long-run mean (17.42) rather than a target \u2014 there is no level a market ought to trade at.",
        direction:"up", flagValue:"41.3\u00d7", flagState:"serious" }
    ],
    shortImpression:"Both gauges are at or near their record \u2014 she is priced for everything to keep going right.",
    impression:"Two independent measures of the same thing, both at or near the richest readings ever recorded: capital is worth 2.5 times the economy that produces it, and prices are 41 times a decade of earnings. Valuations are close to useless as a timing signal \u2014 they have been stretched for years and the market kept rising. What it reliably says is what the next decade's returns are likely to look like from here, and that a shock arriving at this price has further to fall before anything looks cheap.",
    src:[{t:"Federal Reserve Z.1 via FRED \u2014 Nonfinancial corporate equities, market value (NCBEILQ027S)", u:"https://fred.stlouisfed.org/series/NCBEILQ027S"},{t:"BEA via FRED \u2014 Gross Domestic Product, nominal (GDP)", u:"https://fred.stlouisfed.org/series/GDP"},{t:"Robert Shiller \u2014 U.S. stock market data and CAPE ratio since 1871 (Yale)", u:"https://shillerdata.com/"},{t:"Shiller CAPE ratio, daily reading (multpl.com, from Shiller's data)", u:"https://www.multpl.com/shiller-pe"}]
  };
  valuation = LIVE("valuation", valuation);
  /* Rows are addressed by NAME through `valRow` (an index would swap readings silently after a reorder), so
     the order can follow the page — Keren, V494: "Shiller CAPE above the Buffett indicator, because that is
     what the chart draws". */
  function valRow(k){
    for (var i = 0; i < valuation.rows.length; i++) if (valuation.rows[i].key === k) return valuation.rows[i];
    return null;
  }
  // … and the order the page wants: CAPE leads, because the chart above these rows is CAPE's
  valuation.rows.sort(function(a, b){ return (a.key === "cape" ? 0 : 1) - (b.key === "cape" ? 0 : 1); });
  valuation.tag = valuationVerdict(valRow("cape").meter.value);   // computed: see the tag note in `valuation`

  var coincident = [
    {
      bodyTerm:"Desire", econTerm:"Risk tolerance (credit)",
      tag:{text:"High appetite", state:"good"},
      metric:"2.80%", metricSub:"high-yield OAS, Sep 24 2026",
      meter:{min:2.41,max:21.82,value:2.80,optimal:{from:3.5,to:6, label:"3.5–6%"},
             ends:{ low:"Tight", zone:"Normal", high:"Wide" }},
      shortCaption:"A touch off its tightest levels, but still near the tightest spread on record — she's in the mood to take risk.",
      caption:"Libido peaks at the fertile window itself — a real-time reading, not a forecast. The extra yield investors demand for junk bonds sits close to the tightest it's ever been (the record low is 2.41%, June 2007; the record high 21.82%, December 2008 — the ICE BofA index's own history, which FRED has carried since 1996 but now trims to a rolling three-year window): she's in the mood to take risk, for better or worse. That's also why the dot below flags as outside the typical 4–5% band even though the tag above stays \"good\" — abnormally tight spreads are read as bullish risk appetite by the market, but they're a historically unusual place for compensation to sit, not a healthy resting state. The Sentiment panel reads this same figure from that second end, which is why one tag is green and the other flags: both are true of one number.",
      aux:{label:"Long-run median, since 1996", value:"~4.5%"},
      get peek(){ return colPeek(hyQuarterEnds(), function(){ return "hy-col"; }); },
      src:[{t:"ICE Data Indices via FRED — ICE BofA US High Yield Index Option-Adjusted Spread (BAMLH0A0HYM2)", u:"https://fred.stlouisfed.org/series/BAMLH0A0HYM2"},{t:"ICE Data Indices — index originator (full history behind the FRED window)", u:"https://www.ice.com/fixed-income-data-services/index-solutions/fixed-income-indices"}]
    },
    {
      // Keren, V357: "we removed the cogwheel from Effort and also removed Effort — we just call it
      // industrial output now." The roster prints `sub` alone when it starts with `title`, so the row reads
      // "Industrial output" once. FOLDED and signMarks index this sign by its body term, so they use it too.
      bodyTerm:"Industrial output", econTerm:"Industrial output",
      tag:{text:"Expanding", state:"good"},
      metric:"54.6", metricSub:"ISM Manufacturing PMI, Aug 2026",
      // 29.4 is May 1980, the deepest contraction on record — the end word names it
      meter:{min:29.4,max:77.5,value:54.6,optimal:{gte:50, label:"≥ 50"}, ends:{ low:"Contracting" }},
      shortCaption:"Above the breakeven line for an eighth straight month — genuinely expanding.",
      caption:"How hard she is working right now, i.e. current industrial output — a real-time read on activity, not a forecast or a valuation. Above the 50 breakeven line for an eighth straight month, genuinely up rather than just avoiding a slump. Range: ISM's record low (29.4, May 1980) and high (77.5, July 1950); ISM's full history is members-only, so the two extremes are taken from Trading Economics' compilation of it.",
      aux:{label:"Months above 50", value:"8"},
      src:[{t:"ISM — Manufacturing PMI Report On Business, August 2026 (ISM's release, distributed via PR Newswire)", u:"https://www.prnewswire.com/news-releases/manufacturing-pmi-at-54-6-august-2026-ism-manufacturing-pmi-report-302865127.html"},{t:"ISM — Report On Business, Manufacturing PMI (report page)", u:"https://www.ismworld.org/supply-management-news-and-reports/reports/ism-report-on-business/pmi/august/"},{t:"ISM Manufacturing PMI record high/low, 1948– (Trading Economics compilation of ISM data)", u:"https://tradingeconomics.com/united-states/business-confidence"}]
    },
    {
      // Keren, V487: "just write money velocity, and put the M2 data inside the info — I see it's already
      // there." The (i) opens on "nominal GDP divided by M2", so the name stays plain.
      bodyTerm:"Pulse", econTerm:"Money velocity",
      tag:{text:"Recovering", state:"warning"},
      metric:"1.42×", metricSub:"M2 velocity, Q2 2026",
      // Keren, V297: the ends say what the spectrum MEANS. Low velocity is money sitting still (a stalled or
      // recessionary economy); high is money changing hands fast (busy and, past a point, inflationary).
      meter:{min:1.126, max:2.192, value:1.415, optimal:{from:1.7, to:2.19, label:"1.7–2.2×"},
             ends:{ low:"Slow · hoarding", zone:"Pre-2008", high:"Fast · spending" }},
      shortCaption:"Recovering off an all-time low, but still circulating well under her pre-2008 pace.",
      caption:"Her literal pulse — not a mood, a tempo: how many times the same dollar changes hands in a year (nominal GDP ÷ M2), independent of how anxious or calm she feels. The parallel is arithmetic rather than poetic. A heart's output is its rate times the volume it moves per beat; an economy's nominal output is its velocity times the money it holds. Those are the same equation wearing two sets of names — M2 is the stroke volume, velocity is the pulse rate, and nominal GDP is what the two of them together deliver. Which is also why the spectrum runs the way it does: money sitting still is a body at rest or stalled, money changing hands quickly is a body working hard, and past a point, running hot. One honest caveat — unlike a pulse, this is not measured directly. It is computed, nominal GDP divided by M2, so it can never tell you anything those two have not already said; that is why the post-2008 collapse in velocity surprised a monetary tradition that had assumed it was stable. Steadily recovering off the all-time low set during 2020's stimulus (1.13×), but still running well under the 1.7–2.2× pace that held from the 1960s through the mid-2000s — a slower circulation than her long-run norm, consistent with a system still holding more cash and credit per transaction than it used to.",
      aux:{label:"COVID-era low (2020)", value:"1.13×"},
      src:[{t:"Federal Reserve via FRED — Velocity of M2 Money Stock, quarterly since 1959 (M2V; record low 1.126 in Q2 2020, high 2.192 in Q3 1997)", u:"https://fred.stlouisfed.org/series/M2V"}]
    },
    {
      bodyTerm:"Volume", econTerm:"Money stock (M2)", timing:"leading",
      tag:null,   // computed below, from the reading this object carries
      metric:"+5.7%", metricSub:"M2, year over year, Aug 2026",
      meter:{min:-4.64, max:25.61, value:5.66, optimal:{from:3.5, to:10, label:"3.5\u201310%"},
             ends:{ low:"Draining", zone:"Her pace", high:"Flooding" }},
      shortCaption:"Growing at her ordinary pace again, after the largest transfusion in the record and the only drain.",
      caption:"How much blood there is \u2014 the other half of the number Pulse measures. Nominal output is the money stock times its velocity, so Volume and Pulse are two halves of one reading and neither means much alone: a racing pulse on full volume is exercise, and the same pulse on falling volume is shock. Her volume grew 40% in the twenty-six months to April 2022, the largest transfusion in the record, while velocity fell to its all-time low \u2014 which is why prices stayed quiet far longer than the money alone implied, and why the fever arrived only when circulation picked up on top of the enlarged stock. Then the volume itself was drained: five quarters of year-over-year contraction from 2023 Q1, the only ones in sixty-seven years. Range: +25.6% (2021 Q1) to \u22124.6% (2023 Q2), against a 1960\u20132019 pace of 6.8%.",
      // no aux stat: the container above already lists the level, and a figure is said once per page
      src:[{t:"Federal Reserve via FRED \u2014 M2 money stock, monthly since 1959 (M2SL)", u:"https://fred.stlouisfed.org/series/M2SL"}]
    }
  ];
  coincident = LIVE("coincident", coincident);
  function deriveVolumeTag(){
    var vol = coincident.filter(function(c){ return c.bodyTerm === "Volume"; })[0];
    if (vol) vol.tag = volumeVerdict(vol.meter.value);
  }
  GYN.step("deriveVolumeTag", deriveVolumeTag, "derive"); deriveVolumeTag();

  // Keren, V298: "I'm not sure 'Recovering' is appropriate — I would rather have an indicator that tells me:
  // is the velocity fast or slow." Pulse's tag is computed (velocityVerdict, a later part) in five bands
  // against the 1959–2007 mean the trace draws; both extremes are flagged; the direction lives in the caption.
  // These constants sit ABOVE that verdict, their first reader: `var` hoists the name but not the value, and a
  // reader above them divides by undefined and falls silently through to the last band.
  var PULSE_WINDOW = 5;        // years drawn in every lane on the page; equal spans are what make it a comparison
  var PULSE_WINDOW_PEEK = 3;   // a card is ~140px wide: fewer beats, so each has room for its P and T waves
  var PULSE_PRE2008 = 1.857;   // mean of FRED M2V, 1959 Q1 - 2007 Q4 (196 quarters; median 1.808, range 1.652-2.192)

  /* ---------------- The whole record, opened from the mark ----------------
     Keren, V303: "instead of pressing the heart icon, I want the data to be in a separate container below the
     main one." A popup is for a note; a 270-quarter record gets the second container, under the trace (which
     compares two tempos and so is not Pulse's own history).
     FRED M2V, 1959 Q1 to 2026 Q2, in thousandths. Checked on load (05-history) against FRED's stated records,
     1.126 (2020 Q2) and 2.192 (1997 Q3), so a mis-transcribed digit cannot go unnoticed. */
  var M2V_FROM_YEAR = 1959;
  var m2vHistory = (
    "1773 1789 1773 1779 1817 1797 1780 1737 1723 1725 1733 1742 1746 1728 1726 1701 1690 1675 1680 1672 1685 " +
    "1679 1674 1652 1668 1669 1680 1693 1713 1712 1733 1744 1739 1708 1695 1691 1715 1733 1730 1722 1737 1749 " +
    "1774 1773 1789 1804 1795 1752 1770 1736 1717 1690 1696 1703 1679 1673 1694 1711 1711 1739 1725 1748 1764 " +
    "1781 1766 1741 1739 1750 1752 1731 1717 1699 1690 1701 1713 1715 1713 1780 1795 1822 1832 1835 1846 1857 " +
    "1870 1847 1831 1874 1928 1900 1925 1888 1843 1835 1825 1804 1745 1753 1779 1797 1812 1819 1829 1818 1799 " +
    "1795 1795 1793 1792 1760 1741 1722 1718 1734 1751 1776 1768 1774 1789 1813 1841 1861 1853 1834 1848 1859 " +
    "1856 1839 1827 1833 1850 1861 1875 1905 1931 1950 1971 1985 1997 2023 2047 2080 2103 2138 2155 2151 2142 " +
    "2146 2147 2165 2171 2176 2174 2189 2192 2184 2171 2154 2154 2140 2130 2124 2127 2145 2135 2150 2139 2132 " +
    "2085 2057 2011 1978 1967 1969 1950 1924 1913 1899 1903 1938 1948 1938 1947 1956 1983 1993 1998 1999 2015 " +
    "2015 2003 1994 1992 1983 1974 1974 1937 1923 1904 1810 1733 1705 1707 1722 1736 1742 1744 1741 1723 1708 " +
    "1651 1644 1639 1627 1608 1582 1580 1570 1569 1560 1538 1545 1550 1537 1520 1525 1519 1497 1471 1462 1455 " +
    "1447 1440 1434 1438 1447 1457 1461 1463 1461 1455 1456 1451 1435 1390 1126 1176 1165 1155 1150 1152 1163 " +
    "1163 1191 1219 1252 1287 1324 1351 1369 1373 1387 1393 1392 1390 1395 1407 1409 1413 1415"
  ).split(" ").map(function(n){ return +n / 1000; });

  // Drawn at the width it will occupy, so viewBox and pixels are 1:1 and type renders at the size it says; a
  // fixed viewBox would make one label 8px on a 318px phone and 20px on an 810px desktop. Rendered by
  // sheetRenderers on open, like every page chart.
  function velocityHistoryChart(Wpx, from, to){
    var F = histFrame(Wpx), W = F.W, narrow = F.narrow, H = F.H,
        L = F.L, R = F.R, T = F.T, B = F.B;
    from = from || 0;
    var ser = m2vHistory.slice(from, to == null ? undefined : to), n = ser.length;
    // The 1959–2007 average is ALWAYS inside the scale, at every stop. That is the whole reading of this chart
    // — the line never comes back up to it — and a window that cropped the average away would leave a tidy
    // picture saying nothing (see windowScale).
    var sc = windowScale(ser, [PULSE_PRE2008]);
    var LO = sc.lo, HI = sc.hi;
    var X = function(i){ var h = (R - L) / (2 * Math.max(1, n));   // half a slot in at each end, so a
      return L + h + (R - L - 2 * h) * i / Math.max(1, n - 1); };  // mark can never cross the rail or the frame
    var Y = function(v){ return B - (B - T) * (v - LO) / (HI - LO); };
    var f = function(v){ return v.toFixed(1); };
    var out = [];
    var y0 = M2V_FROM_YEAR + Math.floor(from / 4);
    var y1 = M2V_FROM_YEAR + Math.floor((m2vHistory.length - 1) / 4);

    // Pulse's readings never come near zero — velocity runs 1.1 to 2.2 — so the rule beneath is the frame,
    // not a zero anyone should measure from, the same distinction the diverging chart makes.
    out.push(chartAxes({ ticks:sc.ticks, y:Y, x0:L, x1:R, base:B, top:(T - AXIS.LEG - AXIS.READ), bot:B,
      fmt:function(g){ return g.toFixed(1) + "\u00d7"; } }));
    windowYears(y0, y1, narrow ? 4 : 5).forEach(function(yr){
      var i = (yr - M2V_FROM_YEAR) * 4 - from; if (i < 0 || i >= n) return;
      out.unshift(vGrid(X(i), T, B));
      out.push(xLabel(f(X(i)), yr, B + 17));
    });

    // the average is drawn across the years it is the average OF — which is also the clearest way to show where
    // the regime broke: the line simply never comes back up to it. Past 2008 there is no such stretch in view, so
    // it spans the plot as a plain reference instead, which is what it has become for a reader of a short window.
    var iEnd = (2008 - M2V_FROM_YEAR) * 4 - 1 - from;
    var meanTo = iEnd > 0 ? X(Math.min(iEnd, n - 1)) : R;
    out.push('<path class="vh-mean" d="M' + f(X(0)) + ',' + f(Y(PULSE_PRE2008)) + 'H' + f(meanTo) + '"/>');
    out.push(crossLine(T, B));
    // Pulse's columns carry .hcol (drawn below), so the hover lights them like any other history's.
    var pAvg = ser.reduce(function(a, v){ return a + v; }, 0) / (n || 1);
    publishGeom("velocityHistoryChart", { L:L, R:R, T:T, B:B, W:W, n:n, at:function(d, i){ return qAtIndex(M2V_FROM_YEAR, from + i); },
                     fmt:function(v){ return v.toFixed(3) + "\u00d7"; },
                     refs:[{ label:"Average", v:pAvg },
                           { label:"Pre-2008 mean", v:PULSE_PRE2008, dash:true }],
                     vals:ser.map(function(v){ return { v:v }; }) });
    // the legend names both lines (see histLegend)
    out.push(avgRule(f(X(0)), f(X(n - 1)), f(Y(pAvg))));

    /* Keren, V500: "make sure all the charts are bars." Velocity lives between 1.1 and 2.2, so columns out of
       zero would waste two thirds of the plot; like Valuations' diverging bars they hang off a labelled
       midline, the pre-2008 mean, so each says how far its quarter sits from the era that ended. */
    var pSlot = (R - L) / Math.max(1, n), pSw = colWidth(pSlot);
    var pMidY = Y(PULSE_PRE2008);
    ser.forEach(function(v, i){
      var y1 = Y(v);
      if (Math.abs(y1 - pMidY) < 0.6) y1 = pMidY + (v >= PULSE_PRE2008 ? -0.6 : 0.6);
      out.push('<path class="pv-col hcol ' + (v >= PULSE_PRE2008 ? "over" : "under") + '" stroke-width="' +
        pSw.toFixed(2) + '" d="' + colPath(X(i), pMidY, y1, pSw) + '"/>');
    });

    /* No marks in the plot for the extremes or the latest point: the resting plate, the legend and the range
       bar already say them. Keren, V568: "I'm seeing now 2.73% in a white background — we don't need this." */
    var pvFit = trendOf(ser, "points", "quarter").fit;
    if (pvFit && pvFit.n > 1)
      out.push(fitGroup({ fit:pvFit, fmt:function(v){ return v.toFixed(2) + "\u00d7"; } }, X(0), X(n - 1), Y, R, L, 0));

    return vhOpen(W, H) +
      'aria-label="Velocity of M2, every quarter from ' + y0 + ' to ' + y1 +
      ', against the 1959 to 2007 average of ' + PULSE_PRE2008.toFixed(2) + ' times">' +
      out.join("") + '</svg>';
  }

  /* Desire's history, on the same frame as every other — same axes helper, same plate rule, same hover
     geometry — because a history that invented its own would be the inconsistency the timeline forbids. What
     is its own: columns coloured by where each close sits against the normal band. */
  function desireHistoryChart(Wpx, from){
    var F = histFrame(Wpx), W = F.W, narrow = F.narrow, H = F.H,
        L = F.L, R = F.R, T = F.T, B = F.B;
    from = from || 0;
    var ser = hyOas.slice(from), n = ser.length;
    /* Zero (a column's baseline has to BE zero) and the band's FLOOR (where the columns sit against it IS the
       reading) are forced into the scale. The ceiling is not: on 1Y, the stop picked for detail, it would
       squash the columns. It can run off the top, as the bar's edge marker says. */
    var sc = windowScale(ser, [0, HY_NORM_LO]);
    var LO = sc.lo, HI = sc.hi;
    var X = function(i){ var h = (R - L) / (2 * Math.max(1, n));   // half a slot in at each end, so a
      return L + h + (R - L - 2 * h) * i / Math.max(1, n - 1); };  // mark can never cross the rail or the frame
    var Y = function(v){ return B - (B - T) * (v - LO) / (HI - LO); };
    var f = function(v){ return v.toFixed(1); };
    var out = [];
    out.push(chartAxes({ ticks:sc.ticks, y:Y, x0:L, x1:R, base:B, top:(T - AXIS.LEG - AXIS.READ), bot:B,
      fmt:function(g){ return g.toFixed(1) + "%"; } }));
    // No shaded band: the columns are coloured by it. Year gridlines go on the first close of each calendar
    // year INSIDE the window, so a one-year view is labelled once rather than not at all.
    var y0 = hyAt(from).y, seen = {};
    for (var gi = 0; gi < n; gi++){
      var yr = hyAt(from + gi).y;
      if (seen[yr] || yr === y0){ seen[yr] = 1; continue; }
      seen[yr] = 1;
      out.unshift(vGrid(X(gi), T, B));
      out.push(xLabel(f(X(gi)), yr, B + 17));
    }
    out.push(crossLine(T, B));
    var hyAvg = ser.reduce(function(a, v){ return a + v; }, 0) / (n || 1);
    publishGeom("desireHistoryChart", { L:L, R:R, T:T, B:B, W:W, n:n,
                     at:function(d, i){ return hyLabel(from + i); },
                     fmt:function(v){ return v.toFixed(2) + "%"; },
                     // .hy-avg, not the app's .temp-avg: this chart's average is drawn in the range bar's grey
                     // (see below), and the legend's mark wears the line it names
                     refs:[{ label:"Average", v:hyAvg, cls:"hy-avg" }],
                     vals:ser.map(function(v){ return { v:v }; }) });
    /* The average takes the GREY of the range bar's average dot, not the accent purple: one colour, one
       meaning, across the two. The bar beneath names the band in its own colour, so the chart has no key. */
    out.push('<path class="hy-avg" d="M' + f(X(0)) + ',' + f(Y(hyAvg)) + 'H' + f(X(n - 1)) + '"/>');
    // Columns out of zero, coloured by the band. At Max, 787 daily closes of about a pixel each read as a
    // dense picture, like the 944-month Activity chart.
    var hySlot = (R - L) / Math.max(1, n), hySw = colWidth(hySlot);
    ser.forEach(function(v, i){
      var st = v < HY_NORM_LO ? "tight" : v <= HY_NORM_HI ? "good" : v < 10 ? "warning" : "serious";
      out.push('<path class="hy-col2 hcol ' + st + '" stroke-width="' + hySw.toFixed(2) +
        '" d="' + colPath(X(i), Y(0), Y(v), hySw) + '"/>');
    });
    return vhOpen(W, H) +
      'aria-label="High-yield credit spread, every trading day from ' + hyLabel(from) + ' to ' + hyLabel(hyOas.length - 1) +
      ', against the normal ' + HY_NORM_LO + ' to ' + HY_NORM_HI + ' percent band">' + out.join("") + '</svg>';
  }
  // the container, on Volume's pattern: it names itself, holds the picture, the record and the trend
  /* Keren, V476: "the test result component can live inside the history component — you have the
     cycles/years bar and below it the test result …" The record extremes stay in the note, cited. */
  /* Three equal segments, 3% gutter (the proportions of the panel Keren sent). The value sits in the segment
     its band puts it in, at its own fraction of it, so it reads as "this far from the floor towards normal".
     `floor`/`ceil` are the series' own extremes, widened so outer segments always have range — never the
     window's: a bar whose geometry moved with a control would be the inconsistency this replaced. */
  var PBAR_GAP = 3;
  function panelBar(o){
    /* One-sided ranges draw TWO segments (Industrial output ≥ 50, the debt burden ≤ 60): an empty third would
       be a region that cannot exist. As on a lab reference panel (FSH, ALT), the wider half is the BAND. */
    var noLow = o.from <= o.floor, noHigh = o.to >= o.ceil;
    var segs;
    if (noLow && noHigh) segs = [{ on:true, l:0, w:100 }];
    else if (noLow)      segs = [{ on:true, l:0, w:57 }, { l:60, w:40 }];
    else if (noHigh)     segs = [{ l:0, w:40 }, { on:true, l:43, w:57 }];
    else { var W = (100 - PBAR_GAP * 2) / 3;
           segs = [{ l:0, w:W }, { on:true, l:W + PBAR_GAP, w:W }, { l:(W + PBAR_GAP) * 2, w:W }]; }
    var band = segs.filter(function(g){ return g.on; })[0];
    var lowSeg = noLow ? null : segs[0], highSeg = noHigh ? null : segs[segs.length - 1];
    var t01 = function(x){ return Math.max(0, Math.min(1, x)); };
    var v = o.value, g, frac;
    if (v < o.from && lowSeg){ g = lowSeg; frac = t01((v - o.floor) / ((o.from - o.floor) || 1)); }
    else if (v > o.to && highSeg){ g = highSeg; frac = t01((v - o.to) / ((o.ceil - o.to) || 1)); }
    else { g = band; frac = t01((v - o.from) / ((o.to - o.from) || 1)); }
    var x = g.l + frac * g.w;
    var flagged = v < o.from || v > o.to;
    return '<div class="pbar-labels' + (noLow || noHigh ? " two" : "") + '">' +
        (noLow ? "" : '<span>' + o.lowLabel + '</span>') +
        '<span>' + o.zoneLabel + '</span>' +
        (noHigh ? "" : '<span>' + o.highLabel + '</span>') +
      '</div>' +
      '<div class="pbar">' +
        segs.map(function(sg){
          return '<span class="pbar-seg' + (sg.on ? " on" : "") + '" style="left:' + sg.l.toFixed(2) +
                 '%; width:' + sg.w.toFixed(2) + '%"></span>';
        }).join("") +
        '<span class="pbar-dot' + (flagged ? " flagged" : "") + '" style="left:' + x.toFixed(2) + '%"></span>' +
      '</div>';
  }
  /* The reading as a row — name and figure left, spectrum right — so every page that has a history and a
     range wears the same object. */
  /* A name may wrap, but never away from its own mark: the last word and the (i) are glued into one
     unbreakable unit, so the break moves one word earlier — what a typesetter would do. */