import type { Metadata } from 'next';
import { headers } from 'next/headers';
import GatedAnalytics from './components/GatedAnalytics';
import Masthead from './components/Masthead';
import ScrollProgress from './components/ScrollProgress';
import CoverArm from './components/CoverArm';
import Colophon from './components/Colophon';
import { SITE_URL, SITE_NAME } from '../lib/seo';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Hysteresis Research',
  description:
    'A research-driven quantitative trading firm operating where price lags fundamentals.',
  alternates: {
    canonical: '/',
    languages: {
      en: '/',
      'zh-Hans': '/zh',
      'x-default': '/',
    },
  },
  openGraph: {
    title: 'Hysteresis Research',
    description:
      'A research-driven quantitative trading firm operating where price lags fundamentals.',
    url: '/',
    siteName: SITE_NAME,
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['zh_CN'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hysteresis Research',
    description:
      'A research-driven quantitative trading firm operating where price lags fundamentals.',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png', sizes: '180x180' },
    shortcut: '/favicon.ico',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

// Resolve the edition (theme) before first paint to avoid a flash. Read the
// stored choice ('hr-theme'); when unset, default to the OS preference. The
// server renders theme-light, so we only need to swap when the resolved theme
// is dark. Also tag .js so the cover's pre-armed (offset) state never shows
// without JS to release it.
const THEME_INIT_SCRIPT = `(function(){try{var r=document.documentElement;r.classList.add('js');var t=localStorage.getItem('hr-theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}if(t==='dark'){r.classList.remove('theme-light');r.classList.add('theme-dark');}}catch(e){}})();`;

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  alternateName: '迟滞研究',
  url: SITE_URL,
  logo: `${SITE_URL}/favicon-512.png`,
  foundingDate: '2026',
  description:
    'A research-driven quantitative trading firm operating at cross-asset regime transitions where the gap between fundamentals and price persists long enough to be measured.',
  knowsAbout: [
    'Quantitative Trading',
    'Cross-Asset Regime Analysis',
    'Bitcoin Derivatives',
    'Macro Research',
    'Variance Risk Premium',
  ],
};

const siteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: ['en', 'zh-Hans'],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const h = await headers();
  const pathname = h.get('x-pathname') || '/';
  const isZh = pathname.startsWith('/zh');
  const lang = isZh ? 'zh-Hans' : 'en';
  const locale: 'en' | 'zh' = isZh ? 'zh' : 'en';

  return (
    <html lang={lang} className="theme-light" suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />

        <a className="skip" href="#toc">
          {locale === 'zh' ? '跳到正文' : 'Skip to contents'}
        </a>
        <ScrollProgress />
        <CoverArm />

        <Masthead locale={locale} />

        {children}

        <Colophon locale={locale} />

        <GatedAnalytics />
      </body>
    </html>
  );
}
