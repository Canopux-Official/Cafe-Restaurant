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

const contactInfo = [
  {
    icon: <LocationOnIcon sx={{ color: 'secondary.main', fontSize: 28 }} />,
    title: 'Visit Us',
    lines: ['12, Café Street, Bandra West,', 'Mumbai, Maharashtra 400050'],
    href: 'https://maps.google.com',
    linkLabel: 'Get Directions →',
  },
  {
    icon: <PhoneIcon sx={{ color: 'secondary.main', fontSize: 28 }} />,
    title: 'Call Us',
    lines: ['+91 22 1234 5678', '+91 98765 43210'],
    href: 'tel:+912212345678',
    linkLabel: 'Call Now →',
  },
  {
    icon: <EmailIcon sx={{ color: 'secondary.main', fontSize: 28 }} />,
    title: 'Email Us',
    lines: ['hello@brewedandbaked.in', 'events@brewedandbaked.in'],
    href: 'mailto:hello@brewedandbaked.in',
    linkLabel: 'Send Email →',
  },
  {
    icon: <AccessTimeIcon sx={{ color: 'secondary.main', fontSize: 28 }} />,
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
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
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

  const handleChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any) => {
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
          <Typography sx={{ fontSize: '3.5rem', mb: 1 }}>💬</Typography>
          <Typography variant="overline" sx={{ color: 'secondary.light', letterSpacing: '4px', fontWeight: 700 }}>
            Contact Us
          </Typography>
          <Typography variant="h2" sx={{ color: '#FFF8F0', fontSize: { xs: '2.2rem', md: '3rem' }, mt: 1, mb: 2 }}>
            We'd Love to Hear from You
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255,248,240,0.75)', maxWidth: 500, mx: 'auto', lineHeight: 1.8 }}>
            Whether it's a reservation, a private event, or just a hello — our team is always happy to help.
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
          {/* Left: Info Cards */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ mb: 3, fontWeight: 700 }}>Get in Touch</Typography>
            <Stack spacing={2} sx={{ mb: 4 }}>
              {contactInfo.map((info) => (
                <Card key={info.title} sx={{ border: '1px solid', borderColor: 'rgba(74,44,42,0.08)' }}>
                  <CardContent sx={{ p: 2.5 }}>
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                      <Box sx={{ mt: 0.3 }}>{info.icon}</Box>
                      <Box>
                        <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5 }}>{info.title}</Typography>
                        {info.lines.map((line) => (
                          <Typography key={line} variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>{line}</Typography>
                        ))}
                        {info.href && (
                          <Typography
                            component="a"
                            href={info.href}
                            variant="caption"
                            sx={{ color: 'secondary.main', fontWeight: 700, mt: 0.5, display: 'inline-block', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
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

            <Divider sx={{ mb: 3 }} />
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>Follow Us</Typography>
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
                    bgcolor: 'primary.main',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'bgcolor 0.3s, transform 0.2s',
                    '&:hover': { bgcolor: 'secondary.main', transform: 'scale(1.1)' },
                  }}
                >
                  {s.icon}
                </Box>
              ))}
            </Stack>
          </Grid>

          {/* Right: Contact Form */}
          <Grid item xs={12} md={8}>
            <Card sx={{ border: '1px solid', borderColor: 'rgba(74,44,42,0.08)', p: { xs: 1, md: 2 } }}>
              <CardContent sx={{ p: { xs: 2, md: 4 } }}>
                <Typography variant="h5" sx={{ mb: 0.5, fontWeight: 700 }}>Send Us a Message</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  Fill out the form and we'll get back to you within 24 hours.
                </Typography>

                <Box component="form" onSubmit={handleSubmit} noValidate>
                  <Grid container spacing={2.5}>
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
                        label="Phone Number (optional)"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange('phone')}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl fullWidth error={!!errors.subject} required>
                        <InputLabel>Subject</InputLabel>
                        <Select
                          value={form.subject}
                          label="Subject"
                          onChange={handleChange('subject')}
                          sx={{ borderRadius: 2 }}
                        >
                          {subjects.map((s) => (
                            <MenuItem key={s} value={s}>{s}</MenuItem>
                          ))}
                        </Select>
                        {errors.subject && (
                          <Typography variant="caption" color="error" sx={{ mt: 0.5, ml: 1.5 }}>
                            {errors.subject}
                          </Typography>
                        )}
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Your Message"
                        multiline
                        rows={5}
                        value={form.message}
                        onChange={handleChange('message')}
                        error={!!errors.message}
                        helperText={errors.message || `${form.message.length} characters`}
                        required
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        endIcon={<SendIcon />}
                        sx={{ fontWeight: 700, px: 5, py: 1.5 }}
                      >
                        Send Message
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Map placeholder */}
        <Box
          sx={{
            mt: 6,
            height: 300,
            borderRadius: 4,
            overflow: 'hidden',
            bgcolor: 'rgba(74,44,42,0.06)',
            border: '1px solid',
            borderColor: 'rgba(74,44,42,0.12)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
          }}
        >
          <Typography sx={{ fontSize: '3rem' }}>📍</Typography>
          <Typography variant="h6" color="text.secondary">
            12, Café Street, Bandra West, Mumbai
          </Typography>
          <Button
            href="https://maps.google.com"
            target="_blank"
            variant="outlined"
            color="primary"
            size="small"
            sx={{ mt: 1 }}
          >
            Open in Google Maps
          </Button>
        </Box>
      </Container>

      {/* Success Snackbar */}
      <Snackbar
        open={submitted}
        autoHideDuration={5000}
        onClose={() => setSubmitted(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" variant="filled" onClose={() => setSubmitted(false)} sx={{ borderRadius: 2 }}>
          Message sent! We'll get back to you within 24 hours. ☕
        </Alert>
      </Snackbar>
    </Box>
  );
}
