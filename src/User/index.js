import React from "react";
import Sidebar from "../components/Sidebar";
import Dashboard from "../components/Dashboard";
import DashboardHeader from "../components/DashboardHeader";

function User() {
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const userEmail = localStorage.getItem("email");
  //   if(!userEmail || userEmail !== "admin@email.com") {
  //     navigate("/admin-login");
  //   }
  // }, [navigate]);

  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="admin-header">
        <DashboardHeader />
        <Dashboard title="User" />
      </div>
    </div>
  );
}

export default User;
