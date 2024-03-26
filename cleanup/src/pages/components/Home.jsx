import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";
import DatabaseService from "../../services/DatabaseService.js";

import "../styles/Home.scss";
import Sidebar from "../../tabs/common/components/Sidebar";
import Assignments from "../../tabs/Assignments/Assignments";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  const databaseService = new DatabaseService();

  const handleTest = async () => {
    const data = await databaseService.fetchData("users/");
    console.log(data);
  };

  return (
    <>
      <Sidebar />
      <main>
        <Assignments />
        {/* <button onClick={handleTest}>testing</button> */}
      </main>
    </>
  );
};

export default Home;
