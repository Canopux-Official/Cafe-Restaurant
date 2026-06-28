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

const dietaryColors: Record<string, 'success' | 'warning' | 'info'> = {
  Vegan: 'success',
  Vegetarian: 'success',
  'Gluten-Free': 'info',
};

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
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
      {/* Hero Banner */}
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
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle at 50% 80%, rgba(200,148,58,0.15) 0%, transparent 60%)',
          }}
        />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography sx={{ fontSize: '3.5rem', mb: 1 }}>🍽️</Typography>
          <Typography
            variant="overline"
            sx={{ color: 'secondary.light', letterSpacing: '4px', fontWeight: 700 }}
          >
            Our Menu
          </Typography>
          <Typography
            variant="h2"
            sx={{ color: '#FFF8F0', fontSize: { xs: '2.2rem', md: '3rem' }, mt: 1, mb: 2 }}
          >
            A Feast for Every Craving
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'rgba(255,248,240,0.75)', maxWidth: 520, mx: 'auto', lineHeight: 1.8 }}
          >
            From morning espresso to evening desserts — explore our hand-crafted menu built around quality and love.
          </Typography>
        </Container>
        <Box sx={{ position: 'absolute', bottom: -2, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 50" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 50 }}>
            <path d="M0,50 C360,0 1080,0 1440,50 L1440,50 L0,50 Z" fill="#FFF8F0" />
          </svg>
        </Box>
      </Box>

      <Container maxWidth="xl" sx={{ py: { xs: 5, md: 7 } }}>
        {/* Search & Filter */}
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={2}
          alignItems={{ md: 'center' }}
          justifyContent="space-between"
          sx={{ mb: 4 }}
        >
          <TextField
            placeholder="Search dishes or drinks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            size="small"
            sx={{
              width: { xs: '100%', md: 320 },
              '& .MuiOutlinedInput-root': {
                borderRadius: '50px',
                bgcolor: 'white',
                '&:hover fieldset': { borderColor: 'primary.main' },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'text.secondary' }} />
                </InputAdornment>
              ),
            }}
          />

          <Box sx={{ overflowX: 'auto', pb: 0.5 }}>
            <ToggleButtonGroup
              value={selectedCategory}
              exclusive
              onChange={(_, val) => val && setSelectedCategory(val)}
              sx={{
                flexWrap: 'nowrap',
                gap: 0.5,
                '& .MuiToggleButton-root': {
                  borderRadius: '50px !important',
                  border: '1px solid !important',
                  borderColor: 'rgba(74,44,42,0.2) !important',
                  px: 2,
                  py: 0.6,
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: '0.82rem',
                  color: 'text.secondary',
                  whiteSpace: 'nowrap',
                  '&.Mui-selected': {
                    bgcolor: 'primary.main !important',
                    color: 'primary.contrastText !important',
                    borderColor: 'primary.main !important',
                  },
                },
              }}
            >
              {menuCategories.map((cat) => (
                <ToggleButton key={cat} value={cat}>
                  {cat}
                  <Badge
                    badgeContent={categoryCount(cat)}
                    color="secondary"
                    sx={{
                      ml: 0.8,
                      '& .MuiBadge-badge': {
                        fontSize: '0.65rem',
                        height: 16,
                        minWidth: 16,
                        right: -6,
                        top: -6,
                      },
                    }}
                  />
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Box>
        </Stack>

        {/* Results count */}
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Showing <strong>{filteredItems.length}</strong> item{filteredItems.length !== 1 ? 's' : ''}
          {selectedCategory !== 'All' ? ` in "${selectedCategory}"` : ''}
          {searchQuery ? ` matching "${searchQuery}"` : ''}
        </Typography>

        {filteredItems.length === 0 ? (
          <Box sx={{ textAlign: 'center', py: 10 }}>
            <Typography sx={{ fontSize: '4rem', mb: 2 }}>🔍</Typography>
            <Typography variant="h5" sx={{ mb: 1 }}>No items found</Typography>
            <Typography color="text.secondary">Try a different search or category.</Typography>
          </Box>
        ) : (
          <Grid container spacing={3}>
            {filteredItems.map((item) => (
              <Grid item xs={12} sm={6} lg={4} key={item.id}>
                <Fade in timeout={400}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      border: '1px solid',
                      borderColor: 'rgba(74,44,42,0.08)',
                      overflow: 'visible',
                    }}
                  >
                    <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                          <Box
                            sx={{
                              width: 50,
                              height: 50,
                              borderRadius: '12px',
                              bgcolor: 'rgba(200,148,58,0.1)',
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
                            <Typography variant="subtitle1" sx={{ fontWeight: 700, lineHeight: 1.3 }}>
                              {item.name}
                            </Typography>
                            <Typography
                              variant="caption"
                              sx={{ color: 'text.secondary', fontStyle: 'italic' }}
                            >
                              {item.category}
                            </Typography>
                          </Box>
                        </Box>
                        <Typography
                          variant="h6"
                          sx={{ color: 'primary.main', fontWeight: 800, flexShrink: 0, ml: 1 }}
                        >
                          {item.price}
                        </Typography>
                      </Box>

                      <Divider sx={{ my: 1.5 }} />

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ lineHeight: 1.7, flexGrow: 1 }}
                      >
                        {item.description}
                      </Typography>

                      {(item.badge || item.dietary) && (
                        <Stack direction="row" spacing={0.75} flexWrap="wrap" sx={{ mt: 2, gap: 0.5 }}>
                          {item.badge && (
                            <Chip
                              label={item.badge}
                              size="small"
                              sx={{
                                bgcolor: 'secondary.main',
                                color: 'white',
                                fontWeight: 700,
                                fontSize: '0.68rem',
                              }}
                            />
                          )}
                          {item.dietary?.map((d) => (
                            <Chip
                              key={d}
                              label={d}
                              size="small"
                              color={dietaryColors[d] ?? 'default'}
                              variant="outlined"
                              sx={{ fontWeight: 600, fontSize: '0.65rem' }}
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
  );
}
