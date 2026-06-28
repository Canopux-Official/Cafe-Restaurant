// import { Link } from 'react-router-dom';
// import {
//   Box,
//   Container,
//   Typography,
//   Button,
//   Grid,
//   Card,
//   CardContent,
//   Stack,
//   Avatar,
//   Chip,
//   useTheme,
//   useMediaQuery,
//   Paper,
//   keyframes,
// } from '@mui/material';
// import CoffeeIcon from '@mui/icons-material/Coffee';
// import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
// import StarIcon from '@mui/icons-material/Star';
// import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
// import GroupsIcon from '@mui/icons-material/Groups';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import CoffeeAnimation from '../components/CoffeeAnimation';
// import { useRef } from 'react';

// // Orbit arm rotates anti-clockwise; starts at 12 o'clock (-90deg)
// const rotateAntiCW = keyframes`
//   0%   { transform: rotate(-90deg); }
//   100% { transform: rotate(-450deg); }
// `;

// // Counter-rotation keeps the card text upright at all times
// const counterRotate = keyframes`
//   0%   { transform: rotate(90deg); }
//   100% { transform: rotate(450deg); }
// `;

// const orbitingCards = [
//   { label: 'Fresh Pastries Daily', emoji: '🥐' },
//   { label: 'Specialty Coffee', emoji: '☕' },
//   { label: 'Seasonal Menu', emoji: '🌿' },
//   { label: 'Outdoor Seating', emoji: '🌳' },
// ];

// const ORBIT_RADIUS = 220; // px — distance from center to card
// const ORBIT_DURATION = 16; // seconds for one full revolution

// const features = [
//   {
//     icon: <CoffeeIcon sx={{ fontSize: 36, color: 'secondary.main' }} />,
//     title: 'Artisan Coffee',
//     desc: 'Sourced from the finest single-origin farms, roasted in-house for peak flavour.',
//   },
//   {
//     icon: <RestaurantMenuIcon sx={{ fontSize: 36, color: 'secondary.main' }} />,
//     title: 'Gourmet Kitchen',
//     desc: 'Our chefs craft seasonal menus inspired by global flavours and local ingredients.',
//   },
//   {
//     icon: <EmojiEventsIcon sx={{ fontSize: 36, color: 'secondary.main' }} />,
//     title: 'Award-Winning',
//     desc: 'Voted Best Café in Mumbai 2023 & 2024 by the Food Lovers Association.',
//   },
//   {
//     icon: <GroupsIcon sx={{ fontSize: 36, color: 'secondary.main' }} />,
//     title: 'Private Events',
//     desc: 'Host intimate gatherings, birthday brunches, or corporate meetups in our exclusive space.',
//   },
// ];

// const testimonials = [
//   { name: 'Priya Sharma', role: 'Food Blogger', review: 'Absolutely the best café in Mumbai! The truffle pasta and caramel latte are life-changing. I come every weekend.', rating: 5, avatar: 'P' },
//   { name: 'Arjun Menon', role: 'Architect', review: 'The ambience is warm and inviting — perfect for a work session or romantic dinner. The lava cake deserves its own award.', rating: 5, avatar: 'A' },
//   { name: 'Sneha Kapoor', role: 'Interior Designer', review: 'Brewed & Baked nails both food and aesthetics. The weekend brunch platter is a feast for eyes and stomach!', rating: 5, avatar: 'S' },
//   { name: 'Rahul Verma', role: 'Tech Founder', review: 'My go-to spot for focus work. Great wifi, even better coffee. The rose cardamom latte is something else entirely.', rating: 5, avatar: 'R' },
//   { name: 'Meera Nair', role: 'Chef', review: 'As a chef myself, I am impressed by the attention to detail. Ingredients are top-notch and every dish is thoughtfully plated.', rating: 5, avatar: 'M' },
// ];

// const testimonialScroll = keyframes`
//   0% { transform: translateX(0); }
//   100% { transform: translateX(-50%); }
// `;


