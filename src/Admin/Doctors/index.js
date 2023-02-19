import React from 'react'
import AdminHeader from '../AdminHeader';
import AdminSidebar from '../AdminSidebar';

function Doctors() {
  return (
    <div className="admin-dashboard">
      <AdminSidebar />
      <div className="admin-header">
        <AdminHeader />
        <div>
          Doctors page
        </div>
      </div>
    </div>
  )
}

export default Doctors;