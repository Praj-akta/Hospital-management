import React from "react";
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
    <header>
      <nav className="navbar">
        <h1>Hospital Management System</h1>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/register">Register</a>
          </li>
          <li>
            <a href="/">Doctors</a>
          </li>
          {/* <li>
            <a href="/" onClick={_ => logout()}>Logout</a>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
