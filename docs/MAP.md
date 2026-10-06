# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **9,663 lines** in 36 files, about 642 KB, roughly **182 thousand tokens**. No session can
read it whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Use the **anchor** column with grep —
> `grep -rn 'function curveVerdict(' src/` — and treat `file:line` as rough orientation only.

Generated from commit `dbba46e` on 2026-10-06.

## The page

`src/manifest.json` joins these parts into `index.html`. The `.js` entry is bundled by esbuild
(`tools/bundle.js`) into one script in its place.

| Part | Lines | What |
|---|---|---|
| `page-head.html` | 5 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist |
| `styles.css` | 1,467 | the whole stylesheet, every token and rule |
| `page-body.html` | 358 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| `js/main.ts` | 32 modules | the entry: imports every module and calls their boots in order |
| `page-tail.html` | 45 | the bundle's closing tag, the service-worker registration, </body></html> |

Counts: **32** modules, **737** top-level functions, **119** top-level vars, **393** exported names, **19** boots.

## Modules, in boot order

| Module | Lines | Declarations | Imports from |
|---|---|---|---|
| `js/dom.ts` | 170 | 26 | `format` |
| `js/live.ts` | 207 | 22 | `format` |
| `js/refresh-season.ts` | 42 | 5 | `format`, `history-fred` |
| `js/data.ts` | 573 | 78 | `format`, `history-fred`, `live` |
| `js/model.ts` | 391 | 57 | `data`, `dom`, `format`, `history-fred`, `refresh-season` |
| `js/history.ts` | 470 | 40 | `charts`, `data`, `dom`, `format`, `live`, `model` |
| `js/readings.ts` | 857 | 75 | `charts`, `data`, `dom`, `format`, `history`, `history-fred`, `live`, `model`, `refresh-season` |
| `js/roster.ts` | 150 | 13 | `charts`, `data`, `format`, `history`, `history-fred`, `live`, `marks`, `readings`, `refresh-season` |
| `js/render-core.ts` | 600 | 47 | `charts`, `data`, `dom`, `format`, `history`, `history-charts`, `live`, `model`, `readings`, `refresh-season`, `roster` |
| `js/render-pages.ts` | 450 | 11 | `charts`, `data`, `dom`, `format`, `history`, `history-charts`, `history-fred`, `live`, `model`, `readings`, `refresh-season`, `render-core` |
| `js/diagnosis.ts` | 90 | 13 | `ai-insights`, `cycle-analysis`, `data`, `dom`, `fed-phases`, `format`, `live`, `marks`, `model`, `quarter-sheet`, `refresh-season`, `render-core` |
| `js/dial-cycle.ts` | 390 | 22 | `cycle-analysis`, `data`, `diagnosis`, `dom`, `format`, `live`, `model`, `quarter-sheet`, `refresh-season`, `render-core`, `render-pages`, `roster` |
| `js/analysis.ts` | 151 | 15 | `charts`, `data`, `dial-cycle`, `dom`, `era`, `format`, `history`, `insights`, `live`, `model`, `refresh-season`, `render-core`, `render-pages`, `roster` |
| `js/portfolio.ts` | 108 | 17 | `data`, `dom`, `format`, `marks`, `model`, `render-core` |
| `js/pages-nav.ts` | 213 | 18 | `cycle-tab`, `data`, `dial-cycle`, `dom`, `inner-pages`, `live`, `readings`, `render-core`, `render-pages`, `roster` |
| `js/tabs-menu.ts` | 228 | 10 | `data`, `dial-cycle`, `dom`, `format`, `live`, `model`, `pages-nav`, `refresh-season` |
| `js/repaint.ts` | 89 | 11 | `ai-insights`, `cycle-analysis`, `data`, `diagnosis`, `dom`, `insights`, `live`, `model`, `readings`, `render-core`, `roster` |
| `js/ai-insights.ts` | 182 | 39 | `charts`, `cycle-analysis`, `data`, `dom`, `marks`, `model`, `refresh-season`, `render-core`, `roster` |
| `js/charts.ts` | 300 | 39 | `format` |
| `js/cycle-analysis.ts` | 403 | 100 | `charts`, `data`, `dom`, `era`, `fed-phases`, `format`, `history`, `insights`, `marks`, `model`, `refresh-season`, `render-core`, `roster` |
| `js/cycle-tab.ts` | 97 | 4 | `data`, `dom`, `format`, `history-charts`, `indicators`, `insights`, `model`, `readings`, `refresh-season`, `render-core`, `roster` |
| `js/era.ts` | 55 | 8 | `format`, `roster` |
| `js/fed-phases.ts` | 126 | 21 | `data`, `format`, `history-fred`, `model`, `refresh-season` |
| `js/format.ts` | 87 | 38 | — |
| `js/history-charts.ts` | 406 | 13 | `charts`, `data`, `format`, `history`, `history-fred`, `model`, `readings`, `refresh-season` |
| `js/history-fred.ts` | 20 | 14 | — |
| `js/indicators.ts` | 296 | 36 | `charts`, `data`, `dom`, `format`, `history`, `history-fred`, `model`, `readings`, `refresh-season`, `render-core`, `roster` |
| `js/inner-pages.ts` | 287 | 13 | `charts`, `data`, `dial-cycle`, `dom`, `format`, `history`, `history-charts`, `model`, `readings`, `refresh-season`, `render-core` |
| `js/insights.ts` | 187 | 19 | `data`, `dom`, `format`, `model`, `readings`, `refresh-season`, `roster` |
| `js/marks.ts` | 69 | 28 | — |
| `js/quarter-sheet.ts` | 52 | 4 | `data`, `dom`, `format`, `model`, `refresh-season`, `render-core` |
| `js/main.ts` | 42 | 0 | `analysis`, `data`, `diagnosis`, `dial-cycle`, `dom`, `history`, `live`, `model`, `pages-nav`, `portfolio`, `readings`, `refresh-season`, `render-core`, `render-pages`, `repaint`, `roster`, `tabs-menu` |

## The boots

A module's top level holds only declarations and values that need nothing else. Whatever runs
at load and reads another module sits in its `boot…()` function, and `js/main.ts` calls them in
this order. `tools/load-order.js` proves no shared value is read before something sets it.

| Order | Boot | Lines |
|---|---|---|
| 1 | `bootDom` | `js/dom.ts:160`–169 |
| 2 | `bootDone` | `js/live.ts:198`–200 |
| 3 | `bootLive` | `js/live.ts:201`–206 |
| 4 | `bootRefreshSeason` | `js/refresh-season.ts:33`–41 |
| 5 | `bootData` | `js/data.ts:521`–572 |
| 6 | `bootModel` | `js/model.ts:368`–390 |
| 7 | `bootHistory` | `js/history.ts:446`–469 |
| 8 | `bootReadings` | `js/readings.ts:679`–748 |
| 9 | `bootReadingRegistry` | `js/readings.ts:791`–856 |
| 10 | `bootRoster` | `js/roster.ts:137`–149 |
| 11 | `bootRenderCore` | `js/render-core.ts:590`–599 |
| 12 | `bootRenderPages` | `js/render-pages.ts:432`–449 |
| 13 | `bootDiagnosis` | `js/diagnosis.ts:86`–89 |
| 14 | `bootDialCycle` | `js/dial-cycle.ts:366`–389 |
| 15 | `bootAnalysis` | `js/analysis.ts:146`–150 |
| 16 | `bootPortfolio` | `js/portfolio.ts:107`–? |
| 17 | `bootPagesNav` | `js/pages-nav.ts:206`–212 |
| 18 | `bootTabsMenu` | `js/tabs-menu.ts:216`–227 |
| 19 | `bootRepaint` | `js/repaint.ts:72`–88 |

## Script, module by module

Each module's banner comments are its spine. Each declaration is listed under the section it
falls in. **export** marks a name other modules import.

### `js/dom.ts`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 23 | `byId` · export | `function byId(` |
| 31 | `need` · export | `function need(` |
| 36 | `byIdMaybe` · export | `function byIdMaybe(` |
| 37 | `put` · export | `function put(` |
| 42 | `elFrom` · export | `function elFrom(` |
| 44 | `layer` · export | `function layer(` |
| 45 | `onScreen` · export | `function onScreen(` |
| 46 | `focusQuiet` · export | `function focusQuiet(` |
| 47 | `tabStops` | `function tabStops(` |
| 51 | `keepTab` | `function keepTab(` |
| 57 | `rovingKeys` · export | `function rovingKeys(` |
| 72 | `trendText` · export | `function trendText(` |
| 73 | `trendHead` | `function trendHead(` |
| 74 | `trendCard` | `function trendCard(` |
| 77 | `trendDoor` · export | `function trendDoor(` |
| 80 | `trendJump` · export | `function trendJump(` |
| 83 | `trendBox` · export | `function trendBox(` |
| 84 | `trendSoon` · export | `function trendSoon(` |
| 87 | `moreRow` · export | `function moreRow(` |
| 93 | `viewMore` · export | `function viewMore(` |
| 103 | `appendSvgMarkup` · export | `function appendSvgMarkup(` |
| 125 | `addSources` · export | `function addSources(` |
| 136 | `SVG_NS` | `var SVG_NS =` |
| 137 | `svgEl` · export | `function svgEl(` |
| 143 | `detailSlot` · export | `function detailSlot(` |
| 153 | `expandBtn` · export | `function expandBtn(` |

