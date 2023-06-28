import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin-top: 10rem;
`;

export const Wrapper = styled.div`
  display: flex;

  justify-content: space-around;
  align-items: center;
`;

export const SkillsGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
`;
