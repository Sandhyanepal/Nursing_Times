import React from 'react'
import Header from '../Layout/Header'

const Write = () => {
    return (
        <>
            <Header />

            <img src="https://images.pexels.com/photos/126271/pexels-photo-126271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='w-3/5 h-72 m-auto mt-8  object-cover object-center rounded-lg' />


            <div className="write w-11/12 m-auto pt-9">
                <form className='writeForm relative'>
                    <div className="writeFormGroup ml-36 flex items-center">
                        <label htmlFor="fileInput">
                            <i className="fa-solid fa-plus writeIcon text-xl text-gray-500"></i>
                        </label>
                        <input type="file" id='fileInput' style={{ display: "none" }} />
                        <input type="text" placeholder='Title' className='text-3xl p-5 ml-2 focus:outline-none' style={{width: "60vw"}}/>
                    </div>
                    <div className="writeFormGroup ml-40 text-xl">
                        <textarea placeholder='Tell your story...' type="text" className='focus:outline-none resize-none' style={{width: "70vw", height: "50vh"}}></textarea>
                    </div>
                    <button className='absolute top-6 right-28 text-white bg-gray-600 p-1 rounded-md'>Publish</button>
                </form>
            </div>
        </>
    )
}

export default Write