### `js/live.ts`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 26 | `docValue` | `function docValue(` |
| 35 | `docOk` | `function docOk(` |
| 39 | `datedOk` | `function datedOk(` |
| 42 | `plainText` · export | `function plainText(` |
| 47 | `liveIsoOf` · export | `function liveIsoOf(` |
| 50 | `newestDay` | `function newestDay(` |
| 55 | `raiseFloor` | `function raiseFloor(` |
| 60 | `olderThanFile` | `function olderThanFile(` |
| 64 | `liveInto` · export | `function liveInto(` |
| 68 | `landLive` | `function landLive(` |

#### Repaint

| Line | Name | Anchor |
|---|---|---|
| 78 | `repaintLive` · export | `function repaintLive(` |
| 83 | `shapeOk` | `function shapeOk(` |
| 115 | `defineReadings` · export | `function defineReadings(` |
| 119 | `onLive` · export | `function onLive(` |
| 120 | `exposeLive` · export | `function exposeLive(` |
| 123 | `KINDS` | `var KINDS =` |
| 124 | `checkLiveCoverage` · export | `function checkLiveCoverage(` |
| 138 | `receive` | `function receive(` |
| 151 | `applyLive` | `function applyLive(` |
| 158 | `refreshLiveData` · export | `function refreshLiveData(` |
| 175 | `fetchSiteData` · export | `function fetchSiteData(` |
| 191 | `forgetLive` · export | `function forgetLive(` |

### `js/refresh-season.ts`

#### Layers: Escape closes only the topmost open layer; Tab stays inside a dialog

| Line | Name | Anchor |
|---|---|---|
| 6 | `hubTodayHtml` · export | `function hubTodayHtml(` |
| 10 | `asOfLabel` · export | `function asOfLabel(` |

#### SEASON

| Line | Name | Anchor |
|---|---|---|
| 24 | `PCE_FROM` · export | `var PCE_FROM =` |
| 26 | `gdpQuarterlyYoY` · export | `var gdpQuarterlyYoY =` |
| 30 | `fedGauge` | `function fedGauge(` |

### `js/data.ts`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 6 | `BUFFETT_LINE` · export | `var BUFFETT_LINE =` |
| 12 | `CAPE_FAIR` · export | `var CAPE_FAIR =` |
| 13 | `VIX_CALM` · export | `var VIX_CALM =` |

#### DATA (single source of truth — edit here on refresh)

| Line | Name | Anchor |
|---|---|---|
| 62 | `YIELD_CURVE_ASOF` | `var YIELD_CURVE_ASOF =` |
| 63 | `curveAsOf` · export | `function curveAsOf(` |
| 66 | `monthsToCurve` | `function monthsToCurve(` |
| 70 | `deriveUninvLag` · export | `function deriveUninvLag(` |
| 81 | `t10y3mRecessions` · export | `var t10y3mRecessions =` |

#### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

| Line | Name | Anchor |
|---|---|---|
| 92 | `UNINV_FROM` | `var UNINV_FROM =` |
| 93 | `uninvLagToday` · export | `var uninvLagToday =` |
| 132 | `labRow` · export | `function labRow(` |
| 133 | `PRODUCTIVITY_TREND` · export | `var PRODUCTIVITY_TREND =` |

#### Consumer confidence

| Line | Name | Anchor |
|---|---|---|
| 135 | `CONFIDENCE_LINE` · export | `var CONFIDENCE_LINE =` |

#### Desire: real spending on durable goods

| Line | Name | Anchor |
|---|---|---|
| 137 | `DESIRE_LINE` · export | `var DESIRE_LINE =` |

#### Desire: the equity risk premium

| Line | Name | Anchor |
|---|---|---|
| 139 | `PREMIUM_LINE` · export | `var PREMIUM_LINE =` |

#### The deficit, year by year

| Line | Name | Anchor |
|---|---|---|
| 141 | `DEF_FROM_YEAR` · export | `var DEF_FROM_YEAR =` |
| 142 | `deficitHistory` · export | `var deficitHistory =` |
| 143 | `DEF_MEAN` · export | `var DEF_MEAN =` |
| 146 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 151 | `fedFundsRange` · export | `function fedFundsRange(` |
| 155 | `buffettHistory` · export | `var buffettHistory =` |
| 172 | `syncGrossDebt` | `function syncGrossDebt(` |
| 182 | `stressOf` | `function stressOf(` |
| 186 | `deriveStress` | `function deriveStress(` |
| 187 | `checkGrossDebt` | `function checkGrossDebt(` |
| 197 | `curveAt` · export | `function curveAt(` |
| 201 | `curveNeed` | `function curveNeed(` |
| 202 | `curveSpread` · export | `function curveSpread(` |
| 203 | `policyDirection` · export | `function policyDirection(` |
| 206 | `capeAsOf` · export | `function capeAsOf(` |
| 207 | `syncCapeHistory` · export | `function syncCapeHistory(` |
| 211 | `valRow` · export | `function valRow(` |
| 215 | `fileRow` · export | `function fileRow(` |
| 216 | `M2V_FROM_YEAR` · export | `var M2V_FROM_YEAR =` |
| 217 | `m2vHistory` · export | `var m2vHistory =` |
| 218 | `m2vPre` | `var m2vPre =` |
| 219 | `PULSE_PRE2008` · export | `var PULSE_PRE2008 =` |
| 220 | `PULSE_STEADY_LO` · export | `var PULSE_STEADY_LO =` |
| 221 | `PULSE_FLOOR` · export | `var PULSE_FLOOR =` |
| 238 | `checkVelocityHistory` | `function checkVelocityHistory(` |
| 243 | `M2_FROM_YEAR` · export | `var M2_FROM_YEAR =` |
| 244 | `m2Level` | `var m2Level =` |
| 245 | `m2Yoy` · export | `var m2Yoy =` |
| 246 | `m2Ref` | `var m2Ref =` |
| 247 | `M2_PACE_LO` · export | `var M2_PACE_LO =` |
| 248 | `M2_NORM` · export | `var M2_NORM =` |
| 249 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 250 | `unempHistory` · export | `var unempHistory =` |
| 254 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 262 | `SAHM_TRIGGER` · export | `var SAHM_TRIGGER =` |
| 263 | `unempSahm` · export | `var unempSahm =` |
| 264 | `avg3` | `function avg3(` |
| 268 | `sahmAt` | `function sahmAt(` |
| 273 | `sahmOf` · export | `function sahmOf(` |
| 277 | `NROU_NOW` · export | `var NROU_NOW =` |
| 278 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 285 | `ACT_BAND_LO` · export | `var ACT_BAND_LO =` |
| 286 | `CPI_TARGET` · export | `var CPI_TARGET =` |
| 290 | `NEUTRAL_RATE` · export | `var NEUTRAL_RATE =` |
| 295 | `FED_TARGET_SRC` · export | `var FED_TARGET_SRC =` |
| 296 | `TEMP_BAND_LO` · export | `var TEMP_BAND_LO =` |
| 297 | `PCE_SWITCH_SRC` · export | `var PCE_SWITCH_SRC =` |
| 298 | `PCE_SRC` · export | `var PCE_SRC =` |
| 299 | `GDP_NORM` · export | `var GDP_NORM =` |
| 300 | `checkMoneyStock` | `function checkMoneyStock(` |
| 363 | `DSR_FROM_YEAR` · export | `var DSR_FROM_YEAR =` |
| 364 | `dsrHistory` · export | `var dsrHistory =` |
| 365 | `SAV_FROM_YEAR` · export | `var SAV_FROM_YEAR =` |
| 366 | `savHistory` · export | `var savHistory =` |
| 367 | `SAV_THIN` · export | `var SAV_THIN =` |
| 368 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 376 | `SAV_OFFSET` · export | `var SAV_OFFSET =` |
| 377 | `dsrNow` · export | `var dsrNow =` |
| 378 | `savNow` · export | `var savNow =` |
| 379 | `DSR_MEAN` · export | `var DSR_MEAN =` |
| 380 | `curveNoteFull` · export | `var curveNoteFull =` |
| 391 | `VOL_JOIN` · export | `var VOL_JOIN =` |
| 513 | `typicalCycleYears` · export | `var typicalCycleYears =` |

### `js/model.ts`

#### The season, computed

