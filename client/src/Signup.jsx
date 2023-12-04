import React from "react";
import "./global.css";
import { Form, Button, Container } from "react-bootstrap";
import "./Signup.css";

const Signup = () => {
  return (
    <>
      <div className="form-container mt-5">
        <h1 className="mb-4 aero-title">Aero</h1>
        <h2>Signup</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Username" name="username" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Email" name="email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Password" name="password" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Confirm password"
              name="confirmPassword"
            />
          </Form.Group>
        </Form>
        <Button variant="primary" className="w-100">
          Register
        </Button>

        <div className="mt-3">
          <h6>
            Already have an account? <a href="">Login</a>
          </h6>
        </div>
      </div>
    </>
  );
};

export default Signup;
