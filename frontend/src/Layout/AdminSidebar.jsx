import React from 'react'
import { Link, Navigate } from 'react-router-dom'

const AdminSidebar = () => {

  function logout(){
    localStorage.clear();
    Navigate('/login')
}

  return (

    <div className=' bg-gray-300 flex flex-col justify-between p-4 pl-2' style={{ height: "100vh" }}>
      <div>
        <div className='topbar flex '>
          <Link to='/' className="logo font-bold text-4xl p-6">Nursing<span className='text-yellow-500'>Times</span></Link>
          <Link to='/' className="logo1 font-bold text-4xl pt-6">N<span className='text-yellow-500'>T</span></Link>
          {/* <div className='close text-3xl hidden' id='close-btn'>
            <i className="fa-solid fa-xmark"></i>
          </div> */}
        </div>

      {/* Sidebar */}
        <div className="adminside mt-10 ">
          <ul className='md:pl-8 pl-3'>

            <li className='py-2'><Link to='/' className=' flex'>
              <i className="fa-solid fa-house text-xl"></i>
              <h1 className='sm:text-xl text-lg pl-5'>Homepage</h1>
            </Link></li>

            <li className='py-2' ><Link to='adminusers' className='flex '>
              <i className="fa-regular fa-user text-xl" />
              <h1 className='sm:text-xl text-lg pl-6'>Users</h1>
            </Link></li>

            <li className='py-2'><Link to='adminposts' className='flex '>
              <i className="fa-regular fa-newspaper text-xl"></i>
              <h1 className='sm:text-xl text-lg pl-5'>Posts</h1>
            </Link></li>

            <li className='py-2'><Link to='adminmessage' className=' flex'>
              <i class="fa-regular fa-envelope text-xl"></i>
              <h1 className='sm:text-xl text-lg pl-5'>Message</h1>
            </Link></li>

            <li className='py-2'><Link to='category' className='flex  '>
              <i className="fa-regular fa-newspaper text-xl"></i>
              <h1 className='sm:text-xl text-lg pl-5'>Category</h1>
            </Link></li>

            <li className='py-2'><Link to='' className='flex'>
              <i className="fa-solid fa-gear text-xl"></i>
              <h1 className='sm:text-xl text-lg pl-5'>Settings</h1>
            </Link></li>

          </ul>
        </div>
      </div>

      <Link to='' className='adminside md:pl-8 pb-6 flex pl-3' onClick={logout}>
        <i className="fa-solid fa-right-from-bracket text-2xl" />
        <h1 className='sm:text-xl text-lg pl-5'>Logout</h1>
      </Link>

    </div>

  )
}

export default AdminSidebar
