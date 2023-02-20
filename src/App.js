
import Home from "./Home/home";
import Login from "./Login/login";
import Admin from "./Admin";
import Doctors from "./Admin/Doctors";
import Patients from "./Admin/Patients";
import Register from "./Register/register";
import AdminLogin from "./Login/AdminLogin";
import ChangePassword from "./ChangePassword";
import DoctorLogin from "./Login/DoctorsLogin";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
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
          <Route path="/change-password" element={<ChangePassword />}></Route>
          <Route exact path="/admin/dashboard" element={<Admin />}></Route>
          <Route exact path="/admin/patients" element={<Patients />}></Route>
          <Route exact path="/admin/doctors" element={<Doctors />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
