# Map of the source

**Generated. Do not hand-edit** — run `python3 tools/make-map.py` (or `npm run map`).

The source is **8,839 lines** in 40 files, about 607 KB, roughly **172 thousand tokens**. No session can
read it whole, so this file exists to get you to the right two hundred lines.

> **Line numbers go stale; anchors do not.** Use the **anchor** column with grep —
> `grep -rn 'function curveVerdict(' src/` — and treat `file:line` as rough orientation only.

Generated from commit `176394a` on 2026-10-08.

## The page

`src/manifest.json` joins these parts into `index.html`. The `.js` entry is bundled by esbuild
(`tools/bundle.js`) into one script in its place.

| Part | Lines | What |
|---|---|---|
| `page-head.html` | 5 | doctype, meta, and a tiny inline stylesheet that sets the page colour before the real tokens exist |
| `styles.css` | 1,209 | the whole stylesheet, every token and rule |
| `page-body.html` | 251 | the static DOM: tabs, cards, sheet hosts, slots the renderers fill |
| `js/main.ts` | 36 modules | the entry: imports every module and calls their boots in order |
| `page-tail.html` | 45 | the bundle's closing tag, the service-worker registration, </body></html> |

Counts: **36** modules, **752** top-level functions, **119** top-level vars, **369** exported names, **20** boots.

## Modules, in boot order

| Module | Lines | Declarations | Imports from |
|---|---|---|---|
| `js/dom.ts` | 165 | 25 | `format` |
| `js/live.ts` | 207 | 22 | `format` |
| `js/refresh-season.ts` | 44 | 6 | `format`, `history-fred` |
| `js/data.ts` | 568 | 78 | `format`, `history-fred`, `live` |
| `js/credit.ts` | 138 | 10 | `activity`, `charts`, `concentration`, `data`, `format`, `history-fred` |
| `js/model.ts` | 384 | 57 | `data`, `dom`, `format`, `history-fred`, `refresh-season` |
| `js/history.ts` | 493 | 47 | `charts`, `data`, `dom`, `format`, `live`, `model` |
| `js/readings.ts` | 740 | 65 | `charts`, `credit`, `data`, `format`, `history-fred`, `live`, `model`, `refresh-season` |
| `js/roster.ts` | 152 | 4 | `activity`, `concentration`, `credit`, `data`, `format`, `history`, `history-fred`, `live`, `marks`, `readings`, `refresh-season` |
| `js/render-core.ts` | 156 | 21 | `dom`, `format`, `live`, `model`, `refresh-season`, `roster` |
| `js/render-pages.ts` | 376 | 19 | `charts`, `data`, `dom`, `format`, `history`, `history-charts`, `history-fred`, `live`, `model`, `reading`, `readings`, `refresh-season` |
| `js/diagnosis.ts` | 88 | 13 | `ai-insights`, `cycle-analysis`, `data`, `dom`, `fed-phases`, `format`, `live`, `marks`, `model`, `refresh-season`, `render-core` |
| `js/dial-cycle.ts` | 385 | 22 | `cycle-analysis`, `data`, `diagnosis`, `dom`, `format`, `live`, `model`, `refresh-season`, `render-core`, `render-pages`, `roster` |
| `js/analysis.ts` | 88 | 6 | `data`, `dial-cycle`, `dom`, `format`, `history`, `live`, `model`, `render-core`, `render-pages` |
| `js/portfolio.ts` | 108 | 17 | `data`, `dom`, `format`, `marks`, `model`, `render-core` |
| `js/pages-nav.ts` | 146 | 12 | `data`, `dial-cycle`, `dom`, `indicators`, `inner-pages`, `live`, `pressure`, `reading`, `readings`, `render-core`, `render-pages` |
| `js/tabs-menu.ts` | 228 | 10 | `data`, `dial-cycle`, `dom`, `format`, `live`, `model`, `pages-nav`, `refresh-season` |
| `js/repaint.ts` | 38 | 5 | `ai-insights`, `cycle-analysis`, `data`, `diagnosis`, `dom`, `live`, `model`, `readings`, `render-core` |
| `js/activity.ts` | 62 | 5 | `data`, `format`, `history-fred`, `refresh-season` |
| `js/ai-insights.ts` | 181 | 38 | `charts`, `cycle-analysis`, `data`, `dom`, `marks`, `model`, `refresh-season`, `render-core`, `roster` |
| `js/charts.ts` | 264 | 37 | — |
| `js/concentration.ts` | 49 | 5 | `data`, `format`, `history-fred` |
| `js/cycle-analysis.ts` | 474 | 129 | `charts`, `data`, `dom`, `era`, `fed-phases`, `format`, `history`, `insights`, `marks`, `model`, `reading`, `refresh-season`, `render-core`, `roster` |
| `js/era.ts` | 16 | 2 | `reading` |
| `js/fed-phases.ts` | 133 | 22 | `data`, `format`, `history-fred`, `marks`, `model`, `refresh-season`, `render-core`, `roster` |
| `js/format.ts` | 85 | 37 | — |
| `js/history-charts.ts` | 354 | 15 | `charts`, `data`, `format`, `history`, `history-fred`, `model`, `readings`, `refresh-season` |
| `js/history-fred.ts` | 31 | 14 | — |
| `js/indicators.ts` | 195 | 32 | `charts`, `credit`, `data`, `format`, `history`, `history-fred`, `model`, `reading`, `readings`, `refresh-season`, `roster` |
| `js/inner-pages.ts` | 230 | 18 | `charts`, `data`, `dial-cycle`, `dom`, `format`, `history`, `history-charts`, `indicators`, `model`, `reading`, `readings`, `refresh-season`, `render-core`, `roster` |
| `js/insights.ts` | 185 | 18 | `data`, `dom`, `format`, `model`, `readings`, `refresh-season`, `roster` |
| `js/marks.ts` | 60 | 27 | — |
| `js/pressure.ts` | 320 | 13 | `charts`, `data`, `dom`, `format`, `history`, `history-charts`, `live`, `model`, `reading`, `readings`, `rhythm`, `roster` |
| `js/reading.ts` | 94 | 12 | `charts`, `dom`, `format`, `history`, `render-core`, `roster` |
| `js/rhythm.ts` | 48 | 8 | `data`, `format` |
| `js/main.ts` | 44 | 0 | `analysis`, `credit`, `data`, `diagnosis`, `dial-cycle`, `dom`, `history`, `live`, `model`, `pages-nav`, `portfolio`, `readings`, `refresh-season`, `render-core`, `render-pages`, `repaint`, `roster`, `tabs-menu` |

