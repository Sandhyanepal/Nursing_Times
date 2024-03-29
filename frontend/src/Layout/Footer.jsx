import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container flex flex-col md:flex-row w-4/5 pt-3 justify-between" >
        <div className="foot text-start">
          <h3 className="nur font-bold py-2">Nursing Times</h3>
          <p>
            Nursing Times was started by MSN, to encourage 
            <p>graduate nurses. We decided to start a blog that </p>
            <p>
            focuses on providing concise,information to help 
            </p>
            <p>new nurses gain confidence in their abilities. It </p>
            <p>focuses on nursing education for all nurses.</p>
          </p>
        </div>
        <div className="mid list-none px-10 pt-3 text-start">
          <h2 className="font-bold">TOPICS</h2>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/">Write</Link>
          </li>
        </div>

        <div className="mid list-none px-10 pt-3 text-start">
          <h2 className="font-bold">Quick Links</h2>
          <li>
            <Link to="/">FAQ</Link>
          </li>
          <li>
            <Link to="/">Work</Link>
          </li>
          <li>
            <Link to="/">Career</Link>
          </li>
          <li>
            <Link to="/">Study</Link>
          </li>
        </div>
        <div className="mid list-none">
        <h2 className="head font-bold pt-3 text-start">Connect With Us</h2> 
        <div className="footer-icons flex justify-between w-1/4 md:w-1/2 items-center pt-3">
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
                <button className=" bg-red-500 p-2">Subscribe</button>
            </form>
        </div>
      </div>
      <div className="cont py-6 text-sm md:text-lg">Copyright &copy; 2023.</div>
    </footer>
  );
}

export default Footer;
