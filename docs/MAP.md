# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,731 lines** in 22 files, about 695 KB, roughly **197 thousand tokens**. No session can
read it whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Use the **anchor** column with grep —
> `grep -rn 'function curveVerdict(' src/` — and treat `file:line` as rough orientation only.

Generated from commit `3566701` on 2026-10-02.

## The page

`src/manifest.json` joins these parts into `index.html`. The `.js` entry is bundled by esbuild
(`tools/bundle.js`) into one script in its place.

| Part | Lines | What |
|---|---|---|
| `page-head.html` | 5 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist |
| `styles.css` | 1,368 | the whole stylesheet, every token and rule |
| `page-body.html` | 390 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| `js/main.js` | 18 modules | the entry: imports every module and calls their boots in order |
| `page-tail.html` | 45 | the bundle's closing tag, the service-worker registration, </body></html> |

Counts: **18** modules, **495** top-level functions, **150** top-level vars, **368** exported names, **15** boots.

## Modules, in boot order

| Module | Lines | Declarations | Imports from |
|---|---|---|---|
| `js/refresh-season.js` | 203 | 21 | — |
| `js/live.js` | 330 | 32 | `charts`, `components`, `data`, `forms`, `history`, `history-fred`, `model`, `pages-nav`, `refresh-season`, `render-core`, `roster` |
| `js/data.js` | 169 | 19 | `charts`, `history`, `history-fred`, `live`, `model`, `pages-nav`, `render-pages` |
| `js/components.js` | 686 | 51 | `charts`, `data`, `forms`, `history`, `history-fred`, `live`, `refresh-season`, `render-core` |
| `js/history.js` | 732 | 54 | `charts`, `components`, `dial-cycle`, `forms`, `history-fred`, `live`, `model`, `pages-nav`, `refresh-season`, `render-core`, `roster` |
| `js/charts.js` | 596 | 81 | `components`, `data`, `forms`, `live`, `model`, `refresh-season`, `render-core`, `roster` |
| `js/forms.js` | 418 | 51 | `charts`, `components`, `history`, `history-fred`, `live`, `model`, `render-core`, `render-pages`, `roster` |
| `js/roster.js` | 149 | 19 | `components`, `data`, `forms`, `history`, `history-fred`, `indicators`, `live`, `pages-nav`, `refresh-season` |
| `js/model.js` | 359 | 58 | `charts`, `components`, `data`, `forms`, `history-fred`, `live`, `refresh-season`, `render-core`, `render-pages` |
| `js/render-core.js` | 522 | 39 | `charts`, `components`, `data`, `forms`, `history`, `live`, `model`, `refresh-season`, `render-pages`, `roster` |
| `js/render-pages.js` | 540 | 31 | `charts`, `components`, `data`, `forms`, `history`, `history-fred`, `live`, `model`, `refresh-season`, `render-core`, `roster` |
| `js/dial-cycle.js` | 442 | 26 | `charts`, `data`, `forms`, `history`, `indicators`, `live`, `model`, `pages-nav`, `refresh-season`, `render-core`, `render-pages`, `roster` |
| `js/pages-nav.js` | 1,007 | 81 | `analysis`, `charts`, `components`, `data`, `dial-cycle`, `forms`, `history`, `indicators`, `live`, `model`, `refresh-season`, `render-core`, `render-pages`, `roster` |
| `js/analysis.js` | 276 | 31 | `charts`, `dial-cycle`, `forms`, `live`, `model`, `pages-nav`, `refresh-season`, `render-core`, `render-pages`, `roster` |
| `js/tabs-menu.js` | 189 | 4 | `charts`, `dial-cycle`, `forms`, `live`, `model`, `refresh-season`, `render-core`, `render-pages` |
| `js/history-fred.js` | 26 | 12 | — |
| `js/indicators.js` | 247 | 35 | `charts`, `components`, `data`, `forms`, `history`, `history-fred`, `model`, `pages-nav`, `refresh-season`, `render-core`, `render-pages`, `roster` |
| `js/main.js` | 32 | 0 | `analysis`, `charts`, `components`, `data`, `dial-cycle`, `forms`, `history`, `live`, `model`, `pages-nav`, `refresh-season`, `render-core`, `render-pages`, `roster`, `tabs-menu` |

## The boots

A module's top level holds only declarations and values that need nothing else. Whatever runs
at load and reads another module sits in its `boot…()` function, and `js/main.js` calls them in
this order. `tools/load-order.js` proves no shared value is read before something sets it.

| Order | Boot | Lines |
|---|---|---|
| 1 | `bootRefreshSeason` | `js/refresh-season.js:191`–202 |
| 2 | `bootLive` | `js/live.js:242`–329 |
| 3 | `bootData` | `js/data.js:106`–168 |
| 4 | `bootComponents` | `js/components.js:668`–685 |
| 5 | `bootHistory` | `js/history.js:697`–731 |
| 6 | `bootCharts` | `js/charts.js:559`–595 |
| 7 | `bootForms` | `js/forms.js:383`–417 |
| 8 | `bootRoster` | `js/roster.js:88`–148 |
| 9 | `bootModel` | `js/model.js:307`–358 |
| 10 | `bootRenderCore` | `js/render-core.js:510`–521 |
| 11 | `bootRenderPages` | `js/render-pages.js:522`–539 |
| 12 | `bootDialCycle` | `js/dial-cycle.js:418`–441 |
| 13 | `bootPagesNav` | `js/pages-nav.js:997`–1,006 |
| 14 | `bootAnalysis` | `js/analysis.js:271`–275 |
| 15 | `bootTabsMenu` | `js/tabs-menu.js:179`–188 |

## Script, module by module

Each module's banner comments are its spine. Each declaration is listed under the section it
falls in. **export** marks a name other modules import.

### `js/refresh-season.js`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 1 | `byId` · export | `function byId(` |
| 9 | `byIdMaybe` · export | `function byIdMaybe(` |
| 10 | `put` · export | `function put(` |
| 15 | `elFrom` · export | `function elFrom(` |

#### Layers: Escape closes only the topmost open layer; Tab stays inside a dialog

| Line | Name | Anchor |
|---|---|---|
| 17 | `LAYERS` | `var LAYERS =` |
| 18 | `layer` · export | `function layer(` |
| 19 | `onScreen` · export | `function onScreen(` |
| 20 | `focusQuiet` · export | `function focusQuiet(` |
| 21 | `tabStops` | `function tabStops(` |
| 25 | `keepTab` | `function keepTab(` |
| 31 | `rovingKeys` · export | `function rovingKeys(` |
| 46 | `MONTHS_SHORT` · export | `var MONTHS_SHORT =` |
| 47 | `hubTodayHtml` · export | `function hubTodayHtml(` |
| 51 | `asOfLabel` · export | `function asOfLabel(` |

#### SEASON

