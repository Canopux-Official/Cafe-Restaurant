import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Stack,
  Snackbar,
  Alert,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  ToggleButton,
  ToggleButtonGroup,
  Divider,
  Chip,
} from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// ── Design tokens (matches Gallery / Menu / About / Contact) ───────────────
const T = {
  bgDark:          '#1E2D27',
  bgMid:           '#243322',
  bgDeep:          '#2A3F32',
  cream:           '#FAF7F2',
  creamMid:        'rgba(250,247,242,0.68)',
  creamLow:        'rgba(250,247,242,0.15)',
  creamFaint:      'rgba(250,247,242,0.04)',
  creamFaintHover: 'rgba(250,247,242,0.08)',
  terracotta:      '#C4714A',
  terracottaLight: '#D9956F',
  green:           '#A8D5BA',
  greenDeep:       '#3D5A47',
  border:          'rgba(250,247,242,0.06)',
  borderSoft:      'rgba(250,247,242,0.14)',
};

// Shared dark input styles
const darkInput = {
  '& .MuiOutlinedInput-root': {
    borderRadius: '10px',
    bgcolor: T.creamFaint,
    color: T.cream,
    '& fieldset': { borderColor: T.border },
    '&:hover fieldset': { borderColor: T.borderSoft },
    '&.Mui-focused fieldset': { borderColor: T.terracotta, borderWidth: '1.5px' },
  },
  '& .MuiInputLabel-root': { color: T.creamMid },
  '& .MuiInputLabel-root.Mui-focused': { color: T.terracottaLight },
  '& .MuiFormHelperText-root': { color: T.creamMid },
  '& .MuiFormHelperText-root.Mui-error': { color: '#FF8A80' },
  '& input, & textarea': { color: T.cream },
  '& .MuiInputAdornment-root .MuiSvgIcon-root': { color: T.creamMid },
  // date input calendar icon colour (webkit)
  '& input[type="date"]::-webkit-calendar-picker-indicator': { filter: 'invert(0.7)' },
};

const darkSelect = {
  ...darkInput,
  '& .MuiSelect-select': { color: T.cream },
  '& .MuiSelect-icon': { color: T.creamMid },
};

const dropdownPaper = {
  PaperProps: {
    sx: {
      bgcolor: T.bgMid,
      border: `1px solid ${T.borderSoft}`,
      borderRadius: '10px',
      '& .MuiMenuItem-root': {
        color: T.creamMid,
        '&:hover': { bgcolor: 'rgba(250,247,242,0.06)', color: T.cream },
        '&.Mui-selected': { bgcolor: 'rgba(196,113,74,0.15)', color: T.terracottaLight },
        '&.Mui-disabled': { color: 'rgba(250,247,242,0.3)' },
      },
    },
  },
};

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=85&auto=format&fit=crop';

const timeSlots = [
  '7:30 AM', '8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM',
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
  '2:00 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM',
];

const occasions = [
  'No Special Occasion',
  'Birthday Celebration',
  'Anniversary Dinner',
  'Business Meeting',
  'Date Night',
  'Family Gathering',
  'Proposal',
  'Other',
];

const perks = [
  { emoji: '🥂', title: 'Complimentary Welcome Drink', desc: 'Every reserved guest gets a house specialty welcome drink on arrival.' },
  { emoji: '🎂', title: 'Birthday Surprise', desc: "Let us know if it's a birthday — we'll arrange a special surprise dessert." },
  { emoji: '🌹', title: 'Table Decoration', desc: 'We can arrange floral arrangements and candles for romantic occasions.' },
  { emoji: '📸', title: 'Polaroid Moment', desc: 'Ask our team for a complimentary Polaroid photo for special milestones.' },
];

const policies = [
  'Reservations are held for 15 minutes past booking time.',
  'Cancellations must be made 2 hours in advance.',
  'For groups of 10+, please call us directly.',
  'Walk-ins are welcome subject to availability.',
];

interface ReservationForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  occasion: string;
  requests: string;
}

