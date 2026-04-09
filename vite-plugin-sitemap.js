/**
 * Vite plugin — auto-generates sitemap.xml at build time.
 *
 * Static pages are defined below. Blog posts are discovered automatically
 * by scanning src/content/blog/*.md and extracting the `date` frontmatter.
 * The generated file is written to dist/sitemap.xml, overwriting the
 * static fallback that lives in public/.
 */
import fs from 'fs';
import path from 'path';

const SITE_URL = 'https://multipost.pro';

// Static pages with explicit priority / changefreq
const STATIC_PAGES = [
  { path: '/',         changefreq: 'weekly',  priority: '1.0' },
  { path: '/features', changefreq: 'monthly', priority: '0.9' },
  { path: '/platforms',changefreq: 'monthly', priority: '0.9' },
  { path: '/pricing',  changefreq: 'monthly', priority: '0.9' },
  { path: '/about',    changefreq: 'monthly', priority: '0.7' },
  { path: '/faq',      changefreq: 'monthly', priority: '0.7' },
  { path: '/blog',     changefreq: 'weekly',  priority: '0.8' },
  { path: '/docs',     changefreq: 'monthly', priority: '0.7' },
  { path: '/contact',  changefreq: 'monthly', priority: '0.6' },
  { path: '/privacy',  changefreq: 'yearly',  priority: '0.3' },
  { path: '/terms',    changefreq: 'yearly',  priority: '0.3' },
];

function extractDate(raw) {
  const m = raw.match(/^---[\s\S]*?date:\s*["']?(\d{4}-\d{2}-\d{2})["']?[\s\S]*?---/);
  return m ? m[1] : null;
}

function urlEntry(loc, lastmod, changefreq, priority) {
  return [
    '  <url>',
    `    <loc>${loc}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    '  </url>',
  ].join('\n');
}

export default function sitemapPlugin() {
  return {
    name: 'vite-plugin-sitemap',
    closeBundle() {
      const blogDir = path.resolve('src/content/blog');
      const outDir = path.resolve('dist');
      const today = new Date().toISOString().split('T')[0];

      // ── Static pages ──────────────────────────────────────────────
      const entries = STATIC_PAGES.map((p) =>
        urlEntry(`${SITE_URL}${p.path}`, today, p.changefreq, p.priority),
      );

      // ── Blog posts (auto-discovered) ─────────────────────────────
      let blogCount = 0;
      if (fs.existsSync(blogDir)) {
        const files = fs.readdirSync(blogDir).filter((f) => f.endsWith('.md'));
        blogCount = files.length;
        for (const file of files) {
          const raw = fs.readFileSync(path.join(blogDir, file), 'utf-8');
          const date = extractDate(raw) || today;
          const slug = path.basename(file, '.md');
          entries.push(urlEntry(`${SITE_URL}/blog/${slug}`, date, 'monthly', '0.7'));
        }
      }

      // ── Write sitemap.xml ─────────────────────────────────────────
      const xml = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        ...entries,
        '</urlset>',
        '',
      ].join('\n');

      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, 'sitemap.xml'), xml);
      console.log(`\n✅ Sitemap generated — ${entries.length} URLs (${blogCount} blog posts)`);
    },
  };
}
