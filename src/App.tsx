import { styled } from "styled-components";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  max-width: 1440px;
`;

function App() {
  return (
    <Container>
      <Wrapper>
        <Header />
        <Home />
        <About />
        <Skills />
        <Experience />
        <Footer />
      </Wrapper>
    </Container>
  );
}

export default App;
