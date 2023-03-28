
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
import DoctorDashboard from "./DoctorDashboard";
import PatientLogin from "./Login/PatientLogin";
import Appointments from "./User/Appointments";
import AddDoctor from "./Admin/Doctors/AddDoctor";
import BookAppointment from "./User/BookAppointment";
import AdminAppointments from "./Admin/Appointments";
import EditDoctors from "./Admin/Doctors/editDoctors";
import EditPatient from "./Admin/Patients/editPatients";
import ManageDoctor from "./Admin/Doctors/ManageDoctor";
import DoctorsAppointments from "./DoctorDashboard/Appointments";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import HealthForm from "./DoctorDashboard/HealthForm/HealthForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/doctor-dashboard/healthform" element={<HealthForm />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/patient-login" element={<PatientLogin />}></Route>
          <Route path="/admin-login" element={<AdminLogin />}></Route>
          <Route path="/doctor-login" element={<DoctorLogin />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route path="/change-password" element={<ChangePassword />}></Route>
          {/* admin routes */}
          <Route exact path="/admin/dashboard" element={<Admin />}></Route>
          <Route exact path="/admin/patients" element={<Patients />}></Route>
          <Route path="/admin/patients/edit" element={<EditPatient />}></Route>
          <Route exact path="/admin/doctors" element={<ManageDoctor />}></Route>
          <Route exact path="/admin/add-doctor" element={<AddDoctor />}></Route>
          <Route exact path="/admin/doctors/edit" element={<EditDoctors />}></Route>
          <Route exact path="/admin/appointments" element={<AdminAppointments />}></Route>
          
          {/* user routes */}
          <Route path="/user" element={<User />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/appointments" element={<Appointments />}></Route>
          <Route path="/book-appointment" element={<BookAppointment />}></Route>
          {/* doctor dashboard routes */}
          <Route path="/doctor-dashboard" element={<DoctorDashboard />}></Route>
          <Route path="/doctor-dashboard/appointments" element={<DoctorsAppointments />}></Route>
        </Routes> 
      </div>
    </Router>
  );
}

export default App;
