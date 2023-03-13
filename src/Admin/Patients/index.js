import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { Table } from "react-bootstrap";
import AdminHeader from "../AdminHeader";
import AdminSidebar from "../AdminSidebar";
import { collection, getDocs } from "firebase/firestore";

function Patients() {
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    getDocs(collection(db, "users")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => doc.data().user);
      setPatients(newData);
    });
  }, []);

  return (
    <div className="admin-dashboard">
      <AdminSidebar />
      <div className="admin-header">
        <AdminHeader />
        <div className="content">
          <div className="heading">
            <h3>View Patient's</h3>
            <p className="breadcrumbs">
              Admin {">"} <span className="curr-page">Patient's</span>{" "}
            </p>
          </div>
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
                        <td>{value.firstname}</td>
                        <td>{value.lastname}</td>
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
