import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import loginImg from "../Login/login-img.png";
import {useNavigate} from 'react-router-dom';
import "../Login/login.css";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function register(e) {
    e.preventDefault();
    console.log(email, password);
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate("/login")
        })
        .catch((err) => console.log(err.message));
    } else alert("Password Does Not Match");
  }
  return (
    <div>
      <div className="row login-form">
        <div className="col-sm-12 col-lg-6 p-0">
          <div className="login-img-holder">
            <img src={loginImg} alt="register-img"></img>
          </div>
        </div>
        <div className="col-sm-12 col-lg-6 p-0">
          <div className="login-form-holder">
            <form onSubmit={register} name="registerform">
              <h3>Register</h3>
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
            <div> Already have an Account? &nbsp;<a href="/login">Login Here</a> </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;