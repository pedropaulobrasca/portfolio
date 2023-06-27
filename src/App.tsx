import { styled } from "styled-components";
import Header from "./components/Header";

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
      </Wrapper>
    </Container>
  );
}

export default App;
