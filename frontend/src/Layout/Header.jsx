import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { isAuthenticate} from '../api/userApi'



const Header = () => {
let [dropdown, showDropdown] = useState(false)

let {user} = isAuthenticate()
const navigate = useNavigate()


function logout(){
    localStorage.clear();
    navigate('/login')
}


    return (
        <>
        
            <header className='md:flex sm:w-11/12 m-auto md:justify-around items-center sm:col-span-1 md:col-span-3 text-center sticky top-0 bg-white z-10'>
                <Link to='/' className=" text-3xl font-bold py-4 w-3/10 italic md:text-start text-gray-600">NursingTimes</Link>
                <div className=" w-3/6">
                    <ul className='list-unstyle text-xl md:flex md:justify-around'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contacts</Link></li>
                        <li><Link to="/write">Community</Link></li>
                        {!user &&
                            <li><Link to="/login">Login</Link></li>
                        }

                    </ul>
                </div>
                <div className='w-1/5 md:flex md:justify-center items-center relative'>

                    {user && (
                        <span><img className='headerImg rounded-full' src="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" style={{ width: "40px", height: "40px" }} onClick={()=>showDropdown(!dropdown)}/></span>
                    )}
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='pl-9 text-2xl' />


                   {
                    dropdown &&
                   <div style={{
                        // height:'400px',
                        // width: '250px',
                        position: 'absolute',
                        top: '120%', 
                        right: '33%'
                        // display: 'none',
                    }} className='bg-gray-200 rounded-md'>
                        <div className='flex flex-col py-2 '>
                            <button className='border-b-2 border-gray-400 my-1 mx-2 pb-1'>Profile</button>
                            <Link to='/admindashboard' className='border-b-2 border-gray-400 my-1 mx-2 pb-1'>Dashboard</Link>
                            <Link to='/settings' className='border-b-2 border-gray-400 my-1 mx-2 px-2 pb-1'>Account Settings</Link>
                            {
                                user && (
                                    <li onClick={logout} className='cursor-pointer list-none border-b-2 border-gray-400 my-1 mx-2 px-2 pb-1'>Logout</li>
                            )}
                        </div>
                    </div>
                   } 
                </div>

            </header>
        </>
    )   
}

export default Header
