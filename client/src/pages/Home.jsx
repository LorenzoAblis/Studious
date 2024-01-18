import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

import "../css/Home.css";

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <div class="sidenav">
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>

      <main>
        <nav>
          <h1 className="m-4">Home</h1>
        </nav>
      </main>
    </>
  );
};

export default Home;
