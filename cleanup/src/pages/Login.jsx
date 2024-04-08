import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth, googleProvider } from "../../firebaseConfig";

import { google_logo, apple_logo, studious_logo } from "../assets";
import FormInput from "../common/components/FormInput";
import "./styles/Login.scss";

const Login = () => {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const inputs = [
    {
      name: "email",
      errorMessage: "Invaild email.",
      label: "Email",
      type: "email",
      pattern: "^[w-.]+@([w-]+.)+[w-]{2,4}$",
      required: true,
    },
    {
      name: "password",
      errorMessage: "Password must be at least 6 characters.",
      label: "Password",
      type: "password",
      pattern: "^.{6,}$",
      required: true,
    },
  ];

  const authProviders = [
    {
      name: "Google",
      alt: "google logo",
      src: google_logo,
    },
    {
      name: "Apple",
      alt: "apple logo",
      src: apple_logo,
    },
  ];

  const onChange = (e) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // navigate("/");
        console.log(userCredential.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleLogin = async () => {
    signInWithPopup(auth, googleProvider).then((data) => {
      //   console.log(currentUser.displayName);
    });
  };

  return (
    <main>
      <form>
        <header>
          <img src={studious_logo} alt="logo" className="logo" />
          <h1>Login</h1>
        </header>
        <section className="form-inputs">
          {inputs.map((input, index) => (
            <FormInput key={index} {...input} onChange={onChange} />
          ))}
          <button className="signup-button" onClick={handleLogin}>
            Login
          </button>
          <p className="login-link" onClick={() => navigate("/users/signup")}>
            Don&apos;t have an account? <span>Signup</span>
          </p>
        </section>
        <h6 className="or">&nbsp;or&nbsp;</h6>
        <section className="third-party-links">
          {authProviders.map((provider, index) => (
            <button key={index} onClick={handleGoogleLogin}>
              <img src={provider.src} alt={provider.alt} />
              Continue with {provider.name}
            </button>
          ))}
        </section>
      </form>
    </main>
  );
};

export default Login;
