import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import AdminHeader from "../AdminHeader";
import AdminSidebar from "../AdminSidebar";

function Patients() {
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/api/patients", {
      method: "get",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setPatients(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="admin-dashboard">
      <AdminSidebar />
      <div className="admin-header">
        <AdminHeader />
        <div className="content">
          <h3>View Patient's</h3>
          <p className="breadcrumbs">
            Admin {">"} <span className="curr-page">Patient's</span>{" "}
          </p>
          <div>
            <Table responsive striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Date of birth</th>
                </tr>
              </thead>
              <tbody>
                {patients?.length > 0 &&
                  patients.map((value, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{value.first_name}</td>
                        <td>{value.last_name}</td>
                        <td>{value.email}</td>
                        <td>{value.gender}</td>
                        <td>{value.dob}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Patients;