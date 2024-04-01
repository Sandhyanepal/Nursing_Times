import React from 'react'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
    <Header/>
      <div className="contact pb-14">
        <div className="wrapper w-3/5 mx-auto pt-5">
          <h1 className='text-center font-bold text-2xl pb-2'>Contact Us!</h1>
          <h2 className='text-left font-bold text-2xl'>We would love to hear from you!</h2>
          <p className='text-left pt-2 italic'>
          If you have an idea for a podcast episode or blog post, 
          have a suggestion for a valuable resource for new graduate nurses, 
          general feedback, or want to request use of any of our copyright protected 
          intellectual property, please use this contact form below and someone from 
          the Nursing Times team will get back to you.
          </p>
          <form action="" className='py-2'>
              <div className="form-top flex pb-2">
                <p className='w-1/2'>
                  <input type="text" placeholder='Enter your name' className='border w-full'/>
                </p>
                <p className='w-1/2 ps-2'>
                  <input type="email" placeholder='Enter your email' className='border w-full '/>
                </p>
              </div>
              <textarea name="" id=""  rows="10" placeholder='Message' className='border w-full' ></textarea>
          </form>
          <div className="flex justify-end">
            <button className='bg-lime-600 p-2 rounded-lg'>Submit</button>
          </div>
        </div>
      </div>
      
      <div className="wrapper w-3/5 mx-auto">
        <div className="containerdivision flex justify-evenly">
          
        <div className="contactsignup pb-10 w-1/2 px-5">
          <div className="p-3 w-full border-2 rounded-xl">
            <h2 className='text-2xl text-gray-500 font-bold'>Sign-up for email</h2>
            <h2 className='text-2xl text-gray-500 font-bold'>updates from Nursing Times</h2>
            <p className='text-xl'>Trust me, you'll be as happy to see these arrives</p>
            <p className='text-xl'>in your inbox as you are when you see a</p>
            <p className='text-xl'>therapeutic blood sugar level.</p>
            <div className='py-5'>
            <input type="text" placeholder='Name' className='border-2 w-80 p-2' />
            </div>
            <div className='pb-2'>
            <input type="text" placeholder='Email' className='border-2 w-80 p-2' />
            </div>
            <button className='text-center border-2 w-80 bg-lime-600 rounded-lg p-2'>SUBSCRIBE</button>
          </div>
        </div>

        <div className="contactfounder pb-10 w-1/2 px-5">
          <div className="p-3 w-full border-2 rounded-xl">

            {/* <Link className='float-left w-1/3'> */}
              <div className="float-left w-1/3">
              <img src="https://static.vecteezy.com/system/resources/previews/027/395/212/non_2x/doctor-lady-friendly-smiling-arms-crossed-png.png" alt="" className='w-full' />
              </div>

            {/* </Link> */}
            <h1 className='text-black font-bold text-lg'>KATE</h1>
            <h1 className='text-black font-bold text-lg'>KLEBER</h1>
            <h1 className='text-black font-bold text-lg'>MSN,</h1>
            <h1 className='text-black font-bold text-lg pb-2'>RN</h1>
            <h2 className='font-bold text-lime-600'>FOUNDER OF</h2>
            <h2 className='font-bold text-lime-600 text-center pb-2'>NURSING TIMES</h2>
               
              <p>The founder and educator behind Nursing Times is,</p>
              <p>the Nursing Times podcast, a nurse educator, author,</p>
              <p>host of Nursing Times-created to educate, encourage, </p>
              <p>and motivate newly licensed nurses in innovative ways.</p>
              <p>and warmth clearly and concisely so that every nurse entering the profession is better equipped to 
                provide care for both their patients and themselves in a sustainable manner!</p>

            <div className="contacticons flex justify-between w-full text-lime-600 pt-2">
                <Link to="">
                <i class="fa-brands fa-facebook text-2xl"></i>
                </Link>
                <Link to="">
                <i class="fa-brands fa-twitter text-2xl"></i>
                </Link>
                <Link to="">
                <i class="fa-brands fa-instagram text-2xl"></i>
                </Link>
                <Link>
                <i class="fa-brands fa-youtube text-2xl"></i>
                </Link>
                <Link>
                <i class="fa-brands fa-pinterest text-2xl"></i>
                </Link>
                <Link>
                <i class="fa-brands fa-tiktok text-2xl"></i>
                </Link>
                <Link>
                <i class="fa-regular fa-envelope text-2xl"></i>
                </Link>
            </div>
          </div>
        </div>
        </div>

      </div>


    <Footer/>

    </>
  )
}

export default Contact