# Components

**Generated. Do not hand-edit** — run `npm run map`. `npm run check` fails if this page is stale.

A **component** here is a function and the CSS classes only it writes. Nothing declares itself one; the list
is derived from the source by `tools/components.js`, the same scan that stops a pattern being retyped. So a
name on this page is a name you can use — in a request, a commit, a conversation — and it points at exactly
one function. **Owns** is the classes no other function emits. **Used by** is every top-level function that
calls it, by file.

Generated from commit `d8898b3` on 2026-10-11. **109 components**, **12 shared patterns**.

## ai-insights.ts

| Component | Owns | Used by |
|---|---|---|
| **`cycleCard`** | `.today-cycle` `.today-cycle-hub` `.today-cycle-kicker` `.today-cycle-ret` `.today-cycle-season` `.today-cycle-stage` | `ai-insights.ts:todayHtml` |
| **`elements`** | `.wr-el` | `ai-insights.ts:todayHtml` |
| **`lead`** | `.wr-by` `.wr-head` | `ai-insights.ts:todayHtml` |
| **`prose`** | `.wr-link` | `ai-insights.ts:elements`, `ai-insights.ts:storyCard`, `ai-insights.ts:todayHtml` |
| **`storyCard`** | `.trend-when` | `diagnosis.ts:diagnosisHtml` |

## analysis.ts

| Component | Owns | Used by |
|---|---|---|
| **`cycleRowsHtml`** | `.era-bands` `.era-head` `.era-name` `.era-row` `.era-years` | `analysis.ts:renderCycleList` |

## charts.ts

| Component | Owns | Used by |
|---|---|---|
| **`avgRule`** | `.temp-avg` | `charts.ts:divergeChart`, `history-charts.ts:columnHistory`, `history-charts.ts:deficitChart` |
| **`chartAxes`** | `.bt-axis` `.bt-frame` `.bt-grid` | `charts.ts:divergeChart`, `history-charts.ts:columnHistory`, `history-charts.ts:deficitChart`, `pressure.ts:definePressure`, `pulse-strips.ts:pulseStripsChart`, `render-pages.ts:paintSpreads` |
| **`colPeek`** | `.heat` `.peek-base` `.peek-chart` | `credit.ts:readingOf`, `readings.ts:deriveFeelingReadings`, `readings.ts:derivePulseTag`, `readings.ts:yearReading` |
| **`crossLine`** | `.hist-cross` | `charts.ts:divergeChart`, `history-charts.ts:columnHistory`, `history-charts.ts:deficitChart`, `pressure.ts:definePressure`, `render-pages.ts:paintSpreads` |
| **`divergeChart`** | `.dchart` `.dv-bar` `.dv-mid` `.hcol` | `indicators.ts:splitHistory`, `inner-pages.ts:defineValuation`, `render-pages.ts:defineVolatility` |
| **`fitGroup`** | `.chart-label-plate` `.fit` `.fit-lab` `.fit-line` `.mono` | `charts.ts:divergeChart`, `charts.ts:fitLine`, `history-charts.ts:deficitChart`, `pressure.ts:ylmFitLine` |
| **`histBar`** | `.hist-bar` | `reading.ts:drawReading` |
| **`hitRect`** | `.hero-hit` | `history-charts.ts:columnHistory` |
| **`meanRule`** | `.vh-mean` | `history-charts.ts:columnHistory`, `history-charts.ts:deficitChart` |
| **`trendOf`** | `.tp-arrow` | `charts.ts:fitLine`, `history-charts.ts:deficitChart`, `indicators.ts:splitHistory`, `inner-pages.ts:defineActivity`, `inner-pages.ts:defineDeficit`, `inner-pages.ts:defineGdp`, `inner-pages.ts:defineTemp`, `inner-pages.ts:defineValuation`, `pressure.ts:defineFlow`, `pressure.ts:defineMortgage`, `pressure.ts:definePressure`, `pressure.ts:pulseHistory`, `pressure.ts:ylmFitLine`, `render-pages.ts:defineHormones`, `render-pages.ts:defineSpreads`, `render-pages.ts:defineVolatility` |
| **`trendPill`** | `.can-toggle` `.tp-k` `.trendpill` | `indicators.ts:splitHistory`, `inner-pages.ts:defineActivity`, `inner-pages.ts:defineDeficit`, `inner-pages.ts:defineGdp`, `inner-pages.ts:defineTemp`, `inner-pages.ts:defineValuation`, `pressure.ts:defineFlow`, `pressure.ts:defineMortgage`, `pressure.ts:definePressure`, `pressure.ts:pulseHistory`, `render-pages.ts:defineHormones`, `render-pages.ts:defineSpreads`, `render-pages.ts:defineVolatility` |
| **`vGrid`** | `.bt-vgrid` | `charts.ts:divergeChart`, `charts.ts:yearMarks`, `history-charts.ts:deficitChart`, `pulse-strips.ts:stripPaper` |
| **`vhOpen`** | `.vh-svg` | `history-charts.ts:columnHistory`, `history-charts.ts:deficitChart`, `pulse-strips.ts:pulseStripsChart` |
| **`xLabel`** | `.bt-xl` | `charts.ts:divergeChart`, `charts.ts:yearMarks`, `history-charts.ts:deficitChart`, `pulse-strips.ts:pulseStripsChart` |
| **`zeroRule`** | `.m2-zero` | `charts.ts:divergeChart`, `history-charts.ts:columnHistory`, `history-charts.ts:deficitChart`, `render-pages.ts:paintSpreads` |

