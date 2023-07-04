import { ChangeEvent, useEffect, useState } from "react";
import { Input, Label, Switch } from "./styled";

interface ToggleSwitchProps {
  isTheme?: boolean;
  isLanguage?: boolean;
  label?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export const ToggleSwitch = ({
  isTheme,
  isLanguage,
  label,
  checked,
  onChange,
}: ToggleSwitchProps) => {
  const [internalChecked, setInternalChecked] = useState(checked || false);

  useEffect(() => {
    if (checked !== undefined) {
      setInternalChecked(checked);
    }
  }, [checked]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked;
    setInternalChecked(newChecked);

    if (onChange) {
      onChange(newChecked);
    }
  };

  if (isLanguage) {
    label = internalChecked ? "PT-BR" : "ENG";
  }

  if (isTheme) {
    label = internalChecked ? "LIGHT" : "DARK";
  }

  return (
    <Label>
      <span>{label}</span>
      <Input
        checked={internalChecked}
        type="checkbox"
        onChange={handleChange}
      />
      <Switch />
    </Label>
  );
};
