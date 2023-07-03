import { Container, Wrapper, LeftSide, RightSide, Background } from "./styled";

import lottieImage from "../../assets/programming.json";
import backgroundDev from "../../assets/developer_background.svg";
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
      <Player
        src="https://assets3.lottiefiles.com/packages/lf20_hgiemefu.json"
        autoplay
        loop
        className="scrollDown"
        style={{ width: "8rem" }}
      />
    </Container>
  );
};
