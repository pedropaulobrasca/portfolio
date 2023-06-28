import { styled } from "styled-components";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Skills } from "./components/Skills";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
`;

function App() {
  return (
    <Container>
      <Wrapper>
        <Header />
        <Home />
        <About />
        <Skills />
      </Wrapper>
    </Container>
  );
}

export default App;
