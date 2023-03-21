import React from "react";
import Dashboard from "../components/Dashboard";
import Sidebar from "../components/Dashboard/Sidebar";
import DashboardHeader from "../components/Dashboard/DashboardHeader";
import "./index.scss";

function User() {
  return (
    <div className="admin-dashboard user-dashboard">
      <Sidebar />
      <div className="admin-header">
        <DashboardHeader />
        <Dashboard title="User" />
      </div>
    </div>
  );
}

export default User;
