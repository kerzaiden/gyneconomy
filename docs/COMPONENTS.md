# Components

**Generated. Do not hand-edit** — run `npm run map`. `npm run check` fails if this page is stale.

A **component** here is a function and the CSS classes only it writes. Nothing declares itself one; the list
is derived from the source by `tools/components.js`, the same scan that stops a pattern being retyped. So a
name on this page is a name you can use — in a request, a commit, a conversation — and it points at exactly
one function. **Owns** is the classes no other function emits. **Used by** is every top-level function that
calls it, by file.

Generated from commit `ffa2b8f` on 2026-09-29. **72 components**, **61 shared patterns**.

## components.js

| Component | Owns | Used by |
|---|---|---|
| **`deficitChart`** | `.def-col` `.spread-history-band` | `pages-nav.js:renderMetricPages` |
| **`desireHistoryChart`** | `.hy-avg` `.hy-col2` | `render-core.js:renderPressurePage` |
| **`histReadEnsure`** | `.hist-read` `.hr-label` `.hr-plate` `.hr-value` | `components.js:wireHistHover`, `render-pages.js:renderSpreadHistory` |
| **`panelBar`** | `.pbar` | `history.js:panelRow` |
| **`seatBandReading`** | `.reading-box` | `components.js:histReadEnsure` |
| **`velocityHistoryChart`** | `.pv-col` | `render-core.js:renderPressurePage` |

## history.js

| Component | Owns | Used by |
|---|---|---|
| **`cpiHistoryChart`** | `.temp-col` | `pages-nav.js:renderMetricPages` |
| **`fedFundsHistoryChart`** | `.ff-col` | `render-pages.js:renderHormones` |
| **`gdpHistoryChart`** | `.growth-col` | `pages-nav.js:renderMetricPages` |
| **`headMenuHtml`** | `.bh-back` `.bh-grp-row` `.bh-sep` | `history.js:histHead`, `history.js:paintHeadMenus` |
| **`histHead`** | `.band-head` `.bh-mark` `.bh-menu` `.bh-more` `.bh-more-wrap` `.bh-sigma` `.bh-title` | `components.js:deficitBlock`, `dial-cycle.js:peerReaches`, `history.js:desireBlock`, `history.js:velocityRecordBlock`, `history.js:volumeBlock`, `pages-nav.js:renderMetricPages`, `pages-nav.js:renderSignsList`, `render-core.js:renderPressurePage`, `render-pages.js:drawHznHead`, `render-pages.js:renderFearCurve`, `render-pages.js:renderHormones` |
| **`householdsChart`** | `.bill` `.hh-col` `.kept` | `pages-nav.js:renderMetricPages` |
| **`m2GrowthChart`** | `.m2-col` | `render-core.js:renderPressurePage` |
| **`nameWithMark`** | `.pbr-last` | `history.js:panelRow` |
| **`panelRow`** | `.lab-door` `.panel-row` `.pbr-name` | `history.js:(top level)`, `history.js:desireBlock`, `history.js:velocityRecordBlock`, `history.js:volumeBlock`, `pages-nav.js:renderSignsList`, `render-core.js:growthPanelHtml`, `render-core.js:householdsPanelHtml`, `render-pages.js:renderLongCycleTag`, `render-pages.js:renderValuationTag` |
| **`unempHistoryChart`** | `.unemp-col` | `pages-nav.js:renderMetricPages` |

## charts.js

