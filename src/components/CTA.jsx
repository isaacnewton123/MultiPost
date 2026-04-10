import React from 'react';
import { Box, Container, Typography, Button, Paper, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CTA = () => {
  const theme = useTheme();

  return (
    <Box 
      sx={{ 
        py: 10,
        backgroundImage: 'linear-gradient(135deg, #3f51b5 0%, #5c6bc0 100%)',
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Paper
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          elevation={6}
          sx={{
            borderRadius: 4,
            py: { xs: 5, md: 8 },
            px: { xs: 3, md: 6 },
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.2)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {/* Decoration elements */}
          <Box 
            sx={{
              position: 'absolute',
              width: 300,
              height: 300,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
              top: -150,
              left: -150,
              zIndex: 0,
            }}
          />
          <Box 
            sx={{
              position: 'absolute',
              width: 200,
              height: 200,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
              bottom: -100,
              right: -100,
              zIndex: 0,
            }}
          />

          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Typography 
              component={motion.h2}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variant="h2" 
              gutterBottom
              sx={{
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              }}
            >
              Ready to Streamline Your Content Management?
            </Typography>
            
            <Typography 
              component={motion.p}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              variant="h5"
              sx={{ 
                mb: 5,
                maxWidth: 700,
                mx: 'auto',
                opacity: 0.9
              }}
            >
              Join thousands of content creators who are saving time and growing their audience with MultiPost.
            </Typography>
            
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 2,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Button
                variant="contained"
                color="secondary"
                size="large"
                component="a"
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  px: 4, 
                  py: 1.5,
                  fontSize: '1.1rem',
                  minWidth: 200,
                }}
              >
                Get-Waitlist
              </Button>
              
              <Button
                variant="outlined"
                size="large"
                component={Link}
                to="/contact"
                sx={{ 
                  px: 4, 
                  py: 1.5,
                  fontSize: '1.1rem',
                  borderColor: 'white',
                  color: 'white',
                  minWidth: 200,
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  }
                }}
              >
                Contact Sales
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default CTA; 