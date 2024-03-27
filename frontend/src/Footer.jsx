// import React from 'react'
// import { Link } from 'react-router-dom'

// const Footer = () => {
//   return (
//     <>
//     <div className='container bg-green text-white'>
//         <footer className='py-5'>
//             <div className='row'>
//                 <div className="col-6 col-md-2 mb-3">
//                     <h4>TOPICS</h4>
//                     <ul className='nav flex-column'>
//                         <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-white">Cardiac Nursing</Link></li>
//                     </ul>
//                 </div>
//             </div>
//         </footer>
//     </div>
//     </>
//   )
// }

// export default Footer

import React from 'react'

function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="foot">
                <h3>TOPICS</h3>
                <p>
                Nursing blogs are becoming an incredibly popular way for nurses to help, connect with, and inspire their peers. 
                If you’re looking for study guides to get you through nursing school, there’s a blog for that. If you’re a travel nurse hoping for a kindred spirit, there are plenty of bloggers 
                just for you. Sick of bullying in the workplace? You’ll find a blog that deals with that too.
                </p>
            </div>
        </div>
        Copyright &copy; 2023.
      </footer>

  )
}

export default Footer