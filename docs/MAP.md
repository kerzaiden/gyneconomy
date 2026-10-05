# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **9,290 lines** in 36 files, about 613 KB, roughly **174 thousand tokens**. No session can
read it whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Use the **anchor** column with grep —
> `grep -rn 'function curveVerdict(' src/` — and treat `file:line` as rough orientation only.

Generated from commit `eab5856` on 2026-10-05.

## The page

`src/manifest.json` joins these parts into `index.html`. The `.js` entry is bundled by esbuild
(`tools/bundle.js`) into one script in its place.

| Part | Lines | What |
|---|---|---|
| `page-head.html` | 5 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist |
| `styles.css` | 1,426 | the whole stylesheet, every token and rule |
| `page-body.html` | 356 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| `js/main.ts` | 32 modules | the entry: imports every module and calls their boots in order |
| `page-tail.html` | 45 | the bundle's closing tag, the service-worker registration, </body></html> |

Counts: **32** modules, **669** top-level functions, **111** top-level vars, **377** exported names, **19** boots.

## Modules, in boot order

| Module | Lines | Declarations | Imports from |
|---|---|---|---|
| `js/dom.ts` | 160 | 25 | `format` |
| `js/live.ts` | 207 | 22 | `format` |
| `js/refresh-season.ts` | 38 | 4 | `format`, `history-fred` |
| `js/data.ts` | 556 | 75 | `format`, `history-fred`, `live` |
| `js/model.ts` | 346 | 47 | `data`, `dom`, `format`, `history-fred`, `refresh-season` |
| `js/history.ts` | 470 | 40 | `charts`, `data`, `dom`, `format`, `live`, `model` |
| `js/readings.ts` | 809 | 70 | `charts`, `data`, `dom`, `format`, `history`, `history-fred`, `live`, `model`, `refresh-season` |
| `js/roster.ts` | 148 | 13 | `charts`, `data`, `format`, `history`, `history-fred`, `live`, `marks`, `readings`, `refresh-season` |
| `js/render-core.ts` | 598 | 45 | `charts`, `data`, `dom`, `format`, `history`, `history-charts`, `live`, `model`, `readings`, `refresh-season`, `roster` |
| `js/render-pages.ts` | 450 | 11 | `charts`, `data`, `dom`, `format`, `history`, `history-charts`, `history-fred`, `live`, `model`, `readings`, `refresh-season`, `render-core` |
| `js/diagnosis.ts` | 79 | 14 | `ai-insights`, `cycle-analysis`, `data`, `dom`, `fed-phases`, `format`, `live`, `marks`, `model`, `quarter-sheet`, `refresh-season`, `render-core` |
| `js/dial-cycle.ts` | 385 | 21 | `data`, `diagnosis`, `dom`, `format`, `live`, `model`, `quarter-sheet`, `refresh-season`, `render-core`, `render-pages`, `roster` |
| `js/analysis.ts` | 158 | 15 | `charts`, `data`, `dial-cycle`, `dom`, `era`, `format`, `history`, `insights`, `live`, `model`, `refresh-season`, `render-core`, `render-pages`, `roster` |
| `js/portfolio.ts` | 110 | 17 | `dom`, `format`, `marks`, `model`, `render-core` |
| `js/pages-nav.ts` | 213 | 18 | `cycle-tab`, `data`, `dial-cycle`, `dom`, `inner-pages`, `live`, `readings`, `render-core`, `render-pages`, `roster` |
| `js/tabs-menu.ts` | 203 | 5 | `data`, `dial-cycle`, `dom`, `format`, `live`, `model`, `pages-nav`, `refresh-season` |
| `js/repaint.ts` | 82 | 10 | `data`, `diagnosis`, `dom`, `insights`, `live`, `model`, `readings`, `render-core`, `roster` |
| `js/ai-insights.ts` | 179 | 36 | `charts`, `cycle-analysis`, `data`, `dom`, `marks`, `model`, `refresh-season`, `render-core`, `roster` |
| `js/charts.ts` | 300 | 39 | `format` |
| `js/cycle-analysis.ts` | 266 | 57 | `data`, `dom`, `format`, `history`, `marks`, `model`, `render-core`, `roster` |
| `js/cycle-tab.ts` | 97 | 4 | `data`, `dom`, `format`, `history-charts`, `indicators`, `insights`, `model`, `readings`, `refresh-season`, `render-core`, `roster` |
| `js/era.ts` | 42 | 6 | `format`, `roster` |
| `js/fed-phases.ts` | 135 | 24 | `data`, `format`, `history-fred`, `model`, `refresh-season` |
| `js/format.ts` | 87 | 38 | — |
| `js/history-charts.ts` | 406 | 13 | `charts`, `data`, `format`, `history`, `history-fred`, `model`, `readings`, `refresh-season` |
| `js/history-fred.ts` | 18 | 14 | — |
| `js/indicators.ts` | 280 | 34 | `charts`, `data`, `dom`, `format`, `history`, `history-fred`, `model`, `readings`, `refresh-season`, `render-core`, `roster` |
| `js/inner-pages.ts` | 287 | 13 | `charts`, `data`, `dial-cycle`, `dom`, `format`, `history`, `history-charts`, `model`, `readings`, `refresh-season`, `render-core` |
| `js/insights.ts` | 186 | 18 | `data`, `dom`, `format`, `model`, `readings`, `refresh-season`, `roster` |
| `js/marks.ts` | 69 | 28 | — |
| `js/quarter-sheet.ts` | 52 | 4 | `data`, `dom`, `format`, `model`, `refresh-season`, `render-core` |
| `js/main.ts` | 42 | 0 | `analysis`, `data`, `diagnosis`, `dial-cycle`, `dom`, `history`, `live`, `model`, `pages-nav`, `portfolio`, `readings`, `refresh-season`, `render-core`, `render-pages`, `repaint`, `roster`, `tabs-menu` |

