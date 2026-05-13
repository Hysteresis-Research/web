# Hysteresis Research · 中文语言规范

This document is the canonical Chinese-language style guide for all
Hysteresis Research surfaces. It exists so the Chinese voice does not
drift toward translationese, AI-default phrasing, A-share commentary,
or marketing-copy tropes. Refer to it when writing or auditing any
`/zh/*` route or downstream Chinese surface (Newsletter, Podcast notes,
社群文本).

The goal is not "correct translation." The goal is Chinese prose that
reads as if originally written by a global-macro research firm with a
long-cycle, systems-theoretic worldview — not as a Chinese rendering
of an English source.

## 1. Voice and positioning

The Chinese register sits between:

- Gavekal Research (Chinese editions) — restrained, geopolitical
- Bridgewater long-form macro essays — engineering register, layered
- Arthur Hayes 高质量译文 — high information density, judgmental
- Longview Economics — long-cycle, civilisational
- Exponential View — AI × energy × capital, technologist-economist hybrid

It is **not**:

- 新闻媒体 / 财经资讯号 (information density too low, headline-driven)
- AI 默认翻译腔 (English clause order preserved verbatim)
- A 股研报口吻 (formulaic, regulator-shaped, present-tense pump)
- 学术论文直译 (dead vocabulary, abstract-noun pileups)
- 公众号标题党 (manipulative, exclamation-heavy)

## 2. The Hysteresis persona

A **冷静的长期主义系统论者** — a calm, long-termist systems thinker.

The persona believes:

- Energy economics determines civilisation outcomes
- Capital costs reprice persistently when energy regimes shift
- AI, energy, and geopolitics are reshaping the world jointly, not separately
- Markets are non-linear; second-order effects dominate first-order ones
- Hysteresis (path dependence) is the rule, not the exception

The persona's emotional default is **restraint**. It does not pump.
It does not panic. It does not chase narrative.

## 3. Tonal rules

**Use less of:**

- Exclamation marks (almost never)
- Emotion words: 暴涨 / 暴跌 / 炸裂 / 颠覆 / 革命 / 利好 / 利空
- Marketing absolutes: 巨大机会 / 史无前例 / 风口
- Short, percussive declarations dressed as analysis

**Use more of:**

- "我们正在进入……" (we are entering …)
- "市场尚未充分计入……" (the market has yet to fully price in …)
- "这一变化可能意味着……" (this shift may imply …)
- "长期影响仍被低估" (the long-term impact remains under-appreciated)
- "结构性约束开始……" (structural constraints are beginning to …)
- "二阶影响开始浮现" (second-order effects are beginning to surface)

## 4. Sentence-structure rules

English long sentences **must be restructured**, not transliterated.

The most common AI-translation failure is preserving English clause
order verbatim. Chinese reading rhythm requires:

- Front-load the subject of cause/effect
- Break long English sentences into two or three Chinese clauses
- Avoid noun-stacking (避免名词堆叠)
- Avoid "的" chains longer than two
- Avoid 被-construction unless genuinely passive in meaning

### Example — Bad → Good

**Bad (literal):**

> 随着能源稀缺影响资本成本，市场可能开始更积极地重新定价长期资产。

**Good (restructured for Chinese rhythm):**

> 当能源约束开始推升资本成本后，长久期资产的估值体系或将面临新一轮重估。

The bad version preserves English subordination ("As X, Y …"). The
good version restructures it into a Chinese temporal-conditional clause
("当 X 后，Y …") and replaces "长期资产" with the more precise
"长久期资产", which is the actual term used by Chinese global-macro
research.

### Required argument structure (for analytical paragraphs)

The rules above cover sentence-level translation. The rule below covers
**paragraph-level argument structure**.

Every analytical paragraph in a Hysteresis research note must walk the
same four-step skeleton:

1. **Claim** — a single declarative statement of what is happening
2. **Mechanism** — the named causal pathway (not "because of X" but
   "X drives Y through Z")
3. **Observable marker** — the data series that will confirm or
   falsify the claim
