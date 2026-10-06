# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **9,065 lines** in 36 files, about 606 KB, roughly **172 thousand tokens**. No session can
read it whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Use the **anchor** column with grep —
> `grep -rn 'function curveVerdict(' src/` — and treat `file:line` as rough orientation only.

Generated from commit `382fe03` on 2026-10-06.

## The page

`src/manifest.json` joins these parts into `index.html`. The `.js` entry is bundled by esbuild
(`tools/bundle.js`) into one script in its place.

| Part | Lines | What |
|---|---|---|
| `page-head.html` | 5 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist |
| `styles.css` | 1,340 | the whole stylesheet, every token and rule |
| `page-body.html` | 325 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| `js/main.ts` | 32 modules | the entry: imports every module and calls their boots in order |
| `page-tail.html` | 45 | the bundle's closing tag, the service-worker registration, </body></html> |

Counts: **32** modules, **689** top-level functions, **118** top-level vars, **376** exported names, **19** boots.

## Modules, in boot order

| Module | Lines | Declarations | Imports from |
|---|---|---|---|
| `js/dom.ts` | 170 | 26 | `format` |
| `js/live.ts` | 207 | 22 | `format` |
| `js/refresh-season.ts` | 42 | 5 | `format`, `history-fred` |
| `js/data.ts` | 568 | 77 | `format`, `history-fred`, `live` |
| `js/model.ts` | 392 | 58 | `data`, `dom`, `format`, `history-fred`, `refresh-season` |
| `js/history.ts` | 479 | 42 | `charts`, `data`, `dom`, `format`, `live`, `model` |
| `js/readings.ts` | 804 | 69 | `charts`, `data`, `dom`, `format`, `history`, `history-fred`, `live`, `model`, `refresh-season` |
| `js/roster.ts` | 131 | 7 | `charts`, `data`, `format`, `history`, `history-fred`, `live`, `marks`, `refresh-season` |
| `js/render-core.ts` | 576 | 45 | `charts`, `data`, `dom`, `format`, `history`, `history-charts`, `live`, `model`, `readings`, `refresh-season`, `roster` |
| `js/render-pages.ts` | 425 | 10 | `charts`, `data`, `dom`, `format`, `history`, `history-charts`, `history-fred`, `live`, `model`, `readings`, `refresh-season`, `render-core` |
| `js/diagnosis.ts` | 88 | 13 | `ai-insights`, `cycle-analysis`, `data`, `dom`, `fed-phases`, `format`, `live`, `marks`, `model`, `refresh-season`, `render-core` |
| `js/dial-cycle.ts` | 390 | 22 | `cycle-analysis`, `data`, `diagnosis`, `dom`, `format`, `live`, `model`, `quarter-sheet`, `refresh-season`, `render-core`, `render-pages`, `roster` |
| `js/analysis.ts` | 88 | 6 | `data`, `dial-cycle`, `dom`, `format`, `history`, `live`, `model`, `render-core`, `render-pages` |
| `js/portfolio.ts` | 108 | 17 | `data`, `dom`, `format`, `marks`, `model`, `render-core` |
| `js/pages-nav.ts` | 185 | 16 | `cycle-tab`, `data`, `dial-cycle`, `dom`, `inner-pages`, `live`, `readings`, `render-core`, `render-pages`, `roster` |
| `js/tabs-menu.ts` | 228 | 10 | `data`, `dial-cycle`, `dom`, `format`, `live`, `model`, `pages-nav`, `refresh-season` |
| `js/repaint.ts` | 39 | 5 | `ai-insights`, `cycle-analysis`, `data`, `diagnosis`, `dom`, `live`, `model`, `readings`, `render-core` |
| `js/ai-insights.ts` | 181 | 38 | `charts`, `cycle-analysis`, `data`, `dom`, `marks`, `model`, `refresh-season`, `render-core`, `roster` |
| `js/charts.ts` | 268 | 35 | `format` |
| `js/cycle-analysis.ts` | 429 | 107 | `charts`, `data`, `dom`, `era`, `fed-phases`, `format`, `history`, `insights`, `marks`, `model`, `refresh-season`, `render-core`, `roster` |
| `js/cycle-tab.ts` | 23 | 2 | `data`, `dom`, `format`, `indicators`, `model`, `refresh-season`, `render-core`, `roster` |
| `js/era.ts` | 37 | 3 | `data`, `indicators`, `model`, `readings`, `render-core` |
| `js/fed-phases.ts` | 126 | 21 | `data`, `format`, `history-fred`, `model`, `refresh-season` |
| `js/format.ts` | 81 | 36 | — |
| `js/history-charts.ts` | 406 | 13 | `charts`, `data`, `format`, `history`, `history-fred`, `model`, `readings`, `refresh-season` |
| `js/history-fred.ts` | 20 | 14 | — |
| `js/indicators.ts` | 227 | 26 | `charts`, `data`, `dom`, `format`, `history`, `history-fred`, `model`, `readings`, `refresh-season`, `render-core`, `roster` |
| `js/inner-pages.ts` | 287 | 13 | `charts`, `data`, `dial-cycle`, `dom`, `format`, `history`, `history-charts`, `model`, `readings`, `refresh-season`, `render-core` |
| `js/insights.ts` | 182 | 17 | `data`, `dom`, `format`, `model`, `readings`, `refresh-season`, `roster` |
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
| 5 | `bootData` | `js/data.ts:516`–567 |
| 6 | `bootModel` | `js/model.ts:369`–391 |
| 7 | `bootHistory` | `js/history.ts:455`–478 |
| 8 | `bootReadings` | `js/readings.ts:627`–695 |
| 9 | `bootReadingRegistry` | `js/readings.ts:738`–803 |
| 10 | `bootRoster` | `js/roster.ts:118`–130 |
| 11 | `bootRenderCore` | `js/render-core.ts:566`–575 |
| 12 | `bootRenderPages` | `js/render-pages.ts:409`–424 |
| 13 | `bootDiagnosis` | `js/diagnosis.ts:84`–87 |
| 14 | `bootDialCycle` | `js/dial-cycle.ts:366`–389 |
| 15 | `bootAnalysis` | `js/analysis.ts:83`–87 |
| 16 | `bootPortfolio` | `js/portfolio.ts:107`–? |
| 17 | `bootPagesNav` | `js/pages-nav.ts:178`–184 |
| 18 | `bootTabsMenu` | `js/tabs-menu.ts:216`–227 |
| 19 | `bootRepaint` | `js/repaint.ts:26`–38 |

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
| 290 | `FED_TARGET_SRC` · export | `var FED_TARGET_SRC =` |
| 291 | `TEMP_BAND_LO` · export | `var TEMP_BAND_LO =` |
| 292 | `PCE_SWITCH_SRC` · export | `var PCE_SWITCH_SRC =` |
| 293 | `PCE_SRC` · export | `var PCE_SRC =` |
| 294 | `GDP_NORM` · export | `var GDP_NORM =` |
| 295 | `checkMoneyStock` | `function checkMoneyStock(` |
| 358 | `DSR_FROM_YEAR` · export | `var DSR_FROM_YEAR =` |
| 359 | `dsrHistory` · export | `var dsrHistory =` |
| 360 | `SAV_FROM_YEAR` · export | `var SAV_FROM_YEAR =` |
| 361 | `savHistory` · export | `var savHistory =` |
| 362 | `SAV_THIN` · export | `var SAV_THIN =` |
| 363 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 371 | `SAV_OFFSET` · export | `var SAV_OFFSET =` |
| 372 | `dsrNow` · export | `var dsrNow =` |
| 373 | `savNow` · export | `var savNow =` |
| 374 | `DSR_MEAN` · export | `var DSR_MEAN =` |
| 375 | `curveNoteFull` · export | `var curveNoteFull =` |
| 386 | `VOL_JOIN` · export | `var VOL_JOIN =` |
| 508 | `typicalCycleYears` · export | `var typicalCycleYears =` |

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
| 247 | `cycleOfYear` · export | `function cycleOfYear(` |
| 248 | `cycleByName` · export | `function cycleByName(` |
| 252 | `openCycle` · export | `function openCycle(` |
| 256 | `cycleSlice` · export | `function cycleSlice(` |
| 264 | `totalGrowthYears` · export | `function totalGrowthYears(` |
| 272 | `cycleMonths` · export | `function cycleMonths(` |
| 280 | `cycLabel` · export | `function cycLabel(` |
| 284 | `cycleQtrIdx` · export | `function cycleQtrIdx(` |
| 289 | `totalRiseIn` · export | `function totalRiseIn(` |
| 299 | `yearInflation` · export | `function yearInflation(` |
| 303 | `yearGrowth` · export | `function yearGrowth(` |
| 306 | `yearSoFar` · export | `function yearSoFar(` |
| 310 | `eraInflation` · export | `function eraInflation(` |
| 319 | `eraGrowth` · export | `function eraGrowth(` |
| 335 | `eraMarketTotal` · export | `function eraMarketTotal(` |
| 340 | `forgetMood` · export | `function forgetMood(` |
| 346 | `seasonYears` | `function seasonYears(` |
| 357 | `seasonQuarters` | `function seasonQuarters(` |

