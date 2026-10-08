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
- **There are six categories, and each wears one of the I Ching's six forces as its mark: Weather (heaven: sun and cloud),
  Activity (earth: a sprout, the colour `--earth`), Mood (wind: three wind lines), Desire (fire), Circulation (water) and Stress (thunder: the bolt).**
  Keren: "we should separate activity from weather and make it its own category … there you can put the real economy";
  she gave the sprout. A spiral for Mood was tried and dropped: "it looks too mushed … let's switch to the former icon" (0.9.11).
  Activity holds Labor (Unemployment rate, Nonfarm payrolls; Keren: "switch jobs to labor … it fits the context of fertility better") and Output (GDP growth, Productivity growth); the
  subcategory names, the factory mark on Output and the olive are Claude's picks. Weather keeps what the season and the
  market are read from: Economic Season (Temperature, Growth gap, Federal funds rate) and Market. Real GDP growth moved to Output and
  Economic Season shows the Growth gap instead, the figure the season actually reads, headed "GDP Growth vs Potential" (Keren, 0.9.11; "vs" 0.9.15); Keren: "are we really looking at
  pure growth when we're looking at the economic season?", then chose "Move, add gap" (0.9.11). Only the Growth gap says
  expansion or contraction; GDP growth reads its own sign against zero, Growing or Shrinking, and its trend accelerating or slowing,
  like Nonfarm payrolls and Retail sales (Claude, 0.9.13: it had kept the season's word and read "Contraction" at +2.1%). Stress keeps its name.
  Stress holds two subcategories, Credit and Debt, and its mark is the lightning bolt.** Keren: "stress should have its own
  category … Stress has a lightning bolt icon. And inside you can say, debt" (0.9.3); "Under stress category, put credit
  and debt" (0.9.4). Desire left Mood to be its own category, after Mood, with two subcategories, Demand (Discretionary
  spending, Retail sales) and Risk (Equity risk premium, Concentration risk, Default risk). Keren: "desire should be its own category";
  "the subcategories … would be risk and demand" (0.9.8). Its mark is the flame and its colour the red of `--bleed-mid`;
  Demand wears a shopping bag and Risk a die: Claude's picks, for Keren to change.
  Before 0.9.11 the work readings were Weather's subcategory Activity; Keren: "we don't need a category named activity" (0.9.0). The category was Energy (V457), shown as Activity (0.8.5); Debt left it for Circulation in 0.9.0, and Circulation for Stress in 0.9.3; Credit followed in 0.9.4.
- **The Federal funds rate sits in Weather, under Economic Season, after Growth gap: it is the environment the season grows in, not a pressure.** Keren: "Federal funds rate is not pressure. It's an environment that matches or correlates best to hormones and progesterone and estrogen … I think it was my mistake to put it in pressure", then "put it under economic season". The rate is a setting the Fed chooses, where the 10-year is a price the market sets; it was under Circulation > Pressure from 0.8.5 to 0.9.15. It wears Economic Season's thermometer and keeps its door to its page from the Interest Rates Environment head. (0.9.16, Oct 8, 2026)
- **The box holding Temperature, Growth and the S&P 500 is Weather, never Season.** The season is what those two produce:
  naming the box for it would put the conclusion on a level with its inputs, and the dial already shows the
  season. (V446)
- **The VIX reading is Fear, after its market name, the fear gauge, so Sentiment reads Confidence beside Fear.**
  Keren: "the opposite of confidence is fear. So if I would see confidence and fear, I would say, oh, she's not
  confident and she's fearful", chosen on the card over keeping Volatility. This overturns V663 ("instead of fear,
  call the indicator volatility"). (V663, 0.8.5)
- **Households is a subcategory with two readings of its own, Saving rate and Debt-to-income ratio (Debt payments until 0.9.22), never one paired
  reading.** Keren found the paired chart "not very clear … not so intuitive" and chose "Split it" (0.9.21); both are
  headline figures (BEA's personal saving rate, the Fed's debt service ratio). "Debt service" stays off the screen:
  "there is government debt service and household debt service" (V463, V660). Their lines are unchanged: saving's
  band is the 10th–90th percentile since 1947 (4.5–12.2%), the debt-to-income ratio's line the series' own mean since 2005.
- **The fiscal markers are Federal debt (not "Debt burden") and Federal interest payments (not "Interest burden").**
  Keren chose "Federal debt" because the card shows the debt itself (V660), and "federal government interest payments"
  so it is not read as the Federal funds rate reading (0.9.0).
- **Federal debt is shown in dollars as well as against GDP.** Keren: "we only have percentages, but we don't really
  grasp the numbers … a lot of analysts use the numbers 40 trillion and 1.2 trillion." Its Insights lead with the
  Treasury's Debt to the Penny; the chart stays a share of GDP and its readout adds each quarter's dollars (GFDEBTN,
  the same total public debt). (0.9.0)
- **Federal interest payments is BEA's gross interest, as a share of GDP and in dollars.** Keren chose it over OMB's net
  interest because it is the $1.28 trillion analysts quote, and kept it knowing it reads Attention rather than Risk: at
  3.9% of GDP it is below the 5.0% of 1991, because today's debt pays a far lower average rate. The line is the series'
  own 1976–2025 average (3.5%), computed by CBO's 50-year rule since no convention sets one; the readout adds each
  quarter's dollars a year. CBO's FY2026 projection no longer drives the card. (0.9.0)
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
- **Weather's gap card is "The Balance", for two totals that should finish level over a cycle, not for its
  verdict.** It was "The Barometer" from V468 (Keren: two totals pulling apart say which way the weather is going)
  until 0.9.17, when Keren chose "The Balance": a barometer reads pressure, and the card compares price rise with
  real growth, so the instrument's name now belongs to Pressure. (V468, 0.9.17)
- **The policy-rate chart is titled "Federal Funds Rate", and its note says it plots the effective rate.**
  "Effective" was doing the note's job in the title. (V608)
- **A section of sentences about the figures above it is called Insights, on every reading's page.** The app had
  two names for one component and Keren chose one; Insights has been her word for it since V379. A category's
  combined reading is the exception since 1.5.0: it sits behind Indicators' More details on that category,
  untitled. (V453, V604, 1.5.0, 0.8.6)
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
  Keren then renamed 1967–69 the Go-Stop Cycle: "the go-go cycle should be Go-Stop cycle." Its story keeps "go-go"
  where it names the funds of the day. (0.6.17)
- **The health score ring's unfilled track is the container white (`--surface`), not the apricot box's own colour.**
  Keren: "the rest of the ring, you can't see it, so make it white or whatever would be visible on the apricot
  background." (0.6.5)
- **The health chart's card is called Cycle Statistics, in Title Case wherever it is named; its tab stays
  Analysis.** Keren: "I saw AI insights and [cycle analysis] being very closely related … instead of calling it
  [cycle analysis], we can call it [cycle statistics]. And the analysis tab can stay the same with the page title
  being analysis" (0.6.8); "cycle analysis should be with capital letters at the beginning" (0.6.6).
