import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import SEO from '../components/SEO';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Switch from '@mui/material/Switch';
import { useTheme } from '@mui/material/styles';
import { m } from 'framer-motion';

// Icons
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import StarIcon from '@mui/icons-material/Star';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

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

const PricingPage = () => {
  const theme = useTheme();
  const [annually, setAnnually] = useState(false);

  // Subscription plans data
  const plans = [
    {
      id: 'free',
      name: 'Free',
      price: 0,
      yearly: 0,
      popular: false,
      label: 'Free Forever',
      features: [
        '1 Daily Upload',
        '5 Scheduled Uploads per month',
        '720p Quality',
        'Unlimited Platform Connections',
        'Basic Video Metadata',
        'Custom Thumbnails',
        'Standard Support (AI & Live Chat)'
      ]
    },
    {
      id: 'basic',
      name: 'Basic',
      price: 1.99,
      yearly: 19.09,
      popular: false,
      features: [
        '3 Daily Uploads',
        '10 Scheduled Uploads per month',
        '1080p Quality',
        'Unlimited Platform Connections',
        'Basic Video Metadata',
        'Custom Thumbnails',
        'Save Drafts',
        'Auto-Retry Failed Uploads',
        'Standard Support (AI & Live Chat)'
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 4.99,
      yearly: 47.89,
      popular: true,
      features: [
        '5 Daily Uploads',
        '30 Scheduled Uploads per month',
        '1440p Quality',
        'Analytics & Insights',
        'Unlimited Platform Connections',
        'Advanced Video Settings',
        'Upload Subtitles & Captions',
        'Define Video Chapters',
        'Add End Screens & Cards',
        'Priority AI & Live Chat Support'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 9.99,
      yearly: 95.89,
      popular: false,
      features: [
        '10 Daily Uploads',
        'Unlimited Scheduled Uploads',
        '4k video quality',
        'Unlimited Platform Connections',
        'All Premium Features',
        'Custom Upload Workflows',
        'Advanced Analytics',
        'API Access',
        'Custom Features Development',
        'Dedicated Support Manager'
      ]
    }
  ];

  // Format price
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2
    }).format(price);
  };

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <SEO
        title="Pricing — Free Auto Posting Tool | Unlimited Platform Connections"
        description="Start for Free with MultiPost — the free auto posting tool for video distribution. Free Tier includes 1 daily upload, 5 scheduled uploads per month, and unlimited platform connections. Upgrade anytime for more power."
        path="/pricing"
      />
      {/* Hero section */}
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
              Start Free, <Box component="span" sx={{ color: theme.palette.secondary.main }}>Upgrade Anytime</Box>
            </Typography>

            <Typography
              variant="h5"
              component="p"
              sx={{
                opacity: 0.9,
                mb: 6,
                maxWidth: 700,
                mx: 'auto',
                lineHeight: 1.6,
              }}
            >
              Free to start, upgrade for more power. Choose the plan that fits your content creation needs — from our forever-free tier to enterprise solutions.
            </Typography>

            {/* Billing toggle */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 6,
              }}
            >
              <Typography
                variant="subtitle1"
                component="span"
                sx={{ fontWeight: annually ? 400 : 600, mr: 1 }}
              >
                Monthly
              </Typography>
              <Switch
                checked={annually}
                onChange={() => setAnnually(!annually)}
                color="secondary"
              />
              <Typography
                variant="subtitle1"
                component="span"
                sx={{ fontWeight: annually ? 600 : 400, ml: 1 }}
              >
                Annually
                <Chip
                  label="Save 20%"
                  size="small"
                  color="secondary"
                  sx={{ ml: 1, height: 20, fontSize: '0.625rem' }}
                />
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Pricing cards */}
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
          <Grid
            container
            spacing={4}
            justifyContent="center"
            component={m.div}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {plans.map((plan) => (
              <Grid item xs={12} sm={6} md={3} key={plan.id} component={m.div} variants={fadeInUp}>
                <Card
                  elevation={plan.popular ? 8 : 1}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 4,
                    position: 'relative',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 8,
                    },
                    ...(plan.popular && {
                      borderTop: '4px solid',
                      borderColor: 'secondary.main',
                      overflow: 'visible',
                    }),
                  }}
                >
                  {plan.popular && (
                    <Chip
                      icon={<StarIcon sx={{ fontSize: '1rem', color: '#FF9800' }} />}
                      label="Best Value"
                      sx={{
                        position: 'absolute',
                        top: -14,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        fontWeight: 700,
                        fontSize: '0.75rem',
                        backgroundColor: '#FFF3E0',
                        color: '#E65100',
                        letterSpacing: '0.5px',
                        zIndex: 5,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
                      }}
                    />
                  )}
                  <CardContent sx={{ p: 4, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <Typography variant="h4" component="h2" fontWeight={700} gutterBottom>
                      {plan.name}
                    </Typography>

                    <Box sx={{ my: 4 }}>
                      {plan.price === 0 ? (
                        <>
                          <Typography variant="h3" component="p" fontWeight={800}>
                            $0
                          </Typography>
                          <Typography variant="body2" color="success.main" fontWeight={500}>
                            {plan.label || 'Free forever'} — no credit card required
                          </Typography>
                        </>
                      ) : (
                        <>
                          <Typography variant="h3" component="p" fontWeight={800}>
                            {formatPrice(annually ? plan.yearly : plan.price)}
                            <Typography component="span" variant="body2" color="text.secondary">
                              /{annually ? 'year' : 'month'}
                            </Typography>
                          </Typography>
                          {annually && (
                            <Typography variant="body2" color="success.main" fontWeight={500}>
                              Save {formatPrice((plan.price * 12) - plan.yearly)} per year
                            </Typography>
                          )}
                        </>
                      )}
                    </Box>

                    <Divider sx={{ my: 3 }} />

                    <List sx={{ mb: 3, flexGrow: 1 }}>
                      {plan.features.map((feature, index) => (
                        <ListItem key={index} sx={{ px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 36 }}>
                            <CheckCircleOutlineIcon sx={{ color: 'success.main' }} />
                          </ListItemIcon>
                          <ListItemText primary={feature} />
                        </ListItem>
                      ))}
                    </List>

                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      size="large"
                      component="a"
                      href="https://app.multipost.pro"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Get Started for MultiPost ${plan.name} plan`}
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        py: 1.5,
                        fontWeight: 600,
                        mt: 'auto',
                      }}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          {/* Enterprise call to action */}
          <Paper
            component={m.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.7 } }}
            elevation={0}
            sx={{
              mt: 8,
              p: 4,
              borderRadius: 4,
              border: '1px solid',
              borderColor: 'divider',
              textAlign: 'center',
            }}
          >
            <Typography variant="h5" component="h2" fontWeight={700} gutterBottom>
              Need a custom solution?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: 700, mx: 'auto' }}>
              If you have specific requirements or need a tailored solution for your team, contact us for a plan that fits your business needs.
            </Typography>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              component={RouterLink}
              to="/contact"
              sx={{ fontWeight: 600, px: 4 }}
            >
              Contact Us
            </Button>
          </Paper>

          {/* FAQ section */}
          <Box sx={{ mt: 10 }}>
            <Typography variant="h4" component="h2" fontWeight={700} textAlign="center" gutterBottom>
              Frequently Asked Questions
            </Typography>

            <Grid container spacing={4} sx={{ mt: 2 }}>
              <Grid item xs={12} md={6}>
                <Card elevation={0} sx={{ p: 3, height: '100%', borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
                  <Typography variant="h6" component="h3" fontWeight={600} gutterBottom>
                    How are subscriptions billed?
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Subscriptions are billed either monthly or annually, depending on your preference. Annual plans come with a 20% discount compared to monthly billing.
                  </Typography>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card elevation={0} sx={{ p: 3, height: '100%', borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
                  <Typography variant="h6" component="h3" fontWeight={600} gutterBottom>
                    Can I upgrade my plan later?
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Yes, you can upgrade your subscription at any time. The new charges will be prorated based on the remaining time in your current billing cycle.
                  </Typography>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card elevation={0} sx={{ p: 3, height: '100%', borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
                  <Typography variant="h6" component="h3" fontWeight={600} gutterBottom>
                    How many platforms can I connect?
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    All plans — including the Free tier — include Unlimited Platform Connections. Connect to YouTube, TikTok, Instagram, and every supported platform at no extra cost.
                  </Typography>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card elevation={0} sx={{ p: 3, height: '100%', borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
                  <Typography variant="h6" component="h3" fontWeight={600} gutterBottom>
                    Is MultiPost really free?
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Yes! Our Free Tier is free forever — no credit card required. You get 1 daily upload, 5 scheduled uploads per month, unlimited platform connections, basic video metadata, custom thumbnails, and standard support. When you're ready for more, simply upgrade to a paid plan.
                  </Typography>
                </Card>
              </Grid>
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
          <Card
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
              component="h2"
              gutterBottom
              sx={{
                fontWeight: 700,
                mb: 3,
              }}
            >
              Ready to Simplify Your Content Management?
            </Typography>
            <Typography
              variant="h6"
              component="p"
              color="textSecondary"
              sx={{
                mb: 4,
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              Join leading content creators who are saving time and growing their audience with MultiPost.
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
          </Card>
        </Container>
      </Box>
    </Box>
  );
};

export default PricingPage; 