import React from 'react';
import { DashboardLayout } from '../components/DashboardLayout';
import { Paper, Typography } from '@mui/material';

export const SettingsPage = () => {
  return (
    <DashboardLayout title="Settings">
      <Paper sx={{ maxWidth: 480, p: 4, mx: 'auto' }}>
        <Typography variant="h5" gutterBottom>User Settings</Typography>
        <Typography>Settings page content goes here.</Typography>
      </Paper>
    </DashboardLayout>
  );
};
