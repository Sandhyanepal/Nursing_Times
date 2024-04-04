import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { isAuthenticate, login } from '../api/userApi'

const Login = () => {

  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  let [error, setError] = useState('')
  let [success, setSuccess] = useState(false)

  let navigate = useNavigate()

  const handleLogin = e => {
    e.preventDefault()
    login({email,password})
    .then(data => {
      if(data.error){
        setError(data.error)
        setSuccess(false)
      }
      else{
        setSuccess(true)
        setError('')
        console.log(data)
        isAuthenticate(data)
      }
    })
  }

  
  const showError = () => {
    if(error){
      return <div className='font-bold text-red-700 underline text-lg pt-2 text-center'>{error}</div>
    }
  }

  const redirect = () => {
    if(success){
      // return navigate('/')
    }
  }

  return (
    
    <>

      <div className='login w-11/12 m-auto flex flex-col justify-center mt-12 items-center' style={{ height: "80vh" }}>

        {redirect()}

        <form className='loginForm flex flex-col'>

          <h1 className='text-3xl text-center'>Login</h1>

          <label htmlFor="" className='my-3 text-xl'>Email</label>
          <input type="text" placeholder='Enter your email' className=' pl-2 py-1' onChange={e => setEmail(e.target.value)}/>

          <label htmlFor="" className='my-3 text-xl'>Password</label>
          <input type="password" placeholder='Enter your password' className=' pl-2 py-1' onChange={e => setPassword(e.target.value)}/>

          {showError()}

          <button className='mt-5 bg-yellow-500 text-white py-1 rounded-md' onClick={handleLogin}>Login</button>

          <button className='mt-3 text-blue-600 text-start' >Forget Password?</button>
        </form>
        <p className='mt-5 text-center'>Don't have an account? <Link to="/register" className='text-blue-600'>Register</Link></p>
      </div>
  </>
  )
}

export default Login
