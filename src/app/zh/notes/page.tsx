import Link from 'next/link';
import type { Metadata } from 'next';
import { pageMetadata } from '../../../lib/seo';
import Reveal from '../../components/Reveal';
import SectionHead from '../../components/SectionHead';

export const metadata: Metadata = pageMetadata({
  title: '笔记 · 迟滞研究',
  description:
    '盘面短文——观察、被回收的假设、一次范式转换在文字沉淀之后呈现的样子。',
  path: '/zh/notes',
  lang: 'zh-Hans',
});

type Note = {
  date: string;
  tag: string;
  title: string;
  href: string;
};

// 笔记的登记册。每篇等到它能独立成篇，再发表；顺序由近及远。
// 标题与链接沿用先前的索引，未作改动。
const NOTES: Note[] = [
  {
    date: '2026-08-16',
    tag: 'COMPUTE',
    title: '电力，按期限定价',
    href: '/zh/notes/power-priced-by-tenor',
  },
  {
    date: '2026-08-09',
    tag: 'COMPUTE',
    title: '算力，按基建融资',
    href: '/zh/notes/compute-underwritten',
  },
  {
    date: '2026-06-12',
    tag: 'MSTR',
    title: '飞轮，反着转',
    href: '/zh/notes/flywheel-reverse',
  },
  {
    date: '2026-05-16',
    tag: 'MACRO',
    title: '电力是算力的硬约束',
    href: '/zh/notes/power-constrained-compute',
  },
  {
    date: '2026-05-13',
    tag: 'MSTR',
    title: '折价，正在收窄',
    href: '/zh/notes/mstr-mnav',
  },
  {
    date: '2026-05-13',
    tag: 'BTC',
    title: '更浅，目前为止',
    href: '/zh/notes/three-cycles',
  },
  {
    date: '2026-05-06',
    tag: 'BTC',
    title: '不是那条线，是那一触',
    href: '/zh/notes/not-the-line',
  },
  {
    date: '2026-05-05',
    tag: 'BTC',
    title: '脱钩，只脱一边',
    href: '/zh/notes/decoupled-one-side',
  },
  {
    date: '2026-05-02',
    tag: 'BTC',
    title: '先验，因条件而异',
    href: '/zh/notes/prior-conditioned',
  },
  {
    date: '2026-04-26',
    tag: 'BTC',
    title: '溢价，正在压缩',
    href: '/zh/notes/premium-compressing',
  },
];

export default function NotesZh() {
  return (
    <main lang="zh-Hans">
      <section className="article wrap" id="notes">
        <SectionHead numeral="五" title="笔记" folio="两单之间的长读" />

        <Reveal as="p" className="standfirst">
          <span className="cap">来自交易台的短文</span>
          ——盘面观察、被回收的假设以及它们被回收的原因、一次范式转换在文字沉淀之后
          呈现的样子。
        </Reveal>

        <Reveal as="ol" className="notindex">
          {NOTES.map((n) => (
            <li key={n.href}>
              <Link href={n.href}>
                <time className="when" dateTime={n.date}>
                  {n.date}
                </time>
                <span className="tag">{n.tag}</span>
                <span className="head">{n.title}</span>
              </Link>
            </li>
          ))}
        </Reveal>

        <Reveal as="p" className="close" style={{ marginTop: '1.7rem' }}>
          还有更多在写。每一篇，等到它能独立成篇，再发表。
        </Reveal>
      </section>
    </main>
  );
}