## cycle-analysis.ts

| Component | Owns | Used by |
|---|---|---|
| **`calOff`** | `.is-off` | `cycle-analysis.ts:calQuarter`, `cycle-analysis.ts:calYear` |
| **`countTag`** | `.lab-n` | `cycle-analysis.ts:foldSec`, `cycle-analysis.ts:insightSec` |
| **`cycleBars`** | `.len-bars` `.this` | `cycle-analysis.ts:flowPage`, `cycle-analysis.ts:healthPage`, `cycle-analysis.ts:lengthPage`, `cycle-analysis.ts:variationPage` |
| **`drawChart`** | `.home-secs` `.labs` | `cycle-analysis.ts:buildCycleChart`, `cycle-analysis.ts:openWhen`, `cycle-analysis.ts:pickCat`, `cycle-analysis.ts:wireFinder`, `cycle-analysis.ts:wirePicks` |
| **`filterSheet`** | `.ind-filter` `.ind-filter-head` `.ind-reset` `.ind-show` | `cycle-analysis.ts:drawChart` |
| **`finder`** | `.lab-find` | `cycle-analysis.ts:drawChart` |
| **`foldSec`** | `.lab-fold` | `cycle-analysis.ts:labSec`, `cycle-analysis.ts:subSec` |
| **`healthRow`** | `.lab-score-box` | `cycle-analysis.ts:statsHome` |
| **`insightSec`** | `.insight-mark` | `cycle-analysis.ts:insightsHome` |
| **`labBox`** | `.lab-box` | `cycle-analysis.ts:drawChart`, `cycle-analysis.ts:riskCard` |
| **`labCat`** | `.lab-cat` | `cycle-analysis.ts:labSec` |
| **`labItem`** | `.lab-item` `.lab-res` `.lab-to` | `cycle-analysis.ts:foldSec`, `cycle-analysis.ts:riskCard` |
| **`markName`** | `.lab-mark` | `cycle-analysis.ts:riskCard`, `cycle-analysis.ts:subSec` |
| **`noneLine`** | `.search-none` | `cycle-analysis.ts:drawChart`, `cycle-analysis.ts:riskCard` |
| **`periodCal`** | `.period-cal` | `cycle-analysis.ts:filterSheet` |
| **`ring`** | `.lab-ring` | — |
| **`rowTag`** | `.lab-row` | `cycle-analysis.ts:labItem` |
| **`scoreRing`** | `.lab-score-v` | `cycle-analysis.ts:statRow` |
| **`sheetSec`** | `.ind-sec` | `cycle-analysis.ts:filterSheet` |
| **`statBody`** | `.stat-main` `.stat-side` | `cycle-analysis.ts:insightSec`, `cycle-analysis.ts:statRow` |
| **`statsHome`** | `.stat-note` | `cycle-analysis.ts:homeSections` |
| **`stepper`** | `.period-step` | `cycle-analysis.ts:drawChart` |

