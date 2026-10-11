# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,853 lines** in 44 files, about 605 KB, roughly **172 thousand tokens**. No session can
read it whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Use the **anchor** column with grep —
> `grep -rn 'function curveVerdict(' src/` — and treat `file:line` as rough orientation only.

Generated from commit `4880794` on 2026-10-11.

## The page

`src/manifest.json` joins these parts into `index.html`. The `.js` entry is bundled by esbuild
(`tools/bundle.js`) into one script in its place.

| Part | Lines | What |
|---|---|---|
| `page-head.html` | 5 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist |
| `styles.css` | 1,168 | the whole stylesheet, every token and rule |
| `page-body.html` | 247 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| `js/main.ts` | 40 modules | the entry: imports every module and calls their boots in order |
| `page-tail.html` | 45 | the bundle's closing tag, the service-worker registration, </body></html> |

Counts: **40** modules, **812** top-level functions, **124** top-level vars, **393** exported names, **20** boots.

## Modules, in boot order

| Module | Lines | Declarations | Imports from |
|---|---|---|---|
| `js/dom.ts` | 158 | 28 | `format` |
| `js/live.ts` | 213 | 23 | `format` |
| `js/refresh-season.ts` | 41 | 5 | `format`, `history-fred` |
| `js/data.ts` | 550 | 77 | `format`, `history-fred`, `live` |
| `js/credit.ts` | 135 | 10 | `activity`, `charts`, `concentration`, `data`, `format`, `history-fred` |
| `js/model.ts` | 419 | 64 | `data`, `dom`, `format`, `history-fred`, `live`, `refresh-season` |
| `js/history.ts` | 498 | 54 | `charts`, `data`, `dom`, `format`, `live`, `model` |
| `js/readings.ts` | 705 | 66 | `charts`, `credit`, `data`, `format`, `history-fred`, `live`, `model`, `refresh-season` |
| `js/roster.ts` | 163 | 6 | `activity`, `concentration`, `credit`, `data`, `format`, `history`, `history-fred`, `live`, `marks`, `refresh-season` |
| `js/render-core.ts` | 157 | 22 | `dom`, `format`, `live`, `model`, `refresh-season`, `roster` |
| `js/render-pages.ts` | 357 | 19 | `charts`, `data`, `dom`, `format`, `history`, `history-charts`, `history-fred`, `live`, `model`, `reading`, `readings` |
| `js/diagnosis.ts` | 84 | 11 | `ai-insights`, `cycle-analysis`, `data`, `dom`, `format`, `live`, `marks`, `model`, `refresh-season`, `render-core` |
| `js/dial-cycle.ts` | 313 | 22 | `cycle-analysis`, `data`, `diagnosis`, `dial-ring`, `dom`, `format`, `live`, `marks`, `model`, `refresh-season`, `render-core`, `render-pages`, `roster` |
| `js/analysis.ts` | 79 | 6 | `data`, `diagnosis`, `dial-cycle`, `dom`, `format`, `history`, `live`, `marks`, `model`, `render-core`, `render-pages` |
| `js/portfolio.ts` | 108 | 17 | `data`, `dom`, `format`, `marks`, `model`, `render-core` |
| `js/pages-nav.ts` | 141 | 12 | `dial-cycle`, `dom`, `indicators`, `inner-pages`, `live`, `pressure`, `reading`, `render-core`, `render-pages` |
| `js/tabs-menu.ts` | 244 | 16 | `data`, `dial-cycle`, `dom`, `format`, `live`, `model`, `refresh-season`, `roster`, `sources` |
| `js/repaint.ts` | 40 | 5 | `ai-insights`, `cycle-analysis`, `data`, `diagnosis`, `dom`, `live`, `model`, `readings`, `render-core` |
| `js/activity.ts` | 60 | 5 | `data`, `format`, `history-fred`, `refresh-season` |
| `js/ai-insights.ts` | 66 | 14 | `cycle-analysis`, `data`, `dial-ring`, `dom`, `format`, `marks`, `model`, `refresh-season`, `render-core`, `roster` |
| `js/charts.ts` | 261 | 35 | `format` |
| `js/concentration.ts` | 48 | 5 | `data`, `format`, `history-fred` |
| `js/cycle-analysis.ts` | 497 | 138 | `charts`, `data`, `dom`, `era`, `fed-phases`, `format`, `history`, `insights`, `marks`, `model`, `reading`, `refresh-season`, `render-core`, `roster` |
| `js/dial-ring.ts` | 94 | 4 | `data`, `model`, `refresh-season` |
| `js/era.ts` | 16 | 2 | `reading` |
| `js/fed-phases.ts` | 75 | 13 | `data`, `dom`, `format`, `history-fred`, `marks`, `model`, `refresh-season`, `render-core`, `roster`, `wave-chart` |
| `js/format.ts` | 106 | 44 | — |
| `js/history-charts.ts` | 205 | 19 | `charts`, `data`, `format`, `history`, `history-fred`, `readings`, `refresh-season` |
| `js/history-fred.ts` | 33 | 15 | — |
| `js/indicators.ts` | 174 | 30 | `charts`, `credit`, `data`, `format`, `history`, `history-fred`, `model`, `reading`, `readings`, `refresh-season`, `roster` |
| `js/inner-pages.ts` | 219 | 16 | `charts`, `data`, `dial-cycle`, `dom`, `format`, `history`, `history-charts`, `indicators`, `model`, `reading`, `readings`, `refresh-season`, `render-core`, `roster` |
| `js/insights.ts` | 183 | 18 | `data`, `dom`, `format`, `model`, `readings`, `refresh-season`, `roster` |
| `js/marks.ts` | 60 | 28 | — |
| `js/pressure.ts` | 374 | 19 | `charts`, `data`, `dom`, `format`, `history`, `history-charts`, `history-fred`, `live`, `model`, `pulse-strips`, `reading`, `readings`, `rhythm`, `roster` |
| `js/pulse-strips.ts` | 168 | 20 | `charts`, `data`, `format` |
| `js/reading.ts` | 96 | 12 | `charts`, `dom`, `format`, `history`, `render-core`, `roster` |
| `js/rhythm.ts` | 46 | 7 | `data`, `format` |
| `js/sources.ts` | 57 | 5 | `cycle-analysis`, `data`, `diagnosis`, `dom`, `insights`, `portfolio`, `reading`, `readings`, `roster` |
| `js/wave-chart.ts` | 101 | 24 | `format` |
| `js/main.ts` | 44 | 0 | `analysis`, `credit`, `data`, `diagnosis`, `dial-cycle`, `dom`, `history`, `live`, `model`, `pages-nav`, `portfolio`, `readings`, `refresh-season`, `render-core`, `render-pages`, `repaint`, `roster`, `tabs-menu` |

## The boots

A module's top level holds only declarations and values that need nothing else. Whatever runs
at load and reads another module sits in its `boot…()` function, and `js/main.ts` calls them in
this order. `tools/load-order.js` proves no shared value is read before something sets it.

| Order | Boot | Lines |
|---|---|---|
| 1 | `bootDom` | `js/dom.ts:148`–157 |
| 2 | `bootDone` | `js/live.ts:204`–206 |
| 3 | `bootLive` | `js/live.ts:207`–212 |
| 4 | `bootRefreshSeason` | `js/refresh-season.ts:33`–40 |
| 5 | `bootData` | `js/data.ts:497`–549 |
| 6 | `bootCredit` | `js/credit.ts:127`–134 |
| 7 | `bootModel` | `js/model.ts:397`–418 |
| 8 | `bootHistory` | `js/history.ts:474`–497 |
| 9 | `bootReadings` | `js/readings.ts:523`–571 |
| 10 | `bootReadingRegistry` | `js/readings.ts:638`–704 |
| 11 | `bootRoster` | `js/roster.ts:150`–162 |
| 12 | `bootRenderCore` | `js/render-core.ts:151`–156 |
| 13 | `bootRenderPages` | `js/render-pages.ts:348`–353 |
| 14 | `bootDiagnosis` | `js/diagnosis.ts:80`–83 |
| 15 | `bootDialCycle` | `js/dial-cycle.ts:291`–312 |
| 16 | `bootAnalysis` | `js/analysis.ts:74`–78 |
| 17 | `bootPortfolio` | `js/portfolio.ts:107`–? |
| 18 | `bootPagesNav` | `js/pages-nav.ts:135`–140 |
| 19 | `bootTabsMenu` | `js/tabs-menu.ts:233`–243 |
| 20 | `bootRepaint` | `js/repaint.ts:26`–39 |

## Script, module by module

Each module's banner comments are its spine. Each declaration is listed under the section it
falls in. **export** marks a name other modules import.

### `js/dom.ts`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 19 | `byId` · export | `function byId(` |
| 27 | `need` · export | `function need(` |
| 32 | `byIdMaybe` · export | `function byIdMaybe(` |
| 33 | `put` · export | `function put(` |
| 39 | `layer` · export | `function layer(` |
| 40 | `onScreen` · export | `function onScreen(` |
| 41 | `focusQuiet` · export | `function focusQuiet(` |
| 42 | `tabStops` | `function tabStops(` |
| 46 | `keepTab` | `function keepTab(` |
| 52 | `rovingKeys` · export | `function rovingKeys(` |
| 67 | `trendText` · export | `function trendText(` |
| 68 | `trendHead` · export | `function trendHead(` |
| 69 | `trendCard` | `function trendCard(` |
| 72 | `trendDoor` · export | `function trendDoor(` |
| 75 | `learnMore` · export | `function learnMore(` |
| 76 | `trendBox` · export | `function trendBox(` |
| 77 | `trendSoon` · export | `function trendSoon(` |
| 80 | `moreRow` · export | `function moreRow(` |
| 84 | `moreDoor` | `function moreDoor(` |
| 87 | `moreButton` · export | `function moreButton(` |
| 90 | `wireMore` · export | `function wireMore(` |
| 94 | `viewMore` · export | `function viewMore(` |
| 104 | `appendSvgMarkup` · export | `function appendSvgMarkup(` |
| 113 | `addSources` · export | `function addSources(` |
| 124 | `SVG_NS` | `var SVG_NS =` |
| 125 | `svgEl` · export | `function svgEl(` |
| 131 | `detailSlot` · export | `function detailSlot(` |
| 141 | `expandBtn` · export | `function expandBtn(` |

