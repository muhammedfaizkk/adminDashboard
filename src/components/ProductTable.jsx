import React from 'react';
import { Table } from 'react-bootstrap';

function ProductTable() {
  const products = [
    { id: 1, name: 'Product 1', price: 19.99, description: 'Description 1' },
    { id: 2, name: 'Product 2', price: 29.99, description: 'Description 2' },
    { id: 3, name: 'Product 3', price: 39.99, description: 'Description 3' },
  ];

  return (
    <div className="table-container">
      <h2>Product Table</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>${product.price}</td>
              <td>{product.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ProductTable;
