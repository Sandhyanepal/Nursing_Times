import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios  from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom"

const SinglePost = () => {
    let location = useLocation();
    const path = location.pathname.split("/")[2];

    const [post, setPost] = useState({})

    useEffect(() => {
        const getPost = async () => {
            try {
                const res = await axios.get("/getpost" + path);
                setPost(res.data); // Update state with retrieved post data
            } catch (error) {
                console.error("Error fetching post:", error);
                // Handle error (e.g., display error message to user)
            }
        };
        getPost();
    }, [path]);
    
    return (
        <div>
            <div className="singlePost">
                <div className="singlePostWrapper">
                    {post.image && (
                        <img src={post.image} alt="" />
                    )}
                    <h1 className='singlePostTitle'>
                        {post.title}
                        <div className="singlePostEdit">
                        <FontAwesomeIcon icon="fa-regular fa-pen-to-square" />
                        <FontAwesomeIcon icon="fa-solid fa-trash" />
                        </div>
                    </h1>
                    <div className="singlePostInfo">
                        <span>Author: <b>{post.username}</b></span>
                        <span>{new Date(post.createdAt).toDateString()}</span>
                    </div>
                    <p>{post.description}</p>
                </div>
            </div>
        </div>
    )
}

export default SinglePost
