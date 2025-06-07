import { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Paper,
  Typography,
  Alert,
  CircularProgress,
} from '@mui/material';
import { createInvoice } from '../services/api';

interface CreateInvoiceFormProps {
  onSuccess: () => void;
}

export const CreateInvoiceForm: React.FC<CreateInvoiceFormProps> = ({ onSuccess }) => {
  const [vendor, setVendor] = useState('');
  const [amount, setAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    setIsLoading(true);

    try {
      await createInvoice({
        vendor,
        amount: parseFloat(amount),
      });
      
      // Clear form
      setVendor('');
      setAmount('');
      setSuccess(true);
      
      // Notify parent to refresh data
      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create invoice');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Paper sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Create New Invoice
      </Typography>

      <Box component="form" onSubmit={handleSubmit}>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            Invoice created successfully!
          </Alert>
        )}

        <TextField
          fullWidth
          label="Vendor Name"
          value={vendor}
          onChange={(e) => setVendor(e.target.value)}
          margin="normal"
          required
          disabled={isLoading}
        />

        <TextField
          fullWidth
          label="Amount"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          margin="normal"
          required
          disabled={isLoading}
          inputProps={{
            step: '0.01',
            min: '0',
          }}
        />

        <Button
          type="submit"
          variant="contained"
          disabled={isLoading}
          sx={{ mt: 2 }}
        >
          {isLoading ? <CircularProgress size={24} /> : 'Create Invoice'}
        </Button>
      </Box>
    </Paper>
  );
}; 