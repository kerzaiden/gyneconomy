# Gyneconomy

A reading companion to Keren's book *Mrs. Market*, which reads the economy as a body with
seasons. **`index.html` is the whole app** — one self-contained file, no bundler, no framework.
Since V538 it is BUILT from `src/` by `npm run build`, which is `parts.join("\n")` and nothing
else, so the shipped file is still one file with no module system in it. It ships as a Claude
Artifact at
`https://claude.ai/artifact/2xTPnvFGpfjNxPnjqHVEZF`.

Keren owns every design and editorial decision here. The code comments carry her voice on
purpose: **a comment that names a Version and quotes her is a decision, not a note.** Don't
overrule one; if it seems wrong, say so and ask.

## Read this before changing anything

`docs/ARCHITECTURE.md` is the working document — the app, the design system and the mechanics,
in one place, roughly 19,000 words. **Read the part that covers what you are touching before
you touch it.** It is not optional reading and it is not a summary of the code; it records why
things are the way they are, including several decisions that look like bugs and are not.

`docs/ARCHIVE.md` is the version history and the retired ideas.

`docs/task.md` is what the weekly refresh task does. It is the task's ONLY copy of its instructions —
the task's prompt just fetches that URL — so change the task by editing that file and pushing. Read it when you want to know
whether something was already tried.

**`docs/MAP.md` is how you navigate `index.html` without reading it.** The file is about 13,100 lines
and 297,000 tokens, so you cannot hold it in context — the map gives you the five regions, every
section, every top-level function and var, the IIFEs, and the registries that route behaviour. Each
entry carries a **grep anchor**; line numbers in it are orientation only and go stale on every
insertion. Generated, never hand-edited: `npm run map` after a structural change, `npm run map:check`
to see whether it is current.

## The five things that are never negotiable

1. **No email address may appear in the markup.** Keren's is assembled at send time inside the
   Contact handler, from parts, and nowhere else. `npm run email` must pass before every publish
   — it greps for ANY address, not one particular one. Anything else: stop.
2. **Never `force` a publish** over a newer version without Keren saying so for that specific
   publish. Read the newer version, merge onto it, publish again.
3. **Never invent a number, a source or a band.** Every figure cites a primary source. A range
   nobody set is not a range — say so and ask.
4. **Never pass `capabilities` on a republish.** Omitting it carries the artifact's stored `db`
   grant forward. Passing anything else REVOKES it, and every live figure on the published page
   dies with it — silently, because the hard-coded fallbacks still render.
5. **Read the live artifact before publishing over it** (`Artifact action:"read"` on the artifact
   url) and diff it against this repo's `index.html`. Since V540 the scheduled task writes the
   artifact's DATABASE and no longer republishes its HTML, so the two should be identical and this
   repo is the canonical source of the page — but a publish from anywhere else would break that,
   and the diff is the only thing that would tell you. A difference is a merge, not a `force`.
   `docs/ARCHITECTURE.md` → "Which copy is canonical" has the whole picture.

## The three governing rules

- **The history component is ONE component.** A change to one history page is a change to all
  eleven. A page that cannot take it is a finding to report, not a page to skip.
- **Band provenance.** Every normal range on screen is either sourced or explicitly Keren's
  call, and the (i) says which. A target is never relabelled "normal".
- **One figure, one number.** A figure is computed in one place and read everywhere else. Two
  places computing the same number will drift, and have.

## Pushing

The remote is often ahead of you: the Data workflow commits fresh figures to
`data/live.json` on weekdays at 22:40 UTC. So **`git pull --rebase` before pushing** —
your commits replay on top of the data commits instead of leaving a merge bubble in
the history. Nothing conflicts; the bot only ever touches that one file.

## Which assistant, and when

Two work on this project and they are not interchangeable. The split is not "code vs design" — it
is **what each one can reach**.

**Only a Claude session with this project attached can:**

- **publish the artifact** and **write its database**. A GitHub Action cannot do either, and a
  terminal has no route to them. Every `Artifact` publish in the history came from one.
- **change the scheduled task** (`trig_01JF1LVovJqVQGCt9HSL6o8r`), which is the only thing that
  carries figures into the published artifact.
- **keep working while nobody is watching** — research, a long audit, anything you start and walk
  away from.

**Claude Code, in a terminal in this folder, is better at:**

- **iterating on `src/`** — no file bridge in the way, so an edit-build-test loop is immediate.
- **chasing a failing suite or a failing workflow**, where the loop is run, read, fix, run again.
- **anything git-shaped**: rebases, bisects, reading history, resolving a conflict.