## The boots

A module's top level holds only declarations and values that need nothing else. Whatever runs
at load and reads another module sits in its `boot…()` function, and `js/main.ts` calls them in
this order. `tools/load-order.js` proves no shared value is read before something sets it.

| Order | Boot | Lines |
|---|---|---|
| 1 | `bootDom` | `js/dom.ts:155`–164 |
| 2 | `bootDone` | `js/live.ts:198`–200 |
| 3 | `bootLive` | `js/live.ts:201`–206 |
| 4 | `bootRefreshSeason` | `js/refresh-season.ts:36`–43 |
| 5 | `bootData` | `js/data.ts:516`–567 |
| 6 | `bootCredit` | `js/credit.ts:130`–137 |
| 7 | `bootModel` | `js/model.ts:359`–383 |
| 8 | `bootHistory` | `js/history.ts:469`–492 |
| 9 | `bootReadings` | `js/readings.ts:556`–611 |
| 10 | `bootReadingRegistry` | `js/readings.ts:674`–739 |
| 11 | `bootRoster` | `js/roster.ts:139`–151 |
| 12 | `bootRenderCore` | `js/render-core.ts:150`–155 |
| 13 | `bootRenderPages` | `js/render-pages.ts:367`–372 |
| 14 | `bootDiagnosis` | `js/diagnosis.ts:84`–87 |
| 15 | `bootDialCycle` | `js/dial-cycle.ts:363`–384 |
| 16 | `bootAnalysis` | `js/analysis.ts:83`–87 |
| 17 | `bootPortfolio` | `js/portfolio.ts:107`–? |
| 18 | `bootPagesNav` | `js/pages-nav.ts:139`–145 |
| 19 | `bootTabsMenu` | `js/tabs-menu.ts:216`–227 |
| 20 | `bootRepaint` | `js/repaint.ts:25`–37 |

## Script, module by module

Each module's banner comments are its spine. Each declaration is listed under the section it
falls in. **export** marks a name other modules import.

### `js/dom.ts`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 19 | `byId` · export | `function byId(` |
| 27 | `need` · export | `function need(` |
| 32 | `byIdMaybe` · export | `function byIdMaybe(` |
| 33 | `put` · export | `function put(` |
| 39 | `layer` · export | `function layer(` |
| 40 | `onScreen` · export | `function onScreen(` |
| 41 | `focusQuiet` · export | `function focusQuiet(` |
| 42 | `tabStops` | `function tabStops(` |
| 46 | `keepTab` | `function keepTab(` |
| 52 | `rovingKeys` · export | `function rovingKeys(` |
| 67 | `trendText` · export | `function trendText(` |
| 68 | `trendHead` | `function trendHead(` |
| 69 | `trendCard` | `function trendCard(` |
| 72 | `trendDoor` · export | `function trendDoor(` |
| 75 | `trendJump` · export | `function trendJump(` |
| 78 | `trendBox` · export | `function trendBox(` |
| 79 | `trendSoon` · export | `function trendSoon(` |
| 82 | `moreRow` · export | `function moreRow(` |
| 88 | `viewMore` · export | `function viewMore(` |
| 98 | `appendSvgMarkup` · export | `function appendSvgMarkup(` |
| 120 | `addSources` · export | `function addSources(` |
| 131 | `SVG_NS` | `var SVG_NS =` |
| 132 | `svgEl` · export | `function svgEl(` |
| 138 | `detailSlot` · export | `function detailSlot(` |
| 148 | `expandBtn` · export | `function expandBtn(` |

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
| 33 | `yearDone` · export | `function yearDone(` |

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
| 364 | `SAV_FROM_YEAR` · export | `var SAV_FROM_YEAR =` |
| 365 | `savHistory` · export | `var savHistory =` |
| 367 | `SAV_THIN` · export | `var SAV_THIN =` |
| 368 | `checkHouseholdHistories` | `function checkHouseholdHistories(` |
| 374 | `DSR_MEAN` · export | `var DSR_MEAN =` |
| 375 | `curveNoteFull` · export | `var curveNoteFull =` |
| 386 | `VOL_JOIN` · export | `var VOL_JOIN =` |
| 508 | `typicalCycleYears` · export | `var typicalCycleYears =` |

### `js/credit.ts`

#### Credit, households and debt: consumer credit, margin debt, the saving rate, the debt-to-income ratio and delinquencies

