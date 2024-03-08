import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

import Sidebar from "../components/Sidebar.jsx";
import "../styles/Home.scss";

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <div className="d-flex flex-row">
        <Sidebar />
        <main>asdasds</main>
      </div>
    </>
  );
};

export default Home;
