import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import DashboardHeader from "../../components/DashboardHeader";
import "./index.css";

function Profile() {
  // const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDateOfBirth] = useState("");

  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="admin-header">
        <DashboardHeader />
        <div className="content">
          <div className="row login-form">
            <div className="col-sm-12 col-lg-6 p-0">
              <div className="login-form-holder">
                <form name="editProfile">
                  <h3>Edit Profile</h3>

                  <label>First Name:</label>
                  <br />

                  <input
                    className="form-control"
                    type="text"
                    value={firstname}
                    required
                    placeholder=""
                    onChange={(e) => setFirstname(e.target.value)}
                  />

                  <label>Last Name:</label>
                  <br />
                  <input
                    className="form-control"
                    type="text"
                    value={lastname}
                    required
                    placeholder=""
                    onChange={(e) => setLastName(e.target.value)}
                  />

                  <label>Email:</label>
                  <br />
                  <input
                    className="form-control"
                    type="email"
                    value={email}
                    placeholder=""
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <label>Address:</label>
                  <br />
                  <input
                    className="form-control"
                    type="text"
                    value={address}
                    required
                    placeholder=""
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <label>Date Of Birth:</label>
                  <br />
                  <input
                    className="form-control"
                    type="date"
                    value={dob}
                    required
                    placeholder=""
                    onChange={(e) => setDateOfBirth(e.target.value)}
                  />

                  

                  <br />
                  <button type="submit" className="login-btn">
                    Save
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

export default Profile;