## The boots

A module's top level holds only declarations and values that need nothing else. Whatever runs
at load and reads another module sits in its `boot…()` function, and `js/main.ts` calls them in
this order. `tools/load-order.js` proves no shared value is read before something sets it.

| Order | Boot | Lines |
|---|---|---|
| 1 | `bootDom` | `js/dom.ts:150`–159 |
| 2 | `bootDone` | `js/live.ts:198`–200 |
| 3 | `bootLive` | `js/live.ts:201`–206 |
| 4 | `bootRefreshSeason` | `js/refresh-season.ts:29`–37 |
| 5 | `bootData` | `js/data.ts:504`–555 |
| 6 | `bootModel` | `js/model.ts:299`–345 |
| 7 | `bootHistory` | `js/history.ts:446`–469 |
| 8 | `bootReadings` | `js/readings.ts:632`–700 |
| 9 | `bootReadingRegistry` | `js/readings.ts:743`–808 |
| 10 | `bootRoster` | `js/roster.ts:135`–147 |
| 11 | `bootRenderCore` | `js/render-core.ts:588`–597 |
| 12 | `bootRenderPages` | `js/render-pages.ts:432`–449 |
| 13 | `bootDiagnosis` | `js/diagnosis.ts:75`–78 |
| 14 | `bootDialCycle` | `js/dial-cycle.ts:361`–384 |
| 15 | `bootAnalysis` | `js/analysis.ts:153`–157 |
| 16 | `bootPortfolio` | `js/portfolio.ts:109`–? |
| 17 | `bootPagesNav` | `js/pages-nav.ts:206`–212 |
| 18 | `bootTabsMenu` | `js/tabs-menu.ts:193`–202 |
| 19 | `bootRepaint` | `js/repaint.ts:65`–81 |

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
| 93 | `appendSvgMarkup` · export | `function appendSvgMarkup(` |
| 115 | `addSources` · export | `function addSources(` |
| 126 | `SVG_NS` | `var SVG_NS =` |
| 127 | `svgEl` · export | `function svgEl(` |
| 133 | `detailSlot` · export | `function detailSlot(` |
| 143 | `expandBtn` · export | `function expandBtn(` |

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
| 24 | `cpiYoYHistory` · export | `var cpiYoYHistory =` |
| 25 | `gdpQuarterlyYoY` · export | `var gdpQuarterlyYoY =` |

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
| 77 | `t10y3mRecessions` · export | `var t10y3mRecessions =` |

#### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

| Line | Name | Anchor |
|---|---|---|
| 88 | `UNINV_FROM` | `var UNINV_FROM =` |
| 89 | `uninvLagToday` · export | `var uninvLagToday =` |
| 125 | `labRow` · export | `function labRow(` |
| 126 | `PRODUCTIVITY_TREND` · export | `var PRODUCTIVITY_TREND =` |

#### Consumer confidence

| Line | Name | Anchor |
|---|---|---|
| 128 | `CONFIDENCE_LINE` · export | `var CONFIDENCE_LINE =` |

#### Desire: real spending on durable goods

| Line | Name | Anchor |
|---|---|---|
| 130 | `DESIRE_LINE` · export | `var DESIRE_LINE =` |

#### Desire: the equity risk premium

| Line | Name | Anchor |
|---|---|---|
| 132 | `PREMIUM_LINE` · export | `var PREMIUM_LINE =` |

#### The deficit, year by year

