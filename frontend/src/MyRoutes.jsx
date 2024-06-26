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
import SinglePost from './Layout/SinglePost'
import Index from './Pages/category/Index'
import ForgetPassword from './Pages/ForgetPassword'
import Add from './Pages/category/Add'
import ResetPassword from './Pages/ResetPassword'
import UpdateCategory from './Pages/category/UpdateCategory'
import AdminHome from './Pages/admin/AdminHome'
import AdminUsers from './Pages/admin/AdminUsers'
import AdminPosts from './Pages/admin/AdminPosts'
import AdminRoute from './selectiveRoutes/AdminRoute'
import AdminLayout from './Layout/AdminLayout'
import UserPosts from './Pages/admin/UserPosts'
import AdminMessage from './Pages/admin/AdminMessage'
import MessageView from './Layout/MessageView'
import CategoryPost from './Pages/CategoryPost'
import Profile from './Pages/Profile'



const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/write' element={<Write />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/profile' element={<Profile/>}/>
                    <Route path='/forgetpassword' element={<ForgetPassword />} />
                    <Route path='/resetpassword/:token' element={<ResetPassword />} />
                    <Route path='/test' element={<Test />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/privacy' element={<Privacy />} />
                    <Route path='/faq' element={<FAQ />} />
                    <Route path='/verify/:token' element={<Token />} />
                    <Route path='/singlepost/:id' element={<SinglePost />} />
                    <Route path='/settings' element={<Settings />} />
                    <Route path='/categorypost/:id' element={<CategoryPost/>}/>
                </Route>



                {/* For admin dashboard */}

                <Route path='/' element={<AdminRoute />}>
                    <Route path='admin' element={<AdminLayout />}>
                        <Route path='dashboard' element={<AdminHome />} />
                        <Route path='adminusers' element={<AdminUsers />} />
                        <Route path='adminposts' element={<AdminPosts />} />
                        <Route path='adminmessage' element={<AdminMessage/>}/>

                        <Route path='category' element={<Index />} />
                        <Route path='addcategory' element={<Add />} />
                        <Route path='updatecategory/:id' element={<UpdateCategory />} />

                        <Route path='userposts/:id' element={<UserPosts/>}/>
                        <Route path ='messageview/:id'element={<MessageView/>}/>
                    </Route>

                </Route>
<Route path='test' element={<Test/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes
