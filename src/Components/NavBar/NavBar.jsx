import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };
  return (
    <div className="navbarWrapper">
      <nav>
        <div className="navLinks">
          <Link to="/reset">Reset Password</Link>
          <div className="logoutBtn" onClick={handleLogout}>
            Logout
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
