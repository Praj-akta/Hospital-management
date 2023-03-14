import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

function LoginForm({ title, role }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const existingRole = localStorage.getItem("role");

  const [err, setErr] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (existingRole === "admin") {
      navigate("/admin/dashboard");
    } else if (existingRole === "user") {
      navigate("/user");
    } else if (existingRole === "doctor") {
      navigate("/doctor/dashboard");
    }
  }, [existingRole, navigate]);

  function onsubmit(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((data) => {
        const { accessToken } = data.user;
        localStorage.setItem("role", role);
        localStorage.setItem("email", email);
        localStorage.setItem("token", accessToken);

        dispatch({ type: "SET_USER_DETAILS", data: { ...data.user, role } });
        if (role === "admin") {
          navigate("/admin/dashboard");
        } else if (role === "user") {
          navigate("/user");
        } else if (role === "doctor") {
          navigate("/doctor/dashboard");
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.code === "auth/user-not-found") {
          setErr("User does not exists. Kindly register or try again.");
        } else if (err.code === "auth/wrong-password") {
          setErr("Password is incorrect.");
        }
      });
  }

  return (
    <div className="login-form">
      <h3> {title} </h3>
      <div className="col-sm-10 col-lg-6 col-xl-6 col-md-8 p-0 login-form-container">
        <div className="login-form-holder">
          <form onSubmit={onsubmit} name="login_form">
            {err && <p className="err">{err}</p>}
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
          <div className="login-links">
            {(role === "admin" || role === "doctor") && (
              <Link to="/login">User Login </Link>
            )}
            {(role === "user" || role === "doctor") && (
              <Link to="/admin-login">Admin Login</Link>
            )}
            {(role === "admin" || role === "user") && (
              <Link to="/doctor-login">Doctor's Login</Link>
            )}
          </div>
          {role === "user" && (
            <div>
              {" "}
              Dont have an Account? &nbsp;<a href="/register">
                Register Here
              </a>{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
