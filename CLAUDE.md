# Gyneconomy

A reading companion to Keren's book *Mrs. Market*, which reads the economy as a body with
seasons. **`index.html` is the whole app** — one self-contained file, no build step, no
bundler, no framework. It ships as a Claude Artifact at
`https://claude.ai/artifact/2xTPnvFGpfjNxPnjqHVEZF`.

Keren owns every design and editorial decision here. The code comments carry her voice on
purpose: **a comment that names a Version and quotes her is a decision, not a note.** Don't
overrule one; if it seems wrong, say so and ask.

## Read this before changing anything

`docs/WORKING-DOC.md` is the working document — the app, the design system and the mechanics,
in one place, roughly 19,000 words. **Read the part that covers what you are touching before
you touch it.** It is not optional reading and it is not a summary of the code; it records why
things are the way they are, including several decisions that look like bugs and are not.

`docs/ARCHIVE.md` is the version history and the retired ideas. Read it when you want to know
whether something was already tried.

**`docs/MAP.md` is how you navigate `index.html` without reading it.** The file is 12,708 lines and
about 297,000 tokens, so you cannot hold it in context — the map gives you the five regions, every
section, every top-level function and var, the IIFEs, and the registries that route behaviour. Each
entry carries a **grep anchor**; line numbers in it are orientation only and go stale on every
insertion. Generated, never hand-edited: `npm run map` after a structural change, `npm run map:check`
to see whether it is current.

## The four things that are never negotiable

1. **No email address may appear in the markup.** Keren's is assembled at send time inside the
   Contact handler, from parts, and nowhere else. `npm run email` must pass before every publish
   — it greps for ANY address, not one particular one. Anything else: stop.
2. **Never `force` a publish** over a newer version without Keren saying so for that specific
   publish. Read the newer version, merge onto it, publish again.
3. **Never invent a number, a source or a band.** Every figure cites a primary source. A range
   nobody set is not a range — say so and ask.
4. **Don't publish while the nightly refresh may be running** (22:30 UTC). A stale-version
   refusal means it beat you; merge onto its version.
5. **This repo's `index.html` is NOT the live app — the published artifact is.** A scheduled task
   refreshes the artifact's figures nightly and cannot write to this repo, so the file you cloned
   goes stale by a day every day. **Read the live version first** (`Artifact action:"read"` on the
   artifact url), edit THAT, publish it, and commit the result back here. Editing the repo's copy
   and publishing it silently reverts every nightly refresh since the last commit. This is the
   easiest serious mistake to make in this project. `docs/WORKING-DOC.md` → "Which copy is
   canonical" has the whole picture.

## The three governing rules

- **The history component is ONE component.** A change to one history page is a change to all
  eleven. A page that cannot take it is a finding to report, not a page to skip.
- **Band provenance.** Every normal range on screen is either sourced or explicitly Keren's
  call, and the (i) says which. A target is never relabelled "normal".
- **One figure, one number.** A figure is computed in one place and read everywhere else. Two
  places computing the same number will drift, and have.

## Commands

```sh
npm i && npm run setup   # once — npm i alone does NOT fetch the browser
npm test                 # the suite: 50 checks, exit 0 or 1
npm run test:full        # adds the class-coverage walk (2–4 min)
npm run css              # stylesheet rule count + last selector
npm run email            # must print ok
npm run map              # regenerate docs/MAP.md after a structural change
npm run map:check        # is the map current?
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

## How to edit `index.html`

Never hand-edit a large region, and never re-type a region from tool output. Copy
`tools/build-template.py`, express each edit as an asserted replacement, and run it: the file is
written once at the end, so a failed assertion means nothing was written. For multi-line
deletions use line-index surgery applied **bottom-up**. `docs/WORKING-DOC.md` has the escaping
traps, which are real and have cost hours.

## The step registry (V531)

The script used to be 28 anonymous IIFEs running in source order. Each now has a **name, a measured
kind, and an entry in `GYN`**, and still runs at exactly the same point — module vars are assigned
between them, so the order is load-bearing and the calls did not move.

Kinds are counted from each body, never asserted: **check** (6, data assertions, no DOM) · **derive**
(3, module state) · **wire** (1, listeners only, must run once) · **render** (8, DOM only) · **mixed**
(9, listeners AND DOM — cannot be re-run until split) · **live** (1, the database refresher).

`GYN.render()` re-runs only what is safe to repeat today. **It is not yet idempotent, and the reason
is known and measured**: rendering twice grows the DOM by about 22KB because `expandBtn()` and
`infoIcon()` APPEND to `detailTexts` and return a fresh index, so `data-detail-idx` climbs on every
pass. Until the detail store takes a **stable key per call site** instead of an append-only index,
no render step can repeat cleanly. That is the next change, and everything else in Stage B waits on
it. `deriveUninversionDetail` has the same shape of bug — it appends to `allSources` — and is
excluded from `repeatable()` until fixed.

`window.__GYN` is a **test seam, not an API**. Nothing in the app may depend on it.

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
- **The Claude Artifact**, still published by hand and by the nightly refresh. Unchanged.

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

## Repo map

| Path | What |
|---|---|
| `index.html` | the app |
| `sources.html` | the published citation page — **generated, never hand-edited** |
| `docs/WORKING-DOC.md` | the working document: app, design system, mechanics |
| `docs/ARCHIVE.md` | version history and retired ideas |
| `test/gyn-test.js`, `test/baseline.json` | the suite |
| `docs/MAP.md` | generated navigation index for `index.html` — read it before grepping |
| `tools/` | the map generator, the snapshot harness, the build template, the stylesheet check |
| `manifest.webmanifest`, `sw.js` | the PWA: installable, offline |
| `.github/workflows/ci.yml` | test on every push; deploy to Pages only if the suite passes |
| `assets/` | app icon artwork (not referenced by the page) |

Versions are **commits now**. The old `curve-and-cycle-vNNN.html` chain is retired — don't
recreate it. Keep referring to versions by their number in commit messages and in
`docs/ARCHIVE.md`, since every rule in the docs is anchored to one.
