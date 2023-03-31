import React from "react";
import "./NavBar.css";
import {NavLink, Route, Routes} from 'react-router-dom';


function NavBar() {
  return (
  <div>
    <ul class=" navbar">
{/* the website can be navigated using only the keyboard with the tabIndex*/}
        <li><a href="#" tabIndex="1">Home</a></li>
        <li><a href="#artview" tabIndex="2">ArtView</a></li>
        <li><a href="#search" tabIndex="3">Search</a></li>
       <li><a href="#tourview" tabIndex="4">TourView</a></li>
       <li><a href="#videotour" tabIndex="5">VideoTour</a></li>
    </ul>


<div style={{ margin: '10px' }}>
                        
                    </div>
                   
                   
                   
                     </div>
  );
}

export default NavBar;
