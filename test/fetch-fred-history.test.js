#!/usr/bin/env node
const { topTen, spyDailyRows, keepQuarter, marginRows, pennyRow, fedMoves, premiumFromRows, damodaranReturns, worthLevels, worthGrowth, yoyMonthly, oecdRows, monthlyMean, volatilityMonthly, VOL_JOIN, monthlyLevels, quarterly, yoyQuarterly, quarterlyMean, spreadQuarterly, withoutGap, fiscalYears, band, emit } = require('../tools/fetch-fred-history.js');
const { nportQuarter, reportQuarter, quarters, withKey } = require('../tools/import-nport.js');
const J = t => JSON.parse(t);

let pass = 0, fail = 0;
function ok(label, got, want) {
  const g = JSON.stringify(got), w = JSON.stringify(want);
  if (g === w) { pass++; console.log('  ok   ' + label.padEnd(46) + (g.length < 58 ? g : '')); }
  else { fail++; console.log('  FAIL ' + label + '\n       got  ' + g + '\n       want ' + w); }
}
function throws(label, fn, re) {
  try { fn(); fail++; console.log('  FAIL ' + label + ' — did not throw'); }
  catch (e) {
    if (re.test(e.message)) { pass++; console.log('  ok   ' + label.padEnd(46) + 'threw'); }
    else { fail++; console.log('  FAIL ' + label + ' — wrong error: ' + e.message); }
  }
}

const d = (date, v) => ({ date, v });

ok('a monthly series keeps its months',
   monthlyLevels([d('1954-07-01', 0.8), d('1954-08-01', 1.22)], 0, 25),
   [{ m: '1954-07', v: 0.8 }, { m: '1954-08', v: 1.22 }]);
ok('a level outside the band is left out, not clamped',
   monthlyLevels([d('1954-07-01', 0.8), d('1954-08-01', 99)], 0, 25),
   [{ m: '1954-07', v: 0.8 }]);
ok('zero is a real policy rate and survives the band',
   monthlyLevels([d('2015-01-01', 0)], 0, 25), [{ m: '2015-01', v: 0 }]);

ok('three months average into their quarter',
   quarterlyMean([d('2026-07-01', 4.5), d('2026-08-01', 4.7), d('2026-09-01', 4.9)], 0, 25).map(x => [x.q, x.v, x.n]),
   [['2026 Q3', 4.7, 3]]);
ok('months split at the quarter boundary',
   quarterlyMean([d('2026-06-01', 1), d('2026-07-01', 2)], 0, 25).map(x => x.q), ['2026 Q2', '2026 Q3']);
ok('a negative spread averages as a negative',
   quarterlyMean([d('2023-04-03', -1.5), d('2023-04-04', -1.3)], -10, 25).map(x => x.v), [-1.4]);
ok('a value outside the band is left out of the mean, not clamped',
   quarterlyMean([d('2026-07-01', 4), d('2026-07-02', 99)], 0, 25).map(x => [x.v, x.n]), [[4, 1]]);
const qm = (rows) => quarterlyMean(rows, 0, 25);
ok('a spread rounds the difference, not each leg',
   spreadQuarterly(qm([d('2005-01-01', 4.304)]), qm([d('2005-01-01', 2.546)])).map(x => x.v), [1.76]);
ok('an inverted spread is negative',
   spreadQuarterly(qm([d('2023-04-01', 3.6)]), qm([d('2023-04-01', 5.1)])).map(x => x.v), [-1.5]);
ok('a quarter only one leg printed is left out',
   spreadQuarterly(qm([d('2026-04-01', 4), d('2026-07-01', 4)]), qm([d('2026-04-01', 3)])).map(x => x.q), ['2026 Q2']);
ok('a spread is partial when either leg is',
   spreadQuarterly([{ q: '2026 Q3', v: 4, raw: 4, partial: true }], [{ q: '2026 Q3', v: 3, raw: 3 }]).map(x => x.partial), [true]);
ok('a null leg writes no spread',
   spreadQuarterly([{ q: '2005 Q1', v: null, raw: null }], [{ q: '2005 Q1', v: 2, raw: 2 }]), []);

