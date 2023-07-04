import { ToggleSwitch } from "../ToggleSwitch";
import { Container } from "./styled";

interface HeaderProps {
  onThemeToggle: () => void;
  theme: string; // Adicione a propriedade "theme"
}

export const Header = ({ onThemeToggle, theme }: HeaderProps) => {
  return (
    <Container>
      {/* <ToggleSwitch isLanguage /> */}
      <ToggleSwitch
        isTheme
        checked={theme === "dark"}
        onChange={onThemeToggle}
      />
    </Container>
  );
};
