# Components

**Generated. Do not hand-edit** — run `npm run map`. `npm run check` fails if this page is stale.

A **component** here is a function and the CSS classes only it writes. Nothing declares itself one; the list
is derived from the source by `tools/components.js`, the same scan that stops a pattern being retyped. So a
name on this page is a name you can use — in a request, a commit, a conversation — and it points at exactly
one function. **Owns** is the classes no other function emits. **Used by** is every top-level function that
calls it, by file.

Generated from commit `b155131` on 2026-10-06. **109 components**, **35 shared patterns**.

## ai-insights.ts

| Component | Owns | Used by |
|---|---|---|
| **`aiPage`** | `.ai-by` `.ai-echoes` `.ai-page` | `ai-insights.ts:buildAiPage` |
| **`echoLine`** | `.ai-echo` `.ai-echo-when` | — |
| **`para`** | `.ai-p` | `ai-insights.ts:aiPage`, `ai-insights.ts:leadBoxes` |
| **`pathStrip`** | `.ai-path` | `ai-insights.ts:echoLine` |
| **`pic`** | `.ai-cap` `.ai-pic` | `ai-insights.ts:leadBoxes`, `ai-insights.ts:risksPic`, `ai-insights.ts:tilesPic` |
| **`risksPic`** | `.ai-rank` `.ai-track` | `ai-insights.ts:aiPage` |
| **`tilesPic`** | `.ai-tile` `.ai-tiles` | `ai-insights.ts:pathStrip` |

## analysis.ts

| Component | Owns | Used by |
|---|---|---|
| **`cycleRowsHtml`** | `.era-bands` `.era-head` `.era-name` `.era-row` `.era-years` | `analysis.ts:renderCycleList` |
| **`eraCard`** | `.ci-word` | `analysis.ts:eraCards` |

## charts.ts

