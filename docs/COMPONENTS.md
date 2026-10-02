# Components

**Generated. Do not hand-edit** — run `npm run map`. `npm run check` fails if this page is stale.

A **component** here is a function and the CSS classes only it writes. Nothing declares itself one; the list
is derived from the source by `tools/components.js`, the same scan that stops a pattern being retyped. So a
name on this page is a name you can use — in a request, a commit, a conversation — and it points at exactly
one function. **Owns** is the classes no other function emits. **Used by** is every top-level function that
calls it, by file.

Generated from commit `86b7a73` on 2026-10-02. **79 components**, **40 shared patterns**.

## components.js

| Component | Owns | Used by |
|---|---|---|
| **`deficitChart`** | `.def-col` `.spread-history-band` | `pages-nav.js:registerActivityPowerDeficitPages` |
| **`desireHistoryChart`** | `.hy-avg` `.hy-col2` | `render-core.js:registerFlowPages` |
| **`histReadEnsure`** | `.hist-read` `.hr-label` `.hr-plate` `.hr-value` | `components.js:wireHistHover`, `render-pages.js:renderSpreadHistory` |
| **`velocityHistoryChart`** | `.pv-col` | `render-core.js:registerFlowPages` |

## history.js

| Component | Owns | Used by |
|---|---|---|
| **`cpiHistoryChart`** | `.temp-col` | `pages-nav.js:registerTempGdpPages` |
| **`fedFundsHistoryChart`** | `.ff-col` | `render-pages.js:renderHormones` |
| **`gdpHistoryChart`** | `.growth-col` | `pages-nav.js:registerTempGdpPages` |
| **`headMenuHtml`** | `.bh-back` `.bh-grp-row` `.bh-sep` | `history.js:histHead`, `history.js:paintHeadMenus` |
| **`histHead`** | `.band-head` `.bh-mark` `.bh-menu` `.bh-more` `.bh-more-wrap` `.bh-sigma` `.bh-title` | `components.js:deficitBlock`, `history.js:desireBlock`, `history.js:velocityRecordBlock`, `history.js:volumeBlock`, `indicators.js:drawSplit`, `pages-nav.js:activityStackHtml`, `pages-nav.js:registerHouseholdsValuationPages`, `pages-nav.js:registerTempGdpPages`, `render-core.js:pressureHead`, `render-pages.js:renderHormones`, `render-pages.js:renderVolatility` |
| **`householdsChart`** | `.bill` `.hh-col` `.kept` | `pages-nav.js:registerHouseholdsValuationPages` |
| **`m2GrowthChart`** | `.m2-col` | `render-core.js:registerFlowPages` |
| **`unempHistoryChart`** | `.unemp-col` | `pages-nav.js:registerActivityPowerDeficitPages` |

## charts.js

