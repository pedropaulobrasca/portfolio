import { styled } from "styled-components";

interface ProgressProps {
  percent: number;
  color: string;
}

export const Container = styled.div`
  position: relative;
  height: 1.5rem;
  width: 270px;
`;

export const BaseBox = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 12px;
  transition: width 10s ease-in-out;
`;

export const Background = styled(BaseBox)`
  outline: 3px solid black;
  width: 100%;
`;

export const Progress = styled(BaseBox)<ProgressProps>`
  background: ${({ color }) => color};
  width: ${({ percent }) => percent}%;
`;
