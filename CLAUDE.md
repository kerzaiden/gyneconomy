# Gyneconomy

A reading companion to Keren's book *Mrs. Market*, which reads the economy as a body with seasons.
**`index.html` is the whole app**: one self-contained file, no framework, built from `src/` by
`npm run build`. It ships as a hosted site (GitHub Pages, installable) and as a Claude Artifact at
`https://claude.ai/artifact/2xTPnvFGpfjNxPnjqHVEZF`, from the same file.

Keren owns every design and editorial decision. **Her decisions are in `docs/DECISIONS.md`**, in her
own words: part 1 is every one recorded up to V648, part 2 is where each new one is added. Don't overrule
one; if it seems wrong, say so and ask. The rules below are the ones that matter most.

## Read first

- `docs/ARCHITECTURE.md` — why things are the way they are, including decisions that look like bugs.
  Read the part that covers what you are touching.
- `docs/MAP.md`, `docs/COMPONENTS.md` — generated navigation of the source (`npm run map`). Read them
  before grepping; the source is ~15,000 lines.
- `docs/task.md` — the daily courier task's only instructions. Edit that file to change the task.
- `git log` — every version is a commit `V6NN — Short Name` and an annotated tag. The history lives here,
  not in the code. The source has no comments since V650; `git show v649-why-not-when:src/<part>` is the
  last commented source, and `v648-treasury-quarters` the last one with its full history.

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

- **The history component is one component.** A change to one history page is a change to all eleven;
  a page that cannot take it is a finding to report, not a page to skip. The same holds for the head menu
  (one menu shape for every history, Keren, V602) and the history frame.
- **Band provenance.** Every range on screen is sourced or explicitly Keren's call, and the (i) says
  which. A target is never relabelled "normal".
- **One figure, one number.** Computed in one place, read everywhere else.
- **Edit `src/`, never `index.html`.** The build is a join of the parts in `src/manifest.json` plus a
  comment strip; **the manifest order is the semantics** (module vars are assigned between parts).
  The generated data (`js/03b-history-fred.js`) loads first, right after the wrapper opens, so every part
  can read it (V647).
  Never hand-edit a large region: write each edit as a script that asserts its anchor first.
- **No comments in `src/`** (Keren, V650: "just remove all the comments"). Only one-line section titles
  (`// ---- Title ----`), which build the map. The why goes in `docs/ARCHITECTURE.md`, a decision in
  `docs/DECISIONS.md`, the history in the commit message. `npm run check` fails on any other comment;
  `node tools/uncomment.js` removes them and `node tools/comment-proof.js` proves the page is unchanged.
- **Functions may shrink, never grow** (V624), and a new one starts at 150 lines or fewer (V647). `npm run
  check` enforces both; `npm run comp:bless` records a deliberate exception, and the commit says why.
- **Finish a piece of work by committing it.** Two assistants work here (a Claude session with the
  project attached, and Claude Code in this folder); the repo is the only handoff.
- **Every change goes on a branch and reaches `main` through a pull request** Keren merges (V642). A
  push to `main` deploys the site, so her review sits in front of every deploy. `npm run bump` before
  every version commit; `git pull --rebase` before pushing — the Data workflow commits `data/live.json`
  to `main` on weekdays, and that bot is the one thing allowed to push there directly.
- **One version, one commit on `main`: squash-merge** (V647). Title the merge `V6NN — Short Name`, so
  `main` reads as one commit per version. Then move the working branch to the new `main` before the
  next change. **Tags are the Tag workflow's job** (`tag.yml`): cloud sessions cannot push tags, so the
  workflow tags each version when it lands. `npm run bump` counts from `package.json` as well as the
  newest tag, so a tag that has not been made yet cannot send the number backwards.
- **`main` and the artifact are the same version, always.** Whoever merges to `main` republishes the
  artifact from that commit, in the same sitting (rules 1, 4 and 5 above), with `label` = the version
  name. Only a session with the `Artifact` tool can do it; a GitHub Action cannot. If a merge lands and
  nobody can publish, say so rather than leaving the two apart.

## Commands

```sh
npm i && npm run setup   # once; setup fetches Chromium (skip setup in the Anthropic sandbox)
npm run check            # the gate before every commit: build, email, map, ledger, 120 tool checks
npm run check:all        # plus the browser suite (88 checks) and axe — what CI runs
npm test                 # the browser suite alone; --bless rewrites the baseline, a deliberate act
npm run snap             # 32-state DOM snapshot; snap:diff proves a refactor changed nothing
npm run build            # assemble index.html and stamp sw.js from package.json
npm run bump             # next version number (newest tag + 1, or `npm run bump 640`)
npm run map              # regenerate docs/MAP.md and docs/COMPONENTS.md
npm run sources          # regenerate sources.html from the app's own Sources screen
npm run classify         # measure each step's kind (check/derive/wire/render/build/mixed/live)
```

A change the suite does not cover needs its own probe, and a probe worth keeping goes into the suite.
The step registry, the reading registry and the repaint layer are documented in `docs/ARCHITECTURE.md`,
under "How the live layer works".
