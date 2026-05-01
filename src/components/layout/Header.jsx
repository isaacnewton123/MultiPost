import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

// Import the logo
import logoImg from '../../assets/images/LogoWithBG.webp';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Features', path: '/features' },
  { name: 'Platforms', path: '/platforms' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Contact', path: '/contact' },
];

function Header({ scrolled }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <AppBar 
      position="sticky" 
      elevation={scrolled ? 4 : 0}
      sx={{
        backgroundColor: scrolled ? 'white' : 'rgba(255, 255, 255, 0.95)',
        transition: 'all 0.3s ease',
        boxShadow: scrolled ? '0px 2px 20px rgba(0, 0, 0, 0.08)' : 'none',
        backdropFilter: 'blur(10px)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 1 }}>
          {/* Logo */}
          <Box 
            component={RouterLink}
            to="/"
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              textDecoration: 'none' 
            }}
          >
            <Box 
              component="img" 
              src={logoImg} 
              alt="MultiPost — multi-platform video distribution tool"
              loading="eager"
              width={50}
              height={50}
              sx={{ 
                height: 50, 
                display: 'flex',
                mr: 1
              }}
            />
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            {navItems.map((item) => (
              <Button 
                key={item.path}
                component={RouterLink}
                to={item.path}
                sx={{ 
                  mx: 1,
                  color: scrolled 
                    ? (isActive(item.path) ? 'primary.main' : 'text.primary')
                    : (isActive(item.path) ? 'primary.light' : 'text.primary'),
                  fontWeight: isActive(item.path) ? 700 : 500,
                  position: 'relative',
                  '&::after': isActive(item.path) ? {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '70%',
                    height: 2,
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 2,
                  } : {},
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '30%',
                      height: 2,
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: 2,
                    }
                  }
                }}
              >
                {item.name}
              </Button>
            ))}
            <Button 
              variant="contained" 
              color="secondary"
              component="a"
              href="https://app.multipost.pro"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                ml: 2,
                px: 3,
                py: 1,
                boxShadow: scrolled ? 'none' : '0 0 15px rgba(232, 76, 61, 0.5)',
                '&:hover': {
                  boxShadow: scrolled ? '0px 4px 8px rgba(0, 0, 0, 0.05)' : '0 0 20px rgba(232, 76, 61, 0.7)',
                }
              }}
            >
              Get Started
            </Button>
          </Box>

          {/* Mobile Navigation */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              edge="end"
              color={scrolled ? "primary" : "default"}
              aria-label="Open navigation menu"
              onClick={handleDrawerToggle}
              sx={{
                color: scrolled ? 'primary.main' : 'text.primary',
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: 280,
            boxSizing: 'border-box',
            borderTopLeftRadius: 16,
            borderBottomLeftRadius: 16,
          },
        }}
      >
        <Box
          sx={{ 
            width: '100%',
            py: 4,
            px: 2,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}
          role="presentation"
          onClick={handleDrawerToggle}
        >
          <Box 
            component="img" 
            src={logoImg} 
            alt="MultiPost — multi-platform video distribution tool"
            loading="eager"
            width={40}
            height={40}
            sx={{ 
              height: 40, 
              mb: 4,
              mx: 'auto',
            }}
          />
          
          <List>
            {navItems.map((item) => (
              <ListItem 
                key={item.path}
                component={RouterLink}
                to={item.path}
                sx={{
                  borderRadius: 2,
                  mb: 1,
                  backgroundColor: isActive(item.path) ? 'primary.light' : 'transparent',
                  color: isActive(item.path) ? 'white' : 'text.primary',
                  '&:hover': {
                    backgroundColor: 'primary.light',
                    color: 'white',
                  }
                }}
              >
                <ListItemText 
                  primary={item.name} 
                  primaryTypographyProps={{
                    fontWeight: isActive(item.path) ? 700 : 500,
                  }}
                />
              </ListItem>
            ))}
          </List>
          
          <Box sx={{ mt: 'auto', px: 2 }}>
            <Button 
              variant="contained" 
              color="secondary"
              fullWidth
              component="a"
              href="https://app.multipost.pro"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ mt: 4 }}
            >
              Get Started
            </Button>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default Header; 