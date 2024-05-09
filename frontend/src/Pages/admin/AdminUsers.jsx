import React, { useEffect, useState } from 'react'
import {  deleteuser, getallusers } from '../../api/userApi'
import { Link } from 'react-router-dom'

const AdminUsers = () => {


    let [user, setUser] = useState([])

    // let [error, setError] = useState('')
    let [success, setSuccess] = useState(false)

    useEffect(() => {
        getallusers()
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    console.log(data)
                    setUser(data)
                }
            })
    }, [success])

    const handleDelete = (id) => async event => {
        event.preventDefault()

        const confirmed = window.confirm("Are you sure you want to delete this user?")
        if (confirmed === true) {
            deleteuser(id)
            .then(data =>{
                if(data.error){
                    alert(data.error)
                    setSuccess(false)
                }
                else{
                    setSuccess(true)
                    alert("User Deleted")
                }
            })
        }
    }

    return (
        <div className='flex'>

        <div className='ml-12 '>

            <h1 className='text-5xl font-semibold' style={{marginTop:'68px'}}>Users</h1>

            <div className='pt-5 ml-8 '>

            
            {user && user.length > 0 ? (
                user.map(user => (
                    <div key={user._id} className='flex mt-8 items-center justify-between' style={{width:'30vw'}}>
                        <div className='flex'>

                            <img src="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" style={{ width: '100px', height: '100px' }} />

                            <div className='px-5'>
                                <h1 className='pb-1 font-semibold'>{user.username}</h1>
                                <p className='pb-1'>{user.email}</p>
                                <Link to={`../userposts/${user._id}`} className='my-1 p-1 bg-yellow-500 text-white rounded-md'>View Posts</Link>
                            </div>

                        </div>
                        <div className=''>
                            <button className='bg-red-500 p-1 text-white rounded-md' onClick={handleDelete(user._id)}>Delete User</button>
                        </div>
                    </div>
                ))
            ) : (
                // Display loading message or spinner if users data is not yet fetched
                <p>Loading...</p>
            )}
            </div>

        </div>
        </div>
    )
}

export default AdminUsers