const g30 = [d('2005-10-01', 4.6), d('2005-11-01', 4.7), d('2006-01-01', 4.5), d('2006-02-01', 4.6), d('2006-03-01', 4.7)];
ok('a quarter wholly inside the gap is null',
   withoutGap(qm(g30), g30, ['2002-03', '2006-01']).map(x => [x.q, x.v]), [['2005 Q4', null], ['2006 Q1', 4.6]]);

ok('the treasury block is written with its partial mark',
   J(emit([], [], null, { y10: [{ q: '2026 Q3', v: 4.7, partial: true }, { q: '2026 Q2', v: 4.6, partial: false }] })).treasuryQuarterly,
   { y10: [{ q: '2026 Q3', v: 4.7, partial: true }, { q: '2026 Q2', v: 4.6 }] });

ok('a fiscal-year series keeps its years',
   fiscalYears([d('1946-01-01', 106.3), d('2007-01-01', 34.79)], 0, 300),
   [{ y: 1946, v: 106.3 }, { y: 2007, v: 34.79 }]);
ok('a deficit is negative and survives a two-sided band',
   fiscalYears([d('1943-01-01', -26.9)], -50, 50), [{ y: 1943, v: -26.9 }]);
ok('a value outside the band is left out, not clamped',
   fiscalYears([d('1946-01-01', 999)], 0, 300), []);
throws('a date that is not 1 January is refused', () => fiscalYears([d('1946-10-01', 1)], 0, 300), /not a fiscal-year date/);

ok('the generated file is JSON, one series to a line',
   emit([], [], { gross: [], held: [], interest: [], budget: [], grossQ: [] }, { y10: [{ q: '2026 Q3', v: 4.7 }] }).split('\n').length,
   Object.keys(J(emit([], [], { gross: [], held: [], interest: [], budget: [], grossQ: [] }, { y10: [{ q: '2026 Q3', v: 4.7 }] }))).length + 3);
ok('without fiscal data, no fiscal block is written',
   'fiscalHistory' in J(emit([], [])), false);
ok('with fiscal data, the block is written',
   J(emit([], [], { gross: [{ y: 1946, v: 118 }], held: [], interest: [], budget: [], grossQ: [] })).fiscalHistory.gross, [{ y: 1946, v: 118 }]);

ok('each quarter start month names its quarter',
   quarterly([d('1990-01-01', 1), d('1990-04-01', 2), d('1990-07-01', 3), d('1990-10-01', 4)], -100, 100),
   [{ q: '1990 Q1', v: 1 }, { q: '1990 Q2', v: 2 }, { q: '1990 Q3', v: 3 }, { q: '1990 Q4', v: 4 }]);
ok('a series starting mid-year keeps its own first quarter',
   quarterly([d('1990-04-01', 8.3)], -100, 100), [{ q: '1990 Q2', v: 8.3 }]);
ok('a net easing survives the band',
   quarterly([d('2010-01-01', -22.2)], -100, 100), [{ q: '2010 Q1', v: -22.2 }]);
ok('zero is the definitional midpoint and is a reading',
   quarterly([d('2026-07-01', 0)], -100, 100), [{ q: '2026 Q3', v: 0 }]);
ok('a value outside the band is left out, not clamped',
   quarterly([d('2008-10-01', 83.6), d('2008-07-01', 580)], -100, 100), [{ q: '2008 Q4', v: 83.6 }]);
throws('a month that is not a quarter start',
   () => quarterly([d('1990-05-01', 1)], -100, 100), /not a quarter start/);

ok('band rejects a non-number', band('4.2', 0, 25), false);
ok('year over year compares a quarter with the same quarter a year before',
   yoyQuarterly([{ q: '2024 Q2', v: 100 }, { q: '2025 Q1', v: 101 }, { q: '2025 Q2', v: 102.2 }], -20, 30), [{ q: '2025 Q2', v: 2.2 }]);
ok('a quarter without its year-earlier twin is left out',
   yoyQuarterly([{ q: '1947 Q1', v: 30 }, { q: '1948 Q2', v: 31 }], -20, 30), []);
