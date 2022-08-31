import React from "react";
import "./style.css";

const NavBar = () => {
  return (
    <header>
      <nav >
      <div className="logo" href="#">SpeedShop</div>
        <ul className="menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
