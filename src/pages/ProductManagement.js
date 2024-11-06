import React, { useState } from "react";
import "../components/Management.css";

const ProductManagement = () => {
  const [products, setProducts] = useState([
    {
      productId: "P001",
      productName: "Paracetamol",
      productType: "Medicine",
      manufacturer: "Pharma Inc.",
      expiryDate: "2025-06-30",
      batchNo: "B123",
      stockQuantity: 100,
      pricePerUnit: 2.5,
    },
    // Add other sample products here
  ]);

  const [newProduct, setNewProduct] = useState({
    productId: "",
    productName: "",
    productType: "",
    manufacturer: "",
    expiryDate: "",
    batchNo: "",
    stockQuantity: "",
    pricePerUnit: "",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [currentProductId, setCurrentProductId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const addProduct = () => {
    setProducts([
      ...products,
      { ...newProduct, productId: `P00${products.length + 1}` },
    ]);
    setNewProduct({
      productId: "",
      productName: "",
      productType: "",
      manufacturer: "",
      expiryDate: "",
      batchNo: "",
      stockQuantity: "",
      pricePerUnit: "",
    });
  };

  const deleteProduct = (productId) => {
    setProducts(products.filter((product) => product.productId !== productId));
  };

  const editProduct = (product) => {
    setIsEditing(true);
    setCurrentProductId(product.productId);
    setNewProduct({ ...product });
  };

  const updateProduct = () => {
    setProducts(
      products.map((product) =>
        product.productId === currentProductId ? { ...newProduct } : product
      )
    );
    setIsEditing(false);
    setNewProduct({
      productId: "",
      productName: "",
      productType: "",
      manufacturer: "",
      expiryDate: "",
      batchNo: "",
      stockQuantity: "",
      pricePerUnit: "",
    });
    setCurrentProductId(null);
  };

  return (
    <div className="management-container slide-in">
      <h2>Product Management</h2>

      <div className="form-container">
        <input
          type="text"
          name="productName"
          placeholder="Product Name"
          value={newProduct.productName}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="productType"
          placeholder="Product Type"
          value={newProduct.productType}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="manufacturer"
          placeholder="Manufacturer"
          value={newProduct.manufacturer}
          onChange={handleInputChange}
        />
        <input
          type="date"
          name="expiryDate"
          placeholder="Expiry Date"
          value={newProduct.expiryDate}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="batchNo"
          placeholder="Batch No."
          value={newProduct.batchNo}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="stockQuantity"
          placeholder="Stock Quantity"
          value={newProduct.stockQuantity}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="pricePerUnit"
          placeholder="Price Per Unit"
          value={newProduct.pricePerUnit}
          onChange={handleInputChange}
        />

        {isEditing ? (
          <button onClick={updateProduct}>Update Product</button>
        ) : (
          <button onClick={addProduct}>Add Product</button>
        )}
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Name</th>
              <th>Type</th>
              <th>Manufacturer</th>
              <th>Expiry Date</th>
              <th>Batch No.</th>
              <th>Stock Quantity</th>
              <th>Price Per Unit</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.productId}>
                <td>{product.productId}</td>
                <td>{product.productName}</td>
                <td>{product.productType}</td>
                <td>{product.manufacturer}</td>
                <td>{product.expiryDate}</td>
                <td>{product.batchNo}</td>
                <td>{product.stockQuantity}</td>
                <td>
                  $
                  {product.pricePerUnit
                    ? Number(product.pricePerUnit).toFixed(2)
                    : "N/A"}
                </td>
                <td>
                  <button
                    className="edit-btn"
                    onClick={() => editProduct(product)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => deleteProduct(product.productId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManagement;