| Component | Owns | Used by |
|---|---|---|
| **`avgRule`** | `.temp-avg` | `charts.js:divergeChart`, `charts.js:reserveChart`, `components.js:deficitChart`, `components.js:velocityHistoryChart`, `history.js:cpiHistoryChart`, `history.js:fedFundsHistoryChart`, `history.js:gdpHistoryChart`, `history.js:m2GrowthChart`, `history.js:unempHistoryChart` |
| **`chartAxes`** | `.bt-axis` `.bt-frame` `.bt-grid` `.bt-yl` | `charts.js:divergeChart`, `charts.js:reserveChart`, `components.js:deficitChart`, `components.js:desireHistoryChart`, `components.js:velocityHistoryChart`, `history.js:cpiHistoryChart`, `history.js:fedFundsHistoryChart`, `history.js:gdpHistoryChart`, `history.js:householdsChart`, `history.js:m2GrowthChart`, `history.js:unempHistoryChart`, `render-core.js:renderPressurePage`, `render-pages.js:renderSpreadHistory` |
| **`colPeek`** | `.heat` `.peek-base` | `components.js:valRow`, `forms.js:peekCard`, `history.js:derivePulseTag`, `render-core.js:renderPressurePage`, `render-pages.js:renderHormones`, `render-pages.js:renderSubjectRows` |
| **`crossLine`** | `.hist-cross` | `charts.js:divergeChart`, `charts.js:reserveChart`, `components.js:deficitChart`, `components.js:desireHistoryChart`, `components.js:velocityHistoryChart`, `history.js:cpiHistoryChart`, `history.js:fedFundsHistoryChart`, `history.js:gdpHistoryChart`, `history.js:householdsChart`, `history.js:m2GrowthChart`, `history.js:unempHistoryChart`, `render-core.js:renderPressurePage` |
| **`cycleAverageBlock`** | `.cyclebox` | `pages-nav.js:renderMetricPages` |
| **`cyclePicker`** | `.cycsel-btn` | `charts.js:histControls` |
| **`cycleStrip`** | `.hi-cycle-bar` `.hi-cycle-name` `.hi-cycles` `.hi-cycles-head` | `charts.js:cycleAverageBlock` |
| **`divergeChart`** | `.dv-bar` `.dv-mid` | `pages-nav.js:renderMetricPages`, `render-pages.js:renderFearCurve` |
| **`fitGroup`** | `.chart-label-plate` `.fit` `.fit-lab` `.fit-line` | `charts.js:divergeChart`, `charts.js:reserveChart`, `components.js:deficitChart`, `components.js:velocityHistoryChart`, `history.js:cpiHistoryChart`, `history.js:fedFundsHistoryChart`, `history.js:gdpHistoryChart`, `history.js:m2GrowthChart`, `history.js:unempHistoryChart`, `render-core.js:renderPressurePage` |
| **`hiCard`** | `.hi-name` | `pages-nav.js:renderMetricPages`, `pages-nav.js:renderPeekAndCategories`, `render-pages.js:renderFearCurve`, `render-pages.js:renderHorizonPage`, `render-pages.js:renderHormones` |
| **`histBar`** | `.hist-bar` | `components.js:deficitBlock`, `history.js:desireBlock`, `history.js:velocityRecordBlock`, `history.js:volumeBlock`, `pages-nav.js:renderMetricPages`, `pages-nav.js:renderSignsList`, `render-pages.js:renderFearCurve`, `render-pages.js:renderHormones` |
| **`histTip`** | `.gdp-tooltip` `.hist-tip` | `components.js:deficitBlock`, `history.js:desireBlock`, `history.js:velocityRecordBlock`, `history.js:volumeBlock`, `pages-nav.js:renderMetricPages`, `pages-nav.js:renderSignsList`, `render-pages.js:renderFearCurve`, `render-pages.js:renderHormones` |
| **`meterPeek`** | `.meterpeek` `.mp-band` `.mp-core` `.mp-here` `.mp-track` | `forms.js:peekCard` |
| **`moreRow`** | `.more-row` | `pages-nav.js:renderMetricPages`, `render-core.js:cardDetailHtml` |
| **`pairChart`** | `.pc-core` `.pc-key-now` `.pc-key-was` `.pc-legend` `.pc-link` `.pc-now` `.pc-pct` `.pc-unit` `.pc-was` `.pc-was-lab` | `pages-nav.js:renderMetricPages` |
| **`reserveChart`** | `.bt-bar` `.bt-ref` `.bt-track` | `pages-nav.js:renderMetricPages` |
| **`riskMatrixBlock`** | `.riskmx` `.rm-axis` `.rm-axis-x` `.rm-axis-y` `.rm-c` `.rm-cells` `.rm-frame` `.rm-grid` `.rm-mark` `.rm-xlabs` `.rm-ylabs` | `pages-nav.js:renderSignsList` |
| **`sparkHtml`** | `.spark` `.spark-end` `.spark-fill` `.spark-line` `.spark-win` | `analysis.js:renderCycleCats`, `render-pages.js:renderSubjectRows` |
| **`trendOf`** | `.tp-arrow` | `components.js:deficitChart`, `components.js:velocityHistoryChart`, `dial-cycle.js:drawTemperature`, `history.js:cpiHistoryChart`, `history.js:fedFundsHistoryChart`, `history.js:gdpHistoryChart`, `history.js:m2GrowthChart`, `history.js:unempHistoryChart`, `pages-nav.js:renderMetricPages`, `render-core.js:renderPressurePage`, `render-pages.js:renderFearCurve`, `render-pages.js:renderHorizonPage`, `render-pages.js:renderHormones` |
| **`trendPill`** | `.can-toggle` `.tp-k` `.trendpill` | `pages-nav.js:renderMetricPages`, `render-core.js:renderPressurePage`, `render-pages.js:renderFearCurve`, `render-pages.js:renderHorizonPage`, `render-pages.js:renderHormones` |
| **`vGrid`** | `.bt-vgrid` | `charts.js:divergeChart`, `charts.js:reserveChart`, `components.js:deficitChart`, `components.js:desireHistoryChart`, `components.js:velocityHistoryChart`, `history.js:cpiHistoryChart`, `history.js:fedFundsHistoryChart`, `history.js:gdpHistoryChart`, `history.js:householdsChart`, `history.js:m2GrowthChart`, `history.js:unempHistoryChart`, `render-pages.js:renderSpreadHistory` |
| **`xLabel`** | `.bt-xl` | `charts.js:divergeChart`, `charts.js:pairChart`, `charts.js:reserveChart`, `components.js:deficitChart`, `components.js:desireHistoryChart`, `components.js:velocityHistoryChart`, `history.js:cpiHistoryChart`, `history.js:fedFundsHistoryChart`, `history.js:gdpHistoryChart`, `history.js:householdsChart`, `history.js:m2GrowthChart`, `history.js:unempHistoryChart`, `render-pages.js:renderSpreadHistory` |
| **`zeroRule`** | `.m2-zero` | `components.js:deficitChart`, `history.js:cpiHistoryChart`, `history.js:fedFundsHistoryChart`, `history.js:gdpHistoryChart`, `history.js:m2GrowthChart`, `history.js:unempHistoryChart` |

