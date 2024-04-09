import React from 'react'
import { Link } from 'react-router-dom'

const AdminSidebar = () => {

  

  return (
    <div className='w-1/4 p-5 bg-gray-400'>
      <Link to='/admindashboard' className='text-center text-white font-bold text-xl'>Admin Dashboard</Link>
      <ul className='text-white font-bold'>
        <li><Link to='/posts' >Posts</Link></li>
        <li><Link to='/category'>Category</Link></li>
        <li><Link to='/users'>Users</Link></li>
      </ul>
    </div>

    
  )
}

export default AdminSidebar
