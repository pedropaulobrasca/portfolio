import { ThemeProvider, styled } from "styled-components";
import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { GlobalStyles, darkTheme, lightTheme } from "./Themes";
import { useDarkMode } from "./hooks/useDarkMode";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  max-width: 1440px;
`;

function App() {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme == "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <Container>
        <Wrapper>
          <Header onThemeToggle={themeToggler} theme={theme} />
          <Home />
          <About />
          <Skills />
          <Experience />
          <Footer />
        </Wrapper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
