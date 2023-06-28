import { ToggleSwitch } from "../ToggleSwitch";
import { Container } from "./styled";

export const Header = () => {
  return (
    <Container>
      <ToggleSwitch isLanguage />
      <ToggleSwitch isTheme />
    </Container>
  );
};
