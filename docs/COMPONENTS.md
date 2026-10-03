# Components

**Generated. Do not hand-edit** — run `npm run map`. `npm run check` fails if this page is stale.

A **component** here is a function and the CSS classes only it writes. Nothing declares itself one; the list
is derived from the source by `tools/components.js`, the same scan that stops a pattern being retyped. So a
name on this page is a name you can use — in a request, a commit, a conversation — and it points at exactly
one function. **Owns** is the classes no other function emits. **Used by** is every top-level function that
calls it, by file.

Generated from commit `55c0ada` on 2026-10-03. **81 components**, **38 shared patterns**.

## analysis.js

| Component | Owns | Used by |
|---|---|---|
| **`cycleRowsHtml`** | `.chip` `.data` `.era-bands` `.era-econ` `.era-foot` `.era-head` `.era-name` `.era-open` `.era-row` `.era-years` | `analysis.js:wireCycleData` |
| **`cycleTrack`** | `.cyc-scale` `.cyc-track` `.sx-foot` `.sx-yrs` | `analysis.js:cycleRowsHtml` |
| **`eraCard`** | `.ci-word` | `analysis.js:eraCards` |
| **`symptomLegend`** | `.sx-down` `.sx-keys` `.sx-now` `.sx-off` | `analysis.js:wireCycleData` |
| **`symptomRow`** | `.sx-row` | `analysis.js:cycleTrack` |

## charts.js

