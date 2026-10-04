# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **9,371 lines** in 35 files, about 617 KB, roughly **175 thousand tokens**. No session can
read it whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Use the **anchor** column with grep —
> `grep -rn 'function curveVerdict(' src/` — and treat `file:line` as rough orientation only.

Generated from commit `e3799e7` on 2026-10-04.

## The page

`src/manifest.json` joins these parts into `index.html`. The `.js` entry is bundled by esbuild
(`tools/bundle.js`) into one script in its place.

| Part | Lines | What |
|---|---|---|
| `page-head.html` | 5 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist |
| `styles.css` | 1,408 | the whole stylesheet, every token and rule |
| `page-body.html` | 391 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| `js/main.ts` | 31 modules | the entry: imports every module and calls their boots in order |
| `page-tail.html` | 45 | the bundle's closing tag, the service-worker registration, </body></html> |

Counts: **31** modules, **613** top-level functions, **104** top-level vars, **345** exported names, **19** boots.

## Modules, in boot order

| Module | Lines | Declarations | Imports from |
|---|---|---|---|
| `js/dom.ts` | 145 | 18 | `format` |
| `js/live.ts` | 207 | 22 | `format` |
| `js/refresh-season.ts` | 38 | 4 | `format`, `history-fred` |
| `js/data.ts` | 555 | 74 | `format`, `history-fred`, `live` |
| `js/model.ts` | 345 | 45 | `data`, `dom`, `format`, `history-fred`, `refresh-season` |
| `js/history.ts` | 470 | 38 | `charts`, `data`, `dom`, `format`, `live`, `model` |
| `js/readings.ts` | 809 | 70 | `charts`, `data`, `dom`, `format`, `history`, `history-fred`, `live`, `model`, `refresh-season` |
| `js/roster.ts` | 148 | 13 | `charts`, `data`, `format`, `history`, `history-fred`, `live`, `marks`, `readings`, `refresh-season` |
| `js/render-core.ts` | 563 | 37 | `charts`, `data`, `dom`, `format`, `history`, `history-charts`, `live`, `model`, `readings`, `refresh-season`, `roster` |
| `js/render-pages.ts` | 450 | 11 | `charts`, `data`, `dom`, `format`, `history`, `history-charts`, `history-fred`, `live`, `model`, `readings`, `refresh-season`, `render-core` |
| `js/diagnosis.ts` | 80 | 12 | `cycle-analysis`, `data`, `dom`, `format`, `live`, `marks`, `model`, `quarter-sheet`, `refresh-season`, `roster` |
| `js/dial-cycle.ts` | 403 | 22 | `data`, `diagnosis`, `dom`, `format`, `live`, `model`, `quarter-sheet`, `refresh-season`, `render-pages`, `roster` |
| `js/analysis.ts` | 254 | 24 | `category-analysis`, `charts`, `cycle-analysis`, `data`, `dial-cycle`, `dom`, `era`, `format`, `history`, `live`, `model`, `refresh-season`, `render-pages`, `roster` |
| `js/portfolio.ts` | 254 | 30 | `data`, `dom`, `format`, `history-fred`, `model`, `refresh-season` |
| `js/pages-nav.ts` | 341 | 26 | `cycle-tab`, `data`, `dial-cycle`, `dom`, `format`, `history`, `indicators`, `inner-pages`, `live`, `readings`, `render-core`, `render-pages`, `roster` |
| `js/tabs-menu.ts` | 203 | 5 | `data`, `dial-cycle`, `dom`, `format`, `live`, `model`, `pages-nav`, `refresh-season` |
| `js/repaint.ts` | 82 | 10 | `category-analysis`, `data`, `diagnosis`, `dom`, `live`, `model`, `readings`, `render-core`, `roster` |
| `js/category-analysis.ts` | 165 | 22 | `charts`, `data`, `dom`, `format`, `history-fred`, `insights`, `model`, `refresh-season`, `roster` |
| `js/charts.ts` | 300 | 39 | `format` |
| `js/cycle-analysis.ts` | 141 | 28 | `data`, `dom`, `format`, `model`, `roster` |
| `js/cycle-tab.ts` | 97 | 4 | `category-analysis`, `data`, `dom`, `format`, `history-charts`, `indicators`, `model`, `readings`, `refresh-season`, `render-core`, `roster` |
| `js/era.ts` | 63 | 10 | `format`, `roster` |
| `js/format.ts` | 79 | 37 | — |
| `js/history-charts.ts` | 406 | 13 | `charts`, `data`, `format`, `history`, `history-fred`, `model`, `readings`, `refresh-season` |
| `js/history-fred.ts` | 19 | 14 | — |
| `js/indicators.ts` | 283 | 34 | `charts`, `data`, `dom`, `format`, `history`, `history-fred`, `model`, `readings`, `refresh-season`, `render-core`, `roster` |
| `js/inner-pages.ts` | 287 | 13 | `charts`, `data`, `dial-cycle`, `dom`, `format`, `history`, `history-charts`, `model`, `readings`, `refresh-season`, `render-core` |
| `js/insights.ts` | 181 | 16 | `data`, `dom`, `format`, `model`, `readings`, `refresh-season`, `roster` |
| `js/marks.ts` | 60 | 22 | — |
| `js/quarter-sheet.ts` | 52 | 4 | `data`, `dom`, `format`, `model`, `refresh-season`, `render-core` |
| `js/main.ts` | 42 | 0 | `analysis`, `data`, `diagnosis`, `dial-cycle`, `dom`, `history`, `live`, `model`, `pages-nav`, `portfolio`, `readings`, `refresh-season`, `render-core`, `render-pages`, `repaint`, `roster`, `tabs-menu` |

## The boots

A module's top level holds only declarations and values that need nothing else. Whatever runs
at load and reads another module sits in its `boot…()` function, and `js/main.ts` calls them in
this order. `tools/load-order.js` proves no shared value is read before something sets it.

| Order | Boot | Lines |
|---|---|---|
| 1 | `bootDom` | `js/dom.ts:135`–144 |
| 2 | `bootDone` | `js/live.ts:198`–200 |
| 3 | `bootLive` | `js/live.ts:201`–206 |
| 4 | `bootRefreshSeason` | `js/refresh-season.ts:29`–37 |
| 5 | `bootData` | `js/data.ts:503`–554 |
| 6 | `bootModel` | `js/model.ts:298`–344 |
| 7 | `bootHistory` | `js/history.ts:446`–469 |
| 8 | `bootReadings` | `js/readings.ts:632`–700 |
| 9 | `bootReadingRegistry` | `js/readings.ts:743`–808 |
| 10 | `bootRoster` | `js/roster.ts:135`–147 |
| 11 | `bootRenderCore` | `js/render-core.ts:552`–562 |
| 12 | `bootRenderPages` | `js/render-pages.ts:432`–449 |
| 13 | `bootDiagnosis` | `js/diagnosis.ts:76`–79 |
| 14 | `bootDialCycle` | `js/dial-cycle.ts:379`–402 |
| 15 | `bootAnalysis` | `js/analysis.ts:249`–253 |
| 16 | `bootPortfolio` | `js/portfolio.ts:253`–? |
| 17 | `bootPagesNav` | `js/pages-nav.ts:333`–340 |
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
| 72 | `moreRow` · export | `function moreRow(` |
| 78 | `appendSvgMarkup` · export | `function appendSvgMarkup(` |
| 100 | `addSources` · export | `function addSources(` |
| 111 | `SVG_NS` | `var SVG_NS =` |
| 112 | `svgEl` · export | `function svgEl(` |
| 118 | `detailSlot` · export | `function detailSlot(` |
| 128 | `expandBtn` · export | `function expandBtn(` |

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
| 280 | `TEMP_BAND_LO` · export | `var TEMP_BAND_LO =` |
| 281 | `GDP_NORM` · export | `var GDP_NORM =` |
| 282 | `checkMoneyStock` | `function checkMoneyStock(` |
| 345 | `DSR_FROM_YEAR` · export | `var DSR_FROM_YEAR =` |
| 346 | `dsrHistory` · export | `var dsrHistory =` |
| 347 | `SAV_FROM_YEAR` · export | `var SAV_FROM_YEAR =` |
| 348 | `savHistory` · export | `var savHistory =` |
| 349 | `SAV_THIN` · export | `var SAV_THIN =` |
| 350 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 358 | `SAV_OFFSET` · export | `var SAV_OFFSET =` |
| 359 | `dsrNow` · export | `var dsrNow =` |
| 360 | `savNow` · export | `var savNow =` |
| 361 | `DSR_MEAN` · export | `var DSR_MEAN =` |
| 362 | `curveNoteFull` · export | `var curveNoteFull =` |
| 373 | `VOL_JOIN` · export | `var VOL_JOIN =` |
| 495 | `typicalCycleYears` · export | `var typicalCycleYears =` |

