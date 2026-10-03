# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,608 lines** in 31 files, about 561 KB, roughly **159 thousand tokens**. No session can
read it whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Use the **anchor** column with grep —
> `grep -rn 'function curveVerdict(' src/` — and treat `file:line` as rough orientation only.

Generated from commit `ad169e3` on 2026-10-03.

## The page

`src/manifest.json` joins these parts into `index.html`. The `.js` entry is bundled by esbuild
(`tools/bundle.js`) into one script in its place.

| Part | Lines | What |
|---|---|---|
| `page-head.html` | 5 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist |
| `styles.css` | 1,334 | the whole stylesheet, every token and rule |
| `page-body.html` | 391 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| `js/main.ts` | 27 modules | the entry: imports every module and calls their boots in order |
| `page-tail.html` | 45 | the bundle's closing tag, the service-worker registration, </body></html> |

Counts: **27** modules, **518** top-level functions, **89** top-level vars, **323** exported names, **18** boots.

## Modules, in boot order

| Module | Lines | Declarations | Imports from |
|---|---|---|---|
| `js/dom.ts` | 145 | 18 | `format` |
| `js/live.ts` | 193 | 19 | `format` |
| `js/refresh-season.ts` | 39 | 4 | `format`, `history-fred` |
| `js/data.ts` | 523 | 60 | `format`, `history-fred`, `live`, `refresh-season` |
| `js/model.ts` | 344 | 44 | `data`, `dom`, `format`, `history-fred`, `refresh-season` |
| `js/history.ts` | 470 | 38 | `charts`, `data`, `dom`, `format`, `live`, `model` |
| `js/readings.ts` | 758 | 64 | `charts`, `data`, `dom`, `format`, `history`, `history-fred`, `live`, `model`, `refresh-season` |
| `js/roster.ts` | 143 | 12 | `charts`, `data`, `format`, `history`, `history-fred`, `live`, `marks`, `readings`, `refresh-season` |
| `js/render-core.ts` | 567 | 37 | `charts`, `data`, `dom`, `format`, `history`, `history-charts`, `live`, `model`, `readings`, `refresh-season`, `roster` |
| `js/render-pages.ts` | 454 | 11 | `charts`, `data`, `dom`, `format`, `history`, `history-charts`, `history-fred`, `live`, `model`, `readings`, `refresh-season`, `render-core` |
| `js/diagnosis.ts` | 89 | 18 | `dom`, `era`, `format`, `live`, `marks`, `model`, `refresh-season`, `roster` |
| `js/dial-cycle.ts` | 441 | 24 | `data`, `diagnosis`, `dom`, `format`, `live`, `model`, `refresh-season`, `render-core`, `render-pages`, `roster` |
| `js/analysis.ts` | 251 | 24 | `charts`, `data`, `dial-cycle`, `dom`, `era`, `format`, `history`, `insights`, `live`, `model`, `refresh-season`, `render-pages`, `roster` |
| `js/pages-nav.ts` | 341 | 26 | `cycle-tab`, `data`, `dial-cycle`, `dom`, `format`, `history`, `indicators`, `inner-pages`, `live`, `readings`, `render-core`, `render-pages`, `roster` |
| `js/tabs-menu.ts` | 191 | 4 | `data`, `dial-cycle`, `dom`, `format`, `live`, `model`, `pages-nav`, `refresh-season` |
| `js/repaint.ts` | 82 | 10 | `data`, `diagnosis`, `dom`, `insights`, `live`, `model`, `readings`, `render-core`, `roster` |
| `js/charts.ts` | 300 | 39 | `format` |
| `js/cycle-tab.ts` | 99 | 4 | `data`, `dom`, `format`, `history-charts`, `indicators`, `insights`, `model`, `readings`, `refresh-season`, `render-core`, `roster` |
| `js/era.ts` | 63 | 10 | `format`, `roster` |
| `js/format.ts` | 65 | 33 | — |
| `js/history-charts.ts` | 417 | 11 | `charts`, `data`, `format`, `history`, `history-fred`, `model`, `readings`, `refresh-season` |
| `js/history-fred.ts` | 16 | 13 | — |
| `js/indicators.ts` | 264 | 32 | `charts`, `data`, `dom`, `format`, `history`, `history-fred`, `model`, `readings`, `refresh-season`, `render-core`, `roster` |
| `js/inner-pages.ts` | 287 | 13 | `charts`, `data`, `dial-cycle`, `dom`, `format`, `history`, `history-charts`, `model`, `readings`, `refresh-season`, `render-core` |
| `js/insights.ts` | 190 | 17 | `data`, `dom`, `format`, `model`, `readings`, `refresh-season`, `roster` |
| `js/marks.ts` | 61 | 22 | — |
| `js/main.ts` | 40 | 0 | `analysis`, `data`, `diagnosis`, `dial-cycle`, `dom`, `history`, `live`, `model`, `pages-nav`, `readings`, `refresh-season`, `render-core`, `render-pages`, `repaint`, `roster`, `tabs-menu` |

