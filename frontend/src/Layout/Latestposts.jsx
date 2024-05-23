import React, { useEffect, useState } from 'react'
import { getpostsbyviews } from '../api/postApi'
import { Link } from 'react-router-dom'

const Latestposts = () => {
  let [posts, setPosts] = useState([])

  useEffect(()=>{
    getpostsbyviews()
    .then(data => {
      console.log(data)
      setPosts(data?.slice(0, 5))

    })
  },[])


  return (
    <div className='latestposts max-md:hidden '>

      <div>
        <h1 className='font-semibold text-2xl text-center mb-3 '>Trending News <i className="fa-solid fa-arrow-trend-up"></i></h1>
        <hr className='border-b-2 border-b-black' />
        <div className='pt-10'>
          {
            posts?.map((post, index) => {
              return (
                <Link to={`/singlepost/${post._id}`}> <li className='text-2xl list-none ' key={post.id}> {index + 1}. {post.title}</li></Link>
              )
            })
          }
        </div>

      </div>
    </div>
  )
}

export default Latestposts