| Line | Name | Anchor |
|---|---|---|
| 134 | `DEF_FROM_YEAR` · export | `var DEF_FROM_YEAR =` |
| 135 | `deficitHistory` · export | `var deficitHistory =` |
| 136 | `DEF_MEAN` · export | `var DEF_MEAN =` |
| 139 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 144 | `fedFundsRange` · export | `function fedFundsRange(` |
| 148 | `buffettHistory` · export | `var buffettHistory =` |
| 165 | `syncGrossDebt` | `function syncGrossDebt(` |
| 175 | `stressOf` | `function stressOf(` |
| 179 | `deriveStress` | `function deriveStress(` |
| 180 | `checkGrossDebt` | `function checkGrossDebt(` |
| 190 | `curveAt` · export | `function curveAt(` |
| 194 | `curveNeed` | `function curveNeed(` |
| 195 | `curveSpread` · export | `function curveSpread(` |
| 196 | `policyDirection` · export | `function policyDirection(` |
| 199 | `capeAsOf` · export | `function capeAsOf(` |
| 200 | `syncCapeHistory` · export | `function syncCapeHistory(` |
| 204 | `valRow` · export | `function valRow(` |
| 208 | `fileRow` · export | `function fileRow(` |
| 209 | `M2V_FROM_YEAR` · export | `var M2V_FROM_YEAR =` |
| 210 | `m2vHistory` · export | `var m2vHistory =` |
| 211 | `m2vPre` | `var m2vPre =` |
| 212 | `PULSE_PRE2008` · export | `var PULSE_PRE2008 =` |
| 213 | `PULSE_STEADY_LO` · export | `var PULSE_STEADY_LO =` |
| 214 | `PULSE_FLOOR` · export | `var PULSE_FLOOR =` |
| 231 | `checkVelocityHistory` | `function checkVelocityHistory(` |
| 236 | `M2_FROM_YEAR` · export | `var M2_FROM_YEAR =` |
| 237 | `m2Level` | `var m2Level =` |
| 238 | `m2Yoy` · export | `var m2Yoy =` |
| 239 | `m2Ref` | `var m2Ref =` |
| 240 | `M2_PACE_LO` · export | `var M2_PACE_LO =` |
| 241 | `M2_NORM` · export | `var M2_NORM =` |
| 242 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 243 | `unempHistory` · export | `var unempHistory =` |
| 247 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 255 | `SAHM_TRIGGER` · export | `var SAHM_TRIGGER =` |
| 256 | `unempSahm` · export | `var unempSahm =` |
| 257 | `avg3` | `function avg3(` |
| 261 | `sahmAt` | `function sahmAt(` |
| 266 | `sahmOf` · export | `function sahmOf(` |
| 270 | `NROU_NOW` · export | `var NROU_NOW =` |
| 271 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 278 | `ACT_BAND_LO` · export | `var ACT_BAND_LO =` |
| 279 | `CPI_TARGET` · export | `var CPI_TARGET =` |
| 280 | `FED_TARGET_SRC` · export | `var FED_TARGET_SRC =` |
| 281 | `TEMP_BAND_LO` · export | `var TEMP_BAND_LO =` |
| 282 | `GDP_NORM` · export | `var GDP_NORM =` |
| 283 | `checkMoneyStock` | `function checkMoneyStock(` |
| 346 | `DSR_FROM_YEAR` · export | `var DSR_FROM_YEAR =` |
| 347 | `dsrHistory` · export | `var dsrHistory =` |
| 348 | `SAV_FROM_YEAR` · export | `var SAV_FROM_YEAR =` |
| 349 | `savHistory` · export | `var savHistory =` |
| 350 | `SAV_THIN` · export | `var SAV_THIN =` |
| 351 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 359 | `SAV_OFFSET` · export | `var SAV_OFFSET =` |
| 360 | `dsrNow` · export | `var dsrNow =` |
| 361 | `savNow` · export | `var savNow =` |
| 362 | `DSR_MEAN` · export | `var DSR_MEAN =` |
| 363 | `curveNoteFull` · export | `var curveNoteFull =` |
| 374 | `VOL_JOIN` · export | `var VOL_JOIN =` |
| 496 | `typicalCycleYears` · export | `var typicalCycleYears =` |

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
| 35 | `GROWTH_WINDOW` · export | `var GROWTH_WINDOW =` |
| 36 | `growthWindowWord` · export | `function growthWindowWord(` |
| 37 | `readSeason` | `function readSeason(` |
| 57 | `SEASON_YEARS` | `var SEASON_YEARS =` |
| 58 | `closingReading` | `function closingReading(` |
| 62 | `quarterRegime` · export | `function quarterRegime(` |
| 63 | `seasonTitle` · export | `function seasonTitle(` |
| 64 | `cycleReturns` · export | `function cycleReturns(` |
| 74 | `cycleModel` · export | `function cycleModel(` |
| 113 | `seasonWhyFor` | `function seasonWhyFor(` |
| 119 | `growthWord` · export | `function growthWord(` |
| 122 | `cycleNowNote` · export | `function cycleNowNote(` |
| 130 | `seasonGroup` · export | `function seasonGroup(` |

#### The diagnosis: how she feels, and what has followed

| Line | Name | Anchor |
|---|---|---|
| 132 | `rankToDate` · export | `function rankToDate(` |
| 136 | `diagnoseToday` · export | `function diagnoseToday(` |

#### Her mood: one range from Depression to Mania

| Line | Name | Anchor |
|---|---|---|
| 141 | `rankIn` | `function rankIn(` |
| 147 | `moodSeries` | `function moodSeries(` |
| 155 | `moodAt` | `function moodAt(` |
| 161 | `MOOD_TURN` · export | `var MOOD_TURN =` |
| 164 | `moodWord` | `function moodWord(` |
| 168 | `moodRead` | `function moodRead(` |
| 176 | `moodTrack` · export | `function moodTrack(` |
| 182 | `moodToday` · export | `function moodToday(` |
| 186 | `moodSince` | `function moodSince(` |
| 187 | `cycleStory` · export | `function cycleStory(` |

#### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

| Line | Name | Anchor |
|---|---|---|
| 198 | `cycleSpanYears` · export | `function cycleSpanYears(` |
| 201 | `cycleByName` · export | `function cycleByName(` |
| 205 | `openCycle` · export | `function openCycle(` |
| 209 | `cycleSlice` · export | `function cycleSlice(` |
| 217 | `totalGrowthYears` · export | `function totalGrowthYears(` |
| 225 | `cycleMonths` · export | `function cycleMonths(` |
| 233 | `cycLabel` · export | `function cycLabel(` |
| 237 | `cycleQtrIdx` · export | `function cycleQtrIdx(` |
| 242 | `totalRiseIn` · export | `function totalRiseIn(` |
| 252 | `yearInflation` · export | `function yearInflation(` |
| 256 | `yearGrowth` · export | `function yearGrowth(` |
| 259 | `yearSoFar` · export | `function yearSoFar(` |
| 263 | `eraInflation` · export | `function eraInflation(` |
| 272 | `eraGrowth` · export | `function eraGrowth(` |
| 288 | `eraMarketTotal` · export | `function eraMarketTotal(` |
| 293 | `forgetMood` · export | `function forgetMood(` |

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
| 23 | `productivityWord` | `function productivityWord(` |
| 34 | `confidenceWord` | `function confidenceWord(` |
| 40 | `desireWord` | `function desireWord(` |
| 46 | `deficitBlock` · export | `function deficitBlock(` |
| 109 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 113 | `meterFlagged` · export | `function meterFlagged(` |
| 117 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 131 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 144 | `confidenceInfoHtml` | `function confidenceInfoHtml(` |
| 156 | `desireInfoHtml` | `function desireInfoHtml(` |
| 167 | `premiumInfoHtml` | `function premiumInfoHtml(` |
| 179 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 193 | `activityInfoHtml` | `function activityInfoHtml(` |
| 212 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 243 | `volumeBlock` | `function volumeBlock(` |
| 253 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 263 | `volumeVerdict` · export | `function volumeVerdict(` |
| 270 | `unempState` · export | `function unempState(` |
| 275 | `sahmNow` · export | `function sahmNow(` |
| 276 | `growthInfoHtml` · export | `function growthInfoHtml(` |
| 298 | `velocityVerdict` | `function velocityVerdict(` |
| 306 | `laborWord` · export | `function laborWord(` |
| 309 | `temperatureWord` · export | `function temperatureWord(` |
| 314 | `deriveLaggingTags` | `function deriveLaggingTags(` |
| 320 | `derivePulseTag` | `function derivePulseTag(` |
| 355 | `volatilityTag` · export | `function volatilityTag(` |
| 361 | `fearCurve` · export | `function fearCurve(` |
| 366 | `curveVerdict` · export | `function curveVerdict(` |
| 371 | `valuationVerdict` · export | `function valuationVerdict(` |
| 379 | `tempCaptionFull` · export | `var tempCaptionFull =` |
| 380 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 384 | `pressureZone` · export | `function pressureZone(` |
| 390 | `HZN_BACK` | `var HZN_BACK =` |
| 391 | `hznLast` | `function hznLast(` |
| 392 | `hznNeed` | `function hznNeed(` |
| 393 | `hznDelta` | `function hznDelta(` |
| 394 | `hznRecord` | `function hznRecord(` |
| 398 | `hznBack` | `function hznBack(` |
| 399 | `horizonWord` | `function horizonWord(` |
| 404 | `horizonInfoHtml` · export | `function horizonInfoHtml(` |
| 425 | `pulseBlock` | `function pulseBlock(` |
| 441 | `householdsWord` | `function householdsWord(` |
| 448 | `dsrInfoHtml` · export | `function dsrInfoHtml(` |
| 465 | `savInfoHtml` · export | `function savInfoHtml(` |
| 482 | `vixPct` · export | `function vixPct(` |
| 486 | `volatilityRing` · export | `function volatilityRing(` |
| 491 | `volatilityDetailHtml` · export | `function volatilityDetailHtml(` |
| 505 | `marketWord` · export | `function marketWord(` |
| 509 | `marketCol` · export | `function marketCol(` |
| 510 | `marketInfoHtml` | `function marketInfoHtml(` |
| 519 | `rowReadings` · export | `function rowReadings(` |
| 520 | `indOf` · export | `function indOf(` |
| 521 | `policyFacts` | `function policyFacts(` |
| 528 | `policyFactRows` · export | `function policyFactRows(` |
| 531 | `growthShownCap` · export | `function growthShownCap(` |
| 532 | `phaseClass` · export | `function phaseClass(` |
| 533 | `activityStackHtml` | `function activityStackHtml(` |
| 543 | `seatTemperature` | `function seatTemperature(` |
| 551 | `DATED_UNIT` · export | `var DATED_UNIT =` |
| 552 | `indPeriod` · export | `function indPeriod(` |
| 560 | `deriveFeelingReadings` | `function deriveFeelingReadings(` |

#### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

| Line | Name | Anchor |
|---|---|---|
| 701 | `isNum` | `function isNum(` |
| 703 | `rowId` | `function rowId(` |
| 704 | `rowLike` | `function rowLike(` |
| 717 | `rowsOk` | `function rowsOk(` |
| 720 | `deriveHorizon` | `function deriveHorizon(` |
| 733 | `fieldsKept` | `function fieldsKept(` |
| 737 | `vixAsOf` | `function vixAsOf(` |
| 738 | `coincidentAsOf` | `function coincidentAsOf(` |
| 739 | `periodIso` | `function periodIso(` |

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
| 125 | `catHeadCard` · export | `function catHeadCard(` |
| 129 | `subjectIcon` · export | `function subjectIcon(` |
| 130 | `timingMark` | `function timingMark(` |
| 138 | `timingPill` · export | `function timingPill(` |
| 143 | `collapseEmptyBlocks` · export | `function collapseEmptyBlocks(` |
| 151 | `seatPageFoot` · export | `function seatPageFoot(` |
| 162 | `headHtml` | `function headHtml(` |
| 167 | `cardDetailHtml` · export | `function cardDetailHtml(` |

#### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

| Line | Name | Anchor |
|---|---|---|
| 193 | `latestYieldPoint` | `function latestYieldPoint(` |
| 200 | `withLatestPoint` | `function withLatestPoint(` |
| 205 | `pressureMaturities` | `function pressureMaturities(` |
| 229 | `registerFlowPages` | `function registerFlowPages(` |
| 268 | `renderPressureRow` | `function renderPressureRow(` |
| 276 | `ylmYearMarks` | `function ylmYearMarks(` |
| 295 | `ylmColumns` | `function ylmColumns(` |
| 315 | `ylmFitLine` | `function ylmFitLine(` |
| 327 | `pressureHead` | `function pressureHead(` |
| 345 | `showPressureView` | `function showPressureView(` |
| 350 | `renderPressurePage` | `function renderPressurePage(` |

#### Pressure's Insights

| Line | Name | Anchor |
|---|---|---|
| 479 | `renderPressureInsights` | `function renderPressureInsights(` |
| 514 | `catList` · export | `function catList(` |
| 515 | `marketPeek` · export | `function marketPeek(` |
| 520 | `spreadPick` · export | `var spreadPick =` |
| 521 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 522 | `spreadLabel` | `function spreadLabel(` |
| 526 | `peekArt` | `function peekArt(` |
| 527 | `catItem` · export | `function catItem(` |
| 534 | `catCard` · export | `function catCard(` |
| 576 | `tempPeek` · export | `function tempPeek(` |
| 582 | `gdpPeek` · export | `function gdpPeek(` |

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
| 34 | `dxHead` | `function dxHead(` |
| 35 | `dxSys` | `function dxSys(` |
| 36 | `yearRow` | `function yearRow(` |
| 42 | `yearStrip` | `function yearStrip(` |
| 47 | `stripGap` | `function stripGap(` |
| 50 | `yearMarket` | `function yearMarket(` |
| 54 | `renderDiagnosis` · export | `function renderDiagnosis(` |
| 58 | `diagnosisHost` | `function diagnosisHost(` |
| 63 | `buildDoors` | `function buildDoors(` |
| 67 | `buildDiagnosis` | `function buildDiagnosis(` |

### `js/dial-cycle.ts`

#### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

| Line | Name | Anchor |
|---|---|---|
| 21 | `drawDial` | `function drawDial(` |

#### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

| Line | Name | Anchor |
|---|---|---|
| 103 | `wireThemeChoice` | `function wireThemeChoice(` |

#### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

| Line | Name | Anchor |
|---|---|---|
| 121 | `renderCycleKicker` | `function renderCycleKicker(` |

#### the hub: the reading inside the circle

| Line | Name | Anchor |
|---|---|---|
| 141 | `hubSet` | `function hubSet(` |
| 149 | `hubOpen` | `function hubOpen(` |
| 156 | `hubShowDefault` | `function hubShowDefault(` |
| 163 | `hubShowQuarter` | `function hubShowQuarter(` |
| 168 | `hubShowYear` | `function hubShowYear(` |
| 178 | `one` · export | `function one(` |
| 179 | `cycleView` · export | `function cycleView(` |
| 180 | `renderCycleDial` | `function renderCycleDial(` |
| 263 | `dialKeyStep` | `function dialKeyStep(` |
| 271 | `dialSay` | `function dialSay(` |

#### the whole view, for one cycle

| Line | Name | Anchor |
|---|---|---|
| 277 | `renderCycleView` · export | `function renderCycleView(` |
| 282 | `showEra` | `function showEra(` |
| 286 | `showCycle` · export | `function showCycle(` |

