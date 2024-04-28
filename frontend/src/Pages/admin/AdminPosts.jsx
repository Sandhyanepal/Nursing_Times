import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API } from '../../config'
//import Posts from '../../Layout/Posts'
//import { Link } from 'react-router-dom'
// import { deletePost } from '../../api/DashPostApi'
import { deletepost } from '../../api/postApi'


const AdminPosts = () => {

    const [posts, setPosts] = useState([])
    // const[limit, setLimit] = useState(4)
    const [deleteSuccess, setDeleteSuccess] = useState(4)


    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get(`${API}/getallposts`)
            console.log(res)
            setPosts(res.data)
        }
        fetchPosts()
    }, [])

    const handleDelete = id => e => {
        e.preventDefault()
        setDeleteSuccess(false)
        console.log(id)
        const confirmed = window.confirm("Are you sure you want to delete this post?")
        if (confirmed === true) {
            deletepost(id)
                .then(data => {
                    if (data.error) {
                        alert(data.error)
                    }
                    else {
                        setDeleteSuccess(true)
                        alert(data.msg)
                    }
                })
        }
    }

  return (
    <div>
      <div classNameName="w-full">
                {
                    //map garna
                    posts.map((post) => {
                        return <div key={post._id} className='flex w-3/5 mx-auto pb-9 pt-5'>
                            <div className='w-2/5'>
                                <h1 className='font-bold pb-1 pt-1'>{post.title}</h1>
                                <p className='pb-2  line-clamp-2 text-ellipsis'>{post.description}</p>
                                <div className=' flex gap-3'>
                                    {/* <Link href={`/admin/category/update/${category._id}`}> */}
                                    {/* <Link to={`/admin/post/${post._id}`} className='update button rounded-s-md' >Update</Link> */}
                                    {/* </Link> */}
                                    <button className='bg-yellow-500 p-1 rounded-md text-white'>Read More</button>
                                    <button className=' bg-red-500 p-1 rounded-md text-white' onClick={handleDelete(post._id)}>Delete</button>
                                </div>
                            </div>
                            <img className='postImg object-cover rounded w-11/12 m-auto' src={`${API}/${post.image}`} alt="" style={{ height: '200px', width:'200px' }} />
                        </div>
                    })


                }
            </div>
    </div>
  )
}

export default AdminPosts
