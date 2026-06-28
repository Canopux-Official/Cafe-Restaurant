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
  Paper,
} from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

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
  { emoji: '🎂', title: 'Birthday Surprise', desc: 'Let us know if it\'s a birthday — we\'ll arrange a special surprise dessert.' },
  { emoji: '🌹', title: 'Table Decoration', desc: 'We can arrange floral arrangements and candles for romantic occasions.' },
  { emoji: '📸', title: 'Polaroid Moment', desc: 'Ask our team for a complimentary Polaroid photo for special milestones.' },
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
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: 'No Special Occasion',
    requests: '',
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
        date: '', time: '', guests: '2', occasion: 'No Special Occasion', requests: '',
      });
    }
  };

  const today = new Date().toISOString().split('T')[0];

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
          <Typography sx={{ fontSize: '3.5rem', mb: 1 }}>🕯️</Typography>
          <Typography variant="overline" sx={{ color: 'secondary.light', letterSpacing: '4px', fontWeight: 700 }}>
            Reservations
          </Typography>
          <Typography variant="h2" sx={{ color: '#FFF8F0', fontSize: { xs: '2.2rem', md: '3rem' }, mt: 1, mb: 2 }}>
            Reserve Your Perfect Table
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,248,240,0.75)', maxWidth: 500, mx: 'auto', lineHeight: 1.8 }}>
            Book a table and let us create a memorable dining experience just for you. Walk-ins are always welcome, but reservations are preferred.
          </Typography>
        </Container>
        <Box sx={{ position: 'absolute', bottom: -2, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 50" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: 50 }}>
            <path d="M0,50 C360,0 1080,0 1440,50 L1440,50 L0,50 Z" fill="#FFF8F0" />
          </svg>
        </Box>
      </Box>

      <Container maxWidth="xl" sx={{ py: { xs: 6, md: 9 } }}>
        <Grid container spacing={5}>
          {/* Left: Perks */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: 700 }}>Why Reserve With Us?</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Guests who reserve enjoy exclusive benefits unavailable to walk-ins.
            </Typography>
            <Stack spacing={2} sx={{ mb: 4 }}>
              {perks.map((p) => (
                <Paper
                  key={p.title}
                  elevation={0}
                  sx={{ p: 2, border: '1px solid', borderColor: 'rgba(200,148,58,0.25)', borderRadius: 3, bgcolor: 'rgba(200,148,58,0.04)' }}
                >
                  <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                    <Typography sx={{ fontSize: '1.6rem', flexShrink: 0 }}>{p.emoji}</Typography>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.3 }}>{p.title}</Typography>
                      <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 1.6 }}>{p.desc}</Typography>
                    </Box>
                  </Box>
                </Paper>
              ))}
            </Stack>

            <Divider sx={{ mb: 3 }} />
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5 }}>Reservation Policy</Typography>
            <Stack spacing={1}>
              {[
                'Reservations are held for 15 minutes past booking time.',
                'Cancellations must be made 2 hours in advance.',
                'For groups of 10+, please call us directly.',
                'Walk-ins are welcome subject to availability.',
              ].map((policy) => (
                <Box key={policy} sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                  <CheckCircleIcon sx={{ fontSize: 16, color: 'secondary.main', mt: 0.3, flexShrink: 0 }} />
                  <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 1.6 }}>{policy}</Typography>
                </Box>
              ))}
            </Stack>
          </Grid>

          {/* Right: Reservation Form */}
          <Grid item xs={12} md={8}>
            <Card sx={{ border: '1px solid', borderColor: 'rgba(74,44,42,0.08)', p: { xs: 1, md: 2 } }}>
              <CardContent sx={{ p: { xs: 2, md: 4 } }}>
                <Typography variant="h5" sx={{ mb: 0.5, fontWeight: 700 }}>Book a Table</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  We'll confirm your reservation via email within 30 minutes.
                </Typography>

                <Box component="form" onSubmit={handleSubmit} noValidate>
                  <Grid container spacing={2.5}>
                    {/* Guest Count selector */}
                    <Grid item xs={12}>
                      <Typography variant="subtitle2" sx={{ mb: 1.5, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 1 }}>
                        <PeopleIcon sx={{ fontSize: 18, color: 'secondary.main' }} /> Number of Guests
                      </Typography>
                      <ToggleButtonGroup
                        value={form.guests}
                        exclusive
                        onChange={(_, val) => val && setForm((p) => ({ ...p, guests: val }))}
                        sx={{
                          flexWrap: 'wrap',
                          gap: 0.5,
                          '& .MuiToggleButton-root': {
                            borderRadius: '50px !important',
                            border: '1px solid !important',
                            borderColor: 'rgba(74,44,42,0.2) !important',
                            px: 2, py: 0.6,
                            textTransform: 'none',
                            fontWeight: 600,
                            '&.Mui-selected': {
                              bgcolor: 'primary.main !important',
                              color: 'primary.contrastText !important',
                              borderColor: 'primary.main !important',
                            },
                          },
                        }}
                      >
                        {['1', '2', '3', '4', '5', '6', '7', '8'].map((n) => (
                          <ToggleButton key={n} value={n}>{n} {parseInt(n) === 1 ? 'Guest' : 'Guests'}</ToggleButton>
                        ))}
                      </ToggleButtonGroup>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Date"
                        type="date"
                        value={form.date}
                        onChange={handleChange('date')}
                        error={!!errors.date}
                        helperText={errors.date}
                        InputLabelProps={{ shrink: true }}
                        inputProps={{ min: today }}
                        required
                        InputProps={{ startAdornment: <EventIcon sx={{ mr: 1, color: 'text.secondary', fontSize: 20 }} /> }}
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth error={!!errors.time} required>
                        <InputLabel>Preferred Time</InputLabel>
                        <Select
                          value={form.time}
                          label="Preferred Time"
                          onChange={handleChange('time')}
                          startAdornment={<AccessTimeIcon sx={{ mr: 1, color: 'text.secondary', fontSize: 20 }} />}
                        >
                          <MenuItem value="" disabled><em>Select a time slot</em></MenuItem>
                          {timeSlots.map((t) => <MenuItem key={t} value={t}>{t}</MenuItem>)}
                        </Select>
                        {errors.time && <Typography variant="caption" color="error" sx={{ mt: 0.5, ml: 1.5 }}>{errors.time}</Typography>}
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="First Name"
                        value={form.firstName}
                        onChange={handleChange('firstName')}
                        error={!!errors.firstName}
                        helperText={errors.firstName}
                        required
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Last Name"
                        value={form.lastName}
                        onChange={handleChange('lastName')}
                        error={!!errors.lastName}
                        helperText={errors.lastName}
                        required
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email Address"
                        type="email"
                        value={form.email}
                        onChange={handleChange('email')}
                        error={!!errors.email}
                        helperText={errors.email}
                        required
                      />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Phone Number"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange('phone')}
                        error={!!errors.phone}
                        helperText={errors.phone}
                        required
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <FormControl fullWidth>
                        <InputLabel>Special Occasion</InputLabel>
                        <Select
                          value={form.occasion}
                          label="Special Occasion"
                          onChange={handleChange('occasion')}
                        >
                          {occasions.map((o) => <MenuItem key={o} value={o}>{o}</MenuItem>)}
                        </Select>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Special Requests (optional)"
                        multiline
                        rows={3}
                        value={form.requests}
                        onChange={handleChange('requests')}
                        placeholder="Allergies, dietary restrictions, accessibility needs, seating preferences..."
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                        <Chip label="Free Cancellation" size="small" color="success" variant="outlined" sx={{ fontWeight: 600 }} />
                        <Chip label="Instant Confirmation" size="small" color="primary" variant="outlined" sx={{ fontWeight: 600 }} />
                      </Box>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        sx={{ fontWeight: 700, px: 6, py: 1.5, fontSize: '1rem' }}
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

      <Snackbar
        open={submitted}
        autoHideDuration={6000}
        onClose={() => setSubmitted(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" variant="filled" onClose={() => setSubmitted(false)} sx={{ borderRadius: 2 }}>
          🎉 Reservation confirmed! Check your email for details. See you soon!
        </Alert>
      </Snackbar>
    </Box>
  );
}