## forms.js

| Component | Owns | Used by |
|---|---|---|
| **`peekCard`** | `.peek` `.peek-kicker` `.peek-text` `.peek-unit` `.peek-value` `.peek-word` | `pages-nav.js:renderPeekAndCategories` |
| **`pulseBlock`** | `.past` `.peek-chev` `.pt-head` `.pt-k` `.pt-v` `.pulsetrace` | `pages-nav.js:renderSignsList` |
| **`pulseTraceSvg`** | `.pt-svg` | `forms.js:pulseBlock`, `forms.js:pulsePeek` |

## model.js

| Component | Owns | Used by |
|---|---|---|
| **`arcGauge`** | `.gauge-band` `.gauge-core` `.gauge-here` `.gauge-lab` `.gauge-tick` `.gauge-track` | — |
| **`vitalRingSvg`** | `.vital-ring-fill` `.vital-ring-track` | `forms.js:peekCard`, `live.js:repaintFearCurve`, `render-pages.js:renderSubjectRows` |

## render-core.js

| Component | Owns | Used by |
|---|---|---|
| **`cardDetailHtml`** | `.blood-card` | `pages-nav.js:renderSignsList` |
| **`facts`** | `.facts` | `charts.js:(top level)`, `components.js:deficitBlock`, `dial-cycle.js:wireResize`, `render-core.js:factsFrom` |
| **`headHtml`** | `.body-term` `.card-head` `.card-titles` `.econ-term` `.head-mark` `.head-mark-disc` | `render-core.js:cardDetailHtml` |
| **`meterHtml`** | `.mid` `.rbar-labels` `.rbar-optimal` `.rbar-track` `.three` `.two` | `pages-nav.js:renderSignsList`, `render-core.js:cardDetailHtml` |
| **`renderPressurePage`** | `.row` `.sw` | — |
| **`seatPageFoot`** | `.page-foot` | `pages-nav.js:buildNav` |
| **`srcBlock`** | `.src` | `dial-cycle.js:renderCycleKicker`, `dial-cycle.js:wireResize`, `forms.js:dsrInfoHtml`, `forms.js:savInfoHtml`, `history.js:activityInfoHtml`, `history.js:desireInfoHtml`, `history.js:growthInfoHtml`, `history.js:outputInfoHtml`, `history.js:productivityInfoHtml`, `history.js:temperatureInfoHtml`, `render-core.js:renderPressurePage`, `render-pages.js:deriveUninversionDetail`, `render-pages.js:renderSpreadHistory`, `tabs-menu.js:renderSeasonRows` |
| **`subjectRow`** | `.subject-chev` `.subject-more` `.subject-ring` `.subject-text` | `pages-nav.js:memberRow`, `pages-nav.js:renderPeekAndCategories`, `pages-nav.js:renderSignsList` |
| **`timingMark`** | `.tm-dot` `.tm-line` `.tm-now` `.tm-span` | `pages-nav.js:buildIndicatorSheet`, `render-core.js:timingPill` |
| **`timingPill`** | `.timing` `.timing-row` | `pages-nav.js:renderSignsList` |

