# Gyneconomy — why it is the way it is

`CLAUDE.md` is the rules and the commands. `docs/MAP.md` and `docs/COMPONENTS.md` are generated and say what
exists. This file is the one that is written by hand, and its job is the *why*: the decisions behind the code,
many of them Keren's in her own words, several of which look like bugs and are not.

**A fact lives in exactly one place.** A rule in `CLAUDE.md` is not restated here; a constant in the code is
not restated here. If you find something twice, one copy is wrong. What is no longer true is in git history,
reachable by tag (`git show v632-component-page:docs/ARCHIVE.md` for the retired archive).

## Live data

**A published artifact cannot call an external host.** `fetch()` to FRED or any API fails there. The only route
in is the artifact's own database — a session writes it with `ArtifactData`, the page reads it with
`claude.use("db")`. The hosted site has a second route: a JSON file the Data workflow commits. Both end at the
same door.

**The reading registry is the contract (V629).** `READINGS` in `js/02-live.js` has one row per reading that
arrives from outside the file: its kind (object, series or scalar), a scalar's band, where the value lands, and
what redraws when it does — or `onOpen`, meaning its only display is an inner page that redraws in full when it
opens. Nine rows. `applyLive(name, value)` does the same four steps for all nine; a `set` that cannot place its
value throws, and a throw is a refusal. A number outside its band is refused, never clamped — the V305 rule the
histories follow. `checkLiveCoverage` fails the suite on an incomplete row, so a tenth reading is one row and
cannot be added half-declared.

**One intake.** `receive(next, mode)` is the only way a document reaches the page. The database path passes
`"replace"` (the database is the record, so a document deleted there stops being remembered); the site-feed path
passes `"merge"` (the file is a diff of what the Action last committed). A server-side backend is a third
function that produces `{name: document}` and calls `receive`; nothing else changes.

**Shape of a document.** A series is `{kind:"series", n, rows:[…]}`, an object `{kind:"object", …fields}`, a
scalar `{kind:"scalar", value}`. Document ids are the variable names. An object document MERGES over the
literal (V544): the pipeline publishes `fedFunds` as `{lo, hi, asOf}` while the file's own object also carries
`lastMove`, `vote` and `next` — editorial facts no fetcher knows — and replacing dropped all three.

**The literal in the file is the fallback and stays for good.** It renders FIRST. `claude.use("db")` resolves
`null` in a local file, a test run and for a viewer without the grant, and a first-ever visit has no cache, so
the literals are what most loads render. They are not a duplicate of the database; they are the floor under it.
Never block first paint on a permission prompt — the runtime contract forbids it and the design does not need it.

**Why a cache, and why it sits where it sits.** The database is asynchronous and first paint may not wait on
it, but the PREVIOUS visit's answer is already known. So `LIVE_CACHE` parses `localStorage["gyn.live"]` once,
synchronously, in a try/catch yielding `{}` on anything wrong, and `LIVE(name, fallback)` hands back the cached
document in the literal's own shape — never throwing. **`X = LIVE("X", X);` sits immediately after each
declaration and above the first line that reads `X`. That placement IS the mechanism**; a line moved below a
consumer silently stops working, and nothing fails loudly to say so. Then the fetch runs, `receive` writes the
cache for next time and repaints what moved.

**Repainting goes through the doors.** `paintReading(sheet, value, tag)` writes a reading into every
`[data-open="<sheet>"]` element (V619), because a reading is shown on more than one door — the category item
and the roster row — and painting one by id left the other stale with no visible symptom. A door that prints
nothing is recorded and the suite asserts the record is empty.

**The cost, stated plainly.** A returning viewer is one load behind — for a daily series, yesterday. A first-ever
visit renders the literals, so what a NEW reader sees moves only when `src/` is rebuilt and published. A source
change and a data change are therefore two different events, and since V540 the scheduled task does only the
second.

**A cached figure that contradicts a hard-coded load assertion warns in the console.** That is the design
working: the assertion is about the literal, the cache is about today, and the suite's warning collector turns
the disagreement into a failing check rather than a line nobody reads.

**Re-exporting the whole dataset** (rare): an exporter inside the IIFE assigns the named vars to
`window.__EXPORT`, Playwright dumps each to JSON, and `ArtifactData batch` writes them — at most 50 per call, and
`if_version` pinned on every document that already exists or the whole batch is refused.
## Why there is a build step

The app proudly had none. Two things are both true: the Artifact and the service worker need ONE self-contained
file, and a fifteen-thousand-line file is not something a person can hold. So the source is split into the parts
`src/manifest.json` lists and the deliverable is assembled by concatenation — nothing cleverer, because the
script is one IIFE sharing one closure scope, and joining the pieces in order reproduces that scope EXACTLY. The
first build reproduced the previous `index.html` byte for byte, which is what made the split provable. The order
in the manifest is the semantics: module-level vars are assigned between parts, so moving a part can change
behaviour with nothing inside it changed. `CLAUDE.md` has the commands and the parts.
## Who refreshes what

Three things can change a figure, and they do not overlap. They did, and the duplication is what this division
removed.

| | Refreshes | How often | Reaches |
|---|---|---|---|
| **The Data workflow** (`data.yml`) | the nine live readings, from their primary sources | weekdays | the SITE, by committing `data/live.json` |
| **The scheduled task** (`docs/task.md`) | nothing of its own — it copies that file into the artifact's database | weekly | the ARTIFACT |
| **A session** | the source itself | when something changes | both, by building and publishing |

**The task is a courier and nothing else (V542).** Each figure is fetched once, by the Action, and validated once,
so the two surfaces cannot disagree about a number. A run that fetches a figure itself is doing the wrong thing;
a document missing from the file is the pipeline failing, and the report says so rather than filling the gap.

**Why the task still exists, now that it fetches nothing.** A GitHub Action cannot write an artifact's database,
and a published artifact cannot fetch an external host. The database is the only route in and only a Claude
session can write it. Delete the task and the artifact freezes at its last publish while the site carries on.
That is the one thing on this page no pipeline work can remove.

**The freshness cost.** The site is a day behind its sources; the artifact up to a week behind the site. Every
figure prints its own date, so no reader is misled, and the courier goes daily the moment that trade stops being
worth it. Its instructions are `docs/task.md` and that is the only copy: the task's own prompt is three lines —
fetch that file, follow it, do nothing if the fetch fails — so the one unattended thing in the system is
version-controlled rather than living in a text box.
## Sources that were refused, and what the refusals taught

**CNN refused at the protocol level.** V542 fetched Fear & Greed from the endpoint CNN's own chart calls; the
first run from a GitHub runner got **HTTP 418**, their edge declining an automated client. That is an answer, not
an outage. The only way past it is a browser's user-agent — evading a block rather than reading something
published — **and this project does not do it.** The fetcher was removed the same day, and in V546 Fear & Greed
left the app for the Fear Curve below.

**AAII refused in writing, in its own file.** The survey looked ideal as a replacement — the originator's weekly
poll back to 1987, carrying its own long-run mean and ±1σ as columns. The parser was written and proved against
the real file on the first run. Then the workbook's third sheet, "Terms of Service", was read: it prohibits
"automated downloading (bots, scrapers, APIs)" without a commercial licence, and integration into commercial
products. **Keren has confirmed the app is commercial** — it accompanies a book for sale — so it was not shipped.

**The order of those two steps is the lesson: read the terms FIRST.** A source's own file is where they are most
likely to be, and an empty-looking sheet is worth opening in a real spreadsheet program rather than trusting a
parser's silence about it. "Is this licence compatible with a commercial app?" is the first question asked of
any new source, not the last.

**A licensing gap, recorded rather than sat on.** Treasury, BLS and FRED's own series are straightforwardly fine.
The exchange-sourced ones are what nobody has checked: FRED publishes Cboe's VIX under *"Copyright, Chicago Board
Options Exchange, Inc. Reprinted with permission"*, which is not a public-domain notice. Written down so the next
person does not assume it was settled.

**What replaced Fear & Greed: the Fear Curve (V546),** `VIXCLS ÷ VXVCLS`, both Cboe series on FRED. It needs no
new source, permission or dependency, and it is daily. Its threshold is DEFINITIONAL rather than editorial —
above 1.00, near-term fear exceeds three-month fear — which puts it in the same band-provenance class as
Horizon's zero. The two legs arrive separately (`vixClose`, `vix3mClose`) and either one landing recomputes the
ratio; it is never read from a stored copy.

**Why CAPE moved to the pipeline (V541).** It looked like scraping a site quoting Shiller. That framing was wrong:
Shiller publishes the series himself as an `.xls` linked from `shillerdata.com`, which is the originator and moves
the citation up a rung. Two traps, both pinned by `npm run test:tools`: Shiller writes `YYYY.MM` with a one-digit
month, so **`.1` is October, not January**; and his headings are stacked one word per row, so the row above the
real header also reads "Date" and "CAPE" — taking the first such row read the Excess CAPE Yield, 0.0101, which
the 4–60 band refused. **The lowest qualifying row is the header.** The fetcher locates columns by reading that
row, never by index.
## Which copy is canonical

**The repo.** It used not to be: the task republished the artifact's HTML nightly and could not write the repo,
so `index.html` fell a day behind every night and the artifact was canonical. Since V540 the task writes the
artifact's DATABASE and never touches the HTML, so the page comes from `src/` and the figures from the live layer —
the two no longer compete for the same bytes.

**What this costs: one diff before every publish.** The live version and the repo's `index.html` should differ
only by the wrapper the publish adds — a skeleton `<head>` before the document and a duplicated `</body></html>`
after it. Any other difference means something published from outside this repo, and that is a merge, never a
`force`.

**Do not mirror the docs anywhere.** The Mrs. Market project used to hold copies of this file and the suite,
because a scheduled session could not reach a private repo. The repo is public:
`raw.githubusercontent.com/kerzaiden/gyneconomy/main/<path>` needs no credentials, so the copies could only go
stale and were deleted (V547). The project holds one pointer. Give a session a raw URL, never a copy.

**No git credentials exist outside Keren's machine, and none should.** A cloud or scheduled session reads the
repo and cannot push; every version reaches GitHub through her terminal, which is why every reply ends with the
command to run.
# Part 1 — The app

## The app in one page

*Mrs. Market*'s Seasonal Behaviour indicator table as a data product; a Clue-style market-cycle tracker; a
companion to the manuscript, not part of it.

Tabs, `tabTitles`: Cycle = Current Cycle · Analysis = Cycle Analysis · Portfolio · Content. Sticky top bar = tab title + round hamburger (fries glyph) → `#more-menu`. Tab bar = ONE element: desktop segmented under top bar; ≤640px fixed floating bottom pill; `.wrap` padded to clear.

