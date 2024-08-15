import React, { useState } from 'react';
import { Table, Form } from 'react-bootstrap';
import { FaTrash } from 'react-icons/fa'; // Import the delete icon

function ProductTable() {
  const [sortBy, setSortBy] = useState('id');
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 19.99,
      description: 'Description 1',
      category: 'Electronics',
      image: './image1.jpg' // Replace with actual image path
    },
    {
      id: 2,
      name: 'Product 2',
      price: 29.99,
      description: 'Description 2',
      category: 'Home Appliances',
      image: './image2.jpg' // Replace with actual image path
    },
    {
      id: 3,
      name: 'Product 3',
      price: 39.99,
      description: 'Description 3',
      category: 'Furniture',
      image: './image3.jpg' // Replace with actual image path
    }
  ];

  const handleSort = (column) => {
    setSortBy(column);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleDelete = (id) => {
    // Implement delete functionality
    console.log(`Delete product with id: ${id}`);
  };

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'price') {
        return a.price - b.price;
      }
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      return a.id - b.id;
    });

  return (
    <div className="table-container">
      <h3 className='text-center mb-4'>Product Table</h3>
      <Form className="mb-4">
        <Form.Group className="mb-3">
          <Form.Label>Search</Form.Label>
          <Form.Control
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={handleSearch}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Sort By</Form.Label>
          <Form.Control
            as="select"
            value={sortBy}
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="id">ID</option>
            <option value="name">Name</option>
            <option value="price">Price</option>
          </Form.Control>
        </Form.Group>
      </Form>
      <div className="table-responsive">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Category</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td>
                  <img
                    src={product.image}
                    alt={`Product ${product.id}`}
                    className="dashproduct-image"
                  />
                </td>
                <td className='text-center'>
                  <FaTrash
                    onClick={() => handleDelete(product.id)}
                    style={{ cursor: 'pointer', color: 'red' }}
                    title="Delete"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default ProductTable;
