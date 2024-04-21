import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API } from '../config'
import { isAuthenticate } from '../api/userApi'
import { deletepost, updatepost } from '../api/postApi'

const SinglePost = () => {

    let { user } = isAuthenticate()

    const { id } = useParams()
    let [post, setPost] = useState({})

    let [error, setError] = useState('')
    let [success, setSuccess] = useState(false)

    let [title, setTitle] = useState('')
    let [desc, setDesc] = useState('')
    let [updateMode, setUpdateMode] = useState(false)


    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await fetch(`${API}/getpost/${id}`);
                console.log("Fetch result:", result); // Log the fetch result
                const jsonResult = await result.json();
                console.log("JSON result:", jsonResult); // Log the JSON result
                setPost(jsonResult);

            } catch (error) {
                console.error("Error fetching post:", error);
            }
        };

        console.log("ID:", id); // Log the ID
        fetchData();
    }, [id]);


    const handleDelete = async (event) => {
        event.preventDefault()

        try {
            const response = await deletepost(post._id, id)
            console.log(response);
            console.log(response)
            if (response.error) {
                setSuccess(false)
                setError(response.error)
            }
            else {
                setSuccess(true)
                setError('')
                window.location.replace('/')
            }
        }
        catch (error) {
            console.error('Error:', error);
            setError('An error occurred while deleting the post.');
            setSuccess(false);
        }
    }


    const handleEdit = async (event) =>{
        event.preventDefault()

        try{
            const response = await updatepost(id,{ title, description: desc })
            if (response.error) {
                setSuccess(false)
                setError(response.error)
            }
            else {
                setSuccess(true)
                setError('')
                window.location.reload()

            }
        }
        catch (error) {
            console.error('Error:', error);
            setError('An error occurred while editing the post.');
            setSuccess(false);
        }
    }

    const showError = () => {
        if (error) {
            return <div className='font-bold text-red-700 underline text-lg pt-2 text-center'>{error}</div>
        }
    }




    return (
        <div className='w-11/12 m-auto'>
            {id}

            {showError()}
            {/* {showSuccess()} */}

            <div className="singlePost">
                <div className="singlePostWrapper">

                    {post.image && (
                        <img className='postImg object-cover rounded w-11/12 m-auto ' src={`${API}/${post.image}`} alt="" style={{ height: '60vh' }} />
                    )}

                    <div className='flex flex-wrap items-center mt-5 w-11/12 md:full '>

                        {updateMode ? ( <input type='text' value={post.title} className='singlePostTitle text-center  text-3xl font-bold  w-11/12 border-2 rounded-md py-2' onChange={(e)=>setTitle(e.target.value)} /> ) : (
                            <h1 className='singlePostTitle text-center  text-3xl font-bold  w-11/12'>
                                {post.title}
                            </h1>
                        )}
                        

                            {post.username === user?.username && (
                            <div className="singlePostEdit flex w-1/12 gap-5">
                                {updateMode ? 
                                <i 
                                className="fa-regular fa-check-square text-green-500 cursor-pointer text-4xl pl-2" 
                                onClick={handleEdit}
                            ></i>
                            :
                            <>
                                <i className="fa-regular fa-pen-to-square text-green-500 cursor-pointer text-2xl" onClick={() => setUpdateMode(true)}></i>
                                <i className="fa-solid fa-trash text-red-500 cursor-pointer text-2xl" onClick={handleDelete}></i>
                                </>
}
                            </div>
                        )}

                    </div>

                    <div className="singlePostInfo flex justify-between mt-5 w-11/12 m-auto">
                        <h1>Author: <b>{post.username}</b></h1>
                        <h2>{new Date(post.createdAt).toDateString()}</h2>
                    </div>

                    {updateMode ? ( <textarea className='w-11/12 m-auto mt-5 border-2 rounded-md p-5 h-48' value={post.desc} onChange={(e)=>setDesc(e.target.value)}>{post.description}</textarea> ) : (
                        <p className='w-11/12 m-auto my-5'>{post.description}
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptatem culpa vel et at excepturi ea optio odio quam nulla! Deserunt in et repudiandae distinctio doloremque sed, suscipit soluta quam aliquid deleniti tenetur animi iusto. Neque facilis provident, cum voluptatibus ratione officia dicta veritatis. Doloremque asperiores ab voluptate cum possimus voluptas illum ipsam itaque beatae tenetur quia exercitationem magnam officiis, nihil eaque dolor aut consequuntur labore deserunt. Numquam quaerat ullam culpa maiores amet placeat repudiandae nostrum tempore exercitationem voluptas consequuntur earum, laudantium, nihil ducimus, qui illum et commodi provident. Quasi expedita in non amet eveniet laboriosam quod nisi labore voluptates?
                         </p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default SinglePost