| Line | Name | Anchor |
|---|---|---|
| 12 | `CONSUMER_LINE` · export | `var CONSUMER_LINE =` |
| 35 | `avgSpan` | `function avgSpan(` |
| 36 | `consumerWord` | `function consumerWord(` |
| 41 | `marginWord` | `function marginWord(` |
| 46 | `savingWord` | `function savingWord(` |
| 53 | `debtPaymentsWord` | `function debtPaymentsWord(` |
| 58 | `householdSpecs` | `function householdSpecs(` |
| 77 | `delinquencyWord` | `function delinquencyWord(` |
| 83 | `specs` | `function specs(` |
| 108 | `readingOf` | `function readingOf(` |

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
| 322 | `realReturn` · export | `function realReturn(` |
| 325 | `eraMarketTotal` · export | `function eraMarketTotal(` |
| 330 | `forgetMood` · export | `function forgetMood(` |
| 336 | `seasonYears` | `function seasonYears(` |
| 347 | `seasonQuarters` | `function seasonQuarters(` |

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
| 223 | `histAxisEnds` | `function histAxisEnds(` |
| 234 | `histLegend` | `function histLegend(` |
| 293 | `wireHScroll` | `function wireHScroll(` |
| 308 | `refitHistory` · export | `function refitHistory(` |
| 318 | `wireHistHover` | `function wireHistHover(` |
| 351 | `histShow` | `function histShow(` |
| 360 | `histLive` | `function histLive(` |
| 367 | `histKeysWire` | `function histKeysWire(` |
| 381 | `mWindowFrom` · export | `function mWindowFrom(` |
| 385 | `qWindowFrom` · export | `function qWindowFrom(` |
| 389 | `defFrom` · export | `function defFrom(` |
| 393 | `tabSegs` | `function tabSegs(` |
| 401 | `tabBar` · export | `function tabBar(` |
| 404 | `modeBar` | `function modeBar(` |
| 408 | `controlKeys` · export | `function controlKeys(` |
| 412 | `controlKeysIn` | `function controlKeysIn(` |
| 418 | `histControls` · export | `function histControls(` |
| 426 | `controlsBox` | `function controlsBox(` |
| 427 | `pageCycle` · export | `function pageCycle(` |
| 432 | `cyclePicker` | `function cyclePicker(` |
| 444 | `pickRow` | `function pickRow(` |
| 448 | `nameAside` | `function nameAside(` |
| 449 | `rangeBar` | `function rangeBar(` |
| 453 | `headSigma` · export | `function headSigma(` |
| 458 | `attachHistory` · export | `function attachHistory(` |

### `js/readings.ts`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 24 | `productivityWord` | `function productivityWord(` |
| 35 | `confidenceWord` | `function confidenceWord(` |
| 41 | `desireWord` | `function desireWord(` |
| 47 | `deficitInfoHtml` · export | `function deficitInfoHtml(` |
| 100 | `deriveVolumeTag` | `function deriveVolumeTag(` |
| 104 | `meterFlagged` · export | `function meterFlagged(` |
| 108 | `volumeInfoHtml` · export | `function volumeInfoHtml(` |
| 122 | `pulseInfoHtml` · export | `function pulseInfoHtml(` |
| 135 | `confidenceInfoHtml` | `function confidenceInfoHtml(` |
| 147 | `desireInfoHtml` | `function desireInfoHtml(` |
| 158 | `premiumInfoHtml` | `function premiumInfoHtml(` |
| 170 | `productivityInfoHtml` | `function productivityInfoHtml(` |
| 184 | `activityInfoHtml` · export | `function activityInfoHtml(` |
| 203 | `bandMonths` | `function bandMonths(` |
| 206 | `temperatureInfoHtml` · export | `function temperatureInfoHtml(` |
| 236 | `volumeVerdict` · export | `function volumeVerdict(` |
| 243 | `unempState` · export | `function unempState(` |
| 248 | `sahmNow` | `function sahmNow(` |
| 249 | `potentialSentence` | `function potentialSentence(` |
| 257 | `growthInfoHtml` · export | `function growthInfoHtml(` |
| 277 | `velocityVerdict` | `function velocityVerdict(` |
| 285 | `laborWord` · export | `function laborWord(` |
| 288 | `temperatureWord` · export | `function temperatureWord(` |
| 293 | `deriveLaggingTags` | `function deriveLaggingTags(` |
| 299 | `derivePulseTag` | `function derivePulseTag(` |
| 332 | `volatilityTag` · export | `function volatilityTag(` |
| 338 | `fearCurve` · export | `function fearCurve(` |
| 343 | `curveVerdict` · export | `function curveVerdict(` |
| 348 | `valuationVerdict` · export | `function valuationVerdict(` |
| 356 | `PRESSURE_ZONES` | `var PRESSURE_ZONES =` |
| 360 | `pressureZone` · export | `function pressureZone(` |
| 366 | `HZN_BACK` | `var HZN_BACK =` |
| 367 | `hznLast` | `function hznLast(` |
| 368 | `hznNeed` | `function hznNeed(` |
| 369 | `hznDelta` | `function hznDelta(` |
| 370 | `hznRecord` | `function hznRecord(` |
| 374 | `hznBack` | `function hznBack(` |
| 375 | `horizonWord` | `function horizonWord(` |
| 380 | `derivePressureTendency` | `function derivePressureTendency(` |
| 392 | `horizonInfoHtml` · export | `function horizonInfoHtml(` |
| 413 | `pulseBlock` · export | `function pulseBlock(` |
| 425 | `volatilityDetailHtml` · export | `function volatilityDetailHtml(` |
| 439 | `marketWord` | `function marketWord(` |
| 443 | `realWord` | `function realWord(` |
| 447 | `marketCol` | `function marketCol(` |
| 448 | `yearLead` | `function yearLead(` |
| 453 | `realInfoHtml` | `function realInfoHtml(` |
| 462 | `marketInfoHtml` | `function marketInfoHtml(` |
| 469 | `rowReadings` · export | `function rowReadings(` |
| 470 | `indOf` · export | `function indOf(` |
| 471 | `policyFacts` | `function policyFacts(` |
| 478 | `policyFactRows` · export | `function policyFactRows(` |
| 481 | `gdpWord` · export | `function gdpWord(` |
| 482 | `phaseClass` · export | `function phaseClass(` |
| 487 | `deriveFeelingReadings` | `function deriveFeelingReadings(` |

