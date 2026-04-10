import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import SEO from '../components/SEO';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { useTheme, alpha } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { m } from 'framer-motion';

// Icons
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import GroupsIcon from '@mui/icons-material/Groups';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import HandshakeIcon from '@mui/icons-material/Handshake';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DevicesIcon from '@mui/icons-material/Devices';
import PublicIcon from '@mui/icons-material/Public';
import FavoriteIcon from '@mui/icons-material/Favorite';
import VerifiedIcon from '@mui/icons-material/Verified';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';

// ── Reusable animation variants ──────────────────────────────────────
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

// ── Static data (hoisted outside component for performance) ─────────
const FOUNDER_PHOTO =
  'https://scontent.fcgk20-1.fna.fbcdn.net/v/t39.30808-6/597494312_3455021941319192_8331494056731146890_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeFbKmXz_pqsrjQ0P7RRcBu_g-kWogxFHkGD6RaiDEUeQX3_pQFp1ogVlyGI4Xsx4LdcvJ71StxX83Pya_-QU76C&_nc_ohc=BItrTRAit54Q7kNvwH1fDm9&_nc_oc=Adr7yS9R9gHKtzPwJ0vsjcC0UAAA99wlZkZBYFRcirqTkK652QdSw40KD_uZouE9oBSvW6IWNuw72unLR_iXyQ0W&_nc_zt=23&_nc_ht=scontent.fcgk20-1.fna&_nc_gid=6sKdA0ifcaDkgb0raiTqVQ&_nc_ss=7a3a8&oh=00_Af2RnX1TOYUXh3sAlJBYuU0lLm9uBFFBWBGIYa1M6I71IQ&oe=69DF14F9';

const FOUNDER_SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/isaacnewton123', icon: <GitHubIcon /> },
  { label: 'Facebook', href: 'https://www.facebook.com/hanif.maulana.108/', icon: <FacebookIcon /> },
  { label: 'Instagram', href: 'https://www.instagram.com/hanifmaulana2/', icon: <InstagramIcon /> },
  { label: 'X (Twitter)', href: 'https://x.com/isaac_newton252', icon: <XIcon /> },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hanif-maulana-210b4721b/', icon: <LinkedInIcon /> },
];

const COMPANY_VALUES = [
  {
    icon: <EmojiObjectsIcon />,
    value: 'Innovation',
    description:
      "We continuously explore cutting-edge technologies and creative approaches to solve content creators' biggest challenges — from AI-powered scheduling to cross-platform analytics.",
  },
  {
    icon: <VerifiedIcon />,
    value: 'Reliability',
    description:
      'Our platform is engineered for uptime and consistency. Every upload, every schedule, every notification — delivered on time, every time.',
  },
  {
    icon: <AutoAwesomeIcon />,
    value: 'Simplicity',
    description:
      "Powerful tools shouldn't require a manual. We design intuitive interfaces that let you focus on creating, not configuring.",
  },
  {
    icon: <SecurityIcon />,
    value: 'Security',
    description:
      'Your content and credentials are protected with OAuth-based authentication and industry-standard encryption. We never store your passwords.',
  },
  {
    icon: <HandshakeIcon />,
    value: 'Transparency',
    description:
      'No hidden fees, no bait-and-switch. Our free tier is genuinely free — with unlimited platform connections and zero watermarks.',
  },
  {
    icon: <FavoriteIcon />,
    value: 'Community First',
    description:
      'Every feature we build starts with creator feedback. Our roadmap is shaped by the people who use MultiPost every day.',
  },
];

const MILESTONES = [
  {
    year: '2026 Q1',
    title: 'The Idea Is Born',
    description:
      'Frustrated with manually uploading the same video to 8+ platforms, founder Hanif Maulana (Isaac Newton) starts building a unified posting tool.',
  },
  {
    year: '2026 Q2',
    title: 'MultiPost Launches',
    description:
      'The first public version goes live — supporting YouTube, TikTok, Instagram, and Facebook with one-click distribution.',
  },
  {
    year: '2026 Q3',
    title: 'Expanding The Platform',
    description:
      'Added batch processing, scheduled uploads, and support for X (Twitter), LinkedIn, and Pinterest. Waitlist grows to thousands of creators.',
  },
  {
    year: '2026 Q4',
    title: 'Community-Driven Growth',
    description:
      'Launching analytics dashboard, template management, and API access for enterprise users based on community feedback.',
  },
];

