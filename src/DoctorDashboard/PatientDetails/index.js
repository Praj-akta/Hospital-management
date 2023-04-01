import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import Sidebar from "../../components/Dashboard/Sidebar";
import { useNavigate, useLocation } from "react-router-dom";
import DashboardHeader from "../../components/Dashboard/DashboardHeader";
import "./index.scss";
import { Table } from "react-bootstrap";

function PatientDetails() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [selectedUserDetails, setUserDetails] = useState(null);

  useEffect(() => {
    getDocs(collection(db, "users")).then((querySnapshot) => {
      const data = querySnapshot.docs
        .find((doc) => doc.data().user.email === state.userDetails.email)
        ?.data()?.user;
      setUserDetails(data);
    });
  });

  return (
    <div className="admin-dashboard doctor-dashboard">
      <Sidebar title="Doctor" />
      <div className="admin-header">
        <DashboardHeader />
        <div className="content">
          <div className="patient-details">
            <h2>Patient Details</h2>
            {state && (
              <table>
                <tr>
                  <th>Patient Name:</th>
                  <td>{`${state.userDetails.firstname} ${state.userDetails.lastname}`}</td>
                  <th>Patient Email:</th>
                  <td>{state.userDetails.email}</td>
                </tr>
                <tr>
                  <th>Patient Mobile:</th>
                  <td>123-456-7890</td>
                  <th>Patient Address:</th>
                  <td>{state.userDetails.address}</td>
                </tr>
                <tr>
                  <th>Gender:</th>
                  <td>Male</td>
                  <th>Date of Birth:</th>
                  <td>{state.userDetails.dob}</td>
                </tr>
                <tr>
                  <th>Medical History(if any):</th>
                  <td>NA</td>
                  <th>Appointment Date and Time</th>
                  <td>
                    {state.date} <strong> at </strong> {state.appointmentTime}
                  </td>
                </tr>
              </table>
            )}

            <h2>Medical History</h2>

            <Table responsive stripedble="true">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Blood Pressure</th>
                  <th>Blood Sugar</th>
                  <th>Body Temperature</th>
                  <th>Prescription</th>
                  <th>Lab Tests</th>
                  <th>Lab Test Results</th>
                </tr>
              </thead>
              {selectedUserDetails &&
              selectedUserDetails.medicalReports.length > 0 ? (
                <tbody>
                  {selectedUserDetails.medicalReports.map((value, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{value.bloodPressure}</td>
                        <td>{value.bloodSugar}</td>
                        <td>{value.bodyTemperature}</td>
                        <td>{value.prescription}</td>
                        <td>{value.labTestName ? value.labTestName : "-"}</td>
                        <td>{value.labTestStatus ? value.labTestStatus : "-"}</td>
                      </tr>
                    );
                  })}
                </tbody>
              ) : (
                <tbody>
                  <tr>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                </tbody>
              )}
            </Table>

            <button
              type="submit"
              onClick={(_) =>
                navigate("/doctor-dashboard/add-medical-history", {
                  state: state,
                })
              }
            >
              Add Medical History
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PatientDetails;
