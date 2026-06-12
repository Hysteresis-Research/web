import MnavDilutionExplorer from '../../components/charts/MnavDilutionExplorer';
import Link from 'next/link';
import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import Reveal from '../../components/Reveal';
import SectionHead from '../../components/SectionHead';

export const metadata: Metadata = pageMetadata({
  title: 'The flywheel, in reverse · Notes · Hysteresis Research',
  description:
    'At a discount, issuing common stock to buy bitcoin destroys bitcoin-per-share. The week the market cheered diluted holders ~60× more than the bitcoin sale it feared.',
  path: '/notes/flywheel-reverse',
  lang: 'en',
  type: 'article',
});

export default function FlywheelReverse() {
  return (
    <main>
      <article className="article wrap" id="flywheel-reverse">
        <SectionHead
          numeral="V"
          title="The flywheel, in reverse"
          folio="Notes · MSTR · 2026-06-12"
        />

        <Reveal as="p" className="standfirst">
          <span className="cap">The sale made the headlines.</span> The
          issuance — some sixty times more dilutive — did not.
        </Reveal>

        <div className="essay">
          <Reveal as="figure" className="fig-plate">
            <figcaption>
              <span className="fig-label">
                <b>Fig.</b> — The accretion test
              </span>
              <p className="fig-cap">
                Issuing stock to buy bitcoin lifts bitcoin-per-share only when
                f&nbsp;&times;&nbsp;mNAV&nbsp;&gt;&nbsp;1 — f the share of the
                raise that buys coin. Drag the price and that share; watch the
                marker cross.
              </p>
            </figcaption>
            <MnavDilutionExplorer lang="en" />
          </Reveal>

          <Reveal as="p" className="lede">
            <span className="leadin">On 2026-06-08</span>, MSTR disclosed that in
            the prior week it had raised roughly $181M by selling common stock
            and spent it buying 1,550 bitcoin. The stock rose 5.6% on the print.
            Two weeks before, it had sold 32 bitcoin — its first sale since 2022
            — and the headlines wrote the end of an era. By the one measure that
            compounds for a holder, bitcoin per share, the celebrated week did
            roughly sixty times the damage of the feared one.
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            The 32-coin sale moved bitcoin-per-share by −0.004%. The issuance
            week moved it −0.24% — and it recurs.
          </Reveal>

          <Reveal as="p">
            The engine everyone knows runs forward at a premium. When the stock
            trades above the bitcoin it holds, selling a share and buying coin
            with the proceeds hands each remaining share <em>more</em> bitcoin
            than it gave up. Premium funds accretion; accretion sustains the
            premium. That is the whole of the reflexive case, and for two years
            it held.
          </Reveal>

          <Reveal as="p">
            Reverse the sign of the premium and you reverse the engine. The
            discount we tracked in{' '}
            <Link href="/notes/mstr-mnav">Discount, unwinding</Link> never
            closed — it stood near 0.78&times; as the company issued into it.
            Issue a share below the
            value it represents, buy coin at full value, and the new share
            arrives carrying <em>less</em> bitcoin than the ones already
            outstanding. The flywheel does not idle at a discount. It runs
            backward.
          </Reveal>

          <Reveal as="p">
            The test is one line. Per dollar raised, bitcoin-per-share rises only
            when <span className="leadin">f&nbsp;&times;&nbsp;mNAV&nbsp;&gt;&nbsp;1</span>{' '}
            — f the fraction of the raise that actually buys coin. At f&nbsp;=&nbsp;1,
            every dollar into bitcoin, you still need a premium. Below it the bar
            climbs: at the 0.56 of this week, the discount would have to invert
            to 1.79&times; mNAV before issuance stopped diluting. It was nowhere
            near. The marker in the plate above sits well short of that
            breakeven — drag the price up and watch how far it has to travel.
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            <i>f</i> = 0.56 because only $101M of the $181M bought coin. The rest
            became cash — to service the preferred dividend, not the balance
            sheet&rsquo;s bitcoin.
          </Reveal>

          <Reveal as="p">
            Why issue into a discount at all? Because the alternative is worse to
            look at. Of the $181M raised, $101M bought bitcoin and the remainder
            built cash — the buffer that pays the perpetual-preferred coupon, on
            the order of a billion dollars a year and climbing, against a
            software business that throws off little. Selling common at
            0.78&times; to feed that coupon is the
            least-ugly way to keep the machine fed without selling more coin.
            Common holders are diluted, and subordinated, to protect the
            preferred.
          </Reveal>

          <Reveal as="p">
            Which returns us to the inversion. The 32-coin sale that ended the
            never-sell doctrine was, in per-share terms, a rounding error:
            −0.004%. The common issuance the market applauded took −0.24% out of
            bitcoin-per-share in a single week, and it repeats every week the
            discount holds. The tape feared the symbol and cheered the
            arithmetic. The arithmetic is what compounds.
          </Reveal>

          <Reveal as="p" className="close">
            A reversed flywheel is not a verdict on the price. It is a cost,
            paid weekly, in the only unit that accrues to a holder. We are
            counting it.
          </Reveal>

          <Reveal as="p" className="colophon">
            <b>Sources.</b> Holdings, the week&rsquo;s raise and purchase, and the
            32-coin sale are from MSTR&rsquo;s 8-Ks of 2026-05-31 and 2026-06-08;
            the first sale since 2022 follows from the filing record, and the
            5.6% move is the session tape.
          </Reveal>
        </div>
      </article>
    </main>
  );
}
