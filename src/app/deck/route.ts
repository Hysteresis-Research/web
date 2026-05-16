import { requireViewer } from '@/lib/gate';
import { DECK_HTML_B64 } from './deck-html';

export const dynamic = 'force-dynamic';

// Gated LP-introduction deck. The confidential slide HTML is bundled (never
// in /public); only the non-secret harness (deck-stage.js, tokens.css,
// favicon) lives under /public/lp-deck. requireViewer redirects to the
// themed sign-in when not authenticated.
export async function GET() {
  await requireViewer('/deck');
  const html = Buffer.from(DECK_HTML_B64, 'base64').toString('utf8');
  return new Response(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'private, no-store, max-age=0, must-revalidate',
      'X-Robots-Tag': 'noindex, noarchive',
      'Referrer-Policy': 'no-referrer',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}
