# Working on Gyneconomy

Read this first, then `CLAUDE.md`. Between them they are the whole contract.

`CLAUDE.md` is named for the AI assistant that works on this repo, but **it is not
AI-only** — it holds the rules a human needs too, and it is deliberately short.
`docs/ARCHITECTURE.md` is the long form: why the app is the way it is, including a
number of decisions that look like bugs and are not.

## Setup

```sh
npm i && npm run setup     # npm i alone does NOT fetch the browser the tests drive
npm test                   # 60 checks, one command, exit 0 or 1
```

## Before you push

The remote is often ahead of you: a scheduled workflow commits fresh figures to
`data/live.json` on weekdays. So:

```sh
git pull --rebase && git push
```

`--rebase` keeps your commits on top of the data commits instead of building a
merge bubble in the history. Nothing conflicts — the bot only ever touches that one
file.

## The four rules that are not negotiable

1. **No email address in the markup.** `npm run email` must pass before any publish.
2. **Never invent a number, a source or a band.** Every figure names a primary
   source. A range nobody set is not a range: say so and ask.
3. **The published artifact is canonical for the app, not this repo.** A scheduled
   task refreshes its figures and cannot write here, so `index.html` goes stale a day
   at a time. Read the live version before editing it. `CLAUDE.md` rule 5 has the
   detail; getting this wrong silently reverts weeks of refreshes.
4. **Don't force-push over a newer version** without asking Keren about that specific
   publish.

## How to change `index.html`

It is one file of about 13,000 lines — roughly 297,000 tokens, more than a person or
a model can hold at once. Two habits make that workable:

- **`docs/MAP.md`** is a generated index: the regions, every section, every top-level
  function and var, and the registries. Each entry carries a **grep anchor**; line
  numbers are orientation only and go stale. Regenerate with `npm run map`.
- **Never hand-edit a large region, and never re-type one from tool output.** Copy
  `tools/build-template.py`, express each edit as an asserted replacement, and run it.
  The file is written once at the end, so a failed assertion means nothing was written.

## Proving a change is safe

| Command | What it proves |
|---|---|
| `npm test` | 60 checks: tokens, page errors, every history page, the live-data cache, the repaint layer, the registry invariant |
| `npm run snap` | captures 32 DOM states; `node tools/snapshot.js a.json b.json --diff` compares them. Deterministic, so a difference is a real difference |
| `npm run classify` | measures what each registered step does, and flags a declared kind it disagrees with |
| `npm run css` | the stylesheet rule count — a sudden drop means an unclosed brace killed every rule after it |

CI runs the email gate, the suite and the map check on every push, and **deploys only
if they pass**.

## House style

Comments explain *why*, not *what*. A comment naming a Version and quoting Keren is a
recorded decision — don't overrule one silently; if it looks wrong, say so and ask.

Every version ships its documentation in the same commit: an entry in
`docs/ARCHIVE.md`, and the rule itself in `CLAUDE.md` or `docs/ARCHITECTURE.md` if
the change made one.
