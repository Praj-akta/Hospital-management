import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.scss";

function AdminHeader() {
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
            <Dropdown.Item>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default AdminHeader;
