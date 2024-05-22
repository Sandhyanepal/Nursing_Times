import React from 'react'
import { LineChart, Line, ResponsiveContainer, Tooltip, BarChart, Bar } from 'recharts';


const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const AdminProfile = () => {


  return (
    <>
    <div className='ml-12  mr-12'>

      <h1 className='text-5xl font-bold' style={{marginTop:'68px'}}>Welcome</h1>
      <h1 className='text-4xl font-bold mt-5'>to DashBoard</h1>

      <div className='adminprofile-grid grid gap-3 my-14'>

        <div className='box1 p-5 border-2 rounded-md flex'>
          <div className="info ">
            <i class="fa-solid fa-users pr-3 text-xl"></i>
            <span className='font-semibold text-xl'>Total Users</span>
            <h1 className='py-3 text-xl'>11.22</h1>
            <p >view all</p>
          </div>
          <div className="chartinfo w-3/5 ">
            <ResponsiveContainer width="99%" height="85%">
              <LineChart width={300} height={100} data={data}>
                <Tooltip
                  contentStyle={{ backgroundColor: 'transparent', border: 'none' }}
                  labelStyle={{ display: 'none' }}
                  position={{ x: 20, y: 70 }} />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
            <p className='text-xs text-end'> <span className='text-green-500 font-bold'>45%</span> <br /> this month</p>
          </div>
        </div>

        <div className='box2 p-5 border-2 rounded-md flex'>
          <div className="info">
            <i className="fa-regular fa-newspaper pr-3 text-xl"></i>
            <span className='font-semibold text-xl'>Total Posts</span>
            <h1 className='py-3 text-xl'>11.22</h1>
            <p >view all</p>
          </div>
          <div className="chartinfo w-3/5 ">
            <ResponsiveContainer width="99%" height="85%">
              <LineChart width={300} height={100} data={data}>
                <Tooltip
                  contentStyle={{ backgroundColor: 'transparent', border: 'none' }}
                  labelStyle={{ display: 'none' }}
                  position={{ x: 20, y: 70 }} />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
            <p className='text-xs text-end'> <span className='text-green-500 font-bold'>45%</span> <br /> this month</p>
          </div>

        </div>

      

        <div className='box4 p-5 border-2 rounded-md flex'>
          <div className="info">
            <i class="fa-solid fa-comments pr-3 text-xl"></i>
            <span className='font-semibold text-xl'>Total Comments</span>
            <h1 className='py-3 text-xl'>11.22</h1>
            <p >view all</p>
          </div>
          <div className="chartinfo w-3/5 ">
            <ResponsiveContainer width="99%" height="85%">
              <LineChart width={300} height={100} data={data}>
                <Tooltip
                  contentStyle={{ backgroundColor: 'transparent', border: 'none' }}
                  labelStyle={{ display: 'none' }}
                  position={{ x: 20, y: 70 }} />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
            <p className='text-xs text-end'> <span className='text-red-500 font-bold'>45%</span> <br /> this month</p>
          </div>
        </div>

        <div className='box5 p-5 border-2 rounded-md flex'>
          <div className="info">
            <i className="fa-solid fa-eye pr-3 text-xl"></i>
            <span className='font-semibold text-xl'>Total Views</span>
            <h1 className='py-3 text-xl'>11.22</h1>
            <p >view all</p>
          </div>
          <div className="chartinfo w-3/5 ">
            <ResponsiveContainer width="99%" height="85%">
              <LineChart width={300} height={100} data={data}>
                <Tooltip
                  contentStyle={{ backgroundColor: 'transparent', border: 'none' }}
                  labelStyle={{ display: 'none' }}
                  position={{ x: 20, y: 70 }} />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
            <p className='text-xs text-end'> <span className='text-red-500 font-bold'>45%</span> <br /> this month</p>
          </div>
        </div>

        <div className='box6 p-5 border-2 rounded-md'>
          <h1 className='text-2xl font-semibold mb-6'>Total Visit</h1>
          <ResponsiveContainer width="100%" height="80%">
            <BarChart width={150} height={40} data={data}>
              <Tooltip
                contentStyle={{ backgroundColor: 'transparent', border: 'none' }}
                labelStyle={{ display: 'none' }}
                position={{ x: 70, y: 235 }} />
              <Bar dataKey="uv" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className='box7 p-5 border-2 rounded-md'>
          <h1 className='text-2xl font-semibold mb-6'>Total Visit</h1>
          <ResponsiveContainer width="100%" height="80%">
            <BarChart width={150} height={40} data={data}>
              <Tooltip
                contentStyle={{ backgroundColor: 'transparent', border: 'none' }}
                labelStyle={{ display: 'none' }}
                position={{ x: 70, y: 235 }} />
              <Bar dataKey="uv" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      
    </div>

    <footer className="flex justify-around py-3 bg-gray-400">
        <span className='font-bold'>NursingTimes</span>
        <span className='text-xs'>&copy; Nursing Times Admin Dashboard</span>
      </footer>
    </>
  )
}

export default AdminProfile
