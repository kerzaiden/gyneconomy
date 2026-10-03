# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,583 lines** in 29 files, about 540 KB, roughly **153 thousand tokens**. No session can
read it whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Use the **anchor** column with grep —
> `grep -rn 'function curveVerdict(' src/` — and treat `file:line` as rough orientation only.

Generated from commit `a8ce4a7` on 2026-10-03.

## The page

`src/manifest.json` joins these parts into `index.html`. The `.js` entry is bundled by esbuild
(`tools/bundle.js`) into one script in its place.

| Part | Lines | What |
|---|---|---|
| `page-head.html` | 5 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist |
| `styles.css` | 1,368 | the whole stylesheet, every token and rule |
| `page-body.html` | 390 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| `js/main.js` | 25 modules | the entry: imports every module and calls their boots in order |
| `page-tail.html` | 45 | the bundle's closing tag, the service-worker registration, </body></html> |

Counts: **25** modules, **500** top-level functions, **153** top-level vars, **378** exported names, **16** boots.

## Modules, in boot order

| Module | Lines | Declarations | Imports from |
|---|---|---|---|
| `js/dom.js` | 120 | 20 | `format` |
| `js/refresh-season.js` | 40 | 7 | `format`, `history-fred` |
| `js/live.js` | 91 | 14 | `format` |
| `js/repaint.js` | 244 | 20 | `data`, `diagnosis`, `dom`, `era`, `format`, `insights`, `live`, `model`, `readings`, `refresh-season`, `render-core`, `roster` |
| `js/data.js` | 497 | 78 | `format`, `history-fred`, `live` |
| `js/readings.js` | 743 | 67 | `charts`, `data`, `dom`, `format`, `history`, `history-fred`, `live`, `model`, `refresh-season` |
| `js/history.js` | 458 | 43 | `charts`, `data`, `dom`, `format`, `live`, `model` |
| `js/roster.js` | 144 | 18 | `charts`, `data`, `format`, `history`, `history-fred`, `live`, `marks`, `readings`, `refresh-season` |
| `js/model.js` | 331 | 48 | `data`, `dom`, `format`, `history-fred`, `refresh-season` |
| `js/render-core.js` | 574 | 44 | `charts`, `data`, `dom`, `format`, `history`, `history-charts`, `live`, `model`, `readings`, `refresh-season`, `roster` |
| `js/render-pages.js` | 494 | 20 | `charts`, `data`, `dom`, `format`, `history`, `history-charts`, `history-fred`, `live`, `model`, `readings`, `refresh-season`, `render-core` |
| `js/dial-cycle.js` | 430 | 22 | `data`, `diagnosis`, `dom`, `format`, `live`, `model`, `refresh-season`, `render-core`, `render-pages`, `roster` |
| `js/pages-nav.js` | 659 | 31 | `charts`, `data`, `dial-cycle`, `dom`, `era`, `format`, `history`, `history-charts`, `indicators`, `insights`, `live`, `model`, `readings`, `refresh-season`, `render-core`, `render-pages`, `roster` |
| `js/diagnosis.js` | 83 | 17 | `dom`, `era`, `format`, `live`, `marks`, `model`, `refresh-season`, `roster` |
| `js/analysis.js` | 239 | 21 | `charts`, `data`, `dial-cycle`, `dom`, `era`, `format`, `history`, `insights`, `live`, `model`, `refresh-season`, `render-pages`, `roster` |
| `js/tabs-menu.js` | 189 | 4 | `data`, `dial-cycle`, `dom`, `format`, `live`, `model`, `refresh-season`, `render-pages` |
| `js/charts.js` | 328 | 43 | `format` |
| `js/era.js` | 61 | 14 | `format`, `roster` |
| `js/format.js` | 57 | 30 | — |
| `js/history-charts.js` | 461 | 12 | `charts`, `data`, `format`, `history`, `history-fred`, `model`, `readings`, `refresh-season` |
| `js/history-fred.js` | 15 | 12 | — |
| `js/indicators.js` | 238 | 29 | `charts`, `data`, `dom`, `format`, `history`, `history-fred`, `model`, `readings`, `refresh-season`, `render-core`, `roster` |
| `js/insights.js` | 184 | 17 | `data`, `dom`, `era`, `format`, `model`, `readings`, `refresh-season`, `roster` |
| `js/marks.js` | 61 | 22 | — |
| `js/main.js` | 34 | 0 | `analysis`, `data`, `diagnosis`, `dial-cycle`, `dom`, `history`, `live`, `model`, `pages-nav`, `readings`, `refresh-season`, `render-core`, `render-pages`, `repaint`, `roster`, `tabs-menu` |

## The boots

A module's top level holds only declarations and values that need nothing else. Whatever runs
at load and reads another module sits in its `boot…()` function, and `js/main.js` calls them in
this order. `tools/load-order.js` proves no shared value is read before something sets it.

| Order | Boot | Lines |
|---|---|---|
| 1 | `bootDom` | `js/dom.js:110`–119 |
| 2 | `bootRefreshSeason` | `js/refresh-season.js:30`–39 |
| 3 | `bootLive` | `js/live.js:85`–90 |
| 4 | `bootRepaint` | `js/repaint.js:163`–243 |
| 5 | `bootData` | `js/data.js:449`–496 |
| 6 | `bootReadings` | `js/readings.js:635`–742 |
| 7 | `bootHistory` | `js/history.js:433`–457 |
| 8 | `bootRoster` | `js/roster.js:83`–143 |
| 9 | `bootModel` | `js/model.js:278`–330 |
| 10 | `bootRenderCore` | `js/render-core.js:563`–573 |
| 11 | `bootRenderPages` | `js/render-pages.js:476`–493 |
| 12 | `bootDialCycle` | `js/dial-cycle.js:406`–429 |
| 13 | `bootPagesNav` | `js/pages-nav.js:651`–658 |
| 14 | `bootDiagnosis` | `js/diagnosis.js:79`–82 |
| 15 | `bootAnalysis` | `js/analysis.js:234`–238 |
| 16 | `bootTabsMenu` | `js/tabs-menu.js:179`–188 |

## Script, module by module

Each module's banner comments are its spine. Each declaration is listed under the section it
falls in. **export** marks a name other modules import.