| Line | Name | Anchor |
|---|---|---|
| 13 | `slopeOf` | `function slopeOf(` |
| 18 | `monthIndex` | `function monthIndex(` |
| 19 | `cpiTrend` | `function cpiTrend(` |
| 26 | `cpiYear` | `function cpiYear(` |
| 30 | `cpiDirectionOf` | `function cpiDirectionOf(` |
| 31 | `cpiDirectionAt` · export | `function cpiDirectionAt(` |
| 35 | `HOLD_BAND` · export | `var HOLD_BAND =` |
| 36 | `PEAK_YEARS` · export | `var PEAK_YEARS =` |
| 39 | `regimeOf` | `function regimeOf(` |
| 42 | `readSeason` | `function readSeason(` |
| 53 | `potentialOf` · export | `function potentialOf(` |
| 58 | `peakTrend` | `function peakTrend(` |
| 64 | `closingReading` | `function closingReading(` |
| 68 | `quarterRegime` · export | `function quarterRegime(` |
| 69 | `qIndex` | `function qIndex(` |
| 70 | `recessionRecord` · export | `function recessionRecord(` |
| 95 | `regimeAt` | `function regimeAt(` |
| 96 | `seasonTitle` · export | `function seasonTitle(` |
| 97 | `cycleReturns` · export | `function cycleReturns(` |
| 107 | `cycleModel` · export | `function cycleModel(` |
| 146 | `potentialGap` · export | `function potentialGap(` |
| 150 | `seasonWhyFor` | `function seasonWhyFor(` |
| 156 | `inflationFigure` · export | `function inflationFigure(` |
| 161 | `growthWord` · export | `function growthWord(` |
| 164 | `contractingClause` | `function contractingClause(` |
| 168 | `cycleNowNote` · export | `function cycleNowNote(` |
| 176 | `seasonGroup` · export | `function seasonGroup(` |

#### The diagnosis: how she feels, and what has followed

| Line | Name | Anchor |
|---|---|---|
| 178 | `rankToDate` · export | `function rankToDate(` |
| 182 | `diagnoseToday` · export | `function diagnoseToday(` |

#### Her mood: one range from Depression to Mania

| Line | Name | Anchor |
|---|---|---|
| 187 | `rankIn` | `function rankIn(` |
| 193 | `moodSeries` | `function moodSeries(` |
| 201 | `moodAt` | `function moodAt(` |
| 207 | `MOOD_TURN` · export | `var MOOD_TURN =` |
| 210 | `moodWord` | `function moodWord(` |
| 214 | `moodRead` | `function moodRead(` |
| 222 | `moodTrack` · export | `function moodTrack(` |
| 228 | `moodToday` · export | `function moodToday(` |
| 232 | `moodSince` | `function moodSince(` |
| 233 | `cycleStory` · export | `function cycleStory(` |

#### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

| Line | Name | Anchor |
|---|---|---|
| 244 | `cycleSpanYears` · export | `function cycleSpanYears(` |
| 247 | `cycleByName` · export | `function cycleByName(` |
| 251 | `openCycle` · export | `function openCycle(` |
| 255 | `cycleSlice` · export | `function cycleSlice(` |
| 263 | `totalGrowthYears` · export | `function totalGrowthYears(` |
| 271 | `cycleMonths` · export | `function cycleMonths(` |
| 279 | `cycLabel` · export | `function cycLabel(` |
| 283 | `cycleQtrIdx` · export | `function cycleQtrIdx(` |
| 288 | `totalRiseIn` · export | `function totalRiseIn(` |
| 298 | `yearInflation` · export | `function yearInflation(` |
| 302 | `yearGrowth` · export | `function yearGrowth(` |
| 305 | `yearSoFar` · export | `function yearSoFar(` |
| 309 | `eraInflation` · export | `function eraInflation(` |
| 318 | `eraGrowth` · export | `function eraGrowth(` |
| 334 | `eraMarketTotal` · export | `function eraMarketTotal(` |
| 339 | `forgetMood` · export | `function forgetMood(` |
| 345 | `seasonYears` | `function seasonYears(` |
| 356 | `seasonQuarters` | `function seasonQuarters(` |

### `js/history.ts`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 13 | `page` · export | `var page =` |

#### the history card's head

| Line | Name | Anchor |
|---|---|---|
| 23 | `DOTS` | `var DOTS =` |
| 25 | `headPickRow` · export | `function headPickRow(` |
| 31 | `histHead` · export | `function histHead(` |
| 47 | `headMenuHtml` | `function headMenuHtml(` |
| 74 | `paintHeadMenus` | `function paintHeadMenus(` |
| 85 | `headMoreBtn` | `function headMoreBtn(` |
| 89 | `headMenuFirst` | `function headMenuFirst(` |
| 93 | `headMenuShut` | `function headMenuShut(` |
| 98 | `histNote` · export | `function histNote(` |
| 99 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |
| 107 | `timelineSpan` · export | `function timelineSpan(` |
| 112 | `timelineFor` · export | `function timelineFor(` |
| 129 | `windowScale` · export | `function windowScale(` |
| 144 | `histReadEnsure` · export | `function histReadEnsure(` |
| 164 | `geomFmt` | `function geomFmt(` |
| 165 | `attrNum` | `function attrNum(` |
| 166 | `histReadFill` · export | `function histReadFill(` |
| 214 | `histAxisEnds` | `function histAxisEnds(` |
| 225 | `histLegend` · export | `function histLegend(` |
| 284 | `refitHistory` · export | `function refitHistory(` |
| 294 | `wireHistHover` | `function wireHistHover(` |
| 327 | `histShow` | `function histShow(` |
| 336 | `histLive` | `function histLive(` |
| 343 | `histKeysWire` | `function histKeysWire(` |
| 357 | `mWindowFrom` · export | `function mWindowFrom(` |
| 361 | `qWindowFrom` · export | `function qWindowFrom(` |
| 365 | `defFrom` · export | `function defFrom(` |
| 369 | `tabSegs` · export | `function tabSegs(` |
| 377 | `tabBar` · export | `function tabBar(` |
| 380 | `modeBar` | `function modeBar(` |
| 384 | `controlKeys` · export | `function controlKeys(` |
| 388 | `controlKeysIn` | `function controlKeysIn(` |
| 394 | `histControls` · export | `function histControls(` |
| 402 | `controlsBox` | `function controlsBox(` |
| 403 | `pageCycle` · export | `function pageCycle(` |
| 408 | `cyclePicker` | `function cyclePicker(` |
| 427 | `rangeBar` · export | `function rangeBar(` |
| 431 | `headSigma` · export | `function headSigma(` |
| 436 | `attachHistory` · export | `function attachHistory(` |

### `js/readings.ts`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 24 | `productivityWord` | `function productivityWord(` |
| 35 | `confidenceWord` | `function confidenceWord(` |
| 41 | `realRateWord` | `function realRateWord(` |
| 47 | `desireWord` | `function desireWord(` |
| 53 | `deficitBlock` · export | `function deficitBlock(` |
| 116 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 120 | `meterFlagged` · export | `function meterFlagged(` |
| 124 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 138 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 151 | `confidenceInfoHtml` | `function confidenceInfoHtml(` |
| 163 | `desireInfoHtml` | `function desireInfoHtml(` |
| 174 | `premiumInfoHtml` | `function premiumInfoHtml(` |
| 186 | `realRateInfoHtml` | `function realRateInfoHtml(` |
| 194 | `deriveRealRate` | `function deriveRealRate(` |
| 218 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 232 | `activityInfoHtml` | `function activityInfoHtml(` |
| 251 | `bandMonths` | `function bandMonths(` |
| 254 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 284 | `volumeBlock` | `function volumeBlock(` |
| 294 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 304 | `volumeVerdict` · export | `function volumeVerdict(` |
| 311 | `unempState` · export | `function unempState(` |
| 316 | `sahmNow` · export | `function sahmNow(` |
| 317 | `potentialSentence` | `function potentialSentence(` |
| 325 | `growthInfoHtml` · export | `function growthInfoHtml(` |
| 345 | `velocityVerdict` | `function velocityVerdict(` |
| 353 | `laborWord` · export | `function laborWord(` |
| 356 | `temperatureWord` · export | `function temperatureWord(` |
| 361 | `deriveLaggingTags` | `function deriveLaggingTags(` |
| 367 | `derivePulseTag` | `function derivePulseTag(` |
| 402 | `volatilityTag` · export | `function volatilityTag(` |
| 408 | `fearCurve` · export | `function fearCurve(` |
| 413 | `curveVerdict` · export | `function curveVerdict(` |
| 418 | `valuationVerdict` · export | `function valuationVerdict(` |
| 426 | `tempCaptionFull` · export | `var tempCaptionFull =` |
| 427 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 431 | `pressureZone` · export | `function pressureZone(` |
| 437 | `HZN_BACK` | `var HZN_BACK =` |
| 438 | `hznLast` | `function hznLast(` |
| 439 | `hznNeed` | `function hznNeed(` |
| 440 | `hznDelta` | `function hznDelta(` |
| 441 | `hznRecord` | `function hznRecord(` |
| 445 | `hznBack` | `function hznBack(` |
| 446 | `horizonWord` | `function horizonWord(` |
| 451 | `horizonInfoHtml` · export | `function horizonInfoHtml(` |
| 472 | `pulseBlock` | `function pulseBlock(` |
| 488 | `householdsWord` | `function householdsWord(` |
| 495 | `dsrInfoHtml` · export | `function dsrInfoHtml(` |
| 512 | `savInfoHtml` · export | `function savInfoHtml(` |
| 529 | `vixPct` · export | `function vixPct(` |
| 533 | `volatilityRing` · export | `function volatilityRing(` |
| 538 | `volatilityDetailHtml` · export | `function volatilityDetailHtml(` |
| 552 | `marketWord` · export | `function marketWord(` |
| 556 | `marketCol` · export | `function marketCol(` |
| 557 | `marketInfoHtml` | `function marketInfoHtml(` |
| 566 | `rowReadings` · export | `function rowReadings(` |
| 567 | `indOf` · export | `function indOf(` |
| 568 | `policyFacts` | `function policyFacts(` |
| 575 | `policyFactRows` · export | `function policyFactRows(` |
| 578 | `growthShownCap` · export | `function growthShownCap(` |
| 579 | `phaseClass` · export | `function phaseClass(` |
| 580 | `activityStackHtml` | `function activityStackHtml(` |
| 590 | `seatTemperature` | `function seatTemperature(` |
| 598 | `DATED_UNIT` · export | `var DATED_UNIT =` |
| 599 | `indPeriod` · export | `function indPeriod(` |
| 607 | `deriveFeelingReadings` | `function deriveFeelingReadings(` |

#### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

| Line | Name | Anchor |
|---|---|---|
| 749 | `isNum` | `function isNum(` |
| 751 | `rowId` | `function rowId(` |
| 752 | `rowLike` | `function rowLike(` |
| 765 | `rowsOk` | `function rowsOk(` |
| 768 | `deriveHorizon` | `function deriveHorizon(` |
| 781 | `fieldsKept` | `function fieldsKept(` |
| 785 | `vixAsOf` | `function vixAsOf(` |
| 786 | `coincidentAsOf` | `function coincidentAsOf(` |
| 787 | `periodIso` | `function periodIso(` |

### `js/roster.ts`

#### The roster: every reading, declared once

| Line | Name | Anchor |
|---|---|---|
| 32 | `keyed` · export | `function keyed(` |
| 38 | `lastDate` | `function lastDate(` |
| 39 | `compiledDay` | `function compiledDay(` |
| 40 | `isoLabel` | `function isoLabel(` |
| 44 | `paintWhen` · export | `function paintWhen(` |
| 49 | `labPeriod` | `function labPeriod(` |
| 50 | `rosterFor` · export | `function rosterFor(` |
| 51 | `peekOf` · export | `function peekOf(` |
| 56 | `cardDate` · export | `function cardDate(` |
| 57 | `checkRoster` | `function checkRoster(` |
| 75 | `periodOf` · export | `function periodOf(` |
| 76 | `categoriesShown` · export | `function categoriesShown(` |
| 80 | `declareRoster` | `function declareRoster(` |

### `js/render-core.ts`

#### RENDER: range bars + card helpers

| Line | Name | Anchor |
|---|---|---|
| 19 | `metricSheet` · export | `function metricSheet(` |
| 25 | `drawsPage` · export | `function drawsPage(` |
| 26 | `needInd` · export | `function needInd(` |
| 27 | `openOf` · export | `function openOf(` |
| 28 | `levelHeadings` | `function levelHeadings(` |
| 36 | `wireDetailModal` | `function wireDetailModal(` |

#### A season strip and the economy's chips, shared by the cycle list and the Diagnosis's years

| Line | Name | Anchor |
|---|---|---|
| 72 | `strip` · export | `function strip(` |
| 75 | `stripDots` · export | `function stripDots(` |
| 78 | `stripTrack` · export | `function stripTrack(` |
| 81 | `seasonRuns` · export | `function seasonRuns(` |
| 90 | `seasonPills` · export | `function seasonPills(` |
| 98 | `marketPills` · export | `function marketPills(` |
| 106 | `seasonRunsLabel` · export | `function seasonRunsLabel(` |
| 109 | `econChips` · export | `function econChips(` |

#### THE SUBJECT ROW

| Line | Name | Anchor |
|---|---|---|
| 115 | `subjectRow` · export | `function subjectRow(` |
| 125 | `dxHead` · export | `function dxHead(` |
| 126 | `dxSys` · export | `function dxSys(` |
| 127 | `catHeadCard` · export | `function catHeadCard(` |
| 131 | `subjectIcon` · export | `function subjectIcon(` |
| 132 | `timingMark` | `function timingMark(` |
| 140 | `timingPill` · export | `function timingPill(` |
| 145 | `collapseEmptyBlocks` · export | `function collapseEmptyBlocks(` |
| 153 | `seatPageFoot` · export | `function seatPageFoot(` |
| 164 | `headHtml` | `function headHtml(` |
| 169 | `cardDetailHtml` · export | `function cardDetailHtml(` |

#### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

| Line | Name | Anchor |
|---|---|---|
| 195 | `latestYieldPoint` | `function latestYieldPoint(` |
| 202 | `withLatestPoint` | `function withLatestPoint(` |
| 207 | `pressureMaturities` | `function pressureMaturities(` |
| 231 | `registerFlowPages` | `function registerFlowPages(` |
| 270 | `renderPressureRow` | `function renderPressureRow(` |
| 278 | `ylmYearMarks` | `function ylmYearMarks(` |
| 297 | `ylmColumns` | `function ylmColumns(` |
| 317 | `ylmFitLine` | `function ylmFitLine(` |
| 329 | `pressureHead` | `function pressureHead(` |
| 347 | `showPressureView` | `function showPressureView(` |
| 352 | `renderPressurePage` | `function renderPressurePage(` |

#### Pressure's Insights

| Line | Name | Anchor |
|---|---|---|
| 481 | `renderPressureInsights` | `function renderPressureInsights(` |
| 516 | `catList` · export | `function catList(` |
| 517 | `marketPeek` · export | `function marketPeek(` |
| 522 | `spreadPick` · export | `var spreadPick =` |
| 523 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 524 | `spreadLabel` | `function spreadLabel(` |
| 528 | `peekArt` | `function peekArt(` |
| 529 | `catItem` · export | `function catItem(` |
| 536 | `catCard` · export | `function catCard(` |
| 578 | `tempPeek` · export | `function tempPeek(` |
| 584 | `gdpPeek` · export | `function gdpPeek(` |

### `js/render-pages.ts`

#### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

| Line | Name | Anchor |
|---|---|---|
| 17 | `spreadSeries` | `function spreadSeries(` |
| 61 | `renderSpreadHistory` | `function renderSpreadHistory(` |

#### RENDER: un-inversion-to-recession historical lag panel

| Line | Name | Anchor |
|---|---|---|
| 156 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

#### RENDER: the Treasury spreads, inside Pressure

| Line | Name | Anchor |
|---|---|---|
| 181 | `renderHorizonPage` | `function renderHorizonPage(` |
| 205 | `spreadInsights` | `function spreadInsights(` |

#### RENDER: Valuation (slow)

| Line | Name | Anchor |
|---|---|---|
| 234 | `renderValuationTag` | `function renderValuationTag(` |

#### RENDER: Hormones

| Line | Name | Anchor |
|---|---|---|
| 240 | `renderHormones` | `function renderHormones(` |

#### RENDER: Volatility — the VIX since 1986, and the shape of its curve today

| Line | Name | Anchor |
|---|---|---|
| 333 | `renderVolatility` | `function renderVolatility(` |
| 378 | `volatilityHighlights` | `function volatilityHighlights(` |

#### RENDER: Analysis subjects — one headline figure per collapsible section

| Line | Name | Anchor |
|---|---|---|
| 407 | `renderSubjectRows` | `function renderSubjectRows(` |

#### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

| Line | Name | Anchor |
|---|---|---|
| 424 | `setTopbar` · export | `function setTopbar(` |

### `js/diagnosis.ts`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 15 | `DIAG_SRC` | `var DIAG_SRC =` |
| 20 | `diagnosisHtml` | `function diagnosisHtml(` |
| 24 | `cycleCard` | `function cycleCard(` |
| 25 | `yearByYear` | `function yearByYear(` |
| 34 | `yearRow` | `function yearRow(` |
| 40 | `yearStrip` | `function yearStrip(` |
| 45 | `stripGap` | `function stripGap(` |
| 48 | `yearMarket` | `function yearMarket(` |
| 52 | `renderDiagnosis` · export | `function renderDiagnosis(` |
| 56 | `fitYearDots` · export | `function fitYearDots(` |
| 69 | `diagnosisHost` | `function diagnosisHost(` |
| 74 | `buildDoors` | `function buildDoors(` |
| 78 | `buildDiagnosis` | `function buildDiagnosis(` |

### `js/dial-cycle.ts`

#### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

