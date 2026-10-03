# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,745 lines** in 31 files, about 568 KB, roughly **161 thousand tokens**. No session can
read it whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Use the **anchor** column with grep —
> `grep -rn 'function curveVerdict(' src/` — and treat `file:line` as rough orientation only.

Generated from commit `9e9cd4c` on 2026-10-03.

## The page

`src/manifest.json` joins these parts into `index.html`. The `.js` entry is bundled by esbuild
(`tools/bundle.js`) into one script in its place.

| Part | Lines | What |
|---|---|---|
| `page-head.html` | 5 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist |
| `styles.css` | 1,367 | the whole stylesheet, every token and rule |
| `page-body.html` | 390 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| `js/main.ts` | 27 modules | the entry: imports every module and calls their boots in order |
| `page-tail.html` | 45 | the bundle's closing tag, the service-worker registration, </body></html> |

Counts: **27** modules, **488** top-level functions, **89** top-level vars, **318** exported names, **17** boots.

## Modules, in boot order

| Module | Lines | Declarations | Imports from |
|---|---|---|---|
| `js/dom.ts` | 150 | 17 | `format` |
| `js/live.ts` | 188 | 18 | `format` |
| `js/refresh-season.ts` | 39 | 4 | `format`, `history-fred` |
| `js/data.ts` | 539 | 64 | `format`, `history-fred`, `live`, `refresh-season` |
| `js/model.ts` | 343 | 43 | `data`, `dom`, `format`, `history-fred`, `refresh-season` |
| `js/history.ts` | 478 | 36 | `charts`, `data`, `dom`, `format`, `live`, `model` |
| `js/readings.ts` | 821 | 60 | `charts`, `data`, `dom`, `format`, `history`, `history-fred`, `live`, `model`, `refresh-season` |
| `js/roster.ts` | 150 | 14 | `charts`, `data`, `format`, `history`, `history-fred`, `live`, `marks`, `readings`, `refresh-season` |
| `js/render-core.ts` | 579 | 35 | `charts`, `data`, `dom`, `format`, `history`, `history-charts`, `live`, `model`, `readings`, `refresh-season`, `roster` |
| `js/render-pages.ts` | 454 | 11 | `charts`, `data`, `dom`, `format`, `history`, `history-charts`, `history-fred`, `live`, `model`, `readings`, `refresh-season`, `render-core` |
| `js/diagnosis.ts` | 88 | 17 | `dom`, `era`, `format`, `live`, `marks`, `model`, `refresh-season`, `roster` |
| `js/dial-cycle.ts` | 438 | 21 | `data`, `diagnosis`, `dom`, `format`, `live`, `model`, `refresh-season`, `render-core`, `roster` |
| `js/analysis.ts` | 247 | 20 | `charts`, `data`, `dial-cycle`, `dom`, `era`, `format`, `history`, `insights`, `live`, `model`, `refresh-season`, `render-pages`, `roster` |
| `js/pages-nav.ts` | 330 | 18 | `cycle-tab`, `data`, `dom`, `format`, `history`, `indicators`, `inner-pages`, `live`, `readings`, `render-core`, `render-pages`, `roster` |
| `js/tabs-menu.ts` | 191 | 4 | `data`, `dial-cycle`, `dom`, `format`, `live`, `model`, `refresh-season`, `render-pages` |
| `js/repaint.ts` | 92 | 11 | `data`, `diagnosis`, `dom`, `insights`, `live`, `model`, `readings`, `render-core`, `roster` |
| `js/charts.ts` | 299 | 37 | `format` |
| `js/cycle-tab.ts` | 98 | 4 | `data`, `dom`, `history-charts`, `indicators`, `insights`, `model`, `readings`, `refresh-season`, `render-core`, `roster` |
| `js/era.ts` | 63 | 10 | `format`, `roster` |
| `js/format.ts` | 57 | 29 | — |
| `js/history-charts.ts` | 458 | 12 | `charts`, `data`, `format`, `history`, `history-fred`, `model`, `readings`, `refresh-season` |
| `js/history-fred.ts` | 15 | 12 | — |
| `js/indicators.ts` | 246 | 29 | `charts`, `data`, `dom`, `format`, `history`, `history-fred`, `model`, `readings`, `refresh-season`, `render-core`, `roster` |
| `js/inner-pages.ts` | 287 | 13 | `charts`, `data`, `dial-cycle`, `dom`, `format`, `history`, `history-charts`, `model`, `readings`, `refresh-season`, `render-core` |
| `js/insights.ts` | 188 | 16 | `data`, `dom`, `format`, `model`, `readings`, `refresh-season`, `roster` |
| `js/marks.ts` | 61 | 22 | — |
| `js/main.ts` | 39 | 0 | `analysis`, `data`, `diagnosis`, `dial-cycle`, `dom`, `history`, `live`, `model`, `pages-nav`, `readings`, `refresh-season`, `render-core`, `render-pages`, `repaint`, `roster`, `tabs-menu` |

## The boots

A module's top level holds only declarations and values that need nothing else. Whatever runs
at load and reads another module sits in its `boot…()` function, and `js/main.ts` calls them in
this order. `tools/load-order.js` proves no shared value is read before something sets it.

