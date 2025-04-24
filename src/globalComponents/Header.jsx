import React from "react";
// import "./_header.css"; // Ensure you create a CSS file for styling
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>tanishka.</h1>
      </div>
      <nav className="navbar">
        <div className="nav-links">
          {/* <li>
            <a href="#home" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
          </li> */}
          {/* <li>
            <a href="#about" >
              <FaGithub />
            </a>
          </li> */}

          <a
            href="https://www.linkedin.com/in/tanishka-agrawal-m1r1t1v2/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/.tannishka?igsh=Z3Q2ejg1d3JwbXI="
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
