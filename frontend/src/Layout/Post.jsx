import React from 'react'
import { API } from '../config'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {
  return (
    <div className='post w-5/12 '>
      <img className='postImg object-cover rounded ' src={`${API}/${post.image}`} alt="" />
      <div className="postInfo flex flex-col ">
        <div className="postCategories">
          <div className="postCat text-orange-300 mt-4">{post.category}</div>
        </div>

        <Link to = {`/getpost/${post._id}`}>
        <div className="postTitle text-2xl mt-2">
          {post.title}</div>
        </Link>

        
        <hr />
        <div className="postDate mt-2 italic text-gray-500">{new Date(post.createdAt).toDateString()}</div>
        <p className='postDesc mt-2 line-clamp-3 text-ellipsis'>{post.description}</p>
      </div>

    </div>
  )
}

export default Post
