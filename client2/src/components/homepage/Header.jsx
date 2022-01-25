import React, { useEffect, useState } from "react";
import { Text, LogOut, Container } from "../styles/Header.styled.js";

function Header() {
  const [backColor, setBackColor] = useState(false);

  const hoverEffect = () => {
    setBackColor(!backColor);
  };

  const logout = async () => {
    const res = await fetch("http://www.localhost:5000/api/login/logout");
    const data = await res.json();

    window.location.replace("http://localhost:3000/login");
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
          onClick={logout}
        >
          Log out
        </LogOut>
      </a>
    </Container>
  );
}

export default Header;