### `js/history.ts`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 13 | `page` · export | `var page =` |

#### the history card's head

| Line | Name | Anchor |
|---|---|---|
| 24 | `DOTS` | `var DOTS =` |
| 26 | `headPickRow` · export | `function headPickRow(` |
| 32 | `histHead` · export | `function histHead(` |
| 48 | `headMenuHtml` | `function headMenuHtml(` |
| 75 | `paintHeadMenus` | `function paintHeadMenus(` |
| 86 | `headMoreBtn` | `function headMoreBtn(` |
| 90 | `headMenuFirst` | `function headMenuFirst(` |
| 94 | `headMenuShut` | `function headMenuShut(` |
| 99 | `histNote` · export | `function histNote(` |
| 100 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |
| 108 | `timelineSpan` · export | `function timelineSpan(` |
| 113 | `timelineFor` · export | `function timelineFor(` |
| 130 | `windowScale` · export | `function windowScale(` |
| 145 | `histReadEnsure` · export | `function histReadEnsure(` |
| 165 | `geomFmt` | `function geomFmt(` |
| 166 | `attrNum` | `function attrNum(` |
| 167 | `histReadFill` · export | `function histReadFill(` |
| 215 | `histAxisEnds` | `function histAxisEnds(` |
| 226 | `histLegend` · export | `function histLegend(` |
| 285 | `refitHistory` · export | `function refitHistory(` |
| 295 | `wireHistHover` | `function wireHistHover(` |
| 328 | `histShow` | `function histShow(` |
| 337 | `histLive` | `function histLive(` |
| 344 | `histKeysWire` | `function histKeysWire(` |
| 358 | `mWindowFrom` · export | `function mWindowFrom(` |
| 362 | `qWindowFrom` · export | `function qWindowFrom(` |
| 366 | `defFrom` · export | `function defFrom(` |
| 370 | `tabSegs` · export | `function tabSegs(` |
| 378 | `tabBar` · export | `function tabBar(` |
| 381 | `modeBar` | `function modeBar(` |
| 385 | `controlKeys` · export | `function controlKeys(` |
| 389 | `controlKeysIn` | `function controlKeysIn(` |
| 395 | `histControls` · export | `function histControls(` |
| 403 | `controlsBox` | `function controlsBox(` |
| 404 | `pageCycle` · export | `function pageCycle(` |
| 409 | `cyclePicker` | `function cyclePicker(` |
| 417 | `pickList` | `function pickList(` |
| 431 | `periodControls` · export | `function periodControls(` |
| 436 | `rangeBar` · export | `function rangeBar(` |
| 440 | `headSigma` · export | `function headSigma(` |
| 445 | `attachHistory` · export | `function attachHistory(` |

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
| 212 | `bandMonths` | `function bandMonths(` |
| 215 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 245 | `volumeBlock` | `function volumeBlock(` |
| 255 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 265 | `volumeVerdict` · export | `function volumeVerdict(` |
| 272 | `unempState` · export | `function unempState(` |
| 277 | `sahmNow` · export | `function sahmNow(` |
| 278 | `potentialSentence` | `function potentialSentence(` |
| 286 | `growthInfoHtml` · export | `function growthInfoHtml(` |
| 306 | `velocityVerdict` | `function velocityVerdict(` |
| 314 | `laborWord` · export | `function laborWord(` |
| 317 | `temperatureWord` · export | `function temperatureWord(` |
| 322 | `deriveLaggingTags` | `function deriveLaggingTags(` |
| 328 | `derivePulseTag` | `function derivePulseTag(` |
| 363 | `volatilityTag` · export | `function volatilityTag(` |
| 369 | `fearCurve` · export | `function fearCurve(` |
| 374 | `curveVerdict` · export | `function curveVerdict(` |
| 379 | `valuationVerdict` · export | `function valuationVerdict(` |
| 387 | `tempCaptionFull` · export | `var tempCaptionFull =` |
| 388 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 392 | `pressureZone` · export | `function pressureZone(` |
| 398 | `HZN_BACK` | `var HZN_BACK =` |
| 399 | `hznLast` | `function hznLast(` |
| 400 | `hznNeed` | `function hznNeed(` |
| 401 | `hznDelta` | `function hznDelta(` |
| 402 | `hznRecord` | `function hznRecord(` |
| 406 | `hznBack` | `function hznBack(` |
| 407 | `horizonWord` | `function horizonWord(` |
| 412 | `horizonInfoHtml` · export | `function horizonInfoHtml(` |
| 433 | `pulseBlock` | `function pulseBlock(` |
| 449 | `householdsWord` | `function householdsWord(` |
| 456 | `dsrInfoHtml` · export | `function dsrInfoHtml(` |
| 473 | `savInfoHtml` · export | `function savInfoHtml(` |
| 490 | `volatilityDetailHtml` · export | `function volatilityDetailHtml(` |
| 504 | `marketWord` · export | `function marketWord(` |
| 508 | `marketCol` · export | `function marketCol(` |
| 509 | `marketInfoHtml` | `function marketInfoHtml(` |
| 518 | `rowReadings` · export | `function rowReadings(` |
| 519 | `indOf` · export | `function indOf(` |
| 520 | `policyFacts` | `function policyFacts(` |
| 527 | `policyFactRows` · export | `function policyFactRows(` |
| 530 | `growthShownCap` · export | `function growthShownCap(` |
| 531 | `phaseClass` · export | `function phaseClass(` |
| 532 | `activityStackHtml` | `function activityStackHtml(` |
| 542 | `seatTemperature` | `function seatTemperature(` |
| 550 | `DATED_UNIT` · export | `var DATED_UNIT =` |
| 555 | `deriveFeelingReadings` | `function deriveFeelingReadings(` |

#### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

| Line | Name | Anchor |
|---|---|---|
| 696 | `isNum` | `function isNum(` |
| 698 | `rowId` | `function rowId(` |
| 699 | `rowLike` | `function rowLike(` |
| 712 | `rowsOk` | `function rowsOk(` |
| 715 | `deriveHorizon` | `function deriveHorizon(` |
| 728 | `fieldsKept` | `function fieldsKept(` |
| 732 | `vixAsOf` | `function vixAsOf(` |
| 733 | `coincidentAsOf` | `function coincidentAsOf(` |
| 734 | `periodIso` | `function periodIso(` |

### `js/roster.ts`

#### The roster: every reading, declared once

| Line | Name | Anchor |
|---|---|---|
| 31 | `keyed` · export | `function keyed(` |
| 37 | `rosterFor` · export | `function rosterFor(` |
| 38 | `peekOf` · export | `function peekOf(` |
| 43 | `checkRoster` | `function checkRoster(` |
| 61 | `periodOf` · export | `function periodOf(` |
| 62 | `categoriesShown` · export | `function categoriesShown(` |
| 66 | `declareRoster` | `function declareRoster(` |

### `js/render-core.ts`

#### RENDER: range bars + card helpers

| Line | Name | Anchor |
|---|---|---|
| 18 | `metricSheet` · export | `function metricSheet(` |
| 24 | `drawsPage` · export | `function drawsPage(` |
| 25 | `needInd` · export | `function needInd(` |
| 26 | `openOf` · export | `function openOf(` |
| 27 | `levelHeadings` | `function levelHeadings(` |
| 35 | `wireDetailModal` | `function wireDetailModal(` |