| Component | Owns | Used by |
|---|---|---|
| **`avgRule`** | `.temp-avg` | `charts.ts:divergeChart`, `history-charts.ts:cpiHistoryChart`, `history-charts.ts:deficitChart`, `history-charts.ts:fedFundsHistoryChart`, `history-charts.ts:gdpHistoryChart`, `history-charts.ts:m2GrowthChart`, `history-charts.ts:unempHistoryChart`, `history-charts.ts:velocityHistoryChart` |
| **`chartAxes`** | `.bt-axis` `.bt-frame` `.bt-grid` `.bt-yl` | `charts.ts:divergeChart`, `history-charts.ts:cpiHistoryChart`, `history-charts.ts:deficitChart`, `history-charts.ts:fedFundsHistoryChart`, `history-charts.ts:gdpHistoryChart`, `history-charts.ts:householdsChart`, `history-charts.ts:m2GrowthChart`, `history-charts.ts:unempHistoryChart`, `history-charts.ts:velocityHistoryChart`, `render-core.ts:renderPressurePage`, `render-pages.ts:renderSpreadHistory` |
| **`colPeek`** | `.heat` `.peek-base` | `ai-insights.ts:tilesPic`, `analysis.ts:eraMini`, `charts.ts:peekCard`, `readings.ts:bootReadings`, `readings.ts:deriveFeelingReadings`, `readings.ts:derivePulseTag`, `readings.ts:deriveRealRate`, `render-core.ts:renderPressureRow`, `render-pages.ts:renderHormones` |
| **`crossLine`** | `.hist-cross` | `charts.ts:divergeChart`, `history-charts.ts:cpiHistoryChart`, `history-charts.ts:deficitChart`, `history-charts.ts:fedFundsHistoryChart`, `history-charts.ts:gdpHistoryChart`, `history-charts.ts:householdsChart`, `history-charts.ts:m2GrowthChart`, `history-charts.ts:unempHistoryChart`, `history-charts.ts:velocityHistoryChart`, `render-core.ts:renderPressurePage` |
| **`divergeChart`** | `.dchart` `.dv-bar` `.dv-mid` | `indicators.ts:drawSplit`, `inner-pages.ts:registerHouseholdsValuationPages`, `render-pages.ts:renderVolatility` |
| **`fitGroup`** | `.chart-label-plate` `.fit` `.fit-lab` `.fit-line` | `charts.ts:divergeChart`, `charts.ts:fitLine`, `history-charts.ts:deficitChart`, `render-core.ts:ylmFitLine` |
| **`histBar`** | `.hist-bar` | `indicators.ts:drawSplit`, `inner-pages.ts:registerHouseholdsValuationPages`, `readings.ts:activityStackHtml`, `readings.ts:deficitBlock`, `readings.ts:velocityRecordBlock`, `readings.ts:volumeBlock`, `render-pages.ts:renderHormones`, `render-pages.ts:renderVolatility` |
| **`histTip`** | `.gdp-tooltip` `.hist-tip` | `indicators.ts:drawSplit`, `inner-pages.ts:registerHouseholdsValuationPages`, `readings.ts:activityStackHtml`, `readings.ts:deficitBlock`, `readings.ts:velocityRecordBlock`, `readings.ts:volumeBlock`, `render-pages.ts:renderHormones`, `render-pages.ts:renderVolatility` |
| **`meterPeek`** | `.meterpeek` `.mp-band` `.mp-core` `.mp-here` `.mp-track` | `charts.ts:peekCard` |
| **`peekCard`** | `.peek` `.peek-kicker` `.peek-text` `.peek-unit` `.peek-value` `.peek-word` | `roster.ts:peekOf` |
| **`pulseTraceSvg`** | `.pt-svg` | `charts.ts:pulsePeek`, `readings.ts:pulseBlock` |
| **`trendOf`** | `.tp-arrow` | `charts.ts:fitLine`, `history-charts.ts:deficitChart`, `indicators.ts:drawSplit`, `inner-pages.ts:registerActivityPowerDeficitPages`, `inner-pages.ts:registerHouseholdsValuationPages`, `inner-pages.ts:registerTempGdpPages`, `render-core.ts:registerFlowPages`, `render-core.ts:renderPressurePage`, `render-core.ts:ylmFitLine`, `render-pages.ts:renderHorizonPage`, `render-pages.ts:renderHormones`, `render-pages.ts:renderVolatility` |
| **`trendPill`** | `.can-toggle` `.tp-k` `.trendpill` | `indicators.ts:drawSplit`, `inner-pages.ts:registerActivityPowerDeficitPages`, `inner-pages.ts:registerHouseholdsValuationPages`, `inner-pages.ts:registerTempGdpPages`, `render-core.ts:registerFlowPages`, `render-core.ts:renderPressurePage`, `render-pages.ts:renderHorizonPage`, `render-pages.ts:renderHormones`, `render-pages.ts:renderVolatility` |
| **`vGrid`** | `.bt-vgrid` | `charts.ts:divergeChart`, `history-charts.ts:deficitChart`, `history-charts.ts:gdpHistoryChart`, `history-charts.ts:householdsChart`, `history-charts.ts:m2GrowthChart`, `history-charts.ts:velocityHistoryChart`, `history-charts.ts:yearTicks`, `render-pages.ts:renderSpreadHistory` |
| **`vitalRingSvg`** | `.vital-ring-fill` `.vital-ring-track` | `analysis.ts:eraMini`, `charts.ts:peekCard`, `readings.ts:volatilityRing` |
| **`xLabel`** | `.bt-xl` | `charts.ts:divergeChart`, `history-charts.ts:deficitChart`, `history-charts.ts:gdpHistoryChart`, `history-charts.ts:householdsChart`, `history-charts.ts:m2GrowthChart`, `history-charts.ts:velocityHistoryChart`, `history-charts.ts:yearTicks`, `render-pages.ts:renderSpreadHistory` |
| **`zeroRule`** | `.m2-zero` | `history-charts.ts:cpiHistoryChart`, `history-charts.ts:deficitChart`, `history-charts.ts:fedFundsHistoryChart`, `history-charts.ts:gdpHistoryChart`, `history-charts.ts:m2GrowthChart`, `history-charts.ts:unempHistoryChart` |

## cycle-analysis.ts

| Component | Owns | Used by |
|---|---|---|
| **`countTag`** | `.lab-n` | `cycle-analysis.ts:foldSec`, `cycle-analysis.ts:insightSec` |
| **`drawChart`** | `.home-secs` `.lab-box` `.labs` `.search-none` | `cycle-analysis.ts:buildCycleChart`, `cycle-analysis.ts:pickCat`, `cycle-analysis.ts:wireFinder` |
| **`finder`** | `.lab-filter` `.lab-find` `.lab-menu` | `cycle-analysis.ts:drawChart` |
| **`foldSec`** | `.lab-fold` | `cycle-analysis.ts:labSec`, `cycle-analysis.ts:subSec` |
| **`homeSections`** | `.lab-score-box` | `cycle-analysis.ts:drawChart` |
| **`insightSec`** | `.insight-mark` | `cycle-analysis.ts:insightsHome` |
| **`labItem`** | `.lab-item` `.lab-res` `.lab-to` | `cycle-analysis.ts:foldSec` |
| **`labSec`** | `.lab-cat` | `cycle-analysis.ts:bySystem` |
| **`lengthBars`** | `.len-bars` | `cycle-analysis.ts:lengthPage` |
| **`lengthPage`** | `.len-key` `.odd` `.ok` | `cycle-analysis.ts:statsHome` |
| **`markName`** | `.lab-mark` | `cycle-analysis.ts:subSec` |
| **`menuRows`** | `.lab-back` `.lab-sep` `.lab-sub` | `cycle-analysis.ts:fillMenu`, `cycle-analysis.ts:finder` |
| **`ring`** | `.lab-ring` | — |
| **`rowTag`** | `.lab-row` | `cycle-analysis.ts:labItem` |
| **`scoreRing`** | `.lab-score-v` | `cycle-analysis.ts:scoreBox`, `cycle-analysis.ts:statRow` |
| **`statBody`** | `.stat-main` `.stat-side` | `cycle-analysis.ts:insightSec`, `cycle-analysis.ts:statRow` |

