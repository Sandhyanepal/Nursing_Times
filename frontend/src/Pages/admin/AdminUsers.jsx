import React, { useEffect, useState } from 'react'
import { deleteuser, getallusers } from '../../api/userApi'
import { Link } from 'react-router-dom'
import { API } from '../../config'
import img from '../../assets/images/user_img.jpg'

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
                .then(data => {
                    if (data.error) {
                        alert(data.error)
                        setSuccess(false)
                    }
                    else {
                        setSuccess(true)
                        alert("User Deleted")
                    }
                })
        }
    }

    return (
        <div className='flex flex-col'>

            <div className='pl-12'>
                <h1 className='text-5xl font-semibold md:w-full pt-3' style={{ marginTop: '68px' }}>Users</h1>
                <div className='pt-5 pl-8'>

                    {user && user.length > 0 ? (
                        user.map(user => (
                            <div key={user._id} className='flex mt-8 md:flex-row md:items-center justify-between flex-col' style={{ width: '48vw' }}>

                                <div className='flex flex-col md:flex-row'>

                                    {/* <img src="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" style={{ width: '100px', height: '100px' }} /> */}

                                    {user.image ? (
                                        // If user has uploaded an image, display it
                                        <img className='headerImg cursor-pointer object-cover' src={`${API}/${user.image}`} alt="" style={{ width: '100px', height: '100px' }} />
                                    ) : (
                                        // If no image is uploaded, display the default image
                                        <img className='headerImg cursor-pointer' src={img} alt="" style={{ width: '100px', height: '100px' }} />
                                    )}

                                    <div className='md:px-5'>
                                        <h1 className='pb-1 font-semibold  '>{user.username}</h1>
                                        <p className='pb-1 '>{user.email}</p>
                                        <Link to={`../userposts/${user._id}`} className='yellowbg my-1 p-1 rounded-md'>View Posts</Link>
                                    </div>

                                </div>
                                <div className='mt-3 md:mt-0'>
                                    <button className='bg-red-500 p-1 text-white rounded-md' onClick={handleDelete(user._id)}>Delete User</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        // Display loading message or spinner if users  data is not yet fetched
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AdminUsers