#### A season strip and the economy's chips, shared by the cycle list and the Diagnosis's years

| Line | Name | Anchor |
|---|---|---|
| 71 | `strip` · export | `function strip(` |
| 74 | `stripDots` · export | `function stripDots(` |
| 77 | `stripTrack` · export | `function stripTrack(` |
| 80 | `seasonRuns` · export | `function seasonRuns(` |
| 89 | `seasonPills` · export | `function seasonPills(` |
| 97 | `marketPills` · export | `function marketPills(` |
| 105 | `seasonRunsLabel` · export | `function seasonRunsLabel(` |
| 108 | `econChips` · export | `function econChips(` |
| 113 | `dxHead` · export | `function dxHead(` |
| 117 | `dxSys` · export | `function dxSys(` |
| 118 | `catHeadCard` · export | `function catHeadCard(` |
| 122 | `timingMark` | `function timingMark(` |
| 130 | `timingPill` · export | `function timingPill(` |
| 135 | `collapseEmptyBlocks` · export | `function collapseEmptyBlocks(` |
| 143 | `seatPageFoot` · export | `function seatPageFoot(` |
| 154 | `headHtml` | `function headHtml(` |
| 159 | `cardDetailHtml` · export | `function cardDetailHtml(` |

#### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

| Line | Name | Anchor |
|---|---|---|
| 185 | `latestYieldPoint` | `function latestYieldPoint(` |
| 192 | `withLatestPoint` | `function withLatestPoint(` |
| 197 | `pressureMaturities` | `function pressureMaturities(` |
| 221 | `registerFlowPages` | `function registerFlowPages(` |
| 260 | `ylmYearMarks` | `function ylmYearMarks(` |
| 279 | `ylmColumns` | `function ylmColumns(` |
| 299 | `ylmFitLine` | `function ylmFitLine(` |
| 311 | `pressureHead` | `function pressureHead(` |
| 329 | `showPressureView` | `function showPressureView(` |
| 334 | `renderPressurePage` | `function renderPressurePage(` |

