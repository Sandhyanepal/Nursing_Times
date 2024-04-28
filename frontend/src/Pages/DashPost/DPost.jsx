import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API } from '../../config'
//import Posts from '../../Layout/Posts'
//import { Link } from 'react-router-dom'
import { deletePost } from '../../api/DashPostApi'
import AdminSidebar from '../../Layout/AdminSidebar'
// import { deletepost } from '../../api/postApi'

const DPost = () => {


    const [posts, setPosts] = useState([])
    // const[limit, setLimit] = useState(4)
    const[setDeleteSuccess] = useState(4)


    useEffect(()=>{
        const fetchPosts = async () =>{
            const res = await axios.get(`${API}/getallposts`)
            console.log(res)  
            setPosts(res.data)          
        }
        fetchPosts()
    }, [])

    const handleDelete = id => e => {
      setDeleteSuccess(false)
      console.log(id)
      const confirmed = window.confirm("Are you sure you want to delete this post?")
      if(confirmed === true){
          deletePost(id)
          .then(data=>{
             if(data.error){
                 alert(data.error)
             }
             else{
              setDeleteSuccess(true)
                 alert(data.msg)
             }
          })
      }
   }

    

  return (
    <div className='flex'>
        <AdminSidebar/>
        <div classNameName="flex w-full">
        {/* <div className='text-center w-full text-xl mt-5' style={{height:'100vh'}}> */}

           {
                        //map garna
                        posts.map((post)=>{
                           return <div key={post._id} className='flex flex-col w-1/2 mx-auto pb-9 pt-5 '>
                            <img className='postImg object-cover rounded w-11/12 m-auto' src={`${API}/${post.image}`} alt="" style={{ height: '60vh' }} />
                            <h1 className='font-bold pb-1 ps-6 pt-1'>{post.title}</h1>
                            <p className='pb-2 ps-6'>{post.description}</p>
                            <div className='ps-6'>
                                {/* <Link href={`/admin/category/update/${category._id}`}> */}
                                {/* <Link to={`/admin/post/${post._id}`} className='update button rounded-s-md' >Update</Link> */}
                                {/* </Link> */}
                                <button className='postbutton bg-red-600 p-2 rounded-md ' onClick={handleDelete(post._id)}>Delete</button>
                            </div>
                           </div> 
                        })
                    }
        </div>
     {/* </div> */}
    </div>
  )
}

export default DPost