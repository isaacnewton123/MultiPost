# Landing Page Architecture

> Detailed breakdown of every page in the MultiPost landing site — layout, sections, SEO configuration, and component structure.

---

## Table of Contents

- [Global Layout](#global-layout)
- [Home Page](#home-page)
- [Features Page](#features-page)
- [Platforms Page](#platforms-page)
- [Pricing Page](#pricing-page)
- [FAQ Page](#faq-page)
- [Documentation Page](#documentation-page)
- [Blog Page](#blog-page)
- [Blog Post Page](#blog-post-page)
- [About Page](#about-page)
- [Contact Page](#contact-page)
- [Privacy Policy Page](#privacy-policy-page)
- [Terms of Service Page](#terms-of-service-page)
- [SEO Component](#seo-component)

---

## Global Layout

**File:** `src/App.jsx`

Every page is wrapped in a shared layout shell:

```
┌──────────────────────────────────────┐
│  Header (sticky, scroll-aware)       │
├──────────────────────────────────────┤
│                                      │
│  <main>  ← Route content renders     │
│                                      │
├──────────────────────────────────────┤
│  Footer (social links, sitemap)      │
└──────────────────────────────────────┘
```

### Header (`src/components/layout/Header.jsx`)
- Sticky navbar with transparent-to-solid scroll transition
- Desktop: horizontal nav links + "Get Started" CTA button
- Mobile: hamburger menu → drawer navigation
- `aria-label="Open navigation menu"` on mobile toggle

### Footer (`src/components/layout/Footer.jsx`)
- 4-column grid: Company, Product, Legal, Social
- Social media icon buttons (Facebook, X, LinkedIn, Instagram, YouTube)
- All icon buttons have `aria-label` for accessibility
- Copyright notice

---

## Home Page

**File:** `src/pages/HomePage.jsx`  
**Route:** `/`  
**SEO Title:** `Free Auto Posting Tool — One Video. Every Platform. Zero Friction. | MultiPost`

### Sections

| # | Section | Description |
|---|---|---|
| 1 | **Hero** | Full-viewport gradient with h1 tagline, subtitle, "Start for Free" CTA, "Learn More" button, and supported platform icons (YouTube, Facebook, TikTok) |
| 2 | **Key Features** | 3-column card grid: Multi-Platform Upload, Batch Processing, Scheduled Uploads. Each card: icon + h3 title + description |
| 3 | **CTA** | Full-width gradient banner: "Start for Free — Streamline Your Workflow" + Get Started button |

### Layout Notes
- Hero: 2-column grid (text left, logo visual right on desktop; stacks on mobile)
- Logo image has `alt="MultiPost auto-posting dashboard..."` + `loading="lazy"`
- Framer Motion fade-in-up animations on all sections

### JSON-LD
- `SoftwareApplication` (price: $0, USD) injected automatically by SEO component when `path="/"`
- `Organization` schema injected on every page

---

## Features Page

**File:** `src/pages/FeaturesPage.jsx`  
**Route:** `/features`  
**SEO Title:** `Features — Free Auto Posting Tool for Video Distribution | MultiPost`

### Sections

| # | Section | Description |
|---|---|---|
| 1 | **Hero** | Centered gradient hero with h1 "Powerful Features" + subtitle |
| 2 | **Upload Features** | Section heading + card grid of upload-related features |
| 3 | **Platform Features** | Section heading + card grid of platform/security/analytics features |
| 4 | **CTA** | "Start for Free" call-to-action banner |

### Layout Notes
- Hero: centered `Box` with `maxWidth: 800`, `mx: 'auto'`
- Feature cards: `Grid` with `md={4}` (3-column)
- Section headings: centered with `textAlign: 'center'` and inline-block underline decorator

---

## Platforms Page

**File:** `src/pages/PlatformsPage.jsx`  
**Route:** `/platforms`  
**SEO Title:** `Supported Platforms — Free Auto Posting Tool | Unlimited Connections | MultiPost`

### Sections

| # | Section | Description |
|---|---|---|
| 1 | **Hero** | Centered gradient hero with h1 "Supported Platforms" |
| 2 | **Platform Grid** | Cards for each platform (YouTube, TikTok, Instagram, Facebook, etc.) with icon, name, status, and supported content types |
| 3 | **CTA** | Get Started call-to-action |

### Layout Notes
- Hero: centered layout matching all other pages
- Platform cards use color-coded accent borders and icons

---

## Pricing Page

**File:** `src/pages/PricingPage.jsx`  
**Route:** `/pricing`  
**SEO Title:** `Pricing — Free Auto Posting Tool | Unlimited Platform Connections | MultiPost`

### Sections

| # | Section | Description |
|---|---|---|
| 1 | **Hero** | Centered gradient hero with h1 "Start Free, Upgrade Anytime" + subtitle + monthly/annual toggle |
| 2 | **Pricing Grid** | 4-column card layout: Free, Basic, Premium, Enterprise |
| 3 | **Custom Solution** | Paper banner: "Need a custom solution?" + Contact Us button |
| 4 | **FAQ** | 2x2 grid of common pricing questions with answers |
| 5 | **CTA** | Full-width "Start for Free" banner |

### Pricing Card Structure
```
┌─────────────────────┐
│  ★ Best Value        │  ← Chip (Premium only), centered, half-in/half-out
│                      │     overflow: 'visible' on card
│  Plan Name (h2)      │
│  $X.XX/mo            │
│  "per month"         │
│─────────────────────│
│  ✓ Feature 1         │
│  ✓ Feature 2         │  ← flexGrow: 1
│  ✓ Feature 3         │
│                      │
│  [Get Started →]    │  ← marginTop: 'auto' (always bottom-aligned)
└─────────────────────┘
```

### Layout Notes
- Grid: `md={3}` → 4 cards in one row
- Equal-height cards: `display: 'flex'`, `flexDirection: 'column'`
- Buttons: identical style on all 4 cards with `aria-label="Get Started for MultiPost {plan} plan"`
- Annual pricing: 20% discount toggle with `Switch` component
- "Best Value" `Chip`: absolute positioned, `top: -14`, `left: 50%`, `transform: translateX(-50%)`, `overflow: visible` on parent Card

### Plan Data

| Feature | Free | Basic | Premium | Enterprise |
|---|---|---|---|---|
| Price | $0 | $4.99/mo | $9.99/mo | $21.99/mo |
| Daily Uploads | 1 | 3 | 5 | 10 |
| Scheduled/mo | 5 | 10 | 30 | Unlimited |
| Platforms | Unlimited | Unlimited | Unlimited | Unlimited |

---

## FAQ Page

**File:** `src/pages/FAQPage.jsx`  
**Route:** `/faq`  
**SEO Title:** `FAQ — Free Auto Posting Tool | MultiPost`

### Sections

| # | Section | Description |
|---|---|---|
| 1 | **Hero** | Centered gradient hero with h1, subtitle, and search input |
| 2 | **FAQ Content** | 2-column layout: sidebar category nav (sticky) + FAQ accordion list |
| 3 | **Contact CTA** | "Still Have Questions?" paper card with Contact Support button |

### Categories
1. General Questions (5 FAQs)
2. Features & Functionality (4 FAQs)
3. Account & Billing (4 FAQs)
4. Technical Support (4 FAQs)
5. Legal Information (4 FAQs)

### Layout Notes
- Search: real-time filtering across all categories
- Sidebar: sticky `Paper` with `top: 100` for scroll persistence
- Category headings: `component="h2"` with left-border accent
- FAQ question headings: `h6` visual weight

### JSON-LD
- `FAQPage` schema dynamically generated from `faqCategories.flatMap(...)` — all 21 Q&A pairs mapped

---

## Documentation Page

**File:** `src/pages/DocumentationPage.jsx`  
**Route:** `/docs`  
**SEO Title:** `Documentation — Free Auto Posting Tool | MultiPost`

### Sections

| # | Section | Description |
|---|---|---|
| 1 | **Hero** | Centered gradient hero with h1, subtitle, and search bar |
| 2 | **Breadcrumbs** | Home → Documentation |
| 3 | **Docs Content** | 2-column: sidebar category nav (sticky) + 7-tab content area |

### Tabs (7 total)
1. **Getting Started** — Quick Start stepper (4 steps), Core Features grid (8 cards), System Requirements table
2. **Uploading Videos** — Supported formats table, Upload workflow (6 steps), Per-platform customization matrix, Upload limits by plan table
3. **Platform Integrations** — YouTube, Facebook, TikTok, Instagram: auth, formats, max size, features
4. **Scheduling** — Scheduling workflow, timing recommendations, timezone handling
5. **Account & Billing** — Plan comparison cards (Free/$4.99/$9.99/$21.99), Account management guides
6. **Best Practices** — Content optimization, Platform-specific tips, Engagement strategies
7. **Troubleshooting** — Common issues, OAuth troubleshooting, upload failure recovery

### JSON-LD
- `HowTo` schema with 3 steps (Create Account → Connect Accounts → Upload First Video)

---

## Blog Page

**File:** `src/pages/BlogPage.jsx`  
**Route:** `/blog`  
**SEO Title:** `Blog — Free Auto Posting Tips & Video Distribution | MultiPost`

### Sections

| # | Section | Description |
|---|---|---|
| 1 | **Hero** | Centered gradient hero with h1 "MultiPost Blog" |
| 2 | **Category Filters** | Horizontal `Chip` row for category filtering |
| 3 | **Post Grid** | 3-column card grid with image, category chip, h2 title, description, author, date |
| 4 | **Pagination** | "Load More Articles" button + numbered page nav |

### Layout Notes
- 24 blog posts from `src/content/blog/*.md`
- 6 posts per page with hybrid Load More (crawlable `<a>` tags)
- Paginated URLs: `/blog?page=2`, `/blog?page=3`
- `rel="prev"` / `rel="next"` link tags injected via Helmet
- Card images: `loading="lazy"`, `alt="{title} — MultiPost blog"`

---

## Blog Post Page

**File:** `src/pages/BlogPostPage.jsx`  
**Route:** `/blog/:slug`  
**SEO Title:** `{Post Title} | MultiPost`

### Sections

| # | Section | Description |
|---|---|---|
| 1 | **Hero** | Gradient header with "Back to Blog" link, category chip, h1 post title, author + date |
| 2 | **Featured Image** | Full-width image overlapping hero, `loading="lazy"` |
| 3 | **Article Content** | Markdown rendered via `react-markdown` + `remark-breaks` with styled typography |
| 4 | **Tags** | Horizontal `Chip` row of post tags |
| 5 | **Related Articles** | 3-column grid of posts from the same category |

### JSON-LD
- `BlogPosting` schema with headline, description, image, datePublished, author, publisher, keywords

---

## About Page

**File:** `src/pages/AboutPage.jsx`  
**Route:** `/about`  
**SEO Title:** `About Us — Free Auto Posting Tool | MultiPost`

### Sections

| # | Section | Description |
|---|---|---|
| 1 | **Hero** | Centered gradient hero with h1 "About MultiPost" |
| 2 | **Our Story** | 2-column: narrative text (h2 "Our Story") + "Our Mission" card with company values checklist |
| 3 | **Join Us CTA** | Centered paper card: "Join Our Journey" + Get Started button |

### Layout Notes
- Hero: centered layout (Box with `textAlign: 'center'`, `maxWidth: 800`, `mx: 'auto'`) — consistent with all other pages
- Values: Innovation, Reliability, Simplicity, Security — rendered as checklist with `CheckCircleOutlineIcon`

---

## Contact Page

**File:** `src/pages/ContactPage.jsx`  
**Route:** `/contact`  
**SEO Title:** `Contact Us — Free Auto Posting Tool | MultiPost`

### Sections

| # | Section | Description |
|---|---|---|
| 1 | **Hero** | Centered gradient hero with h1 "Get In Touch" |
| 2 | **Contact Form** | 2-column: form (7 fields + submit) + Contact Information card with social links |

### Form Fields
- First Name, Last Name (required)
- Email (required)
- Company
- Subject (max 50 chars)
- Inquiry Type (dropdown: General, Sales, Support, Partnership, Other)
- Message (required, multiline)

### API Integration
- `POST /api/waitlist` → Vercel serverless function → SMTP via Nodemailer

### Accessibility
- All social icon buttons have `aria-label="Follow MultiPost on {Platform}"`
- Form fields have proper `id`, `name`, and `label` attributes

---

## Privacy Policy Page

**File:** `src/pages/PrivacyPage.jsx`  
**Route:** `/privacy`

Legal page with structured sections covering data collection, YouTube API Services compliance, cookies, user rights, and contact information.

---

## Terms of Service Page

**File:** `src/pages/TermsPage.jsx`  
**Route:** `/terms`

Legal page with structured sections covering user obligations, intellectual property, service limitations, liability, and governing law.

---

## SEO Component

**File:** `src/components/SEO.jsx`

Centralized `<Helmet>` wrapper used by every page. Accepts:

| Prop | Type | Description |
|---|---|---|
| `title` | string | Page title (appended with `| MultiPost`) |
| `description` | string | Meta description + OG description |
| `path` | string | Route path for canonical URL |
| `image` | string | OG/Twitter image URL |
| `article` | boolean | Enables `BlogPosting` schema |
| `publishedTime` | string | Article publish date |
| `author` | string | Article author |
| `tags` | string[] | Article tags |
| `schema` | object/array | Custom JSON-LD schema(s) to inject |

### Auto-injected Schemas
- **Organization** — Always injected on every page (site name, URL, logo, sameAs social links)
- **SoftwareApplication** — Injected on Home page when no custom schema is provided (price: $0 USD)

### Head Tags Generated
```html
<title>{title} | MultiPost</title>
<meta name="description" content="..." />
<link rel="canonical" href="https://multipost.pro/..." />
<meta property="og:type" content="website" />
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="..." />
<meta property="og:site_name" content="MultiPost" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="..." />
<script type="application/ld+json">...</script>
```
