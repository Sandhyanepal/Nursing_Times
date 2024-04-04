import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { verifyUser } from '../api/userApi'

const Token = () => {

    const navigate = useNavigate()
    const {token} = navigate.query

    let [error, setError] = useState('')
    let [success, setSuccess] = useState(false)

    let [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if(token){
            verifyUser(token)
            .then(data => {
                if(data.error){
                    setError(data.error)
                }
                else{
                    setSuccess(data.message)
                }
            })
            .finally(()=>{
                setIsLoading(false)
            })
        }
    }, [token])

    const showError = () => {
        if(error){
          return <div className='font-bold text-red-700 underline text-lg pt-2 text-center'>{error}</div>
        }
      }

      const showSuccess = () => {
        if(success){
          return <div className='font-bold text-green-700 underline text-lg'>{success}</div>
        }
      }

  return (
    <>
      {isLoading ? <p>Loading...</p> : <>
        {showError()}
        {showSuccess()}
      </>}
    </>
  )
}

export default Token
