import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "./index.scss";

function AdminSidebar() {
  return (
    <div className="admin-sidebar">
      <div className="navbar logo">
        HMS
        <img src={logo} alt="logo-bg" />
      </div>
      <ul>
        <li>
          <Link to="/admin/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/doctors">Doctors</Link>
        </li>
        <li>
          <Link to="/admin/patients">Patients</Link>
        </li>
        <li>
          <Link to="/admin/dashboard">Appointments</Link>
        </li>
        <li>
          <Link>Reports</Link>
        </li>
      </ul>
    </div>
  );
}

export default AdminSidebar;