## diagnosis.ts

| Component | Owns | Used by |
|---|---|---|
| **`yearRow`** | `.dx-year` `.dx-year-lead` `.dx-year-n` `.dx-year-v` | `diagnosis.ts:yearByYear` |

## dial-cycle.ts

| Component | Owns | Used by |
|---|---|---|
| **`drawDial`** | `.dial-today-badge` `.lbl` `.num` | `dial-cycle.ts:renderCycleView` |
| **`hubSet`** | `.hub-chev` `.hub-stage` | `dial-cycle.ts:hubShowDefault`, `dial-cycle.ts:hubShowQuarter` |
| **`renderCycleKicker`** | `.icon-btn` | `dial-cycle.ts:bootDialCycle` |

## dial-ring.ts

| Component | Owns | Used by |
|---|---|---|
| **`dialRing`** | `.cap` `.dial-dot` `.dial-moon` `.dial-peak` `.disc` `.dot` | `dial-cycle.ts:drawDial` |
| **`miniRing`** | `.cycle-dial` `.mini-ring` | `ai-insights.ts:cycleCard` |

## dom.ts

| Component | Owns | Used by |
|---|---|---|
| **`learnMore`** | `.learn-more` | `ai-insights.ts:storyCard`, `fed-phases.ts:footnoteHtml` |
| **`moreButton`** | `.cyc-more` `.dx-more` | `analysis.ts:cycleRowsHtml`, `diagnosis.ts:yearByYear` |
| **`moreDoor`** | `.more-row` | `dom.ts:moreRow` |
| **`trendHead`** | `.trend-head` | `ai-insights.ts:elements`, `dom.ts:trendCard` |
| **`trendSoon`** | `.soon-pill` | `portfolio.ts:homeHtml` |

## fed-phases.ts

| Component | Owns | Used by |
|---|---|---|
| **`footnoteHtml`** | `.fp-note` | `fed-phases.ts:ratesCard` |

## format.ts

