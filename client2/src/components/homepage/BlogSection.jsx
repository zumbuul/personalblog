import React from "react";
import { GlobalBody } from "../styles/Generic.styled";
import { Text } from "../styles/BlogSection.styled";

import BlogPost from "./BlogPost";

function BlogSection(props) {
  return (
    <div>
      <Text>{props.text}</Text>
      <BlogPost />
    </div>
  );
}

export default BlogSection;
