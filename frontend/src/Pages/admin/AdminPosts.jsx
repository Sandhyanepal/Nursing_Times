import React, { useEffect, useState } from 'react'
import { getAllPost } from '../../api/postApi'
// import { isAuthenticate } from '../../api/userApi'
import PostView from '../../Layout/PostView'


const AdminPosts = () => {

    // const { user } = isAuthenticate()

    const [posts, setPosts] = useState([])
    // const[limit, setLimit] = useState(4)
    const [deleteSuccess, setDeleteSuccess] = useState(false)

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
            <h1 className='text-5xl font-semibold ml-12' style={{ marginTop: '68px' }}>Posts</h1>
            {
                //map garna
                posts.map((post) => {
                    return (
                        // <div key={post._id} className='flex w-3/5 py-5  ml-16'>
                        //     <div className='w-2/5'>
                        //         <h1 className='font-bold pb-1 pt-1'>{post.title}</h1>
                        //         <p className='pb-2  line-clamp-2 text-ellipsis'>{post.description}</p>
                        //         <div className=' flex gap-3'>

                        //             <Link to={`/singlepost/${post._id}`} className='bg-yellow-500 p-1 rounded-md text-white '>Read More</Link>

                        //             <button className=' bg-red-500 p-1 rounded-md text-white ' onClick={handleDelete(post._id)}>Delete</button>
                        //         </div>
                        //     </div>
                        //     <img className='postImg object-cover rounded w-11/12 m-auto' src={`${API}/${post.image}`} alt="" style={{ height: '130px', width: '200px' }} />
                        // </div>

                        <PostView post={post} />
                    )

                })
            }

        </div>
    )
}

export default AdminPosts