### `js/live.ts`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 27 | `docValue` | `function docValue(` |
| 36 | `docOk` | `function docOk(` |
| 40 | `datedOk` | `function datedOk(` |
| 43 | `plainText` · export | `function plainText(` |
| 48 | `liveIsoOf` · export | `function liveIsoOf(` |
| 51 | `newestDay` | `function newestDay(` |
| 56 | `raiseFloor` | `function raiseFloor(` |
| 61 | `olderThanFile` | `function olderThanFile(` |
| 65 | `liveInto` · export | `function liveInto(` |
| 69 | `landLive` | `function landLive(` |

#### Repaint

| Line | Name | Anchor |
|---|---|---|
| 79 | `repaintLive` · export | `function repaintLive(` |
| 84 | `shapeOk` | `function shapeOk(` |
| 116 | `defineReadings` · export | `function defineReadings(` |
| 120 | `onLive` · export | `function onLive(` |
| 121 | `exposeLive` · export | `function exposeLive(` |
| 124 | `KINDS` | `var KINDS =` |
| 125 | `checkLiveCoverage` · export | `function checkLiveCoverage(` |
| 139 | `receive` | `function receive(` |
| 152 | `applyLive` | `function applyLive(` |
| 159 | `refreshLiveData` · export | `function refreshLiveData(` |
| 176 | `fetchSiteData` · export | `function fetchSiteData(` |
| 189 | `siteFile` | `function siteFile(` |
| 197 | `forgetLive` · export | `function forgetLive(` |

### `js/refresh-season.ts`

#### Today's date

| Line | Name | Anchor |
|---|---|---|
| 6 | `hubTodayHtml` · export | `function hubTodayHtml(` |
| 10 | `asOfLabel` · export | `function asOfLabel(` |

#### SEASON

| Line | Name | Anchor |
|---|---|---|
| 24 | `PCE_FROM` | `var PCE_FROM =` |
| 26 | `gdpQuarterlyYoY` · export | `var gdpQuarterlyYoY =` |
| 30 | `fedGauge` | `function fedGauge(` |

### `js/data.ts`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 7 | `BUFFETT_LINE` · export | `var BUFFETT_LINE =` |
| 14 | `REPORT_ASOF` · export | `var REPORT_ASOF =` |
| 15 | `CAPE_FAIR` · export | `var CAPE_FAIR =` |
| 16 | `VIX_CALM` · export | `var VIX_CALM =` |

#### DATA (single source of truth — edit here on refresh)

| Line | Name | Anchor |
|---|---|---|
| 66 | `YIELD_CURVE_ASOF` | `var YIELD_CURVE_ASOF =` |
| 67 | `curveAsOf` · export | `function curveAsOf(` |
| 70 | `monthsToCurve` | `function monthsToCurve(` |
| 74 | `deriveUninvLag` · export | `function deriveUninvLag(` |
| 85 | `t10y3mRecessions` · export | `var t10y3mRecessions =` |

#### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

| Line | Name | Anchor |
|---|---|---|
| 96 | `UNINV_FROM` | `var UNINV_FROM =` |
| 97 | `uninvLagToday` · export | `var uninvLagToday =` |
| 101 | `HOLD_BAND` · export | `var HOLD_BAND =` |
| 129 | `labRow` · export | `function labRow(` |
| 130 | `PRODUCTIVITY_TREND` · export | `var PRODUCTIVITY_TREND =` |

#### Consumer confidence

| Line | Name | Anchor |
|---|---|---|
| 132 | `CONFIDENCE_LINE` · export | `var CONFIDENCE_LINE =` |

#### Desire: real spending on durable goods

| Line | Name | Anchor |
|---|---|---|
| 134 | `DESIRE_LINE` · export | `var DESIRE_LINE =` |

#### Desire: the equity risk premium

| Line | Name | Anchor |
|---|---|---|
| 136 | `PREMIUM_LINE` · export | `var PREMIUM_LINE =` |

#### The deficit, year by year

| Line | Name | Anchor |
|---|---|---|
| 138 | `DEF_FROM_YEAR` · export | `var DEF_FROM_YEAR =` |
| 139 | `deficitHistory` · export | `var deficitHistory =` |
| 140 | `DEF_MEAN` · export | `var DEF_MEAN =` |
| 143 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 148 | `fedFundsRange` · export | `function fedFundsRange(` |
| 152 | `buffettHistory` · export | `var buffettHistory =` |
| 171 | `syncGrossDebt` | `function syncGrossDebt(` |
| 181 | `syncFederal` | `function syncFederal(` |
| 182 | `checkFederal` | `function checkFederal(` |
| 183 | `stressOf` | `function stressOf(` |
| 187 | `deriveStress` | `function deriveStress(` |
| 188 | `checkGrossDebt` | `function checkGrossDebt(` |
| 198 | `curveAt` · export | `function curveAt(` |
| 202 | `curveNeed` | `function curveNeed(` |
| 203 | `curveSpread` · export | `function curveSpread(` |
| 204 | `policyDirection` · export | `function policyDirection(` |
| 207 | `capeAsOf` · export | `function capeAsOf(` |
| 208 | `syncCapeHistory` · export | `function syncCapeHistory(` |
| 212 | `valRow` · export | `function valRow(` |
| 216 | `fileRow` · export | `function fileRow(` |
| 217 | `M2V_FROM_YEAR` · export | `var M2V_FROM_YEAR =` |
| 218 | `m2vHistory` · export | `var m2vHistory =` |
| 219 | `m2vPre` | `var m2vPre =` |
| 220 | `PULSE_PRE2008` · export | `var PULSE_PRE2008 =` |
| 221 | `PULSE_STEADY_LO` · export | `var PULSE_STEADY_LO =` |
| 222 | `PULSE_FLOOR` · export | `var PULSE_FLOOR =` |
| 240 | `checkVelocityHistory` | `function checkVelocityHistory(` |
| 245 | `M2_FROM_YEAR` · export | `var M2_FROM_YEAR =` |
| 246 | `m2Level` | `var m2Level =` |
| 247 | `m2Yoy` · export | `var m2Yoy =` |
| 248 | `m2Ref` | `var m2Ref =` |
| 249 | `M2_PACE_LO` · export | `var M2_PACE_LO =` |
| 250 | `M2_NORM` · export | `var M2_NORM =` |
| 251 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 252 | `unempHistory` · export | `var unempHistory =` |
| 256 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 264 | `SAHM_TRIGGER` · export | `var SAHM_TRIGGER =` |
| 265 | `unempSahm` · export | `var unempSahm =` |
| 266 | `avg3` | `function avg3(` |
| 270 | `sahmAt` | `function sahmAt(` |
| 275 | `sahmOf` · export | `function sahmOf(` |
| 279 | `NROU_NOW` · export | `var NROU_NOW =` |
| 280 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 287 | `ACT_BAND_LO` · export | `var ACT_BAND_LO =` |
| 288 | `CPI_TARGET` · export | `var CPI_TARGET =` |
| 292 | `FED_TARGET_SRC` · export | `var FED_TARGET_SRC =` |
| 293 | `TEMP_BAND_LO` · export | `var TEMP_BAND_LO =` |
| 294 | `PCE_SWITCH_SRC` · export | `var PCE_SWITCH_SRC =` |
| 295 | `PCE_SRC` · export | `var PCE_SRC =` |
| 296 | `GDP_NORM` · export | `var GDP_NORM =` |
| 297 | `checkMoneyStock` | `function checkMoneyStock(` |
| 342 | `DSR_FROM_YEAR` · export | `var DSR_FROM_YEAR =` |
| 345 | `SAV_FROM_YEAR` · export | `var SAV_FROM_YEAR =` |
| 346 | `savHistory` · export | `var savHistory =` |
| 348 | `SAV_THIN` · export | `var SAV_THIN =` |
| 349 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 355 | `DSR_MEAN` · export | `var DSR_MEAN =` |
| 356 | `curveNoteFull` · export | `var curveNoteFull =` |
| 367 | `VOL_JOIN` · export | `var VOL_JOIN =` |
| 489 | `typicalCycleYears` · export | `var typicalCycleYears =` |

### `js/credit.ts`

#### Credit, households and debt: consumer credit, margin debt, the saving rate, the debt-to-income ratio and delinquencies

| Line | Name | Anchor |
|---|---|---|
| 12 | `CONSUMER_LINE` · export | `var CONSUMER_LINE =` |
| 36 | `avgSpan` | `function avgSpan(` |
| 37 | `consumerWord` | `function consumerWord(` |
| 41 | `marginWord` | `function marginWord(` |
| 45 | `savingWord` | `function savingWord(` |
| 52 | `debtPaymentsWord` | `function debtPaymentsWord(` |
| 57 | `householdSpecs` | `function householdSpecs(` |
| 76 | `delinquencyWord` | `function delinquencyWord(` |
| 81 | `specs` | `function specs(` |
| 106 | `readingOf` | `function readingOf(` |

### `js/model.ts`

#### The season, computed

