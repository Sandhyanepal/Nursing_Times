import React, { useEffect, useState } from 'react'
import { getpostsbyuser } from '../../api/postApi'
import { useParams } from 'react-router-dom'
import PostView from '../../Layout/PostView'

const UserPosts = () => {

    let [posts, setPosts] = useState([])
    let {id} = useParams()

    useEffect(()=>{
        getpostsbyuser(id)
        .then(data => {
            if (data.error) {
                console.log(data.error)
            }
            else {
                console.log(data)
                setPosts(data)
            }
        })
    },[id])

    return (
        <div>
            {
                posts?.map((post) => {
                    return (
                        <PostView post={post}/>
                    )
                })
            }
        </div>
    )
}

export default UserPosts
