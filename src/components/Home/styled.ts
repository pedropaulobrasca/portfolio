import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 8rem;

  margin-top: 10rem;
  transition: all 250ms;

  .lottieImage {
    width: 40rem;
    transition: all 250ms;
  }

  @media only screen and (max-width: 1180px) {
    flex-direction: column;
    gap: 4rem;

    margin-bottom: 5rem;
    margin-top: 5rem;

    .lottieImage {
      width: 20rem;
    }
  }
`;

export const LeftSide = styled.div`
  position: relative;

  span {
    font-size: 0.9rem;
    font-family: Saira;
    font-weight: 300;
    font-variant: small-caps;
    letter-spacing: 3.15px;
  }

  h1 {
    font-size: 2rem;
    font-family: Saira Stencil One;
    font-variant: small-caps;
  }

  p {
    font-size: 1rem;
    font-family: Saira;
    font-variant: small-caps;
  }

  @media only screen and (max-width: 1180px) {
    padding: 0 5rem;
  }
`;

export const RightSide = styled.div`
  position: relative;
`;

export const Background = styled.img`
  position: absolute;

  width: 100vw;
  height: 70vh;
`;
