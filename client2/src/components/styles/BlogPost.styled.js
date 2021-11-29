import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  height: 150px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${(props) => (props.post ? "#dfd3c3" : "#D0C5B6")};
  border: 5px solid ${(props) => (props.post ? "#c7b198" : "#988673")};
  font-weight: 300;
  display: flex;
`;

export const PostName = styled.p`
  font-size: 60px;
  margin-left: 4%;
  margin-top: 0px;
  color: ${(props) => (props.post ? "#596e79" : "black")};
`;

export const PostDesc = styled.p`
  font-size: 36px;
  margin-left: 3%;
  margin-top: -40px;
`;

export const SectionOne = styled.section`
  flex: 3;
`;

export const SectionTwo = styled.section`
  flex: 1;
`;

export const TrashBtn = styled.button`
  width: 40px;
  height: 40px;

  background-color: #c7b198;
  border: none;
`;

export const PublishBtn = styled.button`
  width: 40px;
  height: 40px;
  background-color: #c7b198;
  border: none;
`;

export const ImgPublish = styled.img``;