export default function Reservations() {
  const [form, setForm] = useState<ReservationForm>({
    firstName: '', lastName: '', email: '', phone: '',
    date: '', time: '', guests: '2',
    occasion: 'No Special Occasion', requests: '',
  });
  const [errors, setErrors] = useState<Partial<ReservationForm>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Partial<ReservationForm> = {};
    if (!form.firstName.trim()) newErrors.firstName = 'Required';
    if (!form.lastName.trim()) newErrors.lastName = 'Required';
    if (!form.email.trim()) newErrors.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Invalid email';
    if (!form.phone.trim()) newErrors.phone = 'Required';
    if (!form.date) newErrors.date = 'Please select a date';
    if (!form.time) newErrors.time = 'Please select a time';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (field: keyof ReservationForm) => (e: any) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setForm({
        firstName: '', lastName: '', email: '', phone: '',
        date: '', time: '', guests: '2',
        occasion: 'No Special Occasion', requests: '',
      });
    }
  };

  const today = new Date().toISOString().split('T')[0];

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
          alt="Dining table"
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
            Reservations
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
            Reserve Your{' '}
            <Box component="span" sx={{ color: T.terracottaLight, fontStyle: 'italic' }}>
              Perfect Table
            </Box>
          </Typography>
          <Typography sx={{ color: T.creamMid, maxWidth: 500, mx: 'auto', lineHeight: 1.85 }}>
            Book a table and let us create a memorable dining experience just for you.
            Walk-ins are always welcome, but reservations are preferred.
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

      {/* ── Body ── */}
      <Box
        sx={{
          background: `linear-gradient(180deg, ${T.bgDark} 0%, ${T.bgMid} 50%, ${T.bgDeep} 100%)`,
          pb: { xs: 10, md: 14 },
        }}
      >
        <Container maxWidth="xl" sx={{ pt: { xs: 4, md: 6 } }}>
          <Grid container spacing={4}>

            {/* ── Left: Perks + Policy ── */}
            <Grid item xs={12} md={4}>
              <Typography variant="h5" sx={{ mb: 1, fontWeight: 700, color: T.cream }}>
                Why Reserve With Us?
              </Typography>
              <Typography sx={{ color: T.creamMid, mb: 3, fontSize: '0.9rem' }}>
                Guests who reserve enjoy exclusive benefits unavailable to walk-ins.
              </Typography>

              <Stack spacing={2} sx={{ mb: 4 }}>
                {perks.map((p) => (
                  <Box
                    key={p.title}
                    sx={{
                      p: 2.5,
                      border: `1px solid ${T.border}`,
                      borderRadius: '14px',
                      bgcolor: T.creamFaint,
                      display: 'flex',
                      gap: 1.5,
                      alignItems: 'flex-start',
                      transition: 'border-color 0.2s ease, background-color 0.2s ease',
                      '&:hover': { borderColor: T.borderSoft, bgcolor: T.creamFaintHover },
                    }}
                  >
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: '10px',
                        bgcolor: 'rgba(196,113,74,0.12)',
                        border: '1px solid rgba(196,113,74,0.22)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.4rem',
                        flexShrink: 0,
                      }}
                    >
                      {p.emoji}
                    </Box>
                    <Box>
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: 700, mb: 0.3, color: T.cream }}
                      >
                        {p.title}
                      </Typography>
                      <Typography sx={{ color: T.creamMid, fontSize: '0.8rem', lineHeight: 1.65 }}>
                        {p.desc}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>

              <Divider sx={{ mb: 3, borderColor: T.border }} />

              <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5, color: T.cream }}>
                Reservation Policy
              </Typography>
              <Stack spacing={1.2}>
                {policies.map((policy) => (
                  <Box key={policy} sx={{ display: 'flex', gap: 1.2, alignItems: 'flex-start' }}>
                    <CheckCircleIcon
                      sx={{ fontSize: 15, color: T.green, mt: 0.35, flexShrink: 0 }}
                    />
                    <Typography sx={{ color: T.creamMid, fontSize: '0.82rem', lineHeight: 1.65 }}>
                      {policy}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Grid>

            {/* ── Right: Form ── */}
            <Grid item xs={12} md={8}>
              <Card
                sx={{
                  bgcolor: T.creamFaint,
                  border: `1px solid ${T.border}`,
                  borderRadius: '14px',
                  boxShadow: 'none',
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4.5 } }}>
                  <Typography variant="h5" sx={{ mb: 0.5, fontWeight: 700, color: T.cream }}>
                    Book a Table
                  </Typography>
                  <Typography sx={{ color: T.creamMid, mb: 3.5, fontSize: '0.9rem' }}>
                    We'll confirm your reservation via email within 30 minutes.
                  </Typography>

                  <Box component="form" onSubmit={handleSubmit} noValidate>
                    <Grid container spacing={2.5}>

                      {/* Guest count */}
                      <Grid item xs={12}>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            mb: 1.5, fontWeight: 700, color: T.cream,
                            display: 'flex', alignItems: 'center', gap: 1,
                          }}
                        >
                          <PeopleIcon sx={{ fontSize: 18, color: T.terracottaLight }} />
                          Number of Guests
                        </Typography>
                        <ToggleButtonGroup
                          value={form.guests}
                          exclusive
                          onChange={(_, val) => val && setForm((p) => ({ ...p, guests: val }))}
                          sx={{
                            flexWrap: 'wrap',
                            gap: 0.75,
                            '& .MuiToggleButton-root': {
                              borderRadius: '50px !important',
                              border: '1px solid !important',
                              borderColor: `${T.creamLow} !important`,
                              px: 2.5, py: 0.7,
                              textTransform: 'none',
                              fontWeight: 600,
                              fontSize: '0.82rem',
                              color: T.creamMid,
                              bgcolor: 'rgba(250,247,242,0.04)',
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
                          {['1', '2', '3', '4', '5', '6', '7', '8'].map((n) => (
                            <ToggleButton key={n} value={n}>
                              {n} {parseInt(n) === 1 ? 'Guest' : 'Guests'}
                            </ToggleButton>
                          ))}
                        </ToggleButtonGroup>
                      </Grid>

                      {/* Date */}
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth label="Date" type="date"
                          value={form.date} onChange={handleChange('date')}
                          error={!!errors.date} helperText={errors.date}
                          InputLabelProps={{ shrink: true }}
                          inputProps={{ min: today }}
                          required
                          InputProps={{
                            startAdornment: (
                              <EventIcon sx={{ mr: 1, color: T.creamMid, fontSize: 20 }} />
                            ),
                          }}
                          sx={darkInput}
                        />
                      </Grid>

                      {/* Time */}
                      <Grid item xs={12} sm={6}>
                        <FormControl fullWidth error={!!errors.time} required sx={darkSelect}>
                          <InputLabel>Preferred Time</InputLabel>
                          <Select
                            value={form.time}
                            label="Preferred Time"
                            onChange={handleChange('time')}
                            startAdornment={
                              <AccessTimeIcon sx={{ mr: 1, color: T.creamMid, fontSize: 20 }} />
                            }
                            MenuProps={dropdownPaper}
                          >
                            <MenuItem value="" disabled>
                              <em style={{ color: 'rgba(250,247,242,0.3)' }}>Select a time slot</em>
                            </MenuItem>
                            {timeSlots.map((t) => (
                              <MenuItem key={t} value={t}>{t}</MenuItem>
                            ))}
                          </Select>
                          {errors.time && (
                            <Typography variant="caption" sx={{ color: '#FF8A80', mt: 0.5, ml: 1.5 }}>
                              {errors.time}
                            </Typography>
                          )}
                        </FormControl>
                      </Grid>

                      {/* Name */}
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth label="First Name"
                          value={form.firstName} onChange={handleChange('firstName')}
                          error={!!errors.firstName} helperText={errors.firstName}
                          required sx={darkInput}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth label="Last Name"
                          value={form.lastName} onChange={handleChange('lastName')}
                          error={!!errors.lastName} helperText={errors.lastName}
                          required sx={darkInput}
                        />
                      </Grid>

                      {/* Contact */}
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth label="Email Address" type="email"
                          value={form.email} onChange={handleChange('email')}
                          error={!!errors.email} helperText={errors.email}
                          required sx={darkInput}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          fullWidth label="Phone Number" type="tel"
                          value={form.phone} onChange={handleChange('phone')}
                          error={!!errors.phone} helperText={errors.phone}
                          required sx={darkInput}
                        />
                      </Grid>

                      {/* Occasion */}
                      <Grid item xs={12}>
                        <FormControl fullWidth sx={darkSelect}>
                          <InputLabel>Special Occasion</InputLabel>
                          <Select
                            value={form.occasion}
                            label="Special Occasion"
                            onChange={handleChange('occasion')}
                            MenuProps={dropdownPaper}
                          >
                            {occasions.map((o) => (
                              <MenuItem key={o} value={o}>{o}</MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>

                      {/* Requests */}
                      <Grid item xs={12}>
                        <TextField
                          fullWidth label="Special Requests (optional)" multiline rows={3}
                          value={form.requests} onChange={handleChange('requests')}
                          placeholder="Allergies, dietary restrictions, accessibility needs, seating preferences..."
                          sx={{
                            ...darkInput,
                            '& input::placeholder, & textarea::placeholder': { color: 'rgba(250,247,242,0.35)' },
                          }}
                        />
                      </Grid>

                      {/* Submit */}
                      <Grid item xs={12}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2.5, flexWrap: 'wrap' }}>
                          <Chip
                            label="Free Cancellation"
                            size="small"
                            variant="outlined"
                            sx={{
                              borderColor: T.green,
                              color: T.green,
                              fontWeight: 600,
                              fontSize: '0.68rem',
                              borderRadius: '6px',
                              height: 22,
                            }}
                          />
                          <Chip
                            label="Instant Confirmation"
                            size="small"
                            variant="outlined"
                            sx={{
                              borderColor: T.terracotta,
                              color: T.terracottaLight,
                              fontWeight: 600,
                              fontSize: '0.68rem',
                              borderRadius: '6px',
                              height: 22,
                            }}
                          />
                        </Box>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          sx={{
                            bgcolor: T.terracotta,
                            color: T.cream,
                            fontWeight: 700,
                            px: 6,
                            py: 1.5,
                            fontSize: '1rem',
                            borderRadius: '50px',
                            '&:hover': { bgcolor: '#B8603D' },
                          }}
                        >
                          Confirm Reservation
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── Success Snackbar ── */}
      <Snackbar
        open={submitted}
        autoHideDuration={6000}
        onClose={() => setSubmitted(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          severity="success"
          variant="filled"
          onClose={() => setSubmitted(false)}
          sx={{
            borderRadius: '50px',
            bgcolor: T.greenDeep,
            color: T.cream,
            fontWeight: 600,
            '& .MuiAlert-icon': { color: T.green },
          }}
        >
          🎉 Reservation confirmed! Check your email for details. See you soon!
        </Alert>
      </Snackbar>
    </Box>
  );
}