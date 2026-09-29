  // ---- RENDER: range bars + card helpers ----
  function clampPct(v, lo, hi){ return Math.max(0, Math.min(100, ((v - lo) / (hi - lo)) * 100)); }

  function infoIcon(fullHtml, title){
    var html = /^\s*<h4/.test(fullHtml) ? fullHtml : '<h4>' + (title || "About this reading") + '</h4>' + factsFrom(fullHtml);
    return expandBtn(html).replace('class="expand-btn"', 'class="info-btn expand-btn"').replace('aria-label="Expand details"', 'aria-label="More detail"');
  }

  var detailTexts = [];
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
  var powerPanelHtml = "", valuationPanelHtml = "";
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
  function facts(list){ return '<ul class="facts">' + list.map(function(f){ return "<li>" + f + "</li>"; }).join("") + '</ul>'; }
  function factsFrom(text){
    var parts = String(text).replace(/\s+/g, " ").trim().split(/(?<=[.!?])\s+(?=[A-Z(“"'"'"'])/);
    return facts(parts.filter(function(x){ return x.trim(); }));
  }
  function expandBtn(fullHtml){
    return '<button type="button" class="expand-btn" data-detail-idx="' + detailSlot(fullHtml) +
           '" aria-label="Expand details">i</button>';
  }
  var sheetRenderers = {};
  var pageMode = { "sheet-metric-temp":"cycles", "sheet-metric-gdp":"cycles",
                   "sheet-metric-power":"cycles", "sheet-metric-valuation":"cycles",
                   "volume-range":"cycles", "pulse-range":"cycles",
                   "deficit-range":"cycles", "hzn-range":"cycles", "fear-range":"cycles", "hormones-range":"cycles", "pressure-range":"cycles",
                   "sheet-metric-households":"cycles", "sheet-sign-activity":"cycles" };
  var pageCycles = { "sheet-metric-temp":null, "sheet-metric-gdp":null,
                     "sheet-metric-power":null, "sheet-metric-valuation":null,
                     "volume-range":null, "pulse-range":null,
                     "deficit-range":null, "hzn-range":null, "fear-range":null, "hormones-range":null, "pressure-range":null,
                     "sheet-metric-households":null, "sheet-sign-activity":null };
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
      var sheet = btn && btn.closest && btn.closest(".metric-sheet");
      var chip = sheet && sheet.querySelector(".timing-row");
      if (chip) body.appendChild(chip.cloneNode(true));
      backdrop.classList.add('show');
    }

    function close(){ backdrop.classList.remove('show'); body.innerHTML = ""; }
    document.addEventListener('click', function(e){
      var btn = e.target.closest && e.target.closest('.expand-btn, .details-link, .more-row, .bh-opt');
      if (btn){ if (btn.closest('summary')) e.preventDefault();
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

  // ---- RENDER: compile date — the header pill, from DATA_COMPILED (visible on every tab) ----
  byId("asof-text").textContent = "Data compiled " + dataCompiledLabel;

  function meterHtml(m){
    var pct = clampPct(m.value, m.min, m.max);
    var o = m.optimal, ends = m.ends || {}, flagged = false, zoneHtml = '', labelsHtml = '';
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
  function srcBlock(list){ return '<div class="src">' + srcHtml(list) + '</div>'; }
  /* ---- THE SUBJECT ROW ---- */
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
  function subjectIcon(state, svg){ return '<div class="subject-icon"><span class="' + state + '">' + svg + '</span></div>'; }
  function srcHtml(list){ return list.map(function(s){ return '<a href="' + s.u + '" target="_blank" rel="noopener">' + s.t + '</a>'; }).join(" · "); }
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
  function timingPill(kind){
    var t = TIMING[kind]; if (!t) return "";
    return '<div class="timing-row">' +
      '<button type="button" class="timing ' + kind + '" data-ind-tab="' + kind + '" ' +
        'aria-label="Show the ' + t.label.toLowerCase() + ' readings">' +
        timingMark(kind) + '<b>' + t.label + '</b>' + CHEV +
      '</button></div>';
  }

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
    if (chip.parentNode !== foot) foot.appendChild(chip);
    var more = sheet.querySelector(".more-row"), hl = sheet.querySelector(".highlights");
    var home = hl || foot;
    if (more && more.parentNode !== home) home.appendChild(more);
    if (sheet.lastElementChild !== foot) sheet.appendChild(foot);
  }

  var timingMembers = { leading:[], coincident:[], lagging:[], structural:[] };
  function registerTiming(kind, entry){ if (timingMembers[kind]) timingMembers[kind].push(entry); }

  function headHtml(ind, noMark){
    var mk = "";
    if (signMarks[ind.bodyTerm] && !noMark){
      mk = '<span class="head-mark" aria-hidden="true"><span class="head-mark-disc">' +
        signMarks[ind.bodyTerm]() + '</span></span>';
    }
    return '<div class="card-head">' + mk + '<div class="card-titles"><span class="body-term">' + ind.bodyTerm + '</span><span class="econ-term">' + ind.econTerm + '</span></div><span class="tag ' + ind.tag.state + '">' + ind.tag.text + '</span></div>';
  }
  var heldHighlights = "";
  function cardDetailHtml(ind, opts){
    opts = opts || {};
    var facts = [].concat(ind.facts || [], ind.aux || []);
    var chartHtml = opts.chart || '';
    var bloodTest = opts.bare ? '' :
      ((opts.noHead ? '' : headHtml(ind, opts.noMark) +
        '<div class="metric-row"><span class="metric mono">' + ind.metric + '</span><span class="metric-sub">' + ind.metricSub + '</span></div>') +
      (opts.noMeter ? '' : meterHtml(ind.meter)));
    if (bloodTest && opts.bloodCard) bloodTest = '<div class="page-chart blood-card">' + bloodTest + '</div>';
    return (opts.chartFirst ? chartHtml + bloodTest : bloodTest + chartHtml) +
    (function(){
      var lede = ind.lead != null ? ind.lead : (ind.shortCaption != null ? ind.shortCaption : (ind.caption || ""));
      var figs = facts.map(function(a){
        return '<div class="aux-stat' + (a.wordy ? " wordy" : "") + '"><span>' + a.label + '</span><b>' + a.value + '</b></div>';
      }).join("");
      if (!lede && !figs) return "";
      var block = '<section class="highlights"><div class="hi-head">Highlights</div>' +
        (lede ? '<div class="hi-card"><p>' + lede + '</p></div>' : "") + figs + '</section>';
      if (opts.deferHighlights){ heldHighlights = block; return ""; }
      return block;
    })() +
      (function(){
        if (opts.bare) return "";
        var rest = dropWhatIsShown(ind.caption, ind.lead || ind.shortCaption || "");
        return rest ? moreRow('<h4>' + ind.bodyTerm + '</h4><div class="marker-sub">' + ind.econTerm + '</div>' + factsFrom(rest)) : "";
      })();
  }

  // ---- RENDER: Pressure — U.S. Treasury yields, one maturity at a time ----
  var CURVE_KEY = { "3m":"3M", "2y":"2Y", "5y":"5Y", "10y":"10Y", "30y":"30Y" };
  function latestYieldPoint(){
    var iso = curveAsOf(), mm = /^(\d{4})-(\d{2})-\d{2}$/.exec(iso);
    var at = function(k){ var h = yieldCurve.filter(function(d){ return d.m === k; })[0]; return h && h.y != null ? h.y : null; };
    var v = {}, all = !!mm;
    Object.keys(CURVE_KEY).forEach(function(c){ v[c] = at(CURVE_KEY[c]); if (v[c] == null) all = false; });
    if (!all) return null;
    return { q:mm[1] + " Q" + Math.ceil(Number(mm[2]) / 3), label:fmtAsOf(iso), v:v, spread:at("10Y") - at("3M") };
  }
  function withLatestPoint(base, pt){
    var data = base.slice(), last = data[data.length - 1];
    if (pt && last.q === pt.q) data[data.length - 1] = pt; else if (pt && pt.q > last.q) data.push(pt);
    return data;
  }
  function renderPressurePage(){
    var svg = byId("ylm-svg");
    var W = 780, H = 260, padL = AXIS.L, padR = AXIS.R, padT = AXIS.T + AXIS.LEG + AXIS.READ, padB = 30;
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
    var latestLabel = "", latestSpread = null;
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

    var ylmFrom = 0, ylmTo = quarters.length;
    function ylmCount(){ return ylmTo - ylmFrom; }
    function x(i){
      var half = innerW / (2 * Math.max(1, ylmCount()));
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
      minV = 0;
      maxV = Math.ceil(Math.max.apply(null, vals) / 1) * 1;
      if (maxV <= minV) maxV = minV + 1;
    }
    function y(v){ return padT + innerH - ((v - minV) / (maxV - minV)) * innerH; }

    var tooltip = byId("ylm-tooltip");
    var onMaturities;

    function render(){
      var shell = svg.parentNode;
      W = Math.max(270, Math.round((shell && shell.clientWidth) || 360));
      H = W < 430 ? 268 : 300;
      innerW = W - padL - padR; innerH = H - padT - padB;
      svg.setAttribute("viewBox", "0 0 " + W + " " + H);
      computeScale();
      onMaturities = maturities.filter(function(m){ return m.on; });
      svg.innerHTML = "";

      var steps = maxV - minV <= 6 ? (maxV - minV) : 6, ylmTicks = [];
      for (var s = 0; s <= steps; s++) ylmTicks.push(minV + ((maxV - minV) * s) / steps);
      svg.insertAdjacentHTML("beforeend", chartAxes({ ticks:ylmTicks, y:y, x0:padL, x1:(W - padR), top:(padT - AXIS.LEG - AXIS.READ), bot:(H - padB),
        base:y(0), noGridAt:0, fmt:function(v){ return v.toFixed(0) + "%"; } }));
      svg.classList.add("hist-svg");
      svg.insertAdjacentHTML("beforeend",
        crossLine(padT, (H - padB)));
      var picked = matOf(matPick);
      publishGeom("ylm", { L:x(ylmFrom), R:x(ylmTo - 1), T:padT, B:(H - padB), W:W,
                       n:ylmCount(), at:function(d, i){ return colLabel(ylmFrom + i); },
                       fmt:function(v){ return v.toFixed(2) + "%"; },
                       refs:[{ label:"Inverted", swatch:"var(--critical)" },
                             { label:"Normal",   swatch:"var(--season-autumn)" },
                             { label:"Steep",    swatch:"var(--good)" }],
                       vals:(picked ? picked.data.slice(ylmFrom, ylmTo).map(function(d){
                              return d.v == null ? null : { v:d.v }; }) : []) });

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

      // ---- The picked maturity is drawn as COLUMNS (Keren, V394 — see ylmFrom), shaded by the 10-year-minus ----
      var spreadAt = {};
      t10y3mHistory.forEach(function(d){ spreadAt[d.q] = d.v; });
      var lastCol = maturities[0].data[quarters.length - 1];
      if (lastCol && lastCol.latest && latestSpread != null) spreadAt[lastCol.q] = latestSpread;
      var colW = colWidth(innerW / Math.max(1, ylmCount()));
      maturities.forEach(function(mat){
        if (!mat.on) return;
        var y0 = y(0);
        mat.data.forEach(function(d, i){
          if (i < ylmFrom || i >= ylmTo || d.v == null) return;
          var sp = spreadAt[quarters[i]];
          var zone = sp == null ? "normal" : pressureZone(sp).key;
          svg.appendChild(el("path", {
            class:"yl-col hcol " + zone, "stroke-width":colW.toFixed(2), "stroke-linecap":"butt",
            d:"M" + x(i).toFixed(2) + "," + y0.toFixed(2) + "V" + y(d.v).toFixed(2)
          }));
        });
      });

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
        var i = k + ylmFrom;
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

    var matPick = "10y";
    var SERIES = maturities.map(function(m){ return { key:m.code, label:m.name.replace("-Month", "M").replace("-Year", "Y") }; });
    GYN.on("pickSeries", function(bar, code){
      matPick = code; maturities.forEach(function(m){ m.on = (m.code === matPick); });
      drawPressure();
    });
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
      var mTrend = put("volume-trend", trendPill(
        trendOf(m2Yoy.slice(4).slice(mFrom, mTo).filter(function(v){ return v != null; }), "points", "quarter"),
        null, true, { rising:"accelerating", falling:"decelerating" }));
    }
    sheetRenderers["sheet-sign-volume"] = drawM2Record;
    sheetRenderers["volume-range"] = drawM2Record;
    function drawDesireRecord(){
      var host = byId("desire-record");
      if (!host || !host.clientWidth) return;
      var from = hyWindowFrom(pageRange["desire-range"]);
      var win = hyOas.slice(from);
      var bar = byId("desire-timeline");
      if (bar) bar.innerHTML = '<div class="hist-controls">' +
        rangeBar("desire-range", timelineFor({ depth:3, stops:DESIRE_STOPS }),
                 pageRange["desire-range"]) + '</div>';
      host.innerHTML = desireHistoryChart(host.clientWidth, from);
      attachHistory(host, "desire-hist-tooltip", "desireHistoryChart");
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
    function matTitle(){ var m = matOf(matPick); return (m ? m.name : "") + " U.S. Treasury"; }
    function matDetail(){ var m = matOf(matPick); return m ? m.detail : ""; }

    function drawYlm(){
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
        var w = [], mt = matOf(matPick);
        if (mt) mt.data.slice(ylmFrom, ylmTo).forEach(function(d){ if (d.v != null) w.push(d.v); });
        yTrend.innerHTML = trendPill(trendOf(w, "points", "quarter"), null, true,
          { rising:"climbing", falling:"easing" });
      }
      drawPressureHead();
    }
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
    function drawPressure(){ drawYlm(); renderPressureInsights(); }
    sheetRenderers["pressure-range"] = drawPressure;
    sheetRenderers["sheet-sign-pressure"] = drawPressure;

    maturities.forEach(function(m){ m.on = (m.code === matPick); });

    var y10 = (yieldCurve.filter(function(d){ return d.m === "10Y"; })[0] || {}).y;
    put("subj-value-pressure", (y10 == null ? "—" : y10.toFixed(2) + "%") +
      '<span class="unit">10-year Treasury</span>');
    var rowSay = byId("subj-say-pressure");
    if (rowSay) rowSay.outerHTML = colPeek(t10yYieldHistory.map(function(d){ return d.v; }),
                                           function(){ return "yl-col normal"; }, 0, true);
  }
  GYN.step("renderPressurePage", renderPressurePage, "mixed"); renderPressurePage();

  /* ---- Pressure's Insights ---- */
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