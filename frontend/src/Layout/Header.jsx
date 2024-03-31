import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <>
        
            <header className='md:flex w-11/12 m-auto md:justify-around items-center sm:col-span-1 md:col-span-3 text-center sticky top-0 bg-white z-10'>
                <div className=" text-3xl font-bold py-4 w-3/10 italic md:text-start">NursingTimes</div>
                <div className=" w-3/6">
                    <ul className='list-unstyle text-xl md:flex md:justify-between'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contacts</Link></li>
                        <li><Link to="/write">Write</Link></li>
                        <li><Link to="/contact">Logout</Link></li>
                    </ul>
                </div>
                <div className='w-1/5 md:flex md:justify-center items-center'>
                    <Link to="/settings"><img className='headerImg rounded-full' src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" style={{ width: "40px", height: "40px" }} /></Link>
                    <i className="fa-solid fa-magnifying-glass pl-9 text-2xl"></i>
                </div>
            </header>
        </>
    )   
}

export default Header
