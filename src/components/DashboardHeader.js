import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../Admin/index.scss";

function DashboardHeader() {
  const title = localStorage.getItem("role");
  const navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <div className="navbar admin-navbar">
      <div>
        <Link to="/">Hospital Management System</Link>
      </div>
      <div>
        <Dropdown>
          <Dropdown.Toggle variant="transparent">
            {title && title.toLocaleLowerCase()}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {title === "admin" && (
              <Dropdown.Item href="/change-password">
                Change Password
              </Dropdown.Item>
            )}
            <Dropdown.Item onClick={(_) => onLogout()}>Logout</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default DashboardHeader;
