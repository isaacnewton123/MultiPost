import React, { useState } from 'react';
import SEO from '../components/SEO';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  TextField,
  InputAdornment,
  Card,
  CardContent,
  Button,
  Breadcrumbs,
  Link,
  Tabs,
  Tab,
  useTheme
} from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

// Icons
import SearchIcon from '@mui/icons-material/Search';
import ArticleIcon from '@mui/icons-material/Article';
import CodeIcon from '@mui/icons-material/Code';
import HelpIcon from '@mui/icons-material/Help';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import MusicNoteIcon from '@mui/icons-material/MusicNote'; // For TikTok
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ScheduleIcon from '@mui/icons-material/Schedule';

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

// Tab panel component
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ pt: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const DocumentationPage = () => {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Documentation categories
  const categories = [
    { name: 'Getting Started', icon: <ArticleIcon color="primary" /> },
    { name: 'Platform Integrations', icon: <CodeIcon color="primary" /> },
    { name: 'API Documentation', icon: <CodeIcon color="primary" /> },
    { name: 'FAQs', icon: <HelpIcon color="primary" /> },
    { name: 'Tutorials', icon: <ArticleIcon color="primary" /> },
    { name: 'Best Practices', icon: <BookmarkIcon color="primary" /> },
  ];

  // Documentation sections
  const platformDocs = [
    { 
      name: 'YouTube Integration', 
      icon: <YouTubeIcon sx={{ color: '#FF0000' }} />,
      topics: ['Authentication', 'Video Upload', 'Playlist Management', 'Comment Management']
    },
    { 
      name: 'Facebook Integration', 
      icon: <FacebookIcon sx={{ color: '#4267B2' }} />,
      topics: ['Page Authorization', 'Video Upload', 'Publishing to Timeline', 'Insights']
    },
    { 
      name: 'TikTok Integration', 
      icon: <MusicNoteIcon sx={{ color: '#000000' }} />,
      topics: ['Account Connection', 'Video Upload', 'Hashtag Management']
    },
    { 
      name: 'Instagram Integration', 
      icon: <InstagramIcon sx={{ color: '#C13584' }} />,
      topics: ['Profile Connection', 'Reels Upload', 'Story Publishing']
    },
  ];

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <SEO
        title="Documentation"
        description="Get started with MultiPost. Guides, API references, and tutorials for multi-platform video distribution."
        path="/docs"
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
              Documentation & <Box component="span" sx={{ color: theme.palette.secondary.main }}>Guides</Box>
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
              Everything you need to know about using MultiPost effectively. Explore our guides, tutorials, and API documentation.
            </Typography>

            {/* Search bar */}
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}
            >
              <TextField
                fullWidth
                placeholder="Search documentation..."
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: 'white' }} />
                    </InputAdornment>
                  ),
                  sx: {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: 2,
                    color: 'white',
                    '&::placeholder': {
                      color: 'rgba(255, 255, 255, 0.7)',
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255, 255, 255, 0.5)',
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'white',
                    },
                  }
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Documentation Content Section */}
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
          {/* Breadcrumbs */}
          <Box
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            sx={{ mb: 4 }}
          >
            <Breadcrumbs separator={<KeyboardArrowRightIcon fontSize="small" />}>
              <Link component={RouterLink} to="/" color="inherit" underline="hover">
                Home
              </Link>
              <Typography color="text.primary">Documentation</Typography>
            </Breadcrumbs>
          </Box>

          <Grid 
            container 
            spacing={4}
            component={motion.div}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Sidebar */}
            <Grid item xs={12} md={3}>
              <Paper
                elevation={0}
                component={motion.div}
                variants={fadeInUp}
                sx={{ 
                  p: 3, 
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderRadius: 3,
                  mb: 4 
                }}
              >
                <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                  Documentation
                </Typography>
                <List component="nav" dense>
                  {categories.map((category, index) => (
                    <ListItem 
                      button 
                      key={index}
                      selected={index === 0}
                      sx={{ 
                        borderRadius: 1,
                        mb: 0.5,
                        '&.Mui-selected': {
                          backgroundColor: 'rgba(30, 78, 140, 0.08)',
                          '&:hover': {
                            backgroundColor: 'rgba(30, 78, 140, 0.12)',
                          }
                        }
                      }}
                    >
                      <ListItemIcon sx={{ minWidth: 36 }}>
                        {category.icon}
                      </ListItemIcon>
                      <ListItemText primary={category.name} />
                    </ListItem>
                  ))}
                </List>
              </Paper>
              
              <Paper
                elevation={0}
                component={motion.div}
                variants={fadeInUp}
                sx={{ 
                  p: 3, 
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderRadius: 3,
                }}
              >
                <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                  Need Help?
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Can't find what you're looking for? Our support team is ready to assist you.
                </Typography>
                <Button 
                  variant="contained" 
                  color="primary"
                  component={RouterLink}
                  to="/contact"
                  fullWidth
                >
                  Contact Support
                </Button>
              </Paper>
            </Grid>

            {/* Main content */}
            <Grid item xs={12} md={9} component={motion.div} variants={fadeInUp}>
              <Paper
                elevation={0}
                sx={{ 
                  p: { xs: 3, md: 4 }, 
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderRadius: 3,
                }}
              >
                <Typography variant="h4" fontWeight={700} sx={{ mb: 4 }}>
                  Getting Started with MultiPost
                </Typography>

                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs 
                    value={tabValue} 
                    onChange={handleTabChange} 
                    aria-label="documentation tabs"
                    sx={{
                      '& .MuiTab-root': {
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        px: { xs: 1, sm: 2 },
                        minWidth: 0,
                      }
                    }}
                  >
                    <Tab label="Overview" />
                    <Tab label="Quick Start" />
                    <Tab label="Platform Integrations" />
                  </Tabs>
                </Box>

                <TabPanel value={tabValue} index={0}>
                  <Typography variant="h5" fontWeight={600} sx={{ mb: 2 }}>
                    Welcome to MultiPost
                  </Typography>
                  <Typography paragraph>
                    MultiPost is a powerful platform that allows content creators to streamline their workflow by uploading videos to multiple social media platforms simultaneously. This documentation will guide you through setting up your account, integrating with various platforms, and making the most of our features.
                  </Typography>

                  <Typography variant="h6" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
                    Key Features
                  </Typography>

                  <Grid container spacing={3} sx={{ mb: 4 }}>
                    <Grid item xs={12} sm={6}>
                      <Card sx={{ height: '100%', borderRadius: 2, boxShadow: 'none', border: '1px solid rgba(0, 0, 0, 0.08)' }}>
                        <CardContent>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <CloudUploadIcon color="primary" sx={{ mr: 1 }} />
                            <Typography variant="subtitle1" fontWeight={600}>
                              Multi-Platform Upload
                            </Typography>
                          </Box>
                          <Typography variant="body2" color="text.secondary">
                            Upload your videos to multiple platforms with a single action, saving time and effort.
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Card sx={{ height: '100%', borderRadius: 2, boxShadow: 'none', border: '1px solid rgba(0, 0, 0, 0.08)' }}>
                        <CardContent>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <ScheduleIcon color="primary" sx={{ mr: 1 }} />
                            <Typography variant="subtitle1" fontWeight={600}>
                              Scheduled Publishing
                            </Typography>
                          </Box>
                          <Typography variant="body2" color="text.secondary">
                            Plan your content calendar by scheduling uploads for specific dates and times.
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  </Grid>

                  <Typography variant="h6" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
                    Supported Platforms
                  </Typography>

                  <Grid container spacing={2}>
                    {platformDocs.map((platform, index) => (
                      <Grid item xs={6} sm={3} key={index}>
                        <Card 
                          sx={{ 
                            textAlign: 'center', 
                            py: 2, 
                            borderRadius: 2, 
                            boxShadow: 'none', 
                            border: '1px solid rgba(0, 0, 0, 0.08)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              transform: 'translateY(-5px)',
                              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                            }
                          }}
                        >
                          <Box sx={{ mb: 1 }}>
                            {platform.icon}
                          </Box>
                          <Typography variant="subtitle2" fontWeight={600}>
                            {platform.name}
                          </Typography>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </TabPanel>

                <TabPanel value={tabValue} index={1}>
                  <Typography variant="h5" fontWeight={600} sx={{ mb: 3 }}>
                    Quick Start Guide
                  </Typography>
                  
                  <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                    1. Create Your Account
                  </Typography>
                  <Typography paragraph>
                    Sign up for MultiPost by visiting our website and creating an account. You'll need to provide a valid email address and create a secure password.
                  </Typography>
                  
                  <Typography variant="h6" fontWeight={600} sx={{ mt: 3, mb: 2 }}>
                    2. Connect Your Social Media Accounts
                  </Typography>
                  <Typography paragraph>
                    Connect your social media accounts by authorizing MultiPost to publish content on your behalf. We use secure OAuth protocols for authentication.
                  </Typography>
                  
                  <Typography variant="h6" fontWeight={600} sx={{ mt: 3, mb: 2 }}>
                    3. Upload Your First Video
                  </Typography>
                  <Typography paragraph>
                    Upload a video from your dashboard, add titles, descriptions, and tags, then select the platforms where you want to publish.
                  </Typography>

                  <Divider sx={{ my: 4 }} />
                  
                  <Box sx={{ textAlign: 'center' }}>
                    <Button 
                      variant="contained" 
                      color="secondary"
                      size="large"
                      component="a"
                      href="/contact"
                      target="_blank"
                      rel="noopener noreferrer"
                      endIcon={<ArrowForwardIcon />}
                      sx={{ px: 4 }}
                    >
                      Pre-Marketing Now
                    </Button>
                  </Box>
                </TabPanel>

                <TabPanel value={tabValue} index={2}>
                  <Typography variant="h5" fontWeight={600} sx={{ mb: 3 }}>
                    Platform Integrations
                  </Typography>
                  
                  {platformDocs.map((platform, index) => (
                    <Box key={index} sx={{ mb: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Box sx={{ mr: 2 }}>{platform.icon}</Box>
                        <Typography variant="h6" fontWeight={600}>
                          {platform.name}
                        </Typography>
                      </Box>
                      
                      <Typography paragraph color="text.secondary" sx={{ ml: 4 }}>
                        Learn how to connect and upload videos to {platform.name.split(' ')[0]}.
                      </Typography>
                      
                      <List dense sx={{ ml: 4 }}>
                        {platform.topics.map((topic, topicIndex) => (
                          <ListItem 
                            button 
                            key={topicIndex}
                            sx={{ 
                              py: 0.5,
                              borderRadius: 1,
                            }}
                          >
                            <ListItemText 
                              primary={topic} 
                              primaryTypographyProps={{ 
                                variant: 'body2',
                                color: 'primary',
                              }} 
                            />
                            <KeyboardArrowRightIcon color="action" fontSize="small" />
                          </ListItem>
                        ))}
                      </List>
                      
                      {index < platformDocs.length - 1 && <Divider sx={{ my: 3 }} />}
                    </Box>
                  ))}
                </TabPanel>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default DocumentationPage; 