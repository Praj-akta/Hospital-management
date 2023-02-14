import React, { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import loginImg from "../assets/login-img.png";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onsubmit(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err)
        if(err.code === "auth/user-not-found") {
          alert("User does not exists.");
        } else if(err.code === "auth/wrong-password") {
          alert("Password is incorrect.");
        }
      });
  }
  return (
    <div>
      <div className="row login-form">
        <div className="col-sm-12 col-lg-6 col-md-4 p-0">
          <div className="login-img-holder">
            <img src={loginImg} alt="login-img"></img>
          </div>
        </div>
        <div className="col-sm-12 col-lg-6 col-md-8 p-0">
          <div className="login-form-holder">
            <form onSubmit={onsubmit} name="login_form">
              <h3>Member Login</h3>
              <label>Email:</label>
              <br />
              <input
                className="form-control"
                type="email"
                value={email}
                required
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <br></br>
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
              <br></br>

              <button type="submit" className="login-btn">
                Login
              </button>
            </form>
            <div>
              {" "}
              Dont have an Account? &nbsp;<a href="/register">
                Register Here
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
