  /* ---------------- THE FIFTH PEEK FORM (Version 297): a pulse drawn as a pulse ----------------
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
     error, which is how a second boltSvg nearly shipped in V585. Explicit names are the cheap defence. */
  // PULSE_WINDOW and PULSE_PRE2008 are declared once, with the Pulse chart that first needed them
  // (search `var PULSE_WINDOW`). They were declared a second time here, with the same values, until
  // Version 529: same scope, so the file held one number in two places — the thing ONE FIGURE /
  // ONE NUMBER exists to prevent. Found by `docs/MAP.md`, which lists every top-level declaration
  // and so makes a redeclaration visible for the first time.
  var pulseClipN = 0;
  function beatPath(x0, x1, y, period, amp){
    // one beat = one turnover: flat, then Q-R-S, then flat. Drawn past the right edge and clipped, the way a
    // monitor's strip runs off the screen rather than stopping tidily on a whole beat.
    // Version 298, Keren: "I want it to look like a real heartbeat — we have the beats but we don't have the
    // heights." A real trace's heights are WITHIN a beat, not between beats: the small P bump as the atria fire,
    // the tall spike of the QRS as the ventricles do, the broader T bump as they reset. Drawing those gives the
    // trace its anatomy WITHOUT introducing any variation between beats — every beat is still identical, so the
    // only thing that differs between the two lanes is still spacing, which is still the only thing that is data.
    var f = function(n){ return n.toFixed(1); };
    var d = ["M" + f(x0) + "," + f(y)], x = x0, p = period, A = amp;
    while (x < x1 + p){
      d.push("H" + f(x + p * 0.08));
      d.push("Q" + f(x + p * 0.15) + "," + f(y - A * 0.24) + " " + f(x + p * 0.22) + "," + f(y));   // P
      d.push("H" + f(x + p * 0.30));
      d.push("L" + f(x + p * 0.345) + "," + f(y + A * 0.15));                                        // Q
      d.push("L" + f(x + p * 0.400) + "," + f(y - A));                                               // R
      d.push("L" + f(x + p * 0.455) + "," + f(y + A * 0.34));                                        // S
      d.push("L" + f(x + p * 0.500) + "," + f(y));
      d.push("H" + f(x + p * 0.60));
      d.push("Q" + f(x + p * 0.71) + "," + f(y - A * 0.36) + " " + f(x + p * 0.82) + "," + f(y));   // T
      x += p;
    }
    return d.join("");
  }
  // ref == null draws ONE lane, centred (the page stacks two of those, each labelled); otherwise two lanes.
  function pulseTraceSvg(rate, ref, W, H, amp, cls, years){
    var id = "pulseclip" + (++pulseClipN);
    var span = years || PULSE_WINDOW;
    var lanes = ref == null
      ? [{ r:rate, y:H * 0.52, c:"pt-now" }]
      : [{ r:ref, y:H * 0.76, c:"pt-ref" }, { r:rate, y:H * 0.30, c:"pt-now" }];
    var paths = lanes.map(function(L){
      var beats = Math.max(0.5, L.r * span);
      return '<path class="' + L.c + '" d="' + beatPath(0, W, L.y, W / beats, amp) + '"/>';
    }).join("");
    return '<svg class="pt-svg ' + (cls || "") + '" viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="none" aria-hidden="true">' +
      '<defs><clipPath id="' + id + '"><rect x="0" y="0" width="' + W + '" height="' + H + '"/></clipPath></defs>' +
      '<g clip-path="url(#' + id + ')">' + paths + '</g></svg>';
  }
  function pulsePeek(rate, ref){
    return '<span class="peek-chart pulsepeek">' + pulseTraceSvg(rate, ref, PEEK_W, PEEK_H, 8, "", PULSE_WINDOW_PEEK) + '</span>';
  }
  // Version 300, Keren: "it's not in the same theme as the other inner pages — I want to see a graph on a white
  // container." She is right, and it was the one page breaking the Version 266 rule: on an inner page the reading
  // lives in a white box (.page-chart) and everything below it is commentary on the page itself. The trace was
  // sitting bare on the page, which made it read as decoration between two blocks of text rather than as THE
  // picture. Same box the four metric pages use, with the bottom padding they get from their trend footer.
  function pulseBlock(rate, ref, ind){
    var slower = Math.round((1 - rate / ref) * 100);
    // the container names itself, the way every card on the yield page does — same .spread-history-head, same
    // h4, and the verdict rides the right-hand end of that row where the head used to carry it
    var title = ind
      ? '<div class="spread-history-head"><h4>' + ind.econTerm + '</h4>' +
        '<span class="tag ' + ind.tag.state + '">' + ind.tag.text + '</span></div>'
      : "";
    return velocityRecordBlock(ind) + '<div class="page-chart pulsebox"><div class="pulsetrace">' + title +
      '<div class="pt-head"><span class="pt-k">Now</span><span class="pt-v mono">' + rate.toFixed(2) + '× a year</span></div>' +
      pulseTraceSvg(rate, null, 520, 34, 11, "solo") +
      '<div class="pt-head past"><span class="pt-k">Her pre-2008 pace</span><span class="pt-v mono">' + ref.toFixed(2) + '× a year</span></div>' +
      pulseTraceSvg(ref, null, 520, 34, 11, "solo past") +
      '<p class="pt-note">One beat is one turnover of the same dollar, and both traces run the same ' + PULSE_WINDOW +
      ' years — so the gap you can see is the gap in the number. She turns her money over about ' + slower +
      '% less often than she did across 1959–2007.</p>' +
    '</div></div>';
  }


  var CHEV = '<span class="peek-chev" aria-hidden="true"><svg viewBox="0 0 6 10"><path d="M1.1 1 L4.9 5 L1.1 9"/></svg></span>';
  // One card, one order, whatever the picture is: the NAME, then the picture, then the reading (Version 264).
  function peekCard(o){
    /* V585: `ring` is the reserve drawn as a ring — a full ring is 100%, so 26% is a little over a quarter
       round. It replaces `gauge`, which drew twenty lit segments: a battery laid on its side, which is the
       "battery kind of look" the ring was asked for instead. Same slot, same place under the date. */
    var art = o.ring != null ? vitalRingSvg(o.ring, o.state, null, "peek-chart peek-ring")
            : o.pulse ? pulsePeek(o.pulse.rate, o.pulse.ref)
            : o.meter ? meterPeek(o.meter, o.state)
            : o.cols ? colPeek(o.cols, o.colClass, o.colBase, o.colRule)
            : "";
    return '<button type="button" class="peek ' + o.state + '" data-open="' + o.target +
      // Version 353: a peek's own kicker and the title of the page behind it are allowed to differ. The card is
      // a tile in a four-up grid and wants the short noun; the page has a whole top bar and can afford the full
      // name. `title` is the override and defaults to the kicker, so only the one card that needs it carries it.
      '" data-title="' + (o.title || o.kicker) + '" aria-label="' + (o.title || o.kicker) + ', ' + o.value + ' ' + o.unit + ' \u2014 open">' +
      '<span class="peek-text">' +
        '<span class="peek-kicker">' +
          (o.mark ? '<span class="peek-mark ' + o.state + '">' + o.mark + '</span>' : '') +
          o.kicker + CHEV + '</span>' +
        art +
        '<span class="peek-value">' + o.value + '<span class="peek-unit">' + o.unit + '</span></span>' +
        '<span class="peek-word">' + o.word + '</span>' +
      '</span>' +
    '</button>';
  }

  // Sentiment's mark: SentimentFace from the Gyneconomy DSM (Version 244) — built there on Keren's ask and imported path
  // for path, the same discipline as SproutMark: src/components/gyneconomy/icons/SentimentFace.tsx in
  // https://lovable.dev/projects/342f83b9-eb2b-4ba2-96e9-7627a1f9cdc1. Change it THERE first, then here.
  // One face in five states, only the mouth changing. The eyes are solid and large (1.55 radius) and the mouth is drawn
  // heavier than the face (2.1 against 1.9) so the expression carries at 24px, where a thinner mouth disappears.
  // Valuation's mark (Version 245): a piggy bank filling in three steps — nearly empty is cheap, full is richly priced.
  // Drawn on the same 24 grid as the faces and the sprout; the fill is a band clipped to the body, so the body never moves
  // between levels and the set reads as one object filling up (the battery's logic, which Keren liked for Economic power).
  // What had to go, to survive 24px: the tail. Its curl turned to mush below about 40px and cost more than it carried.
  // Valuation's mark, Version 302 (Keren: "make the Valuations icon a diamond instead of a piggy bank"). A
  // brilliant cut: crown, girdle, pavilion. It says the subject better than the piggy did — valuations are not
  // about saving, they are about what a thing is worth against what is being asked for it, and a cut stone is
  // the object whose price is most obviously a matter of opinion. It also fits the Version 301 rule the piggy
  // could not: the piggy FILLED in three steps, so the mark was carrying the verdict, and a mark names the
  // subject while the word beside it carries the verdict. One interior line only — the girdle — because the
  // full facet pattern turns to mud at 15px (the Version 213 rule: no interior detail a small size cannot hold).
  // Volume's mark (Version 310, Keren: "the icon should be a drop of blood"). It is the right word: Volume is
  // blood volume, and a drop belongs to the body's vocabulary where a test tube belonged to a laboratory's. The
  // app is a body read as an economy, so the tube was the one mark speaking the wrong language.
  //
  // Hollow, not solid (Version 311, Keren). Version 310 filled it to keep it apart from Desire's flame, which is
  // also a drop-shaped outline — but the flame carries a filled tongue INSIDE it, and that core is what tells the
  // two apart, not the silhouette. So the drop is drawn slimmer than the flame is wide and left empty: a ring
  // beside a ring-with-a-core reads as two different marks, and an outline is what every other mark here is.
  // The two are never adjacent in any case — Desire is a 48px chip in the list, Volume a 15px mark on a card.
  // Version 507: one drop, two weights. Keren moved it from Volume to Circulation ("I want circulation to be
  // an icon of a drop"), where it is the plainest possible reading of the word — and Circulation's mark renders
  // at 42px on a home tile beside three marks drawn at 1.9, so the caller says which weight it needs rather
  // than the set carrying two drops that are almost the same shape.
  function dropSvg(sw){ return markSvg(
    '<path d="M12 3.2C12 3.2 6.5 10.8 6.5 14.9A5.5 5.5 0 0 0 17.5 14.9C17.5 10.8 12 3.2 12 3.2Z" stroke-width="' + (sw || 1.7) + '"/>'); }
  /* Version 507, Keren, with a reference: "let's make the volume icon like volume that is in sound." It is the
     one mark in the set named after the WORD rather than after the thing in the body — every other one draws
     what it measures (a thermometer, a sprout, a gauge, a house) and this one draws a pun. Said plainly to her;
     built as asked, and it does carry the reading honestly enough: how much there is, turned up or down. Two
     arcs rather than the reference's three — at the 15px this renders at on a sign card the third closes up
     against the second and the three become a smudge, which was checked at size before choosing. */
  /* V587, Keren, with the drawing: Volume's mark is a filled disc inside an open ring. The speaker it
     replaces was a pun on the word — volume as loudness — and this page measures a QUANTITY: the money
     stock, a body of something, which is what a solid core inside a boundary draws. The proportion is the
     one she sent: the inner disc is a little over half the ring's radius. */
  function volumeSvg(){ return markSvg(
    '<circle cx="12" cy="12" r="9.3" stroke-width="1.9"/>' +
    '<circle cx="12" cy="12" r="5" fill="currentColor" stroke="none"/>'); }
  // Pressure's mark: the gauge (Version 312, restored in Version 314 — Keren preferred it to the cuff). The
  // cuff was the truer object but it is three shapes where this is two, and at the 15px this mark now renders at
  // the cylinder and the dial collapse into each other. The foot under the dial is load-bearing: a circle with
  // one needle and nothing else is a clock, and a circle with one needle standing on a connector is a gauge.
  function gaugeSvg(){ return markSvg(
    '<circle cx="12" cy="11.2" r="7.6" stroke-width="1.7"/>' +
    '<path d="M12 11.2 7.9 7.1" stroke-width="1.9"/>' +
    '<path d="M10.3 18.6v2.2h3.4v-2.2" stroke-width="1.6"/>'); }
  function diamondSvg(){ return markSvg(
    '<path d="M6.2 3.9h11.6l3.9 5.3L12 20.4 2.3 9.2z" stroke-width="1.7"/>' +
    '<path d="M2.3 9.2h19.4" stroke-width="1.5"/>' +
    '<path d="M6.2 3.9 8.9 9.2M17.8 3.9 15.1 9.2" stroke-width="1.35" opacity="0.75"/>'); }
  // Energy: one word off five bins of the ISM Manufacturing PMI already tracked under Coincident signs.
  // `level` (1–5) drives the battery icon's fill.
  // Energy is what is left of her reserve (Version 228, Keren): the stress composite inverted — under chronic stress the
  // body keeps the system on alert and spends what it had, and what remains is the energy to answer the next shock. The
  // three markers behind it are structural, so this word moves slowly, by design: Feeling and Pulse carry the fast reads.
  // The bands are the stress score's own, mirrored, so the word and the panel can never disagree: stress 70+ is Critical,
  // so a reserve of 30 or less is Exhausted; 50+ Serious is Tired; 30+ Elevated is Steady; below that she has her energy.
  // V583: `bars` went with the battery. It was a 0–5 charge for the icon, and the ring the icon became reads
  // the reserve itself, so the field had no consumer left. The WORD still bins — the number is continuous and
  // the verdict beside it is not — which is the part Version 229 was actually right about.
  function energyFromReserve(reserve){
    if (reserve == null) return {word:"No reading", state:"norm"};
    if (reserve <= 30) return {word:"Exhausted", state:"critical"};
    if (reserve <= 50) return {word:"Tired", state:"serious"};
    if (reserve <= 70) return {word:"Steady", state:"warning"};
    if (reserve <= 85) return {word:"Energetic", state:"good"};
    return {word:"Energetic", state:"good"};
  }
  // The GDP growth mark: SproutMark from the Gyneconomy DSM (Version 215) — built there on Keren's ask and imported path
  // for path, so the design system stays the source of the drawing: src/components/gyneconomy/SproutMark.tsx in
  // https://lovable.dev/projects/342f83b9-eb2b-4ba2-96e9-7627a1f9cdc1. A seedling out of the soil, outline only, the
  // stroke in currentColor so it takes the ink of whatever it sits in. Change it there first, then here.
  function sproutSvg(){
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<path d="M4.6 19.7 C7.6 18.8 16.4 18.8 19.4 19.7"/>' +                          /* the soil */
      '<path d="M12 19 V12.3"/>' +                                                     /* the stem */
      '<path d="M12 12.3 C12.1 8 15 5 19.6 4.9 C19.7 9.3 16.7 12.2 12 12.3"/>' +       /* the larger right leaf */
      '<path d="M12 14.3 C11.9 11.4 9.9 9.5 6.3 9.4 C6.2 12.9 8.7 14.3 12 14.3"/>' +   /* the smaller left leaf */
    '</svg>';
  }
  // The coincident and lagging marks (Version 247), in the app's icon language — 24 grid, outline, currentColor, round
  // caps, solid only where a hollow shape would vanish at 25px. Drawn here rather than in the design system because Keren
  // asked to try placeholders first; if they hold up they are the set, and the Lovable brief can be dropped.
  function markSvg(body, extra){
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + body + '</svg>';
  }
  /* V592: Hormones. A molecule — three atoms and the bonds between them — because a hormone is a chemical
     MESSENGER, and what the policy rate does is carry a signal into everything downstream. Drawn as an outline
     at 1.7 like every other mark here, with no interior detail, so it survives at 13px. */
  /* V597: Pressure. Two arrows pressing inward on a channel — the mark says SQUEEZE, which is what the
     reading measures: not the price of money but how narrow the banks leave the pipe it travels through.
     Deliberately not a cuff: a cuff is the INSTRUMENT, and in this model the instrument is the Fed. */
  function pressureSvg(){ return markSvg(
    '<path d="M12 3.4v17.2" stroke-width="1.6" opacity="0.55"/>' +
    '<path d="M2.6 12h5.1" stroke-width="1.9"/><path d="M5.6 9.3 8.3 12l-2.7 2.7" stroke-width="1.9"/>' +
    '<path d="M21.4 12h-5.1" stroke-width="1.9"/><path d="M18.4 9.3 15.7 12l2.7 2.7" stroke-width="1.9"/>'); }
  function hormoneSvg(){ return markSvg(
    '<circle cx="12" cy="5.4" r="2.6" stroke-width="1.7"/>' +
    '<circle cx="5.6" cy="16.6" r="2.6" stroke-width="1.7"/>' +
    '<circle cx="18.4" cy="16.6" r="2.6" stroke-width="1.7"/>' +
    '<path d="M10.7 7.7 6.9 14.3M13.3 7.7 17.1 14.3M8.2 16.6h7.6" stroke-width="1.7"/>'); }
  // Desire — appetite for risk, read off the high-yield spread. A flame: what she is willing to reach for.
  function flameSvg(){ return markSvg(
    '<path d="M12 21.6c3.5 0 6.1-2.4 6.1-5.7 0-4.2-3.3-6.6-5.2-11.1-.4 3.1-2.2 4.7-3.6 6.2-1.8 2-3.4 3.3-3.4 4.9 0 3.3 2.6 5.7 6.1 5.7Z" stroke-width="1.7"/>' +
    '<path d="M12 21.6c1.7 0 2.9-1.2 2.9-2.8 0-1.6-1.2-2.6-2.9-4.9-1.1 1.6-2.9 3-2.9 4.9 0 1.6 1.2 2.8 2.9 2.8Z" fill="currentColor" stroke="none"/>'); }
  // Effort — industrial output. A cog: the teeth are kept short and heavy so it reads as machinery, not as a sun.
  function gearSvg(){
    var teeth = "", i, a;
    for (i = 0; i < 6; i++){ a = i * Math.PI / 3;
      teeth += '<path d="M' + (12 + 7 * Math.cos(a)).toFixed(2) + ' ' + (12 + 7 * Math.sin(a)).toFixed(2) +
               'L' + (12 + 9.6 * Math.cos(a)).toFixed(2) + ' ' + (12 + 9.6 * Math.sin(a)).toFixed(2) + '"/>';
    }
    return markSvg('<g stroke-width="2.5">' + teeth + '</g><circle cx="12" cy="12" r="6.4" stroke-width="1.7"/><circle cx="12" cy="12" r="2.4" stroke-width="1.7"/>');
  }
  // Pulse — velocity of money. A heart (Version 301, Keren), where it was an ECG squiggle before. The squiggle
  // had become a problem of its own making: since Version 297 the page draws a real trace, so the ICON was a
  // miniature of the picture below it rather than a name for the subject. A heart names the subject and leaves
  // Temperature — inflation. A thermometer, with the mercury heavier than the glass so it carries at 25px.
  function thermoSvg(){ return markSvg(
    '<path d="M9.9 15.5V5.9a2.1 2.1 0 0 1 4.2 0v9.6" stroke-width="1.7"/><circle cx="12" cy="17.9" r="3.5" stroke-width="1.7"/>' +
    '<path d="M12 8.6v6.6" stroke-width="2.1"/><circle cx="12" cy="17.9" r="1.7" fill="currentColor" stroke="none"/>'); }
  /* Version 510, Keren, reading the roster: "take the cogwheel and put it in Industrial output, and here is
     the icon I think fits Activity better." This is the SAME duplicate Version 346 flagged — Activity and
     Industrial output both drew the cog — settled the other way round, and the other way round is the right
     one: a cog is a factory, which is what Industrial output measures, and Activity is the labour market,
     which is a body reading. Version 357 resolved it by leaving one of the two slots empty, so the roster has
     carried a blank circle for a hundred and fifty versions; both slots are filled now and no glyph appears
     twice. The trace is the reference Keren attached — flat lead, three peaks over two troughs, flat out.
     Drawn WIDE on purpose: the first attempt kept the reference's narrow spacing and at the 15px a category
     row renders a mark at, the peaks closed into a scribble. Four candidates rendered at 15, 20, 27 and 42
     before choosing, which is the house rule for a new mark. */
  /* Version 524, Keren: "for activity, draw an upward sloping chart." Three rising bars, no axis frame and no
     arrowhead, which is the shape that survived the house test at 13 / 15 / 20 / 27 / 42px against the four
     others drawn beside it. Why not the two obvious alternatives: an arrow with a trend line is the TREND
     PILL's own mark, and this mark sits on a page that carries that pill; and bars inside an L-shaped axis is
     the Analysis TAB's icon, and no glyph in this app appears twice (the V510 rule). Bars alone say chart,
     say rising, and hold at 13px, which is the size the band head renders a mark at since V521. */
  function trendUpSvg(){ return markSvg(
    '<path d="M5 19.4V13.6M12 19.4V9.4M19 19.4V4.9" stroke-width="2.4"/>'); }
  function ecgSvg(){ return markSvg(
    '<path d="M1.8 12H5.4L8.0 6.9L10.5 17.9L12.6 3.8L14.7 18.2L17.2 6.9L19.0 12H22.2" stroke-width="1.9"/>'); }
  /* Version 454, Keren: "instead of Blood call it Circulation, and change the icon to what I attached —
     simplify it to match our design system." Her reference is a two-tone coin inside a ring of arrows; simplified
     here to the app's own terms — one 24 box, no fills, no second colour, 1.9 stroke, round joins. Four
     candidates were drawn and looked at, and Version 455 took the simplest: the ring alone (Keren, with a
     second reference: "simplify it to be just this without a dollar inside"). The worry about it was that a
     bare ring of arrows reads as "reload" — which it does in isolation, and does not beside a row labelled
     Circulation with four readings named under it. The label is doing the work the $ was doing, and one glyph
     saying one thing is the better trade. The drop goes back to Volume alone, where it belongs. */
  /* Version 507, Keren: "I want circulation to be an icon of a drop." The ring of arrows above was always
     carrying a worry with it — a bare ring of arrows reads as "reload" — and the drop settles it: Circulation
     is blood, and a drop of blood is what the word means in this app before it means anything about money.
     It is the SAME path Volume wore until now, at the category weight, which is why dropSvg takes one. */
  function circulationSvg(){ return dropSvg(1.9); }
  function weatherSvg(){
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<path d="M15.8 3.4v1.3M19.3 5.1l-.95.95M20.9 8.6h-1.3M19.3 12.1l-.95-.95M12.3 5.1l.95.95"/>' +
      '<path d="M12.75 8.06A3.1 3.1 0 1 1 15.26 11.65"/>' +
      '<path d="M7.8 19.2h6.9a3.2 3.2 0 0 0 .25-6.4 4.8 4.8 0 0 0-9.05-.95 3.7 3.7 0 0 0 1.9 7.35z"/>' +
    '</svg>';
  }
  /* Version 456: Keren's spiral replaces the circle-and-swing of Version 446. Ten quarter-turn arcs of easing
     radius rather than a sampled polyline, so it stays one short path and is smooth at any size. 2.5 turns to
     match her reference; the centre stops at r=1.6 rather than running to a point, because at 22px — the size
     it actually renders at on the Browse row — a tighter spiral closes into a blob. Checked at 15, 22, 30, 44
     and 110. */
  /* Version 490, Keren, with the glyph: waves, where a spiral stood since the categories were built. The
     spiral drew a FEELING — an inward coil that reads as vertigo, or as a hypnotist's disc — and named no
     subject; Mood's four members (Valuations, Fear & Greed, Desire, Horizon) are all readings of a swell that
     arrives and passes, which is what waves say. It is not a new mark either: Version 457 drew three waves for
     Sentiment on exactly this argument, Version 465 gave that row the dial it is published as, and the waves
     have been unused since with the reasoning for them untouched. Two half-waves a line, three lines 5.6 apart,
     amplitude 1.7 — measured at 15, 22, 44 and 96 against V457's flatter 5.4/1.4: 1.7 is the most amplitude
     the mark takes before the lines close on each other at 15px, the size a category row is read at. */
  function moodSvg(){ return markSvg(
    '<path d="M3.6 6.4q4.2-3.4 8.4 0t8.4 0" stroke-width="1.9"/>' +
    '<path d="M3.6 12q4.2-3.4 8.4 0t8.4 0" stroke-width="1.9"/>' +
    '<path d="M3.6 17.6q4.2-3.4 8.4 0t8.4 0" stroke-width="1.9"/>'); }
  // Sentiment's mark, Version 457 (Keren, with the glyph): three waves, where a face in five expressions stood
  // from Version 244. The face was the one mark in the set that carried the VERDICT rather than the subject — it
  // frowned or smiled with the reading, which is the Version 301 rule the piggy bank failed and the diamond fixed.
  // Waves name the subject: sentiment is a swell that arrives and passes, and the word beside it does the grading.
  // Two half-waves, three lines 5.4 apart, amplitude 1.4 — measured, not chosen: a taller wave closes the gap
  // between the lines and the three run together at 15px, which is the size a row mark is actually read at.
  /* V465's half-dial was Fear & Greed's mark until V524 gave that row the heart. Nothing draws it now, so it
     is out rather than kept "in case" (Keren's standing rule: lean, dry, efficient code). Its three paths are
     archived under V524 in gyneconomy-version-archive.md, so bringing it back is a lookup, not a redrawing. */
  // Energy's mark, Version 457 (Keren: "activity should be renamed to energy — the icon needs to embody energy").
  // A bolt: the one glyph in the set with no curve in it, which is how it stays apart from the flame and the drop
  // at 15px. It is drawn as an outline like every other mark, not the solid bolt of a charging indicator, because
  // Power's battery sits directly below it in the same list and a filled bolt would read as that battery's state.
  /* V585, Keren: "bring back the lightning in the power icon." V583 read "I want the power preview to be a
     ring" as the MARK and put the ring here, which was the wrong slot twice over — it took the glyph's job and
     left the battery-shaped preview, the actual picture of the reserve, untouched. A mark says WHICH reading;
     the preview says HOW MUCH. This bolt already existed as the ENERGY category's own mark, so Power now wears
     its category's glyph rather than a second drawing of the same idea. (A V585 draft added a second boltSvg
     a hundred lines up; two function declarations in one scope means the later one silently wins, which is a
     coin-flip waiting on file order. There is one bolt.) */
  function boltSvg(){ return markSvg('<path d="M14.2 2.4 5.2 13.6h5.9l-1.3 8 9-11.2h-5.9z" stroke-width="1.8"/>'); }
  // Households' mark: a house. The plainest thing in the set, and deliberately so — this is the one reading
  // about the people rather than about the system, and a reader should not have to decode it.
  function houseSvg(){ return markSvg(
    '<path d="M3.4 10.9 12 4.1l8.6 6.8" stroke-width="1.9"/>' +
    '<path d="M5.7 9.6v9.7h12.6V9.6" stroke-width="1.9"/>'); }
  /* Horizon's mark, Version 473: a sun standing on a horizon line. The ambiguity is the point — nothing in the
     drawing says whether it is rising or setting, which is exactly the claim the reading makes and refuses to
     make. Drawn to the same spec as the other nine (24 box, no fill, current colour, round caps): the ground
     line full width, a half-disc of radius 4.8 sitting on it, and three rays kept short so the glyph still
     reads at the 15px a peek mark gets. */
  function sunriseSvg(){ return markSvg(
    '<path d="M2.6 17.9h18.8" stroke-width="1.9"/>' +
    '<path d="M7.2 17.9a4.8 4.8 0 0 1 9.6 0" stroke-width="1.9"/>' +
    '<path d="M12 4.3v2.4M6.1 7.4 7.6 8.9M17.9 7.4 16.4 8.9" stroke-width="1.8"/>'); }
  /* The VIX's mark, Version 467 (Keren, with the idea): an umbrella in the rain. It replaces the shield of
     Version 464, which said protection but not weather — and this app reads the economy as weather, so the one
     reading about buying cover against a bad day should look like a bad day. Four candidates were drawn: slanted
     drops read as motion rather than rain, and a scalloped canopy with no drops is just an umbrella. Three short
     verticals under a wide canopy is what reads as raining at the size this actually renders.
     It sits on the Fear & Greed page rather than in a row beside Weather's sun-and-cloud, so the two never meet. */
  /* V593, Keren: "make the umbrella icon without rain because it looks unclear." The three short verticals
     V467 chose as rain were the whole ambiguity at 13px: at that size they read as scratches beside the
     canopy rather than as weather, and the eye spends its attention deciding what they are. The canopy, the
     shaft and the crook are unmistakably an umbrella on their own — which is the reading anyway. The canopy
     is deepened a little to carry the meaning the drops were doing. */
  function umbrellaSvg(){ return markSvg(
    '<path d="M12 2.4v2.3" stroke-width="1.8"/>' +
    '<path d="M2.4 12.6a9.6 9.6 0 0 1 19.2 0z" stroke-width="1.9"/>' +
    '<path d="M12 12.6v6.1a2.4 2.4 0 0 1-4.8 0" stroke-width="1.9"/>'); }
  /* Version 524, Keren: "make the pulse icon from Activity be the icon of Pulse — money velocity — because
     it is more representative of a pulse than a heart." She is right, and it is the same argument V301 made
     the other way: back then Pulse's page drew no trace, so an ECG squiggle beside it was a miniature of the
     picture below rather than a name for the subject, and a heart was the name. The page draws a real trace
     now, so the squiggle IS the subject's own signature, and the heart is the loose metaphor. Activity takes
     the rising bars (above) and the heart moves to Fear & Greed, which is where a heart earns its keep: the
     index it names is a reading of how the market FEELS. */
  var signMarks = { VIX:umbrellaSvg, Desire:flameSvg, Pulse:ecgSvg, Activity:trendUpSvg, Temperature:thermoSvg,
                    "Industrial output":gearSvg,
                    Volume:volumeSvg };   // V596: Pressure went, and no indicator carried that bodyTerm

  // Economic power's mark (Version 229, Keren: "the battery icon is a really good metaphor for economic power — low power
  // is a depleted energy, high power is fully charged"). level 0–5 → how much of the body is filled, five equal steps;
  // the level comes from energyFromReserve() below, so the charge and the word can never disagree.

  // ---------------- Market eras & yearly returns (Calendar tab + Cycle tab era headline) ----------------
  // The page's ONLY market-history model, by design (Keren's call — an earlier monthly streak-rule model was
  // deleted; history in claude/gyneconomy-dashboard.md). Don't add a second, finer-grained model beside it.
  //
  // Values are TOTAL return (price plus dividends reinvested) — the standard "S&P 500 annual return" figure.
  // The current year is a year-to-date figure through DATA_COMPILED, rendered with an asterisk and a lighter
  // ring rather than as a closed full-year number. REFRESH: update the current year's entry; when a year
  // closes, make it final and add the next year.

  /* ---------------- Load: what households owe, and what they keep (Version 460, Keren) ----------------
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
     Income and Outlays, so its quarter closes a month after the quarter does. */
  var DSR_FROM_YEAR = 2005;
  var dsrHistory = [14.799802,14.828576,15.139959,15.028550,14.989443,15.044255,15.367228,15.509711,15.526607,15.632510,15.712123,15.846367,15.775857,15.326612,15.546547,15.721360,15.597500,15.251967,15.085880,14.896385,14.514940,14.069775,13.917807,13.580863,13.308460,13.057706,12.944597,12.749684,12.237059,12.034065,12.083107,11.754033,12.006598,11.794391,11.837713,11.985283,11.883758,11.621140,11.646947,11.631993,11.556634,11.485147,11.606488,11.738976,11.763247,11.766109,11.769855,11.865818,11.723758,11.756991,11.818444,11.816704,11.644589,11.598389,11.619573,11.666416,11.499920,11.626991,11.646611,11.727653,11.591164,9.739844,10.058510,10.389381,9.051457,9.841025,10.009597,10.228796,10.472393,10.684739,10.567838,10.736945,10.564109,10.577002,10.747842,11.096141,11.058908,11.019360,11.138762,11.122490,11.105386,11.124247,11.229457,11.322763,11.158929,11.111439];
  var SAV_FROM_YEAR = 1947;
  var savHistory = (
    "7.4 5.0 7.1 5.8 6.9 8.6 10 9.7 7.8 6.8 7.2 6.3 11.5 9.8 6.3 9.7 7.6 12.2 12.2 11.5 11.2 10.6 11.9 10.7 10.6 11.2 10.9 11.2 11.3 10.3 9.9 9.9 9.3 9.5 10 9.9 10.6 11.1 11.3 11.5 11.1 11.6 11.4 10.7 11.2 11.1 11.6 11.8 10.7 10.8 9.7 10.2 10.3 9.7 10.2 10 10.9 10.9 11.7 11.6 11.6 11.4 11.1 10.7 10.8 10.7 10.4 11.1 11.1 11.9 11.4 12.1 11.2 11.2 12.0 11.4 11.0 11.0 11.0 11.7 12.5 11.9 12.4 12.5 11.9 12.0 10.6 10.9 10.1 10.3 11.7 11.6 12.0 12.6 13.3 13.3 13.4 13.8 13.6 13.1 12.4 11.6 12.0 13.4 12.6 13.3 13.4 14.5 14.0 12.9 12.6 13.7 12.8 15.3 12.9 12.7 12.1 11.8 11.6 11.0 10.1 10.5 10.8 11.2 11.3 10.4 10.7 10.5 11.1 10.4 9.9 9.8 10.1 11.4 11.5 11.4 10.8 10.8 12.2 12.8 12.2 12.4 12.2 11.0 11.0 9.8 9.5 10.0 11.0 11.1 11.6 11.1 9.2 10.1 8.2 8.9 9.3 9.5 8.4 7.9 8.5 6.4 7.0 8.2 8.1 8.5 8.6 8.4 8.9 8.1 7.9 8.2 8.2 8.7 8.3 8.2 8.8 8.7 8.7 9.4 9.6 9.9 9.3 8.8 8.7 8.2 7.3 7.2 6.7 6.9 6.7 7.0 7.5 6.8 6.7 6.5 6.5 6.3 6.4 6.1 6.0 6.3 5.8 6.1 7.0 6.7 6.4 5.8 5.9 4.5 4.1 3.9 4.1 4.3 4.5 4.2 4.7 4.4 6.3 3.3 5.5 5.9 5.4 5.5 5.1 5.1 5.5 5.0 4.6 5.0 4.5 4.5 2.5 2.2 1.8 2.4 3.2 3.0 2.4 2.6 2.7 2.8 2.4 2.2 2.8 4.6 3.5 5.6 5.7 6.8 5.1 5.3 5.4 6.2 6.1 6.0 6.6 6.3 6.6 6.6 7.4 7.9 7.0 9.1 4.8 5.3 5.2 4.6 5.3 5.5 5.5 5.7 6.2 5.8 5.6 5.8 5.9 5.2 5.1 5.2 5.5 6.0 6.0 5.5 5.8 6.1 6.6 7.2 8.2 7.3 6.9 6.7 8.9 24.4 15.1 12.2 20.0 10.4 8.6 6.7 3.8 2.5 3.3 3.8 5.5 5.9 5.4 5.5 6.2 5.8 5.1 4.7 5.2 5.0 4.4 3.8 3.9 2.8"
  ).split(" ").map(Number);
  // the data has to be right before anything draws it (the Version 305 rule): both series state their own
  // extremes at FRED, so assert them rather than trusting the transcription
  function checkHouseholdHistories(){
    var dHi = Math.max.apply(null, dsrHistory), dLo = Math.min.apply(null, dsrHistory);
    if (dsrHistory.length !== 86 || Math.abs(dHi - 15.846367) > 1e-6 || Math.abs(dLo - 9.051457) > 1e-6)
      console.warn("dsrHistory failed its check", dsrHistory.length, dHi, dLo);
    var sHi = Math.max.apply(null, savHistory), sLo = Math.min.apply(null, savHistory);
    if (savHistory.length !== 318 || Math.abs(sHi - 24.4) > 1e-9 || Math.abs(sLo - 1.8) > 1e-9)
      console.warn("savHistory failed its check", savHistory.length, sHi, sLo);
  }
  GYN.step("checkHouseholdHistories", checkHouseholdHistories, "check"); checkHouseholdHistories();
  // the saving rate on the debt series' clock, so one index reads both
  var SAV_OFFSET = (DSR_FROM_YEAR - SAV_FROM_YEAR) * 4;
  var dsrNow = dsrHistory[dsrHistory.length - 1];
  var savNow = savHistory[savHistory.length - 1];
  var DSR_MEAN = dsrHistory.reduce(function(a, b){ return a + b; }, 0) / dsrHistory.length;
  /* The word is about the PAIR, because either number alone misleads. The bill is the lighter half of the
     story today — 11.1% against this series' own 12.4% average, a third off its 2007 peak — and a row reading
     "manageable" off that alone would be saying the opposite of what the page shows. The buffer is what is
     thin. So the saving rate sets the band and the bill can only make it worse, never better. */
  function householdsWord(bill, kept){
    var heavy = bill > DSR_MEAN;
    if (kept < 3)   return { word:heavy ? "Overstretched" : "Stretched",  state:"serious" };
    if (kept < 4.5) return { word:heavy ? "Stretched"     : "Thin cover", state:"warning" };
    if (kept < 7)   return { word:heavy ? "Thin cover"    : "Covered",    state:"good" };
    return                 { word:heavy ? "Covered" : "Well covered",     state:"good" };
  }
  var householdsNow = householdsWord(dsrNow, savNow);
  /* Version 492, Keren: "households don't have test components." Two readings, so two rows — and two bands
     built the two ways this app already uses. The bill is ONE-SIDED at the series’ own mean, which is not a
     new number: `householdsWord` above has used DSR_MEAN as its "heavy" line since this page was built, so the
     bar now draws the line the word was already using and the two cannot disagree. The cushion takes the
     percentile construction, on a series that runs back to 1947 — 318 quarters with no policy floor anywhere
     in them, which is exactly what the 10-year lacks. */
  var SAV_BAND_LO = 4.5, SAV_BAND_HI = 12.2;   // 10th and 90th percentiles of savHistory, 1947 Q1 on
  var dsrMeter = { min:9.0, max:15.9, value:dsrNow,
                   optimal:{ lte:Number(DSR_MEAN.toFixed(1)), label:"\u2264 " + DSR_MEAN.toFixed(1) + "%" },
                   ends:{ zone:"Series average", high:"Heavy" } };
  var savMeter = { min:1.8, max:24.4, value:savNow,
                   optimal:{ from:SAV_BAND_LO, to:SAV_BAND_HI, label:SAV_BAND_LO + "\u2013" + SAV_BAND_HI + "%" },
                   ends:{ low:"Thin", high:"Deep" } };
  function dsrInfoHtml(){
    return '<h4>Debt service</h4>' +
      '<p class="caption">What households pay each quarter in required payments on mortgages and consumer debt, ' +
        'as a share of disposable income (' + qAtIndex(DSR_FROM_YEAR, dsrHistory.length - 1) + '). The ends of the ' +
        'track are the record: 15.8% in 2007 Q4, at the top of the housing boom, and 9.1% in 2020 Q2, when ' +
        'payments were being deferred and incomes were being topped up at once.</p>' +
      '<p class="caption" style="margin-top:10px;">The line is <b>this series\u2019 own average since ' + DSR_FROM_YEAR +
        ', ' + DSR_MEAN.toFixed(1) + '%</b> \u2014 and it is the same line this page\u2019s verdict already used, rather ' +
        'than a second opinion drawn beside it. It is one-sided on purpose: a light debt bill is not a condition ' +
        'to flag, and what the reading answers is how far ABOVE the average the burden sits. Today it is below, ' +
        'about a third off the 2007 peak, and has been flat for two years.</p>' +
      '<p class="caption" style="margin-top:10px;">Read it with the cushion below, never alone. The bill is the ' +
        'lighter half of this page\u2019s story; the thin part is what is left over.</p>' +
      srcBlock([
        {t:"Federal Reserve via FRED \u2014 Household Debt Service Payments as a Percent of Disposable Personal Income (TDSP)", u:"https://fred.stlouisfed.org/series/TDSP"}
      ]);
  }
  function savInfoHtml(){
    return '<h4>Saving rate</h4>' +
      '<p class="caption">What is left after households have spent and paid tax, as a share of disposable ' +
        'income. The ends of the track are the record: 1.8% and 24.4% \u2014 the second of those is 2020, when the ' +
        'stimulus payments arrived and there was nothing open to spend them in.</p>' +
      '<p class="caption" style="margin-top:10px;"><b>The 4.5\u201312.2% band is computed rather than chosen</b>: the ' +
        'tenth to ninetieth percentile of the 318 quarters since 1947, a record long enough to have held every ' +
        'kind of decade. Today\u2019s ' + savNow.toFixed(1) + '% sits <b>below</b> it \u2014 only ' +
        savHistory.filter(function(v, i){ return v <= savNow && i < savHistory.length - 1; }).length +
        ' of those quarters have been lower, and a run of them came between 2005 and early 2008.</p>' +
      '<p class="caption" style="margin-top:10px;">This is the reading that sets the page\u2019s word, and the bill ' +
        'above can only make it worse, never better: a household with a cushion can carry a heavy bill, and one ' +
        'without cannot carry a light one.</p>' +
      srcBlock([
        {t:"BEA via FRED \u2014 Personal Saving Rate (PSAVERT)", u:"https://fred.stlouisfed.org/series/PSAVERT"}
      ]);
  }

  var sp500AnnualReturns = {
    1990:-3.10, 1991:30.47, 1992:7.62, 1993:10.08, 1994:1.32, 1995:37.58, 1996:22.96, 1997:33.36,
    1998:28.58, 1999:21.04, 2000:-9.10, 2001:-11.89, 2002:-22.10, 2003:28.68, 2004:10.88, 2005:4.91,
    2006:15.79, 2007:5.49, 2008:-37.00, 2009:26.46, 2010:15.06, 2011:2.11, 2012:16.00, 2013:32.39,
    2014:13.69, 2015:1.38, 2016:11.96, 2017:21.83, 2018:-4.38, 2019:31.49, 2020:18.40, 2021:28.71,
    2022:-18.11, 2023:26.29, 2024:25.02, 2025:17.88, 2026:14.40
  };
  // Today's curve, computed once and read everywhere (the discipline Version 231 set for the reading
  // this replaced) — the gauge, the ring, the subject row and the Highlights card are ONE number.
  var curveNow = fearCurve();
  var curveTag = curveVerdict(curveNow);
  var curveSub = "Cboe, " + vixRow.sub;
  /* The 0-100 the half-dial and the ring are drawn on. 0.80 to 1.20 puts the flat curve — the only
     threshold there is — exactly at the middle of the arc, where the dial's one top label sits. It
     is a drawing scale, not a band: nothing is judged by it. */
  function curvePct(r){ return r == null ? 0 : Math.max(0, Math.min(100, (r - 0.8) / 0.4 * 100)); }
  var curveNoteFull = "The 30-day VIX divided by the 3-month VIX \u2014 the SHAPE of expected volatility rather " +
    "than its level. Below 1.00 the curve slopes up, which is its ordinary state: insuring three months costs " +
    "more than insuring one, as it should. At 1.00 it is flat. Above 1.00 it is inverted, and near-term fear " +
    "costs more than three-month fear \u2014 the options market pricing something immediate. That threshold is the " +
    "definition of the shape rather than a level anyone chose, which is why this reading carries no band of " +
    "ours. It says what the VIX beside it cannot: the VIX is how MUCH fear is priced, this is WHERE IN TIME it " +
    "sits. A calm VIX on a steep curve is ordinary quiet; the same calm VIX on an inverted curve is a market " +
    "braced for something close. Read contrarian, like the rest of this panel \u2014 an inversion is uncomfortable " +
    "and inversions cluster near bottoms, while a very steep curve is the market paying almost nothing to be " +
    "wrong. Both legs are Cboe indices carried by FRED and published daily; the ratio is computed here from " +
    "the same VIX the row below prints." +
    (curveNow == null ? " No reading today: one of the two legs is missing."
      : " Today " + curveNow.toFixed(2) + " \u2014 " + (curveNow >= 1
          ? "inverted, with the near month priced above the three-month."
          : "the ordinary upward slope, with the near month priced below the three-month."));
  function curveDetailHtml(){
    return '<h4>Fear curve</h4><div class="marker-sub">' + curveSub + '</div>' + factsFrom(curveNoteFull);
  }

  // The calendar-year figures are S&P Dow Jones Indices' own total-return numbers (index originator). S&P DJI
  // publishes them in its factsheets but not as a free full-history table, so the compiled table is linked too,
  // cross-checked (Sep 2026) year by year against NYU Stern's independently computed series — every year within
  // 0.5 points, differences reflecting dividend-reinvestment timing, not disagreement about the return.
  var sp500AnnualReturnSource = [
    {t:"S&P Dow Jones Indices — S&P 500 (index originator; total-return figures)", u:"https://www.spglobal.com/spdji/en/indices/equity/sp-500/"},
    {t:"S&P 500 total returns by year (Slickcharts' compilation of S&P DJI's figures)", u:"https://www.slickcharts.com/sp500/returns"},
    {t:"NYU Stern (Damodaran) — Historical returns on stocks, bonds and bills, 1928– (independent cross-check)", u:"https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/histretSP.html"}
  ];

  /* Version 511, Keren, the structural change: "it feels unnatural for the dot-com growth to be 1995–1999 and
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
     To close an era: set its `to` to its last BEAR year, drop `ongoing`, and open the next on the year after. */
  var marketCycles = [
    {
      from:1991, to:2002,
      name:"Dot-Com Cycle",
      blurb:"Nine years of uninterrupted growth out of the 1990–91 recession — confidence building all decade and cresting into the internet mania that gives the cycle its name — then three straight losing years to unwind it, a run of consecutive declines the market had not seen since the 1930s. The mania and its undoing are one story, and the cycle holds both."
    },
    {
      from:2003, to:2008,
      name:"Housing Cycle",
      blurb:"A rebuild out of the dot-com wreckage, carried by a housing boom that was quietly becoming the next crisis the whole way up. It ends where the boom had been heading all along: the subprime collapse, and the worst year the market had seen since 1931."
    },
    {
      from:2009, to:2018,
      name:"Big Tech Cycle",
      blurb:"One of the longest, steadiest bull markets on record — a decade of rebuilding led by a handful of technology giants that ended it carrying more of the index than any five companies before them. It closes on the trade-war scare of late 2018, the mildest ending of any cycle here: a stumble rather than a bust."
    },
    {
      from:2019, to:2022,
      name:"COVID-19 Cycle",
      blurb:"A strong year, then the fastest bear market in history as COVID-19 arrives — and one of the fastest recoveries on record, bought with the largest fiscal and monetary transfusion ever attempted. The bill arrives at the end: inflation at a four-decade high, and a sharp correction to close the cycle. Worth knowing that the pandemic crash itself never appears as a losing year — it fell and recovered inside 2020 — so this cycle's bleed is the inflation bear, not the virus."
    },
    {
      from:2023, to:null, ongoing:true,
      name:"AI Cycle",
      blurb:"Out of the 2022 correction, a bull run carried by the build-out of artificial intelligence. Three full years so far and the fourth under way, with no losing year in it yet. Still being written."
    }
  ];

  /* ---------------- The tops a reader can stand beside (Version 610, rebuilt in Version 612) ----------------
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
     chapter of the model, a top is a day. */
  var marketTops = [
    { key:"2000", cycle:"Dot-Com Cycle",  peak:"2000-03-24", trough:"2002-10-09", fall:49.1,
      y:"2000", q:"2000 Q1", m:"2000-03" },
    { key:"2007", cycle:"Housing Cycle",  peak:"2007-10-09", trough:"2009-03-09", fall:56.8,
      y:"2007", q:"2007 Q4", m:"2007-10" },
    { key:"2020", cycle:"COVID-19 Cycle", peak:"2020-02-19", trough:"2020-03-23", fall:33.9,
      y:"2020", q:"2020 Q1", m:"2020-02" },
    { key:"2022", cycle:"COVID-19 Cycle", peak:"2022-01-03", trough:"2022-10-12", fall:25.4,
      y:"2022", q:"2022 Q1", m:"2022-01" }
  ];
  var marketTopsSrc = [{ t:"Yardeni Research \u2014 Stock Market Historical Tables: Bull & Bear Markets",
                         u:"https://yardeni.com/charts/us-stock-market/stock-market-historical-trends/bull-bear-markets-corrections" }];

  // Which era is "now": the one whose range covers calendarTodayY. A lookup, not marketCycles[last], so it
  // stays correct if the open era is later closed and a new one appended.
  var currentEra = marketCycles.filter(function(c){ return calendarTodayY >= c.from && calendarTodayY <= (c.to || calendarTodayY); })[0] || marketCycles[marketCycles.length - 1];

  /* ---------------- A typical cycle's length (the dial's scale) ----------------
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
     the ring rather than overflowing it (Clue's "late" case); where each cycle stands is in cycleModel(). */
  var typicalCycleYears = 6;
  var typicalCycleSrc = [
    {t:"First Trust — History of U.S. Bear & Bull Markets since 1942 (bull 51.0 months, bear 11.1, 1962–2022)", u:"https://www.ftportfolios.com/Commentary/MarketCommentary/2019/6/4/history-of-us-bear--bull-markets"},
    {t:"Fisher Investments — Stock Market Cycles (bull about 61 months, bear about 16, 1946–2018)", u:"https://www.fisherinvestments.com/en-us/resource-library/market-cycles"}
  ];