| Line | Name | Anchor |
|---|---|---|
| 14 | `monthIndex` | `function monthIndex(` |
| 15 | `cpiTrend` | `function cpiTrend(` |
| 22 | `cpiPositions` | `function cpiPositions(` |
| 30 | `cpiWindow` | `function cpiWindow(` |
| 35 | `cpiYear` | `function cpiYear(` |
| 38 | `cpiDirectionOf` | `function cpiDirectionOf(` |
| 39 | `cpiDirectionAt` · export | `function cpiDirectionAt(` |
| 43 | `PEAK_YEARS` · export | `var PEAK_YEARS =` |
| 46 | `regimeOf` | `function regimeOf(` |
| 49 | `readSeason` | `function readSeason(` |
| 60 | `potentialOf` · export | `function potentialOf(` |
| 65 | `peakTrend` | `function peakTrend(` |
| 70 | `gnpYear` | `function gnpYear(` |
| 73 | `gnpTrend` | `function gnpTrend(` |
| 76 | `gnpYoY` | `function gnpYoY(` |
| 85 | `closingReading` | `function closingReading(` |
| 89 | `qIndex` | `function qIndex(` |
| 90 | `recessionRecord` · export | `function recessionRecord(` |
| 115 | `regimeAt` | `function regimeAt(` |
| 116 | `seasonTitle` · export | `function seasonTitle(` |
| 117 | `cycleReturns` · export | `function cycleReturns(` |
| 127 | `cycleModel` · export | `function cycleModel(` |
| 166 | `potentialGap` · export | `function potentialGap(` |
| 170 | `seasonWhyFor` | `function seasonWhyFor(` |
| 176 | `pricesWord` | `function pricesWord(` |
| 180 | `inflationFigure` · export | `function inflationFigure(` |
| 185 | `growthWord` · export | `function growthWord(` |
| 188 | `contractingClause` | `function contractingClause(` |
| 192 | `cycleNowNote` · export | `function cycleNowNote(` |
| 200 | `seasonOfQ` · export | `function seasonOfQ(` |
| 201 | `seasonGroup` · export | `function seasonGroup(` |

#### The diagnosis: how she feels, and what has followed

| Line | Name | Anchor |
|---|---|---|
| 203 | `rankToDate` · export | `function rankToDate(` |
| 207 | `diagnoseToday` · export | `function diagnoseToday(` |

#### Her mood: one range from Depression to Mania

| Line | Name | Anchor |
|---|---|---|
| 212 | `rankBefore` | `function rankBefore(` |
| 213 | `rankMemo` | `var rankMemo =` |
| 214 | `rankAt` | `function rankAt(` |
| 220 | `rankIn` | `function rankIn(` |
| 226 | `moodSeries` | `function moodSeries(` |
| 234 | `moodAt` | `function moodAt(` |
| 240 | `MOOD_TURN` · export | `var MOOD_TURN =` |
| 243 | `moodWord` | `function moodWord(` |
| 247 | `moodRead` | `function moodRead(` |
| 255 | `moodTrack` · export | `function moodTrack(` |
| 261 | `moodToday` · export | `function moodToday(` |
| 265 | `moodSince` | `function moodSince(` |
| 266 | `cycleStory` · export | `function cycleStory(` |

#### Cycles by name

| Line | Name | Anchor |
|---|---|---|
| 277 | `cycleOfYear` · export | `function cycleOfYear(` |
| 278 | `cycleByName` · export | `function cycleByName(` |
| 282 | `openCycle` · export | `function openCycle(` |
| 286 | `cycleSlice` · export | `function cycleSlice(` |
| 294 | `totalGrowthYears` · export | `function totalGrowthYears(` |
| 302 | `cycLabel` · export | `function cycLabel(` |
| 306 | `cycleQtrIdx` · export | `function cycleQtrIdx(` |
| 311 | `totalRiseIn` · export | `function totalRiseIn(` |
| 321 | `yearInflation` · export | `function yearInflation(` |
| 325 | `yearGrowth` · export | `function yearGrowth(` |
| 328 | `yearSoFar` · export | `function yearSoFar(` |
| 332 | `eraInflation` · export | `function eraInflation(` |
| 341 | `eraGrowth` · export | `function eraGrowth(` |
| 357 | `eraMarketTotal` · export | `function eraMarketTotal(` |
| 362 | `forgetMood` · export | `function forgetMood(` |
| 368 | `seasonEarly` | `function seasonEarly(` |
| 380 | `seasonQuarters` | `function seasonQuarters(` |
| 392 | `regimes` | `function regimes(` |

### `js/history.ts`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 13 | `page` · export | `var page =` |

#### the history card's head

| Line | Name | Anchor |
|---|---|---|
| 24 | `DOTS` | `var DOTS =` |
| 26 | `TICK` | `var TICK =` |
| 27 | `menuOption` | `function menuOption(` |
| 28 | `menuName` | `function menuName(` |
| 29 | `headPickRow` · export | `function headPickRow(` |
| 32 | `histHead` · export | `function histHead(` |
| 43 | `headDots` | `function headDots(` |
| 48 | `headInfo` | `function headInfo(` |
| 52 | `headBtn` | `function headBtn(` |
| 55 | `headNote` | `function headNote(` |
| 63 | `headMenuHtml` | `function headMenuHtml(` |
| 83 | `paintHeadMenus` | `function paintHeadMenus(` |
| 94 | `headMoreBtn` | `function headMoreBtn(` |
| 98 | `headMenuFirst` | `function headMenuFirst(` |
| 102 | `headMenuShut` | `function headMenuShut(` |
| 107 | `histNote` · export | `function histNote(` |
| 108 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |
| 114 | `timelineSpan` · export | `function timelineSpan(` |
| 118 | `timelineFor` | `function timelineFor(` |
| 132 | `windowScale` · export | `function windowScale(` |
| 147 | `histReadEnsure` | `function histReadEnsure(` |
| 167 | `geomFmt` | `function geomFmt(` |
| 168 | `attrNum` | `function attrNum(` |
| 169 | `histReadFill` | `function histReadFill(` |
| 217 | `histAxisEnds` | `function histAxisEnds(` |
| 228 | `histLegend` | `function histLegend(` |
| 287 | `refitHistory` · export | `function refitHistory(` |
| 297 | `geomX` | `function geomX(` |
| 300 | `geomPick` | `function geomPick(` |
| 306 | `TOUCH_HOLD` | `var TOUCH_HOLD =` |
| 307 | `touchGate` | `function touchGate(` |
| 326 | `wireHistHover` | `function wireHistHover(` |
| 354 | `histShow` | `function histShow(` |
| 363 | `histLive` | `function histLive(` |
| 370 | `histKeysWire` | `function histKeysWire(` |
| 384 | `mWindowFrom` | `function mWindowFrom(` |
| 388 | `monthWindow` · export | `function monthWindow(` |
| 392 | `qWindowFrom` · export | `function qWindowFrom(` |
| 396 | `defFrom` · export | `function defFrom(` |
| 400 | `tabSegs` | `function tabSegs(` |
| 408 | `tabBar` · export | `function tabBar(` |
| 411 | `modeBar` | `function modeBar(` |
| 415 | `controlKeys` · export | `function controlKeys(` |
| 419 | `controlKeysIn` | `function controlKeysIn(` |
| 425 | `histControls` · export | `function histControls(` |
| 433 | `controlsBox` | `function controlsBox(` |
| 434 | `pageCycle` · export | `function pageCycle(` |
| 439 | `cyclePicker` | `function cyclePicker(` |
| 451 | `pickRow` | `function pickRow(` |
| 454 | `nameAside` | `function nameAside(` |
| 455 | `rangeBar` | `function rangeBar(` |
| 459 | `headSigma` · export | `function headSigma(` |
| 464 | `attachHistory` · export | `function attachHistory(` |

### `js/readings.ts`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 25 | `productivityWord` | `function productivityWord(` |
| 36 | `confidenceWord` | `function confidenceWord(` |
| 41 | `desireWord` | `function desireWord(` |
| 46 | `deficitInfoHtml` · export | `function deficitInfoHtml(` |
| 98 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 102 | `meterFlagged` · export | `function meterFlagged(` |
| 106 | `volumeInfoHtml` · export | `function volumeInfoHtml(` |
| 120 | `pulseInfoHtml` · export | `function pulseInfoHtml(` |
| 133 | `confidenceInfoHtml` | `function confidenceInfoHtml(` |
| 144 | `desireInfoHtml` | `function desireInfoHtml(` |
| 154 | `premiumInfoHtml` | `function premiumInfoHtml(` |
| 165 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 178 | `activityInfoHtml` · export | `function activityInfoHtml(` |
| 196 | `bandMonths` | `function bandMonths(` |
| 199 | `temperatureInfoHtml` · export | `function temperatureInfoHtml(` |
| 228 | `volumeVerdict` · export | `function volumeVerdict(` |
| 235 | `unempState` · export | `function unempState(` |
| 240 | `sahmNow` | `function sahmNow(` |
| 241 | `potentialSentence` | `function potentialSentence(` |
| 249 | `growthInfoHtml` · export | `function growthInfoHtml(` |
| 268 | `velocityVerdict` | `function velocityVerdict(` |
| 276 | `laborWord` · export | `function laborWord(` |
| 279 | `temperatureWord` · export | `function temperatureWord(` |
| 284 | `deriveLaggingTags` | `function deriveLaggingTags(` |
| 290 | `derivePulseTag` | `function derivePulseTag(` |
| 323 | `volatilityTag` · export | `function volatilityTag(` |
| 329 | `fearCurve` · export | `function fearCurve(` |
| 334 | `curveVerdict` · export | `function curveVerdict(` |
| 339 | `valuationVerdict` · export | `function valuationVerdict(` |
| 347 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 351 | `pressureZone` · export | `function pressureZone(` |
| 357 | `HZN_BACK` | `var HZN_BACK =` |
| 358 | `hznLast` | `function hznLast(` |
| 359 | `hznNeed` | `function hznNeed(` |
| 360 | `hznDelta` | `function hznDelta(` |
| 361 | `hznRecord` | `function hznRecord(` |
| 365 | `hznBack` | `function hznBack(` |
| 366 | `horizonWord` | `function horizonWord(` |
| 371 | `tendencyOf` · export | `function tendencyOf(` |
| 383 | `derivePressureTendency` | `function derivePressureTendency(` |
| 384 | `horizonInfoHtml` · export | `function horizonInfoHtml(` |
| 405 | `pulseCard` · export | `function pulseCard(` |
| 410 | `volatilityDetailHtml` · export | `function volatilityDetailHtml(` |
| 424 | `marketWord` | `function marketWord(` |
| 428 | `marketCol` | `function marketCol(` |
| 429 | `marketInfoHtml` | `function marketInfoHtml(` |
| 435 | `rowReadings` · export | `function rowReadings(` |
| 436 | `indOf` · export | `function indOf(` |
| 437 | `policyFacts` | `function policyFacts(` |
| 444 | `nextDecision` | `function nextDecision(` |
| 445 | `policyFactRows` · export | `function policyFactRows(` |
| 448 | `gdpWord` · export | `function gdpWord(` |
| 449 | `phaseClass` · export | `function phaseClass(` |
| 454 | `deriveFeelingReadings` | `function deriveFeelingReadings(` |

