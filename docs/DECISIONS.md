# Keren's decisions

The standing logic of Keren's decisions about Gyneconomy: every rule in force, each with its reason (in her
words where they carry it) and the versions that set it. Keren owns every design and editorial decision. Don't
overrule one; if a rule seems wrong, say so and ask her.

V666 made this register what it is now. Keren: "if you have decisions that are irrelevant, meaning we decided
later down the line to do something opposite … make it a highly intelligent document that will allow you to keep
going without documenting everything that I'm saying … strip away the decisions and leave only the logic." So the
decisions a later one overturned are gone, and the rest are merged by topic. The full record of her words,
version by version from V131 to V665, stays in git, as does the commented source:

```sh
git show "$(git tag --list 'v665*')":docs/DECISIONS.md
git show v648-treasury-quarters:src/js/07-forms.js
```

To add a decision, state it under its topic in the same form: the rule in bold, the reason in her words, the
version. When a new decision overturns a rule here, rewrite that rule rather than adding a contradiction, and
keep its older versions in the citation. Her full words go in the commit message. A rule whose scope, or the
code, is in doubt is marked "(check: …)" until Keren settles it; none is open after V668.

## Voice and wording

### Names

- **The bloodstream category is Circulation, never Blood.** Keren: "instead of Blood call it Circulation".
  (V454)
- **The category holding Stress and the activity readings is Energy.** Keren: "activity should be
  renamed to energy — the icon needs to embody energy"; what is left and what is spent are one reading of her
  energy. (V457)
- **The box holding Temperature, Growth and the S&P 500 is Weather, never Season.** The season is what those two produce:
  naming the box for it would put the conclusion on a level with its inputs, and the dial already shows the
  season. (V446)
- **The VIX reading is Volatility, never Fear.** Keren: "I just realized that the VIX is the volatility index.
  So instead of fear, call the indicator volatility." (V663)
- **The household reading is Households, never Debt service; "Debt service" names only the Households bill.**
  Keren: "debt service is too general — there is government debt service and household debt service." (V463,
  V660)
- **The fiscal markers are Federal debt (not "Debt burden") and Interest payments (not "Interest burden").**
  Keren chose "Federal debt" because the card shows the debt itself. (V660)
- **The fiscal reading is Federal budget, never "deficit rate", and its chart head says "deficit or surplus",
  never deficit alone.** It can go either way (the budget was in surplus four straight years), and a name that
  covers one sign is wrong in the other sign's years. (V359, V397)
- **Industrial output is gone (V688): its card, page and copy. Don't re-add it.** Keren: "I don't need the
  industrial output, it's just too much information." Before that: **the reading was Industrial output, never Effort.** Keren: "we just call it industrial output now"; the body
  term left the screen. (V352, V357)
- **The manuscript's framework table keeps the book's own words (its "Effort" row is not renamed); ask Keren
  before touching it.** That table is the book's, not the app's. (V228, V357)
- **Pulse's reading is Money velocity; "nominal GDP divided by M2" lives in its (i), not in the name.** Keren:
  "just write money velocity, and put the M2 data inside the info"; precision belongs one tap in. (V487)
- **Weather's gap card is "The barometer", named for the instrument, not for its verdict.** Keren's word: two
  totals pulling apart say which way the weather is going. (V468)
- **The policy-rate chart is titled "Federal Funds Rate", and its note says it plots the effective rate.**
  "Effective" was doing the note's job in the title. (V608)
- **A section of sentences about the figures above it is called Insights, on every reading's page.** The app had
  two names for one component and Keren chose one; Insights has been her word for it since V379. A category's
  combined reading is the exception since 1.5.0: it sits behind its analysis card's More details, untitled (see
  Search and the category pages). (V453, V604, 1.5.0)
- **Era names are Keren's; the era blurbs are a first draft in an analytical register, waiting for her
  voice.** They are hers to write, not ours to finish. (V511)
- **Every cycle has a story: two sentences, what happened and how Mrs. Market felt, in the mood chart's words.
  It sits on the cycle page's mood card, titled by the cycle's own name ("AI Cycle"), today's included (0.4.1; before it,
  today's card was titled by today's mood and season, a past cycle's "Cycle story" since V691, "Her story" in V689),
  never by a mood, and the card carries the story alone (no "came into" line, no note on when the
  mood is measured).** Keren: "a cycle is a story from the beginning to end, not just the end… we will always see
  the bottom"; of the note and the lead line, "I don't need it". Keren: "each cycle
  has a story behind it that reflects the feelings… making it a story"; "under mood and season combination". The
  nine cycles from 1948 keep Claude's draft names for now (Keren: "keep the names as they are for now"). (V689)
  The five cycles from 1928 carry Claude's draft names and stories in the same shape, except the first: Keren named
  it the Great Depression Cycle ("i think the crash is the great depression"). Keren then asked for research into
  each period ("maybe will give us better cycle names"): Postwar became Baby Boom (1947–53), Go-Go became Great
  Society (1963–66), Go-Go moved to 1967–69 where the go-go funds and conglomerates peaked (was Conglomerate),
  Rebound became Bicentennial (1975–77) and Inflation became Volcker (1978–81). (V690)
- **The Buffett indicator is "Buffett indicator" wherever it is named: its card, its Search row, its meter row and
  its page's (i).** One reading, one name. The chart head keeps the heads' title case ("Buffett Indicator, Market
  Value ÷ GDP"). (V670)

### Words for verdicts and trends

- **Growth is said in one pair of words everywhere: Expansion and Contraction ("expanding", "contracting" in a
  sentence), the model's own regime.** The season table, the Growth card, the chart legend, the season notes and
  pop-ups, Weather's opening line and the Growth page's trend all say the same side. Keren, on the 1929 pop-up that
  still said "quickening": "check that the vocabulary is the same across the app"; earlier, "I like the
  terminology expansion and contraction better." Where the economy is contracting while output is still above a
  year earlier, the sentence says so beside the figure, so the word never hides the number. This replaces the
  participles quickening, slowing and steady (V304, V698) and the table-only split of 1.6.0. (V304, V698, 1.6.0,
  1.7.0, Oct 3, 2026)
- **A verdict is said in one family of words on one axis, never a hand-set word that belongs to no scale.**
  Keren: "use overvalued or undervalued, and for the range in between choose words from the same family, maybe
  fairly valued"; the same pattern gave Pulse a fast/slow scale. (V290, V298)
- **Where a reading has a published convention, its word follows the convention rather than vocabulary of our
  own.** Keren: "we don't want to overcomplicate things, they are already so complicated"; and for Volatility,
  "set the rules per convention". (V236, V663)
- **Each page says its trend in its own vocabulary: Growth's and Volume's are expanding or contracting (never
  accelerating), Pulse's accelerating or decelerating, Pressure's climbing or easing.** Keren: "I want to keep the
  vocabulary consistent"; Pulse is a velocity, so "the correct word is accelerating, and the opposite is
  decelerating." Growth's trend took "expanding" and "contracting" in 1.7.0 with the rest of growth's words.
  (V431, V661, 1.7.0)
- **The market's words for the feeling are bullish and bearish; long and short are positions taken and are not
  used for a reading.** They name a different thing. (V598)
- **When a page carries two figures for two things, each is labelled: on Hormones the target range is the
  decision and the chart is the effective rate, where money actually traded.** Two numbers for one thing is a
  fault; two numbers for two things must say which is which. (V592)

### Saying less

- **Text is cut to what only that place can say: a short lede in the open, the rest one fact per line behind
  More details.** Keren: "either you put it in bullet points or make it minimal as much as possible, because
  nobody will read so much text". (V227, V270, V287)
- **Nothing is said twice on one page.** A page with one reading does not repeat its name; a page whose chart
  or first container states the figure drops the head, figure and bar above it; no meter, lab row or second
  figure restates what the chart draws; a level already listed is not repeated as a side figure; a phase the
  trend row names gets no tag; no heading repeats what the screen shows (no span label over a history, no
  context line introducing a table that introduces itself); a category page carries no group titles. Keren: "I
  don't need to see expansion twice"; "I don't need to see it again as in another form". (V274, V305, V361,
  V384, V582, V599, V606, V660)
- **Every history head is in title case, with short joining words ("of", "or", "over") left lowercase.**
  Keren: "capital letters in the beginning of each word, and that is true for all titles"; capitalised joining
  words read as shouting. (V608)
- **Quarters are written "Q3 2023" on screen, though the data keys them "2023 Q3".** People read them that way
  (Keren). (undated, Sep 19, 2026)
- **When "Current cycle" is picked, its years read "<first year>–Today", with a capital T, on the button and
  in every menu row.** "Today" is the second half of a range whose first half is a year, so it takes a date's
  capital. (V522)

## Navigation and pages

### Tabs, bars and menu

- **The tab bar is Cycle · Health chart · Analysis · Portfolio.** Search replaced the Content tab (V657), Keren
  swapped Analysis and Search (V665), and the Health chart took Search's place: "I'm basically seeing the same thing
  in different views … the search moved to the health chart page." (0.7.0)
- **On phones the tab bar sits flush on the bottom edge, full width, treated like the top bar: the page's
  colour at 86% behind a 14px blur, one hairline on the edge facing the page.** Keren: "the bottom menu bar is
  hovering over the content. I want it to look like the top bar"; the safe-area inset goes inside the padding,
  and the page gets bottom padding so nothing hides behind the bar. (V550)
- **The top bar sticks to the top of the page: the open tab's title in the middle, a round menu button on the
  right, and the "Gyneconomy" title in the menu.** Keren's call, made with Clue's screens. (undated, Sep 19,
  2026)
- **The top bar sets the page name in Cormorant, has a hairline on its bottom edge, and its buttons are the
  purple mark alone, with no ring and no background.** Keren: "the title of the page should be in feminine
  letters"; "all buttons in the top bar should not have a round border around it"; "it should be only purple
  stroke". (V272, V275)
- **The top bar's titles are Keren's names for the tabs: "Current Cycle", "Health chart", "Analysis", "Portfolio".**
  (undated, 0.7.0)
- **The top bar names the page by its short name, and nothing inside the page repeats that title; the chart
  head names the series (bar "Pulse", head "Velocity of Money (M2)").** Keren: "there is a title inside the
  page which is redundant — you already have the page title at the top." The bar names the page and the card
  names the reading. (V208, V288, V298, V361)
- **When a cycle opens, the top bar takes the cycle's name as its title and puts the back arrow on its left,
  never a link under it.** Keren wanted the way back in the top menu. (undated, Sep 19, 2026)
- **Deeper screens and the menu slide in from the right at full opacity, decelerating in (0.34s) and
  accelerating out (0.26s), with no fade.** Keren: "the menu should slide from right to left, not top down";
  of the close, "it closes really, really fast". (V285, V286)
- **The menu has three sections: Guide (How to read, About Gyneconomy), Resources (Sources, Contact) and
  Appearance (the theme).** (undated, Sep 19, 2026)
- **Sources is one screen inside the app, reached from one menu row and nowhere else, built from the same
  citation list the (i) notes use; its back arrow returns to the menu, and sources.html stays published for
  links.** Keren: "just sources, one row linking to the sources page; and remove sources from the rest of the
  app"; going to sources.html and back reloaded the app, "a weird glitch". (V270, undated, Sep 19, 2026)
- **"How to read" is a new reader's primer, written from the app's own (i) texts so it can never disagree with
  them.** It is the only place a new reader learns to read the wheel, the seasons, the charts and the tabs.
  (undated, Sep 19, 2026)
- **About Gyneconomy (formerly "About the book") holds the book's introduction and the cycle model, season
  model and framework the Content tab used to carry; its text is a draft for Keren to edit.** Keren merged
  them and renamed the page. (V657)
- **Contact hands the note to the visitor's own mail app with the title and message filled in; the address
  never appears in the markup and is assembled only when Send is pressed.** A published page has no server,
  and an address in the markup can be scraped. (undated, Sep 19, 2026)
- **Portfolio offers three containers: All Weather, the Investment Clock, and Custom (coming soon).** Keren: "a
  user can choose how she wants to invest her money and what is like a popular investing method that can help her
  invest wisely. And then if she wants something custom, then we'll do it later." Each method shows its authors'
  own mix, gold and commodities included, with its source cited: Keren chose "As published" (her stocks, bonds and
  cash rule is for Custom). Still no placeholder figures: a fake number in a financial app is not a neutral
  placeholder. (V259, 0.5.0, Oct 4, 2026)
- **An installed app checks for a new version whenever it returns to the foreground, at most once a minute,
  and reloads onto it.** Keren: "I don't want to delete the app every time I make an update". (undated, Sep
  27, 2026)

### Pages and doors

- **A reading is a row or card that opens a page; it never unfolds where it stands, and a popup is for a note,
  never for a page's content.** Keren asked for inner pages "aligning to our inner pages format"; a long
  record "is not a footnote you glance at and dismiss". (V269, V303)
- **One indicator gets one card and one page; a reading with a card has no second row.** The Buffett
  indicator, Federal debt, Interest payments and Federal budget each have their own; the two Treasury spreads
  stay one view, Households' debt service and saving rate stay one page, and Pressure stays one card with its
  maturity picker. Keren: "no need to split 10Y − 2Y & 10Y − 3M". (V254, V658)
- **The Health chart is where every reading is found: a search box at the top, above the cycle picker, with the
  filter inside it; each reading opens its page and each category name opens its category page.** Keren: "if I go to
  the health chart page and I click on, let's say, temperature, I would get to the temperature page"; "the filter
  should be inside the search … if I click filter, I see what I can filter by, but it doesn't take up space from the
  screen." The filter offers All, Risk, Attention and Normal with their counts; the chevron beside a category's count
  still folds it. The box matches a reading's name, its series, its group or its category. There is no timing filter:
  "the division of Structural, leading, coincident, lagging … It's not something that I would filter by", so timing
  lives only in each reading's (i). Search, its grouped rows and its icons are gone with it. (V657, V660, V692, 0.7.0)
