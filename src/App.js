import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import EmployeeManagement from './pages/EmployeeManagement';
import CustomerManagement from './pages/CustomerManagement';
import SupplierManagement from './pages/SupplierManagement';
import OrderManagement from './pages/OrderManagement';
import ProductManagement from './pages/ProductManagement';
import StockManagement from './pages/StockManagement';
import Reports from './pages/Reports';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState(null); // 'employee' or 'customer'

  const handleLogin = (selectedRole) => {
    setRole(selectedRole);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employee-management" element={<EmployeeManagement />} />
        <Route path="/customer-management" element={<CustomerManagement />} />
        <Route path="/supplier-management" element={<SupplierManagement />} />
        <Route path="/order-management" element={<OrderManagement />} />
        <Route path="/product-management" element={<ProductManagement />} />
        <Route path="/stock-management" element={<StockManagement />} />
        <Route path="/reports" element={<Reports />} />

        {/* Redirect to login if not logged in */}
        <Route path="*" element={<Navigate to={role ? "/dashboard" : "/login"} />} />
      </Routes>
    </Router>
  );
}

export default App;