#### Pressure's Insights

| Line | Name | Anchor |
|---|---|---|
| 461 | `renderPressureInsights` | `function renderPressureInsights(` |
| 496 | `catList` · export | `function catList(` |
| 497 | `marketPeek` · export | `function marketPeek(` |
| 502 | `spreadPick` · export | `var spreadPick =` |
| 503 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 504 | `spreadLabel` | `function spreadLabel(` |
| 508 | `peekArt` | `function peekArt(` |
| 509 | `catCard` · export | `function catCard(` |
| 551 | `tempWord` · export | `function tempWord(` |
| 555 | `gdpFigure` · export | `function gdpFigure(` |
| 556 | `tempPeek` · export | `function tempPeek(` |
| 560 | `gdpPeek` · export | `function gdpPeek(` |

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
| 327 | `renderVolatility` | `function renderVolatility(` |
| 372 | `volatilityHighlights` | `function volatilityHighlights(` |

#### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

| Line | Name | Anchor |
|---|---|---|
| 401 | `setTopbar` · export | `function setTopbar(` |

### `js/diagnosis.ts`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 14 | `DIAG_SRC` | `var DIAG_SRC =` |
| 19 | `diagnosisHtml` | `function diagnosisHtml(` |
| 23 | `cycleCard` | `function cycleCard(` |
| 24 | `yearByYear` | `function yearByYear(` |
| 33 | `yearRow` | `function yearRow(` |
| 38 | `yearStrip` | `function yearStrip(` |
| 43 | `stripGap` | `function stripGap(` |
| 46 | `yearMarket` | `function yearMarket(` |
| 50 | `renderDiagnosis` · export | `function renderDiagnosis(` |
| 54 | `fitYearDots` · export | `function fitYearDots(` |
| 67 | `diagnosisHost` | `function diagnosisHost(` |
| 72 | `buildDoors` | `function buildDoors(` |
| 76 | `buildDiagnosis` | `function buildDiagnosis(` |

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
| 14 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 27 | `renderCycleList` | `function renderCycleList(` |

#### A closed cycle, shown on the Cycle tab's own page

| Line | Name | Anchor |
|---|---|---|
| 64 | `parentOf` | `function parentOf(` |
| 65 | `eraShow` | `function eraShow(` |
| 70 | `enterEra` | `function enterEra(` |
| 77 | `leaveEra` | `function leaveEra(` |

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
| 27 | `sheetRank` | `function sheetRank(` |
| 35 | `orderSheet` | `function orderSheet(` |
| 41 | `openTarget` | `function openTarget(` |
| 42 | `tabPanel` | `function tabPanel(` |
| 43 | `scrollSoon` | `function scrollSoon(` |
| 44 | `viewTab` | `function viewTab(` |
| 45 | `orderMetricSheets` | `function orderMetricSheets(` |
| 53 | `renderSignsList` | `function renderSignsList(` |

#### THE NAVIGATION CONTROLLER

| Line | Name | Anchor |
|---|---|---|
| 71 | `BACK` | `var BACK =` |
| 72 | `backPush` | `function backPush(` |
| 73 | `backClear` | `function backClear(` |
| 74 | `backPopped` | `function backPopped(` |
| 75 | `plainHome` | `function plainHome(` |
| 78 | `buildNav` | `function buildNav(` |

#### The metric page

