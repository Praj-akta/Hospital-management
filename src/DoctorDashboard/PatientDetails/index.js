import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Dashboard/Sidebar";
import DashboardHeader from "../../components/Dashboard/DashboardHeader";
import "./index.scss";
import { useLocation } from "react-router-dom";

function PatientDetails() {
  const navigate = useNavigate();
  const { state } = useLocation();
  // const today = new Date();
  // const dob = Date(state.userDetails.dob)
  // const age = today.getFullYear() - dob.getFullYear()
  // console.log(age)

  return (
    <div className="admin-dashboard doctor-dashboard">
      <Sidebar title="Doctor" />
      <div className="admin-header">
        <DashboardHeader />
        <div className="content">
          <div className="patient-details">
            <h2>Patient Details</h2>
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
                <td>{state.userDetails.date}</td>
              </tr>
            </table>
            <button
              type="submit"
              onClick={(_) => navigate("/doctor-dashboard/add-medical-history")}
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
