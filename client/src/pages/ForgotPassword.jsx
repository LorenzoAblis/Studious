import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ForgotPassword = () => {
  return (
    <>
      <div className="form-container mt-5 m-auto">
        <h1 className="mb-4 aero-title">Aero</h1>
        <h2 className="mb-3">Forgot your password?</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Email Address"
              name="email"
            />
          </Form.Group>
          <Button className="w-100 mb-3">Reset Password</Button>
          <a href="/users/login">
            <Button variant="light" className="w-100" style={{ color: "blue" }}>
              Back to login
            </Button>
          </a>
        </Form>
      </div>
    </>
  );
};

export default ForgotPassword;