## The boots

A module's top level holds only declarations and values that need nothing else. Whatever runs
at load and reads another module sits in its `boot…()` function, and `js/main.ts` calls them in
this order. `tools/load-order.js` proves no shared value is read before something sets it.

| Order | Boot | Lines |
|---|---|---|
| 1 | `bootDom` | `js/dom.ts:135`–144 |
| 2 | `bootDone` | `js/live.ts:184`–186 |
| 3 | `bootLive` | `js/live.ts:187`–192 |
| 4 | `bootRefreshSeason` | `js/refresh-season.ts:29`–38 |
| 5 | `bootData` | `js/data.ts:473`–522 |
| 6 | `bootModel` | `js/model.ts:297`–343 |
| 7 | `bootHistory` | `js/history.ts:446`–469 |
| 8 | `bootReadings` | `js/readings.ts:601`–670 |
| 9 | `bootReadingRegistry` | `js/readings.ts:695`–757 |
| 10 | `bootRoster` | `js/roster.ts:81`–142 |
| 11 | `bootRenderCore` | `js/render-core.ts:556`–566 |
| 12 | `bootRenderPages` | `js/render-pages.ts:436`–453 |
| 13 | `bootDiagnosis` | `js/diagnosis.ts:85`–88 |
| 14 | `bootDialCycle` | `js/dial-cycle.ts:417`–440 |
| 15 | `bootAnalysis` | `js/analysis.ts:246`–250 |
| 16 | `bootPagesNav` | `js/pages-nav.ts:333`–340 |
| 17 | `bootTabsMenu` | `js/tabs-menu.ts:181`–190 |
| 18 | `bootRepaint` | `js/repaint.ts:65`–81 |

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
| 25 | `docValue` | `function docValue(` |
| 34 | `docOk` | `function docOk(` |
| 38 | `plainText` · export | `function plainText(` |
| 43 | `liveIsoOf` · export | `function liveIsoOf(` |
| 46 | `olderThanFile` | `function olderThanFile(` |
| 50 | `liveInto` · export | `function liveInto(` |
| 54 | `landLive` | `function landLive(` |

#### Repaint

| Line | Name | Anchor |
|---|---|---|
| 64 | `repaintLive` · export | `function repaintLive(` |
| 69 | `shapeOk` | `function shapeOk(` |
| 101 | `defineReadings` · export | `function defineReadings(` |
| 105 | `onLive` · export | `function onLive(` |
| 106 | `exposeLive` · export | `function exposeLive(` |
| 109 | `KINDS` | `var KINDS =` |
| 110 | `checkLiveCoverage` · export | `function checkLiveCoverage(` |
| 124 | `receive` | `function receive(` |
| 137 | `applyLive` | `function applyLive(` |
| 144 | `refreshLiveData` · export | `function refreshLiveData(` |
| 161 | `fetchSiteData` · export | `function fetchSiteData(` |
| 177 | `forgetLive` · export | `function forgetLive(` |

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

#### Desire: real spending on durable goods

| Line | Name | Anchor |
|---|---|---|
| 129 | `DESIRE_LINE` · export | `var DESIRE_LINE =` |

#### The deficit, year by year

