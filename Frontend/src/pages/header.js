import React, { useState } from "react";
import { FaSearch, FaUser, FaBars, FaTimes } from "react-icons/fa";
import edulogo from "../images/edulogo.png";
import "../style/header.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={edulogo} alt="EduFlow Logo" />
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`} style={{ gap: '40px' }}>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Posts</li>
          <li>Plans</li>
          <li>Progress</li>
        </ul>

        <div className="right-section">
          <div className="search-bar">
            <input type="text" placeholder="Search for courses..." />
            <FaSearch className="search-icon" />
          </div>
          <FaUser className="user-icon" />
        </div>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
