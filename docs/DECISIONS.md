# Keren's decisions

Every design and editorial decision in Gyneconomy is Keren's. Until v648-treasury-quarters they were recorded in the code
comments beside what they govern, together with the history of how each part reached its shape. At Keren's
request the history then left the comments, and this register kept the decisions.

Part 1 is every comment in the source at v648-treasury-quarters that names Keren, copied word for word by
`tools/decisions.js`, with the file and line where it stood. It is an archive: a later decision can supersede
an earlier one; the latest on a subject is the one in force. The full annotated source is
still in git:

```sh
git show v648-treasury-quarters:src/js/07-forms.js
```

Part 2 is for decisions made after v648-treasury-quarters. Add each one there, with the version and her
words. Since V650 the source has no comments, so this register is the only place a decision is written down.

## Part 1 · the register at v648-treasury-quarters

527 comments, by version, then by file and line.

### V131

`js/11-dial-cycle.js` line 698, in or after `hits`

~~~text
(the pink trend line drawn here from Version 131 to 160 is gone — Keren, Sep 19, 2026: the end
read-out's "trend rising/falling" and the chip's tag already say it; the fit itself, r.growthSlopeQ, is unchanged)
~~~

### V142

`js/09-render-core.js` line 4, in or after `clampPct`

~~~text
Progressive disclosure: every card/row shows only its short, load-bearing sentence by default; the fuller
explanation (sourcing detail, caveats, the body↔economy metaphor) sits behind a small (i) button next to it.
Since Version 142 (Keren: "make the info icons open in the new popup format as well") these open in the same
sheet/modal as the expand buttons below, not a floating popover: infoIcon() just files the text in detailTexts,
wrapping plain text in a heading (the icon's label) and a paragraph so it reads like the other sheets.
~~~

### V144

`js/08-model.js` line 382, in or after `svgEl`

~~~text
Wires a transparent hit-rect to mouse/touch hover: onIndex(i) fires with the nearest data index as the
pointer moves, onHide() fires on mouseleave. The hit-rect's bounding rect is cached per hover session
(refreshed on mouseenter/touchstart) rather than re-measured on every mousemove, since getBoundingClientRect
forces a layout read and mousemove can fire dozens of times a second.
Mouse: the reading follows the pointer and goes when it leaves. Touch (Version 144 — Keren: on the phone a tap
opened the reading and nothing closed it): a tap shows the reading, a drag scrubs along the chart, tapping the
same bar again, tapping anywhere else on the page, or scrolling closes it. The synthetic mouse events a tap
fires afterwards are ignored so they can't re-open it.
~~~

### V156

`js/11-dial-cycle.js` line 678, in or after `hits`

~~~text
the line (Version 156), on the Temperature chart's monthly axis (Keren, Sep 19, 2026: "align with inflation"): GDP is
published by quarter, so each quarter's figure sits on its middle month and the line runs smoothly between them —
green through the quarters the season model calls expansion, red through the ones it calls contraction (Version 219;
green above zero and red below it from Version 156 to 218 — but that is the level of growth, not its direction, so it
contradicted the word on the panel). The colour steps at the midpoint between the last quarter of one regime and the
first of the next. A wash to the zero line fading toward it, a hollow dot on each quarter (every other when the cycle
is long enough to crowd them).
~~~

### V157

`styles.css` line 871, before `.chart-area{ opacity:0.2; }`

~~~text
a hairline since Version 157 (Keren: "delicate and feminine")
~~~

### V161

`js/11-dial-cycle.js` line 603, in or after `hide`

~~~text
---- the growth chart, on the temperature chart's x-axis (Keren, Sep 19, 2026: the years must align) ----
A line through the cycle's quarters (real GDP, year over year, each on its middle month), the cycle's average as a
dashed line; the growth trend is read out in words at the end (its pink line left in Version 161).
~~~

### V162

`styles.css` line 769, before `.cv-stats{ display:flex; gap:26px; flex-wrap:wrap; margin:8p…`

~~~text
the big number over a chart (Version 162, Keren's reference): the value large in the mono face, a small uppercase
label beneath it with the trend word in the tag's colour
~~~

### V165

`js/11-dial-cycle.js` line 238, in or after `quarterPopup`

~~~text
every quarter reads as prose (Version 165 for the present, 167 for any quarter the badge is parked on — Keren:
"the data already exists in the app"): the cycle's note for the present, then the season explained the way the
Content tab does — in the economy, in the body, what usually comes next — with none of the figures, which the
cards carry (the data popup of Versions 116–166 is gone)
~~~

### V176

`js/11-dial-cycle.js` line 182, in or after `paint`

~~~text
---- the legend popup (Keren, Sep 19, 2026): the ring's temperature scale (Version 176; the six seasons' colours
before), the market band's colors, one line on the badge. Built once — nothing in it changes per cycle — and opened by
the legend button in the card's corner.
~~~

### V177

`js/11-dial-cycle.js` line 57, in or after `arcPath`

~~~text
One round-ended shape per season (Version 177, Keren: "divide the outer wheel by season, not by year"; the two Springs
and the two Autumns each one season since Version 180): consecutive quarters in one season form a run, inset at both
ends by the stroke's cap and the gap the market band uses, so a hair of track shows where the season changed. Inside a
run the quarters are butt-joined (a hair of overlap hides the anti-aliased seam) in the season's colour, and a short
round-capped stub under the first and last quarter rounds the run's ends. A one-quarter season on a long cycle has
no room for two caps, so a short run keeps a 0.6° core and lets its caps reach toward the neighbours instead.
~~~

### V180

`js/08-model.js` line 200, in or after `seasonWhyFor`

~~~text
The moon for a season: Winter is the new moon, Summer the full, and the four between are phases between —
waxing through the two Springs (crescent, gibbous), waning through the two Autumns (gibbous, crescent) (Keren's reference: the 4s4w
cycle wheel, a ring of moons). f is the lunar phase, 0 new → 0.5 full → 1 new; the lit face is the lit-side
half-disc plus a terminator ellipse whose width follows cos(2πf). Used by the dial and the legend.
Phases as seen from the northern hemisphere (timeanddate's chart, Keren's reference, Sep 19, 2026): new = dark, waxing
lit on the RIGHT, waning lit on the LEFT. Keren's assignment (the same day): Winter the new moon, Spring–Deflation the
waxing crescent, Spring–Reflation the waxing gibbous, Summer the full moon, Autumn–Disinflation the waning gibbous,
Autumn–Stagflation the waning crescent — symmetric about the full moon. The crescents sit at 0.16 / 0.84 rather than
the textbook 0.125 / 0.875 so the lit sliver is about half a radius wide instead of a third — at moon size on the
ring the thinner one read as a new moon.
The dial's outer ring is the four seasons (Version 180, Keren: both Springs as one season, both Autumns as one): seasonGroup
folds the six model keys to the four. Their colours (Version 187, Keren) are the temperature's own: --cold periwinkle below
the range (Winter deep, Spring a tint), orange above it (Summer deep, Autumn a yellow-orange tint) — see the :root tokens.
(176–179 coloured by temperature reading; 180 a weather ramp; 182–186 rose/plum for expansion, periwinkle for contraction.)
~~~

### V181

`js/11-dial-cycle.js` line 213, in or after `renderCycleKicker`

~~~text
The big word is the season, the small rose line under it the theme (Version 181, Keren: "switch them"; the other way round
before). The element ids kept their names.
~~~

### V182

`styles.css` line 447, before `.season-sw{ display:inline-block; width:20px; height:6px; bo…`

~~~text
the legend's swatches, the Season Model table's range bars and the ring's strokes all read the same --season, so a token
change in :root recolours all three at once (Keren, Version 182: "one change fixes the entire app")
~~~

### V193

`js/13-tabs-menu.js` line 8, in or after `renderSeasonRows`

~~~text
The seasons table — Keren's six-cell rule, the same one computeSeason() runs; today's row is marked.
in colour order (Version 193, Keren): the blues first — Winter, then the two Springs — then the oranges — Summer, then the two Autumns
~~~

### V195

`styles.css` line 635, before `.cycle-dial .dial-peak{ pointer-events:auto; }`

~~~text
the peak year's mark (Version 195, back to the Version 158 design Keren preferred): a pale disc in the band's own colour,
a hair wider than the band, ringed in white, with a white dot — Clue's ovulation mark (185–194 tried dots inside the band)
~~~

### V199

`js/11-dial-cycle.js` line 54, in or after `arcPath`

~~~text
one entry per moon, in ring order — what the hub reads out and what the badge scrubs across
(the coral drop that sat in the seam, Clue's day-1 mark, left in Version 199 — Keren, with the DSM's dial: "a lot going on")
~~~

### V200

`js/11-dial-cycle.js` line 10, in or after `arcPath`

~~~text
the seasons ring's radius
The ring closes on itself but for a small seam at 12 o'clock (Version 200, Keren: "close the cycle — a small gap between
the start and the end"; 48° of open track before). GAP is the visible gap between the track's two rounded ends; the
years run from ORIGIN — set so the first run's rounded cap starts exactly at the seam's edge — round to the other edge.
Version 202: START is where the first season shape's rounded cap begins; the grey track starts LEAD° before it (its own
cap peeking out ahead of the shape) and runs round to SEAM_END, GAP° short of START — about five pixels on a phone — so
an open cycle's grey closes on its coloured start. (12° seam in 200, 8° in 201, both with the track ending at the seam.)
~~~

### V207

`styles.css` line 2882, before `@media (max-width:640px){`

~~~text
on phones the lab tables stack (Version 207, Keren: "make the title, then below it the marker, like the Season Model"):
each row is a small grid — marker name with its flag on the right, the sub-line under the name, the reference range full
width beneath — instead of a 560px table scrolled sideways; the header row goes, the stacked rows say what each part is
~~~

### V208

`styles.css` line 2444, before `.subject-body .hero-top h3, .subject-body .longcycle-head{ d…`

~~~text
the summary already names the subject — don't repeat the title inside; keep the hero badge, but the lab tables' own
head row goes entirely (Version 208, Keren: "4 markers flagged is redundant" — the summary row and the flags say it)
~~~

### V210

`js/11-dial-cycle.js` line 833, in or after `renderGrowthPhase`

~~~text
---------------- The economy the Growth chart draws (Version 210, moved into the head menu in V613) -------
Keren: "I see we built a country picker. Put it in the growth page under the three dots in history."
It was a dropdown of its own in the Growth card's head — a trigger, a panel, eight rules of stylesheet and
two document listeners — which is a second control doing what the ⋯ menu was built to do. V522 settled
where a WHICH-SERIES choice belongs ("you can put it in the three dots on the history container"), and V602
made that menu a component, so this is now four lines of groups rather than a component of its own. The
picker, its panel, its caret and its CSS are gone; nothing was rebuilt, and the behaviour it had — one
economy at a time, the United States by default — is unchanged.
The group is BUILT FRESH on every paint, so it reads the live choice and the live cycle without being told
when either moved; and it returns nothing at all for a cycle no peer's series reaches, which is the same
rule the old picker enforced by hiding itself.
~~~

### V213

`styles.css` line 772, before `we designed the this-cycle total growth in the GDP chart — m…`

~~~text
the cycle's own figures, fenced off from the chart's latest reading (Version 213, Keren: "use borders or something to
organise the view and understand what is the current data and what is the overall cycle data")
~~~

### V214

`js/11-dial-cycle.js` line 711, in or after `hits`

~~~text
the end: the reading alone on the end line, and the badge on it (Version 214, Keren: the quarter is on the axis, the
series and the trend are already said above and in the hover — "only leave the +2.1%")
~~~

### V215

`js/07-forms.js` line 197, in or after `energyFromReserve`

~~~text
The GDP growth mark: SproutMark from the Gyneconomy DSM (Version 215) — built there on Keren's ask and imported path
for path, so the design system stays the source of the drawing: src/components/gyneconomy/SproutMark.tsx in
https://lovable.dev/projects/342f83b9-eb2b-4ba2-96e9-7627a1f9cdc1. A seedling out of the soil, outline only, the
stroke in currentColor so it takes the ink of whatever it sits in. Change it there first, then here.
~~~

`js/10-render-pages.js` line 716, in or after `worst`

~~~text
GDP growth — the US headline plus whichever other countries are on by default in the chart below (so
this preview never name-drops a country the chart itself isn't showing).
the cycle's own figure (Version 215, Keren: "we are looking at things from a cycle point of view"): the row carries
the total growth over the cycle's closed years and its direction — the latest quarter reads at the chart's end line
~~~

### V216

`js/10-render-pages.js` line 721, in or after `worst`

~~~text
green in expansion, red in contraction (Keren, Version 216): the mark and the tag beside it now say the same thing,
so the colour is explained rather than alarming — which is what made it read wrong in 215, when the tag was missing
~~~

### V221

`js/08-model.js` line 27, in or after `slopeOf`

~~~text
How far back the season's growth direction is fitted (Version 221, Keren's choice of six after seeing what each window
does to the seasons; eight from Version 106). The series is already year over year, so six points is a year and a half
of an already-annualised trend: long enough that a season stays a phase — five quarters at the median since 1988, six
spells under a year in all that time — and short enough to turn roughly when the line turns, about nine months after a
true turn rather than a year. Four quarters would track the line closer still, but the economy would change season 34
times in 37 years, 14 of those spells under a year.
~~~

### V227

`js/09-render-core.js` line 67, in or after `householdsPanelHtml`

~~~text
Every (i) reads the same way (Version 227, Keren: "bullet points, only the central information, one clean swoop"):
a lede line, then facts, one per line. facts() takes them written; factsFrom() splits a written note into its own
sentences, for the marker notes, whose figures and dates are better left in their own words than paraphrased.
~~~

### V228

`js/06-charts.js` line 63, at the top of the part

~~~text
the MANUSCRIPT's word, left as the book has it. The app called this Effort from Version 228 and calls it Industrial output from Version 357 \u2014 this row is the book's table, not the app's, so it is not renamed with the sign. Ask Keren before touching it.
~~~

`js/07-forms.js` line 179, in or after `diamondSvg`

~~~text
Energy: one word off five bins of the ISM Manufacturing PMI already tracked under Coincident signs.
`level` (1–5) drives the battery icon's fill.
Energy is what is left of her reserve (Version 228, Keren): the stress composite inverted — under chronic stress the
body keeps the system on alert and spends what it had, and what remains is the energy to answer the next shock. The
three markers behind it are structural, so this word moves slowly, by design: Feeling and Pulse carry the fast reads.
The bands are the stress score's own, mirrored, so the word and the panel can never disagree: stress 70+ is Critical,
so a reserve of 30 or less is Exhausted; 50+ Serious is Tired; 30+ Elevated is Steady; below that she has her energy.
V583: `bars` went with the battery. It was a 0–5 charge for the icon, and the ring the icon became reads
the reserve itself, so the field had no consumer left. The WORD still bins — the number is continuous and
the verdict beside it is not — which is the part Version 229 was actually right about.
~~~

### V229

`js/03-data.js` line 260, in or after `stressScoreFor`

~~~text
Economic power is that composite read from the other end (Version 229, Keren: "instead of financial stress, let's call
it economic power, because we are talking on a nation level"): what is left in the battery once the three structural
pressures have taken their share. One number, two ways of saying it — powerScore is what the page shows, stressScore
stays the maths underneath so nothing silently changes meaning. The word and its state come from energyFromReserve(),
whose bands are the stress bands mirrored, so the panel and the word can never disagree.
~~~

`js/03-data.js` line 291, in or after `powerOf`

~~~text
Same "lab result" bar as the 12 individual meters below, read as charge (Version 229, Keren: "the meter of exhausted
to energetic would give us the whole range of depletion and energetics"): the bar runs empty to full, the green zone
is the charged end (70 and up, roughly where the composite has historically sat outside a downturn), and a
dot short of it reads as flagged, exactly like every other meter on the page. `ends` renames the bar's two end words,
which are "Low" and "Optimal" everywhere else.
~~~

`js/07-forms.js` line 364, in or after `umbrellaSvg`

~~~text
Economic power's mark (Version 229, Keren: "the battery icon is a really good metaphor for economic power — low power
is a depleted energy, high power is fully charged"). level 0–5 → how much of the body is filled, five equal steps;
the level comes from energyFromReserve() below, so the charge and the word can never disagree.
~~~

### V231

`js/10-render-pages.js` line 761, in or after `worst`

~~~text
Sentiment — the Fear & Greed score and where it puts her on the ring (Version 231)
The row shows a miniature of the gauge its page opens, which is the rule every other preview follows since
Version 260 — and it replaces a face that was drawing an emotion rather than a reading (Keren, Sep 20, 2026:
"you can drop the faces and line chart in the preview"). Version 277.
~~~

### V232

`js/10-render-pages.js` line 782, in or after `worst`

~~~text
no context line (Version 232, Keren: "I already have the data below the cycle") — it only re-listed the table
the sentence taken off the row goes where it was always meant to be read — on the page, in full (Keren,
Version 277: "either put it in the inner page or if it already exists drop it"; it did not exist there)
~~~

### V236

`js/06-charts.js` line 169, in or after `valuationVerdict`

~~~text
The five conventional bands (Version 236, Keren: "drop the emotions, just use conventions — fear and greed; we don't
want to overcomplicate things, they are already so complicated"). These are the bands every fear-and-greed reading is
published with, CNN's included, so the word needs no explaining. Both extremes are critical because the gauge is read
contrarian — it is the ends that carry information, one as risk and one as opportunity — and the quiet middle is the
healthy place. The weather icon is for the Feeling tile; the word beside it carries the meaning.
(History: Versions 231–235 named the reading off the cycle of market emotions — fourteen words, and the market's own
direction choosing between the two that share each level. Dropped here as more vocabulary than the panel can carry.)
One sparkline builder for the whole app (Version 252). Takes plain numbers, normalises to its own min/max — a
sparkline shows SHAPE, not level, so a fixed scale would flatten most of them — and marks the latest point. It draws
nothing at all for fewer than three points: two points is a slope, not a trend, and would mislead.
~~~

### V240

`js/05-history.js` line 1152, in or after `derivePulseTag`

~~~text
Version 240 put the Fed funds rate on this card (Keren: "put Rates in the appropriate container"), and
Version 375 takes it off again at her request — a considered decision reopened, not an oversight.
Four of this card's six rows were policy-calendar facts, which answer "what is the Fed doing?", not
"how hot are prices?". They now live on Pressure, whose short end IS the policy rate. What stays here
is what a temperature reading answers: the historical range, and core CPI.
The prose keeps the Fed, because the RELATIONSHIP is real and is this page's point — the lever is
pulled after her temperature, not ahead of it. It is the filed FACTS that were in the wrong drawer.
~~~

### V247

`styles.css` line 1073, before `last point marked — with its window named beside it so the s…`

~~~text
the sentence on the face of the row (Version 247, Keren: "more info, like in Desire, Effort and Pulse") — the figure
alone informs nobody, and the app already had this line written for every marker, hidden behind the chevron
~~~

`js/07-forms.js` line 209, in or after `sproutSvg`

~~~text
The coincident and lagging marks (Version 247), in the app's icon language — 24 grid, outline, currentColor, round
caps, solid only where a hollow shape would vanish at 25px. Drawn here rather than in the design system because Keren
asked to try placeholders first; if they hold up they are the set, and the Lovable brief can be dropped.
~~~

### V251

`styles.css` line 774, before `.cv-stats.cycle-stats{ display:block; border:1px solid var(-…`

~~~text
The cycle's one big number in a box of its own (Version 251 for Growth; Keren, Sep 20, 2026: "I really like how
we designed the this-cycle total growth in the GDP chart — maybe we can apply it to temperature as well"), so it
is a component now rather than one card's exception. Version 275.
~~~

`styles.css` line 2933, before `.subject-summary .tag{ background:transparent; padding:3px 0…`

~~~text
On a subject's face the mark already carries the state, so the word beside the figure drops its ground and simply
wears the state's ink (Version 251, Keren: "I want the look and feel to be like a health app"). Severity is said
once, not twice. The filled pill survives everywhere else — inside a drawer a flag should still look like a flag.
~~~

### V253

`styles.css` line 1137, before `.peek-row{ display:grid; grid-template-columns:1fr 1fr; gap:…`

~~~text
The peek pair (Version 253, Keren: "Temperature and Growth side by side below the cycle, both having previews").
Two half-width cards — the first row on this page that is not full-bleed — each a kicker, a figure, its state word
in that state's ink (the Version 251 rule) and a peek of its line. The whole card is the button to its drawer.
~~~

### V254

`styles.css` line 426, before `.season-card{`

~~~text
The hero (Version 254, Keren: "give the main cycle a white container"): the card is back, so the dial, Temperature
and Growth read as one group. It leads by size, not by being the only unboxed thing — the padding is tighter than a
normal card's and the wheel reaches past it, so the dial keeps nearly all the width it gained in 253.
~~~

`js/12-pages-nav.js` line 152, in or after `signSubject`

~~~text
A sign with a peek card has no row in the list: the card IS its row (Version 254 for Temperature, and
Version 291 for Effort and Pulse, which Keren asked to sit side by side "like temperature GDP growth").
Temperature is the one that also gives up its page wrapper, because its detail goes under a chart that
already exists; the other two keep their own pages exactly as they were.
~~~

### V255

`js/03-data.js` line 300, in or after `powerOf`

~~~text
Economic power, year by year (Version 255; recomputed on four markers in Version 392). The SAME stressScoreFor()
maths as today's reading, applied to each year's actual markers — so a point on this line means exactly what the
number on the row means. That identity is the reason this series could not simply keep its old values when
Institutional trust was dropped: the chart would have gone on measuring five things while the figure above it
measured four, and the line would have quietly stopped being the same reading.

Rebuilt from the primary annual series rather than adjusted: FRED FYPUGDA188S (debt held by the public ÷ GDP),
FYOIGDA188S (net interest ÷ GDP), FYFSGDA188S (surplus/deficit ÷ GDP, sign flipped) and BLS nonfarm output per
hour (OPHNFB, annual average against the prior year). The method was validated before it was trusted: run on the
five-marker inputs it reproduces the app's own stored 2007 and 2020 figures exactly, so the only thing that
changed here is the marker count.

1980, 1982 and 1992 now EXIST. They were absent because Gallup did not poll in those years and the composite
could not be formed; with trust gone the four fiscal and productivity series are complete and so is the line.

Version 393 opens the window to 1948, which is the series' true limit rather than a choice (Keren, asked
whether to take it back: "yes"). 1979 was never a judgement about what was worth showing — it was where
Gallup's poll began, and it outlived the marker that needed it by one version. The binding constraint now is
productivity: BLS output per hour starts in 1947 Q1, so the first year that HAS a year behind it is 1948.
Debt runs from FY1939, interest from FY1940 and the deficit from FY1929, so three of the four could go
further still; the composite cannot, and a composite of three markers where the chart says four would be the
exact fault Version 392 was fixing.

This is an EXTENSION, not a recomputation: the 1979-onward values are identical, value for value, to the ones
Version 392 shipped — checked by comparing the two strings, not by eye. Only the earlier years are new.
What they add is the post-war deleveraging, and it changes the headline: the strongest reading on record is
no longer 2002 but 1966 at 72%, and today's 30% is now the weakest in seventy-eight years rather than
forty-eight. The 50Y stop appears on its own — the timeline offers a window only when the series is that
deep (Version 366), so nothing had to be told about it.
REFRESH: append one year when the CBO/OMB actuals for it are out.
V643: recomputed on GROSS debt (GFDGDPA188S) with the same stressScoreFor maths, after the method was proved by
reproducing all 78 shipped values exactly from FYPUGDA188S. checkGrossDebt recomputes it on every load and
warns if a single year differs, so the chart cannot drift from the row it explains.
~~~

### V257

`styles.css` line 832, before `the one reading a growth chart is not allowed to let recede.…`

~~~text
The yellow-to-orange ramp (Version 257, Keren: "different shades of yellow to orange — we have that in our DSM,
and it fits temperature really well"). Every step is mixed from --season-autumn and --season-summer, the two warm
seasons on the dial, so the chart and the ring are drawn out of one palette. The steps climb in darkness as well
as in hue, so the ramp survives being read without colour. s0 is below the range and keeps the app's periwinkle.
~~~

### V258

`js/06-charts.js` line 1058, in or after `maxIn`

~~~text
The segmented gauge (Version 258). Twenty segments of five points each: countable, and the empty ones carry the
meaning — they are the charge that has already gone.
The gauge and the column peek are one drawing language, so one rule spaces them both: a slot per mark, the mark
0.62 of the slot, capped at 7 — colPeek's rule, moved up here (Keren, Sep 20, 2026: "the spacing in the economic
power preview … needs to be identical to temperature, growth, and valuations because it's the same language").
The number of bars then follows from the spacing rather than the other way round: in a peek, twelve slots across
the same 152-wide frame the columns use, so a charge and a column land on the same x at the same width, at every
screen width (Version 266).
~~~

### V259

`page-body.html` line 553, before `<div class="tab-panel" data-tab="portfolio" hidden>`

~~~text
============ TAB: PORTFOLIO — nothing here yet, and it says so (Version 259, Keren: "just put an empty space
and write Coming soon"). No placeholder figures: a fake number in a financial app is not a neutral placeholder.
~~~

### V260

`styles.css` line 839, before `orange-yellow for contraction or blue-green for expansion").…`

~~~text
The phase, in the dial's own seasons rather than in the severity palette (Version 260, Keren: "blue for
contraction, yellow for expansion"). Expansion is Autumn's gold, contraction Winter's periwinkle — one hue for
each phase, and the two degrees of contraction are two steps of the same blue rather than two different alarms.
~~~

`styles.css` line 2928, before `.hi-name.phase-up{ color:var(--phase-up-ink); } .hi-name.pha…`

~~~text
Temperature's word wears the ramp step its own reading sits on, not a severity (Keren, Sep 20, 2026: "the
hot-heating text on the temperature preview should be the same colour as the graph — yellow, gold, like the
expansion in GDP growth"). It is the correction Version 260 made to the GDP card, one card over: a card's word
and its picture are one reading, so they cannot be in two palettes. Version 284.
~~~

### V266

`styles.css` line 1903, before `.page-chart{ background:var(--surface); border:1px solid var…`

~~~text
One white box per inner page, holding the range along its top, the chart, and the trend along its bottom (Keren,
Sep 20, 2026, from Apple Health: "a white container containing the years by cycle and the expanded chart and the
trend at the bottom"). Everything else on the page — Highlights, the detail drawer — sits on the page itself, so
the box is where the reading is and the rest is commentary (Version 266).
~~~

### V267

`styles.css` line 392, before `.strip-run{ height:12px; border-radius:var(--radius); backgr…`

~~~text
A run is never narrower than it is tall (Keren, Sep 20, 2026: "the seasons are sometimes squeezed — I would rather
have them like a round dot rather than a squeezed ellipse"). The floor used to be 6px against a 12px height, which
turned every short season into a vertical ellipse — a shape that appears nowhere else in the app and reads as a
rendering fault rather than a short season. At the floor a run is exactly the dot the ring draws (Version 267).
~~~

`styles.css` line 397, before `the run keeps a box, the DOT is painted inside it, centred. …`

~~~text
A one-quarter season stays a dot, as on the ring — but it KEEPS its quarter of track and paints the dot
inside it, centred. Fixing the run itself at 12px (Version 267) took one quarter out of the flex total, so a
cycle with a one-quarter season laid its seasons out on a different basis from its market years and the two
strips ended on different pixels: the AI and COVID rows Keren saw (Version 552).
~~~

`js/11-dial-cycle.js` line 975, in or after `marketStripHtml`

~~~text
A run is a capsule or a dot, and never the shape in between (Keren, Sep 20, 2026, on the COVID-19 cycle: "there is
an ellipse in the blue colour — I want it aligned, or if it's too short, make it a dot"). V267 stopped runs being
squeezed narrower than they are tall, which left a second awkward shape: a run 15px long against a 12px height,
too short to read as a stretch of time and too long to read as a moment. The rule is now stated in one number —
**a run must be at least half as long again as it is tall, or it becomes the dot the ring draws** — and the length
it gives up goes back to the runs that can use it, so the capsules that remain read more clearly than before.
It has to be measured rather than computed, because a run's length depends on the strip's width and on how many
of its neighbours have already settled; the pass takes the narrowest offender each time round and stops when
none is left. A strip with no width has not been shown yet, and settles when its tab opens.

A one-quarter season goes through the pass too (Version 553). Version 552 gave it its quarter of track so the
two strips could end together, and excluded it here because it already draws a dot — but on a twelve-year cycle
at phone width a quarter is seven pixels, and the dot inside it was clamped to seven wide against twelve tall:
the squeezed shape Keren has now rejected twice ("in the big tech cycle … Q4 2018 is squeezed. I want it to be
round"). Below the floor it settles to the same 12px dot as any other short run.
~~~

### V269

`styles.css` line 1010, before `.timing-row{ display:flex; align-items:center; gap:10px; fle…`

~~~text
Where a sign sits in the cycle (Version 269). The glyph is the reading and not decoration: one line for the
cycle, a tick for now, and the dot placed BEFORE it, ON it, or AFTER it — so the three classes are one picture
with one thing moved, which is how the rest of the app draws a distinction. A structural sign has no moment to
sit at, so it spans the line instead. Neutral ink throughout: this is a category, not a severity, and the
severity palette is spoken for (the V260 rule). It sits under the figure, ahead of the chart — read on the way
past, not competing with the number (Keren, Sep 20, 2026: "prominent, but not too prominent").
~~~

`styles.css` line 1058, before `.metric-sheet[hidden]{ display:none; }`

~~~text
A hidden sheet must actually be gone. `.metric-sheet{display:flex}` out-weighs the browser's own rule for the
hidden attribute, so every closed page had been sitting in the column as a zero-height flex item, each one
collecting the parent's 10px gap — which is why the rows below them sat 20px apart while the rows above them sat
10px apart. This is what Keren saw as the spacing not aligning (Version 269).
~~~

`js/12-pages-nav.js` line 67, in or after `foldedBlock`

~~~text
A sign is a ROW that opens a PAGE (Version 269, Keren: "I want the other indicators to have an inner page as
well — of course, aligning to our inner pages format"). It used to be a drawer that expanded where it stood.
The row keeps the face it always had; the body it used to unfold is the page it now opens.
~~~

### V270

`js/09-render-core.js` line 309, in or after `headHtml`

~~~text
Full detail for a card indicator — the reference-range bar, the long-form caption, the aux stat and its
sources — all the things the minimal card below leaves out.
Version 270, all of it Keren's (Sep 20, 2026), and all of it the same instinct: a page should carry the things
only it can say. `lead` is the note cut to what prose is FOR here — the metaphor, which is the book — with every
figure that was buried in it lifted out into `facts`, where it can be found at a glance ("either you put it in
bullet points or make it minimal as much as possible, because nobody will read so much text"). An indicator
without a `lead` still reads its old caption, so the two can be converted one at a time. The source list is
gone from every page: the app has a Sources screen listing every figure's primary source by section, and
repeating four links under each page was furniture ("we can put this in sources, we don't need it for every
page"). `opts` lets a page drop the parts it has already said for itself.
~~~

### V271

`js/09-render-core.js` line 236, in or after `timingMark`

~~~text
Version 271, Keren: "I don't need the text beside it — but what I would want is to click on it and see all the
metrics by indicator type." The sentence was explaining the glyph once per page, forever, to a reader who had
long since learnt it. It moves to the one place it is actually wanted — the page the chip now opens, which is
where a reader who does NOT know the word goes to find out — and the chip becomes a door instead of a caption.
The section headings deleted in Version 269 come back here, as pages you can reach rather than titles you must
scroll past: the same grouping, asked for rather than imposed.
~~~

### V272

`styles.css` line 198, before `.topbar-title{`

~~~text
The top bar names the page in the voice the rest of the app uses for names (Keren, Sep 20, 2026: "the title of
the page should be in feminine letters — I think it's Cormorant"). It was the one name on screen still set in
Public Sans, which is why a page read as though it had two titles: a label above and a name below. Now the bar
carries the name and the page can open straight into the reading (Version 272). The Sources-style sheets keep
their sans title — .sources-title overrides this.
~~~

### V274

`styles.css` line 1832, before `.fit-line{ stroke:var(--accent); stroke-width:2.4; stroke-li…`

~~~text
The trend is one idea in two places: a line drawn across the chart, and a row naming it underneath. They wear
the same purple so the eye joins them without a label on the line (Keren, Sep 20, 2026, with the Apple Health
reference: "just put a trend line, a purple trend line … light purple would be a good fit for us in terms of
background colour"). Purple is already the brand's hue for the computed and the actionable, so this adds no
colour to the system. Version 274.
~~~

`js/06-charts.js` line 369, in or after `trendOf`

~~~text
the fit itself travels with the sentence, so the chart can DRAW the line the pill describes rather than the
two being computed separately and quietly disagreeing (Version 274, Keren: "when you say 24× across 57 years,
just put a trend line, a purple trend line")
~~~

`js/12-pages-nav.js` line 1081, in or after `capeFmt1`

~~~text
Valuations has no gauge, so its figure sat alone above a chart whose own end label already states it — the
duplication Keren reported. The page opens on the chart; the verdict moved to the trend row (Version 274).
~~~

### V275

`styles.css` line 193, before `border-bottom:1px solid var(--border);`

~~~text
The bar is translucent and blurred, so with no edge it dissolved into whatever scrolled under it and the page
seemed to start nowhere (Keren, Sep 20, 2026: "I need a borderline on the bottom edge so I can see a
separation between the top bar and the page"). One hairline, the app's own border token. Version 275.
~~~

`styles.css` line 208, before `background — it should be only purple stroke"). The bar carr…`

~~~text
No ring around a top-bar button (Keren, Sep 20, 2026: "all buttons in the top bar should not have a round
border around it"). The bar now has an edge of its own (Version 275), so the buttons no longer needed outlines
to separate themselves from the page — the filled disc is enough, which is what the reference does too.
Version 277.
~~~

`styles.css` line 212, before `.menu-btn{`

~~~text
Nothing behind a top-bar button but the bar (Keren, Sep 20, 2026: "the top menu buttons shouldn't have a
background — it should be only purple stroke"). The bar carries its own edge since Version 275 and the buttons
sit at its two ends, so neither a ring nor a disc was doing any work: the mark alone is the control. The
44×44 hit area stays whatever the paint does. Version 278.
~~~

### V276

`js/06-charts.js` line 576, in or after `xLabelOf`

~~~text
The fitted line, drawn where the chart is but shown only while the trend is asked for (Version 276, from Apple
Health, which Keren sent: the trend is a BUTTON, and pressing it steps the readings back and puts the trend
forward). Drawing the line always meant it had to survive a field of full-strength bars, which is the ambiguity
this replaces. Its two ends carry the fit's own values, so the line needs no legend: it says where the series
started and where the fit has it now.
Version 401: the fit takes the pixel x of its first and last reading rather than working them out from a
slot layout only two charts have. The five histories that are about to get a trend place their readings with
an X(i) of their own, and a shared piece that can only serve one layout is not shared.
~~~

`js/12b-analysis.js` line 37, in or after `renderCycleList`

~~~text
What the cycle did to output and to prices, side by side (Keren, Sep 20, 2026, on seeing the pair:
"this is so interesting — put it in the analysis tab per cycle"). Two totals computed the same way
over the same closed years, so the comparison is real: the Big Tech decade ran dead even, and the
Dot-Com Cycle is the only one of the five where output beat prices (Version 276; renamed in Version
413, so those two are 2008–2017 and 1990–1999, the same years as before).
one line, not three: what the cycle was, then what it did. They wrap together at phone width
rather than each taking a row of its own.
~~~

### V277

`js/08-model.js` line 217, in or after `seasonGroup`

~~~text
THE FEAR & GREED GAUGE (Version 277, Keren: "put the conventional infographics in our design system language").
The published gauge is a half-dial with a needle and five filled wedges. The convention worth keeping is the
SHAPE — a reader knows what a half-dial of fear and greed means without being told — and everything else is
redrawn in the dial's own grammar: a track carrying the whole of what is possible, the healthy band marked
inside it, direct labels and few, and a disc for "here" with a --surface fill and a coloured core. No needle,
no wedges, no gradient. The band is the same 45–55 the linear meter used, so the two cannot disagree.
~~~

`js/10-render-pages.js` line 788, in or after `worst`

~~~text
CNN publishes its own look-back with the index — a month ago, a week ago, today. Three real points, no more,
and the builder refuses to draw fewer (Version 252).
no sparkline and no sentence on this row: three points is not a line worth drawing, and the sentence it
carried is the panel's own impression, which the page states in full a tap away (Keren, Version 277)
~~~

### V280

`js/09-render-core.js` line 214, in or after `srcHtml`

~~~text
A READING ON A RING (Version 280, Keren: "I want the VIX and the high-yield spread to have a ring
representation … the ring on the left and the text adjacent to it on the right, and you can drop the current
bars"). It is the half-dial of Version 277 closed into a circle, and for the same reason: these two scales are
heavily skewed — the VIX's record high is five times its usual home, the spread's eight times — so a ring
FILLED from zero would sit at 8% and 2% and say nothing. The reading is carried by the disc's POSITION on the
track, with the usual band marked behind it, which is skew-proof and is already this app's grammar.
Where a sign sits relative to the turn of the cycle. Kept beside the signs rather than in a section heading,
because it is a property of the sign and travels with it onto its page (Version 269).
~~~

### V282

`styles.css` line 2283, before `sentence about prices rising or falling." Every other line u…`

~~~text
One rule between two things, never two (Keren, Sep 20, 2026: "I keep seeing in the pages that there is a double
line — clear it up … I think it repeats in many inner pages"). The cause was `:last-of-type`, which matches the
last sibling of the same TAG, not of the same class: with .hi-cycles a <div> too, no .hi-card was ever the last
of its type, so the final card kept its bottom border and .hi-cycles drew a second one 16px below it. Version
282 — and the lesson generalises: `:last-of-type` is almost never what a class-based rule means.
~~~

`styles.css` line 2863, before `.metric-sheet .longcycle{ padding:0; border:0; background:tr…`

~~~text
On an inner page the section IS the page, so it stops being a box: a dashed container drawn around cards that
already have their own edges is a container inside a container, and it costs a gutter on every side for nothing
(Keren, Sep 20, 2026). It keeps its box where it still sits inside a longer page. Version 282.
~~~

`page-body.html` line 418, before `<section class="longcycle" aria-labelledby="psych-title">`

~~~text
The heading and the tag went in Version 282 (Keren: "the containers are inside a container — drop the outer
container with the subtitle Sentiment, because it repeats itself and it takes up room; and the Fear label
should just be inside the Fear & Greed component"). The top bar already names the page and the gauge already
says Fear under its own number, so both were a third and fourth statement of the same two facts. The
paragraph went with them, on Keren's reading of it.
~~~

### V283

`styles.css` line 1864, before `.trendpill{ display:flex; align-items:center; justify-conten…`

~~~text
Fully round, because that is what a pressable pill looks like in this app and in the reference (Keren, Sep 20,
2026: "the trend button doesn't look like a trend — it needs to have round corners"). Now that the row is one
line it can take the full radius without the curve crowding a second line of text, and the horizontal padding
grows with the radius so the words keep clear of it. Version 283.
~~~

### V285

`styles.css` line 225, before `faults, and the fade caused both. A pushed screen slides at …`

~~~text
The menu arrives rather than appears (Keren, Sep 20, 2026: "make the slide menu slide and not just appear —
so it has an easing flow"), and it comes in from the RIGHT ("the menu should slide from right to left, not top
down", Version 285). One direction for every screen that stacks, which is the convention a reader already has
from every phone they own: going deeper pushes in from the right, coming back slides out the same way. The
curve is a decelerating ease-out — fast off the mark, settling at the end — which is what makes it read as a
thing moving rather than a value changing.
~~~

### V286

`styles.css` line 231, before `.more-menu{ position:fixed; inset:0; z-index:70; background:…`

~~~text
Version 286, from Keren: "when I close it, it closes really, really fast." Measuring the close found two
faults, and the fade caused both. A pushed screen slides at FULL opacity — fading is what a modal over content
does, not what a stack push does — and fading over 0.2s against a 0.34s slide meant the menu was invisible at
160ms while still 338 of 390px from home, so it read as vanishing rather than leaving. Worse, the shorter
property finished first and its `transitionend` closed the menu at 200ms, cutting the slide off mid-travel.
No fade at all now, and the two directions get their own curves: arriving DECELERATES into place over 0.34s,
leaving ACCELERATES away over 0.26s. An exit shorter than its entrance is the convention, and the asymmetry is
what makes leaving feel decisive rather than hurried.
~~~

### V287

`js/06-charts.js` line 525, in or after `cycleAverageBlock`

~~~text
A ROW, not an icon (Version 287, Keren: "set the eye icon next to each title … and make it More details under
Highlights … compact everything, just leave the most important information, one or two lines outside, and then
the rest is more details"). An (i) beside a title asks to be read before the thing it annotates; the same note
at the END of the page is offered to a reader who has finished and wants more. So a page now carries its short
form in the open and its long form one tap away, and the icon stops competing with the name.
What the page already shows does not go in the modal (Keren, Version 288: "check that when you add the More
details, it's not already there"). A page's visible line is usually the opening of its own long form, so the
long form starts after it: split into sentences, drop the leading ones the page is already showing, keep the
rest. Sentences are compared with their whitespace collapsed, so a line break in the source does not hide a
match. If nothing is shared — the usual case, where the short line was written separately — nothing is removed.
~~~

### V288

`styles.css` line 2421, before `.metric-sheet .temp-card > .cv-head > .cv-kicker{ display:no…`

~~~text
A card borrowed onto its own page does not repeat the page's name (Keren, Sep 20, 2026: "I don't need the
temperature title at the main container — delete it and remove the spacing at the top"). The title stays where
the card is borrowed BACK into a cycle view, which is the one place it is not already on screen. The air it was
holding goes with it, so the chart starts at the top of its box. Version 288.
~~~

### V289

`js/06-charts.js` line 390, in or after `trendOf`

~~~text
The left of the row is "Trend" by default, or the page's own verdict where it has one — which is where Keren
asked the tag to live, and it reads as a sentence: "Highly overvalued — rising, 24× across 57 years" (V274).
A row where there is nothing to show, a BUTTON where there is (Version 276). Apple's trend row is pressable and
that is the whole point: the chart does not have to carry the trend all the time, so the line never has to
compete with the bars, and neither has to be compromised for the other.
An arrow beside the word, so the direction is legible before the word is read (Keren, Version 289). Drawn at
the weight every icon in this app is drawn at, and it inherits the row's own colour.
~~~

### V290

`styles.css` line 2315, before `.more-row{ display:flex; align-items:center; justify-content…`

~~~text
A pill, like the trend button (Keren, Sep 20, 2026: "make the More details button like a pill-shaped button —
I don't really see the chevron"). A hairline with a word on it was a link pretending to be a control; the two
things at the foot of a page that can be pressed now look alike, and the chevron sits on a ground instead of
floating on the page. Version 290.
~~~

`js/04-components.js` line 827, in or after `by`

~~~text
The verdict is COMPUTED from the reading against fair value, and said in one family of words (Keren, Sep 20,
2026: "the tag shouldn't be 'richly priced', it's weird — use overvalued or undervalued, and for the range in
between choose words from the same family, maybe fairly valued"). "Richly priced" was hand-set and belonged to
no scale: nothing told a reader what its opposite would be, or what sat between. Five bands on one axis do
both, and because the word now follows CAPE against its own fair value, it moves on its own when the market
does. Version 290.
~~~

### V291

`styles.css` line 1887, before `.trendpill .tp-k .tag{ background:transparent; color:var(--t…`

~~~text
A verdict inside the trend pill wears the pill, not its own severity: red on a purple ground is two colour
systems in one control, and the word already says what the colour would (Keren, Version 291).
~~~

`styles.css` line 2870, before `.metric-sheet > .subject{ margin-top:var(--page-gap); }   /*…`

~~~text
the markers are a block of their own, not a continuation of the chart above them (Keren, Version 291)
~~~

`js/06-charts.js` line 1113, in or after `y`

~~~text
THE FOURTH PEEK FORM (Version 291). Temperature, GDP and Valuations are histories, so their peeks are columns;
Economic power is a level now, so its peek is a gauge. Effort and Pulse are neither: there is no ISM series to
draw (the PMI has not been public since 2016) and no M2 velocity history in this app, and both readings are
really ONE number against a reference band — a PMI above or below its 50 breakeven, a velocity inside or under
its pre-2008 pace. So the honest picture is not a bar chart (Keren: "I don't think it's necessarily a bar
chart — pick the best infographic"): it is the app's own track, band and disc, laid flat and given the peek's
full width. The same mark the reference bars and the Sentiment rings use, at peek scale.
~~~

### V292

`js/12-pages-nav.js` line 624, in or after `colClass`

~~~text
Effort and Pulse are cards, but not headline cards (Version 292, Keren: "put Effort and Pulse under
Sentiment"). The top grid is the four readings the whole board is about; these two are coincident signs, so
they belong down among the signs — as a pair of cards rather than two full-width rows, which is what makes
them comparable with each other at a glance. Same component, same grid, a different place in the page.
The unit is named short (ISM PMI, M2 velocity) so nothing wraps: a row of cards has one height.
~~~

### V293

`styles.css` line 2723, before `against it — the rule every inner page has followed since Ve…`

~~~text
each block is its own container (Keren, Version 293: "divide the container of the maturities and the
ten-minus-three, ten-minus-two spread — make them separate containers")
~~~

`js/09-render-core.js` line 617, in or after `hide`

~~~text
ONE MATURITY AT A TIME, CHOSEN FROM A ROW OF CARDS (Version 293, Keren: "I don't understand anything from the
chart and it's kind of distorted, it's coloured in black … I'd much rather have cards, scrollable, with an
icon that says what each maturity means, and if I click on it I see the appropriate graph"). The smear had a
cause: five lines plus a dot on every one of 85 quarters is 425 marks in five dark purples, on one small
picture. Drawing one line answers the question the page is actually asking — what has THIS maturity done —
and the cards carry what the deleted paragraph was trying to say, one line each, next to an icon for the thing
that maturity prices.
~~~

### V294

`js/09-render-core.js` line 624, in or after `hide`

~~~text
the most-referenced benchmark opens the page
Today's reading, from the curve the page's own headline is computed from — NOT the last point of the
quarterly history, which is a three-month AVERAGE and so reads 0.2–0.9 points different. Keren caught the two
side by side ("you write 10-year 4.94 and I see inside the container 10-year 4.70"), and she is right that a
page cannot print two numbers for one thing. The history line keeps its quarterly averages, because that is
what it plots; the card says today (Version 294).
~~~

### V295

`styles.css` line 461, before `--badge-fill:var(--surface); --badge-ink:var(--text-primary)…`

~~~text
the year badge (Version 295, Keren: "make the year marker on the cycle dial dark purple"): the brand's deep plum,
9.4:1 against the page, with the page's own colour reversed out of it. Purple also tells the badge apart from the
season ring it rides, which the old near-black disc did not.
~~~

### V296

`styles.css` line 1784, before `.metric-sheet > .timing-row{ margin-bottom:16px; }   /* only…`

~~~text
the chip labels the page and then gets out of the way — it had no bottom margin at all, so on every sign page
it sat flush against the first block (Version 296, Keren: "a little space below, it's too close")
~~~

### V297

`js/04-components.js` line 906, in or after `valRow`

~~~text
the ends say what the spectrum MEANS, not just which way is up (Keren, Version 297): low velocity is
money sitting still — the signature of a stalled or recessionary economy — and high velocity is money
changing hands fast, which is a busy economy and, past a point, an inflationary one.
~~~

`js/07-forms.js` line 1, at the top of the part

~~~text
---------------- THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse ----------------
Keren: "if we're talking about the pulse, I kinda want to see a pulse." She is owed one, and there is a
principled reason it belongs only here: velocity is the ONE reading in this app whose unit is a FREQUENCY
— turnovers of the same dollar per year — and a frequency has a native picture. Every other sign is a
level, a share or a rate of change, which is why the other four forms are columns, a gauge, a track and a pair.

What makes this a chart and not an ornament: the only thing that varies is the SPACING of the beats, and
spacing is exactly what the number means (period = 1 / velocity). Amplitude and wave shape are held
constant in every lane, so the eye cannot read size as data. The page draws two lanes over the same span
of years — today's 1.42x against the 1.857x she averaged from 1959 to 2007 — because without a reference
"seven beats" says nothing at all.

NB: the name pulseSvg() is free again — V586 gave Pulse's head the ECG its own reading already wore and
the heart had no caller left — but the trace stays pulseTraceSvg(), because the hazard the old note
named is real: two declarations of one name in this scope means the later one silently wins, with no
error, which is how a second boltSvg nearly shipped in V585. Explicit names are the cheap defence.
~~~

### V298

`styles.css` line 1420, before `subject-mark pairing of Version 213, one size down, and pres…`

~~~text
Version 298, Keren: "make it so the timing indicator would be at the bottom, next to More details." Where a
sign sits in the cycle is a footnote about the reading, not a heading over it — so it leaves the top and
shares the last row with the other thing offered at the end. Every inner page has exactly one of each.
~~~

`styles.css` line 2396, before `.metric-sheet .card-head .body-term{ display:none; }`

~~~text
Version 298, Keren: "there is a title inside the page which is redundant — you already have the page title
at the top." The top bar carries the name on every inner page, so the head keeps only what the bar cannot
say: what the reading actually measures, and the verdict. In a modal the head is still the only title there
is, so this is scoped to the page.
~~~

`js/04-components.js` line 936, in or after `deriveVolumeTag`

~~~text
Version 298, Keren: "I'm not sure 'Recovering' is appropriate — I would rather have an indicator that tells
me: is the velocity fast or slow." "Recovering" was a DIRECTION hand-written into the data, and it belonged to
no scale: nothing told a reader what its opposite was or what sat between. Five bands on one axis do both,
measured against the 1959–2007 mean the trace already draws — so the word, the picture and the spectrum's
ends all read from one number and cannot drift apart. Both extremes are flagged, because a stalled circulation
and a feverish one are both unhealthy. The direction is not lost: the caption still says she is recovering,
which is what a caption is for. (Same pattern as valuationVerdict, Version 290.)
These three sit here, ahead of the verdict below, and NOT beside the drawing code that also uses them.
`var` hoists the declaration but not the assignment, so when the verdict lived above them it divided by
undefined, got NaN, failed every comparison in turn and fell through to the last band — silently, with no
error and a plausible-looking word on screen. A constant belongs above its first READER, not beside its
busiest one. (Version 298.)
~~~

`js/07-forms.js` line 24, in or after `beatPath`

~~~text
one beat = one turnover: flat, then Q-R-S, then flat. Drawn past the right edge and clipped, the way a
monitor's strip runs off the screen rather than stopping tidily on a whole beat.
Version 298, Keren: "I want it to look like a real heartbeat — we have the beats but we don't have the
heights." A real trace's heights are WITHIN a beat, not between beats: the small P bump as the atria fire,
the tall spike of the QRS as the ventricles do, the broader T bump as they reset. Drawing those gives the
trace its anatomy WITHOUT introducing any variation between beats — every beat is still identical, so the
only thing that differs between the two lanes is still spacing, which is still the only thing that is data.
~~~

`js/09-render-core.js` line 251, in or after `timingPill`

~~~text
Version 298, Keren: "make it so the timing indicator would be at the bottom, next to More details." Where a
sign sits in the cycle is a footnote about the reading, not a heading over it, so it leaves the top of the
page and shares the last row with the other thing offered at the end. Every inner page carries exactly one
chip and at most one More details row — which is what makes a blind move safe — and pages with no chip
(the timing class pages themselves) are skipped. Idempotent, so it can run at build time AND on open.
A container with nothing to show takes no room (Version 383, Keren: "between average growth and highlights
I think there's 20 pixels, even more, maybe 30"). It was 32 on Growth. Version 381 collapsed an :empty block,
which caught Temperature's emptied sign card but NOT Growth's, whose markers section is a CLOSED <details>
with a display:none summary — 169 characters of text and zero height, so no selector could see it was
showing nothing. Measuring is the only honest test. It has to run AFTER the sheet is on screen: seatPageFoot
is called at the TOP of openMetricPage, while the sheet is still hidden and every child reports zero, which
is exactly why the first attempt did nothing.
~~~

### V299

`styles.css` line 1329, before `.peek:hover{ border-color:var(--border-strong); }`

~~~text
Version 299, Keren: "when I hover over Sentiment the border becomes a little darker, which I like, and
it doesn't behave the same way in Temperature, GDP growth, Economic power and Valuations. I want it a
little darker, not purple." She is right that they disagreed: a sign row has always gone to
--border-strong on hover and only the four cards went to the accent. Hover marks WHICH thing the pointer
is on — it is not a state of the reading — so the brand colour was doing a job the neutral does better,
and doing it in two different languages on one screen. The chevron still warms to the accent ink, which
is what both already shared.
~~~

`js/04-components.js` line 952, in or after `deriveVolumeTag`

~~~text
---------------- The whole record, opened from the mark (Version 299) ----------------
Keren, with Apple Health open: "they have an icon next to each title — in Heart Rate you have a heart, and
when I click on it I get a chart that lists the entire heart rate." So the sign's own mark sits beside the
head and opens every reading there has ever been.

It goes on THIS page and not on the others for a reason worth keeping: Pulse is the one page whose main
picture is NOT its own history. The trace compares two tempos, so the full record is genuinely something
more. On Temperature, GDP growth, Economic power and Valuations the full record already IS the page, and an
icon promising "the whole history" would open a second copy of what the reader is looking at.

270 quarters, FRED M2V, 1959 Q1 to 2026 Q2, in thousandths to keep the source readable. Checked on load
against the two records FRED itself states — 1.126 in 2020 Q2 and 2.192 in 1997 Q3 — so a mis-transcribed
digit cannot sit in the app unnoticed.
~~~

`js/09-render-core.js` line 297, in or after `registerTiming`

~~~text
Version 299 gave the head a mark and made it the control that opened the whole record; Version 303 puts that
record on the page instead, so the mark has nothing left to open and stops being a button. It stays as what
Keren asked for in the first place — an icon beside the name — and now every sign page that has a mark shows
it, not only the one that had something behind it.
~~~

### V300

`styles.css` line 1315, before `says its state twice — in the verdict word and in the pictur…`

~~~text
Version 300, Keren, with Apple Health's list open: "they have an icon next to each title — for example in
Heart Rate you have a heart." Her sign ROWS have carried their mark since Version 213; the cards never did,
so the same reading wore a face in the list and none on the card. The mark is the glyph alone in the
reading's ink — no disc — because at 17px a disc would be larger than the word beside it.
~~~

`js/07-forms.js` line 65, in or after `pulsePeek`

~~~text
Version 300, Keren: "it's not in the same theme as the other inner pages — I want to see a graph on a white
container." She is right, and it was the one page breaking the Version 266 rule: on an inner page the reading
lives in a white box (.page-chart) and everything below it is commentary on the page itself. The trace was
sitting bare on the page, which made it read as decoration between two blocks of text rather than as THE
picture. Same box the four metric pages use, with the bottom padding they get from their trend footer.
~~~

### V301

`styles.css` line 1319, before `.peek-mark{ flex:none; width:15px; height:15px; color:var(--…`

~~~text
Version 301, Keren: "make the icons without colour." One neutral ink for every mark. The card already
says its state twice — in the verdict word and in the picture above it — so a third statement in a third
place was noise, and six marks in six different colours read as a legend for something that is not a
legend. The mark names the subject; the word carries the verdict.
~~~

`js/07-forms.js` line 238, in or after `gearSvg`

~~~text
Pulse — velocity of money. A heart (Version 301, Keren), where it was an ECG squiggle before. The squiggle
had become a problem of its own making: since Version 297 the page draws a real trace, so the ICON was a
miniature of the picture below it rather than a name for the subject. A heart names the subject and leaves
Temperature — inflation. A thermometer, with the mercury heavier than the glass so it carries at 25px.
~~~

### V302

`js/07-forms.js` line 117, in or after `peekCard`

~~~text
Sentiment's mark: SentimentFace from the Gyneconomy DSM (Version 244) — built there on Keren's ask and imported path
for path, the same discipline as SproutMark: src/components/gyneconomy/icons/SentimentFace.tsx in
https://lovable.dev/projects/342f83b9-eb2b-4ba2-96e9-7627a1f9cdc1. Change it THERE first, then here.
One face in five states, only the mouth changing. The eyes are solid and large (1.55 radius) and the mouth is drawn
heavier than the face (2.1 against 1.9) so the expression carries at 24px, where a thinner mouth disappears.
Valuation's mark (Version 245): a piggy bank filling in three steps — nearly empty is cheap, full is richly priced.
Drawn on the same 24 grid as the faces and the sprout; the fill is a band clipped to the body, so the body never moves
between levels and the set reads as one object filling up (the battery's logic, which Keren liked for Economic power).
What had to go, to survive 24px: the tail. Its curl turned to mush below about 40px and cost more than it carried.
Valuation's mark, Version 302 (Keren: "make the Valuations icon a diamond instead of a piggy bank"). A
brilliant cut: crown, girdle, pavilion. It says the subject better than the piggy did — valuations are not
about saving, they are about what a thing is worth against what is being asked for it, and a cut stone is
the object whose price is most obviously a matter of opinion. It also fits the Version 301 rule the piggy
could not: the piggy FILLED in three steps, so the mark was carrying the verdict, and a mark names the
subject while the word beside it carries the verdict. One interior line only — the girdle — because the
full facet pattern turns to mud at 15px (the Version 213 rule: no interior detail a small size cannot hold).
Volume's mark (Version 310, Keren: "the icon should be a drop of blood"). It is the right word: Volume is
blood volume, and a drop belongs to the body's vocabulary where a test tube belonged to a laboratory's. The
app is a body read as an economy, so the tube was the one mark speaking the wrong language.

Hollow, not solid (Version 311, Keren). Version 310 filled it to keep it apart from Desire's flame, which is
also a drop-shaped outline — but the flame carries a filled tongue INSIDE it, and that core is what tells the
two apart, not the silhouette. So the drop is drawn slimmer than the flame is wide and left empty: a ring
beside a ring-with-a-core reads as two different marks, and an outline is what every other mark here is.
The two are never adjacent in any case — Desire is a 48px chip in the list, Volume a 15px mark on a card.
Version 507: one drop, two weights. Keren moved it from Volume to Circulation ("I want circulation to be
an icon of a drop"), where it is the plainest possible reading of the word — and Circulation's mark renders
at 42px on a home tile beside three marks drawn at 1.9, so the caller says which weight it needs rather
than the set carrying two drops that are almost the same shape.
~~~

### V303

`js/04-components.js` line 1068, in or after `fmt`

~~~text
Version 303, Keren: "instead of pressing the heart icon, I want the data to be in a separate container
below the main one." She is right, and it is the Version 287 rule stated again: a popup is for a NOTE, a
page is for a page. A 270-quarter record is not a footnote you glance at and dismiss — it is the second
thing this page has to say, so it gets the second container, the same white box the trace has, stacked
under it the way the yield page stacks its three.
~~~

### V304

`js/10-render-pages.js` line 862, in or after `regimeArrow`

~~~text
Version 304, Keren: the word on screen is "expanding", not "expansion" — and "contracting" the other way.
A participle says the body is DOING something, which is what this whole board is for; an abstract noun names
a state the reader has to attach to her. The MODEL's own value is untouched — it stays "expansion" and
"contraction", because the season logic, the ring and the analysis table all compare against those strings,
and renaming a value to change a label is how a display tweak turns into a data bug. Only the label moves.
~~~

### V305

`js/09-render-core.js` line 323, in or after `cardDetailHtml`

~~~text
`bare` drops the whole top (Temperature, whose chart says all three things); `noHead` drops only the name
row and the figure and keeps the spectrum — for a page whose FIRST CONTAINER carries the title and states
the figure itself, which is Pulse since Version 305 (Keren: "put the title inside the first container as a
title, remove 1.42× and the heart icon"). The figure was on screen three times: the head, the card's NOW
row, and the record's Latest row.
Version 384, Keren, on Pulse: "I want the history container to be first — and the blood test component
needs to be below the history container." That is the Version 369 page order (history, then the reading
against its reference range), which this builder had backwards for the signs: it emitted the meter first
because it was written before that order existed. `chartFirst` lets a page take the right one.
~~~

### V306

`js/05-history.js` line 488, in or after `checkVelocityHistory`

~~~text
---------------- Volume: how much blood there is (Version 306) ----------------
Keren, after the haemorrhage physiology: the pulse cannot be read without the volume. A racing pulse on
full volume is exercise; the same pulse on falling volume is shock, and the body cools even as the heart
speeds up. The identity is the one already on the Pulse page — nominal output is the money stock times
its velocity — so this is the other half of it, and the two sit side by side so they are never read apart.

What the card reads is the CHANGE, not the level: a money stock of $23.2 trillion means nothing on its own,
and grows with the economy anyway. Year over year is the reading that maps onto the metaphor — transfusion,
steady, haemorrhage — and it is the one with a history worth drawing.

271 quarters of FRED M2SL, 1959 Q1 to 2026 Q3, in billions. Checked on load against the two records the
series itself sets. The most striking fact in it: in 67 years the money stock had NEVER contracted year
over year until 2023 — five quarters, 2023 Q1 to 2024 Q1, and nothing before them.
~~~

`js/12-pages-nav.js` line 8, in or after `renderSignsList`

~~~text
signs whose card in the peek row stands in for their row
Version 306, Keren: "put Effort inside the Activity page — it belongs next to the labour market, it's not
that important a metric to preview." She is right on both counts: industrial output and employment are the
same question asked of two parts of the body, and reading them on one page is the point. A folded sign has
no card, no row and no page of its own — it renders inside its host's — but it still registers with its
own timing class, pointing at the page it now lives in, so the taxonomy does not quietly lose it.
~~~

### V309

`styles.css` line 1344, before `.peek-word{ font-family:"Public Sans",sans-serif; font-size:…`

~~~text
Version 309, Keren. With the pictures unified in Version 308 the verdict words were the last five colours
left in the row, and they were spending them on something they already say in words — "Highly overvalued"
is not made more alarming by being red, it is already the most alarming phrase on the card. One neutral,
a step quieter than the figure above it, so the card reads kicker → picture → figure → verdict in a clean
descent. Severity still has somewhere to speak: the sign rows' wash chips, and the tags on the inner pages,
where a reader has stopped to look rather than glanced.
~~~

### V311

`styles.css` line 1460, before `is most suitable." Near-black was correct under the Version …`

~~~text
Version 311, Keren: "the chart in the Volume preview is not rounded in the corners like the rest of the
charts are." It was not — .m2-col was written without the two things .temp-col and .gdp-col have carried
all along: round caps, and a stroke that does not stretch when the peek's viewBox is squeezed sideways.
A new mark should be copied from the spec of the one it stands beside, not written from scratch.
~~~

### V312

`js/06-charts.js` line 1089, in or after `maxIn`

~~~text
`rule` draws a hairline at the base (Version 312, Keren: "in the Volume preview put a purple line so I can
understand what is above the line and what is below"). It is the right answer to a peek whose series crosses
its base — better than making the bars taller, which would have meant moving the base off zero and losing
what a bar's height means. Only a diverging peek asks for it, so it is opt-in.
~~~

### V314

`styles.css` line 782, before `.ind-group{ margin-top:var(--gap); }`

~~~text
Version 314, Keren: "the same design as the Power, Valuations, Temperature and Growth previews — the icon
next to the text in grey, and a chevron on the right of the title — and the border only on the numbers, not
on the whole block." So the row gives up its own card: two borders around one reading is the fault this app
has been cutting all session, and the numbers are the thing that wanted fencing off.
~~~

`js/07-forms.js` line 167, in or after `volumeSvg`

~~~text
Pressure's mark: the gauge (Version 312, restored in Version 314 — Keren preferred it to the cuff). The
cuff was the truer object but it is three shapes where this is two, and at the 15px this mark now renders at
the cylinder and the dial collapse into each other. The foot under the dial is load-bearing: a circle with
one needle and nothing else is a clock, and a circle with one needle standing on a connector is a gauge.
~~~

### V317

`js/12-pages-nav.js` line 654, in or after `colClass`

~~~text
Hormones sits with this pair: all three read the circulation, so they are read together. Version 317
put it under them; Version 348 puts it above (Keren: "put pressure above the pulse and volume row")
— the full-width reading first, then the two cards saying what the circulation is doing inside it.
V596: it is the Hormones row that is full-width now, Pressure having merged into it, and the argument
for the position is the same one strengthened: the rate is the CAUSE, and the pulse and the volume are
what it acts on. Moving the node keeps everything inside it alive (the Version 314 lesson) — the
miniature drawn into the row, the ids the data blocks write to, the row's own open handler — and
its hidden sheet follows it, so every row here is still immediately followed by its own page.
~~~

### V320

`page-body.html` line 454, before `to help me see how history repeats itself." So this card sta…`

~~~text
Version 320, Keren: "I want the indicators to come first, and then a Cycle history container." The roster
is the board as it stands, which is what a reader wants before the history of how boards like it behaved.
And the list of cycles gets a title of its own at last — it had only a kicker, which reads as a caption
on something rather than the name of it.
~~~

### V343

`styles.css` line 1707, before `.rm-frame{ display:flex; align-items:stretch; gap:7px; margi…`

~~~text
Version 343: the grid sits inside an L of axis rules, the way a plot sits on its axes — which is the whole
of what Keren meant by "borderlines outside the metric", and it also gives the labels something to hang on.
~~~

`js/06-charts.js` line 1227, in or after `horizonInfoHtml`

~~~text
Version 343, Keren: risk on the side, reward along the bottom, and the pairing named in that order. She asked
for "risk/reward ratio" and it is titled RISK / REWARD without the last word, for the reason she herself
raised about Value at Risk two versions ago: a ratio is one computed number — two to one, three to one — and
this is a position on two axes, not a quotient. The pairing is hers; only the arithmetic claim is dropped.

With risk up the side and reward along the bottom, the corner to be in is bottom-right (little to lose, well
paid) and its opposite is top-left. The wash deepens that way.
~~~

### V352

`js/12-pages-nav.js` line 50, in or after `foldedBlock`

~~~text
Version 352, Keren: "drop the cogwheel icon and Effort and leave only industrial output as the title."
The mark and the body term both went for the same reason the flame left Desire's page in Version 340 —
a mark identifies a sign in a LIST, and this block is not in one. It is the only thing on the page that
is not the labour market, under a top bar that already says Activity, so "Industrial output" is the
whole of what its head has to say. The popup drops the name too, or the (i) would hand back the word
the head just stopped using.
~~~

### V353

`styles.css` line 1391, before `.peek-chart.heat .now{ opacity:1; }`

~~~text
Version 353, Keren: "I want to pull back on the idea of having purple preview — we should use the same
colour as the chart in the inner pages. Temperature would have a yellow or orange bar, Growth also yellow,
Power red, Valuations red. Everything up to this point is grey, and then the coloured bar is the colour of
the corresponding chart." This reverses Version 308, whose argument was that one brand colour says "this is
the reading" and nothing else. What that argument missed is the OTHER job a peek has: it is a door, and a
door should look like the room behind it. A plum bar on the Temperature card and a plum bar on the Power
card told a reader those two readings were the same kind of thing, which is the one thing they are not.
Version 262's greyed history does the work Version 308 thought the plum was doing — the live mark is the
only lit thing on the card either way, so it can afford to say WHICH reading it is while it says that.
Nothing here is repainted by hand: the two `!important` overrides simply come off, and every mark falls
back to the class it has carried all along (.temp-col.s0-s5, .gdp-col, .dv-bar.over/.under, .m2-col,
.vital-ring-fill.<state>) — which is, by construction, the class its own page's chart paints with, so the
door and the room cannot drift apart. Today that lands exactly where Keren said it would: Temperature
orange (CPI above the band), Growth gold (expanding), Power red (critical), Valuations red (overvalued).
The zero rule keeps the brand colour: Keren asked for that line specifically in Version 312 to read above
from below, and a reference is not a reading. The pulse trace keeps it too — its own page draws it plum,
which is the whole rule here.
~~~

`js/12-pages-nav.js` line 594, in or after `colClass`

~~~text
Economic power and Valuation can carry a line as of Version 255, because the series behind them now exists.
The power line is keyed by year (xs) rather than by position. That was originally because Gallup skipped
1980, 1982 and 1992 and the composite could not be formed for them; since Version 392 the series has no
gaps at all, and the keying stays because a year-keyed series cannot silently close one if a gap returns.
Version 353, Keren: "in the power page, change the title to economic power." The card keeps the short
noun Version 304 gave it — four tiles in a grid, and "Economic power" wraps where "Power" does not —
while the page it opens takes the full name back.
~~~

`js/12-pages-nav.js` line 670, in or after `colClass`

~~~text
Version 353, Keren: "in the cycle page, switch positions between sentiment and activity." The two rows
live in different containers — Sentiment among today's readings, Activity in the signs list — so this is
a swap of nodes between parents rather than a reorder inside one. Two comment markers hold the outgoing
slots, because the second move would otherwise have nothing left to aim at once the first row has left.
Each row's hidden sheet travels with it, so every row on the page is still immediately followed by its
own page — and moving the nodes keeps everything inside them alive (the Version 314 lesson): the mood
face on Sentiment's label, the ids the data blocks write to, and both rows' open handlers.
~~~

### V354

`page-body.html` line 526, before `<button type="button" class="cyc-more" id="cycle-more" aria-…`

~~~text
Version 354, Keren: "put two cycles in the preview in the cycle history container." Five full rows
made the container the whole tab; two make it a preview of one. The button sits OUTSIDE #cycle-list
on purpose — that element carries the delegated row-click handler, and a control inside it would
be read as a cycle. It expands in place rather than opening a page: this tab IS the cycle history,
so a page listing the same five rows would be a preview of itself.
~~~

### V356

`js/01-refresh-season.js` line 48, in or after `elFrom`

~~~text
The dial's date line, Version 356, Keren — overruling Version 355's second branch: "just write today,
September 22nd. The data will show the date that it derives from in each metric. And the cycle is the
single point of truth. I want it to be updated for today."

Version 355 had the hub print "As of <DATA_COMPILED>" whenever a closed US session was missing from the
page, so that a stalled refresh would show on the dial. Keren's argument against it is the stronger one
and it is about what this object IS. The dial answers "where are we now", and now is today — a reader
opening the app on the 22nd is not asking what was true on the 18th. Provenance does not live here and
never did: EVERY figure on the board already names the day it derives from, on its own card ("high-yield
OAS, Sep 17 2026", "CPI, YoY, Aug 2026", the VIX's close date), and the Sources screen states the compile
date verbatim. So the hub was doing a job three other places already do better, and doing it by making
the one thing that should always read "now" read like a date stamp.

What that trades away, recorded so nobody re-derives it by surprise: the dial will no longer betray a
frozen refresh. That surveillance moves entirely to the scheduled task — its WHEN TO PUBLISH rule (a
trading-day run that publishes nothing is a failed run) and its per-figure date labels. If the page ever
looks current while the figures are old, look at the task, not at the dial.
~~~

### V357

`styles.css` line 1464, before `shades of red from light pink to dark red, like heavy bleedi…`

~~~text
Version 357, Keren: "you're right about the colour of volume — choose the one from the palette you feel
is most suitable." Near-black was correct under the Version 353 rule (a peek wears its own chart's colour)
but it read as ink rather than as a reading, and it made the Pulse/Volume pair look like two unrelated
things. The brand plum is the right answer for one reason above taste: Volume and Pulse are literally two
halves of one reading — nominal output is the money stock times its velocity, which the Volume note says
in those words — and Pulse has worn plum on its trace since Version 297, for exactly the argument that
applies here: a QUANTITY is not a verdict, so it must not borrow a severity colour. Teal and red are
spoken for (up and down); the season hues belong to the dial and nowhere else. That leaves the brand
colour, which is what this palette gives a reading that carries no verdict. Changing it here changes the
inner page's chart AND its peek in one move, which is what keeps Version 353's rule true. The drain
quarters keep the red: a contraction in the money stock IS a verdict, and the only one on this chart.
~~~

`js/04-components.js` line 883, in or after `valRow`

~~~text
Version 357, Keren: "we removed the cogwheel from Effort and also removed Effort — we just call it
industrial output now." Version 352 had done that on the Activity page only; the name and the cog were
still on screen in the Indicators roster. Renaming `bodyTerm` finishes it, and the roster's row builder
collapses the duplicate on its own: it prints `sub` alone when `sub` starts with `title`, so the row
reads "Industrial output" once rather than twice. The two keys that index this sign by its body term
— FOLDED and signMarks — move with it below.
~~~

### V358

`js/03-data.js` line 335, in or after `powerOf`

~~~text
---------------- The deficit, year by year (Version 358) ----------------
Keren, Sep 23, 2026, with ARK's chart of the federal deficit as a share of GDP: "where do you think this fits
in the app? I think when I look at debt burden, that's what we were trying to achieve, but we are saying 101%,
which is a completely different number." The app already had the reading and was drawing it badly.

Debt burden is the STOCK — everything she has ever borrowed and not repaid. The Deficit rate is the FLOW — how
much she is adding this year. Both are true at once and neither is the other, which is why 101% and 5.8% sit on
one page without contradicting each other; and the interest burden beside them is what carrying the stock costs
her each year. Three markers, three questions.

What the app lacked was the PICTURE. The Deficit rate's range bar runs from a modern surplus to the FY1943
wartime peak, and on that scale today's 5.8% lands a quarter of the way along and reads as mild — so the row's
own picture was quietly contradicting the sentence underneath it, which says a deficit this size used to require
a recession or a war. That claim is comparative and it is about WHEN, so it needs a series, not a bar.

Two choices, both Keren's. It starts at 1946, because peacetime is the only frame in which 1983 and today are
comparable at all, and the wartime record is STATED in the rows beneath rather than drawn — kept honest without
being allowed to flatten eighty years into a band. And it lives here, as a second container on this page,
rather than taking an inner page of its own: one of three markers outranking the other two would invite the
same claim from Debt burden the next day.

80 fiscal years of FRED FYFSGDA188S (OMB), the series this marker already cites, checked on load against the
two records it sets inside this window. Positive is a surplus.
~~~

### V359

`js/03-data.js` line 378, in or after `checkDeficitHistory`

~~~text
Version 359, Keren, with ARK's own chart beside it: "I want the title to be federal budget deficit or
surplus. All the text can be in an info icon next to the title. Also I want a timeline menu — year to
date, one year, five year, and max."

The title and the (i) are done as asked. The menu is done at the spans this series can actually answer.
ARK can offer year-to-date and one-year windows because their chart is a ROLLING 12-MONTH deficit plotted
monthly; ours is one bar per fiscal year, so a one-year window is a single bar and a year-to-date window
is a single bar that is still a projection. The menu therefore zooms by decade — 10Y / 25Y / 50Y / Max —
which is the same move their range control makes and the one this data supports. Keren's call once the
alternatives were laid out: keeping the annual series also keeps the 1946 start and all twelve surplus
years, which the monthly source (Treasury's MTS, October 1980 onward) would have cost.

The one thing taken from their design unchanged is the dashed 1983 reference line. It is what makes their
picture land, it is the comparison Keren arrived with, and it is drawn at EVERY range — the level is the
point, so it stays on screen even when 1983 itself is off the left edge. It replaces the average line
rather than joining it: two dashed plum lines on one plot is two references and no reading, and the
average is stated in the rows below.
~~~

`js/04-components.js` line 621, in or after `fmt`

~~~text
Version 359: the head carries the name and an (i), the range bar sits under it, and everything the caption
used to say is behind the icon (Keren: "all the text can be in an info icon next to the title"). The block
is built ONCE — `infoIcon` files its text in `detailTexts` and a rebuild on every range change would push
a fresh copy each time — so the range bar, the span and the chart are the only things the renderer
rewrites. The rows below the chart stay fixed at the whole series on purpose: they are the record, the
chart is the view, and a record that changed when you zoomed would not be one.
~~~

### V360

`js/12-pages-nav.js` line 1068, in or after `capeFmt1`

~~~text
The subtitle went with the title: "three structural markers, each against its own record" is exactly what the
Power supply bar below already shows, marker by marker, against each one's own range (Keren: "this is basically
the power supply bar, so we can remove it from the top of the page").
Version 360, Keren: "drop the battery indicator." It was the last page head left in the app and the only
unboxed block on this page — but boxing it was never the fix, because almost everything it said was said
again below it. Measured before the cut: **25% appeared four times** on one screen (here, the chart’s own
corner label, the markers table’s lead row, and that row’s meter) and **Exhausted twice**. The gauge was
the one thing here that was not a duplicate, and it duplicated the CHART instead: 20 segments of "now"
sitting directly above 48 bars of the same reading year by year. Nothing is lost — the figure is on the
chart and in the table, the word is on the trend row and in the table, and "4 flagged" is in the context
line under the table. The same cut Valuations took in Version 274 and Temperature in Version 298; this
page was the last one still carrying a head.
~~~

`js/12-pages-nav.js` line 1279, in or after `actCycleMonths`

~~~text
The deficit's page (Version 360, Keren: "the federal budget deficit needs to be expandable from the
deficit rate in the power supply component"). As a second container on the Economic power page it took
27% of that page’s height for one of three markers, and it sat between the composite’s chart and the three
markers that make it — interrupting the one argument the page exists to carry.
~~~

### V361

`styles.css` line 1643, before `title that V518 turned into the band's head. */`

~~~text
… except where the bar LEADS its box. That 16px was added in Version 361 to separate the bar from the head
above it; Version 384 removed that head on Pulse, and the margin became 16px of nothing on top of the box's
own padding — 33px above the year bar (Keren: "the spacing above the year bar looks too much"). The
deficit block still has a title before its bar, so it keeps the gap.
~~~

`js/03-data.js` line 197, in or after `curveAsOf`

~~~text
the only one of the three with a series behind it, so the only one with a page (Version 360). When
another marker gets a history, it gets an `opens` too — this is a rule, not a favourite.
The TOP BAR name is short (Version 361, Keren). The container inside keeps the full
"Federal budget deficit or surplus": the bar names the page, the card names the reading, which is the
same split Pulse uses — bar "Pulse", container "Velocity of money (M2)".
~~~

`js/04-components.js` line 663, in or after `row`

~~~text
Version 518: the last container head in the app becomes the band head, which is emitted by histControls
from HIST_HEAD like every other page's. Its note is FILED here rather than opened by an (i) of its own —
the ⋯ menu above the chart is the one door onto it now. (The FY span label went in Version 361, Keren:
the range bar names the window and the chart's own axis dates it.)
~~~

`js/10-render-pages.js` line 709, in or after `worst`

~~~text
Version 361, Keren: the context line went. It said what the table underneath it says in full — the
table IS the three structural markers, each with its own flag — so it was a caption introducing a thing
that introduces itself. `.subject-body > .subject-context:empty` hides the paragraph, so passing "" is
the whole removal; the element stays for any page that still wants one.
~~~

### V362

`js/03-data.js` line 395, in or after `checkDeficitHistory`

~~~text
Version 362, Keren: "add five year to the ruler, because that’s the standard visual most economists use."
It also earns its place mechanically: five years is the FIRST window that clears FY2020’s −14.5%, so it is
the only one where the scale actually rescales and the recent plateau can be read against the 1983 line.
Every longer window contains 2020 and is dominated by it.
~~~

### V363

`js/04-components.js` line 1, at the top of the part

~~~text
---------------- The timeline component (Version 363, named by Keren in 366) ----------------
Keren, Sep 23 2026: "I want us to establish a component system so that when I change one component, it changes
across the board … we should have a bar similar to what we had of five year 10 year 25 50 max."

Before this version five pages each declared their own list of range segments, in four different vocabularies.
Now there is ONE ordered list of stops, and a page declares only which of them it offers; the order on screen is
always the order below, so a reader who learns the control on one page has learned it on all of them.

The Version 263 rule still governs what is emitted: a page shows only the stops its data can answer. That is now
computed rather than hand-maintained — a window is offered only if the series is at least that deep, so
a page gains and loses stops as its own data changes — Economic power picked 50Y up by itself in Version 393,
when its series was opened back to 1948, and nothing had to be edited for it to appear.

A page that offers "This cycle" does not also offer 5Y: the open cycle is already about five years long, and two
stops that mean nearly the same thing are worse than one.
~~~

`js/06-charts.js` line 490, in or after `hiCard`

~~~text
The cycle strip (Version 363, promoted from hiCycles): the metric's average in each of the app's cycles, the
open one marked. It is the app's ONE answer to "by cycle" — the same picture on Growth, Temperature, Economic
power and Valuations, reached on every one of them through the ruler's "Cycles" stop.
It returns the strip only. Every caller puts it inside that page's .page-chart, which is where Keren's white
container comes from ("I want it to have a white container so it stands in a prominent view") and why the strip
can never again appear boxed on one page and bare on another.
o.head     a label above the rows
o.stateOf  the page's OWN state function, so the strip and that page's chart colour the same number alike
~~~

### V365

`js/12-pages-nav.js` line 1471, in or after `redrawSheet`

~~~text
Both of the page's closing cards removed at Keren's instruction (Version 365): "The number you hear quoted"
(added the same day in Version 364) and "What it is and is not", which had stood since the page was built.
The page now ends on its own evidence — CAPE against its own record, the Buffett indicator against its —
and says nothing about what those readings do or do not predict. The long form behind "More details" is
untouched, so a reader who wants the caveat still finds it one tap away.
~~~

### V366

`js/06-charts.js` line 512, in or after `cycleStrip`

~~~text
---------------- The cycle average component (Version 366) ----------------
Keren, Sep 23 2026: "make this a separate component under highlights — let's call it cycle average component."
In Version 363 the strip was a STOP on the ruler, which made a cross-cycle comparison something the reader had
to go looking for, and put it in the same control as 5Y/10Y/25Y/Max — which are all windows on one series,
while "by cycle" is a different question entirely. Splitting them leaves each control saying one kind of thing:
the ruler is time windows, this block is the comparison across cycles. It is always on screen, under Highlights,
on every page whose series reaches back far enough to fill it.
~~~

### V368

`js/09-render-core.js` line 82, in or after `expandBtn`

~~~text
Which stop each page is showing. It sits beside sheetRenderers because the two are one mechanism: a key in
both is all the delegated .range-seg handler needs to drive a control, which is how the deficit block, Volume
and Pulse get a timeline without a second control idiom or a listener of their own.
"deficit-range", "volume-range" and "pulse-range" are not sheets — they are a block's own zoom.
Every timeline opens on TEN YEARS (Version 368, Keren: "make the default marker 10 years"). The deficit had
opened there since Version 361 and the rest opened on Max, so the same control started in two different places
depending on which page you reached it from — which is the one thing a shared component must never do.
Ten is also the better first view: it is the window an economist quotes, it is long enough to hold a cycle and
a shock, and Max is one tap away for the reader who wants the whole record.
Growth and Temperature are not listed with a window because they do not offer one; their default is unchanged.
Version 410: every history opens on the cycle the front page is showing. The 10-year default came in when
"This cycle" was not a real window; it is one now, and a reading opened from Current cycle should be about
the current cycle.
Version 417: which mode each page's history is in. Only Temperature has the cycle overlay so far; the default
stays "calendar" until every page has one, so the app is never inconsistent between pages mid-rollout. Keren
asked for Cycles as the DEFAULT — that is one word here, and it flips in the last stage of the rollout.
~~~

### V369

`js/12-pages-nav.js` line 1538, in or after `redrawSheet`

~~~text
THE PAGE ORDER (Version 369, Keren): history, then cycle average, then the blood test, then Highlights,
then More details. So the block goes immediately BEFORE the blood-test block — the markers table with
each reading against its reference range — which is `.subject` on three pages and `.sign-detail` on
Temperature. It is found by CLASS on the sheet rather than by id, so a page that renames its table keeps
the order, and the whole thing still anchors to a live node rather than to markup (the Version 366 rule).
~~~

### V370

`page-body.html` line 70, before `<div class="cv-stats" id="temp-stats"></div>`

~~~text
The cycle total reads AFTER the chart that sums it (Version 370, Keren: "make the total cycle below
the chart and don't delete it"). It is a conclusion, not a heading: above the plot it announced a
figure the reader had no picture for yet, and it is also a partial sum of an unfinished cycle, which
is the one number on the card that should be read last rather than first.
~~~

`page-body.html` line 86, before `<div class="cv-stats" id="growth-stats"></div>`

~~~text
The cycle total reads AFTER the chart that sums it (Version 370, Keren: "make the total cycle below
the chart and don't delete it"). It is a conclusion, not a heading: above the plot it announced a
figure the reader had no picture for yet, and it is also a partial sum of an unfinished cycle, which
is the one number on the card that should be read last rather than first.
~~~

### V371

`js/05-history.js` line 540, in or after `volumeVerdict`

~~~text
Growth's own history (Version 371, Keren: "change the main container to be yearly history like the rest of
the app"). The app's rule has been that drawGrowth() must not be rewritten because the Calendar's cycle view
shares it — so this does not rewrite it. It is a SECOND chart, on the inner page only; the cycle card stays
exactly as it is, still reachable from the timeline's "This cycle" stop and still borrowed by the Calendar.
Build alongside, never mutate what is shared.
Quarterly year-over-year from 1988 — 39 years, so 10Y, 25Y and Max all answer. Columns out of zero rather
than a line, because expanding or contracting is the reading; `.m2-col`/`.drain` because Volume's columns
already mean exactly this (a quantity in the brand plum, a contraction in the one red) and a second class
saying the same thing is how two charts start disagreeing.
~~~

### V372

`page-body.html` line 136, before `Growth a Total row that follows the cycle picker and removed…`

~~~text
The cycle total, fixed under the chart at every stop (Version 372, Keren: "keep the 'this cycle'
container fixed below the chart"). It used to ride the growth card, which left this page with the
"This cycle" stop; the card is gone from here, so the page carries its own and the one function that
computes the figure writes both. One source, two places, nothing to drift.
~~~

`js/12-pages-nav.js` line 1104, in or after `reserveState`

~~~text
Version 372, Keren: "drop the this cycle and year on year, add 5Y". Growth's timeline is now four windows
and nothing else — the same four Economic power carries, one row at every width, one kind of thing.
5Y returns because the timeline only withholds it where "This cycle" is offered, and that stop is gone.
The cycle card it used to show still exists and is still the Calendar's; it is simply no longer on this page,
which also takes the country selector with it — that selector drives the CYCLE chart, and the peer series
are per-cycle, so it has nothing to drive beside a 39-year history. It keeps working on the Cycle tab.
"Year on year" is gone as a stop, but yoyPairs()/pairChart() and the branch below are deliberately left
standing: re-adding "yoy" to this array is all it takes to bring it back.
~~~

### V373

`js/04-components.js` line 114, in or after `windowYears`

~~~text
A monthly series' window start index — the same helper, in months (Version 373).
The reading under the pointer, for any history chart (Version 378 for Temperature; Version 380 generalised it
and fixed the bug that made it invisible). THE BUG: .gdp-tooltip is opacity:0 by default and reveals on a set
opacity, so `hidden = false` alone produced an element with size and no paint — which is exactly what the
first probe measured, and why it passed while Keren could see nothing. Assert on what a reader can SEE.
pointermove rather than mousemove, so a trackpad, a mouse and a touch screen all answer.
Bound once per host and guarded: the markup is replaced on every stop, and a listener added per draw stacks.
The geometry rides on the host, so one handler serves every chart that sets it.
V489: "ample reserve, 70%" was written for the inline key, which had no column of its own for the figure.
The readout has one, so the label is cut back to the name it starts with.
~~~

`js/05-history.js` line 549, in or after `volumeVerdict`

~~~text
Temperature's own history (Version 373, Keren: "add a year bar to the temperature history"). Built the way
Growth's was in Version 371 and for the same reason: drawTemperature() is cycle-scoped and shared with the
Calendar's cycle view, so it is not rewritten — this is a SECOND chart, on the inner page only, and the
cycle card stays exactly as it is. Build alongside, never mutate what is shared.
Monthly year-over-year from 1989 — 38 years, so 5Y, 10Y, 25Y and Max all answer and 50Y does not.
Columns out of zero with the 2% target as the dashed reference, because on this page the reading is distance
from target. Version 373 drew them in the plum Volume and Growth use, on the argument that one shape should
wear one colour; Version 378 reverses that at Keren's word ("you dropped the orange-yellow spectrum — it
needs to look like a heat map"), and she is right. Consistency of SHAPE does not outrank the identity of the
reading: this page is Temperature, its ramp is what makes it legible at a glance, and a sequential ramp is the
correct encoding for a magnitude anyway. It uses `heatStep()` and `.temp-col.s0–s5` — the same function and
the same classes as the cycle chart, so the two views of the same series can never disagree about a colour.
~~~

### V374

`js/12-pages-nav.js` line 121, in or after `signSubject`

~~~text
Pulse is here on the same argument, not as a bonus: its spectrum was bare in
exactly the same way, and the blood test is one named component that should not
look like two things on two pages (Keren's own consistency rule, V374).
Version 485: Volume and Pulse carry the reading as a panel row inside their
own history container now, so the builder emits no blood card for them.
~~~

### V376

`js/05-history.js` line 1138, in or after `derivePulseTag`

~~~text
the note, kept to the two metaphors, which are the only part of it the page cannot draw (Version 270)
The body metaphor was this page's visible lead until Version 376 (Keren: "put this in the more
details pop up"). It is an explanation of HOW to read the reading, which is what the long form is
for; the page now opens on what the reading SAYS. Deleting `lead` is the whole change: the visible
line falls through to `shortCaption`, and the full caption — which still opens with the metaphor —
is what More details shows, because dropWhatIsShown no longer finds that sentence on the page.
"U.S. range since 1913" went in Version 376 (Keren: "I don't understand what is the US range since 1913").
Neither did the page. It read as the range of the whole official CPI record, but quoted the MODERN peak
(14.8%, 1980) while the meter behind it is scaled to the true extremes (−15.8% in 1921, +23.7% in 1920)
— so the row and its own meter disagreed. And since Version 374 the record rows state the range again,
for the series the chart actually draws (9.0% Jun 2022 to −2.0% Jul 2009). Three ranges, one page.
The meter draws the full sweep, the record rows state the drawn series, and the deep history is in the
long form, which already tells it properly — including the 1920 spike this row left out.
~~~

`js/05-history.js` line 1159, in or after `derivePulseTag`

~~~text
core CPI moved into the chart container (Version 376, Keren); that card became a record row in V422
~~~

### V377

`styles.css` line 1030, before `.metric-sheet .timing-row{ display:none; }`

~~~text
Version 377, Keren: "the leading tag at the bottom of the page — I want it in the info pop-up for each
indicator instead of just generally in the page, because it's a minor detail that if people want to expand on
their understanding, they can go to the info page." Exactly right, and Version 329 had already done the hard
half: the note's opener CLONES this chip into the modal. So the chip only has to stop showing on the page,
and one rule does it — the clone lives in #detail-modal-body, which is not inside a .metric-sheet.
Hiding rather than removing is the point: the element has to stay for openFrom() to find and copy, and the
copy keeps working as a door, because the handler that opens the Indicators page is delegated on document.
~~~

### V378

`js/05-history.js` line 1136, in or after `derivePulseTag`

~~~text
removed in Version 378 (Keren); the reading speaks for itself and the note explains it
~~~

`js/11-dial-cycle.js` line 792, in or after `renderCycleView`

~~~text
Core CPI went entirely in Version 378 (Keren: "drop the core CPI year over year, we don't need it — we are
only looking at the formal inflation rate, which is 3.4"). Version 376 had moved it into the container; the
right answer was that the page has one temperature, and a second one beside it invites a comparison the page
is not making.
~~~

### V379

`styles.css` line 2252, before `.metric-sheet .highlights{ border-top:0; margin-top:var(--pa…`

~~~text
Version 379, Keren: "I really like the beige background you made in policy rate — use it for the insights
across the inner pages." It is `.spread-tile`'s ground, --surface-2, and the reason it works there is the
reason it works here: a block that is COMMENTARY rather than measurement should sit on its own ground, so a
reader can see at a glance where the figures stop and the sentences begin. Scoped to .metric-sheet, so the
Cycle tab's own Highlights are untouched.
~~~

### V380

`styles.css` line 842, before `.growth-col{ fill:none; stroke-linecap:round; stroke:var(--g…`

~~~text
Growth's HISTORY diverges about zero in the season palette (Version 380, Keren: "it needs to be either
orange-yellow for contraction or blue-green for expansion"). Note this is a GROWTH semantic, not the wheel's:
in the season model colour encodes temperature, so contraction spans blue Winter and yellow Autumn. Here the
question is only which side of zero a quarter fell, so the two families split on that — cool for expansion,
warm for contraction — and the caption says so. The cycle chart's own .gdp-col below is untouched.
~~~

### V381

`styles.css` line 1916, before `.metric-sheet{ --page-gap:var(--gap); }   /* 20px in V381, 1…`

~~~text
---- One gap between an inner page's containers (Version 381, Keren: "the spacing between containers in each
inner page needs to be equal"). It was four different numbers — 16 between the two charts, 20 to the markers
table, 24 to Highlights, 22 to the foot — because each block had been given its own margin as it was built.
One token now sets all four, so the next container added inherits the rhythm instead of inventing a fifth.
~~~

### V383

`js/04-components.js` line 481, in or after `at`

~~~text
Keren, Version 383: "when I hover over a certain bar I want the colour to be slightly changed, so I can
understand which tooltip connects to which bar — it's not clear enough where I'm sitting." A readout
that names a month without marking it asks the reader to find the month themselves. The plot now dims
and the bar under the pointer keeps its full colour, with a hairline dropped through it.
~~~

### V384

`js/05-history.js` line 459, in or after `velocityRecordBlock`

~~~text
The head went in Version 384 (Keren: "I don't need the title 'every reading, 40 quarters from 2016',
because I can see it already"). She is right twice over: the timeline directly below states the window,
and the record rows beneath state the span. A heading that repeats its own contents is furniture.
~~~

`js/09-render-core.js` line 348, in or after `cardDetailHtml`

~~~text
An indicator may now say NOTHING here, by setting shortCaption to "" (Version 378). Before this the chain
fell through on any falsy value, so emptying the short line silently promoted the long caption onto the page
— which on Temperature would have put back the very metaphor Version 376 moved into the note.
Version 384, Keren, of Pulse's line and its COVID-era-low row: "no, no, no — I think this belongs to
insights." She is right, and it is true of every sign: a short verdict and the figures that qualify it are
commentary, not measurement, so they take the Highlights block and its own ground (Version 379) rather than
sitting loose under the chart. It also gives the sign pages the metric pages' shape: history, blood test,
Highlights, More details.
~~~

### V385

`styles.css` line 478, before `--mini-w:80px;   /* Version 459: the category row's miniatur…`

~~~text
---- THE GAP (Version 385, Keren: "make a rule that the spacing in the app is 16 pixels … so if one day
I'll tell you I want the spacing to be 30, you would just change one number — do not repeat yourself").
This is that number. Every rule that sets the distance between one container and the next reads it, and a
new container takes `margin-top:var(--gap)` rather than a figure of its own. Change it here, once.
THE BOUNDARY (Version 386) IS RETIRED (Version 501, Keren: "I measured the spacing and it looks like 18
pixels — I want it to be 15 across the app"). That rule said --gap was the distance BETWEEN containers and
nothing else, and that a card's own padding kept its own numbers. What it produced was two answers: 18px
inside a card above 560px and 16/15 below it, so the figure a reader measures depended on their window.
Container PADDING reads --gap now as well, which is closer to the Version 385 instruction this token came
from than the boundary ever was — "so if one day I'll tell you I want the spacing to be 30, you would just
change one number". Marks and type keep their own figures: a 4px bar cap, a 13px label gap and the
readout's 22px type inset are shapes and alignments, not spacing. ----
~~~

`styles.css` line 2353, before `.metric-sheet > .sign-detail:first-child{ margin-top:var(--g…`

~~~text
Version 385 zeroed this because the sheet provided the gap itself; it no longer does, and the four sign
pages whose body leads - Pulse, Desire, Activity and Volume - were opening with their control row hard
against the top bar while every other page had 15px. Keren, Sep 27, 2026: "there is no spacing between the
menu bar and the top menu ... if you don't have spacing between the top menu and the first element in the
page, fix it because it's a rule." It carries --gap-top now: the SAME token the control row itself uses on
every other page, so a page that opens on a sign and a page that opens on a chart open alike. The rule
above still zeroes whatever leads the body, so this is the whole gap rather than a second one.
~~~

### V387

`styles.css` line 2320, before `added that stroke when the button stood on the page's own su…`

~~~text
Version 387, Keren: "add a dark purple stroke to the more details button in each inner page." It takes
--accent-ink, which IS that deep plum (#5e2a6b) in light and the accent's own ink in dark (#e3c6ea) — so
the stroke is designed in both themes rather than inverted, and a literal dark purple, which would vanish
on the dark surface, is exactly what it must not be. 1px, the app's border weight everywhere else.
The 18px above it joins --gap at the same time: it is a gap between containers like any other.
~~~

### V388

`js/05-history.js` line 435, in or after `volumeBlock`

~~~text
Version 388, Keren: remove the paragraph, "and put the title Money stock (M2) Steady above the metrics,
instead of the deleted text." So the head leaves the top of the box and lands where the prose was —
heading the figures rather than the picture. The chart already names itself: its caption states the units
and the dashed line, the timeline states the window, and the red columns are visible without being counted
out in a sentence. What the paragraph said that the picture cannot — that those are the only
contractions in sixty-seven years — is in the long form behind More details.
~~~

### V389

`styles.css` line 1475, before `.m2-col{ fill:none; stroke-linecap:round; }`

~~~text
---- Volume's red ramp (Version 389, Keren: "volume is, in gynaecology, blood — so it should be different
shades of red from light pink to dark red, like heavy bleeding or light bleeding"). It reverses Version 357,
which put these columns in the brand plum on the argument that Volume and Pulse are two halves of one reading
and a quantity must not borrow a severity colour. The metaphor wins: this page IS the blood, and a sequential
ramp is the right encoding for a quantity anyway (a severity colour would be one flat red for every bar).
Six steps of the app's own red, mixed toward the surface, so it is one hue light-to-dark and stays in the
palette rather than introducing a new one. The lightest step is a definite pink, not a whisper — a
contraction has to stay visible below the zero line. Direction is carried by geometry, weight by colour.
~~~

### V390

`js/09-render-core.js` line 339, in or after `cardDetailHtml`

~~~text
Version 390, Keren, of Volume: "the blood test component should be below the history chart, and it should
have a white container just like in the power page." On a page that opens with a chart, the spectrum was
the one thing on screen with no box under it — it floated on the page background directly beneath the top
bar, which read as unfinished rather than as a second reading. Every other container on an inner page is a
.page-chart; the blood test is a reading too, so it takes the same box. The wrapper is an OPTION rather
than a change to the component, because on the metric pages the spectrum is already inside a card (it is
the top row of the markers table) and would otherwise end up in two boxes.
~~~

`js/11-dial-cycle.js` line 389, in or after `endScrub`

~~~text
no longer used to link the two charts (Version 206); kept so drawTemperature's reset is harmless
The heat ramp's five steps (Version 257, shared in Version 260 so the peek and the page cannot drift apart).
Binned by the reading itself rather than by rank, so the same CPI is always the same colour.
Volume's step, the ramp's counterpart to heatStep (Version 389; direction corrected in Version 390).
Thresholds are the reading's own landmarks: below zero (the stock shrinking), then up through the 1960–2019
pace of 6.8%, to the 2020–21 flood. The CLASS NUMBER IS FLOW, NOT SIZE — v5 is the deepest shade and it
belongs to the contraction, not to the flood.

Version 390, Keren: "when you lose a lot of blood it's dark red. So if you have a lot of blood in the system
— the money volume is really big — then it's a faint pink, because it's abundant. But if you're losing
money, then it's dark red, like heavy flow." Version 389 had it the other way round, mapping darkness onto
the SIZE of the reading the way a heat ramp maps it onto temperature. That is the wrong physiology: in a body
the deep colour is the blood LEAVING, and an abundant supply is the diffuse, pale state. So the ramp now runs
dark at the drain and pale at the flood.

It also puts the ramp back in agreement with the app's severity convention, which Version 389 had quietly
crossed: the money stock contracting is the alarming state — five quarters in sixty-seven years — and it
is now the darkest thing on the chart, as it is on every other page. Magnitude is not lost with it, because
the columns keep their height: the 2021 spike is still the tallest bar by a distance, it simply reads as
flood rather than as haemorrhage. Height says how much, colour says which way the body is going.
~~~

### V391

`js/12-pages-nav.js` line 127, in or after `signSubject`

~~~text
Version 391, Keren, of Activity: "put the highlights at the bottom of the page,
above More details." Its Highlights were INSIDE the read-card and therefore above
the folded Industrial output block — commentary sitting in the middle of the
measurements it comments on. This is the same fault Desire had in Version 385 and
the same fix: the builder hands its Highlights back and the caller places them.
~~~

### V392

`js/03-data.js` line 237, in or after `curveAsOf`

~~~text
---- Institutional trust left this panel in Version 392 (Keren: "drop the institutional trust Gallup survey —
we don't need it, because the trust is embodied in the bond market. So the power supply indicator should only be
comprised of debt burden, interest burden, deficit rate and productivity growth"). It was the Gallup confidence
reading, 27% against a 26–48 range. The argument for cutting it is that it was measuring the same thing twice
and worse: what a nation's creditors actually think of it is priced, continuously, in what they charge her to
borrow — which is the interest burden already sitting two rows above, and the yield curve on Pressure. A survey
of how people say they feel about banks is a slower, noisier proxy for a number the market publishes daily.
Dropping it also removed the panel's one non-fiscal series and its only gap: Gallup did not poll in 1980, 1982
or 1992, which is why the power history had three years missing. It now has none.
What went with it: the row, its meter, its two historical comparison values, and the three-year hole. ----
~~~

### V394

`styles.css` line 1739, before `.yl-col{ fill:none; stroke-linecap:round; }`

~~~text
---- Version 394: the maturity chart's columns wear the curve's own three zones (Keren: "a colour that
represents the pressure like we do — in the preview we have red, orange and green"). The same
`pressureZone()` lookup decides them as decides the preview's zone bar, so the card on the Cycle tab, the
verdict word and every column on this chart cannot disagree about what the curve was doing.

They are NOT the preview's own three tokens, though, and the reason is the Version 353 rule: a preview is a
door and a page is the room. On the card the zones are a background track with a marker riding on them, so
they have to stay recessive; here the columns ARE the data and carry full weight. Same three states, same
order, same hue families — --critical, --season-autumn, --good, all three already in the palette, no new
colour introduced. The pale versions were tried first and measured: --zone-mid and --zone-high sit at almost
identical lightness (0.873 and 0.868), which put them 9.6 apart for normal vision and 5.2 under protanopia
— below the floor, so a red-blind reader could not have separated normal from steep at all. The chosen
three measure 21.5 and 13.9 in light, 22.2 and 15.3 in dark, and the legend beneath names all three in
words, which is the relief the sub-3:1 surface contrast asks for.
Note what the colour is NOT: it is not the height of the bar. A 10-year yield has no good or bad level of
its own — 1% in 2020 was a recession signal, not cheap money — so height says what the yield WAS and
colour says what the curve was doing around it. The legend under the chart names all three. ----
~~~

`js/09-render-core.js` line 451, in or after `colLabel`

~~~text
Version 394: the chart carries a window, like every other inner-page history (Keren: "have the
configuration of all the rest of the inner pages history — so a year bar at the top"). `ylmFrom` is the
first visible quarter and every geometry function reads it, so nothing below needs to know a window exists.
~~~

`js/09-render-core.js` line 541, in or after `fmt`

~~~text
---- The picked maturity is drawn as COLUMNS, each shaded by what the curve was doing that quarter
(Version 394). It replaces a single thin line in one flat purple. Two things changed for one reason:
Keren asked for the rest of the inner pages' history configuration, and every one of those draws its
reading as columns with colour carrying a second variable (Temperature's heat ramp, Volume's blood ramp).
Here the second variable is the page's own headline — the 10-year-minus-3-month spread — read through
`pressureZone()`, the SAME function the preview card's zone bar calls. So the inversions of 2006–07,
2019 and 2022–24 appear as red stretches on this chart without a word of explanation, and the reader no
longer has to hold the spread chart in their head to see when the yield above was under a warning.
~~~

### V395

`js/03-data.js` line 205, in or after `curveAsOf`

~~~text
---- Productivity growth left this panel in Version 395 (Keren: "I think it doesn't belong to economic power —
I think it belongs to activity"). She is right on subject matter: output per hour is a measure of what the body
is DOING, and it sits beside the labour market and industrial output rather than beside three claims on the
sovereign balance sheet. The tell was in the code all along — it was the one row needing `invert:true`,
because it is not a pressure at all.

What the move costs, stated plainly: Power loses its only offsetting term, so it is now a gauge that can only
fall, and today's reading drops from 30% to 26%. What it gains: the composite is one question asked three
ways — the stock she owes, what carrying it costs, and what she is adding this year — instead of three of
those plus something else.

And it fixed a flaw neither of us was looking for. Productivity was normalised against −11.7% to +20.9%,
the QUARTERLY annualised extremes, while the figure actually read was the ANNUAL year-over-year one, which
has never left −1.7% to +6.7%. Every realistic annual reading therefore landed near the middle of that
range and scored about 50 whatever it was — so through the 1950s–70s, when productivity was genuinely
strong, it was the single biggest DRAG on the composite. That is why the history lifts so much here: 1969
goes from 72% to 81%. The marker's own note had disclosed the mismatch since it was written; nothing had
drawn the conclusion. Its range on the Activity page is the annual one, because that is what it plots. ----
~~~

### V396

`styles.css` line 466, before `--batt-1:#a32b1c; --batt-2:#e0574a; --batt-3:#dfb63f; --batt…`

~~~text
The battery's four charge steps (Version 396, Keren: "if she has medium size reserve it should be, let's
say, yellow, and if it has ample supply it should be green, like a battery"). Economic power's bars had
been painted from the app's severity tokens, which is why the chart came out a wash of reds with teal at
the top: in LIGHT mode --warning and --serious are both `color-mix` of --critical toward the surface, so
"Steady" rendered as a pale red rather than the yellow a battery shows at half charge. (In dark mode
--warning is a real amber, #eda100 — so the two themes had been disagreeing about what a warning looks
like, which is a separate thing worth knowing.) These four are the charge, not a severity, so they are
their own steps and nothing else in the app moves.
~~~

### V397

`js/03-data.js` line 185, in or after `curveAsOf`

~~~text
Version 397, Keren: "you write deficit rate, and it's not always deficit — it can be a surplus, so
maybe we should call it federal budget instead." She is right, and the row's own bar proves it: its
range starts at −2.3%, the FY2000 SURPLUS, and the budget was in surplus for four straight years to
FY2001. A row named for one sign of a two-signed reading is wrong four years in eighty. The new name
also matches the page it opens and the top bar of that page, which have both said "Federal budget"
since Version 361 — so the row, the door and the room finally agree.
~~~

`js/06-charts.js` line 609, in or after `reserveChart`

~~~text
Version 397, Keren: "instead of putting a legend below the battery chart, just put the percentage on the
left side like any other chart — and there needs to be a line beneath it with the years, so it looks like
a chart … make it understandable that the x-axis is years and the y-axis is percentage." The bars had been
floating in a frame with no axes at all: the only numbers on it were the last reading, top right, and the
reference line's own label. Every other history in the app states its scale on the left, and this one now
does too, which also RETIRES the colour legend Version 396 put underneath — once a reader can see the
height against a labelled scale, the four charge colours are reinforcing the bands rather than carrying
them alone, which is both the better encoding and the visible-label relief the amber step's contrast asks
for. padL opens from 8 to 30 to make the room; nothing else about the geometry moves.
~~~

### V399

`js/06-charts.js` line 665, in or after `at`

~~~text
---- The history component's axes (Version 399, Keren: "the history component should be the same on all
inner pages — it's a component with variants, so we don't need to work on each page separately").

This is the first piece of that consolidation. Seven functions draw the app's histories and each had grown
its own chrome, so the same year bar, the same records and the same trend pill looked slightly different on
every page, and axes existed on two pages out of eight. What legitimately differs between them is the PLOT
— Temperature's heat ramp, Volume's blood ramp, Valuations' diverging bars, Pulse's line, all asked for by
name. The chrome around the plot should not differ at all, and this emitter is the part of it that draws
the scale.

Give it the y() a chart already has and the span it is plotting. `base` is where the rule beneath goes: the
zero a column stands on, or the bottom of the frame where the marks hang off a midline instead — those mean
different things and the caller is the only one that knows which it has. `skipNear` keeps a tick from
landing on a reference line that already carries its own label. `step` is an override for a chart whose
scale has meaningful stops of its own; left out, it picks a round one that lands three or four labels. ----
~~~

### V404

`js/04-components.js` line 673, in or after `row`

~~~text
Version 404, Keren: four records, like every other history. This page had five, and the one that went is
"Deepest on record, -26.9% FY1943" — but the REASON it was there does not go with it. It was stating that
the chart's window is truncated at 1946 and by how much, which is the honesty that lets the 1946 start be
a choice rather than a hidden crop. That sentence moves into the note behind the (i), where the rest of
the window's reasoning already lives, so nothing true stopped being said; it is said once instead of
twice, in the place a reader goes for it.
Version 435: these four rows were built once from the whole series. They are recordRows now, rendered
per draw, so they follow the window like every other history. The Version 404 disclosure about the 1946
crop stays where it went then — in the note behind the (i).
~~~

### V407

`styles.css` line 2617, before `.hovering .hcol{ opacity:0.38; }`

~~~text
Version 407, Keren: "when I hover over the history I don't see the marker we installed in all the other
history components — make sure you read from the same source, the same mother component." Only two pages
had it. These rules named `.temp-col, .growth-col` and the host class `.vh-host`, and the hover function
named the same two selectors in JavaScript, so the behaviour could not have reached another chart even if
the chart had asked for it. The mark class is now the chart's to declare and the rule matches whatever
carries `.hcol`, which every history's columns and its line now do.
~~~

### V408

`js/04-components.js` line 457, in or after `at`

~~~text
Version 408: a host may hold more than one svg — Power's box carries the trend pill's arrow as well
as the chart — so the chart says which one it is rather than the hover taking the first it finds.
V608: and `.hist-svg` was not enough. Since V596 the HEAD sits inside this same box on Hormones,
Pressure and Fear, and a head opens with a 21px mark — so `querySelector("svg")` was picking a 13px
icon and scaling the pointer by 13/344. Every move landed outside the plot and the readout went home,
which is why Keren could not read a single bar on those pages. It was never the touch layer alone.
The chart is found by what it CONTAINS, not by what it is called: `.hcol` is the one class every
history puts on its readings (the V407 rule this line now actually uses), so the svg that owns a
column is the svg being read. No future chart has to remember to be named correctly.
~~~

### V410

`js/04-components.js` line 42, at the top of the part

~~~text
---- Version 410, Keren: "when we look at the current cycle and click any one of the KPIs, I would assume as
a user that we will see the current cycle data — instead we're seeing the 10-year default." She is right, and
it is the front page that makes it wrong: the tab says Current cycle, you tap a reading, and you land in a
window spanning two cycles that nobody asked for.

"This cycle" has been in TIMELINE_STOPS since Version 363 but has never been a real window — it carried no
span, so every helper treated it as "the whole series". It is a window like any other; its span is simply
measured from the cycle's own start instead of being a round number. Computed when asked rather than at
declaration, because marketCycles is defined further down the file and a constant here would be undefined.

Everything else follows for free: mWindowFrom, qWindowFrom, defFrom and timelineWindow all read
timelineSpan(), so none of them needed a line changed. And timelineFor already drops 5Y from any page that
offers "This cycle" (Version 366's rule that two stops meaning nearly the same thing are worse than one) —
the open cycle is five years old, so that rule starts paying now rather than in theory. ----
~~~

### V411

`js/04-components.js` line 16, at the top of the part

~~~text
---- Version 411, Keren: "make it consistent across the app — sometimes I see 50 years … we don't want to
look at different pages and catch inconsistencies all the time." Every history now offers the same four:
This cycle, 10Y, 25Y, Max.

Her stated reason was that 50Y and Max are basically the same. Measured, they are not — they run 7 years
apart on Valuations, 18 on Volume and Pulse, 29 on Power and 30 on Federal budget. The change is right for
the OTHER reason, which is the one she led with: a component the reader has to re-read on every page is not
a component. What it costs is honest to state — on the long series the step from 25Y to Max is now a jump
of fifty years or more — and what it buys is that the control means the same thing everywhere.

Pressure still shows three rather than four: its yields start in 2005, so 25Y is not a window it can answer,
and the component has never offered a stop the data cannot fill (Version 263). That one is a DATA limit, not
a design inconsistency — fixable by carrying the 10-year yield back to 1953, which is offered separately.
~~~

### V414

`styles.css` line 3086, before `margins give it a real, scrollbar-free width to centre the w…`

~~~text
Version 414, Keren: "make sure the padding from the left and the right of the cycle inside the container
are equal — that is the only math we need to look at." She was right and it was not perception: the dial sat
exactly 2.000px right of centre at every phone width (360, 390, 414 all measured the same), because this
subtraction was 2px short. The chrome each side is the page wrap's 20px padding + the card's 1px border +
the card's 13px padding, less the 11px this rule takes back = 23px, so the dial's span is 100vw − 46px.
At 44px the wheel came out 346px against 344px of room; the 2px of overflow does NOT split evenly — the
engine clamps it to the start edge — so the whole 2px landed on the right, every time, on the exact device
she uses. (Version 413 tried to answer this with an optical nudge and made it far worse: 9.8px of padding
on the left against 26.2px on the right. Removed.) At 46px the margin box is 322px, exactly the card's
content width, so nothing overflows, nothing is clamped, and the two paddings are equal by construction
rather than by arithmetic that has to stay true. Desktop was always exact and is untouched.
~~~

`page-body.html` line 486, before `<div id="cycle-list"></div>`

~~~text
Version 414, Keren: drop the note, and 2018–2021 goes back to COVID-19 Cycle. Both in one move, and
they are one move: the note stated a rule, and a cycle named for an event that lands in its year 3 of 4
is not an instance of that rule. Rather than keep a sentence the list beneath it contradicts — the exact
failure Version 412 was written to avoid, in the opposite direction — the claim comes off the screen.
Nothing in the model changed and nothing became unsayable: the names are Dot-Com, Housing, Big Tech,
COVID-19, AI, the years are untouched, and the cycle a reader is most likely to arrive with a date for
now agrees with them without help. That is why the note can go: Version 412 existed because the OLD
names contradicted the popular dating of the dot-com bubble, and the Version 413 names do not. A note
earns its space by resolving a contradiction; this one no longer had one to resolve.
What is true of the set, recorded here rather than claimed on screen: four are named for what grew in
them, one for a mid-cycle event. The rule is the app's working principle, not a promise to the reader.
.cyc-note went with it — the only rule it styled — so the class is gone from the stylesheet too.
The superseded Version 413 and 412 rationales follow, because the case they worked out is live history.
Version 413, Keren: "I want the cycle name to be the growth, what really happened, and not just what
started it." So the naming rule is inverted. It used to run off the bleed that OPENS a cycle; it now runs
off the boom that GROWS inside it, and four of the five names move up one place: 1990–1999 becomes
Dot-Com (the fever inflated there), 2000–2007 Housing, 2008–2017 Big Tech, 2018–2021 Stimulus. AI keeps
its name, because the thing growing in it is what it was already named for.
This is the better rule for a reader arriving with the popular dating. Under the old one the Dot-Com
Cycle was the years AFTER the bubble, which reads as an error however carefully it is defended — the
Version 412 note below was that defence, and a note that has to defend a name is a sign the name is
wrong. Under the new rule the name sits on the years the thing actually happened, and the bleed is
explained as the bursting of the cycle before: the same model, stated from the side a reader knows.
The cost, kept in view rather than hidden: Dot-Com, Housing, Big Tech and AI name an asset, while
Stimulus names an engine. There was no asset in 2018–2021 — what grew was the money itself.
The superseded Version 412 rationale follows, because the case it worked out is the case this settles.
Version 412, Keren, after noticing that the Dot-Com Cycle runs 2000–2007 while the dot-com bubble is
usually dated 1995–2002: "put somewhere that each cycle is named after the bleeding that initiated
it." The model was never wrong — a cycle opens with the bleed, which is the whole of Day 1 — but
nothing on screen said so, so a reader arrives with the popular dating and finds it contradicted.
The line states the rule AND resolves that exact case, because the case is the interesting part: the
boom that causes a bleed belongs to the cycle BEFORE it. The dot-com fever inflated through the Long
Boom years (whose own blurb already ends "cresting into a speculative fever as the 1990s end") and
was paid for in the cycle that carries its name. The same pattern runs on: the Dot-Com Cycle's
recovery grows the housing boom that opens Subprime.
"Where that bleed has a name" is doing real work and is not a hedge — two of the five are named for
what they contained rather than what opened them (Long Boom, AI), because the 1990 recession and the
2022 correction are not names anyone uses. A rule stated as absolute would be a small untruth sitting
directly above the list that disproves it.
~~~

`js/11-dial-cycle.js` line 120, in or after `arcPath`

~~~text
---- horizontal centring (Version 414, Keren: "make sure the padding from the left and the right of the
cycle inside the container are equal — that is the only math we need to look at") ----
Version 413 nudged the wheel left to balance the INK, because the coloured arc sits on the right through
the first half of a cycle. That was the wrong trade and she called it: it bought optical balance with real
asymmetry, 9.8px of padding on the left against 26.2px on the right at phone width. The rule here is the
simple one — the ring is a circle and a circle is centred when its two margins match — so there is no
offset, derived or otherwise, and nothing for `drawDial` to set. The centring is the layout's job, and
.season-wheel-wrap does it; see the rule there.
~~~

### V415

`styles.css` line 554, before `.season-wheel{ position:relative; width:var(--dial); max-wid…`

~~~text
Version 415, Keren, who found this by comparing two screens: "when I look at it from my iPhone I see it in
the center, and when I look at it in the preview chat it leans to the right." That is a scrollbar bug, and the
difference between the two devices is the whole diagnosis. --dial is computed from 100vw, and 100vw INCLUDES the
width of a classic scrollbar while the card's layout width does not. iOS uses overlay scrollbars (0px), so the
phone was always exactly centred; the preview pane has a real one (15px), so there the wheel came out 15px wider
than its container, overflowed — and the overflow does not split, the engine clamps it to the start edge — so
all 15px landed on the right. Measured on the published Version 408: padL 18.93 against padR 3.93, a 15.00px
difference at 390, 414, 480 and 600 alike.
max-width is the guard: the wheel is whatever --dial asks for, but never wider than the box it sits in, so a
viewport unit that over-reports can no longer push it anywhere. --dial stays a length because the hub's type is
scaled from it. See the phone rule for the other half.
~~~

### V416

`js/06-charts.js` line 431, in or after `mean`

~~~text
---------------- The record rows (Version 374) ----------------
Keren: "I like how in the volume page you can see fastest on record, slowest on record — I want this to
apply to all inner pages with the statistics, so it has a coherent, consistent design."
Volume, Pulse and the Federal budget have carried these rows since their pages were built, each writing its
own; this makes them one component the four metric pages call too. Four readings, always in this order: the
extreme high, the extreme low, the long-run average, and the latest.
They describe the WHOLE series and never the window — the chart is the view, the rows are the record
(the Version 359 rule), which is why zooming the timeline never changes them.
Version 416, Keren: "we're calculating the average between 1989 and 2026 — that's a long span. The economy is
growing year by year; we can't compare an economy of 200 million people in 1950 to 350 million in 2026." The
average row now reads the LAST TEN YEARS, and says which ten in its label. The convention is older than it
looks: Graham and Dodd (Security Analysis, 1934) recommended averaging over five, seven or ten years to
control for the business cycle, and Shiller took the ten-year version for CAPE in 1988; ten years is also the
CBO's projection horizon and the Fed's expected-inflation horizon. Note that the convention exists to SPAN a
cycle rather than to exclude old regimes — the opposite of Keren's reason — but ten years happens to satisfy
both: long enough to contain a cycle, short enough to stay inside one regime.
The Version 359 rule survives, because ten years is FIXED. It is not the chart's window; zooming the timeline
still changes nothing here, and the high and low rows still say "on record" and still mean the whole series.
`meanAll` opts a page out. Valuations uses it, and the reason is not squeamishness but arithmetic: CAPE's
ten-year average is 32.9x against 22.0x over the full series, and today's reading is 39.7x — so a ten-year
baseline would report a near-record valuation as only modestly rich, because the last decade was itself
expensive. A short window on a valuation measure defines the bubble as normal. The principle underneath:
Keren's argument is that the economy CHANGES SIZE, which is true of inflation, output and money; a valuation
multiple is a ratio and is already scale-free, so the argument does not reach it, and the long baseline is
the very thing Shiller built the series to provide.
Each page supplies its own words, because "hottest" and "richest" and "fastest" are not interchangeable.
~~~

### V418

`styles.css` line 1941, before `whichever submenu the mode calls for — a years ruler or the …`

~~~text
Version 418, Keren: "add like five pixel spacing between the top bar and bottom bar." They were flush — the
rule above zeroes every margin inside a .page-chart — so the mode bar and its submenu read as one control with
a seam rather than as a thing and the thing it governs. (0,3,0) to out-weigh that rule, which is (0,2,0).
~~~

`js/06-charts.js` line 219, in or after `modeBar`

~~~text
Version 418, Keren: "make cycles the default tab, cycles on the left and years on the right." The order is
the claim: this is a cycle-tracking app, so the cycle view is the subject and calendar time is the alternative.
~~~

`js/06-charts.js` line 226, in or after `modeBar`

~~~text
Version 418: the Cycles submenu. Keren left the control to me — "not necessarily a ruler, maybe a dropdown."
It is the ruler's grammar rather than a dropdown, for three reasons: a dropdown hides its own state behind a
tap, which is the wrong trade for a control whose whole job is to say which lines are on screen; it would be a
second control idiom in an app that has exactly one; and on a phone a row of taps beats a popup with checkboxes.
Multi-select is the part that matters, and it is the thing Keren asked for a long time ago and never got —
"the default would be current cycle, and then I can compare it to other cycles by multi-selecting them."
~~~

### V419

`styles.css` line 2112, before `.cycsel{ position:relative; }   /* V440: its gap belongs to …`

~~~text
Version 419: the cycle picker is a dropdown after all (Keren: "I think I prefer a drop down"). Version 418
argued for chips on the grounds that a dropdown hides its own state — and the chips proved the counter-argument
by needing two wrapped rows on a phone to say five words. What the dropdown buys is room for the YEARS beside
each name, which is the thing that makes the list legible: "COVID-19  2018–2021" is a cycle a reader can place,
where "COVID-19" alone is a name they have to remember the dates for. The closed button carries the state the
chips showed — "All cycles", a single cycle's name, or "3 of 5 cycles" — so the trade is smaller than it looked.
It stays OPEN while you pick, because it is a multi-select and closing after each tick would make choosing
three cycles three round trips.
~~~

`js/04-components.js` line 30, at the top of the part

~~~text
Version 419, Keren: the front page has said Current cycle since V410 and the rulers said This cycle
Version 476: 1Y joins the ordered list for Desire, whose series is three years deep and could otherwise
answer no stop but Max. It is an addition to the ONE vocabulary rather than a second one (the V411 rule):
same list, same order, same labels, and a page gets it only by naming it in its own `stops`.
~~~

### V420

`js/05-history.js` line 750, in or after `qAtIndex`

~~~text
Version 417's five-cycle overlay lived here and was removed in Version 420 (Keren: "not multiple select,
because I want the same visuals as the years — the bars with the colouring the same"). She is right that two
drawings of one metric on one page is a worse problem than the comparison was a gain: the overlay had to be
grey lines precisely BECAUSE it drew five cycles at once, so it could not carry the heat ramp that is how this
page says hot and cold everywhere else. One cycle at a time keeps the ramp, and the cycle picker becomes what
the ruler is in Years mode — a way of choosing the window, drawn identically either way. The overlay is in
Version 417's source if it is ever wanted back. ----
~~~

`js/06-charts.js` line 232, in or after `modeBar`

~~~text
which page's picker is showing its menu; kept in state so a re-render cannot close it
Version 420: the cycle picker is SINGLE-select (Keren). It chooses a window, exactly as the years ruler does,
and the chart is drawn the same way in both modes — which is the whole reason multi-select had to go: five
cycles at once forced grey lines, and grey lines cannot carry the heat ramp.
~~~

### V421

`js/05-history.js` line 885, in or after `fmt`

~~~text
Version 421, Keren: "now that we have a cycle-based viewpoint we can take the average CPI by cycle and put it
as a line — and make it so I can also view the number." The convention is the app's OWN and is reused down to
the class names rather than reinvented: drawTemperature has drawn exactly this since Version 260 — one
saturated accent line, its value on a --surface plate set in the clearest stretch of the run, so that every
column is read as above it or below it. Reusing .temp-avg / .temp-avg-label also means the trend toggle dims
it for free, because `.trend-on .temp-avg` was written for the other chart and does not care which drew it.
Cycle mode only: in Years mode "the average" would be the window's, which is a different claim and would sit
on the page arguing with the ten-year average in the record rows.
Version 423, Keren: "make all the data relevant to the chosen timeline." The average is the window's, in
every window — which is also what let the ten-year average row go: the number lives on the chart now, where
it can never describe a stretch the picture does not show.
~~~

### V423

`styles.css` line 924, before `(Keren: "wherever there's white space in the chart, put that…`

~~~text
Version 423, Keren: the total in bold, as the row that leads the list
~~~

`page-body.html` line 577, before `<section class="journal-about" aria-label="The cycle model">`

~~~text
Version 423, Keren: "add to the content page the cycle model, which says each cycle starts with a bear
market and ends with the next bear market — very, very, very short, and put the colours like we did with
the seasons." VERSION 511 TURNS THE SENTENCE ROUND, because she turned the model round: a cycle now runs
from its first bull year to its last bear year, so the bleed CLOSES it. The same two cut-points, counted
into the chapter whose boom caused them — see marketCycles. This paragraph is the only place on SCREEN
that states the model in words, which is why it has to move with it. It sits FIRST because a cycle contains the seasons, not the other way round, and the page
should define the larger frame before the one inside it. The swatches are `.season-sw` with --season set
inline: the app already had that shape, so this adds no new swatch, and the two colours are the ones the
Calendar and the dial's market band have always used — --bleed-mid for a down year, --ovulate for an up
one. Keren said red and green; the app's bull is TEAL, and it is left teal rather than quietly changed,
because every bull year already drawn on the dial and the Calendar is that colour and a legend that
disagreed with the picture would be worse than one that names an unexpected hue.
~~~

`js/12-pages-nav.js` line 1157, in or after `yoyPairs`

~~~text
Version 423, Keren: "make all the data be relevant to the chosen timeline — the data should be updated
below the chart." This reverses the Version 359 rule on THIS page, and reverses it deliberately: that rule
said the chart is the view and the rows are the record, which is right when the rows are the only place a
record is stated. Here the reader is choosing a window on a control two lines above, and a row that ignored
the choice read as a bug rather than as a principle. So hottest, coldest, latest and the total all describe
the months on screen — which is also why "on record" left the labels: it would be a small untruth in every
window but Max. The average row went entirely, because the average is now ON the chart in every window.
~~~

`js/12-pages-nav.js` line 1523, in or after `redrawSheet`

~~~text
Version 423, Keren: "drop the average CPI by cycle in the temperature page because we are already seeing
it in the history component." Proved rather than assumed before removing it — the chart's average line
reads 4.3% on the open cycle, 1.7% on Big Tech, 3.0% on Dot-Com and 2.5% on COVID-19, which are exactly
the four figures this strip drew. The other three pages keep theirs until they get the cycle mode.
Version 431: gone with Temperature's, for the same reason — the chart's average line reads the same
number for whichever cycle the picker is on, so the strip was a second answer to a question already answered.
Version 433: both gone with Temperature's and Growth's — the chart's average line reads the same number
for whichever cycle the picker is on, so the strip was a second answer to a question already answered.
~~~

### V425

`styles.css` line 1798, before `I think it's also too small." There are two families here, n…`

~~~text
Version 425, Keren: "make it a rule that all the buttons and drop-down menus have the same height." Measured
before it was one: the bars came out 34px and the cycle dropdown 32px, because each had reached its height
through its own padding rather than through a shared number. --ctl-h IS the rule; with border-box, a control
lands on it whatever padding it happens to carry, so the next control added cannot drift either.
~~~

`js/06-charts.js` line 373, in or after `trendOf`

~~~text
One line, because the row is a BUTTON and a button says one thing (Keren, Sep 20, 2026: "the trend button needs
to look like a button — make it so it's only one line; I want to read trend falling across fifty-five months").
The magnitude left with the second line and lost nothing: pressing the button labels BOTH ends of the fit on the
chart, which is where a distance belongs — shown, not asserted (Version 281).
Version 425, Keren: "48 months divided by 12 is four years — say across four years, or even 4Y so it's
shorter." The count was in the SERIES' unit, which is the arithmetic and not the sentence: a reader thinks in
years, and "across 120 months" asks them to do a division the pill could have done. nY is the app's existing
notation for a span of years (the ruler's 5Y/10Y/25Y, a cycle row's "(10Y)"), so this introduces no new token,
and it lands on every page at once rather than leaving Temperature reading differently from its neighbours.
Version 475: a DAILY series divides by 252, the trading days in a year — Desire's record is the app's
first, and without this its pill read "across 787Y". 252 is the market's own convention, not a rounding:
787 closes over three years and a quarter come back as 3Y, which is what the chart shows.
~~~

### V426

`styles.css` line 2325, before `border:0; background:var(--accent-wash); border-radius:var(-…`

~~~text
Version 426, Keren: "drop the deep purple stroke because now it has a background to sit on." Version 387
added that stroke when the button stood on the page's own surface and needed an edge to be a button; inside
the Highlights box it is one wash on another, and the outline became a box drawn inside a box. The wash and
the plum text carry it now.
~~~

`js/09-render-core.js` line 280, in or after `seatPageFoot`

~~~text
Version 426, Keren: "put the More details button inside the highlights container." It was seated in the
page foot beside the timing chip, which made sense while Highlights was a bare section; since Version 288
gave .metric-sheet .highlights a surface, a border and a radius, a button sitting just below that box reads
as belonging to the page rather than to the Highlights it summarises. highlightsHtml has always emitted it
inside the section — this function was moving it out again — so the fix is to seat it back where it was
built, and to keep the foot only as the fallback for a page that has no Highlights box to put it in.
~~~

### V427

`styles.css` line 912, before `gap is two things and only one of them is a margin: 19px of …`

~~~text
Version 427, Keren: "add a line above total price change so that it would divide the data from the chart."
The records used to follow a captioned chart, which did the dividing; the caption went in Version 425 and the
rows were left floating under the plot. It is a container rule, so it sits on the block and not on the row.
~~~

`styles.css` line 925, before `.chart-label-plate{ fill:var(--surface); } /* the plate unde…`

~~~text
Version 427 put a key UNDER the chart and Version 428 moved it back inside, stacked and set in whitespace
(Keren: "wherever there's white space in the chart, put that number, preferably close to the purple line").
Its .chart-key rules went with its markup rather than being left behind to style nothing.
~~~

`styles.css` line 2337, before `.metric-sheet .highlights .more-row{ margin-bottom:7px; }   …`

~~~text
Version 427, Keren: "a lot of spacing above and not below — it needs to be even spacing." Measured: 18px above
the button and 5px below it, because the gap above is the button's own margin and the gap below was whatever
the container's bottom padding happened to be. 13 plus the box own 5px below it = the 18 above it.
~~~

### V428

`styles.css` line 924, before `(Keren: "wherever there's white space in the chart, put that…`

~~~text
V428, Keren: the NUMBER is the bold thing, not its name
~~~

`styles.css` line 1802, before `So we need to make this a bit larger so I can click on it co…`

~~~text
Version 428: ONE height was the wrong rule and Keren caught it — "what about the height of the trend button,
I think it's also too small." There are two families here, not one. A SELECTOR (the mode bar, the years ruler,
the cycle dropdown) is a row you scan and tap to change the view; an ACTION button (Trend, More details) is a
thing you press. They were already 34 and 40 by accident; they are 34 and 40 on purpose now, and the trend
pill — which V427 shrank to 34 on the selector token — belongs to the second family.
~~~

### V429

`styles.css` line 2288, before `.hi-lede{ margin:0 0 4px; padding:0 0 12px; border-bottom:1p…`

~~~text
Version 429, Keren: "in highlights, explain the temperature is prices rising according to the CPI — one
sentence about prices rising or falling." Every other line under Highlights is arithmetic on the series above
it (the Version 255 rule, which is what stops one going stale). This one is a definition, so it is deliberately
NOT a .hi-card with a state tag: it carries no figure, it cannot be wrong, and a tag would promise a reading
it does not make. It opens the section, because a reader who does not know what the metric is cannot use the
three cards that follow.
~~~

### V430

`styles.css` line 915, before `'.page-chart .legend-rows' is the whole set and nothing else…`

~~~text
Version 430, Keren: ten pixels out of the space between the chart and this line. Measured first, because the
gap is two things and only one of them is a margin: 19px of it is empty SVG below the x labels (the chart
reserves 38px at the foot for them and they do not fill it) and 12px was this margin. The margin is the honest
place to take it from — the other 19px is chart geometry, and trimming THAT would move the labels rather than
the gap. 12 → 2 leaves 21px from the last label to the rule.
~~~

### V431

`js/09-render-core.js` line 677, in or after `drawVelocityRecord`

~~~text
Version 431, Keren: "in the pulse page you write quickening — the correct word is accelerating, and the
opposite is decelerating." Right on both counts, and the second half is the one that matters: Pulse IS a
velocity (M2 turned over per year), so acceleration is the literal reading rather than a metaphor.
~~~

`js/09-render-core.js` line 699, in or after `drawM2Record`

~~~text
Version 431: Volume already used "accelerating" and paired it with "slowing", which is half of one pair
and half of another. Keren's rule next door finishes it.
~~~

### V432

`page-body.html` line 140, before `<div id="gdp-trend"></div>`

~~~text
Version 432, Keren: "why total 24% if we have 11%?" Because this card was still here. Version 422 gave
Growth a Total row that follows the cycle picker and removed TEMPERATURE's equivalent card — and missed
this one, so the page showed a fixed "Current cycle +11%" beside a row that read +24% with Housing
picked. Two totals on one page, one of which ignored the control above it. The card belongs on the Cycle
TAB, where the current cycle is the frame and the number is the headline; here the cycle is chosen.
~~~

### V436

`js/06-charts.js` line 354, in or after `trendOf`

~~~text
Version 436, Keren: just "not available". The reason clause was written when this state was rare and needed
explaining; since the rows started following the window it is ordinary — four annual readings is what a cycle
gives Power, Valuations and the Federal budget — and a pill that explains itself every time is noise.
~~~

### V437

`js/06-charts.js` line 357, in or after `trendOf`

~~~text
V437, Keren's word
~~~

### V439

`styles.css` line 920, before `.page-chart .legend-rows{ border-top:1px solid var(--border)…`

~~~text
Version 439, Keren: the rule above the first figure, on every history rather than on Temperature alone.
`.page-chart .legend-rows` is the whole set and nothing else — Pressure's Fed-funds box is the only other
legend-rows in the app and it sits outside a .page-chart, so it keeps its own treatment.
~~~

`js/12-pages-nav.js` line 1262, in or after `actCycleMonths`

~~~text
Version 439, Keren: the caption goes — the Power supply explanation below the chart already says this,
and a line repeating it above the figures is the page telling the reader twice.
(Version 396's colour legend retired in Version 397 — the y axis now says what the bands are.)
V436, Keren: "the exhausted is in a bubble — it's not consistent, in temperature you just write Trend."
The tag was this page saying its verdict twice, since the battery above already carries that word.
~~~

### V440

`styles.css` line 8, before `--grid: rgba(30,20,30,0.11);`

~~~text
Version 440, Keren, from an Apple Health chart: "you can really see the grid lines — it's still pale, but
not as pale as we have it, and sometimes we don't even have a grid at all." The grid had no token of its
own: it borrowed --border at opacity 0.45 and dashed it 2-on-4-off, which multiplied out to an effective
alpha of 0.045 covering a third of the line — about 1.5% ink, which is not a pale line, it is no line.
Its own token now, solid, at the weight a gridline is supposed to read at. One number to tune.
~~~

`js/06-charts.js` line 271, in or after `cycleMonths`

~~~text
Version 440, Keren: "there isn't spacing between the two top menus in the history component, which is
inconsistent with our component design — so just checking whether you are dry coding this app." She was
right, and Pulse and Volume were the proof. The MARKUP was one component; the SPACING was not. Every page
wrote the same two-line expression by hand, the gap between the mode bar and its submenu came from
`.page-chart .rangebar + .rangebar` at (0,3,0), and Pulse's box still carried
`.page-chart.pulsebox > div:first-child .rangebar{ margin-top:0 }` at (0,4,1) from Version 384, written to
kill a DIFFERENT gap. The heavier selector won and the 10px silently became 0 on two of eight pages —
visible only in Years mode, because in Cycles mode the second control is a .cycsel and a different rule
applied. The fix is not a third override. The component emits its own root and sets its own spacing there,
the two per-page rules are deleted, and the page keeps only the one thing that is genuinely the page's
business: where the component sits (#deficit-rangebar's lead, below its title).
~~~

### V441

`styles.css` line 2736, before `band drops the mode bar on its Spread segment, because that …`

~~~text
================= Version 441: the history is a BAND, not a card =================
Keren, with an Apple Health heart-rate screen beside it: "the history component is full width — I think
I like the design because it gives us more space to show the data", and then, asked how far to go,
"drop the card entirely and keep the background white."

The screenshot is the argument. Apple's chart has no container at all: it sits on a white sheet that
runs to both edges of the screen, and the grey sections with their own cards begin BELOW it. The card
was costing us 68px of the 390 a phone has — 20 of page padding and 14 of card padding on each side —
to draw a border around the one thing on the page that nobody needs a border to find. The plot was
280px wide inside a 390px screen. It is 350 now.

What replaces the card is a white band: full-bleed, no border, no radius, no shadow, and the page's own
containers carry on below it exactly as they were. That is the Apple Health rhythm — one white section
that is the reading, then the page. The band is selected by what it CONTAINS rather than by a class each
page remembers to set: :has(.hist-controls) means "the box holding the history chrome", so Pressure's
.spread-history joins without being told, and a page cannot opt out by forgetting.
~~~

### V442

`styles.css` line 2229, before `.bt-vgrid{ stroke:var(--grid); stroke-width:1; stroke-dashar…`

~~~text
Version 442: the OTHER half of the grid. Keren, of the Apple Health chart: "the grid like view — you can
really see the grid lines." What makes that screen read as a grid rather than as a few rules is that it has
verticals as well as horizontals, and that the two are drawn differently: solid across, dashed down. The
dash is not decoration, it is the distinction — a horizontal line is a VALUE you can read off the axis,
a vertical one is only a place on the calendar, so it should not look like something you could measure.
~~~

### V443

`styles.css` line 2235, before `.bt-frame{ stroke:var(--grid); stroke-width:1; fill:none; }`

~~~text
Version 443, Keren: "in the Apple Health app you have an upper border that closes the grid." Quite right —
without it the top gridline is wherever the highest tick happens to fall and the grid simply stops in mid
air, which is why ours read as a set of rules rather than as a chart. The frame is the plot's own box: the
same weight and colour as a gridline, because it is the outermost one.
~~~

`styles.css` line 2387, before `#metric-page{ max-width:880px; margin:0 auto; width:100%;`

~~~text
Version 443, Keren: "remove the spacing between the top menu and the history component — when the top
menu ends, there's white background." An inner page opens on the history band, and since Version 441 that
band is a white sheet running off both edges; the 16px of page colour above it (the top bar's own margin
plus the tab panel's 2px) was the last thing making it look like a card that happened to be wide. With the
gap cancelled the band starts exactly where the bar ends, and scrolls UNDER it — the bar is translucent and
blurred, which is what that treatment is for. Cancelled on the inner page rather than removed from the top
bar, because every other tab still wants the air.
~~~

`js/05-history.js` line 851, in or after `cpiHistoryChart`

~~~text
Version 443, Keren: "in the growth chart the bars are hiding the numbers of the rows." An x-scale
running L→R puts the first and last columns' CENTRES on the plot edges, so half of each hangs outside
the box — over the y-axis labels on the left and past the plot on the right. It survived unnoticed while
the chart was 280px wide and the columns were thin; at 335px (Version 441) each column is wider and the
overhang sits squarely on the "%" of every label. Half a column of inset at each end puts every mark
inside the plot, which is also what lets a frame close around it. The LINE charts keep the old scale,
because a line has no width to hang over anything and should reach both edges.
~~~

`js/05-history.js` line 967, in or after `gdpHistoryChart`

~~~text
Version 443, Keren: "in the growth chart the bars are hiding the numbers of the rows." An x-scale
running L→R puts the first and last columns' CENTRES on the plot edges, so half of each hangs outside
the box — over the y-axis labels on the left and past the plot on the right. It survived unnoticed while
the chart was 280px wide and the columns were thin; at 335px (Version 441) each column is wider and the
overhang sits squarely on the "%" of every label. Half a column of inset at each end puts every mark
inside the plot, which is also what lets a frame close around it. The LINE charts keep the old scale,
because a line has no width to hang over anything and should reach both edges.
~~~

`js/05-history.js` line 1030, in or after `m2GrowthChart`

~~~text
Version 443, Keren: "in the growth chart the bars are hiding the numbers of the rows." An x-scale
running L→R puts the first and last columns' CENTRES on the plot edges, so half of each hangs outside
the box — over the y-axis labels on the left and past the plot on the right. It survived unnoticed while
the chart was 280px wide and the columns were thin; at 335px (Version 441) each column is wider and the
overhang sits squarely on the "%" of every label. Half a column of inset at each end puts every mark
inside the plot, which is also what lets a frame close around it. The LINE charts keep the old scale,
because a line has no width to hang over anything and should reach both edges.
~~~

### V444

`styles.css` line 517, before `more round and more feminine, like the Apple app." Ten was t…`

~~~text
Version 444, Keren, attaching the Pressure page's own spread toggle: "decide on a border radius that will
apply to all containers in the app — the app has a consistent border radius — and apply it to all of the
components." It did not have one. It had five: 18px on most cards, 16px on the rest, 12–14px on a handful,
10px on three, and a full 999px pill on every control — nine hundred pixels of radius meaning "round",
which is a different statement from "10", and one a container of any other height renders differently.
One number now, and the control she pointed at is where it comes from. The inner value is not a second
decision: a segment sitting inside a 3px-padded track must be 3px tighter or the two curves fight, which
is the arithmetic her reference was already doing (10 outside, 7 in). Small marks keep their own radii —
a 4px bar cap and a 2px swatch are shapes, not containers — and circles stay circles.
~~~

`styles.css` line 1948, before `grey, which I like — you have the title, then the figures, a…`

~~~text
Version 444, Keren: "apply it also to the cycles years bar and the current cycle bar, and make them one
next to the other — cycles years on the left and right adjacent to it the current cycle." They were stacked
because the cycle picker arrived (V419) as a submenu UNDER the mode bar, and a submenu goes below the thing
it belongs to. It is not a submenu: both controls choose a window, one by kind and one by which, and on one
row that is what they look like. It also gives the chart back 44px of height, which on a phone is the
difference between the plot and the figures being on screen together.
The mode bar is sized to its two words and the picker takes what is left, because the picker is the one
whose content varies — "Current cycle 2022–today" against "Cycles | Years", which never changes.
~~~

### V445

`styles.css` line 2039, before `.hist-bar .rangebar,`

~~~text
Version 445, Keren: "the cycles years and current cycle bars — white with a purple stroke, and the pressed
cycles purple with white text, because I want mostly a white background." The beige track (--track) was how
a control said "I am a control" back when it sat on a white CARD; since Version 441 it sits on a white BAND
that runs the width of the screen, and a beige slab is the only thing on that band not made of paper. An
outline says the same thing without spending a fill, and it hands the selected state the strongest mark the
app has — which is the right way round, because on a segmented control the ONE thing worth seeing from
across the room is which segment is on.
Both tokens invert for dark mode already: --surface follows the theme, --accent goes from plum #8a4d97 to
lilac #c9a0d6, and --on-accent from white to near-black, so "purple with white text" reads as light-on-dark
where the page is dark. Contrast on the selected segment is 5.9:1 light and 8.7:1 dark, both past AA.
Scoped to .hist-controls rather than to .rangebar, because the app's other segmented controls — the
indicators tabs, the spread toggle, the bottom tab bar — still sit on page colour rather than on the band,
where the track is doing a job. They are worth revisiting together, not by accident.
Version 519 widens the scope from .hist-controls to .hist-bar, and only that far. The controls left the band
for the page ground, and Horizon carries TWO of them — the window and the spread — which meant one white
outlined bar sitting directly above one beige slab, two chromes on one row of one page. A control row wears
one chrome. The three V445 named are still outside a .hist-bar and still untouched, which is the "together,
not by accident" that comment asked for.
Version 520 takes the purple back out, on Keren's reason rather than on a colour preference: "the top bar
should be grey with grey strokes and grey overall, because it is an action that would be RARELY USED — it
would be used, but it is not the prominent action of the history page." That is the argument V445 could not
have made, because in V445 the control sat on a white band where a beige slab was the only thing not made
of paper, and the plum outline was the cheapest way to say "I am a control". On the page's own ground a
grey bar with a grey stroke says the same thing and says it quietly, which is what a control the reader
touches once a session should do. The strongest mark in the app goes back to where the app spends it:
the New-Goal-shaped actions, and the SELECTED segment, which reverts to `.range-seg.on`'s lifted white
paper — legible against grey, and no longer the loudest thing on the screen.
~~~

### V446

`js/12-pages-nav.js` line 694, in or after `colClass`

~~~text
================= Version 446: the homepage is Summary + Browse =================
Keren, copying Apple Health's homepage: "I want to segmentize the KPIs." Her grouping, with two changes she
took: the box holding temperature and growth is WEATHER rather than Season, because computeSeason() takes
those two and returns the season — so a box named for the season would make the conclusion a peer of the
systems that produce it, and the dial above already IS the season; and Power joins Blood rather than
standing alone, because bank reserves are how much blood the system is holding, and pressure, pulse, volume
and supply are one circulation measured four ways. Apple Health has no categories of one.
Then: "for now, drop the pinned components", so the Summary is the dial alone and every reading lives in
its category. Ten readings, four systems, nothing orphaned.
The members are MOVED, not rebuilt — the Version 314 lesson, applied here for the fourth time: moving a
node keeps everything inside it alive, the sparklines already drawn, the ids the data blocks write to, and
each row's own open handler. Their hidden pages stay exactly where they are, because openMetricPage finds
a page by id and does not care who its parent is; what makes this work at all is that the app has opened a
page FROM a page since Version 271, so the back stack already handles two levels.
~~~

### V447

`styles.css` line 1198, before `together, and it takes the Highlights treatment because it i…`

~~~text
Version 447, Keren, from Apple Health's All Health Data list: "each container has its own row, the last
updated time and the chevron are in the corner, and below it there's a miniature graph of what you can see
on the inside." Before this a category held whatever component its member happened to arrive as — a
full-width row for Pressure, half-width cards for Pulse and Volume, a stretched card for Power — which is
three shapes for one job. One shape now, and the shape is the reference's: the name and its mark lead, the
period and the chevron close the head, and the reading sits beside a miniature of its own page.
~~~

### V449

`styles.css` line 1147, before `right." The four are placed EXPLICITLY rather than reordered…`

~~~text
Version 449, Keren: "there is no spacing at the top — equal spacing between the containers themselves
and between the containers and the top menu." Both halves were true and they had the same cause: these two
lists were written with a hand-typed 10px while every other container gap in the app is --gap (the Version
381 rule), and an inner page starts flush against the bar because #metric-page cancels the top bar's own
margin — which is right for the history BAND, a white sheet meant to run under a translucent bar, and wrong
for a page that opens on a card. So: one token for the gap, and the pages that open on a card take one
gap above their first container. The history pages keep their flush band.
~~~

`styles.css` line 1234, before `.ci-body{ display:flex; align-items:center; gap:14px; margin…`

~~~text
Version 449, Keren: "the ring should be very small and the height of the container should be the same as
valuations and desire." The miniatures arrived at whatever size their own component draws at — a peek chart
at 52px, Sentiment's Fear & Greed ring at 132, Desire's at nothing — so three rows that say the same kind
of thing were 183, 103 and 91 tall. The picture slot is one height for all of them, which is the height the
peek arts already use, and the row keeps it even when there is no picture to put in it.
~~~

`js/12-pages-nav.js` line 831, in or after `catItem`

~~~text
Version 449, Keren, of Desire on the Mood page: "the fire icon is just floating around — it needs
the same styling as the icon in valuations, grey and refined, without a green background." A peek
carries its mark as a bare 15px glyph; a sign row carries it as a BADGE — a disc tinted with the
reading's state — and Version 447 moved whichever it found. Out of its row that badge had no size at
all (it measured 390×900, the viewport) and it brought its state colour with it, which is the green
disc. The glyph is what a head wants; it is lifted out and given the peek treatment, so a member
built from a row and a member built from a card are finally the same object.
~~~

### V450

`styles.css` line 369, before `#today-analysis{ display:flex; flex-direction:column; gap:10…`

~~~text
Version 450: gone. This is the spacing Keren saw — "between the cycle dial and weather there's one
spacing and between weather and blood there's a bigger spacing." The Cycle tab had its own 10px at (0,2,0),
out-weighing the token rule at (0,1,0), so the dial sat 10px from the Browse list while every row inside
that list sat --gap apart. It was tuned when this tab held the dial, a peek row and a run of signs; the
Browse list replaced all three in Version 446 and the override outlived its reason. The app has one
spacing number and this was the only rule still arguing with it.
~~~

`styles.css` line 1227, before `.ci-head .peek-chev{ flex:none; margin-left:3px; }`

~~~text
Version 450, Keren: "I still don't see a chevron on the category items." It was there and measuring
12.7px in Chromium — but it was `.subject-chev`, which is a BORDER BOX: an empty span sized 9×9 with two
borders and a 45° rotation, which depends on the span being blockified as a flex item and on currentColor
resolving to something visible, and .cat-item is a <button>, where the inherited colour is the browser's
rather than the page's. The app already draws a chevron as an SVG — CHEV, on every peek kicker and every
card row — and a mark that is a picture cannot fail to lay out. One chevron in the app now.
~~~

### V451

`js/06-charts.js` line 703, in or after `vGrid`

~~~text
Version 451, Keren, holding an Apple Health chart beside ours: "why does our app look so cramped?"
Measured, on both: a column here filled 97% of its slot — 17.95px of 18.58, a 0.6px gap — where Apple's
fills 69%. Ten times less air between marks, which is why eighteen readings read as one teal mass with
notches cut out of it rather than as eighteen readings. `(R - L) / n - 0.6` says "take the slot and leave
0.6px", and it was written when these charts were 280px wide and the columns were thin; Version 441 made
them 335 and nobody revisited it. Three charts had it — Temperature, Growth and Volume. Every OTHER column
chart in the app was already between 0.58 and 0.68 of its slot, so this is the outlier joining them rather
than a new idea, and 0.68 is the app's own widest existing value (Pressure's) as well as Apple's measured
69%. The remaining seven literals are worth collapsing into this constant too, but that moves Power and
Valuations the other way — they are airier than Apple already — so it is a separate decision.
~~~

### V452

`js/12-pages-nav.js` line 900, in or after `catItem`

~~~text
================= Version 452: Volume × Pulse =================
Keren: "check how the combined insights work — when we talk about blood we can see the correlations."
Her example was clinical (low pressure with a high pulse suggests low volume), and the reasoning is
right while that particular mapping is not: our Pressure is the yield curve, a FORECAST, and "flat curve
plus fast velocity implies a small money stock" is not a relationship anyone could defend. The rule this
is built on instead: a combination must hold in economics, not only in anatomy — the body is how an
insight is EXPLAINED, never how it is derived.
This one is an identity, so it cannot be wrong: M×V = P×Y. Volume IS M, Pulse IS V, and their product
is nominal demand — which the Pulse page's own caption has said all along. Every figure below is read
off the series it describes; nothing is asserted that the app cannot check. There is deliberately NO
state colour: whether money growing and circulating faster is good or bad is a judgement about
inflation, and this card's job is to say what the two readings are doing together, not to grade it.
~~~

### V453

`styles.css` line 1204, before `.insights{ margin-top:var(--gap); padding-top:var(--gap); bo…`

~~~text
Version 452: the first COMBINED reading. It sits under the category's rows because it is what they say
together, and it takes the Highlights treatment because it is the same kind of thing — a sentence about the
figures above it, not another figure. Version 453, Keren: "instead of Together, write Insights like the
rest of the app." Her word for this family, and hers since Version 379 ("use it for the insights across the
inner pages"); the section was already wearing the app's own .hi-head and .hi-card, so only the name was
out of step.
~~~

### V454

`js/07-forms.js` line 265, in or after `ecgSvg`

~~~text
Version 454, Keren: "instead of Blood call it Circulation, and change the icon to what I attached —
simplify it to match our design system." Her reference is a two-tone coin inside a ring of arrows; simplified
here to the app's own terms — one 24 box, no fills, no second colour, 1.9 stroke, round joins. Four
candidates were drawn and looked at, and Version 455 took the simplest: the ring alone (Keren, with a
second reference: "simplify it to be just this without a dollar inside"). The worry about it was that a
bare ring of arrows reads as "reload" — which it does in isolation, and does not beside a row labelled
Circulation with four readings named under it. The label is doing the work the $ was doing, and one glyph
saying one thing is the better trade. The drop goes back to Volume alone, where it belongs.
~~~

### V456

`js/07-forms.js` line 286, in or after `weatherSvg`

~~~text
Version 456: Keren's spiral replaces the circle-and-swing of Version 446. Ten quarter-turn arcs of easing
radius rather than a sampled polyline, so it stays one short path and is smooth at any size. 2.5 turns to
match her reference; the centre stops at r=1.6 rather than running to a point, because at 22px — the size
it actually renders at on the Browse row — a tighter spiral closes into a blob. Checked at 15, 22, 30, 44
and 110.
~~~

### V457

`js/07-forms.js` line 303, in or after `moodSvg`

~~~text
Sentiment's mark, Version 457 (Keren, with the glyph): three waves, where a face in five expressions stood
from Version 244. The face was the one mark in the set that carried the VERDICT rather than the subject — it
frowned or smiled with the reading, which is the Version 301 rule the piggy bank failed and the diamond fixed.
Waves name the subject: sentiment is a swell that arrives and passes, and the word beside it does the grading.
Two half-waves, three lines 5.4 apart, amplitude 1.4 — measured, not chosen: a taller wave closes the gap
between the lines and the three run together at 15px, which is the size a row mark is actually read at.
~~~

`js/07-forms.js` line 312, in or after `moodSvg`

~~~text
Energy's mark, Version 457 (Keren: "activity should be renamed to energy — the icon needs to embody energy").
A bolt: the one glyph in the set with no curve in it, which is how it stays apart from the flame and the drop
at 15px. It is drawn as an outline like every other mark, not the solid bolt of a charging indicator, because
Power's battery sits directly below it in the same list and a filled bolt would read as that battery's state.
~~~

`js/12-pages-nav.js` line 746, in or after `colClass`

~~~text
Version 457, Keren: "economic power should move from circulation to activity, and activity should be
renamed to energy." It settles what Version 446 left uneasy, where Power joined Circulation on the
argument that reserves are how much blood the system is holding — true of the metaphor, and the wrong
cut of the economics. Energy is the honest pair: Power is the reserve she has, Activity is what she is
spending it on, and the app has read them as one thing since Version 228, where Power's own word comes
off an energy scale (Energetic, Steady, Tired, Exhausted). It also gives Activity what it lacked as a
category of one — a second member, so Energy is a list like the other three rather than a shortcut.
~~~

### V459

`styles.css` line 1248, before `.ci-mini{ flex:0 0 var(--mini-w); width:var(--mini-w); min-w…`

~~~text
Version 459, Keren, measuring Apple Health beside us: "the infographic is small and below the date, so
it's not like there's a lot of white space in the container." Measured off her screenshot, on a 350px card:
Apple's miniature is 76—85px wide and about 50 tall, flush to the card's leading padding — 22—24% of the
card's width, never more, and a ring is 48. Ours took whatever was left, which on Valuations was 196px:
the same thirteen columns spread over two and a half times the room, so the picture read as mostly paper.
A miniature is a THUMBNAIL of the page behind it, not a chart in its own right; at this width it is dense,
and the white space that is left sits in one place between the reading and it, which is where Apple's is.
~~~

### V460

`js/07-forms.js` line 377, in or after `umbrellaSvg`

~~~text
---------------- Load: what households owe, and what they keep (Version 460, Keren) ----------------
Keren, after reading Wild Power: the book's chapter on ARMOURING says the skin thickens on the way up
— resilient to life's slings and arrows, and less connected to what is actually happening — and is shed
on the way down, when everything gets through; then the inner critic arrives in the autumn and calls you
to account for what you did with your life force. In an economy that is leverage. The app measured the
PRICE of credit (Pressure's term structure, Desire's spread) and the QUANTITY of money (Volume) and
never the STOCK of what is owed, except the government's, which sat inside Power.
Both readings here are shares of the SAME denominator — disposable personal income — so they belong on
one axis and one clock. That is the whole reason the page draws them together rather than as two charts
on two scales, which would invite a comparison the reader would have to do in their head.
DEBT SERVICE is the Federal Reserve's DSR on its credit-bureau basis (FRED TDSP). That series begins in
2005 Q1 and not 1980: the Board rebuilt it in September 2024 on tradeline data, which is when payment
data on every tradeline type became available, and the new measure reads consistently higher than the
old one because it includes escrow — property tax, insurance, mortgage insurance. So 15.85% in 2007 Q4
is THIS series' own peak and is not the 13.2% the retired series used to print; the two are not
comparable and the app never puts them in one sentence.
SAVING is BEA's personal saving rate (FRED A072RC1Q156SBEA), quarterly, kept in full from 1947, because
the reading this page makes is about the record — twelve quarters in eighty years have been this low —
and a claim about the record has to be checkable against the record.
REFRESH: TDSP quarterly, about ten weeks after the quarter; the saving rate monthly with BEA's Personal
Income and Outlays, so its quarter closes a month after the quarter does.
~~~

### V462

`js/12-pages-nav.js` line 753, in or after `colClass`

~~~text
Version 462, Keren: "we don't need a new category named Load — stress is connected to energy, so put
a debt service page inside Energy." Version 460 had split them, and she is right that it was a split of
one idea: `energyFromReserve()` takes the fiscal STRESS score and inverts it, so Power's word is
computed FROM the debt markers. A Load category would have shown a verdict in one box and its own
inputs in another — the fault Version 446 named when it refused to call this box "Season", because
the dial already is the season.
So Energy holds the whole reading: how much is left (Power), what is owed (Debt service), and what
the energy is going into (Activity's page, absorbed whole as in Version 458). The federal three stay
on Power's page, where they are computed into its word; Debt service carries the household side,
which is a balance sheet nothing in the app had measured.
~~~

### V463

`js/12-pages-nav.js` line 611, in or after `colClass`

~~~text
Households (Version 460). Two numbers in one row, the way Pressure carries 10Y and 3M: the bill and
what is left, on the same denominator, so the reader gets the pair at a glance and the page explains it.
Version 463, Keren: "debt service is too general — there is government debt service and household debt
service." Right, and the name was under-describing it twice over: the row carries what is PAID and what is
KEPT, and only saving answers to nobody. Households is what the page is about.
~~~

### V464

`page-body.html` line 430, before `</section>`

~~~text
Version 464/466: the two markets the index is built from used to sit here as rings. The high-yield
spread went for good — it is Desire's own figure, and was tagged good there and warning here (Keren:
"is it the same thing? If so, unite it"). The VIX left in 464 and came back in 466 as a reading rather
than a ring: it is one of the index's seven components, so it belongs under the gauge and not beside
it. A dashboard of rings became a gauge and the one market worth reading next to it.
~~~

`js/06-charts.js` line 70, at the top of the part

~~~text
Version 464, Keren: "sentiment is mood — I don't need another subcategory named sentiment. I want to see fear
and greed, and I want to see the VIX." Right on both counts. A category called Mood holding a member called
Sentiment was the tautology Version 446 refused for Season, and once the high-yield spread left this page as a
duplicate of Desire, what remained inside it was the published index and the VIX — a wrapper around two
readings. So both come out onto Mood, and the VIX gets what every other reading has: a page.
The reading is shaped like an indicator so it can use the page builder every sign uses; the word comes off the
meter's OWN band ends, so the word and the bar under it can never disagree.
~~~

### V465

`js/07-forms.js` line 309, in or after `moodSvg`

~~~text
V465's half-dial was Fear & Greed's mark until V524 gave that row the heart. Nothing draws it now, so it
is out rather than kept "in case" (Keren's standing rule: lean, dry, efficient code). Its three paths are
archived under V524 in gyneconomy-version-archive.md, so bringing it back is a lookup, not a redrawing.
~~~

### V466

`js/12-pages-nav.js` line 739, in or after `colClass`

~~~text
Version 466, Keren: "the VIX is called the fear index — we don't need two fear meters on the Mood
page, so put the VIX inside Fear & Greed." Right, and the stronger form of it is that the VIX is one
of the index's SEVEN COMPONENTS: a part cannot be the peer of its own composite, which is the rule
that moved Power's markers off this kind of list twice already. Version 464 promoted it out of that
page; this puts it back, as a reading under the gauge rather than the ring it used to be.
~~~

### V467

`js/06-charts.js` line 82, in or after `vixWordOf`

~~~text
Version 467, Keren: "the VIX is called the fear index — I think it's more appropriate than the price of
protection." It is the market's own name for it, and a reading should wear the name its readers use.
~~~

`js/07-forms.js` line 338, in or after `sunriseSvg`

~~~text
The VIX's mark, Version 467 (Keren, with the idea): an umbrella in the rain. It replaces the shield of
Version 464, which said protection but not weather — and this app reads the economy as weather, so the one
reading about buying cover against a bad day should look like a bad day. Four candidates were drawn: slanted
drops read as motion rather than rain, and a scalloped canopy with no drops is just an umbrella. Three short
verticals under a wide canopy is what reads as raining at the size this actually renders.
It sits on the Fear & Greed page rather than in a row beside Weather's sun-and-cloud, so the two never meet.
~~~

### V468

`js/12-pages-nav.js` line 946, in or after `f1`

~~~text
================= Version 468: the barometer =================
Keren, reading the app's own record: "total growth and total change in prices are equal at the end of each
cycle, more or less — I think it can be a good barometer in the weather page." Checked against the five
cycles before building anything, which changed the shape of it: they do finish close (Big Tech 17.0%
against 17.2%), but the equality is not the reading — the GAP is, and it has widened in each of the last
two cycles. So this card measures the distance between them and says which way it leans.
Her word, kept: a barometer reads pressure to say which way the weather is going, which is exactly what
two totals pulling apart do. The card is named for the instrument rather than for its verdict, unlike
Circulation's, because the instrument is the point she asked for.
Nothing here is typed. Both totals use the page's OWN methods — totalGrowthYears compounds the annual
real-GDP rates, totalRiseIn compounds the Decembers — so the figures are the same ones the Growth and
Temperature pages print, over the same closed years, and the ranking across cycles is computed from them.
It carries no state colour, for the reason Version 452 gave: whether prices outrunning output is good is a
judgement about what comes next, and this card's job is to say what the two are doing together.
~~~

### V470

`js/09-render-core.js` line 630, in or after `hide`

~~~text
Version 470, Keren: "the maturity ladder needs to become a control." It was five cards carrying an icon, a
name, today's rate and a caption apiece — four pieces of furniture each to do one job, choose the line below.
As segments it is one row, and the room that frees is what let the SPREAD move into this band as a sixth
segment instead of standing in a second container with a second chart, a second legend and a second copy of
the figure. The rates the cards carried are not lost: they are what the chart plots.
~~~

### V471

`js/10-render-pages.js` line 245, in or after `deriveUninversionDetail`

~~~text
Version 471, Keren: "instead of Insights and Highlights, just put time from un-inversion above Fed funds
target — inside the lines, with how long it has been on the right, and the (i) for the table." Version 470
gave this a paragraph in an Insights card and a second section above the facts; she is right that it did not
need either. It is a fact with a figure, which is the row `.aux-stat` already is, and the argument behind it
— four cycles, one to ten months, what today's count is measured from — was always in the (i). The page ends
on one list of five facts and no prose at all.
~~~

### V472

`js/06-charts.js` line 212, in or after `lastN`

~~~text
Version 472, Keren: "cycles | years | yields". Pressure's band had a window ruler and a maturity ruler on
screen together, both reading as durations — "5Y" and "10Y" meant two different things a centimetre apart.
The mode bar is where that division belongs: two of the tabs choose a WINDOW on the spread, the third
chooses the yield levels and brings the maturities with it, so only one ruler is ever on screen.
`extra` is how a page adds a tab without every other page growing one.
~~~

### V473

`page-body.html` line 306, before `<details class="subject" data-subject="horizon">`

~~~text
====== HORIZON — Version 473 ======
Keren: "calling it Horizon and judging if it's optimistic or pessimistic, which correlates with ovulation
and menstruation — so it belongs to Mood."
She is right, and it settles an argument that had gone three ways. Version 470 asked whether the spread
should leave Pressure for a forward-looking tab of its own; she said leave it in Circulation. Then the
blood-pressure question reopened it: pressure is resistance to flow, so the economic analogue is the LEVEL
of interest rates — 4.96/4.17 written exactly the way a cuff writes 120/80 — and the gap between the two
levels is not a pressure at all, it is a forecast. My objection to a fifth category was that it would hold
one reading. Her answer removes the objection entirely: Horizon is not a category, it is Mood's fourth
MEMBER, and Mood is already the room where the market's feelings are kept. Valuations is what it will pay
for a dollar of earnings, Fear & Greed how frightened it is today, Desire how much risk it craves — and
Horizon is what it expects of the future, the one reading on the page that routinely disagrees with the
other three. Today it does: Fear & Greed reads 36, Fear, while the curve reads optimistic.
The page is the spread's own machinery, MOVED rather than rebuilt (the Version 314 rule, for the fifth
time): the same svg, the same tooltip, the same `drawSpreadWindow`, the same un-inversion panel. What is
new is the verdict word and the reason for it — see `horizonWord`, which refuses to read a steepening as
optimism without asking which end did the steepening.
~~~

`js/12-pages-nav.js` line 725, in or after `colClass`

~~~text
Version 473, Keren: "calling it Horizon and judging if it’s optimistic or pessimistic, which
correlates with ovulation and menstruation — so it belongs to Mood." The fourth member, and the one
that makes this page an argument rather than a list: Valuations is what the market will pay for a
dollar of earnings, Fear & Greed how frightened it is today, Desire how much risk it craves — all
three about NOW — and Horizon what it expects of the future. Today they disagree, which is the point:
36 and Fear beside a curve reading optimistic.
~~~

### V475

`js/04-components.js` line 695, in or after `row`

~~~text
================= Version 475: Desire's own record =================
     Keren downloaded the ICE BofA high-yield OAS from FRED (BAMLH0A0HYM2) so this reading could have a picture
     at last — it was the only member of Mood with a figure and nothing behind it.
*It is three years, and that is the most anyone can get.** ICE licenses the series to FRED on a rolling
     three-year window, so the record low (2.41%, June 2007) and high (21.82%, December 2008) survive as CITED
     FACTS on the meter's scale and cannot be drawn. The chart says its own span; the meter says the record. Do
     not "fix" the gap by inventing the missing years.
     DAILY, not quarterly — the one series in the app kept at that grain, and deliberately. Desire is the fast
     reading ("libido peaks at the fertile window itself — a real-time reading, not a forecast"), and quarterly
     averaging would erase the only shock in the window: April 7, 2025 touched 4.61% and was back under 3.8% four
     weeks later, which a Q2 average of 3.5 hides completely.
     REFRESH: this is a DAILY item, but appending one value per night would grow the file without end. Leave it;
     the row's own figure is what the nightly task refreshes. Re-download and replace the whole block when the
     picture has drifted far enough to be worth it — roughly once a quarter.
~~~

`js/04-components.js` line 1073, in or after `fmt`

~~~text
Version 475: Desire's history. Built on `velocityHistoryChart`'s frame — same axes helper, same plate
rule, same hover geometry — because a sixth history that invented its own would be the inconsistency
Keren named in Version 411. What is its own: the shaded 4–5% band, which is the reading. The meter calls
that band typical and the line visits it on 49 of 787 days; drawing it is the difference between the page
asserting "she is in the mood to take risk" and the page showing it.
~~~

### V476

`js/04-components.js` line 1146, in or after `fmt`

~~~text
Version 476, Keren: "the test result component can live inside the history component — you have the
cycles/years bar and below it the test result, and the low and high would correlate with the low and high of
the chosen period."
This finishes a move she started twice before. V384, of Pulse: "the history container first, the blood test
below it." V390: "and it should have a white container just like the power page." Both put the reading NEXT
to its history; this puts it INSIDE, which is the version that lets the two agree — the bar's left end is
the Tightest row, its right end is the Widest row, its dot is the Latest row, and one control moves all four.
WHY IT MATTERS HERE MOST: Desire's bar was scaled to the record, 2.41% (2007) to 21.82% (2008). Today's
2.73% therefore sat 1.6% along the track and the 4–5% band occupied 8–13% of it — everything the reading
is about crushed into the left tenth, and 87% of the bar standing for one month of 2008.
THE ONE THING THAT STAYS ABSOLUTE is the optimal band. The track's ends follow the window; 4–5% does not,
so it runs OFF the end of the track when the window never reaches it. That overflow is the reading, not a
rendering fault — `clampPct` keeps it on the bar and the honest part survives: a window-scaled bar can no
longer say "outside the historical range", because by construction the dot is always inside the track. The
record extremes keep their place in the note, where they are cited rather than drawn.
~~~

### V478

`styles.css` line 1509, before `.wb-read{ font-family:"IBM Plex Mono",monospace; font-size:2…`

~~~text
---------- Version 478: the reading, on the shape of the blood-panel design Keren sent. Title, then the
figure directly under it, and the figure goes AMBER when it sits outside the normal band — the panel's one
piece of colour, carrying "this one is not where it usually is" without a second word. It wears the same
`--warning-ink` — the text-legible member of the pair the dot on the track wears — so the number and the dot
flag together and neither can be read as a different state. The Version 477 window
bar and its four pinned labels are gone with it: the ends are words now, so the composition collapses back
into `meterHtml`, which every other bar in the app already uses. ----------
~~~

### V479

`styles.css` line 1519, before `.pbar-labels{ display:grid; grid-template-columns:1fr auto 1…`

~~~text
---------- Version 479: the panel bar. Keren: "if there's a normal range, I would want to see it in a
consistent way." The window-scaled track could not give her that — the green band moved with the stop,
shrank with it, and on the 1Y view vanished off the end entirely. This is the clinical panel's own answer,
and the reason every blood report is drawn this way: the track is THREE FIXED SEGMENTS, low | normal | high,
so the green is in the same place on every reading and the bar can be read at a glance without first
reading its scale. The value's position inside its own segment still carries the arithmetic. ----------
~~~

`js/04-components.js` line 1161, in or after `fmt`

~~~text
Version 479. Three equal segments with a 3% gutter, the proportions the panel Keren sent uses. The value
lands in the segment its band membership puts it in and sits inside that segment at its own fraction of it,
so 2.73% against a 4–5% normal reads as "a tenth of the way up from the three-year floor to normal" rather
than as a point on a scale the reader has to decode first. `floor` and `ceil` are the series' own extremes,
widened so the outer segments always have a range to express — never the window's, because a bar whose
geometry moved with a control would be the inconsistency this replaced.
~~~

`js/05-history.js` line 251, in or after `meterFlagged`

~~~text
Version 479, Keren: "put an (i) next to Risk tolerance, drop the credit in parentheses — we can put it in
the (i), and High appetite can be in the (i), and the high-yield OAS line can be in the (i)." Everything the
head was carrying except the name of the reading. What is left on the page is what the panel she sent shows:
a title, a figure, a spectrum.
~~~

`js/05-history.js` line 406, in or after `desireBlock`

~~~text
Version 479, Keren: "the entire test result component in a grey stroke container like we used to have."
TWO containers again, and the split is finally the honest one: the first is the RECORD (a control and a
picture of a window), the second is the READING (a figure against its normal range). Version 477 folded
them together because the bar was window-scaled and belonged to the window; now that the bar's geometry is
fixed, it belongs to the reading, and a control sitting above something it does not govern would be a lie
about what the control does. It restores the V384/V390 order Keren set on Pulse — history first, blood
test below it in its own box — which this page had been the exception to for two versions.
The chart container carries NO head: the control names the window, the trend pill names the movement, and
the reading below names the number. The head it had was the third statement of a thing already twice said.
~~~

### V480

`js/04-components.js` line 709, in or after `row`

~~~text
Version 480, Keren: "what makes four to five percent normal?" — and the honest answer was NOTHING. 4–5
entered the app as an `aux` row reading "Long-run average ~4–5%", a rough figure never sourced, and Version
478 promoted it to a NORMAL RANGE and printed the word on the bar. The number was not wrong — it brackets
the long-run median of about 4.5% — but the page was asserting a precision it had not earned, and its lower
edge called 3.8% tight, which nobody in the credit market would.
These two are the market's own documented breaks instead: **below 3.5% is complacency** and **above 6% is
stress**, with the 1996-on median (~4.5%) sitting inside. Both ends are citable, which the old pair never
was. Keren chose them over keeping 4–5 and merely footnoting it.
CHANGING THESE CHANGES WHAT THE APP ASSERTS — they are not a display constant. The (i) states them, their
sources and the wider regime scale; move one and that text moves with it.
~~~

### V481

`styles.css` line 1530, before `border all across just like the trend button." A hairline sa…`

~~~text
---------- Version 481: one row, the way the panel Keren sent lays a marker out — the name and the figure
in a column on the left, the spectrum filling the rest. It is what makes a panel scannable: every marker's
track starts at the same x, so the eye runs down the dots rather than re-finding the bar on each line. The
type steps down to pay for it ("it's okay if the text is a bit smaller"), and the card is one row high. ----------
~~~

### V482

`js/05-history.js` line 420, in or after `desireBlock`

~~~text
Version 482, Keren: "the trend button above the blood test result, and both inside the history
container." One box, read top to bottom: what window you are in, the picture, how it has moved, and
where it stands now. The reading gives up its own border and takes a hairline instead — which is how
the panel Keren sent separates its markers, and the right weight for a divider INSIDE a card rather
than a second card butted against the first.
~~~

### V483

`styles.css` line 1534, before `border — which is how the panel Keren sent does it, and the …`

~~~text
Version 483, Keren: "no divider line — a container sort of a look inside the history panel, with the
border all across just like the trend button." A hairline says "the same thing continues below"; a box says
"this is its own reading", which is what it is. It takes `.spread-tile`'s spec rather than a new one (the
V311 rule) and the trend pill's radius and full width, so the two stack as a pair: the lavender one is an
action, the white one is a reading. Version 484 took the fill to `--surface` (Keren) — `.spread-tile`'s
`--surface-2` reads as a well sunk INTO the card, and this is a panel sitting ON it. Side padding is 16px rather than the pill's 22px — the pill holds two
words and this holds a track that needs the room.
~~~

### V486

`js/04-components.js` line 492, in or after `at`

~~~text
Version 486, Keren: "when I hover over a bar I also want to see the values of the purple line and the
dashed purple line — in the default view I don't see their values, but on hover I can." So the chart
stops printing its reference values permanently (the inline key is gone from both) and hands them to
the readout instead, where they appear only when a reader is actually comparing something to them.
The bar's own value keeps full strength; the references are dimmed and carry their line's own mark, a
solid rule or a dashed one. Colour cannot do that job here — the tooltip inverts against the page, so
it is dark in light mode and light in dark — which is why the marks differ by SHAPE.
~~~

`js/05-history.js` line 236, in or after `panelFromMeter`

~~~text
Version 486, Keren: "I don't need the words 'her pace' — and maybe not even 'normal', because it
is implicit from the structure that green is normal." Right: a three-segment spectrum with the
band lit says what the band is without naming it, and the word was competing with the figures
for the narrowest column on the row. The word does NOT disappear from the app — it carried each
band's KIND (Pre-2008 rather than normal, a target rather than an observation) and that
distinction now lives in the (i), which is where the provenance went in Version 480.
~~~

### V487

`js/04-components.js` line 900, in or after `valRow`

~~~text
Version 487, Keren: "just write money velocity, and put the M2 data inside the info — I see it's
already there." It is: the (i) opens on "nominal GDP divided by M2". The parenthetical was the kind of
precision that belongs one tap in rather than in a name a reader meets first.
~~~

### V488

`styles.css` line 1541, before `.panel-stack{ padding:2px 16px; }`

~~~text
Version 488: a card holding SEVERAL readings separates them with hairlines rather than giving each its own
border — which is how the panel Keren sent does it, and the right weight for a divider between siblings
inside one container. A single reading inside a history panel still gets the box (Version 483).
~~~

### V489

`js/04-components.js` line 597, in or after `fmt`

~~~text
Version 489, Keren: "when I hover over any chart I want to see the average and the dashed line — in ALL
the charts. One component, one source of truth: if I change it in one part of the app it changes in the
others without my asking." She is right, and the page-by-page rollout was exactly the drift she is
naming. Every history now hands its reference lines to the readout the same way — `refs` on the geometry
— and the inline key that printed those values permanently is gone from all of them.
~~~

### V490

`page-body.html` line 120, before `</div></div>`

~~~text
V490: the reading, below the trend pill and inside the history container — the order Keren set
on Desire in V482 and every history page has carried since V485.
~~~

`page-body.html` line 253, before `</section>`

~~~text
Version 490: the last lab TABLE becomes a panel, as Power's did in Version 488. Version 491 moves
it inside the history container, below the trend pill (Keren) — see the renderer.
~~~

`js/07-forms.js` line 291, in or after `weatherSvg`

~~~text
Version 490, Keren, with the glyph: waves, where a spiral stood since the categories were built. The
spiral drew a FEELING — an inward coil that reads as vertigo, or as a hypnotist's disc — and named no
subject; Mood's four members (Valuations, Fear & Greed, Desire, Horizon) are all readings of a swell that
arrives and passes, which is what waves say. It is not a new mark either: Version 457 drew three waves for
Sentiment on exactly this argument, Version 465 gave that row the dial it is published as, and the waves
have been unused since with the reasoning for them untouched. Two half-waves a line, three lines 5.6 apart,
amplitude 1.7 — measured at 15, 22, 44 and 96 against V457's flatter 5.4/1.4: 1.7 is the most amplitude
the mark takes before the lines close on each other at 15px, the size a category row is read at.
~~~

### V491

`page-body.html` line 198, before `</section>`

~~~text
Version 488: the lab TABLE becomes a lab PANEL — four readings stacked, each one name and figure
on the left and its spectrum on the right, which is the shape of the blood panel Keren sent and the
reason a clinical report is readable at all: every track starts at the same x, so the eye runs down
the dots. The table's three column headings go with it; a row that says "Marker", "Reference range"
and "Flag" in its own layout does not need them announced.
Version 491, Keren: "the power supply and all the derivatives below the trend button inside the
history component." The host leaves this section for the chart's own container; what stays here is
the drawer skeleton, whose head this page has had hidden since it became a sheet.
~~~

`js/12-pages-nav.js` line 1268, in or after `actCycleMonths`

~~~text
V491, Keren: the readings come inside, below the trend. Four of them, so hairlines rather than four
boxes (the V488 rule); one reading in a history container still gets the box, as Temperature has.
~~~

`js/12-pages-nav.js` line 1377, in or after `tickFmt`

~~~text
V436: likewise \u2014 the reading's own tag is already on the page
V491, Keren: Buffett and CAPE come inside, below the trend (see Power's renderer for the note)
~~~

### V492

`page-body.html` line 146, before `<div id="gdp-panel"></div>`

~~~text
V492: the reading, below the trend and inside the history container (Keren)
~~~

`js/05-history.js` line 923, in or after `fmt`

~~~text
Version 492, Keren: "the growth history doesn't have a blood test component." It had none because there is
no published normal range for how fast an economy grows — so the band is COMPUTED from this page's own
series, which is Volume's construction (V485) and the only honest one available: the 10th to 90th
percentile of the 154 quarters from 1988 Q1, 0.96% and 4.34%, rounded to a tenth. The ends of the track
are the record itself, and both ends are one event: −7.4% in 2020 Q2 and +12.4% in 2021 Q2.
~~~

`js/06-charts.js` line 1180, in or after `pick`

~~~text
Version 492, Keren: "Horizon doesn’t have a test result." The only band in the app that is definitional:
zero is where an upward-sloping curve becomes an inverted one, not a level anyone picked. One-sided,
because a steeper curve is not a worse curve — a two-sided band here would flag the healthy end as a
condition, which is the fault Version 488 found in the fiscal markers. The track’s ends are the quarterly
record the chart itself draws, so the bar and the picture describe the same series.
~~~

`js/07-forms.js` line 432, in or after `householdsWord`

~~~text
Version 492, Keren: "households don't have test components." Two readings, so two rows — and two bands
built the two ways this app already uses. The bill is ONE-SIDED at the series’ own mean, which is not a
new number: `householdsWord` above has used DSR_MEAN as its "heavy" line since this page was built, so the
bar now draws the line the word was already using and the two cannot disagree. The cushion takes the
percentile construction, on a series that runs back to 1947 — 318 quarters with no policy floor anywhere
in them, which is exactly what the 10-year lacks.
~~~

### V493

`styles.css` line 1553, before `.panel-stack.in-hist{ background:var(--surface); border:1px …`

~~~text
Version 493, Keren, of Valuations and then Households: "in a container with a stroke around it, like the
other designs of history tabs — still inside the history container, but with its own framing." The GROUP
is one reading-object and takes the box; the siblings inside it keep their hairlines (V488). Version 491
read those two rules as one and left the group with no edge at all. It takes `.panel-row`'s own box spec
rather than a new one (the V311 rule) and the same margins, so a stack and a single reading sit in exactly
the same place under the trend pill — which is what makes Power, Valuations, Households, Temperature and
Desire read as one page shape rather than two.
~~~

### V494

`js/04-components.js` line 857, in or after `by`

~~~text
Version 494: the rows are addressed by NAME. Six places read `valuation.rows[0]` and `[1]`, so reordering
them for the page (Keren: "Shiller CAPE above the Buffett indicator, because that is what the chart draws")
would have swapped one reading for the other in five of them without erroring — the V473 roster bug's own
family. `valRow` is the only way in now, and the array order is free to follow the page.
~~~

`js/06-charts.js` line 643, in or after `fmt`

~~~text
Version 494, Keren: the latest reading no longer sits in the chart's top corner — the panel row below
states it, in bigger type, beside the band it is being read against. It was the V477 rule again: a figure
the page says twice, once where it can be compared and once where it cannot.
~~~

`js/06-charts.js` line 986, in or after `y`

~~~text
Version 494, Keren: the latest reading no longer sits in the chart's top corner — the panel row below
states it, in bigger type, beside the band it is being read against. It was the V477 rule again: a figure
the page says twice, once where it can be compared and once where it cannot.
~~~

`js/12-pages-nav.js` line 1165, in or after `yoyPairs`

~~~text
Version 494, Keren: "total price change 16% — in the Highlights component." The NAME is the
considered part and travels with the figure: the BLS's own primary descriptor for what the CPI
measures is "price change", direction-neutral by design, because inflation and deflation are the
directional pair and neither can label a figure that may be either — quite apart from Inflation
being a season here. ("Cost of living" is warmer but the BLS cautions the CPI "differs in important
ways" from one; "change in the price level" is the textbook phrase and is jargon here.) Version 429
cut it to "Total" because the page was named Temperature two lines above; in Highlights it is a row
among sentences, so the full name comes back — which is what Keren asked for.
~~~

`js/12-pages-nav.js` line 1197, in or after `yoyPairs`

~~~text
Version 494, Keren: "total growth 11% — in the Highlights component." The one figure this page's
register had been reduced to, said as a fact row where the words around it are.
~~~

### V495

`styles.css` line 2643, before `space below it." The border is the V483 rule one component l…`

~~~text
---------- Version 495: the readout, above the chart (Keren, from Apple Health). Its height is FIXED, so
the page cannot move when the contents change — which is the whole reason this beats a tooltip. Resting,
it states the window's average and span; under a finger, that reading and its date. Left-aligned, which is
where Apple puts it (her screenshot is a Hebrew build, so it reads on the right there and on the left
here). ----------
~~~

`js/04-components.js` line 499, in or after `at`

~~~text
Version 495: the readout is the block ABOVE the chart now (Keren, from Apple Health), so the reading
and its references go there and nothing is drawn over the bars. The crosshair and the lit column stay:
they say WHERE, which is the one thing a block above the picture cannot.
~~~

### V496

`js/10-render-pages.js` line 124, in or after `fmt`

~~~text
Version 496, Keren: "I prefer bars, because you can colour the bars and have more meaning in the
colour." Here that is not only consistency — the whole reading of this series is which side of zero a
quarter falls on, and a column standing out of the zero line says that in its length and its colour at
once. The area fill said it too, but a fill has no per-quarter unit: nothing to hover, nothing to light
up, and nothing to carry the `.hcol` class every other history's hover depends on.
~~~

### V497

`styles.css` line 2648, before `the total revenue has a number, and below it a disc showing …`

~~~text
Version 497, Keren: "in a grey stroke border, aligned to the left edge of the graph — and there's too much
space below it." The border is the V483 rule one component later: the trend pill and the reading both have
an edge, and this was the last thing in the container still floating. `.panel-row`'s spec again (V311).
The 22px left inset is the chart's own gutter — the plot frame sits padL units in and the chart host bleeds
14px past the container padding, which lands within a pixel or two for the L = 32/34/38 these charts use.
The `min-height` floor is gone: it existed so the block could not collapse as its contents changed, and a
bordered block cannot collapse.
~~~

`js/12-pages-nav.js` line 19, in or after `renderSignsList`

~~~text
Version 497, Keren: "make the activity page more like the power page, where you have an aggregate of
indicators below the main chart — the main chart should be the labor market." Three readings that had
been in two different components on one page: the labour market as a panel row, Productivity and
Industrial output as `.folded-sign` blocks still wearing `meterHtml`'s `.rbar` track, which every other
page gave up between V479 and V492. One stack, in the order she named.
~~~

### V498

`js/05-history.js` line 561, in or after `volumeVerdict`

~~~text
Version 498, Keren (downloading the series herself): the unemployment rate, monthly, seasonally adjusted,
from January 1948 — 944 months, the deepest record any chart in this app draws. It confirms rather than
changes what this page already said: 2.5% in May 1953, 14.8% in April 2020, 4.1% in August 2026.
ONE GAP, kept as a gap. October 2025 has no reading — not a transcription slip, the month BLS did not
publish — so it is encoded "x", drawn as nothing and left out of every average. Joining the picture across
it would be the app inventing a figure for a month the government did not measure.
~~~

`js/12-pages-nav.js` line 35, in or after `byTerm`

~~~text
Version 498: the aggregate now sits under a chart, which is what Keren asked for in V497 and what the
page could not have until the series existed. Power's own order, part for part: the control, the
readout the hover fills, the picture, the trend across the window, then the readings.
~~~

### V500

`styles.css` line 1355, before `.hh-bill{ fill:none; stroke:var(--accent); stroke-width:2; s…`

~~~text
Version 500: both readings are columns now (Keren: "make sure all the charts are bars"). The two classes
keep their colours, because the key beside the chart names them by colour and a reader who has learned
which is which should not have to learn it again. `.hh-bill`/`.hh-kept` stay as strokes for the legend's own
swatches, which draw a short line rather than a column.
~~~

`js/04-components.js` line 1034, in or after `fmt`

~~~text
Version 500, Keren: "make sure all the charts are bars." Velocity lives between 1.1 and 2.2, so columns
out of zero would spend two thirds of the plot on a region the series never visits and flatten the one
thing worth seeing. The app's own answer for a level that does not start at zero is Valuations' diverging
bars, which hang off a midline that carries its own label — and here that midline already exists and is
already named: the pre-2008 mean. So each column says how far its quarter sits from the era that ended,
which is what this page is about.
~~~

`js/04-components.js` line 1102, in or after `fmt`

~~~text
Version 500: the shaded band goes with the line it was drawn for. It existed so a reader could see which
SIDE of the band the line was on; a column coloured by the band says that and how far, one reading at a
time, and the row below still names the band in words. Two drawings of one fact, and this is the one
Keren asked the app to standardise on.
~~~

`js/04-components.js` line 1132, in or after `fmt`

~~~text
Version 500: columns out of zero, coloured by the band (Keren: all the charts are bars). At Max these are
787 daily closes and each column is about a pixel — which is what the 944-month Activity chart already
does, and it reads as a dense picture rather than as a chart with nothing in it.
~~~

### V501

`styles.css` line 1291, before `.all-row .subject-summary{ padding:9px var(--pad); }`

~~~text
Version 501, Keren: "make the all-indicators container half height and remove the second line, so it
doesn't look like a category — it looks like a more button." A category card is a SUBJECT: a badge, a name
and its members. This row is the way OUT of the list, which is the job "More details" does at the foot of a
page, and dressing it as a peer of the four subjects above it was the mistake. Half the height comes from
the two things that made it a card: the 64px badge becomes a 30px glyph, and the padding follows it down.
It keeps the list's surface and border, because it is still a row IN the list.
~~~

`js/12-pages-nav.js` line 1030, in or after `spell`

~~~text
V501: not `cat-row` — this is not a category, and the class it wore was the reason it looked like one.
V501, Keren: the members line went. It was what made this read as a fifth category — the four above it
list their members because a member is a place you can go; these four words are a taxonomy, and the
page behind this row explains it better than a subtitle can.
~~~

### V502

`styles.css` line 1154, before `.browse-list{ display:grid; grid-template-columns:1fr 1fr; g…`

~~~text
Version 502, Keren: "make Weather top left, Mood top right, Circulation bottom left, Energy bottom
right." The four are placed EXPLICITLY rather than reordered in the DOM: the source order is the taxonomy's
(Weather, Circulation, Mood, Energy) and the roster, the category sheets and the All-indicators page all
read it, so the layout rearranges the picture and leaves the meaning where it is.
~~~

### V503

`styles.css` line 32, before `--mark-wash: #e3dacd;`

~~~text
Version 503, Keren: "I want this background to be a little less pale." The mark's badge had been wearing
`--track`, which is the colour of an EMPTY METER — chosen to disappear under a filled bar. A badge is
doing the opposite job: it has to read as a shape holding a glyph. Its own token, one step deeper, so
the meter tracks keep the contrast their green bands need.
~~~

`styles.css` line 1185, before `.browse-list > .cat-row .subject-more{ display:none; }`

~~~text
Version 503, Keren: "I don't need the chevrons on the home page." A chevron earns its place on a
full-width ROW — the strip is wide, the whole of it is the target, and the mark says which edge to reach
for. On a tile the card itself is obviously the button, and four arrows in a square point at nothing in
particular. "All indicators" keeps its one, because that row is a way OUT rather than a subject (V501) and
the chevron is what says so.
~~~

### V504

`styles.css` line 1241, before `.ci-value{ display:block; font-family:"IBM Plex Mono",monosp…`

~~~text
Version 504: ONE figure treatment for every member, whatever markup it was built from. It is the peek
card's spec, because that is the one Keren was looking at when she said Weather looks right.
~~~

`styles.css` line 1264, before `reading of what that meant, and it is the better one: "in Vo…`

~~~text
Version 504, Keren: "use light purple for the previews — we don't really understand from the preview
what's going on inside, and it looks better for consistency." Twelve miniatures in five forms were each
carrying their subject's own state colour: a lot of colour spent on a picture too small to read it by.
One accent here, and ONLY here — the same drawings keep their own colours on the pages where they are big
enough to be read. The Version 262 rule is untouched: history dims, the newest mark holds full strength;
all that changes is that the hue is now one hue. Every mark in these five forms is a STROKE with
`fill:none`, so stroke and opacity are the whole override.
~~~

`js/12-pages-nav.js` line 864, in or after `catItem`

~~~text
Version 504, Keren: "in Mood there are different sizes of fonts — make sure everything is aligned
to the same component." The seam was here. This function MOVES the source's own figure element in,
so a member built from a peek CARD arrived as `.peek-value` (21px figure, 11px unit) and one built
from a sign ROW as `.subject-value` (20px, 14px). Weather looked right to her because both its
members are cards; Mood has two of each. The class is normalised on the way in, so what a row looks
like stops depending on which markup it was lifted out of. Anything else inside it — a tag, a
second figure — keeps its own classes.
~~~

### V505

`styles.css` line 495, before `--pad:10px;`

~~~text
Version 505, Keren: "make outer spacing 15 pixels and inner spacing 10 pixels." TWO numbers, and the
distinction is real rather than accidental: --gap is the distance BETWEEN containers, --pad the padding
INSIDE one. Version 501 had collapsed them into one because what she measured then was two paddings that
disagreed with each other (18 above 560px, 16 below); this is not that. Both are still single numbers,
so "what is the spacing in this app" still has an answer.
~~~

`page-body.html` line 536, before `</div>`

~~~text
Version 505, Keren: "Reading for this season" went. Three of its five blocks were the same text the
season popup already draws from the same data, and the other two moved there rather than being
deleted — see quarterPopup. What is left on this tab is the cycle history, which is what the tab is
for and which now has the room to show all of it.
~~~

`js/11-dial-cycle.js` line 232, in or after `quarterPopup`

~~~text
Version 505, Keren: "Summer, Inflation, Inflation — it repeats." It did: the title carries the THEME
and the line under it carried `seasonTitle`, which is the name AND the theme again. The sub-line takes
the season's name and its body term instead, so the two lines say two things.
~~~

### V506

`styles.css` line 1170, before `background back off: "it doesn't blend well with the rest of…`

~~~text
Version 506, Keren: "make the icons on the home page have a light green background." All four take the
SAME green, which is what keeps it clear of the Version 301 rule — that one was written when six marks
wore six different STATE colours and read as a legend for something that was not one. One colour on four
tiles is decoration, not a verdict, and it is the app's own teal rather than a new hue.
~~~

`styles.css` line 1192, before `.browse-list > .cat-row .subject-label{ font-family:"Cormora…`

~~~text
Version 506, Keren: "the titles should be in a feminine font." That is Cormorant Garamond italic — this
app's voice, which already carries the season word, the cycle names, the reading heads and the menu's own
title. It comes with the type audit's hard rule: NEVER below 20px, and never upright for a title.
~~~

`styles.css` line 1271, before `.ci-mini .peek-chart.heat .past{ stroke:var(--border-strong)…`

~~~text
Version 506, Keren: "the light purple is not working that great — make it grey." Version 508 is her
reading of what that meant, and it is the better one: "in Volume you should see only the right bar in
purple and everything else light grey." V506 had greyed BOTH steps, which threw away the thing the colour
was carrying. Purple is this app's action colour, so twelve purple PICTURES read as twelve things to press
— but one purple mark inside a grey picture is not a picture in the action colour, it is a picture with
a reading in it, and the reading is what the row is about. This is the Version 262 rule with a hue:
history recedes to a light grey frame, the newest mark takes `--accent-ink`, which is the same plum the
dial's "Inflation ›" and every other link on the page wears.
~~~

### V507

`styles.css` line 491, before `distinction is real rather than accidental: --gap is the dis…`

~~~text
Version 507, Keren: "make the power preview chart a little bit smaller in height, like
20% shorter." It was 52 in five places — one CSS rule per peek form and four literals in
the builders — so the figure is a token here and PEEK_H in the script, and the two are
read together. 20% of 52 is 41.6; 42 keeps the 12 columns' slot arithmetic whole.
~~~

`styles.css` line 501, before `--gap:10px;       /* BETWEEN containers */`

~~~text
Version 507, Keren, on the Energy page: "I like the spacing between the top menu and the power preview,
but the spacing between power, households and activity is too big — five pixels shorter, and this applies
to all of the app." Those were the same 15 until now, which is why one of them was wrong: the space under
the bar separates the page from its chrome, and the space between two cards separates two readings that
belong together. So the distance between containers comes down to 10 everywhere, and the one figure she
likes keeps its own name. Still one number per question, which is what Version 385 asked for.
~~~

`styles.css` line 526, before `--radius:16px;`

~~~text
Version 507, Keren: "what do you think about the border radius we chose? I really wanted it to look
more round and more feminine, like the Apple app." Ten was the radius of the ONE control she pointed at
in Version 444, and taking a whole app's corner from a 32px-tall segmented track was always going to
read tight on a 700px card — the same curve is a lot of round on a small control and almost none on a
big one. Apple's own grouped cards sit at 13-16 and iOS 26's at 18-22; 16 is the roundest value that
still leaves a card reading as a card rather than as a bubble, and it is what Health's panels wear.
The arithmetic of the inner value is unchanged: 3px tighter than the track it sits inside.
~~~

`styles.css` line 1174, before `.browse-list > .cat-row .subject-icon span{ width:42px; heig…`

~~~text
Version 507, Keren: "make the stroke dark purple and the background light purple." Version 508 takes the
background back off: "it doesn't blend well with the rest of the screen — only leave the icons on dark
purple stroke, like the Inflation." She is right, and the reason is that the wash was the only filled
shape on the page. Every other mark in this app is an outline on the surface it stands on; a disc behind
four of them made the home page the one screen with a different kind of object on it. The plum stays —
`--accent-ink`, the ink the dial's "Inflation ›" and every link wear — so the marks still read as the four
doors, and they do it the way the rest of the app does. The slot keeps its 42px, so the labels below still
start on one line; the glyph grows to 26 because a mark with no disc under it has to hold the space itself.
~~~

`styles.css` line 1212, before `.cat-list{ display:flex; flex-direction:column; gap:var(--ga…`

~~~text
Version 507: the gap BETWEEN the rows is --gap (10) and the space above the first one is --gap-top (15).
They were the same number until Keren measured them on this very page and said they should not be.
~~~

`js/07-forms.js` line 148, in or after `dropSvg`

~~~text
Version 507, Keren, with a reference: "let's make the volume icon like volume that is in sound." It is the
one mark in the set named after the WORD rather than after the thing in the body — every other one draws
what it measures (a thermometer, a sprout, a gauge, a house) and this one draws a pun. Said plainly to her;
built as asked, and it does carry the reading honestly enough: how much there is, turned up or down. Two
arcs rather than the reference's three — at the 15px this renders at on a sign card the third closes up
against the second and the three become a smudge, which was checked at size before choosing.
~~~

`js/07-forms.js` line 273, in or after `ecgSvg`

~~~text
Version 507, Keren: "I want circulation to be an icon of a drop." The ring of arrows above was always
carrying a worry with it — a bare ring of arrows reads as "reload" — and the drop settles it: Circulation
is blood, and a drop of blood is what the word means in this app before it means anything about money.
It is the SAME path Volume wore until now, at the category weight, which is why dropSvg takes one.
~~~

### V509

`styles.css` line 797, before `.ind-sheet .subject-icon span{ background:color-mix(in srgb,…`

~~~text
Version 509, Keren: "in the All indicators page colour the icons dark purple and make the round background
light purple — this is true of all the containers on this page." Twelve rows were wearing six different
state washes, which is the V301 fault at full scale: a colour that changes per row is read as a key, and
the reader looks for what red versus teal MEANS here — but the verdict is already on the row, in the word
beside the figure, and the roster is a directory rather than a diagnosis. ONE wash on all twelve is
decoration, so nothing is being said twice and nothing is being said in colour alone. It is the app's link
ink on its own wash, which is what the home tiles wore until V508 took their disc off — kept HERE because
this page is a dense list of small rows where a slot with no ground lets the labels drift; the tiles are
four cards with room around them. V357 still holds: an empty slot draws no disc.
~~~

### V510

`js/07-forms.js` line 245, in or after `thermoSvg`

~~~text
Version 510, Keren, reading the roster: "take the cogwheel and put it in Industrial output, and here is
the icon I think fits Activity better." This is the SAME duplicate Version 346 flagged — Activity and
Industrial output both drew the cog — settled the other way round, and the other way round is the right
one: a cog is a factory, which is what Industrial output measures, and Activity is the labour market,
which is a body reading. Version 357 resolved it by leaving one of the two slots empty, so the roster has
carried a blank circle for a hundred and fifty versions; both slots are filled now and no glyph appears
twice. The trace is the reference Keren attached — flat lead, three peaks over two troughs, flat out.
Drawn WIDE on purpose: the first attempt kept the reference's narrow spacing and at the 15px a category
row renders a mark at, the peaks closed into a scribble. Four candidates rendered at 15, 20, 27 and 42
before choosing, which is the house rule for a new mark.
~~~

### V511

`js/07-forms.js` line 525, in or after `curveDetailHtml`

~~~text
Version 511, Keren, the structural change: "it feels unnatural for the dot-com growth to be 1995–1999 and
then in 2000 we have the contraction. A cycle should be counted from the first bull year to the last bear
year of that cycle." THE CYCLE NOW ENDS WITH ITS BLEED INSTEAD OF OPENING ON THE LAST ONE. The boundaries
are the same cut-points they always were; what moved is which chapter the bear years are counted in.

Why it is right, in her terms: a cycle's name is naming the thing that built it AND the thing that broke
it, and those are the same thing. The dot-com mania caused the dot-com crash; the housing boom caused the
subprime collapse; the COVID transfusion caused the 2022 inflation bear. Under the old dating each of
those consequences fell in the NEXT chapter, so every cycle opened on someone else's wreckage and stopped
just before its own — the Housing Cycle opening on the internet bust, the AI Cycle opening on an inflation
bear that has nothing to do with AI.

What settled it: the app was already saying both things at once. The dial's badge read YEAR 5 (from 2022)
while `cycleNowNote` one line below read "Four years into an AI-driven bull run" (from 2023). Two clocks,
one screen. They agree now.

What it costs, stated plainly. 1990 is orphaned — it is the tail of an unnamed prior cycle, so the record
opens at 1991 and the 1990 recession is context rather than content. Every cycle's growth and total-return
figures are recomputed (they are derived, so this is automatic). `typicalCycleYears` falls from 9 to 8.
`cycleEndReadings` was rekeyed and re-researched for this change, then removed entirely in V512 once it
turned out nothing read it (its figures are in the archive). And the Temperature page's "current cycle" window starts at 2023, so the 8% CPI peak of 2022
belongs to the COVID cycle and is seen by opening that cycle from the Calendar.

The one argument against, recorded because it is a book argument and may yet win: in the body day 1 is the
first day of the bleed, and the manuscript's own action for Winter is Seeding — a beginning. A cycle that
ENDS in blood is the other reading. Two things soften it. The drop on the dial marks "the start and end of
a cycle" at the seam (Keren's own instruction, Version 77), so the seam is a boundary rather than a phase
belonging to one side. And the old boundaries never sat in seasonal Winter anyway — 2022 opened the AI
cycle in Summer with CPI near 8%, 2018 opened in Summer, 1990 in stagflation — so "the cycle begins with
the bleed" was a stock-market fact, not a season-model one. The season ring and the era boundaries are
independent objects and always were.

Names are Keren's; blurbs are a first draft in an analytical register awaiting her voice. `to` is left
unset on the open era — it renders through calendarTodayY so it keeps working as later years are added.
To close an era: set its `to` to its last BEAR year, drop `ongoing`, and open the next on the year after.
~~~

### V512

`js/02-live.js` line 502, in or after `fedFundsRange`

~~~text
Version 512, Keren: "why do we need cycle end readings? If we don't need it, just get rid of it." Right —
nothing read it. `cycleEndReadings` held each closed cycle's Fed funds, VIX and ISM PMI at its last month,
for the Rates ring and the Feeling/Energy word tiles; those left the cycle view in a later pass and the
table stayed behind, correct and invisible. Version 511 found that while re-keying it, and kept it on the
argument that the gap it leaves is real. The argument against keeping it is the better one: data nothing
reads cannot be checked by looking, so it rots in silence, and the next reader has to work out whether it
is live before trusting anything near it. The twelve figures and their sources are in
`claude/gyneconomy-version-archive.md` under Version 512, so restoring those tiles is a lookup rather
than a research job. `model.end` went with it.
~~~

`js/08-model.js` line 115, in or after `quarterRegime`

~~~text
---------------- One cycle, as the cycle view reads it ----------------
cycleModel(era) computes everything the cycle view shows for ONE market cycle — the season it is in (or
ended in), the quarter-by-quarter track the dial paints, the ring numbers, the months of CPI the temperature
chart draws — so one view can show the current cycle on the Cycle tab and any past cycle from the Calendar
(Keren, Sep 17, 2026: one component, so there are not two dashboards to maintain). It used to carry a
fourth thing, `end`: the Rates ring and the Feeling/Energy words as they stood at a closed cycle's last
month. Those tiles left the view and the field outlived them by many versions; both are gone in V512.
~~~

### V513

`js/11-dial-cycle.js` line 17, in or after `arcPath`

~~~text
Version 513, Keren, reading the Dot-Com ring: "year three is overlapping — there's no gap between Q1 93
and Q2 93. I want even spacing between the rings. Also at the end of the cycle there's no grey overlap
like at the beginning. Make sure every ring on the outer ring has equal spacing with the grey background
and between one another."

Both were real and measured before anything moved. The gaps between season shapes ran 6.84° to 9.41° —
the short ones wherever a ONE-QUARTER season sat, because the inset was squeezed to leave the run a 0.6°
core, and squeezing the inset is squeezing the gap. Two single-quarter seasons side by side (1993 Q1 and
Q2, exactly where she looked) came out with a visible gap of about minus a tenth of a degree: touching.
And the grey: 3.0° of track showed before the first shape and 0.00° after the last, because the arc was
budgeted so the last cap landed exactly on the track's end.

The end is easy: the cycle's arc gives LEAD° back, so the grey leads and trails by the same amount.

The gaps are geometry, and the geometry is why this could not be fixed by tuning a number. A quarter of a
twelve-year cycle is 7.45° of arc; a round cap on an 11-unit stroke is 7.0° across on its own. The mark
was wider than its slot minus any gap at all, so equal gaps were IMPOSSIBLE at that width — the only
reason they looked equal on shorter cycles is that there the slots are two and three times wider. So the
ring thinned to whatever its own crowding allowed, which on the twelve-year cycle is 7.

Version 514, Keren, seeing that ring: "I actually like the thinner look, because it matches the inner
ring. Apply it to all the cycles." So 7 is the ring's width now, on every cycle, and the adaptive part
only survives as a FLOOR: if a cycle ever runs long enough that 7 will not hold a quarter plus its two
gaps, the mark thins further rather than the gaps closing. Today every cycle computes above 7 and takes
7. Her reason is the better one and worth recording: at 11 the seasons ring was nearly twice the market
band inside it and the two read as two instruments; at 7 against the band's 6 they read as one.
~~~

### V514

`styles.css` line 622, before `.cycle-dial .dial-moon{ pointer-events:auto; fill:none; stro…`

~~~text
V513–514: the width is the dial's to decide. It is 7 on every cycle (V514, Keren: the thinner ring matches
the market band inside it), and drawDial thins it further only if a cycle is ever crowded enough that 7
cannot hold a quarter plus its two gaps. The literals here are the fallback.
~~~

`js/11-dial-cycle.js` line 47, in or after `arcPath`

~~~text
V514: the ring's width, on every cycle — Keren, of the thinned Dot-Com ring
~~~

### V515

`js/07-forms.js` line 619, in or after `curveDetailHtml`

~~~text
---------------- A typical cycle's length (the dial's scale) ----------------
Clue's wheel spans one expected cycle and marks today on it, so the pale remainder reads as "how far a
typical cycle still has to run". Until Version 515 the "typical" was the MEDIAN OF THIS APP'S OWN four
closed cycles — 8 years — which is a median of four numbers and therefore mostly noise, and which made the
open cycle read as half-run when the rest of the board says late.

Version 515, Keren: "the average stock market cycle combining bull and bear typically lasts about four to
five and a half years — so the current ring should be in the same time span, and if we have irregularities
like the dot-com's twelve years, it's fine, it will show twelve."

Her instinct is right and her figure is close. Measured, against two independent compilations rather than
taken on trust: First Trust's 1962–2022 record gives a bull averaging 51.0 months and a bear 11.1, so a
full cycle of about 5.2 years; Fisher's 1946–2018 record gives 61 and 16 months, about 6.4. So SIX, which
sits between them and is the figure this app can defend.

What it costs, in view rather than hidden: over the years this app actually covers, cycles have run longer
than the full-history average — its own four closed cycles are 12, 6, 10 and 4 — because the 1960s to 80s
had far more bear markets than the decades since, and those short cycles are what pull the long-run average
down. So three of the five rings now show a cycle that outran a typical one. That is not the figure being
wrong; it is the reading, and it is the one the dial exists to give. A cycle that outlasts the span extends
the ring rather than overflowing it (Clue's "late" case); where each cycle stands is in cycleModel().
~~~

### V517

`js/11-dial-cycle.js` line 891, in or after `seasonStripHtml`

~~~text
Version 517, Keren: "make the grey dots match the average cycle length — and when you have longer
cycles, just make them full width. The dots can represent the average that is left, not compared to
the longest cycle."
Until now a CLOSED cycle was drawn against the LONGEST cycle on the board (48 quarters, the Dot-Com
Cycle), so the COVID row read two-thirds grey and the dots meant "shorter than the dot-com cycle" —
a comparison nobody asked the board for, and one that changes every time a long cycle is added. The
scale is a typical cycle now, which is what the DIAL has always used and what the open cycle was
already drawn against: the two halves of the app finally measure the same thing. So a cycle shorter
than typical shows what is missing from one, a cycle at or past it fills the row, and inside any row
the seasons keep their true proportions — flex does that on its own once the total is the row's own
length. `spanOverride` stays in the signature for the market strip, which must share whatever number
the seasons landed on.
~~~

### V518

`styles.css` line 1956, before `.band-head{ display:flex; align-items:center; gap:10px; }`

~~~text
Version 518, Keren, on a dashboard she sent: "in the main chart you have an icon and a background in
grey, which I like — you have the title, then the figures, and on the right side three horizontal dots that
can give you information and other things in the future we can have in that little pop-up." The card's head,
ONE component for all twelve histories: a grey rounded badge carrying the page's own mark, a title naming
WHAT THE CHART MEASURES — never the page's name again, which is the Version 298 rule Pressure has followed
alone since then — and a single ⋯ on the right.
She chose the ⋯ over a second (i): "put the (i) inside the ⋯ menu." So the page's note is the first row in
that menu and the reading row below gives its (i) up — ONE affordance per subject, which is the Version 477
rule the old container heads broke, and the reason `panelRow` now takes `head:` rather than the note being
written twice. The menu itself wears .cycsel-menu and .cycsel-opt unchanged: the app already has a menu and
a head does not get a second one (the Version 367 rule).
~~~

`js/05-history.js` line 1, at the top of the part

~~~text
---------------- Version 518: the history card's head ----------------
Keyed by the id `histControls` already receives, so a page's head costs it nothing: no call site passes a
title, a mark or a note. `title` is a string or a function, because Pressure's names the maturity chosen on
the control below it and Horizon's names the spread. `mark` is null on exactly one page — the federal
deficit, which is a marker inside Economic power and has never had a glyph of its own; a blank badge is
worse than none (the Version 510 lesson), so the head simply renders without one until Keren picks one.
~~~

### V519

`styles.css` line 2756, before `history panel needs to be CONTAINED and not bleed into the e…`

~~~text
Version 519, Keren, on the same dashboard: "the top menu bar is greyish and it's OUTSIDE the container of
the main chart." So the control leaves the white band and sits on the page's own ground above it, and the
band holds what the band is for: the head, the readout, the picture and the trend.
The containment test survives the move — it just tests a different thing. `:has(.hist-controls)` meant "the
box holding the history chrome" and the chrome has left; `:has(.band-head)` means "the box a history opens
with", which is true of all twelve and of nothing else, so no page has to remember a class and none can opt
out by forgetting. That was the whole argument in V441 and V470, and it is why those two comments stand.
~~~

### V520

`styles.css` line 1563, before `.reading-box{ background:var(--surface); border:1px solid va…`

~~~text
---- Version 520: the reading's own container, below the history (Keren). `seatBandReading` moves whatever
the page built — one row, a stack, or a page's named wrapper — into this box, so the rules below have to
undress all three and dress the box instead: ONE edge, at the outside, with hairlines between the rows.
It is the app's container spec, unmodified, which is the whole point of the move: the reading now sits in
the same language as Highlights and every other block on the page.
~~~

`styles.css` line 1968, before `.bh-mark{ flex:0 0 auto; width:21px; height:21px; border-rad…`

~~~text
V520, Keren: "the grey behind the icon is very light and small — make the background smaller and
brighter." BRIGHTER: off `--mark-wash`,
which is the warm #e3dacd the home tiles wear, onto a NEUTRAL wash mixed from the app's own ink. Against
white paper the warm badge read as a stain rather than as a plate; the neutral one is the same lightness
and carries no hue, which is what makes it look brighter beside a purple-and-teal chart. It is mixed from
`--text-primary` rather than named as a hex, so dark mode inverts it for free.
V521, SMALLER, with the measure she gave: "the height of the icon, INCLUDING the background, should be
more or less the height of the title next to it." The title is 14.5px on 1.35, so its line box is about
20px — the badge is 21 and the glyph 13, which is the size a badge stops being a tile beside a word
and starts being a bullet in front of one. The radius comes down with it: 9 on a 21px square is a circle
by accident, and 7 keeps it the squircle the app's other badges are.
"And maybe the stroke needs to be lighter." At 13px the marks were still drawing at the 1.7—1.9 they
were built for at 24, which is a heavy line on a small glyph. The weight is set HERE rather than in each
mark, because the marks are shared with the roster and the home tiles where 1.7 is right — a CSS rule
outranks the presentation attribute on the path, so one line reaches every glyph this badge can hold.
~~~

`styles.css` line 2010, before `.bh-more{ width:21px; height:21px; padding:0; cursor:pointer…`

~~~text
Keren, V520: "you have a light circle around the three dots on the top right." I read that as a fault and
took the circle OFF. It was a description of the REFERENCE, which she corrected in V521 — "the only thing
is that you don't have a light circle around the three dots." So it comes back, and as what the reference
draws: a round button with a hairline, not a filled plate. Sized to the badge across the row, so the head
is one height from the mark to the dots.
~~~

`styles.css` line 2655, before `screenshot, meaning it should align to the LEFT." The 22px i…`

~~~text
Version 520, Keren, comparing the two: "there is no border in the numbers — in the screenshot I sent you
the total revenue has a number, and below it a disc showing up or down, and 68% of 75M goal met in small
grey text. I think this design is very legible and good." The border was the V497 rule ("the entire test
result component in a grey stroke container") applied one component too far: an edge is what separates a
READING from the page, and this block is not a reading — it is the chart's own headline, inside the
chart's container, which already has the edge. Bare, it reads as the card's number the way the reference's
does. The left inset stays: it is the plot's own gutter, so the figure and the first bar share a line.
~~~

`styles.css` line 2763, before `.page-chart:has(.band-head), .spread-history:has(.band-head)…`

~~~text
Version 520, Keren: "we want a container that sits in the same language as the rest of the app — the
history panel needs to be CONTAINED and not bleed into the edges." This retires the full-bleed band of
Version 441, which came from her own Apple Health reference and was right for the page it was on: there
the history WAS the page, and a card round the only thing on screen was a border round nothing. The page
has changed under it. The control is on the ground above (V519) and the reading is a container below
(V520), so the chart is now one container among three rather than the whole page — and a full-bleed white
slab between two cards is the odd one out, which is the opposite of what the bleed was for.
So it takes `.page-chart`'s own spec: surface, border, radius, and the padding every other container has.
The plot's -14px counter-bleed goes with it, and so does the -20px margin and the squared corners under
920px — all three existed only to serve the bleed.
~~~

`js/04-components.js` line 160, in or after `histReadEnsure`

~~~text
Version 520, Keren: "expand the test results to the entire width of the container it lies in, and put it
BELOW the history container." The reading has been inside the history since V482, which was right while
the history was the page's one container; with the control on the ground above (V519) and the history
contained again (V520) the page is a stack of containers, and a reading that measures a different thing
from the chart — the LATEST value against its normal band, not the window on screen — belongs in one of
its own.
Placed here rather than in twelve renderers, for the reason V489 and V495 both settled: a component each
page has to remember to move is a component the pages drift apart on. It runs on every draw because four
of these pages rebuild their whole container each time, and it is idempotent — appendChild on a node
already in place is a no-op.
~~~

### V521

`styles.css` line 2662, before `references (V556), and the space under it was set when there…`

~~~text
V521, Keren: "the data on the history container — average 3.3 or whatever — needs to look like the
screenshot, meaning it should align to the LEFT." The 22px inset was the PLOT's gutter (V497), put there so
the figure and the first bar shared a line. That was an alignment to the picture; hers is an alignment to
the CARD, which is what the reference does and what every other line in this container already does — the
head above it, the trend below it, the reading in the box under that. The figure starts where the badge
starts now.
~~~

### V522

`styles.css` line 2727, before `.hero > :first-child:not(.hist-bar){ margin-top:0; }`

~~~text
V522, Keren: "there's no space between the top menu and the selection bar." This rule was written when a
.hero opened on its BAND, which is flush against the top bar by design. Since V519 it opens on the control,
and a control gets `--gap-top` on every other page in the app. The exemption is the narrow one: the band
keeps its flush start wherever it is still first.
~~~

`page-body.html` line 335, before `<div class="hist-bar" id="hzn-timeline"></div>`

~~~text
V522, Keren: "10Y minus 3 months / 10Y minus 2 years shouldn't be a new ruler — you can put it in
the three dots on the history container." So the spread bar is gone and this page carries the one
ruler every other page carries: the window. Which series is drawn is a choice, and a choice lives in
the head's menu.
~~~

`js/05-history.js` line 83, in or after `headMenuHtml`

~~~text
V522, Keren, of Horizon's spread bar: "10Y minus 3 months, 10Y minus 2 years shouldn't be a new ruler —
you can put it in the three dots on the history container, that would be a good place for it." A page
whose control chooses WHICH SERIES the chart draws (rather than which window) puts that choice here, so
the control row stays one ruler on every page. `menu` returns the rows; the note is always last.
~~~

`js/06-charts.js` line 298, in or after `cycLabel`

~~~text
V522, Keren: "when I select Current cycle I want the year to be year–Today, with a capital T."
It is the second half of a RANGE whose first half is a year, so it is standing in for a date and
takes a date's capital — the same reason the picker writes "Current cycle" rather than "current
cycle" beside it. One place, so the button and every row in the menu change together.
~~~

`js/10-render-pages.js` line 90, in or after `draw`

~~~text
Version 522, Keren: "every other history container has this square boxed-in grid, like in the Apple
Health app, and Horizon looks different — unify the design." It did look different, and for a reason
worth naming: this chart draws node by node while the other nine build a string, so when Version 442
gave the app one frame and one vertical rule (`chartAxes`, `vGrid`) this was the chart that could not
call them. It calls them now, through `appendSvgMarkup`. What arrives with them is the whole shared
look: the frame rect, dashed rows at `--grid`, mono y labels ENDING at the plot's left edge rather
than starting at the svg's, and a dashed vertical rule under every year label.
The zero line stays its own heavier solid rule, and keeps its dashed row suppressed (`noGridAt`),
because a dashed rule under a solid one reads as two — the same reason the deficit chart passes it.
~~~

### V523

`js/06-charts.js` line 713, in or after `vGrid`

~~~text
Version 523, Keren: "consolidate as much as you can." Version 451 introduced this token for three charts
and said in its own comment that "the remaining seven literals are worth collapsing into this too, but that
moves Power and Valuations the other way — they are airier than Apple already — so it is a separate
decision." This is that decision, made. Every COLUMN CHART in the app now reads it: the seven histories,
Economic power, Valuations, Pressure, Horizon, the two Cycle-tab charts and the preview miniatures.
What moves, stated: Power and Valuations widen from 0.58, which is toward the 0.69 the reference measures
rather than away from it; Horizon 0.66, the Cycle tab 0.60–0.62 and the previews 0.62 widen slightly;
Pressure was already 0.68 and does not move at all. Households is the one derivation rather than a
substitution — it draws a PAIR per slot, so each bar takes half the fill.
The battery gauge is deliberately NOT here: twenty lit segments is a meter, not a chart, and its spacing
answers to the charge it draws rather than to a reading per slot.
~~~

`js/06-charts.js` line 767, in or after `colWidth`

~~~text
Version 523: the plot's own margins, which were thirteen literals. Seven of the histories already agreed on
34 / 6 / 14 and were simply repeating it; the drift was in the other six — the deficit at 38, Pulse at 32,
Economic power and Valuations at 30 with an 8px right margin, and the Cycle tab's Temperature at 12. The
gutter is where the y labels live and it is the same row of labels on every chart, so it is one number.
`B` is deliberately NOT in here: what sits under a plot differs by chart (a year row, a legend, a marker
label), so the bottom margin answers to the furniture rather than to the frame.
Version 556 adds LEG: a strip INSIDE the frame, clear of the plot, where the reference legend sits. It is
taken out of the plot's own height, not added to the chart's, so no chart changes size and nothing outside
the frame moves: the plot is 20px shorter and the frame is exactly where it was.
Version 557 moves that strip from the foot of the grid to its HEAD (Keren, Sep 27, 2026: "it's confusing
because the bottom bar already has numbers — switch the legend to the top right side of the grid"). She is
right: the year row sits just under the frame, so a legend on the floor put two rows of small grey type a
few pixels apart and the reader had to work out which was which. The ceiling is empty.
~~~

### V524

`js/07-forms.js` line 255, in or after `thermoSvg`

~~~text
Version 524, Keren: "for activity, draw an upward sloping chart." Three rising bars, no axis frame and no
arrowhead, which is the shape that survived the house test at 13 / 15 / 20 / 27 / 42px against the four
others drawn beside it. Why not the two obvious alternatives: an arrow with a trend line is the TREND
PILL's own mark, and this mark sits on a page that carries that pill; and bars inside an L-shaped axis is
the Analysis TAB's icon, and no glyph in this app appears twice (the V510 rule). Bars alone say chart,
say rising, and hold at 13px, which is the size the band head renders a mark at since V521.
~~~

`js/07-forms.js` line 353, in or after `umbrellaSvg`

~~~text
Version 524, Keren: "make the pulse icon from Activity be the icon of Pulse — money velocity — because
it is more representative of a pulse than a heart." She is right, and it is the same argument V301 made
the other way: back then Pulse's page drew no trace, so an ECG squiggle beside it was a miniature of the
picture below rather than a name for the subject, and a heart was the name. The page draws a real trace
now, so the squiggle IS the subject's own signature, and the heart is the loose metaphor. Activity takes
the rising bars (above) and the heart moves to Fear & Greed, which is where a heart earns its keep: the
index it names is a reading of how the market FEELS.
~~~

`js/10-render-pages.js` line 772, in or after `worst`

~~~text
V524, Keren: the heart, freed when Pulse took the trace. The half-dial of V465 named the INSTRUMENT
the index is published as; the heart names what the instrument measures, which is the reading itself.
~~~

### V537

`js/13-tabs-menu.js` line 133, in or after `fromHash`

~~~text
ftportfolios and fisherinvestments carry the typical-cycle-length figure the dial's ring is
scaled to. Added in Version 537 because they were falling into "Other", which put a group on
the Sources screen that should never appear. Grouping them is NOT an endorsement: they are
the only citations in the app that are neither a primary source nor a labelled compilation,
and whether they belong at all is Keren's to settle — see the open question in ARCHITECTURE.md.
V640: yardeni joins — the bull/bear market record the rhymes table cites, which is cycle history.
~~~

### V550

`styles.css` line 664, before `@media (max-width:640px){`

~~~text
Phones: the tab bar leaves the header and sits on the bottom EDGE of the screen, as the top bar sits on the
top one (Keren, Sep 27, 2026: "the bottom menu bar is hovering over the content. I want it to look like the
top bar, meaning it comes from the bottom of the screen and you don't see what's going on behind it").

It was a floating pill until Version 550 — inset 14px from each side and lifted 12px off the bottom, which
is what put content in the gutters beside it and made it read as hovering. The two bars are the same kind of
thing, the app's chrome, so they get one treatment: full width, flush to their edge, the page's own colour at
86% behind a 14px blur, and a single hairline on the edge that faces the page. The only difference is which
edge that is — the top bar borders its bottom, this one borders its top.

The safe-area inset moves INSIDE the padding rather than lifting the bar off the edge, so the bar still
reaches the bottom of the screen on a phone with a home indicator and its buttons sit above it.
The page gets bottom padding so nothing hides behind it; the modal backdrop (z-index 80) still covers it.
~~~

### V552

`styles.css` line 381, before `.strip{ display:flex; align-items:center; height:14px; margi…`

~~~text
Version 552: NO `gap`. The separation between runs is drawn INSIDE each run, as a border in the card's own
colour, as an inset shadow — which paints inside the box and, unlike `gap` or a border, changes no item's
size, so it costs the track nothing. A border DID cost it: `flex:n 1 0` distributes free space, and each
item's border is part of its outer size, so the seasons strip's five borders ate 3.6px the market strip's
two did not. With `gap:3px` the space a strip lost to separators depended on how
many runs it happened to have — the seasons strip has five or six, the market strip two — so two strips over
one cycle, given identical flex totals, still ended on different pixels. Keren saw it on the AI and COVID
rows. A separator that consumes no track makes the boundary a pure function of the flex fractions, which is
the only way two strips can be read against each other.
~~~

`js/11-dial-cycle.js` line 106, in or after `arcPath`

~~~text
after the band, so it sits on top of it
The badge says "Year N" — the cycle's year, and it sits flush after the LAST QUARTER WITH A SEASON, so the
ring reads as one continuous run. It used to sit at the later of that and the present (Keren, Sep 27, 2026:
"the year cursor is a bit far from the end, from the latest quarter Q2 2026 — I want it a bit closer"): by
late September the calendar is most of a quarter past the last quarter the data has closed, and the badge
was floating in that empty arc. The app's edge is the data's, not the calendar's — the same rule the two
cycle strips were put on in Version 552 — so the badge follows the seasons (Version 554).
When the cycle fills the ring there is no room for it before the seam, so it sits on the seam itself, a clasp
where the cycle closed (Version 200).
~~~

`js/11-dial-cycle.js` line 931, in or after `marketStripHtml`

~~~text
Version 552, Keren, on the AI and COVID rows: "the season bar and the bull bear bar, they don't end in
the same line … it looks like the bull year is longer than the season."

They did share a WIDTH; they disagreed about where NOW is. The seasons stop at the last quarter the app
has a reading for — Q2 2026, because that is where the GDP and CPI series end — while the year in
progress here was measured to today's DATE, about three quarters in. One extra quarter of colour, and
two bars over one cycle that refuse to end together.

The app has one now, and it is the data's edge rather than the calendar's: a season that has not been
computed has not happened as far as this page is concerned. So the open year takes exactly the quarters
the seasons have left over, and the two strips end on the same line by construction instead of by luck.
~~~

### V553

`styles.css` line 401, before `.strip-run.one, .strip-run.settled{ min-width:0; background:…`

~~~text
Both kinds of dot — the one-quarter season and the run the settle pass rescued — are drawn the same way:
the run keeps a box, the DOT is painted inside it, centred. Drawing the dot as the box itself put the strip's
3px separator (an inset shadow) inside the circle and left a 9x12 crescent — the squeezed sliver Keren has
rejected twice (Version 553). A settled box is 15px: 12 for the dot, 3 for the separation, so two dots side
by side never clip each other. `aspect-ratio`, not a fixed height, so a clamped dot stays a circle.
~~~

### V554

`js/11-dial-cycle.js` line 130, in or after `arcPath`

~~~text
Quarter dots ahead on the inner ring — the rest of a typical cycle, as Clue dots the days ahead (open cycle only).
They run to the track's rounded end at the seam (Keren, Sep 19, 2026: the dots stopped short of it), not just to the
end of the years' arc, so the ring reads as one continuous run up to the seam.

Version 554: the dots are spread EVENLY across the arc that is left, rather than pinned to the quarter grid
and then clipped wherever the grid happened to fall. Keren, Sep 27, 2026: "the gray dots, they're not evenly
spaced at the rest of the cycle. You have a really big gap from the last bull year to the first gray dot."
Pinning them to the grid meant the first surviving dot could be anywhere from a hair to a full quarter past
the band's end — on this cycle it was most of two quarters — while every other gap was exactly one quarter.
The dots are a COUNT, not dated marks: the caption calls them what is left of a typical cycle. So the count
is kept (the arc divided by a quarter, rounded) and the dots sit at the centres of those equal slots, which
makes the gap before the first and after the last exactly half a gap, the same at both ends.
~~~

### V555

`js/04-components.js` line 241, in or after `fmt`

~~~text
Version 555, Keren, from Apple Health's Steps chart: "they made like a background to the current
statistics, and that cube is moving with the lines — so on Tuesday the data would align with the line
of Tuesday." While a reading is live the block becomes a plate and slides to sit centred over the
column it is reading, with the crosshair already dropping from it to the bar. It ties the figure to the
month: before this the reader had a number above a picture and had to take on trust that the two were
about the same thing. At rest it goes back to what V520 and V521 made it — bare, flush left, the card's
own headline — because there is no one column for it to sit over.
It moves by MARGIN rather than by `left`, so the two axes are set by two different things and never
fight: the stylesheet owns where the band is, this owns where along it the plate sits.
~~~

### V556

`js/04-components.js` line 227, in or after `fmt`

~~~text
Version 556, Keren: "average 3.3%, Fed target 2.0% — that never changes, so we don't need it in the
changing tooltip." Version 486 put the reference values in here because the chart printed them
permanently and a reader comparing a bar to a line had nowhere to read them. That was the right move
against an inline key; against a plate that changes on every column it is the wrong one, because a
figure that never changes inside a readout that always does teaches the reader to stop trusting that
the block is about the column under the pointer. The references are constants of the WINDOW, so they
now sit with the window: the legend in the strip at the head of the grid (histLegend below).
Version 558 removes the third line with them. It was there to hold the block's height while the
references came and went, and with nothing left to come and go it was 16px of nothing under every
reading — Keren: "the tooltip is bigger than the numbers that it presents."
~~~

`js/04-components.js` line 305, in or after `fmt`

~~~text
Version 556. The reference legend: one line per reference, in the strip AXIS.LEG opened inside the frame
under the plot, laid out from the right so it ends on the plot's right edge — Keren: "a very gentle legend
on the bottom right of the grid … a line, Average 3.3%, a dashed line, Fed target 2.0%."
Drawn here rather than in ten renderers, for the reason V489, V495 and V520 all settled: a component each
page has to remember to add is a component the pages drift apart on. Everything it needs is already on the
geometry — the references, the plot's right edge, its foot, and the chart's own formatter, so the figure
in the legend and the line on the chart are the same number (the ONE NUMBER rule).
The marks repeat the LINE each reference stands for, solid or dashed, exactly as the readout's did: the
strip sits on the chart's own ground, so shape is what has to carry it. Measured after insertion, because
only the browser knows how wide "Ample reserve 70%" is in this font at this size.
~~~

### V557

`js/04-components.js` line 348, in or after `fmt`

~~~text
In the strip at the HEAD of the grid (Version 557), on a plate in the card's own colour, so a column that
runs the full height of the scale passes behind the legend rather than through it — the same plate the
app puts under any label that floats over a plot (the DSM, Version 217).
Version 558 insets it from the frame by ONE number on both edges (Keren: "three, four pixels from the
top so it doesn't look so adjacent to the top of the grid … make the padding from the right be equal to
the padding from the top"). The inset is measured off the FRAME the chart actually drew, not off the
geometry: `g.R` is the last column's centre, which is a hair inside the frame's right edge and by a
different amount on every chart, so a legend aligned to it would have sat at a different distance from
the edge on each page while reading as if it were aligned.
~~~

### V558

`styles.css` line 1453, before `.vh-svg{ display:block; width:100%; height:auto; margin:10px…`

~~~text
Version 558: 14px above the plot became 4; Version 559 takes the last of it. The gap was set when the
readout above it was a three-line block with a reference row that came and went; it is a two-line plate
now, and Keren: "it has a big spacing between it and the grid … make like a 10 pixels gap." The whole gap
is AXIS.T now — the plot's own top inset — so there is one number to tune rather than two stacked.
~~~

`js/04-components.js` line 137, in or after `histReadEnsure`

~~~text
The plate is built ONCE and then only written into (Version 558). Rebuilding its markup on every
pointer move handed the transition a brand new element every time, so it animated from margin-left 0
on each column instead of from where it was — Keren: "whenever I hover over bars it returns to the
start and moves to the current location." A transition needs the same element on both sides of it.
~~~

### V559

`styles.css` line 2696, before `.hr-value{ font-family:"IBM Plex Mono",monospace; font-size:…`

~~~text
V559, Keren: "the number is too big." 29px was the size of a card's own headline figure, which is what
this block was when it described the window and nothing else; as a plate that rides a column it is a
reading, and a reading answers to the chart rather than competing with it.
~~~

`js/06-charts.js` line 780, in or after `colWidth`

~~~text
Version 559: T drops from 14 to 10 and the three plot hosts give up their top margins, so the distance
between the readout's plate and the grid's ceiling is T and nothing else — one number, and the 10px Keren
asked for. It was 6 of margin and 14 of inset stacked, which is the kind of gap nobody can tune because
nobody can see which half of it to change.
Version 561 moved the y labels to the right, because that is where the Apple Health chart Keren works
from puts them. Version 562 moves them back and fixes the actual problem, which she then named exactly:
"the numbers should be on the left because it's a left-to-right app … you saw on the Apple Health it's on
the right side because it was a program for Hebrew." Correct, and it is the whole reason that reference
looked the way it did.
So the gutter comes back to the left, and the FRAME stops being the plot's edge: it is drawn AXIS.L out
on one side and AXIS.R out on the other, which puts it flush against the card's own text on both — "make
the outer frame of the grid align both in the left side and the right side … I want symmetry." The
numbers sit inside it, in the rail the gutter opens, above their own line where no column ever reaches.
Every caller pads with these two numbers, which is what lets the frame be derived from them here rather
than passed in twelve times.
Version 563 gave the rail an edge; Version 564 gives the edge air. L is 37 because the rail itself is 32 —
enough for "100%" — and the last five are the gap Keren asked for between that line and the first column,
so the rule is not something the leftmost bar leans against.
Version 573 adds FOOT: what is left under the x-axis labels before the picture ends. It was three different
numbers — 21 on the eight histories that set B from H, 6 on the two here and 6 again on Horizon and
Pressure — so the gap between the chart and the trend pill below it came out at 31px on some pages and 16
on others. Keren: "I want 25 pixels between the title and the chart, and the same to the trend button, so
it's symmetrical." One number here, one margin on the pill, and every page measures the same.
Version 574 adds READ: the band under the legend's strip where the reading plate sits, reserved out of the
PLOT rather than fought over. Keren: "I don't want the height of the tooltip to change. Have enough space
above the highest bar so the tooltip will be visible at the same height throughout the grid … make the
ratio of the height different." Version 566 had the plate rise when a column would reach it, which kept it
clear but moved it; the honest fix is to give it room no column can take. 61 = 10 above the plate, the
plate, and 10 below it — her two tens — and every chart's scale now maps into what is left.
~~~

### V560

`styles.css` line 2670, before `.has-hist-read{ position:relative; }`

~~~text
Version 560: the block floats over the plot instead of holding a row above it. With the resting summary
gone (the legend states the average) there is nothing to reserve a row FOR, and a reading that appears
only while a column is being read can sit on the picture it is reading — Keren: "maybe we can put the
tooltip inside the grid." `pointer-events:none` so the hover it is answering to passes straight through
it; without that the plate would chase the pointer out from under itself.
~~~

`js/04-components.js` line 200, in or after `fmt`

~~~text
Version 560, Keren: "the default tooltip that writes the average is redundant because I can already see
it" — the legend has stated the window's average since Version 556, on the same chart, two inches away.
So the resting state goes entirely: the plate appears when a column is being read and at no other time.
Everything else follows from that. A block with nothing to say at rest cannot go on reserving a row
above the chart, and with the row gone there is nowhere above the grid for it to appear, so it moves
INSIDE the grid — which is what Keren proposed in the same breath. It floats over the plot, out of the
flow, in the band directly under the legend's strip, still sliding to the column it reads.
The average is no longer computed here at all: the chart draws the line and the legend names it, which
is the ONE NUMBER rule getting shorter rather than being restated.
~~~

### V561

`js/04-components.js` line 374, in or after `fmt`

~~~text
Version 561, Keren: "the line next to Average 3.3% needs to be purple … so it matches the colours."
The mark wears the chart's OWN class, so one stylesheet rule paints the line on the plot and the line
in the legend and they cannot drift apart — colour, width, dash pattern and all. Shape alone was the
Version 486 rule, written for the readout, which inverted against the page and could not use colour;
the legend sits on the chart's own ground and can. Every history draws its average as .temp-avg and
its reference as .vh-mean, which is why those are the defaults; a chart whose lines differ says so.
Version 570: a ref may ask for a SWATCH instead, for a key that names what a colour means rather than
what a line is — the zone keys that used to sit in their own row under Horizon and Pressure.
~~~

### V563

`js/04-components.js` line 209, in or after `fmt`

~~~text
Version 563, Keren: "maybe we should see as the default the latest figure of the CPI." At rest the plate
now reads the LAST column with a value, pinned over that column exactly as a hovered one is — which is
what a reader wants the chart to be saying before they touch it, and it is the page's own headline
figure rather than a summary of a window nobody asked about (the summary is what Version 560 removed).
A resting plate is not a hover, so the plot does not dim and the crosshair comes in at a sixth of its
strength: enough of a thread from the plate down to the bar to say which bar, not enough to read as a
reader's own mark. The newest bars are rarely at the top of their own scale, so the band under the
legend is usually the emptiest corner of the picture; where it is not, the plate's own surface covers
for it, the same as on a hover.
~~~

`js/06-charts.js` line 912, in or after `chartAxes`

~~~text
Version 563, Keren: "I want a dividing line between the numbers and the graph — maybe a solid grey
line, just like the horizontal one." The rail the numbers sit in had no edge, so the plot simply
began wherever the widest number happened to end. It is the same rule as a gridline, turned upright:
one token, one weight, and the rail reads as a column of the grid rather than as a margin.
~~~

### V564

`js/06-charts.js` line 938, in or after `chartAxes`

~~~text
centred in the rail rather than pushed against the frame (Keren, V564): the rail is a column of the
grid now, and a column's contents sit in the middle of it
~~~

### V565

`styles.css` line 2691, before `.hr-label{ font-family:"Public Sans",sans-serif; font-size:1…`

~~~text
V565, Keren: "I want August 2026 to be in the same size font like Average 3.3." The two ARE both 11px —
what made the date look bigger was that it was set in caps with tracking, and caps at a size read taller
than lowercase at the same size. It is the legend's own line now, to the letter: same face, same size,
same case, same ink. They are the two small labels on one picture and should not disagree.
~~~

### V566

`styles.css` line 2701, before `.hr-plate.compact .hr-value{ font-size:15px; line-height:1.4…`

~~~text
V566: a two-figure reading steps down rather than spreading. V574 keeps its LINE BOX at 22px while the
glyphs shrink, so a stepped-down plate is exactly as tall as every other one — Keren: "I don't want the
height of the tooltip to change."
~~~

### V567

`js/05-history.js` line 817, in or after `line`

~~~text
Version 567: the two series are named by the shared legend at the head of the grid, like every other
history's references. This was the last chart still carrying the old floating inline key — the plate
that hunted for a clear band inside the plot — which is exactly what the legend replaced in Version 556,
and Keren caught it: "in the household history chart the legend is not in the location that we agreed
on." One legend, one place, every page. The key's own function went with it.
~~~

### V568

`js/04-components.js` line 1049, in or after `fmt`

~~~text
Version 568: the marks that named the extremes and the latest point are gone. Keren, on Desire: "I'm
seeing now 2.73% in a white background — we don't need this. Also 4.61%, the highest point, we don't need
this. And another point that is marked but with no reason." All three were true, and the cause is that
the chart kept annotations written before it had a readout: the resting plate names the latest reading
over its own column (V563), the legend names the average (V556), and the range bar under the chart names
the window's high and low. What was left inside the plot was the same facts said a second time, plus one
dot with no label at all — the second extreme, whose plate had been dropped because it collided. Two
histories carried them and nobody else did, which is exactly the discrepancy Keren asked to stop finding
page by page.
~~~

### V569

`js/10-render-pages.js` line 162, in or after `fmt`

~~~text
V569: the geometry the shared readout and legend need. This chart tracks its own pointer, so it
handed over only `vals` — which left the plate with no column to sit over (it fell to the left edge,
outside the frame, where Keren found it) and left the legend with nothing to measure. The numbers
are the ones the chart just drew with, so the plate rides the same columns the hover lights.
~~~

### V570

`js/10-render-pages.js` line 140, in or after `fmt`

~~~text
Version 570: the un-inversion marker is gone entirely. Version 569 kept the line and moved its label
to the legend; Keren: "the colour already shows that the graph goes from inverted to normal, so I
don't need it again." She is right — the quarter the columns change colour IS the un-inversion, drawn
by the data rather than annotated on top of it, and a rule through the plot saying the same thing was
the last of the duplicate furniture this component has been shedding since Version 556.
~~~

### V571

`styles.css` line 1909, before `.page-chart > *:last-child, .spread-history > *:last-child{ …`

~~~text
Version 571. The trend pill is the last thing in a history container on every page, and the gap under it
was whatever margins happened to be left over — 19px on the metric pages, 7px on Horizon and Pressure,
where Keren found it: "the trend button is missing padding from the bottom of the container. I want the
top padding and the bottom padding to be equal." It is one number now, and it is the container's OWN top
padding, set where the container ends rather than accumulated from the parts above it. Whatever ends up
last gives up its bottom margin, so the padding is the whole gap and cannot be added to.
~~~

`js/05-history.js` line 641, in or after `fmt`

~~~text
V571: the zero rule spans the FRAME, not just the plot. Keren: "there's no line below 0% — I understand
there's a dashed line at the same level, so maybe just continue the dashed line, but don't leave the
zero without a line similar to the other numbers." Every other number in the rail has its gridline
running past it; zero's did not, because zero's rule is drawn by the chart rather than by chartAxes and
it was drawn to the plot's own width.
~~~

`js/06-charts.js` line 930, in or after `chartAxes`

~~~text
ABOVE its line, not on it: the gridline runs the frame's full width now, and a number sitting on one
would be struck through by it.
Version 571 drops the exception. V562 flipped the TOPMOST number under its line when there was no room
above it inside the frame — which put it a few pixels from the number below and made the rail read as
unevenly spaced, exactly as Keren saw on Horizon ("the gap between 2% and 3% is not like 3% and 4%; it
has to be accurate"). There was no need for it: the strip at the head of the frame is the LEGEND's,
and the legend is right-aligned, so a number in the rail at the far left has the strip to itself.
~~~

### V572

`styles.css` line 1869, before `border:0; background:var(--accent-wash); border-radius:999px…`

~~~text
V572: a capsule, not the card radius. Keren, from Apple Health: "the trend button is a little bit more
rounded on the corners … a rounded button would be more clear." It is the shape this app already gives
every control the reader can press — the window switcher above the chart, the cycle picker — so the one
pressable thing under the chart now looks like the pressable things over it.
~~~

`js/06-charts.js` line 417, in or after `trendPill`

~~~text
Version 572, Keren, with Apple Health's own empty trend row beside it: "when the trend is unavailable I
want it to be like empty — a light stroke with grey text, so it looks disabled." A filled pill promises
something to read; this one has nothing, and under eight readings it never will for this window. So it
drops the wash for an outline and goes grey: still there, still the same height, so the container keeps
its shape and the reader can see that the row exists and has nothing in it.
~~~

### V574

`js/04-components.js` line 268, in or after `fmt`

~~~text
Version 574: ONE height, on every chart and in every window. Keren: "I don't want the height of the
tooltip to change." Version 566 had it rise when a column would reach it — correct, and still moving.
AXIS.READ now reserves the plate's whole band out of the plot, so nothing can enter it and the plate can
sit at a stated offset: 10px under the legend's strip, with 10px under the plate before the data begins.
~~~

### V575

`js/04-components.js` line 280, in or after `fmt`

~~~text
Version 575, Keren: "on the left edge bar I want the tooltip to align to the left, and on the right edge
bar to align to the right, so it looks symmetrical." The plate is centred on its column until the column
runs out of room, and then it stops against the PLOT'S OWN EDGE — where the columns begin on one side
and end on the other.
Version 576 is that correction. V575 anchored it to the frame inset by 6, which on the right IS the
plot's edge (AXIS.R is 6) and so looked right, but on the left put the plate over the number rail —
Keren: "the tooltip crosses over to the column of the percentage; I want it to align to the bar itself,
like you did on the right side." The rail is 37 wide, not 6, which is the whole of the difference.
~~~

### V577

`js/06-charts.js` line 725, in or after `vGrid`

~~~text
Version 577. ONE function decides how wide a column is, because the rule was stated in one number and then
contradicted in nine places. Keren, on Valuations: "the bars look very thin … and on Temperature at Max it
looks very, very tight. Is there a point to widen the bars where there are only a few and tighten them
where there are too many?"

Measured before changing anything, at phone width: the five histories that simply multiplied slot by
COL_FILL came out at 0.68 of their slot, as intended. The four that also capped at 9px came out at 0.41
(Pulse, Horizon) and 0.10 (Economic power, Valuations) — a four-column chart has an 80px slot, so a 9px
cap leaves 89% of it empty and the bars read as needles. That is the thinness she saw, and it is not a
judgement about four columns, it is a constant written for a crowded chart being applied to an empty one.
At the other end Desire at Max draws 787 columns into a 0.4px slot and the 1px floor made each bar 2.5
times its own slot, so the bars overlapped and the picture smeared rather than reading as dense.

So: proportional in the middle, bounded at both ends, and the bounds are about what a MARK can be rather
than about how many there are.
  · Below 1.5px a gap cannot be drawn at all, so the column takes its whole slot. The columns tile, the
    field renders at its true density, and nothing overlaps. This is what a dense series honestly looks
    like — Desire's daily closes, Temperature at Max — and it is a band, not a failed bar chart.
  · Above 20px a round-capped stroke stops reading as a capsule and starts reading as a dome: the cap's
    radius is half the width, and past 20 the cap is bigger than anything else the app draws. 20 is where
    the mark stays the mark. Four columns therefore get 20px rather than 9, which is more than twice the
    ink and still this app's shape rather than a dashboard's block.
Between those, slot × COL_FILL, which is the rule the app always meant.
~~~

### V578

`js/06-charts.js` line 748, in or after `vGrid`

~~~text
Version 578. A column's PATH, inset by its own cap. Keren, on Economic power: "the bars are crossing over
and covering the years, and the tooltip is covering what's hovering above 100%." Both are one fault: these
columns are round-capped strokes, and a round cap reaches half the stroke's width past each end of the
line it caps. At 5px that is 2.5px and nobody notices; Version 577 took four-column charts to 20px, and
ten pixels past each end is a bar hanging into the year row underneath and a full-height track poking up
into the reading's band above. The line is drawn half a width short at each end now, so the CAPSULE spans
exactly the interval it stands for — which is also what makes a bar's length honest, since a cap that
overshoots is length the number never claimed. A span shorter than the width collapses to a dot, centred:
the smallest a round-capped mark can honestly be.
~~~

`js/06-charts.js` line 924, in or after `chartAxes`

~~~text
V578: and never under the base rule either. Two 1px lines on one pixel row read as one darker line —
Keren: "the zero line is still a bit darker than the 50% line." `noGridAt` was the same thought, said
by four callers in a value; this says it in the one place that knows where the base actually is.
~~~

### V579

`styles.css` line 1817, before `.rangebar{ display:flex; gap:3px; background:var(--surface);…`

~~~text
V579, Keren: "the background should be white, and choose whatever is appropriate for the selector colour,
because right now it's white." The control is a CARD on the page now, like every other container here, and
the chosen segment is the accent's own wash — the colour this app already uses to say "this is the thing
you can act on", on the trend pill under every chart. White on white said nothing; white on the accent
wash says which segment is chosen without adding a colour to the app.
(V578 tried --surface-2 between the page and white, which blended but left the selection invisible.)
~~~

`js/04-components.js` line 411, in or after `__histRead`

~~~text
Version 579. A chart drawn at the wrong width, redrawn at the right one.
Eight of the histories build from `host.clientWidth`; three were handed the SHEET's width instead, which
is the container's padding and border wider — 360 against 332 — so their svg was scaled to fit and every
unit inside it came out at 0.92 of what it said. That is the Version 303 rule broken: type renders small,
and, since Version 574, the reading's band is reserved in svg units while the plate that sits in it is
HTML at full size, so the band came up about 5px short and the plate's two tens stopped being equal.
Keren: "the padding above and below the tooltip has to be even … every time I see an exception I don't
understand why." There is no exception now: if what the svg says it is does not match what it is, it is
built again at the width it actually has.
~~~

### V580

`styles.css` line 1807, before `:root{ --ctl-h:40px; --btn-h:40px; }`

~~~text
V580, Keren: "the date picker bar is very small to my fingers on an iPhone and I have very small fingers.
So we need to make this a bit larger so I can click on it comfortably and maybe we can use the proportions
of the trend button." Measured at 390px before changing anything: the bar was 34 but the thing a finger
actually hits is the SEGMENT, and that was 26 × 60 — two pixels past WCAG 2.5.8's 24px floor and
nowhere near Apple's 44. V428 split the two families at 34 and 40 on a real argument, a selector being a row
you scan against a button you press; she has now aimed the selector at the button's number, so the split is
retired and there is one height again. --ctl-h feeds every segmented control in the app — the history
bars, the indicators tabs, the spread toggle, the series bar — so all of them grow together, which is the
point: a 26px target was not a history problem.
~~~

### V582

`styles.css` line 2075, before `.hist-bar .rangebar,`

~~~text
V582, Keren: "I want it to be round like the trend button — both the current cycle and the cycle's years
picker." The control row and the trend pill are the only two chromes on a history page, and they were a
rounded square above a capsule. One shape now. Scoped to .hist-bar like every other decision about this row
(V519), so the row is one chrome: the mode bar, the years ruler, the cycle picker and Horizon's spread
toggle all take it, and the segment inside takes it too — a chip in a capsule is a capsule. The dropdown
MENU keeps --radius: it is a sheet of options, not a control, and a pill-shaped menu reads as a mistake.
~~~

`js/12-pages-nav.js` line 160, in or after `signSubject`

~~~text
V582, Keren: "I don't need the test result component in temperature because I already have the
average. I have the Fed target. I don't need to see it again as in another form." The row drew
3.4% against a 1–3% track — and the chart two inches above already carries 3.4% in its readout,
the cycle's average as a line and the Fed's 2% as a dashed one, with Highlights saying in words
where today sits. Four statements of one number.
The row went; its NOTE did not. panelRow filed o.info into HIST_NOTE so the ⋯ menu could open it
(the V518 rule, one string read from one place), and that note is the only place the app explains
why 1–3% is a target band rather than a normal range, and that the Fed's 2% is PCE while this
reading is CPI. It is filed directly now, the way the yield, horizon and deficit notes already are.
~~~

### V583

`styles.css` line 728, before `.vital-ring.mark .vital-ring-track{ stroke-width:15; stroke:…`

~~~text
V583, Keren: "in the energy page, I want the power preview to be a ring. So a full ring is 100% and 26%
would be less than third full." The battery drew powerWord.bars — five bins — so 26% and 39% lit the
same two bars and the glyph could not move while the number did. A ring is the reading itself: 26% is
26/100 of the way round, and it is the app's OWN ring, the one the vitals and the rates level already
wear, so nothing new was drawn to say this.
Only the stroke changes at mark size. The same 120 box at 15px scales a 9-wide stroke to 1.1px, which is
a hairline beside the 1.9px the other glyphs are stroked at; 15 lands on 1.9. The fill takes currentColor
rather than a state hue, so the mark keeps whatever ink its slot already gave the battery — a head mark
stays quiet grey, and the reading is never carried by colour alone.
~~~

### V584

`js/10-render-pages.js` line 774, in or after `worst`

~~~text
V584, Keren: "change the name of the category from fear curve to fear. And the icon should be an
umbrella, meaning fear of winter, basically." The category is the FEELING; the curve is one instrument
that measures it, and naming the category after the instrument was the same fault V524 fixed when it
took the half-dial's name off this row. The umbrella is the app's own — the VIX has worn it since
V467 — and it is the right glyph twice over: what you carry because winter might come.
~~~

### V585

`js/07-forms.js` line 316, in or after `moodSvg`

~~~text
V585, Keren: "bring back the lightning in the power icon." V583 read "I want the power preview to be a
ring" as the MARK and put the ring here, which was the wrong slot twice over — it took the glyph's job and
left the battery-shaped preview, the actual picture of the reserve, untouched. A mark says WHICH reading;
the preview says HOW MUCH. This bolt already existed as the ENERGY category's own mark, so Power now wears
its category's glyph rather than a second drawing of the same idea. (A V585 draft added a second boltSvg
a hundred lines up; two function declarations in one scope means the later one silently wins, which is a
coin-flip waiting on file order. There is one bolt.)
~~~

### V586

`js/05-history.js` line 24, at the top of the part

~~~text
V586, Keren: "use the same icon as the pulse icon in the circulation page" — and the reason it was
wrong here is that two heads had swapped glyphs. signMarks is where each reading's mark is decided
(Pulse:ecgSvg, Activity:trendUpSvg), and this map had Activity wearing the ECG and Pulse wearing the
heart. So the trace that means a heartbeat sat on the labour market, and Pulse — the heartbeat itself
— sat under a heart it shares with nothing else. Each head wears its own reading's mark now, which is
the only rule this map should ever have followed.
~~~

### V587

`js/07-forms.js` line 154, in or after `dropSvg`

~~~text
V587, Keren, with the drawing: Volume's mark is a filled disc inside an open ring. The speaker it
replaces was a pun on the word — volume as loudness — and this page measures a QUANTITY: the money
stock, a body of something, which is what a solid core inside a boundary draws. The proportion is the
one she sent: the inner disc is a little over half the ring's radius.
~~~

`js/12-pages-nav.js` line 224, in or after `signSubject`

~~~text
V587, Keren: "make sure that in the all indicators list, all items are updated with the icons that we
talked about." Twelve of thirteen already were; Fear was blank. Its umbrella is written onto the label
by renderFearCurve, the way Horizon's sunrise is — but that runs against the markup row, and by the
time the ROSTER is built this converter has moved those children once already, so whichever list is
built second gets a row whose label was never touched. Which one that is depends on build order, which
is why Horizon looked fine and Fear did not.
The mark is applied HERE instead, where the row is made, once, and only if it has none: the row cannot
reach any list without it, and a label that already carries its glyph is left exactly as it is.
~~~

`js/12-pages-nav.js` line 345, in or after `registerRoster`

~~~text
V587, Keren: "make sure that in the all indicators list, all items are updated with the icons that
we talked about." Twelve of thirteen rows wore their reading's glyph in a tinted disc; Fear wore
its curve gauge instead, because this preferred a .subject-ring with anything in it over the mark
on the label — and Fear is the only row that owns a ring. So the one reading with a picture was
the one reading without an icon, in a list whose whole job is to be scannable by icon.
The MARK comes first now and the ring is the fallback, which is the order every other list in the
app uses. Fear keeps its ring where a ring belongs: on the Mood page, as that row's preview.
~~~

### V588

`js/09-render-core.js` line 636, in or after `hide`

~~~text
V588, Keren: "it would be very informative to see interest rates by cycles and years, similar to other
history components in the app."
Version 473 deleted this page's window ruler for a real reason, and it has to be answered rather than
overridden: "a window ruler labelled 5Y a centimetre from a maturity labelled 5Y was the collision."
Both numbers are years and they mean different things — one is how long the loan runs, the other how far
back you are looking — so no amount of labelling makes them safe side by side.
The answer is the one V522 already found for Horizon: "10Y minus 3 months, 10Y minus 2 years shouldn't be
a new ruler — you can put it in the three dots." A control that chooses WHICH SERIES the chart draws
belongs in the head's menu; the control ROW is for the window. So the maturity moves to the ⋯ menu and
this row becomes the same Cycles / Years bar and cycle picker every other history page carries. The two
year-numbers are never on screen together, which is the collision gone rather than relabelled.
["5y","10y","max"] for the reason HZN_STOPS gives: the series starts in 2005, so 25Y is unanswerable.
~~~

### V590

`js/10-render-pages.js` line 578, in or after `renderFearCurve`

~~~text
V590, Keren: "make a history component in the fear page that will show the curve — check how we did
the inverted yield curve and apply the same."
divergeChart is that treatment: bars hanging off a reference line, coloured by which side they fall. On
Valuations the line is CAPE's fair value; here it is 1.00, and the app's own CSS already reads the two
sides correctly without a new colour — .dv-bar.over is the serious ink and .under the good, which is
exactly inverted against normal. The threshold needs no defending: it is the definition of the shape
rather than a level anyone chose, the sentence curveVerdict() already carries.
The series is fearCurveHistory, monthly from December 2007 — VXVCLS begins then, so that is the first
month the ratio can be computed at all. Its last point is the number the gauge above shows, because
both round to three decimals off the same two legs.
~~~

### V591

`js/10-render-pages.js` line 567, in or after `renderFearCurve`

~~~text
V591, Keren: "I think we can get rid of the meter in the fear page, right? Because we inserted a
history component." Right, and for the reason that took the meter off Temperature in V582: the page was
stating one thing four times. What goes is the VIX row — a level against its usual band — and what
stays says more: the gauge reads the curve now, the history draws it back to 2007, and Highlights'
second card is entirely about the VIX, giving 14.21, the 13–20 band, the 9.14 record low and the 82.69
high in a sentence that can hold all four where a track can hold one.
Worth naming the one thing it costs, because it is not the same redundancy Temperature had: the history
draws the RATIO and the meter read the LEVEL, so the VIX level stops being a figure on this page and
survives as prose. That is the right trade on a page called Fear, where the curve is the reading and the
VIX is the leg it is computed from — but it is a trade, not a deletion of a duplicate.
~~~

### V592

`js/05-history.js` line 658, in or after `fmt`

~~~text
---------------- V592: Hormones — the policy rate's history ----------------
Keren: "let's add a fourth category in circulation called hormones. And hormones will be interest rates."
A sibling of unempHistoryChart rather than a flag on it, for the reason V498 gives: prices are read against
a target, people against a band, and a POLICY RATE against neither. Folding a third subject in behind a
flag is how a component stops being readable.
What this chart deliberately does NOT have is a band. "Restrictive" and "accommodative" are real ideas and
the level that divides them is contested, unpublished and moves — so drawing one here would be inventing
a band, which is the one thing this app never does. The columns stand on zero, the window's own average is
drawn across them, and the reading is the height. Direction is what the trend pill is for.
~~~

`js/10-render-pages.js` line 406, in or after `renderLongCycleTag`

~~~text
---------------- RENDER: Hormones (V592) ----------------
Keren: "let's add a fourth category in circulation called hormones. And hormones will be interest rates."
The anatomy is the argument. A hormone is a chemical MESSENGER: it is secreted deliberately, it reaches
everything downstream, and the whole cycle runs at the tempo it sets. That is the policy rate exactly —
and it is the distinction this app was missing, because Pressure measures what the market CHARGES (the
Treasury curve) and nothing measured what the Fed SETS.
Two figures live here and they are not the same thing, so the page is careful to say which is which: the
TARGET RANGE is the decision, and the chart plots the EFFECTIVE rate, which is where money actually
traded. They differ right now — 3.75–4.00% set on Sep 16 against 3.63% effective through August — and
that is not a contradiction but a date: August ran under the previous target. This is the V294 rule, the
one Keren caught on Pressure ("you write 10-year 4.94 and I see inside the container 10-year 4.70"): two
numbers for one thing is a fault, two numbers for two things has to be LABELLED.
~~~

### V593

`js/07-forms.js` line 344, in or after `sunriseSvg`

~~~text
V593, Keren: "make the umbrella icon without rain because it looks unclear." The three short verticals
V467 chose as rain were the whole ambiguity at 13px: at that size they read as scratches beside the
canopy rather than as weather, and the eye spends its attention deciding what they are. The canopy, the
shaft and the crook are unmistakably an umbrella on their own — which is the reading anyway. The canopy
is deepened a little to carry the meaning the drops were doing.
~~~

`js/10-render-pages.js` line 554, in or after `renderFearCurve`

~~~text
V593, Keren: "I'm still seeing the meter component. We need to drop it." The half-dial went. It was the
page's reading of the curve TODAY, and the history under it now carries the same number in its readout
plate, on a picture that also says where today sits against nineteen years of it — which is the V582
argument on Temperature, one reading stated once.
Its two companions are not lost. The DATE is the history's own, and rides in the readout. The NOTE —
"there's info next to the title, put the info in the three dots in the history panel as convention" — is
filed to HIST_NOTE, which is where every other page's note lives and what the ⋯ opens: the V518 rule,
one string read from one place. That also retires the last (i) sitting beside a title on this page.
~~~

### V594

`styles.css` line 703, before `#signs-list:not(:has(> :not([hidden]))){ display:none; }`

~~~text
V594, Keren, of the Cycle tab on her phone: "there is a lot of space between the bottom menu and the all
indicators button — make the spacing even, like the spacing between the current cycle and weather/mood."
It measured 20 against a 10px rhythm, and the extra ten was a ghost. #signs-list still holds four sign
pages (Desire, Pulse, Volume, Fear); they are all `hidden`, so it renders at zero height — but a
zero-height flex CHILD is still a child, and the column's gap is spent before it. The V447 cleanup that
removes emptied containers cannot take this one, correctly: it is not empty, it is holding the pages.
So the rule is the honest statement of it: a container whose every child is hidden is not content, and
takes no gap. It reverses itself the moment one of those pages opens.
~~~

### V595

`styles.css` line 508, before `--gap-top:20px;   /* the page's own frame: under the top bar…`

~~~text
V595, Keren: "make the padding on the left and right 20 pixels, meaning every page in the app has 20
pixels padding from all sides." The sides were already 20 (.wrap pads 0 20px) and the bottom now
follows this token, so the page's frame is square on one number by raising this from 15. It also
carries --topbar-gap and the first-element margins on the inner pages, which is the point: one
token, every page, all four sides.
~~~

`styles.css` line 694, before `.wrap{ padding-bottom:calc(72px + var(--gap-top) + env(safe-…`

~~~text
V595, Keren: "the padding on the bottom should be the same as the padding on the top." It is the same
TOKEN now rather than the same number, so the two cannot drift: --gap-top is what the first element on
every page clears the top bar by, and the last element clears the tab bar by exactly that. It was --gap
(10) against the top's 15.
Below it sits whatever the home indicator takes, which is not padding and is not ours to even out.
~~~

### V596

`page-body.html` line 262, before `<details class="subject" data-subject="hormones">`

~~~text
====== HORMONES — V596 ======
Keren: "let's fold Treasury into Hormones — one page for the hormone: the policy rate the Fed sets, and
the Treasury curve as the body actually experiences it, clearly labelled as two readings of one thing."
This is the page V592 said was worth revisiting and V473 half-solved. Three versions had the same quantity
on two rows of one category: Pressure measured what the market CHARGES and Hormones what the Fed SETS, and
a reader on Circulation met the price of money twice before reaching the pulse. Her own draft settles which
of the two names the thing — "Interest rates," Mrs. Market once told me, "are like hormones. They're
invisible — but you feel them everywhere" — and settles that Pressure was never a measurement in the
model at all: in the Circular Flow chapter pressure is what builds WHEN circulation goes wrong, a symptom,
not an instrument.
So the page is one gland read at two distances: the rate the FOMC sets (the secretion, above), the yields
the market charges across every maturity (the bloodstream, below), and the FOMC's own settings as the list
that ends it. The machinery is MOVED, not rebuilt — the Version 314 rule, for the sixth time: the same
#ylm-* svg, the same drawYlm, the same tooltip and trend pill, under a different name and a different head.
What went with Pressure is what belonged to Pressure alone: the cuff ring (it scored the 10-year level on a
0–6% band, a reading this app no longer makes), the 10Y/3M row figure, and levelZone's High/Normal/Low.
~~~

`js/09-render-core.js` line 379, in or after `cardDetailHtml`

~~~text
The name is true again. This block drew the Treasury levels under three page names — Pressure until V596,
Hormones for one version, Horizon's ⋯ menu from V598 — and V639 gives it back to Pressure, where Keren
put it: the 10-year is the risk-free loan the whole economy prices off, and its level is the pressure
the borrower is under. See the PRESSURE comment in page-body.html for her words.
~~~

`js/12-pages-nav.js` line 714, in or after `colClass`

~~~text
V596, Keren: "let's fold Treasury into Hormones." Four members became three, and the category is
finally a sequence rather than a list with a repetition in it: the RATE that is set, the SPEED the
money moves at, the QUANTITY of it. Pressure was the odd one twice over — it measured the same
quantity Hormones does, from the other end, and in her own draft pressure is not an instrument at
all but what builds WHEN circulation goes wrong.
~~~

### V597

`js/12-pages-nav.js` line 198, in or after `signSubject`

~~~text
V597 read the loan survey here; V639 returns the Treasury yields (Keren: "pressure should be yields").
Leading, because the market's price of money moves before the activity it finances shows it.
~~~

### V598

`page-body.html` line 292, before `where they had been that page's only list; V609 gives them p…`

~~~text
V598, Keren: "the spread is 10 years minus three months, and it's comprised out of the treasury
yields, so maybe you can merge them." The Treasury machinery left this page for Horizon, which is
where the SHAPE of the curve is the reading. Its LEVEL was the half that repeated this chart anyway
— Treasury yields and the policy rate move together — so Hormones loses a second statement of
itself and Horizon gains the data its own reading is computed from. One page, one job.
~~~

`js/12-pages-nav.js` line 731, in or after `colClass`

~~~text
V598, Keren: "if the horizon says if we're optimistic or pessimistic, then it should be in mood."
She is right and V597 was wrong to move it. Look at what this category holds: Valuations is what the
market will PAY, Fear is how frightened it is, Desire is how much risk it WANTS — opinions, every
one. Energy holds measurements of the body: the reserve, the debt, the jobs. The yield curve is the
bond market saying what it expects of the next few years, which is an opinion, not a measurement.
(The market words for the feeling are bullish and bearish; long and short are positions taken, which
is a different thing and not what this reading is.)
~~~

### V599

`js/06-charts.js` line 1217, in or after `horizonInfoHtml`

~~~text
V599, Keren, of the lab-result row under this chart: "get rid of the test result component below the
chart — it's not informative." She is right, and the merge is what made it so. The row printed the
spread and a one-sided meter reading "0 and above", which is the same claim the chart makes in its own
ink: the columns change colour at zero, so the meter was the zero line drawn a second time, in words.
`horizonPanelHtml` and its cache went with it. HZN_METERS stays, because the note still reads the band
to explain where the record's ends come from — which is the place a band belongs once the picture has
already said which side of it we are on.
~~~

### V600

`js/05-history.js` line 87, in or after `headMenuHtml`

~~~text
V600, Keren: "it's a sub menu — I click the three points, then I see Spreads; when I hover over it, it
opens another menu." So `menu` may now return GROUPS instead of a flat string: an array of
{ key, label, value, on, rows }. The root lists one row per group with the reading that is currently
showing beside it, and opening a group replaces the menu with that group's rows and a way back.
A flyout panel is what this is on a desktop, and it is the one thing a 414px phone cannot have — a
second panel beside the first runs off the screen. A drill-down is the same idea in the space there is,
and it opens with one tap on the group rather than two panels deep. (V600 opened it on hover as well;
see V601 below for why that had to go.)
~~~

### V601

`js/05-history.js` line 180, in or after `paintHeadMenus`

~~~text
V601, Keren: "when I hover over spreads it immediately goes to the spread menu, and then when I click
back it doesn't go back — it's stuck."
The hover handler V600 added is gone, and the fault was mine. A pointer is ALREADY sitting over a row the
moment the menu paints under it, so the group opened before she had chosen it; and leaving through Back
put the root rows back under a pointer that had not moved, which fired mouseover again and walked her
straight back in. A delay would have made that slower, not different — the pointer is still there when
the delay ends. The trap is that opening on hover means the menu answers where the cursor HAPPENS to be,
and the cursor is always somewhere.
So a group opens on a click and closes on a click, which is also the only gesture an iPhone has: touch
fires no mouseover at all, so this drawer was never going to open by hover on the device the app is read
on. One gesture, one behaviour, both places.
~~~

### V602

`js/05-history.js` line 95, in or after `headMenuHtml`

~~~text
===== THE HEAD MENU IS ONE COMPONENT (V602) =====
Keren: "this behaviour should apply to all history menus. If we were in the future to add more things,
it would have to be with the submenu just like in the Horizon. Make it a rule for the future." And:
"it should also behave like a component."
So it is one, and the rule is enforced by there being no other way to build a menu: `menu` returns
GROUPS, always — an array of { key, label, value, on, rows } — and this function turns any head's
groups into the same two-level menu, with the same root rows, the same chevrons, the same reading shown
beside each group name, the same way back and the same note at the bottom. The flat-string branch V522
wrote is gone rather than deprecated: an escape hatch nobody is using is how a component quietly becomes
two components, and the next page to want a which-series choice would have reached for the older shape
because it was shorter. Now the short way IS this way.
One group is a legitimate menu: it still drills, so a reading that grows a second group later does not
change how the first one behaves.
~~~

### V603

`js/10-render-pages.js` line 319, in or after `moved`

~~~text
V603, Keren: "you have a lot of text in the insight container, and you have a short version of the
insights — time from un-inversion, last inverted, deepest point. Merge that into the insight and make
the text short and concise."
Two containers for one page's commentary was the split: a wall of prose in one and three bare facts in
another, with nothing saying why they were apart. They are one section now, prose first and the facts
under it, which is the shape every other page already uses. The prose lost about two thirds of its
length and none of its figures: every number here is still computed from `horizonRead`, and what went
was the restating — the same idea said twice in a longer way, and the paragraph explaining what a
headline means when it says "the curve", which the ⋯ menu now answers by letting you switch to the
other one and look.
~~~

### V604

`styles.css` line 2265, before `in a host so the live repaint can rewrite them without touch…`

~~~text
===== V604, Keren: "if you are incorporating data and lines, make sure you have spacing and dividers that
show consistency in the UI." A rule, not a patch on one page.
ONE HAIRLINE PER SEAM. A Highlights section mixes two row idioms: a `.hi-card` carries its rule BELOW and
an `.aux-stat` carries one ABOVE, so where prose meets facts both fire and the seam draws twice, fourteen
pixels apart. The card gives its rule up at that boundary, because the row below is bringing one.
AND A ROW ENDS WITH AIR. `.aux-stat` has no bottom padding, which is right between rows and wrong at the
end of a list: the last fact sat 4px off the card's own edge. It gets the same 10px it wears on top, so
the list closes on the rhythm it kept all the way down.
~~~

`js/06-charts.js` line 551, in or after `highlightsHtml`

~~~text
V604, Keren: "I want the insights to be economy, biology, so I would understand the comparison."
The app had TWO names for one section: the category pages and Horizon said Insights, the five metric
pages said Highlights, and both were the same component holding the same lede-then-cards. One name, and
it is hers — a page's commentary is its insight into what the reading means. (The bare `.highlights`
fact lists on Hormones and Pressure are untouched: they carry no head, because a list of four published
settings is not a reading of anything.)
~~~

### V605

`styles.css` line 1994, before `.bh-title{ flex:0 1 auto; min-width:0; margin:0; }`

~~~text
V605: the title no longer eats the row. It hugs its text so the Σ can sit BESIDE it — "next to the
title", which is where Keren put it — and the ⋯ is pushed to the far edge by its own auto margin
rather than by the title’s width. On a head with no Σ nothing moves: the slot is hidden and the auto
margin does exactly what flex:1 was doing.
~~~

`js/06-charts.js` line 460, in or after `mean`

~~~text
V605, Keren: "total price change 9% is fixed for the current cycle — it should be dynamic on the history
component. The place I would put it is next to the title: CPI year over year, and in parentheses, sigma
plus 9% — sigma, the Greek letter for summary. And if I turn the bar to 10 years, I will see the sigma
for the 10 years."
So the total leaves Insights and becomes part of the HEAD. It was a fact row that moved with the window
while everything around it stood still, which is why it read as fixed: a figure that answers the ruler
belongs beside the title the ruler is changing, not in a paragraph three components down.
Σ is the right mark and not decoration: the figure is the sum of every bar in view, so it changes when
the window changes because the window is exactly what it sums.
~~~

### V606

`styles.css` line 1999, before `I get to the parentheses." It was the head's own 10px flex g…`

~~~text
The window's total. V606 sets it at the TITLE's size, Keren: "instead of the year over year, make it in
the same size font" — it takes the place ", YoY" held, so it takes its weight in the line too. Mono,
because it is a number (the V270 rule), and muted, because the title is the subject and this is a note
on it.
~~~

`js/05-history.js` line 16, at the top of the part

~~~text
V606, Keren: "I don't need the year over year, because the graph itself shows me it's by quarters and
the graph shows me the timeline. That goes to all history components."
A head names WHAT is measured; the chart's own axis names WHEN and in what unit. ", YoY" was the head
answering a question the picture under it already answers, on every window, without being asked. The
three titles that carried it lose it; the ones carrying a UNIT rather than a period keep theirs
("share of income", "against fair value"), because a unit is part of what the reading IS.
~~~

`js/05-history.js` line 215, in or after `panelRow`

~~~text
V606, Keren: "everywhere you have the test result component and the results are equal to what is
written in the graph — the latest data — just remove it from the test result component, because
it's a duplicate."
A row carrying `head` IS the reading the page's chart draws, and that chart prints its latest value
on its own plate a few pixels above. So the row states the BAND and nothing else: where the reading
sits between the two ends, which is the one thing the picture never shows. Rows WITHOUT `head` keep
their figure — they are the page's other markers, and nothing on screen is drawing them.
~~~

`js/06-charts.js` line 471, in or after `headSigma`

~~~text
V606, Keren: "drop the space between the sigma and the number" — the Σ is the figure’s operator, not
a word before it, so it binds tight the way a minus sign does.
~~~

### V607

`styles.css` line 2003, before `.bh-sigma{ flex:0 0 auto; margin-left:-5px; font-family:"IBM…`

~~~text
V607, Keren: "there is too much space between the title and the sigma — CPI has like three spaces until
I get to the parentheses." It was the head's own 10px flex gap, which is right between the MARK and the
title (two different things) and too much between the title and a note ON it. The negative margin cancels
most of that one gap and leaves a single space, which is the spacing the line is read with.
~~~

### V608

`js/04-components.js` line 448, in or after `hide`

~~~text
V608, Keren: "I'm hovering over the chart in hormones and I don't see the marker changing, I can't see
the values of each bar." She reads this app on a phone, and a phone has no hover. The handler was wired
to `pointermove` alone, which on touch only fires while a finger is DRAGGING — and a drag over the chart
was going to the browser as a scroll, because the svg left `touch-action` at its default. So on the one
device the app is actually used on, no history chart has ever been readable bar by bar.
Two halves to the fix and neither works without the other: the stylesheet gives the plot `touch-action:
pan-y`, which keeps vertical scrolling and hands horizontal drags to us, and the same handler now runs
on `pointerdown` too, so a single TAP reads a bar. A tap is what a phone has instead of a hover.
~~~

`js/05-history.js` line 10, at the top of the part

~~~text
V608, Keren: "capital letters in the beginning of each word, and that is true for all titles." Title case
on every head, and "Effective federal funds rate" becomes "Federal Funds Rate" — the effective rate is
what the chart plots and what the note explains, and the word was doing the note’s job in the title.
Short joining words stay lowercase ("of", "over"), which is what title case is; capitalising those reads
as shouting rather than as a title.
~~~

`js/05-history.js` line 711, in or after `fmt`

~~~text
V608, Keren, of the sea change: "I want the bars in the hormones chart to be different shades of blue."
The right shading for it, because the reading she is looking for is not in any one bar — it is the
forty-year drift Howard Marks calls a sea change, and a drift is a thing you see in a ramp and not in a
single colour. Six steps, light to dark, which is what a sequential scale is.
The step comes from the bar's place between the WINDOW's own low and high, never from levels anyone
chose: at Max the 19% of 1981 is the darkest blue the app can print and today is nearly white, which is
the sea change drawn; inside one cycle the same six steps re-spread across that cycle's own range. The
record sets the scale, the way windowScale already sets the axis.
~~~

### V609

`js/10-render-pages.js` line 477, in or after `draw`

~~~text
---- V609, Keren: "can you put that into insights? The hormones page doesn't have an insight section.
And the current federal funds target, last Fed move, first hike and next decision — you can put that in
insights." So it gets one, the shape every other page has since V604: the biology in two sentences, then
the cards, then the FOMC's own facts underneath.
Every figure below is COMPUTED, including the peaks. A card that says "every peak since 1981 was lower
than the last until 2024" is a claim about the record, and a claim about the record is read off the
record or it is not made — which also means it stays true the year a new peak arrives.
~~~

### V610

`page-body.html` line 458, before `<div class="cyc-card" id="rhymes-card">`

~~~text
Version 610, Keren: "Like Mark Twain once said, history doesn't repeat, but it rhymes. I want the app
to help me see how history repeats itself." So this card stands today beside ONE past top at a time —
her own choice over a grid of all three, and the right one: a comparison a reader can hold is one
comparison.
What it deliberately does NOT do is score, rank or forecast. A single number claiming a bear market is
coming would be a prediction invented out of six readings, and the app would deserve to be distrusted
for it. The card shows two readings and the period each was taken in; the reader draws the conclusion.
It sits ABOVE the cycle history because it is about today, and the history below is about the past.
~~~

`js/07-forms.js` line 588, in or after `curveDetailHtml`

~~~text
---------------- The tops a reader can stand beside (Version 610, rebuilt in Version 612) ----------------
Keren, Sep 28, 2026: "Like Mark Twain once said, history doesn't repeat, but it rhymes."
Every field is an EVENT, not model output: the S&P 500's last closing high before a fall, and that fall's
depth, from ONE source's table so the four rows are measured the same way. `days` is not stored — it is
counted from `peak` and `trough`, because a length written out beside the two dates it comes from is a
number that can disagree with them.
WHICH TOPS ARE HERE, and why it is four and not five. These are the tops the source records as bear
markets since 1990, each named for the cycle it fell inside. The COVID-19 Cycle owns two of them, which is
true of it: the 2020 crash fell and recovered inside one year, and the inflation bear is what closed the
cycle. The Big Tech Cycle has none — its worst fall was a correction, which is the app's own reading of
it ("a stumble rather than a bust") and is why it has no block to stand beside.
`y`, `q` and `m` are the SAME period keys the histories are keyed by, written out once so a lookup never
has to derive a quarter from a date. These are not cycles and do not belong in marketCycles: a cycle is a
chapter of the model, a top is a day.
~~~

`js/12b-analysis.js` line 252, in or after `prettyK`

~~~text
---------------- RENDER: Rhymes — today beside a past top (Version 610, rebuilt in Version 612) ----------
Keren, Sep 28, 2026: "history doesn't repeat, but it rhymes. I want the app to help me see how history
repeats itself." Then, on the first pair of columns: "Schiller Cape peak was 43.8 in the dot com peak, and
now we are in with 41.3. I think this is the good comparison."

VERSION 611 SHIPPED THAT COMPARISON TWICE, once as figures here and once as a grid of dots called Echoes,
and she read the dots and could not check them: a mark saying two readings are alike, with neither reading
on the screen, asks to be believed. The dots are gone and the idea they carried is now a mark on a row
that HAS both numbers on it, so "alike" is always something the reader can verify by eye. One card.

THE PAIR RULE. Both columns come out of the SAME series, so "at the peak" and "now" are one gauge read
twice (Version 294), and each figure carries the period it was taken in beneath it — which is how the
reader can see the CAPE column reads January 2000 and not the March the market turned in.
A series that does not reach the top leaves an em dash and says from when it IS measured. Nothing is
interpolated: the record either covers the date or it does not.

WHAT THE MARK MEANS. A reading is turned into its place in its OWN record — today's CAPE sits above 96% of
that record — and the row is marked when the peak's place and today's are within five points of each
other. A place carries no units, so one rule works on all thirteen rows: five per cent of the federal
funds rate and five per cent of a spread that lives near nought are not comparable quantities. A rank also
survives an outlier, where a share of the range does not — 1981's 19% would otherwise set the width of the
federal funds band for ever.
There is no count of marks and no score. Thirteen rows agreeing is not a prediction, and a number claiming
it was would be invented.

The rows are the roster in the order the four categories run, and the categories are labelled because
thirteen rows without them is a list rather than a body. Like everything that reads capeHistory this runs
after renderPagesAndNav, because Version 255 carries that series' last point to today.
~~~

### V613

`page-body.html` line 543, before `<div id="cycle-cats"></div>`

~~~text
Version 613, Keren: "when I press, for example, Housing Cycle, I want the view to be exactly like the
current cycle page — I would see four categories of Weather, Mood, Circulation, Energy. But instead of
going to another inner page, just show the data very briefly." So the Cycle tab's four categories come
to a closed cycle, with the readings SHOWN rather than behind a door: on the Cycle tab a category is a
door because there is a live page behind it, and a cycle that ended has no live page — only what it
finished at and how far it travelled.
~~~

`js/12b-analysis.js` line 118, in or after `calendarReset`

~~~text
---------------- RENDER: a closed cycle's four categories (Version 613) ----------------
Keren: "I want the view to be exactly like the current cycle page — four categories of Weather, Mood,
Circulation, Energy. But instead of going to another inner page, just show the data very briefly."
Same four categories, same row anatomy, one difference that is the whole point: on the Cycle tab a
category is a DOOR, because behind it is a live page that keeps moving. A cycle that ended has no live
page. So the row shows what the reading FINISHED at and how far it travelled getting there, and there is
nothing to open.
WHERE IT ENDED AND ITS RANGE — her choice over the peak reading and over first-against-last. It answers
both questions a closed cycle raises: how did this end, and how far did this reading move. The extreme is
usually the story and first-against-last would hide it; the peak reading would leave the Big Tech Cycle
empty, since it never had a bear market to have a peak at.
A reading with nothing inside the cycle says so. Nothing is carried in from outside the years.
~~~

### V614

`js/06-charts.js` line 810, in or after `colWidth`

~~~text
================= THE HISTORY FRAME IS ONE COMPONENT (Version 614) =================
Keren, Sep 29 2026: "can we stay consistent in terms of components — name all the components in the app
and then we use it and reuse it, because it seems that we are writing all over again every time we make
a change."
An audit said where she was feeling it: fifteen history charts, 1,572 lines, each RETYPING the same frame.
The three lines below were written out ten times — the width floor, the narrow breakpoint, the height and
the four edges — and so were the year label, the crosshair, the zero rule, the mean rule and the svg that
wraps them. Ten copies of a geometry means the next person to move the plot down four pixels moves it on
nine charts and misses one, and that chart is wrong for a year before anyone notices.
These five functions are the frame. They are deliberately thin: this is not a chart engine, it is the
parts that were ALREADY identical, lifted (Version 314 — move, do not rebuild) so the DOM they produce is
byte for byte what it was. What a chart draws INSIDE the frame stays its own business, because that is the
part that genuinely differs.
Every class here belongs to this frame and to nothing else, which the component ledger now enforces:
.bt-xl, .hist-cross, .m2-zero, .vh-mean and .vh-svg had 14, 13, 7, 6 and 9 authors between them.
~~~

### V615

`js/11-dial-cycle.js` line 767, in or after `renderCycleView`

~~~text
Version 615, Keren, of a closed cycle opened from Analysis: "I see temperature and growth charts that
are not matching the history component that we built. And we basically don't need them because the cycle
is closed." Three things were wrong with them there and she felt all three. They spoke a different
visual language from every history in the app — no head, no mark, no ⋯, no ruler. They repeated the
Weather rows immediately beneath them, which say the same reading with its range. And they printed
"CURRENT CYCLE" over a cycle that ended in 2018, which is not a style problem but a false statement.
So a closed cycle gets the DIAL and nothing else from this function, and the two cards stay in the
metric-page drawers where they belong, still showing the cycle that is actually current.
~~~

`js/12b-analysis.js` line 149, in or after `renderCycleCats`

~~~text
Version 615: the SHAPE, in the row. Taking the two charts off this view (see renderCycleView) left
it able to say where a reading finished and how far it ran, and not how it got there — which is the
part Keren is still turning over ("I'm still thinking how can we see the past data"). A sparkline
answers it inside the row she already has, with no page to open and no component to invent:
`sparkHtml` has drawn exactly this on peek cards since Version 253, and `.ci-mini` is the slot a
member's small picture has always gone in.
It is drawn in the accent rather than in a state colour, because `.ci-mini` already neutralises
every other mini it holds — a closed cycle is not being graded, it is being read.
~~~

### V616

`js/12b-analysis.js` line 78, in or after `open`

~~~text
Version 616, Keren: "when I click on AI Cycle, which is the current cycle, I just want to go to the
current cycle page, because the cycle is not ended yet."
Right, and it settles what Version 615 left half-said. That version gave a CLOSED cycle a view of its
own — the dial, and every reading as what it finished at and how far it ran — because a cycle that
ended has no live page. The open cycle has one: the Cycle tab IS this view, still moving, with its
charts and its doors. Building a second, frozen copy of it would be the app telling a reader that the
AI Cycle is over, in the one place whose whole subject is whether it is. So the row is still a door;
it opens the tab rather than a page.
It leaves through the tab button rather than by assembling the tab here, so the Cycle tab does its own
setup — placeCharts, the live cycle, the top bar — in the one place that knows how.
~~~

### V620

`js/01-refresh-season.js` line 2, at the top of the part

~~~text
================= EVERY REACH IS ACCOUNTED FOR (Version 620) =================
Keren asked where the UI architecture stands, and this was the third of the three things holding it down:
renderers reach into the global document by NAME, 158 times, and almost every reach is guarded with
`if (!el) return`. The guard is right — a page renders only some of these — and it is also a blanket over
three different failures that look identical from outside:
  • the name does not exist at all. V617's wiring check fails the build on that one now.
  • the name exists, but not on the page being rendered, so the renderer silently does nothing.
  • the name is on the page and the renderer skipped it, so yesterday's content stays.
`byId` is the one way to reach an element, and it RECORDS every reach that came up empty. `byIdMaybe` is how a
reach says it expects nothing sometimes — a control that only some pages carry, an element built later —
so the difference between "optional" and "broken" is written down in the code instead of being guessed
from a guard. The suite walks every page and asserts the record is empty: a `byId` that found nothing is a
renderer reaching for something that is not there, which is a bug with no symptom.
~~~

### V624

`js/12b-analysis.js` line 1, at the top of the part

~~~text
================= THE ANALYSIS TAB (Version 624) =================
Keren: "explain to me what the 12 pages nav is — maybe we need to work on it now before we will have to
refactor the entire app 200 versions from now."
She is right about the direction, and the measurement says where to cut. 12-pages-nav.js does six jobs;
four of them are the Cycle tab (the peek row, the signs, the four categories, the pages and the
navigation between them) and they live inside ONE 1,270-line function that shares a closure. Those cannot
be pulled apart cheaply and, on today's evidence, are not what grows.
These four are the Analysis tab, they were all written in the last fortnight, and they reference NOTHING
inside that function — the only mention crossing the line is in a comment. So this is the cut that costs
nothing and takes the part that is actually growing: the cycle list, a closed cycle's categories, the
roster the categories and Rhymes share, and Rhymes itself.
ONE ORDERING CHANGE, and it is a correction rather than a cost. renderCycleList used to register first,
ahead of renderPagesAndNav; it now registers after, like everything else in this file, which is the side
of the V255 CAPE carry the readings belong on. Nothing here reads the roster at load — a cycle's
categories are built when a cycle is opened — so the move is safe as well as tidier.
~~~

### V625

`js/02-live.js` line 427, in or after `repeatable`

~~~text
Version 625, Keren: "one dispatch." Four views used to hang a callback on `window` so another view could
reach it: the Growth economy picker, the Horizon spread picker, the Pressure maturity picker and the
Treasury redraw. A handler on `window` is invisible — nothing can tell a name nobody answers from a
name spelled wrong, so a broken control reads as a control that does nothing. An ACTION is named here
instead: the view that owns the answer registers it, the view that needs it fires it, and neither holds
a reference to the other. A fire with no handler is recorded, which makes the suite able to see it.
~~~

### V626

`js/01-refresh-season.js` line 24, in or after `byIdMaybe`

~~~text
Version 626, Keren: "markup and placement split." A render used to name its host, check it exists and
write into it — three concerns on one line, in 44 copies. `put` is the one placement: it takes an id or a
node, writes the markup and hands the node back. The guard moves inside, which matters most for the 29
sites that wrote straight into an unchecked lookup: a host that has gone missing is now recorded by `byId`
and the render carries on, where before it threw and left the page half drawn. Placement being ONE named
operation is also the seam a subscriber needs — nothing else has to know how markup reaches the page.
~~~

### V629

`js/02-live.js` line 179, in or after `repaintValuationRow`

~~~text
---------------- THE READING REGISTRY (Version 629) ----------------
Keren: "a component based app that will be 100% ready for server side integration with controllers
and services."

Nine readings arrive from outside this file. Their contract used to be spread across four places that
had to be kept in step by hand: `LIVE_DOCS` and `LIVE_SCALARS` named them, a 75-line switch inside
`applyLive` validated each one and knew where it landed, and REPAINT and ON_OPEN said what redraws.
Four lists drift, and these had: V628 found two names missing from one of them, and `LIVE_SCALARS`
turns out to have been declared and then never read by anything at all — which was hiding a real
asymmetry between the two sources, below.

One row per reading now, and the row is the whole contract:
  kind    the shape it arrives in — object, series or scalar
  band    a scalar's floor and ceiling; a number outside it is refused, never clamped
  ok      an object's own admission test, where it has one beyond being an object
  set     where the value lands. The ONE thing that genuinely differs between readings.
  paint   what redraws when it moves
  onOpen  true instead of `paint`: its only display is an inner page, which redraws in full on open

`LIVE_NAMES` is the registry's own key list, so the fetchers cannot ask for a name it does not know.
`checkLiveCoverage` asserts every row is complete and that `paint` and `onOpen` are exclusive — a
tenth reading is one row, and an incomplete row fails the suite.

THE SERVICE SEAM. Above this, `receive` is the only door a reading comes in through, and the two
sources this app has — the artifact's own database, and the hosted site's JSON file — each do nothing
but produce a {name: document} object and knock on it. A server-side backend is a third function of
that shape and nothing else in the app changes: the registry already states what it expects, the band
already refuses a wrong number, and the painters already know where it shows.
~~~

### V630

`js/12-pages-nav.js` line 285, in or after `rank`

~~~text
---------------- THE ROSTER'S OWN PIECES (Version 630) ----------------
Keren: "a component based app that will be 100% ready for server side integration with controllers
and services."

Four helpers that read a reading off the page and write it as a roster row. They close over nothing in
`renderPagesAndNav` — measured, not assumed: of the 43 names that closure declares, the cards and the
inner pages reference NOTHING from the sections below, and the only mention of `openMetricPage` in those
990 lines is inside a comment. The cards emit `data-open` and the controller listens; that separation was
already there, just not visible from the outside.
What the measurement did NOT say is WHEN each piece may run. `registerRoster` below reads the drawn page,
so it is a step with a place in an order, and lifting it here without noticing that broke All indicators
until the snapshot said so. Closing over nothing and running at any time are two different properties.
~~~

### V631

`js/09-render-core.js` line 192, in or after `srcBlock`

~~~text
---------------- THE SUBJECT ROW (Version 631) ----------------
Keren: "make it a 10." The one row the app opens pages from — a sign in the category list, a member of the
roster, a category in Browse, the All-indicators door. Four functions built it, each spelling out the same
summary/ring/text/chevron anatomy, and the ledger said so (`.subject-label` in 4 places) once V630 stopped
hiding three of them inside one giant closure. One of the four was dead; these are the three that remain,
built here once. What differs between them — what sits in the ring, what the text says — is what the
caller passes. What is the same — the door, its role, its title, its chevron — is nobody's to respell.
Attribute order is the order the element sites used to set them in, so the serialized DOM is unchanged.
~~~

### V639

`page-body.html` line 346, before `<div id="hzn-trend"></div>`

~~~text
V639: the LEVELS left again, for Pressure. V598 had merged them in here as "two readings of one
series"; Keren, looking at the page: "we combined two data sets that are not really the same. The
spreads are the Horizon because it's what the market sees long-term versus short-term. And the
yields are the pressure." One page, one reading: the shape of the curve.
~~~

`page-body.html` line 361, before `<details class="subject" data-subject="pressure">`

~~~text
====== PRESSURE — V639 ======
Keren: "Pressure should be yields, and the default should be the 10-year Treasury yield, because it's
considered the risk-free loan across the economy — so whenever it goes up we can see the pressure the
US government has to repay its debts. It's basically pressure."
This reverses two of her own calls. V597 read the Senior Loan Officer Survey here as the RESISTANCE the
money meets (the doctor's argument: pressure is flow times resistance); V598 folded the Treasury levels
into Horizon as "two readings of one series". Looking at the app, she found the second had combined two
data sets that are not the same thing — the spread is what the market sees long-term versus short-term,
which is Horizon; the yields are the price the economy's risk-free borrower pays, which is Pressure. The
survey went with the change (her choice: drop it; it is at tag v638-fewer-words).
So Circulation reads in the order the causation runs: the rate the Fed SETS (Hormones), the rate the
market CHARGES (Pressure), the speed the money moves at (Pulse), the quantity of it (Volume).
The machinery is MOVED, not rebuilt — the Version 314 rule, again: the same #ylm-* svg, the same
renderPressurePage, the same maturity menu, under this page's own head and control row. The row prints
today's 10-year from the live curve, no verdict word: there is no sourced band for a rate (Keren declined
three constructions), and a figure with no band gets no word.
~~~

`js/07-forms.js` line 218, in or after `markSvg`

~~~text
V639: the V597 squeeze mark (two arrows on a channel, for the loan survey) went with the survey. Pressure
wears the gauge again, above — the mark Keren preferred to the cuff in Version 314.
~~~

`js/08-model.js` line 284, in or after `vitalRingSvg`

~~~text
V639: `tsyView` is gone. V598 merged the Treasury levels into Horizon as a second view of one page; Keren
unmerged them — the levels are Pressure's, the spreads Horizon's — so there is no view to switch.
~~~

`js/09-render-core.js` line 808, in or after `drawPressure`

~~~text
V639: the row. Today's 10-year from the live par curve — the same object Horizon's spread is computed
from, and NOT the last point of the quarterly history, which is a three-month average and reads 0.2–0.9
points different (Keren caught the two side by side in Version 294). No verdict word: there is no sourced
band for a rate, and a figure without a band gets no word (CLAUDE.md, band provenance). The live layer
repaints the figure when the curve lands — `repaintPressureRow` in 02-live.js — so it is written here
once in the row's own shape and edited in place after that.
~~~

`js/10-render-pages.js` line 264, in or after `deriveUninversionDetail`

~~~text
V639: Horizon's own head again, one group — the two spreads. The Treasury levels went back to Pressure
(Keren: "the spreads are the Horizon because it's what the market sees long-term versus short-term"),
so the menu no longer has a second kind of reading to name. V599's title rule stands: the title READS
ITS OWN MENU ROW rather than spelling the pair a second way — one label, one source.
~~~

`js/12-pages-nav.js` line 719, in or after `colClass`

~~~text
V597: the order is the physiology, read in the direction the causation runs. The SIGNAL the Fed
sends, then the two halves of the flow it produces — how fast the money moves and how much of it
there is. V639, Keren: Pressure is the Treasury yields again — the rate the market CHARGES, after
the rate the Fed SETS — so the sequence reads set, charged, speed, quantity.
~~~

### V640

`page-body.html` line 397, before `<div id="pressure-insights"></div>`

~~~text
V640, Keren: "add an insights component to the pressure page saying what is the 10-year US Treasury
yield, why it's important, and in accordance to the rules we based about biology, economy, and
gyneconomy." The shape every other page has carried since V604: the biology in the lede, the cards
under it, every figure computed from the series the chart draws or the live curve the row prints.
~~~

`js/09-render-core.js` line 823, in or after `drawPressure`

~~~text
---------------- V640: Pressure's Insights ----------------
Keren: "add an insights component to the pressure page saying what is the 10-year US Treasury yield, why
it's important, and in accordance to the rules we based about biology, economy, and gyneconomy."
The lede is the body, the first card the economy, the second the reading in this app's terms, the third
the division of labour with Horizon. Every figure is computed: today's 10-year from the live curve the row
prints, the policy range from `fedFunds`, and the record, the cycle average and the extremes from the
quarterly series the chart draws. Nothing is typed in that a refresh could leave stale. A separate step
rather than lines inside renderPressurePage, so that function does not grow (the V624 ratchet), and it is
re-run on every open of the page so the figures follow the live curve.
~~~

### V643

`js/03-data.js` line 165, in or after `curveAsOf`

~~~text
V643, Keren: "switch the bar to gross debt." The headline 122% everyone quotes is GROSS federal debt; the
app read debt held by the public (101%) and explained the gap in the (i) from V641. She chose the bar to
show what readers meet. Every number below is the gross series, checked on load against fiscalHistory
(03b, OMB via FRED) by checkGrossDebt in 04-components — so this row, its record and Power move together.
~~~

### V644

`js/09-render-core.js` line 383, in or after `cardDetailHtml`

~~~text
V644, Keren: "I'm seeing Q3 26, 4.7% where the current number is 5.25% for the 10-year yield. I want to see
the latest data and not the quarterly data." V640 labelled that last column "· so far" — true, and still a
three-month average standing where a reader looks for today. Now the Pressure history keeps its quarterly
averages, and the column for the quarter still running is the LATEST CLOSE from the par curve the row already
prints, labelled with its date. When the curve's date falls in a quarter the history has not reached, it is
added as a new last column rather than dropped. The quarterly arrays are not touched: Horizon and the rhymes
table read them as averages, which is what they are.
~~~

### V646

`js/07-forms.js` line 158, in or after `dropSvg`

~~~text
V646, Keren, with the drawing: "make this the volume icon across the app" — three sound waves, no speaker.
This returns to Version 507's idea and takes her three arcs where 507 drew two; the three were checked at the
15px sign-card size before shipping, with a gap wider than the stroke so they do not close up. Concentric on
a point off the left edge, each a 90° sweep, the set centred in the 24-unit box. Every Volume mark calls this
one function (the sign card, the page head, the Cycles roster), so one change reaches all of them.
~~~

### Undated

`styles.css` line 43, before `--cold: var(--season-winter); /* its cold months (below 1%):…`

~~~text
the Temperature chart's warm months (1–3%): the app's own teal, the dial's bull colour (Keren, Sep 19, 2026 — was yellow)
~~~

`styles.css` line 62, before `--ovulate: #1ea8a3;`

~~~text
Keren, Sep 19, 2026: "a bit more red" — was #d9503c coral
~~~

`styles.css` line 64, before `--bull-ink: #0f6f6c; --bull-wash: color-mix(in srgb, var(--o…`

~~~text
the same two as ink on a pale wash of themselves, for the words "Bull year" / "Bear year" in the hub (Keren, Sep 19,
2026: "a lighter shade of that same color" behind the word). The band's teal is only 2.9:1 on white, so the ink is a
darker cut: 5.0:1 (teal) and 4.6:1 (coral) on their 18% washes — WCAG AA for normal text, well past the 3:1 the
display-size word needs.
~~~

`styles.css` line 187, before `.topbar{`

~~~text
---------- top bar (Keren, Sep 19, 2026, with Clue's screens): the open tab's title in the middle, a round menu
button on the right; sticks to the top of the page. The big "Gyneconomy" title moved into the menu. ----------
~~~

`styles.css` line 456, before `--moon-lit:var(--page); --moon-dark:var(--text-primary); --m…`

~~~text
The dial's moons (Sep 17, 2026, Keren): the seasons are drawn as phases of the moon — Winter the new moon,
Summer the full, the others what lies between — so no season color is needed. Two tokens only: the lit
face and the dark face, black and white (Keren, later the same day, over the earlier ivory and indigo).
The market band keeps teal (bull) / coral (bear).
~~~

`styles.css` line 575, before `.season-wheel-hub-theme.bull, .season-wheel-hub-theme.bear{ …`

~~~text
the year read-out's word: ink on a pale wash of the band's color, a soft pill (Keren, Sep 19, 2026)
~~~

`styles.css` line 580, before `.season-wheel-hub-detail{ margin-top:calc(var(--dial) * 0.02…`

~~~text
The reading, inside the circle (Keren, Sep 19, 2026: everything the moon tooltip used to say goes in the hub —
press and hold the year badge and drag round the ring to read any quarter; hover or tap a moon does the same).
Three short lines under the theme word: season · action / growth · GDP / prices · CPI · level. Sized off the dial
like the rest of the hub; the lines are kept short so they clear the market band on either side.
~~~

`styles.css` line 593, before `.season-wheel-hub-detail .details-link:not(.who){`

~~~text
the one thing in the hub that takes the pointer: the link to the quarter's full read-out (Keren, Sep 19, 2026 —
"a link below Autumn that will open a pop up with all of this quarter's information")
~~~

`styles.css` line 634, before `a hair wider than the band, ringed in white, with a white do…`

~~~text
the cycle's peak on the band: a pale disc in the band's own color with a white dot (Keren's reference, Sep 19, 2026)
~~~

`styles.css` line 753, before `.temp-card, .cv-card{ padding:var(--pad) 20px 14px; }`

~~~text
---------- temperature chart (Cycle tab). Natural Cycles' temperature view is the reference: one column per
month of the current cycle, rising or falling from the 2% target line; the 1–3% range as a pale green band
(the same optimal-zone idea as the lab-result meters); a "today" line with the current reading beside it.
Columns wear the tap colors the Season Model table already uses — red above the range, blue below, green
within. (A bear-year shading with a drop was tried and removed at Keren's request — the dial's market band
already carries the bear years.) ----------
~~~

`styles.css` line 1577, before `.reading-box.solo .pbr-name h3, .reading-box.solo .pbr-name …`

~~~text
One reading, already named by the head above it — the figure and its spectrum are the whole row, which is
what the blood-test panel Keren sent shows. The name stays in the markup for the screen reader.
~~~

`styles.css` line 1927, before `always a stand-in for "the container holding the history" — …`

~~~text
...and the first container sits UP under the top bar (Keren: "make the first container a little bit higher —
the space between the top menu and the first component 15, 20 pixels"). Targeted by the four static wrapper
ids rather than a positional selector, because the leading children are zero-height timing and head divs and
because the cards themselves are re-rendered on every timeline stop — a class set in JS would not survive.
~~~

`styles.css` line 2149, before `.chart-unit{ font-family:"Public Sans",sans-serif; font-size…`

~~~text
what the chart measures, said under it rather than over it (Keren: "the cyclically-adjusted P/E ratio … needs
to be somewhere, but not above the chart")
~~~

`styles.css` line 2426, before `.metric-sheet #growth-phase{ display:none; }`

~~~text
and the phase tag, which the trend row now says in words (Keren: "I don't need to see expansion twice")
~~~

`styles.css` line 2468, before `.growth-legend-sw.neg{ border-color:var(--bleed-mid); }`

~~~text
hollow dots in the line's colours (Keren, Sep 19, 2026: the legend must match)
~~~

`styles.css` line 2996, before `border:1px solid var(--border-strong); background:var(--surf…`

~~~text
the menu button's size (Keren, Sep 19, 2026)
~~~

`styles.css` line 3002, before `@media (max-width:640px){`

~~~text
Phones (Keren, Sep 19, 2026, with Clue's article sheet): the popup rises from the bottom as a near-full-screen sheet —
rounded top corners, a strip of the dimmed page left above it, a big round X in its top-right, larger type.
~~~

`page-body.html` line 40, before `<div class="cv-head season-head"><div class="cv-kicker" id="…`

~~~text
The card's title, in the Temperature card's style (Keren, Sep 19, 2026): "Gyneconomy" with an (i) beside it that
opens the legend — the four seasons' colours, and the market band's colours. The (i) is filled in by the
legend builder below (it needs the legend's detail index).
~~~

`page-body.html` line 44, before `<div class="season-wheel-wrap">`

~~~text
The cycle's name, the season line and the note that used to sit beside the wheel are gone (Keren, Sep 19, 2026):
the wheel's centre already says the season, the Calendar names the cycle, and the note now opens with the
season's popup ("This season").
~~~

`page-body.html` line 77, before `<div class="card temp-card" id="growth-card">`

~~~text
Growth, year by year, right under Temperature and on the SAME x-axis (Keren, Sep 19, 2026: "I want the years to
align") — one bar per calendar year of the cycle, spanning that year's twelve months of the chart above; the
year in progress lighter, from the quarters so far. The Growth ring that used to sit below went with it
("not really indicative of the growth itself").
~~~

`page-body.html` line 93, before `</div>`

~~~text
The season's action and the daily Feeling/Energy words — one row of word tiles under the rings (moved off
the cycle card on Sep 17, 2026: Keren wanted the card to carry the cycle and the season only).
~~~

`page-body.html` line 612, before `<div class="more-menu" id="more-menu" role="dialog" aria-mod…`

~~~text
The menu (Keren, Sep 19, 2026: the hamburger holds the title "Gyneconomy" and a Resources section like Clue's
More Menu; "just sources, one row linking to the sources page; and remove sources from the rest of the app").
~~~

`page-body.html` line 645, before `<div class="more-menu sources-view" id="sheet-howto" role="d…`

~~~text
"How to read" (Keren, Sep 19, 2026): the primer a new reader has no other way to find — the wheel, the six seasons,
the charts, the tiles, the tabs. Drafted from the app's own (i) texts so it can never disagree with them.
~~~

`page-body.html` line 690, before `<div class="more-menu sources-view" id="sheet-book" role="di…`

~~~text
"About the book" (Keren, Sep 19, 2026) — a first draft for Keren to edit; the book is unpublished as of this writing.
~~~

`page-body.html` line 719, before `<div class="more-menu sources-view" id="sheet-appearance" ro…`

~~~text
Contact (Keren, Sep 19, 2026): a published page has no server, so the form hands the note to the visitor's own mail app
with the title and message filled in. The address is never printed on the page — it is assembled by the script
only when Send is pressed (see the contact handler), so it isn't in the markup for a scraper to lift.
~~~

`page-body.html` line 758, before `<div class="more-menu sources-view" id="sheet-sources" role=…`

~~~text
Sources, as a screen inside the app (Keren, Sep 19, 2026: going to sources.html and back reloaded the app — "a weird
glitch"). Built on first open from the same citation list the (i) notes use (window.__sources), grouped the way the
standalone sources.html is; its back arrow returns to the menu instantly. sources.html stays published for links.
~~~

`page-body.html` line 769, before `<p class="menu-lede">Every figure is compiled by hand from p…`

~~~text
The compile date is filled from DATA_COMPILED in the script (#asof-text) — one place to edit on each refresh. Never
claim an automatic refresh here. (Keren, Sep 19, 2026: the menu's footnote and footer merged into this one paragraph.)
~~~

`js/01-refresh-season.js` line 74, in or after `asOfLabel`

~~~text
---------------- SEASON ----------------
Six seasons (Keren's table, Sep 16, 2026) in their canonical order — the sequence a textbook cycle runs
through. The dial no longer draws this order as a ring (dropped Sep 17, 2026 as redundant); it paints each
quarter of the current cycle in the season the rule computed for it, and the Content tab's table is the legend.
Each season carries the book's own ACTION for it — the four quadrants of the manuscript's cycle figure
with Spring–Deflation sharing Growing too (Keren, Sep 18, 2026: replaces the retired Goldilocks Zone) — and a
small line icon for it. There is no asset-class lead anymore: the
Investment Clock tilt was dropped on Sep 17, 2026 at Keren's instruction. Two seasons carry the book's
fertility name (Ovulation = Summer, Groundation = Winter); leave altName null elsewhere until the manuscript
supplies one — don't invent one here.
~~~

`js/01-refresh-season.js` line 87, in or after `asOfLabel`

~~~text
the second Autumn — "Late" dropped (Keren, Sep 19, 2026); the key stays lateautumn so nothing downstream moves
~~~

`js/01-refresh-season.js` line 89, in or after `asOfLabel`

~~~text
expansion + cooling, within or below the range — replaces the Goldilocks Zone (Keren, Sep 18, 2026)
~~~

`js/01-refresh-season.js` line 92, in or after `asOfLabel`

~~~text
currentSeason is COMPUTED (computeSeason(), further down, from the direction of growth and the level and
direction of inflation — Keren's rule: inflation rising while growth falls is stagflation). Set
seasonOverride to a wheelOrder key only to pin the season by hand; leave null to let the data decide.
~~~

`js/04-components.js` line 183, in or after `seatBandReading`

~~~text
A page with ONE reading drops its name: the head two containers up already says what the series is, and
Keren caught the repeat on Growth — "we have Real GDP, YoY, and we see it again in Real GDP growth in
the test result component, which is redundant." A page with SEVERAL keeps every name, because there the
names are what tell four readings apart and only one of them is the chart's.
~~~

`js/04-components.js` line 291, in or after `fmt`

~~~text
The two end columns anchor to the frame rather than centring on themselves: the reading for the first
column starts where the picture starts, the reading for the last ends where it ends. Everything between
is centred on its own column. Keren asked for exactly this, and it is what makes the two ends look like
a pair rather than like two different accidents of where a column happened to fall.
~~~

`js/04-components.js` line 924, in or after `valRow`

~~~text
no aux stat: the container above already lists the level, and saying $23.2T twice on one page is
the duplication Keren has been cutting all session
~~~

`js/06-charts.js` line 39, at the top of the part

~~~text
Keren, Sep 18, 2026: the Goldilocks Zone entry that used to sit here is retired along with the season itself.
springdeflation (expansion + cooling, within or below the range) is new and has no narrative yet by Keren's
choice — wiring only, no drafted body/economy/next/watch copy, so the Content tab shows this card blank
until she writes it.
~~~

`js/06-charts.js` line 96, in or after `vixWordOf`

~~~text
---------------- Vitals (Cycle tab): the temperature chart, the Growth ring, the Rates ring ----------------
Temperature is a chart rather than a ring (Keren, Sep 17, 2026, from Natural Cycles' temperature view): every
month of the current cycle as a column rising or falling from the 2% target, the 1–3% range as a pale band,
and a "today" line carrying the current reading. It renders from cpiYoYHistory — nothing here to refresh by hand.
~~~

`js/06-charts.js` line 401, in or after `trendOf`

~~~text
Each page says its trend in its own vocabulary (Keren: "I want the trend button to show expanding or
contracting rather than falling or rising — I want to keep the vocabulary consistent"). One correction to that,
and the data forces it: GDP's fit runs 2.89% to 2.25% and **no quarter of this cycle is negative**, so what is
falling is the PACE of growth, not output. Calling that "contracting" would say the opposite of what happened.
The word that keeps her vocabulary and stays true is "slowing" — the same axis as expansion and contraction,
describing the rate rather than the level. Temperature follows the same rule with its own words.
~~~

`js/06-charts.js` line 1008, in or after `y`

~~~text
C. TWO MEASUREMENTS OF ONE QUANTITY -> the pair. Keren's reference (Sep 20, 2026) is a before/after chart: a quiet
bar and a coloured one per slot, the gap between them the story. Transplanted literally it would have lied here.
Two columns rising from zero can only show a difference the eye can measure, and real GDP moves about 2% a year —
at a true zero baseline the pair is two columns of identical height, and at a truncated one the picture is a lie
about the size of the change. So the pair keeps the reference's grammar — quiet is "before", coloured is "after" —
and draws the GAP itself: a connector between the two readings with a disc at each end, which is the app's own
"here" mark used twice. Because the mark IS the difference, a scale that starts where the data starts is honest.
The percentage above each pair is the number the page quotes, arrived at by division in front of the reader.
~~~

`js/07-forms.js` line 368, in or after `umbrellaSvg`

~~~text
---------------- Market eras & yearly returns (Calendar tab + Cycle tab era headline) ----------------
The page's ONLY market-history model, by design (Keren's call — an earlier monthly streak-rule model was
deleted; history in claude/gyneconomy-dashboard.md). Don't add a second, finer-grained model beside it.

Values are TOTAL return (price plus dividends reinvested) — the standard "S&P 500 annual return" figure.
The current year is a year-to-date figure through DATA_COMPILED, rendered with an asterisk and a lighter
ring rather than as a closed full-year number. REFRESH: update the current year's entry; when a year
closes, make it final and add the next year.
~~~

`js/08-model.js` line 1, at the top of the part

~~~text
---------------- The season, computed ----------------
Two inputs, both shown as rings on the Cycle tab so the reader can check the call:
  growth    — the direction of quarterly real GDP (year over year) across the last six quarters of the
              current cycle (growthTrendNow: rising / flat / falling; ±0.025 pp per quarter is flat)
  inflation — CPI YoY: HOT if the latest reading is above 3% (the top of the app's 1–3% band), and its
              direction from a fitted trend over the last twelve monthly readings (±0.02 pp/month is flat)
Mapping — Keren's season table (Sep 18, 2026: Goldilocks retired — expansion now splits by direction alone,
the way contraction already did, rather than by where prices sit in the band): growth direction × the
direction of prices and, on the contraction side, where they sit against the app's 1–3% CPI band (the Fed's
2% with a point either side). "Expansion" is growth rising; "contraction" is growth falling. Flat growth is
neither on its own — it continues whichever regime the economy was already in (Keren, Sep 18, 2026: flat
growth with prices still falling from a contraction should keep reading as contraction, not flip to a fresh
expansion), read off the continuous quarter-by-quarter sequence in seasonTrackAll below, which reaches back
before the current cycle when needed. Temperature: heating / cooling from the trend, hot above the band, cold
below it.
  EXPANSION:    above the band (hot)          → Summer          · inflation      (any direction)
                not hot, heating              → Spring          · reflation      (within or below the band)
                not hot, cooling              → Spring          · deflation      (within or below the band — Keren, Sep 18, 2026: replaces the Goldilocks Zone)
  CONTRACTION:  below the band (cold)         → Winter          · deflation
                not cold, cooling             → Autumn          · disinflation   (within or above the band)
                not cold, heating or steady   → Autumn          · stagflation    (within or above the band — Keren, Sep 19, 2026: made symmetric with expansion, even though heating-within-range is empirically rare; "Late" dropped from the name the same day — key stays lateautumn)
~~~

`js/08-model.js` line 46, in or after `readSeason`

~~~text
Regime: rising growth is expansion, falling is contraction; flat growth continues whichever regime the
economy was already in rather than defaulting to expansion (Keren, Sep 18, 2026 — flat growth with prices
still falling from a contraction should keep reading as contraction, not flip to a fresh expansion). The
"previous quarter" is always available from the continuous data series (seasonTrackAll, below), even when
it falls before the cycle on screen; only at the very start of the series (no previous quarter at all)
does flat fall back to expansion.
~~~

`js/08-model.js` line 54, in or after `readSeason`

~~~text
hot is Summer; otherwise direction alone decides — heating is Spring–Reflation, cooling is Spring–Deflation (Keren, Sep 18, 2026: replaces the Goldilocks Zone)
~~~

`js/08-model.js` line 59, in or after `readSeason`

~~~text
within or above the range, either way (Keren, Sep 19, 2026: symmetric with expansion — stagflation no longer requires being above the range)
~~~

`js/08-model.js` line 65, in or after `readSeason`

~~~text
The data keys quarters as "2023 Q3" (sorts as text); people read them as "Q3 2023" (Keren, Sep 19, 2026).
~~~

`js/08-model.js` line 67, in or after `qLabel`

~~~text
One continuous season sequence across ALL of history — not reset at each market-cycle era's own start year —
so "the previous quarter" always resolves for the flat-growth regime rule above, even reaching back before
the cycle currently on screen. cycleModel(era) below only slices this for display; it never recomputes a
season itself (Keren, Sep 18, 2026: this is also why the bleed years already carried the prior cycle's
season across the boundary before this change — the underlying data was always continuous; now the flat-growth
rule is too).
~~~

`js/08-model.js` line 137, in or after `cycleModel`

~~~text
"Reading" is today's card (ongoing) or the cycle's closing quarter (closed). A flat growth trend inherits
the regime of the quarter immediately before it from the continuous seasonTrackAll sequence, which reaches
back before era.from when needed — the previous quarter always exists in the full data series, even when
it falls outside the cycle on screen (Keren, Sep 18, 2026).
~~~

`js/08-model.js` line 161, in or after `cycleModel`

~~~text
The cycle's peak (Keren, Sep 19, 2026): its most profitable YEAR — the calendar year with the highest S&P 500
total return, the year in progress counted at its return to date (in the subprime cycle, 2013). Not the
compounded high, which in a rising market is always the last year and says nothing. cumByYear (the compounded
return since the cycle's first year) is still computed for the hub's "since <year>" line.
~~~

`js/11-dial-cycle.js` line 209, in or after `renderCycleKicker`

~~~text
set by drawDial; declared without an initializer so this line can't reset it if a render has already run
The hub's popup: one slot in detailTexts, rewritten whenever the hub changes, so the link always opens the quarter
on show (Keren, Sep 19, 2026: "a link below Autumn that will open a pop up with all of this quarter's information").
~~~

`js/11-dial-cycle.js` line 287, in or after `hubShowYear`

~~~text
The dial's interaction is wired once — the SVG element stays, only its contents change per cycle. Everything reads
out in the hub (Keren, Sep 19, 2026): hover or tap a moon for that quarter, hover or tap a band segment for that
year, and press and hold the year badge, then drag round the ring, to scrub quarter by quarter — the badge rides
along and snaps home on release.
~~~

`js/11-dial-cycle.js` line 308, in or after `readTarget`

~~~text
Back to the parked quarter, or home. Does nothing unless a hover/tap is showing: iOS Safari suppresses a tap's
click when the handlers that run before it (touchstart, the synthesized mousemove) change the page, so a reset
that rewrote the hub on every touch anywhere was silently killing every button on the phone (Keren, Sep 19,
2026: "the buttons don't work on mobile"). Now an ordinary tap touches nothing.
~~~

`js/11-dial-cycle.js` line 346, in or after `badgeTo`

~~~text
the number in the badge follows the quarter under the pointer — its year of the cycle — and the resting
number comes back on release (Keren, Sep 19, 2026)
~~~

`js/11-dial-cycle.js` line 368, in or after `goTo`

~~~text
The badge stays where it is let go (Keren, Sep 19, 2026) — the hub keeps that quarter, and the moon stays ringed;
dragging it back past the last moon, to where it started, brings today (or the close) back.
~~~

`js/11-dial-cycle.js` line 650, in or after `y`

~~~text
behind the line
its label in the graph (Keren, Sep 19, 2026: "next to the dashed line") — after the line's end when there is room,
otherwise above its right end, flush with the axis
~~~

`js/11-dial-cycle.js` line 807, in or after `renderCycleView`

~~~text
the chart's end read-out already names the series
the total expansion over the closed years as the card's big number (Keren, Sep 19, 2026: "put the number at a
prominent place"), its years beneath it with the trend word — the per-year rate is the "average" line in the graph
~~~

`js/12-pages-nav.js` line 104, in or after `signSubject`

~~~text
Temperature's page opens with its own chart, and that chart already carries the name, the figure and the
verdict — so the detail below it drops its head, its figure and its reference bar rather than saying all
three a second time (Keren: "I see duplications — temperature, inflation and monetary policy; 3.4%; and we
don't need the low/optimal/high bar, because we already see the graph, which I think is more informative").
~~~

`js/12-pages-nav.js` line 184, in or after `signSubject`

~~~text
The section headings are gone (Keren, Sep 20, 2026: "get rid of the Leading, Coincident and Lagging titles on
the main page and make the spaces align"). Three headings over six rows spent a third of the list's height
saying something each row can say for itself — and said it only while the reader was scrolling past, which
is the wrong moment for it. It matters when you are reading the sign, so it travels onto the sign's page.
~~~

`js/12b-analysis.js` line 96, in or after `open`

~~~text
the top bar becomes the cycle's: its name as the title, the back arrow on the left (Keren, Sep 19, 2026: in the
top menu, not a link under it)
~~~

`js/13-tabs-menu.js` line 66, in or after `renderTopbar`

~~~text
the top bar's title per tab (Keren's names)
~~~

`page-tail.html` line 21, at the top of the part

~~~text
An INSTALLED app is never "closed", so nothing ever prompted it to look for a new worker
and an update could sit unseen until the app was deleted and re-added (Keren, Sep 27,
2026: "I don't want to delete the app every time I make an update"). Two halves:

ASK — check for a new worker whenever the app comes back to the foreground, throttled to
once a minute so switching between apps does not hammer the host;
~~~

## Part 2 · after v648-treasury-quarters

### V649

~~~text
Keren: "Moving version history out of code comments — do it."
The code comments lost their history; the history is in git, the decisions in part 1 of this register.
~~~

### V650

~~~text
Keren: "I'm looking at the code and I'm seeing a lot of notes. A lot of comments. I think you can just
remove all the comments It's fine. And just take the basic decision rules the most important one and even
that you can maybe cancel you know because nobody can follow up on so many comments and not all of them
are so important"
The source keeps no comments but one-line section titles, and `npm run check` enforces it. The most
important rules are in CLAUDE.md; the reasons behind the live-data layer moved to docs/ARCHITECTURE.md.
~~~

### V651

~~~text
Keren: "set it up" — the daily data reaches the website every weekday. She also removed the rule that
required a pull request on main ("I'm not sure we need that kind of security for the moment in the app"),
keeping only Restrict deletions and Block force pushes.
The Data workflow now starts the site deploy after it commits the figures.
~~~

### V652

~~~text
Keren: "if you feel that we can delete all the comments, do so."
The tools, tests, service worker, map script and workflows lost their comments too. What still mattered
moved to docs/ARCHITECTURE.md: the generated histories' series and sources, and the xlsx advisory.
~~~

### V655

~~~text
Keren: "Desire note: remove"
The long Desire caption is gone. No page displayed it: the Desire page renders bare and reads only the
short caption, and the 38-state snapshot is identical without it.
~~~

### V656

~~~text
Keren, on the Analysis tab: "I would rather see where there are similarities between the current cycle and
past cycles. meaning each cycle in the history will get a detailed view with only the symptoms that are
relevant marked in the corresponding year. for example dot-com cycle will have a colored dot on valuations
somewhere in 1999-2000 because the shiller cape is in the same levels more or less." She sent a reference
image of a cycle tracker's symptom grid for the look and feel.
On the plan: "i don't want the average because i will miss important correlations for example the shiller
cape in 2000 before the crash." "the grid should be visible by choice, add a toggle "show data" like in the
attached reference." "in order to sync the cycle years use horizontal scroll." Then: "build".
So: Rhymes is retired, and its rule (V610, within five points of today's place in the reading's own record)
now marks years in Cycle history, reading by reading, any reading in the year counting. The grid shows only
when "Show data" is on; each cycle's strips and years scroll together on one year width; a row opens both
numbers for every dot; readings with no mark are named in one line under the grid.
The weather analysis proposed on the claude/weather-analysis branch was declined ("the weather analysis is
not very informative - remove it") and never reached main.
~~~

### V657

~~~text
Keren, comparing All indicators with Apple Health's search page: "it looks much better then our 'all
indicators' page. how can we reach this level of design in our app?" Then: "i think the all indicators page
should be divided to the 4 main categories: weather, mood, circulation, energy. and from there we continue
to the respective pages. if i choose to filter i can do it by: structural, leading, coincident, lagging.
default is all."
Her answers on the open choices: category colours for the icons (this revises V509's single purple wash for
this list, because the colour now names the category); each row shows today's figure only; each category
heading opens its category page.
Then: "merge content into the "about the book" page and change its name to "About Gyneconomy". after you do
this change the content tab to a search tab with a search icon and put the content of all indicators page
there. then you can delete the all indicators page and container from the home page." And: "put the search
icon in the bottom menu between portfolio (the right) and analysis. so the order of the bottom menu is like
this: cycle --> analysis --> search --> portfolio".
So: the tab bar is Cycle · Analysis · Search · Portfolio. Search holds every reading by category, the timing
filter and a search box. The Content tab's cycle model, season model and framework are in About Gyneconomy.
The All indicators page and its row on the home page are gone.
~~~

### V658

~~~text
Keren: "ok let scontinue with the next pull request which will focus on categorization. ... apple health shows
multiple indicators from the same category. i want to do the same for our app for example: desire Spreads,
desire risk-reward. so for example the aggregate power indicators in economic power will live separately on
the energy page. each one will open its own history page with insights. this applies to the entire app."
And: "also look at the containers in the apple health vs. our containers - apple is much more spacious and has
more white space. try to mimic their design style". On the plan: "build" (every recommendation), then "no
need to split 10Y − 2Y & 10Y − 3M" and "no need to split Debt service and Saving rate split into two - they
both show housholds".
So V658: the Buffett indicator and the three fiscal markers (Debt burden, Interest burden, Federal budget)
each have a card and a page; readings with two or more cards carry a heading; the Economic power score keeps
its card; the Buffett line at 80% is cited to Buffett's Fortune article of Dec 10, 2001. Desire, VIX and the
Activity split (new data) come next. Industrial output keeps a card without a history (ISM's history is not
free); Pressure stays one card with the maturity picker (V639).
~~~

### V659

~~~text
Keren: "also make the history cycle pages for example big tech cycle page to be identical to the current
cycle page so i can reach it's data in the exact same way. we don't want to maintain too many views. this is
a house rule - dry coding as much as possible. i think you already wrote it down. make sure you are using the
same components and not building new ones that are doing the exact same job".
So V659: a past cycle opens as the Cycle page itself (its dial, the four tiles, the category cards and every
reading's page), showing that cycle; the separate list of cycle readings is gone.
~~~

### V660

~~~text
Keren: "1. in the past cycles the categories should be identical in design to the current cycle categories.
2. each category page should have the shade of the color of the category (see reference from apple health)
3. remove the power score 4. drop the titles from the inner pages for example i don't need valuations in the
mood page. 5. in the search page consolidate categories that are from the same category for example under mood
write valuations, when i click on it i see two category items: shiller and buffet". And: "change the names:
debt burden --> debt service, interest burden --> interest payments"; asked whether "Debt service" fits a card
that shows the debt itself (and is already the Households bill), she chose "Federal debt".
So V660: a past cycle's cards keep today's unit and mini, with the cycle's figure and range; each category page
is washed in its colour; the Power score is removed; category pages have no group headings; Search shows
Valuations and Economic power as one row each, opening a page with their cards; Federal debt and Interest
payments are the new names.
~~~

### V661

~~~text
Keren: "volume: the terminology is expanding or contracting, not accelerating. unemployment rate, productivity
growth and industrial output should be their own pages under activity category. all subcategories should
inherit the icon of the parent category. remove test result components from the app".
Asked which components, she chose the lab-style range rows under each chart; asked which icons, every reading
(cards and Search rows); asked how Productivity growth should start, a page now with its history through the
Backfill (OPHNFB).
So V661: Volume's trend reads expanding or contracting; Activity holds Unemployment rate, Productivity growth
and Industrial output, each with its own page; every reading wears its category's icon; the lab-style range
rows and the meter bar are gone, their notes kept in each chart's (i).
Then, on the preview: "I don't want the individual icons to disappear. I just want them to inherit the color. So
for example, Schiller cape and Buffett indicator should have a diamond icon um, horizon has a horizon icon, but
they are in purple. So bring back the icons, but just make them inherit the color of their parent component."
So each reading keeps its own icon, drawn in its category's colour, on its card, its Search row and its page.
~~~

### V662

~~~text
Keren: "I'm looking at the history component and it looks very cramped. Meaning it's too dense. Can we make it
higher by about 20 to 30% so it has more air and breathing room? Of course, the bars, everything needs to be
proportional." And: "make the height universal inside the parent component".
So V662: every history chart draws at one height, 25% taller (335px on a phone, 375px wide), from one number
in histFrame; the bars and scales follow the taller plot.
Then: "before we merge i want to make sure we have basic code hygiene. i want all parent components to have all the
properties of their children so we don't have to change different pages all the time when we touch any component
like we did with the history component's height. is it possible?" And: "make it one version and for the font sizes
you can use our lovable dsm we built." And: "remove unused components".
So V662 also: every axis chart takes its margins from the frame; each reading declares its own page options; the
one page-scoped style became a chart option; every font size is a token on the DSM scale; the check fails on any of
these coming back; and every component built but never shown is removed (the Temperature and Growth cycle cards,
the hidden GDP and Valuation summaries, their code and styles).
~~~
