# Components

**Generated. Do not hand-edit** — run `npm run map`. `npm run check` fails if this page is stale.

A **component** here is a function and the CSS classes only it writes. Nothing declares itself one; the list
is derived from the source by `tools/components.js`, the same scan that stops a pattern being retyped. So a
name on this page is a name you can use — in a request, a commit, a conversation — and it points at exactly
one function. **Owns** is the classes no other function emits. **Used by** is every top-level function that
calls it, by file.

Generated from commit `f08fcce` on 2026-10-09. **103 components**, **18 shared patterns**.

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

## charts.ts

| Component | Owns | Used by |
|---|---|---|
| **`avgRule`** | `.temp-avg` | `charts.ts:divergeChart`, `history-charts.ts:cpiHistoryChart`, `history-charts.ts:deficitChart`, `history-charts.ts:fedFundsHistoryChart`, `history-charts.ts:gdpHistoryChart`, `history-charts.ts:m2GrowthChart`, `history-charts.ts:unempHistoryChart` |
| **`chartAxes`** | `.bt-axis` `.bt-frame` `.bt-grid` | `charts.ts:divergeChart`, `history-charts.ts:cpiHistoryChart`, `history-charts.ts:deficitChart`, `history-charts.ts:fedFundsHistoryChart`, `history-charts.ts:gdpHistoryChart`, `history-charts.ts:m2GrowthChart`, `history-charts.ts:unempHistoryChart`, `pressure.ts:definePressure`, `pulse-strips.ts:pulseStripsChart`, `render-pages.ts:paintSpreads` |
| **`colPeek`** | `.heat` `.peek-base` `.peek-chart` | `ai-insights.ts:tilesPic`, `credit.ts:readingOf`, `readings.ts:deriveFeelingReadings`, `readings.ts:derivePulseTag`, `readings.ts:yearReading` |
| **`crossLine`** | `.hist-cross` | `charts.ts:divergeChart`, `history-charts.ts:cpiHistoryChart`, `history-charts.ts:deficitChart`, `history-charts.ts:fedFundsHistoryChart`, `history-charts.ts:gdpHistoryChart`, `history-charts.ts:m2GrowthChart`, `history-charts.ts:unempHistoryChart`, `pressure.ts:definePressure` |
| **`divergeChart`** | `.dchart` `.dv-bar` `.dv-mid` | `indicators.ts:splitHistory`, `inner-pages.ts:defineValuation`, `render-pages.ts:defineVolatility` |
| **`fitGroup`** | `.chart-label-plate` `.fit` `.fit-lab` `.fit-line` | `charts.ts:divergeChart`, `charts.ts:fitLine`, `history-charts.ts:deficitChart`, `pressure.ts:ylmFitLine` |
| **`histBar`** | `.hist-bar` | `reading.ts:drawReading` |
| **`histTip`** | `.gdp-tooltip` `.hist-tip` | `reading.ts:historyHtml` |
| **`meanRule`** | `.vh-mean` | `history-charts.ts:cpiHistoryChart`, `history-charts.ts:deficitChart`, `history-charts.ts:gdpHistoryChart`, `history-charts.ts:m2GrowthChart`, `history-charts.ts:unempHistoryChart` |
| **`trendOf`** | `.tp-arrow` | `charts.ts:fitLine`, `history-charts.ts:deficitChart`, `indicators.ts:splitHistory`, `inner-pages.ts:defineActivity`, `inner-pages.ts:defineDeficit`, `inner-pages.ts:defineGdp`, `inner-pages.ts:defineTemp`, `inner-pages.ts:defineValuation`, `pressure.ts:defineFlow`, `pressure.ts:definePressure`, `pressure.ts:pulseHistory`, `pressure.ts:ylmFitLine`, `render-pages.ts:defineHormones`, `render-pages.ts:defineSpreads`, `render-pages.ts:defineVolatility` |
| **`trendPill`** | `.can-toggle` `.tp-k` `.trendpill` | `indicators.ts:splitHistory`, `inner-pages.ts:defineActivity`, `inner-pages.ts:defineDeficit`, `inner-pages.ts:defineGdp`, `inner-pages.ts:defineTemp`, `inner-pages.ts:defineValuation`, `pressure.ts:defineFlow`, `pressure.ts:definePressure`, `pressure.ts:pulseHistory`, `render-pages.ts:defineHormones`, `render-pages.ts:defineSpreads`, `render-pages.ts:defineVolatility` |
| **`vGrid`** | `.bt-vgrid` | `charts.ts:divergeChart`, `history-charts.ts:deficitChart`, `history-charts.ts:gdpHistoryChart`, `history-charts.ts:m2GrowthChart`, `history-charts.ts:yearTicks`, `pulse-strips.ts:stripPaper`, `render-pages.ts:paintSpreads` |
| **`vhOpen`** | `.vh-svg` | `history-charts.ts:cpiHistoryChart`, `history-charts.ts:deficitChart`, `history-charts.ts:fedFundsHistoryChart`, `history-charts.ts:gdpHistoryChart`, `history-charts.ts:m2GrowthChart`, `history-charts.ts:unempHistoryChart`, `pulse-strips.ts:pulseStripsChart` |
| **`xLabel`** | `.bt-xl` | `charts.ts:divergeChart`, `history-charts.ts:deficitChart`, `history-charts.ts:gdpHistoryChart`, `history-charts.ts:m2GrowthChart`, `history-charts.ts:yearTicks`, `pulse-strips.ts:pulseStripsChart`, `render-pages.ts:paintSpreads` |
| **`zeroRule`** | `.m2-zero` | `history-charts.ts:cpiHistoryChart`, `history-charts.ts:deficitChart`, `history-charts.ts:fedFundsHistoryChart`, `history-charts.ts:gdpHistoryChart`, `history-charts.ts:m2GrowthChart`, `history-charts.ts:unempHistoryChart` |

