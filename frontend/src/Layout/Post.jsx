import React from 'react'

const Post = () => {
  return (
    <div className='post w-5/12 '>
      <img className='postImg object-cover rounded ' src="https://images.pexels.com/photos/4200287/pexels-photo-4200287.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      <div className="postInfo flex flex-col ">
        <div className="postCategories">
            <div className="postCat text-orange-300 mt-4">Health, Medicine</div>
            {/* <span className="postCat">Medicine</span> */}
        </div>
        <div className="postTitle text-2xl mt-2">
            Nursing Care
        </div>
        <hr />
        <p className='postDesc mt-2 line-clamp-3 text-ellipsis'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur ipsam, quos quisquam aliquid doloremque iste tenetur eius itaque, laboriosam temporibus maxime molestiae culpa? Provident, delectus.</p>
        <div className="postDate mt-2 italic text-gray-500">1hr 45min ago</div>
      </div>
      
    </div>
  )
}

export default Post
