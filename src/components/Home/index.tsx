import { Container, Wrapper, LeftSide, RightSide, Background } from "./styled";

import personWithPc from "../../assets/person_with_pc.svg";
import backgroundDev from "../../assets/developer_background.svg";

export const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Background src={backgroundDev} />
        <LeftSide>
          <span>Pedro</span>
          <h1>Desenvolvedor Web FullStack</h1>
          <p>Transformando ideias em soluções digitais</p>
        </LeftSide>
        <RightSide>
          <img
            src={personWithPc}
            alt="Pessoa sentado em cima da mesa do computador"
          />
        </RightSide>
      </Wrapper>
    </Container>
  );
};
