import React from "react";
import Tag from "./Tag.jsx";
import "./css/tags.css";
const Tags = () => {
  const tags = [
    "Express",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Technical Discussion",
    "Database",
  ];
  return (
    <div className="tags">
      <h1 className="tags-title">TAGS</h1>
      {tags.map((tag, id) => (
        <Tag tagName={tag} key={id} />
      ))}
    </div>
  );
};

export default Tags;
