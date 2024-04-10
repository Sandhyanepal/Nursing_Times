import React from 'react'
import { Link } from 'react-router-dom'

const AdminSidebar = () => {


  return (
    <>
    <div className='w-1/5 p-4 bg-amber-100 text-black font-bold text-xl flex flex-col justify-between font-serif' style={{minHeight:'100vh', minWidth:'25%'}}>
        <ul>
            <li className='text-gray-600 text-2xl'><Link href={''}>Nursing Times</Link></li>
            <li><Link href={''}>Users</Link></li>
            <li><Link href={'/contact'}>Posts</Link></li>
            <li><Link href={''}>Category</Link></li>
            <li><Link href={''}>Notifications</Link></li>
        </ul>
        {/* <h4 className='text-orange-400 pt-3'>Personal Information</h4>
        <ul>
        <li><Link href={'/users'}>Users</Link></li>
        </ul> */}

        <button className='bg-white text-orange-600'>Log Out</button>
    </div>
   
    </>
  )
}

export default AdminSidebar
