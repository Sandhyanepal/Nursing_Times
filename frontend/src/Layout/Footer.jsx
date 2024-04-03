import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-11 text-center py-2 text-white bg-gray-600 ">
      <div className="footer w-11/12 m-auto flex flex-col md:flex-row  pt-3 justify-between" >
        <div className="foot text-start">
          <h3 className="font-bold py-2 mb-2">Nursing Times</h3>
          <p>
            Nursing Times was started by MSN, to encourage 
            <p>graduate nurses. We decided to start a blog that</p>
            <p>
            focuses on providing concise,information to help 
            </p>
            <p>new nurses gain confidence in their abilities. It</p>
            <p>focuses on nursing education for all nurses.</p>
          </p>
        </div>
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
          <li className="pb-2"><Link to="/">Career</Link></li>
          <li><Link to="/">Study</Link></li>
        </div>
        <div className="list-none">
        <h2 className="font-bold pt-3 text-start mb-2">Connect With Us</h2> 
        <div className="footer-icons flex justify-between w-1/4 md:w-1/2 items-center pt-3 pb-2">
            <Link to="">
            <i class="fa-brands fa-facebook text-lg md:text-2xl"></i>
            </Link>
            <Link to="">
            <i class="fa-brands fa-twitter text-lg md:text-2xl"></i>
            </Link>
            <Link to="">
            <i class="fa-brands fa-instagram text-lg md:text-2xl"></i>
            </Link>
          </div>
            <form className="flex flex-col sm:flex-row pt-3">
                <input className="w-full p-2 mr-4 rounded-md " type="email" placeholder="Enter email"/>
                <button className=" bg-orange-600 p-2 rounded-lg">Subscribe</button>
            </form>
        </div>
      </div>
      <div className="cont py-6 text-sm md:text-lg">Copyright &copy; 2023.</div>
    </footer>
  );
}

export default Footer;
