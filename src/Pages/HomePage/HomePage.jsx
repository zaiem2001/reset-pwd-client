import React, { useEffect, useState } from "react";

import "./HomePage.css";
import NavBar from "../../Components/NavBar/NavBar";
import { getDataFromLocalStorage } from "../../Helpers/helpers";

const HomePage = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    setCurrentUser(getDataFromLocalStorage("user"));
  }, []);

  return (
    <div className="homePage">
      <NavBar user={currentUser} setCurrentUser={setCurrentUser} />

      <div className="homeContainer">
        <span>Welcome to my Website...</span>
      </div>
    </div>
  );
};

export default HomePage;