// const specialties = [
//   { emoji: '☕', label: 'Signature Coffee', desc: 'From ₹120' },
//   { emoji: '🥑', label: 'Avocado Toast', desc: 'From ₹320' },
//   { emoji: '🍝', label: 'Truffle Pasta', desc: 'From ₹580' },
//   { emoji: '🎂', label: 'Lava Cake', desc: 'From ₹340' },
//   { emoji: '🫖', label: 'Afternoon Tea', desc: 'From ₹750' },
//   { emoji: '🥭', label: 'Mango Panna Cotta', desc: 'From ₹260' },
// ];

// export default function Home() {
//   const theme = useTheme();
//   // const isMobile = useMediaQuery(theme.breakpoints.down('md'));

//   const testimonialsRef = useRef<HTMLDivElement>(null);

//   return (
//     <Box>
//       {/* Hero Section */}
//       <Box
//         sx={{
//           minHeight: '100vh',
//           position: 'relative',
//           display: 'flex',
//           alignItems: 'center',
//           background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 40%, #52B788 100%)',
//           overflow: 'hidden',
//           '&::before': {
//             content: '""',
//             position: 'absolute',
//             inset: 0,
//             backgroundImage: `radial-gradient(circle at 20% 50%, rgba(45,106,79,0.15) 0%, transparent 60%),
//                   radial-gradient(circle at 80% 20%, rgba(82,183,136,0.10) 0%, transparent 50%)`,
//           },
//         }}
//       >
//         {/* Decorative coffee bean shapes */}
//         {['10%', '85%', '60%', '30%'].map((left, i) => (
//           <Box
//             key={i}
//             sx={{
//               position: 'absolute',
//               left,
//               top: `${15 + i * 18}%`,
//               width: { xs: 60, md: 100 + i * 30 },
//               height: { xs: 60, md: 100 + i * 30 },
//               borderRadius: '50%',
//               bgcolor: `rgba(200,148,58,${0.04 + i * 0.02})`,
//               filter: 'blur(2px)',
//             }}
//           />
//         ))}

//         <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1, pt: 10, pb: 8 }}>
//           <Grid container spacing={4} alignItems="center">
//             <Grid item xs={12} md={6}>
//               <Chip
//                 label="☕  Now Open 7 Days a Week"
//                 sx={{
//                   bgcolor: 'rgba(200,148,58,0.2)',
//                   color: 'secondary.light',
//                   border: '1px solid',
//                   borderColor: 'secondary.dark',
//                   fontWeight: 600,
//                   mb: 3,
//                   letterSpacing: '0.5px',
//                 }}
//               />
//               <Typography
//                 variant="h1"
//                 sx={{
//                   color: '#FFF8F0',
//                   fontSize: { xs: '2.8rem', sm: '3.5rem', md: '4.5rem' },
//                   fontWeight: 700,
//                   lineHeight: 1.1,
//                   mb: 2,
//                 }}
//               >
//                 Where Every Sip
//                 <Box component="span" sx={{ color: 'secondary.light', display: 'block' }}>
//                   Tells a Story
//                 </Box>
//               </Typography>
//               <Typography
//                 variant="h6"
//                 sx={{
//                   color: 'rgba(255,248,240,0.75)',
//                   fontWeight: 300,
//                   mb: 4,
//                   maxWidth: 480,
//                   lineHeight: 1.8,
//                   fontFamily: '"Lato", sans-serif',
//                 }}
//               >
//                 Artisan coffee, handcrafted pastries, and soul-warming meals — all under one cosy roof in the heart of Bandra.
//               </Typography>
//               <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
//                 <Button
//                   component={Link}
//                   to="/menu"
//                   variant="contained"
//                   color="secondary"
//                   size="large"
//                   endIcon={<KeyboardArrowRightIcon />}
//                   sx={{ fontWeight: 700, px: 4, py: 1.5, fontSize: '1rem' }}
//                 >
//                   Explore Menu
//                 </Button>
//                 <Button
//                   component={Link}
//                   to="/reservations"
//                   variant="outlined"
//                   size="large"
//                   sx={{
//                     borderColor: 'rgba(255,248,240,0.5)',
//                     color: '#FFF8F0',
//                     fontWeight: 600,
//                     px: 4,
//                     py: 1.5,
//                     fontSize: '1rem',
//                     '&:hover': { borderColor: 'secondary.light', bgcolor: 'rgba(200,148,58,0.1)' },
//                   }}
//                 >
//                   Book a Table
//                 </Button>
//               </Stack>