| Component | Owns | Used by |
|---|---|---|
| **`avgRule`** | `.temp-avg` | `charts.js:divergeChart`, `history-charts.js:cpiHistoryChart`, `history-charts.js:deficitChart`, `history-charts.js:fedFundsHistoryChart`, `history-charts.js:gdpHistoryChart`, `history-charts.js:m2GrowthChart`, `history-charts.js:unempHistoryChart`, `history-charts.js:velocityHistoryChart` |
| **`chartAxes`** | `.bt-axis` `.bt-frame` `.bt-grid` `.bt-yl` | `charts.js:divergeChart`, `history-charts.js:cpiHistoryChart`, `history-charts.js:deficitChart`, `history-charts.js:desireHistoryChart`, `history-charts.js:fedFundsHistoryChart`, `history-charts.js:gdpHistoryChart`, `history-charts.js:householdsChart`, `history-charts.js:m2GrowthChart`, `history-charts.js:unempHistoryChart`, `history-charts.js:velocityHistoryChart`, `render-core.js:renderPressurePage`, `render-pages.js:renderSpreadHistory` |
| **`colPeek`** | `.heat` `.peek-base` | `analysis.js:eraMini`, `charts.js:peekCard`, `readings.js:bootReadings`, `readings.js:deficitBlock`, `readings.js:derivePulseTag`, `render-core.js:renderPressureRow`, `render-pages.js:renderHormones` |
| **`crossLine`** | `.hist-cross` | `charts.js:divergeChart`, `history-charts.js:cpiHistoryChart`, `history-charts.js:deficitChart`, `history-charts.js:desireHistoryChart`, `history-charts.js:fedFundsHistoryChart`, `history-charts.js:gdpHistoryChart`, `history-charts.js:householdsChart`, `history-charts.js:m2GrowthChart`, `history-charts.js:unempHistoryChart`, `history-charts.js:velocityHistoryChart`, `render-core.js:renderPressurePage` |
| **`divergeChart`** | `.dchart` `.dv-bar` `.dv-mid` | `indicators.js:drawSplit`, `inner-pages.js:registerHouseholdsValuationPages`, `render-pages.js:renderVolatility` |
| **`fitGroup`** | `.chart-label-plate` `.fit` `.fit-lab` `.fit-line` | `charts.js:divergeChart`, `charts.js:fitLine`, `history-charts.js:deficitChart`, `render-core.js:ylmFitLine` |
| **`histBar`** | `.hist-bar` | `indicators.js:drawSplit`, `inner-pages.js:registerHouseholdsValuationPages`, `readings.js:activityStackHtml`, `readings.js:deficitBlock`, `readings.js:desireBlock`, `readings.js:velocityRecordBlock`, `readings.js:volumeBlock`, `render-pages.js:renderHormones`, `render-pages.js:renderVolatility` |
| **`histTip`** | `.gdp-tooltip` `.hist-tip` | `indicators.js:drawSplit`, `inner-pages.js:registerHouseholdsValuationPages`, `readings.js:activityStackHtml`, `readings.js:deficitBlock`, `readings.js:desireBlock`, `readings.js:velocityRecordBlock`, `readings.js:volumeBlock`, `render-pages.js:renderHormones`, `render-pages.js:renderVolatility` |
| **`meterPeek`** | `.meterpeek` `.mp-band` `.mp-core` `.mp-here` `.mp-track` | `charts.js:peekCard` |
| **`peekCard`** | `.peek` `.peek-kicker` `.peek-text` `.peek-unit` `.peek-value` `.peek-word` | `roster.js:peekOf` |
| **`pulseTraceSvg`** | `.pt-svg` | `charts.js:pulsePeek`, `readings.js:pulseBlock` |
| **`trendOf`** | `.tp-arrow` | `charts.js:fitLine`, `history-charts.js:deficitChart`, `indicators.js:drawSplit`, `inner-pages.js:registerActivityPowerDeficitPages`, `inner-pages.js:registerHouseholdsValuationPages`, `inner-pages.js:registerTempGdpPages`, `render-core.js:registerFlowPages`, `render-core.js:renderPressurePage`, `render-core.js:ylmFitLine`, `render-pages.js:renderHorizonPage`, `render-pages.js:renderHormones`, `render-pages.js:renderVolatility` |
| **`trendPill`** | `.can-toggle` `.tp-k` `.trendpill` | `indicators.js:drawSplit`, `inner-pages.js:registerActivityPowerDeficitPages`, `inner-pages.js:registerHouseholdsValuationPages`, `inner-pages.js:registerTempGdpPages`, `render-core.js:registerFlowPages`, `render-core.js:renderPressurePage`, `render-pages.js:renderHorizonPage`, `render-pages.js:renderHormones`, `render-pages.js:renderVolatility` |
| **`vGrid`** | `.bt-vgrid` | `charts.js:divergeChart`, `history-charts.js:deficitChart`, `history-charts.js:desireHistoryChart`, `history-charts.js:gdpHistoryChart`, `history-charts.js:householdsChart`, `history-charts.js:m2GrowthChart`, `history-charts.js:velocityHistoryChart`, `history-charts.js:yearTicks`, `render-pages.js:renderSpreadHistory` |
| **`vitalRingSvg`** | `.vital-ring-fill` `.vital-ring-track` | `analysis.js:eraMini`, `charts.js:peekCard`, `readings.js:volatilityRing` |
| **`xLabel`** | `.bt-xl` | `charts.js:divergeChart`, `history-charts.js:deficitChart`, `history-charts.js:desireHistoryChart`, `history-charts.js:gdpHistoryChart`, `history-charts.js:householdsChart`, `history-charts.js:m2GrowthChart`, `history-charts.js:velocityHistoryChart`, `history-charts.js:yearTicks`, `render-pages.js:renderSpreadHistory` |
| **`zeroRule`** | `.m2-zero` | `history-charts.js:cpiHistoryChart`, `history-charts.js:deficitChart`, `history-charts.js:fedFundsHistoryChart`, `history-charts.js:gdpHistoryChart`, `history-charts.js:m2GrowthChart`, `history-charts.js:unempHistoryChart` |

## cycle-tab.js

| Component | Owns | Used by |
|---|---|---|
| **`placeSignPair`** | `.peek-row` | `cycle-tab.js:renderPeekAndCategories` |

## diagnosis.js

| Component | Owns | Used by |
|---|---|---|
| **`buildDiagnosis`** | `.dx` | `diagnosis.js:bootDiagnosis` |
| **`dxHead`** | `.dx-sys-head` | `diagnosis.js:diagnosisHtml`, `diagnosis.js:systemHtml` |
| **`dxRow`** | `.dx-k` `.dx-row` | `diagnosis.js:acrossCycle`, `diagnosis.js:diagnosisHtml` |
| **`dxText`** | `.dx-v` | `diagnosis.js:systemHtml` |
| **`moodDoor`** | `.cat-mood` `.trend-card` `.trend-head` | `diagnosis.js:diagnosisHtml` |
| **`systemHtml`** | `.dx-cat` | `diagnosis.js:diagnosisHtml` |
| **`trendText`** | `.trend-text` | `diagnosis.js:diagnosisHtml` |

## dial-cycle.js