## cycle-analysis.ts

| Component | Owns | Used by |
|---|---|---|
| **`calOff`** | `.is-off` | `cycle-analysis.ts:calQuarter`, `cycle-analysis.ts:calYear` |
| **`countTag`** | `.lab-n` | `cycle-analysis.ts:foldSec`, `cycle-analysis.ts:insightSec` |
| **`cycleBars`** | `.len-bars` `.this` | `cycle-analysis.ts:flowPage`, `cycle-analysis.ts:lengthPage`, `cycle-analysis.ts:variationPage` |
| **`drawChart`** | `.home-secs` `.lab-box` `.labs` `.search-none` | `cycle-analysis.ts:buildCycleChart`, `cycle-analysis.ts:openWhen`, `cycle-analysis.ts:pickCat`, `cycle-analysis.ts:wireFinder`, `cycle-analysis.ts:wirePicks` |
| **`filterSheet`** | `.ind-filter` `.ind-filter-head` `.ind-reset` `.ind-show` | `cycle-analysis.ts:drawChart` |
| **`finder`** | `.lab-find` | `cycle-analysis.ts:drawChart` |
| **`foldSec`** | `.lab-fold` | `cycle-analysis.ts:labSec`, `cycle-analysis.ts:subSec` |
| **`healthTile`** | `.lab-score-box` | — |
| **`insightSec`** | `.insight-mark` | `cycle-analysis.ts:insightsHome` |
| **`labItem`** | `.lab-item` `.lab-res` `.lab-to` | `cycle-analysis.ts:foldSec` |
| **`labSec`** | `.lab-cat` | `cycle-analysis.ts:bySystem` |
| **`mark`** | `.len-key` `.odd` `.ok` | `cycle-analysis.ts:healthTile`, `dial-cycle.ts:renderCycleDial` |
| **`markName`** | `.lab-mark` | `cycle-analysis.ts:subSec` |
| **`periodCal`** | `.cal-key` `.period-cal` | `cycle-analysis.ts:filterSheet` |
| **`ring`** | `.lab-ring` | — |
| **`rowTag`** | `.lab-row` | `cycle-analysis.ts:labItem` |
| **`scoreRing`** | `.lab-score-v` | `cycle-analysis.ts:healthTile`, `cycle-analysis.ts:statRow` |
| **`sheetSec`** | `.ind-sec` | `cycle-analysis.ts:filterSheet` |
| **`statBody`** | `.stat-main` `.stat-side` | `cycle-analysis.ts:healthTile`, `cycle-analysis.ts:insightSec`, `cycle-analysis.ts:statRow` |
| **`statsHome`** | `.stat-note` | `cycle-analysis.ts:homeSections` |
| **`stepper`** | `.period-step` | `cycle-analysis.ts:drawChart` |

## diagnosis.ts