### `js/dom.js`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 3 | `byId` · export | `function byId(` |
| 11 | `byIdMaybe` · export | `function byIdMaybe(` |
| 12 | `put` · export | `function put(` |
| 17 | `elFrom` · export | `function elFrom(` |
| 18 | `LAYERS` | `var LAYERS =` |
| 19 | `layer` · export | `function layer(` |
| 20 | `onScreen` · export | `function onScreen(` |
| 21 | `focusQuiet` · export | `function focusQuiet(` |
| 22 | `tabStops` | `function tabStops(` |
| 26 | `keepTab` | `function keepTab(` |
| 32 | `rovingKeys` · export | `function rovingKeys(` |
| 47 | `moreRow` · export | `function moreRow(` |
| 53 | `appendSvgMarkup` · export | `function appendSvgMarkup(` |
| 61 | `allSources` · export | `var allSources =` |
| 75 | `addSources` · export | `function addSources(` |
| 86 | `SVG_NS` | `var SVG_NS =` |
| 87 | `svgEl` · export | `function svgEl(` |
| 92 | `detailTexts` · export | `var detailTexts =` |
| 93 | `detailSlot` · export | `function detailSlot(` |
| 103 | `expandBtn` · export | `function expandBtn(` |

### `js/refresh-season.js`

#### Layers: Escape closes only the topmost open layer; Tab stays inside a dialog

| Line | Name | Anchor |
|---|---|---|
| 6 | `hubTodayHtml` · export | `function hubTodayHtml(` |
| 10 | `asOfLabel` · export | `function asOfLabel(` |

#### SEASON

| Line | Name | Anchor |
|---|---|---|
| 15 | `wheelMeta` · export | `var wheelMeta =` |
| 23 | `seasonOverride` · export | `var seasonOverride =` |
| 24 | `cycleNowNote` · export | `var cycleNowNote =` |
| 25 | `cpiYoYHistory` · export | `var cpiYoYHistory =` |
| 26 | `gdpQuarterlyYoY` · export | `var gdpQuarterlyYoY =` |

### `js/live.js`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 3 | `liveAsOf` · export | `var liveAsOf =` |
| 4 | `merge` · export | `function merge(` |
| 11 | `docValue` · export | `function docValue(` |
| 20 | `docOk` · export | `function docOk(` |
| 24 | `plainText` · export | `function plainText(` |
| 29 | `LIVE` · export | `function LIVE(` |
| 36 | `liveIsoOf` · export | `function liveIsoOf(` |
| 39 | `liveInto` · export | `function liveInto(` |

#### The first series to come from outside the file

| Line | Name | Anchor |
|---|---|---|
| 44 | `repaintLive` · export | `function repaintLive(` |
| 49 | `shapeOk` · export | `function shapeOk(` |
| 55 | `GYN` · export | `var GYN =` |
| 79 | `setLIVE_CACHE` · export | `function setLIVE_CACHE(` |
| 80 | `setREADINGS` · export | `function setREADINGS(` |
| 81 | `setLIVE_NAMES` · export | `function setLIVE_NAMES(` |

### `js/repaint.js`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 14 | `paintReading` | `function paintReading(` |
| 27 | `repaintVolatilityRing` | `function repaintVolatilityRing(` |
| 33 | `paintTag` | `function paintTag(` |
| 40 | `repaintVolatility` | `function repaintVolatility(` |
| 44 | `repaintPressureRow` | `function repaintPressureRow(` |
| 49 | `repaintPressureChart` | `function repaintPressureChart(` |
| 53 | `desireRow` | `function desireRow(` |
| 54 | `repaintDesire` | `function repaintDesire(` |
| 62 | `syncCapeHistory` | `function syncCapeHistory(` |
| 67 | `repaintValuationRow` | `function repaintValuationRow(` |
| 72 | `isNum` | `function isNum(` |
| 73 | `rowsOk` | `function rowsOk(` |
| 76 | `KINDS` | `var KINDS =` |
| 77 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 91 | `receive` | `function receive(` |
| 107 | `applyLive` | `function applyLive(` |
| 120 | `repaintPolicy` | `function repaintPolicy(` |
| 126 | `refreshLiveData` | `function refreshLiveData(` |
| 143 | `fetchSiteData` | `function fetchSiteData(` |
| 158 | `repaintDiagnosis` | `function repaintDiagnosis(` |

### `js/data.js`

#### DATA (single source of truth — edit here on refresh)

| Line | Name | Anchor |
|---|---|---|
| 7 | `yieldCurve` · export | `var yieldCurve =` |
| 12 | `YIELD_CURVE_ASOF` | `var YIELD_CURVE_ASOF =` |
| 13 | `curveAsOf` · export | `function curveAsOf(` |
| 16 | `t10y3mRecessions` · export | `var t10y3mRecessions =` |

#### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

| Line | Name | Anchor |
|---|---|---|
| 21 | `uninvLagCycles` · export | `var uninvLagCycles =` |
| 27 | `uninvLagToday` · export | `var uninvLagToday =` |
| 31 | `gdpSrc` · export | `var gdpSrc =` |
| 33 | `labPanel` | `var labPanel =` |
| 62 | `labRow` · export | `function labRow(` |
| 63 | `PRODUCTIVITY_TREND` · export | `var PRODUCTIVITY_TREND =` |

#### Consumer confidence

| Line | Name | Anchor |
|---|---|---|
| 65 | `CONFIDENCE_LINE` · export | `var CONFIDENCE_LINE =` |

#### The deficit, year by year

