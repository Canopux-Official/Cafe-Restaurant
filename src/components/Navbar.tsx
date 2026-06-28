import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  useScrollTrigger,
  Slide,
  Container,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

function HideOnScroll({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHome = location.pathname === '/';

  return (
    <HideOnScroll>
      <AppBar
        position="fixed"
        elevation={scrolled || !isHome ? 4 : 0}
        sx={{
          backgroundColor: scrolled || !isHome
            ? 'primary.main'
            : 'transparent',
          backdropFilter: scrolled || !isHome ? 'none' : 'blur(8px)',
          transition: 'background-color 0.4s ease, box-shadow 0.4s ease',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ py: 0.5 }}>
            {/* Logo */}
            <Box
              component={Link}
              to="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                textDecoration: 'none',
                color: 'primary.contrastText',
                flexGrow: { xs: 1, md: 0 },
                mr: { md: 4 },
              }}
            >
              <LocalCafeIcon sx={{ fontSize: 32, color: 'secondary.light' }} />
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: '"Playfair Display", serif',
                    fontWeight: 700,
                    fontSize: '1.25rem',
                    lineHeight: 1.1,
                    color: 'inherit',
                  }}
                >
                  Brewed & Baked
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: 'secondary.light',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    fontSize: '0.6rem',
                    display: 'block',
                  }}
                >
                  Café & Restaurant
                </Typography>
              </Box>
            </Box>

            {/* Desktop Nav */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, flexGrow: 1 }}>
                {navLinks.map((link) => (
                  <Button
                    key={link.path}
                    component={Link}
                    to={link.path}
                    sx={{
                      color: 'primary.contrastText',
                      borderRadius: '50px',
                      px: 2,
                      py: 0.75,
                      fontWeight: location.pathname === link.path ? 700 : 400,
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 4,
                        left: '50%',
                        transform: location.pathname === link.path ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
                        width: '60%',
                        height: '2px',
                        backgroundColor: 'secondary.light',
                        transition: 'transform 0.3s ease',
                        borderRadius: '2px',
                      },
                      '&:hover::after': {
                        transform: 'translateX(-50%) scaleX(1)',
                      },
                    }}
                  >
                    {link.label}
                  </Button>
                ))}
              </Box>
            )}

            {/* Reserve CTA */}
            {!isMobile && (
              <Button
                component={Link}
                to="/reservations"
                variant="contained"
                color="secondary"
                sx={{ ml: 2, fontWeight: 700, whiteSpace: 'nowrap' }}
              >
                Reserve a Table
              </Button>
            )}

            {/* Mobile Menu Icon */}
            {isMobile && (
              <IconButton
                color="inherit"
                edge="end"
                onClick={() => setDrawerOpen(true)}
                sx={{ color: 'primary.contrastText' }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>

        {/* Mobile Drawer */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          PaperProps={{
            sx: {
              width: 280,
              bgcolor: 'primary.dark',
              color: 'primary.contrastText',
              pt: 2,
            },
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 2, mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LocalCafeIcon sx={{ color: 'secondary.light' }} />
              <Typography variant="h6" sx={{ fontFamily: '"Playfair Display", serif', fontWeight: 700 }}>
                Brewed & Baked
              </Typography>
            </Box>
            <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: 'primary.contrastText' }}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            {navLinks.map((link) => (
              <ListItem key={link.path} disablePadding>
                <ListItemButton
                  component={Link}
                  to={link.path}
                  onClick={() => setDrawerOpen(false)}
                  selected={location.pathname === link.path}
                  sx={{
                    py: 1.5,
                    px: 3,
                    '&.Mui-selected': {
                      bgcolor: 'rgba(200,148,58,0.2)',
                      borderLeft: '3px solid',
                      borderColor: 'secondary.main',
                    },
                    '&:hover': { bgcolor: 'rgba(255,255,255,0.08)' },
                  }}
                >
                  <ListItemText
                    primary={link.label}
                    primaryTypographyProps={{
                      fontWeight: location.pathname === link.path ? 700 : 400,
                      fontSize: '1.05rem',
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem sx={{ px: 3, pt: 2 }}>
              <Button
                component={Link}
                to="/reservations"
                variant="contained"
                color="secondary"
                fullWidth
                onClick={() => setDrawerOpen(false)}
                sx={{ fontWeight: 700 }}
              >
                Reserve a Table
              </Button>
            </ListItem>
          </List>
        </Drawer>
      </AppBar>
    </HideOnScroll>
  );
}
