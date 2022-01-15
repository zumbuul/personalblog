import styled from "styled-components";

export const Text = styled.h1`
  font-size: clamp(0.5rem, 4vw, 2.5rem);
  color: #596e79;
  margin-left: 15%;
  font-weight: 300;
  margin-top: 10px;
`;

export const Section = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  row-gap: 20px;
`;