#### Temperature's notes

| Line | Name | Anchor |
|---|---|---|
| 572 | `yearReading` | `function yearReading(` |
| 590 | `isNum` | `function isNum(` |
| 592 | `rowId` | `function rowId(` |
| 593 | `rowLike` | `function rowLike(` |
| 606 | `rowsOk` | `function rowsOk(` |
| 609 | `deriveHorizon` | `function deriveHorizon(` |
| 623 | `fieldsKept` | `function fieldsKept(` |
| 627 | `proseOk` | `function proseOk(` |
| 628 | `reportOk` | `function reportOk(` |
| 632 | `vixAsOf` | `function vixAsOf(` |
| 633 | `coincidentAsOf` | `function coincidentAsOf(` |
| 634 | `periodIso` · export | `function periodIso(` |

### `js/roster.ts`

#### The roster: every reading, declared once

| Line | Name | Anchor |
|---|---|---|
| 38 | `keyed` · export | `function keyed(` |
| 44 | `runsOf` | `function runsOf(` |
| 45 | `splitRun` | `function splitRun(` |
| 52 | `checkRoster` | `function checkRoster(` |
| 67 | `categoriesShown` · export | `function categoriesShown(` |
| 81 | `declareRoster` | `function declareRoster(` |

### `js/render-core.ts`

#### RENDER: range bars + card helpers

| Line | Name | Anchor |
|---|---|---|
| 10 | `metricSheet` · export | `function metricSheet(` |
| 16 | `drawsPage` · export | `function drawsPage(` |
| 17 | `levelHeadings` | `function levelHeadings(` |
| 25 | `wireDetailModal` | `function wireDetailModal(` |

#### A season strip and the economy's chips, shared by the cycle list and the Diagnosis's years

| Line | Name | Anchor |
|---|---|---|
| 61 | `strip` · export | `function strip(` |
| 64 | `stripDots` · export | `function stripDots(` |
| 67 | `stripTrack` · export | `function stripTrack(` |
| 70 | `closedSegs` · export | `function closedSegs(` |
| 71 | `seasonRuns` · export | `function seasonRuns(` |
| 80 | `seasonPills` · export | `function seasonPills(` |
| 88 | `marketPills` · export | `function marketPills(` |
| 96 | `seasonRunsLabel` · export | `function seasonRunsLabel(` |
| 99 | `econChips` · export | `function econChips(` |
| 104 | `dxHead` · export | `function dxHead(` |
| 108 | `dxSys` · export | `function dxSys(` |
| 109 | `catHeadCard` · export | `function catHeadCard(` |
| 113 | `timingMark` | `function timingMark(` |
| 121 | `timingPill` · export | `function timingPill(` |
| 126 | `collapseEmptyBlocks` · export | `function collapseEmptyBlocks(` |
| 134 | `seatPageFoot` · export | `function seatPageFoot(` |
| 145 | `tempWord` · export | `function tempWord(` |
| 149 | `gdpFigure` · export | `function gdpFigure(` |

### `js/render-pages.ts`

#### RENDER: yield-curve spread history chart, 10Y-3M or 10Y-2Y

| Line | Name | Anchor |
|---|---|---|
| 16 | `spreadSeries` | `function spreadSeries(` |
| 58 | `spreadDetail` | `function spreadDetail(` |
| 62 | `paintSpreads` | `function paintSpreads(` |

#### RENDER: un-inversion-to-recession historical lag panel

| Line | Name | Anchor |
|---|---|---|
| 115 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

#### RENDER: the Treasury spreads

| Line | Name | Anchor |
|---|---|---|
| 140 | `spreadPick` | `var spreadPick =` |
| 141 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 142 | `spreadLabel` | `function spreadLabel(` |
| 146 | `spreadsHead` | `function spreadsHead(` |
| 158 | `defineSpreads` | `function defineSpreads(` |
| 184 | `spreadInsights` | `function spreadInsights(` |

#### RENDER: Hormones

| Line | Name | Anchor |
|---|---|---|
| 210 | `hormonesInfo` | `function hormonesInfo(` |
| 223 | `ffPeaks` | `function ffPeaks(` |
| 236 | `lowerRun` | `function lowerRun(` |
| 241 | `hormonesInsight` | `function hormonesInsight(` |
| 263 | `defineHormones` | `function defineHormones(` |

#### RENDER: Volatility — the VIX since 1986, and the shape of its curve today

| Line | Name | Anchor |
|---|---|---|
| 280 | `defineVolatility` | `function defineVolatility(` |
| 312 | `volatilityHighlights` | `function volatilityHighlights(` |

#### Per-cycle growth helpers (the cycle view and Herstory both use them)

| Line | Name | Anchor |
|---|---|---|
| 340 | `setTopbar` · export | `function setTopbar(` |
| 354 | `defineSubjectReadings` · export | `function defineSubjectReadings(` |

### `js/diagnosis.ts`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 19 | `diagnosisHtml` | `function diagnosisHtml(` |
| 23 | `yearByYear` | `function yearByYear(` |
| 32 | `PREVIEW` · export | `var PREVIEW =` |
| 33 | `yearRow` | `function yearRow(` |
| 38 | `yearStrip` | `function yearStrip(` |
| 43 | `stripGap` | `function stripGap(` |
| 46 | `yearMarket` | `function yearMarket(` |
| 50 | `renderDiagnosis` · export | `function renderDiagnosis(` |
| 54 | `fitYearDots` · export | `function fitYearDots(` |
| 66 | `diagnosisHost` | `function diagnosisHost(` |
| 72 | `buildDiagnosis` | `function buildDiagnosis(` |

### `js/dial-cycle.ts`

#### the dial: the ring, the year badge, and the hub

| Line | Name | Anchor |
|---|---|---|
| 22 | `drawDial` | `function drawDial(` |

#### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

| Line | Name | Anchor |
|---|---|---|
| 40 | `wireThemeChoice` | `function wireThemeChoice(` |

#### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

| Line | Name | Anchor |
|---|---|---|
| 58 | `renderCycleKicker` | `function renderCycleKicker(` |

#### the hub: the reading inside the circle

| Line | Name | Anchor |
|---|---|---|
| 70 | `hubSet` | `function hubSet(` |
| 78 | `hubOpen` | `function hubOpen(` |
| 84 | `hubShowDefault` | `function hubShowDefault(` |
| 90 | `hubShowQuarter` | `function hubShowQuarter(` |
| 95 | `hubShowYear` | `function hubShowYear(` |
| 105 | `one` · export | `function one(` |
| 106 | `cycleView` · export | `function cycleView(` |
| 107 | `renderCycleDial` | `function renderCycleDial(` |
| 190 | `dialKeyStep` | `function dialKeyStep(` |
| 198 | `dialSay` | `function dialSay(` |

#### the whole view, for one cycle

| Line | Name | Anchor |
|---|---|---|
| 204 | `renderCycleView` · export | `function renderCycleView(` |
| 209 | `showEra` | `function showEra(` |
| 212 | `showCycle` · export | `function showCycle(` |

#### A cycle's season strip (carried by the one cycle row)

| Line | Name | Anchor |
|---|---|---|
| 214 | `aheadWord` | `function aheadWord(` |
| 215 | `seasonStripHtml` · export | `function seasonStripHtml(` |
| 232 | `marketStripHtml` · export | `function marketStripHtml(` |
| 258 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 259 | `settleStrips` · export | `function settleStrips(` |
| 283 | `settleAll` · export | `function settleAll(` |

### `js/analysis.ts`

#### RENDER: Herstory, the list of closed cycles at the foot of Analysis; tapping one opens the cycle view for it

| Line | Name | Anchor |
|---|---|---|
| 16 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 29 | `renderCycleList` | `function renderCycleList(` |

#### A closed cycle, shown on the Cycle tab's own page

| Line | Name | Anchor |
|---|---|---|
| 55 | `parentOf` | `function parentOf(` |
| 56 | `eraShow` | `function eraShow(` |
| 61 | `enterEra` | `function enterEra(` |
| 68 | `leaveEra` | `function leaveEra(` |

### `js/portfolio.ts`

#### PORTFOLIO: All Weather, the Investment Clock and Custom

| Line | Name | Anchor |
|---|---|---|
| 12 | `WEATHER_ID` | `var WEATHER_ID =` |
| 13 | `WEATHER_NAME` | `var WEATHER_NAME =` |
| 18 | `ALL_WEATHER` | `var ALL_WEATHER =` |
| 25 | `WEATHER` | `var WEATHER =` |
| 38 | `say` | `function say(` |
| 39 | `methodPage` | `function methodPage(` |
| 40 | `weatherStrip` | `function weatherStrip(` |
| 44 | `weatherDetail` | `function weatherDetail(` |
| 52 | `drawWeather` | `function drawWeather(` |
| 59 | `phaseOf` | `function phaseOf(` |
| 63 | `arc` | `function arc(` |
| 67 | `clockFace` | `function clockFace(` |
| 80 | `clockDetail` | `function clockDetail(` |
| 87 | `drawClock` | `function drawClock(` |
| 93 | `homeHtml` | `function homeHtml(` |
| 99 | `portfolioSheets` | `function portfolioSheets(` |
| 103 | `buildPortfolio` | `function buildPortfolio(` |

