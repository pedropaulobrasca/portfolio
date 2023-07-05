import { styled } from "styled-components";

export const AlertContainer = styled.div<{ type: string }>`
  background-color: ${(props) =>
    props.type === "success" ? "#4caf50" : "#f44336"};
  color: #fff;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 10px;

  position: fixed;

  top: 30px;
  right: 30px;
`;
