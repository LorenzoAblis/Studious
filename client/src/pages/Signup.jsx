import { Form, Button } from "react-bootstrap";
import "../css/global.css";
import "../css/Signup.css";

const Signup = () => {
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
          {/* TODO: Add show password eye thing */}
          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
            />
          </Form.Group>
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
