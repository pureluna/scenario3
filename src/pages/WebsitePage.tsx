import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
  Button,
} from '@mui/material';
import { WebsiteHeader } from '../components/WebsiteHeader';
import { WebsiteFooter } from '../components/WebsiteFooter';

const features = [
  {
    title: 'Financial Management',
    description: "Streamline your NGO's financial operations with our comprehensive management tools.",
    image: 'https://source.unsplash.com/random/400x300?finance',
  },
  {
    title: 'Donor Management',
    description: 'Track and manage donor relationships effectively with our donor management system.',
    image: 'https://source.unsplash.com/random/400x300?donation',
  },
  {
    title: 'Reporting',
    description: 'Generate detailed reports and analytics to make informed decisions.',
    image: 'https://source.unsplash.com/random/400x300?report',
  },
];

export const WebsitePage = () => {
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
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: 4,
                alignItems: 'center',
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="h1"
                  component="h1"
                  gutterBottom
                  sx={{
                    fontFamily: 'var(--font-title)',
                    fontWeight: 800,
                    fontSize: { xs: '2rem', md: '3rem' },
                    color: 'var(--color-primary)',
                  }}
                >
                  NGO Financial Management System
                </Typography>
                <Typography
                  variant="h5"
                  paragraph
                  sx={{
                    fontFamily: 'var(--font-subtitle)',
                    color: 'var(--color-accent)',
                  }}
                >
                  Streamline your NGO's financial operations with our comprehensive management solution.
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    mt: 2,
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
                  Get Started
                </Button>
              </Box>
              <Box
                sx={{
                  flex: 1,
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Box
                  component="img"
                  src="https://source.unsplash.com/random/600x400?ngo"
                  alt="NGO Management"
                  sx={{
                    width: '100%',
                    maxWidth: 600,
                    height: 'auto',
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                />
              </Box>
            </Box>
          </Container>
        </Box>

        {/* Features Section */}
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            sx={{
              fontFamily: 'var(--font-heading)',
              color: 'var(--color-primary)',
              fontWeight: 700,
            }}
          >
            Key Features
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(3, 1fr)',
              },
              gap: 4,
              mt: 2,
            }}
          >
            {features.map((feature, index) => (
              <Card
                key={index}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.2s',
                  fontFamily: 'var(--font-body)',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={feature.image}
                  alt={feature.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h3" sx={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'var(--font-body)', color: 'var(--color-accent)' }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>

        {/* CTA Section */}
        <Box sx={{ bgcolor: 'var(--color-soft)', py: 8 }}>
          <Container maxWidth="md">
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{
                fontFamily: 'var(--font-section-header)',
                color: 'var(--color-secondary)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}
            >
              Ready to Get Started?
            </Typography>
            <Typography
              variant="body1"
              align="center"
              paragraph
              sx={{ fontFamily: 'var(--font-body)', color: 'var(--color-accent)' }}
            >
              Join hundreds of NGOs already using our platform to manage their finances effectively.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, gap: 2 }}>
              <Button
                variant="contained"
                size="large"
                sx={{
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
                Sign Up Now
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{
                  borderColor: 'var(--color-primary)',
                  color: 'var(--color-primary)',
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700,
                  textTransform: 'none',
                  fontSize: '1.1rem',
                  '&:hover': {
                    borderColor: 'var(--color-secondary)',
                    color: 'var(--color-secondary)',
                  },
                }}
              >
                Learn More
              </Button>
            </Box>
          </Container>
        </Box>
      </Box>
      <WebsiteFooter />
    </Box>
  );
}; 