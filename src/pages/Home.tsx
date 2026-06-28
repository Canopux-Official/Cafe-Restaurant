import { Link } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Stack,
  Avatar,
  Chip,
  useTheme,
  useMediaQuery,
  Paper,
  keyframes,
} from '@mui/material';
import CoffeeIcon from '@mui/icons-material/Coffee';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import StarIcon from '@mui/icons-material/Star';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import FavoriteIcon from '@mui/icons-material/Favorite';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CoffeeAnimation from '../components/CoffeeAnimation';

// Orbit arm rotates anti-clockwise; starts at 12 o'clock (-90deg)
const rotateAntiCW = keyframes`
  0%   { transform: rotate(-90deg); }
  100% { transform: rotate(-450deg); }
`;

// Counter-rotation keeps the card text upright at all times
const counterRotate = keyframes`
  0%   { transform: rotate(90deg); }
  100% { transform: rotate(450deg); }
`;

const orbitingCards = [
  { label: 'Fresh Pastries Daily', emoji: '🥐' },
  { label: 'Specialty Coffee',     emoji: '☕' },
  { label: 'Seasonal Menu',        emoji: '🌿' },
  { label: 'Outdoor Seating',      emoji: '🌳' },
];

const ORBIT_RADIUS = 220; // px — distance from center to card
const ORBIT_DURATION = 16; // seconds for one full revolution

const features = [
  {
    icon: <CoffeeIcon sx={{ fontSize: 36, color: 'secondary.main' }} />,
    title: 'Artisan Coffee',
    desc: 'Sourced from the finest single-origin farms, roasted in-house for peak flavour.',
  },
  {
    icon: <RestaurantMenuIcon sx={{ fontSize: 36, color: 'secondary.main' }} />,
    title: 'Gourmet Kitchen',
    desc: 'Our chefs craft seasonal menus inspired by global flavours and local ingredients.',
  },
  {
    icon: <EmojiEventsIcon sx={{ fontSize: 36, color: 'secondary.main' }} />,
    title: 'Award-Winning',
    desc: 'Voted Best Café in Mumbai 2023 & 2024 by the Food Lovers Association.',
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 36, color: 'secondary.main' }} />,
    title: 'Private Events',
    desc: 'Host intimate gatherings, birthday brunches, or corporate meetups in our exclusive space.',
  },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Food Blogger',
    review: 'Absolutely the best café experience in Mumbai! The truffle mushroom pasta and caramel latte are life-changing. I come here every single weekend.',
    rating: 5,
    avatar: 'P',
  },
  {
    name: 'Arjun Menon',
    role: 'Architect',
    review: 'The ambience is warm and inviting — perfect for a work date or a romantic dinner. The lava cake deserves its own award.',
    rating: 5,
    avatar: 'A',
  },
  {
    name: 'Sneha Kapoor',
    role: 'Interior Designer',
    review: 'Brewed & Baked nails both food and aesthetics. The weekend brunch platter is a feast for the eyes and the stomach!',
    rating: 5,
    avatar: 'S',
  },
];

