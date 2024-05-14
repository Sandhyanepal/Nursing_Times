import React, { useEffect, useState } from 'react'
import { getAllPost } from '../../api/postApi'
// import { isAuthenticate } from '../../api/userApi'
import PostView from '../../Layout/PostView'


const AdminPosts = () => {

    // const { user } = isAuthenticate()

    const [posts, setPosts] = useState([])
    // const[limit, setLimit] = useState(4)
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

    // const handleDelete = postId => (event) => {
    //     // event.preventDefault()
    //     const confirmed = window.confirm("Are you sure you want to delete this post?")
    //     if (confirmed === true) {
    //         deletepost( postId, user._id)
    //             .then(data => {
    //                 if (data.error) {
    //                     alert(data.error)
    //                     setDeleteSuccess(false)
    //                 }
    //                 else {
    //                     setDeleteSuccess(true)
    //                     alert('Post Deleted.')
    //                 }
    //             })
    //     }
    // }




    return (
        <div>
            <h1 className='text-5xl font-semibold w-4/6 mx-auto md:w-full ml-10 pt-3' style={{ marginTop: '68px' }}>Posts</h1>
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
