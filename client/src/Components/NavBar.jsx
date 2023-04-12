import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { FiHome, FiVideo, FiImage, FiHeart } from "react-icons/fi";

import image from "./logo-color.jpg";

function NavBar() {
  /* const showButton = () => {
		setHidden(false);
	}; */

  //const showButton = useContext(BtnContext);
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
          <NavLink to="/Gallery" className="nav-link">
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
        <li>
          <NavLink to="/FavoritesView" className="nav-link">
            <FiHeart className="nav-icon" />
            <span className="nav-text">Favorites</span>
          </NavLink>
        </li>
        <li className="logo">
          <img
            alt="logo"
            src={image}
            style={{ width: "250px", height: "250px", position: "relative" }}
          />
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
