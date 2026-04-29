// ─── Shared Transactional Email Template (landing-page twin) ─────
// Mirror of `backend/src/templates/email-template.ts`. Both repos
// deploy independently to Vercel, so we duplicate the renderer to
// keep each function self-contained — but the design + escape
// helpers MUST stay byte-identical when edited.
//
// Files prefixed with `_` are NOT exposed as Vercel API routes, so
// this module is safely importable from `waitlist.js`.

const DEFAULT_LOGO_URL = 'https://multipost.pro/LogoWithBG.webp';
const DEFAULT_SITE_URL = 'https://multipost.pro';

const SOCIAL_LINKS = [
  {
    label: 'X',
    href: 'https://x.com/multipost_pro',
    icon: 'https://cdn-icons-png.flaticon.com/512/733/733579.png',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/multi-post-b642b1402',
    icon: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/multipost.pro/',
    icon: 'https://cdn-icons-png.flaticon.com/512/174/174855.png',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@multipostpro',
    icon: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1GUhpG8mHu/',
    icon: 'https://cdn-icons-png.flaticon.com/512/124/124010.png',
  },
];

/**
 * Render a transactional email body matching the MultiPost brand shell.
 *
 * @param {object} opts
 * @param {string} opts.title           HTML <title>; never visible.
 * @param {string} [opts.previewText]   Inbox preview snippet (≤90 chars).
 * @param {string} opts.heading         Big H1 inside the content block.
 * @param {string} opts.bodyHtml        Body markup between heading and CTA.
 * @param {{text:string,url:string}} [opts.cta]
 * @param {string} [opts.altBlockHtml]  Optional gray fallback box.
 * @param {string} [opts.logoUrl]
 * @param {string} [opts.siteUrl]
 * @returns {string}
 */
export function renderEmail(opts) {
  const {
    title,
    previewText = '',
    heading,
    bodyHtml,
    cta,
    altBlockHtml,
    logoUrl = DEFAULT_LOGO_URL,
    siteUrl = DEFAULT_SITE_URL,
  } = opts;

  const year = new Date().getUTCFullYear();

  const preheader = previewText
    ? `<div style="display:none;max-height:0;overflow:hidden;mso-hide:all;visibility:hidden;opacity:0;color:transparent;height:0;width:0;">${escapeHtml(previewText)}</div>`
    : '';

  const ctaBlock = cta
    ? `
      <div class="btn-container">
        <a href="${escapeAttr(cta.url)}" class="btn">${escapeHtml(cta.text)}</a>
      </div>`
    : '';

  const altBlock = altBlockHtml
    ? `<div class="link-alt">${altBlockHtml}</div>`
    : '';

  const socialIcons = SOCIAL_LINKS.map(
    (s) => `
      <a href="${escapeAttr(s.href)}" target="_blank" rel="noopener noreferrer">
        <img src="${escapeAttr(s.icon)}" class="social-icon" alt="${escapeAttr(s.label)}" width="32" height="32">
      </a>`,
  ).join('');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(title)}</title>
<style>
  body { margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #334155; }
  .container { max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
  .header { background-color: #2563eb; padding: 40px 20px; text-align: center; }
  .header img { max-width: 180px; height: auto; }
  .content { padding: 40px 40px; line-height: 1.7; }
  .content h1 { font-size: 24px; font-weight: 700; margin-top: 0; color: #0f172a; text-align: center; }
  .content p { font-size: 16px; color: #475569; }
  .btn-container { text-align: center; margin: 35px 0; }
  .btn { background-color: #2563eb; color: #ffffff !important; padding: 16px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; display: inline-block; }
  .link-alt { font-size: 13px; color: #94a3b8; word-break: break-all; margin-top: 25px; background-color: #f1f5f9; padding: 15px; border-radius: 6px; }
  .link-alt a { color: #2563eb; }
  .footer { background-color: #ffffff; padding: 40px 30px; text-align: center; font-size: 13px; color: #64748b; border-top: 1px solid #f1f5f9; }
  .social-links { margin-bottom: 20px; }
  .social-links a { display: inline-block; margin: 0 8px; text-decoration: none; }
  .social-icon { width: 32px; height: 32px; }
  .footer p { margin: 5px 0; }
  .footer a { color: #64748b; text-decoration: underline; }
  @media only screen and (max-width: 620px) {
    .container { margin: 0; border-radius: 0; }
    .content { padding: 30px 24px; }
  }
</style>
</head>
<body>
${preheader}
<div class="container">
  <div class="header">
    <img src="${escapeAttr(logoUrl)}" alt="MultiPost">
  </div>
  <div class="content">
    <h1>${escapeHtml(heading)}</h1>
    ${bodyHtml}
    ${ctaBlock}
    ${altBlock}
  </div>
  <div class="footer">
    <div class="social-links">${socialIcons}</div>
    <p>&copy; ${year} <strong>MultiPost</strong>. All rights reserved.</p>
    <p>Visit our website: <a href="${escapeAttr(siteUrl)}">${stripScheme(siteUrl)}</a></p>
    <p>Need help? <a href="${escapeAttr(siteUrl)}/contact">Contact Support</a> or use the <b>live chat</b> in the MultiPost app.</p>
  </div>
</div>
</body>
</html>`;
}

export function escapeHtml(input) {
  return String(input ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function escapeAttr(input) {
  return escapeHtml(input);
}

function stripScheme(url) {
  return String(url ?? '')
    .replace(/^https?:\/\//, '')
    .replace(/\/+$/, '');
}
