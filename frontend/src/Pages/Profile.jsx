import React, { useEffect, useState } from 'react'
import { isAuthenticate } from '../api/userApi'
import { Link } from 'react-router-dom'
import { getpostsbyuser } from '../api/postApi'
import { API } from '../config'

const Profile = () => {

    let { user } = isAuthenticate()

    let [posts, setPosts] = useState([])

    useEffect(() => {
        getpostsbyuser(user._id)
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

    // Reverse the order of the posts array
  const reversedPosts = [...posts].reverse();

    return (
        <div>
            <h1 className='w-3/4 m-auto pt-14 pb-9 text-3xl underline font-bold'>My Posts</h1>

            {
                reversedPosts && reversedPosts.length > 0 ? (
                    // {
                        reversedPosts?.map((post) => {
                            return (
                                <div key={post._id} className='w-3/4 m-auto py-5'>
                                    <h1 className='text-3xl pb-4 font-semibold'>{post.title}</h1>
                                    {
                                        post.image && (
                                            <img className='postImg object-cover rounded sm:h-80 ' src={`${API}/${post.image}`} alt=""  />
                                        )
                                    }
                                    <h1 className='py-2 line-clamp-2 text-ellipsis' dangerouslySetInnerHTML={{ __html: post.description }}></h1>
                                    <Link to={`/singlepost/${post._id}`} className='yellowbg p-1 rounded-md text-xs md:text-base lg:text-lg text-center'>Read More</Link>
                                    <h1 className="postDate pt-2  text-gray-500">{new Date(post.createdAt).toDateString()}</h1>
        
                                </div>
        
                            )
                        })
                    // }
                ) : (
                    // Display loading message or spinner if users  data is not yet fetched
                    <p className='w-3/4 m-auto pt-12 pb-9 text-xl text-center '>No post found</p>
                )
            }
            

        </div>
    )
}

export default Profile
