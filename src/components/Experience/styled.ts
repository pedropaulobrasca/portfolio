import { styled } from "styled-components";
import { AnimatedGradient } from "../AnimatedTextTitle";

export const Container = styled.div`
  margin-top: 10rem;
  position: relative;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Image = styled.img``;

export const ExperienceGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
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
