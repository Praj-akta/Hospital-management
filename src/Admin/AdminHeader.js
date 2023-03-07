import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./index.scss";

function AdminHeader() {
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    navigate("/");
  }

  return (
    <div className="navbar admin-navbar">
      <div>
        <Link to="/">Hospital Management System</Link>
      </div>
      <div>
        <Dropdown>
          <Dropdown.Toggle variant="transparent">Admin</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="/change-password">Change Password</Dropdown.Item>
            <Dropdown.Item onClick={_ => onLogout()}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default AdminHeader;