### `js/model.ts`

#### The season, computed

| Line | Name | Anchor |
|---|---|---|
| 14 | `slopeOf` | `function slopeOf(` |
| 19 | `monthIndex` | `function monthIndex(` |
| 20 | `cpiTrend` | `function cpiTrend(` |
| 27 | `cpiYear` | `function cpiYear(` |
| 31 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 32 | `growthWindowYears` · export | `function growthWindowYears(` |
| 33 | `growthWindowWord` · export | `function growthWindowWord(` |
| 34 | `readSeason` | `function readSeason(` |
| 54 | `SEASON_YEARS` | `var SEASON_YEARS =` |
| 55 | `closingReading` | `function closingReading(` |
| 59 | `quarterRegime` · export | `function quarterRegime(` |
| 60 | `seasonTitle` · export | `function seasonTitle(` |
| 61 | `cycleReturns` · export | `function cycleReturns(` |
| 71 | `cycleModel` · export | `function cycleModel(` |
| 110 | `seasonWhyFor` | `function seasonWhyFor(` |
| 116 | `growthWord` · export | `function growthWord(` |
| 119 | `cycleNowNote` · export | `function cycleNowNote(` |
| 127 | `seasonGroup` · export | `function seasonGroup(` |

#### The diagnosis: how she feels, and what has followed

| Line | Name | Anchor |
|---|---|---|
| 129 | `rankToDate` · export | `function rankToDate(` |
| 134 | `marketMonths` · export | `function marketMonths(` |
| 141 | `yearAfter` · export | `function yearAfter(` |
| 145 | `diagnoseToday` · export | `function diagnoseToday(` |

#### Her mood: one range from Depression to Mania

| Line | Name | Anchor |
|---|---|---|
| 150 | `rankIn` | `function rankIn(` |
| 156 | `moodSeries` | `function moodSeries(` |
| 164 | `moodAt` | `function moodAt(` |
| 170 | `MOOD_TURN` · export | `var MOOD_TURN =` |
| 173 | `moodWord` | `function moodWord(` |
| 177 | `moodRead` | `function moodRead(` |
| 185 | `moodTrack` · export | `function moodTrack(` |
| 191 | `moodToday` · export | `function moodToday(` |
| 195 | `moodSince` | `function moodSince(` |
| 196 | `cycleStory` · export | `function cycleStory(` |

#### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

| Line | Name | Anchor |
|---|---|---|
| 207 | `cycleSpanYears` · export | `function cycleSpanYears(` |
| 210 | `cycleByName` · export | `function cycleByName(` |
| 214 | `openCycle` · export | `function openCycle(` |
| 218 | `cycleSlice` · export | `function cycleSlice(` |
| 226 | `totalGrowthYears` · export | `function totalGrowthYears(` |
| 234 | `cycleMonths` · export | `function cycleMonths(` |
| 242 | `cycLabel` · export | `function cycLabel(` |
| 246 | `cycleQtrIdx` · export | `function cycleQtrIdx(` |
| 251 | `totalRiseIn` · export | `function totalRiseIn(` |
| 261 | `eraInflation` · export | `function eraInflation(` |
| 271 | `eraGrowth` · export | `function eraGrowth(` |
| 287 | `eraMarketTotal` · export | `function eraMarketTotal(` |
| 292 | `forgetMood` · export | `function forgetMood(` |

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
| 377 | `modeBar` | `function modeBar(` |
| 382 | `controlKeys` · export | `function controlKeys(` |
| 386 | `controlKeysIn` | `function controlKeysIn(` |
| 392 | `histControls` · export | `function histControls(` |
| 402 | `pageCycle` · export | `function pageCycle(` |
| 407 | `cyclePicker` | `function cyclePicker(` |
| 426 | `rangeBar` · export | `function rangeBar(` |
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
| 20 | `metricSheet` · export | `function metricSheet(` |
| 26 | `drawsPage` · export | `function drawsPage(` |
| 27 | `needInd` · export | `function needInd(` |
| 28 | `openOf` · export | `function openOf(` |
| 29 | `levelHeadings` | `function levelHeadings(` |
| 37 | `wireDetailModal` | `function wireDetailModal(` |

