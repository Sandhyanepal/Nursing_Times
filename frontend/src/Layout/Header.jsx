import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-5 w-screen py-3">
                <div className="text-center text-3xl font-bold">NursingTimes</div>
                <div className="md:col-span-3 sm:col-span-2 px-3">
                    <ul className='list-unstyle text-xl md:flex md:justify-evenly'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contacts</Link></li>
                        <li><Link to="/contact">Write</Link></li>
                        <li><Link to="/contact">Logout</Link></li>
                    </ul>
                </div>
                <div className='header-right'>
                    <img className='headerImg rounded-full' src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" style={{width:"40px",height:"40px"}} />
                </div>

            </header>
        </>
    )
}

export default Header
