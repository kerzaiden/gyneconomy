  /* ---- THE FIFTH PEEK FORM: a pulse drawn as a pulse ---- */
  var pulseClipN = 0;
  function beatPath(x0, x1, y, period, amp){
    var f = function(n){ return n.toFixed(1); };
    var d = ["M" + f(x0) + "," + f(y)], x = x0, p = period, A = amp;
    while (x < x1 + p){
      d.push("H" + f(x + p * 0.08));
      d.push("Q" + f(x + p * 0.15) + "," + f(y - A * 0.24) + " " + f(x + p * 0.22) + "," + f(y));
      d.push("H" + f(x + p * 0.30));
      d.push("L" + f(x + p * 0.345) + "," + f(y + A * 0.15));
      d.push("L" + f(x + p * 0.400) + "," + f(y - A));
      d.push("L" + f(x + p * 0.455) + "," + f(y + A * 0.34));
      d.push("L" + f(x + p * 0.500) + "," + f(y));
      d.push("H" + f(x + p * 0.60));
      d.push("Q" + f(x + p * 0.71) + "," + f(y - A * 0.36) + " " + f(x + p * 0.82) + "," + f(y));
      x += p;
    }
    return d.join("");
  }
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
  function pulseBlock(rate, ref, ind){
    var slower = Math.round((1 - rate / ref) * 100);
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
  function peekCard(o){
    var art = o.ring != null ? vitalRingSvg(o.ring, o.state, null, "peek-chart peek-ring")
            : o.pulse ? pulsePeek(o.pulse.rate, o.pulse.ref)
            : o.meter ? meterPeek(o.meter, o.state)
            : o.cols ? colPeek(o.cols, o.colClass, o.colBase, o.colRule)
            : "";
    return '<button type="button" class="peek ' + o.state + '" data-open="' + o.target +
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

  function dropSvg(sw){ return markSvg(
    '<path d="M12 3.2C12 3.2 6.5 10.8 6.5 14.9A5.5 5.5 0 0 0 17.5 14.9C17.5 10.8 12 3.2 12 3.2Z" stroke-width="' + (sw || 1.7) + '"/>'); }
  function gaugeSvg(){ return markSvg(
    '<circle cx="12" cy="11.2" r="7.6" stroke-width="1.7"/>' +
    '<path d="M12 11.2 7.9 7.1" stroke-width="1.9"/>' +
    '<path d="M10.3 18.6v2.2h3.4v-2.2" stroke-width="1.6"/>'); }
  function diamondSvg(){ return markSvg(
    '<path d="M6.2 3.9h11.6l3.9 5.3L12 20.4 2.3 9.2z" stroke-width="1.7"/>' +
    '<path d="M2.3 9.2h19.4" stroke-width="1.5"/>' +
    '<path d="M6.2 3.9 8.9 9.2M17.8 3.9 15.1 9.2" stroke-width="1.35" opacity="0.75"/>'); }
  function sproutSvg(){
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<path d="M4.6 19.7 C7.6 18.8 16.4 18.8 19.4 19.7"/>' +
      '<path d="M12 19 V12.3"/>' +
      '<path d="M12 12.3 C12.1 8 15 5 19.6 4.9 C19.7 9.3 16.7 12.2 12 12.3"/>' +
      '<path d="M12 14.3 C11.9 11.4 9.9 9.5 6.3 9.4 C6.2 12.9 8.7 14.3 12 14.3"/>' +
    '</svg>';
  }
  function markSvg(body, extra){
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + body + '</svg>';
  }
  function heartSvg(){ return markSvg(
    '<path d="M12 20.3 4.6 13.1C2.4 10.9 2.5 7.4 4.8 5.6c2.1-1.6 5-1.2 6.6.8l.6.8.6-.8c1.6-2 4.5-2.4 6.6-.8 2.3 1.8 2.4 5.3.2 7.5Z" stroke-width="1.8"/>'); }
  function flameSvg(){ return markSvg(
    '<path d="M12 21.6c3.5 0 6.1-2.4 6.1-5.7 0-4.2-3.3-6.6-5.2-11.1-.4 3.1-2.2 4.7-3.6 6.2-1.8 2-3.4 3.3-3.4 4.9 0 3.3 2.6 5.7 6.1 5.7Z" stroke-width="1.7"/>' +
    '<path d="M12 21.6c1.7 0 2.9-1.2 2.9-2.8 0-1.6-1.2-2.6-2.9-4.9-1.1 1.6-2.9 3-2.9 4.9 0 1.6 1.2 2.8 2.9 2.8Z" fill="currentColor" stroke="none"/>'); }
  function clockSvg(){ return markSvg('<circle cx="12" cy="12" r="8.4" stroke-width="1.8"/><path d="M12 7.4V12l3.1 2.1" stroke-width="1.8"/>'); }
  function thermoSvg(){ return markSvg(
    '<path d="M9.9 15.5V5.9a2.1 2.1 0 0 1 4.2 0v9.6" stroke-width="1.7"/><circle cx="12" cy="17.9" r="3.5" stroke-width="1.7"/>' +
    '<path d="M12 8.6v6.6" stroke-width="2.1"/><circle cx="12" cy="17.9" r="1.7" fill="currentColor" stroke="none"/>'); }
  function stethoscopeSvg(){ return markSvg('<path d="M5.5 3.5v5a4.5 4.5 0 0 0 9 0v-5M4 3.5h3M13 3.5h3" stroke-width="1.8"/>' +
    '<path d="M10 13v2.5a4.5 4.5 0 0 0 9 0v-2" stroke-width="1.8"/><circle cx="19" cy="11" r="2.2" stroke-width="1.7"/>'); }
  function personSvg(){ return markSvg(
    '<circle cx="12" cy="8" r="3.9" stroke-width="1.8"/><path d="M4.4 20.4c.6-4 3.7-6.5 7.6-6.5s7 2.5 7.6 6.5" stroke-width="1.8"/>'); }
  function bookSvg(){ return markSvg(
    '<path d="M12 6.6C10.2 5.2 7.6 4.6 3.6 4.8v13.6c4-.2 6.6.4 8.4 1.8 1.8-1.4 4.4-2 8.4-1.8V4.8c-4-.2-6.6.4-8.4 1.8Z" stroke-width="1.7"/>' +
    '<path d="M12 6.6v13.6" stroke-width="1.7"/>'); }
  function ecgSvg(){ return markSvg(
    '<path d="M1.8 12H5.4L8.0 6.9L10.5 17.9L12.6 3.8L14.7 18.2L17.2 6.9L19.0 12H22.2" stroke-width="1.9"/>'); }
  function circulationSvg(){ return dropSvg(1.9); }
  function boltSvg(){ return markSvg('<path d="M14.2 2.4 5.2 13.6h5.9l-1.3 8 9-11.2h-5.9z" stroke-width="1.8"/>'); }
  function houseSvg(){ return markSvg(
    '<path d="M3.4 10.9 12 4.1l8.6 6.8" stroke-width="1.9"/>' +
    '<path d="M5.7 9.6v9.7h12.6V9.6" stroke-width="1.9"/>'); }
  function marketSvg(){ return markSvg(
    '<path d="M3.5 17.5 9 12l3.5 3.5L20 8" stroke-width="1.9"/>' +
    '<path d="M15 8h5v5" stroke-width="1.8"/>'); }
  function bagSvg(){ return markSvg(
    '<path d="M5.6 8.4h12.8l-1 11.2H6.6z" stroke-width="1.9"/>' +
    '<path d="M9.2 8.4V7a2.8 2.8 0 0 1 5.6 0v1.4" stroke-width="1.8"/>'); }
  function volatilitySvg(){ return markSvg(
    '<path d="M5.5 7.5v2.5M5.5 15.5v2.5M12 2.5v3M12 18.5v3M18.5 5.5v3.5M18.5 14.5v2" stroke-width="1.8"/>' +
    '<rect x="3.9" y="10" width="3.2" height="5.5" rx="0.6" stroke-width="1.8"/>' +
    '<rect x="10.4" y="5.5" width="3.2" height="13" rx="0.6" stroke-width="1.8"/>' +
    '<rect x="16.9" y="9" width="3.2" height="5.5" rx="0.6" stroke-width="1.8"/>'); }

  // ---- Market eras & yearly returns (Calendar tab + Cycle tab era headline) ----

  /* ---- Load: what households owe, and what they keep ---- */
  var DSR_FROM_YEAR = 2005;
  var dsrHistory = [14.799802,14.828576,15.139959,15.028550,14.989443,15.044255,15.367228,15.509711,15.526607,15.632510,15.712123,15.846367,15.775857,15.326612,15.546547,15.721360,15.597500,15.251967,15.085880,14.896385,14.514940,14.069775,13.917807,13.580863,13.308460,13.057706,12.944597,12.749684,12.237059,12.034065,12.083107,11.754033,12.006598,11.794391,11.837713,11.985283,11.883758,11.621140,11.646947,11.631993,11.556634,11.485147,11.606488,11.738976,11.763247,11.766109,11.769855,11.865818,11.723758,11.756991,11.818444,11.816704,11.644589,11.598389,11.619573,11.666416,11.499920,11.626991,11.646611,11.727653,11.591164,9.739844,10.058510,10.389381,9.051457,9.841025,10.009597,10.228796,10.472393,10.684739,10.567838,10.736945,10.564109,10.577002,10.747842,11.096141,11.058908,11.019360,11.138762,11.122490,11.105386,11.124247,11.229457,11.322763,11.158929,11.111439];
  var SAV_FROM_YEAR = 1947;
  var savHistory = (
    "7.4 5.0 7.1 5.8 6.9 8.6 10 9.7 7.8 6.8 7.2 6.3 11.5 9.8 6.3 9.7 7.6 12.2 12.2 11.5 11.2 10.6 11.9 10.7 10.6 11.2 10.9 11.2 11.3 10.3 9.9 9.9 9.3 9.5 10 9.9 10.6 11.1 11.3 11.5 11.1 11.6 11.4 10.7 11.2 11.1 11.6 11.8 10.7 10.8 9.7 10.2 10.3 9.7 10.2 10 10.9 10.9 11.7 11.6 11.6 11.4 11.1 10.7 10.8 10.7 10.4 11.1 11.1 11.9 11.4 12.1 11.2 11.2 12.0 11.4 11.0 11.0 11.0 11.7 12.5 11.9 12.4 12.5 11.9 12.0 10.6 10.9 10.1 10.3 11.7 11.6 12.0 12.6 13.3 13.3 13.4 13.8 13.6 13.1 12.4 11.6 12.0 13.4 12.6 13.3 13.4 14.5 14.0 12.9 12.6 13.7 12.8 15.3 12.9 12.7 12.1 11.8 11.6 11.0 10.1 10.5 10.8 11.2 11.3 10.4 10.7 10.5 11.1 10.4 9.9 9.8 10.1 11.4 11.5 11.4 10.8 10.8 12.2 12.8 12.2 12.4 12.2 11.0 11.0 9.8 9.5 10.0 11.0 11.1 11.6 11.1 9.2 10.1 8.2 8.9 9.3 9.5 8.4 7.9 8.5 6.4 7.0 8.2 8.1 8.5 8.6 8.4 8.9 8.1 7.9 8.2 8.2 8.7 8.3 8.2 8.8 8.7 8.7 9.4 9.6 9.9 9.3 8.8 8.7 8.2 7.3 7.2 6.7 6.9 6.7 7.0 7.5 6.8 6.7 6.5 6.5 6.3 6.4 6.1 6.0 6.3 5.8 6.1 7.0 6.7 6.4 5.8 5.9 4.5 4.1 3.9 4.1 4.3 4.5 4.2 4.7 4.4 6.3 3.3 5.5 5.9 5.4 5.5 5.1 5.1 5.5 5.0 4.6 5.0 4.5 4.5 2.5 2.2 1.8 2.4 3.2 3.0 2.4 2.6 2.7 2.8 2.4 2.2 2.8 4.6 3.5 5.6 5.7 6.8 5.1 5.3 5.4 6.2 6.1 6.0 6.6 6.3 6.6 6.6 7.4 7.9 7.0 9.1 4.8 5.3 5.2 4.6 5.3 5.5 5.5 5.7 6.2 5.8 5.6 5.8 5.9 5.2 5.1 5.2 5.5 6.0 6.0 5.5 5.8 6.1 6.6 7.2 8.2 7.3 6.9 6.7 8.9 24.4 15.1 12.2 20.0 10.4 8.6 6.7 3.8 2.5 3.3 3.8 5.5 5.9 5.4 5.5 6.2 5.8 5.1 4.7 5.2 5.0 4.4 3.8 3.9 2.8"
  ).split(" ").map(Number);
  function checkHouseholdHistories(){
    var dHi = Math.max.apply(null, dsrHistory), dLo = Math.min.apply(null, dsrHistory);
    if (dsrHistory.length !== 86 || Math.abs(dHi - 15.846367) > 1e-6 || Math.abs(dLo - 9.051457) > 1e-6)
      console.warn("dsrHistory failed its check", dsrHistory.length, dHi, dLo);
    var sHi = Math.max.apply(null, savHistory), sLo = Math.min.apply(null, savHistory);
    if (savHistory.length !== 318 || Math.abs(sHi - 24.4) > 1e-9 || Math.abs(sLo - 1.8) > 1e-9)
      console.warn("savHistory failed its check", savHistory.length, sHi, sLo);
  }
  GYN.step("checkHouseholdHistories", checkHouseholdHistories, "check"); checkHouseholdHistories();
  var SAV_OFFSET = (DSR_FROM_YEAR - SAV_FROM_YEAR) * 4;
  var dsrNow = dsrHistory[dsrHistory.length - 1];
  var savNow = savHistory[savHistory.length - 1];
  var DSR_MEAN = dsrHistory.reduce(function(a, b){ return a + b; }, 0) / dsrHistory.length;
  function householdsWord(bill, kept){
    var heavy = bill > DSR_MEAN;
    if (kept < 3)   return { word:heavy ? "Overstretched" : "Stretched",  state:"serious" };
    if (kept < 4.5) return { word:heavy ? "Stretched"     : "Thin cover", state:"warning" };
    if (kept < 7)   return { word:heavy ? "Thin cover"    : "Covered",    state:"good" };
    return                 { word:heavy ? "Covered" : "Well covered",     state:"good" };
  }
  var householdsNow = householdsWord(dsrNow, savNow);
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

  var sp500AnnualReturns = merge(sp500ReturnsBefore, {
    1990:-3.10, 1991:30.47, 1992:7.62, 1993:10.08, 1994:1.32, 1995:37.58, 1996:22.96, 1997:33.36,
    1998:28.58, 1999:21.04, 2000:-9.10, 2001:-11.89, 2002:-22.10, 2003:28.68, 2004:10.88, 2005:4.91,
    2006:15.79, 2007:5.49, 2008:-37.00, 2009:26.46, 2010:15.06, 2011:2.11, 2012:16.00, 2013:32.39,
    2014:13.69, 2015:1.38, 2016:11.96, 2017:21.83, 2018:-4.38, 2019:31.49, 2020:18.40, 2021:28.71,
    2022:-18.11, 2023:26.29, 2024:25.02, 2025:17.88, 2026:14.40
  });
  var curveSub = "Cboe, " + vixRow.sub;
  function vixPct(v){
    var m = vixRow.meter;
    return v == null ? 0 : Math.max(0, Math.min(100, 100 * Math.log(v / m.min) / Math.log(m.max / m.min)));
  }
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
    "the same VIX this page prints.";
  function volatilityRing(){
    var m = vixRow.meter;
    return vitalRingSvg(vixPct(m.value), "accent", "VIX at " + m.value.toFixed(2) + ", between its record low of " +
      m.min + " and its record high of " + m.max);
  }
  var VOL_JOIN = "1990-01";
  function volatilityDetailHtml(){
    var m = vixRow.meter;
    return '<h4>Volatility</h4><div class="marker-sub">' + curveSub + '</div>' + facts([
      'The <b>VIX</b> is Cboe\u2019s volatility index: what options traders pay to insure the S&amp;P 500 against a fall ' +
        'over the next thirty days, as an annual rate.',
      'It climbs when the market is frightened and sinks when it is calm, so it reads contrarian: panic gathers near ' +
        'bottoms, complacency near tops.',
      'The chart is the <b>monthly average of daily closes</b>. Before ' + monthLabel(VOL_JOIN) + ' it is the <b>VXO</b>, ' +
        'Cboe\u2019s original VIX, computed on the S&amp;P 100; the VIX takes over from its first month.',
      'By market convention a VIX <b>below ' + VIX_CALM + '</b> reads calm, <b>' + VIX_CALM + ' to ' + VIX_FEAR + '</b> elevated, ' +
        'and <b>above ' + VIX_FEAR + '</b> fearful; the chart hangs from ' + VIX_CALM + '. The lines are the convention\u2019s, not ours.',
      'Daily record on the VIX since 1990: <b>' + m.min + '</b> low, <b>' + m.max + '</b> high.'
    ]) + srcBlock(sentiment.src.concat(VIX_CONVENTION));
  }

  var sp500AnnualReturnSource = [
    {t:"S&P Dow Jones Indices — S&P 500 (index originator; total-return figures)", u:"https://www.spglobal.com/spdji/en/indices/equity/sp-500/"},
    {t:"S&P 500 total returns by year (Slickcharts' compilation of S&P DJI's figures)", u:"https://www.slickcharts.com/sp500/returns"},
    {t:"NYU Stern (Damodaran) — Historical returns on stocks, bonds and bills, 1928– (the record before 1990, and an independent cross-check after)", u:"https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/histretSP.html"}
  ];
  // ---- The S&P 500, year by year ----
  var sp500Years = Object.keys(sp500AnnualReturns).map(function(y){ return { y:+y, v:sp500AnnualReturns[y] }; });
  function marketWord(v){
    if (v >= 0) return { state:"good", text:"Bull year", says:"a positive total return, which the dial draws as a bull year" };
    return { state:"serious", text:"Bear year", says:"a negative total return, which the dial draws as a bear year" };
  }
  function marketCol(v){ return "dv-bar " + (v >= 0 ? "over" : "under"); }
  function marketPeek(y, from){
    var v = sp500AnnualReturns[y], w = v == null ? null : marketWord(v);
    return w && peekOf("sheet-sign-market", { value:fmtSigned(v, 1) + "%", word:w.text, state:w.state, colBase:0, colRule:true,
      cols:sp500Years.filter(function(d){ return d.y >= from && d.y <= y; }).map(function(d){ return d.v; }), colClass:marketCol });
  }
  var marketReading = (function(h){
    var now = h[h.length - 1], word = marketWord(now.v), open = now.y === calendarTodayY;
    var lo = h.reduce(function(a, d){ return d.v < a.v ? d : a; }), hi = h.reduce(function(a, d){ return d.v > a.v ? d : a; });
    var span = fmtSigned(lo.v, 1) + "% (" + lo.y + ") to " + fmtSigned(hi.v, 1) + "% (" + hi.y + ")";
    return {
      bodyTerm:"S&P 500", info:function(){ return marketInfoHtml(marketReading); },
      page:{ bare:true, chart:function(){ return '<div id="sheet-sign-market-chart"></div><div id="sheet-sign-market-highlights"></div>'; } },
      econTerm:"S&P 500", metricSub:"total return", now:now, lo:lo, hi:hi, open:open,
      metric:fmtSigned(now.v, 1) + "%", tag:{ state:word.state, text:word.text }, wordSays:word.says,
      meter:{ min:lo.v, max:hi.v, value:now.v, optimal:{ gte:0, label:"\u2265 0%" }, ends:{ low:"Bear year" } },
      span:span,
      get peek(){
        return colPeek(sp500Years.map(function(d){ return d.v; }), marketCol, 0, true);
      },
      lead:"",
      caption:now.y + (open ? " so far" : "") + ", the S&P 500 at " + fmtSigned(now.v, 1) + "% with dividends, " + word.says +
        ". The track runs over every year since " + h[0].y + ": " + span + "."
    };
  })(sp500Years);
  function marketInfoHtml(f){
    return '<h4>' + f.econTerm + '</h4>' +
      '<p class="caption">The reading is <b>' + f.tag.text + '</b>: ' + f.metric + ' in ' + f.now.y + (f.open ? ' so far' : '') + ', ' + f.wordSays + '. ' +
        'The record, year by year, runs ' + f.span + '.</p>' +
      '<p class="caption" style="margin-top:10px;"><b>The zero line is the definition, not a band</b>: a year the index ends higher, ' +
        'dividends included, is a bull year and one it ends lower is a bear year. These are the same years the dial\u2019s inner band ' +
        'colours, so the card, this chart and the cycle read one number.' + (f.open ? ' ' + f.now.y + ' is still open, so its bar is the year so far.' : '') + '</p>' +
      srcBlock(sp500AnnualReturnSource);
  }

  var marketCycles = [
    {
      from:1928, to:1932,
      name:"Great Depression Cycle",
      story:"The Roaring Twenties ended in the crash of October 1929, and bank failures, tight money and a tariff war turned it into the Great Depression. Mrs. Market fell from Euphoria into the deepest Despair in the record, four bear years in a row.",
      blurb:"The last boom year of the Twenties, then the crash of 1929 and three more years of falling prices, failing banks and lost jobs. It ends in 1932, at the bottom of the Great Depression."
    },
    {
      from:1933, to:1934,
      name:"New Deal Cycle",
      story:"Roosevelt closed the banks, took the dollar off gold and launched the New Deal, and 1933 became one of the best years in the record. Mrs. Market leapt from Depression to Hope in a few months, then lost her nerve in 1934 as the recovery came slowly.",
      blurb:"The New Deal: the bank holiday, the dollar off gold and the first relief programmes. It ends in 1934, a flat year after the leap of 1933."
    },
    {
      from:1935, to:1937,
      name:"Recovery Cycle",
      story:"Output climbed back toward its 1929 level, until the Fed raised reserve requirements and Washington cut spending in 1937. Mrs. Market grew Optimistic too soon and fell back into Fear in the recession of 1937–38.",
      blurb:"Two strong years of recovery, then the policy turn of 1937 and a sharp recession inside the Depression. It ends in 1937, one of the worst years in the record."
    },
    {
      from:1938, to:1941,
      name:"War Clouds Cycle",
      story:"The market bounced in 1938, but war in Europe, the fall of France and then Pearl Harbor kept it falling for three years. Mrs. Market lived in Anxiety and Fear, even as war orders put the factories back to work.",
      blurb:"A rebound year, then three bear years as the war in Europe spreads and America is drawn in. It ends in 1941, the year of Pearl Harbor."
    },
    {
      from:1942, to:1946,
      name:"Victory Cycle",
      story:"After Midway the tide of the war turned, and war production with price controls carried four rising years to victory in 1945. Mrs. Market went from Hope to Euphoria, until controls ended in 1946, prices jumped and she fell back into Anxiety.",
      blurb:"The war economy at full stretch, from the turn of 1942 to victory in 1945. It ends in 1946, when price controls lift and inflation surges."
    },
    {
      from:1947, to:1953,
      name:"Baby Boom Cycle",
      story:"Soldiers came home and started families in record numbers, while Marshall Plan exports and then the Korean War kept the factories busy. Mrs. Market climbed out of the postwar slump into a steady Optimism that held for six years, until the war’s end and the 1953 recession brought her first Anxiety.",
      blurb:"The baby boom begins: new households, years of pent-up demand, Marshall Plan exports and then the Korean War. It ends in 1953, the year the war ended and military spending was cut."
    },
    {
      from:1954, to:1957,
      name:"Suburban Cycle",
      story:"Cars, highways and new suburbs carried the economy, and 1954 became the best year in the record. Mrs. Market went from Hope to Euphoria in a single year, then slid into Anxiety as rates rose and the 1957 recession arrived.",
      blurb:"Out of the 1953–54 recession comes the best year in the record, 1954, and a boom in cars, highways and new suburbs. It ends with the recession of 1957."
    },
    {
      from:1958, to:1962,
      name:"Space Race Cycle",
      story:"Sputnik set off a race in rockets and electronics, and almost any company with “tronics” in its name found buyers. Mrs. Market rode that Excitement into Thrill, until the slide of 1962 turned it to Fear.",
      blurb:"Sputnik sets off a race in rockets and electronics, and the market chases the new technology stocks of the day. It ends in the slide of 1962."
    },
    {
      from:1963, to:1966,
      name:"Great Society Cycle",
      story:"The 1964 tax cut and Johnson’s Great Society spending, then the build-up in Vietnam, stretched the long 1960s expansion. Mrs. Market was Thrilled and sure of herself, until inflation, rising rates and the credit crunch of 1966 left her Anxious.",
      blurb:"The 1964 tax cut, the Great Society programmes and a long expansion running hot. It ends in 1966 as rates climb and credit tightens."
    },
    {
      from:1967, to:1969,
      name:"Go-Go Cycle",
      story:"Go-go fund managers traded growth stocks at speed, and conglomerates grew by buying everything in sight, their earnings flattered by the deals themselves. Mrs. Market was in Euphoria about them, and in Denial as inflation and the credit crunch of 1969 took them apart.",
      blurb:"The go-go funds and the conglomerates peak in 1968, with speculation running alongside. It ends in 1969 as inflation and rising rates catch up."
    },
    {
      from:1970, to:1974,
      name:"Nifty Fifty Cycle",
      story:"Investors crowded into fifty blue chips they believed could be bought at any price and held forever. Mrs. Market’s Euphoria turned to Fear with the oil embargo of 1973, and to Panic and Despair in 1974, her worst year since 1937.",
      blurb:"Investors crowd into fifty blue-chip growth stocks they believe can be bought at any price. It ends in the bear market of 1973–74, with the oil embargo and a deep recession."
    },
    {
      from:1975, to:1977,
      name:"Bicentennial Cycle",
      story:"Out of the 1974 collapse came one of the sharpest rebounds in the record, +37% in 1975, and the rally ran into the Bicentennial year before topping out late in 1976. Mrs. Market moved from Despair back to Hope and Optimism, but inflation never left, and by 1977 she was Anxious again.",
      blurb:"A sharp recovery out of the 1973–74 collapse that tops out in the Bicentennial year, with inflation never far behind. It ends in 1977 as prices start to run again."
    },
    {
      from:1978, to:1981,
      name:"Volcker Cycle",
      story:"Prices ran into double digits, and money fled into oil, gold and anything real. Mrs. Market was Excited but uneasy throughout, and fell into Fear in 1981 when Volcker raised rates high enough to break inflation.",
      blurb:"Inflation runs into double digits and hard assets like oil and gold lead, until Paul Volcker takes the Fed in 1979. It ends in 1981, when his rates, near 20%, break it."
    },
    {
      from:1982, to:1990,
      name:"Buyout Cycle",
      story:"With inflation beaten and rates falling, a long bull market ran on junk bonds and leveraged buyouts. Mrs. Market’s Euphoria broke in the one-day Panic of October 1987, came back, and ended in Fear in 1990 with the savings-and-loan collapse and the Gulf War.",
      blurb:"The defeat of inflation opens a long bull market, fuelled by falling rates, junk bonds and leveraged buyouts, through the crash of 1987. It ends in 1990 with the savings-and-loan collapse, the Gulf War oil shock and recession."
    },
    {
      from:1991, to:2002,
      name:"Dot-Com Cycle",
      story:"The internet promised a new economy, and the market believed it for nine straight years. Mrs. Market climbed from Hope to full Euphoria in 1999, then spent three years in Denial, Fear and finally Despair as the bubble burst.",
      blurb:"Nine years of uninterrupted growth out of the 1990–91 recession — confidence building all decade and cresting into the internet mania that gives the cycle its name — then three straight losing years to unwind it, a run of consecutive declines the market had not seen since the 1930s. The mania and its undoing are one story, and the cycle holds both."
    },
    {
      from:2003, to:2008,
      name:"Housing Cycle",
      story:"Cheap money and easy mortgages made houses the boom, and the banks built a tower of debt on top of them. Mrs. Market was Optimistic and then Thrilled, until Lehman’s collapse in 2008 sent her into Panic and Despair.",
      blurb:"A rebuild out of the dot-com wreckage, carried by a housing boom that was quietly becoming the next crisis the whole way up. It ends where the boom had been heading all along: the subprime collapse, and the worst year the market had seen since 1931."
    },
    {
      from:2009, to:2018,
      name:"Big Tech Cycle",
      story:"Out of the crisis, near-zero rates and a handful of technology giants carried one of the longest bull markets on record. Mrs. Market crept from Despair to Hope and stayed Optimistic for a decade, until the trade war and rising rates left her Anxious at the end of 2018.",
      blurb:"One of the longest, steadiest bull markets on record — a decade of rebuilding led by a handful of technology giants that ended it carrying more of the index than any five companies before them. It closes on the trade-war scare of late 2018, the mildest ending of any cycle here: a stumble rather than a bust."
    },
    {
      from:2019, to:2022,
      name:"COVID-19 Cycle",
      story:"A strong 2019, then the pandemic brought the fastest crash on record and the largest rescue ever attempted. Mrs. Market went from Panic to Euphoria inside a year, and into Fear in 2022 as inflation returned and the Fed raised rates at its fastest pace in decades.",
      blurb:"A strong year, then the fastest bear market in history as COVID-19 arrives — and one of the fastest recoveries on record, bought with the largest fiscal and monetary transfusion ever attempted. The bill arrives at the end: inflation at a four-decade high, and a sharp correction to close the cycle. Worth knowing that the pandemic crash itself never appears as a losing year — it fell and recovered inside 2020 — so this cycle's bleed is the inflation bear, not the virus."
    },
    {
      from:2023, to:null, ongoing:true,
      name:"AI Cycle",
      story:"Out of the 2022 correction, the build-out of artificial intelligence became the story everyone wanted to own. Mrs. Market has moved from Hope into Optimism and Excitement, and the cycle is still being written.",
      blurb:"Out of the 2022 correction, a bull run carried by the build-out of artificial intelligence. Three full years so far and the fourth under way, with no losing year in it yet. Still being written."
    }
  ];

  var currentEra = marketCycles.filter(function(c){ return calendarTodayY >= c.from && calendarTodayY <= (c.to || calendarTodayY); })[0] || marketCycles[marketCycles.length - 1];

  /* ---- A typical cycle's length (the dial's scale) ---- */
  var typicalCycleYears = 6;
  var typicalCycleSrc = [
    {t:"First Trust — History of U.S. Bear & Bull Markets since 1942 (bull 51.0 months, bear 11.1, 1962–2022)", u:"https://www.ftportfolios.com/Commentary/MarketCommentary/2019/6/4/history-of-us-bear--bull-markets"},
    {t:"Fisher Investments — Stock Market Cycles (bull about 61 months, bear about 16, 1946–2018)", u:"https://www.fisherinvestments.com/en-us/resource-library/market-cycles"}
  ];
