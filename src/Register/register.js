import React, { useState } from "react";
import { auth } from "../firebase";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "../Login/login.scss";
import LOGO from "../images/logo.png";

function Register() {
  const navigate = useNavigate();
  const [err, setErr] = useState(null);
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
          if (err.code === "auth/email-already-in-use") {
            setErr("Email address already exists.");
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
          dob: dob,
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
    } else setErr("Password Does Not Match");
  }

  return (
    <div className="body-main">
    <nav className="nav">
        <div className="logo">
          <img src={LOGO} alt="logo"/>
        </div>
        <div className="link-holder">
          <a href="/">Home</a>
          <a href="Doctors">Doctor</a>
          <a href="Register">Register</a>
          <a href="Login">Login</a>
          <a href="Profile">Profile</a>
        </div>
      </nav>
      {/* <Header /> */}
      <div className="row login-form register-form">
        <h3>Register</h3>
        <div className="col-sm-10 col-lg-6 col-xl-6 col-md-8 p-0 login-form-container">
          <div className="login-form-holder">
            <form onSubmit={register} name="registerform">
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
              />

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

              <label>Password:</label>
              <br />
              <input
                className="form-control"
                type="password"
                value={password}
                required
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
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

              <br />
              <button type="submit" className="login-btn">
                Register
              </button>
            </form>
            <div>
              {" "}
              Already have an Account? &nbsp;<a href="/login">
                Login Here
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
