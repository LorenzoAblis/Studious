import { useState } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import { auth, db, googleProvider } from "../../firebaseConfig";
import { ref, set } from "firebase/database";

import { google_logo, apple_logo, studious_logo } from "../assets";
import FormInput from "../common/components/FormInput";
import "./styles/Signup.scss";

const Signup = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      name: "username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special characters.",
      label: "Username",
      type: "text",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      name: "email",
      errorMessage: "Invaild email.",
      label: "Email",
      type: "email",
      pattern: "^[^s@]+@[^s@]+.[^s@]+$",
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
    {
      name: "confirmPassword",
      errorMessage: "Passwords do not match.",
      label: "Confirm Password",
      type: "password",
      pattern: values.password,
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = values.username;
    const email = values.email;
    const password = values.password;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: username,
      });

      await set(ref(db, "users/" + username), {
        username: username,
        email: email,
      });
    } catch (error) {
      console.log(error.code, error.message);
    }
  };

  const handleGoogleSignup = async () => {
    signInWithPopup(auth, googleProvider).then((data) => {
      
    });
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
            <button key={index} onClick={handleGoogleSignup}>
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
