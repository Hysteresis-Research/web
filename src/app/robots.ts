import type { MetadataRoute } from 'next';

const SITE = 'https://www.hysteresisresearch.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      {
        userAgent: [
          'GPTBot',
          'ClaudeBot',
          'Claude-Web',
          'anthropic-ai',
          'PerplexityBot',
          'CCBot',
          'Google-Extended',
          'Applebot-Extended',
          'Bytespider',
          'YouBot',
        ],
        allow: '/',
      },
    ],
    sitemap: `${SITE}/sitemap.xml`,
    host: SITE,
  };
}