Cycle = Summary (dial alone) + Browse. Weather (Temperature · Growth) · Circulation (Hormones · Pressure · Pulse · Volume) · Mood (Valuations · Fear · Desire · Horizon) · Energy (Power · Households · Activity). Named Weather, never Season; Fear, never Sentiment (V464, V546); Households, never Debt service. `energyFromReserve()` inverts the fiscal stress score; federal three stay on Power's page. Households = debt service vs saving rate, both shares of disposable income. `pageFor(bodyTerm)` = sole resolver of a sign's page; every sign link goes through it. Category sheets are built by MOVING existing cards and rows in (the V314 rule: move, don't rebuild); pages stay put and are found by id. Navigation is the `NAV` controller in `js/12-pages-nav.js` (V630): `NAV.open` and `NAV.panel` are its whole public surface, and the page stack, the open sheet and the return scroll are private to it. A component asks by calling `NAV.open` or by emitting `data-open` and letting the delegate find it — **don't invent a second navigation idea.**

Homepage = 2×2 + full-width way out. Explicit `grid-area`, never DOM reorder (source order = taxonomy; read by roster, category sheets, All-indicators). "All indicators" = `.all-row` not `.cat-row`: no members line, half height, icon slot keeps categories' WIDTH. 
Analysis = 5 cycles, one `subjectRow` each (V631, the one row component every door in the app is built from), all shown: ring, years, name in the voice, season strip, how it ended, S&P total; tap → cycle page. `seasonStripHtml(cyc)` → `{strip, foot}`; foot's "What usually comes next" reads *current* season. `PREVIEW_CYCLES` = only row-count number. View more expands hidden rows IN PLACE (built either way, only `hidden` differs), outside `#cycle-list` (delegated row-click handler). Don't split into list + overview.

Portfolio: empty, says so (`.soon`, centred, in the voice); no placeholder figures. Content: season's reading, Season Model, framework; its "The Cycle Model" paragraph = only place cycle dating is in words.

Three equal weights: hero (dial in `.season-card`, white container, tighter padding, wheel past it) · supporting pair (two `.peek` cards, only 2-up row) · rows (subject drawers). Additions join one.

Copy density: fold into what exists; new section = one kicker, one short visual, detail behind (i). No information twice per screen; no card in a card; borders only (`--shadow:none`); collapsible row = icon · name · one figure · one tag · chevron and nothing else; no "More info" labels. Check data isn't already rendered where a reader looks first.

## Data model and sources

Cycle = first bull year → last bear year; the bleed CLOSES a cycle. `sp500AnnualReturns` = real annual **total** returns, 1990–today, Slickcharts; groups into `marketCycles`: Dot-Com 1991–2002 · Housing 2003–2008 · Big Tech 2009–2018 · COVID-19 2019–2022 · AI 2023–today (`ongoing:true`, no `to`). Partitions the timeline, no gaps. Losing years 1990, 2000–02, 2008, 2018, 2022 each close their cycle; 1990 = tail of an unnamed prior cycle. Eras named for what grew in them; COVID-19 breaks it → no on-screen sentence claims the rule. Closing a cycle: `to` = last BEAR year; drop `ongoing`; open next on the following year; add `cycleEndReadings` entry. **Never a second market model beside `sp500AnnualReturns`** (`hiCycles`, `cycleAverages`, Analysis list, cycle view read it). Named eras and the SEASON ring are independent objects; never reason from one to the other.

`cycleEndReadings`: keyed by each closed cycle's FIRST year; holds its LAST December — Fed funds target + last move, VIX close, ISM PMI; never refreshed. Dec 1999 5.50% / 24.64 / 57.8 · Dec 2007 4.25% / 22.50 / 47.7 · Dec 2017 1.25–1.50% / 11.04 / 59.7 · Dec 2021 0–0.25% / 17.22 / 58.7. Fed funds from the Fed's open-market history; VIX from exchange closes; PMI as first reported. OAS `null` for all four (FRED rolling 3-yr window) → a closed cycle's Feeling reads VIX alone, says so. Re-dating = re-research all four rows. Removed V512, nothing read it; figures and sources in git (`git show v632-component-page:docs/ARCHIVE.md`).

Growth = **YoY only** (`gdpQuarterlyYoY`: quarter vs same quarter a year earlier) = the OECD/Eurostat/World Bank headline. BEA annualized quarterly print (−28.0 to +34.9 across 2020) not carried: never reintroduce, never feed the season model. Growth (i) keeps one sentence on why a headline figure can differ. Hover writes **YoY**; prose writes it out.

| Series | Content |
|---|---|
| `usRealGdpGrowth` | World Bank `NY.GDP.MKTP.KD.ZG`, 1990–present. Feeds `eraGrowth(cyc)`: compound annual rate over closed years, total expansion, simple average, least-squares rising/falling/flat (±0.1 pp/yr = flat). Read by Growth's average line + `#growth-stats`. |
| `gdpQuarterlyYoY` | FRED `GDPC1`, continuous from **1988 Q1**. `growthTrendNow` = least-squares slope of last 8 quarters: rising > +0.025 pp/qtr, falling < −0.025, flat between. Closed cycle = same computation at its last quarter. |
| `cpiYoYHistory` | Monthly CPI YoY, continuous from **Jan 1989**. |
| `hyDates`/`hyOas` | ICE BofA high-yield OAS **daily**; 787 trading days, Sep 25 2023 – Sep 23 2026; FRED `BAMLH0A0HYM2`. FRED holds a rolling 3-yr window → record low 2.41% (Jun 2007) and high 21.82% (Dec 2008) are cited on the meter's scale and **cannot be drawn**: never invent the missing years, never re-scale the meter to the window. Daily is deliberate and unique here. Asserts 4.61 / 2.59 on load; a console warning = the window rolled, re-check the note. |
| `unempHistory` | UNRATE CSV, **944 months from Jan 1948**; asserts 2.5% May 1953, 14.8% Apr 2020, 4.1% Aug 2026. |
| `deficitHistory` | 80 fiscal years, FRED `FYFSGDA188S`, from **1946**; asserts +4.30 FY1948, −14.48 FY2020. |
| `powerHistory` | `stressScoreFor()` composite per year **1948–today**, **three** markers; 1948 = the series' true limit (BLS output per hour starts 1947 Q1). Record **1966, 72%**. |
| `capeHistory`, `buffettHistory` | January readings; quarterly `NCBEILQ027S ÷ GDP` on the live figure's definition. Both carried to today at render time (`powerHistory.push({y:today, v:powerScore})`; CAPE's last point = the published reading) so each line ends on the figure above it — both exceptions stated in the data comments. `xs` (real positions) kept over even spacing. |
| `gdpPeers` | Israel, Japan, EU27. `q` keyed "YYYY Qn", real GDP YoY, SA, 2005 Q1 – 2026 Q2, plus `regime` from `regimeTrack(c.q)`. OECD QNA (`DSD_NAMAIN1@DF_QNA_EXPENDITURE_GROWTH_OECD`, key `Q.Y.<area>.S1..B1GQ......GY.`, `format=jsondata`) + Eurostat `namq_10_gdp` (CLV_PCH_SM, SCA, JSON-stat). Both return periods unordered or index-keyed — pair in a script, check 2020 Q2 and 2009 Q1 troughs. |
| Yields | Quarterly levels 3M/2Y/5Y/10Y/30Y, toggleable. 30-yr has a real 2005 gap (`v:null`) — never bridge it. `t10y3mHistory` = the spread. |

A gap is drawn as a gap. Oct 2025 has no unemployment reading: no column, out of every average; likewise absent from `cpiYoYHistory`. `histReadFill` handles a null reading. CPIAUCNS/CPIAUCSL have no Oct 2025 row → a 12-row offset is wrong for YoY; match by date.

Fear = the Fear Curve, `VIXCLS ÷ VXVCLS` (V546), computed from two legs that arrive separately and never read from a stored copy; the retired Fear & Greed and its `moodFrom` bands went with CNN's refusal (see Sources that were refused). **Before computing any figure, check for a conventional published one; carry and cite it if it exists.**

Meters: every outer `min`/`max` = the **true U.S. historical extreme**; each has a narrower band as a green zone, dot orange outside it. Meter, band and a card's editorial `tag` are separate reads and may diverge — explained in the caption, never reconciled away.

| Marker | Range (primary series) | Band |
|---|---|---|
| Debt burden (debt held by public ÷ GDP) | 0% 1835 (Treasury Fiscal Data, $33,733 outstanding) – 106.3% FY1946 (OMB via FRED FYPUGDA188S) | `optimal:{lte:51}` = CBO 50-yr average; Maastricht 60% unused |
| Interest burden (÷ GDP) | 0.63% FY1942 (FRED FYOIGDA188S) – 3.3% FY2026 CBO projection, the record (prior peak 3.16% FY1991) | ≤ 2.0% |
| Deficit rate (÷ GDP) | −2.3% FY2000 surplus – 26.9% FY1943, FRED FYFSGDA188S. Low end DEPARTS the true-extreme rule (real max surplus FY1948 +4.3%) — Keren's to settle, flagged not changed | ≤ 3.8% |
| Household debt service | 9.05% 2021 Q1 – 15.85% 2007 Q4; Fed DSR credit-bureau basis, FRED **TDSP**, series BEGINS 2005 Q1 (rebuilt Sep 2024 on tradeline data, includes escrow; its 15.85% peak is **not** the retired series' 13.2% — never in one sentence) | below its own 12.4% mean, `DSR_MEAN` |
| Personal saving rate | 1.8% 2005 Q3 – 24.4% 2020 Q2; BEA via FRED **A072RC1Q156SBEA**, quarterly from 1947 | 4.5–12.2% (10th–90th pct, 318 quarters) |
| Productivity growth (Activity) | −1.7% 1974 – +6.7% 1950, annual YoY, BLS OPHNFB | ≥ 1.3% YoY = BLS's published post-2005 slowdown average (2.1% for 1947–2018); "better than the slowdown", never "at trend" |
| VIX (close) | 9.14 Nov 3 2017 – 82.69 Mar 16 2020, Cboe via FRED VIXCLS | sign row `optimal:{lte:20}`, an editorial line; the Fear page's own threshold is the curve's definitional 1.00 |
| Buffett Indicator | 32% Q2 1982 – 256% Q2 2026 (current); Fed Z.1 NCBEILQ027S ÷ FRED GDP | ≤ 80% (his 2001 *Fortune* figure) |
| Shiller CAPE | 4.78 Dec 1920 – 44.19 Dec 1999, Shiller's series | ≤ 17× (that series' long-run mean 17.42; not a level a market ought to trade at) |
| High-yield OAS | 2.41% Jun 2007 – 21.82% Dec 2008, ICE BofA via FRED BAMLH0A0HYM2 | 3.5–6%, `HY_NORM_LO`/`HY_NORM_HI` |
| ISM Manufacturing PMI | 29.4 May 1980 – 77.5 Jul 1950, ISM history (Trading Economics compilation cited) | ≥ 50, definitional |
| Unemployment | 2.5% May–Jun 1953 (FRED UNRATE) – 24.9% 1933 (Census Historical Statistics D 85–86) | 3.5–5%, `ACT_BAND_LO`/`ACT_BAND_HI`, bracketing CBO's NROU ~4.2% (FRED NROU) |
| CPI YoY | −15.8% Jun 1921 – 23.7% Jun 1920, BLS MLR | 1–3%, a TARGET |
| M2 velocity (Pulse) | 1.126 Q2 2020 – 2.192 Q3 1997, FRED M2V | 1.7–2.2×, word **Pre-2008** |
| M2 growth (Volume) | — | 3.5–10%, word **Her pace** (10th–90th pct 1960–2019; mean 6.80%, median 6.70%, deciles 3.31–10.28%) |
| Real GDP growth | — | 1.0–4.3% (10th–90th pct, 154 quarters from 1988) |
| Horizon (spread) | — | ≥ 0, definitional, one-sided |

Pulse = velocity of M2, not the VIX; the VIX is the near leg of the Fear Curve and lives on the Fear page. **Three fiscal markers = one balance sheet asked three questions, and the page must say so**: Debt burden the STOCK, Deficit rate the FLOW (the figure commentary quotes it), Interest burden the CARRYING COST; only their sub-lines tell them apart.

**Mood's fast and slow members: two panels, one rule** — turns over in weeks and is read contrarian (Fear, Desire), or predicts a decade and says nothing about next year (Valuations: Buffett, CAPE). Don't merge them. Margin debt was dropped as the only bar not anchored to published extremes; it returns only with the FINRA monthly series.

Power: `powerScore = 100 − stressScore` = the **three**-marker composite (debt burden, interest burden, deficit rate) inverted. `powerWord = energyFromReserve(powerScore)` → word, severity state, `bars` 0–5. Bands mirror the stress bands (≤30 Exhausted · ≤50 Tired · ≤70 Steady · above Energetic) so drawer row, lead row, battery charge and Insights tile can't disagree. Drawer mark `batteryIconSvg(bars)` via `iconMark()`; lead-row bar `powerMeter` 0–100, optimal `≥ 70`, labelled **Exhausted … Energetic ≥ 70% (ample reserve)**. Written as a **percent** everywhere; (i) states a full charge = all three markers at the best value the U.S. has recorded. Today 26%, Exhausted, one bar. All three subtract → **Power can only fall**. Today-only → a closed cycle shows no power reading. Stress bands: Good <30 · Elevated 30–50 · Serious 50–70 · Critical ≥70. `stressScoreFor` normalises on `meter.min`/`max` and **never reads the band** — verify that before changing a band that feeds a composite; re-run the Node check on any `labPanel` min/max change.

Sources policy: every figure cites its **primary source** (statistical agency, central bank, index originator); every extreme above is verified against that series. No news sites, blogs, aggregators. Two compilations cited and labelled: Slickcharts for S&P DJI calendar-year total returns (S&P DJI originator, NYU Stern Damodaran cross-check, every year within 0.5 pt); Trading Economics for ISM's record high/low. Two figures computed in-house and say so in their (i): Buffett Indicator, productivity YoY (FRED OPHNFB). OAS extremes predate FRED's window; (i) names ICE Data Indices as originator. `https://fred.stlouisfed.org/data/<SERIES>.txt` = the reliable FRED endpoint; WebFetch's summarizer misreads long tables → for daily series or a figure that matters, load the page in a real browser and parse rows with a script. `curl` to FRED/Cboe is blocked by the sandbox proxy. **Check the source, not the summary** (a Google summary attributed a "3.50%–5.50% normal range" to CME, which gives only a 5-yr average 3.50%, 5-yr range 2.44–5.80%, SD 0.74%).

## The season model

Six seasons in cycle order: Summer–Inflation (`summer`) · Autumn–Disinflation (`autumn`) · Autumn–Stagflation (key `lateautumn`; display name has no "Late", the key never moves) · Winter–Deflation (`winter`) · Spring–Deflation (`springdeflation`) · Spring–Reflation (`spring`). Every theme mention goes through **`seasonTitle(meta)`** (name · theme), bare name when `theme` is empty. Two Springs + two Autumns share names → **never show a bare `meta.name`**: legend pills, the Action word-tile sub-line, the Content tab's reading kicker and its (i) caption all use `seasonTitle`. `wheelMeta` carries each season's **action** from the manuscript's cycle figure — both Springs → Growing · Summer → Ripening · both Autumns → Harvest · Winter → Seeding — each with an inline SVG icon, plus a fertility name where the book has one (Summer→Ovulation, Winter→Groundation; others `altName:null`, don't invent one). `currentSeason` = the one cycle-position variable, driving season card, wheel and the Content tab's reading entry together.

The 1–3% band is fixed and editorial: the Fed's objective is a point (2% on PCE), not a range; the band is Keren's symmetric tolerance around it, read on CPI. Hard-coded — season thresholds, chart band and meter zone share the constants; nothing is fetched from the Fed. Both (i) texts say this.

`readSeason(cpi12, gdp8, prevRegime)` computes the season, **never set by hand**. **Growth** = least-squares slope of the last `GROWTH_WINDOW` quarters of `gdpQuarterlyYoY` = **six** (four → 34 regime runs since 1988; six → 26; eight → 21; four and eight disagree on 39% of quarters); a fitted trend turns about nine months after the line, by design. Yields `regime`: expansion (rising), contraction (falling), or, when flat, whatever `prevRegime` was. **Temperature** = CPI YoY level against the band (hot above, cold below, within otherwise) + direction from a fitted trend over the last twelve months of `cpiYoYHistory` — deciding outright in expansion, breaking a tie in contraction. `prevRegime` comes from `seasonTrackAll`, computed once across the FULL history, never per cycle; `cycleModel(era)` slices `seasonTrackAll` for its dial `track` and `reading` rather than recomputing.

| Season | Growth | Temperature | Target range (bars) |
|---|---|---|---|
| Spring — Deflation | Expansion | Cooling | within or below — green + blue |
| Spring — Reflation | Expansion | Heating | within or below — green + blue |
| Summer — Inflation | Expansion | Hot | above — red only |
| Autumn — Disinflation | Contraction | Cooling | within or above — green + red |
| Autumn — Stagflation | Contraction | Heating | within or above — green + red |
| Winter — Deflation | Contraction | Cold | below — blue only |

Row order is Keren's, on screen and in the legend.

Tie-breaks, stated in the (i). **Expansion** (regime, not raw growth trend): hot → Summer regardless of direction; otherwise direction alone decides, whether prices are within the range or already below it (heating→Spring–Reflation, cooling→Spring–Deflation). The two Springs cover all of "not hot"; no lukewarm within-band season — **never re-add a Goldilocks Zone**. **Contraction** mirrors expansion exactly: cold → Winter outright; otherwise direction alone decides, whether within the range or already above it (cooling→Autumn–Disinflation, heating-or-steady→Autumn–Stagflation). No range check gates stagflation; no "mild Autumn" case. Within-range stagflation is real (17 quarters since 1990, incl. 2025 Q4: CPI 2.65%, steady, growth falling). **Never redefine stagflation as contraction + hot regardless of direction** — it flips the Q4 2023 disinflation example (Dec 2023 CPI 3.32%, hot and falling). **Flat growth continues the prior regime**: never test `growthTrend !== "falling"`, which routes a flat quarter after contraction into a fresh expansion. Q4 2023 reads Autumn–Disinflation, continuing Q3 2023.

`seasonOverride` (null by default) can pin a season by hand but shouldn't in normal operation. This doc doesn't track the current season — check the live (i). No backtest ships; its result and working files are in git history.


**Hormones = the policy rate; Pressure = the level the market sets; Horizon = the slope.** Hormones (V592) is what the Fed does — the federal funds target and its history, the one rate a committee decides. Pressure = the price of money the MARKET charges, the LEVEL of Treasury rates, written as a cuff writes 120/80 (4.96/4.17): long rate the systolic peak the system generates itself, short rate the diastolic floor a central bank holds it at. The GAP is a forecast, not a pressure → **Mood's fourth member**, Horizon, judged optimistic or pessimistic, correlating with ovulation and menstruation. Valuations, Fear and Desire are about now; Horizon is what the market expects of the future. Pressure's word = `levelZone(y10).label`, three-banded both ways (Low under 2%, High over 4.5%; of the 21 years held, only 2006–07 and the present cycle are above that line); its ring measures the 10-year on 0–6%. The un-inversion clock lives on Horizon, which counts SHAPE not price. The levels chart keeps its zone colouring + Inverted/Normal/Steep legend — annotation, and the one thread between the two pages.

**Horizon's verdict word = slope AND direction, never slope alone** (2008 and 2021 both show a steep curve, opposite meanings). `horizonWord(sp, dLong, dShort, dSpread)` compares `dLong` against `-dShort` and names the mood from whichever end supplied more of the move: Optimistic · Hopeful · Guarded · Undecided · Pessimistic. **Lookback fixed at four quarters; it does not follow the chart's window.** Its (i) carries the NY Fed's caution beside its signal: inversion has preceded every recession since 1960 with one false positive in 1967, and it is the LEVEL of the spread that forecasts, not the crossing — two 1990s episodes stopped 42 and 12 basis points short of zero with nothing following.

**One direction, one source**: every expansion/contraction on screen — the Growth chart's colour, `#growth-phase`, the drawer row's mark — comes from `r.regime`/`regimeByQ`. `eraGrowth`'s annual fit names no direction; the "This cycle" block shows the total alone. The trend lags the line by up to a year by design; the hover names the regime per quarter and the (i) explains it.

## Page anatomy

**A HISTORY PAGE = THREE CONTAINERS**: **control** on the page's own ground (`.hist-bar`, `--gap-top` above, `--gap` below) · **history container** (opens on its head, then readout, picture, trend) · **reading container** (`.reading-box`, the blood-test rows). All three in the app's one container language — surface, border, radius, standard padding; all take `--pad`. Horizon puts two controls in the bar, Pressure one; nothing else varies. The full-bleed band is retired, with the counter-bleed on the plot, the −20px margin and the squared corners under 920px. The chart band keeps its own `14px 14px 4px`; nothing bleeds past the padding.

Desire has a **bare range bar and no mode bar** (at three years "Current cycle" = "Max"): it calls `rangeBar` and places its own `histHead`, not `histControls`.

Shared by every history page: the readout carries the reference lines (`lastHistGeom.refs`); no chart prints their values permanently; all six inline `refKey` calls are gone. **No register under the chart** — strongest, weakest and latest live in the picture and on hover, the latest being the panel row's figure. The reading sits below the trend pill inside the history container as a `.panel-row`, or a `.panel-stack` where a page has several markers.

Card head `histHead`: grey rounded badge with the page's mark, a title naming WHAT THE CHART MEASURES, one `⋯` right — emitted by `histControls` from `HIST_HEAD` keyed by the id it already receives, so no page passes a title, mark or note. Pressure and Desire call `histHead` at their own sites. `title` may be a function (Pressure's names the maturity below it, Horizon's the spread). **The title names the series, never the page**: "CPI, YoY" · "Shiller CAPE, against fair value" · "Velocity of money (M2)" · "M2 money stock, YoY" · "Federal deficit or surplus, share of GDP". **"Year over year" is written YoY.** **One text-height row**: badge, title, `⋯` all 21px; the title's own line box 14.5px on 1.35; glyph 13px with stroke 1.35 set **on the badge, not on the mark** (the same marks keep their built-in 1.7–1.9 on roster and home tiles; a CSS rule outranks a presentation attribute on the path). The `⋯` wears a round hairline button, not a filled plate. **Everything in the history container aligns to the CARD, not the plot**, the readout's figure included.

**One affordance per subject.** When a page's chart draws a reading, that note belongs to the head's `⋯` menu and the row carries no (i) — what `panelRow({ head:"<histControls id>" })` means, filing the note into `HIST_NOTE[id]` and rendering the row's name bare. A page with SEVERAL readings keeps the (i) on the others (Activity's Productivity + Industrial output, Valuations' Buffett Indicator, Households' Saving rate, Power's three lab markers). The menu row wears `.cycsel-opt` (one menu idiom) but **never `.more-row`** — the footer pill with two behaviours keyed off it (`.metric-sheet:has(.more-row) .timing-row{display:none}`, `seatPageFoot`'s `querySelector(".more-row")`); the modal's delegated handler was taught `.bh-opt` by name. `detailTexts` is content-addressed through `detailSlot(html)` (V532): the same note gets the same slot however many times a control redraws it, so the array never grows with taps and a note following a control is never frozen. **Which menu is open lives in `headMenuFor`, not the DOM**; any click closes an open cycle picker, which redraws the sheet and rebuilds the head.

**Window on the ground, series in the menu.** `.hist-bar` carries **one ruler** = which WINDOW the chart shows. A control choosing which SERIES belongs in the head's `⋯` menu, above the note, as radio rows wearing `.cycsel-opt`/`.cycsel-tick`; `HIST_HEAD[id].menu` returns them. Control chrome is scoped to `.hist-bar`: grey track, grey stroke, selected segment lifted white paper. The strongest mark in the app is spent on the actions a reader takes, not the control they touch once a session.

The reading is seated generically by `seatBandReading(cont)` from `histReadEnsure`, which moves a `.panel-row`, `.panel-stack` or named wrapper out of the band into a `.reading-box` after it, and runs on every draw because Power, Households, Valuations and Activity rebuild their whole container each time. ONE reading → drop that row's name (`.reading-box.solo`, name kept for screen readers); several → keep every name. **The band is selected by what it contains** — `:has(.band-head)` on `.page-chart` and `.spread-history`, so no page sets a class and none can opt out by forgetting it.

Every history is control · chart · trend · reading in ONE container, and since V614 every one draws inside the one frame, `histFrame(Wpx)` — width, height, margins and the reserved readout band come from it and from nowhere else. **Pressure is the one page with no reading, by Keren's decision**;

**A panel built by a renderer is built ONCE and placed, never rebuilt** (renderers re-run on every window change; `panelRow` → `expandBtn` pushes into `detailTexts`). Power's and Valuations' stacks = module vars set at init; Growth's and Households' = memoising functions (they call `panelRow`, declared after their meters); Horizon's = memoised **per spread**, where the row legitimately follows the control.

**A chart's colour key belongs under the chart**, not at the container's foot. **A history container opens on its control, never a heading**; a displaced note travels into the surviving affordance's (i) rather than being deleted (`SPREAD_DETAIL` = Horizon's bridge; the merge strips the note's leading `<h4>` and keeps the fuller source list). Pressure keeps its head, having no reading for the name to move to. **When merging two notes, check the source list survives the join.**

Mechanics. A comma list in `querySelector` is not a preference list — it returns the first element in DOCUMENT order matching ANY selector, so use one call per selector in priority order. **An average must be assigned BEFORE the geometry citing it**, or `refs:[{label:"Average", v:dfAvg}]` captures a hoisted `undefined`. **Address a row by NAME, never index**: `valRow(key)` is the only way into Valuations' rows. `catItem` consumes its source and `if (!row) return` reads a missing row as one to skip; a clone taken as `catItem`'s FIRST statement, before any child moves, is stashed on `window.__CAT_SNAP` by `data-open`, and registration blocks try the live document first, the snapshot second. **Anything reading a reading's authored markup must run before the categories are built, or read the snapshot.**

**ONE NUMBER PER SHARED DECISION.** `COL_FILL = 0.68` = a column's share of its slot, read by every column chart; Households derives `COL_FILL / 2` for its pair; the battery gauge is excluded. `AXIS` (in `js/06-charts.js`) = the plot margins and the furniture heights every chart shares; `histFrame` turns them into one geometry, and `publishGeom`/`attachHistory` (V618) make a chart's geometry carry the name of the chart that made it, so a hover can never read another chart's ruler. Grid vocabulary only: `chartAxes`, `vGrid`, `.bt-frame`, `.bt-grid`, `.bt-yl`, `.bt-xl` (`.grid-line`, `.axis-label` no longer exist). `cycLabel(c)` = the only place a cycle's name and span are written. `.bh-title, .spread-history-head h4` = one type spec for both head components.

Spacing tokens are Part 2's (one place). **Marks and type keep their own figures** — a 4px bar cap, a 13px label gap, the readout's type inset: shapes, not spacing.

## Components

The inventory — every builder and the classes only it writes, with its callers — is generated: `docs/COMPONENTS.md`. What follows is the contract behind each, which no scanner can derive.

