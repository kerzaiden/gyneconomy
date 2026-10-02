  /* ---- Live data without a render refactor ---- */
  var LIVE_CACHE = (function(){
    try { return JSON.parse(window.localStorage.getItem("gyn.live") || "{}") || {}; }
    catch (e) { return {}; }
  })();
  function merge(base, over){
    var o = {};
    if (base && typeof base === "object" && !Array.isArray(base))
      for (var b in base) if (Object.prototype.hasOwnProperty.call(base, b)) o[b] = base[b];
    for (var k in over) if (Object.prototype.hasOwnProperty.call(over, k)) o[k] = over[k];
    return o;
  }
  function LIVE(name, fallback){
    var d = LIVE_CACHE[name];
    if (!d || typeof d !== "object") return fallback;
    try {
      if (d.kind === "series") return Array.isArray(d.rows) && d.rows.length ? d.rows : fallback;
      if (d.kind === "scalar") return d.value === undefined ? fallback : d.value;
      if (d.kind === "object"){
        var over = {}, any = false;
        for (var k in d) if (k !== "kind" && Object.prototype.hasOwnProperty.call(d, k)){ over[k] = d[k]; any = true; }
        return any ? merge(fallback, over) : fallback;
      }
    } catch (e) {}
    return fallback;
  }
  var fedFunds = { lo:3.75, hi:4.00, lastMove:"+0.25", lastMoveLabel:"raised a quarter point",
                   asOf:"Sep 16, 2026", vote:"12\u20130", next:"Oct 28, 2026" };
  fedFunds = LIVE("fedFunds", fedFunds);
  /* ---- The first series to come from outside the file ---- */

  function paintReading(sheet, value, tag){
    var doors = document.querySelectorAll('[data-open="' + sheet + '"]'), painted = 0;
    Array.prototype.forEach.call(doors, function(d){
      var v = d.querySelector(".ci-value, .subject-value");
      if (v && v.firstChild && v.firstChild.nodeType === 3){ v.firstChild.nodeValue = String(value); painted++; }
      if (!tag) return;
      var t = d.querySelector(".tag");
      if (!t) return;
      t.textContent = tag.text;
      if (tag.state != null && /\btag\b/.test(t.className))
        t.className = "tag " + tag.state + (/\bci-word\b/.test(t.className) ? " ci-word" : "");
    });
    if (doors.length && !painted)
      (window.__paintMiss = window.__paintMiss || []).push(sheet + ": " + doors.length + " doors, none printed");
    return painted;
  }

  function repaintVolatility(){
    put("subj-ring-sentiment", volatilityRing());
    paintReading("sheet-sign-sentiment", vixRow.flagValue, volatilityTag());
  }
  function repaintPressureRow(){
    var h = yieldCurve.filter(function(d){ return d.m === "10Y"; })[0];
    if (!h || h.y == null) return;
    paintReading("sheet-sign-pressure", h.y.toFixed(2) + "%", null);
  }
  function repaintPressureChart(){
    var s = byIdMaybe("sheet-sign-pressure");
    if (s && !s.hidden && sheetRenderers["pressure-range"]) sheetRenderers["pressure-range"]();
  }
  function repaintValuationRow(){
    var row = valRow("cape");
    if (!row) return;
    paintReading("sheet-metric-valuation", row.flagValue, valuation.tag || null);
  }
  /* ---- THE READING REGISTRY ---- */
  var READINGS = {
    fedFunds: {
      kind: "object",
      ok: function(v){ return typeof v.lo === "number"; },
      set: function(v){ fedFunds = merge(fedFunds, v); },
      paint: [repaintPolicy]
    },
    yieldCurve: { kind: "series", set: function(v){ yieldCurve = v; }, paint: [repaintPressureRow, repaintPressureChart] },
    sentiment:  { kind: "object", set: function(v){ sentiment = v; }, onOpen: true },
    valuation:  {
      kind: "object",
      set: function(v){
        valuation = v;
        if (valRow("cape")) valuation.tag = valuationVerdict(valRow("cape").meter.value);
      },
      paint: [repaintValuationRow]
    },
    coincident: {
      kind: "series",
      set: function(v){ coincident = v; deriveVolumeTag(); derivePulseTag(); },
      onOpen: true
    },
    vixClose: {
      kind: "scalar", band: [5, 100],
      set: function(v){
        var row = sentiment.rows[0];
        row.meter.value = v;
        row.flagValue = v.toFixed(1);
        if (liveAsOf.vixClose) row.sub = liveAsOf.vixClose;
      },
      paint: [repaintVolatility]
    },
    vix3mClose: { kind: "scalar", band: [5, 100], set: function(v){ vix3mClose = v; }, onOpen: true },
    hyOasNow: {
      kind: "scalar", band: [1, 30],
      set: function(v){
        var row = coincident.filter(function(c){ return c.bodyTerm === "Desire"; })[0];
        row.meter.value = v;
        row.metric = v.toFixed(2) + "%";
        if (liveAsOf.hyOasNow) row.metricSub = "high-yield OAS, " + liveAsOf.hyOasNow;
      },
      onOpen: true
    },
    capeValue: {
      kind: "scalar", band: [4, 60],
      set: function(v){
        var row = valRow("cape");
        row.meter.value = v;
        row.flagValue = v.toFixed(1) + String(row.flagValue || "").replace(/^[\d.,\s-]+/, "");
        if (liveAsOf.capeValue) row.sub = liveAsOf.capeValue;
        valuation.tag = valuationVerdict(v);
      },
      paint: [repaintValuationRow]
    }
  };
  var LIVE_NAMES = Object.keys(READINGS);
  var KINDS = ["object", "series", "scalar"];
  function checkLiveCoverage(){
    var bad = [];
    LIVE_NAMES.forEach(function(n){
      var r = READINGS[n], shows = (r.paint && r.paint.length) ? 1 : 0;
      if (KINDS.indexOf(r.kind) < 0) bad.push(n + ": kind " + r.kind);
      if (r.kind === "scalar" && !(r.band && r.band.length === 2 && r.band[0] < r.band[1]))
        bad.push(n + ": a scalar needs a band");
      if (typeof r.set !== "function") bad.push(n + ": nowhere to land");
      if (shows + (r.onOpen ? 1 : 0) !== 1)
        bad.push(n + ": " + (shows ? (r.onOpen ? "paints AND declares onOpen" : "") : "no painter and no onOpen"));
      (r.paint || []).forEach(function(f){ if (typeof f !== "function") bad.push(n + ": painter is not a function"); });
    });
    if (bad.length && window.console) console.warn("reading registry: " + bad.join(", "));
  }
  function receive(next, mode){
    var names = Object.keys(next).filter(function(n){ return READINGS[n]; });
    if (!names.length) return 0;
    var prev = LIVE_CACHE, moved = 0;
    var now = mode === "replace" ? next : merge(LIVE_CACHE, next);
    try { window.localStorage.setItem("gyn.live", JSON.stringify(now)); } catch (e) {}
    LIVE_CACHE = now;
    names.forEach(function(name){
      try {
        if (next[name] && next[name].asOf) liveAsOf[name] = fmtAsOf(next[name].asOf);
        if (prev && prev[name] && JSON.stringify(prev[name]) === JSON.stringify(next[name])) return;
      } catch (e) {}
      if (applyLive(name, LIVE(name, null))) moved++;
    });
    return moved;
  }
  var liveAsOf = {};
  function fmtAsOf(iso){
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso || ""));
    if (!m) return "";
    return MONTHS_SHORT[Number(m[2]) - 1] + " " + Number(m[3]) + " " + m[1];
  }
  function applyLive(name, value){
    if (value == null) return false;
    var r = READINGS[name];
    if (!r) return false;
    try {
      if (!shapeOk(r, value)) return false;
      r.set(value);
    } catch (e) { return false; }
    (r.paint || []).concat(repaintDiagnosis).forEach(function(fn){
      try { fn(); } catch (e) { if (window.console) console.warn("repaint " + name + " failed", e); }
    });
    return true;
  }
  function shapeOk(r, v){
    if (r.kind === "series") return Array.isArray(v) && v.length > 0;
    if (r.kind === "scalar") return typeof v === "number" && v >= r.band[0] && v <= r.band[1];
    if (!v || typeof v !== "object" || Array.isArray(v)) return false;
    return r.ok ? !!r.ok(v) : true;
  }

  function repaintPolicy(){
    var box = put("policy-facts", policyFactRows());
    var dir = /^\+/.test(fedFunds.lastMove) ? "Tightening"
            : /^[-−]/.test(fedFunds.lastMove) ? "Easing" : "On hold";
    paintReading("sheet-sign-hormones", fedFundsRange(), { text:dir });
  }
  var GYN = {
    steps: [],
    step: function(name, fn, kind){ this.steps.push({ name: name, fn: fn, kind: kind }); return fn; },
    of: function(kind){ return this.steps.filter(function(s){ return s.kind === kind; }); },
    repeatable: function(){
      return this.steps.filter(function(s){
        return s.kind === "check" || s.kind === "derive" || s.kind === "render";
      });
    },
    acts: {},
    on: function(name, fn){ this.acts[name] = fn; return fn; },
    has: function(name){ return typeof this.acts[name] === "function"; },
    fire: function(name, a, b){
      if (this.has(name)) return this.acts[name](a, b);
      (window.__actMiss = window.__actMiss || []).push(name);
    },
    render: function(){
      this.repeatable().forEach(function(s){
        try { s.fn(); } catch (e) { if (window.console) console.warn("GYN.render: " + s.name, e); }
      });
      return this.repeatable().length;
    }
  };
  try { window.__GYN = GYN; GYN.applyLive = applyLive; GYN.READINGS = READINGS; } catch (e) {}

  GYN.step("checkLiveCoverage", checkLiveCoverage, "check"); checkLiveCoverage();

  function refreshLiveData(){
    if (!window.claude || typeof window.claude.use !== "function") return;
    window.claude.use("db").then(function(db){
      if (!db) return;
      return Promise.all(LIVE_NAMES.map(function(name){
        return db.doc("data/" + name).get().then(function(row){
          var d = row && (row.data || row);
          return (d && typeof d === "object") ? [name, d] : null;
        }).catch(function(){ return null; });
      })).then(function(rows){
        var next = {}, got = 0;
        rows.forEach(function(r){ if (r){ next[r[0]] = r[1]; got++; } });
        if (!got) return;
        receive(next, "replace");
      });
    }).catch(function(){});
  }
  GYN.step("refreshLiveData", refreshLiveData, "live"); refreshLiveData();
  function fetchSiteData(){
    try {
      if (window.top !== window.self) return;
      if (location.protocol !== "http:" && location.protocol !== "https:") return;
      if (typeof fetch !== "function") return;
    } catch (e) { return; }
    fetch("data/live.json", { cache: "no-store" }).then(function(r){
      return r.ok ? r.json() : null;
    }).then(function(doc){
      if (!doc || typeof doc !== "object") return;
      var next = {};
      for (var k in doc) if (k !== "_meta" && Object.prototype.hasOwnProperty.call(doc, k)) next[k] = doc[k];
      receive(next, "merge");
    }).catch(function(){  });
  }
  GYN.step("fetchSiteData", fetchSiteData, "live"); fetchSiteData();
  function fedFundsRange(){
    return (fedFunds.lo === fedFunds.hi ? fedFunds.lo.toFixed(2)
            : fedFunds.lo.toFixed(2) + "\u2013" + fedFunds.hi.toFixed(2)) + "%";
  }
