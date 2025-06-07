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

const mockReports = [
  { id: 1, name: 'Monthly Financials', period: 'Mar 2024', created: '2024-03-31', status: 'Ready' },
  { id: 2, name: 'Donor Report', period: 'Q1 2024', created: '2024-04-01', status: 'Ready' },
  { id: 3, name: 'Expense Summary', period: 'Mar 2024', created: '2024-03-30', status: 'Draft' },
];

export const ReportsPage = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [reports, setReports] = useState(mockReports);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 1000));
        setReports(mockReports);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch data');
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <DashboardLayout title="Reports">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
        <h1 style={{ fontFamily: 'var(--font-title)', color: 'var(--color-primary)', margin: 0 }}>Reports</h1>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            background: 'var(--color-primary)',
            color: 'var(--color-primary-contrast)',
            fontFamily: 'var(--font-body)',
            '&:hover': { background: 'var(--color-secondary)' },
          }}
          onClick={() => navigate('/reports/new')}
        >
          Generate Report
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
                <TableCell sx={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>Report Name</TableCell>
                <TableCell sx={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>Period</TableCell>
                <TableCell sx={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>Created</TableCell>
                <TableCell sx={{ fontFamily: 'var(--font-heading)', color: 'var(--color-primary)' }}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reports.map((report) => (
                <TableRow key={report.id} sx={{ '&:hover': { background: 'var(--color-highlight)' } }}>
                  <TableCell sx={{ fontFamily: 'var(--font-body)' }}>{report.name}</TableCell>
                  <TableCell sx={{ fontFamily: 'var(--font-body)' }}>{report.period}</TableCell>
                  <TableCell sx={{ fontFamily: 'var(--font-body)' }}>{report.created}</TableCell>
                  <TableCell sx={{ fontFamily: 'var(--font-body)' }}>{report.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </DashboardLayout>
  );
}; 