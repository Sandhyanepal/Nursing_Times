import React from "react";
import { Link } from "react-router-dom";
import Header from "../Layout/Header";

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
        <div className="aboutpara w-3/5  mr-28">
          <p className="pb-3">
            Kati Kleber, MSN RN is a nurse educator with a passion for new
            graduate nurses. She has been writing blogs, books, creating
            courses, hosting podcasts, and speaking all over the country since
            2013. She is the owner of the FreshRN® online platform, specifically
            created to support, educate, and encourage newly licensed nurses.
          </p>
          <p className="pb-3">
            Kati has been a member of the profession since 2010 with experience
            in med-surg, stepdown, and neurocritical care. She has been a
            preceptor, mentor, charge nurse and is now a nurse educator.
          </p>
          <p className="pb-3">
            Kati was awarded Nurse of the Year by the Charlotte Business
            Journal, and named one of the Great 100 Nurses of North Carolina,
            both in 2015. Kati is also a published author with the American
            Nurses Association.
          </p>

          <div className="abouticons  flex pt-5">
            <Link to="">
              <i className="fa-brands fa-facebook text-2xl mr-6 bg-green-900 p-2 rounded-sm text-white" ></i>
            </Link>
            <Link to="">
              <i className="fa-brands fa-twitter text-2xl mr-6 bg-green-900 p-2 rounded-sm text-white"></i>
            </Link>
            <Link to="">
              <i className="fa-brands fa-instagram text-2xl mr-6 bg-green-900 p-2 rounded-sm text-white"></i>
            </Link>
            <Link>
              <i className="fa-brands fa-youtube text-2xl mr-6 bg-green-500 p-2 rounded-sm text-white"></i>
            </Link>
            <Link>
              <i className="fa-brands fa-pinterest text-2xl  bg-green-500 p-2 rounded-sm text-white"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
