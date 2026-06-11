import type { Metadata } from 'next';
import { pageMetadata } from '../../lib/seo';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';

export const metadata: Metadata = pageMetadata({
  title: 'Correspondence · Hysteresis Research',
  description:
    'Correspondence — research collaboration, allocator conversations, the occasional question on method. Write to the desk.',
  path: '/contact',
  lang: 'en',
});

export default function Contact() {
  return (
    <main>
      <section className="article wrap" id="correspondence">
        <SectionHead
          numeral="IV"
          title="Correspondence"
          folio="Letters to the desk · p. 05"
        />

        <Reveal as="p" className="standfirst">
          <span className="cap">For allocators who read this far,</span> and for
          anyone with a serious question on method.
        </Reveal>
      </section>

      <div className="corr">
        <Reveal as="div" className="wrap inner">
          <div>
            <p>
              Research collaboration, allocator conversations, the occasional
              question on method. Write to the desk — we reply when there is
              something useful to say.
            </p>
            <p>
              No performance figures travel by email; a figure appears when it can
              be examined, and not before. What does travel is the argument, and a
              willingness to be wrong in writing.
            </p>
          </div>

          <aside className="write" aria-label="Reach the desk">
            <span className="label label--signal">Write to the desk</span>
            <a className="addr" href="mailto:fund@hysres.com">
              fund@hysres.com
            </a>
            <small>
              Hysteresis Research ·{' '}
              <span lang="zh-Hans">迟滞研究</span>. Established MMXXVI. Nothing
              herein is an offer, a solicitation, or investment advice.
            </small>
          </aside>
        </Reveal>
      </div>
    </main>
  );
}