| Line | Name | Anchor |
|---|---|---|
| 56 | `wheelMeta` · export | `var wheelMeta =` |
| 64 | `seasonOverride` · export | `var seasonOverride =` |
| 65 | `cycleNowNote` · export | `var cycleNowNote =` |
| 66 | `cpiYoYHistory` · export | `var cpiYoYHistory =` |
| 144 | `gdpQuarterlyYoY` · export | `var gdpQuarterlyYoY =` |
| 186 | `setCpiYoYHistory` · export | `function setCpiYoYHistory(` |
| 187 | `setGdpQuarterlyYoY` · export | `function setGdpQuarterlyYoY(` |

### `js/live.js`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 13 | `liveAsOf` | `var liveAsOf =` |
| 14 | `merge` · export | `function merge(` |
| 21 | `docValue` | `function docValue(` |
| 30 | `docOk` | `function docOk(` |
| 34 | `LIVE` · export | `function LIVE(` |
| 41 | `liveIsoOf` · export | `function liveIsoOf(` |
| 44 | `liveInto` · export | `function liveInto(` |
| 48 | `fedFunds` · export | `var fedFunds =` |

#### The first series to come from outside the file

| Line | Name | Anchor |
|---|---|---|
| 51 | `paintReading` | `function paintReading(` |
| 64 | `repaintVolatilityRing` | `function repaintVolatilityRing(` |
| 70 | `paintTag` | `function paintTag(` |
| 77 | `repaintVolatility` | `function repaintVolatility(` |
| 81 | `repaintPressureRow` | `function repaintPressureRow(` |
| 86 | `repaintPressureChart` | `function repaintPressureChart(` |
| 90 | `repaintLive` · export | `function repaintLive(` |
| 95 | `desireRow` | `function desireRow(` |
| 96 | `repaintDesire` | `function repaintDesire(` |
| 104 | `syncCapeHistory` | `function syncCapeHistory(` |
| 109 | `repaintValuationRow` | `function repaintValuationRow(` |
| 114 | `isNum` | `function isNum(` |
| 115 | `rowsOk` | `function rowsOk(` |
| 118 | `KINDS` | `var KINDS =` |
| 119 | `checkLiveCoverage` | `function checkLiveCoverage(` |
| 133 | `receive` | `function receive(` |
| 149 | `fmtAsOf` · export | `function fmtAsOf(` |
| 154 | `applyLive` | `function applyLive(` |
| 167 | `shapeOk` | `function shapeOk(` |
| 173 | `repaintPolicy` | `function repaintPolicy(` |
| 179 | `GYN` · export | `var GYN =` |
| 202 | `refreshLiveData` | `function refreshLiveData(` |
| 219 | `fetchSiteData` | `function fetchSiteData(` |
| 234 | `fedFundsRange` · export | `function fedFundsRange(` |

### `js/data.js`

#### DATA (single source of truth — edit here on refresh)

| Line | Name | Anchor |
|---|---|---|
| 10 | `yieldCurve` · export | `var yieldCurve =` |
| 15 | `YIELD_CURVE_ASOF` | `var YIELD_CURVE_ASOF =` |
| 16 | `curveAsOf` · export | `function curveAsOf(` |
| 19 | `t10y3mRecessions` · export | `var t10y3mRecessions =` |

#### Un-inversion → recession lag, computed from actual history (not a forecasting model or a survey)

| Line | Name | Anchor |
|---|---|---|
| 24 | `uninvLagCycles` · export | `var uninvLagCycles =` |
| 30 | `uninvLagToday` · export | `var uninvLagToday =` |
| 34 | `gdpSrc` · export | `var gdpSrc =` |
| 36 | `labPanel` | `var labPanel =` |
| 65 | `labRow` · export | `function labRow(` |
| 66 | `PRODUCTIVITY_TREND` · export | `var PRODUCTIVITY_TREND =` |
| 67 | `productivityWord` | `function productivityWord(` |

#### Consumer confidence

| Line | Name | Anchor |
|---|---|---|
| 79 | `CONFIDENCE_LINE` · export | `var CONFIDENCE_LINE =` |
| 80 | `confidenceWord` | `function confidenceWord(` |

#### The deficit, year by year

| Line | Name | Anchor |
|---|---|---|
| 88 | `DEF_FROM_YEAR` · export | `var DEF_FROM_YEAR =` |
| 89 | `deficitHistory` · export | `var deficitHistory =` |
| 92 | `DEF_MEAN` · export | `var DEF_MEAN =` |
| 93 | `DEF_RECESSION_FY` · export | `var DEF_RECESSION_FY =` |
| 95 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 101 | `setYieldCurve` · export | `function setYieldCurve(` |

### `js/components.js`

#### Keren, V411: "make it consistent across the app — sometimes I see 50 years … we don't want to

| Line | Name | Anchor |
|---|---|---|
| 12 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |

#### Keren, V410: "when we look at the current cycle and click any one of the KPIs, I would assume as

| Line | Name | Anchor |
|---|---|---|
| 22 | `cycleSpanYears` | `function cycleSpanYears(` |
| 25 | `timelineSpan` · export | `function timelineSpan(` |
| 30 | `timelineFor` · export | `function timelineFor(` |
| 41 | `timelineWindow` · export | `function timelineWindow(` |

#### What a windowed record chart needs, once

| Line | Name | Anchor |
|---|---|---|
| 48 | `windowScale` · export | `function windowScale(` |
| 63 | `windowYears` · export | `function windowYears(` |
| 71 | `refName` · export | `function refName(` |
| 75 | `histReadEnsure` · export | `function histReadEnsure(` |
| 95 | `histReadFill` · export | `function histReadFill(` |
| 145 | `histAxisEnds` | `function histAxisEnds(` |
| 156 | `histLegend` · export | `function histLegend(` |
| 215 | `refitHistory` · export | `function refitHistory(` |
| 225 | `wireHistHover` · export | `function wireHistHover(` |
| 257 | `histShow` | `function histShow(` |
| 266 | `histKeysWire` | `function histKeysWire(` |
| 286 | `mWindowFrom` · export | `function mWindowFrom(` |
| 290 | `qWindowFrom` · export | `function qWindowFrom(` |
| 294 | `defFrom` · export | `function defFrom(` |
| 298 | `deficitChart` · export | `function deficitChart(` |
| 365 | `deficitBlock` · export | `function deficitBlock(` |
| 404 | `buffettHistory` · export | `var buffettHistory =` |
| 405 | `HY_NORM_LO` · export | `var HY_NORM_LO =` |
| 406 | `hyDates` | `var hyDates =` |
| 407 | `hyOas` · export | `var hyOas =` |
| 408 | `checkDesireWindow` | `function checkDesireWindow(` |
| 414 | `hyAt` · export | `function hyAt(` |
| 418 | `hyLabel` | `function hyLabel(` |
| 419 | `hyNum` | `function hyNum(` |
| 420 | `hyWindowFrom` · export | `function hyWindowFrom(` |
| 428 | `hyQuarters` · export | `function hyQuarters(` |
| 436 | `hyQuarterEnds` | `function hyQuarterEnds(` |
| 437 | `capeHistory` · export | `var capeHistory =` |
| 438 | `longCycleSrc` · export | `var longCycleSrc =` |
| 453 | `checkGrossDebt` | `function checkGrossDebt(` |

