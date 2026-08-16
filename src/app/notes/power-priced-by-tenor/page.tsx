import PowerTenorChart from '../../components/charts/PowerTenorChart';
import Link from 'next/link';
import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import Reveal from '../../components/Reveal';
import SectionHead from '../../components/SectionHead';

export const metadata: Metadata = pageMetadata({
  title: 'Power, priced by tenor · Notes · Hysteresis Research',
  description:
    'Two compute-power contracts signed a month apart — a 20-year lease at about $270 per megawatt-hour and a 90-day-exit rental at roughly $5,000 — say the price of a megawatt is now a function of how long you sign for. Why the curve is steep, and what would flatten it.',
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
          <span className="cap">Two contracts, signed a month apart</span>, put
          numbers on what compute-grade electricity now costs. Read together,
          they say the price of a megawatt is not a level. It is a function of
          how long you are willing to sign for.
        </Reveal>

        <div className="essay">
          <Reveal as="figure" className="fig-plate">
            <figcaption>
              <span className="fig-label">
                <b>Fig.</b> — The megawatt, by tenor
              </span>
              <p className="fig-cap">
                Price per megawatt-hour against contract tenor, log–log. Public
                terms; the per-MWh arithmetic is ours, the SpaceX level is
                Somani&rsquo;s estimate.
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
            IT-megawatt-hour, or ≈$197 per kilowatt-month. Three weeks earlier,
            SpaceX had signed Reflection AI: $150M a month from 2026-07-01
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
            TeraWulf sells a powered campus; the tenant brings the GPUs. SpaceX
            sells the compute itself; the GPUs are in the price. Neel Somani, a
            former hedge-fund power quant whose free primer{' '}
            <em>Power 2026</em> is the occasion for this note, puts the SpaceX
            rate on the order of $5,000 per megawatt-hour on his own napkin
            arithmetic. The megawatt allocation behind that figure is not
            public, so treat the level as an estimate; the ordering is not in
            doubt. Call it eighteen-fold. Most of that gap is silicon rent, not
            electricity. But read the other axis. The cheap contract runs
            twenty years. The dear one can end in ninety days. That is not a
            coincidence of two term sheets. It is the financing.
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            Wholesale power clears at $10–150 per MWh. A long-tenor powered
            campus at two to five times that. A ninety-day compute option an
            order of magnitude above.
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
            scarce capacity are expensive. So the two prints are one market
            read at two points on a curve. Sign long and you buy the megawatt
            near cost-plus. Sign short and you pay the scarcity rent for the
            right to leave.
          </Reveal>

          <Reveal as="p">
            The curve is steep because supply cannot answer on the buyer&rsquo;s
            clock. The three makers of heavy gas turbines — GE Vernova, Siemens
            Energy, Mitsubishi Power — are sold out, with backlogs running from
            months to years; the relief valves in use are repurposed jet
            engines and Chinese imports, which is what a binding constraint
            looks like when it is being routed around at a premium.
            Interconnection queues run years. Homer City&rsquo;s air permit
            arrived in November 2025 for a site that has been wired to the grid
            for half a century. Against that, data centers already draw about
            5% of US power and the load is doubling every two years or so, on
            Somani&rsquo;s figures. While the constraint binds, the tenor curve
            stays steep, and every buyer who cannot sign for twenty years pays
            for the ones who can.
          </Reveal>

          <Reveal as="aside" className="marginnote">
            <span className="mn-rule" />
            What would flatten it: turbine backlogs that stop lengthening; the
            power-only rate and tenor of each new deal compressing; a
            rate-class ruling. Policy reprices faster than physics.
          </Reveal>

          <Reveal as="p">
            What would flatten it is worth writing down in advance. First, the
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
            sixteen. Here duration is not the open leg. It is the price.
          </Reveal>

          <Reveal as="p" className="close">
            The megawatt has a term structure now. Twenty years buys it near
            cost; ninety days rents it at scarcity. Not a position; a curve
            worth filing.
          </Reveal>

          <Reveal as="p" className="colophon">
            <b>Sources.</b> The TeraWulf–Anthropic terms are from
            TeraWulf&rsquo;s announcement of 2026-07-06; the SpaceX–Reflection
            terms are as reported on 2026-06-22 (Bloomberg, CNBC, Axios); the
            Volta–Bitdeer rate is from Bitdeer&rsquo;s announcement of
            2026-08-04. Wholesale ranges, plant costs and financing spreads,
            the turbine backlog, the Homer City figures, the data-center share
            of US load and the ≈$5,000 estimate are from Neel Somani,{' '}
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
