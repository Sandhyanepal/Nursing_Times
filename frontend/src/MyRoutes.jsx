import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import App from './App'
import Test from './Test'
import Layout from './Layout/Layout'
import Home from './Pages/Home'
import Write from './Pages/Write'
import Login from './Pages/Login'
import Contact from './Pages/Contact'
import About from './Pages/About'

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route index element={<Home />} />
                <Route path='/write' element= {<Write/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/test' element={<Test/>}/>
                <Route path='/' element={<Layout/>}>

                </Route>
                    <Route path='contact' element={<Contact/>} />
                    <Route path='about' element={<About/>} />



            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes
