import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import SEO from '../components/SEO';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Button, 
  useTheme,
  Paper,
  Divider
} from '@mui/material';
import { motion } from 'framer-motion';

// Feature Icons
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import SpeedIcon from '@mui/icons-material/Speed';
import ScheduleIcon from '@mui/icons-material/Schedule';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SecurityIcon from '@mui/icons-material/Security';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import EmailIcon from '@mui/icons-material/Email';
import SettingsIcon from '@mui/icons-material/Settings';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ImageIcon from '@mui/icons-material/Image';
import SubtitlesIcon from '@mui/icons-material/Subtitles';
import HistoryIcon from '@mui/icons-material/History';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DevicesIcon from '@mui/icons-material/Devices';
import StorageIcon from '@mui/icons-material/Storage';
import CodeIcon from '@mui/icons-material/Code';

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

const FeaturesPage = () => {
  const theme = useTheme();

  const features = [
    {
      title: 'Multi-Platform Upload',
      description: 'Upload videos to YouTube, Facebook, TikTok and more from one intuitive interface. Save time and streamline your workflow.',
      icon: <CloudUploadIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
      category: 'core'
    },
    {
      title: 'Batch Processing',
      description: 'Prepare and upload multiple videos simultaneously. Perfect for content creators with regular posting schedules.',
      icon: <SpeedIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
      category: 'core'
    },
    {
      title: 'Scheduled Uploads',
      description: 'Plan your content calendar by scheduling uploads at specific dates and times across all platforms.',
      icon: <ScheduleIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
      category: 'core'
    },
    {
      title: 'Video Management',
      description: 'Organize and manage your video library across all connected accounts from a single dashboard.',
      icon: <VideoLibraryIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
      category: 'core'
    },
    {
      title: 'Secure Account Integration',
      description: 'Connect your social media accounts securely using OAuth. We never store your credentials.',
      icon: <SecurityIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
      category: 'security'
    },
    {
      title: 'Performance Analytics',
      description: 'Track video performance metrics across platforms to optimize your content strategy.',
      icon: <AnalyticsIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
      category: 'analytics'
    },
    {
      title: 'Email Notifications',
      description: 'Receive notifications when uploads complete or encounter issues.',
      icon: <EmailIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
      category: 'tools'
    },
    {
      title: 'Advanced Settings',
      description: 'Fine-tune upload parameters like privacy settings, categories, and tags for each platform.',
      icon: <SettingsIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
      category: 'tools'
    },
    {
      title: 'Template Management',
      description: 'Create reusable templates for video titles, descriptions, and tags to maintain consistency.',
      icon: <FormatListBulletedIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
      category: 'tools'
    },
    {
      title: 'Thumbnail Tools',
      description: 'Design and manage custom thumbnails for your videos across platforms.',
      icon: <ImageIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
      category: 'tools'
    },
    {
      title: 'Caption Management',
      description: 'Add, edit and manage captions and subtitles for your videos to improve accessibility.',
      icon: <SubtitlesIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
      category: 'tools'
    },
    {
      title: 'Upload History',
      description: 'Access detailed logs of all uploads, including any errors or issues that occurred.',
      icon: <HistoryIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
      category: 'tools'
    },
    {
      title: 'Cross-Device Support',
      description: 'Access your account from desktop, tablet, or mobile devices with responsive design.',
      icon: <DevicesIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
      category: 'platform'
    },
    {
      title: 'High-Volume Processing',
      description: 'Handle large batches of videos with optimized processing and efficient resource management.',
      icon: <StorageIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
      category: 'platform'
    },
    {
      title: 'API Access',
      description: 'Integrate with our platform programmatically for custom workflows (Enterprise plans only).',
      icon: <CodeIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
      category: 'platform'
    },
  ];

  // Filter features by category
  const coreFeatures = features.filter(feature => feature.category === 'core');
  const toolFeatures = features.filter(feature => feature.category === 'tools');
  const platformFeatures = features.filter(feature => feature.category === 'platform' || feature.category === 'security' || feature.category === 'analytics');

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <SEO
        title="Features"
        description="Explore MultiPost's powerful features: multi-platform uploads, batch processing, scheduled publishing, analytics, and more for content creators."
        path="/features"
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
                  Powerful Features for <Box component="span" sx={{ color: theme.palette.secondary.main }}>Content Creators</Box>
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
                  MultiPost offers a comprehensive suite of tools designed to streamline your content management workflow.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Core Features Section */}
      <Box
        sx={{
          py: 10,
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Container maxWidth="lg">
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            sx={{ 
              mb: 8,
            }}
          >
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontWeight: 700,
                textAlign: 'center',
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
              Core Features
            </Typography>
            <Typography
              variant="h5"
              color="textSecondary"
              sx={{
                textAlign: 'center',
                maxWidth: 700,
                mx: 'auto',
                mb: 6,
              }}
            >
              Essential tools that power your content distribution
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
              {coreFeatures.map((feature, i) => (
                <Grid item xs={12} sm={6} key={i}>
                  <Card
                    component={motion.div}
                    variants={fadeInUp}
                    sx={{
                      height: '100%',
                      borderRadius: 4,
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      display: 'flex',
                      overflow: 'hidden',
                    }}
                    elevation={0}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        p: 3,
                        backgroundColor: theme.palette.primary.main + '08',
                        width: 100,
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <CardContent sx={{ p: 3, flex: 1 }}>
                      <Typography variant="h5" component="h3" gutterBottom fontWeight={600}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Tool Features Section */}
      <Box
        sx={{
          py: 10,
          backgroundColor: 'white',
        }}
      >
        <Container maxWidth="lg">
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            sx={{ 
              mb: 8,
            }}
          >
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontWeight: 700,
                textAlign: 'center',
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
              Tools & Utilities
            </Typography>
            <Typography
              variant="h5"
              color="textSecondary"
              sx={{
                textAlign: 'center',
                maxWidth: 700,
                mx: 'auto',
                mb: 6,
              }}
            >
              Advanced capabilities to enhance your workflow
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
              {toolFeatures.map((feature, i) => (
                <Grid item xs={12} sm={6} md={4} key={i}>
                  <Card
                    component={motion.div}
                    variants={fadeInUp}
                    sx={{
                      height: '100%',
                      borderRadius: 4,
                      p: 3,
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      background: 'linear-gradient(135deg, white 0%, #fafafa 100%)',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                    elevation={0}
                  >
                    <Box sx={{ mb: 2 }}>{feature.icon}</Box>
                    <Typography variant="h5" component="h3" gutterBottom fontWeight={600}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ flexGrow: 1 }}>
                      {feature.description}
                    </Typography>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Platform Features Section */}
      <Box
        sx={{
          py: 10,
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Container maxWidth="lg">
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            sx={{ 
              mb: 8,
            }}
          >
            <Typography
              variant="h2"
              gutterBottom
              sx={{
                fontWeight: 700,
                textAlign: 'center',
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
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 2,
                },
              }}
            >
              Platform & Infrastructure
            </Typography>
            <Typography
              variant="h5"
              color="textSecondary"
              sx={{
                textAlign: 'center',
                maxWidth: 700,
                mx: 'auto',
                mb: 6,
              }}
            >
              Enterprise-grade capabilities and security
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
              {platformFeatures.map((feature, i) => (
                <Grid item xs={12} sm={6} md={4} key={i}>
                  <Card
                    component={motion.div}
                    variants={fadeInUp}
                    sx={{
                      height: '100%',
                      borderRadius: 4,
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      display: 'flex',
                      flexDirection: 'column',
                      overflow: 'visible',
                    }}
                    elevation={0}
                  >
                    <CardContent sx={{ p: 3, pt: 6, pb: 4, position: 'relative' }}>
                      <Box 
                        sx={{ 
                          position: 'absolute',
                          top: -25,
                          left: 20,
                          backgroundColor: 'white',
                          width: 60,
                          height: 60,
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                        }}
                      >
                        {feature.icon}
                      </Box>
                      <Typography variant="h5" component="h3" gutterBottom fontWeight={600}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </CardContent>
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
              Ready to Transform Your Workflow?
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
              Choose the plan that's right for you and start managing your content more efficiently today.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              component={RouterLink}
              to="/pricing"
              endIcon={<ArrowForwardIcon />}
              sx={{
                px: 5,
                py: 1.5,
                fontSize: '1.1rem',
              }}
            >
              View Pricing Plans
            </Button>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default FeaturesPage; 