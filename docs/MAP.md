# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **9,102 lines** in 38 files, about 616 KB, roughly **175 thousand tokens**. No session can
read it whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Use the **anchor** column with grep —
> `grep -rn 'function curveVerdict(' src/` — and treat `file:line` as rough orientation only.

Generated from commit `42d6571` on 2026-10-08.

## The page

`src/manifest.json` joins these parts into `index.html`. The `.js` entry is bundled by esbuild
(`tools/bundle.js`) into one script in its place.

| Part | Lines | What |
|---|---|---|
| `page-head.html` | 5 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist |
| `styles.css` | 1,222 | the whole stylesheet, every token and rule |
| `page-body.html` | 325 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| `js/main.ts` | 34 modules | the entry: imports every module and calls their boots in order |
| `page-tail.html` | 45 | the bundle's closing tag, the service-worker registration, </body></html> |

Counts: **34** modules, **725** top-level functions, **123** top-level vars, **357** exported names, **20** boots.

## Modules, in boot order

| Module | Lines | Declarations | Imports from |
|---|---|---|---|
| `js/dom.ts` | 169 | 25 | `format` |
| `js/live.ts` | 207 | 22 | `format` |
| `js/refresh-season.ts` | 41 | 5 | `format`, `history-fred` |
| `js/data.ts` | 573 | 82 | `format`, `history-fred`, `live` |
| `js/credit.ts` | 134 | 11 | `activity`, `charts`, `concentration`, `format`, `history-fred` |
| `js/model.ts` | 381 | 56 | `data`, `dom`, `format`, `history-fred`, `refresh-season` |
| `js/history.ts` | 476 | 46 | `charts`, `data`, `dom`, `format`, `live`, `model` |
| `js/readings.ts` | 802 | 69 | `charts`, `credit`, `data`, `dom`, `format`, `history`, `history-fred`, `live`, `model`, `refresh-season` |
| `js/roster.ts` | 149 | 5 | `activity`, `concentration`, `credit`, `data`, `format`, `history`, `history-fred`, `live`, `marks`, `refresh-season` |
| `js/render-core.ts` | 500 | 37 | `charts`, `data`, `dom`, `format`, `history`, `history-charts`, `live`, `model`, `readings`, `refresh-season`, `roster` |
| `js/render-pages.ts` | 417 | 10 | `charts`, `data`, `dom`, `format`, `history`, `history-charts`, `history-fred`, `live`, `model`, `readings`, `refresh-season`, `render-core` |
| `js/diagnosis.ts` | 88 | 13 | `ai-insights`, `cycle-analysis`, `data`, `dom`, `fed-phases`, `format`, `live`, `marks`, `model`, `refresh-season`, `render-core` |
| `js/dial-cycle.ts` | 385 | 22 | `cycle-analysis`, `data`, `diagnosis`, `dom`, `format`, `live`, `model`, `refresh-season`, `render-core`, `render-pages`, `roster` |
| `js/analysis.ts` | 88 | 6 | `data`, `dial-cycle`, `dom`, `format`, `history`, `live`, `model`, `render-core`, `render-pages` |
| `js/portfolio.ts` | 108 | 17 | `data`, `dom`, `format`, `marks`, `model`, `render-core` |
| `js/pages-nav.ts` | 185 | 16 | `cycle-tab`, `data`, `dial-cycle`, `dom`, `inner-pages`, `live`, `readings`, `render-core`, `render-pages`, `roster` |
| `js/tabs-menu.ts` | 228 | 10 | `data`, `dial-cycle`, `dom`, `format`, `live`, `model`, `pages-nav`, `refresh-season` |
| `js/repaint.ts` | 39 | 5 | `ai-insights`, `cycle-analysis`, `data`, `diagnosis`, `dom`, `live`, `model`, `readings`, `render-core` |
| `js/activity.ts` | 62 | 5 | `data`, `format`, `history-fred`, `refresh-season` |
| `js/ai-insights.ts` | 181 | 38 | `charts`, `cycle-analysis`, `data`, `dom`, `marks`, `model`, `refresh-season`, `render-core`, `roster` |
| `js/charts.ts` | 251 | 34 | — |
| `js/concentration.ts` | 49 | 5 | `data`, `format`, `history-fred` |
| `js/cycle-analysis.ts` | 482 | 130 | `charts`, `data`, `dom`, `era`, `fed-phases`, `format`, `history`, `insights`, `marks`, `model`, `refresh-season`, `render-core`, `roster` |
| `js/cycle-tab.ts` | 23 | 2 | `data`, `dom`, `format`, `indicators`, `model`, `refresh-season`, `render-core`, `roster` |
| `js/era.ts` | 37 | 3 | `data`, `indicators`, `model`, `readings`, `render-core` |
| `js/fed-phases.ts` | 133 | 22 | `data`, `format`, `history-fred`, `marks`, `model`, `refresh-season`, `render-core`, `roster` |
| `js/format.ts` | 80 | 35 | — |
| `js/history-charts.ts` | 406 | 13 | `charts`, `data`, `format`, `history`, `history-fred`, `model`, `readings`, `refresh-season` |
| `js/history-fred.ts` | 31 | 14 | — |
| `js/indicators.ts` | 227 | 33 | `charts`, `credit`, `data`, `dom`, `format`, `history`, `history-fred`, `model`, `readings`, `refresh-season`, `render-core`, `roster` |
| `js/inner-pages.ts` | 287 | 13 | `charts`, `data`, `dial-cycle`, `dom`, `format`, `history`, `history-charts`, `model`, `readings`, `refresh-season`, `render-core` |
| `js/insights.ts` | 182 | 17 | `data`, `dom`, `format`, `model`, `readings`, `refresh-season`, `roster` |
| `js/marks.ts` | 60 | 27 | — |
| `js/main.ts` | 44 | 0 | `analysis`, `credit`, `data`, `diagnosis`, `dial-cycle`, `dom`, `history`, `live`, `model`, `pages-nav`, `portfolio`, `readings`, `refresh-season`, `render-core`, `render-pages`, `repaint`, `roster`, `tabs-menu` |