| Line | Name | Anchor |
|---|---|---|
| 68 | `DEF_FROM_YEAR` · export | `var DEF_FROM_YEAR =` |
| 69 | `deficitHistory` · export | `var deficitHistory =` |
| 70 | `DEF_MEAN` · export | `var DEF_MEAN =` |
| 71 | `DEF_RECESSION_FY` · export | `var DEF_RECESSION_FY =` |
| 73 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 78 | `fedFunds` · export | `var fedFunds =` |
| 80 | `fedFundsRange` · export | `function fedFundsRange(` |
| 84 | `buffettHistory` · export | `var buffettHistory =` |
| 85 | `HY_NORM_LO` · export | `var HY_NORM_LO =` |
| 86 | `hyDates` · export | `var hyDates =` |
| 87 | `hyOas` · export | `var hyOas =` |
| 88 | `checkDesireWindow` | `function checkDesireWindow(` |
| 94 | `hyAt` · export | `function hyAt(` |
| 98 | `hyLabel` · export | `function hyLabel(` |
| 99 | `hyNum` · export | `function hyNum(` |
| 100 | `hyQuarters` · export | `function hyQuarters(` |
| 108 | `hyQuarterEnds` · export | `function hyQuarterEnds(` |
| 109 | `capeHistory` · export | `var capeHistory =` |
| 110 | `longCycleSrc` · export | `var longCycleSrc =` |
| 125 | `checkGrossDebt` | `function checkGrossDebt(` |
| 137 | `sentiment` · export | `var sentiment =` |
| 152 | `valuation` · export | `var valuation =` |
| 172 | `valRow` · export | `function valRow(` |
| 176 | `CAPE_FAIR` · export | `var CAPE_FAIR =` |
| 177 | `PULSE_PRE2008` · export | `var PULSE_PRE2008 =` |
| 178 | `M2V_FROM_YEAR` · export | `var M2V_FROM_YEAR =` |
| 179 | `m2vHistory` · export | `var m2vHistory =` |
| 180 | `PRODUCTIVITY_SRC` · export | `var PRODUCTIVITY_SRC =` |
| 185 | `CONFIDENCE_SRC` · export | `var CONFIDENCE_SRC =` |
| 189 | `checkVelocityHistory` | `function checkVelocityHistory(` |
| 194 | `M2_FROM_YEAR` · export | `var M2_FROM_YEAR =` |
| 195 | `m2Level` | `var m2Level =` |
| 196 | `m2Yoy` · export | `var m2Yoy =` |
| 197 | `M2_NORM` · export | `var M2_NORM =` |
| 198 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 199 | `unempHistory` · export | `var unempHistory =` |
| 203 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 211 | `NROU_NOW` · export | `var NROU_NOW =` |
| 212 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 219 | `ACT_BAND_LO` · export | `var ACT_BAND_LO =` |
| 220 | `CPI_TARGET` · export | `var CPI_TARGET =` |
| 221 | `GDP_NORM` · export | `var GDP_NORM =` |
| 222 | `checkMoneyStock` | `function checkMoneyStock(` |
| 228 | `seasonReading` · export | `var seasonReading =` |
| 272 | `frameworkRows` · export | `var frameworkRows =` |
| 281 | `VIX_CALM` · export | `var VIX_CALM =` |
| 282 | `VIX_CONVENTION` · export | `var VIX_CONVENTION =` |
| 286 | `DSR_FROM_YEAR` · export | `var DSR_FROM_YEAR =` |
| 287 | `dsrHistory` · export | `var dsrHistory =` |
| 288 | `SAV_FROM_YEAR` · export | `var SAV_FROM_YEAR =` |
| 289 | `savHistory` · export | `var savHistory =` |
| 290 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 298 | `SAV_OFFSET` · export | `var SAV_OFFSET =` |
| 299 | `dsrNow` · export | `var dsrNow =` |
| 300 | `savNow` · export | `var savNow =` |
| 301 | `DSR_MEAN` · export | `var DSR_MEAN =` |
| 302 | `curveNoteFull` · export | `var curveNoteFull =` |
| 313 | `VOL_JOIN` · export | `var VOL_JOIN =` |
| 314 | `sp500AnnualReturnSource` · export | `var sp500AnnualReturnSource =` |
| 319 | `marketCycles` · export | `var marketCycles =` |
| 435 | `typicalCycleYears` · export | `var typicalCycleYears =` |
| 436 | `typicalCycleSrc` · export | `var typicalCycleSrc =` |
| 441 | `setYieldCurve` · export | `function setYieldCurve(` |
| 442 | `setSentiment` · export | `function setSentiment(` |
| 443 | `setVixRow` · export | `function setVixRow(` |
| 444 | `setValuation` · export | `function setValuation(` |
| 445 | `setFedFunds` · export | `function setFedFunds(` |

### `js/readings.js`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 11 | `productivityWord` | `function productivityWord(` |
| 22 | `confidenceWord` | `function confidenceWord(` |
| 28 | `deficitBlock` · export | `function deficitBlock(` |
| 67 | `coincident` · export | `var coincident =` |
| 106 | `deriveVolumeTag` · export | `function deriveVolumeTag(` |
| 110 | `meterFlagged` · export | `function meterFlagged(` |
| 117 | `desireInfoHtml` | `function desireInfoHtml(` |
| 140 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 154 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 167 | `confidenceInfoHtml` | `function confidenceInfoHtml(` |
| 179 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 193 | `activityInfoHtml` | `function activityInfoHtml(` |
| 212 | `temperatureInfoHtml` | `function temperatureInfoHtml(` |
| 243 | `desireBlock` | `function desireBlock(` |
| 253 | `volumeBlock` | `function volumeBlock(` |
| 265 | `velocityRecordBlock` | `function velocityRecordBlock(` |
| 276 | `volumeVerdict` | `function volumeVerdict(` |
| 283 | `unempState` · export | `function unempState(` |
| 289 | `growthInfoHtml` · export | `function growthInfoHtml(` |
| 311 | `velocityVerdict` | `function velocityVerdict(` |
| 319 | `derivePulseTag` · export | `function derivePulseTag(` |
| 323 | `lagging` · export | `var lagging =` |
| 354 | `volatilityTag` · export | `function volatilityTag(` |
| 360 | `fearCurve` · export | `function fearCurve(` |
| 365 | `curveVerdict` · export | `function curveVerdict(` |
| 370 | `valuationVerdict` · export | `function valuationVerdict(` |
| 378 | `tempCaptionFull` · export | `var tempCaptionFull =` |
| 379 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 384 | `pressureZone` · export | `function pressureZone(` |
| 390 | `HZN_BACK` | `var HZN_BACK =` |
| 391 | `hznLast` | `function hznLast(` |
| 392 | `hznRecord` | `function hznRecord(` |
| 396 | `hznBack` | `function hznBack(` |
| 397 | `horizonWord` | `function horizonWord(` |
| 403 | `horizonInfoHtml` · export | `function horizonInfoHtml(` |
| 424 | `RISK_REWARD` | `var RISK_REWARD =` |
| 429 | `RISK_RISK` | `var RISK_RISK =` |
| 434 | `riskCell` | `function riskCell(` |
| 435 | `riskMatrixBlock` · export | `function riskMatrixBlock(` |
| 465 | `riskMatrixNote` | `var riskMatrixNote =` |
| 489 | `pulseBlock` | `function pulseBlock(` |
| 505 | `householdsWord` | `function householdsWord(` |
| 512 | `dsrInfoHtml` · export | `function dsrInfoHtml(` |
| 529 | `savInfoHtml` · export | `function savInfoHtml(` |
| 546 | `vixPct` · export | `function vixPct(` |
| 550 | `volatilityRing` · export | `function volatilityRing(` |
| 555 | `volatilityDetailHtml` · export | `function volatilityDetailHtml(` |
| 569 | `marketWord` · export | `function marketWord(` |
| 573 | `marketCol` · export | `function marketCol(` |
| 574 | `marketInfoHtml` | `function marketInfoHtml(` |
| 583 | `rowReadings` · export | `function rowReadings(` |
| 584 | `indOf` · export | `function indOf(` |
| 585 | `SPREAD_DETAIL` · export | `var SPREAD_DETAIL =` |
| 586 | `policyFacts` | `function policyFacts(` |
| 593 | `policyFactRows` · export | `function policyFactRows(` |
| 599 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 600 | `growthShown` | `function growthShown(` |
| 601 | `growthShownCap` · export | `function growthShownCap(` |
| 602 | `phaseClass` · export | `function phaseClass(` |
| 603 | `activityStackHtml` | `function activityStackHtml(` |
| 613 | `seatTemperature` | `function seatTemperature(` |
| 621 | `DATED_UNIT` · export | `var DATED_UNIT =` |
| 622 | `indPeriod` · export | `function indPeriod(` |
| 627 | `setCoincident` · export | `function setCoincident(` |
| 628 | `setVix3mClose` · export | `function setVix3mClose(` |
| 629 | `setSPREAD_DETAIL` · export | `function setSPREAD_DETAIL(` |
| 630 | `setUNINV_DETAIL` · export | `function setUNINV_DETAIL(` |

