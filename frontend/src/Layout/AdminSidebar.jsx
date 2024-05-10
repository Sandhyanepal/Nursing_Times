import React from 'react'
import { Link, Navigate } from 'react-router-dom'

const AdminSidebar = () => {

  function logout(){
    localStorage.clear();
    Navigate('/login')
}

  return (

    <div className=' bg-gray-300 flex flex-col justify-between p-4' style={{ height: "100vh" }}>

      <div>

        <div className='topbar flex p-6'>

          <Link to='/' className="logo font-bold text-4xl">Nursing<span className='text-yellow-500'>Times</span></Link>

          <div className='close text-3xl hidden' id='close-btn'>
            <i className="fa-solid fa-xmark"></i>
          </div>

        </div>


        <div className="sidebar mt-10 ">

          <ul className='pl-8'>

            <li className='py-2'><Link to='/' className='py-3'>
              <i className="fa-solid fa-house text-xl"></i>
              <span className='text-lg pl-5'>Homepage</span>
            </Link></li>

            <li className='py-2' ><Link to='adminusers' className=' '>
              <i className="fa-regular fa-user text-xl" />
              <span className='text-lg pl-6'>Users</span>
            </Link></li>

            <li className='py-2'><Link to='adminposts' className=' '>
              <i className="fa-regular fa-newspaper text-xl"></i>
              <span className='text-lg pl-5'>Posts</span>
            </Link></li>

            <li className='py-2'><Link to='adminmessage' className=' '>
              <i class="fa-regular fa-envelope text-xl"></i>
              <span className='text-lg pl-5'>Message</span>
            </Link></li>

            <li className='py-2'><Link to='category' className='  '>
              <i className="fa-regular fa-newspaper text-xl"></i>
              <span className='text-lg pl-5'>Category</span>
            </Link></li>

            <li className='py-2'><Link to='' className=''>
              <i className="fa-solid fa-gear text-xl"></i>
              <span className='text-lg pl-5'>Settings</span>
            </Link></li>

          </ul>
        </div>
      </div>


      <Link to='' className='pl-8 pb-6' onClick={logout}>
        <i className="fa-solid fa-right-from-bracket text-xl" />
        <span className='text-lg pl-5'>Logout</span>
      </Link>

    </div>



  )
}

export default AdminSidebar
