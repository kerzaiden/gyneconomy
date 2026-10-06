# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,899 lines** in 36 files, about 593 KB, roughly **168 thousand tokens**. No session can
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
| `styles.css` | 1,257 | the whole stylesheet, every token and rule |
| `page-body.html` | 325 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| `js/main.ts` | 32 modules | the entry: imports every module and calls their boots in order |
| `page-tail.html` | 45 | the bundle's closing tag, the service-worker registration, </body></html> |

Counts: **32** modules, **677** top-level functions, **118** top-level vars, **362** exported names, **19** boots.

## Modules, in boot order

| Module | Lines | Declarations | Imports from |
|---|---|---|---|
| `js/dom.ts` | 170 | 26 | `format` |
| `js/live.ts` | 207 | 22 | `format` |
| `js/refresh-season.ts` | 41 | 5 | `format`, `history-fred` |
| `js/data.ts` | 568 | 77 | `format`, `history-fred`, `live` |
| `js/model.ts` | 374 | 54 | `data`, `dom`, `format`, `history-fred`, `refresh-season` |
| `js/history.ts` | 464 | 40 | `charts`, `data`, `dom`, `format`, `live`, `model` |
| `js/readings.ts` | 801 | 69 | `charts`, `data`, `dom`, `format`, `history`, `history-fred`, `live`, `model`, `refresh-season` |
| `js/roster.ts` | 131 | 7 | `charts`, `data`, `format`, `history`, `history-fred`, `live`, `marks`, `refresh-season` |
| `js/render-core.ts` | 559 | 44 | `charts`, `data`, `dom`, `format`, `history`, `history-charts`, `live`, `model`, `readings`, `refresh-season`, `roster` |
| `js/render-pages.ts` | 417 | 10 | `charts`, `data`, `dom`, `format`, `history`, `history-charts`, `history-fred`, `live`, `model`, `readings`, `refresh-season`, `render-core` |
| `js/diagnosis.ts` | 90 | 13 | `ai-insights`, `cycle-analysis`, `data`, `dom`, `fed-phases`, `format`, `live`, `marks`, `model`, `quarter-sheet`, `refresh-season`, `render-core` |
| `js/dial-cycle.ts` | 390 | 22 | `cycle-analysis`, `data`, `diagnosis`, `dom`, `format`, `live`, `model`, `quarter-sheet`, `refresh-season`, `render-core`, `render-pages`, `roster` |
| `js/analysis.ts` | 88 | 6 | `data`, `dial-cycle`, `dom`, `format`, `history`, `live`, `model`, `render-core`, `render-pages` |
| `js/portfolio.ts` | 108 | 17 | `data`, `dom`, `format`, `marks`, `model`, `render-core` |
| `js/pages-nav.ts` | 185 | 16 | `cycle-tab`, `data`, `dial-cycle`, `dom`, `inner-pages`, `live`, `readings`, `render-core`, `render-pages`, `roster` |
| `js/tabs-menu.ts` | 228 | 10 | `data`, `dial-cycle`, `dom`, `format`, `live`, `model`, `pages-nav`, `refresh-season` |
| `js/repaint.ts` | 39 | 5 | `ai-insights`, `cycle-analysis`, `data`, `diagnosis`, `dom`, `live`, `model`, `readings`, `render-core` |
| `js/ai-insights.ts` | 182 | 39 | `charts`, `cycle-analysis`, `data`, `dom`, `marks`, `model`, `refresh-season`, `render-core`, `roster` |
| `js/charts.ts` | 264 | 35 | `format` |
| `js/cycle-analysis.ts` | 409 | 101 | `charts`, `data`, `dom`, `era`, `fed-phases`, `format`, `history`, `insights`, `marks`, `model`, `refresh-season`, `render-core`, `roster` |
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
| 4 | `bootRefreshSeason` | `js/refresh-season.ts:33`–40 |
| 5 | `bootData` | `js/data.ts:516`–567 |
| 6 | `bootModel` | `js/model.ts:351`–373 |
| 7 | `bootHistory` | `js/history.ts:440`–463 |
| 8 | `bootReadings` | `js/readings.ts:624`–692 |
| 9 | `bootReadingRegistry` | `js/readings.ts:735`–800 |
| 10 | `bootRoster` | `js/roster.ts:118`–130 |
| 11 | `bootRenderCore` | `js/render-core.ts:549`–558 |
| 12 | `bootRenderPages` | `js/render-pages.ts:401`–416 |
| 13 | `bootDiagnosis` | `js/diagnosis.ts:86`–89 |
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
| 13 | `monthIndex` | `function monthIndex(` |
| 14 | `cpiTrend` | `function cpiTrend(` |
| 20 | `cpiYear` | `function cpiYear(` |
| 24 | `cpiDirectionOf` | `function cpiDirectionOf(` |
| 25 | `cpiDirectionAt` · export | `function cpiDirectionAt(` |
| 29 | `HOLD_BAND` · export | `var HOLD_BAND =` |
| 30 | `PEAK_YEARS` · export | `var PEAK_YEARS =` |
| 33 | `regimeOf` | `function regimeOf(` |
| 36 | `readSeason` | `function readSeason(` |
| 47 | `potentialOf` · export | `function potentialOf(` |
| 52 | `peakTrend` | `function peakTrend(` |
| 58 | `closingReading` | `function closingReading(` |
| 62 | `quarterRegime` · export | `function quarterRegime(` |
| 63 | `qIndex` | `function qIndex(` |
| 64 | `recessionRecord` · export | `function recessionRecord(` |
| 89 | `regimeAt` | `function regimeAt(` |
| 90 | `seasonTitle` · export | `function seasonTitle(` |
| 91 | `cycleReturns` · export | `function cycleReturns(` |
| 101 | `cycleModel` · export | `function cycleModel(` |
| 140 | `potentialGap` · export | `function potentialGap(` |
| 144 | `seasonWhyFor` | `function seasonWhyFor(` |
| 150 | `inflationFigure` · export | `function inflationFigure(` |
| 155 | `growthWord` · export | `function growthWord(` |
| 158 | `contractingClause` | `function contractingClause(` |
| 162 | `cycleNowNote` · export | `function cycleNowNote(` |
| 170 | `seasonGroup` · export | `function seasonGroup(` |

