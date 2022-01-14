import React from "react";
import { Container, Plus } from "../styles/AddPostButton.styled";
import plus from "./plus.png";

function AddPostButton() {
  return (
    <>
      <a href="/edit">
        <Container>
          <Plus src={plus}></Plus>
        </Container>
      </a>
    </>
  );
}

export default AddPostButton;
