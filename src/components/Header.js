import { useState } from "react";
import logo from "../img/logoOfficial.png";

export default function Header({ onSetDarkMode, mode }) {
  return (
    <div className="header">
      <div className="header__navbar">
        <div className="header__navbar-logo">
          <img src={logo} alt="logo of site" />
        </div>
      </div>
      <div className="header__navbar-list">
        <nav className="header__navbar-list-nav">
          <ul className="header__navbar-list-nav-ul">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="header__navbar-icons" onClick={() => onSetDarkMode()}>
        {mode ? (
          <ion-icon name="sunny-outline"></ion-icon>
        ) : (
          <ion-icon name="moon-outline"></ion-icon>
        )}
      </div>
    </div>
  );
}
