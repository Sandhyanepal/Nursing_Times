import React from 'react'
import { Link } from 'react-router-dom'

const AdminSidebar = () => {


  return (
    <>
    <div className='w-1/4 p-4 bg-lime-700 text-white font-bold text-2xl flex flex-col justify-between font-serif' style={{minHeight:'100vh', minWidth:'25%'}}>
        <ul>
            <li><Link href={'/admindashboard'}>Admin Dashboard</Link></li>
            <li><Link href={'/posts'}>Posts</Link></li>
            <li><Link href={'/category'}>Category</Link></li>
            <li><Link href={'/users'}>Users</Link></li>
        </ul>
        <button className='bg-white text-orange-600'>Sign Out</button>
    </div>
    </>
  )
}

export default AdminSidebar
