import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { isAuthenticate } from '../api/userApi'



const Header = () => {
    let [dropdown, showDropdown] = useState(false)

    let { user } = isAuthenticate()
    const navigate = useNavigate()


    function logout() {
        localStorage.clear();
        navigate('/login')
    }


    return (
        <>

            <header className='w-full  sticky top-0 bg-white z-10 ' style={{ 'box-shadow': '3px 3px 5px rgba(0, 0, 0, 0.1)' }}
            //  className='md:flex sm:w-11/12 m-auto md:justify-around items-center sm:col-span-1 md:col-span-3  pt-5 sticky top-0 bg-white z-10 shadow-lg shadow-indigo-500/40'
            >
                <div className='flex sm:w-11/12 m-auto md:justify-around items-center sm:col-span-1 md:col-span-3  pt-3 pb-2 justify-between'>

                    <Link to='/' className=" text-3xl font-bold py-4 w-3/10 italic pl-3 text-gray-600">Nursing<span className='text-yellow-500'>Times</span></Link>

                    <div className='md:flex w-3/4 pl-3 hidden md:block'>
                        <div className=" w-4/5 m-auto">
                            {/* <div className=" w-3/6 m-auto"> */}
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

                        <div className='md:w-1/5 flex  items-center relative justify-center'>

                            {user && (
                                <span><img className='headerImg rounded-full mr-7' src="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" style={{ width: "40px", height: "40px" }} onClick={() => showDropdown(!dropdown)} /></span>
                            )}

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

                                        {
                                            user && user.role == 1 &&
                                            <Link to='/admin/dashboard' className='border-b-2 border-gray-400 my-1 mx-2 pb-1'>Dashboard</Link>
                                        }

                                        <Link to='/settings' className='border-b-2 border-gray-400 my-1 mx-2 px-2 pb-1'>Account Settings</Link>
                                        {
                                            user && (
                                                <li onClick={logout} className='cursor-pointer list-none border-b-2 border-gray-400 my-1 mx-2 px-2 pb-1'>Logout</li>
                                            )}
                                    </div>
                                </div>
                            }

                            <FontAwesomeIcon icon={faMagnifyingGlass} className=' text-2xl' />

                        </div>
                    </div>


                    <div className='block md:hidden pr-5 text-3xl'>
                        <i className="fa-solid fa-bars"></i>
                    </div>



                </div>


                {/* For samller screen */}
                <div className='block md:hidden pl-3'>
                        <ul class='sidebar text-xl '>
                            <li> <i className='fa-solid fa-xmark text-3xl'></i> </li>

                            <li> <i className='fa-solid fa-magnifying-glass'></i> </li>

                            {/* <li className='py-3'> <Link to="/">Home</Link> </li> */}
                            <li className='py-3'> <Link to="/about">About</Link> </li>
                            <li className='pb-3'> <Link to="/contact">Contacts</Link> </li>
                            <li className='pb-3'> <Link to="/write">Community</Link> </li>
                            <li className='pb-3'> { user && ( <Link to='/settings'>Account Settings</Link>) } </li>
                            <li className='pb-3'> { user && user.role == 1 && <Link to='/admin/dashboard'>Dashboard</Link>} </li>
                            <li className='pb-3'> { user && (<li onClick={logout} className='cursor-pointer'>Logout</li>)} </li>
                            <li className='pb-3'> { !user && <Link to="/login">Login</Link> } </li>
                        </ul>
                    </div>

            </header>
        </>
    )
}

export default Header
