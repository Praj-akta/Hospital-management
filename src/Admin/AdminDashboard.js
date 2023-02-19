import React from "react";
import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div className="content">
      <h3>Dashboard</h3>
      <p className="breadcrumbs">
        Admin {">"} <span className="curr-page">Dashboard</span>{" "}
      </p>
      <div className="dashboard-content">
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="div1">
            <Link to="/admin/doctors">Doctors</Link>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="div2">
            <Link to="/admin/patients">Patients</Link>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="div3">
            <Link>Users</Link>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="div4">
            <Link>Reports</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
