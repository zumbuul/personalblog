import React, { useState, useEffect } from "react";
import Editor from "./sub-comps/Editor.jsx";
import ReactHtmlParser from "react-html-parser";

const Edit = () => {
  const [content, setContent] = useState(null);
  useEffect(() => {
    console.log(content);
  }, [content]);
  return (
    <div>
      <Editor setContent={setContent}></Editor>
      {ReactHtmlParser(content)}
    </div>
  );
};

export default Edit;
