import { ToggleSwitch } from "../ToggleSwitch";
import { Container } from "./styled";

interface HeaderProps {
  onThemeToggle: () => void;
  theme: string;
}

export const Header = ({ onThemeToggle, theme }: HeaderProps) => {
  return (
    <Container>
      <div></div>
      <ToggleSwitch
        isTheme
        checked={theme === "dark"}
        onChange={onThemeToggle}
      />
    </Container>
  );
};
