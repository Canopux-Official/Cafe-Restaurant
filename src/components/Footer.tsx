import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
  Stack,
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
  { icon: <InstagramIcon fontSize="small" />, href: '#', label: 'Instagram' },
  { icon: <FacebookIcon fontSize="small" />, href: '#', label: 'Facebook' },
  { icon: <TwitterIcon fontSize="small" />, href: '#', label: 'Twitter' },
  { icon: <YouTubeIcon fontSize="small" />, href: '#', label: 'YouTube' },
];

// Muted text on dark bg
const muted = 'rgba(255,255,255,0.50)';
const soft  = 'rgba(255,255,255,0.75)';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        // Dark charcoal — not primary green, feels premium and neutral
        bgcolor: '#1A1A1A',
        color: '#FFFFFF',
        pt: { xs: 6, md: 8 },
        pb: 3,
        mt: 'auto',
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>

          {/* ── Brand Column ── */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '10px',
                  bgcolor: 'rgba(45,106,79,0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <LocalCafeIcon sx={{ fontSize: 22, color: '#52B788' }} />
              </Box>
              <Box>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontWeight: 700,
                    lineHeight: 1.1,
                    color: '#FFFFFF',
                  }}
                >
                  Apna Adda
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: muted,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    fontSize: '0.58rem',
                  }}
                >
                  Café & Restaurant
                </Typography>
              </Box>
            </Box>

            <Typography
              variant="body2"
              sx={{ color: muted, mb: 3, maxWidth: 300, lineHeight: 1.85 }}
            >
              A warm corner where every cup is brewed with love and every meal crafted with passion. Come for the coffee, stay for the experience.
            </Typography>

            {/* Social icons */}
            <Stack direction="row" spacing={1}>
              {socialLinks.map((s) => (
                <IconButton
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  size="small"
                  sx={{
                    color: muted,
                    bgcolor: 'rgba(255,255,255,0.07)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      bgcolor: '#2D6A4F',
                      color: '#FFFFFF',
                      borderColor: '#2D6A4F',
                    },
                  }}
                >
                  {s.icon}
                </IconButton>
              ))}
            </Stack>
          </Grid>

          {/* ── Quick Links ── */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 700,
                mb: 2.5,
                color: '#FFFFFF',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                fontSize: '0.72rem',
              }}
            >
              Quick Links
            </Typography>
            <Stack spacing={1.2}>
              {quickLinks.map((link) => (
                <Typography
                  key={link.path}
                  component={Link}
                  to={link.path}
                  variant="body2"
                  sx={{
                    color: muted,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 0.75,
                    transition: 'color 0.2s',
                    '&:hover': { color: '#52B788' },
                    '&::before': {
                      content: '"›"',
                      color: '#E9C46A',
                      fontWeight: 700,
                      fontSize: '1rem',
                    },
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Stack>
          </Grid>

          {/* ── Hours ── */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 700,
                mb: 2.5,
                color: '#FFFFFF',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                fontSize: '0.72rem',
              }}
            >
              Opening Hours
            </Typography>
            <Stack spacing={1.6}>
              {[
                { day: 'Monday – Friday', time: '7:30 AM – 10:00 PM' },
                { day: 'Saturday', time: '8:00 AM – 11:00 PM' },
                { day: 'Sunday', time: '9:00 AM – 9:00 PM' },
              ].map((h) => (
                <Box key={h.day} sx={{ display: 'flex', gap: 1.2, alignItems: 'flex-start' }}>
                  <AccessTimeIcon sx={{ fontSize: 15, color: '#E9C46A', mt: 0.35, flexShrink: 0 }} />
                  <Box>
                    <Typography variant="body2" sx={{ color: soft, fontWeight: 600, lineHeight: 1.3 }}>
                      {h.day}
                    </Typography>
                    <Typography variant="caption" sx={{ color: muted }}>
                      {h.time}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Grid>

          {/* ── Contact ── */}
          <Grid item xs={12} md={3}>
            <Typography
              variant="subtitle2"
              sx={{
                fontWeight: 700,
                mb: 2.5,
                color: '#FFFFFF',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                fontSize: '0.72rem',
              }}
            >
              Contact Us
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                <LocationOnIcon sx={{ fontSize: 17, color: '#E9C46A', mt: 0.25, flexShrink: 0 }} />
                <Typography variant="body2" sx={{ color: muted, lineHeight: 1.7 }}>
                  12, Café Street, Bandra West,<br />Mumbai, Maharashtra 400050
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                <PhoneIcon sx={{ fontSize: 17, color: '#E9C46A', flexShrink: 0 }} />
                <Typography
                  component="a"
                  href="tel:+912212345678"
                  variant="body2"
                  sx={{
                    color: muted,
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    '&:hover': { color: '#52B788' },
                  }}
                >
                  +91 22 1234 5678
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
                <EmailIcon sx={{ fontSize: 17, color: '#E9C46A', flexShrink: 0 }} />
                <Typography
                  component="a"
                  href="mailto:hello@apnaadda.in"
                  variant="body2"
                  sx={{
                    color: muted,
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    '&:hover': { color: '#52B788' },
                  }}
                >
                  hello@apnaadda.in
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.08)' }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Typography variant="caption" sx={{ color: muted }}>
            © {new Date().getFullYear()} Apna Adda Café & Restaurant. All rights reserved.
          </Typography>
          <Typography variant="caption" sx={{ color: muted }}>
            Made with ☕ in Mumbai
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}