import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/users/signup" element={<Signup />}></Route>
        <Route path="/users/login" element={<Login />}></Route>
        <Route
          path="/users/forgot-password"
          element={<ForgotPassword />}
        ></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
