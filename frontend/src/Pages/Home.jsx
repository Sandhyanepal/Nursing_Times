import React, { useEffect, useState } from "react";
import Banner from "../Layout/Banner";
import Posts from "../Layout/Posts";
import Latestposts from "../Layout/Latestposts";
import axios from "axios";
import { API } from "../config";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
       axios.get(`${API}/getallposts`)
       .then(res=>setPosts(res.data))
  }, []);

  return (
    <div>
      <Banner />

      <div className="home flex w-11/12 m-auto mt-11">
        {posts.length > 0 ? (
          <div className="posts w-4/5">
            <Posts posts={posts} />
          </div>
        ) : (
          <div className="w-3/4"></div>
        )}
        <Latestposts />
      </div>
    </div>
  );
};

export default Home;