| Component | Owns | Used by |
|---|---|---|
| **`facts`** | `.facts` | `cycle-analysis.ts:chartDetail`, `dial-cycle.ts:bootDialCycle`, `format.ts:factsFrom`, `insights.ts:moodInfo`, `portfolio.ts:clockDetail`, `portfolio.ts:weatherDetail`, `readings.ts:bootReadings`, `readings.ts:deficitInfoHtml`, `readings.ts:volatilityDetailHtml`, `tabs-menu.ts:renderCycleModel`, `tabs-menu.ts:renderSeasonRows`, `tabs-menu.ts:seasonModelNote` |
| **`hiCard`** | `.hi-card` `.hi-name` | `indicators.ts:buffettInsight`, `indicators.ts:debtInsight`, `indicators.ts:marketInsight`, `inner-pages.ts:gdpHighlights`, `inner-pages.ts:tempHighlights`, `inner-pages.ts:valuationHighlights`, `insights.ts:insightCirculation`, `insights.ts:insightWeather`, `insights.ts:marketCycleCard`, `insights.ts:moodCard`, `insights.ts:seasonCards`, `pressure.ts:mortgageInsight`, `pressure.ts:pressureInsights`, `reading.ts:recordInsight`, `readings.ts:pulseCard`, `render-pages.ts:hormonesInsight`, `render-pages.ts:spreadInsights`, `render-pages.ts:volatilityHighlights`, `rhythm.ts:rhythmCard` |
| **`highlightsHtml`** | `.hi-head` `.highlights` `.insights` `.peek-chev` | `indicators.ts:buffettInsight`, `indicators.ts:debtInsight`, `indicators.ts:marketInsight`, `inner-pages.ts:gdpHighlights`, `inner-pages.ts:tempHighlights`, `inner-pages.ts:valuationHighlights`, `pressure.ts:mortgageInsight`, `pressure.ts:pressureInsights`, `reading.ts:recordInsight`, `render-pages.ts:hormonesInsight`, `render-pages.ts:spreadInsights`, `render-pages.ts:volatilityHighlights` |
| **`hubLine`** | `.hub-line` | `dial-cycle.ts:hubSet`, `dial-cycle.ts:hubShowYear` |
| **`keySwatch`** | `.key-sw` | `format.ts:legendKey`, `portfolio.ts:drawWeather` |
| **`lede`** | `.hi-lede` | `indicators.ts:buffettInsight`, `indicators.ts:debtInsight`, `indicators.ts:marketInsight`, `inner-pages.ts:gdpHighlights`, `inner-pages.ts:tempHighlights`, `inner-pages.ts:valuationHighlights`, `insights.ts:insightCirculation`, `insights.ts:insightMood`, `insights.ts:insightStress`, `insights.ts:insightWeather`, `pressure.ts:mortgageInsight`, `pressure.ts:pressureInsights`, `reading.ts:recordInsight`, `render-pages.ts:hormonesInsight`, `render-pages.ts:spreadInsights`, `render-pages.ts:volatilityHighlights` |
| **`ledeHtml`** | `.lede` | `dial-cycle.ts:bootDialCycle`, `readings.ts:bootReadings`, `readings.ts:deficitInfoHtml`, `tabs-menu.ts:renderCycleModel`, `tabs-menu.ts:renderSeasonRows`, `tabs-menu.ts:seasonModelNote` |
| **`legendKey`** | `.key-list` | `cycle-analysis.ts:periodCal`, `reading.ts:mountReadings`, `tabs-menu.ts:renderCycleModel` |
| **`readingNote`** | `.marker-sub` | `credit.ts:readingOf`, `indicators.ts:splitInfo`, `pulse-strips.ts:stripsInfo`, `readings.ts:activityInfoHtml`, `readings.ts:confidenceInfoHtml`, `readings.ts:desireInfoHtml`, `readings.ts:growthInfoHtml`, `readings.ts:horizonInfoHtml`, `readings.ts:marketInfoHtml`, `readings.ts:premiumInfoHtml`, `readings.ts:productivityInfoHtml`, `readings.ts:pulseInfoHtml`, `readings.ts:temperatureInfoHtml`, `readings.ts:volatilityDetailHtml`, `readings.ts:volumeInfoHtml`, `rhythm.ts:rhythmInfo` |
| **`srcBlock`** | `.src` | `cycle-analysis.ts:chartDetail`, `cycle-analysis.ts:flowPage`, `cycle-analysis.ts:healthPage`, `cycle-analysis.ts:lengthPage`, `cycle-analysis.ts:variationPage`, `dial-cycle.ts:bootDialCycle`, `format.ts:readingNote`, `indicators.ts:splitInfo`, `insights.ts:moodInfo`, `portfolio.ts:clockDetail`, `portfolio.ts:weatherDetail`, `pressure.ts:mortgageInfo`, `pressure.ts:pressureMaturities`, `readings.ts:volatilityDetailHtml`, `render-pages.ts:deriveUninversionDetail`, `render-pages.ts:hormonesInfo`, `render-pages.ts:spreadSeries`, `tabs-menu.ts:renderCycleModel`, `tabs-menu.ts:renderSeasonRows`, `tabs-menu.ts:seasonModelNote` |

## history-charts.ts

| Component | Owns | Used by |
|---|---|---|
| **`deficitChart`** | `.def-col` `.spread-history-band` | `inner-pages.ts:defineDeficit` |

## history.ts