## The boots

A module's top level holds only declarations and values that need nothing else. Whatever runs
at load and reads another module sits in its `boot…()` function, and `js/main.ts` calls them in
this order. `tools/load-order.js` proves no shared value is read before something sets it.

| Order | Boot | Lines |
|---|---|---|
| 1 | `bootDom` | `js/dom.ts:159`–168 |
| 2 | `bootDone` | `js/live.ts:198`–200 |
| 3 | `bootLive` | `js/live.ts:201`–206 |
| 4 | `bootRefreshSeason` | `js/refresh-season.ts:33`–40 |
| 5 | `bootData` | `js/data.ts:521`–572 |
| 6 | `bootCredit` | `js/credit.ts:126`–133 |
| 7 | `bootModel` | `js/model.ts:356`–380 |
| 8 | `bootHistory` | `js/history.ts:452`–475 |
| 9 | `bootReadings` | `js/readings.ts:625`–693 |
| 10 | `bootReadingRegistry` | `js/readings.ts:736`–801 |
| 11 | `bootRoster` | `js/roster.ts:136`–148 |
| 12 | `bootRenderCore` | `js/render-core.ts:490`–499 |
| 13 | `bootRenderPages` | `js/render-pages.ts:401`–416 |
| 14 | `bootDiagnosis` | `js/diagnosis.ts:84`–87 |
| 15 | `bootDialCycle` | `js/dial-cycle.ts:363`–384 |
| 16 | `bootAnalysis` | `js/analysis.ts:83`–87 |
| 17 | `bootPortfolio` | `js/portfolio.ts:107`–? |
| 18 | `bootPagesNav` | `js/pages-nav.ts:178`–184 |
| 19 | `bootTabsMenu` | `js/tabs-menu.ts:216`–227 |
| 20 | `bootRepaint` | `js/repaint.ts:26`–38 |

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
| 43 | `layer` · export | `function layer(` |
| 44 | `onScreen` · export | `function onScreen(` |
| 45 | `focusQuiet` · export | `function focusQuiet(` |
| 46 | `tabStops` | `function tabStops(` |
| 50 | `keepTab` | `function keepTab(` |
| 56 | `rovingKeys` · export | `function rovingKeys(` |
| 71 | `trendText` · export | `function trendText(` |
| 72 | `trendHead` | `function trendHead(` |
| 73 | `trendCard` | `function trendCard(` |
| 76 | `trendDoor` · export | `function trendDoor(` |
| 79 | `trendJump` · export | `function trendJump(` |
| 82 | `trendBox` · export | `function trendBox(` |
| 83 | `trendSoon` · export | `function trendSoon(` |
| 86 | `moreRow` · export | `function moreRow(` |
| 92 | `viewMore` · export | `function viewMore(` |
| 102 | `appendSvgMarkup` · export | `function appendSvgMarkup(` |
| 124 | `addSources` · export | `function addSources(` |
| 135 | `SVG_NS` | `var SVG_NS =` |
| 136 | `svgEl` · export | `function svgEl(` |
| 142 | `detailSlot` · export | `function detailSlot(` |
| 152 | `expandBtn` · export | `function expandBtn(` |

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
| 97 | `HOLD_BAND` · export | `var HOLD_BAND =` |
| 133 | `labRow` · export | `function labRow(` |
| 134 | `PRODUCTIVITY_TREND` · export | `var PRODUCTIVITY_TREND =` |

#### Consumer confidence

| Line | Name | Anchor |
|---|---|---|
| 136 | `CONFIDENCE_LINE` · export | `var CONFIDENCE_LINE =` |

#### Desire: real spending on durable goods

| Line | Name | Anchor |
|---|---|---|
| 138 | `DESIRE_LINE` · export | `var DESIRE_LINE =` |

#### Desire: the equity risk premium

| Line | Name | Anchor |
|---|---|---|
| 140 | `PREMIUM_LINE` · export | `var PREMIUM_LINE =` |

#### The deficit, year by year

