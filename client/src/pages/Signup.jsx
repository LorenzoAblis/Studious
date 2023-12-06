import { useState } from "react";

import "../css/Signup.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

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
        <h2 className="mb-3">Signup for an account</h2>
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
          <Button variant="primary" className="w-100">
            Register
          </Button>
        </Form>

        <section className="mt-3 d-flex flex-column">
          <h6 className="m-auto">
            Already have an account? <a href="/users/login">Login</a>
          </h6>

          <h6 className="or-line mt-4 mb-4">
            <span>or</span>
          </h6>

          <Button
            variant="light"
            className="border d-flex justify-content-between mb-1"
          >
            <img
              src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
              alt="google_logo"
            />
            Register with Google
            <div></div>
          </Button>
          <Button
            variant="light"
            className="border d-flex justify-content-between"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            Register with Github
            <div></div>
          </Button>
        </section>
      </div>
    </>
  );
};

export default Signup;
