import React from 'react'

const ForgetPassword = () => {
    return (
        <div className='w-11/12 m-auto mt-8' style={{height: '40vh'}}>
            <div className="my-5 pt-12">
                <div className="shadow-md p-3 w-3/5 m-auto ">
                    <h1 className='text-center text-2xl font-semibold '>Forget Password</h1>
                    <div className="mt-5 flex gap-2 flex-wrap ">
                        <label htmlFor="email" className='text-xl'>Email</label>
                        <input type="email" name='email' id='email' className='border-2 rounded-md border-black  py-1 w-full xl:w-11/12 px-2' placeholder='Enter email...' />
                    </div>
                    <div className="mt-5 ">
                        <button className='bg-yellow-500 py-1 px-2 rounded-md text-white'>Send Email</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgetPassword
