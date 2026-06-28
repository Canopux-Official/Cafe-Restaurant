import { useState, useMemo } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Stack,
  TextField,
  InputAdornment,
  ToggleButton,
  ToggleButtonGroup,
  Badge,
  Fade,
  Divider,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { menuItems, menuCategories } from '../data/menuData';

// ── Design tokens (matches Gallery) ────────────────────────────────────────
const T = {
  bgDark:    '#1E2D27',
  bgMid:     '#243322',
  bgDeep:    '#2A3F32',
  cream:     '#FAF7F2',
  creamMid:  'rgba(250,247,242,0.68)',
  creamLow:  'rgba(250,247,242,0.15)',
  terracotta:'#C4714A',
  terracottaLight: '#D9956F',
  green:     '#A8D5BA',
  greenDeep: '#3D5A47',
  greenMid:  '#5C7E6A',
  border:    'rgba(250,247,242,0.06)',
  borderHover: 'rgba(250,247,242,0.18)',
};

const dietaryStyle: Record<string, { border: string; color: string }> = {
  Vegan:         { border: T.greenMid,   color: T.green },
  Vegetarian:    { border: T.greenMid,   color: T.green },
  'Gluten-Free': { border: T.terracotta, color: T.terracottaLight },
};

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=85&auto=format&fit=crop';

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const categoryCount = (cat: string) =>
    cat === 'All'
      ? menuItems.length
      : menuItems.filter((i) => i.category === cat).length;

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
          alt="Menu spread"
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
            Our Menu
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
            A Feast for Every{' '}
            <Box component="span" sx={{ color: T.terracottaLight, fontStyle: 'italic' }}>
              Craving
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: T.creamMid, maxWidth: 500, mx: 'auto', lineHeight: 1.85 }}
          >
            From morning espresso to evening desserts — explore our hand-crafted menu
            built around quality and love.
          </Typography>
        </Container>

        {/* Wave — fills into dark section below */}
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

      {/* ── Search, Filter & Grid ── */}
      <Box
        sx={{
          background: `linear-gradient(180deg, ${T.bgDark} 0%, ${T.bgMid} 40%, ${T.bgDeep} 100%)`,
          pb: { xs: 8, md: 12 },
        }}
      >
        <Container maxWidth="xl" sx={{ pt: { xs: 4, md: 6 } }}>

          {/* Search + Filters row */}
          <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={2}
            alignItems={{ md: 'center' }}
            justifyContent="space-between"
            sx={{ mb: 3 }}
          >
            {/* Search */}
            <TextField
              placeholder="Search dishes or drinks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              size="small"
              sx={{
                width: { xs: '100%', md: 300 },
                '& .MuiOutlinedInput-root': {
                  borderRadius: '50px',
                  bgcolor: 'rgba(250,247,242,0.06)',
                  color: T.cream,
                  '& fieldset': { borderColor: T.creamLow },
                  '&:hover fieldset': { borderColor: 'rgba(250,247,242,0.30)' },
                  '&.Mui-focused fieldset': {
                    borderColor: T.terracotta,
                    borderWidth: '1.5px',
                  },
                },
                '& input::placeholder': { color: T.creamMid, opacity: 1 },
                '& input': { color: T.cream },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: T.creamMid, fontSize: 20 }} />
                  </InputAdornment>
                ),
              }}
            />

            {/* Category toggle */}
            <Box sx={{ overflowX: 'auto', pb: 0.5 }}>
              <ToggleButtonGroup
                value={selectedCategory}
                exclusive
                onChange={(_, val) => val && setSelectedCategory(val)}
                sx={{
                  flexWrap: 'nowrap',
                  gap: 1,
                  '& .MuiToggleButton-root': {
                    borderRadius: '50px !important',
                    border: '1px solid !important',
                    borderColor: `${T.creamLow} !important`,
                    px: 3,
                    py: 0.8,
                    textTransform: 'none',
                    fontWeight: 600,
                    fontSize: '0.87rem',
                    color: T.creamMid,
                    bgcolor: 'rgba(250,247,242,0.04)',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      bgcolor: 'rgba(196,113,74,0.12) !important',
                      borderColor: 'rgba(196,113,74,0.5) !important',
                      color: T.terracottaLight,
                    },
                    '&.Mui-selected': {
                      bgcolor: `${T.terracotta} !important`,
                      color: `${T.cream} !important`,
                      borderColor: `${T.terracotta} !important`,
                    },
                  },
                }}
              >
                {menuCategories.map((cat) => (
                  <ToggleButton key={cat} value={cat}>
                    {cat}
                    <Badge
                      badgeContent={categoryCount(cat)}
                      sx={{
                        ml: 0.8,
                        '& .MuiBadge-badge': {
                          fontSize: '0.62rem',
                          height: 16,
                          minWidth: 16,
                          right: -6,
                          top: -6,
                          bgcolor: T.terracottaLight,
                          color: T.cream,
                          fontWeight: 700,
                        },
                      }}
                    />
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </Box>
          </Stack>

          {/* Results count */}
          <Typography
            variant="body2"
            sx={{ mb: 4, color: T.creamMid }}
          >
            Showing{' '}
            <Box component="span" sx={{ fontWeight: 700, color: T.terracottaLight }}>
              {filteredItems.length}
            </Box>{' '}
            item{filteredItems.length !== 1 ? 's' : ''}
            {selectedCategory !== 'All' ? ` in "${selectedCategory}"` : ''}
            {searchQuery ? ` matching "${searchQuery}"` : ''}
          </Typography>

          {/* ── Menu Grid ── */}
          {filteredItems.length === 0 ? (
            <Box sx={{ textAlign: 'center', py: 12 }}>
              <Typography sx={{ fontSize: '3.5rem', mb: 2 }}>🔍</Typography>
              <Typography
                variant="h5"
                sx={{ mb: 1, fontWeight: 700, color: T.cream }}
              >
                No items found
              </Typography>
              <Typography sx={{ color: T.creamMid }}>
                Try a different search or category.
              </Typography>
            </Box>
          ) : (
            <Grid container spacing={2} sx={{ pb: 8 }}>
              {filteredItems.map((item) => (
                <Grid item xs={12} sm={6} lg={4} key={item.id}>
                  <Fade in timeout={400}>
                    <Card
                      sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        bgcolor: 'rgba(250,247,242,0.04)',
                        border: `1px solid ${T.border}`,
                        borderRadius: '14px',
                        overflow: 'visible',
                        boxShadow: 'none',
                        transition: 'box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease, background-color 0.25s ease',
                        '&:hover': {
                          bgcolor: 'rgba(250,247,242,0.07)',
                          boxShadow: '0 20px 56px rgba(0,0,0,0.45)',
                          transform: 'translateY(-3px)',
                          borderColor: T.borderHover,
                        },
                      }}
                    >
                      <CardContent
                        sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}
                      >
                        {/* Item header */}
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            mb: 1.5,
                          }}
                        >
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                            <Box
                              sx={{
                                width: 50,
                                height: 50,
                                borderRadius: '12px',
                                bgcolor: 'rgba(250,247,242,0.07)',
                                border: `1px solid ${T.border}`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.6rem',
                                flexShrink: 0,
                              }}
                            >
                              {item.emoji}
                            </Box>
                            <Box>
                              <Typography
                                variant="subtitle1"
                                sx={{ fontWeight: 700, lineHeight: 1.3, color: T.cream }}
                              >
                                {item.name}
                              </Typography>
                              <Typography
                                variant="caption"
                                sx={{ color: T.green, fontStyle: 'italic' }}
                              >
                                {item.category}
                              </Typography>
                            </Box>
                          </Box>
                          <Typography
                            variant="h6"
                            sx={{
                              color: T.terracottaLight,
                              fontWeight: 800,
                              flexShrink: 0,
                              ml: 1,
                              fontSize: '1.1rem',
                            }}
                          >
                            {item.price}
                          </Typography>
                        </Box>

                        <Divider sx={{ my: 1.5, borderColor: T.border }} />

                        <Typography
                          variant="body2"
                          sx={{ lineHeight: 1.75, flexGrow: 1, color: T.creamMid }}
                        >
                          {item.description}
                        </Typography>

                        {(item.badge || item.dietary) && (
                          <Stack direction="row" flexWrap="wrap" sx={{ mt: 2, gap: 0.6 }}>
                            {item.badge && (
                              <Chip
                                label={item.badge}
                                size="small"
                                sx={{
                                  bgcolor: T.terracotta,
                                  color: T.cream,
                                  fontWeight: 700,
                                  fontSize: '0.68rem',
                                  borderRadius: '6px',
                                  height: 20,
                                }}
                              />
                            )}
                            {item.dietary?.map((d) => (
                              <Chip
                                key={d}
                                label={d}
                                size="small"
                                variant="outlined"
                                sx={{
                                  fontWeight: 600,
                                  fontSize: '0.65rem',
                                  borderRadius: '6px',
                                  height: 20,
                                  borderColor: dietaryStyle[d]?.border ?? T.greenMid,
                                  color: dietaryStyle[d]?.color ?? T.green,
                                }}
                              />
                            ))}
                          </Stack>
                        )}
                      </CardContent>
                    </Card>
                  </Fade>
                </Grid>
              ))}
            </Grid>
          )}
        </Container>
      </Box>
    </Box>
  );
}