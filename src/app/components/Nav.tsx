'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';

const SLUGS = ['approach', 'firm', 'notes'] as const;
type Slug = (typeof SLUGS)[number];

const LABELS: Record<'en' | 'zh', Record<Slug | 'contact' | 'toggle', string>> = {
  en: { approach: 'approach', firm: 'firm', notes: 'notes', contact: 'contact', toggle: '中文' },
  zh: { approach: '方法', firm: '公司', notes: '札记', contact: '联系', toggle: 'EN' },
};

const CONTACT_HREF = 'mailto:contact@hysteresisresearch.com';

export default function Nav() {
  const pathname = usePathname() || '/';
  const isZh = pathname === '/zh' || pathname.startsWith('/zh/');
  const labels = isZh ? LABELS.zh : LABELS.en;

  const enPath = isZh ? (pathname === '/zh' ? '/' : pathname.slice(3)) : pathname;
  const langHref = isZh ? enPath : pathname === '/' ? '/zh' : `/zh${pathname}`;

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
        external: false as const,
      };
    }),
    { key: 'contact', href: CONTACT_HREF, label: labels.contact, active: false, external: true as const },
    {
      key: 'lang',
      href: langHref,
      label: labels.toggle,
      active: false,
      external: false as const,
      hrefLang: isZh ? 'en' : 'zh-Hans',
    },
  ];

  return (
    <nav className="site-nav" aria-label="Site">
      {items.map((it, i) => (
        <Fragment key={it.key}>
          {i > 0 && <span className="nav-sep" aria-hidden="true">·</span>}
          {it.external ? (
            <a href={it.href} className={it.active ? 'is-active' : undefined}>
              {it.label}
            </a>
          ) : (
            <Link
              href={it.href}
              className={it.active ? 'is-active' : undefined}
              hrefLang={'hrefLang' in it ? it.hrefLang : undefined}
            >
              {it.label}
            </Link>
          )}
        </Fragment>
      ))}
    </nav>
  );
}