#### Temperature's notes

| Line | Name | Anchor |
|---|---|---|
| 613 | `yearReading` | `function yearReading(` |
| 631 | `isNum` | `function isNum(` |
| 633 | `rowId` | `function rowId(` |
| 634 | `rowLike` | `function rowLike(` |
| 647 | `rowsOk` | `function rowsOk(` |
| 650 | `deriveHorizon` | `function deriveHorizon(` |
| 664 | `fieldsKept` | `function fieldsKept(` |
| 668 | `vixAsOf` | `function vixAsOf(` |
| 669 | `coincidentAsOf` | `function coincidentAsOf(` |
| 670 | `periodIso` | `function periodIso(` |

### `js/roster.ts`

#### The roster: every reading, declared once

| Line | Name | Anchor |
|---|---|---|
| 39 | `keyed` · export | `function keyed(` |
| 45 | `checkRoster` | `function checkRoster(` |
| 63 | `categoriesShown` · export | `function categoriesShown(` |
| 67 | `declareRoster` | `function declareRoster(` |

### `js/render-core.ts`

#### RENDER: range bars + card helpers

| Line | Name | Anchor |
|---|---|---|
| 10 | `metricSheet` · export | `function metricSheet(` |
| 16 | `drawsPage` · export | `function drawsPage(` |
| 17 | `levelHeadings` | `function levelHeadings(` |
| 25 | `wireDetailModal` | `function wireDetailModal(` |

#### A season strip and the economy's chips, shared by the cycle list and the Diagnosis's years

| Line | Name | Anchor |
|---|---|---|
| 61 | `strip` · export | `function strip(` |
| 64 | `stripDots` · export | `function stripDots(` |
| 67 | `stripTrack` · export | `function stripTrack(` |
| 70 | `seasonRuns` · export | `function seasonRuns(` |
| 79 | `seasonPills` · export | `function seasonPills(` |
| 87 | `marketPills` · export | `function marketPills(` |
| 95 | `seasonRunsLabel` · export | `function seasonRunsLabel(` |
| 98 | `econChips` · export | `function econChips(` |
| 103 | `dxHead` · export | `function dxHead(` |
| 107 | `dxSys` · export | `function dxSys(` |
| 108 | `catHeadCard` · export | `function catHeadCard(` |
| 112 | `timingMark` | `function timingMark(` |
| 120 | `timingPill` · export | `function timingPill(` |
| 125 | `collapseEmptyBlocks` · export | `function collapseEmptyBlocks(` |
| 133 | `seatPageFoot` · export | `function seatPageFoot(` |
| 144 | `tempWord` · export | `function tempWord(` |
| 148 | `gdpFigure` · export | `function gdpFigure(` |

### `js/render-pages.ts`

#### RENDER: yield-curve spread history chart, 10Y-3M or 10Y-2Y

| Line | Name | Anchor |
|---|---|---|
| 17 | `spreadSeries` | `function spreadSeries(` |
| 61 | `spreadDetail` | `function spreadDetail(` |
| 65 | `paintSpreads` | `function paintSpreads(` |

#### RENDER: un-inversion-to-recession historical lag panel

| Line | Name | Anchor |
|---|---|---|
| 133 | `deriveUninversionDetail` | `function deriveUninversionDetail(` |

#### RENDER: the Treasury spreads

| Line | Name | Anchor |
|---|---|---|
| 158 | `spreadPick` | `var spreadPick =` |
| 159 | `HZN_SPREADS` | `var HZN_SPREADS =` |
| 160 | `spreadLabel` | `function spreadLabel(` |
| 164 | `spreadsHead` | `function spreadsHead(` |
| 176 | `defineSpreads` | `function defineSpreads(` |
| 200 | `spreadInsights` | `function spreadInsights(` |

#### RENDER: Hormones

| Line | Name | Anchor |
|---|---|---|
| 226 | `ffCycleMonths` | `function ffCycleMonths(` |
| 234 | `hormonesInfo` | `function hormonesInfo(` |
| 248 | `ffPeaks` | `function ffPeaks(` |
| 261 | `hormonesInsight` | `function hormonesInsight(` |
| 283 | `defineHormones` | `function defineHormones(` |

#### RENDER: Volatility — the VIX since 1986, and the shape of its curve today

| Line | Name | Anchor |
|---|---|---|
| 300 | `defineVolatility` | `function defineVolatility(` |
| 331 | `volatilityHighlights` | `function volatilityHighlights(` |

#### Per-cycle growth helpers (the cycle view and the Calendar list both use them)

| Line | Name | Anchor |
|---|---|---|
| 359 | `setTopbar` · export | `function setTopbar(` |
| 373 | `defineSubjectReadings` · export | `function defineSubjectReadings(` |

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
| 18 | `openTarget` | `function openTarget(` |
| 19 | `tabPanel` | `function tabPanel(` |
| 20 | `scrollSoon` | `function scrollSoon(` |
| 21 | `viewTab` | `function viewTab(` |
| 22 | `renderSignsList` | `function renderSignsList(` |