#### Sentiment (fast) and Valuation (slow)

| Line | Name | Anchor |
|---|---|---|
| 466 | `sentiment` · export | `var sentiment =` |
| 481 | `valuation` · export | `var valuation =` |
| 501 | `valRow` · export | `function valRow(` |
| 505 | `CAPE_FAIR` · export | `var CAPE_FAIR =` |
| 506 | `coincident` · export | `var coincident =` |
| 545 | `deriveVolumeTag` · export | `function deriveVolumeTag(` |
| 549 | `PULSE_WINDOW` · export | `var PULSE_WINDOW =` |
| 550 | `PULSE_WINDOW_PEEK` · export | `var PULSE_WINDOW_PEEK =` |
| 551 | `PULSE_PRE2008` · export | `var PULSE_PRE2008 =` |

#### The whole record, opened from the mark

| Line | Name | Anchor |
|---|---|---|
| 553 | `M2V_FROM_YEAR` · export | `var M2V_FROM_YEAR =` |
| 554 | `m2vHistory` · export | `var m2vHistory =` |
| 569 | `velocityHistoryChart` · export | `function velocityHistoryChart(` |
| 620 | `desireHistoryChart` · export | `function desireHistoryChart(` |
| 662 | `setSentiment` · export | `function setSentiment(` |
| 663 | `setValuation` · export | `function setValuation(` |
| 664 | `setCoincident` · export | `function setCoincident(` |

### `js/history.js`

#### the history card's head

| Line | Name | Anchor |
|---|---|---|
| 14 | `HIST_NOTE` · export | `var HIST_NOTE =` |
| 15 | `DOTS` | `var DOTS =` |
| 17 | `headPickRow` · export | `function headPickRow(` |
| 23 | `histHead` · export | `function histHead(` |
| 38 | `headNoteIdx` | `var headNoteIdx =` |
| 39 | `headMenuHtml` | `function headMenuHtml(` |
| 64 | `headMenuFor` | `var headMenuFor =` |
| 65 | `headSubFor` | `var headSubFor =` |
| 66 | `paintHeadMenus` | `function paintHeadMenus(` |
| 77 | `headMoreBtn` | `function headMoreBtn(` |
| 81 | `headMenuFirst` | `function headMenuFirst(` |
| 85 | `headMenuShut` | `function headMenuShut(` |
| 90 | `histNote` · export | `function histNote(` |
| 91 | `meterFlagged` · export | `function meterFlagged(` |
| 98 | `desireInfoHtml` | `function desireInfoHtml(` |
| 121 | `volumeInfoHtml` | `function volumeInfoHtml(` |
| 135 | `pulseInfoHtml` | `function pulseInfoHtml(` |
| 148 | `PRODUCTIVITY_SRC` · export | `var PRODUCTIVITY_SRC =` |
| 153 | `CONFIDENCE_SRC` · export | `var CONFIDENCE_SRC =` |
| 157 | `confidenceInfoHtml` · export | `function confidenceInfoHtml(` |
| 169 | `productivityInfoHtml` · export | `function productivityInfoHtml(` |
| 183 | `activityInfoHtml` · export | `function activityInfoHtml(` |
| 202 | `temperatureInfoHtml` · export | `function temperatureInfoHtml(` |
| 233 | `desireBlock` · export | `function desireBlock(` |
| 243 | `volumeBlock` · export | `function volumeBlock(` |
| 255 | `velocityRecordBlock` · export | `function velocityRecordBlock(` |
| 266 | `checkVelocityHistory` | `function checkVelocityHistory(` |

#### Volume: how much blood there is

| Line | Name | Anchor |
|---|---|---|
| 272 | `M2_FROM_YEAR` · export | `var M2_FROM_YEAR =` |
| 273 | `m2Level` | `var m2Level =` |
| 294 | `m2Yoy` · export | `var m2Yoy =` |
| 295 | `M2_NORM` · export | `var M2_NORM =` |
| 296 | `volumeVerdict` · export | `function volumeVerdict(` |
| 303 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 304 | `unempHistory` · export | `var unempHistory =` |
| 310 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 318 | `NROU_NOW` | `var NROU_NOW =` |
| 319 | `unempState` | `function unempState(` |
| 325 | `yearTicks` | `function yearTicks(` |
| 340 | `unempHistoryChart` · export | `function unempHistoryChart(` |

#### Hormones — the policy rate's history

| Line | Name | Anchor |
|---|---|---|
| 382 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 389 | `fedFundsHistoryChart` · export | `function fedFundsHistoryChart(` |
| 434 | `ACT_BAND_LO` | `var ACT_BAND_LO =` |
| 435 | `CPI_TARGET` | `var CPI_TARGET =` |
| 436 | `qAtIndex` · export | `function qAtIndex(` |

#### the reference key, shared

| Line | Name | Anchor |
|---|---|---|
| 438 | `householdsChart` · export | `function householdsChart(` |
| 487 | `cpiHistoryChart` · export | `function cpiHistoryChart(` |
| 528 | `GDP_NORM` | `var GDP_NORM =` |
| 529 | `growthInfoHtml` · export | `function growthInfoHtml(` |
| 551 | `gdpHistoryChart` · export | `function gdpHistoryChart(` |
| 601 | `m2GrowthChart` · export | `function m2GrowthChart(` |
| 645 | `checkMoneyStock` | `function checkMoneyStock(` |
| 651 | `velocityVerdict` | `function velocityVerdict(` |
| 659 | `derivePulseTag` · export | `function derivePulseTag(` |
| 663 | `lagging` · export | `var lagging =` |

### `js/charts.js`

#### Content tab: reading companion

| Line | Name | Anchor |
|---|---|---|
| 11 | `seasonReading` · export | `var seasonReading =` |
| 55 | `frameworkRows` · export | `var frameworkRows =` |
| 64 | `VIX_CALM` · export | `var VIX_CALM =` |
| 65 | `VIX_CONVENTION` · export | `var VIX_CONVENTION =` |
| 69 | `volatilityTag` · export | `function volatilityTag(` |
| 75 | `fearCurve` · export | `function fearCurve(` |
| 80 | `curveVerdict` · export | `function curveVerdict(` |
| 85 | `valuationVerdict` · export | `function valuationVerdict(` |

#### The range bar

