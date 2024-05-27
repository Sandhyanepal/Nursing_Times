import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticate } from "../api/userApi";
import { API } from '../config'

const Header = () => {
  let [dropdown, showDropdown] = useState(false);
  const subdropdown = useRef(null)

  useEffect(()=> {
    document.addEventListener("click", handleClickOutside, true)
  },[])

  const handleClickOutside = (e) => {
    if(subdropdown.current && !subdropdown.current.contains(e.target)){
        console.log("outside clicked")
        showDropdown(false)
        showSidebar(false)
    }
  }
    const handleLinkClick = () => {
    showDropdown(false);
    showSidebar(false)
  }
 
  let { user } = isAuthenticate();
  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    navigate("/login");
  }


  let [sidebar, showSidebar] = useState(false);

  return (
    <>
      <header
        className="w-full  sticky top-0 bg-white z-10 "
        style={{ "box-shadow": "3px 3px 5px rgba(0, 0, 0, 0.1)" }}
      >
        <div className="flex sm:w-11/12 m-auto md:justify-around items-center sm:col-span-1 md:col-span-3  pt-3 pb-2 justify-between">
          <Link
            to="/"
            className=" text-3xl font-bold py-4 w-3/10 italic pl-3 text-gray-600"
          >
            Nursing<span className="txtyellow">Times</span>
          </Link>

          <div className="hideOnMobile md:flex w-3/4 pl-3 hidden  ">
            <div className=" w-4/5 m-auto">
              <ul className="list-unstyle text-xl md:flex md:justify-around">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contacts</Link>
                </li>
                <li>
                  <Link to="/write">Community</Link>
                </li>
                {!user && (
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                )}
              </ul>
            </div>

            <div className=" relative ">
              {user && (
                <span>

                  {user.image ? (
                    // If user has uploaded an image, display it
                    <img className='headerImg rounded-full mr-7 cursor-pointer' src={`${API}/${user.image}`} alt="" style={{ width: "40px", height: "40px" }} onClick={() => showDropdown(!dropdown)} />
                  ) : (
                    // If no image is uploaded, display the default image
                    <img className='headerImg rounded-full mr-7 cursor-pointer' src="./images/user_img.jpg" alt="" style={{ width: "40px", height: "40px" }} onClick={() => showDropdown(!dropdown)} />
                  )}

                </span>
              )}

              {

                dropdown &&
                <div
                  style={{
                    width: "160px",
                    position: "absolute",
                    top: "120%",
                    right: "-45%",
                  }}
                  className="bg-gray-200 rounded-md"
                  ref={subdropdown}
                >
                  <div className="flex flex-col py-2 ">
                    <Link
                      to="/profile"
                      className="border-b-2 border-gray-400 my-1 mx-2 pb-1 text-center"
                      onClick={handleLinkClick}
                    >
                      Profile
                    </Link>

                    {user && user.role === "1" && (
                      <Link
                        to="/admin/dashboard"
                        className="border-b-2 border-gray-400 my-1 mx-2 pb-1 text-center"
                        onClick={handleLinkClick}
                      >
                        Dashboard
                      </Link>
                    )}

                    <Link
                      to="/settings"
                      className="border-b-2 border-gray-400 my-1 mx-2 px-2 pb-1 text-center "
                      onClick={handleLinkClick}
                    >
                      Account Settings
                    </Link>
                    {user && (
                      <li
                        onClick={logout}
                        className="cursor-pointer list-none border-b-2 border-gray-400 my-1 mx-2 px-2 pb-1 text-center" 
                      >
                        Logout
                      </li>
                    )}
                  </div>
                </div>
              }

            </div>
          </div>

          <div
            className="menu-button md:hidden pr-5 text-3xl"
            onClick={() => showSidebar(!sidebar)}
          >
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>

        {/* For smaller screen */}

        {sidebar && (
          <div
          ref={subdropdown}
          >
            <ul class="sidebar text-xl pl-10">
              <li onClick={() => showSidebar(!sidebar)} className="pt-8">
                {" "}
                <i className="fa-solid fa-xmark text-4xl"></i>{" "}
              </li>

              
              <li className="effect my-7 py-2">
                {" "}
                <Link to="/about" onClick={handleLinkClick}>About</Link>{" "}
              </li>
              <li className="effect mb-7 py-2">
                {" "}
                <Link to="/contact" onClick={handleLinkClick}>Contacts</Link>{" "}
              </li>
              <li className="effect mb-7 py-2">
                {" "}
                <Link to="/write" onClick={handleLinkClick}>Community</Link>{" "}
              </li>
              {user && (
                <li className="effect mb-7 py-2">
                  {" "}
                  <Link to="/settings" onClick={handleLinkClick}>Account Settings</Link>{" "}
                </li>
              )}
              {user && user.role === 1 && (
                <li className="effect mb-7 py-2">
                  <Link to="/admin/dashboard" onClick={handleLinkClick}>Dashboard</Link>{" "}
                </li>
              )}
              {user && (
                <li className="effect mb-7 py-2" onClick={logout}>
                  {" "}
                  Logout{" "}
                </li>
              )}
              {!user && (
                <li className="effect mb-7 py-2">
                  {" "}
                  <Link to="/login">Login</Link>{" "}
                </li>
              )}
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
