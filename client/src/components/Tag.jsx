import React, { useState, useEffect } from "react";
import fetchDataFromURL from "./utils/fetchAPI";
import "./css/tags.css";
const Tag = ({ tagName }) => {
  const [tag, setTag] = useState(0);

  useEffect(() => {
    fetchDataFromURL(
      `http://www.localhost:5000/api/posts/tags/${tagName.toLowerCase()}`
    ).then(tag => setTag(tag));
  }, []);

  return (
    <div>
      <span className="tag">
        <a className="tag-name" href="#">
          {tagName}
        </a>
        <span className="tag-number"> ({tag.tags}) </span>
      </span>
    </div>
  );
};

export default Tag;
