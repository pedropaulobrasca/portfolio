import { ChangeEvent, useState } from "react";
import { Input, Label, Switch } from "./styled";

export const ToggleSwitch = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  };

  return (
    <Label>
      <span>{checked ? "Light" : "Dark"}</span>
      <Input checked={checked} type="checkbox" onChange={handleChange} />
      <Switch />
    </Label>
  );
};
