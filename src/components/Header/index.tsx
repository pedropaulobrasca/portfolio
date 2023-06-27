import { ToggleSwitch } from "../ToggleSwitch";
import { Container } from "./styled";

function Header() {
  return (
    <Container>
      <ToggleSwitch isLanguage />
      <ToggleSwitch isTheme />
    </Container>
  );
}

export default Header;
