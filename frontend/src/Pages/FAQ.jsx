import React from 'react'
import Header from '../Layout/Header'
import { Link } from 'react-router-dom'

const FAQ = () => {
  return (
    <>
     <Header />
       {/* <h1 className='text-center text-4xl pt-16 font-bold'>Frequently Asked Questions</h1> */}
       <div className="relative bg-white transition-all mx-auto
       max-w-xs sm:max-w-2xl rounded-lg flex flex-col gap-4 mt-40
       sm:mt-24 p-5">
        <h1 className='flex gap-3 items-center'>
        <Link to="">
        <i class="fa-solid fa-star"></i>
        </Link> 
        <div className="font-bold text-4xl">FAQs</div>
        </h1>

       </div>
    </>
  )
}

export default FAQ