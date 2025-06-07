import { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';

const pages = [
  { title: 'Home', path: '/home' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
];

export const WebsiteHeader = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography
        variant="h6"
        component={RouterLink}
        to="/"
        sx={{
          my: 2,
          display: 'block',
          fontFamily: 'var(--font-title)',
          color: 'var(--color-primary)',
          textDecoration: 'none',
          fontWeight: 700,
        }}
      >
        NGO FMS
      </Typography>
      <List>
        {pages.map((page) => (
          <ListItem
            key={page.title}
            component={RouterLink}
            to={page.path}
            sx={{
              color: 'var(--color-text-main)',
              '&:hover': {
                color: 'var(--color-primary)',
                background: 'var(--color-soft)',
              },
            }}
          >
            <ListItemText
              primary={page.title}
              sx={{
                fontFamily: 'var(--font-body)',
                textAlign: 'center',
              }}
            />
          </ListItem>
        ))}
        <ListItem
          component={RouterLink}
          to="/login"
          sx={{
            color: 'var(--color-primary)',
            '&:hover': {
              color: 'var(--color-secondary)',
              background: 'var(--color-soft)',
            },
          }}
        >
          <ListItemText
            primary="Login"
            sx={{
              fontFamily: 'var(--font-body)',
              textAlign: 'center',
              fontWeight: 700,
            }}
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar
      position="static"
      sx={{
        background: 'var(--color-soft)',
        boxShadow: 'none',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo for desktop */}
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'var(--font-title)',
              fontWeight: 700,
              color: 'var(--color-primary)',
              textDecoration: 'none',
            }}
          >
            NGO FMS
          </Typography>

          {/* Mobile menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleDrawerToggle}
              color="inherit"
              sx={{ color: 'var(--color-text-main)' }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              variant="temporary"
              anchor="left"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true,
              }}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiDrawer-paper': {
                  boxSizing: 'border-box',
                  width: 240,
                  background: 'var(--color-soft)',
                },
              }}
            >
              {drawer}
            </Drawer>
          </Box>

          {/* Logo for mobile */}
          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'var(--font-title)',
              fontWeight: 700,
              color: 'var(--color-primary)',
              textDecoration: 'none',
            }}
          >
            NGO FMS
          </Typography>

          {/* Desktop menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                component={RouterLink}
                to={page.path}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: 'var(--color-text-main)',
                  display: 'block',
                  fontFamily: 'var(--font-body)',
                  '&:hover': {
                    color: 'var(--color-primary)',
                  },
                }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          {/* Login button */}
          <Box sx={{ flexGrow: 0 }}>
            <Button
              component={RouterLink}
              to="/login"
              variant="contained"
              sx={{
                background: 'var(--color-primary)',
                color: 'var(--color-primary-contrast)',
                fontFamily: 'var(--font-body)',
                fontWeight: 700,
                textTransform: 'none',
                '&:hover': {
                  background: 'var(--color-secondary)',
                  color: 'var(--color-primary-contrast)',
                },
              }}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}; 