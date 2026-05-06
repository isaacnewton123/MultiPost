// ── @architecture: PAGE ── pages/PrivacyPage.jsx ────────────────────
// Wraps the comprehensive Privacy Policy sections in <LegalPageLayout>
// so this page shares the docs page look and feel: gradient hero,
// rounded content area, sticky sidebar of section anchors, and deep-link
// support via the URL hash (e.g. /privacy#contact).
//
// All section copy is preserved verbatim from the previous version.

import React from 'react';
import SEO from '../components/SEO';
import LegalPageLayout from '../components/legal/LegalPageLayout';

// Icons (used inside the section icons array below)
import SecurityIcon from '@mui/icons-material/Security';
import InfoIcon from '@mui/icons-material/Info';
import DataUsageIcon from '@mui/icons-material/DataUsage';
import StorageIcon from '@mui/icons-material/Storage';
import DeleteIcon from '@mui/icons-material/Delete';
import GavelIcon from '@mui/icons-material/Gavel';
import EmailIcon from '@mui/icons-material/Email';
import CookieIcon from '@mui/icons-material/Cookie';
import UpdateIcon from '@mui/icons-material/Update';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import ChatIcon from '@mui/icons-material/ChatOutlined';
import PeopleAltIcon from '@mui/icons-material/PeopleAltOutlined';
import BadgeIcon from '@mui/icons-material/BadgeOutlined';
import HubIcon from '@mui/icons-material/HubOutlined';
import PublicIcon from '@mui/icons-material/PublicOutlined';
import ScheduleIcon from '@mui/icons-material/ScheduleOutlined';
import HowToRegIcon from '@mui/icons-material/HowToRegOutlined';
import LocationOnIcon from '@mui/icons-material/LocationOnOutlined';
import CategoryIcon from '@mui/icons-material/CategoryOutlined';
import KeyIcon from '@mui/icons-material/KeyOutlined';
import LockIcon from '@mui/icons-material/LockOutlined';
import LinkIcon from '@mui/icons-material/LinkOutlined';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailReadOutlined';
import MapIcon from '@mui/icons-material/MapOutlined';
import SmartToyIcon from '@mui/icons-material/SmartToyOutlined';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOffOutlined';
import ReportIcon from '@mui/icons-material/ReportOutlined';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLongOutlined';

const lastUpdated = 'May 6, 2026';
const effectiveDate = 'May 6, 2026';