- **On a category page a group is one card too: its mark, its name, and its first member's figure and verdict
  as the preview (Valuations shows the Shiller CAPE); the card opens the group's page, which holds the members'
  cards.** Keren: "I don't need to see them both… just put a preview KPI, like the cape… so that we'll have
  some more breathing room in the category pages." (V688)
- **The federal side and the household balance sheet are one group, Stress (Federal debt, Interest payments,
  Federal budget, Households); the name Economic power is retired.** Keren: "households should be inside
  economic power… the terminology is stress because debts are stress", then chose Stress. (V688)
- **A category page has no group headings and is washed in its category's colour.** Keren, from Apple Health:
  "each category page should have the shade of the color of the category". (V660)
- **A category page is its reading cards, then one More details holding the category's insights, with no section
  titles and no analysis card.** Keren: "the category analysis that we made, is not that good. It's not very
  informative … we have a lot of text inside the more details, which can remain below the subcategories". The
  insights carry no title, and Mood's own figures follow her story in the same sheet; Energy has none, so it ends on
  its cards. The composite analysis of 1.5.0 (each category as one rank-averaged reading matched against past cycles)
  is retired. (1.5.0, 0.7.0)
- **Weather's insights carry no "What usually comes next" card.** It read as a forecast; Keren: "drop the forecast".
  The season's prose behind a dial quarter keeps it, one tap further in. (1.5.0)
- **The source keeps the taxonomy's order (Weather, Circulation, Mood, Energy); a display that wants Keren's
  order (Weather, Mood, Circulation, Energy) places the four without reordering the source.** The roster holds
  the source order and the category sheets and past cycles read it; the Health chart and the Diagnosis place the four by
  each category's `shown`; the layout rearranges the picture and leaves the meaning where it is. (V502, V670)
- **The Cycle page is the dial with the Diagnosis under it; it carries no category cards.** Keren: "I want the
  categories to go away from the cycle page because we already have it in search and in the diagnosis." (V665)
- **A past cycle opens as the Cycle page itself, through the same components, never as a separate view.**
  Keren: "dry coding as much as possible … make sure you are using the same components and not building new
  ones that are doing the exact same job". (V659, V665)
- **A sentence taken off a row goes to the reading's page, and is dropped if the page already says it; a row
  never re-lists what is on screen below it.** Keren: "either put it in the inner page or if it already exists
  drop it". (V232, V277)
- **A reading's timing (leading, coincident, lagging, structural) goes with the reading, never as a heading:
  it is hidden on the page and shown in the reading's (i) note, as a label that opens nothing.** Keren: "get rid of the Leading, Coincident and Lagging titles on the main page"; "it's a
  minor detail that if people want to expand on their understanding, they can go to the info page." (V271,
  V377, V657, undated, Sep 20, 2026; it stopped filtering anything in 0.7.0)
- **Every (i) and every More details opens the one shared sheet, never a floating popover; on a phone it rises
  from the bottom as a near-full-screen sheet with rounded top corners, a strip of dimmed page above, a big
  round X and larger type.** Keren: "make the info icons open in the new popup format as well"; the phone
  sheet follows Clue's article sheet. (V142, undated, Sep 19, 2026)

### Page order and Insights

- **Every inner page runs history first, then Insights, then More details; commentary never sits in the middle
  of the measurements it comments on.** Keren: "I want the history container to be first"; of Activity, "put
  the highlights at the bottom of the page, above More details." (V303, V305, V369, V384, V391)
- **The reading lives in one contained history card that reads top to bottom as one story: its head, the
  picture with the readout the hover fills, and the trend across the window at the foot; the window control
  sits on the page above the card.** Keren, from Apple Health: "a white container containing the years by
  cycle and the expanded chart and the trend at the bottom"; she set the order on Desire and then on every
  history page. (V266, V300, V482, V498, V519, V520, V522)
- **A short verdict and the figures that qualify it are commentary, so they go in Insights, not loose under
  the chart.** Keren: "I think this belongs to insights." (V384)
- **Insights follow one shape on every page: a lede (`.hi-lede`) with the reading's biology, then cards on the
  economy and on the reading in the app's terms, then any facts in rows underneath.** Keren asked for
  Pressure's Insights "in accordance to the rules we based about biology, economy, and gyneconomy"; the lede
  carries no figure, so it gets no state tag. Hormones' FOMC facts (target, last move, first hike, next
  decision) sit under its cards. The lede is the biology, at whatever length it needs, still with no figure and no
  verdict tag; Keren confirmed it over V429's one-sentence definition. (V429, V609, V640, V668)
- **Insights are short: prose first, the facts under it in the same section, and no idea said twice.** Keren:
  "merge that into the insight and make the text short and concise"; Horizon's commentary lost two thirds of
  its length and none of its figures. (V603)
- **Every figure in Insights is computed from the series the chart draws or the live figure the row prints,
  claims about peaks and records included.** A claim about the record is read off the record or not made, so
  nothing typed by hand goes stale after a refresh. (V609, V640)
- **More details is the last row of the page and sits inside the Insights box (the page foot holds it only
  when a page has no Insights); it is never an (i) beside a title, and it leaves out what the page already
  shows.** The button summarises the Insights above it; Keren: "check that when you add the More details, it's
  not already there". (V287, V288, V426)
- **Nothing sits above a page's window bar but its timing chip, and a page has one Insights box.** Momentum and
  Productivity growth still drew the old card head (mark, name, word, figure) and a second, lede-only Insights
  box, because their readings never declared `bare` and so `cardDetailHtml` added both; Keren: "everything that
  is above the selection bar is redundant … there should only be one insight." The suite now fails a page with a
  card head above its bar or a second Insights box. (V661, V673)
- **Every page's window bar sits the same distance under the top bar (`--gap-top`), whatever wraps it.** Momentum
  opened 20px lower than the rest because its wrapper and its bar each added the gap; Keren: "make sure that all
  pages are built with the same structure and same spacing, so that we don't need to go over page by page." The
  bar owns the gap (`#metric-page .hist-bar`) and every wrapper that holds a bar sets no top margin
  (`#metric-page :has(.hist-bar)`); the suite fails any page whose bar sits at a different distance. (V674)