| Component | Owns | Used by |
|---|---|---|
| **`drawDial`** | `.cap` `.dial-dot` `.dial-mkt` `.dial-moon` `.dial-peak` `.dial-today-badge` `.dial-track` `.disc` `.dot` `.lbl` `.num` | `dial-cycle.js:renderCycleView` |
| **`hubSet`** | `.hub-chev` `.hub-stage` | `dial-cycle.js:hubShowDefault`, `dial-cycle.js:hubShowQuarter` |
| **`quarterCards`** | `.cat-sheet` `.cat-weather` | `dial-cycle.js:quarterSheet` |
| **`quarterPopup`** | `.reading-block` `.reading-book` `.reading-watch` | `dial-cycle.js:quarterSheet` |
| **`renderCycleKicker`** | `.bar` `.info-btn` `.legend-head` `.legend-row` `.legend-rows` `.season-sw` `.ytd` | `dial-cycle.js:bootDialCycle` |

## dom.js

| Component | Owns | Used by |
|---|---|---|
| **`moreRow`** | `.more-row` | `dial-cycle.js:quarterSheet`, `inner-pages.js:gdpHighlights`, `inner-pages.js:tempHighlights`, `inner-pages.js:valuationHighlights`, `insights.js:insightMood`, `render-core.js:cardDetailHtml` |

## format.js

| Component | Owns | Used by |
|---|---|---|
| **`facts`** | `.facts` | `analysis.js:symptomNote`, `dial-cycle.js:bootDialCycle`, `format.js:factsFrom`, `insights.js:moodInfo`, `readings.js:bootReadings`, `readings.js:deficitBlock`, `readings.js:volatilityDetailHtml` |
| **`hiCard`** | `.hi-name` | `indicators.js:buffettInsight`, `indicators.js:confidenceInsight`, `indicators.js:debtInsight`, `indicators.js:interestInsight`, `indicators.js:marketInsight`, `indicators.js:productivityInsight`, `inner-pages.js:gdpHighlights`, `inner-pages.js:householdsHighlights`, `inner-pages.js:tempHighlights`, `inner-pages.js:valuationHighlights`, `insights.js:insightCirculation`, `insights.js:insightWeather`, `insights.js:marketCycleCard`, `insights.js:moodCard`, `insights.js:seasonCards`, `render-core.js:renderPressureInsights`, `render-pages.js:renderHormones`, `render-pages.js:spreadInsights`, `render-pages.js:volatilityHighlights` |
| **`hubLine`** | `.hub-line` | `dial-cycle.js:hubSet`, `dial-cycle.js:hubShowYear` |
| **`ledeHtml`** | `.lede` | `dial-cycle.js:bootDialCycle`, `readings.js:bootReadings`, `readings.js:deficitBlock` |
| **`maxIn`** | `.peek-chev` | `indicators.js:buffettInsight`, `indicators.js:debtInsight` |
| **`srcBlock`** | `.src` | `dial-cycle.js:bootDialCycle`, `dial-cycle.js:renderCycleKicker`, `indicators.js:splitInfo`, `insights.js:moodInfo`, `readings.js:activityInfoHtml`, `readings.js:confidenceInfoHtml`, `readings.js:desireInfoHtml`, `readings.js:dsrInfoHtml`, `readings.js:growthInfoHtml`, `readings.js:marketInfoHtml`, `readings.js:productivityInfoHtml`, `readings.js:savInfoHtml`, `readings.js:temperatureInfoHtml`, `readings.js:volatilityDetailHtml`, `render-core.js:pressureMaturities`, `render-pages.js:deriveUninversionDetail`, `render-pages.js:spreadSeries`, `tabs-menu.js:renderSeasonRows` |

## history-charts.js

| Component | Owns | Used by |
|---|---|---|
| **`cpiHistoryChart`** | `.temp-col` | `inner-pages.js:registerTempGdpPages` |
| **`deficitChart`** | `.def-col` `.spread-history-band` | `inner-pages.js:registerActivityPowerDeficitPages` |
| **`desireHistoryChart`** | `.hy-avg` `.hy-col2` | `render-core.js:registerFlowPages` |
| **`fedFundsHistoryChart`** | `.ff-col` | `render-pages.js:renderHormones` |
| **`gdpHistoryChart`** | `.growth-col` | `inner-pages.js:registerTempGdpPages` |
| **`householdsChart`** | `.bill` `.hh-col` `.kept` | `inner-pages.js:registerHouseholdsValuationPages` |
| **`m2GrowthChart`** | `.m2-col` | `render-core.js:registerFlowPages` |
| **`unempHistoryChart`** | `.unemp-col` | `inner-pages.js:registerActivityPowerDeficitPages` |
| **`velocityHistoryChart`** | `.pv-col` | `render-core.js:registerFlowPages` |

