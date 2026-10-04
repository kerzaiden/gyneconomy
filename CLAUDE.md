# Gyneconomy

A reading companion to Keren's book *Mrs. Market*, which reads the economy as a body with seasons.
**`index.html` is the whole app**: one self-contained file, no framework, built from `src/` by
`npm run build`. It ships as a hosted site (GitHub Pages, installable) and as a Claude Artifact at
`https://claude.ai/artifact/2xTPnvFGpfjNxPnjqHVEZF`, from the same file.

Keren owns every design and editorial decision. **Her decisions are in `docs/DECISIONS.md`**: every rule in
force, by topic, with its reason in her words and the versions that set it (V666). A new decision goes under its
topic; one that overturns a rule rewrites it there. Don't overrule one; if it seems wrong, say so and ask. The
rules below are the ones that matter most.

## Read first

- `docs/ARCHITECTURE.md` — why things are the way they are, including decisions that look like bugs.
  Read the part that covers what you are touching.
- `docs/MAP.md`, `docs/COMPONENTS.md` — generated navigation of the source (`npm run map`). Read them
  before grepping; the source is ~7,000 lines of TypeScript and ~1,400 of CSS.
- `docs/DESIGN-SYSTEM.md` — where the design system lives (the design-system artifact) and how it stays in step.
- `docs/task.md` — the daily courier task's only instructions. Edit that file to change the task.
- `git log` — every version is a commit `1.4.0 — Short Name` and an annotated tag `v1.4.0` (before 1.0.0:
  `V6NN — Short Name`, tag `v6NN-short-name`). The history lives here, not in the code. The code has no
  comments since V650 (the app) and V652 (tools, tests, workflows);
  `git show v651-daily-deploy:<file>` is the last commented copy, `v648-treasury-quarters` the last with its
  full history.

## Never

1. **No email address in the markup.** Keren's is assembled at send time in the Contact handler.
   `npm run email` must pass before every publish; it greps for any address.
2. **Never `force` a publish** over a newer version without Keren saying so for that publish. Read
   the newer version, merge, publish again.
3. **Never invent a number, a source or a band.** Every figure cites a primary source. A range nobody
   set is not a range — say so and ask.
4. **Never pass `capabilities` on a republish.** Omitting it keeps the artifact's `db` grant; passing
   anything revokes it and every live figure dies silently behind the hard-coded fallbacks.
5. **Read the live artifact before publishing over it** and diff it against `index.html`. They should
   differ only by the wrapper the publish adds (a skeleton `<head>` before, a duplicated
   `</body></html>` after). Any other difference is a merge, never a `force`.

## Always

- **The history component is one component.** A change to one history page is a change to all twelve;
  a page that cannot take it is a finding to report, not a page to skip. The same holds for the head menu
  (one menu shape for every history, Keren, V602) and the history frame.
- **A parent owns what its children share** (Keren, V662). One frame (`histFrame`: height and margins) for
  every history chart, one type scale (`--type-*`, from the Lovable DSM), options on components instead of
  page-scoped styles, a reading's page described by `ind.page` instead of branches on its name, and nothing
  unused. `npm run hygiene` (in `check`) fails on each; `docs/ARCHITECTURE.md` lists the named exceptions.
- **Band provenance.** Every range on screen is sourced or explicitly Keren's call, and the (i) says
  which. A target is never relabelled "normal".
- **One figure, one number.** Computed in one place, read everywhere else.
- **A reading is declared once** (Keren, V670), in `ROSTER` (`src/js/roster.ts`): its name, category, card order,
  timing, mark, group, history and card date. The cards, category pages, Search, the Diagnosis, past cycles and
  history heads all read it; a new reading is one row there plus its page renderer. `checkRoster` keeps it in
  step with the live registry.
- **Edit `src/`, never `index.html`.** The script is strict TypeScript modules in `src/js/` (V702), bundled by
  esbuild into the one file (V695); types are syntax, never comments, and erasable only. A module's top level holds only declarations; whatever runs at load and reads another module
  goes in its `boot…()`, and **`js/main.ts`'s boot order is the semantics**. An import is read-only: a value other modules
  change lives in its owner's store (`now`, `ui`, `page`) and is written as a property (V697). `tools/load-order.js` (in `check`) fails if any shared
  value is read at load before something sets it (V654).
  Never hand-edit a large region: write each edit as a script that asserts its anchor first.
