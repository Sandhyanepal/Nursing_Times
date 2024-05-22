import React from 'react'
import AdminSidebar from './AdminSidebar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className='flex'>

      <div className="adminlayout fixed top-0 h-screen">

        <AdminSidebar />
      </div>
      <div className="emptylayout">

      </div>

      <div className="sm:ps-0 ps-4 adminoutlet">
        <Outlet />

      </div>


    </div>
  )
}

export default AdminLayout
