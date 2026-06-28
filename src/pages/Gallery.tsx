import { useState } from 'react';
import {
  Box, Container, Typography, ToggleButton, ToggleButtonGroup,
  Modal, IconButton, Chip,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

type GalleryItem = {
  id: number;
  title: string;
  subtitle: string;
  category: string;
  size: 'small' | 'medium' | 'large';
  img: string;
};

const galleryItems: GalleryItem[] = [
  { id: 1,  title: 'Morning Espresso',    subtitle: 'Single-origin Ethiopian blend',    category: 'Coffee',   size: 'large',  img: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=800&q=80&auto=format&fit=crop' },
  { id: 2,  title: 'Butter Croissant',    subtitle: 'Freshly baked each morning',       category: 'Food',     size: 'small',  img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80&auto=format&fit=crop' },
  { id: 3,  title: 'The Garden Room',     subtitle: 'Our outdoor seating area',          category: 'Ambience', size: 'medium', img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=700&q=80&auto=format&fit=crop' },
  { id: 4,  title: 'Truffle Pasta',       subtitle: "Chef's signature dish",             category: 'Food',     size: 'small',  img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80&auto=format&fit=crop' },
  { id: 5,  title: 'Lava Cake',           subtitle: 'Dark chocolate, molten centre',     category: 'Food',     size: 'medium', img: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=700&q=80&auto=format&fit=crop' },
  { id: 6,  title: 'Interior Corner',     subtitle: 'Warm lighting, cosy nooks',         category: 'Ambience', size: 'large',  img: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&q=80&auto=format&fit=crop' },
  { id: 7,  title: 'Afternoon Tea',       subtitle: 'A British-inspired ritual',         category: 'Coffee',   size: 'small',  img: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600&q=80&auto=format&fit=crop' },
  { id: 8,  title: 'Birthday Brunch',     subtitle: 'Private event setup',               category: 'Events',   size: 'large',  img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80&auto=format&fit=crop' },
  { id: 9,  title: 'Avocado Toast',       subtitle: 'Our most ordered breakfast',        category: 'Food',     size: 'medium', img: 'https://images.unsplash.com/photo-1603046891751-d0d91f4a36ac?w=700&q=80&auto=format&fit=crop' },
  { id: 10, title: 'Rose Latte Art',      subtitle: 'Rose water & cardamom infused',     category: 'Coffee',   size: 'small',  img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&q=80&auto=format&fit=crop' },
  { id: 11, title: 'Jazz Evenings',       subtitle: 'Live music every Friday',           category: 'Events',   size: 'medium', img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=700&q=80&auto=format&fit=crop' },
  { id: 12, title: 'Cold Brew Float',     subtitle: 'Our summer signature',              category: 'Coffee',   size: 'small',  img: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&q=80&auto=format&fit=crop' },
  { id: 13, title: 'The Bar Counter',     subtitle: 'Espresso bar seating',              category: 'Ambience', size: 'medium', img: 'https://images.unsplash.com/photo-1493857671505-72967e2e2760?w=700&q=80&auto=format&fit=crop' },
  { id: 14, title: 'Mango Panna Cotta',   subtitle: 'Alphonso mango coulis',             category: 'Food',     size: 'large',  img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80&auto=format&fit=crop' },
  { id: 15, title: 'Corporate Meetup',    subtitle: 'Private dining arrangements',       category: 'Events',   size: 'small',  img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80&auto=format&fit=crop' },
  { id: 16, title: 'Flat White',          subtitle: 'Silky microfoam, double shot',      category: 'Coffee',   size: 'medium', img: 'https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?w=700&q=80&auto=format&fit=crop' },
  { id: 17, title: 'Brunch Spread',       subtitle: 'Weekend farmers market haul',       category: 'Food',     size: 'large',  img: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=800&q=80&auto=format&fit=crop' },
  { id: 18, title: 'Candlelit Dinner',    subtitle: 'Set menu evenings, Thursdays',      category: 'Events',   size: 'medium', img: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80&auto=format&fit=crop' },
];

const categories = ['All', 'Food', 'Coffee', 'Ambience', 'Events'];
const sizeMap = { small: 200, medium: 290, large: 400 };

const categoryChip: Record<string, { bg: string; color: string }> = {
  Food:     { bg: '#C4714A', color: '#fff' },
  Coffee:   { bg: '#3D5A47', color: '#fff' },
  Ambience: { bg: '#5C7E6A', color: '#fff' },
  Events:   { bg: '#8B6347', color: '#fff' },
};

const HERO_IMAGE = 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1800&q=85&auto=format&fit=crop';

export default function Gallery() {
  const [selected, setSelected] = useState('All');
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filtered = selected === 'All' ? galleryItems : galleryItems.filter(i => i.category === selected);

  const openLightbox = (idx: number) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);
  const prev = () => setLightboxIdx(i => i !== null ? (i - 1 + filtered.length) % filtered.length : null);
  const next = () => setLightboxIdx(i => i !== null ? (i + 1) % filtered.length : null);

  const currentItem = lightboxIdx !== null ? filtered[lightboxIdx] : null;

  return (
    <Box>
      {/* ── Hero ── */}
      <Box sx={{ position: 'relative', pt: { xs: 14, md: 16 }, pb: { xs: 8, md: 10 }, textAlign: 'center', overflow: 'hidden' }}>
        <Box component="img" src={HERO_IMAGE} alt="Café interior"
          sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
        <Box sx={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(27,45,36,0.82) 0%, rgba(30,45,39,0.65) 50%, rgba(27,45,36,0.92) 100%)' }} />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="overline" sx={{ color: '#A8D5BA', letterSpacing: '4px', fontWeight: 700 }}>Gallery</Typography>
          <Typography variant="h2" sx={{ color: '#FAF7F2', fontSize: { xs: '2.2rem', md: '3.2rem' }, fontWeight: 700, mt: 1, mb: 2 }}>
            A Glimpse Into{' '}
            <Box component="span" sx={{ color: '#D9956F', fontStyle: 'italic' }}>Our World</Box>
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(250,247,242,0.72)', maxWidth: 480, mx: 'auto', lineHeight: 1.85 }}>
            Every corner of Apna Adda is designed to delight — from our coffee bar to the garden seating.
          </Typography>
        </Container>
        <Box sx={{ position: 'absolute', bottom: -2, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 60 }}>
            <path d="M0,60 C480,0 960,0 1440,60 L1440,60 L0,60 Z" fill="#1E2D27" />
          </svg>
        </Box>
      </Box>

      {/* ── Filter + Grid — dark bg matching hero ── */}
      <Box sx={{ background: 'linear-gradient(180deg, #1E2D27 0%, #243322 40%, #2A3F32 100%)', pb: { xs: 8, md: 12 } }}>
        <Container maxWidth="xl" sx={{ pt: { xs: 4, md: 6 } }}>

          {/* Filter tabs */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
            <ToggleButtonGroup value={selected} exclusive onChange={(_, v) => v && setSelected(v)}
              sx={{
                gap: 1, flexWrap: 'wrap', justifyContent: 'center',
                '& .MuiToggleButton-root': {
                  borderRadius: '50px !important',
                  border: '1px solid !important',
                  borderColor: 'rgba(250,247,242,0.15) !important',
                  px: 3, py: 0.8,
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: '0.87rem',
                  color: 'rgba(250,247,242,0.65)',
                  bgcolor: 'rgba(250,247,242,0.04)',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    bgcolor: 'rgba(196,113,74,0.12) !important',
                    borderColor: 'rgba(196,113,74,0.5) !important',
                    color: '#D9956F',
                  },
                  '&.Mui-selected': {
                    bgcolor: '#C4714A !important',
                    color: '#FAF7F2 !important',
                    borderColor: '#C4714A !important',
                  },
                },
              }}>
              {categories.map(c => <ToggleButton key={c} value={c}>{c}</ToggleButton>)}
            </ToggleButtonGroup>
          </Box>

          {/* Masonry grid */}
          <Box sx={{ columns: { xs: 1, sm: 2, md: 3, lg: 4 }, columnGap: '14px', '& > *': { breakInside: 'avoid', marginBottom: '14px' } }}>
            {filtered.map((item, idx) => (
              <Box
                key={item.id}
                onClick={() => openLightbox(idx)}
                sx={{
                  height: sizeMap[item.size],
                  borderRadius: '14px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'transform 0.28s ease, box-shadow 0.28s ease',
                  border: '1px solid rgba(250,247,242,0.06)',
                  '&:hover': {
                    transform: 'scale(1.025)',
                    boxShadow: '0 20px 56px rgba(0,0,0,0.55)',
                    '& .gallery-overlay': { opacity: 1 },
                    '& .gallery-img': { transform: 'scale(1.07)' },
                  },
                }}
              >
                {/* Image */}
                <Box
                  className="gallery-img"
                  component="img"
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transition: 'transform 0.45s ease',
                  }}
                />

                {/* Always-visible bottom gradient + title */}
                <Box sx={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(10,22,16,0.78) 0%, rgba(0,0,0,0) 55%)',
                }}>
                  <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, p: 2 }}>
                    <Typography sx={{ color: '#FAF7F2', fontWeight: 700, fontSize: item.size === 'large' ? '1rem' : '0.88rem', lineHeight: 1.3 }}>
                      {item.title}
                    </Typography>
                  </Box>
                </Box>

                {/* Hover overlay — full info */}
                <Box className="gallery-overlay" sx={{
                  position: 'absolute', inset: 0, opacity: 0,
                  background: 'linear-gradient(to top, rgba(10,22,16,0.92) 0%, rgba(10,22,16,0.3) 60%, transparent 100%)',
                  transition: 'opacity 0.28s ease',
                  display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', p: 2.5,
                }}>
                  <Chip
                    label={item.category} size="small"
                    sx={{
                      bgcolor: categoryChip[item.category]?.bg ?? '#3D5A47',
                      color: '#fff', fontSize: '0.62rem', fontWeight: 700,
                      alignSelf: 'flex-start', mb: 0.8, borderRadius: '6px', height: 20,
                    }}
                  />
                  <Typography sx={{ color: '#FAF7F2', fontWeight: 700, fontSize: '0.95rem', mb: 0.3 }}>{item.title}</Typography>
                  <Typography sx={{ color: 'rgba(250,247,242,0.68)', fontSize: '0.78rem' }}>{item.subtitle}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Lightbox ── */}
      <Modal open={lightboxIdx !== null} onClose={closeLightbox}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', p: 2, backdropFilter: 'blur(12px)', bgcolor: 'rgba(10,22,16,0.7)' }}>
        <Box sx={{ position: 'relative', maxWidth: 640, width: '100%', outline: 'none' }}>
          {currentItem && (
            <Box sx={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 40px 100px rgba(0,0,0,0.6)', position: 'relative' }}>
              {/* Full image */}
              <Box component="img" src={currentItem.img.replace('w=600', 'w=900').replace('w=700', 'w=900').replace('w=800', 'w=900')}
                alt={currentItem.title}
                sx={{ display: 'block', width: '100%', height: { xs: 280, sm: 400 }, objectFit: 'cover', objectPosition: 'center' }}
              />

              {/* Close */}
              <IconButton onClick={closeLightbox}
                sx={{ position: 'absolute', top: 12, right: 12, color: '#FAF7F2', bgcolor: 'rgba(0,0,0,0.45)', '&:hover': { bgcolor: 'rgba(0,0,0,0.7)' } }}>
                <CloseIcon fontSize="small" />
              </IconButton>

              {/* Bottom info bar */}
              <Box sx={{ bgcolor: '#1E2D27', p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 0.8 }}>
                  <Chip label={currentItem.category} size="small"
                    sx={{ bgcolor: categoryChip[currentItem.category]?.bg ?? '#3D5A47', color: '#fff', fontWeight: 700, fontSize: '0.68rem', borderRadius: '6px' }} />
                  <Typography sx={{ color: 'rgba(250,247,242,0.45)', fontSize: '0.78rem' }}>
                    {lightboxIdx !== null ? lightboxIdx + 1 : 0} / {filtered.length}
                  </Typography>
                </Box>
                <Typography sx={{ color: '#FAF7F2', fontFamily: '"Cormorant Garamond", serif', fontSize: '1.5rem', fontWeight: 700, mb: 0.3 }}>
                  {currentItem.title}
                </Typography>
                <Typography sx={{ color: 'rgba(250,247,242,0.62)', fontSize: '0.88rem' }}>{currentItem.subtitle}</Typography>
              </Box>

              {/* Nav arrows — left & right sides of image */}
              <IconButton onClick={prev}
                sx={{ position: 'absolute', left: 10, top: '35%', color: '#FAF7F2', bgcolor: 'rgba(0,0,0,0.4)', '&:hover': { bgcolor: 'rgba(0,0,0,0.65)' } }}>
                <ArrowBackIosIcon fontSize="small" />
              </IconButton>
              <IconButton onClick={next}
                sx={{ position: 'absolute', right: 10, top: '35%', color: '#FAF7F2', bgcolor: 'rgba(0,0,0,0.4)', '&:hover': { bgcolor: 'rgba(0,0,0,0.65)' } }}>
                <ArrowForwardIosIcon fontSize="small" />
              </IconButton>
            </Box>
          )}
        </Box>
      </Modal>
    </Box>
  );
}