import React from 'react';
import { useParams, Link as RouterLink, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import SEO from '../components/SEO';
import { getPostBySlug, getAllPosts, formatDate } from '../utils/blog';
import {
  Box,
  Container,
  Typography,
  Chip,
  Stack,
  Divider,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Grid,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const BlogPostPage = () => {
  const { slug } = useParams();
  const theme = useTheme();
  const post = getPostBySlug(slug);

  if (!post) return <Navigate to="/blog" replace />;

  // Get related posts (same category, excluding current)
  const related = getAllPosts()
    .filter(p => p.slug !== slug && p.category === post.category)
    .slice(0, 3);

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <SEO
        title={post.title}
        description={post.description}
        path={`/blog/${post.slug}`}
        image={post.image}
        article
        publishedTime={post.date}
        author={post.author}
        tags={post.tags}
      />

      {/* Hero / Header */}
      <Box
        sx={{
          pt: { xs: 16, md: 18 },
          pb: { xs: 6, md: 8 },
          background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
          color: 'white',
        }}
      >
        <Container maxWidth="md">
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button
              component={RouterLink}
              to="/blog"
              startIcon={<ArrowBackIcon />}
              sx={{ color: 'rgba(255,255,255,0.8)', mb: 3, '&:hover': { color: '#fff' } }}
            >
              Back to Blog
            </Button>

            <Chip
              label={post.category}
              size="small"
              sx={{
                mb: 2,
                backgroundColor: 'rgba(255,255,255,0.15)',
                color: '#fff',
                fontWeight: 600,
              }}
            />

            <Typography
              variant="h1"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                mb: 3,
                lineHeight: 1.2,
              }}
            >
              {post.title}
            </Typography>

            <Stack direction="row" spacing={3} alignItems="center" sx={{ opacity: 0.85 }}>
              <Stack direction="row" spacing={0.5} alignItems="center">
                <PersonIcon sx={{ fontSize: '1rem' }} />
                <Typography variant="body2">{post.author}</Typography>
              </Stack>
              <Stack direction="row" spacing={0.5} alignItems="center">
                <CalendarTodayIcon sx={{ fontSize: '1rem' }} />
                <Typography variant="body2">{formatDate(post.date)}</Typography>
              </Stack>
            </Stack>
          </Box>
        </Container>
      </Box>

      {/* Featured Image */}
      {post.image && (
        <Container maxWidth="md" sx={{ mt: -4, position: 'relative', zIndex: 2 }}>
          <Box
            component="img"
            src={post.image}
            alt={post.title}
            sx={{
              width: '100%',
              height: { xs: 220, sm: 320, md: 420 },
              objectFit: 'cover',
              borderRadius: 3,
              boxShadow: '0 12px 40px rgba(0,0,0,0.15)',
            }}
          />
        </Container>
      )}

      {/* Article Content */}
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          sx={{
            '& h2': {
              ...theme.typography.h4,
              fontWeight: 700,
              mt: 5,
              mb: 2,
              color: theme.palette.text.primary,
            },
            '& h3': {
              ...theme.typography.h5,
              fontWeight: 600,
              mt: 4,
              mb: 1.5,
              color: theme.palette.text.primary,
            },
            '& p': {
              ...theme.typography.body1,
              lineHeight: 1.8,
              mb: 2.5,
              color: theme.palette.text.secondary,
            },
            '& ul, & ol': {
              pl: 3,
              mb: 2.5,
              '& li': {
                ...theme.typography.body1,
                lineHeight: 1.8,
                mb: 1,
                color: theme.palette.text.secondary,
              },
            },
            '& blockquote': {
              borderLeft: `4px solid ${theme.palette.primary.main}`,
              pl: 3,
              py: 1,
              my: 3,
              mx: 0,
              backgroundColor: theme.palette.grey[50],
              borderRadius: '0 8px 8px 0',
              '& p': { mb: 0, fontStyle: 'italic' },
            },
            '& code': {
              backgroundColor: theme.palette.grey[100],
              px: 1,
              py: 0.3,
              borderRadius: 1,
              fontSize: '0.9em',
              fontFamily: 'monospace',
            },
            '& pre': {
              backgroundColor: theme.palette.grey[900],
              color: '#e2e8f0',
              p: 3,
              borderRadius: 2,
              overflow: 'auto',
              mb: 3,
              '& code': {
                backgroundColor: 'transparent',
                px: 0,
                py: 0,
                color: 'inherit',
              },
            },
            '& table': {
              width: '100%',
              borderCollapse: 'collapse',
              mb: 3,
              '& th, & td': {
                border: `1px solid ${theme.palette.grey[200]}`,
                px: 2,
                py: 1.5,
                textAlign: 'left',
                ...theme.typography.body2,
              },
              '& th': {
                backgroundColor: theme.palette.grey[50],
                fontWeight: 600,
              },
            },
            '& a': {
              color: theme.palette.primary.main,
              textDecoration: 'none',
              fontWeight: 500,
              '&:hover': { textDecoration: 'underline' },
            },
            '& img': {
              maxWidth: '100%',
              borderRadius: 2,
              my: 2,
            },
            '& strong': {
              fontWeight: 600,
              color: theme.palette.text.primary,
            },
            '& hr': {
              border: 'none',
              borderTop: `1px solid ${theme.palette.grey[200]}`,
              my: 4,
            },
          }}
        >
          <ReactMarkdown remarkPlugins={[remarkBreaks]}>
            {post.content}
          </ReactMarkdown>
        </Box>

        {/* Tags */}
        {post.tags.length > 0 && (
          <Box sx={{ mt: 4 }}>
            <Divider sx={{ mb: 3 }} />
            <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" useFlexGap>
              <LocalOfferIcon sx={{ fontSize: '1.1rem', color: 'text.secondary', mr: 0.5 }} />
              {post.tags.map(tag => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  variant="outlined"
                  sx={{ fontWeight: 500 }}
                />
              ))}
            </Stack>
          </Box>
        )}

        {/* Related Posts */}
        {related.length > 0 && (
          <Box sx={{ mt: 8 }}>
            <Typography variant="h4" fontWeight={700} sx={{ mb: 4 }}>
              Related Articles
            </Typography>
            <Grid container spacing={3}>
              {related.map(rp => (
                <Grid item xs={12} sm={4} key={rp.slug}>
                  <Card sx={{ height: '100%', borderRadius: 3, overflow: 'hidden' }}>
                    <CardActionArea component={RouterLink} to={`/blog/${rp.slug}`}>
                      <CardMedia
                        component="img"
                        height="160"
                        image={rp.image}
                        alt={rp.title}
                      />
                      <CardContent>
                        <Chip label={rp.category} size="small" color="primary" sx={{ mb: 1, fontWeight: 500, fontSize: '0.7rem' }} />
                        <Typography variant="subtitle1" fontWeight={700} sx={{ lineHeight: 1.3 }}>
                          {rp.title}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                          {formatDate(rp.date)}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default BlogPostPage;
