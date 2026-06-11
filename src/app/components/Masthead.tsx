import Link from 'next/link';
import UtcClock from './UtcClock';
import ThemeToggle from './ThemeToggle';

// The periodical apparatus that crowns every page: issue line, nameplate +
// hanzi lockup, the double rule, the contents nav, and the live UTC clock.
// Server component; the clock and theme toggle are client children.
//
// Locale-aware: the same masthead renders on every route, including the entire
// /zh/* tree, so on Chinese pages it must read in Chinese with /zh nav targets.
// `locale` is threaded down from the layout (derived from the request path).
//
// EN routes: I On Method → /approach · II The Practice → /firm · III The
// Mandate → /firm#mandate · IV Correspondence → /contact.
// ZH routes point to the /zh equivalents with Chinese numerals + labels.
//
// The clock sits OUTSIDE the <nav> landmark (a clock is not navigation) but
// inside a positioned wrapper so it still aligns to the nav row.

type Locale = 'en' | 'zh';

const NAV_EN = [
  { numeral: 'I', label: 'On Method', href: '/approach' },
  { numeral: 'II', label: 'The Practice', href: '/firm' },
  { numeral: 'III', label: 'The Mandate', href: '/firm#mandate' },
  { numeral: 'IV', label: 'Correspondence', href: '/contact' },
  { numeral: 'V', label: 'Notes', href: '/notes' },
] as const;

const NAV_ZH = [
  { numeral: '一', label: '方法', href: '/zh/approach' },
  { numeral: '二', label: '实践', href: '/zh/firm' },
  { numeral: '三', label: '纲领', href: '/zh/firm#mandate' },
  { numeral: '四', label: '通信', href: '/zh/contact' },
  { numeral: '五', label: '笔记', href: '/zh/notes' },
] as const;

// The alternate-locale mirror of the current path: /zh/firm ⇄ /firm, /zh ⇄ /.
function altLocaleHref(pathname: string, zh: boolean): string {
  if (zh) {
    const stripped = pathname.replace(/^\/zh(?=\/|$)/, '');
    return stripped === '' ? '/' : stripped;
  }
  return pathname === '/' ? '/zh' : `/zh${pathname}`;
}

export default function Masthead({
  locale = 'en',
  pathname = '/',
}: {
  locale?: Locale;
  pathname?: string;
}) {
  const zh = locale === 'zh';
  const nav = zh ? NAV_ZH : NAV_EN;
  const home = zh ? '/zh' : '/';
  const navLabel = zh ? '本期目录' : 'Contents';
  const altHref = altLocaleHref(pathname, zh);

  return (
    <header className="masthead wrap" lang={zh ? 'zh-Hans' : undefined}>
      <div className="issue-row">
        {zh ? (
          <>
            <span className="label label--ink">第一卷 · 第一期</span>
            <span className="label mid">创刊号</span>
            <span className="label label--ink">二〇二六年夏</span>
          </>
        ) : (
          <>
            <span className="label label--ink">
              Vol.&nbsp;I&nbsp;—&nbsp;No.&nbsp;1
            </span>
            <span className="label mid">The First Issue</span>
            <span className="label label--ink">Summer&nbsp;MMXXVI</span>
          </>
        )}
      </div>

      <div className="nameplate">
        {zh ? (
          <Link href={home} className="np np--hanzi" lang="zh-Hans">
            迟滞研究
          </Link>
        ) : (
          <Link href={home} className="np">
            Hysteresis&nbsp;Research
          </Link>
        )}
        {zh ? (
          <span className="hanzi hanzi--latin" lang="en">
            Hysteresis Research
          </span>
        ) : (
          <span className="hanzi" lang="zh-Hans">
            迟滞研究
          </span>
        )}
      </div>

      <div className="rule-double" role="presentation" />

      <div className="navrow">
        <nav aria-label={navLabel}>
          {nav.map((n) => (
            <Link key={n.numeral} href={n.href}>
              <em>{n.numeral}</em>
              {n.label}
            </Link>
          ))}
        </nav>
        <UtcClock />
        <span className="edition-switch">
          <Link
            className="lang-switch"
            href={altHref}
            lang={zh ? 'en' : 'zh-Hans'}
            hrefLang={zh ? 'en' : 'zh-Hans'}
            aria-label={zh ? 'Switch to English' : '切换到中文'}
          >
            {zh ? 'EN' : '中文'}
          </Link>
          <ThemeToggle locale={locale} />
        </span>
      </div>
    </header>
  );
}
