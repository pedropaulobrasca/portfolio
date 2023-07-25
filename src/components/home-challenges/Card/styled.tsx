import { styled } from "styled-components";

export const Card = styled.a`
  width: 20rem;
  border-radius: 0.2rem;
  box-shadow: 0 0 0.5rem 0.1rem rgba(0, 0, 0, 0.2);

  text-decoration: none;
  color: #000;
`;

export const CardImage = styled.img`
  width: 100%;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 10px;
`;

export const CardTitle = styled.strong`
  font-size: 1.5rem;
`;

export const CardDescription = styled.p`
  font-size: 1rem;
`;
