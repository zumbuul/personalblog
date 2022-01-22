import React, { useEffect, useState } from "react";
import { GlobalBody } from "../styles/Generic.styled";
import { Redirect } from "react-router-dom";

import Header from "./Header";
import BlogSection from "./BlogSection";
import AddPostButton from "./AddPostButton";

function Homepage() {
  const [token, setToken] = useState(undefined);

  useEffect(async () => {
    fetch("http://www.localhost:5000/api/login/")
      .then((res) => res.json())
      .then((data) => {
        setToken(data.token);
        // console.log("token " + token);
      });
  }, []);
  // console.log("token " + token);
  return (
    <div>
      {token !== null ? (
        <>
          <GlobalBody />
          <Header />
          <BlogSection text="Posts" />
          <BlogSection text="Drafts" />
          <AddPostButton />
        </>
      ) : (
        <>
          <Redirect to="/login" />
        </>
      )}
    </div>
  );
}

export default Homepage;
