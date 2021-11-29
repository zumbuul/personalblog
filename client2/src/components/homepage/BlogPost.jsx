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
  ImgPublish,
} from "../styles/BlogPost.styled";

function BlogPost(props) {
  return (
    <>
      <Container post={props.type}>
        <SectionOne>
          <PostName post={props.type}>Ime posta</PostName>
          <PostDesc post={props.type}>DASDADAADOAKAPSADPAOPOASDAP</PostDesc>
        </SectionOne>
        <SectionTwo>
          <PublishBtn post={props.type}>
            <ImgPublish src={publish} />
          </PublishBtn>
          <TrashBtn>
            <img src={trash} />
          </TrashBtn>
        </SectionTwo>
      </Container>
    </>
  );
}

export default BlogPost;