| Component | Owns | Used by |
|---|---|---|
| **`yearRow`** | `.dx-year` `.dx-year-lead` `.dx-year-n` `.dx-year-v` | `diagnosis.ts:yearByYear` |
| **`yearsMore`** | `.cyc-more` `.dx-years-more` | `diagnosis.ts:yearByYear` |

## dial-cycle.ts

| Component | Owns | Used by |
|---|---|---|
| **`drawDial`** | `.cap` `.dial-dot` `.dial-mkt` `.dial-moon` `.dial-peak` `.dial-today-badge` `.dial-track` `.disc` `.dot` `.lbl` `.num` | `dial-cycle.ts:renderCycleView` |
| **`hubSet`** | `.hub-chev` `.hub-stage` | `dial-cycle.ts:hubShowDefault`, `dial-cycle.ts:hubShowQuarter` |
| **`renderCycleKicker`** | `.bar` `.info-btn` `.legend-head` `.legend-row` `.legend-rows` `.ytd` | `dial-cycle.ts:bootDialCycle` |

## dom.ts

| Component | Owns | Used by |
|---|---|---|
| **`moreRow`** | `.more-row` | `ai-insights.ts:aiPage`, `cycle-analysis.ts:drawChart`, `inner-pages.ts:gdpHighlights`, `inner-pages.ts:tempHighlights`, `inner-pages.ts:valuationHighlights` |
| **`trendCard`** | `.trend-card` | `dom.ts:trendDoor`, `dom.ts:trendJump`, `dom.ts:trendSoon` |
| **`trendHead`** | `.trend-head` | `dom.ts:trendCard` |
| **`trendSoon`** | `.soon-pill` | `portfolio.ts:homeHtml` |

## fed-phases.ts

| Component | Owns | Used by |
|---|---|---|
| **`bandsHtml`** | `.fp-band` `.fp-ph` | `fed-phases.ts:fedPhasesCard` |
| **`fedPhasesCard`** | `.fp-marks` `.fp-phases` `.fp-plot` `.fp-years` | `fed-phases.ts:fedEnvironment` |
| **`levelsHtml`** | `.fp-levels` | `fed-phases.ts:fedPhasesCard` |
| **`plotSvg`** | `.fp-line` `.fp-ov-line` `.fp-zero` | `fed-phases.ts:fedPhasesCard` |
| **`yearsHtml`** | `.fp-year` | `fed-phases.ts:fedPhasesCard` |

## format.ts

