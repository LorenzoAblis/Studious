import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";

import "../styles/Home.scss";
import Sidebar from "../../tabs/common/components/Sidebar";
import Assignments from "../../tabs/Assignments/Assignments";

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