| Line | Name | Anchor |
|---|---|---|
| 142 | `DEF_FROM_YEAR` · export | `var DEF_FROM_YEAR =` |
| 143 | `deficitHistory` · export | `var deficitHistory =` |
| 144 | `DEF_MEAN` · export | `var DEF_MEAN =` |
| 147 | `checkDeficitHistory` | `function checkDeficitHistory(` |
| 152 | `fedFundsRange` · export | `function fedFundsRange(` |
| 156 | `buffettHistory` · export | `var buffettHistory =` |
| 177 | `syncGrossDebt` | `function syncGrossDebt(` |
| 187 | `syncInterest` | `function syncInterest(` |
| 197 | `checkInterest` | `function checkInterest(` |
| 202 | `syncFederal` | `function syncFederal(` |
| 203 | `checkFederal` | `function checkFederal(` |
| 204 | `stressOf` | `function stressOf(` |
| 208 | `deriveStress` | `function deriveStress(` |
| 209 | `checkGrossDebt` | `function checkGrossDebt(` |
| 219 | `curveAt` · export | `function curveAt(` |
| 223 | `curveNeed` | `function curveNeed(` |
| 224 | `curveSpread` · export | `function curveSpread(` |
| 225 | `policyDirection` · export | `function policyDirection(` |
| 228 | `capeAsOf` · export | `function capeAsOf(` |
| 229 | `syncCapeHistory` · export | `function syncCapeHistory(` |
| 233 | `valRow` · export | `function valRow(` |
| 237 | `fileRow` · export | `function fileRow(` |
| 238 | `M2V_FROM_YEAR` · export | `var M2V_FROM_YEAR =` |
| 239 | `m2vHistory` · export | `var m2vHistory =` |
| 240 | `m2vPre` | `var m2vPre =` |
| 241 | `PULSE_PRE2008` · export | `var PULSE_PRE2008 =` |
| 242 | `PULSE_STEADY_LO` · export | `var PULSE_STEADY_LO =` |
| 243 | `PULSE_FLOOR` · export | `var PULSE_FLOOR =` |
| 260 | `checkVelocityHistory` | `function checkVelocityHistory(` |
| 265 | `M2_FROM_YEAR` · export | `var M2_FROM_YEAR =` |
| 266 | `m2Level` | `var m2Level =` |
| 267 | `m2Yoy` · export | `var m2Yoy =` |
| 268 | `m2Ref` | `var m2Ref =` |
| 269 | `M2_PACE_LO` · export | `var M2_PACE_LO =` |
| 270 | `M2_NORM` · export | `var M2_NORM =` |
| 271 | `UNEMP_FROM_YEAR` | `var UNEMP_FROM_YEAR =` |
| 272 | `unempHistory` · export | `var unempHistory =` |
| 276 | `checkUnemploymentHistory` | `function checkUnemploymentHistory(` |
| 284 | `SAHM_TRIGGER` · export | `var SAHM_TRIGGER =` |
| 285 | `unempSahm` · export | `var unempSahm =` |
| 286 | `avg3` | `function avg3(` |
| 290 | `sahmAt` | `function sahmAt(` |
| 295 | `sahmOf` · export | `function sahmOf(` |
| 299 | `NROU_NOW` · export | `var NROU_NOW =` |
| 300 | `checkFedFundsHistory` | `function checkFedFundsHistory(` |
| 307 | `ACT_BAND_LO` · export | `var ACT_BAND_LO =` |
| 308 | `CPI_TARGET` · export | `var CPI_TARGET =` |
| 312 | `FED_TARGET_SRC` · export | `var FED_TARGET_SRC =` |
| 313 | `TEMP_BAND_LO` · export | `var TEMP_BAND_LO =` |
| 314 | `PCE_SWITCH_SRC` · export | `var PCE_SWITCH_SRC =` |
| 315 | `PCE_SRC` · export | `var PCE_SRC =` |
| 316 | `GDP_NORM` · export | `var GDP_NORM =` |
| 317 | `checkMoneyStock` | `function checkMoneyStock(` |
| 362 | `DSR_FROM_YEAR` · export | `var DSR_FROM_YEAR =` |
| 363 | `dsrHistory` · export | `var dsrHistory =` |
| 364 | `SAV_FROM_YEAR` · export | `var SAV_FROM_YEAR =` |
| 365 | `savHistory` · export | `var savHistory =` |
| 367 | `SAV_THIN` · export | `var SAV_THIN =` |
| 368 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 376 | `SAV_OFFSET` · export | `var SAV_OFFSET =` |
| 377 | `dsrNow` · export | `var dsrNow =` |
| 378 | `savNow` · export | `var savNow =` |
| 379 | `DSR_MEAN` · export | `var DSR_MEAN =` |
| 380 | `curveNoteFull` · export | `var curveNoteFull =` |
| 391 | `VOL_JOIN` · export | `var VOL_JOIN =` |
| 513 | `typicalCycleYears` · export | `var typicalCycleYears =` |

### `js/credit.ts`

#### Credit and debt: the credit gap, margin debt, lending standards and delinquencies

| Line | Name | Anchor |
|---|---|---|
| 11 | `GAP_BUILD` · export | `var GAP_BUILD =` |
| 32 | `avgSpan` | `function avgSpan(` |
| 33 | `pointLabel` | `function pointLabel(` |
| 34 | `gapWord` | `function gapWord(` |
| 41 | `marginWord` | `function marginWord(` |
| 46 | `lendingWord` | `function lendingWord(` |
| 51 | `delinquencyWord` | `function delinquencyWord(` |
| 57 | `lendingSpec` | `function lendingSpec(` |
| 66 | `specs` | `function specs(` |
| 93 | `readingOf` | `function readingOf(` |
| 116 | `creditInsight` · export | `function creditInsight(` |

### `js/model.ts`

#### The season, computed

