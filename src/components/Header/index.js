import React from "react";
import logo from "../../images/logo.png";
import { useNavigate } from "react-router-dom";
import "./index.scss";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="app-header">
      <nav className="navbar">
        <h1 onClick={(_) => navigate("/")}>
          <img src={logo} alt="logo" />
        </h1>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#departments">Departments</a>
          </li>
          <li>
            <a href="#doctors">Doctors</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
