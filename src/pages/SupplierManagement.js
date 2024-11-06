import React, { useState } from 'react';
import '../components/Management.css';

const SupplierManagement = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [newSupplier, setNewSupplier] = useState({
    Supplier_ID: '',
    Supplier_Name: '',
    Contact_Number: '',
    Address: '',
    Email: ''
  });

  const [searchQuery, setSearchQuery] = useState('');

  // Create Supplier
  const handleAddSupplier = () => {
    setSuppliers([...suppliers, { ...newSupplier, Supplier_ID: Date.now() }]);
    setNewSupplier({
      Supplier_ID: '',
      Supplier_Name: '',
      Contact_Number: '',
      Address: '',
      Email: ''
    });
  };

  // Update Supplier
  const handleUpdateSupplier = (id) => {
    const updatedSuppliers = suppliers.map((supplier) =>
      supplier.Supplier_ID === id ? { ...supplier, ...newSupplier } : supplier
    );
    setSuppliers(updatedSuppliers);
    setNewSupplier({
      Supplier_ID: '',
      Supplier_Name: '',
      Contact_Number: '',
      Address: '',
      Email: ''
    });
  };

  // Delete Supplier
  const handleDeleteSupplier = (id) => {
    const filteredSuppliers = suppliers.filter(
      (supplier) => supplier.Supplier_ID !== id
    );
    setSuppliers(filteredSuppliers);
  };

  // Search/Filter Suppliers
  const filteredSuppliers = suppliers.filter((supplier) =>
    supplier.Supplier_Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    supplier.Contact_Number.includes(searchQuery)
  );

  return (
    <div className="management-container slide-in">
      <h2>Supplier Management</h2>
      <p>Manage supplier information and track stock provided by suppliers.</p>

      {/* Search Filter */}
      <div className="form-container">
        <input
          type="text"
          placeholder="Search by name or contact"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Add Supplier Form */}
      <div className="form-container">
        <input
          type="text"
          placeholder="Supplier Name"
          value={newSupplier.Supplier_Name}
          onChange={(e) => setNewSupplier({ ...newSupplier, Supplier_Name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Contact Number"
          value={newSupplier.Contact_Number}
          onChange={(e) => setNewSupplier({ ...newSupplier, Contact_Number: e.target.value })}
        />
        <input
          type="text"
          placeholder="Address"
          value={newSupplier.Address}
          onChange={(e) => setNewSupplier({ ...newSupplier, Address: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newSupplier.Email}
          onChange={(e) => setNewSupplier({ ...newSupplier, Email: e.target.value })}
        />
        <button onClick={handleAddSupplier}>Add Supplier</button>
      </div>

      {/* Supplier Table */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Supplier ID</th>
              <th>Supplier Name</th>
              <th>Contact Number</th>
              <th>Address</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredSuppliers.map((supplier) => (
              <tr key={supplier.Supplier_ID}>
                <td>{supplier.Supplier_ID}</td>
                <td>{supplier.Supplier_Name}</td>
                <td>{supplier.Contact_Number}</td>
                <td>{supplier.Address}</td>
                <td>{supplier.Email}</td>
                <td>
                  <button onClick={() => setNewSupplier(supplier)}>Edit</button>
                  <button onClick={() => handleDeleteSupplier(supplier.Supplier_ID)}>Delete</button>
                  <button onClick={() => handleUpdateSupplier(supplier.Supplier_ID)}>Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SupplierManagement;
