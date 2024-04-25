import React from 'react'

const AdminProfile = () => {
  return (
    <div className='ml-12 w-full mr-12'>

      <h1 className='text-3xl font-bold mt-8 '>Dashboard</h1>
      <div className='adminprofile-grid grid gap-3 my-14'>

        <div className='box1 p-5 border-2 rounded-md '>
            <i class="fa-solid fa-users pr-3 text-2xl"></i>
            <span className='font-semibold text-2xl'>Total Users</span>
            <h1 className='py-6 text-xl'>11.22</h1>
          <p >view all</p>
        </div>

        <div className='box2 p-5 border-2 rounded-md '>
          <i className="fa-regular fa-newspaper pr-3 text-2xl"></i>
          <span className='font-semibold text-2xl'>Total Posts</span>
          <h1 className='py-6 text-xl'>11.22</h1>
          <p >view all</p>
        </div>

        <div className='box3 p-5 border-2 rounded-md '>
          <i class="fa-regular fa-heart pr-3 text-2xl"></i>
          <span className='font-semibold text-2xl'>Total Likes</span>
          <h1 className='py-6 text-xl'>11.22</h1>
          <p >view all</p>
        </div>

        <div className='box4 p-5 border-2 rounded-md '>
          <i class="fa-solid fa-comments pr-3 text-2xl"></i>
          <span className='font-semibold text-2xl'>Total Comments</span>
          <h1 className='py-6 text-xl'>11.22</h1>
          <p >view all</p>
        </div>

        <div className='box5 p-5 border-2 rounded-md '>
          <i className="fa-solid fa-eye pr-3 text-2xl"></i>
          <span className='font-semibold text-2xl'>Total Views</span>
          <h1 className='py-6 text-xl'>11.22</h1>
          <p >view all</p>
        </div>

        <div className='box6 p-5 border-2 rounded-md'>Box5</div>
        <div className='box7 p-5 border-2 rounded-md'>Box6</div>
        <div className='box8 p-5 border-2 rounded-md'>Box7</div>
        <div className='box9 p-5 border-2 rounded-md'>Box8</div>
      </div>

      {/* <div className="insights">
        <div className="users">
        <i className="fa-solid fa-chart-simple"></i>
        </div>
        <div className="posts"></div>
      </div> */}
    </div>
  )
}

export default AdminProfile
