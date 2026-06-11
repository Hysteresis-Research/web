import Link from 'next/link';
import type { Metadata } from 'next';
import { pageMetadata } from '../../lib/seo';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';

export const metadata: Metadata = pageMetadata({
  title: 'Notes · Hysteresis Research',
  description:
    'Shorter empirical pieces from the desk — observations, retired theses, the shape of a regime transition once the prose has settled.',
  path: '/notes',
  lang: 'en',
});

type Note = {
  date: string;
  tag: string;
  title: string;
  href: string;
};

// The register of dispatches. Each note is published when it can stand on its
// own; the order is most-recent-first. Content preserved from the prior index.
const NOTES: Note[] = [
  {
    date: '2026-05-16',
    tag: 'MACRO',
    title: 'Power Is the Binding Constraint on Compute',
    href: '/notes/power-constrained-compute',
  },
  {
    date: '2026-05-13',
    tag: 'MSTR',
    title: 'Discount, unwinding',
    href: '/notes/mstr-mnav',
  },
  {
    date: '2026-05-13',
    tag: 'BTC',
    title: 'Shallower, so far',
    href: '/notes/three-cycles',
  },
  {
    date: '2026-05-06',
    tag: 'BTC',
    title: 'Not the line, the touch',
    href: '/notes/not-the-line',
  },
  {
    date: '2026-05-05',
    tag: 'BTC',
    title: 'Decoupled, on one side',
    href: '/notes/decoupled-one-side',
  },
  {
    date: '2026-05-02',
    tag: 'BTC',
    title: 'The prior, conditioned',
    href: '/notes/prior-conditioned',
  },
  {
    date: '2026-04-26',
    tag: 'BTC',
    title: 'Premium, compressing',
    href: '/notes/premium-compressing',
  },
];

export default function Notes() {
  return (
    <main>
      <section className="article wrap" id="notes">
        <SectionHead
          numeral="V"
          title="Notes"
          folio="The long form between trades"
        />

        <Reveal as="p" className="standfirst">
          <span className="cap">Shorter pieces from the desk</span> —
          observations, theses that were retired and why, the shape of a regime
          transition once the prose has settled.
        </Reveal>

        <Reveal as="ol" className="notindex">
          {NOTES.map((n) => (
            <li key={n.href}>
              <Link href={n.href}>
                <time className="when" dateTime={n.date}>
                  {n.date}
                </time>
                <span className="tag">{n.tag}</span>
                <span className="head">{n.title}</span>
              </Link>
            </li>
          ))}
        </Reveal>

        <Reveal as="p" className="close" style={{ marginTop: '1.7rem' }}>
          More in preparation. Each note is published when it can stand on its
          own.
        </Reveal>
      </section>
    </main>
  );
}