## render-pages.js

| Component | Owns | Used by |
|---|---|---|
| **`deriveUninversionDetail`** | `.lag-rows` | — |
| **`renderHorizonPage`** | `.wordy` | — |
| **`renderHormones`** | `.aux-group` `.norm` | — |
| **`renderSubjectRows`** | `.mood-mark` `.subject-dot` | — |

## dial-cycle.js

| Component | Owns | Used by |
|---|---|---|
| **`drawDial`** | `.cap` `.dial-dot` `.dial-mkt` `.dial-moon` `.dial-peak` `.dial-today-badge` `.dial-track` `.disc` `.lbl` `.num` | `dial-cycle.js:renderCycleView` |
| **`hubSet`** | `.details-link` `.who` `.who-chev` | `dial-cycle.js:hubShowDefault`, `dial-cycle.js:hubShowQuarter` |
| **`quarterPopup`** | `.reading-block` `.reading-book` `.reading-watch` | `dial-cycle.js:hubShowDefault`, `dial-cycle.js:hubShowQuarter` |
| **`renderCycleKicker`** | `.bar` `.legend-head` `.legend-rows` `.season-sw` `.ytd` | — |
| **`renderCycleView`** | `.cv-kicker` `.cv-stat` `.cv-stat-l` `.cv-stat-v` | `analysis.js:renderCycleList` |

## pages-nav.js

| Component | Owns | Used by |
|---|---|---|
| **`buildIndicatorSheet`** | `.ind-group` `.ind-group-head` `.ind-sheet` `.ind-tabs` | `pages-nav.js:renderPagesAndNav` |
| **`memberRow`** | `.member-unit` `.subject-say` | — |
| **`renderPeekAndCategories`** | `.browse-list` `.cat-sub` `.ci-unit` `.peek-row` | `pages-nav.js:renderPagesAndNav` |
| **`renderSignsList`** | `.folded-sign` `.sign-detail` `.sign-row` `.subject-verdict` | — |

## analysis.js