#### The diagnosis: how she feels, and what has followed

| Line | Name | Anchor |
|---|---|---|
| 172 | `rankToDate` · export | `function rankToDate(` |
| 176 | `diagnoseToday` · export | `function diagnoseToday(` |

#### Her mood: one range from Depression to Mania

| Line | Name | Anchor |
|---|---|---|
| 181 | `rankIn` | `function rankIn(` |
| 187 | `moodSeries` | `function moodSeries(` |
| 195 | `moodAt` | `function moodAt(` |
| 201 | `MOOD_TURN` · export | `var MOOD_TURN =` |
| 204 | `moodWord` | `function moodWord(` |
| 208 | `moodRead` | `function moodRead(` |
| 216 | `moodTrack` · export | `function moodTrack(` |
| 222 | `moodToday` · export | `function moodToday(` |
| 226 | `moodSince` | `function moodSince(` |
| 227 | `cycleStory` · export | `function cycleStory(` |

#### Cycles by name

| Line | Name | Anchor |
|---|---|---|
| 238 | `cycleByName` · export | `function cycleByName(` |
| 242 | `openCycle` · export | `function openCycle(` |
| 246 | `cycleSlice` · export | `function cycleSlice(` |
| 254 | `totalGrowthYears` · export | `function totalGrowthYears(` |
| 262 | `cycLabel` · export | `function cycLabel(` |
| 266 | `cycleQtrIdx` · export | `function cycleQtrIdx(` |
| 271 | `totalRiseIn` · export | `function totalRiseIn(` |
| 281 | `yearInflation` · export | `function yearInflation(` |
| 285 | `yearGrowth` · export | `function yearGrowth(` |
| 288 | `yearSoFar` · export | `function yearSoFar(` |
| 292 | `eraInflation` · export | `function eraInflation(` |
| 301 | `eraGrowth` · export | `function eraGrowth(` |
| 317 | `eraMarketTotal` · export | `function eraMarketTotal(` |
| 322 | `forgetMood` · export | `function forgetMood(` |
| 328 | `seasonYears` | `function seasonYears(` |
| 339 | `seasonQuarters` | `function seasonQuarters(` |

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
| 105 | `timelineSpan` · export | `function timelineSpan(` |
| 109 | `timelineFor` | `function timelineFor(` |
| 123 | `windowScale` · export | `function windowScale(` |
| 138 | `histReadEnsure` | `function histReadEnsure(` |
| 158 | `geomFmt` | `function geomFmt(` |
| 159 | `attrNum` | `function attrNum(` |
| 160 | `histReadFill` | `function histReadFill(` |
| 208 | `histAxisEnds` | `function histAxisEnds(` |
| 219 | `histLegend` | `function histLegend(` |
| 278 | `refitHistory` · export | `function refitHistory(` |
| 288 | `wireHistHover` | `function wireHistHover(` |
| 321 | `histShow` | `function histShow(` |
| 330 | `histLive` | `function histLive(` |
| 337 | `histKeysWire` | `function histKeysWire(` |
| 351 | `mWindowFrom` · export | `function mWindowFrom(` |
| 355 | `qWindowFrom` · export | `function qWindowFrom(` |
| 359 | `defFrom` · export | `function defFrom(` |
| 363 | `tabSegs` | `function tabSegs(` |
| 371 | `tabBar` · export | `function tabBar(` |
| 374 | `modeBar` | `function modeBar(` |
| 378 | `controlKeys` · export | `function controlKeys(` |
| 382 | `controlKeysIn` | `function controlKeysIn(` |
| 388 | `histControls` · export | `function histControls(` |
| 396 | `controlsBox` | `function controlsBox(` |
| 397 | `pageCycle` · export | `function pageCycle(` |
| 402 | `cyclePicker` | `function cyclePicker(` |
| 421 | `rangeBar` | `function rangeBar(` |
| 425 | `headSigma` · export | `function headSigma(` |
| 430 | `attachHistory` · export | `function attachHistory(` |

