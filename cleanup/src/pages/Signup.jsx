import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import { auth, db, googleProvider } from "../../firebaseConfig";
import { ref, set, get } from "firebase/database";
import toast from "react-hot-toast";

import { google_logo, apple_logo, studious_logo } from "../assets";
import FormInput from "../common/components/FormInput";
import "./styles/Signup.scss";

const Signup = () => {
  const navigate = useNavigate();

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
      const usernameRef = ref(db, "users/" + username);
      const usernameSnapshot = await get(usernameRef);

      if (usernameSnapshot.exists()) {
        toast.error("Account already exists!");
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      toast.success("Account successfully created!");

      await updateProfile(user, {
        displayName: username,
      });

      await set(ref(db, "users/" + username), {
        username: username,
        email: email,
      });

      navigate("/users/login");
    } catch (error) {
      console.error(error.code, error.message);
    }
  };

  const handleGoogleSignup = async () => {
    signInWithPopup(auth, googleProvider)
      .then(async (data) => {
        const userRef = ref(db, "users/" + data.user.displayName);

        get(userRef)
          .then(async (snapshot) => {
            if (snapshot.exists()) {
              navigate("/");
            } else {
              await set(userRef, {
                username: data.user.displayName,
                email: data.user.email,
              })
                .then(() => {
                  navigate("/users/login");
                })
                .catch((error) => {
                  console.error("Error creating new user:", error);
                });
            }
          })
          .catch((error) => {
            console.error("Error fetching user data:", error);
          });
      })
      .catch((error) => {
        console.error("Error signing in with Google:", error);
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
          <p className="login-link" onClick={() => navigate("/users/login")}>
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
