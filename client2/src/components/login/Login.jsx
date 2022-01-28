import React, { useState, useEffect } from "react";

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
  localStorage.setItem("token", null);
  const [pass, setPass] = useState();

  const logIn = async (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        pass: pass,
      }),
    };
    const res = await fetch(
      "http://www.localhost:5000/api/login/",
      requestOptions
    );
    const data = await res.json();
    console.log(data.token);
    if (data.auth == true) {
      localStorage.setItem("token", data.token);
      console.log(data.auth);
      window.location.replace("http://localhost:3000/homepage");
    }
  };
  useEffect(() => {
    localStorage.setItem("token", null);
  }, []);
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
