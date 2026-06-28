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
  { label: 'Gallery', path: '/gallery' },
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

  // On home + not scrolled: transparent over hero image
  // Otherwise: white bar
  const isTransparent = isHome && !scrolled;

  return (
    <HideOnScroll>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: isTransparent ? 'transparent' : '#FFFFFF',
          backdropFilter: isTransparent ? 'blur(6px)' : 'none',
          borderBottom: isTransparent ? 'none' : '1px solid #E0DDD9',
          transition: 'background-color 0.35s ease, border-color 0.35s ease',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ py: 1 }}>

            {/* ── Logo ── */}
            <Box
              component={Link}
              to="/"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.2,
                textDecoration: 'none',
                flexGrow: { xs: 1, md: 0 },
                mr: { md: 5 },
              }}
            >
              <Box
                sx={{
                  width: 38,
                  height: 38,
                  borderRadius: '10px',
                  bgcolor: isTransparent ? 'rgba(233,196,106,0.18)' : 'rgba(45,106,79,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background-color 0.35s ease',
                }}
              >
                <LocalCafeIcon
                  sx={{
                    fontSize: 22,
                    color: isTransparent ? '#E9C46A' : 'primary.main',
                    transition: 'color 0.35s ease',
                  }}
                />
              </Box>
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 700,
                    fontSize: '1.45rem',
                    lineHeight: 1.1,
                    color: isTransparent ? '#FFFFFF' : 'primary.dark',
                    transition: 'color 0.35s ease',
                  }}
                >
                  Apna Adda
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: isTransparent ? 'rgba(255,255,255,0.55)' : 'text.secondary',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    fontSize: '0.58rem',
                    display: 'block',
                    transition: 'color 0.35s ease',
                  }}
                >
                  Café & Restaurant
                </Typography>
              </Box>
            </Box>

            {/* ── Desktop Nav ── */}
            {!isMobile && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, flexGrow: 1 }}>
                {navLinks.map((link) => {
                  const active = location.pathname === link.path;
                  return (
                    <Button
                      key={link.path}
                      component={Link}
                      to={link.path}
                      sx={{
                        color: isTransparent
                          ? active ? '#E9C46A' : 'rgba(255,255,255,0.85)'
                          : active ? 'primary.main' : 'text.secondary',
                        borderRadius: '8px',
                        px: 2,
                        py: 0.8,
                        fontWeight: active ? 700 : 500,
                        fontSize: '0.9rem',
                        position: 'relative',
                        transition: 'color 0.25s ease',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: 5,
                          left: '50%',
                          transform: active
                            ? 'translateX(-50%) scaleX(1)'
                            : 'translateX(-50%) scaleX(0)',
                          width: '50%',
                          height: '2px',
                          backgroundColor: isTransparent ? '#E9C46A' : '#2D6A4F',
                          transition: 'transform 0.25s ease, background-color 0.35s ease',
                          borderRadius: '2px',
                        },
                        '&:hover': {
                          bgcolor: isTransparent
                            ? 'rgba(255,255,255,0.08)'
                            : 'rgba(45,106,79,0.06)',
                          color: isTransparent ? '#FFFFFF' : 'primary.main',
                        },
                        '&:hover::after': {
                          transform: 'translateX(-50%) scaleX(1)',
                        },
                      }}
                    >
                      {link.label}
                    </Button>
                  );
                })}
              </Box>
            )}

            {/* ── Reserve CTA ── */}
            {!isMobile && (
              <Button
                component={Link}
                to="/reservations"
                variant="contained"
                color={isTransparent ? 'secondary' : 'primary'}
                sx={{
                  ml: 2,
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                  transition: 'background 0.35s ease',
                }}
              >
                Reserve a Table
              </Button>
            )}

            {/* ── Mobile Menu Icon ── */}
            {isMobile && (
              <IconButton
                edge="end"
                onClick={() => setDrawerOpen(true)}
                sx={{ color: isTransparent ? '#FFFFFF' : 'primary.main' }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </Container>

        {/* ── Mobile Drawer ── */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          PaperProps={{
            sx: {
              width: 290,
              bgcolor: '#FFFFFF',
              pt: 2,
            },
          }}
        >
          {/* Drawer header */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              px: 2.5,
              pb: 2,
              borderBottom: '1px solid #E0DDD9',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LocalCafeIcon sx={{ color: 'primary.main', fontSize: 22 }} />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 700,
                  color: 'primary.dark',
                  fontSize: '1.3rem',
                }}
              >
                Apna Adda
              </Typography>
            </Box>
            <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: 'text.secondary' }}>
              <CloseIcon />
            </IconButton>
          </Box>

          <List sx={{ pt: 1 }}>
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <ListItem key={link.path} disablePadding>
                  <ListItemButton
                    component={Link}
                    to={link.path}
                    onClick={() => setDrawerOpen(false)}
                    sx={{
                      py: 1.4,
                      px: 3,
                      borderLeft: active ? '3px solid' : '3px solid transparent',
                      borderColor: active ? 'primary.main' : 'transparent',
                      bgcolor: active ? 'rgba(45,106,79,0.06)' : 'transparent',
                      '&:hover': {
                        bgcolor: 'rgba(45,106,79,0.06)',
                        borderColor: 'primary.light',
                      },
                    }}
                  >
                    <ListItemText
                      primary={link.label}
                      primaryTypographyProps={{
                        fontWeight: active ? 700 : 400,
                        fontSize: '1rem',
                        color: active ? 'primary.main' : 'text.primary',
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}

            <ListItem sx={{ px: 2.5, pt: 2.5 }}>
              <Button
                component={Link}
                to="/reservations"
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => setDrawerOpen(false)}
                sx={{ fontWeight: 700, py: 1.3 }}
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