### `js/pages-nav.ts`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 14 | `openTarget` | `function openTarget(` |
| 15 | `tabPanel` | `function tabPanel(` |
| 16 | `scrollSoon` | `function scrollSoon(` |
| 17 | `viewTab` | `function viewTab(` |
| 18 | `renderSignsList` | `function renderSignsList(` |

#### THE NAVIGATION CONTROLLER

| Line | Name | Anchor |
|---|---|---|
| 28 | `BACK` | `var BACK =` |
| 29 | `backPush` | `function backPush(` |
| 30 | `backClear` | `function backClear(` |
| 31 | `backPopped` | `function backPopped(` |
| 32 | `plainHome` | `function plainHome(` |
| 35 | `buildNav` | `function buildNav(` |

#### The metric page

| Line | Name | Anchor |
|---|---|---|
| 129 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### `js/tabs-menu.ts`

#### RENDER: About Gyneconomy — the season model and the framework

| Line | Name | Anchor |
|---|---|---|
| 12 | `seasonGrid` | `function seasonGrid(` |
| 22 | `recessionLine` | `function recessionLine(` |
| 26 | `sideFacts` | `function sideFacts(` |
| 33 | `seasonModelNote` | `function seasonModelNote(` |
| 43 | `rangePos` | `function rangePos(` |
| 48 | `cycleModelLine` | `function cycleModelLine(` |
| 52 | `wireIdea` | `function wireIdea(` |
| 55 | `renderSeasonRows` | `function renderSeasonRows(` |

#### How to Read: where each reading sits and when it speaks, from the roster

| Line | Name | Anchor |
|---|---|---|
| 97 | `placeLine` | `function placeLine(` |
| 104 | `timingLine` | `function timingLine(` |
| 111 | `renderHowto` | `function renderHowto(` |

#### TAB NAVIGATION (Today / Cycle / Analysis / Portfolio)

| Line | Name | Anchor |
|---|---|---|
| 113 | `renderTopbar` | `function renderTopbar(` |
| 142 | `wireTabKeys` | `function wireTabKeys(` |
| 143 | `wireTabDoors` | `function wireTabDoors(` |

#### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

| Line | Name | Anchor |
|---|---|---|
| 151 | `wireMenu` | `function wireMenu(` |

#### Contact: hand the note to the visitor's mail app. The address is assembled here, at send time, from its

| Line | Name | Anchor |
|---|---|---|
| 225 | `bootGuide` | `function bootGuide(` |

### `js/repaint.ts`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 11 | `repaintPressureChart` | `function repaintPressureChart(` |
| 14 | `syncCape` | `function syncCape(` |
| 15 | `repaintPolicy` | `function repaintPolicy(` |
| 16 | `repaintDiagnosis` | `function repaintDiagnosis(` |
| 19 | `repaintDerived` | `function repaintDerived(` |

### `js/activity.ts`

#### Activity: job growth and retail sales, each against a year earlier

| Line | Name | Anchor |
|---|---|---|
| 7 | `PAYROLLS_LINE` · export | `var PAYROLLS_LINE =` |
| 18 | `yoyWord` | `function yoyWord(` |
| 22 | `gapOf` | `function gapOf(` |
| 27 | `gapSpec` | `function gapSpec(` |
| 40 | `activitySpecs` · export | `function activitySpecs(` |

### `js/ai-insights.ts`

#### Today: the Weather Report and its risk factors; every cycle page: its Cycle Story, read in place

| Line | Name | Anchor |
|---|---|---|
| 14 | `MONTH_NAMES` | `var MONTH_NAMES =` |
| 15 | `dateWords` | `function dateWords(` |
| 16 | `riskDoor` | `function riskDoor(` |
| 17 | `riskFactors` | `function riskFactors(` |
| 20 | `prose` | `function prose(` |
| 26 | `edition` | `function edition(` |
| 27 | `storyOf` | `function storyOf(` |
| 28 | `lead` | `function lead(` |
| 29 | `storyCard` · export | `function storyCard(` |
| 33 | `wireStory` · export | `function wireStory(` |
| 47 | `elements` | `function elements(` |
| 53 | `cycleCard` | `function cycleCard(` |
| 60 | `todayHtml` | `function todayHtml(` |
| 65 | `drawToday` · export | `function drawToday(` |

### `js/charts.ts`

#### The range bar

| Line | Name | Anchor |
|---|---|---|
| 14 | `trendOf` · export | `function trendOf(` |
| 34 | `trendPill` · export | `function trendPill(` |

#### The inner pages' charts

| Line | Name | Anchor |
|---|---|---|
| 45 | `yearsAcross` | `function yearsAcross(` |
| 46 | `xLabelOf` | `function xLabelOf(` |
| 55 | `fitLine` · export | `function fitLine(` |
| 59 | `fitGroup` · export | `function fitGroup(` |

#### The history component's axes

| Line | Name | Anchor |
|---|---|---|
| 76 | `vGrid` · export | `function vGrid(` |
| 80 | `COL_FILL` | `var COL_FILL =` |
| 81 | `colPath` · export | `function colPath(` |
| 86 | `colWidth` · export | `function colWidth(` |
| 91 | `AXIS` · export | `var AXIS =` |
| 92 | `YEAR_ROW` | `var YEAR_ROW =` |
| 93 | `histFrame` · export | `function histFrame(` |
| 100 | `colScale` · export | `function colScale(` |
| 105 | `yearMarks` · export | `function yearMarks(` |
| 114 | `hitRect` · export | `function hitRect(` |
| 117 | `xLabel` · export | `function xLabel(` |
| 120 | `yLabel` · export | `function yLabel(` |
| 123 | `crossLine` · export | `function crossLine(` |
| 126 | `zeroRule` · export | `function zeroRule(` |
| 129 | `meanRule` · export | `function meanRule(` |
| 131 | `publishGeom` · export | `function publishGeom(` |
| 132 | `histBar` · export | `function histBar(` |
| 135 | `avgRule` · export | `function avgRule(` |
| 138 | `vhOpen` · export | `function vhOpen(` |
| 139 | `autoTicks` | `function autoTicks(` |
| 147 | `chartAxes` · export | `function chartAxes(` |
| 175 | `divergeChart` · export | `function divergeChart(` |

#### A series' highest reading within a span

| Line | Name | Anchor |
|---|---|---|
| 211 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 212 | `PEEK_W` | `var PEEK_W =` |
| 213 | `PEEK_H` | `var PEEK_H =` |
| 214 | `colPeek` · export | `function colPeek(` |
| 231 | `windowYears` · export | `function windowYears(` |
| 239 | `refName` | `function refName(` |
| 242 | `beatPath` · export | `function beatPath(` |

### `js/concentration.ts`

#### Concentration: the ten largest S&P 500 holdings' share of the index

| Line | Name | Anchor |
|---|---|---|
| 6 | `CONCENTRATION_TO` | `var CONCENTRATION_TO =` |
| 16 | `concentrationSpan` | `function concentrationSpan(` |
| 17 | `concentrationWord` | `function concentrationWord(` |
| 22 | `concentrationRecord` | `function concentrationRecord(` |
| 36 | `concentrationSpecs` · export | `function concentrationSpecs(` |

### `js/cycle-analysis.ts`

#### Her chart: every reading, cycle by cycle, against her own normal ranges