| Line | Name | Anchor |
|---|---|---|
| 132 | `DEF_FROM_YEAR` · export | `var DEF_FROM_YEAR =` |
| 133 | `deficitHistory` · export | `var deficitHistory =` |
| 134 | `DEF_MEAN` · export | `var DEF_MEAN =` |
| 137 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 142 | `fedFundsRange` · export | `function fedFundsRange(` |
| 146 | `buffettHistory` · export | `var buffettHistory =` |
| 147 | `M2_PACE_LO` · export | `var M2_PACE_LO =` |
| 164 | `syncGrossDebt` | `function syncGrossDebt(` |
| 174 | `checkGrossDebt` | `function checkGrossDebt(` |
| 184 | `curveAt` · export | `function curveAt(` |
| 188 | `curveNeed` | `function curveNeed(` |
| 189 | `curveSpread` · export | `function curveSpread(` |
| 190 | `policyDirection` · export | `function policyDirection(` |
| 193 | `syncCapeHistory` · export | `function syncCapeHistory(` |
| 197 | `valRow` · export | `function valRow(` |
| 201 | `fileRow` · export | `function fileRow(` |
| 202 | `PULSE_PRE2008` · export | `var PULSE_PRE2008 =` |
| 203 | `PULSE_STEADY_LO` · export | `var PULSE_STEADY_LO =` |
| 204 | `M2V_FROM_YEAR` · export | `var M2V_FROM_YEAR =` |
| 205 | `m2vHistory` · export | `var m2vHistory =` |
| 219 | `checkVelocityHistory` | `function checkVelocityHistory(` |
| 224 | `M2_FROM_YEAR` · export | `var M2_FROM_YEAR =` |
| 225 | `m2Level` | `var m2Level =` |
| 226 | `m2Yoy` · export | `var m2Yoy =` |
| 227 | `M2_NORM` · export | `var M2_NORM =` |
| 228 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 229 | `unempHistory` · export | `var unempHistory =` |
| 233 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 241 | `NROU_NOW` · export | `var NROU_NOW =` |
| 242 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 249 | `ACT_BAND_LO` · export | `var ACT_BAND_LO =` |
| 250 | `CPI_TARGET` · export | `var CPI_TARGET =` |
| 251 | `TEMP_BAND_LO` · export | `var TEMP_BAND_LO =` |
| 252 | `GDP_NORM` · export | `var GDP_NORM =` |
| 253 | `checkMoneyStock` | `function checkMoneyStock(` |
| 316 | `DSR_FROM_YEAR` · export | `var DSR_FROM_YEAR =` |
| 317 | `dsrHistory` · export | `var dsrHistory =` |
| 318 | `SAV_FROM_YEAR` · export | `var SAV_FROM_YEAR =` |
| 319 | `savHistory` · export | `var savHistory =` |
| 320 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 328 | `SAV_OFFSET` · export | `var SAV_OFFSET =` |
| 329 | `dsrNow` · export | `var dsrNow =` |
| 330 | `savNow` · export | `var savNow =` |
| 331 | `DSR_MEAN` · export | `var DSR_MEAN =` |
| 332 | `curveNoteFull` · export | `var curveNoteFull =` |
| 343 | `VOL_JOIN` · export | `var VOL_JOIN =` |
| 465 | `typicalCycleYears` · export | `var typicalCycleYears =` |

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
| 194 | `moodSince` | `function moodSince(` |
| 195 | `cycleStory` · export | `function cycleStory(` |

#### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

