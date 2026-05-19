import type { Metadata } from 'next';
import { headers } from 'next/headers';
import GatedAnalytics from './components/GatedAnalytics';
import BrandLink from './components/BrandLink';
import Nav from './components/Nav';
import ThemeToggle from './components/ThemeToggle';
import FooterLegalLinks from './components/FooterLegalLinks';
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

// Read mode from localStorage before hydration to avoid flash.
const MODE_INIT_SCRIPT = `(function(){try{var m=localStorage.getItem('hr-mode');if(m==='light'){var r=document.documentElement;r.classList.remove('va-dark');r.classList.add('va-light');}}catch(e){}})();`;

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
  const lang = pathname.startsWith('/zh') ? 'zh-Hans' : 'en';

  return (
    <html lang={lang} className="va-dark" suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
        <script dangerouslySetInnerHTML={{ __html: MODE_INIT_SCRIPT }} />

        <header className="rail rail-header">
          <BrandLink />
          <div className="header-right">
            <Nav />
            <ThemeToggle />
          </div>
        </header>

        {children}

        <footer className="rail">
          <span>© 2026 Hysteresis Research</span>
          <FooterLegalLinks />
        </footer>

        <GatedAnalytics />
      </body>
    </html>
  );
}