#### THE SUBJECT ROW

| Line | Name | Anchor |
|---|---|---|
| 77 | `subjectRow` · export | `function subjectRow(` |
| 87 | `subjectIcon` · export | `function subjectIcon(` |
| 88 | `timingMark` | `function timingMark(` |
| 96 | `timingPill` · export | `function timingPill(` |
| 104 | `collapseEmptyBlocks` · export | `function collapseEmptyBlocks(` |
| 112 | `seatPageFoot` · export | `function seatPageFoot(` |
| 124 | `registerTiming` · export | `function registerTiming(` |
| 125 | `headHtml` | `function headHtml(` |
| 130 | `cardDetailHtml` · export | `function cardDetailHtml(` |

#### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

| Line | Name | Anchor |
|---|---|---|
| 156 | `latestYieldPoint` | `function latestYieldPoint(` |
| 163 | `withLatestPoint` | `function withLatestPoint(` |
| 168 | `pressureMaturities` | `function pressureMaturities(` |
| 192 | `registerFlowPages` | `function registerFlowPages(` |
| 231 | `renderPressureRow` | `function renderPressureRow(` |
| 239 | `ylmYearMarks` | `function ylmYearMarks(` |
| 258 | `ylmColumns` | `function ylmColumns(` |
| 278 | `ylmFitLine` | `function ylmFitLine(` |
| 290 | `pressureHead` | `function pressureHead(` |
| 308 | `showPressureView` | `function showPressureView(` |
| 313 | `renderPressurePage` | `function renderPressurePage(` |

#### Pressure's Insights

| Line | Name | Anchor |
|---|---|---|
| 442 | `renderPressureInsights` | `function renderPressureInsights(` |
| 477 | `catList` · export | `function catList(` |
| 478 | `marketPeek` · export | `function marketPeek(` |
| 483 | `spreadPick` · export | `var spreadPick =` |
| 484 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 485 | `spreadLabel` | `function spreadLabel(` |
| 489 | `peekArt` | `function peekArt(` |
| 490 | `catItem` · export | `function catItem(` |
| 498 | `catCard` · export | `function catCard(` |
| 540 | `tempPeek` · export | `function tempPeek(` |
| 546 | `gdpPeek` · export | `function gdpPeek(` |

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
| 19 | `pct` | `function pct(` |
| 20 | `diagnosisHtml` | `function diagnosisHtml(` |
| 26 | `yearByYear` | `function yearByYear(` |
| 36 | `yearRow` | `function yearRow(` |
| 42 | `seasonsIn` | `function seasonsIn(` |
| 47 | `moodIn` | `function moodIn(` |
| 53 | `marketIn` | `function marketIn(` |
| 57 | `moodDoor` | `function moodDoor(` |
| 62 | `trendText` | `function trendText(` |
| 63 | `renderDiagnosis` · export | `function renderDiagnosis(` |
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
| 283 | `showCycle` · export | `function showCycle(` |

#### A cycle's season strip (carried by the one cycle row)

| Line | Name | Anchor |
|---|---|---|
| 285 | `stripGroupName` | `var stripGroupName =` |
| 286 | `aheadWord` | `function aheadWord(` |
| 287 | `stripDots` | `function stripDots(` |
| 290 | `seasonStripHtml` · export | `function seasonStripHtml(` |
| 318 | `marketStripHtml` · export | `function marketStripHtml(` |
| 350 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 351 | `settleStrips` · export | `function settleStrips(` |

### `js/analysis.ts`

#### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