| Component | Owns | Used by |
|---|---|---|
| **`facts`** | `.facts` | `cycle-analysis.ts:chartDetail`, `dial-cycle.ts:bootDialCycle`, `format.ts:factsFrom`, `insights.ts:moodInfo`, `portfolio.ts:clockDetail`, `portfolio.ts:weatherDetail`, `readings.ts:bootReadings`, `readings.ts:deficitInfoHtml`, `readings.ts:volatilityDetailHtml`, `tabs-menu.ts:renderSeasonRows`, `tabs-menu.ts:seasonModelNote` |
| **`hiCard`** | `.hi-card` `.hi-name` | `indicators.ts:buffettInsight`, `indicators.ts:debtInsight`, `indicators.ts:marketInsight`, `inner-pages.ts:gdpHighlights`, `inner-pages.ts:tempHighlights`, `inner-pages.ts:valuationHighlights`, `insights.ts:insightCirculation`, `insights.ts:insightWeather`, `insights.ts:marketCycleCard`, `insights.ts:moodCard`, `insights.ts:seasonCards`, `pressure.ts:pressureInsights`, `reading.ts:recordInsight`, `readings.ts:pulseCard`, `render-pages.ts:hormonesInsight`, `render-pages.ts:spreadInsights`, `render-pages.ts:volatilityHighlights`, `rhythm.ts:rhythmCard` |
| **`highlightsHtml`** | `.hi-head` `.highlights` `.insights` `.peek-chev` | `indicators.ts:buffettInsight`, `indicators.ts:debtInsight`, `indicators.ts:marketInsight`, `inner-pages.ts:gdpHighlights`, `inner-pages.ts:tempHighlights`, `inner-pages.ts:valuationHighlights`, `pressure.ts:pressureInsights`, `reading.ts:recordInsight`, `render-pages.ts:hormonesInsight`, `render-pages.ts:spreadInsights`, `render-pages.ts:volatilityHighlights` |
| **`hubLine`** | `.hub-line` | `dial-cycle.ts:hubSet`, `dial-cycle.ts:hubShowYear` |
| **`lede`** | `.hi-lede` | `indicators.ts:buffettInsight`, `indicators.ts:debtInsight`, `indicators.ts:marketInsight`, `inner-pages.ts:gdpHighlights`, `inner-pages.ts:tempHighlights`, `inner-pages.ts:valuationHighlights`, `insights.ts:insightCirculation`, `insights.ts:insightMood`, `insights.ts:insightStress`, `insights.ts:insightWeather`, `pressure.ts:pressureInsights`, `reading.ts:recordInsight`, `render-pages.ts:hormonesInsight`, `render-pages.ts:spreadInsights`, `render-pages.ts:volatilityHighlights` |
| **`ledeHtml`** | `.lede` | `dial-cycle.ts:bootDialCycle`, `readings.ts:bootReadings`, `readings.ts:deficitInfoHtml`, `tabs-menu.ts:renderSeasonRows`, `tabs-menu.ts:seasonModelNote` |
| **`srcBlock`** | `.src` | `credit.ts:readingOf`, `cycle-analysis.ts:chartDetail`, `cycle-analysis.ts:flowPage`, `cycle-analysis.ts:healthPage`, `cycle-analysis.ts:lengthPage`, `cycle-analysis.ts:variationPage`, `dial-cycle.ts:bootDialCycle`, `dial-cycle.ts:renderCycleKicker`, `indicators.ts:splitInfo`, `insights.ts:moodInfo`, `portfolio.ts:clockDetail`, `portfolio.ts:weatherDetail`, `pressure.ts:pressureMaturities`, `readings.ts:activityInfoHtml`, `readings.ts:confidenceInfoHtml`, `readings.ts:desireInfoHtml`, `readings.ts:growthInfoHtml`, `readings.ts:marketInfoHtml`, `readings.ts:premiumInfoHtml`, `readings.ts:productivityInfoHtml`, `readings.ts:temperatureInfoHtml`, `readings.ts:volatilityDetailHtml`, `render-pages.ts:deriveUninversionDetail`, `render-pages.ts:spreadSeries`, `tabs-menu.ts:renderSeasonRows`, `tabs-menu.ts:seasonModelNote` |

## history-charts.ts

| Component | Owns | Used by |
|---|---|---|
| **`cpiHistoryChart`** | `.temp-col` | `inner-pages.ts:defineTemp` |
| **`deficitChart`** | `.def-col` `.spread-history-band` | `inner-pages.ts:defineDeficit` |
| **`fedFundsHistoryChart`** | `.ff-col` | `render-pages.ts:defineHormones` |
| **`gdpHistoryChart`** | `.growth-col` | `inner-pages.ts:defineGdp` |
| **`m2GrowthChart`** | `.m2-col` | `pressure.ts:defineFlow` |
| **`unempHistoryChart`** | `.unemp-col` | `inner-pages.ts:defineActivity` |

## history.ts

| Component | Owns | Used by |
|---|---|---|
| **`controlsBox`** | `.hist-controls` | `history.ts:histControls` |
| **`cyclePicker`** | `.cycsel-btn` | `history.ts:histControls` |
| **`headDots`** | `.bh-menu` | `history.ts:histHead` |
| **`headMenuHtml`** | `.bh-back` `.bh-grp-row` `.bh-sep` | `history.ts:headDots`, `history.ts:paintHeadMenus` |
| **`histHead`** | `.band-head` `.bh-mark` `.bh-more-wrap` `.bh-sigma` `.bh-title` | `reading.ts:historyHtml` |
| **`histLive`** | `.sr-only` | `history.ts:histKeysWire`, `history.ts:wireHistHover` |
| **`histReadEnsure`** | `.hist-read` `.hr-label` `.hr-plate` `.hr-value` | `history.ts:histKeysWire`, `history.ts:wireHistHover` |

## insights.ts

| Component | Owns | Used by |
|---|---|---|
| **`insightMood`** | `.mood-fig` | — |
| **`moodCallout`** | `.mood-arrow` `.mood-call` | `insights.ts:moodCycleSvg` |
| **`moodCycleSvg`** | `.mood-curve` `.mood-dot` `.mood-line` | `insights.ts:insightMood` |

## portfolio.ts

| Component | Owns | Used by |
|---|---|---|
| **`clockFace`** | `.clock` `.clock-axis` | `portfolio.ts:drawClock` |
| **`methodPage`** | `.cat-mood` `.method-card` | `portfolio.ts:drawClock`, `portfolio.ts:drawWeather` |
| **`say`** | `.method-say` | `ai-insights.ts:echoLine`, `portfolio.ts:drawClock`, `portfolio.ts:drawWeather` |

