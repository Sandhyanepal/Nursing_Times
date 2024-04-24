import React from 'react'
import { Link } from 'react-router-dom'

const AdminSidebar = () => {

  

  return (
    <div className='w-1/5 p-4 bg-gray-400' style={{minHeight: '100vh'}}>
      <Link to='/admindashboard' className='text-center text-white font-bold text-xl'>Admin Dashboard</Link>
      <ul className='text-white font-bold'>
        <li><Link to='/admin/posts' >Posts</Link></li>
        <li><Link to='/admin/category'>Category</Link></li>
        <li><Link to='/users'>Users</Link></li>
      </ul>

      {/* <button className='text-orange-600'>Log Out</button> */}

    </div>

    
  )
}

export default AdminSidebar
