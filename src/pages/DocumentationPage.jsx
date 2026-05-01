import React, { useState } from 'react';
import SEO from '../components/SEO';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useTheme } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import { m } from 'framer-motion';
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
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import SettingsIcon from '@mui/icons-material/Settings';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import InfoIcon from '@mui/icons-material/Info';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import SubtitlesIcon from '@mui/icons-material/Subtitles';
import ImageIcon from '@mui/icons-material/Image';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SyncIcon from '@mui/icons-material/Sync';
import StorageIcon from '@mui/icons-material/Storage';
import LockIcon from '@mui/icons-material/Lock';
import NotificationsIcon from '@mui/icons-material/Notifications';
import GroupIcon from '@mui/icons-material/Group';
import DevicesIcon from '@mui/icons-material/Devices';

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
      id={`docs-tabpanel-${index}`}
      aria-labelledby={`docs-tab-${index}`}
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

// Reusable code block component
function CodeBlock({ children, language = 'text' }) {
  return (
    <Box
      component="pre"
      sx={{
        backgroundColor: '#1e1e2e',
        color: '#cdd6f4',
        p: 3,
        borderRadius: 2,
        overflow: 'auto',
        fontSize: '0.85rem',
        fontFamily: '"Fira Code", "Roboto Mono", monospace',
        lineHeight: 1.7,
        border: '1px solid rgba(255,255,255,0.08)',
        my: 2,
      }}
    >
      <code>{children}</code>
    </Box>
  );
}

// Reusable info callout component
function Callout({ type = 'info', children }) {
  const config = {
    info:    { severity: 'info',    icon: <InfoIcon />,           color: 'info' },
    tip:     { severity: 'success', icon: <TipsAndUpdatesIcon />, color: 'success' },
    warning: { severity: 'warning', icon: <WarningAmberIcon />,   color: 'warning' },
  };
  const c = config[type] || config.info;
  return (
    <Alert severity={c.severity} icon={c.icon} sx={{ my: 2, borderRadius: 2 }}>
      {children}
    </Alert>
  );
}

