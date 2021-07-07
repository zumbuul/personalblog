import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchDataFromURL from "./utils/fetchAPI";
import style from "./css/ipost.module.css";
import { DateTime } from "luxon";
import PostCommentSection from "./PostCommentSection.jsx";

//Renders all comments

function commentSection(comment, idx) {
  console.log(comment);
  return (
    <div className={style.comment}>
      <div className={style.commentUpper} key={idx}>
        <div>
          <img
            className={style.image}
            src="https://image.flaticon.com/icons/png/512/4333/4333609.png"
          ></img>
        </div>
        <div className={style.commentContent}>
          <p className={style.author}>{comment.author}</p>
          <p className={style.commentDate}>
            {DateTime.fromISO(comment.dateAdded).toLocaleString(
              DateTime.DATE_HUGE
            )}
          </p>
        </div>
      </div>
      <div>
        <p className={style.commentText}>{comment.text}</p>
      </div>
    </div>
  );
}

//Renders the main content of the post

function postSection(post) {
  return (
    <div>
      <p className={style.title}>{post.title}</p>
      <div className={style.main}>
        <span className={style.date}>
          {DateTime.fromISO(post.createdAt).toLocaleString(DateTime.DATE_HUGE)}
        </span>
        {post.tags.map((tag) => (
          <span className={style.tag}>{tag.toUpperCase()}</span>
        ))}
        <p className={style.text}>{post.text}</p>
      </div>
    </div>
  );
}

const PostComponent = () => {
  const [postData, setPostData] = useState(undefined);
  const [formName, setFormName] = useState("");
  const [formText, setFormText] = useState("");
  const { id } = useParams();

  //Renders the "post your comment" section

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
          <button>Comment</button>
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

  async function handleFormSubmit(event) {
    event.preventDefault();

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
    <div>
      <div>
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
                {postData.comments.map((comment, id) =>
                  commentSection(comment, id)
                )}
                {createCommentSection()}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PostComponent;
