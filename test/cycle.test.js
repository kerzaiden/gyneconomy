#!/usr/bin/env node
const fs = require('fs'), path = require('path');

const SRC = fs.readFileSync(path.join(__dirname, '..', 'src/js/08-model.js'), 'utf8');
function lift(names) {
  const consts = /\n {2}(var CALM = [^\n]*;)/.exec(SRC);
  if (!consts) throw new Error('the diagnosis cut-offs are not in 08-model.js');
  let out = consts[1] + '\n';
  for (const n of names) {
    const start = SRC.indexOf('  function ' + n + '(');
    if (start < 0) throw new Error('not found in 08-model.js: ' + n);
    let i = SRC.indexOf('{', start), depth = 0, j = i;
    for (; j < SRC.length; j++) {
      if (SRC[j] === '{') depth++;
      else if (SRC[j] === '}') { depth--; if (!depth) break; }
    }
    out += SRC.slice(start, j + 1) + '\n';
  }
  return new Function(out + 'return { ' + names.join(', ') + ', CUTS: { CALM, FRIGHTENED, RISE, SLOWING, NEAR_HIGH, STRETCHED } };')();
}
const { seasonHalf, rankToDate, readFeeling, readPosture, CUTS } = lift(['seasonHalf', 'rankToDate', 'readFeeling', 'readPosture']);

let pass = 0, fail = 0;
function ok(label, got, want) {
  const g = JSON.stringify(got), w = JSON.stringify(want);
  if (g === w) { pass++; console.log('  ok   ' + label.padEnd(58) + g); }
  else { fail++; console.log('  FAIL ' + label + '\n       got  ' + g + '\n       want ' + w); }
}
const base = { dd: 0, mom: 0.2, share: 0.9, wasNegative: false, fear: 40, fear3: 40, fearPeak: 40, stretch: 50 };
const feel = o => readFeeling(Object.assign({}, base, o));

console.log('\nThe cut-offs Keren confirmed (V664)\n');
ok('calm, frightened, rising, slowing, near the high, stretched', CUTS,
   { CALM: 20, FRIGHTENED: 80, RISE: 20, SLOWING: 0.65, NEAR_HIGH: 0.05, STRETCHED: 80 });

console.log('\nseasonHalf — all six seasons\n');
ok('Summer and both Autumns are warm', ['summer', 'autumn', 'lateautumn'].map(seasonHalf), ['warm', 'warm', 'warm']);
ok('Winter and both Springs are cool', ['winter', 'spring', 'springdeflation'].map(seasonHalf), ['cool', 'cool', 'cool']);

console.log('\nrankToDate\n');
const twelve = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
ok('the share of earlier months below the value', rankToDate(twelve, 7), 50);
ok('above every earlier month is 100', rankToDate(twelve, 99), 100);
ok('fewer than twelve earlier months is no rank yet', rankToDate([1, 2, 3], 2), null);

console.log('\nreadFeeling — each rule at its edges, in its order\n');
ok('Capitulation: fear 90 and 15% off the high', feel({ fear: 90, dd: -0.15, mom: -0.2 }), 'Capitulation');
ok('not Capitulation at fear 89', feel({ fear: 89, dd: -0.15, mom: -0.2 }), 'Fear');
ok('not Capitulation at 14% off the high', feel({ fear: 95, dd: -0.14, mom: -0.2 }), 'Fear');
ok('Fear: momentum negative, fear at 60', feel({ fear: 60, mom: -0.01, dd: -0.08 }), 'Fear');
ok('not Fear at 59', feel({ fear: 59, mom: -0.01, dd: -0.03 }), null);
ok('Despondency: 20 down from a frightened peak, 10% off', feel({ fear: 60, fearPeak: 80, dd: -0.10, mom: 0.01 }), 'Despondency');
ok('not Despondency when the peak was 79', feel({ fear: 59, fearPeak: 79, dd: -0.10, mom: 0.01 }), null);
ok('not Despondency 19 down', feel({ fear: 61, fearPeak: 80, dd: -0.12, mom: 0.01 }), null);
ok('Anxiety: up 20 from calm, within 10% of the high', feel({ fear3: 19, fear: 39, dd: -0.10 }), 'Anxiety');
ok('not Anxiety from a reading that was not calm', feel({ fear3: 20, fear: 40, dd: -0.02 }), 'Optimism');
ok('not Anxiety up 19', feel({ fear3: 10, fear: 29, dd: -0.02 }), 'Optimism');
ok('not Anxiety 11% off the high', feel({ fear3: 10, fear: 40, dd: -0.11 }), null);
ok('Hope: momentum just turned positive', feel({ wasNegative: true, mom: 0.01, dd: -0.2 }), 'Hope');
ok('Euphoria: near the high, slowing, calm', feel({ dd: -0.05, share: 0.64, fear: 19 }), 'Euphoria');
ok('not Euphoria at 65% of the best', feel({ dd: -0.05, share: 0.65, fear: 19 }), 'Optimism');
ok('not Euphoria at fear 20, the Optimism of today', feel({ dd: -0.01, share: 0.45, fear: 23 }), 'Optimism');
ok('Optimism: rising, within 5% of the high', feel({ dd: -0.05 }), 'Optimism');
ok('no feeling named 6% off the high and rising', feel({ dd: -0.06 }), null);
ok('no reading without fear', feel({ fear: null }), null);

console.log('\nreadPosture — every feeling in both halves\n');
const P = (s, h, o) => readPosture(s, h, Object.assign({ mom: 0.1, stretch: 50 }, o));
ok('Offense: fear, capitulation or anxiety in a cool body',
   ['Fear', 'Capitulation', 'Anxiety'].map(s => P(s, 'cool', { mom: -0.1 })), ['Offense', 'Offense', 'Offense']);
ok('Patience: fear or capitulation in a warm body',
   ['Fear', 'Capitulation'].map(s => P(s, 'warm', { mom: -0.1 })), ['Patience', 'Patience']);
ok('Defense: momentum negative in a warm body', ['Despondency', 'Anxiety', 'Optimism'].map(s => P(s, 'warm', { mom: -0.01 })),
   ['Defense', 'Defense', 'Defense']);
ok('Prepare: euphoria or optimism, warm, stretch in its top fifth',
   ['Euphoria', 'Optimism'].map(s => P(s, 'warm', { stretch: 80 })), ['Prepare', 'Prepare']);
ok('not Prepare at stretch 79', P('Euphoria', 'warm', { stretch: 79 }), 'Neutral');
ok('Neutral: the same in a cool body', ['Euphoria', 'Optimism', 'Hope', 'Despondency'].map(s => P(s, 'cool', { stretch: 99 })),
   ['Neutral', 'Neutral', 'Neutral', 'Neutral']);
ok('Neutral: hope or anxiety, warm, momentum positive', ['Hope', 'Anxiety'].map(s => P(s, 'warm')), ['Neutral', 'Neutral']);

console.log('\n' + (fail ? fail + ' FAILED, ' : '') + pass + '/' + (pass + fail) + ' passed\n');
process.exit(fail ? 1 : 0);
