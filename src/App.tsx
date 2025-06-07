import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { LoginPage } from './pages/LoginPage';
import { WebsitePage } from './pages/WebsitePage';
import { DashboardPage } from './pages/DashboardPage';
import { InvoicesPage } from './pages/InvoicesPage';
import { AccountsPage } from './pages/AccountsPage';
import { ReportsPage } from './pages/ReportsPage';
import { AddInvoicePage } from './pages/AddInvoicePage';

// New imports for the added pages
import { SettingsPage } from './pages/SettingsPage';
import { UserProfilePage } from './pages/UserProfilePage';
import { NotFoundPage } from './pages/NotFoundPage';

// Protected Route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

const AddAccountPage = () => (
  <div style={{ padding: 32, fontFamily: 'var(--font-title)', color: 'var(--color-primary)' }}>
    <h2>Add Account</h2>
    <p>This is a placeholder for the Add Account form.</p>
  </div>
);

const GenerateReportPage = () => (
  <div style={{ padding: 32, fontFamily: 'var(--font-title)', color: 'var(--color-primary)' }}>
    <h2>Generate Report</h2>
    <p>This is a placeholder for the Generate Report form.</p>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WebsitePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route path="/invoices" element={<InvoicesPage />} />
        <Route path="/invoices/new" element={<AddInvoicePage />} />
        <Route path="/accounts" element={<AccountsPage />} />
        <Route path="/accounts/new" element={<AddAccountPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/reports/new" element={<GenerateReportPage />} />

        {/* New routes */}
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={<UserProfilePage />} />

        {/* Catch-all route for 404 Not Found */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;