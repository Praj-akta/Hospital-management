import React, { useState } from "react";
import loginImg from "./login-img.png";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onsubmit(e) {
    e.preventDefault();
    console.log(email, password);
  }
  return (
    <div>
      <div className="row login-form">
        <div className="col-sm-12 col-lg-6 p-0">
          <div className="login-img-holder">
            <img src={loginImg}></img>
          </div>
        </div>
        <div className="col-sm-12 col-lg-6 p-0">
          <div className="login-form-holder">
            <form onSubmit={onsubmit} name="login_form">
              <h3>Member Login</h3>
              <label>Email:</label>
              <br />
              <input className="form-control"
                type="email"
                value={email}
                required
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <br></br>
              <label>Password:</label>
              <br />
              <input className="form-control"
                type="password"
                value={password}
                required
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <br></br>

              <button type="submit" className="login-btn">Login</button>
            </form>
          </div>
        </div>  
      </div>
    </div>
  );
}

export default Login;
