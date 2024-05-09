import React, { useState } from "react";
import { Link } from "react-router-dom";
import { submitUserMessage } from "../api/messageApi";

function Footer() {

  let [email, setEmail] = useState('');

  let [error, setError] = useState('')
  let [success, setSuccess] = useState(false)

  const handleSubmit = (e) =>{
    e.preventDefault();
    submitUserMessage({ email })
    .then(data =>{
      if(data.error){
        setError(data.error)
        setSuccess(false)
      }
      else{
        setError('')
        setSuccess(true)
        setEmail('')
      }
    })
    .catch(err => console.log(err))
  }

  const showError = () => {
    if(error){
      return <div className='font-bold text-red-700 underline text-xl text-center'>{error}</div>
    }
  }

  const showSuccess = () => {
    if(success){
        return <div className='text-green-500 text-xl font-bold text-center'>"Message Sent"</div>
    }
}


  return (
    <footer className=" text-center mt-11 text-white bg-gray-600 absolute ">
      <div className="footer w-11/12 m-auto flex flex-col md:flex-row  pt-3 justify-between" >
        <div className="foot text-start md:w-1/2">
          <h3 className="font-bold py-2 mb-1">Nursing Times</h3>
          <p>Nursing Times was started by MSN, to encourage graduate nurses. We decided to start a blog that focuses on providing information to help new nurses gain confidence in their abilities. It focuses on nursing education for all nurses; educating new nurses by meeting them where they are with humor, clinical knowledge, authenticity, and warmth clearly and concisely so that every nurse entering the profession is better equipped to provide care for their patients and themselves in a sustainable manner! </p>
          
        </div>
        <div className="footer-middle flex justify-around ">


          <div className="list-none px-10 pt-3 text-start">
            <h2 className="font-bold mb-2">TOPICS</h2>
            <li className="pb-2"><Link to="/home" >Home</Link></li>
            <li className="pb-2"><Link to="/about">About</Link></li>
            <li className="pb-2"><Link to="/contact">Contact</Link></li>
            <li><Link to="/write">Write</Link></li>
          </div>

          <div className="list-none px-10 pt-3 text-start">
            <h2 className="font-bold mb-2">Quick Links</h2>
            <li className="pb-2"><Link to="/faq">FAQ</Link></li>
            <li className="pb-2"><Link to="/privacy">Privacy</Link></li>
            {/* <li className="pb-2"><Link to="/">Career</Link></li>
          <li><Link to="/">Study</Link></li> */}
          </div>
        </div>
        <div className="list-none">
          <h2 className="font-bold pt-3 text-center mb-2">Connect With Us</h2>
          <div className="footer-icons flex flex-wrap justify-around items-center pt-3 pb-2">
            <Link to="">
              <i className="fa-brands fa-facebook text-lg md:text-2xl"></i>
            </Link>
            <Link to="">
              <i className="fa-brands fa-twitter text-lg md:text-2xl"></i>
            </Link>
            <Link to="">
              <i className="fa-brands fa-instagram text-lg md:text-2xl"></i>
            </Link>
          </div>
          {showError()}
          {/* alert({showSuccess()}) */}
          {showSuccess()}
          <form className="flex flex-wrap pt-3 gap-2 justify-center">
            <input className=" p-2 rounded-md mt-1 text-black" type="email" placeholder="Enter email" value={email} onChange={e=>setEmail(e.target.value)}/>
            <button className=" bg-yellow-500 p-2 rounded-lg mt-1" onClick={handleSubmit}>Subscribe</button>
          </form>
        </div>

      </div>
      <div className="cont py-6 text-sm md:text-lg">Copyright &copy; 2023.</div>
    </footer>
  );
}

export default Footer;
