import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin-top: 10rem;

  @media only screen and (max-width: 1180px) {
    margin-top: 5rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;

  justify-content: space-around;
  align-items: center;

  .lottieImage {
    width: 30rem;
  }

  @media only screen and (max-width: 1180px) {
    flex-direction: column-reverse;

    .lottieImage {
      width: 20rem;
    }
  }
`;

export const SkillsGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;

  @media only screen and (max-width: 1180px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;

    margin-top: 5rem;
  }

  @media only screen and (max-width: 930px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
