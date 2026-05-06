// ── @architecture: PAGE ── pages/RefundPage.jsx ────────────────────
// Wraps the comprehensive Refund Policy sections in <LegalPageLayout>
// so this page shares the docs page look and feel: gradient hero,
// rounded content area, sticky sidebar of section anchors, and deep-link
// support via the URL hash (e.g. /refund#contact).
//
// All section copy is preserved verbatim from the previous version.

import React from 'react';
import SEO from '../components/SEO';
import LegalPageLayout from '../components/legal/LegalPageLayout';

// Icons (used inside the section icons array below)
import ReceiptLongIcon from '@mui/icons-material/ReceiptLongOutlined';
import VerifiedIcon from '@mui/icons-material/VerifiedOutlined';
import EmailIcon from '@mui/icons-material/EmailOutlined';
import BlockIcon from '@mui/icons-material/Block';
import ScheduleIcon from '@mui/icons-material/ScheduleOutlined';
import PaymentIcon from '@mui/icons-material/PaymentOutlined';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import CancelIcon from '@mui/icons-material/CancelOutlined';
import GavelIcon from '@mui/icons-material/Gavel';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import HowToRegIcon from '@mui/icons-material/HowToRegOutlined';
import WarningIcon from '@mui/icons-material/WarningAmberOutlined';
import UpdateIcon from '@mui/icons-material/Update';
import PolicyIcon from '@mui/icons-material/Policy';

const lastUpdated = 'May 6, 2026';
const effectiveDate = 'May 6, 2026';

