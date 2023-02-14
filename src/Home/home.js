import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from 'react-router-dom';
import './home.css';

function Header() {
  return (
    <header>
    <nav className="navbar">
      <h1>Hospital Management System</h1>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
        <li>
          <a href="#">Register</a>
        </li>
        <li>
          <a href="#">Doctors</a>
        </li>
      </ul>
    </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2023 My Website</p>
    </footer>
  );
}

function Home() {
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth)
    .then(() => navigate("/login"))
    .catch(err => console.log(err));
  }
  return (
    <div>
      home
      <p onClick={_ => logout()}> Logout </p>

      <Header />
      <main>
        <div className="container">

          <h1 className="heading">Welcome to the Hospital Management System</h1>
          <div className="card">
            <h2>Patients</h2>
            <p>View and manage patient information</p>
            <button>View Patients</button>
        </div>
        <div className="card">
          <h2>Appointments</h2>
          <p>View and manage appointment schedules</p>
          <button>View Appointments</button>
        </div>
        <div className="card">
          <h2>Doctors</h2>
          <p>View and manage doctor information</p>
          <button>View Doctors</button>
        </div>
      </div>
      </main>
      <Footer />

    </div>
  )
}

export default Home