| Line | Name | Anchor |
|---|---|---|
| 22 | `drawDial` | `function drawDial(` |

#### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

| Line | Name | Anchor |
|---|---|---|
| 104 | `wireThemeChoice` | `function wireThemeChoice(` |

#### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

| Line | Name | Anchor |
|---|---|---|
| 122 | `renderCycleKicker` | `function renderCycleKicker(` |

#### the hub: the reading inside the circle

| Line | Name | Anchor |
|---|---|---|
| 142 | `hubSet` | `function hubSet(` |
| 150 | `hubOpen` | `function hubOpen(` |
| 157 | `hubShowDefault` | `function hubShowDefault(` |
| 164 | `hubShowQuarter` | `function hubShowQuarter(` |
| 169 | `hubShowYear` | `function hubShowYear(` |
| 179 | `one` · export | `function one(` |
| 180 | `cycleView` · export | `function cycleView(` |
| 181 | `renderCycleDial` | `function renderCycleDial(` |
| 264 | `dialKeyStep` | `function dialKeyStep(` |
| 272 | `dialSay` | `function dialSay(` |

#### the whole view, for one cycle

| Line | Name | Anchor |
|---|---|---|
| 278 | `renderCycleView` · export | `function renderCycleView(` |
| 283 | `showEra` | `function showEra(` |
| 287 | `showCycle` · export | `function showCycle(` |

#### A cycle's season strip (carried by the one cycle row)

| Line | Name | Anchor |
|---|---|---|
| 289 | `aheadWord` | `function aheadWord(` |
| 290 | `seasonStripHtml` · export | `function seasonStripHtml(` |
| 307 | `marketStripHtml` · export | `function marketStripHtml(` |
| 333 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 334 | `settleStrips` · export | `function settleStrips(` |
| 358 | `settleAll` · export | `function settleAll(` |

### `js/analysis.ts`

#### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

| Line | Name | Anchor |
|---|---|---|
| 22 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 35 | `renderCycleList` | `function renderCycleList(` |

#### A closed cycle, shown on the Cycle tab's own page

| Line | Name | Anchor |
|---|---|---|
| 72 | `eraReading` | `function eraReading(` |
| 82 | `eraValue` | `function eraValue(` |
| 88 | `eraRange` | `function eraRange(` |
| 93 | `eraMini` | `function eraMini(` |
| 98 | `lead` | `function lead(` |
| 99 | `figOf` | `function figOf(` |
| 100 | `part` | `function part(` |
| 101 | `parentOf` | `function parentOf(` |
| 102 | `eraCard` | `function eraCard(` |
| 120 | `eraCards` | `function eraCards(` |
| 126 | `eraShow` | `function eraShow(` |
| 133 | `enterEra` | `function enterEra(` |
| 140 | `leaveEra` | `function leaveEra(` |

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
| 17 | `convertLeadingSigns` | `function convertLeadingSigns(` |
| 39 | `sheetRank` | `function sheetRank(` |
| 47 | `orderSheet` | `function orderSheet(` |
| 53 | `rowFrom` | `function rowFrom(` |
| 54 | `tagOf` | `function tagOf(` |
| 57 | `openTarget` | `function openTarget(` |
| 58 | `tabPanel` | `function tabPanel(` |
| 59 | `scrollSoon` | `function scrollSoon(` |
| 60 | `viewTab` | `function viewTab(` |
| 61 | `orderMetricSheets` | `function orderMetricSheets(` |
| 69 | `renderSignsList` | `function renderSignsList(` |

#### THE NAVIGATION CONTROLLER

| Line | Name | Anchor |
|---|---|---|
| 97 | `BACK` | `var BACK =` |
| 98 | `backPush` | `function backPush(` |
| 99 | `backClear` | `function backClear(` |
| 100 | `backPopped` | `function backPopped(` |
| 101 | `plainHome` | `function plainHome(` |
| 104 | `buildNav` | `function buildNav(` |

#### The metric page

| Line | Name | Anchor |
|---|---|---|
| 198 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### `js/tabs-menu.ts`

#### RENDER: About Gyneconomy — the season model and the framework

| Line | Name | Anchor |
|---|---|---|
| 13 | `seasonGrid` | `function seasonGrid(` |
| 23 | `recessionLine` | `function recessionLine(` |
| 27 | `seasonModelNote` | `function seasonModelNote(` |
| 37 | `rangePos` | `function rangePos(` |
| 42 | `cycleModelLine` | `function cycleModelLine(` |
| 46 | `wireIdea` | `function wireIdea(` |
| 49 | `renderSeasonRows` | `function renderSeasonRows(` |

#### TAB NAVIGATION (Cycle / Analysis / Herstory / Portfolio)

| Line | Name | Anchor |
|---|---|---|
| 95 | `renderTopbar` | `function renderTopbar(` |
| 124 | `wireTabKeys` | `function wireTabKeys(` |

#### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

| Line | Name | Anchor |
|---|---|---|
| 126 | `wireMenu` | `function wireMenu(` |

### `js/repaint.ts`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 13 | `paintReading` | `function paintReading(` |
| 26 | `repaintVolatilityRing` | `function repaintVolatilityRing(` |
| 32 | `paintTag` | `function paintTag(` |
| 39 | `repaintVolatility` | `function repaintVolatility(` |
| 43 | `repaintPressureRow` | `function repaintPressureRow(` |
| 48 | `repaintPressureChart` | `function repaintPressureChart(` |
| 52 | `syncCape` | `function syncCape(` |
| 53 | `repaintValuationRow` | `function repaintValuationRow(` |
| 58 | `repaintPolicy` | `function repaintPolicy(` |
| 62 | `repaintDiagnosis` | `function repaintDiagnosis(` |
| 66 | `repaintDerived` | `function repaintDerived(` |

### `js/ai-insights.ts`

#### AI Insights: Claude's dated reading of the open cycle, with today's closest past moments

| Line | Name | Anchor |
|---|---|---|
| 15 | `ECHO_WINDOW` | `var ECHO_WINDOW =` |
| 16 | `echoWindowWord` | `function echoWindowWord(` |
| 19 | `MONTH_NAMES` | `var MONTH_NAMES =` |
| 20 | `ECHO_FROM` | `var ECHO_FROM =` |
| 22 | `openIdx` | `function openIdx(` |
| 23 | `labOf` | `function labOf(` |
| 24 | `figure` | `function figure(` |
| 28 | `fill` | `function fill(` |
| 32 | `quartersOf` | `function quartersOf(` |
| 38 | `quarterly` | `function quarterly(` |
| 48 | `lastQuarter` | `function lastQuarter(` |
| 51 | `cycleOfYear` | `function cycleOfYear(` |
| 52 | `qIdx` | `function qIdx(` |
| 53 | `qName` | `function qName(` |
| 54 | `carried` | `function carried(` |
| 61 | `panel` | `function panel(` |
| 62 | `buildPanel` | `function buildPanel(` |
| 77 | `pathGap` | `function pathGap(` |
| 87 | `forgetEchoes` · export | `function forgetEchoes(` |
| 88 | `echoes` · export | `function echoes(` |
| 100 | `thenWords` | `function thenWords(` |
| 107 | `pairWords` | `function pairWords(` |
| 108 | `echoLine` | `function echoLine(` |
| 116 | `asOfWords` | `function asOfWords(` |
| 120 | `aiDetail` | `function aiDetail(` |
| 126 | `AI_PAGE` | `var AI_PAGE =` |
| 127 | `CHAPTER_MARKS` | `var CHAPTER_MARKS =` |
| 128 | `rankNow` | `function rankNow(` |
| 132 | `pic` | `function pic(` |
| 133 | `risksPic` | `function risksPic(` |
| 140 | `tilesPic` | `function tilesPic(` |
| 149 | `segAt` | `function segAt(` |
| 157 | `pathStrip` | `function pathStrip(` |
| 163 | `CHAPTER_PICS` | `var CHAPTER_PICS =` |
| 164 | `para` | `function para(` |
| 165 | `leadBoxes` | `function leadBoxes(` |
| 168 | `aiPage` | `function aiPage(` |
| 174 | `buildAiPage` · export | `function buildAiPage(` |
| 179 | `aiInsights` · export | `function aiInsights(` |

### `js/charts.ts`

#### The range bar

| Line | Name | Anchor |
|---|---|---|
| 15 | `trendOf` · export | `function trendOf(` |
| 34 | `trendPill` · export | `function trendPill(` |

#### The inner pages' charts

| Line | Name | Anchor |
|---|---|---|
| 48 | `yearsAcross` | `function yearsAcross(` |
| 49 | `xLabelOf` | `function xLabelOf(` |
| 58 | `fitLine` · export | `function fitLine(` |
| 62 | `fitGroup` · export | `function fitGroup(` |

#### The history component's axes

