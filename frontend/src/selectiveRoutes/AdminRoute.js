import React from 'react'
import { isAuthenticate } from '../api/userApi'
import { Navigate, Outlet } from 'react-router-dom'

const AdminRoute = () => {

  return (
    isAuthenticate() && isAuthenticate().user.role === '1' ? <Outlet/> : <Navigate to ='/login' />
  )
}

export default AdminRoute
