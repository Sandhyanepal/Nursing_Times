import React from 'react'

const Banner = () => {
  return (
    <div className='banner md:mt-36 mt-16'>
      <div className="bannerTitle flex flex-col items-center font-serif text-gray-600" >
        <span className="bannerTitleSm md:absolute md:top-32 text-2xl">Nursing Care</span>
        <span className="bannerTitleLg md:absolute  text-8xl">Blog</span>
      </div>
      <img className='bannerImg w-11/12 m-auto object-cover object-top' src="https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" style={{  height: "483px" }}/>
      
    </div>
  )
}

export default Banner
