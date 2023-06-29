import {
  Container,
  Wrapper,
  LeftSide,
  RightSide,
  Background,
  Scroll,
} from "./styled";

import lottieImage from "../../assets/programming.json";
import backgroundDev from "../../assets/developer_background.svg";
import scroll from "../../assets/scroll.svg";
import { Player } from "@lottiefiles/react-lottie-player";

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
          <Player src={lottieImage} autoplay loop className="lottieImage" />
        </RightSide>
      </Wrapper>
      <Scroll src={scroll} />
    </Container>
  );
};
