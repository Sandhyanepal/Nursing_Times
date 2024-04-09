import React, { useEffect, useState } from 'react'
import {useLocation} from 'react-router-dom'
import AdminSidebar from '../Layout/AdminSidebar'
import AdminProfile from '../Layout/AdminProfile'

const AdminDashboard = () => {

    const location = useLocation()

  const [tab, setTab] = useState('')

  useEffect(()=>{
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get('tab')
    if(tabFromUrl){
        setTab(tabFromUrl);
    }
  }, [location.search]);

    return (
        <div className='flex mt-10 '>
            <AdminSidebar />
            <div className='w-3/4 p-5'>
                {tab === 'profile' && <AdminProfile/>}
            </div>
        </div>
    )
}

export default AdminDashboard