#### A cycle's season strip (carried by the one cycle row)

| Line | Name | Anchor |
|---|---|---|
| 288 | `aheadWord` | `function aheadWord(` |
| 289 | `seasonStripHtml` · export | `function seasonStripHtml(` |
| 306 | `marketStripHtml` · export | `function marketStripHtml(` |
| 332 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 333 | `settleStrips` · export | `function settleStrips(` |

### `js/analysis.ts`

#### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

| Line | Name | Anchor |
|---|---|---|
| 22 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 35 | `renderCycleList` | `function renderCycleList(` |

#### A closed cycle, shown on the Cycle tab's own page

| Line | Name | Anchor |
|---|---|---|
| 79 | `eraReading` | `function eraReading(` |
| 89 | `eraValue` | `function eraValue(` |
| 95 | `eraRange` | `function eraRange(` |
| 100 | `eraMini` | `function eraMini(` |
| 105 | `lead` | `function lead(` |
| 106 | `figOf` | `function figOf(` |
| 107 | `part` | `function part(` |
| 108 | `parentOf` | `function parentOf(` |
| 109 | `eraCard` | `function eraCard(` |
| 127 | `eraCards` | `function eraCards(` |
| 133 | `eraShow` | `function eraShow(` |
| 140 | `enterEra` | `function enterEra(` |
| 147 | `leaveEra` | `function leaveEra(` |

### `js/portfolio.ts`

#### PORTFOLIO: All Weather, the Investment Clock and Custom

| Line | Name | Anchor |
|---|---|---|
| 11 | `WEATHER_ID` | `var WEATHER_ID =` |
| 12 | `WEATHER_NAME` | `var WEATHER_NAME =` |
| 20 | `ALL_WEATHER` | `var ALL_WEATHER =` |
| 27 | `WEATHER` | `var WEATHER =` |
| 40 | `say` | `function say(` |
| 41 | `methodPage` | `function methodPage(` |
| 42 | `weatherStrip` | `function weatherStrip(` |
| 46 | `weatherDetail` | `function weatherDetail(` |
| 54 | `drawWeather` | `function drawWeather(` |
| 61 | `phaseOf` | `function phaseOf(` |
| 65 | `arc` | `function arc(` |
| 69 | `clockFace` | `function clockFace(` |
| 82 | `clockDetail` | `function clockDetail(` |
| 89 | `drawClock` | `function drawClock(` |
| 95 | `homeHtml` | `function homeHtml(` |
| 101 | `portfolioSheets` | `function portfolioSheets(` |
| 105 | `buildPortfolio` | `function buildPortfolio(` |

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
| 13 | `seasonModelNote` | `function seasonModelNote(` |
| 25 | `renderSeasonRows` | `function renderSeasonRows(` |

#### TAB NAVIGATION (Cycle / Analysis / Herstory / Portfolio)

| Line | Name | Anchor |
|---|---|---|
| 72 | `renderTopbar` | `function renderTopbar(` |
| 101 | `wireTabKeys` | `function wireTabKeys(` |

#### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

| Line | Name | Anchor |
|---|---|---|
| 103 | `wireMenu` | `function wireMenu(` |

### `js/repaint.ts`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 11 | `paintReading` | `function paintReading(` |
| 24 | `repaintVolatilityRing` | `function repaintVolatilityRing(` |
| 30 | `paintTag` | `function paintTag(` |
| 37 | `repaintVolatility` | `function repaintVolatility(` |
| 41 | `repaintPressureRow` | `function repaintPressureRow(` |
| 46 | `repaintPressureChart` | `function repaintPressureChart(` |
| 50 | `syncCape` | `function syncCape(` |
| 51 | `repaintValuationRow` | `function repaintValuationRow(` |
| 56 | `repaintPolicy` | `function repaintPolicy(` |
| 60 | `repaintDiagnosis` | `function repaintDiagnosis(` |

### `js/ai-insights.ts`

#### AI Insights: Claude's dated reading of the open cycle, with today's closest past moments

