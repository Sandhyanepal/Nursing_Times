import React from 'react'
import Banner from '../Layout/Banner'
import Posts from '../Layout/Posts'
import Latestposts from '../Layout/Latestposts'

const Home = () => {



    return (
        <div>
            <Banner />
            
            <div className="home flex w-11/12 m-auto mt-11">
                <Posts />
                <Latestposts/>
            </div>
        </div>
    )
}

export default Home;