### `js/history.js`

#### the history card's head

| Line | Name | Anchor |
|---|---|---|
| 9 | `HIST_NOTE` · export | `var HIST_NOTE =` |
| 10 | `DOTS` | `var DOTS =` |
| 12 | `headPickRow` · export | `function headPickRow(` |
| 18 | `histHead` · export | `function histHead(` |
| 33 | `headNoteIdx` | `var headNoteIdx =` |
| 34 | `headMenuHtml` | `function headMenuHtml(` |
| 59 | `headMenuFor` | `var headMenuFor =` |
| 60 | `headSubFor` | `var headSubFor =` |
| 61 | `paintHeadMenus` | `function paintHeadMenus(` |
| 72 | `headMoreBtn` | `function headMoreBtn(` |
| 76 | `headMenuFirst` | `function headMenuFirst(` |
| 80 | `headMenuShut` | `function headMenuShut(` |
| 85 | `histNote` · export | `function histNote(` |
| 86 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |
| 95 | `timelineSpan` · export | `function timelineSpan(` |
| 100 | `timelineFor` · export | `function timelineFor(` |
| 111 | `timelineWindow` · export | `function timelineWindow(` |
| 117 | `windowScale` · export | `function windowScale(` |
| 132 | `histReadEnsure` · export | `function histReadEnsure(` |
| 152 | `histReadFill` · export | `function histReadFill(` |
| 202 | `histAxisEnds` | `function histAxisEnds(` |
| 213 | `histLegend` · export | `function histLegend(` |
| 272 | `refitHistory` · export | `function refitHistory(` |
| 282 | `wireHistHover` | `function wireHistHover(` |
| 314 | `histShow` | `function histShow(` |
| 323 | `histKeysWire` | `function histKeysWire(` |
| 343 | `mWindowFrom` · export | `function mWindowFrom(` |
| 347 | `qWindowFrom` · export | `function qWindowFrom(` |
| 351 | `defFrom` · export | `function defFrom(` |
| 355 | `hyWindowFrom` · export | `function hyWindowFrom(` |
| 363 | `modeBar` | `function modeBar(` |
| 370 | `pickerOpen` · export | `var pickerOpen =` |
| 371 | `histControls` · export | `function histControls(` |
| 380 | `pageCycle` · export | `function pageCycle(` |
| 384 | `cyclePicker` | `function cyclePicker(` |
| 403 | `rangeBar` · export | `function rangeBar(` |
| 410 | `headSigma` · export | `function headSigma(` |
| 415 | `attachHistory` · export | `function attachHistory(` |
| 425 | `setPageMode` · export | `function setPageMode(` |
| 426 | `setPageCycles` · export | `function setPageCycles(` |
| 427 | `setPageRange` · export | `function setPageRange(` |
| 428 | `setPAGE_STOPS` · export | `function setPAGE_STOPS(` |
| 429 | `setHIST_HEAD` · export | `function setHIST_HEAD(` |

### `js/roster.js`

#### The roster: every reading, declared once

| Line | Name | Anchor |
|---|---|---|
| 12 | `TIMING` · export | `var TIMING =` |
| 18 | `CATEGORIES` · export | `var CATEGORIES =` |
| 24 | `GROUP_MARK` · export | `var GROUP_MARK =` |
| 25 | `ROSTER_BY` · export | `var ROSTER_BY =` |
| 26 | `pageState` | `function pageState(` |
| 31 | `keyed` · export | `function keyed(` |
| 38 | `hyMonths` | `function hyMonths(` |
| 41 | `lastDate` | `function lastDate(` |
| 42 | `compiledDay` | `function compiledDay(` |
| 43 | `isoLabel` | `function isoLabel(` |
| 47 | `paintWhen` · export | `function paintWhen(` |
| 52 | `labPeriod` | `function labPeriod(` |
| 53 | `rosterFor` · export | `function rosterFor(` |
| 54 | `peekOf` · export | `function peekOf(` |
| 59 | `cardDate` · export | `function cardDate(` |
| 60 | `checkRoster` | `function checkRoster(` |
| 78 | `periodOf` · export | `function periodOf(` |
| 79 | `categoriesShown` · export | `function categoriesShown(` |

### `js/model.js`

#### The season, computed