## cycle-tab.ts

| Component | Owns | Used by |
|---|---|---|
| **`placeSignPair`** | `.peek-row` | `cycle-tab.ts:renderPeekAndCategories` |

## diagnosis.ts

| Component | Owns | Used by |
|---|---|---|
| **`yearRow`** | `.details-link` `.dx-year-lead` `.dx-year-n` `.dx-year-v` | `diagnosis.ts:yearByYear` |

## dial-cycle.ts

| Component | Owns | Used by |
|---|---|---|
| **`drawDial`** | `.cap` `.dial-dot` `.dial-mkt` `.dial-moon` `.dial-peak` `.dial-today-badge` `.dial-track` `.disc` `.dot` `.lbl` `.num` | `dial-cycle.ts:renderCycleView` |
| **`hubSet`** | `.hub-chev` `.hub-stage` | `dial-cycle.ts:hubShowDefault`, `dial-cycle.ts:hubShowQuarter` |
| **`renderCycleKicker`** | `.bar` `.info-btn` `.legend-head` `.legend-row` `.legend-rows` `.ytd` | `dial-cycle.ts:bootDialCycle` |

## dom.ts

| Component | Owns | Used by |
|---|---|---|
| **`moreRow`** | `.more-row` | `ai-insights.ts:aiPage`, `cycle-analysis.ts:drawChart`, `inner-pages.ts:gdpHighlights`, `inner-pages.ts:tempHighlights`, `inner-pages.ts:valuationHighlights`, `quarter-sheet.ts:quarterSheet`, `render-core.ts:cardDetailHtml` |
| **`trendCard`** | `.trend-card` | `dom.ts:trendDoor`, `dom.ts:trendJump`, `dom.ts:trendSoon` |
| **`trendHead`** | `.trend-head` | `dom.ts:trendCard` |
| **`trendSoon`** | `.soon-pill` | `portfolio.ts:homeHtml` |

## fed-phases.ts

| Component | Owns | Used by |
|---|---|---|
| **`bandsHtml`** | `.fp-band` `.fp-ph` | `fed-phases.ts:fedPhasesCard` |
| **`fedPhasesCard`** | `.fp-marks` `.fp-phases` `.fp-plot` `.fp-years` | `cycle-analysis.ts:homeSections`, `diagnosis.ts:diagnosisHtml` |
| **`levelsHtml`** | `.fp-levels` | `fed-phases.ts:fedPhasesCard` |
| **`plotSvg`** | `.fp-line` `.fp-ov-line` `.fp-zero` | `fed-phases.ts:fedPhasesCard` |
| **`yearsHtml`** | `.fp-year` | `fed-phases.ts:fedPhasesCard` |

## format.ts

