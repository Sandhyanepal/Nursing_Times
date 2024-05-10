import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { API } from '../config'
import { isAuthenticate } from '../api/userApi'
import { deletepost } from '../api/postApi'

const PostView = ({ post }) => {

    let {user} = isAuthenticate()

    // const [posts, setPosts] = useState([])

    const [deleteSuccess, setDeleteSuccess] = useState(false)

   

    const handleDelete = postId => (event) => {
        // event.preventDefault()
        const confirmed = window.confirm("Are you sure you want to delete this post?")
        if (confirmed === true) {
            deletepost( postId, user._id)
                .then(data => {
                    if (data.error) {
                        alert(data.error)
                        setDeleteSuccess(false)
                    }
                    else {
                        setDeleteSuccess(true)
                        alert('Post Deleted.')
                    }
                })
        }
    }

    return (
        <div key={post._id} className='flex w-3/5 py-5  ml-16'>
            <div className='w-2/5'>
                <h1 className='font-bold pb-1 pt-1'>{post.title}</h1>
                <p className='pb-2  line-clamp-2 text-ellipsis'>{post.description}</p>
                <div className=' flex gap-3'>

                    <Link to={`/singlepost/${post._id}`} className='bg-yellow-500 p-1 rounded-md text-white '>Read More</Link>

                    <button className=' bg-red-500 p-1 rounded-md text-white ' onClick={handleDelete(post._id)}>Delete</button>
                </div>
            </div>
            <img className='postImg object-cover rounded w-11/12 m-auto' src={`${API}/${post.image}`} alt="" style={{ height: '130px', width: '200px' }} />
        </div>
    )
}

export default PostView