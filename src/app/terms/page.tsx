import BHMark from '../components/BHMark';
import type { Metadata } from 'next';
import { pageMetadata } from '../../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Terms of Service · Hysteresis Research',
  description: 'Terms of Service governing access to and use of hysteresisresearch.com and the LP Portal.',
  path: '/terms',
  lang: 'en',
});

const css = `
.lgl{max-width:46rem;margin:0 auto;padding:4rem 1.5rem 6rem;color:var(--ink);font-family:var(--serif);font-size:1.0625rem;line-height:1.68}
.lgl .lgl-mark{color:var(--ink);margin-bottom:1.75rem}
.lgl .lgl-mark svg{display:block}
.lgl .lgl-eyebrow{font-family:var(--mono);font-size:.65rem;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-3);margin:0 0 .75rem}
.lgl h1{font-family:var(--serif);font-weight:500;font-size:clamp(1.9rem,4vw,2.6rem);line-height:1.1;letter-spacing:-.01em;color:var(--ink);margin:0 0 .4rem}
.lgl .lgl-meta{font-family:var(--mono);font-size:.72rem;letter-spacing:.06em;color:var(--ink-3);margin:0 0 2.75rem;padding-bottom:1.5rem;border-bottom:.5px solid var(--rule)}
.lgl h2{font-family:var(--serif);font-weight:500;font-size:1.25rem;line-height:1.3;color:var(--ink);margin:2.75rem 0 .85rem;padding-top:1.75rem;border-top:.5px solid var(--rule-soft)}
.lgl h2:first-of-type{border-top:0;padding-top:0;margin-top:1.5rem}
.lgl h3{font-family:var(--serif);font-weight:600;font-size:1rem;color:var(--ink-2);margin:1.6rem 0 .5rem}
.lgl p{margin:0 0 1.1rem;color:var(--ink);text-wrap:pretty}
.lgl ul{margin:0 0 1.1rem;padding-left:1.35rem;list-style:disc}
.lgl li{margin:0 0 .5rem;color:var(--ink);text-wrap:pretty}
@media (max-width:640px){.lgl{padding:2.5rem 1.25rem 4rem}}
`;

