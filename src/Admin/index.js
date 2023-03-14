import React,  { useEffect }  from "react";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import AdminDashboard from "./AdminDashboard";
import { useNavigate } from "react-router-dom";
import "./index.scss";

function Admin() {
  const navigate = useNavigate();

  useEffect(() => {
    const userEmail = localStorage.getItem("email");
    if(!userEmail || userEmail !== "admin@email.com") {
      navigate("/admin-login");
    }
  }, [navigate]);

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
