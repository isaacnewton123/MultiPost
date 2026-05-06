// ── @architecture: PAGE ── pages/TermsPage.jsx ────────────────────
// Wraps the comprehensive Terms of Service sections in <LegalPageLayout>
// so this page shares the docs page look and feel: gradient hero,
// rounded content area, sticky sidebar of section anchors, and deep-link
// support via the URL hash (e.g. /terms#contact).
//
// All section copy is preserved verbatim from the previous version.

import React from 'react';
import SEO from '../components/SEO';
import LegalPageLayout from '../components/legal/LegalPageLayout';

// Icons (used inside the section icons array below)
import DescriptionIcon from '@mui/icons-material/DescriptionOutlined';
import GavelIcon from '@mui/icons-material/Gavel';
import BlockIcon from '@mui/icons-material/Block';
import PaymentIcon from '@mui/icons-material/PaymentOutlined';
import SecurityIcon from '@mui/icons-material/Security';
import UpdateIcon from '@mui/icons-material/Update';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircleOutlined';
import WarningIcon from '@mui/icons-material/WarningAmberOutlined';
import PolicyIcon from '@mui/icons-material/Policy';
import BuildIcon from '@mui/icons-material/BuildOutlined';
import ApiIcon from '@mui/icons-material/Api';
import ChatIcon from '@mui/icons-material/ChatOutlined';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import CancelIcon from '@mui/icons-material/CancelOutlined';
import CopyrightIcon from '@mui/icons-material/Copyright';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLongOutlined';
import HandshakeIcon from '@mui/icons-material/HandshakeOutlined';
import ArticleIcon from '@mui/icons-material/ArticleOutlined';
import HubIcon from '@mui/icons-material/HubOutlined';
import ScienceIcon from '@mui/icons-material/ScienceOutlined';
import MenuBookIcon from '@mui/icons-material/MenuBookOutlined';
import BadgeIcon from '@mui/icons-material/BadgeOutlined';
import HowToRegIcon from '@mui/icons-material/HowToRegOutlined';
import PublicIcon from '@mui/icons-material/PublicOutlined';
import ThunderstormIcon from '@mui/icons-material/ThunderstormOutlined';

const lastUpdated = 'May 6, 2026';
const effectiveDate = 'May 6, 2026';

