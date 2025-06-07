import { useState } from 'react';
import {
  TextField,
  Button,
  MenuItem,
  Paper,
  Alert,
  Box
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { DashboardLayout } from '../components/DashboardLayout';
import { createInvoice } from '../services/api'; // 🔥 Import mock API

const statusOptions = ['Pending', 'Approved', 'Paid'];

export const AddInvoicePage = () => {
  const [vendor, setVendor] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [status, setStatus] = useState('Pending');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!vendor || !amount || isNaN(Number(amount))) {
      setError('Please fill in all fields with valid data.');
      return;
    }

    try {
      await createInvoice({ vendor, amount: parseFloat(amount) });
      setSuccess(true);
      setTimeout(() => navigate('/invoices'), 1200);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    }
  };

  return (
    <DashboardLayout title="Add Invoice">
      <Paper sx={{ maxWidth: 480, mx: 'auto', p: 4, background: 'var(--color-soft)', borderRadius: 2 }}>
        <h2 style={{ fontFamily: 'var(--font-title)', color: 'var(--color-primary)', marginTop: 0 }}>Add Invoice</h2>
        {success && <Alert severity="success" sx={{ mb: 2 }}>Invoice added successfully!</Alert>}
        {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
        <form onSubmit={handleSubmit} autoComplete="off">
          <TextField
            label="Vendor"
            value={vendor}
            onChange={e => setVendor(e.target.value)}
            fullWidth
            required
            sx={{ mb: 2 }}
            inputProps={{ style: { fontFamily: 'var(--font-body)' } }}
          />
          <TextField
            label="Amount"
            value={amount}
            onChange={e => setAmount(e.target.value.replace(/[^0-9.]/g, ''))}
            fullWidth
            required
            sx={{ mb: 2 }}
            inputProps={{ style: { fontFamily: 'var(--font-body)' }, inputMode: 'decimal' }}
          />
          <TextField
            label="Date"
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            fullWidth
            sx={{ mb: 2 }}
            InputLabelProps={{ shrink: true }}
            inputProps={{ style: { fontFamily: 'var(--font-body)' } }}
          />
          <TextField
            label="Status"
            select
            value={status}
            onChange={e => setStatus(e.target.value)}
            fullWidth
            sx={{ mb: 3 }}
            inputProps={{ style: { fontFamily: 'var(--font-body)' } }}
          >
            {statusOptions.map(option => (
              <MenuItem key={option} value={option} style={{ fontFamily: 'var(--font-body)' }}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                background: 'var(--color-primary)',
                color: 'var(--color-primary-contrast)',
                fontFamily: 'var(--font-body)',
                '&:hover': { background: 'var(--color-secondary)' },
              }}
            >
              Add Invoice
            </Button>
          </Box>
        </form>
      </Paper>
    </DashboardLayout>
  );
};
