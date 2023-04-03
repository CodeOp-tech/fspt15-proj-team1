import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import TourView from "../Pages/TourView";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <ul className="navbar">
        {/* the website can be navigated using only the keyboard with the tabIndex*/}
        <li>
          {/*<a href="#" tabIndex="1">*/}
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/ArtView">ArtView</NavLink>
        </li>
        <li>
          <NavLink to="/Search">Search</NavLink>
        </li>
        <li>
          <NavLink to="/TourView">TourView</NavLink>
        </li>
        <li>
          <NavLink to="/VideoTour">VideoTour</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