| Line | Name | Anchor |
|---|---|---|
| 24 | `normOf` | `function normOf(` |
| 29 | `closedCount` | `function closedCount(` |
| 30 | `len` | `function len(` |
| 31 | `flow` | `function flow(` |
| 32 | `visitOf` | `function visitOf(` |
| 39 | `visits` | `function visits(` |
| 40 | `present` | `function present(` |
| 41 | `sdOf` | `function sdOf(` |
| 42 | `drift` | `function drift(` |
| 43 | `cycleLab` | `function cycleLab(` |
| 47 | `cycleReadings` | `function cycleReadings(` |
| 53 | `WINDOW` · export | `var WINDOW =` |
| 55 | `windowFrom` | `function windowFrom(` |
| 56 | `readingsNorm` | `function readingsNorm(` |
| 59 | `DEPTH_CYCLES` | `var DEPTH_CYCLES =` |
| 61 | `deep` | `function deep(` |
| 66 | `spanOf` | `function spanOf(` |
| 69 | `cardPrint` | `function cardPrint(` |
| 73 | `readingLab` | `function readingLab(` |
| 81 | `forgetLabs` · export | `function forgetLabs(` |
| 82 | `cycleLabs` | `function cycleLabs(` |
| 89 | `labs` · export | `function labs(` |
| 90 | `normAt` | `function normAt(` |
| 91 | `unread` | `function unread(` |
| 93 | `atCycle` | `function atCycle(` |
| 96 | `atWhen` | `function atWhen(` |
| 101 | `nowWhen` · export | `function nowWhen(` |
| 102 | `yearly` | `function yearly(` |
| 104 | `whenValue` | `function whenValue(` |
| 111 | `quarterKey` | `function quarterKey(` |
| 112 | `whenMeans` | `function whenMeans(` |
| 123 | `hasWhen` | `function hasWhen(` |
| 124 | `periodRows` | `function periodRows(` |
| 133 | `state` | `function state(` |
| 138 | `yearsWord` · export | `function yearsWord(` |
| 139 | `fmt` · export | `function fmt(` |
| 140 | `UNJUDGED` | `var UNJUDGED =` |
| 141 | `tier` | `function tier(` |
| 145 | `catTitle` | `function catTitle(` |
| 146 | `side` | `function side(` |
| 147 | `findWords` | `function findWords(` |
| 151 | `rowTag` | `function rowTag(` |
| 152 | `cardWord` | `function cardWord(` |
| 156 | `labItem` | `function labItem(` |
| 162 | `ring` | `function ring(` |
| 166 | `pastScores` | `function pastScores(` |
| 167 | `scoreTier` | `function scoreTier(` |
| 171 | `scoreRing` | `function scoreRing(` |
| 172 | `scoreTile` | `function scoreTile(` |
| 175 | `foldSec` | `function foldSec(` |
| 180 | `labSec` | `function labSec(` |
| 184 | `subSec` | `function subSec(` |
| 187 | `bySub` | `function bySub(` |
| 195 | `bySystem` | `function bySystem(` |
| 203 | `findOf` | `function findOf(` |
| 204 | `LENS` | `var LENS =` |
| 205 | `tierOpts` | `function tierOpts(` |
| 208 | `filterTag` | `function filterTag(` |
| 212 | `finder` | `function finder(` |
| 217 | `stepBtn` | `function stepBtn(` |
| 220 | `stepper` | `function stepper(` |
| 226 | `filterDoor` | `function filterDoor(` |
| 229 | `sheetSec` | `function sheetSec(` |
| 230 | `calBtn` | `function calBtn(` |
| 233 | `calOff` | `function calOff(` |
| 234 | `calQuarter` | `function calQuarter(` |
| 238 | `calYear` | `function calYear(` |
| 242 | `calCycle` | `function calCycle(` |
| 247 | `periodCal` | `function periodCal(` |
| 251 | `shown` | `function shown(` |
| 252 | `filterSheet` | `function filterSheet(` |
| 260 | `RESULT` | `var RESULT =` |
| 261 | `narrow` | `function narrow(` |
| 273 | `riskLabs` · export | `function riskLabs(` |
| 274 | `judged` | `function judged(` |
| 275 | `listedLabs` | `function listedLabs(` |
| 276 | `score` | `function score(` |
| 278 | `depthRule` | `function depthRule(` |
| 281 | `thinWords` | `function thinWords(` |
| 285 | `depthWords` | `function depthWords(` |
| 294 | `pinnedFacts` | `function pinnedFacts(` |
| 300 | `methodFacts` | `function methodFacts(` |
| 303 | `chartDetail` | `function chartDetail(` |
| 312 | `HOME_ID` | `var HOME_ID =` |
| 313 | `statRow` | `function statRow(` |
| 318 | `statBody` | `function statBody(` |
| 321 | `yearsText` | `function yearsText(` |
| 322 | `lengths` | `function lengths(` |
| 323 | `typical` | `function typical(` |
| 324 | `flows` | `function flows(` |
| 325 | `flowTypical` | `function flowTypical(` |
| 326 | `verdict` | `function verdict(` |
| 327 | `TICK` | `var TICK =` |
| 328 | `tone` | `function tone(` |
| 329 | `mark` | `function mark(` |
| 330 | `lenKey` | `function lenKey(` |
| 331 | `RELATIVE` | `var RELATIVE =` |
| 332 | `healthPage` | `function healthPage(` |
| 337 | `healthTone` | `function healthTone(` |
| 338 | `healthRow` | `function healthRow(` |
| 342 | `cycleBars` | `function cycleBars(` |
| 350 | `barClass` | `function barClass(` |
| 351 | `lengthPage` | `function lengthPage(` |
| 356 | `driftWord` | `function driftWord(` |
| 357 | `variationPage` | `function variationPage(` |
| 362 | `flowPage` | `function flowPage(` |
| 367 | `statsHome` | `function statsHome(` |
| 374 | `insightSec` | `function insightSec(` |
| 377 | `catName` | `function catName(` |
| 378 | `markName` | `function markName(` |
| 379 | `labCat` | `function labCat(` |
| 380 | `noneLine` | `function noneLine(` |
| 381 | `labBox` | `function labBox(` |
| 382 | `countTag` | `function countTag(` |
| 383 | `riskCard` · export | `function riskCard(` |
| 388 | `insightsHome` | `function insightsHome(` |
| 395 | `homeSections` | `function homeSections(` |
| 400 | `whenPicked` | `function whenPicked(` |
| 404 | `pickedKey` | `function pickedKey(` |
| 405 | `periodAt` | `function periodAt(` |
| 409 | `drawChart` | `function drawChart(` |
| 417 | `IND` · export | `var IND =` |
| 418 | `IND_ALL` | `var IND_ALL =` |
| 419 | `searchShell` | `function searchShell(` |
| 420 | `pickCat` | `function pickCat(` |
| 427 | `buildFind` | `function buildFind(` |
| 428 | `fold` | `function fold(` |
| 432 | `wireFinder` | `function wireFinder(` |
| 445 | `setPeriod` | `function setPeriod(` |
| 450 | `pick` | `function pick(` |
| 456 | `refreshSheet` | `function refreshSheet(` |
| 461 | `PICKS` | `var PICKS =` |
| 462 | `centreList` | `function centreList(` |
| 466 | `wirePicks` | `function wirePicks(` |
| 476 | `openWhen` | `function openWhen(` |
| 481 | `wireCatDoors` | `function wireCatDoors(` |
| 487 | `rateCycle` | `function rateCycle(` |
| 491 | `buildCycleChart` · export | `function buildCycleChart(` |

### `js/dial-ring.ts`

#### the ring: a cycle's seasons as moons, its bull and bear years inside, the dots of a typical cycle ahead

| Line | Name | Anchor |
|---|---|---|
| 9 | `dialRing` · export | `function dialRing(` |
| 77 | `miniRuns` | `function miniRuns(` |
| 86 | `miniArc` | `function miniArc(` |
| 90 | `miniRing` · export | `function miniRing(` |

### `js/era.ts`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 3 | `eraFig` · export | `function eraFig(` |
| 10 | `todayValue` · export | `function todayValue(` |

### `js/fed-phases.ts`

#### The Fed's turns and the inflation peak

| Line | Name | Anchor |
|---|---|---|
| 17 | `movesToDate` | `function movesToDate(` |
| 23 | `fedPhases` · export | `function fedPhases(` |
| 29 | `runStarts` | `function runStarts(` |
| 34 | `findRuns` | `function findRuns(` |
| 41 | `cyclePeak` · export | `function cyclePeak(` |

#### The Interest Rates card

| Line | Name | Anchor |
|---|---|---|
| 48 | `tightBands` | `function tightBands(` |
| 52 | `rateSeries` · export | `function rateSeries(` |
| 53 | `LEGEND` | `var LEGEND =` |
| 54 | `footnoteHtml` | `function footnoteHtml(` |
| 58 | `ratesStory` · export | `function ratesStory(` |
| 62 | `endMonthOf` | `function endMonthOf(` |
| 67 | `ratesCard` | `function ratesCard(` |
| 72 | `fedEnvironment` · export | `function fedEnvironment(` |

### `js/format.ts`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 1 | `lede` · export | `function lede(` |
| 2 | `MONTHS_SHORT` · export | `var MONTHS_SHORT =` |
| 3 | `fmtAsOf` · export | `function fmtAsOf(` |
| 8 | `isoDay` · export | `function isoDay(` |
| 14 | `qAtIndex` · export | `function qAtIndex(` |
| 15 | `yearOf` · export | `function yearOf(` |
| 16 | `metered` · export | `function metered(` |
| 17 | `tagFor` · export | `function tagFor(` |
| 18 | `stateOf` · export | `function stateOf(` |
| 19 | `bandEnds` · export | `function bandEnds(` |
| 24 | `pctl` · export | `function pctl(` |
| 28 | `round1` · export | `function round1(` |
| 29 | `mean` · export | `function mean(` |
| 30 | `listed` · export | `function listed(` |
| 31 | `NUMBER_WORDS` | `var NUMBER_WORDS =` |
| 32 | `numberWord` · export | `function numberWord(` |
| 33 | `capFirst` · export | `function capFirst(` |
| 34 | `atQuarter` · export | `function atQuarter(` |
| 35 | `atMonth` · export | `function atMonth(` |
| 36 | `ordinal` · export | `function ordinal(` |
| 37 | `MINOR` | `var MINOR =` |
| 38 | `capWord` | `function capWord(` |
| 41 | `titleCase` · export | `function titleCase(` |
| 47 | `hiCard` · export | `function hiCard(` |
| 50 | `dropWhatIsShown` · export | `function dropWhatIsShown(` |
| 57 | `highlightsHtml` · export | `function highlightsHtml(` |
| 66 | `CHEV` · export | `var CHEV =` |
| 67 | `pointLabel` · export | `function pointLabel(` |
| 68 | `qLabel` · export | `function qLabel(` |
| 69 | `monthLabel` · export | `function monthLabel(` |
| 70 | `ledeHtml` · export | `function ledeHtml(` |
| 71 | `auxStat` · export | `function auxStat(` |
| 74 | `facts` · export | `function facts(` |
| 75 | `factsFrom` · export | `function factsFrom(` |
| 79 | `qYears` · export | `function qYears(` |
| 81 | `sideWord` · export | `function sideWord(` |
| 88 | `keySwatch` · export | `function keySwatch(` |
| 91 | `legendKey` · export | `function legendKey(` |
| 97 | `readingNote` · export | `function readingNote(` |
| 101 | `srcBlock` · export | `function srcBlock(` |
| 102 | `srcHtml` | `function srcHtml(` |
| 103 | `fmtSigned` · export | `function fmtSigned(` |
| 104 | `hubLine` · export | `function hubLine(` |
| 105 | `capeFmt1` · export | `function capeFmt1(` |

