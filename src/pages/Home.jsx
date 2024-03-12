import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

import "../styles/Home.scss";
import Sidebar from "../components/Sidebar.jsx";
import Assignments from "../components/Assignments.jsx";

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <main>
        <Sidebar />
        <Assignments />
      </main>
    </>
  );
};

export default Home;
