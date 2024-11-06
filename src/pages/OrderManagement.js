import React, { useState } from 'react';
import '../components/Management.css';

const OrderManagement = () => {
  const [orders, setOrders] = useState([
    { id: 1, customerName: 'John Doe', date: '2024-11-06', totalAmount: 120 },
    { id: 2, customerName: 'Jane Smith', date: '2024-11-07', totalAmount: 250 },
  ]);

  const [newOrder, setNewOrder] = useState({ customerName: '', date: '', totalAmount: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOrder({ ...newOrder, [name]: value });
  };

  const addOrder = () => {
    setOrders([...orders, { id: orders.length + 1, ...newOrder }]);
    setNewOrder({ customerName: '', date: '', totalAmount: '' });
  };

  const deleteOrder = (id) => {
    setOrders(orders.filter(order => order.id !== id));
  };

  return (
    <div className="management-container slide-in">
      <h2>Order Management</h2>
      <div className="form-container">
        <input type="text" name="customerName" placeholder="Customer Name" value={newOrder.customerName} onChange={handleInputChange} />
        <input type="date" name="date" placeholder="Order Date" value={newOrder.date} onChange={handleInputChange} />
        <input type="number" name="totalAmount" placeholder="Total Amount" value={newOrder.totalAmount} onChange={handleInputChange} />
        <button onClick={addOrder}>Add Order</button>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Date</th>
              <th>Total Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.customerName}</td>
                <td>{order.date}</td>
                <td>${order.totalAmount}</td>
                <td>
                  <button className="delete-btn" onClick={() => deleteOrder(order.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderManagement;