| Line | Name | Anchor |
|---|---|---|
| 79 | `vGrid` · export | `function vGrid(` |
| 83 | `COL_FILL` | `var COL_FILL =` |
| 84 | `colPath` · export | `function colPath(` |
| 89 | `colWidth` · export | `function colWidth(` |
| 94 | `AXIS` · export | `var AXIS =` |
| 95 | `histFrame` · export | `function histFrame(` |
| 102 | `xLabel` · export | `function xLabel(` |
| 105 | `crossLine` · export | `function crossLine(` |
| 108 | `zeroRule` · export | `function zeroRule(` |
| 111 | `meanRule` · export | `function meanRule(` |
| 113 | `publishGeom` · export | `function publishGeom(` |
| 114 | `histBar` · export | `function histBar(` |
| 117 | `histTip` · export | `function histTip(` |
| 118 | `avgRule` · export | `function avgRule(` |
| 121 | `vhOpen` · export | `function vhOpen(` |
| 122 | `autoTicks` | `function autoTicks(` |
| 130 | `chartAxes` · export | `function chartAxes(` |
| 155 | `divergeChart` · export | `function divergeChart(` |

#### A series' highest reading within a span

| Line | Name | Anchor |
|---|---|---|
| 189 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 190 | `PEEK_W` | `var PEEK_W =` |
| 191 | `PEEK_H` | `var PEEK_H =` |
| 192 | `colPeek` · export | `function colPeek(` |
| 209 | `meterPeek` | `function meterPeek(` |
| 223 | `windowYears` · export | `function windowYears(` |
| 231 | `refName` | `function refName(` |
| 235 | `PULSE_WINDOW` · export | `var PULSE_WINDOW =` |
| 236 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 237 | `pulseClipN` | `var pulseClipN =` |
| 238 | `beatPath` | `function beatPath(` |
| 255 | `pulseTraceSvg` · export | `function pulseTraceSvg(` |
| 269 | `pulsePeek` · export | `function pulsePeek(` |
| 272 | `peekCard` · export | `function peekCard(` |
| 290 | `vitalRingSvg` · export | `function vitalRingSvg(` |

### `js/cycle-analysis.ts`

#### Her chart: every reading, cycle by cycle, against her own normal ranges

| Line | Name | Anchor |
|---|---|---|
| 21 | `NUM` | `var NUM =` |
| 24 | `BASELINE` | `var BASELINE =` |
| 26 | `quartile` | `function quartile(` |
| 30 | `normOf` | `function normOf(` |
| 35 | `closedCount` | `function closedCount(` |
| 36 | `visitOf` | `function visitOf(` |
| 43 | `visits` | `function visits(` |
| 44 | `present` | `function present(` |
| 45 | `regularity` | `function regularity(` |
| 50 | `cycleLab` | `function cycleLab(` |
| 54 | `cycleReadings` | `function cycleReadings(` |
| 60 | `readingsNorm` | `function readingsNorm(` |
| 63 | `spanOf` | `function spanOf(` |
| 66 | `cardPrint` | `function cardPrint(` |
| 75 | `readingLab` | `function readingLab(` |
| 82 | `forgetLabs` · export | `function forgetLabs(` |
| 83 | `cycleLabs` | `function cycleLabs(` |
| 91 | `labs` · export | `function labs(` |
| 92 | `normAt` | `function normAt(` |
| 93 | `unread` | `function unread(` |
| 94 | `state` | `function state(` |
| 99 | `yearsWord` · export | `function yearsWord(` |
| 100 | `fmt` · export | `function fmt(` |
| 101 | `TIERS` | `var TIERS =` |
| 102 | `tier` | `function tier(` |
| 106 | `catTitle` | `function catTitle(` |
| 107 | `side` | `function side(` |
| 108 | `findWords` | `function findWords(` |
| 112 | `rowTag` | `function rowTag(` |
| 113 | `cardWord` | `function cardWord(` |
| 117 | `labItem` | `function labItem(` |
| 123 | `ring` | `function ring(` |
| 127 | `scoreTier` | `function scoreTier(` |
| 133 | `scoreBox` | `function scoreBox(` |
| 137 | `scoreRing` | `function scoreRing(` |
| 138 | `scoreTile` | `function scoreTile(` |
| 141 | `foldSec` | `function foldSec(` |
| 146 | `labSec` | `function labSec(` |
| 150 | `subSec` | `function subSec(` |
| 153 | `bySub` | `function bySub(` |
| 161 | `bySystem` | `function bySystem(` |
| 170 | `findOf` | `function findOf(` |
| 171 | `LENS` | `var LENS =` |
| 172 | `tierOpts` | `function tierOpts(` |
| 175 | `menuRows` | `function menuRows(` |
| 186 | `filterTags` | `function filterTags(` |
| 191 | `finder` | `function finder(` |
| 197 | `narrow` | `function narrow(` |
| 209 | `menuOf` | `function menuOf(` |
| 210 | `showMenu` | `function showMenu(` |
| 214 | `redraw` | `function redraw(` |
| 219 | `pickTier` | `function pickTier(` |
| 223 | `pickCycle` | `function pickCycle(` |
| 227 | `fillMenu` | `function fillMenu(` |
| 234 | `openSub` | `function openSub(` |
| 238 | `toggleMenu` | `function toggleMenu(` |
| 243 | `riskLabs` · export | `function riskLabs(` |
| 244 | `judged` | `function judged(` |
| 245 | `score` | `function score(` |
| 246 | `listWords` · export | `function listWords(` |
| 247 | `word` | `function word(` |
| 248 | `cap` | `function cap(` |
| 250 | `depthWords` | `function depthWords(` |
| 259 | `methodFacts` | `function methodFacts(` |
| 262 | `chartDetail` | `function chartDetail(` |
| 270 | `cycleScore` · export | `function cycleScore(` |
| 271 | `chartDoor` · export | `function chartDoor(` |
| 275 | `HOME_ID` | `var HOME_ID =` |
| 276 | `statRow` | `function statRow(` |
| 281 | `statBody` | `function statBody(` |
| 284 | `closedVisits` | `function closedVisits(` |
| 285 | `meanOf` | `function meanOf(` |
| 286 | `lengths` | `function lengths(` |
| 287 | `typical` | `function typical(` |
| 288 | `INFO` | `var INFO =` |
| 289 | `TICK` | `var TICK =` |
| 290 | `lengthBars` | `function lengthBars(` |
| 298 | `lengthPage` | `function lengthPage(` |
| 304 | `figo` | `function figo(` |
| 308 | `variationPage` | `function variationPage(` |
| 313 | `statsHome` | `function statsHome(` |
| 320 | `insightSec` | `function insightSec(` |
| 323 | `catName` | `function catName(` |
| 324 | `markName` | `function markName(` |
| 325 | `countTag` | `function countTag(` |
| 326 | `insightsHome` | `function insightsHome(` |
| 333 | `homeSections` | `function homeSections(` |
| 337 | `drawChart` | `function drawChart(` |
| 345 | `IND` · export | `var IND =` |
| 346 | `searchDoor` | `function searchDoor(` |
| 349 | `searchShell` | `function searchShell(` |
| 350 | `catBar` | `function catBar(` |
| 354 | `pickCat` | `function pickCat(` |
| 360 | `buildFind` | `function buildFind(` |
| 361 | `fold` | `function fold(` |
| 365 | `wireFinder` | `function wireFinder(` |
| 382 | `wireCatDoors` | `function wireCatDoors(` |
| 388 | `openMenus` | `function openMenus(` |
| 389 | `shutMenus` | `function shutMenus(` |
| 390 | `buildCycleChart` · export | `function buildCycleChart(` |

### `js/cycle-tab.ts`

#### THE CYCLE TAB: cards and categories

| Line | Name | Anchor |
|---|---|---|
| 19 | `placeSignPair` | `function placeSignPair(` |
| 42 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 58 | `buildCategories` | `function buildCategories(` |
| 72 | `renderPeekAndCategories` · export | `function renderPeekAndCategories(` |

### `js/era.ts`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 7 | `rosterRows` · export | `function rosterRows(` |
| 8 | `kT` · export | `function kT(` |
| 13 | `eraFig` · export | `function eraFig(` |
| 20 | `cardFace` · export | `function cardFace(` |
| 27 | `cardValue` · export | `function cardValue(` |
| 33 | `rosterRow` | `function rosterRow(` |
| 47 | `readingRoster` · export | `function readingRoster(` |
| 54 | `prettyK` · export | `function prettyK(` |

### `js/fed-phases.ts`

#### The Fed's phases and the inflation peak

| Line | Name | Anchor |
|---|---|---|
| 12 | `monthIdx` | `function monthIdx(` |
| 13 | `monthName` | `function monthName(` |
| 14 | `fedPhases` · export | `function fedPhases(` |
| 23 | `phaseAt` | `function phaseAt(` |
| 28 | `topOf` | `function topOf(` |
| 30 | `runTops` | `function runTops(` |
| 35 | `findRuns` | `function findRuns(` |
| 42 | `cyclePeak` · export | `function cyclePeak(` |

#### The phases chart