## history.js

| Component | Owns | Used by |
|---|---|---|
| **`cyclePicker`** | `.cycsel-btn` | `history.js:histControls` |
| **`headMenuHtml`** | `.bh-back` `.bh-grp-row` `.bh-sep` | `history.js:histHead`, `history.js:paintHeadMenus` |
| **`histHead`** | `.band-head` `.bh-mark` `.bh-menu` `.bh-more` `.bh-more-wrap` `.bh-sigma` `.bh-title` | `indicators.js:drawSplit`, `inner-pages.js:registerHouseholdsValuationPages`, `inner-pages.js:registerTempGdpPages`, `readings.js:activityStackHtml`, `readings.js:deficitBlock`, `readings.js:desireBlock`, `readings.js:velocityRecordBlock`, `readings.js:volumeBlock`, `render-core.js:pressureHead`, `render-pages.js:renderHormones`, `render-pages.js:renderVolatility` |
| **`histLive`** | `.sr-only` | `history.js:histKeysWire`, `history.js:wireHistHover` |
| **`histReadEnsure`** | `.hist-read` `.hr-label` `.hr-plate` `.hr-value` | `history.js:histKeysWire`, `history.js:wireHistHover` |

## indicators.js

| Component | Owns | Used by |
|---|---|---|
| **`appendPicks`** | `.cat-group` | `cycle-tab.js:buildCategories` |

## insights.js

| Component | Owns | Used by |
|---|---|---|
| **`insightMood`** | `.mood-fig` | — |
| **`moodCallout`** | `.mood-arrow` `.mood-call` | `insights.js:moodCycleSvg` |
| **`moodCycleSvg`** | `.mood-curve` `.mood-dot` `.mood-line` `.on` | `insights.js:insightMood` |

## pages-nav.js

| Component | Owns | Used by |
|---|---|---|
| **`buildSearch`** | `.ind-hint` `.ind-tabs` `.search-none` | `pages-nav.js:renderPagesAndNav` |
| **`convertLeadingSigns`** | `.sign-row` | `pages-nav.js:renderSignsList` |
| **`indCategoryHtml`** | `.ind-card` `.ind-cat` `.ind-cat-head` `.ind-cat-name` | `pages-nav.js:buildSearch` |
| **`indRow`** | `.ind-fig` `.ind-line` `.ind-name` | `pages-nav.js:indRows` |
| **`renderSignsList`** | `.sign-detail` `.subject-label` `.subject-verdict` | `pages-nav.js:bootPagesNav` |

## readings.js

| Component | Owns | Used by |
|---|---|---|
| **`pulseBlock`** | `.past` `.pt-head` `.pt-k` `.pt-v` `.pulsetrace` | `readings.js:deficitBlock` |
| **`riskMatrixBlock`** | `.riskmx` `.rm-axis` `.rm-axis-x` `.rm-axis-y` `.rm-c` `.rm-cells` `.rm-frame` `.rm-grid` `.rm-mark` `.rm-xlabs` `.rm-ylabs` | `readings.js:deficitBlock`, `repaint.js:repaintDesire` |

## render-core.js

| Component | Owns | Used by |
|---|---|---|
| **`cardDetailHtml`** | `.blood-card` `.metric` `.metric-row` `.metric-sub` | `pages-nav.js:renderSignsList` |
| **`catCard`** | `.cat-item` `.ci-body` `.ci-head` `.ci-mini` `.ci-name` `.ci-read` `.ci-unit` `.ci-value` `.ci-when` | `dial-cycle.js:quarterCards`, `render-core.js:catItem` |
| **`headHtml`** | `.body-term` `.card-head` `.card-titles` `.econ-term` `.head-mark` `.head-mark-disc` | `render-core.js:cardDetailHtml` |
| **`metricSheet`** | `.metric-sheet` | `indicators.js:catSheet`, `indicators.js:mountSplit`, `pages-nav.js:convertLeadingSigns`, `pages-nav.js:renderSignsList` |
| **`seatPageFoot`** | `.page-foot` | `pages-nav.js:buildNav` |
| **`subjectIcon`** | `.subject-icon` | `indicators.js:splitPeek`, `pages-nav.js:indGroupRow`, `pages-nav.js:registerRoster`, `pages-nav.js:renderSignsList` |
| **`subjectRow`** | `.subject-more` `.subject-ring` `.subject-text` | `pages-nav.js:indRow`, `pages-nav.js:renderSignsList` |
| **`timingMark`** | `.tm-dot` `.tm-line` `.tm-now` `.tm-span` | `render-core.js:timingPill` |
| **`timingPill`** | `.timing` `.timing-row` | `indicators.js:mountSplit`, `pages-nav.js:convertLeadingSigns`, `pages-nav.js:orderMetricSheets`, `pages-nav.js:renderSignsList` |