| Line | Name | Anchor |
|---|---|---|
| 206 | `cycleSpanYears` · export | `function cycleSpanYears(` |
| 209 | `cycleByName` · export | `function cycleByName(` |
| 213 | `openCycle` · export | `function openCycle(` |
| 217 | `cycleSlice` · export | `function cycleSlice(` |
| 225 | `totalGrowthYears` · export | `function totalGrowthYears(` |
| 233 | `cycleMonths` · export | `function cycleMonths(` |
| 241 | `cycLabel` · export | `function cycLabel(` |
| 245 | `cycleQtrIdx` · export | `function cycleQtrIdx(` |
| 250 | `totalRiseIn` · export | `function totalRiseIn(` |
| 260 | `eraInflation` · export | `function eraInflation(` |
| 270 | `eraGrowth` · export | `function eraGrowth(` |
| 286 | `eraMarketTotal` · export | `function eraMarketTotal(` |
| 291 | `forgetMood` · export | `function forgetMood(` |

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
| 22 | `productivityWord` | `function productivityWord(` |
| 33 | `confidenceWord` | `function confidenceWord(` |
| 39 | `desireWord` | `function desireWord(` |
| 45 | `deficitBlock` · export | `function deficitBlock(` |
| 108 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 112 | `meterFlagged` · export | `function meterFlagged(` |
| 116 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 130 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 143 | `confidenceInfoHtml` | `function confidenceInfoHtml(` |
| 155 | `desireInfoHtml` | `function desireInfoHtml(` |
| 166 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 180 | `activityInfoHtml` | `function activityInfoHtml(` |
| 199 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 230 | `volumeBlock` | `function volumeBlock(` |
| 240 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 250 | `volumeVerdict` · export | `function volumeVerdict(` |
| 257 | `unempState` · export | `function unempState(` |
| 263 | `growthInfoHtml` · export | `function growthInfoHtml(` |
| 285 | `velocityVerdict` | `function velocityVerdict(` |
| 293 | `laborWord` · export | `function laborWord(` |
| 296 | `temperatureWord` · export | `function temperatureWord(` |
| 301 | `deriveLaggingTags` | `function deriveLaggingTags(` |
| 307 | `derivePulseTag` | `function derivePulseTag(` |
| 342 | `volatilityTag` · export | `function volatilityTag(` |
| 348 | `fearCurve` · export | `function fearCurve(` |
| 353 | `curveVerdict` · export | `function curveVerdict(` |
| 358 | `valuationVerdict` · export | `function valuationVerdict(` |
| 366 | `tempCaptionFull` · export | `var tempCaptionFull =` |
| 367 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 372 | `pressureZone` · export | `function pressureZone(` |
| 378 | `HZN_BACK` | `var HZN_BACK =` |
| 379 | `hznLast` | `function hznLast(` |
| 380 | `hznNeed` | `function hznNeed(` |
| 381 | `hznDelta` | `function hznDelta(` |
| 382 | `hznRecord` | `function hznRecord(` |
| 386 | `hznBack` | `function hznBack(` |
| 387 | `horizonWord` | `function horizonWord(` |
| 393 | `horizonInfoHtml` · export | `function horizonInfoHtml(` |
| 414 | `pulseBlock` | `function pulseBlock(` |
| 430 | `householdsWord` | `function householdsWord(` |
| 437 | `dsrInfoHtml` · export | `function dsrInfoHtml(` |
| 454 | `savInfoHtml` · export | `function savInfoHtml(` |
| 471 | `vixPct` · export | `function vixPct(` |
| 475 | `volatilityRing` · export | `function volatilityRing(` |
| 480 | `volatilityDetailHtml` · export | `function volatilityDetailHtml(` |
| 494 | `marketWord` · export | `function marketWord(` |
| 498 | `marketCol` · export | `function marketCol(` |
| 499 | `marketInfoHtml` | `function marketInfoHtml(` |
| 508 | `rowReadings` · export | `function rowReadings(` |
| 509 | `indOf` · export | `function indOf(` |
| 510 | `policyFacts` | `function policyFacts(` |
| 517 | `policyFactRows` · export | `function policyFactRows(` |
| 523 | `growthShownCap` · export | `function growthShownCap(` |
| 524 | `phaseClass` · export | `function phaseClass(` |
| 525 | `activityStackHtml` | `function activityStackHtml(` |
| 535 | `seatTemperature` | `function seatTemperature(` |
| 543 | `DATED_UNIT` · export | `var DATED_UNIT =` |
| 544 | `indPeriod` · export | `function indPeriod(` |
| 553 | `deriveFeelingReadings` | `function deriveFeelingReadings(` |

#### Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring

| Line | Name | Anchor |
|---|---|---|
| 671 | `isNum` | `function isNum(` |
| 673 | `rowId` | `function rowId(` |
| 674 | `rowLike` | `function rowLike(` |
| 679 | `rowsOk` | `function rowsOk(` |
| 682 | `deriveHorizon` | `function deriveHorizon(` |

### `js/roster.ts`

#### The roster: every reading, declared once

| Line | Name | Anchor |
|---|---|---|
| 32 | `keyed` · export | `function keyed(` |
| 39 | `lastDate` | `function lastDate(` |
| 40 | `compiledDay` | `function compiledDay(` |
| 41 | `isoLabel` | `function isoLabel(` |
| 45 | `paintWhen` · export | `function paintWhen(` |
| 50 | `labPeriod` | `function labPeriod(` |
| 51 | `rosterFor` · export | `function rosterFor(` |
| 52 | `peekOf` · export | `function peekOf(` |
| 57 | `cardDate` · export | `function cardDate(` |
| 58 | `checkRoster` | `function checkRoster(` |
| 76 | `periodOf` · export | `function periodOf(` |
| 77 | `categoriesShown` · export | `function categoriesShown(` |

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
| 158 | `latestYieldPoint` | `function latestYieldPoint(` |
| 165 | `withLatestPoint` | `function withLatestPoint(` |
| 170 | `pressureMaturities` | `function pressureMaturities(` |
| 194 | `registerFlowPages` | `function registerFlowPages(` |
| 233 | `renderPressureRow` | `function renderPressureRow(` |
| 241 | `ylmYearMarks` | `function ylmYearMarks(` |
| 260 | `ylmColumns` | `function ylmColumns(` |
| 280 | `ylmFitLine` | `function ylmFitLine(` |
| 292 | `pressureHead` | `function pressureHead(` |
| 310 | `showPressureView` | `function showPressureView(` |
| 315 | `renderPressurePage` | `function renderPressurePage(` |

