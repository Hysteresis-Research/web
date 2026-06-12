'use client';

import { useState } from 'react';
import ChartFrame from './ChartFrame';

// The note's one interactive plate. Editorial figures are point-in-time, so the
// inputs default to a dated snapshot (2026-06-12) rather than a live feed — the
// auto-refreshing explorer lives at the desk. The reader drives the two levers
// that decide the sign: the share price (which sets mNAV) and how much of each
// raise actually buys bitcoin (f). The identity is
//   d(BTC/share) ∝ (f − 1/m)  →  accretive iff  f·m > 1.
// Every colour is a CSS variable, so the plate reads in both editions.

const SHARES_M = 358.2;
const HOLDINGS = 845_256;
const RAISED = 181e6;
const SPOT = 63_478; // BTC, 2026-06-12 snapshot

type Lang = 'en' | 'zh';

const COPY: Record<Lang, Record<string, string>> = {
  en: {
    price: 'Share price',
    f: 'Share of the raise into bitcoin',
    dil: 'DILUTIVE',
    acc: 'ACCRETIVE',
    perWk: 'per issuance week',
    title: 'BTC-per-share change vs mNAV',
    aria:
      'Interactive chart: weekly change in bitcoin-per-share as a function of mNAV. The marker is dilutive below the breakeven and accretive above it.',
    xlab: 'mNAV',
    ylab: 'Δ BTC / share, weekly',
    here: 'here',
    cf: 'at this f',
    c1: 'f = 1',
    breakeven: 'accretive above mNAV',
    foot: 'Snapshot · 2026-06-12. Drag the levers.',
  },
  zh: {
    price: '股价',
    f: '融资中买币的比例',
    dil: '稀释',
    acc: '增厚',
    perWk: '每周增发',
    title: '每股 BTC 变化 对 mNAV',
    aria:
      '交互图：每股比特币的每周变化随 mNAV 而变；标记点在盈亏平衡线以下为稀释、以上为增厚。',
    xlab: 'mNAV',
    ylab: '每股 BTC · 周变化',
    here: '此处',
    cf: '当前 f',
    c1: 'f = 1',
    breakeven: '增厚需 mNAV 高于',
    foot: '快照 · 2026-06-12。拖动两根杠杆。',
  },
};