| Component | Source | Contract |
|---|---|---|
| Season naming | `seasonTitle(meta)` | name · theme wherever a season is named |
| Season computation | `readSeason()`, `seasonTrackAll`, `cycleModel(era)` | the only way a season is decided |
| Page location | `pageFor(bodyTerm)` | every link to a sign resolves through it |
| Category row | `catItem`; the rows themselves are `subjectRow(o)` (V631) — the one door component | moves the source's figure element in; **normalises the class to `.ci-value`/`.ci-unit`** — a peek CARD arrives `.peek-value` (21/11px), a sign ROW `.subject-value` (20/14px). Markup moved between contexts → normalise the class. |
| History chrome | `histControls(id, tl, minYear)` → `.hist-controls` | emits the head from `HIST_HEAD[id]` + the mode's submenu; spacing belongs to the component (`.hist-controls > *{margin:0}`, `> * + *{margin-top:10px}`). Only page-level rule left: `#deficit-rangebar{margin-top:var(--gap)}`. |
| Readout | `.hist-read`, inserted by `wireHistHover` itself | **a fixed block ABOVE the chart, never a tooltip on it**; no page inserts it, so a history cannot be built without one; its height is reserved. At rest: the window's average and span. Under a finger: that reading, its date, the reference lines with their marks. Crosshair and lit column stay. The average is taken from `refs` when the chart drew one, computed only when it did not. Horizon tracks its own pointer through its own geometry object. Takes `.panel-row`'s box spec; no date span; sub-line keeps its 16px floor. |
| Reference lines | `lastHistGeom.refs` = `[{label, v, dash}]` | hover only: the bar's own value at full strength, references at 72%. **Marks differ by SHAPE, not colour.** The dashed swatch is a repeating gradient, not a dashed border. Any history joins by declaring `refs`. |
| Reading seat | `seatBandReading(cont)` via `histReadEnsure` | moves the reading into `.reading-box`; `.reading-box.solo` for a single reading |
| Panel row | `panelRow(o)`, `panelFromMeter(m, ends)`, `meterFlagged(m)` | name and (i) left over the figure, `panelBar` right; ends are the meter's own min/max. `open` makes the row a door and it then carries ONE affordance — the chevron, never a chevron and an (i); its note travels to the page it opens and becomes that page's lede. `.pbr-name h4` is `display:block`, not inline-flex. Name column **41% at every width**. |
| Panel bar | `panelBar` | three fixed segments (low \| normal \| high) as equal thirds with a 3% gutter, the green middle in the same place on every reading; **TWO segments for a one-sided range** (`gte`/`lte`), the wider half to the band. The value lands in its band-membership segment at its own fraction of it. `floor`/`ceil` come from the SERIES widened by a band's width, **never from the window**. Middle label = the range alone ("3.5–6%", not "Her pace 3.5–6%"); the band's KIND lives in the (i) with its provenance. The figure turns amber (`--warning-ink`) outside the band. Label row `1fr auto 1fr`, `white-space:nowrap`. Outer segments run to `ind.meter.min`/`max`. |
| Reading box | `.panel-row` | a box, not a hairline: takes `.spread-tile`'s spec (1px border, shared radius, **`--surface`, not `--surface-2`**) and the trend pill's full width, so the two stack as a pair — lavender an action, grey a reading. Side padding 16px, not the pill's 22px. |
| Panel stack | `.panel-stack`, `.panel-stack.in-hist` | the multi-reading form (Power's four markers): siblings separated by hairlines, the group one reading-object taking the box; takes `.panel-row`'s box spec and margins. No Marker / Reference range / Flag headings; each marker's `sub` line and short note live in its (i). |
| Name and mark | `nameWithMark(name, mark)` | glues the last word and the (i) or chevron into one `white-space:nowrap` unit |
| Meters | `meterHtml()` | one renderer for every bar; optional `ends:{low, zone, high}` renames end words on all three branches — **Exhausted … Energetic** (`powerMeter`), **Complacent … Panicked** (VIX), **Greedy … Fearful** (spread), **Fair … Rich** (both valuation gauges). Don't fork it; add an option. |
| Disclosure | `infoIcon()`, `expandBtn()` | kept separate; both open the one shared modal `#detail-backdrop`. No floating popover. Every (i) = a `.lede` line + `facts([...])`, one fact per line, never a paragraph; `factsFrom(text)` splits an existing note on sentence boundaries. Five or six facts max. |
| Cycle mode | `modeBar`, `cyclePicker(id, picked, minYear)`, `pageMode`, `pageCycles`, `pickerOpen`, `data-cycles-for` | a **Cycles · Years** switch above the history; Cycles = the app-wide default on every history; keys match the id the renderer is registered under. Years = the ruler `5Y · 10Y · 25Y · Max`. Cycles = a single-select dropdown listing each cycle with its years, defaulting to the open cycle, closing on choice, dropping cycles the data cannot fill (Pressure offers three, its yields starting 2005). **Both modes draw the same chart.** Cycle mode only: the cycle's average as `.temp-avg` with its value on a `.chart-label-plate` in the clearest stretch of the run, dimmed by `.trend-on .temp-avg`. **Temperature and Growth offer only `This cycle` and `Cycles`** — `drawTemperature()`/`drawGrowth()` are cycle-scoped and shared with the cycle view, so a real time window there is a decision, not a refactor. |
| Windowing | `cycleSlice(series, cyc)`, `cycleQtrIdx(y0, cyc, len)`, `cycleMonths(c)` | by series shape: readings that know their own year; bare-number quarterly series (Volume, Pulse, Pressure); a plain index range for Federal budget's annual one; `cycleMonths` → `[from, to)` inside `cpiYoYHistory`. Records follow the window everywhere (`noMean:true`); `lastLabel(cyc)` reads "At the close" inside a closed cycle. |
| Year spellings | — | four, meaning different things: `FY2020` (fiscal year), `YEAR 5` (the dial), `5Y/10Y/25Y` (calendar windows), `Y1…Y10` (year of a cycle, the Cycles-mode x-axis — deliberately not "1Y") |
| Sparklines | `sparkHtml(values, window, state)`, `lastN(arr, n, key)` | 108×26 (96×24 at ≤560px): no axis, no labels, fill 0.13, last point a 2.6r dot ringed in the surface, the state's colour, window named in `.spark-win`. Normalises to its own min/max; **returns "" under three points**. Slots `<div id="subj-spark-<key>">` in `.subject-text`, filled by `spark(key, html)` beside `say(key, text)`; `.subject[open] .spark{display:none}`. **Only a row with a real series, and only where the full chart isn't already on screen**: today only Growth carries one (`lastN(gdpQuarterlyYoY,16,"v")`, labelled `yearly rate · 4 years` — name the measure whenever the line plots something other than the number above it); Fear's slot is emptied on purpose, three points not being a line worth drawing (Keren, V277). Temperature excluded. Never draw a line from a single reading. |
| Peek cards | `peekCard(o)` + `peekChart(o)` in `#peek-row` | two `.peek` cards under the dial in `#today-analysis` — kicker, figure, the state word in that state's ink, preview. **Today's readings only**, so a cycle opened from the list never borrows them; rendered once in their own IIFE after the signs. Figures come from where the row below takes them (Temperature: its indicator's `tag.state`, `cpiNow`/`cpiDirection`; Growth: `nowModel.reading.gdpLatest`, `regimeState(reading.regime)`). **The whole card is the button to its drawer** (`data-open` → `details.subject[data-subject=…]`, opened and scrolled to). `peekChart` draws 152×52 with one dotted reference (2% target, or zero), the wash running from the line **to that reference**, not the frame; stretched with `preserveAspectRatio="none"`, so every stroke carries `vector-effect="non-scaling-stroke"` and the end point is a round cap on a zero-length path. At ≥760px the card turns on its side (reading in a 150px column, chart filling the rest at 88px). **Don't re-add a filled reference band.** `peekCard` draws **four** preview forms: reserve gauge, pulse trace, meter, column strip. A peek's live mark keeps the class its own inner page's chart paints with. |
| Previews | `.ci-mini` scope | **a grey picture with one plum reading in it**: history and frames at `--border-strong`; the newest mark — and the gauge's whole lit run, where the level IS the reading — at `--accent-ink`. One accent per preview, scoped so the same drawings keep their state colours where they are legible. History dims, the newest mark holds full strength. |
| Marks | `iconMark(key, state, svg)` | the icon in the state's ink on its wash, 48px chip, 42px on phones. **Marks are outlines on the surface they stand on**: no disc on the home tiles (`--accent-ink` strokes, 26px in a 42px slot); one `--accent` wash on every roster row. The mark is `--accent-ink`, **never a STATE colour**. DSM drawings (`sproutSvg()`, `SproutMark`) are imported path for path — change the Gyneconomy DSM on Lovable first, then copy. |
| Inner pages | `NAV.open(el, title)` (V630), `sheetRenderers[id]`, `metricPageReset` | **pages, not popups.** Each page's content lives in a hidden `.metric-sheet` host under the peek row; opening hides `#cycle-view` and `#today-analysis`, moves the host — **live DOM, not a string** — into `#metric-page`, calls `sheetRenderers[id]` with the measured width, sets the top bar, remembers the scroll position. This is the cycle-view open move; **don't invent a second navigation idea.** Hosts live on the page so `#slot-temp`/`#slot-growth` exist before `placeCharts()` runs. The tab handler calls `metricPageReset` **before** naming the new tab. In a sheet the drawer loses its clothing (`.metric-sheet .subject-summary{display:none}`, border and ground gone) and the `<details>` must be `open`, or it renders as an empty 48px bar. Every page reads name, figure, reference, chart, note, Highlights. `.metric-sheet .temp-chart` cancels the card's −6px bleed. |
| Back arrow | `#topbar-back`, `setTopbar(title, onBack)` → `topbarBack` | one arrow, one listener over a slot the cycle view and metric pages both fill |
| Detail markup | `cardDetailHtml()` | `.metric-row`, `.metric`, `.metric-sub`, `.caption`, `.aux-stat`, `.src`, `.facts`, `.lede` have **no base rules** — every selector is scoped to `.detail-modal X, .metric-sheet X, .sign-detail X`, and **any new home must be added to them** or the markup renders unstyled. Rules scoped under `.card` don't apply inside `.detail-modal` — restate or inline. |
| Highlights | `.highlights`, `hiCard(name, state, text)`, `hiCycles(series, label, fmt)` | every inner page ends with one: sentences, then the metric's average in each of the five cycles, bars to scale, the open cycle in `--accent`. **Every sentence is arithmetic on the series above it; none is written by hand.** Helpers `yearOf(d)` (reads `.y`, `.q`, `.m`), `mean`, `cycleAverages(series)` (reads `marketCycles`), `rankIn`, `ordinal`, `maxIn(series, from, to)` — **a highlight naming a record must exclude the reading it describes.** |
| Cycle view | `renderCycleView` | one cycle view, reading the model; never a second layout. Today's globals (`readingNow`, `currentSeason`, `seasonWhy`, `cpiNow` …) are aliases of `nowModel`; **don't compute "today" a second way.** |
| Menu | `#more-menu`, `.menu-row[data-sheet]` → `#sheet-<name>` | a full-screen sheet titled "Gyneconomy": Guide (How to read · About the book) · Resources (Sources · Contact — a mailto form, the address assembled at send time, never in markup) · Appearance. The Theme row names the current choice and opens `#sheet-appearance` — "Choose your app appearance" in the voice at 30px, three `.appearance-choice` radio rows with 64px preview tiles (system setting, a light and a dark miniature with the lotus), a purple check on the chosen one. The choice is `localStorage` `gyneconomy-theme`, applied as `data-theme` on `<html>` before first paint (System removes both); `:root[data-theme="dark"]` and `:root:not([data-theme="light"])` honour it. Sources builds its list on first open from `window.__sources`. Compile date and disclaimer live in the Sources sheet's lede — **no footer anywhere**, no eyebrow, no page title. On phones the modal is a bottom sheet filling the screen bar a 40px strip, a 44px round X top-right, `#detail-modal-body` the scroller; desktop keeps the centred card. The cycle card is headed "Gyneconomy" in the Temperature card's kicker style with an (i) opening the legend, no kebab. |
| Fonts | six files | `Cormorant+Garamond:ital,wght@1,600`, `Public+Sans:wght@400;600;700`, `IBM+Plex+Mono:wght@400;700`, preconnected with `display=swap`. Before using a weight, check it is in the request; before adding one, check something renders in it (`getComputedStyle` sweep). |

Don't merge, don't re-add. Lab sections' head rows stay hidden inside drawers (`.subject-body .longcycle-head{display:none}`); `#longcycle-tag`/`#psych-tag` are still filled, not shown. Nothing on a phone scrolls sideways — lab tables and the Season Model's rows stack at ≤640px. The Fed funds range is prose in the CPI card's caption, never an on-bar band, row or card. Gone on purpose: the par-yield-curve snapshot chart, the two old spread-meter tiles, a standalone Investment Clock wheel (merged into the season wheel), the monthly Calendar grid and everything on it, `sheetHead()` (`#power-head` is empty), `foldedBlock`, the last `meterHtml` call on any page. **Dead code is removed with proof, never by eye**: list every `var`/`function` whose name appears once with comments stripped; collect every class the app renders across two viewports, four tabs, five cycles, every sheet and control; remove whole CSS RULES, and only where EVERY comma-part names a retired class; re-run the walk — the rendered count must be identical. **A maintained figure that nothing reads is a lost feature, not dead code** (`fedFunds` was still on the refresh contract when its tile had left the page): check the refresh contract before deleting data, and put the reading back rather than dropping it. **Weigh a rule against the rule it is fighting before adding it** — `.page-chart:has(.hist-controls)` already gives every history container its padding and beats `.pulsebox` on source order.

## The dial

`#cycle-dial` draws the cycle from its first quarter to today, or to its close. Size is one CSS var, `--dial`, on `.season-wheel-wrap`: desktop `min(100vw − 76px, 100vh − 220px, 560px)`; phones ≤640px `min(100vw − 46px, 100vh − 220px)` with the wrap on `margin:6px −11px 2px` (the 46px = the page wrap's 20px padding + the card's 1px border + 13px padding, less the 11px the wrap takes back, per side). **`100vw` includes a classic scrollbar's width while the card's layout box does not** → `.season-wheel` carries `max-width:100%` and `.season-wheel-wrap` an explicit `width` (`100%`, or `calc(100% + 22px)` on phones where its margins are −11px); without that width the wrap is shrink-to-fit and the cap constrains nothing. Playwright headless passes `--hide-scrollbars`, so **the rig must include a scrollbar run**. The wrap is `order:-1` so the wheel is first on a phone; the card centres it. **No optical nudge** — when Keren reports something is off, look for the bug before explaining why it is not one.

**Outer ring = the four seasons**: one round-ended shape per season run (consecutive quarters in the same season, the two Springs counted as one and the two Autumns as one, `seasonGroup(key)`), inset at both ends by the stroke's cap plus the market band's 1.2° gap (a one-quarter run keeps a 0.6° core and reads as a dot). Colours: Winter periwinkle #5b7fd6, Spring muted periwinkle #9aa7d4, Summer orange #d86f32, Autumn gold #d8a23c (dark #7f9ce6 / #a6baf0 / #ec835a / #f2c24d) — the `--season-*` tokens in `:root` and the dark blocks. The ring's strokes, the legend's bars and the Season Model table's target-range bars all read the one `--season` variable set by `.spring/.summer/.autumn/.winter`, so a token change recolours all three. Inside a run: one butt-joined arc per quarter (`.dial-moon.<group>`, `data-q`; `.cap` stubs with `data-cap` round the ends; a 0.35° overlap hides seams), one flat colour per run, so a tap still reads one quarter; each quarter's season is `readSeason()` on what was known by that quarter's end, its six-way name read in the hub and popup. The hovered or parked quarter swells to the track's full width with its stub. **Spring–Deflation sits between Winter and Spring–Reflation at Keren's choice, not between Summer and Autumn — don't move it.**

**The ring closes on itself.** `START` = 2.5° = where the first season shape's rounded cap begins; the grey track starts `LEAD` = 3° before it and runs to `SEAM_END` = 360 + START − `GAP` (5°). Years run from `ORIGIN` = START − 1.2° over `ARC` so a full cycle's last cap ends exactly at `SEAM_END`; **every angle = `ORIGIN + years × degPerYear`**. A longer cycle scales the ring (`dialYears` = median length of the closed cycles, or the cycle's own length if longer); `typicalCycleYears = 6`, sourced in the legend. Small muted dots (`.dial-dot`, r 1.7) mark the quarters still to come in a typical cycle — open cycle only, band only — from just past the badge to the seam. The **year badge** (`.dial-today-badge`, "YEAR N": today's year for an open cycle, the length for a closed one) sits flush after the last quarter, or on the seam at 12 o'clock when the cycle fills the ring (`badgeDeg = 360`; the scrubber's circular distances handle it). `--moon-dark` (= `--text-primary`) and `--moon-lit` (= `--page`) give it a primary-text disc with page-coloured text.

**A thinner market band** (radius 75) runs one segment per calendar year from `sp500AnnualReturns` — teal up, coral down, round caps — carrying the **cycle's peak** (`.dial-peak`): a pale disc (r 5.2, the band's colour at 55% white, a hair wider than the band) ringed in pure white with a white dot (r 1.9); the ring is white, not `--surface`. It sits in the middle of the cycle's **most profitable year** = highest S&P 500 total return (`cycleModel().peakYear`; the year in progress counts at its return to date). Keren's rule: per year, never the compounded high. Hovering a band segment reads the year in the hub: "2026 · Today" for the year in progress, Bull/Bear year as a soft pill in the band's colour (`--bull-ink`/`--bull-wash`, `--bear-ink`/`--bear-wash`), the total return, and the compounded return since the cycle's first year (`cumByYear`, "+69.6% since 2022"); on the peak year it adds "· Peak year". **The reader-facing term is Peak year**, never "the cycle's peak". The accent colour is `--dial-accent` — never the app's rose.