### `js/history-charts.ts`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 10 | `deficitChart` · export | `function deficitChart(` |
| 80 | `axisPct` | `function axisPct(` |
| 81 | `rowYear` | `function rowYear(` |
| 82 | `colYears` | `function colYears(` |
| 94 | `columnHistory` | `function columnHistory(` |
| 130 | `unempHistoryChart` · export | `function unempHistoryChart(` |
| 136 | `fedFundsHistoryChart` · export | `function fedFundsHistoryChart(` |
| 139 | `mortgageHistoryChart` · export | `function mortgageHistoryChart(` |
| 142 | `rateFence` | `function rateFence(` |
| 146 | `rateKey` · export | `function rateKey(` |
| 150 | `heatKey` · export | `function heatKey(` |
| 156 | `m2Key` · export | `function m2Key(` |
| 162 | `rateSpec` | `function rateSpec(` |
| 175 | `cpiHistoryChart` · export | `function cpiHistoryChart(` |
| 181 | `gdpHistoryChart` · export | `function gdpHistoryChart(` |
| 186 | `m2GrowthChart` · export | `function m2GrowthChart(` |
| 193 | `m2Step` | `function m2Step(` |
| 197 | `heatEdges` | `function heatEdges(` |
| 201 | `heatStep` | `function heatStep(` |

### `js/history-fred.ts`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 3 | `fedFundsHistory` · export | `var fedFundsHistory =` |
| 4 | `volatilityHistory` · export | `var volatilityHistory =` |
| 5 | `fiscalHistory` · export | `var fiscalHistory =` |
| 6 | `grossDebtQuarterly` · export | `var grossDebtQuarterly =` |
| 7 | `treasuryQuarterly` · export | `var treasuryQuarterly =` |
| 8 | `treasuryLong` · export | `var treasuryLong =` |
| 9 | `productivityHistory` · export | `var productivityHistory =` |
| 10 | `sp500MonthlyHistory` · export | `var sp500MonthlyHistory =` |
| 11 | `confidenceHistory` · export | `var confidenceHistory =` |
| 12 | `durablesHistory` · export | `var durablesHistory =` |
| 13 | `premiumHistory` · export | `var premiumHistory =` |
| 16 | `gdpYoYBefore` · export | `var gdpYoYBefore =` |
| 17 | `cpiYoYBefore` · export | `var cpiYoYBefore =` |
| 19 | `sp500ReturnsBefore` · export | `var sp500ReturnsBefore =` |
| 20 | `gdpGrowthBefore` · export | `var gdpGrowthBefore =` |

### `js/indicators.ts`

#### The split indicators: one page each

| Line | Name | Anchor |
|---|---|---|
| 21 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 27 | `dollars` | `function dollars(` |
| 28 | `midOf` | `function midOf(` |
| 29 | `meterWord` · export | `function meterWord(` |
| 30 | `splitPages` | `function splitPages(` |
| 46 | `signedPct` | `var signedPct =` |
| 47 | `readingPage` | `function readingPage(` |
| 50 | `confidencePage` | `function confidencePage(` |
| 54 | `desirePage` | `function desirePage(` |
| 55 | `premiumPage` | `function premiumPage(` |
| 56 | `marketPage` | `function marketPage(` |
| 60 | `withCredit` | `function withCredit(` |
| 67 | `productivityPage` | `function productivityPage(` |
| 70 | `splitSpec` | `function splitSpec(` |
| 76 | `splitKey` | `function splitKey(` |
| 80 | `splitInfo` | `function splitInfo(` |
| 84 | `periodTicks` | `function periodTicks(` |
| 89 | `periodOfSeries` | `function periodOfSeries(` |
| 90 | `splitHistory` | `function splitHistory(` |
| 101 | `defineSplits` · export | `function defineSplits(` |

#### The split indicators' insights

| Line | Name | Anchor |
|---|---|---|
| 111 | `buffettInsight` | `function buffettInsight(` |
| 126 | `debtInsight` | `function debtInsight(` |
| 141 | `signedFig` | `function signedFig(` |
| 142 | `lineInsight` | `function lineInsight(` |
| 145 | `productivityInsight` | `function productivityInsight(` |
| 149 | `confidenceInsight` | `function confidenceInsight(` |
| 153 | `desireInsight` | `function desireInsight(` |
| 157 | `premiumInsight` | `function premiumInsight(` |
| 161 | `ORDINAL` | `var ORDINAL =` |
| 162 | `marketInsight` | `function marketInsight(` |

### `js/inner-pages.ts`

#### THE INNER PAGES

| Line | Name | Anchor |
|---|---|---|
| 17 | `redrawSheet` | `function redrawSheet(` |
| 26 | `lagRow` | `function lagRow(` |
| 27 | `defineTemp` | `function defineTemp(` |
| 43 | `defineGdp` | `function defineGdp(` |
| 59 | `defineActivity` | `function defineActivity(` |
| 76 | `defineDeficit` | `function defineDeficit(` |
| 93 | `valuationInfo` | `function valuationInfo(` |
| 94 | `defineValuation` | `function defineValuation(` |
| 115 | `defineInnerReadings` · export | `function defineInnerReadings(` |
| 120 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 148 | `valuationHighlights` | `function valuationHighlights(` |
| 160 | `tempHighlights` | `function tempHighlights(` |
| 175 | `gdpHighlights` | `function gdpHighlights(` |
| 190 | `shutPickers` | `function shutPickers(` |
| 196 | `wireControlKeys` | `function wireControlKeys(` |
| 215 | `wirePageControls` · export | `function wirePageControls(` |

### `js/insights.ts`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 15 | `insightCirculation` | `function insightCirculation(` |
| 47 | `insightWeather` | `function insightWeather(` |
| 84 | `seasonCards` | `function seasonCards(` |
| 89 | `marketCycleCard` | `function marketCycleCard(` |
| 101 | `MOOD_CHART` | `var MOOD_CHART =` |
| 108 | `MOOD_SRC` | `var MOOD_SRC =` |
| 113 | `curvePath` | `function curvePath(` |
| 121 | `moodCallout` | `function moodCallout(` |
| 125 | `moodCycleSvg` | `function moodCycleSvg(` |
| 137 | `isRead` | `function isRead(` |
| 138 | `moodInfo` | `function moodInfo(` |
| 147 | `moodFigures` | `function moodFigures(` |
| 153 | `moodCard` | `function moodCard(` |
| 157 | `insightMood` | `function insightMood(` |
| 163 | `storyBeats` | `function storyBeats(` |
| 174 | `storyText` | `function storyText(` |
| 178 | `insightStress` | `function insightStress(` |
| 182 | `catInsight` · export | `function catInsight(` |

### `js/marks.ts`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 1 | `debtSvg` · export | `function debtSvg(` |
| 2 | `homeSvg` · export | `function homeSvg(` |
| 3 | `dropSvg` | `function dropSvg(` |
| 5 | `gaugeSvg` · export | `function gaugeSvg(` |
| 9 | `diamondSvg` · export | `function diamondSvg(` |
| 13 | `markSvg` | `function markSvg(` |
| 16 | `orbitSvg` · export | `function orbitSvg(` |
| 17 | `flameSvg` · export | `function flameSvg(` |
| 20 | `bagSvg` · export | `function bagSvg(` |
| 23 | `diceSvg` · export | `function diceSvg(` |
| 27 | `herstorySvg` · export | `function herstorySvg(` |
| 28 | `clockSvg` · export | `function clockSvg(` |
| 29 | `thermoSvg` · export | `function thermoSvg(` |
| 32 | `personSvg` · export | `function personSvg(` |
| 34 | `calendarSvg` · export | `function calendarSvg(` |
| 35 | `bookSvg` · export | `function bookSvg(` |
| 36 | `umbrellaSvg` · export | `function umbrellaSvg(` |
| 38 | `legendSvg` · export | `function legendSvg(` |
| 40 | `slidersSvg` · export | `function slidersSvg(` |
| 42 | `heartSvg` · export | `function heartSvg(` |
| 44 | `weatherSvg` · export | `function weatherSvg(` |
| 46 | `moodSvg` · export | `function moodSvg(` |
| 47 | `sproutSvg` · export | `function sproutSvg(` |
| 49 | `factorySvg` · export | `function factorySvg(` |
| 50 | `circulationSvg` · export | `function circulationSvg(` |
| 51 | `boltSvg` · export | `function boltSvg(` |
| 52 | `marketSvg` · export | `function marketSvg(` |
| 55 | `volatilitySvg` · export | `function volatilitySvg(` |

### `js/pressure.ts`

#### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

| Line | Name | Anchor |
|---|---|---|
| 22 | `latestYieldPoint` | `function latestYieldPoint(` |
| 29 | `withLatestPoint` | `function withLatestPoint(` |
| 34 | `tendencyNote` | `function tendencyNote(` |
| 44 | `pressureMaturities` | `function pressureMaturities(` |
| 70 | `flowRow` | `function flowRow(` |
| 71 | `pulseHistory` | `function pulseHistory(` |
| 78 | `defineFlow` | `function defineFlow(` |
| 106 | `ylmYearMarks` | `function ylmYearMarks(` |
| 125 | `ylmColumns` | `function ylmColumns(` |
| 145 | `ylmFitLine` | `function ylmFitLine(` |
| 157 | `pressureHead` | `function pressureHead(` |
| 169 | `definePressure` | `function definePressure(` |

#### Pressure's Insights

| Line | Name | Anchor |
|---|---|---|
| 288 | `pressureInsights` | `function pressureInsights(` |

#### RENDER: the 30-year mortgage rate — what a household pays for money, monthly since 1971

| Line | Name | Anchor |
|---|---|---|
| 322 | `MORTGAGE_BACK` | `var MORTGAGE_BACK =` |
| 328 | `mortgageLast` | `function mortgageLast(` |
| 329 | `mortgageInfo` | `function mortgageInfo(` |
| 341 | `mortgageInsight` | `function mortgageInsight(` |
| 353 | `defineMortgage` | `function defineMortgage(` |
| 371 | `defineMarketReadings` · export | `function defineMarketReadings(` |

