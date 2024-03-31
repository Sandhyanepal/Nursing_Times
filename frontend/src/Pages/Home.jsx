import React from 'react'
import Header from '../Layout/Header'
import Banner from '../Layout/Banner'
import Posts from '../Layout/Posts'
import Latestposts from '../Layout/Latestposts'
import Footer from '../Layout/Footer'

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <div className="home flex w-11/12 m-auto mt-11">
                <Posts />
                <Latestposts/>
            </div>
            <Footer/>
        </div>
    )
}

export default Home