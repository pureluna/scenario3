import { Box, Container, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const WebsiteFooter = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: 'var(--color-primary)',
        color: 'var(--color-primary-contrast)',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(3, 1fr)',
            },
            gap: 4,
          }}
        >
          <Box>
            <Typography variant="h6" gutterBottom sx={{ fontFamily: 'var(--font-title)', fontWeight: 800 }}>
              NGO Financial Management System
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: 'var(--font-body)' }}>
              Empowering NGOs with efficient financial management solutions.
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom sx={{ fontFamily: 'var(--font-section-header)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Quick Links
            </Typography>
            <Link component={RouterLink} to="/home" color="inherit" display="block" sx={{ mb: 1, fontFamily: 'var(--font-body)' }}>
              Home
            </Link>
            <Link component={RouterLink} to="/about" color="inherit" display="block" sx={{ mb: 1, fontFamily: 'var(--font-body)' }}>
              About
            </Link>
            <Link component={RouterLink} to="/contact" color="inherit" display="block" sx={{ mb: 1, fontFamily: 'var(--font-body)' }}>
              Contact
            </Link>
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom sx={{ fontFamily: 'var(--font-section-header)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Contact Us
            </Typography>
            <Typography variant="body2" paragraph sx={{ fontFamily: 'var(--font-body)' }}>
              Email: info@ngofms.com
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: 'var(--font-body)' }}>
              Phone: +1 (555) 123-4567
            </Typography>
          </Box>
        </Box>
        <Box sx={{ mt: 3, pt: 3, borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
          <Typography variant="body2" align="center" sx={{ fontFamily: 'var(--font-caption)' }}>
            © {new Date().getFullYear()} NGO Financial Management System. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}; 