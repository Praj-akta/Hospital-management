import React, { useState } from "react";
import { auth } from "../firebase";
import loginImg from "../assets/login-img.png";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "../Profile/profile.css";
import LOGO from "../images/logo.png";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDateOfBirth] = useState("");

  function register(e) {
    e.preventDefault();
    if (password === confirmPassword) {
      //firebase create with email password
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => navigate("/login"))
        .catch((err) => {
          if(err.code === "auth/email-already-in-use") {
            alert("Email address already exists.")
          }
        });

      //post register details to sql database
      fetch("http://localhost:3002/api/addUser", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname: firstname,
          lastname: lastname,
          email: email,
          address: address,
          dob: dob
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
    } 
    else alert("Password Does Not Match");
  }

  return (
    <div className="body-main">
      <nav className="nav">
          <div className="logo">
            <img src={LOGO} />
          </div>
          <div className="link-holder">
            <a href="/">Home</a>

            <a href="">Doctor</a>

            <a href="Register">Register</a>
            <a href="Login">Login</a>
            <a href="Profile">Profile</a>
          </div>
        </nav>

      <div className="row login-form">
        
        <div className="col-sm-12 col-lg-6 p-0">
          <div className="login-form-holder">
            <form onSubmit={register} name="registerform">
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
  );
}

export default Register;
