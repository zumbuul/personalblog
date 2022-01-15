import styled from "styled-components";

export const Text = styled.h1`
  font-size: clamp(2rem, 5vw, 4rem);
  color: #596e79;
  font-weight: 300;
`;

export const LogOut = styled.button`
  font-size: clamp(0.5rem, 4vw, 2.5rem);
  padding: 10px;
  background-color: ${(props) => props.backColor};
  border: 2px solid #c7b198;
  font-family: "Ubuntu", sans-serif;
  font-weight: 300;
  color: #596e79;
  cursor: pointer;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
  justify-content: space-between;
  padding: 30px;
  margin-top: 10px;
`;
