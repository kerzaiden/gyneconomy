# Gyneconomy — why it is the way it is

`CLAUDE.md` is the rules and the commands. `docs/MAP.md` and `docs/COMPONENTS.md` are generated and say
what exists. This file is written by hand and its job is the *why*: the decisions behind the code, many of
them Keren's, several of which look like bugs and are not. **A fact lives in one place**: a rule in
`CLAUDE.md`, a constant in the code, a token in `src/styles.css` is not restated here. What is no longer
true is in git history (`git show v632-component-page:docs/ARCHIVE.md` for the retired archive).

## Live data

A published artifact cannot call an external host; its only route in is its own database, which a Claude
session writes and the page reads with `claude.use("db")`. The hosted site has a second route, a JSON file
the Data workflow commits. Both end at one intake, `receive`, and one contract, the `READINGS` registry
in `js/live.ts` — one row per reading: kind, band, where it lands, what repaints. The mechanism is
described under "How the live layer works" below; the decisions are these:

- **The literal in the file is the floor, not a duplicate.** It renders first; the database and the
  cache render over it. Most loads (a local file, a test, a viewer without the grant, a first visit)
  render the literal. Never block first paint on a permission prompt.
- **`liveInto("X")` sits immediately after each declaration.** That placement is the mechanism; a
  line moved below a consumer silently stops working. Since V698 it applies the cached document through the
  reading's own `set`, the same route `receive` uses, so a first visit and a returning visit apply the same
  rules (the V697 review found the Fed vote, the card dates and the notes differing between them).
- **An object document merges over the literal (V544).** The pipeline publishes `fedFunds` as
  `{lo, hi, asOf}`; the file's object also carries the FOMC date, vote and next meeting, which no fetcher
  knows. Replacing dropped all three.
- **A number outside its band is refused, never clamped.** A `set` that cannot place its value throws,
  and a throw is a refusal.
- **Today's figure is computed, never painted (0.8.6).** A reading's figure, unit and word come from
  `todayFace` (`era.ts`), read from the model whenever Indicators, Cycle Statistics or AI Insights draws, so a
  live document needs no painter to reach them. Until 0.8.6 the figures lived on the category cards, and a
  repaint walked every door (V619).
- **A cached figure contradicting a load-time assertion warns**, and the suite turns the warning into a
  failing check. That is the design working. Since V698 the unit tests fail on a warning at boot too, so
  `npm run check` (all the Backfill runs before it commits) stops a bot commit that CI would reject.
- **A figure the Backfill updates is read from its series, never typed (V698).** Gross debt's card value,
  date and note figures come from the last quarter of `grossDebtQuarterly` (`syncGrossDebt`); its typed
  122.6 would have turned `main` red the night FRED posted Q2 2026.
- **A new Backfill series lands in three steps (0.9.4).** The Backfill runs `test:tools` before it fetches and
  `check` after, and `test/series.test.js` wants the code to read exactly the keys `fred.json` holds. So a new
  series goes in as an empty array in `fred.json` beside the code that reads it, and a Backfill run on the branch
  fills it; neither the code alone nor the fetch alone can pass.

Six of the nine rows have a writer today; see Open questions.

### How the live layer works

Moved here from the code comments of `js/live.ts` at V650, when the source lost its comments. Keren's
decisions are cited as she made them.

#### The cache

```text
Only a PRINTED value can be repainted when the database answers; every other figure is DERIVED at load, and
the runtime contract forbids blocking the first paint on a permission prompt. So the database answer from the
LAST visit is cached in this browser and applied HERE, synchronously, before a single derived value is
computed: the figures are already live by the time the app builds itself, every derived reading is correct,
and nothing repaints because nothing needs to.
The cost: a viewer sees data as of their previous visit, and on a first-ever visit the file's own figures.
For a page refreshed once a day that is at most one visit behind, and never WRONG — every payload carries
the `asOf` its own reading was taken on.
`localStorage` can be empty, disabled or throw; every read is guarded and falls back to the literal, which
is why the literals stay. This is a cache, not a store: the database is the record.
```

Since V694 the cache holds only what the registry admits (the V693 review found one malformed document could
blank the app on every later visit):

- **Checked on the way in and on the way out.** `receive` caches a document only once `docOk` (the reading's
  `kind`, `band` and `ok`, and no `<` anywhere, because live documents carry data, never markup) has passed it,
  and `liveInto()` checks the cached copy again before the app builds on it. A refused document falls back to the
  literal. Since V698 `receive` caches only what applied. A panel of rows (sentiment, valuation, coincident) must
  carry every row the file has, in the file's order, each with a full meter and every text and number field the
  file's row has (V706: a valuation with only its CAPE row passed and blanked the app from the third load). A
  yield curve must carry its 3M and 10Y inside the fetcher's own 0–20% band. If boot still throws with documents
  stored, `forgetLive` drops them and reloads once on the file's figures; `gyn.forgot` in session storage stops
  a loop, and `bootDone` clears it after a good boot so the guard works again on the next bad document (V706).
- **Every reading is applied at load.** A scalar that lands inside an object row (`vixClose`, `capeValue`)
  is applied by `liveInto` right after its row exists, so a second visit no longer shows the file's
  figures.
- **Applied, not cached, decides a repaint.** `receive` compares a document with what this page load applied
  (`liveApplied`), never with storage, so an unchanged value that was never applied still lands.
- **An older document never beats the file (V701).** A reading may declare `fileAsOf()`, the date of the
  file's own figure; `liveInto` at boot and `receive` at run time both skip a document dated before it (one
  rule, `olderThanFile`, since V706), so neither an offline visit nor a slow feed shows last month's figure.
  Every reading declares it (1.2.1): the scalars and the valuation take their row's date or `capeAsOf`, and
  coincident the newest period its rows name. A series or scalar document must carry an ISO `asOf` (1.1.1).
- **Dates are compared as calendar days, never as times (1.6.1).** `isoDay` turns a file's display date
  ("Sep 22 2026", "Sep 16, 2026") and a document's ISO date into the same `YYYY-MM-DD`, and refuses a day
  that is not on the calendar (month 13, February 30). `Date.parse` read a display date as local midnight and
  an ISO date as UTC midnight, so a same-day VIX close was refused west of Greenwich. The guard also never
  goes backwards: `liveFloor` keeps the newest day the file or any applied document has shown, so an undated
  Fed range (which blanks the decision date on purpose) cannot open the door to an older decision. The floor is
  read from the file in `olderThanFile`, before any document lands, dated or not (0.1.1): read lazily, an undated
  range arriving first blanked the file's date before the floor had seen it, and a 2023 decision was accepted.
- **An object document keeps each field's type (1.6.1).** `fieldsKept`: a field the file has must arrive as
  the same type and never as an object; a field the file lacks must be a string; `rows` go through `overRows`.
- **A stale feed turns the Data run red (1.6.1).** `staleDocs` in `fetch-live` flags a daily figure (curve,
  VIX) older than 7 days, which covers a long weekend with a holiday, and CAPE older than 93 days, because
  Shiller's monthly sheet runs a month or two behind. The Fed has no age limit: its date is its last decision.
- **A live row changes figures, never structure (1.2.1).** `overRows` lays a document's rows over the
  file's: the strings and numbers the file row has, and the meter's value, min and max. The page renderer, the
  band and the zone labels stay the file's, so a row that went through JSON (and lost its functions) cannot
  strip a page on the next visit, and a document cannot move a band.
- **A Fed document's own fields win (1.2.1).** A move without a decision clears the stale decision fields but
  keeps the date it carries, so the older-than-the-file guard still has a date to compare.
