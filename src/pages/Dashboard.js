import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <p>Welcome to the dashboard!</p>
            <div className="dashboard-links">
                <Link to="/order-management" className="dashboard-link">Order Management</Link>
                <Link to="/product-management" className="dashboard-link">Product Management</Link>
                <Link to="/reports" className="dashboard-link">Reports</Link>
                <Link to="/stock-management" className="dashboard-link">Stock Management</Link>
                <Link to="/supplier-management" className="dashboard-link">Supplier Management</Link>
            </div>
        </div>
    );
};

export default Dashboard;
