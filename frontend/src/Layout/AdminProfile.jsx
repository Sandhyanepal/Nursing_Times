import React, { useEffect, useState } from 'react'
import { getAllPost } from '../api/postApi'
import { Link } from 'react-router-dom'
import { getallmessage } from '../api/messageApi'
import { getallusers } from '../api/userApi'


const AdminProfile = () => {

  let [posts, setPosts] = useState([])
  let [message, setMessage] = useState([]);
  let [users, setUsers] = useState([])


  useEffect(() => {

    getAllPost()
      .then(data => {
        setPosts(data?.reverse())
      })

    getallmessage()
      .then((data) => {
        if (data.error) {
          console.log(data.error);
        } else {
          console.log(data);
          setMessage(data?.reverse());
        }
      });

    getallusers()
      .then(data => {
        setUsers(data)
      })

  }, [])


  return (
    <>
      <div className=''>
        <div className="pl-12 pr-5 sm:pr-9">
          <h1 className='sm:text-5xl text-3xl font-bold' style={{ marginTop: '68px' }}>Welcome</h1>
          <h1 className='sm:text-4xl text-2xl font-bold mt-2'>to DashBoard</h1>

          <div className='adminprofile-grid grid gap-3 my-16'>


            {/* For total users */}
            <div className='box1 p-4 border-2 rounded-md '>
              <i class="fa-solid fa-users pr-3 text-xl"></i>
              <span className='font-semibold text-xl'>Total Users</span>
              <h1 className='text-2xl font-bold pt-1 lg:pt-2'>{users.length}</h1>
              <Link to='../adminusers'>View All</Link>
            </div>


            {/* For total Posts */}
            <div className='box2 p-4 border-2 rounded-md'>
              <i className="fa-regular fa-newspaper pr-3 text-xl"></i>
              <span className='font-semibold text-xl'>Total Posts </span>
              <h1 className='text-2xl font-bold pt-1 lg:pt-2'>{posts.length}</h1>
              <Link to='../adminposts'>View All</Link>
            </div>


            {/* For recent messages */}
            <div className='box4 p-4 border-2 rounded-md'>
              <i class="fa-solid fa-comments pr-3 text-xl"></i>
              <span className='font-semibold text-xl'>Recent Messages</span>
              <div className='pt-4'>
                {message?.slice(0, 3).map((msg) => {
                  return (
                    <div key={msg._id} className="w-11/12">
                      <Link to={`../messageview/${msg._id}`} className="flex pb-2">
                        <h1 className="font-bold w-1/5">{msg.name}</h1>
                        <h1 className="font-semibold pl-9 w-4/5 line-clamp-1 text-ellipsis">{msg.message}</h1>
                      </Link>
                      <hr />
                    </div>
                  );
                })}
              </div>
              <Link to='../adminmessage' ><h1 className='pt-3'>View All</h1></Link>
            </div>


            {/* For recent posts */}
            <div className='box6 p-4 border-2 rounded-md'>
              <h1 className='text-2xl font-semibold mb-6'>Recent Posts</h1>
                <div>
                  {
                    posts?.slice(0, 4).map((post, index) => {
                      return (
                        <Link to={`/singlepost/${post._id}`}> <li className='text-2xl list-none ' key={post.id}> {index + 1}. {post.title}</li></Link>
                      )
                    })
                  }
                <Link to='../adminposts'><h1 className='pt-3'>View All</h1></Link>
              </div>
            </div>

          </div>


        </div>


        {/* Footer */}
        <footer className="flex justify-evenly  py-3 bg-gray-400 flex-wrap items-center w-full">
          <span className='font-bold'>NursingTimes</span>
          <span className='text-xs'>&copy; Nursing Times Admin Dashboard</span>
        </footer>

      </div>


    </>
  )
}

export default AdminProfile
