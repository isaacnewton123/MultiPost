import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import SEO from '../components/SEO';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Button, 
  useTheme,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { motion } from 'framer-motion';

// Icons
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const AboutPage = () => {
  const theme = useTheme();

  const companyValues = [
    {
      value: 'Innovation',
      description: 'We continuously explore new technologies and approaches to solve content creators\' challenges.'
    },
    {
      value: 'Reliability',
      description: 'Our platform is built for stability and consistency, ensuring your content is always delivered on time.'
    },
    {
      value: 'Simplicity',
      description: 'We believe powerful tools should be easy to use, with intuitive interfaces that don\'t require technical expertise.'
    },
    {
      value: 'Security',
      description: 'We prioritize the protection of your content and account information with industry-leading security practices.'
    },
  ];

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <SEO
        title="About Us"
        description="Learn about MultiPost's mission to empower content creators with effortless multi-platform video distribution."
        path="/about"
      />
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
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={8} lg={7}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
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
                  About <Box component="span" sx={{ color: theme.palette.secondary.main }}>MultiPost</Box>
                </Typography>
              </Box>

              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    opacity: 0.9,
                    mb: 4,
                    maxWidth: 600,
                    lineHeight: 1.6,
                  }}
                >
                  We're a passionate team of developers and content creators on a mission to simplify the way digital content is managed and distributed.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Our Story Section */}
      <Box
        sx={{
          py: 10,
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid 
              item 
              xs={12} 
              md={6}
              component={motion.div}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Typography variant="h3" gutterBottom fontWeight={700}>
                Our Story
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary" 
                paragraph
                sx={{ mb: 3, lineHeight: 1.8 }}
              >
                MultiPost was founded by Isaac Newton, who experienced firsthand the challenges of managing content across multiple platforms as a content creator himself.
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary" 
                paragraph
                sx={{ mb: 3, lineHeight: 1.8 }}
              >
                As a new startup that's just beginning our journey, we're excited to introduce a solution that streamlines the process of managing and uploading content to various platforms, saving creators countless hours of manual work.
              </Typography>
              <Typography 
                variant="body1" 
                color="text.secondary" 
                paragraph
                sx={{ mb: 3, lineHeight: 1.8 }}
              >
                Our goal is simple but ambitious: to save you time and help you reach your audience more effectively, allowing you to focus on what truly matters - creating amazing content.
              </Typography>
            </Grid>
            <Grid 
              item 
              xs={12} 
              md={6}
              component={motion.div}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Paper
                elevation={0}
                sx={{
                  borderRadius: 4,
                  overflow: 'hidden',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: 'white',
                    p: 3,
                  }}
                >
                  <Typography variant="h5" fontWeight={700}>
                    Our Mission
                  </Typography>
                </Box>
                <Box sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Typography
                    variant="h6"
                    sx={{
                      mb: 4,
                      fontStyle: 'italic',
                      color: theme.palette.text.primary,
                      lineHeight: 1.8,
                    }}
                  >
                    "To empower content creators by simplifying the distribution process, allowing them to focus on what they do best: creating amazing content."
                  </Typography>
                  <List>
                    {companyValues.map((item, i) => (
                      <ListItem key={i} alignItems="flex-start" sx={{ px: 0, py: 1.5 }}>
                        <ListItemIcon sx={{ minWidth: 36, mt: 0.5 }}>
                          <CheckCircleOutlineIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText
                          primary={<Typography variant="subtitle1" fontWeight={600}>{item.value}</Typography>}
                          secondary={<Typography variant="body2" color="text.secondary">{item.description}</Typography>}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Join Us CTA Section */}
      <Box
        sx={{
          py: 12,
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Container maxWidth="md">
          <Paper
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            elevation={0}
            sx={{
              p: { xs: 4, md: 6 },
              borderRadius: 4,
              border: '1px solid rgba(0, 0, 0, 0.1)',
              background: `linear-gradient(135deg, ${theme.palette.primary.main}08 0%, ${theme.palette.primary.light}08 100%)`,
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                fontWeight: 700,
                mb: 3,
              }}
            >
              Join Our Journey
            </Typography>
            <Typography
              variant="h6"
              color="textSecondary"
              sx={{
                mb: 4,
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              Ready to streamline your content management and distribution? Start using MultiPost today.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              component="a"
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              endIcon={<ArrowForwardIcon />}
              sx={{
                px: 5,
                py: 1.5,
                fontSize: '1.1rem',
              }}
            >
              Pre-Marketing Today
            </Button>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutPage; 