- **The page owns the gap under the top bar, never its first element.** The Portfolio method pages opened flush
  under the top bar: the gap was added back by each kind of first element (a window bar, a reading's detail), so a
  page that opened on anything new had none, and the suite only measured pages that open on a window bar. Keren:
  "make sure that every page padding matches the rule … check why you missed on the padding in the first place."
  Now `#metric-page > .metric-sheet` carries `--gap-top` and its first child adds none, and the suite measures the
  first drawn element of every tab and every page, whatever it is. (0.5.0, Oct 4, 2026)

## The dial and the cycles

### The ring

- **The outer ring is four seasons, one round-ended shape per run of quarters, with a hair of track where the
  season changed; the two Springs are one season and the two Autumns one.** Keren: "divide the outer wheel by
  season, not by year". (V177, V180)
- **The ring wears the temperature's own colours: periwinkle below the range (Winter deep, Spring a tint),
  orange above it (Summer deep, Autumn a yellow-orange tint).** Keren's choice, so a season's colour says
  where prices sat. (V180)
- **The ring closes on itself but for a small seam at 12 o'clock; don't re-add the coral drop in the seam
  (Clue's day-1 mark).** Keren: "close the cycle — a small gap between the start and the end"; with the drop,
  "a lot going on". (V199, V200)
- **The outer season ring is 7 wide on every cycle; it thins only when a cycle is too crowded for 7 to hold a
  quarter and its two gaps, and the gaps never close.** Keren: "I actually like the thinner look, because it
  matches the inner ring. Apply it to all the cycles". (V513, V514)
- **The gaps between season shapes are equal, and the grey track shows by the same amount before the first
  shape and after the last.** Keren asked for "even spacing between the rings" and grey at both ends. (V513)
- **A season run is a capsule or a whole dot, never a squeezed shape: a run must be at least half as long
  again as it is tall or it becomes a dot drawn inside its box, and a one-quarter season keeps its quarter of
  track so the season and market strips end together.** Keren: "I would rather have them like a round dot
  rather than a squeezed ellipse"; she has rejected the squeezed sliver twice. (V267, V553)
- **Strip runs are separated inside each run (an inset in the card's colour), never by a gap or a border, so
  two strips over one cycle end on the same pixel.** A separator that takes track space made the season and
  market strips end on different pixels. (V552)
- **The ring is scaled to a typical cycle of six years, not the median of the app's closed cycles; a longer
  cycle extends the ring rather than overflowing it.** Six lies between First Trust's record (about 5.2 years)
  and Fisher's (about 6.4); a median of four cycles is mostly noise. (V515)
- **On the open cycle, the grey dots ahead count what is left of a typical cycle, spread evenly over the
  remaining arc up to the seam, with half a gap at each end.** Keren: "You have a really big gap from the last
  bull year to the first gray dot"; the dots are a count, not dated marks. (V554)
- **The dial is centred because its left and right margins are equal by construction, never by an optical
  nudge, and it is never wider than its box (`max-width:100%`).** Keren rejected the nudge: "that is the only
  math we need to look at"; `--dial` comes from `100vw`, which includes a classic scrollbar. (V414, V415)
- **The main cycle sits in a white container of its own, leading by size.** Keren: "give the main cycle a
  white container". (V254)
- **The season ring and the era boundaries are independent objects; never reason from one to the other.** The
  old boundaries never fell in seasonal Winter, so "the cycle begins with the bleed" is a stock-market fact,
  not a season-model one. (V511)

### The hub, the badge and the legend

- **Everything the dial reads out appears in its hub, never in a floating tooltip: hover or tap a moon for
  that quarter or a band segment for that year, or press and hold the year badge and drag it round the ring
  quarter by quarter.** Keren put every reading inside the circle. (undated, Sep 19, 2026)
- **While dragging, the badge's number follows the quarter under the pointer (its year of the cycle); the
  badge stays where it is let go, and dragging it back past the last moon, or tapping outside the dial, brings
  back today or the cycle's close.** (undated, Sep 19, 2026)
- **An ordinary tap anywhere on the page changes nothing; only a hover or tap on the dial's own targets
  rewrites the hub.** On iOS Safari a touch handler that changes the page cancels the tap's click, which broke
  every button ("the buttons don't work on mobile"). (undated, Sep 19, 2026)
- **The hub reads four centred lines, evenly spaced: the date, the season (the big word) with a small grey ›
  beside it, the theme in grey italic, and that year's S&P 500 return as "+17.9% 2025". No purple, no pill, no
  disc, border or shadow: the colour stays on the rings, and the › alone says the centre opens.** Keren: "stick
  with two rings"; "remove the emotions from the preview … only present the data that is relevant for the dial";
  "there's no hover effect anywhere in the app"; "drop the gray circle … just put the chevron next to autumn".
  (V181, V693)
- **The whole centre is one button. Today it opens Weather; a tapped quarter, or a closed cycle's close, opens that
  quarter's sheet.** Tapping a moon selects it and moves the year badge there, so the centre can be tapped next;
  tapping the centre never resets the dial. Keren: "when I go to each quarter and I click on whatever is in the
  middle of the cycle, how can I see all the data for the cycle in that specific quarter?" (V693)
- **A quarter's sheet is the app's own cards at that quarter: Temperature, Growth and that year's S&P 500, each
  with its small bars running up to it, then "About <season>, <theme>" opening the season's prose (in the
  economy, in the body, what usually comes next, what to watch).** No gradient, no mood, no list of every
  reading. Keren: "simplify it only to the basics"; "give up on the gradient in the pop-up"; "we don't need the
  mood". This replaces V165/V505's "a quarter reads as prose, never as a data popup of its figures"; the prose
  is one tap further in. (V165, V505, V693)
- **The season popup's title carries the theme and its sub-line the season's name and body term, so the two
  lines never repeat each other.** Keren: "Summer, Inflation, Inflation — it repeats." (V505)
- **In the hub a year reads "Bull year" or "Bear year" as dark ink in a soft pill washed in the band's
  colour; a year opens nothing.** Keren asked for "a lighter shade of that same color" behind the word; the inks are darker cuts so
  the text stays readable (5.0:1 teal, 4.6:1 coral on their 18% washes). (undated, Sep 19, 2026)
- **The dial's date line always reads today's date ("Today, <date>"), never the data's compile date.** Keren:
  "just write today … The data will show the date that it derives from in each metric. And the cycle is the
  single point of truth." A stalled refresh is caught by the scheduled task, not the dial. (V356)
- **The app's "now" is where the data ends: the open year in the market strip takes exactly the quarters the
  seasons have, and the YEAR badge sits just after the last quarter that has a season (on the seam when the
  cycle fills the ring).** A season that has not been computed has not happened yet; Keren saw the bull bar
  run past the season bar. (V552, V554)
- **The cycle card's title is "Gyneconomy", with an (i) that opens the one legend: the seasons' colours and
  the market band's colours; no cycle name, season line or note sits beside the wheel.** The centre already
  says the season, and the cycle is named elsewhere. (V176, undated, Sep 19, 2026)

### The market band and the peak

- **The S&P 500's yearly total returns are the app's only model of market history; never add a second, finer
  one beside it.** Keren's call (a monthly streak model was deleted). The year in progress is a to-date figure
  drawn lighter, never shown as a closed year. (undated)
- **The market band is teal for a bull year and red for a bear year.** Keren asked for "a bit more red" than
  the earlier coral; Bull stays the app's teal (`--ovulate`) so the legend matches every bull year drawn.
  (V423, undated, Sep 19, 2026)
- **A cycle's peak is its most profitable calendar year by S&P 500 total return (the year in progress at its
  return to date), never the compounded high, marked on the market band by Clue's ovulation mark, a disc with
  a dot.** In a rising market the compounded high is always the last year and says nothing; Keren preferred
  the disc to dots inside the band. (V195, undated, Sep 19, 2026)

### Cycles

- **A cycle runs from its first bull year to its last bear year, so it ends with its bleed.** What built a
  cycle is what broke it (dot-com mania and crash, the housing boom and subprime); the YEAR badge and
  `cycleNowNote` count from the same year. (V511)
- **The record opens at 1928, the first year of Damodaran's S&P return table; before 1949 the seasons are read
  from annual growth.** Keren: "ok lets go all the way with annual seasons for older cycles", choosing it over
  Claude's recommendation (cycles from 1928, no seasons before 1947). Five cycles were added (Great Depression 1928–32, New
  Deal 1933–34, Recovery 1935–37, War Clouds 1938–41, Victory 1942–46; Claude's draft names) and the Baby Boom
  Cycle opens at 1947, its first bull year under the cycle rule. Before 1957 the returns are the S&P's 90-stock
  predecessor's, as Damodaran's table carries them. (V690; from 1948 in V689, 1991 from V511.)
- **The 1935–37 cycle is the Second New Deal, 1938–41 the Keynesian, and 1942–46 the WWII Victory, the war
  written in Roman numerals wherever that cycle names it.** Keren: "rename the recovery cycle between 1935 and 1937
  as the second New Deal cycle", "instead of war cloud cycle, I want to call it Keynesian cycle", and for 1942–46
  "WW2 … in Latin … II". (V708; Recovery, War Clouds and Victory in V690.)
- **A cycle that closed before her mood can be read keeps its Diagnosis: the Mood door says when the mood begins,
  and Circulation, Energy and what followed read as for any closed cycle.** (V689)
- **To close an era, set its `to` to its last bear year, drop `ongoing`, and open the next era on the
  following year; the open era leaves `to` unset.** The open era then keeps working as years are added. (V511)
- **Cycles are named for what grew in them (Dot-Com, Housing, Big Tech, COVID-19, AI), and no sentence on
  screen claims that rule.** COVID-19 is named for a mid-cycle event, so a note stating the rule would be
  contradicted by the list under it. (V414)
- **The cycle model is stated in words only in About Gyneconomy, before the season model, with a teal Bull
  year and a red Bear year swatch.** A cycle contains the seasons, so the larger frame comes first. (V423)
- **A cycle's reading is today's while the cycle is open and its closing value once it has closed, with its
  range over the cycle; a reading with nothing inside the cycle's years says so, and nothing is carried in
  from outside them. Every reading with a history in the app reads this way, Productivity growth included
  (V667: it had said "No history in the app" with a record from 1948). Productivity's figure, quarter and
  range all come from its quarterly history, the series its chart plots: one figure on the card, the Diagnosis
  and every cycle, and its range is the quarterly record, not an annual span (Keren, V667: "follow the
  quarterly points").** Keren chose this over the peak reading (which would leave the Big Tech Cycle empty)
  and over first-against-last (which hides the extreme). (V613, undated, Sep 18, 2026)
- **A closed cycle is read, not graded: its small pictures are drawn in the neutral accent, never a state
  colour.** A cycle that ended is not being judged. (V615)
- **Tapping the current, open cycle in Analysis opens the Cycle tab itself, through its own tab button, never
  a frozen copy.** Keren: "the cycle is not ended yet"; a frozen view would say the AI Cycle is over. (V616)
- **Each cycle's strips in cycle history are drawn against the typical cycle length: a shorter cycle shows
  grey dots for what it lacks, a cycle at or past it fills the row, and inside a row the seasons keep their
  true proportions.** Keren: "The dots can represent the average that is left, not compared to the longest
  cycle." (V517)

### Analysis

- **Each cycle in Analysis shows its growth and its prices, totalled the same way over the same closed years,
  side by side on one line.** Keren: "this is so interesting — put it in the analysis tab per cycle". (V276)
- **Each cycle carries her chart, read like a blood test: every reading averaged over the cycle and sorted into
  Normal (green, the middle half of her closed cycles), Attention (yellow, outside it but within Tukey's fences) and
  Risk (red, past a fence), with a health score, the share that is Normal.** Keren tried Risk and Outlier for the two, then kept these: "let's keep the current categories. Normal, attention, and risk" (0.6.0). A Risk result reads "Outlier, above range" (or below), since past a fence is the standard rule for an outlier. Every result outside its normal range is flagged, as a lab flags any result outside its reference range: under its name it reads In range, Above range, Below range, or Outlier, above range (or below), in grey like the range ("I would not color it"); a small triangle after the figure, in the tier's colour, points up when it is above its range, down when below, and reads "=" when in range, as in Keren's reference (0.6.0, bringing back 0.5.2's up and down as marks beside the number, not arrows in it); there are no H/L marks. Keren: "If it's above or below the norm, then it should be flagged", when Shiller CAPE at 40.6 against 13.9 – 27.2 read only as a yellow bar (0.6.0, undoing 0.5.3's "only numbers"; the arrows of 0.5.2 stay gone). Each category is a drawer with a plain white heading over beige results (Keren: "I want the categories to be white and the subcategories to be in … beige"), its heading in the reading type, small enough that its count sits beside it (Keren: "I really don't like the coloring of the categories … it should be much smaller so it fits the number right next to it"): its mark (Weather a sun behind a cloud, Mood three waves, Circulation a drop, Energy a bolt, Cycle a calendar; the readings carry no marks here), its name and count, "Mood (6)", and how many are in range, "2/6 in range"; every drawer starts open and its heading folds it. Keren: "weather has a weather icon, mood has like a wave icon … circulation has a blood icon. Energy has a lightning bolt icon", "four slash six in range", and "the default is everything is open. But if I click on it, I can close something"; Keren: the reference's test results design "is more suitable to the health chart than the search page" (0.6.0). Each range reads "−3.2% – −0.9%": a dash, as Keren asked, with a space either side so it never touches a minus sign (0.5.2, 0.5.3), with no cycle count beside it (Keren: "remove it"; the (i) says how many cycles a range rests on), and the in-range count replaced the heading's "Normal range" (0.6.0). A closed cycle shows each reading's average, one number, with no low or high (Keren: "very confusing"); the cycle in progress shows the latest reading, judged against the middle half of every reading in her closed cycles, since a single reading swings wider than an average (Keren, 0.5.3). Tapping a cycle in Analysis opens it.
  Keren: "it's exactly like blood tests"; "if I press a cycle, then I'll get the blood test results of that specific
  cycle." The ranges are her own record's, and each says how many closed cycles it rests on. (0.2.0)
- **A Health chart result is judged by whether its side is good for that reading, not only by its side.** Keren: "if
  unemployment rate goes down, it's a good thing. So the bottom facing triangle should be green … We need to judge if
  it's good or bad, not only by direction, but also by parameter." A result outside its range on its good side is
  Normal (green) and counts toward the health score; on the other side it is Attention or Risk as before; the words
  under it and the heading's "in range" count stay literal. Each reading's good side is declared once, as `good` in the
  roster. Claude's calls, by economic convention, for Keren to overturn: higher is good for Growth, the S&P 500,
  Consumer demand, the Equity risk premium (stocks cheap against bonds), Confidence, the Federal budget (a smaller
  deficit), Productivity growth and Bull years; lower is good for Shiller CAPE and the Buffett indicator (Shiller's and
  Buffett's own reading of a rich market), Volatility (the VIX is the market's fear gauge), Federal debt, Interest
  payments, Households (debt service), the Unemployment rate and the Bleed. No side is good on its own for Temperature
  (the Fed aims at 2%, and deflation is a strain too), Interest rates, Pressure, Pulse, Volume or a cycle's Length, so
  those are flagged either way. (0.7.0)
- **Each cycle's Health chart is a row with a chevron under the cycle story that previews the visit note and the
  health score, and opens its own page with the cycle picker every history page wears.** The page holds only that
  picker, the app's tab bar below it (All, Risk, Attention, Normal) and the results by category (Cycle, then the
  four), worst first; each result's colour bar stops short of the next. The row opens on the cycle on screen. Keren: "make it shorter in the current
  cycle … with a chevron", then "I want all of that to be in the preview", "it has to match the cycles/years
  selection bar", "I would much rather see the results based on their categories", and "I'm not sure about the name
  her chart", then "call the page and the entire computation health results", and "since we have the text and
  health score in the preview, we don't need it in the health results page"; the name is hers: "not her chart and not
  health results, but health chart". (0.3.0, 0.4.0)
- **The Show data grid (the years a reading sat where it sits today, and the health dots after it) is dropped.**
  Keren: "I can't understand anything from it. Let's just drop it." (0.2.0; it was V612, V656)
- **Rhymes is retired, and the proposed weather analysis was declined; don't bring either back.** Keren on the
  weather analysis: "not very informative - remove it". (V656)

## The season model

- **There are six seasons, in this order: Summer–Inflation, Autumn–Disinflation, Autumn–Stagflation,
  Winter–Deflation, Spring–Deflation, Spring–Reflation.** Only Summer (Ovulation) and Winter (Groundation)
  carry the book's fertility names, and none is invented for the others until the manuscript supplies one.
  (undated, Sep 16–19, 2026)
- **The Season Model table runs in colour order: the blues first (Winter, then the two Springs), then the
  oranges (Summer, then the two Autumns).** Keren's order; the lists keep the cycle's order above, and she
  confirmed both at V668. (V193, V668)
- **The season is computed and never set by hand; `seasonOverride` stays null.** It follows Keren's rule:
  inflation rising while growth falls is stagflation. (undated)
- **Growth's direction is the trend of real GDP year over year across the last eight quarters (±0.025 pp a
  quarter counts as flat); prices are hot above 3% and cold below 1%, their direction a trend fitted to the
  last twelve monthly readings (±0.02 pp a month counts as flat).** Keren first chose six quarters after seeing
  what each window does (four would change season 34 times in 37 years), then eight in V687, on seeing growth
  slow from 3.1% to 2.1% over two years while six quarters still read rising off one 2.7% quarter (Q1 2026):
  "so would you say that 8 quarters is the more conservative view?" Eight needs two years of evidence, so one
  odd quarter cannot swing the season; it turns later at real turns and changes season about as often (63
  seasons since 1989 against 62). It moved today from Summer to Autumn–Stagflation (since Q3 2025), changed 33
  of 147 past quarters, and took the Summers from 8 to 11. The inputs sit on screen so the reader can check the
  call. (V221, Sep 18, 2026; V687)
- **The season model's flat tolerances (±0.025 pp a quarter, ±0.02 pp a month, ±0.1 pp a year before 1949) are
  Keren's call under the rule that cut-offs come from convention or the record.** A 95% significance test on the
  same slopes was measured first and would have moved 123 of 382 quarters: it cannot run on the two annual figures
  before 1950 (1932 read Spring), and eight quarters seldom clear 95% until a turn is well under way (2020 Q2 read
  Spring). The test asks whether a trend is certain; a season has to say it has turned before certainty arrives.
  Keren: "Keep mine". (1.2.2; the full list is in code-review/trends-1.3.0.md in the project files)
- **In expansion, hot is Summer, and otherwise heating is Spring–Reflation and cooling is Spring–Deflation. In
  contraction, cold is Winter, and otherwise cooling is Autumn–Disinflation and heating or steady is
  Autumn–Stagflation, within or above the range.** Keren's season table. (undated, Sep 18–19, 2026)
- **Stagflation does not need prices above the range; it mirrors expansion.** Keren made the two sides
  symmetric "even though heating-within-range is empirically rare". (undated, Sep 19, 2026)
- **Spring–Deflation (expansion, prices cooling, within or below the range) replaced the Goldilocks Zone;
  never re-add it.** In expansion, direction alone now decides, as it already did in contraction. (undated,
  Sep 18, 2026)
- **Spring–Deflation has no narrative until Keren writes one; its card stays blank, with no drafted copy.**
  Keren's choice. (undated, Sep 18, 2026)
- **The second Autumn is "Autumn–Stagflation", with no "Late"; its key stays `lateautumn`.** Keren dropped
  "Late", and the key stays so nothing downstream moves. (undated, Sep 19, 2026)
- **Shrinking real GDP is contraction, whatever its direction.** When the latest growth reading (a quarter
  against the same quarter a year earlier, or a year before 1949) is below zero, the regime is contraction even if
  the trend is rising. Zero is the line between growing and shrinking, so no cut-off is set. It moved 13 quarters,
  none after 1982: 1931 and 1933 from Spring to Winter, 1947 and 1982 Q1 from Summer to Autumn. Keren: 1931 "is
  cold and cooling and growth is contracting, I would think it is winter"; chose "Shrinking is contraction".
  (1.6.0, Oct 3, 2026)
- **Flat growth keeps whichever regime the economy was already in, from one continuous season sequence across
  all of history, never reset at a cycle's start; flat falls back to expansion only at the very start of the
  series.** Keren: flat growth with prices still falling from a contraction should keep reading as
  contraction. (undated, Sep 18, 2026)
- **The model's own values stay "expansion" and "contraction"; only the on-screen label changes.** Renaming a
  value to change a label turns a display tweak into a data bug. (V304)
- **The Investment Clock lives on the Portfolio tab only, read from the Season Model's regime and the direction of
  inflation; no season page points to an asset class.** The tilt on the season pages was dropped at Keren's
  instruction (Sep 17, 2026); she brought the clock back as a portfolio method (0.5.0, Oct 4, 2026). Steady prices
  count with rising, since the clock has no steady phase (Claude's call).
- **Before quarterly GDP (1947), a season is read from annual real GDP growth: the trend across the last two
  years, ±0.1 pp a year counting as flat (the quarterly ±0.025 pp a quarter, at a year's scale), with prices
  read monthly as always (CPIAUCNS before 1948).** Keren chose annual seasons for the older cycles (V690). Two
  years is the window nearest eight quarters in the span of GDP it reads; it fills every quarter of a year, and
  the quarters before the first quarterly reading (1949 Q4). Like the quarterly rule it reads direction, not level: 1931 reads Spring — deflation, because
  growth rose from −8.5% to −6.4%. (V690)
- **Before BEA's annual growth (1930), growth is MeasuringWorth's real GDP (Johnston and Williamson), joined to
  BEA at 1930, so the Great Depression Cycle has a season in every year from 1928.** Keren chose "Extend GDP"
  over reading the 1920s–40s from industrial production or leaving 1928–30 blank. Claude chose MeasuringWorth over
  Balke and Gordon (1989) because it is the series kept current and published year by year; the Backfill refuses
  the join if MeasuringWorth's 1930 growth misses BEA's by more than half a point. (1.4.0; 1928–30 blank in V690.)

## Readings and bands

### Where each reading belongs

- **Energy holds the whole energy reading: Stress (Federal debt, Interest payments, Federal budget and
  Households), then Unemployment rate and Productivity growth, each its own card; there is no
  separate Load or debt category.** (Activity stopped being a group in V688: Keren listed the three as cards.) Keren: "we don't need a new category named Load — stress is connected to energy"; a category
  holding a reading's inputs apart from the reading splits one idea. (V457, V462, V660)
- **The Power score is gone: its card, page, composite and history. Don't re-add it.** Keren: "remove the
  power score". (V660)
- **Unemployment rate and Productivity growth (its history is OPHNFB, through the Backfill) each have their own
  page, directly under Energy; there is no Activity page or group.** Keren: they "should be their own pages";
  then "get rid of the activity page… I want productivity growth and unemployment rate to be under energy". (V661, V688)
- **Productivity growth belongs to the activity readings, not Stress, and its range is the annual year-over-year
  one it plots.** Keren: "I think it doesn't belong to economic power — I think it belongs to activity";
  output per hour measures what the body is doing. (V395)
- **Institutional trust (Gallup's confidence survey) is not a Stress reading; don't re-add it.**
  Keren: "the trust is embodied in the bond market." (V392)
- **Circulation reads in the order cause runs: Interest rates (the rate the Fed sets), Pressure (the rate the market
  charges), Pulse (how fast money moves), Volume (how much of it there is).** The rate is the cause; pulse and
  volume are what it acts on. (V317, V639)
- **The policy-rate reading is Interest rates, a member of Circulation; "hormones" is its word only in the
  Diagnosis.** Keren: "when I'm looking at circulation page I want to see interest rates instead of hormones and
  in the analysis … I would want to see hormones because hormones are not the official terminology of the
  market." The card, page, Search and Insights say Interest rates; the Diagnosis said "Hormones are …" until its
  systems left in 1.8.0. A hormone is a messenger secreted on purpose that sets the tempo
  of everything downstream, which is the rate the Fed sets; the Insights lede keeps that sentence. (V592, V683)
- **Pressure is the Treasury yields and the Treasury spreads in one page, opening on the 10-year yield; its ⋯
  menu holds two groups, Treasury yields and Treasury spreads (10Y − 3M, 10Y − 2Y), and the page shows one series
  at a time, with that series' chart, note and Insights.** Keren: "merge horizon into pressure with the 3 dots
  having another sub menu called treasury spreads" (V688). This overturns V639's "never folded into one page
  again" ("Pressure should be yields, and the default should be the 10-year Treasury yield, because it's considered
  the risk-free loan across the economy", which still sets the opening series). (V598, V639, V688)
- **Pressure is a leading sign.** The market's price of money moves before the activity it finances shows it.
  (V597, V639)
- **Every card on a category page stands the same height: the card keeps its word line even when the reading has
  no word (Pressure's, by decision), and a figure's unit stays on its line, trimmed with an ellipsis rather than
  wrapped.** Keren: "the pressure container is a bit smaller than the rest … They need to be in the same height."
  The suite measures every card on Circulation, Mood and Energy. (V688)
- **Mood swings are Volatility: no separate mood-swing figure, and the VIX keeps the market's words (Calm,
  Elevated, Fearful).** Keren: "if we already have it as the vix lets use volatility - i prefer market
  terminology." (V686)
- **Horizon has no card of its own: the yield spread lives in Pressure, under Treasury spreads.** It sat in Mood
  from V473, left the mood reading in V685 (the curve steepens when the Fed cuts into a crash, so its level does
  not sort mood), became Circulation's own card in V685 at Keren's choice, and folded into Pressure in V688. Its
  spread view keeps the optimistic/pessimistic word in its Insights. (V473, V598, V685, V688)
- **The Senior Loan Officer Survey left Pressure by Keren's choice (kept at tag `v638-fewer-words`); don't
  bring it back without asking her.** (V639)
- **In Valuations, Shiller CAPE comes before the Buffett indicator, and the page ends on its own evidence:
  don't re-add "The number you hear quoted" or "What it is and is not"; the caveat stays behind More
  details.** Keren: "Shiller CAPE above the Buffett indicator"; she removed both closing cards. (V365, V494)
- **Desire is consumer demand: real spending on durable goods (BEA's chain-type quantity index, FRED
  DDURRA3M086SBEA), year over year, monthly from 1960, read against zero only, in appetite words: High appetite above, Low appetite below.** Keren's Trello ticket defined desire as a want beyond need and demand as
  desire plus the means to pay; she likened it to the appetite for life that comes with ovulation. The
  high-yield spread it replaced is gone from the app, not moved: Keren chose "Durables, spread dropped" after
  asking whether it duplicated Pressure's Treasury spreads (it did not; those are the yield curve). The quantity
  index, because BEA's chained-dollar levels begin only in 2007; its growth is real spending growth. Growth rather than durables' share of spending is
  Claude's call: the share drifts down for decades as goods cheapen against services. Zero is a fact, not a band; any other line on Desire is Keren's to set. The Risk/Reward grid, which needed the
  spread, went with it. Keren: "use appetite as the keyword". (V709)
- **Desire is a group of two cards, Consumer demand (the durables reading above, its card renamed) and the Equity
  risk premium, with Consumer demand first and its figure as the group's preview.** Keren: "I think it actually
  belongs in desire because risk taking is connected to desire and demand for stocks"; she chose "Group" over a ⋯
  menu on Desire's page, since a menu is for variants of one reading (Pressure's maturities), not two readings.
  Claude had recommended Valuations; her placement stands. The premium is Robert Shiller's Excess CAPE Yield (the
  CAPE's earnings yield less the real 10-year Treasury yield), monthly from 1928, from the workbook CAPE already
  comes from, through the Backfill: the Fed model needs proprietary forward earnings that are themselves forecasts,
  Damodaran's implied premium builds in projected growth, and a TIPS version begins only in 2003. Claude's calls,
  for Keren to overturn: zero is the only line (stocks earning no more than bonds), the reading carries no word
  until she sets where words begin (a thin premium is a strong appetite, so the scale runs backwards to Desire's),
  its bars are green above zero and red below as a premium paid or not, its timing is Structural like the CAPE whose
  yield it shares, and the two cards share Desire's flame. It stays out of the mood score, as Desire does, and
  because valuations already count its earnings yield. (1.1.0)
- **Momentum is dropped: Mood has no Momentum card or page.** Keren: "I think the momentum KPI is not very
  informative. So let's drop it." It ran from V672 to V676 (a twelve-month change, a speedometer, then a trend
  alarm against cash); then "Remove the trend against cash. In the diagnosis." The Diagnosis reads Momentum as it
  did before V672: the twelve-month change against zero, with Keren's 65% line splitting Euphoria from Optimism.
  (V672, V677)
- **Mood holds Confidence (V688: card and page named Confidence, its history titled "OECD Consumer Confidence"; Keren: "call it confidence … in the history component, call it OECD consumer confidence"), the OECD's index for the United States, read against the OECD's own 100
  line.** Keren: "I want to add the consumer confidence index to the mood categories", and "the consumer
  confidence index has a threshold of 100 … it already comes with the threshold". The OECD scales it so 100 is the
  long-term average: above is Confident, below is Pessimistic. Michigan's and the Conference Board's 100 are base
  years (1966, 1985), not thresholds; Keren chose the OECD over Michigan on that ground. It trails the month it
  describes by a few months. It is a leading sign, as consumer expectations are in the Conference Board's leading
  index. (V679)
- **Weather holds the S&P 500 beside Temperature and Growth, read year by year as bull or bear, and the season in
  the dial's centre opens it.** Keren: "When I press inflation, I want to reach the weather page … with Temperature,
  growth, and S&P 500", its Insights saying "what it means" for the season and "in terms of bull bear market … the
  S&P 500 history basically during the cycle". The card reads the dial's own yearly total returns, so a bull year
  is a positive year and a bear year a negative one, with no band of ours. A past quarter or a closed cycle in the
  dial opens its own quarter sheet instead, since Weather is today's. (V680, V693)
- **Weather is not in the Diagnosis's Analysis.** Keren: "this means that we don't need weather under analysis.
  Because we already have this in the cycle." The season stays in the Diagnosis's subtitle. (V680)

### Bands and verdicts

- **Every cut-off and every trend comes from a published convention or from the reading's own record ("the cycle
  data"); none is chosen by hand.** Keren: "the cutoffs and the trends all come from convention, or from the cycle
  data". A derived cut-off is computed in code from the series it reads (`pctl` on the record), so it moves when the
  record does, and the (i) says how. A zone with neither a convention nor a usable record is not drawn. Where a
  verdict still rests on a hand-set number, it is listed under "Still to derive" below. (1.2.0)
- **Unemployment above its band is graded by the Sahm rule: serious when the three-month average stands 0.5
  points or more above its low of the previous twelve months, otherwise warning.** Keren chose the convention
  (Claudia Sahm, 2019; FRED SAHMREALTIME) over percentiles of a record that mixes regimes. The old 6.5% and 8.5%
  grades had no source; the Fed's 6.5% (Dec 2012) was a policy threshold, not a severity. (1.2.0)
- **Horizon has no "Undecided" zone and Pressure no "Steep" zone.** Keren: "remove both"; neither had a source, and
  the Treasury record is too short and too long on the zero floor for percentiles. Horizon turns Pessimistic at
  inversion, zero by definition. (1.2.0)
- **Structural readings take their colour from their band and record: serious above the band, critical at or past
  the record.** It was typed by hand on each row. (1.2.0)
- **Still to derive:** CAPE's five bands (0.75 / 0.95 / 1.15 / 1.60 × fair value) wait for percentiles of
  Shiller's monthly series since 1871, which the container cannot reach; Activity's 3.5–5% band is round figures
  either side of the CBO's noncyclical rate; Horizon's "Guarded" (a change under 0.05), the trend pill's
  "flat" (a change under a tenth of the window's range) and a cycle's growth trend (±0.1 pp a year) are hand-set
  and wait on their own decision. (1.2.0, 1.2.2)
- **A reading's verdict word and the band or line drawn for it come from the same threshold, so they can never
  disagree.** The word comes off the band's own ends (Volatility) or the line the word already uses
  (Households' bill at its own mean). (V464, V492)
- **A band's kind (computed, pre-2008, a target, definitional) and its provenance are stated in the (i), never
  printed as a word on the chart; there are no lab-style range rows and no meter bar under the charts.** The
  structure shows which zone is the band, and the (i) is where provenance lives; Keren: "remove test result
  components from the app". (V480, V486, V661)
- **Temperature has one reading, headline CPI year over year; core CPI is not shown.** Keren: "drop the core
  CPI year over year, we don't need it — we are only looking at the formal inflation rate." (V378)
- **Temperature's note keeps explaining that 1–3% is a target band, not a normal range, and that the Fed's 2%
  is PCE while this reading is CPI.** It is the only place the app says so. (V582)
- **The Temperature page answers how hot prices are; the Fed's policy-calendar facts live with the policy rate
  (in Hormones' Insights), while Temperature's prose keeps the relationship.** Keren reopened this: the facts
  were in the wrong drawer. (V240, V609)
- **Growth's band is computed from its own series: the 10th to 90th percentile of the quarters from 1988 Q1
  (0.96% and 4.34%, rounded to a tenth).** There is no published normal range for how fast an economy grows,
  so the percentile construction is the only honest one. (V492)
- **CAPE's verdict is computed from the reading against fair value in five bands: Highly undervalued,
  Undervalued, Fairly valued, Overvalued, Highly overvalued.** "Richly priced" was hand-set and belonged to no
  scale. (V290)
- **The Buffett indicator's 80% line is cited to Buffett's Fortune article of Dec 10, 2001.** (V658)
- **Pulse's Steady band is the 10th–90th percentile of 1959–2007 (1.70–2.14×), and Very slow and Very fast lie
  beyond that era's own extremes (1.652× and 2.192×).** Computed under Keren's rule; it was 0.95–1.10 and 0.75 /
  1.25 times the mean, by hand. Today's 1.42× is below anything 1959–2007 saw, so it reads Very slow. (1.2.0)
- **Volume's pace is the 10th–90th percentile of 1960–2019 (3.4–10.3%, rounded to a tenth like Growth), and
  Flooding lies beyond that span's maximum (13.5%); the columns step at the same edges.** It was 3.5–10 and 16, by
  hand, while the (i) already said "computed". (1.2.0)
- **Households' cushion steps at the saving record's 5th percentile (3.3%), 10th (4.5%) and median (8.75%).**
  3 and 7 were hand-set. (1.2.0)
- **Temperature's 1–3% matches the inflation-control range the Bank of Canada and the Reserve Bank of New
  Zealand use around a 2% target; its column shades above 3% step at the record's 90th and 95th percentiles.**
  (1.2.0)
- **Pulse's verdict is five bands against the 1959–2007 mean, both extremes flagged; the spectrum's ends say
  what velocity means (slow is hoarding, fast is spending).** Keren: "I would rather have an indicator that
  tells me: is the velocity fast or slow"; a stalled circulation and a feverish one are both unhealthy. (V297,
  V298)
- **Volume reads the money stock's change year over year, not its level, and sits beside Pulse so the two are
  never read apart.** Keren, after the haemorrhage physiology: the pulse cannot be read without the volume.
  (V306)
- **The policy rate has no band: its columns stand on zero, the window's own average is drawn across them, the
  height is the reading and the trend pill gives the direction.** Where "restrictive" turns "accommodative" is
  contested, unpublished and moves, so drawing it would be inventing a band. (V592)
- **No score, band or verdict word is put on the Treasury level; Pressure's row prints today's 10-year yield
  from the live curve, and Pressure's cuff ring that scored it on a 0–6% band stays gone.** No sourced band
  exists for a rate (Keren declined three constructions), and a figure without a band gets no word. (V596,
  V639)
- **Pressure shows one maturity at a time.** Keren: "I don't understand anything from the chart and it's kind
  of distorted"; five lines at once were 425 marks in five dark purples. (V293)
- **Horizon's band is definitional and one-sided: zero, where an upward-sloping curve becomes inverted.** A
  steeper curve is not a worse curve, and a two-sided band would flag the healthy end as a condition. (V492)
- **Horizon's word never reads a steepening as optimism without asking which end did the steepening.** A long
  end rising is growth being priced; a short end falling is a central bank cutting into a slowdown, and on a
  chart the two look identical. (V473)
- **Time from un-inversion is a fact row with its figure (an `.aux-stat`) in Horizon's Insights, with the
  record behind it in the (i), not a paragraph or a section of its own.** Keren: it is "a fact with a figure".
  (V471)
- **Households' bill is read one-sided against the debt-service series' own mean (`DSR_MEAN`); the cushion
  (saving) takes the 10th–90th percentile of its quarters back to 1947.** The bill reuses the line its word
  already used; the saving record has no policy floor anywhere in it. (V492)
- **Every line that says what followed also says how many separate spells it rests on, not only how many
  months.** Keren said "go" to applying time series analysis this way: neighbouring months share most of their next
  year (serial dependence), so a share of months overstates its own weight. The Diagnosis's record reads "N months
  in S separate spells", computed live. Forecasting models (ARIMA,
  Holt-Winters) were weighed and declined: a dozen cycles is too few, and they would print numbers no source set.
  (V676, V677)
- **Volatility reads today's VIX against the market's convention: Calm below 20, Elevated from 20 to 30,
  Fearful above 30, cited to Chase and TD.** Keren: "set the rules per convention". (V663)
- **Volatility's reading is a ring, because its scale is heavily skewed (the record high is five times its
  usual home).** Keren: "I want the VIX … to have a ring representation"; a ring filled linearly from zero
  would say nothing. (V280)
- **The fear curve is no longer charted or fetched; its current shape survives as one card in Volatility's
  Insights.** Nothing drew it once Volatility had one chart. (V663)

### Figures

- **Federal debt, Interest payments and Federal budget ask three different questions (the stock owed, what
  carrying it costs, what is added this year), so their different figures never contradict each other.**
  (V358)
- **Federal debt is gross federal debt (the headline 122%), not debt held by the public (101%); every figure
  on its row and record comes from the gross series and is checked on load against the OMB history.** Keren
  chose the figure readers actually meet. (V643)
- **A reading's card says today, from the live figure, never the last point of a quarterly average; one thing
  gets one number on a page.** Keren: "you write 10-year 4.94 and I see inside the container 10-year 4.70".
  (V294)
- **The barometer measures the gap between total price change and total real growth over a cycle, using the
  pages' own methods (`totalRiseIn`, `totalGrowthYears`), and carries no state colour.** The figures must be
  the ones the Temperature and Growth pages print, and whether prices outrunning output is good is a judgement
  about what comes next. (V468)
- **A combined reading (such as Volume × Pulse, M×V = P×Y) must hold in economics, not only in anatomy, and
  carries no state colour.** "The body is how an insight is explained, never how it is derived"; whether the
  two moving together is good is a judgement the card does not make. (V452)
- **A past cycle's figure is printed the way today's card prints the reading: the same decimals, sign, suffix
  and unit, on the cycle's card, and in its Diagnosis at the close (Federal debt to one
  decimal, CAPE and Pulse with ×, Growth and Volume signed, Volatility and Horizon with their units); the Federal
  budget says deficit or surplus, and its rank reads the same way.** Keren: one format per reading, whether today's
  figure or a cycle's close. (V670)
- **A reading's Search row prints the figure its card prints, from the same source.** Temperature's row read a
  typed figure while its card read the model; one figure, one number. (V670)
- **Productivity growth's word follows the two BLS lines its note cites: at or above 2.1% (the 1947–2018
  average) it is Above trend, at or above 1.3% (the slowdown-era average) Above the slowdown, below that Below
  the slowdown; the captions and the note follow the word.** Keren chose a rule from the BLS lines over setting
  the word each quarter. (V668)

## History charts

### One component

- **Every history shares one chrome (frame, axes, grid, hover, readout, legend, trend); only the plot differs
  from page to page, and no history invents its own.** Keren: "it's a component with variants, so we don't
  need to work on each page separately"; the heat ramp and the blood ramp were asked for by name, so the plot
  may differ but the chrome may not. (V399, V475, V522)
- **The frame is one component (`histFrame`): width floor, breakpoint, height, margins, edges, year label,
  crosshair, zero rule, mean rule and svg come from one set of functions, and their classes belong to the
  frame alone.** Keren asked to name components and reuse them; ten copies of a geometry means the next change
  misses one chart. (V614, V662)
- **Every history draws at one height, set once in `histFrame`: 335px on a phone, 375px wide, 25% taller than
  before, with bars and scales in proportion.** Keren: "make the height universal inside the parent
  component". (V662)
- **Every axis chart takes its margins from the frame; a page that differs gets an option on the component,
  never a style aimed at that page.** Keren: "i want all parent components to have all the properties of their
  children so we don't have to change different pages all the time". (V662)
- **Every history shows its reference values the same way, from one shared component.** Keren: "One component,
  one source of truth: if I change it in one part of the app it changes in the others without my asking."
  (V489)
- **Every chart is bars.** Keren: "I prefer bars, because you can colour the bars and have more meaning in the
  colour" and "make sure all the charts are bars"; a column also gives each period a unit to hover and light
  up. (V496, V500)
- **A chart is built at the width its host actually has, and rebuilt if the drawn svg does not match it.** A
  chart scaled to fit renders its type small and breaks the plate's even padding. (V579)

### Frame, axes and columns

- **Every history states its scale on a labelled y-axis on the left, with the years along the bottom, and uses
  no colour legend where an axis would do.** Keren asked for this "so it looks like a chart"; with a labelled
  scale, colour reinforces the bands instead of carrying them alone. GDP's year-on-year pair view is the one
  exception. (V397)
- **The y labels sit on the left in a rail edged by a solid grey line like a gridline, centred in the rail,
  with air before the first column; the frame reaches out the same distance on both sides so it lines up with
  the card's text; every number sits above its gridline, the topmost included.** Keren: "the numbers should be
  on the left because it's a left-to-right app", "a dividing line between the numbers and the graph", "I want
  symmetry", "it has to be accurate". (V559, V563, V564, V571)
- **The grid has its own token, `--grid`: horizontal lines solid because they mark a value, vertical lines
  dashed because they only mark a place on the calendar, and a frame at gridline weight closes the plot.**
  From Keren's Apple Health reference; a grid with no frame "stops in mid air". (V440, V442, V443)
- **The zero line is its own solid rule spanning the whole frame, with no dashed grid row under it, and no
  gridline is drawn on the base rule's row.** Keren: "don't leave the zero without a line similar to the other
  numbers"; two 1px lines on one row read as one darker line. (V522, V571, V578)
- **An x-axis label at either end anchors to the frame (the first starts where the picture starts, the last
  ends where it ends); labels in between centre on their column.** Keren asked for exactly this, so the two
  ends read as a pair. (undated)
- **Columns sit half a slot in from each edge of the plot, so no mark hangs over the axis labels.** Keren:
  "the bars are hiding the numbers of the rows." (V443)
- **One function decides a column's width from one number, `COL_FILL` = 0.68 of its slot: below a 1.5px slot
  the column takes the whole slot, above it slot × COL_FILL, capped at 20px; Households' paired columns split
  one slot between the two.** The charts once filled 97% of their slots against Apple's measured 69% ("why
  does our app look so cramped?"); a gap under 1.5px cannot be drawn, and past 20px a round cap reads as a
  dome. (V451, V523, V577)
- **A column is drawn inset by its own cap, so the capsule spans exactly the interval it stands for; a span
  shorter than the width is a centred dot.** An overshooting cap hung into the year row and claimed length the
  number never had. (V578)
- **A level that never nears zero hangs its columns off a named midline instead of standing them on zero:
  Pulse hangs from the pre-2008 mean, Volatility from the band's top at 20.** Columns out of zero would spend
  most of the plot on a region the series never visits. (V500, V663)
- **No shaded band behind a history; the columns are coloured by the band instead.** A column coloured by the
  band says which side and how far, one reading at a time. The one named exception is the Federal budget, whose
  fiscal years with a recession are shaded, because recessions explain deficits (Keren, V668). (V500, V668)
- **The space above the chart and the space below it to the trend pill are equal, and the gap under whatever
  ends a history card equals the card's own top padding.** Keren: "the same to the trend button, so it's
  symmetrical"; "I want the top padding and the bottom padding to be equal." (V559, V571)
- **Nothing is written inside the plot that the plate, the legend or the range bar already says: no labels for
  the extremes or the latest point, no unlabelled dots, and no un-inversion marker on Horizon.** Keren: "we
  don't need this"; "the colour already shows that the graph goes from inverted to normal, so I don't need it
  again." (V568, V570)
- **A history whose chart starts later than its series says why in its (i).** The crop then reads as a stated
  choice, not a hidden one. (V404)

### Head and menu

- **Every history has the same head: a small grey badge holding the page's mark, a title naming what the chart
  measures (never the page's name, never the period: no ", YoY", though a unit that is part of the reading
  stays, as in "Share of Income"), and a single ⋯ on the right.** Taken from the dashboard Keren sent; the
  axis already says the period on every window. (V518, V606)
- **A history's title reads its own menu row, so one label has one source.** Horizon's title comes from its
  spread menu, Pressure's from its maturity menu. (V639)
- **The head's badge is 21px with a 13px glyph, a 7px radius, a lighter stroke and a neutral wash mixed from
  the text ink, about the height of the title; the ⋯ is a round button with a hairline border, the same
  size.** Keren: "make the background smaller and brighter"; "the height of the icon, including the
  background, should be more or less the height of the title next to it." (V520, V521)
- **The Federal budget page's head wears the budget mark its card wears, and the page carries its timing chip
  (Structural), like every other page.** Keren's call at V670 ends the wait V518 set ("no mark until Keren picks
  one"). (V518, V670)
- **A history's note opens from its head's ⋯ menu, last in the menu, never from an (i) beside the title.**
  Keren: "put the info in the three dots in the history panel as convention" — one string read from one place.
  (V518, V522, V582, V593)
- **A control that chooses which series a chart draws (Pressure's maturity, Horizon's spread) is a row in the
  head's ⋯ menu; the control row holds only the window, so only one duration ruler is
  ever on screen.** Keren: "Put it in the growth page under the three dots in history"; "shouldn't be a new
  ruler — you can put it in the three dots"; a window labelled 5Y beside a maturity labelled 5Y is a collision
  no labelling fixes. (V210, V472, V518, V522, V588)
- **The head menu is one component: `menu` always returns groups, each shown on the root with its current
  reading beside it, opening into its own rows with a way back; even a single group drills.** Keren: "this
  behaviour should apply to all history menus … Make it a rule for the future". (V600, V602)
- **A menu group opens and closes on a click only, never on hover.** Hover opened groups under a pointer that
  had not chosen them and trapped Keren in the submenu, and a phone has no hover. (V601)
- **The window's total (Σ) sits beside the head's title and changes with the window: muted mono at the title's
  size, bound tight to its number, one space from the title.** Keren wanted a dynamic total "next to the
  title"; Σ is the sum of every bar in view. (V605, V606, V607)

### Readout and legend

- **Each history draws the average of the window on screen as one accent line.** Keren: "take the average CPI
  by cycle and put it as a line … so I can also view the number". (V421, V423, V427, V428)
- **Reference values (average, target) are constants of the window, so they are named in the legend, never in
  the readout and never in a key under the chart.** Keren: "average 3.3%, Fed target 2.0% — that never
  changes, so we don't need it in the changing tooltip." (V428, V556)
- **The legend sits inside the frame at the top right of the grid, on a plate in the card's colour, inset by
  the same amount from the top and the right; every page has one legend in one place, with no floating inline
  key.** Keren: "switch the legend to the top right side of the grid"; "the legend is not in the location that
  we agreed on." (V556, V557, V558, V567)
- **A legend line is drawn with the chart's own class, so it matches the plotted line in colour and dash; a
  key that names what a colour means uses a swatch instead.** Keren: "the line next to Average 3.3% needs to
  be purple … so it matches the colours." (V561, V570)
- **The readout is a plate inside the grid: at rest it shows the latest column with a value, pinned over it,
  and on hover it slides to the column being read; it never holds a resting summary such as the window's
  average.** Keren: "maybe we should see as the default the latest figure"; "the default tooltip that writes
  the average is redundant". (V555, V560, V563)
- **Hovering dims the plot, keeps the column under the pointer at full colour and drops a hairline through it,
  by one shared rule on every chart's `.hcol`; at rest the plot does not dim and the crosshair is faint.**
  Keren: "I want the colour to be slightly changed, so I can understand which tooltip connects to which bar";
  "read from the same source, the same mother component." (V373, V383, V407, V563)
- **The readout never moves or resizes the page; the crosshair and the lit column say where.** Keren took this
  from Apple Health over a tooltip. (V495)
- **The plate has one fixed height on every chart and window, in a band reserved out of the plot that no
  column can reach: 10px under the legend's strip, with 10px under it before the data.** Keren: "I don't want
  the height of the tooltip to change." (V559, V566, V574)
- **The plate is built once and only rewritten after that, so it slides from where it was; it is centred on
  its column until it runs out of room, then stops against the plot's own edge, never over the number rail.**
  Keren: "whenever I hover over bars it returns to the start and moves to the current location"; she wanted
  the two edges symmetrical. (V558, V575, V576)
- **The plate has two lines: its date label matches the legend's label exactly (face, size, case, ink), its
  figure is smaller than a card's headline figure, and a two-figure reading uses smaller glyphs without
  changing the plate's height.** Keren: "the number is too big"; "I want August 2026 to be in the same size
  font like Average 3.3." (V558, V559, V565, V566)
- **On a phone a tap reads a bar: the plot hands horizontal drags to the chart (`touch-action: pan-y`), a
  single pointerdown reads the bar under it, a drag scrubs, and tapping the same bar again, tapping elsewhere
  or scrolling closes it.** Keren reads the app on a phone, which has no hover; once a tap opened the reading
  and nothing closed it. (V144, V608)

### Windows: Cycles and Years

- **Every history page opens in Cycles mode on the current cycle (the front page's cycle), and the mode bar
  reads Cycles on the left and Years on the right.** This is a cycle-tracking app: a reader who taps a reading
  from the current cycle expects that cycle, not a 10-year window. (V410, V417, V418)
- **In Years mode every history opens on 10Y, the same on every page.** Keren: "make the default marker 10 years"; a shared control must never start in different places.
  (V368)
- **The window control sits on the page's own ground above the history card, with `--gap-top` above it; the
  mode bar and the cycle picker (or the years ruler) share one row, the mode bar sized to its two words and
  the picker taking the rest.** Keren: "the top menu bar is greyish and it's outside the container of the main
  chart"; both choose a window, so neither is a submenu of the other, and the shared row gives the chart back
  44px. (V444, V519, V522)
- **The cycle picker is a single-select dropdown listing each cycle's name with its years ("COVID-19
  2018–2021").** Keren preferred a dropdown, and the years let a reader place a cycle. (V419)
- **Don't re-add a multi-cycle overlay: the chart shows one cycle at a time, drawn exactly as in Years mode.**
  Five cycles at once forced grey lines that cannot carry the heat ramp; Keren: "I want the same visuals as
  the years." (V420)
- **The Years ruler draws its stops from the one `TIMELINE_STOPS` list (5Y, 10Y, 25Y, Max),
  with the same labels and order on every page; a page offers a stop only by naming it in its own `stops`, and
  only if its data can fill it; 50Y does not exist.** Keren: "when I change one component, it changes across
  the board"; "we don't want to look at different pages and catch inconsistencies all the time." Two stops
  that mean nearly the same thing are worse than one. (V363, V411, V419, V476)
- **5Y is a standard stop.** Keren: "add five year to the ruler, because that's the standard visual most
  economists use." (V362, V372)
- **Growth's ruler offers only time windows (5Y, 10Y, 25Y, Max), with no "Year on year" stop, and the
  year-on-year view is gone from the code.** Keren: "drop the this cycle and year on year, add 5Y"; at V668 she
  chose to remove the view rather than keep it in case. (V372, V668)
- **Pressure and Horizon offer only 5Y, 10Y and Max, with a window ruler like every other history.** Their
  Treasury series start in 2005, so 25Y is unanswerable; Keren: "have the configuration of all the rest of the
  inner pages history". (V394, V588)
- **Every figure about a history (the total, the trend, the average) describes the window on screen, and no
  fixed figure sits beside a control that changes it.** A figure that ignored the window above it "read as a
  bug": Growth once showed a fixed cycle total of +11% beside a window total of +24%. (V423, V432)
- **Don't re-add a strip of averages by cycle beside a history.** The average line already reads the same
  figure for whichever cycle is picked. (V423, V431, V433)

### The trend pill

- **The trend is a pressable capsule: pressing it steps the readings back and draws one purple fitted line
  whose two ends carry the fit's own values; the line is not drawn the rest of the time.** Keren, from Apple
  Health: "just put a trend line, a purple trend line"; "the trend button doesn't look like a trend — it needs
  to have round corners". (V274, V276, V283, V572)
- **The pill is one line: the trend word in the page's vocabulary with an arrow beside it, then the span in
  years ("across 4Y"); its key is just "Trend", it does not repeat the page's verdict, and its word wears the
  pill's colour, never a severity colour.** A button says one thing, readers think in years, and red on purple
  is two colour systems in one control. A daily series counts 252 trading days to the year. (V289, V291, V425,
  V436, V439)
- **Under eight points the pill reads just "unavailable", with no reason clause, as an outline with grey text
  at the same height.** "Unavailable" is Keren's word; "when the trend is unavailable … like empty … so it
  looks disabled". Two points is a slope, not a trend. (V236, V277, V437, V572)

### Each page's picture

- **Growth's history is real GDP year over year, quarterly from 1988, as columns from zero, coloured by the
  season model's regime like everywhere Growth appears: gold in expansion, periwinkle in contraction.** Keren:
  "change the main container to be yearly history like the rest of the app"; at V668 she chose regime over
  sign for the history too, so a column says the phase, not which side of zero it fell on. (V371, V380, V668)
- **A view of two measurements of one quantity (GDP year on year) is drawn as pairs: a quiet "before" and a
  coloured "after" joined by a connector with a disc at each end, so the mark itself is the difference.** It
  follows Keren's before/after reference; two columns from zero would hide a change of about 2%, and a
  truncated axis would lie. (undated, Sep 20, 2026)
- **Temperature's history is CPI year over year, monthly from 1989, as columns from zero with the 2% target as
  its reference; the columns use the heat ramp (yellow to orange, mixed from the dial's Autumn and Summer,
  climbing in darkness as well as hue, periwinkle below the range), binned by the reading (`heatStep`), so the
  same CPI is always the same colour.** Keren: "you dropped the orange-yellow spectrum — it needs to look like
  a heat map"; the reading's identity outranks one colour per shape. (V257, V373, V378, V390)
- **Temperature is drawn as a chart, never a ring, and with no bear-year shading.** Keren's call, from Natural
  Cycles' temperature view; the dial's market band already carries the bear years. (undated, Sep 17, 2026)
- **Volume's columns are one red hue in steps, darkest where the money stock contracts and palest at the
  flood: height says how much, colour says which way.** Keren: "when you lose a lot of blood it's dark red …
  if you have a lot of blood in the system … it's a faint pink, because it's abundant." (V389, V390)
- **Pulse draws a pulse: two lanes over the same span, today's tempo against her pre-2008 pace, where only the
  spacing of the beats varies and each beat has a real trace's heights (P, QRS, T); the trace is Pulse's
  miniature, and its history is bars like every other.** Keren: "if we're talking about the pulse, I kinda want
  to see a pulse"; "I want it to look like a real heartbeat"; confirmed at V668. (V297, V298, V496, V668)
- **Pressure's maturity history is columns, each coloured by what the curve was doing that quarter (inverted,
  or normal, from the one `pressureZone()` lookup), in `--critical` and `--season-autumn` at full weight: colour
  shows the curve, height the yield.** "Steep" went at 1.2.0 (no source). Keren: "a colour that represents the pressure like
  we do"; the pale zone tones failed to separate under protanopia. (V394)
- **Pressure's history keeps quarterly averages, but the column for the quarter still running is the latest
  close from the par curve, labelled with its date (added at the end if the history has not reached that
  quarter).** Keren: "I want to see the latest data and not the quarterly data." (V644)
- **Hormones' columns are six steps of blue, light to dark, spread across the window's own low and high, never
  across fixed levels.** Keren asked for shades of blue; the forty-year drift shows in a ramp, not in one
  colour. (V608)
- **Households draws debt service and saving together on one axis, as paired columns.** Both are shares of
  disposable personal income, so one axis is honest and spares the reader a comparison in the head. (V460,
  V500)
- **The Federal budget chart is one bar per fiscal year from FY1946, surplus above zero and deficit below,
  with a dashed line at the 1983 level at every range (even when 1983 is off the left edge); its windows are
  multi-year only, and the wartime record (FY1943) is stated in its note, not drawn.** Peacetime is the only
  frame in which 1983 and today compare, and the war year would flatten eighty years into a band; the annual
  series keeps the 1946 start and every surplus year (Keren's call). (V358, V359, V404)
- **Volatility's history is one chart: the monthly average of the VIX's daily closes since 1990, with the VXO
  for 1986–89; every past cycle reads the same history.** Keren: "I want the full history of market volatility
  as much as possible"; "I only want one chart here." (V663)

## Cards, rings and marks

### Marks

- **A mark names the subject and the word carries the verdict: a mark never fills, changes or colours itself
  by the reading's state; its colour is its category's.** Keren: "make the icons without colour" (the piggy
  bank went because it carried the verdict); "I don't want the individual icons to disappear. I just want them
  to inherit the color." (V301, V302, V457, V490, V657, V661)
- **Every reading wears its own mark, the glyph alone with no disc, in its category's colour on its card, its
  Search row and its page.** Keren, with Apple Health: "they have an icon next to each title"; she asked for
  Desire's icon "grey and refined, without a green background". Related readings may share a mark (Shiller CAPE
  and the Buffett indicator wear one diamond); V510's "no glyph twice" is retired. (V300, V449, V586, V657,
  V661, V668)
- **A mark says which reading; a preview says how much; the two slots never swap jobs.** A ring in the mark
  slot took the glyph's job and left the preview untouched. (V585)
- **One glyph, one function, called everywhere the mark appears.** A second declaration of the same function
  silently wins by file order. (V585, V646)
- **Marks are drawn in the app's icon language (24 grid, outline, currentColor, round caps, a stroke that does
  not stretch, solid only where a hollow shape would vanish, no interior detail a small size cannot hold); a
  new mark copies the spec of the one beside it, and a DSM mark is drawn in the Lovable DSM first and ported
  path for path.** The design system stays the source of the drawing; the Volume preview was "not rounded in
  the corners like the rest". (V215, V247, V302, V311)
