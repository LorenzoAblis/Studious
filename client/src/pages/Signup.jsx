import { useState } from "react";

import "../css/global.css";
import "../css/Signup.css";
import { Form, Button, InputGroup } from "react-bootstrap";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfimPassword] = useState(true);
  const [passwordToggleProperties, setPasswordToggleProperties] = useState({
    icon: "bi bi-eye-fill",
    inputType: "password",
  });
  const [confirmPasswordToggleProperties, setConfirmPasswordToggleProperties] =
    useState({
      icon: "bi bi-eye-fill",
      inputType: "password",
    });

  const handleToggle = (type) => {
    if (type != "confirm") {
      setShowPassword(!showPassword);

      if (showPassword) {
        setPasswordToggleProperties({
          icon: "bi bi-eye-slash-fill",
          inputType: "text",
        });
      } else {
        setPasswordToggleProperties({
          icon: "bi bi-eye-fill",
          inputType: "password",
        });
      }
    } else {
      setShowConfimPassword(!showConfirmPassword);

      if (showConfirmPassword) {
        setConfirmPasswordToggleProperties({
          icon: "bi bi-eye-slash-fill",
          inputType: "text",
        });
      } else {
        setConfirmPasswordToggleProperties({
          icon: "bi bi-eye-fill",
          inputType: "password",
        });
      }
    }
  };

  return (
    <>
      <div className="form-container mt-5 m-auto">
        <h1 className="mb-4 aero-title">Aero</h1>
        <h2 className="mb-3">Signup</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Username" name="username" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Email" name="email" />
          </Form.Group>
          <InputGroup className="mb-3">
            <Form.Control
              type={passwordToggleProperties.inputType}
              placeholder="Password"
              name="password"
            />
            <Button variant="light" onClick={() => handleToggle("creation")}>
              <i className={passwordToggleProperties.icon}></i>
            </Button>
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              type={confirmPasswordToggleProperties.inputType}
              placeholder="Confirm password"
              name="confirmPassword"
            />
            <Button variant="light" onClick={() => handleToggle("confirm")}>
              <i className={confirmPasswordToggleProperties.icon}></i>
            </Button>
          </InputGroup>
        </Form>
        <Button variant="primary" className="w-100">
          Register
        </Button>

        <section className="mt-3 d-flex flex-column">
          <h6 className="m-auto">
            Already have an account? <a href="">Login</a>
          </h6>

          <h6 className="or-line mt-4 mb-4">
            <span>or</span>
          </h6>

          <Button
            variant="light"
            className="border d-flex justify-content-between"
          >
            <img
              src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
              alt="google_logo"
            />
            Register with Google
            <div></div>
          </Button>
        </section>
      </div>
    </>
  );
};

export default Signup;