4. **Portfolio implication** — what, if anything, the firm does
   about it (and what would invalidate the position)

If any of the four is missing, the paragraph is **decorative**. Either
fill in what is missing, or cut the paragraph. Decorative paragraphs
are how research notes drift into 公众号 / Substack register without
the author noticing.

**Bad (decorative — fails skeleton):**

> AI 推动了能源需求的结构性扩张。

A claim only. No mechanism, no observable, no implication. The reader
cannot tell whether the firm has thought about this for ten minutes
or ten years.

**Good (complete skeleton):**

> AI 算力扩张正推升美国数据中心电力期货曲线（claim + observable）。
> 每瓦特训练算力背后是 2-3 倍的冷却与配电负荷，这一倍数在能源约束
> 下不会减弱（mechanism）。我们因此对长久期电力曲线持续保持结构性
> 偏多，直到 PJM 曲线与基础负荷增长背离（implication + invalidation）。

The good version is not longer because the author was more
verbose — it is longer because thinking takes words. The bad version
is short because it has not been thought through.

**Exceptions:**

- **Definitional / philosophical paragraphs** are exempt (e.g. the
  paragraph explaining what hysteresis is). These describe a concept,
  not a market call.
- **Closing aphorisms** in /notes signatures are exempt — they exist
  to land the prose, not to make a claim. But they must not substitute
  for analytical content earlier in the note.

## 5. Glossary — required translations

Canonical translations grouped by domain. Use consistently across all
Chinese surfaces. "禁止翻译" column flags the wrong-default that a
naive translator (or AI) is most likely to produce.

### A. 宏观金融

| English | 禁止翻译 | 推荐翻译 |
|---|---|---|
| regime | 政权 | **宏观范式** / 周期环境 |
| repricing | 重新定价 | **资产重估** / 风险重新计价 |
| liquidity | — | **流动性环境** |
| duration | 久期 (alone) | **长久期资产** |
| tightening | 紧缩 (alone) | **流动性收缩** |
| easing | 放水 | **流动性宽松** |
| structural | — | **结构性** |
| secular | 长期 (alone) | **长周期** |
| cycle | — | **宏观周期** (or keep English `cycle`) |
| convexity | — | **凸性收益结构** / 非对称收益 (or keep English `Convexity`) |
| underprice / underpriced | 低估 (too colloquial) | **尚未充分计入** |
| second-order effects | — | **二阶影响** / 二阶效应 |
| basis | — | **基差** (futures) / 底子 (other) |
| dispersion | — | **离散度** / 分化 |
| trade-off | 取舍 (too literal) | **权衡** |
| narrative | — | **叙事** (or keep English `narrative` — both register-appropriate) |

### B. AI

| English | 推荐翻译 |
|---|---|
| inference | **推理计算** |
| training compute | **训练算力** |
| compute | **算力** |
| scaling laws | **Scaling Law** (keep English) |
| AGI | **AGI** (keep English) |
| AI Scaling Law | **AI Scaling Law** (keep English; titled concept) |

### C. 能源

| English | 推荐翻译 |
|---|---|
| baseload | **基荷能源** |
| intermittency | **间歇性** |
| energy density | **能量密度** |
| fusion | **可控核聚变** |
| grid | **电网系统** |

### D. 加密 / 货币

| English | 推荐翻译 |
|---|---|
| stablecoin rails | **稳定币支付轨道** (or keep English `Stablecoin Rails` for titled concepts) |
| settlement layer | **结算层** |
| sovereign money | **主权货币** |
| tokenization | **资产代币化** |

### E. 系统论

| English | 推荐翻译 |
|---|---|
| hysteresis | **系统迟滞** / 路径依赖. **Never** 磁滞 (magnetic-physics sense; wrong register). |
| path dependency | **路径依赖** |
| reflexivity | **反身性** |
| emergence | **涌现** |

### F. bottleneck — context-conditional