#### THE NAVIGATION CONTROLLER

| Line | Name | Anchor |
|---|---|---|
| 32 | `BACK` | `var BACK =` |
| 33 | `backPush` | `function backPush(` |
| 34 | `backClear` | `function backClear(` |
| 35 | `backPopped` | `function backPopped(` |
| 36 | `plainHome` | `function plainHome(` |
| 39 | `buildNav` | `function buildNav(` |

#### The metric page

| Line | Name | Anchor |
|---|---|---|
| 133 | `renderPagesAndNav` | `function renderPagesAndNav(` |

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
| 14 | `syncCape` | `function syncCape(` |
| 15 | `repaintPolicy` | `function repaintPolicy(` |
| 16 | `repaintDiagnosis` | `function repaintDiagnosis(` |
| 19 | `repaintDerived` | `function repaintDerived(` |

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
| 98 | `yLabel` | `function yLabel(` |
| 101 | `xLabel` · export | `function xLabel(` |
| 104 | `crossLine` · export | `function crossLine(` |
| 107 | `zeroRule` · export | `function zeroRule(` |
| 110 | `meanRule` · export | `function meanRule(` |
| 112 | `publishGeom` · export | `function publishGeom(` |
| 113 | `histBar` · export | `function histBar(` |
| 116 | `histTip` · export | `function histTip(` |
| 117 | `avgRule` · export | `function avgRule(` |
| 120 | `vhOpen` · export | `function vhOpen(` |
| 121 | `autoTicks` | `function autoTicks(` |
| 129 | `chartAxes` · export | `function chartAxes(` |
| 153 | `divergeChart` · export | `function divergeChart(` |

#### A series' highest reading within a span