| Order | Boot | Lines |
|---|---|---|
| 1 | `bootDom` | `js/dom.ts:140`–149 |
| 2 | `bootLive` | `js/live.ts:182`–187 |
| 3 | `bootRefreshSeason` | `js/refresh-season.ts:29`–38 |
| 4 | `bootData` | `js/data.ts:487`–538 |
| 5 | `bootModel` | `js/model.ts:296`–342 |
| 6 | `bootHistory` | `js/history.ts:453`–477 |
| 7 | `bootReadings` | `js/readings.ts:633`–727 |
| 8 | `bootReadingRegistry` | `js/readings.ts:749`–820 |
| 9 | `bootRoster` | `js/roster.ts:88`–149 |
| 10 | `bootRenderCore` | `js/render-core.ts:568`–578 |
| 11 | `bootRenderPages` | `js/render-pages.ts:436`–453 |
| 12 | `bootDiagnosis` | `js/diagnosis.ts:84`–87 |
| 13 | `bootDialCycle` | `js/dial-cycle.ts:414`–437 |
| 14 | `bootAnalysis` | `js/analysis.ts:242`–246 |
| 15 | `bootPagesNav` | `js/pages-nav.ts:322`–329 |
| 16 | `bootTabsMenu` | `js/tabs-menu.ts:181`–190 |
| 17 | `bootRepaint` | `js/repaint.ts:73`–91 |

## Script, module by module

Each module's banner comments are its spine. Each declaration is listed under the section it
falls in. **export** marks a name other modules import.

### `js/dom.ts`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 33 | `byId` · export | `function byId(` |
| 41 | `byIdMaybe` · export | `function byIdMaybe(` |
| 42 | `put` · export | `function put(` |
| 47 | `elFrom` · export | `function elFrom(` |
| 49 | `layer` · export | `function layer(` |
| 50 | `onScreen` · export | `function onScreen(` |
| 51 | `focusQuiet` · export | `function focusQuiet(` |
| 52 | `tabStops` | `function tabStops(` |
| 56 | `keepTab` | `function keepTab(` |
| 62 | `rovingKeys` · export | `function rovingKeys(` |
| 77 | `moreRow` · export | `function moreRow(` |
| 83 | `appendSvgMarkup` · export | `function appendSvgMarkup(` |
| 105 | `addSources` · export | `function addSources(` |
| 116 | `SVG_NS` | `var SVG_NS =` |
| 117 | `svgEl` · export | `function svgEl(` |
| 123 | `detailSlot` · export | `function detailSlot(` |
| 133 | `expandBtn` · export | `function expandBtn(` |

### `js/live.ts`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 25 | `docValue` | `function docValue(` |
| 34 | `docOk` | `function docOk(` |
| 38 | `plainText` · export | `function plainText(` |
| 43 | `liveIsoOf` · export | `function liveIsoOf(` |
| 46 | `liveInto` · export | `function liveInto(` |
| 52 | `landLive` | `function landLive(` |

#### The first series to come from outside the file

| Line | Name | Anchor |
|---|---|---|
| 62 | `repaintLive` · export | `function repaintLive(` |
| 67 | `shapeOk` | `function shapeOk(` |
| 99 | `defineReadings` · export | `function defineReadings(` |
| 103 | `onLive` · export | `function onLive(` |
| 104 | `exposeLive` · export | `function exposeLive(` |
| 107 | `KINDS` | `var KINDS =` |
| 108 | `checkLiveCoverage` · export | `function checkLiveCoverage(` |
| 122 | `receive` | `function receive(` |
| 135 | `applyLive` | `function applyLive(` |
| 142 | `refreshLiveData` · export | `function refreshLiveData(` |
| 159 | `fetchSiteData` · export | `function fetchSiteData(` |
| 175 | `forgetLive` · export | `function forgetLive(` |

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
| 124 | `labRow` · export | `function labRow(` |
| 125 | `PRODUCTIVITY_TREND` · export | `var PRODUCTIVITY_TREND =` |

#### Consumer confidence

| Line | Name | Anchor |
|---|---|---|
| 127 | `CONFIDENCE_LINE` · export | `var CONFIDENCE_LINE =` |

#### The deficit, year by year

