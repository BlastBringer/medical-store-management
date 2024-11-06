import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <p>Welcome to the dashboard!</p>
            <video autoPlay loop muted className="background-video">
        <source src="/pills.mp4" type="video/mp4" />
        Your browser does not support the video tag.
        </video>
            <div className="dashboard-links">
                <Link to="/order-management" className="dashboard-link">Order Management</Link>
                <Link to="/product-management" className="dashboard-link">Product Management</Link>
                <Link to="/reports" className="dashboard-link">Reports</Link>
                <Link to="/stock-management" className="dashboard-link">Stock Management</Link>
                <Link to="/supplier-management" className="dashboard-link">Supplier Management</Link>
                <Link to="/customer-management" className="dashboard-link">Customer Management</Link>
                <Link to="/employee-management" className="dashboard-link">Employee Management</Link>
            </div>
        </div>
    );
};

export default Dashboard;