#### Pressure's Insights

| Line | Name | Anchor |
|---|---|---|
| 446 | `renderPressureInsights` | `function renderPressureInsights(` |
| 481 | `catList` · export | `function catList(` |
| 482 | `marketPeek` · export | `function marketPeek(` |
| 487 | `spreadPick` · export | `var spreadPick =` |
| 488 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 489 | `spreadLabel` | `function spreadLabel(` |
| 493 | `peekArt` | `function peekArt(` |
| 494 | `catItem` · export | `function catItem(` |
| 502 | `catCard` · export | `function catCard(` |
| 544 | `tempPeek` · export | `function tempPeek(` |
| 550 | `gdpPeek` · export | `function gdpPeek(` |

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
| 20 | `inYears` | `function inYears(` |
| 21 | `eraEnds` | `function eraEnds(` |
| 28 | `eraMove` | `function eraMove(` |
| 32 | `HORMONES` | `var HORMONES =` |
| 33 | `analysisFor` | `function analysisFor(` |
| 39 | `dxRow` | `function dxRow(` |
| 40 | `dxText` | `function dxText(` |
| 41 | `dxSection` | `function dxSection(` |
| 42 | `systemHtml` | `function systemHtml(` |
| 45 | `dxHead` | `function dxHead(` |
| 50 | `diagnosisHtml` | `function diagnosisHtml(` |
| 59 | `acrossCycle` | `function acrossCycle(` |
| 66 | `moodDoor` | `function moodDoor(` |
| 71 | `trendText` | `function trendText(` |
| 72 | `renderDiagnosis` · export | `function renderDiagnosis(` |
| 76 | `buildDiagnosis` | `function buildDiagnosis(` |

### `js/dial-cycle.ts`

#### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

| Line | Name | Anchor |
|---|---|---|
| 23 | `drawDial` | `function drawDial(` |

#### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

| Line | Name | Anchor |
|---|---|---|
| 105 | `wireThemeChoice` | `function wireThemeChoice(` |

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
| 219 | `peekEl` | `function peekEl(` |
| 220 | `one` · export | `function one(` |
| 221 | `cycleView` · export | `function cycleView(` |
| 222 | `renderCycleDial` | `function renderCycleDial(` |
| 305 | `dialKeyStep` | `function dialKeyStep(` |
| 313 | `dialSay` | `function dialSay(` |

#### the whole view, for one cycle

| Line | Name | Anchor |
|---|---|---|
| 319 | `renderCycleView` · export | `function renderCycleView(` |
| 324 | `showCycle` · export | `function showCycle(` |

#### A cycle's season strip (carried by the one cycle row)

| Line | Name | Anchor |
|---|---|---|
| 326 | `stripGroupName` | `var stripGroupName =` |
| 327 | `seasonStripHtml` · export | `function seasonStripHtml(` |
| 355 | `marketStripHtml` · export | `function marketStripHtml(` |
| 388 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 389 | `settleStrips` · export | `function settleStrips(` |

### `js/analysis.ts`

#### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

| Line | Name | Anchor |
|---|---|---|
| 25 | `CYCLE_DATA_KEY` | `var CYCLE_DATA_KEY =` |
| 26 | `cycleDataOn` | `function cycleDataOn(` |
| 27 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 47 | `wireCycleData` | `function wireCycleData(` |
| 62 | `renderCycleList` | `function renderCycleList(` |

#### A closed cycle, shown on the Cycle tab's own page