| Line | Name | Anchor |
|---|---|---|
| 26 | `CYCLE_DATA_KEY` | `var CYCLE_DATA_KEY =` |
| 27 | `cycleDataOn` | `function cycleDataOn(` |
| 28 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 48 | `wireCycleData` | `function wireCycleData(` |
| 63 | `renderCycleList` | `function renderCycleList(` |

#### A closed cycle, shown on the Cycle tab's own page

| Line | Name | Anchor |
|---|---|---|
| 108 | `eraReading` | `function eraReading(` |
| 118 | `eraValue` | `function eraValue(` |
| 124 | `eraRange` | `function eraRange(` |
| 129 | `eraMini` | `function eraMini(` |
| 134 | `lead` | `function lead(` |
| 135 | `figOf` | `function figOf(` |
| 136 | `part` | `function part(` |
| 137 | `parentOf` | `function parentOf(` |
| 138 | `eraCard` | `function eraCard(` |
| 156 | `eraCards` | `function eraCards(` |
| 162 | `eraShow` | `function eraShow(` |
| 169 | `enterEra` | `function enterEra(` |
| 176 | `leaveEra` | `function leaveEra(` |

#### RENDER: the symptoms — the years of a cycle a reading sat where it sits today

| Line | Name | Anchor |
|---|---|---|
| 184 | `cycleSymptoms` | `function cycleSymptoms(` |
| 208 | `placeWords` | `function placeWords(` |
| 212 | `symptomNote` | `function symptomNote(` |
| 219 | `symptomRow` | `function symptomRow(` |
| 226 | `cycleTrack` | `function cycleTrack(` |
| 241 | `symptomLegend` | `function symptomLegend(` |

### `js/portfolio.ts`

#### PORTFOLIO: the Season Clock and the All Seasons portfolio

| Line | Name | Anchor |
|---|---|---|
| 19 | `MIX_FROM` | `var MIX_FROM =` |
| 30 | `ALL_SEASONS` | `var ALL_SEASONS =` |
| 37 | `WEATHER` | `var WEATHER =` |
| 44 | `mid` | `function mid(` |
| 49 | `seasonOfYears` | `function seasonOfYears(` |
| 66 | `realOf` | `function realOf(` |
| 77 | `grid` | `function grid(` |
| 93 | `seasonRecord` | `function seasonRecord(` |
| 94 | `mixFor` | `function mixFor(` |
| 106 | `planStep` | `function planStep(` |
| 111 | `mixPlan` | `function mixPlan(` |
| 117 | `planNow` | `function planNow(` |
| 119 | `walk` | `function walk(` |
| 131 | `tracks` | `function tracks(` |
| 140 | `yieldFact` | `function yieldFact(` |
| 146 | `mixDetail` | `function mixDetail(` |
| 154 | `holdWord` | `function holdWord(` |
| 155 | `nextTurn` | `function nextTurn(` |
| 159 | `mixHtml` | `function mixHtml(` |
| 174 | `counts` | `function counts(` |
| 175 | `leader` | `function leader(` |
| 179 | `wedge` | `function wedge(` |
| 183 | `seasonClock` | `function seasonClock(` |
| 202 | `heat` | `function heat(` |
| 207 | `gridHtml` | `function gridHtml(` |
| 215 | `clockDetail` | `function clockDetail(` |
| 225 | `clockHtml` | `function clockHtml(` |
| 232 | `seasonsDetail` | `function seasonsDetail(` |
| 240 | `seasonsHtml` | `function seasonsHtml(` |
| 249 | `buildPortfolio` | `function buildPortfolio(` |

### `js/pages-nav.ts`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 22 | `convertLeadingSigns` | `function convertLeadingSigns(` |
| 44 | `sheetRank` | `function sheetRank(` |
| 52 | `orderSheet` | `function orderSheet(` |
| 58 | `rowFrom` | `function rowFrom(` |
| 59 | `tagOf` | `function tagOf(` |
| 62 | `openTarget` | `function openTarget(` |
| 63 | `tabPanel` | `function tabPanel(` |
| 64 | `scrollSoon` | `function scrollSoon(` |
| 65 | `viewTab` | `function viewTab(` |
| 66 | `orderMetricSheets` | `function orderMetricSheets(` |
| 74 | `renderSignsList` | `function renderSignsList(` |

