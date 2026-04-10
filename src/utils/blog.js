/**
 * Blog utility — loads all .md files from src/content/blog/ at build time
 * via Vite's import.meta.glob, parses YAML frontmatter, and exposes
 * helper functions for listing and fetching posts.
 *
 * To add a new post: just drop a .md file into src/content/blog/
 * with valid frontmatter (title, description, date, author, category, image, tags).
 * The filename (without .md) becomes the slug.
 */

// ── Frontmatter parser (lightweight, no dependencies) ──────────────
function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { meta: {}, content: raw };

  const yamlBlock = match[1];
  const content = match[2];
  const meta = {};

  let currentKey = null;
  let currentArray = null;

  for (const line of yamlBlock.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    // Array item (e.g. "  - value")
    if (trimmed.startsWith('- ') && currentKey) {
      const value = trimmed.slice(2).replace(/^["']|["']$/g, '').trim();
      if (!currentArray) currentArray = [];
      currentArray.push(value);
      meta[currentKey] = currentArray;
      continue;
    }

    // Flush any pending array
    currentArray = null;

    // Key: value pair
    const kvMatch = trimmed.match(/^(\w+)\s*:\s*(.*)$/);
    if (kvMatch) {
      currentKey = kvMatch[1];
      let value = kvMatch[2].trim();

      // Remove surrounding quotes
      if ((value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }

      // Inline array: ["a", "b", "c"]
      if (value.startsWith('[') && value.endsWith(']')) {
        meta[currentKey] = value
          .slice(1, -1)
          .split(',')
          .map(v => v.trim().replace(/^["']|["']$/g, ''));
        continue;
      }

      meta[currentKey] = value;
    }
  }

  return { meta, content };
}

// ── Load all posts at build time ────────────────────────────────────
const markdownFiles = import.meta.glob('../content/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

const posts = Object.entries(markdownFiles).map(([filepath, raw]) => {
  const slug = filepath.split('/').pop().replace('.md', '');
  const { meta, content } = parseFrontmatter(raw);

  return {
    slug,
    title: meta.title || slug,
    description: meta.description || '',
    date: meta.date || '',
    author: meta.author || 'MultiPost Team',
    category: meta.category || 'General',
    image: meta.image || '',
    tags: Array.isArray(meta.tags) ? meta.tags : [],
    content,
  };
});

// Sort newest first
posts.sort((a, b) => new Date(b.date) - new Date(a.date));

// ── Public API ──────────────────────────────────────────────────────

/** Get all posts sorted by date (newest first) */
export function getAllPosts() {
  return posts;
}

/** Get a single post by slug */
export function getPostBySlug(slug) {
  return posts.find(p => p.slug === slug) || null;
}

/** Get unique categories from all posts */
export function getCategories() {
  const cats = new Set(posts.map(p => p.category));
  return ['All', ...Array.from(cats).sort()];
}

/** Get unique tags from all posts */
export function getAllTags() {
  const tags = new Set(posts.flatMap(p => p.tags));
  return Array.from(tags).sort();
}

/** Format a date string like "April 1, 2026" */
export function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
