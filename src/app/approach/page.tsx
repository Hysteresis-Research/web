import type { Metadata } from 'next';
import { pageMetadata } from '../../lib/seo';
import Reveal from '../components/Reveal';
import SectionHead from '../components/SectionHead';

export const metadata: Metadata = pageMetadata({
  title: 'On Method · Hysteresis Research',
  description:
    'On method — measuring the gap between fundamentals and price, sizing on the durability of the lag, not on conviction.',
  path: '/approach',
  lang: 'en',
});

export default function Approach() {
  return (
    <main>
      <section className="article wrap" id="method">
        <SectionHead numeral="I" title="On Method" folio="An essay · p. 02" />

        <Reveal as="p" className="standfirst">
          <span className="cap">A research-driven trading firm</span> is, in our
          practice, a particular kind of skepticism — and a discipline that sizes
          on the durability of a gap, not on the conviction that it will close.
        </Reveal>

        <div className="essay">
          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            <i>Hysteresis</i> is not delay but path-dependence: a system that,
            after a shock, does not return to its prior state. The firm is named
            for the lag, not for the trade.
          </Reveal>

          <Reveal as="p" className="lede">
            <span className="leadin">We accept</span> that markets pre-process
            information faster than any human consortium can. We observe that they
            pre-process it <em>unevenly</em>
            <sup className="fn">
              <a href="#fn1" id="ref1">
                1
              </a>
            </sup>{' '}
            — that there are durations during which price has not yet caught up
            with what is structurally true. Those durations are the entire
            subject. Everything else is waiting.
          </Reveal>

          <Reveal className="twocol">
            <p>
              Hysteresis is the technical name not for delay, but for
              path-dependence — a system that, after a shock, does not return to
              its prior state; the history is absorbed into the structure itself.
              In magnetism, the field carries the memory of how it was magnetised;
              in economics, expectations and capital allocation carry the memory
              of a regime change long after the regime has changed.
            </p>
            <p>
              The framing is borrowed; the discipline is empirical. We measure the
              gap between fundamentals and price, and we size on the durability of
              that gap — not on conviction, not on forecasting when it closes. A
              position must have a written exit rule; without one, the position is
              outside the method, regardless of whether the call was right.
              <sup className="fn">
                <a href="#fn2" id="ref2">
                  2
                </a>
              </sup>
            </p>
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            A discipline that disappoints the part of the mind that wants to be
            right will, by construction, also disappoint on the long run-up. That
            disappointment is the toll.
          </Reveal>

          <Reveal as="p" className="close">
            This requires accepting that a discipline which consistently
            disappoints the part of the mind wanting to be right will, by
            construction, also occasionally disappoint on the long run-up. We
            treat that disappointment as the price of not being on the wrong side
            of the same regime change later. A longer note is in preparation — on
            what we look for at regime transitions, what we track during a
            position, and what retires a thesis. It will be published here when
            the prose has settled.
          </Reveal>

          <Reveal as="ol" className="footnotes">
            <li id="fn1">
              <span className="fnum">1</span>Unevenly is the operative word.
              Efficiency in the aggregate is consistent with persistent local
              error; the firm exists in the error, not the aggregate.{' '}
              <a href="#ref1" aria-label="Back to text">
                ↩
              </a>
            </li>
            <li id="fn2">
              <span className="fnum">2</span>The exit is written before the entry,
              or the entry does not happen. A right call without a rule is luck
              we decline to bank.{' '}
              <a href="#ref2" aria-label="Back to text">
                ↩
              </a>
            </li>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