#### THE ROSTER'S OWN PIECES

| Line | Name | Anchor |
|---|---|---|
| 106 | `partsOf` | `function partsOf(` |
| 115 | `authored` | `function authored(` |
| 116 | `registerRoster` | `function registerRoster(` |
| 137 | `indRow` | `function indRow(` |
| 141 | `indGroupRow` | `function indGroupRow(` |
| 146 | `catMembers` | `function catMembers(` |
| 154 | `indRows` | `function indRows(` |
| 168 | `indCategoryHtml` | `function indCategoryHtml(` |

#### THE NAVIGATION CONTROLLER

| Line | Name | Anchor |
|---|---|---|
| 177 | `BACK` | `var BACK =` |
| 178 | `backPush` | `function backPush(` |
| 179 | `backClear` | `function backClear(` |
| 180 | `backPopped` | `function backPopped(` |
| 181 | `buildNav` | `function buildNav(` |

#### ALL INDICATORS

| Line | Name | Anchor |
|---|---|---|
| 277 | `buildSearch` | `function buildSearch(` |
| 321 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### `js/tabs-menu.ts`

#### RENDER: About Gyneconomy — the season model and the framework

| Line | Name | Anchor |
|---|---|---|
| 13 | `seasonModelNote` | `function seasonModelNote(` |
| 25 | `renderSeasonRows` | `function renderSeasonRows(` |

#### TAB NAVIGATION (Cycle / Analysis / Search / Portfolio)

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

### `js/category-analysis.ts`

#### Category analysis: one composite per category, against past cycles

