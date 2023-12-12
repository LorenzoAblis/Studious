import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
//   const { currentUser } = useContext(AuthContext);

  return (
    <>
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
    </>
  );
}

export default App;
