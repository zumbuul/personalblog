import React from "react";
import { Container, Plus } from "../styles/AddPostButton.styled";
import plus from "./plus.png";

function AddPostButton() {
  return (
    <>
      <Container>
        <Plus src={plus}></Plus>
      </Container>
    </>
  );
}

export default AddPostButton;
