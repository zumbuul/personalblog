import React from "react";
import { DateTime } from "luxon";
import "./css/post.css";

const IndividualPost = ({ posts }) => {
  console.log(DateTime.fromISO(posts.posts[0].createdAt));
  return (
    <div className="outerPostWrapper">
      {posts.posts.map((post, id) => (
        <a key={id} href={`post/${post._id}`}>
          <div className="innerPostWrapper">
            <h2 className="post-title">{post.title}</h2>
            <span></span>
            <p className="post-text">{`${post.text.substring(
              0,
              500
            )} [...]`}</p>
            {post.tags.length === 0 ? (
              <p className="no-tags">No Adequate Tags Found For This Post :(</p>
            ) : (
              <div className="nenad">
                {post.tags.map((tag) => (
                  <span className="post-tag">{tag.toUpperCase()}</span>
                ))}
              </div>
            )}
            <p className="post-date">
              {DateTime.fromISO(post.createdAt).toLocaleString(
                DateTime.DATE_HUGE
              )}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default IndividualPost;
