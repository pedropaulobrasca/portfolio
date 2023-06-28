import skillsPerson from "../../assets/skills_person.svg";
import { SkillBar } from "../SkillBar";
import { Container, SkillsGroup, Wrapper } from "./styled";

export const Skills = () => {
  return (
    <Container>
      <Wrapper>
        <SkillsGroup>
          <SkillBar percent={70} color="red" title="NodeJS" />
          <SkillBar percent={80} color="blue" title="Typescript" />
          <SkillBar percent={80} color="green" title="Javascript" />
          <SkillBar percent={60} color="yellow" title="SQL" />
          <SkillBar percent={40} color="orange" title="NextJS" />
          <SkillBar percent={70} color="pink" title="Angular" />
          <SkillBar percent={50} color="purple" title="Vite" />
        </SkillsGroup>
        <div>
          <img
            src={skillsPerson}
            alt="Pessoa apresentando as suas habilidades"
          />
        </div>
      </Wrapper>
    </Container>
  );
};