## render-pages.js

| Component | Owns | Used by |
|---|---|---|
| **`deriveUninversionDetail`** | `.lag-rows` | `render-pages.js:bootRenderPages` |
| **`renderHormones`** | `.aux-group` `.norm` | `render-pages.js:bootRenderPages` |
| **`spreadInsights`** | `.aux-stat` `.wordy` | `render-pages.js:renderHorizonPage` |

## tabs-menu.js

| Component | Owns | Used by |
|---|---|---|
| **`renderSeasonRows`** | `.cell` `.cold` `.hot` `.meta` `.range-bar` `.range-cell` | `tabs-menu.js:bootTabsMenu` |
| **`wireContactForm`** | `.menu-card` `.menu-label` `.menu-row` `.menu-section` | `tabs-menu.js:bootTabsMenu` |

## Vocabulary

Functions that own no class of their own but are called from three or more places — the words every
renderer speaks. Listed most-used first.

| Function | Lives in | Called from |
|---|---|---|
| **`byId`** | dom.js | 49 places |
| **`put`** | dom.js | 23 places |
| **`fmtSigned`** | format.js | 13 places |
| **`histFrame`** | charts.js | 12 places |
| **`publishGeom`** | charts.js | 12 places |
| **`colPath`** | charts.js | 11 places |
| **`colWidth`** | charts.js | 11 places |
| **`monthLabel`** | format.js | 11 places |
| **`addSources`** | dom.js | 10 places |
| **`attachHistory`** | history.js | 9 places |
| **`fitLine`** | charts.js | 9 places |
| **`histControls`** | history.js | 9 places |
| **`pageCycle`** | history.js | 9 places |
| **`qLabel`** | format.js | 9 places |
| **`valRow`** | data.js | 9 places |
| **`windowYears`** | charts.js | 9 places |
| **`factsFrom`** | format.js | 8 places |
| **`focusQuiet`** | dom.js | 8 places |
| **`histNote`** | history.js | 8 places |
| **`lede`** | format.js | 8 places |
| **`vhOpen`** | charts.js | 8 places |
| **`windowScale`** | history.js | 8 places |
| **`yearOf`** | format.js | 8 places |
| **`cycleSlice`** | model.js | 7 places |
| **`highlightsHtml`** | format.js | 7 places |
| **`peekOf`** | roster.js | 6 places |
| **`qAtIndex`** | format.js | 6 places |
| **`timelineSpan`** | history.js | 6 places |
| **`atMonth`** | format.js | 5 places |
| **`labRow`** | data.js | 5 places |
| **`layer`** | dom.js | 5 places |
| **`meanRule`** | charts.js | 5 places |
| **`paintReading`** | repaint.js | 5 places |
| **`qWindowFrom`** | history.js | 5 places |
| **`detailSlot`** | dom.js | 4 places |
| **`drawsPage`** | render-core.js | 4 places |
| **`expandBtn`** | dom.js | 4 places |
| **`fedFundsRange`** | data.js | 4 places |
| **`hyAt`** | data.js | 4 places |
| **`indOf`** | readings.js | 4 places |
| **`mean`** | format.js | 4 places |
| **`moodTrack`** | model.js | 4 places |
| **`openCycle`** | model.js | 4 places |
| **`prettyK`** | era.js | 4 places |
| **`refitHistory`** | history.js | 4 places |
| **`seasonGroup`** | model.js | 4 places |
| **`byIdMaybe`** | dom.js | 3 places |
| **`cycleQtrIdx`** | model.js | 3 places |
| **`desireRow`** | readings.js | 3 places |
| **`docValue`** | live.js | 3 places |
| **`eraFig`** | era.js | 3 places |
| **`groupId`** | indicators.js | 3 places |
| **`growthWord`** | model.js | 3 places |
| **`headMoreBtn`** | history.js | 3 places |
| **`histReadFill`** | history.js | 3 places |
| **`keyed`** | roster.js | 3 places |
| **`liveInto`** | live.js | 3 places |
| **`liveIsoOf`** | live.js | 3 places |
| **`merge`** | live.js | 3 places |
| **`moodToday`** | model.js | 3 places |
| **`mWindowFrom`** | history.js | 3 places |
| **`onScreen`** | dom.js | 3 places |
| **`popHead`** | format.js | 3 places |
| **`qPretty`** | format.js | 3 places |
| **`registerTiming`** | render-core.js | 3 places |
| **`renderDiagnosis`** | diagnosis.js | 3 places |
| **`showCycle`** | dial-cycle.js | 3 places |
| **`tabSegs`** | history.js | 3 places |
| **`timelineWindow`** | history.js | 3 places |
| **`volatilityTag`** | readings.js | 3 places |
| **`yearTicks`** | history-charts.js | 3 places |

