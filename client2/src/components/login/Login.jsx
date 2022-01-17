import React, { useState } from "react";

import {
  LoginPicture,
  Wrapper,
  Text,
  ButtonWrapper,
  Button,
  InputField,
  Form,
} from "../styles/Login.styled";

import { GlobalBody } from "../styles/Generic.styled";

import logo from "./logo.png";

const Login = () => {
  const [pass, setPass] = useState();

  const logIn = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        pass: pass,
      }),
    };
    const res = await fetch(
      "http://www.localhost:5000/api/login/",
      requestOptions
    );
    const data = await res.json();
    console.log(data);
  };
  return (
    <>
      <GlobalBody />
      <Wrapper>
        <LoginPicture src={logo}></LoginPicture>
        <Text>Please log in before editing the blog.</Text>
        <Form>
          <InputField
            onChange={(e) => {
              setPass(e.target.value);
              console.log(pass);
            }}
            value={pass}
            type="password"
            placeholder="password"
          ></InputField>
          <Button onClick={(e) => logIn(e)}>Log In</Button>
        </Form>
      </Wrapper>
    </>
  );
};

export default Login;
