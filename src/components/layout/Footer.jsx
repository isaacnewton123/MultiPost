import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Link, 
  Stack, 
  IconButton, 
  useTheme,
  Divider
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

// Import the logo
import logoImg from '../../assets/images/LogoWithBG.webp';

const Footer = () => {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Features', path: '/features' },
        { name: 'Platforms', path: '/platforms' },
        { name: 'Pricing', path: '/pricing' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'FAQ', path: '/faq' },
        { name: 'Blog', path: '/blog' },
        { name: 'Documentation', path: '/docs' },
        { name: 'Support', path: '/contact' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Service', path: '/terms' },
      ]
    },
  ];

  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: theme.palette.grey[900],
        color: 'white',
        pt: 10,
        pb: 6,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative Elements */}
      <Box 
        sx={{
          position: 'absolute',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.primary.dark} 0%, rgba(0,0,0,0) 70%)`,
          opacity: 0.05,
          top: -300,
          right: -200,
          zIndex: 0,
        }}
      />
      <Box 
        sx={{
          position: 'absolute',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${theme.palette.secondary.dark} 0%, rgba(0,0,0,0) 70%)`,
          opacity: 0.05,
          bottom: -200,
          left: -100,
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6}>
          {/* Logo and company info */}
          <Grid item xs={12} md={5} lg={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <Box 
                component="img" 
                src={logoImg} 
                alt="MultiPost — multi-platform video distribution tool"
                sx={{ height: 45, mr: 1 }}
              />
            </Box>
            <Typography variant="body1" sx={{ mb: 3, opacity: 0.7, maxWidth: 400, lineHeight: 1.7 }}>
              MultiPost provides an advanced platform for managing and uploading content to multiple social media platforms simultaneously. Save time and grow your online presence.
            </Typography>
            
            <Stack direction="row" spacing={1.5}>
              <IconButton 
                aria-label="Facebook" 
                size="medium"
                component="a"
                href="https://www.facebook.com/share/1GUhpG8mHu/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  color: 'white', 
                  opacity: 0.7,
                  transition: 'all 0.3s ease',
                  '&:hover': { 
                    opacity: 1,
                    transform: 'translateY(-3px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  } 
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton 
                aria-label="X" 
                size="medium"
                component="a"
                href="https://x.com/multipost_pro"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  color: 'white', 
                  opacity: 0.7,
                  transition: 'all 0.3s ease',
                  '&:hover': { 
                    opacity: 1,
                    transform: 'translateY(-3px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  } 
                }}
              >
                <XIcon />
              </IconButton>
              <IconButton 
                aria-label="LinkedIn" 
                size="medium"
                component="a"
                href="https://www.linkedin.com/in/multi-post-b642b1402"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  color: 'white', 
                  opacity: 0.7,
                  transition: 'all 0.3s ease',
                  '&:hover': { 
                    opacity: 1,
                    transform: 'translateY(-3px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  } 
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton 
                aria-label="Instagram" 
                size="medium"
                component="a"
                href="https://www.instagram.com/multipost.pro/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  color: 'white', 
                  opacity: 0.7,
                  transition: 'all 0.3s ease',
                  '&:hover': { 
                    opacity: 1,
                    transform: 'translateY(-3px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  } 
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton 
                aria-label="YouTube" 
                size="medium"
                component="a"
                href="https://www.youtube.com/@multipostpro"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  color: 'white', 
                  opacity: 0.7,
                  transition: 'all 0.3s ease',
                  '&:hover': { 
                    opacity: 1,
                    transform: 'translateY(-3px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  } 
                }}
              >
                <YouTubeIcon />
              </IconButton>
            </Stack>
          </Grid>

          {/* Footer navigation links */}
          {footerLinks.map((section, i) => (
            <Grid item xs={12} sm={4} md={2} lg={2} key={i}>
              <Typography 
                variant="subtitle1" 
                fontWeight={700} 
                sx={{ 
                  mb: 3,
                  color: 'white',
                  position: 'relative',
                  display: 'inline-block',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: 0,
                    width: 40,
                    height: 2,
                    backgroundColor: theme.palette.secondary.main,
                    borderRadius: 2,
                  }
                }}
              >
                {section.title}
              </Typography>
              <Stack spacing={2}>
                {section.links.map((link, j) => (
                  <Link 
                    key={j}
                    component={RouterLink}
                    to={link.path}
                    underline="none"
                    sx={{ 
                      color: 'rgba(255, 255, 255, 0.7)', 
                      fontSize: '0.95rem',
                      transition: 'all 0.2s ease',
                      '&:hover': { 
                        color: 'white',
                        transform: 'translateX(5px)',
                      },
                      display: 'inline-block',
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </Stack>
            </Grid>
          ))}

          {/* Contact Information */}
          <Grid item xs={12} sm={4} md={3} lg={4}>
            <Typography 
              variant="subtitle1" 
              fontWeight={700} 
              sx={{ 
                mb: 3,
                color: 'white',
                position: 'relative',
                display: 'inline-block',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: 0,
                  width: 40,
                  height: 2,
                  backgroundColor: theme.palette.secondary.main,
                  borderRadius: 2,
                }
              }}
            >
              Contact Us
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" color="rgba(255, 255, 255, 0.7)" sx={{ mb: 0.5 }}>
                Email:
              </Typography>
              <Typography variant="body1" color="white" fontWeight={500}>
                support@multipost.pro
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6, backgroundColor: 'rgba(255, 255, 255, 0.1)' }} />
        
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'center', md: 'center' } }}>
          <Typography variant="body2" sx={{ opacity: 0.7, textAlign: { xs: 'center', md: 'left' } }}>
            © {currentYear} MultiPost. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.7, mt: { xs: 2, md: 0 }, textAlign: { xs: 'center', md: 'right' } }}>
            Designed and developed with ❤️ for content creators worldwide
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 