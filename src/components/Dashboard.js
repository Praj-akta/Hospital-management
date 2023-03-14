import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "../Admin/index.scss";

function Dashboard({ title }) {
  const userMenuItems = useSelector(state => state.userMenuItems)

  return (
    <div className="content">
      <div className="heading">
        <h3>Dashboard</h3>
        <p className="breadcrumbs">
          {title} {">"} <span className="curr-page">Dashboard</span>{" "}
        </p>
      </div>
      <div className="dashboard-content">
        {
          userMenuItems && userMenuItems.length > 0 
          ? userMenuItems.map((value, index) => {
            return (
              <div className="col-12 col-sm-12 col-md-6 col-lg-4" key={index}>
              <div className={`div${index + 1}`}>
                {value.iconName}
                <Link to={value.url}>
                  <h5>{value.name}</h5>
                </Link>
              </div>
            </div>
            )
          })
          : null
        }
      </div>
    </div>
  );
}

export default Dashboard;
