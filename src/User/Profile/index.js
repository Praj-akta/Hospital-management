import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import DashboardHeader from "../../components/DashboardHeader";
import "./index.scss";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

function Profile() {
  // const navigate = useNavigate();

  const currentEmail = localStorage.getItem("email");

  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDateOfBirth] = useState("");

  useEffect(() => {
    getDocs(collection(db, "users")).then((querySnapshot) => {
      const usersData = querySnapshot.docs.map((doc) => doc.data().user);
      const currentUser = usersData.find(({ email }) => email === currentEmail);
      if(currentUser) {
        setEmail(currentUser.email);
        setFirstname(currentUser.firstname);
        setLastName(currentUser.lastname);
        setAddress(currentUser.address);
        setDateOfBirth(currentUser.dob);
      }
    });
  }, [currentEmail]);

  return (
    <div className="admin-dashboard">
      <Sidebar />
      <div className="admin-header">
        <DashboardHeader />
        <div className="content profile-form">
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
                  <br />

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
                  <br />

                  <label>Email:</label>
                  <br />
                  <input
                    className="form-control"
                    type="email"
                    value={email}
                    placeholder=""
                    required
                    disabled
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <br />

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
                  <br />

                  <label>Date Of Birth:</label>
                  <br />
                  <input
                    className="form-control"
                    type="date"
                    value={dob}
                    required
                    disabled
                    placeholder=""
                    onChange={(e) => setDateOfBirth(e.target.value)}
                  />
                  <br />

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
