import { Box, Container, Typography, TextField, Button, Grid } from '@mui/material';
import { WebsiteHeader } from '../components/WebsiteHeader';
import { WebsiteFooter } from '../components/WebsiteFooter';

export const ContactPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        background: 'var(--color-base)',
      }}
    >
      <WebsiteHeader />
      <Box component="main" sx={{ flexGrow: 1 }}>
        {/* Hero Section */}
        <Box
          sx={{
            bgcolor: 'var(--color-highlight)',
            color: 'var(--color-text-main)',
            py: 8,
          }}
        >
          <Container maxWidth="lg">
            <Typography
              variant="h1"
              component="h1"
              align="center"
              gutterBottom
              sx={{
                fontFamily: 'var(--font-title)',
                fontWeight: 800,
                fontSize: { xs: '2rem', md: '3rem' },
                color: 'var(--color-primary)',
              }}
            >
              Contact Us
            </Typography>
            <Typography
              variant="h5"
              align="center"
              sx={{
                fontFamily: 'var(--font-subtitle)',
                color: 'var(--color-accent)',
                maxWidth: '800px',
                mx: 'auto',
              }}
            >
              Get in touch with our team for any questions or support
            </Typography>
          </Container>
        </Box>

        {/* Contact Form Section */}
        <Container maxWidth="md" sx={{ py: 8 }}>
          <Box
            sx={{
              bgcolor: 'var(--color-soft)',
              p: 4,
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h4"
                  component="h2"
                  gutterBottom
                  sx={{
                    fontFamily: 'var(--font-heading)',
                    color: 'var(--color-primary)',
                    fontWeight: 700,
                  }}
                >
                  Send us a Message
                </Typography>
                <Typography
                  paragraph
                  sx={{
                    fontFamily: 'var(--font-body)',
                    color: 'var(--color-accent)',
                  }}
                >
                  Fill out the form and we'll get back to you as soon as possible.
                </Typography>
                <Box sx={{ mt: 4 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: 'var(--font-heading)',
                      color: 'var(--color-primary)',
                      mb: 2,
                    }}
                  >
                    Contact Information
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-body)',
                      color: 'var(--color-accent)',
                      mb: 1,
                    }}
                  >
                    Email: info@ngofms.com
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: 'var(--font-body)',
                      color: 'var(--color-accent)',
                    }}
                  >
                    Phone: +1 (555) 123-4567
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <form>
                  <TextField
                    fullWidth
                    label="Name"
                    variant="outlined"
                    margin="normal"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'var(--color-primary)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'var(--color-secondary)',
                        },
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    type="email"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'var(--color-primary)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'var(--color-secondary)',
                        },
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    label="Message"
                    variant="outlined"
                    margin="normal"
                    multiline
                    rows={4}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: 'var(--color-primary)',
                        },
                        '&:hover fieldset': {
                          borderColor: 'var(--color-secondary)',
                        },
                      },
                    }}
                  />
                  <Button
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{
                      mt: 3,
                      background: 'var(--color-primary)',
                      color: 'var(--color-primary-contrast)',
                      fontFamily: 'var(--font-body)',
                      fontWeight: 700,
                      textTransform: 'none',
                      fontSize: '1.1rem',
                      '&:hover': {
                        background: 'var(--color-secondary)',
                        color: 'var(--color-primary-contrast)',
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </form>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      <WebsiteFooter />
    </Box>
  );
}; 