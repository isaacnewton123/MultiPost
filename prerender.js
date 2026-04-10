/**
 * SSG Pre-render Script
 *
 * 1. Builds client bundle (vite build)
 * 2. Builds SSR bundle (vite build --ssr)
 * 3. Pre-renders every route to static HTML
 * 4. Generates sitemap.xml
 * 5. Cleans up server bundle
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, 'dist');
const DIST_SERVER = path.resolve(DIST, 'server');
const SITE_URL = 'https://multipost.pro';

// ── Static routes ────────────────────────────────────────────────────
const STATIC_ROUTES = [
  '/',
  '/features',
  '/platforms',
  '/pricing',
  '/faq',
  '/contact',
  '/about',
  '/privacy',
  '/terms',
  '/blog',
  '/docs',
];

// ── Sitemap metadata ────────────────────────────────────────────────
const SITEMAP_META = {
  '/':          { changefreq: 'weekly',  priority: '1.0' },
  '/features':  { changefreq: 'monthly', priority: '0.9' },
  '/platforms': { changefreq: 'monthly', priority: '0.9' },
  '/pricing':   { changefreq: 'monthly', priority: '0.9' },
  '/about':     { changefreq: 'monthly', priority: '0.7' },
  '/faq':       { changefreq: 'monthly', priority: '0.7' },
  '/blog':      { changefreq: 'weekly',  priority: '0.8' },
  '/docs':      { changefreq: 'monthly', priority: '0.7' },
  '/contact':   { changefreq: 'monthly', priority: '0.6' },
  '/privacy':   { changefreq: 'yearly',  priority: '0.3' },
  '/terms':     { changefreq: 'yearly',  priority: '0.3' },
};

// ── Helpers ──────────────────────────────────────────────────────────

function discoverBlogSlugs() {
  const blogDir = path.resolve(__dirname, 'src/content/blog');
  if (!fs.existsSync(blogDir)) return [];
  return fs.readdirSync(blogDir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => path.basename(f, '.md'));
}

function extractBlogDate(slug) {
  const file = path.resolve(__dirname, 'src/content/blog', `${slug}.md`);
  const raw = fs.readFileSync(file, 'utf-8');
  const m = raw.match(/date:\s*["']?(\d{4}-\d{2}-\d{2})["']?/);
  return m ? m[1] : null;
}

function sitemapEntry(loc, lastmod, changefreq, priority) {
  return [
    '  <url>',
    `    <loc>${loc}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    '  </url>',
  ].join('\n');
}

function generateSitemap(blogSlugs) {
  const today = new Date().toISOString().split('T')[0];

  const entries = Object.entries(SITEMAP_META).map(([route, meta]) =>
    sitemapEntry(`${SITE_URL}${route}`, today, meta.changefreq, meta.priority),
  );

  for (const slug of blogSlugs) {
    const date = extractBlogDate(slug) || today;
    entries.push(sitemapEntry(`${SITE_URL}/blog/${slug}`, date, 'monthly', '0.7'));
  }

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries,
    '</urlset>',
    '',
  ].join('\n');

  fs.writeFileSync(path.join(DIST, 'sitemap.xml'), xml);
  console.log(`  ✅ Sitemap — ${entries.length} URLs (${blogSlugs.length} blog posts)`);
}

function deleteDirRecursive(dir) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true, force: true });
  }
}

// ── Main ─────────────────────────────────────────────────────────────

async function prerender() {
  const startTime = Date.now();

  // 1. Client build
  console.log('\n🔨 Step 1/5 — Building client bundle...');
  const { build } = await import('vite');

  await build({
    configFile: path.resolve(__dirname, 'vite.config.js'),
  });

  // 2. SSR build
  console.log('\n🔨 Step 2/5 — Building SSR bundle...');
  await build({
    configFile: path.resolve(__dirname, 'vite.config.js'),
    build: {
      ssr: 'src/entry-server.jsx',
      outDir: 'dist/server',
    },
  });

  // 3. Load SSR module + template
  console.log('\n🖨️  Step 3/5 — Pre-rendering pages...');
  const ssrModulePath = pathToFileURL(path.join(DIST_SERVER, 'entry-server.js')).href;
  const { render } = await import(ssrModulePath);
  const template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf-8');

  // 4. Discover all routes
  const blogSlugs = discoverBlogSlugs();
  const blogRoutes = blogSlugs.map((s) => `/blog/${s}`);
  const allRoutes = [...STATIC_ROUTES, ...blogRoutes];

  console.log(`  → ${allRoutes.length} routes (${STATIC_ROUTES.length} static + ${blogRoutes.length} blog)`);

  // 5. Render each route
  for (const route of allRoutes) {
    const { html, emotionCss, helmet } = render(route);

    // Build head injection string
    const headTags = [
      helmet.title.toString(),
      helmet.meta.toString(),
      helmet.link.toString(),
      helmet.script.toString(),
      emotionCss,
    ].join('\n    ');

    // Inject into template
    let page = template;
    page = page.replace('<!--ssr-head-->', headTags);
    page = page.replace('<!--ssr-html-->', html);

    // Determine output path
    const filePath =
      route === '/'
        ? path.join(DIST, 'index.html')
        : path.join(DIST, route, 'index.html');

    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, page);
    console.log(`  ✓ ${route}`);
  }

  // 6. Generate sitemap
  console.log('\n🗺️  Step 4/5 — Generating sitemap...');
  generateSitemap(blogSlugs);

  // 7. Cleanup server bundle
  console.log('\n🧹 Step 5/5 — Cleaning up...');
  deleteDirRecursive(DIST_SERVER);

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`\n✅ SSG complete — ${allRoutes.length} pages pre-rendered in ${elapsed}s\n`);
}

prerender().catch((err) => {
  console.error('❌ Pre-render failed:', err);
  process.exit(1);
});
