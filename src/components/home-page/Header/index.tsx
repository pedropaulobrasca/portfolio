import { Link } from "react-router-dom";
import { ToggleSwitch } from "../ToggleSwitch";
import { Container } from "./styled";

interface HeaderProps {
  onThemeToggle: () => void;
  theme: string;
}

export const Header = ({ onThemeToggle, theme }: HeaderProps) => {
  return (
    <Container>
      <Link to="/challenges">.asdasdasd</Link>
      {/* <ToggleSwitch isLanguage /> */}
      <ToggleSwitch
        isTheme
        checked={theme === "dark"}
        onChange={onThemeToggle}
      />
    </Container>
  );
};
