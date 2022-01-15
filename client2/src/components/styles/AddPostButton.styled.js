import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 50%;
  right: 20px;
  background-color: #c7b198;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  cursor: pointer;
  @media (max-width: 1275px) {
    position: static;
  }
`;

export const Plus = styled.img`
  height: 40px;
`;

export const Wrap = styled.div`
  @media (max-width: 1275px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hiden;
  }
`;
