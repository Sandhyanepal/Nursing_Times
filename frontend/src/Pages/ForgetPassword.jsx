import React, { useState } from 'react'
import { forgetpassword } from '../api/userApi'

const ForgetPassword = () => {

    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        forgetpassword({email})
        .then(data =>{
            if(data.error){
                setError(data.error)
                setSuccess(false)
            }
            else{
                setError('')
                setSuccess(true)
                setEmail('')
            }
        })
        .catch(err => console.log(err))
    }

    const showError = () => {
        if(error){
        alert(error)
        setError('')
        }
      }

      const showSuccess = () => {
        if(success){
            alert("Password reset link has been sent to your email.")
        }
    }

    return (
        <div className='w-11/12 m-auto mt-8' style={{height:'40vh'}}>
            <div className="my-5 pt-12">
                <form className="shadow-md p-3 w-4/5 m-auto">
                    {showError()}
                    {showSuccess()}
                    <h1 className='text-center text-2xl font-semibold '>Forget Password</h1>
                    <div className="mt-5 flex gap-2 flex-wrap ">
                        <label htmlFor="email" className='text-xl'>Email</label>
                        <input type="email" name='email' id='email' className='border-2 rounded-md border-black py-1 w-full xl:w-11/12 px-2' placeholder='Enter email...' value={email} onChange={e =>setEmail(e.target.value)}/>
                    </div>
                    <div className="mt-5 ">
                        <button className='yellowbg py-1 px-2 rounded-md' onClick={handleSubmit}>Send Email</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ForgetPassword