## Shared patterns

Classes written from more than one function — a pattern being retyped. The ledger (`test/components.json`)
records these counts and `npm run check` fails if any of them grows. This list can only shrink.

| Class | Places | Written by |
|---|---|---|
| `.caption` | 20 | `dial-cycle.js:quarterPopup`, `dial-cycle.js:renderCycleKicker`, `readings.js:activityInfoHtml`, `readings.js:confidenceInfoHtml`, `readings.js:desireInfoHtml`, `readings.js:dsrInfoHtml`, `readings.js:growthInfoHtml`, `readings.js:horizonInfoHtml`, `readings.js:marketInfoHtml`, `readings.js:productivityInfoHtml`, `readings.js:pulseInfoHtml`, `readings.js:riskMatrixBlock`, `readings.js:savInfoHtml`, `readings.js:temperatureInfoHtml`, `readings.js:volumeInfoHtml`, `render-core.js:pressureMaturities`, `render-pages.js:deriveUninversionDetail`, `render-pages.js:renderSpreadHistory`, `render-pages.js:spreadSeries`, `tabs-menu.js:renderSeasonRows` |
| `.page-chart` | 12 | `indicators.js:drawSplit`, `inner-pages.js:registerHouseholdsValuationPages`, `readings.js:activityStackHtml`, `readings.js:deficitBlock`, `readings.js:desireBlock`, `readings.js:pulseBlock`, `readings.js:riskMatrixBlock`, `readings.js:velocityRecordBlock`, `readings.js:volumeBlock`, `render-core.js:cardDetailHtml`, `render-pages.js:renderHormones`, `render-pages.js:renderVolatility` |
| `.hi-lede` | 10 | `format.js:lede`, `inner-pages.js:gdpHighlights`, `inner-pages.js:householdsHighlights`, `inner-pages.js:tempHighlights`, `inner-pages.js:valuationHighlights`, `insights.js:insightCirculation`, `render-core.js:renderPressureInsights`, `render-pages.js:renderHormones`, `render-pages.js:spreadInsights`, `render-pages.js:volatilityHighlights` |
| `.hcol` | 8 | `charts.js:divergeChart`, `history-charts.js:cpiHistoryChart`, `history-charts.js:desireHistoryChart`, `history-charts.js:fedFundsHistoryChart`, `history-charts.js:householdsChart`, `history-charts.js:m2GrowthChart`, `history-charts.js:unempHistoryChart`, `history-charts.js:velocityHistoryChart` |
| `.highlights` | 7 | `format.js:highlightsHtml`, `insights.js:insightCirculation`, `insights.js:insightWeather`, `render-core.js:cardDetailHtml`, `render-core.js:renderPressureInsights`, `render-pages.js:renderHormones`, `render-pages.js:spreadInsights` |
| `.hi-head` | 7 | `format.js:highlightsHtml`, `insights.js:insightCirculation`, `insights.js:insightWeather`, `render-core.js:cardDetailHtml`, `render-core.js:renderPressureInsights`, `render-pages.js:renderHormones`, `render-pages.js:spreadInsights` |
| `.marker-sub` | 6 | `dial-cycle.js:quarterPopup`, `format.js:popHead`, `indicators.js:splitInfo`, `readings.js:volatilityDetailHtml`, `render-core.js:cardDetailHtml`, `render-pages.js:renderValuationTag` |
| `.insights` | 6 | `format.js:highlightsHtml`, `insights.js:insightCirculation`, `insights.js:insightWeather`, `render-core.js:renderPressureInsights`, `render-pages.js:renderHormones`, `render-pages.js:spreadInsights` |
| `.tag` | 6 | `pages-nav.js:renderSignsList`, `readings.js:pulseBlock`, `render-core.js:headHtml`, `render-pages.js:renderHormones`, `render-pages.js:renderSubjectRows`, `repaint.js:paintTag` |
| `.unit` | 5 | `analysis.js:cycleRowsHtml`, `pages-nav.js:renderSignsList`, `render-core.js:renderPressureRow`, `render-pages.js:renderHormones`, `render-pages.js:renderSubjectRows` |
| `.pulsebox` | 5 | `readings.js:deficitBlock`, `readings.js:desireBlock`, `readings.js:pulseBlock`, `readings.js:velocityRecordBlock`, `readings.js:volumeBlock` |
| `.vh-host` | 5 | `readings.js:activityStackHtml`, `readings.js:deficitBlock`, `readings.js:desireBlock`, `readings.js:velocityRecordBlock`, `readings.js:volumeBlock` |
| `.mono` | 4 | `charts.js:fitGroup`, `charts.js:histTip`, `readings.js:pulseBlock`, `render-core.js:cardDetailHtml` |
| `.peek-chart` | 3 | `charts.js:colPeek`, `charts.js:meterPeek`, `charts.js:pulsePeek` |
| `.peek-mark` | 3 | `charts.js:peekCard`, `pages-nav.js:convertLeadingSigns`, `render-core.js:catCard` |
| `.cycsel-nm` | 3 | `history.js:cyclePicker`, `history.js:headMenuHtml`, `history.js:headPickRow` |
| `.rangebar` | 3 | `history.js:modeBar`, `history.js:rangeBar`, `pages-nav.js:buildSearch` |
| `.vh-mean` | 2 | `charts.js:meanRule`, `history-charts.js:velocityHistoryChart` |
| `.vh-svg` | 2 | `charts.js:vhOpen`, `history-charts.js:householdsChart` |
| `.cat-list` | 2 | `cycle-tab.js:buildCategories`, `render-core.js:catList` |
| `.dx-mark` | 2 | `diagnosis.js:dxHead`, `diagnosis.js:moodDoor` |
| `.expand-btn` | 2 | `dial-cycle.js:renderCycleKicker`, `dom.js:expandBtn` |
| `.strip-run` | 2 | `dial-cycle.js:marketStripHtml`, `dial-cycle.js:seasonStripHtml` |
| `.strip-dots` | 2 | `dial-cycle.js:marketStripHtml`, `dial-cycle.js:seasonStripHtml` |
| `.strip` | 2 | `dial-cycle.js:marketStripHtml`, `dial-cycle.js:seasonStripHtml` |
| `.hi-card` | 2 | `format.js:hiCard`, `render-core.js:cardDetailHtml` |
| `.cycsel-opt` | 2 | `history.js:headMenuHtml`, `history.js:headPickRow` |
| `.cycsel-tick` | 2 | `history.js:cyclePicker`, `history.js:headPickRow` |
| `.cycsel-menu` | 2 | `history.js:cyclePicker`, `history.js:histHead` |
| `.cycsel-yr` | 2 | `history.js:cyclePicker`, `history.js:headMenuHtml` |
| `.hist-controls` | 2 | `history.js:histControls`, `render-core.js:registerFlowPages` |
| `.subject` | 2 | `pages-nav.js:convertLeadingSigns`, `render-core.js:subjectRow` |
| `.subject-summary` | 2 | `pages-nav.js:convertLeadingSigns`, `render-core.js:subjectRow` |
| `.subject-value` | 2 | `pages-nav.js:indRow`, `pages-nav.js:renderSignsList` |
| `.spread-history-head` | 2 | `readings.js:pulseBlock`, `readings.js:riskMatrixBlock` |
| `.pt-note` | 2 | `readings.js:pulseBlock`, `readings.js:riskMatrixBlock` |
| `.lag-row` | 2 | `render-pages.js:deriveUninversionDetail`, `tabs-menu.js:renderSeasonRows` |
| `.lag-row-head` | 2 | `render-pages.js:deriveUninversionDetail`, `tabs-menu.js:renderSeasonRows` |