const Page = () => {
  const sections = [
    {
      id: 'introduction',
      title: '1. Introduction',
      icon: <InfoIcon color="primary" />,
      content: `This Privacy Policy ("**Policy**") explains how **Hanif Maulana, an individual sole proprietor trading as "MultiPost"** ("**MultiPost**", "**we**", "**us**", "**our**"), operating from Karawang, West Java (Jawa Barat), Indonesia, collects, uses, shares, and protects information about you when you visit \`multipost.pro\`, use the application at \`app.multipost.pro\`, the public API at \`api.multipost.pro\`, or any related website, mobile application, or service (collectively, the "**Service**").\n\nThis Policy is part of, and is incorporated by reference into, our [Terms of Service](/terms). By accessing or using the Service you acknowledge that you have read and understood this Policy.\n\n**Who this Policy applies to.** This Policy applies to all visitors, registered users (free and paid), administrators, and other individuals whose personal data we receive in connection with the Service. Where you act on behalf of an organisation, "you" includes that organisation.\n\n**Languages.** This Policy is published in English. Translations are for convenience only; the English version controls in case of conflict.`
    },
    {
      id: 'controller',
      title: '2. Data Controller / Operator',
      icon: <BadgeIcon color="primary" />,
      content: `For the purposes of the EU General Data Protection Regulation (Regulation (EU) 2016/679) ("**GDPR**"), the UK GDPR, and analogous data-protection laws (collectively, "**Data Protection Laws**"), the **data controller** of the personal data we collect about you through the Service is:\n\n**Hanif Maulana, sole proprietor trading as "MultiPost"**\n* **Place of business:** Karawang, West Java (Jawa Barat), Republic of Indonesia\n* **Email for privacy enquiries and rights requests:** support@multipost.pro\n\nFor personal data we process **on your behalf** as part of providing the Service to you (for example, the metadata of an end-user who comments on a video you publish through the Service), MultiPost acts as a **data processor** and you act as the controller. In that case, the legal basis on which the data was originally collected, and the responses to data-subject rights, are your responsibility — we will assist you in line with our [Terms of Service](/terms) and applicable law.\n\nThe Service is not large enough to require a Data Protection Officer (DPO) under Article 37 GDPR. Privacy enquiries should be directed to support@multipost.pro.`
    },
    {
      id: 'data-collected',
      title: '3. Categories of Personal Data We Collect',
      icon: <CategoryIcon color="primary" />,
      content: `We collect the following categories of personal data, which we process for the purposes set out in Section 5:\n\n**A. Information you provide directly:**\n* **Account data** — full name, email address, hashed password, optional profile picture, time zone, and language preference.\n* **Verification data** — email-verification token state, password-reset token state, and (rarely) phone number if you choose to provide one.\n* **Subscription / billing data** — the Plan you choose, billing email, country, postal/ZIP code (for tax purposes), and the unique customer / subscription identifiers issued by Lemon Squeezy. **We do not store full card numbers, CVV codes, or bank credentials.** Card and bank data are collected and processed directly by Lemon Squeezy and its underlying processors (e.g., Stripe, PayPal); we receive only tokenised references and last-four / brand metadata.\n* **Connected Platform data** — when you connect a Connected Platform (YouTube, Facebook, Instagram, TikTok), we receive the OAuth access tokens and refresh tokens, the channel/page/account identifier, the display name, and the avatar that platform exposes for the connection. **OAuth tokens are stored encrypted at rest using AES-256-GCM.**\n* **Content & metadata** — the videos, thumbnails, captions, titles, descriptions, tags, hashtags, schedule times, and templates you upload or save.\n* **Support communications** — the content of your support tickets, live-chat conversations, AI-assistant prompts, and any attachments (such as screenshots).\n\n**B. Information collected automatically when you use the Service:**\n* **Usage data** — features used, buttons clicked, error messages, latency metrics, upload status, retry counts, and similar telemetry.\n* **Technical data** — IP address, approximate location derived from IP, user-agent, browser, operating system, device type, screen size, time-zone offset.\n* **Cookies and similar identifiers** — see Section 6 for the full list and purpose of each.\n\n**C. Information from third parties:**\n* From **Lemon Squeezy** — receipts, refund status, dispute / chargeback events, subscription state changes (renewal, cancellation, dunning).\n* From **Connected Platforms** — through OAuth, the limited account information and content metadata each platform exposes.\n\nWe do not knowingly collect any "**special category**" personal data (such as data revealing race, ethnicity, political opinions, religion, health, biometric or genetic data, sex life, or sexual orientation) and we ask you not to upload or send such data through the Service.`
    },
    {
      id: 'purposes',
      title: '4. How We Use Your Information',
      icon: <DataUsageIcon color="primary" />,
      content: `We use your personal data for the following purposes:\n\n* **To provide the Service** — create and authenticate your Account; deliver paid features in line with your Plan; transmit Content to Connected Platforms; schedule and retry uploads; show you your dashboards and history.\n* **To process payments and manage subscriptions** — through Lemon Squeezy as our Merchant of Record (see Section 7). Lemon Squeezy is responsible for billing, receipts, taxes, refunds, and dunning.\n* **To communicate with you** — to send transactional emails (verification, password reset, receipts, dunning, security alerts, important Service notices) and, where you have opted in, occasional product updates or marketing.\n* **To provide support** — to respond to support tickets, process AI-assistant prompts, and run live-chat conversations.\n* **To secure the Service** — to detect fraud, abuse, brute-force login attempts, account takeover, automated scraping, denial-of-service, and violations of our [Terms of Service](/terms) or Acceptable Use Policy.\n* **To improve the Service** — to debug issues, run aggregated analytics, plan capacity, and prioritise new features. Aggregated data does not identify you.\n* **To comply with legal obligations** — including book-keeping, tax compliance (carried out for Paid Plans by Lemon Squeezy on our behalf), responses to lawful government and law-enforcement requests, and exercise or defence of legal claims.\n\nWe do not use your personal data for **automated decision-making that produces legal or similarly significant effects on you** (Article 22 GDPR). Where we make automated content-moderation or anti-abuse decisions (for example, automatically suspending a clearly-fraudulent account) you may request human review by emailing support@multipost.pro.`
    },
    {
      id: 'legal-bases',
      title: '5. Legal Bases for Processing (EEA / UK)',
      icon: <GavelIcon color="primary" />,
      content: `Where the GDPR or UK GDPR applies, we rely on the following legal bases for processing your personal data:\n\n* **Performance of a contract** (Article 6(1)(b) GDPR) — to provide the Service to you under our [Terms of Service](/terms), to take steps before entering into a contract at your request, and to manage your subscription.\n* **Legitimate interests** (Article 6(1)(f) GDPR) — to keep the Service secure, prevent fraud and abuse, run aggregated analytics, improve the product, and communicate operational information to you. Where we rely on this basis we have balanced our interests against your rights and reasonable expectations.\n* **Consent** (Article 6(1)(a) GDPR) — for non-essential cookies, optional marketing communications, and any sharing of personal data with third parties for purposes outside the scope of providing the Service. You can withdraw your consent at any time without affecting the lawfulness of processing carried out before withdrawal.\n* **Legal obligation** (Article 6(1)(c) GDPR) — to retain records required by Indonesian, EU, UK, or other applicable law (e.g. tax records), and to respond to valid legal process.\n* **Vital interests** (Article 6(1)(d) GDPR) — only in the rare case where this is necessary to protect the life or physical safety of you or another person.\n\nWe do not process special-category personal data, so Article 9 GDPR exceptions do not apply. We do not knowingly process the personal data of children (see Section 13).`
    },
    {
      id: 'cookies',
      title: '6. Cookies & Similar Technologies',
      icon: <CookieIcon color="primary" />,
      content: `We use cookies and similar local-storage technologies for the following purposes:\n\n**Strictly necessary (always on, no consent needed):**\n* \`mp_token\` / \`mp_admin_token\` — HttpOnly, Secure, SameSite=Lax JWT cookies used to keep you signed in.\n* CSRF / session cookies — to prevent cross-site request forgery on form submissions.\n* Lemon Squeezy checkout / portal cookies — set by Lemon Squeezy on its own domains during purchase and account-management flows; subject to Lemon Squeezy's privacy policy.\n\n**Functional (used with your continued use of the Service):**\n* Theme, language, time-zone, and dashboard-layout preferences stored in browser \`localStorage\`.\n\n**Analytics (privacy-conscious, used by default in production):**\n* **Vercel Analytics** and **Vercel Speed Insights** — collect aggregated, IP-truncated metrics about page-views, route timings, and Core Web Vitals. They do **not** use third-party advertising cookies and do not sell or share your data.\n\n**No advertising cookies.** We do not use Google Ads, Meta Pixel, TikTok Pixel, or any other cross-site advertising or remarketing technology on the Service.\n\nYou can control cookies in your browser settings, but blocking strictly-necessary cookies will prevent you from signing in or making purchases.`
    },
    {
      id: 'lemon-squeezy',
      title: '7. Payments — Lemon Squeezy as Merchant of Record',
      icon: <KeyIcon color="primary" />,
      content: `For all paid subscriptions, **Lemon Squeezy** acts as our **Merchant of Record (MoR)**. This means that, for the payment-and-tax leg of the relationship:\n\n* Lemon Squeezy is the seller of record;\n* Lemon Squeezy hosts the checkout, captures and processes your payment-method details, and issues the receipt and any tax document;\n* Lemon Squeezy is responsible for collecting and remitting any applicable VAT, GST, sales tax, or similar consumption taxes;\n* Lemon Squeezy is an **independent data controller** in respect of the payment data it collects from you. Its handling of your payment data is governed by **Lemon Squeezy's Privacy Policy** at \`https://www.lemonsqueezy.com/privacy\`.\n\nWe receive from Lemon Squeezy only the data we need to provide the Service (your customer ID, subscription state, Plan tier, billing email, country/ZIP code for tax-zone purposes, last-four card brand, receipt URL, refund status). **We do not receive — and never see — your full card number, CVV, or bank credentials.**\n\nIf you would like to update payment-method details, change billing addresses, or download invoices, the easiest way is the Lemon Squeezy customer portal linked from your most recent receipt and from the in-app **Billing** page.`
    },
    {
      id: 'sharing',
      title: '8. How We Share Your Information',
      icon: <PeopleAltIcon color="primary" />,
      content: `**We do not sell your personal data**, and we do not "share" your personal data for cross-context behavioural advertising as those terms are defined under the California Consumer Privacy Act (as amended by the CPRA). We share your personal data only in the following circumstances:\n\n* **With our sub-processors** (Section 9) — vendors that process personal data on our behalf to deliver the Service.\n* **With Connected Platforms** that you instruct us to integrate with — when you publish a video, the Content and metadata you provide is transmitted to the Connected Platform you select, on your instruction. Each Connected Platform has its own privacy policy that applies to data once it reaches that platform.\n* **With Lemon Squeezy** as Merchant of Record (Section 7).\n* **With our professional advisers** (e.g., lawyers, accountants, auditors, tax advisers) under appropriate confidentiality obligations, where reasonably necessary for the operation of the business.\n* **In connection with a merger, acquisition, financing, asset sale, reorganisation, bankruptcy, or other corporate transaction** — your personal data may be transferred as part of the transaction. We will notify you of any such transfer and the resulting privacy implications.\n* **For legal reasons** — to comply with valid legal process (subpoena, court order, lawful regulator request); to investigate, prevent, or take action regarding suspected fraud, security incidents, or violations of our [Terms of Service](/terms); to protect the rights, property, or safety of MultiPost, our users, or the public; or as otherwise required or permitted by law.\n* **With your consent** — for any other sharing, such as customer testimonials.`
    },
    {
      id: 'subprocessors',
      title: '9. Sub-processors (Vendors that Process Data on Our Behalf)',
      icon: <HubIcon color="primary" />,
      content: `The following sub-processors process personal data on our behalf to deliver the Service. Each is bound by a data-processing addendum (DPA) and uses appropriate safeguards (e.g., the EU Standard Contractual Clauses) for any international transfers.\n\n**Hosting & Compute**\n* **Vercel Inc.** (United States) — frontend hosting, edge runtime, Vercel Analytics, Speed Insights. Privacy: \`https://vercel.com/legal/privacy-policy\`.\n\n**Object Storage & CDN**\n* **Cloudflare, Inc.** (United States, with global edge) — Cloudflare R2 object storage and CDN delivery for video files, thumbnails, and static assets. Privacy: \`https://www.cloudflare.com/privacypolicy/\`.\n\n**Database**\n* **MongoDB, Inc. (MongoDB Atlas)** (regions selected by us) — primary application database. Privacy: \`https://www.mongodb.com/legal/privacy-policy\`.\n\n**Queue, Cache & Webhooks**\n* **Upstash, Inc.** (United States, with regional clusters) — Redis cache, QStash queue, and webhook signing. Privacy: \`https://upstash.com/trust/privacy.pdf\`.\n\n**Transactional Email**\n* **Resend Inc.** (United States) — verification, password-reset, billing-receipt, security-alert, and dunning emails. Privacy: \`https://resend.com/legal/privacy-policy\`.\n\n**Payments — Merchant of Record**\n* **Lemon Squeezy** (operated by Paddle.com Market Limited / Lemon Squeezy LLC) — see Section 7.\n\n**AI / LLM Providers**\n* **Google LLC (Gemini API)** — powers the Firdha AI Assistant for caption / hashtag generation. Prompts and AI outputs are processed by Google subject to Google's terms; we do not train Google models on your data. Privacy: \`https://policies.google.com/privacy\`.\n\n**Connected Platforms (controllers, not processors)**\n* **Google LLC (YouTube)** — when you connect a YouTube channel.\n* **Meta Platforms, Inc. / Meta Platforms Ireland Ltd. (Facebook & Instagram)** — when you connect Facebook Pages or Instagram Professional accounts.\n* **TikTok Pte. Ltd. / TikTok Inc.** — when you connect a TikTok account.\nThese platforms act as **independent controllers** for any personal data that reaches them as a result of you publishing through the Service.\n\nA current sub-processor list is maintained at this section. Material additions of new sub-processors that materially change the processing will be notified via in-app banner or email at least 30 days in advance, where reasonably practicable.`
    },
    {
      id: 'transfers',
      title: '10. International Data Transfers',
      icon: <PublicIcon color="primary" />,
      content: `MultiPost is operated from Indonesia, but our sub-processors (including Vercel, Cloudflare, MongoDB Atlas, Upstash, Resend, Google, Meta, TikTok, and Lemon Squeezy) operate globally and may store or process personal data in the United States, the European Economic Area, the United Kingdom, Singapore, and other regions.\n\nWhere personal data of individuals located in the European Economic Area, the United Kingdom, or Switzerland is transferred to a country that has not been granted an adequacy decision by the relevant data-protection authority, we rely on appropriate safeguards, principally the **EU Standard Contractual Clauses (Commission Implementing Decision (EU) 2021/914)** and, for transfers from the UK, the **UK International Data Transfer Addendum** to those clauses, supplemented by additional technical and organisational measures (encryption in transit, encryption at rest, strict access controls).\n\nYou may request a copy of the relevant transfer mechanism by emailing support@multipost.pro. We will provide a copy with sensitive commercial terms redacted.`
    },
    {
      id: 'retention',
      title: '11. Data Retention',
      icon: <ScheduleIcon color="primary" />,
      content: `We retain personal data only for as long as necessary for the purposes for which we collected it, and for any additional period required to comply with our legal obligations (such as tax record-keeping). Indicative retention periods:\n\n* **Account data (name, email, hashed password)** — for the lifetime of your Account, plus up to 90 days after deletion to allow recovery from accidental deletion and to complete back-up rotation.\n* **Connected-Platform OAuth tokens** — until you disconnect the platform or delete your Account; revoked immediately on disconnection.\n* **User Content (videos, thumbnails, metadata) on our R2 storage** — until you delete it or until 30 days after Account deletion, whichever is sooner. Successfully published Content remains on the Connected Platform under that platform's retention rules, which we do not control.\n* **Subscription / billing records** — retained by Lemon Squeezy and (in summary form) by us for at least the period required by Indonesian tax and accounting law, generally **ten (10) years** for invoicing records.\n* **Server, security, and audit logs** — typically up to 90 days, or longer when required for an active investigation, legal claim, or security incident.\n* **Support tickets and live-chat transcripts** — up to 24 months after the conversation closes, to handle follow-up questions and quality assurance.\n* **Marketing-consent records** — for the duration of your consent plus a reasonable period to demonstrate compliance with consent-based processing.\n* **Backups** — incremental backups are over-written on a rotating schedule of up to 90 days.\n\nAfter the applicable retention period, personal data is securely deleted or anonymised so that it can no longer be associated with an identifiable person.`
    },
    {
      id: 'security',
      title: '12. Security Measures',
      icon: <LockIcon color="primary" />,
      content: `We implement industry-standard technical and organisational measures to protect personal data against accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to, personal data. These measures include:\n\n* **Encryption in transit** — all communication with the Service uses TLS 1.2+ (HTTPS).\n* **Encryption at rest** — OAuth tokens, refresh tokens, and other secrets are encrypted with **AES-256-GCM** (using authenticated encryption with proper IVs and auth tags) before being persisted; databases and storage volumes are encrypted at rest by the underlying provider.\n* **Password hashing** — passwords are stored using a memory-hard algorithm with per-account salt; we never store, log, or transmit plaintext passwords.\n* **Least-privilege access** — only authorised personnel with a documented business need can access production data, controlled by SSO and audit logging.\n* **Rate limiting and abuse detection** — login, password-reset, signup, and upload endpoints are rate-limited; suspicious activity triggers alerts.\n* **Input validation and security headers** — all user input is validated; we set Content-Security-Policy, X-Frame-Options, X-Content-Type-Options, and similar hardening headers.\n* **Secure SDLC** — code is reviewed before deployment; secrets are managed in a secret-store, not in source.\n* **Patching** — operating systems, runtimes, and dependencies are patched promptly when vulnerabilities are disclosed.\n\n**No system is 100% secure.** We do not, and cannot, guarantee absolute security. If you become aware of any actual or suspected breach, please email support@multipost.pro immediately.`
    },
    {
      id: 'breach',
      title: '13. Data Breach Notification',
      icon: <ReportIcon color="primary" />,
      content: `In the event of a personal data breach that is likely to result in a risk to your rights and freedoms, we will:\n\n* Notify the competent supervisory authority within **72 hours** of becoming aware, where required by Article 33 GDPR or analogous local law;\n* Notify you without undue delay where the breach is likely to result in a **high** risk to your rights and freedoms (Article 34 GDPR), via the email address associated with your Account and/or a prominent in-app notice;\n* Take appropriate steps to contain, investigate, and remediate the breach.\n\nThis Section does not create any obligation that goes beyond what is required by applicable law.`
    },
    {
      id: 'rights',
      title: '14. Your Privacy Rights',
      icon: <HowToRegIcon color="primary" />,
      content: `Depending on where you live, you may have one or more of the following rights in respect of your personal data. **You can exercise any of these rights by emailing support@multipost.pro from the email address associated with your Account.** We will respond within the timeframe required by applicable law (typically one month for GDPR, 45 days for CCPA).\n\n**A. Rights available to all users:**\n* **Access** — request confirmation of whether we process your personal data and a copy of it.\n* **Rectification** — ask us to correct inaccurate or incomplete personal data. You can update most profile data yourself in the in-app **Settings** page.\n* **Deletion ("right to be forgotten")** — ask us to delete your personal data. You can self-serve by deleting your Account from the in-app **Settings** page.\n* **Withdraw consent** — where processing is based on consent, withdraw it at any time without affecting prior processing.\n* **Lodge a complaint** — with the data-protection regulator in your country.\n\n**B. Additional rights under EU/UK GDPR:**\n* **Restriction of processing** — ask us to limit how we use your data while a request is being investigated.\n* **Data portability** — receive a copy of the personal data you provided in a structured, commonly used, machine-readable format and have it transmitted to another controller where technically feasible.\n* **Object to processing** based on legitimate interests, including profiling.\n* **Object to direct marketing** at any time.\n* You may lodge a complaint with the data-protection authority of your country of residence, place of work, or place of the alleged infringement.\n\n**C. Additional rights under California (CCPA / CPRA):**\nCalifornia residents have the rights to know, access, correct, delete, and opt-out of the sale or sharing of their personal information. **We do not sell or "share" personal information for cross-context behavioural advertising.** We also do not knowingly collect or process the personal information of consumers under 16. To exercise California rights, email support@multipost.pro from your registered address with the subject "**California Privacy Request**". You may designate an authorised agent to make a request on your behalf with proof of authorisation.\n\n**D. Additional rights under other US state privacy laws** (Virginia, Colorado, Connecticut, Utah, Oregon, Texas, Iowa, Montana, and others as applicable) — analogous rights of access, correction, deletion, portability, and opt-out of targeted advertising / sale (which we do not engage in).\n\n**Verification.** To protect you, we may need to verify your identity before fulfilling a rights request. We may ask you to confirm details associated with your Account from a request sent from your registered email.`
    },
    {
      id: 'dnt',
      title: '15. Do-Not-Track & Global Privacy Control',
      icon: <VisibilityOffIcon color="primary" />,
      content: `We do not currently respond to browser "Do Not Track" (DNT) signals because no common industry standard for honouring DNT has been adopted. We recognise the **Global Privacy Control (GPC)** signal as a valid request to opt out of the "sale" or "sharing" of personal information for cross-context behavioural advertising under U.S. state privacy laws. As noted above, we do **not** sell or share personal information in that sense in any case.`
    },
    {
      id: 'marketing',
      title: '16. Marketing Communications',
      icon: <MarkEmailReadIcon color="primary" />,
      content: `**Transactional emails** (verification, password reset, receipts, security alerts, important Service notices) are sent to you on the basis that they are necessary to provide the Service. You cannot opt out of these while you have an active Account.\n\n**Optional product updates and newsletters** are sent only where you have opted in (or, in jurisdictions where soft opt-in is permitted, where you are an existing customer for a similar product). Every marketing email contains a one-click unsubscribe link, and you can also opt out at any time by emailing support@multipost.pro.`
    },
    {
      id: 'children',
      title: '17. Children\'s Privacy',
      icon: <ChildCareIcon color="primary" />,
      content: `The Service is **not directed to children under the age of 13**, and we do not knowingly collect personal information from children under 13. In the European Economic Area, the United Kingdom, and other jurisdictions where the GDPR digital-consent age is higher (typically 16), the Service is not directed to children under that local age.\n\nIf you believe that a child has provided personal data to us without the consent of a parent or legal guardian, please email support@multipost.pro. We will take prompt steps to delete such information.`
    },
    {
      id: 'youtube-data',
      title: '18. YouTube API Services — Specific Disclosures',
      icon: <StorageIcon color="primary" />,
      content: `Where you connect a YouTube channel and use features that rely on the YouTube API Services, the following additional disclosures apply:\n\n* **Compliance.** Our use of personal data received from the YouTube API Services adheres to the **Google API Services User Data Policy**, including the **Limited Use** requirements (\`https://developers.google.com/terms/api-services-user-data-policy\`).\n* **Purpose.** We access and use your YouTube data (channel info, ability to upload videos on your behalf, analytics where applicable) **solely** to provide the core functionality of the Service that you have requested.\n* **No advertising.** We do not use YouTube API data to serve advertisements or to build advertising profiles.\n* **No human reading.** Authorised personnel may access OAuth tokens and content metadata only for engineering, support, security, abuse-investigation, or legal purposes, in line with our internal access-control policy.\n* **No model training.** We do not use YouTube API data to train AI/ML models for any purpose other than Service-internal anti-abuse and recommendation features (and even then, only on aggregated, de-identified data where feasible).\n* **No transfer outside Limited Use.** YouTube API data is shared with sub-processors only to the extent necessary to provide the Service to you (Section 9).\n* **Revoking access.** You can revoke our access at any time via Google's Security settings at \`https://security.google.com/settings/security/permissions\`. After revocation, we will delete the corresponding OAuth tokens within seven (7) days from active production systems (subject to back-up rotation).\n* **Applicable Google policies.** Your use is also subject to the [YouTube Terms of Service](https://www.youtube.com/t/terms) and the [Google Privacy Policy](https://policies.google.com/privacy).`
    },
    {
      id: 'meta-tiktok',
      title: '19. Meta and TikTok — Specific Disclosures',
      icon: <SmartToyIcon color="primary" />,
      content: `Where you connect Facebook, Instagram, or TikTok accounts:\n\n* The personal data we receive is limited to what those platforms expose under the OAuth scopes you grant.\n* We use that data **only** to publish content on your behalf and to display connection status to you.\n* OAuth tokens are encrypted at rest with AES-256-GCM and revoked immediately on disconnect or Account deletion.\n* Once Content is published to Meta or TikTok, those platforms become independent controllers for any further processing of that Content. Their privacy practices are governed by their own privacy policies.`
    },
    {
      id: 'ai',
      title: '20. AI Assistant ("Firdha AI") and Live Chat',
      icon: <SmartToyIcon color="primary" />,
      content: `* **Firdha AI Assistant.** When you use the AI Assistant, your prompt and any context we attach to it (such as the title of the video you are working on) is sent to a third-party LLM provider, currently **Google Gemini** (subject to change with notice). The provider returns a response which we deliver to you in-app. We may log prompts and responses (excluding sensitive personal data where reasonably possible) for service improvement, abuse detection, and quality assurance. We do not allow the LLM provider to train its general models on your prompts to the extent the provider's API offers an opt-out, and we configure the API accordingly.\n* **Live Chat.** Conversations between you and our support team — including text, images, and any voluntarily-shared metadata — are stored securely. Access is restricted to authorised support personnel. Live-chat transcripts are retained per Section 11.\n* **Acceptable use.** Do not paste sensitive personal data of third parties into the AI Assistant or live chat unless you have a valid legal basis to do so.`
    },
    {
      id: 'links',
      title: '21. Third-Party Websites & Links',
      icon: <LinkIcon color="primary" />,
      content: `The Service contains links to, and integrates with, websites operated by third parties (Connected Platforms, Lemon Squeezy customer portal, sub-processors' help pages, and similar). When you click a link to a third-party website, you leave the Service and those third parties' privacy policies and terms apply. We are not responsible for the privacy practices or content of any third-party website.`
    },
    {
      id: 'changes',
      title: '22. Changes to This Privacy Policy',
      icon: <UpdateIcon color="primary" />,
      content: `We may update this Privacy Policy from time to time. If we make a **material** change (for example, a new purpose of processing, a new sub-processor category, or a change in the legal basis for processing), we will notify you in advance by email and/or by a prominent in-app banner before the change takes effect, and (where required) seek any necessary consent. Non-material updates take effect when posted with a refreshed "Last updated" date. Your continued use of the Service after the effective date constitutes acceptance of the revised Policy.`
    },
    {
      id: 'contact',
      title: '23. Contact Us',
      icon: <EmailIcon color="primary" />,
      content: `If you have any questions, concerns, or requests under this Privacy Policy, please contact:\n\n**Hanif Maulana, sole proprietor trading as MultiPost**\n* **Email:** support@multipost.pro\n* **Place of business:** Karawang, West Java (Jawa Barat), Indonesia\n\nIf you live in the European Economic Area or the United Kingdom and you are not satisfied with our response, you have the right to lodge a complaint with your local data-protection supervisory authority.`
    }
  ];

  const relatedLinks = [
    { label: 'Terms of Service', to: '/terms', icon: <GavelIcon fontSize='small' color='action' /> },
    { label: 'Refund Policy', to: '/refund', icon: <ReceiptLongIcon fontSize='small' color='action' /> },
    { label: 'Contact us', to: '/contact', icon: <EmailIcon fontSize='small' color='action' /> },
  ];

  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Read MultiPost's Privacy Policy. Learn how we collect, use, and protect your data on our multi-platform video distribution service."
        path="/privacy"
      />
      <LegalPageLayout
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your data — in plain English."
        lastUpdated={lastUpdated}
        breadcrumbLabel="Privacy Policy"
        sections={sections}
        relatedLinks={relatedLinks}
      />
    </>
  );
};

export default Page;
