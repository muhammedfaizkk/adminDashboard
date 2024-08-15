import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function ProductForm() {
  const [images, setImages] = useState([]);
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
  });

  const [errors, setErrors] = useState({});

  const handleImageChange = (event) => {
    const fileList = Array.from(event.target.files).slice(0, 3); // Allow only up to 3 images
    setImages(fileList);
  };

  const validateForm = () => {
    const errors = {};

    if (!product.name) {
      errors.name = 'Product name is required';
    }

    if (!product.price) {
      errors.price = 'Price is required';
    } else if (isNaN(product.price) || Number(product.price) <= 0) {
      errors.price = 'Price must be a valid positive number';
    }

    if (!product.description) {
      errors.description = 'Description is required';
    }

    if (!product.category) {
      errors.category = 'Category is required';
    }

    if (images.length === 0) {
      errors.images = 'At least one image is required';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const formData = new FormData();
      formData.append('name', product.name);
      formData.append('price', product.price);
      formData.append('description', product.description);
      formData.append('category', product.category);
      images.forEach((image, index) => {
        formData.append(`image${index + 1}`, image);
      });



      console.log('Product submitted:', product);
      console.log('Images:', images);

    } else {
      console.log('Form has errors');
    }
  };

  console.log(product, images);


  return (
    <div className="form-container">
      <h3 className='text-center mb-4'>Product Form</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">
            {errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
            isInvalid={!!errors.price}
          />
          <Form.Control.Feedback type="invalid">
            {errors.price}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={product.description}
            onChange={(e) => setProduct({ ...product, description: e.target.value })}
            isInvalid={!!errors.description}
          />
          <Form.Control.Feedback type="invalid">
            {errors.description}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Control
            as="select"
            value={product.category}
            onChange={(e) => setProduct({ ...product, category: e.target.value })}
            isInvalid={!!errors.category}
          >
            <option value="">Select a category</option>
            <option value="electronics">Electronics</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home</option>
            <option value="books">Books</option>
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            {errors.category}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Product Images (up to 3)</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            isInvalid={!!errors.images}
          />
          <Form.Control.Feedback type="invalid">
            {errors.images}
          </Form.Control.Feedback>
        </Form.Group>

        <div className="dashimage-previews">
          {images.length > 0 && images.map((image, index) => (
            <img
              key={index}
              src={URL.createObjectURL(image)}
              alt={`Product preview ${index + 1}`}
              className="dashimage-preview"
            />
          ))}
        </div>

        <div className='text-end'>
          <Button variant="dark" type="submit" className='mt-3'>
            Add Product
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default ProductForm;
