import React from "react";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import "./login.scss";

function Login() {
  return (
    <div className="body-main">
      <Header />
      <LoginForm role="user" title="User Login" />
    </div>
  );
}

export default Login;
