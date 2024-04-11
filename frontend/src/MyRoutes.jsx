import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import App from './App'
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
import Add from './Pages/category/Add'
// import index from './Pages/category/Index'
// import Dashboard from './Pages/Dashboard'


const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
<Route path='/' element={<Layout/>}>
                <Route index element={<Home />} />
                <Route path='/write' element= {<Write/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/test' element={<Test/>}/>
                <Route path='contact' element={<Contact/>} />
                <Route path='about' element={<About/>}  />
                <Route path='privacy' element={<Privacy/>} />
                <Route path='faq' element={<FAQ/>} />
                <Route path='verify/:token' element={<Token/>}/>
                
                <Route path='/singlepost' element={<SinglePost/>}/>

                {/* <Route path='/Dashboard' element={<Dashboard/>}/> */}

</Route>
                {/* For admin dashboard */}
                <Route path='/admindashboard' element={<AdminDashboard/>}/>
                <Route path='/settings' element={<Settings/>}/>
                {/* <Route path='/admindashboard2' element={<Dashboard/>}/> */}
                <Route path='/admin/category' element={<Index/>}/>
                <Route path='/admin/category/add' element={<Add/>}/>
                 
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes
