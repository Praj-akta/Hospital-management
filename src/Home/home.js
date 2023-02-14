import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./home.css";

function Home() {
  return (
    <div>
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
  );
}

export default Home;