| Component | Owns | Used by |
|---|---|---|
| **`avgRule`** | `.temp-avg` | `charts.js:divergeChart`, `components.js:deficitChart`, `components.js:velocityHistoryChart`, `history.js:cpiHistoryChart`, `history.js:fedFundsHistoryChart`, `history.js:gdpHistoryChart`, `history.js:m2GrowthChart`, `history.js:unempHistoryChart` |
| **`chartAxes`** | `.bt-axis` `.bt-frame` `.bt-grid` `.bt-yl` | `charts.js:divergeChart`, `components.js:deficitChart`, `components.js:desireHistoryChart`, `components.js:velocityHistoryChart`, `history.js:cpiHistoryChart`, `history.js:fedFundsHistoryChart`, `history.js:gdpHistoryChart`, `history.js:householdsChart`, `history.js:m2GrowthChart`, `history.js:unempHistoryChart`, `render-core.js:renderPressurePage`, `render-pages.js:renderSpreadHistory` |
| **`colPeek`** | `.heat` `.peek-base` | `analysis.js:eraMini`, `components.js:valRow`, `data.js:confidenceWord`, `forms.js:marketPeek`, `forms.js:peekCard`, `history.js:derivePulseTag`, `render-core.js:renderPressureRow`, `render-pages.js:renderHormones` |
| **`crossLine`** | `.hist-cross` | `charts.js:divergeChart`, `components.js:deficitChart`, `components.js:desireHistoryChart`, `components.js:velocityHistoryChart`, `history.js:cpiHistoryChart`, `history.js:fedFundsHistoryChart`, `history.js:gdpHistoryChart`, `history.js:householdsChart`, `history.js:m2GrowthChart`, `history.js:unempHistoryChart`, `render-core.js:renderPressurePage` |
| **`cyclePicker`** | `.cycsel-btn` | `charts.js:histControls` |
| **`divergeChart`** | `.dchart` `.dv-bar` `.dv-mid` | `indicators.js:drawSplit`, `pages-nav.js:registerHouseholdsValuationPages`, `render-pages.js:renderVolatility` |
| **`fitGroup`** | `.chart-label-plate` `.fit` `.fit-lab` `.fit-line` | `charts.js:divergeChart`, `charts.js:fitLine`, `components.js:deficitChart`, `render-core.js:ylmFitLine` |
| **`hiCard`** | `.hi-name` | `indicators.js:buffettInsight`, `indicators.js:confidenceInsight`, `indicators.js:debtInsight`, `indicators.js:interestInsight`, `indicators.js:marketInsight`, `indicators.js:productivityInsight`, `pages-nav.js:gdpHighlights`, `pages-nav.js:householdsHighlights`, `pages-nav.js:insightCirculation`, `pages-nav.js:insightWeather`, `pages-nav.js:marketCycleCard`, `pages-nav.js:moodCard`, `pages-nav.js:seasonCards`, `pages-nav.js:tempHighlights`, `pages-nav.js:valuationHighlights`, `render-core.js:renderPressureInsights`, `render-pages.js:renderHormones`, `render-pages.js:spreadInsights`, `render-pages.js:volatilityHighlights` |
| **`histBar`** | `.hist-bar` | `components.js:deficitBlock`, `history.js:desireBlock`, `history.js:velocityRecordBlock`, `history.js:volumeBlock`, `indicators.js:drawSplit`, `pages-nav.js:activityStackHtml`, `pages-nav.js:registerHouseholdsValuationPages`, `render-pages.js:renderHormones`, `render-pages.js:renderVolatility` |
| **`histTip`** | `.gdp-tooltip` `.hist-tip` | `components.js:deficitBlock`, `history.js:desireBlock`, `history.js:velocityRecordBlock`, `history.js:volumeBlock`, `indicators.js:drawSplit`, `pages-nav.js:activityStackHtml`, `pages-nav.js:registerHouseholdsValuationPages`, `render-pages.js:renderHormones`, `render-pages.js:renderVolatility` |
| **`meterPeek`** | `.meterpeek` `.mp-band` `.mp-core` `.mp-here` `.mp-track` | `forms.js:peekCard` |
| **`moreRow`** | `.more-row` | `dial-cycle.js:quarterSheet`, `pages-nav.js:gdpHighlights`, `pages-nav.js:insightMood`, `pages-nav.js:tempHighlights`, `pages-nav.js:valuationHighlights`, `render-core.js:cardDetailHtml` |
| **`riskMatrixBlock`** | `.riskmx` `.rm-axis` `.rm-axis-x` `.rm-axis-y` `.rm-c` `.rm-cells` `.rm-frame` `.rm-grid` `.rm-mark` `.rm-xlabs` `.rm-ylabs` | `components.js:valRow` |
| **`trendOf`** | `.tp-arrow` | `charts.js:fitLine`, `components.js:deficitChart`, `indicators.js:drawSplit`, `pages-nav.js:registerActivityPowerDeficitPages`, `pages-nav.js:registerHouseholdsValuationPages`, `pages-nav.js:registerTempGdpPages`, `render-core.js:registerFlowPages`, `render-core.js:renderPressurePage`, `render-core.js:ylmFitLine`, `render-pages.js:renderHorizonPage`, `render-pages.js:renderHormones`, `render-pages.js:renderVolatility` |
| **`trendPill`** | `.can-toggle` `.tp-k` `.trendpill` | `indicators.js:drawSplit`, `pages-nav.js:registerActivityPowerDeficitPages`, `pages-nav.js:registerHouseholdsValuationPages`, `pages-nav.js:registerTempGdpPages`, `render-core.js:registerFlowPages`, `render-core.js:renderPressurePage`, `render-pages.js:renderHorizonPage`, `render-pages.js:renderHormones`, `render-pages.js:renderVolatility` |
| **`vGrid`** | `.bt-vgrid` | `charts.js:divergeChart`, `components.js:deficitChart`, `components.js:desireHistoryChart`, `components.js:velocityHistoryChart`, `history.js:cpiHistoryChart`, `history.js:fedFundsHistoryChart`, `history.js:gdpHistoryChart`, `history.js:householdsChart`, `history.js:m2GrowthChart`, `history.js:unempHistoryChart`, `render-pages.js:renderSpreadHistory` |
| **`xLabel`** | `.bt-xl` | `charts.js:divergeChart`, `components.js:deficitChart`, `components.js:desireHistoryChart`, `components.js:velocityHistoryChart`, `history.js:cpiHistoryChart`, `history.js:fedFundsHistoryChart`, `history.js:gdpHistoryChart`, `history.js:householdsChart`, `history.js:m2GrowthChart`, `history.js:unempHistoryChart`, `render-pages.js:renderSpreadHistory` |
| **`zeroRule`** | `.m2-zero` | `components.js:deficitChart`, `history.js:cpiHistoryChart`, `history.js:fedFundsHistoryChart`, `history.js:gdpHistoryChart`, `history.js:m2GrowthChart`, `history.js:unempHistoryChart` |

