import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Dashboard/Sidebar";
import DashboardHeader from "../../components/Dashboard/DashboardHeader";
import "./index.scss";

function PatientDetails() {
  const navigate = useNavigate();

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
                <td>Tesha</td>
                <th>Patient Email:</th>
                <td>pateltesha1512@gmail.com</td>
              </tr>
              <tr>
                <th>Patient Mobile:</th>
                <td>123-456-7890</td>
                <th>Patient Adress:</th>
                <td>54 King Street, Kitchener</td>
              </tr>
              <tr>
                <th>Gender:</th>
                <td>Female</td>
                <th>Age:</th>
                <td>20</td>
              </tr>
              <tr>
                <th>Medical History(if any):</th>
                <td>NA</td>
                <th>Appointment Date and Time</th>
                <td>2023-04-12 12:45 </td>
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