//               {/* Stats */}
//               <Stack direction="row" spacing={4} sx={{ mt: 5 }}>
//                 {[
//                   { value: '15+', label: 'Years of Craft' },
//                   { value: '50+', label: 'Menu Items' },
//                   { value: '4.9★', label: 'Google Rating' },
//                 ].map((stat) => (
//                   <Box key={stat.label}>
//                     <Typography variant="h4" sx={{ color: 'secondary.light', fontWeight: 700, lineHeight: 1 }}>
//                       {stat.value}
//                     </Typography>
//                     <Typography variant="caption" sx={{ color: 'rgba(255,248,240,0.6)', letterSpacing: '0.5px' }}>
//                       {stat.label}
//                     </Typography>
//                   </Box>
//                 ))}
//               </Stack>
//             </Grid>

//             {/* Hero Visual Panel */}
//             <Grid item xs={12} md={6} sx={{ display: { xs: 'none', md: 'block' } }}>
//               <Box
//                 sx={{
//                   position: 'relative',
//                   height: 540,
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                 }}
//               >
//                 {/* Dashed orbit ring */}
//                 <Box
//                   sx={{
//                     position: 'absolute',
//                     width: ORBIT_RADIUS * 2,
//                     height: ORBIT_RADIUS * 2,
//                     borderRadius: '50%',
//                     border: '1.5px dashed rgba(200,148,58,0.25)',
//                     pointerEvents: 'none',
//                   }}
//                 />

//                 <CoffeeAnimation />

//                 {/* Orbiting cards — evenly spaced via negative delay */}
//                 {orbitingCards.map((card, i) => (
//                   <Box
//                     key={card.label}
//                     sx={{
//                       position: 'absolute',
//                       top: '50%',
//                       left: '50%',
//                       width: 0,
//                       height: 0,
//                       // Outer arm: rotates anti-clockwise around orbit center
//                       animation: `${rotateAntiCW} ${ORBIT_DURATION}s linear infinite`,
//                       animationDelay: `${-(i * (ORBIT_DURATION / orbitingCards.length))}s`,
//                     }}
//                   >
//                     {/* Inner arm: translates to orbit radius + counter-rotates to stay upright */}
//                     <Box
//                       sx={{
//                         position: 'absolute',
//                         left: ORBIT_RADIUS,
//                         top: 0,
//                         animation: `${counterRotate} ${ORBIT_DURATION}s linear infinite`,
//                         animationDelay: `${-(i * (ORBIT_DURATION / orbitingCards.length))}s`,
//                       }}
//                     >
//                       <Paper
//                         elevation={6}
//                         sx={{
//                           transform: 'translate(-50%, -50%)',
//                           px: 2,
//                           py: 1,
//                           borderRadius: 3,
//                           bgcolor: 'rgba(255,248,240,0.96)',
//                           display: 'flex',
//                           alignItems: 'center',
//                           gap: 1,
//                           minWidth: 158,
//                           whiteSpace: 'nowrap',
//                           border: '1px solid rgba(200,148,58,0.25)',
//                           backdropFilter: 'blur(6px)',
//                         }}
//                       >
//                         <Typography sx={{ fontSize: '1.35rem', lineHeight: 1 }}>{card.emoji}</Typography>
//                         <Typography variant="caption" sx={{ color: 'primary.main', fontWeight: 700, lineHeight: 1.3, fontSize: '0.72rem' }}>
//                           {card.label}
//                         </Typography>
//                       </Paper>
//                     </Box>
//                   </Box>
//                 ))}
//               </Box>
//             </Grid>
//           </Grid>
//         </Container>