| Line | Name | Anchor |
|---|---|---|
| 130 | `DEF_FROM_YEAR` · export | `var DEF_FROM_YEAR =` |
| 131 | `deficitHistory` · export | `var deficitHistory =` |
| 132 | `DEF_MEAN` · export | `var DEF_MEAN =` |
| 135 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 140 | `fedFundsRange` · export | `function fedFundsRange(` |
| 144 | `buffettHistory` · export | `var buffettHistory =` |
| 145 | `HY_NORM_LO` · export | `var HY_NORM_LO =` |
| 146 | `M2_PACE_LO` · export | `var M2_PACE_LO =` |
| 147 | `hyDates` · export | `var hyDates =` |
| 148 | `hyOas` · export | `var hyOas =` |
| 149 | `checkDesireWindow` | `function checkDesireWindow(` |
| 155 | `hyAt` · export | `function hyAt(` |
| 159 | `hyLabel` · export | `function hyLabel(` |
| 160 | `hyNum` · export | `function hyNum(` |
| 161 | `hyQuarters` · export | `function hyQuarters(` |
| 169 | `hyQuarterEnds` · export | `function hyQuarterEnds(` |
| 186 | `syncGrossDebt` | `function syncGrossDebt(` |
| 196 | `checkGrossDebt` | `function checkGrossDebt(` |
| 206 | `curveAt` · export | `function curveAt(` |
| 210 | `curveSpread` · export | `function curveSpread(` |
| 211 | `policyDirection` · export | `function policyDirection(` |
| 214 | `syncCapeHistory` · export | `function syncCapeHistory(` |
| 218 | `valRow` · export | `function valRow(` |
| 222 | `PULSE_PRE2008` · export | `var PULSE_PRE2008 =` |
| 223 | `M2V_FROM_YEAR` · export | `var M2V_FROM_YEAR =` |
| 224 | `m2vHistory` · export | `var m2vHistory =` |
| 234 | `checkVelocityHistory` | `function checkVelocityHistory(` |
| 239 | `M2_FROM_YEAR` · export | `var M2_FROM_YEAR =` |
| 240 | `m2Level` | `var m2Level =` |
| 241 | `m2Yoy` · export | `var m2Yoy =` |
| 242 | `M2_NORM` · export | `var M2_NORM =` |
| 243 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 244 | `unempHistory` · export | `var unempHistory =` |
| 248 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 256 | `NROU_NOW` · export | `var NROU_NOW =` |
| 257 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 264 | `ACT_BAND_LO` · export | `var ACT_BAND_LO =` |
| 265 | `CPI_TARGET` · export | `var CPI_TARGET =` |
| 266 | `GDP_NORM` · export | `var GDP_NORM =` |
| 267 | `checkMoneyStock` | `function checkMoneyStock(` |
| 330 | `DSR_FROM_YEAR` · export | `var DSR_FROM_YEAR =` |
| 331 | `dsrHistory` · export | `var dsrHistory =` |
| 332 | `SAV_FROM_YEAR` · export | `var SAV_FROM_YEAR =` |
| 333 | `savHistory` · export | `var savHistory =` |
| 334 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 342 | `SAV_OFFSET` · export | `var SAV_OFFSET =` |
| 343 | `dsrNow` · export | `var dsrNow =` |
| 344 | `savNow` · export | `var savNow =` |
| 345 | `DSR_MEAN` · export | `var DSR_MEAN =` |
| 346 | `curveNoteFull` · export | `var curveNoteFull =` |
| 357 | `VOL_JOIN` · export | `var VOL_JOIN =` |
| 479 | `typicalCycleYears` · export | `var typicalCycleYears =` |

### `js/model.ts`

#### The season, computed

| Line | Name | Anchor |
|---|---|---|
| 14 | `slopeOf` | `function slopeOf(` |
| 19 | `monthIndex` | `function monthIndex(` |
| 20 | `cpiTrend` | `function cpiTrend(` |
| 27 | `cpiYear` | `function cpiYear(` |
| 31 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 32 | `growthWindowWord` · export | `function growthWindowWord(` |
| 33 | `readSeason` | `function readSeason(` |
| 53 | `SEASON_YEARS` | `var SEASON_YEARS =` |
| 54 | `closingReading` | `function closingReading(` |
| 58 | `quarterRegime` · export | `function quarterRegime(` |
| 59 | `seasonTitle` · export | `function seasonTitle(` |
| 60 | `cycleReturns` · export | `function cycleReturns(` |
| 70 | `cycleModel` · export | `function cycleModel(` |
| 109 | `seasonWhyFor` | `function seasonWhyFor(` |
| 115 | `growthWord` · export | `function growthWord(` |
| 118 | `cycleNowNote` · export | `function cycleNowNote(` |
| 126 | `seasonGroup` · export | `function seasonGroup(` |

#### The diagnosis: how she feels, and what has followed

| Line | Name | Anchor |
|---|---|---|
| 128 | `rankToDate` | `function rankToDate(` |
| 133 | `marketMonths` · export | `function marketMonths(` |
| 140 | `yearAfter` · export | `function yearAfter(` |
| 144 | `diagnoseToday` · export | `function diagnoseToday(` |

#### Her mood: one range from Depression to Mania

| Line | Name | Anchor |
|---|---|---|
| 149 | `rankIn` | `function rankIn(` |
| 155 | `moodSeries` | `function moodSeries(` |
| 163 | `moodAt` | `function moodAt(` |
| 169 | `MOOD_TURN` · export | `var MOOD_TURN =` |
| 172 | `moodWord` | `function moodWord(` |
| 176 | `moodRead` | `function moodRead(` |
| 184 | `moodTrack` · export | `function moodTrack(` |
| 190 | `moodToday` · export | `function moodToday(` |
| 194 | `cycleStory` · export | `function cycleStory(` |

#### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

