import React, { useEffect, useState } from "react";
import { GlobalBody } from "../styles/Generic.styled";
import { Redirect } from "react-router-dom";

import Header from "./Header";
import BlogSection from "./BlogSection";
import AddPostButton from "./AddPostButton";

function Homepage() {
  const [token, setToken] = useState("");
  let verifyToken = "";

  useEffect(() => {
    fetch("http://www.localhost:5000/api/login/")
      .then((res) => res.json())
      .then((data) => {
        setToken(data.token);
        verifyToken = token;
      });
  }, []);
  // console.log("token " + token);
  return (
    <div>
      {token !== null ? (
        <>
          <GlobalBody />
          <Header />
          <BlogSection token={token} text="Posts" />
          <BlogSection token={token} text="Drafts" />
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
