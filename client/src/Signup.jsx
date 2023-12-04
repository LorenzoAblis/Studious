import React from "react";
import "./global.css";

import { Form, Button } from "react-bootstrap";

const Signup = () => {
  return (
    <>
      Signupa
      <Form>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Username" name="location" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Email" name="date" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Password" name="opponent" />
        </Form.Group>
      </Form>
      <Button variant="primary">Signup</Button>
    </>
  );
};

export default Signup;
