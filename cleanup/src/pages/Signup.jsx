import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../../firebaseConfig";
import { ref, set } from "firebase/database";

import { google_logo, apple_logo, studious_logo } from "../assets";
import FormInput from "../common/components/FormInput";
import "./styles/Signup.scss";

const Signup = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      name: "email",
      errorMessage: "",
      label: "Email",
      type: "text",
      required: true,
    },
    {
      name: "password",
      errorMessage: "",
      label: "Password",
      type: "password",
      required: true,
    },
    {
      name: "confirmPassword",
      errorMessage: "",
      label: "Confirm Password",
      type: "password",
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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main>
      <form>
        <header>
          <img src={studious_logo} alt="logo" className="logo" />
          <h1>Signup</h1>
        </header>
        <section className="form-inputs">
          {inputs.map((input, index) => (
            <FormInput key={index} {...input} onChange={onChange} />
          ))}
          <button className="signup-button" onClick={handleSubmit}>
            Signup
          </button>
          <p className="login-link">
            Already have an account? <span>Login</span>
          </p>
        </section>
        <h6 className="or">&nbsp;or&nbsp;</h6>
        <section className="third-party-links">
          {authProviders.map((provider, index) => (
            <button key={index}>
              <img src={provider.src} alt={provider.alt} />
              Continue with {provider.name}
            </button>
          ))}
        </section>
      </form>
    </main>
  );
};

export default Signup;
