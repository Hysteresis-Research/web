import Link from 'next/link';
import FooterLegalLinks from './FooterLegalLinks';

// The colophon: a printer's note that closes the issue. Three columns — the
// imprint, the type note, the contents — then the imprint rule with copyright,
// disclaimer, and the legal links (Terms / Privacy, preserved from the prior
// footer). Server component.
//
// Locale-aware: renders in Chinese with /zh contents targets on the /zh/* tree.
// The legal disclaimer's meaning is preserved across both editions.

type Locale = 'en' | 'zh';

const CONTENTS_EN = [
  { label: 'I · On Method', href: '/#method' },
  { label: 'II · The Practice', href: '/firm' },
  { label: 'III · The Mandate', href: '/#mandate' },
  { label: 'IV · Correspondence', href: '/contact' },
  { label: 'V · Notes', href: '/notes' },
] as const;

const CONTENTS_ZH = [
  { label: '一 · 方法', href: '/zh#method' },
  { label: '二 · 实践', href: '/zh/firm' },
  { label: '三 · 纲领', href: '/zh#mandate' },
  { label: '四 · 通信', href: '/zh/contact' },
  { label: '五 · 笔记', href: '/zh/notes' },
] as const;

export default function Colophon({ locale = 'en' }: { locale?: Locale }) {
  const zh = locale === 'zh';
  const contents = zh ? CONTENTS_ZH : CONTENTS_EN;
  const backHref = zh ? '/zh#top' : '/#top';

  if (zh) {
    return (
      <footer className="colophon-foot" lang="zh-Hans">
        <div className="wrap colophon">
          <div>
            <h2 lang="zh-Hans">迟滞研究</h2>
            <p className="hanzi-foot hanzi-foot--latin" lang="en">
              Hysteresis Research
            </p>
            <p style={{ marginTop: '.7rem' }}>
              创立于二〇二六年。研究驱动的量化交易公司——本页一如其所属的刊物，只在有可被检验的判断时才发表。
            </p>
          </div>
          <div>
            <span className="label">版本说明</span>
            <p>
              封面用 Archivo，正文用 Spectral，印在暖色纸面上，全篇只留一处信号色。封面只喊一次，内页安静地论证。本刊为连续系列第一号。此处不列任何业绩数字，是有意为之；数字只出现在它们能被审视的地方。
            </p>
          </div>
          <div>
            <span className="label">本期目录</span>
            <ul>
              {contents.map((c) => (
                <li key={c.href}>
                  <Link href={c.href}>{c.label}</Link>
                </li>
              ))}
              <li>
                <Link href={backHref}>回到封面 ↑</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="wrap imprint">
          <span>© 2026 迟滞研究</span>
          <span>本页所载内容均非要约、招揽或投资建议。</span>
          <span>
            <FooterLegalLinks />
          </span>
        </div>
      </footer>
    );
  }

  return (
    <footer className="colophon-foot">
      <div className="wrap colophon">
        <div>
          <h2>Hysteresis Research</h2>
          <p className="hanzi-foot" lang="zh-Hans">
            迟滞研究
          </p>
          <p style={{ marginTop: '.7rem' }}>
            Established MMXXVI. A research-driven quantitative trading firm,
            published — like this page — only when there is something defensible
            to say.
          </p>
        </div>
        <div>
          <span className="label">Colophon</span>
          <p>
            The cover is set in Archivo, the pages in Spectral, on warm paper
            with one signal accent. The cover shouts once; the pages argue
            quietly. Number one of a continuing series. No performance figures
            are shown here, by design; numbers appear only where they can be
            examined.
          </p>
        </div>
        <div>
          <span className="label">Contents</span>
          <ul>
            {contents.map((c) => (
              <li key={c.href}>
                <Link href={c.href}>{c.label}</Link>
              </li>
            ))}
            <li>
              <Link href={backHref}>Back to the cover ↑</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap imprint">
        <span>© 2026 Hysteresis Research</span>
        <span>
          Nothing herein is an offer, a solicitation, or investment advice
        </span>
        <span>
          <FooterLegalLinks />
        </span>
      </div>
    </footer>
  );
}
