import React from "react";
import { Container, Plus, Wrap } from "../styles/AddPostButton.styled";
import plus from "./plus.png";

function AddPostButton() {
  return (
    <>
      <Wrap>
        <a href="/edit">
          <Container>
            <Plus src={plus}></Plus>
          </Container>
        </a>
      </Wrap>
    </>
  );
}

export default AddPostButton;
