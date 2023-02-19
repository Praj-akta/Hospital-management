import React from 'react'
import AdminHeader from '../AdminHeader';
import AdminSidebar from '../AdminSidebar';

function Patients() {
  return (
    <div className="admin-dashboard">
    <AdminSidebar />
    <div className="admin-header">
      <AdminHeader />
      <div>
        Patients page
      </div>
    </div>
  </div>
  )
}

export default Patients;