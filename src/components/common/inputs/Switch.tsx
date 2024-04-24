import React from "react";
import { Switch as SwitchTM } from "tamagui";
import colors from "../../../theme/colors";

interface Props {
  value: boolean;
  onChange: () => void;
}

const Switch = ({ value, onChange }: Props) => {
  const color = value ? colors.primary : colors.lightPrimary;
  return (
    <SwitchTM
      checked={value}
      onPress={onChange}
      backgroundColor={color}
      borderColor={color}
    >
      <SwitchTM.Thumb animation="100ms" backgroundColor={colors.white} />
    </SwitchTM>
  );
};

export default Switch;
