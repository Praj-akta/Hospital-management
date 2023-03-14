import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import { useLocation, useNavigate } from "react-router-dom";
import "../../Login/login.scss";
import {
  arrayUnion,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import AdminSidebar from "../AdminSidebar";
import AdminHeader from "../AdminHeader";
import { ref, set } from "firebase/database";

function EditPatient() {
  const navigate = useNavigate();
  const { state } = useLocation();
  //   console.log("aaa", state);
  const [err, setErr] = useState(null);
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDateOfBirth] = useState("");
  const [patient, setPatients] = useState();
  const [userId, setUserId] = useState(null);
  const _userId = doc(db, "users/", `${state?.id}`);
  useEffect(() => {
    if (state) {
      setEmail(state.email);
      setFirstname(state.firstname);
      setLastName(state.lastname);
      setDateOfBirth(state.dob);
      setAddress(state.address);
      setUserId(state.id);
    }
    getDocs(collection(db, "users")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => doc.data().user);
      console.log(newData);
      setPatients(newData);
      // console.log(newData)
    });
  }, []);

  async function onSubmit(e) {
    e.preventDefault();
    // console.log(firstname);
    updateDoc(_userId, {
      user: {
        firstname,
        lastname,
        email,
        dob,
        address,
      },
    }).then(() => navigate("/admin/patients"));
  }

  return (
    <div className="admin-dashboard">
      <AdminSidebar />
      <div className="admin-header">
        <AdminHeader />
        <div className="row login-form register-form">
          <h3>EditPatient</h3>
          <div className="col-sm-10 col-lg-6 col-xl-6 col-md-8 p-0 login-form-container">
            <div className="login-form-holder">
              <form onSubmit={onSubmit} name="registerform">
                {err && <p className="err">{err}</p>}
                <label>First Name:</label>
                <br />
                <input
                  className="form-control"
                  type="text"
                  value={firstname}
                  required
                  placeholder="Enter your First Name"
                  onChange={(e) => setFirstname(e.target.value)}
                />
                <label>Last Name:</label>
                <br />
                <input
                  className="form-control"
                  type="text"
                  value={lastname}
                  required
                  placeholder="Enter your Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                />{" "}
                <label>Email:</label>
                <br />
                <input
                  className="form-control"
                  type="email"
                  value={email}
                  placeholder="Enter your email"
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
                  placeholder="Enter your Address"
                  onChange={(e) => setAddress(e.target.value)}
                />
                <label>Date Of Birth:</label>
                <br />
                <input
                  className="form-control"
                  type="date"
                  value={dob}
                  required
                  placeholder="Enter your Date Of Birth"
                  onChange={(e) => setDateOfBirth(e.target.value)}
                />
                <button type="submit" className="login-btn">
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditPatient;
