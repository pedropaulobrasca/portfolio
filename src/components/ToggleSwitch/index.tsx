import { ChangeEvent, useState } from "react";
import { Input, Label, Switch } from "./styled";

interface toggleSwitchProps {
  isTheme?: boolean;
  isLanguage?: boolean;
  label?: string;
  checked?: boolean;
}

export const ToggleSwitch = ({
  isTheme,
  isLanguage,
  label,
}: toggleSwitchProps) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  if (isLanguage) {
    checked ? (label = "PT-BR") : (label = "ENG");
  }

  if (isTheme) {
    checked ? (label = "LIGHT") : (label = "DARK");
  }

  return (
    <Label>
      <span>{label}</span>
      <Input checked={checked} type="checkbox" onChange={handleChange} />
      <Switch />
    </Label>
  );
};
