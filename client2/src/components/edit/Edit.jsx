import React, { useState, useEffect, useRef } from "react";
import Editor from "./sub-comps/Editor.jsx";
import ReactHtmlParser from "react-html-parser";
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

const Edit = () => {
  const [content, setContent] = useState(null);
  const [title, setTitle] = useState();

  const savePost = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        text: content,
        isPost: "Posts",
      }),
    };
    // console.log(ReactHtmlParser.props[0].children[0](content));
    fetch("http://www.localhost:5000/api/posts/", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {
    console.log(content);
    Prism.highlightAll();
  }, [content]);
  return (
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
  );
};

export default Edit;
