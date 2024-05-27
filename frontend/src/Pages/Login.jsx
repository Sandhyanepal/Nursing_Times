import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authenticate, isAuthenticate, login } from '../api/userApi'

const Login = () => {

  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [user, setUser] = useState({})

  let [error, setError] = useState('')
  let [success, setSuccess] = useState(false)

  let navigate = useNavigate()

  const handleLogin = e => {
    e.preventDefault()
    try {
      login({ email, password })
        .then(data => {
          console.log(data)
          if (data.error) {
            setError(data.error)
            setSuccess(false)
          }
          else {
            setSuccess(true)
            setError('')
            authenticate(data)
            setUser(data)
          }
        })
    }
    catch (error) {
      console.error('Error:', error);
      setError('An error occurred while logging in.');
      setSuccess(false);
    }
  }


  const showError = () => {
    if (error) {
      alert("User not verified")
    }
  }

  const redirect = () => {
    if (success) {
      if (isAuthenticate().user.role === '1' ) {
        navigate('/admin/dashboard')
      }
      else {
        navigate('/')
      }
    }
  }


  return (

    <>

      <div className='login w-11/12 m-auto flex flex-col justify-center mt-12 items-center' style={{ height: "80vh" }}>

        {redirect()}

        <form className='loginForm flex flex-col'>

          <h1 className='text-3xl text-center'>Login</h1>

          <label htmlFor="" className='my-1 text-xl'>Email</label>
          <input type="text" placeholder='Enter your email' className=' pl-2 py-1' onChange={e => setEmail(e.target.value)} />

          <label htmlFor="" className='my-1 text-xl'>Password</label>
          <input type="password" placeholder='Enter your password' className=' pl-2 py-1' onChange={e => setPassword(e.target.value)} />

          {showError()}

          <button className='yellowbg mt-3 py-1 rounded-md' onClick={handleLogin}>Login</button>

          <Link to='/forgetpassword' className='mt-2 text-blue-600 text-start' >Forget Password?</Link>
        </form>
        <p className='mt-3 text-center'>Don't have an account? <Link to="/register" className='text-blue-600'>Register</Link></p>
      </div>
    </>
  )
}

export default Login