| Line | Name | Anchor |
|---|---|---|
| 188 | `PEEK_MARKS` | `var PEEK_MARKS =` |
| 189 | `PEEK_W` | `var PEEK_W =` |
| 190 | `PEEK_H` | `var PEEK_H =` |
| 191 | `colPeek` · export | `function colPeek(` |
| 208 | `windowYears` · export | `function windowYears(` |
| 216 | `refName` | `function refName(` |
| 220 | `PULSE_WINDOW` · export | `var PULSE_WINDOW =` |
| 221 | `pulseClipN` | `var pulseClipN =` |
| 222 | `beatPath` · export | `function beatPath(` |
| 242 | `lanePeriod` | `function lanePeriod(` |
| 246 | `pulseLane` · export | `function pulseLane(` |
| 250 | `pulseTraceSvg` · export | `function pulseTraceSvg(` |

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
| 22 | `NUM` | `var NUM =` |
| 26 | `normOf` | `function normOf(` |
| 31 | `closedCount` | `function closedCount(` |
| 32 | `len` | `function len(` |
| 33 | `flow` | `function flow(` |
| 34 | `visitOf` | `function visitOf(` |
| 41 | `visits` | `function visits(` |
| 42 | `present` | `function present(` |
| 43 | `sdOf` | `function sdOf(` |
| 44 | `drift` | `function drift(` |
| 45 | `cycleLab` | `function cycleLab(` |
| 49 | `cycleReadings` | `function cycleReadings(` |
| 55 | `readingsNorm` | `function readingsNorm(` |
| 58 | `spanOf` | `function spanOf(` |
| 61 | `cardPrint` | `function cardPrint(` |
| 65 | `readingLab` | `function readingLab(` |
| 73 | `forgetLabs` · export | `function forgetLabs(` |
| 74 | `cycleLabs` | `function cycleLabs(` |
| 81 | `labs` · export | `function labs(` |
| 82 | `normAt` | `function normAt(` |
| 83 | `unread` | `function unread(` |
| 85 | `atCycle` | `function atCycle(` |
| 88 | `atWhen` | `function atWhen(` |
| 93 | `nowWhen` · export | `function nowWhen(` |
| 94 | `yearly` | `function yearly(` |
| 96 | `whenValue` | `function whenValue(` |
| 103 | `quarterKey` | `function quarterKey(` |
| 104 | `whenMeans` | `function whenMeans(` |
| 115 | `hasWhen` | `function hasWhen(` |
| 116 | `periodRows` | `function periodRows(` |
| 125 | `state` | `function state(` |
| 130 | `yearsWord` · export | `function yearsWord(` |
| 131 | `fmt` · export | `function fmt(` |
| 132 | `TIERS` | `var TIERS =` |
| 133 | `tier` | `function tier(` |
| 137 | `catTitle` | `function catTitle(` |
| 138 | `side` | `function side(` |
| 139 | `findWords` | `function findWords(` |
| 143 | `rowTag` | `function rowTag(` |
| 144 | `cardWord` | `function cardWord(` |
| 148 | `labItem` | `function labItem(` |
| 154 | `ring` | `function ring(` |
| 158 | `pastScores` | `function pastScores(` |
| 159 | `scoreTier` | `function scoreTier(` |
| 163 | `scoreBox` | `function scoreBox(` |
| 164 | `scoreRing` | `function scoreRing(` |
| 165 | `scoreTile` | `function scoreTile(` |
| 168 | `foldSec` | `function foldSec(` |
| 173 | `labSec` | `function labSec(` |
| 177 | `subSec` | `function subSec(` |
| 180 | `bySub` | `function bySub(` |
| 188 | `bySystem` | `function bySystem(` |
| 197 | `findOf` | `function findOf(` |
| 198 | `LENS` | `var LENS =` |
| 199 | `tierOpts` | `function tierOpts(` |
| 202 | `filterTag` | `function filterTag(` |
| 206 | `finder` | `function finder(` |
| 211 | `stepBtn` | `function stepBtn(` |
| 214 | `stepper` | `function stepper(` |
| 220 | `filterDoor` | `function filterDoor(` |
| 223 | `sheetSec` | `function sheetSec(` |
| 224 | `calBtn` | `function calBtn(` |
| 227 | `calOff` | `function calOff(` |
| 228 | `calQuarter` | `function calQuarter(` |
| 232 | `calYear` | `function calYear(` |
| 236 | `calCycle` | `function calCycle(` |
| 241 | `periodCal` | `function periodCal(` |
| 245 | `shown` | `function shown(` |
| 246 | `filterSheet` | `function filterSheet(` |
| 254 | `RESULT` | `var RESULT =` |
| 255 | `narrow` | `function narrow(` |
| 267 | `riskLabs` · export | `function riskLabs(` |
| 268 | `judged` | `function judged(` |
| 269 | `score` | `function score(` |
| 270 | `listWords` · export | `function listWords(` |
| 271 | `word` | `function word(` |
| 272 | `cap` | `function cap(` |
| 274 | `depthWords` | `function depthWords(` |
| 283 | `pinnedFacts` | `function pinnedFacts(` |
| 289 | `methodFacts` | `function methodFacts(` |
| 292 | `chartDetail` | `function chartDetail(` |
| 301 | `cycleScore` · export | `function cycleScore(` |
| 302 | `chartDoor` · export | `function chartDoor(` |
| 306 | `HOME_ID` | `var HOME_ID =` |
| 307 | `statRow` | `function statRow(` |
| 312 | `statBody` | `function statBody(` |
| 315 | `meanOf` | `function meanOf(` |
| 316 | `lengths` | `function lengths(` |
| 317 | `typical` | `function typical(` |
| 318 | `TICK` | `var TICK =` |
| 319 | `tone` | `function tone(` |
| 320 | `mark` | `function mark(` |
| 321 | `RELATIVE` | `var RELATIVE =` |
| 322 | `healthPage` | `function healthPage(` |
| 326 | `healthTone` | `function healthTone(` |
| 327 | `healthRow` | `function healthRow(` |
| 328 | `healthTile` | `function healthTile(` |
| 333 | `cycleBars` | `function cycleBars(` |
| 341 | `barClass` | `function barClass(` |
| 342 | `lengthPage` | `function lengthPage(` |
| 347 | `driftWord` | `function driftWord(` |
| 348 | `variationPage` | `function variationPage(` |
| 353 | `statsHome` | `function statsHome(` |
| 360 | `insightSec` | `function insightSec(` |
| 363 | `catName` | `function catName(` |
| 364 | `markName` | `function markName(` |
| 365 | `countTag` | `function countTag(` |
| 366 | `insightsHome` | `function insightsHome(` |
| 373 | `homeSections` | `function homeSections(` |
| 377 | `whenPicked` | `function whenPicked(` |
| 381 | `pickedKey` | `function pickedKey(` |
| 382 | `periodAt` | `function periodAt(` |
| 386 | `drawChart` | `function drawChart(` |
| 394 | `IND` · export | `var IND =` |
| 395 | `IND_ALL` | `var IND_ALL =` |
| 396 | `searchShell` | `function searchShell(` |
| 397 | `pickCat` | `function pickCat(` |
| 403 | `buildFind` | `function buildFind(` |
| 404 | `fold` | `function fold(` |
| 408 | `wireFinder` | `function wireFinder(` |
| 421 | `setPeriod` | `function setPeriod(` |
| 426 | `pick` | `function pick(` |
| 432 | `refreshSheet` | `function refreshSheet(` |
| 437 | `PICKS` | `var PICKS =` |
| 438 | `centreList` | `function centreList(` |
| 442 | `wirePicks` | `function wirePicks(` |
| 452 | `openWhen` | `function openWhen(` |
| 457 | `wireCatDoors` | `function wireCatDoors(` |
| 463 | `buildCycleChart` · export | `function buildCycleChart(` |

### `js/era.ts`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 3 | `eraFig` · export | `function eraFig(` |
| 10 | `todayValue` · export | `function todayValue(` |

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
| 29 | `quartile` · export | `function quartile(` |
| 33 | `mean` · export | `function mean(` |
| 34 | `atQuarter` · export | `function atQuarter(` |
| 35 | `atMonth` · export | `function atMonth(` |
| 36 | `ordinal` · export | `function ordinal(` |
| 37 | `MINOR` | `var MINOR =` |
| 38 | `capWord` | `function capWord(` |
| 41 | `titleCase` · export | `function titleCase(` |
| 47 | `hiCard` · export | `function hiCard(` |
| 50 | `dropWhatIsShown` · export | `function dropWhatIsShown(` |
| 57 | `highlightsHtml` · export | `function highlightsHtml(` |
| 66 | `CHEV` · export | `var CHEV =` |
| 67 | `pointLabel` · export | `function pointLabel(` |
| 68 | `qLabel` · export | `function qLabel(` |
| 69 | `monthLabel` · export | `function monthLabel(` |
| 70 | `ledeHtml` · export | `function ledeHtml(` |
| 71 | `auxStat` · export | `function auxStat(` |
| 74 | `facts` · export | `function facts(` |
| 75 | `factsFrom` · export | `function factsFrom(` |
| 79 | `srcBlock` · export | `function srcBlock(` |
| 80 | `srcHtml` | `function srcHtml(` |
| 81 | `fmtSigned` · export | `function fmtSigned(` |
| 82 | `hubLine` · export | `function hubLine(` |
| 83 | `qPretty` · export | `function qPretty(` |
| 84 | `capeFmt1` · export | `function capeFmt1(` |

### `js/history-charts.ts`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 11 | `deficitChart` · export | `function deficitChart(` |
| 78 | `colScale` | `function colScale(` |
| 83 | `PULSE_BEATS` · export | `var PULSE_BEATS =` |
| 84 | `pulseTrace` | `function pulseTrace(` |
| 89 | `ekgPaper` | `function ekgPaper(` |
| 95 | `velocityHistoryChart` · export | `function velocityHistoryChart(` |
| 121 | `yearTicks` | `function yearTicks(` |
| 136 | `unempHistoryChart` · export | `function unempHistoryChart(` |
| 174 | `fedFundsHistoryChart` · export | `function fedFundsHistoryChart(` |
| 216 | `cpiHistoryChart` · export | `function cpiHistoryChart(` |
| 254 | `gdpHistoryChart` · export | `function gdpHistoryChart(` |
| 301 | `m2GrowthChart` · export | `function m2GrowthChart(` |
| 342 | `m2Step` | `function m2Step(` |
| 346 | `heatEdges` | `function heatEdges(` |
| 350 | `heatStep` | `function heatStep(` |

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
| 62 | `realPage` | `function realPage(` |
| 66 | `withCredit` | `function withCredit(` |
| 73 | `productivityPage` | `function productivityPage(` |
| 76 | `splitSpec` | `function splitSpec(` |
| 82 | `splitInfo` | `function splitInfo(` |
| 86 | `periodTicks` | `function periodTicks(` |
| 91 | `periodOfSeries` | `function periodOfSeries(` |
| 92 | `splitHistory` | `function splitHistory(` |
| 103 | `defineSplits` · export | `function defineSplits(` |

#### The split indicators' insights

| Line | Name | Anchor |
|---|---|---|
| 113 | `buffettInsight` | `function buffettInsight(` |
| 128 | `debtInsight` | `function debtInsight(` |
| 143 | `signedFig` | `function signedFig(` |
| 144 | `lineInsight` | `function lineInsight(` |
| 147 | `productivityInsight` | `function productivityInsight(` |
| 151 | `confidenceInsight` | `function confidenceInsight(` |
| 155 | `desireInsight` | `function desireInsight(` |
| 159 | `premiumInsight` | `function premiumInsight(` |
| 163 | `ORDINAL` | `var ORDINAL =` |
| 164 | `marketInsight` | `function marketInsight(` |
| 176 | `realInsight` | `function realInsight(` |
| 184 | `interestInsight` | `function interestInsight(` |

### `js/inner-pages.ts`

#### THE INNER PAGES

| Line | Name | Anchor |
|---|---|---|
| 17 | `actCycleMonths` | `function actCycleMonths(` |
| 25 | `redrawSheet` | `function redrawSheet(` |
| 34 | `lagRow` | `function lagRow(` |
| 35 | `monthWindow` | `function monthWindow(` |
| 39 | `defineTemp` | `function defineTemp(` |
| 54 | `defineGdp` | `function defineGdp(` |
| 71 | `defineActivity` | `function defineActivity(` |
| 88 | `defineDeficit` | `function defineDeficit(` |
| 104 | `valuationInfo` | `function valuationInfo(` |
| 105 | `defineValuation` | `function defineValuation(` |
| 126 | `defineInnerReadings` · export | `function defineInnerReadings(` |
| 131 | `wireMetricPageControls` | `function wireMetricPageControls(` |
| 159 | `valuationHighlights` | `function valuationHighlights(` |
| 171 | `tempHighlights` | `function tempHighlights(` |
| 186 | `gdpHighlights` | `function gdpHighlights(` |
| 201 | `shutPickers` | `function shutPickers(` |
| 207 | `wireControlKeys` | `function wireControlKeys(` |
| 226 | `wirePageControls` · export | `function wirePageControls(` |

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
| 180 | `insightStress` | `function insightStress(` |
| 184 | `catInsight` · export | `function catInsight(` |

### `js/marks.ts`

#### (before the first banner)

| Line | Name | Anchor |
|---|---|---|
| 1 | `debtSvg` · export | `function debtSvg(` |
| 2 | `homeSvg` · export | `function homeSvg(` |
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
| 42 | `heartSvg` · export | `function heartSvg(` |
| 44 | `weatherSvg` · export | `function weatherSvg(` |
| 46 | `moodSvg` · export | `function moodSvg(` |
| 47 | `sproutSvg` · export | `function sproutSvg(` |
| 49 | `factorySvg` · export | `function factorySvg(` |
| 50 | `circulationSvg` · export | `function circulationSvg(` |
| 51 | `boltSvg` · export | `function boltSvg(` |
| 52 | `marketSvg` · export | `function marketSvg(` |
| 55 | `volatilitySvg` · export | `function volatilitySvg(` |

### `js/pressure.ts`

#### RENDER: Pressure — U.S. Treasury yields, one maturity at a time

| Line | Name | Anchor |
|---|---|---|
| 19 | `latestYieldPoint` | `function latestYieldPoint(` |
| 26 | `withLatestPoint` | `function withLatestPoint(` |
| 31 | `tendencyNote` | `function tendencyNote(` |
| 41 | `pressureMaturities` | `function pressureMaturities(` |
| 67 | `flowRow` | `function flowRow(` |
| 68 | `defineFlow` | `function defineFlow(` |
| 99 | `ylmYearMarks` | `function ylmYearMarks(` |
| 118 | `ylmColumns` | `function ylmColumns(` |
| 138 | `ylmFitLine` | `function ylmFitLine(` |
| 150 | `pressureHead` | `function pressureHead(` |
| 162 | `definePressure` | `function definePressure(` |