ok('with productivity, its series is written',
   J(emit([], [], null, null, [{ q: '2026 Q2', v: 2.2 }])).productivityHistory, [{ q: '2026 Q2', v: 2.2 }]);
const sdmxSeries = (key, obs) => '<generic:Series><generic:SeriesKey><generic:Value id="MEASURE" value="' + key + '" /></generic:SeriesKey>' +
  obs.map(([m, v]) => '<generic:Obs><generic:ObsDimension value="' + m + '" /><generic:ObsValue value="' + v + '" /></generic:Obs>').join('') + '</generic:Series>';
ok('the OECD reply is read month by month, in month order',
   oecdRows('<message:DataSet>' + sdmxSeries('CCICP', [['2024-02', '98.913'], ['2024-01', '98.7']]) + '</message:DataSet>'),
   [{ m: '2024-01', v: 98.7 }, { m: '2024-02', v: 98.91 }]);
ok('two series in one reply is refused, not guessed between',
   (() => { try { oecdRows(sdmxSeries('CCICP', [['2024-01', '98.7']]) + sdmxSeries('BCICP', [['2024-01', '99']])); return 'kept'; }
            catch (e) { return /more than one series.*BCICP/.test(e.message); } })(), true);
ok('consumer confidence is written after the S&P 500, and the early seasons last',
   Object.keys(J(emit([], [], null, null, null, [], [{ m: '2026-06', v: 98.7 }]))),
   ['fedFundsHistory', 'volatilityHistory', 'sp500MonthlyHistory', 'confidenceHistory', 'gdpYoYBefore', 'cpiYoYBefore', 'sp500ReturnsBefore', 'gdpGrowthBefore']);
ok('the early seasons are written as the app reads them',
   (({ gdpYoYBefore, cpiYoYBefore, sp500ReturnsBefore, gdpGrowthBefore }) => ({ gdpYoYBefore, cpiYoYBefore, sp500ReturnsBefore, gdpGrowthBefore }))(J(emit([], [], null, null, null, null, null,
     { gdp: [{ q: '1948 Q1', v: 4.21 }], cpi: [{ m: '1948-01', v: 10.24 }], returns: { 1948: 5.7, 1949: 18.3 }, growth: { 1948: 4.1 } }))),
   { gdpYoYBefore: [{ q: '1948 Q1', v: 4.21 }], cpiYoYBefore: [{ m: '1948-01', v: 10.24 }], sp500ReturnsBefore: { 1948: 5.7, 1949: 18.3 }, gdpGrowthBefore: { 1948: 4.1 } });
ok('durable-goods spending is written as the app reads it',
   J(emit([], [], null, null, null, null, null, null, [{ m: '2026-08', v: 3.1 }])).durablesHistory, [{ m: '2026-08', v: 3.1 }]);
ok('the equity risk premium is written as the app reads it',
   J(emit([], [], null, null, null, null, null, null, null, [{ m: '2026-08', v: 1.2 }])).premiumHistory, [{ m: '2026-08', v: 1.2 }]);
ok('the Fed\'s moves are the discount rate, then the target, then its upper bound, netted by month',
   fedMoves([{ date: '1950-07-01', v: 1.5 }, { date: '1950-08-01', v: 1.75 }],
            [{ date: '1982-09-27', v: 10.25 }, { date: '1982-10-01', v: 9.5 }],
            [{ date: '2008-12-16', v: 8.75 }, { date: '2015-12-17', v: 9 }]),
   [{ m: '1950-08', v: 0.25 }, { m: '1982-10', v: -0.75 }, { m: '2008-12', v: -0.75 }, { m: '2015-12', v: 0.25 }]);
ok('before 1950 the Fed\'s moves are the New York Fed\'s discount rate, with no move at the join',
   fedMoves([{ date: '1950-01-01', v: 1.5 }], [], [], [{ date: '1929-07-01', v: 5 }, { date: '1929-08-01', v: 6 }, { date: '1949-12-01', v: 1.75 }]),
   [{ m: '1929-08', v: 1 }, { m: '1949-12', v: -4.25 }]);
ok('the New York Fed\'s discount rate is written as the app reads it',
   J(emit([], [], null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, [{ m: '1929-08', v: 6 }])).discountHistory, [{ m: '1929-08', v: 6 }]);
const shiller = [['Stock Market Data'], ['', '', '', '', 'Excess CAPE'], ['Date', 'P', 'E', 'CAPE', 'Yield'],
  [1927.12, 17.5, 1.1, 14, 0.04], [1928.01, 17.53, 1.11, 14.1, 0.0412], [1928.1, 20, 1.2, 16, -0.0051], [1928.11, 21, '', '', '']];
ok('the Excess CAPE Yield is read from Shiller in percent, from its first month',
   premiumFromRows(shiller, '1928-01'), [{ m: '1928-01', v: 4.12 }, { m: '1928-10', v: -0.51 }]);
throws('a workbook without the column is refused', () => premiumFromRows([['Date', 'P', 'CAPE'], [1928.01, 17, 14]], '1928-01'), /Excess CAPE Yield/);
throws('a figure already in percent is refused, not scaled by guess',
   () => premiumFromRows([['Date', 'P', 'Excess CAPE Yield'], [1928.01, 17, 4.12]], '1928-01'), /not a fraction/);
const dTable = '<table><tr><th>Year</th><th>S&amp;P 500</th></tr><tr><td>1947</td><td>5.20%</td></tr>' +
  '<tr><td>1948</td><td>5.70%</td><td>1.0%</td></tr><tr><td> 1949 </td><td><b>18.30%</b></td></tr><tr><td>1950</td><td>30.81%</td></tr></table>';
ok('the Damodaran table is read year by year inside the window', damodaranReturns(dTable, 1948, 1950), { 1948: 5.7, 1949: 18.3 });
ok('a year missing from the Damodaran table is refused, not filled',
   (() => { try { damodaranReturns(dTable, 1948, 1952); return 'kept'; } catch (e) { return /no 1950|no 1951/.test(e.message); } })(), true);
const wTable = '<table><tr><th>Year</th><th>Real GDP</th></tr><tr><td>1926</td><td>1,000.0</td></tr>' +
  '<tr><td>1927</td><td>$1,010.0</td></tr><tr><td>1928</td><td>1,020.1</td></tr></table>';
ok('the MeasuringWorth table is read as levels, year by year', worthLevels(wTable, 1926, 1928), { 1926: 1000, 1927: 1010, 1928: 1020.1 });
throws('a year missing from the MeasuringWorth table is refused, not filled', () => worthLevels(wTable, 1926, 1929), /no 1929/);
ok('growth is each year against the year before, to one decimal, as BEA gives it', worthGrowth({ 1926: 1000, 1927: 1010, 1928: 999 }, 1927, 1928), { 1927: 1, 1928: -1.1 });
ok('a monthly change is the month against the same month a year before, to two decimals',
   yoyMonthly([d('1947-01-01', 21.48), d('1947-02-01', 21.62), d('1948-01-01', 23.68), d('1948-02-01', 23.67)], -5, 20),
   [{ m: '1948-01', v: 10.24 }, { m: '1948-02', v: 9.48 }]);
ok('a month averages its daily closes',
   monthlyMean([d('1990-01-02', 17.24), d('1990-01-03', 18.19), d('1990-02-01', 20)], 1, 200),
   [{ m: '1990-01', v: 17.72 }, { m: '1990-02', v: 20 }]);
ok('a close outside the band is left out of the mean, not clamped',
   monthlyMean([d('1990-01-02', 17), d('1990-01-03', 900)], 1, 200), [{ m: '1990-01', v: 17 }]);
ok('the running month is left out until it closes',
   monthlyMean([d('2026-09-30', 16), d('2026-10-01', 18)], 1, 200, '2026-10'), [{ m: '2026-09', v: 16 }]);
ok('the VIX starts where the VXO hands over',
   volatilityMonthly([d('1987-10-19', 150.19), d('1989-12-29', 23), d('1990-01-02', 99)],
                     [d('1990-01-02', 17.24), d('2026-10-01', 18)], VOL_JOIN, '2026-10'),
   [{ m: '1987-10', v: 150.19 }, { m: '1989-12', v: 23 }, { m: '1990-01', v: 17.24 }]);