| Line | Name | Anchor |
|---|---|---|
| 94 | `modeBar` | `function modeBar(` |
| 101 | `pickerOpen` · export | `var pickerOpen =` |
| 102 | `cycleByName` | `function cycleByName(` |
| 106 | `openCycle` · export | `function openCycle(` |
| 110 | `cycleSlice` · export | `function cycleSlice(` |
| 118 | `totalGrowthYears` · export | `function totalGrowthYears(` |
| 126 | `cycleMonths` · export | `function cycleMonths(` |
| 134 | `histControls` · export | `function histControls(` |
| 143 | `pageCycle` · export | `function pageCycle(` |
| 147 | `cycLabel` · export | `function cycLabel(` |
| 151 | `cycleQtrIdx` · export | `function cycleQtrIdx(` |
| 156 | `cyclePicker` | `function cyclePicker(` |
| 175 | `rangeBar` · export | `function rangeBar(` |
| 182 | `trendOf` · export | `function trendOf(` |
| 197 | `TREND_ARROW` | `var TREND_ARROW =` |
| 201 | `trendPill` · export | `function trendPill(` |

#### Insights: what the series says about today, computed

| Line | Name | Anchor |
|---|---|---|
| 212 | `yearOf` · export | `function yearOf(` |
| 213 | `mean` · export | `function mean(` |

#### The record rows

| Line | Name | Anchor |
|---|---|---|
| 215 | `headSigma` · export | `function headSigma(` |
| 220 | `atQuarter` · export | `function atQuarter(` |
| 221 | `atMonth` · export | `function atMonth(` |
| 222 | `ordinal` · export | `function ordinal(` |
| 223 | `hiCard` · export | `function hiCard(` |

#### The cycle average component

| Line | Name | Anchor |
|---|---|---|
| 227 | `dropWhatIsShown` · export | `function dropWhatIsShown(` |
| 234 | `moreRow` · export | `function moreRow(` |
| 240 | `tempCaptionFull` · export | `var tempCaptionFull =` |
| 241 | `highlightsHtml` · export | `function highlightsHtml(` |

#### The inner pages' charts

| Line | Name | Anchor |
|---|---|---|
| 247 | `xLabelOf` | `function xLabelOf(` |
| 256 | `fitLine` · export | `function fitLine(` |
| 260 | `fitGroup` · export | `function fitGroup(` |

#### The history component's axes

| Line | Name | Anchor |
|---|---|---|
| 277 | `appendSvgMarkup` · export | `function appendSvgMarkup(` |
| 285 | `vGrid` · export | `function vGrid(` |
| 289 | `COL_FILL` | `var COL_FILL =` |
| 290 | `colPath` · export | `function colPath(` |
| 295 | `colWidth` · export | `function colWidth(` |
| 300 | `AXIS` · export | `var AXIS =` |
| 301 | `histFrame` · export | `function histFrame(` |
| 308 | `xLabel` · export | `function xLabel(` |
| 311 | `crossLine` · export | `function crossLine(` |
| 314 | `zeroRule` · export | `function zeroRule(` |
| 317 | `meanRule` · export | `function meanRule(` |
| 318 | `pendingGeom` | `var pendingGeom =` |
| 319 | `publishGeom` · export | `function publishGeom(` |
| 320 | `attachHistory` · export | `function attachHistory(` |
| 329 | `histBar` · export | `function histBar(` |
| 332 | `histTip` · export | `function histTip(` |
| 333 | `avgRule` · export | `function avgRule(` |
| 336 | `vhOpen` · export | `function vhOpen(` |
| 337 | `chartAxes` · export | `function chartAxes(` |
| 366 | `divergeChart` · export | `function divergeChart(` |

#### A series' highest reading within a span

| Line | Name | Anchor |
|---|---|---|
| 400 | `maxIn` · export | `function maxIn(` |
| 404 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 405 | `PEEK_W` · export | `var PEEK_W =` |
| 406 | `PEEK_H` · export | `var PEEK_H =` |
| 407 | `colPeek` · export | `function colPeek(` |
| 424 | `meterPeek` · export | `function meterPeek(` |
| 440 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 445 | `pressureZone` · export | `function pressureZone(` |
| 451 | `HZN_BACK` | `var HZN_BACK =` |
| 452 | `hznLast` | `function hznLast(` |
| 453 | `hznRecord` | `function hznRecord(` |
| 457 | `hznBack` | `function hznBack(` |
| 458 | `horizonWord` | `function horizonWord(` |
| 464 | `horizonInfoHtml` · export | `function horizonInfoHtml(` |
| 485 | `RISK_REWARD` | `var RISK_REWARD =` |
| 490 | `RISK_RISK` | `var RISK_RISK =` |
| 495 | `riskCell` | `function riskCell(` |
| 496 | `riskMatrixBlock` · export | `function riskMatrixBlock(` |
| 526 | `riskMatrixNote` | `var riskMatrixNote =` |
| 551 | `setVixRow` · export | `function setVixRow(` |
| 552 | `setVix3mClose` · export | `function setVix3mClose(` |
| 553 | `setTempCaptionFull` · export | `function setTempCaptionFull(` |
| 554 | `setTempLeadShown` · export | `function setTempLeadShown(` |

### `js/forms.js`

#### THE FIFTH PEEK FORM: a pulse drawn as a pulse

| Line | Name | Anchor |
|---|---|---|
| 12 | `pulseClipN` | `var pulseClipN =` |
| 13 | `beatPath` | `function beatPath(` |
| 30 | `pulseTraceSvg` | `function pulseTraceSvg(` |
| 44 | `pulsePeek` · export | `function pulsePeek(` |
| 47 | `pulseBlock` · export | `function pulseBlock(` |
| 63 | `CHEV` · export | `var CHEV =` |
| 64 | `peekCard` · export | `function peekCard(` |
| 82 | `dropSvg` | `function dropSvg(` |
| 84 | `gaugeSvg` · export | `function gaugeSvg(` |
| 88 | `diamondSvg` · export | `function diamondSvg(` |
| 92 | `sproutSvg` · export | `function sproutSvg(` |
| 100 | `markSvg` · export | `function markSvg(` |
| 103 | `heartSvg` · export | `function heartSvg(` |
| 105 | `flameSvg` · export | `function flameSvg(` |
| 108 | `clockSvg` · export | `function clockSvg(` |
| 109 | `thermoSvg` · export | `function thermoSvg(` |
| 112 | `stethoscopeSvg` · export | `function stethoscopeSvg(` |
| 114 | `personSvg` · export | `function personSvg(` |
| 116 | `bookSvg` · export | `function bookSvg(` |
| 119 | `ecgSvg` · export | `function ecgSvg(` |
| 121 | `circulationSvg` · export | `function circulationSvg(` |
| 122 | `boltSvg` · export | `function boltSvg(` |
| 123 | `houseSvg` · export | `function houseSvg(` |
| 126 | `marketSvg` · export | `function marketSvg(` |
| 129 | `bagSvg` · export | `function bagSvg(` |
| 132 | `volatilitySvg` · export | `function volatilitySvg(` |

