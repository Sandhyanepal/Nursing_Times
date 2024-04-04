import React, { useState } from 'react'
import Header from '../Layout/Header'
import { Link } from 'react-router-dom'

const FAQ = () => {
  const [showPara, setShowPara] = useState(false)
  const [showPara1, setShowPara1] = useState(false)
  const [showPara2, setShowPara2] = useState(false)

  const handleShowPara =(a)=> e =>{
    if(a == 1)
      setShowPara(!showPara);
    else if(a == 2)
      setShowPara1(!showPara1);
    else 
      setShowPara2(!showPara2);
 
  }
 

  return (
    <>
     <Header />
       {/* <h1 className='text-center text-4xl pt-16 font-bold'>Frequently Asked Questions</h1> */}
       <div className="relative bg-white transition-all mx-auto
       max-w-xs sm:max-w-2xl rounded-lg flex flex-col gap-4 mt-40
       sm:mt-24 p-5">
        <h1 className='flex items-center'>
        <Link to="">
        <i class="fa-solid fa-star"></i>
        </Link> 
        <div className="font-bold text-4xl">FAQs</div>
        </h1>
        <div className='border-2 p-2' >
          <h2 className='flex justify-between'>
              how do i find topics on the website or podcast?
              {showPara ?  
                <button onClick={handleShowPara(1)}>
                  <i class="fa-solid fa-minus"></i>
                </button> : 
                <button onClick={handleShowPara(1)}>
                <i class="fa-solid fa-plus"></i>
                </button>              
            }              
              
          </h2>
          {showPara && (
            <p className='faq-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatem, quasi autem ipsa ab quod.</p>
          )}
        </div>

        <div className='border-2 p-2' >
          <h2 className='flex justify-between'>
              how do i find topics on the website or podcast?
              {showPara1 ?  
                <button onClick={handleShowPara(2)}>
                  <i class="fa-solid fa-minus"></i>
                </button> : 
                <button onClick={handleShowPara(2)}>
                <i class="fa-solid fa-plus"></i>
                </button>              
            }              
              
          </h2>
          {showPara1 && (
            <p className='faq-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatem, quasi autem ipsa ab quod.</p>
          )}
        </div>

        <div className='border-2 p-2' >
          <h2 className='flex justify-between'>
              how do i find topics on the website or podcast?
              {showPara2 ?  
                <button onClick={handleShowPara(3)}>
                  <i class="fa-solid fa-minus"></i>
                </button> : 
                <button onClick={handleShowPara(3)}>
                <i class="fa-solid fa-plus"></i>
                </button>              
            }              
              
          </h2>
          {showPara2 && (
            <p className='faq-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta voluptatem, quasi autem ipsa ab quod.</p>
          )}
        </div>
       </div>
    </>
  )
}

export default FAQ