**Either can do** the docs, the research and the reasoning. Pick by where you already are.

**The handoff is the repo, and that is the whole point of it being one.** Both read this file,
`docs/ARCHITECTURE.md` and `docs/MAP.md`; both run the same `npm` scripts; both commit to the same
branch. Nothing lives in a conversation any more. **So the rule is: finish a piece of work by
committing it**, and whichever assistant you open next starts from where the other stopped. An
uncommitted change is the only thing that does not survive the switch.

**One asymmetry worth remembering.** A terminal session can change `src/` and commit, and the SITE
will deploy — CI does that on every push to `main`. But the **artifact** will not move, because
publishing it needs a session with the `Artifact` tool. So a change made in a terminal reaches the
site by itself and reaches the artifact only when someone asks a project session to publish it.
That is the one way the two targets can silently drift apart.

## Commands

```sh
npm i && npm run setup   # once — npm i alone does NOT fetch the browser
npm test                 # the suite: 60 checks, exit 0 or 1
npm run test:full        # adds the class-coverage walk (2–4 min)
npm run test:tools       # the fetcher's pure parts — no network, no browser
npm run css              # stylesheet rule count + last selector
npm run email            # must print ok
npm run map              # regenerate docs/MAP.md after a structural change
npm run map:check        # is the map current?
npm run snap             # 32-state DOM snapshot, to prove a refactor changed nothing
npm run classify         # measure what each step does, to check the declared kinds
npm run build            # assemble index.html from src/
npm run build:check      # does index.html match src/?
npm run sources          # regenerate sources.html from the app's own Sources screen
npm run a11y             # axe-core across 24 states; a11y:check fails on serious or critical
```

**Both setup steps, always.** `npm i` installs Playwright's library and stops there; `npm run setup`
fetches the Chromium it drives (~130MB, once per machine). In the Anthropic cloud sandbox skip
`setup` — a Chromium is preinstalled and the suite finds it, and `playwright install` is not to be
run there. Anywhere else, or to use a browser you already have, set `GYN_CHROME` to its binary.

`npm test` is the gate. It asserts the spacing tokens and `COL_FILL`/`AXIS` in the source, zero
page errors at two widths in both colour schemes, the head title and `⋯` note on all eleven
history pages, the cycle picker's capital-T `Today`, and eight live-data-cache checks. It is
proved to fail on deliberate breakage. **`--bless` rewrites the baseline: a deliberate act,
never a way to clear a failure.**

A change the suite does not cover needs its own probe as well — and if the claim is worth
keeping, fold the probe into the suite rather than throwing it away. That is how it grew from
42 checks to 50.

## `index.html` is BUILT — edit `src/`, never the output

`index.html` is assembled by `npm run build` from the 17 parts listed in `src/manifest.json`: the
page shell, the stylesheet, and the script in 13 files by layer (refresh/season, live data, data
literals, components, history, charts, forms, model, render core, render pages, dial/cycle,
pages/nav, tabs/menu). The largest is about 1,600 lines.

**The build is `parts.join("\n")` and nothing else.** The script is one IIFE sharing a closure, so
concatenating the pieces back in order reproduces that scope exactly — which is why the split was
provable rather than merely plausible: the first build reproduced the previous `index.html` **byte
for byte**.

**The order in `src/manifest.json` IS the semantics.** Module-level vars are assigned between parts,
so moving one can change behaviour even when nothing inside it changed. Add a part by adding it to
the manifest, in position.

`index.html` stays committed, because it is what gets published and its diff is worth reading.
`npm run build:check` runs in CI, so it cannot drift from `src/` — if someone edits the output
instead of the source, CI says so.

## How to edit a part

Never hand-edit a large region, and never re-type a region from tool output. Copy
`tools/build-template.py`, express each edit as an asserted replacement, and run it: the file is
written once at the end, so a failed assertion means nothing was written. For multi-line
deletions use line-index surgery applied **bottom-up**. `docs/ARCHITECTURE.md` has the escaping
traps, which are real and have cost hours.

## The step registry (V531)

The script used to be 28 anonymous IIFEs running in source order. Each now has a **name, a measured
kind, and an entry in `GYN`**, and still runs at exactly the same point — module vars are assigned
between them, so the order is load-bearing and the calls did not move.

Kinds: **check** (6) · **derive** (3) · **wire** (7, listeners only, must run once) · **render** (6,
repeatable) · **build** (3, one-shot) · **mixed** (2) · **live** (2).