const Page = () => {
  const sections = [
    {
      id: 'overview',
      title: '1. Overview & 7-Day Money-Back Guarantee',
      icon: <ReceiptLongIcon color="primary" />,
      content: `This Refund Policy ("**Policy**") forms part of, and is incorporated by reference into, the [Terms of Service](/terms) of **MultiPost**, operated by **Hanif Maulana, an individual sole proprietor trading as "MultiPost"** ("**MultiPost**", "**we**", "**us**", "**our**"), with its place of business in Karawang, West Java (Jawa Barat), Indonesia.\n\n**We stand behind our product. We offer a 7-day money-back guarantee on the *first* paid subscription charge of any new MultiPost subscription, where the Service has a documented technical issue that materially prevents you from using the features of your Plan and we are unable to resolve the issue within a reasonable time.**\n\nThis Policy explains who is eligible, what is and is not eligible, how to request a refund, how long it takes, and how the refund is processed. Capitalised terms not defined here have the meaning given in the [Terms of Service](/terms).`
    },
    {
      id: 'merchant-of-record',
      title: '2. Lemon Squeezy as Merchant of Record',
      icon: <PaymentIcon color="primary" />,
      content: `All paid subscriptions are sold and billed by **Lemon Squeezy** acting as our **Merchant of Record (MoR)**. This means:\n\n* Lemon Squeezy is the seller of record on your receipt and your card or bank statement;\n* Lemon Squeezy collects and remits any applicable VAT, GST, sales tax, or similar consumption tax;\n* All refunds approved under this Policy are **processed through Lemon Squeezy** back to the original payment method (credit card, debit card, PayPal, etc.).\n\nMultiPost is the party responsible for **deciding** whether a refund is granted under this Policy. Lemon Squeezy is the party that **executes** the refund mechanically once we approve it. Lemon Squeezy's own terms and policies (\`https://www.lemonsqueezy.com/legal\`) also apply to the payment-and-tax leg of every transaction.\n\nIf you are unsure who you paid, check your most recent receipt — the merchant on the statement will reference Lemon Squeezy and/or "MultiPost via Lemon Squeezy".`
    },
    {
      id: 'eligibility',
      title: '3. Eligibility for the 7-Day Money-Back Guarantee',
      icon: <VerifiedIcon color="primary" />,
      content: `You are eligible for a refund under the 7-day money-back guarantee if **all** of the following conditions are met:\n\n1. **Window.** Your refund request reaches us at \`support@multipost.pro\` within **seven (7) calendar days** of the date the charge appears on your statement (the "**Refund Window**").\n2. **First-charge or first-of-term.** The charge is either the **first paid charge** on your MultiPost Account, or the first charge of a **new subscription term** (e.g., a fresh annual term after a clean renewal). Mid-cycle renewals beyond the first 7 days of a term are not within scope unless local law requires otherwise (see Section 8).\n3. **Genuine technical issue.** You report a **specific, reproducible technical issue with the Service** that materially prevents you from using the features of your Plan — for example, uploads that consistently fail with a server error attributable to MultiPost, scheduled posts that never execute, or repeated authentication errors that prevent sign-in.\n4. **Reasonable opportunity to fix.** You have given us a reasonable opportunity to investigate and resolve the issue (typically by replying to a support ticket or providing requested logs / screenshots) and we have either been unable to resolve it or have failed to respond within a reasonable time.\n5. **No material breach.** You have not materially breached the [Terms of Service](/terms), the Acceptable Use Policy, or the Connected Platform Terms (e.g., abuse, spam, infringement, automated mass posting outside of API limits, etc.).\n6. **No prior refund on the same Account.** You have not previously received a money-back-guarantee refund on the same MultiPost Account in the preceding twelve (12) months.\n\nIf you meet all of the above, **we will refund 100% of the eligible charge to your original payment method.** No restocking fees, no proration penalty, no "20% gateway deduction".`
    },
    {
      id: 'not-eligible',
      title: '4. What Is NOT Eligible for a Refund',
      icon: <BlockIcon color="primary" />,
      content: `The following are **not** eligible under this Policy (subject always to non-waivable rights you may have under the consumer-protection law of your country of residence — see Section 8):\n\n* **Renewal charges** beyond the 7-day window of each new subscription term, including silent automatic renewals you forgot to cancel.\n* **Partial periods** of usage after a cancellation (we don't pro-rate when you cancel mid-cycle — your Plan stays active for the period you've already paid for).\n* **Free Plan** activity, since no money has been paid.\n* **One-off add-ons** that have already been delivered or consumed (e.g., a single-purchase quota top-up that has been used).\n* Refunds requested **only** because you "no longer need" the Service, "found a cheaper competitor", "forgot to cancel", or "didn't realise it was a paid subscription" after the 7-day window.\n* Refunds where the issue is caused by **a Connected Platform** (YouTube, Meta, TikTok), the platform's policies, your account standing on that platform, your platform-side quota, or content moderation by that platform — these are outside our control.\n* Refunds where the issue is caused by **your local internet, your device, your browser configuration, or third-party software** running on your device.\n* Refunds where **you have materially breached** the [Terms of Service](/terms), Acceptable Use Policy, Refund Policy, or Connected Platform Terms — for example, accounts suspended for spam, infringement, automated mass posting, fraud, or chargebacks.\n* Refunds requested via **chargeback or payment-network dispute** without first contacting support@multipost.pro to attempt a good-faith resolution. Initiating a chargeback in those circumstances is itself a breach of the [Terms of Service](/terms) and may result in immediate Account suspension.\n* Refunds **after Account deletion** (since deletion irrevocably removes the data we'd need to verify the request).\n* **Taxes** that have already been remitted to a taxing authority by Lemon Squeezy on your behalf are refunded only to the extent Lemon Squeezy is able to recover them under the applicable tax-jurisdiction's rules.`
    },
    {
      id: 'how-to-request',
      title: '5. How to Request a Refund',
      icon: <HowToRegIcon color="primary" />,
      content: `To request a refund under this Policy:\n\n1. **From the email address on your MultiPost Account**, send an email to **support@multipost.pro**.\n2. Use the subject line "**Refund request**".\n3. In the body, include:\n   * The date and approximate amount of the charge;\n   * The order / receipt number from Lemon Squeezy (if you have it);\n   * A clear description of the technical issue you encountered;\n   * Any reproduction steps, error messages, screenshots, or video clips that will help us investigate;\n   * Confirmation that you have not initiated a chargeback for the same charge.\n4. **Reply promptly to follow-up questions.** We may ask for additional details — logs, browser, OS, the failing video's metadata — to investigate. We will not delay a clearly-eligible refund longer than necessary, but unanswered follow-ups can pause the clock.\n\n**Alternative channels:** You can also request a refund directly through the Lemon Squeezy customer portal linked in your most recent receipt; Lemon Squeezy will route the request to us for approval. Refunds requested through chargeback only (without contacting support) are governed by Section 4.`
    },
    {
      id: 'processing-time',
      title: '6. Processing Time & Refund Method',
      icon: <ScheduleIcon color="primary" />,
      content: `* **Decision.** We aim to acknowledge every refund request within **two (2) business days** and to make a final decision within **five (5) business days** of receiving sufficient information to evaluate it. Complex investigations (for example, those that require coordination with a Connected Platform) may take longer.\n* **Execution.** Approved refunds are executed by Lemon Squeezy back to the **original payment method** used at checkout, in the **original currency** of the charge.\n* **Bank-side timing.** Once Lemon Squeezy initiates the refund, the funds typically appear on your statement within **5–10 business days**, depending on your card issuer or bank. Some PayPal refunds appear instantly; some international card refunds take longer.\n* **Currency conversion.** If your card was charged in a currency different from the one Lemon Squeezy displayed (because your bank converted at checkout), the refund will be in the same currency Lemon Squeezy charged. Any small difference between the original charged amount and the refund amount in your local currency due to FX-rate fluctuations is **not** something MultiPost or Lemon Squeezy can correct.\n* **Effect on your Account.** Once a refund is processed, your Account is moved back to the Free Plan and you lose access to paid features for the period the refund covers.`
    },
    {
      id: 'cancellation',
      title: '7. Cancellation vs. Refund',
      icon: <CancelIcon color="primary" />,
      content: `**Cancellation and refund are two different things:**\n\n* **Cancellation** stops *future* renewals. After cancellation your Account remains on the Paid Plan until the end of the period you have already paid for, then automatically reverts to the Free Plan. Cancellation by itself **does not** trigger a refund.\n* **Refund** returns a previously-paid amount to your payment method.\n\nIf you want to stop being billed, you can cancel from the in-app **Billing → Manage subscription** page or the Lemon Squeezy customer portal — no email needed and no refund-eligibility check. If you also believe you are entitled to a refund under this Policy, send the email described in Section 5.\n\n**To avoid an unwanted renewal, cancel before the renewal date** — we cannot refund a renewal that you forgot to cancel beyond the 7-day window unless local consumer-protection law gives you that right (Section 8).`
    },
    {
      id: 'auto-renewal',
      title: '8. Statutory Withdrawal & Consumer Rights',
      icon: <AutorenewIcon color="primary" />,
      content: `Nothing in this Policy limits or excludes any **non-waivable statutory right** you may have under the consumer-protection law of your country of residence. In particular:\n\n* **European Economic Area (EU + EEA).** If you are a consumer in the EEA, you may have a 14-day statutory right of withdrawal under Articles 9–16 of Directive 2011/83/EU on consumer rights, **subject to** the digital-content / digital-services exception in Article 16(m), under which the right of withdrawal can be lost once performance of the digital service has begun with your prior express consent and you have acknowledged the loss of the right. By starting to use the Service immediately after subscribing you are taken to give that consent and acknowledgement.\n* **United Kingdom.** Equivalent rights are available under the Consumer Contracts (Information, Cancellation and Additional Charges) Regulations 2013, with the same digital-content carve-out.\n* **Indonesia.** This Policy is also subject to Law No. 8 of 1999 on Consumer Protection (UU Perlindungan Konsumen) and its implementing regulations, including any non-waivable consumer rights they confer on customers in Indonesia.\n* **Australia.** Nothing in this Policy excludes any consumer guarantees that cannot lawfully be excluded under the Australian Consumer Law.\n* **Other jurisdictions.** Statutory rights under the laws of your country of residence apply alongside this Policy where local law so provides.\n\nWhere a statutory right gives you a longer or more generous refund than the 7-day money-back guarantee, the statutory right prevails.`
    },
    {
      id: 'chargebacks',
      title: '9. Chargebacks & Payment-Network Disputes',
      icon: <WarningIcon color="primary" />,
      content: `**Please contact us before initiating a chargeback.** A chargeback raised through your card issuer, bank, or PayPal without first attempting to resolve the issue with us is a breach of the [Terms of Service](/terms) (because it bypasses the dispute-resolution process you agreed to) and almost always costs us non-recoverable fees on top of the disputed amount.\n\n* If you contact us first, we will resolve genuine issues quickly under this Policy.\n* If you initiate a chargeback without first contacting us, we may **immediately suspend your Account**, dispute the chargeback with evidence (including these Terms, the receipts, and your usage logs), and refuse future service.\n* Fraudulent or "friendly-fraud" chargebacks may be reported to anti-fraud networks and to law-enforcement where the amounts justify it.`
    },
    {
      id: 'price-promo',
      title: '10. Price Changes, Promotions & Coupon Codes',
      icon: <PolicyIcon color="primary" />,
      content: `* **Price changes.** Where we change the price of a Plan and you continue your subscription past the announced effective date, the new price applies to your next renewal. Refunds are not granted simply because of a future price increase you forgot to cancel ahead of.\n* **Promotional / discounted pricing.** Promotional, "lifetime", or coupon-code pricing is honoured for the explicit term of the promotion. After the promotional term ends, the standard list price applies. We do not retroactively refund the difference between a price you paid before a coupon was offered and the new discounted price.\n* **Annual to monthly downgrades.** If you switch from an annual to a monthly Plan mid-term, the change takes effect at your next renewal; we do not pro-rate the unused part of an annual Plan as a cash refund.\n* **Plan upgrades.** Mid-cycle upgrades are pro-rated by Lemon Squeezy automatically; no separate refund is needed.`
    },
    {
      id: 'fraud',
      title: '11. Suspected Fraud & Abuse',
      icon: <WarningIcon color="primary" />,
      content: `We reserve the right to **decline a refund** and/or **suspend or terminate the Account** if, in our reasonable discretion, we determine that:\n\n* The refund request is part of a pattern of abusive sign-ups (e.g., repeatedly subscribing, using the Service heavily, then requesting a refund within the 7-day window);\n* The Account or its usage is associated with fraud, money-laundering, sanctions evasion, content-policy abuse, or other illegal activity;\n* The Customer has provided materially false information at sign-up or in the refund request;\n* The refund request relates to a charge subject to an ongoing legal hold or government investigation.\n\nNothing in this Section limits any non-waivable consumer right under applicable law.`
    },
    {
      id: 'changes',
      title: '12. Changes to This Refund Policy',
      icon: <UpdateIcon color="primary" />,
      content: `We may update this Refund Policy from time to time. Material changes will be notified by email and/or by a prominent in-app banner at least **30 days** before they take effect; non-material changes (clarifications, formatting, additional examples) take effect on posting with a refreshed "Last updated" date. The version of this Policy in effect at the **moment your charge was processed** is the version that governs that charge — so a later change cannot retroactively reduce a refund right you already had at the time of payment.`
    },
    {
      id: 'contact',
      title: '13. Contact',
      icon: <EmailIcon color="primary" />,
      content: `Refund requests, questions about this Policy, and escalations should be sent to:\n\n**Hanif Maulana, sole proprietor trading as MultiPost**\n* **Email:** support@multipost.pro\n* **Subject for refund requests:** "**Refund request**"\n* **Place of business:** Karawang, West Java (Jawa Barat), Indonesia\n* **Effective date of this Policy:** ${effectiveDate}\n\nFor billing-side issues that only Lemon Squeezy can resolve (e.g., accessing the customer portal, changing card-on-file, or downloading a tax invoice), please use the link in your most recent receipt or contact Lemon Squeezy directly per their support channels.`
    }
  ];

  const relatedLinks = [
    { label: 'Terms of Service', to: '/terms', icon: <GavelIcon fontSize='small' color='action' /> },
    { label: 'Privacy Policy', to: '/privacy', icon: <PolicyIcon fontSize='small' color='action' /> },
    { label: 'Contact us', to: '/contact', icon: <EmailIcon fontSize='small' color='action' /> },
  ];

  return (
    <>
      <SEO
        title="Refund Policy"
        description="MultiPost Refund Policy. 7-day money-back guarantee for technical issues. Refunds processed by Lemon Squeezy as Merchant of Record."
        path="/refund"
      />
      <LegalPageLayout
        title="Refund Policy"
        subtitle="7-day money-back guarantee for genuine technical issues. Refunds processed by Lemon Squeezy."
        lastUpdated={lastUpdated}
        breadcrumbLabel="Refund Policy"
        sections={sections}
        relatedLinks={relatedLinks}
      />
    </>
  );
};

export default Page;