| Line | Name | Anchor |
|---|---|---|
| 17 | `MONTH_NAMES` | `var MONTH_NAMES =` |
| 18 | `ECHO_FROM` | `var ECHO_FROM =` |
| 20 | `openIdx` | `function openIdx(` |
| 21 | `labOf` | `function labOf(` |
| 22 | `figure` | `function figure(` |
| 26 | `fill` | `function fill(` |
| 30 | `quartersOf` | `function quartersOf(` |
| 36 | `quarterly` | `function quarterly(` |
| 46 | `lastQuarter` | `function lastQuarter(` |
| 49 | `cycleOfYear` | `function cycleOfYear(` |
| 50 | `qIdx` | `function qIdx(` |
| 51 | `qName` | `function qName(` |
| 52 | `carried` | `function carried(` |
| 59 | `panel` | `function panel(` |
| 60 | `buildPanel` | `function buildPanel(` |
| 75 | `pathGap` | `function pathGap(` |
| 85 | `echoes` · export | `function echoes(` |
| 97 | `thenWords` | `function thenWords(` |
| 104 | `pairWords` | `function pairWords(` |
| 105 | `echoLine` | `function echoLine(` |
| 113 | `asOfWords` | `function asOfWords(` |
| 117 | `aiDetail` | `function aiDetail(` |
| 123 | `AI_PAGE` | `var AI_PAGE =` |
| 124 | `CHAPTER_MARKS` | `var CHAPTER_MARKS =` |
| 125 | `rankNow` | `function rankNow(` |
| 129 | `pic` | `function pic(` |
| 130 | `risksPic` | `function risksPic(` |
| 137 | `tilesPic` | `function tilesPic(` |
| 146 | `segAt` | `function segAt(` |
| 154 | `pathStrip` | `function pathStrip(` |
| 160 | `CHAPTER_PICS` | `var CHAPTER_PICS =` |
| 161 | `para` | `function para(` |
| 162 | `leadBoxes` | `function leadBoxes(` |
| 165 | `aiPage` | `function aiPage(` |
| 171 | `buildAiPage` · export | `function buildAiPage(` |
| 176 | `aiInsights` · export | `function aiInsights(` |

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
| 16 | `NUM` | `var NUM =` |
| 19 | `quartile` | `function quartile(` |
| 23 | `normOf` | `function normOf(` |
| 28 | `closedCount` | `function closedCount(` |
| 29 | `visitOf` | `function visitOf(` |
| 36 | `visits` | `function visits(` |
| 37 | `cycleLab` | `function cycleLab(` |
| 41 | `cycleReadings` | `function cycleReadings(` |
| 47 | `readingsNorm` | `function readingsNorm(` |
| 50 | `readingLab` | `function readingLab(` |
| 58 | `labs` · export | `function labs(` |
| 65 | `normAt` | `function normAt(` |
| 66 | `state` | `function state(` |
| 71 | `yearsWord` · export | `function yearsWord(` |
| 72 | `fmt` · export | `function fmt(` |
| 76 | `TIERS` | `var TIERS =` |
| 77 | `tier` | `function tier(` |
| 81 | `catTitle` | `function catTitle(` |
| 82 | `side` | `function side(` |
| 83 | `findWords` | `function findWords(` |
| 87 | `rowTag` | `function rowTag(` |
| 88 | `labItem` | `function labItem(` |
| 94 | `ring` | `function ring(` |
| 98 | `scoreTier` | `function scoreTier(` |
| 104 | `scoreBox` | `function scoreBox(` |
| 110 | `labSec` | `function labSec(` |
| 118 | `bySystem` | `function bySystem(` |
| 127 | `findOf` | `function findOf(` |
| 128 | `LENS` | `var LENS =` |
| 129 | `tierOpts` | `function tierOpts(` |
| 132 | `menuRows` | `function menuRows(` |
| 143 | `filterTags` | `function filterTags(` |
| 148 | `finder` | `function finder(` |
| 155 | `narrow` | `function narrow(` |
| 167 | `menuOf` | `function menuOf(` |
| 168 | `showMenu` | `function showMenu(` |
| 172 | `redraw` | `function redraw(` |
| 177 | `pickTier` | `function pickTier(` |
| 181 | `pickCycle` | `function pickCycle(` |
| 185 | `fillMenu` | `function fillMenu(` |
| 192 | `openSub` | `function openSub(` |
| 196 | `toggleMenu` | `function toggleMenu(` |
| 201 | `riskLabs` · export | `function riskLabs(` |
| 202 | `judged` | `function judged(` |
| 203 | `score` | `function score(` |
| 204 | `listWords` · export | `function listWords(` |
| 205 | `word` | `function word(` |
| 207 | `chartDetail` | `function chartDetail(` |
| 216 | `cycleScore` · export | `function cycleScore(` |
| 217 | `chartDoor` · export | `function chartDoor(` |
| 221 | `HOME_ID` | `var HOME_ID =` |
| 222 | `drawChart` | `function drawChart(` |
| 230 | `fold` | `function fold(` |
| 234 | `wireFinder` | `function wireFinder(` |
| 251 | `openMenus` | `function openMenus(` |
| 252 | `shutMenus` | `function shutMenus(` |
| 253 | `buildCycleChart` · export | `function buildCycleChart(` |

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
| 20 | `rosterRow` | `function rosterRow(` |
| 34 | `readingRoster` · export | `function readingRoster(` |
| 41 | `prettyK` · export | `function prettyK(` |

### `js/fed-phases.ts`

#### The Fed's phases and the inflation peak

| Line | Name | Anchor |
|---|---|---|
| 12 | `monthIdx` | `function monthIdx(` |
| 13 | `monthName` | `function monthName(` |
| 14 | `fedPhases` · export | `function fedPhases(` |
| 23 | `phaseAt` | `function phaseAt(` |
| 28 | `topOf` | `function topOf(` |
| 33 | `priceRuns` | `function priceRuns(` |
| 38 | `findRuns` | `function findRuns(` |
| 48 | `within` | `function within(` |
| 49 | `inflationPeak` · export | `function inflationPeak(` |
| 52 | `peakSoFar` · export | `function peakSoFar(` |
| 53 | `nextPeak` · export | `function nextPeak(` |

