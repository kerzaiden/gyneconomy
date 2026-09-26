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

## The four things that are never negotiable

1. **Keren's email must never appear in the markup.** It is assembled at send time inside the
   Contact handler and nowhere else. `grep -c "owner@" index.html` must print `0` before
   every publish. Anything else: stop.
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
npm i                  # once — installs Playwright and its Chromium
npm test               # the suite: 50 checks, exit 0 or 1
npm run test:full      # adds the class-coverage walk (2–4 min)
npm run css            # stylesheet rule count + last selector
grep -c "owner@" index.html    # must be 0
```

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

## Repo map

| Path | What |
|---|---|
| `index.html` | the app |
| `sources.html` | the published citation page — **generated, never hand-edited** |
| `docs/WORKING-DOC.md` | the working document: app, design system, mechanics |
| `docs/ARCHIVE.md` | version history and retired ideas |
| `test/gyn-test.js`, `test/baseline.json` | the suite |
| `tools/` | the build template and the stylesheet check |
| `assets/` | app icon artwork (not referenced by the page) |

Versions are **commits now**. The old `curve-and-cycle-vNNN.html` chain is retired — don't
recreate it. Keep referring to versions by their number in commit messages and in
`docs/ARCHIVE.md`, since every rule in the docs is anchored to one.
