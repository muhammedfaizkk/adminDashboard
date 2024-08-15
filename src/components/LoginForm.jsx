import React from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';

const LoginForm = () => {
  return (
    <Container className="login-container d-flex align-items-center justify-content-center min-vh-100">
      <Card className="login-card p-4">
        <h2 className="login-header text-center">Login</h2>
        <Form className="login-form">
          <Form.Group controlId="formUsername" className="login-form-group">
            <Form.Control
              type="text"
              placeholder="Username"
              required
              className="login-input mb-3"
            />
          </Form.Group>
          <Form.Group controlId="formPassword" className="login-form-group">
            <Form.Control
              type="password"
              placeholder="Password"
              required
              className="login-input mb-3"
            />
          </Form.Group>
          <Button type="submit" variant="dark" className="login-button w-100">
            Login
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default LoginForm;