#### The phases chart

| Line | Name | Anchor |
|---|---|---|
| 56 | `VIEW_W` | `var VIEW_W =` |
| 57 | `growthPoints` | `function growthPoints(` |
| 63 | `monthPoints` | `function monthPoints(` |
| 70 | `curve` | `function curve(` |
| 80 | `pct` | `function pct(` |
| 81 | `bandsHtml` | `function bandsHtml(` |
| 92 | `yearsHtml` | `function yearsHtml(` |
| 97 | `plotSvg` | `function plotSvg(` |
| 107 | `level` | `function level(` |
| 108 | `peakLevel` | `function peakLevel(` |
| 113 | `levelsHtml` | `function levelsHtml(` |
| 121 | `endMonthOf` | `function endMonthOf(` |
| 126 | `fedPhasesCard` · export | `function fedPhasesCard(` |

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
| 16 | `sp500ReturnsBefore` · export | `var sp500ReturnsBefore =` |
| 17 | `gdpGrowthBefore` · export | `var gdpGrowthBefore =` |

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
| 65 | `marketPage` | `function marketPage(` |
| 71 | `productivityPage` | `function productivityPage(` |
| 76 | `splitSpec` | `function splitSpec(` |
| 82 | `splitInfo` | `function splitInfo(` |
| 86 | `periodTicks` | `function periodTicks(` |
| 91 | `periodOfSeries` | `function periodOfSeries(` |
| 92 | `drawSplit` | `function drawSplit(` |
| 109 | `mountSplit` | `function mountSplit(` |
| 122 | `splitPeek` | `function splitPeek(` |
| 126 | `indicatorPeeks` · export | `function indicatorPeeks(` |
| 134 | `deficitPeek` | `function deficitPeek(` |
| 138 | `catSheet` · export | `function catSheet(` |
| 143 | `groupId` · export | `function groupId(` |
| 144 | `groupCard` | `function groupCard(` |
| 152 | `groupSheet` | `function groupSheet(` |
| 159 | `appendPicks` · export | `function appendPicks(` |
| 167 | `doorSel` | `function doorSel(` |
| 168 | `catPicks` · export | `function catPicks(` |

#### The split indicators' insights

| Line | Name | Anchor |
|---|---|---|
| 180 | `buffettInsight` | `function buffettInsight(` |
| 195 | `debtInsight` | `function debtInsight(` |
| 210 | `productivityInsight` | `function productivityInsight(` |
| 220 | `confidenceInsight` | `function confidenceInsight(` |
| 231 | `desireInsight` | `function desireInsight(` |
| 242 | `premiumInsight` | `function premiumInsight(` |
| 255 | `ORDINAL` | `var ORDINAL =` |
| 256 | `marketInsight` | `function marketInsight(` |
| 268 | `interestInsight` | `function interestInsight(` |

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
| 181 | `insightRow` · export | `function insightRow(` |
| 182 | `replaceInsight` · export | `function replaceInsight(` |

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
| 27 | `hormoneSvg` · export | `function hormoneSvg(` |
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
| `pressure-range` | `js/repaint.ts:48` |
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
| 501 | content tab: reading companion |
| 553 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
| 804 | Volume's red ramp (Keren, V389: "volume is, in gynaecology, blood — so it should be different shades of |
| 848 | the maturity chart's columns wear the curve's three zones (Keren, V394: "a colour that represents the |
| 920 | One gap between an inner page's containers (Keren, V381: "the spacing between containers in each inner |
| 1,090 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 1,099 | The symptoms: a cycle's years against today |
| 1,198 | hero: yield curve |
| 1,228 | the readout (Keren, from Apple Health): it never changes the page's height, which is why it beats a |
| 1,247 | 10Y-3M spread history (quarterly, with recession bands) |
| 1,275 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 1,283 | long cycle (structural layer) |
| 1,290 | indicator grid |
| 1,316 | info icon + popover (progressive disclosure for longer notes) |
| 1,330 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 1,416 | footer |

## Markup landmarks

Banner comments in `page-body.html`:

| Line | Section |
|---|---|

Every `id` in the static DOM (106), which is what the renderers fill:

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
| 280 | `seasons-kicker` |
| 281 | `seasons-rows` |
| 284 | `framework-kicker` |
| 287 | `framework-rows` |
| 297 | `sheet-appearance` |
| 305 | `theme-toggle` |
| 312 | `sheet-contact` |
| 321 | `contact-form` |
| 322 | `contact-title` |
| 323 | `contact-message` |
| 325 | `contact-hint` |
| 326 | `contact-send` |
| 332 | `sheet-sources` |
| 335 | `sources-back` |
| 340 | `asof-text` |
| 341 | `sources-groups` |
| 347 | `detail-backdrop` |
| 349 | `detail-modal-close` |
| 350 | `detail-modal-body` |

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

