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
  Alert,
  Snackbar,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Divider,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SendIcon from '@mui/icons-material/Send';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

// ── Design tokens (matches Gallery / Menu / About) ─────────────────────────
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
  '& .MuiSelect-select': { color: T.cream },
};

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1521017432531-fbd92d768814?w=1800&q=85&auto=format&fit=crop';

const contactInfo = [
  {
    icon: <LocationOnIcon sx={{ color: T.terracottaLight, fontSize: 26 }} />,
    title: 'Visit Us',
    lines: ['12, Café Street, Bandra West,', 'Mumbai, Maharashtra 400050'],
    href: 'https://maps.google.com',
    linkLabel: 'Get Directions →',
  },
  {
    icon: <PhoneIcon sx={{ color: T.terracottaLight, fontSize: 26 }} />,
    title: 'Call Us',
    lines: ['+91 22 1234 5678', '+91 98765 43210'],
    href: 'tel:+912212345678',
    linkLabel: 'Call Now →',
  },
  {
    icon: <EmailIcon sx={{ color: T.terracottaLight, fontSize: 26 }} />,
    title: 'Email Us',
    lines: ['hello@apnaadda.in', 'events@apnaadda.in'],
    href: 'mailto:hello@apnaadda.in',
    linkLabel: 'Send Email →',
  },
  {
    icon: <AccessTimeIcon sx={{ color: T.terracottaLight, fontSize: 26 }} />,
    title: 'Opening Hours',
    lines: ['Mon–Fri: 7:30 AM – 10:00 PM', 'Sat: 8:00 AM – 11:00 PM', 'Sun: 9:00 AM – 9:00 PM'],
  },
];

const subjects = [
  'General Enquiry',
  'Table Reservation',
  'Private Event Booking',
  'Catering Services',
  'Feedback or Complaint',
  'Media & Press',
  'Other',
];

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    firstName: '', lastName: '', email: '', phone: '', subject: '', message: '',
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Partial<FormData> = {};
    if (!form.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!form.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Enter a valid email';
    if (!form.subject) newErrors.subject = 'Please select a subject';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    else if (form.message.trim().length < 20) newErrors.message = 'Message must be at least 20 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange =
    (field: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
      if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setForm({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
    }
  };

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
            Contact Us
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
            We'd Love to{' '}
            <Box component="span" sx={{ color: T.terracottaLight, fontStyle: 'italic' }}>
              Hear from You
            </Box>
          </Typography>
          <Typography sx={{ color: T.creamMid, maxWidth: 500, mx: 'auto', lineHeight: 1.85 }}>
            Whether it's a reservation, a private event, or just a hello — our team is always
            happy to help.
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

            {/* ── Left: Info + Social ── */}
            <Grid item xs={12} md={4}>
              <Typography
                variant="h5"
                sx={{ mb: 3, fontWeight: 700, color: T.cream }}
              >
                Get in Touch
              </Typography>

              <Stack spacing={2} sx={{ mb: 4 }}>
                {contactInfo.map((info) => (
                  <Card
                    key={info.title}
                    sx={{
                      bgcolor: T.creamFaint,
                      border: `1px solid ${T.border}`,
                      borderRadius: '14px',
                      boxShadow: 'none',
                      transition: 'border-color 0.2s ease, background-color 0.2s ease',
                      '&:hover': {
                        borderColor: T.borderSoft,
                        bgcolor: T.creamFaintHover,
                      },
                    }}
                  >
                    <CardContent sx={{ p: 2.5, '&:last-child': { pb: 2.5 } }}>
                      <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
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
                            flexShrink: 0,
                          }}
                        >
                          {info.icon}
                        </Box>
                        <Box>
                          <Typography
                            variant="subtitle2"
                            sx={{ fontWeight: 700, mb: 0.5, color: T.cream }}
                          >
                            {info.title}
                          </Typography>
                          {info.lines.map((line) => (
                            <Typography
                              key={line}
                              variant="body2"
                              sx={{ color: T.creamMid, lineHeight: 1.75 }}
                            >
                              {line}
                            </Typography>
                          ))}
                          {info.href && (
                            <Typography
                              component="a"
                              href={info.href}
                              variant="caption"
                              sx={{
                                color: T.terracottaLight,
                                fontWeight: 700,
                                mt: 0.5,
                                display: 'inline-block',
                                textDecoration: 'none',
                                '&:hover': { textDecoration: 'underline' },
                              }}
                            >
                              {info.linkLabel}
                            </Typography>
                          )}
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                ))}
              </Stack>

              <Divider sx={{ mb: 3, borderColor: T.border }} />

              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 700, mb: 2, color: T.cream }}
              >
                Follow Us
              </Typography>
              <Stack direction="row" spacing={1.5}>
                {[
                  { icon: <InstagramIcon />, label: 'Instagram', href: '#' },
                  { icon: <FacebookIcon />, label: 'Facebook', href: '#' },
                  { icon: <TwitterIcon />, label: 'Twitter', href: '#' },
                ].map((s) => (
                  <Box
                    key={s.label}
                    component="a"
                    href={s.href}
                    aria-label={s.label}
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      bgcolor: T.creamFaint,
                      border: `1px solid ${T.border}`,
                      color: T.creamMid,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        bgcolor: T.terracotta,
                        borderColor: T.terracotta,
                        color: T.cream,
                        transform: 'scale(1.1)',
                      },
                    }}
                  >
                    {s.icon}
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
                    Send Us a Message
                  </Typography>
                  <Typography sx={{ color: T.creamMid, mb: 3.5, fontSize: '0.9rem' }}>
                    Fill out the form and we'll get back to you within 24 hours.
                  </Typography>

                  <Box component="form" onSubmit={handleSubmit} noValidate>
                    <Grid container spacing={2.5}>

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
                          fullWidth label="Phone Number (optional)" type="tel"
                          value={form.phone} onChange={handleChange('phone')}
                          sx={darkInput}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <FormControl fullWidth error={!!errors.subject} required sx={darkInput}>
                          <InputLabel>Subject</InputLabel>
                          <Select
                            value={form.subject}
                            label="Subject"
                            onChange={handleChange('subject')}
                            MenuProps={{
                              PaperProps: {
                                sx: {
                                  bgcolor: T.bgMid,
                                  border: `1px solid ${T.borderSoft}`,
                                  borderRadius: '10px',
                                  '& .MuiMenuItem-root': {
                                    color: T.creamMid,
                                    '&:hover': { bgcolor: 'rgba(250,247,242,0.06)', color: T.cream },
                                    '&.Mui-selected': { bgcolor: 'rgba(196,113,74,0.15)', color: T.terracottaLight },
                                  },
                                },
                              },
                            }}
                          >
                            {subjects.map((s) => (
                              <MenuItem key={s} value={s}>{s}</MenuItem>
                            ))}
                          </Select>
                          {errors.subject && (
                            <Typography variant="caption" sx={{ color: '#FF8A80', mt: 0.5, ml: 1.5 }}>
                              {errors.subject}
                            </Typography>
                          )}
                        </FormControl>
                      </Grid>

                      <Grid item xs={12}>
                        <TextField
                          fullWidth label="Your Message" multiline rows={5}
                          value={form.message} onChange={handleChange('message')}
                          error={!!errors.message}
                          helperText={errors.message || `${form.message.length} characters`}
                          required sx={darkInput}
                        />
                      </Grid>

                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          endIcon={<SendIcon />}
                          sx={{
                            bgcolor: T.terracotta,
                            color: T.cream,
                            fontWeight: 700,
                            px: 5,
                            py: 1.5,
                            borderRadius: '50px',
                            '&:hover': { bgcolor: '#B8603D' },
                          }}
                        >
                          Send Message
                        </Button>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>

              {/* Map placeholder */}
              <Box
                sx={{
                  mt: 3,
                  height: 240,
                  borderRadius: '14px',
                  overflow: 'hidden',
                  bgcolor: T.creamFaint,
                  border: `1px solid ${T.border}`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1,
                }}
              >
                <Typography sx={{ fontSize: '2.5rem' }}>📍</Typography>
                <Typography sx={{ color: T.creamMid, fontWeight: 600 }}>
                  12, Café Street, Bandra West, Mumbai
                </Typography>
                <Button
                  href="https://maps.google.com"
                  target="_blank"
                  variant="outlined"
                  size="small"
                  sx={{
                    mt: 1,
                    borderColor: T.creamLow,
                    color: T.cream,
                    borderRadius: '50px',
                    px: 3,
                    '&:hover': {
                      borderColor: T.terracottaLight,
                      color: T.terracottaLight,
                      bgcolor: 'rgba(196,113,74,0.08)',
                    },
                  }}
                >
                  Open in Google Maps
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* ── Success Snackbar ── */}
      <Snackbar
        open={submitted}
        autoHideDuration={5000}
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
          Message sent! We'll get back to you within 24 hours. ☕
        </Alert>
      </Snackbar>
    </Box>
  );
}