| Context | Translation |
|---|---|
| Energy supply | **能源供给约束** |
| AI / compute | **算力约束** |
| Liquidity | **流动性约束** |
| Generic systems | **系统卡点** |

Do **not** default to 瓶颈 alone — it reads as commodity-trading slang.

### G. Anti-patterns (forbidden words)

- "暴涨" → use "急涨" or quantify ("一个月内 +35%")
- "颠覆" → 重塑 / 改写
- "炸裂" → forbidden
- "利好 / 利空" → forbidden in long-form (acceptable in market summary only)
- "风口" → forbidden
- "巨大机会" → forbidden
- "革命" (in market context) → 结构性转换 / 重塑

## 6. English passthroughs — restricted whitelist

The previous version of this section was "allowed and encouraged" for
~25 English terms. In practice this produced 8-15 embedded English
nouns per note. The cumulative effect across the corpus was
**bilingual desk-note rhythm**, not Chinese research prose. A Chinese
reader from a real macro fund will register this as untranslated
working notes, not finished writing.

The revised policy: **restrict English to three narrow categories**.
Translate everything else by default.

### 6.A Allowed — test-harness and methodology terms

These have no Chinese equivalent in active use among quant
practitioners. Keep in English:

`walk-forward` · `in-sample` · `out-of-sample` · `holdout` · `bootstrap`
· `Monte Carlo` · `Sharpe` · `Sortino` · `Calmar` · `IR`

### 6.B Allowed — instrument labels and data fields

These name instruments or data series, not concepts:

`ETF` · `mNAV` · `BTC` · `ETH` · `NQ` · `SP500` · `DXY` · `DVOL`
· `USDT` · `USDC` · `OI` · `IV` · `RV` · `β` · `α` · `funding`
· `basis` · `skew` · `spread` · `bar` (in OHLC sense)

### 6.C Allowed — titled / capitalised proper-name concepts

These function as proper nouns; capitalisation signals term-mark
usage. Lowercase variants must follow §6.D.

`AGI` · `Scaling Law` / `AI Scaling Law` · `Stablecoin Rails`
· `DeepSeek Moment` · `Regime Shift` (titled — see below)

### 6.D Translate by default (was previously English; no longer)

These previously had English passthroughs permitted. They are now
expected in Chinese in body prose unless the term-mark usage is
explicit and unambiguous:

| English | Chinese (default in prose) |
|---|---|
| `regime` (lowercase, in body) | **宏观范式** / 周期环境 (English `Regime Shift` as titled concept is still fine) |
| `narrative` (in body) | **叙事** (English `narrative` acceptable only in titles or term-mark use) |
| `thesis` | **假设** / 论断 / 论文 (context-conditional) |
| `cycle` | **周期** / 宏观周期 |
| `convexity` | **凸性收益结构** |
| `desk` | **交易台** (when trading-desk; never 桌子) |
| `book` | **持仓账** |
| `sleeve` | **子策略** |
| `street` | **卖方** / 市场 |
| `dealer` | **做市商** |
| `PM practice` | **单基金经理模式** / 单 PM 模式 |
| `carry` | **持有收益** / carry (allowed if titled) |

### 6.E Target density

Aim for **≤ 5 English nouns per note body**, excluding instrument
labels and data fields (§6.B). The previous policy commonly produced
12-15 per note; this density is what triggered the bilingual desk-note
feel.

When in doubt, prefer Chinese. The Hysteresis voice should sound
**bilingually competent in Chinese**, not English-thinking in
Chinese-character form.

## 7. Sentence-template library

Use these patterns to anchor consistency across surfaces.

### 模板 1 — 市场低估类

| EN | ZH |
|---|---|
| The market is underpricing X | **市场尚未充分计入 X** |
| Markets have yet to price in X | **市场尚未把 X 计入价格** |
| X is mispriced | **X 的定价尚未到位** |

**Avoid:** 市场忽视了 / 市场没看到 / 市场低估了

### 模板 2 — 周期转换类

