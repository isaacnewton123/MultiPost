import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import SEO from '../components/SEO';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid, 
  Card, 
  CardContent,
  Stack, 
  useTheme,
  Paper
} from '@mui/material';
import { motion } from 'framer-motion';

// Icons
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SpeedIcon from '@mui/icons-material/Speed';
import ScheduleIcon from '@mui/icons-material/Schedule';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import MusicNoteIcon from '@mui/icons-material/MusicNote'; // TikTok representation
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Background image
import bgImage from '../assets/images/auth-bg.jpg';
// Logo
import logoImg from '../assets/images/LogoWithBG.webp';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }
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

const HomePage = () => {
  const theme = useTheme();

  return (
    <Box>
      <SEO
        title="One Video. Every Platform. Zero Friction."
        description="Distribute your short-form content to YouTube, TikTok, Instagram, Facebook & more in a single click. Stay algorithmically compliant everywhere."
        path="/"
      />
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          backgroundColor: '#070b19',
        }}
      >
        {/* Background Element */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `linear-gradient(135deg, rgba(7, 11, 25, 0.95) 0%, rgba(21, 32, 66, 0.85) 100%), url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0,
          }}
        />
        
        {/* Hero Content */}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: 8 }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                component={motion.div}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
              >
                <Typography
                  variant="h1"
                  sx={{
                    color: 'white',
                    fontWeight: 800,
                    mb: 2,
                    fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4rem' },
                    lineHeight: 1.2,
                  }}
                >
                  One Video. Every <Box component="span" sx={{ color: theme.palette.secondary.main }}>Platform</Box>. Zero Friction.
                </Typography>
              </Box>

              <Box
                component={motion.div}
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.8, delay: 0.2, ease: [0.6, -0.05, 0.01, 0.99] }
                  }
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    mb: 4,
                    maxWidth: 500,
                    fontWeight: 400,
                    lineHeight: 1.6,
                  }}
                >
                  Distribute your short-form content to YouTube, TikTok, Instagram, Facebook & more in a single click. Stay algorithmically compliant everywhere.
                </Typography>
              </Box>

              <Stack 
                direction={{ xs: 'column', sm: 'row' }} 
                spacing={2}
                component={motion.div}
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.8, delay: 0.4, ease: [0.6, -0.05, 0.01, 0.99] }
                  }
                }}
              >
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  component="a"
                  href="/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                  }}
                >
                  Pre-Marketing
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  component={RouterLink}
                  to="/features"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                    color: 'white',
                    '&:hover': {
                      borderColor: 'white',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    }
                  }}
                >
                  Learn More
                </Button>
              </Stack>

              {/* Platforms supported */}
              <Box
                component={motion.div}
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { 
                    opacity: 1,
                    transition: { delay: 0.6, duration: 0.8 }
                  }
                }}
                sx={{ mt: 8 }}
              >
                <Typography variant="subtitle2" sx={{ color: 'rgba(255, 255, 255, 0.6)', mb: 2, fontWeight: 500 }}>
                  SUPPORTED PLATFORMS
                </Typography>
                <Stack direction="row" spacing={3} alignItems="center">
                  <Box 
                    sx={{ 
                      color: '#FF0000', 
                      display: 'flex',
                      alignItems: 'center' 
                    }}
                  >
                    <YouTubeIcon sx={{ fontSize: 30 }} />
                  </Box>
                  <Box 
                    sx={{ 
                      color: '#1877F2', 
                      display: 'flex',
                      alignItems: 'center' 
                    }}
                  >
                    <FacebookIcon sx={{ fontSize: 30 }} />
                  </Box>
                  <Box 
                    sx={{ 
                      color: '#EE1D52', 
                      display: 'flex',
                      alignItems: 'center' 
                    }}
                  >
                    <MusicNoteIcon sx={{ fontSize: 30 }} />
                  </Box>
                  <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                    and more...
                  </Typography>
                </Stack>
              </Box>
            </Grid>

            <Grid 
              item 
              xs={12}
              md={6}
              sx={{ 
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'center'
              }}
            >
              <Box
                component={motion.div}
                initial="hidden"
                animate="visible"
                variants={fadeInRight}
                sx={{ 
                  position: 'relative', 
                  width: '100%',
                  maxWidth: 500,
                  height: 500,
                }}
              >
                {/* Decorative Elements */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: 30,
                    right: 20,
                    width: 300,
                    height: 300,
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${theme.palette.primary.main}22 0%, ${theme.palette.primary.main}00 70%)`,
                    zIndex: 1,
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 40,
                    left: 20,
                    width: 200,
                    height: 200,
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${theme.palette.secondary.main}22 0%, ${theme.palette.secondary.main}00 70%)`,
                    zIndex: 1,
                  }}
                />

                {/* Main Visual Element */}
                <Paper
                  elevation={24}
                  sx={{
                    position: 'relative',
                    zIndex: 2,
                    width: '100%',
                    height: '100%',
                    borderRadius: 4,
                    overflow: 'hidden',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box 
                    component="img"
                    src={logoImg}
                    alt="MultiPost Dashboard Preview"
                    sx={{
                      width: '80%',
                      borderRadius: 3,
                      objectFit: 'contain',
                      transform: 'scale(1.2)',
                      filter: 'drop-shadow(0 20px 30px rgba(0, 0, 0, 0.5))',
                    }}
                  />
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Key Features Section */}
      <Box
        sx={{
          py: 12,
          backgroundColor: 'white',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography 
              component={motion.h2}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variant="h2" 
              color="text.primary"
              gutterBottom
              sx={{
                fontWeight: 700,
                position: 'relative',
                display: 'inline-block',
                mb: 2,
              }}
            >
              Why Choose MultiPost
            </Typography>
            <Typography 
              component={motion.p}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              variant="h5" 
              color="text.secondary"
              sx={{ 
                maxWidth: 700,
                mx: 'auto',
                mb: 2,
                fontSize: '1.25rem',
              }}
            >
              Our platform streamlines your workflow with powerful features
            </Typography>
          </Box>

          <Box
            component={motion.div}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Grid container spacing={4}>
              {[
                {
                  icon: <CloudUploadIcon sx={{ fontSize: 60, color: theme.palette.primary.main }} />,
                  title: 'Multi-Platform Upload',
                  description: 'Upload videos to YouTube, Facebook, TikTok and more from one intuitive interface. Save time and streamline your workflow.'
                },
                {
                  icon: <SpeedIcon sx={{ fontSize: 60, color: theme.palette.primary.main }} />,
                  title: 'Batch Processing',
                  description: 'Prepare and upload multiple videos simultaneously. Perfect for content creators with regular posting schedules.'
                },
                {
                  icon: <ScheduleIcon sx={{ fontSize: 60, color: theme.palette.primary.main }} />,
                  title: 'Scheduled Uploads',
                  description: 'Plan your content calendar by scheduling uploads at specific dates and times across all platforms.'
                }
              ].map((feature, i) => (
                <Grid item xs={12} md={4} key={i}>
                  <Card 
                    component={motion.div}
                    variants={fadeInUp}
                    sx={{ 
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      p: 4,
                      borderRadius: 4,
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                    }}
                    elevation={0}
                  >
                    <Box sx={{ mb: 3 }}>
                      {feature.icon}
                    </Box>
                    <CardContent sx={{ p: 0, flexGrow: 1 }}>
                      <Typography variant="h4" component="h3" gutterBottom fontWeight={600} sx={{ mb: 2 }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            sx={{ 
              textAlign: 'center', 
              mt: 8 
            }}
          >
            <Button 
              variant="contained"
              color="primary"
              size="large"
              component={RouterLink}
              to="/features"
              endIcon={<ArrowForwardIcon />}
              sx={{ px: 4, py: 1.5 }}
            >
              Explore All Features
            </Button>
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: 10,
          background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
          color: 'white',
        }}
      >
        <Container maxWidth="md">
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            sx={{ 
              textAlign: 'center',
            }}
          >
            <Typography 
              variant="h2" 
              gutterBottom
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                mb: 3,
              }}
            >
              Ready to Streamline Your Workflow?
            </Typography>
            
            <Typography 
              variant="h5"
              sx={{ 
                mb: 5,
                opacity: 0.9,
                maxWidth: 700,
                mx: 'auto'
              }}
            >
              Join leading content creators who are saving time and growing their audience with MultiPost.
            </Typography>
            
            <Button
              variant="contained"
              color="secondary"
              size="large"
              component="a"
              href="/contact"
              target="_blank"
              rel="noopener noreferrer"
              endIcon={<ArrowForwardIcon />}
              sx={{ 
                px: 6, 
                py: 2,
                fontSize: '1.2rem',
                borderRadius: 10,
              }}
            >
              Pre-Marketing Today
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage; 