## forms.js

| Component | Owns | Used by |
|---|---|---|
| **`peekCard`** | `.peek` `.peek-kicker` `.peek-text` `.peek-unit` `.peek-value` `.peek-word` | `roster.js:peekOf` |
| **`pulseBlock`** | `.past` `.peek-chev` `.pt-head` `.pt-k` `.pt-v` `.pulsetrace` | `components.js:valRow` |
| **`pulseTraceSvg`** | `.pt-svg` | `forms.js:pulseBlock`, `forms.js:pulsePeek` |

## model.js

| Component | Owns | Used by |
|---|---|---|
| **`vitalRingSvg`** | `.vital-ring-fill` `.vital-ring-track` | `analysis.js:eraMini`, `forms.js:peekCard`, `forms.js:volatilityRing` |

## render-core.js

| Component | Owns | Used by |
|---|---|---|
| **`cardDetailHtml`** | `.blood-card` `.metric` `.metric-row` `.metric-sub` | `pages-nav.js:renderSignsList` |
| **`facts`** | `.facts` | `analysis.js:symptomNote`, `charts.js:volatilityTag`, `components.js:deficitBlock`, `dial-cycle.js:heatStep`, `forms.js:volatilityDetailHtml`, `pages-nav.js:moodInfo`, `render-core.js:factsFrom` |
| **`headHtml`** | `.body-term` `.card-head` `.card-titles` `.econ-term` `.head-mark` `.head-mark-disc` | `render-core.js:cardDetailHtml` |
| **`ledeHtml`** | `.lede` | `charts.js:volatilityTag`, `components.js:deficitBlock`, `dial-cycle.js:heatStep` |
| **`metricSheet`** | `.metric-sheet` | `indicators.js:catSheet`, `indicators.js:mountSplit`, `pages-nav.js:convertLeadingSigns`, `pages-nav.js:renderSignsList` |
| **`seatPageFoot`** | `.page-foot` | `pages-nav.js:buildNav` |
| **`srcBlock`** | `.src` | `dial-cycle.js:heatStep`, `dial-cycle.js:renderCycleKicker`, `forms.js:dsrInfoHtml`, `forms.js:marketInfoHtml`, `forms.js:savInfoHtml`, `forms.js:volatilityDetailHtml`, `history.js:activityInfoHtml`, `history.js:confidenceInfoHtml`, `history.js:desireInfoHtml`, `history.js:growthInfoHtml`, `history.js:productivityInfoHtml`, `history.js:temperatureInfoHtml`, `indicators.js:splitInfo`, `pages-nav.js:moodInfo`, `render-core.js:pressureMaturities`, `render-pages.js:deriveUninversionDetail`, `render-pages.js:spreadSeries`, `tabs-menu.js:renderSeasonRows` |
| **`subjectIcon`** | `.subject-icon` | `indicators.js:splitPeek`, `pages-nav.js:indGroupRow`, `pages-nav.js:registerRoster`, `pages-nav.js:renderSignsList` |
| **`subjectRow`** | `.subject-more` `.subject-ring` `.subject-text` | `pages-nav.js:indRow`, `pages-nav.js:renderSignsList` |
| **`timingMark`** | `.tm-dot` `.tm-line` `.tm-now` `.tm-span` | `render-core.js:timingPill` |
| **`timingPill`** | `.timing` `.timing-row` | `indicators.js:mountSplit`, `pages-nav.js:convertLeadingSigns`, `pages-nav.js:orderMetricSheets`, `pages-nav.js:renderSignsList` |

