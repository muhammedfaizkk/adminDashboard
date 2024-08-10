import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function ProductForm() {
  const [product, setProduct] = useState({ name: '', price: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Product submitted:', product);
  };

  return (
    <div className="form-container">
      <h2>Product Form</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={product.description}
            onChange={(e) => setProduct({ ...product, description: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Product
        </Button>
      </Form>
    </div>
  );
}

export default ProductForm;