### `js/readings.ts`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 23 | `productivityWord` | `function productivityWord(` |
| 34 | `confidenceWord` | `function confidenceWord(` |
| 40 | `desireWord` | `function desireWord(` |
| 46 | `deficitBlock` · export | `function deficitBlock(` |
| 108 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 112 | `meterFlagged` · export | `function meterFlagged(` |
| 116 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 130 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 143 | `confidenceInfoHtml` | `function confidenceInfoHtml(` |
| 155 | `desireInfoHtml` | `function desireInfoHtml(` |
| 166 | `premiumInfoHtml` | `function premiumInfoHtml(` |
| 178 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 192 | `activityInfoHtml` | `function activityInfoHtml(` |
| 211 | `bandMonths` | `function bandMonths(` |
| 214 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 244 | `volumeBlock` | `function volumeBlock(` |
| 254 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 264 | `volumeVerdict` · export | `function volumeVerdict(` |
| 271 | `unempState` · export | `function unempState(` |
| 276 | `sahmNow` | `function sahmNow(` |
| 277 | `potentialSentence` | `function potentialSentence(` |
| 285 | `growthInfoHtml` · export | `function growthInfoHtml(` |
| 305 | `velocityVerdict` | `function velocityVerdict(` |
| 313 | `laborWord` · export | `function laborWord(` |
| 316 | `temperatureWord` · export | `function temperatureWord(` |
| 321 | `deriveLaggingTags` | `function deriveLaggingTags(` |
| 327 | `derivePulseTag` | `function derivePulseTag(` |
| 362 | `volatilityTag` · export | `function volatilityTag(` |
| 368 | `fearCurve` · export | `function fearCurve(` |
| 373 | `curveVerdict` · export | `function curveVerdict(` |
| 378 | `valuationVerdict` · export | `function valuationVerdict(` |
| 386 | `tempCaptionFull` · export | `var tempCaptionFull =` |
| 387 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 391 | `pressureZone` · export | `function pressureZone(` |
| 397 | `HZN_BACK` | `var HZN_BACK =` |
| 398 | `hznLast` | `function hznLast(` |
| 399 | `hznNeed` | `function hznNeed(` |
| 400 | `hznDelta` | `function hznDelta(` |
| 401 | `hznRecord` | `function hznRecord(` |
| 405 | `hznBack` | `function hznBack(` |
| 406 | `horizonWord` | `function horizonWord(` |
| 411 | `horizonInfoHtml` · export | `function horizonInfoHtml(` |
| 432 | `pulseBlock` | `function pulseBlock(` |
| 446 | `householdsWord` | `function householdsWord(` |
| 453 | `dsrInfoHtml` · export | `function dsrInfoHtml(` |
| 470 | `savInfoHtml` · export | `function savInfoHtml(` |
| 487 | `volatilityDetailHtml` · export | `function volatilityDetailHtml(` |
| 501 | `marketWord` · export | `function marketWord(` |
| 505 | `marketCol` · export | `function marketCol(` |
| 506 | `marketInfoHtml` | `function marketInfoHtml(` |
| 515 | `rowReadings` · export | `function rowReadings(` |
| 516 | `indOf` · export | `function indOf(` |
| 517 | `policyFacts` | `function policyFacts(` |
| 524 | `policyFactRows` · export | `function policyFactRows(` |
| 527 | `growthShownCap` · export | `function growthShownCap(` |
| 528 | `phaseClass` · export | `function phaseClass(` |
| 529 | `activityStackHtml` | `function activityStackHtml(` |
| 539 | `seatTemperature` | `function seatTemperature(` |
| 547 | `DATED_UNIT` · export | `var DATED_UNIT =` |
| 552 | `deriveFeelingReadings` | `function deriveFeelingReadings(` |

