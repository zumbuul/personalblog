import React from "react";

import {
  LoginPicture,
  Wrapper,
  Text,
  ButtonWrapper,
  Button,
  InputField,
} from "../styles/Login.styled";

import { GlobalBody } from "../styles/Generic.styled";

import logo from "./logo.png";

const Login = () => {
  return (
    <>
      <GlobalBody />
      <Wrapper>
        <LoginPicture src={logo}></LoginPicture>
        <Text>Please log in before editing the blog.</Text>
        <form method="post" action="/">
<<<<<<< HEAD
=======
          <InputField type="text" placeholder="username"></InputField>
>>>>>>> 0894be10f42965df5c365efb186ee0f2bfbdbeeb
          <InputField type="password" placeholder="password"></InputField>
          <Button>Log In</Button>
        </form>
      </Wrapper>
    </>
  );
};

export default Login;