## render-pages.js

| Component | Owns | Used by |
|---|---|---|
| **`deriveUninversionDetail`** | `.lag-rows` | — |
| **`renderHormones`** | `.aux-group` `.norm` | — |
| **`spreadInsights`** | `.aux-stat` `.wordy` | `render-pages.js:renderHorizonPage` |

## dial-cycle.js

| Component | Owns | Used by |
|---|---|---|
| **`drawDial`** | `.cap` `.dial-dot` `.dial-mkt` `.dial-moon` `.dial-peak` `.dial-today-badge` `.dial-track` `.disc` `.dot` `.lbl` `.num` | `dial-cycle.js:renderCycleView` |
| **`hubLine`** | `.hub-line` | `dial-cycle.js:hubSet`, `dial-cycle.js:hubShowYear` |
| **`hubSet`** | `.hub-chev` `.hub-stage` | `dial-cycle.js:hubShowDefault`, `dial-cycle.js:hubShowQuarter` |
| **`quarterCards`** | `.cat-sheet` `.cat-weather` | `dial-cycle.js:quarterSheet` |
| **`quarterPopup`** | `.reading-block` `.reading-book` `.reading-watch` | `dial-cycle.js:quarterSheet` |
| **`renderCycleKicker`** | `.bar` `.info-btn` `.legend-head` `.legend-rows` `.season-sw` `.ytd` | — |

## pages-nav.js

| Component | Owns | Used by |
|---|---|---|
| **`buildDiagnosis`** | `.dx` | — |
| **`buildSearch`** | `.ind-hint` `.ind-tabs` `.search-none` | `pages-nav.js:renderPagesAndNav` |
| **`catCard`** | `.cat-item` `.ci-body` `.ci-head` `.ci-mini` `.ci-name` `.ci-read` `.ci-unit` `.ci-value` `.ci-when` | `dial-cycle.js:quarterCards`, `pages-nav.js:catItem` |
| **`convertLeadingSigns`** | `.sign-row` | `pages-nav.js:renderSignsList` |
| **`dxHead`** | `.dx-sys-head` | `pages-nav.js:diagnosisHtml`, `pages-nav.js:systemHtml` |
| **`dxRow`** | `.dx-k` `.dx-row` | `pages-nav.js:acrossCycle`, `pages-nav.js:diagnosisHtml` |
| **`dxText`** | `.dx-v` | `pages-nav.js:systemHtml` |
| **`indCategoryHtml`** | `.ind-card` `.ind-cat` `.ind-cat-head` `.ind-cat-name` | `pages-nav.js:buildSearch` |
| **`indRow`** | `.ind-fig` `.ind-line` `.ind-name` | `pages-nav.js:indRows` |
| **`insightMood`** | `.mood-fig` | — |
| **`moodCallout`** | `.mood-arrow` `.mood-call` | `pages-nav.js:moodCycleSvg` |
| **`moodCycleSvg`** | `.mood-curve` `.mood-dot` `.mood-line` `.on` | `pages-nav.js:insightMood` |
| **`moodDoor`** | `.cat-mood` `.trend-card` `.trend-head` | `pages-nav.js:diagnosisHtml` |
| **`placeSignPair`** | `.peek-row` | `pages-nav.js:renderPeekAndCategories` |
| **`renderSignsList`** | `.sign-detail` `.subject-label` `.subject-verdict` | — |
| **`systemHtml`** | `.dx-cat` | `pages-nav.js:diagnosisHtml` |
| **`trendText`** | `.trend-text` | `pages-nav.js:diagnosisHtml` |