const Page = () => {
  const sections = [
    {
      id: 'acceptance',
      title: '1. Acceptance of Terms',
      icon: <DescriptionIcon color="primary" />,
      content: `These Terms of Service ("**Terms**") form a binding legal agreement between you ("**you**", "**your**", "**Customer**") and **Hanif Maulana, an individual sole proprietor trading as "MultiPost"** ("**MultiPost**", "**we**", "**us**", "**our**"), operating from Karawang, West Java (Jawa Barat), Indonesia. These Terms govern your access to and use of the website at \`multipost.pro\`, the application at \`app.multipost.pro\`, the public API at \`api.multipost.pro\`, and any related products, content, software, and services we make available (collectively, the "**Service**").\n\n**By creating an account, clicking "I agree", subscribing to a paid plan, or otherwise accessing or using the Service, you confirm that:**\n\n* You have read, understood, and agree to be bound by these Terms, our [Privacy Policy](/privacy), and our [Refund Policy](/refund), each of which is incorporated by reference;\n* You are legally able to enter into a binding contract; and\n* If you are using the Service on behalf of an organisation, you have the authority to bind that organisation to these Terms, in which case "you" means that organisation.\n\nIf you do not agree to any part of these Terms, **do not register, do not subscribe, and do not use the Service.**\n\n**IMPORTANT NOTICES:** These Terms include (a) a limitation of liability, (b) a class-action waiver, and (c) a binding individual arbitration clause for most disputes. They affect your legal rights — please read them carefully.`
    },
    {
      id: 'about-operator',
      title: '2. About the Operator',
      icon: <BadgeIcon color="primary" />,
      content: `The Service is operated by:\n\n**Hanif Maulana, sole proprietor trading as "MultiPost"**\n* **Place of business:** Karawang, West Java (Jawa Barat), Republic of Indonesia\n* **Customer support and notices:** support@multipost.pro\n* **Brand:** MultiPost (formerly referenced as "Youtube MultiPost" in earlier versions of the product)\n\nMultiPost is a sole-proprietor business; "we", "us", and "our" refer to Hanif Maulana operating under that trading name. A copy of the underlying business registration / NIB is held on record and can be made available on reasonable request to government, tax, or compliance authorities, and to our payment service providers.\n\n**Merchant of Record (subscription payments).** All paid subscription fees are billed and processed by **Lemon Squeezy** (Lemon Squeezy is a trading name of Paddle.com Market Limited / Lemon Squeezy LLC, depending on your region) acting as our **Merchant of Record ("MoR")**. This means that for paid subscriptions Lemon Squeezy is the seller of record, the receipt issuer, and the party responsible for collecting and remitting any applicable VAT, GST, sales tax, or similar transaction taxes on our behalf. The customer relationship for the underlying SaaS service remains between you and MultiPost, but the **payment-and-tax relationship** for paid plans is between you and Lemon Squeezy. See sections 8 ("Fees, Billing & Payment") and 11 ("Refunds") for more.`
    },
    {
      id: 'definitions',
      title: '3. Definitions',
      icon: <MenuBookIcon color="primary" />,
      content: `For the purposes of these Terms:\n* **"Account"** means the unique account you create to access the Service.\n* **"Connected Platform"** means a third-party platform you connect to the Service via OAuth, including (without limitation) YouTube (Google LLC), Meta (Facebook and Instagram, operated by Meta Platforms, Inc. / Meta Platforms Ireland Ltd.), and TikTok (operated by TikTok Pte. Ltd. / TikTok Inc.).\n* **"Connected Platform Terms"** means the terms of service, developer policies, community guidelines, and acceptable-use policies of any Connected Platform.\n* **"Content"** means any video, image, audio, caption, title, description, tag, thumbnail, comment, message, or other material.\n* **"Customer Data"** means Content and other data you (or your end-users) submit to the Service.\n* **"Free Plan"** means the no-cost tier of the Service.\n* **"Lemon Squeezy"** means our Merchant of Record for paid subscriptions, as further described in Section 8.\n* **"Paid Plan"** means any subscription tier of the Service that requires payment.\n* **"Subprocessor"** means a third-party service provider that processes Customer Data on our behalf, as listed in our [Privacy Policy](/privacy).\n* **"User Content"** means Content uploaded, transmitted, or stored by you through the Service.`
    },
    {
      id: 'eligibility',
      title: '4. Eligibility',
      icon: <HowToRegIcon color="primary" />,
      content: `To use the Service you must:\n\n* Be at least **eighteen (18) years of age**, or the age of legal majority in your country of residence, whichever is greater. The Service is **not directed to children under 13** and we will not knowingly create an account for a child under 13. If you are between 13 and 17 you may only use the Service with the verifiable consent and supervision of a parent or legal guardian who agrees to be bound by these Terms on your behalf;\n* Not be a person barred from receiving the Service under the laws of Indonesia, your country of residence, or any other applicable jurisdiction (including, without limitation, applicable U.S., U.K., or E.U. sanctions and export-control laws — see Section 24);\n* Not have previously been suspended or removed from the Service by us;\n* Comply at all times with the Connected Platform Terms of any platform you link to your Account.\n\nWe may, at our sole discretion, refuse to provide the Service to any person or entity and change our eligibility criteria at any time.`
    },
    {
      id: 'account',
      title: '5. Account Registration & Security',
      icon: <AccountCircleIcon color="primary" />,
      content: `* **Registration.** To use most features you must create an Account by providing accurate, current, and complete information (including a valid email address) and keeping it up to date.\n* **Verification.** We may require you to verify your email address before granting full access. Unverified accounts may have restricted functionality and may be deleted after a reasonable period of inactivity.\n* **One person per Account.** Each Account is intended for a single user (or, in the case of a Paid Plan with multi-seat allowance, the specific seats licensed). You may not share your Account credentials, sell, or transfer your Account to any other person without our prior written consent.\n* **Credentials & security.** You are responsible for safeguarding your password, JWT, API keys, and any other credentials, and for all activity that occurs under your Account, whether or not authorised by you. You agree to notify us immediately at support@multipost.pro of any actual or suspected unauthorised access to your Account or breach of security.\n* **Connected Platform credentials.** OAuth tokens for Connected Platforms are stored in encrypted form (AES-256-GCM at rest). You can disconnect any Connected Platform at any time from your dashboard or by revoking access at the source platform.\n* **Account information accuracy.** You agree that we may rely on the contact, billing, and tax information you provide. You are solely responsible for the consequences of providing false or out-of-date information.`
    },
    {
      id: 'service',
      title: '6. Description of the Service',
      icon: <BuildIcon color="primary" />,
      content: `MultiPost is a software-as-a-service ("**SaaS**") platform that helps creators distribute video content across multiple social-media platforms. Subject to your subscription tier, the Service may include the ability to:\n\n* Connect your accounts on YouTube, Facebook, Instagram, and TikTok via OAuth;\n* Upload videos once and publish them, simultaneously or on a schedule, to one or more Connected Platforms;\n* Create, save, and apply metadata templates (titles, descriptions, tags, hashtags, thumbnails);\n* Schedule uploads with per-platform timing and retry-on-failure behaviour;\n* Perform client-side video optimisation prior to upload;\n* Monitor upload status, error logs, and historical analytics;\n* Use an AI assistant ("**Firdha AI**", powered by third-party large-language-model providers) to draft captions, hashtags, and titles;\n* Use a real-time live-chat support widget;\n* On higher-tier plans, access a developer API for programmatic use.\n\n**The Service is not the Connected Platforms.** We are not affiliated with, endorsed by, sponsored by, or controlled by Google, YouTube, Meta, Facebook, Instagram, ByteDance, or TikTok. Continued availability of any Connected Platform feature depends on those platforms' continued willingness to grant API access on commercially reasonable terms.\n\n**Service evolution.** We may add, modify, or discontinue features at any time. Where a discontinuation materially reduces the value of a Paid Plan, we will use commercially reasonable efforts to give you at least thirty (30) days' notice and a pro-rated credit or refund of any unused, pre-paid fees attributable to the discontinued feature.`
    },
    {
      id: 'subscriptions',
      title: '7. Subscription Plans',
      icon: <PolicyIcon color="primary" />,
      content: `The Service is offered through the following plan structure (as may be updated from time to time at \`multipost.pro/pricing\`):\n\n* **Free Plan.** Available without payment information, with limited usage (such as a small number of daily uploads, a capped monthly schedule limit, and limited platform connections). The Free Plan is offered "as-is" and we may change, limit, or discontinue it at any time.\n* **Paid Plans (Starter / Pro / Premium / Enterprise, names subject to change).** Provide higher quotas, additional features, priority support, and (on some tiers) API access. Paid Plans are billed monthly or annually in advance through Lemon Squeezy.\n* **Quotas and fair-use.** Each plan is subject to documented daily and monthly quotas. We reserve the right to throttle, queue, or temporarily suspend usage that materially exceeds the quotas of your Plan or that, in our reasonable opinion, constitutes abuse, automated misuse, or activity disproportionate to a single seat.\n\nThe specific features, quotas, and prices of each Plan at the time of your purchase are part of these Terms by reference.`
    },
    {
      id: 'billing',
      title: '8. Fees, Billing & Payment via Lemon Squeezy',
      icon: <PaymentIcon color="primary" />,
      content: `**Merchant of Record.** Paid Plans are sold and billed by **Lemon Squeezy** as our authorised Merchant of Record. When you purchase a Paid Plan:\n\n* Your contract for the *payment transaction* is with Lemon Squeezy;\n* Your contract for the *underlying SaaS Service* is with MultiPost;\n* Lemon Squeezy is responsible for billing, receipts, customer-portal access, and the collection and remittance of applicable VAT, GST, sales tax, or similar consumption taxes;\n* MultiPost is responsible for delivery of the Service itself.\n\n**Authorisation.** By providing a payment method to Lemon Squeezy you authorise Lemon Squeezy (and us, through Lemon Squeezy) to charge that method for the recurring fees of your selected Plan, plus any applicable taxes, until you cancel.\n\n**Currency & pricing.** Prices are displayed in U.S. dollars (USD) unless otherwise stated. Lemon Squeezy may, at the point of checkout, present prices in your local currency using exchange rates and/or local pricing it determines.\n\n**Invoices and receipts.** Lemon Squeezy issues each receipt, invoice, and tax document. You can view and download them from the Lemon Squeezy customer portal, the link to which is included in your purchase-confirmation email and accessible from the in-app billing page.\n\n**Failed payments.** If a payment fails, Lemon Squeezy will retry per its dunning schedule. If all retries fail, your Paid Plan may be downgraded to the Free Plan or your Account may be suspended until the outstanding balance is settled. You remain liable for fees accrued before downgrade or suspension.\n\n**Disputes.** If you believe a charge is in error, **contact support@multipost.pro within thirty (30) days** of the charge. Initiating a chargeback or payment-network dispute without first attempting good-faith resolution with us may result in immediate Account suspension.`
    },
    {
      id: 'auto-renewal',
      title: '9. Auto-Renewal of Paid Plans',
      icon: <AutorenewIcon color="primary" />,
      content: `**YOUR PAID PLAN AUTOMATICALLY RENEWS.**\n\n* **Renewal mechanism.** Each Paid Plan automatically renews for successive periods of the same length (one month for monthly plans, one year for annual plans) at the then-current price for that Plan, **unless and until you cancel before the end of the then-current billing period.** Lemon Squeezy will charge your saved payment method on or shortly before the renewal date.\n* **Renewal reminders.** For annual plans, Lemon Squeezy and/or we will use commercially reasonable efforts to remind you of an upcoming renewal at least seven (7) days in advance via the email associated with your Account.\n* **Cancelling auto-renewal.** You can cancel auto-renewal at any time from (a) the in-app **Billing** page, (b) the Lemon Squeezy customer portal, or (c) by emailing support@multipost.pro **before** the renewal date. Cancellation stops future renewals; it does not, by itself, refund the current period (see Section 11).\n* **Effect of cancellation.** If you cancel auto-renewal, your Paid Plan remains active and you keep access to paid features until the end of the period you have already paid for. After that point, your Account reverts to the Free Plan.\n\nBy purchasing a Paid Plan you expressly acknowledge and agree to the auto-renewal mechanism described in this Section.`
    },
    {
      id: 'cancellation',
      title: '10. Cancellation',
      icon: <CancelIcon color="primary" />,
      content: `You may cancel your subscription, downgrade to a lower paid tier, or downgrade to the Free Plan at any time:\n\n* **In-app:** Sign in, go to **Billing → Manage subscription**;\n* **Lemon Squeezy customer portal:** Use the link in your most recent receipt;\n* **Email:** Send a cancellation request from your Account email to support@multipost.pro and we will process it within two (2) business days.\n\nCancellation takes effect at the end of your current pre-paid period unless you also request a refund and a refund is granted under Section 11. After cancellation we may retain your Account, Customer Data, and Connected Platform tokens in line with the retention rules in our [Privacy Policy](/privacy) so that you can re-subscribe without losing your history; you may request earlier deletion at any time.`
    },
    {
      id: 'refunds',
      title: '11. Refunds — 7-Day Money-Back Guarantee',
      icon: <ReceiptLongIcon color="primary" />,
      content: `We offer a **7-day money-back guarantee for genuine technical issues** that prevent reasonable use of the Service. The full eligibility, exclusions, and process are described in our dedicated [Refund Policy](/refund), which is incorporated by reference. In summary:\n\n* **Window.** You may request a refund of your most recent subscription charge within **seven (7) calendar days** of that charge.\n* **Eligibility.** A refund is granted where the Service has a documented, reproducible technical defect that we are unable to resolve within a reasonable time and that materially prevents you from using the features of your Plan.\n* **How to request.** Email support@multipost.pro from the Account email with the subject "Refund request" and a brief description of the issue. Refunds are processed by Lemon Squeezy as Merchant of Record, normally within five to ten (5–10) business days, to the original payment method.\n* **Exclusions.** Renewals beyond the first 7-day window of each new subscription term, partial periods after a cancellation, fees attributable to violations of these Terms, refunds requested via chargeback rather than support, and Free Plan usage are not eligible. Specific exclusions are listed in the [Refund Policy](/refund).\n\nNothing in this Section limits any **non-waivable statutory right** you have under the consumer-protection laws of your country of residence (for example, the 14-day right of withdrawal under EU Directive 2011/83/EU for consumers in the European Economic Area, or Indonesian consumer-protection law).`
    },
    {
      id: 'price-changes',
      title: '12. Price Changes',
      icon: <UpdateIcon color="primary" />,
      content: `We may change the prices of Paid Plans, the contents of any Plan, or introduce new charges from time to time. Where a change increases the price of your existing Plan, we (or Lemon Squeezy on our behalf) will give you at least **thirty (30) days' notice** by email before the new price applies to your next renewal. If you do not agree to the new price you may cancel before the renewal date and the new price will not apply to you. Continuing to use the Paid Plan after the change takes effect constitutes acceptance of the new price.`
    },
    {
      id: 'acceptable-use',
      title: '13. Acceptable Use Policy',
      icon: <BlockIcon color="primary" />,
      content: `You agree that you will not, and will not permit any third party to, use the Service to:\n\n* Violate any applicable law, regulation, or third-party right (including intellectual-property, privacy, publicity, contract, or tort rights);\n* Upload, schedule, publish, or transmit any Content that is unlawful, defamatory, obscene, child-sexual-abuse material (CSAM), incites violence or terrorism, harasses, threatens, or discriminates against any person on protected grounds;\n* Upload Content for which you do not own the rights or have a valid licence/permission, including unlicensed music, copyrighted clips, or content that misappropriates the likeness or voice of another person;\n* Engage in spam, deceptive engagement, artificial amplification, automated mass posting, or behaviour designed to manipulate any Connected Platform's recommendation, monetisation, or trust-and-safety systems;\n* Violate the terms of any Connected Platform (including YouTube's Terms of Service / API Services Terms, Meta's Platform Terms, or TikTok's Terms of Service and Developer Terms);\n* Interfere with or disrupt the integrity or performance of the Service, the Connected Platforms, or any related infrastructure (including denial-of-service attacks, scraping in excess of documented quotas, or attempts to bypass rate-limits);\n* Reverse-engineer, decompile, disassemble, or otherwise attempt to derive the source code, models, or non-public algorithms of the Service, except to the extent expressly permitted by mandatory law;\n* Resell, lease, sublicense, or "white-label" the Service to third parties without our prior written consent;\n* Use the Service to build a competing product;\n* Impersonate any person or entity or misrepresent your affiliation;\n* Knowingly upload viruses, malware, ransomware, or other harmful code;\n* Use the AI Assistant or any AI-driven feature to generate content that is misleading, defamatory, infringing, or that we have explicitly prohibited (e.g. CSAM, election-interference content, deepfakes of real people without consent);\n* Use the Service in any manner inconsistent with the documentation, your Plan's quotas, or these Terms.\n\nWe may monitor for, investigate, and take action against any breach of this Section, including by suspending your Account immediately and without prior notice in cases of serious or repeated abuse.`
    },
    {
      id: 'user-content',
      title: '14. User Content & Licence Grant',
      icon: <ContentPasteIcon color="primary" />,
      content: `* **Ownership.** As between you and us, you retain all right, title, and interest in and to your User Content. We claim no ownership of your videos, thumbnails, captions, or other Content.\n* **Responsibility.** You are solely responsible for your User Content and for the consequences of uploading, scheduling, and publishing it through the Service. You represent and warrant that you own (or have all necessary rights, licences, releases, and consents to use) the User Content and that the User Content and its publication through the Service do not and will not infringe or violate any third-party right or any law.\n* **Licence to us.** You grant us a worldwide, non-exclusive, royalty-free, sublicensable (to our Subprocessors) licence to host, store, transmit, transcode, cache, copy, display, distribute, and otherwise process your User Content **solely for the purpose of operating, providing, securing, and improving the Service** at your direction (for example, transcoding a video so that we can upload it to YouTube on your behalf, or storing a thumbnail so that it can be re-served from our CDN). This licence terminates when you delete the User Content, except (a) for residual back-up copies that are over-written in the ordinary course of our backup-rotation cycle (no longer than 90 days) and (b) where we are required by law to retain a copy.\n* **Anonymised analytics.** We may compute and use aggregated, de-identified statistics derived from User Content (for example, "average upload size on the platform increased 15% month-over-month") for product improvement, capacity planning, and marketing, provided that the resulting data does not identify you or your Account.\n* **No obligation to store.** We are not a back-up service and have no obligation to retain User Content after its successful publication to a Connected Platform. Keep your own copies.`
    },
    {
      id: 'third-party',
      title: '15. Third-Party Services & Sub-processors',
      icon: <HubIcon color="primary" />,
      content: `The Service relies on, integrates with, or transmits data to third-party services. By using the Service you authorise us to share Customer Data with these providers solely as needed to deliver the Service. The principal categories of providers are:\n\n* **Connected Platforms** — YouTube (Google LLC), Meta (Facebook, Instagram), TikTok.\n* **Payments & MoR** — Lemon Squeezy (and its underlying processors such as Stripe and PayPal).\n* **Hosting & infrastructure** — Vercel (frontend hosting), Cloudflare R2 (object storage and CDN), MongoDB Atlas (database), Upstash (queue and cache).\n* **Communications** — Resend (transactional email), our chat-widget provider, our live-chat realtime provider.\n* **AI providers** — Google Gemini and/or other large-language-model providers used by the Firdha AI Assistant.\n* **Analytics & monitoring** — Vercel Analytics / Speed Insights and similar privacy-conscious providers.\n\nA current list of Subprocessors and their purposes is maintained in our [Privacy Policy](/privacy). Each provider is bound by its own terms of service and privacy policy, which apply in addition to ours. We are not responsible for the acts or omissions of any third-party service except to the extent required by law.\n\n**Connected Platform suspensions.** If a Connected Platform suspends, rate-limits, or revokes your access (or our access on your behalf), we are not liable for the resulting loss of functionality. You are solely responsible for compliance with the Connected Platform Terms.`
    },
    {
      id: 'platform-terms',
      title: '16. Platform-Specific Terms',
      icon: <ApiIcon color="primary" />,
      content: `When you use a feature that integrates with a Connected Platform, additional platform-specific terms apply:\n\n**YouTube.** Use of YouTube features through the Service is also governed by (a) the [YouTube Terms of Service](https://www.youtube.com/t/terms), (b) the [Google Privacy Policy](https://policies.google.com/privacy), and (c) where applicable, the [YouTube API Services Terms of Service](https://developers.google.com/youtube/terms/api-services-terms-of-service). Our use and transfer of information received from Google APIs to any other app adheres to the Google API Services User Data Policy, including the Limited Use requirements. You can revoke our access at any time at \`https://security.google.com/settings/security/permissions\`.\n\n**Meta (Facebook & Instagram).** Use of Meta features is also governed by Meta's Terms of Service, the Facebook Platform Terms, the Instagram Platform Policy, and Meta's Developer Policies. You are responsible for managing the Pages, Instagram Professional Accounts, and ad accounts you connect.\n\n**TikTok.** Use of TikTok features is also governed by the TikTok Terms of Service, the TikTok Developer Terms of Service, and the TikTok Community Guidelines.\n\n**API quotas.** You are solely responsible for monitoring and managing the API quota that your activity through the Service consumes on each Connected Platform. We are not liable for suspensions, throttles, or content removals imposed by a Connected Platform.`
    },
    {
      id: 'dmca',
      title: '17. DMCA & Copyright Policy',
      icon: <CopyrightIcon color="primary" />,
      content: `We respect intellectual-property rights and expect our users to do the same. Although the Service is operated from Indonesia, we voluntarily honour notices submitted in the form prescribed by the U.S. Digital Millennium Copyright Act (17 U.S.C. § 512) ("**DMCA**") for content uploaded through the Service that we host directly.\n\n**Submitting a notice.** A valid DMCA notice must include:\n\n1. A physical or electronic signature of the copyright owner or a person authorised to act on their behalf;\n2. Identification of the copyrighted work claimed to have been infringed;\n3. Identification of the allegedly infringing material and information reasonably sufficient to permit us to locate it (e.g. a URL within the Service);\n4. Your contact information (full name, postal address, telephone, email);\n5. A statement that you have a good-faith belief that the use is not authorised by the rights-holder, its agent, or the law;\n6. A statement, under penalty of perjury, that the information in the notice is accurate and that you are authorised to act on behalf of the rights-holder.\n\nSend notices to **support@multipost.pro** with the subject "**DMCA Notice**".\n\n**Counter-notices.** If your Content is removed or disabled in error, you may submit a counter-notice containing the equivalent information set out in 17 U.S.C. § 512(g).\n\n**Repeat infringers.** We will, in appropriate circumstances and at our sole discretion, suspend or terminate the Accounts of users who are determined to be repeat infringers.`
    },
    {
      id: 'our-ip',
      title: '18. Our Intellectual Property & Feedback',
      icon: <SecurityIcon color="primary" />,
      content: `* **Our IP.** The Service, the "MultiPost" name, the MultiPost logo, the "Firdha AI" name, the website, the dashboards, the underlying source code, the API, the design system, the documentation, and any related text, graphics, and audio (the "**MultiPost Materials**") are the exclusive property of Hanif Maulana trading as MultiPost (or its licensors) and are protected by copyright, trademark, trade-secret, and other intellectual-property laws. These Terms grant you a limited, revocable, non-exclusive, non-transferable, non-sublicensable licence to use the Service for your internal purposes, subject to your Plan and these Terms. **All other rights are reserved.**\n* **No copying.** You may not copy, modify, create derivative works of, publicly display, publicly perform, republish, or distribute any of the MultiPost Materials without our prior written consent.\n* **Trademarks.** "MultiPost" and the MultiPost logo are unregistered trademarks of Hanif Maulana. You may not use them in any commercial context (including domain names, app names, app-store listings, paid ads, or comparable products) without our prior written consent.\n* **Feedback.** If you submit suggestions, ideas, enhancement requests, or other feedback ("**Feedback**"), you grant us a perpetual, irrevocable, worldwide, royalty-free, fully sublicensable licence to use and exploit the Feedback for any purpose, without obligation or compensation to you.`
    },
    {
      id: 'beta-api',
      title: '19. Beta Features & API Access',
      icon: <ScienceIcon color="primary" />,
      content: `* **Beta Features.** From time to time we may make features available that are clearly labelled "alpha", "beta", "preview", "experimental", or similar ("**Beta Features**"). Beta Features are provided **as-is**, without any warranty, may change or be removed without notice, and may not be subject to the same level of support or service-level commitment as the rest of the Service. Your use of any Beta Feature is at your own risk.\n* **API access.** If your Plan includes access to our developer API, you are granted a limited, non-exclusive, non-transferable licence to use the API in accordance with our API documentation and your Plan's quotas. You may not (a) use the API to circumvent any quota or restriction, (b) cache or store API responses for longer than the API documentation permits, (c) use the API to build a product that competes with the Service, or (d) share, sell, or transfer your API keys.\n* **API revocation.** We may, in our reasonable discretion, suspend or revoke your API access at any time for breach of these Terms, security reasons, or excessive usage. We will use commercially reasonable efforts to give you advance notice unless doing so would compromise security.`
    },
    {
      id: 'suspension',
      title: '20. Suspension, Termination & Data Deletion',
      icon: <CancelIcon color="primary" />,
      content: `* **Termination by you.** You may terminate these Terms at any time by deleting your Account from the in-app Settings page or by emailing support@multipost.pro from the Account email.\n* **Termination by us.** We may suspend, restrict, or terminate your Account and access to the Service at any time, with or without notice, if (a) you breach these Terms, the Acceptable Use Policy, the Refund Policy, or any Connected Platform Terms; (b) we are required to do so by law, court order, or government request; (c) your continued use creates a security or legal risk to us or our users; or (d) the Service is being discontinued in whole or in your country.\n* **Effect of termination.** On termination (i) your right to access and use the Service immediately ceases, (ii) we will, within thirty (30) days of confirmed termination, permanently delete your User Content and Personal Data from our active production systems (subject to back-up rotation of up to 90 days), except where retention is required by law or to protect our legal interests (e.g. fraud investigation, billing dispute), and (iii) any unpaid fees become immediately due. Sections 11, 14, 18, and 21–32 survive termination.\n* **Data export before termination.** You should download or export any Customer Data you wish to keep before terminating. We have no obligation to provide a data-export tool, although we may do so as a matter of practice.`
    },
    {
      id: 'disclaimers',
      title: '21. Disclaimers of Warranties',
      icon: <WarningIcon color="primary" />,
      content: `**TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, THE SERVICE, THE MULTIPOST MATERIALS, AND ANY BETA FEATURES ARE PROVIDED "AS IS" AND "AS AVAILABLE", WITH ALL FAULTS AND WITHOUT WARRANTY OF ANY KIND, EXPRESS, IMPLIED, OR STATUTORY.** We expressly disclaim any and all warranties, including (without limitation) implied warranties of merchantability, fitness for a particular purpose, title, accuracy of data, and non-infringement.\n\nWithout limiting the foregoing, we do not warrant that:\n\n* The Service will be uninterrupted, timely, secure, or error-free;\n* Any Content uploaded through the Service will reach a Connected Platform, be accepted by it, remain available there, or generate any particular reach, engagement, or revenue;\n* Errors in the Service will be corrected, or that any data lost through use of the Service will be recoverable;\n* The Service or the servers that make it available are free of viruses or other harmful components.\n\nNo advice or information, whether oral or written, obtained from us or through the Service, creates any warranty not expressly stated in these Terms. Some jurisdictions do not allow the exclusion of certain warranties; in those jurisdictions the foregoing exclusions apply to you only to the extent permitted by applicable law.`
    },
    {
      id: 'liability',
      title: '22. Limitation of Liability',
      icon: <WarningIcon color="primary" />,
      content: `**TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW:**\n\n1. **No indirect damages.** In no event shall MultiPost (Hanif Maulana), our affiliates, officers, employees, agents, suppliers, or licensors be liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, or for any loss of profits, revenue, goodwill, business opportunity, anticipated savings, data, or use, however caused and on any theory of liability (whether in contract, tort, negligence, strict liability, or otherwise), arising out of or in connection with these Terms or the Service, even if we have been advised of the possibility of such damages.\n2. **Aggregate cap.** Our aggregate liability arising out of or in connection with these Terms or the Service shall not exceed the **greater of (a) one hundred U.S. dollars (USD $100), or (b) the total fees actually paid by you to us (or to Lemon Squeezy as our Merchant of Record on our behalf) in respect of the Service during the twelve (12) months immediately preceding the event giving rise to the claim.**\n3. **Independent allocation of risk.** The limitations in this Section apply even if any limited remedy fails of its essential purpose, and reflect the agreed allocation of risk that forms part of the bargain between you and us.\n\nNothing in these Terms excludes or limits any liability that cannot be excluded or limited under applicable law (such as liability for fraud, gross negligence, or wilful misconduct).`
    },
    {
      id: 'indemnification',
      title: '23. Indemnification',
      icon: <HandshakeIcon color="primary" />,
      content: `You agree to defend, indemnify, and hold harmless MultiPost (Hanif Maulana), our affiliates, and our respective officers, employees, agents, and licensors from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of or relating to:\n\n* Your User Content, including any claim that the User Content infringes any third-party right or violates any applicable law;\n* Your use of, or inability to use, the Service in violation of these Terms;\n* Your breach of any Connected Platform Terms;\n* Your violation of any law, regulation, or third-party right;\n* Your gross negligence, wilful misconduct, or fraud.\n\nWe will give you prompt written notice of any indemnifiable claim, reasonable cooperation in its defence (at your expense), and the right to control the defence and settlement, provided that you may not settle any claim that imposes a non-monetary obligation on us without our prior written consent.`
    },
    {
      id: 'export',
      title: '24. Export Controls & Sanctions',
      icon: <PublicIcon color="primary" />,
      content: `The Service may be subject to export and import laws of the Republic of Indonesia, the United States, the European Union, and other jurisdictions. You represent and warrant that:\n\n* You are not located in, organised under the laws of, or ordinarily resident in any country or region subject to comprehensive U.S., U.N., or E.U. economic sanctions (including, as of the date of these Terms, Cuba, Iran, North Korea, Syria, the Crimea region, the so-called Donetsk and Luhansk People's Republics, and other regions designated from time to time);\n* You are not on, and are not 50%-or-more owned by a person on, any sanctioned-party or denied-party list (e.g. the U.S. OFAC SDN List, the U.S. Entity List, the U.K. OFSI Consolidated List, or the E.U. Consolidated List);\n* You will not use, export, re-export, or transfer the Service in violation of any applicable export-control or sanctions law.\n\nWe may suspend or terminate your access immediately if we determine, in our reasonable discretion, that continued provision of the Service would violate this Section.`
    },
    {
      id: 'force-majeure',
      title: '25. Force Majeure',
      icon: <ThunderstormIcon color="primary" />,
      content: `Neither party will be liable for any delay or failure to perform any obligation under these Terms (other than a payment obligation) where the delay or failure results from any cause beyond that party's reasonable control, including acts of God, earthquake, flood, fire, civil unrest, war, terrorism, government action, internet or telecommunications outages, denial-of-service attacks, pandemic or epidemic public-health measures, or third-party infrastructure failure (including failures of any Connected Platform, hosting provider, or Subprocessor).`
    },
    {
      id: 'governing-law',
      title: '26. Governing Law & Venue',
      icon: <GavelIcon color="primary" />,
      content: `These Terms, and any non-contractual obligations arising out of or in connection with them, are governed by, and construed in accordance with, the **laws of the Republic of Indonesia**, without regard to conflict-of-law principles. Subject to Section 27 (Dispute Resolution), the parties submit to the **exclusive jurisdiction of the courts of Karawang, West Java (Jawa Barat), Indonesia** for any dispute that is not subject to arbitration. The United Nations Convention on Contracts for the International Sale of Goods does not apply.`
    },
    {
      id: 'dispute',
      title: '27. Informal Resolution & Binding Arbitration',
      icon: <GavelIcon color="primary" />,
      content: `**PLEASE READ THIS SECTION CAREFULLY — IT MAY SIGNIFICANTLY AFFECT YOUR LEGAL RIGHTS, INCLUDING YOUR RIGHT TO FILE A LAWSUIT IN COURT.**\n\n* **Informal resolution.** Before commencing any formal dispute, the parties agree to attempt to resolve the dispute informally for at least sixty (60) days by contacting support@multipost.pro with a written description of the dispute and the relief sought.\n* **Arbitration.** If the dispute is not resolved informally, the parties agree to resolve any claim, dispute, or controversy (excluding claims for injunctive or equitable relief) arising out of or relating to these Terms or the Service by **binding arbitration administered by the Indonesian National Arbitration Board (BANI — Badan Arbitrase Nasional Indonesia)** in **Karawang or Jakarta, Indonesia**, in accordance with BANI's then-current rules. The arbitration will be conducted by a single arbitrator in the English or Indonesian language, as agreed by the parties (and absent agreement, in Indonesian). The arbitral award will be final and binding, and judgment may be entered in any court of competent jurisdiction.\n* **Equitable relief.** Notwithstanding the foregoing, either party may seek temporary or preliminary injunctive relief in a court of competent jurisdiction to protect intellectual-property rights or to enforce confidentiality obligations.\n* **Statute of limitations.** Any claim arising out of or relating to these Terms or the Service must be brought within one (1) year after the cause of action arose, or be forever barred (except where applicable mandatory law provides a longer period that cannot be contractually shortened).`
    },
    {
      id: 'class-waiver',
      title: '28. Class-Action Waiver',
      icon: <BlockIcon color="primary" />,
      content: `**YOU AND WE EACH AGREE THAT ANY DISPUTE RESOLUTION PROCEEDINGS WILL BE CONDUCTED ONLY ON AN INDIVIDUAL BASIS AND NOT IN A CLASS, CONSOLIDATED, OR REPRESENTATIVE ACTION.** Neither you nor we may participate in a class action or class-wide arbitration for any dispute covered by these Terms. You and we further agree that the arbitrator may not consolidate proceedings or claims of more than one person, and may not otherwise preside over any form of representative or class proceeding. If this class-action waiver is found to be unenforceable, then the entirety of Section 27 (Arbitration) shall be null and void.`
    },
    {
      id: 'modifications',
      title: '29. Modifications to These Terms',
      icon: <UpdateIcon color="primary" />,
      content: `We may amend these Terms from time to time. If we make a change that we reasonably believe is **material** (for example, a change to the dispute-resolution clause, a material reduction in your rights, or a material change to refunds or auto-renewal), we will give you at least **thirty (30) days' notice** by email and/or by a prominent notice within the Service before the change takes effect. Non-material changes (such as clarifications, formatting fixes, or new optional features) take effect when posted with an updated "Last updated" date. Your continued use of the Service after the effective date constitutes acceptance of the revised Terms. If you do not agree, you must stop using the Service and may cancel your Paid Plan in accordance with Section 10.`
    },
    {
      id: 'misc',
      title: '30. General Provisions',
      icon: <ArticleIcon color="primary" />,
      content: `* **Entire Agreement.** These Terms, together with our [Privacy Policy](/privacy), our [Refund Policy](/refund), and any order form or pricing page in effect at the time of purchase, constitute the entire agreement between you and us regarding the Service and supersede all prior or contemporaneous agreements, communications, and proposals on the subject.\n* **Severability.** If any provision of these Terms is held invalid or unenforceable, that provision will be limited or eliminated to the minimum extent necessary so that the remaining provisions remain in full force and effect.\n* **No waiver.** Our failure to enforce any right or provision of these Terms is not a waiver of that right or provision.\n* **Assignment.** You may not assign or transfer these Terms (by operation of law, merger, or otherwise) without our prior written consent. We may assign these Terms in connection with a merger, acquisition, reorganisation, sale of substantially all assets, or by operation of law, in each case on at least 30 days' prior notice.\n* **Independent contractors.** Nothing in these Terms creates a partnership, joint venture, employment, or agency relationship between you and us.\n* **Headings.** Section headings are for convenience only and do not affect interpretation.\n* **Language.** These Terms are written in English. Any translation is provided for your convenience only; in case of conflict the English version prevails.`
    },
    {
      id: 'notices',
      title: '31. Notices & Electronic Communications',
      icon: <ArticleIcon color="primary" />,
      content: `* **Notices to you.** We may give notice to you by email to the address associated with your Account, by posting in the Service, or — for legal notices — by both. You consent to receive notices and other communications from us electronically; this satisfies any legal requirement that such communications be in writing.\n* **Notices to us.** Legal notices to us must be sent in writing in English to **support@multipost.pro** with the subject "**Legal Notice**". Notices are deemed delivered on the date of email transmission with no bounce.`
    },
    {
      id: 'contact',
      title: '32. Contact',
      icon: <EmailIcon color="primary" />,
      content: `Questions, complaints, or requests under these Terms (including DMCA notices, refund requests, data-subject requests, and arbitration notices) should be addressed to:\n\n**Hanif Maulana, sole proprietor trading as MultiPost**\n* **Email:** support@multipost.pro\n* **Place of business:** Karawang, West Java (Jawa Barat), Indonesia\n* **Effective date of these Terms:** ${effectiveDate}`
    }
  ];

  const relatedLinks = [
    { label: 'Privacy Policy', to: '/privacy', icon: <PolicyIcon fontSize='small' color='action' /> },
    { label: 'Refund Policy', to: '/refund', icon: <ReceiptLongIcon fontSize='small' color='action' /> },
    { label: 'Contact us', to: '/contact', icon: <EmailIcon fontSize='small' color='action' /> },
  ];

  return (
    <>
      <SEO
        title="Terms of Service"
        description="Read MultiPost's Terms of Service. Free to start — understand your rights and responsibilities when using our multi-platform video distribution platform."
        path="/terms"
      />
      <LegalPageLayout
        title="Terms of Service"
        subtitle="Please read these terms carefully before using MultiPost."
        lastUpdated={lastUpdated}
        breadcrumbLabel="Terms of Service"
        sections={sections}
        relatedLinks={relatedLinks}
      />
    </>
  );
};

export default Page;
