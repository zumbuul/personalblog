import React, { useState, useEffect, useRef } from "react";
import Editor from "./sub-comps/Editor.jsx";
import ReactHtmlParser from "react-html-parser";
import Prism from "prismjs";
import "../../prism/prism.css";
import { GlobalBody } from "../styles/Generic.styled.js";
import { ContentWrapper } from "../styles/edit/Edit.style.js";

const Edit = () => {
  const [content, setContent] = useState(null);
  const [title, setTitle] = useState();

  const savePost = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        text: ReactHtmlParser(content),
        isPost: "Posts",
      }),
    };
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
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          console.log(title);
        }}
      />
      <Editor setContent={setContent}></Editor>
      <ContentWrapper>
        <p>{ReactHtmlParser(content)}</p>
      </ContentWrapper>
      <button onClick={() => savePost}>Save Post</button>
    </>
  );
};

export default Edit;
