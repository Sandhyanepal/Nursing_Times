import React from 'react'
import { API } from '../config'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {
  return (
    <div className='post w-4/5 flex py-3 justify-between'>
      <div className="postInfo flex flex-col ">
        

        {/* <Link to = {`${API}/getpost/${post._id}`}> */}
        <Link to={`/singlepost/${post._id}`}>
        <div className="postTitle text-2xl mt-2">
          {post.title}</div>
        </Link>

        <div className="postCategories">
          <div className="postCat text-orange-300 py-2">{post.category?.category_name}</div>
        </div>

        
        <hr />
        <div className="postDate mt-2 italic text-gray-500">{new Date(post.createdAt).toDateString()}</div>
        <p className='postDesc mt-2 line-clamp-3 text-ellipsis'>{post.description}</p>
      </div>
      
      <img className='postImg object-cover rounded  w-56' src={`${API}/${post.image}`} alt="" />

    </div>
  )
}

export default Post
