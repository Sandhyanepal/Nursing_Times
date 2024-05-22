import React, { useEffect, useState } from "react";
import Banner from "../Layout/Banner";
import Posts from "../Layout/Posts";
import Latestposts from "../Layout/Latestposts";
import axios from "axios";
import { API } from "../config";
import CategoryOptions from "../Layout/CategoryOptions";

const Home = () => {
  const [posts, setPosts] = useState([]);
  // let [loading, setLoading] = useState(true)

  useEffect(() => {
       axios.get(`${API}/getallposts`)
       .then(res=>
        {
          setPosts(res.data)
          console.log("res:",res.data)
          // setLoading(false)
        }       
      
      )
  }, []);

  return (
    <div>
      <Banner />

      <div className="home flex w-11/12 m-auto mt-11">
        {posts.length > 0 ? (
          <div className="posts  w-4/5 max-md:w-full">
            <Posts posts={posts} />
          </div>
        ) : (
          <div className="w-3/4 "></div>
        )}
        <div className="flex flex-col gap-10">
            <Latestposts />
          
          <CategoryOptions />
        </div>
      </div>
    </div>
  );
};

export default Home;
