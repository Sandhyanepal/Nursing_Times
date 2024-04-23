import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API } from '../../config'

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
  return (
    <div>
        <div className="dash flex w-full "></div>
    </div>
  )
}

export default DPost