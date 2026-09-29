# Gyneconomy

A reading companion to *Mrs. Market*, a book that reads the economy as a body with
seasons. The app tracks the US market cycle through its readings — temperature, growth,
hormones, pressure, pulse, volume, valuations, fear, desire, horizon, power, households,
activity — grouped as Weather, Circulation, Mood and Energy, and names the season the
economy is in.

**The whole app is `index.html`.** One self-contained file: no bundler, no framework, no
runtime dependencies. Open it in a browser and it works.

It runs in two places from that one file: a hosted site (installable, works offline) and a
Claude Artifact. Live figures reach it two ways — a data file committed by a scheduled job,
or the Artifact's own database — and both feed the same code. Offline, or with neither
available, it renders from the figures written into the file, which are always there as
the fallback.

## Start here

| If you want to | Read |
|---|---|
| work on the app | **`CLAUDE.md`** — the rules, the commands, the pipeline. Named for the assistant, written for anyone |
| know why something is the way it is | `docs/ARCHITECTURE.md` |
| find your way around the source | `docs/MAP.md` — generated, grep anchors |
| name a piece of the UI, and know what it owns and who uses it | `docs/COMPONENTS.md` — generated, the shared vocabulary |
| know what changed and when | `git log` — every version is a commit named `V6NN — Short Name` and a tag `v6nn-short-name` |

## Working on it

```sh
npm i && npm run setup   # npm i alone does NOT fetch the browser the tests drive
npm run check            # the fast gate, under a second: build, email, map, ledger, 120 tool checks
npm run check:all        # plus the browser suite and axe — what CI runs
```

**`index.html` is built, not written.** Edit `src/` — the parts listed in `src/manifest.json`,
whose order is the semantics — then `npm run build`. CI runs `build:check`, so the output
cannot drift from the source.

**Before you commit a version:** `npm run bump`, so `package.json`, the service worker's cache name
and the `V6NN` commit all say the same number. **Before you push:** `git pull --rebase && git push --follow-tags`. A scheduled workflow
commits fresh figures to `data/live.json` on weekdays, so the remote is often ahead; the
rebase keeps your commits on top of the bot's, and nothing conflicts because it only ever
touches that one file.

**Proving a change is safe:** `npm run snap` captures 32 DOM states and
`node tools/snapshot.js a.json b.json --diff` compares two captures. Deterministic, so a
difference is a real difference. Every refactor in this repo shipped with "32 states
identical" in its commit.

## The repo

| Path | What |
|---|---|
| `src/` | the app's source — assembled by `npm run build` |
| `index.html` | the app, **built** from `src/`; committed because it is what ships |
| `sources.html` | the citation list the app links to — **generated** by `npm run sources` |
| `manifest.webmanifest`, `sw.js` | installable and offline |
| `data/live.json` | fetched figures — **generated**, committed by the Data workflow |
| `assets/` | the app icon: one SVG master and the two PNG sizes the manifest names |
| `docs/` | architecture, the generated map and component page, the scheduled task's instructions |
| `test/` | the browser suite, the tool tests, and the two ratchets they hold |
| `tools/` | build, strip, ledger, map, snapshot, axe, the step classifier, the two fetchers |
| `.github/workflows/` | `ci.yml` tests then deploys; `data.yml` fetches then commits; `backfill.yml` refetches the histories on demand |

Four files are generated and never edited by hand: `docs/MAP.md` and `docs/COMPONENTS.md`
(`npm run map`), `data/live.json` (the Data workflow) and `sources.html` (`npm run sources`).

## Data

Every figure cites a **primary source** — a statistical agency, a central bank, or an
index's originator. No news sites, no aggregators. Each figure names the day its own
number comes from, and the Sources screen states when the set was compiled.

Six readings refresh themselves on a schedule through one registry that states, for each,
the shape it arrives in and the band it must fall inside; three more rows in that registry are
declared but have no automated source yet. A fetch that fails, or a value
outside its band, is refused and the previous value stands. Gaps are drawn as gaps.

Nothing here is investment advice.

## Rights

© 2026 Keren. All rights reserved — see `LICENSE`. The source is public so the app can be
hosted and read, not as a grant of licence: the design, the writing and the season
framework are part of the book. The economic data belongs to the agencies that publish
it, each cited on the Sources screen.
