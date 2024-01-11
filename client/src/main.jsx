import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./css/global.css";
import App from "./App";
import { Toaster } from "react-hot-toast";
import { AuthContextProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <React.StrictMode>
      <App />
      <Toaster
        toastOptions={{
          success: {
            duration: 2000,
            position: "top-right",
          },
          error: {
            duration: 4000,
            position: "top-right",
          },
        }}
      />
    </React.StrictMode>
  </AuthContextProvider>
);
