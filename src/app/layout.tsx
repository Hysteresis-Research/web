import type { Metadata } from 'next';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import BHMark from './components/BHMark';
import ThemeToggle from './components/ThemeToggle';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hysteresis Research',
  description:
    'A research-driven quantitative trading firm operating where price lags fundamentals.',
  openGraph: {
    title: 'Hysteresis Research',
    description:
      'A research-driven quantitative trading firm operating where price lags fundamentals.',
    type: 'website',
  },
};

// Read mode from localStorage before hydration to avoid flash.
const MODE_INIT_SCRIPT = `(function(){try{var m=localStorage.getItem('hr-mode');if(m==='light'){var r=document.documentElement;r.classList.remove('va-dark');r.classList.add('va-light');}}catch(e){}})();`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="va-dark" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: MODE_INIT_SCRIPT }} />

        <header className="rail">
          <Link href="/" className="brand-mark">
            <BHMark />
            Hysteresis Research
          </Link>
          <span>EST. 2026</span>
        </header>

        <ThemeToggle />

        {children}

        <footer className="rail">
          <span>© 2026 Hysteresis Research · HK</span>
          <span>
            <Link href="/approach">approach</Link>
            {' · '}
            <Link href="/zh">中文</Link>
            {' · '}
            <a href="mailto:contact@hysteresisresearch.com">contact</a>
          </span>
        </footer>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
