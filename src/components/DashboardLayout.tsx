import { useState } from 'react';
import type { ReactNode } from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Button
} from '@mui/material';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AssessmentIcon from '@mui/icons-material/Assessment';
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 240;

interface DashboardLayoutProps {
  title: string;
  children: ReactNode;
}

export const DashboardLayout = ({ title, children }: DashboardLayoutProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/login');
  };

  const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
    { text: 'Invoices', icon: <ReceiptIcon />, path: '/invoices' },
    { text: 'Accounts', icon: <AccountBalanceIcon />, path: '/accounts' },
    { text: 'Reports', icon: <AssessmentIcon />, path: '/reports' },
  ];

  const drawer = (
    <Box sx={{
      width: drawerWidth,
      background: 'var(--color-soft)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <Box sx={{ p: 2 }}>
        <Typography
          variant="h6"
          sx={{
            fontFamily: 'var(--font-title)',
            color: 'var(--color-primary)',
            textAlign: 'center',
          }}
        >
          NGO FMS
        </Typography>
      </Box>
      <Divider />
      <List>
        {menuItems.map((item) => {
          const isActive = location.pathname.startsWith(item.path);
          return (
            <ListItem
              key={item.text}
              component={Link}
              to={item.path}
              sx={{
                '&:hover': {
                  background: 'var(--color-highlight)',
                },
                cursor: 'pointer',
                background: isActive ? 'var(--color-highlight)' : 'inherit',
              }}
            >
              <ListItemIcon sx={{ color: 'var(--color-primary)' }}>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{
                  '& .MuiTypography-root': {
                    fontFamily: 'var(--font-body)',
                    color: 'var(--color-text-main)',
                  },
                }}
              />
            </ListItem>
          );
        })}
      </List>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <List>
        <ListItem
          component="div"
          onClick={handleLogout}
          sx={{
            '&:hover': {
              background: 'var(--color-highlight)',
            },
            cursor: 'pointer',
          }}
        >
          <ListItemIcon sx={{ color: 'var(--color-primary)' }}>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText
            primary="Logout"
            sx={{
              '& .MuiTypography-root': {
                fontFamily: 'var(--font-body)',
                color: 'var(--color-text-main)',
              },
            }}
          />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', background: 'var(--color-base)' }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: 'var(--color-soft)',
          boxShadow: 'none',
          borderBottom: '1px solid var(--color-border)',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: 'var(--font-title)',
              color: 'var(--color-primary)',
            }}
          >
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              background: 'var(--color-soft)',
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              background: 'var(--color-soft)',
              borderRight: '1px solid var(--color-border)',
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          mt: '64px',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}; 