| Line | Name | Anchor |
|---|---|---|
| 205 | `cycleSpanYears` · export | `function cycleSpanYears(` |
| 208 | `cycleByName` · export | `function cycleByName(` |
| 212 | `openCycle` · export | `function openCycle(` |
| 216 | `cycleSlice` · export | `function cycleSlice(` |
| 224 | `totalGrowthYears` · export | `function totalGrowthYears(` |
| 232 | `cycleMonths` · export | `function cycleMonths(` |
| 240 | `cycLabel` · export | `function cycLabel(` |
| 244 | `cycleQtrIdx` · export | `function cycleQtrIdx(` |
| 249 | `totalRiseIn` · export | `function totalRiseIn(` |
| 259 | `eraInflation` · export | `function eraInflation(` |
| 269 | `eraGrowth` · export | `function eraGrowth(` |
| 285 | `eraMarketTotal` · export | `function eraMarketTotal(` |
| 290 | `forgetMood` · export | `function forgetMood(` |

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
| 108 | `timelineSpan` · export | `function timelineSpan(` |
| 113 | `timelineFor` · export | `function timelineFor(` |
| 130 | `windowScale` · export | `function windowScale(` |
| 145 | `histReadEnsure` · export | `function histReadEnsure(` |
| 165 | `histReadFill` · export | `function histReadFill(` |
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
| 370 | `hyWindowFrom` · export | `function hyWindowFrom(` |
| 378 | `tabSegs` · export | `function tabSegs(` |
| 386 | `modeBar` | `function modeBar(` |
| 391 | `controlKeys` · export | `function controlKeys(` |
| 399 | `histControls` · export | `function histControls(` |
| 409 | `pageCycle` · export | `function pageCycle(` |
| 414 | `cyclePicker` | `function cyclePicker(` |
| 433 | `rangeBar` · export | `function rangeBar(` |
| 438 | `headSigma` · export | `function headSigma(` |
| 443 | `attachHistory` · export | `function attachHistory(` |

### `js/readings.ts`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 22 | `productivityWord` | `function productivityWord(` |
| 33 | `confidenceWord` | `function confidenceWord(` |
| 39 | `deficitBlock` · export | `function deficitBlock(` |
| 114 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 118 | `meterFlagged` · export | `function meterFlagged(` |
| 125 | `desireInfoHtml` | `function desireInfoHtml(` |
| 148 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 162 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 175 | `confidenceInfoHtml` | `function confidenceInfoHtml(` |
| 187 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 201 | `activityInfoHtml` | `function activityInfoHtml(` |
| 220 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 251 | `desireBlock` | `function desireBlock(` |
| 261 | `volumeBlock` | `function volumeBlock(` |
| 271 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 281 | `volumeVerdict` · export | `function volumeVerdict(` |
| 288 | `unempState` · export | `function unempState(` |
| 294 | `growthInfoHtml` · export | `function growthInfoHtml(` |
| 316 | `velocityVerdict` | `function velocityVerdict(` |
| 324 | `derivePulseTag` | `function derivePulseTag(` |
| 359 | `volatilityTag` · export | `function volatilityTag(` |
| 365 | `fearCurve` · export | `function fearCurve(` |
| 370 | `curveVerdict` · export | `function curveVerdict(` |
| 375 | `valuationVerdict` · export | `function valuationVerdict(` |
| 383 | `tempCaptionFull` · export | `var tempCaptionFull =` |
| 384 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 389 | `pressureZone` · export | `function pressureZone(` |
| 395 | `HZN_BACK` | `var HZN_BACK =` |
| 396 | `hznLast` | `function hznLast(` |
| 397 | `hznRecord` | `function hznRecord(` |
| 401 | `hznBack` | `function hznBack(` |
| 402 | `horizonWord` | `function horizonWord(` |
| 408 | `horizonInfoHtml` · export | `function horizonInfoHtml(` |
| 439 | `riskCell` | `function riskCell(` |
| 440 | `riskMatrixBlock` · export | `function riskMatrixBlock(` |
| 470 | `riskMatrixNote` | `var riskMatrixNote =` |
| 494 | `pulseBlock` | `function pulseBlock(` |
| 510 | `householdsWord` | `function householdsWord(` |
| 517 | `dsrInfoHtml` · export | `function dsrInfoHtml(` |
| 534 | `savInfoHtml` · export | `function savInfoHtml(` |
| 551 | `vixPct` · export | `function vixPct(` |
| 555 | `volatilityRing` · export | `function volatilityRing(` |
| 560 | `volatilityDetailHtml` · export | `function volatilityDetailHtml(` |
| 574 | `marketWord` · export | `function marketWord(` |
| 578 | `marketCol` · export | `function marketCol(` |
| 579 | `marketInfoHtml` | `function marketInfoHtml(` |
| 588 | `rowReadings` · export | `function rowReadings(` |
| 589 | `indOf` · export | `function indOf(` |
| 590 | `policyFacts` | `function policyFacts(` |
| 597 | `policyFactRows` · export | `function policyFactRows(` |
| 603 | `growthShownCap` · export | `function growthShownCap(` |
| 604 | `phaseClass` · export | `function phaseClass(` |
| 605 | `activityStackHtml` | `function activityStackHtml(` |
| 615 | `seatTemperature` | `function seatTemperature(` |
| 623 | `DATED_UNIT` · export | `var DATED_UNIT =` |
| 624 | `indPeriod` · export | `function indPeriod(` |

#### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

| Line | Name | Anchor |
|---|---|---|
| 728 | `isNum` | `function isNum(` |
| 729 | `rowsOk` | `function rowsOk(` |
| 735 | `deriveHorizon` | `function deriveHorizon(` |
| 748 | `desireRow` · export | `function desireRow(` |

### `js/roster.ts`

#### The roster: every reading, declared once

| Line | Name | Anchor |
|---|---|---|
| 32 | `keyed` · export | `function keyed(` |
| 39 | `hyMonths` | `function hyMonths(` |
| 42 | `lastDate` | `function lastDate(` |
| 43 | `compiledDay` | `function compiledDay(` |
| 44 | `isoLabel` | `function isoLabel(` |
| 48 | `paintWhen` · export | `function paintWhen(` |
| 53 | `desireWhen` | `function desireWhen(` |
| 57 | `labPeriod` | `function labPeriod(` |
| 58 | `rosterFor` · export | `function rosterFor(` |
| 59 | `peekOf` · export | `function peekOf(` |
| 64 | `cardDate` · export | `function cardDate(` |
| 65 | `checkRoster` | `function checkRoster(` |
| 83 | `periodOf` · export | `function periodOf(` |
| 84 | `categoriesShown` · export | `function categoriesShown(` |

