import { useState, useContext } from "react";
import { auth } from "../../../firebaseConfig.js";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { AuthContext } from "../../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import logo from "../../assets/studious.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

const Login = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [showInvaildCredAlert, setShowInvaildCredAlert] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [passwordToggleProperties, setPasswordToggleProperties] = useState({
    icon: "bi bi-eye-fill",
    inputType: "password",
  });

  const handleToggle = () => {
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
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, userData.email, userData.password)
      .then((userCredential) => {
        navigate("/");
        console.log(userCredential.user);
      })
      .catch((error) => {
        if (error.code != "") {
          toast.error("Incorrect email or password. Please try again");
        }
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log(currentUser.email);
        toast.success("Successfully signed out");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleChange = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <button onClick={handleSignOut}>signout</button>
      <p>
        current user: {currentUser ? currentUser.email : "No user logged in"}
      </p>
      <div className="form-container mt-5 m-auto">
        <img src={logo} alt="image" className="mb-4 logo" />
        <h2 className="mb-3">Login</h2>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
          </Form.Group>
          <div className="mb-3">
            <InputGroup className="mb-1">
              <Form.Control
                type={passwordToggleProperties.inputType}
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
              <Button variant="light" onClick={handleToggle}>
                <i className={passwordToggleProperties.icon}></i>
              </Button>
            </InputGroup>
            <a
              href="/users/forgot-password"
              className="forgot-password mb-3"
              style={{ float: "right" }}
            >
              Forgot password?
            </a>
          </div>

          <Button variant="primary" className="w-100" onClick={handleLogin}>
            Login
          </Button>
        </Form>

        <section className="mt-3 d-flex flex-column">
          <h6 className="m-auto">
            Don't have an account? <a href="/users/signup">Signup</a>
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
            Login with Google
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
            Login with Github
            <div></div>
          </Button>
        </section>
      </div>
    </>
  );
};

export default Login;