- **A mark's proportions are measured at the size it is read, and a new mark is chosen by rendering its
  candidates together at 13, 15, 20, 27 and 42px.** At small sizes a mark closes into a scribble or a blob.
  (V457, V490, V510, V524)
- **Each reading's mark.** Keren chose or drew each one. (V215, V301, V302, V314, V457, V490, V507, V510,
  V524, V586, V639, V646, V661, V664)
  - Growth: the SproutMark, a seedling out of the soil, built in the DSM on Keren's ask. (V215)
  - Temperature: a thermometer. (V301)
  - Valuations: a diamond (a brilliant cut, the girdle its one interior line), never the piggy bank; Shiller
    CAPE and the Buffett indicator share it at Keren's request. Keren: "make the Valuations icon a diamond
    instead of a piggy bank". (V302, V661)
  - Circulation: a hollow drop, kept apart from Desire's flame by the flame's filled core. Keren: "I want
    circulation to be an icon of a drop"; in this app Circulation is blood. (V302, V507)
  - Volume: Circulation's drop. Keren: "take the drop icon of circulation and put it in volume", when the
    Search headings lost their icons. (V692; three sound waves from V507 and V646.)
  - Pulse: the ECG trace. Keren: the trace "is more representative of a pulse than a heart". (V524, V586)
  - Unemployment rate: a person, head and shoulders. Keren: "I want unemployment rate to have a person icon, an
    avatar icon, in the search menu and everywhere else". (V691; three rising bars before.)
  - The cycle story: a book, left of its heading, today ("Optimism in Autumn") and on a past cycle ("Cycle
    story"). Keren: "for the cycle story, I want a book icon". (V691)
  - Interest rates: a heart. Keren: "give interest rates a heart icon". (V688)
  - Stress: Energy's bolt. Keren: "take the lightning icon in energy and put it in stress", when the Search
    headings lost their icons. (V692; a battery in V688.)
  - Pressure: the gauge (a dial on a connector), not the cuff, whose shapes collapse at 15px. (V314, V639)
  - Volatility: three candles of uneven height, the day's range; the umbrella belonged to the fear index,
    which the page no longer is. (V664)
  - The categories (Weather, Circulation, Mood, Energy) carry no mark, in Search or on the Diagnosis headings;
    the drop went to Volume and the bolt to Stress. Keren, asked whether the Diagnosis headings should lose
    theirs too: "yes make them gone". (V692; Mood's three waves from V490, Energy's bolt from V457.)

### Cards and miniatures

- **A category item has one shape: the mark and the name lead, the date and the chevron close the head, and
  the reading sits beside a miniature of its own page; its figure looks the same whichever card or row it came
  from.** Taken from Apple Health's All Health Data list; Keren: "make sure everything is aligned to the same
  component." (V447, V504)
- **A card's miniature is a thumbnail of the page behind it, narrow and fixed in width (Apple's is 76–85px,
  22–24% of the card), 42 high on every item, and an item keeps that height even with no picture.** Keren,
  measuring Apple Health: the infographic is small, and the white space sits in one place; she asked for them
  20% shorter than 52. (V449, V459, V507)
