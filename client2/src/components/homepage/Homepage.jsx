import React from "react";
import { GlobalBody } from "../styles/Generic.styled";

import Header from "./Header";
import BlogSection from "./BlogSection";
import AddPostButton from "./AddPostButton";

function Homepage() {
  return (
    <>
      <GlobalBody />
      <Header />
      <BlogSection text="Posts" />
      <BlogSection text="Drafts" />
      <AddPostButton />
    </>
  );
}

export default Homepage;
