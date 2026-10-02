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
in `js/02-live.js` — one row per reading: kind, band, where it lands, what repaints. The mechanism is
described under "How the live layer works" below; the decisions are these:

- **The literal in the file is the floor, not a duplicate.** It renders first; the database and the
  cache render over it. Most loads (a local file, a test, a viewer without the grant, a first visit)
  render the literal. Never block first paint on a permission prompt.
- **`X = LIVE("X", X);` sits immediately after each declaration.** That placement is the mechanism; a
  line moved below a consumer silently stops working.
- **An object document merges over the literal (V544).** The pipeline publishes `fedFunds` as
  `{lo, hi, asOf}`; the file's object also carries the FOMC date, vote and next meeting, which no fetcher
  knows. Replacing dropped all three.
- **A number outside its band is refused, never clamped.** A `set` that cannot place its value throws,
  and a throw is a refusal.
- **Repaints go through the doors**, every `[data-open="<sheet>"]`, never by element id (V619): a reading
  is printed on more than one door and painting one left the other stale with no visible symptom.
- **A cached figure contradicting a load-time assertion warns**, and the suite turns the warning into a
  failing check. That is the design working.

Six of the nine rows have a writer today; see Open questions.

### How the live layer works

Moved here from the code comments of `js/02-live.js` at V650, when the source lost its comments. Keren's
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
Do not re-render. The category builder MOVES the subject rows out of the markup that produced them,
so a renderer cannot be run twice — but the ELEMENTS holding the printed figures survive the move,
so a repaint edits those in place.

Each repaint touches as little as possible: the figure's own text node and its tag, never the row's
innerHTML. That is deliberate. `catItem` normalises `.unit` to `.ci-unit` when it moves a row, so
rebuilding the markup here would quietly undo the normalisation and the row would come back at the
wrong type size.