//         {/* Wave divider */}
//         <Box
//           sx={{
//             position: 'absolute',
//             bottom: -2,
//             left: 0,
//             right: 0,
//             lineHeight: 0,
//           }}
//         >
//           <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 60 }}>
//             <path d="M0,60 C360,0 1080,0 1440,60 L1440,60 L0,60 Z" fill="#FFF8F0" />
//           </svg>
//         </Box>
//       </Box>

//       {/* Features Section */}
//       <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: 'background.default' }}>
//         <Container maxWidth="xl">
//           <Box sx={{ textAlign: 'center', mb: 6 }}>
//             <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: '3px' }}>
//               Why Choose Us
//             </Typography>
//             <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, mt: 1 }}>
//               More Than Just a Café
//             </Typography>
//           </Box>
//           <Grid container spacing={3}>
//             {features.map((f) => (
//               <Grid item xs={12} sm={6} md={3} key={f.title}>
//                 <Card
//                   sx={{
//                     height: '100%',
//                     textAlign: 'center',
//                     p: 1,
//                     border: '1px solid',
//                     borderColor: 'rgba(74,44,42,0.08)',
//                   }}
//                 >
//                   <CardContent sx={{ p: 3 }}>
//                     <Box sx={{ mb: 2 }}>{f.icon}</Box>
//                     <Typography variant="h6" sx={{ mb: 1, fontWeight: 700 }}>
//                       {f.title}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
//                       {f.desc}
//                     </Typography>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>

//       {/* Specialties Showcase */}
//       <Box
//         sx={{
//           py: { xs: 8, md: 10 },
//           background: 'linear-gradient(135deg, #FFF8F0 0%, #F5E6D3 100%)',
//         }}
//       >
//         <Container maxWidth="xl">
//           <Grid container spacing={6} alignItems="center">
//             <Grid item xs={12} md={5}>
//               <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: '3px' }}>
//                 Our Signatures
//               </Typography>
//               <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, mt: 1, mb: 2 }}>
//                 Crafted with Passion, Served with Love
//               </Typography>
//               <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
//                 From the first sip of espresso to the last bite of our legendary lava cake — every item on our menu is a love letter to good food.
//               </Typography>
//               <Button
//                 component={Link}
//                 to="/menu"
//                 variant="contained"
//                 color="primary"
//                 size="large"
//                 endIcon={<KeyboardArrowRightIcon />}
//                 sx={{ fontWeight: 700 }}
//               >
//                 View Full Menu
//               </Button>
//             </Grid>
//             <Grid item xs={12} md={7}>
//               <Grid container spacing={2}>
//                 {specialties.map((s) => (
//                   <Grid item xs={6} sm={4} key={s.label}>
//                     <Paper
//                       elevation={0}
//                       sx={{
//                         p: 2.5,
//                         textAlign: 'center',
//                         border: '1px solid',
//                         borderColor: 'rgba(74,44,42,0.12)',
//                         borderRadius: 3,
//                         bgcolor: 'white',
//                         cursor: 'default',
//                         transition: 'all 0.3s',
//                         '&:hover': {
//                           borderColor: 'secondary.main',
//                           boxShadow: '0 4px 20px rgba(200,148,58,0.2)',
//                           transform: 'translateY(-3px)',
//                         },
//                       }}
//                     >
//                       <Typography sx={{ fontSize: '2.2rem', mb: 1 }}>{s.emoji}</Typography>
//                       <Typography variant="body2" sx={{ fontWeight: 700, color: 'primary.main', mb: 0.5 }}>
//                         {s.label}
//                       </Typography>
//                       <Typography variant="caption" sx={{ color: 'secondary.main', fontWeight: 600 }}>
//                         {s.desc}
//                       </Typography>
//                     </Paper>
//                   </Grid>
//                 ))}
//               </Grid>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* Testimonials */}
//       <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default', overflow: 'hidden' }}>
//         <Container maxWidth="xl">
//           <Box sx={{ textAlign: 'center', mb: 7 }}>
//             <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: '4px' }}>Happy Guests</Typography>
//             <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, mt: 1 }}>What Our Regulars Say</Typography>
//           </Box>
//         </Container>
//         <Box
//           ref={testimonialsRef}
//           sx={{ overflow: 'hidden', '&:hover .testimonial-track': { animationPlayState: 'paused' } }}
//         >
//           <Box
//             className="testimonial-track"
//             sx={{
//               display: 'flex',
//               width: 'max-content',
//               animation: `${testimonialScroll} 28s linear infinite`,
//               gap: 3,
//               px: 3,
//             }}
//           >
//             {[...testimonials, ...testimonials].map((t, i) => (
//               <Card key={i} sx={{
//                 width: 340, flexShrink: 0, p: 1,
//                 border: '1px solid rgba(61,90,71,0.08)',
//                 cursor: 'default',
//               }}>
//                 <CardContent sx={{ p: 3 }}>
//                   <Box sx={{ display: 'flex', mb: 2 }}>
//                     {[...Array(t.rating)].map((_, j) => <StarIcon key={j} sx={{ fontSize: 16, color: 'secondary.main' }} />)}
//                   </Box>
//                   <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.85, fontStyle: 'italic', fontSize: '0.9rem' }}>
//                     "{t.review}"
//                   </Typography>
//                   <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
//                     <Avatar sx={{ bgcolor: 'primary.main', color: '#FAF7F2', width: 42, height: 42, fontWeight: 700, fontFamily: '"Cormorant Garamond", serif', fontSize: '1.1rem' }}>
//                       {t.avatar}
//                     </Avatar>
//                     <Box>
//                       <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize: '0.9rem' }}>{t.name}</Typography>
//                       <Typography variant="caption" color="text.secondary">{t.role}</Typography>
//                     </Box>
//                   </Box>
//                 </CardContent>
//               </Card>
//             ))}
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// }



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
  Paper,
  keyframes,
} from '@mui/material';