| Line | Name | Anchor |
|---|---|---|
| 49 | `VIEW_W` | `var VIEW_W =` |
| 50 | `growthPoints` | `function growthPoints(` |
| 56 | `monthPoints` | `function monthPoints(` |
| 63 | `curve` | `function curve(` |
| 73 | `pct` | `function pct(` |
| 74 | `bandsHtml` | `function bandsHtml(` |
| 85 | `yearsHtml` | `function yearsHtml(` |
| 90 | `plotSvg` | `function plotSvg(` |
| 100 | `level` | `function level(` |
| 101 | `peakLevel` | `function peakLevel(` |
| 104 | `levelsHtml` | `function levelsHtml(` |
| 112 | `endMonthOf` | `function endMonthOf(` |
| 117 | `fedPhasesCard` · export | `function fedPhasesCard(` |

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
| 30 | `atQuarter` · export | `function atQuarter(` |
| 31 | `atMonth` · export | `function atMonth(` |
| 32 | `ordinal` · export | `function ordinal(` |
| 33 | `MINOR` | `var MINOR =` |
| 34 | `capWord` | `function capWord(` |
| 37 | `titleCase` · export | `function titleCase(` |
| 43 | `hiCard` · export | `function hiCard(` |
| 46 | `dropWhatIsShown` · export | `function dropWhatIsShown(` |
| 53 | `highlightsHtml` · export | `function highlightsHtml(` |
| 62 | `CHEV` · export | `var CHEV =` |
| 63 | `prettyKey` · export | `function prettyKey(` |
| 68 | `qLabel` · export | `function qLabel(` |
| 69 | `monthLabel` · export | `function monthLabel(` |
| 70 | `clampPct` · export | `function clampPct(` |
| 71 | `ledeHtml` · export | `function ledeHtml(` |
| 72 | `auxStat` · export | `function auxStat(` |
| 75 | `facts` · export | `function facts(` |
| 76 | `factsFrom` · export | `function factsFrom(` |
| 80 | `srcBlock` · export | `function srcBlock(` |
| 81 | `srcHtml` | `function srcHtml(` |
| 82 | `fmtSigned` · export | `function fmtSigned(` |
| 83 | `popHead` · export | `function popHead(` |
| 84 | `hubLine` · export | `function hubLine(` |
| 85 | `qPretty` · export | `function qPretty(` |
| 86 | `capeFmt1` · export | `function capeFmt1(` |

### `js/history-charts.ts`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 11 | `deficitChart` · export | `function deficitChart(` |
| 78 | `colScale` | `function colScale(` |
| 83 | `velocityHistoryChart` · export | `function velocityHistoryChart(` |
| 131 | `yearTicks` | `function yearTicks(` |
| 146 | `unempHistoryChart` · export | `function unempHistoryChart(` |
| 184 | `fedFundsHistoryChart` · export | `function fedFundsHistoryChart(` |
| 226 | `householdsChart` · export | `function householdsChart(` |
| 268 | `cpiHistoryChart` · export | `function cpiHistoryChart(` |
| 306 | `gdpHistoryChart` · export | `function gdpHistoryChart(` |
| 353 | `m2GrowthChart` · export | `function m2GrowthChart(` |
| 394 | `m2Step` · export | `function m2Step(` |
| 398 | `heatEdges` | `function heatEdges(` |
| 402 | `heatStep` · export | `function heatStep(` |

### `js/history-fred.ts`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 3 | `fedFundsHistory` · export | `var fedFundsHistory =` |
| 4 | `volatilityHistory` · export | `var volatilityHistory =` |
| 5 | `fiscalHistory` · export | `var fiscalHistory =` |
| 6 | `grossDebtQuarterly` · export | `var grossDebtQuarterly =` |
| 7 | `treasuryQuarterly` · export | `var treasuryQuarterly =` |
| 8 | `productivityHistory` · export | `var productivityHistory =` |
| 9 | `sp500MonthlyHistory` · export | `var sp500MonthlyHistory =` |
| 10 | `confidenceHistory` · export | `var confidenceHistory =` |
| 11 | `durablesHistory` · export | `var durablesHistory =` |
| 12 | `premiumHistory` · export | `var premiumHistory =` |
| 14 | `gdpYoYBefore` · export | `var gdpYoYBefore =` |
| 15 | `cpiYoYBefore` · export | `var cpiYoYBefore =` |
| 17 | `sp500ReturnsBefore` · export | `var sp500ReturnsBefore =` |
| 18 | `gdpGrowthBefore` · export | `var gdpGrowthBefore =` |

### `js/indicators.ts`

#### The split indicators: one card and one page each

| Line | Name | Anchor |
|---|---|---|
| 22 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 28 | `midOf` | `function midOf(` |
| 29 | `meterWord` | `function meterWord(` |
| 30 | `splitPages` | `function splitPages(` |
| 47 | `confidencePage` | `function confidencePage(` |
| 53 | `desirePage` | `function desirePage(` |
| 59 | `premiumPage` | `function premiumPage(` |
| 65 | `realRatePage` | `function realRatePage(` |
| 71 | `marketPage` | `function marketPage(` |
| 77 | `productivityPage` | `function productivityPage(` |
| 82 | `splitSpec` | `function splitSpec(` |
| 88 | `splitInfo` | `function splitInfo(` |
| 92 | `periodTicks` | `function periodTicks(` |
| 97 | `periodOfSeries` | `function periodOfSeries(` |
| 98 | `drawSplit` | `function drawSplit(` |
| 115 | `mountSplit` | `function mountSplit(` |
| 128 | `splitPeek` | `function splitPeek(` |
| 132 | `indicatorPeeks` · export | `function indicatorPeeks(` |
| 140 | `deficitPeek` | `function deficitPeek(` |
| 144 | `catSheet` · export | `function catSheet(` |
| 149 | `groupId` · export | `function groupId(` |
| 150 | `groupCard` | `function groupCard(` |
| 158 | `groupSheet` | `function groupSheet(` |
| 165 | `appendPicks` · export | `function appendPicks(` |
| 173 | `doorSel` | `function doorSel(` |
| 174 | `catPicks` · export | `function catPicks(` |

#### The split indicators' insights

| Line | Name | Anchor |
|---|---|---|
| 186 | `buffettInsight` | `function buffettInsight(` |
| 201 | `debtInsight` | `function debtInsight(` |
| 216 | `productivityInsight` | `function productivityInsight(` |
| 226 | `confidenceInsight` | `function confidenceInsight(` |
| 237 | `desireInsight` | `function desireInsight(` |
| 248 | `premiumInsight` | `function premiumInsight(` |
| 261 | `realRateInsight` | `function realRateInsight(` |
| 271 | `ORDINAL` | `var ORDINAL =` |
| 272 | `marketInsight` | `function marketInsight(` |
| 284 | `interestInsight` | `function interestInsight(` |

### `js/inner-pages.ts`

#### THE INNER PAGES

| Line | Name | Anchor |
|---|---|---|
| 15 | `actCycleMonths` | `function actCycleMonths(` |
| 23 | `householdsHighlights` | `function householdsHighlights(` |
| 42 | `redrawSheet` | `function redrawSheet(` |
| 51 | `registerTempGdpPages` | `function registerTempGdpPages(` |
| 96 | `registerActivityPowerDeficitPages` | `function registerActivityPowerDeficitPages(` |
| 133 | `registerHouseholdsValuationPages` | `function registerHouseholdsValuationPages(` |
| 180 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 208 | `valuationHighlights` | `function valuationHighlights(` |
| 220 | `tempHighlights` | `function tempHighlights(` |
| 237 | `gdpHighlights` | `function gdpHighlights(` |
| 252 | `shutPickers` | `function shutPickers(` |
| 258 | `wireControlKeys` | `function wireControlKeys(` |
| 277 | `renderMetricPages` · export | `function renderMetricPages(` |

### `js/insights.ts`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 15 | `insightCirculation` | `function insightCirculation(` |
| 47 | `insightWeather` | `function insightWeather(` |
| 86 | `seasonCards` | `function seasonCards(` |
| 91 | `marketCycleCard` | `function marketCycleCard(` |
| 103 | `MOOD_CHART` | `var MOOD_CHART =` |
| 110 | `MOOD_SRC` | `var MOOD_SRC =` |
| 115 | `curvePath` | `function curvePath(` |
| 123 | `moodCallout` | `function moodCallout(` |
| 127 | `moodCycleSvg` | `function moodCycleSvg(` |
| 139 | `isRead` | `function isRead(` |
| 140 | `moodInfo` | `function moodInfo(` |
| 149 | `moodFigures` | `function moodFigures(` |
| 155 | `moodCard` | `function moodCard(` |
| 159 | `insightMood` | `function insightMood(` |
| 165 | `storyBeats` | `function storyBeats(` |
| 176 | `storyText` | `function storyText(` |
| 181 | `catInsight` · export | `function catInsight(` |
| 182 | `insightRow` · export | `function insightRow(` |
| 183 | `replaceInsight` · export | `function replaceInsight(` |