### `js/render-core.ts`

#### RENDER: range bars + card helpers

| Line | Name | Anchor |
|---|---|---|
| 19 | `metricSheet` · export | `function metricSheet(` |
| 25 | `drawsPage` · export | `function drawsPage(` |
| 26 | `levelHeadings` | `function levelHeadings(` |
| 34 | `wireDetailModal` | `function wireDetailModal(` |

#### THE SUBJECT ROW

| Line | Name | Anchor |
|---|---|---|
| 74 | `subjectRow` · export | `function subjectRow(` |
| 84 | `subjectIcon` · export | `function subjectIcon(` |
| 85 | `timingMark` | `function timingMark(` |
| 93 | `timingPill` · export | `function timingPill(` |
| 101 | `collapseEmptyBlocks` · export | `function collapseEmptyBlocks(` |
| 109 | `seatPageFoot` · export | `function seatPageFoot(` |
| 121 | `registerTiming` · export | `function registerTiming(` |
| 122 | `headHtml` | `function headHtml(` |
| 127 | `cardDetailHtml` · export | `function cardDetailHtml(` |

#### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

| Line | Name | Anchor |
|---|---|---|
| 155 | `latestYieldPoint` | `function latestYieldPoint(` |
| 162 | `withLatestPoint` | `function withLatestPoint(` |
| 167 | `pressureMaturities` | `function pressureMaturities(` |
| 191 | `registerFlowPages` | `function registerFlowPages(` |
| 245 | `renderPressureRow` | `function renderPressureRow(` |
| 253 | `ylmYearMarks` | `function ylmYearMarks(` |
| 272 | `ylmColumns` | `function ylmColumns(` |
| 292 | `ylmFitLine` | `function ylmFitLine(` |
| 304 | `pressureHead` | `function pressureHead(` |
| 322 | `showPressureView` | `function showPressureView(` |
| 327 | `renderPressurePage` | `function renderPressurePage(` |

#### Pressure's Insights

| Line | Name | Anchor |
|---|---|---|
| 458 | `renderPressureInsights` | `function renderPressureInsights(` |
| 493 | `catList` · export | `function catList(` |
| 494 | `marketPeek` · export | `function marketPeek(` |
| 499 | `spreadPick` · export | `var spreadPick =` |
| 500 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 501 | `spreadLabel` | `function spreadLabel(` |
| 505 | `peekArt` | `function peekArt(` |
| 506 | `catItem` · export | `function catItem(` |
| 514 | `catCard` · export | `function catCard(` |
| 556 | `tempPeek` · export | `function tempPeek(` |
| 562 | `gdpPeek` · export | `function gdpPeek(` |

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
| 334 | `renderVolatility` | `function renderVolatility(` |
| 379 | `volatilityHighlights` | `function volatilityHighlights(` |

#### RENDER: Analysis subjects — one headline figure per collapsible section

| Line | Name | Anchor |
|---|---|---|
| 408 | `renderSubjectRows` | `function renderSubjectRows(` |

#### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

| Line | Name | Anchor |
|---|---|---|
| 428 | `setTopbar` · export | `function setTopbar(` |

### `js/diagnosis.ts`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 15 | `DIAG_SRC` | `var DIAG_SRC =` |
| 19 | `pct` | `function pct(` |
| 20 | `eraEnds` | `function eraEnds(` |
| 27 | `eraMove` | `function eraMove(` |
| 31 | `HORMONES` | `var HORMONES =` |
| 32 | `analysisFor` | `function analysisFor(` |
| 38 | `dxRow` | `function dxRow(` |
| 39 | `dxText` | `function dxText(` |
| 40 | `dxSection` | `function dxSection(` |
| 41 | `systemHtml` | `function systemHtml(` |
| 44 | `dxHead` | `function dxHead(` |
| 49 | `diagnosisHtml` | `function diagnosisHtml(` |
| 58 | `acrossCycle` | `function acrossCycle(` |
| 65 | `moodDoor` | `function moodDoor(` |
| 70 | `trendText` | `function trendText(` |
| 71 | `renderDiagnosis` · export | `function renderDiagnosis(` |
| 75 | `buildDiagnosis` | `function buildDiagnosis(` |

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
| 123 | `renderCycleKicker` | `function renderCycleKicker(` |

#### the hub: the reading inside the circle

| Line | Name | Anchor |
|---|---|---|
| 144 | `hubSet` | `function hubSet(` |
| 152 | `hubOpen` | `function hubOpen(` |
| 159 | `quarterCards` | `function quarterCards(` |
| 170 | `quarterSheet` | `function quarterSheet(` |
| 175 | `quarterPopup` | `function quarterPopup(` |
| 197 | `hubShowDefault` | `function hubShowDefault(` |
| 204 | `hubShowQuarter` | `function hubShowQuarter(` |
| 209 | `hubShowYear` | `function hubShowYear(` |
| 219 | `renderCycleDial` | `function renderCycleDial(` |
| 302 | `dialKeyStep` | `function dialKeyStep(` |
| 310 | `dialSay` | `function dialSay(` |

#### the whole view, for one cycle

| Line | Name | Anchor |
|---|---|---|
| 316 | `renderCycleView` · export | `function renderCycleView(` |
| 321 | `showCycle` · export | `function showCycle(` |

#### A cycle's season strip (carried by the one cycle row)

| Line | Name | Anchor |
|---|---|---|
| 323 | `stripGroupName` | `var stripGroupName =` |
| 324 | `seasonStripHtml` · export | `function seasonStripHtml(` |
| 352 | `marketStripHtml` · export | `function marketStripHtml(` |
| 385 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 386 | `settleStrips` · export | `function settleStrips(` |

### `js/analysis.ts`

#### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

| Line | Name | Anchor |
|---|---|---|
| 24 | `CYCLE_DATA_KEY` | `var CYCLE_DATA_KEY =` |
| 25 | `cycleDataOn` | `function cycleDataOn(` |
| 26 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 46 | `wireCycleData` | `function wireCycleData(` |
| 61 | `renderCycleList` | `function renderCycleList(` |

#### A closed cycle, shown on the Cycle tab's own page

| Line | Name | Anchor |
|---|---|---|
| 104 | `eraReading` | `function eraReading(` |
| 114 | `eraValue` | `function eraValue(` |
| 120 | `eraRange` | `function eraRange(` |
| 125 | `eraMini` | `function eraMini(` |
| 130 | `eraCard` | `function eraCard(` |
| 149 | `eraCards` | `function eraCards(` |
| 155 | `eraShow` | `function eraShow(` |
| 162 | `enterEra` | `function enterEra(` |
| 169 | `leaveEra` | `function leaveEra(` |

#### RENDER: the symptoms — the years of a cycle a reading sat where it sits today

| Line | Name | Anchor |
|---|---|---|
| 177 | `cycleSymptoms` | `function cycleSymptoms(` |
| 201 | `placeWords` | `function placeWords(` |
| 205 | `symptomNote` | `function symptomNote(` |
| 212 | `symptomRow` | `function symptomRow(` |
| 219 | `cycleTrack` | `function cycleTrack(` |
| 234 | `symptomLegend` | `function symptomLegend(` |

### `js/pages-nav.ts`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 19 | `convertLeadingSigns` | `function convertLeadingSigns(` |
| 42 | `orderMetricSheets` | `function orderMetricSheets(` |
| 62 | `renderSignsList` | `function renderSignsList(` |

#### THE ROSTER'S OWN PIECES

| Line | Name | Anchor |
|---|---|---|
| 94 | `partsOf` | `function partsOf(` |
| 103 | `authored` | `function authored(` |
| 104 | `registerRoster` | `function registerRoster(` |
| 125 | `indRow` | `function indRow(` |
| 129 | `indGroupRow` | `function indGroupRow(` |
| 134 | `catMembers` | `function catMembers(` |
| 142 | `indRows` | `function indRows(` |
| 156 | `indCategoryHtml` | `function indCategoryHtml(` |

#### THE NAVIGATION CONTROLLER

| Line | Name | Anchor |
|---|---|---|
| 165 | `BACK` | `var BACK =` |
| 166 | `backPush` | `function backPush(` |
| 167 | `backClear` | `function backClear(` |
| 168 | `backPopped` | `function backPopped(` |
| 169 | `buildNav` | `function buildNav(` |

#### ALL INDICATORS

| Line | Name | Anchor |
|---|---|---|
| 266 | `buildSearch` | `function buildSearch(` |
| 310 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### `js/tabs-menu.ts`

#### RENDER: About Gyneconomy — the season model and the framework

| Line | Name | Anchor |
|---|---|---|
| 13 | `renderSeasonRows` | `function renderSeasonRows(` |

#### TAB NAVIGATION (Cycle / Analysis / Search / Portfolio)

| Line | Name | Anchor |
|---|---|---|
| 60 | `renderTopbar` | `function renderTopbar(` |
| 89 | `wireTabKeys` | `function wireTabKeys(` |

#### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

| Line | Name | Anchor |
|---|---|---|
| 91 | `wireMenu` | `function wireMenu(` |

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
| 50 | `repaintDesire` | `function repaintDesire(` |
| 58 | `syncCape` | `function syncCape(` |
| 59 | `repaintValuationRow` | `function repaintValuationRow(` |
| 64 | `repaintPolicy` | `function repaintPolicy(` |
| 68 | `repaintDiagnosis` | `function repaintDiagnosis(` |

### `js/charts.ts`

#### The range bar

| Line | Name | Anchor |
|---|---|---|
| 15 | `trendOf` · export | `function trendOf(` |
| 34 | `trendPill` · export | `function trendPill(` |

#### The inner pages' charts

| Line | Name | Anchor |
|---|---|---|
| 48 | `xLabelOf` | `function xLabelOf(` |
| 57 | `fitLine` · export | `function fitLine(` |
| 61 | `fitGroup` · export | `function fitGroup(` |

#### The history component's axes

| Line | Name | Anchor |
|---|---|---|
| 78 | `vGrid` · export | `function vGrid(` |
| 82 | `COL_FILL` | `var COL_FILL =` |
| 83 | `colPath` · export | `function colPath(` |
| 88 | `colWidth` · export | `function colWidth(` |
| 93 | `AXIS` · export | `var AXIS =` |
| 94 | `histFrame` · export | `function histFrame(` |
| 101 | `xLabel` · export | `function xLabel(` |
| 104 | `crossLine` · export | `function crossLine(` |
| 107 | `zeroRule` · export | `function zeroRule(` |
| 110 | `meanRule` · export | `function meanRule(` |
| 112 | `publishGeom` · export | `function publishGeom(` |
| 113 | `histBar` · export | `function histBar(` |
| 116 | `histTip` · export | `function histTip(` |
| 117 | `avgRule` · export | `function avgRule(` |
| 120 | `vhOpen` · export | `function vhOpen(` |
| 121 | `chartAxes` · export | `function chartAxes(` |
| 152 | `divergeChart` · export | `function divergeChart(` |

#### A series' highest reading within a span

| Line | Name | Anchor |
|---|---|---|
| 186 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 187 | `PEEK_W` | `var PEEK_W =` |
| 188 | `PEEK_H` | `var PEEK_H =` |
| 189 | `colPeek` · export | `function colPeek(` |
| 206 | `meterPeek` | `function meterPeek(` |
| 222 | `windowYears` · export | `function windowYears(` |
| 230 | `refName` | `function refName(` |
| 234 | `PULSE_WINDOW` · export | `var PULSE_WINDOW =` |
| 235 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 236 | `pulseClipN` | `var pulseClipN =` |
| 237 | `beatPath` | `function beatPath(` |
| 254 | `pulseTraceSvg` · export | `function pulseTraceSvg(` |
| 268 | `pulsePeek` · export | `function pulsePeek(` |
| 271 | `peekCard` · export | `function peekCard(` |
| 289 | `vitalRingSvg` · export | `function vitalRingSvg(` |

### `js/cycle-tab.ts`

#### THE CYCLE TAB: cards and categories

| Line | Name | Anchor |
|---|---|---|
| 18 | `placeSignPair` | `function placeSignPair(` |
| 41 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 57 | `buildCategories` | `function buildCategories(` |
| 73 | `renderPeekAndCategories` · export | `function renderPeekAndCategories(` |

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
| 8 | `qAtIndex` · export | `function qAtIndex(` |
| 9 | `yearOf` · export | `function yearOf(` |
| 10 | `mean` · export | `function mean(` |
| 11 | `atQuarter` · export | `function atQuarter(` |
| 12 | `atMonth` · export | `function atMonth(` |
| 13 | `ordinal` · export | `function ordinal(` |
| 14 | `hiCard` · export | `function hiCard(` |
| 17 | `dropWhatIsShown` · export | `function dropWhatIsShown(` |
| 24 | `highlightsHtml` · export | `function highlightsHtml(` |
| 33 | `CHEV` · export | `var CHEV =` |
| 34 | `prettyKey` · export | `function prettyKey(` |
| 39 | `qLabel` · export | `function qLabel(` |
| 40 | `monthLabel` · export | `function monthLabel(` |
| 41 | `clampPct` · export | `function clampPct(` |
| 42 | `ledeHtml` · export | `function ledeHtml(` |
| 43 | `facts` · export | `function facts(` |
| 44 | `factsFrom` · export | `function factsFrom(` |
| 48 | `srcBlock` · export | `function srcBlock(` |
| 49 | `srcHtml` | `function srcHtml(` |
| 50 | `fmtSigned` · export | `function fmtSigned(` |
| 51 | `popHead` · export | `function popHead(` |
| 52 | `hubLine` · export | `function hubLine(` |
| 53 | `qPretty` · export | `function qPretty(` |
| 54 | `seasonName` · export | `function seasonName(` |
| 55 | `capeFmt1` · export | `function capeFmt1(` |
| 56 | `withUnit` · export | `function withUnit(` |

### `js/history-charts.ts`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 11 | `deficitChart` · export | `function deficitChart(` |
| 78 | `velocityHistoryChart` · export | `function velocityHistoryChart(` |
| 129 | `desireHistoryChart` · export | `function desireHistoryChart(` |
| 170 | `yearTicks` | `function yearTicks(` |
| 185 | `unempHistoryChart` · export | `function unempHistoryChart(` |
| 226 | `fedFundsHistoryChart` · export | `function fedFundsHistoryChart(` |
| 271 | `householdsChart` · export | `function householdsChart(` |
| 316 | `cpiHistoryChart` · export | `function cpiHistoryChart(` |
| 357 | `gdpHistoryChart` · export | `function gdpHistoryChart(` |
| 407 | `m2GrowthChart` · export | `function m2GrowthChart(` |
| 451 | `m2Step` · export | `function m2Step(` |
| 454 | `heatStep` · export | `function heatStep(` |

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
| 11 | `gdpYoYBefore` · export | `var gdpYoYBefore =` |
| 12 | `cpiYoYBefore` · export | `var cpiYoYBefore =` |
| 13 | `sp500ReturnsBefore` · export | `var sp500ReturnsBefore =` |
| 14 | `gdpGrowthBefore` · export | `var gdpGrowthBefore =` |

### `js/indicators.ts`

#### The split indicators: one card and one page each

