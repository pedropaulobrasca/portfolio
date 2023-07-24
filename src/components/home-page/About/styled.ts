import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  margin-top: 10rem;

  @media only screen and (max-width: 1180px) {
    margin-top: 5rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-around;

  gap: 2rem;

  @media only screen and (max-width: 1180px) {
    flex-direction: column;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;

  gap: 4rem;

  div {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    p {
      text-align: center;
      font-size: 1.4rem;
      font-family: Roboto;

      @media only screen and (max-width: 1180px) {
        font-size: 1rem;
      }
    }
  }
`;

export const Number = styled.span`
  color: #4328e9;
  font-size: 4rem;
  font-family: Saira Stencil One;

  @media only screen and (max-width: 1180px) {
    font-size: 2rem;
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 640px;

  p {
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 1180px) {
    max-width: 100%;
    margin: 0 5rem;

    p {
      text-align: justify;

    }
  }
`;
