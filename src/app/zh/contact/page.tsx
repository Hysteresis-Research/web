import BHMark from '../../components/BHMark';

export const metadata = {
  title: '联系 · Hysteresis Research · 迟滞研究',
  description: '通信——写信至交易台。',
};

export default function ContactZh() {
  return (
    <main lang="zh-Hans">
      <div className="col">
        <div className="marginalia">§1</div>
        <div className="hero-mark">
          <BHMark width={180} height={108} strokeWidth={2.2} />
        </div>

        <div className="marginalia">contact</div>
        <h1>联系</h1>

        <div></div>
        <p className="lede">关于通信。</p>

        <div className="marginalia">§2</div>
        <p className="body-paragraph">研究合作、配置方对话、偶尔关于方法的问询。请写信至交易台<span className="em">——</span>有值得说的，便回复。</p>

        <div className="marginalia">§3</div>
        <p className="body-paragraph">
          <a className="email-link" href="mailto:fund@hysres.com">
            fund@hysres.com
          </a>
        </p>

        <div></div>
        <p className="signature">迟滞研究。</p>
      </div>
    </main>
  );
}