#### Temperature's notes

| Line | Name | Anchor |
|---|---|---|
| 693 | `isNum` | `function isNum(` |
| 695 | `rowId` | `function rowId(` |
| 696 | `rowLike` | `function rowLike(` |
| 709 | `rowsOk` | `function rowsOk(` |
| 712 | `deriveHorizon` | `function deriveHorizon(` |
| 725 | `fieldsKept` | `function fieldsKept(` |
| 729 | `vixAsOf` | `function vixAsOf(` |
| 730 | `coincidentAsOf` | `function coincidentAsOf(` |
| 731 | `periodIso` | `function periodIso(` |

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
| 26 | `openOf` | `function openOf(` |
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
| 154 | `cardDetailHtml` · export | `function cardDetailHtml(` |

#### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

| Line | Name | Anchor |
|---|---|---|
| 168 | `latestYieldPoint` | `function latestYieldPoint(` |
| 175 | `withLatestPoint` | `function withLatestPoint(` |
| 180 | `pressureMaturities` | `function pressureMaturities(` |
| 204 | `registerFlowPages` | `function registerFlowPages(` |
| 243 | `ylmYearMarks` | `function ylmYearMarks(` |
| 262 | `ylmColumns` | `function ylmColumns(` |
| 282 | `ylmFitLine` | `function ylmFitLine(` |
| 294 | `pressureHead` | `function pressureHead(` |
| 312 | `showPressureView` | `function showPressureView(` |
| 317 | `renderPressurePage` | `function renderPressurePage(` |

#### Pressure's Insights

| Line | Name | Anchor |
|---|---|---|
| 444 | `renderPressureInsights` | `function renderPressureInsights(` |
| 479 | `catList` · export | `function catList(` |
| 480 | `marketPeek` · export | `function marketPeek(` |
| 485 | `spreadPick` · export | `var spreadPick =` |
| 486 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 487 | `spreadLabel` | `function spreadLabel(` |
| 491 | `peekArt` | `function peekArt(` |
| 492 | `catCard` · export | `function catCard(` |
| 534 | `tempWord` · export | `function tempWord(` |
| 538 | `gdpFigure` · export | `function gdpFigure(` |
| 539 | `tempPeek` · export | `function tempPeek(` |
| 543 | `gdpPeek` · export | `function gdpPeek(` |

### `js/render-pages.ts`

#### RENDER: yield-curve spread history chart, 10Y-3M or 10Y-2Y

| Line | Name | Anchor |
|---|---|---|
| 17 | `spreadSeries` | `function spreadSeries(` |
| 61 | `renderSpreadHistory` | `function renderSpreadHistory(` |

#### RENDER: un-inversion-to-recession historical lag panel

| Line | Name | Anchor |
|---|---|---|
| 148 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

#### RENDER: the Treasury spreads, inside Pressure

| Line | Name | Anchor |
|---|---|---|
| 173 | `renderHorizonPage` | `function renderHorizonPage(` |
| 197 | `spreadInsights` | `function spreadInsights(` |

#### RENDER: Valuation (slow)