| Line | Name | Anchor |
|---|---|---|
| 172 | `renderPagesAndNav` | `function renderPagesAndNav(` |

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
| 11 | `repaintPressureChart` | `function repaintPressureChart(` |
| 15 | `syncCape` | `function syncCape(` |
| 16 | `repaintPolicy` | `function repaintPolicy(` |
| 17 | `repaintDiagnosis` | `function repaintDiagnosis(` |
| 20 | `repaintDerived` | `function repaintDerived(` |

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
| 51 | `qIdx` | `function qIdx(` |
| 52 | `qName` | `function qName(` |
| 53 | `carried` | `function carried(` |
| 60 | `panel` | `function panel(` |
| 61 | `buildPanel` | `function buildPanel(` |
| 76 | `pathGap` | `function pathGap(` |
| 86 | `forgetEchoes` · export | `function forgetEchoes(` |
| 87 | `echoes` · export | `function echoes(` |
| 99 | `thenWords` | `function thenWords(` |
| 106 | `pairWords` | `function pairWords(` |
| 107 | `echoLine` | `function echoLine(` |
| 115 | `asOfWords` | `function asOfWords(` |
| 119 | `aiDetail` | `function aiDetail(` |
| 125 | `AI_PAGE` | `var AI_PAGE =` |
| 126 | `CHAPTER_MARKS` | `var CHAPTER_MARKS =` |
| 127 | `rankNow` | `function rankNow(` |
| 131 | `pic` | `function pic(` |
| 132 | `risksPic` | `function risksPic(` |
| 139 | `tilesPic` | `function tilesPic(` |
| 148 | `segAt` | `function segAt(` |
| 156 | `pathStrip` | `function pathStrip(` |
| 162 | `CHAPTER_PICS` | `var CHAPTER_PICS =` |
| 163 | `para` | `function para(` |
| 164 | `leadBoxes` | `function leadBoxes(` |
| 167 | `aiPage` | `function aiPage(` |
| 173 | `buildAiPage` · export | `function buildAiPage(` |
| 178 | `aiInsights` · export | `function aiInsights(` |

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
| 209 | `windowYears` · export | `function windowYears(` |
| 217 | `refName` | `function refName(` |
| 221 | `PULSE_WINDOW` · export | `var PULSE_WINDOW =` |
| 222 | `pulseClipN` | `var pulseClipN =` |
| 223 | `beatPath` | `function beatPath(` |
| 240 | `pulseTraceSvg` · export | `function pulseTraceSvg(` |
| 254 | `peekCard` · export | `function peekCard(` |

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
| 83 | `forgetLabs` · export | `function forgetLabs(` |
| 84 | `cycleLabs` | `function cycleLabs(` |
| 92 | `labs` · export | `function labs(` |
| 93 | `normAt` | `function normAt(` |
| 94 | `unread` | `function unread(` |
| 96 | `atCycle` | `function atCycle(` |
| 99 | `atYear` | `function atYear(` |
| 103 | `yearValue` | `function yearValue(` |
| 109 | `yearMeans` | `function yearMeans(` |
| 115 | `periodYears` | `function periodYears(` |
| 120 | `state` | `function state(` |
| 125 | `yearsWord` · export | `function yearsWord(` |
| 126 | `fmt` · export | `function fmt(` |
| 127 | `TIERS` | `var TIERS =` |
| 128 | `tier` | `function tier(` |
| 132 | `catTitle` | `function catTitle(` |
| 133 | `side` | `function side(` |
| 134 | `findWords` | `function findWords(` |
| 138 | `rowTag` | `function rowTag(` |
| 139 | `cardWord` | `function cardWord(` |
| 143 | `labItem` | `function labItem(` |
| 149 | `ring` | `function ring(` |
| 153 | `scoreTier` | `function scoreTier(` |
| 159 | `scoreBox` | `function scoreBox(` |
| 163 | `scoreRing` | `function scoreRing(` |
| 164 | `scoreTile` | `function scoreTile(` |
| 167 | `foldSec` | `function foldSec(` |
| 172 | `labSec` | `function labSec(` |
| 176 | `subSec` | `function subSec(` |
| 179 | `bySub` | `function bySub(` |
| 187 | `bySystem` | `function bySystem(` |
| 196 | `findOf` | `function findOf(` |
| 197 | `LENS` | `var LENS =` |
| 198 | `tierOpts` | `function tierOpts(` |
| 201 | `menuRows` | `function menuRows(` |
| 207 | `filterTag` | `function filterTag(` |
| 211 | `finder` | `function finder(` |
| 217 | `narrow` | `function narrow(` |
| 229 | `menuOf` | `function menuOf(` |
| 230 | `showMenu` | `function showMenu(` |
| 234 | `redraw` | `function redraw(` |
| 238 | `pickTier` | `function pickTier(` |
| 242 | `toggleMenu` | `function toggleMenu(` |
| 247 | `riskLabs` · export | `function riskLabs(` |
| 248 | `judged` | `function judged(` |
| 249 | `score` | `function score(` |
| 250 | `listWords` · export | `function listWords(` |
| 251 | `word` | `function word(` |
| 252 | `cap` | `function cap(` |
| 254 | `depthWords` | `function depthWords(` |
| 263 | `pinnedFacts` | `function pinnedFacts(` |
| 269 | `methodFacts` | `function methodFacts(` |
| 272 | `chartDetail` | `function chartDetail(` |
| 281 | `cycleScore` · export | `function cycleScore(` |
| 282 | `chartDoor` · export | `function chartDoor(` |
| 286 | `HOME_ID` | `var HOME_ID =` |
| 287 | `statRow` | `function statRow(` |
| 292 | `statBody` | `function statBody(` |
| 295 | `closedVisits` | `function closedVisits(` |
| 296 | `meanOf` | `function meanOf(` |
| 297 | `lengths` | `function lengths(` |
| 298 | `typical` | `function typical(` |
| 299 | `INFO` | `var INFO =` |
| 300 | `TICK` | `var TICK =` |
| 301 | `lengthBars` | `function lengthBars(` |
| 309 | `lengthPage` | `function lengthPage(` |
| 315 | `figo` | `function figo(` |
| 319 | `variationPage` | `function variationPage(` |
| 324 | `statsHome` | `function statsHome(` |
| 331 | `insightSec` | `function insightSec(` |
| 334 | `catName` | `function catName(` |
| 335 | `markName` | `function markName(` |
| 336 | `countTag` | `function countTag(` |
| 337 | `insightsHome` | `function insightsHome(` |
| 344 | `homeSections` | `function homeSections(` |
| 348 | `yearPicked` | `function yearPicked(` |
| 352 | `periodAt` | `function periodAt(` |
| 356 | `drawChart` | `function drawChart(` |
| 364 | `IND` · export | `var IND =` |
| 365 | `IND_ALL` | `var IND_ALL =` |
| 366 | `searchShell` | `function searchShell(` |
| 367 | `catBar` | `function catBar(` |
| 371 | `pickCat` | `function pickCat(` |
| 377 | `buildFind` | `function buildFind(` |
| 378 | `fold` | `function fold(` |
| 382 | `wireFinder` | `function wireFinder(` |
| 398 | `syncPeriod` | `function syncPeriod(` |
| 403 | `openYear` | `function openYear(` |
| 408 | `wireCatDoors` | `function wireCatDoors(` |
| 414 | `openMenus` | `function openMenus(` |
| 415 | `shutMenus` | `function shutMenus(` |
| 416 | `buildCycleChart` · export | `function buildCycleChart(` |