#### Pressure's Insights

| Line | Name | Anchor |
|---|---|---|
| 283 | `pressureInsights` | `function pressureInsights(` |
| 317 | `defineMarketReadings` · export | `function defineMarketReadings(` |

### `js/reading.ts`

#### One reading: its figure, its words, its page

| Line | Name | Anchor |
|---|---|---|
| 21 | `defineReading` · export | `function defineReading(` |
| 22 | `readingFor` · export | `function readingFor(` |
| 27 | `todayFace` · export | `function todayFace(` |
| 31 | `historyHtml` | `function historyHtml(` |
| 36 | `drawReading` | `function drawReading(` |
| 45 | `chartShell` · export | `function chartShell(` |
| 48 | `paintInsight` · export | `function paintInsight(` |
| 49 | `mountReadings` · export | `function mountReadings(` |
| 61 | `redrawReading` · export | `function redrawReading(` |

#### One record, read the same way on every page

| Line | Name | Anchor |
|---|---|---|
| 68 | `recordPoints` · export | `function recordPoints(` |
| 74 | `recordInsight` · export | `function recordInsight(` |
| 87 | `indicatorInsight` · export | `function indicatorInsight(` |

### `js/rhythm.ts`

#### Rhythm: how evenly the pulse of money changes pace

| Line | Name | Anchor |
|---|---|---|
| 5 | `RHYTHM_WINDOW` · export | `var RHYTHM_WINDOW =` |
| 9 | `spread` | `function spread(` |
| 13 | `rhythmRecord` · export | `function rhythmRecord(` |
| 21 | `pts` | `function pts(` |
| 22 | `stretches` | `function stretches(` |
| 33 | `listed` | `function listed(` |
| 34 | `rhythmCard` · export | `function rhythmCard(` |
| 41 | `rhythmInfo` · export | `function rhythmInfo(` |

## Registries — the lookup tables that route behaviour

Changing one of these changes what the app does without changing any renderer. Grep the key.

### `sheetRenderers`

which function draws an inner page, called with the measured width when the page opens

_none found — if that is wrong, the pattern in `tools/make-map.py` needs updating._

### `pageRange`

the window a page's range control starts on

_none found — if that is wrong, the pattern in `tools/make-map.py` needs updating._

## Stylesheet, section by section

| Line | Section |
|---|---|
| 179 | top bar (Keren, Sep 19, 2026, with Clue's screens): the open tab's title in the middle, a round menu |
| 289 | calendar tab (yearly view, one card per year grouped into five eras — see marketCycles below) |
| 320 | season strip |
| 347 | THE GAP (Keren, V385: "…so if one day I'll tell you I want the spacing to be 30, you would just change |
| 410 | tab bar (app-style segmented navigation) |
| 434 | temperature chart (Cycle tab), after Natural Cycles' temperature view: a column per month of the |
| 522 | Analysis tab: subjects — each section is a collapsible card whose summary row carries the one |
| 658 | Volume's red ramp (Keren, V389: "volume is, in gynaecology, blood — so it should be different shades of |
| 701 | the maturity chart's columns wear the curve's three zones (Keren, V394: "a colour that represents the |
| 750 | One gap between an inner page's containers (Keren, V381: "the spacing between containers in each inner |
| 892 | Calendar tab: cycle drawers — one <details> per era, newest first, the current one open. The summary |
| 901 | The symptoms: a cycle's years against today |
| 1,048 | yield curve charts |
| 1,072 | the readout (Keren, from Apple Health): it never changes the page's height, which is why it beats a |
| 1,091 | 10Y-3M spread history (quarterly, with recession bands) |
| 1,106 | un-inversion-to-recession historical lag panel |
| 1,115 | the reading's tag |
| 1,123 | info icon + popover (progressive disclosure for longer notes) |
| 1,137 | detail modal: every indicator defaults to a minimal view; this is its "expand" |
| 1,200 | footer |

## Markup landmarks

Banner comments in `page-body.html`:

| Line | Section |
|---|---|

Every `id` in the static DOM (58), which is what the renderers fill:

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
| 50 | `signs-list` |
| 55 | `panel-analysis` |
| 56 | `calendar-list` |
| 57 | `cycle-list` |
| 58 | `cycle-more` |
| 59 | `cycle-more-label` |
| 63 | `calendar-cycle` |
| 66 | `panel-portfolio` |
| 68 | `panel-chart` |
| 69 | `chart-home` |
| 72 | `more-menu` |
| 75 | `menu-back` |
| 89 | `sources-open` |
| 97 | `appearance-current` |
| 100 | `app-version` |
| 104 | `sheet-howto` |
| 147 | `sheet-book` |
| 157 | `idea-prose` |
| 163 | `idea-more` |
| 168 | `cycle-model-line` |
| 176 | `seasons-kicker` |
| 177 | `seasons-rows` |
| 181 | `framework-kicker` |
| 182 | `framework-rows` |
| 192 | `sheet-appearance` |
| 200 | `theme-toggle` |
| 207 | `sheet-contact` |
| 216 | `contact-form` |
| 217 | `contact-title` |
| 218 | `contact-message` |
| 220 | `contact-hint` |
| 221 | `contact-send` |
| 227 | `sheet-sources` |
| 230 | `sources-back` |
| 235 | `asof-text` |
| 236 | `sources-groups` |
| 242 | `detail-backdrop` |
| 244 | `detail-modal-close` |
| 245 | `detail-modal-body` |

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

