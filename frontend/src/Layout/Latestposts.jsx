import React, { useEffect, useState } from 'react'
import { getpostsbyviews } from '../api/postApi'
import { Link } from 'react-router-dom'

const Latestposts = () => {
  let [posts, setPosts] = useState([])

  // useEffect(() => {
  //   getAllPost()
  //     .then(data => {
  //       setPosts(data.slice(0, 5))
  //     })
  // }, [])
  useEffect(()=>{
    getpostsbyviews()
    .then(data => {
      setPosts(data.slice(0, 5))
    })
  },[])

  // Reverse the order of the posts array
  // const reversedPosts = [...posts].reverse();

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




