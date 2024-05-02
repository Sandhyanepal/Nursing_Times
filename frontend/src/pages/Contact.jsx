import React, { useState } from 'react'
import { submitUserMessage } from '../api/messageApi';

const Contact = () => {

  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [message, setMessage] = useState('');

  
  let [error, setError] = useState('')
  let [success, setSuccess] = useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault();
    submitUserMessage({ name, email, message })
    .then(data =>{
      if(data.error){
        setError(data.error)
        setSuccess(false)
      }
      else{
        setError('')
        setSuccess(true)
        setName('')
        setEmail('')
        setMessage('')
      }
    })
    .catch(err => console.log(err))
  }

  const showError = () => {
    if(error){
      return <div className='font-bold text-red-700 underline text-lg py-2 text-center'>{error}</div>
    }
  }

  const showSuccess = () => {
    if(success){
        return <div className='text-green-500 text-xl font-bold text-center py-5'>"Message Sent"</div>
    }
}


  return (
    <>
      <div className="contact mb-14 mt-5">
        <div className="wrapper w-3/5 mx-auto pt-5">
          <h1 className='text-center font-bold text-2xl pb-5 text-gray-600'>Contact Us!</h1>
          <h2 className=' font-bold text-2xl text-center'>We would love to hear from you!</h2>
          <p className='text-left pt-2 mt-2'>
            If you have an idea for a podcast episode or blog post,
            have a suggestion for a valuable resource for new graduate nurses,
            general feedback, or want to request use of any of our copyright protected
            intellectual property, please use this contact form below and someone from
            the Nursing Times team will get back to you.
          </p>

          <form action="" className='py-2 mt-3'>
            {showError()}
            {showSuccess()}
            <div className="form-top md:flex pb-2 gap-3 ">

                <input type="text" placeholder='Enter your name' className='border p-2 w-full mb-2 md:mb-0' onChange={e => setName(e.target.value)}/>

                <input type="email" placeholder='Enter your email' className='border p-2 w-full' onChange={e =>setEmail(e.target.value)}/>

            </div>

            <textarea name="" id="" rows="10" placeholder='Message' className='border w-full p-2 resize-none' onChange={e => setMessage(e.target.value)}></textarea>
          </form>

          <div className="flex justify-end">
            <button className='bg-yellow-500 px-4 py-1 rounded-lg text-white' onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact