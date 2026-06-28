import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Chip,
  Button,
  Divider,
} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import SpaIcon from '@mui/icons-material/Spa';
import FavoriteIcon from '@mui/icons-material/Favorite';

// ── Design tokens (matches Gallery & Menu) ─────────────────────────────────
const T = {
  bgDark:          '#1E2D27',
  bgMid:           '#243322',
  bgDeep:          '#2A3F32',
  cream:           '#FAF7F2',
  creamMid:        'rgba(250,247,242,0.68)',
  creamLow:        'rgba(250,247,242,0.15)',
  creamFaint:      'rgba(250,247,242,0.06)',
  creamFaintHover: 'rgba(250,247,242,0.10)',
  terracotta:      '#C4714A',
  terracottaLight: '#D9956F',
  green:           '#A8D5BA',
  greenDeep:       '#3D5A47',
  greenMid:        '#5C7E6A',
  border:          'rgba(250,247,242,0.06)',
  borderSoft:      'rgba(250,247,242,0.12)',
};

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1800&q=85&auto=format&fit=crop';

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
    icon: <LocalCafeIcon sx={{ fontSize: 28, color: T.terracottaLight }} />,
    title: 'Quality First',
    desc: 'We source only the finest ingredients — single-origin beans, seasonal produce, and artisan dairy — because your experience deserves nothing less.',
  },
  {
    icon: <SpaIcon sx={{ fontSize: 28, color: T.terracottaLight }} />,
    title: 'Sustainably Minded',
    desc: 'From compostable packaging to supporting local farmers, we take our responsibility to the planet seriously in every decision we make.',
  },
  {
    icon: <FavoriteIcon sx={{ fontSize: 28, color: T.terracottaLight }} />,
    title: 'Community Rooted',
    desc: 'Brewed & Baked was built by the community, for the community. We give back through local events, charity bakes, and skill workshops.',
  },
  {
    icon: <EmojiEventsIcon sx={{ fontSize: 28, color: T.terracottaLight }} />,
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

const stats = [
  { value: '15+', label: 'Years in Business' },
  { value: '80+', label: 'Seats & Counting' },
  { value: '50+', label: 'Menu Items' },
  { value: '10K+', label: 'Happy Guests/Month' },
];

export default function About() {
  return (
    <Box>
      {/* ── Hero ── */}
      <Box
        sx={{
          position: 'relative',
          pt: { xs: 14, md: 16 },
          pb: { xs: 8, md: 10 },
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src={HERO_IMAGE}
          alt="Café interior"
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(180deg, rgba(27,45,36,0.82) 0%, rgba(30,45,39,0.65) 50%, rgba(27,45,36,0.92) 100%)',
          }}
        />

        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            variant="overline"
            sx={{ color: T.green, letterSpacing: '4px', fontWeight: 700 }}
          >
            Our Story
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: T.cream,
              fontSize: { xs: '2.2rem', md: '3.2rem' },
              fontWeight: 700,
              mt: 1,
              mb: 2,
            }}
          >
            Fifteen Years of{' '}
            <Box component="span" sx={{ color: T.terracottaLight, fontStyle: 'italic' }}>
              Brewed Love
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: T.creamMid, maxWidth: 560, mx: 'auto', lineHeight: 1.85 }}
          >
            From a tiny 10-seat café to Mumbai's most beloved culinary destination — here's
            how Brewed & Baked was born.
          </Typography>
        </Container>

        {/* Wave into dark section */}
        <Box sx={{ position: 'absolute', bottom: -2, left: 0, right: 0 }}>
          <svg
            viewBox="0 0 1440 60"
            preserveAspectRatio="none"
            style={{ display: 'block', width: '100%', height: 60 }}
          >
            <path d="M0,60 C480,0 960,0 1440,60 L1440,60 L0,60 Z" fill={T.bgDark} />
          </svg>
        </Box>
      </Box>

      {/* ── Origin Story ── */}
      <Box
        sx={{
          background: `linear-gradient(180deg, ${T.bgDark} 0%, ${T.bgMid} 60%, ${T.bgDeep} 100%)`,
          pb: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="xl" sx={{ pt: { xs: 4, md: 6 } }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="overline"
                sx={{ color: T.green, fontWeight: 700, letterSpacing: '3px' }}
              >
                The Beginning
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: T.cream,
                  mt: 1,
                  mb: 3,
                  fontSize: { xs: '1.8rem', md: '2.2rem' },
                  fontWeight: 700,
                }}
              >
                Born from a Love of Coffee{' '}
                <Box component="span" sx={{ color: T.terracottaLight, fontStyle: 'italic' }}>
                  and Good Food
                </Box>
              </Typography>
              <Typography sx={{ color: T.creamMid, mb: 2, lineHeight: 1.9 }}>
                In 2009, two friends — Chef Aryan Mehta and barista extraordinaire Nisha Patel —
                pooled their life savings to open a 10-seat café on a quiet lane in Bandra, Mumbai.
                Armed with a second-hand espresso machine, a borrowed oven, and an unshakeable
                belief that great food brings people together, they opened their doors on a rainy
                Monday morning.
              </Typography>
              <Typography sx={{ color: T.creamMid, mb: 2, lineHeight: 1.9 }}>
                Within a month, the tiny space was packed with regulars who couldn't get enough of
                Aryan's avocado toast and Nisha's perfectly poured flat white. Word spread fast.
                The queue stretched down the street.
              </Typography>
              <Typography sx={{ color: T.creamMid, lineHeight: 1.9 }}>
                Today, Brewed & Baked is a full café-restaurant with 80+ covers, an award-winning
                barista team, and a menu that changes with the seasons — but the soul remains
                exactly the same: making every guest feel at home.
              </Typography>
            </Grid>

            {/* Stats / Quote card */}
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  bgcolor: T.creamFaint,
                  borderRadius: '14px',
                  p: { xs: 3, md: 5 },
                  border: `1px solid ${T.borderSoft}`,
                  textAlign: 'center',
                }}
              >
                <Typography sx={{ fontSize: '4rem', mb: 2 }}>☕</Typography>
                <Typography
                  variant="h5"
                  sx={{
                    color: T.cream,
                    fontStyle: 'italic',
                    fontWeight: 700,
                    mb: 1,
                    lineHeight: 1.4,
                  }}
                >
                  "A café is not just a place — it's a feeling."
                </Typography>
                <Typography sx={{ color: T.green, fontStyle: 'italic', mb: 4, fontSize: '0.9rem' }}>
                  — Aryan & Nisha, Co-Founders
                </Typography>

                <Grid container spacing={2}>
                  {stats.map((s) => (
                    <Grid item xs={6} key={s.label}>
                      <Box
                        sx={{
                          py: 2.5,
                          borderRadius: '10px',
                          bgcolor: 'rgba(250,247,242,0.05)',
                          border: `1px solid ${T.border}`,
                        }}
                      >
                        <Typography
                          sx={{
                            color: T.terracottaLight,
                            fontWeight: 800,
                            fontSize: '1.8rem',
                            lineHeight: 1,
                            mb: 0.5,
                          }}
                        >
                          {s.value}
                        </Typography>
                        <Typography sx={{ color: T.creamMid, fontSize: '0.75rem', fontWeight: 600 }}>
                          {s.label}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* ── Values ── */}
        <Container maxWidth="xl" sx={{ pt: { xs: 8, md: 12 } }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="overline"
              sx={{ color: T.green, fontWeight: 700, letterSpacing: '3px' }}
            >
              What We Stand For
            </Typography>
            <Typography
              variant="h2"
              sx={{ color: T.cream, fontSize: { xs: '2rem', md: '2.5rem' }, mt: 1, fontWeight: 700 }}
            >
              Our Core{' '}
              <Box component="span" sx={{ color: T.terracottaLight, fontStyle: 'italic' }}>
                Values
              </Box>
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {values.map((v) => (
              <Grid item xs={12} sm={6} md={3} key={v.title}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    bgcolor: T.creamFaint,
                    border: `1px solid ${T.border}`,
                    borderRadius: '14px',
                    boxShadow: 'none',
                    transition: 'transform 0.25s ease, border-color 0.25s ease, background-color 0.25s ease',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      borderColor: T.borderSoft,
                      bgcolor: T.creamFaintHover,
                    },
                  }}
                >
                  <CardContent sx={{ p: 3.5 }}>
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: '14px',
                        bgcolor: 'rgba(196,113,74,0.12)',
                        border: `1px solid rgba(196,113,74,0.25)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 2,
                      }}
                    >
                      {v.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{ mb: 1.5, fontWeight: 700, color: T.cream }}
                    >
                      {v.title}
                    </Typography>
                    <Typography sx={{ color: T.creamMid, lineHeight: 1.75, fontSize: '0.87rem' }}>
                      {v.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* ── Timeline ── */}
        <Container maxWidth="md" sx={{ pt: { xs: 8, md: 12 } }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="overline"
              sx={{ color: T.green, fontWeight: 700, letterSpacing: '3px' }}
            >
              Our Journey
            </Typography>
            <Typography
              variant="h2"
              sx={{ color: T.cream, fontSize: { xs: '2rem', md: '2.5rem' }, mt: 1, fontWeight: 700 }}
            >
              Milestones That{' '}
              <Box component="span" sx={{ color: T.terracottaLight, fontStyle: 'italic' }}>
                Made Us
              </Box>
            </Typography>
          </Box>
          <Stack spacing={0}>
            {milestones.map((m, i) => (
              <Box key={m.year} sx={{ display: 'flex', gap: 3 }}>
                {/* Dot + line */}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      bgcolor: i % 2 === 0 ? T.terracotta : T.greenDeep,
                      border: `2px solid ${i % 2 === 0 ? T.terracottaLight : T.green}`,
                      color: T.cream,
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
                    <Box
                      sx={{
                        width: 2,
                        flexGrow: 1,
                        bgcolor: T.borderSoft,
                        my: 0.5,
                        minHeight: 32,
                      }}
                    />
                  )}
                </Box>
                {/* Content */}
                <Box sx={{ pb: 3, pt: 0.5 }}>
                  <Typography
                    variant="overline"
                    sx={{ color: T.terracottaLight, fontWeight: 700, display: 'block' }}
                  >
                    {m.year}
                  </Typography>
                  <Typography sx={{ color: T.creamMid, lineHeight: 1.75 }}>{m.event}</Typography>
                </Box>
              </Box>
            ))}
          </Stack>
        </Container>

        {/* ── Team ── */}
        <Container maxWidth="xl" sx={{ pt: { xs: 8, md: 12 } }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="overline"
              sx={{ color: T.green, fontWeight: 700, letterSpacing: '3px' }}
            >
              Meet the Team
            </Typography>
            <Typography
              variant="h2"
              sx={{ color: T.cream, fontSize: { xs: '2rem', md: '2.5rem' }, mt: 1, fontWeight: 700 }}
            >
              The Passionate People{' '}
              <Box component="span" sx={{ color: T.terracottaLight, fontStyle: 'italic' }}>
                Behind the Magic
              </Box>
            </Typography>
          </Box>
          <Grid container spacing={2}>
            {team.map((member) => (
              <Grid item xs={12} sm={6} md={3} key={member.name}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    bgcolor: T.creamFaint,
                    border: `1px solid ${T.border}`,
                    borderRadius: '14px',
                    boxShadow: 'none',
                    transition: 'transform 0.25s ease, border-color 0.25s ease, background-color 0.25s ease',
                    '&:hover': {
                      transform: 'translateY(-3px)',
                      borderColor: T.borderSoft,
                      bgcolor: T.creamFaintHover,
                    },
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: '50%',
                        bgcolor: 'rgba(196,113,74,0.10)',
                        border: `2px solid rgba(196,113,74,0.30)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2.5rem',
                        mx: 'auto',
                        mb: 2,
                      }}
                    >
                      {member.emoji}
                    </Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 700, mb: 0.5, color: T.cream }}
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      sx={{
                        color: T.green,
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        fontSize: '0.68rem',
                        display: 'block',
                        mb: 1.5,
                      }}
                    >
                      {member.role}
                    </Typography>
                    <Divider sx={{ mb: 1.5, borderColor: T.border }} />
                    <Typography
                      sx={{ color: T.creamMid, lineHeight: 1.7, mb: 1.5, fontSize: '0.85rem' }}
                    >
                      {member.bio}
                    </Typography>
                    <Chip
                      label={member.specialty}
                      size="small"
                      variant="outlined"
                      sx={{
                        fontWeight: 600,
                        fontSize: '0.68rem',
                        borderRadius: '6px',
                        borderColor: T.terracotta,
                        color: T.terracottaLight,
                        height: 22,
                      }}
                    />
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}