| Line | Name | Anchor |
|---|---|---|
| 8 | `slopeOf` | `function slopeOf(` |
| 13 | `monthIndex` | `function monthIndex(` |
| 14 | `cpiTrend` | `function cpiTrend(` |
| 21 | `cpiYear` | `function cpiYear(` |
| 25 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 26 | `readSeason` | `function readSeason(` |
| 45 | `QUARTER_END_MONTH` · export | `var QUARTER_END_MONTH =` |
| 46 | `SEASON_YEARS` | `var SEASON_YEARS =` |
| 47 | `closingReading` | `function closingReading(` |
| 51 | `quarterRegime` · export | `function quarterRegime(` |
| 52 | `seasonTitle` · export | `function seasonTitle(` |
| 53 | `cycleReturns` · export | `function cycleReturns(` |
| 63 | `cycleModel` · export | `function cycleModel(` |
| 94 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 102 | `seasonWhyFor` | `function seasonWhyFor(` |
| 108 | `seasonGroup` · export | `function seasonGroup(` |

#### The diagnosis: how she feels, and what has followed

| Line | Name | Anchor |
|---|---|---|
| 110 | `rankToDate` | `function rankToDate(` |
| 114 | `marketCache` | `var marketCache =` |
| 115 | `marketMonths` · export | `function marketMonths(` |
| 122 | `yearAfter` · export | `function yearAfter(` |
| 126 | `diagnoseToday` · export | `function diagnoseToday(` |

#### Her mood: one range from Depression to Mania

| Line | Name | Anchor |
|---|---|---|
| 131 | `rankIn` | `function rankIn(` |
| 136 | `moodLists` | `var moodLists =` |
| 137 | `moodSeries` | `function moodSeries(` |
| 145 | `moodAt` | `function moodAt(` |
| 151 | `MOOD_TURN` · export | `var MOOD_TURN =` |
| 152 | `MOOD_RISING` | `var MOOD_RISING =` |
| 153 | `MOOD_FALLING` | `var MOOD_FALLING =` |
| 154 | `moodWord` | `function moodWord(` |
| 158 | `moodRead` | `function moodRead(` |
| 165 | `moodCache` | `var moodCache =` |
| 166 | `moodTrack` · export | `function moodTrack(` |
| 172 | `moodToday` · export | `function moodToday(` |
| 176 | `cycleStory` · export | `function cycleStory(` |

#### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

| Line | Name | Anchor |
|---|---|---|
| 187 | `cycleSpanYears` · export | `function cycleSpanYears(` |
| 190 | `cycleByName` · export | `function cycleByName(` |
| 194 | `openCycle` · export | `function openCycle(` |
| 198 | `cycleSlice` · export | `function cycleSlice(` |
| 206 | `totalGrowthYears` · export | `function totalGrowthYears(` |
| 214 | `cycleMonths` · export | `function cycleMonths(` |
| 222 | `cycLabel` · export | `function cycLabel(` |
| 226 | `cycleQtrIdx` · export | `function cycleQtrIdx(` |
| 231 | `totalRiseIn` · export | `function totalRiseIn(` |
| 241 | `eraInflation` · export | `function eraInflation(` |
| 251 | `eraGrowth` · export | `function eraGrowth(` |
| 267 | `eraMarketTotal` · export | `function eraMarketTotal(` |
| 272 | `setMoodLists` · export | `function setMoodLists(` |
| 273 | `setMoodCache` · export | `function setMoodCache(` |

### `js/render-core.js`

#### RENDER: range bars + card helpers

| Line | Name | Anchor |
|---|---|---|
| 14 | `metricSheet` · export | `function metricSheet(` |
| 19 | `sheetRenderers` · export | `var sheetRenderers =` |
| 20 | `drawsPage` · export | `function drawsPage(` |
| 21 | `wireDetailModal` | `function wireDetailModal(` |
| 58 | `detailClose` · export | `var detailClose =` |

#### THE SUBJECT ROW

| Line | Name | Anchor |
|---|---|---|
| 60 | `subjectRow` · export | `function subjectRow(` |
| 70 | `subjectIcon` · export | `function subjectIcon(` |
| 71 | `timingMark` | `function timingMark(` |
| 79 | `timingPill` · export | `function timingPill(` |
| 87 | `collapseEmptyBlocks` · export | `function collapseEmptyBlocks(` |
| 95 | `seatPageFoot` · export | `function seatPageFoot(` |
| 106 | `timingMembers` · export | `var timingMembers =` |
| 107 | `registerTiming` · export | `function registerTiming(` |
| 108 | `headHtml` | `function headHtml(` |
| 113 | `heldHighlights` · export | `var heldHighlights =` |
| 114 | `cardDetailHtml` · export | `function cardDetailHtml(` |

#### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

| Line | Name | Anchor |
|---|---|---|
| 141 | `CURVE_KEY` | `var CURVE_KEY =` |
| 142 | `latestYieldPoint` | `function latestYieldPoint(` |
| 150 | `withLatestPoint` | `function withLatestPoint(` |
| 155 | `pressureMaturities` | `function pressureMaturities(` |
| 179 | `registerFlowPages` | `function registerFlowPages(` |
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
| 447 | `renderPressureInsights` | `function renderPressureInsights(` |
| 482 | `catList` · export | `function catList(` |
| 483 | `marketPeek` · export | `function marketPeek(` |
| 488 | `drawSpreadWindow` · export | `var drawSpreadWindow =` |
| 489 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 490 | `spreadLabel` | `function spreadLabel(` |
| 494 | `openIndicatorsPage` | `var openIndicatorsPage =` |
| 495 | `peekArt` | `function peekArt(` |
| 496 | `catItem` · export | `function catItem(` |
| 504 | `catCard` · export | `function catCard(` |
| 546 | `tempPeek` · export | `function tempPeek(` |
| 552 | `gdpPeek` · export | `function gdpPeek(` |
| 558 | `setHeldHighlights` · export | `function setHeldHighlights(` |
| 559 | `setOpenIndicatorsPage` · export | `function setOpenIndicatorsPage(` |
| 560 | `setDrawSpreadWindow` · export | `function setDrawSpreadWindow(` |
| 561 | `setDrawSpreadView` · export | `function setDrawSpreadView(` |

### `js/render-pages.js`

#### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

| Line | Name | Anchor |
|---|---|---|
| 15 | `spreadSeries` | `function spreadSeries(` |
| 59 | `renderSpreadHistory` | `function renderSpreadHistory(` |

#### RENDER: un-inversion-to-recession historical lag panel

| Line | Name | Anchor |
|---|---|---|
| 184 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

