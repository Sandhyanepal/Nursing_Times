import React from 'react'
import { API } from '../config'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {


  return (
    <div className='post flex py-3 justify-between md:w-4/5 '>

      <div className="postInfo sm:w-7/12 md:w-3/5 ">
        

        <Link to={`/singlepost/${post._id}`}>
        <h1 className="postTitle text-2xl mt-2 font-semibold">
          {post.title}</h1>
        </Link>

        <div className="postCategories">
          <h1 className="postCat text-orange-300 py-2">{post.category?.category_name}</h1>
        </div>

        
        <hr />
        <h1 className="postDate mt-2 italic text-gray-500">{new Date(post.createdAt).toDateString()}</h1>
        <p className='postDesc mt-2 line-clamp-2 text-ellipsis' dangerouslySetInnerHTML={{__html:post.description}}></p>
      </div>
      
      {post.image && (
        <img className='postImg object-cover rounded w-36 md:w-44 h-24 object-top' src={`${API}/${post.image}`} alt="" />

      )}

    </div>
  )
}

export default Post