| Line | Name | Anchor |
|---|---|---|
| 105 | `eraReading` | `function eraReading(` |
| 115 | `eraValue` | `function eraValue(` |
| 121 | `eraRange` | `function eraRange(` |
| 126 | `eraMini` | `function eraMini(` |
| 131 | `lead` | `function lead(` |
| 132 | `figOf` | `function figOf(` |
| 133 | `part` | `function part(` |
| 134 | `parentOf` | `function parentOf(` |
| 135 | `eraCard` | `function eraCard(` |
| 153 | `eraCards` | `function eraCards(` |
| 159 | `eraShow` | `function eraShow(` |
| 166 | `enterEra` | `function enterEra(` |
| 173 | `leaveEra` | `function leaveEra(` |

#### RENDER: the symptoms — the years of a cycle a reading sat where it sits today

| Line | Name | Anchor |
|---|---|---|
| 181 | `cycleSymptoms` | `function cycleSymptoms(` |
| 205 | `placeWords` | `function placeWords(` |
| 209 | `symptomNote` | `function symptomNote(` |
| 216 | `symptomRow` | `function symptomRow(` |
| 223 | `cycleTrack` | `function cycleTrack(` |
| 238 | `symptomLegend` | `function symptomLegend(` |

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
| 50 | `syncCape` | `function syncCape(` |
| 51 | `repaintValuationRow` | `function repaintValuationRow(` |
| 56 | `repaintPolicy` | `function repaintPolicy(` |
| 60 | `repaintDiagnosis` | `function repaintDiagnosis(` |

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

### `js/cycle-tab.ts`

#### THE CYCLE TAB: cards and categories

| Line | Name | Anchor |
|---|---|---|
| 19 | `placeSignPair` | `function placeSignPair(` |
| 42 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 58 | `buildCategories` | `function buildCategories(` |
| 74 | `renderPeekAndCategories` · export | `function renderPeekAndCategories(` |

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
| 10 | `metered` · export | `function metered(` |
| 11 | `tagFor` · export | `function tagFor(` |
| 12 | `stateOf` · export | `function stateOf(` |
| 13 | `bandEnds` · export | `function bandEnds(` |
| 18 | `mean` · export | `function mean(` |
| 19 | `atQuarter` · export | `function atQuarter(` |
| 20 | `atMonth` · export | `function atMonth(` |
| 21 | `ordinal` · export | `function ordinal(` |
| 22 | `hiCard` · export | `function hiCard(` |
| 25 | `dropWhatIsShown` · export | `function dropWhatIsShown(` |
| 32 | `highlightsHtml` · export | `function highlightsHtml(` |
| 41 | `CHEV` · export | `var CHEV =` |
| 42 | `prettyKey` · export | `function prettyKey(` |
| 47 | `qLabel` · export | `function qLabel(` |
| 48 | `monthLabel` · export | `function monthLabel(` |
| 49 | `clampPct` · export | `function clampPct(` |
| 50 | `ledeHtml` · export | `function ledeHtml(` |
| 51 | `facts` · export | `function facts(` |
| 52 | `factsFrom` · export | `function factsFrom(` |
| 56 | `srcBlock` · export | `function srcBlock(` |
| 57 | `srcHtml` | `function srcHtml(` |
| 58 | `fmtSigned` · export | `function fmtSigned(` |
| 59 | `popHead` · export | `function popHead(` |
| 60 | `hubLine` · export | `function hubLine(` |
| 61 | `qPretty` · export | `function qPretty(` |
| 62 | `seasonName` · export | `function seasonName(` |
| 63 | `capeFmt1` · export | `function capeFmt1(` |
| 64 | `withUnit` · export | `function withUnit(` |

