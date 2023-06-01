import React from "react";

import "./HomePage.css";
import NavBar from "../../Components/NavBar/NavBar";

const HomePage = () => {
  return (
    <div className="homePage">
      <NavBar />

      <div className="homeContainer">
        <span>Welcome to my Website...</span>
      </div>
    </div>
  );
};

export default HomePage;
