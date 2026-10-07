const fs = require('fs');
const KEY = process.env.FRED_API_KEY;
const out = {};
async function fred(id) {
  const u = 'https://api.stlouisfed.org/fred/series/observations?series_id=' + id + '&api_key=' + KEY + '&file_type=json&sort_order=asc';
  const j = await (await fetch(u)).json();
  return (j.observations || []).filter(o => o.value !== '.').map(o => [o.date, Number(o.value)]);
}
(async () => {
  for (const id of ['A091RC1Q027SBEA', 'GDP']) out[id] = await fred(id);
  fs.writeFileSync('probe/credit.json', JSON.stringify(out));
})();
