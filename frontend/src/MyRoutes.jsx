import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Test from './Test'
// import Contact from './pages/Contact'
import Contact from './pages/Contact'
import Layout from './Layout/Layout'

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route index element={<App />} />
                <Route path='/test' element={<Test/>}/>
                <Route path='/' element={<Layout/>}>

                </Route>
                    <Route path='contact' element={<Contact/>} />



            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes
