import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '465', 10),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { firstName, lastName, email, company, inquiryType, message, subject } = req.body;

  if (!firstName || !lastName || !email || !message || !subject) {
    return res.status(400).json({ message: 'Missing required fields (including subject).' });
  }

  const mailOptions = {
    from: `"${firstName} ${lastName} via Contact Form" <${process.env.EMAIL_USER}>`,
    replyTo: email,
    to: process.env.EMAIL_USER,
    subject: `Contact Form: ${subject}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      ${inquiryType ? `<p><strong>Inquiry Type:</strong> ${inquiryType}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p style="white-space: pre-wrap;">${message}</p>
    `,
    text: `
      New Contact Form Submission
      Name: ${firstName} ${lastName}
      Email: ${email}
      Subject: ${subject}
      ${company ? `Company: ${company}` : ''}
      ${inquiryType ? `Inquiry Type: ${inquiryType}` : ''}
      Message:
      ${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully to support from:', email);

    const confirmationMailOptions = {
      from: `"MultiPost Support" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank You for Contacting MultiPost!',
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Thank You for Contacting MultiPost!</title>
<style>
  body { margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f4f4; }
  .email-container { max-width: 600px; margin: 20px auto; background-color: #ffffff; border: 1px solid #dddddd; border-radius: 5px; overflow: hidden; }
  .email-header { background-color:rgb(74, 89, 226); color: #ffffff; padding: 20px; text-align: center; }
  .email-header h1 { margin: 0; font-size: 24px; font-weight: bold; }
  .email-body { padding: 30px; color: #333333; line-height: 1.6; }
  .email-body p { margin: 0 0 15px 0; }
  .email-body h2 { font-size: 20px; color: #333333; margin-bottom: 20px; font-weight: bold; text-align: left; }
  .message-copy { background-color: #f9f9f9; border-left: 4px solid rgb(223, 49, 49); padding: 15px; margin: 20px 0; }
  .message-copy p { margin: 5px 0; color: #555555; }
  .message-copy strong { color: #333333; font-weight: bold; }
  .email-footer { background-color: #eeeeee; padding: 20px; text-align: center; font-size: 12px; color: #777777; }
  .email-footer p { margin: 0; }
  a { color:rgb(209, 54, 33); text-decoration: none; }
  strong { font-weight: bold; }
</style>
</head>
<body>
  <div class="email-container">
    <div class="email-header">
      <h1>MultiPost</h1>
    </div>
    <div class="email-body">
      <h2>Thank You for Reaching Out!</h2>
      <p>Dear ${firstName},</p>
      <p>We have successfully received your message regarding the subject: <strong>"${subject}"</strong>.</p>
      <p>Thank you for contacting MultiPost. Our support team is reviewing your request and aims to get back to you as soon as possible, typically within 24-48 business hours.</p>
      
      <div class="message-copy">
        <p><strong>Here's a copy of your message:</strong></p>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Subject:</strong> ${subject}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
        ${inquiryType ? `<p><strong>Inquiry Type:</strong> ${inquiryType}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      </div>

      <p>If your matter is urgent, please state so in a reply to this email.</p>
      <p>Best regards,</p>
      <p><strong>The MultiPost Team</strong></p>
    </div>
    <div class="email-footer">
      <p>You are receiving this email because you submitted a contact form on <a href="https://multipost.pro">multipost.pro</a>.</p>
      <p>&copy; ${new Date().getFullYear()} MultiPost. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
      `,
      text: `
        Thank You for Reaching Out!

        Dear ${firstName},

        We have successfully received your message regarding the subject: "${subject}".

        Thank you for contacting MultiPost. Our support team is reviewing your request and will get back to you as soon as possible.

        Here's a copy of your message:
        Name: ${firstName} ${lastName}
        Email: ${email}
        Subject: ${subject}
        ${company ? `Company: ${company}` : ''}
        ${inquiryType ? `Inquiry Type: ${inquiryType}` : ''}
        Message:
        ${message}

        If you have any urgent concerns, please don't hesitate to contact us directly.

        Best regards,
        The MultiPost Team

        ---
        You are receiving this email because you submitted a contact form on multipost.pro.
      `,
    };

    try {
      await transporter.sendMail(confirmationMailOptions);
      console.log('Confirmation email sent successfully to:', email);
      return res.status(200).json({ message: 'Message sent successfully! A confirmation email has been sent to you.' });
    } catch (confirmationError) {
      console.error('Error sending confirmation email:', confirmationError);
      return res.status(200).json({ message: 'Message sent to support, but failed to send confirmation email.' });
    }
  } catch (error) {
    console.error('Error sending email to support:', error);
    return res.status(500).json({ message: 'Failed to send message. Please try again later.' });
  }
}