- **A reading's date is its document's date.** `curveAsOf` and `liveIsoOf` read the applied document's `asOf`,
  and `liveApplied` is written before the painters run (V698; it was written after, so a card carried the
  previous document's date).
- **What is derived from a live figure is derived again when it lands (V698).** A note that quotes a live
  figure is a function (`HIST_NOTE[id]` may be one, read when the head is drawn), and the Pressure verdict
  (`deriveHorizon`) reruns in the yield curve's `set`.

#### Where live data enters

```text
A published artifact cannot call FRED or any other host; its one route to live data is its own database,
which the nightly refresh writes and the page reads. `claude.use("db")` resolves null outside a claude.ai
viewer — a local file, a test run, a reader without the grant — and the page has to be right in all of
those, so the literal above is the FALLBACK, not a duplicate: the file's own figures render first, the
database is asked afterwards, and the page repaints only what the answer changed. A database document uses
the literal's own field names, so there is one schema and the fallback cannot drift from the live row.
```

#### The repaint layer

```text
Nothing on screen holds today's figure for a repaint to edit. Indicators, Cycle Statistics and AI Insights
compute it from the model when they draw (`todayFace`, `todayValue`), and the inner pages draw on open
through `sheetRenderers`. A live document changes the model; `repaintDerived` (on every reading) forgets the
cached results and redraws whichever of those is open. The named painters left redraw what is visible
without opening anything: the policy facts, the Pressure chart, the CAPE history behind Mood. A reading
with no named painter declares `onOpen`, and `checkLiveCoverage` holds every live name to one or the other.
```

#### The roster

Keren, V670: "make the app as consolidated as possible so we won't have to write the same code twice, meaning
dry code and as efficient components as possible." **A reading is declared once, in `ROSTER`** (`js/roster.ts`,
one row per reading in card order), and everything that used to name it again reads the row: Indicators'
subcategories (`sub`) and groups, Cycle analysis's rows and each reading's good side, the timing chips, the split pages (`splitPages` holds only what a split page adds to its row), today's
figure (`todayFace`), the history heads (`HIST_HEAD`), every page's window, mode and cycle state and its range stops
(`pageState`), the past cycles' series (`hist`, read through `keyed`), and the marks on every door and head.
`CATEGORIES` beside it holds the six categories in source order with `shown`, their place in Cycle analysis and the
Diagnosis (two orders, both Keren's). A row's fields:

```text
id, name, cat, timing, mark   the page, the name on every door, the category, the timing chip, the glyph
good                          the side that is good for it ("up" or "down"; none where neither is), which colours
                              a Cycle analysis result outside its range
group                         consecutive rows with one group are one group (Valuations, Debt)
door                          where today's figure and the page come from: peek (an authored page, its figure
                              in OWN_FACE), pair and row (a reading object), split (a split page), subject (an
                              authored subject page, its figure in OWN_FACE)
term                          the bodyTerm of the reading object a row or pair is built from
slot                          the authored page whose timing slot and order orderMetricSheets sets (the
                              deficit's since V670)
hk, head, range, cycles, stops   the history key (when it is not the page id), its head's title, its default
                              window, false where it has no Cycles mode, and its window stops
hist, pair                    the series as written ({s, k, y0} or a function), read by keyed() into {k, v}
flip, mid                     how Cycle Statistics reads it (a figure's format is never declared: it is
                              today's, read by eraFig)
cardUnit                      the unit beside today's figure (a row reading's comes from its metricSub)
live                          the live registry rows that feed it
```

`checkRoster` (a `check` step) refuses a reading declared twice, an unknown category or timing, a missing mark,
a group split in two, and a live name in either direction that the other registry does not know; the suite
proves it refuses each, and that the roster is every card on screen in card order. **A new reading is one row**
(plus its page's own renderer). The live registry below stays separate: it is the service contract, and the roster
only names which of its rows feed each reading.

#### The live registry

```text
Keren, V629: "a component based app that will be 100% ready for server side integration with controllers
and services."

Nine readings arrive from outside this file. One row per reading, and the row is the whole contract —
no second list names them, because lists kept in step by hand drift:
  kind    the shape it arrives in — object, series or scalar
  band    a scalar's floor and ceiling; a number outside it is refused, never clamped
  ok      an object's own admission test, where it has one beyond being an object
  set     where the value lands. The ONE thing that genuinely differs between readings.
  onOpen  true when its only display is an inner page, which redraws in full on open

What redraws when a reading moves is a subscription (V697): `bootRepaint` calls `onLive(name, painter)`
for each painter, and `onLive("*", …)` for the Diagnosis and Insights, which every reading moves. The
registry states what a reading is; the repaint layer states where it shows, so neither imports the other.

`LIVE_NAMES` is the registry's own key list, so the fetchers cannot ask for a name it does not know.
`checkLiveCoverage` asserts every row is complete and that a reading has a painter or `onOpen`, never both — a
tenth reading is one row, and an incomplete row fails the suite.

THE SERVICE SEAM. Above this, `receive` is the only door a reading comes in through, and the two
sources this app has — the artifact's own database, and the hosted site's JSON file — each do nothing
but produce a {name: document} object and knock on it. A server-side backend is a third function of
that shape and nothing else in the app changes: the registry already states what it expects, the band
already refuses a wrong number, and the painters already know where it shows.
```

#### The step registry

```text
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

`build` is the honest kind for a step that is one-shot by design. `renderSignsList` MOVES the
authored subject markup into the reading pages, consuming its own source, and `renderPagesAndNav`
mounts the split pages and wires the navigation, which a second run would wire twice. `renderVolatility` reads a note a later
step fills, so a second call renders MORE than the first. None of these is sloppy, and
calling them builders says so instead of pretending a fix is pending.

`GYN.render()` runs check, derive and render. The suite asserts that every step it runs is
idempotent, so a step that stops being repeatable fails the build rather than rotting quietly.
One allowance: a width-aware chart re-measures its host, so a differing viewBox WIDTH is not
counted as a difference — `renderHorizonPage` legitimately redraws at 334 then 360.
```

#### One dispatch

```text
Keren, V625: "one dispatch." No view hangs a callback on `window` for another view to reach: a handler
on `window` is invisible — nothing can tell a name nobody answers from a name spelled wrong, so a broken
control reads as a control that does nothing. An ACTION is named on `GYN` instead: the view that owns the
answer registers it, the view that needs it fires it, and neither holds a reference to the other. A fire
with no handler is recorded, which makes the suite able to see it.
```

Since V707 the same holds between modules: the view hooks that rode on `ui` behind a silent `if`
(`calendarReset`, `metricPageReset`, `drawSpreadView`, `drawSpreadWindow`) are `GYN` actions, and the
`window` channel is an export (`sourceIndex` from `pages-nav`). `ui.topbarBack` and `ui.eraPageBack` stay in the store: they are state (what Back does now),
not hooks.

## Who refreshes what

| | Refreshes | How often | Reaches |
|---|---|---|---|
| **Data workflow** (`data.yml`) | five readings from their primary sources into `data/live.json`, tests that the app accepts each one, then starts the site deploy (V651: a push with the repository's own token starts no workflow by itself). A figure that did not arrive keeps its last document and turns the run red, so a dead key is an email, not a quietly ageing site (1.1.1) | weekdays 22:40 UTC, after the NY close | the site |
| **Scheduled task** (`docs/task.md`) | nothing of its own — copies that file into the artifact's database, and checks the artifact is on main's version (V654) | weekdays 23:07 UTC, after the Data workflow (V645) | the artifact |
| **A session** | the source | when something changes | both, by building and publishing |
| **Backfill workflow** (`backfill.yml`) | the FRED histories in `src/data/fred.json`, including the quarterly Treasury histories behind Pressure and Horizon (V648) | the 3rd of each month, 23:40 UTC, and on demand | the site, through the deploy it starts; the artifact only when a session republishes it (the run warns) |
| **Tag workflow** (`tag.yml`, V647) | a `v0.1.0` tag (build and name in its message) for each version commit on `main` that has none, pushed one at a time, and a GitHub Release for each tag on the current line that has none (0.1.0). GitHub refuses the token some old V-tags, on commits whose workflow files differ from today's; those are listed and left untagged, and only a refused semantic tag turns the run red. The current line is read newest first, each number below the one after it, so the abandoned 1.0.0–1.8.0 are never released and never outrank 0.x. A version on the current line whose tag already names a commit of the abandoned line (`taken`, 0.1.1) is neither tagged nor released over it: the run names it and turns red | every push to `main` | the repo's history and its Releases page |

**The task is a courier and nothing else (V542).** Each figure is fetched once and validated once, so the
two surfaces cannot disagree about a number. A document missing from the file is the pipeline failing;
the report says so rather than filling the gap. The task exists only because a GitHub Action cannot write
an artifact's database; delete it and the artifact freezes while the site carries on.

**A failure leaves the previous value standing.** Since V694 this is true of the file itself: `assemble`
starts from the existing `data/live.json` and replaces only the readings that arrived, each keeping its own
`asOf`. The Treasury's file for a new year is empty on its first business day, so the curve falls back to
last year's file. The fetcher's bands are wide on purpose: they catch a
decimal slip or an error page, not a market that moved. The data is committed, not stored, so every
refresh is a diff, and a run where only the timestamp moved commits nothing. Because the commit lands on
`main`, data cannot reach the site without passing the suite.

**The Fed's last move is read from the target's own history (V694).** `fedMove` walks DFEDTARU back to its
last change and dates it by the FOMC decision just before the day it took effect, or the day before when no
meeting matches. The same calendar gives the next decision. **The calendar is read from the Fed's own page**
(`fomccalendars.htm`, parsed by `fomcFromHtml`) on every Data run (`test/fixtures/fomccalendars.html` is written
to the page's markup as Claude knew it, not captured: the container cannot reach federalreserve.gov, so the first
Data run is its proof); the fetched dates win for every year the page
covers, and the hand list `FOMC_DECISIONS` (ends December 2026) fills the rest. When the page fails or gives fewer
than 4 dates for the current year, the run uses the hand list alone and logs a WARNING. Whatever the source, a
calendar with no decision in the 60 days after the run logs a WARNING that it has run out; until it is fed, the
page leaves out "Next decision" rather than showing a date already past. A vote belongs to its meeting, so a move
with a new date drops the literal's vote; a document with a new range and no move hides the direction and date.

**The running quarter is not a quarter (V694).** The Backfill marks it `partial`; Horizon's verdict reads the
last complete quarter, and its meter's ends are the series' own record, computed, not typed.

**CAPE comes from the originator (V541).** Shiller publishes his series himself as an `.xls`. Two traps,
both pinned by `npm run test:tools`: his dates are `YYYY.MM` with a one-digit month, so **`.1` is October,
not January**; and his headings are stacked one word per row, so **the lowest qualifying row is the
header** — the row above also reads "Date" and "CAPE" and yields the Excess CAPE Yield.

**A licensing gap, recorded rather than sat on.** The app is commercial (it accompanies a book for sale).
Treasury, BLS and FRED's own series are fine. FRED publishes Cboe's VIX under "Reprinted with permission",
which is not a public-domain notice, and nobody has checked it.

## Sources that were refused

**CNN refused at the protocol level.** Fetching Fear & Greed from a GitHub runner got HTTP 418. The only
way past is a spoofed browser, which is evading a block, **and this project does not do it.** Fear & Greed
left the app in V546.

**AAII refused in writing.** Its workbook's Terms of Service sheet prohibits automated downloading and
commercial integration. The parser was written and proved before the terms were read; it was not shipped.
**Read the terms first**; "is this licence compatible with a commercial app?" is the first question of any
new source.

**What replaced Fear & Greed: Volatility** (V663), the VIX itself, monthly from 1986 (VXO joined to VIX in
1990), read against the conventional 20 and 30 (Chase, TD). The Fear Curve (`VIXCLS ÷ VXVCLS`) was retired
then; VIX3M still arrives daily but is no longer charted.

## Which copy is canonical

**The repo.** Since V540 the task writes the artifact's database and never its HTML, so the page comes
from `src/` and the figures from the live layer. The cost is one diff before every publish (`CLAUDE.md`,
rule 5). **Do not mirror the docs anywhere**: the repo is public and a raw GitHub URL needs no
credentials; give a session a URL, never a copy. **No git credentials exist outside Keren's machine**; a
cloud or scheduled session reads and cannot push.

## Why there is a build step

The Artifact and the service worker need one self-contained file, and a person cannot hold a
fifteen-thousand-line one. **Since V695 the script is ES modules** (`src/js/*.ts` since V702, one concern each), bundled by
esbuild (`tools/bundle.js`) into one IIFE in `main.ts`'s place in the manifest, then comment-stripped. Before V695
it was seventeen parts joined into one closure, so any part could read or write any name and the only order was
the manifest's; now each module says what it imports.

- **A module's top level is declarations and values that need nothing else.** Whatever runs at load and reads
  another module sits in that module's `boot…()`, and `main.ts` calls the boots in order. **The boot order is the
  semantics**: V696 moved statements between modules but kept the sequence they run in; `tools/load-order.js`
  follows every statement that runs at load, boots included, and fails on a value read before it is set.
  It reads the boot list from `main.ts`'s syntax tree and fails if it finds none (V705: from V698 to V704 a
  line pattern missed the boots inside `try` and the gate checked nothing).
- **An import is read-only, so a value that other modules change lives in its owner's store** (V697): `now` in
  `data` (the live-fed figures: `now.fedFunds`, `now.yieldCurve`, `now.vixRow`…), `ui` in `dom` (what is open, and
  the hooks one page leaves for another), `page` in `history` (each history page's mode, window and head). A write
  is a property assignment (`now.fedFunds = …`), so there are no setters; `tools/load-order.js` follows store
  properties as it follows variables, and a property declared `undefined` counts as unset until a boot sets it.
- **Figures are data, not code** (V697). The hand-kept series are `src/data/series.json`; the FRED histories are
  `src/data/fred.json`, written by the backfill; `data`, `refresh-season` and `history-fred` import them and
  export each series by name. `test/series.test.js` checks that the code reads exactly the keys each file holds.
  `topTenQuarterly` (SPY's SEC annual reports from 1995 Q4, then its N-PORT quarter ends from 2019 Q3) was written once by
  `tools/import-nport.js` from filings downloaded outside the cloud; the quarters between reports are gaps, which
  `concentration.ts` fills with null so the chart keeps time and draws nothing there, since the SEC refuses GitHub's runners; the Backfill carries it forward
  from State Street's daily file as `topTenRecent` in `fred.json`, one figure per quarter.
- **The modules are TypeScript, strict** (V702, Keren: "If that is typesetting, then do it"). `src/js/*.ts` uses
  only erasable syntax (`erasableSyntaxOnly`): annotations, `!`, `as`, generics and type declarations, never an enum
  or a namespace. So esbuild bundles it by dropping the types, and Node runs it as it is (type stripping), which is
  how the unit tests import it. V702 was proved by the bundle: the shipped `index.html` was byte-identical before
  and after the types went in. `npm run typecheck` (in `check`) runs `tsc` with `strict` on. The app's shared shapes
  (a row, a meter, a point, a cycle, a reading, a chart's geometry) are global types in `src/types.d.ts`; what the
  app adds to `window` and to DOM elements is in `src/globals.d.ts`; a type only one module uses stays in that module.
  **The types say what can be missing (V707).** `byId` returns `HTMLElement | null`; `need(id)` is the checked
  lookup for an element written in `page-body.html`, and throws if it is gone. A band is one of `{lte}`, `{gte}` or
  `{from, to}` (read through `bandEnds`), a verdict `State` is one of six words and a style `Tone` adds the
  classes a tag may carry, and a `Cycle` is either ongoing (`to: null`) or closed (`to` a year). No `!` asserts a
  value its type says may be null: a data invariant is read through a helper that throws a named error when it
  breaks (`fileRow`, `metered`, `tagFor`, `stateOf`), so a bad document fails at the line that trusts it.
  Types are syntax, not comments, so the no-comments rule holds. `load-order` parses the source after
  `stripTypeScriptTypes`, which blanks the types and keeps every position; `uncomment` reads comments with
  TypeScript's own parser, so one inside type syntax or in a `.d.ts` file is caught (V705); the function
  sizes are measured on TypeScript's own syntax tree, arrow functions and callbacks included.
- **A verdict word is derived from its band (V706).** Pulse reads Steady between `PULSE_STEADY_LO` and `PULSE_STEADY_HI` times the pre-2008 mean, and its shaded zone is that same range. Labor market reads Tight, Solid or Slack against `ACT_BAND_*` (the meter's own end words), and Temperature reads Running cold, Warm or Running hot against `TEMP_BAND_*` (the Temperature info's "hot above the band, warm inside it, cold below"). Both words follow the latest month of their record, and the unit tests pin each edge. These two vocabularies are Claude's call from the app's existing words, and Keren can rename them.
- **A cut-off is computed from its record, not typed (1.2.0).** Under Keren's rule (DECISIONS, Bands and verdicts) a
  derived edge is `pctl` or the extreme of the series it reads, evaluated in `data.ts` beside that series: Pulse
  (`PULSE_*`, 1959–2007), Volume (`M2_PACE_*`, `M2_FLOOD`, 1960–2019), the saving cushion (`SAV_*`), the temperature
  shades (`heatEdges`, the whole CPI record) and the Sahm rule (`unempSahm`, `sahmOf`). The structural readings'
  colour comes from `stressOf` (band and record), not from a typed `flagState`. The tool's bands (`BANDS` in
  `tools/fetch-live.js`) are tested equal to `READINGS`'.
- **A band is declared once and pinned (V700).** Each range a meter draws is a named constant in `data.ts` (`DESIRE_LINE`, `M2_PACE_*`, `ACT_BAND_*`, `VIX_CALM`, `CAPE_FAIR`), and the meter, its label, the verdict word and the note that quotes it all read that constant. The unit tests pin every band to its value and check that each label says the same numbers, so moving a band fails `check` until the pin moves with Keren’s decision. They also check that each card prints the last value of its own record.
- **The modules are layers, and a module imports only from layers below it** (V696; `npm run hygiene` reads
  the order below from this paragraph and fails on any import that is not from a lower layer, V705). From the bottom: `format` (text and numbers), `dom` (elements, layers, focus), `live` (the live-data
  mechanism), `marks` (icons), `charts` (drawing primitives), `history-fred` (reads `fred.json`), `refresh-season`,
  `data` (the figures, their constants and sources), `activity` (the growth gap, nonfarm payrolls and retail sales, drawn by credit's line readings), `concentration` (the top ten's weight in the S&P 500, the same way), `credit` (the credit gap, margin debt and delinquencies), `model` (seasons, cycles, mood), `history` (the one history component),
  `readings` (verdicts, notes, reading blocks), `history-charts`, `roster`, `render-core` and `render-pages` (cards
  and inner pages), `indicators`, `era`, `insights` (each category's insights, behind Indicators' More details on that category), `fed-phases` (the Fed's phases, under the dial and on Analysis), `cycle-analysis` (Cycle analysis: every reading of a cycle against her closed cycles, as a blood test, and the tab where readings are found), `ai-insights` (AI Insights: Claude's dated reading of the open cycle and today's closest past moments), `diagnosis`, `dial-cycle`, `analysis`, `portfolio` (the Portfolio tab: All Weather, the Investment Clock and Custom), `inner-pages`, `cycle-tab`,
  `pages-nav` and `tabs-menu` (navigation), `repaint` (applying live data to what is drawn), `main`. A value set from a higher
  layer at boot (`page.head` from the roster) is still owned below, where it is read.
- `src/js/package.json` (`"type": "module"`) lets Node import the modules directly, which is what the unit tests do.

The conversion was proved by the snapshot (every state identical) and the browser suite, before and after.

---

# The app

## In one page

*Mrs. Market*'s Seasonal Behaviour table as a data product; a Clue-style market-cycle tracker; a companion
to the manuscript, not part of it. Tabs: Cycle · Analysis · Herstory · Portfolio (labels; the panels keep their keys `chart` and `analysis`. Cycle Statistics (Cycle analysis until 0.6.8) took Search's place in 0.6.1 and is labelled Analysis, and the cycle list is labelled Herstory; V657: the Content tab's models moved into
About Gyneconomy, the menu's page formerly "About the book"). Cycle = the dial, then
Browse: Weather (Economic Season · Market) · Activity (Jobs · Output) · Mood (Valuations · Sentiment) ·
Desire (Demand · Risk) · Circulation (Pressure · Money) · Stress (Credit · Debt); six since 0.9.11, when Activity (key `activity`) left Weather; four categories since 0.9.3, when Debt left Circulation for its own category, Stress (key `stress`), which Credit joined in 0.9.4; three in 0.9.0, when the Activity category (key `energy`) became Weather's subcategory Activity. Named Weather, never
Season; Volatility, never Fear or Sentiment (V663); Households, never Debt service.

Rules that shape the pages:

- **Reading pages are built by MOVING the authored markup in** (the V314 rule); pages stay put and are
  found by id. Anything reading a reading's authored markup runs before `renderSignsList` moves it.
- **Navigation is `NAV` and nothing else** (`NAV.open`, `NAV.panel`, or emit `data-open`). Inner pages are
  pages, not popups; the host moves as live DOM. **Don't invent a second navigation idea.**
- **Home is `grid-area`, never DOM reorder**: the taxonomy is the roster's order (`ROSTER`, see "The roster"),
  read by the category sheets, the past cycles, the Diagnosis and Cycle analysis.
- **One indicator, one card, one page (V658).** A reading that bundles several indicators shows each as its own
  card (Valuations: Shiller CAPE · Buffett indicator; Debt: Margin debt · Federal debt · Federal interest payments
  · Federal budget · Households · Delinquency rate). The split pages are
  built by one builder, `src/js/indicators.ts` (the roster row plus its `splitPages` entry, joined by
  `splitSpec` → `mountSplit` → `drawSplit`), on the history component (`divergeChart` hung from the reading's
  sourced line, `histControls`, `histHead`, `histNote`), so a new split is a row and an entry, not a page. The parent keeps its breakdown panel, each part a door to its page.
  Indicators holds the groups as its subcategories (0.8.5); the group pages that held them went in 0.8.6.
  The Power score is gone (V660, Keren: "remove the power score"): its card, page, composite and history;
  the three fiscal markers it summed each keep their own page.
- **A parent owns what its children share (V662, Keren: "i want all parent components to have all the properties of
  their children so we don't have to change different pages all the time").** `npm run check` runs `tools/hygiene.js`,
  which fails on: a chart height set outside `histFrame`; a chart margin set outside it (only the mini chart,
  `colPeek`, owns its own); a `font-size` that is not a `--type-` token; a style aimed
  at one page by id (make it an option of the component, as `goodAbove` is for Productivity's bars); a branch on a
  reading's name (`ind.bodyTerm === ...`: a reading declares its page in `ind.page` — `deferHighlights`, `chart`,
  `after`, `seat` — and `signSubject` only reads it; looking a
  reading up by name is fine); and anything unused — a function or variable nothing calls, a style class nothing
  carries (classes built at run time are listed in the tool). V662 removed what that found: the Temperature and
  Growth cycle cards (drawn but shown nowhere since V656), the hidden GDP and Valuation summary blocks, eleven dead
  helpers and 116 dead style rules.
- **No lab-style range rows (V661, Keren: "remove test result components from the app").** The rows that
  read like a blood test under each history (name, range bar, verdict: `panelRow`, `panelBar`, the sign
  page's `meterHtml` bar, `seatBandReading`'s reading box) are gone. What they carried as notes lives on
  in the chart's (i) menu: `histNote(head, info)` registers it (Households' note is the bill and the cushion
  together). A reading without a history (Productivity growth until its series lands)
  keeps its note behind **More details** (`ind.info`). The sourced bands stay on the charts as their lines.
- **The activity readings (V661; ungrouped since V688):** Unemployment rate (the Activity page; its roster name renames it on
  screen while `bodyTerm` stays the reading's term), and Productivity growth, each a sign page
  of its own (`signSubject`, the page id from the roster). Productivity growth is structural (Claude's call, to
  confirm). Its history is OPHNFB year over year, written by the Backfill as `productivityHistory`, and its
  `splitPages` entry mounts the split chart on the same page (the 1.3% slowdown line is the BLS figure; above it
  is good, so its bars read green).
- **Every reading keeps its own icon, in its category's colour (V661).** Keren first asked for the category's
  icon and then corrected it: "I don't want the individual icons to disappear. I just want them to inherit
  the color." `wearCategories` (`cycle-tab`) marks each reading's page with
  its category class, so the page head disc and the history head take `--cat`. Group rows keep a mark
  of their own (`GROUP_MARK`: Debt the bolt; Valuations its first member's).
  The two Treasury spreads (one view of Pressure) and Households' bill and cushion stay one page each (Keren, V658: they read as one).
- **Analysis shows every cycle as one `.era-row`** (V631), opening the cycle's page.
  Don't split it into list + overview.
- **A closed cycle is the Cycle page, not a copy of it (V659).** Opening one from Analysis moves the Cycle
  tab's own live DOM (`#cycle-view`, the dial, and `#today-analysis`, the Diagnosis and the category and
  reading pages) straight into `#calendar-cycle` (`enterEra`), and `leaveEra`, which the tab switch and the
  back arrow both call, puts it back. That container shares the tab panel's stack rule (`.tab-panel,
  #calendar-cycle`: a column at `--gap`) and has no wrapper of its own, so a past cycle stacks exactly like
  the current one (V665: a slot inside it once took the gap away; the suite now compares the two frames). In
  between, `eraShow` sets every history page's cycle picker to it (`page.cycles`, cycles mode; each page's own mode
  is restored on leaving). The reading pages' panels and insights stay today's: they are the page, and the picker
  says which cycle the chart shows. The category cards that showed a closed cycle's figures (`eraCard`, V659 to
  0.8.5) went with the category pages; a cycle's figures are Cycle Statistics' (Keren, 0.8.6: "All the previous
  designs we made, we can throw them out").
- **Cycle analysis is a blood test of each cycle** (`cycle-analysis`), and since 0.6.1 the tab where every
  reading is found (Search's job before it). One renderer, `drawChart(id)`, draws two hosts: `#chart-home`, the
  tab's home (a search box that is a door, Cycle Statistics with the Health Score inside it, Interest Rates Environment and Insights, the
  category rows, 0.8.3), and `#sheet-find`, the Indicators page, built at boot by `buildFind` and redrawn when it opens
  or a live reading lands (`repaint`). Every Insights row and the home's search box open it, setting its category
  (`finds[IND].cat`, a `tabBar`); the two share one cycle through `page.cycles`. Cycle Statistics reads the cycle it shows
  (`statsHome(i)`): each card is the average of every closed cycle beside the cycle shown; variation is `sdOf(lengths())`; every verdict is `typical()`, Tukey's fences on length. The Diagnosis's card (under the cycle story, previewing the visit note and score) is not a door to a
  page: it carries `data-chart-cycle`, sets `page.cycles` for the tab and presses the Analysis tab (0.6.3).
  `wireFinder` gives the host a `page.cycles` key and its own search state (`finds`). Every roster reading is
  averaged over the cycle's years; its range is the middle half of the closed cycles that reading covers, Tukey's
  fences beyond it mark Risk, and between is Attention, except that a result on the reading's `good` side is Normal.
  The cycle's length, bull years and bleed are judged only once it has closed; Regularity (`settled`) is read on the
  open cycle too, since it measures the three cycles before it. The health score is the share of judged
  readings that are Normal. On top of the Indicators page sits the period stepper (`stepper`, 0.8.9): the period in the serif, its place
  in its cycle under it, and arrows to the period before and after. Cycles reads a cycle as above; Years and Quarters
  read one calendar year or quarter (`page.when`, keyed "2024" or "2024 Q3"), each reading averaged over it (while it
  is open: today's figure) and judged against `Lab.now`, the range the open cycle uses, so a period adds no band of its
  own. A reading kept only by the year (`k` "y" or "yi") shows its year's figure in a quarter and names the year. Under
  the stepper sits the search box with one filter button; it and the stepper's period open the filter sheet
  (`filterSheet`, in the detail modal): Period (`periodCal`: newest cycle first, a band per cycle, a row per year, a tile per
  quarter in its season's wash from `seasonOfQ`; the key picked sets the mode, so the calendar needs no switch),
  Category, and Result (All, Risk, Attention, Normal with their counts), then Reset and Show, which closes the sheet. Every pick is a `data-pick-*` button handled once (`wirePicks`), which redraws
  the page and the open sheet. Each year in Year by Year and the dial's centre open Indicators on their period
  (`data-ind-when`, `openWhen`), and an Insights door on Analysis returns it to Cycles. `narrow` hides the rows that fail the search, the category or the result, and any
  category left empty. A pick redraws (the counts and the button's label change); typing only narrows, so the
  box keeps its focus. A reading's row is a button that opens its page and a category's name filters Indicators to it,
  through the panels' one `[data-open]` handler; the heading's count and chevron are a separate button that folds it.
- **The category pages are gone (0.8.6).** Indicators replaced them in 0.8.5; each category's insights sit behind
  Indicators' More details on that category (`catInsight` in `insights.ts`). `git show v0.8.5:src/js/cycle-tab.ts`
  is the last copy of the builder (`buildCategories`, `catItem`, the group pages and the doors it moved).
- **Portfolio is three containers** (`portfolio`): doors to All Weather and the Investment Clock, each its own page drawn on open (so today's weather and phase follow live data), and a Custom card that says "Coming soon". No placeholder figures.
- **Copy density**: fold into what exists; a new section is one kicker, one short visual, detail behind (i).
  No information twice per screen; no card in a card; borders, no shadows; a collapsible row is icon ·
  name · one figure · one tag · chevron. Three equal weights on the Cycle tab: hero, supporting pair,
  rows. Additions join one.

## Data model

**The generated histories** (`src/data/fred.json`, written by the backfill from FRED; never hand-edited):

| Variable | Series | What it is |
|---|---|---|
| `fedFundsHistory` | FEDFUNDS | effective federal funds rate, monthly: the policy rate, where the Treasury yields are what the market charges |
| `volatilityHistory` | VXOCLS, then VIXCLS | Volatility's history (V663): the monthly average of daily closes, the VXO (Cboe's original VIX, on the S&P 100) for 1986–89 and the VIX from `VOL_JOIN`, January 1990, its first month; the running month is left out until it closes |
| `fiscalHistory.gross` | GFDGDPA188S | gross federal debt, % of GDP, by fiscal year (OMB) |
| `fiscalHistory.held` | FYPUGDA188S | debt held by the public, % of GDP (OMB) |
| `fiscalHistory.interest` | FYOIGDA188S | federal interest outlays, % of GDP (OMB) |
| `fiscalHistory.budget` | FYFSGDA188S | surplus (+) or deficit (−), % of GDP (OMB) |
| `grossDebtQuarterly` | GFDEGDQ188S | total public debt, % of GDP, quarterly (Treasury and BEA) |
| `treasuryQuarterly` | TB3MS, GS2, GS5, GS10, GS30 | calendar-quarter means of the monthly yields; `s3m` is GS10 − TB3MS and `s2y` GS10 − GS2, from unrounded means; `partial` marks the running quarter; `y30` is null for 2005: the Treasury suspended the 30-year bond in October 2001 and published no 30-year constant-maturity yield from February 2002 until the bond returned in February 2006 |

Monthly series are oldest first and leave a missing month out rather than interpolate it. The fetch date is
in the backfill's commit.

**Cycles.** First bull year to last bear year; the bleed closes a cycle. `sp500AnnualReturns` (real annual
total returns, Slickcharts' compilation of S&P DJI) partitions the timeline into Dot-Com 1991–2002 ·
Housing 2003–2008 · Big Tech 2009–2018 · COVID-19 2019–2022 · AI 2023–today. Eras are named for what
grew; COVID-19 breaks the rule, so no sentence on screen claims it. **Never a second market model beside
`sp500AnnualReturns`.** Named eras and the season ring are independent objects; never reason from one to
the other. To close a cycle: set `to`, drop `ongoing`, open the next.

**Growth is YoY only** (quarter against the same quarter a year earlier, the OECD/World Bank headline).
BEA's annualized print (−28.0 to +34.9 across 2020) is never carried and never feeds the season model.

**A gap is drawn as a gap.** Oct 2025 has no BLS reading: no column, out of every average; the 30-year
yield's 2005 gap is real. Match by date, never by row offset.

**Sources policy.** Every figure cites a primary source: agency, central bank, index originator. No news
sites, no aggregators. Two compilations cited and labelled: Slickcharts for S&P total returns (cross-checked
against Damodaran, every year within 0.5 pt) and Trading Economics for ISM's record high/low. Two figures
computed in-house and say so in the (i): the Buffett Indicator and productivity YoY. **Check the source, not
a summary** — a Google summary once attributed a "normal range" to CME that CME does not give. FRED's
reliable endpoint is `https://fred.stlouisfed.org/data/<SERIES>.txt`; a fetch summarizer misreads long
tables, so for a figure that matters load the page in a browser and parse rows. **Before computing any
figure, check for a conventional published one; carry and cite it if it exists.**

**Meters.** Every outer `min`/`max` is the true US historical extreme; the band is a narrower zone. Meter,
band and a card's editorial tag are separate reads and may diverge — explained in the caption, never
reconciled away. **Never restore the word "optimal" on an economic reading.**

| Marker | Range (primary series) | Band |
|---|---|---|
| Federal debt (gross debt ÷ GDP, V643; "Debt burden" until V660) | 0% 1835 (Treasury Fiscal Data) – 125.9% FY2020 (OMB via FRED GFDGDPA188S); today GFDEGDQ188S, latest quarter | ≤ 70%, the series' own FY1976–2025 mean — CBO's 50-year rule applied to gross, since CBO states it only for held (51%); `checkGrossDebt` re-derives all of it |
| Federal interest payments (BEA gross interest ÷ GDP, 0.9.0; "Interest burden" until V660) | 1.8% 1952 Q4 – 5.0% 1991 Q1, quarterly from 1947 (FRED A091RC1Q027SBEA ÷ GDP); read from the record by `syncInterest` | ≤ 3.5%, the series' own 1976–2025 mean; `checkInterest` re-derives it |
| Deficit rate (÷ GDP) | −2.3% FY2000 surplus – 26.9% FY1943 (FRED FYFSGDA188S); the low end departs the true-extreme rule (real max surplus FY1948 +4.3%), flagged, Keren's to settle | ≤ 3.8% |
| Household debt service | 9.05% 2021 Q1 – 15.85% 2007 Q4; FRED TDSP, begins 2005 Q1, rebuilt 2024 on tradeline data — its 15.85% is not the retired series' 13.2%, never in one sentence | below its own mean, `DSR_MEAN` 12.4% |
| Personal saving rate | 1.8% 2005 Q3 – 24.4% 2020 Q2; BEA via FRED A072RC1Q156SBEA | 4.5–12.2%, 10th–90th pct of 318 quarters |
| Productivity growth (Activity) | −1.7% 1974 – +6.7% 1950, BLS OPHNFB | ≥ 1.3% YoY, BLS's post-2005 slowdown average; "better than the slowdown", never "at trend" |
| VIX (close) | 9.14 Nov 3 2017 – 82.69 Mar 16 2020, Cboe via FRED VIXCLS | the market convention (V663, Keren: "set the rules per convention"), `VIX_CALM` 20 and `VIX_FEAR` 30, cited to Chase and TD in `VIX_CONVENTION`: Calm below 20, Elevated 20–30, Fearful above 30; the chart hangs from 20. Its ring is the reading's place between the record low and high on a log scale (`vixPct`) |
| Buffett Indicator | 32% Q2 1982 – 256% Q2 2026; Fed Z.1 NCBEILQ027S ÷ FRED GDP | ≤ 80%, his 2001 *Fortune* figure |
| Shiller CAPE | 4.78 Dec 1920 – 44.19 Dec 1999 | ≤ 17×, the series' long-run mean 17.42 |
| Durable goods spending (Desire) | the monthly record since 1960, BEA via FRED DDURRA3M086SBEA | ≥ 0, definitional (more or less than a year earlier) |
| Equity risk premium (Desire) | the monthly record since 1928, Shiller's Excess CAPE Yield | ≥ 0, definitional (stocks earn more or less than bonds); no word |
| ISM Manufacturing PMI | 29.4 May 1980 – 77.5 Jul 1950 | ≥ 50, definitional |
| Unemployment | 2.5% May–Jun 1953 (FRED UNRATE) – 24.9% 1933 (Census) | 3.5–5%, bracketing CBO's NROU ~4.2%; the (i) says which half is sourced |
| CPI YoY | −15.8% Jun 1921 – 23.7% Jun 1920, BLS | 1–3%, a TARGET |
| M2 velocity (Pulse) | 1.126 Q2 2020 – 2.192 Q3 1997, FRED M2V | 1.7–2.2×, word **Pre-2008** |
| M2 growth (Volume) | — | 3.5–10%, word **Her pace**, 10th–90th pct 1960–2019 |
| Real GDP growth | — | 1.0–4.3%, 10th–90th pct of 154 quarters from 1988 |
| Horizon (spread) | — | ≥ 0, definitional, one-sided |

**What each band is**, and the (i) says which: computed from the app's own series (Pulse's pre-2008 range,
deliberately not "normal"); the 10th–90th percentile where no published norm exists and the series is long
enough to speak, **and the window is free of a policy floor** (79 years of saving qualifies; the Treasury
series does not); cited to an outside authority (CAPE, Buffett); definitional (PMI 50, Horizon's, Desire's and the premium's
zero); bracketed around a published estimate; read one-sided against CBO's 50-year averages (a two-sided
band would flag the healthy end); against its own mean (debt service — when a verdict already contains a
threshold, the bar takes that threshold); editorial and Keren's (Temperature). **A band ships with its
provenance in the (i), or it does not ship.**

**Temperature's band is the one target in the app.** The Fed publishes a point, 2% on PCE, no band; the
1–3% edges are part of the Season Model's structure, a point either side of it (Keren, 0.6.18: name it the model's structure, never "Keren's call"), the same control range the Bank of Canada and the Reserve Bank of New Zealand set around 2%, read on CPI, which has run 0.39 points higher on
average since 2000. The (i) says both. Since 0.8.6 Analysis also judges Temperature against it (Keren chose it over the record's middle half): the roster row's `normal` pins a reading's Normal range while its Risk stays past its own record's fence, and the Analysis (i) names the band. The reading page still never calls the band "normal." Nothing is fetched from the
Fed; the courier checks monthly that the objective is still 2% and, if it changed, notifies rather than
moving anything — only Keren moves the band.

**Pressure has no band, by decision.** There is no published normal range for an interest rate, and the
percentile construction fails here: the 87 quarters held contain a decade of a zero-pinned short end. Keren
was offered three constructions and chose none. **Do not draw one without asking her again.**

The three fiscal markers are one balance sheet asked three questions — stock, flow, carrying cost. Until
V660 they were also summed into Power (100 − their stress composite); Keren removed it, and
`git show 46e5b1f:src/js/03-data.js` (V659 on `main`) has the last copy. **Mood's fast members (Volatility,
Desire) and slow members (Valuations) are two panels; don't merge them.** Margin debt returns only with the
FINRA monthly series.

## The Diagnosis (V664, under the dial since V665)

Keren: "What I want is a diagnosis. Like a doctor would analyze a patient … based on the app's parameters …
Also, I want to have emotional intelligence in this analysis." Since V665 it is the Cycle page itself: the dial,
then `#diagnosis` under it, in place of the four category cards (Keren: "I want the categories to go away from the
cycle page because we already have it in search and in the diagnosis"; Search is now Cycle analysis), as Clue sets its cycle-phase insights
under its cycle view. It is two sibling cards inside `#diagnosis` (a flex column with the page gap): the trend card (the emotion in its
season and the cycle's story, since V681) and, since 1.8.0, the `.dx-years` card, one `.dx-year` row a year, newest
first since 0.4.1 (Keren: "I want to see 2026 at the top, and then go backwards"), from the cycle's last year to its
first (`yearByYear`). Since 0.4.1 a row is the Analysis page's cycle row at the scale of
a year (Keren: "just put a bar, a colored bar, like in the analysis page"): the year's quarters from `m.track` as a
season strip (`seasonRuns` and `seasonPills` in render-core, the cycle list's own, a single quarter drawn as a bar
since four quarters fill the row; the quarters not yet run a grey line on the season strip and grey dots on the market
strip, Keren), and under it the same Growth,
Prices and S&P 500 chips (`econChips`), read from `yearGrowth`, `yearInflation` (the figures `eraGrowth` and
`eraInflation` compound) and `sp500AnnualReturns`, whole percents as on the Analysis page. The year in progress reads
`yearSoFar`: its latest quarter's real GDP on a year earlier and its latest month's CPI, the Growth and Temperature
cards' own figures; the bar's blank end says the year is not done, so the row carries no "so far", which would not
fit on a phone. Its grey dots are laid out after layout, not in the markup (`fitYearDots`, run by `renderDiagnosis` and
`settleAll` on every tab switch and resize): their pitch is one quarter of the open cycle's Herstory row, a width
only the page knows, so they sit exactly as far apart as Herstory's (Keren, 0.6.18), the first one gap from the market bar, so the
gaps read even (0.8.8). The emotions and the season names left the row in 0.4.1. A row opens
Indicators on its year (`data-ind-when`, 0.8.9); the quarter sheet it opened before is gone. A closed cycle's card opened on **After** (the S&P 500 the year after
the close, `yearAfter`) from 1.8.0 until 0.6.17, when Keren dropped it for the next cycle's own page. The systems card (Circulation and Energy with their Analysis lines, `analysisFor`, `acrossCycle`)
left in 1.8.0; `git show v1.7.0:src/js/diagnosis.ts` is its last copy.
**A closed cycle reads its own diagnosis, at its close** (`renderCycleView` calls `renderDiagnosis(m)`): the
emotion at the closing month, its years, and what followed a year later. Every live reading repaints it
(`applyLive` runs `repaintDiagnosis`), since today's emotion reads the VIX; a past cycle's is left as it is.

- **The Fed's phases** (0.6.7, `fed-phases`): the first card, for today and any closed cycle. `fedPhases` turns
  `fedMoves` (the Backfill's months with a Fed move, netted: the discount rate `INTDSRUSM193N` before 1982-09-27,
  `DFEDTAR` to 2008-12-15, `DFEDTARU` since, the join a real cut) into alternating phases, and today's live move
  (`now.fedFunds.lastMove` on `asOf`) opens a new one before the next Backfill. `cyclePeak` marks every cycle's peak, its highest CPI
  reading once the decline it inherited from the cycle before has passed. `findRuns` walks the whole record once
  (cached on the history's length and last value) with `cpiDirectionAt` (the season model's own 12-month trend,
  ±0.02) and gives each month that is not falling the top of its run; the cycle's opening months are skipped while
  they are falling or belong to a run that topped before the cycle began, and the highest of the rest is the peak
  ("Peak", on the prices curve and as a level line; "Peak so far", hollow, on the open cycle). The walk is over the
  whole record because a run crosses cycle edges.
  Bands, dot and labels are HTML laid over an SVG drawn with `preserveAspectRatio="none"` and non-scaling strokes,
  so the card is fluid. Prices and the Fed funds rate are drawn as quarterly means through a Catmull-Rom curve, so
  the lines flow as in her tracker (Keren: "make the chart lines a bit more feminine"); the peak sits on its quarter. The levels read `m.reading` (prices and growth at the cycle's last quarter) and the phase at
  its last month.
- **AI Insights** (0.6.5, `ai-insights`): the open cycle's first door, its lede clamped to three lines with the health
  score under it (`cycleScore`, Cycle Statistics' one box; the open cycle has no Cycle Statistics card), opening the
  page `sheet-ai-insights` (built by `buildAiPage`, drawn on open): one `trendBox` per chapter (the cycle's name,
  holding the summary with the cycle's story in it, then
  The economy, The market, Risk factors, Closest moments), then the byline and More details. The chapters after the summary carry a
  picture drawn from the readings: Risk factors takes every result Cycle Statistics reads as Risk (`riskLabs`, the one
  judgement) and places each reading's latest value against its own record (`rankToDate`); The economy and The market draw
  `colPeek` tiles of the last twelve quarters for the readings in `tiles`; each closest moment draws its two-year season
  strip then and now. Its words are data, `src/data/ai-insights.json` (`lede`, `sections`, `echoIntro`, `asOf`), and every figure in
  them is a `{token}` that `figures` maps to a Cycle analysis lab, so the card prints the open cycle's figure from
  `labs()`, the same number the health chart shows. Rewrite the words and `asOf` when the data have moved enough
  to change a sentence. `echoes()` builds a quarterly panel of the `echo` readings (monthly readings averaged into
  quarters, annual ones held across their year, each carried to the newest quarter, which takes the labs' own figures),
  scales each by its spread since 1970, and matches a path, not a point: the last `ECHO_WINDOW` quarters (two
  years) against every run of as many quarters that ends before the open cycle, by root-mean-square gap.
  A single quarter matched COVID-19's 2021 Q1, which shared today's levels after a crash and a rescue; the path
  separates them (Keren: "COVID-19 is not the same … 1999 and 2018 is good"). Matches closer together than the window
  are one episode, shown once by its closest quarter. The card shows the top
  three; More details holds the method and the top eight.
- **One vocabulary** (V686, Keren's "Switch"): the Diagnosis names the Mood page's emotion, the cycle of market
  emotions' stage (see Mood and season below). `diagnoseToday` reads `moodToday`; `diagnoseClose` reads the
  `moodTrack` month at the close. The V664 seven price-and-VIX feelings (`readFeeling`, `marketFacts`, their
  cut-offs, `lastFeeling`'s carrying, the Diagnosis (i)) are retired; the V685 commit is the last copy with them.
- **Her story this cycle** (V686, V688; `cycleStory` in model, `moodCard`, `storyBeats` and `storyText` in
  pages-nav): the text of the Mood page's "She's in …" card, for the cycle on screen (`eraOpen`, else
  `currentEra`): the `moodTrack` months inside its years, the first, the highest and lowest `pct`, the last (today's
  `moodToday` for the open cycle), told in month order, with the high or low folded into the opening or closing
  beat when they share a month, and the two emotions with the most months. It is read when More details opens,
  so the card follows the cycle on screen. `moodFigures` is the first fact of `moodInfo`.
  It replaced Emotion × Season (a twelve-by-four grid with a slid test), which Keren found uninformative.
- **The record is computed at load, never written down** (`moodTrack`): every month her mood can be read, and the
  S&P 500 twelve months on.
- **The S&P 500 a year later** is Shiller's monthly S&P 500 (`sp500MonthlyHistory`, from 1948, through the Backfill from the same
  workbook the CAPE fetcher reads). **Shiller's newest month can be a first-of-month close** ("Sept price is Sept 1st close") until
  his next update; it is what he publishes, so it is what the app reads.
- **No score** (the composite failed out of sample), no forecast: the record is a count of what followed.
- **Mood and season** (V679, V686): The Diagnosis's mood card (`moodDoor`) named today's feeling in today's season until 0.4.1
  (its season-share bars went in V686); the Mood page's Insights (`insightMood`) draws the cycle of
  market emotions (V685) from `MOOD_CHART`, the reference chart's own coordinates and colours. `moodAt` in model
  ranks valuations (CAPE and Buffett), the VIX (upside down) and consumer confidence each against its own history to
  that month (`rankIn`, over `rankToDate`) and averages the three; `moodTrack` keeps every month since all three can
  rank, and `moodRead` ranks each against the months before it and takes its change over `MOOD_TURN` months;
  `moodWord` picks the nearest stage by height on the rising (`MOOD_RISING`) or falling (`MOOD_FALLING`) side.
  Optimism is on the chart twice, so both dots light. The mood describes, it does not forecast, so it is not the
  composite that failed out of sample. `repaintDiagnosis` repaints every category's Insights after a live reading
  lands, so the lit stage moves with the VIX.
- **Consumer confidence** (V679) is a row reading like Productivity growth: `confidenceReading` in data, a split
  page against the OECD's 100 line, and its history `confidenceHistory` (the OECD's own SDMX API, dataflow `DSD_STES@DF_CLI`,
  measure `CCICP`, monthly from 1960) through the Backfill. FRED's copy (CSCICP03USM665S) stopped at Jan 2024 when the OECD
  rebuilt its database, so the Backfill reads the OECD directly. Neither is reachable from a cloud session, so the series
  lands by running the Backfill.
- **The equity risk premium** (1.1.0) is a row reading in the Desire group: `premiumReading` in readings, a split
  page against zero, and its history `premiumHistory`, Shiller's Excess CAPE Yield in percent, read by the Backfill
  (`premiumFromRows`) from the workbook `shillerSheet` already fetches for the S&P 500. Shiller publishes it as a
  fraction; the reader refuses a figure that is not one rather than guess the scale. It has no word, so its tag is
  empty and the row draws no pill. Like the other Shiller and FRED histories it lands by running the Backfill.
- **One cycle, one card** (0.6.17): `diagnosisHtml` is one sequence for every cycle, open or closed, and the only
  branch is inside `cycleCard`, which picks what the card opens; the unit test "every cycle page, open or closed, is
  built in one shape" compares each closed cycle's containers and their children with today's (the peak mark and
  the year rows, which vary with the data, aside). Under the Fed's phases the Diagnosis has one card, then Year by Year. Today's is
  AI Insights (`aiInsights`); a closed cycle's is Cycle Statistics (`chartDoor`): the cycle's `story` from
  `marketCycles`, clamped to three lines like the AI Insights lede, and its health score, jumping to the Analysis tab
  set to that cycle. The mood card (`moodDoor`, V681 to 0.6.16) went with it. `onDial` names the category the
  hub opens on Indicators (Weather).
- **Weather from the dial** (V680): the category flag `onDial` marks Weather as the category the dial already reads.
  The hub's button opens it (`hubOpen`'s `cat`, on the current quarter) while the dial shows today; a parked
  quarter or a closed cycle's close opens Indicators on that quarter (`hubOpen`'s `when`, 0.8.9). The Diagnosis's Analysis leaves out
  every `onDial` category. Weather's Insights (behind Weather analysis's More details since 1.5.0) open with `cycleNowNote` (the note the popup used to open with), then
  the season's `seasonReading` (`seasonCards`), this cycle's years from `sp500Years` (`marketCycleCard`) and the
  barometer. The S&P 500 card is a row reading (`marketReading` in forms) whose series `sp500Years` is the same
  `sp500AnnualReturns` the dial's inner band draws, so card, chart and dial read one number. Its split page names
  calendar years through the page option `at`.

## The season model

Six seasons in cycle order: Summer–Inflation · Autumn–Disinflation · Autumn–Stagflation (key `lateautumn`;
the display name has no "Late") · Winter–Deflation · Spring–Deflation · Spring–Reflation. Two Springs and
two Autumns share names, so **every season is named through `seasonTitle(meta)`, never a bare
`meta.name`**. Actions come from the manuscript's cycle figure (Springs Growing · Summer Ripening · Autumns
Harvest · Winter Seeding); fertility names only where the book has one — don't invent one.

`readSeason(cpi12, gdp, potential, prevRegime, annual)` computes the season, **never set by hand** (`seasonOverride`
exists and shouldn't be used). Growth = the latest reading of real GDP against a year earlier, set beside
`potentialOf(q)`: CBO's potential growth (`potentialYoYHistory`, from FRED GDPPOT via the Backfill) from 1950 Q1,
`PEAK_TREND` before it (real GDP's trend from the 1929 peak to the 1948 one, `PEAK_YEARS`, computed in `bootModel`
from `usRealGdpGrowth`), and CBO's last estimate for a quarter after its data end. `regimeOf` reads expansion above
potential + `HOLD_BAND` (0.47, BEA's mean absolute revision), contraction below potential − `HOLD_BAND`, and
inside the band keeps `prevRegime`. Temperature = the price level against the band plus direction from a
twelve-month fitted trend. The twelve months are calendar months (`cpiYear`) and the trend is fitted on their
real positions (`cpiTrend`), because the record has a hole: BLS published no October 2025. A window may hold
eleven readings; counting the last twelve entries would have stretched it to thirteen months and steepened the
slope (V694).

| Season | Growth | Temperature |
|---|---|---|
| Spring — Deflation | Expansion | Cooling, within or below |
| Spring — Reflation | Expansion | Heating, within or below |
| Summer — Inflation | Expansion | Hot |
| Autumn — Disinflation | Contraction | Cooling, within or above |
| Autumn — Stagflation | Contraction | Heating, within or above |
| Winter — Deflation | Contraction | Cold |

Row order is Keren's. The tie-breaks, all stated in the (i): in expansion, hot is Summer regardless of
direction, otherwise direction alone decides — **never re-add a Goldilocks Zone**. Contraction mirrors it:
cold is Winter outright, otherwise direction alone. **Never redefine stagflation as contraction + hot
regardless of direction** — it flips the Q4 2023 example (CPI 3.32%, hot and falling, reads
Autumn–Disinflation). Steady prices keep the prior reading's direction (`heading`, carried down the track like `prevRegime`), and read Reflation or Disinflation only when nothing precedes them (0.9.2).
Shrinking needs no rule of its own: below zero is always further than the band below potential. **Inside the
band the regime continues**: `prevRegime` comes from the track, computed once over the full history, never per
cycle; the annual track runs first and seeds the quarterly one.

**Two tracks, one reading.** `seasonTrackYears` (`seasonYears`) reads each year before quarterly GDP (1948) from
that year's annual growth against `PEAK_TREND`, with December's prices, and spreads the reading over its four
quarters (`annual: true`). `seasonTrackAll` (`seasonQuarters`) is quarterly from 1948 Q1 and indexed like
`gdpQuarterlyYoY` (cycleModel finds a close by that index). `seasonTrack` joins them; the cycle strip, the dial and
`regimeByQ` read it. A closed cycle with no quarterly close takes `closingReading`, and its (i) says the reading is
annual. (V690; 0.8.0)

**One direction, one source.** Every expansion/contraction on screen comes from `r.regime`/`regimeByQ`.
Growth's chart is coloured by regime, **never by the sign of growth**.

**Hormones = the policy rate; Pressure = the level the market sets; Horizon = the slope.** Pressure (V639,
Keren: "the 10-year is the risk-free loan across the economy, so whenever it goes up we can see the pressure
the US government has to repay its debts") is the Treasury yields, one maturity at a time, opening on the
10-year with the others in the ⋯ menu; its row prints today's 10-year from the live curve with **no verdict
word**, because a rate has no sourced band. Its Insights (V640) are the body, the economy and the reading, every
figure computed. **The chart's resting plate names a quarter, and the quarter still running says "· so far"**:
the row is today and the plate is an average, and without the words the two read as two different todays
(Keren caught it in Version 294 and again in V640). This reversed V597 (the loan survey as "resistance") and V598
(the levels folded into Horizon's menu); the survey was dropped at her choice and is at tag v638-fewer-words.
The gap is a forecast, not a pressure, judged optimistic or pessimistic; it sat in Mood until V685, was
Circulation's own Horizon card for V685–V687, and since V688 is Pressure's second ⋯ group, Treasury spreads
(Keren). One state, `pressureView` ("yield" or "spread", in model beside `spreadPick`), picks what the page
draws: `drawPressure` shows one chart shell (`showPressureView`), draws that view (`drawYlm` or the spread view
`drawSpreadView`, the action `renderHorizonPage` registers), and writes its Insights into the one `#pressure-insights` box, so
the page keeps one Insights box; `pressureHead` builds the title, both menu groups and the note. Both views share
the `pressure-range` window. **The spread's word is slope AND
direction, never slope alone** (2008 and 2021 both show a steep curve with opposite meanings); its lookback
is fixed at four quarters and does not follow the chart's window; its (i) carries the NY Fed's caution that
it is the level of the spread that forecasts, not the crossing.

## Pages and components

**A history page is three containers**: control on the page's ground, the history container (head,
readout, picture, trend), the reading container. All twelve share one frame, `histFrame`, and one head,
`histControls`. **The frame's height is every chart's height** (V662, Keren: "make the height universal inside
the parent component"): 335px on a phone, 375px wide, 25% taller than before so the bars have air;
`divergeChart` and Pressure's two views read `histFrame(W).H` rather than their own numbers, and every axis
chart takes its four margins from the frame too (`F.L`, `W - F.R`, `F.T`, `H - F.B`); GDP's year-on-year view, the
one exception, was removed in V668; **the title names the series, never the page** ("CPI, YoY"). **Pressure is the one page
with no reading, by Keren's decision.**

- **One affordance per subject.** When the chart draws a reading, its note goes in the head's `⋯` menu
  and the row carries no (i). A row that is a door carries the chevron only.
- **Window on the ground, series in the menu.** The bar holds one ruler (which window); a series choice
  lives in the `⋯` menu as radio rows. Which menu is open lives in `headMenuFor`, not the DOM.
- **The trend pill is one handler and one line** (V671). Its click is caught on `#metric-page`, which
  travels to whichever tab opened it, so a page opened from Cycle analysis or a past cycle toggles exactly like one
  opened from the Cycle tab (until V671 the handler sat on the Cycle panel, and every pill opened from Search
  was dead). Every chart behind a button draws its `<g class="fit">` through `fitLine` (`charts.js`),
  over the same window its pill measures; the suite presses every pill and fails on one that draws nothing.
  Under eight points the pill is not a button at all (Keren's "unavailable", V437): the annual series
  (CAPE, Interest payments, Federal budget) reach it inside the current AI Cycle (at most four years, from
  2023) and the Housing Cycle (six, 2003–2008).
- **The top bar is restored from the page's home, not remembered** (V671). Each `PAGE_HOME` entry has a
  `bar()` that returns the title and back action for its tab as it stands now: inside a past cycle the
  Analysis home is the cycle (its name and `eraPageBack`, the way back to the list), so backing out of a
  reading's page keeps the arrow. It used to restore the bare "Analysis" title, which dropped the arrow.
- **The readout is a fixed block above the chart, never a tooltip on it.** No register under the chart.
- **A panel built by a renderer is built once and placed, never rebuilt.** `detailTexts` is
  content-addressed (V532), so a note following a control is never frozen and never leaks.
- **Address a row by name, never index** (`valRow(key)`). A comma list in `querySelector` is not a
  preference list.
- **One number per shared decision.** `COL_FILL` is every column's share of its slot; `AXIS` is every
  chart's margins; geometry carries the name of the chart that made it (V618) so a hover can never read
  another chart's ruler.
- Every (i) is a `.lede` plus `facts([...])`, one fact per
  line, five or six max; all open the one shared modal.
- **Insights: every sentence is arithmetic on the series above it; none is written by hand.** An
  insight naming a record excludes the reading it describes.
- **Cycles · Years** on every history; both modes draw the same chart. `TIMELINE_STOPS` is the only
  vocabulary; **50Y does not exist**.
- **Sparklines only on a row with a real series where the full chart isn't already on screen**; never a
  line from under three points (Volatility's slot is emptied on purpose, Keren V277; it carries a ring).
- **Peek cards show today's readings only**; the whole card is the button; don't re-add a filled
  reference band.
- Four year spellings mean different things: `FY2020`, `YEAR 5` (the dial), `5Y/10Y/25Y` (windows),
  `Y1…Y10` (year of a cycle).

**Dead code is removed with proof, never by eye**: `npm run hygiene` names what nothing uses, and the suite
collects every class rendered on the pages it opens; a class built at run time (its name never written whole
in the source) must be declared in hygiene's `DYNAMIC_CLASS`, or hygiene would call its style unused and
invite the prune that took the bull and bear colours in V662. A function that nothing in its own module calls
is dead even when another module has a namesake (1.2.1: hygiene counts a module's private functions inside
that module). A branch on any row's name against a literal (`R.name === "Growth"`) is caught as well as
`ind.bodyTerm`; a lookup that finds a row by name (`filter`, `find`) is not a branch. A style keyed on a page
attribute or on an id that belongs to one reading's page (`#pulse-record`) counts as page-scoped. Type set in an inline style (a font, line height, letter spacing or
colour in a `style` string or through `el.style`) fails too: an inline style carries only geometry or state worked
out at run time, and type belongs to a class (0.1.1). **A maintained figure that nothing reads is a
lost feature, not dead code** — check the refresh contract before deleting data.

**Gone on purpose, don't re-add** (the class and id names among them are in hygiene's `GONE` list, so they
cannot quietly return): the par-yield-curve snapshot chart, the old spread-meter tiles, a
standalone Investment Clock wheel, the monthly Calendar grid, reading pills on charts, bear-year shading,
growth bars or sparklines on the cycle rows, a Growth ring beside Rates, the Market card of year cards, a
floating tooltip on the dial, `.vh-line` and every line chart, a footer, a page title, a Goldilocks Zone,
a `touchstart` handler that changes the DOM (iOS then suppresses the click and every button dies).

## The dial

Draws the cycle from its first quarter to today or its close; size is one CSS var, `--dial`. Outer ring =
the four seasons as one round-ended shape per run, colours from the `--season-*` tokens. **Spring–Deflation
sits between Winter and Spring–Reflation at Keren's choice — don't move it.** A thinner market band runs
one segment per year from `sp500AnnualReturns`, carrying the **peak year**: the cycle's most profitable
year by annual total return, **per year, never the compounded high** (Keren's rule); the reader-facing term
is "Peak year". Press and hold the year badge to scrub; it stays where it is let go; tapping a moon parks the
badge there too. The hub is one button (`#season-wheel-hub-open`): date, season with a grey ›, theme, and the
year's S&P 500 return from `sp500AnnualReturns`, the band's own number. `hubOpen` points it at Indicators on Weather (today),
at Indicators on a quarter (`data-ind-when`), or at nothing (a year). The quarter sheet (V693) and its card design
(`catCard`, `peekCard`, `.cat-sheet`, the season's prose in `quarterPopup`) went in 0.8.9; `git show v0.8.8:src/js/quarter-sheet.ts`
is its last copy.

**The date line always reads "Today, <the reader's date>"**, never `DATA_COMPILED`. Provenance lives on
the figures: every card names the day its number derives from, and a card that doesn't is the bug.

**No optical nudge** — when Keren reports something is off, look for the bug before explaining why it is
not one. `100vw` includes a classic scrollbar while the card's box does not, and Playwright hides
scrollbars, so the rig must include a scrollbar run.

## Charts

**Every chart is bars.** The test for a new one: can it stand on zero? If not, find the midline it hangs
from (Pulse hangs from the pre-2008 mean); **never truncate the axis under a column.** Households draws
paired columns, honest only because its two series are shares of the same income. **Every chart is
width-aware** and measures its host. Temperature's columns are binned by the reading, not by rank, so the
same CPI is the same colour in any cycle. `unempHistoryChart` copies `cpiHistoryChart` as a **separate
function on purpose**: folding two subjects into one function behind flags is how a component stops
being readable.

**The barometer** (Weather's Insights) reads the GAP between total price change and total real growth
over a cycle's closed years — Dot-Com −3.6, Housing +1.5, Big Tech +0.2, Stimulus +3.5. They finish close
over a full cycle as a regularity of the low-inflation era, **never described as arithmetic**. One band,
`GAP_BAND = 1.5`, decides both the word and the run counter.

**The federal budget page** ends at FY2025, the last actual, while the marker above reads CBO's FY2026
projection — the same deliberate gap CAPE's chart has, stated in the caption. A `labPanel` marker is found by
its page id (`labRow`); the day another gets a series, give its roster row a `hist`.

**The history component owns its years (V699).** Each reading’s first year with data is `page.y0`, computed from its roster `hist`; the cycle picker offers only cycles that start at or after it, and `pageCycle` falls back to the open cycle for an older one. A page never passes its own minimum. `chartAxes` thins its ticks until no two neighbours print the same label.

## Editorial slots

`sources.html` is generated by `npm run sources` from the app's own Sources screen; the grouping patterns
live in the app and nowhere else, and **the generator refuses to write if anything lands in "Other"** — the
fix is a pattern in the app, not a bucket in the generator.

Awaiting Keren: the About-the-book paragraph,
`seasonReading.springdeflation` (empty by her choice), the five era blurbs (an AI first draft),
`cycleNowNote` (revisit each refresh).

## Open questions

- **Two citations are neither primary nor a labelled compilation**: First Trust and Fisher Investments,
  carrying the typical-cycle-length figure the ring is scaled to (`typicalCycleYears = 6`). NBER dates
  business cycles, not market ones, so there may be no primary source. Label as estimates, find better,
  or drop the scaling claim — **Keren's to settle.**
- **Three registry rows have no writer** (V637): `sentiment`, `valuation`, `coincident` are declared but
  nothing fetches them and the courier copies only the pipeline's six. Give each a primary source, or
  declare them static and let the suite assert every row is one or the other. Left as is for now.
- **Portfolio**: where its numbers come from — the reader's holdings, a model allocation per season, or
  asset-class returns by season.
- **The growth-direction threshold ±0.025 pp/qtr is not ratified** (Keren ratified the window, not this);
  it is the one number that can flip Autumn–Stagflation vs Summer.
- Whether Spring–Deflation's action is "Growing" is not the manuscript's; it has no Content-tab narrative.
- The other segmented controls (indicators tabs, tab bar) were to be revisited together.
- Stacking panels to compare Temperature and
  Growth; older fixed-viewBox charts should move to render-width drawing when touched.

- **The `xlsx` advisory** (moved from `package.json` at V652). SheetJS, and it carries a known high-severity advisory with 'No fix available'. Read this before acting on the audit. Shiller publishes his dataset ONLY as a spreadsheet — no CSV, no plain text, and no FRED series — so reading a .xls is the price of taking CAPE from the originator instead of from a site quoting him. The registry copy is stranded at 0.18.5, which SheetJS calls a registry bug: the fixes for both advisories shipped in 0.19.3 and 0.20.2 and reach only their own CDN. We are NOT on the CDN, because neither machine that builds this repo is allowed out to cdn.sheetjs.com, and a dependency that cannot be resolved into the lockfile is worse than one with a documented advisory. The exposure is what makes that acceptable: this code parses exactly one file, Shiller's own, inside a job whose only secret is a read-only FRED key, and whose worst failure is a data run that commits nothing. It is OPTIONAL so a resolution failure cannot fail `npm ci` and take the site deploy with it — the suite and the unit tests never load it. Revisit if the registry copy moves, or if this ever parses a file we did not choose.

## Procedures

**Refresh.** Six readings refresh themselves. The rest is upkeep: `DATA_COMPILED` (top of the script) is
the one date to edit; `sp500AnnualReturns` gets the open year's year-to-date return; `gdpQuarterlyYoY`
appends after each BEA release (revising the prior few, **never dropping or restarting**);
`cpiYoYHistory` (series.json, CPI) appends the newest month, never drops one, and the app reads it only through
December 1999: `inflationHistory` (refresh-season.ts) joins it to `pceYoYHistory` from January 2000 (`PCE_FROM`), the
Fed's own gauge since its February 2000 report; `deficitHistory` appends a fiscal year only
when FRED carries the closed year, never a projection; the FRED histories in `src/data/fred.json` are
generated by `backfill.yml`, never hand-edited — since V648 that includes the seven Treasury quarterly
histories, which `data.js` only names. **If a primary source is unreachable, leave the figure and
its date and say so — never substitute a secondary.** Fixed and editorial content — every band,
`wheelMeta`, `seasonRules`, `seasonReading`, era names and blurbs, the `*_STOPS`
lists — is never touched by a refresh. **`currentSeason` is computed — never set it.** Productivity growth's figure, quarter and record range are read
from `productivityHistory` (V667), so the Backfill moves the card, the Diagnosis and the past cycles together;
its word follows the two BLS lines its note cites (`productivityWord`, V668): at or above 2.1% (the
1947–2018 average) Above trend, at or above 1.3% (the slowdown-era average) Above the slowdown, below it Below
the slowdown; the captions and the note follow the word.

**Verify.** `npm run check` before every commit; `npm run check:all` is CI, and CI runs every gate in it
(V667: three gates had run only when a session remembered). The suite's six runtime invariants: geometry is
owned by the chart that made it, a reading prints where it is painted, every reach finds something, every
action has an answer, every id is one element, and no data check fired — every page the suite opens is
watched for page errors and console warnings, and one check fails on any of them, because ten data checks
had no listener for two hundred versions (V623) and the listener itself was missing until V667.
**How the suite is written (V667).** It waits on the app, never on a clock: `ready` waits for the app and
the Diagnosis, `settle` for two frames and every running animation; there is no `waitForTimeout` (fixed
sleeps were four fifths of a 265-second run; the suite now takes about 40). A check pins a rule, not a
count: the page loop walks every reading Indicators lists (`NO_HISTORY` names any exception; it is empty
since Industrial output went in V688), cycle counts come from the cycle list, Cycle analysis's counts from its own rows, and a date or
figure that moves with the data is compared, never written in. What is Keren's decision stays pinned exactly
(the tab order, the categories, the card order, the tokens, the verdict words). Static facts belong in the
static gates, not the browser: a removed class or id is hygiene's `GONE`, the chart geometry pins are
hygiene's `PINNED`. The model's rules are tool tests (`test/cycle.test.js` lifts the functions from
model with fixture data, so each window is tested at its edge). **The unit tests (V695, `npm run test:unit`, in
`check`, about 6 s)** import the modules in Node: `test/unit/dom.mjs` boots the whole app once in jsdom from
`page-body.html` with the network refused, so every figure is its literal fallback. They draw every page at four
widths (no NaN, undefined or Infinity; every history chart in `histFrame`), run the model over every cycle on the
real record, and pin the pure functions at their edges. `content.test.mjs` (V697) checks what the pages say: it delivers live documents through the real door and reads
the cards, the policy facts and the Diagnosis back, refuses one carrying markup or a number outside its band, and
opens a past cycle and comes back. The run measures line coverage of `src/js` and fails below 88%. A rule that
needs a browser (layout, focus, clicks) stays in the suite; one that needs only the DOM's text goes here. The words that state a rule are
tested against the rule (each feeling's cut-offs, growth's window). Every note on every reading page (the
history head's and each More details) is read, and none may call a band a "normal range" unless it says it
is not one: a target is never relabelled normal. Proof (V667): of thirteen regressions planted one at a time,
the suite and gate catch all thirteen; the old suite caught one of the audit's ten.
**Every refactor ships with "48 states identical"** (`npm run snap`: every tab and page, their (i) notes, and Cycle history with its data shown; until V656 a selector typo meant no tab panel was captured); it caught three breaks in V630 alone,
none visible. The fetching itself cannot be tested from a sandbox; its proof is the Data workflow's run.

**Publish.** `Artifact action:"publish"` with the artifact `url`, always in place, with a short `label`. If
refused because a newer version is live, read it in full and merge. **One figure, one number binds any
note rewrite**: check every figure against the object that owns it, refresh both or cite neither. Then
write the reasoning in the commit message and the rule, if the change made one, here or in `CLAUDE.md`.

---

# The design system

The token source is `src/styles.css`; a figure here that disagrees with it is the one that is wrong.

## Colour

Seven roles: brand purple (lotus, primary actions, active nav, links, focus); good = teal; critical = red;
the four seasons (dial only); neutrals. Purple only for the lotus and the actionable; green and red only on
market movement, always with a word or arrow. Kickers, labels and names are neutral text. Each hue has
three tones: paint (lines, bands, rings; ≥ 3:1), ink (words; ≥ 4.5:1), wash (paint mixed over surface, ink
on top). **Never text in paint**; a new ink is the same hue darkened and measured. Greys are plum-biased;
hierarchy comes from borders and surface steps, never shadows. **The dark theme is designed, not
inverted** — its own inks, washes and ramps. Every token is read somewhere: `npm run hygiene` fails on one that is not (V668).

Seasons: Winter periwinkle, Autumn a quieter step of Winter's hue, Summer orange, Spring marigold;
declared in `:root` and both dark blocks. `--gold` holds the marigold for what is gold but not a season (the
in-range heat steps, Attention, Gold in the portfolio); `--season-wash` is a season's pastel, one mix for the
info table and the Season Model's bars. No fifth ring colour, no green/red season, no
colour dot before a season name. Ordered categories take one hue in steps, never several (the heat ramp,
the M2 "blood" ramp); a phase is a category and takes season colours; severity stays proportionate.
Validate every three-plus-colour set and prove ramp monotonicity by luminance per step per theme.

## Type

Cormorant Garamond italic for the season word, cycle names, reading heads and quotes — never below 20px,
never upright for a title. Public Sans for everything else. IBM Plex Mono for figures only, never a
word-label or prose; a value that is a phrase takes the text face. **Every `font-size` is a token** (V662, from the
Lovable DSM's type scale): `--type-label` 11 · `--type-meta` 12.5 · `--type-interface` 14 · `--type-reading` 15 ·
`--type-row` 17 · `--type-section` 20 · `--type-reading-head` 26 · `--type-page-title` 30. The DSM's Type page names
seven of its nine steps; 12.5 and 17 are the two it leaves unnamed (12.5 is its own meta line; 17 is the list row).
Its 40 display step has no token, because nothing on screen uses it (0.8.10). Change a size in the tokens, never in a rule. The only literals left are the dial's badge,
drawn in the dial's own SVG units, and sizes in `em` or `calc(var(--dial))`. When V662 moved every size onto the
scale, each went to the nearest step and a size exactly between two took the smaller.
600 is interface bold, 700 figures and pills, 400 body. Before using a weight, check it is in the font
request.

## Spacing

`--pad` inside a container, `--gap` between containers, `--gap-top` for the page frame. A new container
takes `margin-top:var(--gap)`, never its own figure; per-tab or per-breakpoint spacing overrides are a
bug. `--radius` and `--radius-inner` (a segment in a padded track) are the only two; `50%` only where the
shape is a circle. Marks and type keep their own figures — a bar cap, a label gap — as shapes, not spacing.

## Chart language

Every chart takes the same furniture from `chartAxes()` and `vGrid()`. Horizontal grid lines are solid and
mean a value; verticals are dashed and mean a calendar place; references are dotted when fixed (2%
target, zero) and dashed when computed (a cycle average). Grid uses `--grid`, never `--border` at reduced
opacity. One axis per chart, never dual; columns stand on zero; one reference line; text in a plot takes
a halo. Up and down are always teal `--ovulate` and red `--bleed-mid`. Dots on true readings are hollow;
draw an SVG at the width it will occupy, and if a viewBox is stretched, dots are zero-length paths with
non-scaling strokes. Hover: dotted crosshair, one tooltip per panel, plot dims to 0.38. Legends: hollow
dots, labels in the reader's words; one series needs none. **Marks differ by shape, not colour.**

Miniatures: peek charts draw a 1.75 line in the card's state colour with the wash running to the
reference line, not the frame; sparklines take the row's state colour and hide when the drawer opens.
`.ci-mini` previews are a grey picture with one plum reading in it — the newest mark at `--accent-ink`,
never a state colour.

## Icons and marks

Marks are drawn in the Lovable DSM repo first and ported path for path. Interface icons are inline SVG in
`currentColor`, round caps; no icon font, no emoji. **A mark names the subject, the word the verdict**:
one neutral ink, never a state colour, except the 48px row chips whose wash is the severity. Prove a new
mark at 13, 15, 20, 27 and 42px together at real size.

## Surfaces and controls

Page order on every inner page: history · Insights, with More details inside it (no blood test since V661). Card:
`--surface`, 1px `--border`, `--radius`, no shadow. A list is one container with hairlines between rows.
Hover moves `--border` to `--border-strong`, never brand. Range controls offer only the ranges the data
answers, nothing below two stops. Every (i) opens the shared modal — a bottom
sheet on phones with a 44px round X. Deeper pages push in from the right and arrive decelerating (~340ms),
leave accelerating (~260ms); `prefers-reduced-motion` gets a plain fade. Nothing on a phone scrolls
sideways. **Say a thing once**: a name once per screen, one of each reading per page, no figure restated
by its own picture, by cycle = the average never the total.

## Wording

Hormones = the policy rate; Pressure = the Treasury level, never "Yield curve"; Volatility (the VIX, V663), never "Fear" or "Fear & Greed"
or "Sentiment"; Households, not "Debt service"; Valuations, plural; Growth, not "GDP growth"; Debt is the
group of Margin debt, Federal debt, Federal interest payments, Federal budget, Households and Delinquency rate (0.9.0; Stress from V688, Economic power before); Federal budget, not "deficit rate". Peak year, never "the cycle's peak". Bull year / Bear
year. warm · 1–3%, never "in range". expanding / contracting / steady, never "positive growth" or "rising"
on screen. Seasons as *Spring — Deflation*; "Late" never used. Year over year is written YoY. The section
carrying a sentence about the figures above it is Insights. Nothing here is investment advice.

## Accessibility

Text 4.5:1, graphics 3:1, both themes — measured (`npm run a11y`: light at phone width, dark at desktop width,
since 1.2.1, because contrast follows the theme and layout the width; zero violations, and the suite reads
computed values, not the stylesheet). Touch targets 44px, small marks meeting it with an invisible disc.
Every hover has a tap equivalent. Nothing colour-alone. Order the DOM, not the paint. Keep an `aria-label`
where a heading is lost.

**One keyboard layer stack.** Every closable layer registers with `layer(rank, {open, close, box})`
(`dom.js`), and one document `keydown` reads them in rank order: the head ⋯ menu (0), the (i)
modal (1), an open cycle picker (0, closing only the picker and focusing its button, V699), a menu sheet (2), the menu (3), a reading page (4). Escape closes only the topmost open one; Tab
loops inside the topmost one that has a `box` (the modal, a sheet, the menu). A new overlay registers here,
never with its own Escape listener, or one key press closes two layers. Focus follows the layer: a dialog
focuses its first control and gives focus back to its opener (the (i) opened from a head menu falls back to
that head's ⋯); a page focuses the top bar's title (`tabindex=-1`) and its back gives focus to the card that
opened it. The head ⋯ menu is a disclosure of plain buttons, not an ARIA menu: it promises no arrow keys, so it
claims no `role="menu"`; opening it, or changing level, focuses its first row. The tab bar and the Appearance
choices share `rovingKeys` (arrows, Home/End, one tab stop). The dial's hub steps through quarters with
Left/Right/Home/End through the same `goTo` the pointer uses, and says the parked quarter in a polite live
region. The (i) backdrop is `visibility:hidden` once its fade ends (the delay sits only on the closing
transition, so opening is instant), which takes it out of the tab order and the accessibility tree. One global
`prefers-reduced-motion` rule makes every transition and animation effectively instant (0.01ms, so
`transitionend` and `getAnimations()` still settle). Every history chart is a focusable group whose
Left/Right/Home/End step the same readout the pointer drives (`histKeysWire`), said in a polite live region. The live region and the label are re-made on every redraw (V699), and Horizon is a history chart like the rest: it publishes its geometry and is wired by `attachHistory`, with no hover code of its own. The window controls are tablists with one tab stop each (`tabSegs`; arrows step and select, Home/End); the cycle picker opens with Down and its options step with Up/Down. A redraw puts focus back on the control that caused it (`controlKeys`).
The (i) dialog is named by its first heading, and its headings take levels 2 and 3 (`aria-level`), so the
same note can sit in a page under an `h4` and still read in order inside the dialog (V701). The browser's and
the phone's Back step out of reading pages one at a time (`backPush` on open, `popstate` closes); the app's own
back arrow calls `history.back()` so both routes run through one handler, and closing to the cycle unwinds the
pages it pushed (`backClear`), so Back never leaves the app from a page (V701).
The service worker never reloads a page someone is looking at: an update swaps in when the tab is hidden and no
text field holds a draft, and never on a first visit (V694).

---

# Mechanics that have cost hours

- **CSS specificity ties** — `.a .b` and `.b.c` both (0,2,0); later wins silently. Move the rule, never
  add weight; find it by measuring. A class cannot out-weigh an inline style; `[hidden]{display:none}`
  exists because a class `display` rule out-weighs `hidden`.
- **A hidden element has no width.** Renderers draw on open at measured width and redraw on resize.
  Vertical margins do nothing on an inline box. Changing a formatting context silently resizes children.
- **An SVG path with no declared fill fills black**; grep chart class names in the JS before deleting CSS.
  `importNode` copies, so drain a parsed fragment by taking the child list once.
- **An average must be assigned before the geometry citing it**, or the reference captures `undefined`.
- **`\uXXXX` in a comment is invisible in the deliverable** (comments are stripped) and makes a search
  miss what the eye sees; the build refuses one. Real characters in page text; escapes in
  strings.
- **Playwright headless hides scrollbars**; `100vw` doesn't.
- **The service-worker registration is a second `<script>` block, guarded three ways** (not framed,
  https-or-localhost, feature present), because the same file runs in the Artifact's sandboxed iframe
  where registering throws. The suite parses each block separately; a greedy match spans both.
- **The Lovable DSM** (editor `https://lovable.dev/projects/342f83b9-eb2b-4ba2-96e9-7627a1f9cdc1`) holds
  the tokens and marks as a design lab; its project knowledge is a pointer to this file, never a copy.
