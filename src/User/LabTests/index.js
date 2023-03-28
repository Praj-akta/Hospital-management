import React from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import DashboardHeader from "../../components/Dashboard/DashboardHeader";

function LabTests() {
  return (
    <div className="admin-dashboard user-dashboard">
      <Sidebar />
      <div className="admin-header">
        <DashboardHeader />
        <div className="content">
            
        </div>
      </div>
    </div>
  );
}

export default LabTests;