| Component | Owns | Used by |
|---|---|---|
| **`facts`** | `.facts` | `cycle-analysis.ts:chartDetail`, `dial-cycle.ts:bootDialCycle`, `format.ts:factsFrom`, `insights.ts:moodInfo`, `portfolio.ts:clockDetail`, `portfolio.ts:weatherDetail`, `readings.ts:bootReadings`, `readings.ts:deficitBlock`, `readings.ts:realRateInfoHtml`, `readings.ts:volatilityDetailHtml`, `tabs-menu.ts:renderSeasonRows`, `tabs-menu.ts:seasonModelNote` |
| **`hiCard`** | `.hi-name` | `indicators.ts:buffettInsight`, `indicators.ts:confidenceInsight`, `indicators.ts:debtInsight`, `indicators.ts:desireInsight`, `indicators.ts:interestInsight`, `indicators.ts:marketInsight`, `indicators.ts:premiumInsight`, `indicators.ts:productivityInsight`, `indicators.ts:realRateInsight`, `inner-pages.ts:gdpHighlights`, `inner-pages.ts:householdsHighlights`, `inner-pages.ts:tempHighlights`, `inner-pages.ts:valuationHighlights`, `insights.ts:insightCirculation`, `insights.ts:insightWeather`, `insights.ts:marketCycleCard`, `insights.ts:moodCard`, `insights.ts:seasonCards`, `render-core.ts:renderPressureInsights`, `render-pages.ts:renderHormones`, `render-pages.ts:spreadInsights`, `render-pages.ts:volatilityHighlights` |
| **`highlightsHtml`** | `.peek-chev` | `indicators.ts:mountSplit`, `inner-pages.ts:gdpHighlights`, `inner-pages.ts:householdsHighlights`, `inner-pages.ts:tempHighlights`, `inner-pages.ts:valuationHighlights`, `render-pages.ts:volatilityHighlights` |
| **`hubLine`** | `.hub-line` | `dial-cycle.ts:hubSet`, `dial-cycle.ts:hubShowYear` |
| **`ledeHtml`** | `.lede` | `dial-cycle.ts:bootDialCycle`, `readings.ts:bootReadings`, `readings.ts:deficitBlock`, `readings.ts:realRateInfoHtml`, `tabs-menu.ts:renderSeasonRows`, `tabs-menu.ts:seasonModelNote` |
| **`srcBlock`** | `.src` | `cycle-analysis.ts:chartDetail`, `cycle-analysis.ts:lengthPage`, `cycle-analysis.ts:variationPage`, `dial-cycle.ts:bootDialCycle`, `dial-cycle.ts:renderCycleKicker`, `indicators.ts:splitInfo`, `insights.ts:moodInfo`, `portfolio.ts:clockDetail`, `portfolio.ts:weatherDetail`, `readings.ts:activityInfoHtml`, `readings.ts:confidenceInfoHtml`, `readings.ts:desireInfoHtml`, `readings.ts:dsrInfoHtml`, `readings.ts:growthInfoHtml`, `readings.ts:marketInfoHtml`, `readings.ts:premiumInfoHtml`, `readings.ts:productivityInfoHtml`, `readings.ts:realRateInfoHtml`, `readings.ts:savInfoHtml`, `readings.ts:temperatureInfoHtml`, `readings.ts:volatilityDetailHtml`, `render-core.ts:pressureMaturities`, `render-pages.ts:deriveUninversionDetail`, `render-pages.ts:spreadSeries`, `tabs-menu.ts:renderSeasonRows`, `tabs-menu.ts:seasonModelNote` |

## history-charts.ts

| Component | Owns | Used by |
|---|---|---|
| **`cpiHistoryChart`** | `.temp-col` | `inner-pages.ts:registerTempGdpPages` |
| **`deficitChart`** | `.def-col` `.spread-history-band` | `inner-pages.ts:registerActivityPowerDeficitPages` |
| **`fedFundsHistoryChart`** | `.ff-col` | `render-pages.ts:renderHormones` |
| **`gdpHistoryChart`** | `.growth-col` | `inner-pages.ts:registerTempGdpPages` |
| **`householdsChart`** | `.bill` `.hh-col` `.kept` | `inner-pages.ts:registerHouseholdsValuationPages` |
| **`m2GrowthChart`** | `.m2-col` | `render-core.ts:registerFlowPages` |
| **`unempHistoryChart`** | `.unemp-col` | `inner-pages.ts:registerActivityPowerDeficitPages` |
| **`velocityHistoryChart`** | `.pv-col` | `render-core.ts:registerFlowPages` |

## history.ts

| Component | Owns | Used by |
|---|---|---|
| **`controlsBox`** | `.hist-controls` | `history.ts:histControls` |
| **`cyclePicker`** | `.cycsel-btn` | `history.ts:histControls` |
| **`headMenuHtml`** | `.bh-back` `.bh-grp-row` `.bh-sep` | `history.ts:histHead`, `history.ts:paintHeadMenus` |
| **`histHead`** | `.band-head` `.bh-mark` `.bh-menu` `.bh-more` `.bh-more-wrap` `.bh-sigma` `.bh-title` | `indicators.ts:drawSplit`, `inner-pages.ts:registerHouseholdsValuationPages`, `inner-pages.ts:registerTempGdpPages`, `readings.ts:activityStackHtml`, `readings.ts:deficitBlock`, `readings.ts:velocityRecordBlock`, `readings.ts:volumeBlock`, `render-core.ts:pressureHead`, `render-pages.ts:renderHormones`, `render-pages.ts:renderVolatility` |
| **`histLive`** | `.sr-only` | `history.ts:histKeysWire`, `history.ts:wireHistHover` |
| **`histReadEnsure`** | `.hist-read` `.hr-label` `.hr-plate` `.hr-value` | `history.ts:histKeysWire`, `history.ts:wireHistHover` |

## indicators.ts

| Component | Owns | Used by |
|---|---|---|
| **`appendPicks`** | `.cat-group` | `cycle-tab.ts:buildCategories` |

## insights.ts

| Component | Owns | Used by |
|---|---|---|
| **`insightMood`** | `.mood-fig` | — |
| **`insightRow`** | `.cat-more` | `cycle-tab.ts:buildCategories`, `insights.ts:replaceInsight` |
| **`moodCallout`** | `.mood-arrow` `.mood-call` | `insights.ts:moodCycleSvg` |
| **`moodCycleSvg`** | `.mood-curve` `.mood-dot` `.mood-line` | `insights.ts:insightMood` |

## pages-nav.ts

| Component | Owns | Used by |
|---|---|---|
| **`convertLeadingSigns`** | `.sign-row` | `pages-nav.ts:renderSignsList` |
| **`renderSignsList`** | `.sign-detail` `.subject-label` `.subject-value` `.subject-verdict` | `pages-nav.ts:bootPagesNav` |

## portfolio.ts

| Component | Owns | Used by |
|---|---|---|
| **`clockFace`** | `.clock` `.clock-axis` | `portfolio.ts:drawClock` |
| **`methodPage`** | `.cat-mood` `.method-card` | `portfolio.ts:drawClock`, `portfolio.ts:drawWeather` |
| **`say`** | `.method-say` | `ai-insights.ts:echoLine`, `portfolio.ts:drawClock`, `portfolio.ts:drawWeather`, `render-pages.ts:renderSubjectRows` |

## quarter-sheet.ts

| Component | Owns | Used by |
|---|---|---|
| **`quarterCards`** | `.cat-sheet` `.cat-weather` | `quarter-sheet.ts:quarterSheet` |
| **`quarterPopup`** | `.era-blurb` `.reading-block` `.reading-book` `.reading-watch` | `quarter-sheet.ts:quarterSheet` |

## readings.ts

| Component | Owns | Used by |
|---|---|---|
| **`pulseBlock`** | `.past` `.pt-head` `.pt-k` `.pt-note` `.pt-v` `.pulsetrace` `.spread-history-head` | `readings.ts:deficitBlock` |

## render-core.ts

| Component | Owns | Used by |
|---|---|---|
| **`cardDetailHtml`** | `.blood-card` `.metric` `.metric-row` `.metric-sub` | `pages-nav.ts:renderSignsList` |
| **`catCard`** | `.cat-item` `.ci-body` `.ci-head` `.ci-mini` `.ci-name` `.ci-read` `.ci-unit` `.ci-value` `.ci-when` | `quarter-sheet.ts:quarterCards`, `render-core.ts:catItem` |
| **`catHeadCard`** | `.ind-card` `.ind-cat-name` | `cycle-analysis.ts:foldSec` |
| **`dxHead`** | `.dx-sys-head` | `cycle-analysis.ts:homeSections`, `cycle-analysis.ts:statsHome`, `diagnosis.ts:diagnosisHtml`, `diagnosis.ts:yearByYear` |
| **`econChips`** | `.chip` `.era-econ` | `analysis.ts:cycleRowsHtml`, `diagnosis.ts:yearByYear` |
| **`headHtml`** | `.body-term` `.card-head` `.card-titles` `.econ-term` `.head-mark` `.head-mark-disc` | `render-core.ts:cardDetailHtml` |
| **`metricSheet`** | `.metric-sheet` | `ai-insights.ts:buildAiPage`, `indicators.ts:catSheet`, `indicators.ts:mountSplit`, `pages-nav.ts:convertLeadingSigns`, `pages-nav.ts:renderSignsList`, `portfolio.ts:portfolioSheets` |
| **`seatPageFoot`** | `.page-foot` | `pages-nav.ts:buildNav` |
| **`stripDots`** | `.strip-dots` | `dial-cycle.ts:marketStripHtml` |
| **`stripTrack`** | `.strip-track` | `dial-cycle.ts:seasonStripHtml` |
| **`subjectIcon`** | `.subject-icon` | `pages-nav.ts:renderSignsList` |
| **`subjectRow`** | `.subject-more` `.subject-ring` `.subject-text` | `pages-nav.ts:renderSignsList` |
| **`timingMark`** | `.tm-dot` `.tm-line` `.tm-now` `.tm-span` | `render-core.ts:timingPill` |
| **`timingPill`** | `.timing` `.timing-row` | `indicators.ts:mountSplit`, `pages-nav.ts:convertLeadingSigns`, `pages-nav.ts:orderMetricSheets`, `pages-nav.ts:renderSignsList` |

## render-pages.ts

| Component | Owns | Used by |
|---|---|---|
| **`deriveUninversionDetail`** | `.lag-rows` | `render-pages.ts:bootRenderPages` |
| **`renderHormones`** | `.aux-group` `.norm` | `render-pages.ts:bootRenderPages` |
| **`spreadInsights`** | `.aux-stat` `.wordy` | `render-pages.ts:renderHorizonPage` |

## tabs-menu.ts

| Component | Owns | Used by |
|---|---|---|
| **`renderSeasonRows`** | `.cell` `.cold` `.hot` `.meta` `.range-bar` `.range-cell` | `tabs-menu.ts:bootTabsMenu` |
| **`seasonGrid`** | `.season-grid` `.sg-cell` `.sg-head` | `tabs-menu.ts:seasonModelNote` |
| **`wireMenu`** | `.menu-card` `.menu-label` `.menu-row` `.menu-section` | `tabs-menu.ts:bootTabsMenu` |

