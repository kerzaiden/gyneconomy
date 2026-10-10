# The Weather Report routine

**This file is the routine's instructions.** The scheduled routine holds only a pointer to this file on `main`;
change what it does by changing this file through a pull request, like any other.

Repository: `kerzaiden/gyneconomy` · Artifact: `https://claude.ai/artifact/2xTPnvFGpfjNxPnjqHVEZF`

## Why this routine exists

The Weather Report is the app's one piece of writing that moves with the data: today's story of Mrs. Market,
told like financial news across the six elements, with each reading it names linking to its page. Nobody reviews
an edition before it goes live (Keren's decision), so the check below is the review. Write a new edition only
when there is news; most weekdays there is none, and then you stop.

## Do these things

**1. Start from `main`.** `git fetch origin main && git checkout --detach origin/main && npm ci`.

**2. Read today's facts.** `node tools/report.mjs facts > /tmp/facts.json`. It boots the app on
`data/live.json` and prints every reading's figure, word, tier (Normal, Attention, Risk) and date, the Risk
Factors rows exactly as the page shows them, the Fed's range, last move and next meeting, and the last edition's
date and headline. These are the only facts you may use. Fetch nothing else.

**3. Decide whether there is news.** Compare with `data/report-facts.json`, the facts the last edition was
written from. There is news when any of these changed:

- a reading's word or tier;
- the figure of a reading with no `asOf` (a monthly or quarterly release landed);
- the Fed's range or last move;
- the Risk Factors rows: one came or went, or a row's line changed ("highest since" moved), not just its figure;
- the season.

A daily figure (the 10-year, the spreads, Fear, CAPE, Concentration) moving inside its word and tier is not
news. If there is no news, stop here and say so in one line.

**4. Write the edition** to `data/report.json`, keeping its shape: `kind` `"object"`, `asOf` (the newest date
in the facts, `YYYY-MM-DD`), `headline`, `lede`, `story`, and `elements` with one text for each of `weather`,
`activity`, `mood`, `desire`, `circulation`, `stress`.

- **Read `docs/DIAGNOSIS.md` first and write by it:** how the app diagnoses, and the rules Keren's
  corrections have added.
- **Lead with what changed.** The headline names today's news in sentence case, in at most 80 characters. The
  lede is two sentences on what moved. The cycle's story sits on the same page and already tells where she stands
  and the shape of the cycle, so the headline and lede never restate it.
- **Each element is two to four sentences**, read across its readings: what they say together, and the one
  that stands out. Weather covers the season, the economy, the Fed and the market.
- **Link each reading the first time it is named**: `[US 10-year Treasury](sheet-sign-pressure)`, with the ids
  from the facts.
- **Quote a figure only as the facts print it**, and only a figure the facts hold. Say dates as "9 October".
- **Never forecast.** No "will", "expect", "likely", "outlook", "next year"; say what is, and what it last
  resembled ("the highest since 2007").
- **Keep the market's words** (bull year, tightening, risk premium) and her voice: Mrs. Market is "she".
  No how-to text, no straight double quotes, no `<` or `>`.
- **Leave `story` as it is.** It is the cycle's story; if the cycle itself has changed, keep it and say so in
  your report, for Keren.

**5. Check it.** `node tools/report.mjs check data/report.json` must print `ok`. Fix what it names and run it
again. Never publish an edition that fails.

**6. Publish it in two places**, the same document in both:

- **The site.** Save the facts as `data/report-facts.json`, then commit both files to `main` with the GitHub
  tools (`push_files`, branch `main`), message `Report: <headline>`. This routine, the Data workflow and the
  Backfill workflow are the only things that commit to `main` directly, and this routine commits only these two
  files. The push starts the site deploy.
- **The artifact.** Use the `ArtifactData` tool (load it with ToolSearch if it is not listed): `action:"batch"`,
  the artifact `url`, `collection:"data"`, one `set` with `doc_id` `"weatherReport"` and the document exactly as
  the file holds it. Read the document first and pass its `version` as `if_version`.

## Report every run

One line: no news, or the new headline and what made it news. **Notify** if the check failed twice, a publish
failed, or the season changed.

## When it runs

Weekdays at 23:30 UTC, after the Data workflow commits `data/live.json` (22:40 UTC) and the courier copies it
into the artifact (23:07 UTC).