| Line | Name | Anchor |
|---|---|---|
| 13 | `monthIndex` | `function monthIndex(` |
| 14 | `cpiTrend` | `function cpiTrend(` |
| 20 | `cpiYear` | `function cpiYear(` |
| 24 | `cpiDirectionOf` | `function cpiDirectionOf(` |
| 25 | `cpiDirectionAt` · export | `function cpiDirectionAt(` |
| 29 | `PEAK_YEARS` · export | `var PEAK_YEARS =` |
| 32 | `regimeOf` | `function regimeOf(` |
| 35 | `readSeason` | `function readSeason(` |
| 46 | `potentialOf` · export | `function potentialOf(` |
| 51 | `peakTrend` | `function peakTrend(` |
| 57 | `closingReading` | `function closingReading(` |
| 61 | `quarterRegime` · export | `function quarterRegime(` |
| 62 | `qIndex` | `function qIndex(` |
| 63 | `recessionRecord` · export | `function recessionRecord(` |
| 88 | `regimeAt` | `function regimeAt(` |
| 89 | `seasonTitle` · export | `function seasonTitle(` |
| 90 | `cycleReturns` · export | `function cycleReturns(` |
| 100 | `cycleModel` · export | `function cycleModel(` |
| 139 | `potentialGap` · export | `function potentialGap(` |
| 143 | `seasonWhyFor` | `function seasonWhyFor(` |
| 149 | `pricesWord` | `function pricesWord(` |
| 153 | `inflationFigure` · export | `function inflationFigure(` |
| 158 | `growthWord` · export | `function growthWord(` |
| 161 | `contractingClause` | `function contractingClause(` |
| 165 | `cycleNowNote` · export | `function cycleNowNote(` |
| 173 | `seasonOfQ` · export | `function seasonOfQ(` |
| 174 | `seasonGroup` · export | `function seasonGroup(` |

#### The diagnosis: how she feels, and what has followed

| Line | Name | Anchor |
|---|---|---|
| 176 | `rankToDate` · export | `function rankToDate(` |
| 180 | `diagnoseToday` · export | `function diagnoseToday(` |

#### Her mood: one range from Depression to Mania

| Line | Name | Anchor |
|---|---|---|
| 185 | `rankIn` | `function rankIn(` |
| 191 | `moodSeries` | `function moodSeries(` |
| 199 | `moodAt` | `function moodAt(` |
| 205 | `MOOD_TURN` · export | `var MOOD_TURN =` |
| 208 | `moodWord` | `function moodWord(` |
| 212 | `moodRead` | `function moodRead(` |
| 220 | `moodTrack` · export | `function moodTrack(` |
| 226 | `moodToday` · export | `function moodToday(` |
| 230 | `moodSince` | `function moodSince(` |
| 231 | `cycleStory` · export | `function cycleStory(` |

#### Cycles by name

| Line | Name | Anchor |
|---|---|---|
| 242 | `cycleOfYear` · export | `function cycleOfYear(` |
| 243 | `cycleByName` · export | `function cycleByName(` |
| 247 | `openCycle` · export | `function openCycle(` |
| 251 | `cycleSlice` · export | `function cycleSlice(` |
| 259 | `totalGrowthYears` · export | `function totalGrowthYears(` |
| 267 | `cycLabel` · export | `function cycLabel(` |
| 271 | `cycleQtrIdx` · export | `function cycleQtrIdx(` |
| 276 | `totalRiseIn` · export | `function totalRiseIn(` |
| 286 | `yearInflation` · export | `function yearInflation(` |
| 290 | `yearGrowth` · export | `function yearGrowth(` |
| 293 | `yearSoFar` · export | `function yearSoFar(` |
| 297 | `eraInflation` · export | `function eraInflation(` |
| 306 | `eraGrowth` · export | `function eraGrowth(` |
| 322 | `eraMarketTotal` · export | `function eraMarketTotal(` |
| 327 | `forgetMood` · export | `function forgetMood(` |
| 333 | `seasonYears` | `function seasonYears(` |
| 344 | `seasonQuarters` | `function seasonQuarters(` |

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
| 43 | `headDots` | `function headDots(` |
| 48 | `headInfo` | `function headInfo(` |
| 52 | `headBtn` | `function headBtn(` |
| 55 | `headNote` | `function headNote(` |
| 63 | `headMenuHtml` | `function headMenuHtml(` |
| 88 | `paintHeadMenus` | `function paintHeadMenus(` |
| 99 | `headMoreBtn` | `function headMoreBtn(` |
| 103 | `headMenuFirst` | `function headMenuFirst(` |
| 107 | `headMenuShut` | `function headMenuShut(` |
| 112 | `histNote` · export | `function histNote(` |
| 113 | `TIMELINE_STOPS` | `var TIMELINE_STOPS =` |
| 119 | `timelineSpan` · export | `function timelineSpan(` |
| 123 | `timelineFor` | `function timelineFor(` |
| 137 | `windowScale` · export | `function windowScale(` |
| 152 | `histReadEnsure` | `function histReadEnsure(` |
| 172 | `geomFmt` | `function geomFmt(` |
| 173 | `attrNum` | `function attrNum(` |
| 174 | `histReadFill` | `function histReadFill(` |
| 222 | `histAxisEnds` | `function histAxisEnds(` |
| 233 | `histLegend` | `function histLegend(` |
| 292 | `refitHistory` · export | `function refitHistory(` |
| 302 | `wireHistHover` | `function wireHistHover(` |
| 335 | `histShow` | `function histShow(` |
| 344 | `histLive` | `function histLive(` |
| 351 | `histKeysWire` | `function histKeysWire(` |
| 365 | `mWindowFrom` · export | `function mWindowFrom(` |
| 369 | `qWindowFrom` · export | `function qWindowFrom(` |
| 373 | `defFrom` · export | `function defFrom(` |
| 377 | `tabSegs` | `function tabSegs(` |
| 385 | `tabBar` · export | `function tabBar(` |
| 388 | `modeBar` | `function modeBar(` |
| 392 | `controlKeys` · export | `function controlKeys(` |
| 396 | `controlKeysIn` | `function controlKeysIn(` |
| 402 | `histControls` · export | `function histControls(` |
| 410 | `controlsBox` | `function controlsBox(` |
| 411 | `pageCycle` · export | `function pageCycle(` |
| 416 | `cyclePicker` | `function cyclePicker(` |
| 428 | `pickRow` | `function pickRow(` |
| 432 | `nameAside` | `function nameAside(` |
| 433 | `rangeBar` | `function rangeBar(` |
| 437 | `headSigma` · export | `function headSigma(` |
| 442 | `attachHistory` · export | `function attachHistory(` |

