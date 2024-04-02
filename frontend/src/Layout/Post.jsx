import React from 'react'
import { API } from '../config'

const Post = ({post}) => {
  return (
    <div className='post w-5/12 '>
      <img className='postImg object-cover rounded ' src={`${API}/${post.image}`} alt="" />
      <div className="postInfo flex flex-col ">
        <div className="postCategories">
            <div className="postCat text-orange-300 mt-4">{post.category}</div>
            {/* <span className="postCat">Medicine</span> */}
        </div>
        <div className="postTitle text-2xl mt-2">
{post.title}        </div>
        <hr />
        <p className='postDesc mt-2 line-clamp-3 text-ellipsis'>{post.description}</p>
        <div className="postDate mt-2 italic text-gray-500">{post.createdAt}</div>
      </div>
      
    </div>
  )
}

export default Post
