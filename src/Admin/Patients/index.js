import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { Table } from "react-bootstrap";
import AdminHeader from "../AdminHeader";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import AdminSidebar from "../AdminSidebar";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query, where  } from "firebase/firestore";

function Patients() {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);

  const onCLickEdit = (index) => {
    navigate("/admin/patients/edit", { state: patients[index] });
  };
  const onCLickDelete = async (value, index) => {
    try {
      const q = await query(
        collection(db, "users"),
        where("email", "==", "neel.gajera1431111@gmail.com")
      );
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        console.log("No matching documents");
      } else {
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
        });
      }
    } catch (error) {
      console.error("Error finding user: ", error);
    }
  };

  useEffect(() => {
    getDocs(collection(db, "users")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => {
        const id = doc.id;
        const value = doc.data().user;
        const data = { id, ...value };
        return data;
      });
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
                        <td>
                          <FaEdit onClick={() => onCLickEdit(index)} />
                          <MdDelete
                            onClick={() => onCLickDelete(value, index)}
                          />
                        </td>
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