| EN | ZH |
|---|---|
| We are entering a new regime | **我们正在进入一个新的宏观范式** |
| A regime shift is underway | **一次 regime shift 正在发生** |
| The cycle has turned | **周期已经转向** |

**Avoid:** 我们进入了新政权 (mistranslation of "regime") /
新时代 (too political)

### 模板 3 — 长期结构类

| EN | ZH |
|---|---|
| Structural constraints | **结构性约束** (context-specialise: 能源供给约束 / 算力约束 / 流动性约束) |
| Long-duration assets | **长久期资产** |
| Capital costs are repricing | **资本成本正在重估** |

### 模板 4 — 风险表达

| EN | ZH |
|---|---|
| This creates significant second-order effects | **这将带来显著的二阶影响** |
| Tail risk has thickened | **尾部风险变厚** |
| Convexity is asymmetric | **凸性是非对称的** |

**Avoid:** 造成很多连锁反应 / 风险很大

### 模板 5 — 长期影响

| EN | ZH |
|---|---|
| The long-term impact remains under-appreciated | **长期影响仍被低估** |
| Structurally bullish on X | **结构性看多 X** (sparingly — usually we don't make calls) |
| Persistent over the cycle | **跨周期持续** |

## 8. Title rules

Chinese titles must carry a research firm's register, not a media one.

| Bad | Good |
|---|---|
| 《AI 大爆发！》 | 《AI 繁荣背后的能源约束》 |
| 《能源瓶颈》 | 《能源约束时代》/《资本成本与能源瓶颈》 |
| 《智能的成本》 | 《智能的能源代价》/《算力、能源与资本重估》 |
| 《颠覆性的变化》 | 《一次结构性的转换》 |
| 《加密的下一个十年》 | 《加密在下一轮资本周期中的位置》 |

Pattern recognition: a research-firm title usually contains either
(a) a structural noun (约束 / 周期 / 范式 / 重估 / 转换) or
(b) an explicit relation between two concepts ("X 与 Y" / "X 背后的 Y").

### Note-style titles (folder-form: short, two-part)

The /notes folder uses a different micro-pattern: **"概念，状态/动作"**.

Anchored examples in the codebase:

- 折价，正在收窄 — Discount, unwinding
- 更浅，至今为止 — Shallower, so far
- 溢价，正在压缩 — Premium, compressing
- 先验，因条件而异 — The prior, conditioned

This pattern is short, declarative, and aphoristic. It works for the
notes register specifically and should not be used for long-form research
titles (which follow §8 rules above).

## 9. Register hierarchy

Be conscious of the register level you are writing at.

### Level 1 — 资讯媒体

利好 / 暴跌 / 热门赛道 / 龙头. Not appropriate for Hysteresis.

### Level 2 — 券商报告

工整 / 规范 / 但 A 股化. May be referenced for terminology but not voice.

### Level 3 — 全球宏观基金 ("Style D" — target register)

This is the target register for almost everything Hysteresis writes.
Characteristics:

- 去情绪化
- 强逻辑
- 世界观驱动
- 长周期
- 高信息密度

Canonical example paragraph (replaces the previous noun-stacking
example):

> AI 算力扩张正推升美国数据中心电力期货曲线（每月 30-45 bp）。
> 每瓦特训练算力背后是 2-3 倍的冷却与配电负荷；这一倍数在能源
> 约束下不会减弱。我们因此对长久期电力曲线持续保持结构性偏多，
> 直到 PJM 曲线与基础负荷增长背离。

Note what this single paragraph accomplishes:

1. **Claim + observable** — the AI compute → electricity-futures
   transmission is named with a specific data series (PJM, basis
   points), not asserted by adjective
2. **Mechanism** — the 2-3× multiplier between training compute and
   total facility load, with a falsifiable constraint
3. **Implication + invalidation** — the firm holds a position and
   specifies what would cause the position to be retired

This is the **density target** for Level 3 register. Compare to the
previous canonical sentence, which was the abstract-noun stacking
that §4 warns against:

> ~~我们正在进入一个由能源约束、资本成本与地缘重构共同驱动的新宏观周期。~~

Three prestige nouns stacked. No mechanism. No observable. No
implication. The sentence reads as macro-essay placeholder, not
research.

### Level 4 — 文明周期叙事

This is the aspiration. Example phrasing:

> AI 并不仅仅是一次软件革命。它本质上是一次能源密度革命。

This is **not** a research report — it is civilisational analysis. Use
sparingly in the highest-positioning surfaces (firm page, occasional
long-form essays). Never in routine notes.

## 10. How to use this guide

When writing or editing any Chinese surface:

1. **Persona check** — does the prose sound like a calm long-termist
   systems thinker, or like a hot take?
2. **Sentence-structure check** — any English clause order survived
   verbatim? Any 的-chain longer than two? Any noun-stacking?
3. **Glossary check** — are regime / repricing / hysteresis / duration
   / convexity / bottleneck all using the table-specified translations
   (or staying in English per §6)?
4. **Anti-pattern check** — any forbidden word (暴涨 / 颠覆 / 利好 …)?
5. **Title check** — does it match §8?
6. **Register check** — is the level appropriate for the surface?

When auditing translations (e.g. via codex), point reviewers to this
file and ask them to check each numbered section.

## 11. Homepage philosophy (`/zh` strategic positioning)

The Chinese homepage is **not** a translation of the English one. The
English page is a brand stamp. The Chinese page is the **cognitive
entry point** for a Chinese-language audience to a global-macro research
firm.

### 11.1 What `/zh` is for

The Chinese surface aims to occupy a scarce position in the Chinese
intellectual landscape: a Chinese-language entry into

  AI × 能源 × 全球资本周期 × 稳定币与美元体系 × 核聚变与文明周期

This is a position no Chinese financial media, no AI publication, and no
sell-side research desk currently holds. The Hysteresis Chinese surface
should read as if the firm has been writing in Chinese all along, and
happens also to publish English.

### 11.2 What `/zh` is **not**

- A translated mirror of the English homepage
- A Chinese-language financial news aggregator
- A "China angle" page
- A Chinese AI-content farm

### 11.3 Homepage anatomy

The Chinese homepage has three jobs, in order:

1. **Brand stamp** — the firm name, the BHMark, the signature phrase.
   These mirror the English page for visual consistency.
2. **World-view statement** — what Hysteresis means as a concept. This
   is the most important paragraph on the entire site. It tells the
   reader the firm's framework is path-dependence and 系统迟滞, not
   trading signals. **Never** describe hysteresis as 磁滞 (the magnetic
   sense). Always 系统迟滞 / 路径依赖.
3. **Transmission chain** — name the actual causal pathway the firm
   studies, with arrows. **Not** a buzzword stack of prestige nouns
   (AI × energy × capital × geopolitics is a buzzword stack). A
   transmission chain has direction: `A drives B → B drives C → C
   reprices D`. The reader leaves the homepage with one specific
   testable thesis about the world, not four sponsored topics.

### 11.4 Canonical Hysteresis paragraph (homepage §3)

> Hysteresis · 系统迟滞，描述路径依赖——系统在经历冲击后不会回到原点，
> 历史被吸收进结构本身，持续影响未来。我们用这套视角研究当下的传导链：
> AI 算力扩张推升能源约束，能源约束推升资本成本，资本成本重估长久期
> 资产。

This single paragraph does five things:

1. Names the concept in English (`Hysteresis`) and Chinese (`系统迟滞`).
2. Names the canonical translation (`路径依赖`) — pre-empts 磁滞.
3. Gives the world-view in one clause ("系统在经历冲击后不会回到原点").
4. Adds the load-bearing systems-theoretic claim ("历史被吸收进结构
   本身").
5. **Lands on a transmission chain (three arrows: AI compute →
   energy constraint → capital cost → long-duration asset
   repricing), not a four-noun buzzword anchor.**

The earlier version of this paragraph closed with "AI、能源、资本与
地缘共同重构的视角" — that was buzzword-stacking, the very pattern
§4 warns against. The current version replaces stacking with an
explicit causal chain that is testable: the reader can in principle
disagree with any arrow.

Any future homepage rewrite must preserve all five functions, with
particular attention to function 5: **the chain must have direction,
not just a list of topics**.

### 11.5 Forbidden homepage moves

- ❌ Describing the firm as 量化对冲基金 / 交易公司 alone — too narrow
- ❌ Listing recent posts / "最新" / "热门" — turns it into a CMS
- ❌ Marketing CTAs ("立即订阅" / "了解更多") — wrong register
- ❌ Statistics splash ("AUM" / "回测 Sharpe X.X" / "战绩")
- ❌ "About us" pages dressed up as homepages
- ❌ Stock financial-news vocabulary: 重磅 / 深度 / 干货 / 必读

### 11.6 Future-content title rules (homepage features)

When the homepage links to long-form pieces, titles must mirror the
research-firm register, not the media register. Examples:

| Bad | Good |
|---|---|
| 《AI 的未来》 | 《AI 扩张背后的能源约束》 |
| 《美元与稳定币》 | 《稳定币如何重构美元流动性体系》 |
| 《能源问题》 | 《全球能源瓶颈与资本成本重估》 |
| 《加密的下一个十年》 | 《加密在下一轮资本周期中的位置》 |
| 《关于 AI、能源和全球市场的研究》 | 《AI、能源与全球资本周期的长期研究》 |
| 《最新研究》 / 《热门观点》 | (the homepage should not have such a section at all) |

A research-firm title carries either (a) a structural noun
(约束 / 周期 / 范式 / 重估 / 转换 / 重构) or (b) an explicit relation
between two concepts ("X 与 Y" / "X 背后的 Y" / "X 如何重构 Y").

### 11.7 Long-term: the Chinese cognitive entry point

The strategic ambition of the Chinese surface extends beyond
`/zh/notes`:

- Chinese newsletter (long-form, monthly cadence)
- Chinese podcast notes
- Chinese long essays (Style D / Level 4 register)
- Chinese-language term-base for AI × energy × macro × crypto
- Chinese research community

These do not yet exist. The style guide is meant to ensure that when
they do, they speak with a single coherent voice — one that did not get
flattened into AI-default phrasing somewhere along the way.

## 12. Living document

This guide will evolve. When new conventions are established (e.g.
canonical translations of new AI / energy / stablecoin terms), update
the glossary in §5 and the template library in §7. Each meaningful
revision should be logged here:

| Date | Change | Reason |
|---|---|---|
| 2026-05-14 | Initial draft | Establish baseline before scaling Chinese surfaces beyond /notes |
| 2026-05-14 | Add B/C/D/E glossary categories (AI / 能源 / 加密 / 系统论); Style D canonical sentence under §9 Level 3 | Expand vocabulary coverage beyond 宏观金融 so AI × 能源 × 加密 × 地缘 content has a stable terminology base |
| 2026-05-14 | Add §11 Homepage philosophy + four-domain anchor convention | Position /zh as cognitive entry point distinct from /en brand stamp |
| 2026-05-14 | **Hostile codex review pass** (audits/2026-05-14-zh-corpus-hostile-review.md). Four self-undermining patterns found in the guide itself: (a) negative-only voice model with no positive argument skeleton — fixed by adding "Required argument structure" under §4; (b) English passthrough policy too permissive ("allowed and encouraged" produced 8-15 English nouns per note) — fixed by rewriting §6 as a 3-category restricted whitelist + §6.D translate-by-default list; (c) Style D canonical sentence in §9 was itself the abstract-noun stacking §4 warns against — replaced with an AI-compute → power-futures transmission-chain example carrying claim + observable + mechanism + implication + invalidation; (d) homepage four-domain anchor in §11.3/11.4 was buzzword stack — replaced with explicit causal transmission-chain convention. | Codex flagged the guide as institutionalizing the very habits it claimed to prevent. These four edits address each finding. |
