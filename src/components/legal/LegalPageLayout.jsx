// ── Shared layout for /terms, /privacy, /refund ─────────────────────────────
// Mirrors the look and feel of the Documentation page:
//   • Gradient hero
//   • Content area with rounded top, overlapping the hero (`mt: -6`)
//   • Sticky sidebar of section anchors on md+
//   • Main paper renders each section with a hash anchor (`id={section.id}`)
//
// On mount we read `window.location.hash` and scroll the matching section
// into view (with the same `scrollMarginTop` the sections use), so a deep
// link like `/terms#refunds` works the same way `/docs#get-started` does.

import React, { useEffect, useState, useCallback } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import MuiLink from '@mui/material/Link';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { m } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import EmailIcon from '@mui/icons-material/EmailOutlined';

const SCROLL_MARGIN_TOP = 100;

const markdownComponents = {
  p: ({ node, ...props }) => (
    <Typography
      variant="body1"
      sx={{ mb: 2, color: 'text.secondary', lineHeight: 1.8 }}
      {...props}
    />
  ),
  a: ({ node, href, ...props }) => {
    // In-app router links (start with /) stay client-side; external links
    // open in a new tab with safe rel attributes.
    const isInternal = typeof href === 'string' && href.startsWith('/');
    const linkProps = isInternal
      ? { component: RouterLink, to: href }
      : { href, target: '_blank', rel: 'noopener noreferrer' };
    return (
      <MuiLink
        {...linkProps}
        {...props}
        sx={{
          color: 'primary.main',
          textDecoration: 'underline',
          '&:hover': { color: 'primary.dark' },
        }}
      />
    );
  },
  ul: ({ node, ...props }) => (
    <ul style={{ paddingLeft: '24px', marginBottom: '16px' }} {...props} />
  ),
  ol: ({ node, ...props }) => (
    <ol style={{ paddingLeft: '24px', marginBottom: '16px' }} {...props} />
  ),
  li: ({ node, ...props }) => (
    <li style={{ marginBottom: '8px' }}>
      <Typography
        component="span"
        variant="body1"
        sx={{ color: 'text.secondary', lineHeight: 1.8 }}
        {...props}
      />
    </li>
  ),
  strong: ({ node, ...props }) => (
    <Typography
      component="span"
      fontWeight="fontWeightBold"
      sx={{ color: 'text.primary' }}
      {...props}
    />
  ),
  code: ({ node, inline, ...props }) =>
    inline ? (
      <Box
        component="code"
        sx={{
          backgroundColor: 'rgba(0,0,0,0.04)',
          px: 0.75,
          py: 0.25,
          borderRadius: 0.75,
          fontFamily: '"Fira Code", "Roboto Mono", monospace',
          fontSize: '0.85em',
        }}
        {...props}
      />
    ) : (
      <Box
        component="pre"
        sx={{
          backgroundColor: '#1e1e2e',
          color: '#cdd6f4',
          p: 2,
          borderRadius: 1.5,
          overflow: 'auto',
          fontSize: '0.85rem',
          fontFamily: '"Fira Code", "Roboto Mono", monospace',
          lineHeight: 1.7,
          my: 2,
        }}
      >
        <code {...props} />
      </Box>
    ),
};

/**
 * @param {object} props
 * @param {string} props.title              - Hero title
 * @param {string} props.subtitle           - Hero subtitle
 * @param {string} props.lastUpdated        - ISO-ish last-updated date label
 * @param {string} props.breadcrumbLabel    - Last breadcrumb segment
 * @param {Array<{id:string,title:string,icon?:React.ReactNode,content:string}>} props.sections
 * @param {Array<{label:string,to?:string,href?:string,icon?:React.ReactNode}>} [props.relatedLinks]
 *   Optional cross-links shown above the sidebar (e.g. "Privacy Policy" on the
 *   Terms page). Keeps users hopping between TOS/Privacy/Refund easily.
 * @param {React.ReactNode} [props.footerCta]
 *   Optional bottom-of-page card (e.g. "Need a refund? Email support…").
 */