export default function MnavDilutionExplorer({ lang = 'en' }: { lang?: Lang }) {
  const [price, setPrice] = useState(120.15);
  const [pct, setPct] = useState(56);
  const t = COPY[lang];

  const sharesAbs = SHARES_M * 1e6;
  const f = pct / 100;
  const mnav = (price * sharesAbs) / (HOLDINGS * SPOT);
  const fm = f * mnav;
  const dilutive = fm < 1;
  const breakeven = 1 / f;

  // weekly Δ(BTC/share) % as a closed form of mNAV, for a fixed f
  const curveY = (m: number, ff: number) => {
    const dB = (ff * RAISED) / (SPOT * HOLDINGS);
    const dS = RAISED / (m * HOLDINGS * SPOT);
    return ((1 + dB) / (1 + dS) - 1) * 100;
  };
  const atm = curveY(mnav, f);

  // ── plate geometry (ChartFrame viewBox is 600 × 320) ──
  const W = 600,
    H = 320,
    m = { l: 66, r: 26, t: 38, b: 50 };
  const iw = W - m.l - m.r,
    ih = H - m.t - m.b;
  const xMin = 0.5,
    xMax = Math.max(2.0, Math.ceil(mnav * 10) / 10);
  let yLo = Infinity,
    yHi = -Infinity;
  for (let i = 0; i <= 80; i++) {
    const mm = xMin + ((xMax - xMin) * i) / 80;
    [curveY(mm, f), curveY(mm, 1)].forEach((v) => {
      if (Number.isFinite(v)) {
        yLo = Math.min(yLo, v);
        yHi = Math.max(yHi, v);
      }
    });
  }
  yLo = Math.min(yLo, atm, -0.05);
  yHi = Math.max(yHi, 0.05, atm);
  const pad = (yHi - yLo) * 0.14;
  yLo -= pad;
  yHi += pad;

  const px = (v: number) => m.l + ((v - xMin) / (xMax - xMin)) * iw;
  const py = (v: number) => m.t + ((yHi - v) / (yHi - yLo)) * ih;
  const path = (ff: number) => {
    let d = '';
    for (let i = 0; i <= 200; i++) {
      const mm = xMin + ((xMax - xMin) * i) / 200;
      d += (i ? 'L' : 'M') + px(mm).toFixed(1) + ' ' + py(curveY(mm, ff)).toFixed(1);
    }
    return d;
  };

  const xTicks: number[] = [];
  for (let v = Math.ceil(xMin / 0.5) * 0.5; v <= xMax + 1e-6; v += 0.5) xTicks.push(v);
  const yStep = niceStep((yHi - yLo) / 4);
  const yTicks: number[] = [];
  for (let v = Math.ceil(yLo / yStep) * yStep; v <= yHi; v += yStep) yTicks.push(v);

  const nowX = px(Math.max(xMin, Math.min(xMax, mnav)));
  const nowY = py(atm);

  return (
    <div className="dilution-explorer">
      <ChartFrame title={t.title} ariaLabel={t.aria}>
        {/* dilutive region — mNAV < 1 */}
        <rect
          x={px(xMin)}
          y={m.t}
          width={px(1) - px(xMin)}
          height={ih}
          fill="var(--signal-wash, color-mix(in srgb, var(--signal) 8%, transparent))"
        />
        {/* y gridlines + labels */}
        {yTicks.map((v) => (
          <g key={'y' + v}>
            <line
              x1={m.l}
              x2={m.l + iw}
              y1={py(v)}
              y2={py(v)}
              className="axis"
              opacity={v === 0 ? 0.5 : 0.18}
            />
            <text
              x={m.l - 8}
              y={py(v) + 3}
              textAnchor="end"
              fill="var(--ink-40)"
              fontFamily="var(--grot)"
              fontSize={9}
            >
              {(v > 0 ? '+' : '') + v.toFixed(2)}
            </text>
          </g>
        ))}
        {/* x ticks + labels */}
        {xTicks.map((v) => (
          <text
            key={'x' + v}
            x={px(v)}
            y={m.t + ih + 16}
            textAnchor="middle"
            fill="var(--ink-40)"
            fontFamily="var(--grot)"
            fontSize={9}
          >
            {v.toFixed(1)}×
          </text>
        ))}
        {/* mNAV = 1 reference */}
        <line x1={px(1)} x2={px(1)} y1={m.t} y2={m.t + ih} className="axis" opacity={0.5} />
        {/* f = 1 reference curve (dashed) */}
        <path d={path(1)} fill="none" stroke="var(--ink-40)" strokeWidth={1.4} strokeDasharray="4 4" />
        {/* actual-f curve */}
        <path d={path(f)} className="loop" />
        {/* breakeven dot for the active curve (zero-cross at 1/f) */}
        {breakeven >= xMin && breakeven <= xMax && (
          <circle cx={px(breakeven)} cy={py(0)} r={3} fill="var(--ink-40)" />
        )}
        {/* the now marker */}
        <line x1={nowX} x2={nowX} y1={m.t} y2={m.t + ih} className="gapline" opacity={0.5} />
        <circle cx={nowX} cy={nowY} r={5} className="dot" stroke="var(--paper)" strokeWidth={1.4} />
        <text
          x={nowX + (mnav > 1.5 ? -8 : 8)}
          y={nowY - 9}
          textAnchor={mnav > 1.5 ? 'end' : 'start'}
          fill="var(--ink-2)"
          fontFamily="var(--grot)"
          fontSize={9.5}
          fontWeight={600}
        >
          {t.here} · {mnav.toFixed(2)}× · {(atm >= 0 ? '+' : '') + atm.toFixed(2)}%
        </text>
        {/* axis titles */}
        <text x={m.l + iw} y={m.t + ih + 34} textAnchor="end" fill="var(--ink-40)" fontFamily="var(--grot)" fontSize={9} letterSpacing="0.04em">
          {t.xlab} →
        </text>
        {/* legend */}
        <g transform={`translate(${m.l + 6} ${m.t + 4})`} fontFamily="var(--grot)" fontSize={9}>
          <line x1={0} x2={18} y1={0} y2={0} className="loop" />
          <text x={24} y={3} fill="var(--ink-40)">{t.cf}</text>
          <line x1={0} x2={18} y1={14} y2={14} stroke="var(--ink-40)" strokeWidth={1.4} strokeDasharray="4 4" />
          <text x={24} y={17} fill="var(--ink-40)">{t.c1}</text>
        </g>
      </ChartFrame>

      <div className="de-controls">
        <label className="de-lever">
          <span className="de-lk">
            {t.price}
            <b>${price.toFixed(2)}</b>
          </span>
          <input
            type="range"
            min={80}
            max={250}
            step={0.05}
            value={price}
            onChange={(e) => setPrice(+e.target.value)}
            aria-label={t.price}
          />
        </label>
        <label className="de-lever">
          <span className="de-lk">
            {t.f}
            <b>{pct}%</b>
          </span>
          <input
            type="range"
            min={0}
            max={100}
            step={1}
            value={pct}
            onChange={(e) => setPct(+e.target.value)}
            aria-label={t.f}
          />
        </label>
      </div>

      <div className={'de-verdict ' + (dilutive ? 'is-dil' : 'is-acc')}>
        <span className="de-test">
          f × mNAV = {f.toFixed(2)} × {mnav.toFixed(2)} = <b>{fm.toFixed(2)}</b>
        </span>
        <span className="de-flag">{dilutive ? t.dil : t.acc}</span>
        <span className="de-num">
          {(atm >= 0 ? '+' : '') + atm.toFixed(2)}% <i>{t.perWk}</i>
        </span>
        <span className="de-be">
          {t.breakeven} {Number.isFinite(breakeven) ? breakeven.toFixed(2) + '×' : '∞'}
        </span>
      </div>
      <p className="de-foot">{t.foot}</p>
    </div>
  );
}

function niceStep(s: number) {
  const p = Math.pow(10, Math.floor(Math.log10(s)));
  const n = s / p;
  return (n < 1.5 ? 1 : n < 3 ? 2 : n < 7 ? 5 : 10) * p;
}
