import 'server-only';
import { navFeed } from '@/lib/env';

// Shape contract with hysres/btc-data tools/build_nav_lp_feed.py. The feed is
// AGGREGATE AND DOLLAR-FREE by construction (the baker refuses dollar/unit/
// flow keys); this module narrows defensively and returns null on anything
// unexpected — the page then shows "unavailable" rather than half-data.

export type NavMetrics = {
  n_returns: number;
  gated: boolean;
  sharpe_ann: number | null;
  sharpe_ci95: [number, number] | null;
  sortino_ann: number | null;
  vol_ann: number | null;
  max_dd: number | null;
  calmar: number | null;
  hit_rate: number | null;
  note: string;
};

export type NavFeed = {
  generated: string;
  status: 'PRE_GENESIS' | 'SHADOW' | 'OFFICIAL';
  note?: string;
  strike?: { date: string; status: string; restated: boolean };
  navps: number | null;
  day_pct?: number | null;
  mtd_pct?: number | null;
  si_pct?: number | null;
  btc_si_pct?: number | null;
  metrics: NavMetrics | null;
  monthly: Record<string, number>;
  series: [string, number][];
  btc_rebased: [string, number][];
  provisional?: boolean;
};

function isPair(x: unknown): x is [string, number] {
  return (
    Array.isArray(x) &&
    x.length === 2 &&
    typeof x[0] === 'string' &&
    typeof x[1] === 'number' &&
    Number.isFinite(x[1])
  );
}

// Deep narrowing (codex 2026-07-06 F3): a compromised feed must degrade to
// the "unavailable" paragraph, never 500 the gated page. Every nested field
// is coerced to its expected primitive or dropped; monthly is size-bounded.
const fnum = (x: unknown): number | null =>
  typeof x === 'number' && Number.isFinite(x) ? x : null;
const fstr = (x: unknown, max = 300): string =>
  typeof x === 'string' ? x.slice(0, max) : '';

function narrowMetrics(x: unknown): NavMetrics | null {
  if (typeof x !== 'object' || x === null) return null;
  const m = x as Record<string, unknown>;
  const n = fnum(m.n_returns);
  if (n === null) return null;
  const ci = Array.isArray(m.sharpe_ci95) && m.sharpe_ci95.length === 2
    ? [fnum(m.sharpe_ci95[0]), fnum(m.sharpe_ci95[1])]
    : null;
  return {
    n_returns: n,
    gated: m.gated !== false,          // default to gated when in doubt
    sharpe_ann: fnum(m.sharpe_ann),
    sharpe_ci95: ci && ci[0] !== null && ci[1] !== null
      ? [ci[0], ci[1]] : null,
    sortino_ann: fnum(m.sortino_ann),
    vol_ann: fnum(m.vol_ann),
    max_dd: fnum(m.max_dd),
    calmar: fnum(m.calmar),
    hit_rate: fnum(m.hit_rate),
    note: fstr(m.note),
  };
}

function narrowMonthly(x: unknown): Record<string, number> {
  if (typeof x !== 'object' || x === null) return {};
  const out: Record<string, number> = {};
  let i = 0;
  for (const [k, v] of Object.entries(x as Record<string, unknown>)) {
    if (i++ >= 400) break;             // size-bound before any sort downstream
    const n = fnum(v);
    if (n !== null && /^\d{4}-\d{2}$/.test(k)) out[k] = n;
  }
  return out;
}

function narrowStrike(
  x: unknown,
): { date: string; status: string; restated: boolean } | undefined {
  if (typeof x !== 'object' || x === null) return undefined;
  const s = x as Record<string, unknown>;
  return {
    date: fstr(s.date, 10),
    status: fstr(s.status, 20),
    restated: s.restated === true,
  };
}

export async function fetchNavFeed(): Promise<NavFeed | null> {
  const cfg = navFeed();
  if (!cfg) return null;
  try {
    const r = await fetch(cfg.url, {
      headers: { 'X-Nav-Token': cfg.token },
      signal: AbortSignal.timeout(6000),
    });
    if (!r.ok) return null;
    const j: unknown = await r.json();
    if (typeof j !== 'object' || j === null) return null;
    const f = j as Record<string, unknown>;
    if (
      typeof f.generated !== 'string' ||
      typeof f.status !== 'string' ||
      !['PRE_GENESIS', 'SHADOW', 'OFFICIAL'].includes(f.status) ||
      !Array.isArray(f.series) ||
      !f.series.every(isPair) ||
      !Array.isArray(f.btc_rebased) ||
      !f.btc_rebased.every(isPair)
    ) {
      return null;
    }
    // rebuild the object from narrowed parts — nothing un-narrowed survives
    return {
      generated: fstr(f.generated, 40),
      status: f.status as NavFeed['status'],
      note: fstr(f.note),
      strike: narrowStrike(f.strike),
      navps: fnum(f.navps),
      day_pct: fnum(f.day_pct),
      mtd_pct: fnum(f.mtd_pct),
      si_pct: fnum(f.si_pct),
      btc_si_pct: fnum(f.btc_si_pct),
      metrics: narrowMetrics(f.metrics),
      monthly: narrowMonthly(f.monthly),
      series: (f.series as [string, number][]).slice(-2000),
      btc_rebased: (f.btc_rebased as [string, number][]).slice(-2000),
      provisional: f.provisional === true,
    };
  } catch {
    return null;
  }
}
