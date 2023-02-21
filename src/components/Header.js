import React from "react";
// import Logo from "../images/logo.png";
// import { auth } from "../firebase";
// import { signOut } from "firebase/auth";
// import { useNavigate } from 'react-router-dom';

function Header() {
  // const navigate = useNavigate();
  // const logout = () => {
  //   signOut(auth)
  //   .then(() => navigate("/login"))
  //   .catch(err => console.log(err));
  // }
  return (
    <header className="app-header">
      <nav className="navbar">
        <h1>Hospital Management System</h1>
        <ul>
          <li> <a href="/">Home</a> </li>
          <li> <a href="/login">Login</a> </li>
          <li> <a href="/register">Register</a> </li>
          <li> <a href="/profile">Profile</a> </li>
          <li> <a href="/admin/dashboard">Admin</a> </li>
          <li> <a href="/admin/doctors">Doctors</a> </li>
          {/* <li>  <a href="/" onClick={_ => logout()}>Logout</a> </li> */}
        </ul>
      </nav>
      {/* <nav className="nav">
        <div className="logo">
          <img src={Logo} alt="logo"/>
        </div>
        <div className="link-holder">
          <a href="/">Home</a>
          <a href="doctors">Doctor</a>
          <a href="register">Register</a>
          <a href="login">Login</a>
          <a href="profile">Profile</a>
        </div>
      </nav> */}
    </header>
    
  );
}

export default Header;