**The kinds are MEASURED by running each step (`npm run classify`), never read off the source.**
Counting DOM writes in a body counts the writes inside its event HANDLERS, which fire later and say
nothing about the step — that mislabelled six pure wirers as mixed and hid that the 1,228-line
`renderPagesAndNav` binds nothing and converges. Patch `addEventListener`, run the step, watch:
listeners bound means run once; DOM settled with no listeners means it may run again.

**A name says what a step BUILT; a kind says whether it may run AGAIN.** `renderCycleDial` draws a
dial on the first pass and only binds handlers on a second, so it is named render and classified
wire. They answer different questions, and renaming to match would lose the first answer.

**`build` is the honest kind (V535), and it was earned by measurement.** `renderSignsList` MOVES the
static markup into the category rows, consuming its own source — the documented "catItem consumes
its source" behaviour. `renderSubjectRows` writes into hosts that `renderSignsList` then moves, so a
second call throws on a host that no longer exists. `renderPsychologyTag` reads a note a later step
fills, so a second call renders MORE than the first. None is sloppy; all three are one-shot by
design, and naming them builders says so rather than implying a fix is pending.

**Exclusions are by KIND, never by name.** A named exception is a note that goes stale; a kind is a
fact about the step.

`detailTexts` is **content-addressed** (V532): `detailSlot(html)` keys a slot by the note's own
HTML, so identical content reuses its slot and the array grows with DISTINCT notes rather than with
render count. This fixed a real leak — the array had been growing as a reader browsed — and removed
the climbing `data-detail-idx`. `deriveUninversionDetail` still appends to `allSources` and stays
out of `repeatable()` until that is keyed too.

**Measured, per step (V532):** of the 14 repeatable steps, **10 are already idempotent**. The four
that are not:

| Step | Re-running it |
|---|---|
| `renderSignsList` | grows the DOM ~22KB — essentially the whole delta, several append-not-replace sites |
| `renderHorizonPage` | grows 38 bytes |
| `renderPsychologyTag` | same length, different content |
| `renderSubjectRows` | **throws** — its hosts no longer exist |

That last one is architectural, not sloppy. `renderSignsList` MOVES the DOM `renderSubjectRows`
built into the category sheets — the documented "catItem consumes its source" behaviour — so its
original hosts are gone by design. Re-running it would require rebuilding the static skeleton first.

**So full re-rendering is the wrong target.** The elements that hold the printed figures
(`#subj-value-*`) survive the move, which is why `repaintPolicy()` has always worked. `GYN.render()`
stays a diagnostic for finding non-idempotency, not a production path.

## The repaint layer (V533)

Live data arriving mid-session is applied by **`applyLive(name, value)`**, one document at a time:
it assigns the module var, **re-derives whatever was computed from it at load**, then runs that
document's repaints. The re-derivation is the subtle part — `valuation.tag` and the Volume/Pulse
tags are computed once at load, so a new object without them would print a fresh number beside a
stale verdict, which is precisely the drift ONE FIGURE / ONE NUMBER forbids. The derive steps are
reused by name, never duplicated.

`REPAINT` maps each document to its repaints. **An empty list is a statement, not an omission**:
the VIX row and the Desire/Volume/Pulse rows live on inner pages that redraw on open from these same
vars, so they need nothing. A figure needs a repaint only if it is visible WITHOUT opening a page.

**Repaints edit in place — a text node and a tag, never the row's `innerHTML`.** `catItem`
normalises `.unit` to `.ci-unit` when it moves a row, so rebuilding that markup would silently undo
the normalisation and the row would return at the wrong type size.

The refresher now applies every document that actually CHANGED, not only the policy rate, comparing
against the cache the page rendered from. `LIVE_CACHE` is swapped in first so `LIVE()` does the
shape-decoding — one decoder, not two.

Proved in the suite, mid-session and with no reload: the figure moves 36 → 82, and the DERIVED mood
class moves `serious-ink` → `critical-ink`; the yield pair moves 5.18/4.24 → 4.05/5.55; and null,
a wrong shape and an unknown document are each refused. `window.__GYN.applyLive` is the test seam.

`window.__GYN` is a **test seam, not an API**. Nothing in the app may depend on it.

**The invariant that keeps this honest (V535):** the suite asserts that every step `GYN.render()`
runs **converges** — run it to settle, run it again, nothing changes — and that `GYN.render()` as a
whole leaves the DOM untouched. Convergence rather than first-run equality, because a width-aware
chart re-measures its host and legitimately redraws once at the new width; a step that APPENDS keeps
growing and still fails. The suite also pins the kind counts, so a step changing character is a
build failure rather than a quiet rot.