### `js/readings.ts`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 24 | `productivityWord` | `function productivityWord(` |
| 35 | `confidenceWord` | `function confidenceWord(` |
| 41 | `desireWord` | `function desireWord(` |
| 47 | `deficitBlock` · export | `function deficitBlock(` |
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
| 277 | `sahmNow` | `function sahmNow(` |
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
| 447 | `householdsWord` | `function householdsWord(` |
| 454 | `dsrInfoHtml` · export | `function dsrInfoHtml(` |
| 471 | `savInfoHtml` · export | `function savInfoHtml(` |
| 488 | `volatilityDetailHtml` · export | `function volatilityDetailHtml(` |
| 502 | `marketWord` | `function marketWord(` |
| 506 | `marketCol` | `function marketCol(` |
| 507 | `marketInfoHtml` | `function marketInfoHtml(` |
| 516 | `rowReadings` · export | `function rowReadings(` |
| 517 | `indOf` · export | `function indOf(` |
| 518 | `policyFacts` | `function policyFacts(` |
| 525 | `policyFactRows` · export | `function policyFactRows(` |
| 528 | `growthShownCap` · export | `function growthShownCap(` |
| 529 | `phaseClass` · export | `function phaseClass(` |
| 530 | `activityStackHtml` | `function activityStackHtml(` |
| 540 | `seatTemperature` | `function seatTemperature(` |
| 548 | `DATED_UNIT` · export | `var DATED_UNIT =` |
| 553 | `deriveFeelingReadings` | `function deriveFeelingReadings(` |

#### Temperature's notes

| Line | Name | Anchor |
|---|---|---|
| 694 | `isNum` | `function isNum(` |
| 696 | `rowId` | `function rowId(` |
| 697 | `rowLike` | `function rowLike(` |
| 710 | `rowsOk` | `function rowsOk(` |
| 713 | `deriveHorizon` | `function deriveHorizon(` |
| 726 | `fieldsKept` | `function fieldsKept(` |
| 730 | `vixAsOf` | `function vixAsOf(` |
| 731 | `coincidentAsOf` | `function coincidentAsOf(` |
| 732 | `periodIso` | `function periodIso(` |

### `js/roster.ts`

#### The roster: every reading, declared once

| Line | Name | Anchor |
|---|---|---|
| 38 | `keyed` · export | `function keyed(` |
| 44 | `rosterFor` · export | `function rosterFor(` |
| 45 | `checkRoster` | `function checkRoster(` |
| 63 | `categoriesShown` · export | `function categoriesShown(` |
| 67 | `declareRoster` | `function declareRoster(` |

### `js/render-core.ts`

#### RENDER: range bars + card helpers

| Line | Name | Anchor |
|---|---|---|
| 18 | `metricSheet` · export | `function metricSheet(` |
| 24 | `drawsPage` · export | `function drawsPage(` |
| 25 | `needInd` · export | `function needInd(` |
| 26 | `levelHeadings` | `function levelHeadings(` |
| 34 | `wireDetailModal` | `function wireDetailModal(` |

#### A season strip and the economy's chips, shared by the cycle list and the Diagnosis's years

| Line | Name | Anchor |
|---|---|---|
| 70 | `strip` · export | `function strip(` |
| 73 | `stripDots` · export | `function stripDots(` |
| 76 | `stripTrack` · export | `function stripTrack(` |
| 79 | `seasonRuns` · export | `function seasonRuns(` |
| 88 | `seasonPills` · export | `function seasonPills(` |
| 96 | `marketPills` · export | `function marketPills(` |
| 104 | `seasonRunsLabel` · export | `function seasonRunsLabel(` |
| 107 | `econChips` · export | `function econChips(` |
| 112 | `dxHead` · export | `function dxHead(` |
| 116 | `dxSys` · export | `function dxSys(` |
| 117 | `catHeadCard` · export | `function catHeadCard(` |
| 121 | `timingMark` | `function timingMark(` |
| 129 | `timingPill` · export | `function timingPill(` |
| 134 | `collapseEmptyBlocks` · export | `function collapseEmptyBlocks(` |
| 142 | `seatPageFoot` · export | `function seatPageFoot(` |
| 153 | `cardDetailHtml` · export | `function cardDetailHtml(` |

#### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