const DocumentationPage = () => {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);
  const [sidebarSection, setSidebarSection] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Documentation categories (sidebar)
  const categories = [
    { name: 'Getting Started', icon: <ArticleIcon color="primary" /> },
    { name: 'Uploading Videos', icon: <CloudUploadIcon color="primary" /> },
    { name: 'Platform Integrations', icon: <CodeIcon color="primary" /> },
    { name: 'Scheduling', icon: <ScheduleIcon color="primary" /> },
    { name: 'Account & Billing', icon: <SettingsIcon color="primary" /> },
    { name: 'Best Practices', icon: <BookmarkIcon color="primary" /> },
    { name: 'Troubleshooting', icon: <HelpIcon color="primary" /> },
  ];

  // Platform integration data
  const platformDocs = [
    { 
      name: 'YouTube', 
      icon: <YouTubeIcon sx={{ color: '#FF0000' }} />,
      color: '#FF0000',
      description: 'Upload videos, Shorts, manage playlists, thumbnails, end screens, cards, chapters, and privacy settings.',
      auth: 'OAuth 2.0 via Google Account. You will be redirected to Google to grant MultiPost access to your YouTube channel.',
      formats: 'MP4, MOV, AVI, WMV, FLV, WebM',
      maxSize: '256 GB (or 12 hours, whichever is less)',
      features: ['Video uploads', 'Shorts support', 'Custom thumbnails', 'End screens & cards', 'Video chapters', 'Playlist management', 'Scheduled publishing', 'Privacy settings (Public, Unlisted, Private)'],
    },
    { 
      name: 'Facebook', 
      icon: <FacebookIcon sx={{ color: '#1877F2' }} />,
      color: '#1877F2',
      description: 'Publish videos to your personal timeline, business pages, or groups with audience targeting.',
      auth: 'OAuth 2.0 via Facebook Login. Grant page publishing permissions for your business pages.',
      formats: 'MP4, MOV (H.264 codec recommended)',
      maxSize: '10 GB (max 240 minutes)',
      features: ['Timeline & Page uploads', 'Reels support', 'Audience targeting', 'Auto-sharing to groups', 'Caption support', 'Engagement settings', 'Scheduled publishing'],
    },
    { 
      name: 'TikTok', 
      icon: <MusicNoteIcon sx={{ color: '#000000' }} />,
      color: '#EE1D52',
      description: 'Upload short-form vertical videos with hashtag management and sound integration.',
      auth: 'OAuth 2.0 via TikTok Login. You will be redirected to TikTok to authorize access.',
      formats: 'MP4, WebM (vertical 9:16 recommended)',
      maxSize: '4 GB (max 10 minutes)',
      features: ['Direct video uploads', 'Hashtag management', 'Caption support', 'Privacy settings', 'Comment controls', 'Duet/Stitch settings'],
    },
    { 
      name: 'Instagram', 
      icon: <InstagramIcon sx={{ color: '#C13584' }} />,
      color: '#C13584',
      description: 'Publish Reels, feed videos, and Stories. Optimize for Instagram\'s vertical format.',
      auth: 'OAuth 2.0 via Instagram/Facebook Login. Requires a Professional or Creator account.',
      formats: 'MP4, MOV (H.264, min 3 seconds, max 90 seconds for Reels)',
      maxSize: '4 GB',
      features: ['Reels support', 'Feed video uploads', 'Story publishing', 'Caption templates', 'Hashtag management', 'Location tagging', 'Cover image selection'],
    },
  ];

  // HowTo JSON-LD schema based on the Quick Start guide
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Distribute Videos with MultiPost',
    description: 'A step-by-step guide to uploading and distributing your videos across multiple social media platforms using MultiPost.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Create Your Account',
        text: 'Sign up for MultiPost by visiting our website and creating an account. You\'ll need to provide a valid email address and create a secure password.',
        url: 'https://multipost.pro/docs',
      },
      {
        '@type': 'HowToStep',
        name: 'Connect Your Social Media Accounts',
        text: 'Connect your social media accounts by authorizing MultiPost to publish content on your behalf. We use secure OAuth protocols for authentication.',
        url: 'https://multipost.pro/docs',
      },
      {
        '@type': 'HowToStep',
        name: 'Upload Your First Video',
        text: 'Upload a video from your dashboard, add titles, descriptions, and tags, then select the platforms where you want to publish.',
        url: 'https://multipost.pro/docs',
      },
    ],
  };

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <SEO
        title="Documentation — Free Auto Posting Tool"
        description="Get started with MultiPost for free. Guides, API references, and tutorials for free multi-platform video distribution. Start for Free today."
        path="/docs"
        schema={howToSchema}
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
              Everything you need to know about using MultiPost effectively. Explore our guides, tutorials, and platform integration documentation.
            </Typography>

            {/* Search bar */}
            <Box
              component={m.div}
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
            component={m.div}
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
            component={m.div}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Sidebar */}
            <Grid item xs={12} md={3}>
              <Paper
                elevation={0}
                component={m.div}
                variants={fadeInUp}
                sx={{ 
                  p: 3, 
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderRadius: 3,
                  mb: 4,
                  position: { md: 'sticky' },
                  top: { md: 100 },
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
                      selected={sidebarSection === index}
                      onClick={() => {
                        setSidebarSection(index);
                        setTabValue(index);
                      }}
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
            </Grid>

            {/* Main content */}
            <Grid item xs={12} md={9} component={m.div} variants={fadeInUp}>
              <Paper
                elevation={0}
                sx={{ 
                  p: { xs: 3, md: 4 }, 
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderRadius: 3,
                }}
              >
                <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 1 }}>
                  <Tabs 
                    value={tabValue} 
                    onChange={handleTabChange} 
                    aria-label="documentation tabs"
                    variant="scrollable"
                    scrollButtons="auto"
                    sx={{
                      '& .MuiTab-root': {
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        px: { xs: 1, sm: 2 },
                        minWidth: 0,
                      }
                    }}
                  >
                    <Tab label="Getting Started" />
                    <Tab label="Uploading Videos" />
                    <Tab label="Platforms" />
                    <Tab label="Scheduling" />
                    <Tab label="Account & Billing" />
                    <Tab label="Best Practices" />
                    <Tab label="Troubleshooting" />
                  </Tabs>
                </Box>

                {/* ═══════════════════════════════════════════════════
                    TAB 0 — GETTING STARTED
                    ═══════════════════════════════════════════════════ */}
                <TabPanel value={tabValue} index={0}>
                  <Typography variant="h4" component="h2" fontWeight={700} sx={{ mb: 2 }}>
                    Getting Started with MultiPost
                  </Typography>
                  <Typography paragraph color="text.secondary" sx={{ mb: 3 }}>
                    MultiPost is a comprehensive platform that allows content creators to upload and distribute short-form videos to multiple social media platforms simultaneously — YouTube, TikTok, Instagram, Facebook, and more — all from a single dashboard.
                  </Typography>

                  <Callout type="info">
                    MultiPost is free to start — no credit card required. Sign up today and begin distributing your content across platforms in minutes.
                  </Callout>

                  {/* Quick Start Stepper */}
                  <Typography variant="h5" component="h3" fontWeight={600} sx={{ mt: 5, mb: 3 }}>
                    Quick Start Guide
                  </Typography>

                  <Stepper orientation="vertical" sx={{ mb: 4 }}>
                    <Step active expanded>
                      <StepLabel>
                        <Typography variant="h6" fontWeight={600}>Create Your Account</Typography>
                      </StepLabel>
                      <StepContent>
                        <Typography paragraph color="text.secondary">
                          Visit <strong>multipost.pro</strong> and click <strong>"Start for Free"</strong> to create your account instantly — no credit card required. Set up your account with your email address and a secure password.
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Your account gives you access to the MultiPost dashboard where you can manage all your connected platforms, upload queue, and analytics.
                        </Typography>
                      </StepContent>
                    </Step>
                    <Step active expanded>
                      <StepLabel>
                        <Typography variant="h6" fontWeight={600}>Connect Your Social Media Accounts</Typography>
                      </StepLabel>
                      <StepContent>
                        <Typography paragraph color="text.secondary">
                          Navigate to <strong>Settings → Connected Accounts</strong> in your dashboard. Click the platform you want to connect and follow the OAuth authorization flow. MultiPost uses industry-standard OAuth 2.0 — we never store your passwords.
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Currently supported: YouTube, Facebook Pages, TikTok, and Instagram (Professional/Creator accounts). You can connect multiple accounts per platform depending on your plan.
                        </Typography>
                      </StepContent>
                    </Step>
                    <Step active expanded>
                      <StepLabel>
                        <Typography variant="h6" fontWeight={600}>Upload Your First Video</Typography>
                      </StepLabel>
                      <StepContent>
                        <Typography paragraph color="text.secondary">
                          Click <strong>"New Upload"</strong> from your dashboard. Drag and drop your video file (or click to browse). Add your title, description, tags, and thumbnail. Then select the platforms you want to publish to and click <strong>"Distribute"</strong>.
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          MultiPost will automatically format your video to meet each platform's requirements and upload them in parallel. You'll receive notifications as each upload completes.
                        </Typography>
                      </StepContent>
                    </Step>
                    <Step active expanded>
                      <StepLabel>
                        <Typography variant="h6" fontWeight={600}>Monitor & Manage</Typography>
                      </StepLabel>
                      <StepContent>
                        <Typography paragraph color="text.secondary">
                          Track the status of all your uploads from the <strong>Activity</strong> page. View which platforms succeeded, any errors that occurred, and basic engagement metrics once your content goes live.
                        </Typography>
                      </StepContent>
                    </Step>
                  </Stepper>

                  {/* Key Features */}
                  <Typography variant="h5" component="h3" fontWeight={600} sx={{ mt: 5, mb: 3 }}>
                    Core Features Overview
                  </Typography>

                  <Grid container spacing={2} sx={{ mb: 4 }}>
                    {[
                      { icon: <CloudUploadIcon color="primary" />, title: 'Multi-Platform Upload', desc: 'Upload your videos to multiple platforms with a single action, saving hours of manual work.' },
                      { icon: <ScheduleIcon color="primary" />, title: 'Scheduled Publishing', desc: 'Plan your content calendar by scheduling uploads for specific dates and times across all platforms.' },
                      { icon: <VideoLibraryIcon color="primary" />, title: 'Video Management', desc: 'Organize your video library, manage metadata, and track upload history from one dashboard.' },
                      { icon: <SpeedIcon color="primary" />, title: 'Batch Processing', desc: 'Prepare and upload multiple videos simultaneously. Perfect for creators with regular posting schedules.' },
                      { icon: <ImageIcon color="primary" />, title: 'Thumbnail Tools', desc: 'Upload custom thumbnails per platform. Each platform gets optimized dimensions automatically.' },
                      { icon: <SubtitlesIcon color="primary" />, title: 'Captions & Subtitles', desc: 'Upload SRT files or auto-generate captions. Multi-language support included.' },
                      { icon: <AnalyticsIcon color="primary" />, title: 'Performance Analytics', desc: 'Track video performance across platforms with unified metrics and insights.' },
                      { icon: <SecurityIcon color="primary" />, title: 'Secure OAuth', desc: 'We never store your passwords. All connections use industry-standard OAuth 2.0 protocols.' },
                    ].map((feature, i) => (
                      <Grid item xs={12} sm={6} key={i}>
                        <Card sx={{ height: '100%', borderRadius: 2, boxShadow: 'none', border: '1px solid rgba(0, 0, 0, 0.08)' }}>
                          <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                              {feature.icon}
                              <Typography variant="subtitle1" fontWeight={600} sx={{ ml: 1 }}>
                                {feature.title}
                              </Typography>
                            </Box>
                            <Typography variant="body2" color="text.secondary">
                              {feature.desc}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>

                  {/* System Requirements */}
                  <Typography variant="h5" component="h3" fontWeight={600} sx={{ mt: 5, mb: 3 }}>
                    System Requirements
                  </Typography>
                  <Typography paragraph color="text.secondary">
                    MultiPost is a web-based application that works in any modern browser. No software installation is required.
                  </Typography>
                  <TableContainer component={Paper} variant="outlined" sx={{ borderRadius: 2, mb: 3 }}>
                    <Table size="small">
                      <TableHead>
                        <TableRow sx={{ backgroundColor: 'rgba(0,0,0,0.02)' }}>
                          <TableCell sx={{ fontWeight: 600 }}>Requirement</TableCell>
                          <TableCell sx={{ fontWeight: 600 }}>Details</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {[
                          ['Browser', 'Chrome 90+, Firefox 88+, Safari 14+, Edge 90+'],
                          ['Internet Speed', 'Minimum 5 Mbps upload speed recommended'],
                          ['Operating System', 'Web (any OS), desktop apps coming for Windows, macOS'],
                          ['Mobile', 'iOS and Android apps planned for future release'],
                          ['Screen Resolution', 'Minimum 1024×768, responsive on mobile'],
                        ].map(([req, detail], i) => (
                          <TableRow key={i}>
                            <TableCell sx={{ fontWeight: 500 }}>{req}</TableCell>
                            <TableCell>{detail}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </TabPanel>

                {/* ═══════════════════════════════════════════════════
                    TAB 1 — UPLOADING VIDEOS
                    ═══════════════════════════════════════════════════ */}
                <TabPanel value={tabValue} index={1}>
                  <Typography variant="h4" component="h2" fontWeight={700} sx={{ mb: 2 }}>
                    Uploading Videos
                  </Typography>
                  <Typography paragraph color="text.secondary">
                    Learn how to upload, configure, and distribute your video content across all connected platforms.
                  </Typography>

                  {/* Supported Formats */}
                  <Typography variant="h5" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
                    Supported Video Formats
                  </Typography>
                  <TableContainer component={Paper} variant="outlined" sx={{ borderRadius: 2, mb: 3 }}>
                    <Table size="small">
                      <TableHead>
                        <TableRow sx={{ backgroundColor: 'rgba(0,0,0,0.02)' }}>
                          <TableCell sx={{ fontWeight: 600 }}>Format</TableCell>
                          <TableCell sx={{ fontWeight: 600 }}>Extension</TableCell>
                          <TableCell sx={{ fontWeight: 600 }}>Platform Support</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {[
                          ['MPEG-4', '.mp4', 'All platforms (recommended)'],
                          ['QuickTime', '.mov', 'YouTube, Facebook, Instagram'],
                          ['AVI', '.avi', 'YouTube, Facebook'],
                          ['Windows Media', '.wmv', 'YouTube'],
                          ['WebM', '.webm', 'YouTube, TikTok'],
                          ['Flash Video', '.flv', 'YouTube'],
                        ].map(([format, ext, support], i) => (
                          <TableRow key={i}>
                            <TableCell sx={{ fontWeight: 500 }}>{format}</TableCell>
                            <TableCell><Chip label={ext} size="small" variant="outlined" /></TableCell>
                            <TableCell>{support}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>

                  <Callout type="tip">
                    For the best compatibility across all platforms, we recommend uploading in <strong>MP4 format</strong> with H.264 video codec and AAC audio codec. Resolution of 1080×1920 (9:16) for short-form vertical content.
                  </Callout>

                  {/* Upload Workflow */}
                  <Typography variant="h5" component="h3" fontWeight={600} sx={{ mt: 5, mb: 2 }}>
                    Upload Workflow
                  </Typography>

                  <Box sx={{ mb: 4 }}>
                    {[
                      { step: '1', title: 'Select your video file', desc: 'Drag and drop your video into the upload area, or click to browse your files. MultiPost supports files up to 256 GB depending on the target platform.' },
                      { step: '2', title: 'Add metadata', desc: 'Enter your video title, description, and tags. You can write one set of metadata and have it applied to all platforms, or customize per platform for better optimization.' },
                      { step: '3', title: 'Upload thumbnails', desc: 'Upload a custom thumbnail or select a frame from your video. MultiPost will auto-resize thumbnails to meet each platform\'s requirements.' },
                      { step: '4', title: 'Choose target platforms', desc: 'Select which connected platforms should receive this video. Toggle individual platforms on/off as needed.' },
                      { step: '5', title: 'Configure platform-specific settings', desc: 'Set privacy levels, categories, playlist assignments (YouTube), hashtags (TikTok/Instagram), and other per-platform options.' },
                      { step: '6', title: 'Publish or schedule', desc: 'Click "Distribute Now" to publish immediately, or use the scheduler to set a future date and time for each platform.' },
                    ].map((item, i) => (
                      <Box key={i} sx={{ display: 'flex', mb: 3 }}>
                        <Box sx={{
                          width: 36, height: 36, borderRadius: '50%',
                          backgroundColor: theme.palette.primary.main, color: 'white',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontWeight: 700, fontSize: '0.9rem', flexShrink: 0, mt: 0.5, mr: 2,
                        }}>
                          {item.step}
                        </Box>
                        <Box>
                          <Typography variant="subtitle1" fontWeight={600}>{item.title}</Typography>
                          <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
                        </Box>
                      </Box>
                    ))}
                  </Box>

                  {/* Per-Platform Customization */}
                  <Typography variant="h5" component="h3" fontWeight={600} sx={{ mt: 5, mb: 2 }}>
                    Per-Platform Customization
                  </Typography>
                  <Typography paragraph color="text.secondary">
                    While you can write shared metadata once, each platform has unique optimization opportunities. MultiPost lets you customize the following settings per platform:
                  </Typography>
                  <TableContainer component={Paper} variant="outlined" sx={{ borderRadius: 2, mb: 3 }}>
                    <Table size="small">
                      <TableHead>
                        <TableRow sx={{ backgroundColor: 'rgba(0,0,0,0.02)' }}>
                          <TableCell sx={{ fontWeight: 600 }}>Setting</TableCell>
                          <TableCell sx={{ fontWeight: 600 }} align="center">YouTube</TableCell>
                          <TableCell sx={{ fontWeight: 600 }} align="center">Facebook</TableCell>
                          <TableCell sx={{ fontWeight: 600 }} align="center">TikTok</TableCell>
                          <TableCell sx={{ fontWeight: 600 }} align="center">Instagram</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {[
                          ['Custom Title', true, true, false, false],
                          ['Description', true, true, true, true],
                          ['Tags / Hashtags', true, false, true, true],
                          ['Custom Thumbnail', true, true, false, true],
                          ['Privacy Settings', true, true, true, false],
                          ['Scheduled Publishing', true, true, false, true],
                          ['Captions / Subtitles', true, true, false, false],
                          ['Chapters / Sections', true, false, false, false],
                          ['End Screens & Cards', true, false, false, false],
                          ['Playlist Assignment', true, false, false, false],
                          ['Location Tagging', false, true, false, true],
                        ].map(([setting, yt, fb, tt, ig], i) => (
                          <TableRow key={i}>
                            <TableCell sx={{ fontWeight: 500 }}>{setting}</TableCell>
                            {[yt, fb, tt, ig].map((supported, j) => (
                              <TableCell key={j} align="center">
                                {supported ? <CheckCircleIcon sx={{ color: 'success.main', fontSize: 20 }} /> : <Typography variant="body2" color="text.disabled">—</Typography>}
                              </TableCell>
                            ))}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>

                  {/* Upload Limits */}
                  <Typography variant="h5" component="h3" fontWeight={600} sx={{ mt: 5, mb: 2 }}>
                    Upload Limits by Plan
                  </Typography>
                  <TableContainer component={Paper} variant="outlined" sx={{ borderRadius: 2, mb: 3 }}>
                    <Table size="small">
                      <TableHead>
                        <TableRow sx={{ backgroundColor: 'rgba(0,0,0,0.02)' }}>
                          <TableCell sx={{ fontWeight: 600 }}>Feature</TableCell>
                          <TableCell sx={{ fontWeight: 600 }} align="center">Free</TableCell>
                          <TableCell sx={{ fontWeight: 600 }} align="center">Basic</TableCell>
                          <TableCell sx={{ fontWeight: 600 }} align="center">Premium</TableCell>
                          <TableCell sx={{ fontWeight: 600 }} align="center">Enterprise</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {[
                          ['Daily Uploads', '1/day', '3/day', '5/day', '10/day'],
                          ['Scheduled Uploads', '5/month', '10/month', '30/month', 'Unlimited'],
                          ['Platform Connections', 'Unlimited', 'Unlimited', 'Unlimited', 'Unlimited'],
                          ['Custom Thumbnails', '✓', '✓', '✓', '✓'],
                          ['Basic Video Metadata', '✓', '✓', '✓', '✓'],
                          ['Captions & Subtitles', '—', '—', '✓', '✓'],
                          ['Video Chapters', '—', '—', '✓', '✓'],
                          ['Analytics & Insights', '—', '—', '—', '✓'],
                          ['API Access', '—', '—', '—', '✓'],
                        ].map(([feature, free, basic, premium, enterprise], i) => (
                          <TableRow key={i}>
                            <TableCell sx={{ fontWeight: 500 }}>{feature}</TableCell>
                            <TableCell align="center">{free}</TableCell>
                            <TableCell align="center">{basic}</TableCell>
                            <TableCell align="center">{premium}</TableCell>
                            <TableCell align="center">{enterprise}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </TabPanel>

                {/* ═══════════════════════════════════════════════════
                    TAB 2 — PLATFORM INTEGRATIONS
                    ═══════════════════════════════════════════════════ */}
                <TabPanel value={tabValue} index={2}>
                  <Typography variant="h4" component="h2" fontWeight={700} sx={{ mb: 2 }}>
                    Platform Integrations
                  </Typography>
                  <Typography paragraph color="text.secondary">
                    Detailed integration guides for each supported social media platform. Learn about authentication, supported features, video requirements, and platform-specific settings.
                  </Typography>
                  
                  {platformDocs.map((platform, index) => (
                    <Box key={index} sx={{ mb: 5 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Box sx={{ 
                          mr: 2, 
                          width: 48, height: 48, borderRadius: '50%',
                          backgroundColor: `${platform.color}15`,
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>
                          {platform.icon}
                        </Box>
                        <Box>
                          <Typography variant="h5" component="h3" fontWeight={700}>
                            {platform.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">{platform.description}</Typography>
                        </Box>
                      </Box>

                      <Box sx={{ ml: { xs: 0, sm: 8 } }}>
                        {/* Authentication */}
                        <Typography variant="subtitle1" fontWeight={600} sx={{ mt: 3, mb: 1 }}>
                          <LockIcon sx={{ fontSize: 18, mr: 0.5, verticalAlign: 'text-bottom' }} />
                          Authentication
                        </Typography>
                        <Typography variant="body2" color="text.secondary" paragraph>
                          {platform.auth}
                        </Typography>

                        {/* Requirements */}
                        <Typography variant="subtitle1" fontWeight={600} sx={{ mt: 2, mb: 1 }}>
                          <StorageIcon sx={{ fontSize: 18, mr: 0.5, verticalAlign: 'text-bottom' }} />
                          Video Requirements
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                          <Chip label={`Formats: ${platform.formats}`} size="small" variant="outlined" />
                          <Chip label={`Max size: ${platform.maxSize}`} size="small" variant="outlined" />
                        </Box>

                        {/* Features */}
                        <Typography variant="subtitle1" fontWeight={600} sx={{ mt: 2, mb: 1 }}>
                          <CheckCircleIcon sx={{ fontSize: 18, mr: 0.5, verticalAlign: 'text-bottom', color: 'success.main' }} />
                          Supported Features
                        </Typography>
                        <Grid container spacing={1} sx={{ mb: 2 }}>
                          {platform.features.map((feat, fi) => (
                            <Grid item xs={12} sm={6} key={fi}>
                              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <CheckCircleIcon sx={{ fontSize: 16, color: 'success.main', mr: 1 }} />
                                <Typography variant="body2">{feat}</Typography>
                              </Box>
                            </Grid>
                          ))}
                        </Grid>
                      </Box>
                      
                      {index < platformDocs.length - 1 && <Divider sx={{ my: 3 }} />}
                    </Box>
                  ))}

                  <Callout type="info">
                    More platforms are coming soon, including LinkedIn, Twitter/X, Pinterest, and Snapchat. Check our <Link component={RouterLink} to="/blog">blog</Link> for announcements.
                  </Callout>
                </TabPanel>

                {/* ═══════════════════════════════════════════════════
                    TAB 3 — SCHEDULING
                    ═══════════════════════════════════════════════════ */}
                <TabPanel value={tabValue} index={3}>
                  <Typography variant="h4" component="h2" fontWeight={700} sx={{ mb: 2 }}>
                    Scheduling & Content Calendar
                  </Typography>
                  <Typography paragraph color="text.secondary">
                    Plan your content strategy by scheduling uploads to go live at the optimal time for each platform. Available on Premium and Enterprise plans.
                  </Typography>

                  <Typography variant="h5" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
                    How Scheduling Works
                  </Typography>
                  <Typography paragraph color="text.secondary">
                    When creating an upload, instead of clicking "Distribute Now", use the scheduling option. You can set a specific date and time for each platform independently, or choose the same time across all platforms.
                  </Typography>

                  <Box sx={{ mb: 4 }}>
                    {[
                      { title: 'Time Zone Handling', desc: 'Your scheduled time is based on your local time zone as set in your account settings. MultiPost converts this to UTC internally and ensures each platform receives the correct publish time.' },
                      { title: 'Per-Platform Scheduling', desc: 'Set different publish times for each platform. For example, post to YouTube at 9 AM, TikTok at 12 PM, and Instagram at 6 PM to maximize engagement across audiences.' },
                      { title: 'Queue Management', desc: 'View all scheduled posts in your Content Calendar. Easily drag to reschedule, or click to edit metadata before a post goes live.' },
                      { title: 'Automatic Retry', desc: 'If a scheduled upload fails (e.g., due to a temporary API issue), MultiPost will automatically retry up to 3 times within the next 30 minutes.' },
                    ].map((item, i) => (
                      <Box key={i} sx={{ mb: 3, pl: 2, borderLeft: `3px solid ${theme.palette.primary.main}` }}>
                        <Typography variant="subtitle1" fontWeight={600}>{item.title}</Typography>
                        <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
                      </Box>
                    ))}
                  </Box>

                  <Typography variant="h5" component="h3" fontWeight={600} sx={{ mt: 5, mb: 2 }}>
                    Best Times to Post (General Guidelines)
                  </Typography>
                  <TableContainer component={Paper} variant="outlined" sx={{ borderRadius: 2, mb: 3 }}>
                    <Table size="small">
                      <TableHead>
                        <TableRow sx={{ backgroundColor: 'rgba(0,0,0,0.02)' }}>
                          <TableCell sx={{ fontWeight: 600 }}>Platform</TableCell>
                          <TableCell sx={{ fontWeight: 600 }}>Best Days</TableCell>
                          <TableCell sx={{ fontWeight: 600 }}>Best Times (Local)</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {[
                          ['YouTube', 'Thu – Sun', '12:00 PM – 4:00 PM'],
                          ['TikTok', 'Tue – Sat', '7:00 AM – 9:00 AM, 12:00 PM – 3:00 PM'],
                          ['Instagram', 'Tue – Fri', '11:00 AM – 1:00 PM, 7:00 PM – 9:00 PM'],
                          ['Facebook', 'Wed – Sun', '1:00 PM – 4:00 PM'],
                        ].map(([platform, days, times], i) => (
                          <TableRow key={i}>
                            <TableCell sx={{ fontWeight: 500 }}>{platform}</TableCell>
                            <TableCell>{days}</TableCell>
                            <TableCell>{times}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>

                  <Callout type="tip">
                    These are general guidelines based on industry research. Your optimal posting times may vary depending on your audience demographics and content niche. Use the Analytics features (Enterprise plan) to discover your audience's peak activity hours.
                  </Callout>
                </TabPanel>

                {/* ═══════════════════════════════════════════════════
                    TAB 4 — ACCOUNT & BILLING
                    ═══════════════════════════════════════════════════ */}
                <TabPanel value={tabValue} index={4}>
                  <Typography variant="h4" component="h2" fontWeight={700} sx={{ mb: 2 }}>
                    Account & Billing
                  </Typography>
                  <Typography paragraph color="text.secondary">
                    Manage your account settings, subscription plans, connected social media accounts, and payment methods.
                  </Typography>

                  {/* Plans */}
                  <Typography variant="h5" component="h3" fontWeight={600} sx={{ mt: 4, mb: 2 }}>
                    Subscription Plans
                  </Typography>
                  <Grid container spacing={2} sx={{ mb: 4 }}>
                    {[
                      { name: 'Free', price: '$0/mo', highlight: false, features: ['1 daily upload', '5 scheduled uploads/month', 'Unlimited platform connections', 'Basic video metadata', 'Custom thumbnails', 'Standard support (AI & Live Chat)'] },
                      { name: 'Basic', price: '$1.99/mo', highlight: false, features: ['3 daily uploads', '10 scheduled uploads/month', 'Unlimited platform connections', 'Save drafts', 'Auto-retry failed uploads', 'Standard support'] },
                      { name: 'Premium', price: '$4.99/mo', highlight: false, features: ['5 daily uploads', '30 scheduled uploads/month', 'Unlimited platform connections', 'Captions & chapters', 'Priority support'] },
                      { name: 'Enterprise', price: '$9.99/mo', highlight: false, features: ['10 daily uploads', 'Unlimited scheduled uploads', 'Unlimited platform connections', 'Analytics & insights', 'API access', 'Dedicated manager'] },
                    ].map((plan, i) => (
                      <Grid item xs={12} sm={6} md={3} key={i}>
                        <Card sx={{ 
                          height: '100%', borderRadius: 3, boxShadow: 'none', 
                          border: plan.highlight ? `2px solid ${theme.palette.secondary.main}` : '1px solid rgba(0,0,0,0.08)',
                          position: 'relative',
                        }}>
                          <CardContent sx={{ p: 3 }}>
                            <Typography variant="h6" fontWeight={700}>{plan.name}</Typography>
                            <Typography variant="h5" fontWeight={800} color={plan.price === '$0/mo' ? 'success.main' : 'primary'} sx={{ my: 1 }}>{plan.price}</Typography>
                            <Divider sx={{ my: 2 }} />
                            {plan.features.map((f, fi) => (
                              <Box key={fi} sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                                <CheckCircleIcon sx={{ fontSize: 16, color: 'success.main', mr: 1 }} />
                                <Typography variant="body2">{f}</Typography>
                              </Box>
                            ))}
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>

                  <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                    Annual billing is available at a <strong>20% discount</strong>. Visit our <Link component={RouterLink} to="/pricing">Pricing page</Link> for full details and comparison.
                  </Typography>

                  {/* Account management */}
                  <Typography variant="h5" component="h3" fontWeight={600} sx={{ mt: 5, mb: 2 }}>
                    Account Management
                  </Typography>

                  {[
                    { title: 'Changing Your Password', desc: 'Go to Settings → Security. Click "Change Password" and enter your current password followed by your new one. We recommend using a strong, unique password with at least 12 characters.' },
                    { title: 'Updating Email Address', desc: 'Navigate to Settings → Profile. Update your email address and verify it via the confirmation link sent to your new email. Your billing notifications will be sent to the updated address.' },
                    { title: 'Managing Connected Accounts', desc: 'Go to Settings → Connected Accounts to view all linked social media profiles. Click "Disconnect" to revoke access, or "Reconnect" to refresh expired OAuth tokens.' },
                    { title: 'Upgrading Your Plan', desc: 'Visit Settings → Subscription. Select your desired plan and confirm. Upgrades take effect immediately, with prorated billing for the remainder of your current cycle.' },
                    { title: 'Cancelling Your Subscription', desc: 'Go to Settings → Subscription → Cancel Plan. Your access continues until the end of your current billing period. Your data is retained for 30 days after cancellation in case you decide to return.' },
                    { title: 'Payment Methods', desc: 'We accept all major credit cards (Visa, Mastercard, Amex) and PayPal. Enterprise customers can arrange bank transfers. Update your payment method under Settings → Billing.' },
                  ].map((item, i) => (
                    <Box key={i} sx={{ mb: 3 }}>
                      <Typography variant="subtitle1" fontWeight={600}>{item.title}</Typography>
                      <Typography variant="body2" color="text.secondary">{item.desc}</Typography>
                    </Box>
                  ))}

                  <Callout type="warning">
                    If you revoke MultiPost's access from a platform's settings directly (e.g., Google Security settings), users should also disconnect the account from the MultiPost dashboard to keep everything in sync.
                  </Callout>
                </TabPanel>

                {/* ═══════════════════════════════════════════════════
                    TAB 5 — BEST PRACTICES
                    ═══════════════════════════════════════════════════ */}
                <TabPanel value={tabValue} index={5}>
                  <Typography variant="h4" component="h2" fontWeight={700} sx={{ mb: 2 }}>
                    Best Practices
                  </Typography>
                  <Typography paragraph color="text.secondary">
                    Expert tips to maximize your reach and engagement when distributing content across multiple platforms.
                  </Typography>

                  {[
                    {
                      title: '1. Optimize Metadata Per Platform',
                      icon: <SettingsIcon color="primary" />,
                      tips: [
                        'YouTube: Use keyword-rich titles (60 chars max), detailed descriptions with timestamps, and 10–15 specific tags.',
                        'TikTok: Focus on trending hashtags (3-5), short punchy captions, and relevant sounds/music references.',
                        'Instagram: Use 20–30 relevant hashtags, an engaging caption with a call-to-action, and tag relevant accounts.',
                        'Facebook: Write conversational descriptions, tag your business page, and include a clear call-to-action.',
                      ]
                    },
                    {
                      title: '2. Thumbnail Best Practices',
                      icon: <ImageIcon color="primary" />,
                      tips: [
                        'Use high-contrast colors and large, readable text overlays.',
                        'Include a human face with an expressive emotion — videos with faces in thumbnails get 38% more clicks.',
                        'Create platform-specific thumbnails: YouTube favors 1280×720 landscape, while Instagram prefers 1080×1080 square or 1080×1350 portrait.',
                        'Keep the design uncluttered. Thumbnails are viewed at small sizes — simplicity wins.',
                      ]
                    },
                    {
                      title: '3. Video Format & Quality',
                      icon: <VideoLibraryIcon color="primary" />,
                      tips: [
                        'Always upload in the highest quality available. Platforms will compress your video — start with the best source.',
                        'For short-form content (Shorts/Reels/TikTok), use 1080×1920 (9:16 vertical) at 30 or 60 fps.',
                        'For YouTube long-form, use 1920×1080 (16:9 landscape) minimum. 4K (3840×2160) is preferred for discoverability.',
                        'Use MP4 with H.264 codec for maximum compatibility across all platforms.',
                      ]
                    },
                    {
                      title: '4. Posting Consistency',
                      icon: <ScheduleIcon color="primary" />,
                      tips: [
                        'Maintain a consistent posting schedule. Algorithms favor creators who post regularly.',
                        'Aim for at least 3–5 posts per week across platforms for steady growth.',
                        'Use MultiPost\'s scheduling feature to batch-create content on one day and schedule releases throughout the week.',
                        'Track which days and times get the most engagement and adjust your schedule accordingly.',
                      ]
                    },
                    {
                      title: '5. Cross-Platform Strategy',
                      icon: <SyncIcon color="primary" />,
                      tips: [
                        'Don\'t just copy-paste the same content everywhere. Adapt your messaging and format for each platform\'s audience.',
                        'Repurpose long-form YouTube content into multiple short clips for TikTok, Reels, and Shorts.',
                        'Use platform-native features: polls on YouTube, Questions sticker on Instagram Stories, duets on TikTok.',
                        'Cross-promote between platforms: mention your TikTok in YouTube descriptions, link your YouTube in Instagram bio.',
                      ]
                    },
                    {
                      title: '6. Accessibility & Captions',
                      icon: <SubtitlesIcon color="primary" />,
                      tips: [
                        'Always include captions/subtitles. 85% of Facebook videos are watched without sound.',
                        'Use MultiPost\'s auto-captioning feature or upload SRT files for accurate multi-language subtitles.',
                        'Add descriptive alt text to thumbnails for screen readers.',
                        'Consider color-blind friendly palettes in your video graphics and thumbnails.',
                      ]
                    },
                  ].map((section, i) => (
                    <Box key={i} sx={{ mb: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        {section.icon}
                        <Typography variant="h5" component="h3" fontWeight={600} sx={{ ml: 1 }}>
                          {section.title}
                        </Typography>
                      </Box>
                      <List dense>
                        {section.tips.map((tip, ti) => (
                          <ListItem key={ti} sx={{ py: 0.5, alignItems: 'flex-start' }}>
                            <ListItemIcon sx={{ minWidth: 28, mt: 0.8 }}>
                              <CheckCircleIcon sx={{ fontSize: 16, color: 'success.main' }} />
                            </ListItemIcon>
                            <ListItemText primary={tip} primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }} />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  ))}
                </TabPanel>

                {/* ═══════════════════════════════════════════════════
                    TAB 6 — TROUBLESHOOTING
                    ═══════════════════════════════════════════════════ */}
                <TabPanel value={tabValue} index={6}>
                  <Typography variant="h4" component="h2" fontWeight={700} sx={{ mb: 2 }}>
                    Troubleshooting
                  </Typography>
                  <Typography paragraph color="text.secondary">
                    Solutions to common issues you may encounter when using MultiPost.
                  </Typography>

                  {[
                    {
                      q: 'Upload stuck at "Processing"',
                      a: 'This usually indicates a network issue or a temporary platform API outage. Try the following: (1) Check your internet connection. (2) Refresh the dashboard page. (3) If the upload has been processing for over 30 minutes, try canceling and re-uploading. (4) Ensure your video file is not corrupted by testing playback locally.'
                    },
                    {
                      q: 'OAuth connection expired / "Re-authorize required"',
                      a: 'Social media platforms periodically expire OAuth tokens for security. Go to Settings → Connected Accounts and click "Reconnect" next to the affected platform. You\'ll be redirected to re-authorize MultiPost. This does not affect your existing uploads.'
                    },
                    {
                      q: 'Video uploaded but not visible on the platform',
                      a: 'Some platforms (especially YouTube) process uploaded videos for several minutes before they become publicly visible. Check the Activity page in MultiPost for the upload status. If the status shows "Success" but the video isn\'t visible after 1 hour, check the platform\'s native studio for any processing errors or policy violations.'
                    },
                    {
                      q: 'Video rejected by platform',
                      a: 'Each platform has content policies and technical requirements. Common reasons for rejection: (1) Video format not supported. (2) Video duration exceeds platform limits. (3) Content policy violation (copyright claim, community guidelines). (4) File size exceeds maximum. Check the error message in the Activity page for the specific reason.'
                    },
                    {
                      q: 'Thumbnail not showing correctly',
                      a: 'Ensure your thumbnail meets the platform\'s recommended dimensions: YouTube (1280×720), Facebook (1200×630), Instagram (1080×1080 or 1080×1350). Use JPG or PNG format under 2 MB. Thumbnails may take a few minutes to process on some platforms.'
                    },
                    {
                      q: 'Scheduled post didn\'t publish',
                      a: 'Check the following: (1) Your OAuth connection is still active for the target platform. (2) Your account has remaining daily upload quota. (3) The scheduled time hasn\'t passed while you were editing — confirm the time zone in Settings. (4) Check the Activity page for any error notifications.'
                    },
                    {
                      q: 'Video quality appears degraded after upload',
                      a: 'All social media platforms re-encode uploaded videos, which can reduce quality. To minimize quality loss: (1) Upload in the highest quality available. (2) Use MP4 with H.264 codec. (3) Set your bitrate to at least 10 Mbps for 1080p content. (4) Some platforms initially serve a lower-quality version and upgrade after processing is complete.'
                    },
                    {
                      q: 'Cannot connect Instagram account',
                      a: 'Instagram API integration requires a Professional (Business or Creator) account, not a personal account. To switch: open Instagram → Settings → Account → Switch to Professional Account. Also ensure your Instagram account is connected to a Facebook Page, as Instagram\'s API routes through Facebook.'
                    },
                  ].map((item, i) => (
                    <Box key={i} sx={{ 
                      mb: 3, p: 3, borderRadius: 2,
                      border: '1px solid rgba(0,0,0,0.08)',
                      '&:hover': { borderColor: theme.palette.primary.light, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' },
                      transition: 'all 0.2s ease',
                    }}>
                      <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>
                        <WarningAmberIcon sx={{ fontSize: 18, mr: 1, verticalAlign: 'text-bottom', color: 'warning.main' }} />
                        {item.q}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ ml: 3.5 }}>
                        {item.a}
                      </Typography>
                    </Box>
                  ))}

                  <Callout type="info">
                    Still experiencing issues? Contact our support team at <strong>support@multipost.pro</strong> or visit our <Link component={RouterLink} to="/contact">Contact page</Link>. Include your account email and a screenshot of any error messages for faster resolution.
                  </Callout>
                </TabPanel>

              </Paper>

              {/* Bottom CTA */}
              <Paper
                elevation={0}
                sx={{ 
                  mt: 4, p: { xs: 3, md: 4 }, borderRadius: 3,
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}06 0%, ${theme.palette.primary.light}06 100%)`,
                  textAlign: 'center',
                }}
              >
                <Typography variant="h5" component="h2" fontWeight={700} sx={{ mb: 2 }}>
                  Ready to Get Started?
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: 500, mx: 'auto' }}>
                  Join thousands of content creators who are saving time and growing their audience with MultiPost.
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
                  <Button 
                    variant="contained" 
                    color="secondary"
                    size="large"
                    component="a"
                    href="https://app.multipost.pro"
                    target="_blank"
                    rel="noopener noreferrer"
                    endIcon={<ArrowForwardIcon />}
                    sx={{ px: 4 }}
                  >
                    Start for Free
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="large"
                    component={RouterLink}
                    to="/pricing"
                    sx={{ px: 4 }}
                  >
                    View Pricing
                  </Button>
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default DocumentationPage;