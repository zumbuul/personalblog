import React from "react";
import style from "../../styles/login/login.module.css";

const LoggedOut = () => {
  return (
    <div className={style.main}>
      <img
        className={style.image}
        src="https://image.flaticon.com/icons/png/512/1946/1946429.png"
      ></img>
      <h1 className={style.title}>
        Please enter the passcode to access editing of the blog.
      </h1>
      <form className={style.form}>
        <input className={style.input} type="password"></input>
        <button className={style.button}>Submit</button>
      </form>
    </div>
  );
};

export default LoggedOut;
