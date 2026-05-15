'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';

const SLUGS = ['approach', 'firm', 'notes', 'contact'] as const;
type Slug = (typeof SLUGS)[number];

const LABELS: Record<'en' | 'zh', Record<Slug | 'toggle', string>> = {
  en: { approach: 'approach', firm: 'firm', notes: 'notes', contact: 'contact', toggle: '中文' },
  zh: { approach: '方法', firm: '公司', notes: '札记', contact: '联系', toggle: 'EN' },
};

export default function Nav() {
  const pathname = usePathname() || '/';
  const isZh = pathname === '/zh' || pathname.startsWith('/zh/');
  const labels = isZh ? LABELS.zh : LABELS.en;

  // Routes that exist but are not surfaced in the public nav (internal-only,
  // direct-URL access). The language toggle from these routes drops to the
  // language root rather than asserting a non-existent translated alternate.
  const INTERNAL_ROUTES = ['/desk'];
  const isOnInternalRoute = INTERNAL_ROUTES.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`),
  );

  const enPath = isZh ? (pathname === '/zh' ? '/' : pathname.slice(3)) : pathname;
  const langHref = isZh
    ? enPath
    : isOnInternalRoute
    ? '/zh'
    : pathname === '/'
    ? '/zh'
    : `/zh${pathname}`;

  const items = [
    ...SLUGS.map((s) => {
      const enRoot = `/${s}`;
      const zhRoot = `/zh/${s}`;
      const active =
        pathname === enRoot ||
        pathname.startsWith(`${enRoot}/`) ||
        pathname === zhRoot ||
        pathname.startsWith(`${zhRoot}/`);
      return {
        key: s,
        href: isZh ? zhRoot : enRoot,
        label: labels[s],
        active,
      };
    }),
    {
      key: 'lang',
      href: langHref,
      label: labels.toggle,
      active: false,
      // On internal routes the toggle drops to the language root, which is
      // not a translated alternate — omit hrefLang to avoid lying to crawlers.
      hrefLang: isOnInternalRoute ? undefined : isZh ? 'en' : 'zh-Hans',
    },
  ];

  return (
    <nav className={`site-nav${isZh ? ' is-zh' : ''}`} aria-label="Site">
      {items.map((it, i) => (
        <Fragment key={it.key}>
          {i > 0 && <span className="nav-sep" aria-hidden="true">·</span>}
          <Link
            href={it.href}
            className={it.active ? 'is-active' : undefined}
            hrefLang={'hrefLang' in it ? it.hrefLang : undefined}
          >
            {it.label}
          </Link>
        </Fragment>
      ))}
    </nav>
  );
}