- **A miniature is a grey picture with a single coloured mark, the newest reading, never a state colour; on
  category pages that mark takes the category's colour.** Twelve coloured pictures read as twelve things to
  press; one mark in grey shows the reading the row is about. (V504, V506, V661)
- **On a card the verdict word is one quiet neutral, a step below the figure; severity speaks in the inner
  pages' tags.** "Highly overvalued" is not made more alarming by being red. (V251, V309)
- **Hover darkens a card's border to the neutral strong border, never the brand purple.** Keren: "I want it a
  little darker, not purple." (V299)
- **Every peek mark is spaced by one rule: a slot per mark, the mark a fixed share of the slot (`COL_FILL`).**
  Keren: the spacing "needs to be identical to temperature, growth, and valuations because it's the same
  language". (V258, V523)
- **A reading that is one number against a reference band, with no history to draw, takes the flat
  track-band-disc peek, not a bar chart.** Keren: "I don't think it's necessarily a bar chart — pick the best
  infographic". (V291)
- **A diverging peek may opt in to a purple hairline at its base instead of moving the base off zero.** Keren:
  "put a purple line so I can understand what is above the line and what is below". (V312)
- **Several readings inside one container are separated by hairlines, not each given its own border.** That is
  how the panel Keren sent separates siblings. (V488)
