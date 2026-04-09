<p align="center">
  <img src="public/LogoWithBG.webp" alt="MultiPost Logo" width="120" />
</p>

<h1 align="center">MultiPost Landing</h1>

<p align="center">
  <strong>The marketing website for <a href="https://multipost.pro">MultiPost</a> — one video, every platform, zero friction.</strong>
</p>

<p align="center">
  <a href="https://multipost.pro">Live Site</a>&nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="#getting-started">Getting Started</a>&nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="#project-structure">Project Structure</a>&nbsp;&nbsp;·&nbsp;&nbsp;
  <a href="#deployment">Deployment</a>
</p>

---

## Overview

A high-performance, SEO-optimized landing site built with **React 18** and **Vite**. The entire site is **statically generated at build time** (SSG) — every route is pre-rendered to plain HTML with critical CSS inlined, giving search engines fully crawlable content with zero JavaScript dependency.

### Key highlights

- **Full Static Site Generation** — custom Vite SSR pipeline pre-renders every page to static HTML
- **Markdown-powered blog** — drop a `.md` file into `src/content/blog/` and it's live on the next build
- **SEO-first architecture** — per-page `<title>`, Open Graph, JSON-LD structured data, canonical URLs, and auto-generated `sitemap.xml`
- **Hybrid blog pagination** — Load More button works as a crawlable `<a>` tag with `?page=` query params
- **Material UI + Framer Motion** — polished, responsive design with smooth animations
- **Serverless contact form** — Vercel Edge Function sends emails via SMTP (Nodemailer)
- **Zero-config deployment** — ships with `vercel.json`; push to deploy

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 18, React Router v6 |
| **Build** | Vite 5, custom SSG prerender script |
| **Styling** | Material UI v5, Emotion (critical CSS extracted at build) |
| **Animation** | Framer Motion |
| **Blog** | Markdown + YAML frontmatter, react-markdown |
| **SEO** | react-helmet-async, auto-generated sitemap.xml |
| **API** | Vercel Serverless Functions, Nodemailer |
| **Hosting** | Vercel (static + serverless) |

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm**, **pnpm**, or **bun**

### Installation

```bash
git clone https://github.com/<your-org>/multipost-landing.git
cd multipost-landing
npm install
```

### Environment variables

```bash
cp .env.example .env
```

Edit `.env` with your SMTP credentials (only needed for the contact form API route). See [`.env.example`](.env.example) for details.

### Development

```bash
npm run dev
```

Starts the Vite dev server at `http://localhost:3000` with hot module replacement. During development the app runs as a standard client-side SPA — no SSR overhead.

### Production build (SSG)

```bash
npm run build
```

This runs the custom prerender pipeline:

1. **Client build** — Vite bundles JS + CSS to `dist/`
2. **SSR build** — Vite compiles `entry-server.jsx` to a Node module
3. **Pre-render** — every route is rendered to static HTML with critical CSS and SEO head tags
4. **Sitemap** — `dist/sitemap.xml` is auto-generated with all page and blog post URLs
5. **Cleanup** — temporary server bundle is removed

### Preview

```bash
npm run preview
```

Serves the `dist/` folder locally to verify the production build.

---

## Project Structure

```
multipost-landing/
├── api/
│   └── waitlist.js              # Vercel serverless function (contact form)
├── public/                      # Static assets (favicons, robots.txt, manifest)
├── src/
│   ├── assets/                  # Images and media
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   ├── CTA.jsx
│   │   └── SEO.jsx              # Reusable Helmet-based SEO component
│   ├── content/
│   │   └── blog/                # Markdown blog posts (drop files here)
│   │       ├── my-first-post.md
│   │       └── ...
│   ├── pages/                   # Route-level page components
│   │   ├── HomePage.jsx
│   │   ├── BlogPage.jsx         # Archive with hybrid pagination
│   │   ├── BlogPostPage.jsx     # Individual post renderer
│   │   └── ...
│   ├── utils/
│   │   └── blog.js              # Markdown parser + post loader
│   ├── App.jsx                  # Route definitions
│   ├── main.jsx                 # Client entry (auto-detects hydration)
│   ├── entry-server.jsx         # SSR entry (StaticRouter + Emotion extraction)
│   └── theme.js                 # Shared MUI theme
├── prerender.js                 # SSG build orchestrator
├── vercel.json                  # Vercel deployment config
├── vite.config.js
└── package.json
```

---

## Adding Blog Posts

Create a Markdown file in `src/content/blog/` with YAML frontmatter:

```md
---
title: "Your Post Title"
description: "A short SEO description for search results."
date: "2026-04-10"
author: "Your Name"
category: "Growth Hacks"
image: "https://images.pexels.com/photos/..."
tags: ["seo", "growth", "social media"]
---

Your article content in **Markdown** goes here.
```

Run `npm run build` — the post automatically gets:
- Its own pre-rendered page at `/blog/<filename>/`
- A URL entry in `sitemap.xml`
- Open Graph + JSON-LD structured data
- A card on the blog archive page

---

## Deployment

### Vercel (recommended)

The project ships with a `vercel.json` that handles everything:

1. **Connect your repo** on [vercel.com](https://vercel.com)
2. **Set environment variables** in the Vercel dashboard:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_SECURE`
   - `EMAIL_USER`
   - `EMAIL_PASS`
3. **Push to main** — Vercel runs `node prerender.js` and deploys the `dist/` output

The config includes:
- Immutable cache headers for hashed assets
- Security headers (X-Content-Type-Options, X-Frame-Options, Referrer-Policy)
- API route rewrites for the serverless contact form
- SPA fallback for client-side navigation

### Other static hosts

Since the build output is plain static HTML, you can deploy `dist/` to any static host (Netlify, Cloudflare Pages, GitHub Pages, etc.). The only caveat is that the `/api/waitlist` serverless function is Vercel-specific and would need adaptation for other platforms.

---

## SEO Architecture

| Feature | Implementation |
|---|---|
| **Static HTML** | Every route pre-rendered at build time — crawlers see full content without JS |
| **Critical CSS** | Emotion CSS extracted and inlined during SSR — no flash of unstyled content |
| **Per-page head tags** | `<title>`, `<meta description>`, Open Graph, Twitter Cards via react-helmet-async |
| **JSON-LD** | `BlogPosting` structured data on every blog post for rich search results |
| **Sitemap** | Auto-generated `sitemap.xml` with all static pages + blog posts |
| **Canonical URLs** | Set on every page; paginated blog pages include `rel="prev"` / `rel="next"` |
| **Crawlable pagination** | Load More button is a standard `<a href="?page=N">` tag |

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server (CSR, HMR) |
| `npm run build` | Full SSG build (prerender all routes + sitemap) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

---

## License

This project is proprietary software. All rights reserved.
