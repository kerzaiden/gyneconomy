const fs = require('fs');
const KEY = process.env.FRED_API_KEY;
const out = {};
async function fred(id) {
  const u = 'https://api.stlouisfed.org/fred/series/observations?series_id=' + id + '&api_key=' + KEY + '&file_type=json&sort_order=asc';
  const j = await (await fetch(u)).json();
  return (j.observations || []).filter(o => o.value !== '.').map(o => [o.date, Number(o.value)]);
}
(async () => {
  for (const id of ['GFDEBTN', 'FYOINT', 'A091RC1Q027SBEA', 'FYFSD', 'FYGFD', 'GFDEGDQ188S', 'FYOIGDA188S']) {
    try { out[id] = await fred(id); } catch (e) { out[id] = String(e); }
  }
  try { out.penny = await (await fetch('https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/debt_to_penny?sort=-record_date&page[size]=5')).json(); } catch (e) { out.penny = String(e); }
  try { out.mts = await (await fetch('https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v1/accounting/mts/mts_table_5?filter=classification_desc:eq:Interest%20on%20Treasury%20Debt%20Securities%20(Gross)&sort=-record_date&page[size]=14')).json(); } catch (e) { out.mts = String(e); }
  fs.writeFileSync('probe/credit.json', JSON.stringify(out));
})();
