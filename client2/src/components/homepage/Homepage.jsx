import React, { useEffect, useState } from "react";
import { GlobalBody } from "../styles/Generic.styled";
import { Redirect } from "react-router-dom";

import Header from "./Header";
import BlogSection from "./BlogSection";
import AddPostButton from "./AddPostButton";

function Homepage() {
  const [token, setToken] = useState("");
  const [postsObject, setPostsObject] = useState(undefined);
  let verifyToken = "";

  useEffect(() => {
    fetch("http://www.localhost:5000/api/login/")
      .then((res) => res.json())
      .then((data) => {
        setToken(data.token);
        verifyToken = token;
      });
    fetch("http://www.localhost:5000/api/posts/authAllPosts", {
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPostsObject(data);
        console.log(postsObject);
      });
  }, []);
  // console.log("token " + token);
  return (
    <div>
      {token !== null ? (
        <>
          <GlobalBody />
          <Header />
          <BlogSection text="Posts" />
          <AddPostButton />
        </>
      ) : (
        <>
          <Redirect to="/login" />
        </>
      )}
    </div>
  );
}

export default Homepage;