| Line | Name | Anchor |
|---|---|---|
| 226 | `renderValuationTag` | `function renderValuationTag(` |

#### RENDER: Hormones

| Line | Name | Anchor |
|---|---|---|
| 232 | `renderHormones` | `function renderHormones(` |

#### RENDER: Volatility — the VIX since 1986, and the shape of its curve today

| Line | Name | Anchor |
|---|---|---|
| 319 | `renderVolatility` | `function renderVolatility(` |
| 364 | `volatilityHighlights` | `function volatilityHighlights(` |

#### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

| Line | Name | Anchor |
|---|---|---|
| 393 | `setTopbar` · export | `function setTopbar(` |

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
| 14 | `trendOf` · export | `function trendOf(` |
| 33 | `trendPill` · export | `function trendPill(` |

#### The inner pages' charts

| Line | Name | Anchor |
|---|---|---|
| 44 | `yearsAcross` | `function yearsAcross(` |
| 45 | `xLabelOf` | `function xLabelOf(` |
| 54 | `fitLine` · export | `function fitLine(` |
| 58 | `fitGroup` · export | `function fitGroup(` |

#### The history component's axes

| Line | Name | Anchor |
|---|---|---|
| 75 | `vGrid` · export | `function vGrid(` |
| 79 | `COL_FILL` | `var COL_FILL =` |
| 80 | `colPath` · export | `function colPath(` |
| 85 | `colWidth` · export | `function colWidth(` |
| 90 | `AXIS` · export | `var AXIS =` |
| 91 | `histFrame` · export | `function histFrame(` |
| 98 | `xLabel` · export | `function xLabel(` |
| 101 | `crossLine` · export | `function crossLine(` |
| 104 | `zeroRule` · export | `function zeroRule(` |
| 107 | `meanRule` · export | `function meanRule(` |
| 109 | `publishGeom` · export | `function publishGeom(` |
| 110 | `histBar` · export | `function histBar(` |
| 113 | `histTip` · export | `function histTip(` |
| 114 | `avgRule` · export | `function avgRule(` |
| 117 | `vhOpen` · export | `function vhOpen(` |
| 118 | `autoTicks` | `function autoTicks(` |
| 126 | `chartAxes` · export | `function chartAxes(` |
| 151 | `divergeChart` · export | `function divergeChart(` |

#### A series' highest reading within a span

