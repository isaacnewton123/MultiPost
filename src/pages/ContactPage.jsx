import React, { useState } from 'react';
import SEO from '../components/SEO';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  TextField, 
  Button, 
  useTheme,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardContent,
  Divider,
  Stack,
  Alert,
  CircularProgress
} from '@mui/material';
import { motion } from 'framer-motion';

// Icons
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
  }
};

const ContactPage = () => {
  const theme = useTheme();

  // --- State for Form Fields ---
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    subject: '',
    inquiryType: '',
    message: '',
  });

  // --- State for Submission Status ---
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // --- Handle Input Changes ---
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // --- Handle Form Submission ---
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    // Basic validation (can be expanded)
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setError('Please fill in all required fields.');
      setLoading(false);
      return;
    }

    try {
      const apiUrl = '/api/waitlist';

      const response = await fetch(apiUrl, { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Failed to send message. Please try again.' }));
        throw new Error(errorData.message || 'Failed to send message.');
      }

      // Assuming backend sends back a success message
      const result = await response.json(); 
      setSuccess(result.message || 'Message sent successfully!');
      // Optionally clear the form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        subject: '',
        inquiryType: '',
        message: '',
      });

    } catch (err) {
      setError(err.message || 'An unexpected error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ minHeight: '100vh' }}>
      <SEO
        title="Contact Us — Free Auto Posting Tool"
        description="Have questions about MultiPost? Reach out to our team for support, partnerships, or sales inquiries. Start for free with unlimited platform connections."
        path="/contact"
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
              Get In <Box component="span" sx={{ color: theme.palette.secondary.main }}>Touch</Box>
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
              Have questions or ready to Get-Waitlist? Our team is here to help you streamline your content management.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Contact Form and Info Section */}
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
            component={motion.div}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {/* Left Column - Contact Form */}
            <Grid 
              item 
              xs={12} 
              md={7} 
              lg={8}
              component={motion.div}
              variants={fadeInUp}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, sm: 5 },
                  borderRadius: 4,
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                }}
              >
                <Typography variant="h4" component="h2" gutterBottom fontWeight={700} sx={{ mb: 4 }}>
                  Send Us a Message
                </Typography>
                
                {/* --- Feedback Messages --- */} 
                {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}
                {success && <Alert severity="success" sx={{ mb: 3 }}>{success}</Alert>}
                
                <Box component="form" noValidate sx={{ mt: 2 }} onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        id="firstName"
                        name="firstName"
                        label="First Name"
                        variant="outlined"
                        value={formData.firstName}
                        onChange={handleChange}
                        disabled={loading}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        id="lastName"
                        name="lastName"
                        label="Last Name"
                        variant="outlined"
                        value={formData.lastName}
                        onChange={handleChange}
                        disabled={loading}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="email"
                        name="email"
                        label="Email Address"
                        variant="outlined"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={loading}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        id="company"
                        name="company"
                        label="Company Name"
                        variant="outlined"
                        value={formData.company}
                        onChange={handleChange}
                        disabled={loading}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="subject"
                        name="subject"
                        label="Subject"
                        variant="outlined"
                        value={formData.subject}
                        onChange={handleChange}
                        disabled={loading}
                        inputProps={{ maxLength: 50 }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl fullWidth variant="outlined" disabled={loading}>
                        <InputLabel id="inquiry-type-label">Inquiry Type</InputLabel>
                        <Select
                          labelId="inquiry-type-label"
                          id="inquiry-type"
                          name="inquiryType"
                          label="Inquiry Type"
                          value={formData.inquiryType}
                          onChange={handleChange}
                        >
                          <MenuItem value=""><em>Select...</em></MenuItem>
                          <MenuItem value="general">General Question</MenuItem>
                          <MenuItem value="sales">Sales Inquiry</MenuItem>
                          <MenuItem value="support">Technical Support</MenuItem>
                          <MenuItem value="partnership">Partnership Opportunity</MenuItem>
                          <MenuItem value="other">Other</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="message"
                        name="message"
                        label="Your Message"
                        variant="outlined"
                        multiline
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        disabled={loading}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        disabled={loading}
                        endIcon={loading ? <CircularProgress size={24} color="inherit" /> : <SendIcon />}
                        sx={{ 
                          py: 1.5,
                          px: 4,
                        }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </Grid>

            {/* Right Column - Contact Information */}
            <Grid 
              item 
              xs={12} 
              md={5}
              lg={4}
              component={motion.div}
              variants={fadeInUp}
            >
              <Stack spacing={3}>
                {/* Contact Information Card */}
                <Card
                  elevation={0}
                  sx={{
                    borderRadius: 4,
                    border: '1px solid rgba(0, 0, 0, 0.08)',
                    height: '100%',
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Typography variant="h5" component="h2" gutterBottom fontWeight={700} sx={{ mb: 3 }}>
                      Contact Information
                    </Typography>
                    
                    <Box sx={{ mb: 4 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <EmailIcon color="primary" sx={{ mr: 2 }} />
                        <Typography variant="body1" fontWeight={500}>
                          Email Us
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="text.secondary" sx={{ ml: 5 }}>
                        support@multipost.pro
                      </Typography>
                    </Box>
                    
                    <Divider sx={{ mb: 3 }} />
                    
                    <Typography variant="subtitle2" fontWeight={600} gutterBottom>
                      FOLLOW US
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
                      <Button
                        variant="outlined"
                        color="primary"
                        component="a"
                        href="https://www.facebook.com/share/1GUhpG8mHu/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Follow MultiPost on Facebook"
                        sx={{ 
                          minWidth: 0, 
                          p: 1,
                          borderRadius: '50%',
                        }}
                      >
                        <FacebookIcon />
                      </Button>
                      <Button
                        variant="outlined"
                        color="primary"
                        component="a"
                        href="https://x.com/MultiPost_pro"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Follow MultiPost on X"
                        sx={{ 
                          minWidth: 0, 
                          p: 1,
                          borderRadius: '50%',
                        }}
                      >
                        <XIcon />
                      </Button>
                      <Button
                        variant="outlined"
                        color="primary"
                        component="a"
                        href="https://www.linkedin.com/in/multi-post-b642b1402"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Follow MultiPost on LinkedIn"
                        sx={{ 
                          minWidth: 0, 
                          p: 1,
                          borderRadius: '50%',
                        }}
                      >
                        <LinkedInIcon />
                      </Button>
                      <Button
                        variant="outlined"
                        color="primary"
                        component="a"
                        href="https://www.instagram.com/multipost.pro"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Follow MultiPost on Instagram"
                        sx={{ 
                          minWidth: 0, 
                          p: 1,
                          borderRadius: '50%',
                        }}
                      >
                        <InstagramIcon />
                      </Button>
                      <Button
                        variant="outlined"
                        color="primary"
                        component="a" 
                        href="https://www.youtube.com/@multipostpro"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Follow MultiPost on YouTube"
                        sx={{ 
                          minWidth: 0,
                          p: 1,
                          borderRadius: '50%',
                        }}
                      >
                        <YouTubeIcon />
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default ContactPage; 
