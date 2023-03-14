
import User from "./User";
import Admin from "./Admin";
import Home from "./Home/home";
import Login from "./Login/login";
import Patients from "./Admin/Patients";
import Profile from "./User/Profile";
import Register from "./Register/register";
import AdminLogin from "./Login/AdminLogin";
import ChangePassword from "./ChangePassword";
import DoctorLogin from "./Login/DoctorsLogin";
import AddDoctor from "./Admin/Doctors/AddDoctor";
import BookAppointment from "./User/BookAppointment";
import ManageDoctor from "./Admin/Doctors/ManageDoctor";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import EditPatient from "./Admin/Patients/editPatients";
import EditDoctors from "./Admin/Doctors/editDoctors";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/admin-login" element={<AdminLogin />}></Route>
          <Route path="/doctor-login" element={<DoctorLogin />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route path="/change-password" element={<ChangePassword />}></Route>
          {/* admin routes */}
          <Route exact path="/admin/dashboard" element={<Admin />}></Route>
          <Route exact path="/admin/patients" element={<Patients />}></Route>
          <Route exact path="/admin/doctors" element={<ManageDoctor />}></Route>
          <Route exact path="/admin/add-doctor" element={<AddDoctor />}></Route>
          <Route exact path="/admin/doctors/edit" element={<EditDoctors />}></Route>
          {/* user routes */}
          <Route path="/user" element={<User />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/admin/patients/edit" element={<EditPatient />}></Route>
          <Route path="/book-appointment" element={<BookAppointment />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
