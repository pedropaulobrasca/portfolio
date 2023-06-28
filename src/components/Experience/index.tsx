import { styled } from "styled-components";

import roadMap from "../../assets/roadmap.svg";
import { AnimatedGradient, AnimatedGradientTitle } from "../AnimatedTextTitle";

export const Container = styled.div`
  margin-top: 10rem;
  position: relative;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Image = styled.img``;

export const ExperienceGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Exp = styled.div`
  display: flex;
  align-items: center;
`;

export const ExpContent = styled.div``;

export const ExpBar = styled.div`
  height: 100px;
  width: 2px;
  margin-right: 20px;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #f35626;
  }

  &::before {
    top: -5px;
    left: -4px;
  }

  &::after {
    bottom: -5px;
    left: -4px;
  }

  ${AnimatedGradient}
`;

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
