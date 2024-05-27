import React, { useState } from 'react'
import Post from './Post'

const Posts = ({ posts }) => {
  console.log("Posts.jsx:", posts)

  let [limit, setLimit] = useState(6)

  

  const showMore = () => {
    setLimit(limit + 2)
  }

  // Reverse the order of the posts array
  const reversedPosts = [...posts].reverse();

  return (
    <>
    
      <h1 className='font-bold text-4xl mb-3 underline'>News</h1>

      

      {reversedPosts.slice(0, limit).map((post) => {
        return <Post post={post} />;
      })}

      <button className='absolute yellowbg mt-4 p-1 rounded-md' onClick={showMore}>Show more</button>

    </>
  )
}

export default Posts
