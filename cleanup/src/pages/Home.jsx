import { useContext, useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { AuthContext } from "../context/AuthContext.jsx";
import { db } from "../../firebaseConfig.js";

import "./styles/Home.scss";
import Sidebar from "../common/components/Sidebar.jsx";
import Assignments from "./Assignments/Assignments.jsx";

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  const [userData, setUserData] = useState({});

  const fetchUserData = () => {
    const userRef = ref(db, `users/${currentUser.displayName}`);
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setUserData(data);
      }
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <Sidebar currentUser={currentUser} />
      <main className="home-container">
        <Assignments assignments={userData.assignments} />
      </main>
    </>
  );
};

export default Home;
