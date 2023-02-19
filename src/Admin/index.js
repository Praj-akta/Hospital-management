import React from "react";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import AdminDashboard from "./AdminDashboard";
import "./index.scss";

function Admin() {
  return (
    <div className="admin-dashboard">
      <AdminSidebar />
      <div className="admin-header">
        <AdminHeader />
        <AdminDashboard />
      </div>
    </div>
  );
}

export default Admin;