#### Load: what households owe, and what they keep

| Line | Name | Anchor |
|---|---|---|
| 139 | `DSR_FROM_YEAR` · export | `var DSR_FROM_YEAR =` |
| 140 | `dsrHistory` · export | `var dsrHistory =` |
| 141 | `SAV_FROM_YEAR` · export | `var SAV_FROM_YEAR =` |
| 142 | `savHistory` · export | `var savHistory =` |
| 145 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 153 | `SAV_OFFSET` · export | `var SAV_OFFSET =` |
| 154 | `dsrNow` · export | `var dsrNow =` |
| 155 | `savNow` · export | `var savNow =` |
| 156 | `DSR_MEAN` · export | `var DSR_MEAN =` |
| 157 | `householdsWord` | `function householdsWord(` |
| 164 | `dsrInfoHtml` · export | `function dsrInfoHtml(` |
| 181 | `savInfoHtml` · export | `function savInfoHtml(` |
| 198 | `vixPct` · export | `function vixPct(` |
| 202 | `curveNoteFull` · export | `var curveNoteFull =` |
| 213 | `volatilityRing` · export | `function volatilityRing(` |
| 218 | `VOL_JOIN` · export | `var VOL_JOIN =` |
| 219 | `volatilityDetailHtml` · export | `function volatilityDetailHtml(` |
| 233 | `sp500AnnualReturnSource` · export | `var sp500AnnualReturnSource =` |
| 238 | `marketWord` | `function marketWord(` |
| 242 | `marketCol` | `function marketCol(` |
| 243 | `marketPeek` · export | `function marketPeek(` |
| 248 | `marketInfoHtml` | `function marketInfoHtml(` |
| 257 | `marketCycles` · export | `var marketCycles =` |

#### A typical cycle's length (the dial's scale)

| Line | Name | Anchor |
|---|---|---|
| 374 | `typicalCycleYears` · export | `var typicalCycleYears =` |
| 375 | `typicalCycleSrc` · export | `var typicalCycleSrc =` |

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
| 41 | `prettyKey` · export | `function prettyKey(` |
| 46 | `lastDate` | `function lastDate(` |
| 47 | `compiledDay` | `function compiledDay(` |
| 48 | `isoLabel` | `function isoLabel(` |
| 52 | `paintWhen` · export | `function paintWhen(` |
| 57 | `labPeriod` | `function labPeriod(` |
| 58 | `rosterFor` · export | `function rosterFor(` |
| 59 | `rowReadings` · export | `function rowReadings(` |
| 60 | `indOf` · export | `function indOf(` |
| 61 | `peekOf` · export | `function peekOf(` |
| 66 | `cardDate` · export | `function cardDate(` |
| 67 | `checkRoster` | `function checkRoster(` |

### `js/model.js`

#### The season, computed

| Line | Name | Anchor |
|---|---|---|
| 12 | `slopeOf` | `function slopeOf(` |
| 17 | `monthIndex` | `function monthIndex(` |
| 18 | `cpiTrend` | `function cpiTrend(` |
| 25 | `cpiYear` | `function cpiYear(` |
| 29 | `GROWTH_WINDOW` | `var GROWTH_WINDOW =` |
| 30 | `readSeason` | `function readSeason(` |
| 49 | `QUARTER_END_MONTH` · export | `var QUARTER_END_MONTH =` |
| 50 | `qLabel` · export | `function qLabel(` |
| 51 | `SEASON_YEARS` | `var SEASON_YEARS =` |
| 52 | `closingReading` | `function closingReading(` |
| 56 | `quarterRegime` · export | `function quarterRegime(` |
| 57 | `seasonTitle` · export | `function seasonTitle(` |
| 58 | `monthLabel` · export | `function monthLabel(` |
| 59 | `cycleReturns` · export | `function cycleReturns(` |
| 69 | `cycleModel` · export | `function cycleModel(` |
| 100 | `seasonRuleSentence` | `var seasonRuleSentence =` |
| 108 | `seasonWhyFor` | `function seasonWhyFor(` |
| 114 | `seasonGroup` · export | `function seasonGroup(` |

#### The diagnosis: how she feels, and what has followed

| Line | Name | Anchor |
|---|---|---|
| 116 | `rankToDate` | `function rankToDate(` |
| 120 | `marketCache` | `var marketCache =` |
| 121 | `marketMonths` · export | `function marketMonths(` |
| 128 | `yearAfter` · export | `function yearAfter(` |
| 132 | `diagnoseToday` · export | `function diagnoseToday(` |

#### Her mood: one range from Depression to Mania

| Line | Name | Anchor |
|---|---|---|
| 137 | `rankIn` | `function rankIn(` |
| 142 | `moodLists` · export | `var moodLists =` |
| 143 | `moodSeries` | `function moodSeries(` |
| 151 | `moodAt` | `function moodAt(` |
| 157 | `MOOD_TURN` · export | `var MOOD_TURN =` |
| 158 | `MOOD_RISING` | `var MOOD_RISING =` |
| 159 | `MOOD_FALLING` | `var MOOD_FALLING =` |
| 160 | `moodWord` | `function moodWord(` |
| 164 | `moodRead` | `function moodRead(` |
| 171 | `moodCache` · export | `var moodCache =` |
| 172 | `moodTrack` · export | `function moodTrack(` |
| 178 | `moodToday` · export | `function moodToday(` |
| 182 | `cycleStory` · export | `function cycleStory(` |
| 192 | `vitalRingSvg` · export | `function vitalRingSvg(` |
| 202 | `SPREAD_DETAIL` · export | `var SPREAD_DETAIL =` |
| 203 | `HZN_SPREADS` · export | `var HZN_SPREADS =` |
| 204 | `spreadLabel` · export | `function spreadLabel(` |
| 208 | `policyFacts` | `function policyFacts(` |
| 215 | `policyFactRows` · export | `function policyFactRows(` |
| 221 | `allSources` · export | `var allSources =` |
| 235 | `addSources` · export | `function addSources(` |

#### Shared SVG chart helpers (used by the GDP, yield-by-maturity, and spread-history charts

| Line | Name | Anchor |
|---|---|---|
| 247 | `SVG_NS` | `var SVG_NS =` |
| 248 | `svgEl` · export | `function svgEl(` |
| 253 | `attachHoverTracking` · export | `function attachHoverTracking(` |
| 284 | `hoverAway` | `var hoverAway =` |
| 285 | `hoverAwayAdd` | `function hoverAwayAdd(` |
| 293 | `hoverAwayLive` | `function hoverAwayLive(` |
| 295 | `setMoodLists` · export | `function setMoodLists(` |
| 296 | `setMoodCache` · export | `function setMoodCache(` |
| 297 | `setPressureView` · export | `function setPressureView(` |
| 298 | `setSpreadPick` · export | `function setSpreadPick(` |
| 299 | `setSPREAD_DETAIL` · export | `function setSPREAD_DETAIL(` |
| 300 | `setDrawSpreadWindow` · export | `function setDrawSpreadWindow(` |
| 301 | `setUNINV_DETAIL` · export | `function setUNINV_DETAIL(` |
| 302 | `setDrawSpreadView` · export | `function setDrawSpreadView(` |

