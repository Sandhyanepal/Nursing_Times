import React from 'react'
import { Link } from 'react-router-dom'

const AdminSidebar = () => {



  return (
<<<<<<< HEAD
    <div className=' bg-gray-300 relative' style={{height:"100vh"}}>


      <div className='topbar flex gap-8 m-8'>

        <div className="logo font-bold text-3xl">Nursing<span className='text-yellow-500'>Times</span></div>

        <div className='close text-3xl hidden' id='close-btn'>
          <i className="fa-solid fa-xmark"></i>
        </div>

      </div>


      <div className="sidebar mt-14 ">

        <ul className='m-8'>
          
          <li><Link to='/users' className='flex items-center gap-3 my-4'>
          <i className="fa-regular fa-user"/>           
          <h1>Users</h1>
          </Link></li>

          <li><Link to='/posts' className='flex items-center gap-3 my-4'>
            <i className="fa-regular fa-newspaper"></i>
            <h1>Posts</h1>
          </Link></li>

          <li><Link to='/posts' className='flex items-center gap-3 my-4'>
          <i class="fa-regular fa-envelope"></i>
            <h1>Message</h1>
          </Link></li>

          <li><Link to='/admin/category' className='flex items-center gap-3 my-4'>
            <i className="fa-regular fa-newspaper"></i>
            <h1>Category</h1>
          </Link></li>

          <li><Link to='/admin/category' className='flex items-center gap-3 my-4 absolute bottom-8'>
          <i className="fa-solid fa-right-from-bracket"/>
            <h1>Logout</h1>
          </Link></li>
        </ul>
      </div>
=======
    <div className='w-1/5 p-4 bg-gray-400' style={{minHeight: '100vh'}}>
      <Link to='/admindashboard' className='text-center text-white font-bold text-xl'>Admin Dashboard</Link>
      <ul className='text-white font-bold'>
        <li><Link to='/admin/posts' >Posts</Link></li>
        <li><Link to='/admin/category'>Category</Link></li>
        <li><Link to='/users'>Users</Link></li>
      </ul>
>>>>>>> 4290a295031abd3f64b7a95f8920170267458a8a


    </div>



  )
}

export default AdminSidebar