**The hub** shows the date line (Today / Closed / the quarter), the **season** as the big Cormorant word (`#season-wheel-hub-theme`, ≈40px on a phone), the **theme** as a 20px Cormorant line under it in `--accent-ink` (`.who`), and one link, **"This season ›"**, opening `quarterPopup`. For the present it is prose only: the cycle note (`cycleNowNote`, or the era blurb at a closed cycle's close) and the season's *In the economy / In the body / What usually comes next* from `seasonReading`, plus *What to watch for the turn* and *From the book*. For a past quarter, the same prose without the note — **never a data popup listing the quarter's figures.** Hover or tap a quarter (`data-q`) or a band segment (`data-year`); **press and hold the year badge and drag** to scrub — the badge rides along, its number becoming that quarter's year of the cycle, and **stays where it is let go** (`dialState.parked`); dragging back past the last quarter, or a click or tap outside the dial (the document click handler calls `goTo(-1)` when parked), returns it home. No floating tooltip, no season legend on the ring. `dialState` (set by `drawDial`) carries the quarters in ring order with their angle spans, the badge's resting angle, the polar helper and `parked`.

**The legend** is a popup behind the (i) beside the "Gyneconomy" kicker (`#cycle-kicker`): a **Seasons** group (Winter, Spring, Summer, Autumn with `.season-sw` bar swatches and their themes in small text, one caption), then an **S&P 500** group in Keren's words — Bull year "positive return", Bear year "negative return", Year in progress "in progress", Peak year "highest return" — and one line on the badge. There is no `dialWhyFor`.

**The dial's date line always reads "Today, <the reader's own date>"** — never `DATA_COMPILED`. Provenance lives on the figures: **every card names the day its own number derives from**, and the Sources screen states the compile date verbatim. A reading whose card does not name its date is the bug. Accepted cost: the dial no longer reveals a stalled refresh; every figure carries its own date instead.

**Don't re-add**: a Growth ring beside Rates; a `touchstart` handler on `document`, or anywhere a tap lands, that changes the DOM (iOS Safari then suppresses the tap's click and every button on the phone dies); the Market card of year cards below the cycle view; bull/bear glyphs in the hub; a conic ring, ring-side text labels or tick marks; season faces or weather icons in the hub; moon phases or season icons on the ring; six per-theme colours; temperature colouring of the quarters; a floating tooltip or ring legend; GDP/CPI lines in the hub; the cycle name, season line or note beside the wheel; edge fades inside a run.

## Charts

**EVERY chart is bars;** `.vh-line` no longer exists and the app draws no line chart. **The test for a new chart: can it stand on zero? If not, find the midline it should hang from; never truncate the axis under a column.** Bars over fills — a fill has no per-quarter unit to hover, light or carry `.hcol`. **Desire** stands on zero (a credit spread cannot go below it); its shaded band rectangle went with the line. **Households** draws PAIRED columns, honest only because its two series are two shares of the same income and so share a scale and a zero; the pair sits in one `<g class="hcol">` so the shared hover lights one thing per index. **Pulse** cannot stand on zero (velocity lives between 1.1 and 2.2×), so it takes `divergeChart`'s answer: columns hanging off a MIDLINE carrying its own label, here the pre-2008 mean.

Every history takes its frame from `histFrame` and draws its grid with `chartAxes` and `vGrid`. Horizon builds its svg node by node, so `appendSvgMarkup` parses a fragment for it; `importNode` COPIES, so drain a parsed fragment by taking the child list once, never by looping on `firstChild`. **Chart height = `narrow ? 268 : 300`**, one line inside `histFrame`, shared by every history. **Every chart is width-aware** — it measures its host; keep it that way.

Forms: `reserveChart(o, W)` draws Power, `divergeChart(o, W)` Valuation, both through `sheetRenderers[id]` at the width measured when the page opens (a hidden element has no width). Temperature and Growth keep `drawTemperature`/`drawGrowth`, of which **only the marks were rewritten** — scale, axis, the 1–3% band, the today line, the end read-out, the collision-aware average label, the GDP country picker, the year labels and the whole `attachHoverTracking` layer are untouched. **If a new form is wanted there, change the marks, not the function.** `unempHistoryChart` copies `cpiHistoryChart` part for part (same window handling, axis emitter, fit group, geometry object) and is a **SEPARATE function on purpose**: same picture, different reading, so scale, colours and references differ. **Folding two subjects into one function behind flags is how a component stops being readable.**

Colours. Temperature's columns take `heatStep(v)`, a five-step yellow→orange ramp binned **by the reading, not by rank**, so the same CPI is the same colour in any cycle; below 1% keeps `--cold`. State colours: hot (above 3%) red via `--bleed-mid`, warm (1–3%) **teal** via `--warm` (the word is "warm", never "in range"), cold (below 1%) periwinkle via `--cold` — none of which appear on the dial's season ring. Growth's columns take two levels of contraction: `neg` = the season model's regime (`regimeOf`, the six-quarter trend, not the sign of the number) and `below` = a quarter that actually went negative, which wins when both are true; the chart is painted by `regimeByQ` from `seasonTrackAll` stepped along x by `hardStopGradientX` — **never coloured by the sign of growth.**

Axes and behaviour. `gdpQuarterlyYoY` is drawn on the Temperature axis (`slotOfQ` = the quarter's middle month) so the years align and the cycle view can stack them. The closed-years average is dashed; Growth has no trend line. Temperature draws one reading per month of the cycle from `cpiYoYHistory`, from the **2% target** line (up = above target), the 1–3% range as a pale band, an end line (today, or the last month for a closed cycle) with the month, "Cycle year N" / "Closed · year N", the CPI reading and its hot/cold/warm · direction read; the axis runs eight empty months past today (three past a closed cycle's end); the "2% target" tag draws only when there is clear track right of the end line; a month with no BLS reading says "no reading". Drawn at two widths (780 desktop, 400 phones), redrawn on resize or cycle change. Never re-add the reading pills (`.temp-bar`, `.growth-pill`) or bear-year shading — the dial's market band carries the bear years. Each chart has its own crosshair; Growth's sits on the hovered month, its dot on the quarter. Defs ids are per-svg. **Tooltips on touch**: tap shows, drag scrubs, same-bar tap / tap elsewhere / scroll hides — `attachHoverTracking` owns this for every chart.

**GDP growth — one economy at a time.** The picker at the head's top right switches country (United States by default, or one peer) and the chart draws only the chosen one: `shown` sets the quarters, `regimeOf()` the colour, the scale, the badge and the average line (the cycle's closed-year average for the US, the mean of what is drawn for a peer). `renderGrowthPhase(m)` names it ("Japan · ↓ contraction"), repainted through `shownEraModel`. `drawGrowth` clears the tooltip on every redraw. No legend under the chart. `.peer-<code>{--peer;--peer-ink}` now only colours the picker's dots. The drawer row shows the **cycle's** figure from `eraGrowth(currentEra)` ("+11 % · cycle growth, 2022–2025") with the direction's state as its mark, while the **quarter** reads at the chart's end line; don't put an annual figure back on the row. `#growth-kicker` and `#growth-stats` show on the inner page; `#growth-stats.cycle-stats` stays hidden inside the drawer.

**The federal budget page.** The Deficit rate row opens it via `opens:{id,title}`; `sheetRenderers["sheet-marker-deficit"]` fills the sheet on first open — **add `opens` to another marker the day it gets a series; that is the whole change.** Titled **Federal budget deficit or surplus**, no timing chip (a chip is a door to the Indicators roster; this is a marker inside a composite). Its head carries an `infoIcon` holding every convention and a **10Y / 25Y / 50Y / Max** zoom riding `pageRange["deficit-range"]` / `sheetRenderers["deficit-range"]`, keys the delegated `.range-seg` handler already reads. A dashed **1983 reference line** draws at every range; the block is built ONCE (or the `infoIcon` re-files its text on each range change) and only the range bar, span label and chart are rewritten. `DEF_RECESSION_FY` shades fiscal years containing at least one month of an NBER recession using `.spread-history-band` from the Pressure page unchanged, and the caption states that convention (the federal year ran July–June through FY1976, October–September since FY1977). **The chart ends at FY2025, the last actual, while the marker above reads CBO's FY2026 projection** — the same deliberate gap CAPE's chart has, stated in the caption.

`TIMELINE_STOPS` = `Current cycle · 1Y · 5Y · 10Y · 25Y · Max · Cycles · Year on year`. **50Y does not exist.** Every page's `stops` array is a subset; `timelineFor` drops any stop the series cannot answer.

Other charts. Spread history: 10Y−3M / 10Y−2Y (a menu choice), quarterly, NBER recessions shaded, un-inversion marker. Horizon's columns come out of the zero line, teal above and red below. The un-inversion → recession lag panel: four modern cycles, 2–10 months, average ~5 (the research is in git history). The cycle rows' previews are `eraRingSvg` rings and an `eraMarketTotal` chip — don't bring growth bars or sparklines back to the rows.

**The barometer** (Weather's Insights): total price change against total real growth over a cycle's CLOSED years, both by the pages' own methods — `totalGrowthYears` compounds the annual real-GDP rates, `totalRiseIn` compounds the Decembers. **The reading is the GAP, not the equality**: Dot-Com −3.6, Housing +1.5, Big Tech +0.2, Stimulus +3.5, open cycle +5.3 (positive = prices ahead of output). They finish close over a full cycle, a regularity of the low-inflation era rather than an identity — never describe it as arithmetic. **One band, `GAP_BAND = 1.5`, decides both the verdict word and the run counter.** No state colour. The fourth reading is labelled **Stimulus**; the era in `marketCycles` is the **COVID-19 Cycle (2019–2022)** — different objects (a policy condition vs a market period), both live.

**What each band IS.** *Computed from the app's own series*: Pulse's Pre-2008 range (196 quarters, 1959 Q1–2007 Q4, mean 1.857×, median 1.808×, run 1.652–2.192×) — deliberately not "normal". *Computed as the 10th–90th percentile of the record*, where no published norm exists and the series is long enough to speak, the (i) saying it was computed rather than chosen: Volume, Growth, the saving rate. **The test for that construction is whether the window is FREE OF A POLICY FLOOR** — 79 years of saving behaviour qualifies, the Treasury series does not. *Cited to an outside authority*: Desire, CAPE, Buffett. *Definitional*: Industrial output ≥ 50; Horizon's zero (one-sided — a steeper curve is not a worse curve). *Bracketed around a published estimate, and says so*: Activity's 3.5–5% around CBO's NROU, with **the (i) stating which half is sourced**. *Read against CBO's 50-year averages, all ONE-SIDED*: net interest ≤ 2.0% and the deficit ≤ 3.8%, from CBO's February 2026 Budget and Economic Outlook and its net-interest primer (net interest's 50-yr run 1.2–3.2%); the reading is how far ABOVE the long-run average these sit, so a two-sided band would flag the healthy end. *Against its own mean*: debt service's `DSR_MEAN` — **when a page's verdict already contains a threshold, the bar takes THAT threshold.** *Editorial, and Keren's*: Temperature. **A band ships with its provenance in the (i), or it does not ship.**

**Desire's band.** `HY_NORM_LO = 3.5`, `HY_NORM_HI = 6` are what the app asserts, not display constants: below ~3.5% is complacency, above ~6% stress, above 8% distress, with the median since the index began in 1996 near 4.5%. The (i) states that with four sources (FRED, Trading Economics, Convex, CME). **If these numbers move, the (i) moves with them; never restore an unsourced band.** The band is shaded across the plot in the meter's optimal colour and forced into the scale — where the series sits against it IS the reading (49 of 787 days inside). Only the FLOOR is forced into the scale, never the ceiling, which runs off the top clipped to the plot (`bTop = Math.max(T, Y(HY_NORM_HI))`, the svg drawing with overflow visible). **The tag and the figure are allowed to disagree**: `High appetite` in green beside `2.73%` in amber. **Never restore the word "optimal" on an economic reading.**

**Temperature's band is the one TARGET in the app**, and its (i) carries two distinctions no other needs. (a) The Fed publishes a POINT, 2%, adopted January 2012 and reaffirmed in the August 2025 revision of the Statement on Longer-Run Goals; it publishes no band, so the edges are this page's editorial choice and the (i) says so. (b) The target is measured on **PCE** and this needle is **CPI**, which has run 0.39 points higher on average since 2000 (Cleveland Fed), so the gap the bar draws is wider than the one the Fed acts on. **NEVER relabel this band "normal."** Against `cpiYoYHistory`, 258 of 451 months since 1989 sat INSIDE it.