**Adding a source is idempotent (V535).** Eight places concatenated onto `allSources`, six inside
render steps, so a re-render listed the same citation twice, three times, four. `addSources()`
de-duplicates by URL — which is the correct rule anyway, since several pages legitimately cite the
same series — and keeps first-appearance order, because the Sources screen groups by it.

**Proving a refactor changed nothing:** `npm run snap` captures 32 states (two viewports × home,
four tabs, eleven pages), normalised for dates and generated ids, and
`npm run snap:diff a.json b.json --diff` compares them. It is deterministic — two captures of one
file are identical — so a difference means a real difference. V531 was proved this way: 32 of 32
identical against V530.

## Hosting (V530)

The app is becoming a real site, not only an Artifact. Both targets are served from the **same
`index.html`** — there is no host-specific build, and there must not be one.

- **GitHub Pages**, deployed by `.github/workflows/ci.yml` on every push to `main`. The `deploy`
  job **needs** `test`, so a commit that fails the suite never reaches the site. The workflow
  assembles a `_site/` of only what a reader needs: `index.html`, `sources.html`,
  `manifest.webmanifest`, `sw.js` and the icons. Docs, tests and tooling stay in the repo and off
  the web.
- **The Claude Artifact**, published by hand from this repo. Its figures arrive separately, from its own database — see below — so a data refresh is not a republish.

**Installable.** `manifest.webmanifest` plus `sw.js` make it a PWA: standalone display, the lotus
icon, and it works offline. The service worker is **network-first for HTML and cache-first for
everything else**, and that asymmetry is deliberate — the figures are baked into `index.html`, so a
cached page is a stale economic reading, while an icon never goes stale. Bump `VERSION` in `sw.js`
on any release that changes the shell.

**The registration is a second `<script>` block, outside the app's IIFE, and guarded three ways**
(not framed, https-or-localhost, feature present) because the same file runs inside the Artifact's
sandboxed cross-origin iframe, where a service worker cannot register and throws if you try. It must
stay silent there. Anything added to that block must keep that property. The suite's parse check
reads every `<script>` block separately for this reason — a greedy match spans both and chokes on
the boundary.

## The data pipeline (V534)

**Two sources, one decoder, one repaint layer.** On the hosted site the figures arrive as
`data/live.json`, fetched same-origin; in the Artifact they arrive from the database. Both hand
their documents to `applyLive`, and `LIVE()` decodes the shapes for both. `fetchSiteData()` runs
only where the file can exist — not framed, and over http(s) — so it is inert in the Artifact and
on a `file://` open.

`tools/fetch-live.js`, run by `.github/workflows/data.yml` on weekdays at 22:40 UTC — after the New York
close, so the day's curve and VIX are posted — fetches:

| Document | Source | Key |
|---|---|---|
| `yieldCurve` | Treasury daily par yield curve | none |
| `fedFunds` | FRED `DFEDTARU` / `DFEDTARL` | `FRED_API_KEY` |
| `vixClose` | FRED `VIXCLS` | `FRED_API_KEY` |
| `hyOasNow` | FRED `BAMLH0A0HYM2` | `FRED_API_KEY` |
| `vix3mClose` | FRED `VXVCLS` (Cboe 3-month VIX) | `FRED_API_KEY` |
| `capeValue` | Shiller's own spreadsheet, `shillerdata.com` | none |

**CAPE comes from the originator, not from a site quoting him (V541).** Shiller publishes the series
as an `.xls` for exactly this purpose, so the fetcher scrapes the download link off the page, parses
the sheet, **finds the header row by READING it rather than by column index**, and takes the last row
that carries a CAPE value. Two traps, both handled: Shiller's dates are `YYYY.MM` with a one-digit
month, so `.1` is **October, not January**; and the sheet's column order has moved before.

**CNN's Fear & Greed is NOT fetched, and two sources have now said so themselves (V543).** V542 read
it from the endpoint CNN's own chart calls; the first run from a GitHub runner got **HTTP 418**, their
edge refusing an automated client. The only way past that is to send a browser's user-agent and
pretend not to be a script, which is evading a block rather than reading something published, so the
fetcher was removed. **AAII's sentiment survey was then investigated as a replacement and is also out,
by its own terms** — the workbook's Terms of Service sheet prohibits "automated downloading (bots,
scrapers, APIs)" without a commercial licence, and prohibits integration into commercial products
besides. The parser was written and proved against the real file *before* those terms were read; it
was not shipped, and that order is the lesson: **read the terms first.**

