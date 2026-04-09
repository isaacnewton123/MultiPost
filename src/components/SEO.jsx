import React from 'react';
import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'MultiPost';
const DEFAULT_DESCRIPTION = 'Save time and grow your audience with MultiPost. Distribute short-form videos to YouTube, TikTok, Instagram, Facebook & more in a single click.';
const SITE_URL = 'https://multipost.pro';
const DEFAULT_IMAGE = 'https://pbs.twimg.com/media/GrKgsrpXkAANiI9?format=png&name=small';

const SEO = ({ title, description, path = '/', image, article, publishedTime, author, tags }) => {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} - One Video. Every Platform. Zero Friction.`;
  const pageDescription = description || DEFAULT_DESCRIPTION;
  const canonicalUrl = `${SITE_URL}${path}`;
  const ogImage = image || DEFAULT_IMAGE;
  const ogType = article ? 'article' : 'website';

  const jsonLd = article ? {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: pageDescription,
    image: ogImage,
    url: canonicalUrl,
    datePublished: publishedTime,
    author: { '@type': 'Person', name: author || SITE_NAME },
    publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    keywords: tags ? tags.join(', ') : undefined,
  } : null;

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

      {/* JSON-LD structured data for articles */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