**PRESSURE HAS NO BAND, BY DECISION.** Keren was offered three options and chose none. There is no published normal range for an interest rate, and the percentile construction fails here specifically: the 87 quarters held contain a decade of a zero-pinned short end, so the 3-month's deciles come out at 0.04–4.80% — the whole track. The declined alternatives: the 10-year's own deciles (1.6–4.5%) with the ZIRP caveat stated, and a definitional line at the inflation rate. **Do not draw one without asking her again.** Left open with it: `levelZone`'s 2% lower edge is the same undefended claim in word form (the 4.5% upper edge is defended); raise it before touching that function.

**Before culling a CSS rule, run the coverage proof**: `npm run test:full` collects every class the app renders across two viewports, four tabs, five cycles, every sheet and every control, and the rendered count must drop by exactly the classes being retired and nothing else.

## Editorial slots

Data, not markup — fill and they render.

`sources.html` (published beside the app as a second file) is GENERATED, never hand-edited: `npm run sources` (`tools/gen-sources.js`) opens the app, lets it build its OWN Sources screen, and reads the result. **The grouping patterns are not duplicated in the generator** — they live in `index.html` and nowhere else, because a second copy would drift and the drift would be invisible: two lists disagreeing about where a source belongs, neither obviously wrong. The shell (head, style, top bar, lede, footer) is kept from the existing file; only the group list between the lede and the footer is replaced. `npm run sources:check` says whether it is current. **If the app puts anything in an "Other" group the generator REFUSES to write** — that means a cited source matched no pattern, and the fix is a pattern in `index.html`, not a bucket in the generator. Regenerate and republish with `files` whenever a citation changes. The app does not link to it (its back arrow goes to `index.html#menu`, which opens the menu on load), but keep regenerating so the two lists match; keep its head as it is (preconnects plus the non-blocking font stylesheet, `media="print" onload`) and the app's `<link rel="prefetch" href="sources.html">`.

About the book (`#sheet-book`, plain HTML in the menu markup): the author paragraph is a placeholder until the book is out — add title, publisher and link when Keren supplies them; the About copy is hers to edit. `seasonReading[season].fromTheBook` = `[{title, text}]` per season, all empty. `seasonReading.springdeflation` ships with empty `body`/`economy`/`next`/`watch` by her choice, and the Content tab renders without breaking on it. `marketCycles[i].blurb` = five era blurbs, an AI first draft awaiting her voice. `cycleNowNote` = the Cycle tab's one line on the present moment; revisit each refresh so it matches the computed season. The federal deficit page's head has **no mark** and renders title-and-dots until she picks one.

## Open questions

- **Two citations are neither primary nor a labelled compilation** — First Trust and Fisher
  Investments, both asset managers' commentary, carrying the typical-cycle-length figure the dial's
  ring is scaled to (`typicalCycleYears = 6`). The sources policy says primary sources only, with
  compilations cited AND labelled; these are a third category the policy does not cover. There may
  be no primary source for "how long a market cycle usually runs" — NBER dates business cycles, not
  market ones — so the options are to label them as estimates, to find something better, or to drop
  the ring's scaling claim. **Keren's to settle.** Version 537 grouped them so the Sources screen
  stopped showing an "Other" group; grouping is not endorsement.

- **Portfolio**: settle first where its numbers come from — the reader's own holdings (needs storage), a model allocation per season, or what each asset class did by season (needs three series the app doesn't hold).
- **The growth-direction threshold ±0.025 pp/qtr is not ratified** (Keren ratified the six-quarter window, not this); it is the one number that can flip Autumn–Stagflation vs Summer.
- **Whether Spring–Deflation's action is "Growing"** is not the manuscript's — change `wheelMeta.springdeflation.action` if she says otherwise.
- **Spring–Deflation has no Content-tab narrative.**
- **`levelZone`'s 2% lower edge is undefended**; Pressure's band remains a decision not to draw one.
- **The app's other segmented controls** (indicators tabs, spread toggle, bottom tab bar) sit outside `.hist-bar` and were to be revisited together; they have not been.
- **Backfilling Power's three markers** at each closed cycle's close (1999, 2007, 2017, 2021) is the open idea.
- **Margin debt** returns only with the FINRA series.
- **Stacking more panels to compare** Temperature/Growth is the stated next direction, layout not agreed.
- Bonds as hedge — the leading signal before a normal bleed and the safe harbour after one, except when the bleed is the Fed fighting inflation (2022), when bonds fall with stocks — is a manuscript point, not an app one.

## Procedures

### Refresh

The nine live readings refresh themselves through the registry (see Live data). What follows is the upkeep the
pipeline does NOT do, and the reason each item is the way it is.

`DATA_COMPILED` (top of the script) flows to the Sources sheet's "Data compiled" phrase, the year-to-date label and
the era lookup. Nothing else needs a date edit. **If a primary source is unreachable, leave the figure and its
date and say so — never substitute a secondary.**

| Series | Upkeep |
|---|---|
| `sp500AnnualReturns` | update the open year's year-to-date total return (Slickcharts' compilation of S&P DJI); when a year closes make it final and add the next key — the open era needs no edit |
| `usRealGdpGrowth` | add the newly-closed year once the World Bank publishes it, extending `gdpYears` and the peers' `values` too; the season does not read this series |
| `gdpQuarterlyYoY` | after each BEA release append `{q, v}` from FRED `GDPC1` levels, revising the prior few entries when BEA revises — **never drop or restart the series** |
| `cpiYoYHistory` | append the newest month (FRED CPIAUCSL, two decimals), **never drop earlier months**; a month BLS never published is simply absent, and `series.test.js` declares the one known gap |
| `hyDates`/`hyOas` | the row's figure is a live scalar (`hyOasNow`); the daily SERIES is re-downloaded and replaced whole, roughly quarterly |
| `deficitHistory` | append a fiscal year only when FRED FYFSGDA188S carries the closed year; two decimals, positive is a surplus, never drop earlier years, never move the 1946 start, never put a projection in the series. `DEF_RECESSION_FY` changes only if NBER dates a new recession — say so |
| `powerHistory` | append a year once the CBO/OMB actuals are out |
| the FRED histories in `js/03b-history-fred.js` | generated by `tools/fetch-fred-history.js`, run on demand by `backfill.yml`; never hand-edited |

**Fixed or editorial content is never touched by a refresh**: every `min`/`max`/band value, `stressHistory`,
`wheelMeta`, `seasonRules`, `seasonReading`/`frameworkRows`, `cycleEndReadings`, the annual GDP series, era names
and blurbs. **To close the open cycle** also add its `cycleEndReadings` entry, or the closed cycle prints blanks.
**`currentSeason` is computed — never set it, never set `seasonOverride`**; read what the page computes and report
it.

**Do not touch**: `RISK_REWARD` / `RISK_RISK`, `PRESSURE_ZONES`, `PREVIEW_CYCLES`, `DEF_RECESSION_FY`, the `opens`
field that makes the Deficit rate row a door, `TIMELINE_STOPS` and the per-page `*_STOPS`, and `cycleStrip`'s
contract of returning the strip only.

**The Fed's inflation objective — a standing check** in the courier (`docs/task.md`): on the first run of each
month, confirm the objective is still 2 percent on PCE. If it changed, do NOT move the 1–3% band, the season
thresholds or the 2% line — notify with the link, and add one sentence to Temperature's (i) that the band awaits
Keren's review. The band is her editorial tolerance around the Fed's point, and only she moves it.

### Verify

Every gate is an npm script, so it runs the same way on a laptop, in a session and in CI. `CLAUDE.md` lists them;
this is why each exists.

**The fast gate, `npm run check`, runs in under a second and is run before every commit.** It proves the output
matches the source, that no email address is in the markup, that the two generated pages are current, that the
component ledger has not got worse and no function has grown, that every element id the code reaches is created
somewhere, and 120 tool checks: every branch of the season table, every shipped series for length, band and
consecutive periods, and the two fetchers' pure steps against real rows.

**The slow gate, `npm run check:slow`, is the browser suite and axe.** The suite walks every page at two widths
in both schemes and asserts, among 85 checks, the six runtime invariants: geometry is owned by the chart that
made it, a reading prints where it is painted, every reach finds something, every action has an answer, every id
is one element, and no data check fired. The last one is why `console.warn` is a failing check here — ten data
checks had no listener for two hundred versions (V623).

**Every refactor ships with "32 states identical".** `npm run snap` captures 32 DOM states deterministically;
`node tools/snapshot.js a.json b.json --diff` compares two captures. It caught three breaks in V630 alone, none
of which had a visible symptom. A screenshot is for judging design; an assertion is for proving behaviour.

**The FETCHING is not tested and cannot be** — neither the cloud sandbox nor the local VM is allowed out to the
sources. Its proof is the Data workflow's own run, which fails loudly rather than writing a wrong number.

**Dead code is removed with proof, never by eye**, and **a maintained figure that nothing reads is a lost
feature, not dead code** — `fedFunds` was almost deleted that way. Check the refresh contract before deleting
data.

### Publish

`Artifact action:"publish"` with the artifact `url` — always update in place, never a new artifact — and a
`label` of sixty characters or fewer, a name for the version, not a description. If refused because a newer
version is live, read that version in full and merge; never resend your own file unchanged. **ONE FIGURE / ONE
NUMBER binds any note rewrite**: check every figure in it against the data object that owns it; refresh both or
cite neither. A market-reaction sentence is not exempt.

**Then write it down, every time.** The reasoning goes in the commit message — every version is `V6NN — Short
Name` and a tag — and the RULE, if the change made one, goes in this file or `CLAUDE.md`, in one place.

---

# Part 2 — The design system

Sole source for colour, type, spacing, chart language, icons, wording. The token source is `src/styles.css`; a figure here that disagrees with it is the one that is wrong.

## Colour

Seven roles: brand purple (lotus, primary actions, active nav, links, focus); good = teal (positive/rising); critical = red (negative/falling); four seasons (dial only); neutrals. Purple only for lotus + actionable; green/red only on market movement, always with a word or arrow. Rose, amber, coral, cold blue are not roles; lighter/darker = a shade of the same colour. Kickers, labels, names = neutral text. Tones per hue: paint (lines, bands, rings; ≥3:1), ink (words; ≥4.5:1, near 6:1), wash (`color-mix` paint over surface, ink on top). Never text in paint; new ink = same hue darkened, measured.

| Role | paint L/D | ink L/D | wash L/D |
|---|---|---|---|
| `--accent`/`-ink` | #8a4d97 / #c9a0d6 | #5e2a6b / #e3c6ea | 10/14% |
| `--good`(=`--ovulate`=`--warm`)/`--good-ink` | #1ea8a3 / #3dc2bb | #0f6f6c / #5fd6cf | 14/16% |
| `--critical`(=`--bleed-mid`)/`-ink` | #d63a2e / #eb4839 | #b33d29 / #f28a78 | 12/18% |
| `--warning`/`--serious` | red 55%/78% over surface, both themes | `--critical-ink` | 8/10%; serious takes red wash |
| `--bull-wash`/`--bear-wash` | paint 18% L / 22% D | `--bull-ink`/`--bear-ink` | — |

`--on-accent` #fff/#100d12. `--warning` = `color-mix(in srgb,var(--critical) 55%,var(--surface))`.

| Neutral L / D | Use |
|---|---|
| `--page` #f7f3ee / #100d12 | page |
| `--surface` #ffffff / #1c1820 | cards, sheets |
| `--surface-2` #fbf8f3 / #221e26 | tab-bar ground, buttons at rest, row hover wash |
| `--border`/`-strong` rgba(30,20,30,.10/.18) / rgba(255,255,255,.09/.17) | card edges, rules |
| `--track` #ece6dd / #322c36 | dial/ring tracks, range bars, neutral tag, controls on page colour |
| `--text-primary` #1c1620 / #f6f3f7 | headings, values |
| `--text-secondary` #55505a / #c7c1c9 | body |
| `--text-muted` #6d666f (5.0:1) / #938d95 | captions, axis labels, legends, kickers |
| `--overlay` rgba(28,22,32,.38) / rgba(0,0,0,.62) | behind sheet/modal |
| `--grid` rgba(30,20,30,.11) / rgba(255,255,255,.13) | every chart rule |
| `--shadow` none | no drop shadows |

Greys plum-biased; hierarchy from borders + surface steps. `--ink-on-fill`/`--ink-on-fill-inv` follow the BAR not the theme, `:root` once, never overridden. Dark theme designed, not inverted: own inks, washes, ramps; a ramp may run light→dark in one theme and dark→light in the other.

Seasons, dial only; declared in `:root` + both dark blocks (three places), recoloured there only.

| Season · keys · range | Token | L / D |
|---|---|---|
| Winter · `winter` · below | `--season-winter` periwinkle | #5b7fd6 / #7f9ce6 |
| Spring · `springdeflation`, `spring` · below/within | `--season-spring` muted periwinkle | #9aa7d4 / #a6baf0 |
| Summer · `summer` · above | `--season-summer` orange | #d86f32 / #ec835a |
| Autumn · `autumn`, `lateautumn` · within/above | `--season-autumn` gold | #d8a23c / #f2c24d |

`.spring/.summer/.autumn/.winter` set `--season`, read by `.dial-moon.<group>`, `.season-sw`, `.range-bar b.on{background:var(--season)}` (`.lag-row` carries the class). Spring = a quieter step of Winter's hue, Autumn a lighter yellower Summer. No fifth ring colour, no green/red season, no colour dot before a season name. `--cold:var(--season-winter)`.