| Line | Name | Anchor |
|---|---|---|
| 18 | `QM` | `var QM =` |
| 19 | `months` | `function months(` |
| 20 | `quarters` | `function quarters(` |
| 23 | `byQuarter` | `function byQuarter(` |
| 26 | `spYear` | `function spYear(` |
| 45 | `qIndex` | `function qIndex(` |
| 46 | `rankTrack` | `function rankTrack(` |
| 56 | `plainTrack` | `function plainTrack(` |
| 61 | `membersOf` | `function membersOf(` |
| 63 | `composite` | `function composite(` |
| 74 | `path` | `function path(` |
| 79 | `corrOfMoves` | `function corrOfMoves(` |
| 86 | `T05` | `var T05 =` |
| 88 | `criticalR` · export | `function criticalR(` |
| 94 | `analyse` | `function analyse(` |
| 107 | `sayMove` | `function sayMove(` |
| 113 | `sayMatch` | `function sayMatch(` |
| 121 | `chartHtml` | `function chartHtml(` |
| 141 | `rowsHtml` | `function rowsHtml(` |
| 146 | `detail` | `function detail(` |
| 155 | `analysisHtml` · export | `function analysisHtml(` |
| 161 | `replaceCategory` · export | `function replaceCategory(` |

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
| 13 | `NUM` | `var NUM =` |
| 16 | `quartile` | `function quartile(` |
| 20 | `normOf` | `function normOf(` |
| 25 | `closedCount` | `function closedCount(` |
| 26 | `visitOf` | `function visitOf(` |
| 33 | `visits` | `function visits(` |
| 34 | `cycleLab` | `function cycleLab(` |
| 38 | `readingLab` | `function readingLab(` |
| 49 | `labs` | `function labs(` |
| 56 | `state` | `function state(` |
| 61 | `yearsWord` | `function yearsWord(` |
| 62 | `fmt` | `function fmt(` |
| 66 | `TIERS` | `var TIERS =` |
| 67 | `tier` | `function tier(` |
| 71 | `catTitle` | `function catTitle(` |
| 72 | `labItem` | `function labItem(` |
| 78 | `ring` | `function ring(` |
| 82 | `report` | `function report(` |
| 96 | `judged` | `function judged(` |
| 97 | `score` | `function score(` |
| 98 | `outside` | `function outside(` |
| 99 | `listWords` | `function listWords(` |
| 100 | `word` | `function word(` |
| 101 | `cap` | `function cap(` |
| 103 | `visitNote` | `function visitNote(` |
| 112 | `cycleMatrixHtml` · export | `function cycleMatrixHtml(` |
| 126 | `chartDetail` | `function chartDetail(` |
| 135 | `cycleAnalysisHtml` · export | `function cycleAnalysisHtml(` |

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
| 9 | `todayFace` | `function todayFace(` |
| 15 | `readDoor` · export | `function readDoor(` |
| 23 | `rosterRows` · export | `function rosterRows(` |
| 24 | `kT` · export | `function kT(` |
| 29 | `pairAt` · export | `function pairAt(` |
| 30 | `eraFig` · export | `function eraFig(` |
| 37 | `rosterRow` | `function rosterRow(` |
| 51 | `readingRoster` · export | `function readingRoster(` |
| 58 | `pastFigure` · export | `function pastFigure(` |
| 62 | `prettyK` · export | `function prettyK(` |

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
| 33 | `hiCard` · export | `function hiCard(` |
| 36 | `dropWhatIsShown` · export | `function dropWhatIsShown(` |
| 43 | `highlightsHtml` · export | `function highlightsHtml(` |
| 52 | `CHEV` · export | `var CHEV =` |
| 53 | `prettyKey` · export | `function prettyKey(` |
| 58 | `qLabel` · export | `function qLabel(` |
| 59 | `monthLabel` · export | `function monthLabel(` |
| 60 | `clampPct` · export | `function clampPct(` |
| 61 | `ledeHtml` · export | `function ledeHtml(` |
| 62 | `auxStat` · export | `function auxStat(` |
| 65 | `facts` · export | `function facts(` |
| 66 | `factsFrom` · export | `function factsFrom(` |
| 70 | `srcBlock` · export | `function srcBlock(` |
| 71 | `srcHtml` | `function srcHtml(` |
| 72 | `fmtSigned` · export | `function fmtSigned(` |
| 73 | `popHead` · export | `function popHead(` |
| 74 | `hubLine` · export | `function hubLine(` |
| 75 | `qPretty` · export | `function qPretty(` |
| 76 | `seasonName` · export | `function seasonName(` |
| 77 | `capeFmt1` · export | `function capeFmt1(` |
| 78 | `withUnit` · export | `function withUnit(` |

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
| 15 | `gdpYoYBefore` · export | `var gdpYoYBefore =` |
| 16 | `cpiYoYBefore` · export | `var cpiYoYBefore =` |
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
| 65 | `marketPage` | `function marketPage(` |
| 71 | `productivityPage` | `function productivityPage(` |
| 76 | `splitSpec` | `function splitSpec(` |
| 82 | `splitInfo` | `function splitInfo(` |
| 86 | `periodTicks` | `function periodTicks(` |
| 91 | `periodOfSeries` | `function periodOfSeries(` |
| 92 | `drawSplit` | `function drawSplit(` |
| 109 | `mountSplit` | `function mountSplit(` |
| 122 | `splitPeek` | `function splitPeek(` |
| 129 | `indicatorPeeks` · export | `function indicatorPeeks(` |
| 137 | `deficitPeek` | `function deficitPeek(` |
| 141 | `catSheet` · export | `function catSheet(` |
| 146 | `groupId` · export | `function groupId(` |
| 147 | `groupCard` | `function groupCard(` |
| 155 | `groupSheet` | `function groupSheet(` |
| 162 | `appendPicks` · export | `function appendPicks(` |
| 170 | `doorSel` | `function doorSel(` |
| 171 | `catPicks` · export | `function catPicks(` |

#### The split indicators' insights

