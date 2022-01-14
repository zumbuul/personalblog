import React, { useEffect, useState } from "react";
import { Text, Section } from "../styles/BlogSection.styled";

import BlogPost from "./BlogPost";

function BlogSection(props) {
  return (
    <>
      <Text>{props.text}</Text>
      <Section>
        <BlogPost type={props.text} />
      </Section>
    </>
  );
}

export default BlogSection;
