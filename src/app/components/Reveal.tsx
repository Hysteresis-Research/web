'use client';

import {
  useEffect,
  useRef,
  type ElementType,
  type ReactNode,
} from 'react';

type RevealProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
} & Record<string, unknown>;

// "The pages reveal on entry." A single element marked [data-io]; when it
// scrolls into view it gains .in and is unobserved. Under reduced-motion or
// without IntersectionObserver it is revealed immediately (CSS retires the
// transform). Ports the mockup's IO loop, one node at a time.
export default function Reveal({
  as,
  className,
  children,
  ...rest
}: RevealProps) {
  const Tag = (as ?? 'div') as ElementType;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reduced || !('IntersectionObserver' in window)) {
      el.classList.add('in');
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -6% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} data-io className={className} {...rest}>
      {children}
    </Tag>
  );
}
