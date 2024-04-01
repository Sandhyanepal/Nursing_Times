import React from 'react'
import Header from '../Layout/Header'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
      <Header/>
       <div className='register w-11/12 m-auto flex flex-col justify-center mt-12 items-center' style={{ height: "80vh" }}>
          <h1 className='text-3xl text-center'>Register</h1>
          <form className='loginForm flex flex-col'>
            <label htmlFor="" className='my-3 text-xl'>Username</label>
            <input type="text" placeholder='Enter your username' className=' pl-2 py-1' />
            <label htmlFor="" className='my-3 text-xl'>Email</label>
            <input type="text" placeholder='Enter your email' className=' pl-2 py-1' />
            <label htmlFor="" className='my-3 text-xl'>Password</label>
            <input type="password" placeholder='Enter your password' className=' pl-2 py-1' />
            <button className='mt-5 bg-gray-700 text-white py-1 rounded-md'>Register</button>
          </form>
          <p className='mt-5 text-center'>Aready have an account? <Link to="/login" className='text-blue-500'>Login</Link></p>
        </div>
    </div>
  )
}

export default Register
