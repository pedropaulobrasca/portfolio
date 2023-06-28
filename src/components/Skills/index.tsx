import { styled } from "styled-components";

import skillsPerson from "../../assets/skills_person.svg";
import { useState } from "react";
import { SkillBar } from "../SkillBar";

const Container = styled.div`
  position: relative;
  margin-top: 10rem;
`;

const Wrapper = styled.div`
  display: flex;

  justify-content: space-around;
  align-items: center;
`;

const SkillsGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4rem;
`;

export const Skills = () => {
  const [percent, setPercent] = useState(50);

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
