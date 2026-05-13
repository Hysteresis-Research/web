import BHMark from '../../components/BHMark';

export const metadata = {
  title: '札记 · Hysteresis Research · 迟滞研究',
  description: '案头的短篇文字——准备中。',
};

export default function NotesZh() {
  return (
    <main lang="zh-Hans">
      <div className="col">
        <div className="marginalia">§1</div>
        <div className="hero-mark">
          <BHMark width={180} height={108} strokeWidth={2.2} />
        </div>

        <div className="marginalia">notes</div>
        <h1>札记</h1>

        <div></div>
        <p className="lede">准备中。</p>

        <div className="marginalia">§2</div>
        <p className="body-paragraph">用于短篇文字<span className="em">——</span>案头的观察、被回收的 thesis 及其原因、regime 转换在文字沉淀之后呈现出的形状。</p>

        <div className="marginalia">§3</div>
        <p className="body-paragraph">一篇 thesis paper 要一年，一篇札记可以是一周。短的形态承载着尚未成为承重梁的东西：经验上的惊讶、被回收的假设、某个周二市场的样貌。</p>

        <div></div>
        <p className="signature">首批札记正在写。等到它们<span className="signal">能够独立成篇</span>时，会在此发表。</p>
      </div>
    </main>
  );
}