### `js/render-core.js`

#### RENDER: range bars + card helpers

| Line | Name | Anchor |
|---|---|---|
| 13 | `clampPct` · export | `function clampPct(` |
| 14 | `detailTexts` · export | `var detailTexts =` |
| 15 | `detailSlot` · export | `function detailSlot(` |
| 25 | `metricSheet` · export | `function metricSheet(` |
| 30 | `ledeHtml` · export | `function ledeHtml(` |
| 31 | `facts` · export | `function facts(` |
| 32 | `factsFrom` · export | `function factsFrom(` |
| 36 | `expandBtn` · export | `function expandBtn(` |
| 40 | `sheetRenderers` · export | `var sheetRenderers =` |
| 41 | `drawsPage` · export | `function drawsPage(` |
| 42 | `wireDetailModal` | `function wireDetailModal(` |
| 79 | `detailClose` · export | `var detailClose =` |
| 80 | `srcBlock` · export | `function srcBlock(` |

#### THE SUBJECT ROW

| Line | Name | Anchor |
|---|---|---|
| 82 | `subjectRow` · export | `function subjectRow(` |
| 92 | `subjectIcon` · export | `function subjectIcon(` |
| 93 | `srcHtml` | `function srcHtml(` |
| 94 | `timingMark` | `function timingMark(` |
| 102 | `timingPill` · export | `function timingPill(` |
| 110 | `collapseEmptyBlocks` · export | `function collapseEmptyBlocks(` |
| 118 | `seatPageFoot` · export | `function seatPageFoot(` |
| 129 | `timingMembers` · export | `var timingMembers =` |
| 130 | `registerTiming` · export | `function registerTiming(` |
| 131 | `headHtml` | `function headHtml(` |
| 136 | `heldHighlights` · export | `var heldHighlights =` |
| 137 | `cardDetailHtml` · export | `function cardDetailHtml(` |

#### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

| Line | Name | Anchor |
|---|---|---|
| 164 | `CURVE_KEY` | `var CURVE_KEY =` |
| 165 | `latestYieldPoint` | `function latestYieldPoint(` |
| 173 | `withLatestPoint` | `function withLatestPoint(` |
| 178 | `pressureMaturities` | `function pressureMaturities(` |
| 202 | `registerFlowPages` | `function registerFlowPages(` |
| 256 | `renderPressureRow` | `function renderPressureRow(` |
| 264 | `ylmYearMarks` | `function ylmYearMarks(` |
| 283 | `ylmColumns` | `function ylmColumns(` |
| 303 | `ylmFitLine` | `function ylmFitLine(` |
| 315 | `pressureHead` | `function pressureHead(` |
| 333 | `showPressureView` | `function showPressureView(` |
| 338 | `renderPressurePage` | `function renderPressurePage(` |

#### Pressure's Insights

| Line | Name | Anchor |
|---|---|---|
| 470 | `renderPressureInsights` | `function renderPressureInsights(` |
| 506 | `setHeldHighlights` · export | `function setHeldHighlights(` |

### `js/render-pages.js`

#### RENDER: yield-curve spread history chart — toggle between 10Y-3M and 10Y-2Y

| Line | Name | Anchor |
|---|---|---|
| 14 | `spreadSeries` | `function spreadSeries(` |
| 58 | `renderSpreadHistory` | `function renderSpreadHistory(` |

#### RENDER: un-inversion-to-recession historical lag panel

| Line | Name | Anchor |
|---|---|---|
| 183 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

#### RENDER: the Treasury spreads, inside Pressure

| Line | Name | Anchor |
|---|---|---|
| 208 | `renderHorizonPage` | `function renderHorizonPage(` |
| 232 | `spreadInsights` | `function spreadInsights(` |

#### RENDER: Valuation (slow)

| Line | Name | Anchor |
|---|---|---|
| 261 | `renderValuationTag` | `function renderValuationTag(` |

#### RENDER: Hormones

| Line | Name | Anchor |
|---|---|---|
| 267 | `renderHormones` | `function renderHormones(` |

#### RENDER: Volatility — the VIX since 1986, and the shape of its curve today

| Line | Name | Anchor |
|---|---|---|
| 363 | `renderVolatility` | `function renderVolatility(` |
| 408 | `volatilityHighlights` | `function volatilityHighlights(` |

#### RENDER: Analysis subjects — one headline figure per collapsible section

| Line | Name | Anchor |
|---|---|---|
| 437 | `renderSubjectRows` | `function renderSubjectRows(` |

#### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

| Line | Name | Anchor |
|---|---|---|
| 457 | `totalRiseIn` · export | `function totalRiseIn(` |
| 467 | `eraInflation` · export | `function eraInflation(` |
| 477 | `eraGrowth` · export | `function eraGrowth(` |
| 493 | `fmtSigned` · export | `function fmtSigned(` |
| 494 | `GROWTH_SHOWN` | `var GROWTH_SHOWN =` |
| 495 | `growthShown` | `function growthShown(` |
| 496 | `growthShownCap` · export | `function growthShownCap(` |
| 497 | `phaseClass` · export | `function phaseClass(` |
| 498 | `eraMarketTotal` · export | `function eraMarketTotal(` |
| 502 | `shownEra` · export | `var shownEra =` |
| 503 | `calendarReset` · export | `var calendarReset =` |
| 504 | `metricPageReset` · export | `var metricPageReset =` |
| 505 | `openIndicatorsPage` · export | `var openIndicatorsPage =` |
| 506 | `topbarBack` · export | `var topbarBack =` |
| 507 | `setTopbar` · export | `function setTopbar(` |
| 513 | `setShownEra` · export | `function setShownEra(` |
| 514 | `setMetricPageReset` · export | `function setMetricPageReset(` |
| 515 | `setOpenIndicatorsPage` · export | `function setOpenIndicatorsPage(` |
| 516 | `setEraPageBack` · export | `function setEraPageBack(` |
| 517 | `setCalendarReset` · export | `function setCalendarReset(` |
| 518 | `setTopbarBack` · export | `function setTopbarBack(` |

### `js/dial-cycle.js`

#### the dial: one ring of moons, the market band inside, the year badge, the dots of a typical cycle ahead

| Line | Name | Anchor |
|---|---|---|
| 15 | `drawDial` | `function drawDial(` |

#### the Appearance row: System · Light · Dark, kept in localStorage; System clears the choice

| Line | Name | Anchor |
|---|---|---|
| 97 | `wireThemeChoice` | `function wireThemeChoice(` |

