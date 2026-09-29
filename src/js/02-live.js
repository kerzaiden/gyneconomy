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
  /* V629: one shallow merge. It was written twice — here, decoding an object document, and again inside
     applyLive's fedFunds case, which is the same operation on the same kind of thing. */
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
      /* V544: an object document MERGES over the literal instead of replacing it. It replaced,
         and that was a live bug: the pipeline publishes `fedFunds` as {lo, hi, asOf}, while the
         file's own object also carries `lastMove`, `lastMoveLabel`, `vote` and `next` — editorial
         facts about an FOMC meeting that no fetcher knows. Replacing dropped all four, so the
         hosted site printed "Last Fed move: undefined" and "Next decision: undefined".
         The rule now: a live document supplies the fields it carries, and every field it does not
         carry keeps the value in the file. That is the same principle the literals already serve
         under — they are the floor, not a duplicate — extended one level down, into the object. */
      if (d.kind === "object"){
        var over = {}, any = false;
        for (var k in d) if (k !== "kind" && Object.prototype.hasOwnProperty.call(d, k)){ over[k] = d[k]; any = true; }
        return any ? merge(fallback, over) : fallback;   // V629: one merge, shared with the registry's fedFunds
      }
    } catch (e) {}
    return fallback;
  }
  // Version 629: the nine readings — their shapes, their bands, where each one lands and what redraws when
  // it does — are declared in ONE place, the reading registry below. `LIVE_NAMES` is its key list.
  var fedFunds = { lo:3.75, hi:4.00, lastMove:"+0.25", lastMoveLabel:"raised a quarter point",
                   asOf:"Sep 16, 2026", vote:"12\u20130", next:"Oct 28, 2026" };
  fedFunds = LIVE("fedFunds", fedFunds);
  /* ---------------- Version 525: the first series to come from outside the file ----------------
     A published artifact cannot call FRED or any other host — external requests are blocked. The one route to
     live data is the artifact's own database, which the nightly refresh writes and the page reads. This is the
     proof of that loop on ONE object, the policy rate, chosen because it is small, it is visible on Pressure,
     and the refresh already maintains it after every FOMC decision.
     The literal above stays and is the FALLBACK, not a duplicate: `claude.use("db")` resolves null whenever the
     page is opened outside a claude.ai viewer — a local file, a test run, a reader without the grant — and the
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

  /* V596: a reading that opens a page wears its figure on every list that offers that door — the category
     item (.ci-value, with its verdict lifted out into a sibling .ci-word) and the All-indicators row
     (.subject-value, with the verdict still inline). A repaint that goes by id reaches exactly ONE of them,
     which is the V593 fault one level up from where V593 found it: that version fixed Fear's VERDICT across
     both doors and left Fear's FIGURE on the roster row still stale. This walks the doors. */
  /* ================= ONE READING, ONE PAINT (Version 619) =================
     A reading is printed on every list that offers a door to its page — the category item in Weather or Mood,
     and the row in All indicators — and `[data-open="<sheet>"]` is what those two have in common. Walking the
     doors is the only honest way to repaint a reading, and this is now the only function that does it.
     The two that went with it painted by ELEMENT ID, and both were wrong in the app as shipped:
       • a fresh CAPE moved #subj-value-valuation, an element no reader sees, and left BOTH visible copies
         showing the old number;
       • an FOMC cut moved the Hormones figure on its category item and left the roster row a rate cycle
         behind, still labelled Tightening after a cut.
     Neither had a symptom anyone could notice — a stale figure looks exactly like a fresh one — which is why
     the fix is to delete the by-id painters rather than correct their two callers. V593 corrected one such
     caller, V596 corrected two more, and each time the NEXT one was already written. There is nothing left to
     correct now: painting a reading by id is not possible here any more.
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
         as `.ci-word`, and `.member-word` on the All-indicators row. Three names for one word, which is how
         the Hormones roster row went on saying Tightening after a cut while the item beside it said Easing.
         Only a `.tag` carries state in its class; the roster's word is plain, so it takes the words alone. */
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
    /* V593: the half-dial, its figure, its verdict word and its date line all left with the meter, and taking
       them out exposed something the dial had been hiding. the by-id painter V619 retired looked for a `.tag` INSIDE
       #subj-value-sentiment, and there is not one: catItem lifts this reading's inline tag out of the figure
       and into the row's own `.ci-word` (the V504 rule, because Sentiment is the one member that writes its
       verdict inside the value). So that call has been returning false, and the only thing keeping the verdict
       live was `.curve-w` on the dial. Remove the dial and the verdict silently stops updating.
       It is repainted where it actually lives now — every row that opens this page — and it is still
       RECOMPUTED from the two legs rather than relabelled, which is the claim this function exists to keep.
       The Fear page's chart is deliberately NOT repainted from these legs: it plots the monthly record, every
       point labelled with its month, and a live tick is not a new month. Highlights quotes today's two legs a
       line below, which is the V294 shape — a card says today, a chart says its series, both say which. */
    paintReading("sheet-sign-sentiment", txt, tag);
  }
  /* V596: the yieldCurve document's repaint follows the reading it moves. It used to print Pressure's 10Y/3M
     pair, and that row went with Pressure; what the pair still decides on the home tab is HORIZON's figure, and
     that had been going stale the whole time — a fresh curve moved the pair and left the spread computed from
     it untouched, which is exactly the drift ONE FIGURE / ONE NUMBER forbids. So this repaints the harder thing:
     the spread AND the verdict recomputed from it, through `horizonWord`, the same function the load-time read
     uses. The Treasury levels themselves need no repaint — they live on the Hormones page, which redraws
     both its charts on open. */
  function repaintHorizonRow(){
    var pick = function(m){ var h = yieldCurve.filter(function(d){ return d.m === m; })[0]; return h ? h.y : null; };
    var y10 = pick("10Y"), y3m = pick("3M");
    if (y10 == null || y3m == null) return;
    var sp = y10 - y3m;
    var w = horizonWord(sp, horizonRead.dLong, horizonRead.dShort, horizonRead.dSpread);
    paintReading("sheet-sign-horizon", (sp >= 0 ? "+" : "−") + Math.abs(sp).toFixed(2), { text:w.word, state:w.state });
  }
  function repaintValuationRow(){
    var row = valRow("cape");
    if (!row) return;
    paintReading("sheet-metric-valuation", row.flagValue, valuation.tag || null);
  }
  /* ---------------- THE READING REGISTRY (Version 629) ----------------
     Keren: "a component based app that will be 100% ready for server side integration with controllers
     and services."

     Nine readings arrive from outside this file. Their contract used to be spread across four places that
     had to be kept in step by hand: `LIVE_DOCS` and `LIVE_SCALARS` named them, a 75-line switch inside
     `applyLive` validated each one and knew where it landed, and REPAINT and ON_OPEN said what redraws.
     Four lists drift, and these had: V628 found two names missing from one of them, and `LIVE_SCALARS`
     turns out to have been declared and then never read by anything at all — which was hiding a real
     asymmetry between the two sources, below.

     One row per reading now, and the row is the whole contract:
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
      /* MERGE, not replace (V544): a refresh carries lo and hi, and the editorial fields around them —
         the FOMC date, the vote, the next meeting — belong to the file, which no fetcher knows. */
      set: function(v){ fedFunds = merge(fedFunds, v); },
      paint: [repaintPolicy]
    },
    yieldCurve: { kind: "series", set: function(v){ yieldCurve = v; }, paint: [repaintHorizonRow] },
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
  /* The nightly refresh moves all nine. `LIVE_DOCS` and `LIVE_SCALARS` are NOT derived to replace them:
     both are gone. One was the database path's fetch list, which is this list now; the other was never read
     by anything. Histories stay out of here deliberately — they change a few times a year, they are the bulk
     of the payload, and a stale history would be a worse trade than a stale daily print. */
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
  /* ONE INTAKE. Both sources ended with the same twenty lines — merge into the cache, write it back, diff
     against what the page rendered from, apply what moved — written twice, and the two copies had drifted:
     the database path walked LIVE_DOCS and so could not deliver a scalar at all, while the site path walked
     whatever its file carried. That is what `LIVE_SCALARS` was declared for and never used to do.
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
  /* Version 629: one applyLive for nine readings. It used to be a 75-line switch in which every reading
     restated the same four steps in its own words — check the shape, check the band, put the value where it
     lives, redraw. Three of the nine checked their band with a hand-written pair of comparisons; two forgot
     to say what redraws. The steps are the same for all nine, so they are written once here and the part that
     genuinely differs — where the value lands — is the one function each row carries.
     A `set` that cannot place its value THROWS, and a throw is a refusal: the reading is left alone and
     `false` goes back, which is what the by-hand guards returned. So `sentiment.rows[0].meter` needs no null
     check; if it is not there, the assignment throws before anything has moved. */
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
     V305 rule the histories already follow: a reading the app cannot vouch for does not get drawn. */
  function shapeOk(r, v){
    if (r.kind === "series") return Array.isArray(v) && v.length > 0;
    if (r.kind === "scalar") return typeof v === "number" && v >= r.band[0] && v <= r.band[1];
    if (!v || typeof v !== "object" || Array.isArray(v)) return false;
    return r.ok ? !!r.ok(v) : true;
  }

  /* V596: the FOMC list moved to the Hormones page, and so does its repaint — plus the thing that was
     missing before the merge exposed it: the ROW's figure is the target range, so an FOMC decision arriving
     mid-session has to move that too, or the row states last month's target beside this month's list. */
  function repaintPolicy(){
    /* V609: the rows moved inside the Insights section and gained a host of their own, so a decision arriving
       mid-session rewrites the four facts and leaves the cards above them alone. */
    var box = put("policy-facts", policyFactRows());
    /* V619: through the doors, not the id. The id reached the category item and left the roster row a rate
       cycle behind — still saying Tightening after a cut, because its tag was never touched either. The word
       carries no state: which direction is good is not this row's claim to make. */
    var dir = /^\+/.test(fedFunds.lastMove) ? "Tightening"
            : /^[-−]/.test(fedFunds.lastMove) ? "Easing" : "On hold";
    paintReading("sheet-sign-hormones", fedFundsRange(), { text:dir });
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
     it again throws on a host that no longer exists. `renderFearCurve` reads a note a later
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
    /* Version 625, Keren: "one dispatch." Four views used to hang a callback on `window` so another view could
       reach it: the Growth economy picker, the Horizon spread picker, the Pressure maturity picker and the
       Treasury redraw. A handler on `window` is invisible — nothing can tell a name nobody answers from a
       name spelled wrong, so a broken control reads as a control that does nothing. An ACTION is named here
       instead: the view that owns the answer registers it, the view that needs it fires it, and neither holds
       a reference to the other. A fire with no handler is recorded, which makes the suite able to see it. */
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
  // V629: the registry joins the seam, so the suite can walk every band without restating one
  try { window.__GYN = GYN; GYN.applyLive = applyLive; GYN.READINGS = READINGS; } catch (e) {}

  // V628: registered here rather than beside the registry, because `GYN` is declared below it
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
      receive(next, "merge");
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
