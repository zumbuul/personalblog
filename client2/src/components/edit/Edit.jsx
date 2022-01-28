import React, { useState, useEffect, useRef } from "react";
import Editor from "./sub-comps/Editor.jsx";

import Prism from "prismjs";
import "../../prism/prism.css";
import { GlobalBody } from "../styles/Generic.styled.js";
import {
  Button,
  ButtonDiv,
  ButtonWrapper,
  ContentWrapper,
  EditorWrapper,
  TitleDiv,
  TitleInput,
  TitleText,
  TitleWrapper,
} from "../styles/edit/Edit.style.js";
import { Redirect, useParams } from "react-router";

const Edit = () => {
  const [content, setContent] = useState(null);
  const [title, setTitle] = useState();
  const [token, setToken] = useState("");
  const { id } = useParams();
  let requestOptions;

  const savePost = () => {
    if (id) {
      console.log("ima id");
      requestOptions = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: id,
          title: title,
          text: content,
          isPost: "Posts",
        }),
      };
      fetch("http://www.localhost:5000/api/posts/" + id, requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));
    } else {
      console.log("nema Id");
      requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title,
          text: content,
          isPost: "Posts",
        }),
      };
      fetch("http://www.localhost:5000/api/posts/", requestOptions)
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };

  useEffect(() => {
    console.log(content);
    Prism.highlightAll();

    fetch("http://www.localhost:5000/api/login/")
      .then((res) => res.json())
      .then((data) => {
        setToken(data.token);
        console.log("token " + token);
      });
  }, [content]);
  return (
    <>
      {token !== null ? (
        <>
          <GlobalBody />
          <TitleDiv>
            <TitleWrapper>
              <TitleText>Title:</TitleText>
              <TitleInput
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  console.log(title);
                }}
              />
            </TitleWrapper>
          </TitleDiv>

          <EditorWrapper>
            <Editor setTitle={setTitle} setContent={setContent}></Editor>
          </EditorWrapper>
          <ButtonWrapper>
            <ButtonDiv>
              <Button onClick={savePost}>Save Post</Button>
            </ButtonDiv>
          </ButtonWrapper>
        </>
      ) : (
        <>
          <Redirect to="/login" />
        </>
      )}
    </>
  );
};

export default Edit;
