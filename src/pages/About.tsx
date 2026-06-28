import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Stack,
  Chip,
  Button,
  Divider,
  Paper,
} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import SpaIcon from '@mui/icons-material/Spa';
import FavoriteIcon from '@mui/icons-material/Favorite';

const team = [
  {
    name: 'Chef Aryan Mehta',
    role: 'Head Chef & Co-Founder',
    bio: 'Trained at Le Cordon Bleu Paris, Aryan brings 20 years of culinary mastery to every dish. His philosophy: simplicity done exceptionally.',
    emoji: '👨‍🍳',
    specialty: 'European & Fusion Cuisine',
  },
  {
    name: 'Nisha Patel',
    role: 'Barista & Co-Founder',
    bio: 'A two-time national barista champion, Nisha has an extraordinary palate for coffee. She curates our bean sourcing and brew techniques personally.',
    emoji: '👩‍🍳',
    specialty: 'Specialty Coffee & Beverages',
  },
  {
    name: 'Rohan Desai',
    role: 'Pastry Chef',
    bio: 'Rohan studied at the Institut Paul Bocuse and has a gift for creating desserts that are as beautiful as they are delicious.',
    emoji: '🧑‍🍳',
    specialty: 'Artisan Pastries & Desserts',
  },
  {
    name: 'Meera Joshi',
    role: 'Restaurant Manager',
    bio: 'With a decade of hospitality experience, Meera ensures every guest feels like family from the moment they walk through our door.',
    emoji: '👩‍💼',
    specialty: 'Guest Experience & Operations',
  },
];

const values = [
  {
    icon: <LocalCafeIcon sx={{ fontSize: 30, color: 'secondary.main' }} />,
    title: 'Quality First',
    desc: 'We source only the finest ingredients — single-origin beans, seasonal produce, and artisan dairy — because your experience deserves nothing less.',
  },
  {
    icon: <SpaIcon sx={{ fontSize: 30, color: 'secondary.main' }} />,
    title: 'Sustainably Minded',
    desc: 'From compostable packaging to supporting local farmers, we take our responsibility to the planet seriously in every decision we make.',
  },
  {
    icon: <FavoriteIcon sx={{ fontSize: 30, color: 'secondary.main' }} />,
    title: 'Community Rooted',
    desc: 'Brewed & Baked was built by the community, for the community. We give back through local events, charity bakes, and skill workshops.',
  },
  {
    icon: <EmojiEventsIcon sx={{ fontSize: 30, color: 'secondary.main' }} />,
    title: 'Award-Winning Craft',
    desc: 'Recognised by the Food Lovers Association of India and featured in multiple national food magazines for culinary excellence.',
  },
];

const milestones = [
  { year: '2009', event: 'Brewed & Baked opens its first tiny 10-seat café on Café Street, Bandra.' },
  { year: '2012', event: 'Launched our full restaurant menu, expanding to 60 covers and adding a kitchen team.' },
  { year: '2016', event: 'Nisha wins the National Barista Championship, putting us on the specialty coffee map.' },
  { year: '2019', event: 'Expanded to a second floor — outdoor terrace seating with garden views.' },
  { year: '2023', event: 'Voted Best Café in Mumbai by the Food Lovers Association — two years running.' },
  { year: '2024', event: 'Launched weekend brunch events, private dining packages, and cooking masterclasses.' },
];

