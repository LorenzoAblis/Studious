import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      <p>Welcome, {currentUser.email}</p>
    </>
  );
};

export default Home;