## pulse-strips.ts

| Component | Owns | Used by |
|---|---|---|
| **`stripPaper`** | `.ekg-major` `.ekg-minor` | `pulse-strips.ts:pulseStripsChart` |
| **`stripQuarter`** | `.ps-beat` | `pulse-strips.ts:stripRow` |
| **`stripScroller`** | `.ps-fade` `.ps-scroll` | `pressure.ts:pulseHistory` |

## reading.ts

| Component | Owns | Used by |
|---|---|---|
| **`chartShell`** | `.chart-shell` | `pressure.ts:definePressure`, `render-pages.ts:defineSpreads` |
| **`historyHtml`** | `.page-chart` | `reading.ts:drawReading` |

## render-core.ts

| Component | Owns | Used by |
|---|---|---|
| **`catHeadCard`** | `.ind-card` `.ind-cat-name` | `cycle-analysis.ts:foldSec` |
| **`dxHead`** | `.dx-sys-head` | `cycle-analysis.ts:homeSections`, `cycle-analysis.ts:statsHome`, `diagnosis.ts:yearByYear`, `fed-phases.ts:fedEnvironment` |
| **`econChips`** | `.era-econ` | `analysis.ts:cycleRowsHtml`, `diagnosis.ts:yearByYear` |
| **`metricSheet`** | `.metric-sheet` | `ai-insights.ts:buildAiPage`, `portfolio.ts:portfolioSheets`, `reading.ts:mountReadings` |
| **`seatPageFoot`** | `.page-foot` | `pages-nav.ts:buildNav` |
| **`stripDots`** | `.strip-dots` | `dial-cycle.ts:marketStripHtml` |
| **`stripTrack`** | `.strip-track` | `dial-cycle.ts:seasonStripHtml` |
| **`timingMark`** | `.tm-dot` `.tm-line` `.tm-now` `.tm-span` | `render-core.ts:timingPill` |
| **`timingPill`** | `.timing` `.timing-row` | `reading.ts:mountReadings` |

## render-pages.ts