const WHY_MULTIPOST = [
  {
    icon: <CloudUploadIcon />,
    title: 'One Upload, Every Platform',
    description:
      'Upload once and let MultiPost distribute your content to YouTube, TikTok, Instagram Reels, Facebook, X, LinkedIn, Pinterest, and more — simultaneously.',
  },
  {
    icon: <SpeedIcon />,
    title: 'Save Hours Every Week',
    description:
      'Creators spend an average of 3–5 hours per week manually uploading to multiple platforms. MultiPost reduces that to minutes.',
  },
  {
    icon: <TrendingUpIcon />,
    title: 'Grow Your Audience Faster',
    description:
      'Being present on every platform means more impressions, more followers, and more monetization opportunities — without extra effort.',
  },
  {
    icon: <SupportAgentIcon />,
    title: 'Built by Creators, for Creators',
    description:
      'We understand the creator journey because we live it. Every feature is designed with real workflows in mind.',
  },
];

// ── JSON-LD Schema for máximal SEO ──────────────────────────────────
const aboutPageSchema = [
  {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About MultiPost',
    description:
      'Learn about MultiPost — the free auto-posting tool that empowers content creators to distribute videos and content across YouTube, TikTok, Instagram, Facebook, and more in a single click.',
    url: 'https://multipost.pro/about',
    mainEntity: {
      '@type': 'Organization',
      name: 'MultiPost',
      url: 'https://multipost.pro',
      logo: 'https://multipost.pro/LogoWithBG.webp',
      foundingDate: '2026',
      founder: {
        '@type': 'Person',
        name: 'Hanif Maulana (Isaac Newton)',
        jobTitle: 'Founder & Lead Developer',
        url: 'https://github.com/isaacnewton123',
        image: FOUNDER_PHOTO,
        sameAs: FOUNDER_SOCIALS.map((s) => s.href),
      },
      description:
        'MultiPost is a free SaaS platform that enables content creators to post videos and content to unlimited social media platforms simultaneously, with zero friction.',
      sameAs: [
        'https://www.facebook.com/share/1GUhpG8mHu/',
        'https://x.com/multipost_pro',
        'https://www.linkedin.com/in/multi-post-b642b1402',
        'https://www.instagram.com/multipost.pro/',
        'https://www.youtube.com/@multipostpro',
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://multipost.pro/' },
      { '@type': 'ListItem', position: 2, name: 'About', item: 'https://multipost.pro/about' },
    ],
  },
];

// ── Section heading helper (keeps JSX DRY) ──────────────────────────
const SectionHeading = ({ title, subtitle, accentColor }) => {
  const theme = useTheme();
  return (
    <Box
      component={m.div}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      sx={{ mb: { xs: 5, md: 8 }, textAlign: 'center' }}
    >
      <Typography
        variant="h2"
        component="h2"
        gutterBottom
        sx={{
          fontWeight: 700,
          fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem' },
          position: 'relative',
          display: 'inline-block',
          mb: 2,
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: -10,
            left: '50%',
            transform: 'translateX(-50%)',
            width: { xs: 50, md: 80 },
            height: 4,
            backgroundColor: accentColor || theme.palette.secondary.main,
            borderRadius: 2,
          },
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="h5"
          color="textSecondary"
          sx={{
            maxWidth: 700,
            mx: 'auto',
            mt: 3,
            fontSize: { xs: '1rem', sm: '1.125rem', md: '1.25rem' },
            lineHeight: 1.6,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

// ═════════════════════════════════════════════════════════════════════
// Component
// ═════════════════════════════════════════════════════════════════════
const AboutPage = () => {
  const theme = useTheme();

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <SEO
        title="About Us — Our Story, Mission & The Team Behind MultiPost"
        description="Discover who's behind MultiPost — the free auto-posting tool for content creators. Meet founder Hanif Maulana (Isaac Newton), explore our mission to simplify multi-platform video distribution, and learn the values that drive us."
        path="/about"
        schema={aboutPageSchema}
      />

      {/* ════════════════════ HERO ════════════════════ */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          pt: { xs: 16, sm: 18, md: 20 },
          pb: { xs: 8, md: 14 },
          background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 60%, ${alpha(theme.palette.secondary.main, 0.15)} 100%)`,
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.05) 0%, transparent 50%)',
            pointerEvents: 'none',
          },
        }}
      >
        <Container maxWidth="lg">
          <Box
            component={m.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            sx={{ textAlign: 'center', maxWidth: 850, mx: 'auto', px: { xs: 1, sm: 2 } }}
          >
            <Typography
              variant="h1"
              gutterBottom
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem' },
                mb: 2,
                lineHeight: { xs: 1.2, md: 1.15 },
              }}
            >
              About{' '}
              <Box component="span" sx={{ color: theme.palette.secondary.main }}>
                MultiPost
              </Box>
            </Typography>

            <Typography
              variant="h5"
              component="p"
              sx={{
                opacity: 0.9,
                mb: 3,
                maxWidth: 750,
                mx: 'auto',
                lineHeight: 1.7,
                fontSize: { xs: '1rem', sm: '1.15rem', md: '1.25rem' },
              }}
            >
              We're on a mission to eliminate the repetitive, time-consuming task of posting
              content to multiple platforms — so creators can focus on what they do best:
              creating.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                opacity: 0.7,
                maxWidth: 600,
                mx: 'auto',
                lineHeight: 1.6,
                fontSize: { xs: '0.875rem', sm: '1rem' },
              }}
            >
              One video. Every platform. Zero friction. That's the MultiPost promise.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* ════════════════════ OUR STORY + FOUNDER ════════════════════ */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: theme.palette.background.default }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            {/* Story text */}
            <Grid
              item
              xs={12}
              md={6}
              component={m.div}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Typography
                variant="h3"
                component="h2"
                gutterBottom
                fontWeight={700}
                sx={{
                  fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
                  position: 'relative',
                  display: 'inline-block',
                  mb: 3,
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: 0,
                    width: { xs: 40, md: 60 },
                    height: 4,
                    backgroundColor: theme.palette.secondary.main,
                    borderRadius: 2,
                  },
                }}
              >
                Our Story
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                paragraph
                sx={{ mb: 2.5, lineHeight: 1.8, fontSize: { xs: '0.9rem', md: '1rem' } }}
              >
                MultiPost was born out of a real frustration. As a content creator, our founder
                Hanif Maulana (Isaac Newton) found himself spending hours each week doing the same repetitive
                task: uploading the same video to YouTube, then TikTok, then Instagram, then
                Facebook, then X, then LinkedIn — adjusting titles, descriptions, and thumbnails
                for each platform.
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                paragraph
                sx={{ mb: 2.5, lineHeight: 1.8, fontSize: { xs: '0.9rem', md: '1rem' } }}
              >
                The process was tedious, error-prone, and took time away from what actually
                matters — creating great content. So Isaac decided to build the tool he wished
                existed: a single dashboard where you upload once and publish everywhere,
                instantly.
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                paragraph
                sx={{ lineHeight: 1.8, fontSize: { xs: '0.9rem', md: '1rem' } }}
              >
                Today, MultiPost is growing into a platform that serves creators, marketers, and
                businesses of all sizes — helping them reach wider audiences with less effort. And
                we're just getting started.
              </Typography>
            </Grid>

            {/* Founder card */}
            <Grid
              item
              xs={12}
              md={6}
              component={m.div}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Paper
                elevation={0}
                sx={{
                  borderRadius: { xs: 3, md: 4 },
                  overflow: 'hidden',
                  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                  background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.03)} 0%, ${alpha(theme.palette.secondary.main, 0.03)} 100%)`,
                }}
              >
                {/* Founder photo + info */}
                <Box
                  sx={{
                    p: { xs: 3, md: 4 },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                  }}
                >
                  <Avatar
                    src={FOUNDER_PHOTO}
                    alt="Hanif Maulana — Founder of MultiPost"
                    sx={{
                      width: { xs: 80, sm: 100, md: 120 },
                      height: { xs: 80, sm: 100, md: 120 },
                      mb: 2,
                      boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.3)}`,
                      border: `3px solid ${alpha(theme.palette.primary.main, 0.15)}`,
                    }}
                  />
                  <Typography
                    variant="h5"
                    fontWeight={700}
                    gutterBottom
                    sx={{ fontSize: { xs: '1.15rem', md: '1.25rem' } }}
                  >
                    Hanif Maulana (Isaac Newton)
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="primary"
                    fontWeight={600}
                    sx={{ mb: 1.5 }}
                  >
                    Founder & Lead Developer
                  </Typography>

                  {/* Social media links */}
                  <Box
                    component="nav"
                    aria-label="Founder social media links"
                    sx={{
                      display: 'flex',
                      gap: 0.5,
                      mb: 2,
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                    }}
                  >
                    {FOUNDER_SOCIALS.map((social) => (
                      <Tooltip title={social.label} key={social.label} arrow>
                        <IconButton
                          component="a"
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit Hanif Maulana's ${social.label} profile`}
                          size="small"
                          sx={{
                            color: theme.palette.text.secondary,
                            transition: 'all 0.25s ease',
                            '&:hover': {
                              color: theme.palette.primary.main,
                              transform: 'translateY(-2px)',
                              backgroundColor: alpha(theme.palette.primary.main, 0.08),
                            },
                          }}
                        >
                          {social.icon}
                        </IconButton>
                      </Tooltip>
                    ))}
                  </Box>

                  <Divider sx={{ width: '60%', my: 1.5 }} />
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.8,
                      px: { xs: 1, md: 2 },
                      fontStyle: 'italic',
                      fontSize: { xs: '0.825rem', md: '0.875rem' },
                    }}
                  >
                    "I built MultiPost because I believe every creator deserves to reach their
                    full audience — without wasting hours on repetitive uploads. Your content
                    deserves to be everywhere."
                  </Typography>
                </Box>

                {/* Mission bar */}
                <Box
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    color: 'white',
                    p: { xs: 2.5, md: 3 },
                    textAlign: 'center',
                  }}
                >
                  <RocketLaunchIcon sx={{ fontSize: { xs: 24, md: 32 }, mb: 0.5, opacity: 0.9 }} />
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    gutterBottom
                    sx={{ fontSize: { xs: '1rem', md: '1.125rem' } }}
                  >
                    Our Mission
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      opacity: 0.9,
                      lineHeight: 1.7,
                      fontSize: { xs: '0.8rem', md: '0.875rem' },
                    }}
                  >
                    To empower every content creator — from solo vloggers to enterprise teams — by
                    simplifying multi-platform distribution so they can focus entirely on creating
                    amazing content.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ════════════════════ WHY MULTIPOST ════════════════════ */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'white' }}>
        <Container maxWidth="lg">
          <SectionHeading
            title="Why MultiPost?"
            subtitle="Built to solve the real problems creators face every single day"
          />

          <Grid
            container
            spacing={{ xs: 2, sm: 3, md: 4 }}
            component={m.div}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {WHY_MULTIPOST.map((item, i) => (
              <Grid item xs={12} sm={6} key={i}>
                <Paper
                  component={m.div}
                  variants={fadeInUp}
                  elevation={0}
                  sx={{
                    p: { xs: 2.5, sm: 3, md: 4 },
                    height: '100%',
                    borderRadius: { xs: 3, md: 4 },
                    border: `1px solid ${alpha(theme.palette.divider, 0.08)}`,
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: { xs: 2, md: 3 },
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: alpha(theme.palette.primary.main, 0.2),
                      boxShadow: `0 8px 32px ${alpha(theme.palette.primary.main, 0.08)}`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      flexShrink: 0,
                      width: { xs: 48, md: 64 },
                      height: { xs: 48, md: 64 },
                      borderRadius: 3,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: alpha(theme.palette.primary.main, 0.06),
                      color: theme.palette.primary.main,
                      '& .MuiSvgIcon-root': { fontSize: { xs: 28, md: 40 } },
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box>
                    <Typography
                      variant="h5"
                      component="h3"
                      fontWeight={700}
                      gutterBottom
                      sx={{ fontSize: { xs: '1.05rem', md: '1.25rem' } }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: 1.7, fontSize: { xs: '0.825rem', md: '0.875rem' } }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ════════════════════ CORE VALUES ════════════════════ */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: theme.palette.background.default }}>
        <Container maxWidth="lg">
          <SectionHeading
            title="Our Core Values"
            subtitle="The principles that guide everything we build"
          />

          <Grid
            container
            spacing={{ xs: 2, sm: 3 }}
            component={m.div}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {COMPANY_VALUES.map((item, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Paper
                  component={m.div}
                  variants={fadeInUp}
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 4 },
                    height: '100%',
                    borderRadius: { xs: 3, md: 4 },
                    border: `1px solid ${alpha(theme.palette.divider, 0.08)}`,
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      borderColor: alpha(theme.palette.primary.main, 0.2),
                      boxShadow: `0 12px 36px ${alpha(theme.palette.primary.main, 0.1)}`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 48, md: 64 },
                      height: { xs: 48, md: 64 },
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: alpha(theme.palette.primary.main, 0.08),
                      color: theme.palette.primary.main,
                      mx: 'auto',
                      mb: 2,
                      '& .MuiSvgIcon-root': { fontSize: { xs: 24, md: 36 } },
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography
                    variant="h5"
                    component="h3"
                    fontWeight={700}
                    gutterBottom
                    sx={{ fontSize: { xs: '1.05rem', md: '1.25rem' } }}
                  >
                    {item.value}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.7, fontSize: { xs: '0.8rem', md: '0.875rem' } }}
                  >
                    {item.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* ════════════════════ TIMELINE / MILESTONES ════════════════════ */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'white' }}>
        <Container maxWidth="md">
          <SectionHeading
            title="Our Journey"
            subtitle="Key milestones in the MultiPost story"
            accentColor={theme.palette.primary.main}
          />

          <Box
            component={m.div}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            sx={{ position: 'relative' }}
          >
            {/* Vertical line — left on mobile, center on desktop */}
            <Box
              aria-hidden="true"
              sx={{
                position: 'absolute',
                left: { xs: 16, md: '50%' },
                transform: { md: 'translateX(-50%)' },
                top: 0,
                bottom: 0,
                width: 3,
                backgroundColor: alpha(theme.palette.primary.main, 0.15),
                borderRadius: 2,
              }}
            />

            {MILESTONES.map((milestone, i) => {
              const isEven = i % 2 === 0;
              return (
                <Box
                  key={i}
                  component={m.div}
                  variants={fadeInUp}
                  sx={{
                    display: 'flex',
                    flexDirection: {
                      xs: 'row',
                      md: isEven ? 'row' : 'row-reverse',
                    },
                    mb: { xs: 3, md: 5 },
                    position: 'relative',
                    pl: { xs: 5, md: 0 },
                  }}
                >
                  {/* Dot */}
                  <Box
                    aria-hidden="true"
                    sx={{
                      position: 'absolute',
                      left: { xs: 9, md: '50%' },
                      transform: { md: 'translateX(-50%)' },
                      width: { xs: 16, md: 20 },
                      height: { xs: 16, md: 20 },
                      borderRadius: '50%',
                      backgroundColor: theme.palette.primary.main,
                      border: `3px solid ${theme.palette.background.paper}`,
                      boxShadow: `0 0 0 3px ${alpha(theme.palette.primary.main, 0.2)}`,
                      zIndex: 1,
                      mt: { xs: 1.5, md: 1 },
                    }}
                  />

                  {/* Card */}
                  <Box
                    sx={{
                      width: { xs: '100%', md: '45%' },
                      ml: { md: isEven ? 0 : 'auto' },
                      mr: { md: isEven ? 'auto' : 0 },
                      textAlign: { xs: 'left', md: isEven ? 'right' : 'left' },
                    }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: { xs: 2.5, md: 3 },
                        borderRadius: 3,
                        border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          boxShadow: `0 8px 24px ${alpha(theme.palette.primary.main, 0.08)}`,
                        },
                      }}
                    >
                      <Typography
                        variant="overline"
                        color="primary"
                        fontWeight={700}
                        sx={{ letterSpacing: 1.5, fontSize: { xs: '0.65rem', md: '0.75rem' } }}
                      >
                        {milestone.year}
                      </Typography>
                      <Typography
                        variant="h5"
                        component="h3"
                        fontWeight={700}
                        gutterBottom
                        sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}
                      >
                        {milestone.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ lineHeight: 1.7, fontSize: { xs: '0.8rem', md: '0.875rem' } }}
                      >
                        {milestone.description}
                      </Typography>
                    </Paper>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Container>
      </Box>

      {/* ════════════════════ CTA ════════════════════ */}
      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: theme.palette.background.default }}>
        <Container maxWidth="md">
          <Paper
            component={m.div}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            elevation={0}
            sx={{
              p: { xs: 3, sm: 4, md: 6 },
              borderRadius: { xs: 3, md: 4 },
              border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
              background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.03)} 0%, ${alpha(theme.palette.secondary.main, 0.03)} 100%)`,
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: 4,
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              },
            }}
          >
            <GroupsIcon
              sx={{
                fontSize: { xs: 36, md: 48 },
                color: theme.palette.primary.main,
                mb: 1.5,
                opacity: 0.8,
              }}
            />
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 700,
                mb: 2,
                fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.25rem' },
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
                lineHeight: 1.7,
                fontSize: { xs: '0.9rem', sm: '1rem', md: '1.125rem' },
              }}
            >
              Ready to streamline your content management and reach every platform with a single
              click? Join thousands of creators who already trust MultiPost.
            </Typography>
            <Box
              sx={{
                display: 'flex',
                gap: 2,
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <Button
                variant="contained"
                color="primary"
                size="large"
                component={RouterLink}
                to="/pricing"
                endIcon={<ArrowForwardIcon />}
                sx={{
                  px: { xs: 3, md: 5 },
                  py: 1.5,
                  fontSize: { xs: '0.95rem', md: '1.1rem' },
                }}
              >
                Get Started Free
              </Button>
              <Button
                variant="outlined"
                color="primary"
                size="large"
                component={RouterLink}
                to="/features"
                sx={{
                  px: { xs: 3, md: 5 },
                  py: 1.5,
                  fontSize: { xs: '0.95rem', md: '1.1rem' },
                }}
              >
                Explore Features
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutPage;