| Component | Owns | Used by |
|---|---|---|
| **`controlsBox`** | `.hist-controls` | `history.ts:histControls` |
| **`cyclePicker`** | `.cycsel-btn` | `history.ts:histControls` |
| **`headDots`** | `.bh-menu` | `history.ts:histHead` |
| **`headMenuHtml`** | `.bh-sep` | `history.ts:headDots`, `history.ts:paintHeadMenus` |
| **`histHead`** | `.band-head` `.bh-mark` `.bh-more-wrap` `.bh-sigma` `.bh-title` | `reading.ts:historyHtml` |
| **`histLive`** | `.sr-only` | `history.ts:histKeysWire`, `history.ts:wireHistHover` |
| **`histReadEnsure`** | `.hist-read` `.hr-label` `.hr-plate` `.hr-value` | `history.ts:histKeysWire`, `history.ts:wireHistHover` |
| **`menuName`** | `.cycsel-nm` | `history.ts:headMenuHtml`, `history.ts:headPickRow` |
| **`nameAside`** | `.cycsel-yr` | `history.ts:cyclePicker`, `history.ts:headMenuHtml`, `history.ts:pickRow` |

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
| **`say`** | `.method-say` | `portfolio.ts:drawClock`, `portfolio.ts:drawWeather` |

## pulse-strips.ts

| Component | Owns | Used by |
|---|---|---|
| **`stripPaper`** | `.ekg-major` `.ekg-minor` | `pulse-strips.ts:pulseStripsChart` |
| **`stripQuarter`** | `.ps-beat` | `pulse-strips.ts:stripRow` |
| **`stripScroller`** | `.ps-thumb` | `pressure.ts:pulseHistory` |

## reading.ts

| Component | Owns | Used by |
|---|---|---|
| **`chartShell`** | `.chart-shell` | `pressure.ts:definePressure`, `render-pages.ts:defineSpreads` |
| **`historyHtml`** | `.page-chart` | `reading.ts:drawReading` |

## render-core.ts

| Component | Owns | Used by |
|---|---|---|
| **`catHeadCard`** | `.ind-card` `.ind-cat-name` | `cycle-analysis.ts:foldSec`, `cycle-analysis.ts:riskCard` |
| **`dxHead`** | `.dx-sys-head` | `analysis.ts:cycleRowsHtml`, `cycle-analysis.ts:homeSections`, `cycle-analysis.ts:statsHome`, `diagnosis.ts:yearByYear`, `fed-phases.ts:fedEnvironment` |
| **`econChips`** | `.chip` `.era-econ` | `analysis.ts:cycleRowsHtml`, `diagnosis.ts:yearByYear` |
| **`metricSheet`** | `.metric-sheet` | `portfolio.ts:portfolioSheets`, `reading.ts:mountReadings` |
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
| **`renderSeasonRows`** | `.cell` `.cold` `.hot` `.meta` `.range-bar` `.range-cell` | `tabs-menu.ts:bootGuide` |
| **`seasonGrid`** | `.season-grid` `.sg-cell` `.sg-head` | `tabs-menu.ts:seasonModelNote` |
| **`wireMenu`** | `.menu-card` `.menu-label` `.menu-row` `.menu-section` | `tabs-menu.ts:bootTabsMenu` |

## wave-chart.ts

| Component | Owns | Used by |
|---|---|---|
| **`areaPath`** | `.wave-area` | `wave-chart.ts:plotSvg` |
| **`axisHtml`** | `.wave-axis` | `wave-chart.ts:waveChart` |
| **`axisMark`** | `.wave-end` | `wave-chart.ts:axisHtml`, `wave-chart.ts:axisTicks` |
| **`bandsHtml`** | `.wave-band` | `wave-chart.ts:waveChart` |
| **`fillDefs`** | `.wave-fill-low` `.wave-fill-top` | `wave-chart.ts:plotSvg` |
| **`levelTags`** | `.wave-level` | `wave-chart.ts:waveChart` |
| **`rulesHtml`** | `.wave-rule` | `wave-chart.ts:waveChart` |
| **`waveChart`** | `.wave-clip` `.wave-plot` | `fed-phases.ts:ratesCard` |
| **`waveLegend`** | `.wave-legend` | `fed-phases.ts:rateSeries` |

## Vocabulary

Functions that own no class of their own but are called from three or more places — the words every
renderer speaks. Listed most-used first.