## indicators.js

| Component | Owns | Used by |
|---|---|---|
| **`appendPicks`** | `.cat-group` | `pages-nav.js:buildCategories` |

## analysis.js

| Component | Owns | Used by |
|---|---|---|
| **`cycleRowsHtml`** | `.chip` `.data` `.era-bands` `.era-econ` `.era-foot` `.era-head` `.era-name` `.era-open` `.era-row` `.era-years` | `analysis.js:wireCycleData` |
| **`cycleTrack`** | `.cyc-scale` `.cyc-track` `.sx-foot` `.sx-yrs` | `analysis.js:cycleRowsHtml` |
| **`eraCard`** | `.ci-word` | `analysis.js:eraCards` |
| **`symptomLegend`** | `.sx-down` `.sx-keys` `.sx-now` `.sx-off` | `analysis.js:wireCycleData` |
| **`symptomRow`** | `.sx-row` | `analysis.js:cycleTrack` |

## tabs-menu.js

| Component | Owns | Used by |
|---|---|---|
| **`renderSeasonRows`** | `.cell` `.cold` `.hot` `.meta` `.range-bar` `.range-cell` | — |
| **`wireContactForm`** | `.menu-card` `.menu-label` `.menu-row` `.menu-section` | — |

## Vocabulary

Functions that own no class of their own but are called from three or more places — the words every
renderer speaks. Listed most-used first.

| Function | Lives in | Called from |
|---|---|---|
| **`byId`** | refresh-season.js | 48 places |
| **`put`** | refresh-season.js | 24 places |
| **`fmtSigned`** | render-pages.js | 13 places |
| **`histFrame`** | charts.js | 12 places |
| **`colPath`** | charts.js | 11 places |
| **`colWidth`** | charts.js | 11 places |
| **`publishGeom`** | charts.js | 11 places |
| **`windowYears`** | components.js | 11 places |
| **`addSources`** | model.js | 10 places |
| **`monthLabel`** | model.js | 10 places |
| **`fitLine`** | charts.js | 9 places |
| **`histControls`** | charts.js | 9 places |
| **`pageCycle`** | charts.js | 9 places |
| **`attachHistory`** | charts.js | 8 places |
| **`factsFrom`** | render-core.js | 8 places |
| **`histNote`** | history.js | 8 places |
| **`lede`** | indicators.js | 8 places |
| **`qLabel`** | model.js | 8 places |
| **`vhOpen`** | charts.js | 8 places |
| **`windowScale`** | components.js | 8 places |
| **`yearOf`** | charts.js | 8 places |
| **`cycleSlice`** | charts.js | 7 places |
| **`highlightsHtml`** | charts.js | 7 places |
| **`peekOf`** | roster.js | 6 places |
| **`qAtIndex`** | history.js | 6 places |
| **`timelineSpan`** | components.js | 6 places |
| **`atMonth`** | charts.js | 5 places |
| **`LIVE`** | live.js | 5 places |
| **`meanRule`** | charts.js | 5 places |
| **`merge`** | live.js | 5 places |
| **`qWindowFrom`** | components.js | 5 places |
| **`detailSlot`** | render-core.js | 4 places |
| **`drawsPage`** | render-core.js | 4 places |
| **`expandBtn`** | render-core.js | 4 places |
| **`fedFundsRange`** | live.js | 4 places |
| **`hyAt`** | components.js | 4 places |
| **`indOf`** | roster.js | 4 places |
| **`labRow`** | data.js | 4 places |
| **`mean`** | charts.js | 4 places |
| **`moodTrack`** | model.js | 4 places |
| **`openCycle`** | charts.js | 4 places |
| **`paintReading`** | live.js | 4 places |
| **`prettyK`** | analysis.js | 4 places |
| **`refitHistory`** | components.js | 4 places |
| **`seasonGroup`** | model.js | 4 places |
| **`valRow`** | components.js | 4 places |
| **`byIdMaybe`** | refresh-season.js | 3 places |
| **`cycleQtrIdx`** | charts.js | 3 places |
| **`eraFig`** | analysis.js | 3 places |
| **`groupId`** | indicators.js | 3 places |
| **`histReadFill`** | components.js | 3 places |
| **`moodToday`** | model.js | 3 places |
| **`mWindowFrom`** | components.js | 3 places |
| **`popHead`** | dial-cycle.js | 3 places |
| **`qPretty`** | pages-nav.js | 3 places |
| **`registerTiming`** | render-core.js | 3 places |
| **`renderDiagnosis`** | pages-nav.js | 3 places |
| **`showCycle`** | dial-cycle.js | 3 places |
| **`timelineWindow`** | components.js | 3 places |
| **`volatilityTag`** | charts.js | 3 places |

