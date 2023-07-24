import { AnimatedGradientTitle } from "../AnimatedTextTitle";

import roadMap from "../../assets/roadmap.svg";
import {
  Container,
  Exp,
  ExpBar,
  ExpContent,
  ExperienceGroup,
  Image,
  Wrapper,
} from "./styled";

export const Experience = () => {
  return (
    <Container>
      <Wrapper>
        <Image
          src={roadMap}
          alt="Uma estrada com um carrinho para demonstrar o caminho de experiencias"
        />
        <ExperienceGroup>
          <Exp>
            <ExpBar />
            <ExpContent>
              <AnimatedGradientTitle>Jun 2022 - Presente</AnimatedGradientTitle>
              <h2>Tinnova</h2>
              <p>Desenvolvedor FullStack</p>
            </ExpContent>
          </Exp>

          <Exp>
            <ExpBar />
            <ExpContent>
              <AnimatedGradientTitle>Mar 2021 - Jun 2022</AnimatedGradientTitle>
              <h2>B2ML Sistemas</h2>
              <p>Desenvolvedor FullStack</p>
            </ExpContent>
          </Exp>

          <Exp>
            <ExpBar />
            <ExpContent>
              <AnimatedGradientTitle>Fev 2020 - Mar 2021</AnimatedGradientTitle>
              <h2>Thompson Management Horizons</h2>
              <p>Desenvolvedor FullStack</p>
            </ExpContent>
          </Exp>

          <Exp>
            <ExpBar />
            <ExpContent>
              <AnimatedGradientTitle>Dez 2019 - Fev 2020</AnimatedGradientTitle>
              <h2>Virtua Brasil</h2>
              <p>Desenvolvedor FullStack</p>
            </ExpContent>
          </Exp>
        </ExperienceGroup>
      </Wrapper>
    </Container>
  );
};