### `js/marks.ts`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 1 | `debtSvg` · export | `function debtSvg(` |
| 2 | `interestSvg` · export | `function interestSvg(` |
| 4 | `budgetSvg` · export | `function budgetSvg(` |
| 6 | `dropSvg` | `function dropSvg(` |
| 8 | `gaugeSvg` · export | `function gaugeSvg(` |
| 12 | `diamondSvg` · export | `function diamondSvg(` |
| 16 | `sproutSvg` · export | `function sproutSvg(` |
| 24 | `markSvg` | `function markSvg(` |
| 27 | `orbitSvg` · export | `function orbitSvg(` |
| 28 | `heartSvg` · export | `function heartSvg(` |
| 30 | `flameSvg` · export | `function flameSvg(` |
| 33 | `clockSvg` · export | `function clockSvg(` |
| 34 | `thermoSvg` · export | `function thermoSvg(` |
| 37 | `personSvg` · export | `function personSvg(` |
| 39 | `calendarSvg` · export | `function calendarSvg(` |
| 40 | `sparkleSvg` · export | `function sparkleSvg(` |
| 42 | `umbrellaSvg` · export | `function umbrellaSvg(` |
| 44 | `slidersSvg` · export | `function slidersSvg(` |
| 46 | `chartSvg` · export | `function chartSvg(` |
| 48 | `ecgSvg` · export | `function ecgSvg(` |
| 50 | `weatherSvg` · export | `function weatherSvg(` |
| 52 | `moodSvg` · export | `function moodSvg(` |
| 53 | `circulationSvg` · export | `function circulationSvg(` |
| 54 | `boltSvg` · export | `function boltSvg(` |
| 55 | `houseSvg` · export | `function houseSvg(` |
| 58 | `marketSvg` · export | `function marketSvg(` |
| 61 | `bagSvg` · export | `function bagSvg(` |
| 64 | `volatilitySvg` · export | `function volatilitySvg(` |

### `js/quarter-sheet.ts`

#### A quarter's sheet: its Temperature, Growth and S&P 500 at the quarter, then the season's prose

| Line | Name | Anchor |
|---|---|---|
| 13 | `quarterCards` | `function quarterCards(` |
| 24 | `quarterSheet` · export | `function quarterSheet(` |
| 29 | `quarterPopup` | `function quarterPopup(` |
| 51 | `peekEl` | `function peekEl(` |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Where |
|---|---|
| `deficit-range` | `js/inner-pages.ts:115` |
| `pressure-range` | `js/repaint.ts:50` |
| `sheet-marker-deficit` | `js/inner-pages.ts:112` |
| `sheet-metric-gdp` | `js/inner-pages.ts:76` |
| `sheet-metric-households` | `js/inner-pages.ts:134` |
| `sheet-metric-temp` | `js/inner-pages.ts:52` |
| `sheet-metric-valuation` | `js/inner-pages.ts:154` |
| `sheet-sign-activity` | `js/inner-pages.ts:97` |

### `pageRange`

the window a page's range control starts on

_none found — if that is wrong, the pattern in `tools/make-map.py` needs updating._

## Stylesheet, section by section

| Line | Section |
|---|---|
| 180 | top bar (Keren, Sep 19, 2026, with Clue's screens): the open tab's title in the middle, a round menu |
| 282 | calendar tab (yearly view, one card per year grouped into five eras — see marketCycles below) |
| 314 | season strip |
| 340 | THE GAP (Keren, V385: "…so if one day I'll tell you I want the spacing to be 30, you would just change |
| 404 | tab bar (app-style segmented navigation) |
| 428 | vitals strip (health-app framing: two at-a-glance rings, Growth and Rates, built from data used |
| 443 | temperature chart (Cycle tab), after Natural Cycles' temperature view: a column per month of the |
| 495 | journal (editorial content tab) |
| 496 | content tab: reading companion |
| 554 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
| 805 | Volume's red ramp (Keren, V389: "volume is, in gynaecology, blood — so it should be different shades of |
| 849 | the maturity chart's columns wear the curve's three zones (Keren, V394: "a colour that represents the |
| 921 | One gap between an inner page's containers (Keren, V381: "the spacing between containers in each inner |
| 1,091 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 1,100 | The symptoms: a cycle's years against today |
| 1,239 | hero: yield curve |
| 1,269 | the readout (Keren, from Apple Health): it never changes the page's height, which is why it beats a |
| 1,288 | 10Y-3M spread history (quarterly, with recession bands) |
| 1,316 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 1,324 | long cycle (structural layer) |
| 1,331 | indicator grid |
| 1,357 | info icon + popover (progressive disclosure for longer notes) |
| 1,371 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 1,457 | footer |

## Markup landmarks

Banner comments in `page-body.html`:

| Line | Section |
|---|---|

Every `id` in the static DOM (109), which is what the renderers fill:

| Line | id |
|---|---|
| 6 | `topbar-back` |
| 9 | `topbar-title` |
| 10 | `menu-btn` |
| 17 | `tab-cycle` |
| 18 | `tab-chart` |
| 19 | `tab-analysis` |
| 20 | `tab-portfolio` |
| 24 | `main` |
| 26 | `panel-cycle` |
| 27 | `cycle-view` |
| 30 | `cycle-kicker` |
| 33 | `cycle-dial` |
| 35 | `season-wheel-hub-open` |
| 36 | `season-wheel-hub-date` |
| 37 | `season-wheel-hub-theme` |
| 38 | `season-wheel-hub-detail` |
| 40 | `season-wheel-keys` |
| 41 | `season-wheel-live` |
| 49 | `today-analysis` |
| 50 | `peek-row` |
| 51 | `sheet-metric-temp` |
| 52 | `temp-timing` |
| 53 | `temp-chart` |
| 54 | `temp-rangebar` |
| 56 | `temp-head` |
| 57 | `temp-history` |
| 58 | `temp-hist-tooltip` |
| 59 | `temp-trend` |
| 61 | `temp-highlights` |
| 63 | `sheet-metric-gdp` |
| 64 | `gdp-timing` |
| 65 | `gdp-chart` |
| 66 | `gdp-rangebar` |
| 68 | `gdp-head` |
| 69 | `gdp-history` |
| 70 | `gdp-hist-tooltip` |
| 71 | `gdp-trend` |
| 73 | `gdp-highlights` |
| 77 | `sheet-marker-deficit` |
| 77 | `deficit-timing` |
| 79 | `sheet-metric-households` |
| 80 | `households-timing` |
| 81 | `households-chart` |
| 82 | `households-highlights` |
| 85 | `sheet-metric-valuation` |
| 86 | `valuation-timing` |
| 87 | `valuation-chart` |
| 88 | `valuation-highlights` |
| 95 | `subj-value-hormones` |
| 96 | `subj-say-hormones` |
| 102 | `hormones-history` |
| 103 | `hormones-insights` |
| 112 | `subj-value-pressure` |
| 113 | `subj-say-pressure` |
| 119 | `pressure-timeline` |
| 121 | `pressure-head` |
| 122 | `ylm-shell` |
| 123 | `ylm-svg` |
| 124 | `ylm-tooltip` |
| 126 | `spread-history-shell` |
| 127 | `spread-history-svg` |
| 128 | `spread-history-tooltip` |
| 130 | `ylm-trend` |
| 132 | `pressure-insights` |
| 139 | `subj-ring-sentiment` |
| 142 | `subj-value-sentiment` |
| 143 | `subj-say-sentiment` |
| 144 | `subj-spark-sentiment` |
| 150 | `fear-history` |
| 151 | `curve-highlights` |
| 157 | `signs-list` |
| 162 | `panel-analysis` |
| 163 | `calendar-list` |
| 164 | `cycle-list` |
| 165 | `cycle-more` |
| 166 | `cycle-more-label` |
| 170 | `calendar-cycle` |
| 173 | `panel-portfolio` |
| 175 | `panel-chart` |
| 176 | `chart-home` |
| 179 | `more-menu` |
| 182 | `menu-back` |
| 196 | `sources-open` |
| 204 | `appearance-current` |
| 207 | `app-version` |
| 211 | `sheet-howto` |
| 254 | `sheet-book` |
| 264 | `idea-prose` |
| 270 | `idea-more` |
| 275 | `cycle-model-line` |
| 283 | `seasons-kicker` |
| 284 | `seasons-rows` |
| 288 | `framework-kicker` |
| 289 | `framework-rows` |
| 299 | `sheet-appearance` |
| 307 | `theme-toggle` |
| 314 | `sheet-contact` |
| 323 | `contact-form` |
| 324 | `contact-title` |
| 325 | `contact-message` |
| 327 | `contact-hint` |
| 328 | `contact-send` |
| 334 | `sheet-sources` |
| 337 | `sources-back` |
| 342 | `asof-text` |
| 343 | `sources-groups` |
| 349 | `detail-backdrop` |
| 351 | `detail-modal-close` |
| 352 | `detail-modal-body` |

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

