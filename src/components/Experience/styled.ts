import { styled } from "styled-components";
import { AnimatedGradient } from "../AnimatedTextTitle";

export const Container = styled.div`
  margin-top: 10rem;
  position: relative;

  @media only screen and (max-width: 1180px) {
    margin-top: 5rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media only screen and (max-width: 1180px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  @media only screen and (max-width: 1180px) {
    width: 20rem;
    margin-bottom: 5rem;
  }
`;

export const ExperienceGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media only screen and (max-width: 1180px) {
    margin: 0 2rem;

    display: grid;

    grid-template-columns: 1fr 1fr;

    h1 {
      font-size: 1.2rem;
    }

    h2 {
      font-size: 1rem;
    }
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Exp = styled.div`
  display: flex;
  align-items: center;
`;

export const ExpContent = styled.div``;

export const ExpBar = styled.div`
  height: 100px;
  width: 2px;
  margin-right: 20px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #f35626;
  }

  &::before {
    top: -5px;
    left: -4px;
  }

  &::after {
    bottom: -5px;
    left: -4px;
  }

  ${AnimatedGradient}
`;