### `js/pulse-strips.ts`

#### Pulse strips

| Line | Name | Anchor |
|---|---|---|
| 6 | `PULSE_BEATS` | `var PULSE_BEATS =` |
| 8 | `pulseMove` | `function pulseMove(` |
| 9 | `pulseFences` | `function pulseFences(` |
| 16 | `pulseBeat` · export | `function pulseBeat(` |
| 21 | `f1` | `function f1(` |
| 22 | `pulseStroke` | `function pulseStroke(` |
| 27 | `stripQuarter` | `function stripQuarter(` |
| 38 | `stripRow` | `function stripRow(` |
| 54 | `stripPaper` | `function stripPaper(` |
| 65 | `strips` · export | `var strips =` |
| 66 | `pulseStripsChart` · export | `function pulseStripsChart(` |
| 90 | `stripView` | `function stripView(` |
| 94 | `thumbTravel` | `function thumbTravel(` |
| 98 | `thumbAt` | `function thumbAt(` |
| 102 | `stripScrolled` | `function stripScrolled(` |
| 107 | `stripBar` | `function stripBar(` |
| 125 | `stripFollow` | `function stripFollow(` |
| 131 | `stripBox` | `function stripBox(` |
| 141 | `stripScroller` · export | `function stripScroller(` |
| 154 | `stripsInfo` · export | `function stripsInfo(` |

### `js/reading.ts`

#### One reading: its figure, its words, its page

| Line | Name | Anchor |
|---|---|---|
| 23 | `defineReading` · export | `function defineReading(` |
| 24 | `readingFor` · export | `function readingFor(` |
| 29 | `todayFace` · export | `function todayFace(` |
| 33 | `historyHtml` | `function historyHtml(` |
| 38 | `drawReading` | `function drawReading(` |
| 47 | `chartShell` · export | `function chartShell(` |
| 50 | `paintInsight` | `function paintInsight(` |
| 51 | `mountReadings` · export | `function mountReadings(` |
| 63 | `redrawReading` · export | `function redrawReading(` |

#### One record, read the same way on every page

| Line | Name | Anchor |
|---|---|---|
| 70 | `recordPoints` · export | `function recordPoints(` |
| 76 | `recordInsight` · export | `function recordInsight(` |
| 89 | `indicatorInsight` · export | `function indicatorInsight(` |

### `js/rhythm.ts`

#### Rhythm: how evenly the pulse of money changes pace

| Line | Name | Anchor |
|---|---|---|
| 5 | `RHYTHM_WINDOW` · export | `var RHYTHM_WINDOW =` |
| 9 | `spread` | `function spread(` |
| 13 | `rhythmRecord` · export | `function rhythmRecord(` |
| 21 | `pts` | `function pts(` |
| 22 | `stretches` | `function stretches(` |
| 33 | `rhythmCard` · export | `function rhythmCard(` |
| 40 | `rhythmInfo` · export | `function rhythmInfo(` |

### `js/sources.ts`

#### The Sources screen: each reading's own citations, by category and subcategory, then the model's

| Line | Name | Anchor |
|---|---|---|
| 18 | `cited` | `function cited(` |
| 25 | `readingSources` | `function readingSources(` |
| 30 | `readingShelves` | `function readingShelves(` |
| 42 | `modelShelves` | `function modelShelves(` |
| 51 | `sourceShelves` · export | `function sourceShelves(` |

### `js/wave-chart.ts`

#### The wave chart

| Line | Name | Anchor |
|---|---|---|
| 11 | `KEY_CLASS` | `var KEY_CLASS =` |
| 12 | `VIEW_W` | `var VIEW_W =` |
| 13 | `monthIdx` · export | `function monthIdx(` |
| 14 | `pct` | `function pct(` |
| 15 | `lineTone` | `function lineTone(` |
| 16 | `monthPoints` | `function monthPoints(` |
| 26 | `slopes` | `function slopes(` |
| 32 | `segments` | `function segments(` |
| 40 | `curve` | `function curve(` |
| 44 | `levelScale` | `function levelScale(` |
| 50 | `ruleLevels` | `function ruleLevels(` |
| 55 | `rulesHtml` | `function rulesHtml(` |
| 58 | `levelTags` | `function levelTags(` |
| 64 | `axisMark` | `function axisMark(` |
| 65 | `axisTicks` | `function axisTicks(` |
| 71 | `axisHtml` | `function axisHtml(` |
| 74 | `fillId` | `function fillId(` |
| 75 | `fillDefs` | `function fillDefs(` |
| 78 | `areaPath` | `function areaPath(` |
| 82 | `lineSvg` | `function lineSvg(` |
| 83 | `plotSvg` | `function plotSvg(` |
| 89 | `bandsHtml` | `function bandsHtml(` |
| 94 | `waveChart` · export | `function waveChart(` |
| 98 | `waveLegend` · export | `function waveLegend(` |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

_none found — if that is wrong, the pattern in `tools/make-map.py` needs updating._

### `pageRange`

the window a page's range control starts on

_none found — if that is wrong, the pattern in `tools/make-map.py` needs updating._

## Stylesheet, section by section

| Line | Section |
|---|---|
| 165 | top bar (Keren, Sep 19, 2026, with Clue's screens): the open tab's title in the middle, a round menu |
| 282 | calendar tab (yearly view, one card per year grouped into five eras — see marketCycles below) |
| 313 | season strip |
| 343 | THE GAP (Keren, V385: "…so if one day I'll tell you I want the spacing to be 30, you would just change |
| 405 | tab bar (app-style segmented navigation) |
| 441 | temperature chart (Cycle tab), after Natural Cycles' temperature view: a column per month of the |
| 528 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
| 668 | Volume's red ramp (Keren, V389: "volume is, in gynaecology, blood — so it should be different shades of |
| 685 | the maturity chart's columns wear the curve's three zones (Keren, V394: "a colour that represents the |
| 732 | One gap between an inner page's containers (Keren, V381: "the spacing between containers in each inner |
| 870 | View more: the button under Year by Year and Herstory |
| 881 | The symptoms: a cycle's years against today |
| 1,027 | yield curve charts |
| 1,041 | the readout (Keren, from Apple Health): it never changes the page's height, which is why it beats a |
| 1,055 | 10Y-3M spread history (quarterly, with recession bands) |
| 1,063 | un-inversion-to-recession historical lag panel |
| 1,072 | the reading's tag |
| 1,076 | info icon + popover (progressive disclosure for longer notes) |
| 1,090 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 1,159 | footer |

## Markup landmarks

Banner comments in `page-body.html`:

| Line | Section |
|---|---|

Every `id` in the static DOM (57), which is what the renderers fill:

| Line | id |
|---|---|
| 6 | `topbar-back` |
| 9 | `topbar-title` |
| 10 | `menu-btn` |
| 17 | `tab-today` |
| 18 | `tab-cycle` |
| 19 | `tab-chart` |
| 20 | `tab-portfolio` |
| 24 | `main` |
| 26 | `panel-today` |
| 27 | `today-home` |
| 30 | `panel-cycle` |
| 31 | `cycle-view` |
| 34 | `cycle-kicker` |
| 37 | `cycle-dial` |
| 39 | `season-wheel-hub-open` |
| 40 | `season-wheel-hub-date` |
| 41 | `season-wheel-hub-theme` |
| 42 | `season-wheel-hub-detail` |
| 44 | `season-wheel-keys` |
| 45 | `season-wheel-live` |
| 53 | `today-analysis` |
| 54 | `signs-list` |
| 59 | `panel-portfolio` |
| 61 | `panel-chart` |
| 62 | `chart-home` |
| 63 | `calendar-list` |
| 64 | `calendar-cycle` |
| 67 | `more-menu` |
| 70 | `menu-back` |
| 84 | `sources-open` |
| 92 | `appearance-current` |
| 95 | `app-version` |
| 99 | `sheet-howto` |
| 132 | `howto-places` |
| 143 | `sheet-book` |
| 153 | `idea-prose` |
| 159 | `idea-more` |
| 164 | `cycle-model-line` |
| 172 | `seasons-kicker` |
| 173 | `seasons-rows` |
| 177 | `framework-kicker` |
| 178 | `framework-rows` |
| 188 | `sheet-appearance` |
| 196 | `theme-toggle` |
| 203 | `sheet-contact` |
| 212 | `contact-form` |
| 213 | `contact-title` |
| 214 | `contact-message` |
| 216 | `contact-hint` |
| 217 | `contact-send` |
| 223 | `sheet-sources` |
| 226 | `sources-back` |
| 231 | `asof-text` |
| 232 | `sources-groups` |
| 238 | `detail-backdrop` |
| 240 | `detail-modal-close` |
| 241 | `detail-modal-body` |

## Finding things fast

| To find | grep for |
|---|---|
| a figure's value | `src/data/series.json` (hand-kept) and `src/data/fred.json` (the backfill's); constants are `var <name> = ` in `js/data.ts` |
| a reading's declaration | `ROSTER` in `js/roster.ts` — one row per reading |
| what a history page draws | `HIST_HEAD` for its head, then `sheetRenderers["<id>"]` for its renderer |
| where a band comes from | the constant name, then read its `(i)` text — every band states its provenance |
| a season decision | `readSeason(`, `seasonTrackAll`, `cycleModel(` |
| who may change a shared value | the store it lives in: `now` (`js/data.ts`), `ui` (`js/dom.ts`), `page` (`js/history.ts`) |
| why something looks the way it does | `docs/DECISIONS.md` for Keren's decisions, `docs/ARCHITECTURE.md` for the reasons, `git log -S` for the history |
| a live-data wiring | `LIVE("` where a document lands, `onLive("` in `js/repaint.ts` for what it redraws |

