import React, { useState } from 'react'
import Post from './Post'
// import { getAllPost } from '../api/postApi'

const Posts = ({ posts }) => {
  // const Posts = (params) => {
  //   let posts = params.post

  let [limit, setLimit] = useState(4)

  // useEffect(() => {

  // }, [])

  const showMore = () => {
    setLimit(limit + 2)
  }

  // Reverse the order of the posts array
  const reversedPosts = [...posts].reverse();

  return (
    <>

      {/* {
        posts.slice(0,limit).map((post)=>{
          return <Post post = {post}/>
        })
      } */}

      {reversedPosts.slice(0, limit).map((post) => {
        return <Post post={post} />;
      })}

      <button className='absolute bg-yellow-500 mt-4 p-1 text-white rounded-md' onClick={showMore}>Show more</button>

    </>
  )
}

export default Posts
