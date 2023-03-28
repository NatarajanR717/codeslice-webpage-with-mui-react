import React from "react";
import "./Header.css";
import Logo from "../../images/codeslice-logo.png";

function Header() {
  return (
    <div className="header">
      <div className="left">
        <img src={Logo} alt="logo"></img>
      </div>
      <div className="right">
        <ul>
          <li>
            <a href="./">Home</a>
          </li>
          <li>
            <a href="./">About</a>
          </li>
          <li>
            <a href="./">Service</a>
          </li>
          <li>
            <a href="./">portfolio</a>
          </li>
          <li>
            <a href="./">Products</a>
          </li>
          <li>
            <a href="./">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
