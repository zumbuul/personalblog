import styled from "styled-components";

export const Container = styled.div`
  padding: 5px;
  margin-top: 20px;
  width: 80%;
  height: 150px;
  margin-left: auto;
  margin-right: auto;
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
  margin-top: 0px;
  color: ${(props) => (props.post == "Posts" ? "#596e79" : "#000000")};
`;

export const PostDesc = styled.p`
  font-size: 25px;
  margin-left: 4%;
  // margin-top: 60px;
  color: ${(props) => (props.post == "Posts" ? "#596e79" : "#000000")};
`;

export const SectionOne = styled.section`
  flex: 4;
`;

export const SectionTwo = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const TrashBtn = styled.button`
  width: 40px;
  height: 40px;
  background-color: #c7b198;
  border: none;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

export const PublishBtn = styled.button`
  width: 40px;
  height: 40px;
  display: ${(props) => (props.post == "Posts" ? "none" : "")};
  background-color: #c7b198;
  border: none;
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);\
  cursor: pointer;
`;

export const ImgPublish = styled.img`
  padding: 0;
  transform: translateY(20%);
  transform: translateX(-4%);
`;
