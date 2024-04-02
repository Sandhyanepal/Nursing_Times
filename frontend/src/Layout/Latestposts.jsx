import React, { useEffect, useState } from 'react'
import { getAllPost } from '../api/postApi'

const Latestposts = () => {
let [posts, setPosts] = useState([])

useEffect(()=>{
  getAllPost()
  .then(data=>{
    setPosts(data.slice(0,4))
  })
},[])

  return (
    <div className='latestposts max-md:hidden'>
      
      <div className="flex flex-col gap-10"></div>
      <div>
        <h1 className='font-medium text-xl mb-3'>Trending <i className="fa-solid fa-arrow-trend-up"></i></h1>
        <hr className='border-b-2 border-b-black'/>
        
{
  posts.map(post=>{
    return <li>{post.title}</li>
  })
}

      </div>
    </div>
  )
}

export default Latestposts




