import { AnimatedGradientTitle } from "../AnimatedTextTitle";
import { Background, Progress, Container, SkillTitle } from "./styled";

interface ProgressProps {
  percent: number;
  color: string;
  title: string;
}

export const SkillBar = ({ percent, color, title }: ProgressProps) => {
  return (
    <div>
      <AnimatedGradientTitle>
        <SkillTitle>{title}</SkillTitle>
      </AnimatedGradientTitle>
      <Container>
        <Background />
        <Progress percent={percent} color={color} />
      </Container>
    </div>
  );
};