Scoped: `.peer-<code>` → `--peer` from system hues (Israel purple, Japan periwinkle, EU gold): line, dots, end label, pill, swatch; no `--gdp-*`. `--ylm-3m…30y` maturity ramp, one purple hue light→dark. `--batt-1`–`4` deep red, red, amber, green in `#power-chart` (charge, not severity; two low steps one hue at two depths; ΔE 15.9/15.5 protan light, 15.8/15.6 dark; legend names four bands + thresholds). `--zone-mid`/`--zone-high` Pressure-preview zones, lightness 0.873/0.868, ΔE 9.6 (protan 5.2, below the floor — words carry it); Pressure chart `--critical`/`--season-autumn`/`--good`, ΔE 21.5 + 13.9 light, 22.2 + 15.3 dark, legend naming three. `--phase-up`/`-ink`/`-wash` = Autumn gold (expansion), `--phase-down`/… = Winter periwinkle (contraction), via `phaseClass(regime)`; gold is 2.29:1 on white, so text takes `--phase-up-ink` #7a5709. `--m2-deep` #4a0f0a/#ffd2c8. `gs-hot/within/cold` = critical/warm/cold; `gs-pos/neg` = ovulate/bleed-mid. `--rose*` alias the purple (hub theme line). Year badge: `--badge-fill:var(--surface)`, `--badge-ink:var(--text-primary)`, `--border-strong` hairline, `--badge-lift`, both themes.

Ramps. Heat (`.temp-col`, `heatStep()`, `.s0`–`.s5`): yellow→orange from `--season-autumn`+`--season-summer`, five steps binned by reading not rank, climbing in darkness and hue; below range keeps `--cold`; average line `--accent`. Blood (`.m2-col.v0`–`.v5`): one hue `--critical` mixed toward `--surface` (five lighter steps) and `--m2-deep` (extreme); `m2Step()` landmarks below zero, 3%, 6.8%, 12%, 20%; `v5` = contraction, `v0` = the 2020–21 flood; height how much, colour which way — the one exception to severity-colours-for-severity. Ordered categories: one hue in steps, never several; outside the order takes `--track`; tune steps per mode, checking adjacent separation. A phase is a category and takes seasons; severity stays proportionate (falling *trend* `--serious`, a quarter that went backwards `--bleed-mid`). Validate every three-plus-colour set; prove ramp monotonicity by luminance per step per theme.

## Type

| Face | Weights | Job | Rule |
|---|---|---|---|
| Cormorant Garamond | 500–700 italic | hub season word, phase line, cycle names, reading heads, quotes, menu "Gyneconomy" | never below 20px, never upright for a title; runs 600 italic |
| Public Sans | 400–700 | body, UI, labels, kickers, tags, badges, dates, units | default body face |
| IBM Plex Mono | 400–700 | figures only, incl. drawer-row headline figures (unit, tag, row labels Public Sans) | never a word-label or prose |

Google Fonts + real fallbacks; a value that is a *phrase* takes the text face; no Fraunces.

Scale, every `font-size` snapping: 11 axis ticks, tags, tracked labels, legend items, fine captions, peek kicker/unit · 12.5 sub-lines, table cells, tab labels, tooltips, secondary captions, hub link · 14 dashboard-tab body (base), card titles · 15 reading text on Content + popups (`.reading-block p`, `.journal-about p`, blockquotes) at 1.6, card glyph · 17 top-bar title, chart mono read-out · 20 vital/kpi/word-tile values, cycle names, reading heads, hub phase line (Cormorant floor) · 26 sheet section heads, long-cycle head, modal title · 30 `.cv-stat-v` (mono 700), Appearance voice title · 40 display (audit title, reserved), hub season word. Off-scale: 96 quote mark behind Insights; dial hub on `--dial` — season word `calc(var(--dial)*0.116)` (≈40 phone), phase line `0.058` (≈20). Component exceptions, only here: peek figure 21, peek state word 11.5, Highlights head 23, Highlights sentence 14.5, Cycle-tab section head 30 (27 phones), `.topbar-title` Cormorant italic 600 23 (21 below 400px) `--text-primary`.

DSM roles: display 40, page title 30, reading head 26, section head 20, reading 15/1.6 secondary, interface 14/600, label 11/600 tracked 0.08em uppercase muted. Label style = Public Sans 11/600, 0.08–0.1em, uppercase, `--text-muted`. 600 = interface bold; 700 = figures, display numbers, pills; 400 body. Tracking only: uppercase labels 0.08–0.1em, display −0.01 to −0.02em. Line-height 1.5–1.65 reading, 1.05–1.15 display, 1 figures.

## Spacing and tokens