const specialties = [
  { emoji: '☕', label: 'Signature Coffee', desc: 'From ₹120' },
  { emoji: '🥑', label: 'Avocado Toast', desc: 'From ₹320' },
  { emoji: '🍝', label: 'Truffle Pasta', desc: 'From ₹580' },
  { emoji: '🎂', label: 'Lava Cake', desc: 'From ₹340' },
  { emoji: '🫖', label: 'Afternoon Tea', desc: 'From ₹750' },
  { emoji: '🥭', label: 'Mango Panna Cotta', desc: 'From ₹260' },
];

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          minHeight: '100vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(135deg, #2E1A18 0%, #4A2C2A 40%, #7A5C58 100%)',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(200,148,58,0.15) 0%, transparent 60%),
              radial-gradient(circle at 80% 20%, rgba(200,148,58,0.10) 0%, transparent 50%)`,
          },
        }}
      >
        {/* Decorative coffee bean shapes */}
        {['10%', '85%', '60%', '30%'].map((left, i) => (
          <Box
            key={i}
            sx={{
              position: 'absolute',
              left,
              top: `${15 + i * 18}%`,
              width: { xs: 60, md: 100 + i * 30 },
              height: { xs: 60, md: 100 + i * 30 },
              borderRadius: '50%',
              bgcolor: `rgba(200,148,58,${0.04 + i * 0.02})`,
              filter: 'blur(2px)',
            }}
          />
        ))}

        <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, pt: 10, pb: 8 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Chip
                label="☕  Now Open 7 Days a Week"
                sx={{
                  bgcolor: 'rgba(200,148,58,0.2)',
                  color: 'secondary.light',
                  border: '1px solid',
                  borderColor: 'secondary.dark',
                  fontWeight: 600,
                  mb: 3,
                  letterSpacing: '0.5px',
                }}
              />
              <Typography
                variant="h1"
                sx={{
                  color: '#FFF8F0',
                  fontSize: { xs: '2.8rem', sm: '3.5rem', md: '4.5rem' },
                  fontWeight: 700,
                  lineHeight: 1.1,
                  mb: 2,
                }}
              >
                Where Every Sip
                <Box component="span" sx={{ color: 'secondary.light', display: 'block' }}>
                  Tells a Story
                </Box>
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'rgba(255,248,240,0.75)',
                  fontWeight: 300,
                  mb: 4,
                  maxWidth: 480,
                  lineHeight: 1.8,
                  fontFamily: '"Lato", sans-serif',
                }}
              >
                Artisan coffee, handcrafted pastries, and soul-warming meals — all under one cosy roof in the heart of Bandra.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <Button
                  component={Link}
                  to="/menu"
                  variant="contained"
                  color="secondary"
                  size="large"
                  endIcon={<KeyboardArrowRightIcon />}
                  sx={{ fontWeight: 700, px: 4, py: 1.5, fontSize: '1rem' }}
                >
                  Explore Menu
                </Button>
                <Button
                  component={Link}
                  to="/reservations"
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: 'rgba(255,248,240,0.5)',
                    color: '#FFF8F0',
                    fontWeight: 600,
                    px: 4,
                    py: 1.5,
                    fontSize: '1rem',
                    '&:hover': { borderColor: 'secondary.light', bgcolor: 'rgba(200,148,58,0.1)' },
                  }}
                >
                  Book a Table
                </Button>
              </Stack>

              {/* Stats */}
              <Stack direction="row" spacing={4} sx={{ mt: 5 }}>
                {[
                  { value: '15+', label: 'Years of Craft' },
                  { value: '50+', label: 'Menu Items' },
                  { value: '4.9★', label: 'Google Rating' },
                ].map((stat) => (
                  <Box key={stat.label}>
                    <Typography variant="h4" sx={{ color: 'secondary.light', fontWeight: 700, lineHeight: 1 }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'rgba(255,248,240,0.6)', letterSpacing: '0.5px' }}>
                      {stat.label}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Grid>

            {/* Hero Visual Panel */}
            <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
              <Box
                sx={{
                  position: 'relative',
                  height: 540,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Dashed orbit ring */}
                <Box
                  sx={{
                    position: 'absolute',
                    width: ORBIT_RADIUS * 2,
                    height: ORBIT_RADIUS * 2,
                    borderRadius: '50%',
                    border: '1.5px dashed rgba(200,148,58,0.25)',
                    pointerEvents: 'none',
                  }}
                />

                <CoffeeAnimation />

                {/* Orbiting cards — evenly spaced via negative delay */}
                {orbitingCards.map((card, i) => (
                  <Box
                    key={card.label}
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      width: 0,
                      height: 0,
                      // Outer arm: rotates anti-clockwise around orbit center
                      animation: `${rotateAntiCW} ${ORBIT_DURATION}s linear infinite`,
                      animationDelay: `${-(i * (ORBIT_DURATION / orbitingCards.length))}s`,
                    }}
                  >
                    {/* Inner arm: translates to orbit radius + counter-rotates to stay upright */}
                    <Box
                      sx={{
                        position: 'absolute',
                        left: ORBIT_RADIUS,
                        top: 0,
                        animation: `${counterRotate} ${ORBIT_DURATION}s linear infinite`,
                        animationDelay: `${-(i * (ORBIT_DURATION / orbitingCards.length))}s`,
                      }}
                    >
                      <Paper
                        elevation={6}
                        sx={{
                          transform: 'translate(-50%, -50%)',
                          px: 2,
                          py: 1,
                          borderRadius: 3,
                          bgcolor: 'rgba(255,248,240,0.96)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1,
                          minWidth: 158,
                          whiteSpace: 'nowrap',
                          border: '1px solid rgba(200,148,58,0.25)',
                          backdropFilter: 'blur(6px)',
                        }}
                      >
                        <Typography sx={{ fontSize: '1.35rem', lineHeight: 1 }}>{card.emoji}</Typography>
                        <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 700, lineHeight: 1.3, fontSize: '0.72rem' }}>
                          {card.label}
                        </Typography>
                      </Paper>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        </Container>

        {/* Wave divider */}
        <Box
          sx={{
            position: 'absolute',
            bottom: -2,
            left: 0,
            right: 0,
            lineHeight: 0,
          }}
        >
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 60 }}>
            <path d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z" fill="#FFF8F0" />
          </svg>
        </Box>
      </Box>

      {/* Features Section */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: 'background.default' }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: '3px' }}>
              Why Choose Us
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, mt: 1 }}>
              More Than Just a Café
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {features.map((f) => (
              <Grid item xs={12} sm={6} md={3} key={f.title}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    p: 1,
                    border: '1px solid',
                    borderColor: 'rgba(74,44,42,0.08)',
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ mb: 2 }}>{f.icon}</Box>
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 700 }}>
                      {f.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {f.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Specialties Showcase */}
      <Box
        sx={{
          py: { xs: 8, md: 10 },
          background: 'linear-gradient(135deg, #FFF8F0 0%, #F5E6D3 100%)',
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={5}>
              <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: '3px' }}>
                Our Signatures
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, mt: 1, mb: 2 }}>
                Crafted with Passion, Served with Love
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                From the first sip of espresso to the last bite of our legendary lava cake — every item on our menu is a love letter to good food.
              </Typography>
              <Button
                component={Link}
                to="/menu"
                variant="contained"
                color="primary"
                size="large"
                endIcon={<KeyboardArrowRightIcon />}
                sx={{ fontWeight: 700 }}
              >
                View Full Menu
              </Button>
            </Grid>
            <Grid item xs={12} md={7}>
              <Grid container spacing={2}>
                {specialties.map((s) => (
                  <Grid item xs={6} sm={4} key={s.label}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 2.5,
                        textAlign: 'center',
                        border: '1px solid',
                        borderColor: 'rgba(74,44,42,0.12)',
                        borderRadius: 3,
                        bgcolor: 'white',
                        cursor: 'default',
                        transition: 'all 0.3s',
                        '&:hover': {
                          borderColor: 'secondary.main',
                          boxShadow: '0 4px 20px rgba(200,148,58,0.2)',
                          transform: 'translateY(-3px)',
                        },
                      }}
                    >
                      <Typography sx={{ fontSize: '2.2rem', mb: 1 }}>{s.emoji}</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'primary.main', mb: 0.5 }}>
                        {s.label}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'secondary.main', fontWeight: 600 }}>
                        {s.desc}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: 'background.default' }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: '3px' }}>
              Happy Guests
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, mt: 1 }}>
              What Our Regulars Say
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {testimonials.map((t) => (
              <Grid item xs={12} md={4} key={t.name}>
                <Card sx={{ height: '100%', p: 1 }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ display: 'flex', mb: 2 }}>
                      {[...Array(t.rating)].map((_, i) => (
                        <StarIcon key={i} sx={{ fontSize: 18, color: 'secondary.main' }} />
                      ))}
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.8, fontStyle: 'italic' }}
                    >
                      "{t.review}"
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                      <Avatar
                        sx={{
                          bgcolor: 'primary.main',
                          color: 'primary.contrastText',
                          width: 44,
                          height: 44,
                          fontWeight: 700,
                        }}
                      >
                        {t.avatar}
                      </Avatar>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                          {t.name}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {t.role}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Banner */}
      <Box
        sx={{
          py: { xs: 8, md: 10 },
          background: 'linear-gradient(135deg, #4A2C2A 0%, #2E1A18 100%)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(200,148,58,0.15) 0%, transparent 70%)',
          },
        }}
      >
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography sx={{ fontSize: '3rem', mb: 1 }}>🌟</Typography>
          <Typography
            variant="h2"
            sx={{ color: '#FFF8F0', fontSize: { xs: '2rem', md: '2.8rem' }, mb: 2 }}
          >
            Ready for an Unforgettable Experience?
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'rgba(255,248,240,0.75)', mb: 4, maxWidth: 500, mx: 'auto', lineHeight: 1.8 }}
          >
            Reserve your table today and let us take you on a culinary journey. Walk-ins welcome too!
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button
              component={Link}
              to="/reservations"
              variant="contained"
              color="secondary"
              size="large"
              sx={{ fontWeight: 700, px: 5, py: 1.5, fontSize: '1rem' }}
            >
              Reserve a Table
            </Button>
            <Button
              component={Link}
              to="/contact"
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'rgba(255,248,240,0.4)',
                color: '#FFF8F0',
                fontWeight: 600,
                px: 5,
                py: 1.5,
                '&:hover': { borderColor: 'secondary.light', bgcolor: 'rgba(200,148,58,0.1)' },
              }}
            >
              Get in Touch
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
