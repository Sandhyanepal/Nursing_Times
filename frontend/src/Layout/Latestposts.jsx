import React, { useEffect, useState } from 'react'
import { getAllPost } from '../api/postApi'

const Latestposts = () => {
  let [posts, setPosts] = useState([])

  useEffect(() => {
    getAllPost()
      .then(data => {
        setPosts(data.slice(0, 5))
      })
  }, [])

  return (
    <div className='latestposts max-md:hidden '>

      {/* <div className="flex flex-col gap-10"></div> */}
      <div>
        <h1 className='font-semibold text-2xl text-center mb-3 '>Trending News <i className="fa-solid fa-arrow-trend-up"></i></h1>
        <hr className='border-b-2 border-b-black' />
        <div className='pt-10'>
          {
            posts.map((post, index) => {
              return (
                <li className='text-2xl list-none ' key={post.id}> {index + 1}. {post.title}</li>
              )
            })
          }
        </div>

      </div>
    </div>
  )
}

export default Latestposts




