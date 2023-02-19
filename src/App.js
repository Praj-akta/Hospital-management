
import Login from "./Login/login";
import AdminLogin from "./Login/AdminLogin";
import DoctorLogin from "./Login/DoctorsLogin";
import Home from "./Home/home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Register from "./Register/register";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/admin-login" element={<AdminLogin />}></Route>
          <Route path="/doctor-login" element={<DoctorLogin />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
