import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import App from './App'
import Test from './Test'
import Home from './Pages/Home'
import Write from './Pages/Write'
import Login from './Pages/Login'
import Contact from './Pages/Contact'
import Register from './Pages/Register'

import About from './Pages/About'

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route index element={<Home />} />
                <Route path='/write' element= {<Write/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/test' element={<Test/>}/>
                <Route path='contact' element={<Contact/>} />
                <Route path='contact' element={<Contact/>} />
                    <Route path='about' element={<About/>} />



            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes
