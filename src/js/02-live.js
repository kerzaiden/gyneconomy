  /* ---------------- Version 528: live data without a render refactor ----------------
     The problem this solves: only a PRINTED value can be repainted when the database answers. Every other
     figure is DERIVED at load — Fear & Greed alone feeds seven computed things across 31 render blocks — so
     making it live meant either blocking the first paint on a permission prompt (the runtime contract forbids
     it) or rebuilding the render of a 12,400-line file.
     Neither is necessary. The database answer from the LAST visit is cached in this browser and applied HERE,
     synchronously, before a single derived value is computed. So the figures are already live by the time the
     app builds itself, every derived reading is correct, and nothing repaints because nothing needs to.
     The cost, stated plainly: a viewer sees data as of their previous visit, and on a first-ever visit sees the
     file's own figures. For a page the nightly task refreshes once a day that is at most one visit behind, and
     it is never WRONG — every payload carries the `asOf` its own reading was taken on.
     `localStorage` can be empty, disabled or throw; every read is guarded and falls back to the literal, which
     is why the literals stay. This is a cache, not a store: the database is the record. */
  var LIVE_CACHE = (function(){
    try { return JSON.parse(window.localStorage.getItem("gyn.live") || "{}") || {}; }
    catch (e) { return {}; }
  })();
  function LIVE(name, fallback){
    var d = LIVE_CACHE[name];
    if (!d || typeof d !== "object") return fallback;
    try {
      if (d.kind === "series") return Array.isArray(d.rows) && d.rows.length ? d.rows : fallback;
      if (d.kind === "scalar") return d.value === undefined ? fallback : d.value;
      if (d.kind === "object"){
        var o = {}, any = false;
        for (var k in d) if (k !== "kind" && Object.prototype.hasOwnProperty.call(d, k)){ o[k] = d[k]; any = true; }
        return any ? o : fallback;
      }
    } catch (e) {}
    return fallback;
  }
  /* The six the nightly refresh moves. Histories are deliberately not cached: they change a few times a year,
     they are the bulk of the payload, and a stale one would be a worse trade than a stale daily print. */
  var LIVE_DOCS = ["fedFunds", "yieldCurve", "sentiment", "valuation", "coincident", "fearGreed"];
  // the scalars the pipeline publishes, which land INSIDE the objects above (V533, V541)
  var LIVE_SCALARS = ["vixClose", "hyOas", "capeValue"];
  var fedFunds = { lo:3.75, hi:4.00, lastMove:"+0.25", lastMoveLabel:"raised a quarter point",
                   asOf:"Sep 16, 2026", vote:"12\u20130", next:"Oct 28, 2026" };
  fedFunds = LIVE("fedFunds", fedFunds);
  /* ---------------- Version 525: the first series to come from outside the file ----------------
     A published artifact cannot call FRED or any other host \u2014 external requests are blocked. The one route to
     live data is the artifact's own database, which the nightly refresh writes and the page reads. This is the
     proof of that loop on ONE object, the policy rate, chosen because it is small, it is visible on Pressure,
     and the refresh already maintains it after every FOMC decision.
     The literal above stays and is the FALLBACK, not a duplicate: `claude.use("db")` resolves null whenever the
     page is opened outside a claude.ai viewer \u2014 a local file, a test run, a reader without the grant \u2014 and the
     page has to be right in all of those. So the file's own figures render first, the database is asked
     afterwards, and the page repaints only if an answer comes back with a newer `asOf`. Nothing blocks the
     first paint on a permission prompt.
     The shape in the database is exactly the shape of the literal, so there is one schema and the fallback can
     never drift from the live row. */
  /* Version 528: the refresher. It writes the CACHE the block above reads on the next load, and repaints the
     one thing that can be repainted now (the policy rate, which is only printed). Everything else is already
     correct on this load if the cache was warm, and will be on the next load if it was not.
     It never blocks, never prompts on load beyond the capability's own consent, and a refusal is not an error:
     the page is already rendered from the literals or from the previous cache. */
  /* THE REPAINT LAYER (Version 533).

     Version 532 measured what re-rendering costs and found the answer: do not re-render. The
     category builder MOVES the subject rows out of the markup that produced them, so a renderer
     cannot be run twice — but the ELEMENTS holding the printed figures survive the move, which is
     why `repaintPolicy()` has always worked. This generalises that one working case.

     Each repaint edits in place and touches as little as possible: the figure's own text node and
     its tag, never the row's innerHTML. That is deliberate. `catItem` normalises `.unit` to
     `.ci-unit` when it moves a row, so rebuilding the markup here would quietly undo the
     normalisation and the row would come back at the wrong type size.

     Everything else needs no repaint: the inner pages draw on open, from these same module vars,
     through `sheetRenderers`. A figure only needs a repaint if it is visible WITHOUT opening a page. */
  function repaintFigureText(id, text){
    var el = document.getElementById(id);
    if (!el) return false;
    var n = el.firstChild;
    if (!n || n.nodeType !== 3) return false;
    n.nodeValue = String(text);
    return true;
  }
  function repaintTag(id, text, state){
    var el = document.getElementById(id);
    var tag = el && el.querySelector(".tag");
    if (!tag) return false;
    tag.textContent = text;
    tag.className = "tag " + (state || "");
    return true;
  }
  function repaintSentiment(){
    var score = fearGreed.value, mood = moodFrom(score);
    repaintFigureText("subj-value-sentiment", score);
    repaintTag("subj-value-sentiment", fearGreed.label, mood.state);
    var ring = document.getElementById("subj-ring-sentiment");
    if (ring) ring.innerHTML = vitalRingSvg(score, "accent", "Fear and Greed at " + score + " out of 100");
    // the mood word beside the gauge carries the DERIVED state, which is the whole point of
    // repainting rather than just reprinting a number
    var w = document.querySelector(".fg-w");
    if (w){ w.textContent = fearGreed.label; w.className = "fg-w " + mood.state + "-ink"; }
    // the date under the gauge, for the reason given at its render site
    var a = document.getElementById("fg-asof");
    if (a && fearGreed.asOf) a.textContent = "CNN, " + fearGreed.asOf;
  }
  function repaintYieldRow(){
    var pick = function(m){ var h = yieldCurve.filter(function(d){ return d.m === m; })[0]; return h ? h.y : null; };
    var y10 = pick("10Y"), y3m = pick("3M");
    if (y10 == null || y3m == null) return;
    var pv = document.querySelector("#subj-value-yield .pv");
    if (pv && pv.firstChild && pv.firstChild.nodeType === 3)
      pv.firstChild.nodeValue = y10.toFixed(2) + "/" + y3m.toFixed(2);
  }
  function repaintValuationRow(){
    var row = valRow("cape");
    if (!row) return;
    repaintFigureText("subj-value-valuation", row.flagValue);
    if (valuation.tag) repaintTag("subj-value-valuation", valuation.tag.text, valuation.tag.state);
  }
  /* Which repaints each document owes. An empty list is a statement, not an omission: the VIX row
     and the Desire/Volume/Pulse rows live on inner pages that redraw on open. */
  var REPAINT = {
    fedFunds:   [repaintPolicy],
    fearGreed:  [repaintSentiment],
    yieldCurve: [repaintYieldRow],
    valuation:  [repaintValuationRow],
    capeValue:  [repaintValuationRow],
    sentiment:  [],
    coincident: []
  };
  /* Assign a freshly-arrived document to the module var it belongs to, re-derive whatever was
     computed FROM it at load, then repaint. The re-derivation is the subtle part: `valuation.tag`
     and the Volume/Pulse tags are computed once at load from these objects, so a new object without
     them would print a stale verdict beside a fresh number — exactly the drift ONE FIGURE / ONE
     NUMBER forbids. The derive steps are reused by name rather than duplicated. */
  /* A scalar document carries its observation date beside its value, and the row it lands in
     PRINTS that date. Kept here rather than threaded through applyLive's signature, because only
     the scalars have one and a second parameter would be empty for every other document. */
  var liveAsOf = {};
  function fmtAsOf(iso){
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso || ""));
    if (!m) return "";
    return MONTHS_SHORT[Number(m[2]) - 1] + " " + Number(m[3]) + " " + m[1];
  }
  function applyLive(name, value){
    if (value == null) return false;
    try {
      switch (name){
        case "fedFunds":   if (typeof value.lo !== "number") return false; fedFunds = value; break;
        case "yieldCurve": if (!Array.isArray(value) || !value.length) return false; yieldCurve = value; break;
        case "sentiment":  sentiment = value; break;
        case "valuation":  valuation = value;
                           if (valRow("cape")) valuation.tag = valuationVerdict(valRow("cape").meter.value);
                           break;
        case "coincident": if (!Array.isArray(value) || !value.length) return false;
                           coincident = value; deriveVolumeTag(); derivePulseTag(); break;
        /* V542: every document in data/live.json carries an ISO asOf, but this object's asOf is
           PRINTED ("CNN, Sep 25 2026"), and the hard-coded literal is already in that form. So the
           incoming date is formatted when it is ISO and left alone when it is not — one shape in the
           data contract, one shape on screen, and no second date format to remember. */
        case "fearGreed": {
          if (typeof value.value !== "number") return false;
          var fgd = {}; for (var fk in value) fgd[fk] = value[fk];
          var fgIso = fmtAsOf(fgd.asOf);
          if (fgIso) fgd.asOf = fgIso;
          fearGreed = fgd;
          break;
        }
        /* The VIX close and the high-yield spread are single numbers inside objects the app owns
           outright — the bands, the notes and the words around them are editorial and belong here,
           not in a fetcher. So the pipeline publishes them as bare scalars and this is where they
           are placed, next to the prose they have to agree with. Both rows are drawn when their
           page opens, so neither owes a repaint; the figure is right on the next load either way,
           because the cache carries it. */
        case "vixClose": {
          if (typeof value !== "number" || value < 5 || value > 100) return false;
          var vrow = sentiment && sentiment.rows && sentiment.rows[0];
          if (!vrow || !vrow.meter) return false;
          vrow.meter.value = value;
          vrow.flagValue = value.toFixed(1);
          if (liveAsOf.vixClose) vrow.sub = liveAsOf.vixClose;
          break;
        }
        /* V541: CAPE arrives from Shiller's own dataset, monthly. It lands in the valuation row and
           the VERDICT is recomputed from it — `valuation.tag` is derived at load, so a fresh number
           beside a stale word is exactly the drift ONE FIGURE / ONE NUMBER forbids. */
        case "capeValue": {
          if (typeof value !== "number" || value < 4 || value > 60) return false;
          var crow = valRow("cape");
          if (!crow || !crow.meter) return false;
          crow.meter.value = value;
          // the row PRINTS flagValue, and it carries its own unit: "41.3×", not "41.3".
          // Taking the suffix from the value already there keeps it right without hard-coding it.
          var suffix = String(crow.flagValue || "").replace(/^[\d.,\s-]+/, "");
          crow.flagValue = value.toFixed(1) + suffix;
          if (liveAsOf.capeValue) crow.sub = liveAsOf.capeValue;
          valuation.tag = valuationVerdict(value);
          break;
        }
        case "hyOas": {
          if (typeof value !== "number" || value < 1 || value > 30) return false;
          var drow = coincident.filter(function(c){ return c.bodyTerm === "Desire"; })[0];
          if (!drow || !drow.meter) return false;
          drow.meter.value = value;
          drow.metric = value.toFixed(2) + "%";
          if (liveAsOf.hyOas) drow.metricSub = "high-yield OAS, " + liveAsOf.hyOas;
          break;
        }
        default: return false;
      }
    } catch (e) { return false; }
    (REPAINT[name] || []).forEach(function(fn){
      try { fn(); } catch (e) { if (window.console) console.warn("repaint " + name + " failed", e); }
    });
    return true;
  }

  function repaintPolicy(){
    var ph = document.getElementById("pressure-highlights");
    var box = ph && ph.querySelector(".highlights");
    if (!box) return;
    box.innerHTML = policyFacts().map(function(f){
      return '<div class="aux-stat' + (f.wordy ? " wordy" : "") + '"><span>' + f.label + '</span><b>' +
             f.value + '</b></div>';
    }).join("");
  }
  /* THE STEP REGISTRY (Version 531).

     Until now the script ran as 28 anonymous IIFEs in source order. They still run in exactly
     that order and at exactly those points — module-level vars are assigned between them, so the
     order is load-bearing and moving the calls would break the page. What changed is that each
     one now has a NAME, a measured KIND, and an entry here, so the app can be asked what it does
     at load rather than having it inferred from source order.

     The kinds are counted from each body, not asserted:
       check   a data assertion, no DOM — safe to re-run
       derive  computes module state — idempotent since Version 535
       wire    binds event listeners — must run ONCE, ever
       render  writes DOM and may be run again
       build   CONSUMES or MOVES static markup, or depends on state a later step sets — one-shot
       mixed   binds listeners AND writes DOM — cannot be re-run until it is split

     THE KINDS ARE MEASURED BY RUNNING THE STEP, not read off its source (Version 536). Counting
     DOM writes in a body counts the writes inside its event HANDLERS too, which fire later and say
     nothing about the step itself — that mislabelled six pure wirers as mixed, and hid that the
     1,228-line `renderPagesAndNav` binds nothing at all and converges. Measuring means patching
     `addEventListener`, running the step, and watching: listeners bound means it must run once;
     DOM settled and no listeners means it may run again. `tools/classify.js` does it.

     A name here describes what a step BUILT the first time; the kind describes whether it may run
     AGAIN. `renderCycleDial` draws a dial on the first pass and only binds handlers on a second,
     so it is named render and classified wire. The two are answering different questions.
       live    a data source: the database refresher, the site feed

     `build` is the honest kind, added in Version 535 after measuring. `renderSignsList` runs
     `while (sum.firstChild) face.appendChild(...)` — it MOVES the static markup into the category
     rows, consuming its own source, which is the documented "catItem consumes its source"
     behaviour. `renderSubjectRows` writes into hosts that `renderSignsList` then moves, so calling
     it again throws on a host that no longer exists. `renderPsychologyTag` reads a note a later
     step fills, so a second call renders MORE than the first. None of these is sloppy; all three
     are one-shot by design, and calling them builders says so instead of pretending a fix is
     pending.

     `GYN.render()` runs check, derive and render. The suite asserts that every step it runs is
     idempotent, so a step that stops being repeatable fails the build rather than rotting quietly.
     One allowance: a width-aware chart re-measures its host, so a differing viewBox WIDTH is not
     counted as a difference — `renderHorizonPage` legitimately redraws at 334 then 360. */
  var GYN = {
    steps: [],
    step: function(name, fn, kind){ this.steps.push({ name: name, fn: fn, kind: kind }); return fn; },
    of: function(kind){ return this.steps.filter(function(s){ return s.kind === kind; }); },
    // the steps that may safely run again. `build`, `wire`, `mixed` and `live` are excluded by
    // kind rather than by name — a named exception is a note that goes stale, a kind is a fact.
    repeatable: function(){
      return this.steps.filter(function(s){
        return s.kind === "check" || s.kind === "derive" || s.kind === "render";
      });
    },
    render: function(){
      this.repeatable().forEach(function(s){
        try { s.fn(); } catch (e) { if (window.console) console.warn("GYN.render: " + s.name, e); }
      });
      return this.repeatable().length;
    }
  };
  try { window.__GYN = GYN; GYN.applyLive = applyLive; } catch (e) {}   // a test seam, not an API

  function refreshLiveData(){
    if (!window.claude || typeof window.claude.use !== "function") return;
    window.claude.use("db").then(function(db){
      if (!db) return;
      return Promise.all(LIVE_DOCS.map(function(name){
        return db.doc("data/" + name).get().then(function(row){
          var d = row && (row.data || row);
          return (d && typeof d === "object") ? [name, d] : null;
        }).catch(function(){ return null; });
      })).then(function(rows){
        var next = {}, got = 0;
        rows.forEach(function(r){ if (r){ next[r[0]] = r[1]; got++; } });
        if (!got) return;
        try { window.localStorage.setItem("gyn.live", JSON.stringify(next)); } catch (e) {}
        /* V533: every document that actually CHANGED lands on this load, not only the policy rate.
           The comparison is against the cache we rendered from, so an unchanged document costs
           nothing. LIVE_CACHE is swapped in FIRST so that LIVE() does the shape-decoding — one
           decoder, not two. */
        var prev = LIVE_CACHE;
        LIVE_CACHE = next;
        LIVE_DOCS.forEach(function(name){
          var before = prev && prev[name], after = next[name];
          if (!after) return;
          try { if (before && JSON.stringify(before) === JSON.stringify(after)) return; } catch (e) {}
          applyLive(name, LIVE(name, null));
        });
      });
    }).catch(function(){});
  }
  GYN.step("refreshLiveData", refreshLiveData, "live"); refreshLiveData();
  /* THE SITE FEED (Version 534).

     On the hosted site the figures arrive as a plain file that a scheduled GitHub Action commits:
     same origin, no key, no CORS, and every refresh is a diff in the repository's history. In the
     Artifact there is no such file and the database remains the route. TWO SOURCES, ONE DECODER,
     ONE REPAINT LAYER — both hand their documents to `applyLive`, and `LIVE()` decodes the shapes
     for both.

     It runs only where the file can exist: not framed (the Artifact is an iframe) and over http(s),
     never on a file:// open. A miss is silence — the literals and the cache already rendered the
     page, and a feed that is briefly unreachable must never be visible to a reader. */
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
      // the cache is what the NEXT load renders from, so it is written whether or not anything
      // repaints now
      var merged = {};
      for (var a in LIVE_CACHE) merged[a] = LIVE_CACHE[a];
      for (var b in next) merged[b] = next[b];
      try { window.localStorage.setItem("gyn.live", JSON.stringify(merged)); } catch (e) {}
      var prev = LIVE_CACHE;
      LIVE_CACHE = merged;
      Object.keys(next).forEach(function(name){
        try {
          if (next[name] && next[name].asOf) liveAsOf[name] = fmtAsOf(next[name].asOf);
          if (prev && prev[name] && JSON.stringify(prev[name]) === JSON.stringify(next[name])) return;
        } catch (e) {}
        applyLive(name, LIVE(name, null));
      });
    }).catch(function(){ /* silence: the page already rendered */ });
  }
  GYN.step("fetchSiteData", fetchSiteData, "live"); fetchSiteData();
  function fedFundsRange(){
    return (fedFunds.lo === fedFunds.hi ? fedFunds.lo.toFixed(2)
            : fedFunds.lo.toFixed(2) + "\u2013" + fedFunds.hi.toFixed(2)) + "%";
  }
  /* Version 512, Keren: "why do we need cycle end readings? If we don't need it, just get rid of it." Right —
     nothing read it. `cycleEndReadings` held each closed cycle's Fed funds, VIX and ISM PMI at its last month,
     for the Rates ring and the Feeling/Energy word tiles; those left the cycle view in a later pass and the
     table stayed behind, correct and invisible. Version 511 found that while re-keying it, and kept it on the
     argument that the gap it leaves is real. The argument against keeping it is the better one: data nothing
     reads cannot be checked by looking, so it rots in silence, and the next reader has to work out whether it
     is live before trusting anything near it. The twelve figures and their sources are in
     `claude/gyneconomy-version-archive.md` under Version 512, so restoring those tiles is a lookup rather
     than a research job. `model.end` went with it. */
