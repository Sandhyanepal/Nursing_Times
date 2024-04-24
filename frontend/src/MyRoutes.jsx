import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Test from './Test'
import Home from './Pages/Home'
import Write from './Pages/Write'
import Login from './Pages/Login'
import Register from './Pages/Register'
import About from './Pages/About'
import Settings from './Pages/Settings'
import Contact from './Pages/Contact'
import Privacy from './Pages/Privacy'
import FAQ from './Pages/FAQ'
import Token from './verify/Token'
import Layout from './Layout/Layout'
import AdminDashboard from './Pages/AdminDashboard'
import SinglePost from './Layout/SinglePost'
import Index from './Pages/category/Index'
import ForgetPassword from './Pages/ForgetPassword'
import Add from './Pages/category/Add'
import ResetPassword from './Pages/ResetPassword'
import UpdateCategory from './Pages/category/UpdateCategory'
<<<<<<< HEAD
import AdminHome from './Pages/admin/AdminHome'
import AdminUsers from './Pages/admin/AdminUsers'
import AdminPosts from './Pages/admin/AdminPosts'
=======
import DPost from './Pages/DashPost/DPost'

>>>>>>> 4290a295031abd3f64b7a95f8920170267458a8a


const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/write' element={<Write />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/forgetpassword' element={<ForgetPassword />} />
                    <Route path='/resetpassword/:token' element={<ResetPassword />} />
                    <Route path='/test' element={<Test />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='about' element={<About />} />
                    <Route path='privacy' element={<Privacy />} />
                    <Route path='faq' element={<FAQ />} />
                    <Route path='verify/:token' element={<Token />} />
                    <Route path='/singlepost/:id' element={<SinglePost />} />
                    <Route path='/settings' element={<Settings />} />   


                </Route>
                {/* For admin dashboard */}
                <Route path='/adminhome' element={<AdminHome/>}/>
                <Route path='/adminusers' element={<AdminUsers/>}/>
                <Route path='/adminposts' element={<AdminPosts/>}/>



                <Route path='/admindashboard' element={<AdminDashboard />} />
                <Route path='/admin/category' element={<Index/>}/>
                <Route path='/admin/category/add' element={<Add/>}/>
                <Route path='/admin/category/update/:id' element={<UpdateCategory/>}/>
                <Route path='/admin/posts' element={<DPost/>}/>


            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes
