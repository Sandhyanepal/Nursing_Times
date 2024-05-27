import React, { useEffect, useState } from 'react'
import { getAllPost } from '../../api/postApi'
import PostView from '../../Layout/PostView'


const AdminPosts = () => {


    const [posts, setPosts] = useState([])
    const [deleteSuccess] = useState(false)

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
    }, [deleteSuccess])

   




    return (
        <div>
            <h1 className='text-5xl font-semibold w-4/6 mx-auto ml-10 pt-3' style={{ marginTop: '68px' }}>Posts</h1>
            {
                //map garna
                posts.map((post) => {
                    return (

                        <PostView post={post} />
                    )

                })
            }

        </div>
    )
}

export default AdminPosts
