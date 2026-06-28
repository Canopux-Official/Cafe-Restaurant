import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
  Stack,
  useTheme,
} from '@mui/material';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'Our Menu', path: '/menu' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
  { label: 'Reservations', path: '/reservations' },
];

const socialLinks = [
  { icon: <InstagramIcon />, href: '#', label: 'Instagram' },
  { icon: <FacebookIcon />, href: '#', label: 'Facebook' },
  { icon: <TwitterIcon />, href: '#', label: 'Twitter' },
  { icon: <YouTubeIcon />, href: '#', label: 'YouTube' },
];

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'primary.dark',
        color: 'primary.contrastText',
        pt: { xs: 6, md: 8 },
        pb: 3,
        mt: 'auto',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {/* Brand Column */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <LocalCafeIcon sx={{ fontSize: 36, color: 'secondary.light' }} />
              <Box>
                <Typography
                  variant="h5"
                  sx={{ fontFamily: '"Playfair Display", serif', fontWeight: 700, lineHeight: 1.1 }}
                >
                  Brewed & Baked
                </Typography>
                <Typography variant="caption" sx={{ color: 'secondary.light', letterSpacing: '2px', textTransform: 'uppercase' }}>
                  Café & Restaurant
                </Typography>
              </Box>
            </Box>
            <Typography variant="body2" sx={{ color: 'rgba(255,248,240,0.75)', mb: 3, maxWidth: 320, lineHeight: 1.8 }}>
              A warm corner where every cup is brewed with love and every meal crafted with passion. Come for the coffee, stay for the experience.
            </Typography>
            <Stack direction="row" spacing={1}>
              {socialLinks.map((s) => (
                <IconButton
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  size="small"
                  sx={{
                    color: 'rgba(255,248,240,0.7)',
                    bgcolor: 'rgba(255,255,255,0.08)',
                    '&:hover': { bgcolor: 'secondary.main', color: 'primary.dark' },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {s.icon}
                </IconButton>
              ))}
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700, mb: 2, color: 'secondary.light', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.8rem' }}
            >
              Quick Links
            </Typography>
            <Stack spacing={1}>
              {quickLinks.map((link) => (
                <Typography
                  key={link.path}
                  component={Link}
                  to={link.path}
                  variant="body2"
                  sx={{
                    color: 'rgba(255,248,240,0.75)',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.5,
                    transition: 'color 0.2s',
                    '&:hover': { color: 'secondary.light' },
                    '&::before': { content: '"›"', color: 'secondary.main', fontWeight: 700 },
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Stack>
          </Grid>

          {/* Hours */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700, mb: 2, color: 'secondary.light', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.8rem' }}
            >
              Opening Hours
            </Typography>
            <Stack spacing={1}>
              {[
                { day: 'Monday – Friday', time: '7:30 AM – 10:00 PM' },
                { day: 'Saturday', time: '8:00 AM – 11:00 PM' },
                { day: 'Sunday', time: '9:00 AM – 9:00 PM' },
              ].map((h) => (
                <Box key={h.day} sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                  <AccessTimeIcon sx={{ fontSize: 16, color: 'secondary.main', mt: 0.3, flexShrink: 0 }} />
                  <Box>
                    <Typography variant="body2" sx={{ color: 'rgba(255,248,240,0.9)', fontWeight: 600 }}>{h.day}</Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(255,248,240,0.6)' }}>{h.time}</Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700, mb: 2, color: 'secondary.light', letterSpacing: '1px', textTransform: 'uppercase', fontSize: '0.8rem' }}
            >
              Contact Us
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                <LocationOnIcon sx={{ fontSize: 18, color: 'secondary.main', mt: 0.2, flexShrink: 0 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255,248,240,0.75)', lineHeight: 1.6 }}>
                  12, Café Street, Bandra West,<br />Mumbai, Maharashtra 400050
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                <PhoneIcon sx={{ fontSize: 18, color: 'secondary.main', flexShrink: 0 }} />
                <Typography
                  component="a"
                  href="tel:+912212345678"
                  variant="body2"
                  sx={{ color: 'rgba(255,248,240,0.75)', textDecoration: 'none', '&:hover': { color: 'secondary.light' } }}
                >
                  +91 22 1234 5678
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                <EmailIcon sx={{ fontSize: 18, color: 'secondary.main', flexShrink: 0 }} />
                <Typography
                  component="a"
                  href="mailto:hello@brewedandbaked.in"
                  variant="body2"
                  sx={{ color: 'rgba(255,248,240,0.75)', textDecoration: 'none', '&:hover': { color: 'secondary.light' } }}
                >
                  hello@brewedandbaked.in
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Typography variant="caption" sx={{ color: 'rgba(255,248,240,0.5)' }}>
            © {new Date().getFullYear()} Brewed & Baked Café & Restaurant. All rights reserved.
          </Typography>
          <Typography variant="caption" sx={{ color: 'rgba(255,248,240,0.5)' }}>
            Made with ☕ in Mumbai
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
