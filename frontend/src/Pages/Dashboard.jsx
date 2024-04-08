import React from 'react'
import AdminSidebar from '../components/AdminSidebar'
import { Link } from 'react-router-dom'


const Dashboard = () => {
  return (
    <div className='flex'>
    <AdminSidebar/>
      {/* <h1 className='font-bold text-2xl pl-96 p-4'>Welcome to Admin DashBoard</h1> */}
      <div className="container-dash">
        <h2 className='text-center font-sans mt-4 text-gray-600 text-3xl mb-4'>
          Admin Dashboard
        </h2>

        <div className="dashelement flex gap-x-3">
          <div className="md:w-1/2 xl:w-1/3 mb-4">
            <Link to='#' className='no-underline'>
              <div className="bg-red-500 rounded-lg shadow-md p-10 pl-4">
                <div className="p-2">
                  <div className="flex item-center gap-0">
                    <div className="col me-2">
                      <div className="uppercase text-primary font-bold text-x text-center pl-32">
                        <span>
                          Total Posts
                        </span>
                      </div>
                      <div className="text-primary font-bold mb-0 text-center pl-32">
                        <span>Delivered: 0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="md:w-1/2 xl:w-1/3 mb-4">
            <Link to='#' className='no-underline'>
              <div className="bg-blue-500 rounded-lg shadow-md p-10">
                <div className="p-2">
                  <div className="flex item-center gap-0">
                    <div className="col me-2">
                      <div className="uppercase text-primary font-bold text-x text-center pl-32">
                        <span>
                          Total Users
                        </span>
                      </div>
                      <div className="text-primary font-bold mb-0 text-center pl-32">
                        <span>Deactivated: 0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="md:w-1/2 xl:w-1/3 mb-4">
            <Link to='#' className='no-underline'>
              <div className="bg-green-500 rounded-lg shadow-md p-10">
                <div className="p-2">
                  <div className="flex item-center gap-0">
                    <div className="col me-2">
                      <div className="uppercase text-primary font-bold text-x text-center pl-32">
                        <span>
                          Category
                        </span>
                      </div>
                      <div className="text-primary font-bold mb-0 text-center pl-32">
                        <span>Total: 0</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Dashboard
