import BHMark from '../../components/BHMark';
import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Power Is the Binding Constraint on Compute · Notes · Hysteresis Research',
  description: 'On the shift in the binding constraint on AI compute — from silicon to power. Framed as an archived v0.1 research question, not a position.',
  path: '/notes/power-constrained-compute',
  lang: 'en',
  type: 'article',
});

export default function PowerConstrainedCompute() {
  return (
    <main>
      <div className="col">
        <div className="marginalia">2026<br/>05-16</div>
        <div className="hero-mark">
          <BHMark width={180} height={108} strokeWidth={2.2} />
        </div>

        <div className="marginalia">notes</div>
        <h1>{`Power Is the Binding Constraint on Compute`}</h1>

        <div className="marginalia">§1</div>
        <p className="body-paragraph">{`Hysteresis Research is a research-driven quantitative trading firm. It operates across global macro and crypto derivatives. Its durable advantage is method, not a claimed regime edge. This note is a research argument from our regime-hysteresis research program; it is not a claimed edge or a position.`}</p>

        <div className="marginalia">§2</div>
        <p className="body-paragraph">{`The regime change in this note is one we find compelling enough to build the measurement for. What follows is the argument, not a position.`}</p>

        <div className="marginalia">§3</div>
        <p className="body-paragraph">{`For most of the last decade, the constraint on artificial-intelligence compute was silicon. More capability meant more chips, and the market learned to price that chain with precision: the chip designers, the foundries, the model labs, the hyperscaler capital budgets. It is the most-covered, most-narrated complex in the equity market today.`}</p>

        <div className="marginalia">§4</div>
        <p className="body-paragraph">{`That constraint has moved. The marginal limit on deploying compute is no longer the chip — it is the power to run it, the grid to deliver it, and the years it takes to build either. The bottleneck has shifted from the layer the market watches most closely to the layer it watches least: the physical supply of electricity and the infrastructure that carries it.`}</p>

        <div className="marginalia">§5</div>
        <p className="body-paragraph">{`Whether the market has re-priced this with the same precision is an empirical question, not a slogan — and the reason it might not have is structural rather than informational. Power-sector fundamentals do not re-rate an equity on an announcement; they re-rate it on multi-quarter confirmation. And the analysts who set the anchor still carry demand models built before this regime, in which electricity consumption grows by a fraction of a percent a year. A demand curve that has bent does not travel into those models on the day it bends. It arrives slowly, over exactly the interval a discretionary book graded on monthly performance cannot afford to wait through.`}</p>

        <div className="marginalia">§6</div>
        <p className="body-paragraph">{`If that is right, the distance between a power-demand regime that has already changed and a power-supply complex that has not yet re-rated is not a rumor to be front-run. The open question this note frames is whether it is a gap that `}<em>{`may`}</em>{` persist — long enough to be measured.`}</p>

        <div className="marginalia">§7</div>
        <p className="body-paragraph">{`That last phrase is the whole discipline, and it is also the precondition. We are not interested in the theme; the theme is loud, and loud is already priced. We are interested in the part that is quiet because it is slow: the lag itself, whether it behaves the way the same demand-to-infrastructure transition has behaved in earlier regimes, and the specific conditions under which it would close or reverse. A thesis worth holding is one that says in advance what would prove it wrong — and one that earns its size only after the distance has actually been measured to that standard, not before. This is an archived v0.1 research direction (dormant, unfunded; no asserted edge) precisely because it is the hardest version of that test; it carries no capital, and the measurement and its replication across prior regimes are not in hand.`}</p>

        <div className="marginalia">§8</div>
        <p className="body-paragraph">{`This is the work — turning an observed regime change into a falsifiable question, and letting the research, not the narrative, decide whether and when it carries size.`}</p>

        <div></div>
        <p className="signature">{`Research compounds; capital follows.`}</p>
      </div>
    </main>
  );
}
