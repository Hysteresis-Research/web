'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';

const SECTIONS = [
  { slug: '', en: 'introduction', zh: '引言' },
  { slug: '/firm', en: 'firm', zh: '公司' },
  { slug: '/strategies', en: 'strategies', zh: '策略' },
  { slug: '/terms', en: 'terms', zh: '条款' },
] as const;

export default function LpNav() {
  const pathname = usePathname() || '/lp';
  const isZh = pathname.startsWith('/zh/lp');
  const base = isZh ? '/zh/lp' : '/lp';

  return (
    <nav className="lp-rail" aria-label={isZh ? 'LP 栏目' : 'LP section'}>
      <div className={`site-nav${isZh ? ' is-zh' : ''}`}>
        {SECTIONS.map((s, i) => {
          const href = `${base}${s.slug}`;
          const active = pathname === href;
          return (
            <Fragment key={s.slug || 'root'}>
              {i > 0 && (
                <span className="nav-sep" aria-hidden="true">
                  ·
                </span>
              )}
              <Link
                href={href}
                className={active ? 'is-active' : undefined}
                aria-current={active ? 'page' : undefined}
              >
                {isZh ? s.zh : s.en}
              </Link>
            </Fragment>
          );
        })}
      </div>
    </nav>
  );
}
