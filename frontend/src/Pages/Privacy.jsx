import React from 'react'

const Privacy = () => {
  return (
    <>
     <h1 className='bg-yellow-500 p-7 py-12 text-center box-border text-2xl font-bold text-white w-11/12 m-auto'>Privacy Policy</h1>
     <div className="protecting py-3">
        <h1 className='pl-48 text-2xl font-bold p-2'>Protecting your data: The Nursing Times Group privacy statement</h1>
        <p className='pl-48 text-lg'>Protecting your privacy is very important to us. So that you can feel in control of your personal information, we want to be clear with you about the</p>
        <p className='pl-48 text-lg'>information we collect and how it is used.</p>
     </div>
      <div className="main pb-14">

     <div className="personal pt-10 bg-yellow-200">

        <h1 className='font-bold text-xl pl-48'>Collecting Personal Information</h1>
           {/* <p className='pl-48'>The Nursing Times is an online platform for sharing your experiences and ideas.</p>. */}
           <p className='pl-48 text-lg'> Together with the Nursing Times Publishing Co our site provide up-to-date health care information, we are the Nursing Times Group.</p>
           <p className='pl-48 text-lg pb-2'>Some of this information is provided by, and personally identifies, you for example name, email address and bank details.</p>
           <p className='pl-48 text-lg'>We also collect information from the Nursing Times Group services you’ve used. For example, searching our websites, signing up to an event</p>  
           <p className='pl-48 text-lg'>or clicking an online advert. This helps us to find out what information is important to you so that we can improve the services we offer.</p>

           <h1 className='font-bold text-xl pl-48 pt-4'>Using Your Personal Information</h1>
           <p className='pl-48 text-lg pb-2'>We use the information you provide us to deliver, tailor and improve our services.</p>
           <p className='pl-48 text-lg pb-2'>We only keep your information for as long as you have a relationship with us and where there is a legitimate reason to do so.</p>
           <p className='pl-48 text-lg'>We may contact applicants who are successful in applying for one of our grants about opportunities to promote the Nursing Times Foundation.</p>

           <h1 className='pt-4 font-bold text-xl pl-48'>Your Rights</h1>
           <p className='pl-48 text-lg'>You have a number of rights in relation to the information that we hold about you. These rights include:</p>
           <ul className='list-disc pl-48 text-lg'>
            <li>the right to access information we hold about you and to obtain information about how we process it;</li>
            <li>the right to request that we rectify your information if it’s inaccurate or incomplete;</li>
            <li>You have the right to request your information be erased, but we may keep it if required by law.</li>
            <li>You can object to or request restrictions on how we process your information, but we might still process it if legally allowed or if your request is refused.</li>
           </ul>
     </div>

      </div>
    </>
  )
}

export default Privacy