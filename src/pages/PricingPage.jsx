import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import SEO from '../components/SEO';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Card, 
  CardContent, 
  Grid, 
  Stack, 
  Chip,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
  useTheme
} from '@mui/material';
import { motion } from 'framer-motion';

// Icons
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import StarIcon from '@mui/icons-material/Star';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
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
      id: 'basic',
      name: 'Basic',
      price: 4.55,
      yearly: 43.68,
      popular: false,
      maxUploadsPerDay: 3,
      features: [
        'Daily Upload',
        'Basic video metadata',
        'Custom thumbnails',
        'Standard support via AI & Live Chat',
        'Single user access'
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 9.09,
      yearly: 87.26,
      popular: true,
      maxUploadsPerDay: 5,
      features: [
        'All Basic features',
        'Advanced video settings',
        'Upload subtitles & captions',
        'Define video chapters',
        'Add end screens & cards',
        'Scheduled uploads',
        'Video templates',
        'Priority AI & Live Chat support'
      ]
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 21.21,
      yearly: 203.62,
      popular: false,
      maxUploadsPerDay: 10,
      features: [
        'All Premium features',
        'Custom upload workflows',
        'Analytics & Insights',
        'API access',
        'Custom features development',
        'Dedicated support manager'
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
        title="Pricing"
        description="Choose the right MultiPost plan for your content workflow. Free, Basic, Premium, and Enterprise plans to fit creators of every size."
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
              Simple, Transparent <Box component="span" sx={{ color: theme.palette.secondary.main }}>Pricing</Box>
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
              Choose the plan that fits your content creation needs. All plans include our core features to streamline your social media content management.
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
            component={motion.div}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {plans.map((plan) => (
              <Grid item xs={12} md={4} key={plan.id} component={motion.div} variants={fadeInUp}>
                <Card
                  elevation={plan.popular ? 8 : 1}
                  sx={{
                    height: '100%',
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
                    }),
                  }}
                >
                  {plan.popular && (
                    <>
                      <Box
                        sx={{
                          position: 'absolute',
                          top: -40,
                          right: 0,
                          width: '100%',
                          display: 'flex',
                          justifyContent: 'center',
                          zIndex: 5
                        }}
                      >
                        <Box
                          sx={{
                            backgroundColor: '#FF9800',
                            color: 'white',
                            fontWeight: 800,
                            fontSize: '1rem',
                            px: 5,
                            py: 1.5,
                            borderRadius: '20px 20px 0 0',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
                            display: 'flex',
                            alignItems: 'center',
                            letterSpacing: '1px',
                            textTransform: 'uppercase'
                          }}
                        >
                          <StarIcon sx={{ mr: 1, fontSize: '1.2rem', color: 'yellow' }} />
                          Most Popular
                        </Box>
                      </Box>
                      
                      {/* Ribbon on the corner */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 20,
                          right: -30,
                          backgroundColor: '#FF9800',
                          color: 'white',
                          fontWeight: 800,
                          px: 4,
                          py: 0.5,
                          fontSize: '0.75rem',
                          transform: 'rotate(45deg)',
                          transformOrigin: 'center',
                          boxShadow: '0 2px 4px rgba(0,0,0,0.25)',
                          zIndex: 10,
                          letterSpacing: '0.5px',
                          textTransform: 'uppercase'
                        }}
                      >
                        Best Value
                      </Box>
                      
                      <Box 
                        sx={{ 
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          border: '4px solid',
                          borderColor: '#FF9800',
                          borderRadius: 4,
                          zIndex: 1,
                          pointerEvents: 'none'
                        }}
                      />
                    </>
                  )}
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h4" component="h2" fontWeight={700} gutterBottom>
                      {plan.name}
                    </Typography>
                    
                    <Box sx={{ my: 4 }}>
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
                    </Box>
                    
                    <Divider sx={{ my: 3 }} />
                    
                    <List sx={{ mb: 3 }}>
                      <ListItem sx={{ px: 0 }}>
                      </ListItem>
                      <ListItem sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CloudUploadIcon sx={{ color: 'error.main' }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={`${plan.maxUploadsPerDay} Daily Uploads`} 
                          primaryTypographyProps={{ fontWeight: 600 }}
                        />
                      </ListItem>
                      
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
                      color={plan.popular ? "secondary" : "primary"}
                      fullWidth
                      size="large"
                      component="a"
                      href="/contact"
                      target="_blank"
                      rel="noopener noreferrer"
                      endIcon={<ArrowForwardIcon />}
                      sx={{
                        py: 1.5,
                        fontWeight: 600,
                        mt: 2,
                      }}
                    >
                      Pre-Marketing
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          
          {/* Enterprise call to action */}
          <Paper
            component={motion.div}
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
            <Typography variant="h5" fontWeight={700} gutterBottom>
              Need a custom solution?
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3, maxWidth: 700, mx: 'auto' }}>
              If you have specific requirements or need more YouTube accounts, contact us for a tailored solution that fits your business needs.
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
            <Typography variant="h4" fontWeight={700} textAlign="center" gutterBottom>
              Frequently Asked Questions
            </Typography>
            
            <Grid container spacing={4} sx={{ mt: 2 }}>
              <Grid item xs={12} md={6}>
                <Card elevation={0} sx={{ p: 3, height: '100%', borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    How are subscriptions billed?
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Subscriptions are billed either monthly or annually, depending on your preference. Annual plans come with a 20% discount compared to monthly billing.
                  </Typography>
                </Card>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Card elevation={0} sx={{ p: 3, height: '100%', borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    Can I upgrade my plan later?
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Yes, you can upgrade your subscription at any time. The new charges will be prorated based on the remaining time in your current billing cycle.
                  </Typography>
                </Card>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Card elevation={0} sx={{ p: 3, height: '100%', borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    How many YouTube accounts can I connect?
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    The number of YouTube accounts you can connect depends on your plan: Basic (3 accounts), Premium (10 accounts), or Enterprise (30+ accounts). Enterprise customers can request additional accounts.
                  </Typography>
                </Card>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Card elevation={0} sx={{ p: 3, height: '100%', borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    Is there a free trial available?
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    No, we currently don't offer a free trial. However, we provide a 30-day money-back guarantee if you're not satisfied with our service.
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
              Ready to Simplify Your Content Management?
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
                px: 5,
                py: 1.5,
                fontSize: '1.1rem',
              }}
            >
              Pre-Marketing Today
            </Button>
          </Card>
        </Container>
      </Box>
    </Box>
  );
};

export default PricingPage; 