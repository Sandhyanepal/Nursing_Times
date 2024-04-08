import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { register } from '../api/userApi'

const Register = () => {

  let [username, setUsername] = useState('')
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  let [error, setError] = useState('')
  let [success, setSuccess] = useState(false)

  const handleRegister = e => {
    e.preventDefault()
    register({username, email, password})
    .then(data => {
      if(data.error){
        setError(data.error)
        setSuccess(false)
      }
      else{
        setSuccess(true)
        setError('')
      }
    })
  }

  const showError = () => {
    if(error){
      return <div className='font-bold text-red-700 underline text-lg'>{error}</div>
    }
  }

  const showSuccess = () => {
    if(success){
      return <div className='font-bold text-green-700 underline text-lg'>"User registered successfully."</div>
    }
  }

  return (
    <div>
       <div className='register w-11/12 m-auto flex flex-col justify-center mt-12 items-center' style={{ height: "80vh" }}>

          {showError()}
          {showSuccess()}


          <form className='loginForm flex flex-col'>
            <h1 className='text-3xl text-center'>Register</h1>

            <label htmlFor="" className='my-3 text-xl'>Username</label>
            <input type="text" placeholder='Enter your username' className=' pl-2 py-1' id='username' onChange={(event)=>{setUsername(event.target.value)}}/>

            <label htmlFor="" className='my-3 text-xl'>Email</label>
            <input type="text" placeholder='Enter your email' className=' pl-2 py-1' id='email' onChange={e=>setEmail(e.target.value)}/>

            <label htmlFor="" className='my-3 text-xl'>Password</label>
            <input type="password" placeholder='Enter your password' className=' pl-2 py-1' id='pwd' onChange={e=>setPassword(e.target.value)}/>

            <button className='mt-5 bg-yellow-500 text-white py-1 rounded-md' onClick={handleRegister}>Register</button>

          </form>
          <p className='mt-5 text-center'>Aready have an account? <Link to="/login" className='text-blue-600'>Login</Link></p>
        </div>
    </div>
  )
}

export default Register
