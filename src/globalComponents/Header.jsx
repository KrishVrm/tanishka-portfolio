import React from "react";
// import "./_header.css"; // Ensure you create a CSS file for styling

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>tanishka.</h1>
      </div>
      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
