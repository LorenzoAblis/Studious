import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

import "../styles/Home.scss";
import Sidebar from "../components/Sidebar.jsx";
import Assignments from "../components/Assignments.jsx";

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <Sidebar />
      <main>
        <Assignments />
      </main>
    </>
  );
};

export default Home;