#### RENDER: the Treasury spreads, inside Pressure

| Line | Name | Anchor |
|---|---|---|
| 209 | `renderHorizonPage` | `function renderHorizonPage(` |
| 233 | `spreadInsights` | `function spreadInsights(` |

#### RENDER: Valuation (slow)

| Line | Name | Anchor |
|---|---|---|
| 262 | `renderValuationTag` | `function renderValuationTag(` |

#### RENDER: Hormones

| Line | Name | Anchor |
|---|---|---|
| 268 | `renderHormones` | `function renderHormones(` |

#### RENDER: Volatility — the VIX since 1986, and the shape of its curve today

| Line | Name | Anchor |
|---|---|---|
| 364 | `renderVolatility` | `function renderVolatility(` |
| 409 | `volatilityHighlights` | `function volatilityHighlights(` |

#### RENDER: Analysis subjects — one headline figure per collapsible section

| Line | Name | Anchor |
|---|---|---|
| 438 | `renderSubjectRows` | `function renderSubjectRows(` |

#### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

| Line | Name | Anchor |
|---|---|---|
| 458 | `shownEra` · export | `var shownEra =` |
| 459 | `calendarReset` · export | `var calendarReset =` |
| 460 | `metricPageReset` · export | `var metricPageReset =` |
| 461 | `topbarBack` · export | `var topbarBack =` |
| 462 | `setTopbar` · export | `function setTopbar(` |
| 468 | `setEraPageBack` · export | `function setEraPageBack(` |
| 469 | `setCalendarReset` · export | `function setCalendarReset(` |
| 470 | `setTopbarBack` · export | `function setTopbarBack(` |
| 471 | `setShownEra` · export | `function setShownEra(` |
| 472 | `setMetricPageReset` · export | `function setMetricPageReset(` |

### `js/dial-cycle.js`

#### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

| Line | Name | Anchor |
|---|---|---|
| 13 | `drawDial` | `function drawDial(` |

#### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

| Line | Name | Anchor |
|---|---|---|
| 95 | `wireThemeChoice` | `function wireThemeChoice(` |

#### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

| Line | Name | Anchor |
|---|---|---|
| 114 | `renderCycleKicker` | `function renderCycleKicker(` |

#### the hub: the reading inside the circle

| Line | Name | Anchor |
|---|---|---|
| 135 | `hubSet` | `function hubSet(` |
| 143 | `hubOpen` | `function hubOpen(` |
| 150 | `quarterCards` | `function quarterCards(` |
| 161 | `quarterSheet` | `function quarterSheet(` |
| 166 | `quarterPopup` | `function quarterPopup(` |
| 188 | `hubShowDefault` | `function hubShowDefault(` |
| 195 | `hubShowQuarter` | `function hubShowQuarter(` |
| 200 | `hubShowYear` | `function hubShowYear(` |
| 210 | `renderCycleDial` | `function renderCycleDial(` |
| 293 | `dialKeyStep` | `function dialKeyStep(` |
| 301 | `dialSay` | `function dialSay(` |

#### the whole view, for one cycle

| Line | Name | Anchor |
|---|---|---|
| 307 | `renderCycleView` · export | `function renderCycleView(` |
| 312 | `shownEraModel` | `var shownEraModel =` |
| 313 | `showCycle` · export | `function showCycle(` |

#### A cycle's season strip (carried by the one cycle row)

| Line | Name | Anchor |
|---|---|---|
| 315 | `stripGroupName` | `var stripGroupName =` |
| 316 | `seasonStripHtml` · export | `function seasonStripHtml(` |
| 344 | `marketStripHtml` · export | `function marketStripHtml(` |
| 377 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 378 | `settleStrips` · export | `function settleStrips(` |

### `js/pages-nav.js`

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
| 164 | `NAV` | `var NAV =` |
| 165 | `buildNav` | `function buildNav(` |

#### ALL INDICATORS

| Line | Name | Anchor |
|---|---|---|
| 260 | `buildSearch` | `function buildSearch(` |

#### THE CYCLE TAB: cards and categories

| Line | Name | Anchor |
|---|---|---|
| 307 | `PAIR_ART` | `var PAIR_ART =` |
| 313 | `placeSignPair` | `function placeSignPair(` |
| 336 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 352 | `buildCategories` | `function buildCategories(` |
| 368 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

#### THE INNER PAGES

| Line | Name | Anchor |
|---|---|---|
| 395 | `actCycleMonths` | `function actCycleMonths(` |
| 403 | `householdsHighlights` | `function householdsHighlights(` |
| 422 | `redrawSheet` | `function redrawSheet(` |
| 426 | `registerTempGdpPages` | `function registerTempGdpPages(` |
| 471 | `registerActivityPowerDeficitPages` | `function registerActivityPowerDeficitPages(` |
| 508 | `registerHouseholdsValuationPages` | `function registerHouseholdsValuationPages(` |
| 555 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 585 | `valuationHighlights` | `function valuationHighlights(` |
| 598 | `tempHighlights` | `function tempHighlights(` |
| 615 | `gdpHighlights` | `function gdpHighlights(` |
| 630 | `renderMetricPages` | `function renderMetricPages(` |
| 639 | `renderPagesAndNav` | `function renderPagesAndNav(` |

### `js/diagnosis.js`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 10 | `DIAG_SRC` | `var DIAG_SRC =` |
| 14 | `pct` | `function pct(` |
| 15 | `eraEnds` | `function eraEnds(` |
| 22 | `eraMove` | `function eraMove(` |
| 26 | `HORMONES` | `var HORMONES =` |
| 27 | `analysisFor` | `function analysisFor(` |
| 33 | `dxRow` | `function dxRow(` |
| 34 | `dxText` | `function dxText(` |
| 35 | `dxSection` | `function dxSection(` |
| 36 | `systemHtml` | `function systemHtml(` |
| 39 | `dxHead` | `function dxHead(` |
| 44 | `diagnosisHtml` | `function diagnosisHtml(` |
| 53 | `acrossCycle` | `function acrossCycle(` |
| 60 | `moodDoor` | `function moodDoor(` |
| 65 | `trendText` | `function trendText(` |
| 66 | `renderDiagnosis` · export | `function renderDiagnosis(` |
| 70 | `buildDiagnosis` | `function buildDiagnosis(` |

### `js/analysis.js`

#### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

| Line | Name | Anchor |
|---|---|---|
| 16 | `CYCLE_DATA_KEY` | `var CYCLE_DATA_KEY =` |
| 17 | `cycleDataOn` | `function cycleDataOn(` |
| 18 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 38 | `wireCycleData` | `function wireCycleData(` |
| 53 | `renderCycleList` | `function renderCycleList(` |

#### A closed cycle, shown on the Cycle tab's own page

| Line | Name | Anchor |
|---|---|---|
| 95 | `taHome` | `var taHome =` |
| 96 | `eraReading` | `function eraReading(` |
| 106 | `eraValue` | `function eraValue(` |
| 112 | `eraRange` | `function eraRange(` |
| 117 | `eraMini` | `function eraMini(` |
| 122 | `eraCard` | `function eraCard(` |
| 141 | `eraCards` | `function eraCards(` |
| 147 | `eraShow` | `function eraShow(` |
| 154 | `enterEra` | `function enterEra(` |
| 161 | `leaveEra` | `function leaveEra(` |

#### RENDER: the symptoms — the years of a cycle a reading sat where it sits today

| Line | Name | Anchor |
|---|---|---|
| 169 | `cycleSymptoms` | `function cycleSymptoms(` |
| 193 | `placeWords` | `function placeWords(` |
| 197 | `symptomNote` | `function symptomNote(` |
| 204 | `symptomRow` | `function symptomRow(` |
| 211 | `cycleTrack` | `function cycleTrack(` |
| 226 | `symptomLegend` | `function symptomLegend(` |

### `js/tabs-menu.js`

#### RENDER: About Gyneconomy — the season model and the framework

| Line | Name | Anchor |
|---|---|---|
| 11 | `renderSeasonRows` | `function renderSeasonRows(` |

#### TAB NAVIGATION (Cycle / Analysis / Search / Portfolio)

| Line | Name | Anchor |
|---|---|---|
| 59 | `renderTopbar` | `function renderTopbar(` |
| 88 | `wireTabKeys` | `function wireTabKeys(` |

#### MENU (the top bar's hamburger): a full-screen sheet, closed by its back arrow or Escape

| Line | Name | Anchor |
|---|---|---|
| 90 | `wireContactForm` | `function wireContactForm(` |

### `js/charts.js`

#### The range bar

| Line | Name | Anchor |
|---|---|---|
| 5 | `trendOf` · export | `function trendOf(` |
| 20 | `TREND_ARROW` | `var TREND_ARROW =` |
| 24 | `trendPill` · export | `function trendPill(` |

#### The inner pages' charts

| Line | Name | Anchor |
|---|---|---|
| 38 | `xLabelOf` | `function xLabelOf(` |
| 47 | `fitLine` · export | `function fitLine(` |
| 51 | `fitGroup` · export | `function fitGroup(` |

#### The history component's axes

| Line | Name | Anchor |
|---|---|---|
| 68 | `vGrid` · export | `function vGrid(` |
| 72 | `COL_FILL` | `var COL_FILL =` |
| 73 | `colPath` · export | `function colPath(` |
| 78 | `colWidth` · export | `function colWidth(` |
| 83 | `AXIS` · export | `var AXIS =` |
| 84 | `histFrame` · export | `function histFrame(` |
| 91 | `xLabel` · export | `function xLabel(` |
| 94 | `crossLine` · export | `function crossLine(` |
| 97 | `zeroRule` · export | `function zeroRule(` |
| 100 | `meanRule` · export | `function meanRule(` |
| 101 | `pendingGeom` · export | `var pendingGeom =` |
| 102 | `publishGeom` · export | `function publishGeom(` |
| 103 | `histBar` · export | `function histBar(` |
| 106 | `histTip` · export | `function histTip(` |
| 107 | `avgRule` · export | `function avgRule(` |
| 110 | `vhOpen` · export | `function vhOpen(` |
| 111 | `chartAxes` · export | `function chartAxes(` |
| 140 | `divergeChart` · export | `function divergeChart(` |

#### A series' highest reading within a span

| Line | Name | Anchor |
|---|---|---|
| 174 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 175 | `PEEK_W` | `var PEEK_W =` |
| 176 | `PEEK_H` | `var PEEK_H =` |
| 177 | `colPeek` · export | `function colPeek(` |
| 194 | `meterPeek` | `function meterPeek(` |
| 210 | `windowYears` · export | `function windowYears(` |
| 218 | `refName` | `function refName(` |
| 222 | `PULSE_WINDOW` · export | `var PULSE_WINDOW =` |
| 223 | `PULSE_WINDOW_PEEK` | `var PULSE_WINDOW_PEEK =` |
| 224 | `pulseClipN` | `var pulseClipN =` |
| 225 | `beatPath` | `function beatPath(` |
| 242 | `pulseTraceSvg` · export | `function pulseTraceSvg(` |
| 256 | `pulsePeek` · export | `function pulsePeek(` |
| 259 | `peekCard` · export | `function peekCard(` |
| 277 | `vitalRingSvg` · export | `function vitalRingSvg(` |
| 287 | `attachHoverTracking` · export | `function attachHoverTracking(` |
| 318 | `hoverAway` | `var hoverAway =` |
| 319 | `hoverAwayAdd` | `function hoverAwayAdd(` |
| 327 | `hoverAwayLive` | `function hoverAwayLive(` |

### `js/era.js`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 4 | `todayFace` | `function todayFace(` |
| 10 | `readDoor` · export | `function readDoor(` |
| 18 | `rosterRows` · export | `function rosterRows(` |
| 19 | `eraOpen` · export | `var eraOpen =` |
| 20 | `kT` · export | `function kT(` |
| 24 | `upTo` · export | `function upTo(` |
| 25 | `pairAt` · export | `function pairAt(` |
| 26 | `eraFig` · export | `function eraFig(` |
| 33 | `rosterRow` | `function rosterRow(` |
| 46 | `__roster` | `var __roster =` |
| 47 | `readingRoster` · export | `function readingRoster(` |
| 54 | `pastFigure` · export | `function pastFigure(` |
| 58 | `prettyK` · export | `function prettyK(` |
| 60 | `setEraOpen` · export | `function setEraOpen(` |

### `js/format.js`

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
| 29 | `maxIn` · export | `function maxIn(` |
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