## Vocabulary

Functions that own no class of their own but are called from three or more places — the words every
renderer speaks. Listed most-used first.

| Function | Lives in | Called from |
|---|---|---|
| **`byId`** | dom.ts | 32 places |
| **`need`** | dom.ts | 27 places |
| **`fmtSigned`** | format.ts | 26 places |
| **`put`** | dom.ts | 25 places |
| **`titleCase`** | format.ts | 19 places |
| **`metered`** | format.ts | 13 places |
| **`histFrame`** | charts.ts | 12 places |
| **`findOf`** | cycle-analysis.ts | 11 places |
| **`lede`** | format.ts | 11 places |
| **`monthLabel`** | format.ts | 11 places |
| **`pageCycle`** | history.ts | 11 places |
| **`publishGeom`** | charts.ts | 11 places |
| **`addSources`** | dom.ts | 10 places |
| **`colPath`** | charts.ts | 10 places |
| **`colWidth`** | charts.ts | 10 places |
| **`qLabel`** | format.ts | 10 places |
| **`attachHistory`** | history.ts | 9 places |
| **`histControls`** | history.ts | 9 places |
| **`atMonth`** | format.ts | 8 places |
| **`closedCount`** | cycle-analysis.ts | 8 places |
| **`factsFrom`** | format.ts | 8 places |
| **`fitLine`** | charts.ts | 8 places |
| **`focusQuiet`** | dom.ts | 8 places |
| **`windowYears`** | charts.ts | 8 places |
| **`yearOf`** | format.ts | 8 places |
| **`colScale`** | history-charts.ts | 7 places |
| **`cycleSlice`** | model.ts | 7 places |
| **`histNote`** | history.ts | 7 places |
| **`keyed`** | roster.ts | 7 places |
| **`vhOpen`** | charts.ts | 7 places |
| **`windowScale`** | history.ts | 7 places |
| **`cycLabel`** | model.ts | 6 places |
| **`fileRow`** | data.ts | 6 places |
| **`layer`** | dom.ts | 6 places |
| **`mean`** | format.ts | 6 places |
| **`peekOf`** | roster.ts | 6 places |
| **`qAtIndex`** | format.ts | 6 places |
| **`side`** | cycle-analysis.ts | 6 places |
| **`strip`** | render-core.ts | 6 places |
| **`tagFor`** | format.ts | 6 places |
| **`bandEnds`** | format.ts | 5 places |
| **`detailSlot`** | dom.ts | 5 places |
| **`growthWord`** | model.ts | 5 places |
| **`inflationFigure`** | model.ts | 5 places |
| **`isoDay`** | format.ts | 5 places |
| **`labRow`** | data.ts | 5 places |
| **`listWords`** | cycle-analysis.ts | 5 places |
| **`meanRule`** | charts.ts | 5 places |
| **`normOf`** | cycle-analysis.ts | 5 places |
| **`openCycle`** | model.ts | 5 places |
| **`pct`** | fed-phases.ts | 5 places |
| **`qWindowFrom`** | history.ts | 5 places |
| **`timelineSpan`** | history.ts | 5 places |
| **`yearsWord`** | cycle-analysis.ts | 5 places |
| **`byIdMaybe`** | dom.ts | 4 places |
| **`catTitle`** | cycle-analysis.ts | 4 places |
| **`cpiYear`** | model.ts | 4 places |
| **`curveAt`** | data.ts | 4 places |
| **`cycleModel`** | model.ts | 4 places |
| **`drawsPage`** | render-core.ts | 4 places |
| **`dxSys`** | render-core.ts | 4 places |
| **`fedFundsRange`** | data.ts | 4 places |
| **`fill`** | ai-insights.ts | 4 places |
| **`fmt`** | cycle-analysis.ts | 4 places |
| **`labOf`** | ai-insights.ts | 4 places |
| **`moodTrack`** | model.ts | 4 places |
| **`paintReading`** | repaint.ts | 4 places |
| **`panel`** | ai-insights.ts | 4 places |
| **`pctl`** | format.ts | 4 places |
| **`qPretty`** | format.ts | 4 places |
| **`refitHistory`** | history.ts | 4 places |
| **`seasonGroup`** | model.ts | 4 places |
| **`tier`** | cycle-analysis.ts | 4 places |
| **`visits`** | cycle-analysis.ts | 4 places |
| **`word`** | cycle-analysis.ts | 4 places |
| **`attrNum`** | history.ts | 3 places |
| **`categoriesShown`** | roster.ts | 3 places |
| **`curveAsOf`** | data.ts | 3 places |
| **`cycleQtrIdx`** | model.ts | 3 places |
| **`cycleView`** | dial-cycle.ts | 3 places |
| **`docValue`** | live.ts | 3 places |
| **`expandBtn`** | dom.ts | 3 places |
| **`headMoreBtn`** | history.ts | 3 places |
| **`indOf`** | readings.ts | 3 places |
| **`judged`** | cycle-analysis.ts | 3 places |
| **`liveInto`** | live.ts | 3 places |
| **`menuOf`** | cycle-analysis.ts | 3 places |
| **`monthIdx`** | fed-phases.ts | 3 places |
| **`moodToday`** | model.ts | 3 places |
| **`mWindowFrom`** | history.ts | 3 places |
| **`normAt`** | cycle-analysis.ts | 3 places |
| **`onScreen`** | dom.ts | 3 places |
| **`openOf`** | render-core.ts | 3 places |
| **`potentialGap`** | model.ts | 3 places |
| **`quarterSheet`** | quarter-sheet.ts | 3 places |
| **`rankToDate`** | model.ts | 3 places |
| **`readSeason`** | model.ts | 3 places |
| **`renderDiagnosis`** | diagnosis.ts | 3 places |
| **`scoreTile`** | cycle-analysis.ts | 3 places |
| **`seasonPills`** | render-core.ts | 3 places |
| **`seasonRuns`** | render-core.ts | 3 places |
| **`seasonRunsLabel`** | render-core.ts | 3 places |
| **`seasonTitle`** | model.ts | 3 places |
| **`showCycle`** | dial-cycle.ts | 3 places |
| **`stateOf`** | format.ts | 3 places |
| **`tabBar`** | history.ts | 3 places |
| **`trendText`** | dom.ts | 3 places |
| **`unempState`** | readings.ts | 3 places |
| **`volatilityTag`** | readings.ts | 3 places |
| **`yearTicks`** | history-charts.ts | 3 places |

