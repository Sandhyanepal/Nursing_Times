import React from 'react'
import AdminSidebar from '../Layout/AdminSidebar'

const AdminDashboard = () => {
    return (
        <div className='flex mt-10 '>
            <AdminSidebar />
            <div className='w-3/4 bg-green-400 p-5'>
                <h1 className='text-center'>Welcome to Admin Dashboard</h1>
            </div>
        </div>
    )
}

export default AdminDashboard
