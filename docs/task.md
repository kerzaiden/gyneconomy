# The weekly refresh task

**This file is the task's instructions.** The scheduled task itself holds only a pointer to this
URL; everything it does is written here, so it can be diffed, reviewed and reverted like any other
file. Change the behaviour by editing this file and pushing — there is no second copy to keep in
step (Version 549).

Artifact: `https://claude.ai/artifact/2xTPnvFGpfjNxPnjqHVEZF`

## Why this task exists

A published artifact cannot fetch anything from the internet, and only a Claude session can write
its database. That is the whole reason: you are the bridge between the data on GitHub and the
artifact's database. Everything else about the app is automated without you.

## Do these two things

**1. Read the pipeline's file.** Fetch
`https://raw.githubusercontent.com/kerzaiden/gyneconomy/main/data/live.json`

It holds six documents, each already fetched from a primary source and already validated, each with
its own `asOf` date:

`yieldCurve` · `fedFunds` · `vixClose` · `vix3mClose` · `hyOasNow` · `capeValue`

Its `_meta.failed` names anything the pipeline could not get.

**2. Write them into the artifact's database.** Use the `ArtifactData` tool (load it with ToolSearch
if it is not in your tool list): `action:"batch"`, the artifact `url`, `collection:"data"`, one entry
per document with `doc_id` = its name and the document's value **exactly as the file holds it** —
same shape, same fields, same numbers, nothing added, rounded or relabelled.

**Pin every write.** Read each document first and pass the `version` it returns as `if_version`. An
unpinned write to an existing document is refused, and one bad entry refuses the whole batch.

That is the whole job. You fetch no figure yourself.

## Rules

- **Fetch no figure from anywhere.** Every number is fetched and validated once, by the pipeline. A
  second reading from a second source can only disagree with the committed one. If a document is
  missing from the file, that is the pipeline failing — report it and leave the previous value
  standing. A gap is a gap.
- **Never invent a number.**
- **Never set the season.** `currentSeason` is computed. Never assign it; never set `seasonOverride`.
- **Do not republish the artifact.** The database carries the data. The page itself is Keren's to
  change, from her repo.
- **Do not edit the repo.** You cannot reach it for writing, and you do not need to.
- **Each month, on the first run,** confirm federalreserve.gov still states a 2 percent PCE
  objective. If it changed, do not touch the app's bands — tell Keren, with the link. Log the result
  either way, one line.

## Report every run

The six documents and their dates · anything in `_meta.failed` · which documents you wrote · the
season the page computes. A run that wrote nothing says why.

**Notify (push) if:** a document was missing or `_meta.failed` is not empty · the newest date in the
file is more than four days old · a write failed · the season changed. Otherwise finish quietly.

## The known limitation, by design

The task runs weekly, so the artifact's figures can sit up to seven days behind the site's. Every
figure prints its own date, so no reader is misled. If Keren wants the artifact as fresh as the
site, move the schedule to daily — nothing else changes.
