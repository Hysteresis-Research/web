'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BHMark from './BHMark';

export default function BrandLink() {
  const pathname = usePathname() || '/';
  const isZh = pathname === '/zh' || pathname.startsWith('/zh/');
  return (
    <Link href={isZh ? '/zh' : '/'} className="brand-mark">
      <BHMark />
      Hysteresis Research
    </Link>
  );
}
