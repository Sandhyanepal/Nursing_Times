import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getpostbycategory } from '../api/postApi'
import PostView from '../Layout/PostView'

const CategoryPost = () => {

    let [posts, setPosts] = useState([])
    let { id } = useParams()

    useEffect(() => {
        getpostbycategory(id)
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

    return (
        <div>
            {posts && posts.length > 0 ? (
                
                    posts?.map((post) => {
                        return (
                            <PostView post={post} />
                        )
                    })
                

            ) : (
                // Display loading message or spinner if users data is not yet fetched
                <p className='text-3xl text-center py-32'>Loading...</p>
            )}
            

        </div>
    )
}

export default CategoryPost