#### the legend popup (Keren, Sep 19, 2026): the ring's temperature scale, the market band's colors, one line on the

| Line | Name | Anchor |
|---|---|---|
| 116 | `renderCycleKicker` | `function renderCycleKicker(` |

#### the hub: the reading inside the circle

| Line | Name | Anchor |
|---|---|---|
| 138 | `hubSet` | `function hubSet(` |
| 146 | `hubOpen` | `function hubOpen(` |
| 153 | `quarterCards` | `function quarterCards(` |
| 164 | `popHead` | `function popHead(` |
| 165 | `hubLine` | `function hubLine(` |
| 166 | `quarterSheet` | `function quarterSheet(` |
| 171 | `quarterPopup` | `function quarterPopup(` |
| 193 | `hubShowDefault` | `function hubShowDefault(` |
| 200 | `hubShowQuarter` | `function hubShowQuarter(` |
| 205 | `hubShowYear` | `function hubShowYear(` |
| 215 | `renderCycleDial` | `function renderCycleDial(` |
| 298 | `dialKeyStep` | `function dialKeyStep(` |
| 306 | `dialSay` | `function dialSay(` |
| 311 | `m2Step` · export | `function m2Step(` |
| 314 | `heatStep` · export | `function heatStep(` |

#### the whole view, for one cycle

| Line | Name | Anchor |
|---|---|---|
| 319 | `renderCycleView` · export | `function renderCycleView(` |
| 324 | `shownEraModel` | `var shownEraModel =` |
| 325 | `showCycle` · export | `function showCycle(` |

#### A cycle's season strip (carried by the one cycle row)

| Line | Name | Anchor |
|---|---|---|
| 327 | `stripGroupName` | `var stripGroupName =` |
| 328 | `seasonStripHtml` · export | `function seasonStripHtml(` |
| 356 | `marketStripHtml` · export | `function marketStripHtml(` |
| 389 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 390 | `settleStrips` · export | `function settleStrips(` |

### `js/pages-nav.js`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 16 | `convertLeadingSigns` | `function convertLeadingSigns(` |
| 39 | `orderMetricSheets` | `function orderMetricSheets(` |
| 59 | `activityStackHtml` · export | `function activityStackHtml(` |
| 69 | `seatTemperature` · export | `function seatTemperature(` |
| 77 | `renderSignsList` | `function renderSignsList(` |

#### THE ROSTER'S OWN PIECES

| Line | Name | Anchor |
|---|---|---|
| 109 | `partsOf` | `function partsOf(` |
| 118 | `authored` | `function authored(` |
| 119 | `registerRoster` | `function registerRoster(` |
| 140 | `indRow` | `function indRow(` |
| 144 | `indGroupRow` | `function indGroupRow(` |
| 149 | `catMembers` | `function catMembers(` |
| 157 | `indRows` | `function indRows(` |
| 171 | `indCategoryHtml` | `function indCategoryHtml(` |
| 178 | `categoriesShown` | `function categoriesShown(` |

#### THE NAVIGATION CONTROLLER

| Line | Name | Anchor |
|---|---|---|
| 180 | `NAV` | `var NAV =` |
| 181 | `buildNav` | `function buildNav(` |

#### ALL INDICATORS

| Line | Name | Anchor |
|---|---|---|
| 276 | `buildSearch` | `function buildSearch(` |

#### THE CYCLE TAB: cards and categories

| Line | Name | Anchor |
|---|---|---|
| 323 | `qPretty` · export | `function qPretty(` |
| 324 | `DATED_UNIT` | `var DATED_UNIT =` |
| 325 | `peekArt` | `function peekArt(` |
| 326 | `indPeriod` · export | `function indPeriod(` |
| 330 | `catItem` · export | `function catItem(` |
| 338 | `catCard` · export | `function catCard(` |
| 380 | `insightCirculation` · export | `function insightCirculation(` |
| 413 | `insightWeather` · export | `function insightWeather(` |
| 453 | `seasonCards` | `function seasonCards(` |
| 459 | `marketCycleCard` | `function marketCycleCard(` |
| 471 | `DIAG_SRC` | `var DIAG_SRC =` |
| 475 | `seasonName` | `function seasonName(` |
| 476 | `MOOD_CHART` | `var MOOD_CHART =` |
| 483 | `MOOD_SRC` | `var MOOD_SRC =` |
| 488 | `curvePath` | `function curvePath(` |
| 496 | `moodCallout` | `function moodCallout(` |
| 500 | `moodCycleSvg` | `function moodCycleSvg(` |
| 512 | `moodInfo` | `function moodInfo(` |
| 521 | `moodFigures` | `function moodFigures(` |
| 527 | `moodCard` | `function moodCard(` |
| 531 | `insightMood` · export | `function insightMood(` |
| 537 | `storyBeats` | `function storyBeats(` |
| 548 | `storyText` | `function storyText(` |
| 552 | `PAIR_ART` | `var PAIR_ART =` |
| 558 | `placeSignPair` | `function placeSignPair(` |
| 581 | `swapSentimentActivity` | `function swapSentimentActivity(` |
| 597 | `buildCategories` | `function buildCategories(` |
| 613 | `tempPeek` · export | `function tempPeek(` |
| 619 | `gdpPeek` · export | `function gdpPeek(` |
| 624 | `renderPeekAndCategories` | `function renderPeekAndCategories(` |

#### THE INNER PAGES

| Line | Name | Anchor |
|---|---|---|
| 651 | `capeFmt1` | `function capeFmt1(` |
| 652 | `actCycleMonths` | `function actCycleMonths(` |
| 660 | `householdsHighlights` | `function householdsHighlights(` |
| 679 | `redrawSheet` | `function redrawSheet(` |
| 683 | `registerTempGdpPages` | `function registerTempGdpPages(` |
| 728 | `registerActivityPowerDeficitPages` | `function registerActivityPowerDeficitPages(` |
| 765 | `registerHouseholdsValuationPages` | `function registerHouseholdsValuationPages(` |
| 812 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 842 | `valuationHighlights` | `function valuationHighlights(` |
| 855 | `tempHighlights` | `function tempHighlights(` |
| 872 | `gdpHighlights` | `function gdpHighlights(` |
| 887 | `renderMetricPages` | `function renderMetricPages(` |
| 896 | `renderPagesAndNav` | `function renderPagesAndNav(` |

#### The Diagnosis: under the dial, today or at a cycle's close