### `js/history-charts.js`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 10 | `deficitChart` · export | `function deficitChart(` |
| 77 | `velocityHistoryChart` · export | `function velocityHistoryChart(` |
| 128 | `desireHistoryChart` · export | `function desireHistoryChart(` |
| 169 | `yearTicks` | `function yearTicks(` |
| 184 | `unempHistoryChart` · export | `function unempHistoryChart(` |
| 225 | `fedFundsHistoryChart` · export | `function fedFundsHistoryChart(` |
| 270 | `householdsChart` · export | `function householdsChart(` |
| 319 | `cpiHistoryChart` · export | `function cpiHistoryChart(` |
| 360 | `gdpHistoryChart` · export | `function gdpHistoryChart(` |
| 410 | `m2GrowthChart` · export | `function m2GrowthChart(` |
| 454 | `m2Step` · export | `function m2Step(` |
| 457 | `heatStep` · export | `function heatStep(` |

### `js/history-fred.js`

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

### `js/indicators.js`

#### The split indicators: one card and one page each

| Line | Name | Anchor |
|---|---|---|
| 14 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 20 | `meterWord` | `function meterWord(` |
| 21 | `splitPages` | `function splitPages(` |
| 38 | `confidencePage` | `function confidencePage(` |
| 44 | `marketPage` | `function marketPage(` |
| 50 | `productivityPage` | `function productivityPage(` |
| 55 | `splitSpec` | `function splitSpec(` |
| 61 | `splitInfo` | `function splitInfo(` |
| 65 | `periodTicks` | `function periodTicks(` |
| 70 | `periodOfSeries` | `function periodOfSeries(` |
| 71 | `drawSplit` | `function drawSplit(` |
| 88 | `mountSplit` | `function mountSplit(` |
| 101 | `splitPeek` | `function splitPeek(` |
| 108 | `indicatorPeeks` · export | `function indicatorPeeks(` |
| 116 | `deficitPeek` | `function deficitPeek(` |
| 120 | `catSheet` · export | `function catSheet(` |
| 125 | `groupId` · export | `function groupId(` |
| 126 | `groupCard` | `function groupCard(` |
| 134 | `groupSheet` | `function groupSheet(` |
| 141 | `appendPicks` · export | `function appendPicks(` |
| 149 | `doorSel` | `function doorSel(` |
| 150 | `catPicks` · export | `function catPicks(` |

#### The split indicators' insights

| Line | Name | Anchor |
|---|---|---|
| 162 | `buffettInsight` | `function buffettInsight(` |
| 177 | `debtInsight` | `function debtInsight(` |
| 192 | `productivityInsight` | `function productivityInsight(` |
| 202 | `confidenceInsight` | `function confidenceInsight(` |
| 213 | `ORDINAL` | `var ORDINAL =` |
| 214 | `marketInsight` | `function marketInsight(` |
| 226 | `interestInsight` | `function interestInsight(` |

### `js/insights.js`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 10 | `insightCirculation` | `function insightCirculation(` |
| 43 | `insightWeather` | `function insightWeather(` |
| 83 | `seasonCards` | `function seasonCards(` |
| 89 | `marketCycleCard` | `function marketCycleCard(` |
| 101 | `MOOD_CHART` | `var MOOD_CHART =` |
| 108 | `MOOD_SRC` | `var MOOD_SRC =` |
| 113 | `curvePath` | `function curvePath(` |
| 121 | `moodCallout` | `function moodCallout(` |
| 125 | `moodCycleSvg` | `function moodCycleSvg(` |
| 137 | `moodInfo` | `function moodInfo(` |
| 146 | `moodFigures` | `function moodFigures(` |
| 152 | `moodCard` | `function moodCard(` |
| 156 | `insightMood` | `function insightMood(` |
| 162 | `storyBeats` | `function storyBeats(` |
| 173 | `storyText` | `function storyText(` |
| 177 | `INSIGHT` · export | `var INSIGHT =` |
| 178 | `replaceInsights` · export | `function replaceInsights(` |

### `js/marks.js`

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
| `deficit-range` | `js/pages-nav.js:490` |
| `pressure-range` | `js/repaint.js:51` |
| `sheet-marker-deficit` | `js/pages-nav.js:487` |
| `sheet-metric-gdp` | `js/pages-nav.js:451` |
| `sheet-metric-households` | `js/pages-nav.js:509` |
| `sheet-metric-temp` | `js/pages-nav.js:427` |
| `sheet-metric-valuation` | `js/pages-nav.js:529` |
| `sheet-sign-activity` | `js/pages-nav.js:472` |

### `pageRange`

the window a page's range control starts on

| Key | Where |
|---|---|
| `deficit-range` | `js/pages-nav.js:494` |
| `desire-range` | `js/render-core.js:215` |
| `fear-range` | `js/render-pages.js:372` |
| `pressure-range` | `js/render-core.js:420` |
| `pulse-range` | `js/render-core.js:183` |
| `sheet-metric-gdp` | `js/pages-nav.js:452` |
| `sheet-metric-temp` | `js/pages-nav.js:428` |
| `sheet-metric-valuation` | `js/pages-nav.js:530` |
| `volume-range` | `js/render-core.js:199` |

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
| 1,173 | the readout (Keren, from Apple Health): it never changes the page's height, which is why it beats a |
| 1,192 | 10Y-3M spread history (quarterly, with recession bands) |
| 1,219 | un-inversion-to-recession historical lag panel — reuses .spread-tile's card + .spread-history-head/ |
| 1,227 | long cycle (structural layer) |
| 1,234 | indicator grid |
| 1,260 | info icon + popover (progressive disclosure for longer notes) |
| 1,274 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 1,358 | footer |

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
| a figure's literal value | `var <name> = ` — the data objects are top-level vars in `js/data.js` and `js/refresh-season.js` |
| a reading's declaration | `ROSTER` in `js/roster.js` — one row per reading |
| what a history page draws | `HIST_HEAD` for its head, then `sheetRenderers["<id>"]` for its renderer |
| where a band comes from | the constant name, then read its `(i)` text — every band states its provenance |
| a season decision | `readSeason(`, `seasonTrackAll`, `cycleModel(` |
| who may change a shared value | `export function set` — a module's setters are the only writes from outside it |
| why something looks the way it does | `docs/DECISIONS.md` for Keren's decisions, `docs/ARCHITECTURE.md` for the reasons, `git log -S` for the history |
| a live-data wiring | `LIVE("` — one line per document, each directly under its literal |