- **A category card stays white when it is touched, scrolled or hovered: no hover fill and no tap highlight.**
  Keren: "When I click and scroll, a category container, it changes color. to faded uh, gray. Fix it so it will
  always be white." On a phone a touch leaves `:hover` stuck on the card. (V678)
- **A chevron on a door is the `CHEV` SVG, never a CSS border box.** A chevron drawn as a picture cannot fail
  to lay out; the border-box chevron did fail inside a `<button>`. (V450)
- **A past cycle's category cards are built like today's: the same unit and mini chart, with the cycle's
  figure and its range over the cycle as the label.** Keren: "in the past cycles the categories should be
  identical in design to the current cycle categories". Since V665 they live on the category pages, which Search
  opens. (V660, V665, 1.8.0)
- **A past cycle's miniature is drawn from that cycle's own points for every reading; a series the past cycles
  read is always dated points, never bare numbers.** Desire's quarter-ends were bare numbers, so its past-cycle
  miniature could never draw. (V670)
- **There is no Growth ring.** Keren removed it as "not really indicative of the growth itself". (undated, Sep
  19, 2026)

## Colour, type and space

### Colour

- **The seasons' colours are one token each, read by the legend, the Season Model table and the ring alike.**
  Keren: "one change fixes the entire app". (V182)
