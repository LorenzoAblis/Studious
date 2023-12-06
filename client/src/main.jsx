import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./pages/Signup.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Login from "./pages/Login.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/users/signup" element={<Signup />}></Route>
        <Route path="/users/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
