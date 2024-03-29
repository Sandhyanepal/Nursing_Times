import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login w-11/12 m-auto bg-red-500 flex flex-col justify-center mt-32' style={{height:"70vh"}}>
        <h1 className='text-3xl text-center'>Login</h1>
        <form className='loginForm flex flex-col'>
            <label htmlFor="" className='my-3 text-xl'>Email</label>
            <input type="text" placeholder='Enter your email here' className='border-2 border-black pl-2'  />
            <label htmlFor="" className='my-3 text-xl'>Password</label>
            <input type="password" placeholder='Enter your password' className='border-2 border-black pl-2 '  />
        </form>
        <button className='mt-5 bg-gray-700 '>Login</button>
        <p className='mt-5 text-center'>Don't have an account? <Link to = "/register" className='text-blue-500'>Register</Link></p>
    </div>
  )
}

export default Login