export default function LegalPageLayout({
  title,
  subtitle,
  lastUpdated,
  breadcrumbLabel,
  sections,
  relatedLinks = [],
  footerCta = null,
}) {
  const theme = useTheme();
  const [activeId, setActiveId] = useState(sections[0]?.id);

  // Scroll the section matching the URL hash into view on mount and on
  // hashchange. Matches the docs page's deep-link behaviour.
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const scrollToHash = () => {
      const id = (window.location.hash || '').replace(/^#/, '');
      if (!id) return;
      const el = document.getElementById(id);
      if (el) {
        // Smooth scroll respects scrollMarginTop on the target.
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActiveId(id);
      }
    };
    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);
    return () => window.removeEventListener('hashchange', scrollToHash);
  }, []);

  // Track which section is in view to highlight the matching sidebar entry.
  // IntersectionObserver is lightweight and avoids scroll-listener churn.
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top of the viewport that's intersecting.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: `-${SCROLL_MARGIN_TOP}px 0px -60% 0px`, threshold: 0 },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  const handleAnchorClick = useCallback((id) => (e) => {
    // Smooth-scroll like /docs without losing the hash in the URL.
    if (typeof window === 'undefined') return;
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      const newUrl = `${window.location.pathname}${window.location.search}#${id}`;
      window.history.replaceState(null, '', newUrl);
      setActiveId(id);
    }
  }, []);

  return (
    <Box sx={{ minHeight: '100vh' }}>
      {/* ── Gradient hero (matches /docs) ─────────────────────────── */}
      <Box
        sx={{
          py: 12,
          pt: { xs: 18, md: 20 },
          background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
          color: 'white',
        }}
      >
        <Container maxWidth="lg">
          <Box
            component={m.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}
          >
            <Typography
              variant="h1"
              gutterBottom
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                mb: 2,
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="h5"
              component="p"
              sx={{
                opacity: 0.9,
                mb: 3,
                maxWidth: 700,
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              {subtitle}
            </Typography>
            {lastUpdated && (
              <Typography variant="body1" sx={{ opacity: 0.8 }}>
                Last updated: {lastUpdated}
              </Typography>
            )}
          </Box>
        </Container>
      </Box>

      {/* ── Content area with rounded top overlapping the hero ────── */}
      <Box
        sx={{
          py: 10,
          backgroundColor: theme.palette.background.default,
          position: 'relative',
          zIndex: 1,
          mt: -6,
          borderRadius: '20px 20px 0 0',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ mb: 4 }}>
            <Breadcrumbs separator={<KeyboardArrowRightIcon fontSize="small" />}>
              <MuiLink component={RouterLink} to="/" color="inherit" underline="hover">
                Home
              </MuiLink>
              <Typography color="text.primary">{breadcrumbLabel}</Typography>
            </Breadcrumbs>
          </Box>

          <Grid container spacing={4}>
            {/* ── Sticky sidebar of section anchors ──────────────── */}
            <Grid item xs={12} md={3}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderRadius: 3,
                  mb: 4,
                  position: { md: 'sticky' },
                  top: { md: 100 },
                  maxHeight: { md: 'calc(100vh - 120px)' },
                  overflowY: { md: 'auto' },
                }}
              >
                <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                  On this page
                </Typography>
                <List component="nav" dense disablePadding>
                  {sections.map((section) => (
                    <ListItem
                      key={section.id}
                      component="a"
                      href={`#${section.id}`}
                      onClick={handleAnchorClick(section.id)}
                      selected={activeId === section.id}
                      sx={{
                        borderRadius: 1,
                        mb: 0.5,
                        py: 0.5,
                        textDecoration: 'none',
                        color: 'inherit',
                        '&.Mui-selected': {
                          backgroundColor: 'rgba(30, 78, 140, 0.08)',
                          '&:hover': {
                            backgroundColor: 'rgba(30, 78, 140, 0.12)',
                          },
                        },
                      }}
                    >
                      {section.icon && (
                        <ListItemIcon sx={{ minWidth: 32 }}>{section.icon}</ListItemIcon>
                      )}
                      <ListItemText
                        primary={section.title}
                        primaryTypographyProps={{
                          variant: 'body2',
                          fontWeight: activeId === section.id ? 600 : 400,
                        }}
                      />
                    </ListItem>
                  ))}
                </List>

                {relatedLinks.length > 0 && (
                  <>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="overline" color="text.secondary">
                      Related
                    </Typography>
                    <List component="nav" dense disablePadding sx={{ mt: 1 }}>
                      {relatedLinks.map((rl, i) => (
                        <ListItem
                          key={i}
                          component={rl.to ? RouterLink : 'a'}
                          to={rl.to}
                          href={rl.href}
                          target={rl.href ? '_blank' : undefined}
                          rel={rl.href ? 'noopener noreferrer' : undefined}
                          sx={{
                            borderRadius: 1,
                            py: 0.5,
                            textDecoration: 'none',
                            color: 'inherit',
                            '&:hover': {
                              backgroundColor: 'rgba(0, 0, 0, 0.03)',
                            },
                          }}
                        >
                          {rl.icon && (
                            <ListItemIcon sx={{ minWidth: 32 }}>{rl.icon}</ListItemIcon>
                          )}
                          <ListItemText
                            primary={rl.label}
                            primaryTypographyProps={{ variant: 'body2' }}
                          />
                        </ListItem>
                      ))}
                    </List>
                  </>
                )}
              </Paper>
            </Grid>

            {/* ── Main content paper ─────────────────────────────── */}
            <Grid item xs={12} md={9}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 5 },
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderRadius: 3,
                }}
              >
                {sections.map((section, idx) => (
                  <Box
                    key={section.id}
                    id={section.id}
                    sx={{
                      scrollMarginTop: SCROLL_MARGIN_TOP,
                      mb: idx === sections.length - 1 ? 0 : 6,
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      {section.icon && <Box sx={{ mr: 2 }}>{section.icon}</Box>}
                      <Typography variant="h5" component="h2" fontWeight={700}>
                        {section.title}
                      </Typography>
                    </Box>
                    <Divider sx={{ mb: 3 }} />
                    <ReactMarkdown components={markdownComponents}>
                      {section.content}
                    </ReactMarkdown>
                  </Box>
                ))}
              </Paper>

              {footerCta && (
                <Paper
                  elevation={0}
                  sx={{
                    mt: 4,
                    p: { xs: 3, md: 4 },
                    borderRadius: 3,
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    background: `linear-gradient(135deg, ${theme.palette.primary.main}06 0%, ${theme.palette.primary.light}06 100%)`,
                  }}
                >
                  {footerCta}
                </Paper>
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

// Re-export EmailIcon so consumers don't need their own import for the
// most common footer-CTA button — keeps the call sites tidy.
export { EmailIcon };