| Line | Name | Anchor |
|---|---|---|
| 905 | `todayFace` | `function todayFace(` |
| 911 | `readDoor` · export | `function readDoor(` |
| 919 | `pct` | `function pct(` |
| 920 | `rosterRows` · export | `function rosterRows(` |
| 921 | `eraEnds` | `function eraEnds(` |
| 928 | `eraMove` | `function eraMove(` |
| 932 | `HORMONES` | `var HORMONES =` |
| 933 | `analysisFor` | `function analysisFor(` |
| 939 | `dxRow` | `function dxRow(` |
| 940 | `dxText` | `function dxText(` |
| 941 | `dxSection` | `function dxSection(` |
| 942 | `systemHtml` | `function systemHtml(` |
| 945 | `dxHead` | `function dxHead(` |
| 950 | `diagnosisHtml` | `function diagnosisHtml(` |
| 959 | `acrossCycle` | `function acrossCycle(` |
| 966 | `moodDoor` | `function moodDoor(` |
| 971 | `trendText` | `function trendText(` |
| 972 | `renderDiagnosis` · export | `function renderDiagnosis(` |
| 976 | `replaceInsights` · export | `function replaceInsights(` |
| 982 | `repaintDiagnosis` · export | `function repaintDiagnosis(` |
| 986 | `buildDiagnosis` | `function buildDiagnosis(` |

### `js/analysis.js`

#### RENDER: Calendar tab — the list of cycles; tapping one opens the cycle view for it

| Line | Name | Anchor |
|---|---|---|
| 13 | `CYCLE_DATA_KEY` | `var CYCLE_DATA_KEY =` |
| 14 | `cycleDataOn` | `function cycleDataOn(` |
| 15 | `cycleRowsHtml` | `function cycleRowsHtml(` |
| 35 | `wireCycleData` | `function wireCycleData(` |
| 50 | `renderCycleList` | `function renderCycleList(` |

#### A closed cycle, shown on the Cycle tab's own page

| Line | Name | Anchor |
|---|---|---|
| 92 | `eraOpen` · export | `var eraOpen =` |
| 93 | `kT` | `function kT(` |
| 97 | `upTo` | `function upTo(` |
| 98 | `pairAt` · export | `function pairAt(` |
| 99 | `eraReading` | `function eraReading(` |
| 109 | `eraFig` | `function eraFig(` |
| 116 | `eraValue` | `function eraValue(` |
| 122 | `eraRange` | `function eraRange(` |
| 127 | `eraMini` | `function eraMini(` |
| 132 | `eraCard` | `function eraCard(` |
| 151 | `eraCards` | `function eraCards(` |
| 157 | `eraShow` | `function eraShow(` |
| 164 | `enterEra` | `function enterEra(` |
| 171 | `leaveEra` | `function leaveEra(` |

#### THE ROSTER AS SERIES

| Line | Name | Anchor |
|---|---|---|
| 178 | `rosterRow` | `function rosterRow(` |
| 191 | `__roster` | `var __roster =` |
| 192 | `readingRoster` · export | `function readingRoster(` |
| 199 | `withUnit` | `function withUnit(` |
| 200 | `pastFigure` · export | `function pastFigure(` |
| 204 | `prettyK` · export | `function prettyK(` |

#### RENDER: the symptoms — the years of a cycle a reading sat where it sits today

| Line | Name | Anchor |
|---|---|---|
| 206 | `cycleSymptoms` | `function cycleSymptoms(` |
| 230 | `placeWords` | `function placeWords(` |
| 234 | `symptomNote` | `function symptomNote(` |
| 241 | `symptomRow` | `function symptomRow(` |
| 248 | `cycleTrack` | `function cycleTrack(` |
| 263 | `symptomLegend` | `function symptomLegend(` |

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

### `js/history-fred.js`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 1 | `fedFundsHistory` · export | `var fedFundsHistory =` |
| 2 | `volatilityHistory` · export | `var volatilityHistory =` |
| 3 | `fiscalHistory` · export | `var fiscalHistory =` |
| 9 | `grossDebtQuarterly` · export | `var grossDebtQuarterly =` |
| 10 | `treasuryQuarterly` · export | `var treasuryQuarterly =` |
| 19 | `productivityHistory` · export | `var productivityHistory =` |
| 20 | `sp500MonthlyHistory` · export | `var sp500MonthlyHistory =` |
| 21 | `confidenceHistory` · export | `var confidenceHistory =` |
| 22 | `gdpYoYBefore` · export | `var gdpYoYBefore =` |
| 23 | `cpiYoYBefore` · export | `var cpiYoYBefore =` |
| 24 | `sp500ReturnsBefore` · export | `var sp500ReturnsBefore =` |
| 25 | `gdpGrowthBefore` · export | `var gdpGrowthBefore =` |

### `js/indicators.js`

#### The split indicators: one card and one page each

| Line | Name | Anchor |
|---|---|---|
| 15 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 21 | `debtSvg` · export | `function debtSvg(` |
| 22 | `interestSvg` · export | `function interestSvg(` |
| 24 | `budgetSvg` · export | `function budgetSvg(` |
| 26 | `lede` · export | `function lede(` |
| 27 | `periodOf` · export | `function periodOf(` |
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
| 133 | `catList` · export | `function catList(` |
| 134 | `groupId` · export | `function groupId(` |
| 135 | `groupCard` | `function groupCard(` |
| 143 | `groupSheet` | `function groupSheet(` |
| 150 | `appendPicks` · export | `function appendPicks(` |
| 158 | `doorSel` | `function doorSel(` |
| 159 | `catPicks` · export | `function catPicks(` |

#### The split indicators' insights

| Line | Name | Anchor |
|---|---|---|
| 171 | `buffettInsight` | `function buffettInsight(` |
| 186 | `debtInsight` | `function debtInsight(` |
| 201 | `productivityInsight` | `function productivityInsight(` |
| 211 | `confidenceInsight` | `function confidenceInsight(` |
| 222 | `ORDINAL` | `var ORDINAL =` |
| 223 | `marketInsight` | `function marketInsight(` |
| 235 | `interestInsight` | `function interestInsight(` |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

| Key | Where |
|---|---|
| `deficit-range` | `js/pages-nav.js:747` |
| `pressure-range` | `js/live.js:88` |
| `sheet-marker-deficit` | `js/pages-nav.js:744` |
| `sheet-metric-gdp` | `js/pages-nav.js:708` |
| `sheet-metric-households` | `js/pages-nav.js:766` |
| `sheet-metric-temp` | `js/pages-nav.js:684` |
| `sheet-metric-valuation` | `js/pages-nav.js:786` |
| `sheet-sign-activity` | `js/pages-nav.js:729` |

### `pageRange`

the window a page's range control starts on

| Key | Where |
|---|---|
| `deficit-range` | `js/pages-nav.js:751` |
| `desire-range` | `js/render-core.js:238` |
| `fear-range` | `js/render-pages.js:371` |
| `pressure-range` | `js/render-core.js:443` |
| `pulse-range` | `js/render-core.js:206` |
| `sheet-metric-gdp` | `js/pages-nav.js:709` |
| `sheet-metric-temp` | `js/pages-nav.js:685` |
| `sheet-metric-valuation` | `js/pages-nav.js:787` |
| `volume-range` | `js/render-core.js:222` |

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