| Function | Lives in | Called from |
|---|---|---|
| **`fmtSigned`** | format.ts | 25 places |
| **`need`** | dom.ts | 23 places |
| **`mean`** | format.ts | 18 places |
| **`titleCase`** | format.ts | 15 places |
| **`byId`** | dom.ts | 13 places |
| **`defineReading`** | reading.ts | 12 places |
| **`histControls`** | history.ts | 12 places |
| **`qLabel`** | format.ts | 12 places |
| **`metered`** | format.ts | 11 places |
| **`pageCycle`** | history.ts | 11 places |
| **`f1`** | pulse-strips.ts | 10 places |
| **`addSources`** | dom.ts | 9 places |
| **`findOf`** | cycle-analysis.ts | 9 places |
| **`focusQuiet`** | dom.ts | 9 places |
| **`monthLabel`** | format.ts | 9 places |
| **`pctl`** | format.ts | 9 places |
| **`sideWord`** | format.ts | 8 places |
| **`yearOf`** | format.ts | 8 places |
| **`cycLabel`** | model.ts | 7 places |
| **`cycleSlice`** | model.ts | 7 places |
| **`histFrame`** | charts.ts | 7 places |
| **`normOf`** | cycle-analysis.ts | 7 places |
| **`put`** | dom.ts | 7 places |
| **`qAtIndex`** | format.ts | 7 places |
| **`categoriesShown`** | roster.ts | 6 places |
| **`columnHistory`** | history-charts.ts | 6 places |
| **`dxSys`** | render-core.ts | 6 places |
| **`factsFrom`** | format.ts | 6 places |
| **`fileRow`** | data.ts | 6 places |
| **`isoDay`** | format.ts | 6 places |
| **`listed`** | format.ts | 6 places |
| **`numberWord`** | format.ts | 6 places |
| **`openCycle`** | model.ts | 6 places |
| **`pct`** | wave-chart.ts | 6 places |
| **`publishGeom`** | charts.ts | 6 places |
| **`seasonGroup`** | model.ts | 6 places |
| **`atMonth`** | format.ts | 5 places |
| **`catTitle`** | cycle-analysis.ts | 5 places |
| **`closedCount`** | cycle-analysis.ts | 5 places |
| **`colWidth`** | charts.ts | 5 places |
| **`labRow`** | data.ts | 5 places |
| **`layer`** | dom.ts | 5 places |
| **`monthWindow`** | history.ts | 5 places |
| **`strip`** | render-core.ts | 5 places |
| **`timelineSpan`** | history.ts | 5 places |
| **`visits`** | cycle-analysis.ts | 5 places |
| **`bandEnds`** | format.ts | 4 places |
| **`capFirst`** | format.ts | 4 places |
| **`colPath`** | charts.ts | 4 places |
| **`cpiYear`** | model.ts | 4 places |
| **`cycleByName`** | model.ts | 4 places |
| **`cycleModel`** | model.ts | 4 places |
| **`detailSlot`** | dom.ts | 4 places |
| **`expandBtn`** | dom.ts | 4 places |
| **`fedFundsRange`** | data.ts | 4 places |
| **`growthWord`** | model.ts | 4 places |
| **`inflationFigure`** | model.ts | 4 places |
| **`keyed`** | roster.ts | 4 places |
| **`lineInsight`** | indicators.ts | 4 places |
| **`moreRow`** | dom.ts | 4 places |
| **`nowWhen`** | cycle-analysis.ts | 4 places |
| **`qWindowFrom`** | history.ts | 4 places |
| **`readingPage`** | indicators.ts | 4 places |
| **`recordInsight`** | reading.ts | 4 places |
| **`trendText`** | dom.ts | 4 places |
| **`windowYears`** | charts.ts | 4 places |
| **`yearsWord`** | cycle-analysis.ts | 4 places |
| **`atCycle`** | cycle-analysis.ts | 3 places |
| **`attrNum`** | history.ts | 3 places |
| **`barClass`** | cycle-analysis.ts | 3 places |
| **`byIdMaybe`** | dom.ts | 3 places |
| **`calBtn`** | cycle-analysis.ts | 3 places |
| **`colScale`** | charts.ts | 3 places |
| **`curveAt`** | data.ts | 3 places |
| **`cycleOfYear`** | model.ts | 3 places |
| **`cycleQtrIdx`** | model.ts | 3 places |
| **`cycleView`** | dial-cycle.ts | 3 places |
| **`docValue`** | live.ts | 3 places |
| **`dollars`** | indicators.ts | 3 places |
| **`fmt`** | cycle-analysis.ts | 3 places |
| **`fmtAsOf`** | format.ts | 3 places |
| **`hasWhen`** | cycle-analysis.ts | 3 places |
| **`headMoreBtn`** | history.ts | 3 places |
| **`lagRow`** | inner-pages.ts | 3 places |
| **`lengths`** | cycle-analysis.ts | 3 places |
| **`lenKey`** | cycle-analysis.ts | 3 places |
| **`liveInto`** | live.ts | 3 places |
| **`menuOption`** | history.ts | 3 places |
| **`monthIdx`** | wave-chart.ts | 3 places |
| **`monthIndex`** | model.ts | 3 places |
| **`moodToday`** | model.ts | 3 places |
| **`moodTrack`** | model.ts | 3 places |
| **`mortgageLast`** | pressure.ts | 3 places |
| **`onScreen`** | dom.ts | 3 places |
| **`potentialGap`** | model.ts | 3 places |
| **`qYears`** | format.ts | 3 places |
| **`readingFor`** | reading.ts | 3 places |
| **`readSeason`** | model.ts | 3 places |
| **`renderDiagnosis`** | diagnosis.ts | 3 places |
| **`showCycle`** | dial-cycle.ts | 3 places |
| **`side`** | cycle-analysis.ts | 3 places |
| **`spreadSeries`** | render-pages.ts | 3 places |
| **`stateOf`** | format.ts | 3 places |
| **`tabBar`** | history.ts | 3 places |
| **`tagFor`** | format.ts | 3 places |
| **`todayFace`** | reading.ts | 3 places |
| **`typical`** | cycle-analysis.ts | 3 places |
| **`unempState`** | readings.ts | 3 places |

