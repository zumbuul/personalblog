import React, { useState, useEffect } from "react";
import Editor from "./sub-comps/Editor.jsx";
import ReactHtmlParser from "react-html-parser";
import Prism from "prismjs";
import "../../prism/prism.css";
import { GlobalBody } from "../styles/Generic.styled.js";
import { ContentWrapper } from "../styles/edit/Edit.style.js";

const Edit = () => {
  const [content, setContent] = useState(null);
  useEffect(() => {
    console.log(content);
    Prism.highlightAll();
  }, [content]);
  return (
    <div>
      <GlobalBody />
      <Editor setContent={setContent}></Editor>
      <ContentWrapper>
        <p>{ReactHtmlParser(content)}</p>
      </ContentWrapper>
    </div>
  );
};

export default Edit;
