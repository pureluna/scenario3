import { Box, Container, Typography, Grid } from '@mui/material';
import { WebsiteHeader } from '../components/WebsiteHeader';
import { WebsiteFooter } from '../components/WebsiteFooter';

export const AboutPage = () => {
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
              About Us
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
              Empowering NGOs with innovative financial management solutions
            </Typography>
          </Container>
        </Box>

        {/* Mission Section */}
        <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
              <Typography
                variant="h3"
                component="h2"
                gutterBottom
                sx={{
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--color-primary)',
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Our Mission
              </Typography>
              <Typography
                paragraph
                sx={{
                  fontFamily: 'var(--font-body)',
                  color: 'var(--color-accent)',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                }}
              >
                We are dedicated to providing NGOs with the tools they need to manage their finances effectively, ensuring transparency and accountability in their operations. Our platform is designed to make financial management simple, secure, and efficient.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
              <Box
                component="img"
                src="https://source.unsplash.com/random/600x400?mission"
                alt="Our Mission"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  boxShadow: 3,
                  display: 'block',
                  mx: 'auto',
                }}
              />
            </Grid>
          </Grid>
        </Container>

        {/* Values Section */}
        <Box sx={{ bgcolor: 'var(--color-base)', py: { xs: 6, md: 10 } }}>
          <Container maxWidth="lg">
            <Typography
              variant="h3"
              component="h2"
              align="center"
              gutterBottom
              sx={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-primary)',
                fontWeight: 700,
                mb: 6,
              }}
            >
              Our Values
            </Typography>
            <Grid container spacing={4}>
              {[
                {
                  title: 'Transparency',
                  description: 'We believe in complete transparency in all financial operations.',
                },
                {
                  title: 'Innovation',
                  description: 'Constantly evolving our platform to meet the needs of modern NGOs.',
                },
                {
                  title: 'Security',
                  description: 'Ensuring the highest level of security for all financial data.',
                },
                {
                  title: 'Support',
                  description: 'Providing exceptional support to all our NGO partners.',
                },
              ].map((value, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Box
                    sx={{
                      p: 3,
                      height: '100%',
                      bgcolor: 'var(--color-soft)',
                      borderRadius: 2,
                      textAlign: 'center',
                      boxShadow: 1,
                    }}
                  >
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{
                        fontFamily: 'var(--font-heading)',
                        color: 'var(--color-primary)',
                        fontWeight: 700,
                      }}
                    >
                      {value.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: 'var(--font-body)',
                        color: 'var(--color-accent)',
                      }}
                    >
                      {value.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>
      <WebsiteFooter />
    </Box>
  );
}; 