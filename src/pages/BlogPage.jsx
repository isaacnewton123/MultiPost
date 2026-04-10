import React, { useState, useMemo } from 'react';
import { useSearchParams, Link as RouterLink } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SEO from '../components/SEO';
import { getAllPosts, getCategories, formatDate } from '../utils/blog';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Button,
  Chip,
  Divider,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';

// Icons
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';

const POSTS_PER_PAGE = 6;

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const BlogPage = () => {
  const theme = useTheme();
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('All');

  // ── Pagination from URL ──────────────────────────────────────────
  const currentPage = Math.max(1, parseInt(searchParams.get('page') || '1', 10));

  const allPosts = getAllPosts();
  const categories = getCategories();

  const filteredPosts = useMemo(() => {
    if (activeCategory === 'All') return allPosts;
    return allPosts.filter((p) => p.category === activeCategory);
  }, [allPosts, activeCategory]);

  // Paginate only the "All" view; filtered view shows every match
  const isFiltered = activeCategory !== 'All';
  const visiblePosts = isFiltered
    ? filteredPosts
    : filteredPosts.slice(0, currentPage * POSTS_PER_PAGE);

  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const hasMore = !isFiltered && currentPage * POSTS_PER_PAGE < filteredPosts.length;
  const nextPage = currentPage + 1;

  // ── Handlers ─────────────────────────────────────────────────────
  const handleLoadMore = (e) => {
    e.preventDefault();
    setSearchParams({ page: String(nextPage) }, { replace: false });
    // Scroll stays; new cards animate in below
  };

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category === 'All' && currentPage !== 1) {
      setSearchParams({ page: '1' }, { replace: true });
    }
  };

  // ── SEO helpers ──────────────────────────────────────────────────
  const seoPath = currentPage > 1 ? `/blog?page=${currentPage}` : '/blog';
  const prevHref = currentPage > 1
    ? `https://multipost.pro/blog${currentPage > 2 ? `?page=${currentPage - 1}` : ''}`
    : null;
  const nextHref = hasMore ? `https://multipost.pro/blog?page=${nextPage}` : null;

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <SEO
        title={currentPage > 1 ? `Blog — Page ${currentPage}` : 'Blog — Free Auto Posting Tips & Video Distribution'}
        description="Tips, strategies, and insights on multi-platform content distribution, free auto posting, short-form video optimization, and social media growth with unlimited platform connections."
        path={seoPath}
      />
      {/* Pagination link hints for crawlers */}
      <Helmet>
        {prevHref && <link rel="prev" href={prevHref} />}
        {nextHref && <link rel="next" href={nextHref} />}
      </Helmet>

      {/* Hero Section */}
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
            component={motion.div}
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
              MultiPost{' '}
              <Box component="span" sx={{ color: theme.palette.secondary.main }}>
                Blog
              </Box>
            </Typography>

            <Typography
              variant="h5"
              sx={{
                opacity: 0.9,
                mb: 6,
                maxWidth: 700,
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              Tips, strategies, and insights to help you streamline your content
              creation and maximize your social media presence.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Blog Content Section */}
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
          {/* Category filters */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            sx={{ mb: 6, display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1 }}
          >
            {categories.map((category) => (
              <Chip
                key={category}
                label={category}
                clickable
                color={activeCategory === category ? 'primary' : 'default'}
                onClick={() => handleCategoryChange(category)}
                sx={{
                  m: 0.5,
                  fontWeight: 500,
                  transition: 'all 0.3s ease',
                  '&:hover': { transform: 'translateY(-2px)' },
                }}
              />
            ))}
          </Box>

          {/* Blog posts grid */}
          <Grid
            container
            spacing={4}
            component={motion.div}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {visiblePosts.map((post) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={post.slug}
                component={motion.div}
                variants={fadeInUp}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    border: 'none',
                    borderRadius: 3,
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <CardActionArea component={RouterLink} to={`/blog/${post.slug}`}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={post.image}
                      alt={`${post.title} — MultiPost blog`}
                      loading="lazy"
                    />
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Box sx={{ mb: 2 }}>
                        <Chip
                          label={post.category}
                          size="small"
                          color="primary"
                          sx={{ fontWeight: 500, fontSize: '0.75rem' }}
                        />
                      </Box>
                      <Typography gutterBottom variant="h5" component="h2" fontWeight={700}>
                        {post.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                        {post.description}
                      </Typography>
                      <Divider sx={{ my: 2 }} />
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <PersonIcon sx={{ fontSize: '0.9rem', color: 'text.secondary', mr: 0.5 }} />
                          <Typography variant="caption" color="text.secondary">
                            {post.author}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <CalendarTodayIcon sx={{ fontSize: '0.9rem', color: 'text.secondary', mr: 0.5 }} />
                          <Typography variant="caption" color="text.secondary">
                            {formatDate(post.date)}
                          </Typography>
                        </Box>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* ── Load More: crawlable <a> with JS progressive enhancement ── */}
          {hasMore && (
            <Box
              sx={{ mt: 6, display: 'flex', justifyContent: 'center' }}
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button
                component="a"
                href={`/blog?page=${nextPage}`}
                onClick={handleLoadMore}
                variant="outlined"
                color="primary"
                size="large"
                endIcon={<ArrowForwardIcon />}
                rel="next"
              >
                Load More Articles
              </Button>
            </Box>
          )}

          {/* Visible page count for users + crawlers */}
          {!isFiltered && totalPages > 1 && (
            <Box
              component="nav"
              aria-label="Blog pagination"
              sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 1, flexWrap: 'wrap' }}
            >
              {Array.from({ length: totalPages }, (_, i) => {
                const page = i + 1;
                const href = page === 1 ? '/blog' : `/blog?page=${page}`;
                const isActive = page <= currentPage;
                return (
                  <Button
                    key={page}
                    component="a"
                    href={href}
                    onClick={(e) => {
                      e.preventDefault();
                      setSearchParams(page === 1 ? {} : { page: String(page) }, { replace: false });
                    }}
                    size="small"
                    variant={isActive ? 'contained' : 'text'}
                    color="primary"
                    sx={{ minWidth: 36, fontWeight: 600 }}
                  >
                    {page}
                  </Button>
                );
              })}
            </Box>
          )}
        </Container>
      </Box>
    </Box>
  );
};

export default BlogPage; 