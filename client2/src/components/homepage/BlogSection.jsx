import React, { useEffect, useState } from "react";
import { Text, Section } from "../styles/BlogSection.styled";
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

function BlogSection(props) {
  const [postsObject, setPostsObject] = useState(undefined);

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

  async function switchPostType(id, type) {
    const data = await fetch(
      "http://www.localhost:5000/api/posts/switch/" + id,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, id }),
      }
    );
    setPostsObject(await data.json());
  }
  return (
    <>
      <Text>Posts</Text>
      <Section>
        {postsObject === undefined ? (
          <p>Loading</p>
        ) : (
          postsObject.posts.map((post) =>
            "Posts" == post.isPost ? (
              <Container post={"Posts"}>
                <SectionOne>
                  <a
                    style={{ textDecoration: "none" }}
                    href={`/edit/${post._id}`}
                  >
                    <PostName post={"Posts"}>{post.title}</PostName>
                    <PostDesc post={"Posts"}>
                      {ReactHtmlParser(post.text.substring(0, 150))}
                    </PostDesc>
                  </a>
                </SectionOne>
                <SectionTwo>
                  <PublishBtn
                    post={"Posts"}
                    onClick={() => {
                      switchPostType(post._id, "Posts");
                      console.log("published");
                    }}
                  >
                    <img src={publish} />
                  </PublishBtn>
                  <MoveToDraftsBtn
                    post={"Posts"}
                    onClick={() => switchPostType(post._id, "Drafts")}
                  >
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
      </Section>
      <Text>Drafts</Text>
      <Section>
        {postsObject === undefined ? (
          <p>Loading</p>
        ) : (
          postsObject.posts.map((post) =>
            "Drafts" == post.isPost ? (
              <Container post={"Drafts"}>
                <SectionOne>
                  <a
                    style={{ textDecoration: "none" }}
                    href={`/edit/${post._id}`}
                  >
                    <PostName post={"Drafts"}>{post.title}</PostName>
                    <PostDesc post={"Drafts"}>
                      {ReactHtmlParser(post.text.substring(0, 150))}
                    </PostDesc>
                  </a>
                </SectionOne>
                <SectionTwo>
                  <PublishBtn
                    post={"Drafts"}
                    onClick={() => {
                      switchPostType(post._id, "Posts");
                      console.log("published");
                    }}
                  >
                    <img src={publish} />
                  </PublishBtn>
                  <MoveToDraftsBtn
                    post={"Drafts"}
                    onClick={() => switchPostType(post._id, "Drafts")}
                  >
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
      </Section>
    </>
  );
}

export default BlogSection;
