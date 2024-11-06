import React, { useState } from 'react';
import '../components/Management.css';

const CustomerManagement = () => {
  const [customers, setCustomers] = useState([]);
  const [newCustomer, setNewCustomer] = useState({
    Customer_ID: '',
    Customer_Name: '',
    Contact_Number: '',
    Address: '',
    Email: ''
  });

  const [searchQuery, setSearchQuery] = useState('');

  // Create Customer
  const handleAddCustomer = () => {
    setCustomers([...customers, { ...newCustomer, Customer_ID: Date.now() }]);
    setNewCustomer({
      Customer_ID: '',
      Customer_Name: '',
      Contact_Number: '',
      Address: '',
      Email: ''
    });
  };

  // Update Customer
  const handleUpdateCustomer = (id) => {
    const updatedCustomers = customers.map((customer) =>
      customer.Customer_ID === id ? { ...customer, ...newCustomer } : customer
    );
    setCustomers(updatedCustomers);
    setNewCustomer({
      Customer_ID: '',
      Customer_Name: '',
      Contact_Number: '',
      Address: '',
      Email: ''
    });
  };

  // Delete Customer
  const handleDeleteCustomer = (id) => {
    const filteredCustomers = customers.filter(
      (customer) => customer.Customer_ID !== id
    );
    setCustomers(filteredCustomers);
  };

  // Search/Filter Customers
  const filteredCustomers = customers.filter((customer) =>
    customer.Customer_Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.Contact_Number.includes(searchQuery)
  );

  return (
    <div className="management-container slide-in">
      <h2>Customer Management</h2>
      <p>Manage customer information and track customer details.</p>

      {/* Search Filter */}
      <div className="form-container">
        <input
          type="text"
          placeholder="Search by name or contact"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Add Customer Form */}
      <div className="form-container">
        <input
          type="text"
          placeholder="Customer Name"
          value={newCustomer.Customer_Name}
          onChange={(e) => setNewCustomer({ ...newCustomer, Customer_Name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Contact Number"
          value={newCustomer.Contact_Number}
          onChange={(e) => setNewCustomer({ ...newCustomer, Contact_Number: e.target.value })}
        />
        <input
          type="text"
          placeholder="Address"
          value={newCustomer.Address}
          onChange={(e) => setNewCustomer({ ...newCustomer, Address: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newCustomer.Email}
          onChange={(e) => setNewCustomer({ ...newCustomer, Email: e.target.value })}
        />
        <button onClick={handleAddCustomer}>Add Customer</button>
      </div>

      {/* Customer Table */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>Customer Name</th>
              <th>Contact Number</th>
              <th>Address</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((customer) => (
              <tr key={customer.Customer_ID}>
                <td>{customer.Customer_ID}</td>
                <td>{customer.Customer_Name}</td>
                <td>{customer.Contact_Number}</td>
                <td>{customer.Address}</td>
                <td>{customer.Email}</td>
                <td>
                  <button onClick={() => setNewCustomer(customer)}>Edit</button>
                  <button onClick={() => handleDeleteCustomer(customer.Customer_ID)}>Delete</button>
                  <button onClick={() => handleUpdateCustomer(customer.Customer_ID)}>Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerManagement;
