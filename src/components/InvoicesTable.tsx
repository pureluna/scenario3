import { useEffect, useState } from 'react';
import { getInvoices } from '../services/api';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  CircularProgress,
  Alert,
  Chip,
  TextField,
  MenuItem,
  Box,
  Typography,
} from '@mui/material';

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'approved':
      return 'success';
    case 'pending':
      return 'warning';
    case 'rejected':
    case 'unpaid':
      return 'error';
    case 'paid':
      return 'info';
    default:
      return 'default';
  }
};

interface Invoice {
  id: number;
  vendor: string;
  amount: number;
  date: string;
  status: string;
}

export const InvoiceTable = () => {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [filtered, setFiltered] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [statusFilter, setStatusFilter] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [minAmount, setMinAmount] = useState('');
  const [maxAmount, setMaxAmount] = useState('');

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const res = await getInvoices();
        setInvoices(res.data as Invoice[]);
        setFiltered(res.data as Invoice[]);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchInvoices();
  }, []);

  useEffect(() => {
    let data = [...invoices];
    if (statusFilter) {
      data = data.filter((inv) => inv.status === statusFilter);
    }
    if (searchTerm) {
      data = data.filter((inv) =>
        inv.vendor.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (minAmount) {
      data = data.filter((inv) => inv.amount >= parseFloat(minAmount));
    }
    if (maxAmount) {
      data = data.filter((inv) => inv.amount <= parseFloat(maxAmount));
    }
    setFiltered(data);
  }, [statusFilter, searchTerm, minAmount, maxAmount, invoices]);

  const totalAmount = filtered.reduce((sum, inv: any) => sum + inv.amount, 0);

  if (loading) return <CircularProgress sx={{ display: 'block', mx: 'auto', mt: 4 }} />;
  if (error) return <Alert severity="error">{error}</Alert>;

  return (
    <>
      <Box sx={{ display: 'flex', gap: 2, mb: 2, flexWrap: 'wrap' }}>
        <TextField
          label="Search Vendor"
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <TextField
          label="Filter by Status"
          variant="outlined"
          size="small"
          select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Approved">Approved</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Paid">Paid</MenuItem>
          <MenuItem value="Unpaid">Unpaid</MenuItem>
        </TextField>
        <TextField
          label="Min Amount"
          variant="outlined"
          size="small"
          type="number"
          value={minAmount}
          onChange={(e) => setMinAmount(e.target.value)}
        />
        <TextField
          label="Max Amount"
          variant="outlined"
          size="small"
          type="number"
          value={maxAmount}
          onChange={(e) => setMaxAmount(e.target.value)}
        />
      </Box>
      <Typography variant="subtitle2" sx={{ mb: 1 }}>Total Invoices: {filtered.length} | Total Amount: ${totalAmount.toFixed(2)}</Typography>
      <TableContainer component={Paper} sx={{ background: 'var(--color-soft)', borderRadius: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Vendor</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filtered.map((invoice: any) => (
              <TableRow key={invoice.id}>
                <TableCell>{invoice.id}</TableCell>
                <TableCell>{invoice.vendor}</TableCell>
                <TableCell>${invoice.amount.toFixed(2)}</TableCell>
                <TableCell>{invoice.date}</TableCell>
                <TableCell>
                  <Chip
                    label={invoice.status}
                    color={getStatusColor(invoice.status) as any}
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};