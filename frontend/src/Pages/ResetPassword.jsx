import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { API } from '../config'

const ResetPassword = () => {

    const params = useParams()

    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)


    // read token
    const token = params.token

    const handleSubmit = e => {
        e.preventDefault()

        // reset Password
        fetch(`${API}/resetpassword/${token}`, {
            method: 'POST',
            headers: {
                Accept: "application/json",
                "content-type": "application/json"
            },
            body: JSON.stringify({ password })

        })
        .then(res=>res.json())
        .then(data => {
            if(data.error){
                setError(data.error)
                setSuccess(false)
            }
            else{
                setError('')
                setSuccess(true)
                setPassword('')
            }
        })
        .catch(err=>console.log(err))
    }


    const showError = () => {
        if (error) {
            // return <div className='font-bold text-red-700 underline text-lg pt-2 text-center'>{error}</div>
            alert(error)
            setError('')
        }
    }

    const showSuccess = () => {
        if (success) {
            // return <div className='text-green-500 text-lg font-bold'>"Your password has been successfully changed."</div>
            alert("Your password has been successfully changed.")
        }
    }

    return (
        <>
            <div className='w-11/12 m-auto mt-8' style={{ height: '40vh' }}>
                <div className="my-5 pt-12">
                    <form className="shadow-md p-3 w-3/5 m-auto ">
                        {showError()}
                        {showSuccess()}
                        <h1 className='text-center text-2xl font-semibold '>Reset Password</h1>
                        <div className="mt-5 flex gap-2 flex-wrap ">
                            <label htmlFor="email" className='text-xl'>New Password</label>
                            <input type="password" name='password' id='password' className='border-2 rounded-md border-black  py-1 w-full xl:w-11/12 px-2' placeholder='Enter email...' value={password} onChange={e => setPassword(e.target.value)} />
                        </div>
                        <div className="mt-5 ">
                            <button className='yellowbg py-1 px-2 rounded-md' onClick={handleSubmit}>Reset Password</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default ResetPassword
