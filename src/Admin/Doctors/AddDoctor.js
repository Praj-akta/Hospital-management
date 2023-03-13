import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import AdminHeader from "../AdminHeader";
import AdminSidebar from "../AdminSidebar";
import "../index.scss";

function AddDoctor() {
  const navigate = useNavigate();
  const [docname, setDocname] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [fees, setFees] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    const doctor = {
      name: docname,
      address,
      email,
      phone,
      fees,
      speciality
    }
    try{
      const docRef = await addDoc(collection(db, "doctors"),{
        doctor:doctor,
      });
      console.log("Document written with ID:",docRef.id);
      navigate("/admin/doctors")  
    }
    catch(e){
      console.error("Error adding document:",e)
    }
  }


  return (
    <div className="admin-dashboard">
      <AdminSidebar />
      <div className="admin-header">
        <AdminHeader />
        <div className="content">
          <div className="heading doctors-heading">
            <h3>Add Doctor</h3>
            <p className="breadcrumbs">
              Admin {">"} <span className="curr-page">Add Doctor</span>{" "}
            </p>
          </div>
          <div className="add_doc_container">
            <form onSubmit={(e) => handleSubmit(e)}>
              <label>Name:</label>
              <br />
              <input
                className="form-control"
                type="text"
                value={docname}
                required
                placeholder="Enter Doctor's Name"
                onChange={(e) => setDocname(e.target.value)}
              />
              <br />

              <label>Speciality:</label>
              <br />
              <input
                className="form-control"
                type="text"
                value={speciality}
                required
                placeholder="Enter Doctor's Speciality"
                onChange={(e) => setSpeciality(e.target.value)}
              />
              <br />

              <label>Email:</label>
              <br />
              <input
                className="form-control"
                type="email"
                value={email}
                required
                placeholder="Enter Doctor's Email:"
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />

              <label>Phone:</label>
              <br />
              <input
                className="form-control"
                type="tel"
                value={phone}
                required
                placeholder="Enter Doctor's Contact No:"
                onChange={(e) => setPhone(e.target.value)}
              />
              <br />

              <label>Clinic Address:</label>
              <br />
              <textarea
                className="form-control"
                value={address}
                required
                placeholder="Enter Doctor's Clinic Address:"
                onChange={(e) => setAddress(e.target.value)}
              />
              <br />

              <label>Consultancy Fees:</label>
              <input
                className="form-control"
                type="text"
                value={fees}
                required
                placeholder="Enter Consultancy Fees:"
                onChange={(e) => setFees(e.target.value)}
              />
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddDoctor;
