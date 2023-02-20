import React from "react";
import AdminHeader from "../AdminHeader";
import AdminSidebar from "../AdminSidebar";
import "../index.scss";

function Doctors() {
  return (
    <div className="admin-dashboard">
      <AdminSidebar />
      <div className="admin-header">
        <AdminHeader />
        <div>
          {/* Doctors page */}
          <div className="add_doc_container">
            <h3>Add Doctor</h3>
            <form>
              <label>Name:</label>
              <br />
              <input
                className="form-control"
                type="text"
                // name="docname"
                // value={docname}
                required
                placeholder="Enter Doctor's Name"
                // onChange={(e) => setFirstname(e.target.value)}
              />
              <br />

              <label>Speciality:</label>
              <br />
              <input 
                className="form-control"
                type="text"
                // name="speciality"
                // value={speciality}
                required
                placeholder="Enter Doctor's Speciality"
                // onChange={onchange}
              />
              <br />

              <label>Email:</label>
              <br />
              <input 
                className="form-control"
                type="email"
                // name="email"
                // value={email}
                required
                placeholder="Enter Doctor's Email:"
                // onChange={onchange}
              />
              <br />

              <label>Phone:</label>
              <br />
              <input 
                className="form-control"
                type="tel"
                // name="phone"
                // value={phone}
                required
                placeholder="Enter Doctor's Contact No:"
                // onChange={onchange}
              />
              <br />

              <label>Clinic Address:</label>
              <br />
              <textarea 
                className="form-control"
                // name="address"
                // value={address}
                required
                placeholder="Enter Doctor's Clinic Address:"
                // onChange={onchange}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doctors;
