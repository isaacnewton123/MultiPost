// ─── Landing-page Contact Form ──────────────────────────────
// Receives the contact-form POST, fans it out as two emails:
//   1. Support inbox    — the actual submission, From shows the visitor's
//                         name (replyTo set so support can hit Reply).
//   2. Visitor inbox    — branded "Thanks for reaching out" confirmation,
//                         using the shared MultiPost transactional template
//                         (see `_lib/email-template.js`) to stay visually
//                         consistent with the app's verify / welcome mails.
//
// Sender setup (Zoho):
//   • EMAIL_USER         — SMTP login (typically support@multipost.pro).
//   • MAIL_FROM_SUPPORT  — branded From for outbound mail to the visitor.
//                          Defaults to support@multipost.pro; must be an
//                          allowed alias of EMAIL_USER on the Zoho account.

import nodemailer from 'nodemailer';
import { renderEmail, escapeHtml } from './_lib/email-template.js';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '465', 10),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const MAIL_FROM_SUPPORT =
  process.env.MAIL_FROM_SUPPORT ||
  `MultiPost Support <${process.env.EMAIL_USER}>`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { firstName, lastName, email, company, inquiryType, message, subject } =
    req.body;

  if (!firstName || !lastName || !email || !message || !subject) {
    return res
      .status(400)
      .json({ message: 'Missing required fields (including subject).' });
  }

  // ─── Internal: notify support inbox ─────────────────────────
  const supportMailOptions = {
    from: `"${firstName} ${lastName} via Contact Form" <${process.env.EMAIL_USER}>`,
    replyTo: email,
    to: process.env.EMAIL_USER,
    subject: `Contact Form: ${subject}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
      ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ''}
      ${inquiryType ? `<p><strong>Inquiry Type:</strong> ${escapeHtml(inquiryType)}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
    `,
    text: [
      'New Contact Form Submission',
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Subject: ${subject}`,
      company ? `Company: ${company}` : '',
      inquiryType ? `Inquiry Type: ${inquiryType}` : '',
      'Message:',
      message,
    ]
      .filter(Boolean)
      .join('\n'),
  };

  try {
    await transporter.sendMail(supportMailOptions);
    console.log('Email sent successfully to support from:', email);

    // ─── External: branded confirmation back to the visitor ───
    const confirmationHtml = renderEmail({
      title: 'Thank You for Contacting MultiPost!',
      previewText:
        "We've received your message and a human will be in touch within 24–48h.",
      heading: 'Thank you for reaching out!',
      bodyHtml: `
        <p>Dear <strong>${escapeHtml(firstName)}</strong>,</p>
        <p>We have successfully received your message regarding the subject: <strong>"${escapeHtml(subject)}"</strong>.</p>
        <p>Our support team is reviewing your request and aims to get back to you as soon as possible, typically within <strong>24–48 business hours</strong>.</p>
      `,
      altBlockHtml: `
        <strong>Here's a copy of your message:</strong><br>
        <strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}<br>
        <strong>Email:</strong> ${escapeHtml(email)}<br>
        <strong>Subject:</strong> ${escapeHtml(subject)}<br>
        ${company ? `<strong>Company:</strong> ${escapeHtml(company)}<br>` : ''}
        ${inquiryType ? `<strong>Inquiry Type:</strong> ${escapeHtml(inquiryType)}<br>` : ''}
        <br>
        <strong>Message:</strong><br>
        <span style="white-space: pre-wrap;">${escapeHtml(message)}</span>
      `,
    });

    const confirmationMailOptions = {
      from: MAIL_FROM_SUPPORT,
      to: email,
      subject: 'Thank You for Contacting MultiPost!',
      html: confirmationHtml,
      text: [
        'Thank you for reaching out!',
        '',
        `Dear ${firstName},`,
        '',
        `We have successfully received your message regarding the subject: "${subject}".`,
        '',
        'Our support team is reviewing your request and aims to get back to you as soon as possible, typically within 24–48 business hours.',
        '',
        "Here's a copy of your message:",
        `Name: ${firstName} ${lastName}`,
        `Email: ${email}`,
        `Subject: ${subject}`,
        company ? `Company: ${company}` : '',
        inquiryType ? `Inquiry Type: ${inquiryType}` : '',
        'Message:',
        message,
        '',
        'Best regards,',
        'The MultiPost Team',
      ]
        .filter(Boolean)
        .join('\n'),
    };

    try {
      await transporter.sendMail(confirmationMailOptions);
      console.log('Confirmation email sent successfully to:', email);
      return res.status(200).json({
        message:
          'Message sent successfully! A confirmation email has been sent to you.',
      });
    } catch (confirmationError) {
      console.error('Error sending confirmation email:', confirmationError);
      return res.status(200).json({
        message:
          'Message sent to support, but failed to send confirmation email.',
      });
    }
  } catch (error) {
    console.error('Error sending email to support:', error);
    return res
      .status(500)
      .json({ message: 'Failed to send message. Please try again later.' });
  }
}