Everything else needs no repaint: the inner pages draw on open, from these same module vars,
through `sheetRenderers`. A figure only needs a repaint if it is visible WITHOUT opening a page.
```

#### One reading, one paint

```text
A reading is printed on every list that offers a door to its page — the category item in Weather or Mood
(.ci-value, its verdict lifted out into a sibling .ci-word) and the row in Search (.subject-value,
the figure alone) — and `[data-open="<sheet>"]` is what those have in common. Walking the doors is the
only honest way to repaint a reading, and this is the only function that does it. Never paint a reading by
element id: an id reaches exactly one copy and leaves the others stale, and a stale figure looks exactly
like a fresh one, so nothing would show it.
A tag with no `state` has only its words replaced, because the policy row's class carries a meaning the
caller does not own. A reading whose doors print nothing is recorded, and the suite asserts that record
stays empty.
```

#### The roster

Keren, V670: "make the app as consolidated as possible so we won't have to write the same code twice, meaning
dry code and as efficient components as possible." **A reading is declared once, in `ROSTER`** (`js/07b-roster.js`,
one row per reading in card order), and everything that used to name it again reads the row: the category pages
and their groups (`catPicks`), Search's heads and groups, the Diagnosis's systems, the timing chips
and Search's timing rows, the split pages (`splitPages` holds only what a split page adds to its row), the card
dates (`when`), the history heads (`HIST_HEAD`), every page's window, mode and cycle state and its range stops
(`pageState`), the past cycles' series (`hist`, read through `keyed`), and the marks on every door and head.
`CATEGORIES` beside it holds the four categories in source order with `shown`, their place in Search and the
Diagnosis (two orders, both Keren's). A row's fields:

```text
id, name, cat, timing, mark   the page, the name on every door, the category, the timing chip, the glyph
group                         consecutive rows with one group are one group (Valuations, Stress)
door                          how the card is built: peek (a peek card), pair (Pulse and Volume's peek pair),
                              split (a split peek), subject (an authored subject row), row (a sign row)
term                          the bodyTerm of the reading object a sign row or pair is built from
slot                          the authored page whose timing slot and order orderMetricSheets sets (the
                              deficit's since V670)
hk, head, range, cycles, stops   the history key (when it is not the page id), its head's title, its default
                              window, false where it has no Cycles mode, and its window stops
hist, pair, peek              the series as written ({s, k, y0} or a function), read by keyed() into {k, v}
flip, pre, last, eraUnit, rule, ring, pulse, mid   how the past cycles read and draw it (a figure's format
                              is never declared: it is the card's, read by pastFigure)
when, cardUnit, miniSel       the card's date, its unit, the element that is its miniature
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
  paint   what redraws when it moves
  onOpen  true instead of `paint`: its only display is an inner page, which redraws in full on open

`LIVE_NAMES` is the registry's own key list, so the fetchers cannot ask for a name it does not know.
`checkLiveCoverage` asserts every row is complete and that `paint` and `onOpen` are exclusive — a
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

`build` is the honest kind for a step that is one-shot by design. `renderSignsList` runs
`while (sum.firstChild) face.appendChild(...)` — it MOVES the static markup into the category
rows, consuming its own source, which is the documented "catItem consumes its source"
behaviour. `renderSubjectRows` writes into hosts that `renderSignsList` then moves, so calling
it again throws on a host that no longer exists. `renderVolatility` reads a note a later
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

## Who refreshes what

| | Refreshes | How often | Reaches |
|---|---|---|---|
| **Data workflow** (`data.yml`) | six readings from their primary sources into `data/live.json`, then starts the site deploy (V651: a push with the repository's own token starts no workflow by itself) | weekdays 22:40 UTC, after the NY close | the site |
| **Scheduled task** (`docs/task.md`) | nothing of its own — copies that file into the artifact's database, and checks the artifact is on main's version (V654) | weekdays 23:07 UTC, after the Data workflow (V645) | the artifact |
| **A session** | the source | when something changes | both, by building and publishing |
| **Backfill workflow** (`backfill.yml`) | the FRED histories in `js/03b-history-fred.js`, including the quarterly Treasury histories behind Pressure and Horizon (V648) | the 3rd of each month, 23:40 UTC, and on demand | the site, through the deploy it starts; the artifact only when a session republishes it (the run warns) |
| **Tag workflow** (`tag.yml`, V647) | a `v6NN-name` tag for each version commit on `main` that has none | every push to `main` | the repo's history |

**The task is a courier and nothing else (V542).** Each figure is fetched once and validated once, so the
two surfaces cannot disagree about a number. A document missing from the file is the pipeline failing;
the report says so rather than filling the gap. The task exists only because a GitHub Action cannot write
an artifact's database; delete it and the artifact freezes while the site carries on.

**A failure leaves the previous value standing.** The fetcher's bands are wide on purpose: they catch a
decimal slip or an error page, not a market that moved. The data is committed, not stored, so every
refresh is a diff, and a run where only the timestamp moved commits nothing. Because the commit lands on
`main`, data cannot reach the site without passing the suite.

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
fifteen-thousand-line one. So the source is split and the deliverable is assembled by concatenation, and
nothing cleverer, because the script is one IIFE sharing one closure. The first build reproduced the old
file byte for byte, which is what made the split provable; since V548 a comment strip follows the join
(44% of the deliverable was comment), and the proof became `npm run snap`: every DOM state identical (38 since V654, each page's notes included).

---

# The app

## In one page

*Mrs. Market*'s Seasonal Behaviour table as a data product; a Clue-style market-cycle tracker; a companion
to the manuscript, not part of it. Tabs: Cycle · Search · Analysis · Portfolio (Search before Analysis since V665; V657: the Content tab's models moved into
About Gyneconomy, the menu's page formerly "About the book"). Cycle = the dial, then
Browse: Weather (Temperature · Growth · S&P 500) · Circulation (Interest rates · Pressure · Pulse · Volume) ·
Mood (Valuations · Volatility · Desire · Confidence) · Energy (Stress · Unemployment rate · Productivity growth). Named Weather, never
Season; Volatility, never Fear or Sentiment (V663); Households, never Debt service.

Rules that shape the pages:

- **Category sheets are built by MOVING existing cards and rows in** (the V314 rule); pages stay put and
  are found by id. Anything reading a reading's authored markup runs before the categories are built, or
  reads the snapshot `catItem` stashes.
- **Navigation is `NAV` and nothing else** (`NAV.open`, `NAV.panel`, or emit `data-open`). Inner pages are
  pages, not popups; the host moves as live DOM. **Don't invent a second navigation idea.**
- **Home is `grid-area`, never DOM reorder**: the taxonomy is the roster's order (`ROSTER`, see "The roster"),
  read by the category sheets, the past cycles, the Diagnosis and Search.
- **One indicator, one card, one page (V658).** A reading that bundles several indicators shows each as its own
  card (Valuations: Shiller CAPE · Buffett indicator; Stress: Federal debt · Interest payments · Federal
  budget · Households). The split pages are
  built by one builder, `src/js/12a-indicators.js` (the roster row plus its `splitPages` entry, joined by
  `splitSpec` → `mountSplit` → `drawSplit`), on the history component (`divergeChart` hung from the reading's
  sourced line, `histControls`, `histHead`, `histNote`), so a new split is a row and an entry, not a page. The parent keeps its breakdown panel, each part a door to its page.
  **Since V660 a category page carries no group headings** (Keren: "i don't need valuations in the mood page"):
  the cards run as one list. **The group lives in Search instead**: one row named for the group (no figure),
  opening a group page (`#sheet-grp-valuations`, `#sheet-grp-economic-power`) built by the same
  `catSheet` as the category pages. Its cards are the category's own, never copies: the group's
  `.cat-group` element moves into the group page when that page opens (its `sheetRenderers` entry) and back
  to its seat (`.cat-seat`) when the category page opens, so the live repaint, the era mode and the one-card
  rule all still see one element per reading. **A category page wears its colour** (V660, after Apple Health):
  a fixed `::before` wash from `--cat` down to the page, and the top bar turns clear over it.
  The Power score is gone (V660, Keren: "remove the power score"): its card, page, composite and history;
  the three fiscal markers it summed each keep their own page.
- **A parent owns what its children share (V662, Keren: "i want all parent components to have all the properties of
  their children so we don't have to change different pages all the time").** `npm run check` runs `tools/hygiene.js`,
  which fails on: a chart height set outside `histFrame`; a chart margin set outside it (only the mini charts,
  `colPeek` and `meterPeek`, own theirs); a `font-size` that is not a `--type-` token; a style aimed
  at one page by id (make it an option of the component, as `goodAbove` is for Productivity's bars); a branch on a
  reading's name (`ind.bodyTerm === ...`: a reading declares its page in `ind.page` — `bare`, `noHead`, `noMark`,
  `chartFirst`, `deferHighlights`, `peeked`, `chart`, `after`, `seat` — and `signSubject` only reads it; looking a
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
  the color." The card and the Search row were already `--cat`; `catItem` also marks the reading's page with
  its category class, so the page head disc and the history head take `--cat` too. Group rows keep a mark
  of their own (`GROUP_MARK`: Stress the bolt; Valuations its first member's).
  **A group is one card on its category page (V688).** `groupSheet` builds it with `groupCard`: a clone of the
  first member's card renamed to the group, `data-open` the group's page and `data-preview` the member it
  previews, so `paintReading` repaints both doors and `eraCards` reads the past cycle's figure through it. The
  members move onto the group's page (`catSheet`); `catMembers` expands a group card back into its members for
  Search, and the tests enumerate readings as `.cat-item[data-open]:not([data-preview])`. Every card on a
  category page stands the same height: the value never wraps and a long unit ellipses.
  The two Treasury spreads (one view of Pressure) and Households' bill and cushion stay one page each (Keren, V658: they read as one).
  Category cards (`.cat-sheet`) follow Apple Health's spacing: the title in the category colour, the date on the
  right, one large figure with the verdict as a quiet label above it.
- **Search (V657) is every reading, grouped by category** in Keren's order, Weather · Mood · Circulation ·
  Energy, one inset card per category with hairlines between rows. A row is icon · name · today's figure ·
  chevron; the verdict and the date stay on the reading's page. **Membership is read from the category
  pages** (`#sheet-cat-*` items, built from the roster), never listed twice; the heads come from `CATEGORIES`
  in `shown` order. Each heading opens its category page; each row its
  reading's page, and back returns to Search. The timing filter (All · Structural · Leading · Coincident ·
  Lagging, default All) and the search box combine; the box matches a reading's name, its economic term,
  its source line, or a category name. A reading's timing chip opens Search on its timing. **Icons wear
  their category's colour** (`--cat`, from `.cat-weather` etc., the same colours as the Show data grid):
  V509's single purple wash is revised for this list (Keren, V657), because here the colour says the
  category and nothing else.
- **Analysis shows every cycle as one `subjectRow`** (V631, the one door component), expanding in place.
  Don't split it into list + overview.
- **A closed cycle is the Cycle page, not a copy of it (V659).** Opening one from Analysis moves the Cycle
  tab's own live DOM (`#cycle-view`, the dial, and `#today-analysis`, the Diagnosis and the category and
  reading pages) straight into `#calendar-cycle` (`enterEra`), and `leaveEra`, which the tab switch and the
  back arrow both call, puts it back. That container shares the tab panel's stack rule (`.tab-panel,
  #calendar-cycle`: a column at `--gap`) and has no wrapper of its own, so a past cycle stacks exactly like
  the current one (V665: a slot inside it once took the gap away; the suite now compares the two frames). In
  between, `eraShow` rewrites the same category cards for the cycle (`eraCard`: the figure at the cycle's
  last reading, the range over the cycle as the label, the cycle's own mini) and sets every history page's
  cycle picker to it (`pageCycles`, cycles mode; each page's own mode is restored on leaving). Today's cards
  are kept on the element (`__today`) and restored as they were, so the live repaint still finds its first
  text node; the copy is dropped on restore (V670), so it exists only while a cycle is shown and the next cycle
  copies the card as it then stands. The reading pages' panels and insights stay today's: they are the page, and the picker says
  which cycle the chart shows. A reading without history in the cycle shows a dash and says since when it is
  measured. This replaced `renderCycleCats` (V656–V658), a second, flat set of cards that led nowhere
  (Keren, V659: one view to maintain). **Since V660 the cycle's card is built like today's** (Keren:
  "identical in design to the current cycle categories"): the figure is today's first text node with only
  the number replaced (`eraFig` keeps its decimals, sign, prefix and suffix, drops the ≈ of an estimate),
  the unit stays (a roster row's `eraUnit` names a different measure: the effective rate, not the target
  range; a surplus year says surplus), and the mini is today's kind drawn with the cycle's data (`colPeek`
  with the row's `mid`/`rule`, the Volatility ring through `vixPct`, the Pulse trace through `pulsePeek`).
  The label is the range over the cycle, not a verdict: several verdicts are Keren's words for today, not
  bands a past value can be read against. **Every other past figure takes the same format** (V670, Keren: one
  format per reading): the Diagnosis at a close and Show data's notes print through `pastFigure`, which applies
  `eraFig` to today's card (`readDoor`, which reads the card as it stood today even while a cycle is shown) and
  adds the card's unit where the figure carries no % or ×, as today's Diagnosis does. The Federal budget is the
  one reading printed with a word (deficit or surplus), and its rank in the notes is read the same way.
- **Cycle history's "Show data" (V656) marks the years a reading sat where it sits today.** Off, the cycles
  read as before. On, each cycle becomes a track scrolled sideways, where the season strip, the S&P strip,
  the years and one row per reading share one width per year (`YEAR_W`), the same in every cycle, so a dot
  sits under its year. The strips are drawn to scale there (`.cyc-scale` is exempt from `settleStrips`,
  which turns one-quarter runs into dots). The track scrolls from its right end (`direction:rtl`) so the
  latest years and the pinned labels show first. **The mark is V610's rule, per reading and never
  averaged**: a year is marked when any reading taken in it sits within `ALIKE` (5) points of today's place
  in the same record (Keren, V656: an average would hide the CAPE's January 2000). **Every dot can be
  checked** (the V611 Echoes lesson): a row opens the matching reading of each marked year beside today's,
  with both places. No count and no score. Rows without a mark fold into one line; a reading not yet
  measured is named, never drawn. The current year is a ring, not a dot, and years after a cycle's end are
  empty. The choice is remembered per reader (`gyn.cycleData`). This replaced the Rhymes card (V610–V655).
- **Portfolio is empty and says so.** No placeholder figures.
- **Copy density**: fold into what exists; a new section is one kicker, one short visual, detail behind (i).
  No information twice per screen; no card in a card; borders, no shadows; a collapsible row is icon ·
  name · one figure · one tag · chevron. Three equal weights on the Cycle tab: hero, supporting pair,
  rows. Additions join one.

## Data model

**The generated histories** (`js/03b-history-fred.js`, written by the backfill from FRED; never hand-edited):

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
the other. To close a cycle: set `to`, drop `ongoing`, open the next, add its `cycleEndReadings` entry.

**Growth is YoY only** (quarter against the same quarter a year earlier, the OECD/World Bank headline).
BEA's annualized print (−28.0 to +34.9 across 2020) is never carried and never feeds the season model.

**A gap is drawn as a gap.** Oct 2025 has no BLS reading: no column, out of every average; the 30-year
yield's 2005 gap is real. Match by date, never by row offset. FRED's high-yield OAS window rolls three
years, so its record low and high are cited on the meter's scale and **cannot be drawn** — never invent
the missing years, never re-scale the meter to the window.

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
| Interest payments (÷ GDP; "Interest burden" until V660) | 0.63% FY1942 (FRED FYOIGDA188S) – 3.3% FY2026 CBO projection | ≤ 2.0% |
| Deficit rate (÷ GDP) | −2.3% FY2000 surplus – 26.9% FY1943 (FRED FYFSGDA188S); the low end departs the true-extreme rule (real max surplus FY1948 +4.3%), flagged, Keren's to settle | ≤ 3.8% |
| Household debt service | 9.05% 2021 Q1 – 15.85% 2007 Q4; FRED TDSP, begins 2005 Q1, rebuilt 2024 on tradeline data — its 15.85% is not the retired series' 13.2%, never in one sentence | below its own mean, `DSR_MEAN` 12.4% |
| Personal saving rate | 1.8% 2005 Q3 – 24.4% 2020 Q2; BEA via FRED A072RC1Q156SBEA | 4.5–12.2%, 10th–90th pct of 318 quarters |
| Productivity growth (Activity) | −1.7% 1974 – +6.7% 1950, BLS OPHNFB | ≥ 1.3% YoY, BLS's post-2005 slowdown average; "better than the slowdown", never "at trend" |
| VIX (close) | 9.14 Nov 3 2017 – 82.69 Mar 16 2020, Cboe via FRED VIXCLS | the market convention (V663, Keren: "set the rules per convention"), `VIX_CALM` 20 and `VIX_FEAR` 30, cited to Chase and TD in `VIX_CONVENTION`: Calm below 20, Elevated 20–30, Fearful above 30; the chart hangs from 20. Its ring is the reading's place between the record low and high on a log scale (`vixPct`) |
| Buffett Indicator | 32% Q2 1982 – 256% Q2 2026; Fed Z.1 NCBEILQ027S ÷ FRED GDP | ≤ 80%, his 2001 *Fortune* figure |
| Shiller CAPE | 4.78 Dec 1920 – 44.19 Dec 1999 | ≤ 17×, the series' long-run mean 17.42 |
| High-yield OAS | 2.41% Jun 2007 – 21.82% Dec 2008, ICE BofA via FRED BAMLH0A0HYM2 | 3.5–6%, `HY_NORM_LO`/`HY_NORM_HI`, four sources in the (i) |
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
series does not); cited to an outside authority (Desire, CAPE, Buffett); definitional (PMI 50, Horizon's
zero); bracketed around a published estimate; read one-sided against CBO's 50-year averages (a two-sided
band would flag the healthy end); against its own mean (debt service — when a verdict already contains a
threshold, the bar takes that threshold); editorial and Keren's (Temperature). **A band ships with its
provenance in the (i), or it does not ship.**

**Temperature's band is the one target in the app.** The Fed publishes a point, 2% on PCE, no band; the
1–3% edges are Keren's symmetric tolerance around it, read on CPI, which has run 0.39 points higher on
average since 2000. The (i) says both. **Never relabel this band "normal."** Nothing is fetched from the
Fed; the courier checks monthly that the objective is still 2% and, if it changed, notifies rather than
moving anything — only Keren moves the band.

**Pressure has no band, by decision.** There is no published normal range for an interest rate, and the
percentile construction fails here: the 87 quarters held contain a decade of a zero-pinned short end. Keren
was offered three constructions and chose none. **Do not draw one without asking her again.**

**Desire's tag and figure are allowed to disagree** — `High appetite` in green beside `2.73%` in amber.
Only the band's floor is forced into the chart's scale, never the ceiling.

The three fiscal markers are one balance sheet asked three questions — stock, flow, carrying cost. Until
V660 they were also summed into Power (100 − their stress composite); Keren removed it, and
`git show 46e5b1f:src/js/03-data.js` (V659 on `main`) has the last copy. **Mood's fast members (Volatility,
Desire) and slow members (Valuations) are two panels; don't merge them.** Margin debt returns only with the
FINRA monthly series.

## The Diagnosis (V664, under the dial since V665)

Keren: "What I want is a diagnosis. Like a doctor would analyze a patient … based on the app's parameters …
Also, I want to have emotional intelligence in this analysis." Since V665 it is the Cycle page itself: the dial,
then `#diagnosis` under it, in place of the four category cards (Keren: "I want the categories to go away from the
cycle page because we already have it in search and in the diagnosis"), as Clue sets its cycle-phase insights
under its cycle view. In clinical order: the trend card (the emotion in its season, since V681), then each **System** (a category;
its heading is the door to the category page) with its one **Analysis** line (what the readings tell the doctor).
Feeling and season (V684) left in V686; the Mood page tells her story by cycle instead. There are no Symptoms lists since V672 (Keren: the
category page behind each heading already shows every reading).
Since V686 the Diagnosis is two sibling cards inside `#diagnosis` (a flex column with the page gap): the trend
card and a `.dx-sys` card for the systems the dial and the trend card do not already show (`!c.onDial && !c.inTrend`,
so today Circulation and Energy, named in its head); every `.dx-k`
title sits on its own line. The systems card ends, for the open cycle only, on **Across the cycle** (`acrossCycle`):
the Fed funds rate and unemployment from the cycle's first month to today, read through `eraEnds`, the same ends
`eraMove` gives a closed cycle's lines, so the two never disagree; a closed cycle's ends on **Followed**, the S&P 500
a year after the close.
**A closed cycle reads its own diagnosis, at its close** (`renderCycleView` calls `renderDiagnosis(m)`; today and a closed cycle go through the same
`analysisFor`, which takes the closed era or null): the
season and the emotion at the closing month, the Analysis as the movement across the cycle, and what actually
followed a year later. The systems are `CATEGORIES` in `shown` order.

- **The work-up reads, never recomputes.** Every word the Analysis lines use is taken from the card the app already prints for it
  (`readDoor` on `.cat-item[data-open]`). Because it reads every door, every live reading repaints it:
  `applyLive` runs `repaintDiagnosis` after the reading's own painters, so no reading needs to list it (V665:
  it sat on the VIX's list alone, and CAPE, which lands after the VIX, stayed a day behind on every load). A
  past cycle's Diagnosis is its close and is left as it is.
- **One vocabulary** (V686, Keren's "Switch"): the Diagnosis names the Mood page's emotion, the cycle of market
  emotions' stage (see Mood and season below). `diagnoseToday` reads `moodToday`; `diagnoseClose` reads the
  `moodTrack` month at the close. The V664 seven price-and-VIX feelings (`readFeeling`, `marketFacts`, their
  cut-offs, `lastFeeling`'s carrying, the Diagnosis (i)) are retired; the V685 commit is the last copy with them.
- **Her story this cycle** (V686, V688; `cycleStory` in 08-model, `moodCard`, `storyBeats` and `storyText` in
  12-pages-nav): the text of the Mood page's "She's in …" card, for the cycle on screen (`eraOpen`, else
  `currentEra`): the `moodTrack` months inside its years, the first, the highest and lowest `pct`, the last (today's
  `moodToday` for the open cycle), told in month order, with the high or low folded into the opening or closing
  beat when they share a month, and the two emotions with the most months. `eraShow` runs `replaceInsights` on
  entering and leaving a past cycle, so the card follows the cycle. `moodFigures` is the first fact of `moodInfo`.
  It replaced Emotion × Season (a twelve-by-four grid with a slid test), which Keren found uninformative.
- **The record is computed at load, never written down** (`moodTrack`): every month her mood can be read, and the
  S&P 500 twelve months on (`yearAfter`).
- **The S&P 500 a year later** is Shiller's monthly S&P 500 (`sp500MonthlyHistory`, from 1948, through the Backfill from the same
  workbook the CAPE fetcher reads). **Shiller's newest month can be a first-of-month close** ("Sept price is Sept 1st close") until
  his next update; it is what he publishes, so it is what the app reads.
- **No score** (the composite failed out of sample), no forecast: the record is a count of what followed.
- **Mood and season** (V679, V686): The Diagnosis's mood card (`moodDoor`) names today's feeling in today's season
  (its season-share bars went in V686); the Mood page's Insights (`insightMood`) draws the cycle of
  market emotions (V685) from `MOOD_CHART`, the reference chart's own coordinates and colours. `moodAt` in 08-model
  ranks valuations (CAPE and Buffett), the VIX (upside down) and consumer confidence each against its own history to
  that month (`rankIn`, over `rankToDate`) and averages the three; `moodTrack` keeps every month since all three can
  rank, and `moodRead` ranks each against the months before it and takes its change over `MOOD_TURN` months;
  `moodWord` picks the nearest stage by height on the rising (`MOOD_RISING`) or falling (`MOOD_FALLING`) side.
  Optimism is on the chart twice, so both dots light. The mood describes, it does not forecast, so it is not the
  composite that failed out of sample. `repaintDiagnosis` repaints every category's Insights after a live reading
  lands, so the lit stage moves with the VIX.
- **Consumer confidence** (V679) is a row reading like Productivity growth: `confidenceReading` in 03-data, a split
  page against the OECD's 100 line, and its history `confidenceHistory` (the OECD's own SDMX API, dataflow `DSD_STES@DF_CLI`,
  measure `CCICP`, monthly from 1960) through the Backfill. FRED's copy (CSCICP03USM665S) stopped at Jan 2024 when the OECD
  rebuilt its database, so the Backfill reads the OECD directly. Neither is reachable from a cloud session, so the series
  lands by running the Backfill.
- **One feeling, one story** (V681, V689): the Diagnosis is the mood card (`moodDoor`) and the Analysis. The card's
  head is today's feeling in today's season, or "Her story" on a past cycle (a cycle is told whole, never by its
  close); its body is the cycle's `story` from `marketCycles`, and nothing else (the spell line went in V689).
  Categories flagged `inTrend` (Mood) or `onDial` (Weather) are
  left out of the Analysis.
- **Weather from the dial** (V680): the category flag `onDial` marks Weather as the category the dial already reads.
  The hub's season button opens it (`hubSet`'s `cat`) while the dial shows today; a parked quarter or a closed
  cycle keeps its popup (`quarterPopup`), since the Weather page is today's. The Diagnosis's Analysis leaves out
  every `onDial` category. Weather's Insights open with `cycleNowNote` (the note the popup used to open with), then
  the season's `seasonReading` (`seasonCards`), this cycle's years from `sp500Years` (`marketCycleCard`) and the
  barometer. The S&P 500 card is a row reading (`marketReading` in 07-forms) whose series `sp500Years` is the same
  `sp500AnnualReturns` the dial's inner band draws, so card, chart and dial read one number. Its split page names
  calendar years through the page option `at`.

## The season model

Six seasons in cycle order: Summer–Inflation · Autumn–Disinflation · Autumn–Stagflation (key `lateautumn`;
the display name has no "Late") · Winter–Deflation · Spring–Deflation · Spring–Reflation. Two Springs and
two Autumns share names, so **every season is named through `seasonTitle(meta)`, never a bare
`meta.name`**. Actions come from the manuscript's cycle figure (Springs Growing · Summer Ripening · Autumns
Harvest · Winter Seeding); fertility names only where the book has one — don't invent one.

`readSeason(cpi12, gdp8, prevRegime)` computes the season, **never set by hand** (`seasonOverride` exists
and shouldn't be used). Growth = the least-squares slope of the last **six** quarters (Keren ratified six:
four gave 34 regime runs since 1988, six 26, eight 21); a trend turns about nine months after the line, by
design. Temperature = CPI level against the band plus direction from a twelve-month fitted trend.

| Season | Growth | Temperature |
|---|---|---|
| Spring — Deflation | Expansion | Cooling, within or below |
| Spring — Reflation | Expansion | Heating, within or below |
| Summer — Inflation | Expansion | Hot |
| Autumn — Disinflation | Contraction | Cooling, within or above |
| Autumn — Stagflation | Contraction | Heating or steady, within or above |
| Winter — Deflation | Contraction | Cold |

Row order is Keren's. The tie-breaks, all stated in the (i): in expansion, hot is Summer regardless of
direction, otherwise direction alone decides — **never re-add a Goldilocks Zone**. Contraction mirrors it:
cold is Winter outright, otherwise direction alone. **Never redefine stagflation as contraction + hot
regardless of direction** — it flips the Q4 2023 example (CPI 3.32%, hot and falling, reads
Autumn–Disinflation). Within-range stagflation is real (17 quarters since 1990). **Flat growth continues
the prior regime**: never test `growthTrend !== "falling"`. `prevRegime` comes from `seasonTrackAll`,
computed once over the full history, never per cycle.

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
(Keren). One state, `pressureView` ("yield" or "spread", in 08-model beside `spreadPick`), picks what the page
draws: `drawPressure` shows one chart shell (`showPressureView`), draws that view (`drawYlm` or the spread view
`drawSpreadView`, set by `renderHorizonPage`), and writes its Insights into the one `#pressure-insights` box, so
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
with no reading, by Keren's decision.** Desire has a bare range bar and no mode bar.

- **One affordance per subject.** When the chart draws a reading, its note goes in the head's `⋯` menu
  and the row carries no (i). A row that is a door carries the chevron only.
- **Window on the ground, series in the menu.** The bar holds one ruler (which window); a series choice
  lives in the `⋯` menu as radio rows. Which menu is open lives in `headMenuFor`, not the DOM.
- **The trend pill is one handler and one line** (V671). Its click is caught on `#metric-page`, which
  travels to whichever tab opened it, so a page opened from Search or a past cycle toggles exactly like one
  opened from the Cycle tab (until V671 the handler sat on the Cycle panel, and every pill opened from Search
  was dead). Every chart behind a button draws its `<g class="fit">` through `fitLine` (`06-charts.js`),
  over the same window its pill measures; the suite presses every pill and fails on one that draws nothing.
  Under eight points the pill is not a button at all (Keren's "unavailable", V437): the annual series
  (CAPE, Interest payments, Federal budget) reach it inside the current AI Cycle (at most four years, from
  2023) and the Housing Cycle (six, 2003–2008).
- **The top bar is restored from the page's home, not remembered** (V671). Each `PAGE_HOME` entry has a
  `bar()` that returns the title and back action for its tab as it stands now: inside a past cycle the
  Analysis home is the cycle (its name and `eraPageBack`, the way back to the list), so backing out of a
  category page keeps the arrow. It used to restore the bare "Analysis" title, which dropped the arrow.
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
invite the prune that took the bull and bear colours in V662. **A maintained figure that nothing reads is a
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
is "Peak year". Press and hold the year badge to scrub; it stays where it is let go. The hub shows the
season word, the theme, and one link; a past quarter gets prose, **never a data popup of its figures**.

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
being readable. In `drawTemperature`/`drawGrowth` only the marks were rewritten; if a new form is wanted
there, change the marks, not the function.

**The barometer** (Weather's Insights) reads the GAP between total price change and total real growth
over a cycle's closed years — Dot-Com −3.6, Housing +1.5, Big Tech +0.2, Stimulus +3.5. They finish close
over a full cycle as a regularity of the low-inflation era, **never described as arithmetic**. One band,
`GAP_BAND = 1.5`, decides both the word and the run counter.

**The federal budget page** ends at FY2025, the last actual, while the marker above reads CBO's FY2026
projection — the same deliberate gap CAPE's chart has, stated in the caption. A `labPanel` marker is found by
its page id (`labRow`); the day another gets a series, give its roster row a `hist`.

## Editorial slots

`sources.html` is generated by `npm run sources` from the app's own Sources screen; the grouping patterns
live in the app and nowhere else, and **the generator refuses to write if anything lands in "Other"** — the
fix is a pattern in the app, not a bucket in the generator.

Awaiting Keren: the About-the-book paragraph, `seasonReading[season].fromTheBook` (all empty),
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
- **`levelZone`'s 2% lower edge is undefended** (the 4.5% upper edge is); raise it before touching that
  function.
- Whether Spring–Deflation's action is "Growing" is not the manuscript's; it has no Content-tab narrative.
- The other segmented controls (indicators tabs, spread toggle, tab bar) were to be revisited together.
- Stacking panels to compare Temperature and
  Growth; older fixed-viewBox charts should move to render-width drawing when touched.

- **The `xlsx` advisory** (moved from `package.json` at V652). SheetJS, and it carries a known high-severity advisory with 'No fix available'. Read this before acting on the audit. Shiller publishes his dataset ONLY as a spreadsheet — no CSV, no plain text, and no FRED series — so reading a .xls is the price of taking CAPE from the originator instead of from a site quoting him. The registry copy is stranded at 0.18.5, which SheetJS calls a registry bug: the fixes for both advisories shipped in 0.19.3 and 0.20.2 and reach only their own CDN. We are NOT on the CDN, because neither machine that builds this repo is allowed out to cdn.sheetjs.com, and a dependency that cannot be resolved into the lockfile is worse than one with a documented advisory. The exposure is what makes that acceptable: this code parses exactly one file, Shiller's own, inside a job whose only secret is a read-only FRED key, and whose worst failure is a data run that commits nothing. It is OPTIONAL so a resolution failure cannot fail `npm ci` and take the site deploy with it — the suite and the unit tests never load it. Revisit if the registry copy moves, or if this ever parses a file we did not choose.

## Procedures

**Refresh.** Six readings refresh themselves. The rest is upkeep: `DATA_COMPILED` (top of the script) is
the one date to edit; `sp500AnnualReturns` gets the open year's year-to-date return; `gdpQuarterlyYoY`
appends after each BEA release (revising the prior few, **never dropping or restarting**);
`cpiYoYHistory` appends the newest month, never drops one; `deficitHistory` appends a fiscal year only
when FRED carries the closed year, never a projection; the FRED histories in `js/03b-history-fred.js` are
generated by `backfill.yml`, never hand-edited — since V648 that includes the seven Treasury quarterly
histories, which `03-data.js` only names. **If a primary source is unreachable, leave the figure and
its date and say so — never substitute a secondary.** Fixed and editorial content — every band,
`wheelMeta`, `seasonRules`, `seasonReading`, `cycleEndReadings`, era names and blurbs, the `*_STOPS`
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
count: the page loop walks every reading the category pages list (`NO_HISTORY` names any exception; it is empty
since Industrial output went in V688), cycle counts come from the cycle list, Search's counts from its own rows, and a date or
figure that moves with the data is compared, never written in. What is Keren's decision stays pinned exactly
(the tab order, the categories, the card order, the tokens, the verdict words). Static facts belong in the
static gates, not the browser: a removed class or id is hygiene's `GONE`, the chart geometry pins are
hygiene's `PINNED`. The model's rules are tool tests (`test/cycle.test.js` lifts the functions from
08-model with fixture data, so each window is tested at its edge), and the words that state a rule are
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

Seasons: Winter periwinkle, Spring a quieter step of Winter's hue, Summer orange, Autumn a lighter,
yellower Summer; declared in `:root` and both dark blocks. No fifth ring colour, no green/red season, no
colour dot before a season name. Ordered categories take one hue in steps, never several (the heat ramp,
the M2 "blood" ramp); a phase is a category and takes season colours; severity stays proportionate.
Validate every three-plus-colour set and prove ramp monotonicity by luminance per step per theme.

## Type

Cormorant Garamond italic for the season word, cycle names, reading heads and quotes — never below 20px,
never upright for a title. Public Sans for everything else. IBM Plex Mono for figures only, never a
word-label or prose; a value that is a phrase takes the text face. **Every `font-size` is a token** (V662, from the
Lovable DSM's type scale): `--type-label` 11 · `--type-meta` 12.5 · `--type-interface` 14 · `--type-reading` 15 ·
`--type-row` 17 · `--type-section` 20 · `--type-reading-head` 26 · `--type-page-title` 30 · `--type-display` 40. The
DSM's Type page names seven of its nine steps; 12.5 and 17 are the two it leaves unnamed (12.5 is its own meta
line; 17 is the list row). Change a size in the tokens, never in a rule. The only literals left are the dial's badge,
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
or "Sentiment"; Households, not "Debt service"; Valuations, plural; Growth, not "GDP growth"; Stress is the
group of Federal debt, Interest payments, Federal budget and Households (V688; Economic power until then); Federal budget, not "deficit rate". Peak year, never "the cycle's peak". Bull year / Bear
year. warm · 1–3%, never "in range". expanding / contracting / steady, never "positive growth" or "rising"
on screen. Seasons as *Spring — Deflation*; "Late" never used. Year over year is written YoY. The section
carrying a sentence about the figures above it is Insights. Nothing here is investment advice.

## Accessibility

Text 4.5:1, graphics 3:1, both themes — measured (`npm run a11y`, zero violations, and the suite reads
computed values, not the stylesheet). Touch targets 44px, small marks meeting it with an invisible disc.
Every hover has a tap equivalent. Nothing colour-alone. Order the DOM, not the paint. Keep an `aria-label`
where a heading is lost.

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
