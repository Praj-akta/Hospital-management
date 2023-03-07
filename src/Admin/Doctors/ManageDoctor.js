import React from "react";
import { Table } from "react-bootstrap";
import AdminHeader from "../AdminHeader";
import AdminSidebar from "../AdminSidebar";
import "../index.scss";

function ManageDoctor() {

  return (
    <div className="admin-dashboard">
      <AdminSidebar />
      <div className="admin-header">
        <AdminHeader />
        <div className="content">
          <div className="heading doctors-heading">
            <h3>Manage Doctor</h3>
            <p className="breadcrumbs">
              Admin {">"} <span className="curr-page">Manage Doctor</span>{" "}
            </p>
          </div>
          <div className="manage_doc_container">
            <Table responsive stripedble>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Specialization</th>
                  <th>Doctor Name</th>
                  <th>Email</th>
                  <th>Phone No</th>
                  <th>Action</th>
                </tr>
              </thead>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageDoctor;
