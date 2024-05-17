import React from 'react'
import AdminSidebar from './AdminSidebar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className='flex'>

      <div className="w-1/5 fixed top-0 h-screen">

        <AdminSidebar />
      </div>
      <div className="w-1/5 ">

      </div>

      <div className="w-3/4">
        <Outlet />

      </div>


    </div>
  )
}

export default AdminLayout
