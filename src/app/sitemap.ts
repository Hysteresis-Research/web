import type { MetadataRoute } from 'next';

const BASE = 'https://www.hysteresisresearch.com';

const PAGES = ['', '/approach', '/firm', '/notes', '/contact'];
const NOTES = [
  'premium-compressing',
  'decoupled-one-side',
  'mstr-mnav',
  'prior-conditioned',
  'not-the-line',
  'three-cycles',
];

// `/desk/*` and `/lp/*` (+ `/deck`) are intentionally omitted from the
// sitemap. They exist for direct-URL / allowlist access only and are marked
// `robots: noindex` at the page/route level. Do NOT add them to PAGES.

function pair(p: string) {
  return {
    en: `${BASE}${p || '/'}`,
    zh: `${BASE}/zh${p}`,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const p of PAGES) {
    const { en, zh } = pair(p);
    const langs = { en, 'zh-Hans': zh };
    entries.push({ url: en, lastModified: now, alternates: { languages: langs } });
    entries.push({ url: zh, lastModified: now, alternates: { languages: langs } });
  }

  for (const n of NOTES) {
    const { en, zh } = pair(`/notes/${n}`);
    const langs = { en, 'zh-Hans': zh };
    entries.push({ url: en, lastModified: now, alternates: { languages: langs } });
    entries.push({ url: zh, lastModified: now, alternates: { languages: langs } });
  }

  return entries;
}
