import React, { useState } from 'react';
import '../components/Management.css';

const StockManagement = () => {
  // State for stock items and form inputs
  const [stockItems, setStockItems] = useState([
    { id: 1, productName: 'Paracetamol', quantity: 100, pricePerUnit: 10.0, expiryDate: '2025-12-01' },
    { id: 2, productName: 'Aspirin', quantity: 200, pricePerUnit: 15.0, expiryDate: '2025-11-01' },
  ]);
  const [newStockItem, setNewStockItem] = useState({
    productName: '',
    quantity: '',
    pricePerUnit: '',
    expiryDate: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStockItem({ ...newStockItem, [name]: value });
  };

  // Add a new stock item
  const addStockItem = () => {
    setStockItems([...stockItems, { ...newStockItem, id: Date.now() }]);
    setNewStockItem({ productName: '', quantity: '', pricePerUnit: '', expiryDate: '' });
  };

  // Edit an existing stock item
  const editStockItem = (index) => {
    setNewStockItem(stockItems[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  // Update a stock item after editing
  const updateStockItem = () => {
    const updatedItems = stockItems.map((item, index) =>
      index === editIndex ? newStockItem : item
    );
    setStockItems(updatedItems);
    setIsEditing(false);
    setNewStockItem({ productName: '', quantity: '', pricePerUnit: '', expiryDate: '' });
    setEditIndex(null);
  };

  // Delete a stock item
  const deleteStockItem = (id) => {
    setStockItems(stockItems.filter(item => item.id !== id));
  };

  return (
    <div className="management-container slide-in">
      <h2>Stock Management</h2>
      <p>Manage stock levels and track inventory details.</p>

      <div className="stock-form">
        <h3>{isEditing ? 'Edit Stock Item' : 'Add New Stock Item'}</h3>
        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          value={newStockItem.productName}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={newStockItem.quantity}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="pricePerUnit"
          placeholder="Price per Unit"
          value={newStockItem.pricePerUnit}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="expiryDate"
          placeholder="Expiry Date"
          value={newStockItem.expiryDate}
          onChange={handleInputChange}
        />
        <button onClick={isEditing ? updateStockItem : addStockItem}>
          {isEditing ? 'Update Item' : 'Add Item'}
        </button>
      </div>

      <div className="stock-list">
        <h3>Stock Items</h3>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Price per Unit</th>
              <th>Expiry Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {stockItems.map((item, index) => (
              <tr key={item.id}>
                <td>{item.productName}</td>
                <td>{item.quantity}</td>
                <td>${item.pricePerUnit ? parseFloat(item.pricePerUnit).toFixed(2) : 'N/A'}</td>
                <td>{item.expiryDate}</td>
                <td>
                  <button onClick={() => editStockItem(index)}>Edit</button>
                  <button onClick={() => deleteStockItem(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockManagement;
