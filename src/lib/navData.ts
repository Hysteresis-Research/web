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
    return f as NavFeed;
  } catch {
    return null;
  }
}
