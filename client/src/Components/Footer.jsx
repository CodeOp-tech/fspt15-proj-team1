import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://www.facebook.com/"><FaFacebook /></a>
        <a href="https://twitter.com/"><FaTwitter /></a>
        <a href="https://www.instagram.com/"><FaInstagram /></a>
        <p>&copy; 2023 ReTaGa</p>
      </div>
    </footer>
  );
}

export default Footer;