| Component | Owns | Used by |
|---|---|---|
| **`deriveUninversionDetail`** | `.lag-rows` | `render-pages.ts:bootRenderPages` |
| **`hormonesInsight`** | `.aux-group` | — |

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
| **`fmtSigned`** | format.ts | 24 places |
| **`need`** | dom.ts | 24 places |
| **`titleCase`** | format.ts | 17 places |
| **`byId`** | dom.ts | 14 places |
| **`pageCycle`** | history.ts | 14 places |
| **`defineReading`** | reading.ts | 11 places |
| **`histControls`** | history.ts | 11 places |
| **`histFrame`** | charts.ts | 11 places |
| **`metered`** | format.ts | 11 places |
| **`publishGeom`** | charts.ts | 10 places |
| **`findOf`** | cycle-analysis.ts | 9 places |
| **`focusQuiet`** | dom.ts | 9 places |
| **`qLabel`** | format.ts | 9 places |
| **`addSources`** | dom.ts | 8 places |
| **`colPath`** | charts.ts | 8 places |
| **`colWidth`** | charts.ts | 8 places |
| **`cycleSlice`** | model.ts | 8 places |
| **`f1`** | pulse-strips.ts | 8 places |
| **`monthLabel`** | format.ts | 8 places |
| **`yearOf`** | format.ts | 8 places |
| **`closedCount`** | cycle-analysis.ts | 7 places |
| **`keyed`** | roster.ts | 7 places |
| **`normOf`** | cycle-analysis.ts | 7 places |
| **`put`** | dom.ts | 7 places |
| **`qAtIndex`** | format.ts | 7 places |
| **`cycLabel`** | model.ts | 6 places |
| **`fileRow`** | data.ts | 6 places |
| **`fitLine`** | charts.ts | 6 places |
| **`mean`** | format.ts | 6 places |
| **`pct`** | fed-phases.ts | 6 places |
| **`seasonGroup`** | model.ts | 6 places |
| **`strip`** | render-core.ts | 6 places |
| **`windowYears`** | charts.ts | 6 places |
| **`catTitle`** | cycle-analysis.ts | 5 places |
| **`colScale`** | history-charts.ts | 5 places |
| **`cycleModel`** | model.ts | 5 places |
| **`detailSlot`** | dom.ts | 5 places |
| **`factsFrom`** | format.ts | 5 places |
| **`growthWord`** | model.ts | 5 places |
| **`inflationFigure`** | model.ts | 5 places |
| **`isoDay`** | format.ts | 5 places |
| **`labRow`** | data.ts | 5 places |
| **`layer`** | dom.ts | 5 places |
| **`meanOf`** | cycle-analysis.ts | 5 places |
| **`openCycle`** | model.ts | 5 places |
| **`pctl`** | format.ts | 5 places |
| **`qWindowFrom`** | history.ts | 5 places |
| **`timelineSpan`** | history.ts | 5 places |
| **`visits`** | cycle-analysis.ts | 5 places |
| **`windowScale`** | history.ts | 5 places |
| **`yearsWord`** | cycle-analysis.ts | 5 places |
| **`atMonth`** | format.ts | 4 places |
| **`bandEnds`** | format.ts | 4 places |
| **`cpiYear`** | model.ts | 4 places |
| **`cycleByName`** | model.ts | 4 places |
| **`cycleOfYear`** | model.ts | 4 places |
| **`dollars`** | indicators.ts | 4 places |
| **`dxSys`** | render-core.ts | 4 places |
| **`fedFundsRange`** | data.ts | 4 places |
| **`fill`** | ai-insights.ts | 4 places |
| **`fmt`** | cycle-analysis.ts | 4 places |
| **`labOf`** | ai-insights.ts | 4 places |
| **`lineInsight`** | indicators.ts | 4 places |
| **`listWords`** | cycle-analysis.ts | 4 places |
| **`moodTrack`** | model.ts | 4 places |
| **`nowWhen`** | cycle-analysis.ts | 4 places |
| **`panel`** | ai-insights.ts | 4 places |
| **`qPretty`** | format.ts | 4 places |
| **`readingPage`** | indicators.ts | 4 places |
| **`recordInsight`** | reading.ts | 4 places |
| **`attrNum`** | history.ts | 3 places |
| **`barClass`** | cycle-analysis.ts | 3 places |
| **`byIdMaybe`** | dom.ts | 3 places |
| **`calBtn`** | cycle-analysis.ts | 3 places |
| **`cap`** | cycle-analysis.ts | 3 places |
| **`categoriesShown`** | roster.ts | 3 places |
| **`curveAt`** | data.ts | 3 places |
| **`cycleQtrIdx`** | model.ts | 3 places |
| **`cycleView`** | dial-cycle.ts | 3 places |
| **`docValue`** | live.ts | 3 places |
| **`expandBtn`** | dom.ts | 3 places |
| **`fmtAsOf`** | format.ts | 3 places |
| **`hasWhen`** | cycle-analysis.ts | 3 places |
| **`headMoreBtn`** | history.ts | 3 places |
| **`lagRow`** | inner-pages.ts | 3 places |
| **`lengths`** | cycle-analysis.ts | 3 places |
| **`liveInto`** | live.ts | 3 places |
| **`monthIdx`** | fed-phases.ts | 3 places |
| **`moodToday`** | model.ts | 3 places |
| **`mWindowFrom`** | history.ts | 3 places |
| **`onScreen`** | dom.ts | 3 places |
| **`potentialGap`** | model.ts | 3 places |
| **`quartile`** | format.ts | 3 places |
| **`rankToDate`** | model.ts | 3 places |
| **`readingFor`** | reading.ts | 3 places |
| **`readSeason`** | model.ts | 3 places |
| **`renderDiagnosis`** | diagnosis.ts | 3 places |
| **`scoreTile`** | cycle-analysis.ts | 3 places |
| **`seasonPills`** | render-core.ts | 3 places |
| **`seasonRuns`** | render-core.ts | 3 places |
| **`seasonRunsLabel`** | render-core.ts | 3 places |
| **`seasonTitle`** | model.ts | 3 places |
| **`setTopbar`** | render-pages.ts | 3 places |
| **`showCycle`** | dial-cycle.ts | 3 places |
| **`side`** | cycle-analysis.ts | 3 places |
| **`spreadSeries`** | render-pages.ts | 3 places |
| **`stateOf`** | format.ts | 3 places |
| **`tabBar`** | history.ts | 3 places |
| **`tagFor`** | format.ts | 3 places |
| **`todayFace`** | reading.ts | 3 places |
| **`trendText`** | dom.ts | 3 places |
| **`typical`** | cycle-analysis.ts | 3 places |
| **`unempState`** | readings.ts | 3 places |
| **`viewMore`** | dom.ts | 3 places |
| **`word`** | cycle-analysis.ts | 3 places |
| **`yearTicks`** | history-charts.ts | 3 places |

