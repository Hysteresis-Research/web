'use client';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

// Drop telemetry for gated routes at the SINK, not by conditionally mounting
// in the server layout — layouts don't re-render on client navigation, so a
// public→/desk <Link> would otherwise leak the gated path (codex MAJOR).
// beforeSend runs client-side on every event, invariant under navigation.
const GATED = /^\/(zh\/)?(desk|deck|signin)(\/|$)/;

function isGated(url: string | undefined): boolean {
  if (!url) return false;
  try {
    return GATED.test(new URL(url, 'https://x.invalid').pathname);
  } catch {
    return false;
  }
}

export default function GatedAnalytics() {
  return (
    <>
      <Analytics beforeSend={(e) => (isGated(e.url) ? null : e)} />
      <SpeedInsights beforeSend={(e) => (isGated(e.url) ? null : e)} />
    </>
  );
}
