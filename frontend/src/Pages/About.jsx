import React from "react";
import { Link } from "react-router-dom";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

const About = () => {
  return (
    <>
      <Header />
      <div className="aboutmain flex pt-12">
        {/* <Link> */}
        <div className="aboutLeft flex flex-col items-center">
          <h2 className="text-2xl font-bold">ABOUT</h2>
          <img
            src="https://static.vecteezy.com/system/resources/previews/027/395/212/non_2x/doctor-lady-friendly-smiling-arms-crossed-png.png"
            alt=""
            className="w-2/5 justify-center mt-7 rounded-3xl shadow-lg ml-15"
          />
        </div>
        {/* </Link> */}
        <div className="aboutpara w-3/5 mr-28">
          <p className="pb-3">
            Kate Kleber, MSN RN is a nurse educator with a passion for new
            graduate nurses. She has been writing blogs, books, creating
            courses, hosting podcasts, and speaking all over the country since
            2013. She is the owner of the FreshRN® online platform, specifically
            created to support, educate, and encourage newly licensed nurses.
            <br/>
            Kate has been a member of the profession since 2010 with experience
            in med-surg, stepdown, and neurocritical care. She has been a
            preceptor, mentor, charge nurse and is now a nurse educator.
            <br/>
            Kate was awarded Nurse of the Year by the Charlotte Business
            Journal, and named one of the Great 100 Nurses of North Carolina,
            both in 2015. Kati is also a published author with the American
            Nurses Association.
          </p>

          <div className="abouticons flex pt-5">
            <Link to="">
              <i className="fa-brands fa-facebook text-xl mr-6 bg-lime-600 p-2 rounded-sm text-white" ></i>
            </Link>
            <Link to="">
              <i className="fa-brands fa-twitter text-xl mr-6 bg-lime-600 p-2 rounded-sm text-white"></i>
            </Link>
            <Link to="">
              <i className="fa-brands fa-instagram text-xl mr-6 bg-lime-600 p-2 rounded-sm text-white"></i>
            </Link>
            <Link>
              <i className="fa-brands fa-youtube text-xl mr-6 bg-lime-600 p-2 rounded-sm text-white"></i>
            </Link>
            <Link>
              <i className="fa-brands fa-pinterest text-xl bg-lime-600 p-2 rounded-sm text-white"></i>
            </Link>
          </div>
        </div>        
      </div>
         
       <div className="vision pt-28 text-start">
          <h2 className="font-bold text-2xl pl-28 pb-2">NURSING TIMES - WHO WE ARE</h2>
          <h3 className="font-bold text-lime-600 text-lg pl-28 pb-1">MISSION</h3>
          <p className="text-lg pl-28">Educating new nurses by meeting them where they are with clinical knowledge, authenticity, and warmth in a clear and concise 
          manner so that</p>
          <p className="text-lg pl-28">every nurse entering the profession is better equipped to sustainably provide care for both their patients and themselves.</p>

          <h3 className="font-bold text-lime-600 text-lg pl-28 pt-4">VISION</h3>
          <p className="text-lg pl-28 pb-7">To cut the number of nurses leaving the profession in half.</p>
          <p className="text-lg pl-28">As many as 30% of nurses leave the profession in the first year, and that jumps up to over 50% in year two. We believe that by starting off your</p>
          <p className="text-lg pl-28">professional journey with a solid foundation of skills in self-compassion, assertiveness, and healthy boundaries that more nurses will be empowered to</p>
          <p className="text-lg pl-28">command what they are worth and craft their professional life to fit their unique desires – not leave nursing altogether.</p>    

          <h2 className="font-bold text-2xl pl-28 pt-3 pb-2">VALUES</h2>  
          <h3 className="font-bold text-lime-600 text-lg pl-28 pb-1">OWNERSHIP</h3>
          <p className="text-lg pl-28 pb-2">Foster accountability and responsibility in one’s growth as a clinician, CEO of their license, advocate for their patient, and as a human being</p>
          <h3 className="font-bold text-lime-600  text-lg pl-28 pb-1">CARE</h3>
          <p className="text-lg pl-28 pb-2">Genuinely caring about and nurturing the nurse as a whole person, not just a robot to complete tasks</p>
          <h3 className="font-bold text-lime-600  text-lg pl-28 pb-1">HUMANITY</h3>
          <p className="text-lg pl-28 pb-2">Give nurses permission to be human, practice self-compassion, and extend empathy with boundaries</p>
          <h3 className="font-bold text-lime-600  text-lg pl-28 pb-1">AUTHENTICITY</h3>
          <p className="text-lg pl-28 pb-2">Come from a place of honesty and openness to facilitate meaningful learning and professional growth</p>
          <h3 className="font-bold text-lime-600  text-lg pl-28 pb-1">VITALITY</h3>
          <p className="text-lg pl-28 pb-2">Not to just survive your career, but find joy, purpose, and meaning in the work – and thrive</p>
       </div>


       <div className="wrapper w-3/5 mx-auto pt-16">
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
            <h2 className='font-bold text-lime-600 '>FOUNDER OF</h2>
            <h2 className='font-bold text-lime-600  text-center pb-2'>NURSING TIMES</h2>
               
              <p>The founder and educator behind Nursing Times is,</p>
              <p>the Nursing Times podcast, a nurse educator, author,</p>
              <p>host of Nursing Times-created to educate, encourage, </p>
              <p>and motivate newly licensed nurses in innovative ways.</p>
              <p>and warmth clearly and concisely so that every nurse entering the profession is better equipped to 
                provide care for both their patients and themselves in a sustainable manner!</p>

            <div className="contacticons flex justify-between w-full text-lime-600  pt-2">
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
  );
};

export default About;
