import React from "react";

const PostCommentSection = ({ comment, idx }) => {
  return (
    <div className="comment" key={idx}>
      <span className="color">
        <b>{comment.author}</b> <u>{comment.text}</u>
      </span>
      <p className="color">{comment.dateAdded}</p>
    </div>
  );
};

export default PostCommentSection;