### `js/cycle-tab.ts`

#### THE CYCLE TAB: the readings' pages

| Line | Name | Anchor |
|---|---|---|
| 10 | `wearCategories` | `function wearCategories(` |
| 13 | `renderReadingPages` · export | `function renderReadingPages(` |

### `js/era.ts`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 7 | `eraFig` · export | `function eraFig(` |
| 24 | `todayFace` · export | `function todayFace(` |
| 31 | `todayValue` · export | `function todayValue(` |

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
| 63 | `qLabel` · export | `function qLabel(` |
| 64 | `monthLabel` · export | `function monthLabel(` |
| 65 | `ledeHtml` · export | `function ledeHtml(` |
| 66 | `auxStat` · export | `function auxStat(` |
| 69 | `facts` · export | `function facts(` |
| 70 | `factsFrom` · export | `function factsFrom(` |
| 74 | `srcBlock` · export | `function srcBlock(` |
| 75 | `srcHtml` | `function srcHtml(` |
| 76 | `fmtSigned` · export | `function fmtSigned(` |
| 77 | `popHead` · export | `function popHead(` |
| 78 | `hubLine` · export | `function hubLine(` |
| 79 | `qPretty` · export | `function qPretty(` |
| 80 | `capeFmt1` · export | `function capeFmt1(` |

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

#### The split indicators: one page each

| Line | Name | Anchor |
|---|---|---|
| 20 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 26 | `midOf` | `function midOf(` |
| 27 | `meterWord` · export | `function meterWord(` |
| 28 | `splitPages` | `function splitPages(` |
| 45 | `confidencePage` | `function confidencePage(` |
| 51 | `desirePage` | `function desirePage(` |
| 57 | `premiumPage` | `function premiumPage(` |
| 63 | `marketPage` | `function marketPage(` |
| 69 | `productivityPage` | `function productivityPage(` |
| 74 | `splitRow` · export | `function splitRow(` |
| 75 | `splitSpec` | `function splitSpec(` |
| 81 | `splitInfo` | `function splitInfo(` |
| 85 | `periodTicks` | `function periodTicks(` |
| 90 | `periodOfSeries` | `function periodOfSeries(` |
| 91 | `drawSplit` | `function drawSplit(` |
| 108 | `mountSplit` | `function mountSplit(` |
| 121 | `mountSplits` · export | `function mountSplits(` |

#### The split indicators' insights

