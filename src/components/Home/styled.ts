import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  margin-top: 10rem;
`;

export const LeftSide = styled.div`
  position: relative;
  float: 1;

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
`;

export const RightSide = styled.div`
  position: relative;
  float: 1;
`;

export const Background = styled.img`
  position: fixed;
  float: 0;

  width: 100vw;
  height: 100vh;
`;
