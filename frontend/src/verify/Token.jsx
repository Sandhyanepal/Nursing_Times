import React, { useEffect, useState } from 'react'
import { verifyUser } from '../api/userApi'
import { useParams } from 'react-router-dom'

const Token = () => {

    const {token} = useParams()

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
          return <div className='font-bold text-red-700 underline text-2xl pt-24 pb-28 text-center'>{error}</div>
        }
      }

      const showSuccess = () => {
        if(success){
          return <div className='font-bold text-green-700 underline text-2xl text-center pt-24 pb-28'>{success}</div>
        }
      }

  return (
    <>
      {isLoading ? <p className='text-2xl text-center pt-24 pb-28'> Loading...</p> : <>
        {showError()}
        {showSuccess()}
      </>}
    </>
  )
}

export default Token
