import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import "./index.scss";

function AdminSidebar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="admin-sidebar">
      <div className="navbar logo admin-navbar">
        HMS
        <img src={logo} alt="logo-bg" />
      </div>
      <ul>
        <li>
          <Link to="/admin/dashboard">Dashboard</Link>
        </li>
        <li>
          <div className="heading" onClick={(_) => setToggle(!toggle)}>
            Doctors <RiArrowDropDownLine className="arrow" />
          </div>
          {toggle && (
            <div className="children">
              <div>
                <Link to="/admin/add-doctor">Add Doctor</Link>
              </div>
              <div>
                <Link to="/admin/doctors">Manage Doctor</Link>
              </div>
            </div>
          )}
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
