import { DashboardLayout } from '../components/DashboardLayout';
import { InvoiceTable } from '../components/InvoicesTable';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

export const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout title="Dashboard">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
        <h1 style={{ fontFamily: 'var(--font-title)', color: 'var(--color-primary)', margin: 0 }}>Recent Invoices</h1>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            background: 'var(--color-primary)',
            color: 'var(--color-primary-contrast)',
            fontFamily: 'var(--font-body)',
            '&:hover': { background: 'var(--color-secondary)' },
          }}
          onClick={() => navigate('/invoices/new')}
        >
          New Invoice
        </Button>
      </div>
      <InvoiceTable />
    </DashboardLayout>
  );
};