| Component | Owns | Used by |
|---|---|---|
| **`renderCycleCats`** | `.cc-grp` `.cc-none` `.ci-word` `.cyc-title` `.flat` | `analysis.js:renderCycleList` |
| **`renderCycleList`** | `.chip` `.era-bands` `.era-econ` `.era-foot` `.era-head` `.era-name` `.era-row` `.era-years` | — |
| **`renderRhymes`** | `.rhy-col` `.rhy-cols` `.rhy-gname` `.rhy-grp` `.rhy-mark` `.rhy-name` `.rhy-say` | — |

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
| **`byId`** | refresh-season.js | 33 places |
| **`put`** | refresh-season.js | 16 places |
| **`colPath`** | charts.js | 12 places |
| **`colWidth`** | charts.js | 12 places |
| **`publishGeom`** | charts.js | 12 places |
| **`factsFrom`** | render-core.js | 10 places |
| **`windowYears`** | components.js | 10 places |
| **`addSources`** | model.js | 9 places |
| **`histFrame`** | charts.js | 9 places |
| **`meterFlagged`** | history.js | 8 places |
| **`panelFromMeter`** | history.js | 8 places |
| **`vhOpen`** | charts.js | 8 places |
| **`windowScale`** | components.js | 8 places |
| **`openCycle`** | charts.js | 7 places |
| **`qLabel`** | model.js | 7 places |
| **`cycleByName`** | charts.js | 6 places |
| **`expandBtn`** | render-core.js | 6 places |
| **`fmtSigned`** | render-pages.js | 6 places |
| **`qAtIndex`** | history.js | 6 places |
| **`timelineSpan`** | components.js | 6 places |
| **`yearOf`** | charts.js | 6 places |
| **`histControls`** | charts.js | 5 places |
| **`LIVE`** | live.js | 5 places |
| **`meanRule`** | charts.js | 5 places |
| **`monthLabel`** | model.js | 5 places |
| **`paintReading`** | live.js | 5 places |
| **`valRow`** | components.js | 5 places |
| **`attachHistory`** | charts.js | 4 places |
| **`cycleSlice`** | charts.js | 4 places |
| **`hyAt`** | components.js | 4 places |
| **`attachHoverTracking`** | model.js | 3 places |
| **`clampPct`** | render-core.js | 3 places |
| **`cycleQtrIdx`** | charts.js | 3 places |
| **`detailSlot`** | render-core.js | 3 places |
| **`drawTemperature`** | dial-cycle.js | 3 places |
| **`dropWhatIsShown`** | charts.js | 3 places |
| **`eraGrowth`** | render-pages.js | 3 places |
| **`fedFundsRange`** | live.js | 3 places |
| **`heatStep`** | dial-cycle.js | 3 places |
| **`histReadFill`** | components.js | 3 places |
| **`mean`** | charts.js | 3 places |
| **`merge`** | live.js | 3 places |
| **`phaseClass`** | render-pages.js | 3 places |
| **`qWindowFrom`** | components.js | 3 places |
| **`refitHistory`** | components.js | 3 places |
| **`seasonGroup`** | model.js | 3 places |

## Shared patterns

Classes written from more than one function — a pattern being retyped. The ledger (`test/components.json`)
records these counts and `npm run check` fails if any of them grows. This list can only shrink.

