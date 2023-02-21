import React, { useState } from "react";
import { Table } from "react-bootstrap";
import AdminHeader from "../AdminHeader";
import AdminSidebar from "../AdminSidebar";
import "../index.scss";

function Doctors() {
  const [docname, setDocname] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [fees, setFees] = useState("");

  return (
    <div className="admin-dashboard">
      <AdminSidebar />
      <div className="admin-header">
        <AdminHeader />
        <div className="content">
          <div className="heading doctors-heading">
            <h3>Add Doctor</h3>
            <p className="breadcrumbs">
              Admin {">"} <span className="curr-page">Add Doctor</span>{" "}
            </p>
          </div>
          <div className="add_doc_container">
            <form>
              <label>Name:</label>
              <br />
              <input
                className="form-control"
                type="text"
                value={docname}
                required
                placeholder="Enter Doctor's Name"
                onChange={(e) => setDocname(e.target.value)}
              />
              <br />

              <label>Speciality:</label>
              <br />
              <input
                className="form-control"
                type="text"
                value={speciality}
                required
                placeholder="Enter Doctor's Speciality"
                onChange={(e) => setSpeciality(e.target.value)}
              />
              <br />

              <label>Email:</label>
              <br />
              <input
                className="form-control"
                type="email"
                value={email}
                required
                placeholder="Enter Doctor's Email:"
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />

              <label>Phone:</label>
              <br />
              <input
                className="form-control"
                type="tel"
                value={phone}
                required
                placeholder="Enter Doctor's Contact No:"
                onChange={(e) => setPhone(e.target.value)}
              />
              <br />

              <label>Clinic Address:</label>
              <br />
              <textarea
                className="form-control"
                value={address}
                required
                placeholder="Enter Doctor's Clinic Address:"
                onChange={(e) => setAddress(e.target.value)}
              />
              <br />

              <label>Consultancy Fees:</label>
              <input
                className="form-control"
                type="text"
                value={fees}
                required
                placeholder="Enter Consultancy Fees:"
                onChange={(e) => setFees(e.target.value)}
              />
              <br />

              {/* <label>Password:</label>
              <br />
              <input
                className="form-control"
                type="password"
                value={password}
                required
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />

              <label>Confirm Password:</label>
              <br />
              <input
                className="form-control"
                type="password"
                value={confirmPassword}
                required
                placeholder="Confirm password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <br /> */}

              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="manage_doc_container">
            <div className="heading doctors-heading">
            <h3>Manage Doctor</h3>
            {/* <p className="breadcrumbs">
              Admin {">"} <span className="curr-page">Manage Doctor</span>{" "}
            </p> */}
          </div>
            <Table responsive stripedble>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Specialization</th>
                  <th>Doctor Name</th>
                  <th>Email</th>
                  <th>Phone No</th>
                  <th>Action</th>
                </tr>
              </thead>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doctors;
