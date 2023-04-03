import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';
import { FiHome, FiVideo, FiImage } from "react-icons/fi";
import image from './logo-color.jpg';

function NavBar() {
  return (
    <nav>
  <ul className="navbar">
    <li>
      <NavLink to="/" className="nav-link">
        <FiHome className="nav-icon" />
        <span className="nav-text">Home</span>
      </NavLink>
    </li>
    <li>
      <NavLink to="/TourView" className="nav-link">
        <FiImage className="nav-icon" />
        <span className="nav-text">Gallery</span>
      </NavLink>
    </li>
    <li>
      <NavLink to="/VideoTour" className="nav-link">
        <FiVideo className="nav-icon" />
        <span className="nav-text">VideoTour</span>
      </NavLink>
    </li>
    <li className="logo">
      <img  src={image} style={{ width: "250px", height: "250px" }}/>
    </li>
  </ul>
</nav>

  );
}



export default NavBar;
