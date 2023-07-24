import { ThemeProvider, styled } from "styled-components";
import { useDarkMode } from "../hooks/useDarkMode";
import { GlobalStyles, darkTheme, lightTheme } from "../Themes";
import { Header } from "../components/home-page/Header";
import { Home } from "../components/home-page/Home";
import { About } from "../components/home-page/About";
import { Skills } from "../components/home-page/Skills";
import { Experience } from "../components/home-page/Experience";
import { Footer } from "../components/home-page/Footer";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  max-width: 1440px;
`;

function HomePage() {
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

export default HomePage;