import CoffeeIcon from '@mui/icons-material/Coffee';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import StarIcon from '@mui/icons-material/Star';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useRef } from 'react';

const testimonialScroll = keyframes`
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

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
  { name: 'Priya Sharma', role: 'Food Blogger', review: 'Absolutely the best café in Mumbai! The truffle pasta and caramel latte are life-changing. I come every weekend.', rating: 5, avatar: 'P' },
  { name: 'Arjun Menon', role: 'Architect', review: 'The ambience is warm and inviting — perfect for a work session or romantic dinner. The lava cake deserves its own award.', rating: 5, avatar: 'A' },
  { name: 'Sneha Kapoor', role: 'Interior Designer', review: 'Brewed & Baked nails both food and aesthetics. The weekend brunch platter is a feast for eyes and stomach!', rating: 5, avatar: 'S' },
  { name: 'Rahul Verma', role: 'Tech Founder', review: 'My go-to spot for focus work. Great wifi, even better coffee. The rose cardamom latte is something else entirely.', rating: 5, avatar: 'R' },
  { name: 'Meera Nair', role: 'Chef', review: 'As a chef myself, I am impressed by the attention to detail. Ingredients are top-notch and every dish is thoughtfully plated.', rating: 5, avatar: 'M' },
];

const specialties = [
  { emoji: '☕', label: 'Signature Coffee', desc: 'From ₹120' },
  { emoji: '🥑', label: 'Avocado Toast', desc: 'From ₹320' },
  { emoji: '🍝', label: 'Truffle Pasta', desc: 'From ₹580' },
  { emoji: '🎂', label: 'Lava Cake', desc: 'From ₹340' },
  { emoji: '🫖', label: 'Afternoon Tea', desc: 'From ₹750' },
  { emoji: '🥭', label: 'Mango Panna Cotta', desc: 'From ₹260' },
];

// HD Unsplash café image — free to use
const HERO_IMAGE = 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1800&q=85&auto=format&fit=crop';

export default function Home() {
  const testimonialsRef = useRef<HTMLDivElement>(null);

  return (
    <Box>
      {/* ── Hero ── */}
      <Box
        sx={{
          minHeight: '100vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        {/* HD background image */}
        <Box
          component="img"
          src={HERO_IMAGE}
          alt="Brewed & Baked café interior"
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />

        {/* Dark green overlay — lets image breathe but keeps text readable */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(105deg, rgba(27,67,50,0.88) 0%, rgba(27,67,50,0.70) 50%, rgba(27,67,50,0.30) 100%)',
          }}
        />

        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, pt: 14, pb: 12, textAlign: 'center' }}>

          <Typography
            variant="h1"
            sx={{
              color: '#FFFFFF',
              fontSize: { xs: '2.8rem', sm: '3.8rem', md: '5rem' },
              fontWeight: 800,
              lineHeight: 1.08,
              mb: 1,
              letterSpacing: '-1.5px',
            }}
          >
            Where Every Sip
          </Typography>
          <Typography
            variant="h1"
            sx={{
              color: '#E9C46A',
              fontSize: { xs: '2.8rem', sm: '3.8rem', md: '5rem' },
              fontWeight: 800,
              lineHeight: 1.08,
              mb: 3,
              letterSpacing: '-1.5px',
            }}
          >
            Tells a Story
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: 'rgba(255,255,255,0.78)',
              fontWeight: 300,
              mb: 5,
              lineHeight: 1.85,
              fontSize: '1.1rem',
              mx: 'auto',
              maxWidth: 520,
            }}
          >
            Artisan coffee, handcrafted pastries, and soul-warming meals — all under one cosy roof in the heart of Bandra.
          </Typography>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" sx={{ mb: 7 }}>
            <Button
              component={Link}
              to="/menu"
              variant="contained"
              color="secondary"
              size="large"
              endIcon={<KeyboardArrowRightIcon />}
              sx={{ fontWeight: 700, px: 4, py: 1.6, fontSize: '1rem' }}
            >
              Explore Menu
            </Button>
            <Button
              component={Link}
              to="/reservations"
              variant="outlined"
              size="large"
              sx={{
                borderColor: 'rgba(255,255,255,0.45)',
                color: '#FFFFFF',
                fontWeight: 600,
                px: 4,
                py: 1.6,
                fontSize: '1rem',
                backdropFilter: 'blur(4px)',
                '&:hover': {
                  borderColor: '#E9C46A',
                  bgcolor: 'rgba(233,196,106,0.10)',
                },
              }}
            >
              Book a Table
            </Button>
          </Stack>

          {/* Stats row */}
          <Stack
            direction="row"
            justifyContent="center"
            spacing={0}
            divider={
              <Box sx={{ width: '1px', bgcolor: 'rgba(255,255,255,0.18)', mx: { xs: 2, md: 4 } }} />
            }
          >
            {[
              { value: '15+', label: 'Years of craft' },
              { value: '50+', label: 'Menu items' },
              { value: '4.9★', label: 'Google rating' },
            ].map((stat) => (
              <Box key={stat.label}>
                <Typography
                  variant="h4"
                  sx={{ color: '#E9C46A', fontWeight: 800, lineHeight: 1, mb: 0.5 }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{ color: 'rgba(255,255,255,0.55)', letterSpacing: '0.5px', fontSize: '0.72rem' }}
                >
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Container>

        {/* Wave divider */}
        <Box sx={{ position: 'absolute', bottom: -2, left: 0, right: 0, lineHeight: 0 }}>
          <svg viewBox="0 0 1440 64" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 64 }}>
            <path d="M0,64 C360,0 1080,0 1440,64 L1440,64 L0,64 Z" fill="#fffaed" />
          </svg>
        </Box>
      </Box>

      {/* ── Features ── */}
      <Box sx={{ py: { xs: 8, md: 10 } , bgcolor: "#fffaed"}}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="overline"
              sx={{ color: 'red', fontWeight: 700, letterSpacing: '3px' }}
            >
              Why Choose Us
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, mt: 1, fontWeight: 700 }}>
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
                    borderColor: 'rgba(45,106,79,0.12)',
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: '16px',
                        bgcolor: 'rgba(45,106,79,0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 2,
                      }}
                    >
                      {f.icon}
                    </Box>
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

      {/* ── Specialties Showcase ── */}
      <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: '#EEF6F1' }}>
        <Container maxWidth="xl">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={5}>
              <Typography
                variant="overline"
                sx={{ color: 'red', fontWeight: 700, letterSpacing: '3px' }}
              >
                Our Signatures
              </Typography>
              <Typography
                variant="h2"
                sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, mt: 1, mb: 2, fontWeight: 700 }}
              >
                Crafted with Passion,<br />Served with Love
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4, lineHeight: 1.8 }}>
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
                        borderColor: 'rgba(45,106,79,0.14)',
                        borderRadius: 3,
                        bgcolor: 'white',
                        cursor: 'default',
                        transition: 'all 0.25s ease',
                        '&:hover': {
                          borderColor: 'primary.main',
                          boxShadow: '0 6px 24px rgba(45,106,79,0.14)',
                          transform: 'translateY(-4px)',
                        },
                      }}
                    >
                      <Typography sx={{ fontSize: '2.2rem', mb: 1 }}>{s.emoji}</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 700, color: 'primary.main', mb: 0.5 }}>
                        {s.label}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'secondary.dark', fontWeight: 600 }}>
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

      {/* ── Full-bleed café photo break ── */}
      <Box
        sx={{
          height: { xs: 240, md: 380 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1800&q=85&auto=format&fit=crop"
          alt="Barista crafting coffee"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center 60%',
          }}
        />
        {/* Green tint strip */}
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(27,67,50,0.55) 0%, transparent 60%)',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            pl: { xs: 4, md: 12 },
          }}
        >
          <Box>
            <Typography
              variant="h3"
              sx={{ color: '#fff', fontWeight: 800, fontSize: { xs: '1.6rem', md: '2.4rem' }, mb: 1 }}
            >
              Roasted fresh every morning.
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.72)', fontSize: '1rem' }}>
              Single-origin beans · In-house roastery · Zero compromise
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* ── Testimonials ── */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#EEF6F1', overflow: 'hidden' }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', mb: 7 }}>
            <Typography
              variant="overline"
              sx={{ color: 'red', fontWeight: 700, letterSpacing: '4px' }}
            >
              Happy Guests
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '3rem' }, mt: 1, fontWeight: 700 }}>
              What Our Regulars Say
            </Typography>
          </Box>
        </Container>

        <Box
          ref={testimonialsRef}
          sx={{ overflow: 'hidden', '&:hover .testimonial-track': { animationPlayState: 'paused' } }}
        >
          <Box
            className="testimonial-track"
            sx={{
              display: 'flex',
              width: 'max-content',
              animation: `${testimonialScroll} 32s linear infinite`,
              gap: 3,
              px: 3,
            }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <Card
                key={i}
                sx={{
                  width: 340,
                  flexShrink: 0,
                  p: 1,
                  border: '1px solid',
                  borderColor: 'rgba(45,106,79,0.10)',
                  cursor: 'default',
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  {/* Stars */}
                  <Box sx={{ display: 'flex', mb: 2, gap: 0.3 }}>
                    {[...Array(t.rating)].map((_, j) => (
                      <StarIcon key={j} sx={{ fontSize: 16, color: '#E9C46A' }} />
                    ))}
                  </Box>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      mb: 3,
                      lineHeight: 1.85,
                      fontStyle: 'italic',
                      fontSize: '0.9rem',
                    }}
                  >
                    "{t.review}"
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                    <Avatar
                      sx={{
                        bgcolor: 'primary.main',
                        color: '#fff',
                        width: 42,
                        height: 42,
                        fontWeight: 700,
                        fontSize: '1rem',
                      }}
                    >
                      {t.avatar}
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize: '0.9rem' }}>
                        {t.name}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {t.role}
                      </Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
      
    </Box>
  );
}