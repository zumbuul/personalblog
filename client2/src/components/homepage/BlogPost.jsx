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

function BlogPost(props) {
  const [postsObject, setPostsObject] = useState(undefined);
  let dzuda = [];

  useEffect(() => {
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

  const deletePost = (id) => {
    fetch("http://www.localhost:5000/api/posts/" + id, {
      method: "DELETE",
    });
    window.location.reload();
  };
  return (
    <>
      {/* {postsObject === undefined ? (
        <>
          <p>Loading</p>
        </>
      ) : (
        ""
      )} */}
      {postsObject === undefined ? (
        <p>Loading</p>
      ) : (
        postsObject.posts.map((post) =>
          props.type == post.isPost ? (
            <Container post={props.type}>
              <SectionOne>
                <a
                  style={{ textDecoration: "none" }}
                  href={`/edit/${post._id}`}
                >
                  <PostName post={props.type}>{post.title}</PostName>
                  <PostDesc post={props.type}>
                    {ReactHtmlParser(post.text.substring(0, 150))}
                  </PostDesc>
                </a>
              </SectionOne>
              <SectionTwo>
                <PublishBtn post={props.type}>
                  <img src={publish} />
                </PublishBtn>
                <MoveToDraftsBtn post={props.type}>
                  <img src={toDrafts} alt="" />
                </MoveToDraftsBtn>
                <TrashBtn onClick={() => deletePost(post._id)}>
                  <img src={trash} />
                </TrashBtn>
              </SectionTwo>
            </Container>
          ) : (
            ""
          )
        )
      )}
    </>
  );
}

export default BlogPost;
