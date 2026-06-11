import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import Reveal from '../../components/Reveal';
import SectionHead from '../../components/SectionHead';

export const metadata: Metadata = pageMetadata({
  title: '通信 · 迟滞研究',
  description:
    '通信——研究合作、配置方对话、偶尔关于方法的问询。写信至交易台。',
  path: '/zh/contact',
  lang: 'zh-Hans',
});

export default function ContactZh() {
  return (
    <main lang="zh-Hans">
      <section className="article wrap" id="correspondence">
        <SectionHead numeral="四" title="通信" folio="写给交易台的信 · 页 05" />

        <Reveal as="p" className="standfirst">
          <span className="cap">写给读到这里的配置方，</span>
          也写给任何一个对方法有正经问题的人。
        </Reveal>
      </section>

      <div className="corr">
        <Reveal as="div" className="wrap inner">
          <div>
            <p>
              研究合作、配置方对话、偶尔一个关于方法的问题。写信至交易台——
              有值得说的，便回。
            </p>
            <p>
              业绩数字不走邮件；数字要等到它能被审视，才会出现，不会更早。
              走邮件的是论证，以及一份愿意在白纸黑字里认错的态度。
            </p>
          </div>

          <aside className="write" aria-label="联系交易台">
            <span className="label label--signal">写信至交易台</span>
            <a className="addr" href="mailto:fund@hysres.com">
              fund@hysres.com
            </a>
            <small>
              <span lang="en">Hysteresis Research</span> · 迟滞研究。
              创立于二〇二六年。本页所载，皆非要约、招揽或投资建议。
            </small>
          </aside>
        </Reveal>
      </div>
    </main>
  );
}
