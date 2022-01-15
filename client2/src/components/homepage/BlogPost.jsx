import React, { useState, useEffect } from "react";
import trash from "./trash-can.png";
import publish from "./publish1.png";
import toDrafts from "./toDrafts.svg";
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
  async function FetchAPIDataAndStoreInState() {
    setPostsObject(await useFetchHook("http://www.localhost:5000/api/posts/"));
  }
  useEffect(() => {
    if (postsObject === undefined) {
      FetchAPIDataAndStoreInState();
    }
  }, []);
  console.log(postsObject);

  const deletePost = (id) => {
    fetch("http://www.localhost:5000/api/posts/" + id, {
      method: "DELETE",
    });
    window.location.reload();
  };
  return (
    <>
      {postsObject === undefined ? (
        <p>Loading</p>
      ) : (
        postsObject.posts.map((post) =>
          props.type == post.isPost ? (
            <a style={{ textDecoration: "none" }} href={`/edit/${post._id}`}>
              <Container post={props.type}>
                <SectionOne>
                  <PostName post={props.type}>{post.title}</PostName>
                  <PostDesc post={props.type}>
                    {post.text.substring(0, 150) + " {...}"}
                  </PostDesc>
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
            </a>
          ) : (
            ""
          )
        )
      )}
    </>
  );
}

export default BlogPost;
