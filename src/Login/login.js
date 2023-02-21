import React from "react";
// import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import "./login.scss";
import LOGO from "../images/logo.png";

function Login() {
  return (
    <div className="body-main">
    <nav className="nav">
        <div className="logo">
          <img src={LOGO} alt="logo"/>
        </div>
        <div className="link-holder">
          <a href="/">Home</a>
          <a href="Doctors">Doctor</a>
          <a href="Register">Register</a>
          <a href="Login">Login</a>
          <a href="Profile">Profile</a>
        </div>
      </nav>
      {/* <Header /> */}
      <LoginForm role="user" title="User Login" />
    </div>
  );
}

export default Login;