ok('the join is January 1990, the first month of the VIX', VOL_JOIN, '1990-01');
ok('volatility is written after the Fed funds rate, and the fear curve no longer is',
   [Object.keys(J(emit([], [{ m: '1990-01', v: 17.24 }]))).slice(0, 2).join(' '), J(emit([], [{ m: '1990-01', v: 17.24 }])).volatilityHistory, 'fearCurve' in J(emit([], []))],
   ['fedFundsHistory volatilityHistory', [{ m: '1990-01', v: 17.24 }], false]);
ok('FINRA margin debt is the debit balances column, oldest month first',
   marginRows([['Year-Month', 'Debit Balances in Customers\' Securities Margin Accounts', 'Free Credit Balances'], ['2026-08', 1453832, 207641], ['2026-07', 1417225, 205132]]),
   [{ date: '2026-07-01', v: 1417225 }, { date: '2026-08-01', v: 1453832 }]);
throws('a FINRA sheet without the debit balances is refused', () => marginRows([['Year-Month', 'Other'], ['2026-08', 1]]), /debit balances/);
ok('the credit readings are written as the app reads them',
   (({ delinquencyHistory, marginHistory, consumerCreditHistory }) => ({ delinquencyHistory, marginHistory, consumerCreditHistory }))(J(emit([], [], null, null, null, null, null, null, null, null, null, null, null,
     { delinquency: [{ q: '2026 Q2', v: 1.42 }], margin: [{ m: '2026-08', v: 37.19 }], consumer: [{ m: '2026-08', v: 4.1 }] }))),
   { delinquencyHistory: [{ q: '2026 Q2', v: 1.42 }], marginHistory: [{ m: '2026-08', v: 37.19 }], consumerCreditHistory: [{ m: '2026-08', v: 4.1 }] });
ok('Debt to the Penny gives the latest total, in billions',
   pennyRow({ data: [{ record_date: '2026-10-05', tot_pub_debt_out_amt: '40249104431078.48' }] }), { d: '2026-10-05', v: 40249 });
throws('a Debt to the Penny reply without a row is refused', () => pennyRow({ data: [] }), /no usable latest row/);
const fund = Array.from({ length: 500 }, (_, i) => ({ cusip: String(100000 + i) + '10' + (i % 10), v: i < 10 ? 4 : 0.12 }));
ok('the top ten share sums the ten largest companies, to two decimals', topTen(fund.slice().reverse()), 40);
ok('two share classes of one issuer count as one company, as Alphabet\'s A and C do',
   topTen([{ cusip: '02079K305', v: 3.25 }, { cusip: '02079K107', v: 2.59 }].concat(fund.slice(10))), 5.84 + 9 * 0.12);
ok('holdings without a CUSIP, or with the zero placeholder, each stand alone',
   topTen([{ cusip: '000000000', v: 1 }, { cusip: '000000000', v: 1 }, { v: 1 }, { v: 1 }].concat(fund.slice(10))), 4 + 6 * 0.12);
throws('a holdings list far short of the index is refused', () => topTen([{ v: 5 }, { v: 4 }, { v: 3 }]), /only 3 holdings/);
const holding = h => '<invstOrSec><name>A</name><cusip>' + h.cusip + '</cusip><pctVal>' + h.v + '</pctVal></invstOrSec>';
const filing = (d, ws) => '<genInfo><repPdDate>' + d + '</repPdDate></genInfo>' + ws.map(holding).join('');
ok('an N-PORT filing gives its quarter and the top ten share of net assets', nportQuarter(filing('2026-06-30', fund)), { q: '2026 Q2', v: 40 });
throws('an N-PORT filing for a month inside a quarter is refused', () => nportQuarter(filing('2026-05-31', fund)), /quarter-end/);
ok('the filings line up oldest quarter first, one row each', quarters([filing('2026-06-30', fund), filing('2019-09-30', fund), filing('2026-06-30', fund)]).map(r => r.q), ['2019 Q3', '2026 Q2']);
const book = (d, ws) => 'SCHEDULE OF INVESTMENTS\n' + d + '\nCOMMON STOCKS SHARES VALUE\n' +
  ws.map((h, i) => ({ 2: 'Alphabet, Inc. (Class A) ...', 3: 'Alphabet, Inc.\n  (Class C) ...' })[i] || 'Company ' + i + ' ...').map((n, i) => n + ' 1,000 ' + (ws[i].v * 1e7).toLocaleString('en-US')).join('\n') +
  '\nTOTAL COMMON STOCKS\nNET ASSETS ........ $1,000,000,000\n';
ok('an annual report gives its quarter and the top ten share of net assets, joining a name wrapped onto two lines and the classes of one company',
   reportQuarter(book('SEPTEMBER 30, 1999', fund)), { q: '1999 Q3', v: 36 + 4 + 0.12 });
ok('a report in HTML tables reads the same',
   reportQuarter('<TR><TD>Schedule of Investments March 31, 2012</TD></TR>' + fund.map((h, i) => '<TR><TD>Company ' + i + '</TD><TD>1,000</TD><TD>$&#160;' + (h.v * 1e7).toLocaleString('en-US') + '</TD></TR>').join('') +
     '<TR><TD>TOTAL COMMON STOCKS</TD></TR><TR><TD>NET ASSETS</TD><TD>$ 1,000,000,000</TD></TR>'), { q: '2012 Q1', v: 40 });
throws('a report without its net assets is refused', () => reportQuarter('SCHEDULE OF INVESTMENTS\nSEPTEMBER 30, 1999\n'), /no net assets/);
ok('an N-PORT filing wins over a report for the same quarter', quarters([filing('2019-09-30', fund)], [book('SEPTEMBER 30, 2019', fund.slice(5))]), [{ q: '2019 Q3', v: 40 }]);
ok('the import adds its key to the hand-kept series, and replaces it on a second run',
   [withKey('{\n  "a": [1]\n}\n', [{ q: '2026 Q2', v: 40 }]), withKey('{\n  "a": [1],\n  "topTenQuarterly": []\n}\n', [{ q: '2026 Q2', v: 40 }])],
   ['{\n  "a": [1],\n  "topTenQuarterly": [{"q":"2026 Q2","v":40}]\n}\n', '{\n  "a": [1],\n  "topTenQuarterly": [{"q":"2026 Q2","v":40}]\n}\n']);
ok('State Street\'s daily file gives its date and the top ten share',
   spyDailyRows([['Fund Name:', 'SPDR S&P 500 ETF Trust'], ['Holdings:', 'As of 06-Oct-2026'], [], ['Name', 'Ticker', 'Identifier', 'Weight'], ...fund.map((h, i) => ['N' + i, 'T' + i, h.cusip, h.v])]),
   { d: '2026-10-06', v: 40 });
ok('State Street\'s figure replaces its own quarter and keeps the others',
   keepQuarter([{ q: '2026 Q4', d: '2026-10-06', v: 39.27 }], { d: '2026-11-03', v: 40.1 }).concat(keepQuarter([{ q: '2026 Q4', d: '2026-12-03', v: 41 }], { d: '2027-01-04', v: 40 })),
   [{ q: '2026 Q4', d: '2026-11-03', v: 40.1 }, { q: '2026 Q4', d: '2026-12-03', v: 41 }, { q: '2027 Q1', d: '2027-01-04', v: 40 }]);
throws('a State Street file without its date is refused', () => spyDailyRows([['Name', 'Identifier', 'Weight'], ['A', '037833100', 4]]), /As of/);
throws('a State Street file without CUSIPs is refused, since its classes could not be joined', () => spyDailyRows([['As of 06-Oct-2026'], ['Name', 'Weight'], ['A', 4]]), /Identifier/);
ok('band rejects NaN', band(NaN, 0, 25), false);
ok('band is inclusive at both ends', [band(0, 0, 25), band(25, 0, 25)], [true, true]);

console.log('\n' + (fail ? fail + ' FAILED, ' : '') + pass + '/' + (pass + fail) + ' passed\n');
process.exit(fail ? 1 : 0);
