import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
  align-content: center;
  justify-content: space-between;

  margin-top: 40px;
  padding: 20px;

  @media only screen and (max-width: 1180px) {
    justify-content: center;
  }
`;