## Shared patterns

Classes written from more than one function — a pattern being retyped. The ledger (`test/components.json`)
records these counts and `npm run check` fails if any of them grows. This list can only shrink.

| Class | Places | Written by |
|---|---|---|
| `.caption` | 20 | `charts.js:horizonInfoHtml`, `charts.js:riskMatrixBlock`, `dial-cycle.js:quarterPopup`, `dial-cycle.js:renderCycleKicker`, `forms.js:dsrInfoHtml`, `forms.js:marketInfoHtml`, `forms.js:savInfoHtml`, `history.js:activityInfoHtml`, `history.js:confidenceInfoHtml`, `history.js:desireInfoHtml`, `history.js:growthInfoHtml`, `history.js:productivityInfoHtml`, `history.js:pulseInfoHtml`, `history.js:temperatureInfoHtml`, `history.js:volumeInfoHtml`, `render-core.js:pressureMaturities`, `render-pages.js:deriveUninversionDetail`, `render-pages.js:renderSpreadHistory`, `render-pages.js:spreadSeries`, `tabs-menu.js:renderSeasonRows` |
| `.page-chart` | 12 | `charts.js:riskMatrixBlock`, `components.js:deficitBlock`, `forms.js:pulseBlock`, `history.js:desireBlock`, `history.js:velocityRecordBlock`, `history.js:volumeBlock`, `indicators.js:drawSplit`, `pages-nav.js:activityStackHtml`, `pages-nav.js:registerHouseholdsValuationPages`, `render-core.js:cardDetailHtml`, `render-pages.js:renderHormones`, `render-pages.js:renderVolatility` |
| `.hi-lede` | 10 | `indicators.js:lede`, `pages-nav.js:gdpHighlights`, `pages-nav.js:householdsHighlights`, `pages-nav.js:insightCirculation`, `pages-nav.js:tempHighlights`, `pages-nav.js:valuationHighlights`, `render-core.js:renderPressureInsights`, `render-pages.js:renderHormones`, `render-pages.js:spreadInsights`, `render-pages.js:volatilityHighlights` |
| `.hcol` | 8 | `charts.js:divergeChart`, `components.js:desireHistoryChart`, `components.js:velocityHistoryChart`, `history.js:cpiHistoryChart`, `history.js:fedFundsHistoryChart`, `history.js:householdsChart`, `history.js:m2GrowthChart`, `history.js:unempHistoryChart` |
| `.highlights` | 7 | `charts.js:highlightsHtml`, `pages-nav.js:insightCirculation`, `pages-nav.js:insightWeather`, `render-core.js:cardDetailHtml`, `render-core.js:renderPressureInsights`, `render-pages.js:renderHormones`, `render-pages.js:spreadInsights` |
| `.hi-head` | 7 | `charts.js:highlightsHtml`, `pages-nav.js:insightCirculation`, `pages-nav.js:insightWeather`, `render-core.js:cardDetailHtml`, `render-core.js:renderPressureInsights`, `render-pages.js:renderHormones`, `render-pages.js:spreadInsights` |
| `.tag` | 6 | `forms.js:pulseBlock`, `live.js:paintReading`, `pages-nav.js:renderSignsList`, `render-core.js:headHtml`, `render-pages.js:renderHormones`, `render-pages.js:renderSubjectRows` |
| `.insights` | 6 | `charts.js:highlightsHtml`, `pages-nav.js:insightCirculation`, `pages-nav.js:insightWeather`, `render-core.js:renderPressureInsights`, `render-pages.js:renderHormones`, `render-pages.js:spreadInsights` |
| `.marker-sub` | 6 | `dial-cycle.js:popHead`, `dial-cycle.js:quarterPopup`, `forms.js:volatilityDetailHtml`, `indicators.js:splitInfo`, `render-core.js:cardDetailHtml`, `render-pages.js:renderValuationTag` |
| `.pulsebox` | 5 | `components.js:deficitBlock`, `forms.js:pulseBlock`, `history.js:desireBlock`, `history.js:velocityRecordBlock`, `history.js:volumeBlock` |
| `.vh-host` | 5 | `components.js:deficitBlock`, `history.js:desireBlock`, `history.js:velocityRecordBlock`, `history.js:volumeBlock`, `pages-nav.js:activityStackHtml` |
| `.unit` | 5 | `analysis.js:cycleRowsHtml`, `pages-nav.js:renderSignsList`, `render-core.js:renderPressureRow`, `render-pages.js:renderHormones`, `render-pages.js:renderSubjectRows` |
| `.mono` | 4 | `charts.js:fitGroup`, `charts.js:histTip`, `forms.js:pulseBlock`, `render-core.js:cardDetailHtml` |
| `.cycsel-nm` | 3 | `charts.js:cyclePicker`, `history.js:headMenuHtml`, `history.js:headPickRow` |
| `.rangebar` | 3 | `charts.js:modeBar`, `charts.js:rangeBar`, `pages-nav.js:buildSearch` |
| `.peek-chart` | 3 | `charts.js:colPeek`, `charts.js:meterPeek`, `forms.js:pulsePeek` |
| `.peek-mark` | 3 | `forms.js:peekCard`, `pages-nav.js:catCard`, `pages-nav.js:convertLeadingSigns` |
| `.legend-row` | 2 | `components.js:deficitBlock`, `dial-cycle.js:renderCycleKicker` |
| `.vh-mean` | 2 | `charts.js:meanRule`, `components.js:velocityHistoryChart` |
| `.cycsel-opt` | 2 | `history.js:headMenuHtml`, `history.js:headPickRow` |
| `.cycsel-tick` | 2 | `charts.js:cyclePicker`, `history.js:headPickRow` |
| `.cycsel-menu` | 2 | `charts.js:cyclePicker`, `history.js:histHead` |
| `.cycsel-yr` | 2 | `charts.js:cyclePicker`, `history.js:headMenuHtml` |
| `.vh-svg` | 2 | `charts.js:vhOpen`, `history.js:householdsChart` |
| `.active` | 2 | `charts.js:modeBar`, `charts.js:rangeBar` |
| `.hist-controls` | 2 | `charts.js:histControls`, `render-core.js:registerFlowPages` |
| `.hi-card` | 2 | `charts.js:hiCard`, `render-core.js:cardDetailHtml` |
| `.spread-history-head` | 2 | `charts.js:riskMatrixBlock`, `forms.js:pulseBlock` |
| `.pt-note` | 2 | `charts.js:riskMatrixBlock`, `forms.js:pulseBlock` |
| `.expand-btn` | 2 | `dial-cycle.js:renderCycleKicker`, `render-core.js:expandBtn` |
| `.subject` | 2 | `pages-nav.js:convertLeadingSigns`, `render-core.js:subjectRow` |
| `.subject-summary` | 2 | `pages-nav.js:convertLeadingSigns`, `render-core.js:subjectRow` |
| `.lag-row` | 2 | `render-pages.js:deriveUninversionDetail`, `tabs-menu.js:renderSeasonRows` |
| `.lag-row-head` | 2 | `render-pages.js:deriveUninversionDetail`, `tabs-menu.js:renderSeasonRows` |
| `.strip-run` | 2 | `dial-cycle.js:marketStripHtml`, `dial-cycle.js:seasonStripHtml` |
| `.strip-dots` | 2 | `dial-cycle.js:marketStripHtml`, `dial-cycle.js:seasonStripHtml` |
| `.strip` | 2 | `dial-cycle.js:marketStripHtml`, `dial-cycle.js:seasonStripHtml` |
| `.subject-value` | 2 | `pages-nav.js:indRow`, `pages-nav.js:renderSignsList` |
| `.cat-list` | 2 | `indicators.js:catList`, `pages-nav.js:buildCategories` |
| `.dx-mark` | 2 | `pages-nav.js:dxHead`, `pages-nav.js:moodDoor` |
