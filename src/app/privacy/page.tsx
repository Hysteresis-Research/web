import type { Metadata } from 'next';
import { pageMetadata } from '../../lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Privacy Policy · Hysteresis Research',
  description: 'How Hysteresis Research collects, uses, discloses, and processes personal data on hysteresisresearch.com and the LP Portal.',
  path: '/privacy',
  lang: 'en',
});

// Visual styling for the .lgl* legal vocabulary lives in globals.css (the
// Signal Issue design system), so it stays consistent across Terms / Privacy
// and both editions. This page carries only the markup.

export default function Privacy() {
  return (
    <main>
      <div className="lgl">
        <div className="lgl-eyebrow">legal</div>
        <h1>{`PRIVACY POLICY`}</h1>
        <p className="lgl-meta">{`Last Modified: May 2026`}</p>

        <h2>{`1. Introduction`}</h2>
        <p>{`This Privacy Policy ("Policy") explains how Hysteresis Research ("Hysteresis Research", "we", "our", or "us") collects, uses, discloses, and otherwise processes personal data in connection with your use of https://www.hysteresisresearch.com (the "Site") and, where applicable, the LP Portal.`}</p>
        <p>{`We are committed to protecting the privacy of all users of the Site and to processing personal data in accordance with applicable data protection laws. Please read this Policy carefully. By accessing or using the Site, you acknowledge that you have read and understood this Policy. If you do not agree to this Policy, please do not use the Site.`}</p>

        <h2>{`2. Definitions`}</h2>
        <p>{`"Personal Data" means any information relating to an identified or identifiable natural person, including information that can be used to identify a person directly or indirectly.`}</p>
        <p>{`"LP Portal" means the restricted area of the Site accessible only to authorised limited partners and other persons specifically designated by Hysteresis Research.`}</p>
        <p>{`"Services" means the Site, the LP Portal, and any related services provided by Hysteresis Research.`}</p>
        <p>{`"Data Subject" means the natural person to whom Personal Data relates.`}</p>

        <h2>{`3. Personal Data We Collect`}</h2>
        <h3>{`3.1 Information You Provide Directly`}</h3>
        <p>{`We may collect Personal Data that you voluntarily provide to us, including:`}</p>
        <ul>
          <li>{`Contact information: name, email address, and organisation name, when you contact us or subscribe to research publications;`}</li>
          <li>{`LP-related information: for authorised limited partners, identification documents, tax residency information, bank account details for distributions, and other information required for fund administration and regulatory compliance (including KYC/AML purposes);`}</li>
          <li>{`Correspondence: messages, inquiries, or feedback you send to us.`}</li>
        </ul>
        <h3>{`3.2 Information We Collect Automatically`}</h3>
        <p>{`When you visit the Site, we may automatically collect certain technical and usage data, including:`}</p>
        <ul>
          <li>{`IP address and approximate geographic location;`}</li>
          <li>{`browser type, version, and operating system;`}</li>
          <li>{`pages visited, time spent on pages, and referring URL;`}</li>
          <li>{`device identifiers and other technical information.`}</li>
        </ul>
        <p>{`This information is collected through standard server logs and, where applicable, cookies or similar tracking technologies. See Section 7 for more information on cookies.`}</p>
        <h3>{`3.3 Information from Third Parties`}</h3>
        <p>{`We may receive Personal Data about you from third parties, such as identity verification service providers, sanctions screening providers, or other service providers engaged for fund administration or regulatory compliance purposes.`}</p>

        <h2>{`4. How We Use Personal Data`}</h2>
        <p>{`We use Personal Data for the following purposes:`}</p>
        <ul>
          <li>{`Operating and improving the Site and its content;`}</li>
          <li>{`Responding to your enquiries and communicating with you;`}</li>
          <li>{`Distributing research publications and updates to subscribers;`}</li>
          <li>{`Administering LP accounts, including processing capital calls, distributions, and providing financial statements and fund documents via the LP Portal;`}</li>
          <li>{`Verifying identity and conducting KYC/AML screening as required by applicable law;`}</li>
          <li>{`Complying with legal and regulatory obligations in applicable jurisdictions;`}</li>
          <li>{`Enforcing this Policy and our Terms of Service;`}</li>
          <li>{`Detecting and preventing fraud or other unlawful activity; and`}</li>
          <li>{`Any other purpose disclosed to you at the time of collection or with your consent.`}</li>
        </ul>

        <h2>{`5. Legal Basis for Processing`}</h2>
        <p>{`Where applicable data protection laws require a legal basis for processing Personal Data, we rely on the following:`}</p>
        <ul>
          <li>{`Contractual necessity: processing required to perform our obligations to LP investors under the relevant fund agreements;`}</li>
          <li>{`Legal obligation: processing required to comply with applicable laws and regulations, including KYC/AML requirements;`}</li>
          <li>{`Legitimate interests: processing for our legitimate business interests, such as operating and improving the Site, conducting research, and managing security, where such interests are not overridden by your rights; and`}</li>
          <li>{`Consent: where you have provided consent, for example to receive research publications.`}</li>
        </ul>

        <h2>{`6. Disclosure of Personal Data`}</h2>
        <p>{`We may disclose Personal Data to the following categories of recipients:`}</p>
        <ul>
          <li>{`Service providers and professional advisers: including legal, accounting, audit, IT, custody, fund administration, identity verification, and other service providers engaged to assist in our operations. These parties are required to use Personal Data only as necessary to provide services to us;`}</li>
          <li>{`Regulatory and governmental authorities: including tax authorities, financial regulators, law enforcement agencies, and courts, where disclosure is required or permitted by applicable law;`}</li>
          <li>{`Affiliated entities: entities under common ownership or control with Hysteresis Research, for internal administrative purposes; and`}</li>
          <li>{`Third parties with your consent or at your direction.`}</li>
        </ul>
        <p>{`We do not sell Personal Data to third parties.`}</p>

        <h2>{`7. Cookies and Tracking Technologies`}</h2>
        <p>{`The Site may use cookies or similar technologies to enhance user experience and collect usage data. Cookies are small text files placed on your device. We may use:`}</p>
        <ul>
          <li>{`Strictly necessary cookies: required for the Site to function and cannot be disabled;`}</li>
          <li>{`Analytics cookies: used to understand how users interact with the Site (e.g., page views, traffic sources). These are used in aggregated, anonymised form; and`}</li>
          <li>{`Preference cookies: used to remember your settings and preferences.`}</li>
        </ul>
        <p>{`You may configure your browser to refuse cookies or to alert you when cookies are being sent. Please note that disabling certain cookies may affect the functionality of the Site.`}</p>

        <h2>{`8. International Data Transfers`}</h2>
        <p>{`We operate in Hong Kong and may engage service providers located in other jurisdictions. Personal Data may be transferred to and stored in countries other than your country of residence. Where such transfers occur, we take appropriate measures to ensure that Personal Data remains adequately protected in accordance with this Policy and applicable data protection laws, including the use of contractual safeguards where required.`}</p>

        <h2>{`9. Data Retention`}</h2>
        <p>{`We retain Personal Data only for as long as necessary to fulfil the purposes for which it was collected or to comply with legal, regulatory, accounting, or reporting obligations. In determining appropriate retention periods, we consider the nature and sensitivity of the Personal Data, the potential risk of harm from unauthorised use or disclosure, and applicable legal requirements.`}</p>
        <p>{`For LP investors, we retain Personal Data for the duration of the relevant fund relationship and for a period thereafter as required by applicable law, including KYC/AML record-keeping requirements.`}</p>
        <p>{`When Personal Data is no longer required, we securely delete, destroy, or anonymise it.`}</p>

        <h2>{`10. Data Security`}</h2>
        <p>{`We implement appropriate technical and organisational measures to protect Personal Data against unauthorised access, disclosure, alteration, or destruction. These measures include access controls, encryption of data in transit, and internal policies governing access to Personal Data on a need-to-know basis.`}</p>
        <p>{`While we take data security seriously, no method of electronic storage or transmission over the internet is completely secure. We cannot guarantee the absolute security of Personal Data, and you provide information to us at your own risk. Please notify us immediately at contact@hysteresisresearch.com if you believe your Personal Data may have been compromised.`}</p>

        <h2>{`11. Your Rights`}</h2>
        <p>{`Depending on your jurisdiction, you may have the following rights in relation to your Personal Data:`}</p>
        <ul>
          <li>{`Access: to request a copy of the Personal Data we hold about you;`}</li>
          <li>{`Correction: to request that we correct inaccurate or incomplete Personal Data;`}</li>
          <li>{`Erasure: to request deletion of your Personal Data, subject to applicable legal retention requirements;`}</li>
          <li>{`Restriction: to request that we restrict the processing of your Personal Data in certain circumstances;`}</li>
          <li>{`Portability: to receive Personal Data you have provided to us in a structured, machine-readable format;`}</li>
          <li>{`Objection: to object to our processing of your Personal Data based on legitimate interests; and`}</li>
          <li>{`Withdrawal of consent: to withdraw consent at any time where processing is based on consent, without affecting the lawfulness of prior processing.`}</li>
        </ul>
        <p>{`To exercise any of these rights, please contact our Data Protection Officer at: legal@hysteresisresearch.com. We will respond to your request within a reasonable timeframe and no later than thirty (30) days unless a longer period is permitted by applicable law. We may need to verify your identity before processing your request.`}</p>

        <h2>{`12. Children's Privacy`}</h2>
        <p>{`The Site is not directed to children under the age of 18. We do not knowingly collect Personal Data from children. If you believe we have inadvertently collected Personal Data from a child, please contact us at legal@hysteresisresearch.com and we will take steps to delete such information.`}</p>

        <h2>{`13. Third-Party Websites`}</h2>
        <p>{`The Site may contain links to third-party websites. This Policy applies only to the Site. We are not responsible for the privacy practices of third-party sites and encourage you to review their privacy policies before providing any Personal Data.`}</p>

        <h2>{`14. Changes to this Policy`}</h2>
        <p>{`We may update this Policy from time to time. The "Last Modified" date at the top of this Policy will be updated to reflect any changes. Where changes are material, we will take reasonable steps to notify affected users. Your continued use of the Site after changes are posted constitutes acceptance of the updated Policy.`}</p>

        <h2>{`15. Contact Us`}</h2>
        <p>{`If you have any questions, concerns, or requests relating to this Policy or our data processing practices, please contact our Data Protection Officer at:`}</p>
        <p>{`Email: legal@hysteresisresearch.com`}</p>
      </div>
    </main>
  );
}
