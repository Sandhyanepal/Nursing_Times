import React from 'react'
import AdminSidebar from '../../Layout/AdminSidebar'
import AdminProfile from '../../Layout/AdminProfile'

const AdminHome = () => {
  return (
    <>
      <div className='flex'>
        <AdminSidebar />
        <AdminProfile />
      </div>
      <footer className="admin- flex justify-around py-3  bg-gray-400">
        <span className='font-bold'>NursingTimes</span>
        <span className='text-xs'>&copy; Nursing Times Admin Dashboard</span>
      </footer>

    </>
  )
}

export default AdminHome
