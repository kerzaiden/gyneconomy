# Gyneconomy

A reading companion to *Mrs. Market*, a book that reads the economy as a body with seasons.
The app tracks the US market cycle through twelve readings — temperature, growth, pressure,
pulse, volume, valuations, sentiment, appetite, horizon, power, debt service, activity —
grouped as Weather, Circulation, Mood and Energy, and names the season the economy is in.

**The whole app is `index.html`.** One self-contained file: no build step, no bundler, no
framework, no dependencies at runtime. Open it in a browser and it works.

It is published as a Claude Artifact, where it can also read live figures from its own
database. Offline or in a plain browser it renders from the literals in the file, which are
always present as the fallback.

## Working on it

```sh
npm i && npm run setup   # Playwright and its Chromium, for the test suite only
npm test                 # 50 checks
```

`npm i` does not fetch the browser on its own — `npm run setup` does, once per machine. The app
itself has no dependencies; this is test tooling only.

Read `CLAUDE.md` first — it has the rules that are not negotiable. Read
`docs/WORKING-DOC.md` before changing anything real; it records why the app is the way it is.

## Data

Every figure cites a primary source — a statistical agency, a central bank, or an index's
originator. No news sites, no aggregators. Two compilations are cited and labelled as such.
Two figures are computed in-house and say so. The citation list is on the app's own Sources
screen and mirrored in `sources.html`.

Nothing here is investment advice.
