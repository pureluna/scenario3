import { useState, useEffect } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  CircularProgress,
  Alert,
  Button
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import { DashboardLayout } from '../components/DashboardLayout';

const mockAccounts = [
  { id: 1, name: 'General Fund', type: 'Asset', balance: 5000, status: 'Active' },
  { id: 2, name: 'Grants Payable', type: 'Liability', balance: 1200, status: 'Active' },
  { id: 3, name: 'Donations', type: 'Income', balance: 3000, status: 'Inactive' },
];

export const AccountsPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [accounts, setAccounts] = useState(mockAccounts);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setAccounts(mockAccounts);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <DashboardLayout title="Accounts">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
        <h1 style={{ fontFamily: 'var(--font-title)', color: 'var(--color-primary)', margin: 0 }}>Accounts</h1>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            background: 'var(--color-primary)',
            color: 'var(--color-primary-contrast)',
            fontFamily: 'var(--font-body)',
            '&:hover': { background: 'var(--color-secondary)' },
          }}
          onClick={() => navigate('/accounts/new')}
        >
          Add Account
        </Button>
      </div>
      {error && (
        <Alert severity="error" sx={{ mb: 2, fontFamily: 'var(--font-body)' }}>{error}</Alert>
      )}
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', padding: 32 }}>
          <CircularProgress sx={{ color: 'var(--color-primary)' }} />
        </div>
      ) : (
        <TableContainer component={Paper} sx={{ background: 'var(--color-soft)', borderRadius: 2, boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>Account Name</TableCell>
                <TableCell sx={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>Type</TableCell>
                <TableCell sx={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>Balance</TableCell>
                <TableCell sx={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {accounts.map((account) => (
                <TableRow key={account.id} sx={{ '&:hover': { background: 'var(--color-highlight)' } }}>
                  <TableCell sx={{ fontFamily: 'var(--font-body)' }}>{account.name}</TableCell>
                  <TableCell sx={{ fontFamily: 'var(--font-body)' }}>{account.type}</TableCell>
                  <TableCell sx={{ fontFamily: 'var(--font-body)' }}>${account.balance}</TableCell>
                  <TableCell sx={{ fontFamily: 'var(--font-body)' }}>{account.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </DashboardLayout>
  );
}; 