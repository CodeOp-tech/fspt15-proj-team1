import React from "react";
import "./Components/NavBar.css";

function NavBar() {
  return (
  <nav>
    <ul class=" navbar">
        <li><a href="#">Home</a></li>
        <li><a href="#artview">ArtView</a></li>
        <li><a href="#search">Search</a></li>
       <li><a href="#tourview">TourView</a></li>
       <li><a href="#videotour">VideoTour</a></li>
    </ul>

</nav>
  );
}

export default NavBar;
