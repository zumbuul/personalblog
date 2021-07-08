import React from "react";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

const Login = () => {
  localStorage.paja = "lol";
  return localStorage.length === 0 ? <LoggedIn /> : <LoggedOut />;
};

export default Login;
