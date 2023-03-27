import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
//importing react-icons library to import the Facebook, Twitter, and Instagram icons as components


function Footer() {
  return ( <footer>
    <div className="social-icons">
      <a href="https://www.facebook.com/"><FaFacebook /></a>
      <a href="https://twitter.com/"><FaTwitter /></a>
      <a href="https://www.instagram.com/"><FaInstagram /></a>
    </div>
    //copyrights and company name
    <p>&copy; 2023 ReTaGa</p>
  </footer>);
}

export default Footer;
