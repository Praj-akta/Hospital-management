import { collection, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import { db } from "../../firebase";
import AdminHeader from "../AdminHeader";
import AdminSidebar from "../AdminSidebar";
import {FaEdit} from "react-icons/fa";
import {MdDelete} from "react-icons/md";
import "../index.scss";


function ManageDoctor() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    getDocs(collection(db, "doctors")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => doc.data().doctor);
      setDoctors(newData);
    });
  }, []);

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
                  <th>Fees</th>
                  <th>Action</th>
                </tr>
              </thead>
              {doctors && doctors.length > 0 
                ? <tbody>
                  {
                    doctors.map((value, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{value.speciality}</td>
                          <td>{value.name}</td>
                          <td>{value.email}</td>
                          <td>{value.phone}</td>
                          <td>{value.fees}</td>
                          <td>
                            <FaEdit />
                            <MdDelete />
                          </td>
                      </tr>
                      )
                    })
                  }
                  </tbody> 
                : null}
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageDoctor;