- **No comments in the code** (Keren, V650 and V652): not in `src/`, `tools/`, `test/`, `sw.js` or the
  workflows. The one exception is a one-line section title in `src/` (`// ---- Title ----`), which builds
  the map. The why goes in `docs/ARCHITECTURE.md`, a decision in `docs/DECISIONS.md`, the history in the
  commit message. `npm run check` fails on a comment in any JavaScript file; `npm run uncomment` removes
  them, refusing any file whose code would change, and `node tools/comment-proof.js` proves the page is
  unchanged.
- **No function passes 150 lines, and none grows** (V624, V654). `npm run check` enforces both, with no
  exception: split a function that would pass the cap. `npm run comp:bless` records a deliberate change
  to the shared-class ledger, and the commit says why.
- **Finish a piece of work by committing it.** Two assistants work here (a Claude session with the
  project attached, and Claude Code in this folder); the repo is the only handoff.
- **Every change goes on a branch and reaches `main` through a pull request** Keren merges (V642). A
  push to `main` deploys the site, so her review sits in front of every deploy. `npm run bump major|minor|patch`
  before every version commit (the rule for which is in `docs/DECISIONS.md`, Versions); `git pull --rebase` before pushing — the Data workflow commits `data/live.json`
  to `main` on weekdays and the Backfill workflow commits the FRED histories on the 3rd of each month; those
  two bots are the only things allowed to push there directly, and each starts the site deploy itself.
- **One version, one commit on `main`: squash-merge** (V647). Title the merge `1.4.0 — Short Name`, so
  `main` reads as one commit per version. Then move the working branch to the new `main` before the
  next change. **Tags are the Tag workflow's job** (`tag.yml`): cloud sessions cannot push tags, so the
  workflow tags each version when it lands. `npm run bump` takes the build number from `package.json` as well
  as the newest tag, so a tag that has not been made yet cannot send it backwards.
- **`main` and the artifact are the same version, always.** Whoever merges to `main` republishes the
  artifact from that commit, in the same sitting (rules 1, 4 and 5 above), with `label` = the version
  and build, `1.4.0 (712)`. Only a session with the `Artifact` tool can do it; a GitHub Action cannot. If a merge lands and
  nobody can publish, say so rather than leaving the two apart.

## Commands

```sh
npm i && npm run setup   # once; setup fetches Chromium (skip setup in the Anthropic sandbox)
npm run check            # the gate before every commit: build, email, hygiene, map, ledger, tool and unit tests
npm run check:all        # plus the browser suite (about 110 checks, ~40 s) and axe — what CI runs
npm test                 # the browser suite alone; it waits on the app, never on a clock
npm run test:unit        # the app booted in Node (jsdom): every page drawn, the model on the real record, ~3 s
npm run snap             # 48-state DOM snapshot, every page's and tab's notes included; snap:diff proves a refactor changed nothing
npm run build            # assemble index.html and stamp sw.js from package.json
npm run bump minor       # next version: major | minor | patch, or exact (`npm run bump 1.4.0`); build + 1
npm run typecheck        # strict TypeScript over the modules (in check)
npm run hygiene          # one frame, one type scale, no page-scoped styles, no name branches, nothing unused
npm run uncomment        # remove comments from the code; `node tools/uncomment.js --check` is in `check`
npm run map              # regenerate docs/MAP.md and docs/COMPONENTS.md
npm run sources          # regenerate sources.html from the app's own Sources screen
npm run classify         # measure each step's kind (check/derive/wire/render/build/mixed/live)
```

A change the tests do not cover needs its own probe; a probe worth keeping goes into the unit tests, or the
suite when it needs a real browser.
The step registry, the reading registry and the repaint layer are documented in `docs/ARCHITECTURE.md`,
under "How the live layer works".
