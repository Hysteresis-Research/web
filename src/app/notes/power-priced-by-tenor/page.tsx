import PowerTenorChart from '../../components/charts/PowerTenorChart';
import Link from 'next/link';
import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import Reveal from '../../components/Reveal';
import SectionHead from '../../components/SectionHead';

export const metadata: Metadata = pageMetadata({
  title: 'Power, priced by tenor · Notes · Hysteresis Research',
  description:
    'Two compute-power contracts, two weeks apart: a 20-year powered-campus lease at about $270 per megawatt-hour and a 90-day-exit compute rental estimated near $5,000. Different products — but tenor is what makes the cheap end financeable at all. Why the gap is wide, and what would narrow it.',
  path: '/notes/power-priced-by-tenor',
  lang: 'en',
  type: 'article',
});

export default function PowerPricedByTenor() {
  return (
    <main>
      <article className="article wrap" id="power-priced-by-tenor">
        <SectionHead
          numeral="V"
          title="Power, priced by tenor"
          folio="Notes · Compute · 2026-08-16"
        />

        <Reveal as="p" className="standfirst">
          <span className="cap">Two contracts, two weeks apart</span>, put
          numbers on what compute-grade electricity now costs. They are not the
          same product, and the distance between them is mostly silicon. What
          they share is the variable that decides whether the cheap end gets
          built at all: how long the buyer will sign for.
        </Reveal>

        <div className="essay">
          <Reveal as="figure" className="fig-plate">
            <figcaption>
              <span className="fig-label">
                <b>Fig.</b> — Two products, two tenors
              </span>
              <p className="fig-cap">
                Price per megawatt-hour against contract tenor, log–log. Public
                terms; the per-MWh arithmetic is ours, the SpaceX level is
                Somani&rsquo;s estimate and its terms are as reported.
              </p>
            </figcaption>
            <PowerTenorChart lang="en" />
          </Reveal>

          <Reveal as="p" className="lede">
            <span className="leadin">On 2026-07-06</span>, TeraWulf announced a
            20-year lease with Anthropic at its Justified Data campus in
            Hawesville, Kentucky: about 401 MW of critical IT load, roughly
            $19B of contracted revenue over the initial term, first capacity in
            the second half of 2027 and the full 401 MW by early 2028, with
            investment-grade credit support expected behind it. Divide the one
            number by the others and the lease clears at ≈$270 per
            IT-megawatt-hour, or ≈$197 per kilowatt-month. Two weeks earlier,
            on 2026-06-22, Bloomberg, CNBC and Axios had reported a
            SpaceX–Reflection AI agreement: $150M a month from 2026-07-01
            through 2029, up to $6.3B, for NVIDIA GB300 capacity at Colossus 2
            outside Memphis, with either party free to walk on 90 days&rsquo;
            notice after an initial three-month commitment.
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            A second long-tenor print, from{' '}
            <Link href="/notes/compute-underwritten">our August note</Link>:
            Volta&rsquo;s 16-year Tydal lease from Bitdeer averages ~$202 per
            kW-month, ≈$277 per MWh. Two miners, two continents, one price.
          </Reveal>

          <Reveal as="p">
            These are not the same product, and the difference is the point.
            TeraWulf sells a powered campus; on Somani&rsquo;s reading the
            tenant brings the GPUs, though the announcement itself is silent on
            who supplies them. SpaceX, as reported, sells the compute itself;
            the GPUs are in the price. Neel Somani, a former hedge-fund power
            quant whose free primer <em>Power 2026</em> is the occasion for
            this note, puts the SpaceX rate on the order of $5,000 per
            megawatt-hour on his own napkin arithmetic. The megawatt allocation
            behind that figure is not public, so treat the level as an
            estimate; the ordering is not in doubt. Call it eighteen-fold. Most
            of that gap is silicon rent, not electricity, and with the
            allocation unpublished the two cannot be cleanly separated. So the
            two prints do not draw one curve for one product. What they show
            is the two ends of the market, and the variable that divides them
            on the other axis. The cheap contract runs twenty years. The dear
            one can end in ninety days.
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            Wholesale power clears at $10–150 per MWh; the two long-tenor
            powered campuses at ≈$270–277; the ninety-day compute rental,
            silicon included, an order of magnitude above.
          </Reveal>

          <Reveal as="p">
            Consider what has to be built to deliver the cheap end. A
            behind-the-meter gas plant for a compute campus runs on the order
            of $300M; construction debt prices around SOFR plus 225 basis
            points for an established developer with a prime tenant, and the
            lender wants years of contracted cash flow before it funds. Homer
            City in Pennsylvania, the 2 GW coal site shut in 2023, is being
            rebuilt as 4.4 GW of gas at roughly $10B on the strength of exactly
            this kind of offtake. Twenty years underwrites that. Ninety days
            underwrites nothing; it is an option on capacity, and options on
            scarce capacity are expensive. That is the sense in which tenor
            prices power: not as a coefficient on one curve, but as the
            condition under which a megawatt gets financed and built at
            cost-plus rather than rented at scarcity. Sign long and the plant
            gets built for you. Sign short and you pay for someone
            else&rsquo;s.
          </Reveal>

          <Reveal as="p">
            The gap is wide because supply cannot answer on the buyer&rsquo;s
            clock. The three makers of heavy gas turbines — GE Vernova, Siemens
            Energy, Mitsubishi Power — are sold out, with backlogs running from
            months to years; the relief valves in use are repurposed jet
            engines and Chinese imports, which is what a binding constraint
            looks like when it is being routed around at a premium.
            Interconnection queues run years. Homer City&rsquo;s air permit
            arrived in November 2025 for a site that has been wired to the grid
            for half a century. Against that, data centers already draw about
            5% of US power and the load is doubling every two years or so, on
            Somani&rsquo;s figures. While the constraint binds, the premium for
            short tenor stays wide, and every buyer who cannot sign for twenty
            years pays for the ones who can.
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            What would narrow it: turbine backlogs that stop lengthening; the
            power-only rate and tenor of each new deal compressing; a
            rate-class ruling. Policy reprices faster than physics.
          </Reveal>

          <Reveal as="p">
            What would narrow it is worth writing down in advance. First, the
            turbine backlogs: not the level but the second derivative, the
            quarter in which the queue stops lengthening. Second, the
            power-only rate and tenor of each new compute lease; if the next
            twenty-year print comes in well under $270, or the next
            short-tenor deal comes in far under Somani&rsquo;s figure, the
            scarcity rent is compressing. Third, the policy layer. A
            non-binding Ratepayer Protection Pledge, a NERC warning that data
            centers can lift capacity prices, a city (Monterey Park) that has
            already voted its data centers out; a rate-class ruling reprices
            this complex faster than any turbine delivery. And one read-through
            we watch for its own sake: a bitcoin miner&rsquo;s legacy power
            contract at $30–50 per MWh, marked against a $270 twenty-year AI
            lease. TeraWulf was a miner. That spread is the conversion thesis,
            and it is now a print rather than a projection.
          </Reveal>

          <Reveal as="p">
            We filed the power argument{' '}
            <Link href="/notes/power-constrained-compute">in May</Link> and
            the term-sheet reading{' '}
            <Link href="/notes/compute-underwritten">in August</Link>. This is
            the same thread pulled one step further. The open leg in the Volta
            structure was duration: revenue for six years against a lease for
            sixteen. Here duration is what decides which end of the market a
            buyer is standing at.
          </Reveal>

          <Reveal as="p" className="close">
            Twenty years buys a megawatt near cost-plus; ninety days rents
            compute at scarcity, silicon included. Two products, one dividing
            variable. Not a position; two prints worth filing.
          </Reveal>

          <Reveal as="p" className="colophon">
            <b>Sources.</b> The TeraWulf–Anthropic terms are from
            TeraWulf&rsquo;s announcement of 2026-07-06, which does not state
            who supplies the GPUs; the SpaceX–Reflection terms are as reported
            by Bloomberg, CNBC and Axios on 2026-06-22; the Volta–Bitdeer rate
            is from Bitdeer&rsquo;s announcement of 2026-08-04. Wholesale
            ranges, plant costs and financing spreads, the turbine backlog, the
            Homer City figures, the data-center share of US load and the
            ≈$5,000 estimate are from Neel Somani,{' '}
            <em>Power 2026: Electricity Pricing in the Age of AI</em>{' '}
            (power2026.ai), whose primary sources are EIA, FERC and ISO
            publications. Per-MWh and per-kW-month figures are our own
            arithmetic on those disclosures.
          </Reveal>
        </div>
      </article>
    </main>
  );
}
