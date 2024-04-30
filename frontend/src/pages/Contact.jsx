import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
      <div className="contact mb-14 mt-5">
        <div className="wrapper w-3/5 mx-auto pt-5">
          <h1 className='text-center font-bold text-2xl pb-2 text-gray-600'>Contact Us!</h1>
          <h2 className='text-left font-bold text-2xl'>We would love to hear from you!</h2>
          <p className='text-left pt-2 mt-2'>
            If you have an idea for a podcast episode or blog post,
            have a suggestion for a valuable resource for new graduate nurses,
            general feedback, or want to request use of any of our copyright protected
            intellectual property, please use this contact form below and someone from
            the Nursing Times team will get back to you.
          </p>
          <form action="" className='py-2 mt-3'>
            <div className="form-top flex pb-2">
              <p className='w-1/2'>
                <input type="text" placeholder='Enter your name' className='border w-full p-2' />
              </p>
              <p className='w-1/2 ps-2'>
                <input type="email" placeholder='Enter your email' className='border w-full p-2' />
              </p>
            </div>
            <textarea name="" id="" rows="10" placeholder='Message' className='border w-full p-2 resize-none' ></textarea>
          </form>
          <div className="flex justify-end">
            <button className='bg-yellow-500 px-4 py-1 rounded-lg text-white iem'>Submit</button>
          </div>
        </div>
      </div>

      <div className="wrapper md:w-3/5 mx-auto md:flex">
        <div className="containerdivision md:flex justify-center md:justify-between">
          <div className="contactsignup pb-10 w-full md:w-1/2 px-5 flex justify-centermd:justify-start">
            <div className="p-3 border-2 rounded-xl">
            <h2 className='text-2xl text-gray-600 font-bold mt-3'>Sign-up for email</h2>
              <h2 className='text-2xl text-gray-600 font-bold'>updates from Nursing Times</h2>
              <p className='text-lg md:text-xl pt-4'>Trust me, you'll be as happy to see these arrives in your inbox as you are when you see a therapeutic blood sugar level.</p>
              <form className="pt-10 text-center flex flex-col">
                <input type="text" placeholder='Name' className='border-2 p-2'/>
                <input type="text" placeholder='Email' className='border-2 p-2 my-3' />
                <button className='text-center bg-yellow-500 text-white rounded-lg p-2 l'>SUBSCRIBE</button>
              </form>
            </div>
          </div>

          <div className="contactfounder pb-10 w-full md:w-1/2 px-5">
            <div className="p-3 border-2 rounded-xl">
              <div className="float-none md:float-left md:w-1/3">
                <img src="https://static.vecteezy.com/system/resources/previews/027/395/212/non_2x/doctor-lady-friendly-smiling-arms-crossed-png.png" alt="" className='w-full' />
              </div>
              {/* </Link> */}
              <h1 className='text-black font-bold text-lg'>KATE KLEBER</h1>
              <h1 className='text-black font-bold text-lg'>MSN,</h1>
              <h1 className='text-black font-bold text-lg pb-2'>RN</h1>
              <h2 className='font-bold text-gray-600'>FOUNDER OF</h2>
              <h2 className='font-bold text-gray-600 pb-2'>NURSING TIMES</h2>

              <p>The founder and educator behind Nursing Times is, the Nursing Times podcast, a nurse educator, author, host of Nursing Times-created to educate, encourage, and motivate newly licensed nurses in innovative ways. and warmth clearly and concisely so that every nurse entering the profession is better equipped to provide care for both their patients and themselves in a sustainable manner!</p>

              <div className="contacticons flex flex-wrap justify-around md:justify-between w-full text-yellow-500 pt-2">
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



    </>
  )
}

export default Contact