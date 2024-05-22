import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API } from '../config'
import { isAuthenticate } from '../api/userApi'
import { deletecomment, deletepost, postcomment, updatepost, viewcomment } from '../api/postApi'
import EditorMCE from '../Test'


const SinglePost = () => {

    let { user } = isAuthenticate()

    const { id } = useParams()
    let [post, setPost] = useState({})

    let [error, setError] = useState('')
    let [success, setSuccess] = useState('')

    let [title, setTitle] = useState('')
    let [desc, setDesc] = useState('')
    let [updateMode, setUpdateMode] = useState(false)

    let [comments, setComments] = useState([])

    let [commentInput, setCommentInput] = useState('');



    // To fetch the post
    useEffect(() => {

        const fetchData = async () => {
            try {
                const result = await fetch(`${API}/getpost/${id}`);
                console.log("Fetch result:", result); // Log the fetch result
                const jsonResult = await result.json();
                console.log("JSON result:", jsonResult); // Log the JSON result
                setPost(jsonResult);
                setTitle(jsonResult.title)
                setDesc(jsonResult.desc)

            } catch (error) {
                console.error("Error fetching post:", error);
            }
        };

        console.log("ID:", id); // Log the ID
        fetchData();

        viewcomment(id)
            .then(data => {
                if (data.error) {
                    console.log(data.error)
                }
                else {
                    console.log("viewcomment:", data)
                    setComments(data)
                }
            })
    }, [id, success])


    // To delete the post
    const handleDelete = async (event) => {
        event.preventDefault()

        try {
            const response = await deletepost(post._id, user._id)
            console.log(response);
            if (response.error) {
                setSuccess('')
                setError(response.error)
            }
            else {
                setSuccess("Post Deleted.")
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

    // To edit the post
    const handleEdit = async (event) => {
        event.preventDefault()

        try {
            const response = await updatepost(id, { title, description: desc })
            if (response.error) {
                setSuccess('')
                setError(response.error)
            }
            else {
                setSuccess('Your post has been updated')
                setError('')
                window.location.reload()

            }
        }
        catch (error) {
            console.error('Error:', error);
            setError('An error occurred while editing the post.');
            setSuccess('');
        }
    }

    const showError = () => {
        if (error) {
            return <div className='font-bold text-red-700 underline text-lg pt-2 text-center'>{error}</div>
        }
    }

    const showSuccess = () => {
        if (success) {
            return <div className='text-green-500 text-lg font-bold text-center'>{success}</div>
        }
    }





    // For Adding comment
    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccess(false)
        const postId = id;
        postcomment(postId, commentInput, user._id)
            .then(data => {
                if (data.error) {
                    setSuccess('')
                    setError(data.error)
                }
                else {
                    setSuccess('')
                    setError('')
                    setCommentInput('');
                }
            })
            .catch(err => console.log(err))
    }



    // For deleting comment
    const deleteCmn = (cid) => async e => {
        // e.preventDefault();
        try {
            const response = await deletecomment(cid, user._id)
            console.log(user._id)
            console.log(response)
            if (response.error) {
                setSuccess('')
                setError(response.error)
            }
            else {
                setSuccess('Comment Deleted')
                setError('')
            }
        }
        catch (error) {
            console.error('Error:', error);
            setError('An error occurred while deleting the comment.');
            setSuccess('');
        }

    }

    const handleEditorChange = (msg) => {
        console.log(msg)
        setDesc(msg.toString())
    }


    return (
        <div className='w-11/12 m-auto'>

            {showError()}
            {showSuccess()}

            <div className="singlePost">
                <div className="singlePostWrapper flex flex-col">

                    {post.image && (
                        <img className='postImg object-cover object-top rounded-md w-11/12 m-auto pt-6' src={`${API}/${post.image}`} alt="" style={{ height: '70vh' }} />
                    )}

                    <div className='items-center mt-5 '>

                        {updateMode ? (<input type='text' value={title} className='singlePostTitle text-center text-3xl font-bold py-2 border-b-2 w-11/12 ml-12' onChange={(e) => setTitle(e.target.value)} />) : (
                            <h1 className='singlePostTitle text-center  text-3xl font-bold flex flex-col w-11/12 m-auto'>
                                {post.title}

                                {post.userId?.username === user?.username && (
                                    <div className="singlePostEdit flex gap-5 self-end">

                                        <i className="fa-regular fa-pen-to-square text-green-500 cursor-pointer text-2xl" onClick={() => setUpdateMode(true)}></i>
                                        <i className="fa-solid fa-trash text-red-500 cursor-pointer text-2xl" onClick={handleDelete}></i>
                                    </div>
                                )}
                            </h1>
                        )}

                    </div>

                    <div className="singlePostInfo flex justify-between mt-5 w-11/12 m-auto">
                        <h1>Author: <b>{post.userId?.username}</b></h1>
                        <h2>{new Date(post.createdAt).toDateString()}</h2>
                    </div>

                    {updateMode ?
                        (
                        // <textarea className='w-11/12 m-auto mt-5 border-b-2 p-5 h-48 resize-none' value={desc} onChange={(e) => setDesc(e.target.value)}>{post.description}
                        
                        // </textarea>
                        <EditorMCE handleEditorChange={handleEditorChange} value={desc}/>
                            
                    
                )
                        :
                        (
                            <p className='w-11/12 m-auto my-5' dangerouslySetInnerHTML={{__html:post.description}}>
                                
                            </p>
                        )}

                    {updateMode && (
                        <button className='updateButton bg-yellow-500 text-white py-1 rounded-md mt-3 w-24 self-end me-5 md:me-10' onClick={handleEdit}>Update</button>
                    )}
                </div>
            </div>

            {/* For comments */}
            <div className="container mx-auto mt-4 w-11/12">
                <div className="gridgrid-cols m-4">
                    <h3 className=' text-xl font-bold py-5'>Comments</h3>

                    <input type="text" placeholder='Add a comment' className='border p-2 w-full mt-2' onChange={e => setCommentInput(e.target.value)} value={commentInput} />
                    <button className='bg-yellow-500 px-4 py-1 rounded-lg text-white my-3 ' onClick={handleSubmit}>Comment</button>


                    {
                        comments.map((cmnt) => {
                            return <div key={cmnt._id} className='flex py-3'>
                                <div className='flex justify-between w-full'>
                                    <div className='w-3/4'>
                                        <h1 className='line-clamp-2 text-ellipsis font-semibold'>{cmnt.postedBy?.username}</h1>
                                        <h1 className='pb-1 pt-1'>{cmnt.comment_msg}</h1>
                                    </div>
                                    <i className="fa-solid fa-trash text-red-500" onClick={deleteCmn(cmnt._id)}></i>
                                </div>

                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SinglePost