| Line | Name | Anchor |
|---|---|---|
| 167 | `latestYieldPoint` | `function latestYieldPoint(` |
| 174 | `withLatestPoint` | `function withLatestPoint(` |
| 179 | `pressureMaturities` | `function pressureMaturities(` |
| 203 | `registerFlowPages` | `function registerFlowPages(` |
| 242 | `ylmYearMarks` | `function ylmYearMarks(` |
| 261 | `ylmColumns` | `function ylmColumns(` |
| 281 | `ylmFitLine` | `function ylmFitLine(` |
| 293 | `pressureHead` | `function pressureHead(` |
| 311 | `showPressureView` | `function showPressureView(` |
| 316 | `renderPressurePage` | `function renderPressurePage(` |

#### Pressure's Insights

| Line | Name | Anchor |
|---|---|---|
| 443 | `renderPressureInsights` | `function renderPressureInsights(` |
| 478 | `spreadPick` · export | `var spreadPick =` |
| 479 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 480 | `spreadLabel` | `function spreadLabel(` |
| 484 | `tempWord` · export | `function tempWord(` |
| 488 | `gdpFigure` · export | `function gdpFigure(` |

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
| 155 | `hubShowDefault` | `function hubShowDefault(` |
| 161 | `hubShowQuarter` | `function hubShowQuarter(` |
| 166 | `hubShowYear` | `function hubShowYear(` |
| 176 | `one` · export | `function one(` |
| 177 | `cycleView` · export | `function cycleView(` |
| 178 | `renderCycleDial` | `function renderCycleDial(` |
| 261 | `dialKeyStep` | `function dialKeyStep(` |
| 269 | `dialSay` | `function dialSay(` |

#### the whole view, for one cycle

| Line | Name | Anchor |
|---|---|---|
| 275 | `renderCycleView` · export | `function renderCycleView(` |
| 280 | `showEra` | `function showEra(` |
| 284 | `showCycle` · export | `function showCycle(` |

#### A cycle's season strip (carried by the one cycle row)

| Line | Name | Anchor |
|---|---|---|
| 286 | `aheadWord` | `function aheadWord(` |
| 287 | `seasonStripHtml` · export | `function seasonStripHtml(` |
| 304 | `marketStripHtml` · export | `function marketStripHtml(` |
| 330 | `STRIP_MIN_RATIO` | `var STRIP_MIN_RATIO =` |
| 331 | `settleStrips` · export | `function settleStrips(` |
| 355 | `settleAll` · export | `function settleAll(` |

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

### `js/activity.ts`

#### Activity: nonfarm payrolls and retail sales, each against a year earlier

| Line | Name | Anchor |
|---|---|---|
| 7 | `PAYROLLS_LINE` · export | `var PAYROLLS_LINE =` |
| 18 | `sideWord` | `function sideWord(` |
| 24 | `gapOf` | `function gapOf(` |
| 29 | `gapSpec` | `function gapSpec(` |
| 42 | `activitySpecs` · export | `function activitySpecs(` |

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
| 13 | `trendOf` · export | `function trendOf(` |
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
| 186 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 187 | `PEEK_W` | `var PEEK_W =` |
| 188 | `PEEK_H` | `var PEEK_H =` |
| 189 | `colPeek` · export | `function colPeek(` |
| 206 | `windowYears` · export | `function windowYears(` |
| 214 | `refName` | `function refName(` |
| 218 | `PULSE_WINDOW` · export | `var PULSE_WINDOW =` |
| 219 | `pulseClipN` | `var pulseClipN =` |
| 220 | `beatPath` | `function beatPath(` |
| 237 | `pulseTraceSvg` · export | `function pulseTraceSvg(` |

### `js/concentration.ts`

#### Concentration: the ten largest S&P 500 holdings' share of the index

| Line | Name | Anchor |
|---|---|---|
| 6 | `CONCENTRATION_TO` · export | `var CONCENTRATION_TO =` |
| 16 | `concentrationSpan` | `function concentrationSpan(` |
| 17 | `concentrationWord` | `function concentrationWord(` |
| 23 | `concentrationRecord` | `function concentrationRecord(` |
| 37 | `concentrationSpecs` · export | `function concentrationSpecs(` |

### `js/cycle-analysis.ts`

#### Her chart: every reading, cycle by cycle, against her own normal ranges

