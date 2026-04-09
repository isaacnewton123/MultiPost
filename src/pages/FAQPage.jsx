import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import SEO from '../components/SEO';
import { 
  Box, 
  Container, 
  Typography, 
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Paper,
  useTheme,
  Grid,
  Divider
} from '@mui/material';
import { motion } from 'framer-motion';

// Icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchIcon from '@mui/icons-material/Search';

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

const FAQPage = () => {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState('');

  const faqCategories = [
    {
      title: 'General Questions',
      faqs: [
        {
          question: 'What is MultiPost?',
          answer: 'MultiPost is a comprehensive platform that allows content creators to upload and manage videos across multiple social media platforms simultaneously. Our tool streamlines the process of distributing content, saving time and effort.'
        },
        {
          question: 'Which social media platforms are supported?',
          answer: 'We currently support YouTube, Facebook, Instagram, Twitter, TikTok, LinkedIn, and several other platforms. We regularly add new platforms based on user demand and market trends.'
        },
        {
          question: 'Do I need to create an account to use MultiPost?',
          answer: 'Yes, you need to create an account to use our services. This allows us to securely connect to your social media accounts and provide a personalized experience.'
        },
        {
          question: 'Is my data secure with MultiPost?',
          answer: 'Absolutely. We take data security very seriously. We use industry-standard encryption, secure OAuth connections, and never store your social media passwords. All data is processed in compliance with GDPR and other privacy regulations.'
        }
      ]
    },
    {
      title: 'Features & Functionality',
      faqs: [
        {
          question: 'Can I schedule uploads for specific dates and times?',
          answer: 'Yes, our platform allows you to schedule content uploads for optimal posting times across all connected platforms. You can set specific dates and times for each platform or use the same schedule for all.'
        },
        {
          question: 'Can I upload different video formats?',
          answer: 'Yes, we support all major video formats including MP4, MOV, AVI, and more. Our system will automatically optimize and convert your videos to the appropriate format for each platform.'
        },
        {
          question: 'Can I customize thumbnails for each platform?',
          answer: 'Absolutely. You can upload custom thumbnails or use our built-in thumbnail editor to create platform-specific thumbnails. Different platforms have different optimal thumbnail dimensions, and our system helps you optimize for each.'
        },
        {
          question: 'Does MultiPost support captions and subtitles?',
          answer: 'Yes, you can upload SRT subtitle files or create captions directly in our platform. We support multi-language captions and can automatically generate initial captions for your videos.'
        }
      ]
    },
    {
      title: 'Account & Billing',
      faqs: [
        {
          question: 'How much does MultiPost cost?',
          answer: 'We offer several pricing tiers to accommodate different needs. Our Basic plan starts at $4.55/month, the Premium plan at $9.09/month, and the Enterprise plan at $21.21/month. Annual subscriptions are available with significant savings. Please visit our Pricing page for detailed information.'
        },
        {
          question: 'Is there a free trial available?',
          answer: 'No, we currently don\'t offer a free trial. However, we provide a 30-day money-back guarantee if you\'re not satisfied with our service.'
        },
        {
          question: 'Can I upgrade or downgrade my plan at any time?',
          answer: 'Yes, you can change your subscription plan at any time. Upgrades take effect immediately, while downgrades will apply at the end of your current billing cycle.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards, PayPal, and for Enterprise customers, we can arrange bank transfers or other payment methods as needed.'
        }
      ]
    },
    {
      title: 'Technical Support',
      faqs: [
        {
          question: 'What kind of support is available?',
          answer: 'All users have access to our knowledge base and email support. Pro users get priority email support with faster response times. Enterprise customers receive dedicated account managers and phone support.'
        },
        {
          question: 'How quickly can I expect a response from support?',
          answer: 'Basic users typically receive responses within 24-48 hours. Pro users can expect responses within 12 hours. Enterprise support SLAs guarantee responses within 4 hours during business hours.'
        },
        {
          question: 'Is there a community forum for users?',
          answer: 'Yes, we maintain an active community forum where users can share tips, ask questions, and connect with other content creators. Our team actively participates in the forum as well.'
        },
        {
          question: 'Do you offer training for new users?',
          answer: 'Yes, we provide free tutorials and documentation for all users. Pro users get access to advanced webinars, while Enterprise customers receive personalized onboarding and training sessions.'
        }
      ]
    },
    {
      title: 'Legal Information',
      faqs: [
        {
          question: 'What does your Privacy Policy cover?',
          answer: 'Our Privacy Policy covers how we collect, use, and share your personal information. We collect data when you register, connect social media accounts, upload content, and interact with our platform. We use industry-standard security measures to protect your data and never sell your information to third parties. For complete details, please visit our Privacy Policy page.'
        },
        {
          question: 'What are the key points in your Terms of Service?',
          answer: 'Our Terms of Service outline the rules for using MultiPost. Key points include: you must comply with YouTube and other platform terms of service, you retain ownership of your content but grant us license to process it, we can terminate accounts for misuse, we provide the service "as is" with no warranties, and we limit our liability. For full details, please read our complete Terms of Service.'
        },
        {
          question: 'How do you handle data from YouTube API Services?',
          answer: 'We access your YouTube account data only after you explicitly grant permission. We adhere to Google\'s API Services User Data Policy, including limiting our use to providing our service, maintaining reasonable security measures, and allowing you to revoke access. You can revoke MultiPost\'s access to your Google account at any time through your Google security settings.'
        },
        {
          question: 'What happens to my data if I cancel my subscription?',
          answer: 'If you cancel your subscription, we retain your basic account information but remove access to your social media accounts. Your uploaded content and historical data remain accessible for 30 days after cancellation. After this period, we delete your data from our active systems, though some information may remain in backups for a limited time as required by law.'
        }
      ]
    }
  ];

  // Filter FAQs based on search query
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter FAQs based on search query
  const filteredCategories = searchQuery.trim() === '' 
    ? faqCategories 
    : faqCategories.map(category => ({
        ...category,
        faqs: category.faqs.filter(faq => 
          faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
          faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.faqs.length > 0);

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <SEO
        title="FAQ"
        description="Get answers to frequently asked questions about MultiPost — accounts, uploads, platform support, billing, and more."
        path="/faq"
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
              Frequently Asked <Box component="span" sx={{ color: theme.palette.secondary.main }}>Questions</Box>
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
              Find answers to common questions about MultiPost's features, pricing, and technical details.
            </Typography>

            {/* Search Box */}
            <Box
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              sx={{ 
                display: 'flex', 
                justifyContent: 'center',
                mb: 4,
                position: 'relative',
                maxWidth: 600,
                mx: 'auto',
              }}
            >
              <Box
                component="input"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={handleSearchChange}
                sx={{
                  width: '100%',
                  py: 2,
                  px: 4,
                  borderRadius: 50,
                  border: 'none',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  fontFamily: 'inherit',
                  fontSize: '1rem',
                  pl: 6,
                  '&:focus': {
                    outline: 'none',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                  }
                }}
              />
              <SearchIcon 
                sx={{ 
                  position: 'absolute', 
                  left: 20, 
                  top: '50%', 
                  transform: 'translateY(-50%)',
                  color: theme.palette.primary.main,
                }} 
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* FAQ Content */}
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
          <Grid container spacing={6}>
            {/* Left Column - Category Navigation */}
            <Grid 
              item 
              xs={12} 
              md={3}
              component={motion.div}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 4,
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  position: 'sticky',
                  top: 100,
                }}
              >
                <Typography variant="h6" fontWeight={700} sx={{ mb: 3 }}>
                  Categories
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  {filteredCategories.map((category, i) => (
                    <Button
                      key={i}
                      sx={{
                        justifyContent: 'flex-start',
                        py: 1.5,
                        borderRadius: 2,
                        mb: 1,
                        color: 'text.primary',
                        fontWeight: 500,
                        '&:hover': {
                          backgroundColor: theme.palette.primary.main + '10',
                        }
                      }}
                      href={`#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {category.title}
                    </Button>
                  ))}
                </Box>
              </Paper>
            </Grid>

            {/* Right Column - FAQs */}
            <Grid item xs={12} md={9}>
              <Box
                component={motion.div}
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {filteredCategories.length > 0 ? (
                  filteredCategories.map((category, i) => (
                    <Box 
                      key={i} 
                      sx={{ mb: 6 }}
                      id={category.title.toLowerCase().replace(/\s+/g, '-')}
                      component={motion.div}
                      variants={fadeInUp}
                    >
                      <Typography 
                        variant="h4" 
                        gutterBottom 
                        sx={{ 
                          fontWeight: 700,
                          mb: 3,
                          position: 'relative',
                          pl: 2,
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            left: 0,
                            top: '15%',
                            height: '70%',
                            width: 4,
                            backgroundColor: theme.palette.primary.main,
                            borderRadius: 4,
                          }
                        }}
                      >
                        {category.title}
                      </Typography>

                      {category.faqs.map((faq, j) => (
                        <Accordion
                          key={j}
                          elevation={0}
                          sx={{
                            mb: 2,
                            border: '1px solid rgba(0, 0, 0, 0.08)',
                            borderRadius: '8px !important',
                            '&::before': {
                              display: 'none',
                            },
                            '&.Mui-expanded': {
                              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                              borderColor: 'transparent',
                            }
                          }}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            sx={{
                              '& .MuiAccordionSummary-content': {
                                my: 1.5,
                              }
                            }}
                          >
                            <Typography variant="h6" fontWeight={600}>
                              {faq.question}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                              {faq.answer}
                            </Typography>
                          </AccordionDetails>
                        </Accordion>
                      ))}
                    </Box>
                  ))
                ) : (
                  <Box sx={{ textAlign: 'center', py: 8 }}>
                    <Typography variant="h5" color="text.secondary">
                      No FAQ matches your search query.
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
                      Try using different keywords or browse through our categories.
                    </Typography>
                  </Box>
                )}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Contact CTA Section */}
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
              Still Have Questions?
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
              Our support team is here to help. Reach out to us and we'll get back to you as soon as possible.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              component={RouterLink}
              to="/contact"
              endIcon={<ArrowForwardIcon />}
              sx={{
                px: 5,
                py: 1.5,
                fontSize: '1.1rem',
              }}
            >
              Contact Support
            </Button>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default FAQPage; 