- **Growth's phase takes the dial's seasons, not the severity palette: expanding in Autumn's gold, contracting
  in Winter's periwinkle, two steps of one blue for the two degrees of contraction; it is coloured by the
  season model's regime, never by the sign of growth.** Keren: "blue for contraction, yellow for expansion";
  green above zero contradicted the word on the panel, which names the direction, not the level. Since V668
  this holds for the history too. (V156, V260, V668)
- **Temperature's word wears the ramp step its own reading sits on.** Keren: the word "should be the same
  colour as the graph"; a card's word and its picture are one reading. (V260)
- **The timing glyph is neutral ink: one line for the cycle, a tick for now, a dot before, on or after it, and
  a span for a structural reading.** It is a category, not a severity. (V269)
- **Households' two series keep their colours (the bill in accent, what is kept in secondary) in every
  drawing.** A reader who has learned which is which should not have to learn it again. (V500)
- **On inner pages, Insights sit on their own ground (`--surface-2`), so a reader can see where the figures
  stop and the sentences begin.** Keren: "I really like the beige background you made in policy rate — use it
  for the insights across the inner pages." (V379)
- **A mark's badge uses its own wash, `--mark-wash`, one step deeper than `--track`.** Keren: "I want this
  background to be a little less pale"; a badge has to read as a shape. (V503)
- **A segmented control is a card on the page (surface and border), and its chosen segment wears the accent's
  wash.** Keren: "the background should be white"; white on the accent wash says which segment is chosen
  without adding a colour. (V579)

### Type

- **Every font size is a `--type-*` token from the Lovable DSM scale.** Keren: "for the font sizes you can use
  our lovable dsm we built." (V662)
- **Cormorant Garamond italic is the app's feminine voice for titles, never below 20px and never upright for a
  title.** Keren: "the titles should be in a feminine font." (V272, V506)
- **In a figure row the number is bold, not its name.** Keren's call. (V428)

### Space

- **`--pad` is the space inside a container and `--gap` the space between containers (both 10px); a new
  container takes `margin-top:var(--gap)`, never a figure of its own, with no per-tab or per-page override;
  marks and type keep their own figures, because those are shapes, not spacing.** Keren: "if one day I'll tell
  you I want the spacing to be 30, you would just change one number — do not repeat yourself"; "make outer
  spacing 15 pixels and inner spacing 10 pixels", then "five pixels shorter … this applies to all of the app".
  (V381, V385, V449, V450, V505, V507)
- **A component sets its own internal spacing; a page only says where the component sits.** A per-page
  override silently zeroed the gap between two history menus on two of eight pages: "just checking whether you
  are dry coding this app." (V440)
- **Every page is framed by 20px on all four sides; the space between the top bar and the first element is one
  token, `--gap-top` (about 15–20px), whether the page opens on a chart or a card, and the last element clears
  the tab bar by the same token.** Keren: "if you don't have spacing between the top menu and the first
  element in the page, fix it because it's a rule"; "the padding on the bottom should be the same as the
  padding on the top." (V385, V505, V595, undated)
- **A container with nothing to show takes no room and no gap, and a section on an inner page is not a box
  inside a box.** Keren saw a ghost 10px under the Cycle tab; a dashed container around cards that already
  have edges costs a gutter for nothing. (V282, V298, V594)
- **One hairline per seam, never two, and a list ends with air: where a card meets a fact row the card gives
  up its rule, and the last fact row keeps 10px under it.** Keren: "I keep seeing in the pages that there is a
  double line — clear it up"; "make sure you have spacing and dividers that show consistency in the UI."
  (V282, V604)

### Shape and size

- **There is one container radius, `--radius` (16px), plus `--radius-inner` for a segment inside a padded
  track (3px tighter); small marks keep their own radii, and circles stay circles.** Keren: "decide on a
  border radius that will apply to all containers in the app"; "I really wanted it to look more round and more
  feminine, like the Apple app." (V444, V507)
- **Every control, segmented control and action button is one height, 40px (`--ctl-h` = `--btn-h`).** Keren:
  "make it a rule that all the buttons and drop-down menus have the same height"; the 26px segments were too
  small for her fingers. (V425, V580)
- **The history row's controls (mode bar, years ruler, cycle picker and their segments) are capsules, like the
  trend pill; the dropdown menu keeps `--radius`.** Keren: "I want it to be round like the trend button"; a
  pill-shaped sheet of options reads as a mistake. (V582)

## Data and sources

- **For the MVP the app reads the United States only; there is no economy picker.** Keren: "we don't have
  multinational data across the app … for the MVP, concentrate on the US. So the menu can go." Growth's
  economy menu and its peer data were removed. (V669)
- **A hand-carried history is checked on load against the records its source itself states.** A
  mis-transcribed digit cannot then sit in the app unnoticed. (V299, V306, V358, V643)
- **Provenance lives on each figure: every card names the day its number derives from, and the Sources screen
  gives the compile date, taken from `DATA_COMPILED`, and names the readings that refresh themselves every
  weekday (the Treasury yields, the Fed funds rate, the VIX and VIX3M, Shiller's CAPE);
  everything else is compiled by hand.** This is why the dial can say "today"; Keren merged the menu's footnote
  and footer into one paragraph, and at V668 chose to name the weekday refresh. (V356, V651, V668)
- **Every weekday the Data workflow commits the daily figures and then starts the site deploy, so the hosted
  site gets them the same day.** Keren: "set it up". (V651)
- **Data that nothing reads is removed, its figures kept in the archive, rather than kept out of sight.**
  Keren: "why do we need cycle end readings? If we don't need it, just get rid of it"; data nobody can see
  cannot be checked by looking at it. (V512)
- **A series that does not reach a date is shown as not measured then; nothing is interpolated.** The record
  either covers the date or it does not. (V612)
- **Federal budget's history is OMB's surplus-or-deficit share of GDP via FRED (FYFSGDA188S), the same series
  its marker cites.** (V358)
- **Debt service is the Fed's DSR on its credit-bureau basis (FRED TDSP), from 2005 Q1; its 15.85% peak in
  2007 Q4 is never put in one sentence with the retired series' 13.2%.** The Board rebuilt the series in
  September 2024 on tradeline data including escrow, so the two are not comparable. (V460)
- **The personal saving rate (BEA, FRED A072RC1Q156SBEA) is kept in full from 1947.** A claim about the record
  has to be checkable against the record. (V460)
- **Unemployment is monthly, seasonally adjusted, from January 1948; October 2025 has no reading and is kept
  as a gap, drawn as nothing and left out of every average.** BLS did not publish that month, and joining
  across it would invent a figure. (V498)
- **First Trust and Fisher Investments, the sources for the typical cycle length, are grouped with the cycle
  sources on the Sources screen, so no "Other" group appears; grouping them is not an endorsement.** They are
  the only citations that are neither primary nor a labelled compilation, and whether they belong is Keren's
  to settle. (V537)

## The Diagnosis

- **The Diagnosis reads the patient from all of the app's readings (weather, mood, circulation, energy) and
  names how Mrs. Market feels now.** Keren: "Like a doctor would analyze a patient … I want to have emotional
  intelligence in this analysis … I want to understand how Mrs. Market is feeling at this present time."
  (V664)
- **It sits under the dial on the Cycle page, for today and for any closed cycle.** Keren: "I want the
  diagnosis to open below the cycle. Mind you, that the cycle page applies to past cycles as well." It follows
  her cycle-tracking app's home page. (V665)
- **The Diagnosis is two cards at the cycle's width: the emotion in its season with the cycle's story, then the
  cycle year by year.** Keren: "I want to break the analysis container to three separate containers. That would be
  at the width of the current cycle" (V674); the systems card (Circulation and Energy, one Analysis line each, and
  "Across the cycle") left in 1.8.0. Keren: "circulation and energy is not that important because I can see that
  in the search or in the cycle itself … Yes, drop this circulation and energy." Don't re-add the systems or the
  Symptoms; the category pages hold the readings. (V665, V672, V674, V682, V686, 1.8.0)
- **The cycle reads year by year under its story, one row a year, the years parted by hairlines, and each year
  opens its quarter's sheet.** Keren: "I need to turn the dial all the way back and click on the button … what I
  would want is some kind of a very brief summary of the cycle by years … it correlates pretty well with the story
  of the cycle", then "Make the separation between years through lines or something. Make it beautiful." The year
  stands in the serif on the left; beside it the year's seasons in order, and under them Mrs. Market's emotion at
  its first and last month (one word when they agree; none before her mood can be read) and the S&P 500's return
  for the year ("so far" for the year in progress), all from the app's own record, nothing written by hand. The
  year opens the sheet of its last quarter, the one the dial's centre opens. A closed cycle ends on "After": the
  S&P 500 a year after the close. That figure is the S&P 500's return in the calendar year after the close, from
  the yearly record the rows above it print, so every cycle back to 1928 ends on one; Claude's call, replacing the
  monthly average twelve months on, which opens in 1948 and left the five cycles before 1947 without it. (1.8.0,
  0.1.1)
