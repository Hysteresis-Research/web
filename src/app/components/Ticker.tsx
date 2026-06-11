import { Fragment } from 'react';

// The binding tape between the cover and the pages. The scroll is pure CSS
// (animation: tick), paused on hover, retired under prefers-reduced-motion —
// so no JS is needed; this stays a server component. The set is duplicated
// (second copy aria-hidden) so the -50% translate loops seamlessly.
const ITEMS: { text: string; cn?: boolean }[] = [
  { text: 'Hysteresis Research' },
  { text: '迟滞研究', cn: true },
  { text: 'Founded 2026' },
  { text: 'A research-driven quantitative trading firm' },
  { text: 'Cross-asset regime transitions' },
  { text: 'Research compounds — capital follows' },
  { text: 'Vol. I — No. 1 · The First Issue' },
  { text: 'Price lags. We measure the lag.' },
];

function TickerSet({ hidden }: { hidden?: boolean }) {
  return (
    <div className="tk-set" aria-hidden={hidden || undefined}>
      {ITEMS.map((it, i) => (
        <Fragment key={i}>
          <span className={it.cn ? 'cn' : undefined} lang={it.cn ? 'zh-Hans' : undefined}>
            {it.text}
          </span>
          <span className="sq" aria-hidden="true" />
        </Fragment>
      ))}
    </div>
  );
}

export default function Ticker() {
  return (
    <div className="ticker" role="marquee" aria-label="Firm facts ticker">
      <div className="tk-track">
        <TickerSet />
        <TickerSet hidden />
      </div>
    </div>
  );
}
