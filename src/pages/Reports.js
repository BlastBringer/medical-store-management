import React, { useState } from 'react';
import '../components/Management.css';

const Reports = () => {
  const [reportType, setReportType] = useState('');
  const [reportData, setReportData] = useState(null);

  const handleGenerateReport = () => {
    // Mock data for demonstration purposes; replace with actual data fetching
    let data;
    switch (reportType) {
      case 'sales':
        data = [
          { orderId: 'ORD123', date: '2024-11-01', customer: 'John Doe', totalAmount: 250.0 },
          { orderId: 'ORD124', date: '2024-11-02', customer: 'Jane Smith', totalAmount: 300.0 },
        ];
        break;
      case 'inventory':
        data = [
          { productId: 'P001', name: 'Paracetamol', stockQuantity: 150, pricePerUnit: 10.0 },
          { productId: 'P002', name: 'Aspirin', stockQuantity: 200, pricePerUnit: 15.0 },
        ];
        break;
      case 'productStock':
        data = [
          { productId: 'P001', name: 'Paracetamol', batchNo: 'B123', expiryDate: '2025-12-01' },
          { productId: 'P002', name: 'Aspirin', batchNo: 'B124', expiryDate: '2025-11-01' },
        ];
        break;
      default:
        data = [];
    }
    setReportData(data);
  };

  return (
    <div className="management-container slide-in">
      <h2>Reports</h2>
      <p>Select a report type and generate the report.</p>

      <div className="report-options">
        <label>Select Report Type:</label>
        <select value={reportType} onChange={(e) => setReportType(e.target.value)}>
          <option value="">-- Select --</option>
          <option value="sales">Sales Report</option>
          <option value="inventory">Inventory Report</option>
          <option value="productStock">Product Stock Report</option>
        </select>
        <button className="generate-btn" onClick={handleGenerateReport}>Generate Report</button>
      </div>

      {reportData && (
        <div className="report-result">
          <h3>{reportType.charAt(0).toUpperCase() + reportType.slice(1)} Report</h3>
          <table>
            <thead>
              {reportType === 'sales' && (
                <tr>
                  <th>Order ID</th>
                  <th>Date</th>
                  <th>Customer</th>
                  <th>Total Amount</th>
                </tr>
              )}
              {reportType === 'inventory' && (
                <tr>
                  <th>Product ID</th>
                  <th>Product Name</th>
                  <th>Stock Quantity</th>
                  <th>Price per Unit</th>
                </tr>
              )}
              {reportType === 'productStock' && (
                <tr>
                  <th>Product ID</th>
                  <th>Product Name</th>
                  <th>Batch No</th>
                  <th>Expiry Date</th>
                </tr>
              )}
            </thead>
            <tbody>
              {reportData.map((item, index) => (
                <tr key={index}>
                  {reportType === 'sales' && (
                    <>
                      <td>{item.orderId}</td>
                      <td>{item.date}</td>
                      <td>{item.customer}</td>
                      <td>${item.totalAmount.toFixed(2)}</td>
                    </>
                  )}
                  {reportType === 'inventory' && (
                    <>
                      <td>{item.productId}</td>
                      <td>{item.name}</td>
                      <td>{item.stockQuantity}</td>
                      <td>${item.pricePerUnit ? item.pricePerUnit.toFixed(2) : 'N/A'}</td>
                    </>
                  )}
                  {reportType === 'productStock' && (
                    <>
                      <td>{item.productId}</td>
                      <td>{item.name}</td>
                      <td>{item.batchNo}</td>
                      <td>{item.expiryDate}</td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Reports;
