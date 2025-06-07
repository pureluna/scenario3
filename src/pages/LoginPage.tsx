import { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Paper, Link, Alert } from '@mui/material';
import { WebsiteHeader } from '../components/WebsiteHeader';
import { WebsiteFooter } from '../components/WebsiteFooter';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/api'; // ✅ Imported mock API login

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false); // Optional: loading state
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const response = await login(email, password); // ✅ Use mock login
      localStorage.setItem('token', response.token); // ✅ Save token
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

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
      <Box component="main" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', py: 8 }}>
        <Container maxWidth="sm">
          <Paper
            elevation={3}
            sx={{
              p: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: 'var(--color-soft)',
              borderRadius: 2,
            }}
          >
            <Typography
              component="h1"
              variant="h4"
              sx={{
                fontFamily: 'var(--font-title)',
                color: 'var(--color-primary)',
                fontWeight: 700,
                mb: 3,
              }}
            >
              Welcome Back
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: 'var(--font-body)',
                color: 'var(--color-accent)',
                mb: 4,
                textAlign: 'center',
              }}
            >
              Sign in to access your NGO Financial Management System
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ width: '100%' }}>
              {error && (
                <Alert severity="error" sx={{ mb: 2 }}>
                  {error}
                </Alert>
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                type="submit"
                fullWidth
                variant="contained"
                disabled={loading} // ✅ Show loading state
                sx={{
                  mt: 3,
                  mb: 2,
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
                {loading ? 'Signing In...' : 'Sign In'}
              </Button>
              <Box sx={{ textAlign: 'center' }}>
                <Link
                  href="#"
                  variant="body2"
                  sx={{
                    color: 'var(--color-primary)',
                    textDecoration: 'none',
                    '&:hover': {
                      color: 'var(--color-secondary)',
                      textDecoration: 'underline',
                    },
                  }}
                >
                  Forgot password?
                </Link>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>
      <WebsiteFooter />
    </Box>
  );
};