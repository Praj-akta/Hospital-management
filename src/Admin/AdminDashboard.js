import React from "react";
import { Link } from "react-router-dom";
import { HiUsers } from "react-icons/hi";
import { TbReportSearch } from "react-icons/tb";
import { BsCalendarCheck } from "react-icons/bs";
import { RiStethoscopeFill } from "react-icons/ri";

function AdminDashboard() {
  return (
    <div className="content">
      <div className="heading">
        <h3>Dashboard</h3>
        <p className="breadcrumbs">
          Admin {">"} <span className="curr-page">Dashboard</span>{" "}
        </p>
      </div>
      <div className="dashboard-content">
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="div1">
            <RiStethoscopeFill />
            <Link to="/admin/doctors">
              <h3> 0 </h3>
              <h5>Doctors </h5>
            </Link>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="div2">
            <HiUsers />
            <Link to="/admin/patients">
              <h3> 0 </h3>
              <h5>Patients</h5>
            </Link>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="div3">
            <BsCalendarCheck />
            <Link>
              <h3> 0 </h3>
              <h5>Appointments</h5>
            </Link>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4">
          <div className="div4">
            <TbReportSearch />
            <Link>
              <h3> 0 </h3>
              <h5>Reports</h5>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