| Line | Name | Anchor |
|---|---|---|
| 183 | `buffettInsight` | `function buffettInsight(` |
| 198 | `debtInsight` | `function debtInsight(` |
| 213 | `productivityInsight` | `function productivityInsight(` |
| 223 | `confidenceInsight` | `function confidenceInsight(` |
| 234 | `desireInsight` | `function desireInsight(` |
| 245 | `premiumInsight` | `function premiumInsight(` |
| 258 | `ORDINAL` | `var ORDINAL =` |
| 259 | `marketInsight` | `function marketInsight(` |
| 271 | `interestInsight` | `function interestInsight(` |

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
| 27 | `heartSvg` · export | `function heartSvg(` |
| 29 | `flameSvg` · export | `function flameSvg(` |
| 32 | `clockSvg` · export | `function clockSvg(` |
| 33 | `thermoSvg` · export | `function thermoSvg(` |
| 36 | `personSvg` · export | `function personSvg(` |
| 38 | `calendarSvg` · export | `function calendarSvg(` |
| 39 | `bookSvg` · export | `function bookSvg(` |
| 42 | `ecgSvg` · export | `function ecgSvg(` |
| 44 | `circulationSvg` · export | `function circulationSvg(` |
| 45 | `boltSvg` · export | `function boltSvg(` |
| 46 | `houseSvg` · export | `function houseSvg(` |
| 49 | `marketSvg` · export | `function marketSvg(` |
| 52 | `bagSvg` · export | `function bagSvg(` |
| 55 | `volatilitySvg` · export | `function volatilitySvg(` |

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
| 140 | top bar (Keren, Sep 19, 2026, with Clue's screens): the open tab's title in the middle, a round menu |
| 235 | calendar tab (yearly view, one card per year grouped into five eras — see marketCycles below) |
| 271 | season strip |
| 297 | THE GAP (Keren, V385: "…so if one day I'll tell you I want the spacing to be 30, you would just change |
| 361 | tab bar (app-style segmented navigation) |
| 396 | vitals strip (health-app framing: two at-a-glance rings, Growth and Rates, built from data used |
| 411 | temperature chart (Cycle tab), after Natural Cycles' temperature view: a column per month of the |
| 484 | journal (editorial content tab) |
| 490 | content tab: reading companion |
| 539 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
| 734 | Volume's red ramp (Keren, V389: "volume is, in gynaecology, blood — so it should be different shades of |
| 778 | the maturity chart's columns wear the curve's three zones (Keren, V394: "a colour that represents the |
| 850 | One gap between an inner page's containers (Keren, V381: "the spacing between containers in each inner |
| 1,019 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 1,034 | The symptoms: a cycle's years against today |
| 1,182 | hero: yield curve |
| 1,212 | the readout (Keren, from Apple Health): it never changes the page's height, which is why it beats a |
| 1,231 | 10Y-3M spread history (quarterly, with recession bands) |
| 1,258 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 1,266 | long cycle (structural layer) |
| 1,273 | indicator grid |
| 1,299 | info icon + popover (progressive disclosure for longer notes) |
| 1,313 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 1,398 | footer |

## Markup landmarks

Banner comments in `page-body.html`:

| Line | Section |
|---|---|

Every `id` in the static DOM (110), which is what the renderers fill:

| Line | id |
|---|---|
| 6 | `topbar-back` |
| 9 | `topbar-title` |
| 10 | `menu-btn` |
| 17 | `tab-cycle` |
| 18 | `tab-search` |
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
| 170 | `cycle-data` |
| 172 | `cycle-legend` |
| 173 | `cycle-list` |
| 174 | `cycle-more` |
| 175 | `cycle-more-label` |
| 180 | `calendar-cycle` |
| 183 | `panel-portfolio` |
| 199 | `panel-search` |
| 200 | `search-home` |
| 202 | `search-input` |
| 204 | `search-list` |
| 208 | `more-menu` |
| 211 | `menu-back` |
| 225 | `sources-open` |
| 233 | `appearance-current` |
| 236 | `app-version` |
| 240 | `sheet-howto` |
| 283 | `sheet-book` |
| 314 | `seasons-kicker` |
| 316 | `seasons-rows` |
| 319 | `framework-kicker` |
| 322 | `framework-rows` |
| 332 | `sheet-appearance` |
| 340 | `theme-toggle` |
| 347 | `sheet-contact` |
| 356 | `contact-form` |
| 357 | `contact-title` |
| 358 | `contact-message` |
| 360 | `contact-hint` |
| 361 | `contact-send` |
| 367 | `sheet-sources` |
| 370 | `sources-back` |
| 375 | `asof-text` |
| 376 | `sources-groups` |
| 382 | `detail-backdrop` |
| 384 | `detail-modal-close` |
| 385 | `detail-modal-body` |

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

