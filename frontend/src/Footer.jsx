import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container flex flex-col md:flex-row w-4/5 pt-3" >
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
        </div>
        <div className="mid list-none px-10 pt-3 text-start">
          <h2 className="head font-bold">TOPICS</h2>
          <li>
            <Link to="/">Cardiac Nursing</Link>
          </li>
          <li>
            <Link to="/">Critical Care</Link>
          </li>
          <li>
            <Link to="/">Med-Surg Nursing</Link>
          </li>
          <li>
            <Link to="/">Neuro Nursing</Link>
          </li>
          <li>
            <Link to="/">New-Grad Nursing</Link>
          </li>
          <li>
            <Link to="/">Professional Developmant</Link>
          </li>
          <li>
            <Link to="/">Jobs and Interview</Link>
          </li>
        </div>
        <div className="mid list-none px-10 pt-3 text-start">
          <h2 className="head font-bold">COURSES</h2>
          <li>
            <Link to="/">Breakthrough ICU</Link>
          </li>
          <li>
            <Link to="/">Cardiac Confidence</Link>
          </li>
          <li>
            <Link to="/">ECG Rhythm Master</Link>
          </li>
          <li>
            <Link to="/">Med-Surg Mindset</Link>
          </li>
          <li>
            <Link to="/">Neuro Wise</Link>
          </li>
          <li>
            <Link to="/">New Nurse Master Class</Link>
          </li>
          <li>
            <Link to="/">Nursing Skills Refresh</Link>
          </li>
        </div>
        <div className="mid list-none px-10 pt-3 text-start">
          <h2 className="head font-bold">PODCAST</h2>
          <li>
            <Link to="/">RN Nursing Podcast</Link>
          </li>
          <h2 className="head font-bold py-1 pt-4">BOOKS</h2>
          <li>
            <Link to="/">Anatomy of Super Nurse</Link>
          </li>
          <li>
            <Link to="/">Becoming Nurse</Link>
          </li>
          <li>
            <Link to="/">Nurse's Guide to Blogging</Link>
          </li>
          <li>
            <Link to="/">What's Next</Link>
          </li>
        </div>
      </div>
      <div className="cont py-6 text-sm md:text-lg">Copyright &copy; 2023.</div>
    </footer>
  );
}

export default Footer;