export default function Terms() {
  return (
    <main>
      <style>{css}</style>
      <div className="lgl">
        <div className="lgl-mark">
          <BHMark width={140} height={84} strokeWidth={2.2} />
        </div>
        <div className="lgl-eyebrow">legal</div>
        <h1>{`TERMS OF SERVICE`}</h1>
        <p className="lgl-meta">{`Last Modified: May 2026`}</p>

        <h2>{`1. Introduction and Acceptance`}</h2>
        <p>{`These Terms of Service (the "Agreement") govern your access to and use of the website located at https://www.hysteresisresearch.com (the "Site") and any related services, content, or materials made available by Hysteresis Research ("Hysteresis Research", "we", "our", or "us"). By accessing or using the Site in any manner, you confirm that you have read, understood, and agree to be bound by this Agreement. If you do not agree, you must immediately cease using the Site.`}</p>
        <p>{`This Agreement applies to all visitors, general users, and authorised limited partners ("LPs") who access the LP Portal (as defined below). Where provisions apply exclusively to LP Portal users, this is stated explicitly.`}</p>

        <h2>{`2. Eligibility`}</h2>
        <p>{`By accessing the Site, you represent and warrant that:`}</p>
        <ul>
          <li>{`you are at least 18 years of age and have the legal capacity to enter into a binding agreement;`}</li>
          <li>{`if you are accessing on behalf of a legal entity, you have the authority to bind that entity to this Agreement;`}</li>
          <li>{`you are not subject to any economic or trade sanctions administered by any governmental authority, including but not limited to those maintained by the Office of Foreign Assets Control of the U.S. Department of the Treasury; and`}</li>
          <li>{`your access to and use of the Site complies with all applicable laws and regulations in your jurisdiction.`}</li>
        </ul>

        <h2>{`3. Site Content and Research Materials`}</h2>
        <h3>{`3.1 Nature of Content`}</h3>
        <p>{`The Site publishes research notes, analytical commentary, and information about Hysteresis Research's investment approach (collectively, "Research Materials"). All Research Materials are provided for informational and educational purposes only.`}</p>
        <h3>{`3.2 No Investment Advice`}</h3>
        <p>{`THE RESEARCH MATERIALS PUBLISHED ON THIS SITE DO NOT CONSTITUTE INVESTMENT ADVICE, FINANCIAL ADVICE, TRADING ADVICE, OR ANY OTHER TYPE OF ADVICE. NOTHING ON THIS SITE SHOULD BE CONSTRUED AS A SOLICITATION, RECOMMENDATION, OR OFFER TO BUY, SELL, OR HOLD ANY SECURITY, FINANCIAL INSTRUMENT, OR OTHER ASSET.`}</p>
        <p>{`You should not take or refrain from taking any investment or financial action based solely on information contained on this Site. You are solely responsible for conducting your own due diligence and, where appropriate, consulting qualified financial, legal, or tax advisers before making any investment decision.`}</p>
        <h3>{`3.3 No Solicitation of Investment`}</h3>
        <p>{`Nothing on this Site constitutes an offer to sell, or a solicitation of an offer to buy, any interest in any fund, vehicle, or other investment product managed or advised by Hysteresis Research. Any such offering, if made, will be made solely pursuant to a confidential private placement memorandum or equivalent offering document and only to investors who satisfy applicable eligibility requirements under relevant securities laws.`}</p>
        <h3>{`3.4 Forward-Looking Statements`}</h3>
        <p>{`Research Materials may contain forward-looking statements, projections, or opinions about future market conditions, economic regimes, or investment themes. These reflect the views of Hysteresis Research at the time of writing and are inherently uncertain. Actual outcomes may differ materially. We undertake no obligation to update or revise any forward-looking statements.`}</p>
        <h3>{`3.5 Accuracy and Currency of Information`}</h3>
        <p>{`While we endeavour to ensure that information on the Site is accurate and up to date, we make no representations or warranties regarding the completeness, accuracy, reliability, or timeliness of any content. Market data, economic data, and third-party references are provided as-is and may be subject to change without notice.`}</p>

        <h2>{`4. LP Portal`}</h2>
        <h3>{`4.1 Authorised Access`}</h3>
        <p>{`Certain sections of the Site (the "LP Portal") are restricted to authorised limited partners and other persons specifically granted access by Hysteresis Research. Access to the LP Portal is subject to: (a) execution of the relevant limited partnership or subscription agreement; (b) satisfaction of applicable investor eligibility requirements; and (c) compliance with any additional terms communicated at the time of access provisioning.`}</p>
        <h3>{`4.2 LP Documents`}</h3>
        <p>{`Through the LP Portal, authorised users may access financial statements, capital call notices, distribution notices, quarterly reports, and other fund-related documents (collectively, "LP Documents"). LP Documents are provided solely for the benefit of the relevant limited partners and may not be shared, distributed, or disclosed to any third party without the prior written consent of Hysteresis Research, except as required by applicable law or regulation.`}</p>
        <h3>{`4.3 Confidentiality`}</h3>
        <p>{`All LP Documents and other information made available through the LP Portal are confidential and proprietary to Hysteresis Research and/or the relevant fund. You agree to maintain strict confidentiality with respect to all such information and to use it solely for the purpose of monitoring and evaluating your investment in the relevant fund.`}</p>
        <h3>{`4.4 Account Security`}</h3>
        <p>{`If you are provided with login credentials to access the LP Portal, you are responsible for maintaining the confidentiality of such credentials. You must notify us immediately at contact@hysteresisresearch.com if you suspect any unauthorised access to or use of your account. We will not be liable for any loss or damage arising from your failure to safeguard your credentials.`}</p>
        <h3>{`4.5 No Reliance for Investment Decisions`}</h3>
        <p>{`LP Documents, including financial statements and capital call notices, are provided solely for informational and administrative purposes in connection with your existing investment. They do not constitute investment advice and should not be relied upon as the sole basis for any investment decision. LP Documents may contain unaudited figures, estimates, or preliminary data that are subject to revision.`}</p>

        <h2>{`5. Intellectual Property`}</h2>
        <p>{`All content on the Site, including but not limited to Research Materials, text, graphics, logos, and the "look and feel" of the Site, is owned by or licensed to Hysteresis Research and is protected by applicable copyright, trademark, and other intellectual property laws. You are granted a limited, non-exclusive, non-transferable, revocable licence to access and view the Site for personal, non-commercial purposes. You may not reproduce, redistribute, modify, create derivative works from, sell, or exploit any content from the Site without our prior written consent.`}</p>

        <h2>{`6. Prohibited Activities`}</h2>
        <p>{`In connection with your use of the Site, you agree not to:`}</p>
        <ul>
          <li>{`use any automated means, including web scrapers, bots, or data mining tools, to extract content or data from the Site;`}</li>
          <li>{`attempt to gain unauthorised access to any restricted portion of the Site or any system or network connected to the Site;`}</li>
          <li>{`transmit or upload any content that is unlawful, harmful, threatening, defamatory, or otherwise objectionable;`}</li>
          <li>{`reverse engineer, decompile, or disassemble any component of the Site;`}</li>
          <li>{`use the Site in any way that violates applicable laws or regulations; or`}</li>
          <li>{`impersonate any person or entity, or misrepresent your affiliation with any person or entity.`}</li>
        </ul>

        <h2>{`7. Third-Party Links and Services`}</h2>
        <p>{`The Site may contain links to third-party websites, data sources, or services. Such links are provided for convenience only. We do not control, endorse, or assume any responsibility for third-party content, privacy practices, or services. Your use of any third-party site or service is at your own risk and subject to that third party's terms and conditions.`}</p>

        <h2>{`8. Disclaimers`}</h2>
        <p>{`THE SITE AND ALL CONTENT AND MATERIALS THEREON ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.`}</p>
        <p>{`WE DO NOT WARRANT THAT THE SITE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE FROM VIRUSES OR OTHER HARMFUL COMPONENTS. WE DISCLAIM ALL LIABILITY FOR ANY TECHNICAL FAILURES, INACCURACIES, OR INTERRUPTIONS IN THE AVAILABILITY OF THE SITE.`}</p>
        <p>{`Past performance of any investment strategy or approach discussed on the Site is not indicative of future results. Investing involves risk, including the possible loss of principal.`}</p>

        <h2>{`9. Limitation of Liability`}</h2>
        <p>{`TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL HYSTERESIS RESEARCH, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING LOSS OF PROFITS, LOSS OF DATA, OR LOSS OF GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF OR INABILITY TO USE THE SITE OR ANY CONTENT THEREON, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.`}</p>
        <p>{`Our aggregate liability to you for any claim arising out of or relating to this Agreement or the Site shall not exceed USD 100. Some jurisdictions do not permit the exclusion or limitation of certain warranties or liabilities; in such jurisdictions, our liability is limited to the maximum extent permitted by law.`}</p>

        <h2>{`10. Indemnification`}</h2>
        <p>{`You agree to defend, indemnify, and hold harmless Hysteresis Research and its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or in any way connected with: (a) your access to or use of the Site; (b) your breach of this Agreement; (c) your violation of any applicable law or the rights of any third party; or (d) any content you submit or transmit through the Site.`}</p>

        <h2>{`11. Modifications to this Agreement and the Site`}</h2>
        <p>{`We reserve the right to modify this Agreement at any time. The "Last Modified" date at the top of this Agreement will be updated accordingly. Changes become effective upon posting. Your continued use of the Site following the posting of changes constitutes your acceptance of the revised Agreement. We also reserve the right to modify, suspend, or discontinue the Site or any portion thereof at any time without notice or liability.`}</p>

        <h2>{`12. Governing Law and Dispute Resolution`}</h2>
        <h3>{`12.1 Governing Law`}</h3>
        <p>{`This Agreement and any dispute arising out of or in connection with it shall be governed by and construed in accordance with the laws of Hong Kong Special Administrative Region, without regard to its conflict of law principles.`}</p>
        <h3>{`12.2 Dispute Resolution`}</h3>
        <p>{`We will use our best efforts to resolve any dispute through informal, good-faith negotiation. You must first contact us at legal@hysteresisresearch.com to attempt an informal resolution. If we cannot reach an informal resolution within sixty (60) days of your notification, any dispute shall be finally resolved by arbitration administered by the Hong Kong International Arbitration Centre ("HKIAC") in accordance with the HKIAC Administered Arbitration Rules in force at the time of submission. The seat of arbitration shall be Hong Kong. The language of the arbitration shall be English. The number of arbitrators shall be one (1) for disputes not exceeding USD 500,000 in value and three (3) for disputes exceeding that amount.`}</p>
        <h3>{`12.3 Class Action Waiver`}</h3>
        <p>{`You agree to bring any claim against Hysteresis Research in your individual capacity only, and not as a plaintiff or class member in any purported class action, collective action, or representative proceeding.`}</p>

        <h2>{`13. Miscellaneous`}</h2>
        <h3>{`13.1 Entire Agreement`}</h3>
        <p>{`This Agreement constitutes the entire agreement between you and Hysteresis Research with respect to your use of the Site and supersedes all prior agreements, representations, and understandings.`}</p>
        <h3>{`13.2 Severability`}</h3>
        <p>{`If any provision of this Agreement is found to be invalid or unenforceable, the remaining provisions will continue in full force and effect, and the invalid or unenforceable provision will be modified to the minimum extent necessary to make it valid and enforceable.`}</p>
        <h3>{`13.3 Waiver`}</h3>
        <p>{`Our failure to enforce any right or provision of this Agreement shall not be deemed a waiver of such right or provision.`}</p>
        <h3>{`13.4 Assignment`}</h3>
        <p>{`You may not assign or transfer any of your rights or obligations under this Agreement without our prior written consent. We may freely assign our rights and obligations under this Agreement.`}</p>
        <h3>{`13.5 Contact`}</h3>
        <p>{`If you have any questions about this Agreement, please contact us at: legal@hysteresisresearch.com`}</p>
      </div>
    </main>
  );
}
