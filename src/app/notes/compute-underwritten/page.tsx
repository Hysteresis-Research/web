import VoltaDealStack from '../../components/charts/VoltaDealStack';
import Link from 'next/link';
import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import Reveal from '../../components/Reveal';
import SectionHead from '../../components/SectionHead';

export const metadata: Metadata = pageMetadata({
  title: 'Compute, underwritten · Notes · Hysteresis Research',
  description:
    'A six-month-old firm reports a $10B, six-year compute contract, rents the shell from a bitcoin miner, and finances the GPUs like toll-road cashflow. The market read the term sheet, not the headline.',
  path: '/notes/compute-underwritten',
  lang: 'en',
  type: 'article',
});

export default function ComputeUnderwritten() {
  return (
    <main>
      <article className="article wrap" id="compute-underwritten">
        <SectionHead
          numeral="V"
          title="Compute, underwritten"
          folio="Notes · Compute · 2026-08-09"
        />

        <Reveal as="p" className="standfirst">
          <span className="cap">Six months from incorporation</span> to a
          ten-billion-dollar order book. The interesting part is not the size.
          It is the financing structure — and what the market did with it.
        </Reveal>

        <div className="essay">
          <Reveal as="figure" className="fig-plate">
            <figcaption>
              <span className="fig-label">
                <b>Fig.</b> — The deal stack
              </span>
              <p className="fig-cap">
                Headline terms as announced, 2026-08-04. Three layers, two
                long-dated contracts, one break clause.
              </p>
            </figcaption>
            <VoltaDealStack lang="en" />
          </Reveal>

          <Reveal as="p" className="lede">
            <span className="leadin">On 2026-08-04</span>, Volta came out of
            stealth with $300M raised across seed and Series A at a $2.4B
            post-money — a16z and Altimeter co-leading, NVIDIA, Michael
            Dell&rsquo;s family office, Azora and Matter Venture Partners
            alongside — and a $10B, six-year compute partnership with
            &ldquo;a leading AI lab.&rdquo; Bloomberg named the lab as
            Anthropic the same day. Neither side has confirmed it.
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            Founded January 2026. Roughly 100–150 people across London, Palo
            Alto and New York. The founders built Brookfield&rsquo;s
            AI-infrastructure platform before leaving to build this one.
          </Reveal>

          <Reveal as="p">
            The founders are infrastructure investors, not chip people. Ricard
            Boada and Sofia Gumuzio ran AI-infrastructure investing at
            Brookfield; the cloud software came by acquisition — Genesis
            Cloud, bought this spring, a Munich GPU cloud that has served some
            20,000 users since 2018. Read the org chart and the product is not
            a datacenter. The product is a capital structure with a datacenter
            attached.
          </Reveal>

          <Reveal as="p">
            The structure is worth drawing precisely. Volta signed a 16-year
            colocation lease with Bitdeer — the NASDAQ-listed bitcoin miner —
            at Tydal, Norway: 121 MW of IT load, roughly 133 MW gross, four
            data halls, about $4.7B of contracted payments averaging
            ~$202/kW-month (3% annual escalators), and an eight-year extension
            option that
            would take the total to roughly $8B over 24 years. First halls are
            targeted for 2026-12-31, the balance by 2027-03-31. Bitdeer
            supplies the shell, the hydropower and the operations; Volta
            supplies what goes inside — NVIDIA&rsquo;s Vera Rubin generation,
            Dell systems — and the cloud layer on top. Roughly $1.3B of
            letters of credit, arranged by J.P. Morgan and one other global
            bank, stand behind the lease.
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            Per IT-megawatt-year, as announced: ≈$13.8M in from the lab,
            ≈$2.4M out for shell and power. The spread is what buys the GPUs.
          </Reveal>

          <Reveal as="p">
            The arithmetic, taking the announcement at face value: $10B over
            six years across 121 MW is ≈$13.8M per IT-megawatt-year coming in;
            the lease costs ≈$2.4M going out. The spread — ≈$11.4M per
            MW-year, ≈$1.37B a year — is what services the actual capital
            good: GPU systems that run $30–40M per megawatt at this
            generation, call it $4–5B for the site. Six-year contracted
            revenue of roughly 2–2.5&times; the systems bill is familiar
            neocloud math. What is less familiar is the sequence. Volta signs
            the contract first, then finances the hardware against the
            contracted cashflow — the $5B programme with Azora, project equity
            plus senior debt, exists to do exactly that, non-dilutively, site
            after site. &ldquo;Compute has become a new infrastructure asset
            class&rdquo; is the CEO&rsquo;s line, and it is the entire thesis:
            the pitch is not better silicon or better software. It is that
            compute contracts can be financed the way toll roads are.
          </Reveal>

          <Reveal as="p">
            One honesty clause belongs next to that arithmetic: the $10B is
            described by Volta as a commitment over the life of the
            partnership, of which Tydal is the first project. If later sites
            fold into the same envelope, the per-megawatt figure dilutes
            accordingly. The announcement attaches the number to this
            deployment; the announcement is also the only place the number
            lives.
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            2025 priced the announcement. 2026 reads the term sheet: firm
            value ≈$2.7B against the $4.7B headline; LC coverage, 28 cents on
            the nominal dollar.
          </Reveal>

          <Reveal as="p">
            What the market did with all this is the more instructive print.
            Bitdeer had disclosed the lease&rsquo;s existence on June 29
            without financial terms; the stock fell about 7% that day. On
            August 4, with the terms and the tenant&rsquo;s reported identity
            public, it opened the pre-market up 23% — and faded to roughly
            flat by the close, a ~$2.8B company at ~$11.5. Between the open
            and the close, the market found the two numbers that matter: a
            no-fee termination right at year ten cuts the firmly-committed
            value to ≈$2.7B by Benchmark&rsquo;s arithmetic, and $1.3B of
            letters of credit covers 28% of the nominal $4.7B. Sell-side moved
            anyway — Needham took its target to $22 from $19. A year ago this
            tape bought the headline and asked later. It is reading clauses
            now — which is, for the asset class Volta wants to create, the
            beginning of actual underwriting.
          </Reveal>

          <Reveal as="p">
            The open leg of the structure is duration. Revenue is contracted
            for six years; the lease runs sixteen. If compute stays scarce
            through 2032, renewal solves the mismatch. If it does not, the
            year-ten break is Volta&rsquo;s escape hatch — and the same clause
            with the sign flipped is Bitdeer&rsquo;s residual risk. Add the
            standard list: one customer, one site, suppliers next to the cap
            table (NVIDIA invests and sells; Dell supplies, while Michael
            Dell&rsquo;s family office invests), a chip generation still
            ramping, and a first-light deadline five months out. The
            December 31 date is the rare thing in this story that is simply
            checkable.
          </Reveal>

          <Reveal as="p">
            We filed the power argument{' '}
            <Link href="/notes/power-constrained-compute">in May</Link> — the
            binding constraint on compute has moved to electricity and the
            years it takes to build. Tydal is that argument wearing a term
            sheet: the scarce input is a powered shell on Norwegian hydro, the
            miner owns it, and an AI lab is reported willing to commit $10B
            through a six-month-old intermediary to reach it. The lab pays for
            certainty, the miner converts megawatts into contracted rent, and
            the intermediary&rsquo;s entire margin is the price of assembling
            certainty out of parts. That margin is contracted, not yet earned —
            first light is five months out. Whether it is durable is the
            question the Azora programme&rsquo;s first term sheet will answer.
          </Reveal>

          <Reveal as="p" className="close">
            A ten-billion-dollar headline is narrative. A year-ten break
            clause is data. We read the clauses, and we will be watching two
            dates: December 31, and the day either party says the
            customer&rsquo;s name on the record. Not a position; a structure
            worth filing.
          </Reveal>

          <Reveal as="p" className="colophon">
            <b>Sources.</b> Lease terms, rates, phasing and the letters of
            credit are from Bitdeer&rsquo;s announcement and Form 6-K of
            2026-08-04; the raise, valuation, investor list, the $10B
            partnership, the Azora programme and the Genesis Cloud acquisition
            are from Volta&rsquo;s launch announcement of the same day; the
            tenant&rsquo;s identity is as reported by Bloomberg and is
            unconfirmed by either party; the ≈$2.7B firm-commitment arithmetic
            is Benchmark&rsquo;s, the $22 target Needham&rsquo;s, both as
            reported; session prices are the tape. Per-megawatt figures are
            our own arithmetic on those disclosures.
          </Reveal>
        </div>
      </article>
    </main>
  );
}
