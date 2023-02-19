import React from "react";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import "./login.css";

function Login() {
  return (
    <div>
      <Header />
      <LoginForm role="user" title="User Login" />
    </div>
  );
}

export default Login;
