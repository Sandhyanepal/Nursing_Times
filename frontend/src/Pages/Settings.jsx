import React from 'react'
import Header from '../Layout/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import Footer from '../Layout/Footer'

const Settings = () => {
    return (
        <>

            <div className="settings w-11/12 m-auto mt-10">
                <div className="settingTitle flex items-center justify-between">
                    <div className='text-3xl mb-5 text-red-500'>Update Your Account</div>
                    <button className='mb-5 px-2 py-1 rounded-lg bg-yellow-500 text-white'>Delete Account</button>
                </div>
                <form className='settingsForm flex flex-col'>
                    <label className='my-3 text-xl'>Profile Picture</label>
                    <div className="settingsPP flex items-center my-3">
                        <img src="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='w-20 h-20 rounded-2xl object-cover'/>
                        <label htmlFor="fileInput">
                            <FontAwesomeIcon icon={faUserCircle} className='w-6 h-6 p-1 rounded-3xl bg-yellow-500 text-white flex justify-center items-center ml-3 cursor-pointer' />
                        </label>
                        <input type="file" id='fileInput' style={{ display: 'none' }} />
                    </div>
                    <label className='text-2xl mt-5 pl-1'>Username</label>
                    <input type="text" placeholder='Hazel' className='text-gray-500 my-3 py-2 pl-1 border-b-2'/>
                    <label className='text-2xl mt-5 pl-1'>Email</label>
                    <input type="email" placeholder='Hazel@gmail.com' className='text-gray-500 my-3 py-2 pl-1 border-b-2' />
                    <label className='text-2xl mt-5 pl-1'>Password</label>
                    <input type="password" className='text-gray-500 my-3 py-2 pl-1 border-b-2' />
                    <button className=' bg-yellow-500 self-end py-1 px-4 rounded-md text-white'>Update</button>
                </form>
            </div>

        </>
    )
}

export default Settings