export default function About() {
  return (
    <Box>
      {/* Hero */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #2E1A18 0%, #4A2C2A 60%, #7A5C58 100%)',
          pt: { xs: 14, md: 16 },
          pb: { xs: 6, md: 8 },
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box sx={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle at 50% 80%, rgba(200,148,58,0.15) 0%, transparent 60%)' }} />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography sx={{ fontSize: '3.5rem', mb: 1 }}>☕</Typography>
          <Typography variant="overline" sx={{ color: 'secondary.light', letterSpacing: '4px', fontWeight: 700 }}>
            Our Story
          </Typography>
          <Typography variant="h2" sx={{ color: '#FFF8F0', fontSize: { xs: '2.2rem', md: '3rem' }, mt: 1, mb: 2 }}>
            Fifteen Years of Brewed Love
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,248,240,0.75)', maxWidth: 560, mx: 'auto', lineHeight: 1.8 }}>
            From a tiny 10-seat café to Mumbai's most beloved culinary destination — here's how Brewed & Baked was born.
          </Typography>
        </Container>
        <Box sx={{ position: 'absolute', bottom: -2, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 50" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 50 }}>
            <path d="M0,50 C360,0 1080,0 1440,50 L1440,50 L0,50 Z" fill="#FFF8F0" />
          </svg>
        </Box>
      </Box>

      {/* Origin Story */}
      <Container maxWidth="xl" sx={{ py: { xs: 7, md: 10 } }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: '3px' }}>
              The Beginning
            </Typography>
            <Typography variant="h3" sx={{ mt: 1, mb: 3, fontSize: { xs: '1.8rem', md: '2.2rem' } }}>
              Born from a Love of Coffee and Good Food
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.9 }}>
              In 2009, two friends — Chef Aryan Mehta and barista extraordinaire Nisha Patel — pooled their life savings to open a 10-seat café on a quiet lane in Bandra, Mumbai. Armed with a second-hand espresso machine, a borrowed oven, and an unshakeable belief that great food brings people together, they opened their doors on a rainy Monday morning.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2, lineHeight: 1.9 }}>
              Within a month, the tiny space was packed with regulars who couldn't get enough of Aryan's avocado toast and Nisha's perfectly poured flat white. Word spread fast. The queue stretched down the street.
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.9 }}>
              Today, Brewed & Baked is a full café-restaurant with 80+ covers, an award-winning barista team, and a menu that changes with the seasons — but the soul remains exactly the same: making every guest feel at home.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                bgcolor: 'rgba(200,148,58,0.08)',
                borderRadius: 4,
                p: { xs: 3, md: 5 },
                border: '1px solid',
                borderColor: 'rgba(200,148,58,0.2)',
                textAlign: 'center',
              }}
            >
              <Typography sx={{ fontSize: '5rem', mb: 2 }}>☕</Typography>
              <Typography variant="h4" sx={{ mb: 1, color: 'primary.main' }}>
                "A café is not just a place — it's a feeling."
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ fontStyle: 'italic', mb: 3 }}>
                — Aryan & Nisha, Co-Founders
              </Typography>
              <Grid container spacing={2}>
                {[
                  { value: '15+', label: 'Years in Business' },
                  { value: '80+', label: 'Seats & Counting' },
                  { value: '50+', label: 'Menu Items' },
                  { value: '10K+', label: 'Happy Guests/Month' },
                ].map((s) => (
                  <Grid item xs={6} key={s.label}>
                    <Paper elevation={0} sx={{ py: 2, borderRadius: 2, bgcolor: 'white', border: '1px solid rgba(74,44,42,0.1)' }}>
                      <Typography variant="h4" sx={{ color: 'secondary.main', fontWeight: 800 }}>{s.value}</Typography>
                      <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>{s.label}</Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Values */}
      <Box sx={{ py: { xs: 7, md: 10 }, background: 'linear-gradient(135deg, #FFF8F0 0%, #F5E6D3 100%)' }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: '3px' }}>
              What We Stand For
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, mt: 1 }}>
              Our Core Values
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {values.map((v) => (
              <Grid item xs={12} sm={6} md={3} key={v.title}>
                <Card sx={{ height: '100%', textAlign: 'center', p: 1 }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ mb: 2 }}>{v.icon}</Box>
                    <Typography variant="h6" sx={{ mb: 1.5, fontWeight: 700 }}>{v.title}</Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>{v.desc}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Timeline */}
      <Container maxWidth="md" sx={{ py: { xs: 7, md: 10 } }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: '3px' }}>
            Our Journey
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, mt: 1 }}>
            Milestones That Made Us
          </Typography>
        </Box>
        <Stack spacing={0}>
          {milestones.map((m, i) => (
            <Box key={m.year} sx={{ display: 'flex', gap: 3 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    bgcolor: i % 2 === 0 ? 'primary.main' : 'secondary.main',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '0.75rem',
                    flexShrink: 0,
                    zIndex: 1,
                  }}
                >
                  {m.year.slice(2)}
                </Box>
                {i < milestones.length - 1 && (
                  <Box sx={{ width: 2, flexGrow: 1, bgcolor: 'rgba(74,44,42,0.15)', my: 0.5, minHeight: 32 }} />
                )}
              </Box>
              <Box sx={{ pb: 3, pt: 0.5 }}>
                <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700 }}>{m.year}</Typography>
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>{m.event}</Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      </Container>

      {/* Team */}
      <Box sx={{ py: { xs: 7, md: 10 }, bgcolor: 'background.default' }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: '3px' }}>
              Meet the Team
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, mt: 1 }}>
              The Passionate People Behind the Magic
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {team.map((member) => (
              <Grid item xs={12} sm={6} md={3} key={member.name}>
                <Card sx={{ height: '100%', textAlign: 'center' }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        bgcolor: 'rgba(200,148,58,0.12)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2.5rem',
                        mx: 'auto',
                        mb: 2,
                        border: '3px solid',
                        borderColor: 'rgba(200,148,58,0.3)',
                      }}
                    >
                      {member.emoji}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>{member.name}</Typography>
                    <Typography variant="caption" sx={{ color: 'secondary.main', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', display: 'block', mb: 1.5 }}>
                      {member.role}
                    </Typography>
                    <Divider sx={{ mb: 1.5 }} />
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, mb: 1.5 }}>
                      {member.bio}
                    </Typography>
                    <Chip label={member.specialty} size="small" variant="outlined" color="primary" sx={{ fontWeight: 600, fontSize: '0.7rem' }} />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA */}
      <Box
        sx={{
          py: { xs: 7, md: 9 },
          background: 'linear-gradient(135deg, #4A2C2A 0%, #2E1A18 100%)',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="sm">
          <Typography sx={{ fontSize: '2.5rem', mb: 1 }}>🤝</Typography>
          <Typography variant="h3" sx={{ color: '#FFF8F0', fontSize: { xs: '1.8rem', md: '2.2rem' }, mb: 2 }}>
            Come Experience It Yourself
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,248,240,0.75)', mb: 4, lineHeight: 1.8 }}>
            We'd love to welcome you to our family. Drop in for a coffee, stay for a meal.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button component={Link} to="/reservations" variant="contained" color="secondary" size="large" sx={{ fontWeight: 700, px: 4 }}>
              Reserve a Table
            </Button>
            <Button component={Link} to="/menu" variant="outlined" size="large" sx={{ borderColor: 'rgba(255,248,240,0.4)', color: '#FFF8F0', px: 4, '&:hover': { borderColor: 'secondary.light' } }}>
              View Our Menu
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