| Line | Name | Anchor |
|---|---|---|
| 21 | `NUM` | `var NUM =` |
| 25 | `quartile` | `function quartile(` |
| 29 | `normOf` | `function normOf(` |
| 34 | `closedCount` | `function closedCount(` |
| 35 | `len` | `function len(` |
| 36 | `flow` | `function flow(` |
| 37 | `visitOf` | `function visitOf(` |
| 44 | `visits` | `function visits(` |
| 45 | `present` | `function present(` |
| 46 | `sdOf` | `function sdOf(` |
| 47 | `drift` | `function drift(` |
| 48 | `cycleLab` | `function cycleLab(` |
| 52 | `cycleReadings` | `function cycleReadings(` |
| 58 | `readingsNorm` | `function readingsNorm(` |
| 61 | `spanOf` | `function spanOf(` |
| 64 | `cardPrint` | `function cardPrint(` |
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
| 140 | `TIERS` | `var TIERS =` |
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
| 171 | `scoreBox` | `function scoreBox(` |
| 172 | `scoreRing` | `function scoreRing(` |
| 173 | `scoreTile` | `function scoreTile(` |
| 176 | `foldSec` | `function foldSec(` |
| 181 | `labSec` | `function labSec(` |
| 185 | `subSec` | `function subSec(` |
| 188 | `bySub` | `function bySub(` |
| 196 | `bySystem` | `function bySystem(` |
| 205 | `findOf` | `function findOf(` |
| 206 | `LENS` | `var LENS =` |
| 207 | `tierOpts` | `function tierOpts(` |
| 210 | `filterTag` | `function filterTag(` |
| 214 | `finder` | `function finder(` |
| 219 | `stepBtn` | `function stepBtn(` |
| 222 | `stepper` | `function stepper(` |
| 228 | `filterDoor` | `function filterDoor(` |
| 231 | `sheetSec` | `function sheetSec(` |
| 232 | `calBtn` | `function calBtn(` |
| 235 | `calOff` | `function calOff(` |
| 236 | `calQuarter` | `function calQuarter(` |
| 240 | `calYear` | `function calYear(` |
| 244 | `calCycle` | `function calCycle(` |
| 249 | `periodCal` | `function periodCal(` |
| 253 | `shown` | `function shown(` |
| 254 | `filterSheet` | `function filterSheet(` |
| 262 | `RESULT` | `var RESULT =` |
| 263 | `narrow` | `function narrow(` |
| 275 | `riskLabs` · export | `function riskLabs(` |
| 276 | `judged` | `function judged(` |
| 277 | `score` | `function score(` |
| 278 | `listWords` · export | `function listWords(` |
| 279 | `word` | `function word(` |
| 280 | `cap` | `function cap(` |
| 282 | `depthWords` | `function depthWords(` |
| 291 | `pinnedFacts` | `function pinnedFacts(` |
| 297 | `methodFacts` | `function methodFacts(` |
| 300 | `chartDetail` | `function chartDetail(` |
| 309 | `cycleScore` · export | `function cycleScore(` |
| 310 | `chartDoor` · export | `function chartDoor(` |
| 314 | `HOME_ID` | `var HOME_ID =` |
| 315 | `statRow` | `function statRow(` |
| 320 | `statBody` | `function statBody(` |
| 323 | `meanOf` | `function meanOf(` |
| 324 | `lengths` | `function lengths(` |
| 325 | `typical` | `function typical(` |
| 326 | `TICK` | `var TICK =` |
| 327 | `tone` | `function tone(` |
| 328 | `mark` | `function mark(` |
| 329 | `RELATIVE` | `var RELATIVE =` |
| 330 | `healthPage` | `function healthPage(` |
| 334 | `healthTone` | `function healthTone(` |
| 335 | `healthRow` | `function healthRow(` |
| 336 | `healthTile` | `function healthTile(` |
| 341 | `cycleBars` | `function cycleBars(` |
| 349 | `barClass` | `function barClass(` |
| 350 | `lengthPage` | `function lengthPage(` |
| 355 | `driftWord` | `function driftWord(` |
| 356 | `variationPage` | `function variationPage(` |
| 361 | `statsHome` | `function statsHome(` |
| 368 | `insightSec` | `function insightSec(` |
| 371 | `catName` | `function catName(` |
| 372 | `markName` | `function markName(` |
| 373 | `countTag` | `function countTag(` |
| 374 | `insightsHome` | `function insightsHome(` |
| 381 | `homeSections` | `function homeSections(` |
| 385 | `whenPicked` | `function whenPicked(` |
| 389 | `pickedKey` | `function pickedKey(` |
| 390 | `periodAt` | `function periodAt(` |
| 394 | `drawChart` | `function drawChart(` |
| 402 | `IND` · export | `var IND =` |
| 403 | `IND_ALL` | `var IND_ALL =` |
| 404 | `searchShell` | `function searchShell(` |
| 405 | `pickCat` | `function pickCat(` |
| 411 | `buildFind` | `function buildFind(` |
| 412 | `fold` | `function fold(` |
| 416 | `wireFinder` | `function wireFinder(` |
| 429 | `setPeriod` | `function setPeriod(` |
| 434 | `pick` | `function pick(` |
| 440 | `refreshSheet` | `function refreshSheet(` |
| 445 | `PICKS` | `var PICKS =` |
| 446 | `centreList` | `function centreList(` |
| 450 | `wirePicks` | `function wirePicks(` |
| 460 | `openWhen` | `function openWhen(` |
| 465 | `wireCatDoors` | `function wireCatDoors(` |
| 471 | `buildCycleChart` · export | `function buildCycleChart(` |

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
| 15 | `monthIdx` | `function monthIdx(` |
| 16 | `monthName` | `function monthName(` |
| 17 | `fedPhases` · export | `function fedPhases(` |
| 26 | `phaseAt` | `function phaseAt(` |
| 31 | `topOf` | `function topOf(` |
| 33 | `runTops` | `function runTops(` |
| 38 | `findRuns` | `function findRuns(` |
| 45 | `cyclePeak` · export | `function cyclePeak(` |

#### The phases chart

