import { styled } from "styled-components";

import skillsPerson from "../../assets/skills_person.svg";
import { useState } from "react";
import { ProgressBar } from "../ProgressBar";

const Container = styled.div`
  margin-top: 10rem;
`;

const Wrapper = styled.div`
  display: flex;

  justify-content: space-around;
  align-items: center;
`;

export const Skills = () => {
  const [percent, setPercent] = useState(50);

  return (
    <Container>
      <Wrapper>
        <div>
          <ProgressBar percent={90} color="red" />
          <ProgressBar percent={60} color="blue" />
        </div>
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
