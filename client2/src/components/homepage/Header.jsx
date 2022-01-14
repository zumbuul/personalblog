import React, { useEffect, useState } from "react";
import { Text, LogOut, Container } from "../styles/Header.styled.js";

function Header() {
  const [backColor, setBackColor] = useState(false);

  const hoverEffect = () => {
    setBackColor(!backColor);
  };
  // useEffect(() => {
  // }, [backColor])
  return (
    <Container>
      <Text>Hello, Admin!</Text>
      <a href="/login">
        <LogOut
          backColor={backColor ? "#c7b198" : "#dfd3c3"}
          onMouseLeave={hoverEffect}
          onMouseOver={hoverEffect}
        >
          Log out
        </LogOut>
      </a>
    </Container>
  );
}

export default Header;
