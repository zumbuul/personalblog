import React from "react";
import { GlobalBody } from "../styles/Generic.styled";

import Header from "./Header";
import BlogSection from "./BlogSection";

function Homepage() {
  return (
    <>
      <GlobalBody />
      <Header />
      <BlogSection text="Posts" />
    </>
  );
}

export default Homepage;
