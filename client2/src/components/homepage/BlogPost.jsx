import React, { useState, useEffect } from "react";
import trash from "./trash-can.png";
import publish from "./publish1.png";
import toDrafts from "./toDrafts.svg";
import ReactHtmlParser from "react-html-parser";
import {
  Container,
  PostName,
  PostDesc,
  SectionOne,
  SectionTwo,
  TrashBtn,
  PublishBtn,
  MoveToDraftsBtn,
} from "../styles/BlogPost.styled";
import useFetchHook from "../utils/useFetchHook";

function BlogPost(props) {
  const [postsObject, setPostsObject] = useState(undefined);
  // let posts = [];
  // async function FetchAPIDataAndStoreInState() {
  //   setPostsObject(await useFetchHook("http://www.localhost:5000/api/posts/"));
  // }
  useEffect(() => {
    fetch("http://www.localhost:5000/api/posts/authAllPosts", {
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setPostsObject(data);
        console.log("post object " + postsObject);
      });
  }, []);

  const deletePost = (id) => {
    fetch("http://www.localhost:5000/api/posts/" + id, {
      method: "DELETE",
    });
    window.location.reload();
  };

  return (
    <>
      {console.log(postsObject)}
      {postsObject == undefined ? <p>mrzim</p> : <p>ne mrzim</p>}
    </>
  );
}

export default BlogPost;
