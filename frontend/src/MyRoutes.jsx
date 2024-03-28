import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import App from './App'
import Test from './Test'
import Home from './Pages/Home'

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route index element={<Home />} />
                <Route path='/test' element={<Test/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes
