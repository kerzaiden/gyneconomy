const fs = require('fs');
const KEY = process.env.FRED_API_KEY;
const out = {};
async function fred(id) {
  const u = 'https://api.stlouisfed.org/fred/series/observations?series_id=' + id + '&api_key=' + KEY + '&file_type=json&sort_order=asc';
  const r = await fetch(u);
  const j = await r.json();
  return (j.observations || []).filter(o => o.value !== '.').map(o => [o.date, Number(o.value)]);
}
async function text(u) {
  const r = await fetch(u, { headers: { 'user-agent': 'Mozilla/5.0 gyneconomy-probe' } });
  return { status: r.status, body: await r.text() };
}
(async () => {
  for (const id of ['QUSPAM770A', 'QUSHAM770A', 'QUSNAM770A', 'DRTSCILM', 'DRSDCILM', 'DRALACBS', 'DRSFRMACBS', 'GDP', 'BOGZ1FL663067003Q', 'NCBEILQ027S']) {
    try { out[id] = await fred(id); } catch (e) { out[id] = String(e); }
  }
  for (const [k, u] of Object.entries({
    bisGap: 'https://stats.bis.org/api/v1/data/WS_CREDIT_GAP/Q.US.P.A.?format=csv',
    bisGap2: 'https://stats.bis.org/api/v2/data/dataflow/BIS/WS_CREDIT_GAP/1.0/Q.US.P.A.C?format=csv',
    finraPage: 'https://www.finra.org/rules-guidance/key-topics/margin-accounts/margin-statistics',
    finraPage2: 'https://www.finra.org/finra-data/browse-catalog/industry-snapshot/margin-statistics'
  })) {
    try { const t = await text(u); out[k] = { status: t.status, head: t.body.slice(0, 1500), xlsx: [...new Set((t.body.match(/[^"' ]+\.xlsx?/g) || []))].slice(0, 20), csvLen: t.body.length }; if (k.startsWith('bis')) out[k].body = t.body.slice(0, 200000); } catch (e) { out[k] = String(e); }
  }
  const links = (out.finraPage && out.finraPage.xlsx || []).concat(out.finraPage2 && out.finraPage2.xlsx || []);
  out.finraFiles = [];
  for (let l of links.slice(0, 4)) {
    if (l.startsWith('/')) l = 'https://www.finra.org' + l;
    try {
      const r = await fetch(l, { headers: { 'user-agent': 'Mozilla/5.0 gyneconomy-probe' } });
      const b = Buffer.from(await r.arrayBuffer());
      const XLSX = require('xlsx');
      const wb = XLSX.read(b);
      const rows = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], { header: 1 });
      out.finraFiles.push({ url: l, status: r.status, sheets: wb.SheetNames, rows: rows.slice(0, 400) });
    } catch (e) { out.finraFiles.push({ url: l, err: String(e) }); }
  }
  fs.writeFileSync('probe/credit.json', JSON.stringify(out));
})();
