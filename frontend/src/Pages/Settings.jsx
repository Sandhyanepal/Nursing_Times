import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { deleteuser, isAuthenticate, updateuser } from '../api/userApi'
// import { API } from '../config'
import { useParams } from 'react-router-dom'

const Settings = () => {

    // let { user } = isAuthenticate()
    const { id } = useParams()

    const [user, setUser] = useState(isAuthenticate().user);
    // console.log(user);
    const { token } = isAuthenticate()
    // console.log(token)


    let [username, setUsername] = useState('')
    let [email, setEmail] = useState('')
    // let [password, setPassword] = useState('')

    // let {username, email} = user

    let [error, setError] = useState('')
    let [success, setSuccess] = useState(false)

    // let [updateMode, setUpdateMode] = useState(false)


    // useEffect(() => {
    //     setUser()
    // }, [success]);


    const handleEdit = async (e) => {
        e.preventDefault();

        const updatedUser = {
            userId: user._id,
            username,
            email
        };


        updateuser(user._id, updatedUser,
            token)
            .then(response => {
                console.log(response);
                if (response.error) {
                    setSuccess(false)
                    setError(response.error)
                } else {
                    console.log('User updated successfully:', response);
                    // setUser(response);
                    // console.log(response)
                    // setUsername(response.username);
                    // setEmail(response.email);
                    // setUpdateMode(false);
                    setSuccess(true)
                    setError('')
                    window.location.reload()
                    setUser({ ...user, ...updatedUser });
                }

            })
            .catch(error => {
                console.error('Error:', error);
                setError('An error occurred while updating user.');
                setSuccess(false);

            }
            )
    }


    const handleDelete = async (event) => {
        event.preventDefault()

        try {
            const response = await deleteuser(user._id, id)
            console.log(response);
            // console.log(response)
            if (response.error) {
                setSuccess(false)
                setError(response.error)
            }
            else {
                setSuccess(true)
                setError('')
                localStorage.clear();
                window.location.replace('/')
            }
        }
        catch (error) {
            console.error('Error:', error);
            setError('An error occurred while deleting the post.');
            setSuccess(false);
        }
    }


    const showError = () => {
        if (error) {
            return <div className='font-bold text-red-700 underline text-lg pt-2 text-center'>{error}</div>
        }
    }

    const showSuccess = () => {
        if (success) {
            return <div className='text-green-500 text-lg font-bold text-center'>"Your profile has been updated successfully."</div>
        }
    }


    return (
        <>

            <div className="settings w-11/12 m-auto mt-10">
                {showError()}
                {showSuccess()}
                <div className="settingTitle flex items-center justify-between flex-wrap">
                    <h1 className='text-3xl mb-5 text-red-500'>Update Your Account</h1>

                    <div className=''>
                        {/* <button
                            className='mb-5 w-20 py-1 rounded-lg bg-yellow-500 text-white'
                            onClick={() => setUpdateMode(true)}
                        >Edit</button> */}
                        <button className='bg-red-500 py-1 w-32 rounded-md text-white ml-3' onClick={handleDelete}>DeleteAccount</button>
                    </div>

                </div>
                <form className='settingsForm flex flex-col' onSubmit={handleEdit}>
                    <label className='my-3 text-xl'>Profile Picture</label>
                    <div className="settingsPP flex items-center my-3">
                        <img src={user.image} alt="" className='w-20 h-20 rounded-2xl object-cover' />
                        <label htmlFor="fileInput">
                            <FontAwesomeIcon icon={faUserCircle} className='w-6 h-6 p-1 rounded-3xl bg-yellow-500 text-white flex justify-center items-center ml-3 cursor-pointer' />
                        </label>
                        <input type="file" id='fileInput' style={{ display: 'none' }} />
                    </div>
                    <label className='text-2xl mt-5 pl-1'>Username</label>
                    {/* {
                        updateMode ? (<input type="text" className='text-gray-500 my-3 py-2 pl-1 border-b-2' placeholder={user.username} onChange={e => setUsername(e.target.value)} />)
                        :
                    } */}
                    <input type="text" className='text-gray-500 my-3 py-2 pl-1 border-b-2' placeholder={user.username} onChange={e => setUsername(e.target.value)} />

                    <label className='text-2xl mt-5 pl-1'>Email</label>
                    {/* {
                        updateMode ? (<input type="email" className='text-gray-500 my-3 py-2 pl-1 border-b-2' placeholder={user.email} onChange={e => setEmail(e.target.value)} />)
                            :
                        } */}
                    <input type="email" className='text-gray-500 my-3 py-2 pl-1 border-b-2' placeholder={user.email} onChange={e => setEmail(e.target.value)} />

                    <label className='text-2xl mt-5 pl-1'>Password</label>
                    {/* {
                        updateMode ? (<input type="password" className='text-gray-500 my-3 py-2 pl-1 border-b-2' placeholder={password} onChange={e => setPassword(e.target.value)} />)
                            :
                        } */}
                    <input type="password" className='text-gray-500 my-3 py-2 pl-1 border-b-2' placeholder="**********" />

                    {/* {updateMode && ( */}
                    <button className=' bg-yellow-500 py-1 w-24 rounded-md text-white mt-5 self-end' type='Submit'>Update</button>

                </form>
            </div>

        </>
    )
}

export default Settings
