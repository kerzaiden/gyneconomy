  /* ---------------- Live data without a render refactor ----------------
     Only a PRINTED value can be repainted when the database answers; every other figure is DERIVED at load, and
     the runtime contract forbids blocking the first paint on a permission prompt. So the database answer from the
     LAST visit is cached in this browser and applied HERE, synchronously, before a single derived value is
     computed: the figures are already live by the time the app builds itself, every derived reading is correct,
     and nothing repaints because nothing needs to.
     The cost: a viewer sees data as of their previous visit, and on a first-ever visit the file's own figures.
     For a page refreshed once a day that is at most one visit behind, and never WRONG — every payload carries
     the `asOf` its own reading was taken on.
     `localStorage` can be empty, disabled or throw; every read is guarded and falls back to the literal, which
     is why the literals stay. This is a cache, not a store: the database is the record. */
  var LIVE_CACHE = (function(){
    try { return JSON.parse(window.localStorage.getItem("gyn.live") || "{}") || {}; }
    catch (e) { return {}; }
  })();
  // One shallow merge, shared by LIVE's object decoding and the registry's fedFunds row.
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
      /* An object document MERGES over the literal: a live document supplies the fields it carries, and every
         field it does not carry keeps the value in the file. The pipeline publishes `fedFunds` as {lo, hi, asOf},
         while the file's object also carries `lastMove`, `lastMoveLabel`, `vote` and `next` — editorial facts
         about an FOMC meeting that no fetcher knows; replacing would print them as "undefined". The literals
         are the floor, not a duplicate, one level down too. */
      if (d.kind === "object"){
        var over = {}, any = false;
        for (var k in d) if (k !== "kind" && Object.prototype.hasOwnProperty.call(d, k)){ over[k] = d[k]; any = true; }
        return any ? merge(fallback, over) : fallback;   // the same merge as the registry's fedFunds row
      }
    } catch (e) {}
    return fallback;
  }
  // The nine readings — their shapes, their bands, where each one lands and what redraws when it does — are
  // declared in ONE place, the reading registry below. `LIVE_NAMES` is its key list.
  var fedFunds = { lo:3.75, hi:4.00, lastMove:"+0.25", lastMoveLabel:"raised a quarter point",
                   asOf:"Sep 16, 2026", vote:"12\u20130", next:"Oct 28, 2026" };
  fedFunds = LIVE("fedFunds", fedFunds);
  /* ---------------- The first series to come from outside the file ----------------
     A published artifact cannot call FRED or any other host; its one route to live data is its own database,
     which the nightly refresh writes and the page reads. `claude.use("db")` resolves null outside a claude.ai
     viewer — a local file, a test run, a reader without the grant — and the page has to be right in all of
     those, so the literal above is the FALLBACK, not a duplicate: the file's own figures render first, the
     database is asked afterwards, and the page repaints only what the answer changed. A database document uses
     the literal's own field names, so there is one schema and the fallback cannot drift from the live row. */
  /* THE REPAINT LAYER.

     Do not re-render. The category builder MOVES the subject rows out of the markup that produced them,
     so a renderer cannot be run twice — but the ELEMENTS holding the printed figures survive the move,
     so a repaint edits those in place.

     Each repaint touches as little as possible: the figure's own text node and its tag, never the row's
     innerHTML. That is deliberate. `catItem` normalises `.unit` to `.ci-unit` when it moves a row, so
     rebuilding the markup here would quietly undo the normalisation and the row would come back at the
     wrong type size.

     Everything else needs no repaint: the inner pages draw on open, from these same module vars,
     through `sheetRenderers`. A figure only needs a repaint if it is visible WITHOUT opening a page. */

  /* ================= ONE READING, ONE PAINT =================
     A reading is printed on every list that offers a door to its page — the category item in Weather or Mood
     (.ci-value, its verdict lifted out into a sibling .ci-word) and the row in All indicators (.subject-value,
     verdict still inline) — and `[data-open="<sheet>"]` is what those have in common. Walking the doors is the
     only honest way to repaint a reading, and this is the only function that does it. Never paint a reading by
     element id: an id reaches exactly one copy and leaves the others stale, and a stale figure looks exactly
     like a fresh one, so nothing would show it.
     A tag with no `state` has only its words replaced, because the policy row's class carries a meaning the
     caller does not own. A reading whose doors print nothing is recorded, and the suite asserts that record
     stays empty. */
  function paintReading(sheet, value, tag){
    var doors = document.querySelectorAll('[data-open="' + sheet + '"]'), painted = 0;
    Array.prototype.forEach.call(doors, function(d){
      var v = d.querySelector(".ci-value, .subject-value");
      if (v && v.firstChild && v.firstChild.nodeType === 3){ v.firstChild.nodeValue = String(value); painted++; }
      if (!tag) return;
      /* The verdict wears a different class on each kind of door — `.tag` inside a category item, lifted out
         as `.ci-word`, and `.member-word` on the All-indicators row. Only a `.tag` carries state in its class;
         the roster's word is plain, so it takes the words alone. */
      var t = d.querySelector(".tag, .member-word");
      if (!t) return;
      t.textContent = tag.text;
      if (tag.state != null && /\btag\b/.test(t.className))
        t.className = "tag " + tag.state + (/\bci-word\b/.test(t.className) ? " ci-word" : "");
    });
    if (doors.length && !painted)
      (window.__paintMiss = window.__paintMiss || []).push(sheet + ": " + doors.length + " doors, none printed");
    return painted;
  }

  /* The curve is DERIVED from two figures that arrive separately, so either leg landing repaints it,
     and it is RECOMPUTED here rather than read from a stored copy. One figure, one number. */
  function repaintFearCurve(){
    var r = fearCurve(), tag = curveVerdict(r), txt = r == null ? "\u2014" : r.toFixed(2);
    var ring = put("subj-ring-sentiment", vitalRingSvg(curvePct(r), "accent", r == null ? "Fear curve: no reading"
      : "Fear curve at " + txt + ", where 1.00 is flat"));
    /* The verdict does not live inside #subj-value-sentiment: catItem lifts this reading's inline tag out of the
       figure and into the row's own `.ci-word` (Sentiment is the one member that writes its verdict inside the
       value). So it is repainted where it lives — every row that opens this page — and it is still RECOMPUTED
       from the two legs rather than relabelled, which is the claim this function exists to keep.
       The Fear page's chart is deliberately NOT repainted from these legs: it plots the monthly record, every
       point labelled with its month, and a live tick is not a new month. Highlights quotes today's two legs a
       line below — a card says today, a chart says its series, both say which. */
    paintReading("sheet-sign-sentiment", txt, tag);
  }
  /* The yieldCurve document moves HORIZON's figure on the home tab: the spread AND the verdict recomputed from
     it, through `horizonWord`, the same function the load-time read uses — a fresh curve must not leave the
     spread computed from it stale (one figure, one number). The Treasury levels themselves need no repaint:
     they live on the Hormones page, which redraws both its charts on open. */
  function repaintHorizonRow(){
    var pick = function(m){ var h = yieldCurve.filter(function(d){ return d.m === m; })[0]; return h ? h.y : null; };
    var y10 = pick("10Y"), y3m = pick("3M");
    if (y10 == null || y3m == null) return;
    var sp = y10 - y3m;
    var w = horizonWord(sp, horizonRead.dLong, horizonRead.dShort, horizonRead.dSpread);
    paintReading("sheet-sign-horizon", (sp >= 0 ? "+" : "−") + Math.abs(sp).toFixed(2), { text:w.word, state:w.state });
  }
  /* Pressure's row prints today's 10-year from the same live curve, so the same document moves it.
     The figure only — the row wears no verdict word, because a rate has no sourced band. */
  function repaintPressureRow(){
    var h = yieldCurve.filter(function(d){ return d.m === "10Y"; })[0];
    if (!h || h.y == null) return;
    paintReading("sheet-sign-pressure", h.y.toFixed(2) + "%", null);
  }
  // the Pressure chart's last column is this same close, so a curve that lands while the page is open redraws it
  function repaintPressureChart(){
    var s = byIdMaybe("sheet-sign-pressure");
    if (s && !s.hidden && sheetRenderers["pressure-range"]) sheetRenderers["pressure-range"]();
  }
  function repaintValuationRow(){
    var row = valRow("cape");
    if (!row) return;
    paintReading("sheet-metric-valuation", row.flagValue, valuation.tag || null);
  }
  /* ---------------- THE READING REGISTRY ----------------
     Keren, V629: "a component based app that will be 100% ready for server side integration with controllers
     and services."

     Nine readings arrive from outside this file. One row per reading, and the row is the whole contract —
     no second list names them, because lists kept in step by hand drift:
       kind    the shape it arrives in — object, series or scalar
       band    a scalar's floor and ceiling; a number outside it is refused, never clamped
       ok      an object's own admission test, where it has one beyond being an object
       set     where the value lands. The ONE thing that genuinely differs between readings.
       paint   what redraws when it moves
       onOpen  true instead of `paint`: its only display is an inner page, which redraws in full on open

     `LIVE_NAMES` is the registry's own key list, so the fetchers cannot ask for a name it does not know.
     `checkLiveCoverage` asserts every row is complete and that `paint` and `onOpen` are exclusive — a
     tenth reading is one row, and an incomplete row fails the suite.

     THE SERVICE SEAM. Above this, `receive` is the only door a reading comes in through, and the two
     sources this app has — the artifact's own database, and the hosted site's JSON file — each do nothing
     but produce a {name: document} object and knock on it. A server-side backend is a third function of
     that shape and nothing else in the app changes: the registry already states what it expects, the band
     already refuses a wrong number, and the painters already know where it shows. */
  var READINGS = {
    fedFunds: {
      kind: "object",
      ok: function(v){ return typeof v.lo === "number"; },
      /* MERGE, not replace (see LIVE): a refresh carries lo and hi, and the editorial fields around them —
         the FOMC date, the vote, the next meeting — belong to the file, which no fetcher knows. */
      set: function(v){ fedFunds = merge(fedFunds, v); },
      paint: [repaintPolicy]
    },
    yieldCurve: { kind: "series", set: function(v){ yieldCurve = v; }, paint: [repaintHorizonRow, repaintPressureRow, repaintPressureChart] },
    sentiment:  { kind: "object", set: function(v){ sentiment = v; }, onOpen: true },
    valuation:  {
      kind: "object",
      /* The verdict is derived at load, so a fresh object without it would print a stale word beside a
         fresh number — the drift ONE FIGURE / ONE NUMBER forbids. Re-derived, never carried over. */
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
    /* The scalars. Each is a single number inside an object the app owns outright — the bands, the notes
       and the words around them are editorial and belong in the file, not in a fetcher, so the pipeline
       publishes the number bare and the row it belongs to is named here. */
    vixClose: {
      kind: "scalar", band: [5, 100],
      set: function(v){
        var row = sentiment.rows[0];            // throws if the row is gone, which applyLive reads as a refusal
        row.meter.value = v;
        row.flagValue = v.toFixed(1);
        if (liveAsOf.vixClose) row.sub = liveAsOf.vixClose;
      },
      paint: [repaintFearCurve]                 // the near leg: a new VIX moves the curve, not just its own row
    },
    vix3mClose: { kind: "scalar", band: [5, 100], set: function(v){ vix3mClose = v; },
                  paint: [repaintFearCurve] },  // and the far leg does the same
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
        // the row PRINTS flagValue and it carries its own unit: "41.3×", not "41.3". Taking the suffix
        // from the value already there keeps it right without hard-coding it.
        row.flagValue = v.toFixed(1) + String(row.flagValue || "").replace(/^[\d.,\s-]+/, "");
        if (liveAsOf.capeValue) row.sub = liveAsOf.capeValue;
        valuation.tag = valuationVerdict(v);
      },
      paint: [repaintValuationRow]
    }
  };
  /* The pipeline moves six of the nine — `sentiment`, `valuation` and `coincident` have no fetcher and arrive
     only if a session writes them to the database by hand (an open question in ARCHITECTURE.md, not a bug).
     Histories stay out of here deliberately — they change a few times a year, they are the bulk of the
     payload, and a stale history would be a worse trade than a stale daily print. */
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
  /* ONE INTAKE. Both sources hand a {name: document} object here, and this does the rest once: merge into the
     cache, write it back, diff against what the page rendered from, apply what moved.
     `mode` is the one honest difference between them. The database is the record, so its answer REPLACES the
     cache and a document deleted there stops being remembered. The site file is a diff of whatever the
     Action last committed, so its answer MERGES. */
  function receive(next, mode){
    var names = Object.keys(next).filter(function(n){ return READINGS[n]; });
    if (!names.length) return 0;
    var prev = LIVE_CACHE, moved = 0;
    var now = mode === "replace" ? next : merge(LIVE_CACHE, next);
    try { window.localStorage.setItem("gyn.live", JSON.stringify(now)); } catch (e) {}
    LIVE_CACHE = now;   // swapped in FIRST, so LIVE() does the shape-decoding — one decoder, not two
    names.forEach(function(name){
      try {
        if (next[name] && next[name].asOf) liveAsOf[name] = fmtAsOf(next[name].asOf);
        if (prev && prev[name] && JSON.stringify(prev[name]) === JSON.stringify(next[name])) return;
      } catch (e) {}
      if (applyLive(name, LIVE(name, null))) moved++;
    });
    return moved;
  }
  /* A scalar document carries its observation date beside its value, and the row it lands in
     PRINTS that date. Kept here rather than threaded through applyLive's signature, because only
     the scalars have one and a second parameter would be empty for every other document. */
  var liveAsOf = {};
  function fmtAsOf(iso){
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso || ""));
    if (!m) return "";
    return MONTHS_SHORT[Number(m[2]) - 1] + " " + Number(m[3]) + " " + m[1];
  }
  /* One applyLive for every reading: check the shape and band, put the value where it lives, redraw. Where it
     lands is the one part that genuinely differs, so it is the one function each row carries (`set`).
     `set` also re-derives whatever was computed FROM the value at load: `valuation.tag` and the Volume/Pulse
     tags are computed once from these objects, so a new object without them would print a stale verdict beside
     a fresh number — the drift ONE FIGURE / ONE NUMBER forbids. The derive steps are reused by name.
     A `set` that cannot place its value THROWS, and a throw is a refusal: the reading is left alone and
     `false` goes back. So `sentiment.rows[0].meter` needs no null check; if it is not there, the assignment
     throws before anything has moved. */
  function applyLive(name, value){
    if (value == null) return false;
    var r = READINGS[name];
    if (!r) return false;
    try {
      if (!shapeOk(r, value)) return false;
      r.set(value);
    } catch (e) { return false; }
    (r.paint || []).forEach(function(fn){
      try { fn(); } catch (e) { if (window.console) console.warn("repaint " + name + " failed", e); }
    });
    return true;
  }
  /* The band is the registry's, not the caller's. A number outside it is REFUSED rather than clamped — the
     rule the histories follow too: a reading the app cannot vouch for does not get drawn. */
  function shapeOk(r, v){
    if (r.kind === "series") return Array.isArray(v) && v.length > 0;
    if (r.kind === "scalar") return typeof v === "number" && v >= r.band[0] && v <= r.band[1];
    if (!v || typeof v !== "object" || Array.isArray(v)) return false;
    return r.ok ? !!r.ok(v) : true;
  }

  /* An FOMC decision arriving mid-session moves the FOMC facts on the Hormones page AND the row's figure, the
     target range — or the row states last month's target beside this month's list. */
  function repaintPolicy(){
    /* `#policy-facts` is the rows' own host inside the Insights section, so a decision rewrites the four facts
       and leaves the cards above them alone. */
    var box = put("policy-facts", policyFactRows());
    /* Through the doors, not the id (see paintReading). The word carries no state: which direction is good is
       not this row's claim to make. */
    var dir = /^\+/.test(fedFunds.lastMove) ? "Tightening"
            : /^[-−]/.test(fedFunds.lastMove) ? "Easing" : "On hold";
    paintReading("sheet-sign-hormones", fedFundsRange(), { text:dir });
  }
  /* THE STEP REGISTRY.

     The script runs as named steps, in source order and at exactly the points they are called —
     module-level vars are assigned between them, so the order is load-bearing and moving the calls
     would break the page. Each step has a NAME, a measured KIND, and an entry here, so the app can
     be asked what it does at load rather than having it inferred from source order.

     The kinds:
       check   a data assertion, no DOM — safe to re-run
       derive  computes module state — idempotent
       wire    binds event listeners — must run ONCE, ever
       render  writes DOM and may be run again
       build   CONSUMES or MOVES static markup, or depends on state a later step sets — one-shot
       mixed   binds listeners AND writes DOM — cannot be re-run until it is split
       live    a data source: the database refresher, the site feed

     THE KINDS ARE MEASURED BY RUNNING THE STEP, not read off its source. Counting DOM writes in a
     body counts the writes inside its event HANDLERS too, which fire later and say nothing about
     the step itself, so pure wirers would read as mixed. Measuring means patching
     `addEventListener`, running the step, and watching: listeners bound means it must run once;
     DOM settled and no listeners means it may run again. `tools/classify.js` does it.

     A name here describes what a step BUILT the first time; the kind describes whether it may run
     AGAIN. `renderCycleDial` draws a dial on the first pass and only binds handlers on a second,
     so it is named render and classified wire. The two are answering different questions.

     `build` is the honest kind for a step that is one-shot by design. `renderSignsList` runs
     `while (sum.firstChild) face.appendChild(...)` — it MOVES the static markup into the category
     rows, consuming its own source, which is the documented "catItem consumes its source"
     behaviour. `renderSubjectRows` writes into hosts that `renderSignsList` then moves, so calling
     it again throws on a host that no longer exists. `renderFearCurve` reads a note a later
     step fills, so a second call renders MORE than the first. None of these is sloppy, and
     calling them builders says so instead of pretending a fix is pending.

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
    /* Keren, V625: "one dispatch." No view hangs a callback on `window` for another view to reach: a handler
       on `window` is invisible — nothing can tell a name nobody answers from a name spelled wrong, so a broken
       control reads as a control that does nothing. An ACTION is named here instead: the view that owns the
       answer registers it, the view that needs it fires it, and neither holds a reference to the other. A fire
       with no handler is recorded, which makes the suite able to see it. */
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
  // the registry joins the seam, so the suite can walk every band without restating one
  try { window.__GYN = GYN; GYN.applyLive = applyLive; GYN.READINGS = READINGS; } catch (e) {}

  // registered here rather than beside the registry, because `GYN` is declared below it
  GYN.step("checkLiveCoverage", checkLiveCoverage, "check"); checkLiveCoverage();

  /* The database refresher. Its answer becomes the CACHE the top of this part reads on the next load, and
     `receive` applies and repaints what it changed now. It never blocks, never prompts on load beyond the
     capability's own consent, and a refusal is not an error: the page is already rendered from the literals
     or from the previous cache. */
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
  /* THE SITE FEED.

     On the hosted site the figures arrive as a plain file that a scheduled GitHub Action commits:
     same origin, no key, no CORS, and every refresh is a diff in the repository's history. In the
     Artifact there is no such file and the database remains the route. TWO SOURCES, ONE DECODER,
     ONE REPAINT LAYER — both hand their documents to `receive`, and `LIVE()` decodes the shapes
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
      receive(next, "merge");
    }).catch(function(){ /* silence: the page already rendered */ });
  }
  GYN.step("fetchSiteData", fetchSiteData, "live"); fetchSiteData();
  function fedFundsRange(){
    return (fedFunds.lo === fedFunds.hi ? fedFunds.lo.toFixed(2)
            : fedFunds.lo.toFixed(2) + "\u2013" + fedFunds.hi.toFixed(2)) + "%";
  }
  /* Keren, V512: "why do we need cycle end readings? If we don't need it, just get rid of it." Data nothing
     reads is removed, not kept: it cannot be checked by looking, so it rots in silence. The twelve figures
     `cycleEndReadings` held (each closed cycle's Fed funds, VIX and ISM PMI at its last month) and their
     sources are in `claude/gyneconomy-version-archive.md` under Version 512, so restoring those tiles is a
     lookup rather than a research job. */
