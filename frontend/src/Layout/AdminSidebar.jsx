import React from 'react'
import { Link } from 'react-router-dom'

const AdminSidebar = () => {



  return (

    <div className=' bg-gray-300 flex flex-col justify-between p-4' style={{ height: "100vh" }}>

      <div>

        <div className='topbar flex '>

          <Link to='/' className="logo font-bold text-3xl">Nursing<span className='text-yellow-500'>Times</span></Link>

          <div className='close text-3xl hidden' id='close-btn'>
            <i className="fa-solid fa-xmark"></i>
          </div>

        </div>


        <div className="sidebar mt-14 ">

          <ul className='m-8'>

            <li><Link to='/' className='flex items-center gap-3 my-4'>
              <i className="fa-solid fa-house"></i>
              <h1>Homepage</h1>
            </Link></li>

            <li><Link to='adminusers' className='flex items-center gap-3 my-4'>
              <i className="fa-regular fa-user" />
              <h1>Users</h1>
            </Link></li>

            <li><Link to='adminposts' className='flex items-center gap-3 my-4'>
              <i className="fa-regular fa-newspaper"></i>
              <h1>Posts</h1>
            </Link></li>

            <li><Link to='' className='flex items-center gap-3 my-4'>
              <i class="fa-regular fa-envelope"></i>
              <h1>Message</h1>
            </Link></li>

            <li><Link to='category' className='flex items-center gap-3 my-4'>
              <i className="fa-regular fa-newspaper"></i>
              <h1>Category</h1>
            </Link></li>

            <li><Link to='' className='flex items-center gap-3 my-4'>
              <i className="fa-solid fa-gear"></i>
              <h1>Settings</h1>
            </Link></li>

            {/* <li><Link to='' className='flex items-center gap-3 my-4 absolute bottom-8'>
            <i className="fa-solid fa-right-from-bracket" />
            <h1>Logout</h1>
          </Link></li> */}
          </ul>
        </div>
      </div>


      <Link to='' className='flex items-center '>
        <i className="fa-solid fa-right-from-bracket" />
        <h1>Logout</h1>
      </Link>

    </div>



  )
}

export default AdminSidebar
