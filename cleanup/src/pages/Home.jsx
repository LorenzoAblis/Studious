import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import { auth } from "../../firebaseConfig";
import { signOut } from "firebase/auth";

import "./styles/Home.scss";
import Sidebar from "../common/components/Sidebar.jsx";
import Assignments from "./Assignments/Assignments.jsx";

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    console.log("Home");
  }, []);

  return (
    <>
      <Sidebar />
      <main className="home-container">
        <Assignments />
      </main>
    </>
  );
};

export default Home;
