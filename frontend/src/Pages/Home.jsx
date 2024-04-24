import React, { useEffect, useState } from 'react'
import Banner from '../Layout/Banner'
import Posts from '../Layout/Posts'
import Latestposts from '../Layout/Latestposts'
import axios  from 'axios'
import { API } from '../config'

const Home = () => {

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
        <div >
            <Banner />
            
            <div className="home flex w-11/12 m-auto mt-11">
                <Posts posts = {posts} />
                <Latestposts/>
            </div>


        </div>
    )
}

export default Home;
