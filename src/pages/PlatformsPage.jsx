import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import SEO from '../components/SEO';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { m } from 'framer-motion';

// Platform Icons
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MusicNoteIcon from '@mui/icons-material/MusicNote'; // Representing TikTok
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

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

const PlatformsPage = () => {
  const theme = useTheme();

  const platforms = [
    {
      name: 'YouTube',
      description: 'Upload videos directly to the world\'s largest video platform. Manage titles, descriptions, thumbnails, and privacy settings.',
      icon: <YouTubeIcon sx={{ fontSize: 40, color: '#FF0000' }} />,
      color: '#FF0000',
      features: [
        'Direct video uploads',
        'Custom thumbnail support',
        'Scheduled publishing',
        'Private/unlisted options',
        'Channel management'
      ],
      available: true
    },
    {
      name: 'Facebook',
      description: 'Share videos to your personal profile, business page, or group. Configure audience targeting and engagement options.',
      icon: <FacebookIcon sx={{ fontSize: 40, color: '#1877F2' }} />,
      color: '#1877F2',
      features: [
        'Page and profile uploads',
        'Audience targeting',
        'Engagement settings',
        'Auto-sharing options',
        'Detailed analytics'
      ],
      available: true
    },
    {
      name: 'Instagram',
      description: 'Post to your Instagram feed or IGTV. Optimize video formats and apply filters before publishing.',
      icon: <InstagramIcon sx={{ fontSize: 40, color: '#E4405F' }} />,
      color: '#E4405F',
      features: [
        'Feed and IGTV support',
        'Format optimization',
        'Filter application',
        'Caption templates',
        'Hashtag management'
      ],
      available: true
    },
    {
      name: 'TikTok',
      description: 'Reach a younger audience with short-form videos optimized for TikTok\'s vertical format and trending sounds.',
      icon: <MusicNoteIcon sx={{ fontSize: 40, color: '#000000' }} />,
      color: '#EE1D52',
      features: [
        'Custom sound integration',
        'Effect application',
        'Trending hashtags',
        'Multi-account management',
        'Performance analytics'
      ],
      available: true
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <SEO
        title="Supported Platforms — Free Auto Posting Tool | Unlimited Connections"
        description="MultiPost supports YouTube Shorts, TikTok, Instagram Reels, Facebook Reels, and more. Free auto posting tool with unlimited platform connections. Distribute content natively across every major platform."
        path="/platforms"
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
              Connect With <Box component="span" sx={{ color: theme.palette.secondary.main }}>Every Platform</Box>
            </Typography>

            <Typography
              variant="h5"
              sx={{
                opacity: 0.9,
                mb: 4,
                maxWidth: 700,
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              MultiPost seamlessly integrates with all major social media platforms, giving you complete control from a single dashboard.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Platforms Grid Section */}
      <Box
        sx={{
          py: 10,
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Container maxWidth="lg">
          <Box
            component={m.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            sx={{ 
              mb: 8,
              textAlign: 'center'
            }}
          >
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontWeight: 700,
                position: 'relative',
                display: 'inline-block',
                mb: 2,
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -10,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 80,
                  height: 4,
                  backgroundColor: theme.palette.secondary.main,
                  borderRadius: 2,
                },
              }}
            >
              Supported Platforms
            </Typography>
            <Typography
              variant="h5"
              color="textSecondary"
              sx={{
                maxWidth: 700,
                mx: 'auto',
                mb: 6,
              }}
            >
              Manage your content across all major social networks
            </Typography>
          </Box>

          <Box
            component={m.div}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Grid container spacing={4}>
              {platforms.map((platform, i) => (
                <Grid item xs={12} md={6} key={i}>
                  <Card
                    component={m.div}
                    variants={fadeInUp}
                    sx={{
                      height: '100%',
                      borderRadius: 4,
                      p: 4,
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                    elevation={0}
                  >
                    {/* Decorative background color */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        width: 200,
                        height: 200,
                        borderRadius: '50%',
                        backgroundColor: `${platform.color}15`,
                        transform: 'translate(30%, -30%)',
                        zIndex: 0,
                      }}
                    />
                    
                    <Box sx={{ position: 'relative', zIndex: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Avatar
                            sx={{ 
                              backgroundColor: `${platform.color}20`,
                              width: 60,
                              height: 60,
                              mr: 2,
                            }}
                          >
                            {platform.icon}
                          </Avatar>
                          <Typography variant="h4" component="h3" fontWeight={700}>
                            {platform.name}
                          </Typography>
                        </Box>
                        
                        {!platform.available && (
                          <Chip 
                            icon={<AccessTimeIcon />} 
                            label="Coming Soon" 
                            color="primary" 
                            variant="outlined"
                            sx={{ 
                              fontWeight: 600,
                              borderWidth: 2
                            }}
                          />
                        )}
                      </Box>

                      <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 3 }}>
                        {platform.description}
                      </Typography>

                      <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                        KEY FEATURES:
                      </Typography>
                      <Box component="ul" sx={{ pl: 2, mb: 3 }}>
                        {platform.features.map((feature, j) => (
                          <Typography component="li" variant="body2" key={j} sx={{ mb: 1 }}>
                            {feature}
                          </Typography>
                        ))}
                      </Box>
                    </Box>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: 12,
          backgroundColor: 'white',
        }}
      >
        <Container maxWidth="md">
          <Paper
            component={m.div}
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
              Ready to Connect Your Accounts?
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
              Start managing all your social media platforms from one powerful dashboard.
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              component="a"
              href="https://app.multipost.pro"
              target="_blank"
              rel="noopener noreferrer"
              endIcon={<ArrowForwardIcon />}
              sx={{
                px: 5,
                py: 1.5,
                fontSize: '1.1rem',
              }}
            >
              Get Started Today
            </Button>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default PlatformsPage; 