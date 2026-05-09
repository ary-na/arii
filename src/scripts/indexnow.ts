import { readFileSync } from 'fs';

const KEY = process.env.INDEXNOW_KEY;
const HOST = 'arii.dev';

const sitemap = readFileSync('dist/sitemap-0.xml', 'utf-8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList: urls,
  }),
});

console.log(`Status: ${res.status} — Submitted ${urls.length} URLs`);
