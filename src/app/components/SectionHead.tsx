import type { ElementType, ReactNode } from 'react';
import Reveal from './Reveal';

// The editorial head that opens every inner article — the one coherent template
// shared across the homepage feature sections (On Method, The Mandate), /firm
// (The Practice), /contact and /notes. A ghost roman numeral (decorative,
// stroked), the title, and a right-aligned folio line. On the inner pages the
// title is the page's <h1>. Wrapped in Reveal so it lifts on entry.
//
// CSS lives in globals.css under `.section-head .ghost h2 .folio`; we let an <h1>
// inherit the same rule so the head reads identically whether it is the page's
// primary heading or a section heading.
export default function SectionHead({
  numeral,
  title,
  folio,
  as = 'h1',
  id,
}: {
  /** Roman numeral shown as the ghost figure, e.g. 'I'. */
  numeral: string;
  /** The article title. */
  title: ReactNode;
  /** The right-aligned folio line, e.g. 'An essay · p. 02'. */
  folio: string;
  /** Heading level for the title. 'h1' for a page's primary head (default),
   *  'h2' for a secondary section on a shared page. */
  as?: 'h1' | 'h2';
  /** Optional id, set on the heading for in-page anchors (e.g. #mandate). */
  id?: string;
}) {
  const Heading = as as ElementType;
  return (
    <Reveal className="section-head">
      <span className="ghost" aria-hidden="true">
        {numeral}.
      </span>
      <Heading id={id}>{title}</Heading>
      <span className="folio">{folio}</span>
    </Reveal>
  );
}
