import styled from "styled-components";

export const Container = styled.div`
  padding: 5px;
  // margin-top: 20px;
  width: 80vw;
  min-height: 140px;
  // margin-left: auto;
  // margin-right: auto;
  background-color: ${(props) =>
    props.post == "Posts" ? "#dfd3c3" : "#D0C5B6"};
  border: 5px solid
    ${(props) => (props.post == "Posts" ? "#c7b198" : "#988673")};
  font-weight: 300;
  display: flex;
  cursor: pointer;
`;

export const PostName = styled.p`
  font-size: 35px;
  margin-left: 4%;
  // width: 20%;
  // overflow-wrap: break-word;
  margin-top: 10px;
  color: ${(props) => (props.post == "Posts" ? "#596e79" : "#000000")};
`;

export const PostDesc = styled.p`
  font-size: 25px;
  margin-left: 4%;
  width: 90%;
  overflow-wrap: break-word;
  margin-top: 25px;
  color: ${(props) => (props.post == "Posts" ? "#596e79" : "#000000")};
`;

export const SectionOne = styled.section`
  flex: 4;
`;

export const SectionTwo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 60px;
`;

export const TrashBtn = styled.button`
  width: 40px;
  height: 40px;
  background-color: #c7b198;
  border: none;
  margin: 0;
  cursor: pointer;
`;

export const PublishBtn = styled.button`
  width: 40px;
  height: 40px;
  display: ${(props) => (props.post == "Posts" ? "none" : "")};
  background-color: #c7b198;
  border: none;
  cursor: pointer;
`;

export const MoveToDraftsBtn = styled.button`
  width: 40px;
  height: 40px;
  display: ${(props) => (props.post == "Posts" ? "" : "none")};
  background-color: #c7b198;
  border: none;
  cursor: pointer;
`;
