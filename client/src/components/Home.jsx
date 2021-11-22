import React from "react";
import { useEffect, useState } from "react";
import IndividualPost from "./IndividualPost.jsx";
import fetchDataFromURL from "./utils/fetchAPI";
import "./css/post.css";

export const Home = () => {
  const [postsObject, setPostsObject] = useState(undefined);
  async function fetchAPIDataAndStoreInState() {
    setPostsObject(
      await fetchDataFromURL("http://www.localhost:5000/api/posts/")
    );
  }
  useEffect(() => {
    document.body.style.backgroundColor = "#fff";
    if (postsObject === undefined) {
      console.log("rendered");
      fetchAPIDataAndStoreInState();
    }
    console.log("rerendered");
  }, []);

  return (
    <div>
      <h1 className="blog-name">THE LAZAR BLOG</h1>
      <div className="all-posts">
        {postsObject === undefined ? (
          "LOADING"
        ) : (
          <IndividualPost posts={postsObject} />
        )}
      </div>
    </div>
  );
};

export default Home;