| Line | Name | Anchor |
|---|---|---|
| 22 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 28 | `meterWord` | `function meterWord(` |
| 29 | `splitPages` | `function splitPages(` |
| 46 | `confidencePage` | `function confidencePage(` |
| 52 | `marketPage` | `function marketPage(` |
| 58 | `productivityPage` | `function productivityPage(` |
| 63 | `splitSpec` | `function splitSpec(` |
| 69 | `splitInfo` | `function splitInfo(` |
| 73 | `periodTicks` | `function periodTicks(` |
| 78 | `periodOfSeries` | `function periodOfSeries(` |
| 79 | `drawSplit` | `function drawSplit(` |
| 96 | `mountSplit` | `function mountSplit(` |
| 109 | `splitPeek` | `function splitPeek(` |
| 116 | `indicatorPeeks` · export | `function indicatorPeeks(` |
| 124 | `deficitPeek` | `function deficitPeek(` |
| 128 | `catSheet` · export | `function catSheet(` |
| 133 | `groupId` · export | `function groupId(` |
| 134 | `groupCard` | `function groupCard(` |
| 142 | `groupSheet` | `function groupSheet(` |
| 149 | `appendPicks` · export | `function appendPicks(` |
| 157 | `doorSel` | `function doorSel(` |
| 158 | `catPicks` · export | `function catPicks(` |

#### The split indicators' insights

| Line | Name | Anchor |
|---|---|---|
| 170 | `buffettInsight` | `function buffettInsight(` |
| 185 | `debtInsight` | `function debtInsight(` |
| 200 | `productivityInsight` | `function productivityInsight(` |
| 210 | `confidenceInsight` | `function confidenceInsight(` |
| 221 | `ORDINAL` | `var ORDINAL =` |
| 222 | `marketInsight` | `function marketInsight(` |
| 234 | `interestInsight` | `function interestInsight(` |

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
| 14 | `insightCirculation` | `function insightCirculation(` |
| 47 | `insightWeather` | `function insightWeather(` |
| 87 | `seasonCards` | `function seasonCards(` |
| 93 | `marketCycleCard` | `function marketCycleCard(` |
| 105 | `MOOD_CHART` | `var MOOD_CHART =` |
| 112 | `MOOD_SRC` | `var MOOD_SRC =` |
| 117 | `curvePath` | `function curvePath(` |
| 125 | `moodCallout` | `function moodCallout(` |
| 129 | `moodCycleSvg` | `function moodCycleSvg(` |
| 141 | `moodInfo` | `function moodInfo(` |
| 150 | `moodFigures` | `function moodFigures(` |
| 156 | `moodCard` | `function moodCard(` |
| 160 | `insightMood` | `function insightMood(` |
| 166 | `storyBeats` | `function storyBeats(` |
| 177 | `storyText` | `function storyText(` |
| 182 | `replaceInsights` · export | `function replaceInsights(` |

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
| 36 | `stethoscopeSvg` · export | `function stethoscopeSvg(` |
| 38 | `personSvg` · export | `function personSvg(` |
| 40 | `bookSvg` · export | `function bookSvg(` |
| 43 | `ecgSvg` · export | `function ecgSvg(` |
| 45 | `circulationSvg` · export | `function circulationSvg(` |
| 46 | `boltSvg` · export | `function boltSvg(` |
| 47 | `houseSvg` · export | `function houseSvg(` |
| 50 | `marketSvg` · export | `function marketSvg(` |
| 53 | `bagSvg` · export | `function bagSvg(` |
| 56 | `volatilitySvg` · export | `function volatilitySvg(` |

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
| 234 | calendar tab (yearly view, one card per year grouped into five eras — see marketCycles below) |
| 270 | season strip |
| 296 | THE GAP (Keren, V385: "…so if one day I'll tell you I want the spacing to be 30, you would just change |
| 360 | tab bar (app-style segmented navigation) |
| 395 | vitals strip (health-app framing: two at-a-glance rings, Growth and Rates, built from data used |
| 410 | temperature chart (Cycle tab), after Natural Cycles' temperature view: a column per month of the |
| 483 | journal (editorial content tab) |
| 489 | content tab: reading companion |
| 538 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
| 732 | Volume's red ramp (Keren, V389: "volume is, in gynaecology, blood — so it should be different shades of |
| 807 | the maturity chart's columns wear the curve's three zones (Keren, V394: "a colour that represents the |
| 880 | One gap between an inner page's containers (Keren, V381: "the spacing between containers in each inner |
| 1,049 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 1,064 | The symptoms: a cycle's years against today |
| 1,141 | hero: yield curve |
| 1,171 | the readout (Keren, from Apple Health): it never changes the page's height, which is why it beats a |
| 1,190 | 10Y-3M spread history (quarterly, with recession bands) |
| 1,217 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 1,225 | long cycle (structural layer) |
| 1,232 | indicator grid |
| 1,258 | info icon + popover (progressive disclosure for longer notes) |
| 1,272 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 1,357 | footer |

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
| 239 | `sheet-howto` |
| 282 | `sheet-book` |
| 313 | `seasons-kicker` |
| 315 | `seasons-rows` |
| 318 | `framework-kicker` |
| 321 | `framework-rows` |
| 331 | `sheet-appearance` |
| 339 | `theme-toggle` |
| 346 | `sheet-contact` |
| 355 | `contact-form` |
| 356 | `contact-title` |
| 357 | `contact-message` |
| 359 | `contact-hint` |
| 360 | `contact-send` |
| 366 | `sheet-sources` |
| 369 | `sources-back` |
| 374 | `asof-text` |
| 375 | `sources-groups` |
| 381 | `detail-backdrop` |
| 383 | `detail-modal-close` |
| 384 | `detail-modal-body` |

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

