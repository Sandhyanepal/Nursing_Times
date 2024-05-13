import React, { useState } from 'react'
import Post from './Post'
// import { getAllPost } from '../api/postApi'

const Posts = ({ posts }) => {
  console.log("Posts.jsx:", posts)
  // const Posts = (params) => {
  //   let posts = params.post

  let [limit, setLimit] = useState(6)

  // useEffect(() => {

  // }, [])

  const showMore = () => {
    setLimit(limit + 2)
  }

  // Reverse the order of the posts array
  const reversedPosts = [...posts].reverse();

  return (
    <>
    
      <h1 className='font-bold text-4xl mb-3 underline'>News</h1>

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