| Line | Name | Anchor |
|---|---|---|
| 185 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 186 | `PEEK_W` | `var PEEK_W =` |
| 187 | `PEEK_H` | `var PEEK_H =` |
| 188 | `colPeek` · export | `function colPeek(` |
| 205 | `windowYears` · export | `function windowYears(` |
| 213 | `refName` | `function refName(` |
| 217 | `PULSE_WINDOW` · export | `var PULSE_WINDOW =` |
| 218 | `pulseClipN` | `var pulseClipN =` |
| 219 | `beatPath` | `function beatPath(` |
| 236 | `pulseTraceSvg` · export | `function pulseTraceSvg(` |
| 250 | `peekCard` · export | `function peekCard(` |

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
| 95 | `state` | `function state(` |
| 100 | `yearsWord` · export | `function yearsWord(` |
| 101 | `fmt` · export | `function fmt(` |
| 102 | `TIERS` | `var TIERS =` |
| 103 | `tier` | `function tier(` |
| 107 | `catTitle` | `function catTitle(` |
| 108 | `side` | `function side(` |
| 109 | `findWords` | `function findWords(` |
| 113 | `rowTag` | `function rowTag(` |
| 114 | `cardWord` | `function cardWord(` |
| 118 | `labItem` | `function labItem(` |
| 124 | `ring` | `function ring(` |
| 128 | `scoreTier` | `function scoreTier(` |
| 134 | `scoreBox` | `function scoreBox(` |
| 138 | `scoreRing` | `function scoreRing(` |
| 139 | `scoreTile` | `function scoreTile(` |
| 142 | `foldSec` | `function foldSec(` |
| 147 | `labSec` | `function labSec(` |
| 151 | `subSec` | `function subSec(` |
| 154 | `bySub` | `function bySub(` |
| 162 | `bySystem` | `function bySystem(` |
| 171 | `findOf` | `function findOf(` |
| 172 | `LENS` | `var LENS =` |
| 173 | `tierOpts` | `function tierOpts(` |
| 176 | `menuRows` | `function menuRows(` |
| 187 | `filterTags` | `function filterTags(` |
| 192 | `finder` | `function finder(` |
| 198 | `narrow` | `function narrow(` |
| 210 | `menuOf` | `function menuOf(` |
| 211 | `showMenu` | `function showMenu(` |
| 215 | `redraw` | `function redraw(` |
| 220 | `pickTier` | `function pickTier(` |
| 224 | `pickCycle` | `function pickCycle(` |
| 228 | `fillMenu` | `function fillMenu(` |
| 235 | `openSub` | `function openSub(` |
| 239 | `toggleMenu` | `function toggleMenu(` |
| 244 | `riskLabs` · export | `function riskLabs(` |
| 245 | `judged` | `function judged(` |
| 246 | `score` | `function score(` |
| 247 | `listWords` · export | `function listWords(` |
| 248 | `word` | `function word(` |
| 249 | `cap` | `function cap(` |
| 251 | `depthWords` | `function depthWords(` |
| 260 | `pinnedFacts` | `function pinnedFacts(` |
| 266 | `methodFacts` | `function methodFacts(` |
| 269 | `chartDetail` | `function chartDetail(` |
| 278 | `cycleScore` · export | `function cycleScore(` |
| 279 | `chartDoor` · export | `function chartDoor(` |
| 283 | `HOME_ID` | `var HOME_ID =` |
| 284 | `statRow` | `function statRow(` |
| 289 | `statBody` | `function statBody(` |
| 292 | `closedVisits` | `function closedVisits(` |
| 293 | `meanOf` | `function meanOf(` |
| 294 | `lengths` | `function lengths(` |
| 295 | `typical` | `function typical(` |
| 296 | `INFO` | `var INFO =` |
| 297 | `TICK` | `var TICK =` |
| 298 | `lengthBars` | `function lengthBars(` |
| 306 | `lengthPage` | `function lengthPage(` |
| 312 | `figo` | `function figo(` |
| 316 | `variationPage` | `function variationPage(` |
| 321 | `statsHome` | `function statsHome(` |
| 328 | `insightSec` | `function insightSec(` |
| 331 | `catName` | `function catName(` |
| 332 | `markName` | `function markName(` |
| 333 | `countTag` | `function countTag(` |
| 334 | `insightsHome` | `function insightsHome(` |
| 341 | `homeSections` | `function homeSections(` |
| 345 | `drawChart` | `function drawChart(` |
| 353 | `IND` · export | `var IND =` |
| 354 | `IND_ALL` | `var IND_ALL =` |
| 355 | `searchShell` | `function searchShell(` |
| 356 | `catBar` | `function catBar(` |
| 360 | `pickCat` | `function pickCat(` |
| 366 | `buildFind` | `function buildFind(` |
| 367 | `fold` | `function fold(` |
| 371 | `wireFinder` | `function wireFinder(` |
| 388 | `wireCatDoors` | `function wireCatDoors(` |
| 394 | `openMenus` | `function openMenus(` |
| 395 | `shutMenus` | `function shutMenus(` |
| 396 | `buildCycleChart` · export | `function buildCycleChart(` |

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
| 394 | `m2Step` | `function m2Step(` |
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
| 429 | temperature chart (Cycle tab), after Natural Cycles' temperature view: a column per month of the |
| 473 | a quarter's sheet: the season's prose |
| 529 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
| 698 | Volume's red ramp (Keren, V389: "volume is, in gynaecology, blood — so it should be different shades of |
| 736 | the maturity chart's columns wear the curve's three zones (Keren, V394: "a colour that represents the |
| 785 | One gap between an inner page's containers (Keren, V381: "the spacing between containers in each inner |
| 933 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 942 | The symptoms: a cycle's years against today |
| 1,079 | hero: yield curve |
| 1,109 | the readout (Keren, from Apple Health): it never changes the page's height, which is why it beats a |
| 1,128 | 10Y-3M spread history (quarterly, with recession bands) |
| 1,147 | un-inversion-to-recession historical lag panel |
| 1,155 | long cycle (structural layer) |
| 1,160 | the reading's tag |
| 1,169 | info icon + popover (progressive disclosure for longer notes) |
| 1,183 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 1,247 | footer |

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

