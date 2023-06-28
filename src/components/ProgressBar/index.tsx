import { Background, Progress, Container } from "./styled";

interface ProgressProps {
  percent: number;
  color: string;
}

export const ProgressBar = ({ percent, color }: ProgressProps) => {
  return (
    <Container>
      <Background />
      <Progress percent={percent} color={color} />
    </Container>
  );
};
