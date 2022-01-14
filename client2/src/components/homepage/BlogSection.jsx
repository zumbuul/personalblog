import React, { useEffect, useState } from "react";
import { Text } from "../styles/BlogSection.styled";

import BlogPost from "./BlogPost";

function BlogSection(props) {
  return (
    <div>
      <Text>{props.text}</Text>

      <BlogPost type={props.text} />
    </div>
  );
}

export default BlogSection;
