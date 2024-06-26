import React, { useState } from "react";
import { Link } from "react-router-dom";
import { submitUserMessage } from "../api/messageApi";


const About = () => {

  let [name, setName] = useState('')
  let [email, setEmail] = useState('')
  const [message] = useState('I would like to subscribe.');

  let [error, setError] = useState('')
  let [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    submitUserMessage({ name, email, message })
      .then(data => {
        if (data.error) {
          setError(data.error)
          setSuccess(false)
        }
        else {
          setError('')
          setSuccess(true)
          setName('')
          setEmail('')
        }
      })
      .catch(err => console.log(err))
  }


  const showError = () => {
    if (error) {
      alert(error)
      setError('')
    }
  }

  const showSuccess = () => {
    if (success) {
      alert("Message Sent")
    }
  }

  return (
    <>

      <h2 className="text-4xl font-bold text-gray-600 text-center py-5">ABOUT</h2>

      <div className="w-11/12 m-auto sm:w-full">


        <div className="aboutmain lg:flex pt-12 w-11/12 m-auto">

          <div className="aboutLeft flex flex-col items-center">
            <img
              src="https://static.vecteezy.com/system/resources/previews/027/395/212/non_2x/doctor-lady-friendly-smiling-arms-crossed-png.png"
              alt=""
              className="w-2/5 justify-center mt-7 rounded-3xl shadow-lg " />
          </div>
          <div className="aboutpara lg:w-3/5 sm-md: flex flex-wrap pt-9 lg:pt-0 ">
            <p className="pb-3">
              Kate Kleber, MSN RN is a nurse educator with a passion for new
              graduate nurses. She has been writing blogs, books, creating
              courses, hosting podcasts, and speaking all over the country since
              2013. She is the owner of the FreshRN® online platform, specifically
              created to support, educate, and encourage newly licensed nurses.
              <br />
              Kate has been a member of the profession since 2010 with experience
              in med-surg, stepdown, and neurocritical care. She has been a
              preceptor, mentor, charge nurse and is now a nurse educator.
              <br />
              Kate was awarded Nurse of the Year by the Charlotte Business
              Journal, and named one of the Great 100 Nurses of North Carolina,
              both in 2015. Kati is also a published author with the American
              Nurses Association.
            </p>

            <div className="abouticons flex pt-5 flex-wrap">
              <Link to="">
                <i className="yellowbg fa-brands fa-facebook text-2xl mr-5  py-1 px-2 rounded-sm  mt-2 lg:mt-0" ></i>
              </Link>
              <Link to="">
                <i className="yellowbg fa-brands fa-twitter text-2xl mr-5  py-1 px-2 rounded-sm  mt-2 lg:mt-0"></i>
              </Link>
              <Link to="">
                <i className="yellowbg fa-brands fa-instagram text-2xl mr-5  py-1 px-3 rounded-sm  mt-2 lg:mt-0"></i>
              </Link>
              <Link>
                <i className="yellowbg fa-brands fa-youtube text-2xl mr-5  py-1 px-2 rounded-sm  mt-2 lg:mt-0"></i>
              </Link>
              <Link>
                <i className="yellowbg fa-brands fa-pinterest text-2xl  py-1 px-2 rounded-sm  mt-2 lg:mt-0"></i>
              </Link>
            </div>
          </div>
        </div>



        <div className="vision pt-28 text-start w-11/12 m-auto">
          <h2 className="font-bold text-2xl  pb-2">NURSING TIMES - WHO WE ARE</h2>
          <h3 className="txtyellow font-bold  text-lg  pb-1">MISSION</h3>
          <p className="text-lg ">Educating new nurses by meeting them where they are with clinical knowledge, authenticity, and warmth in a clear and concise
            manner so that every nurse entering the profession is better equipped to sustainably provide care for both their patients and themselves.</p>

          <h3 className="txtyellow font-bold text-lg pt-4">VISION</h3>
          <p className="text-lg pb-7">To cut the number of nurses leaving the profession in half. As many as 30% of nurses leave the profession in the first year, and that jumps up to over 50% in year two. We believe that by starting off your professional journey with a solid foundation of skills in self-compassion, assertiveness, and healthy boundaries that more nurses will be empowered to command what they are worth and craft their professional life to fit their unique desires – not leave nursing altogether.</p>

          <h2 className="font-bold text-2xl pt-3 pb-2">VALUES</h2>
          <h3 className="txtyellow font-bold  text-lg pb-1">OWNERSHIP</h3>
          <p className="text-lg pb-2 ">Foster accountability and responsibility in one’s growth as a clinician, CEO of their license, advocate for their patient, and as a human being.</p>
          <h3 className="txtyellow font-bold  text-lg pb-1">CARE</h3>
          <p className="text-lg pb-2 ">Genuinely caring about and nurturing the nurse as a whole person, not just a robot to complete tasks.</p>
          <h3 className="txtyellow font-bold  text-lg pb-1">HUMANITY</h3>
          <p className="text-lg pb-2">Give nurses permission to be human, practice self-compassion, and extend empathy with boundaries.</p>
          <h3 className="txtyellow font-bold   text-lg pb-1">AUTHENTICITY</h3>
          <p className="text-lg pb-2">Come from a place of honesty and openness to facilitate meaningful learning and professional growth.</p>
          <h3 className="txtyellow font-bold text-lg pb-1">VITALITY</h3>
          <p className="text-lg pb-2">Not to just survive your career, but find joy, purpose, and meaning in the work and thrive.</p>
        </div>


        {/* Form part */}

        {showError()}
        {showSuccess()}

        <div className="containerdivision sm:w-4/5 mx-auto pt-16 lg:flex">

          <div className="contactfounder pb-10 lg:w-1/2 px-5 ">
            <div className="p-3 border-2 rounded-xl">

              <div className="float-left w-1/3">
                <img src="https://static.vecteezy.com/system/resources/previews/027/395/212/non_2x/doctor-lady-friendly-smiling-arms-crossed-png.png" alt="" className='w-full' />
              </div>
              <h1 className='text-black font-bold text-lg'>KATE KLEBER</h1>
              <h1 className='text-black font-bold text-lg'>MSN, </h1>
              <h1 className='text-black font-bold text-lg pb-2'>RN</h1>
              <h2 className='font-bold text-gray-600 '>FOUNDER OF </h2>
              <h2 className='font-bold text-gray-600 pb-4'>NURSING TIMES</h2>

              <p >The founder and educator behind Nursing Times is, the Nursing Times podcast, a nurse educator, author, host of Nursing Times-created to educate, encourage, and motivate newly licensed nurses in innovative ways. And warmth clearly and concisely so that every nurse entering the profession is better equipped to provide care for both their patients and themselves in a sustainable manner!</p>

              <div className="txtyellow contacticons flex flex-wrap justify-around md:justify-between w-full pt-2">
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

          <div className="contactsignup pb-10 lg:w-1/2 px-5 flex">
            <div className="p-3 w-full border-2 rounded-xl">
              <h2 className='text-2xl text-gray-600 font-bold mt-3'>Sign-up for email</h2>
              <h2 className='text-2xl text-gray-600 font-bold'>updates from Nursing Times</h2>
              <p className='text-lg pt-4'>Trust me, you'll be as happy to see these arrives in your inbox as you are when you see a therapeutic blood sugar level.</p>



              <form className="pt-10 text-center flex flex-col">
                <input type="text" placeholder='Name' className='border-2  p-2' value={name} onChange={e => setName(e.target.value)} />
                <input type="email" placeholder='Email' className='border-2  p-2 my-3' value={email} onChange={e => setEmail(e.target.value)} />
                <input type="hidden" value={message} />
                <button className='yellowbg text-center rounded-lg p-2' onClick={handleSubmit}>SUBSCRIBE</button>
              </form>

            </div>
          </div>


        </div>

      </div>

    </>
  );
};

export default About;
