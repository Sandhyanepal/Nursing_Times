import React from 'react'
import Header from '../Layout/Header'

const Contact = () => {
  return (
    <>
    <Header/>
      <div className="containerfluid">
        <div className="wrapper w-3/5 mx-auto pt-5">
          <h1 className='text-center font-bold text-4xl pb-4'>Contact Us!</h1>
          <h2 className='text-left font-bold text-4xl'>We would love to hear from you!</h2>
          <p className='text-left pt-3 italic'>
          If you have an idea for a podcast episode or blog post, 
          have a suggestion for a valuable resource for new graduate nurses, 
          general feedback, or want to request use of any of our copyright protected 
          intellectual property, please use this contact form below and someone from 
          the Nursing Times team will get back to you.
          </p>
          <form action="" className='py-4'>
              <div className="form-top flex pb-3">
                <p className='w-1/2'>
                  <input type="text" placeholder='Enter your name' className='border w-full'/>
                </p>
                <p className='w-1/2 ps-3'>
                  <input type="email" placeholder='Enter you email' className='border w-full ' />
                </p>
              </div>
              <textarea name="" id=""  rows="10" placeholder='Message' className='border w-full' ></textarea>
          </form>
          <div className="flex justify-end">
            <button className='bg-green-500 p-2 rounded-lg'>Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact