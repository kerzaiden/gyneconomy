# Gyneconomy

A reading companion to *Mrs. Market*, a book that reads the economy as a body with
seasons. The app tracks the US market cycle through twelve readings — temperature,
growth, pressure, pulse, volume, valuations, sentiment, appetite, horizon, power,
debt service, activity — grouped as Weather, Circulation, Mood and Energy, and names
the season the economy is in.

**The whole app is `index.html`.** One self-contained file: no build step, no bundler,
no framework, no runtime dependencies. Open it in a browser and it works.

It runs in two places from that one file: a hosted site (installable, works offline)
and a Claude Artifact. Live figures reach it two ways — a data file committed by a
scheduled job, or the Artifact's own database — and both feed the same code. Offline,
or with neither available, it renders from the figures written into the file, which
are always there as the fallback.

## Start here

| If you want to | Read |
|---|---|
| work on the app | **`CONTRIBUTING.md`**, then `CLAUDE.md` |
| know why something is the way it is | `docs/ARCHITECTURE.md` |
| find your way around `index.html` | `docs/MAP.md` — generated, grep anchors, 13k lines indexed |
| know what changed and when | `docs/ARCHIVE.md` — every version, newest first |

```sh
npm i && npm run setup   # Playwright and its Chromium, for the tests only
npm test                 # 60 checks
```

## The repo

| Path | What |
|---|---|
| `index.html` | the app |
| `sources.html` | the published citation list — **generated, never hand-edited** |
| `manifest.webmanifest`, `sw.js` | installable and offline |
| `data/live.json` | fetched figures — **generated**, committed by the Data workflow |
| `assets/` | app icon artwork |
| `docs/` | architecture, the generated map, the version archive |
| `test/` | the suite and its baseline |
| `tools/` | the fetcher, the map generator, the snapshot harness, the step classifier, the build template |
| `.github/workflows/` | `ci.yml` tests then deploys; `data.yml` fetches then commits |

Two files in there are generated and should never be edited by hand: `docs/MAP.md`
(`npm run map`) and `data/live.json` (the Data workflow). `sources.html` is generated
too, from the app's own Sources screen.

## Data

Every figure cites a **primary source** — a statistical agency, a central bank, or an
index's originator. No news sites, no aggregators. Two compilations are cited and
labelled as such; two figures are computed in-house and say so. Each figure names the
day its own number comes from, and the Sources screen states when the set was compiled.

Four figures refresh themselves on a schedule: the Treasury yield curve, the Fed funds
target, the VIX close and the high-yield spread. Two deliberately do not — Shiller CAPE
has no machine-readable primary feed, and CNN's Fear & Greed cannot be fetched at all.
Both are refreshed with a human in the loop, because a scraped number dressed as a
primary source would be worse than no number.

A fetch that fails, or a value outside its sanity band, is left out and the previous
value stands. Gaps are drawn as gaps.

Nothing here is investment advice.

## Rights

© 2026 Keren. All rights reserved — see `LICENSE`. The source is public so the app can
be hosted and read, not as a grant of licence: the design, the writing and the season
framework are part of the book. The economic data belongs to the agencies that publish
it, each cited on the Sources screen.