| Line | Name | Anchor |
|---|---|---|
| 52 | `VIEW_W` | `var VIEW_W =` |
| 53 | `growthPoints` | `function growthPoints(` |
| 59 | `monthPoints` | `function monthPoints(` |
| 66 | `curve` | `function curve(` |
| 76 | `pct` | `function pct(` |
| 77 | `bandsHtml` | `function bandsHtml(` |
| 88 | `yearsHtml` | `function yearsHtml(` |
| 93 | `plotSvg` | `function plotSvg(` |
| 103 | `level` | `function level(` |
| 104 | `peakLevel` | `function peakLevel(` |
| 107 | `levelsHtml` | `function levelsHtml(` |
| 115 | `endMonthOf` | `function endMonthOf(` |
| 120 | `fedPhasesCard` | `function fedPhasesCard(` |
| 129 | `fedEnvironment` · export | `function fedEnvironment(` |

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
| 77 | `hubLine` · export | `function hubLine(` |
| 78 | `qPretty` · export | `function qPretty(` |
| 79 | `capeFmt1` · export | `function capeFmt1(` |

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
| 402 | `heatStep` | `function heatStep(` |

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
| 21 | `BUFFETT_2001` | `var BUFFETT_2001 =` |
| 27 | `dollars` | `function dollars(` |
| 28 | `midOf` | `function midOf(` |
| 29 | `meterWord` · export | `function meterWord(` |
| 30 | `splitPages` | `function splitPages(` |
| 48 | `signedPct` | `var signedPct =` |
| 49 | `readingPage` | `function readingPage(` |
| 52 | `confidencePage` | `function confidencePage(` |
| 56 | `desirePage` | `function desirePage(` |
| 57 | `premiumPage` | `function premiumPage(` |
| 58 | `marketPage` | `function marketPage(` |
| 62 | `withCredit` | `function withCredit(` |
| 69 | `productivityPage` | `function productivityPage(` |
| 72 | `splitRow` · export | `function splitRow(` |
| 73 | `splitSpec` | `function splitSpec(` |
| 79 | `splitInfo` | `function splitInfo(` |
| 83 | `periodTicks` | `function periodTicks(` |
| 88 | `periodOfSeries` | `function periodOfSeries(` |
| 89 | `drawSplit` | `function drawSplit(` |
| 106 | `mountSplit` | `function mountSplit(` |
| 119 | `seatSplits` | `function seatSplits(` |
| 127 | `mountSplits` · export | `function mountSplits(` |

#### The split indicators' insights

| Line | Name | Anchor |
|---|---|---|
| 133 | `buffettInsight` | `function buffettInsight(` |
| 148 | `debtInsight` | `function debtInsight(` |
| 163 | `productivityInsight` | `function productivityInsight(` |
| 174 | `lineInsight` | `function lineInsight(` |
| 184 | `signedFig` | `function signedFig(` |
| 185 | `confidenceInsight` | `function confidenceInsight(` |
| 191 | `desireInsight` | `function desireInsight(` |
| 196 | `premiumInsight` | `function premiumInsight(` |
| 203 | `ORDINAL` | `var ORDINAL =` |
| 204 | `marketInsight` | `function marketInsight(` |
| 216 | `interestInsight` | `function interestInsight(` |

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
| 2 | `creditSvg` · export | `function creditSvg(` |
| 3 | `dropSvg` | `function dropSvg(` |
| 5 | `gaugeSvg` · export | `function gaugeSvg(` |
| 9 | `diamondSvg` · export | `function diamondSvg(` |
| 13 | `markSvg` | `function markSvg(` |
| 16 | `orbitSvg` · export | `function orbitSvg(` |
| 17 | `flameSvg` · export | `function flameSvg(` |
| 20 | `bagSvg` · export | `function bagSvg(` |
| 23 | `diceSvg` · export | `function diceSvg(` |
| 27 | `clockSvg` · export | `function clockSvg(` |
| 28 | `thermoSvg` · export | `function thermoSvg(` |
| 31 | `personSvg` · export | `function personSvg(` |
| 33 | `calendarSvg` · export | `function calendarSvg(` |
| 34 | `sparkleSvg` · export | `function sparkleSvg(` |
| 36 | `umbrellaSvg` · export | `function umbrellaSvg(` |
| 38 | `slidersSvg` · export | `function slidersSvg(` |
| 40 | `chartSvg` · export | `function chartSvg(` |
| 42 | `ecgSvg` · export | `function ecgSvg(` |
| 44 | `weatherSvg` · export | `function weatherSvg(` |
| 46 | `moodSvg` · export | `function moodSvg(` |
| 47 | `sproutSvg` · export | `function sproutSvg(` |
| 49 | `factorySvg` · export | `function factorySvg(` |
| 50 | `circulationSvg` · export | `function circulationSvg(` |
| 51 | `boltSvg` · export | `function boltSvg(` |
| 52 | `marketSvg` · export | `function marketSvg(` |
| 55 | `volatilitySvg` · export | `function volatilitySvg(` |

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
| 312 | season strip |
| 339 | THE GAP (Keren, V385: "…so if one day I'll tell you I want the spacing to be 30, you would just change |
| 403 | tab bar (app-style segmented navigation) |
| 427 | temperature chart (Cycle tab), after Natural Cycles' temperature view: a column per month of the |
| 515 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
| 654 | Volume's red ramp (Keren, V389: "volume is, in gynaecology, blood — so it should be different shades of |
| 692 | the maturity chart's columns wear the curve's three zones (Keren, V394: "a colour that represents the |
| 741 | One gap between an inner page's containers (Keren, V381: "the spacing between containers in each inner |
| 889 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 898 | The symptoms: a cycle's years against today |
| 1,046 | hero: yield curve |
| 1,076 | the readout (Keren, from Apple Health): it never changes the page's height, which is why it beats a |
| 1,095 | 10Y-3M spread history (quarterly, with recession bands) |
| 1,114 | un-inversion-to-recession historical lag panel |
| 1,122 | long cycle (structural layer) |
| 1,127 | the reading's tag |
| 1,135 | info icon + popover (progressive disclosure for longer notes) |
| 1,149 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 1,212 | footer |

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

