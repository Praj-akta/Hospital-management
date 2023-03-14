import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import DashboardHeader from "../../components/DashboardHeader";
import "./index.scss";
import { Dropdown, Option } from "./Dropdown";

function BookAppointment() {

    const [optionValue, setOptionValue] = useState("");
    const handleSelect = (e) => {
      console.log(e.target.value);
      setOptionValue(e.target.value);
    };

    const [selectedService, setSelectedService] = useState('');
    const handleServiceChange = (event) => {
      setSelectedService(event.target.value);
    };

    const [appointmentTime, setAppointmentTime] = useState('');
      const handleTimeChange = (event) => {
        setAppointmentTime(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(`Appointment time: ${appointmentTime}`);
      console.log(`Selected service: ${selectedService}`);
  };

  const [doctors, setDoctors] = useState("");
  const [fees, setFees] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="admin-header">
        <DashboardHeader />  

              <div className="content appointment-form">
                <div className="row appointment-form">
                  <div className="col-sm-12 col-lg-6 p-0">
                    <div className="appointment-form-holder">

                      <form name="appointment-form" onSubmit={handleSubmit}>
                        <h3>Book Appointment</h3>

                        <div>
                          <Dropdown
                            formLabel="Doctor Specialization:"
                            className="form-control"
                            required
                            placeholder="Click to see options"
                            buttonText=""
                            onChange={handleSelect}
                            action="https://jsonplaceholder.typicode.com/posts"
                          >

                            <Option value="Select Services">Click to see options</Option>
                            <Option value="ENT">ENT</Option>
                            <Option value="Neurologists">Neurologists</Option>
                            <Option value="Orthopedics">Orthopedics</Option>
                            <Option value="Pedicure">Pedicure</Option>
                          </Dropdown>
                          {/* <p>You selected {optionValue} </p> */}
                        </div>
                        <br />

                        <label>Doctor:</label>
                        <br />
                        <input
                          className="form-control"
                          type="text"
                          value={doctors}
                          required
                          placeholder=""
                          onChange={(e) => setDoctors(e.target.value)}
                        />
                        <br />

                        <label>Consultancy Fees:</label>
                        <br />
                        <input
                          className="form-control"
                          type="text"
                          value={fees}
                          required
                          placeholder=""
                          onChange={(e) => setFees(e.target.value)}
                        />
                        <br />

                        <label>Date:</label>
                        <br />
                        <input
                          className="form-control"
                          type="date"
                          value={date}
                          required
                          placeholder=""
                          onChange={(e) => setDate(e.target.value)}
                        />
                        <br />

                        <label>Appointment Time:</label>
                        <br />
                        <input 
                          className="form-control"
                          type="time" 
                          required
                          value={appointmentTime} 
                          onChange={handleTimeChange} 
                        />
                        <br />

                        <br />
                        <button type="submit" className="login-btn">
                          Schedule Appointment
                        </button>

                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

  );
}

export default BookAppointment;