| Class | Places | Written by |
|---|---|---|
| `.caption` | 19 | `charts.js:horizonInfoHtml`, `charts.js:riskMatrixBlock`, `dial-cycle.js:quarterPopup`, `dial-cycle.js:renderCycleKicker`, `forms.js:dsrInfoHtml`, `forms.js:savInfoHtml`, `history.js:activityInfoHtml`, `history.js:desireInfoHtml`, `history.js:growthInfoHtml`, `history.js:outputInfoHtml`, `history.js:productivityInfoHtml`, `history.js:pulseInfoHtml`, `history.js:temperatureInfoHtml`, `history.js:volumeInfoHtml`, `pages-nav.js:renderSignsList`, `render-core.js:renderPressurePage`, `render-pages.js:deriveUninversionDetail`, `render-pages.js:renderSpreadHistory`, `tabs-menu.js:renderSeasonRows` |
| `.page-chart` | 12 | `charts.js:cycleAverageBlock`, `charts.js:riskMatrixBlock`, `components.js:deficitBlock`, `forms.js:pulseBlock`, `history.js:desireBlock`, `history.js:velocityRecordBlock`, `history.js:volumeBlock`, `pages-nav.js:renderMetricPages`, `pages-nav.js:renderSignsList`, `render-core.js:cardDetailHtml`, `render-pages.js:renderFearCurve`, `render-pages.js:renderHormones` |
| `.tag` | 9 | `dial-cycle.js:renderGrowthPhase`, `forms.js:pulseBlock`, `live.js:paintReading`, `pages-nav.js:memberRow`, `pages-nav.js:renderSignsList`, `render-core.js:headHtml`, `render-pages.js:renderHormones`, `render-pages.js:renderSubjectRows`, `render-pages.js:renderValuationTag` |
| `.hcol` | 9 | `charts.js:divergeChart`, `charts.js:reserveChart`, `components.js:desireHistoryChart`, `components.js:velocityHistoryChart`, `history.js:cpiHistoryChart`, `history.js:fedFundsHistoryChart`, `history.js:householdsChart`, `history.js:m2GrowthChart`, `history.js:unempHistoryChart` |
| `.mono` | 6 | `charts.js:fitGroup`, `charts.js:histTip`, `charts.js:pairChart`, `forms.js:pulseBlock`, `pages-nav.js:renderSignsList`, `render-core.js:cardDetailHtml` |
| `.marker-sub` | 6 | `dial-cycle.js:quarterPopup`, `dial-cycle.js:renderCycleKicker`, `forms.js:curveDetailHtml`, `render-core.js:cardDetailHtml`, `render-pages.js:renderLongCycleTag`, `render-pages.js:renderValuationTag` |
| `.unit` | 6 | `analysis.js:readFig`, `analysis.js:renderCycleList`, `pages-nav.js:renderSignsList`, `render-core.js:renderPressurePage`, `render-pages.js:renderHormones`, `render-pages.js:renderSubjectRows` |
| `.pulsebox` | 5 | `components.js:deficitBlock`, `forms.js:pulseBlock`, `history.js:desireBlock`, `history.js:velocityRecordBlock`, `history.js:volumeBlock` |
| `.vh-host` | 5 | `components.js:deficitBlock`, `history.js:desireBlock`, `history.js:velocityRecordBlock`, `history.js:volumeBlock`, `pages-nav.js:renderSignsList` |
| `.highlights` | 5 | `charts.js:highlightsHtml`, `pages-nav.js:renderPeekAndCategories`, `render-core.js:cardDetailHtml`, `render-pages.js:renderHorizonPage`, `render-pages.js:renderHormones` |
| `.hi-head` | 5 | `charts.js:highlightsHtml`, `pages-nav.js:renderPeekAndCategories`, `render-core.js:cardDetailHtml`, `render-pages.js:renderHorizonPage`, `render-pages.js:renderHormones` |
| `.peek-mark` | 5 | `analysis.js:renderCycleCats`, `forms.js:peekCard`, `pages-nav.js:renderPeekAndCategories`, `pages-nav.js:renderSignsList`, `render-pages.js:renderSubjectRows` |
| `.hi-lede` | 5 | `pages-nav.js:renderMetricPages`, `pages-nav.js:renderPeekAndCategories`, `render-pages.js:renderFearCurve`, `render-pages.js:renderHorizonPage`, `render-pages.js:renderHormones` |
| `.cycsel-nm` | 4 | `charts.js:cyclePicker`, `dial-cycle.js:peerReaches`, `history.js:headMenuHtml`, `history.js:headPickRow` |
| `.rangebar` | 4 | `analysis.js:renderRhymes`, `charts.js:modeBar`, `charts.js:rangeBar`, `pages-nav.js:buildIndicatorSheet` |
| `.insights` | 4 | `charts.js:highlightsHtml`, `pages-nav.js:renderPeekAndCategories`, `render-pages.js:renderHorizonPage`, `render-pages.js:renderHormones` |
| `.subject-icon` | 4 | `pages-nav.js:discOf`, `pages-nav.js:renderSignsList`, `render-core.js:subjectIcon`, `render-pages.js:renderSubjectRows` |
| `.lede` | 3 | `charts.js:(top level)`, `components.js:deficitBlock`, `dial-cycle.js:wireResize` |
| `.cycsel-opt` | 3 | `dial-cycle.js:peerReaches`, `history.js:headMenuHtml`, `history.js:headPickRow` |
| `.cycsel-tick` | 3 | `charts.js:cyclePicker`, `dial-cycle.js:peerReaches`, `history.js:headPickRow` |
| `.dchart` | 3 | `charts.js:divergeChart`, `charts.js:pairChart`, `charts.js:reserveChart` |
| `.peek-chart` | 3 | `charts.js:colPeek`, `charts.js:meterPeek`, `forms.js:pulsePeek` |
| `.spread-history-head` | 3 | `charts.js:riskMatrixBlock`, `forms.js:pulseBlock`, `pages-nav.js:renderSignsList` |
| `.expand-btn` | 3 | `dial-cycle.js:renderCycleKicker`, `render-core.js:expandBtn`, `render-core.js:infoIcon` |
| `.subject-label` | 3 | `pages-nav.js:memberRow`, `pages-nav.js:renderPeekAndCategories`, `pages-nav.js:renderSignsList` |
| `.metric-sheet` | 3 | `pages-nav.js:buildIndicatorSheet`, `pages-nav.js:renderPeekAndCategories`, `pages-nav.js:renderSignsList` |
| `.legend-row` | 2 | `components.js:deficitBlock`, `dial-cycle.js:renderCycleKicker` |
| `.vh-mean` | 2 | `charts.js:meanRule`, `components.js:velocityHistoryChart` |
| `.cycsel-menu` | 2 | `charts.js:cyclePicker`, `history.js:histHead` |
| `.cycsel-yr` | 2 | `charts.js:cyclePicker`, `history.js:headMenuHtml` |
| `.vh-svg` | 2 | `charts.js:vhOpen`, `history.js:householdsChart` |
| `.active` | 2 | `charts.js:modeBar`, `charts.js:rangeBar` |
| `.hist-controls` | 2 | `charts.js:histControls`, `render-core.js:renderPressurePage` |
| `.hi-card` | 2 | `charts.js:hiCard`, `render-core.js:cardDetailHtml` |
| `.chart-unit` | 2 | `charts.js:cycleAverageBlock`, `charts.js:cycleStrip` |
| `.pt-note` | 2 | `charts.js:riskMatrixBlock`, `forms.js:pulseBlock` |
| `.info-btn` | 2 | `dial-cycle.js:renderCycleKicker`, `render-core.js:infoIcon` |
| `.subject` | 2 | `pages-nav.js:renderSignsList`, `render-core.js:subjectRow` |
| `.subject-summary` | 2 | `pages-nav.js:renderSignsList`, `render-core.js:subjectRow` |
| `.metric-row` | 2 | `pages-nav.js:renderSignsList`, `render-core.js:cardDetailHtml` |
| `.metric` | 2 | `pages-nav.js:renderSignsList`, `render-core.js:cardDetailHtml` |
| `.metric-sub` | 2 | `pages-nav.js:renderSignsList`, `render-core.js:cardDetailHtml` |
| `.lag-row` | 2 | `render-pages.js:deriveUninversionDetail`, `tabs-menu.js:renderSeasonRows` |
| `.lag-row-head` | 2 | `render-pages.js:deriveUninversionDetail`, `tabs-menu.js:renderSeasonRows` |
| `.aux-stat` | 2 | `pages-nav.js:renderSignsList`, `render-pages.js:renderHorizonPage` |
| `.dot` | 2 | `dial-cycle.js:drawDial`, `render-pages.js:renderSubjectRows` |
| `.strip-run` | 2 | `dial-cycle.js:marketStripHtml`, `dial-cycle.js:seasonStripHtml` |
| `.strip-dots` | 2 | `dial-cycle.js:marketStripHtml`, `dial-cycle.js:seasonStripHtml` |
| `.strip` | 2 | `dial-cycle.js:marketStripHtml`, `dial-cycle.js:seasonStripHtml` |
| `.panel-stack` | 2 | `pages-nav.js:renderMetricPages`, `pages-nav.js:renderSignsList` |
| `.in-hist` | 2 | `pages-nav.js:renderMetricPages`, `pages-nav.js:renderSignsList` |
| `.subject-value` | 2 | `pages-nav.js:memberRow`, `pages-nav.js:renderSignsList` |
| `.cat-item` | 2 | `analysis.js:renderCycleCats`, `pages-nav.js:renderPeekAndCategories` |
| `.ci-head` | 2 | `analysis.js:renderCycleCats`, `pages-nav.js:renderPeekAndCategories` |
| `.ci-name` | 2 | `analysis.js:renderCycleCats`, `pages-nav.js:renderPeekAndCategories` |
| `.ci-body` | 2 | `analysis.js:renderCycleCats`, `pages-nav.js:renderPeekAndCategories` |
| `.ci-read` | 2 | `analysis.js:renderCycleCats`, `pages-nav.js:renderPeekAndCategories` |
| `.ci-value` | 2 | `analysis.js:renderCycleCats`, `pages-nav.js:renderPeekAndCategories` |
| `.ci-mini` | 2 | `analysis.js:renderCycleCats`, `pages-nav.js:renderPeekAndCategories` |
| `.ci-when` | 2 | `analysis.js:renderCycleCats`, `pages-nav.js:renderPeekAndCategories` |
| `.cat-list` | 2 | `analysis.js:renderCycleCats`, `pages-nav.js:renderPeekAndCategories` |
