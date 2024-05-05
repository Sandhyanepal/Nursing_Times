import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { API } from '../config'
import { isAuthenticate } from '../api/userApi'
import { deletepost, updatepost, viewcomment } from '../api/postApi'

const SinglePost = () => {

    let { user } = isAuthenticate()

    const { id } = useParams()
    let [post, setPost] = useState({})

    let [error, setError] = useState('')
    let [success, setSuccess] = useState(false)

    let [title, setTitle] = useState('')
    let [desc, setDesc] = useState('')
    let [updateMode, setUpdateMode] = useState(false)

    let [ comments, setComments] = useState('')
    


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
    }, [id]);


    const handleDelete = async (event) => {
        event.preventDefault()

        try {
            const response = await deletepost(id, user._id)
            // const response = await deletepost( id)
            console.log(response);
            // console.log(response)
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


    const handleEdit = async (event) => {
        event.preventDefault()

        try {
            const response = await updatepost(id, { title, description: desc })
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

    const showSuccess = () => {
        if (success) {
            return <div className='text-green-500 text-lg font-bold text-center'>"Your profile has been updated successfully."</div>
        }
    }


    // useEffect(()=>{
    //     viewcomment(id)
    //     .then(data => {
    //         if(data.error){
    //             console.log(data.error)
    //         }
    //         else{
    //             console.log("viewcomment:",data)
    //             setComments(data)
    //         }
    //     })
    // },[])



    const handleSubmit = (e) => {
        e.preventDefault();
        viewcomment({comments})
        .then(data =>{
            if(data.error){
                setError(data.error)
                setSuccess(false)
            }
            else{
                setError('')
                setSuccess(true)
                setComments('')
            }
        })
        .catch(err => console.log(err))        
    }

    
    return (
        <div className='w-11/12 m-auto'>

            {showError()}
            {showSuccess()}

            <div className="singlePost">
                <div className="singlePostWrapper flex flex-col">

                    {post.image && (
                        <img className='postImg object-cover rounded w-11/12 m-auto ' src={`${API}/${post.image}`} alt="" style={{ height: '60vh' }} />
                    )}

                    <div className='items-center mt-5 '>

                        {updateMode ? (<input type='text' value={title} className='singlePostTitle text-center text-3xl font-bold py-2 border-b-2 w-11/12 ml-12' onChange={(e) => setTitle(e.target.value)} />) : (
                            <h1 className='singlePostTitle text-center  text-3xl font-bold flex flex-col w-11/12 m-auto'>
                                {post.title}

                                 {post.userId?.username === user?.username  && (
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

                    {updateMode ? (<textarea className='w-11/12 m-auto mt-5 border-b-2 p-5 h-48 resize-none' value={desc} onChange={(e) => setDesc(e.target.value)}>{post.description}</textarea>) : (
                        <p className='w-11/12 m-auto my-5'>{post.description}
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptatem culpa vel et at excepturi ea optio odio quam nulla! Deserunt in et repudiandae distinctio doloremque sed, suscipit soluta quam aliquid deleniti tenetur animi iusto.
                        </p>
                    )}

                    {updateMode && (
                        <button className='updateButton bg-yellow-500 text-white py-1 rounded-md mt-3 w-24 self-end me-5 md:me-10' onClick={handleEdit}>Update</button>
                    )}
                </div>
            </div>

      <div className="container mx-auto mt-4">
        <div className="gridgrid-cols m-4">
          <h3 className='font-normal text-lg'>Comments</h3>
          
          {/* {
                    comments.map((cmnt) => {
                        return <div key={cmnt._id} className='flex w-3/5 py-5  ml-16'>
                            <div className='w-2/5'>
                                <h1 className='font-bold pb-1 pt-1'>{cmnt.comment_msg}</h1>
                                <p className='pb-2  line-clamp-2 text-ellipsis'>{cmnt.postedBy}</p>
                            </div>
                        </div>
                    })
                } */}
          <input type="text" placeholder='Add a comment' className='border p-2 w-full mt-2' onChange={e => setComments(e.target.value)}/>
          <button className='bg-yellow-500 px-4 py-1 rounded-lg text-white mt-3' onClick={handleSubmit}>Submit</button>
        </div>
      </div>

        </div>
    )
}

export default SinglePost
