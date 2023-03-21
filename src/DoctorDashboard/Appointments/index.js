import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { Table } from "react-bootstrap";
import Sidebar from "../../components/Dashboard/Sidebar";
import { collection, getDocs } from "firebase/firestore";
import DashboardHeader from "../../components/Dashboard/DashboardHeader";
import "./index.scss";

function Appointments() {
  const [list, setList] = useState(null);
  const currentEmail = localStorage.getItem("email");
  useEffect(() => {
    getDocs(collection(db, "appointments")).then((querySnapshot) => {
      const _data = querySnapshot.docs.map((doc) => doc.data());
      const updatedData = _data.filter(
        ({ doctorEmail }) => doctorEmail === currentEmail
      );
      setList(updatedData);
    });
  }, [currentEmail]);

  return (
    <div className="admin-dashboard doctor-dashboard">
      <Sidebar title="Doctor" />
      <div className="admin-header">
        <DashboardHeader />
        <div className="content">
          <div className="heading doctors-heading">
            <h3>Current Appointments </h3>
            <p className="breadcrumbs">
              Admin {">"} <span className="curr-page">Manage Doctor</span>{" "}
            </p>
          </div>
          <div className="manage_doc_container">
            <Table responsive stripedble="true">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Patient Name</th>
                  <th>Date of Birth</th>
                  <th>Email</th>
                  <th>Appointment Date</th>
                  <th>Appointment Time</th>
                </tr>
              </thead>
              {list && list.length > 0 ? (
                <tbody>
                  {list.map((value, index) => {
                    console.log(value)
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{`${value.userDetails.firstname} ${value.userDetails.lastname}`}</td>
                        <td>{value.userDetails.dob}</td>
                        <td>{value.userDetails.email}</td>
                        <td>{value.date}</td>
                        <td>{value.appointmentTime}</td>
                      </tr>
                    );
                  })}
                </tbody>
              ) : null}
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointments;
