import React from 'react'

const SinglePost = () => {
    
    
    return (
        <div>
            <div className="singlePost">
                <div className="singlePostWrapper">
                    
                    <img src="" alt="" />
                    
                    <h1 className='singlePostTitle'>
                        Title
                        <div className="singlePostEdit">
                        {/* <FontAwesomeIcon icon="fa-regular fa-pen-to-square" /> */}
                        {/* <FontAwesomeIcon icon="fa-solid fa-trash" /> */}
                        </div>
                    </h1>
                    <div className="singlePostInfo">
                        <h1>Author: <b>User</b></h1>
                        <h2>May 12,2023</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi esse quia animi quisquam, quam eius nihil, necessitatibus sapiente reiciendis at impedit alias modi.</p>
                </div>
            </div>
        </div>
    )
}

export default SinglePost
