import type { Metadata } from 'next';

export const SITE_URL = 'https://www.hysteresisresearch.com';
export const SITE_NAME = 'Hysteresis Research';

type Lang = 'en' | 'zh-Hans';

interface PageMetaInput {
  title: string;
  description: string;
  /** Canonical path for THIS page, including leading slash. e.g. '/firm' or '/zh/firm'. */
  path: string;
  lang: Lang;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
}

function siblingPaths(path: string, lang: Lang): { en: string; zh: string } {
  if (lang === 'zh-Hans') {
    const en = path.replace(/^\/zh/, '') || '/';
    return { en, zh: path };
  }
  const zh = path === '/' ? '/zh' : `/zh${path}`;
  return { en: path, zh };
}

export function pageMetadata(opts: PageMetaInput): Metadata {
  const { en, zh } = siblingPaths(opts.path, opts.lang);
  return {
    title: opts.title,
    description: opts.description,
    alternates: {
      canonical: opts.path,
      languages: {
        en,
        'zh-Hans': zh,
        'x-default': en,
      },
    },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url: opts.path,
      type: opts.type ?? 'website',
      siteName: SITE_NAME,
      locale: opts.lang === 'zh-Hans' ? 'zh_CN' : 'en_US',
      alternateLocale: opts.lang === 'zh-Hans' ? ['en_US'] : ['zh_CN'],
      ...(opts.publishedTime ? { publishedTime: opts.publishedTime } : {}),
      ...(opts.modifiedTime ? { modifiedTime: opts.modifiedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: opts.title,
      description: opts.description,
    },
  };
}
