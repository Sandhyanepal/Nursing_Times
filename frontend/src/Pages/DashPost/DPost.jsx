import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API } from '../../config'
import Posts from '../../Layout/Posts'
// import { deletepost } from '../../api/postApi'

const DPost = () => {

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        const fetchPosts = async () =>{
            const res = await axios.get(`${API}/getallposts`)
            console.log(res)  
            setPosts(res.data)          
        }
        fetchPosts()
    }, [])

  //   const handleDelete = id => e => {
  //     setDeleteSuccess(false)
  //     console.log(id)
  //     const confirmed = window.confirm("Are you sure you want to delete this category")
  //     if(confirmed === true){
  //         deletepost(id)
  //         .then(data=>{
  //            if(data.error){
  //                alert(data.error)
  //            }
  //            else{
  //             setDeleteSuccess(true)
  //                alert(data.msg)
  //            }
  //         })
  //     }
  //  }

    

  return (
    <div>
        <div classNameName="flex w-full">
          <Posts posts = {posts} />
          {/* <button classNameName='delete button rounded-e-md'>Delete</button> */}
        </div>
    </div>
  )
}

export default DPost