## Shared patterns

Classes written from more than one function — a pattern being retyped. The ledger (`test/components.json`)
records these counts and `npm run check` fails if any of them grows. This list can only shrink.

| Class | Places | Written by |
|---|---|---|
| `.caption` | 19 | `dial-cycle.ts:renderCycleKicker`, `quarter-sheet.ts:quarterPopup`, `readings.ts:activityInfoHtml`, `readings.ts:confidenceInfoHtml`, `readings.ts:desireInfoHtml`, `readings.ts:dsrInfoHtml`, `readings.ts:growthInfoHtml`, `readings.ts:horizonInfoHtml`, `readings.ts:marketInfoHtml`, `readings.ts:premiumInfoHtml`, `readings.ts:productivityInfoHtml`, `readings.ts:pulseInfoHtml`, `readings.ts:savInfoHtml`, `readings.ts:temperatureInfoHtml`, `readings.ts:volumeInfoHtml`, `render-core.ts:pressureMaturities`, `render-pages.ts:deriveUninversionDetail`, `render-pages.ts:renderSpreadHistory`, `render-pages.ts:spreadSeries` |
| `.follow` | 15 | `readings.ts:activityInfoHtml`, `readings.ts:confidenceInfoHtml`, `readings.ts:desireInfoHtml`, `readings.ts:dsrInfoHtml`, `readings.ts:growthInfoHtml`, `readings.ts:horizonInfoHtml`, `readings.ts:marketInfoHtml`, `readings.ts:premiumInfoHtml`, `readings.ts:productivityInfoHtml`, `readings.ts:pulseInfoHtml`, `readings.ts:savInfoHtml`, `readings.ts:temperatureInfoHtml`, `readings.ts:volumeInfoHtml`, `render-pages.ts:deriveUninversionDetail`, `render-pages.ts:spreadSeries` |
| `.hi-lede` | 10 | `format.ts:lede`, `inner-pages.ts:gdpHighlights`, `inner-pages.ts:householdsHighlights`, `inner-pages.ts:tempHighlights`, `inner-pages.ts:valuationHighlights`, `insights.ts:insightCirculation`, `render-core.ts:renderPressureInsights`, `render-pages.ts:renderHormones`, `render-pages.ts:spreadInsights`, `render-pages.ts:volatilityHighlights` |
| `.page-chart` | 10 | `indicators.ts:drawSplit`, `inner-pages.ts:registerHouseholdsValuationPages`, `readings.ts:activityStackHtml`, `readings.ts:deficitBlock`, `readings.ts:pulseBlock`, `readings.ts:velocityRecordBlock`, `readings.ts:volumeBlock`, `render-core.ts:cardDetailHtml`, `render-pages.ts:renderHormones`, `render-pages.ts:renderVolatility` |
| `.hcol` | 7 | `charts.ts:divergeChart`, `history-charts.ts:cpiHistoryChart`, `history-charts.ts:fedFundsHistoryChart`, `history-charts.ts:householdsChart`, `history-charts.ts:m2GrowthChart`, `history-charts.ts:unempHistoryChart`, `history-charts.ts:velocityHistoryChart` |
| `.marker-sub` | 6 | `format.ts:popHead`, `indicators.ts:splitInfo`, `quarter-sheet.ts:quarterPopup`, `readings.ts:volatilityDetailHtml`, `render-core.ts:cardDetailHtml`, `render-pages.ts:renderValuationTag` |
| `.tag` | 6 | `pages-nav.ts:renderSignsList`, `readings.ts:pulseBlock`, `render-core.ts:headHtml`, `render-pages.ts:renderHormones`, `render-pages.ts:renderSubjectRows`, `repaint.ts:paintTag` |
| `.highlights` | 5 | `format.ts:highlightsHtml`, `render-core.ts:cardDetailHtml`, `render-core.ts:renderPressureInsights`, `render-pages.ts:renderHormones`, `render-pages.ts:spreadInsights` |
| `.hi-head` | 5 | `format.ts:highlightsHtml`, `render-core.ts:cardDetailHtml`, `render-core.ts:renderPressureInsights`, `render-pages.ts:renderHormones`, `render-pages.ts:spreadInsights` |
| `.unit` | 5 | `pages-nav.ts:renderSignsList`, `render-core.ts:econChips`, `render-core.ts:renderPressureRow`, `render-pages.ts:renderHormones`, `render-pages.ts:renderSubjectRows` |
| `.mono` | 4 | `charts.ts:fitGroup`, `charts.ts:histTip`, `readings.ts:pulseBlock`, `render-core.ts:cardDetailHtml` |
| `.insights` | 4 | `format.ts:highlightsHtml`, `render-core.ts:renderPressureInsights`, `render-pages.ts:renderHormones`, `render-pages.ts:spreadInsights` |
| `.pulsebox` | 4 | `readings.ts:deficitBlock`, `readings.ts:pulseBlock`, `readings.ts:velocityRecordBlock`, `readings.ts:volumeBlock` |
| `.vh-host` | 4 | `readings.ts:activityStackHtml`, `readings.ts:deficitBlock`, `readings.ts:velocityRecordBlock`, `readings.ts:volumeBlock` |
| `.peek-chart` | 3 | `charts.ts:colPeek`, `charts.ts:meterPeek`, `charts.ts:pulsePeek` |
| `.peek-mark` | 3 | `charts.ts:peekCard`, `pages-nav.ts:convertLeadingSigns`, `render-core.ts:catCard` |
| `.cycsel-nm` | 3 | `history.ts:cyclePicker`, `history.ts:headMenuHtml`, `history.ts:headPickRow` |
| `.strip-run` | 3 | `portfolio.ts:weatherStrip`, `render-core.ts:marketPills`, `render-core.ts:seasonPills` |
| `.vh-mean` | 2 | `charts.ts:meanRule`, `history-charts.ts:velocityHistoryChart` |
| `.vh-svg` | 2 | `charts.ts:vhOpen`, `history-charts.ts:householdsChart` |
| `.on` | 2 | `cycle-analysis.ts:ring`, `insights.ts:moodCycleSvg` |
| `.cat-list` | 2 | `cycle-tab.ts:buildCategories`, `render-core.ts:catList` |
| `.dx` | 2 | `diagnosis.ts:diagnosisHost`, `portfolio.ts:buildPortfolio` |
| `.season-sw` | 2 | `dial-cycle.ts:renderCycleKicker`, `portfolio.ts:drawWeather` |
| `.expand-btn` | 2 | `dial-cycle.ts:renderCycleKicker`, `dom.ts:expandBtn` |
| `.dx-mark` | 2 | `dom.ts:trendHead`, `render-core.ts:dxHead` |
| `.hi-card` | 2 | `format.ts:hiCard`, `render-core.ts:cardDetailHtml` |
| `.cycsel-opt` | 2 | `history.ts:headMenuHtml`, `history.ts:headPickRow` |
| `.cycsel-tick` | 2 | `history.ts:cyclePicker`, `history.ts:headPickRow` |
| `.cycsel-menu` | 2 | `history.ts:cyclePicker`, `history.ts:histHead` |
| `.cycsel-yr` | 2 | `history.ts:cyclePicker`, `history.ts:headMenuHtml` |
| `.subject` | 2 | `pages-nav.ts:convertLeadingSigns`, `render-core.ts:subjectRow` |
| `.subject-summary` | 2 | `pages-nav.ts:convertLeadingSigns`, `render-core.ts:subjectRow` |
| `.lag-row` | 2 | `render-pages.ts:deriveUninversionDetail`, `tabs-menu.ts:renderSeasonRows` |
| `.lag-row-head` | 2 | `render-pages.ts:deriveUninversionDetail`, `tabs-menu.ts:renderSeasonRows` |
