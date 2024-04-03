import React, { useEffect, useState } from 'react'
import Post from './Post'
import { getAllPost } from '../api/postApi'

const Posts = () => {

  let [posts, setPosts] = useState([])
  let [limit, setLimit] = useState(4)

  useEffect(() => {
    getAllPost()
      .then(data => {
        if (data.error) {
          console.log(data.error)
        }
        else {
          console.log(data)
          setPosts(data)
        }
      })
  }, [])

  const showMore = () => {
    setLimit(limit+2)
  }

  return (
    <>
    <div className='posts flex flex-wrap gap-11 w-4/5'>
      {
        posts.slice(0,limit).map(post=>{
          return <Post post = {post}/>
        })
      }


    </div>
      <button className='absolute' onClick={showMore}>Show more</button>
    
    </>
  )
}

export default Posts
