import React, { useState } from "react";
import Sidebar from "../../components/Dashboard/Sidebar";
import DashboardHeader from "../../components/Dashboard/DashboardHeader";
import "../HealthForm/HealthForm.scss";

function HealthForm() {
  const [weight, setWeight] = useState("");
  const [bloodSugar, setBloodSugar] = useState("");
  const [prescription, setPrescription] = useState("");
  const [bloodPressure, setBloodPressure] = useState("");
  const [bodyTemperature, setBodyTemperature] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="admin-dashboard doctor-dashboard">
      <Sidebar title="Doctor" />
      <div className="admin-header">
        <DashboardHeader />
        <div className="content">
          <div className="HealthForm">
            <form onSubmit={handleSubmit}>
              <label>
                Blood Pressure:
                <input
                  type="text"
                  value={bloodPressure}
                  onChange={(event) => setBloodPressure(event.target.value)}
                />
              </label>
              <br />
              <label>
                Blood Sugar:
                <input
                  type="text"
                  value={bloodSugar}
                  onChange={(event) => setBloodSugar(event.target.value)}
                />
              </label>
              <br />
              <label>
                Weight:
                <input
                  type="text"
                  value={weight}
                  onChange={(event) => setWeight(event.target.value)}
                />
              </label>
              <br />
              <label>
                Body Temperature:
                <input
                  type="text"
                  value={bodyTemperature}
                  onChange={(event) => setBodyTemperature(event.target.value)}
                />
              </label>
              <br />
              <label>
                Prescription:
                <input
                  type="text"
                  value={prescription}
                  onChange={(event) => setPrescription(event.target.value)}
                />
              </label>
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HealthForm;