## Shared patterns

Classes written from more than one function — a pattern being retyped. The ledger (`test/components.json`)
records these counts and `npm run check` fails if any of them grows. This list can only shrink.

| Class | Places | Written by |
|---|---|---|
| `.caption` | 20 | `credit.ts:readingOf`, `dial-cycle.ts:renderCycleKicker`, `pressure.ts:pressureMaturities`, `pulse-strips.ts:stripsInfo`, `readings.ts:activityInfoHtml`, `readings.ts:confidenceInfoHtml`, `readings.ts:desireInfoHtml`, `readings.ts:growthInfoHtml`, `readings.ts:horizonInfoHtml`, `readings.ts:marketInfoHtml`, `readings.ts:premiumInfoHtml`, `readings.ts:productivityInfoHtml`, `readings.ts:pulseInfoHtml`, `readings.ts:temperatureInfoHtml`, `readings.ts:volumeInfoHtml`, `readings.ts:yearLead`, `render-pages.ts:deriveUninversionDetail`, `render-pages.ts:spreadDetail`, `render-pages.ts:spreadSeries`, `rhythm.ts:rhythmInfo` |
| `.follow` | 16 | `credit.ts:readingOf`, `pulse-strips.ts:stripsInfo`, `readings.ts:activityInfoHtml`, `readings.ts:confidenceInfoHtml`, `readings.ts:desireInfoHtml`, `readings.ts:growthInfoHtml`, `readings.ts:horizonInfoHtml`, `readings.ts:marketInfoHtml`, `readings.ts:premiumInfoHtml`, `readings.ts:productivityInfoHtml`, `readings.ts:pulseInfoHtml`, `readings.ts:temperatureInfoHtml`, `readings.ts:volumeInfoHtml`, `render-pages.ts:deriveUninversionDetail`, `render-pages.ts:spreadSeries`, `rhythm.ts:rhythmInfo` |
| `.hcol` | 5 | `charts.ts:divergeChart`, `history-charts.ts:cpiHistoryChart`, `history-charts.ts:fedFundsHistoryChart`, `history-charts.ts:m2GrowthChart`, `history-charts.ts:unempHistoryChart` |
| `.cycsel-nm` | 3 | `history.ts:headMenuHtml`, `history.ts:headPickRow`, `history.ts:nameAside` |
| `.marker-sub` | 3 | `indicators.ts:splitInfo`, `inner-pages.ts:valuationInfo`, `readings.ts:volatilityDetailHtml` |
| `.strip-run` | 3 | `portfolio.ts:weatherStrip`, `render-core.ts:marketPills`, `render-core.ts:seasonPills` |
| `.mono` | 2 | `charts.ts:fitGroup`, `charts.ts:histTip` |
| `.on` | 2 | `cycle-analysis.ts:ring`, `insights.ts:moodCycleSvg` |
| `.dx` | 2 | `diagnosis.ts:diagnosisHost`, `portfolio.ts:buildPortfolio` |
| `.season-sw` | 2 | `dial-cycle.ts:renderCycleKicker`, `portfolio.ts:drawWeather` |
| `.expand-btn` | 2 | `dial-cycle.ts:renderCycleKicker`, `dom.ts:expandBtn` |
| `.dx-mark` | 2 | `dom.ts:trendHead`, `render-core.ts:dxHead` |
| `.cycsel-opt` | 2 | `history.ts:headMenuHtml`, `history.ts:headPickRow` |
| `.cycsel-tick` | 2 | `history.ts:headPickRow`, `history.ts:pickRow` |
| `.cycsel-menu` | 2 | `history.ts:cyclePicker`, `history.ts:headDots` |
| `.cycsel-yr` | 2 | `history.ts:headMenuHtml`, `history.ts:nameAside` |
| `.lag-row` | 2 | `render-pages.ts:deriveUninversionDetail`, `tabs-menu.ts:renderSeasonRows` |
| `.lag-row-head` | 2 | `render-pages.ts:deriveUninversionDetail`, `tabs-menu.ts:renderSeasonRows` |
