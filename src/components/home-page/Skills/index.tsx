import { SkillBar } from "../SkillBar";
import { Container, SkillsGroup, Wrapper } from "./styled";

import { Player } from "@lottiefiles/react-lottie-player";

export const Skills = () => {
  return (
    <Container>
      <Wrapper>
        <SkillsGroup>
          <SkillBar percent={70} color="red" title="NodeJS" />
          <SkillBar percent={80} color="blue" title="Typescript" />
          <SkillBar percent={80} color="green" title="Javascript" />
          <SkillBar percent={60} color="yellow" title="SQL" />
          <SkillBar percent={50} color="orange" title="NextJS" />
          <SkillBar percent={40} color="pink" title="Angular" />
          <SkillBar percent={70} color="purple" title="Vite" />
        </SkillsGroup>
        <div>
          <Player
            src="https://assets10.lottiefiles.com/private_files/lf30_obidsi0t.json"
            autoplay
            loop
            className="lottieImage"
          />
        </div>
      </Wrapper>
    </Container>
  );
};