## Shared patterns

Classes written from more than one function — a pattern being retyped. The ledger (`test/components.json`)
records these counts and `npm run check` fails if any of them grows. This list can only shrink.

| Class | Places | Written by |
|---|---|---|
| `.caption` | 5 | `format.ts:readingNote`, `pressure.ts:pressureMaturities`, `render-pages.ts:deriveUninversionDetail`, `render-pages.ts:spreadDetail`, `render-pages.ts:spreadSeries` |
| `.follow` | 3 | `format.ts:readingNote`, `render-pages.ts:deriveUninversionDetail`, `render-pages.ts:spreadSeries` |
| `.strip-run` | 3 | `portfolio.ts:weatherStrip`, `render-core.ts:marketPills`, `render-core.ts:seasonPills` |
| `.trend-card` | 2 | `ai-insights.ts:cycleCard`, `dom.ts:trendCard` |
| `.on` | 2 | `cycle-analysis.ts:ring`, `insights.ts:moodCycleSvg` |
| `.dx` | 2 | `diagnosis.ts:diagnosisHost`, `portfolio.ts:buildPortfolio` |
| `.dial-track` | 2 | `dial-ring.ts:dialRing`, `dial-ring.ts:miniRing` |
| `.dial-mkt` | 2 | `dial-ring.ts:dialRing`, `dial-ring.ts:miniRing` |
| `.dx-mark` | 2 | `dom.ts:trendHead`, `render-core.ts:dxHead` |
| `.cycsel-menu` | 2 | `history.ts:cyclePicker`, `history.ts:headDots` |
| `.lag-row` | 2 | `render-pages.ts:deriveUninversionDetail`, `tabs-menu.ts:renderSeasonRows` |
| `.lag-row-head` | 2 | `render-pages.ts:deriveUninversionDetail`, `tabs-menu.ts:renderSeasonRows` |