### `js/history-charts.ts`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 11 | `deficitChart` · export | `function deficitChart(` |
| 78 | `velocityHistoryChart` · export | `function velocityHistoryChart(` |
| 129 | `yearTicks` | `function yearTicks(` |
| 144 | `unempHistoryChart` · export | `function unempHistoryChart(` |
| 185 | `fedFundsHistoryChart` · export | `function fedFundsHistoryChart(` |
| 230 | `householdsChart` · export | `function householdsChart(` |
| 275 | `cpiHistoryChart` · export | `function cpiHistoryChart(` |
| 316 | `gdpHistoryChart` · export | `function gdpHistoryChart(` |
| 366 | `m2GrowthChart` · export | `function m2GrowthChart(` |
| 410 | `m2Step` · export | `function m2Step(` |
| 413 | `heatStep` · export | `function heatStep(` |

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
| 12 | `gdpYoYBefore` · export | `var gdpYoYBefore =` |
| 13 | `cpiYoYBefore` · export | `var cpiYoYBefore =` |
| 14 | `sp500ReturnsBefore` · export | `var sp500ReturnsBefore =` |
| 15 | `gdpGrowthBefore` · export | `var gdpGrowthBefore =` |

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
| 59 | `marketPage` | `function marketPage(` |
| 65 | `productivityPage` | `function productivityPage(` |
| 70 | `splitSpec` | `function splitSpec(` |
| 76 | `splitInfo` | `function splitInfo(` |
| 80 | `periodTicks` | `function periodTicks(` |
| 85 | `periodOfSeries` | `function periodOfSeries(` |
| 86 | `drawSplit` | `function drawSplit(` |
| 103 | `mountSplit` | `function mountSplit(` |
| 116 | `splitPeek` | `function splitPeek(` |
| 123 | `indicatorPeeks` · export | `function indicatorPeeks(` |
| 131 | `deficitPeek` | `function deficitPeek(` |
| 135 | `catSheet` · export | `function catSheet(` |
| 140 | `groupId` · export | `function groupId(` |
| 141 | `groupCard` | `function groupCard(` |
| 149 | `groupSheet` | `function groupSheet(` |
| 156 | `appendPicks` · export | `function appendPicks(` |
| 164 | `doorSel` | `function doorSel(` |
| 165 | `catPicks` · export | `function catPicks(` |

#### The split indicators' insights

| Line | Name | Anchor |
|---|---|---|
| 177 | `buffettInsight` | `function buffettInsight(` |
| 192 | `debtInsight` | `function debtInsight(` |
| 207 | `productivityInsight` | `function productivityInsight(` |
| 217 | `confidenceInsight` | `function confidenceInsight(` |
| 228 | `desireInsight` | `function desireInsight(` |
| 239 | `ORDINAL` | `var ORDINAL =` |
| 240 | `marketInsight` | `function marketInsight(` |
| 252 | `interestInsight` | `function interestInsight(` |

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
| 48 | `insightWeather` | `function insightWeather(` |
| 88 | `seasonCards` | `function seasonCards(` |
| 94 | `marketCycleCard` | `function marketCycleCard(` |
| 106 | `MOOD_CHART` | `var MOOD_CHART =` |
| 113 | `MOOD_SRC` | `var MOOD_SRC =` |
| 118 | `curvePath` | `function curvePath(` |
| 126 | `moodCallout` | `function moodCallout(` |
| 130 | `moodCycleSvg` | `function moodCycleSvg(` |
| 142 | `isRead` | `function isRead(` |
| 143 | `moodInfo` | `function moodInfo(` |
| 152 | `moodFigures` | `function moodFigures(` |
| 158 | `moodCard` | `function moodCard(` |
| 162 | `insightMood` | `function insightMood(` |
| 168 | `storyBeats` | `function storyBeats(` |
| 179 | `storyText` | `function storyText(` |
| 184 | `replaceInsights` · export | `function replaceInsights(` |

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
| 235 | calendar tab (yearly view, one card per year grouped into five eras — see marketCycles below) |
| 271 | season strip |
| 297 | THE GAP (Keren, V385: "…so if one day I'll tell you I want the spacing to be 30, you would just change |
| 361 | tab bar (app-style segmented navigation) |
| 396 | vitals strip (health-app framing: two at-a-glance rings, Growth and Rates, built from data used |
| 411 | temperature chart (Cycle tab), after Natural Cycles' temperature view: a column per month of the |
| 484 | journal (editorial content tab) |
| 490 | content tab: reading companion |
| 539 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
| 730 | Volume's red ramp (Keren, V389: "volume is, in gynaecology, blood — so it should be different shades of |
| 774 | the maturity chart's columns wear the curve's three zones (Keren, V394: "a colour that represents the |
| 847 | One gap between an inner page's containers (Keren, V381: "the spacing between containers in each inner |
| 1,016 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 1,031 | The symptoms: a cycle's years against today |
| 1,108 | hero: yield curve |
| 1,138 | the readout (Keren, from Apple Health): it never changes the page's height, which is why it beats a |
| 1,157 | 10Y-3M spread history (quarterly, with recession bands) |
| 1,184 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 1,192 | long cycle (structural layer) |
| 1,199 | indicator grid |
| 1,225 | info icon + popover (progressive disclosure for longer notes) |
| 1,239 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 1,324 | footer |

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