| Line | Name | Anchor |
|---|---|---|
| 127 | `buffettInsight` | `function buffettInsight(` |
| 142 | `debtInsight` | `function debtInsight(` |
| 157 | `productivityInsight` | `function productivityInsight(` |
| 167 | `confidenceInsight` | `function confidenceInsight(` |
| 178 | `desireInsight` | `function desireInsight(` |
| 189 | `premiumInsight` | `function premiumInsight(` |
| 202 | `ORDINAL` | `var ORDINAL =` |
| 203 | `marketInsight` | `function marketInsight(` |
| 215 | `interestInsight` | `function interestInsight(` |

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
| `pressure-range` | `js/repaint.ts:13` |
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
| 179 | top bar (Keren, Sep 19, 2026, with Clue's screens): the open tab's title in the middle, a round menu |
| 281 | calendar tab (yearly view, one card per year grouped into five eras — see marketCycles below) |
| 313 | season strip |
| 340 | THE GAP (Keren, V385: "…so if one day I'll tell you I want the spacing to be 30, you would just change |
| 405 | tab bar (app-style segmented navigation) |
| 429 | vitals strip (health-app framing: two at-a-glance rings, Growth and Rates, built from data used |
| 431 | temperature chart (Cycle tab), after Natural Cycles' temperature view: a column per month of the |
| 483 | journal (editorial content tab) |
| 484 | content tab: reading companion |
| 540 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
| 719 | Volume's red ramp (Keren, V389: "volume is, in gynaecology, blood — so it should be different shades of |
| 763 | the maturity chart's columns wear the curve's three zones (Keren, V394: "a colour that represents the |
| 819 | One gap between an inner page's containers (Keren, V381: "the spacing between containers in each inner |
| 975 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 984 | The symptoms: a cycle's years against today |
| 1,115 | hero: yield curve |
| 1,145 | the readout (Keren, from Apple Health): it never changes the page's height, which is why it beats a |
| 1,164 | 10Y-3M spread history (quarterly, with recession bands) |
| 1,192 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 1,200 | long cycle (structural layer) |
| 1,206 | indicator grid |
| 1,230 | info icon + popover (progressive disclosure for longer notes) |
| 1,244 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 1,330 | footer |

## Markup landmarks

Banner comments in `page-body.html`:

| Line | Section |
|---|---|

Every `id` in the static DOM (100), which is what the renderers fill:

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
| 50 | `sheet-metric-temp` |
| 51 | `temp-timing` |
| 52 | `temp-chart` |
| 53 | `temp-rangebar` |
| 55 | `temp-head` |
| 56 | `temp-history` |
| 57 | `temp-hist-tooltip` |
| 58 | `temp-trend` |
| 60 | `temp-highlights` |
| 62 | `sheet-metric-gdp` |
| 63 | `gdp-timing` |
| 64 | `gdp-chart` |
| 65 | `gdp-rangebar` |
| 67 | `gdp-head` |
| 68 | `gdp-history` |
| 69 | `gdp-hist-tooltip` |
| 70 | `gdp-trend` |
| 72 | `gdp-highlights` |
| 76 | `sheet-marker-deficit` |
| 76 | `deficit-timing` |
| 78 | `sheet-metric-households` |
| 79 | `households-timing` |
| 80 | `households-chart` |
| 81 | `households-highlights` |
| 84 | `sheet-metric-valuation` |
| 85 | `valuation-timing` |
| 86 | `valuation-chart` |
| 87 | `valuation-highlights` |
| 92 | `hormones-history` |
| 93 | `hormones-insights` |
| 99 | `pressure-timeline` |
| 101 | `pressure-head` |
| 102 | `ylm-shell` |
| 103 | `ylm-svg` |
| 104 | `ylm-tooltip` |
| 106 | `spread-history-shell` |
| 107 | `spread-history-svg` |
| 108 | `spread-history-tooltip` |
| 110 | `ylm-trend` |
| 112 | `pressure-insights` |
| 118 | `fear-history` |
| 119 | `curve-highlights` |
| 124 | `signs-list` |
| 129 | `panel-analysis` |
| 130 | `calendar-list` |
| 131 | `cycle-list` |
| 132 | `cycle-more` |
| 133 | `cycle-more-label` |
| 137 | `calendar-cycle` |
| 140 | `panel-portfolio` |
| 142 | `panel-chart` |
| 143 | `chart-home` |
| 146 | `more-menu` |
| 149 | `menu-back` |
| 163 | `sources-open` |
| 171 | `appearance-current` |
| 174 | `app-version` |
| 178 | `sheet-howto` |
| 221 | `sheet-book` |
| 231 | `idea-prose` |
| 237 | `idea-more` |
| 242 | `cycle-model-line` |
| 250 | `seasons-kicker` |
| 251 | `seasons-rows` |
| 255 | `framework-kicker` |
| 256 | `framework-rows` |
| 266 | `sheet-appearance` |
| 274 | `theme-toggle` |
| 281 | `sheet-contact` |
| 290 | `contact-form` |
| 291 | `contact-title` |
| 292 | `contact-message` |
| 294 | `contact-hint` |
| 295 | `contact-send` |
| 301 | `sheet-sources` |
| 304 | `sources-back` |
| 309 | `asof-text` |
| 310 | `sources-groups` |
| 316 | `detail-backdrop` |
| 318 | `detail-modal-close` |
| 319 | `detail-modal-body` |

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

