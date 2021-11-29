import React from "react";
import trash from "./trash-can.png";
import publish from "./publish1.png";
import {
  Container,
  PostName,
  PostDesc,
  SectionOne,
  SectionTwo,
  TrashBtn,
  PublishBtn,
} from "../styles/BlogPost.styled";

function BlogPost() {
  return (
    <>
      <Container post>
        <SectionOne>
          <PostName post>Ime posta</PostName>
          <PostDesc>DASDADAADOAKAPSADPAOPOASDAP</PostDesc>
        </SectionOne>
        <SectionTwo>
          <TrashBtn>
            <img src={trash}></img>
          </TrashBtn>
          <PublishBtn>
            <img></img>
          </PublishBtn>
        </SectionTwo>
      </Container>
    </>
  );
}

export default BlogPost;