The figure stays with the weekly task, which reads a news report QUOTING CNN's score and band word —
journalism citing an index, not an automated fetch. **A replacement is an open question**, and the
leading candidate is a VIX term-structure ratio (`VIXCLS ÷ VXVCLS`), which needs no new source, no new
permission and no new failure mode, but does need the 0–100 gauge redrawn.

**A known gap, recorded rather than sat on.** Keren has confirmed the app is commercial — it
accompanies a book for sale. Treasury, BLS and FRED's own series are straightforwardly fine. The
EXCHANGE-sourced series are the ones nobody has checked: FRED shows Cboe's VIX under "Reprinted with
permission", which is not a public-domain notice. This is pre-existing and unchanged by anything
recent; it is written down so the next person does not assume it was settled.

**Never invent a number and never derive a band.** Both fetchers refuse rather than guess: an
unrecognised CNN rating, a missing field, a value outside its band, an unparsable date — each leaves
the document out and the committed value standing. `npm run test:tools` pins those refusals.

**A failure leaves the previous value standing.** A document that cannot be fetched, or whose value
falls outside its sanity band, is left OUT of the file and the last committed one stands. The bands
are wide on purpose — they catch a decimal slip or an error page, not a market that moved. The run
records what it skipped in `_meta.failed`.

**The data is committed, not stored.** Every refresh is a diff you can read, blame or revert, which
is why Pages and Actions were chosen over a platform that would hide the same figures in a
key-value store. A run where only the timestamp moved commits nothing, or the history stops being
an audit trail. And because the commit lands on `main`, `ci.yml` runs: **data cannot reach the site
without passing the suite.**

`vixClose` and `hyOasNow` are published as bare scalars rather than whole objects, because they are
single readings inside objects the app owns — the bands, notes and words around them are editorial
and belong in `index.html`, not in a fetcher that would drift from them. `applyLive` places them.

## Accessibility (V539)

**`npm run a11y` — axe-core across 24 states**: two viewports, both colour schemes, four tabs, an
inner page, an open modal and the open menu. `a11y:check` runs in CI and fails on serious or
critical. **It reports zero violations**, which is a measured claim rather than a design intention;
before V539 nothing had ever been tested.

What it found and what changed: `<html>` had no `lang`, so a screen reader had no pronunciation to
pick. Two labels failed the 4.5:1 floor this design system sets for itself — `.cycsel-yr` at 4.48
light and 4.19 dark, and `.tp-v em` in dark — both because `--text-muted` is measured against
`--surface` and both sit on a control's own grey ground; both took `--text-secondary`, which keeps
them quieter than the text beside them. The page had no landmarks, so 96 nodes sat outside one: the
top bar is a `<header>` now, the tab bar a `<nav class="tabnav">`, and the tab panels a `<main>`.
And the heading levels skipped — h1 to h4 in three places — so the section headings are h2, the
history card head h2 and the panel row name h3.

**Heading levels are semantic, and the styles are keyed on classes, so a level can change without
anything moving.** Verified: pixel-identical screenshots at 414 light, 414 dark and 1280 light.

## Repo map

| Path | What |
|---|---|
| `src/` | the app's source — 17 parts, listed in `src/manifest.json` |
| `index.html` | the app, **built** from `src/` by `npm run build` |
| `sources.html` | the published citation page — **generated, never hand-edited** |
| `docs/ARCHITECTURE.md` | the working document: app, design system, mechanics |
| `docs/ARCHIVE.md` | version history and retired ideas |
| `test/gyn-test.js`, `test/baseline.json` | the suite |
| `docs/MAP.md` | generated navigation index for `index.html` — read it before grepping |
| `tools/` | the build, the sources and map generators, the snapshot harness, the step classifier, the stylesheet check |
| `manifest.webmanifest`, `sw.js` | the PWA: installable, offline |
| `data/live.json` | the fetched figures — generated, committed by the Data workflow, never hand-edited |
| `tools/fetch-live.js` | the fetcher: primary sources, sanity bands, silence on failure |
| `.github/workflows/ci.yml` | test on every push; deploy to Pages only if the suite passes |
| `assets/` | app icon artwork (not referenced by the page) |

Versions are **commits now**. The old `curve-and-cycle-vNNN.html` chain is retired — don't
recreate it. Keep referring to versions by their number in commit messages and in
`docs/ARCHIVE.md`, since every rule in the docs is anchored to one.
