import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchDataFromURL from "./utils/fetchAPI";
import "./css/spost.css";
import PostCommentSection from "./PostCommentSection.jsx";

function commentSection(comment, idx) {
  return (
    <div className="comment" key={idx}>
      <span className="color">
        <b>{comment.author}</b> <u>{comment.text}</u>
      </span>
      <p className="color">{comment.dateAdded}</p>
    </div>
  );
}

function postSection(post) {
  return (
    <div>
      <p>{post.title}</p>
      <p>{post.text}</p>
      <p>{post.createdAt}</p>
    </div>
  );
}

const PostComponent = () => {
  const [postData, setPostData] = useState(undefined);
  const [formName, setFormName] = useState("");
  const [formText, setFormText] = useState("");
  const { id } = useParams();

  function createCommentSection() {
    return (
      <div>
        <form onSubmit={handleFormSubmit}>
          <label for="name">
            What's your name?
            <input
              type="text"
              name="name"
              value={formName}
              onChange={handleFormChange}
            ></input>
          </label>
          <label for="commentText">
            <textarea
              name="commentText"
              value={formText}
              onChange={handleFormChange}
            ></textarea>
          </label>
          <input type="submit"></input>
        </form>
      </div>
    );
  }

  function handleFormChange(event) {
    event.target.name === "name"
      ? setFormName(event.target.value)
      : setFormText(event.target.value);
    console.log(formName, formText);
  }

  async function handleFormSubmit() {
    const payload = {
      name: formName,
      text: formText,
      commentedOn: id,
    };

    fetch("http://www.localhost:5000/api/comments/new", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  }

  async function fetchAPIDataAndStoreInState() {
    setPostData(
      await fetchDataFromURL(`http://www.localhost:5000/api/posts/${id}`)
    );
  }

  useEffect(() => {
    fetchAPIDataAndStoreInState();
  }, []);

  return (
    <div className="bg">
      <div className="bgd">
        {postData === undefined ? (
          <p>LOADING</p>
        ) : (
          <div>
            {postData.comments.length === 0 ? (
              <div>
                {postSection(postData)} {createCommentSection()} There are no
                comments to show :(
              </div>
            ) : (
              <div>
                {postSection(postData)}
                {createCommentSection()}
                {postData.comments.map((comment, id) =>
                  PostCommentSection(comment, id)
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostComponent;