- **The Current Cycle page carries AI Insights above Cycle analysis, on the open cycle only, and the cycle's story
  is told inside the AI Insights page's first container.** Keren: "the story, the narrative, I think it belongs to the AI insights" (0.6.6). A
  closed cycle, which has no AI Insights, keeps its story above Cycle analysis.
  Keren: "it can become an AI insights container in the current cycle page … I don't want three pass scores. I want a
  sophisticated analysis, both of the narrative of that cycle and the economy and the market"; "Call it AI Insights".
  It is a door like the story (Keren: "three lines, maybe three dots and then a chevron") opening an AI Insights page
  with one container per chapter. Claude writes it (Keren chose "Claude, dated" over a live Generate button, which would change the artifact's grant,
  and over rule-built sentences, which the name would oversell): a lede, The economy, The market, dated
  "Written by Claude from the app's data of …", its figures read live and its words rewritten each release. Its
  Closest moments are computed: the last two years of today's eight market and economy readings matched against every
  two-year run since 1970 (analog matching on a path; the readings, equal weights and window are Claude's), one moment
  per episode, with its season and mood then, what is alike and what is apart. Resemblance only, never what followed.
  Matching one quarter alone put COVID-19's 2021 Q1 first; Keren: "COVID-19 is not the same … your analysis about 1999
  and 2018 is good … improve it", so the match reads the path that led there. (0.6.5)
- **The Buffett indicator is "Buffett indicator" wherever it is named: its card, its Search row, its meter row and
  its page's (i).** One reading, one name. The chart head keeps the heads' title case ("Buffett Indicator, Market
  Value ÷ GDP"). (V670)

### Words for verdicts and trends

- **The US 10-year Treasury's word is its tendency, read like a barometer: Steady, Rising or Falling, with "quickly"
  when the move is large.** Keren took the recommendation ("I want to take your recommendation option A", 0.9.17): a
  barometer is read by which way it moves, not where it stands. The move is the quarterly average's change over four
  quarters (`horizonRead.dLong`, the figure Treasury spreads already reads). The words are a shipping forecast's;
  their cut-offs are hectopascals and do not carry over, so Steady is within the lower quartile of every four-quarter
  move in the record and "quickly" past the upper one (Claude's call from the app's own data). The word carries no
  state colour and says nothing about what comes next. The (i) adds sea level: a yield means something only against
  the neutral rate. (0.9.17)

- **On the Elements page the Federal budget is a signed number: a deficit is minus, a surplus plain, and the word
  under it says "Large deficit".** Keren: "Instead of saying deficits, just use minus", so the word is not said twice
  and the row matches the others (0.9.15). A surplus reads "Surplus" (Keren: "If it has extra budget, meaning it's
  earning more than it's spending, then I would call it a surplus"); a deficit within the 3.8% line reads "50-year average".

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
  fairly valued" (CAPE's family is now cheap to rich, 0.8.5); the same pattern gave Pulse a fast/slow scale. (V290, V298)
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
  context line introducing a table that introduces itself). Keren: "I
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

- **The tab bar is Cycle · Analysis · Herstory · Portfolio.** Search replaced the Content tab (V657), Keren
  swapped Analysis and Search (V665), and Cycle analysis took Search's place: "I'm basically seeing the same thing
  in different views … the search moved to the health chart page." Then Keren renamed both: "Instead of health
  chart, call the tab analysis. And instead of analysis, call the tab history. Or better yet, herstory." The Health
  chart keeps its name where it opens from a cycle's story. (0.6.1)
- **Herstory's tab icon is the history clock (an arrow turning back round a clock face), and the page has no
  "Cycle history" heading: each cycle is its own white container, `--gap` apart.** Keren: "in her story page, I
  want the icon to be the icon that you have next to cycle history and drop the cycle history"; "make different
  containers for different cycles with the agreed upon margin". (0.6.3)
- **Analysis's More details opens on one line, the way a cycle-tracking app says it ("Averages are based on her 18
  closed cycles since 1928"), then the method as five short bold-led bullets, scannable in about 15 seconds.** Keren:
  "when I open more details in the analysis page, it's so long … Averages are based on your last six cycles";
  "Don't erase everything … Just summarize it in a way that the human can scan it in, like, say, 15 seconds." The
  count and first year are read from the cycle record; the full method is in docs/ARCHITECTURE.md. (0.6.8)
- **Analysis's tab icon and Cycle Statistics's mark are the rising graph (a line climbing in a frame), the icon
  Herstory wore before 0.6.3.** Keren: "make the analysis icon the current her story icon, meaning a graph that
  goes up. This goes the same for the health chart" (0.6.3); a stethoscope, a heart with a pulse and a bar chart were
  tried in 0.6.8, and she kept the graph: "I actually liked the chart icon we had". (0.6.3, 0.6.8)
- **The health score sits on a grey a step lighter than the dial's track (Keren: "a bit lighter"), and its line says how the score itself reads
  against the scores of the closed cycles: "Attention against 18 closed cycles".** The score is judged like a result,
  low side bad: Normal from the closed cycles' lower quartile up, Attention below it, Risk past the lower fence.
  Keren: "When you give a health score and you say against 18 closed cycles, what does that mean? Is it high? Is it
  low? Are we at risk?" and "the apricot background is too much apricot … Make it bright gray, like the gray we have
  in the cycle dial" (0.6.6, overturning 0.6.4's apricot, chosen then over this grey; a stronger apricot before). Keren asked for "19 cycles" in place of "19 readings"; 19 was the count
  of readings judged, so the line counts the closed cycles instead, which is true on every cycle. (0.6.3)
- **Cycle analysis picks its cycle from the filter in its search box, under a Cycle sub-menu, not from a
  picker bar on the page; the filter button names a past cycle and a tier when either is set.** Keren: "add the
  current cycle selection bar in some way to the filter button. Maybe a sub menu." (0.6.3)
- **Cycle analysis's search box reads "Search indicators", its placeholder in a light neutral grey
  (`--placeholder`).** Keren: "instead of search readings, say search indicators and make it a light gray." (0.6.3)
- **On every screen the tab bar floats: a liquid-glass pill inset 16px from the sides (at most 480px wide,
  centred) and close to the bottom edge, 12px inside the safe area (never under 10px), the surface at 58% behind an 18px blur with a light edge and a soft lift; the
  open tab sits in a pale pill (`--glass-on`), icon and label in the accent ink.** Keren, with a cycle app's screen:
  "make the app bottom menu like the attached reference, meaning floating … when I scroll, it's liquid glass kind
  of effect that I can see the background blurred." The page keeps bottom padding so nothing ends hidden behind
  the bar. The glass is the `--glass*` tokens, light and dark. This overturns V550's flush, full-width bar. Keren,
  on her iPhone: "the bottom menu is not close enough to the bottom of the screen" (10px plus the 34px inset left a
  44px gap; now 22px). Keren, on the design system: "It should be the same design, both for desktop and mobile" (0.6.15 retired the
  wide-screen segmented track; the 480px cap is Claude's call). (0.6.9, 0.6.11) At the end of a page the last container stops one top gap (`--gap-top`, 20px)
  above the bar, whatever the safe area: the padding is the bar's height plus its lift (`--tabbar-lift`) plus that
  gap. Keren, on her iPhone: "there is a space in each page at the bottom that is too much … live within the range of
  our spacing" (it was 54px with the 34px inset). (0.6.13)
- **The page's top bar no longer sticks: the open tab's title sits at the top of the page and scrolls away with
  it, while the round menu button (and the back arrow on a deeper page) float in the top corners as liquid-glass
  circles, aligned to the page's edges on wide screens; the "Gyneconomy" title stays in the menu. The title's
  row is the buttons' 44px, so the title centres on the menu button.** Keren chose
  this from the liquid-glass previews, after her reference: "Also option B, floating menu bar. So instead of A."
  Keren, on her iPhone: "the page title is not aligned to the center of the menu button" (0.6.11).
  It overturns the sticky bar of Sep 19, 2026 (made with Clue's screens). The menu's own screens keep their
  sticky bar. (0.6.9)
- **A page with both a back button and the menu (every inner page: Elements, each reading, a past cycle) has a
  sticky top bar with a hairline beneath it, its back and menu buttons drop their glass circles to the plum mark
  alone, and the tab bar is hidden; going back to a tab home brings the tab bar and the floating circles back.** Keren, on the Elements page: "I want the top menu to
  have a dividing line and remove the circles around the menu and the back button because in the elements page,
  we already have chevrons with a circle around them. So I want some kind of hierarchy and borders between
  different selection bars." Then: "the bottom menu needs to disappear … because the bottom menu is the main
  navigation. And when I go to inner pages, then I'm in my own world … if I go back, I can see the main navigation
  again." The rule keys on the back button being shown, so no page opts in. (0.9.23)
- **The top bar sets the page name in Cormorant, in the plum ink, and its buttons are the plum mark alone; the
  menu's screens keep a hairline under their bar.** Keren: "the title of the page should be in feminine
  letters"; "all buttons in the top bar should not have a round border around it"; "it should be only purple
  stroke"; the reference she chose sets its page title in plum (0.6.2). The page's own menu and back buttons
  are the exception since 0.6.9: they float on glass, as above. (V272, V275, 0.6.2, 0.6.9)
- **Detail sheets (the (i) notes, the legend, a quarter, More details) are frosted glass: the sheet at 72% of the
  surface behind a 24px blur, with the glass edge and lift, over a lighter veil that blurs the page by 10px.**
  Keren picked it from the liquid-glass previews: "and the details sheet, option C". (0.6.9)
- **The top bar's titles are Keren's names for the tabs: "Current Cycle", "Analysis", "Herstory", "Portfolio".**
  (undated, 0.6.1)
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
- **Every section of About Gyneconomy is one container with its title inside, as the Cycle Model is; The Idea
  shows its first paragraph and a View more for the rest; the Season Model's rows carry no header row.** Keren: "I
  want the idea title to be like the cycle model … it's all part of one container"; "the first paragraph to be
  visible and then view more"; the "Season" header "is unnecessary". Its (i) opens on one plain line and a
  two-by-three table (growth against potential by cold, in range and hot), so the model can be told word for word.
  (0.8.1, Oct 5, 2026)
- **The Cycle Model speaks in bull and bear years, and says how many cycles the record holds and how long they
  run on average, computed from the app's own closed cycles.** Keren: "A cycle runs from its first bull year to the
  bear year that ends it … another sentence saying the average market cycle is …, so a user would have some kind
  of notion of how we built this entire app." (0.8.1, Oct 5, 2026)
- **The Framework's container holds only its table, full width; the paragraph on the seven signs is its (i)'s one
  line, with the leading, coincident and lagging examples as bullets.** Keren: "this paragraph should be in the
  info … check that we're not repeating ourselves." The Season Model's (i) uses the precise terms, concisely:
  growth gap, sensitivity, price level, direction (transition seasons only), and its table shows all 18
  combinations. The growth gap is growth against potential growth (the Investment Clock's growth above or below
  trend), not the output gap, which measures the level: tested on 1953–2026, the output gap put 31 of 39 recession
  quarters in Autumn or Winter against the growth gap's 38 (season-model/output-gap-test.md), so the app does not
  carry the output gap. Keren: "Let's call it growth gap." The (i) credits the Investment Clock (Merrill Lynch, 2004)
  for the growth question; Keren: "for credibility's sake, we should say that this follows the investment clock
  methodology." It closes on its record against NBER recessions since 1953, by season: the recession quarters
  that fell in Autumn or Winter against those seasons' share of all quarters, computed by `recessionRecord` from the
  app's own seasons. Contractions without a recession are not counted against it (Keren: "not every contraction is
  a recession"); Keren: "it adds a lot of credibility to the model … it's important to specify it." Keren: "more sophisticated words … but just try to be a little bit more concise." (0.8.1, Oct 5, 2026)
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

- **Every reading drives from one source and behaves the same; only its data differs.** Each page is built by the
  one reading component from its roster row: the same figure and word, (i) note, history card and Insights, with
  the same "The Latest Reading" and "Against the Record" cards wherever a reading is read against its own record.
  Keren: "make sure the readings all drive from the same source because basically all categories should have the
  same behavior even though they present different data." (0.9.20)
- **A reading is a row or card that opens a page; it never unfolds where it stands, and a popup is for a note,
  never for a page's content.** Keren asked for inner pages "aligning to our inner pages format"; a long
  record "is not a footnote you glance at and dismiss". (V269, V303)
- **One indicator gets one card and one page; a reading with a card has no second row.** The Buffett
  indicator, Federal debt, Interest payments and Federal budget each have their own; the two Treasury spreads
  (10Y − 3M, 10Y − 2Y) stay one page, and the US 10-year
  Treasury stays one card with its maturity picker. Keren: "no need to split 10Y − 2Y & 10Y − 3M". (V254, V658)
- **The Interest Rates Environment head is a door to the Federal funds rate page, with a chevron, wherever it stands:**
  Current Cycle, every past cycle and Analysis. Keren: "add a chevron to the interest rates environment container, both
  in the current cycle and in analysis, and let it land in the federal funds rate page." (0.9.1)
- **Cycle analysis is where every reading is found: a search box at the top, above the cycle picker, with the
  filter inside it; each reading opens its page and each category name filters Indicators to that category.** Keren: "if I go to
  the health chart page and I click on, let's say, temperature, I would get to the temperature page"; "the filter
  should be inside the search … if I click filter, I see what I can filter by, but it doesn't take up space from the
  screen." The filter offers All, Risk, Attention and Normal with their counts; the chevron beside a category's count
  still folds it. The box matches a reading's name, its series, its group or its category. There is no timing filter:
  "the division of Structural, leading, coincident, lagging … It's not something that I would filter by", so timing
  lives only in each reading's (i). Search, its grouped rows and its icons are gone with it. (V657, V660, V692, 0.6.1, 0.8.6)
  **The search box lives only in Indicators; Analysis has none, and the Elements head is its way in.** Keren: "in the
  analysis page, I don't need the search indicators because I already have this in the insight page." (0.8.8)
  **Analysis's container of categories and the Indicators page are both called Elements, and the container's head has no mark;**
  Keren: "maybe we should call it elements", then chose Elements over Vitals; "we don't need an icon next to the
  elements title" (0.9.11). They were Vitals from 0.9.5 to 0.9.10. Insights stays the name of the commentary box on
  every reading page. Older entries here that say Indicators or Vitals mean this page.
- **Each year in Year by Year opens Indicators on that year, and Indicators moves between cycles, years and quarters
  with a stepper under its title: the period large, its place in its cycle under it, arrows either side.** Keren: "what
  I would want is to be referred to the indicators page under that date … so that we would have the ability to
  navigate between dates and cycles inside the indicators page"; of the stepper, "I love the design … it's really
  elegant." **Every filter lives in one filter, a sheet from the bottom, like an advanced search: Period, Category and
  Result** (All, Risk, Attention, Normal; "Result" after Keren's "the test result"), with Reset and a "Show N readings"
  button that closes it. Keren: "they should all live under the same filter. And if I click on the
  filter, then it would be like a pop-up that pops from the bottom." The filter button sits in the search box and
  the stepper's period opens the same sheet; the category bar left the page. A year is each reading's average over that calendar year (this year: today's figure), judged
  against the range the open cycle uses, so it adds no band. **The dial's centre does the same for its quarter**
  (Keren: "the same behavior to go to the indicators page under that period of time"). **The Period is one season
  calendar** (Keren: "it should be in a calendar view"; she chose it over a year grid): each cycle a band, each year a
  row, each quarter a tile washed in its season; tapping the band, the year or the tile picks that period, so there is
  no Cycles/Years/Quarters switch. A reading kept only by the year shows its year's figure in a quarter and says which year. The
  quarter pop-up of category cards is gone everywhere, with its card design and the season prose it held (What
  Usually Comes Next, What to Watch, From the Book). (0.8.9)
- **The category pages and their group pages are gone, with every design that came before Indicators; Indicators
  holds every reading, by category and subcategory, and each category's insights behind its More details.** Keren:
  "All the previous designs we made, we can throw them out." A closed cycle's figures are Cycle Statistics'. This
  replaced the group card (V688), the category page's ground (0.6.2), its cards and More details (1.5.0, 0.6.1), the
  equal-height cards (V688) and the past cycle's category cards (V660, V665). (0.8.6, Oct 6, 2026)
- **Debt-to-income ratio is the name of the Fed's household debt service ratio (TDSP), and Delinquencies are Default risk
  under Desire › Risk (0.9.22).** Keren: "Let's call debt payments debt to income ratio. It makes more sense",
  "delinquencies are default risk and should be put under risk subcategory", and "Call delinquencies default risk." The series is unchanged: required
  payments as a share of disposable (after-tax) income, the ratio a lender checks, across every household; the (i) says
  it is measured against take-home pay. Since 0.9.22 the Backfill fetches it from FRED, so the record stays current.
- **Stress has two subcategories, Households (Saving rate, Debt-to-income ratio, Margin debt) and Government
  (Federal debt, Federal interest payments, Federal budget), since 0.9.21; the name Economic power is retired.** Keren:
  "it should be divided to subcategories of household and government … because it's different things. And margin debt
  doesn't belong to credit. So I would say it belongs to households. And subcategory credit itself should go to
  circulation" (0.9.21). Delinquencies (all bank loans) sits with Households, Claude's call. Before: Keren: "the terminology is stress because
  debts are stress" (V688, Stress); "everything related to debt should be in the stress category", then "the title in
  circulation should be debt (stress). And margin debt should be under debt" (0.9.0, Debt). Margin debt moved to Credit
  in 0.9.4 (below).
- **No season says what comes next or what to watch for the turn.** Both read as forecasts; Keren: "drop the forecast"
  (1.5.0). They went with the season pop-up, and the book quotes it never had with them; Keren: "don't need it, we have
  it in About" (0.8.9).
- **The source keeps the taxonomy's order (Weather, Circulation, Mood, Energy); a display that wants Keren's
  order (Weather, Mood, Circulation, Energy) places the four without reordering the source.** The roster holds
  the source order and the category sheets and past cycles read it; Cycle analysis and the Diagnosis place the four by
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
  V377, V657, undated, Sep 20, 2026; it stopped filtering anything in 0.6.1)
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
  box; Keren: "everything that is above the selection bar is redundant … there should only be one insight." The
  suite fails a page with a second Insights box, and the card head is gone from the code. (V661, V673, 0.8.10)
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
- **The seasons wear the growth regime's colours: the expansion seasons warm (Spring yellow, Summer red-orange),
  the contraction seasons cool (Winter blue, Autumn light blue).** Keren: "spring is a hotter season than
  autumn"; "it's pretty much a convention to put warm colours in warm seasons and cold colours in cold seasons".
  Read off the Season Model's table, the warm row is expansion and the cool row contraction, so the blue half of
  the ring is where recessions fall, and Spring's yellow is the gold Growth already wears in expansion. Autumn
  stays light blue against the calendar's orange: in the model it is the contraction season. Summer keeps its
  red-orange; a true red would read as Risk or a bear year. Replaces the price-temperature colours of V180.
  (V180, 0.8.7)
- **The dial's legend states each range in plain mathematical signs: Winter CPI < 1%, Spring CPI ≤ 3%, Summer
  CPI > 3%, Autumn CPI ≥ 1%; a bull year's return ≥ 0%, a bear year's < 0%.** The signs are the model's own tests
  (`readSeason`, `TEMP_BAND_LO`/`TEMP_BAND_HI`). Keren: "all ranges should use some kind of mathematical signaling,
  basic mathematical signaling." (0.6.6)
- **Under the seasons the legend explains only the 1–3% range (a point either side of the Fed's 2% target, part
  of the Season Model's structure), and it carries no how-to paragraph.** Keren: "All I need is the one to three range
  explained" and "The whole point of good UI is that you don't need to explain it." (0.6.6)
- **The legend's last section is "The market cycle": a typical market cycle, a bull market and the bear market that
  ends it, has run about 5 to 6½ years across the long record (First Trust about 5.2, Fisher about 6.4); a typical
  length, not a forecast.** It replaced "The ring's span" and its notes on scaling. Keren: "call it the market
  cycle … use numbers … It is a typical length, not a forecast. And that's it." (0.6.6)
- **The legend opens on its sections with no introduction: "Seasons (Q)", drawn by quarter, and "S&P 500 (YoY)", each
  year's calendar return.** Keren: "YOY for the S&P 500." Keren: "a paragraph that is unneeded. What we need basically is seasons by quarters and S&P 500 by years …
  Like seasons, parentheses Q, and S&P 500, parentheses Y." (0.6.6)
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
- **The whole centre is one button. Today it opens Indicators on Weather; a tapped quarter, or a closed cycle's
  close, opens Indicators on that quarter (0.8.9; it opened the quarter's sheet from V693).** Tapping a moon selects it and moves the year badge there, so the centre can be tapped next;
  tapping the centre never resets the dial. Keren: "when I go to each quarter and I click on whatever is in the
  middle of the cycle, how can I see all the data for the cycle in that specific quarter?" (V693)
- **A quarter opens Indicators on that quarter; the quarter's sheet (its cards, then the season's prose) is
  gone (0.8.9).** It had replaced V165/V505's prose popup with "only the basics" (V693); Indicators now holds every
  reading at the quarter. (V165, V505, V693, 0.8.9)
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
- **The cycle card's title is the cycle's name (the AI Cycle today, the cycle shown on a Herstory page), with an (i)
  that opens the one legend: the seasons' colours and the market band's colours; no season line or note sits beside
  the wheel.** The centre already says the season. It was "Gyneconomy" until Keren: "instead of Gyneconomy in the top
  left of the cycle dial, make it the cycle name." (V176, Sep 19, 2026; 0.6.6)

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
- **Each cycle's strips in Herstory are drawn against the typical cycle length: a shorter cycle shows
  grey for what it lacks, a cycle at or past it fills the row, and inside a row the seasons keep their
  true proportions.** Keren: "The dots can represent the average that is left, not compared to the longest
  cycle." (V517) What is not yet run, in Herstory and in Year by year, follows the dial: a grey line on the
  season strip, like the dial's track, and grey dots on the bull/bear strip, like the dots inside the ring.
  Keren: "make the season a gray line and the bull bear market with gray dots, like in the cycle dial. So it
  would be the same logic." (0.6.6)
- **On the open cycle, Year by year stops at the year in progress: its quarters already read are drawn, and each
  quarter left is one grey dot under the grey line, spaced a quarter apart like the dial's dots.** No rows for
  years still to come. Keren: "I didn't mean for you to put 2028 and 2027. It's just a waste of room … every dot
  is a quarter, so we have two dots left." (0.6.6) **The year in progress's grey dots are spaced like Herstory's, one
  quarter of the open cycle's Herstory row apart, so they fill what is left of the year; they are no longer one dot
  per quarter.** Keren: "I want the year by year container in the current season 2026 to have gray dots in the
  same spacing as the history or herstory page, just for aesthetics." (0.6.18) **The first dot sits one dot-gap
  from the market bar, the same gap as between the dots,** not right-aligned with a wider gap after the bar. Keren:
  "there's a gap between the green bar and the gray dots that I don't like. Like it needs to be more even." (0.8.8)
- **The health score's title is set in Cormorant Garamond 500, the top bar's serif.** Keren: "Make the health score
  in the same font as the top bar, the feminine font." (0.6.6)
- **The AI Insights page opens on one container titled by the cycle's name ("AI Cycle"), the cycle's story merged
  into its summary; there is no separate story card and no door to Mood on the page.** Keren: "the text that belongs
  to AI Cycle can be merged with the TLDR text. And we can remove the AI Cycle container at all" and "instead of
  TLDR, just write AI cycle" (0.6.13, after "TL;DR" in 0.6.6 and "In short" before). Its text never names a Fed
  direction, which goes stale with the next meeting: it gives the rate as it stands (the 0.6.12 review found "The Fed
  has eased" after the Sep 16 hike). The cycle chapter is gone: "the cycle container is redundant because we still
  haven't figured out how to analyze the emotional intelligence of each cycle"; its opening, "Born out of the 2022
  correction", now opens the summary, as Keren liked it (0.6.13).
- **After The market, a "Risk factors" container lists every result Cycle Statistics reads as Risk today,
  each as a bar placing its latest value against its own record.** Keren: "I love the way you put the Buffett
  indicator, interest payments, and all of that in bars. But I think it belongs in a new container named risk factors,
  where we would see all the risk factors we detected in the analysis page." It replaces the summary's three highest
  and three lowest readings, and reads the Analysis judgement, never its own. (0.6.13 Keren then put it after The market: "Put risk factors under the market container." (0.6.13)

### Analysis

- **Each cycle in Analysis shows its growth and its prices, totalled the same way over the same closed years,
  side by side on one line.** Keren: "this is so interesting — put it in the analysis tab per cycle". (V276)
- **Each cycle carries her chart, read like a blood test: every reading averaged over the cycle and sorted into
  Normal (apricot, the middle half of her closed cycles), Attention (yellow, outside it but within Tukey's fences) and
  Risk (red, past a fence), with a health score, the share that is Normal.** Keren tried Risk and Outlier for the two, then kept these: "let's keep the current categories. Normal, attention, and risk" (0.6.0). A Risk result reads "Outlier, above range" (or below), since past a fence is the standard rule for an outlier. Every result outside its normal range is flagged, as a lab flags any result outside its reference range: under its name it reads In range, Above range, Below range, or Outlier, above range (or below), in grey like the range ("I would not color it"); a small triangle after the figure, in the tier's colour, points up when it is above its range, down when below, and reads "=" when in range, as in Keren's reference (0.6.0, bringing back 0.5.2's up and down as marks beside the number, not arrows in it); there are no H/L marks. Keren: "If it's above or below the norm, then it should be flagged", when Shiller CAPE at 40.6 against 13.9 – 27.2 read only as a yellow bar (0.6.0, undoing 0.5.3's "only numbers"; the arrows of 0.5.2 stay gone). Each category is a drawer with a plain white heading over beige results (Keren: "I want the categories to be white and the subcategories to be in … beige"), its heading in the reading type, small enough that its count sits beside it (Keren: "I really don't like the coloring of the categories … it should be much smaller so it fits the number right next to it"): its mark (Weather a sun behind a cloud, Mood three waves, Circulation a drop, Energy a bolt, Cycle a calendar; the readings carry no marks here), its name and count, "Mood (6)"; every drawer starts open and the chevron on its right folds it. The heading stands half as tall again as a result row's heading did (Keren: "make the category containers like 150% higher"), and it carries no in-range count (Keren: "I don't need the two out of six in range", 0.6.1). The search box is as round as the cycle picker (Keren: "round corners on the search and like the current cycle", 0.6.1). Keren: "weather has a weather icon, mood has like a wave icon … circulation has a blood icon. Energy has a lightning bolt icon", "four slash six in range", and "the default is everything is open. But if I click on it, I can close something"; Keren: the reference's test results design "is more suitable to the health chart than the search page" (0.6.0). Each range reads "−3.2% – −0.9%": a dash, as Keren asked, with a space either side so it never touches a minus sign (0.5.2, 0.5.3), with no cycle count beside it (Keren: "remove it"; the (i) says how many cycles a range rests on), and the in-range count replaced the heading's "Normal range" (0.6.0). A closed cycle shows each reading's average, one number, with no low or high (Keren: "very confusing"); the cycle in progress shows the latest reading, judged against the middle half of every reading in her closed cycles, since a single reading swings wider than an average (Keren, 0.5.3). That latest reading is the figure on its card, printed as the card prints it (one figure, one number), and it repaints with the card when a live reading lands; the S&P 500's open result reads "so far", and bull years and bleed count only calendar years that have closed; the (i) names each reading whose range rests on fewer than all her closed cycles (0.6.16, from the 5 October review that Keren asked to fix). Tapping a cycle in Analysis opens it.
  Keren: "it's exactly like blood tests"; "if I press a cycle, then I'll get the blood test results of that specific
  cycle." The ranges are her own record's, and each says how many closed cycles it rests on. (0.2.0)
- **A Cycle analysis result is judged by whether its side is good for that reading, not only by its side.** Keren: "if
  unemployment rate goes down, it's a good thing. So the bottom facing triangle should be green … We need to judge if
  it's good or bad, not only by direction, but also by parameter." A result outside its range on its good side is
  Normal (apricot) and counts toward the health score; on the other side it is Attention or Risk as before. Under
  each result its tier is named, Normal, Attention or Risk, the triangle carrying the side. Keren: "I would want the
  same terminology being used under each category … if it's in range, it's normal. If it's an outlier, then we're at
  risk. And if it's above or below, but not an outlier, then it would be attention." (0.6.6, replacing 0.6.0's In
  range, Above range, Below range and Outlier.) Each reading's good side is declared once, as `good` in the
  roster. Claude's calls, by economic convention, for Keren to overturn: higher is good for Growth, the S&P 500,
  Consumer demand, the Equity risk premium (stocks cheap against bonds), Confidence, the Federal budget (a smaller
  deficit), Productivity growth and Bull years; lower is good for Shiller CAPE and the Buffett indicator (Shiller's and
  Buffett's own reading of a rich market), Volatility (the VIX is the market's fear gauge), Federal debt, Interest
  payments, Households (debt service), the Unemployment rate and Period flow (the Bleed until 0.8.3). No side is good on its own for Temperature
  (the Fed aims at 2%, and deflation is a strain too), Interest rates, Pressure, Pulse, Volume or a cycle's Length, so
  those are flagged either way. (0.6.1)
- **No generations: every cycle result is judged against all her closed cycles.** Claude proposed judging Length,
  Bull years and Bleed within an era (before and after 1982, split by length), as trackers judge a woman by age; it
  was built as "Generation 1 and 2" and then dropped. Keren: "I think we are overcomplicating things with
  generation. I think the generational question is more about nations", on Ray Dalio's scale of empires rising and
  declining over some 250 years, which the app does not cover. Don't re-propose. (0.8.3, Oct 6, 2026)
- **The cycle results' drawer is titled Regularity, after FIGO's two measures of a regular cycle, length and
  variation; it holds Length, Variation, Bull years and Period flow.** Keren: "I would think that the title would be
  regularity and length would be the parameters that we're looking in terms of regular cycles." (0.8.3, Oct 6, 2026)
- **Cycle variation is the standard deviation of her closed cycles' lengths (±2¾ years), a figure, not a second
  verdict; a cycle's distance from the average sits beside it, judged by the same Tukey fences as its length.** Keren
  chose the deviation over FIGO's spread (0.8.12): across all 18 cycles the spread is 10 years, while 5¼ ± 2¾ matches
  the four to eight years analysts quote. Twice the deviation was tried as variation's own cut-off and dropped the same
  day: it judged length a second way and disagreed with Tukey on the Buyout and Big Tech cycles. Keren: "Are we sure we
  want to use different models for length and variation? What is the benefit of this?" One rule, Tukey's, also suits
  lopsided lengths better than a bell-curve rule. The Variation result is gone; until 0.8.12 it was FIGO's spread of
  the cycles before each one.
- **Cycle Statistics' (i) names FIGO only as the source of Regularity's measure, one line and one link; it does not
  explain FIGO or compare the app with cycle-tracking apps.** Keren: "I think we overcomplicated things with the FIGO
  thing." The ±0.47 band stays "Sensitivity" (Keren: "I think sensitivity is a better word", after "margin for
  noise" was tried). (0.8.3, Oct 6, 2026)
- **The Analysis tab reads in Clue's order, one container after another at the app's one gap: the search box, the
  Cycle Statistics (the Health Score, white, first inside it), Interest Rates Environment, then Insights.** Keren, from Clue's analysis screen:
  "cycle statistics, period flow … insights divided according to categories", the health score and search "stay in
  the main analysis page", the health score "should have a white background", and "the spacing is always equal to the
  spacing that we determined in the app". Bleed is called Period flow everywhere ("Bleed should be called period
  flow"). (0.8.3, Oct 6, 2026)
- **Cycle Statistics holds three cards, Cycle length, Cycle variation and Period flow, each a ring and a figure in
  years; the first two carry a dividing line, aligned across both, and open a page explaining their figure.** Each
  card is the average of every closed cycle since 1928, and a line under the title says so: "Averages are based on 18
  closed market cycles since 1928." Keren (0.8.12), after trying the last six as Clue does: "the majority of analysts
  and economists would say that the average market cycle runs between four and eight years. So I don't want to be the
  outlier … I guess we should base all our averages on … 18 market cycles." The line speaks of market cycles, not
  "her": "users would not understand because they need the book as a guide." Cycle length's page draws every cycle as a bar, Typical or Atypical. Cycle variation is the
  standard deviation (above). Period
  flow's ring is red and has no page. Keren: "they have like a dividing line … I want the dividing line to align
  between cycle length and cycle variation … to look like basically the same component." (0.8.3, Oct 6, 2026)
- **Beside each average, Cycle Statistics shows the cycle on screen, the open one or a past one: its length (3¾ yrs)
  and how far it ran from the average (−1½ yrs), each with a green or red tick for Typical or Atypical.** Each card
  opens a page saying so in a line or two, with every cycle as a bar and the one shown in bold. "More info" is gone.
  The Health Score counts the cycle's length once, Normal when Typical, Risk when not; an open cycle's length is
  Typical until it passes the fence. Keren: "I think we need to see the current cycle statistics", and "a
  health score should incorporate if the cycle length is typical and cycle variation is typical." (0.8.12, Oct 7, 2026)
- **The Health Score is the first card inside Cycle Statistics, built like the others (ring on the left, the same
  height and text), white with a grey border; its side says its tier and opens a page that says what it is judged
  against.** Keren: "put the health score inside cycle statistics, but keep it white with a gray border", "other
  than color … it needs to be the same, the same height, same text", and "against 18 closed cycles … show it in more
  details … because I don't need to see it every time I look at the health score." (0.8.12, Oct 7, 2026) The cycle pages
  show the same tile, ring, score and tier, inside their AI Insights and Cycle Statistics cards; it opens nothing of its
  own there, since the card it sits in is the door. Keren: "Make sure in the current cycle page that the health score
  looks like how it is looked in the analysis page." (0.9.4)
- **The interest-rate container is titled Interest Rates Environment, on the cycle pages and on Analysis.** Keren:
  "Instead of interest environment, write interest rates environment because most people recognize interest
  rates." (0.8.12, Oct 7, 2026)
- **Cycle Statistics says Typical or Atypical; Normal stays the word for readings and the Health Score; every page
  adds that the verdict is relative to the market's own past cycles.** Typical is within Tukey's fences of her closed cycles,
  the app's outlier rule; a page says how in a line or two, because the model is new. Keren (0.8.3): "typical is the
  right word … because normal is something that we use for parameters", and "we should explain how it's calculated
  … in a line or two." On Oct 7, 2026 she tried Normal/Abnormal and went back within the hour: "I don't like the
  words normal and abnormal. Use typical and atypical." The relative line is hers: "briefly explain that normal is
  subjective or relative to her own past cycles." (0.8.12, Oct 7, 2026)
- **Cycle Statistics' verdicts carry the tier colours: green (`--good`) for Typical or Normal, yellow (`--gold`) for
  Attention, red (`--critical`) for Atypical or Risk, on the tick and the ring; the length bars follow.** Period flow's
  ring stays red. Keren: "if a stat is typical, meaning normal, then it should be green. Attention is yellow and risk
  is red." (0.8.12, Oct 7, 2026)
- **Insights lists only the categories; each opens one Indicators page on that category, where every reading is
  searched, filtered by tier and cycle, and switched between categories by a bar (All, Regularity, Weather, Mood,
  Circulation, Energy).** The search box on Analysis opens the same page on All. Keren: "put only the categories
  titles under insights … a universal page for the indicators to be searched, to be filtered … also filtered by
  category", and "indicator page needs some work, but for now it would be fine." (0.8.3, Oct 6, 2026)
- **On one category, Indicators groups its readings by subcategory: each subcategory is a quiet heading (the
  subcategory's mark and its name, small and grey) over its results, in place of the category's heading, which the
  bar already names.** All keeps one heading per category. Every heading sits in one container, the standard gap
  (`--gap`) below the bar and above More details; each heading is white over its apricot-tinted results with an
  apricot line between, its mark in apricot and its count in light grey beside its fold chevron. Keren: "the
  current design of the results without spacing is good … It's all one container", "the gap between the containers
  and the more details is not equal", and "it needs to be economic season". Keren: "titles … with white background and the indicators have an apricot background … it reminds
  me of financial newsletters." The apricot is on the mark and the line, not the title's words, which stay grey to
  stay readable. Keren: "the category titles are too big. They need to blend in with the data that they present." Weather: Economic Season (Temperature, Growth gap, Federal funds rate, 0.9.16) and Market (S&P 500);
  Weather also holds Activity (Unemployment rate, Productivity growth, Nonfarm payrolls); Mood: Valuations and Sentiment (Confidence, Fear); Desire: Demand (Discretionary spending, Retail sales) and Risk (Equity risk premium, Concentration risk, Default risk); Circulation: Pressure (US 10-year
  Treasury, Treasury spreads), Money (Pulse, Volume, Consumer credit; the Credit subcategory went in 0.9.22); Stress: Households (Saving rate, Debt-to-income ratio, Margin debt) and Government (Federal debt, Federal interest payments, Federal budget). There is no Activity category (Keren, 0.9.0). The
  names beyond Valuations, Desire, Debt and Keren's Season and Market are Claude's draft. Keren: "I have the menu
  bar showing me weather, and then I'm seeing weather again … use this real estate to basically divide and
  subcategorize each indicator", and "temperature and growth is the season, S&P is the market". Keren renamed
  Circulation's first subcategory Pressure and the reading that was Pressure US 10-year Treasury: "the title needs
  to be pressure. And instead of pressure, we should have the US 10 year treasury." (0.8.5, 0.8.6, Oct 6, 2026)
- **An open year's figure carries no "so far" on Indicators: every figure there is so far. (0.8.5, Oct 6, 2026)
- **A category opens in Indicators, never on its old page of chart cards.** Its heading on Indicators and the
  dial's season both open Indicators on that category, and its More details is that category's insights. Each
  result on the open cycle leads with its card's verdict word, then its tier ("Rich · Risk", "Calm · Normal"):
  Keren, "I want to see the result first and then what it means." Regularity is not an indicator: it belongs to Cycle Statistics on Analysis. The old category
  pages are still built, unreached, as the home of the reading cards the words, the quarter sheet and the reading
  pages draw on, until a release retires them. Keren: "we should get rid of the old design … but we should keep the
  conclusions … these are words that can integrate well next to risk, attention, normal", and "in terms of
  regularity, we don't need it. We have it in the analysis page." (0.8.5, Oct 6, 2026)
- **Insights is one container built like Cycle Statistics: a purple title with its mark (the chart), then one plain
  row per category (no grey tile since 0.8.6) with its mark, its name, and its count of indicators in light grey
  beside the chevron, a thin grey line above every row, the first included, and the same space either side of each
  line. In every tile with a chevron, the chevron sits as far from the right edge as the mark or ring does from the
  left.** Keren: "in the insights container on the analysis tab, add a gray line between insights and weather and
  make the spacing even so it would look tidier" (0.8.8). Keren:
  "I don't need to see indicators four times … maybe next to the chevron in light gray", and "there should be the
  same gap between the chevron and the right edge … like the icon and the left edge." Keren: "make the insight
  section designed like cycle statistics, meaning you have a dark purple headline with an icon next to it inside a
  container and everything sits below it … I want a consistent design system." (0.8.5, 0.8.6, 0.8.8, Oct 6, 2026)
- **Each cycle's Cycle analysis is a row with a chevron under the cycle story that previews the visit note and the
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
  Winter–Deflation, Spring–Deflation, Spring–Reflation.** Only Winter (Groundation) carries a fertility name
  from the book on screen, and none is invented for the others until the manuscript supplies one. Summer's
  (Ovulation) stays in the book: Keren, "I don't think we should say ovulation in this app" (0.6.12). (undated,
  Sep 16–19, 2026; 0.8.6)
- **The Season Model table runs in the cycle's order: Spring·deflation, Spring·reflation, Summer·inflation,
  Autumn·disinflation, Autumn·stagflation, Winter·deflation.** Keren: "I think the order of the seasons should be
  spring deflation, spring reflation, summer inflation, autumn disinflation, autumn stagflation, winter deflation."
  Replaces the colour order of V193 and 0.8.7 (the blues together). Its price bars wear the season's pastel
  (`--season-wash`, the shade of the info page's season table) with no gradient. Keren: "I like the pastel colours
  that you used in the info … I don't think we need to see the transition". (V193, V668, 0.8.7, 0.9.2)
- **The season is computed and never set by hand; `seasonOverride` stays null.** It follows Keren's rule:
  inflation rising while growth falls is stagflation. (undated)
- **Growth's side is real GDP against a year earlier set beside the economy's potential growth: at or above
  potential is expansion, below it is contraction. Prices are hot above 3% and cold below 1%, their direction a
  trend fitted to the last twelve monthly readings (±0.02 pp a month counts as flat).** Keren: Autumn's growth is
  usually positive, so calling it "contracting" by direction alone was wrong; "stagflation is a stagnant growth
  economy". She asked for an improved Season Model, not the Investment Clock, and chose potential as the line. It
  replaced the eight-quarter trend of V687. Measured on 1950 Q1–2026 Q2 before shipping: it caught all 11 NBER
  recessions (38 of 39 recession quarters), turned with the recession quarter rather than three quarters after it,
  and left today Autumn–Stagflation (growth 2.1%, potential 2.2%, prices 3.4% and heating). The report is
  season-model/potential-test.md in the project files. (0.8.0, Oct 5, 2026)
- **Potential is CBO's real potential GDP (FRED GDPPOT), year over year, from 1950; before 1950 it is the trend
  of real GDP from the 1929 business-cycle peak to the 1948 one (NBER), 3.46% a year, computed from the app's own
  annual GDP.** CBO's estimates begin in 1949, so its first year-over-year reading is 1950 Q1, and only its
  estimates through the last full quarter are kept, never its projection. Measuring trend from peak to peak is the
  standard way to keep a slump from dragging the line down; an HP filter was tried and failed (−4.5% in 1931,
  +12.7% in 1941). Keren asked for a calculated potential for 1928–49; Claude chose the peak trend and told her.
  With it the contraction years are 1930–33, 1938, 1945–47 and 1949, every NBER recession of the span; 1928 reads
  contraction (Winter). (0.8.0, Oct 5, 2026)
- **Within 0.47 points of potential, the economy keeps the side it was on, from one continuous sequence across all
  of history, never reset at a cycle's start; at the very start of the series, at or above potential is
  expansion.** 0.47 points is the mean absolute revision of real GDP's annual growth from its earliest estimate to
  its latest, 1993–2015 (Fixler, Greenaway-McGrevy and Grimm, Survey of Current Business, January 2018, Table 9):
  a gap smaller than that is inside what BEA itself later revises. Keren left the margin to Claude ("do it
  yourself"). Without it the side switched 58 times since 1950, with 82 quarters within half a point of
  potential; with it, 42. (0.8.0, Oct 5, 2026)
- **The price direction's flat tolerance (±0.02 pp a month) is Keren's call under the rule that cut-offs come
  from convention or the record.** A 95% significance test on the same slopes was measured first; it asks whether a
  trend is certain, and a season has to say it has turned before certainty arrives. Keren: "Keep mine". The growth
  tolerances it stood beside went with the eight-quarter trend in 0.8.0. (1.2.2; the full list is in
  code-review/trends-1.3.0.md in the project files)

- **In expansion, hot is Summer–Inflation; otherwise cooling is Spring–Deflation and heating is
  Spring–Reflation, within or below the range. In contraction, cold is Winter–Deflation; otherwise heating is
  Autumn–Stagflation and cooling is Autumn–Disinflation, within or above the range.** Keren's season
  table. Steady prices (a twelve-month trend inside ±0.02 points a month) keep the prior quarter's direction, as
  growth inside its margin keeps the prior regime. Keren: "steady is that if we don't see a significant change from
  the previous season, then it just continues that season." With no prior direction, steady reads Reflation in
  expansion and Disinflation in contraction, as 0.8.0 had it for every steady quarter. (Sep 18–19, 2026; 0.8.0,
  Oct 5, 2026; 0.9.2)

- **Stagflation does not need prices above the range; it mirrors expansion.** Keren made the two sides
  symmetric "even though heating-within-range is empirically rare". (undated, Sep 19, 2026)
- **Spring–Deflation (expansion, prices cooling, within or below the range) replaced the Goldilocks Zone;
  never re-add it.** In expansion, direction alone now decides, as it already did in contraction. (undated,
  Sep 18, 2026)
- **Spring–Deflation has no narrative until Keren writes one; its card stays blank, with no drafted copy.**
  Keren's choice. (undated, Sep 18, 2026)
- **The second Autumn is "Autumn–Stagflation", with no "Late"; its key stays `lateautumn`.** Keren dropped
  "Late", and the key stays so nothing downstream moves. (undated, Sep 19, 2026)
- **Shrinking real GDP is contraction.** Below zero is always more than 0.47 points below potential, so the
  potential rule gives it without a rule of its own. It was a separate rule from 1.6.0 (Oct 3, 2026), when growth's
  side was a direction; Keren: 1931 "is cold and cooling and growth is contracting, I would think it is winter".
  (1.6.0; 0.8.0)


- **The model's own values stay "expansion" and "contraction"; only the on-screen label changes.** Renaming a
  value to change a label turns a display tweak into a data bug. (V304)
- **The Investment Clock lives on the Portfolio tab only, read from the Season Model's regime and the direction of
  inflation; no season page points to an asset class.** The tilt on the season pages was dropped at Keren's
  instruction (Sep 17, 2026); she brought the clock back as a portfolio method (0.5.0, Oct 4, 2026). Steady prices
  keep the prior direction, as in the Season Model (Keren, 0.9.2; was "count with rising", Claude's call).
- **Before quarterly GDP (1948), a season is read a year at a time: that year's real GDP growth against the
  1929–48 peak trend, with prices read monthly as always (CPIAUCNS before 1948), the December reading standing for
  the year.** Keren chose annual seasons for the older cycles (V690). From 1948 Q1 every quarter is read, against
  the peak trend until 1950 and CBO's potential after. (V690; 0.8.0)

- **Before BEA's annual growth (1930), growth is MeasuringWorth's real GDP (Johnston and Williamson), joined to
  BEA at 1930, so the Great Depression Cycle has a season in every year from 1928.** Keren chose "Extend GDP"
  over reading the 1920s–40s from industrial production or leaving 1928–30 blank. Claude chose MeasuringWorth over
  Balke and Gordon (1989) because it is the series kept current and published year by year; the Backfill refuses
  the join if MeasuringWorth's 1930 growth misses BEA's by more than half a point. (1.4.0; 1928–30 blank in V690.)
- **Prices are read on the Fed's own gauge for each era: CPI through December 1999, the PCE price index from
  January 2000.** The FOMC moved its inflation projections from the CPI to the PCE chain-type price index in its
  Monetary Policy Report of February 17, 2000, and its 2% target is written on PCE. Keren: "let's follow the Fed
  because that would match the times"; she chose "From 2000" over PCE from 1960 or keeping CPI, after the count.
  The 1–3% band and the twelve-month direction are unchanged. Measured first: 21 quarters change, all since 2000,
  11 of them across a season (7 Summer to Spring); Dot-Com and Housing move 4 each, Big Tech 2; no cycle closes in
  a different season, and today stays Autumn–Stagflation. Peaks move with it: COVID-19 to 7.2% (Jun 2022), AI to
  3.8% (May 2026), Dot-Com to 3.4% (Dec 1996). PCE from 1960 would have moved 39 quarters, 19 across a season.
  The PCE months come from FRED (PCEPI) through the Backfill. (0.7.0, Oct 5, 2026)

## Readings and bands

### Where each reading belongs

- **Real return is its own reading in Weather, under Market, after the S&P 500: the index's total return each year with
  inflation taken out.** Keren: "it needs to be under the weather category, under market subcategory" (0.9.19), over
  chips on the cycle pages. It deflates by the app's own inflation gauge (CPI before 2000, PCE since), so one inflation
  figure is used everywhere; the open year's inflation is the latest twelve-month rate taken for the share of the year
  gone (Claude's call: the app holds no price index to measure the year so far). Zero is the definitional line, like the
  S&P 500's; the words are "Beat inflation" and "Lost to inflation". A cycle's real years are read on its page through
  the Cycles window. (0.9.19)

- **Credit is new money being borrowed and lives in Circulation, under Money (Consumer credit, 0.9.22); Stress holds what is owed,
  by Households and by Government.** Keren, 0.9.22: "I think credit belongs under the subcategory of money", then "Move it"; there is no
  Credit subcategory. Keren, 0.9.21: "subcategory credit itself should go to circulation". Before that
  (0.9.4 to 0.9.20) Credit sat in Stress as the appetite beside Debt, the burden. Keren then: "I think
  credit is more of an appetite … to take risk", then "Under stress category, put credit and debt. And under credit, I will
  follow your recommendation" (0.9.4). Earlier (0.9.0) both lived in Circulation. Keren: "Dalio says that debt service squeezes out
  spending, so we should see it in the same place"; "margin debt has everything to do with credit because they use
  credit to buy stocks". Activity (Unemployment rate, Productivity growth) moved to Weather. This overturns V457/V462/V660's
  Stress under Energy; there is still no separate Load or debt category. (0.9.0)
- **The credit readings are the popular, published ones, and few: ones a viewer hears about on CNBC.** Keren: "I want to use popular metrics,
  conventional metrics, and not too many of them"; "We want things that people know" (0.9.21). Margin debt is FINRA's monthly debit balances, read as
  growth against a year earlier, zero its only line. Delinquencies (renamed from Delinquency rate, Keren, 0.9.21) is the Fed's all-loans rate at commercial
  banks; no convention bands it, so its line is the record's own 1985–2025 average (Keren's rule: derive it from the
  record and say so). (0.9.0)
- **The Credit gap and Lending standards are gone: their cards, pages, sources and Backfill fetches. Don't re-add
  them.** Keren: "I still don't understand what is credit gap, lending standards … Is this things that I would hear
  about in CNBC? We want things that people know", then "get rid of lending standards and credit gap" (0.9.21). Both
  were central bankers' and loan officers' tools (the BIS gap with Basel III's lines; the Fed's Senior Loan Officer
  Survey, tried from 0.9.4). A credit impulse and a credit-growth probe were also proposed and dropped as too deep. No
  credit spread came back with the credit readings (V709).
- **The Power score is gone: its card, page, composite and history. Don't re-add it.** Keren: "remove the
  power score". (V660)
- **Unemployment rate and Productivity growth (its history is OPHNFB, through the Backfill) each have their own
  page, under Weather's Activity; there is no Activity page or group.** Keren: they "should be their own pages";
  then "get rid of the activity page… I want productivity growth and unemployment rate to be under energy". (V661, V688)
- **Nonfarm payrolls join Activity and Retail sales join Desire, each its own page, year over year against zero only.** Keren:
  "I think payrolls is a good addition and also retail sales because nowadays people talk about how inflation raised
  the prices of gas and groceries." Payrolls are the BLS employer survey (FRED PAYEMS, monthly from 1939, so growth
  from 1940); retail sales are the Census figure the news quotes (FRED RSAFS, from 1992), in dollars before
  inflation on purpose, and the page says that prices are in it. Year over year rather than the monthly change in
  jobs is the app's YoY rule; zero is a fact, not a band, and words (Adding jobs / Losing jobs, Spending more /
  Spending less) are Claude's, for Keren to rename. Both are Coincident. Both come through the Backfill. Retail sales sits in
  Desire, after Discretionary spending, at Keren's choice ("Retail only" on Claude's card): it is spending, as the durables
  card is; payrolls are the means to pay and stay beside the Unemployment rate from the same jobs report. Desire stays out
  of the mood score. (0.9.7)
- **Productivity growth belongs to the activity readings, not Stress, and its range is the annual year-over-year
  one it plots.** Keren: "I think it doesn't belong to economic power — I think it belongs to activity";
  output per hour measures what the body is doing. (V395)
- **Institutional trust (Gallup's confidence survey) is not a Stress reading; don't re-add it.**
  Keren: "the trust is embodied in the bond market." (V392)
- **Circulation reads in the order cause runs: Pressure (the rate the market charges, then the spreads between its
  maturities), Pulse (how fast money moves), Volume (how much of it there is).** The rate is the cause; pulse and
  volume are what it acts on. The Federal funds rate led it until 0.9.15 and now sits in Weather. (V317, V639, 0.9.16)
- **The policy-rate reading is the Federal funds rate, a member of Circulation; "hormones" is its word only in the
  Diagnosis.** Keren: "when I'm looking at circulation page I want to see interest rates instead of hormones and
  in the analysis … I would want to see hormones because hormones are not the official terminology of the
  market." Then, in 0.9.0: "instead of interest rates, write federal fund rate", its official name. The card, page, Search and Insights say Federal funds rate; the Diagnosis said "Hormones are …" until its
  systems left in 1.8.0. A hormone is a messenger secreted on purpose that sets the tempo
  of everything downstream, which is the rate the Fed sets; the Insights lede keeps that sentence. (V592, V683)
- **Pressure holds two readings, the US 10-year Treasury and, under it, Treasury spreads, each with its own card and
  page.** The 10-year's ⋯ menu picks a maturity (Treasury yields, opening on the 10-year); the spreads' ⋯ menu picks
  10Y − 3M (the default) or 10Y − 2Y. Keren: "separate the 10-year US Treasury yield from spreads. So I would see the
  US 10-year Treasury yield and under it the spread … instead of just hovering in the three dot section … because it's
  kind of hidden" (0.9.16). This overturns V688's one page with two menu groups ("merge horizon into pressure with the
  3 dots having another sub menu called treasury spreads"); V639's "Pressure should be yields, and the default should
  be the 10-year Treasury yield, because it's considered the risk-free loan across the economy" still sets the 10-year's
  opening series. (V598, V639, V688, 0.9.16)
- **Pressure is a leading sign.** The market's price of money moves before the activity it finances shows it.
  (V597, V639)
- **Mood swings are Volatility: no separate mood-swing figure, and the VIX keeps the market's words (Calm,
  Elevated, Fearful).** Keren: "if we already have it as the vix lets use volatility - i prefer market
  terminology." (V686)
- **The yield spread is the Treasury spreads reading, under Pressure.** It sat in Mood from V473, left the mood
  reading in V685 (the curve steepens when the Fed cuts into a crash, so its level does not sort mood), became
  Circulation's own card in V685 at Keren's choice, folded into Pressure's ⋯ menu in V688, and became its own reading
  in Pressure again in 0.9.16. Its word, optimistic or pessimistic, is its figure's word and leads its Insights.
  (V473, V598, V685, V688, 0.9.16)
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
- **Concentration risk is the ten largest S&P 500 companies' share of the index's market cap, read from SPY, under
  Desire > Risk, against its record's own 1995–2025 average (22.8%), each year counted once.** Keren named it "Concentration risk" and its
  history "Top 10 Share of Market Cap" rather than "weight" (0.9.10). Keren asked to "track the top heavy weights of the S&P 500" and chose
  "Import once": the quarter ends since 2019 Q3 are SPY's SEC N-PORT filings, downloaded once from her own computer
  (the SEC refuses GitHub's servers and the cloud allowlist) and kept in `series.json` by `tools/import-nport.js`;
  from then on the Backfill reads State Street's daily SPY holdings file and keeps its latest figure for each quarter
  (`topTenRecent`). **Every point in the history is a quarter's end** (Keren, 0.9.11: "let's do quarter end figures"): a Backfill run on
  the first day of each quarter reads the file as of the last trading day of the one just closed, so a State Street quarter
  stands beside the SEC's quarter ends as their equal; the quarter still open is today's figure on the card and joins
  the history once it closes. A quarter the SEC has filed and State Street has not, such as 2026 Q3, waits for the
  next N-PORT import. Keren asked whether the record could reach before 2019 and chose to fold it into 0.9.10: SPY's
  annual reports (Form N-30D, yearly from 1995, twice a year from 2010) carry the full schedule of investments, read as
  each holding's value over net assets; they agree with N-PORT to the hundredth in both quarters where the two meet
  (2019 Q3, 2020 Q1). The quarters between reports have no reading and are drawn as gaps, never filled in. Each year
  counts once in the average so the quarterly years don't outweigh the yearly ones. A company counts once: share classes are joined by the issuer's six-character CUSIP, so Alphabet's A and C
  are one holding, and in the old reports, which carry no CUSIP, by the company's name. Keren: "it makes sense that Alphabet A and Alphabet C … would be the same company because it is
  the same company." (The index and State Street list the classes separately; JPMorgan's footnote could not be read
  from the cloud.)
  The average line and its Normal side are Claude's call under the derive-it-from-the-data rule; no convention sets
  a band. The largest tenth's share of market cap (Kenneth French's size portfolios) was built and dropped in 0.9.8:
  Keren, "it doesn't really show the concentration of risk in the market"; don't re-propose it. (0.9.9, 0.9.10)
- **The durables card is called Discretionary spending, and its (i) says no official series measures discretionary
  spending, so the app measures it by durable goods.** Keren chose the name over Consumer demand when Retail sales
  arrived, to keep apart what households spend in dollars and what they could do without. The series is unchanged. (0.9.7)
- **Desire is a group of two cards, Discretionary spending (the durables reading above, Consumer demand until 0.9.7) and the Equity
  risk premium, with Discretionary spending first and its figure as the group's preview.** Keren: "I think it actually
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
  dial opens Indicators on that quarter instead. (V680, V693, 0.8.9)
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
- **The 1–3% band stays, and the app names it part of the Season Model's structure, never Keren's call or
  "this app's choice".** Keren: "Make the margin, the range, 1 to 3%. I wouldn't call it Keren's call. I would
  say seasonal model structure or something." (0.6.18)
- **The 1–3% band is also Temperature's Normal range in Analysis: inside it Normal, outside it Attention, and Risk
  only past the Tukey fence of Temperature's own record.** Keren: "It's now 3.4, which is above our 1 to 3% band,
  meaning it should at least be on our attention, right?", then chose the band over the record's middle half
  (1.3–4.4%). The band is declared on the roster row (`normal`), and the Analysis (i) says where it comes from.
  This overturns V582's "a target band, not a normal range" and 2026-10-05's "the season switch, not a
  Normal/Attention/Risk scale". (0.8.6)
- **The Temperature page answers how hot prices are; the Fed's policy-calendar facts live with the policy rate
  (in Hormones' Insights), while Temperature's prose keeps the relationship.** Keren reopened this: the facts
  were in the wrong drawer. (V240, V609)
- **Growth's band is computed from its own series: the 10th to 90th percentile of the quarters from 1988 Q1
  (0.96% and 4.34%, rounded to a tenth).** There is no published normal range for how fast an economy grows,
  so the percentile construction is the only honest one. (V492)
- **CAPE's verdict is computed from the reading against fair value in five bands of one family: Very cheap, Cheap,
  Fair, Expensive, Rich.** Its top word is the Buffett indicator's, so the two valuations agree. Keren: "both of them
  should use the word rich … many analysts and economists say richly priced when they talk about highly
  overvalued stocks." This replaces the overvalued/undervalued family of V290. (V290, 0.8.5)
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
- **Pulse is read like a pulse: its rate (the word) and its rhythm, on the one Pulse page; Rhythm is not a reading of its own.**
  Keren: "Isn't rhythm a pulse? … this is what we started with", then "I think it should be inside pulse, and I think it's
  connected to EKG". Rhythm is the standard deviation of the last eight quarterly changes in M2 velocity; it reads
  Irregular past the 90th percentile of every two-year window from 1959 to 2007 (1.31 points). No convention sets it, so it is
  derived and the (i) says so; the window and the percentile are Claude's. The Now trace beats at each quarter's own
  velocity across its five years, so its spacing shows the rhythm. The Pulse history is one EKG chart: velocity on the y-axis, the
  trace riding at each quarter's level, a year to a screen, scrolling sideways through the period chosen, with a bar under the
  axis showing the position. Keren: "I think the solution is horizontal scroll. I want one history component in this page, with
  a pulse and a rhythm combined into an EKG style reading. The y-axis will be the Velocity … and also some kind of an
  indicator in the x-axis that we can scroll". It beats ten times per turnover; a quarter's beats close up or spread by
  e^(−0.12 × its % change in velocity), Claude's scale. The value labels repeat at each year so a scrolled screen keeps its
  scale; the reading plate shows the last quarter in view. The rate columns, red bands, per-year strips and the separate
  heartbeat line under the chart were built and dropped the same day; Keren on the bands: "not understandable,
  not intuitively". Familiar metrics are a guideline, not a rule: Keren,
  "If you think that some KPI would shed light on our Gyneconomy model, then let's think about it." Told Keren, not printed:
  Irregular quarters fall in Spring 4 of 96 times, against Summer 14 of 61, Autumn 15 of 96 and Winter 5 of 9. (0.9.24)
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

- **An inflation reading past the 1–3% band never prints as the band's edge: one decimal, or two when one would
  round onto 1.0 or 3.0 (3.04% is "3.04%", not "Above range (3.0%)").** Written once, `inflationFigure` in
  model.ts, and read on every card, page and note that prints the reading. Keren asked for the fix after the
  6 Oct code review. (0.8.4, Oct 6, 2026)
- **Federal debt, Interest payments and Federal budget ask three different questions (the stock owed, what
  carrying it costs, what is added this year), so their different figures never contradict each other.**
  (V358)
- **Federal debt is gross federal debt (the headline 122%), not debt held by the public (101%); every figure
  on its row and record comes from the gross series and is checked on load against the OMB history.** Keren
  chose the figure readers actually meet. (V643)
- **A reading's card says today, from the live figure, never the last point of a quarterly average; one thing
  gets one number on a page.** Keren: "you write 10-year 4.94 and I see inside the container 10-year 4.70".
  (V294)
- **The Balance measures the gap between total price change and total real growth over a cycle, using the
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
- **No real interest rate card for now.** The real rate (the Fed funds rate less inflation, against Taylor's 2%
  neutral rate) was a Circulation card from 0.8.2; Keren dropped it: "drop the real interest rate. We don't need
  it for now." (0.8.6)

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
  measures (never the page's name, never the period, though a unit that is part of the reading stays, as in
  "Share of Income" or "YoY"), and a single ⋯ on the right.** Taken from the dashboard Keren sent; the
  axis already says the period on every window. (V518, V606) **Year over year is written YoY, everywhere the app
  shows it** (Keren: "It says year over year. You can just say YoY. This applies everywhere in the app"); screen
  reader labels keep the words. (0.9.6)
- **A history's title reads its own menu row, so one label has one source.** Horizon's title comes from its
  spread menu, Pressure's from its maturity menu. (V639)
- **The head's badge is 21px with a 13px glyph, a 7px radius, a lighter stroke and a neutral wash mixed from
  the text ink, about the height of the title; the ⋯ is a round button with a hairline border, the same
  size.** Keren: "make the background smaller and brighter"; "the height of the icon, including the
  background, should be more or less the height of the title next to it." (V520, V521)
- **The Federal budget page's head wears the budget mark its card wears, and the page carries its timing chip
  (Structural), like every other page.** Keren's call at V670 ends the wait V518 set ("no mark until Keren picks
  one"). (V518, V670)
- **A history's note opens from its head's ⋯ menu, last in the menu; when the note is all the menu would hold,
  the head shows an (i) in the ⋯'s place that opens it directly.** Keren: "put the info in the three dots in the
  history panel as convention" (V518, V522, V582, V593); then "if there is nothing but about this reading inside
  the three dots, just turn it into an info button. So we spare a click" (0.9.6).
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
  or normal, from the one `pressureZone()` lookup), in `--critical` and `--gold` at full weight: colour
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
  to inherit the color." (V301, V302, V457, V490, V657, V661) On Analysis, each Elements row's icon wears its category's colour (Activity olive, Weather red, Mood
  purple, Desire red, Circulation blue, Stress gold) while the title stays dark purple. Keren: "I think the colors look good. So keep the colors and paint
  the icons accordingly" (0.9.14). On the Elements page every mark wears its category's colour too, the category marks
  and the subcategory marks under them, so Labor and Output are olive under Activity. Keren: "I would expect that
  labor and output icons would also be olive green. So that it would like explain to me the context of where I am" (0.9.15).
- **A reading wears its subcategory's mark: one mark per subcategory, declared once (`SUB_MARK` in the roster),
  on the Vitals subcategory heading and on every history head in it; the history head's mark is grey.** Keren:
  "the federal funds rate icon in the history component … doesn't match the icon of the category … I would assume
  that it would have a pressure icon. So make sure the icons match their categories", and "the icon should be gray
  everywhere in all history components" (0.9.6). This retires the rule below that every reading wears its own
  mark; the per-reading glyphs no subcategory uses were deleted. Money wears a heart (Keren: "in circulation change the
  icon of money to a heart icon", 0.9.16); its ECG trace was Claude's 0.9.6 pick and was deleted.
- **(Retired 0.9.6.) Every reading wears its own mark, the glyph alone with no disc, in its category's colour on its card, its
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
- **A miniature is a grey picture with a single coloured mark, the newest reading, never a state colour.** Twelve coloured pictures read as twelve things to
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
- **A card stays white when it is touched, scrolled or hovered: no hover fill and no tap highlight.**
  Keren: "When I click and scroll, a category container, it changes color. to faded uh, gray. Fix it so it will
  always be white." On a phone a touch leaves `:hover` stuck on the card. (V678)
- **A chevron on a door is the `CHEV` SVG, never a CSS border box.** A chevron drawn as a picture cannot fail
  to lay out; the border-box chevron did fail inside a `<button>`. (V450)
- **A past cycle's miniature is drawn from that cycle's own points for every reading; a series the past cycles
  read is always dated points, never bare numbers.** Desire's quarter-ends were bare numbers, so its past-cycle
  miniature could never draw. (V670)
- **There is no Growth ring.** Keren removed it as "not really indicative of the growth itself". (undated, Sep
  19, 2026)

## Colour, type and space

### Colour

- **The Fed's phases are light pink for tightening and light green for easing, the app's own washes (`--accent-wash`,
  `--good-wash`).** Keren: "tightening would be like making the market be bearish, right? And easing would make the
  market be bullish. So maybe the colors should be reverse" (she had first put green on tightening, after her
  tracker's luteal phase). Green and red keep their market meaning: easing is the bullish side. (0.6.7)
- **The seasons' colours are one token each, read by the legend, the Season Model table and the ring alike.**
  Keren: "one change fixes the entire app". (V182)
- **Growth's phase takes the dial's seasons, not the severity palette: expanding in Spring's yellow, contracting
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
- **Every selection bar, search field and button is fully round (`--round`).** Containers keep `--radius`. The
  browser suite fails on a control whose corners are less than half its height. Keren: "make a rule that every
  selection bar or search indicator or button should have rounded corners." (0.8.5, Oct 6, 2026)
- **A segmented control is a light grey track (`--seg-track`) with no border, and its chosen segment is a white
  pill (`--seg-on`); track and pill are fully round, the choices spread evenly in dark text, the chosen one a
  touch bolder on a softly lifted pill.** Keren, from Clair: "I like the way they did the selection bar in gray and
  white"; and, from a hormone-app reference, "make the selection bar like the reference … it looks much prettier"
  (0.8.5). It is the one grey in the app; containers stay white ("I don't like the gray. It's too gray. Let's use
  white"). (0.6.2, 0.8.5, replacing V579)
- **The palette is plum, from Keren's reference: a dark plum brand (`--accent` #7c2844, a rose in dark), a white
  page with apricot and blush splashes behind white containers (`--splash-a`, `--splash-b`), Summer salmon-orange, Spring
  marigold, Winter periwinkle and Autumn its light tint (0.8.7).** Keren: "I really like the dark purple in this reference
  and the light pink background with orange shades to yellow … really appropriate for a cycle tracking app";
  "let's use white and let's use splashes of apricot". Text and greys are tinted toward plum. Every text pair
  holds 4.5:1 in both themes except `--text-muted` on `--track` (4.4:1 in light). (0.6.2)
- **The splash covers the whole screen and stays there as the page scrolls: two fixed layers of soft blobs, apricot
  and blush, that breathe slowly and flow apart as the page scrolls, never with the content.** Keren: "make the
  apricot splashes visible across the background, even if I scroll, and make it creative, make it move when I
  scroll or something like flow." With reduced motion the layers hold still; a browser without scroll-driven
  animation keeps the slow breathing only. (0.6.3) The apricot is about half as strong, and both layers also drift on
  their own, a few percent of the screen over 96 and 120 seconds, too slowly to watch. Keren: "make the apricot
  splashes in the background be much more delicate, feminine, and maybe kind of move in slow motion without the user
  even seeing it." Still too dominant, so the blobs became narrow petals at about half that strength again, with a
  slow sway: "They need to feel like hormones, like feminine, flowing. Delicate, like a flower." (0.6.13) That was too faint, so the petals grew a little and came back to about half of 0.6.12's
  strength, Soft of three strengths shown side by side: "find the sweet spot between having an organic
  background and let it not compete with the foreground, but still remain prominent and feminine." (0.6.14)
- **The Current Cycle page has no Cycle Statistics card; its health score sits in the AI Insights card and at the
  top of the AI Insights page, with one line saying what it is.** Keren: "we don't need the cycle statistics card on
  the current cycle. What we do need is the health score moved to the AI Insights container in the preview and be put
  inside the page as well with some kind of explanation, very short one." (0.6.13)
- **A past cycle's page is laid out like the current one: Interest Rates Environment, one card, Year by Year. Its card is
  Cycle Statistics, the cycle's story (three lines) and its health score, a shortcut to the Analysis tab set to that
  cycle; the separate story card is gone.** Keren: "looking at past cycles, I see that we still have cycle statistics
  and cycle story, meaning it's not up to date with recent changes … you should have cycle statistics just as a
  shortcut because the analysis tab shows the current cycle … there should be some kind of a gateway to the historic
  cycle statistic." (0.6.17)
- **Every cycle page, today's and each past one, is one page built once: a change to one is a change to all.**
  Keren: "all current cycle pages are supposed to be updated just one time." 0.6.13 changed only today's: the
  Diagnosis branched on whether the cycle is open, the change went into the open branch, and the browser suite had
  the past cycle's old layout written down as expected. Now the page is one sequence (Interest Rates Environment, the
  cycle's card, Year by Year) with a single slot, `cycleCard`, that differs only in what its card opens, and a unit
  test fails if any closed cycle's page differs in shape from today's. (0.6.17)
- **Every container title on a cycle page reads like AI Insights: bold, deep purple.** Keren: "some
  titles are in dark purple and some are in black. I think we need to be consistent and make all titles look like AI
  insights… it should be deep purple and bold." Interest environment and Year by year lost their small black capitals.
  (0.6.13)
- **Every title is in title case: each word capitalised, short joining words (a, an, the, and, or, by, of, in, on,
  to, for, at, as…) lower case unless first or last.** Keren: "every word in a title starts with a capital letter. So
  interest environment should be with a capital E. And year by year … year capital Y, by it's fine to be lower caps,
  and year another capital Y. I think that is the convention." It covers container and card titles and the section
  headings; `titleCase` (format) applies it where the title is drawn, so a new title cannot miss it. Reading names
  are names, not titles, and stay as written. One exception, Keren's: "The market this cycle" stays in small
  letters (`hiCard`'s `phrase`). (0.6.17)
- **The health chart's card, Cycle Statistics, on a past cycle's page
  goes straight to the Analysis tab, set to that cycle, rather than opening a page of its own.** Keren: "instead of
  health chart, call it cycle analysis … when I click on cycle analysis on the current cycle page, I move
  automatically to analysis page." (0.6.3)
- **More details is a white button with the containers' grey hairline (`--surface`, `--border`), like a category
  card, not a filled wash.** Keren: "the more details button should be better off white with gray stroke like the
  category containers." (0.6.3)
- **Buttons' and highlights' wash (`--accent-wash`) is the reference's blush (`--blush` #f6c4be at 40% on
  white), not a tint of the plum.** Keren: "the more details button is in the old purple"; plum at 10% on white
  read as lilac. Dark keeps the rose tint. (0.6.3)
- **Cycle analysis's tiers are Normal apricot (`--normal`), Attention marigold (`--gold`) and Risk
  red (`--critical`).** Keren chose apricot over teal: "the apricot looks much more, much better". Apricot and
  marigold are close in lightness, so the mark's shape ("=" or a triangle) carries the difference. (0.6.2)
- **The app icon's lotus sits on the plum, not the old purple.** Keren: "make sure the icon is not purple anymore,
  but dark purple". (0.6.2)

### Type

- **Every font size is a `--type-*` token from the Lovable DSM scale.** Keren: "for the font sizes you can use
  our lovable dsm we built." (V662)
- **Cormorant Garamond 500, upright, is the app's feminine voice for titles; a quotation from the book stays
  italic.** Keren: "the titles should be in a feminine font" (V272); then, from Clair's reference, "I think
  Cormorant Garamond 500 is the closest … let's go with this font" (0.6.2, replacing V506's italic 600).
- **In a figure row the number is bold, not its name.** Keren's call. (V428)

### Space

- **`--pad` is the space inside a container and `--gap` the space between containers (both 10px); a new
  container takes `margin-top:var(--gap)`, never a figure of its own, with no per-tab or per-page override;
  marks and type keep their own figures, because those are shapes, not spacing.** Keren: "if one day I'll tell
  you I want the spacing to be 30, you would just change one number — do not repeat yourself"; "make outer
  spacing 15 pixels and inner spacing 10 pixels", then "five pixels shorter … this applies to all of the app".
  (V381, V385, V449, V450, V505, V507)
- **The Insights rows on Analysis sit 30px apart, line to line, a fifth more than before.** Keren: "space out the
  insights container on the analysis page, maybe twenty percent more room between one line and another." (0.9.1)
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

- **The Diagnosis opens on the Fed's phases, the economy's hormone chart: two phases, Tightening and Easing, as
  the follicular and luteal phases are in her cycle-tracking app, with growth, prices and the Fed funds rate as the
  curves and peak inflation marked where ovulation sits in the tracker.** Keren: "I want to see two phases, like the
  follicular and luteal phases … tightening or easing, and ovulation would be like inflation peak." The mark reads
  "Peak", on the prices curve, never "ovulation": "I don't think we should say ovulation in this app … We don't need
  inflation peak. Only peak because the orange legend says prices." A phase is the direction
  of the Fed's last move (Jensen, Mercer & Johnson, 1996), so a pause stays in its phase and there are only two; the
  moves are the discount rate before September 1982 and the target since. The peak is the cycle's highest price reading
  (0.6.17, below; until then the highest before the price trend turned to falling).
  The curves stop at today: an economic cycle has no known length, so no typical cycle is drawn ahead. No title:
  "I'm already seeing it in the chart," then a head like the page's other cards, "Interest environment" ("environment
  would be better") with an orbit mark (`orbitSvg`: a hollow centre, a ring, three hollow dots on it), redrawn from Keren's own drawing:
  "Make this the interest environment icon" (0.7.1; a steroid ring, `hormoneSvg`, until then). No legend: each level line carries its curve's colour as a dot and on its label, and the rate's
  line is named "Federal funds rate"; every line fits on one line at the meta size ("if you need to make the text a
  bit smaller, then do it"). An open cycle with no confirmed peak shows its peak so far, hollow, and names it
  on its own line: "I do want to see what is the highest points of prices in that current cycle." The Fed's stance is the only rate reading beside the seasons for now; a
  Taylor-rule line waits for potential GDP. (0.6.7)
- **Every cycle has a peak: its highest price reading within the cycle, once the decline it inherited from the
  cycle before has passed.** Keren: "how can it be that a cycle has no peak? I mean, the relative range is the cycle
  length, so it has to have a peak and a trough. By definition." The Go-Stop Cycle's is Nov 1969 (5.9%), at its close.
  The inherited decline is skipped because a cycle's opening months are often the tail of the last one's peak (the
  AI Cycle's highest month is Jan 2023, 6.3%, still falling from June 2022); "inherited" uses the season model's own
  price trend: months falling, or in a rise that topped before the cycle began. Claude's reading of her rule. The
  open cycle's is its peak so far, hollow; every cycle names its peak on its own level line. This replaced the
  turning-point rule of 0.6.7, under which a peak counted only once prices turned down. (0.6.17)
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
  Symptoms; Indicators holds the readings. (V665, V672, V674, V682, V686, 1.8.0)
- **The cycle reads year by year under its story, one row a year, the years parted by hairlines, and each year
  opens Indicators on that year (0.8.9; its quarter's sheet before).** Keren: "I need to turn the dial all the way back and click on the button … what I
  would want is some kind of a very brief summary of the cycle by years … it correlates pretty well with the story
  of the cycle", then "Make the separation between years through lines or something. Make it beautiful." The year
  stands in the serif on the left; beside it the year's seasons in order, and under them Mrs. Market's emotion at
  its first and last month (one word when they agree; none before her mood can be read) and the S&P 500's return
  for the year ("so far" for the year in progress), all from the app's own record, nothing written by hand. The
  year opens the sheet of its last quarter, the one the dial's centre opens. (1.8.0)
  A closed cycle no longer ends on "After" (the S&P 500 the year after the close, 1.8.0 to 0.6.16). Keren: "I don't
  need the after in the year by year component. I would just look at the next cycle." (0.6.17)
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
  in git and in this register; the build number orders them with the 0.x releases. **Since 0.6.1 every release
  moves the last number, and the middle number moves only when Keren says so.** Keren, when a feature came up as
  0.7.0: "You're moving the versions too fast. We're still in, I think, 0.6." (0.6.1)
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
- **A reading is declared once, in the roster (`ROSTER`, `src/js/roster.ts`): its page, name, category, subcategory,
  group, timing, mark, door, history and unit; Indicators, today's figure, the Diagnosis, Cycle Statistics, the history
  heads and every page's state read it, and a new reading is one row.** Keren: “make the app as consolidated as possible so we won't have to write the same code twice, meaning dry code and as efficient components as possible.” (V670)
- **Rows are addressed by name (`valRow`), never by array index, so the display order is free to follow the
  page.** Reordering by index would silently swap one reading for another. (V494)
- **No function grows (the V624 ratchet; the cap is 150 lines under CLAUDE.md); new work becomes a separate
  step.** As Pressure's Insights did. (V624, V640)
- **Nothing stays that the app never draws or runs: a retired design leaves with its code, its styles, its
  tokens, its options and its tests.** Keren: "I want a lean, mean, coding machine." The 0.8.10 sweep traced
  every function the unit tests and the browser suite run and every style rule any of the 48 snapshot states
  matches, removed what never ran or matched, and proved each page's elements compute the same styles before and
  after. Hygiene now matches a style's class as a whole word, so a class that only appears inside a longer name
  (`.spark` in `sparkleSvg`) no longer counts as used. (0.8.6, 0.8.10)
- **Functions get meaningful names, like `seasonHalf`.** Keren: "give the functions meaningful names like
  seasonHalf". (V664)
- **A probe asserts on what a reader can see (paint, opacity, size), not on element state such as `hidden`.**
  The hover readout once passed its probe while Keren could see nothing. (V373)
