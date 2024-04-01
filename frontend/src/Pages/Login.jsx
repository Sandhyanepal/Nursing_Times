import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Layout/Header'

const Login = () => {
  return (
    
    <>
    <Header />

      <div className='login w-11/12 m-auto flex flex-col justify-center mt-12 items-center' style={{ height: "80vh" }}>
        <h1 className='text-3xl text-center'>Login</h1>
        <form className='loginForm flex flex-col'>
          <label htmlFor="" className='my-3 text-xl'>Email</label>
          <input type="text" placeholder='Enter your email' className=' pl-2 py-1' />
          <label htmlFor="" className='my-3 text-xl'>Password</label>
          <input type="password" placeholder='Enter your password' className=' pl-2 py-1' />
          <button className='mt-5 bg-gray-700 text-white py-1 rounded-md'>Login</button>
        </form>
        <p className='mt-5 text-center'>Don't have an account? <Link to="/register" className='text-blue-500'>Register</Link></p>
      </div>
  </>
  )
}

export default Login