- **The Mood page has one Insights box (since 1.5.0, the sheet behind Mood analysis's More details): the cycle of market emotions, then "She's in …" with the cycle on screen
  (its name and years) and its story as the card's text, and one details button; the figures behind her stage (her
  score, its rank, and each reading's rank) are the first fact behind that button.** Keren: "you have two containers
  and two more details buttons … she's in optimism and her story this cycle it's pretty much the same thing"
  (V688). The story tells the cycle on screen: today's page the current cycle, a past cycle's page that cycle's.
  It tells where she opened, her high and her low (the months her mood ranked highest and lowest against her own
  history) in the order they came, where she closed (or is now), and the two emotions she spent most months in.
  Keren: "i would rather have it analyse the emotions each cycle goes through like a story." It replaced Emotion ×
  Season, which she judged uninformative ("it doesn't tell me anything"): an emotion in a season lasted about two
  months, and emotion and season together did no better than slid tracks at explaining the next year. Don't re-add
  a season grid or a posture or forecast. (V684, V686, V688)
- **A closed cycle is diagnosed at its close: the feeling and season at the closing month, its years, and what
  actually followed a year later.** Keren chose this layout; verdicts are words for today, and a closed cycle's
  figures are on its cards. (V665, V672, 1.8.0)
- **The Diagnosis and the Mood page use one vocabulary: the cycle of market emotions' stages, read from the
  Mood readings.** Keren chose "Switch" on the card (V686): the seven price-and-VIX feelings of V664 (Hope,
  Optimism, Euphoria, Anxiety, Fear, Capitulation, Despondency), their cut-offs and the Diagnosis (i) that stated
  them are retired. (V664, V686)
- **The Mood page draws the cycle of market emotions exactly as Keren's reference chart (thirteen stages from
  Optimism through Euphoria, Anxiety, Denial, Fear, Desperation, Panic, Despair, Depression and Hope back to
  Optimism, its colours and both callouts), with today's stage lit.** Keren: "Build it exactly as the reference.
  We don't want to be unique here." Her mood is the average of three rank-to-date readings turned toward
  appetite: valuations (CAPE and Buffett), calm (the VIX upside down) and consumer confidence; Desire (spending, not
  feeling) and Horizon (its level does not sort mood) stay out. That mood is ranked against her own past moods: "One
  person's euphoria is not another person's euphoria … where is she now in relation to her own history of
  emotions." Her direction over three months picks the side of the chart (Keren chose "Direction" on the card;
  three months is Claude's default) and her rank picks the stage on that side whose height on the chart is
  nearest (heights read off the reference, 0 at Despair, 100 at Euphoria). The bottom is Despair, Keren's word
  ("despair"). This replaces V679's seven-word emotions curve and the 20/80 fifths and ladder tried on the way.
  (V685)
- **The Diagnosis opens on the trend card: today's emotion in today's season, said of Mrs. Market by name, and
  only that.** Keren: "I love the fact that you said she has been in optimism in summer for seven months … call it
  Mrs. Market has been. And also, I want the analysis below it to be much shorter and only refer to optimism in
  summer. When it happened in the past, for how long, what happened next, very briefly." The card says how long
  the current spell has run. The earlier spells of the same feeling in the same season, with the S&P 500 a year
  after each, were listed for a day and dropped (Keren: "Drop the before three times since …", V686). The share
  of months by season, its bars, and the median and longest spell are gone; in V689 the spell line went too, and
  the card holds the cycle's written story under the feeling and season (Keren: "I'm not sure I need this"). Before
  that it previewed the measured story beats (Keren: "give a preview of that emotional story") (V686; the Apple Health bars were V679,
  the spell statistics V681). The card opens the Mood page; no "She's in" header, no History record, no Mood row
  in the Analysis, and the Wild Power quote stays gone (V681).

## Code and process

### Versions

- **A release has a version, `MAJOR.MINOR.PATCH`, and a build number.** Keren: "make versioning like the
  convention" (app-store practice: a semantic marketing version beside a sequential build). Claude chose the
  details, for her to overturn: the first is **1.0.0, build 710**, the build carrying on from V709, so the old
  V-numbers were builds all along; the friendly name stays (`1.0.0 — Semantic Versions`); the menu's foot reads
  `Version 1.0.0 (710)`; the artifact's label is `1.0.0 (710)`. Versions before 1.0.0 keep their V-names in
  git and in this register. (1.0.0)
- **Until the first draft is finished, versions are 0.x; 1.0.0 is kept for the day Keren calls the draft
  finished.** Keren, at 1.8.0: "I feel like we haven't finished the first draft of the app", then "name it
  0.0.9 … by the time we get to 1.0.0, the app would be in a completely different state." So the next release
  is **0.0.9, build 727**, and the build number carries on. The releases named 1.0.0 to 1.8.0 keep their names
  in git and in this register; the build number orders them with the 0.x releases. Before 1.0.0, anything new
  moves the middle number (0.1.0, 0.2.0 …), a redesign included, and a fix or wording change moves the last.
  `npm run bump major` refuses on 0.x; 1.0.0 is given exactly, `npm run bump 1.0.0`. (0.0.9)
- **A version is recorded as a git tag and a GitHub Release, not a changelog file.** Keren asked for the GitHub
  convention; Claude recommended, and she accepted: Semantic Versioning, an annotated `vX.Y.Z` tag on each
  version's merge commit, and a GitHub Release built on that tag, its notes taken from the merge. The Tag workflow
  makes both. The tags 1.0.0 to 1.8.0 stay on their commits but get no Release, so the Releases page starts at
  0.0.9. "Next version, 0.0.9 ships as it is, and the fix comes at 0.1.0." (0.1.0)
- **A number the abandoned line already tagged is never tagged or released over.** The tags v1.0.0 to v1.8.0
  name commits of the line given up, so the draft's own 1.0.0 cannot take its tag while they stand. The Tag
  workflow names such a version and turns red instead of skipping it or putting its Release on the old commit,
  and `npm run bump` refuses the number. Claude's call, for Keren to overturn; retiring the old tags before 1.0.0
  is hers to decide. (0.1.1)
- **Which number moves:**
  - **Major** for a redesign, or a change to how the app is read: a season, cycle or mood model redefined,
    a category or tab added or removed, the book's framework changed.
  - **Minor** for something new that leaves the rest as it was: a reading, a page, a chart, a card, a
    feature, new history.
  - **Patch** for a fix or a wording change: a bug, a figure corrected, a note reworded, a test or tool or
    docs change with nothing new on screen.
  - The largest change in a release decides; a lower number resets to 0 when a higher one moves. The build
    number rises by one with every release, whichever number moves, and never resets.

- **Where Keren hands Claude the call, Claude's choice is recorded here as Claude's, for her to overturn.** Keren,
  on the V693 review: "fix all issue and make judgement calls where needed". At V694 Claude chose: the installed
  app turns with the device (WCAG 1.3.4); a chart's ⋯ menu is a plain disclosure, not an ARIA menu; an update
  never reloads a page in view or one holding a draft; the Fed card leaves out what it cannot date rather than
  show a stale move or a past meeting; CAPE's file figure is Shiller's own monthly reading, the source the live
  figure comes from, so one card never shows two sources. (V694)

- **The script is ES modules, bundled into the one file, and the app is unit-tested in Node; documentation and
  tests stay lean and efficient.** Keren, on Claude's 7/10 review: "build a robust version with everything you
  recommended. make this app a nine", then "Make sure the documentation and the testing is lean and efficient."
  Claude chose esbuild as the bundler and jsdom for the unit tests (each a dev dependency only, never shipped), and
  left the manual artifact republish as it is: only a session can publish. (V695)
- **The modules are layered: each imports only from those below it, and no two import each other.** Keren, on
  "the modules lean on each other heavily. Untangling them is the next step": "do it". Claude chose the layers
  (from `format` and `dom` up to `repaint` and `main`) and folded `components.js` and `forms.js` into them. (V696)
- **Shared values live in owned stores, figures live in JSON, and the modules are type-checked.** Keren, on
  Claude's re-rating at V696: "make all of your recommendations." Claude chose: three stores (`now`, `ui`, `page`)
  in place of thirty setters; live redraws as subscriptions (`onLive`) declared by the repaint layer; the series
  in `src/data/*.json`; navigation split into `inner-pages` and `cycle-tab`; type checking (strict TypeScript since
  V702, below); a live document refused if any of its text carries `<`, `>` or `"`;
  content tests of what the pages say, with an 88% line-coverage floor. (V697)
- **A first visit and a returning visit show the same figures, and a figure the bots update is never typed.**
  Keren chose "Fix all" on Claude's V697 review. Claude chose: cached documents load through the readings' own
  `set`; the debt card reads its series; a warning at boot fails `npm run check`; a stored document that breaks
  the boot is dropped once; the service worker never stores an error page; `sources.html` is checked in CI;
  `npm run map` writes nothing when only the commit stamp would change. (V698)
- **The policy fact under the Fed card follows the Fed's own moves.** Keren: "make the policy fact adaptable to
  whatever is the current situation." The Data fetcher reads the run of target changes it already fetches
  (DFEDTARU): a move after the other direction reads "First hike since 2023" (the year of the previous move the
  same way); a run reads "Cuts in a row: 2 since Sep 2024". "One more signalled" is gone: it came from the dot
  plot, which nothing fetches. (V698)
- **The tests check the important things once, and the code is typed; types override the no-comments rule.**
  Keren: "Make sure we are not over-tested in the app ... only the important stuff", "I do want the architecture
  to have the best structure. If that is typesetting, then do it. and override the comments uh, rule", and "Fix
  everything you mentioned in the review". Claude chose: a browser check only for what needs a real browser
  (what the unit tests already prove left them); the phone's Back steps out of pages one at a time instead of
  leaving the app; a stored figure older than the file's own is never applied; types as TypeScript syntax, not
  comments, so the no-comments rule still holds for prose. (V701, V702)

- **Version history lives in git, in the commits and tags; decisions live in this register, never in code
  comments.** Keren: "Moving version history out of code comments — do it." (V649)
- **There are no comments in `src/`, the tools, the tests, the service worker or the workflows, except
  one-line section titles in `src/`; the reasons go in docs/ARCHITECTURE.md, and `npm run check` enforces
  this.** Keren: "nobody can follow up on so many comments and not all of them are so important". (V650, V652)
- **On GitHub, `main` is protected only by Restrict deletions and Block force pushes; changes still reach
  `main` through Keren's pull requests under CLAUDE.md.** Keren removed the required-pull-request rule ("I'm
  not sure we need that kind of security for the moment in the app"). (V642, V651)
- **A parent owns what its children share: `npm run hygiene` fails on a chart height or margin outside the
  frame, a font size that is not a token, a style aimed at one page, a branch on a reading's name, or anything
  unused, and unused components are removed.** Keren: "i want all parent components to have all the properties
  of their children"; "remove unused components". (V662)
- **Nothing that is no longer drawn is kept "in case", and nothing unused stays: functions, styles and design
  tokens alike (`npm run hygiene` catches each).** Keren's standing rule: lean, dry, efficient code; at V668 she
  had the unused tokens removed and the check extended to them. (V465, V662, V668)
- **Class names built at run time, such as `.mkt-up` and `.mkt-down`, are listed in the hygiene tool so the
  unused-style pruning keeps them; the suite checks that Analysis's bull and bear runs are drawn in colour, and
  that every class it sees built at run time is listed.** V662's pruning removed them, and Keren found "the bull
  bear market line disappeared". (V665, V667)
- **The tests are effective and lean: a check pins a rule, never an incidental count, date or string; what
  Keren decided stays pinned exactly; a static fact is checked statically; the model's rules are tested in the
  tool tests at their edges; the suite waits on the app, never on a clock; and CI runs every gate.** Keren:
  "make sure our test suite is effective and we're not over-testing the app." She chose the full overhaul and
  retired the stale `--full` baseline for a check that every run-time class is declared. (V667)
- **Move, don't rebuild: when a reading, a category or the frame moves, its machinery (svg, functions,
  tooltip, panels, DOM, data ids, open handler) moves with it, byte for byte.** The V314 rule; pages are found
  by id, so their parent does not matter. (V446, V473, V596, V614)
- **Today and a closed cycle are drawn by one set of functions (one `cycleModel`); never build a component
  that does the same job as one that exists.** Keren: "Make sure the current cycle page is rendered from the
  same components … so that we wouldn't have duplicate code in our code base"; she wanted one component, not
  two dashboards to maintain. The page is laid out the same way too: a past cycle stacks in the same frame and
  spacing as the current one. Keren: "in terms of components and page structure, we're doing the same thing
  because it's supposed to be identical." (V512, V659, V665)
- **Furniture every history shares (the head, the readout plate, the legend) is placed by the shared
  component, never by each page's renderer.** A component each page has to remember to add is one the pages
  drift apart on. (V520, V556, V568)
- **One dispatch: no view hangs a callback on `window` for another view to call; an action is named on `GYN`,
  the view that owns the answer registers it, the view that needs it fires it, and a fire with no handler is
  recorded.** Keren: "one dispatch." A handler on `window` is invisible, so a broken control looks like a
  control that does nothing. (V625)
- **Markup and placement are separate: `put` is the one way markup reaches the page.** Keren: "markup and
  placement split." (V626)
- **`byId` is the one way to reach an element and records any reach that finds nothing; `byIdMaybe` marks a
  reach that may rightly find nothing; the suite asserts the record is empty on every page.** The code then
  says which reaches are optional and which are broken, instead of hiding both behind a guard. (V620)
- **Each live reading has one registry row, and that row is its whole contract: its shape, band, check, where
  it lands and what it repaints; a number outside its band is refused, never clamped, and `receive` is the
  only way a reading comes in.** Keren: "a component based app that will be 100% ready for server side
  integration with controllers and services." (V629)
- **The subject row, the one row the app opens pages from, is built once in `subjectRow`; callers pass only
  what differs.** Keren: "make it a 10." (V631)
- **A reading is declared once, in the roster (`ROSTER`, `src/js/roster.ts`): its page, name, category, group,
  timing, mark, door, history and card; the category pages, Search, the Diagnosis, the past cycles, the history
  heads and every page's state read it, and a new reading is one row.** Keren: “make the app as consolidated as possible so we won't have to write the same code twice, meaning dry code and as efficient components as possible.” (V670)
- **Rows are addressed by name (`valRow`), never by array index, so the display order is free to follow the
  page.** Reordering by index would silently swap one reading for another. (V494)
- **No function grows (the V624 ratchet; the cap is 150 lines under CLAUDE.md); new work becomes a separate
  step.** As Pressure's Insights did. (V624, V640)
- **Functions get meaningful names, like `seasonHalf`.** Keren: "give the functions meaningful names like
  seasonHalf". (V664)
- **A probe asserts on what a reader can see (paint, opacity, size), not on element state such as `hidden`.**
  The hover readout once passed its probe while Keren could see nothing. (V373)
