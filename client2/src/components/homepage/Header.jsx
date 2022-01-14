import React from "react";
import { Text, LogOut, Container } from "../styles/Header.styled.js";

function Header() {
  return (
    <Container>
      <Text>Hello, Admin!</Text>
      <LogOut>Log out</LogOut>
    </Container>
  );
}

export default Header;
