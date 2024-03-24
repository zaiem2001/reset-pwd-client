import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./NavBar.css";
import { removeDataFromLocalStorage } from "../../Helpers/helpers";

const NavBar = ({ user, setCurrentUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeDataFromLocalStorage("user");
    setCurrentUser(null);
    navigate("/login");
  };

  return (
    <div className="navbarWrapper">
      <nav className="navBarContainer">
        <div className="navLinks">
          <Link to="/reset">Reset Password</Link>
          <div className="logoutBtn" onClick={handleLogout}>
            Logout
          </div>
        </div>

        <div className="username">{user ? user?.username : ""}</div>
      </nav>
    </div>
  );
};

export default NavBar;
