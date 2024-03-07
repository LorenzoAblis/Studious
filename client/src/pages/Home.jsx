import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

import Sidebar from "../components/Sidebar.jsx";
import "../styles/Home.scss";

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <Sidebar />
      <main>asdasdasd</main>
    </>
  );
};

export default Home;