`--pad:10px` inside a container · `--gap:10px` between containers · `--gap-top:20px` the page frame — above the first container under the sticky bar, below the last one above the tab bar, and matching `.wrap`'s 20px sides (V595) · `--topbar-gap:calc(var(--gap-top) - 2px)` + the tab panel's 2px pays the top one. Only `.cat-list` and `.ind-sheet > .rangebar:first-child` read `--gap-top` directly; `--page-gap` on `.metric-sheet` derives from `--gap`. New container = `margin-top:var(--gap)`, never its own figure; a block leading its sheet/body/box starts flush, `:first-child` rules after the general one; `:empty{display:none}`; per-tab or per-breakpoint overrides = bug (the Cycle tab's `gap` override and three-number scale are gone); exception: a page opening on the history BAND stays flush. Padding `--pad`; history band `14px 14px 4px`. `.timing-row` `margin:14px 0 0`, hidden in a metric sheet, where `seatPageFoot` clones it into the page foot. `--radius:16px`, `--radius-inner:13px` (segment in a 3px-padded track); every container and control takes one, no third; exempt `border-radius:50%` where the shape IS a circle (dial, radio ticks, round icon buttons) and anything ≤5px (bar cap, swatch, meter track). Audited set: `--radius`, `--radius-inner`, `--grid`, `--gap`/`--page-gap`/`--topbar-gap`, `--ink-on-fill`/`-inv`. Hex literals on purpose: theme-preview tiles (show the OTHER theme), `<head>` boot stylesheet (mirrors `--page` before tokens exist).

## Chart language

Dial (`drawDial()`): track = all that is possible — `--border`, stroke `--track-w` (per draw `moonW+5`, default 16), R90, round caps, 0.6; reading inside at stroke 11, one flat colour; "here" = `--surface` disc + coloured core; few direct labels; no axis or gridlines (dial only). Every chart takes the same furniture from `chartAxes()`+`vGrid()`: `.bt-frame` rect, dashed `.bt-grid` rows, mono `.bt-yl` labels ending at the plot's left edge, `.bt-xl` beneath, dashed `.bt-vgrid` per x label, solid baseline.

Strokes, round caps/joins: lines 1.75, dial band 6, ring tracks 9; bands + recessions `--track`/`--border` 0.55–0.7 rounded (`.spread-history-band`); up/down always teal `--ovulate`/red `--bleed-mid`; curves `curvePath`, Catmull-Rom K 0.24; dots on true readings hollow, `--surface` fill, 1.5 state stroke, r2.75, ≥13px apart (`dotEvery`); colour by position via vertical `hardStopGradient` (red above band, teal inside) + wash to baseline under `fadeMask` (`.chart-area` 0.2). Line `<path>` needs `fill:none`; `stroke-linecap:round` + `vector-effect:non-scaling-stroke` are house properties.

Grid/references: `--grid`, never `--border` at reduced opacity; horizontals solid (`.bt-grid`) = a VALUE, verticals dashed (`.bt-vgrid`) = a calendar place; references dotted 2 4 `--text-muted` when fixed (2% target, zero line), dashed 3 3 when computed (cycle average, `.avg-label`, collision-aware); gridlines faint dotted on label values (`.grid-line.fine` 0.45), never more than the labels; baseline solid. Ticks from the span on screen, skipping values on a reference's label; `tickFmt` may drop a decimal (41.6× reading, 40× tick); one axis per chart, never dual; columns stand on zero; one reference line; text in a plot takes a halo (`paint-order:stroke`, `--surface` stroke); floating label on a `--surface` plate, radius 3, 2–3px padding (`.chart-label-plate`), flipping above/below the reference. Draw SVG at the width it will occupy; a stretched viewBox (`preserveAspectRatio="none"`) needs its own ratio, takes stroke scale as the geometric mean of the axes and distorts `<circle>`, so dots = zero-length paths, round caps, non-scaling stroke.

Read-outs. Mark on a band: `--surface` disc r5.2 (over the 6-unit band), ring 2 units, core r1.9 in the band's colour. "Here": `--text-primary` disc + `--surface` dot, r5, last reading, `today` line 0.35. Read-out: date/context Public Sans 11 muted above the end, value mono 17/700, state words 11 secondary. Hover: dotted crosshair, filled dot, one tooltip per panel, cycle panels sharing a crosshair (`chartLink`); plot dims to 0.38, hovered bar keeps full colour + hairline; at Max a column is 1.4px (one transparent plate + nearest-index). Legends: hollow dots in paint colours, Public Sans 11 labels in the reader's words; one series needs none; a sub-3:1 set owes one.

Forms. `reserveChart`: one round-capped column per period in its own empty track. `divergeChart`: bars both ways from the midline, one scale. Apple Health form: quiet columns, one saturated full-width line at the average with its value at the end, range behind with dashed edges over the columns, label on a `--surface` plate. `pairChart`: connector, hollow disc at reference, cored disc at measured, percentage above. `pulseTraceSvg`: beat spacing alone varies (period = 1 ÷ rate), always a reference lane, live `--accent`, reference `--text-muted`. `peekCard` draws four forms, precedence: reserve gauge, pulse trace, meter, column strip.

Miniatures. `.peek-chart` (every peek art): 152×52 units stretched to card width, 88px tall ≥760px; 1.75 line in the card's state colour; dotted `--text-muted` reference (2 4); wash 0.12 from line **to that reference**; end point a 5.5px round cap on a zero-length path; no axis, labels, hover. `.spark`: 108×26, 96×24 ≤560px; 1.6 line in the row's state colour; fill 0.13 to the baseline; last point r2.6 ringed 1.6 `--surface`; window named beside it Public Sans 11 `--text-muted` ("5 years"), plus the *measure* when it plots something else ("yearly rate · 4 years"); scale = each line's min/max; hidden when the drawer opens; floor three points. Row miniature `--mini-w:80px` × `--mini-h:42px`. Peek frame `PEEK_W=80` × `PEEK_H=42` at every width. Columns take `COL_FILL` 0.68.

Ring geometry. Gap between season shapes 2.4°; grey track leads/trails 3.0°; inset `capDegM + MARGIN`. `moonW = clamp(R × (quarterDeg − 2×MARGIN − MIN_CORE) × π/180, 7, 11)` — four/six-year cycles 11, twelve-year 7, never squeezing the inset; track `moonW+5` (16 around 11). One round-ended shape per season run (`seasonGroup`: two Springs as one, two Autumns as one), inset both ends; a one-quarter season keeps a 0.6° core; quarters butt-join at 0.35° overlap keeping `data-q`; `.cap` stubs (`data-cap`) round run ends; a hovered or parked quarter swells to 16. Track starts behind the first shape, stops ~5px short, no drop in the seam; a full cycle's badge sits on the seam; coming quarters dotted to the seam. Legend and Season Model table run Winter → Spring → Summer → Autumn, three blue rows then three orange.

## Icons and marks

Marks are drawn in the Lovable DSM repo (`src/components/gyneconomy/icons/` THERE, not in this repo), one file per mark (`LotusMark`, `SproutMark`), no index, factory or icon library; draw there, port paths in. Interface icons: inline SVG in `currentColor`, 1.8–2px strokes, round caps — tab bar, menu button (three lines), back arrow, word-tile action/mood icons, sprout, battery, Feeling's weather faces, (i) in a ring. No icon font, no emoji. `.info-btn`: 18px circle, 1px `--border-strong`, transparent, `--text-secondary`, letter Cormorant Garamond italic. Mark stroke 1.7–1.9 in the 24-unit box; band head 1.35 in CSS (13px there, 26–42px elsewhere). `dropSvg(sw)` takes stroke from the caller (1.9 at a 42px tile, 1.7 at a 15px sign mark); `circulationSvg()` calls it. Prove a new mark at 13/15/20/27/42px, the set rendered together at real size. A mark names the SUBJECT, the word the verdict: one neutral ink, never a state colour, except 48px row chips, whose wash is the severity scan; a quantity mark keeps its outline and moves only the fill. Every reading wears its mark — a row on a 48px wash chip, a card the glyph alone at 15px; inside its own page the head takes a flag instead. An empty slot draws no disc (`.subject-icon span:empty{background:none}`) but keeps its width. Wave mark (Mood): three lines 5.6 apart, amplitude 1.7, stroke 1.9, two half-waves each, 24 grid. Battery at `energyFromReserve().bars`: five 2.8-unit steps in an 18×14 body, empty at zero. Live set: sprout (Growth, `SproutMark`), battery (Power), piggy bank in three steps (Valuations), waves (Mood), blood drop (Circulation, `dropSvg`), speaker (Volume — two arcs, a third closed up at 15px), cuff (Pressure), thermometer, heartbeat, flame, gear, person, Activity's trace. App icon: host icon Moon via the Artifact tool's `icon` word, omitted on republish; lotus artwork `appicon-square.svg`, `appicon-180.png`.

## Surfaces, type-bearing pieces, bars and controls

Page order: 1 History (chart + timeline) · 2 Cycle average · 3 Blood test (`.subject`, or `.sign-detail` on Temperature) · 4 Highlights · 5 More details (`.page-foot`); sign pages too (`chartFirst`). One shape: head, then one box (`.page-chart`) — range control flush at top, chart, trend as footer under a hairline; then Highlights, then the drawer. No outer box: the section wrapper drops ground, border, radius, padding (keep an `aria-label` where a heading goes). Facts beside a reading = `.aux-stat` rows in Highlights, never a table; chooser = `seriesBar` on `rangeBar` markup. Three weights (hero, supporting, recessive): unbox a block to make it lead, or give the hero a container and let it lead on size. Keep this index current; Keren's names are canonical.

The builders are in `docs/COMPONENTS.md`.

Surfaces. Card: `--surface`, 1px `--border`, `--radius`, padding 18px 20px (14px phones), no shadow; kicker + its (i) left, sub-line right (`.cv-head`). History = BAND: white sheet off both edges (`:has(.hist-controls)`, widened `:has(.seriesbar)`, chart `> div:has(> svg)` clearing 14 of 20px); radius above 920px; pages cap 880px. A list = one container: one surface, rows, hairline per join, `overflow:hidden`. Highlights in `.metric-sheet`: `--surface-2` + `.spread-tile`. Hover `--border`→`--border-strong`, never brand; an edgeless row → `--surface-2`, its chevron → `--accent-ink`. A clipped box's overlay takes `border-radius:inherit`.

Type-bearing. `.cv-stats`: value 30 mono 700, label 11 tracked uppercase muted, trend word in its ink + arrow (↑ rising / ↓ falling / → flat). `.cv-stats.cycle-stats`: cumulative figure in a bordered box above its chart (kicker, mono figure, measure, years). `.tag`: 11/600, 3px 8px, pill, wash + severity ink; `.norm` `--track`/`--text-secondary`. Badge: same at 14px. Section head = Cormorant italic + `.sect-rule` (1px `--border-strong`, 34×3px `--accent` cap left), one word. `.highlights`: Cormorant italic head, hairline-split cards (name 11 tracked uppercase in state ink, one computed sentence primary), cycle strip (name column, track bar to scale, mono figure; open cycle primary with an `--accent` bar). Insights reuses `.hi-head`/`.hi-card`. Hub: date 14 secondary (word 600), season word 40 Cormorant, phase line 20 Cormorant `--accent-ink`, link 12.5/600 `--accent-ink`, pills Cormorant italic on bull/bear wash + ink. Word tiles: icon on a wash in its ink, word Cormorant 20, label Public Sans. `.subject-icon` (`ring()`/`dot()`/`iconMark(key,state,svg)`): 48px disc `--<state>-wash`, icon 27px `--<state>-ink` (42/24 phones). `.head-mark`: 44px target, 34px disc, reading's ink on its wash; hidden in the modal. Inner pages hide `.body-term`; `.guest-card` restores `.metric-sheet .card-head .body-term`. `FOLDED` → `.folded-sign` section, not a box: hairline, mark, name + verdict on one row, figure, spectrum, line; long form an (i).

Bars, markers. One bar: `meterHtml` — plain ground, solid `--good` optimal zone, one dot, two or three end words above. One ring (season dial) plus `vitalRingSvg` (the 0–100 chip the Fear row and the peek cards wear). `ends:{low,zone,high}` — *Slow · hoarding* / *Fast · spending* — in `1fr auto 1fr`, each under ~fifteen characters or it wraps at 360px. Marker: on the track, wider than it — surface fill, `--border-strong` hairline, soft lift (year badge = Pressure cursor at two sizes), sibling under a wrapper, never in a clipped track; in a gapped track it rides its own band; on a banded track it wears the band's colour at full strength. One ruler per list, bars starting at one x; an unfinished bar runs full width, remainder dotted. `colRule`: a diverging peek gets an `--accent` hairline at the baseline.

Controls. `.rangebar`: segmented over the chart, only ranges the data answers, nothing below two stops; `timelineWindow()` anchors to the SERIES' last year. a page takes a subset of `TIMELINE_STOPS` in its order (the list is in Charts); "This cycle" never with 5Y; no 50Y. History opens on Cycles, current cycle; `pageRange` default `10y`. On the white band, outlined: `--surface` ground, 1px `--accent`, selected segment `--accent` + `--on-accent` (5.9:1 L, 8.7:1 D); `--track` for controls on PAGE colour (indicators tabs, spread toggle, tab bar); `--ctl-h` fixed on both; labels nowrap + ellipsis. History's controls = one row: mode bar (two fixed words) left, cycle picker or years ruler right; dropdowns size to content off the right edge. `.trendpill`: least-squares over the series in view, own units per period; under eight readings "not available" + why; states distance travelled, not slope ("0.6 points across 18 quarters"). Second layer = a button: fills accent, readings full height with no colour, other figures dim; shares `--accent`/`--accent-wash`. Multiselect: 34px pill trigger (`--border-strong`, 12.5/600, a dot per chosen item, muted caret, accent border open); panel `--surface`, strong border, 8px padding, tracked 11 label, 44px rows split by 1px rules, `accent-color` checkbox, dot, name, code mono muted right, hover `--surface-2`, `--accent-wash` under rows that are on; trigger dots overlap 4px with a `--surface` ring. Tab bar: segmented on desktop; phones a fixed floating pill on solid `--surface`, `--border-strong` edge, no shadow, muted labels, active `--text-primary` + icon on a round `--accent-wash` chip. Top bar: sticky, blurred `--page`, title centred Cormorant italic 600 23 (`.topbar-title`; 21 under 400px), round 44px `.menu-btn` (fries right, back left when a cycle or sheet is open); `--border` hairline under sticky translucency. Buttons: `--accent`, `--on-accent`, pill, 600; hover `--accent-ink`. `.more-row`: accent-wash pill at a page's END on page ground, 1px `--accent-ink`; `.cyc-more` takes the card's padding + hairline above, chevron quarter-turning on open. `.page-foot`: timing chip + More details pill.

Preview `.peek`: half-width card, 2-up grid — kicker 11 tracked uppercase muted, figure mono 700 + 11px unit (`.peek-unit`, the card's scale), state word 700 and neutral, then the peek chart; at ≥760px it turns on its side, reading in a 150px column; the whole card is a button. One order — name, picture, reading — one layout at every width, same child order and height. Head: mark in neutral, name, chevron (`.peek-chev`, a 1.4px hairline). Twelve marks (`PEEK_MARKS`), no window named, no reference line; all but the latest `.past` (full height, no colour); the gauge stays lit. The live mark wears its own page's chart class — `.temp-col.s0–s5`, `.gdp-col`, `.dv-bar.over/.under`, `.m2-col`, `.rgauge.<state> .rg-seg.on` — never via `!important`; exceptions `.peek-base` (brand) and the pulse trace (plum). `.peek:hover` → `--border-strong`, chevron `--accent-ink`. `.ci-mini`: history + frames `--border-strong`, newest mark `--accent-ink`, never a STATE colour. `title` feeds `data-title` + aria-label, defaulting to the kicker. `catItem()`: mark + name lead, PERIOD + chevron close, reading beside a miniature of its own page.

Per page: Growth HISTORY `.growth-col` `--good`, `.growth-col.down` `--season-summer`; `--phase-up`/`--phase-down` are the Cycle tab's phase strip. `.m2-col` = the six-step red ramp; `.drain` retired. Everything below a chart describes the window on screen, and no caption out-claims its window.

Tables, sheets, motion. No sideways scroll: ≤640px a row stacks — name line (flag or value right), sub-line, bar or range full width. Sheets full-screen from the menu (Guide: How to read, About the book; Resources: Sources, Contact; Appearance: Theme row → its own sheet, 30px voice title, three rows, 64px preview tiles, purple check). Every (i) opens the shared detail modal — bottom sheet on phones, 44px round X — over `--overlay`, title the reading head at 26px. `.metric-sheet` in `#metric-page` replaces the Cycle tab (metric name + back arrow in the top bar; the drawer loses summary row, border, ground). Deeper pushes in from the right, back slides out the same way; arrive decelerating (`cubic-bezier(.22,.61,.36,1)`, ~340ms), leave accelerating (~260ms); `prefers-reduced-motion` = a plain fade. Say a thing once: a name once per screen, one of each reading per page, no figure restated by its own picture, by cycle = the AVERAGE never the total, one long form per page at the end.

## Wording

Hormones = the policy rate, Pressure = the Treasury level (economic term "Treasury yield curve"), never "Yield curve"; Fear, not "Fear & Greed" or "Sentiment"; Households, not "Debt service"; its reading as a cuff writes one — `4.94/4.12`, long end over short — in `.cv-stats.cycle-stats`, the verdict that box's kicker. Valuations, plural ("Valuations say"). Growth, not "GDP growth"; Power, not "Economic power". Federal budget, not "deficit rate" — a series crossing zero takes the neutral noun, the sub-line both directions ("federal deficit or surplus ÷ GDP"). Peak year, never "the cycle's peak". Bull year / Bear year. Cycle year N. GDP growth. Temperature. warm · 1–3%, never "in range". expanding / contracting / steady — never "positive growth", "negative growth", "rising" or "falling" on screen; the model keeps `expansion`/`contraction`, `GROWTH_SHOWN` maps them. Seasons as *Spring — Deflation*; "Late" never used. Tags: rising / falling / flat; good / warning / serious / critical. Timeline stops always from `TIMELINE_STOPS`, never renamed ("By cycle", "Years"). Figures and dates stated where doubted ("Data compiled Sep 17, 2026" in the Sources lede); sources on the Sources screen only. The section carrying a sentence about the figures above it = Insights.

## Accessibility

Floors: text 4.5:1, graphics 3:1, both themes. Touch targets 44px, small marks meeting it with an invisible disc: `.info-btn, .expand-btn{position:relative; flex:none}` + `::before` at `position:absolute; width:44px; height:44px; top:50%; left:50%; transform:translate(-50%,-50%)`; `flex:none` stops a parent squeezing it to an ellipse; check the control is not inside a clickable row. Dark theme designed, not inverted; the reader pins a theme from Appearance (`data-theme` on `<html>`), else the device decides. Every hover has a tap equivalent. Nothing colour-alone: tags and legends carry words; every dial quarter is named in the hub when read. `prefers-reduced-motion` respected. Order the DOM, not the paint — sort on `appendChild`, not flex `order`. Keep an `aria-label` where a heading is lost. Measure the rendered page, not the stylesheet: assert on what a reader can SEE (computed opacity, colour, a screenshot).

---

# Part 3 — Mechanics that are not design


**CSS cascade / DOM.** Specificity ties are the standing hazard — `.a .b` and `.b.c` are both (0,2,0), later wins
silently; MOVE the rule, never add weight; find it by measuring. Equal specificity loses the whole shorthand.
`cycleStrip`'s state rules sit after `.hi-cycle.now .hi-cycle-bar i` on purpose. `:last-of-type` matches the same
TAG. A class `display` rule out-weighs `hidden` → `[hidden]{display:none}`. A class cannot out-weigh an inline
style. Vertical margins do nothing on an inline box (`.peek-chart`). Changing a formatting context silently
resizes children (`.ci-mini` → flex: 137px → 10). `getComputedStyle` returns used values. An SVG path with no
declared fill fills black; grep chart class names in the JS before deleting CSS.

**Rendering / lifecycle.** A hidden element has no width — `sheetRenderers` draws on open at measured width
(viewBox units 1:1), redrawing on resize. `collapseEmptyBlocks()` measures, after the sheet is on screen (`:empty`
misses a closed `<details>`); `seatPageFoot` fires while hidden; the seating pass runs at build and on open.
Position against a live node and by class (`insertAdjacentElement("afterend")`). Bind chart hover once per host
and guard it; delegated `.range-seg` / `.rbar-stop` handlers; `pageRange` / `sheetRenderers` keys;
`attachHoverTracking` for the spread chart. Reorder by MOVING the node. `hidden=false` on `opacity:0` gives size and no paint; hovers listen on
`pointermove`. To animate from `display:none`: un-hide, read `offsetWidth`, add the class, close on
`transitionend` matched on `propertyName` with a timeout fallback. `textContent` glues a card's parts together —
clone and lift out unit and tag. `.metric-sheet .timing-row{display:none}` only where `:has(> .more-row)`.
`FOLDED` signs still register their timing class; `shortCaption:""` yields silence.

**Build tooling.** One file built by `rep(old, new)`, whose anchor assert says nothing about well-formedness (V293 left
`.spread-history{` unclosed; 729 of 910 rules died) — read replacements whole. `\uXXXX` is a JS-string escape, literal
text in HTML markup; the file mixes real punctuation and escapes, so check with `repr` / `cat -A`. This Python's raw
strings do not preserve `\uXXXX` — write `"\\u2014"`. The suite's `stylesheet intact` check reads the LAST selector, which must be `a:hover`; a rule count was checked too until V625, when it was found to do nothing but ask to be blessed.

**Publishing / platform.** The page's icon links do nothing on a phone (sandboxed iframe on claudeusercontent.com; the
home-screen icon comes from the claude.ai wrapper); the Artifact `icon` word is a fixed set (chart, moon, sun, heart,
orbit, activity, temperature, calendar, star, globe) with no lotus; the icon artwork is `assets/`. Theme choice in `localStorage`. Keren's email is assembled by the Contact form at send time, never in
the markup.

**Repo / Lovable.** Gyneconomy DSM: tokens in `src/styles.css` (light `:root`, dark `.dark`), showcase for Colour,
Type, Components, Icon. Editor https://lovable.dev/projects/342f83b9-eb2b-4ba2-96e9-7627a1f9cdc1 · preview
https://id-preview--342f83b9-eb2b-4ba2-96e9-7627a1f9cdc1.lovable.app. Its project knowledge is a pointer to this file, never a copy. A design lab now, the home for a full port later (hosting, domain, lotus icon, installability);
its investment components (portfolio card, holdings) have no counterpart in the app.
`src/components/gyneconomy/icons/` is where a mark is drawn before porting.

**Open items, not rules.** Older fixed-viewBox charts should move to render-width drawing
when touched. A page that gained a windowed row may still carry a fixed card from before it did.
