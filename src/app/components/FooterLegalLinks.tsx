'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function FooterLegalLinks() {
  const pathname = usePathname() || '/';
  const isZh = pathname === '/zh' || pathname.startsWith('/zh/');
  return (
    <span>
      <Link href={isZh ? '/zh/terms' : '/terms'}>
        {isZh ? '服务条款' : 'Terms'}
      </Link>
      {' · '}
      <Link href={isZh ? '/zh/privacy' : '/privacy'}>
        {isZh ? '隐私政策' : 'Privacy'}
      </Link>
    </span>
  );
}
