import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'MultiPost';
const DEFAULT_DESCRIPTION = 'Save time and grow your audience with MultiPost. Distribute short-form videos to YouTube, TikTok, Instagram, Facebook & more in a single click.';
const SITE_URL = 'https://multipost.pro';
const DEFAULT_IMAGE = 'https://multipost.pro/LogoWithBG.webp';

// ── Default Schemas ─────────────────────────────────────────────────
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: DEFAULT_IMAGE,
  sameAs: [
    'https://www.facebook.com/share/1GUhpG8mHu/',
    'https://x.com/multipost_pro',
    'https://www.linkedin.com/in/multi-post-b642b1402',
    'https://www.instagram.com/multipost.pro/',
    'https://www.youtube.com/@multipostpro',
  ],
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: SITE_NAME,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web, Windows, macOS, iOS, Android',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
};

// ── Component ───────────────────────────────────────────────────────
const SEO = ({
  title,
  description,
  path = '/',
  image,
  article,
  publishedTime,
  author,
  tags,
  schema,
}) => {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} - One Video. Every Platform. Zero Friction.`;
  const pageDescription = description || DEFAULT_DESCRIPTION;
  const canonicalUrl = `${SITE_URL}${path}`;
  const ogImage = image || DEFAULT_IMAGE;
  const ogType = article ? 'article' : 'website';

  // ── Build the list of JSON-LD schemas to inject ───────────────────
  const schemas = [];

  // 1. Always inject Organization
  schemas.push(organizationSchema);

  // 2. Article — enhanced BlogPosting schema
  if (article) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: title,
      description: pageDescription,
      image: ogImage,
      url: canonicalUrl,
      datePublished: publishedTime,
      author: { '@type': 'Person', name: author || SITE_NAME },
      publisher: {
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          url: DEFAULT_IMAGE,
        },
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': canonicalUrl,
      },
      keywords: tags ? tags.join(', ') : undefined,
    });
  }

  // 3. Home page — inject SoftwareApplication by default
  if (path === '/' && !schema) {
    schemas.push(softwareApplicationSchema);
  }

  // 4. Custom schema(s) passed via prop
  if (schema) {
    if (Array.isArray(schema)) {
      schemas.push(...schema);
    } else {
      schemas.push(schema);
    }
  }

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {author && <meta property="article:author" content={author} />}
      {tags && tags.map(tag => <meta property="article:tag" content={tag} key={tag} />)}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* JSON-LD structured data */}
      {schemas.map((s, i) => (
        <script type="application/ld+json" key={i}>
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
